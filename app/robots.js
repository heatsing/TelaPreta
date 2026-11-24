import { previewBuild, siteRoot } from '../src/site-config.mjs';

export const dynamic = 'force-static';

export default function robots() {
  return previewBuild
    ? { rules: { userAgent: '*', disallow: '/' } }
    : { rules: { userAgent: '*', allow: '/' }, sitemap: `${siteRoot}/sitemap.xml` };
}
