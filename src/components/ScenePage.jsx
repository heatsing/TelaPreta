import { relativeHref, scenePathFor } from '../routes.mjs';
import { sceneGalleryData } from '../scenes.mjs';
import { ScenePlayer } from './ScenePlayer';
import { SiteChrome } from './SiteChrome';

export function ScenePage({ locale, scene, path, feedbackUrl }) {
  const { copy, groups } = sceneGalleryData(locale.lang);
  const group = groups.find(({ scenes }) => scenes.some(({ id }) => id === scene.id));
  const relatedScenes = group.scenes.filter(({ id }) => id !== scene.id);

  return (
    <SiteChrome locale={locale} path={path} languagePath={(translated) => scenePathFor(translated, scene.id)} skipTarget="#scene-player" feedbackUrl={feedbackUrl}>
      <header className="page-intro"><h1>{scene.name}</h1></header>
      <ScenePlayer lang={locale.lang} scene={scene} copy={copy} />
      <nav className="scene-related" aria-labelledby="scene-related-title">
        <h2 id="scene-related-title">{group.heading}</h2>
        <ul role="list">
          {relatedScenes.map(({ id, name }) => (
            <li key={id}><a href={relativeHref(path, scenePathFor(locale, id))}>{name}</a></li>
          ))}
        </ul>
      </nav>
    </SiteChrome>
  );
}
