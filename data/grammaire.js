/* =====================================================================
   grammaire.js — 12 LEÇONS DE GRAMMAIRE dédiées (A1)
   Intercalées avec les 19 leçons thématiques (total ~31 leçons).
   Schéma identique aux leçons (mais sans vocabulaire ni dialogue :
   le rendu saute ces sections). cat:"comp" = compréhension de la règle,
   sinon "appro" (application).
   ===================================================================== */
window.GRAMMAIRE = {
  /* ---------------- Module A1.1 ---------------- */
  g01: {
    id: "g01", titre: "Pronoms personnels & présent", titreDE: "Personalpronomen & Präsens",
    theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Reconnaître les pronoms personnels", "Conjuguer un verbe régulier au présent", "Maîtriser le verbe « sein »"],
    grammairePoints: ["Personalpronomen", "Présent"],
    grammaire: [
      { titre: "Les pronoms personnels", intro: "Ils déterminent la terminaison du verbe.",
        tableau: { entetes: ["Pronom", "Sens"], lignes: [["ich", "je"], ["du", "tu"], ["er/sie/es", "il/elle"], ["wir", "nous"], ["ihr", "vous"], ["sie/Sie", "ils/vous (poli)"]] },
        note: "« Sie » (majuscule) = vouvoiement poli." },
      { titre: "Le présent",
        regle: "On prend le **radical** (l'infinitif sans la terminaison **-en**) et on ajoute la terminaison du pronom : **-e, -st, -t, -en, -t, -en**. Et règle d'or de l'allemand : **le verbe conjugué est toujours en 2ᵉ position** dans une phrase déclarative.",
        intro: "Avec **machen** (faire) : le radical est **mach-**. On obtient *ich mach**e***, *du mach**st***, *er mach**t***… Le verbe **sein** (être), lui, est totalement irrégulier — à connaître par cœur.",
        tableau: { entetes: ["Pronom", "mach-en", "sein"], lignes: [["ich", "mache", "bin"], ["du", "machst", "bist"], ["er/sie/es", "macht", "ist"], ["wir", "machen", "sind"], ["ihr", "macht", "seid"], ["sie/Sie", "machen", "sind"]] },
        schemas: [{ legende: "Phrase de base : le verbe conjugué est toujours en 2e position.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "mache", r: "verbe (2)", c: "verbe" }, { m: "eine Pause", r: "complément", c: "objet" }] }],
        exemples: [
          { de: "Ich wohne in Berlin.", fr: "J'habite à Berlin." },
          { de: "Du machst eine Pause.", fr: "Tu fais une pause." },
          { de: "Er ist mein Freund.", fr: "Il est mon ami." },
          { de: "Wir sind müde.", fr: "Nous sommes fatigués." }
        ],
        note: "« sein » est irrégulier : à apprendre par cœur.",
        attention: "Si le radical finit par **-t** ou **-d** (*arbeiten*, *finden*), on intercale un **-e-** pour pouvoir prononcer : *du arbeit**e**st*, *er find**e**t*." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Quelle terminaison avec « du » ?", options: ["-st", "-t", "-en", "-e"], correct: 0, explication: "du → radical + -st." },
      { type: "conjugaison", consigne: "Conjuguez « wohnen ».", verbe: "wohnen", items: [{ pronom: "ich", reponse: "wohne" }, { pronom: "du", reponse: "wohnst" }, { pronom: "er/sie/es", reponse: "wohnt" }, { pronom: "wir", reponse: "wohnen" }, { pronom: "ihr", reponse: "wohnt" }, { pronom: "sie/Sie", reponse: "wohnen" }] },
      { type: "conjugaison", consigne: "Conjuguez « sein ».", verbe: "sein", items: [{ pronom: "ich", reponse: "bin" }, { pronom: "du", reponse: "bist" }, { pronom: "er/sie/es", reponse: "ist" }, { pronom: "wir", reponse: "sind" }, { pronom: "ihr", reponse: "seid" }, { pronom: "sie/Sie", reponse: "sind" }] },
      { type: "trou", consigne: "Complétez le pronom.", texte: "{0} bist mein Freund. (tu)", accepte: [["du"]], indice: "2e personne" },
      { type: "ordre", consigne: "Ordre des mots.", mots: ["Wir", "machen", "eine", "Pause"], correct: "Wir machen eine Pause", traduction: "Nous faisons une pause." }
    ]
  },
  g02: {
    id: "g02", titre: "Les verbes (présent)", titreDE: "Die Verben im Präsens",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Distinguer verbes réguliers et irréguliers", "Gérer les verbes à changement de voyelle"],
    grammairePoints: ["Verbes irréguliers", "e→i, e→ie, a→ä"],
    grammaire: [
      { titre: "Verbes à changement de voyelle (2e/3e pers. sing.)",
        regle: "Certains verbes forts **changent la voyelle de leur radical** — mais **seulement** à la **2ᵉ personne (du)** et à la **3ᵉ du singulier (er/sie/es)**. Les autres personnes restent régulières.",
        intro: "Trois changements fréquents : **e → i** (*sprechen* → er **spricht**), **e → ie** (*lesen* → er **liest**) et **a → ä** (*fahren* → er **fährt**).",
        tableau: { entetes: ["Type", "Infinitif", "er/sie/es"], lignes: [["e → i", "sprechen", "spricht"], ["e → ie", "lesen / sehen", "liest / sieht"], ["a → ä", "fahren", "fährt"], ["régulier", "machen", "macht"]] },
        exemples: [
          { de: "Du sprichst sehr gut Deutsch.", fr: "Tu parles très bien allemand." },
          { de: "Sie liest ein Buch.", fr: "Elle lit un livre." },
          { de: "Er fährt nach Hamburg.", fr: "Il va (roule) à Hambourg." }
        ],
        note: "Seules les 2e (du) et 3e (er/sie/es) personnes du singulier changent.",
        attention: "Au pluriel et avec *ich*/*wir*/*sie*, on garde la voyelle de l'infinitif : *wir **sprechen***, *ich **fahre*** (et non « ~~spreche~~ », « ~~fähre~~ »)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Er ___ Deutsch. (sprechen)", options: ["spricht", "sprecht", "sprichst", "sprechen"], correct: 0, explication: "sprechen : e→i → er spricht." },
      { type: "qcm", consigne: "Choisissez.", question: "Du ___ Auto. (fahren)", options: ["fährst", "fahrst", "fährt", "fahren"], correct: 0, explication: "fahren : a→ä → du fährst." },
      { type: "conjugaison", consigne: "Conjuguez « sprechen ».", verbe: "sprechen", items: [{ pronom: "ich", reponse: "spreche" }, { pronom: "du", reponse: "sprichst" }, { pronom: "er/sie/es", reponse: "spricht" }, { pronom: "wir", reponse: "sprechen" }, { pronom: "ihr", reponse: "sprecht" }, { pronom: "sie/Sie", reponse: "sprechen" }] },
      { type: "trou", consigne: "Complétez (lesen).", texte: "Sie {0} ein Buch. (elle)", accepte: [["liest"]], indice: "e → ie" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "ich nehme", droite: "du nimmst" }, { gauche: "ich gebe", droite: "du gibst" }, { gauche: "ich esse", droite: "du isst" }] }
    ]
  },
  g03: {
    id: "g03", titre: "Le groupe de noms : der/die/das", titreDE: "Artikel: der/die/das",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Reconnaître le genre des noms", "Utiliser l'article défini et indéfini"],
    grammairePoints: ["der/die/das", "ein/eine"],
    grammaire: [
      { titre: "Articles défini et indéfini (nominatif)",
        regle: "**Tout nom allemand a un genre** : masculin (**der**), féminin (**die**) ou neutre (**das**). L'article **défini** (*der/die/das* = le/la) désigne une chose connue ; l'article **indéfini** (*ein/eine* = un/une) une chose nouvelle.",
        intro: "Le genre n'est **pas** toujours logique (*das Mädchen*, « la jeune fille », est neutre !). Apprends donc **toujours le nom avec son article** : pas « *Tisch* » mais « **der** Tisch ».",
        tableau: { entetes: ["Genre", "Défini", "Indéfini", "Exemple"], lignes: [["masculin", "der", "ein", "der/ein Mann"], ["féminin", "die", "eine", "die/eine Frau"], ["neutre", "das", "ein", "das/ein Kind"], ["pluriel", "die", "— (keine)", "die Kinder"]] },
        exemples: [
          { de: "Der Mann ist nett.", fr: "L'homme est gentil." },
          { de: "Das ist eine Frau.", fr: "C'est une femme." },
          { de: "Ich sehe ein Kind.", fr: "Je vois un enfant." }
        ],
        note: "Les noms s'écrivent toujours avec une MAJUSCULE.",
        attention: "Au pluriel, l'article défini est **die** pour tous les genres — et il n'existe **pas** de pluriel de *ein* (on dit *Kinder* tout court, ou *keine Kinder* à la négation)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez l'article défini.", question: "___ Frau ist nett.", options: ["Die", "Der", "Das", "Den"], correct: 0, explication: "Frau est féminin → die." },
      { type: "qcm", consigne: "Article indéfini.", question: "Das ist ___ Auto.", options: ["ein", "eine", "einen", "der"], correct: 0, explication: "Auto est neutre → ein." },
      { type: "association", consigne: "Associez le nom à son article.", paires: [{ gauche: "Mann", droite: "der" }, { gauche: "Frau", droite: "die" }, { gauche: "Kind", droite: "das" }, { gauche: "Buch", droite: "das" }] },
      { type: "trou", consigne: "Complétez (ein/eine).", texte: "Ich habe {0} Hund und {1} Katze.", accepte: [["einen"], ["eine"]], indice: "der Hund (acc.), die Katze" },
      { type: "qcm", consigne: "Choisissez.", question: "Comment écrit-on les noms ?", options: ["Avec une majuscule", "En minuscule", "Comme on veut"], correct: 0, explication: "Tous les noms prennent une majuscule." }
    ]
  },
  g04: {
    id: "g04", titre: "La négation : nicht / kein", titreDE: "Verneinung: nicht / kein",
    theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Choisir entre nicht et kein", "Décliner kein"],
    grammairePoints: ["nicht", "kein"],
    grammaire: [
      { titre: "nicht ou kein ?",
        regle: "**kein** nie un **nom** sans article ou avec un article indéfini (*ein*). **nicht** nie tout le reste : un **verbe**, un **adjectif**, un nom **défini** (avec *der/die/das*) ou un complément précis.",
        intro: "Le réflexe : « *Ich habe **ein** Auto* » → négation avec **kein** : « *Ich habe **kein** Auto* ». Mais « *Ich mag **den** Film* » → négation avec **nicht** : « *Ich mag den Film **nicht*** ».",
        tableau: { entetes: ["Cas", "Négation", "Exemple"], lignes: [["nom indéfini", "kein", "Ich habe keinen Hund."], ["nom défini", "nicht", "Ich mag den Film nicht."], ["verbe", "nicht", "Ich arbeite nicht."], ["adjectif", "nicht", "Das ist nicht gut."]] },
        schemas: [{ legende: "« nicht » se place généralement à la fin de la phrase.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "arbeite", r: "verbe (2)", c: "verbe" }, { m: "heute", r: "temps", c: "objet" }, { m: "nicht", r: "négation", c: "fin" }] }],
        exemples: [
          { de: "Ich habe keine Zeit.", fr: "Je n'ai pas le temps." },
          { de: "Das ist nicht gut.", fr: "Ce n'est pas bien." },
          { de: "Er kommt heute nicht.", fr: "Il ne vient pas aujourd'hui." }
        ],
        note: "kein se décline comme « ein » : keinen (m. acc.), keine (f./pl.), kein (n.).",
        attention: "**nicht** se place **avant** un adjectif ou un complément de lieu (« *Das ist **nicht** schön* », « *Ich fahre **nicht** nach Berlin* »), mais **à la fin** quand il nie le verbe seul (« *Ich arbeite **nicht*** »)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "nicht ou kein ?", question: "Ich habe ___ Zeit.", options: ["keine", "nicht", "kein", "nichts"], correct: 0, explication: "die Zeit (f.) sans article → keine." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich verstehe das ___.", options: ["nicht", "kein", "keine", "keinen"], correct: 0, explication: "On nie un verbe/nom défini → nicht." },
      { type: "trou", consigne: "Complétez (kein/keine/keinen).", texte: "Er trinkt {0} Bier und isst {1} Suppe.", accepte: [["kein"], ["keine"]], indice: "das Bier, die Suppe" },
      { type: "ordre", consigne: "Ordre des mots.", mots: ["Ich", "habe", "keinen", "Hunger"], correct: "Ich habe keinen Hunger", traduction: "Je n'ai pas faim." },
      { type: "traduction", consigne: "Traduisez.", source: "Je ne bois pas de café.", accepte: ["Ich trinke keinen Kaffee"], aide: "kein + accusatif (der Kaffee)" }
    ]
  },
  g05: {
    id: "g05", titre: "Prépositions de lieu", titreDE: "Lokale Präpositionen",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Situer un objet (Wo?)", "Employer les prépositions de lieu + datif"],
    grammairePoints: ["in, auf, neben…", "Wo? + datif"],
    grammaire: [
      { titre: "Où ? (Wo?) → datif",
        regle: "Pour dire **où se trouve** quelque chose (question **Wo?**), ces prépositions de lieu sont suivies du **datif**. Au datif : *der* → **dem**, *das* → **dem**, *die* → **der**.",
        intro: "Pense à la **position immobile** : *Das Buch ist **auf dem** Tisch* (sur la table). On contracte souvent : *in dem* = **im**, *an dem* = **am**.",
        tableau: { entetes: ["Préposition", "Sens", "Exemple"], lignes: [["in", "dans", "im Zimmer"], ["auf", "sur", "auf dem Tisch"], ["unter", "sous", "unter dem Bett"], ["neben", "à côté de", "neben der Tür"], ["vor / hinter", "devant / derrière", "vor dem Haus"], ["zwischen", "entre", "zwischen A und B"]] },
        exemples: [
          { de: "Die Lampe ist über dem Tisch.", fr: "La lampe est au-dessus de la table." },
          { de: "Die Katze schläft unter dem Bett.", fr: "Le chat dort sous le lit." },
          { de: "Ich wohne in der Stadt.", fr: "J'habite en ville." }
        ],
        note: "Datif : der→dem, das→dem, die→der. « in dem » = im, « an dem » = am.",
        attention: "Ces prépositions (*in, auf, an, unter…*) peuvent aussi prendre l'**accusatif** quand il y a un **déplacement** (question **Wohin?**). Ici, on parle de **position** (Wo?) → **datif**." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Das Buch ist ___ dem Tisch.", options: ["auf", "in", "neben", "an"], correct: 0, explication: "sur la table → auf." },
      { type: "qcm", consigne: "Datif correct.", question: "Die Lampe ist in ___ Küche.", options: ["der", "dem", "die", "den"], correct: 0, explication: "die Küche (f.) au datif → der." },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "auf", droite: "sur" }, { gauche: "unter", droite: "sous" }, { gauche: "neben", droite: "à côté de" }, { gauche: "zwischen", droite: "entre" }] },
      { type: "trou", consigne: "Complétez (dem/der).", texte: "Der Stuhl steht neben {0} Sofa und vor {1} Wand.", accepte: [["dem"], ["der"]], indice: "das Sofa, die Wand" },
      { type: "ordre", consigne: "Ordre des mots.", mots: ["Die", "Katze", "ist", "unter", "dem", "Bett"], correct: "Die Katze ist unter dem Bett", traduction: "Le chat est sous le lit." }
    ]
  },
  g06: {
    id: "g06", titre: "L'accusatif", titreDE: "Der Akkusativ",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Former l'accusatif (COD)", "Utiliser les pronoms à l'accusatif"],
    grammairePoints: ["den/einen", "mich/dich/ihn…"],
    grammaire: [
      { titre: "Articles à l'accusatif",
        regle: "Le **complément d'objet direct** (le COD, celui qui « subit » l'action) se met à l'**accusatif**. Bonne nouvelle : **seul le masculin change** — *der* → **den**, *ein* → **einen**. Féminin, neutre et pluriel ne bougent pas.",
        intro: "Compare : *Der Mann* (sujet) → *Ich sehe **den** Mann* (COD). *Ein Hund* → *Ich habe **einen** Hund*.",
        tableau: { entetes: ["Genre", "Nominatif", "Accusatif"], lignes: [["masculin", "der / ein", "den / einen"], ["féminin", "die / eine", "die / eine"], ["neutre", "das / ein", "das / ein"], ["pluriel", "die", "die"]] },
        schemas: [{ legende: "Le complément d'objet direct (COD) est à l'accusatif — seul le masculin change (der → den).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "sehe", r: "verbe (2)", c: "verbe" }, { m: "den Mann", r: "COD (accusatif)", c: "objet" }] }],
        exemples: [
          { de: "Ich nehme einen Kaffee.", fr: "Je prends un café." },
          { de: "Sie kauft eine Tasche.", fr: "Elle achète un sac." },
          { de: "Wir sehen das Haus.", fr: "Nous voyons la maison." }
        ],
        note: "Ex. : Ich sehe den Mann / einen Hund.",
        attention: "Beaucoup de débutants oublient le **-n** du masculin : on dit *Ich habe **einen** Hund* (et non « ~~ein Hund~~ »)." },
      { titre: "Pronoms personnels à l'accusatif", intro: "",
        tableau: { entetes: ["Nominatif", "Accusatif"], lignes: [["ich", "mich"], ["du", "dich"], ["er/sie/es", "ihn / sie / es"], ["wir", "uns"], ["ihr", "euch"], ["sie/Sie", "sie / Sie"]] },
        note: "Ex. : Ich liebe dich. / Ich sehe ihn." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez l'accusatif.", question: "Ich nehme ___ Kaffee.", options: ["einen", "ein", "eine", "der"], correct: 0, explication: "der Kaffee (m.) → einen." },
      { type: "qcm", consigne: "Pronom accusatif.", question: "Ich liebe ___ ! (toi)", options: ["dich", "du", "dir", "dein"], correct: 0, explication: "du → dich (accusatif)." },
      { type: "trou", consigne: "Complétez (den/die/das).", texte: "Ich sehe {0} Mann und {1} Frau.", accepte: [["den"], ["die"]], indice: "der Mann → den ; die Frau → die" },
      { type: "association", consigne: "Associez nominatif → accusatif.", paires: [{ gauche: "ich", droite: "mich" }, { gauche: "du", droite: "dich" }, { gauche: "er", droite: "ihn" }, { gauche: "wir", droite: "uns" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je prends une salade.", accepte: ["Ich nehme einen Salat"], aide: "der Salat → accusatif" }
    ]
  },
  /* ---------------- Module A1.2 ---------------- */
  g07: {
    id: "g07", titre: "Les verbes : modaux, séparables, passé", titreDE: "Modalverben, trennbare Verben, Perfekt",
    theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Employer les verbes de modalité", "Reconnaître les verbes séparables", "Former le passé composé"],
    grammairePoints: ["müssen/können/wollen", "trennbare Verben", "Perfekt"],
    grammaire: [
      { titre: "Verbes de modalité", intro: "Le 2e verbe va à l'infinitif, à la FIN.",
        tableau: { entetes: ["Pronom", "müssen", "können", "wollen"], lignes: [["ich", "muss", "kann", "will"], ["du", "musst", "kannst", "willst"], ["er/sie/es", "muss", "kann", "will"], ["wir/sie/Sie", "müssen", "können", "wollen"], ["ihr", "müsst", "könnt", "wollt"]] },
        note: "ich et er/sie/es n'ont pas de terminaison." },
      { titre: "Séparables & Perfekt", intro: "Séparable : le préfixe part à la fin (Ich stehe um 7 auf). Perfekt : haben/sein + participe (à la fin).",
        tableau: { entetes: ["Infinitif", "Présent / Perfekt"], lignes: [["aufstehen", "ich stehe … auf"], ["machen", "ich habe … gemacht"], ["fahren", "ich bin … gefahren"]] },
        schemas: [
          { legende: "Verbe de modalité — la « parenthèse verbale » (Satzklammer).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "muss", r: "modal (2)", c: "verbe" }, { m: "heute", r: "…", c: "objet" }, { m: "arbeiten", r: "infinitif (fin)", c: "fin" }] },
          { legende: "Verbe séparable — le préfixe part à la fin.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "stehe", r: "verbe (2)", c: "verbe" }, { m: "um 7 Uhr", r: "…", c: "objet" }, { m: "auf", r: "préfixe (fin)", c: "fin" }] },
          { legende: "Passé composé (Perfekt) — participe à la fin.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "habe", r: "auxiliaire (2)", c: "verbe" }, { m: "Pizza", r: "…", c: "objet" }, { m: "gegessen", r: "participe (fin)", c: "fin" }] }
        ],
        note: "Mouvement (fahren, gehen, fliegen) → auxiliaire SEIN. Sinon HABEN." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Où va l'infinitif après un modal ?", options: ["À la fin", "En 2e position", "Au début"], correct: 0, explication: "Modal conjugué en 2e, infinitif à la fin." },
      { type: "conjugaison", consigne: "Conjuguez « können ».", verbe: "können", items: [{ pronom: "ich", reponse: "kann" }, { pronom: "du", reponse: "kannst" }, { pronom: "er/sie/es", reponse: "kann" }, { pronom: "wir", reponse: "können" }, { pronom: "ihr", reponse: "könnt" }, { pronom: "sie/Sie", reponse: "können" }] },
      { type: "qcm", consigne: "Auxiliaire ?", question: "Ich ___ nach Berlin gefahren.", options: ["bin", "habe", "ist", "hat"], correct: 0, explication: "fahren (mouvement) → sein." },
      { type: "trou", consigne: "Participe passé de « machen ».", texte: "Was hast du {0}?", accepte: [["gemacht"]], indice: "ge-…-t" },
      { type: "ordre", consigne: "Ordre (séparable).", mots: ["Ich", "stehe", "um", "sieben", "auf"], correct: "Ich stehe um sieben auf", traduction: "Je me lève à sept heures." }
    ]
  },
  g08: {
    id: "g08", titre: "Prépositions de temps", titreDE: "Temporale Präpositionen",
    theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Choisir la bonne préposition de temps"],
    grammairePoints: ["am, um, im, von…bis"],
    grammaire: [
      { titre: "am / um / im / von…bis", intro: "Chaque type d'indication a sa préposition.",
        tableau: { entetes: ["Préposition", "Usage", "Exemple"], lignes: [["am", "jours, dates, moments", "am Montag, am Abend"], ["um", "heure précise", "um 9 Uhr"], ["im", "mois, saisons", "im Mai, im Winter"], ["von … bis", "de … à", "von 9 bis 17 Uhr"], ["ab", "à partir de", "ab Montag"]] },
        note: "Exception : « in der Nacht »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Heure précise → quelle préposition ?", options: ["um", "am", "im", "in"], correct: 0, explication: "um 9 Uhr." },
      { type: "qcm", consigne: "Choisissez.", question: "___ Sommer ist es warm.", options: ["Im", "Am", "Um", "In"], correct: 0, explication: "saison → im." },
      { type: "trou", consigne: "Complétez (am/um/im).", texte: "{0} Montag habe ich {1} 10 Uhr einen Termin.", accepte: [["am"], ["um"]], indice: "jour / heure" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "um", droite: "9 Uhr" }, { gauche: "am", droite: "Montag" }, { gauche: "im", droite: "Januar" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Lundi à huit heures.", accepte: ["Am Montag um acht Uhr", "am Montag um 8 Uhr"], aide: "am … um …" }
    ]
  },
  g09: {
    id: "g09", titre: "Les conjonctions", titreDE: "Konjunktionen",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Relier deux phrases", "Distinguer und/aber/denn et weil (verbe à la fin)"],
    grammairePoints: ["und, oder, aber, denn", "weil"],
    grammaire: [
      { titre: "Coordination (verbe en 2e position)", intro: "und (et), oder (ou), aber (mais), denn (car) ne changent pas l'ordre.",
        tableau: { entetes: ["Conjonction", "Exemple"], lignes: [["und", "Es ist warm und sonnig."], ["aber", "Es ist kalt, aber schön."], ["denn", "Ich bleibe, denn es regnet."]] },
        note: "Ces 4 conjonctions gardent l'ordre normal sujet-verbe." },
      { titre: "Subordination : weil (verbe à la FIN)", intro: "« weil » (parce que) envoie le verbe conjugué à la toute fin.",
        tableau: { entetes: ["Phrase", "Sens"], lignes: [["Ich bleibe, weil es regnet.", "… parce qu'il pleut."], ["…, weil ich krank bin.", "… parce que je suis malade."]] },
        schemas: [
          { legende: "Coordination (und / aber / denn) : le verbe reste en 2e position.", mots: [{ m: "Es ist kalt,", r: "phrase 1", c: "objet" }, { m: "aber", r: "connecteur", c: "conj" }, { m: "die Sonne", r: "sujet", c: "sujet" }, { m: "scheint", r: "verbe (2)", c: "verbe" }] },
          { legende: "Subordination (weil) : le verbe est rejeté à la FIN.", mots: [{ m: "Ich bleibe,", r: "principale", c: "objet" }, { m: "weil", r: "connecteur", c: "conj" }, { m: "es", r: "sujet", c: "sujet" }, { m: "regnet", r: "verbe (fin)", c: "fin" }] }
        ],
        note: "Comparez : « denn ich bin krank » (2e) vs « weil ich krank bin » (fin)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Avec « weil », le verbe va…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "weil = subordination → verbe à la fin." },
      { type: "qcm", consigne: "Conjonction logique.", question: "Es ist kalt, ___ die Sonne scheint.", options: ["aber", "und", "denn", "weil"], correct: 0, explication: "opposition → aber." },
      { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Ich komme nicht, weil ich krank {0}.", accepte: [["bin"]], indice: "weil → verbe à la fin" },
      { type: "ordre", consigne: "Ordre (subordonnée).", mots: ["weil", "es", "einen", "Stau", "gibt"], correct: "weil es einen Stau gibt", traduction: "parce qu'il y a un embouteillage" },
      { type: "qcm", consigne: "Choisissez.", question: "Ich lerne Deutsch, ___ ich in Berlin wohne.", options: ["weil", "aber", "oder", "und"], correct: 0, explication: "cause → weil." }
    ]
  },
  g10: {
    id: "g10", titre: "Le groupe de noms au datif", titreDE: "Der Dativ",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Former le datif", "Employer les prépositions + datif (mit, zu, bei…)"],
    grammairePoints: ["dem/der/dem", "mit, zu, bei, von…"],
    grammaire: [
      { titre: "Articles au datif", intro: "Après certaines prépositions et pour le COI.",
        tableau: { entetes: ["Genre", "Nominatif", "Datif"], lignes: [["masculin", "der / ein", "dem / einem"], ["féminin", "die / eine", "der / einer"], ["neutre", "das / ein", "dem / einem"], ["pluriel", "die", "den (+ -n)"]] },
        note: "Prépositions toujours + datif : mit, zu, bei, von, aus, nach, seit." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez (mit + datif).", question: "Ich fahre mit ___ Bus.", options: ["dem", "der", "den", "das"], correct: 0, explication: "der Bus (m.) au datif → dem." },
      { type: "qcm", consigne: "Datif.", question: "Ich wohne bei ___ Mutter.", options: ["der", "dem", "die", "den"], correct: 0, explication: "die Mutter (f.) → der." },
      { type: "trou", consigne: "Complétez (dem/der).", texte: "Ich fahre mit {0} Bahn zu {1} Arzt.", accepte: [["der"], ["dem"]], indice: "die Bahn (f.), der Arzt (m.)" },
      { type: "association", consigne: "Associez (toujours + datif).", paires: [{ gauche: "mit", droite: "avec" }, { gauche: "zu", droite: "vers/chez" }, { gauche: "bei", droite: "chez" }, { gauche: "aus", droite: "de (origine)" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je voyage en train. (avec le train)", accepte: ["Ich fahre mit dem Zug", "Ich reise mit dem Zug"], aide: "mit dem Zug" }
    ]
  },
  g11: {
    id: "g11", titre: "Indicateurs de lieu", titreDE: "Ortsangaben",
    theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Dire où (Wo?) et où aller (Wohin?)", "Choisir nach / zu / in"],
    grammairePoints: ["nach, zu, in", "Wo? / Wohin?"],
    grammaire: [
      { titre: "Où aller ? (Wohin?)", intro: "La préposition dépend de la destination.",
        tableau: { entetes: ["Préposition", "Usage", "Exemple"], lignes: [["nach", "villes, pays sans article", "nach Berlin"], ["zu", "personnes, lieux précis", "zum Arzt"], ["in", "+ accusatif (entrer)", "in die Stadt"], ["nach Hause", "rentrer", "Ich gehe nach Hause."]] },
        note: "« zu Hause » = être à la maison (lieu) ; « nach Hause » = vers la maison (mouvement)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez (ville).", question: "Ich fliege ___ Spanien.", options: ["nach", "zu", "in", "mit"], correct: 0, explication: "pays sans article → nach." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich gehe ___ Arzt.", options: ["zum", "nach", "in", "auf"], correct: 0, explication: "personne/lieu précis → zu (zum = zu dem)." },
      { type: "trou", consigne: "Complétez (nach/zu).", texte: "Heute fahre ich {0} München und dann gehe ich {1} Bahnhof.", accepte: [["nach"], ["zum"]], indice: "ville / lieu précis" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "nach", droite: "ville/pays" }, { gauche: "zu", droite: "personne/lieu" }, { gauche: "zu Hause", droite: "à la maison" }] },
      { type: "ordre", consigne: "Ordre des mots.", mots: ["Ich", "gehe", "nach", "Hause"], correct: "Ich gehe nach Hause", traduction: "Je rentre à la maison." }
    ]
  },
  g12: {
    id: "g12", titre: "Les adjectifs", titreDE: "Die Adjektive",
    theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Utiliser l'adjectif attribut", "Former un comparatif simple"],
    grammairePoints: ["sein + adjectif", "comparatif"],
    grammaire: [
      { titre: "Adjectif attribut (invariable)", intro: "Après sein/werden/bleiben, l'adjectif ne change PAS.",
        tableau: { entetes: ["Phrase", "Sens"], lignes: [["Das Auto ist neu.", "La voiture est neuve."], ["Die Wohnung ist groß.", "L'appart est grand."], ["Die Kinder sind müde.", "Les enfants sont fatigués."]] },
        note: "Invariable ici : neu, groß, müde ne prennent pas de terminaison." },
      { titre: "Le comparatif", intro: "adjectif + -er (+ als = que). Quelques irréguliers.",
        tableau: { entetes: ["Adjectif", "Comparatif"], lignes: [["klein", "kleiner"], ["groß", "größer"], ["gut", "besser"], ["gern", "lieber"]] },
        note: "Ex. : Berlin ist größer als Bonn." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Après « ist », l'adjectif…", options: ["ne change pas", "prend -en", "prend -e"], correct: 0, explication: "Adjectif attribut = invariable." },
      { type: "qcm", consigne: "Comparatif de « groß ».", question: "Berlin ist ___ als Bonn.", options: ["größer", "großer", "am größten", "groß"], correct: 0, explication: "groß → größer (Umlaut)." },
      { type: "association", consigne: "Associez l'adjectif et son contraire.", paires: [{ gauche: "groß", droite: "klein" }, { gauche: "neu", droite: "alt" }, { gauche: "gut", droite: "schlecht" }, { gauche: "teuer", droite: "billig" }] },
      { type: "trou", consigne: "Complétez le comparatif.", texte: "Das Auto ist {0} als das Fahrrad. (schnell)", accepte: [["schneller"]], indice: "schnell + -er" },
      { type: "traduction", consigne: "Traduisez.", source: "La maison est grande.", accepte: ["Das Haus ist groß"], aide: "adjectif invariable après ist" }
    ]
  }
};
