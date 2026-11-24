export const pagesBuild = process.env.TELAPRETA_BUILD_TARGET === 'pages';
export const previewBuild = Boolean(process.env.TELAPRETA_PREVIEW_URL);

const netlifyUrl = process.env.NETLIFY === 'true' ? process.env.URL : undefined;
const defaultUrl = pagesBuild ? 'https://heatsing.github.io/TelaPreta/' : (netlifyUrl || 'https://telapreta.cc/');
const siteUrl = new URL(process.env.TELAPRETA_PREVIEW_URL || process.env.TELAPRETA_SITE_URL || defaultUrl);
export const basePath = siteUrl.pathname.replace(/\/+$/, '');
export const siteRoot = siteUrl.origin + basePath;

export const feedbackUrl = process.env.TELAPRETA_FEEDBACK_URL ? new URL(process.env.TELAPRETA_FEEDBACK_URL) : null;
if (feedbackUrl && feedbackUrl.protocol !== 'https:') {
  throw new Error('TELAPRETA_FEEDBACK_URL must be an HTTPS URL.');
}
