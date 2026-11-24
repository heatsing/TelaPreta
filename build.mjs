import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { locales } from './src/locales.mjs';
import { navigationLabels, renderSceneGallery } from './src/scenes.mjs';

const pagesBuild = process.argv[2] === '--pages';
const dist = fileURLToPath(new URL(pagesBuild ? './docs/' : './dist/', import.meta.url));
const assets = fileURLToPath(new URL('./src/assets/', import.meta.url));
const previewUrl = pagesBuild ? undefined : process.argv[2];
const netlifyUrl = process.env.NETLIFY === 'true' ? process.env.URL : undefined;
const defaultUrl = pagesBuild ? 'https://heatsing.github.io/TelaPreta/' : (netlifyUrl || 'https://telapreta.cc/');
const site = new URL(previewUrl || process.env.TELAPRETA_SITE_URL || defaultUrl);
const basePath = site.pathname.replace(/\/+$/, '');
const siteRoot = site.origin + basePath;
const languages = Object.values(locales);
const modes = ['black', 'white'];
const whiteSlug = 'White-screen';
const feedbackUrl = process.env.TELAPRETA_FEEDBACK_URL ? new URL(process.env.TELAPRETA_FEEDBACK_URL) : null;
if (feedbackUrl && feedbackUrl.protocol !== 'https:') {
  throw new Error('TELAPRETA_FEEDBACK_URL must be an HTTPS URL.');
}
const palette = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#808080'];
const resolutions = [[1280, 720], [1920, 1080], [2560, 1440], [3840, 2160], [1080, 1920], [1080, 1080]];
const shapes = {
  brand: '<rect x="3.5" y="4.5" width="17" height="15" rx="2.2"/><path d="M8 9h8v6H8z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  download: '<path d="M12 3v12m-4-4 4 4 4-4M4 16v4h16v-4"/>'
};

function icon(name) {
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name]}</svg>`;
}

function escape(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

function pathFor(locale, mode) {
  return mode === 'white' ? `${locale.base}${whiteSlug}/` : locale.base;
}

function sitePath(path) {
  return path.startsWith('/') ? basePath + path : path;
}

function assetPath(filename) {
  return sitePath('/assets/' + filename);
}

function brand(locale) {
  return `<a class="brand" href="${sitePath(locale.base)}"><span class="brand-mark">${icon('brand')}</span>Telapreta.cc</a>`;
}

function languageLinks(locale, mode, showCheck = false) {
  return languages.map((other) => {
    const current = other === locale;
    return `<li><a href="${sitePath(pathFor(other, mode))}" lang="${other.lang}" hreflang="${other.lang}"${current ? ' aria-current="page"' : ''}>${escape(other.native)}${current && showCheck ? icon('check') : ''}</a></li>`;
  }).join('');
}

function languageMenu(locale, mode) {
  return `<details class="language"><summary aria-label="${escape(locale.language)}: ${escape(locale.native)}">${icon('globe')}<span>${escape(locale.native)}</span>${icon('chevron')}</summary><ul class="language-panel">${languageLinks(locale, mode, true)}</ul></details>`;
}

function footer(locale, mode) {
  const { ui } = locale;
  const links = [
    [pathFor(locale, 'black'), locale.nav[0]],
    [pathFor(locale, 'white'), locale.nav[1]],
    ['#about', ui.footerAbout],
    ['#como-usar', locale.nav[2]],
    ['#faq', ui.faq]
  ].map(([href, label]) => `<li><a href="${sitePath(href)}">${escape(label)}</a></li>`).join('');

  return `<footer class="footer shell">
  ${brand(locale)}
  <p class="footer-description">${escape(ui.footer)}</p>
  <nav class="footer-links" aria-label="${escape(ui.footerNav)}"><ul role="list">${links}</ul></nav>
  <nav class="footer-languages" aria-labelledby="footer-languages-title">
    <p id="footer-languages-title">${escape(ui.footerLanguages)}</p>
    <ul role="list">${languageLinks(locale, mode)}</ul>
  </nav>
  <p class="footer-copyright">© ${new Date().getUTCFullYear()} Telapreta.cc</p>
