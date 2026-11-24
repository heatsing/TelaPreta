import asia from './scene-copy-asia.mjs';
import europe from './scene-copy-eu.mjs';
import other from './scene-copy-other.mjs';
import asiaEditorial from './scene-editorial-asia.mjs';
import coreEditorial from './scene-editorial-core.mjs';
import europeEditorial from './scene-editorial-eu.mjs';
import otherEditorial from './scene-editorial-other.mjs';

const editorials = { ...coreEditorial, ...asiaEditorial, ...europeEditorial, ...otherEditorial };

export const sceneText = {
  ...asia,
  ...europe,
  ...other,
  'pt-BR': {
    start: 'Clique ou toque na prévia, ou use o botão Tela cheia abaixo do quadro.',
    exit: 'Para sair, clique ou toque na imagem ou no ícone de saída. Com um teclado, pressione Esc.',
    uses: 'Quando usar',
    bootLabel: 'Inicialização do Windows XP',
    noiseLabel: 'Ruído branco',
    updateControls: ['Duração da atualização', 'minutos', 'Porcentagem inicial', 'Reiniciar'],
    callControls: ['Seu nome', 'Total de participantes', 'Nome do participante', 'Os nomes ficam nesta página. A câmera e o microfone não são usados.'],
    noiseControls: ['Reproduzir ruído', 'Pausar ruído', 'Volume', 'O áudio não está disponível neste navegador.'],
    scenes: {
      error: [
        'Tela azul retrô do Windows online',
        'Mostre uma tela azul de erro retrô do Windows em uma simulação de navegador com modo de tela cheia.',
        'Confira o aviso de interrupção e os detalhes do quadro antes de abrir em tela cheia.',
        'Em uma aula sobre sistemas antigos, projete a tela enquanto apresenta o contexto de um travamento.',
        'Qual é a diferença entre esta tela e a tela azul sólida?',
        'Esta mostra um aviso de erro fictício. A tela azul sólida preenche a área com uma cor uniforme e pode ser usada para verificar o monitor.'
      ],
      cracked: [
        'Tela quebrada online com efeito de vidro trincado',
        'Exiba rachaduras que saem de um ponto de impacto e se espalham pela tela, com prévia e modo de tela cheia.',
        'Localize o ponto claro no centro da rachadura e ajuste o ângulo da câmera se for gravar o monitor.',
        'Use o efeito como elemento de cena em um vídeo curto que precise mostrar a aparência de um vidro danificado.',
        'O efeito de tela quebrada muda quando eu toco no monitor?',
        'O desenho das rachaduras permanece fixo. Um toque durante a exibição em tela cheia encerra a prévia.'
      ],
      radar: [
        'Radar animado em tela cheia',
        'Abra um radar com varredura circular, marcações em anéis e pontos ilustrativos sobre um fundo verde escuro.',
        'Use Pausar para fixar a direção da varredura ou Continuar para vê-la girar.',
        'Coloque o radar em um monitor ao fundo de uma cena de sala de controle.',
        'Os pontos do radar vêm de dados reais?',
        'Os pontos fazem parte do desenho. A animação funciona no navegador, sem acessar localização ou sensores.'
      ],
      terminal: [
        'Terminal fictício online',
        'Exiba um terminal verde com duas colunas de texto e símbolos para uma apresentação ou gravação.',
        'Confira se as duas colunas ficam legíveis na distância de gravação desejada.',
        'Use a imagem em um vídeo sobre interfaces antigas quando um console real mostraria informações privadas.',
        'Posso digitar comandos no terminal fictício?',
        'O terminal é visual. Os caracteres fazem parte da imagem e a página não executa comandos.'
      ],
      call: [
        'Videochamada falsa com nomes personalizáveis',
        'Monte uma chamada fictícia com até nove participantes. Edite os nomes e acompanhe as alterações na prévia.',
        'Digite seu nome, ajuste o total de participantes e edite os demais nomes no painel. O total inclui você.',
        'Prepare uma demonstração sobre reuniões remotas com nomes fictícios e inicial de cada pessoa nos cartões.',
        'A videochamada acessa a câmera ou envia os nomes?',
        'A grade é montada no navegador. A ferramenta não aciona câmera ou microfone, e os nomes digitados ficam na página.'
      ],
      'update-blue': [
        'Tela de atualização falsa do Windows 10',
        'Simule uma atualização do Windows 10 com fundo azul, porcentagem inicial e duração ajustáveis.',
        'Escolha a duração e a porcentagem inicial. Clique em Reiniciar para aplicar os valores.',
        'Em um vídeo de treinamento, comece perto de 100% para ilustrar os instantes finais da atualização.',
        'Posso congelar o progresso em um número?',
        'Sim. Clique em Pausar e use Continuar quando quiser que a porcentagem volte a avançar.'
      ],
      'update-retro': [
        'Tela de atualização falsa do Windows XP',
        'Abra uma atualização do Windows XP com visual azul retrô, barra de progresso e duração ajustável.',
        'Defina quantos minutos devem decorrer a partir da porcentagem inicial e clique em Reiniciar.',
        'Use a tela de atualização para ilustrar uma etapa de manutenção em um vídeo sobre computadores dos anos 2000.',
        'Qual é a diferença para a tela de inicialização do Windows XP?',
        'A atualização mostra uma porcentagem que avança até 100%. A tela de inicialização exibe uma animação em loop.'
      ],
      'update-silver': [
        'Tela de atualização falsa do Mac OS X',
        'Simule a atualização de um Mac com fundo escuro, barra clara e controle de duração e progresso inicial.',
        'Ajuste a duração e o ponto inicial. Use Reiniciar para começar novamente com esses valores.',
        'Em uma montagem de vídeo, enquadre a barra no monitor para indicar que o tempo passou entre duas tomadas.',
        'Essa tela instala algo no Mac?',
        'A instalação é apenas representada no navegador. A simulação pode ser aberta em outros sistemas e não altera arquivos ou configurações.'
      ],
      'update-violet': [
        'Tela de atualização falsa do Ubuntu 22.04',
        'Exiba uma atualização simulada do Ubuntu 22.04 com fundo roxo, duração em minutos e porcentagem inicial.',
        'Escolha a duração e a porcentagem e clique em Reiniciar. Use Pausar se precisar manter a mesma posição da barra.',
        'Mostre a espera por uma atualização em uma apresentação de Linux sem mudar a sessão que está sendo usada para demonstrar.',
        'O que acontece ao chegar a 100%?',
        'A barra permanece completa. Clique em Reiniciar quando quiser repetir a simulação.'
      ],
      'update-gray': [
        'Tela de atualização falsa do ChromeOS',
        'Mostre uma atualização simulada do ChromeOS em tela cheia, com tempo e porcentagem inicial configuráveis.',
        'Informe a duração e a porcentagem desejadas. Clique em Reiniciar para iniciar o progresso com esses ajustes.',
        'Mostre o progresso de uma atualização em uma apresentação sobre Chromebooks, inclusive usando um computador emprestado.',
        'Preciso de um Chromebook para abrir a tela?',
        'Você pode abrir a simulação em um navegador compatível em outros dispositivos. Ela não usa os recursos de atualização do ChromeOS.'
      ],
      'boot-xp': [
        'Tela de inicialização do Windows XP online',
        'Abra uma simulação de inicialização do Windows XP com fundo escuro e animação de carregamento em loop.',
        'Confira a faixa de carregamento na prévia. Use Pausar para segurar a animação em uma gravação.',
        'Mostre a transição para um computador antigo em uma apresentação ou em uma cena ambientada nos anos 2000.',
        'A tela entra na área de trabalho quando carrega?',
        'A animação se repete até você pausá-la ou sair da página. Ela roda no navegador e não inicializa um sistema operacional.'
      ],
      bounce: [
        'Protetor de tela com logo saltitante',
        'Deixe o logo TELA se mover de um lado a outro da tela como um efeito de descanso visual.',
        'Acompanhe o movimento horizontal e vertical na prévia. Use Pausar para manter o logo em um ponto.',
        'Exiba o efeito em um monitor secundário durante o intervalo de uma apresentação.',
        'O logo começa a saltar sozinho quando eu deixo o computador parado?',
        'O efeito funciona enquanto esta página estiver aberta. A ativação por inatividade faz parte das configurações do sistema.'
      ],
      clock: [
        'Relógio flip online em tela cheia',
        'Visualize a hora local com horas, minutos e segundos em um relógio de abas para o navegador.',
        'Confira a hora na prévia. Clique em Pausar para congelar os dígitos e em Continuar para voltar à hora atual.',
        'Coloque o relógio no monitor da sala para que todos vejam a hora durante uma atividade.',
        'Qual fuso horário é usado?',
        'A página lê a hora local fornecida pelo dispositivo. Ajuste o fuso nas configurações do aparelho se precisar.'
      ],
      quotes: [
        'Tela de frases para pausas',
        'Veja frases curtas em um fundo claro e troque o texto no navegador antes de usar a tela cheia.',
        'Clique em Outra frase até encontrar o texto que quer mostrar.',
        'Use uma frase de pausa no intervalo de uma transmissão, com um fundo que deixe a legenda legível.',
        'A frase muda sozinha depois de abrir a tela cheia?',
        'A frase escolhida permanece na tela. Saia da tela cheia e clique em Outra frase para mudar o texto.'
      ],
      bars: [
        'Tela sem sinal com barras coloridas',
        'Mostre barras de cor e o aviso “Sem sinal” como uma tela de demonstração em um monitor ou projetor.',
        'Confira as barras verticais e deixe o aviso centralizado no enquadramento da câmera.',
        'Use o efeito como imagem de transição em uma gravação em que um sinal de vídeo fictício foi interrompido.',
        'O aviso significa que o cabo do meu monitor soltou?',
        'O aviso é gerado pela página e continuará visível enquanto ela estiver aberta. O status real do sinal depende do aparelho e da conexão.'
      ],
      rain: [
        'Chuva digital animada em tela cheia',
        'Exiba colunas de letras e números verdes em movimento sobre um fundo escuro.',
        'Use Pausar para fixar os caracteres ou Continuar para fazê-los descer novamente.',
        'Use a chuva digital como pano de fundo em um vídeo de tecnologia, longe do texto principal da edição.',
        'Os caracteres mostram a atividade do computador?',
        'As colunas usam sequências ilustrativas do próprio site. Elas não leem arquivos ou processos do aparelho.'
      ],
      'white-noise': [
        'Tela de ruído branco com estática de TV',
        'Veja o granulado preto e branco de uma TV sem sintonia e, se quiser, reproduza ruído branco em volume ajustável.',
        'Clique em Reproduzir ruído para ouvir o áudio. Ajuste o volume no painel antes de abrir em tela cheia.',
        'Use a textura estática ao fundo de um vídeo ou ligue o som por alguns instantes para conferir os alto-falantes.',
        'O som começa junto com a imagem?',
        'O ruído só toca após você clicar em Reproduzir ruído. Use Pausar ruído ou feche a página para silenciar.'
      ]
    }
  },
  en: {
    start: 'Click or tap the preview, or select the Fullscreen button below it.',
    exit: 'Click or tap the display or the exit icon to return. If you have a keyboard, press Esc.',
    uses: 'When to use it',
    bootLabel: 'Windows XP Boot',
    noiseLabel: 'White Noise',
    updateControls: ['Update duration', 'minutes', 'Starting percentage', 'Restart'],
    callControls: ['Your name', 'Total participants', 'Participant name', 'Names stay on this page. Your camera and microphone are never used.'],
    noiseControls: ['Play noise', 'Pause noise', 'Volume', 'Audio is unavailable in this browser.'],
    scenes: {
      error: [
        'Retro Windows Blue Screen Simulation',
        'Open a retro Windows error screen with a mock interruption message and fullscreen browser preview.',
        'Check the interruption message in the preview before opening it on the display you want to use.',
        'Show it during a lesson on early desktop operating systems to illustrate what an interrupted session looks like.',
        'How is this different from a solid blue screen?',
        'This scene includes a simulated Windows error. For uniform blue to check a display or use as a backdrop, open the solid blue screen.'
      ],
      cracked: [
        'Broken Screen Online with a Cracked Glass Effect',
        'Display a dark cracked-glass pattern with fractures radiating from an impact point, including a fullscreen mode.',
        'Check where the impact point is in the preview so you can frame it if you are filming the display.',
        'Use the scene as a visual prop in a video where a monitor needs to appear cracked.',
        'Do the cracks move when I tap the screen?',
        'The fracture pattern stays in place. Tapping the fullscreen preview closes it.'
      ],
      radar: [
        'Animated Radar Screen Online',
        'Run a fullscreen radar display with a rotating sweep, range rings, and sample targets.',
        'Use Pause to hold the sweep or Resume to start it turning again.',
        'Place the radar on a second monitor to add a control-room display to a demo or a recording.',
        'Does it detect real targets?',
        'The markers are built into the visual. The page does not access your location, radar equipment, or sensors.'
      ],
      terminal: [
        'Fictional Terminal Screen Online',
        'Show a two-panel terminal display with green text and symbols as a browser backdrop.',
        'Check that both panels are in frame if you plan to record the display.',
        'Use the console in a technical walkthrough to show the appearance of a terminal without exposing account names or files.',
        'Can I enter commands in this terminal?',
        'The text is part of a display effect. The browser preview does not execute commands.'
      ],
      call: [
        'Fake Video Call Screen with Editable Names',
        'Set up a mock video call with up to nine participants and change their names in the live preview.',
        'Enter your name, choose the total number of participants, and edit the remaining names. The total includes your own tile.',
        'Build a screen for a remote-meeting demo using fictional names before recording a walkthrough.',
        'Does this open a camera or send the names?',
        'The browser draws the tiles on this page. No camera or microphone is used and the entered names stay on the page.'
      ],
      'update-blue': [
        'Windows 10 Fake Update Screen',
        'Display a fullscreen Windows 10 update simulation with a blue background, adjustable duration, and starting percentage.',
        'Set the duration and starting percentage, then select Restart to apply both values.',
        'Start near 100% when recording the final moments of an update for a training video.',
        'Can I freeze the update at the current percentage?',
        'Select Pause to hold the progress. Select Resume to continue the same run.'
      ],
      'update-retro': [
        'Windows XP Fake Update Screen',
        'Show a retro blue Windows XP update with a progress bar, starting percentage, and adjustable duration.',
        'Choose the number of minutes to reach 100% from the starting percentage, then select Restart.',
        'Use the update scene in a retrospective about personal computers from the early 2000s.',
        'How does this differ from the Windows XP boot screen?',
        'The update scene runs from a set percentage to 100%. The boot screen loops a loading animation.'
      ],
      'update-silver': [
        'Mac OS X Fake Update Screen',
        'Open a dark Mac OS X update simulation with a light progress bar and controls for duration and starting percentage.',
        'Enter the duration and starting percentage you want, then select Restart to start that run.',
        'Film a few seconds of the progress bar between two shots to suggest a pause while a Mac updates.',
        'Does this install updates on my Mac?',
        'The progress is drawn in the browser. It can run on other systems and leaves your device settings and files untouched.'
      ],
      'update-violet': [
        'Ubuntu 22.04 Fake Update Screen',
        'Show a fullscreen Ubuntu 22.04 update simulation with a purple backdrop and a configurable progress bar.',
        'Set the duration and starting percentage, then select Restart. Use Pause to hold the progress if needed.',
        'Use the scene to show an update in a Linux walkthrough while keeping your demo session available.',
        'What happens at 100%?',
        'The message remains on screen with a full bar. Select Restart to run the simulation again.'
      ],
      'update-gray': [
        'ChromeOS Fake Update Screen',
        'Show a simulated ChromeOS update with a dark teal backdrop and adjustable starting percentage and duration.',
        'Enter the starting percentage and the number of minutes, then select Restart to apply the settings.',
        'Illustrate an update during a Chromebook presentation, even if the computer you are presenting from runs another OS.',
        'Do I need a Chromebook to use the scene?',
        'A compatible web browser is enough. The scene does not interact with ChromeOS update services.'
      ],
      'boot-xp': [
        'Windows XP Boot Screen Online',
        'Display a retro Windows XP boot simulation with a dark background and a looping loading animation.',
        'Check the loading strip in the preview. Select Pause to hold the animation for a shot.',
        'Use the startup view to establish the era of a computer in a video or a presentation about older PCs.',
        'Will it load a Windows XP desktop?',
        'The loading animation loops until you pause or exit. It runs in the browser and does not start an operating system.'
      ],
      bounce: [
        'Bouncing Logo Screensaver Online',
        'Let the TELA logo bounce horizontally and vertically across a dark fullscreen browser display.',
        'Watch the movement in the preview. Select Pause if you need the logo to stay in one place.',
        'Put the animated logo on a spare monitor during a break in a presentation.',
        'Will the screensaver start when I leave my computer idle?',
        'Open this page whenever you want the animation to run. Automatic idle screensavers are managed in your operating system settings.'
      ],
      clock: [
        'Online Flip Clock in Fullscreen',
        'Show your local time in a flip clock with hours, minutes, and seconds on a browser display.',
        'Check the time in the preview. Select Pause to freeze the digits and Resume to display the current time again.',
        'Set it up on a shared monitor to make the time easy to see during an activity or workshop.',
        'Which time zone does the flip clock use?',
        'It follows the local time provided by your device. Change the time zone in device settings if you need to display another one.'
      ],
      quotes: [
        'Fullscreen Quote Screen',
        'Put a short quote on a quiet, light background and choose which one appears in the fullscreen preview.',
        'Select Next quote until you find the line you want to display.',
        'Use the quote screen as an intermission card between sessions or livestream segments.',
        'Will the quote change while I am in fullscreen?',
        'The chosen text stays on screen. Exit fullscreen and select Next quote to display a different line.'
      ],
      bars: [
        'No Signal Screen with Color Bars',
        'Display vertical color bars and a centered No signal message in a fullscreen browser simulation.',
        'Use the preview to check that the No signal message is in frame before recording.',
        'Place the image between clips in a video where a fictional feed goes offline.',
        'Do the color bars mean my monitor lost its connection?',
        'This message is drawn by the page. Check your monitor and cable if you need to diagnose an actual signal problem.'
      ],
      rain: [
        'Digital Rain Screensaver Online',
        'Fill your browser display with falling columns of green letters and numbers against a dark background.',
        'Select Pause to hold the characters in place or Resume to let them fall again.',
        'Use it as a background for a technology video or a spare display at an event.',
        'Are the characters taken from activity on my device?',
        'The columns use visual patterns stored in the site. They do not read files or system activity.'
      ],
      'white-noise': [
        'White Noise Screen with TV Static',
        'Show a black-and-white TV static texture in fullscreen and play optional white noise with adjustable volume.',
        'Select Play noise if you want audio. Set the volume in the side panel before opening fullscreen.',
        'Use the grain as a TV-static backdrop or briefly play the sound to check a speaker.',
        'Does the white noise start when the page opens?',
        'Sound starts after you select Play noise. Select Pause noise or close the page to stop it.'
      ]
    }
  }
};

export function sceneGuidance(lang, scene) {
  const { start, exit, uses, scenes } = sceneText[lang];
  const { relatedHeading, fullscreenFaq, scenes: details } = editorials[lang];
  const [title, description, step, use, question, answer] = scenes[scene.id];
  const { about, aboutTitle, fullscreenStep, useTitle, usesTitle, extraUses, extraFaq } = details[scene.id];
  return {
    ...scene, title, description,
    guide: {
      steps: [step, start, fullscreenStep, exit],
      about,
      aboutTitle,
      usesTitle: usesTitle ?? uses,
      examples: [[useTitle, use], ...extraUses],
      faq: [[question, answer], ...extraFaq, fullscreenFaq],
      relatedHeading
    }
  };
}
