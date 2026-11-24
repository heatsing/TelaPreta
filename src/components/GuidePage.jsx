import { pathFor, relativeHref } from '../routes.mjs';
import { SiteChrome } from './SiteChrome';
import '../assets/guides.css';

const monitorTest = '/teste-de-monitor/';
const pixelTest = '/teste-de-monitor/#pixel-morto';
const monitorGuide = '/como-testar-monitor/';
const pixelGuide = '/pixel-morto-pixel-preso-ou-sujeira/';

const references = {
  dellPixels: 'https://www.dell.com/support/kbdoc/pt-br/000126004/diretrizes-de-pixels-da-tela-dell?lang=pt',
  dellDiagnostic: 'https://www.dell.com/support/kbdoc/pt-br/000124390/como-executar-um-teste-de-diagn%C3%B3stico-em-um-monitor-dell',
  dellModel: 'https://dl.dell.com/content/manual727829-p2422h-monitor-manual-de-usu%C3%A1rio.pdf?language=pt-br#page=76',
  eizo: 'https://www.eizo.com/library/basics/eizo-monitor-test/',
  cleaning: 'https://www.lg.com/br/suporte/suporte-ao-producto/solucionar-problemas/help-library/cs-CT52001755-20154710864504/',
  analytics: 'https://policies.google.com/technologies/partner-sites?hl=pt-BR'
};

