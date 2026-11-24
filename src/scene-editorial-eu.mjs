function editorial(relatedHeading, fullscreenFaq, entries) {
  const scenes = Object.fromEntries(Object.entries(entries).map(([id, [about, fullscreenStep, useTitle, extraUses, extraFaq]]) => [
    id, { about, fullscreenStep, useTitle, extraUses, extraFaq }
  ]));
  return { relatedHeading, fullscreenFaq, scenes };
}

const de = editorial(
  'Ähnliche Bildschirme',
  ['Warum bleibt die Browserleiste sichtbar?', 'Falls der Browser echtes Vollbild nicht zulässt, füllt die Szene den verfügbaren Anzeigebereich. Klicke oder tippe ins Bild oder drücke Esc, um zur Vorschau zurückzukehren.'],
  {
    error: [
      'Das blaue Warnbild besteht aus einem Ausrufezeichen, einer festen Meldung und hellen Linien. Es bleibt stehen, sodass dieselbe Anzeige für mehrere Aufnahmen verwendet werden kann.',
      'Prüfe im Vollbild, ob die Meldung auch aus der Entfernung lesbar ist, aus der du den Bildschirm sehen wirst.',
      'Simulierter Absturz im Video',
      [['Übung für den IT-Support', 'Zeige das Bild auf einem zweiten Monitor. Lass eine Person beschreiben, was sie sieht, bevor die Gruppe über sinnvolle Fragen bei einer Fehlermeldung spricht.']],
      [['Ändert sich die Meldung während der Anzeige?', 'Die Meldung bleibt während der Szene unverändert. Du kannst beim Filmen beliebig lange warten, bevor du das Bild schließt.']]
    ],
    cracked: [
      'Helle Linien mit unterschiedlichen Längen laufen auf denselben Punkt zu und bilden einen sternförmigen Riss. Der dunkle Untergrund hebt auch feine Ausläufer hervor.',
      'Sieh dir die feinen Linien am Rand an. Wähle beim Filmen einen Abstand, bei dem diese noch sichtbar sind.',
      'Requisite für eine Sturzszene',
      [['Vorher-nachher-Aufnahme', 'Nimm zuerst das normale Display auf und öffne anschließend das Rissmuster auf demselben Gerät. Lass die Kamera an ihrer Position, damit der Schnitt glaubwürdig bleibt.']],
      [['Kann ich den Mittelpunkt des Risses verschieben?', 'Der Mittelpunkt ist fest im Motiv platziert. Passe den Bildausschnitt der Kamera an, wenn er weiter außen im fertigen Bild liegen soll.']]
    ],
    radar: [
      'Der grüne Suchstrahl rotiert über einem kreisförmigen Raster und passiert dieselben Markierungen. Die Markierungen behalten ihre Position, auch wenn die Drehung wieder von vorn beginnt.',
      'Lass den Strahl im Vollbild einmal über die Markierungen laufen, um eine passende Länge für die Aufnahme zu finden.',
      'Bildschirm einer fiktiven Leitstelle',
      [['Erklärung einer Radaranzeige', 'Zeige an den festen Markierungen, wie ein rotierender Strahl verschiedene Bereiche der Anzeige nacheinander erreicht.']],
      [['Wo ändere ich die Bewegung nach dem Öffnen?', 'Verlasse zuerst das Vollbild. Unter der Vorschau kannst du die Bewegung anhalten oder fortsetzen.']]
    ],
    terminal: [
      'Zwei Felder zeigen grüne Zeilen, Blöcke und Symbole auf dunklem Grund. Die Inhalte bleiben stehen und sind für die Gestaltung einer Bildschirmszene vorbereitet.',
      'Prüfe im Bildausschnitt, ob beide Felder vollständig zu sehen sind und keines vom Rand der Aufnahme abgeschnitten wird.',
      'Hintergrund für ein Technikvideo',
      [['Monitorfund in einem Kurzfilm', 'Setze einen Schnitt von der Person im Raum auf die Terminalansicht. Die statischen Zeichen erleichtern mehrere Aufnahmen aus verschiedenen Winkeln.']],
      [['Scrollt der Inhalt von selbst?', 'Beide Felder zeigen während der gesamten Anzeige dieselben Zeilen. Für Bewegung im Bild eignet sich die Szene mit digitalem Regen.']]
    ],
    call: [
      'Die Kacheln zeigen Namen und daraus gebildete Initialen, darunter deine eigene Kachel. Die Vorschau ordnet die Ansicht passend zur gewählten Anzahl von einer bis neun Personen an.',
      'Kontrolliere im Vollbild, ob alle gewünschten Namen gut zu erkennen sind. Kehre zum Formular zurück, wenn du einen Namen ändern möchtest.',
      'Einstieg in eine Videokonferenz zeigen',
      [['Einzelgespräch und Teamrunde vergleichen', 'Stelle zuerst zwei Personen ein und erhöhe die Anzahl für eine zweite Aufnahme. So lassen sich beide Gesprächsgrößen mit denselben Beispielnamen darstellen.']],
      [['Was wird als Kürzel angezeigt?', 'Die Kachel verwendet die Anfangsbuchstaben der ersten beiden Wörter des eingegebenen Namens. Bei einem einzelnen Wort erscheint ein Buchstabe.']]
    ],
    'update-blue': [
      'Der Balken füllt sich zusammen mit der Prozentanzeige. Die eingegebene Dauer gilt für den Weg vom Startwert bis 100 Prozent und wird beim Neustart übernommen.',
      'Verfolge im Vollbild den Prozentwert und halte für eine zweite Einstellung denselben Startwert bereit.',
      'Letzte Phase eines Updates erklären',
      [['Fortschritt in einer kurzen Szene zeigen', 'Setze den Startwert so, dass die Prozentanzeige während der geplanten Aufnahme mehrere Schritte sichtbar macht.']],
      [['Welche Werte kann ich eintragen?', 'Die Eingaben erlauben 1 bis 240 Minuten und 0 bis 100 Prozent. „Neu starten“ übernimmt die Kombination.']]
    ],
    'update-retro': [
      'Die Update-Simulation kombiniert einen blauen Bildschirm im XP-Stil mit einem Balken und einem Prozentwert. „Neu starten“ übernimmt den Ausgangswert und die Dauer bis 100 Prozent.',
      'Lass die gewählte Phase im Vollbild laufen, während du die blaue Oberfläche ohne Formular aufnimmst.',
      'Übergang in einer Retro-Aufnahme',
      [['Zeitreise durch Bedienoberflächen', 'Zeige in einer Präsentation die XP- und Windows-10-Updateansicht mit demselben Ausgangswert. Dadurch lässt sich die Gestaltung der beiden Szenen direkt vergleichen.']],
      [['Wie unterscheidet sich diese Ansicht vom XP-Startbildschirm?', 'Das Update zeigt einen Prozentwert mit einstellbarer Dauer. Der XP-Startbildschirm zeigt einen Ladeeffekt in einer Schleife.']]
    ],
    'update-silver': [
      'Auf dunklem Grund stehen die Bezeichnung Mac OS X, ein heller Balken und der Prozentwert. Die Laufzeit beginnt beim gewählten Startwert und endet bei 100 Prozent.',
      'Prüfe im Vollbild, ob sich der helle Balken deutlich genug von der dunklen Umgebung der Aufnahme abhebt.',
      'Aufnahme auf einem Retro-Monitor',
      [['Endzustand einer Aktualisierung bebildern', 'Setze den Startwert auf 100 Prozent und starte neu. Die Anzeige bleibt gefüllt, während du ein Standbild für die Schlussfolie aufnimmst.']],
      [['Was passiert nach dem Öffnen des Vollbilds mit dem Fortschritt?', 'Die laufende Simulation bleibt beim Wechsel in dieselbe Ansicht erhalten. Für einen neuen Durchlauf verlässt du das Vollbild und verwendest „Neu starten“.']]
    ],
    'update-violet': [
      'Der Fortschritt erscheint auf einem violetten Bildschirm mit der Bezeichnung Ubuntu 22.04. Balken und Prozentwert folgen der eingestellten Laufzeit bis zum gewählten Ende bei 100 Prozent.',
      'Vergleiche im Vollbild den Zahlenwert mit dem gefüllten Teil des Balkens, wenn beides in der Demonstration zu sehen sein soll.',
      'Grafische Fortschrittsanzeige erläutern',
      [['Zwei Phasen in einem Tutorial', 'Zeige für einen Teil des Videos einen niedrigen Startwert und starte für den nächsten Teil näher am Ende neu.']],
      [['Was erscheint bei 100 Prozent?', 'Der Balken bleibt vollständig gefüllt und die Prozentanzeige bleibt auf 100 Prozent. Ein weiterer Durchlauf lässt sich über „Neu starten“ auslösen.']]
    ],
    'update-gray': [
      'Die ChromeOS-Szene stellt die simulierte Aktualisierung als Balken samt Prozentwert dar. Die Vorschau und das Vollbild verwenden denselben Fortschritt.',
      'Wähle im Vollbild einen Bildausschnitt, bei dem sowohl der Name ChromeOS als auch die Prozentzahl lesbar bleiben.',
      'Lesbare kurze Aufnahme einer Aktualisierung',
      [['Fortschritt auf einem zweiten Display', 'Ziehe das Fenster vor dem Start auf den gewünschten Bildschirm und verwende den ersten Monitor für deine Notizen.']],
      [['Was bedeutet die Dauer, wenn ich bei 60 Prozent starte?', 'Die angegebenen Minuten beschreiben die Zeit von 60 bis 100 Prozent. Eine Pause hält den laufenden Fortschritt an.']]
    ],
    'boot-xp': [
      'Das Motiv zeigt den Schriftzug Windows XP mit einem dunklen Hintergrund und einer animierten Ladeleiste. Die Animation wiederholt sich, solange die Szene läuft.',
      'Warte im Vollbild auf einen Durchlauf der Ladeleiste und wähle danach den Einstieg für die Aufnahme.',
      'Auftakt für eine Präsentation über Retro-PCs',
      [['Szenenwechsel vom Einschalten zum Desktop', 'Zeige für den ersten Schnitt die Ladeanimation und wechsle danach zu vorbereitetem Desktop-Material. Die Schleife lässt dir Zeit für die Aufnahme.']],
      [['Kann ich eine Dauer oder Prozentzahl einstellen?', 'Der Startbildschirm verwendet eine feste Ladeschleife. Dauer und Startprozentsatz lassen sich in der separaten XP-Update-Szene einstellen.']]
    ],
    bounce: [
      'Das TELA-Logo zieht in wiederkehrenden Bahnen über einen dunklen Hintergrund. Die Bewegung wechselt an den Rändern ihre Richtung und lässt sich in der Vorschau pausieren.',
      'Beobachte die ganze Fläche im Vollbild, da das Logo auch die Ecken deiner Aufnahme erreichen kann.',
      'Bewegtes Bild während einer Präsentationspause',
      [['Zweitmonitor neben einem Infostand', 'Öffne die Vorschau auf dem zweiten Monitor und lass das Logo während einer kurzen Pause laufen, während du auf dem ersten Bildschirm weiterarbeitest.']],
      [['Startet die Szene beim Öffnen immer in Bewegung?', 'Bei aktivierter Einstellung für reduzierte Bewegung beginnt sie pausiert. Mit „Fortsetzen“ kannst du die Animation einschalten.']]
    ],
    clock: [
      'Die Klappuhr zeigt von links nach rechts Stunde, Minute und Sekunde im 24-Stunden-Format. Bei einer Pause hält sie den zuletzt sichtbaren Wert fest und springt beim Fortsetzen zur aktuellen Gerätezeit.',
      'Stelle die Uhr so auf, dass du auch die Sekunden vom vorgesehenen Sitzplatz aus lesen kannst. Zum Pausieren kehrst du zur Vorschau zurück.',
      'Gut sichtbare Uhr auf dem Zweitmonitor',
      [
        ['Beginn einer Pause planen', 'Lege zum Beispiel 14:35 Uhr als Wiederbeginn fest und lass die Uhr für alle sichtbar laufen. Damit können die Teilnehmenden die vereinbarte Uhrzeit selbst im Blick behalten.'],
        ['Zeitpunkt in einem Video zeigen', 'Halte die Anzeige im gewünschten Moment an, bevor du das Vollbild öffnest. So bleibt dieselbe Uhrzeit während mehrerer Aufnahmen sichtbar.']
      ],
      [
        ['Lässt sich ein Countdown einstellen?', 'Die Klappuhr zeigt die Uhrzeit des Geräts. Für eine Pause kannst du stattdessen eine Endzeit vereinbaren und sie mit der laufenden Anzeige vergleichen.'],
        ['Läuft die Zeit nach dem Fortsetzen an der eingefrorenen Sekunde weiter?', 'Nach dem Fortsetzen zeigt die Uhr wieder die aktuelle Gerätezeit. Der eingefrorene Wert dient nur als Standbild.']
      ]
    ],
    quotes: [
      'Ein kurzer Spruch steht allein auf hellem Hintergrund. Unter der Vorschau lässt sich der nächste Text aus der eingebauten Auswahl aufrufen.',
      'Prüfe die Lesbarkeit im Vollbild aus der Entfernung des Publikums, bevor du die Anzeige stehen lässt.',
      'Gesprächseinstieg zwischen zwei Vorträgen',
      [['Lesepause für eine Gruppe', 'Lass den gewählten Satz kurz stehen und bitte die Gruppe, sich eine Stelle zu merken, auf die sie im Anschluss eingehen möchte.']],
      [['Kann ich einen eigenen Satz eintippen?', 'Die Anzeige verwendet die vorhandenen Sprüche. Mit der Taste unter der Vorschau wechselst du zur nächsten Vorlage.']]
    ],
    bars: [
      'Senkrechte Farbfelder bilden den Hintergrund für den mittig angezeigten Hinweis „Kein Signal“. Die Szene bleibt sichtbar, während die Browserseite geöffnet ist.',
      'Prüfe bei einer Videoaufnahme, ob die äußeren Farbfelder und der Hinweis gemeinsam im Bild liegen.',
      'Fiktiver Signalausfall im Schnitt',
      [['Ansicht vor dem Start einer Vorführung', 'Blende die Farbfelder als bewussten Auftakt ein und wechsle dann zur eigentlichen Präsentation, sobald die Vorführung beginnt.']],
      [['Kann ich damit die Farben meines Monitors kalibrieren?', 'Die Farbfelder sind als Motiv für die Szene gedacht. Für eine Wiedergabeprüfung eignen sich separate Farbflächen, für eine Kalibrierung ein geeignetes Messverfahren.']]
    ],
    rain: [
      'Grüne Zeichenfolgen bewegen sich spaltenweise über den dunklen Hintergrund. Die Spalten laufen unabhängig voneinander und wiederholen das Muster fortlaufend.',
      'Wähle im Vollbild einen Bildausschnitt, dessen Zeichenstruktur andere sichtbare Elemente der Aufnahme nicht überlagert.',
      'Bewegter Hintergrund auf einem Monitor',
      [['Schleife für einen Technikabend', 'Lass die bewegten Zeichen auf einem seitlichen Bildschirm laufen, während die eigentliche Präsentation auf einem anderen Bildschirm bleibt.']],
      [['Kann ich eine eigene Zeichenfolge eingeben?', 'Die Spalten verwenden vorgegebene Zeichen. Unter der Vorschau kannst du die Bewegung anhalten und wieder starten.']]
    ],
    'white-noise': [
      'Das graue Schneemuster und der Ton lassen sich getrennt verwenden. Wenn du den Ton einschaltest, erzeugt ihn der Browser auf dem Gerät.',
      'Höre vor dem Vollbild bei geringer Lautstärke kurz hinein. Für weitere Änderungen kehrst du zu den Reglern neben der Vorschau zurück.',
      'Übergang im Stil eines analogen Fernsehers',
      [['Gleichmäßiger Klang beim Lesen', 'Lass das Bild in der Vorschau und starte den Ton bei geringer Lautstärke. Pausiere ihn über die Schaltfläche, wenn du wieder Stille möchtest.']],
      [['Kann das Schneebild ohne Ton im Vollbild bleiben?', 'Ja. Du kannst die Vorschau direkt öffnen, während die Audiowiedergabe ausgeschaltet bleibt.']]
    ]
  }
);