</footer>`;
}

function shareSection(locale, url, title) {
  const copy = locale.share;
  const encodedUrl = encodeURIComponent(url);
  const destinations = [
    ['WhatsApp', `https://wa.me/?text=${encodedUrl}`],
    ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`],
    ['X', `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`]
  ];
  const links = destinations.map(([name, href]) =>
    `<a href="${escape(href)}" target="_blank" rel="noopener noreferrer nofollow">${name}</a>`
  ).join('');

  return `<section class="inline-share" id="share" aria-labelledby="share-title">
  <div class="share-links">
    <h2 id="share-title">${escape(copy.title)}</h2>
    <button type="button" id="copy-share-link">${escape(copy.copy)}</button>
    <button type="button" id="native-share" hidden>${escape(copy.native)}</button>
    ${links}
  </div>
  <p class="share-status" role="status" data-success="${escape(copy.copied)}" data-manual="${escape(copy.manual)}"></p>
  <input id="share-url" type="url" value="${escape(url)}" aria-label="${escape(copy.copy)}" readonly hidden>
</section>`;
}

function colorControls(locale, initial) {
  return palette.map((color, index) => {
    const attributes = `class="swatch" data-color="${color}" style="--swatch:${color}"`;
    const label = `<span class="color-chip" aria-hidden="true"></span><span>${escape(locale.colors[index])}</span>`;
    if (index < 2 && index !== initial) {
      return `<a ${attributes} href="${sitePath(pathFor(locale, modes[index]))}">${label}</a>`;
    }
    return `<button ${attributes} type="button" aria-pressed="${String(index === initial)}">${label}</button>`;
  }).join('');
}

function render(locale, mode) {
  const copy = locale[mode];
  const { ui } = locale;
  const initial = modes.indexOf(mode);
  const initialColor = palette[initial];
  const opposite = modes[1 - initial];
  const path = pathFor(locale, mode);
  const title = `${copy.head} | Telapreta.cc`;
  const alternate = languages.map((other) =>
    `<link rel="alternate" hreflang="${other.lang}" href="${siteRoot}${pathFor(other, mode)}">`
  ).join('\n');
  const [colorsLabel, pranksLabel, updatesLabel, saversLabel, feedbackLabel] = navigationLabels(locale.lang);
  const galleryBase = mode === 'black' ? '' : locale.base;
  const nav = [
    ['#tool', colorsLabel],
    [galleryBase + '#scene-group-0', pranksLabel],
    [galleryBase + '#scene-group-1', updatesLabel],
    [galleryBase + '#scene-group-2', saversLabel]
  ].map(([href, label]) => `<a href="${sitePath(href)}">${escape(label)}</a>`).join('');
  const feedbackLink = feedbackUrl
    ? `<a href="${escape(feedbackUrl.href)}" target="_blank" rel="noopener noreferrer">${escape(feedbackLabel)}</a>`
    : '';
  const options = resolutions.map(([width, height], index) =>
    `<option value="${width}x${height}"${index === 1 ? ' selected' : ''}>${escape(locale.sizes[index])} · ${width} × ${height}</option>`
  ).join('');
  const sizes = resolutions.map(([width, height], index) =>
    `<tr><th scope="row">${escape(locale.sizes[index])}</th><td>${width} × ${height} px</td></tr>`
  ).join('');
  const uses = copy.uses.map(([name, description]) =>
    `<h3>${escape(name)}</h3><p>${escape(description)}</p>`
  ).join('');
  const steps = copy.steps.map((step) => `<li>${escape(step)}</li>`).join('');
  const compare = locale.compare.map(([color, description]) =>
    `<li><strong>${escape(color)}</strong><span>${escape(description)}</span></li>`
  ).join('');
  const faqs = copy.faq.map(([question, answer]) =>
    `<details><summary>${escape(question)}${icon('chevron')}</summary><p>${escape(answer)}</p></details>`
  ).join('');

  return `<!doctype html>
