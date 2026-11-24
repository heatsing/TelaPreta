import { locales } from './locales.mjs';
import { navigationLabels, renderSceneGallery } from './scenes.mjs';
import { colorPageCopy, colorPageLabel } from './color-page-copy.mjs';
import { pathFor, relativeHref, screenColors } from './routes.mjs';

const languages = Object.values(locales);
const resolutions = [[1280, 720], [1920, 1080], [2560, 1440], [3840, 2160], [1080, 1920], [1080, 1080]];
const themeLabels = {
  'pt-BR': ['Aparência', 'Claro', 'Seguir o sistema', 'Escuro'],
  en: ['Appearance', 'Light', 'Follow system', 'Dark'],
  id: ['Tampilan', 'Terang', 'Ikuti sistem', 'Gelap'],
  es: ['Apariencia', 'Claro', 'Seguir el sistema', 'Oscuro'],
  'zh-Hans': ['外观', '浅色', '跟随系统', '深色'],
  ja: ['外観', 'ライト', 'システムに合わせる', 'ダーク'],
  ko: ['화면 테마', '라이트', '시스템 설정 사용', '다크'],
  de: ['Erscheinungsbild', 'Hell', 'Systemeinstellung', 'Dunkel'],
  fr: ['Apparence', 'Clair', 'Suivre le système', 'Sombre'],
  uk: ['Вигляд', 'Світла тема', 'Як у системі', 'Темна тема'],
  pl: ['Wygląd', 'Jasny', 'Zgodnie z systemem', 'Ciemny'],
  it: ['Aspetto', 'Chiaro', 'Segui il sistema', 'Scuro'],
  tr: ['Görünüm', 'Açık', 'Sistem ayarını kullan', 'Koyu'],
  sv: ['Utseende', 'Ljust', 'Följ systemet', 'Mörkt'],
  ms: ['Rupa', 'Cerah', 'Ikut sistem', 'Gelap']
};
const shapes = {
  fullscreen: '<path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4"/>',
  exitFullscreen: '<path d="M4 9h5V4m6 0v5h5M4 15h5v5m6 0v-5h5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4"/>',
  monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4m-4 0h8"/>',
  moon: '<path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5a8.5 8.5 0 1 0 10.6 10.6Z"/>',
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

function brand(locale, linkTo) {
  return `<a class="brand" href="${linkTo(pathFor(locale, 'black'))}"><span class="brand-mark">${icon('brand')}</span>Telapreta.cc</a>`;
}

function languageLinks(locale, mode, linkTo, showCheck = false) {
  return languages.map((other) => {
    const current = other === locale;
    return `<li><a href="${linkTo(pathFor(other, mode))}" lang="${other.lang}" hreflang="${other.lang}"${current ? ' aria-current="page"' : ''}>${escape(other.native)}${current && showCheck ? icon('check') : ''}</a></li>`;
  }).join('');
}

function languageMenu(locale, mode, linkTo) {
  return `<details class="language"><summary aria-label="${escape(locale.language)}: ${escape(locale.native)}">${icon('globe')}<span>${escape(locale.native)}</span>${icon('chevron')}</summary><ul class="language-panel">${languageLinks(locale, mode, linkTo, true)}</ul></details>`;
}

function themeMenu(locale) {
  const [group, light, system, dark] = themeLabels[locale.lang];
  const options = [
    ['light', 'sun', light],
    ['system', 'monitor', system],
    ['dark', 'moon', dark]
  ].map(([value, glyph, label]) =>
    `<label title="${escape(label)}"><input type="radio" name="theme" value="${value}" aria-label="${escape(label)}"${value === 'light' ? ' checked' : ''}><span>${icon(glyph)}</span></label>`
  ).join('');
  return `<div class="theme-menu" role="radiogroup" aria-label="${escape(group)}">${options}</div>`;
}

function footer(locale, mode, linkTo) {
  const { ui } = locale;
  const links = [
    [pathFor(locale, 'black'), locale.nav[0]],
    [pathFor(locale, 'white'), locale.nav[1]],
    ['#about', ui.footerAbout],
    ['#como-usar', locale.nav[2]],
    ['#faq', ui.faq]
  ].map(([href, label]) => `<li><a href="${linkTo(href)}">${escape(label)}</a></li>`).join('');

  return `<footer class="footer shell">
  ${brand(locale, linkTo)}
  <p class="footer-description">${escape(ui.footer)}</p>
  <nav class="footer-links" aria-label="${escape(ui.footerNav)}"><ul role="list">${links}</ul></nav>
  <nav class="footer-languages" aria-labelledby="footer-languages-title">
    <p id="footer-languages-title">${escape(ui.footerLanguages)}</p>
    <ul role="list">${languageLinks(locale, mode, linkTo)}</ul>
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

function colorControls(locale, mode, linkTo) {
  return screenColors.map(({ id, hex }, index) => {
    const selection = id === mode ? ' aria-current="page" data-selected' : '';
    return `<a class="swatch" data-color="${hex}" style="--swatch:${hex}" href="${linkTo(pathFor(locale, id))}"${selection}><span class="color-chip" aria-hidden="true"></span><span>${escape(locale.colors[index])}</span></a>`;
  }).join('');
}

export function renderPage(locale, color, { path, siteRoot, previewUrl, feedbackUrl }) {
  const { id: mode, hex: initialColor } = color;
  const copy = locale[mode] ?? colorPageCopy(locale, mode, initialColor);
  const { ui } = locale;
  const linkTo = (target) => escape(relativeHref(path, target));
  const assetPath = (filename) => linkTo(`/assets/${filename}`);
  const related = mode === 'black' ? 'white' : 'black';
  const title = `${copy.head} | Telapreta.cc`;
  const alternate = languages.map((other) =>
    `<link rel="alternate" hreflang="${other.lang}" href="${siteRoot}${pathFor(other, mode)}">`
  ).join('\n');
  const [colorsLabel, pranksLabel, updatesLabel, saversLabel, feedbackLabel] = navigationLabels(locale.lang);
  const galleryBase = mode === 'black' ? '' : pathFor(locale, 'black');
  const nav = [
    ['#tool', colorsLabel],
    [galleryBase + '#scene-group-0', pranksLabel],
    [galleryBase + '#scene-group-1', updatesLabel],
    [galleryBase + '#scene-group-2', saversLabel]
  ].map(([href, label]) => `<a href="${linkTo(href)}">${escape(label)}</a>`).join('');
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
<script src="${assetPath('theme.js')}"></script>
<link rel="canonical" href="${escape(siteRoot + path)}">
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
    ${brand(locale, linkTo)}
    <nav class="nav" aria-label="${escape(locale.mainNav)}">${nav}${feedbackLink}</nav>
    <div class="header-controls">
      ${languageMenu(locale, mode, linkTo)}
      ${themeMenu(locale)}
    </div>
  </div>
</header>
<main class="shell">
  <header class="page-intro">
    <h1>${escape(copy.head)}</h1>
    <p>${escape(copy.intro)}</p>
  </header>
  <section class="tool" id="tool" data-initial-color="${initialColor}" style="--screen:${initialColor}" aria-labelledby="stage-title" tabindex="-1">
    <div class="stage">
      <div class="stage-header">
        <h2 id="stage-title">${escape(ui.preview)}</h2>
        <span class="hex" id="hex" aria-live="polite">${initialColor}</span>
      </div>
      <div class="preview">
        <button class="preview-fullscreen" type="button" data-fullscreen aria-haspopup="dialog" aria-label="${escape(ui.fullscreen)}" title="${escape(ui.fullscreen)}">${icon('fullscreen')}</button>
      </div>
      <h3 id="color-label">${escape(ui.colors)}</h3>
      <div class="color-list" role="group" aria-labelledby="color-label">${colorControls(locale, mode, linkTo)}</div>
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
        <button class="fullscreen-action" type="button" data-fullscreen aria-haspopup="dialog">${icon('fullscreen')}${escape(ui.fullscreen)}</button>
      </div>
      <p class="feedback" id="feedback" role="status" data-ready="${escape(ui.ready)}" data-failed="${escape(ui.failed)}"></p>
    </div>
    <dialog id="fullscreen-dialog" aria-label="${escape(ui.fullscreen)}">
      <div class="fullscreen-field">
        <button class="fullscreen-exit" type="button" aria-label="${escape(ui.exitFullscreen)}" autofocus>${icon('exitFullscreen')}</button>
      </div>
    </dialog>
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
      <a href="${linkTo(pathFor(locale, related))}">${escape(colorPageLabel(locale, related))}</a>
    </section>
    ${shareSection(locale, siteRoot + path, title)}
  </div>
</main>
${footer(locale, mode, linkTo)}
</body>
</html>\n`;
}