const fr = editorial(
  'Écrans à essayer ensuite',
  ['Pourquoi la barre du navigateur reste-t-elle visible ?', 'Si le plein écran natif est indisponible, la scène occupe la zone d’affichage du navigateur. Cliquez ou touchez l’image, ou appuyez sur Échap, pour revenir à l’aperçu.'],
  {
    error: [
      'Le fond bleu contraste avec le symbole d’alerte, le message et les traits clairs. Le visuel reste fixe pendant que vous le présentez ou que vous le filmez.',
      'Vérifiez en plein écran que le texte est lisible à la distance prévue pour le public ou la caméra.',
      'Panne fictive dans une vidéo',
      [['Exercice de support informatique', 'Montrez l’alerte sur un écran secondaire. Demandez à une personne de décrire ce qu’elle voit avant de discuter des questions à poser lors d’un appel au support.']],
      [['Le message change-t-il au bout d’un moment ?', 'Le texte reste identique pendant la scène. Vous pouvez attendre le moment souhaité pour faire un raccord.']]
    ],
    cracked: [
      'Des traits de différentes longueurs partent du même point pour former les fissures. Le fond sombre facilite la lecture des branches les plus fines.',
      'Quand la scène occupe l’écran, repérez les branches extérieures et vérifiez qu’elles restent visibles dans le cadre.',
      'Accessoire pour une scène de chute',
      [['Plan avant et après le choc', 'Filmez d’abord l’appareil avec son affichage habituel, puis ouvrez la simulation sans déplacer la caméra. Le cadrage commun permet de raccorder les deux prises.']],
      [['Peut-on déplacer le point d’impact ?', 'Le point de départ des fissures a une position fixe dans le motif. Pour le décaler dans la prise de vue, ajustez le cadrage.']]
    ],
    radar: [
      'Un faisceau vert tourne au-dessus d’un cadran circulaire. Les repères restent aux mêmes emplacements à chaque passage du faisceau.',
      'Observez un passage complet en plein écran pour choisir le moment où commencer la capture.',
      'Décor de salle de contrôle',
      [['Illustration d’un balayage tournant', 'Servez-vous des repères fixes pour expliquer comment le balayage couvre successivement les différentes zones du cadran.']],
      [['Comment modifier l’animation une fois en plein écran ?', 'Revenez à l’aperçu pour retrouver les commandes de pause et de reprise.']]
    ],
    terminal: [
      'Les deux panneaux regroupent des lignes, des blocs et des symboles verts sur un fond sombre. Leur contenu est fixe, ce qui facilite les raccords entre deux plans.',
      'Vérifiez que la prise de vue inclut les deux panneaux et laisse de l’espace autour du texte.',
      'Écran d’arrière-plan pour une vidéo technique',
      [['Insert pour un court métrage', 'Filmez le terminal en gros plan pour représenter un écran découvert par un personnage. Vous pouvez reprendre le même cadrage plus tard avec les mêmes lignes.']],
      [['Les lignes défilent-elles ?', 'Les lignes restent en place. Pour un fond animé, essayez la scène de pluie numérique.']]
    ],
    call: [
      'Chaque vignette associe un nom à des initiales calculées dans le navigateur. La disposition s’adapte au nombre de personnes choisi, votre propre vignette comprise.',
      'Vérifiez en plein écran que tous les noms sont lisibles dans votre cadrage. Pour les corriger, revenez à l’aperçu.',
      'Début de visioconférence pour la formation',
      [['Comparer un entretien et une réunion', 'Faites une prise avec deux personnes, puis augmentez le nombre de participants pour une seconde prise. Vous pouvez ainsi garder les mêmes noms d’exemple dans les deux plans.']],
      [['Comment les initiales sont-elles choisies ?', 'La vignette reprend la première lettre des deux premiers mots saisis, ou une seule lettre si le nom ne comporte qu’un mot.']]
    ],
    'update-blue': [
      'La barre se remplit à mesure que le pourcentage augmente. La durée choisie s’applique au trajet entre le pourcentage de départ et 100 %, à partir du redémarrage.',
      'Suivez le pourcentage en plein écran pour choisir les premières et dernières valeurs visibles dans votre prise.',
      'Montrer la fin d’une mise à jour',
      [['Tourner un plan court de progression', 'Choisissez un départ suffisamment bas pour que plusieurs valeurs apparaissent pendant la prise, puis relancez la scène pour les prises suivantes.']],
      [['Quelles valeurs puis-je saisir ?', 'Vous pouvez choisir une durée de 1 à 240 minutes et un départ de 0 à 100 %. Le bouton « Redémarrer » applique les réglages.']]
    ],
    'update-retro': [
      'Le fond bleu présente une barre et un pourcentage dans un style inspiré de Windows XP. La durée réglée couvre le parcours entre la valeur de départ et 100 %.',
      'Laissez défiler la phase souhaitée en plein écran pour filmer le fond bleu avec sa progression.',
      'Transition dans une vidéo rétro',
      [['Comparer deux générations de Windows', 'Affichez le même pourcentage de départ dans les scènes Windows XP et Windows 10. Votre public peut ainsi comparer leur présentation sur une même valeur.']],
      [['Quelle différence avec la scène de démarrage de Windows XP ?', 'La mise à jour affiche un pourcentage et propose une durée réglable. La scène de démarrage présente une animation de chargement en boucle.']]
    ],
    'update-silver': [
      'Le fond sombre fait ressortir le nom Mac OS X, le pourcentage et la barre claire. Avec les réglages appliqués, l’indicateur avance de la valeur de départ jusqu’à 100 %.',
      'Cadrez la barre et le pourcentage de façon qu’ils ressortent aussi dans une pièce peu éclairée.',
      'Tournage consacré aux anciens Mac',
      [['Illustrer une progression terminée', 'Réglez le départ sur 100 % et cliquez sur « Redémarrer ». La barre reste pleine pendant que vous préparez votre capture.']],
      [['Le plein écran relance-t-il la progression ?', 'La même progression est utilisée dans l’aperçu et dans le plein écran. Quittez le plein écran puis cliquez sur « Redémarrer » pour repartir.']]
    ],
    'update-violet': [
      'Le nom Ubuntu 22.04 figure au-dessus d’une barre et de son pourcentage sur fond violet. Une fois la progression lancée, les deux indicateurs avancent ensemble jusqu’à 100 %.',
      'Vérifiez que le pourcentage et le niveau de remplissage restent lisibles dans votre prise de vue.',
      'Présentation d’une mise à jour graphique',
      [['Illustrer plusieurs étapes dans un tutoriel', 'Faites une première prise avec une valeur basse, puis lancez un second plan avec un départ plus proche de 100 %.']],
      [['Que se passe-t-il à 100 % ?', 'La barre reste pleine et la valeur affichée reste à 100 %. Cliquez sur « Redémarrer » pour relancer la scène avec les paramètres saisis.']]
    ],
    'update-gray': [
      'La scène ChromeOS représente la progression par une barre et un pourcentage. Le passage de l’aperçu au plein écran conserve la progression en cours.',
      'Choisissez un cadrage qui laisse visibles le nom ChromeOS et le pourcentage.',
      'Filmer une courte phase de progression',
      [['Présentation sur un deuxième affichage', 'Déplacez la fenêtre sur le moniteur de démonstration avant de lancer le plein écran. Gardez les notes de présentation sur le premier écran.']],
      [['À quoi correspond la durée si le départ est à 60 % ?', 'Elle couvre le temps prévu pour aller de 60 à 100 %. La pause suspend la progression en cours.']]
    ],
    'boot-xp': [
      'Le nom Windows XP et une barre animée apparaissent sur un fond sombre. La barre recommence son cycle tant que la scène tourne.',
      'En plein écran, observez un cycle de la barre pour caler le début de votre prise.',
      'Introduction à une vidéo sur les PC anciens',
      [['Raccord vers un bureau préparé', 'Filmez la scène de démarrage puis enchaînez sur un plan distinct du bureau. La boucle vous laisse le temps de tourner le premier plan.']],
      [['Puis-je régler une durée ou un pourcentage ?', 'Le démarrage suit une boucle fixe. Pour régler une durée et une valeur initiale, ouvrez la scène distincte de mise à jour de Windows XP.']]
    ],
    bounce: [
      'Le logo TELA parcourt un fond sombre et change de direction au cours du déplacement. Les commandes sous l’aperçu permettent d’arrêter et de relancer le mouvement.',
      'Observez la trajectoire sur toute la surface, car le logo peut aussi passer dans les coins du cadre.',
      'Écran de pause animé pour une présentation',
      [['Animation sur un moniteur latéral', 'Laissez le logo se déplacer à côté d’un stand pendant que le moniteur principal reste disponible pour les informations ou les démonstrations.']],
      [['Le logo bouge-t-il dès l’ouverture ?', 'Si l’appareil est réglé pour réduire les animations, la scène commence en pause. Cliquez sur « Reprendre » pour lancer le mouvement.']]
    ],
    clock: [
      'L’horloge à volets présente de gauche à droite les heures, les minutes et les secondes au format 24 heures. La pause fige la dernière heure affichée et la reprise ramène l’horloge à l’heure courante de l’appareil.',
      'Vérifiez que les trois groupes de chiffres restent lisibles depuis l’endroit où vous serez assis. Pour les figer, revenez à l’aperçu.',
      'Heure lisible sur un écran secondaire',
      [
        ['Repère pendant une pause', 'Annoncez par exemple une reprise à 14 h 35, puis laissez l’horloge visible. Chacun peut comparer l’heure courante à l’heure de reprise.'],
        ['Heure précise pour une prise de vue', 'Mettez l’horloge en pause au moment souhaité avant d’ouvrir le plein écran. Les mêmes chiffres restent visibles pour les prises suivantes.']
      ],
      [
        ['L’horloge peut-elle servir de compte à rebours ?', 'Elle affiche l’heure courante de l’appareil. Pour suivre une pause, fixez une heure de reprise et comparez-la à l’heure affichée.'],
        ['La reprise repart-elle de la seconde figée ?', 'La reprise affiche à nouveau l’heure courante de l’appareil. La valeur figée sert à garder un affichage immobile.']
      ]
    ],
    quotes: [
      'Une phrase courte apparaît seule sur un fond clair. La commande sous l’aperçu parcourt les phrases de la sélection intégrée.',
      'Vérifiez la lisibilité depuis le dernier rang avant de laisser la phrase affichée.',
      'Amorce entre deux parties d’une présentation',
      [['Temps de réflexion en groupe', 'Laissez la phrase à l’écran pendant une courte pause. Invitez ensuite les participants à commenter un mot ou un passage.']],
      [['Peut-on entrer sa propre phrase ?', 'La scène utilise les phrases intégrées. Le bouton sous l’aperçu passe à la suivante.']]
    ],
    bars: [
      'Les bandes verticales forment le fond du message centré « Pas de signal ». L’image est fixe pendant le plein écran, comme dans l’aperçu.',
      'Pour une prise de vue, vérifiez que les bandes extérieures et le message entrent dans le cadre.',
      'Suggérer une coupure de signal au montage',
      [['Écran d’ouverture d’une projection', 'Laissez les bandes visibles avant de commencer, puis passez à la présentation ou à la vidéo prévue.']],
      [['Puis-je étalonner un moniteur avec ces bandes ?', 'Ces bandes servent à mettre en scène un affichage. Pour un étalonnage, utilisez une mire et une méthode de mesure adaptées.']]
    ],
    rain: [
      'Les caractères verts descendent en colonnes décalées sur un fond sombre. Les séquences sont décalées d’une colonne à l’autre et le motif se répète.',
      'En plein écran, vérifiez que la texture reste en arrière-plan et que les éléments importants de la prise restent lisibles.',
      'Fond animé pour une vidéo',
      [['Décor lumineux lors d’une soirée technique', 'Affichez la pluie numérique sur un écran placé sur le côté de la salle. Réservez l’écran principal à la présentation.']],
      [['Peut-on remplacer les caractères par son propre texte ?', 'Les colonnes utilisent des caractères prédéfinis. Les commandes sous l’aperçu règlent la pause et la reprise du mouvement.']]
    ],
    'white-noise': [
      'La neige en noir et blanc se consulte avec ou sans son. Le navigateur génère le bruit blanc sur l’appareil quand vous lancez la lecture.',
      'Écoutez quelques secondes à faible volume avant le plein écran. Revenez à l’aperçu pour modifier le volume.',
      'Transition évoquant la télévision analogique',
      [['Fond sonore discret pendant la lecture', 'Laissez la page dans l’aperçu et lancez le bruit blanc à faible volume. Mettez le son en pause lorsque vous souhaitez retrouver le silence.']],
      [['La neige peut-elle rester en plein écran sans son ?', 'Oui. Vous pouvez ouvrir l’image alors que la lecture audio est arrêtée.']]
    ]
  }
);

