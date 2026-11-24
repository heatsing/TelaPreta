import { fileURLToPath } from 'node:url';
import { locales } from './src/locales.mjs';
import { publishSite } from './src/publish.mjs';
import { renderPage } from './src/render-page.mjs';

const [argument] = process.argv.slice(2);
const pagesBuild = argument === '--pages';
const previewUrl = pagesBuild ? undefined : argument;
const outputDir = fileURLToPath(new URL(pagesBuild ? './docs/' : './dist/', import.meta.url));
const assetsDir = fileURLToPath(new URL('./src/assets/', import.meta.url));
const netlifyUrl = process.env.NETLIFY === 'true' ? process.env.URL : undefined;
const defaultUrl = pagesBuild ? 'https://heatsing.github.io/TelaPreta/' : (netlifyUrl || 'https://telapreta.cc/');
const site = new URL(previewUrl || process.env.TELAPRETA_SITE_URL || defaultUrl);
const siteRoot = site.origin + site.pathname.replace(/\/+$/, '');
const feedbackUrl = process.env.TELAPRETA_FEEDBACK_URL ? new URL(process.env.TELAPRETA_FEEDBACK_URL) : null;
if (feedbackUrl && feedbackUrl.protocol !== 'https:') {
  throw new Error('TELAPRETA_FEEDBACK_URL must be an HTTPS URL.');
}

const { pageCount, aliasCount } = await publishSite({
  outputDir,
  assetsDir,
  languages: Object.values(locales),
  siteRoot,
  pagesBuild,
  previewUrl,
  feedbackUrl,
  render: renderPage
});
console.log(`Generated ${pageCount} pages and ${aliasCount} redirects for ${siteRoot}`);
