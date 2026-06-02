/* =====================================================================
   grammaire-c21.js — 11 LEÇONS DE GRAMMAIRE du module C2.1
   (window.GRAMMAIRE_C2). Suit les 11 points de grammaire C2.1 du
   programme. Niveau maîtrise (C2), schémas colorés.
   ===================================================================== */
window.GRAMMAIRE_C2 = Object.assign(window.GRAMMAIRE_C2 || {}, {
  c2g01: {
    id: "c2g01", titre: "Les temps des verbes", titreDE: "Die Tempora", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Maîtriser les six temps", "Employer le futur II (supposition sur le passé)"],
    grammairePoints: ["Präsens, Perfekt, Präteritum, Plusquamperfekt", "Futur I / Futur II"],
    grammaire: [
      { titre: "Le système temporel complet", intro: "Le C2 maîtrise les six temps, dont le Futur II, souvent employé pour une supposition sur le passé.",
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
    id: "c2g02", titre: "Verbes à préfixes", titreDE: "Verben mit Vorsilben", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Distinguer préfixes séparables et inséparables", "Gérer les préfixes à double valeur"],
    grammairePoints: ["be-, er-, ver- (inséparables)", "um-, durch-, über- (mixtes)"],
    grammaire: [
      { titre: "Séparables, inséparables et mixtes", intro: "Les préfixes inséparables (be-, er-, ent-, ver-, zer-, miss-) restent collés ; les séparables (ab-, an-, auf-, ein-, vor-, zu-…) se détachent. Certains (um-, durch-, über-, unter-) varient avec le sens.",
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
    id: "c2g03", titre: "Le subjonctif II", titreDE: "Der Konjunktiv II", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Maîtriser présent, passé et modaux", "Exprimer l'irréel complexe"],
    grammairePoints: ["würde, hätte, wäre", "hätte … können (passé + modal)"],
    grammaire: [
      { titre: "L'irréel sous toutes ses formes", intro: "Au C2, on manie le Konjunktiv II au présent, au passé et avec modaux (double infinitif).",
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
    id: "c2g04", titre: "Le subjonctif I", titreDE: "Der Konjunktiv I", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Former le Konjunktiv I", "Rapporter affirmations, questions et ordres"],
    grammairePoints: ["sei, habe, könne, werde", "Ersatzformen (→ KII)"],
    grammaire: [
      { titre: "Le discours indirect soigné", intro: "Le Konjunktiv I rapporte des propos ; on adapte questions (ob/W-) et ordres (sollen), et on substitue le KII si la forme = indicatif.",
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
    id: "c2g05", titre: "Les subordonnées circonstancielles", titreDE: "Adverbialsätze", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Reconnaître les types de circonstancielles", "Choisir la bonne conjonction"],
    grammairePoints: ["temporal, kausal, konzessiv", "final, konditional, modal"],
    grammaire: [
      { titre: "Panorama des circonstancielles", intro: "Chaque circonstance a ses conjonctions ; toutes rejettent le verbe à la fin.",
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
    id: "c2g06", titre: "Les compléments des verbes", titreDE: "Verbergänzungen und Kasus", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Maîtriser la rection des verbes", "Employer les verbes à génitif"],
    grammairePoints: ["verbes à datif/accusatif", "verbes à génitif (bedürfen, gedenken)"],
    grammaire: [
      { titre: "La rection (Rektion) des verbes", intro: "Chaque verbe impose un cas ou une préposition. Au C2, on connaît aussi les rares verbes à génitif.",
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
    id: "c2g07", titre: "Locutions verbo-nominales", titreDE: "Nomen-Verb-Verbindungen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Employer des Funktionsverbgefüge soutenues", "Reformuler avec un verbe simple"],
    grammairePoints: ["in Anspruch nehmen, in Betracht ziehen", "zur Sprache bringen"],
    grammaire: [
      { titre: "Les locutions du registre formel", intro: "Ces tournures nom + verbe support sont fréquentes à l'écrit académique et administratif.",
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
    id: "c2g08", titre: "Formation des noms", titreDE: "Wortbildung: Nomen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Reconnaître les suffixes nominaux", "Former des noms et des composés"],
    grammairePoints: ["-ung, -heit, -keit, -schaft", "Komposita"],
    grammaire: [
      { titre: "Suffixes et mots composés", intro: "Les noms se forment par dérivation (suffixes) ou composition. Le suffixe détermine souvent le genre.",
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
    id: "c2g09", titre: "Participes comme adjectifs", titreDE: "Partizipien als Adjektive", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Employer le participe attribut", "Construire un attribut participial étendu"],
    grammairePoints: ["Partizip I (actif)", "Partizip II (passif/accompli)"],
    grammaire: [
      { titre: "Le participe épithète, simple et étendu", intro: "Placé devant le nom et décliné, le participe condense une relative ; il peut porter ses propres compléments (attribut étendu).",
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
    id: "c2g10", titre: "Adjectifs et participes nominalisés", titreDE: "Nominalisierte Adjektive und Partizipien", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Nominaliser adjectifs et participes", "Décliner ces noms"],
    grammairePoints: ["der Reisende, der Angestellte", "das Wesentliche, etwas Neues"],
    grammaire: [
      { titre: "Quand l'adjectif/participe devient nom", intro: "Adjectifs et participes se nominalisent (majuscule) en gardant leur déclinaison d'adjectif.",
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
    id: "c2g11", titre: "Les propositions relatives", titreDE: "Relativsätze", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Maîtriser tous les relatifs", "Employer les relatives explicatives (weiterführend)"],
    grammairePoints: ["dessen/deren, was, wo", "relative explicative (, was …)"],
    grammaire: [
      { titre: "Relatives avancées et explicatives", intro: "Outre der/die/das, on emploie le génitif relatif (dessen/deren), was/wo, et la relative explicative qui reprend toute la phrase.",
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
