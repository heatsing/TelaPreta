const translations = {
  'pt-BR': {
    colors: {
      red: ['Tela vermelha', 'Procure pontos escuros ou que não acompanham o vermelho.'],
      green: ['Tela verde', 'Veja se algum ponto aparece mais escuro ou com outro tom de verde.'],
      blue: ['Tela azul sólida', 'Exiba azul puro em tela cheia. Procure pontos escuros ou de outra cor e compare o mesmo local em vermelho e verde.'],
      gray: ['Tela cinza', 'Compare o centro e as bordas para encontrar manchas e diferenças de brilho ou tom.'],
      yellow: ['Tela amarela', 'Compare um ponto suspeito no amarelo com o mesmo ponto nas telas vermelha e verde.'],
      orange: ['Tela laranja', 'Confira se o centro e as bordas têm o mesmo tom ou use o laranja como fundo em PNG.'],
      pink: ['Tela rosa', 'Procure manchas ou diferenças de cor em um fundo rosa claro. Confira também na tela branca.'],
      purple: ['Tela roxa', 'Mostre o roxo e depois repita a observação no vermelho e no azul para comparar o mesmo ponto.'],
      'zoom-lighting': ['Luz para Zoom', 'Use um segundo monitor ou tablet com a tela em tom pêssego como luz de preenchimento em videochamadas.']
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
      blue: ['Solid Blue Screen', 'Show pure blue in fullscreen. Check for dark or discolored dots, then compare the same points on red and green.'],
      gray: ['Gray Screen', 'Compare the center and edges for shifts in brightness, tint, or shading.'],
      yellow: ['Yellow Screen', 'Compare a suspicious point on yellow with the same point on separate red and green screens.'],
      orange: ['Orange Screen', 'Compare the center and edges for tint changes or use the orange as a solid PNG backdrop.'],
      pink: ['Pink Screen', 'Look for patches or color shifts against light pink, then check whether they also appear on white.'],
      purple: ['Purple Screen', 'Check the purple field and switch to red and blue to compare the same point.'],
      'zoom-lighting': ['Zoom Lighting', 'Use a second screen or tablet showing a warm peach color as fill light during video calls.']
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
      blue: ['Layar biru polos', 'Cari titik gelap dan bagian yang warnanya berbeda di bidang biru.'],
      gray: ['Layar abu-abu', 'Bandingkan kecerahan dan rona di bagian tengah dan tepi layar.'],
      yellow: ['Layar kuning', 'Bandingkan titik yang mencurigakan pada latar kuning, merah, dan hijau.'],
      orange: ['Layar jingga', 'Bandingkan warna bagian tengah dan tepi, atau simpan warna jingga sebagai latar PNG.'],
      pink: ['Layar merah muda', 'Cari bercak pada latar merah muda, lalu periksa posisi yang sama pada layar putih.'],
      purple: ['Layar ungu', 'Periksa latar ungu, lalu ganti ke merah dan biru untuk membandingkan titik yang sama.'],
      'zoom-lighting': ['Cahaya untuk Zoom', 'Gunakan layar kedua atau tablet berwarna persik sebagai cahaya tambahan saat panggilan video.']
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
      blue: ['Pantalla azul uniforme', 'Busca puntos oscuros o zonas de otro tono en el fondo azul uniforme.'],
      gray: ['Pantalla gris', 'Compara el centro y los bordes para detectar diferencias de brillo o de tono.'],
      yellow: ['Pantalla amarilla', 'Compara un punto dudoso sobre amarillo con el mismo punto sobre rojo y verde.'],
      orange: ['Pantalla naranja', 'Compara el tono del centro con los bordes o descarga el naranja como fondo PNG.'],
      pink: ['Pantalla rosa', 'Busca manchas sobre el rosa claro y comprueba la misma zona sobre blanco.'],
      purple: ['Pantalla morada', 'Comprueba el fondo morado y cambia a rojo y azul para comparar el mismo punto.'],
      'zoom-lighting': ['Luz para Zoom', 'Usa una segunda pantalla o tableta con un tono melocotón como luz de relleno en videollamadas.']
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
      blue: ['纯蓝屏', '全屏显示纯蓝色，查看是否有暗点或异色点，再切换红色和绿色观察同一位置。'],
      gray: ['灰色屏幕', '对比屏幕中央和边缘，查看是否有色斑、色偏或亮度不均。'],
      yellow: ['黄色屏幕', '在黄、红、绿三种背景上查看同一个可疑像素，比较它在什么颜色下异常。'],
      orange: ['橙色屏幕', '比较屏幕中央和边缘的橙色是否一致，也可以下载同色 PNG 背景。'],
      pink: ['粉色屏幕', '用浅粉色查找色斑或色偏，再换到白色观察同一处。'],
      purple: ['紫色屏幕', '先显示紫色，再切换红色和蓝色，对比可疑像素在相同位置的表现。'],
      'zoom-lighting': ['Zoom 补光', '在第二台显示器或平板上显示暖桃色，为视频通话补光。']
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
      blue: ['青一色の画面', '青い面に暗い点、色の異なる点、色ムラがないか確認します。'],
      gray: ['グレー画面', '中央と端を見比べて、明るさや色合いのムラを確認します。'],
      yellow: ['黄色い画面', '黄色の画面で気になる点を、赤や緑を表示したときと見比べます。'],
      orange: ['オレンジ色の画面', '画面の中央と端の色を見比べたり、同じ色のPNGを保存したりできます。'],
      pink: ['ピンク色の画面', '淡いピンクで色ムラや斑点を探し、白でも同じ位置を確認します。'],
      purple: ['紫色の画面', '紫を表示して気になる点があれば、赤と青でも同じ位置を見比べます。'],
      'zoom-lighting': ['Zoom の補助照明', 'サブモニターやタブレットに暖かいピーチ色を表示し、ビデオ通話の補助光に使えます。']
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
      blue: ['파란색 단색 화면', '파란 단색 화면에서 어두운 점이나 색이 고르지 않은 부분을 찾아보세요.'],
      gray: ['회색 화면', '가운데와 가장자리를 비교해 밝기나 색이 고르지 않은 부분을 확인하세요.'],
      yellow: ['노란 화면', '노란 화면에서 의심스러운 점을 찾은 뒤 빨강과 초록으로 바꿔 같은 위치를 확인하세요.'],
      orange: ['주황색 화면', '가운데와 가장자리의 색을 비교하거나 주황색 PNG 배경을 저장하세요.'],
      pink: ['분홍색 화면', '연한 분홍색에서 얼룩이나 색 차이를 확인한 뒤 흰 화면에서 같은 위치를 비교하세요.'],
      purple: ['보라색 화면', '보라색을 표시한 뒤 빨강과 파랑으로 바꿔 같은 위치의 점을 비교하세요.'],
      'zoom-lighting': ['Zoom 보조 조명', '보조 모니터나 태블릿에 따뜻한 복숭아색을 표시해 영상 통화에 보조광으로 활용하세요.']
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
      blue: ['Einfarbiger blauer Bildschirm', 'Achte auf dunkle Punkte und Farbabweichungen in der blauen Fläche.'],
      gray: ['Grauer Bildschirm', 'Vergleiche Mitte und Ränder auf Helligkeitsunterschiede, Flecken und Farbstiche.'],
      yellow: ['Gelber Bildschirm', 'Vergleiche eine auffällige Stelle auf Gelb mit derselben Stelle auf Rot und Grün.'],
      orange: ['Oranger Bildschirm', 'Vergleiche den Farbton in der Mitte und am Rand oder speichere einen orangefarbenen PNG-Hintergrund.'],
      pink: ['Rosafarbener Bildschirm', 'Achte auf Flecken auf hellem Rosa und prüfe dieselbe Stelle anschließend auf Weiß.'],
      purple: ['Violetter Bildschirm', 'Prüfe die violette Fläche und schalte zum Vergleich derselben Stelle auf Rot und Blau um.'],
      'zoom-lighting': ['Licht für Zoom', 'Verwende einen zweiten Bildschirm im warmen Pfirsichton als Aufhelllicht für Videoanrufe.']
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
      blue: ['Écran bleu uni', 'Repérez les points sombres et les zones de teinte différente sur le fond bleu.'],
      gray: ['Écran gris', 'Comparez le centre et les bords pour repérer des écarts de luminosité ou de teinte.'],
      yellow: ['Écran jaune', 'Comparez un point suspect sur fond jaune avec le même point sur le rouge et le vert.'],
      orange: ['Écran orange', 'Comparez la teinte au centre et sur les bords, ou enregistrez le fond orange en PNG.'],
      pink: ['Écran rose', 'Cherchez des taches sur le rose clair, puis vérifiez la même zone sur le blanc.'],
      purple: ['Écran violet', 'Observez le violet, puis affichez le rouge et le bleu pour comparer le même point.'],
      'zoom-lighting': ['Éclairage pour Zoom', 'Utilisez un deuxième écran de couleur pêche comme éclairage d’appoint pendant vos appels vidéo.']
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
      blue: ['Однотонний синій екран', 'Зверніть увагу на темні точки й нерівномірний відтінок на синьому тлі.'],
      gray: ['Сірий екран', 'Порівняйте центр і краї, щоб помітити різницю в яскравості або відтінку.'],
      yellow: ['Жовтий екран', 'Перевірте підозрілу точку на жовтому, червоному та зеленому тлі.'],
      orange: ['Помаранчевий екран', 'Порівняйте відтінок у центрі та по краях або збережіть помаранчеве тло в PNG.'],
      pink: ['Рожевий екран', 'Шукайте плями на світло-рожевому тлі та перевірте ту саму ділянку на білому.'],
      purple: ['Фіолетовий екран', 'Після фіолетового тла перевірте ту саму точку на червоному та синьому.'],
      'zoom-lighting': ['Освітлення для Zoom', 'Покажіть теплий персиковий колір на другому екрані для додаткового світла під час відеодзвінка.']
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
      blue: ['Jednolity niebieski ekran', 'Sprawdź, czy na niebieskim tle są ciemne punkty lub nierównomierny odcień.'],
      gray: ['Szary ekran', 'Porównaj środek i krawędzie pod kątem różnic w jasności lub odcieniu.'],
      yellow: ['Żółty ekran', 'Porównaj podejrzany punkt na żółtym, czerwonym i zielonym tle.'],
      orange: ['Pomarańczowy ekran', 'Porównaj odcień na środku i przy krawędziach lub zapisz pomarańczowe tło w PNG.'],
      pink: ['Różowy ekran', 'Poszukaj plam na jasnym różu i sprawdź ten sam obszar na białym tle.'],
      purple: ['Fioletowy ekran', 'Sprawdź fioletowe tło, a potem porównaj ten sam punkt na czerwonym i niebieskim.'],
      'zoom-lighting': ['Oświetlenie do Zooma', 'Wyświetl ciepły brzoskwiniowy kolor na dodatkowym ekranie, by doświetlić się podczas rozmowy wideo.']
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
      blue: ['Schermo blu uniforme', 'Cerca punti scuri o differenze di tonalità sullo sfondo blu uniforme.'],
      gray: ['Schermo grigio', 'Confronta il centro e i bordi per individuare differenze di luminosità o tonalità.'],
      yellow: ['Schermo giallo', 'Confronta lo stesso punto sullo sfondo giallo, rosso e verde.'],
      orange: ['Schermo arancione', 'Confronta la tonalità al centro e ai bordi oppure salva lo sfondo arancione in PNG.'],
      pink: ['Schermo rosa', 'Cerca macchie sul rosa chiaro e controlla la stessa zona sul bianco.'],
      purple: ['Schermo viola', 'Controlla lo sfondo viola e passa al rosso e al blu per confrontare lo stesso punto.'],
      'zoom-lighting': ['Illuminazione per Zoom', 'Mostra un colore pesca caldo su un secondo schermo per avere una luce di riempimento durante le videochiamate.']
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
      blue: ['Düz mavi ekran', 'Düz mavi alanda koyu noktaları ve renk farklılıklarını kontrol edin.'],
      gray: ['Gri ekran', 'Parlaklık veya ton farklarını görmek için ekranın ortasını ve kenarlarını karşılaştırın.'],
      yellow: ['Sarı ekran', 'Şüpheli bir noktayı sarı, kırmızı ve yeşil ekranlarda aynı konumda karşılaştırın.'],
      orange: ['Turuncu ekran', 'Orta ve kenarlardaki renk tonunu karşılaştırın veya turuncu arka planı PNG olarak kaydedin.'],
      pink: ['Pembe ekran', 'Açık pembe zeminde lekeleri arayın ve aynı alanı beyaz ekranda kontrol edin.'],
      purple: ['Mor ekran', 'Mor ekranı inceleyin, sonra kırmızı ve maviye geçip aynı noktayı karşılaştırın.'],
      'zoom-lighting': ['Zoom için aydınlatma', 'Görüntülü aramada dolgu ışığı için ikinci ekranda sıcak şeftali rengi gösterin.']
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
      blue: ['Enfärgad blå skärm', 'Leta efter mörka punkter eller ojämna färgtoner i den blå ytan.'],
      gray: ['Grå skärm', 'Jämför mitten och kanterna för att upptäcka skillnader i ljusstyrka eller färgton.'],
      yellow: ['Gul skärm', 'Jämför en misstänkt punkt mot gul, röd och grön bakgrund.'],
      orange: ['Orange skärm', 'Jämför nyansen i mitten och vid kanterna eller spara en orange PNG-bakgrund.'],
      pink: ['Rosa skärm', 'Leta efter fläckar mot ljusrosa och jämför samma område mot vitt.'],
      purple: ['Lila skärm', 'Kontrollera den lila ytan och växla till rött och blått för att jämföra samma punkt.'],
      'zoom-lighting': ['Belysning för Zoom', 'Använd en extra skärm med varm persikofärg som upplättningsljus under videosamtal.']
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
      blue: ['Skrin biru polos', 'Cari titik gelap atau bahagian yang berlainan tona pada latar biru.'],
      gray: ['Skrin kelabu', 'Bandingkan bahagian tengah dan tepi untuk mengesan perbezaan kecerahan atau tona.'],
      yellow: ['Skrin kuning', 'Bandingkan titik yang mencurigakan pada kedudukan yang sama di latar kuning, merah dan hijau.'],
      orange: ['Skrin jingga', 'Bandingkan tona di tengah dan tepi atau simpan latar jingga sebagai PNG.'],
      pink: ['Skrin merah jambu', 'Cari tompok pada latar merah jambu lembut, kemudian semak bahagian yang sama pada latar putih.'],
      purple: ['Skrin ungu', 'Semak latar ungu, kemudian tukar kepada merah dan biru untuk membandingkan titik yang sama.'],
      'zoom-lighting': ['Cahaya untuk Zoom', 'Gunakan skrin kedua dengan warna pic hangat sebagai cahaya tambahan semasa panggilan video.']
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

const chromaKey = {
  'pt-BR': ['Abra o verde #00FF00 em tela cheia para testar o monitor ou usá-lo como fundo para chroma key.', 'Como usar o verde para chroma key', 'Mostre o verde em um segundo monitor atrás de um objeto pequeno. No OBS, adicione o filtro Chroma Key à fonte da câmera e selecione Verde. Coloque o novo fundo abaixo da câmera na lista de fontes e ajuste a similaridade até remover o verde sem apagar partes do objeto.', 'Documentação do OBS'],
  en: ['Show #00FF00 in fullscreen to test your monitor or use it as a green backdrop for chroma key.', 'How to Use the Green Screen for Chroma Key', 'Show the green field on a second screen behind a small subject. In OBS, add the Chroma Key filter to the camera source and select Green. Place the replacement background below the camera in the source list and adjust similarity until the green disappears without cutting into your subject.', 'OBS Chroma Key guide'],
  id: ['Tampilkan #00FF00 dalam layar penuh untuk memeriksa monitor atau sebagai latar hijau untuk chroma key.', 'Cara memakai latar hijau untuk chroma key', 'Tampilkan warna hijau pada layar kedua di belakang objek kecil. Di OBS, tambahkan filter Chroma Key ke sumber kamera dan pilih Hijau. Letakkan sumber latar pengganti di bawah kamera, lalu atur kemiripan hingga hijau hilang tanpa menghapus bagian objek.', 'Panduan OBS'],
  es: ['Muestra #00FF00 a pantalla completa para revisar el monitor o usarlo como fondo verde para chroma key.', 'Cómo usar el fondo verde para chroma key', 'Muestra el verde en una segunda pantalla detrás de un objeto pequeño. En OBS, agrega el filtro Chroma Key a la fuente de cámara y selecciona Verde. Coloca el fondo de reemplazo debajo de la cámara y ajusta la similitud hasta borrar el verde sin recortar el objeto.', 'Guía de OBS'],
  'zh-Hans': ['全屏显示 #00FF00 检查显示器，也可以把纯绿色用作色度抠像（chroma key）背景。', '如何用绿幕进行色度抠像', '在第二台显示器上打开全屏绿色，把小物件放在屏幕前拍摄。给 OBS 中的摄像头来源添加 Chroma Key 滤镜并选择绿色。把替换背景放到摄像头来源下方，再调节相似度，直到绿色消失且物件边缘保留完整。', 'OBS 滤镜说明'],
  ja: ['緑色 #00FF00 を全画面で表示してモニターを確認したり、クロマキーの背景に使ったりできます。', '緑の画面をクロマキーで使う方法', '小物の後ろに置いたサブモニターに緑を表示します。OBSでカメラソースに「クロマキー」を追加し、緑を選びます。合成する背景をカメラソースの下へ置き、小物の輪郭が残るように類似性を調整します。', 'OBSのフィルターガイド'],
  ko: ['#00FF00을 전체 화면으로 표시해 모니터를 확인하거나 크로마키용 녹색 배경으로 활용하세요.', '녹색 화면으로 크로마키 하는 방법', '작은 피사체 뒤의 보조 화면에 녹색을 표시합니다. OBS에서 카메라 소스에 크로마키 필터를 추가하고 녹색을 선택하세요. 교체할 배경을 카메라 소스 아래에 놓고 피사체가 잘리지 않도록 유사도를 조절하세요.', 'OBS 안내'],
  de: ['Zeige #00FF00 im Vollbild für einen Monitortest oder als grünen Hintergrund für Chroma Key.', 'So nutzt du die grüne Fläche für Chroma Key', 'Zeige Grün auf einem zweiten Bildschirm hinter einem kleinen Motiv. Füge der Kameraquelle in OBS den Filter Chroma Key hinzu und wähle Grün. Platziere den Ersatzhintergrund unter der Kameraquelle und stelle die Ähnlichkeit so ein, dass die Kontur des Motivs erhalten bleibt.', 'OBS-Filteranleitung'],
  fr: ['Affichez le vert #00FF00 en plein écran pour tester votre moniteur ou l’utiliser pour une incrustation chromatique.', 'Comment utiliser le fond vert pour une incrustation', 'Affichez le vert sur un deuxième écran derrière un petit objet. Dans OBS, ajoutez le filtre Chroma Key à la source de la caméra et choisissez le vert. Placez le fond de remplacement sous la caméra et ajustez la similarité pour conserver les contours du sujet.', 'Guide OBS'],
  uk: ['Відкрийте #00FF00 на весь екран для перевірки монітора або як зелене тло для хромакею.', 'Як використати зелений екран для хромакею', 'Покажіть зелений колір на другому екрані позаду невеликого предмета. В OBS додайте фільтр Chroma Key до джерела камери та виберіть зелений. Помістіть нове тло під камерою та налаштуйте подібність, щоб зберегти контури предмета.', 'Довідка OBS'],
  pl: ['Wyświetl #00FF00 na pełnym ekranie, by sprawdzić monitor lub użyć zielonego tła do kluczowania koloru.', 'Jak użyć zielonego tła do kluczowania', 'Wyświetl zielony kolor na drugim ekranie za małym obiektem. W OBS dodaj filtr Chroma Key do źródła kamery i wybierz zielony. Umieść nowe tło pod kamerą i dostosuj podobieństwo, aby zachować krawędzie obiektu.', 'Instrukcja OBS'],
  it: ['Mostra #00FF00 a schermo intero per verificare il monitor o creare uno sfondo verde per il chroma key.', 'Come usare lo sfondo verde per il chroma key', 'Mostra il verde su un secondo schermo dietro a un piccolo oggetto. In OBS aggiungi il filtro Chroma Key alla sorgente della fotocamera e seleziona il verde. Posiziona il nuovo sfondo sotto la fotocamera e regola la somiglianza per conservare il contorno dell’oggetto.', 'Guida di OBS'],
  tr: ['Monitörü denetlemek veya chroma key için yeşil fon kullanmak üzere #00FF00 rengini tam ekranda gösterin.', 'Yeşil fonla chroma key nasıl kullanılır?', 'Küçük bir nesnenin arkasındaki ikinci ekranda yeşili gösterin. OBS’de kamera kaynağına Chroma Key filtresini ekleyip yeşili seçin. Yeni arka planı kamera kaynağının altına yerleştirin ve nesnenin kenarlarını koruyacak şekilde benzerliği ayarlayın.', 'OBS rehberi'],
  sv: ['Visa #00FF00 i helskärm för att testa bildskärmen eller använda den som grön bakgrund för chroma key.', 'Så använder du grönt för chroma key', 'Visa grönt på en andra skärm bakom ett litet föremål. Lägg till filtret Chroma Key på kamerakällan i OBS och välj grönt. Lägg den nya bakgrunden under kamerakällan och justera likheten tills det gröna försvinner utan att motivets konturer går förlorade.', 'OBS-guide'],
  ms: ['Paparkan #00FF00 dalam skrin penuh untuk menyemak monitor atau sebagai latar hijau untuk chroma key.', 'Cara menggunakan latar hijau untuk chroma key', 'Paparkan hijau pada skrin kedua di belakang objek kecil. Dalam OBS, tambah penapis Chroma Key pada sumber kamera dan pilih hijau. Letakkan latar gantian di bawah kamera dan laraskan keserupaan agar tepi objek kekal jelas.', 'Panduan OBS']
};

const warmLighting = {
  'pt-BR': ['Abra uma tela pêssego em tela cheia para iluminar o rosto em reuniões no Zoom e outras videochamadas.', 'Luz de preenchimento para videochamadas', 'Como posicionar e ajustar a luz', 'Abra a prévia em uma segunda tela perto da câmera.', 'Comece com brilho baixo e ajuste observando seu rosto na prévia da câmera. Se você usa óculos, mova a tela para evitar reflexos.'],
  en: ['Open a warm peach screen in fullscreen to light your face during Zoom meetings and other video calls.', 'Fill Light for Video Calls', 'How to Position and Adjust the Light', 'Open the preview on a second screen near your camera.', 'Start with the brightness turned down. Adjust it while looking at your camera preview and move the screen if it reflects off your glasses.'],
  id: ['Tampilkan warna persik hangat dalam layar penuh untuk menerangi wajah saat rapat Zoom dan panggilan video lainnya.', 'Cahaya tambahan untuk panggilan video', 'Cara menempatkan dan mengatur cahaya', 'Buka pratinjau pada layar kedua dekat kamera.', 'Mulai dengan kecerahan rendah, lalu atur sambil melihat pratinjau kamera. Geser layar jika terpantul pada kacamata.'],
  es: ['Abre una pantalla melocotón a pantalla completa para iluminar tu rostro en Zoom y otras videollamadas.', 'Luz de relleno para videollamadas', 'Cómo colocar y ajustar la luz', 'Abre la vista previa en una segunda pantalla cerca de la cámara.', 'Empieza con brillo bajo. Súbelo mirando la vista previa de la cámara y mueve la pantalla si se refleja en tus gafas.'],
  'zh-Hans': ['全屏显示暖桃色，为 Zoom 会议和其他视频通话提供柔和的面部补光。', '视频通话时的补光', '如何摆放屏幕和调节亮度', '在靠近摄像头的第二台屏幕上打开预览。', '从低亮度开始，对照摄像头预览逐步调节。如果眼镜反光，稍微移开屏幕。'],
  ja: ['暖かいピーチ色を全画面で表示して、Zoom会議やビデオ通話で顔を明るく照らします。', 'ビデオ通話の補助光', '画面の置き方と明るさの調整', 'カメラのそばのサブモニターでプレビューを開きます。', '低い明るさから始め、カメラの映り方を見ながら調整します。眼鏡に映り込む場合は画面を少しずらします。'],
  ko: ['따뜻한 복숭아색을 전체 화면으로 표시해 Zoom 회의와 영상 통화에서 얼굴을 밝게 비춥니다.', '영상 통화용 보조광', '화면 위치와 밝기 조절 방법', '카메라 가까이에 놓은 보조 화면에서 미리보기를 엽니다.', '밝기를 낮게 설정한 뒤 카메라 미리보기를 보면서 조절합니다. 안경에 반사되면 화면 위치를 옮깁니다.'],
  de: ['Zeige einen warmen Pfirsichton im Vollbild als Aufhelllicht für Zoom-Meetings und andere Videoanrufe.', 'Aufhelllicht für Videoanrufe', 'So stellst du das Licht auf und ein', 'Öffne die Vorschau auf einem zweiten Bildschirm in der Nähe der Kamera.', 'Beginne mit geringer Helligkeit und passe sie beim Blick auf die Kameravorschau an. Verschiebe den Bildschirm, wenn er sich in deiner Brille spiegelt.'],
  fr: ['Affichez une teinte pêche en plein écran pour éclairer votre visage pendant vos appels Zoom et autres appels vidéo.', 'Éclairage d’appoint pour les appels vidéo', 'Comment placer et régler la lumière', 'Ouvrez l’aperçu sur un deuxième écran près de la caméra.', 'Commencez par une faible luminosité et ajustez-la en regardant l’aperçu de la caméra. Déplacez l’écran si vos lunettes reflètent la lumière.'],
  uk: ['Відкрийте теплий персиковий колір на весь екран, щоб підсвітити обличчя під час дзвінків у Zoom та інших відеозустрічей.', 'Додаткове світло для відеодзвінків', 'Як розташувати екран і налаштувати світло', 'Відкрийте попередній перегляд на другому екрані біля камери.', 'Почніть із невисокої яскравості та змінюйте її за зображенням камери. Якщо світло відбивається в окулярах, перемістіть екран.'],
  pl: ['Wyświetl ciepły brzoskwiniowy kolor na pełnym ekranie, by doświetlić twarz podczas spotkań w Zoomie i innych rozmów wideo.', 'Doświetlenie do rozmów wideo', 'Jak ustawić ekran i wyregulować światło', 'Otwórz podgląd na dodatkowym ekranie w pobliżu kamery.', 'Zacznij od niskiej jasności i dostosuj ją na podstawie podglądu kamery. Przestaw ekran, jeśli odbija się w okularach.'],
  it: ['Mostra un colore pesca caldo a schermo intero per illuminare il viso su Zoom e durante altre videochiamate.', 'Luce di riempimento per le videochiamate', 'Come posizionare e regolare la luce', 'Apri l’anteprima su un secondo schermo vicino alla fotocamera.', 'Inizia con una luminosità bassa e regolala guardando l’anteprima della fotocamera. Sposta lo schermo se si riflette negli occhiali.'],
  tr: ['Zoom toplantılarında ve diğer görüntülü aramalarda yüzünüzü aydınlatmak için sıcak şeftali rengini tam ekranda gösterin.', 'Görüntülü görüşmeler için dolgu ışığı', 'Işığı konumlandırma ve ayarlama', 'Kameraya yakın ikinci ekranda önizlemeyi açın.', 'Düşük parlaklıkla başlayıp kamera önizlemesine bakarak ayarlayın. Gözlüğünüzde yansıma olursa ekranı kaydırın.'],
  sv: ['Visa en varm persikofärg i helskärm för att belysa ansiktet vid Zoom-möten och andra videosamtal.', 'Upplättningsljus för videosamtal', 'Så placerar och justerar du ljuset', 'Öppna förhandsvisningen på en extra skärm nära kameran.', 'Börja på låg ljusstyrka och anpassa den medan du tittar på kamerabilden. Flytta skärmen om den speglas i glasögonen.'],
  ms: ['Paparkan warna pic hangat dalam skrin penuh untuk menerangi wajah semasa mesyuarat Zoom dan panggilan video lain.', 'Cahaya tambahan untuk panggilan video', 'Cara meletakkan skrin dan melaraskan cahaya', 'Buka pratonton pada skrin kedua berhampiran kamera.', 'Mulakan dengan kecerahan rendah dan laraskannya sambil melihat pratonton kamera. Alihkan skrin jika pantulan kelihatan pada cermin mata.']
};

export function colorPageLabel(locale, mode) {
  if (mode === 'black') return locale.nav[0];
  if (mode === 'white') return locale.nav[1];
  return translations[locale.lang].colors[mode][0];
}

export function colorPageCopy(locale, mode, hex) {
  const copy = translations[locale.lang];
  const [name, testTip] = copy.colors[mode];
  const green = mode === 'green' ? chromaKey[locale.lang] : null;
  const lighting = mode === 'zoom-lighting' ? warmLighting[locale.lang] : null;
  const intro = green?.[0] ?? lighting?.[0] ?? copy.intro(hex);
  const uses = [[name, testTip]];
  if (green) uses.push([green[1], green[2], { href: 'https://obsproject.com/kb/chroma-key-filter', label: green[3] }]);
  return {
    head: copy.title(name),
    meta: `${name}. ${intro}`,
    intro,
    definition: [lighting?.[1] ?? copy.about, copy.color(hex)],
    usesTitle: copy.uses,
    uses,
    guide: lighting?.[2] ?? copy.guide,
    steps: lighting ? lighting.slice(3) : copy.steps,
    png: [locale.ui.download, copy.png],
    related: copy.related,
    faq: [[copy.question, copy.answer]]
  };
}
