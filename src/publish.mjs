import { cp, mkdir, mkdtemp, realpath, rename, rm, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { aliasesFor, pathFor, relativeHref, screenColors } from './routes.mjs';

const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#242526"/><rect x="10" y="11" width="20" height="18" rx="2.5" fill="none" stroke="white" stroke-width="2"/><path d="M16 17h8v6h-8z" fill="none" stroke="white" stroke-width="2"/></svg>';

function escape(text) {
  return text.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function redirectPage({ locale, path, target, label }, siteRoot) {
  const href = escape(relativeHref(path, target));
  return `<!doctype html>
<html lang="${locale.lang}">
<head>
<meta charset="utf-8">
<title>${escape(label)} | Telapreta.cc</title>
<link rel="canonical" href="${escape(siteRoot + target)}">
<meta http-equiv="refresh" content="0;url=${href}">
<script src="${relativeHref(path, '/assets/redirect.js')}" defer></script>
</head>
<body><a href="${href}" data-redirect>${escape(label)}</a></body>
</html>\n`;
}

function fallbackPage(redirects, basePath, home) {
  const routes = Object.fromEntries(redirects.map(({ path, target }) => [basePath + path, basePath + target]));
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page not found | Telapreta.cc</title>
<script src="${escape(basePath + '/assets/redirect.js')}" defer></script>
</head>
<body data-legacy-routes="${escape(JSON.stringify(routes))}">
<h1>Page not found</h1>
<p><a href="${escape(basePath + home)}">Telapreta.cc</a></p>
</body>
</html>\n`;
}

async function writePage(destination, path, html) {
  const directory = join(destination, path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), html);
}

async function existingPath(path) {
  try {
    return await realpath(path);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    return null;
  }
}

export async function publishSite({ outputDir, assetsDir, languages, siteRoot, pagesBuild, previewUrl, feedbackUrl, render }) {
  const pages = languages.flatMap((locale) => screenColors.map((color) => {
    const path = pathFor(locale, color.id);
    return { path, html: render(locale, color, { path, siteRoot, previewUrl, feedbackUrl }) };
  }));
  const redirects = languages.flatMap((locale) => aliasesFor(locale).map(([path, colorId]) => ({
    locale,
    path,
    target: pathFor(locale, colorId),
    label: locale.colors[screenColors.findIndex((color) => color.id === colorId)]
  })));
  const basePath = new URL(siteRoot).pathname.replace(/\/+$/, '');

  const workspace = await realpath(new URL('../', import.meta.url));
  const parent = await realpath(dirname(resolve(outputDir)));
  const output = join(parent, basename(resolve(outputDir)));
  const actualOutput = await existingPath(output);
  if (relative(workspace, parent) || !['docs', 'dist'].includes(basename(output)) ||
      (actualOutput && relative(output, actualOutput))) {
    throw new Error(`Unexpected build output directory: ${output}`);
  }

  const temporary = await realpath(await mkdtemp(join(parent, '.telapreta-build-')));
  const staging = join(temporary, 'site');
  const previous = join(temporary, 'previous');
  let keepPrevious = false;
  try {
    await mkdir(staging);
    await cp(assetsDir, join(staging, 'assets'), { recursive: true });
    await writeFile(join(staging, 'assets', 'icon.svg'), icon);
    for (const { path, html } of pages) await writePage(staging, path, html);

    const fallback = [];
    for (const redirect of redirects) {
      // Netlify's redirect rules distinguish case, but its deployed files can collide.
      if (!pagesBuild && redirect.path.toLowerCase() === redirect.target.toLowerCase()) continue;
      const directory = join(staging, redirect.path.slice(1));
      const targetDirectory = join(staging, redirect.target.slice(1));
      const existing = await existingPath(directory);
      // A case-only alias may resolve to its canonical page on Windows.
      if (existing && !relative(existing, targetDirectory)) {
        fallback.push(redirect);
        continue;
      }
      await writePage(staging, redirect.path, redirectPage(redirect, siteRoot));
    }
    if (fallback.length) {
      const home = pathFor(languages.find((locale) => locale.base === '/'), 'black');
      await writeFile(join(staging, '404.html'), fallbackPage(fallback, basePath, home));
    }
    if (pagesBuild) {
      await writeFile(join(staging, '.nojekyll'), '');
    } else {
      const rules = redirects.map(({ path, target }) => `${basePath + path} ${basePath + target} 301!`);
      await writeFile(join(staging, '_redirects'), rules.join('\n') + '\n');
    }

    const robots = previewUrl ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nSitemap: ${siteRoot}/sitemap.xml\n`;
    await writeFile(join(staging, 'robots.txt'), robots);
    if (!previewUrl) {
      const urls = pages.map(({ path }) => `  <url><loc>${escape(siteRoot + path)}</loc></url>`).join('\n');
      await writeFile(join(staging, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
    }

    if (actualOutput) {
      await rename(output, previous);
      keepPrevious = true;
    }
    try {
      await rename(staging, output);
      keepPrevious = false;
    } catch (error) {
      if (keepPrevious) {
        await rename(previous, output);
        keepPrevious = false;
      }
      throw error;
    }
  } finally {
    if (!keepPrevious) await rm(temporary, { recursive: true, force: true });
  }

  return { pageCount: pages.length, aliasCount: redirects.length };
}
