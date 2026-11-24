const prankIds = ['error', 'cracked', 'radar', 'terminal', 'call'];
const updateIds = ['update-blue', 'update-retro', 'update-silver', 'update-violet', 'update-gray'];
const saverIds = ['bounce', 'clock', 'quotes', 'bars', 'rain'];
const platforms = ['Windows 10', 'Windows XP', 'Mac OS X', 'Ubuntu 22.04', 'ChromeOS'];

const sceneCopy = {
  'pt-BR': {
    groups: ['Telas de brincadeira', 'Simulações de atualização', 'Protetores de tela'],
    pranks: ['Tela azul retrô', 'Tela quebrada', 'Radar', 'Terminal fictício', 'Videochamada'],
    savers: ['Logo saltitante', 'Relógio flip', 'Frases', 'Sem sinal', 'Chuva digital'],
    demo: 'Simulação', close: 'Fechar', pause: 'Pausar', resume: 'Continuar', next: 'Outra frase',
    error: 'A tela da simulação foi interrompida', updating: 'Atualização simulada', bars: 'Sem sinal',
    quotes: ['Uma pausa também faz parte do trabalho.', 'Comece pelo que cabe no dia de hoje.', 'Uma ideia fica mais clara quando você a coloca no papel.']
  },
  en: {
    groups: ['Prank Screens', 'Fake Update Screens', 'Screensavers'],
    pranks: ['Retro Blue Screen', 'Broken Screen', 'Radar Screen', 'Fictional Terminal', 'Video Call'],
    savers: ['Bouncing Logo', 'Flip Clock', 'Quotes', 'No Signal', 'Digital Rain'],
    demo: 'Simulation', close: 'Close', pause: 'Pause', resume: 'Resume', next: 'Next quote',
    error: 'The demo display was interrupted', updating: 'Simulated update', bars: 'No signal',
    quotes: ['A pause can make room for a better idea.', 'Start with the part you can finish today.', 'Write the thought down and see where it leads.']
  },
  id: {
    groups: ['Layar Iseng', 'Simulasi Pembaruan', 'Screensaver'],
    pranks: ['Layar Biru Retro', 'Layar Retak', 'Layar Radar', 'Terminal Fiktif', 'Panggilan Video'],
    savers: ['Logo Memantul', 'Jam Flip', 'Kutipan', 'Tidak Ada Sinyal', 'Hujan Digital'],
    demo: 'Simulasi', close: 'Tutup', pause: 'Jeda', resume: 'Lanjutkan', next: 'Kutipan berikutnya',
    error: 'Tampilan demo terhenti', updating: 'Simulasi pembaruan', bars: 'Tidak ada sinyal',
    quotes: ['Berhenti sebentar juga bagian dari bekerja.', 'Mulai dari yang bisa selesai hari ini.', 'Tulis idenya dulu, lalu lihat ke mana arahnya.']
  },
  es: {
    groups: ['Pantallas de broma', 'Actualizaciones simuladas', 'Salvapantallas'],
    pranks: ['Pantalla azul retro', 'Pantalla rota', 'Radar', 'Terminal ficticio', 'Videollamada'],
    savers: ['Logo que rebota', 'Reloj de solapas', 'Frases', 'Sin señal', 'Lluvia digital'],
    demo: 'Simulación', close: 'Cerrar', pause: 'Pausar', resume: 'Continuar', next: 'Otra frase',
    error: 'Se ha interrumpido la pantalla de prueba', updating: 'Actualización simulada', bars: 'Sin señal',
    quotes: ['Una pausa puede dejar sitio a una buena idea.', 'Empieza por lo que puedes terminar hoy.', 'Escribe esa idea y mira adónde te lleva.']
  },
  'zh-Hans': {
    groups: ['趣味屏幕', '模拟系统更新', '屏保'],
    pranks: ['复古蓝屏', '碎屏', '雷达', '虚拟终端', '视频通话'],
    savers: ['弹跳标志', '翻页时钟', '短句', '无信号', '数字雨'],
    demo: '模拟预览', close: '关闭', pause: '暂停', resume: '继续', next: '换一句',
    error: '演示画面中断', updating: '模拟更新中', bars: '无信号',
    quotes: ['休息一下，也是在为下一步留力气。', '先做今天能完成的那一小步。', '把想法写下来，再看看它能走多远。']
  },
  ja: {
    groups: ['いたずら画面', 'アップデート風の画面', 'スクリーンセーバー'],
    pranks: ['レトロなブルースクリーン', '画面割れ', 'レーダー画面', '架空のターミナル', 'ビデオ通話'],
    savers: ['跳ねるロゴ', 'パタパタ時計', 'ひとこと', '信号なし', 'デジタルレイン'],
    demo: 'シミュレーション', close: '閉じる', pause: '一時停止', resume: '再開', next: '次のひとこと',
    error: 'デモ画面が中断されました', updating: 'アップデートのシミュレーション', bars: '信号なし',
    quotes: ['ひと息つくと、次の考えが浮かぶこともある。', '今日できることから始めよう。', '思いついたことを、まず紙に書いてみる。']
  },
  ko: {
    groups: ['장난 화면', '업데이트 시뮬레이션', '화면 보호기'],
    pranks: ['레트로 블루스크린', '깨진 화면', '레이더 화면', '가상 터미널', '영상 통화'],
    savers: ['튀어 다니는 로고', '플립 시계', '한 줄 문장', '신호 없음', '디지털 비'],
    demo: '시뮬레이션', close: '닫기', pause: '일시 정지', resume: '계속', next: '다음 문장',
    error: '데모 화면이 중단되었습니다', updating: '업데이트 시뮬레이션', bars: '신호 없음',
    quotes: ['잠깐 쉬어 가면 새로운 생각이 들어올 자리가 생긴다.', '오늘 끝낼 수 있는 일부터 시작하자.', '떠오른 생각은 먼저 적어 보자.']
  },
  de: {
    groups: ['Spaßbildschirme', 'Simulierte Updates', 'Bildschirmschoner'],
    pranks: ['Retro-Bluescreen', 'Kaputter Bildschirm', 'Radar', 'Fiktives Terminal', 'Videoanruf'],
    savers: ['Springendes Logo', 'Klappuhr', 'Sprüche', 'Kein Signal', 'Digitaler Regen'],
    demo: 'Simulation', close: 'Schließen', pause: 'Pausieren', resume: 'Fortsetzen', next: 'Nächster Spruch',
    error: 'Die Demoanzeige wurde unterbrochen', updating: 'Simuliertes Update', bars: 'Kein Signal',
    quotes: ['Eine Pause schafft Platz für einen neuen Gedanken.', 'Fang mit dem an, was du heute fertigstellen kannst.', 'Schreib die Idee auf und schau, wohin sie führt.']
  },
  fr: {
    groups: ['Écrans pour plaisanter', 'Fausses mises à jour', 'Écrans de veille'],
    pranks: ['Écran bleu rétro', 'Écran fissuré', 'Radar', 'Terminal fictif', 'Appel vidéo'],
    savers: ['Logo rebondissant', 'Horloge à volets', 'Phrases', 'Pas de signal', 'Pluie numérique'],
    demo: 'Simulation', close: 'Fermer', pause: 'Mettre en pause', resume: 'Reprendre', next: 'Phrase suivante',
    error: 'L’affichage de la démo a été interrompu', updating: 'Mise à jour simulée', bars: 'Pas de signal',
    quotes: ['Une pause laisse parfois de la place à une idée.', 'Commencez par ce que vous pouvez finir aujourd’hui.', 'Écrivez cette idée pour voir où elle vous mène.']
  },
  uk: {
    groups: ['Екрани для жартів', 'Імітації оновлень', 'Екранні заставки'],
    pranks: ['Ретро синій екран', 'Тріснутий екран', 'Радар', 'Вигаданий термінал', 'Відеодзвінок'],
    savers: ['Стрибучий логотип', 'Перекидний годинник', 'Фрази', 'Немає сигналу', 'Цифровий дощ'],
    demo: 'Імітація', close: 'Закрити', pause: 'Пауза', resume: 'Продовжити', next: 'Наступна фраза',
    error: 'Показ демонстрації перервано', updating: 'Імітація оновлення', bars: 'Немає сигналу',
    quotes: ['Пауза залишає місце для нової думки.', 'Почніть із того, що можна зробити сьогодні.', 'Запишіть ідею й подивіться, куди вона поведе.']
  },
  pl: {
    groups: ['Ekrany do żartów', 'Symulacje aktualizacji', 'Wygaszacze ekranu'],
    pranks: ['Niebieski ekran retro', 'Pęknięty ekran', 'Radar', 'Fikcyjny terminal', 'Rozmowa wideo'],
    savers: ['Odbijające się logo', 'Zegar klapkowy', 'Złote myśli', 'Brak sygnału', 'Cyfrowy deszcz'],
    demo: 'Symulacja', close: 'Zamknij', pause: 'Wstrzymaj', resume: 'Wznów', next: 'Następna myśl',
    error: 'Przerwano wyświetlanie symulacji', updating: 'Symulowana aktualizacja', bars: 'Brak sygnału',
    quotes: ['Chwila przerwy pomaga spojrzeć na pomysł inaczej.', 'Zacznij od tego, co możesz skończyć dzisiaj.', 'Zapisz pomysł i zobacz, dokąd cię poprowadzi.']
  },
  it: {
    groups: ['Schermate per scherzi', 'Aggiornamenti simulati', 'Salvaschermo'],
    pranks: ['Schermata blu retrò', 'Schermo rotto', 'Radar', 'Terminale fittizio', 'Videochiamata'],
    savers: ['Logo rimbalzante', 'Orologio a palette', 'Frasi', 'Nessun segnale', 'Pioggia digitale'],
    demo: 'Simulazione', close: 'Chiudi', pause: 'Metti in pausa', resume: 'Riprendi', next: 'Altra frase',
    error: 'La schermata dimostrativa è stata interrotta', updating: 'Aggiornamento simulato', bars: 'Nessun segnale',
    quotes: ['Una pausa può fare spazio a una nuova idea.', 'Inizia da quello che riesci a finire oggi.', 'Metti l’idea su carta e vedi dove ti porta.']
  },
  tr: {
    groups: ['Şaka ekranları', 'Güncelleme simülasyonları', 'Ekran koruyucular'],
    pranks: ['Retro mavi ekran', 'Kırık ekran', 'Radar', 'Kurgusal terminal', 'Görüntülü görüşme'],
    savers: ['Zıplayan logo', 'Yapraklı saat', 'Sözler', 'Sinyal yok', 'Dijital yağmur'],
    demo: 'Simülasyon', close: 'Kapat', pause: 'Duraklat', resume: 'Devam et', next: 'Sonraki söz',
    error: 'Demo ekranı kesintiye uğradı', updating: 'Güncelleme simülasyonu', bars: 'Sinyal yok',
    quotes: ['Bir mola yeni bir düşünceye yer açabilir.', 'Bugün bitirebileceğin işten başla.', 'Fikrini yaz ve seni nereye götürdüğüne bak.']
  },
  sv: {
    groups: ['Skämtbilder', 'Simulerade uppdateringar', 'Skärmsläckare'],
    pranks: ['Retroblåskärm', 'Sprucken skärm', 'Radar', 'Påhittad terminal', 'Videosamtal'],
    savers: ['Studsande logga', 'Vippklocka', 'Korta tankar', 'Ingen signal', 'Digitalt regn'],
    demo: 'Simulering', close: 'Stäng', pause: 'Pausa', resume: 'Fortsätt', next: 'Nästa tanke',
    error: 'Demovisningen avbröts', updating: 'Simulerad uppdatering', bars: 'Ingen signal',
    quotes: ['En paus kan ge plats åt en ny tanke.', 'Börja med det du kan hinna klart i dag.', 'Skriv ner tanken och se vart den leder.']
  },
  ms: {
    groups: ['Skrin gurauan', 'Simulasi kemas kini', 'Penyelamat skrin'],
    pranks: ['Skrin biru retro', 'Skrin retak', 'Radar', 'Terminal rekaan', 'Panggilan video'],
    savers: ['Logo melantun', 'Jam selak', 'Petikan', 'Tiada isyarat', 'Hujan digital'],
    demo: 'Simulasi', close: 'Tutup', pause: 'Jeda', resume: 'Sambung', next: 'Petikan seterusnya',
    error: 'Paparan demo telah terganggu', updating: 'Simulasi kemas kini', bars: 'Tiada isyarat',
    quotes: ['Berehat seketika boleh memberi ruang kepada idea baharu.', 'Mulakan dengan perkara yang boleh disiapkan hari ini.', 'Catat idea itu dan lihat ke mana ia membawa anda.']
  }
};

