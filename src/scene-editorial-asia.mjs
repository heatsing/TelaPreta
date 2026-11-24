function detail(about, fullscreenStep, useTitle, extraUses, extraFaq) {
  return { about, fullscreenStep, useTitle, extraUses, extraFaq };
}

const chinese = {
  relatedHeading: '相关画面与工具',
  fullscreenFaq: ['为什么全屏时还能看到浏览器栏？', '浏览器允许原生全屏时，画面会铺满屏幕。无法启用原生全屏时，画面会填满当前可视区域，浏览器栏可能仍在。点击、轻触画面或按 Esc 即可退出。'],
  scenes: {
    error: detail(
      '深蓝画面上有警告符号和一条中断提示，借用了早期电脑故障画面的视觉风格。提示和装饰会保持在原位。',
      '全屏后把警告符号和提示文字都留在取景范围内，方便观众读到提示。',
      '电脑故障讲解视频',
      [['排障课堂练习', '用这张模拟画面开场，让学员先说出看到的症状，再切到实际教学材料讲解记录错误信息的步骤。']],
      [['提示会自动消失吗？', '提示会一直保留，直到退出或打开其他画面。']]
    ),
    cracked: detail(
      '裂纹从一个亮点放射到深色背景上，粗细和方向各不相同。预览和全屏使用同一组裂纹，适合在多次拍摄中保持画面一致。',
      '保持显示器方向一致，再从近景切到侧面机位，裂纹在画面里的位置会更容易接上。',
      '破损屏幕特写',
      [['短片分镜预演', '先用模拟裂纹确认演员看向屏幕的位置，再决定镜头是表现冲击点，还是带到屏幕边缘较长的裂纹。']],
      [['可以把裂纹叠加到我的照片上吗？', '此工具显示由深色底图和裂纹组成的完整画面。需要叠加时，可在剪辑工具中单独处理自己的素材。']]
    ),
    radar: detail(
      '圆形视野里有同心刻度、固定目标点和旋转扫描线。扫描线会依次经过各点，退出全屏后可在页面控制区暂停或恢复。',
      '录制时可以等扫描线划过亮点，再在同一次转动中切入旁白。',
      '航空和海上主题布景',
      [['展台控制面板', '全屏放到展台的次要屏幕上，用持续旋转的扫描线表现设备正在运行，主屏留给演示内容。']],
      [['暂停后打开全屏会保持完全相同的角度吗？', '暂停状态会保留。全屏和预览分别绘制扫描动画，显示的角度可能不同。']]
    ),
    terminal: detail(
      '两个并排面板用绿色等宽字符拼出静态内容，左侧包含十六进制风格的符号。短行和不同密度的字符让远景也能看出终端风格。',
      '打开全屏后，检查摄像机能否同时拍到两个面板的外框。',
      '服务器主题视频背景',
      [['操作界面布局示例', '在课程开头用双栏画面展示终端风格和信息分区，再切到可实际输入命令的教学环境。']],
      [['画面里的文字会滚动吗？', '两栏文字保持原样。想要持续向下移动的字符，可打开相关工具中的数字雨画面。']]
    ),
    call: detail(
      '画面以姓名卡片显示 1–9 位参与者，其中包含你自己的卡片。更改人数后，布局会自动调整，每张卡片会根据填写的姓名生成字母头像。',
      '打开全屏后，从观众席看一眼边角处的姓名，确认每张卡片都能读清。',
      '远程会议培训',
      [['线上活动彩排', '填入主持人、嘉宾和观众的示例姓名，比较不同人数的卡片布局，再决定培训截图采用哪一种。']],
      [['减掉一张卡片以后再加回来，姓名还在吗？', '只要留在当前页面，再次增加人数时会恢复刚才隐藏卡片上的姓名。刷新页面会重新载入示例姓名。']]
    ),
    'update-blue': detail(
      '画面有 Windows 10 标题、进度条和随时间增长的整数百分比。填写的时长表示从起始百分比走到 100% 的用时，下方可暂停或恢复。',
      '拍摄需要连续变化的进度时，全屏后从同一次运行中录完这一段。',
      '维护说明视频',
      [['前后进度对照', '在预演中把起点设为 20% 录一个开场镜头，再设为 80% 录一个接近完成的镜头。每次调整后点击「重新开始」。']],
      [['打开或退出全屏会重置进度吗？', '进度跟随当前运行。打开或退出全屏时会继续使用同一个运行状态。']]
    ),
    'update-retro': detail(
      '蓝色复古界面用 Windows XP 标题、进度条和数值表现正在更新。有明确的起点和终点，适合在镜头中表现操作从开始到完成。',
      '全屏后检查设备方向和取景，把进度文字和进度条一起留在画面中。',
      '复古电脑片段',
      [['旧电脑展陈', '在展示更新流程的屏幕上，从低进度慢慢播放。旁边的说明牌可以交代当时的维护过程。']],
      [['如何让画面先显示更新已完成？', '将起始百分比填成 100，然后点击「重新开始」。进度条会直接显示为满格。']]
    ),
    'update-silver': detail(
      '深色背景把 Mac OS X 标题、浅色进度条和状态数字放在视觉中心。可以先选择时长，再让百分比变化配合讲解节奏。',
      '全屏以后从演示座位看一眼数字大小，确认背景和状态文字都容易分辨。',
      '旧版 Mac 使用教程',
      [['演讲章节过渡', '在讲 Mac 的历史时，从高进度开始播放，配合口头介绍进入下一章节的时机。']],
      [['时长是从 0% 算起的吗？', '时长从当前设置的起始百分比算到 100%。例如设为 2 分钟、起点 50%，剩余的 50 个百分点会在约 2 分钟内走完。']]
    ),
    'update-violet': detail(
      'Ubuntu 22.04 标题配合紫色底和白色进度条。百分比按照设定的时长提升，便于近距离看清数字怎样从起点走向 100%。',
      '需要对比开始和结束时，记录全屏刚打开时的百分比，等到 100% 再截取第二帧。',
      'Linux 入门讲解',
      [['截取固定状态', '把起点调到要讨论的数值，开始后尽快暂停，以便给同一进度加上旁白或注释。']],
      [['能把每次演示设成 1 分钟吗？', '可以。时长字段支持 1–240 分钟，填写后点击「重新开始」应用。']]
    ),
    'update-gray': detail(
      '深青灰色背景上的 ChromeOS 进度数字会跟着横向进度条变化。设置在预览外，完成调整后可只把进度画面展示给观众。',
      '全屏后从投影幕远端查看百分比是否清晰，再开始正式展示。',
      'Chromebook 教学素材',
      [['现场维护演示', '把设备放到面向观众的屏幕，用同一时长重复播放，再用口头说明交代设备更新期间的操作。']],
      [['改了时长，为什么当前进度速度没变？', '编辑字段后要点击「重新开始」，新的时长和起始百分比才会应用。']]
    ),
    'boot-xp': detail(
      '画面有 Windows XP 字样、复古图形标记和重复移动的加载指示。循环位于页面内，适合保留在同一个开机阶段取景。',
      '为开机镜头留出一段连续的滚动时间，再剪到下一个画面。',
      '复古软件视频开场',
      [['年代主题展览', '将开机动画留在旧电脑展区的辅助显示器上，让观众一眼看到当时常见的等待画面。']],
      [['它和 XP 模拟更新的进度条有什么区别？', '开机指示会反复循环。XP 更新模拟会显示可设起点、逐渐走到 100% 的百分比。']]
    ),
    bounce: detail(
      '预设的 TELA 标志在深色画面中往返移动，水平和垂直运动叠在一起。在页面控制区暂停会停止移动，恢复后可继续播放。',
      '录制时多留几个往返，让剪辑有足够的片段选择合适的切入点。',
      '直播换场背景',
      [['展台休息画面', '休息时让副屏显示运动中的标志，主屏继续留给节目单或活动信息。']],
      [['什么时候会开始弹跳？', '预览打开后就能播放。如果设备启用了减少动态效果，画面可能先停住，可用页面上的恢复按钮启动。']]
    ),
    clock: detail(
      '翻页时钟把设备时间分成时、分、秒三个数字板，以 24 小时制更新。暂停会定住当时的数字，恢复后重新显示当前时间。',
      '全屏后从房间最远的座位看一次，确认三个数字板都清楚可读。',
      '会议室挂钟',
      [
        ['自习与教室看时间', '把时钟放到讲台显示器或平板上，让学生在练习时知道当前几点。需要倒计时时，另开一个计时工具。'],
        ['拍摄固定时间画面', '在预览里等到所需时间，点击「暂停」后再开全屏。拍完恢复时，数字会跳回设备的当前时间。']
      ],
      [
        ['暂停时，时间仍在后台累计吗？', '暂停只是固定显示的时、分、秒。设备时间照常前进，恢复后会显示最新的本地时间。'],
        ['晚上 8 点会显示成什么？', '小时采用 24 小时制，晚上 8 点显示为 20。三个数字板从左到右分别是小时、分钟和秒钟。']
      ]
    ),
    quotes: detail(
      '页面准备了几句短文，每次只显示一句。下方的「换一句」按钮按顺序切换，最后一句之后会回到第一句。',
      '全屏后看一下长句的换行情况，再决定是否换成更适合现场投影的短句。',
      '活动中的休息提示',
      [['阅读小组开场', '选一句适合当天活动的短文作为开场，给大家阅读时间，再关掉全屏开始讨论。']],
      [['可以输入自定义短句吗？', '可以通过「换一句」浏览预先准备好的句子。自定义文字可用演示文稿单独制作。']]
    ),
    bars: detail(
      '固定的竖向色条和中央提示文字组成一张无信号模拟图。色块在打开和关闭全屏时保持不变，便于复用同一画面。',
      '全屏后给中心文字留足画面空间，在镜头切换前先试拍几秒。',
      '视频中的断讯转场',
      [['演示信号故障案例', '在课堂上先展示模拟彩条，请观众描述画面，再切换到真实信号输入设置的讲解。']],
      [['这些色条可用来校准显示器吗？', '这里的色条用于模拟画面。需要校准时，可使用专门的标准测试图案或校色工具。']]
    ),
    rain: detail(
      '多列字符按各自的节奏在深色背景上向下移动，明暗不一。暂停按钮可以把各列停在当时的位置，方便观察单帧。',
      '连续拍几个下落周期，便于从画面变化较少的地方剪接。',
      '科技视频片头',
      [['现场表演背景', '在舞台后方的显示器上播放字符雨，把观众需要阅读的标题留到独立的投影层。']],
      [['设备开启了减少动态效果，怎样播放？', '画面可能会先显示静止字符。用预览下方的恢复按钮可以启动动画。']]
    ),
    'white-noise': detail(
      '雪花画面和声音是两个独立部分。黑白纹理一直可见，点播放后，浏览器才生成可调音量的白噪声。',
      '全屏时会沿用设好的音量。要调音量或暂停声音时，退出全屏返回控制区。',
      '电视主题短片',
      [['给录音做音量预演', '先把网页音量拉低，再和准备录制的对白试听，确定录制时是只用雪花画面，还是同时收录背景声。']],
      [['暂停白噪声后，雪花图案还会在吗？', '会。暂停只作用于声音，静态雪花图案可以继续显示和全屏。']]
    )
  }
};

