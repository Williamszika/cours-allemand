/* =====================================================================
   grammaire-a22.js — 8 LEÇONS DE GRAMMAIRE du module A2.2
   Ajoutées à window.GRAMMAIRE_A2.
   ===================================================================== */
window.GRAMMAIRE_A2 = Object.assign(window.GRAMMAIRE_A2 || {}, {
  a2g10: {
    id: "a2g10", titre: "Les indicateurs de lieu", titreDE: "Ortsangaben", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Distinguer Wo / Wohin / Woher", "Indiquer une direction"],
    grammairePoints: ["Wo? Wohin? Woher?", "hier, dort, links…"],
    grammaire: [
      { titre: "Où ? / Où aller ? / D'où ?", intro: "Trois questions, trois logiques.",
        tableau: { entetes: ["Question", "Sens", "Réponse"], lignes: [["Wo?", "où (position)", "in der Stadt (datif)"], ["Wohin?", "où (direction)", "in die Stadt (acc.), nach Berlin"], ["Woher?", "d'où", "aus Spanien, von der Arbeit"]] },
        schemas: [
          { legende: "Wohin? (direction) → accusatif.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "gehe", r: "verbe (2)", c: "verbe" }, { m: "in die Stadt", r: "direction (acc.)", c: "fin" }] },
          { legende: "Wo? (position) → datif.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "bin", r: "verbe (2)", c: "verbe" }, { m: "in der Stadt", r: "position (datif)", c: "objet" }] }
        ],
        note: "Direction = accusatif (Wohin?) ; position = datif (Wo?). hier/da/dort, links, rechts, geradeaus, oben, unten." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Wohin? » demande…", options: ["la direction", "la position", "l'origine"], correct: 0, explication: "Wohin = où l'on va (direction)." },
      { type: "qcm", consigne: "Wo? → datif.", question: "Das Buch ist ___ Tisch.", options: ["auf dem", "auf den", "auf der", "an die"], correct: 0, explication: "position → datif : auf dem Tisch." },
      { type: "trou", consigne: "Complétez (in die / in der).", texte: "Ich gehe {0} Schule und ich bin {1} Schule.", accepte: [["in die"], ["in der"]], indice: "Wohin (acc.) / Wo (datif)" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "Wo?", droite: "position" }, { gauche: "Wohin?", droite: "direction" }, { gauche: "Woher?", droite: "origine" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je vais en ville.", accepte: ["Ich gehe in die Stadt"], aide: "Wohin → accusatif" }
    ]
  },
  a2g11: {
    id: "a2g11", titre: "La possession (génitif)", titreDE: "Der Genitiv / Besitz", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Exprimer la possession", "Reconnaître le génitif et « von + datif »"],
    grammairePoints: ["Genitiv (des/der)", "von + datif"],
    grammaire: [
      { titre: "Dire « de qui » / « de quoi »", intro: "À l'écrit : génitif. À l'oral : souvent « von + datif ».",
        tableau: { entetes: ["Forme", "Exemple", "Sens"], lignes: [["Genitiv (m/n)", "das Auto des Mannes", "la voiture de l'homme"], ["Genitiv (f/pl)", "die Tasche der Frau", "le sac de la femme"], ["von + datif (oral)", "das Auto von meinem Bruder", "la voiture de mon frère"]] },
        note: "Au génitif, les noms masculins/neutres prennent souvent un -s (des Mannes, des Kindes)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "À l'oral, on remplace souvent le génitif par…", options: ["von + datif", "für + accusatif", "mit + datif"], correct: 0, explication: "von + datif = génitif parlé." },
      { type: "qcm", consigne: "Génitif masculin.", question: "Das ist das Auto ___ Mannes.", options: ["des", "der", "dem", "den"], correct: 0, explication: "génitif m./n. → des (+ -s au nom)." },
      { type: "trou", consigne: "Complétez (von + datif).", texte: "Das ist das Fahrrad {0} meinem Bruder.", accepte: [["von"]], indice: "von + datif" },
      { type: "association", consigne: "Associez l'article génitif.", paires: [{ gauche: "masculin", droite: "des" }, { gauche: "féminin", droite: "der" }, { gauche: "neutre", droite: "des" }, { gauche: "pluriel", droite: "der" }] },
      { type: "traduction", consigne: "Traduisez (oral).", source: "C'est la voiture de mon père.", accepte: ["Das ist das Auto von meinem Vater"], aide: "von + datif" }
    ]
  },
  a2g12: {
    id: "a2g12", titre: "Les adjectifs (déclinaison)", titreDE: "Adjektivdeklination", theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Accorder l'adjectif devant un nom", "Cas simples (nominatif/accusatif)"],
    grammairePoints: ["Terminaisons -e / -en", "après der / ein"],
    grammaire: [
      { titre: "L'adjectif devant le nom", intro: "Après l'article défini : surtout -e (sing.) et -en. Après « ein » : prend la marque du genre.",
        tableau: { entetes: ["Cas / genre", "après der/die/das", "après ein/eine"], lignes: [["m. nominatif", "der gute Mann", "ein guter Mann"], ["m. accusatif", "den guten Mann", "einen guten Mann"], ["f. nom./acc.", "die gute Frau", "eine gute Frau"], ["n. nom./acc.", "das gute Kind", "ein gutes Kind"]] },
        note: "Rappel : après « sein » l'adjectif est INVARIABLE (Der Mann ist gut). Devant le nom, il s'accorde." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Devant un nom, l'adjectif…", options: ["s'accorde", "ne change jamais", "prend toujours -en"], correct: 0, explication: "Adjectif épithète = accordé." },
      { type: "qcm", consigne: "Terminaison.", question: "Ich kaufe einen ___ Wagen. (neu, m. acc.)", options: ["neuen", "neuer", "neues", "neu"], correct: 0, explication: "ein + m. accusatif → neuen." },
      { type: "trou", consigne: "Complétez (gut).", texte: "Das ist eine {0} Idee und ein {1} Plan.", accepte: [["gute"], ["guter"]], indice: "eine gute (f) / ein guter (m nom.)" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "der ___ Mann", droite: "gute" }, { gauche: "die ___ Frau", droite: "gute" }, { gauche: "das ___ Kind", droite: "gute" }, { gauche: "den ___ Mann", droite: "guten" }] },
      { type: "traduction", consigne: "Traduisez.", source: "une belle maison", accepte: ["ein schönes Haus"], aide: "ein + neutre → -es" }
    ]
  },
  a2g13: {
    id: "a2g13", titre: "Verbes à particule", titreDE: "Trennbare und untrennbare Verben", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Distinguer séparables et inséparables", "Placer la particule"],
    grammairePoints: ["trennbar / untrennbar", "Préfixes"],
    grammaire: [
      { titre: "Séparable ou inséparable ?", intro: "La particule séparable part à la fin ; l'inséparable reste collée.",
        tableau: { entetes: ["Type", "Préfixes", "Exemple"], lignes: [["séparable", "auf-, ein-, an-, mit-, zu-, aus-", "Ich stehe um 7 auf."], ["inséparable", "be-, ge-, er-, ver-, ent-, emp-, zer-", "Ich verstehe das."]] },
        note: "Au Perfekt : séparable → aufgestanden (ge- au milieu) ; inséparable → verstanden (PAS de ge-)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« verstehen » est…", options: ["inséparable", "séparable"], correct: 0, explication: "ver- = préfixe inséparable." },
      { type: "qcm", consigne: "Séparable : placez la particule.", question: "Ich ___ um 7 Uhr ___ . (aufstehen)", options: ["stehe … auf", "aufstehe … —", "stehe auf … —", "auf … stehe"], correct: 0, explication: "verbe en 2e, particule à la fin." },
      { type: "trou", consigne: "Complétez (séparable einkaufen).", texte: "Wir {0} am Samstag {1}.", accepte: [["kaufen"], ["ein"]], indice: "verbe + particule à la fin" },
      { type: "association", consigne: "Séparable (S) ou inséparable (I) ?", paires: [{ gauche: "aufstehen", droite: "séparable" }, { gauche: "verstehen", droite: "inséparable" }, { gauche: "ankommen", droite: "séparable" }, { gauche: "bekommen", droite: "inséparable" }] },
      { type: "ordre", consigne: "Construisez la phrase.", mots: ["Der", "Zug", "kommt", "um", "acht", "an"], correct: "Der Zug kommt um acht an", traduction: "Le train arrive à huit heures." }
    ]
  },
  a2g14: {
    id: "a2g14", titre: "Perfekt ou prétérit ?", titreDE: "Perfekt oder Präteritum?", theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Choisir le bon temps du passé", "À l'oral vs à l'écrit"],
    grammairePoints: ["Perfekt (oral)", "Präteritum (écrit, sein/haben/modaux)"],
    grammaire: [
      { titre: "Quel passé utiliser ?", intro: "Même sens, contextes différents.",
        tableau: { entetes: ["Contexte", "Temps", "Exemple"], lignes: [["conversation", "Perfekt", "Ich habe gegessen."], ["récit écrit / presse", "Präteritum", "Er ging nach Hause."], ["sein / haben / modaux (oral)", "Präteritum", "Ich war / hatte / musste"]] },
        note: "Règle pratique : à l'oral, Perfekt partout — sauf war, hatte, et les modaux (konnte, musste…)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "À l'oral, pour « être » au passé on dit…", options: ["war (Präteritum)", "habe gewesen", "bin gewesen"], correct: 0, explication: "sein → war (même à l'oral)." },
      { type: "qcm", consigne: "Conversation.", question: "Was ___ du gestern gemacht?", options: ["hast", "machtest", "tatest", "warst"], correct: 0, explication: "conversation → Perfekt : hast … gemacht." },
      { type: "trou", consigne: "Complétez (war/hatte).", texte: "Gestern {0} ich krank und {1} Fieber.", accepte: [["war"], ["hatte"]], indice: "sein / haben au prétérit" },
      { type: "association", consigne: "Associez contexte → temps.", paires: [{ gauche: "conversation", droite: "Perfekt" }, { gauche: "récit écrit", droite: "Präteritum" }, { gauche: "sein/haben", droite: "Präteritum" }] },
      { type: "traduction", consigne: "Traduisez (oral).", source: "J'ai mangé une pizza.", accepte: ["Ich habe eine Pizza gegessen"], aide: "Perfekt" }
    ]
  },
  a2g15: {
    id: "a2g15", titre: "Verbes + prépositions", titreDE: "Verben mit Präpositionen", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Connaître les verbes à préposition fixe", "Choisir le bon cas"],
    grammairePoints: ["warten auf, denken an…", "Préposition fixe"],
    grammaire: [
      { titre: "Verbes à préposition fixe", intro: "La préposition fait partie du verbe et impose son cas.",
        tableau: { entetes: ["Verbe + prép.", "Cas", "Exemple"], lignes: [["warten auf", "accusatif", "Ich warte auf den Bus."], ["denken an", "accusatif", "Ich denke an dich."], ["sich interessieren für", "accusatif", "Ich interessiere mich für Musik."], ["sprechen mit", "datif", "Ich spreche mit dem Lehrer."], ["helfen bei", "datif", "Er hilft mir bei der Arbeit."]] },
        note: "À apprendre par cœur (verbe + préposition + cas). Question : « auf wen/was wartest du? »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Ich warte ___ den Bus.", options: ["auf", "an", "für", "mit"], correct: 0, explication: "warten auf + accusatif." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich interessiere mich ___ Sport.", options: ["für", "auf", "an", "über"], correct: 0, explication: "sich interessieren für." },
      { type: "trou", consigne: "Complétez.", texte: "Ich denke {0} dich. (préposition)", accepte: [["an"]], indice: "denken an" },
      { type: "association", consigne: "Associez verbe → préposition.", paires: [{ gauche: "warten", droite: "auf" }, { gauche: "denken", droite: "an" }, { gauche: "sich interessieren", droite: "für" }, { gauche: "sprechen", droite: "mit" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je pense à toi.", accepte: ["Ich denke an dich"], aide: "denken an + accusatif" }
    ]
  },
  a2g16: {
    id: "a2g16", titre: "Les substantifs (noms)", titreDE: "Die Substantive", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Former le pluriel", "Comprendre les noms composés"],
    grammairePoints: ["Pluriels", "Komposita", "suffixes"],
    grammaire: [
      { titre: "Pluriels et noms composés", intro: "Plusieurs marques de pluriel ; les noms composés se collent.",
        tableau: { entetes: ["Règle", "Singulier → Pluriel"], lignes: [["-e (souvent + Umlaut)", "der Tisch → die Tische"], ["-er (+ Umlaut)", "das Kind → die Kinder"], ["-(e)n", "die Frau → die Frauen"], ["-s (mots étrangers)", "das Auto → die Autos"], ["composé (Kompositum)", "die Haus + die Tür → die Haustür"]] },
        note: "Le genre d'un nom composé = celui du DERNIER mot (die Haustür → die Tür). Les noms s'écrivent avec une majuscule. Suffixes féminins : -ung, -heit, -keit, -tion." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le genre de « das Hausboot » vient de…", options: ["le dernier mot (Boot)", "le premier mot (Haus)", "au hasard"], correct: 0, explication: "Composé : genre du dernier élément." },
      { type: "qcm", consigne: "Pluriel de « das Kind ».", question: "ein Kind → zwei ___", options: ["Kinder", "Kinds", "Kinden", "Kinde"], correct: 0, explication: "das Kind → die Kinder." },
      { type: "trou", consigne: "Pluriel de « die Frau ».", texte: "eine Frau, viele {0}.", accepte: [["Frauen"]], indice: "-en" },
      { type: "association", consigne: "Associez singulier → pluriel.", paires: [{ gauche: "der Tisch", droite: "die Tische" }, { gauche: "das Auto", droite: "die Autos" }, { gauche: "die Frau", droite: "die Frauen" }, { gauche: "das Kind", droite: "die Kinder" }] },
      { type: "qcm", consigne: "Article de « die Wohnung » (suffixe -ung).", question: "Les noms en -ung sont…", options: ["féminins (die)", "masculins (der)", "neutres (das)"], correct: 0, explication: "-ung → toujours féminin." }
    ]
  },
  a2g17: {
    id: "a2g17", titre: "Prépositions de lieu et de temps", titreDE: "Präpositionen: Ort und Zeit", theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Maîtriser les prépositions mixtes", "Choisir accusatif (Wohin) ou datif (Wo)"],
    grammairePoints: ["Wechselpräpositionen", "temporelles"],
    grammaire: [
      { titre: "Prépositions mixtes (lieu)", intro: "an, auf, in, über, unter, vor, hinter, neben, zwischen : datif (Wo?) ou accusatif (Wohin?).",
        tableau: { entetes: ["Question", "Cas", "Exemple"], lignes: [["Wo? (position)", "datif", "Das Bild hängt an der Wand."], ["Wohin? (direction)", "accusatif", "Ich hänge das Bild an die Wand."], ["temps : am/im/um", "—", "am Montag, im Mai, um 8"], ["temps : seit/vor", "datif", "seit zwei Jahren, vor einer Woche"]] },
        schemas: [
          { legende: "Wohin? → accusatif.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "lege", r: "verbe (2)", c: "verbe" }, { m: "das Buch", r: "COD", c: "objet" }, { m: "auf den Tisch", r: "direction (acc.)", c: "fin" }] },
          { legende: "Wo? → datif.", mots: [{ m: "Das Buch", r: "sujet", c: "sujet" }, { m: "liegt", r: "verbe (2)", c: "verbe" }, { m: "auf dem Tisch", r: "position (datif)", c: "objet" }] }
        ],
        note: "Astuce : mouvement vers un endroit = accusatif ; sans mouvement = datif." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Wohin? » entraîne quel cas (préposition mixte) ?", options: ["accusatif", "datif", "génitif"], correct: 0, explication: "direction → accusatif." },
      { type: "qcm", consigne: "Wo? → datif.", question: "Das Bild hängt an ___ Wand.", options: ["der", "die", "dem", "den"], correct: 0, explication: "position, die Wand → datif : der Wand." },
      { type: "trou", consigne: "Complétez (den/dem).", texte: "Ich lege das Buch auf {0} Tisch; jetzt liegt es auf {1} Tisch.", accepte: [["den"], ["dem"]], indice: "Wohin (acc.) / Wo (datif)" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "Wo?", droite: "datif" }, { gauche: "Wohin?", droite: "accusatif" }, { gauche: "seit", droite: "datif" }, { gauche: "um", droite: "heure" }] },
      { type: "traduction", consigne: "Traduisez (position).", source: "Le livre est sur la table.", accepte: ["Das Buch liegt auf dem Tisch", "Das Buch ist auf dem Tisch"], aide: "Wo? → auf dem Tisch" }
    ]
  }
});
