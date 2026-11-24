import { colorPageLabel } from '../color-page-copy.mjs';
import { pathFor, relativeHref, scenePathFor } from '../routes.mjs';
import { sceneText } from '../scene-guidance.mjs';
import { sceneGalleryData } from '../scenes.mjs';
import { DisplayPageFrame, paletteLinks } from './DisplayPageFrame';
import { ScenePlayerLoader } from './ScenePlayerLoader';
import { ShareSection } from './ShareSection';
import { ToolFaq } from './ToolFaq';

export function ScenePage({ locale, scene, path, siteRoot, feedbackUrl }) {
  const { copy } = sceneGalleryData(locale.lang);
  const { id, name, guide } = scene;
  const { updateControls, callControls, noiseControls } = sceneText[locale.lang];
  const controls = id === 'call' ? callControls : id === 'white-noise' ? noiseControls : id.startsWith('update-') ? updateControls : undefined;

  return (
    <DisplayPageFrame
      locale={locale}
      path={path}
      languagePath={(translated) => scenePathFor(translated, id)}
      title={scene.title}
      description={scene.description}
      tool={<ScenePlayerLoader lang={locale.lang} scene={{ id, name }} copy={copy} ui={locale.ui} colors={paletteLinks(locale, path)} controls={controls} />}
      feedbackUrl={feedbackUrl}
      currentSceneId={id}
      toolOnPage
    >
      <div className="editorial">
        <section id="como-usar" aria-labelledby="guide-title">
          <h2 id="guide-title">{locale.nav[2]}</h2>
          <ol>{guide.steps.map((step) => <li key={step}>{step}</li>)}</ol>
          <h3 id="about">{guide.uses}</h3>
          <p>{guide.use}</p>
          {id === 'error' && <p className="related"><a href={relativeHref(path, pathFor(locale, 'blue'))}>{colorPageLabel(locale, 'blue')}</a></p>}
          <ToolFaq title={locale.ui.faq} items={guide.faq} />
        </section>
        <ShareSection copy={locale.share} url={siteRoot + path} title={`${scene.title} | TelaPreta.cc`} />
      </div>
    </DisplayPageFrame>
  );
}
