import { pathFor, relativeHref, screenColors } from '../routes.mjs';
import { SceneGallery } from './SceneGallery';
import { SiteChrome } from './SiteChrome';

export function paletteLinks(locale, path) {
  return screenColors.map(({ id, hex }, index) => ({
    hex,
    name: locale.colors[index],
    href: relativeHref(path, pathFor(locale, id))
  }));
}

export function DisplayPageFrame({ locale, path, languagePath, title, description, tool, feedbackUrl, toolOnPage, currentSceneId, children }) {
  return (
    <SiteChrome locale={locale} path={path} languagePath={languagePath} skipTarget="#tool" feedbackUrl={feedbackUrl} galleryOnPage toolOnPage={toolOnPage}>
      <header className="page-intro">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      {tool}
      {locale.lang === 'pt-BR' && <p className="monitor-shortcut"><a href={relativeHref(path, '/teste-de-monitor/')}>Teste de monitor</a></p>}
      <SceneGallery locale={locale} path={path} currentSceneId={currentSceneId} />
      {children}
    </SiteChrome>
  );
}
