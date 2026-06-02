/* =====================================================================
   placement.js — Test de placement (Einstufungstest)
   Le coach évalue le niveau : on part de A1 et on monte tant que
   l'apprenant réussit. Chaque étape mêle grammaire (écrit), écoute et,
   à partir de A2/B1, une tâche de production écrite/orale (comme à
   l'examen). Le niveau retenu est la première étape où il bute.
   window.PLACEMENT = [ { code, titre, items:[exercices] }, ... ]
   ===================================================================== */
window.PLACEMENT = [
  {
    code: "A1", titre: "Étape A1 — les bases",
    items: [
      { type: "qcm", consigne: "Grammaire — choisissez.", question: "Ich ___ Anna.", options: ["heiße", "heißt", "heißen", "heißst"], correct: 0, explication: "ich → heiße." },
      { type: "trou", consigne: "Écrit — complétez (kommen).", texte: "Ich {0} aus Frankreich.", accepte: [["komme"]], indice: "ich komme" },
      { type: "ecoute", consigne: "Écoute — à quelle heure se lève-t-il ?", audio: "Ich stehe um sieben Uhr auf.", options: ["Um 7 Uhr", "Um 9 Uhr", "Um 8 Uhr"], correct: 0, explication: "« um sieben Uhr »." },
      { type: "ordre", consigne: "Écrit — remettez dans l'ordre.", mots: ["Ich", "wohne", "in", "Berlin"], correct: "Ich wohne in Berlin", traduction: "J'habite à Berlin." }
    ]
  },
  {
    code: "A2", titre: "Étape A2 — quotidien & passé",
    items: [
      { type: "qcm", consigne: "Grammaire — choisissez l'auxiliaire.", question: "Ich ___ ins Kino gegangen.", options: ["bin", "habe", "war", "hatte"], correct: 0, explication: "gehen (mouvement) → sein." },
      { type: "trou", consigne: "Écrit — complétez (datif).", texte: "Ich helfe {0} Mann.", accepte: [["dem"]], indice: "helfen + datif → dem" },
      { type: "ecoute", consigne: "Écoute — quand est-ce arrivé ?", audio: "Gestern habe ich einen Film gesehen.", options: ["Hier (gestern)", "Aujourd'hui", "Demain"], correct: 0, explication: "« gestern » = hier." },
      { type: "ordre", consigne: "Écrit — remettez dans l'ordre (Perfekt).", mots: ["Ich", "habe", "Pizza", "gegessen"], correct: "Ich habe Pizza gegessen", traduction: "J'ai mangé une pizza." },
      { type: "production", consigne: "Production écrite (auto-évaluée).", prompt: "Décrivez votre journée d'hier en 2 phrases (Perfekt).", attendus: ["habe", "gegangen"], modele: "Gestern bin ich früh aufgestanden und habe gearbeitet. Am Abend habe ich einen Film gesehen." }
    ]
  },
  {
    code: "B1", titre: "Étape B1 — nuances",
    items: [
      { type: "qcm", consigne: "Grammaire — conseil (Konjunktiv II).", question: "An deiner Stelle ___ ich mehr lernen.", options: ["würde", "werde", "will", "wurde"], correct: 0, explication: "conseil → würde + infinitif." },
      { type: "trou", consigne: "Écrit — pronom relatif (accusatif).", texte: "Der Film, {0} ich gesehen habe, war gut.", accepte: [["den"]], indice: "COD masculin → den" },
      { type: "ecoute", consigne: "Écoute — que ferait-elle si elle avait le temps ?", audio: "Wenn ich Zeit hätte, würde ich nach Berlin reisen.", options: ["Voyager à Berlin", "Dormir", "Travailler"], correct: 0, explication: "« nach Berlin reisen »." },
      { type: "ordre", consigne: "Écrit — construisez la subordonnée.", mots: ["weil", "ich", "müde", "bin"], correct: "weil ich müde bin", traduction: "parce que je suis fatigué" },
      { type: "oral", consigne: "Production orale (auto-évaluée).", prompt: "Parlez ~30 s de vos dernières vacances (passé).", attendus: ["war", "habe"], modele: "In den Ferien war ich am Meer. Ich habe mich erholt und viel gelesen." }
    ]
  },
  {
    code: "B2", titre: "Étape B2 — argumenter",
    items: [
      { type: "qcm", consigne: "Grammaire — discours indirect (Konjunktiv I).", question: "Er sagt, er ___ müde.", options: ["sei", "ist", "war", "wäre gewesen"], correct: 0, explication: "discours indirect → Konjunktiv I : sei." },
      { type: "trou", consigne: "Écrit — passif au prétérit.", texte: "Das Haus {0} 2020 gebaut.", accepte: [["wurde"]], indice: "passif prétérit → wurde + participe" },
      { type: "ecoute", consigne: "Écoute — que faut-il faire aujourd'hui ?", audio: "Der Vertrag muss heute unterschrieben werden.", options: ["Signer le contrat", "Ne rien faire", "Téléphoner"], correct: 0, explication: "« der Vertrag muss … unterschrieben werden »." },
      { type: "ordre", consigne: "Écrit — phrase au passif.", mots: ["Das", "Problem", "wurde", "gelöst"], correct: "Das Problem wurde gelöst", traduction: "Le problème a été résolu." }
    ]
  },
  {
    code: "C1", titre: "Étape C1 — maîtrise avancée",
    items: [
      { type: "qcm", consigne: "Grammaire — participe attribut (Partizip I).", question: "das ___ Kind (lachen)", options: ["lachende", "gelachte", "lachte", "gelacht"], correct: 0, explication: "Partizip I : lachen → lachend + -e." },
      { type: "trou", consigne: "Écrit — préposition à génitif (neutre).", texte: "Wegen {0} schlechten Wetters blieben wir zu Hause.", accepte: [["des"]], indice: "wegen + génitif, das Wetter → des" },
      { type: "ecoute", consigne: "Écoute — quand est-ce devenu calme ?", audio: "Nachdem er gegangen war, wurde es still.", options: ["Après son départ", "Avant son arrivée", "Jamais"], correct: 0, explication: "« Nachdem er gegangen war … »." },
      { type: "ordre", consigne: "Écrit — relative au génitif.", mots: ["dessen", "Werk", "ich", "bewundere"], correct: "dessen Werk ich bewundere", traduction: "dont j'admire l'œuvre" }
    ]
  },
  {
    code: "C2", titre: "Étape C2 — quasi natif",
    items: [
      { type: "qcm", consigne: "Grammaire — locution figée.", question: "eine Entscheidung ___", options: ["treffen", "machen", "geben", "nehmen"], correct: 0, explication: "eine Entscheidung treffen." },
      { type: "qcm", consigne: "Grammaire — substitut du passif.", question: "« Das lässt sich lösen » signifie…", options: ["kann gelöst werden", "muss gelöst werden", "wurde gelöst", "ist gelöst"], correct: 0, explication: "sich lassen = possibilité passive." },
      { type: "trou", consigne: "Écrit — préposition écrite à génitif (masc.).", texte: "Mittels {0} Codes wird entschlüsselt.", accepte: [["eines"]], indice: "mittels + génitif, der Code → eines" },
      { type: "ecoute", consigne: "Écoute — qu'a-t-on fait face à la situation ?", audio: "Angesichts der Lage wurden sofort Maßnahmen ergriffen.", options: ["Des mesures ont été prises", "On a attendu", "Rien"], correct: 0, explication: "« … wurden sofort Maßnahmen ergriffen »." }
    ]
  }
];
