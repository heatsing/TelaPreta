import { notFound } from 'next/navigation';
import { ScenePage } from '../../src/components/ScenePage.jsx';
import { ScreenPage } from '../../src/components/ScreenPage.jsx';
import { locales } from '../../src/locales.mjs';
import { pathFor, relativeHref, scenePathFor } from '../../src/routes.mjs';
import { basePath, feedbackUrl, previewBuild, siteRoot } from '../../src/site-config.mjs';
import { copyForPage, getPageBySegments, languages, staticPages } from '../../src/site.mjs';

export const dynamicParams = false;

export function generateStaticParams() {
  return staticPages.map(({ path }) => ({ segments: path.split('/').filter(Boolean) }));
}

async function findPage(params) {
  const { segments } = await params;
  const page = getPageBySegments(segments);
  if (!page) notFound();
  return page;
}

export async function generateMetadata({ params }) {
  const { color, scene, locale, path, target, label } = await findPage(params);
  if (target) {
    return {
      title: `${label} | Telapreta.cc`,
      alternates: { canonical: siteRoot + target },
      robots: { index: false, follow: true }
    };
  }

  const copy = scene ? { head: scene.name, meta: scene.description } : copyForPage(locale, color);
  const title = `${copy.head} | Telapreta.cc`;
  const description = copy.meta.replace(/\p{L}/u, (letter) => letter.toLocaleUpperCase(locale.lang));
  const url = siteRoot + path;
  const localizedPath = scene ? (language) => scenePathFor(language, scene.id) : (language) => pathFor(language, color.id);
  const translatedUrls = Object.fromEntries(languages.map((language) => [language.lang, siteRoot + localizedPath(language)]));
  translatedUrls['x-default'] = siteRoot + localizedPath(locales.pt);

  return {
    title,
    description,
    alternates: { canonical: url, languages: translatedUrls },
    robots: previewBuild ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'website',
      siteName: 'Telapreta.cc',
      title,
      description,
      url
    }
  };
}

function LegacyRedirect({ path, target, label }) {
  const href = relativeHref(path, target);
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <script src={`${basePath}/assets/redirect.js`} defer />
      <a href={href} data-redirect>{label}</a>
    </>
  );
}

export default async function Page({ params }) {
  const page = await findPage(params);
  if (page.target) return <LegacyRedirect {...page} />;
  const Content = page.scene ? ScenePage : ScreenPage;
  return <Content {...page} siteRoot={siteRoot} feedbackUrl={feedbackUrl} />;
}
