import { pathFor, relativeHref } from '../routes.mjs';
import { navigationLabels } from '../scenes.mjs';
import { languages } from '../site.mjs';
import { Icon } from './Icon';
import { LanguageMenu, ThemeMenu } from './HeaderControls';

const themeLabels = {
  'pt-BR': ['Aparência', 'Claro', 'Escuro'],
  en: ['Appearance', 'Light', 'Dark'],
  id: ['Tampilan', 'Terang', 'Gelap'],
  es: ['Apariencia', 'Claro', 'Oscuro'],
  'zh-Hans': ['外观', '浅色', '深色'],
  ja: ['外観', 'ライト', 'ダーク'],
  ko: ['화면 테마', '라이트', '다크'],
  de: ['Erscheinungsbild', 'Hell', 'Dunkel'],
  fr: ['Apparence', 'Clair', 'Sombre'],
  uk: ['Вигляд', 'Світла тема', 'Темна тема'],
  pl: ['Wygląd', 'Jasny', 'Ciemny'],
  it: ['Aspetto', 'Chiaro', 'Scuro'],
  tr: ['Görünüm', 'Açık', 'Koyu'],
  sv: ['Utseende', 'Ljust', 'Mörkt'],
  ms: ['Rupa', 'Cerah', 'Gelap']
};

function Brand({ href }) {
  return (
    <a className="brand" href={href}>
      <span className="brand-mark"><Icon name="brand" /></span>
      Telapreta.cc
    </a>
  );
}

function LanguageLinks({ locale, languageHref, showCheck = false }) {
  return languages.map((other) => {
    const current = other.lang === locale.lang;
    return (
      <li key={other.lang}>
        <a href={languageHref(other)} lang={other.lang} hrefLang={other.lang} aria-current={current ? 'page' : undefined}>
          {other.native}
          {current && showCheck && <Icon name="check" />}
        </a>
      </li>
    );
  });
}

function Header({ locale, path, linkTo, languageHref, galleryOnPage, feedbackUrl }) {
  const [, pranks, updates, savers, feedback] = navigationLabels(locale.lang);
  const blackPath = pathFor(locale, 'black');
  const galleryPath = galleryOnPage ? '' : blackPath;
  const links = [
    [blackPath, locale.nav[0]],
    [pathFor(locale, 'white'), locale.nav[1]],
    [`${galleryPath}#scene-group-0`, pranks],
    [`${galleryPath}#scene-group-1`, updates],
    [`${galleryPath}#scene-group-2`, savers]
  ];

  return (
    <header className="topbar">
      <div className="header-inner">
        <Brand href={linkTo(blackPath)} />
        <nav className="nav" aria-label={locale.mainNav}>
          {links.map(([href, label]) => (
            <a key={href} href={linkTo(href)} aria-current={href === path ? 'page' : undefined}>{label}</a>
          ))}
          {feedbackUrl && <a href={feedbackUrl.href} target="_blank" rel="noopener noreferrer">{feedback}</a>}
        </nav>
        <div className="header-controls">
          <LanguageMenu>
            <summary aria-label={`${locale.language}: ${locale.native}`}>
              <Icon name="globe" />
              <span>{locale.native}</span>
              <Icon name="chevron" />
            </summary>
            <ul className="language-panel"><LanguageLinks locale={locale} languageHref={languageHref} showCheck /></ul>
          </LanguageMenu>
          <ThemeMenu labels={themeLabels[locale.lang]} />
        </div>
      </div>
    </header>
  );
}

function Footer({ locale, linkTo, languageHref, toolOnPage }) {
  const { ui } = locale;
  const blackPath = pathFor(locale, 'black');
  const toolPath = toolOnPage ? '' : blackPath;
  const links = [
    [blackPath, locale.nav[0]],
    [pathFor(locale, 'white'), locale.nav[1]],
    [`${toolPath}#about`, ui.footerAbout],
    [`${toolPath}#como-usar`, locale.nav[2]],
    [`${toolPath}#faq`, ui.faq]
  ];

  return (
    <footer className="footer">
      <div className="footer-inner shell">
        <Brand href={linkTo(blackPath)} />
        <p className="footer-description">{ui.footer}</p>
        <nav className="footer-links" aria-label={ui.footerNav}>
          <ul role="list">{links.map(([href, label]) => <li key={href}><a href={linkTo(href)}>{label}</a></li>)}</ul>
        </nav>
        <nav className="footer-languages" aria-labelledby="footer-languages-title">
          <p id="footer-languages-title">{ui.footerLanguages}</p>
          <ul role="list"><LanguageLinks locale={locale} languageHref={languageHref} /></ul>
        </nav>
        <p className="footer-copyright">© {new Date().getUTCFullYear()} Telapreta.cc</p>
      </div>
    </footer>
  );
}

export function SiteChrome({ locale, path, languagePath, skipTarget, feedbackUrl, galleryOnPage = false, toolOnPage = false, children }) {
  const linkTo = (target) => relativeHref(path, target);
  const languageHref = (translated) => linkTo(languagePath(translated));

  return (
    <>
      <a className="skip" href={skipTarget}>{locale.skip}</a>
      <Header locale={locale} path={path} linkTo={linkTo} languageHref={languageHref} galleryOnPage={galleryOnPage} feedbackUrl={feedbackUrl} />
      <main className="shell">{children}</main>
      <Footer locale={locale} linkTo={linkTo} languageHref={languageHref} toolOnPage={toolOnPage} />
    </>
  );
}