const japanese = {
  relatedHeading: '関連する画面とツール',
  fullscreenFaq: ['全画面表示でもブラウザーのバーが見えるのはなぜですか？', '端末とブラウザーが対応していれば、画面全体に表示されます。全画面が許可されない場合は、ブラウザー内で見えている領域いっぱいに表示します。画面をクリック・タップするか、Esc キーを押すと戻れます。'],
  scenes: {
    error: detail(
      '濃い青の背景に警告マークと中断を知らせる文章を配置した、昔のパソコンを思わせる画面です。文章と模様はそのまま表示され続けます。',
      '全画面にしたら、警告マークとその下の文章が両方とも撮影範囲に入る位置にカメラを合わせます。',
      'パソコンのトラブル解説動画',
      [['障害対応の授業', '最初にこの画面を見せ、受講者が何を手がかりにするかを話し合ってから、実際のエラー情報を記録する手順に進みます。']],
      [['中断のメッセージは時間がたつと消えますか？', '画面を閉じるか別の画面に移るまで、同じメッセージが表示されます。']]
    ),
    cracked: detail(
      '暗い背景の明るい点から、向きや長さの異なるひびが伸びる静止画面です。プレビューと全画面で同じひびの配置を使います。',
      '別の角度でも撮影するときは、モニターの向きを保ち、ひびの中心を目印に構図を合わせます。',
      '割れた画面のアップ撮影',
      [['短編映像のリハーサル', '出演者がどこを見るかをこの画面で確かめます。ひびの中心を映すか、画面の端に届く線まで入れるかも試せます。']],
      [['手持ちの写真にひびを重ねられますか？', 'このページは背景ごとひびを表示します。手持ちの写真と合成する場合は、画像編集ツールなどで別に素材を加工します。']]
    ),
    radar: detail(
      '円形の目盛りに固定された輝点があり、扇形の光がその上を回ります。操作欄で止めたり、再開したりできます。',
      '光が目印の点を通過するタイミングに合わせて、ナレーションやカットを入れます。',
      '船上や航空管制の映像',
      [['展示ブースの管制画面', 'サブモニターに回転する光を表示して装置の稼働を表現し、メインモニターには案内や実演を表示します。']],
      [['一時停止してから全画面にしても、同じ角度になりますか？', '一時停止の状態は引き継がれます。光の表示はプレビューと全画面で別々に描画するため、角度が異なる場合があります。']]
    ),
    terminal: detail(
      '緑の等幅文字を左右の枠に分け、短い数字や記号を配置した端末風の画面です。文字の並びは固定されています。',
      '全画面表示のあと、左右の枠まで収まるようにカメラの位置を決めます。',
      'サーバー紹介動画の背景',
      [['操作画面の構成を説明する', '文字を二つの区画に分けた例として見せてから、授業で実際に使うコマンド入力画面に切り替えます。']],
      [['文字は時間がたつと流れますか？', '左右の文字は同じ位置に表示され続けます。文字が下に流れる演出には、関連するデジタルレインを使えます。']]
    ),
    call: detail(
      '自分を含む 1〜9 人を名前付きのタイルで表示します。人数を変えると列数が調整され、表示名の頭文字が各タイルに入ります。',
      '全画面にしたら、端にある参加者名も見やすいか、実際の視聴位置から確認します。',
      'オンライン会議の研修資料',
      [['配信の進行リハーサル', '司会者やゲストに仮の名前を入れて人数を調整し、参加者を紹介する場面でどの配置が見やすいかを比べます。']],
      [['人数をいったん減らすと、入力した名前は消えますか？', '同じページを開いたまま人数を戻すと、非表示になった名前も再表示されます。再読み込みすると例の名前に戻ります。']]
    ),
    'update-blue': detail(
      'Windows 10 の見出し、横長のバー、整数の進捗率を表示します。指定した時間で、開始時の数値から 100% まで進む仕組みです。',
      '進捗の連続した変化を映す場合は、全画面にしたら同じ実行のまま撮り続けます。',
      'メンテナンス動画の進捗画面',
      [['進捗の前後を撮り分ける', '開始値を 20% と 80% にして別々に撮ると、更新の序盤と終盤を表現できます。値を変えるたびに「設定を適用して再生」を選びます。']],
      [['全画面を開くと進捗が初期値に戻りますか？', '全画面とプレビューは同じ進捗を表示します。最初の数値に戻すときは操作欄から再スタートします。']]
    ),
    'update-retro': detail(
      '青い背景に Windows XP の名前と進捗バーが並ぶ、昔の更新作業をイメージした画面です。設定した開始値から完了までを表示します。',
      '全画面にしたら、端末の向きに合わせて進捗の数字とバーが収まるようにします。',
      'レトロなパソコン映像の更新シーン',
      [['古いパソコンの展示', '更新作業を説明する展示で、低い進捗からゆっくり流すと、操作にかかっていた時間の感覚を伝える素材になります。']],
      [['最初から完了した状態を映せますか？', '開始時の進捗を 100% にして再スタートすると、最初からバーがいっぱいに表示されます。']]
    ),
    'update-silver': detail(
      '暗い背景の中央に Mac OS X の見出しと明るい進捗バーを表示します。時間を調整して、説明に合わせて進捗を動かせます。',
      '全画面にしたら、説明を聞く席から数字とバーを見分けられるか確認します。',
      '旧版の Mac を紹介する動画',
      [['プレゼンの話題を切り替える', 'Mac の歴史を紹介するとき、終盤から進捗を流し、バーが埋まるタイミングで次の章へ進めます。']],
      [['時間は常に 0% から数えますか？', '設定した開始値から 100% までにかかる時間です。例えば 50% から 2 分と設定すれば、残りが約 2 分で進みます。']]
    ),
    'update-violet': detail(
      '紫色の背景に Ubuntu 22.04 の名前と進捗の数字が見えます。数字と横長のバーが同時に動くので、完了までの変化を追えます。',
      '開始と完了を比べる場合は、全画面を開いた時点の数字と 100% の両方を映します。',
      'Linux 入門講座の進捗例',
      [['静止した状態に注釈を付ける', '説明したい数値を開始値にして、実行後に早めに一時停止します。同じ画面を使って語句や各部の説明を添えられます。']],
      [['毎回 1 分だけ進捗を流せますか？', '所要時間は 1〜240 分の範囲で指定できます。1 分を入力してから再スタートすると適用されます。']]
    ),
    'update-gray': detail(
      '濃い青緑の背景に ChromeOS と進捗が表示されます。設定欄はプレビューの外にあり、全画面にすると更新の画面だけを見せられます。',
      '投影したときは、部屋の後ろからパーセント表示が読めるかを見てから本番を始めます。',
      'Chromebook の操作教材',
      [['会場でのメンテナンス実演', '観客用のモニターで同じ長さの進捗を何度か流しながら、待ち時間の間に伝えたい操作を説明します。']],
      [['時間の欄を変えても進み方が変わらないのはなぜですか？', '入力後に再スタートすると、新しい時間と開始時のパーセントが使われます。']]
    ),
    'boot-xp': detail(
      'Windows XP の文字とマークの下で、読み込み表示が繰り返し動きます。同じ起動段階を長く映したいときに使える画面です。',
      '起動シーンでは、読み込み表示が数回動くところまで撮ってから次の画面につなぎます。',
      '昔のソフトウェアを紹介する映像',
      [['レトロパソコンの展示', '補助モニターに読み込み表示を置き、来場者に当時の起動時の待機画面を見せます。']],
      [['XP の更新画面とはどう違いますか？', '起動画面の読み込み表示は繰り返します。更新画面では、設定したパーセントから 100% まで進みます。']]
    ),
    bounce: detail(
      '暗い背景を TELA のロゴが横と縦に往復します。操作欄の一時停止でその動きを止め、再開で動かせます。',
      '何往復か続けて撮り、編集ではロゴが見やすい位置にある場面から使い始めます。',
      '配信の休憩時間の背景',
      [['展示ブースの休憩画面', 'メインモニターに予定や案内を残したまま、脇のモニターにロゴの動きを表示します。']],
      [['何もしなくてもロゴは動き始めますか？', '通常はプレビューで動きます。端末で動きを減らす設定をしている場合は、操作欄の再開ボタンで動かせます。']]
    ),
    clock: detail(
      '端末の現在時刻を、時・分・秒の三つの数字に分けて 24 時間制で表示します。一時停止でその瞬間を固定し、再開すると現在時刻に戻ります。',
      '全画面にしたら、後ろの席や離れた位置から三つの数字が読めるか確認します。',
      '会議室に置く時計',
      [
        ['教室や自習室で現在時刻を共有する', '教壇のモニターやタブレットに表示すると、演習中の人が今の時刻を確認できます。時間を逆算する場合は別にタイマーを用意します。'],
        ['撮影用に表示時刻を止める', '必要な時刻になるまでプレビューで待ち、一時停止してから全画面にします。撮影後に再開すると、端末の現在時刻が表示されます。']
      ],
      [
        ['一時停止した時間はあとから加算されますか？', '止まるのは表示だけです。再開すると止まったところから数え直さず、そのときの時刻を表示します。'],
        ['午後 8 時はどう表示されますか？', '24 時間制なので時の欄に 20 が表示されます。左から時、分、秒の順に並びます。']
      ]
    ),
    quotes: detail(
      '用意された短い文章を一つずつ表示します。「次のひとこと」で順番に進み、最後の文章の次は最初に戻ります。',
      '全画面にしたら、観客の席から見て改行が自然かを確認します。文章を変えるときは操作欄に戻ります。',
      'ワークショップの休憩表示',
      [['読書会の導入', 'テーマに合う一文を選んで、参加者が読み終わるまで表示します。そのあとで全画面を閉じ、話し合いに移れます。']],
      [['自分で考えた文章を入れられますか？', '「次のひとこと」で用意された文章から選びます。自由な文を表示する場合は、スライドなどで用意します。']]
    ),
    bars: detail(
      '縦の色帯と中央のメッセージを表示する、放送の途切れを模した静止画です。開き直しても色帯の配置は同じです。',
      '全画面で中央のメッセージが映るようにカメラを合わせ、切り替えに使う長さを試します。',
      '映像が途切れる場面の演出',
      [['信号トラブルの授業例', 'この画面を最初に見せて起きたと思うことを聞き、そのあとで実際の入力を選択する画面や接続手順を示します。']],
      [['色帯でモニターの色を調整できますか？', 'ここで表示する色帯は演出用です。色の調整には、規格に沿ったテストパターンや測色ツールを使います。']]
    ),
    rain: detail(
      '暗い背景に複数の縦列が並び、緑の文字や数字がずれたタイミングで下に動きます。一時停止すれば一画面ずつ観察できます。',
      '何周期か続けて撮影しておくと、動きのつながる位置を編集時に選べます。',
      '技術系動画のオープニング',
      [['ステージの背景映像', '舞台の背後に文字を流し、観客に読んでほしい出演者名や演目は別のスクリーンに映します。']],
      [['動きを減らす設定でも流せますか？', '最初は止まって見える場合があります。操作欄の再開ボタンを使うとアニメーションを動かせます。']]
    ),
    'white-noise': detail(
      'テレビの砂嵐風の白黒模様と、音量を調整できる音声があります。模様は常に表示され、音声は再生ボタンを押したときにブラウザーで生成されます。',
      '全画面でも設定した音量が使われます。音量を変えたり再生を止めたりするときは通常表示に戻ります。',
      '昔のテレビが登場する映像',
      [['録音前に背景音量を合わせる', '最初は音量を低くして、せりふと重ねて試します。音が要らないテイクでは停止したまま模様だけを使えます。']],
      [['音声を止めると砂嵐の模様も消えますか？', '音声の停止後も砂嵐は表示されます。その状態のまま全画面に切り替えられます。']]
    )
  }
};