const categoryLabels = {
  'pt-BR': ['Cores', 'Brincadeiras', 'Atualizações simuladas', 'Protetores de tela', 'Feedback'],
  en: ['Colors', 'Pranks', 'Fake updates', 'Screensavers', 'Feedback'],
  id: ['Warna', 'Layar iseng', 'Simulasi pembaruan', 'Screensaver', 'Masukan'],
  es: ['Colores', 'Bromas', 'Actualizaciones simuladas', 'Salvapantallas', 'Comentarios'],
  'zh-Hans': ['颜色', '趣味屏幕', '模拟更新', '屏保', '反馈'],
  ja: ['色', 'いたずら画面', '更新シミュレーション', 'スクリーンセーバー', 'フィードバック'],
  ko: ['색상', '장난 화면', '업데이트 시뮬레이션', '화면 보호기', '의견 보내기'],
  de: ['Farben', 'Spaßbildschirme', 'Update-Simulationen', 'Bildschirmschoner', 'Feedback'],
  fr: ['Couleurs', 'Blagues', 'Fausses mises à jour', 'Écrans de veille', 'Votre avis'],
  uk: ['Кольори', 'Жарти', 'Імітації оновлень', 'Заставки', 'Відгук'],
  pl: ['Kolory', 'Żarty', 'Symulacje aktualizacji', 'Wygaszacze', 'Opinia'],
  it: ['Colori', 'Scherzi', 'Aggiornamenti simulati', 'Salvaschermo', 'Feedback'],
  tr: ['Renkler', 'Şakalar', 'Güncelleme simülasyonları', 'Ekran koruyucular', 'Geri bildirim'],
  sv: ['Färger', 'Skämtbilder', 'Simulerade uppdateringar', 'Skärmsläckare', 'Synpunkter'],
  ms: ['Warna', 'Gurauan', 'Simulasi kemas kini', 'Penyelamat skrin', 'Maklum balas']
};

