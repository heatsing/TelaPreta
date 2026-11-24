import { previewBuild, siteRoot } from '../src/site-config.mjs';
import { contentPages, languageAlternates } from '../src/site.mjs';

export const dynamic = 'force-static';

export default function sitemap() {
  return previewBuild ? [] : contentPages.map((page) => {
    const languages = languageAlternates(page, siteRoot);
    return {
      url: siteRoot + page.path,
      lastModified: page.updatedOn,
      alternates: languages ? { languages } : undefined
    };
  });
}
