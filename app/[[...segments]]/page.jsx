import { notFound } from 'next/navigation';
import { ScenePage } from '../../src/components/ScenePage.jsx';
import { ScreenPage } from '../../src/components/ScreenPage.jsx';
import { GuidePage } from '../../src/components/GuidePage.jsx';
import { MonitorTestPage } from '../../src/components/MonitorTestPage.jsx';
import { relativeHref } from '../../src/routes.mjs';
import { basePath, feedbackUrl, previewBuild, siteRoot } from '../../src/site-config.mjs';
import { copyForPage, getPageBySegments, languageAlternates, staticPages } from '../../src/site.mjs';

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
  const page = await findPage(params);
  const { color, scene, guide, monitor, locale, path, target, label } = page;
  if (target) {
    return {
      title: `${label} | Telapreta.cc`,
      alternates: { canonical: siteRoot + target },
      robots: { index: false, follow: true }
    };
  }

  const detail = scene ?? guide ?? monitor;
  const copy = detail ? { head: detail.title, meta: detail.description } : copyForPage(locale, color);
  const title = `${copy.head} | Telapreta.cc`;
  const description = copy.meta.replace(/\p{L}/u, (letter) => letter.toLocaleUpperCase(locale.lang));
  const url = siteRoot + path;
  const translatedUrls = languageAlternates(page, siteRoot);

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
  const Content = page.scene ? ScenePage : page.monitor ? MonitorTestPage : page.guide ? GuidePage : ScreenPage;
  return <Content {...page} siteRoot={siteRoot} feedbackUrl={feedbackUrl} />;
}
