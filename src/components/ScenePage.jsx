import { scenePathFor } from '../routes.mjs';
import { sceneGalleryData } from '../scenes.mjs';
import { DisplayPageFrame, paletteLinks } from './DisplayPageFrame';
import { ScenePlayerLoader } from './ScenePlayerLoader';
import { ShareSection } from './ShareSection';

export function ScenePage({ locale, scene, path, siteRoot, feedbackUrl }) {
  const { copy } = sceneGalleryData(locale.lang);

  return (
    <DisplayPageFrame
      locale={locale}
      path={path}
      languagePath={(translated) => scenePathFor(translated, scene.id)}
      title={scene.title}
      description={scene.description}
      tool={<ScenePlayerLoader lang={locale.lang} scene={scene} copy={copy} ui={locale.ui} colors={paletteLinks(locale, path)} />}
      feedbackUrl={feedbackUrl}
      currentSceneId={scene.id}
    >
      <div className="editorial">
        <ShareSection copy={locale.share} url={siteRoot + path} title={`${scene.title} | TelaPreta.cc`} />
      </div>
    </DisplayPageFrame>
  );
}
