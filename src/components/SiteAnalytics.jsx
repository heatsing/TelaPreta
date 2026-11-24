import Script from 'next/script';
import { basePath, pagesBuild, previewBuild } from '../site-config.mjs';

export function SiteAnalytics() {
  if (pagesBuild || previewBuild || process.env.NODE_ENV === 'development') return null;
  return <Script src={`${basePath}/assets/gtm-init.js`} strategy="afterInteractive" />;
}
