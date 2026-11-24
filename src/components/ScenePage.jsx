import { colorPageLabel } from '../color-page-copy.mjs';
import { pathFor, relativeHref, scenePathFor, screenColors } from '../routes.mjs';
import { sceneText } from '../scene-guidance.mjs';
import { sceneGalleryData } from '../scenes.mjs';
import { DisplayPageFrame, paletteLinks } from './DisplayPageFrame';
import { ScenePlayerLoader } from './ScenePlayerLoader';
import { ShareSection } from './ShareSection';
import { ToolGuide, UsageExamples } from './ToolGuide';

const colorIds = new Set(screenColors.map(({ id }) => id));
const relatedScreens = {
  error: ['blue', 'boot-xp'],
  cracked: ['white', 'bars'],
  radar: ['terminal', 'rain'],
  terminal: ['radar', 'rain'],
  call: ['zoom-lighting', 'quotes'],
  'update-blue': ['update-retro', 'update-gray'],
  'update-retro': ['boot-xp', 'update-blue'],
  'update-silver': ['update-blue', 'update-violet'],
  'update-violet': ['update-silver', 'update-gray'],
  'update-gray': ['update-blue', 'update-violet'],
  'boot-xp': ['update-retro', 'error'],
  bounce: ['clock', 'rain'],
  clock: ['quotes', 'bounce'],
  quotes: ['clock', 'black'],
  bars: ['white-noise', 'cracked'],
  rain: ['terminal', 'bounce'],
  'white-noise': ['bars', 'black']
};

function RelatedScreens({ locale, path, title, targets }) {
  return (
    <section id="related" className="related" aria-labelledby="related-title">
      <h2 id="related-title">{title}</h2>
      <ul className="checks">
        {targets.map((id) => {
          const color = colorIds.has(id);
          const target = color ? pathFor(locale, id) : scenePathFor(locale, id);
          const label = color ? colorPageLabel(locale, id) : sceneText[locale.lang].scenes[id][0];
          return <li key={id}><a href={relativeHref(path, target)}>{label}</a></li>;
        })}
      </ul>
    </section>
  );
}

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
        <ToolGuide title={locale.nav[2]} steps={guide.steps} about={[guide.aboutTitle ?? locale.ui.footerAbout, guide.about]} faqTitle={locale.ui.faq} faq={guide.faq} />
        <UsageExamples title={guide.usesTitle} examples={guide.examples} linkTo={(target) => relativeHref(path, target)} />
        <RelatedScreens locale={locale} path={path} title={guide.relatedHeading} targets={relatedScreens[id]} />
        <ShareSection copy={locale.share} url={siteRoot + path} title={`${scene.title} | TelaPreta.cc`} />
      </div>
    </DisplayPageFrame>
  );
}
