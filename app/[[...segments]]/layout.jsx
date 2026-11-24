import { basePath } from '../../src/site-config.mjs';
import { getPageBySegments } from '../../src/site.mjs';
import { SiteAnalytics } from '../../src/components/SiteAnalytics';
import '../../src/assets/app.css';
import '../../src/assets/scenes.css';

export const metadata = {
  icons: { icon: { url: `${basePath}/assets/icon.svg`, type: 'image/svg+xml' } }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f7f7f5'
};

export default async function RootLayout({ children, params }) {
  const { segments } = await params;
  const lang = getPageBySegments(segments)?.locale.lang ?? 'pt-BR';

  return (
    <html lang={lang} suppressHydrationWarning>
      <head><script src={`${basePath}/assets/theme-init.js`} /></head>
      <body>{children}<SiteAnalytics /></body>
    </html>
  );
}
