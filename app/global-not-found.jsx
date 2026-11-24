import { basePath, pagesBuild } from '../src/site-config.mjs';
import { NotFoundContent } from '../src/components/NotFoundContent';
import { pathFor } from '../src/routes.mjs';
import { languages, legacyPages } from '../src/site.mjs';
import '../src/assets/app.css';

const caseRedirects = Object.fromEntries(legacyPages.filter(({ caseOnly }) => caseOnly)
  .map(({ path, target }) => [basePath + path, basePath + target]));

const headings = {
  'pt-BR': 'Página não encontrada',
  en: 'Page not found',
  id: 'Halaman tidak ditemukan',
  es: 'Página no encontrada',
  'zh-Hans': '找不到页面',
  ja: 'ページが見つかりません',
  ko: '페이지를 찾을 수 없습니다',
  de: 'Seite nicht gefunden',
  fr: 'Page introuvable',
  uk: 'Сторінку не знайдено',
  pl: 'Nie znaleziono strony',
  it: 'Pagina non trovata',
  tr: 'Sayfa bulunamadı',
  sv: 'Sidan hittades inte',
  ms: 'Halaman tidak ditemui'
};

const recoveryPages = Object.fromEntries(languages.map((locale) => [locale.base.split('/')[1], {
  lang: locale.lang,
  title: headings[locale.lang],
  href: basePath + pathFor(locale, 'black'),
  linkLabel: locale.nav[0]
}]));

export const metadata = { title: `${recoveryPages[''].title} | Telapreta.cc` };

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body data-legacy-routes={pagesBuild ? JSON.stringify(caseRedirects) : undefined}>
        {pagesBuild && <script src={`${basePath}/assets/redirect.js`} defer />}
        <NotFoundContent basePath={basePath} recoveryPages={recoveryPages} />
      </body>
    </html>
  );
}
