import { colorPageCopy, colorPageLabel } from './color-page-copy.mjs';
import { guidePages } from './guide-pages.mjs';
import { locales } from './locales.mjs';
import { sceneGuidance } from './scene-guidance.mjs';
import { sceneGalleryData } from './scenes.mjs';
import { aliasesFor, pathFor, scenePathFor, screenColors } from './routes.mjs';

export const languages = Object.values(locales);

export const screenPages = languages.flatMap((locale) => screenColors.map((color) => ({
  path: pathFor(locale, color.id),
  locale,
  color
})));

const sceneDescription = {
  'pt-BR': (name) => `Abra a simulação de ${name} direto no navegador.`,
  en: (name) => `Open the ${name} simulation directly in your browser.`,
  id: (name) => `Buka simulasi ${name} langsung di browser.`,
  es: (name) => `Abre la simulación de ${name} directamente en tu navegador.`,
  'zh-Hans': (name) => `在浏览器中打开${name}模拟画面。`,
  ja: (name) => `ブラウザーで「${name}」のシミュレーションを表示します。`,
  ko: (name) => `브라우저에서 ${name} 시뮬레이션을 열어 보세요.`,
  de: (name) => `Öffne die Simulation „${name}“ direkt im Browser.`,
  fr: (name) => `Ouvrez la simulation « ${name} » directement dans votre navigateur.`,
  uk: (name) => `Відкрийте імітацію «${name}» у браузері.`,
  pl: (name) => `Otwórz symulację „${name}” bezpośrednio w przeglądarce.`,
  it: (name) => `Apri la simulazione «${name}» direttamente nel browser.`,
  tr: (name) => `“${name}” simülasyonunu doğrudan tarayıcıda açın.`,
  sv: (name) => `Öppna simuleringen ”${name}” direkt i webbläsaren.`,
  ms: (name) => `Buka simulasi ${name} terus dalam pelayar.`
};

export const scenePages = languages.flatMap((locale) => sceneGalleryData(locale.lang).groups.flatMap(({ scenes }) =>
  scenes.map((scene) => ({
    path: scenePathFor(locale, scene.id),
    locale,
    scene: sceneGuidance(locale.lang, scene, sceneDescription[locale.lang](scene.name))
  }))
));
export const monitorPage = {
  path: '/teste-de-monitor/',
  locale: locales.pt,
  monitor: {
    title: 'Teste de monitor online',
    description: 'Teste a tela em seis cores em uma única sessão de tela cheia. Encontre pontos suspeitos e compare pixels mortos, presos e sujeira.'
  },
  updatedOn: '2026-11-24'
};

const editorialPages = guidePages.map((guide) => ({ path: guide.path, locale: locales.pt, guide, updatedOn: guide.updatedOn }));
export const contentPages = [screenPages[0], monitorPage, ...screenPages.slice(1), ...scenePages, ...editorialPages];

export function languageAlternates({ scene, color }, siteRoot) {
  if (!scene && !color) return undefined;
  const localized = scene ? (locale) => scenePathFor(locale, scene.id) : (locale) => pathFor(locale, color.id);
  return Object.fromEntries([
    ...languages.map((locale) => [locale.lang, siteRoot + localized(locale)]),
    ['x-default', siteRoot + localized(locales.pt)]
  ]);
}

export const legacyPages = languages.flatMap((locale) => aliasesFor(locale).map(([path, colorId]) => {
  const target = pathFor(locale, colorId);
  return {
    path,
    target,
    locale,
    label: colorPageLabel(locale, colorId),
    caseOnly: path.toLowerCase() === target.toLowerCase()
  };
}));

export const staticPages = [...contentPages, ...legacyPages.filter(({ caseOnly }) => !caseOnly)];
const byPath = new Map(staticPages.map((page) => [page.path, page]));
if (byPath.size !== staticPages.length) throw new Error('Duplicate static route');

export function getPageBySegments(segments = []) {
  return byPath.get(segments.length ? `/${segments.join('/')}/` : '/');
}

export function copyForPage(locale, color) {
  return locale[color.id] ?? colorPageCopy(locale, color.id, color.hex);
}