export function navigationLabels(lang) {
  return categoryLabels[lang];
}

const updateSet = new Set(updateIds);
const crackLines = [-169, -149, -121, -105, -77, -52, -39, -12, 3, 22, 48, 62, 89, 111, 142, 155, 176]
  .map((angle, i) => `<i style="--angle:${angle}deg;--length:${14 + (i * 11 % 43)}%;--fade:${(4 + i % 5) / 10}"></i>`)
  .join('');
const rainColumns = ['A7 :: M2 9Z', '0Y 5A :: E1', 'Q8 2X 4U ::', 'T9 :: K6 L3', '1S V0 :: H5', 'U3 Z8 M2 4W', 'P0 :: C3 2X', 'Y7 A1 9F ::', 'R6 :: N2 J5', 'H4 G1 :: S7', '2Q M9 D3 ::', 'B8 :: F5 X0'];

function visual(id, copy, escape) {
  let content;
  if (updateSet.has(id)) {
    content = `<span class="update-content"><span class="update-label">${escape(copy.updating)}</span><span class="update-track"><i></i></span><span data-scene-percent>24%</span></span>`;
  } else {
    switch (id) {
      case 'error':
        content = `<span class="error-details"><b>!</b><span>${escape(copy.error)}</span><i></i><i></i></span>`;
        break;
      case 'cracked':
        content = `<span class="crack-lines">${crackLines}</span>`;
        break;
      case 'radar':
        content = '<span class="radar-dial"><i></i><i></i><i></i></span>';
        break;
      case 'terminal':
        content = '<span class="terminal-window"><span>01 · TELA DEMO<br>07 · █ █ ░ ░<br>23 · 0A9F ░<br>48 · ░ ░ ░ █</span><span>◇ ░ ░ ░ ░<br>◇ █ █ ░ ░<br>◇ ░ █ █ ░</span></span>';
        break;
      case 'call':
        content = '<span class="call-grid"><i>R</i><i>M</i><i>A</i><i>S</i><i>J</i><i>D</i></span>';
        break;
      case 'bounce':
        content = '<span class="bounce-x"><span class="bounce-mark">TELA</span></span>';
        break;
      case 'clock':
        content = '<span class="flip-clock" data-scene-clock><i>15</i><i>31</i><i>38</i></span>';
        break;
      case 'quotes':
        content = `<q data-scene-quote>${escape(copy.quotes[0])}</q>`;
        break;
      case 'bars':
        content = `<span class="signal-word">${escape(copy.bars)}</span>`;
        break;
      case 'rain':
        content = `<span class="rain-columns">${rainColumns.map((column, i) => `<i style="--delay:${(i * -1.37) % 5}s">${column}</i>`).join('')}</span>`;
        break;
    }
  }
  return `<span class="scene-visual scene-${id}" aria-hidden="true">${content}</span>`;
}

