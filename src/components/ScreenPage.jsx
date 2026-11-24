import { Fragment } from 'react';
import { colorPageLabel } from '../color-page-copy.mjs';
import { pathFor, relativeHref } from '../routes.mjs';
import { copyForPage } from '../site.mjs';
import { DisplayPageFrame, paletteLinks } from './DisplayPageFrame';
import { ScreenSettings } from './ScreenSettings';
import { ScreenTool } from './ScreenTool';
import { ShareSection } from './ShareSection';
import { ToolFaq } from './ToolFaq';

const resolutions = [[1280, 720], [1920, 1080], [2560, 1440], [3840, 2160], [1080, 1920], [1080, 1080]];

function Editorial({ locale, copy, mode, url, linkTo }) {
  const { ui } = locale;
  const related = mode === 'black' ? 'white' : 'black';

  return (
    <div className="editorial">
      <section id="como-usar" aria-labelledby="guide-title">
        <h2 id="guide-title">{locale.nav[2]}</h2>
        <h3>{copy.guide}</h3>
        <ol>{copy.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        <p className="test-coverage">{ui.coverage}</p>
        <h3>{ui.compare}</h3>
        <ul className="checks">
          {locale.compare.map(([color, description]) => <li key={color}><strong>{color}</strong><span>{description}</span></li>)}
        </ul>
        <h3 id="about">{copy.definition[0]}</h3>
        <p>{copy.definition[1]}</p>
        <ToolFaq title={ui.faq} items={copy.faq} />
      </section>
      <section id="uses" aria-labelledby="uses-title">
        <h2 id="uses-title">{copy.usesTitle}</h2>
        {copy.uses.map(([name, description, source]) => (
          <Fragment key={name}>
            <h3>{name}</h3>
            <p>{description}{source && <> <a href={linkTo(source.href)}>{source.label}</a></>}</p>
          </Fragment>
        ))}
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
      <section className="related" aria-labelledby="related-title">
        <h2 id="related-title">{ui.related}</h2>
        <p>{copy.related}</p>
        <a href={linkTo(pathFor(locale, related))}>{colorPageLabel(locale, related)}</a>
      </section>
      <ShareSection copy={locale.share} url={url} title={`${copy.head} | TelaPreta.cc`} />
    </div>
  );
}

export function ScreenPage({ locale, color, path, siteRoot, feedbackUrl }) {
  const copy = copyForPage(locale, color);
  const linkTo = (target) => relativeHref(path, target);
  const colors = paletteLinks(locale, path);
  const sizes = resolutions.map(([width, height], index) => ({ width, height, label: locale.sizes[index] }));

  return (
    <ScreenSettings initialColor={color.hex}>
      <DisplayPageFrame
        locale={locale}
        path={path}
        languagePath={(translated) => pathFor(translated, color.id)}
        title={copy.head}
        description={copy.intro}
        tool={<ScreenTool ui={locale.ui} initialColor={color.hex} colors={colors} resolutions={sizes} />}
        feedbackUrl={feedbackUrl}
        toolOnPage
      >
        <Editorial locale={locale} copy={copy} mode={color.id} url={siteRoot + path} linkTo={linkTo} />
      </DisplayPageFrame>
    </ScreenSettings>
  );
}
