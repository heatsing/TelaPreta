const translations = {
  'pt-BR': {
    colors: {
      red: ['Tela vermelha', 'Procure pontos escuros ou que não acompanham o vermelho.'],
      green: ['Tela verde', 'Veja se algum ponto aparece mais escuro ou com outro tom de verde.'],
      blue: ['Tela azul', 'Confira se o azul é uniforme e procure pontos escuros ou de outra cor.'],
      gray: ['Tela cinza', 'Compare o centro e as bordas para encontrar manchas e diferenças de brilho ou tom.']
    },
    title: (name) => `${name} online`,
    intro: (hex) => `Abra a cor ${hex} em tela cheia para testar o monitor ou baixe um fundo em PNG.`,
    about: 'Uma cor uniforme para testar a tela',
    color: (hex) => `A prévia começa com a cor ${hex}. Em tela cheia, a cor ocupa toda a área de teste.`,
    uses: 'O que observar',
    guide: 'Como verificar o monitor',
    steps: ['Abra a prévia no monitor que quer testar e use o brilho habitual.', 'Observe o centro, os cantos e as bordas. Alterne as cores para comparar o mesmo ponto.'],
    png: 'Escolha uma resolução e baixe o PNG. A imagem usa a cor que está na prévia.',
    related: 'Use as outras cores para conferir a mesma região do monitor.',
    question: 'Posso salvar a cor em 4K?',
    answer: 'Sim. Selecione 4K UHD para gerar um PNG de 3840 × 2160 pixels.'
  },
  en: {
    colors: {
      red: ['Red Screen', 'Look for fixed dots that stay dark or show a different color against red.'],
      green: ['Green Screen', 'Check whether a dot looks unusually dark or discolored on the green field.'],
      blue: ['Blue Screen', 'Look for dark dots or spots that stand out against the solid blue field.'],
      gray: ['Gray Screen', 'Compare the center and edges for shifts in brightness, tint, or shading.']
    },
    title: (name) => `${name} Online`,
    intro: (hex) => `Show ${hex} in fullscreen to check your monitor, or download it as a solid PNG background.`,
    about: 'A Solid Color for Display Testing',
    color: (hex) => `The preview starts at ${hex}. Fullscreen mode fills the entire test area with this color.`,
    uses: 'What to Look For',
    guide: 'How to Check Your Display',
    steps: ['Open the preview on the display you want to test and set it to your usual brightness.', 'Scan the center, corners, and edges. Switch colors to compare the same spot.'],
    png: 'Choose a resolution and select Download PNG. The file uses the color shown in the preview.',
    related: 'Try the other colors to compare the same area of your screen.',
    question: 'Can I save this color in 4K?',
    answer: 'Yes. Select 4K UHD to generate a 3840 × 2160 PNG.'
  },
  id: {
    colors: {
      red: ['Layar merah', 'Cari titik yang tetap gelap atau terlihat berbeda di atas warna merah.'],
      green: ['Layar hijau', 'Periksa apakah ada titik gelap atau warna yang menyimpang pada bidang hijau.'],
      blue: ['Layar biru', 'Cari titik gelap dan bagian yang warnanya berbeda di bidang biru.'],
      gray: ['Layar abu-abu', 'Bandingkan kecerahan dan rona di bagian tengah dan tepi layar.']
    },
    title: (name) => `${name} online`,
    intro: (hex) => `Tampilkan warna ${hex} dalam layar penuh untuk memeriksa monitor, atau unduh latar polos sebagai PNG.`,
    about: 'Warna polos untuk menguji layar',
    color: (hex) => `Pratinjau dimulai dengan warna ${hex}. Dalam mode layar penuh, warna ini mengisi seluruh bidang uji.`,
    uses: 'Hal yang perlu diperiksa',
    guide: 'Cara memeriksa layar',
    steps: ['Buka pratinjau di layar yang ingin diperiksa dan gunakan kecerahan seperti biasa.', 'Amati bagian tengah, sudut, dan tepi. Ganti warna untuk membandingkan titik yang sama.'],
    png: 'Pilih resolusi, lalu unduh PNG. Gambar menggunakan warna yang tampil pada pratinjau.',
    related: 'Coba warna lain untuk membandingkan area layar yang sama.',
    question: 'Bisakah warna ini disimpan dalam ukuran 4K?',
    answer: 'Bisa. Pilih 4K UHD untuk membuat PNG berukuran 3840 × 2160 piksel.'
  },
  es: {
    colors: {
      red: ['Pantalla roja', 'Busca puntos fijos que se vean oscuros o de otro color sobre el rojo.'],
      green: ['Pantalla verde', 'Comprueba si algún punto se ve más oscuro o de otro tono sobre el fondo verde.'],
      blue: ['Pantalla azul', 'Busca puntos oscuros o zonas de otro tono en el fondo azul uniforme.'],
      gray: ['Pantalla gris', 'Compara el centro y los bordes para detectar diferencias de brillo o de tono.']
    },
    title: (name) => `${name} online`,
    intro: (hex) => `Muestra el color ${hex} a pantalla completa para comprobar el monitor o descarga un fondo liso en PNG.`,
    about: 'Un color uniforme para probar el monitor',
    color: (hex) => `La vista previa se abre con el color ${hex}. En pantalla completa, el color ocupa toda la zona de prueba.`,
    uses: 'Qué debes observar',
    guide: 'Cómo comprobar el monitor',
    steps: ['Abre la vista previa en el monitor que quieras revisar y usa el brillo habitual.', 'Revisa el centro, las esquinas y los bordes. Alterna los colores para comparar el mismo punto.'],
    png: 'Elige una resolución y descarga el PNG. El archivo usa el color que aparece en la vista previa.',
    related: 'Prueba los demás colores para comparar la misma zona del monitor.',
    question: '¿Puedo guardar este color en 4K?',
    answer: 'Sí. Elige 4K UHD para generar un PNG de 3840 × 2160 píxeles.'
  },
  'zh-Hans': {
    colors: {
      red: ['红色屏幕', '在纯红色背景上查看是否有固定暗点或颜色异常的小点。'],
      green: ['绿色屏幕', '观察纯绿色背景上有没有比周围更暗或颜色不同的点。'],
      blue: ['蓝色屏幕', '在纯蓝色背景上查看是否有暗点、异色点或颜色不均。'],
      gray: ['灰色屏幕', '对比屏幕中央和边缘，查看是否有色斑、色偏或亮度不均。']
    },
    title: (name) => `在线${name}`,
    intro: (hex) => `全屏显示纯色 ${hex} 来检查显示器，也可以下载同色的 PNG 背景。`,
    about: '用于显示器测试的纯色',
    color: (hex) => `预览的初始色值为 ${hex}。进入全屏后，当前颜色会铺满测试区域。`,
    uses: '检查要点',
    guide: '如何检查显示器',
    steps: ['在要检查的显示器上打开预览，将亮度调到平时使用的水平。', '观察中央、四角和边缘，切换颜色时对比同一个位置。'],
    png: '选择分辨率并下载 PNG。图片使用预览中当前显示的颜色。',
    related: '切换其他颜色，比较屏幕上同一个位置的表现。',
    question: '可以保存 4K 图片吗？',
    answer: '可以。选择 4K UHD，即可生成 3840 × 2160 像素的 PNG。'
  },
  ja: {
    colors: {
      red: ['赤色画面', '赤い面に暗い点や周囲と色が異なる点がないか確認します。'],
      green: ['緑色画面', '緑を表示して、暗い点や違う色に見える点を探します。'],
      blue: ['青色画面', '青い面に暗い点、色の異なる点、色ムラがないか確認します。'],
      gray: ['グレー画面', '中央と端を見比べて、明るさや色合いのムラを確認します。']
    },
    title: (name) => `${name}をオンラインで表示`,
    intro: (hex) => `単色 ${hex} を全画面で表示してモニターを確認したり、同じ色のPNG画像を保存したりできます。`,
    about: 'モニター確認用の単色表示',
    color: (hex) => `プレビューの初期色は ${hex} です。全画面にすると、選んだ色がテスト領域全体に表示されます。`,
    uses: '確認するポイント',
    guide: 'モニターの確認方法',
    steps: ['確認したいモニターでプレビューを開き、明るさを普段の設定にします。', '中央、四隅、端を確認し、色を切り替えながら同じ位置を見比べます。'],
    png: '解像度を選んでPNGをダウンロードすると、プレビューに表示中の色が画像になります。',
    related: 'ほかの色に切り替えて、同じ場所を見比べてください。',
    question: '4K画像を保存できますか？',
    answer: '4K UHDを選ぶと、3840 × 2160ピクセルのPNGを作成できます。'
  },
  ko: {
    colors: {
      red: ['빨간 화면', '빨간 바탕에서 계속 어둡거나 다른 색으로 보이는 점을 찾아보세요.'],
      green: ['초록 화면', '초록 바탕에서 주변보다 어둡거나 색이 다른 점이 있는지 확인하세요.'],
      blue: ['파란 화면', '파란 단색 화면에서 어두운 점이나 색이 고르지 않은 부분을 찾아보세요.'],
      gray: ['회색 화면', '가운데와 가장자리를 비교해 밝기나 색이 고르지 않은 부분을 확인하세요.']
    },
    title: (name) => `온라인 ${name}`,
    intro: (hex) => `${hex} 색을 전체 화면으로 표시해 모니터를 점검하거나 같은 색의 PNG 배경을 다운로드하세요.`,
    about: '모니터 점검용 단색 화면',
    color: (hex) => `미리보기의 초기 색상은 ${hex}입니다. 전체 화면에서는 선택한 색이 테스트 영역을 채웁니다.`,
    uses: '확인할 부분',
    guide: '모니터 점검 방법',
    steps: ['점검할 모니터에서 미리보기를 열고 평소 밝기로 맞추세요.', '가운데, 모서리, 가장자리를 확인한 뒤 색을 바꿔 같은 위치를 비교하세요.'],
    png: '해상도를 고르고 PNG를 다운로드하면 미리보기에 표시된 색으로 이미지가 만들어집니다.',
    related: '다른 색상으로 바꿔 화면의 같은 위치를 비교하세요.',
    question: '4K 이미지를 저장할 수 있나요?',
    answer: '4K UHD를 선택하면 3840 × 2160 픽셀 PNG를 만들 수 있습니다.'
  },
  de: {
    colors: {
      red: ['Roter Bildschirm', 'Suche auf Rot nach Punkten, die dunkel bleiben oder eine andere Farbe zeigen.'],
      green: ['Grüner Bildschirm', 'Achte darauf, ob einzelne Punkte auf Grün dunkler oder verfärbt erscheinen.'],
      blue: ['Blauer Bildschirm', 'Achte auf dunkle Punkte und Farbabweichungen in der blauen Fläche.'],
      gray: ['Grauer Bildschirm', 'Vergleiche Mitte und Ränder auf Helligkeitsunterschiede, Flecken und Farbstiche.']
    },
    title: (name) => `${name} online`,
    intro: (hex) => `Zeige ${hex} im Vollbild an, um deinen Monitor zu testen, oder lade einen einfarbigen PNG-Hintergrund herunter.`,
    about: 'Eine einfarbige Fläche für den Monitortest',
    color: (hex) => `Die Vorschau startet mit dem Farbwert ${hex}. Im Vollbild füllt die gewählte Farbe die gesamte Testfläche.`,
    uses: 'Worauf du achten kannst',
    guide: 'So überprüfst du deinen Monitor',
    steps: ['Öffne die Vorschau auf dem gewünschten Bildschirm und nutze deine übliche Helligkeit.', 'Betrachte Mitte, Ecken und Ränder. Wechsle die Farbe und vergleiche dieselbe Stelle.'],
    png: 'Wähle eine Auflösung und lade das PNG herunter. Die Datei verwendet die Farbe, die in der Vorschau angezeigt wird.',
    related: 'Teste weitere Farben, um dieselbe Stelle auf dem Bildschirm zu vergleichen.',
    question: 'Kann ich diese Farbe in 4K speichern?',
    answer: 'Ja. Mit 4K UHD erstellst du ein PNG mit 3840 × 2160 Pixeln.'
  },
  fr: {
    colors: {
      red: ['Écran rouge', 'Cherchez les points qui restent sombres ou changent de couleur sur le fond rouge.'],
      green: ['Écran vert', 'Repérez les points qui paraissent plus sombres ou d’une autre teinte sur le vert.'],
      blue: ['Écran bleu', 'Repérez les points sombres et les zones de teinte différente sur le fond bleu.'],
      gray: ['Écran gris', 'Comparez le centre et les bords pour repérer des écarts de luminosité ou de teinte.']
    },
    title: (name) => `${name} en ligne`,
    intro: (hex) => `Affichez la couleur ${hex} en plein écran pour vérifier votre moniteur, ou téléchargez un fond uni en PNG.`,
    about: 'Un aplat de couleur pour tester l’écran',
    color: (hex) => `L’aperçu s’ouvre avec la couleur ${hex}. En plein écran, la couleur choisie couvre toute la zone de test.`,
    uses: 'Les points à vérifier',
    guide: 'Comment vérifier votre écran',
    steps: ['Ouvrez l’aperçu sur l’écran à tester et conservez votre luminosité habituelle.', 'Observez le centre, les coins et les bords, puis changez de couleur pour comparer le même point.'],
    png: 'Choisissez une résolution et téléchargez le PNG. Le fichier reprend la couleur de l’aperçu.',
    related: 'Essayez les autres couleurs pour comparer la même zone de l’écran.',
    question: 'Puis-je enregistrer cette couleur en 4K ?',
    answer: 'Oui. Choisissez 4K UHD pour créer un PNG de 3840 × 2160 pixels.'
  },
  uk: {
    colors: {
      red: ['Червоний екран', 'Шукайте точки, які залишаються темними або мають інший колір на червоному тлі.'],
      green: ['Зелений екран', 'Перевірте, чи є на зеленому тлі точки з іншою яскравістю або відтінком.'],
      blue: ['Синій екран', 'Зверніть увагу на темні точки й нерівномірний відтінок на синьому тлі.'],
      gray: ['Сірий екран', 'Порівняйте центр і краї, щоб помітити різницю в яскравості або відтінку.']
    },
    title: (name) => `${name} онлайн`,
    intro: (hex) => `Відкрийте колір ${hex} на весь екран для перевірки монітора або завантажте однотонний фон у PNG.`,
    about: 'Однотонне поле для перевірки монітора',
    color: (hex) => `Початковий колір перегляду — ${hex}. У повноекранному режимі вибраний колір заповнює всю область перевірки.`,
    uses: 'На що звернути увагу',
    guide: 'Як перевірити монітор',
    steps: ['Відкрийте попередній перегляд на потрібному моніторі та встановіть звичну яскравість.', 'Перевірте центр, кути й краї. Перемикайте кольори, щоб порівняти ту саму точку.'],
    png: 'Виберіть роздільну здатність та завантажте PNG. У файлі буде колір із попереднього перегляду.',
    related: 'Спробуйте інші кольори, щоб порівняти ту саму ділянку екрана.',
    question: 'Чи можна зберегти цей колір у 4K?',
    answer: 'Так. Виберіть 4K UHD, щоб створити PNG розміром 3840 × 2160 пікселів.'
  },
  pl: {
    colors: {
      red: ['Czerwony ekran', 'Szukaj punktów, które na czerwonym tle pozostają ciemne lub mają inny kolor.'],
      green: ['Zielony ekran', 'Zwróć uwagę na ciemne lub przebarwione punkty na zielonym tle.'],
      blue: ['Niebieski ekran', 'Sprawdź, czy na niebieskim tle są ciemne punkty lub nierównomierny odcień.'],
      gray: ['Szary ekran', 'Porównaj środek i krawędzie pod kątem różnic w jasności lub odcieniu.']
    },
    title: (name) => `${name} online`,
    intro: (hex) => `Wyświetl kolor ${hex} na pełnym ekranie, aby sprawdzić monitor, lub pobierz jednolite tło jako PNG.`,
    about: 'Jednolity kolor do testowania monitora',
    color: (hex) => `Początkowy kolor podglądu to ${hex}. W trybie pełnoekranowym wybrany kolor wypełnia całe pole testowe.`,
    uses: 'Na co zwrócić uwagę',
    guide: 'Jak sprawdzić monitor',
    steps: ['Otwórz podgląd na monitorze, który chcesz sprawdzić, i ustaw typową jasność.', 'Sprawdź środek, rogi i krawędzie. Zmieniaj kolory, aby porównać to samo miejsce.'],
    png: 'Wybierz rozdzielczość i pobierz PNG. Plik przyjmie kolor widoczny w podglądzie.',
    related: 'Wypróbuj inne kolory, aby porównać ten sam obszar ekranu.',
    question: 'Czy mogę zapisać ten kolor w 4K?',
    answer: 'Tak. Wybierz 4K UHD, aby wygenerować PNG w rozdzielczości 3840 × 2160 pikseli.'
  },
  it: {
    colors: {
      red: ['Schermo rosso', 'Cerca punti che restano scuri o mostrano un colore diverso sul rosso.'],
      green: ['Schermo verde', 'Controlla se sul verde ci sono punti più scuri o di un colore diverso.'],
      blue: ['Schermo blu', 'Cerca punti scuri o differenze di tonalità sullo sfondo blu uniforme.'],
      gray: ['Schermo grigio', 'Confronta il centro e i bordi per individuare differenze di luminosità o tonalità.']
    },
    title: (name) => `${name} online`,
    intro: (hex) => `Mostra il colore ${hex} a schermo intero per verificare il monitor o scarica uno sfondo uniforme in PNG.`,
    about: 'Un colore uniforme per controllare il monitor',
    color: (hex) => `L’anteprima si apre con il colore ${hex}. A schermo intero, il colore scelto riempie tutta l’area di prova.`,
    uses: 'Cosa osservare',
    guide: 'Come controllare il monitor',
    steps: ['Apri l’anteprima sul monitor che vuoi controllare e usa la luminosità abituale.', 'Osserva il centro, gli angoli e i bordi. Cambia colore per confrontare lo stesso punto.'],
    png: 'Scegli la risoluzione e scarica il PNG. Il file usa il colore mostrato nell’anteprima.',
    related: 'Prova gli altri colori per confrontare la stessa zona del monitor.',
    question: 'Posso salvare questo colore in 4K?',
    answer: 'Sì. Seleziona 4K UHD per creare un PNG da 3840 × 2160 pixel.'
  },
  tr: {
    colors: {
      red: ['Kırmızı ekran', 'Kırmızı alanda koyu kalan veya farklı renkte görünen noktaları arayın.'],
      green: ['Yeşil ekran', 'Yeşil zeminde koyu veya farklı tonda görünen noktalar olup olmadığına bakın.'],
      blue: ['Mavi ekran', 'Düz mavi alanda koyu noktaları ve renk farklılıklarını kontrol edin.'],
      gray: ['Gri ekran', 'Parlaklık veya ton farklarını görmek için ekranın ortasını ve kenarlarını karşılaştırın.']
    },
    title: (name) => `Çevrimiçi ${name.toLocaleLowerCase('tr')}`,
    intro: (hex) => `Monitörü kontrol etmek için ${hex} rengini tam ekranda gösterin veya düz renkli bir PNG arka plan indirin.`,
    about: 'Monitör testi için düz renk',
    color: (hex) => `Önizleme ${hex} rengiyle açılır. Tam ekranda seçilen renk tüm test alanını kaplar.`,
    uses: 'Nelere bakmalı?',
    guide: 'Monitör nasıl kontrol edilir?',
    steps: ['Önizlemeyi kontrol etmek istediğiniz monitörde açın ve her zamanki parlaklık ayarını kullanın.', 'Ortayı, köşeleri ve kenarları inceleyin. Aynı noktayı farklı renklerde karşılaştırın.'],
    png: 'Çözünürlüğü seçip PNG dosyasını indirin. Görüntü önizlemedeki rengi kullanır.',
    related: 'Ekranın aynı bölgesini karşılaştırmak için diğer renkleri deneyin.',
    question: 'Bu rengi 4K olarak kaydedebilir miyim?',
    answer: 'Evet. 3840 × 2160 piksellik PNG oluşturmak için 4K UHD seçin.'
  },
  sv: {
    colors: {
      red: ['Röd skärm', 'Leta efter punkter som förblir mörka eller får en annan färg mot rött.'],
      green: ['Grön skärm', 'Se om några punkter ser mörkare ut eller har en annan nyans mot grönt.'],
      blue: ['Blå skärm', 'Leta efter mörka punkter eller ojämna färgtoner i den blå ytan.'],
      gray: ['Grå skärm', 'Jämför mitten och kanterna för att upptäcka skillnader i ljusstyrka eller färgton.']
    },
    title: (name) => `${name} online`,
    intro: (hex) => `Visa färgen ${hex} i helskärm för att kontrollera bildskärmen eller ladda ner en enfärgad PNG-bakgrund.`,
    about: 'En enfärgad yta för skärmtest',
    color: (hex) => `Förhandsvisningen börjar med färgen ${hex}. I helskärm fyller den valda färgen hela testytan.`,
    uses: 'Det här kan du kontrollera',
    guide: 'Så kontrollerar du bildskärmen',
    steps: ['Öppna förhandsvisningen på skärmen du vill kontrollera och använd din vanliga ljusstyrka.', 'Titta på mitten, hörnen och kanterna. Växla färg för att jämföra samma punkt.'],
    png: 'Välj en upplösning och ladda ner PNG-filen. Den använder färgen som visas i förhandsvisningen.',
    related: 'Prova andra färger för att jämföra samma del av skärmen.',
    question: 'Kan jag spara färgen i 4K?',
    answer: 'Ja. Välj 4K UHD för att skapa en PNG i 3840 × 2160 pixlar.'
  },
  ms: {
    colors: {
      red: ['Skrin merah', 'Cari titik yang kelihatan gelap atau berlainan warna pada latar merah.'],
      green: ['Skrin hijau', 'Perhatikan titik yang kelihatan lebih gelap atau berlainan tona pada latar hijau.'],
      blue: ['Skrin biru', 'Cari titik gelap atau bahagian yang berlainan tona pada latar biru.'],
      gray: ['Skrin kelabu', 'Bandingkan bahagian tengah dan tepi untuk mengesan perbezaan kecerahan atau tona.']
    },
    title: (name) => `${name} dalam talian`,
    intro: (hex) => `Paparkan warna ${hex} dalam skrin penuh untuk menyemak monitor atau muat turun latar warna tunggal sebagai PNG.`,
    about: 'Warna tunggal untuk menguji skrin',
    color: (hex) => `Pratonton bermula dengan warna ${hex}. Dalam mod skrin penuh, warna yang dipilih memenuhi seluruh ruang ujian.`,
    uses: 'Perkara yang perlu diperhatikan',
    guide: 'Cara menyemak monitor',
    steps: ['Buka pratonton pada monitor yang ingin disemak dan gunakan kecerahan biasa.', 'Periksa tengah, sudut dan tepi. Tukar warna untuk membandingkan titik yang sama.'],
    png: 'Pilih resolusi dan muat turun PNG. Imej menggunakan warna yang tertera dalam pratonton.',
    related: 'Cuba warna lain untuk membandingkan kawasan skrin yang sama.',
    question: 'Bolehkah saya menyimpan warna ini dalam 4K?',
    answer: 'Ya. Pilih 4K UHD untuk menjana PNG bersaiz 3840 × 2160 piksel.'
  }
};

export function colorPageLabel(locale, mode) {
  if (mode === 'black') return locale.nav[0];
  if (mode === 'white') return locale.nav[1];
  return translations[locale.lang].colors[mode][0];
}

export function colorPageCopy(locale, mode, hex) {
  const copy = translations[locale.lang];
  const [name, testTip] = copy.colors[mode];
  const intro = copy.intro(hex);
  return {
    head: copy.title(name),
    meta: `${name}. ${intro}`,
    intro,
    definition: [copy.about, copy.color(hex)],
    usesTitle: copy.uses,
    uses: [[name, testTip]],
    guide: copy.guide,
    steps: copy.steps,
    png: [locale.ui.download, copy.png],
    related: copy.related,
    faq: [[copy.question, copy.answer]]
  };
}
