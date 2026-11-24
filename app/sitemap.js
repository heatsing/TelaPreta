import { previewBuild, siteRoot } from '../src/site-config.mjs';
import { contentPages } from '../src/site.mjs';

export const dynamic = 'force-static';

export default function sitemap() {
  return previewBuild ? [] : contentPages.map(({ path }) => ({ url: siteRoot + path }));
}