function ComparisonTable({ heading, columns, rows }) {
  return (
    <table aria-labelledby={heading}>
      <thead>
        <tr>{columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map(([name, observation, check]) => (
          <tr key={name}>
            <th scope="row">{name}</th>
            <td>{observation}</td>
            <td>{check}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MonitorGuide({ linkTo }) {
  return (
    <>
      <section id="checklist" aria-labelledby="checklist-title">
        <h2 id="checklist-title">Checklist antes de aceitar o monitor</h2>
        <ol>
          <li>Com a tela desligada, procure riscos e marcas. Remova a poeira com um pano de microfibra, seguindo o manual do modelo.</li>
          <li>Conecte o monitor ao computador. Selecione a resolução nativa e confira se a taxa de atualização anunciada está disponível na entrada e no cabo que você pretende usar.</li>
          <li>Abra o <a href={linkTo(monitorTest)}>teste de monitor online</a> no próprio painel que será avaliado. Inicie a tela cheia e passe por preto, branco, vermelho, verde, azul e cinza.</li>
          <li>Observe o centro e os cantos. Anote a posição dos pontos suspeitos e em quais fundos aparecem.</li>
          <li>Repita o padrão que revelou o problema. Antes de decidir sobre a compra ou buscar suporte, compare com o diagnóstico do monitor, quando disponível, e consulte a política de pixels do modelo.</li>
        </ol>
        <p><a href={linkTo('/assets/teste-de-monitor-demo.mp4')} type="video/mp4">Ver demonstração do teste de pixel morto (28 s)</a>.</p>
      </section>

      <section aria-labelledby="cor-teste-title">
        <h2 id="cor-teste-title">O que observar em cada fundo</h2>
        <ComparisonTable
          heading="cor-teste-title"
          columns={['Fundo', 'O que observar', 'Como confirmar']}
          rows={[
            ['Preto', 'Pontos claros ou coloridos que ficam na mesma posição.', 'Troque a cor e volte ao preto para confirmar a posição.'],
            ['Branco', 'Pontos escuros, linhas e manchas.', 'Confira a superfície com a tela desligada e repita o fundo branco após limpar.'],
            ['Vermelho, verde e azul', 'Pontos escuros ou de outra cor em um dos fundos.', 'Compare a mesma posição nas três cores para ver se o ponto depende de uma delas.'],
            ['Cinza', 'Faixas, manchas maiores e regiões mais claras ou escuras.', 'Compare centro e cantos olhando de frente, sem mudar o brilho durante a inspeção.']
          ]}
        />
        <p>O teste de uniformidade da EIZO é outra referência para avaliar diferenças de brilho entre regiões do painel. <a href={references.eizo}>Guia de teste da EIZO</a>.</p>
      </section>

      <section aria-labelledby="autodiagnostico-title">
        <h2 id="autodiagnostico-title">Exemplo de autodiagnóstico no Dell P2422H</h2>
        <p>O manual desse modelo orienta a manter o joystick inclinado por cerca de quatro segundos e selecionar o ícone de diagnóstico. Compare se uma linha observada no navegador aparece também nos fundos do diagnóstico integrado. Se aparecer nos dois, informe isso ao suporte. Se aparecer apenas com o computador conectado, teste outra entrada, outro cabo ou outra fonte de vídeo. <a href={references.dellModel}>Manual do Dell P2422H</a> e <a href={references.dellDiagnostic}>instruções de diagnóstico da Dell</a>.</p>
        <p>Se o problema for um ponto isolado, veja como <a href={linkTo(pixelGuide)}>distinguir pixel morto, pixel preso e sujeira</a>.</p>
      </section>
    </>
  );
}

function PixelGuide({ linkTo }) {
  return (
    <>
      <section aria-labelledby="passos-pixel-title">
        <h2 id="passos-pixel-title">Teste o mesmo ponto em três etapas</h2>
        <ol>
          <li>Desligue a tela, siga a orientação de limpeza do modelo e passe um pano de microfibra com cuidado. <a href={references.cleaning}>Instruções de limpeza da LG</a>.</li>
          <li>Abra o <a href={linkTo(pixelTest)}>teste de pixel morto em tela cheia</a>. Compare o mesmo ponto nos fundos preto e branco.</li>
          <li>Alterne vermelho, verde e azul. Anote a posição do ponto e as cores em que ele fica visível. Se o monitor tiver autodiagnóstico, repita nele o padrão em que o ponto apareceu.</li>
        </ol>
      </section>

      <section aria-labelledby="comparacao-pixel-title">
        <h2 id="comparacao-pixel-title">Como interpretar o que você vê</h2>
        <ComparisonTable
          heading="comparacao-pixel-title"
          columns={['Hipótese', 'Aparência típica', 'O que comparar']}
          rows={[
            ['Pixel morto', 'Ponto escuro em posição fixa sobre branco e outras cores.', 'Depois de limpar a tela, confirme se continua escuro nos fundos vermelho, verde e azul.'],
            ['Pixel ou subpixel preso', 'Ponto luminoso fixo, branco ou colorido, mais evidente no preto.', 'Se o ponto for vermelho no preto e se misturar ao fundo vermelho, compare também verde e azul.'],
            ['Sujeira', 'Marca na superfície, às vezes visível com a tela desligada e sob luz lateral.', 'Repita o mesmo fundo depois da limpeza. Se a marca sumir, era algo na superfície.']
          ]}
        />
        <p>Um ponto escuro que aparece apenas em um fundo primário pode indicar falha de um subpixel. A Dell ilustra como pontos claros aparecem no preto e pontos escuros aparecem no branco. <a href={references.dellPixels}>Diretrizes de pixels da Dell</a>.</p>
      </section>

      <section aria-labelledby="proximo-passo-title">
        <h2 id="proximo-passo-title">O que fazer se o ponto continuar lá</h2>
        <p>Registre a quantidade, a localização e as cores em que o ponto aparece. Com o modelo do monitor em mãos, consulte a política de pixels do fabricante. Se precisar de ajuda, envie ao suporte os resultados do teste e uma foto da tela, se conseguir mostrar o ponto com nitidez. <a href={references.dellDiagnostic}>Como repetir o teste no diagnóstico integrado</a>.</p>
        <p>Para avaliar também brilho irregular, linhas e entradas de vídeo, use o <a href={linkTo(`${monitorGuide}#checklist`)}>checklist para monitor novo ou usado</a>.</p>
      </section>
    </>
  );
}

function AboutPage({ linkTo, feedbackUrl }) {
  const contact = feedbackUrl?.href ?? 'https://github.com/heatsing/TelaPreta/issues';

  return (
    <>
      <section aria-labelledby="sobre-ferramentas-title">
        <h2 id="sobre-ferramentas-title">Ferramentas para a sua tela</h2>
        <p>O TelaPreta.cc oferece telas de cor sólida em tela cheia, arquivos PNG gerados no navegador e simulações visuais. O <a href={linkTo(monitorTest)}>teste de monitor</a> reúne as cores de inspeção em uma sequência com instruções.</p>
      </section>

      <section id="contato" aria-labelledby="contato-title">
        <h2 id="contato-title">Contato</h2>
        <p>Se algo falhar, informe a página, o dispositivo, o navegador e o que aconteceu. <a href={contact}>Relatar um problema ou enviar uma sugestão</a>.</p>
      </section>

      <section id="estatisticas" aria-labelledby="estatisticas-title">
        <h2 id="estatisticas-title">Estatísticas de acesso</h2>
        <p>No domínio de produção, o Google Tag Manager carrega o Google Analytics para medir visitas. Isso ajuda a entender quais páginas são usadas. O navegador pode enviar ao Google o endereço da página e informações sobre o dispositivo. A medição pode usar cookies. <a href={references.analytics}>Como o Google usa essas informações</a>.</p>
      </section>
    </>
  );
}

const bodies = {
  'monitor-guide': MonitorGuide,
  'pixel-guide': PixelGuide,
  about: AboutPage
};

export function GuidePage({ guide, locale, path, feedbackUrl }) {
  const Body = bodies[guide.id];
  const linkTo = (target) => relativeHref(path, target);

  return (
    <SiteChrome locale={locale} path={path} languagePath={(other) => other.lang === locale.lang ? path : pathFor(other, 'black')} skipTarget="#conteudo" feedbackUrl={feedbackUrl}>
      <header className="page-intro"><h1 id="guide-title">{guide.title}</h1></header>
      <article className="editorial guide-article" id="conteudo" aria-labelledby="guide-title" tabIndex={-1}>
        <Body linkTo={linkTo} feedbackUrl={feedbackUrl} />
      </article>
    </SiteChrome>
  );
}