const korean = {
  relatedHeading: '관련 화면과 도구',
  fullscreenFaq: ['전체 화면에서 브라우저 표시줄이 보이는 이유는 무엇인가요?', '브라우저가 전체 화면 표시를 허용하면 화면을 가득 채웁니다. 브라우저에서 허용하지 않을 때는 현재 보이는 영역을 채우므로 표시줄이 남을 수 있습니다. 화면을 클릭하거나 터치하거나 Esc 키를 눌러 나올 수 있습니다.'],
  scenes: {
    error: detail(
      '짙은 파란 바탕에 경고 기호와 중단 안내가 표시되는 레트로 화면입니다. 문구와 장식은 같은 위치에 계속 표시됩니다.',
      '전체 화면을 열고 경고 기호와 안내 문구가 모두 촬영 범위에 들어오는지 확인하세요.',
      '컴퓨터 장애 설명 영상',
      [['장애 대응 수업', '이 화면을 먼저 띄우고 어떤 증상이 보이는지 이야기한 뒤 실제 시스템에서 오류 정보를 기록하는 방법을 보여 줄 수 있습니다.']],
      [['중단 안내가 시간이 지나면 사라지나요?', '화면을 닫거나 다른 장면을 열 때까지 같은 안내가 표시됩니다.']]
    ),
    cracked: detail(
      '어두운 화면의 밝은 지점에서 길이와 방향이 다른 금이 뻗어 나갑니다. 미리보기와 전체 화면에서 같은 무늬가 유지됩니다.',
      '여러 각도로 촬영한다면 모니터 방향을 유지하고 금의 중심을 기준으로 구도를 맞추세요.',
      '파손된 화면 클로즈업',
      [['단편 영상 촬영 전 리허설', '배우의 시선이 금의 중심을 향하는지 확인하고, 길게 뻗은 금을 어느 정도까지 담을지 정할 수 있습니다.']],
      [['가지고 있는 사진에 금을 덧씌울 수 있나요?', '이 도구는 어두운 바탕과 금을 함께 표시합니다. 사진을 합성하려면 별도의 이미지 편집 도구에서 처리하세요.']]
    ),
    radar: detail(
      '원형 눈금 안에 고정된 점이 있고, 부채꼴 빛이 그 위를 돌아갑니다. 움직임은 페이지 아래 컨트롤에서 멈추거나 다시 시작할 수 있습니다.',
      '녹화할 때 빛이 밝은 점을 지나는 순간에 맞춰 설명을 시작하거나 화면을 전환하세요.',
      '선박 및 항공 관제 영상',
      [['전시 부스의 관제 화면', '보조 모니터에 회전하는 빛을 전체 화면으로 띄우고, 메인 화면에는 전시 안내와 발표 내용을 남겨 둘 수 있습니다.']],
      [['일시 정지 후 전체 화면을 열면 각도가 그대로인가요?', '일시 정지 상태는 유지됩니다. 미리보기와 전체 화면이 빛을 각각 그리기 때문에 각도는 달라질 수 있습니다.']]
    ),
    terminal: detail(
      '녹색 고정폭 문자와 짧은 기호가 두 패널에 나뉘어 표시됩니다. 화면의 글자 배치와 내용은 같은 상태로 유지됩니다.',
      '전체 화면을 연 뒤 두 패널의 테두리가 모두 보이도록 카메라 위치를 잡으세요.',
      '서버 소개 영상의 배경',
      [['화면 구성 예시', '정보가 두 영역으로 나뉜 모습을 먼저 보여 준 뒤, 수업에서 실제로 명령을 입력하는 화면으로 전환할 수 있습니다.']],
      [['글자가 자동으로 스크롤되나요?', '글자는 고정된 위치에 표시됩니다. 움직이는 글자가 필요하면 관련 도구에서 디지털 비를 열어 보세요.']]
    ),
    call: detail(
      '자신을 포함한 1~9명을 이름이 달린 카드로 표시합니다. 인원에 따라 열 구성이 바뀌고, 입력한 이름의 첫 글자가 카드에 표시됩니다.',
      '전체 화면에서 모서리에 있는 참가자 이름까지 읽기 쉬운지 관객 위치에서 확인하세요.',
      '화상 회의 교육',
      [['온라인 행사 리허설', '진행자와 게스트의 예시 이름을 넣고 인원을 바꿔 보세요. 어떤 카드 배치가 참가자를 소개하기에 편한지 비교할 수 있습니다.']],
      [['인원을 줄였다가 늘리면 이름이 다시 보이나요?', '같은 페이지에서 인원을 다시 늘리면 숨겨진 카드의 이름이 돌아옵니다. 페이지를 새로고침하면 예시 이름으로 초기화됩니다.']]
    ),
    'update-blue': detail(
      'Windows 10 제목 아래에 진행 표시줄과 정수 진행률이 나옵니다. 정해 둔 시간 동안 시작값에서 100%까지 올라갑니다.',
      '진행률이 계속 변하는 모습을 담으려면 전체 화면을 연 상태로 한 번에 촬영하세요.',
      '유지보수 안내 영상',
      [['진행 전반과 후반을 따로 촬영', '시작값을 20%와 80%로 설정해 다른 장면으로 촬영하세요. 값을 바꿀 때마다 「다시 시작」을 눌러 적용합니다.']],
      [['전체 화면을 열면 진행률이 처음으로 돌아가나요?', '미리보기와 전체 화면은 동일한 진행 상태를 보여 줍니다. 처음부터 보여 주려면 설정의 「다시 시작」을 사용하세요.']]
    ),
    'update-retro': detail(
      '파란 바탕에 Windows XP 이름과 진행 표시줄이 나타나는 레트로 화면입니다. 지정한 비율에서 시작해 완료 상태까지 진행합니다.',
      '기기 방향을 정하고 진행 숫자와 표시줄이 함께 들어오도록 촬영 구도를 잡으세요.',
      '옛날 컴퓨터 소개 영상',
      [['레트로 기기 전시', '낮은 시작값에서 천천히 진행되는 예시를 전시 화면에 띄우고, 옆에 당시의 업데이트 과정을 소개할 수 있습니다.']],
      [['처음부터 업데이트가 끝난 화면을 띄울 수 있나요?', '시작 진행률을 100%로 설정하고 「다시 시작」을 누르면 표시줄이 채워진 상태로 나타납니다.']]
    ),
    'update-silver': detail(
      '어두운 화면 가운데에 Mac OS X 제목과 밝은 진행 표시줄이 나옵니다. 소요 시간을 정해 설명하는 속도에 맞춰 진행률을 변경할 수 있습니다.',
      '전체 화면을 연 뒤 실제로 설명을 듣는 자리에서 진행 숫자와 표시줄이 잘 보이는지 확인하세요.',
      '이전 버전의 Mac 사용법 영상',
      [['발표 중 다음 주제로 전환', '운영체제의 역사를 소개하다가 높은 진행률에서 시작해 보세요. 표시줄이 채워지는 순간에 다음 내용으로 넘어갈 수 있습니다.']],
      [['입력하는 시간은 0%를 기준으로 하나요?', '설정한 시작값부터 100%에 도달하기까지의 시간입니다. 시작값 50%, 소요 시간 2분으로 설정하면 남은 진행이 약 2분 동안 표시됩니다.']]
    ),
    'update-violet': detail(
      '보라색 화면에 Ubuntu 22.04 이름과 진행 숫자가 표시됩니다. 가로 막대와 수치가 함께 바뀌어 완료까지의 변화를 따라갈 수 있습니다.',
      '시작과 완료 상태를 비교하려면 전체 화면을 열었을 때의 수치와 100%에 도달한 화면을 각각 남기세요.',
      '리눅스 입문 강의',
      [['고정 화면에 설명 추가', '설명할 진행률을 시작값으로 잡고 재생 후 일찍 멈추면, 같은 장면으로 표시 항목에 대한 설명을 덧붙일 수 있습니다.']],
      [['진행 시간을 1분으로 정할 수 있나요?', '1~240분 사이로 정할 수 있습니다. 1분을 입력하고 「다시 시작」을 누르면 새 값이 적용됩니다.']]
    ),
    'update-gray': detail(
      '짙은 청록색 배경에 ChromeOS 제목과 진행률이 표시됩니다. 설정 영역은 미리보기 밖에 있어 전체 화면에서는 진행 화면만 보여 줄 수 있습니다.',
      '프로젝터로 보여 준다면 뒤쪽 자리에서 백분율이 선명하게 읽히는지 확인하세요.',
      'Chromebook 교육 자료',
      [['현장 유지보수 시연', '관객이 보는 화면에 같은 길이로 진행을 재생하면서, 기다리는 동안 어떤 작업을 하는지 순서대로 설명할 수 있습니다.']],
      [['시간을 바꿨는데 진행 속도가 그대로인 이유는 무엇인가요?', '입력한 뒤 「다시 시작」을 눌러야 새로운 시간과 시작 진행률이 사용됩니다.']]
    ),
    'boot-xp': detail(
      'Windows XP 글자와 그래픽 아래에서 로딩 표시가 움직이며 반복됩니다. 한 가지 부팅 단계에 오래 머무는 장면을 만들 때 쓸 수 있습니다.',
      '다음 장면으로 넘어가기 전에 로딩 표시가 여러 번 움직이도록 충분히 촬영하세요.',
      '옛날 프로그램 영상의 오프닝',
      [['레트로 컴퓨터 전시', '보조 화면에 로딩 표시를 띄워 관람객에게 당시 컴퓨터의 시작 화면을 소개할 수 있습니다.']],
      [['XP 업데이트 화면과 어떻게 다른가요?', '부팅 화면에서는 로딩 표시가 반복됩니다. 업데이트 화면에서는 지정한 진행률부터 100%까지 숫자가 바뀝니다.']]
    ),
    bounce: detail(
      '어두운 바탕에서 TELA 로고가 가로와 세로로 움직입니다. 아래 컨트롤의 일시 정지로 움직임을 멈추고 다시 재생할 수 있습니다.',
      '여러 번 왕복하는 모습을 촬영하면 편집할 때 로고가 잘 보이는 위치에서 시작할 수 있습니다.',
      '라이브 방송 휴식 시간 배경',
      [['전시 부스의 쉬는 시간', '주 화면에 일정이나 안내를 남긴 채 보조 화면에 움직이는 로고를 표시할 수 있습니다.']],
      [['언제 로고가 움직이기 시작하나요?', '일반적으로 미리보기에서 움직입니다. 기기의 동작 줄이기 설정이 켜져 있으면 화면 아래의 「계속」 버튼으로 재생할 수 있습니다.']]
    ),
    clock: detail(
      '기기의 현재 시간을 시·분·초 세 칸으로 나누어 24시간제로 보여 줍니다. 일시 정지하면 숫자가 고정되고, 계속 재생하면 현재 시각을 다시 표시합니다.',
      '전체 화면을 열고 방 뒤쪽에서도 시·분·초가 모두 읽히는지 확인하세요.',
      '회의실의 시계',
      [
        ['교실이나 자습실에서 현재 시각 공유', '교탁의 모니터나 태블릿에서 시계를 보여 주면 연습 중에 지금 몇 시인지 확인하기 쉽습니다. 남은 시간을 표시할 때는 별도의 타이머가 적합합니다.'],
        ['촬영에 필요한 시각 고정', '미리보기에 원하는 시각이 나오면 「일시 정지」를 누른 뒤 전체 화면을 여세요. 촬영을 마치고 「계속」을 누르면 기기의 현재 시각으로 돌아갑니다.']
      ],
      [
        ['일시 정지한 시간만큼 뒤처지나요?', '화면에 표시되는 숫자만 멈춥니다. 재생을 계속하면 멈춘 시각에서 다시 세지 않고 기기의 현재 시각을 가져옵니다.'],
        ['오후 8시는 어떻게 표시되나요?', '24시간제이므로 시간 칸에 20이 표시됩니다. 왼쪽부터 시, 분, 초 순서입니다.']
      ]
    ),
    quotes: detail(
      '준비된 짧은 글 가운데 한 문장만 화면에 표시합니다. 「다음 문장」을 누를 때마다 순서대로 바뀌고, 마지막에는 처음으로 돌아갑니다.',
      '전체 화면에서 문장이 여러 줄로 나뉠 때도 잘 읽히는지 확인하세요. 바꾸려면 컨트롤이 있는 화면으로 돌아옵니다.',
      '행사의 쉬는 시간 안내',
      [['독서 모임 시작', '주제에 어울리는 문장을 띄워 모두 읽을 때까지 기다린 뒤 화면을 닫고 이야기를 시작할 수 있습니다.']],
      [['직접 쓴 문장을 넣을 수 있나요?', '「다음 문장」으로 화면에 준비된 문장을 고릅니다. 원하는 글을 직접 표시하려면 슬라이드 등을 이용하세요.']]
    ),
    bars: detail(
      '세로 색 띠와 가운데 안내 문구로 영상 신호가 끊긴 장면을 표현합니다. 화면을 다시 열어도 띠의 배치는 같습니다.',
      '전체 화면을 열면 중앙 문구가 보이도록 카메라를 맞추고 전환에 필요한 길이만큼 시험 촬영하세요.',
      '영상의 신호 중단 장면',
      [['신호 문제 교육 자료', '이 장면을 먼저 보여 주고 어떤 일이 일어난 것처럼 보이는지 물은 뒤, 실제 입력을 전환하거나 연결을 확인하는 절차를 설명합니다.']],
      [['모니터 색상 보정에 이 색 띠를 사용할 수 있나요?', '여기서는 연출용 색 띠를 표시합니다. 보정에는 표준 테스트 패턴이나 색을 측정하는 도구를 사용하세요.']]
    ),
    rain: detail(
      '어두운 바탕에서 초록색 글자와 숫자 열이 서로 다른 시점에 아래로 움직입니다. 일시 정지하면 한 프레임을 자세히 볼 수 있습니다.',
      '편집할 때 자연스럽게 이어질 지점을 고를 수 있도록 글자가 떨어지는 모습을 여러 주기 촬영하세요.',
      '기술 영상의 오프닝',
      [['공연 무대의 배경', '뒤쪽 모니터로 움직이는 글자를 보여 주고 관객이 읽어야 하는 제목은 다른 화면에 배치할 수 있습니다.']],
      [['기기에서 동작 줄이기가 켜져 있어도 움직이게 할 수 있나요?', '처음에는 멈춰 보일 수 있습니다. 미리보기 아래의 「계속」 버튼을 누르면 애니메이션을 재생합니다.']]
    ),
    'white-noise': detail(
      'TV 잡음처럼 보이는 흑백 무늬와 음량을 조절할 수 있는 소리가 함께 제공됩니다. 무늬는 계속 보이며, 소리는 재생 버튼을 누를 때 브라우저에서 생성합니다.',
      '전체 화면에서도 설정한 음량이 유지됩니다. 소리를 멈추거나 음량을 조절하려면 전체 화면에서 나오면 됩니다.',
      '옛날 TV가 나오는 영상',
      [['대사 녹음 전에 배경음 확인', '낮은 음량에서 대사와 함께 들어 보세요. 장면에 배경 소리를 함께 담을지, 정지된 잡음 무늬만 보여 줄지 정할 수 있습니다.']],
      [['백색 소음을 멈추면 잡음 무늬도 사라지나요?', '소리를 멈춘 뒤에도 무늬가 그대로 보입니다. 소리 없이 전체 화면으로 열 수 있습니다.']]
    )
  }
};