const it = editorial(
  'Altre schermate da provare',
  ['Perché la barra del browser rimane visibile?', 'Se il browser non consente la modalità a schermo intero nativa, la scena occupa l’area di visualizzazione disponibile. Fai clic o tocca l’immagine, oppure premi Esc, per tornare all’anteprima.'],
  {
    error: [
      'La schermata abbina il fondo blu a un simbolo di avviso, un messaggio fisso e linee chiare. L’immagine resta uguale per tutta la durata della ripresa.',
      'Controlla a schermo intero che si riesca a leggere il messaggio dalla distanza prevista per il pubblico o la videocamera.',
      'Guasto simulato in un video',
      [['Esercitazione di assistenza tecnica', 'Mostra l’avviso su un secondo monitor. Chiedi a una persona di descrivere ciò che vede prima di parlare delle domande da fare durante una richiesta di assistenza.']],
      [['Il messaggio cambia dopo qualche secondo?', 'Il messaggio rimane uguale finché la scena è aperta. Puoi aspettare il momento più adatto per passare all’inquadratura successiva.']]
    ],
    cracked: [
      'Le linee chiare si diramano da un unico punto e ricordano le crepe di un vetro. Lo sfondo scuro mette in risalto anche le diramazioni sottili.',
      'Osserva i rami esterni a schermo intero e verifica che si vedano nella ripresa.',
      'Effetto di una caduta sullo schermo',
      [['Ripresa prima e dopo l’urto', 'Inquadra prima il dispositivo acceso normalmente, poi apri la simulazione senza spostare la videocamera. Potrai unire le due riprese mantenendo lo stesso punto di vista.']],
      [['Posso spostare il punto da cui partono le crepe?', 'Il punto è fisso nel disegno. Cambia l’inquadratura per farlo apparire in una posizione diversa nella ripresa.']]
    ],
    radar: [
      'Un fascio verde ruota su un quadrante circolare e passa sopra punti luminosi. I punti restano nella stessa posizione durante tutti i giri.',
      'Segui un giro del fascio a schermo intero per trovare un momento adatto a iniziare la ripresa.',
      'Scenografia per una sala di controllo',
      [['Spiegazione di una scansione circolare', 'Usa i punti fissi per mostrare quali zone del quadrante vengono attraversate per prime e come la sequenza si ripete.']],
      [['Dove si trovano i comandi di movimento a schermo intero?', 'Torna all’anteprima per mettere in pausa o riprendere la rotazione.']]
    ],
    terminal: [
      'Due pannelli mostrano righe, blocchi e simboli verdi su uno sfondo scuro. Il contenuto resta fermo durante la ripresa, anche se cambi inquadratura.',
      'Controlla che la videocamera inquadri per intero entrambi i pannelli.',
      'Schermo sullo sfondo di un video tecnico',
      [['Primo piano del terminale in un corto', 'Passa dall’inquadratura del personaggio a quella del terminale. Puoi riprendere lo stesso schermo da più angolazioni conservando le righe originali.']],
      [['I caratteri scorrono in automatico?', 'Le righe rimangono ferme. Per uno sfondo a caratteri in movimento, apri la pioggia digitale.']]
    ],
    call: [
      'Ogni riquadro mostra il nome e le iniziali del partecipante. Puoi disporre da una a nove persone in griglia, contando anche il tuo riquadro.',
      'A schermo intero, verifica che tutti i nomi si leggano nella ripresa. Per correggerli, torna all’anteprima.',
      'Apertura di una videochiamata in un corso',
      [['Confronto tra colloquio e riunione', 'Prepara una scena con due nomi e una seconda con più persone. Usa gli stessi nomi di esempio per mantenere la continuità tra le due riprese.']],
      [['Come vengono scelte le iniziali?', 'Il riquadro mostra le iniziali delle prime due parole inserite. Se inserisci una sola parola, compare una sola lettera.']]
    ],
    'update-blue': [
      'La barra si riempie man mano che sale la percentuale. La durata indica il tempo necessario per passare dal valore iniziale al 100%, a partire da quando premi «Riavvia».',
      'Segui il numero a schermo intero per decidere quali percentuali includere nella registrazione.',
      'Dimostrazione della fase finale di un aggiornamento',
      [['Breve ripresa del passaggio tra percentuali', 'Imposta un valore di partenza che lasci salire la percentuale per qualche punto durante la ripresa. Per una seconda inquadratura usa gli stessi valori.']],
      [['Quali valori accetta il modulo?', 'La durata va da 1 a 240 minuti. La percentuale iniziale può andare da 0 a 100 e viene applicata quando premi «Riavvia».']]
    ],
    'update-retro': [
      'La scena mostra una barra e un valore numerico su uno sfondo blu ispirato a Windows XP. Il valore iniziale e il tempo per arrivare al 100% vengono applicati con «Riavvia».',
      'Lascia scorrere la fase desiderata a schermo intero per filmare la grafica senza il modulo.',
      'Passaggio in un video sui primi anni Duemila',
      [['Confronto tra due generazioni di Windows', 'Imposta la stessa percentuale iniziale nelle scene di XP e Windows 10. Mostrale una dopo l’altra per evidenziare il diverso stile dell’interfaccia.']],
      [['Come si distingue dalla schermata di avvio di Windows XP?', 'L’aggiornamento mostra una percentuale e consente di impostare la durata. La schermata di avvio usa una barra che si anima in ciclo.']]
    ],
    'update-silver': [
      'Lo sfondo scuro mette in evidenza il nome Mac OS X, la barra chiara e la percentuale. Dopo il riavvio della scena, il valore sale da quello iniziale fino al 100%.',
      'Valuta a schermo intero se la barra risalta anche nelle condizioni di luce previste per la ripresa.',
      'Scena dedicata ai vecchi Mac',
      [['Schermata finale con la barra piena', 'Riavvia dal 100% per mostrare subito il risultato finale. Puoi lasciare sullo schermo questo stato mentre prepari una foto o un fermo immagine.']],
      [['Lo schermo intero fa ripartire la barra?', 'Anteprima e schermo intero mostrano lo stesso avanzamento. Torna all’anteprima e premi «Riavvia» per iniziare un nuovo ciclo.']]
    ],
    'update-violet': [
      'Su fondo viola, il nome Ubuntu 22.04 compare sopra un indicatore grafico e la percentuale. Entrambi avanzano fino al 100% secondo la durata impostata.',
      'Inquadra la barra e il numero insieme per mostrarne il rapporto durante la dimostrazione.',
      'Spiegazione di una schermata di avanzamento',
      [['Due fasi per un tutorial', 'Registra una prima scena partendo da una percentuale bassa. Per il secondo passaggio, riavvia da un valore vicino al completamento.']],
      [['Cosa succede quando arriva al 100%?', 'Il numero rimane al 100% e la barra resta piena. Con «Riavvia» puoi ripartire dalla percentuale impostata.']]
    ],
    'update-gray': [
      'Una barra con il valore in percentuale rappresenta l’avanzamento nello stile di ChromeOS. Lo stesso valore compare nell’anteprima e nella scena a schermo intero.',
      'Fai rientrare nell’inquadratura sia la scritta ChromeOS sia il numero, soprattutto se riprendi il monitor da vicino.',
      'Ripresa breve di un aggiornamento in corso',
      [['Presentazione su un secondo monitor', 'Sposta il browser sul monitor rivolto al pubblico prima di aprire lo schermo intero. Puoi tenere le note sull’altro display.']],
      [['Se imposto 60%, a che cosa si riferisce la durata?', 'I minuti indicano il tempo previsto per passare dal 60% al 100%. La pausa ferma temporaneamente l’avanzamento.']]
    ],
    'boot-xp': [
      'Il nome Windows XP appare su uno sfondo scuro insieme alla barra di caricamento. La barra ripete la stessa sequenza mentre la scena è aperta.',
      'Osserva un ciclo della barra a schermo intero e scegli dove far partire la registrazione.',
      'Introduzione a un video sui computer d’epoca',
      [['Passaggio dall’accensione al desktop', 'Registra prima la scena di avvio, poi passa a un’inquadratura del desktop preparata a parte. Il ciclo ripetuto ti lascia tempo per girare la prima scena.']],
      [['Posso impostare durata e percentuale?', 'L’avvio segue un’animazione fissa. Usa la scena di aggiornamento di Windows XP per regolare durata e valore iniziale.']]
    ],
    bounce: [
      'Il logo TELA si sposta su un fondo scuro e cambia direzione lungo il percorso. I comandi sotto l’anteprima permettono di fermare o far ripartire il movimento.',
      'Considera l’intera superficie a schermo intero, perché il logo può raggiungere gli angoli dell’inquadratura.',
      'Schermata animata in una pausa della presentazione',
      [['Monitor laterale a uno stand', 'Lascia scorrere il logo su un monitor laterale durante una pausa. Tieni libero lo schermo principale per le informazioni o le dimostrazioni.']],
      [['Il logo si muove appena apro la pagina?', 'Con la preferenza per il movimento ridotto attivata, la scena parte in pausa. Usa il comando di ripresa per avviare l’animazione.']]
    ],
    clock: [
      'L’orologio a palette mostra da sinistra ore, minuti e secondi nel formato a 24 ore. Quando metti in pausa conserva l’ultima ora mostrata, poi alla ripresa torna all’ora corrente del dispositivo.',
      'Verifica che i tre gruppi di cifre siano leggibili dal posto previsto. Per bloccare il valore torna all’anteprima.',
      'Ora ben visibile su un secondo monitor',
      [
        ['Orario di rientro dopo una pausa', 'Annuncia per esempio che si riprende alle 14:35 e lascia l’orologio visibile. Chi partecipa può confrontare l’orario stabilito con quello corrente.'],
        ['Ora fissa durante una ripresa video', 'Metti in pausa quando compare l’ora desiderata, quindi apri lo schermo intero. Le cifre restano uguali mentre ripeti l’inquadratura.']
      ],
      [
        ['Si può impostare un conto alla rovescia?', 'L’orologio mostra l’ora corrente del dispositivo. Per seguire una pausa puoi indicare un orario di rientro e confrontarlo con quello sullo schermo.'],
        ['La ripresa riparte dall’ultimo secondo fermo?', 'Quando riprendi, l’orologio mostra l’ora corrente del dispositivo. Il valore fermo serve a mantenere la stessa indicazione durante una ripresa.']
      ]
    ],
    quotes: [
      'Una breve frase compare da sola su uno sfondo chiaro. Il comando sotto l’anteprima passa alla frase successiva della selezione.',
      'Prima di lasciare la frase visibile, controlla che si legga anche dal fondo della stanza.',
      'Spunto tra due parti di una presentazione',
      [['Pausa di lettura per un gruppo', 'Lascia visibile una frase per qualche istante. Poi invita ciascuno a commentare una parola o un passaggio.']],
      [['Posso inserire una frase mia?', 'La schermata usa la raccolta di frasi integrata. Il pulsante sotto l’anteprima passa alla frase successiva.']]
    ],
    bars: [
      'Bande verticali colorate fanno da sfondo al messaggio centrale «Nessun segnale». L’immagine rimane ferma mentre è aperta.',
      'Inquadra il messaggio e le bande più esterne per mantenere leggibile l’effetto nella ripresa.',
      'Interruzione fittizia del segnale in un video',
      [['Schermata di apertura di una proiezione', 'Mostra le bande prima di cominciare. Passa al materiale principale quando arriva il momento di avviare la proiezione.']],
      [['Posso usarla per calibrare il monitor?', 'Le bande sono un motivo grafico. Per calibrare il monitor, usa una schermata di riferimento e strumenti di misura adatti.']]
    ],
    rain: [
      'Colonne di caratteri verdi scorrono su uno sfondo scuro con tempi sfalsati. Ogni colonna ripete la sua sequenza mentre l’animazione è in corso.',
      'Scegli un’inquadratura in cui il movimento dei caratteri resti sullo sfondo e il soggetto principale sia ben riconoscibile.',
      'Sfondo in movimento per un video',
      [['Scenografia per una serata a tema informatico', 'Fai scorrere la pioggia digitale su un monitor laterale. Tieni lo schermo centrale per slide e altri contenuti.']],
      [['Posso sostituire i caratteri con un mio testo?', 'Le colonne usano caratteri preimpostati. Puoi controllare il movimento con i comandi di pausa e ripresa.']]
    ],
    'white-noise': [
      'L’effetto neve rimane visibile con o senza audio. Quando avvii il suono, il browser genera il rumore bianco sul dispositivo.',
      'Ascolta qualche secondo a volume basso prima di aprire lo schermo intero. Per regolare il volume, torna all’anteprima.',
      'Transizione ispirata alla TV analogica',
      [['Suono di sottofondo durante la lettura', 'Tieni aperta l’anteprima e riproduci il rumore a volume basso. Usa il comando di pausa dell’audio quando vuoi tornare al silenzio.']],
      [['L’effetto neve funziona a schermo intero senza audio?', 'Sì. Puoi aprire l’effetto visivo mentre la riproduzione dell’audio resta disattivata.']]
    ]
  }
);

