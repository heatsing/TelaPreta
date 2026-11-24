import { pathFor } from '../routes.mjs';
import { MonitorTest } from './MonitorTest';
import { SiteChrome } from './SiteChrome';

export function MonitorTestPage({ locale, path, siteRoot, feedbackUrl }) {
  return (
    <SiteChrome
      locale={locale}
      path={path}
      languagePath={(language) => language.lang === locale.lang ? path : pathFor(language, 'black')}
      skipTarget="#teste"
      feedbackUrl={feedbackUrl}
    >
      <header className="page-intro">
        <h1>Teste de monitor online</h1>
        <p>Explore seis cores em uma única sessão de tela cheia. Compare o mesmo ponto da tela em cada etapa.</p>
      </header>
      <MonitorTest url={siteRoot + path} share={locale.share} />
    </SiteChrome>
  );
}
