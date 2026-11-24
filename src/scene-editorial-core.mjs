export default {
  en: {
    relatedHeading: 'Related screens and tools',
    fullscreenFaq: [
      'What if my browser keeps the address bar in fullscreen?',
      'When native fullscreen is unavailable, the scene fills the area the browser gives the page. Click or tap the scene or its exit icon to return, or press Esc on a keyboard.'
    ],
    scenes: {
      error: {
        about: 'The scene combines a dark blue background, warning icon, and fictional interruption message. It represents the appearance of a retro Windows error for demos, while the computer and browser continue running.',
        fullscreenStep: 'Check that the whole warning, including the icon, is visible on the display you are filming.',
        useTitle: 'Explain an interrupted session in a lesson',
        extraUses: [['Show an error between two shots', 'Switch from your working screen to the error scene between takes. Cut back to the original view when the actor dismisses it.']],
        extraFaq: [['Will it show a real Windows stop code?', 'The preview uses a fixed demo message. For an actual crash, note the stop code on the original error screen before opening another page.']]
      },
      cracked: {
        about: 'A bright impact point sends fine lines across a dark background. The cracks are part of a fixed drawing, so their position stays consistent while you set up a camera or show the screen to someone.',
        fullscreenStep: 'Adjust your camera framing so the outer branches of the cracks are visible at the edges.',
        useTitle: 'Film a damaged-display close-up',
        extraUses: [['Rehearse a repair demonstration', 'Give the presenter a visible crack to point at while explaining which part of a real device would need inspection.']],
        extraFaq: [['Can I move the impact point or rotate the cracks?', 'The pattern has a fixed orientation in the tool. Frame the display from another angle if the impact point needs to appear elsewhere in your shot.']]
      },
      radar: {
        about: 'A rotating wedge crosses range rings and fixed sample marks. Pause and Resume control the sweep on this page, making it possible to inspect the layout as a still or show it in motion.',
        fullscreenStep: 'Watch for a full sweep to judge how much of the motion will be visible in your shot.',
        useTitle: 'Build a control-room backdrop',
        extraUses: [['Label a radar diagram for a class', 'Pause the webpage preview and point out the sweep and range rings before showing the labels on your own slide.']],
        extraFaq: [['Can I adjust the scanning speed or marker positions?', 'The sweep rate and points are fixed in this scene. Use Pause or Resume to choose between a still preview and continuous motion.']]
      },
      terminal: {
        about: 'The fictional terminal shows two columns of green symbols and demo text. Each panel has a fixed layout so you can position the scene without waiting for output or entering any commands.',
        fullscreenStep: 'Stand at your intended shooting distance and check that both panel outlines are visible.',
        useTitle: 'Demonstrate a console layout',
        extraUses: [['Dress a background monitor', 'Use the two green panels as a visual cue in a scene set in a server room. Keep the monitor off to the side if a speaker is the focus.']],
        extraFaq: [['Will the characters scroll or respond to typing?', 'The terminal stays still. For a display with moving green characters, open Digital Rain from the related screens.']]
      },
      call: {
        about: 'The participant grid redraws as you edit names and change the total. It shows initials with nameplates, and the count includes the tile for Your name.',
        fullscreenStep: 'Check how long names fit in the tiles. Return to the page if a shorter display name is easier to read.',
        useTitle: 'Rehearse a remote-meeting demo',
        extraUses: [['Frame a group call for a recording', 'Try a few participant counts and compare the tile sizes. Pick a smaller grid for a tight camera crop and use fictional names in your test.']],
        extraFaq: [['How many participant tiles can I show?', 'Choose a total from one to nine. Your own tile counts toward the total, so a group of six includes you and five other names.']]
      },
      'update-blue': {
        about: 'The Windows 10 scene displays a percentage and progress bar against a blue backdrop. The duration measures the time from the selected starting percentage to 100%.',
        fullscreenStep: 'Check that the progress text is legible from your camera position before starting the take.',
        useTitle: 'Film the last part of an update',
        extraUses: [['Rehearse a progress cut', 'Start at a known percentage and pause before you cut away. Keep the tab open so you can resume the same run for the next take.']],
        extraFaq: [['Do changes to the inputs affect the current run?', 'The new values apply when you select Restart. The running preview keeps its previous settings until then.']]
      },
      'update-retro': {
        about: 'This Windows XP update scene pairs a retro blue panel with a progress bar and a numeric percentage. The timer uses the start value you apply with Restart and holds at 100% when the run ends.',
        fullscreenStep: 'Watch the first visible percentage in fullscreen to make sure you started the intended run.',
        useTitle: 'Show maintenance in a retro-computing video',
        extraUses: [['Set up matching takes', 'Apply the same starting percentage and duration for each recording, then roll the camera from the same point in the sequence.']],
        extraFaq: [['Can I start at 100% for a finished-update shot?', 'Yes. Enter 100 as the starting percentage and select Restart. The bar stays full until you apply a different starting value.']]
      },
      'update-silver': {
        about: 'The Mac OS X scene puts a light progress bar and percentage on a dark canvas. The run continues when you move between the page preview and fullscreen, using the settings applied with Restart.',
        fullscreenStep: 'Check that the light bar is visible against the dark display at the exposure you plan to use.',
        useTitle: 'Show time passing between two shots',
        extraUses: [['Rehearse a demo handoff', 'Set a duration that gives the presenter time to explain the update step, then use Pause if the practice session needs a break.']],
        extraFaq: [['Does opening fullscreen reset the percentage?', 'The preview and fullscreen share the same progress. Select Restart on the page when you want to start a fresh run.']]
      },
      'update-violet': {
        about: 'The Ubuntu 22.04 simulation uses a purple background with a percentage and a progress bar. After you apply a duration and starting percentage, one run advances to completion.',
        fullscreenStep: 'Check the purple screen on the projector and leave enough room in the frame for the percentage.',
        useTitle: 'Walk through a Linux update',
        extraUses: [['Match progress to a voice-over', 'Choose a starting value that suits your narration and pause between segments so the progress stays consistent.']],
        extraFaq: [['Can I keep the screen open at the same percentage?', 'Select Pause on the page before you enter fullscreen. Exit fullscreen and select Resume when you want the run to continue.']]
      },
      'update-gray': {
        about: 'The ChromeOS simulation draws a progress indicator on a dark teal background. The percentage increases from the starting value to 100% over the number of minutes applied with Restart.',
        fullscreenStep: 'Check the percentage against the teal backdrop from the back of the room before starting the explanation.',
        useTitle: 'Show an update in a Chromebook presentation',
        extraUses: [['Stage a help-desk onboarding example', 'Display the progress bar on a spare monitor while a trainer explains what information to check on an actual device.']],
        extraFaq: [['What should I do to repeat the same run?', 'Use the same duration and starting percentage, then select Restart. The preview starts at that value again.']]
      },
      'boot-xp': {
        about: 'The dark startup display shows Windows XP above a loading strip with moving blocks. Its animation repeats for as long as the scene is running, and Pause controls the animation on the page.',
        fullscreenStep: 'Let the loading strip run through a cycle to check the motion in your frame.',
        useTitle: 'Establish the era of a computer in a shot',
        extraUses: [['Compare startup and update states', 'Show the loop first, then switch to the XP update scene to illustrate the difference between a startup indicator and percentage-based progress.']],
        extraFaq: [['Why are the loading blocks standing still?', 'Check whether the page is paused or your system requests reduced motion. Select Resume if you want the animation to move.']]
      },
      bounce: {
        about: 'The TELA logo moves side to side and up and down on a dark field. The page provides controls to pause or resume the movement while the browser is open.',
        fullscreenStep: 'Let the logo move across the area once to check its visibility from where people will sit.',
        useTitle: 'Put a spare screen to use between sessions',
        extraUses: [['Add movement behind a product shot', 'Set the animation on a background display and move it farther from the camera if the lettering competes with the main subject.']],
        extraFaq: [['Can I use my own image for the bouncing logo?', 'This scene uses the built-in TELA logo. Use a presentation or video editor with a motion effect to animate your own image.']]
      },
      clock: {
        aboutTitle: 'How the Online Flip Clock Works',
        usesTitle: 'What Can You Use a Flip Clock For?',
        about: 'The flip clock shows hours, minutes, and seconds on three split-flap-style tiles. It reads the time on your device, uses a 24-hour format, and refreshes the digits while the clock is running. Midnight appears as 00:00:00.',
        fullscreenStep: 'Check the digits from where the clock will be read. For a second monitor, move the browser window to that display before entering fullscreen.',
        useTitle: 'Keep time visible during a workshop',
        extraUses: [
          ['Check the time without switching tabs', 'Leave the clock on a spare monitor while you work on your main screen. The seconds are visible when you need to start a call or end a break at a specific minute.'],
          ['Hold a time for a photo or recording', 'Select Pause when the desired time appears, then open the preview in fullscreen. Use Resume after the shot to return to the current time.']
        ],
        extraFaq: [
          ['What happens while the clock is paused?', 'Pause holds the visible time. Resume reads the device clock again, so the display jumps to the current time.'],
          ['Why is the time on the flip clock wrong?', 'Compare it with the clock in your device settings. Check the time zone and automatic time setting there, then reload the page.'],
          ['Is the fullscreen clock a countdown?', 'The display shows time of day. Use your device’s timer app if you need a countdown or an alarm.']
        ]
      },
      quotes: {
        about: 'The screen displays one short phrase at a time on a light background. Next quote cycles through the available lines, and fullscreen keeps the selection you made on the page.',
        fullscreenStep: 'Check how the line breaks on the screen you plan to use, especially on a narrow display.',
        useTitle: 'Show an intermission card',
        extraUses: [['Prepare a still frame for a presentation', 'Cycle through the lines until a short one fits your slide or recording, then open fullscreen for a clear frame.']],
        extraFaq: [['Can I enter a custom quote?', 'The button cycles through the page’s built-in phrases. For custom text, use a slide or text editor in full-screen presentation mode.']]
      },
      bars: {
        about: 'The scene shows a fixed set of vertical color bars with a No signal label. The browser draws both the label and the bars, so the display continues to show the image while a connection is active.',
        fullscreenStep: 'Make sure the color bars fill your shot and the No signal text is in frame.',
        useTitle: 'Show an interruption in a video feed',
        extraUses: [['Rehearse a production handoff', 'Use the bars as a visible cue while the crew practices moving from a live shot to an interruption card.']],
        extraFaq: [['Can I use the bars to calibrate a monitor?', 'These bars are a visual simulation. Use a standardized calibration pattern and the monitor’s calibration controls for that task.']]
      },
      rain: {
        about: 'Columns of green letters and digits move at staggered timings on a dark backdrop. The character sequences are built into the page, and Pause and Resume control their motion.',
        fullscreenStep: 'Check that the moving columns support the shot without drawing attention away from the subject.',
        useTitle: 'Add character motion to a technology backdrop',
        extraUses: [['Use a still as a transition frame', 'Pause the columns on the page and capture a frame of the preview if you need static green text between clips.']],
        extraFaq: [['Why do some of the columns repeat?', 'The animation reuses a short set of visual sequences as it loops. The offsets keep the columns moving at different points in the cycle.']]
      },
      'white-noise': {
        about: 'The screen displays a fixed black-and-white TV grain texture. The audio controls generate a separate looping noise signal in the browser, so you can show the texture silently or adjust the sound.',
        fullscreenStep: 'Check the grain at the size you plan to record. Return to the page to adjust audio volume.',
        useTitle: 'Create a TV-static background or check speaker output',
        extraUses: [['Cut to silent static in an edit', 'Leave the sound paused and capture the texture in fullscreen, then use that shot between clips in your edit.']],
        extraFaq: [['Can the static stay visible after I pause the sound?', 'Yes. Pause noise changes only the sound. The texture remains in the preview and can still enter fullscreen.']]
      }
    }
  },
  'pt-BR': {
    relatedHeading: 'Telas e ferramentas relacionadas',
    fullscreenFaq: [
      'O que fazer se a barra do navegador continuar visível?',
      'Se o navegador restringir a tela cheia, a cena ocupa a área disponível na página. Clique ou toque na cena ou no ícone de saída, ou pressione Esc no teclado, para voltar.'
    ],
    scenes: {
      error: {
        about: 'O quadro combina um fundo azul escuro, um símbolo de aviso e uma mensagem fictícia de interrupção. Ele reproduz a aparência de um erro antigo enquanto o navegador e a sessão do computador continuam funcionando.',
        fullscreenStep: 'Veja se o aviso inteiro, inclusive o símbolo, aparece no enquadramento.',
        useTitle: 'Ilustrar uma interrupção em aula',
        extraUses: [['Simular um erro entre duas tomadas', 'Troque o quadro normal pela tela de erro durante o corte e volte ao quadro original quando a cena pedir.']],
        extraFaq: [['O aviso exibe um código de erro do meu computador?', 'A mensagem pertence à demonstração. Se o computador travou de verdade, anote o código na própria tela do erro para consultá-lo depois.']]
      },
      cracked: {
        about: 'As trincas partem de um ponto de impacto iluminado e se ramificam no fundo escuro. O desenho fica fixo, o que permite mover a câmera e repetir o mesmo enquadramento.',
        fullscreenStep: 'Ajuste o quadro para que as trincas mais distantes do centro também apareçam.',
        useTitle: 'Gravar um close de uma tela trincada',
        extraUses: [['Ensaiar uma explicação de assistência técnica', 'Aponte para a área do impacto enquanto explica quais partes de um aparelho de verdade precisariam de inspeção.']],
        extraFaq: [['Posso mudar a posição do ponto de impacto?', 'A ferramenta usa um padrão fixo. Mude o enquadramento da câmera se quiser posicionar o impacto em outra parte da imagem gravada.']]
      },
      radar: {
        about: 'Um setor iluminado gira sobre anéis de referência e pontos fixos. Pausar e Continuar controlam a rotação no navegador, para que o quadro possa ser visto parado ou em movimento.',
        fullscreenStep: 'Acompanhe uma volta da varredura para conferir o ritmo no monitor ou na câmera.',
        useTitle: 'Fazer um fundo de sala de controle',
        extraUses: [['Explicar os anéis em uma aula', 'Pause a prévia, mostre onde ficam os anéis e os pontos e complemente com o diagrama da aula.']],
        extraFaq: [['Dá para ajustar a velocidade ou a posição dos pontos?', 'A velocidade e os pontos são definidos pela cena. Use Pausar ou Continuar para alternar entre a prévia parada e a animação.']]
      },
      terminal: {
        about: 'Duas colunas reúnem texto e símbolos verdes em painéis fixos. Você pode ajustar a distância da câmera sem esperar pela saída de um comando ou mostrar arquivos do seu computador.',
        fullscreenStep: 'Verifique da distância da filmagem se as bordas dos dois painéis aparecem.',
        useTitle: 'Demonstrar o visual de um console',
        extraUses: [['Montar o fundo de uma cena sobre servidores', 'Coloque os painéis verdes em um monitor lateral para sugerir uma interface técnica sem tirar atenção da pessoa que fala.']],
        extraFaq: [['O texto corre pelo quadro enquanto a página fica aberta?', 'Os caracteres ficam fixos. A Chuva digital oferece colunas em movimento se esse for o efeito desejado.']]
      },
      call: {
        about: 'A grade se ajusta ao total escolhido e atualiza os cartões à medida que você edita os nomes. Cada cartão combina iniciais e um nome, e a contagem inclui a área reservada para Seu nome.',
        fullscreenStep: 'Confira se os nomes compridos cabem nos cartões. Volte ao painel para abreviar se precisar.',
        useTitle: 'Ensaiar uma demonstração de reunião remota',
        extraUses: [['Enquadrar uma chamada em grupo', 'Compare uma grade pequena com uma maior. Use poucos cartões se o trecho gravado mostrar apenas parte do monitor.']],
        extraFaq: [['Quantos participantes podem aparecer?', 'O total pode ir de um a nove. Com seis participantes, por exemplo, há um cartão seu e cinco para outros nomes.']]
      },
      'update-blue': {
        about: 'A tela azul do Windows 10 exibe uma barra acompanhada de porcentagem. A duração conta a partir do valor inicial aplicado até chegar a 100%.',
        fullscreenStep: 'Veja se a porcentagem é legível da posição em que o monitor será gravado.',
        useTitle: 'Gravar o fim de uma atualização',
        extraUses: [['Ensaiar um corte durante o progresso', 'Comece em uma porcentagem conhecida e pause no ponto do corte. Mantenha a aba aberta para retomar a mesma execução na próxima tomada.']],
        extraFaq: [['Alterar os campos muda a execução atual?', 'Os novos valores são aplicados com Reiniciar. Até lá, a prévia em curso usa os valores da execução anterior.']]
      },
      'update-retro': {
        about: 'A faixa azul retrô do Windows XP acompanha uma barra de progresso numérica. Cada execução começa na porcentagem que você aplica com Reiniciar e fica em 100% ao terminar.',
        fullscreenStep: 'Confira o primeiro valor visível para confirmar que a tomada começou na posição escolhida.',
        useTitle: 'Recriar uma etapa de manutenção de época',
        extraUses: [['Manter a continuidade entre tomadas', 'Aplique a mesma duração e o mesmo percentual inicial a cada repetição e comece a gravar no mesmo ponto.']],
        extraFaq: [['Posso começar com a barra já completa?', 'Sim. Digite 100 na porcentagem inicial e use Reiniciar. A barra fica cheia até você aplicar outro valor.']]
      },
      'update-silver': {
        about: 'O quadro escuro do Mac OS X contrasta com a barra clara e a porcentagem. A prévia e a tela cheia mostram a mesma execução, com os valores aplicados no botão Reiniciar.',
        fullscreenStep: 'Confira se a barra clara aparece bem na exposição escolhida para filmar o monitor.',
        useTitle: 'Mostrar passagem de tempo entre tomadas',
        extraUses: [['Ensaiar a troca de apresentador', 'Escolha uma duração que dê tempo para a explicação e pause no painel se o ensaio precisar de um intervalo.']],
        extraFaq: [['Entrar em tela cheia zera a atualização?', 'A porcentagem é compartilhada entre a prévia e a tela cheia. Use Reiniciar quando quiser começar outra execução.']]
      },
      'update-violet': {
        about: 'A cena do Ubuntu 22.04 reúne um fundo roxo, a porcentagem e uma barra de progresso. Com os valores aplicados, a animação avança até completar a barra.',
        fullscreenStep: 'Confira se o percentual fica visível no projetor e deixe espaço suficiente no quadro.',
        useTitle: 'Mostrar uma etapa de atualização no Linux',
        extraUses: [['Combinar a barra com uma narração', 'Escolha o ponto inicial que combina com a fala e use Pausar para manter a continuidade entre trechos da gravação.']],
        extraFaq: [['Como manter o percentual fixo durante a exibição?', 'Use Pausar no painel antes de abrir em tela cheia. Volte ao painel e selecione Continuar para retomar.']]
      },
      'update-gray': {
        about: 'A tela do ChromeOS coloca um indicador de progresso sobre um fundo verde-azulado escuro. O contador parte do valor definido e chega a 100% no número de minutos aplicado.',
        fullscreenStep: 'Avalie do fundo da sala se a porcentagem contrasta bem com a cor do quadro.',
        useTitle: 'Ilustrar uma atualização de Chromebook',
        extraUses: [['Preparar um exercício de suporte', 'Deixe a barra num monitor extra enquanto explica onde verificar o andamento de uma atualização no aparelho.']],
        extraFaq: [['Como repetir a mesma sequência?', 'Mantenha a duração e a porcentagem inicial e clique em Reiniciar. A barra volta a partir do valor escolhido.']]
      },
      'boot-xp': {
        about: 'A tela de inicialização exibe Windows XP em um fundo escuro e uma faixa de blocos em movimento. A animação é contínua enquanto a cena está ativa e pode ser pausada pela página.',
        fullscreenStep: 'Deixe a faixa completar uma passagem para conferir o movimento no enquadramento.',
        useTitle: 'Identificar um computador de época no vídeo',
        extraUses: [['Comparar inicialização e atualização', 'Mostre primeiro a faixa em loop e depois abra o simulador de atualização do XP para comparar com uma barra que indica porcentagem.']],
        extraFaq: [['Por que os blocos da faixa ficaram parados?', 'A animação pode estar pausada ou seguir a preferência do aparelho por movimento reduzido. Use Continuar para liberar o movimento.']]
      },
      bounce: {
        about: 'O logo TELA percorre um fundo escuro na horizontal e na vertical. Os botões Pausar e Continuar controlam o movimento enquanto a página está aberta.',
        fullscreenStep: 'Observe uma passagem do logo para conferir se ele pode ser visto de onde o público estará.',
        useTitle: 'Ocupar um monitor entre apresentações',
        extraUses: [['Criar movimento em segundo plano', 'Use um monitor distante da câmera para acrescentar movimento ao cenário sem disputar atenção com o objeto filmado.']],
        extraFaq: [['Posso usar minha própria imagem no lugar do logo?', 'A cena usa o logo TELA. Use um editor de vídeo ou de apresentações com efeito de movimento para animar uma imagem própria.']]
      },
      clock: {
        aboutTitle: 'Como funciona o relógio flip online',
        usesTitle: 'Para que serve um relógio flip?',
        about: 'O relógio flip divide a hora em três abas para horas, minutos e segundos. Ele usa a hora do aparelho e o formato de 24 horas. À meia-noite, a leitura é 00:00:00.',
        fullscreenStep: 'Confira se os números podem ser lidos à distância. Se for usar outro monitor, mova a janela para ele antes de abrir a tela cheia.',
        useTitle: 'Deixar a hora visível durante uma atividade',
        extraUses: [
          ['Acompanhar a hora em um segundo monitor', 'Deixe o relógio aberto ao lado da janela de trabalho. Use os segundos para acompanhar o começo de uma reunião ou o fim de um intervalo.'],
          ['Congelar os dígitos para uma gravação', 'Clique em Pausar quando aparecer a hora desejada e abra em tela cheia. Use Continuar depois da tomada para voltar à hora atual.']
        ],
        extraFaq: [
          ['O que acontece com o horário enquanto está pausado?', 'O visor mantém a última hora exibida. Continuar consulta novamente o relógio do aparelho e mostra a hora atual.'],
          ['Por que o relógio flip mostra uma hora diferente?', 'Confira o fuso e a hora automática nas configurações do aparelho e recarregue a página para refletir os ajustes.'],
          ['O relógio flip faz contagem regressiva?', 'O visor apresenta a hora do dia. Para contagem regressiva ou alarme, use o temporizador do aparelho.']
        ]
      },
      quotes: {
        about: 'A página exibe uma frase curta de cada vez sobre um fundo claro. Outra frase percorre o conjunto disponível, e a tela cheia mostra a escolha feita na prévia.',
        fullscreenStep: 'Veja se a quebra de linha da frase está adequada para o tamanho do seu monitor.',
        useTitle: 'Exibir um cartão de intervalo',
        extraUses: [['Preparar um quadro para a apresentação', 'Alterne as frases até encontrar uma que caiba bem no enquadramento. Abra em tela cheia para usar o fundo inteiro.']],
        extraFaq: [['Posso digitar uma frase minha?', 'O botão alterna entre os textos disponíveis na página. Para escrever um texto próprio, use um slide ou um editor em modo de apresentação.']]
      },
      bars: {
        about: 'Barras verticais fixas dividem a tela colorida, e o aviso Sem sinal fica no centro. Ambos são desenhados pelo navegador e podem ser exibidos enquanto o monitor recebe imagem normalmente.',
        fullscreenStep: 'Enquadre a faixa colorida completa e verifique se o texto central está legível.',
        useTitle: 'Representar uma interrupção de vídeo',
        extraUses: [['Ensaiar a troca de fonte em uma gravação', 'Deixe as barras como indicação visual enquanto a equipe pratica o corte de uma imagem ao vivo para o quadro de interrupção.']],
        extraFaq: [['As barras servem para calibrar meu monitor?', 'A cena serve para representar um sinal interrompido. Para ajuste de cor, use um padrão de calibração e os controles do monitor.']]
      },
      rain: {
        about: 'Letras e números verdes descem sobre um fundo escuro, com colunas em diferentes pontos do ciclo. A página usa sequências próprias e oferece Pausar e Continuar para controlar o movimento.',
        fullscreenStep: 'Confira se o movimento fica visível sem competir com a pessoa ou objeto em primeiro plano.',
        useTitle: 'Criar um fundo animado para um vídeo',
        extraUses: [['Capturar um quadro parado na edição', 'Pause os caracteres na prévia e capture o quadro se quiser uma transição com os símbolos fixos.']],
        extraFaq: [['Por que alguns caracteres voltam a aparecer?', 'As colunas repetem sequências curtas em ciclos. O atraso de cada coluna faz os ciclos aparecerem em momentos diferentes.']]
      },
      'white-noise': {
        about: 'O granulado preto e branco imita a textura de uma TV fora de sintonia e fica parado. Os controles geram ruído em separado no navegador, com ajuste de volume.',
        fullscreenStep: 'Confira a textura na escala em que será gravada. Volte ao painel para ajustar a intensidade do som.',
        useTitle: 'Criar um fundo de estática ou conferir o som',
        extraUses: [['Fazer uma transição de estática silenciosa', 'Deixe o som pausado e grave apenas o granulado em tela cheia para encaixar a imagem entre duas cenas.']],
        extraFaq: [['A imagem continua depois que pauso o ruído?', 'Sim. O controle silencia o áudio e mantém a textura no quadro, inclusive quando você volta a usar tela cheia.']]
      }
    }
  }
};
