export default {
  de: {
    start: 'Klicke oder tippe auf die Vorschau oder auf „Vollbild“.',
    exit: 'Klicke oder tippe zum Verlassen auf die Szene oder das Symbol zum Schließen. Mit der Tastatur geht es auch über Esc.',
    uses: 'Einsatzmöglichkeiten',
    updateControls: ['Dauer', 'Minuten', 'Startwert in Prozent', 'Neu starten'],
    callControls: ['Dein Name', 'Teilnehmende', 'Name der teilnehmenden Person', 'Die Namen bleiben im Browser. Kamera und Mikrofon werden nicht verwendet.'],
    bootLabel: 'Windows-XP-Start',
    noiseLabel: 'Weißes Rauschen',
    noiseControls: ['Ton abspielen', 'Ton pausieren', 'Lautstärke', 'Der Browser konnte den Ton nicht abspielen.'],
    scenes: {
      error: [
        'Windows-Bluescreen im Retro-Stil simulieren',
        'Zeige einen simulierten Windows-Bluescreen mit Warnsymbol und Fehlermeldung im Browser. Für Videos, Demos und Präsentationen.',
        'Öffne die Anzeige vor der Aufnahme, damit Warnsymbol und Meldung vollständig im Bild liegen.',
        'Setze die Anzeige als Requisite ein, wenn in einer Szene eine Anwendung scheinbar abstürzt.',
        'Wo finde ich einen einfarbig blauen Bildschirm?',
        'Wähle „Blau“ unter der Vorschau, um eine durchgehend blaue Fläche für einen Bildschirmtest zu öffnen.'
      ],
      cracked: [
        'Kaputter Bildschirm mit Rissen als Simulation',
        'Zeige ein gesprungenes Display mit strahlenförmigen Rissen direkt im Browser. Öffne die Vorschau für einen bildfüllenden Effekt.',
        'Richte die Kamera auf die Mitte des Displays, wenn der Ausgangspunkt der Risse im Bild sichtbar sein soll.',
        'Verwende das Rissmuster als Requisite in einem Video über ein heruntergefallenes Gerät.',
        'Wie unterscheide ich das Rissmuster von einem echten Riss?',
        'Verlasse das Vollbild und öffne eine andere Seite. Das simulierte Muster verschwindet mit der Szene.'
      ],
      radar: [
        'Radar-Simulation mit rotierendem Suchstrahl',
        'Öffne eine grüne Radaransicht mit rotierendem Suchstrahl und festen Markierungen für eine Demo oder eine Aufnahme.',
        'Halte die Animation mit „Pausieren“ an, wenn du die aktuelle Position des Suchstrahls zeigen möchtest.',
        'Nutze die Anzeige auf einem zweiten Bildschirm als Hintergrund einer fiktiven Leitstelle.',
        'Zeigt das Radar echte Messdaten?',
        'Suchstrahl und Markierungen werden im Browser gezeichnet. Die Anzeige empfängt keine Radarsignale.'
      ],
      terminal: [
        'Fiktives Terminal mit grüner Textanzeige',
        'Öffne ein fiktives Terminal mit zwei Feldern aus grünen Zeichen auf dunklem Hintergrund. Die Anzeige eignet sich als Bildschirmrequisite.',
        'Zeige die Szene im Vollbild, damit beide Textfelder ohne Browserleiste zu sehen sind.',
        'Verwende die Anzeige auf einem Monitor im Hintergrund eines Technikvideos.',
        'Kann ich Befehle eingeben?',
        'Die Terminalansicht zeigt fest vorgegebene Zeichen. Es gibt kein Eingabefeld für Befehle.'
      ],
      call: [
        'Videoanruf mit Teilnehmerkacheln simulieren',
        'Zeige eine fiktive Videokonferenz mit bis zu neun Kacheln. Trage die Namen ein und verfolge die Änderungen direkt in der Vorschau.',
        'Gib deinen Namen ein, wähle eine bis neun Kacheln für alle Personen einschließlich dir und bearbeite die übrigen Namen vor dem Öffnen des Vollbilds.',
        'Stelle mit der Kachelansicht den Einstieg in eine Videokonferenz für ein Schulungsvideo nach.',
        'Braucht die Szene Zugriff auf Kamera oder Mikrofon?',
        'Die Namen bleiben im Browser. Die Simulation greift weder auf Kamera noch Mikrofon zu und überträgt keine Anrufdaten.'
      ],
      'update-blue': [
        'Windows-10-Update im Browser simulieren',
        'Zeige ein simuliertes Windows-10-Update mit Fortschrittsbalken, Prozentanzeige und einstellbarer Dauer im Vollbild.',
        'Gib die Dauer in Minuten und den Startwert in Prozent ein. Übernimm beides mit „Neu starten“.',
        'Starte für eine Schulung knapp vor Ende der Anzeige, um den letzten Abschnitt ohne lange Wartezeit zu zeigen.',
        'Kann ich den Fortschritt kurz anhalten?',
        'Wähle „Pausieren“. Mit „Fortsetzen“ läuft die Anzeige ab demselben Prozentwert weiter.'
      ],
      'update-retro': [
        'Windows-XP-Update im Retro-Stil simulieren',
        'Zeige eine Windows-XP-Update-Simulation mit blauem Hintergrund und Prozentanzeige. Dauer und Startwert sind einstellbar.',
        'Wähle für den gewünschten Ausschnitt eine Dauer in Minuten und einen Startwert. Klicke dann auf „Neu starten“.',
        'Verwende die Update-Ansicht als Übergang zwischen zwei Szenen in einem Video über ältere Computer.',
        'Wird Windows XP dabei installiert?',
        'Das Update läuft als grafische Simulation im Browser und installiert keine Software.'
      ],
      'update-silver': [
        'Mac-OS-X-Update im Browser simulieren',
        'Öffne eine Mac-OS-X-Update-Simulation mit Fortschrittsbalken auf dunklem Hintergrund. Stelle Dauer und Startwert ein.',
        'Lege die Dauer in Minuten und den Startprozentsatz fest. Klicke auf „Neu starten“, bevor du das Vollbild öffnest.',
        'Setze die Update-Ansicht als Requisite in einem Video über einen älteren Mac ein.',
        'Kann ich die Anzeige auf einem Windows-PC öffnen?',
        'Ja. Die Simulation läuft im Browser und benötigt keine Installation von Mac OS X.'
      ],
      'update-violet': [
        'Update für Ubuntu 22.04 simulieren',
        'Zeige eine grafische Update-Simulation für Ubuntu 22.04 mit Fortschrittsbalken und Prozentanzeige auf dunkellila Hintergrund.',
        'Stimme Dauer in Minuten und Startwert auf deine Demo ab und bestätige sie mit „Neu starten“.',
        'Zeige in einem Schulungsvideo anhand der Anzeige, wie sich ein Update-Bildschirm von einem Terminal unterscheidet.',
        'Werden dabei Pakete heruntergeladen?',
        'Der Prozentwert wird im Browser berechnet. Die Szene lädt keine Ubuntu-Pakete herunter.'
      ],
      'update-gray': [
        'ChromeOS-Update im Vollbild simulieren',
        'Zeige einen simulierten Update-Fortschritt für ChromeOS im Browser. Die Dauer und der Ausgangswert sind frei einstellbar.',
        'Wähle die Dauer in Minuten und den Startwert in Prozent. Starte die Anzeige mit „Neu starten“.',
        'Nutze die kompakte Anzeige für eine Aufnahme, in der der Fortschritt aus kurzer Entfernung lesbar sein soll.',
        'Kann der Balken für eine zweite Aufnahme zurückgesetzt werden?',
        'Ja. Mit „Neu starten“ beginnt die Anzeige erneut beim eingestellten Startwert.'
      ],
      'boot-xp': [
        'Windows-XP-Startbildschirm simulieren',
        'Öffne einen Retro-Startbildschirm für Windows XP mit dunklem Hintergrund und wiederholter Ladeanimation.',
        'Halte die Ladeanimation mit „Pausieren“ an oder lasse sie im Vollbild weiterlaufen.',
        'Zeige die Startszene als Auftakt für eine Präsentation über Rechner der frühen 2000er-Jahre.',
        'Was passiert, wenn die Ladeanimation zu Ende ist?',
        'Die Animation beginnt wieder von vorn und bleibt in der Browseransicht.'
      ],
      bounce: [
        'Springendes Logo als Online-Bildschirmschoner',
        'Lass das TELA-Logo über eine dunkle Fläche wandern und an den Rändern abprallen. Die Animation läuft im Browser.',
        'Lass das Logo im Vollbild laufen oder friere seine aktuelle Position mit „Pausieren“ ein.',
        'Zeige das springende Logo auf dem Präsentationsmonitor, während du die nächste Folie vorbereitest.',
        'Kann ich ein eigenes Logo hochladen?',
        'Diese Szene verwendet das feste TELA-Logo und hat kein Upload-Feld.'
      ],
      clock: [
        'Klappuhr im Vollbild mit Sekunden',
        'Zeige die aktuelle Ortszeit als digitale Klappuhr mit Stunden, Minuten und Sekunden. Die Uhr verwendet die Zeit deines Geräts.',
        'Öffne die Uhr im Vollbild. Mit „Pausieren“ kannst du die angezeigte Uhrzeit für eine Aufnahme einfrieren.',
        'Verwende die Uhr auf einem Zweitmonitor, wenn alle im Raum die aktuelle Zeit sehen sollen.',
        'Kann ich eine andere Zeitzone wählen?',
        'Die Uhr übernimmt die eingestellte Zeitzone des Geräts. In der Szene gibt es keine separate Auswahl.'
      ],
      quotes: [
        'Kurze Sprüche im Vollbild anzeigen',
        'Zeige während einer Pause einen kurzen Spruch auf ruhigem Hintergrund. Wechsle mit einem Klick zum nächsten Text.',
        'Wähle „Nächster Spruch“, bis der gewünschte Text erscheint, und öffne dann das Vollbild.',
        'Zeige zwischen zwei Präsentationsteilen einen kurzen Gedanken zum Einstieg.',
        'Wechseln die Sprüche automatisch?',
        'Der ausgewählte Spruch bleibt sichtbar, bis du wieder auf „Nächster Spruch“ klickst.'
      ],
      bars: [
        '„Kein Signal“ mit Farbbalken simulieren',
        'Zeige farbige Testbalken mit dem Hinweis „Kein Signal“ direkt im Browser. Die Vorschau kann das ganze Display ausfüllen.',
        'Öffne die Vorschau, bevor du den Monitor filmst, damit die Meldung in der Bildmitte steht.',
        'Setze die Farbbalken als sichtbares Zeichen für eine geplante Unterbrechung in einem Video ein.',
        'Muss ich dafür das Monitorkabel abziehen?',
        'Die Farbbalken sind eine Anzeige im Browser. Die Kabel bleiben angeschlossen.'
      ],
      rain: [
        'Digitaler Regen mit animierten Zeichen',
        'Zeige grüne Zeichenkolonnen, die über einen dunklen Bildschirm laufen. Der digitale Regen lässt sich anhalten und fortsetzen.',
        'Lass die Zeichen im Vollbild laufen oder halte sie in der Vorschau mit „Pausieren“ an.',
        'Verwende den laufenden Zeichentext als Hintergrund auf einem Monitor im Video.',
        'Warum bewegen sich die Zeichen beim Öffnen nicht?',
        'Wenn auf deinem Gerät reduzierte Bewegung eingestellt ist, startet die Szene pausiert. Mit „Fortsetzen“ startest du die Animation.'
      ],
      'white-noise': [
        'Weißes Rauschen mit TV-Schneebild im Vollbild',
        'Zeige ein schwarz-weißes TV-Schneebild im Browser. Auf Wunsch kannst du weißes Rauschen abspielen und die Lautstärke einstellen.',
        'Wähle „Ton abspielen“, wenn du das Schneebild hören möchtest. Stelle die Lautstärke ein, bevor du das Vollbild öffnest.',
        'Zeige das Schneebild als visuellen Übergang in einem Video über analoge Fernseher.',
        'Spielt die Seite Ton automatisch ab?',
        'Der Ton startet erst mit „Ton abspielen“ und wird im Browser erzeugt. Mit „Ton pausieren“ schaltest du ihn wieder aus.'
      ]
    }
  },
  fr: {
    start: 'Cliquez ou appuyez sur l’aperçu ou sur « Plein écran ».',
    exit: 'Pour quitter, cliquez ou appuyez sur la scène ou sur l’icône de sortie. Au clavier, utilisez Échap.',
    uses: 'Idées d’utilisation',
    updateControls: ['Durée', 'minutes', 'Pourcentage de départ', 'Redémarrer'],
    callControls: ['Votre nom', 'Nombre de participants', 'Nom du participant', 'Les noms restent dans le navigateur. La caméra et le micro ne sont pas utilisés.'],
    bootLabel: 'Démarrage de Windows XP',
    noiseLabel: 'Bruit blanc',
    noiseControls: ['Écouter le bruit blanc', 'Mettre le son en pause', 'Volume', 'Le navigateur n’a pas pu lire le son.'],
    scenes: {
      error: [
        'Simuler un écran bleu Windows rétro',
        'Affichez un écran bleu Windows simulé avec un pictogramme d’alerte et un message d’erreur, dans le navigateur ou en plein écran.',
        'Ouvrez la scène avant de filmer et cadrez l’alerte et le texte ensemble.',
        'Utilisez la scène pour représenter une panne fictive dans une démonstration ou un court métrage.',
        'Où trouver un écran bleu uni pour tester mon moniteur ?',
        'Choisissez le bleu parmi les couleurs sous l’aperçu pour afficher une surface bleue uniforme.'
      ],
      cracked: [
        'Écran fissuré en ligne avec effet de verre cassé',
        'Affichez un effet de fissures en étoile sur fond sombre. La simulation de verre cassé se lance dans le navigateur et passe en plein écran.',
        'Cadrez le centre de l’écran si vous souhaitez montrer le point d’où partent les fissures.',
        'Servez-vous de cet effet pour représenter un téléphone tombé dans une vidéo.',
        'Comment vérifier que les fissures font partie de la scène ?',
        'Quittez le plein écran et ouvrez une autre page. Le motif simulé disparaît avec la scène.'
      ],
      radar: [
        'Simulation de radar avec balayage animé',
        'Affichez un radar vert avec balayage rotatif et repères fixes. Ouvrez la scène en plein écran pour une démo ou un tournage.',
        'Cliquez sur « Mettre en pause » pour immobiliser le balayage à l’angle de votre choix.',
        'Placez ce radar sur un écran secondaire pour créer un décor de salle de contrôle fictive.',
        'Le radar capte-t-il de vrais signaux ?',
        'Le balayage et les repères sont dessinés dans le navigateur. La scène ne reçoit aucun signal radar.'
      ],
      terminal: [
        'Terminal fictif à afficher en plein écran',
        'Ouvrez un terminal fictif composé de deux panneaux de caractères verts sur fond sombre, à afficher dans une vidéo ou une présentation.',
        'Passez en plein écran pour afficher les deux panneaux sans la barre du navigateur.',
        'Affichez le terminal sur un moniteur à l’arrière-plan d’une vidéo technique.',
        'Peut-on saisir des commandes dans le terminal ?',
        'Les caractères de la scène sont prédéfinis. L’affichage ne comporte pas de zone de saisie.'
      ],
      call: [
        'Simuler un appel vidéo avec une grille de participants',
        'Créez un appel vidéo fictif avec jusqu’à neuf vignettes. Personnalisez les noms et voyez les changements en direct dans l’aperçu.',
        'Entrez votre nom, choisissez entre un et neuf participants en vous comptant, puis modifiez les autres noms avant de passer en plein écran.',
        'Utilisez cette grille pour illustrer le début d’une visioconférence dans un support de formation.',
        'La scène utilise-t-elle la caméra ou le microphone ?',
        'Les noms restent dans le navigateur. La simulation n’active ni caméra ni micro et ne transmet aucune donnée d’appel.'
      ],
      'update-blue': [
        'Simuler une mise à jour de Windows 10',
        'Affichez une mise à jour fictive de Windows 10 avec une barre de progression, un pourcentage et une durée réglable.',
        'Indiquez la durée en minutes et le pourcentage de départ, puis cliquez sur « Redémarrer » pour appliquer les réglages.',
        'Commencez près de la fin pour montrer la dernière phase de la progression sans attente prolongée.',
        'Comment suspendre la progression ?',
        'Cliquez sur « Mettre en pause », puis sur « Reprendre » pour repartir du même pourcentage.'
      ],
      'update-retro': [
        'Simuler une mise à jour de Windows XP',
        'Retrouvez une mise à jour de Windows XP simulée sur fond bleu, avec une barre et un pourcentage de progression réglable.',
        'Choisissez une durée en minutes et un pourcentage de départ, puis cliquez sur « Redémarrer ».',
        'Utilisez cette scène comme transition dans une vidéo consacrée aux ordinateurs du début des années 2000.',
        'L’outil installe-t-il Windows XP ?',
        'La progression est une animation dans le navigateur. Elle n’installe aucun logiciel.'
      ],
      'update-silver': [
        'Simuler une mise à jour de Mac OS X',
        'Affichez une mise à jour fictive de Mac OS X sur fond sombre avec une barre de progression et une durée ajustable.',
        'Renseignez les minutes et le pourcentage de départ, puis cliquez sur « Redémarrer » avant de passer en plein écran.',
        'Placez cet affichage sur un moniteur lors d’un tournage consacré aux anciens Mac.',
        'Peut-on afficher cette scène depuis un PC ?',
        'Oui, elle fonctionne dans le navigateur. Mac OS X n’a pas besoin d’être installé sur l’appareil.'
      ],
      'update-violet': [
        'Simuler une mise à jour d’Ubuntu 22.04',
        'Affichez une mise à jour simulée d’Ubuntu 22.04 avec son fond violet foncé, son indicateur de progression et une durée réglable.',
        'Adaptez la durée en minutes et le pourcentage de départ à votre démonstration, puis cliquez sur « Redémarrer ».',
        'Montrez dans un tutoriel la différence entre une fenêtre de terminal et un écran graphique de mise à jour.',
        'Des paquets Ubuntu sont-ils téléchargés ?',
        'Le pourcentage évolue localement dans le navigateur. La scène ne télécharge aucun paquet.'
      ],
      'update-gray': [
        'Simuler une mise à jour de ChromeOS',
        'Ouvrez une mise à jour fictive de ChromeOS en plein écran. Réglez sa durée en minutes et son pourcentage initial.',
        'Renseignez la durée et le pourcentage de départ, puis cliquez sur « Redémarrer » pour lancer la séquence.',
        'Filmez une courte scène de mise à jour en commençant au pourcentage que vous souhaitez montrer.',
        'Comment refaire une prise au même pourcentage ?',
        'Le bouton « Redémarrer » relance la progression à partir de la valeur de départ saisie.'
      ],
      'boot-xp': [
        'Simuler l’écran de démarrage de Windows XP',
        'Affichez un écran de démarrage rétro pour Windows XP avec un fond sombre et une animation de chargement qui se répète.',
        'Utilisez « Mettre en pause » pour figer le chargement, ou laissez-le défiler en plein écran.',
        'Ouvrez avec cette scène une vidéo consacrée aux ordinateurs du début des années 2000.',
        'Le chargement se termine-t-il sur un bureau Windows ?',
        'L’animation recommence en boucle dans le navigateur. Aucun bureau Windows ne s’ouvre.'
      ],
      bounce: [
        'Logo rebondissant comme écran de veille en ligne',
        'Affichez le logo TELA qui se déplace sur un fond sombre et rebondit sur les bords. L’animation s’ouvre dans le navigateur.',
        'Laissez le logo bouger en plein écran ou cliquez sur « Mettre en pause » pour fixer sa position.',
        'Affichez le logo sur un écran de présentation pendant une courte interruption.',
        'Peut-on importer un autre logo ?',
        'La scène utilise le logo TELA intégré. Il n’y a pas de champ pour importer une image.'
      ],
      clock: [
        'Horloge à volets en plein écran avec secondes',
        'Affichez l’heure locale dans une horloge à volets en ligne. Les heures, minutes et secondes suivent l’heure de votre appareil.',
        'Affichez l’horloge en plein écran. Cliquez sur « Mettre en pause » pour figer l’heure pendant une capture.',
        'Laissez l’horloge sur un deuxième écran pour que l’heure soit visible depuis toute la pièce.',
        'Comment choisir un autre fuseau horaire ?',
        'L’horloge suit le fuseau de l’appareil. Changez-le dans les réglages du système si nécessaire.'
      ],
      quotes: [
        'Afficher des phrases courtes en plein écran',
        'Affichez une phrase courte sur un fond clair le temps d’une pause, puis passez à la suivante avec le bouton prévu.',
        'Cliquez sur « Phrase suivante » pour choisir le texte avant de passer en plein écran.',
        'Affichez une phrase comme point de départ d’une discussion entre deux parties d’une présentation.',
        'Les phrases défilent-elles toutes seules ?',
        'La phrase sélectionnée reste à l’écran jusqu’à ce que vous cliquiez de nouveau sur « Phrase suivante ».'
      ],
      bars: [
        'Écran « Pas de signal » avec barres de couleur',
        'Affichez des barres colorées et le message « Pas de signal » dans le navigateur. La mire est disponible en plein écran.',
        'Passez en plein écran avant de filmer pour que le message reste au centre de l’image.',
        'Servez-vous de cette mire pour marquer une interruption fictive dans un montage vidéo.',
        'Faut-il débrancher l’écran ?',
        'La mire est affichée par le navigateur. Vous pouvez laisser l’écran branché.'
      ],
      rain: [
        'Pluie numérique animée de caractères verts',
        'Affichez des colonnes de caractères verts en mouvement sur fond sombre, avec des commandes pour mettre l’animation en pause et la reprendre.',
        'Laissez les colonnes défiler en plein écran ou figez-les dans l’aperçu avec « Mettre en pause ».',
        'Utilisez la pluie numérique sur un moniteur dans le décor d’une vidéo.',
        'Pourquoi les caractères restent-ils immobiles à l’ouverture ?',
        'Si votre appareil demande de réduire les animations, la scène démarre en pause. Cliquez sur « Reprendre » pour l’animer.'
      ],
      'white-noise': [
        'Bruit blanc et neige télévisuelle en plein écran',
        'Affichez une image de neige télévisuelle en noir et blanc. Vous pouvez écouter du bruit blanc et régler son volume.',
        'Cliquez sur « Écouter le bruit blanc » si vous voulez du son, puis ajustez le volume avant de passer en plein écran.',
        'Utilisez la neige télévisuelle comme transition dans une vidéo consacrée à la télévision analogique.',
        'Le bruit blanc démarre-t-il tout seul ?',
        'Le navigateur génère le son lorsque vous cliquez sur « Écouter le bruit blanc ». Vous pouvez ensuite le mettre en pause.'
      ]
    }
  },
  it: {
    start: 'Fai clic o tocca l’anteprima oppure il pulsante «Schermo intero».',
    exit: 'Per uscire, fai clic o tocca la scena o l’icona di uscita. Con la tastiera puoi premere Esc.',
    uses: 'Idee per usare questa schermata',
    updateControls: ['Durata', 'minuti', 'Percentuale iniziale', 'Riavvia'],
    callControls: ['Il tuo nome', 'Numero di partecipanti', 'Nome del partecipante', 'I nomi restano nel browser. La scena non usa la fotocamera o il microfono.'],
    bootLabel: 'Avvio di Windows XP',
    noiseLabel: 'Rumore bianco',
    noiseControls: ['Riproduci rumore bianco', 'Metti in pausa l’audio', 'Volume', 'Il browser non è riuscito a riprodurre l’audio.'],
    scenes: {
      error: [
        'Simula una schermata blu di Windows in stile retrò',
        'Mostra una schermata blu simulata con un avviso e un messaggio di errore in stile Windows, nel browser o a schermo intero.',
        'Apri la scena prima di registrare e inquadra insieme il simbolo di avviso e il messaggio.',
        'Usa questa schermata per rappresentare un arresto anomalo immaginario in un cortometraggio.',
        'Dove trovo uno schermo blu uniforme?',
        'Seleziona il blu tra i colori sotto l’anteprima per mostrare una tinta unita durante il test del monitor.'
      ],
      cracked: [
        'Schermo rotto online con effetto vetro incrinato',
        'Mostra crepe a raggiera su uno schermo scuro. L’effetto vetro rotto si apre nel browser e si può vedere a schermo intero.',
        'Inquadra la parte centrale del display per mostrare il punto da cui si diramano le crepe.',
        'Usa l’effetto per rappresentare in un video lo schermo di un telefono appena caduto.',
        'Come riconosco una crepa simulata?',
        'Esci dallo schermo intero e apri un’altra pagina. Le crepe simulate spariscono con la scena.'
      ],
      radar: [
        'Simulazione radar con scansione animata',
        'Mostra un radar verde con scansione rotante e indicatori fissi. Apri la visualizzazione a schermo intero per una dimostrazione.',
        'Scegli «Metti in pausa» per fermare la scansione quando raggiunge l’angolo che vuoi mostrare.',
        'Usa il radar su un secondo monitor per allestire una sala di controllo immaginaria.',
        'Il radar rileva oggetti reali?',
        'La scansione e gli indicatori sono disegnati nel browser. La scena non riceve segnali radar.'
      ],
      terminal: [
        'Terminale fittizio con caratteri verdi',
        'Apri un terminale fittizio con due riquadri di caratteri verdi su fondo scuro, da usare come scenografia o sfondo video.',
        'Apri lo schermo intero per vedere entrambi i riquadri senza la barra del browser.',
        'Mostra il terminale su un monitor alle spalle della persona che presenta un video tecnico.',
        'Posso digitare comandi nel terminale?',
        'La scena mostra caratteri predefiniti e non include un campo per inserire comandi.'
      ],
      call: [
        'Simula una videochiamata con riquadri personalizzati',
        'Crea una videochiamata fittizia con un massimo di nove riquadri. Modifica i nomi e guarda il risultato in tempo reale nell’anteprima.',
        'Scrivi il tuo nome, scegli da uno a nove partecipanti includendo te e modifica gli altri nomi prima di aprire lo schermo intero.',
        'Prepara una griglia con nomi di fantasia per mostrare l’inizio di una riunione in un video formativo.',
        'La scena usa la fotocamera o il microfono?',
        'I nomi restano nel browser. La simulazione non usa la fotocamera o il microfono e non trasmette dati di chiamata.'
      ],
      'update-blue': [
        'Simula un aggiornamento di Windows 10',
        'Mostra un aggiornamento fittizio di Windows 10 con barra di avanzamento, percentuale e durata regolabile.',
        'Imposta la durata in minuti e la percentuale iniziale, poi premi «Riavvia» per applicarle.',
        'Parti da una percentuale vicina al completamento per mostrare la fine dell’aggiornamento in una breve dimostrazione.',
        'Come fermo temporaneamente l’avanzamento?',
        'Seleziona «Metti in pausa». Con «Riprendi» la barra prosegue dalla percentuale in cui si era fermata.'
      ],
      'update-retro': [
        'Simula un aggiornamento di Windows XP',
        'Mostra un aggiornamento simulato di Windows XP con indicatore di avanzamento. Puoi scegliere la durata e la percentuale iniziale.',
        'Scegli il numero di minuti e il punto di partenza, poi premi «Riavvia».',
        'Usa la schermata come passaggio tra due scene in un video sui computer dei primi anni Duemila.',
        'La simulazione installa Windows XP?',
        'L’avanzamento è un effetto grafico nel browser. Non viene installato alcun software.'
      ],
      'update-silver': [
        'Simula un aggiornamento di Mac OS X',
        'Mostra una schermata di aggiornamento di Mac OS X con sfondo scuro e indicatore di avanzamento controllato dal browser.',
        'Imposta durata in minuti e percentuale iniziale. Premi «Riavvia» prima di passare allo schermo intero.',
        'Usa la schermata su un monitor durante le riprese di un video dedicato ai vecchi Mac.',
        'Posso aprire la scena da un PC Windows?',
        'Sì. La simulazione funziona nel browser anche su dispositivi che non hanno Mac OS X.'
      ],
      'update-violet': [
        'Simula un aggiornamento di Ubuntu 22.04',
        'Mostra un aggiornamento fittizio di Ubuntu 22.04 con sfondo viola scuro, barra e percentuale impostabile.',
        'Imposta i minuti e il valore iniziale che ti servono. Poi fai clic su «Riavvia».',
        'Usa la scena in un tutorial per mostrare l’aspetto di una schermata grafica di aggiornamento.',
        'Vengono scaricati pacchetti di Ubuntu?',
        'La percentuale viene calcolata nel browser. La simulazione non scarica pacchetti.'
      ],
      'update-gray': [
        'Simula un aggiornamento di ChromeOS',
        'Mostra l’avanzamento di un aggiornamento fittizio di ChromeOS con durata in minuti e percentuale iniziale modificabili.',
        'Scegli durata e percentuale di partenza. Premi «Riavvia» per avviare la sequenza con i valori scelti.',
        'Fai partire la simulazione dal punto che vuoi riprendere per registrare una breve scena di aggiornamento.',
        'Come ripeto la ripresa alla stessa percentuale?',
        'Con «Riavvia» l’indicatore torna alla percentuale iniziale impostata.'
      ],
      'boot-xp': [
        'Simula la schermata di avvio di Windows XP',
        'Apri una schermata di avvio di Windows XP in stile retrò, con sfondo scuro e un’animazione di caricamento ripetuta.',
        'Seleziona «Metti in pausa» per fermare il caricamento oppure lascialo scorrere a schermo intero.',
        'Usa la scena come apertura di un video sui PC dei primi anni Duemila.',
        'Il caricamento apre il desktop di Windows?',
        'L’animazione si ripete nel browser. Non viene aperto alcun desktop di Windows.'
      ],
      bounce: [
        'Logo rimbalzante come salvaschermo online',
        'Mostra il logo TELA che si muove su fondo scuro e rimbalza ai bordi. L’animazione si apre direttamente nel browser.',
        'Lascia rimbalzare il logo a schermo intero oppure fermalo nella posizione attuale con «Metti in pausa».',
        'Lascia l’animazione sul monitor della sala durante l’intervallo tra due presentazioni.',
        'Posso caricare un mio logo?',
        'La scena usa il logo TELA integrato e non ha un campo per caricare immagini.'
      ],
      clock: [
        'Orologio a palette a schermo intero con secondi',
        'Mostra l’ora locale con un orologio a palette. Ore, minuti e secondi seguono l’orario del dispositivo.',
        'Apri l’orologio a schermo intero o scegli «Metti in pausa» per mantenere l’ora visualizzata durante una ripresa.',
        'Tieni l’orologio su un secondo monitor per rendere l’ora leggibile in tutta la stanza.',
        'Come seleziono un altro fuso orario?',
        'L’orologio segue il fuso del dispositivo. Per cambiarlo, usa le impostazioni di sistema.'
      ],
      quotes: [
        'Frasi brevi da mostrare a schermo intero',
        'Mostra una frase breve su sfondo chiaro durante una pausa. Puoi scegliere il testo successivo con un clic.',
        'Premi «Altra frase» per scegliere il testo prima di aprire la modalità a schermo intero.',
        'Mostra una frase come spunto per la discussione tra due parti di una presentazione.',
        'Le frasi cambiano da sole?',
        'La frase selezionata resta visibile fino a quando non premi di nuovo «Altra frase».'
      ],
      bars: [
        'Schermata «Nessun segnale» con barre colorate',
        'Mostra barre colorate e la scritta «Nessun segnale» nel browser. Puoi aprire il motivo a schermo intero.',
        'Apri lo schermo intero prima di registrare, così la scritta compare al centro dell’inquadratura.',
        'Usa le barre per rappresentare un’interruzione fittizia in un montaggio video.',
        'Devo scollegare il cavo del monitor?',
        'Le barre sono visualizzate dal browser. Puoi lasciare il monitor collegato.'
      ],
      rain: [
        'Pioggia digitale di caratteri verdi animati',
        'Mostra colonne di caratteri verdi in movimento su uno sfondo scuro, con i comandi per mettere in pausa e riprendere.',
        'Lascia scorrere i caratteri a schermo intero o scegli «Metti in pausa» per fermarli nell’anteprima.',
        'Usa i caratteri animati come sfondo su un monitor durante le riprese di un video.',
        'Perché i caratteri sono fermi quando apro la pagina?',
        'Se sul dispositivo hai scelto di ridurre il movimento, la scena parte in pausa. Premi «Riprendi» per avviare l’animazione.'
      ],
      'white-noise': [
        'Schermo con rumore bianco ed effetto neve TV',
        'Mostra l’effetto neve di una TV in bianco e nero nel browser. Puoi riprodurre il rumore bianco e regolarne il volume.',
        'Se vuoi sentire il rumore, premi «Riproduci rumore bianco» e regola il volume prima di aprire lo schermo intero.',
        'Usa l’effetto neve come transizione in un video sulla televisione analogica.',
        'L’audio parte automaticamente?',
        'Il browser genera l’audio quando premi il pulsante di riproduzione. Puoi metterlo in pausa con il relativo comando.'
      ]
    }
  },
  pl: {
    start: 'Kliknij lub dotknij podglądu albo przycisku „Pełny ekran”.',
    exit: 'Aby wyjść, kliknij lub dotknij sceny albo ikony wyjścia. Na klawiaturze możesz nacisnąć Esc.',
    uses: 'Przykładowe zastosowania',
    updateControls: ['Czas trwania', 'minuty', 'Procent początkowy', 'Uruchom ponownie'],
    callControls: ['Twoje imię', 'Liczba uczestników', 'Imię uczestnika', 'Imiona pozostają w przeglądarce. Scena nie korzysta z kamery ani mikrofonu.'],
    bootLabel: 'Start Windows XP',
    noiseLabel: 'Biały szum',
    noiseControls: ['Odtwórz biały szum', 'Wstrzymaj dźwięk', 'Głośność', 'Przeglądarka nie mogła odtworzyć dźwięku.'],
    scenes: {
      error: [
        'Symulacja niebieskiego ekranu Windows w stylu retro',
        'Wyświetl w przeglądarce niebieski ekran błędu w stylu Windows, z ikoną ostrzeżenia i komunikatem.',
        'Przed nagraniem sprawdź, czy ikona i komunikat mieszczą się w kadrze.',
        'Użyj sceny, aby pokazać fikcyjną awarię aplikacji w filmie lub demonstracji.',
        'Jak wyświetlić jednolite niebieskie tło do testu monitora?',
        'Wybierz kolor niebieski z palety pod podglądem. Otworzysz ekran z jednolitym kolorem.'
      ],
      cracked: [
        'Pęknięty ekran online z efektem rozbitej szyby',
        'Wyświetl na ciemnym tle pęknięcia rozchodzące się promieniście. Efekt rozbitej szyby działa w przeglądarce na pełnym ekranie.',
        'Skieruj kamerę na środek wyświetlacza, jeśli chcesz pokazać miejsce, z którego rozchodzą się pęknięcia.',
        'Wykorzystaj efekt jako rekwizyt w scenie z telefonem, który upadł na podłogę.',
        'Jak odróżnić efekt od prawdziwego pęknięcia?',
        'Wyjdź z trybu pełnoekranowego i otwórz inną stronę. Wzór zniknie po zamknięciu sceny.'
      ],
      radar: [
        'Symulacja radaru z animowanym przemiatającym promieniem',
        'Wyświetl zielony radar z obrotowym promieniem i nieruchomymi znacznikami. Scenę możesz otworzyć na pełnym ekranie.',
        'Wybierz „Wstrzymaj”, gdy promień znajdzie się pod kątem, który chcesz pokazać.',
        'Wyświetl radar na drugim monitorze jako element scenografii fikcyjnego centrum dowodzenia.',
        'Czy radar pokazuje prawdziwe pomiary?',
        'Promień i znaczniki powstają w przeglądarce. Scena nie odbiera sygnałów radarowych.'
      ],
      terminal: [
        'Fikcyjny terminal z zielonymi znakami',
        'Otwórz fikcyjny terminal z dwoma panelami zielonych znaków na ciemnym tle. Użyj go jako elementu scenografii lub tła filmu.',
        'Przełącz na pełny ekran, aby pokazać oba panele bez paska przeglądarki.',
        'Umieść terminal na monitorze za osobą prowadzącą materiał techniczny.',
        'Czy mogę wpisywać polecenia w terminalu?',
        'Terminal wyświetla ustalone wcześniej znaki i nie ma pola do wpisywania poleceń.'
      ],
      call: [
        'Symulacja rozmowy wideo z własnymi imionami',
        'Ustaw do dziewięciu kafelków fikcyjnej rozmowy wideo. Wpisuj imiona i oglądaj zmiany od razu w podglądzie.',
        'Wpisz swoje imię, wybierz od jednego do dziewięciu uczestników łącznie z tobą i zmień pozostałe imiona przed włączeniem pełnego ekranu.',
        'Ustaw wymyślone imiona, aby pokazać początek spotkania w materiale szkoleniowym.',
        'Czy symulacja włącza kamerę lub mikrofon?',
        'Imiona pozostają w przeglądarce. Scena nie włącza kamery ani mikrofonu i nie wysyła danych rozmowy.'
      ],
      'update-blue': [
        'Symulacja aktualizacji Windows 10',
        'Pokaż symulowaną aktualizację Windows 10 z paskiem postępu, procentami i ustawianym czasem trwania.',
        'Podaj czas w minutach i procent początkowy. Naciśnij „Uruchom ponownie”, aby zastosować ustawienia.',
        'Zacznij od wysokiego procentu, by w krótkiej demonstracji pokazać ostatnią fazę aktualizacji.',
        'Jak wstrzymać postęp?',
        'Wybierz „Wstrzymaj”. Po wybraniu „Wznów” wskaźnik ruszy od tego samego procentu.'
      ],
      'update-retro': [
        'Symulacja aktualizacji Windows XP w stylu retro',
        'Wyświetl ekran aktualizacji Windows XP z paskiem postępu i ustawianym procentem początkowym w przeglądarce.',
        'Dopasuj czas w minutach i procent początkowy do nagrania, a następnie kliknij „Uruchom ponownie”.',
        'Wykorzystaj aktualizację jako przejście między ujęciami filmu o komputerach z początku lat 2000.',
        'Czy symulacja instaluje Windows XP?',
        'Pasek postępu jest animacją w przeglądarce. Symulacja nie instaluje oprogramowania.'
      ],
      'update-silver': [
        'Symulacja aktualizacji Mac OS X',
        'Wyświetl fikcyjną aktualizację Mac OS X na ciemnym tle. Ustaw czas trwania i procent, od którego ma ruszyć wskaźnik.',
        'Ustaw liczbę minut i procent początkowy, a przed przejściem na pełny ekran naciśnij „Uruchom ponownie”.',
        'Pokaż na dodatkowym monitorze ekran aktualizacji do filmu o starszych komputerach Mac.',
        'Czy mogę uruchomić scenę na komputerze z Windows?',
        'Tak. Scena działa w przeglądarce i nie wymaga zainstalowanego Mac OS X.'
      ],
      'update-violet': [
        'Symulacja aktualizacji Ubuntu 22.04',
        'Pokaż graficzną symulację aktualizacji Ubuntu 22.04 z paskiem postępu i wyświetlaną wartością procentową.',
        'Ustaw czas w minutach i procent początkowy, a następnie zastosuj ustawienia przez „Uruchom ponownie”.',
        'Pokaż w poradniku, jak wygląda graficzny ekran aktualizacji w porównaniu z oknem terminala.',
        'Czy symulacja pobiera pakiety Ubuntu?',
        'Przeglądarka oblicza procent postępu na potrzeby animacji. Scena nie pobiera pakietów.'
      ],
      'update-gray': [
        'Symulacja aktualizacji ChromeOS',
        'Wyświetl fikcyjną aktualizację ChromeOS na pełnym ekranie. Możesz ustawić czas w minutach i procent początkowy.',
        'Wpisz czas i początkowy procent, po czym kliknij „Uruchom ponownie”, aby rozpocząć przebieg od wybranej wartości.',
        'Wybierz procent, który chcesz pokazać, i nagraj krótkie ujęcie paska postępu.',
        'Jak powtórzyć ujęcie od tego samego procentu?',
        'Przycisk „Uruchom ponownie” przywraca wskaźnik do wybranej wartości początkowej.'
      ],
      'boot-xp': [
        'Symulacja ekranu startowego Windows XP',
        'Pokaż ekran startowy Windows XP w stylu retro, z ciemnym tłem i powtarzaną animacją ładowania.',
        'Wybierz „Wstrzymaj”, aby zatrzymać animację, lub pozwól jej działać na pełnym ekranie.',
        'Użyj ekranu jako otwarcia filmu o komputerach z początku XXI wieku.',
        'Czy po animacji otworzy się pulpit Windows?',
        'Ładowanie powtarza się w przeglądarce. Pulpit Windows się nie otwiera.'
      ],
      bounce: [
        'Odbijające się logo jako wygaszacz online',
        'Pokaż logo TELA na ciemnym tle. Porusza się po ekranie i odbija od jego krawędzi.',
        'Uruchom scenę na pełnym ekranie lub wybierz „Wstrzymaj”, aby zatrzymać logo w obecnym położeniu.',
        'Wyświetl logo w przerwie między kolejnymi częściami prezentacji.',
        'Czy mogę dodać własne logo?',
        'Scena korzysta z wbudowanego logo TELA i nie zawiera pola do przesłania obrazu.'
      ],
      clock: [
        'Zegar klapkowy z sekundami na pełnym ekranie',
        'Wyświetl lokalny czas jako zegar klapkowy z godzinami, minutami i sekundami. Zegar korzysta z ustawień urządzenia.',
        'Wyświetl zegar na pełnym ekranie lub użyj opcji „Wstrzymaj”, aby zatrzymać wskazanie do nagrania.',
        'Otwórz zegar na drugim monitorze, aby łatwo sprawdzić godzinę z dalszej części pokoju.',
        'Czy można wybrać inną strefę czasową?',
        'Zegar korzysta ze strefy czasowej urządzenia. Zmianę wprowadza się w ustawieniach systemu.'
      ],
      quotes: [
        'Krótkie myśli na pełnym ekranie',
        'Pokaż krótką myśl na jasnym tle podczas przerwy. Naciśnij przycisk pod podglądem, aby zmienić tekst.',
        'Klikaj „Następna myśl”, aż pojawi się wybrany tekst, a następnie włącz pełny ekran.',
        'Pokaż jedną myśl jako punkt wyjścia do rozmowy między dwiema częściami prezentacji.',
        'Czy myśli zmieniają się automatycznie?',
        'Wybrany tekst zostaje na ekranie do kolejnego naciśnięcia przycisku „Następna myśl”.'
      ],
      bars: [
        'Ekran „Brak sygnału” z kolorowymi pasami',
        'Pokaż kolorowe pasy testowe z napisem „Brak sygnału” w trybie pełnoekranowym w przeglądarce.',
        'Przed nagraniem otwórz pełny ekran, aby umieścić komunikat pośrodku kadru.',
        'Użyj pasów w montażu filmu jako oznaczenia fikcyjnej przerwy w obrazie.',
        'Czy trzeba odłączyć kabel monitora?',
        'Wzór jest wyświetlany w przeglądarce. Kabel może pozostać podłączony.'
      ],
      rain: [
        'Cyfrowy deszcz z animowanymi zielonymi znakami',
        'Wyświetl przewijające się kolumny zielonych znaków na ciemnym tle. Możesz wstrzymać i wznowić animację.',
        'Pokaż ruchome kolumny na pełnym ekranie lub wybierz „Wstrzymaj”, aby zatrzymać je w podglądzie.',
        'Wykorzystaj poruszające się znaki jako tło na monitorze widocznym w filmie.',
        'Dlaczego znaki stoją w miejscu po otwarciu strony?',
        'Jeśli urządzenie ma włączone ograniczanie animacji, scena zaczyna od pauzy. Kliknij „Wznów”, aby wprawić znaki w ruch.'
      ],
      'white-noise': [
        'Biały szum z efektem śnieżenia telewizora',
        'Wyświetl czarno-biały obraz śnieżenia w przeglądarce. Możesz włączyć biały szum i ustawić jego głośność.',
        'Wybierz „Odtwórz biały szum”, jeśli chcesz dodać dźwięk. Ustaw głośność przed przełączeniem na pełny ekran.',
        'Użyj efektu śnieżenia jako przejścia w filmie o telewizji analogowej.',
        'Czy dźwięk włącza się automatycznie?',
        'Przeglądarka generuje dźwięk po wybraniu „Odtwórz biały szum”. Możesz go zatrzymać przyciskiem „Wstrzymaj dźwięk”.'
      ]
    }
  },
  sv: {
    start: 'Klicka eller tryck på förhandsvisningen eller på ”Helskärm”.',
    exit: 'Klicka eller tryck på scenen eller ikonen för att avsluta. Med tangentbord kan du trycka på Esc.',
    uses: 'Så kan du använda scenen',
    updateControls: ['Längd', 'minuter', 'Startprocent', 'Starta om'],
    callControls: ['Ditt namn', 'Antal deltagare', 'Deltagarens namn', 'Namnen stannar i webbläsaren. Scenen använder varken kamera eller mikrofon.'],
    bootLabel: 'Start av Windows XP',
    noiseLabel: 'Vitt brus',
    noiseControls: ['Spela vitt brus', 'Pausa ljudet', 'Volym', 'Webbläsaren kunde inte spela upp ljudet.'],
    scenes: {
      error: [
        'Simulera en Windows-blåskärm i retrostil',
        'Visa en simulerad blåskärm med varningssymbol och felmeddelande i Windows-stil, direkt i webbläsaren.',
        'Öppna scenen före inspelningen och se till att både symbolen och texten kommer med i bilden.',
        'Använd scenen för att visa en påhittad programkrasch i en kortfilm eller demonstration.',
        'Var hittar jag en enfärgad blå skärm för bildskärmstest?',
        'Välj blått bland färgerna under förhandsvisningen för att visa en helt blå yta.'
      ],
      cracked: [
        'Sprucken skärm med effekt av krossat glas',
        'Visa ett stjärnformat sprickmönster mot mörk bakgrund. Effekten av krossat glas kan visas i helskärm i webbläsaren.',
        'Rikta kameran mot mitten av bildskärmen om du vill visa punkten där sprickorna möts.',
        'Använd sprickmönstret som rekvisita i en scen där någon tappar en mobiltelefon.',
        'Hur ser jag om sprickorna tillhör simuleringen?',
        'Avsluta helskärmsläget och öppna en annan sida. Det simulerade mönstret försvinner med scenen.'
      ],
      radar: [
        'Radarsimulering med animerat svep',
        'Visa en grön radar med roterande svep och fasta markörer. Öppna scenen i helskärm inför en demonstration eller inspelning.',
        'Klicka på ”Pausa” för att stanna svepet vid den vinkel du vill visa.',
        'Använd radarn på en extra skärm i en scen som utspelar sig i ett fiktivt kontrollrum.',
        'Visar radarn riktiga mätningar?',
        'Svepet och markörerna ritas i webbläsaren. Scenen tar inte emot radarsignaler.'
      ],
      terminal: [
        'Påhittad terminal med gröna tecken',
        'Visa en påhittad terminal med två fält av gröna tecken på mörk bakgrund. Scenen kan användas som rekvisita i ett videoklipp.',
        'Öppna helskärmsläget för att visa båda textfälten utan webbläsarens verktygsfält.',
        'Placera terminalen på en skärm bakom den som presenterar i ett videoklipp om teknik.',
        'Kan jag skriva kommandon i terminalen?',
        'Terminalen visar förvalda tecken och har inget inmatningsfält.'
      ],
      call: [
        'Simulera ett videosamtal med egna namn',
        'Skapa en påhittad videokonferens med upp till nio rutor. Ändra deltagarnas namn och se resultatet direkt i förhandsvisningen.',
        'Ange ditt namn, välj en till nio deltagare inklusive dig själv och ändra övriga namn innan du öppnar helskärmsläget.',
        'Använd påhittade namn för att visa hur ett möte börjar i en utbildningsvideo.',
        'Använder scenen kamera eller mikrofon?',
        'Namnen stannar i webbläsaren. Scenen använder ingen kamera eller mikrofon och skickar inga samtalsdata.'
      ],
      'update-blue': [
        'Simulera en Windows 10-uppdatering',
        'Visa en simulerad Windows 10-uppdatering med förloppsindikator, procent och en tid som du ställer in själv.',
        'Ange tiden i minuter och startprocenten. Välj sedan ”Starta om” för att använda inställningarna.',
        'Börja nära slutet för att snabbt kunna visa den sista delen av uppdateringsförloppet.',
        'Hur pausar jag förloppet?',
        'Välj ”Pausa”. När du väljer ”Fortsätt” går visningen vidare från samma procenttal.'
      ],
      'update-retro': [
        'Simulera en Windows XP-uppdatering i retrostil',
        'Visa en simulerad Windows XP-uppdatering med förloppsindikator och justerbart startvärde direkt i webbläsaren.',
        'Välj hur många minuter uppdateringen ska pågå, ange startprocenten och klicka på ”Starta om”.',
        'Använd uppdateringen som övergång mellan två klipp i en film om datorer från tidigt 2000-tal.',
        'Installeras Windows XP när simuleringen körs?',
        'Förloppet är en animation i webbläsaren. Scenen installerar ingen programvara.'
      ],
      'update-silver': [
        'Simulera en uppdatering av Mac OS X',
        'Visa en simulerad Mac OS X-uppdatering på mörk bakgrund med förloppsindikator och justerbar tid.',
        'Ställ in tiden i minuter och startprocenten. Klicka på ”Starta om” innan du går till helskärmsläget.',
        'Visa uppdateringen på en bildskärm i ett videoklipp om äldre Mac-datorer.',
        'Fungerar simuleringen på en Windows-dator?',
        'Ja. Scenen körs i webbläsaren och kräver ingen installation av Mac OS X.'
      ],
      'update-violet': [
        'Simulera en Ubuntu 22.04-uppdatering',
        'Visa en grafisk uppdateringssimulering för Ubuntu 22.04 med förloppsindikator, procenttal och justerbar speltid.',
        'Ange tid i minuter och startprocent för demonstrationen och klicka på ”Starta om”.',
        'Visa i ett instruktionsklipp hur en grafisk uppdateringsskärm skiljer sig från ett terminalfönster.',
        'Hämtas några Ubuntu-paket?',
        'Procenttalet beräknas i webbläsaren. Simuleringen hämtar inga paket.'
      ],
      'update-gray': [
        'Simulera en ChromeOS-uppdatering i helskärm',
        'Visa förloppet för en simulerad ChromeOS-uppdatering. Du kan välja tid i minuter och ange var förloppet ska börja.',
        'Ange tid och startprocent och välj sedan ”Starta om” för att starta med de nya värdena.',
        'Ställ in den procent du vill visa och spela in ett kort klipp av uppdateringen.',
        'Hur spelar jag in samma startprocent igen?',
        'Med ”Starta om” återgår indikatorn till den startprocent du har valt.'
      ],
      'boot-xp': [
        'Simulera en startskärm för Windows XP',
        'Visa en Windows XP-startskärm i retrostil med mörk bakgrund och en laddningsanimation som upprepas.',
        'Välj ”Pausa” för att stanna laddningen eller låt den fortsätta i helskärm.',
        'Använd startskärmen som inledning till en video om datorer från början av 2000-talet.',
        'Öppnas Windows-skrivbordet efter laddningen?',
        'Laddningsanimationen börjar om i webbläsaren. Inget Windows-skrivbord öppnas.'
      ],
      bounce: [
        'Studsande logga som skärmsläckare på nätet',
        'Visa TELA-loggan som rör sig över en mörk yta och studsar mot kanterna. Animationen öppnas i webbläsaren.',
        'Låt loggan röra sig i helskärm eller håll den stilla med ”Pausa”.',
        'Visa loggan på presentationsskärmen medan du gör nästa del av ett föredrag redo.',
        'Kan jag ladda upp en egen logga?',
        'Scenen använder den inbyggda TELA-loggan och har inget fält för bilduppladdning.'
      ],
      clock: [
        'Vippklocka med sekunder i helskärm',
        'Visa lokal tid på en vippklocka med timmar, minuter och sekunder. Klockan följer enhetens tid.',
        'Öppna klockan i helskärm eller välj ”Pausa” för att hålla tiden stilla vid en inspelning.',
        'Visa klockan på en extra bildskärm så att tiden syns från hela rummet.',
        'Kan klockan visa en annan tidszon?',
        'Klockan följer enhetens valda tidszon. Vill du byta tidszon använder du systeminställningarna.'
      ],
      quotes: [
        'Visa korta tankar i helskärm',
        'Visa en kort tanke på ljus bakgrund under pausen. Du kan byta text med en knapp under förhandsvisningen.',
        'Klicka på ”Nästa tanke” tills du ser texten du vill visa och öppna sedan helskärmsläget.',
        'Använd en tanke som diskussionsfråga mellan delarna av en presentation.',
        'Byts texten automatiskt?',
        'Den valda texten syns tills du klickar på ”Nästa tanke” igen.'
      ],
      bars: [
        'Skärm med ”Ingen signal” och färgfält',
        'Visa färgfält med meddelandet ”Ingen signal” i webbläsaren. Du kan öppna testbilden i helskärm.',
        'Öppna helskärmsläget före inspelningen så att meddelandet syns mitt i bilden.',
        'Använd färgfälten i ett klipp för att visa ett fiktivt avbrott i bildsignalen.',
        'Måste jag koppla ur bildskärmskabeln?',
        'Webbläsaren visar testbilden. Du kan låta kabeln sitta kvar.'
      ],
      rain: [
        'Animerat digitalt regn med gröna tecken',
        'Visa kolumner av gröna tecken som rör sig nedåt mot en mörk bakgrund. Du kan pausa och fortsätta animationen.',
        'Visa tecknen i rörelse i helskärm eller välj ”Pausa” för att stanna dem i förhandsvisningen.',
        'Använd teckenregnet på en bildskärm som bakgrund i ett videoklipp.',
        'Varför rör sig inte tecknen när jag öppnar sidan?',
        'Om enheten är inställd på att minska rörelser börjar scenen i pausläge. Välj ”Fortsätt” för att starta animationen.'
      ],
      'white-noise': [
        'Vitt brus med svartvitt myrornas krig i helskärm',
        'Visa svartvitt TV-brus, ofta kallat myrornas krig, i webbläsaren. Du kan spela upp vitt brus och ställa in volymen.',
        'Välj ”Spela vitt brus” om du vill lägga till ljud. Ställ in volymen innan du öppnar helskärmsläget.',
        'Använd den brusiga bilden som övergång i ett klipp om analog television.',
        'Spelas ljudet upp automatiskt?',
        'Webbläsaren skapar ljudet först när du väljer ”Spela vitt brus”. Välj ”Pausa ljudet” för att stänga av det igen.'
      ]
    }
  }
};
