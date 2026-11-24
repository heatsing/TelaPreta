import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { contentPages, languageAlternates, legacyPages, staticPages } from './site.mjs';

const bootstrapDirectory = '_next/static/telapreta';
const scriptTags = /<script\b((?:"[^"]*"|'[^']*'|[^'">])*)>([\s\S]*?)<\/script\s*>/gi;
const scriptTypes = new Set(['', 'text/javascript', 'application/javascript', 'module']);

async function listHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listHtml(path));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

function externalizeScripts(html, basePath, bootstraps) {
  return html.replace(scriptTags, (tag, attributes, source) => {
    if (!source.trim() || /(?:^|\s)src\s*=/i.test(attributes)) return tag;
    const type = attributes.match(/(?:^|\s)type\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const scriptType = (type?.[1] ?? type?.[2] ?? type?.[3] ?? '').toLowerCase();
    if (!scriptTypes.has(scriptType)) return tag;

    const filename = `${createHash('sha256').update(source).digest('hex')}.js`;
    bootstraps.set(filename, source);
    // The generated classic scripts depend on their order in the document.
    const blockingAttributes = attributes.replace(/\s+(?:async|defer)(?=\s|$)/gi, '');
    return `<script${blockingAttributes} src="${basePath}/${bootstrapDirectory}/${filename}"></script>`;
  });
}

function netlifyHeaders(siteRoot, basePath) {
  const site = new URL(siteRoot);
  const origins = new Set([site.origin]);
  if (site.hostname === 'telapreta.cc') origins.add('https://www.telapreta.cc');
  if (process.env.NETLIFY === 'true') {
    for (const value of [process.env.DEPLOY_URL, process.env.DEPLOY_PRIME_URL]) {
      if (value) origins.add(new URL(value).origin);
    }
    const { SITE_NAME, BRANCH } = process.env;
    if (/^[a-z0-9-]+$/.test(SITE_NAME ?? '')) {
      origins.add(`https://${SITE_NAME}.netlify.app`);
      if (/^[a-z0-9-]+$/.test(BRANCH ?? '')) origins.add(`https://${BRANCH}--${SITE_NAME}.netlify.app`);
    }
  }
  // The host-injected Netlify HUD is outside the directories that serve our scripts.
  const scripts = [...origins].flatMap((origin) => [`${origin}${basePath}/assets/`, `${origin}${basePath}/_next/static/`]);
  scripts.push('https://www.googletagmanager.com');
  return `/*\n  Content-Security-Policy: script-src ${scripts.join(' ')}\n`;
}

function verifyMetadata(pages, output, siteRoot, sitemap, previewBuild) {
  const contents = new Map(pages.map(({ path, original }) => [path, original]));
  const canonicals = new Set(contentPages.map(({ path }) => siteRoot + path));
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((entry) => entry[1]);
  if (!previewBuild && (sitemapUrls.length !== canonicals.size || new Set(sitemapUrls).size !== canonicals.size || sitemapUrls.some((url) => !canonicals.has(url)))) {
    throw new Error('Sitemap and canonical routes do not match');
  }

  for (const page of contentPages) {
    const html = contents.get(join(output, page.path.slice(1), 'index.html'));
    if (!html.includes(`<link rel="canonical" href="${siteRoot + page.path}"`)) {
      throw new Error(`Invalid canonical for ${page.path}`);
    }
    const links = [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi)];
    const expected = languageAlternates(page, siteRoot) ?? {};
    if (links.length !== Object.keys(expected).length || new Set(links.map(([, lang]) => lang)).size !== links.length || links.some(([, lang, url]) => expected[lang] !== url || !canonicals.has(url))) {
      throw new Error(`Invalid language alternates for ${page.path}`);
    }
  }
}

export async function finalizeExport({ output, basePath, pagesBuild, previewBuild, siteRoot }) {
  const files = await listHtml(output);
  const exportedPaths = new Set(files);
  for (const { path } of staticPages) {
    if (!exportedPaths.has(join(output, path.slice(1), 'index.html'))) {
      throw new Error(`Next.js did not export ${path}`);
    }
  }

  const bootstraps = new Map();
  const pages = await Promise.all(files.map(async (path) => {
    const original = await readFile(path, 'utf8');
    return { path, original, html: externalizeScripts(original, basePath, bootstraps) };
  }));
  verifyMetadata(pages, output, siteRoot, await readFile(join(output, 'sitemap.xml'), 'utf8'), previewBuild);

  if (bootstraps.size) {
    const directory = join(output, bootstrapDirectory);
    await mkdir(directory, { recursive: true });
    await Promise.all([...bootstraps].map(([filename, source]) => writeFile(join(directory, filename), source)));
    await Promise.all(pages.filter(({ original, html }) => original !== html).map(({ path, html }) => writeFile(path, html)));
  }

  if (pagesBuild) {
    await writeFile(join(output, '.nojekyll'), '');
  } else {
    // Netlify keeps case-sensitive rules even though mixed-case files can collide.
    const routes = legacyPages.map(({ path, target }) => `${basePath + path} ${basePath + target} 301!`);
    const directoryPages = [...contentPages, ...legacyPages];
    for (const { path, target = path } of directoryPages) {
      routes.push(`${basePath + path}index.html ${basePath + target} 301!`);
    }
    await writeFile(join(output, '_redirects'), routes.join('\n') + '\n');
    await writeFile(join(output, '_headers'), netlifyHeaders(siteRoot, basePath));
  }
  return { pageCount: contentPages.length, redirectCount: legacyPages.length };
}
