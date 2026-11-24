import { Fragment } from 'react';
import { colorPageLabel } from '../color-page-copy.mjs';
import { pathFor, relativeHref, screenColors } from '../routes.mjs';
import { copyForPage } from '../site.mjs';
import { Icon } from './Icon';
import { SceneGallery } from './SceneGallery';
import { ScreenTool } from './ScreenTool';
import { ShareSection } from './ShareSection';
import { SiteChrome } from './SiteChrome';

const resolutions = [[1280, 720], [1920, 1080], [2560, 1440], [3840, 2160], [1080, 1920], [1080, 1080]];

function Editorial({ locale, copy, mode, url, linkTo }) {
  const { ui } = locale;
  const related = mode === 'black' ? 'white' : 'black';

  return (
    <div className="editorial">
      <section id="about" aria-labelledby="about-title">
        <h2 id="about-title">{copy.definition[0]}</h2>
        <p>{copy.definition[1]}</p>
      </section>
      <section id="uses" aria-labelledby="uses-title">
        <h2 id="uses-title">{copy.usesTitle}</h2>
        {copy.uses.map(([name, description]) => (
          <Fragment key={name}><h3>{name}</h3><p>{description}</p></Fragment>
        ))}
      </section>
      <section id="como-usar" aria-labelledby="guide-title">
        <h2 id="guide-title">{copy.guide}</h2>
        <ol>{copy.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        <p className="test-coverage">{ui.coverage}</p>
        <h3>{ui.compare}</h3>
        <ul className="checks">
          {locale.compare.map(([color, description]) => <li key={color}><strong>{color}</strong><span>{description}</span></li>)}
        </ul>
      </section>
      <section id="png" aria-labelledby="png-title">
        <h2 id="png-title">{copy.png[0]}</h2>
        <p>{copy.png[1]}</p>
        <table aria-labelledby="png-title">
          <thead><tr><th scope="col">{ui.format}</th><th scope="col">{ui.dimensions}</th></tr></thead>
          <tbody>
            {resolutions.map(([width, height], index) => (
              <tr key={`${width}x${height}`}><th scope="row">{locale.sizes[index]}</th><td>{width} × {height} px</td></tr>
            ))}
          </tbody>
        </table>
        <p className="resolution-link"><a href="#resolution">{ui.choose}</a></p>
      </section>
      <section className="faq" id="faq" aria-labelledby="faq-title">
        <h2 id="faq-title">{ui.faq}</h2>
        {copy.faq.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}<Icon name="chevron" /></summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
      <section className="related" aria-labelledby="related-title">
        <h2 id="related-title">{ui.related}</h2>
        <p>{copy.related}</p>
        <a href={linkTo(pathFor(locale, related))}>{colorPageLabel(locale, related)}</a>
      </section>
      <ShareSection copy={locale.share} url={url} title={`${copy.head} | Telapreta.cc`} />
    </div>
  );
}

export function ScreenPage({ locale, color, path, siteRoot, feedbackUrl }) {
  const copy = copyForPage(locale, color);
  const linkTo = (target) => relativeHref(path, target);
  const colors = screenColors.map(({ id, hex }, index) => ({
    hex,
    name: locale.colors[index],
    href: linkTo(pathFor(locale, id))
  }));
  const sizes = resolutions.map(([width, height], index) => ({ width, height, label: locale.sizes[index] }));

  return (
    <SiteChrome locale={locale} path={path} languagePath={(translated) => pathFor(translated, color.id)} skipTarget="#tool" feedbackUrl={feedbackUrl} galleryOnPage={color.id === 'black'} toolOnPage>
      <header className="page-intro"><h1>{copy.head}</h1><p>{copy.intro}</p></header>
      <ScreenTool ui={locale.ui} initialColor={color.hex} colors={colors} resolutions={sizes} />
      {color.id === 'black' && <SceneGallery locale={locale} path={path} />}
      <Editorial locale={locale} copy={copy} mode={color.id} url={siteRoot + path} linkTo={linkTo} />
    </SiteChrome>
  );
}