const pl = editorial(
  'Podobne ekrany',
  ['Dlaczego nadal widać pasek przeglądarki?', 'Gdy przeglądarka nie udostępnia natywnego pełnego ekranu, scena zajmuje dostępny obszar strony. Kliknij lub dotknij obrazu albo naciśnij Esc, aby wrócić do podglądu.'],
  {
    error: [
      'Na niebieskim tle widać znak ostrzegawczy, komunikat i jasne linie. Obraz pozostaje nieruchomy, więc w kolejnych ujęciach wygląda tak samo.',
      'Sprawdź na pełnym ekranie, czy komunikat da się odczytać z miejsca przeznaczonego dla widza lub kamery.',
      'Symulowana awaria w filmie',
      [['Ćwiczenie dla zespołu pomocy technicznej', 'Pokaż komunikat na drugim monitorze. Poproś jedną osobę o opisanie obrazu i przejdź do omówienia pytań, które warto zadać przy zgłaszaniu awarii.']],
      [['Czy komunikat zmieni się po chwili?', 'Komunikat pozostaje taki sam podczas wyświetlania sceny. Możesz zaczekać z zakończeniem ujęcia do wybranego momentu.']]
    ],
    cracked: [
      'Jasne linie rozchodzą się z jednego punktu i tworzą wzór przypominający pęknięte szkło. Ciemne tło pozwala dostrzec także drobne odgałęzienia.',
      'Na pełnym ekranie sprawdź krawędzie obrazu i ustaw kadr tak, by zmieściły się w nim wybrane odgałęzienia.',
      'Rekwizyt do sceny upadku telefonu',
      [['Ujęcie przed upadkiem i po nim', 'Nagraj zwykły obraz na urządzeniu, a potem włącz efekt pęknięć bez przesuwania kamery. Ułatwi to dopasowanie ujęć na etapie montażu.']],
      [['Czy można przesunąć punkt, z którego biegną pęknięcia?', 'Wzór ma punkt początkowy w stałym miejscu. Możesz zmienić ustawienie kamery, aby umieścić go gdzie indziej w kadrze.']]
    ],
    radar: [
      'Zielona wiązka obraca się na tarczy i po kolei mija jasne znaczniki. Znaczniki pozostają na tych samych pozycjach przez cały cykl.',
      'Obejrzyj jeden obrót na pełnym ekranie, aby wybrać odpowiedni moment rozpoczęcia nagrania.',
      'Monitor w fikcyjnym centrum dowodzenia',
      [['Omówienie zasady skanowania', 'Wskaż nieruchome znaczniki, aby pokazać, w jakiej kolejności wiązka przechodzi przez różne obszary tarczy.']],
      [['Gdzie są przyciski animacji po przełączeniu na pełny ekran?', 'Wróć do podglądu, aby wstrzymać lub wznowić ruch wiązki.']]
    ],
    terminal: [
      'Dwa pola na ciemnym ekranie zawierają zielone linie, bloki i symbole. Treść pozostaje na swoim miejscu, co ułatwia montaż kolejnych ujęć.',
      'Sprawdź, czy w kadrze mieszczą się oba pola i cały tekst przy krawędziach.',
      'Panel za prowadzącym w materiale technicznym',
      [['Zbliżenie ekranu w krótkim filmie', 'Przejdź od ujęcia postaci do zbliżenia terminala. Kolejne podejścia możesz nagrać pod innym kątem z tą samą zawartością paneli.']],
      [['Czy znaki przesuwają się po ekranie?', 'Wiersze pozostają nieruchome. Jeśli chcesz pokazać poruszające się znaki, otwórz cyfrowy deszcz.']]
    ],
    call: [
      'Każdy kafelek pokazuje nazwę i inicjały wyliczone z wpisanego tekstu. Liczba od jednego do dziewięciu obejmuje także własny kafelek.',
      'Na pełnym ekranie sprawdź czytelność nazw. Żeby poprawić zapis którejś z nich, wróć do podglądu.',
      'Początek spotkania w materiale szkoleniowym',
      [['Porównanie rozmowy i spotkania zespołu', 'Najpierw nagraj układ dla dwóch osób, a później zwiększ liczbę uczestników. Użyj tych samych przykładowych nazw, aby zachować ciągłość ujęć.']],
      [['Jak powstają inicjały na kafelku?', 'Kafelek pokazuje pierwsze litery dwóch pierwszych wyrazów. Gdy wpiszesz jeden wyraz, pojawi się jedna litera.']]
    ],
    'update-blue': [
      'Pasek wypełnia się wraz ze wzrostem wartości procentowej. Ustawiony czas obejmuje odcinek od wartości początkowej do 100% i jest stosowany po ponownym uruchomieniu sceny.',
      'Śledź wartość na pełnym ekranie, aby dobrać procent widoczny na początku i końcu nagrania.',
      'Pokaz końcowej fazy aktualizacji',
      [['Krótkie ujęcie zmiany postępu', 'Ustaw wartość początkową tak, aby podczas ujęcia dało się zobaczyć kilka kolejnych wartości procentowych. Przy powtórce zachowaj te same ustawienia.']],
      [['Jakie wartości mogę wpisać?', 'Możesz wybrać od 1 do 240 minut oraz od 0 do 100 procent na starcie. Przycisk „Uruchom ponownie” zatwierdza obie wartości.']]
    ],
    'update-retro': [
      'Niebieskie tło w stylu Windows XP zawiera pasek postępu i procent. Przycisk ponownego uruchomienia stosuje wartość początkową oraz czas dojścia do 100%.',
      'Nagraj wybraną fazę aktualizacji w trybie pełnoekranowym, aby w kadrze pozostał sam motyw z paskiem postępu.',
      'Przejście w filmie o komputerach z początku lat 2000',
      [['Porównanie dwóch generacji systemu', 'Ustaw ten sam procent na starcie w scenach Windows XP i Windows 10. Pokaż je obok siebie, aby zwrócić uwagę na różnicę w wyglądzie.']],
      [['Czym różni się od ekranu startowego Windows XP?', 'Na ekranie aktualizacji ustawiasz czas i punkt startowy procentu. Ekran startowy pokazuje zapętloną animację ładowania.']]
    ],
    'update-silver': [
      'Na ciemnym tle widnieją nazwa Mac OS X, jasny pasek i wartość postępu. Po zatwierdzeniu ustawień procent biegnie od wybranego progu do 100%.',
      'Sprawdź na dużej powierzchni ekranu, czy jasny pasek dobrze odcina się od ciemnego otoczenia w ujęciu.',
      'Tło do filmu o starszych komputerach Mac',
      [['Ujęcie ukończonej aktualizacji', 'Ustaw 100% jako wartość początkową i naciśnij przycisk ponownego uruchomienia. Pełny pasek pozostanie widoczny podczas ustawiania kadru.']],
      [['Czy po otwarciu pełnego ekranu postęp zaczyna się od nowa?', 'Podgląd i pełny ekran korzystają z tego samego postępu. Żeby zacząć od nowa, wróć do podglądu i naciśnij „Uruchom ponownie”.']]
    ],
    'update-violet': [
      'Na fioletowym ekranie z nazwą Ubuntu 22.04 pasek i liczba pokazują ten sam postęp. Obie wartości zachowują się zgodnie z czasem ustawionym na przejście do 100%.',
      'W pełnym ekranie obejmij kadrem pasek i wartość procentową, jeżeli omawiasz oba wskaźniki.',
      'Graficzna aktualizacja w poradniku',
      [['Dwa etapy aktualizacji w jednym filmie', 'Pierwsze ujęcie zacznij od niskiej wartości. Przed drugim użyj ponownego uruchomienia i ustaw wartość bliską zakończenia.']],
      [['Co widać po osiągnięciu 100%?', 'Pasek pozostaje wypełniony, a wyświetlany procent się nie zmienia. Kolejny przebieg można rozpocząć przyciskiem „Uruchom ponownie”.']]
    ],
    'update-gray': [
      'Scena ChromeOS przedstawia postęp jako pasek i wartość procentową. Aktualny wynik jest taki sam w podglądzie i w trybie pełnoekranowym.',
      'Przy zbliżeniu sprawdź, czy w kadrze mieszczą się jednocześnie nazwa ChromeOS i wartość postępu.',
      'Krótkie ujęcie paska postępu',
      [['Pokaz na drugim ekranie', 'Przenieś okno na monitor przeznaczony dla widzów i dopiero potem otwórz pełny ekran. Na pierwszym monitorze możesz zostawić notatki.']],
      [['Co oznacza czas, jeśli zacznę od 60%?', 'Podana liczba minut to czas przejścia od 60 do 100%. Wstrzymanie zatrzymuje postęp do chwili wznowienia.']]
    ],
    'boot-xp': [
      'Na ciemnym tle pojawia się nazwa Windows XP i animowany pasek ładowania. Kolejne cykle paska powtarzają się, gdy scena jest uruchomiona.',
      'Obserwuj przez jeden cykl pasek na pełnym ekranie i wybierz moment, od którego zaczniesz nagranie.',
      'Początek filmu o komputerach sprzed lat',
      [['Przejście od uruchomienia do pulpitu', 'Nagraj animację i połącz ją z osobnym ujęciem wcześniej przygotowanego pulpitu. Zapętlony pasek pozostawia czas na ustawienie ostrości i kadru.']],
      [['Czy można ustawić czas lub procent ładowania?', 'Scena startowa odtwarza stały cykl. Czas trwania i procent początkowy możesz ustawić w scenie aktualizacji Windows XP.']]
    ],
    bounce: [
      'Logo TELA przemieszcza się po ciemnym tle i zmienia kierunek ruchu. Przycisk pod podglądem pozwala wstrzymać animację oraz ją wznowić.',
      'Sprawdź cały obszar pełnego ekranu, ponieważ logo może dotrzeć również do rogów kadru.',
      'Ruchome tło w przerwie prezentacji',
      [['Boczny monitor przy stanowisku wystawowym', 'Wyświetl logo na bocznym ekranie w krótkiej przerwie. Główny monitor pozostanie do dyspozycji osoby prowadzącej pokaz.']],
      [['Czy logo porusza się zaraz po otwarciu strony?', 'Jeśli masz włączone ograniczenie animacji, scena zacznie w trybie pauzy. Kliknij przycisk wznowienia, aby uruchomić ruch.']]
    ],
    clock: [
      'Zegar pokazuje kolejno godziny, minuty i sekundy w formacie 24-godzinnym. Pauza zatrzymuje ostatnie wskazanie, a wznowienie przywraca bieżący czas urządzenia.',
      'Sprawdź czytelność wszystkich cyfr z przewidzianego miejsca. Aby zatrzymać wskazanie, wróć do podglądu.',
      'Godzina czytelna na drugim monitorze',
      [
        ['Godzina zakończenia przerwy', 'Ogłoś powrót na przykład o 14:35 i pozostaw widoczny zegar. Uczestnicy mogą porównać aktualną godzinę z ustaloną porą wznowienia spotkania.'],
        ['Stała godzina podczas nagrywania', 'Zatrzymaj zegar, gdy pojawi się właściwa godzina, i otwórz pełny ekran. Te same cyfry pozostaną widoczne w kolejnych ujęciach.']
      ],
      [
        ['Czy zegar może odliczać czas do zera?', 'Ekran pokazuje bieżącą godzinę urządzenia. Możesz ustalić godzinę końca przerwy i porównywać ją ze wskazaniem zegara.'],
        ['Czy wznowienie odlicza od zatrzymanej sekundy?', 'Przycisk wznowienia przywraca bieżący czas urządzenia. Zatrzymane wskazanie służy do zachowania stałych cyfr w inscenizacji lub na zdjęciu.']
      ]
    ],
    quotes: [
      'Na jasnym tle wyświetla się jedna krótka myśl. Przycisk pod podglądem przełącza na kolejną pozycję z gotowego zestawu.',
      'Przed pozostawieniem napisu na ekranie sprawdź, czy można go odczytać także z końca pomieszczenia.',
      'Pytanie do dyskusji w trakcie prezentacji',
      [['Chwila na przeczytanie myśli', 'Pozostaw zdanie widoczne przez krótki czas. Poproś uczestników o zapamiętanie fragmentu, do którego odniosą się po przerwie.']],
      [['Czy mogę wpisać własny tekst?', 'Ekran korzysta z gotowej listy myśli. Przyciskiem pod podglądem wybierzesz następną pozycję.']]
    ],
    bars: [
      'Pionowe pasy barwne wypełniają tło, a pośrodku widnieje napis „Brak sygnału”. Obraz zachowuje stały układ po otwarciu pełnego ekranu.',
      'Podczas filmowania sprawdź, czy w kadrze mieści się napis i skrajne pasy.',
      'Fikcyjna przerwa w transmisji',
      [['Ekran początkowy przed projekcją', 'Pokaż pasy w momencie rozpoczęcia pokazu i przełącz się do właściwej prezentacji po krótkim wprowadzeniu.']],
      [['Czy te pasy służą do kalibracji monitora?', 'Pasy są wzorem używanym w scenie. Do kalibracji wybierz wzorzec i metodę pomiaru odpowiednie dla danego monitora.']]
    ],
    rain: [
      'Na ciemnym tle opadają kolumny zielonych znaków. Kolejne kolumny zaczynają ruch w innych momentach, a zapisane sekwencje powtarzają się.',
      'Wybierz taki kadr na pełnym ekranie, aby wzór znaków nie odwracał uwagi od głównego przedmiotu ujęcia.',
      'Animowane tło na ekran widoczny w filmie',
      [['Tło podczas spotkania o technologii', 'Uruchom cyfrowy deszcz na monitorze ustawionym z boku. Na głównym ekranie pozostaw prezentację.']],
      [['Czy mogę zmienić znaki na własny tekst?', 'Kolumny korzystają z zapisanych znaków. Przycisk pod podglądem wstrzymuje lub wznawia ich ruch.']]
    ],
    'white-noise': [
      'Czarno-biały wzór śnieżenia można wyświetlać niezależnie od dźwięku. Gdy włączysz odtwarzanie, biały szum powstaje w przeglądarce na urządzeniu.',
      'Przed otwarciem pełnego ekranu odsłuchaj dźwięk przy niskiej głośności. Wróć do podglądu, gdy chcesz zmienić ustawienie dźwięku.',
      'Przejście nawiązujące do telewizji analogowej',
      [['Jednostajne tło podczas czytania', 'Zostaw włączony podgląd i odtwórz szum przy niskiej głośności. Po czytaniu wstrzymaj dźwięk przyciskiem obok obrazu.']],
      [['Czy mogę wyświetlić śnieżenie na pełnym ekranie bez dźwięku?', 'Tak. Otwórz obraz, pozostawiając odtwarzanie dźwięku wyłączone.']]
    ]
  }
);

