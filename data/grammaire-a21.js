/* =====================================================================
   grammaire-a21.js — 9 LEÇONS DE GRAMMAIRE du module A2.1
   (window.GRAMMAIRE_A2). Schéma identique aux fiches A1.
   ===================================================================== */
window.GRAMMAIRE_A2 = Object.assign(window.GRAMMAIRE_A2 || {}, {
  a2g01: {
    id: "a2g01", titre: "Les verbes au prétérit", titreDE: "Das Präteritum", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Former le prétérit (récit écrit)", "Connaître le prétérit des modaux"],
    grammairePoints: ["Präteritum", "konnte, musste…"],
    grammaire: [
      { titre: "Le prétérit (temps du récit écrit)", intro: "Réguliers : radical + -te. Irréguliers : radical modifié.",
        tableau: { entetes: ["Infinitif", "Type", "er/sie/es"], lignes: [["machen", "régulier", "machte"], ["arbeiten", "régulier", "arbeitete"], ["gehen", "irrégulier", "ging"], ["kommen", "irrégulier", "kam"], ["müssen", "modal", "musste"], ["können", "modal", "konnte"]] },
        note: "À l'oral on préfère le Perfekt ; le Präteritum domine à l'écrit (récits, presse) et pour sein/haben/modaux." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le prétérit régulier se forme avec…", options: ["radical + -te", "ge- + -t", "radical + -st"], correct: 0, explication: "machen → machte." },
      { type: "qcm", consigne: "Prétérit de « können ».", question: "Ich ___ nicht kommen.", options: ["konnte", "kann", "könnte", "gekonnt"], correct: 0, explication: "können → konnte." },
      { type: "trou", consigne: "Complétez (prétérit de machen).", texte: "Gestern {0} er seine Hausaufgaben.", accepte: [["machte"]], indice: "régulier : mach + te" },
      { type: "association", consigne: "Associez infinitif → prétérit.", paires: [{ gauche: "gehen", droite: "ging" }, { gauche: "kommen", droite: "kam" }, { gauche: "sein", droite: "war" }, { gauche: "haben", droite: "hatte" }] },
      { type: "ordre", consigne: "Phrase au prétérit.", mots: ["Er", "ging", "nach", "Hause"], correct: "Er ging nach Hause", traduction: "Il rentra à la maison." }
    ]
  },
  a2g02: {
    id: "a2g02", titre: "Le passé composé (approfondi)", titreDE: "Das Perfekt", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Former le Perfekt", "Choisir haben ou sein", "Participes irréguliers"],
    grammairePoints: ["haben/sein + participe", "Partizip II"],
    grammaire: [
      { titre: "Auxiliaire + participe (à la fin)", intro: "Mouvement / changement d'état → sein. Sinon → haben.",
        tableau: { entetes: ["Infinitif", "Auxiliaire", "Participe II"], lignes: [["machen", "haben", "gemacht"], ["sehen", "haben", "gesehen"], ["gehen", "sein", "gegangen"], ["fahren", "sein", "gefahren"], ["bleiben", "sein", "geblieben"], ["aufstehen", "sein", "aufgestanden"]] },
        note: "Verbes en -ieren : pas de ge- (studieren → studiert). Séparables : ge- au milieu (eingekauft)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez l'auxiliaire.", question: "Ich ___ ins Kino gegangen.", options: ["bin", "habe", "war", "hatte"], correct: 0, explication: "gehen (mouvement) → sein." },
      { type: "qcm", consigne: "Participe de « sehen ».", question: "Ich habe einen Film ___.", options: ["gesehen", "geseht", "gesieht", "sah"], correct: 0, explication: "sehen → gesehen (irrégulier)." },
      { type: "trou", consigne: "Complétez (auxiliaire).", texte: "Wir {0} Pizza gegessen und dann {1} wir nach Hause gefahren.", accepte: [["haben"], ["sind"]], indice: "essen → haben ; fahren → sein" },
      { type: "association", consigne: "Associez → participe.", paires: [{ gauche: "fahren", droite: "gefahren" }, { gauche: "bleiben", droite: "geblieben" }, { gauche: "studieren", droite: "studiert" }, { gauche: "einkaufen", droite: "eingekauft" }] },
      { type: "ordre", consigne: "Phrase au Perfekt.", mots: ["Ich", "habe", "einen", "Film", "gesehen"], correct: "Ich habe einen Film gesehen", traduction: "J'ai vu un film." }
    ]
  },
  a2g03: {
    id: "a2g03", titre: "Le groupe de noms (déclinaison)", titreDE: "Die Nomengruppe", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Décliner l'article selon le cas", "Reconnaître nominatif / accusatif / datif"],
    grammairePoints: ["Déclinaison de l'article", "Nom./Acc./Dat."],
    grammaire: [
      { titre: "L'article défini selon le cas", intro: "L'article change selon la fonction du nom dans la phrase.",
        tableau: { entetes: ["Cas", "masculin", "féminin", "neutre", "pluriel"], lignes: [["Nominatif (sujet)", "der", "die", "das", "die"], ["Accusatif (COD)", "den", "die", "das", "die"], ["Datif (COI)", "dem", "der", "dem", "den +n"]] },
        note: "Indéfini : ein/eine → einen (m. acc.) → einem/einer (datif). Au pluriel datif, le nom prend souvent un -n." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Quel cas pour le COD ?", options: ["Accusatif", "Datif", "Nominatif"], correct: 0, explication: "Le complément d'objet direct = accusatif." },
      { type: "qcm", consigne: "Datif.", question: "Ich gebe ___ Mann das Buch.", options: ["dem", "den", "der", "das"], correct: 0, explication: "der Mann au datif (COI) → dem." },
      { type: "trou", consigne: "Complétez (den/dem).", texte: "Ich sehe {0} Hund und gebe {1} Hund Wasser.", accepte: [["den"], ["dem"]], indice: "COD → accusatif ; COI → datif" },
      { type: "association", consigne: "Associez cas → article masculin.", paires: [{ gauche: "Nominatif", droite: "der" }, { gauche: "Accusatif", droite: "den" }, { gauche: "Datif", droite: "dem" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je donne le livre à la femme.", accepte: ["Ich gebe der Frau das Buch"], aide: "der Frau (datif) + das Buch (acc.)" }
    ]
  },
  a2g04: {
    id: "a2g04", titre: "La négation (approfondie)", titreDE: "Die Verneinung", theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Placer nicht correctement", "Utiliser kein, nichts, niemand, nie"],
    grammairePoints: ["nicht / kein", "nichts, niemand, nie"],
    grammaire: [
      { titre: "Les mots de négation", intro: "kein nie un nom ; nicht le reste ; et des mots spécifiques.",
        tableau: { entetes: ["Mot", "Sens", "Exemple"], lignes: [["kein", "aucun/pas de", "Ich habe kein Auto."], ["nicht", "ne… pas", "Ich komme nicht."], ["nichts", "rien", "Ich sehe nichts."], ["niemand", "personne", "Niemand ist da."], ["nie", "jamais", "Ich rauche nie."]] },
        note: "« nicht » se place en général à la fin, mais AVANT un adjectif/lieu : « Das ist nicht gut »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "___ ist im Büro. (personne)", options: ["Niemand", "Nichts", "Nicht", "Kein"], correct: 0, explication: "niemand = personne." },
      { type: "qcm", consigne: "nicht ou kein ?", question: "Ich habe ___ Hunger.", options: ["keinen", "nicht", "nichts", "nie"], correct: 0, explication: "der Hunger (m.) sans article → keinen." },
      { type: "trou", consigne: "Complétez.", texte: "Ich sehe {0}. (rien)", accepte: [["nichts"]], indice: "rien" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "nichts", droite: "rien" }, { gauche: "niemand", droite: "personne" }, { gauche: "nie", droite: "jamais" }, { gauche: "kein", droite: "aucun" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je ne fume jamais.", accepte: ["Ich rauche nie"], aide: "nie" }
    ]
  },
  a2g05: {
    id: "a2g05", titre: "Principales et subordonnées", titreDE: "Haupt- und Nebensätze", theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Distinguer principale et subordonnée", "Placer le verbe (2e position vs fin)"],
    grammairePoints: ["weil, dass, wenn, obwohl", "Ordre des mots"],
    grammaire: [
      { titre: "Subordonnées : verbe à la FIN", intro: "weil, dass, wenn, obwohl introduisent une subordonnée → verbe conjugué à la fin.",
        tableau: { entetes: ["Conjonction", "Sens", "Exemple"], lignes: [["weil", "parce que", "…, weil ich müde bin."], ["dass", "que", "Ich denke, dass es gut ist."], ["wenn", "si / quand", "…, wenn ich Zeit habe."], ["obwohl", "bien que", "…, obwohl es regnet."]] },
        schemas: [
          { legende: "Principale : verbe en 2e position.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "bleibe", r: "verbe (2)", c: "verbe" }, { m: "zu Hause", r: "complément", c: "objet" }] },
          { legende: "Subordonnée (weil) : le verbe est rejeté à la FIN.", mots: [{ m: "…, weil", r: "connecteur", c: "conj" }, { m: "ich", r: "sujet", c: "sujet" }, { m: "müde", r: "complément", c: "objet" }, { m: "bin", r: "verbe (fin)", c: "fin" }] }
        ],
        note: "Si la subordonnée est en tête, la principale commence par le verbe : « Weil ich müde bin, bleibe ich zu Hause »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Avec « obwohl », le verbe va…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "obwohl = subordination → verbe à la fin." },
      { type: "qcm", consigne: "Complétez.", question: "Ich bleibe zu Hause, weil es ___.", options: ["regnet", "regnet nicht heute", "es regnet", "regnen"], correct: 0, explication: "verbe à la fin : … weil es regnet." },
      { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Ich glaube, dass er morgen {0}. (kommen)", accepte: [["kommt"]], indice: "dass → verbe à la fin" },
      { type: "ordre", consigne: "Construisez la subordonnée.", mots: ["weil", "ich", "müde", "bin"], correct: "weil ich müde bin", traduction: "parce que je suis fatigué" },
      { type: "qcm", consigne: "Choisissez la conjonction.", question: "Ich gehe spazieren, ___ es regnet. (bien que)", options: ["obwohl", "weil", "dass", "wenn"], correct: 0, explication: "obwohl = bien que." }
    ]
  },
  a2g06: {
    id: "a2g06", titre: "Verbes avec datif et accusatif", titreDE: "Verben mit Dativ und Akkusativ", theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Reconnaître les verbes à datif", "Construire « donner qqch à qqn »"],
    grammairePoints: ["helfen, danken (datif)", "geben jdm etwas"],
    grammaire: [
      { titre: "Datif seul, ou datif + accusatif", intro: "Certains verbes demandent le datif ; d'autres datif (personne) + accusatif (chose).",
        tableau: { entetes: ["Verbe", "Construction", "Exemple"], lignes: [["helfen", "+ datif", "Ich helfe dir."], ["danken", "+ datif", "Ich danke Ihnen."], ["gefallen", "+ datif", "Das gefällt mir."], ["geben", "datif + accusatif", "Ich gebe dem Kind einen Apfel."], ["schenken", "datif + accusatif", "Er schenkt ihr Blumen."]] },
        schemas: [
          { legende: "Donner : à QUI (datif) + QUOI (accusatif).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "gebe", r: "verbe (2)", c: "verbe" }, { m: "dem Kind", r: "datif (à qui)", c: "objet" }, { m: "einen Apfel", r: "accusatif (quoi)", c: "fin" }] }
        ],
        note: "Ordre habituel : datif (personne) AVANT accusatif (chose), quand les deux sont des noms." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« helfen » se construit avec…", options: ["le datif", "l'accusatif", "le nominatif"], correct: 0, explication: "helfen + datif : Ich helfe dir." },
      { type: "qcm", consigne: "Complétez (datif).", question: "Das Buch gefällt ___. (à moi)", options: ["mir", "mich", "ich", "meiner"], correct: 0, explication: "gefallen + datif → mir." },
      { type: "trou", consigne: "Complétez (datif + accusatif).", texte: "Ich gebe {0} Kind {1} Apfel.", accepte: [["dem"], ["einen"]], indice: "à qui (datif) / quoi (accusatif)" },
      { type: "association", consigne: "Associez le verbe et son cas.", paires: [{ gauche: "helfen", droite: "datif" }, { gauche: "danken", droite: "datif" }, { gauche: "sehen", droite: "accusatif" }, { gauche: "gefallen", droite: "datif" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je t'aide.", accepte: ["Ich helfe dir"], aide: "helfen + datif" }
    ]
  },
  a2g07: {
    id: "a2g07", titre: "Le subjonctif II (conditionnel)", titreDE: "Konjunktiv II", theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Exprimer l'irréel et le souhait", "Faire une demande polie"],
    grammairePoints: ["würde + Inf.", "wäre, hätte, könnte"],
    grammaire: [
      { titre: "Formes du Konjunktiv II", intro: "würde + infinitif pour la plupart ; sein/haben/modaux ont une forme propre.",
        tableau: { entetes: ["Verbe", "Konjunktiv II", "Exemple"], lignes: [["sein", "wäre", "Wenn ich reich wäre…"], ["haben", "hätte", "Ich hätte gern Kaffee."], ["können", "könnte", "Könnten Sie helfen?"], ["werden", "würde", "Ich würde gern reisen."]] },
        note: "Demande polie : « Könnten Sie… ? », « Ich hätte gern… », « Würden Sie… ? »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Demande polie : « ___ Sie mir helfen? »", options: ["Könnten", "Können", "Konnten", "Kannst"], correct: 0, explication: "Konjunktiv II poli : Könnten Sie…" },
      { type: "qcm", consigne: "Konjunktiv II de haben.", question: "Ich ___ gern einen Kaffee.", options: ["hätte", "habe", "hatte", "würde"], correct: 0, explication: "haben → hätte." },
      { type: "trou", consigne: "Complétez (würde/wäre).", texte: "Wenn ich Zeit {0}, {1} ich mehr lesen.", accepte: [["hätte"], ["würde"]], indice: "haben → hätte ; verbe → würde" },
      { type: "ordre", consigne: "Demande polie.", mots: ["Könnten", "Sie", "mir", "helfen"], correct: "Könnten Sie mir helfen", traduction: "Pourriez-vous m'aider ?" },
      { type: "oral", consigne: "Production orale.", prompt: "Demandez poliment l'addition au restaurant (Konjunktiv II).", attendus: ["könnte", "hätte"], modele: "Könnten Sie mir bitte die Rechnung bringen? Ich hätte gern die Rechnung." }
    ]
  },
  a2g08: {
    id: "a2g08", titre: "Les indicateurs de temps", titreDE: "Temporale Angaben", theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Situer dans le temps", "Choisir la bonne préposition / le bon cas"],
    grammairePoints: ["am, im, um, seit, vor", "jeden Tag (accusatif)"],
    grammaire: [
      { titre: "Dire quand", intro: "Chaque repère temporel a sa structure.",
        tableau: { entetes: ["Expression", "Sens", "Exemple"], lignes: [["am + jour", "le…", "am Montag"], ["im + mois/saison", "en…", "im Sommer"], ["um + heure", "à…", "um 8 Uhr"], ["seit + datif", "depuis", "seit zwei Jahren"], ["vor + datif", "il y a", "vor einer Woche"], ["jeden Tag (acc.)", "chaque jour", "jeden Tag, jede Woche"]] },
        note: "Durée habituelle à l'accusatif : jeden Tag, jeden Morgen, letzten Montag." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "___ zwei Jahren wohne ich hier.", options: ["Seit", "Vor", "Am", "Um"], correct: 0, explication: "seit + datif = depuis." },
      { type: "qcm", consigne: "Choisissez.", question: "Wir treffen uns ___ Freitag.", options: ["am", "im", "um", "seit"], correct: 0, explication: "jour → am." },
      { type: "trou", consigne: "Complétez.", texte: "{0} Sommer fahre ich {1} 9 Uhr los.", accepte: [["im"], ["um"]], indice: "saison / heure" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "am", droite: "Montag" }, { gauche: "im", droite: "Juli" }, { gauche: "um", droite: "10 Uhr" }, { gauche: "seit", droite: "2020" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Il y a une semaine.", accepte: ["Vor einer Woche", "vor einer woche"], aide: "vor + datif" }
    ]
  },
  a2g09: {
    id: "a2g09", titre: "Les cas (vue d'ensemble)", titreDE: "Die Fälle", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Comprendre à quoi sert chaque cas", "Poser la bonne question (wer/wen/wem)"],
    grammairePoints: ["Nominatif/Accusatif/Datif", "wer? wen? wem?"],
    grammaire: [
      { titre: "Les 3 cas essentiels", intro: "Chaque cas a une fonction et une question.",
        tableau: { entetes: ["Cas", "Fonction", "Question", "Exemple"], lignes: [["Nominatif", "sujet", "wer? (qui ?)", "Der Mann schläft."], ["Accusatif", "COD", "wen/was?", "Ich sehe den Mann."], ["Datif", "COI (à qui)", "wem?", "Ich helfe dem Mann."]] },
        note: "Astuce : le cas dépend du verbe et des prépositions. mit/zu/bei… → datif ; durch/für/ohne… → accusatif." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Quelle question pour le datif ?", options: ["wem?", "wen?", "wer?"], correct: 0, explication: "Datif → wem? (à qui ?)." },
      { type: "qcm", consigne: "Identifiez le cas.", question: "« Ich sehe den Hund. » → den Hund est…", options: ["accusatif (COD)", "datif", "nominatif"], correct: 0, explication: "COD → accusatif." },
      { type: "trou", consigne: "Complétez (der/den/dem).", texte: "{0} Mann (sujet) gibt {1} Kind (à qui) {2} Ball (quoi).", accepte: [["Der"], ["dem"], ["den"]], indice: "nominatif / datif / accusatif" },
      { type: "association", consigne: "Associez cas → question.", paires: [{ gauche: "Nominatif", droite: "wer?" }, { gauche: "Accusatif", droite: "wen?" }, { gauche: "Datif", droite: "wem?" }] },
      { type: "qcm", consigne: "Préposition + datif ?", question: "Lequel est toujours + datif ?", options: ["mit", "für", "durch", "ohne"], correct: 0, explication: "mit + datif. (für/durch/ohne + accusatif.)" }
    ]
  }
});
