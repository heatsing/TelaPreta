const purpose = {
  'pt-BR': {
    error: 'Use esta simulação de tela azul retrô do Windows em uma demonstração ou gravação.',
    cracked: 'Mostre a aparência de um vidro trincado em uma apresentação ou vídeo.',
    radar: 'Acompanhe a varredura do radar para montar uma demonstração ou um cenário.',
    terminal: 'Use o terminal fictício como fundo de vídeo ou de apresentação.',
    call: 'Use a grade de participantes como cenário de uma videochamada fictícia.',
    'update-blue': 'Mostre o progresso de uma atualização simulada do Windows 10.',
    'update-retro': 'Use o visual de atualização do Windows XP para uma demonstração retrô.',
    'update-silver': 'Mostre o progresso de uma atualização simulada do Mac OS X.',
    'update-violet': 'Mostre o progresso de uma atualização simulada do Ubuntu 22.04.',
    'update-gray': 'Mostre o progresso de uma atualização simulada do ChromeOS.',
    bounce: 'Deixe um logotipo em movimento no monitor durante uma pausa.',
    clock: 'Acompanhe a hora local em um relógio de abas que atualiza a cada segundo.',
    quotes: 'Exiba uma frase curta durante uma pausa e use o botão para trocar de frase.',
    bars: 'Use barras de cor e a mensagem de ausência de sinal como imagem de demonstração.',
    rain: 'Exiba colunas de caracteres animados como fundo de vídeo ou protetor de tela.'
  },
  en: {
    error: 'Use a retro Windows blue-screen simulation for a demo or recording.',
    cracked: 'Use a cracked-glass effect as a prop for a video or presentation.',
    radar: 'Use a sweeping radar display as a backdrop for a demo.',
    terminal: 'Use the fictional terminal as a backdrop for a video or presentation.',
    call: 'Use the participant grid to stage a mock video call.',
    'update-blue': 'Show simulated Windows 10 update progress in a browser demo.',
    'update-retro': 'Show a simulated Windows XP update for a retro demo.',
    'update-silver': 'Show simulated Mac OS X update progress in a browser demo.',
    'update-violet': 'Show simulated Ubuntu 22.04 update progress in a browser demo.',
    'update-gray': 'Show simulated ChromeOS update progress in a browser demo.',
    bounce: 'Leave a moving logo on your monitor while you take a break.',
    clock: 'Follow local time on a flip clock that updates every second.',
    quotes: 'Display a short quote during a break and use the button to see another.',
    bars: 'Use color bars with a no-signal message as a demo image.',
    rain: 'Use the moving columns of characters as a video backdrop or screensaver.'
  }
};

const exit = {
  'pt-BR': 'Para sair, volte pelo navegador ou feche a aba.',
  en: 'Use your browser’s Back button or close the tab to exit.',
  id: 'Untuk keluar, gunakan tombol Kembali atau tutup tab.',
  es: 'Para salir, usa el botón Atrás del navegador o cierra la pestaña.',
  'zh-Hans': '返回上一页或关闭标签页即可退出。',
  ja: '終了するには、ブラウザーで戻るかタブを閉じてください。',
  ko: '종료하려면 브라우저에서 뒤로 가거나 탭을 닫으세요.',
  de: 'Zum Beenden gehe im Browser zurück oder schließe den Tab.',
  fr: 'Pour quitter, revenez à la page précédente ou fermez l’onglet.',
  uk: 'Щоб вийти, поверніться назад у браузері або закрийте вкладку.',
  pl: 'Aby wyjść, wróć w przeglądarce lub zamknij kartę.',
  it: 'Per uscire, torna indietro nel browser o chiudi la scheda.',
  tr: 'Çıkmak için tarayıcıda geri dönün veya sekmeyi kapatın.',
  sv: 'Gå tillbaka i webbläsaren eller stäng fliken för att avsluta.',
  ms: 'Untuk keluar, kembali ke halaman sebelumnya atau tutup tab.'
};

export function sceneGuidance(locale, scene, fallback) {
  const title = scene.id === 'error' ? ({
    'pt-BR': 'Simulação de tela azul retrô do Windows',
    en: 'Retro Windows Blue Screen Simulation'
  })[locale] : undefined;
  const description = `${purpose[locale]?.[scene.id] ?? fallback} ${exit[locale]}`;
  return { ...scene, title: title ?? scene.name, description };
}
