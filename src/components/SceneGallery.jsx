import { relativeHref, scenePathFor } from '../routes.mjs';
import { sceneGalleryData } from '../scenes.mjs';
import { SceneVisual } from './SceneVisual';

export function SceneGallery({ locale, path, currentSceneId }) {
  const { copy, groups } = sceneGalleryData(locale.lang);

  return (
    <div className="scene-gallery">
      {groups.map(({ heading, scenes }, index) => {
        const headingId = `scene-group-${index}`;
        return (
          <section className="scene-group" aria-labelledby={headingId} key={headingId}>
            <h2 id={headingId}>{heading}</h2>
            <ul role="list">
              {scenes.map(({ id, name }) => (
                <li key={id}>
                  <a
                    className="scene-card"
                    data-scene={id}
                    href={relativeHref(path, scenePathFor(locale, id))}
                    aria-current={id === currentSceneId ? 'page' : undefined}
                  >
                    <SceneVisual id={id} name={name} copy={copy} />
                    <span className="scene-name">{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
