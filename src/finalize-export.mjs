import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { contentPages, legacyPages, staticPages } from './site.mjs';

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

export async function finalizeExport({ output, basePath, pagesBuild }) {
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
    await writeFile(join(output, '_redirects'), routes.join('\n') + '\n');
  }
  return { pageCount: contentPages.length, redirectCount: legacyPages.length };
}