<html lang="${locale.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${escape(title)}</title>
<meta name="description" content="${escape(copy.meta)}">
${previewUrl ? '<meta name="robots" content="noindex, nofollow">' : ''}
<meta name="theme-color" content="#f7f7f5">
<link rel="canonical" href="${siteRoot}${path}">
${alternate}
<link rel="alternate" hreflang="x-default" href="${siteRoot}${pathFor(locales.pt, mode)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Telapreta.cc">
<meta property="og:title" content="${escape(title)}">
<meta property="og:description" content="${escape(copy.meta)}">
<meta property="og:url" content="${siteRoot}${path}">
<meta property="og:image" content="${siteRoot}/assets/monitor-check.webp">
<meta property="og:image:alt" content="${escape(ui.photo)}">
<link rel="icon" href="${assetPath('icon.svg')}" type="image/svg+xml">
<link rel="stylesheet" href="${assetPath('app.css')}">
<script src="${assetPath('app.js')}" defer></script>
<script src="${assetPath('share.js')}" defer></script>
${mode === 'black' ? `<link rel="stylesheet" href="${assetPath('scenes.css')}">
<script src="${assetPath('scenes.js')}" defer></script>` : ''}
</head>
<body>
<a class="skip" href="#tool">${escape(locale.skip)}</a>
<header class="topbar">
  <div class="header-inner">
    ${brand(locale)}
    <nav class="nav" aria-label="${escape(locale.mainNav)}">${nav}${feedbackLink}</nav>
    ${languageMenu(locale, mode)}
  </div>
</header>
<main class="shell">
  <header class="page-intro">
    <h1>${escape(copy.head)}</h1>
    <p>${escape(copy.intro)}</p>
  </header>
  <section class="tool" id="tool" data-initial="${initial}" style="--screen:${initialColor}" aria-labelledby="stage-title" tabindex="-1">
    <div class="stage">
      <div class="stage-header">
        <h2 id="stage-title">${escape(ui.preview)}</h2>
        <span class="hex" id="hex" aria-live="polite">${initialColor}</span>
      </div>
      <div class="preview" aria-hidden="true"></div>
      <h3 id="color-label">${escape(ui.colors)}</h3>
      <div class="color-list" role="group" aria-labelledby="color-label">${colorControls(locale, initial)}</div>
      <div class="custom-color">
        <label for="custom-color">${escape(ui.customColor)}</label>
        <input id="custom-color" type="color" value="${initialColor.toLowerCase()}">
        <div class="hex-input-wrap">
          <label for="color-hex">HEX</label>
          <input id="color-hex" type="text" value="${initialColor}" spellcheck="false" autocomplete="off" aria-errormessage="color-hex-error">
        </div>
        <p class="color-hex-error" id="color-hex-error" role="status" hidden>${escape(ui.invalidHex)}</p>
      </div>
    </div>
    <div class="download-options">
      <label for="resolution">${escape(ui.resolution)}</label>
      <div class="download-actions">
        <div class="select-wrap"><select id="resolution">${options}</select>${icon('chevron')}</div>
        <button class="download" id="download" type="button">${icon('download')}${escape(ui.download)}</button>
      </div>
      <p class="feedback" id="feedback" role="status" data-ready="${escape(ui.ready)}" data-failed="${escape(ui.failed)}"></p>
    </div>
  </section>