const indonesian = {
  relatedHeading: 'Layar dan alat terkait',
  fullscreenFaq: ['Mengapa bilah browser masih terlihat saat layar penuh?', 'Jika layar penuh didukung, tampilan memenuhi layar perangkat. Jika browser tidak mengizinkannya, tampilan memenuhi area yang sedang terlihat dan bilah browser mungkin tetap muncul. Klik atau ketuk layar, atau tekan Esc untuk keluar.'],
  scenes: {
    error: detail(
      'Latar biru gelap memuat simbol peringatan dan pemberitahuan bahwa tampilan terhenti. Teks dan bentuknya tetap selama gambar ini terbuka.',
      'Saat layar penuh, atur kamera agar simbol dan tulisan peringatan sama-sama masuk ke bingkai.',
      'Video pembelajaran tentang gangguan komputer',
      [['Latihan menangani galat', 'Tunjukkan layar ini sebagai contoh kasus, minta peserta menyebutkan gejala yang terlihat, lalu peragakan cara mencatat informasi galat pada sistem yang digunakan untuk latihan.']],
      [['Apakah pesan menghilang setelah beberapa saat?', 'Pesannya tetap terlihat sampai Anda menutup tampilan atau membuka halaman lain.']]
    ),
    cracked: detail(
      'Garis dengan panjang dan arah berbeda memancar dari satu titik terang di atas latar gelap. Letak pola tersebut sama di pratinjau dan tampilan layar penuh.',
      'Pertahankan arah monitor saat mengambil gambar dari beberapa sudut dan gunakan pusat retakan sebagai patokan.',
      'Gambar dekat monitor yang terlihat retak',
      [['Uji pengambilan gambar film pendek', 'Gunakan pola ini untuk memeriksa arah pandangan pemeran. Tentukan apakah kamera perlu berfokus pada titik benturan atau ikut memperlihatkan garis yang memanjang ke tepi.']],
      [['Bisakah saya menumpangkan retakan pada foto sendiri?', 'Alat ini menampilkan retakan beserta latar gelapnya. Gunakan editor gambar untuk membuat lapisan retakan pada foto Anda.']]
    ),
    radar: detail(
      'Beberapa titik tetap berada di dalam lingkaran bergaris sementara berkas cahaya berputar melintasinya. Anda dapat menahan atau melanjutkan animasi lewat panel di bawah pratinjau.',
      'Saat merekam, tunggu sampai sapuan melewati salah satu titik sebelum memulai narasi atau memotong adegan.',
      'Latar adegan kapal dan kendali lalu lintas udara',
      [['Panel kendali di stan pameran', 'Tampilkan sapuan pada monitor samping untuk menggambarkan perangkat yang sedang bekerja. Sisakan layar utama untuk petunjuk atau demonstrasi.']],
      [['Setelah dijeda, apakah sudut sapuan tetap sama ketika saya membuka layar penuh?', 'Status jeda tetap berlaku. Karena pratinjau dan layar penuh menggambar animasi secara terpisah, sudut sapuannya bisa berbeda.']]
    ),
    terminal: detail(
      'Dua panel berisi karakter hijau berlebar tetap, seperti angka dan simbol pendek dari tampilan terminal. Susunan isinya tetap selama halaman dibuka.',
      'Dalam layar penuh, periksa apakah batas kedua panel masih terlihat dari posisi kamera.',
      'Latar video pengenalan server',
      [['Menjelaskan susunan antarmuka', 'Tunjukkan pembagian dua panel ketika menerangkan cara memisahkan kelompok informasi. Sesudahnya, beralih ke terminal yang dipakai peserta untuk memasukkan perintah.']],
      [['Apakah karakter akan bergulir?', 'Karakter tetap di tempatnya. Untuk latar dengan kolom karakter yang bergerak, buka Hujan digital dari alat terkait.']]
    ),
    call: detail(
      'Kisi menampilkan 1–9 kartu termasuk kartu Anda. Mengubah jumlah peserta mengatur ulang susunan kolom, dan setiap kartu memakai inisial dari nama yang diisikan.',
      'Saat layar penuh, periksa keterbacaan nama di kartu bagian tepi dari tempat penonton.',
      'Pelatihan rapat daring',
      [['Gladi bersih acara daring', 'Isi nama contoh untuk pembawa acara dan tamu, lalu bandingkan susunan kartu saat peserta ditambah. Pilih susunan yang paling mudah diikuti saat memperkenalkan mereka.']],
      [['Apakah nama hilang saat jumlah peserta dikurangi?', 'Jika jumlahnya dinaikkan lagi pada halaman yang sama, nama di kartu yang sempat tersembunyi akan muncul kembali. Memuat ulang halaman mengembalikan nama contoh.']]
    ),
    'update-blue': detail(
      'Tampilan Windows 10 memuat bilah dan persentase bulat. Durasi yang dimasukkan menentukan waktu dari persentase awal hingga 100%.',
      'Untuk memperlihatkan perubahan angka yang berurutan, rekam seluruh potongan dalam satu kali simulasi layar penuh.',
      'Panduan perawatan komputer',
      [['Merekam dua tahap pembaruan', 'Mulai pada 20% untuk gambar awal dan dari 80% untuk mendekati akhir. Setelah mengganti angka, klik “Mulai ulang” agar setiap rekaman menggunakan nilai yang diatur.']],
      [['Apakah membuka layar penuh mengulang persentase?', 'Pratinjau dan layar penuh memakai progres simulasi yang sama. Gunakan “Mulai ulang” untuk menjalankan kembali dari persentase awal.']]
    ),
    'update-retro': detail(
      'Latar biru menampilkan nama Windows XP dengan bilah progres bergaya komputer lawas. Indikator berjalan dari persentase yang ditentukan sampai status selesai.',
      'Tentukan orientasi perangkat dan sisakan ruang kamera agar angka serta bilah terlihat bersama.',
      'Adegan pembaruan komputer lawas',
      [['Pameran tentang komputer lama', 'Gunakan progres awal rendah pada monitor pameran agar penonton sempat membaca tentang pengalaman memperbarui sistem pada masa itu.']],
      [['Bagaimana cara menampilkan proses yang sudah selesai?', 'Masukkan 100% sebagai persentase awal, lalu gunakan “Mulai ulang”. Bilah akan langsung tampil penuh.']]
    ),
    'update-silver': detail(
      'Nama Mac OS X dan bilah terang diletakkan di tengah latar gelap. Kecepatan perubahan angka dapat disesuaikan dengan durasi penjelasan.',
      'Sesudah membuka layar penuh, periksa apakah angka dan bilah terbaca dari tempat orang akan mengikuti penjelasan.',
      'Video panduan Mac versi lama',
      [['Penanda perpindahan bab presentasi', 'Saat membahas sejarah Mac, jalankan dari angka yang cukup tinggi dan pindah ke topik berikutnya ketika bilah sudah penuh.']],
      [['Apakah durasi selalu dihitung dari 0%?', 'Durasi berlaku dari persentase awal pilihan Anda sampai 100%. Jika dimulai dari 50% dengan durasi dua menit, sisa progres tampil selama sekitar dua menit.']]
    ),
    'update-violet': detail(
      'Di atas latar ungu, angka di tampilan Ubuntu 22.04 bertambah seiring bilah mendatar terisi. Keduanya memperlihatkan perjalanan progres hingga selesai.',
      'Untuk membandingkan awal dan akhir, ambil gambar persentase saat layar penuh terbuka dan ambil satu lagi setelah mencapai 100%.',
      'Pengantar pembaruan Linux',
      [['Memberi anotasi pada satu tahap', 'Masukkan angka yang akan dibahas sebagai persentase awal, mulai simulasi, lalu segera jeda. Tambahkan keterangan pada gambar tersebut saat menyunting panduan.']],
      [['Bisakah durasi diatur menjadi satu menit?', 'Durasi bisa diisi antara 1 dan 240 menit. Masukkan 1 lalu pilih “Mulai ulang” untuk menerapkannya.']]
    ),
    'update-gray': detail(
      'Teks ChromeOS dan nilai progres muncul di atas latar hijau kebiruan gelap. Formulir pengaturannya terletak di luar pratinjau sehingga layar penuh hanya menampilkan gambar pembaruan.',
      'Jika memakai proyektor, lihat dari kursi belakang untuk memastikan persentasenya terbaca sebelum mulai.',
      'Materi pelatihan Chromebook',
      [['Peragaan perawatan di depan peserta', 'Putar contoh dengan durasi yang sama pada monitor penonton sambil menjelaskan urutan pekerjaan yang dilakukan ketika menunggu.']],
      [['Mengapa kecepatan tetap sama setelah durasi diganti?', 'Pilih “Mulai ulang” sesudah mengubah kolom. Langkah itu menerapkan durasi baru dan angka awal yang dipilih.']]
    ),
    'boot-xp': detail(
      'Di bawah nama Windows XP dan lambangnya, indikator biru bergerak berulang. Tampilan ini memungkinkan Anda bertahan pada satu tahap penyalaan untuk keperluan gambar.',
      'Rekam beberapa gerakan indikator dalam layar penuh, lalu pilih titik yang sesuai untuk beralih ke gambar berikutnya.',
      'Pembuka video perangkat lunak lawas',
      [['Pameran komputer retro', 'Letakkan animasi pada monitor pendamping untuk memperlihatkan tampilan menunggu yang ditemui pengguna ketika menyalakan komputer.']],
      [['Apa bedanya dengan simulasi pembaruan XP?', 'Indikator penyalaan bergerak dalam putaran berulang. Simulasi pembaruan memiliki angka awal yang bisa diatur dan naik sampai 100%.']]
    ),
    bounce: detail(
      'Logo TELA bergerak secara mendatar dan tegak di latar gelap. Gunakan kontrol di bawah pratinjau untuk menjeda gerakan atau menjalankannya lagi.',
      'Ambil gambar selama beberapa kali pantulan agar Anda bisa memilih posisi awal logo saat menyunting.',
      'Latar saat jeda siaran',
      [['Layar istirahat di stan pameran', 'Tampilkan gerakan pada monitor samping sambil membiarkan jadwal dan petunjuk acara tetap terlihat di layar utama.']],
      [['Mengapa logo langsung diam saat halaman dibuka?', 'Jika perangkat memilih pengurangan gerak, pratinjau bisa dimulai dalam keadaan jeda. Gunakan “Lanjutkan” untuk memutar animasinya.']]
    ),
    clock: detail(
      'Jam ini menampilkan waktu perangkat dalam tiga panel angka untuk jam, menit, dan detik, dengan format 24 jam. “Jeda” menahan angka yang terlihat, lalu “Lanjutkan” menampilkan waktu saat ini.',
      'Sesudah membuka layar penuh, coba baca ketiga panel dari kursi paling belakang agar tahu apakah penempatan layar sudah pas.',
      'Jam yang terlihat dari seluruh ruang rapat',
      [
        ['Memantau waktu di kelas atau ruang belajar', 'Buka jam di monitor pengajar atau tablet agar semua orang dapat melihat waktu saat mengerjakan latihan. Gunakan pewaktu terpisah jika perlu mengukur waktu yang tersisa.'],
        ['Menahan angka untuk pengambilan gambar', 'Tunggu sampai waktu yang diperlukan terlihat di pratinjau, pilih “Jeda”, lalu buka layar penuh. Setelah pengambilan gambar, tekan “Lanjutkan” agar angka kembali mengikuti waktu perangkat.']
      ],
      [
        ['Apakah jam tertinggal setelah dijeda?', 'Jeda hanya menahan angka. Saat dijalankan lagi, jam mengambil waktu dari perangkat saat itu, sehingga tidak menghitung dari angka yang tadi ditahan.'],
        ['Bagaimana jam delapan malam muncul di layar?', 'Dalam format 24 jam, panel jam menampilkan 20. Panel berikutnya adalah menit dan detik.']
      ]
    ),
    quotes: detail(
      'Tampilan memuat satu kutipan pendek dari kumpulan yang sudah disiapkan. Tombol “Kutipan berikutnya” berpindah sesuai urutan dan kembali ke kutipan awal setelah yang terakhir.',
      'Periksa pergantian baris dari posisi penonton. Kembali ke panel pengaturan jika ingin memilih kutipan yang lebih pendek.',
      'Proyeksi saat jeda kegiatan',
      [['Pembuka diskusi kelompok baca', 'Pilih kalimat yang sesuai dengan topik dan biarkan peserta membacanya terlebih dahulu. Setelah itu, tutup layar penuh untuk memulai diskusi.']],
      [['Bisakah saya mengetik kutipan sendiri?', 'Pilihan di halaman ini berasal dari kumpulan yang sudah disiapkan. Gunakan slide atau dokumen tersendiri untuk kalimat buatan Anda.']]
    ),
    bars: detail(
      'Jalur warna vertikal dan pesan di bagian tengah menggambarkan siaran yang terputus. Posisi warna dan pesan tetap sama ketika layar penuh ditutup dan dibuka lagi.',
      'Sisakan ruang di sekitar pesan tengah dan ambil rekaman uji beberapa detik sebelum memotongnya ke adegan baru.',
      'Transisi putusnya siaran dalam video',
      [['Studi kasus gangguan input video', 'Perlihatkan pola ini terlebih dahulu dan minta peserta menjelaskan apa yang tampak. Berikutnya, tunjukkan langkah untuk memilih input video yang benar pada perangkat.']],
      [['Dapatkah jalur warna digunakan untuk kalibrasi monitor?', 'Jalur ini ditujukan untuk simulasi visual. Gunakan pola uji standar atau perangkat pengukur warna untuk kalibrasi.']]
    ),
    rain: detail(
      'Karakter hijau bergerak ke bawah dalam beberapa kolom di atas latar gelap. Waktu gerak antarkolom berbeda, sehingga tampilan berubah sekalipun isi karakter tetap.',
      'Rekam beberapa siklus gerakan untuk mendapatkan lebih banyak pilihan saat menyambung potongan gambar.',
      'Pembuka video teknologi',
      [['Latar pertunjukan', 'Tampilkan hujan karakter di monitor belakang panggung. Letakkan judul atau informasi yang perlu dibaca penonton pada layar tersendiri.']],
      [['Dapatkah hujan digital bergerak jika pengurangan gerak diaktifkan?', 'Pratinjau dapat berawal dalam keadaan diam. Klik “Lanjutkan” di bawah pratinjau untuk memulai animasi.']]
    ),
    'white-noise': detail(
      'Bintik hitam putih tetap terlihat di layar, sementara audio merupakan bagian yang dapat diputar terpisah. Audio dibuat oleh browser dan volume bisa diatur lewat panel.',
      'Volume yang sudah dipilih tetap berlaku saat layar penuh. Untuk mengubah volume atau menjeda bunyi, kembali ke panel pengaturan.',
      'Latar televisi lawas untuk video',
      [['Menyesuaikan bunyi latar sebelum merekam', 'Mulai dengan volume rendah dan dengarkan bersama dialog. Tentukan apakah bintik perlu ditampilkan dengan bunyi atau cukup menjadi gambar latar.']],
      [['Apakah bintik menghilang ketika derau dijeda?', 'Bintik tetap terlihat setelah bunyi dijeda. Anda masih bisa membuka gambar dalam layar penuh.']]
    )
  }
};