export function renderSceneGallery(lang, escape) {
  const copy = sceneCopy[lang];
  const groups = [
    [prankIds, copy.pranks],
    [updateIds, platforms],
    [saverIds, copy.savers]
  ];
  const sections = groups.map(([ids, labels], index) => `
  <section class="scene-group" aria-labelledby="scene-group-${index}">
    <h2 id="scene-group-${index}">${escape(copy.groups[index])}</h2>
    <ul role="list">
      ${ids.map((id, i) => `<li><button type="button" data-scene="${id}" aria-haspopup="dialog">
        ${visual(id, copy, escape)}<span class="scene-name">${escape(labels[i])}</span>
      </button></li>`).join('')}
    </ul>
  </section>`).join('');
  return `<div class="scene-gallery">${sections}
  <dialog id="scene-dialog" aria-labelledby="scene-title" data-quotes="${escape(JSON.stringify(copy.quotes))}">
    <div class="scene-dialog-header"><div><p>${escape(copy.demo)}</p><h2 id="scene-title"></h2></div>
      <form method="dialog"><button class="scene-close" type="submit" autofocus>${escape(copy.close)}</button></form>
    </div>
    <div class="scene-dialog-visual"></div>
    <div class="scene-dialog-actions" hidden>
      <button type="button" data-pause="${escape(copy.pause)}" data-resume="${escape(copy.resume)}" hidden>${escape(copy.pause)}</button>
      <button type="button" data-next-quote hidden>${escape(copy.next)}</button>
    </div>
  </dialog>
</div>`;
}