const sv = editorial(
  'Liknande skärmbilder',
  ['Varför syns fortfarande webbläsarens verktygsfält?', 'Om webbläsarens helskärmsläge inte är tillgängligt fyller scenen ytan som går att använda i fönstret. Klicka eller tryck på bilden eller tryck på Esc för att återgå till förhandsvisningen.'],
  {
    error: [
      'Den blå bakgrunden visar en varningssymbol, ett felmeddelande och ljusa linjer. Bilden ligger kvar och ser likadan ut under flera tagningar.',
      'Kontrollera i helskärm att texten går att läsa från tittarens eller kamerans avstånd.',
      'Påhittad programkrasch i en film',
      [['Övning för teknisk support', 'Visa meddelandet på en extra bildskärm. Be någon beskriva vad som syns innan gruppen diskuterar vilka frågor en supporttekniker kan ställa.']],
      [['Ändras felmeddelandet efter en stund?', 'Texten är densamma under hela visningen. Du kan därför vänta med att klippa till nästa scen tills du är redo.']]
    ],
    cracked: [
      'Ljusa linjer går ut från en fast punkt och bildar ett mönster av sprucket glas. Den mörka ytan gör även tunna grenar lättare att se.',
      'Titta på de yttre sprickorna i helskärm och kontrollera att de syns i den valda kameravinkeln.',
      'Rekvisita när en telefon tappas',
      [['Bild före och efter stöten', 'Filma först enhetens vanliga skärm och visa sedan sprickorna utan att flytta kameran. Då blir det lättare att passa ihop tagningarna i klippningen.']],
      [['Går det att flytta punkten där sprickorna möts?', 'Punkten är fast i motivet. Ändra kamerans utsnitt om du vill ha den på en annan plats i filmen.']]
    ],
    radar: [
      'En grön sektor roterar över en cirkelformad skala och passerar samma ljusa markörer. Markörerna ligger kvar på sina platser under varje varv.',
      'Följ svepet ett varv i helskärm för att se var du vill börja spela in.',
      'Skärm i ett fiktivt kontrollrum',
      [['Genomgång av ett roterande svep', 'Följ de fasta markörerna när du visar hur svepet i tur och ordning passerar olika delar av cirkeln.']],
      [['Var ändrar jag rörelsen i helskärmsläge?', 'Gå tillbaka till förhandsvisningen för att pausa eller fortsätta svepet.']]
    ],
    terminal: [
      'Två paneler visar gröna rader, block och symboler på en mörk yta. Innehållet ligger kvar medan du filmar från olika vinklar.',
      'Se till att båda panelerna ryms i utsnittet och att tecknen vid kanterna syns.',
      'Bakgrund i ett teknikklipp',
      [['Närbild av en skärm i en kortfilm', 'Klipp från en person i rummet till en närbild av terminalen. Du kan spela in flera tagningar med samma innehåll i panelerna.']],
      [['Rullar tecknen automatiskt?', 'Raderna ligger kvar på sina platser. Prova digitalt regn om du vill visa tecken i rörelse.']]
    ],
    call: [
      'Varje ruta visar ett namn och initialerna som beräknas från det. Rutorna ordnas efter antalet deltagare, där din egen ruta ingår.',
      'Kontrollera i helskärm att alla önskade namn syns tydligt. Återgå till förhandsvisningen om något namn behöver ändras.',
      'Mötesstart i ett utbildningsklipp',
      [['Jämför ett samtal med ett gruppmöte', 'Spela först in en vy med två deltagare och välj sedan fler deltagare för en andra tagning. Behåll de första exempelnamnen för att ge klippen ett naturligt samband.']],
      [['Hur väljs initialerna i rutorna?', 'Rutan visar första bokstaven i vart och ett av de två första orden. Om namnet består av ett ord visas en bokstav.']]
    ],
    'update-blue': [
      'Stapeln fylls i takt med att procenttalet stiger. Tidsinställningen gäller förloppet från startprocenten till 100 procent och används efter omstart.',
      'Följ procenttalet i helskärm för att välja var din tagning ska börja och sluta.',
      'Visa slutet av en uppdatering',
      [['Spela in en kort förändring i procent', 'Välj ett startvärde som ger utrymme för flera procentsteg under tagningen. Använd samma inställningar när du tar om klippet.']],
      [['Vilka värden går att ställa in?', 'Tiden kan vara 1 till 240 minuter och startprocenten kan vara 0 till 100. Använd ”Starta om” för att tillämpa inställningarna.']]
    ],
    'update-retro': [
      'En stapel och ett procenttal visas på den blå ytan i Windows XP-stil. När du startar om används den valda procenten och tiden fram till 100 procent.',
      'Låt den önskade fasen löpa i helskärm så att reglagen hålls utanför inspelningen.',
      'Övergång i en film om äldre datorer',
      [['Jämför gränssnitt från två Windows-generationer', 'Välj samma startprocent i scenerna för Windows XP och Windows 10. Visa dem efter varandra så att skillnaderna i utseende blir lätta att se.']],
      [['Vad skiljer scenen från startskärmen för Windows XP?', 'Uppdateringen har ett procenttal och en inställbar tid. Startskärmen visar en laddningsanimation som upprepas.']]
    ],
    'update-silver': [
      'På den mörka ytan syns namnet Mac OS X, en ljus stapel och ett procenttal. Med de valda inställningarna går stapeln från startvärdet till 100 procent.',
      'Kontrollera i helskärm att stapeln syns tydligt i det ljus som kommer att finnas vid inspelningen.',
      'Skärmbild för en film om äldre Mac-datorer',
      [['Visa en full stapel som slutbild', 'Välj 100 procent som startvärde och starta om. Den fulla stapeln ligger kvar medan du förbereder tagningen.']],
      [['Börjar stapeln om när jag öppnar helskärm?', 'Förhandsvisningen och helskärmen följer samma förlopp. Om du vill börja om går du tillbaka och väljer ”Starta om”.']]
    ],
    'update-violet': [
      'På den lila ytan visas Ubuntu 22.04 ovanför en stapel och ett procenttal. Båda indikatorerna följer den inställda tiden fram till 100 procent.',
      'Se till att både siffran och den fyllda delen av stapeln går att se när du demonstrerar förloppet.',
      'Grafisk uppdatering i ett instruktionsklipp',
      [['Två faser i samma genomgång', 'Spela först in med ett lågt startvärde. Starta sedan om närmare 100 procent för att filma den sista fasen.']],
      [['Vad händer när värdet når 100 procent?', 'Stapeln förblir fylld och procenttalet står kvar. Välj ”Starta om” för att köra ett nytt förlopp.']]
    ],
    'update-gray': [
      'ChromeOS-scenen visar ett förlopp som en stapel och ett procenttal. När du växlar från förhandsvisning till helskärm behåller scenen det aktuella värdet.',
      'Välj ett utsnitt som visar såväl namnet ChromeOS som procenttalet.',
      'Nära bild av ett uppdateringsförlopp',
      [['Demonstration på en andra bildskärm', 'Flytta fönstret till skärmen som publiken ska se innan du öppnar helskärm. Ha dina anteckningar kvar på den första skärmen.']],
      [['Vad anger tiden om jag börjar vid 60 procent?', 'Minuterna avser förloppet från 60 till 100 procent. När du pausar stannar simuleringen tills du fortsätter.']]
    ],
    'boot-xp': [
      'Namnet Windows XP visas tillsammans med en animerad stapel på mörk bakgrund. Stapeln upprepar laddningssekvensen så länge scenen körs.',
      'Följ ett varv av laddningen i helskärm och välj var i cykeln du vill börja spela in.',
      'Inledning till ett klipp om äldre datorer',
      [['Klipp från startskärm till skrivbord', 'Spela in laddningen och klipp sedan till ett separat, förberett skrivbord. Den upprepade animationen ger tid att ställa in kameran för första tagningen.']],
      [['Kan jag ställa in tid och procenttal?', 'Startskärmen följer en fast loop. Du kan ställa in en varaktighet och startprocent i uppdateringsscenen för Windows XP.']]
    ],
    bounce: [
      'TELA-loggan rör sig över en mörk yta och ändrar riktning längs sin bana. Knapparna under förhandsvisningen pausar och fortsätter rörelsen.',
      'Titta på hela ytan i helskärm eftersom loggan även kan nå ut till bildens hörn.',
      'Rörlig pausbild för ett föredrag',
      [['Sidoskärm vid en monter', 'Låt loggan röra sig på skärmen vid sidan av montern medan huvudskärmen används för information och demonstrationer.']],
      [['Börjar loggan röra sig direkt när sidan öppnas?', 'Om enheten är inställd på att minska rörelser börjar scenen i pausläge. Välj ”Fortsätt” för att starta animationen.']]
    ],
    clock: [
      'Vippklockan visar timmar, minuter och sekunder från vänster till höger i 24-timmarsformat. När du pausar ligger den senaste visningen kvar och när du fortsätter visas enhetens aktuella tid igen.',
      'Kontrollera att du kan läsa alla siffror från den tänkta platsen i rummet. När du vill pausa går du tillbaka till förhandsvisningen.',
      'Synlig klocka på en extra bildskärm',
      [
        ['Håll koll på pausen', 'Bestäm till exempel att ni börjar igen klockan 14.35 och låt klockan stå framme. Deltagarna kan jämföra den aktuella tiden med den överenskomna tiden.'],
        ['Samma klockslag i flera tagningar', 'Pausa när rätt tid visas och öppna helskärmsläget. Då syns samma siffror i varje tagning.']
      ],
      [
        ['Kan klockan räkna ned till noll?', 'Klockan visar enhetens aktuella tid. För en paus kan du bestämma ett klockslag för återstart och jämföra det med den visade tiden.'],
        ['Fortsätter klockan från den pausade sekunden?', 'Med ”Fortsätt” visas den aktuella tiden igen. Den pausade tiden fungerar som en stillbild.']
      ]
    ],
    quotes: [
      'En kort text visas ensam på en ljus bakgrund. Med knappen under förhandsvisningen kan du gå vidare till nästa text i urvalet.',
      'Kontrollera att texten går att läsa från rummets bakre del innan du lämnar den i helskärm.',
      'Starta ett samtal under en presentation',
      [['Lässtund för en grupp', 'Låt tanken stå kvar en kort stund. Be deltagarna att välja en formulering att prata om när pausen är slut.']],
      [['Kan jag skriva in ett eget citat?', 'Scenen använder de inbyggda texterna. Gå vidare med knappen under förhandsvisningen för att välja en annan text.']]
    ],
    bars: [
      'Vertikala färgfält fyller ytan bakom meddelandet ”Ingen signal”, som visas mitt på skärmen. Motivet är stilla både i förhandsvisningen och i helskärm.',
      'Kontrollera att meddelandet och färgfälten längst ut ryms när du riktar kameran mot skärmen.',
      'Fiktivt signalavbrott i ett filmklipp',
      [['Inledning till en visning', 'Visa färgfälten när publiken kommer in. Växla till presentationen eller filmen när visningen ska börja.']],
      [['Går färgfälten att använda för att kalibrera en skärm?', 'Fälten ingår i en visuell scen. Använd ett lämpligt referensmönster och en mätmetod för att kalibrera en skärm.']]
    ],
    rain: [
      'Gröna tecken faller i kolumner mot mörk bakgrund. Kolumnernas rörelser är förskjutna och mönstret upprepas medan animationen körs.',
      'Välj ett utsnitt där de rörliga tecknen håller sig i bakgrunden och huvudmotivet fortfarande syns tydligt.',
      'Rörlig bakgrund i ett videoklipp',
      [['Sidobild vid ett teknikevenemang', 'Visa teckenregnet på en bildskärm vid sidan av rummet. Låt bilden från presentationen ligga kvar på huvudskärmen.']],
      [['Kan jag använda egna ord i teckenregnet?', 'Kolumnerna använder förvalda tecken. Du kan pausa och fortsätta rörelsen med knapparna under förhandsvisningen.']]
    ],
    'white-noise': [
      'Den svartvita bilden går att visa oberoende av ljudet. Webbläsaren skapar det vita bruset lokalt på enheten när du väljer att spela upp det.',
      'Lyssna en stund på låg volym innan du öppnar helskärm. Gå tillbaka till förhandsvisningen för att ändra volymen.',
      'Övergång med analog TV-känsla',
      [['Jämnt bakgrundsljud vid läsning', 'Låt förhandsvisningen vara öppen och spela upp bruset på låg volym. Pausa ljudet när du vill ha tyst igen.']],
      [['Kan bilden visas i helskärm utan ljud?', 'Ja. Öppna bilden medan ljuduppspelningen är avstängd.']]
    ]
  }
);

export default { de, fr, it, pl, sv };