const malay = {
  relatedHeading: 'Paparan dan alat berkaitan',
  fullscreenFaq: ['Mengapa bar pelayar masih kelihatan dalam mod skrin penuh?', 'Jika dibenarkan oleh pelayar, paparan memenuhi skrin peranti. Jika mod itu tidak dapat dibuka, paparan memenuhi kawasan yang sedang kelihatan dan bar pelayar mungkin masih ada. Klik atau ketik paparan, atau tekan Esc untuk keluar.'],
  scenes: {
    error: detail(
      'Simbol amaran dan mesej gangguan tertera pada latar biru gelap. Susunan dan teks kekal di tempat yang sama selagi paparan dibuka.',
      'Dalam mod skrin penuh, halakan kamera supaya simbol dan mesej dapat dilihat bersama.',
      'Rakaman penerangan masalah komputer',
      [['Latihan menangani ralat', 'Mulakan dengan paparan rekaan ini dan minta peserta menyatakan perkara yang mereka nampak. Kemudian, tunjukkan cara mencatat butiran ralat pada sistem latihan.']],
      [['Adakah mesej ini hilang selepas beberapa ketika?', 'Mesej kekal sehingga anda menutup paparan atau membuka halaman lain.']]
    ),
    cracked: detail(
      'Garisan dengan panjang dan arah berbeza memancar daripada satu titik terang di atas latar gelap. Corak yang sama digunakan dalam pratonton dan skrin penuh.',
      'Jika merakam dari beberapa sudut, kekalkan arah monitor dan gunakan pusat rekahan sebagai panduan susunan gambar.',
      'Syot dekat paparan yang kelihatan retak',
      [['Raptai filem pendek', 'Gunakan corak ini untuk menyemak arah pandangan pelakon. Pilih sama ada hendak memfokuskan titik hentaman atau turut merakam rekahan yang memanjang ke tepi.']],
      [['Bolehkah saya menindihkan rekahan pada foto sendiri?', 'Alat ini memaparkan rekahan bersama latar gelap. Gunakan penyunting imej jika anda mahu meletakkan kesan rekahan pada foto sendiri.']]
    ),
    radar: detail(
      'Titik kekal berada dalam bulatan bergaris manakala sapuan cahaya berputar melaluinya. Gunakan kawalan di bawah pratonton untuk menahan putaran atau menyambungnya.',
      'Semasa merakam, tunggu sehingga sapuan melalui salah satu titik sebelum memasukkan suara latar atau beralih ke adegan lain.',
      'Rakaman kapal dan kawalan trafik udara',
      [['Panel kawalan di reruai pameran', 'Letakkan sapuan pada monitor sampingan untuk menggambarkan peralatan yang sedang beroperasi. Gunakan skrin utama untuk arahan atau demonstrasi.']],
      [['Adakah sudut sapuan kekal sama apabila saya membuka skrin penuh selepas menjedanya?', 'Keadaan jeda diteruskan. Pratonton dan skrin penuh melukis animasi secara berasingan, jadi sudutnya mungkin berbeza.']]
    ),
    terminal: detail(
      'Dua panel memaparkan aksara hijau dengan lebar yang sama, termasuk nombor pendek dan simbol. Kedudukan teks kekal sepanjang paparan dibuka.',
      'Dalam mod skrin penuh, semak sama ada bingkai kedua-dua panel masih kelihatan dari sudut kamera.',
      'Latar rakaman pengenalan pelayan',
      [['Menerangkan susun atur antara muka', 'Gunakan dua panel ini sebagai contoh cara mengasingkan maklumat, kemudian beralih ke terminal yang membolehkan peserta memasukkan arahan.']],
      [['Adakah aksara akan bergerak ke bawah?', 'Aksara kekal di tempatnya. Pilih Hujan digital dalam alat berkaitan jika anda memerlukan lajur aksara yang bergerak.']]
    ),
    call: detail(
      'Paparan menggunakan kad nama untuk 1–9 orang, termasuk anda. Bilangan peserta menentukan susunan lajur dan setiap kad memaparkan huruf awal nama yang dimasukkan.',
      'Selepas membuka skrin penuh, duduk di tempat penonton untuk menyemak sama ada nama pada kad di bahagian tepi masih dapat dibaca.',
      'Latihan mesyuarat dalam talian',
      [['Raptai acara maya', 'Isi nama contoh untuk pengacara dan tetamu, kemudian bandingkan susunan kad dengan bilangan peserta yang berlainan sebelum merakam pengenalan.']],
      [['Apakah yang berlaku pada nama apabila bilangan peserta dikurangkan?', 'Apabila bilangan ditambah semula pada halaman yang sama, nama pada kad yang disembunyikan muncul kembali. Muat semula halaman untuk kembali ke nama contoh.']]
    ),
    'update-blue': detail(
      'Di bawah nama Windows 10 terdapat bar mendatar dan peratus yang dipaparkan sebagai nombor bulat. Tempoh yang dipilih digunakan dari peratus permulaan hingga 100%.',
      'Rakam perubahan peratus secara berterusan dalam satu sesi skrin penuh untuk menunjukkan peningkatan langkah demi langkah.',
      'Panduan penyelenggaraan komputer',
      [['Membezakan peringkat awal dan akhir', 'Mulakan pada 20% untuk syot pertama dan 80% untuk syot berikutnya. Pilih “Mula semula” selepas menukar angka supaya tetapan baharu digunakan.']],
      [['Adakah kemajuan bermula semula apabila saya membuka skrin penuh?', 'Skrin penuh dan pratonton menggunakan kemajuan yang sama. Gunakan “Mula semula” untuk kembali ke peratus permulaan.']]
    ),
    'update-retro': detail(
      'Nama Windows XP dan bar kemajuan dipaparkan pada latar biru gaya komputer lama. Bar bergerak daripada peratus pilihan anda hingga lengkap.',
      'Tetapkan kedudukan peranti dan halakan kamera supaya peratus serta bar kemajuan masuk dalam syot yang sama.',
      'Adegan kemas kini komputer lama',
      [['Pameran komputer retro', 'Mulakan pada kemajuan yang rendah agar pengunjung sempat membaca penerangan tentang pengalaman mengemas kini komputer pada masa itu.']],
      [['Bagaimanakah saya boleh menunjukkan proses yang telah siap?', 'Tetapkan peratus permulaan pada 100% dan pilih “Mula semula”. Bar akan terus kelihatan penuh.']]
    ),
    'update-silver': detail(
      'Bar cerah dan nama Mac OS X diletakkan di tengah latar gelap. Pilih tempoh yang sepadan dengan masa yang diperuntukkan untuk penerangan.',
      'Buka skrin penuh dan semak kejelasan nombor serta bar kemajuan dari tempat para peserta akan melihatnya.',
      'Tutorial Mac versi lama',
      [['Peralihan topik pembentangan', 'Dalam pembentangan tentang sejarah Mac, mulakan pada peratus yang tinggi dan beralih ke bahagian seterusnya apabila bar terisi sepenuhnya.']],
      [['Adakah tempoh sentiasa dikira dari 0%?', 'Tempoh dikira daripada peratus permulaan hingga 100%. Jika bermula pada 50% dan tempohnya dua minit, baki kemajuan mengambil kira-kira dua minit.']]
    ),
    'update-violet': detail(
      'Paparan Ubuntu 22.04 menggunakan latar ungu. Peratus meningkat apabila bar mendatar terisi, jadi penonton boleh mengikuti perubahan sehingga selesai.',
      'Untuk membandingkan keadaan awal dan akhir, rakam sejurus selepas membuka skrin penuh, kemudian rakam sekali lagi apabila peratus mencapai 100%.',
      'Kelas pengenalan Linux',
      [['Menambah penerangan pada satu peringkat', 'Masukkan peratus yang mahu diterangkan, mulakan simulasi, kemudian jeda. Tambah label pada syot tersebut ketika menyunting bahan pembelajaran.']],
      [['Bolehkah saya menetapkan tempoh satu minit?', 'Boleh. Medan tempoh menerima 1 hingga 240 minit. Masukkan 1 dan pilih “Mula semula” untuk menggunakan tetapan itu.']]
    ),
    'update-gray': detail(
      'Nama ChromeOS dan kemajuan ditunjukkan di tengah latar hijau kebiruan gelap. Kawalan diletakkan di luar pratonton supaya skrin penuh hanya memaparkan adegan kemas kini.',
      'Jika menggunakan projektor, lihat dari barisan belakang untuk memastikan peratus boleh dibaca sebelum memulakan sesi.',
      'Bahan penerangan Chromebook',
      [['Demonstrasi penyelenggaraan', 'Mainkan kemajuan dengan tempoh yang sama pada skrin penonton sementara anda menerangkan perkara yang biasanya dilakukan ketika menunggu kemas kini.']],
      [['Mengapa kelajuan kekal sama selepas saya menukar tempoh?', 'Pilih “Mula semula” selepas mengubah medan. Tempoh dan peratus permulaan yang baharu akan digunakan.']]
    ),
    'boot-xp': detail(
      'Penunjuk pemuatan biru bergerak berulang kali di bawah nama Windows XP dan lambangnya. Anda boleh membiarkan paparan berada pada tahap permulaan sepanjang diperlukan untuk rakaman.',
      'Rakam penunjuk bergerak beberapa kali sebelum memilih tempat untuk beralih ke gambar seterusnya.',
      'Pembukaan video perisian lama',
      [['Pameran komputer lama', 'Paparkan animasi pada monitor pendamping untuk menunjukkan rupa paparan ketika pengguna menunggu komputer dihidupkan.']],
      [['Apakah perbezaannya dengan simulasi kemas kini XP?', 'Penunjuk but berulang tanpa henti. Paparan kemas kini menunjukkan peratus yang meningkat daripada nilai permulaan sehingga 100%.']]
    ),
    bounce: detail(
      'Logo TELA bergerak dalam arah melintang dan menegak di atas latar gelap. Kawalan di bawah pratonton membolehkan anda menjeda atau menyambung pergerakan.',
      'Rakam beberapa pantulan supaya anda boleh memilih kedudukan logo yang sesuai untuk memulakan syot.',
      'Latar semasa rehat siaran langsung',
      [['Paparan ketika reruai berehat', 'Letakkan logo yang bergerak pada monitor sampingan, sementara jadual dan arahan kekal pada skrin utama.']],
      [['Mengapa logo tidak bergerak apabila paparan dibuka?', 'Jika tetapan peranti mengurangkan pergerakan, pratonton mungkin bermula dalam keadaan jeda. Pilih “Sambung” untuk memulakan animasi.']]
    ),
    clock: detail(
      'Waktu peranti dipaparkan dalam tiga panel untuk jam, minit dan saat, menggunakan format 24 jam. “Jeda” menahan angka semasa, dan “Sambung” kembali menunjukkan waktu terkini.',
      'Dalam mod skrin penuh, cuba baca ketiga-tiga panel dari kerusi paling jauh supaya kedudukan monitor boleh dilaraskan sebelum sesi bermula.',
      'Jam yang mudah dilihat di bilik mesyuarat',
      [
        ['Menunjukkan waktu di bilik darjah atau ruang belajar', 'Paparkan jam pada monitor guru atau tablet supaya peserta boleh menyemak waktu semasa menjalankan latihan. Gunakan pemasa berasingan jika anda perlu menunjukkan masa yang berbaki.'],
        ['Menahan waktu tertentu untuk rakaman', 'Tunggu hingga angka yang diperlukan muncul pada pratonton, tekan “Jeda”, kemudian buka skrin penuh. Selepas rakaman, tekan “Sambung” untuk kembali ke waktu semasa peranti.']
      ],
      [
        ['Adakah jam menjadi lewat selepas dijeda?', 'Hanya angka pada paparan yang berhenti. Selepas anda menyambungnya, jam mengambil waktu semasa daripada peranti.'],
        ['Bagaimanakah pukul lapan malam dipaparkan?', 'Dalam format 24 jam, panel jam menunjukkan 20. Dua panel seterusnya menunjukkan minit dan saat.']
      ]
    ),
    quotes: detail(
      'Satu petikan ringkas daripada koleksi yang disediakan dipaparkan pada satu masa. “Petikan seterusnya” mengikut turutan dan kembali ke petikan pertama selepas yang terakhir.',
      'Semak pemisahan baris dari tempat penonton. Kembali ke kawalan jika anda mahu memilih petikan yang lebih pendek.',
      'Paparan projektor ketika rehat acara',
      [['Pembukaan perbincangan kelab buku', 'Pilih ayat yang sesuai dengan topik dan beri peserta masa membacanya. Tutup skrin penuh apabila tiba masanya untuk berbincang.']],
      [['Bolehkah saya memasukkan petikan sendiri?', 'Anda boleh memilih daripada koleksi yang sudah disediakan. Gunakan slaid atau dokumen lain untuk memaparkan ayat sendiri.']]
    ),
    bars: detail(
      'Jalur warna menegak dan mesej di tengah menggambarkan siaran yang terputus. Kedudukannya tetap walaupun skrin penuh ditutup dan dibuka semula.',
      'Pastikan mesej di tengah dapat dilihat dalam bingkai, kemudian cuba rakam beberapa saat untuk digunakan ketika menukar adegan.',
      'Peralihan video yang menunjukkan siaran terputus',
      [['Contoh masalah input video dalam kelas', 'Tunjukkan dahulu jalur ini dan minta peserta menerangkan apa yang mereka lihat. Kemudian, tunjukkan cara memilih input yang betul pada peranti.']],
      [['Bolehkah jalur warna digunakan untuk menentukur warna monitor?', 'Corak ini digunakan untuk simulasi visual. Penentukuran memerlukan corak ujian piawai atau alat pengukuran warna.']]
    ),
    rain: detail(
      'Aksara hijau jatuh dalam beberapa lajur dengan masa gerakan yang berbeza. Anda boleh menjeda paparan untuk melihat satu bingkai dengan lebih dekat.',
      'Rakam beberapa kitaran gerakan supaya anda boleh memilih bahagian yang paling sesuai untuk menyambungkan syot.',
      'Pembukaan video teknologi',
      [['Latar persembahan pentas', 'Paparkan aksara yang jatuh pada monitor di belakang pentas. Letakkan tajuk atau maklumat yang perlu dibaca penonton pada skrin lain.']],
      [['Bolehkah animasi dimainkan apabila peranti mengurangkan pergerakan?', 'Paparan mungkin bermula dalam keadaan pegun. Pilih “Sambung” di bawah pratonton untuk memainkan animasi.']]
    ),
    'white-noise': detail(
      'Corak bintik hitam putih sentiasa kelihatan, dengan audio sebagai bahagian yang boleh dimainkan secara berasingan. Bunyi dijana dalam pelayar dan kelantangan boleh dilaraskan.',
      'Kelantangan yang dipilih kekal dalam mod skrin penuh. Kembali ke kawalan untuk menjeda bunyi atau mengubah kelantangan.',
      'Latar televisyen lama untuk video',
      [['Menguji bunyi latar sebelum rakaman', 'Mulakan dengan kelantangan rendah dan dengar bersama dialog. Anda boleh memilih untuk merakam bunyi latar atau menggunakan corak bintik sahaja.']],
      [['Adakah bintik hilang apabila audio dijeda?', 'Corak bintik terus kelihatan apabila audio dijeda. Paparan boleh dibuka dalam mod skrin penuh pada bila-bila masa.']]
    )
  }
};

export default { 'zh-Hans': chinese, ja: japanese, ko: korean, id: indonesian, ms: malay };
