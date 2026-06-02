/* =====================================================================
   MODULE C2.1 — Communiquer, se souvenir, s'affirmer
   Niveau C2 (CECRL) — maîtrise. Thèmes : communication et médias,
   histoire et souvenirs, sentiments/mensonges/forces et faiblesses,
   années scolaires, carrières et métiers. Registre soutenu, quasi natif.
   ===================================================================== */
window.MODULE_C21 = {
  id: "c2-1",
  titre: "C2.1 — Communiquer, se souvenir, s'affirmer",
  sousTitre: "Kommunikation, Erinnerung, Persönlichkeit",
  niveau: "C2",
  description:
    "On vise la maîtrise : médias et communication, histoire et mémoire, " +
    "sentiments, mensonges, forces et faiblesses, les années d'école, " +
    "et les parcours de carrière. Nuances, idiomatismes et registre soutenu.",
  couleur: "#047857",
  lecons: [
    {
      id: "c2t01",
      vocCoursDE: [
        "Auf C2-Niveau betrachtest du **Kommunikation** und **Medien** in ihrer ganzen Komplexität. Schlüsselwörter sind *die Massenmedien*, *die Meinungsbildung* (la formation de l'opinion), *die Glaubwürdigkeit* (la crédibilité), *die Reizüberflutung* (la surcharge d'informations), *die Filterblase* (la bulle de filtres).",
        "Es geht um **abstrakte und kritische** Begriffe: *die Manipulation*, *die Objektivität*, *die Quellenkritik* (l'analyse critique des sources), *die Reichweite* (la portée). Beachte feine Unterschiede wie *die Information* vs. *die Desinformation* und *die Nachricht* vs. *die Meldung*.",
        "Tipp: Erörtere, wie soziale Medien unsere Meinungsbildung beeinflussen, und beziehe differenziert Stellung. Eine ausgewogene, mit Beispielen belegte Erörterung ist die anspruchsvollste Textsorte – und das Kernstück des C2-Niveaus."
      ], numero: 1, titre: "Communication et médias", titreDE: "Kommunikation und Medien",
      theme: "Communication et médias", duree: 65,
      objectifs: ["Analyser le rôle des médias avec nuance", "Argumenter de façon structurée"],
      grammairePoints: ["Style nominal", "Connecteurs argumentatifs"],
      vocabulaire: [
        { de: "die Berichterstattung", fr: "la couverture médiatique", ex: "Die Berichterstattung war einseitig." },
        { de: "die Glaubwürdigkeit", fr: "la crédibilité", ex: "Die Glaubwürdigkeit der Quelle ist fraglich." },
        { de: "die Meinungsbildung", fr: "la formation de l'opinion", ex: "Medien beeinflussen die Meinungsbildung." },
        { de: "die Reizüberflutung", fr: "la surcharge de stimuli", ex: "Wir leiden unter Reizüberflutung." },
        { de: "verzerren", fr: "déformer", ex: "Schlagzeilen verzerren oft die Fakten." },
        { de: "die Filterblase", fr: "la bulle de filtres", ex: "Algorithmen erzeugen Filterblasen." },
        { de: "hinterfragen", fr: "remettre en question", ex: "Man sollte Informationen hinterfragen." },
        { de: "die Reichweite", fr: "la portée / l'audience", ex: "Die Reichweite ist enorm gestiegen." }
      ],
      grammaire: [
        { titre: "Argumenter en style soutenu", intro: "Au C2, l'écrit privilégie le style nominal et des connecteurs précis pour articuler une argumentation dense.",
          tableau: { entetes: ["Fonction", "Tournure", "Exemple"], lignes: [["thèse", "Es ist unbestreitbar, dass", "Es ist unbestreitbar, dass Medien prägen."], ["nuance", "einerseits … andererseits", "einerseits informativ, andererseits manipulativ"], ["concession", "wenngleich", "wenngleich umstritten"], ["conséquence", "demzufolge", "Demzufolge sinkt das Vertrauen."]] },
          note: "« wenngleich » (bien que) et « demzufolge » (par conséquent) relèvent d'un registre écrit très soutenu." }
      ],
      dialogue: {
        titre: "Medienkritik", lieu: "Redaktion",
        lignes: [
          { loc: "Redakteurin", de: "Wie bewahren wir unsere Glaubwürdigkeit in Zeiten der Reizüberflutung?", fr: "Comment préserver notre crédibilité à l'ère de la surcharge informationnelle ?" },
          { loc: "Journalist", de: "Indem wir Fakten konsequent prüfen und Quellen offenlegen.", fr: "En vérifiant rigoureusement les faits et en révélant nos sources." },
          { loc: "Redakteurin", de: "Und die Gefahr der Filterblasen?", fr: "Et le danger des bulles de filtres ?" },
          { loc: "Journalist", de: "Die lässt sich nur durch bewusste Vielfalt entschärfen.", fr: "On ne peut le désamorcer que par une diversité consciente." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie bewahrt man Glaubwürdigkeit?", options: ["Durch Faktenprüfung und Quellenoffenlegung", "Durch mehr Werbung", "Durch Schlagzeilen"], correct: 0, explication: "« Fakten prüfen und Quellen offenlegen »." },
        { type: "qcm", consigne: "Choisissez (concession soutenue).", question: "Die These ist plausibel, ___ umstritten.", options: ["wenngleich", "weil", "damit", "sodass"], correct: 0, explication: "wenngleich = bien que (registre soutenu)." },
        { type: "trou", consigne: "Complétez (conséquence soutenue).", texte: "Die Quelle war unseriös; {0} sank das Vertrauen.", accepte: [["demzufolge"]], indice: "par conséquent = demzufolge" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Glaubwürdigkeit", droite: "la crédibilité" }, { gauche: "verzerren", droite: "déformer" }, { gauche: "hinterfragen", droite: "remettre en question" }, { gauche: "die Reichweite", droite: "la portée" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Argumentez en 3 phrases sur l'influence des médias (style soutenu, connecteurs).", attendus: ["Medien", "andererseits"], modele: "Es ist unbestreitbar, dass Medien die Meinungsbildung prägen. Einerseits informieren sie, andererseits drohen Verzerrung und Filterblasen. Demzufolge ist kritisches Hinterfragen unerlässlich." }
      ]
    },
    {
      id: "c2t02",
      vocCoursDE: [
        "Dieses Thema verbindet **Geschichte** mit persönlicher und kollektiver **Erinnerung**. Schlüsselwörter sind *die Erinnerung* (le souvenir), *das Gedächtnis* (la mémoire), *die Vergangenheitsbewältigung* (le travail de mémoire), *das Gedenken* (la commémoration), *die Zeitzeugen* (les témoins de l'époque).",
        "Auf C2 unterscheidest du feinste Nuancen: *sich erinnern* (se souvenir), *gedenken* (+ Genitiv, commémorer solennellement), *verdrängen* (refouler), *aufarbeiten* (assumer, élucider le passé). Das Wort *die Vergangenheitsbewältigung* ist ein zentraler deutscher Begriff.",
        "Tipp: Reflektiere über die Frage, wie eine Gesellschaft mit ihrer schwierigen Vergangenheit umgehen sollte. Solche ethisch und historisch komplexen Überlegungen differenziert zu formulieren, ist die Essenz des C2-Niveaus."
      ], numero: 2, titre: "Histoire et souvenirs", titreDE: "Geschichte und Erinnerungen",
      theme: "Histoire et souvenirs", duree: 65,
      objectifs: ["Évoquer la mémoire collective", "Nuancer un récit du passé"],
      grammairePoints: ["Temps du passé", "Konjunktiv (recul)"],
      vocabulaire: [
        { de: "die Erinnerung", fr: "le souvenir", ex: "Die Erinnerung verblasst mit der Zeit." },
        { de: "das Gedächtnis", fr: "la mémoire", ex: "Das kollektive Gedächtnis prägt eine Nation." },
        { de: "die Vergangenheitsbewältigung", fr: "le travail de mémoire", ex: "Vergangenheitsbewältigung ist ein langer Prozess." },
        { de: "verklären", fr: "idéaliser", ex: "Man neigt dazu, das Vergangene zu verklären." },
        { de: "prägen", fr: "marquer / façonner", ex: "Diese Zeit hat mich tief geprägt." },
        { de: "das Mahnmal", fr: "le mémorial / monument", ex: "Das Mahnmal erinnert an die Opfer." },
        { de: "verdrängen", fr: "refouler", ex: "Schmerzhafte Erinnerungen werden verdrängt." },
        { de: "die Zeitzeugin", fr: "la témoin (de l'époque)", ex: "Die Zeitzeugin berichtete eindrücklich." }
      ],
      grammaire: [
        { titre: "Raconter avec recul et nuance", intro: "Le récit du passé combine les temps (Präteritum, Plusquamperfekt) et, pour la distance critique, le Konjunktiv (discours rapporté, irréel).",
          tableau: { entetes: ["Outil", "Effet", "Exemple"], lignes: [["Präteritum", "récit", "Damals herrschte Aufbruchstimmung."], ["Plusquamperfekt", "antériorité", "Was zuvor geschehen war, prägte alles."], ["Konjunktiv I", "distance/citation", "Zeitzeugen sagen, es sei hart gewesen."], ["Konjunktiv II", "irréel/recul", "Ohne die Mauer wäre vieles anders."]] },
          note: "Le mélange maîtrisé de ces formes signale le niveau C2 dans un texte de mémoire." }
      ],
      dialogue: {
        titre: "Kollektives Gedächtnis", lieu: "Gedenkstätte",
        lignes: [
          { loc: "Schülerin", de: "Warum ist Erinnerung so wichtig?", fr: "Pourquoi la mémoire est-elle si importante ?" },
          { loc: "Historiker", de: "Weil eine Gesellschaft, die ihre Vergangenheit verdrängt, sie zu wiederholen droht.", fr: "Parce qu'une société qui refoule son passé risque de le répéter." },
          { loc: "Schülerin", de: "Verklären wir das Vergangene nicht manchmal?", fr: "N'idéalisons-nous pas parfois le passé ?" },
          { loc: "Historiker", de: "Durchaus. Gerade deshalb braucht es kritische Aufarbeitung.", fr: "Tout à fait. C'est précisément pourquoi il faut un travail critique." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Welche Gefahr nennt der Historiker?", options: ["Die Vergangenheit zu wiederholen", "Zu viel zu erinnern", "Zu viele Mahnmale"], correct: 0, explication: "« … sie zu wiederholen droht »." },
        { type: "qcm", consigne: "Choisissez (Konjunktiv I, citation).", question: "Zeitzeugen sagen, es ___ hart gewesen.", options: ["sei", "ist", "war", "wäre"], correct: 0, explication: "discours rapporté → Konjunktiv I : sei." },
        { type: "trou", consigne: "Complétez (irréel passé).", texte: "Ohne diese Erfahrung {0} ich ein anderer Mensch geworden.", accepte: [["wäre"]], indice: "werden → sein → wäre geworden" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "das Gedächtnis", droite: "la mémoire" }, { gauche: "prägen", droite: "façonner" }, { gauche: "verdrängen", droite: "refouler" }, { gauche: "das Mahnmal", droite: "le mémorial" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Expliquez pourquoi le travail de mémoire est important (temps du passé + nuance).", attendus: ["Erinnerung", "Vergangenheit"], modele: "Die Erinnerung bewahrt, was zuvor geschehen war. Eine Gesellschaft, die ihre Vergangenheit verdrängt, läuft Gefahr, Fehler zu wiederholen. Deshalb ist kritische Aufarbeitung unverzichtbar." }
      ]
    },
    {
      id: "c2t03",
      vocCoursDE: [
        "Dieses Thema erkundet die menschliche **Persönlichkeit** in ihrer Tiefe: Gefühle, Lügen, Stärken und Schwächen. Schlüsselwörter sind *die Eigenschaft*, *die Stärke / die Schwäche*, *die Aufrichtigkeit* (la sincérité), *die Notlüge* (le mensonge pieux), *die Selbsterkenntnis* (la connaissance de soi).",
        "Auf C2 verfügst du über ein reiches, **nuanciertes** Wortfeld für Charakterzüge: *einfühlsam* (empathique), *nachtragend* (rancunier), *gewissenhaft* (consciencieux), *impulsiv*, *zurückhaltend* (réservé). Viele lassen sich mit Suffixen und Vorsilben ableiten.",
        "Tipp: Charakterisiere eine vielschichtige Person (real oder fiktiv) mit ihren Widersprüchen. Eine differenzierte Charakterisierung, die auch Zwischentöne erfasst, zeigt die sprachliche Meisterschaft des C2-Niveaus."
      ], numero: 3, titre: "Sentiments et personnalité", titreDE: "Gefühle, Lügen, Stärken und Schwächen",
      theme: "Sentiments, mensonges, forces et faiblesses", duree: 65,
      objectifs: ["Décrire des traits de caractère avec finesse", "Exprimer l'ambivalence"],
      grammairePoints: ["Adjectifs nuancés", "Konjunktiv II (hypothèse)"],
      vocabulaire: [
        { de: "die Aufrichtigkeit", fr: "la sincérité", ex: "Aufrichtigkeit schafft Vertrauen." },
        { de: "die Notlüge", fr: "le pieux mensonge", ex: "Eine Notlüge kann Schlimmeres verhindern." },
        { de: "verletzlich", fr: "vulnérable", ex: "Niemand zeigt sich gern verletzlich." },
        { de: "die Selbstüberschätzung", fr: "la surestime de soi", ex: "Selbstüberschätzung führt zu Fehlern." },
        { de: "einfühlsam", fr: "empathique", ex: "Sie ist sehr einfühlsam." },
        { de: "die Schwäche", fr: "la faiblesse", ex: "Jeder hat seine Schwächen." },
        { de: "nachtragend", fr: "rancunier", ex: "Er ist überhaupt nicht nachtragend." },
        { de: "die Zerrissenheit", fr: "le déchirement intérieur", ex: "Eine innere Zerrissenheit quälte ihn." }
      ],
      grammaire: [
        { titre: "Nuancer caractère et hypothèse", intro: "Pour décrire l'ambivalence, on combine adjectifs nuancés et hypothèses (Konjunktiv II).",
          tableau: { entetes: ["Idée", "Moyen", "Exemple"], lignes: [["atténuation", "eher / tendenziell", "Er ist eher zurückhaltend."], ["ambivalence", "zwar … doch", "zwar ehrlich, doch schroff"], ["hypothèse", "an seiner Stelle würde ich", "An seiner Stelle würde ich schweigen."], ["irréel", "wenn … wäre", "Wäre er ehrlicher, hätte er Freunde."]] },
          note: "« Wäre er ehrlicher, … » : la condition irréelle peut commencer par le verbe (sans « wenn »)." }
      ],
      dialogue: {
        titre: "Über Ehrlichkeit", lieu: "Gespräch",
        lignes: [
          { loc: "Anna", de: "Ist eine Notlüge manchmal vertretbar?", fr: "Un pieux mensonge est-il parfois défendable ?" },
          { loc: "Ben", de: "Vielleicht, wenn sie jemanden vor Schmerz bewahrt.", fr: "Peut-être, si elle épargne une douleur à quelqu'un." },
          { loc: "Anna", de: "Und wo liegt die Grenze?", fr: "Et où est la limite ?" },
          { loc: "Ben", de: "Wäre ich konsequent, würde ich immer die Wahrheit sagen – doch das Leben ist komplexer.", fr: "Si j'étais conséquent, je dirais toujours la vérité — mais la vie est plus complexe." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wann hält Ben eine Notlüge für vertretbar?", options: ["Wenn sie vor Schmerz bewahrt", "Immer", "Nie"], correct: 0, explication: "« wenn sie jemanden vor Schmerz bewahrt »." },
        { type: "qcm", consigne: "Choisissez (irréel sans wenn).", question: "___ ich ehrlicher, hätte ich es gesagt.", options: ["Wäre", "Bin", "War", "Sei"], correct: 0, explication: "condition irréelle avec inversion : Wäre ich…" },
        { type: "trou", consigne: "Complétez (atténuation).", texte: "Er ist {0} zurückhaltend als schüchtern. (plutôt)", accepte: [["eher"]], indice: "plutôt = eher" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Aufrichtigkeit", droite: "la sincérité" }, { gauche: "verletzlich", droite: "vulnérable" }, { gauche: "einfühlsam", droite: "empathique" }, { gauche: "nachtragend", droite: "rancunier" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Décrivez une force et une faiblesse de votre caractère avec nuance (zwar … doch).", attendus: ["zwar", "Schwäche"], modele: "Zwar bin ich ehrgeizig, doch neige ich manchmal zur Selbstüberschätzung. Meine Stärke ist, dass ich einfühlsam bin und gut zuhören kann." }
      ]
    },
    {
      id: "c2t04",
      vocCoursDE: [
        "Dieses Thema blickt reflektiert auf die **Schuljahre** zurück. Schlüsselwörter sind *die Schulzeit*, *prägen* (marquer, façonner), *die Erziehung* (l'éducation), *der Bildungsweg* (le parcours scolaire), *die Chancengleichheit* (l'égalité des chances), *der Leistungsdruck* (la pression de la performance).",
        "Auf C2 geht es nicht nur um Erinnerungen, sondern um eine **kritische Bewertung** des Bildungssystems: *fördern* (encourager) vs. *überfordern* (surmener), *die Bildungsgerechtigkeit*, *das Potenzial entfalten* (développer le potentiel).",
        "Tipp: Erörtere, was eine gute Schule ausmacht und woran heutige Bildungssysteme scheitern. Bildungsbiografie und gesellschaftliche Analyse zu verbinden, ist eine typische, anspruchsvolle C2-Aufgabe."
      ], numero: 4, titre: "Les années scolaires", titreDE: "Schuljahre",
      theme: "Les années scolaires", duree: 60,
      objectifs: ["Porter un regard critique sur l'école", "Comparer des systèmes éducatifs"],
      grammairePoints: ["Comparaison", "Subordonnées"],
      vocabulaire: [
        { de: "der Bildungsweg", fr: "le parcours scolaire", ex: "Jeder Bildungsweg ist individuell." },
        { de: "die Chancengleichheit", fr: "l'égalité des chances", ex: "Chancengleichheit bleibt ein Ideal." },
        { de: "der Notendruck", fr: "la pression des notes", ex: "Der Notendruck ist enorm." },
        { de: "fördern", fr: "encourager / soutenir", ex: "Talente sollte man früh fördern." },
        { de: "die Begabung", fr: "le don / le talent", ex: "Ihre musikalische Begabung fiel früh auf." },
        { de: "auswendig lernen", fr: "apprendre par cœur", ex: "Reines Auswendiglernen bringt wenig." },
        { de: "die Reife", fr: "la maturité", ex: "Bildung fördert auch die persönliche Reife." },
        { de: "scheitern", fr: "échouer", ex: "Am System zu scheitern ist tragisch." }
      ],
      grammaire: [
        { titre: "Comparer et critiquer", intro: "On compare des systèmes avec le comparatif/superlatif et on structure la critique par des subordonnées.",
          tableau: { entetes: ["Fonction", "Moyen", "Exemple"], lignes: [["comparaison", "im Vergleich zu", "Im Vergleich zu früher …"], ["gradation", "je … desto", "Je früher man fördert, desto besser."], ["concession", "obgleich", "obgleich reformiert, noch unfair"], ["restriction", "insofern, als", "Es ist gut, insofern es fördert."]] },
          note: "« obgleich » et « insofern, als » sont des conjonctions soutenues (verbe à la fin)." }
      ],
      dialogue: {
        titre: "Schule im Wandel", lieu: "Elternabend",
        lignes: [
          { loc: "Vater", de: "Der Notendruck scheint heute größer als früher.", fr: "La pression des notes semble plus forte qu'avant." },
          { loc: "Lehrerin", de: "Im Vergleich zu früher zählt heute mehr als nur die Note.", fr: "Par rapport à autrefois, il y a aujourd'hui plus que la seule note." },
          { loc: "Vater", de: "Werden individuelle Begabungen genug gefördert?", fr: "Les talents individuels sont-ils assez encouragés ?" },
          { loc: "Lehrerin", de: "Wir bemühen uns, obgleich die Ressourcen begrenzt sind.", fr: "Nous nous y efforçons, bien que les ressources soient limitées." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was schränkt die Förderung ein?", options: ["Begrenzte Ressourcen", "Zu viele Lehrer", "Zu wenig Noten"], correct: 0, explication: "« obgleich die Ressourcen begrenzt sind »." },
        { type: "qcm", consigne: "Choisissez (concession soutenue).", question: "Das System ist gut, ___ es noch Lücken gibt.", options: ["obgleich", "weil", "damit", "sodass"], correct: 0, explication: "obgleich = bien que." },
        { type: "trou", consigne: "Complétez (gradation).", texte: "Je früher man fördert, {0} besser. (… plus)", accepte: [["desto"]], indice: "je … desto" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Chancengleichheit", droite: "l'égalité des chances" }, { gauche: "der Notendruck", droite: "la pression des notes" }, { gauche: "die Begabung", droite: "le talent" }, { gauche: "die Reife", droite: "la maturité" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Donnez votre avis critique sur le système scolaire (comparaison + concession).", attendus: ["Vergleich", "obgleich"], modele: "Im Vergleich zu früher ist die Schule offener geworden. Obgleich vieles reformiert wurde, bleibt der Notendruck ein Problem. Talente sollten stärker gefördert werden." }
      ]
    },
    {
      id: "c2t05",
      vocCoursDE: [
        "In diesem Thema geht es um **Karrierewege** und die moderne Arbeitswelt. Schlüsselwörter sind *die Laufbahn* (la carrière), *der Werdegang* (le parcours professionnel), *die Selbstständigkeit* (le statut d'indépendant), *die Work-Life-Balance*, *der Quereinsteiger* (la personne en reconversion), *die Beförderung* (la promotion).",
        "Auf C2 beherrschst du das **formelle Vokabular** von Bewerbung und Beruf: *sich bewerben um*, *die Qualifikation*, *die berufliche Neuorientierung*, *aufsteigen* (gravir les échelons). Viele Begriffe sind abstrakte Komposita oder Anglizismen.",
        "Tipp: Beschreibe einen idealen Karriereweg und diskutiere, welche Rolle Sicherheit gegenüber Selbstverwirklichung spielt. Solche abwägenden Diskussionen über Werte und Lebensentscheidungen sind C2-typisch."
      ], numero: 5, titre: "Carrières et métiers", titreDE: "Karrierewege und Berufe",
      theme: "Possibilités de carrière et professions", duree: 65,
      objectifs: ["Discuter de trajectoires professionnelles", "Argumenter un choix de carrière"],
      grammairePoints: ["Verbes à compléments", "Style nominal"],
      vocabulaire: [
        { de: "der Werdegang", fr: "le parcours professionnel", ex: "Ihr Werdegang ist beeindruckend." },
        { de: "die Selbstverwirklichung", fr: "l'épanouissement personnel", ex: "Viele suchen Selbstverwirklichung im Beruf." },
        { de: "die Führungsposition", fr: "le poste de direction", ex: "Sie strebt eine Führungsposition an." },
        { de: "der Quereinstieg", fr: "la reconversion (entrée latérale)", ex: "Ein Quereinstieg ist heute üblich." },
        { de: "die Vereinbarkeit", fr: "la conciliation (vie/travail)", ex: "Die Vereinbarkeit von Beruf und Familie ist zentral." },
        { de: "aufsteigen", fr: "gravir les échelons", ex: "Er ist schnell aufgestiegen." },
        { de: "die Selbstständigkeit", fr: "l'indépendance / l'entreprise individuelle", ex: "Die Selbstständigkeit reizt sie." },
        { de: "sich qualifizieren", fr: "se qualifier", ex: "Man muss sich ständig weiterqualifizieren." }
      ],
      grammaire: [
        { titre: "Verbes à complément fixe et style nominal", intro: "Le registre professionnel use de verbes à préposition/cas fixe et de nominalisations.",
          tableau: { entetes: ["Verbe / forme", "Construction", "Exemple"], lignes: [["streben", "nach + Dat.", "nach Erfolg streben"], ["sich bewerben", "um + Akk.", "sich um eine Stelle bewerben"], ["verfügen", "über + Akk.", "über Erfahrung verfügen"], ["nominalisation", "die Vereinbarkeit von …", "die Vereinbarkeit von Beruf und Familie"]] },
          note: "« verfügen über + Akk. » (disposer de) et « streben nach + Dat. » (aspirer à) sont typiques du registre soutenu." }
      ],
      dialogue: {
        titre: "Beim Karrierecoaching", lieu: "Beratung",
        lignes: [
          { loc: "Coach", de: "Wonach streben Sie in Ihrer Laufbahn?", fr: "À quoi aspirez-vous dans votre carrière ?" },
          { loc: "Klient", de: "Nach Selbstverwirklichung, nicht nur nach Geld.", fr: "À l'épanouissement personnel, pas seulement à l'argent." },
          { loc: "Coach", de: "Über welche Stärken verfügen Sie?", fr: "De quelles forces disposez-vous ?" },
          { loc: "Klient", de: "Über Erfahrung im Management und große Lernbereitschaft.", fr: "D'une expérience en management et d'une grande envie d'apprendre." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wonach strebt der Klient?", options: ["Nach Selbstverwirklichung", "Nur nach Geld", "Nach Ruhe"], correct: 0, explication: "« Nach Selbstverwirklichung, nicht nur nach Geld »." },
        { type: "qcm", consigne: "Choisissez la préposition.", question: "Sie verfügt ___ langjährige Erfahrung.", options: ["über", "nach", "um", "von"], correct: 0, explication: "verfügen über + accusatif." },
        { type: "trou", consigne: "Complétez (streben nach).", texte: "Er strebt {0} einer Führungsposition.", accepte: [["nach"]], indice: "streben nach + datif" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Werdegang", droite: "le parcours" }, { gauche: "der Quereinstieg", droite: "la reconversion" }, { gauche: "die Vereinbarkeit", droite: "la conciliation" }, { gauche: "aufsteigen", droite: "gravir les échelons" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Argumentez un choix de carrière (verbes à complément, style soutenu).", attendus: ["streben", "verfüge"], modele: "Ich strebe nach einer Tätigkeit, die Sinn stiftet. Ich verfüge über Erfahrung und Lernbereitschaft. Wichtig ist mir zudem die Vereinbarkeit von Beruf und Privatleben." }
      ]
    }
  ]
};
