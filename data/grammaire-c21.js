/* =====================================================================
   grammaire-c21.js — 11 LEÇONS DE GRAMMAIRE du module C2.1
   (window.GRAMMAIRE_C2). Suit les 11 points de grammaire C2.1 du
   programme. Niveau maîtrise (C2), schémas colorés.
   ===================================================================== */
window.GRAMMAIRE_C2 = Object.assign(window.GRAMMAIRE_C2 || {}, {
  c2g01: {
    id: "c2g01",
    einstieg: {"intro":"Observe l'ensemble du système temporel.","exemples":[{"de":"Bis morgen wird er die Arbeit beendet haben.","fr":"D'ici demain, il aura terminé le travail."},{"de":"Früher las man mehr Zeitungen.","fr":"Autrefois, on lisait plus de journaux."},{"de":"Sie wird wohl schon gegangen sein.","fr":"Elle est probablement déjà partie."}],"question":"Comment s'articule tout le système des temps ?"},
    merke: ["Six temps : *Präsens, Perfekt, Präteritum, Plusquamperfekt, Futur I, Futur II*.","Le *Präsens* peut exprimer le futur (*Morgen fahre ich*).","*Futur II* = action accomplie dans le futur OU supposition sur le passé."],
    achtung: [{"erreur":"Morgen ich werde anrufen.","correct":"Morgen **rufe ich an**.","explication":"Le présent suffit souvent pour le futur (Morgen rufe ich an)."},{"erreur":"Bis morgen wird er es beenden.","correct":"Bis morgen **wird er es beendet haben**.","explication":"Action achevée dans le futur → *Futur II*."}],
    kontrast: {"titre":"Le système des temps : allemand vs français","similitudes":["Présent, passé, futur et antériorité existent."],"differences":["Le *Präsens* couvre souvent le futur.","Un seul *Präteritum* = passé simple + imparfait.","*Futur II* sert aussi à la supposition sur le passé."]}, titre: "Les temps des verbes", titreDE: "Die Tempora", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Maîtriser les six temps", "Employer le futur II (supposition sur le passé)"],
    grammairePoints: ["Präsens, Perfekt, Präteritum, Plusquamperfekt", "Futur I / Futur II"],
    exemplesPlus: [{"de":"Bis zum Jahresende wird das Unternehmen die Umstrukturierung abgeschlossen haben.","fr":"Futur II: eine Handlung, die in der Zukunft bereits vollendet sein wird."},{"de":"Man wird die Ergebnisse wohl erst im nächsten Quartal veröffentlichen.","fr":"Futur I mit *wohl*: drückt eine Vermutung aus."},{"de":"Kaum hatte sich die Lage beruhigt, brach eine neue Krise aus.","fr":"Plusquamperfekt: markiert die Vorzeitigkeit."},{"de":"Seit Jahrzehnten prägt diese Theorie die wissenschaftliche Debatte.","fr":"Präsens mit Dauerwirkung bis in die Gegenwart."},{"de":"Damals galt die Annahme als unumstößlich.","fr":"Präteritum für einen vergangenen Zustand."}],
    coursDE: [
      "Auf C2-Niveau verfügst du über das **vollständige Tempussystem** des Deutschen und setzt jede Form bewusst und stilistisch treffend ein. Neben den Vergangenheitstempora gehören dazu die beiden Futurformen, deren Funktion über den reinen Zeitbezug hinausgeht.",
      "Im Bereich der Vergangenheit gilt die bekannte Arbeitsteilung: Das **Präteritum** trägt die schriftliche Erzählung, das **Perfekt** dominiert die mündliche Rede und betont das Resultat, das **Plusquamperfekt** kennzeichnet die Vorzeitigkeit. Versierte Texte nutzen den Tempuswechsel gezielt, um Vorder- und Hintergrund zu staffeln.",
      "Das **Futur I** (*werden* + Infinitiv) bezeichnet weniger die Zukunft – die meist durch das Präsens mit Zeitangabe ausgedrückt wird – als vielmehr eine **Vermutung** (« *Sie wird wohl im Büro sein* ») oder eine nachdrückliche **Aufforderung** (« *Du wirst jetzt zuhören!* »).",
      "Das **Futur II** (*werden* + Partizip II + *haben/sein*) drückt eine **abgeschlossene Vermutung** über Vergangenes aus: « *Er wird das wohl vergessen haben* ». Diese feinen modalen Nebenbedeutungen souverän zu nutzen, unterscheidet den muttersprachnahen Ausdruck auf C2-Niveau."
    ],
    grammaire: [
      { exemples: [{"de":"Bis nächste Woche wird er den Bericht geschrieben haben.","fr":"D'ici la semaine prochaine, il aura écrit le rapport."},{"de":"Sie wird wohl im Stau gestanden haben.","fr":"Elle a dû être bloquée dans un bouchon."}], regle: "Les six temps, dont le **Futur II** (werden + participe + haben/sein), souvent une **supposition sur le passé**.", attention: "*Sie wird im Stau gestanden **haben*** = elle a dû être coincée dans un bouchon.", titre: "Le système temporel complet", intro: "Le C2 maîtrise les six temps, dont le Futur II, souvent employé pour une supposition sur le passé.",
        tableau: { entetes: ["Temps", "Formation", "Exemple"], lignes: [["Präteritum", "radical/Ablaut", "Er kam spät."], ["Plusquamperfekt", "hatte/war + Part. II", "Er war schon gegangen."], ["Futur I", "werden + Infinitif", "Er wird kommen."], ["Futur II", "werden + Part. II + haben/sein", "Er wird es vergessen haben."]] },
        note: "Futur II = supposition sur un fait passé : « Sie wird wohl im Stau gestanden haben » (elle a dû être coincée dans un bouchon)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le Futur II exprime souvent…", options: ["une supposition sur le passé", "une habitude présente", "un ordre"], correct: 0, explication: "Er wird es vergessen haben (probablement)." },
      { type: "qcm", consigne: "Choisissez (Futur I).", question: "Morgen ___ ich dich anrufen.", options: ["werde", "wurde", "würde", "war"], correct: 0, explication: "Futur I : werden + infinitif." },
      { type: "trou", consigne: "Complétez (Plusquamperfekt).", texte: "Als ich kam, {0} er längst gegangen.", accepte: [["war"]], indice: "gehen → sein → war gegangen" },
      { type: "association", consigne: "Associez le temps et sa formation.", paires: [{ gauche: "Perfekt", droite: "haben/sein + Part. II" }, { gauche: "Plusquamperfekt", droite: "hatte/war + Part. II" }, { gauche: "Futur I", droite: "werden + Infinitif" }, { gauche: "Futur II", droite: "werden + Part. II + haben" }] },
      { type: "ordre", consigne: "Phrase au Futur II.", mots: ["Er", "wird", "es", "vergessen", "haben"], correct: "Er wird es vergessen haben", traduction: "Il a dû l'oublier." }
    ]
  },
  c2g02: {
    id: "c2g02",
    einstieg: {"intro":"Observe le comportement de ces préfixes.","exemples":[{"de":"Ich rufe dich morgen an.","fr":"Je t'appelle demain."},{"de":"Er versteht die Aufgabe.","fr":"Il comprend l'exercice."},{"de":"Die Fähre setzt über.","fr":"Le ferry traverse."}],"question":"Quels préfixes se détachent du verbe ?"},
    merke: ["Séparables (accentués) : *an-, auf-, aus-, ein-, mit-, vor-, zu-* → rejetés à la fin.","Inséparables (atones) : *be-, ge-, er-, ver-, zer-, ent-, emp-, miss-* → collés, pas de *ge-* au participe.","Mixtes (*durch-, über-, um-, unter-*) : séparables ou non selon le sens."],
    achtung: [{"erreur":"Ich anrufe dich.","correct":"Ich **rufe** dich **an**.","explication":"Verbe séparable → préfixe à la fin."},{"erreur":"Er hat die Aufgabe geverstanden.","correct":"Er hat die Aufgabe **verstanden**.","explication":"Préfixe inséparable → participe sans *ge-*."}],
    kontrast: {"titre":"Verbes à préfixes : allemand vs français","similitudes":["Des préfixes modifient le sens (com-, dé-…)."],"differences":["Le préfixe séparable se *détache* et part à la fin.","Inséparables : participe sans *ge-* (verstanden).","Mixtes : l'accent décide du sens (*übersetzen*)."]}, titre: "Verbes à préfixes", titreDE: "Verben mit Vorsilben", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Distinguer préfixes séparables et inséparables", "Gérer les préfixes à double valeur"],
    grammairePoints: ["be-, er-, ver- (inséparables)", "um-, durch-, über- (mixtes)"],
    exemplesPlus: [{"de":"Der Roman behandelt die Folgen des Krieges eindringlich.","fr":"*be-*: untrennbares Präfix, kein *ge-* im Partizip."},{"de":"Es gelang ihr, das Publikum vollständig zu überzeugen.","fr":"*über-* hier untrennbar (übertragene Bedeutung)."},{"de":"Wir mussten den gesamten Plan noch einmal überdenken.","fr":"*überdenken*: untrennbar, abstrakt."},{"de":"Der Fährmann setzte die Passagiere ans andere Ufer über.","fr":"*übersetzen* trennbar in der wörtlichen Bedeutung."},{"de":"Das Unternehmen hat die Krise erstaunlich gut überstanden.","fr":"*überstehen*: untrennbar."}],
    coursDE: [
      "Die deutsche **Wortbildung** durch Vorsilben (Präfixe) ist außerordentlich produktiv und erlaubt es, aus einem Grundverb eine ganze Bedeutungsfamilie abzuleiten. Auf C2-Niveau erschließt du auch unbekannte Verben aus ihren Bestandteilen.",
      "Die **untrennbaren** Präfixe (*be-, er-, ver-, zer-, ent-, ge-, miss-*) sind unbetont und bilden im Perfekt **kein** *ge-*: *verstehen → verstanden*. Sie verändern die Bedeutung oft grundlegend und machen intransitive Verben häufig transitiv (*antworten* → *beantworten + Akkusativ*).",
      "Die **trennbaren** Präfixe (*an-, auf-, aus-, mit-, vor-, zu-*) sind betont und lösen sich ab. Eine Sondergruppe bilden die **mischbaren** Vorsilben *um-, durch-, über-, unter-, wieder-*: Sie sind je nach Bedeutung trennbar oder untrennbar – mit unterschiedlicher Betonung und oft unterschiedlichem Sinn.",
      "Vergleiche *úmfahren* (jemanden anfahren, trennbar) und *umfáhren* (um etwas herumfahren, untrennbar). Die Betonung entscheidet über Form und Bedeutung. Dieses feine Gespür für Präfixe ist ein Kennzeichen wirklich fortgeschrittener Sprachbeherrschung."
    ],
    grammaire: [
      { exemples: [{"de":"Er umfährt das Hindernis vorsichtig.","fr":"Il contourne l'obstacle prudemment."},{"de":"Bitte wiederholen Sie den Satz.","fr":"Veuillez répéter la phrase."}], regle: "Préfixes **inséparables** (*be-, er-, ent-, ver-, zer-, miss-*) restent collés ; **séparables** (*ab-, an-, auf-…*) se détachent ; certains (*um-, durch-, über-*) **varient avec le sens**.", attention: "Participe : inséparable **sans** ge- (*verstanden*) ; séparable **avec** ge- inséré (*aufgestanden*).", titre: "Séparables, inséparables et mixtes", intro: "Les préfixes inséparables (be-, er-, ent-, ver-, zer-, miss-) restent collés ; les séparables (ab-, an-, auf-, ein-, vor-, zu-…) se détachent. Certains (um-, durch-, über-, unter-) varient avec le sens.",
        tableau: { entetes: ["Préfixe", "Type", "Exemple"], lignes: [["ver-, be-, er-", "inséparable", "Ich verstehe / bekomme."], ["auf-, an-, ein-", "séparable", "Ich stehe auf."], ["um- (sens concret)", "séparable", "Er fährt den Baum um. (renverse)"], ["um- (sens figuré)", "inséparable", "Er umfährt das Hindernis. (contourne)"]] },
        schemas: [{ legende: "Préfixe séparable : il part à la FIN.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "stehe", r: "verbe (2)", c: "verbe" }, { m: "jeden Tag früh", r: "complément", c: "objet" }, { m: "auf", r: "préfixe séparé (fin)", c: "fin" }] }],
        note: "Au participe, l'inséparable n'a pas de ge- (verstanden, bekommen) ; le séparable l'insère (aufgestanden)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« verstehen » a un préfixe…", options: ["inséparable", "séparable", "double"], correct: 0, explication: "ver- est toujours inséparable (pas de ge- : verstanden)." },
      { type: "qcm", consigne: "Choisissez (séparable).", question: "Ich ___ jeden Morgen um sechs ___.", options: ["stehe … auf", "aufstehe … (rien)", "stehe auf …", "aufstehe … auf"], correct: 0, explication: "séparable : Ich stehe … auf." },
      { type: "trou", consigne: "Complétez (participe inséparable, sans ge-).", texte: "Ich habe das nicht {0}. (verstehen)", accepte: [["verstanden"]], indice: "ver- → pas de ge- : verstanden" },
      { type: "association", consigne: "Associez le préfixe et son type.", paires: [{ gauche: "be-", droite: "inséparable" }, { gauche: "ver-", droite: "inséparable" }, { gauche: "auf-", droite: "séparable" }, { gauche: "ein-", droite: "séparable" }] },
      { type: "ordre", consigne: "Construisez (verbe séparable).", mots: ["Sie", "ruft", "mich", "morgen", "an"], correct: "Sie ruft mich morgen an", traduction: "Elle m'appelle demain." }
    ]
  },
  c2g03: {
    id: "c2g03",
    einstieg: {"intro":"Observe tous les emplois de l'irréel.","exemples":[{"de":"An deiner Stelle würde ich kündigen.","fr":"À ta place, je démissionnerais."},{"de":"Hätte ich nur mehr Zeit gehabt!","fr":"Si seulement j'avais eu plus de temps !"},{"de":"Es wäre schön, wenn du kämst.","fr":"Ce serait bien que tu viennes."}],"question":"Comment couvrir tous les emplois de l'irréel ?"},
    merke: ["Présent : *würde + inf* ou forme simple (*wäre, hätte, käme, ginge*).","Passé : *hätte/wäre + participe* (*ich hätte gewusst*).","Emplois : irréel, souhait (*wenn … nur*), politesse, conseil (*an deiner Stelle*)."],
    achtung: [{"erreur":"Wenn ich reich wäre, würde ich glücklich sein.","correct":"Wenn ich reich wäre, **wäre ich** glücklich.","explication":"Avec *sein*, on préfère la forme simple (wäre) à *würde sein*."},{"erreur":"Hätte ich das gewusst, würde ich nicht gekommen sein.","correct":"…, **wäre ich** nicht **gekommen**.","explication":"Irréel du passé : *hätte/wäre + participe*."}],
    kontrast: {"titre":"Le Konjunktiv II (C2) : allemand vs français","similitudes":["Le conditionnel présent et passé existe."],"differences":["Deux registres : forme simple (käme) vs *würde + inf*.","Irréel du passé en un bloc (*hätte gemacht*).","Sert aussi au souhait et à la politesse."]}, titre: "Le subjonctif II", titreDE: "Der Konjunktiv II", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Maîtriser présent, passé et modaux", "Exprimer l'irréel complexe"],
    grammairePoints: ["würde, hätte, wäre", "hätte … können (passé + modal)"],
    exemplesPlus: [{"de":"Ohne diesen glücklichen Zufall hätte das Experiment scheitern können.","fr":"Konjunktiv II der Vergangenheit mit Modalverb: *hätte … können*."},{"de":"Man hätte die Katastrophe durchaus verhindern können.","fr":"Drückt eine versäumte Möglichkeit aus."},{"de":"Es wäre verfehlt, die Bedeutung dieser Entwicklung zu unterschätzen.","fr":"Vorsichtige, distanzierte Bewertung."},{"de":"Selbst mit größerem Aufwand wäre das Ziel kaum erreichbar gewesen.","fr":"Irreale Aussage über die Vergangenheit."},{"de":"Hätte man rechtzeitig eingegriffen, ließen sich die Schäden begrenzen.","fr":"Bedingungssatz ohne *wenn* (Verberststellung)."}],
    coursDE: [
      "Der **Konjunktiv II** ist auf C2-Niveau ein selbstverständliches Ausdrucksmittel für Irrealität, Höflichkeit und vorsichtige Distanzierung. Erwartet wird, dass du die echten Formen den Umschreibungen mit *würde* dort vorziehst, wo der Stil es verlangt.",
      "In der Gegenwart sind neben *wäre, hätte* auch die selteneren Stammformen starker Verben aktiv zu beherrschen: *käme, ginge, gäbe, ließe, wüsste, bräuchte*. In gepflegter Schriftsprache wirkt « *Es gäbe viel zu sagen* » eleganter als die *würde*-Umschreibung.",
      "Die Vergangenheit kennt nur die Form *hätte/wäre + Partizip II*. Mit einem Modalverb entsteht die anspruchsvolle Konstruktion mit Doppelinfinitiv: « *Ich **hätte** früher **kommen sollen*** », « *Das **hätte** nicht **passieren dürfen*** ». Diese Strukturen gehören zum sicheren C2-Repertoire.",
      "Funktional dient der Konjunktiv II der diplomatischen Modulation: irreale Bedingungssätze, höfliche Distanz (« *Ich würde meinen, dass…* »), abgeschwächte Behauptungen und irreale Vergleiche mit *als ob*. Die feine Dosierung dieser Formen verleiht der Sprache Geschmeidigkeit."
    ],
    grammaire: [
      { exemples: [{"de":"Ich hätte dir helfen können.","fr":"J'aurais pu t'aider."},{"de":"Wäre ich früher losgefahren, hätte ich den Zug erreicht.","fr":"Si j'étais parti plus tôt, j'aurais eu le train."}], regle: "Irréel **présent** (würde/hätte/wäre), **passé** (hätte/wäre + participe) et **passé + modal** (*hätte … können*).", attention: "Ordre final du passé + modal : *Ich hätte dir **helfen können***.", titre: "L'irréel sous toutes ses formes", intro: "Au C2, on manie le Konjunktiv II au présent, au passé et avec modaux (double infinitif).",
        tableau: { entetes: ["Emploi", "Forme", "Exemple"], lignes: [["irréel présent", "würde / hätte / wäre", "Ich würde gern helfen."], ["irréel passé", "hätte/wäre + Part. II", "Ich wäre fast gestürzt."], ["passé + modal", "hätte … Inf. + Modal", "Ich hätte kommen können."], ["souhait", "wenn … doch nur", "Wenn ich es doch nur gewusst hätte!"]] },
        schemas: [{ legende: "Passé + modal : hätte (2) … infinitif + modal (fin).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "hätte", r: "hätte (2)", c: "verbe" }, { m: "dir", r: "datif", c: "objet" }, { m: "helfen können", r: "inf. + modal (fin)", c: "fin" }] }],
        note: "Ordre final : infinitif + modal à l'infinitif (« helfen können », « machen müssen »)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Ich hätte kommen können » exprime…", options: ["une possibilité passée non réalisée", "une obligation présente", "un ordre"], correct: 0, explication: "passé + modal : j'aurais pu venir." },
      { type: "qcm", consigne: "Choisissez (irréel passé).", question: "Ich ___ fast gestürzt.", options: ["wäre", "hätte", "würde", "bin"], correct: 0, explication: "stürzen → sein → wäre gestürzt." },
      { type: "trou", consigne: "Complétez (souhait irréel passé).", texte: "Wenn ich es doch nur gewusst {0}!", accepte: [["hätte"]], indice: "wissen → haben → hätte gewusst" },
      { type: "association", consigne: "Associez l'infinitif et sa forme.", paires: [{ gauche: "haben", droite: "hätte" }, { gauche: "sein", droite: "wäre" }, { gauche: "werden", droite: "würde" }, { gauche: "wissen", droite: "wüsste" }] },
      { type: "ordre", consigne: "Construisez (passé + modal).", mots: ["Ich", "hätte", "dir", "helfen", "können"], correct: "Ich hätte dir helfen können", traduction: "J'aurais pu t'aider." }
    ]
  },
  c2g04: {
    id: "c2g04",
    einstieg: {"intro":"Observe le mode du discours rapporté soigné.","exemples":[{"de":"Der Sprecher sagte, die Regierung werde reagieren.","fr":"Le porte-parole a dit que le gouvernement réagirait."},{"de":"Sie behauptete, sie sei nie dort gewesen.","fr":"Elle affirma qu'elle n'y avait jamais été."},{"de":"Man teilte mit, die Preise seien gestiegen.","fr":"On annonça que les prix avaient augmenté."}],"question":"Comment rapporter des propos de façon neutre et soignée ?"},
    merke: ["Konjunktiv I présent : *sei, habe, werde, könne* ; passé : *habe/sei + participe*.","Si la forme = indicatif → on passe au *Konjunktiv II* (sie hätten).","Registre : presse, comptes rendus, rapports officiels."],
    achtung: [{"erreur":"Sie sagte, sie ist krank gewesen.","correct":"Sie sagte, sie **sei** krank **gewesen**.","explication":"Discours indirect passé → *sei/habe + participe*."},{"erreur":"Sie sagten, sie kommen später.","correct":"Sie sagten, sie **kämen** später.","explication":"*kommen* (KI = indicatif) → Konjunktiv II *kämen*."}],
    kontrast: {"titre":"Le Konjunktiv I (C2) : allemand vs français","similitudes":["On rapporte des propos (« il dit que »)."],"differences":["Mode dédié (sei, habe) marquant la distance.","Bascule réglée KI → KII → würde.","Passé du discours indirect : *sei/habe + participe*."]}, titre: "Le subjonctif I", titreDE: "Der Konjunktiv I", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Former le Konjunktiv I", "Rapporter affirmations, questions et ordres"],
    grammairePoints: ["sei, habe, könne, werde", "Ersatzformen (→ KII)"],
    exemplesPlus: [{"de":"Der Sprecher versicherte, die Vorwürfe entbehrten jeder Grundlage.","fr":"Indirekte Rede; bei Gleichheit mit dem Indikativ tritt der Konjunktiv II ein."},{"de":"Sie führte aus, das Modell sei in mehrfacher Hinsicht überholt.","fr":"Konjunktiv I: *sei*."},{"de":"In der Studie heißt es, die Datenlage lasse keine eindeutigen Schlüsse zu.","fr":"Konjunktiv I: *lasse*."},{"de":"Er betonte, man werde an den Vereinbarungen festhalten.","fr":"Konjunktiv I: *werde* für die Zukunft."},{"de":"Die Zeugin gab an, sie habe nichts Verdächtiges bemerkt.","fr":"Konjunktiv I: *habe*."}],
    coursDE: [
      "Der **Konjunktiv I** ist das Kennzeichen der seriösen **indirekten Rede** in Presse, Wissenschaft und offizieller Kommunikation. Er gibt fremde Aussagen wieder und wahrt zugleich eine neutrale Distanz, ohne ihren Wahrheitsgehalt zu beurteilen.",
      "Die Bildung erfolgt vom Infinitivstamm + Endung; eindeutig sind vor allem die 3. Personen: *er sei, habe, könne, werde, gehe*. Beispiel: « *Die Sprecherin betonte, man **werde** die Maßnahmen prüfen und **sei** zu Gesprächen bereit* ».",
      "Zentral ist die **Ersatzregel**: Wo der Konjunktiv I formgleich mit dem Indikativ ist – durchgängig im Plural und in der 1. Person –, weicht man auf den **Konjunktiv II** aus (« *sie **hätten** erklärt* »). So bleibt die Redewiedergabe stets eindeutig markiert.",
      "In längeren Wiedergaben bleibt der Konjunktiv I über mehrere Sätze erhalten und macht die ganze Passage als fremde Rede kenntlich. Diese Konsequenz durchzuhalten – auch bei Fragen (*ob…*) und Aufforderungen (*solle…*) – ist ein Merkmal des druckreifen Stils."
    ],
    grammaire: [
      { regle: "Discours indirect soigné : affirmations (sei, habe), questions (ob / W-Wort), ordres (sollen), avec **substitution KII** si nécessaire.", attention: "3ᵉ sing. → KI ; pluriel/ich → KII pour éviter la confusion avec l'indicatif.", exemples: [{"de":"Sie sagt, sie sei bereit.","fr":"Elle dit qu'elle est prête."},{"de":"Sie behaupten, sie hätten nichts gewusst.","fr":"Ils prétendent n'avoir rien su."}], titre: "Le discours indirect soigné", intro: "Le Konjunktiv I rapporte des propos ; on adapte questions (ob/W-) et ordres (sollen), et on substitue le KII si la forme = indicatif.",
        tableau: { entetes: ["Type", "Direct", "Indirect"], lignes: [["affirmation", "« Ich bin bereit. »", "Er sagt, er sei bereit."], ["passé", "« Ich war dort. »", "Er sagt, er sei dort gewesen."], ["question W", "« Wann kommst du? »", "Er fragt, wann ich komme."], ["ordre", "« Geh! »", "Er sagt, ich solle gehen."], ["substitution", "« Sie haben Zeit. »", "Sie sagen, sie hätten Zeit."]] },
        note: "Règle : 3e sing. → Konjunktiv I (er sei, habe) ; pluriel/ich → Konjunktiv II (hätten) pour éviter la confusion avec l'indicatif." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Un ordre rapporté se rend avec…", options: ["sollen", "müssen", "dürfen", "wollen"], correct: 0, explication: "« Geh! » → Er sagt, ich solle gehen." },
      { type: "qcm", consigne: "Choisissez (Konjunktiv I de sein).", question: "Sie sagt, sie ___ bereit.", options: ["sei", "ist", "wäre", "war"], correct: 0, explication: "Konjunktiv I : sei." },
      { type: "trou", consigne: "Complétez (substitution au pluriel).", texte: "Sie behaupten, sie {0} keine Zeit. (haben)", accepte: [["hätten"]], indice: "pluriel ambigu → Konjunktiv II : hätten" },
      { type: "association", consigne: "Associez l'infinitif et le Konjunktiv I (er).", paires: [{ gauche: "sein", droite: "sei" }, { gauche: "haben", droite: "habe" }, { gauche: "können", droite: "könne" }, { gauche: "werden", droite: "werde" }] },
      { type: "qcm", consigne: "Choisissez (passé indirect).", question: "« Ich bin gegangen. » → Er sagt, er ___ gegangen.", options: ["sei", "habe", "ist", "war"], correct: 0, explication: "sein → sei gegangen (Perfekt KI)." }
    ]
  },
  c2g05: {
    id: "c2g05",
    einstieg: {"intro":"Observe la variété des subordonnées.","exemples":[{"de":"Während er schlief, arbeitete sie.","fr":"Pendant qu'il dormait, elle travaillait."},{"de":"Damit du es verstehst, erkläre ich es.","fr":"Pour que tu comprennes, je l'explique."},{"de":"Sooft ich ihn sehe, lächelt er.","fr":"Chaque fois que je le vois, il sourit."}],"question":"Comment classer toutes les circonstancielles ?"},
    merke: ["Temps : *als, wenn, während, nachdem, bevor, sobald, solange, sooft*.","But : *damit, um … zu* ; cause : *weil, da* ; concession : *obwohl* ; condition : *wenn, falls*.","Toutes sont des subordonnées → verbe conjugué à la *fin*."],
    achtung: [{"erreur":"Damit ich verstehe es besser, lese ich noch mal.","correct":"Damit ich es besser **verstehe**, …","explication":"Subordonnée → verbe à la fin (verstehe)."},{"erreur":"Als ich jung bin, spielte ich Fußball.","correct":"**Als** ich jung **war**, spielte ich Fußball.","explication":"Passé ponctuel unique → *als* (pas *wenn*)."}],
    kontrast: {"titre":"Les circonstancielles : allemand vs français","similitudes":["Temps, cause, but, condition, concession existent."],"differences":["Verbe rejeté en *fin* de subordonnée.","*als* (passé unique) vs *wenn* (répétition/présent).","Conjonctions spécifiques (*damit, nachdem, sobald*)."]}, titre: "Les subordonnées circonstancielles", titreDE: "Adverbialsätze", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Reconnaître les types de circonstancielles", "Choisir la bonne conjonction"],
    grammairePoints: ["temporal, kausal, konzessiv", "final, konditional, modal"],
    exemplesPlus: [{"de":"Sooft die Frage aufkam, wich er einer klaren Antwort aus.","fr":"Temporal (*sooft*): jedes Mal, wenn."},{"de":"Zumal die Mittel knapp waren, verzichtete man auf den Ausbau.","fr":"Kausal (*zumal*): ein zusätzlicher, gewichtiger Grund."},{"de":"So überzeugend die Argumente auch klingen mögen, sie bleiben unbewiesen.","fr":"Konzessiv (*so … auch*): trotz allem."},{"de":"Indem man die Prozesse automatisierte, senkte man die Kosten erheblich.","fr":"Modal (*indem*): nennt das Mittel."},{"de":"Sofern keine Einwände erhoben werden, gilt der Antrag als angenommen.","fr":"Konditional (*sofern*): unter dieser Bedingung."}],
    coursDE: [
      "**Adverbialsätze** sind Nebensätze, die die Umstände einer Handlung angeben. Auf C2-Niveau verfügst du über das gesamte Spektrum ihrer semantischen Typen und wählst die präziseste Konjunktion – stets mit dem Verb am Satzende.",
      "Die wichtigsten Typen: **temporal** (*als, während, nachdem, sobald, bevor, seitdem*), **kausal** (*weil, da, zumal*), **konzessiv** (*obwohl, obgleich, wenngleich*), **final** (*damit, um … zu*), **konditional** (*wenn, falls, sofern*) und **modal** (*indem, dadurch dass, ohne dass, anstatt dass*).",
      "Auf hohem Niveau zählen die Feinheiten: *zumal* verstärkt einen Grund (« *…, **zumal** es ohnehin spät war* »), *wenngleich* räumt gehoben ein, *indem* nennt das Mittel, *sodass* die Folge. Diese Differenzierung macht das Argumentieren präzise.",
      "Viele dieser Sätze lassen sich zu **Präpositionalphrasen** verdichten (*während → während + Genitiv*, *weil → wegen*, *obwohl → trotz*). Souverän zwischen satzwertiger und nominaler Fügung zu wechseln, ist eine der anspruchsvollsten Kompetenzen auf C2."
    ],
    grammaire: [
      { exemples: [{"de":"Wir blieben, zumal es ohnehin spät war.","fr":"Nous sommes restés, d'autant que c'était déjà tard."},{"de":"Er ging, ohne dass jemand es bemerkte.","fr":"Il est parti sans que personne le remarque."}], regle: "Panorama des circonstancielles : temporelle, causale (*weil, zumal*), concessive (*obwohl, obgleich*), finale (*damit*), conditionnelle (*falls, sofern*), modale (*indem*).", attention: "*zumal* (d'autant plus que) et *ohne dass* (sans que) sont **soutenus** ; verbe à la fin.", titre: "Panorama des circonstancielles", intro: "Chaque circonstance a ses conjonctions ; toutes rejettent le verbe à la fin.",
        tableau: { entetes: ["Type", "Conjonctions", "Exemple"], lignes: [["temporal", "als, während, nachdem, seitdem", "Seitdem er hier ist, …"], ["kausal", "weil, da, zumal", "…, zumal es spät war."], ["konzessiv", "obwohl, obgleich, wenngleich", "obwohl es regnete"], ["final", "damit, sodass", "damit alle es verstehen"], ["konditional", "wenn, falls, sofern", "sofern es möglich ist"], ["modal", "indem, ohne dass", "indem man übt"]] },
        note: "« zumal » (d'autant plus que) et « ohne dass » (sans que) appartiennent au registre soutenu." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« indem » introduit une circonstancielle…", options: ["modale (moyen)", "temporelle", "causale"], correct: 0, explication: "indem = en (moyen) → modale." },
      { type: "qcm", consigne: "Choisissez (causale soutenue).", question: "Wir blieben, ___ es ohnehin spät war.", options: ["zumal", "obwohl", "damit", "falls"], correct: 0, explication: "zumal = d'autant plus que (cause)." },
      { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Ich erkläre es, damit alle es {0}. (verstehen)", accepte: [["verstehen"]], indice: "damit → verbe à la fin (pluriel)" },
      { type: "association", consigne: "Associez la conjonction et le type.", paires: [{ gauche: "nachdem", droite: "temporal" }, { gauche: "weil", droite: "kausal" }, { gauche: "obwohl", droite: "konzessiv" }, { gauche: "damit", droite: "final" }] },
      { type: "ordre", consigne: "Construisez la circonstancielle (concessive).", mots: ["obwohl", "es", "spät", "war"], correct: "obwohl es spät war", traduction: "bien qu'il fût tard" }
    ]
  },
  c2g06: {
    id: "c2g06",
    einstieg: {"intro":"Observe le cas imposé par chaque verbe.","exemples":[{"de":"Ich danke dir für die Hilfe.","fr":"Je te remercie pour l'aide."},{"de":"Er erinnert sich an seinen Urlaub.","fr":"Il se souvient de ses vacances."},{"de":"Wir bedürfen deiner Hilfe.","fr":"Nous avons besoin de ton aide."}],"question":"Quel cas chaque verbe impose-t-il ?"},
    merke: ["Datif : *helfen, danken, gratulieren, begegnen, gefallen, folgen*.","Verbe + préposition fixe : *warten auf, denken an, sich freuen über/auf*.","Quelques verbes + génitif (soutenu) : *bedürfen, gedenken, sich rühmen*."],
    achtung: [{"erreur":"Ich helfe dich.","correct":"Ich helfe **dir**.","explication":"*helfen* régit le datif (dir)."},{"erreur":"Er erinnert sich seinen Urlaub.","correct":"Er erinnert sich **an** seinen Urlaub.","explication":"*sich erinnern an* + accusatif."}],
    kontrast: {"titre":"La rection des verbes : allemand vs français","similitudes":["Les verbes ont des constructions fixes."],"differences":["Beaucoup de verbes régissent le *datif* (helfen, danken).","Préposition + cas fixés (*warten auf* + acc).","Quelques verbes + génitif (registre soutenu)."]}, titre: "Les compléments des verbes", titreDE: "Verbergänzungen und Kasus", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Maîtriser la rection des verbes", "Employer les verbes à génitif"],
    grammairePoints: ["verbes à datif/accusatif", "verbes à génitif (bedürfen, gedenken)"],
    exemplesPlus: [{"de":"Diese Angelegenheit bedarf einer gründlichen Prüfung.","fr":"*bedürfen* + Genitiv (gehoben)."},{"de":"Wir gedenken der Opfer dieser Tragödie.","fr":"*gedenken* + Genitiv."},{"de":"Man beschuldigte ihn des Betruges.","fr":"*beschuldigen* + Genitiv."},{"de":"Der Vorfall entzog sich jeder Kontrolle.","fr":"*sich entziehen* + Dativ."},{"de":"Solche Aussagen entbehren jeder sachlichen Grundlage.","fr":"*entbehren* + Genitiv."}],
    coursDE: [
      "Jedes Verb verlangt bestimmte **Ergänzungen** in einem festgelegten **Kasus** – das ist seine *Valenz* oder *Rektion*. Auf C2-Niveau beherrschst du auch die selteneren Rektionen und die Verben mit Genitivobjekt, die der gehobenen Sprache angehören.",
      "Die meisten Verben verlangen den **Akkusativ** oder kombinieren **Dativ** (Person) und **Akkusativ** (Sache). Eine kleinere Gruppe steht ausschließlich mit dem **Dativ**: *helfen, danken, gratulieren, begegnen, widersprechen, zustimmen*.",
      "Eine gehobene Gruppe regiert den **Genitiv**: *bedürfen* (« *Das **bedarf** keiner Erklärung* »), *gedenken* (« *Wir **gedenken** der Opfer* »), *sich erfreuen*, *sich enthalten*. Diese Verben sind heute überwiegend schriftsprachlich und wirken förmlich.",
      "Hinzu kommen die zahlreichen Verben mit **präpositionalem Kasus** (*warten auf + A, leiden unter + D*). Die vollständige Rektion eines Verbs – Kasus und gegebenenfalls Präposition – sicher zu kennen, ist die Grundlage fehlerfreier, idiomatischer Sätze."
    ],
    grammaire: [
      { exemples: [{"de":"Wir gedenken der Opfer.","fr":"Nous honorons la mémoire des victimes."},{"de":"Das Projekt bedarf großer Sorgfalt.","fr":"Le projet exige un grand soin."}], regle: "La **rection** (Rektion) : chaque verbe impose un cas. Rares **verbes à génitif** : *bedürfen, gedenken, sich annehmen*.", attention: "*gedenken* + **génitif** (*der Opfer gedenken*) ; *helfen, danken* + **datif**.", titre: "La rection (Rektion) des verbes", intro: "Chaque verbe impose un cas ou une préposition. Au C2, on connaît aussi les rares verbes à génitif.",
        tableau: { entetes: ["Verbe", "Rection", "Exemple"], lignes: [["helfen", "+ Dat.", "Ich helfe dir."], ["bedürfen", "+ Gen.", "Es bedarf großer Mühe."], ["gedenken", "+ Gen.", "Wir gedenken der Opfer."], ["sich erinnern", "an + Akk.", "Ich erinnere mich an ihn."], ["sich annehmen", "+ Gen.", "Er nahm sich der Sache an."]] },
        note: "Verbes à génitif (rares, soutenus) : bedürfen, gedenken, sich annehmen, sich bedienen, sich rühmen." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« gedenken » se construit avec…", options: ["le génitif", "le datif", "l'accusatif"], correct: 0, explication: "gedenken + génitif : der Opfer gedenken." },
      { type: "qcm", consigne: "Choisissez (datif).", question: "Das Projekt bedarf großer ___. (Mühe)", options: ["Mühe", "Mühen", "Mühes", "der Mühe"], correct: 0, explication: "bedürfen + génitif : großer Mühe." },
      { type: "trou", consigne: "Complétez (préposition fixe).", texte: "Ich erinnere mich gern {0} diese Zeit.", accepte: [["an"]], indice: "sich erinnern an + accusatif" },
      { type: "association", consigne: "Associez le verbe et sa rection.", paires: [{ gauche: "helfen", droite: "datif" }, { gauche: "bedürfen", droite: "génitif" }, { gauche: "sehen", droite: "accusatif" }, { gauche: "sich erinnern", droite: "an + accusatif" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Nous honorons la mémoire des victimes.", accepte: ["Wir gedenken der Opfer"], aide: "gedenken + génitif" }
    ]
  },
  c2g07: {
    id: "c2g07",
    einstieg: {"intro":"Observe ces tournures du registre formel.","exemples":[{"de":"Die Regierung trifft Maßnahmen.","fr":"Le gouvernement prend des mesures."},{"de":"Das stellt eine Gefahr dar.","fr":"Cela représente un danger."},{"de":"Wir nehmen Bezug auf Ihr Schreiben.","fr":"Nous nous référons à votre courrier."}],"question":"Pourquoi *Maßnahmen treffen* plutôt qu'un simple verbe ?"},
    merke: ["Locutions à verbe support (*Funktionsverbgefüge*) : nom + verbe semi-vide.","Verbes supports fréquents : *treffen, stellen, nehmen, bringen, kommen, setzen*.","Registre administratif/écrit : *in Frage stellen, zur Verfügung stellen, in Betracht ziehen*."],
    achtung: [{"erreur":"Die Regierung macht Maßnahmen.","correct":"Die Regierung **trifft** Maßnahmen.","explication":"Collocation fixe : *Maßnahmen treffen*."},{"erreur":"etwas in Betracht nehmen","correct":"etwas in Betracht **ziehen**","explication":"L'expression figée est *in Betracht ziehen*."}],
    kontrast: {"titre":"Locutions verbo-nominales (C2) : allemand vs français","similitudes":["« prendre des mesures » est aussi une locution."],"differences":["Verbe support *fixe* et semi-vide (treffen, ziehen).","Très productif à l'écrit administratif.","La traduction mot à mot échoue souvent."]}, titre: "Locutions verbo-nominales", titreDE: "Nomen-Verb-Verbindungen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Employer des Funktionsverbgefüge soutenues", "Reformuler avec un verbe simple"],
    grammairePoints: ["in Anspruch nehmen, in Betracht ziehen", "zur Sprache bringen"],
    exemplesPlus: [{"de":"Das Verfahren nimmt erhebliche Ressourcen in Anspruch.","fr":"*in Anspruch nehmen* = beanspruchen."},{"de":"Auch alternative Lösungen sollten in Betracht gezogen werden.","fr":"*in Betracht ziehen* = erwägen."},{"de":"Sie brachte das heikle Thema diplomatisch zur Sprache.","fr":"*zur Sprache bringen* = ansprechen."},{"de":"Die Reform stellt die bisherige Praxis grundlegend in Frage.","fr":"*in Frage stellen* = grundsätzlich anzweifeln."},{"de":"Der Vorschlag stieß auf breite Zustimmung.","fr":"*auf Zustimmung stoßen* = angenommen werden."}],
    coursDE: [
      "**Nomen-Verb-Verbindungen** (Funktionsverbgefüge) sind feste Verbindungen, in denen ein Nomen die Bedeutung trägt und ein abgeblasstes Verb die grammatische Funktion übernimmt. Sie prägen den **formellen Stil** von Verwaltung, Recht und Wissenschaft.",
      "Charakteristisch ist, dass sie sich meist durch ein einfaches Vollverb ersetzen lassen, dabei aber förmlicher wirken: *in Anspruch nehmen* (= beanspruchen), *in Betracht ziehen* (= erwägen), *zur Sprache bringen* (= ansprechen), *in Frage stellen* (= bezweifeln).",
      "Diese Gefüge sind in Präposition und Kasus **fest** und müssen als Einheit gelernt werden: *etwas **in** Anspruch nehmen*, *etwas **in** Betracht ziehen*, *etwas **in** Kauf nehmen*. Schon eine falsche Präposition verrät den Nicht-Muttersprachler.",
      "Ihr Vorzug liegt in **Präzision** und **Register**: Sie erlauben subtile Unterschiede (*eine Entscheidung treffen* vs. *zu einer Entscheidung gelangen*) und heben den Text auf eine sachlich-gehobene Ebene. Ihr souveräner Gebrauch ist ein Markenzeichen der C2-Kompetenz."
    ],
    grammaire: [
      { regle: "Funktionsverbgefüge du registre formel : *in Anspruch **nehmen***, *in Betracht **ziehen***, *zur Sprache **bringen***.", attention: "À l'**oral**, on préfère le verbe simple (*in Betracht ziehen* → *berücksichtigen*).", exemples: [{"de":"Wir ziehen diese Option in Betracht.","fr":"Nous prenons cette option en considération."},{"de":"Sie nimmt seine Hilfe in Anspruch.","fr":"Elle a recours à son aide."}], titre: "Les locutions du registre formel", intro: "Ces tournures nom + verbe support sont fréquentes à l'écrit académique et administratif.",
        tableau: { entetes: ["Locution", "Sens", "Verbe simple"], lignes: [["in Anspruch nehmen", "avoir recours à", "nutzen"], ["in Betracht ziehen", "prendre en considération", "berücksichtigen"], ["zur Sprache bringen", "aborder (un sujet)", "ansprechen"], ["in Frage stellen", "remettre en question", "bezweifeln"], ["Rücksicht nehmen auf", "tenir compte de", "berücksichtigen"]] },
        note: "À l'oral on préfère le verbe simple ; à l'écrit soutenu, la locution donne du poids et de la précision." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« in Betracht ziehen » signifie…", options: ["prendre en considération", "refuser", "oublier"], correct: 0, explication: "= berücksichtigen." },
      { type: "qcm", consigne: "Choisissez le verbe support.", question: "etwas zur Sprache ___", options: ["bringen", "machen", "nehmen", "stellen"], correct: 0, explication: "zur Sprache bringen = aborder." },
      { type: "trou", consigne: "Complétez (locution).", texte: "Wir nehmen Ihre Hilfe gern in {0}.", accepte: [["Anspruch"]], indice: "in Anspruch nehmen" },
      { type: "association", consigne: "Associez la locution et son sens.", paires: [{ gauche: "in Anspruch nehmen", droite: "avoir recours à" }, { gauche: "in Betracht ziehen", droite: "prendre en compte" }, { gauche: "zur Sprache bringen", droite: "aborder" }, { gauche: "in Frage stellen", droite: "remettre en question" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Nous prenons cette option en considération.", accepte: ["Wir ziehen diese Option in Betracht"], aide: "in Betracht ziehen" }
    ]
  },
  c2g08: {
    id: "c2g08",
    einstieg: {"intro":"Observe comment se fabriquent les noms.","exemples":[{"de":"die Freiheit, die Möglichkeit","fr":"la liberté, la possibilité"},{"de":"die Haustür","fr":"la porte d'entrée"},{"de":"das Lesen","fr":"la lecture (le fait de lire)"}],"question":"Comment se fabriquent les noms en allemand ?"},
    merke: ["Suffixes → genre fixe : *-ung, -heit, -keit, -schaft, -ion* (fém.) ; *-chen, -lein, -tum* (neutre) ; *-er, -ling* (masc.).","Mots composés : le *dernier* élément donne genre et pluriel (*die Haustür*).","Infinitif nominalisé : neutre (*das Lesen, das Schwimmen*)."],
    achtung: [{"erreur":"der Freiheit","correct":"**die** Freiheit","explication":"Suffixe *-heit* → toujours féminin."},{"erreur":"das Haustür","correct":"**die** Haustür","explication":"Le dernier élément (*Tür*, fém.) donne le genre."}],
    kontrast: {"titre":"La formation des noms : allemand vs français","similitudes":["Suffixes et composition existent."],"differences":["Le suffixe *fixe le genre* (-ung → fém.).","Composés soudés en un mot (Haustür) ; le dernier élément commande.","Infinitif nominalisé courant (das Lesen)."]}, titre: "Formation des noms", titreDE: "Wortbildung: Nomen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Reconnaître les suffixes nominaux", "Former des noms et des composés"],
    grammairePoints: ["-ung, -heit, -keit, -schaft", "Komposita"],
    exemplesPlus: [{"de":"Die Umsetzung der Reform stößt auf Widerstand.","fr":"*-ung*: bezeichnet einen Vorgang oder dessen Ergebnis."},{"de":"Seine Hilfsbereitschaft beeindruckte alle.","fr":"*-schaft*: eine Eigenschaft oder ein Kollektiv."},{"de":"Die Nachhaltigkeit spielt eine immer größere Rolle.","fr":"*-keit*: bildet abstrakte Begriffe."},{"de":"Die Geschwindigkeitsbegrenzung wurde verschärft.","fr":"Kompositum: mehrere Nomen werden verbunden."},{"de":"Die Vergänglichkeit alles Irdischen ist ein altes Motiv.","fr":"*-keit* aus einem Adjektiv (*vergänglich*)."}],
    coursDE: [
      "Die **nominale Wortbildung** ist ein Schlüssel zum deutschen Wortschatz: Wer die Mechanismen der Ableitung und Zusammensetzung versteht, erschließt und bildet selbstständig Tausende von Nomen. Auf C2-Niveau nutzt du dies aktiv.",
      "Durch **Suffixe** entstehen Nomen mit festem Genus. Feminin sind regelmäßig die Bildungen auf **-ung** (*die Prüfung*), **-heit/-keit** (*die Freiheit, die Möglichkeit*), **-schaft** (*die Freundschaft*) und **-ion** (*die Diskussion*). Diese Genus-Regeln sind verlässlich und sehr nützlich.",
      "Durch **Komposition** verbindet das Deutsche mehrere Wörter; das **letzte Glied** (Grundwort) bestimmt **Genus und Grundbedeutung**, die vorderen Glieder spezifizieren. Häufig steht ein **Fugenelement** (-s-, -n-, -en-) dazwischen: *Arbeit**s**platz*, *Sonn**en**schein*.",
      "Diese Verfahren erlauben die für das Deutsche typischen, hochverdichteten Begriffe der Fach- und Bildungssprache. Sie zu analysieren – ein langes Kompositum in seine Bestandteile zu zerlegen – und selbst treffend zu bilden, ist eine zentrale Fertigkeit auf höchstem Niveau."
    ],
    grammaire: [
      { exemples: [{"de":"Die Freiheit ist ein hohes Gut.","fr":"La liberté est un bien précieux."},{"de":"Die Haustür war abgeschlossen.","fr":"La porte d'entrée était fermée à clé."}], regle: "Noms par **dérivation** (suffixes -ung, -heit, -keit, -schaft → **féminins**) ou **composition** (le dernier élément donne le genre).", attention: "Dans un composé, le **dernier mot** donne genre et sens : *die Haus**tür*** (féminin).", titre: "Suffixes et mots composés", intro: "Les noms se forment par dérivation (suffixes) ou composition. Le suffixe détermine souvent le genre.",
        tableau: { entetes: ["Procédé", "Exemple", "Genre/règle"], lignes: [["-ung (verbe→nom)", "bilden → die Bildung", "féminin"], ["-heit / -keit", "die Freiheit, die Möglichkeit", "féminin (qualité)"], ["-schaft", "die Freundschaft", "féminin (collectif)"], ["-er (verbe→agent)", "lehren → der Lehrer", "masculin"], ["composé", "die Haus + tür = die Haustür", "genre du dernier élément"]] },
        note: "Dans un composé, le dernier élément (Grundwort) donne le genre et le sens principal : die Haustür (porte de maison)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Les noms en -ung, -heit, -keit, -schaft sont…", options: ["féminins", "masculins", "neutres"], correct: 0, explication: "Ces suffixes donnent des noms féminins." },
      { type: "qcm", consigne: "Choisissez le genre du composé.", question: "« das Haus » + « die Tür » = …", options: ["die Haustür", "das Haustür", "der Haustür", "die Haustür-e"], correct: 0, explication: "le dernier élément (Tür, f.) donne le genre → die." },
      { type: "trou", consigne: "Complétez (verbe → nom en -ung).", texte: "bilden → die {0}", accepte: [["Bildung"]], indice: "-ung (féminin)" },
      { type: "association", consigne: "Associez le suffixe et un exemple.", paires: [{ gauche: "-ung", droite: "die Bildung" }, { gauche: "-heit", droite: "die Freiheit" }, { gauche: "-keit", droite: "die Möglichkeit" }, { gauche: "-schaft", droite: "die Freundschaft" }] },
      { type: "traduction", consigne: "Traduisez.", source: "la liberté d'opinion", accepte: ["die Meinungsfreiheit"], aide: "composé : Meinung + Freiheit" }
    ]
  },
  c2g09: {
    id: "c2g09",
    einstieg: {"intro":"Observe le participe employé comme épithète.","exemples":[{"de":"ein schlafendes Kind","fr":"un enfant qui dort"},{"de":"die geöffnete Tür","fr":"la porte ouverte"},{"de":"die im letzten Jahr gebaute Brücke","fr":"le pont construit l'an dernier"}],"question":"Comment un participe qualifie-t-il un nom ?"},
    merke: ["Participe I (*-end*) : sens *actif*, action en cours (*ein lachendes Kind*).","Participe II : sens *passif/accompli* (*die geöffnete Tür*).","Épithète étendu : compléments *avant* le participe (*die … gebaute Brücke*)."],
    achtung: [{"erreur":"ein schlafend Kind","correct":"ein **schlafendes** Kind","explication":"Participe épithète → se décline (schlafendes)."},{"erreur":"die gebaute im letzten Jahr Brücke","correct":"die **im letzten Jahr gebaute** Brücke","explication":"Les compléments se placent AVANT le participe."}],
    kontrast: {"titre":"Participe épithète : allemand vs français","similitudes":["Le participe présent/passé qualifie le nom."],"differences":["L'épithète étendu insère un groupe *avant* le nom.","Participe I actif (-end), participe II passif.","Le français déplie en relative."]}, titre: "Participes comme adjectifs", titreDE: "Partizipien als Adjektive", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Employer le participe attribut", "Construire un attribut participial étendu"],
    grammairePoints: ["Partizip I (actif)", "Partizip II (passif/accompli)"],
    exemplesPlus: [{"de":"Die wachsende Ungleichheit beschäftigt die Forschung.","fr":"Partizip I (*wachsend*): aktiv und andauernd."},{"de":"Die von der Kommission verabschiedeten Richtlinien treten bald in Kraft.","fr":"Erweitertes Partizip II als Attribut."},{"de":"Ein alles entscheidender Moment stand bevor.","fr":"Partizip I mit Objekt (*alles entscheidend*)."},{"de":"Die längst überfällige Reform wurde endlich beschlossen.","fr":"Partizip II als Adjektiv mit Steigerungswort."},{"de":"Das zugrunde liegende Prinzip bleibt umstritten.","fr":"Partizip I in einer festen Wendung."}],
    coursDE: [
      "**Partizipien** lassen sich wie Adjektive vor ein Nomen stellen und dort deklinieren. Auf C2-Niveau setzt du diese verdichteten Attribute aktiv ein und erkennst ihre genaue Zeit- und Diathesebedeutung.",
      "Das **Partizip I** (*lesend, lächelnd*) ist **aktivisch** und drückt **Gleichzeitigkeit** aus: « *das **lachende** Kind* » = das Kind, das lacht. Das **Partizip II** (*gelesen, repariert*) ist meist **passivisch** und **abgeschlossen**: « *der **renovierte** Altbau* ».",
      "Eine elegante, rein schriftsprachliche Sonderform ist das **Gerundivum**: *zu* + Partizip I als Attribut mit der Bedeutung passiver Notwendigkeit: « *die **zu lösende** Aufgabe* » = die Aufgabe, die gelöst werden muss.",
      "Den vollen C2-Anspruch zeigt das **erweiterte Partizipialattribut**, das ganze Angaben vor dem Nomen bündelt: « *die **in den letzten Jahren stark gestiegenen** Preise* ». Solche Strukturen zu durchschauen und gezielt einzusetzen, kennzeichnet einen reifen, schriftsprachlichen Stil."
    ],
    grammaire: [
      { regle: "Le participe **épithète**, simple ou **étendu** : Partizip I (actif), Partizip II (passif/accompli), décliné comme un adjectif.", attention: "Attribut étendu : article + [compléments + participe] + nom (*die **im Park joggende** Frau*).", exemples: [{"de":"das spielende Kind","fr":"l'enfant qui joue"},{"de":"der gerade geschriebene Brief","fr":"la lettre qu'on vient d'écrire"}], titre: "Le participe épithète, simple et étendu", intro: "Placé devant le nom et décliné, le participe condense une relative ; il peut porter ses propres compléments (attribut étendu).",
        tableau: { entetes: ["Relative", "Participe attribut"], lignes: [["das Kind, das spielt", "das spielende Kind"], ["der Brief, der geschrieben wurde", "der geschriebene Brief"], ["das Buch, das gerade gelesen wird", "das gerade gelesene Buch"], ["die Frau, die im Park joggt", "die im Park joggende Frau"]] },
        schemas: [{ legende: "Attribut étendu : article + [compléments + participe] + nom.", mots: [{ m: "die", r: "article", c: "sujet" }, { m: "im Park", r: "complément", c: "objet" }, { m: "joggende", r: "Partizip I décliné", c: "verbe" }, { m: "Frau", r: "nom", c: "fin" }] }],
        note: "Partizip I = sens actif/simultané (joggend) ; Partizip II = sens passif/accompli (geschrieben)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« der geschriebene Brief » a un sens…", options: ["passif/accompli", "actif/simultané", "futur"], correct: 0, explication: "Partizip II = passif/accompli." },
      { type: "qcm", consigne: "Choisissez (Partizip I).", question: "das ___ Kind (spielen)", options: ["spielende", "gespielte", "spielte", "gespielt"], correct: 0, explication: "Partizip I : spielen → spielend + -e." },
      { type: "trou", consigne: "Complétez (Partizip II attribut).", texte: "der gerade {0} Roman (lesen)", accepte: [["gelesene"]], indice: "Partizip II : lesen → gelesen + -e" },
      { type: "association", consigne: "Associez la relative et l'attribut.", paires: [{ gauche: "das Kind, das spielt", droite: "das spielende Kind" }, { gauche: "der Brief, der geschrieben wurde", droite: "der geschriebene Brief" }, { gauche: "die Frau, die joggt", droite: "die joggende Frau" }, { gauche: "der Zug, der ankommt", droite: "der ankommende Zug" }] },
      { type: "qcm", consigne: "Choisissez.", question: "« die im Park joggende Frau » est…", options: ["un attribut participial étendu", "une faute", "un superlatif"], correct: 0, explication: "Participe + ses compléments devant le nom." }
    ]
  },
  c2g10: {
    id: "c2g10",
    einstieg: {"intro":"Observe ces adjectifs/participes devenus noms.","exemples":[{"de":"der Angestellte / ein Angestellter","fr":"l'employé / un employé"},{"de":"der Vorsitzende","fr":"le président (de séance)"},{"de":"nichts Wichtiges","fr":"rien d'important"}],"question":"Comment un participe devient-il un nom décliné ?"},
    merke: ["Adjectif/participe nominalisé : majuscule + garde la *déclinaison de l'adjectif* (*der Angestellte, ein Angestellter*).","Personnes : *der/die Reisende, der Vorsitzende, der Deutsche*.","Après *etwas/nichts/viel/wenig* → neutre fort en *-es* (*etwas Wichtiges*)."],
    achtung: [{"erreur":"ein Angestellte","correct":"ein **Angestellter**","explication":"Nominalisé masculin après *ein* → -er."},{"erreur":"nichts Wichtige","correct":"nichts **Wichtiges**","explication":"Après *nichts*, neutre fort en -es."}],
    kontrast: {"titre":"Nominalisation (C2) : allemand vs français","similitudes":["On nominalise des adjectifs (« l'employé »)."],"differences":["Le nom garde la *déclinaison* de l'adjectif (ein Angestellter).","Varie selon l'article (der/ein Angestellte(r)).","Après etwas/nichts → -es."]}, titre: "Adjectifs et participes nominalisés", titreDE: "Nominalisierte Adjektive und Partizipien", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Nominaliser adjectifs et participes", "Décliner ces noms"],
    grammairePoints: ["der Reisende, der Angestellte", "das Wesentliche, etwas Neues"],
    exemplesPlus: [{"de":"Das Wesentliche lässt sich in einem Satz zusammenfassen.","fr":"*das Wesentliche*: nominalisiertes Adjektiv."},{"de":"Die Verantwortlichen wurden zur Rechenschaft gezogen.","fr":"*die Verantwortlichen*: nominalisiert, Plural."},{"de":"Sie suchte nach etwas grundlegend Anderem.","fr":"*etwas Anderes*: nach *etwas* großgeschrieben."},{"de":"Den Vorsitzenden traf keine Schuld.","fr":"*der Vorsitzende → den Vorsitzenden* (Akkusativ)."},{"de":"Im Folgenden werden die Ergebnisse erläutert.","fr":"*im Folgenden*: feste nominalisierte Wendung."}],
    coursDE: [
      "Die **Nominalisierung** von Adjektiven und Partizipien ist im Deutschen hochproduktiv. Das umgewandelte Wort wird **großgeschrieben**, behält jedoch seine **Adjektivdeklination** – ein Detail, das auf C2 fehlerfrei beherrscht werden muss.",
      "Für **Personen** entstehen geläufige Substantive: *der/die Reisende, der Angestellte, der Vorsitzende, der/die Deutsche*. Die Endung richtet sich nach Artikel und Kasus wie bei einem Adjektiv: « *ein **Reisender*** », « *die Rechte **des Angestellten*** », « *mit den **Vorsitzenden*** ».",
      "Für **Abstrakta** dient das Neutrum, häufig nach *das, etwas, nichts, viel, wenig*: *das **Wesentliche**, das **Gegenteil**, etwas **Neues**, nichts **Besonderes***. Beispiel: « *Er hat **nichts Wichtiges** gesagt* ».",
      "Diese Nominalisierungen verdichten die Aussage und gehören zum **Nominalstil** der gehobenen Schriftsprache. Die Hürde liegt allein in der korrekten, vom Kontext abhängigen Endung – ihre sichere Beherrschung ist ein verlässlicher Gradmesser für das Sprachniveau."
    ],
    grammaire: [
      { regle: "Adjectifs/participes **nominalisés** (majuscule), gardant la déclinaison d'adjectif : *der Reisende, das Wesentliche, ein Bekannter*.", attention: "Après **etwas/nichts** → forme en **-es** : *etwas Wesentlich**es***.", exemples: [{"de":"Ich half einem Reisenden.","fr":"J'ai aidé un voyageur."},{"de":"Das ist das Wesentliche.","fr":"C'est l'essentiel."}], titre: "Quand l'adjectif/participe devient nom", intro: "Adjectifs et participes se nominalisent (majuscule) en gardant leur déclinaison d'adjectif.",
        tableau: { entetes: ["Origine", "Nom", "Sens"], lignes: [["reisend", "der/die Reisende", "le voyageur"], ["angestellt", "der/die Angestellte", "l'employé(e)"], ["wesentlich", "das Wesentliche", "l'essentiel"], ["bekannt", "ein Bekannter", "une connaissance"], ["neu (après etwas)", "etwas Neues", "qqch de nouveau"]] },
        note: "Déclinaison : der Angestellte / ein Angestellter / dem Angestellten ; das Wesentliche / etwas Wesentliches." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Un participe nominalisé garde…", options: ["sa déclinaison d'adjectif", "une forme figée", "aucune déclinaison"], correct: 0, explication: "der Reisende / ein Reisender." },
      { type: "qcm", consigne: "Choisissez (datif).", question: "Ich half einem ___. (reisend)", options: ["Reisenden", "Reisende", "Reisender", "Reisendes"], correct: 0, explication: "ein + datif → einem Reisenden." },
      { type: "trou", consigne: "Complétez (après etwas).", texte: "Er hat etwas {0} entdeckt. (wesentlich)", accepte: [["Wesentliches"]], indice: "etwas + adjectif nominalisé en -es" },
      { type: "association", consigne: "Associez l'origine et le nom.", paires: [{ gauche: "reisend", droite: "der Reisende" }, { gauche: "angestellt", droite: "der Angestellte" }, { gauche: "wesentlich", droite: "das Wesentliche" }, { gauche: "bekannt", droite: "ein Bekannter" }] },
      { type: "qcm", consigne: "Choisissez (nominatif, sans article).", question: "Ein ___ wartet draußen. (reisend)", options: ["Reisender", "Reisende", "Reisenden", "Reisendes"], correct: 0, explication: "ein + masc. nom. → Reisender." }
    ]
  },
  c2g11: {
    id: "c2g11",
    einstieg: {"intro":"Observe les relatives, même explicatives.","exemples":[{"de":"die Frau, mit der ich sprach","fr":"la femme avec qui j'ai parlé"},{"de":"das Haus, dessen Dach rot ist","fr":"la maison dont le toit est rouge"},{"de":"Er kam zu spät, was mich ärgerte.","fr":"Il arriva trop tard, ce qui m'agaça."}],"question":"Comment relier toutes les relatives, même explicatives ?"},
    merke: ["Relatif décliné selon sa fonction (*der/den/dem/dessen* …).","Génitif relatif : *dessen* (masc./neutre), *deren* (fém./pluriel) = « dont ».","Relative à toute la phrase : *was* (*…, was mich freut*) ; lieu : *wo*."],
    achtung: [{"erreur":"die Frau, mit die ich sprach","correct":"die Frau, mit **der** ich sprach","explication":"*mit* + datif → relatif *der*."},{"erreur":"Er kam zu spät, das mich ärgerte.","correct":"Er kam zu spät, **was** mich ärgerte.","explication":"Relative renvoyant à toute la phrase → *was*."}],
    kontrast: {"titre":"Les relatives (C2) : allemand vs français","similitudes":["« qui / que / dont / où » existent."],"differences":["Le relatif se *décline* selon sa fonction (den/dem/dessen).","« dont » = *dessen/deren*.","*was* renvoie à une phrase entière."]}, titre: "Les propositions relatives", titreDE: "Relativsätze", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Maîtriser tous les relatifs", "Employer les relatives explicatives (weiterführend)"],
    grammairePoints: ["dessen/deren, was, wo", "relative explicative (, was …)"],
    exemplesPlus: [{"de":"Der Wissenschaftler, dessen Thesen lange umstritten waren, erhielt nun den Preis.","fr":"*dessen*: Relativpronomen im Genitiv."},{"de":"Sie schwieg, was die Lage zusätzlich verschärfte.","fr":"*, was*: bezieht sich auf den ganzen Hauptsatz."},{"de":"Alles, was glänzt, ist nicht Gold.","fr":"*was* als Relativpronomen nach *alles*."},{"de":"Die Region, aus der er stammt, ist wirtschaftlich schwach.","fr":"Präposition + Relativpronomen: *aus der*."},{"de":"Es gibt Momente, in denen Schweigen beredter ist als Worte.","fr":"Relativsatz mit Präposition im Plural."}],
    coursDE: [
      "**Relativsätze** sind auf C2-Niveau in ihrer ganzen Bandbreite verfügbar – einschließlich der Genitivformen, der Relativadverbien und der weiterführenden Relativsätze, die einen ganzen Sachverhalt kommentieren.",
      "Das Relativpronomen kongruiert in **Genus und Numerus** mit dem Bezugswort, sein **Kasus** ergibt sich aus der Funktion im Relativsatz. Die **Genitivformen** *dessen* (m./n.) und *deren* (f./Pl.) sind aktiv zu verwenden: « *der Wissenschaftler, **dessen** Theorie umstritten ist* ».",
      "Mit vorangestellter **Präposition** entstehen präzise Fügungen: « *das Ziel, **auf das** wir hinarbeiten* », « *die Kollegin, **mit deren** Hilfe das gelang* ». Das Relativadverb **wo(r)-** ersetzt Präposition + Pronomen bei Sachen, **wo** bei Orten.",
      "Charakteristisch für den gehobenen Stil ist der **weiterführende Relativsatz** mit *was*, der sich auf den **ganzen vorangehenden Satz** bezieht: « *Er kam zu spät, **was** alle verärgerte* ». So lässt sich ein Kommentar elegant anschließen, statt einen neuen Hauptsatz zu beginnen."
    ],
    grammaire: [
      { exemples: [{"de":"Er kam zu spät, was alle ärgerte.","fr":"Il est arrivé en retard, ce qui a agacé tout le monde."},{"de":"Die Firma, deren Chef ich kenne, expandiert.","fr":"L'entreprise dont je connais le patron se développe."}], regle: "Relatifs avancés et **explicatifs** : génitif (*dessen/deren*), *was* (après *das Beste*…), **relative explicative** « *, was …* » qui reprend toute la phrase.", attention: "« , was … » commente l'**ensemble** de la principale (*Er log, **was** niemanden überraschte*).", titre: "Relatives avancées et explicatives", intro: "Outre der/die/das, on emploie le génitif relatif (dessen/deren), was/wo, et la relative explicative qui reprend toute la phrase.",
        tableau: { entetes: ["Type", "Pronom", "Exemple"], lignes: [["génitif", "dessen / deren", "der Autor, dessen Werk …"], ["+ préposition", "mit dem, für die", "die Frau, mit der ich sprach"], ["neutre/abstrait", "was", "das Beste, was …"], ["explicative (phrase)", ", was …", "Er kam zu spät, was alle ärgerte."]] },
        schemas: [{ legende: "Relative explicative : virgule + was reprend toute la phrase.", mots: [{ m: "Er log,", r: "principale", c: "objet" }, { m: "was", r: "reprend la phrase", c: "conj" }, { m: "niemanden", r: "complément", c: "sujet" }, { m: "überraschte", r: "verbe (fin)", c: "fin" }] }],
        note: "La relative explicative en « , was … » commente l'ensemble de la principale (ce qui …)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Dans « Er kam zu spät, was alle ärgerte », « was » reprend…", options: ["toute la phrase précédente", "un nom masculin", "un lieu"], correct: 0, explication: "relative explicative : was = ce qui." },
      { type: "qcm", consigne: "Choisissez (génitif relatif).", question: "Die Firma, ___ Chef ich kenne, expandiert.", options: ["deren", "dessen", "die", "der"], correct: 0, explication: "die Firma (fém.) génitif → deren." },
      { type: "trou", consigne: "Complétez (après das Beste).", texte: "Das ist das Beste, {0} mir passieren konnte.", accepte: [["was"]], indice: "après superlatif neutre → was" },
      { type: "association", consigne: "Associez le contexte et le relatif.", paires: [{ gauche: "génitif masc.", droite: "dessen" }, { gauche: "génitif fém./plur.", droite: "deren" }, { gauche: "après alles/das Beste", droite: "was" }, { gauche: "lieu", droite: "wo" }] },
      { type: "ordre", consigne: "Construisez la relative (génitif).", mots: ["dessen", "Werk", "ich", "bewundere"], correct: "dessen Werk ich bewundere", traduction: "dont j'admire l'œuvre" }
    ]
  }
});