${mode === 'black' ? renderSceneGallery(locale.lang, escape) + '\n' : ''}  <div class="editorial">
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title">${escape(copy.definition[0])}</h2>
      <p>${escape(copy.definition[1])}</p>
    </section>
    <section id="uses" aria-labelledby="uses-title">
      <h2 id="uses-title">${escape(copy.usesTitle)}</h2>
      ${uses}
    </section>
    <section id="como-usar" aria-labelledby="guide-title">
      <h2 id="guide-title">${escape(copy.guide)}</h2>
      <ol>${steps}</ol>
      <p class="test-coverage">${escape(ui.coverage)}</p>
      <img class="guide-photo" src="${assetPath('monitor-check.webp')}" width="1140" height="760" loading="lazy" decoding="async" alt="${escape(ui.photo)}">
      <h3>${escape(ui.compare)}</h3>
      <ul class="checks">${compare}</ul>
    </section>
    <section id="png" aria-labelledby="png-title">
      <h2 id="png-title">${escape(copy.png[0])}</h2>
      <p>${escape(copy.png[1])}</p>
      <table aria-labelledby="png-title">
        <thead><tr><th scope="col">${escape(ui.format)}</th><th scope="col">${escape(ui.dimensions)}</th></tr></thead>
        <tbody>${sizes}</tbody>
      </table>
      <p class="resolution-link"><a href="#resolution">${escape(ui.choose)}</a></p>
    </section>
    <section class="faq" id="faq" aria-labelledby="faq-title">
      <h2 id="faq-title">${escape(ui.faq)}</h2>
      ${faqs}
    </section>
    <section class="related" aria-labelledby="related-title">
      <h2 id="related-title">${escape(ui.related)}</h2>
      <p>${escape(copy.related)}</p>
      <a href="${sitePath(pathFor(locale, opposite))}">${escape(locale.nav[1 - initial])}</a>
    </section>
    ${shareSection(locale, siteRoot + path, title)}
  </div>
</main>
${footer(locale, mode)}
</body>
</html>\n`;
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(assets, `${dist}assets`, { recursive: true });
await writeFile(`${dist}assets/icon.svg`, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#242526"/><rect x="10" y="11" width="20" height="18" rx="2.5" fill="none" stroke="white" stroke-width="2"/><path d="M16 17h8v6h-8z" fill="none" stroke="white" stroke-width="2"/></svg>');

const urls = [];
const redirects = [];
for (const locale of languages) {
  for (const mode of modes) {
    const path = pathFor(locale, mode);
    const directory = dist + path.slice(1);
    await mkdir(directory, { recursive: true });
    await writeFile(directory + 'index.html', render(locale, mode));
    urls.push(siteRoot + path);
  }

  if (!locale.previousWhitePath) continue;
  const target = pathFor(locale, 'white');
  const aliases = new Set([locale.previousWhitePath, 'white-screen']);
  for (const alias of aliases) {
    const previousPath = locale.base + alias;
    redirects.push(`${sitePath(previousPath)} ${sitePath(target)} 301`, `${sitePath(previousPath)}/ ${sitePath(target)} 301`);
    const aliasDirectory = dist + previousPath.slice(1);
    await mkdir(aliasDirectory, { recursive: true });
    await writeFile(aliasDirectory + '/index.html', `<!doctype html>
<html lang="${locale.lang}"><head><meta charset="utf-8">
<title>${escape(locale.white.head)} | Telapreta.cc</title>
<link rel="canonical" href="${siteRoot}${target}">
<meta http-equiv="refresh" content="0;url=${sitePath(target)}">
</head><body><a href="${sitePath(target)}">${escape(locale.nav[1])}</a></body></html>
`);
  }
}
if (pagesBuild) {
  await writeFile(dist + '.nojekyll', '');
} else {
  await writeFile(dist + '_redirects', redirects.join('\n') + '\n');
}
const robots = previewUrl ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nSitemap: ${siteRoot}/sitemap.xml\n`;
await writeFile(`${dist}robots.txt`, robots);
if (!previewUrl) {
  const sitemap = urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n');
  await writeFile(`${dist}sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`);
}
console.log(`Generated ${urls.length} pages for ${siteRoot}`);
