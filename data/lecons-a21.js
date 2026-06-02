/* =====================================================================
   MODULE A2.1 — Le quotidien approfondi (Alltag & Geld)
   Niveau A2 (CECRL). Suite de l'A1 : on raconte le passé, on parle de
   formation, d'argent, de souhaits (Konjunktiv II), du bureau.
   Explications en français, contenu en allemand.
   ===================================================================== */
window.MODULE_A21 = {
  id: "a2-1",
  titre: "A2.1 — Quotidien & argent",
  sousTitre: "Alltag & Geld",
  niveau: "A2",
  description:
    "On consolide les bases et on va plus loin : se présenter en détail, parler de son métier, " +
    "raconter le passé, sa formation, l'argent et même rêver au conditionnel (« Et si… ? »).",
  couleur: "#0e7490",
  lecons: [
    {
      id: "a2t01",
      rp: {
        "scene": "Se présenter en détail",
        "intro": "Présente-toi en détail à Zika.",
        "fin": "Bravo ! Tu sais te présenter en détail.",
        "tours": [
          {
            "de": "Erzähl mir von dir! Bist du verheiratet?",
            "fr": "Parle-moi de toi ! Es-tu marié(e) ?",
            "options": [
              {
                "de": "Nein, ich bin ledig.",
                "ok": true
              },
              {
                "de": "Ich bin müde.",
                "hint": "Zika demande ton état civil : « Ich bin ledig / verheiratet »."
              }
            ],
            "bravo": "Bravo !"
          },
          {
            "de": "Hast du Geschwister?",
            "fr": "As-tu des frères et sœurs ?",
            "options": [
              {
                "de": "Ja, eine Schwester.",
                "ok": true
              },
              {
                "de": "Ja, ich habe Hunger.",
                "hint": "« Geschwister » = frères et sœurs : « Ja, eine Schwester / einen Bruder »."
              }
            ],
            "bravo": "Très bien !"
          },
          {
            "de": "Was machst du in deiner Freizeit?",
            "fr": "Que fais-tu pendant ton temps libre ?",
            "options": [
              {
                "de": "Ich lese gern.",
                "ok": true
              },
              {
                "de": "Ich bin Lehrer.",
                "hint": "Ça, c'est ton métier. Pour les loisirs : « Ich … gern »."
              }
            ],
            "bravo": "Parfait !"
          }
        ]
      },
      vocCours: [
        "Au niveau A2, la **présentation** s'enrichit : tu ne dis plus seulement ton nom, mais tu parles de ta **famille**, de ton **état civil**, de ton **caractère** et de ton **parcours**. Vocabulaire clé : *verheiratet* (marié), *ledig* (célibataire), *geschieden* (divorcé), *die Familie*, *die Geschwister* (frères et sœurs).",
        "Soigne la distinction de **registre** : *du* (tutoiement, amis/famille) vs *Sie* (vouvoiement, contexte formel). Face à un inconnu adulte ou au travail, emploie *Sie* et les formules complètes : « *Darf ich mich vorstellen?* » (puis-je me présenter ?).",
        "Astuce : prépare une vraie **auto-présentation de 5-6 phrases** (nom, origine, profession, famille, loisirs) et apprends-la par cœur. C'est l'exercice le plus rentable du niveau A2 : tu réutiliseras ce bloc dans d'innombrables situations."
      ], numero: 1, titre: "Se présenter (en détail)", titreDE: "Sich vorstellen",
      theme: "Se présenter", duree: 45,
      objectifs: ["Se présenter de façon développée", "Parler de sa famille", "Utiliser les adjectifs possessifs"],
      grammairePoints: ["Adjectifs possessifs", "W-Fragen (révision)"],
      vocabulaire: [
        { de: "die Familie", fr: "la famille", ex: "Meine Familie ist groß." },
        { de: "verheiratet", fr: "marié(e)", ex: "Ich bin verheiratet." },
        { de: "ledig", fr: "célibataire", ex: "Er ist ledig." },
        { de: "die Eltern", fr: "les parents", ex: "Meine Eltern wohnen in Köln." },
        { de: "das Kind / die Kinder", fr: "l'enfant / les enfants", ex: "Wir haben zwei Kinder." },
        { de: "der Bruder", fr: "le frère", ex: "Mein Bruder ist Arzt." },
        { de: "die Schwester", fr: "la sœur", ex: "Meine Schwester studiert." },
        { de: "geboren", fr: "né(e)", ex: "Ich bin in Lyon geboren." },
        { de: "der Wohnort", fr: "le lieu de résidence", ex: "Mein Wohnort ist Berlin." },
        { de: "seit", fr: "depuis", ex: "Ich wohne seit 2020 hier." }
      ],
      grammaire: [
        { attention: "Le possessif s'accorde avec le **possesseur** ET se décline selon le **cas** : *Ich sehe **meinen** Bruder* (acc. masc.).", titre: "Les adjectifs possessifs", intro: "Ils s'accordent au genre du nom qui suit (comme ein/eine).",
          tableau: { entetes: ["Possesseur", "masc./neutre", "féminin/pluriel"], lignes: [["mon (ich)", "mein", "meine"], ["ton (du)", "dein", "deine"], ["son (er)", "sein", "seine"], ["son (sie)", "ihr", "ihre"], ["notre (wir)", "unser", "unsere"], ["votre (Sie)", "Ihr", "Ihre"]] },
          note: "Le possessif s'accorde au nom POSSÉDÉ, pas au possesseur. À l'accusatif masculin : meinen, deinen…" }
      ],
      dialogue: {
        titre: "Beim Kennenlernen", lieu: "Auf einer Party",
        lignes: [
          { loc: "Lena", de: "Erzähl mal, woher kommst du?", fr: "Raconte, d'où viens-tu ?" },
          { loc: "Marco", de: "Ich bin in Italien geboren, aber ich wohne seit fünf Jahren in Berlin.", fr: "Je suis né en Italie, mais je vis à Berlin depuis cinq ans." },
          { loc: "Lena", de: "Und bist du verheiratet?", fr: "Et tu es marié ?" },
          { loc: "Marco", de: "Ja, meine Frau heißt Sofia. Wir haben einen Sohn.", fr: "Oui, ma femme s'appelle Sofia. Nous avons un fils." },
          { loc: "Lena", de: "Schön! Meine Familie wohnt auch hier.", fr: "Super ! Ma famille habite ici aussi." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Seit wann wohnt Marco in Berlin?", options: ["Seit fünf Jahren", "Seit zwei Jahren", "Seit der Geburt"], correct: 0, explication: "« seit fünf Jahren »." },
        { type: "qcm", consigne: "Possessif correct.", question: "Das ist ___ Frau. (de lui)", options: ["seine", "ihre", "deine", "meine"], correct: 0, explication: "er → seine (Frau, fém.)." },
        { type: "trou", consigne: "Complétez (mein/meine).", texte: "{0} Bruder ist Arzt und {1} Schwester studiert.", accepte: [["mein"], ["meine"]], indice: "der Bruder / die Schwester" },
        { type: "conjugaison", consigne: "Possessifs de « wir » : complétez.", verbe: "unser (notre)", items: [{ pronom: "+ Vater (m)", reponse: "unser" }, { pronom: "+ Mutter (f)", reponse: "unsere" }, { pronom: "+ Kind (n)", reponse: "unser" }, { pronom: "+ Eltern (pl)", reponse: "unsere" }] },
        { type: "traduction", consigne: "Traduisez.", source: "Je suis marié et j'ai deux enfants.", accepte: ["Ich bin verheiratet und ich habe zwei Kinder", "Ich bin verheiratet und habe zwei Kinder"], aide: "verheiratet / Kinder" }
      ]
    },
    {
      id: "a2t02",
      rp: {
        "scene": "Les métiers",
        "intro": "Tu parles de ton travail avec Zika.",
        "fin": "Très bien ! Tu sais parler de ta carrière.",
        "tours": [
          {
            "de": "Was machen Sie beruflich?",
            "fr": "Que faites-vous comme métier ?",
            "options": [
              {
                "de": "Ich arbeite als Krankenpfleger.",
                "ok": true
              },
              {
                "de": "Ich arbeite gern.",
                "hint": "Donne ton métier : « Ich arbeite als … »."
              }
            ],
            "bravo": "Génial !"
          },
          {
            "de": "Seit wann machen Sie das?",
            "fr": "Depuis quand faites-vous cela ?",
            "options": [
              {
                "de": "Seit drei Jahren.",
                "ok": true
              },
              {
                "de": "In Berlin.",
                "hint": "Zika demande DEPUIS QUAND : « Seit … Jahren »."
              }
            ],
            "bravo": "Excellent !"
          }
        ]
      },
      vocCours: [
        "Ce champ lexical approfondit le monde du **travail** : noms de métiers, lieux et **activités** professionnelles. Rappelle-toi la formation du féminin en **-in** (*der Ingenieur → die Ingenieurin*) et l'absence d'article pour dire son métier (« *Ich bin Lehrer* » / « *Ich arbeite als Lehrer* »).",
        "Apprends les **verbes d'activité** propres à chaque métier (*unterrichten* enseigner, *reparieren* réparer, *verkaufen* vendre, *pflegen* soigner) et les compléments avec *als* (en tant que) et *bei* (employeur : « *Ich arbeite **bei** Siemens* »).",
        "Astuce : construis des phrases reliant **métier + lieu + activité** (« *Ein Koch arbeitet in einem Restaurant und kocht* »). Regrouper le vocabulaire par scénario professionnel le rend logique et facile à réactiver."
      ], numero: 2, titre: "Professions et activités", titreDE: "Berufe und Tätigkeiten",
      theme: "Professions et activités", duree: 50,
      objectifs: ["Décrire son métier et ses tâches", "Dire ce qu'on fait au travail"],
      grammairePoints: ["als + profession", "Verbes d'activité"],
      vocabulaire: [
        { de: "der Beruf", fr: "le métier", ex: "Was sind Sie von Beruf?" },
        { de: "arbeiten als", fr: "travailler comme", ex: "Ich arbeite als Lehrer." },
        { de: "der Krankenpfleger", fr: "l'infirmier", ex: "Er ist Krankenpfleger." },
        { de: "der Verkäufer", fr: "le vendeur", ex: "Sie ist Verkäuferin." },
        { de: "der Kunde", fr: "le client", ex: "Der Kunde wartet." },
        { de: "beraten", fr: "conseiller", ex: "Ich berate Kunden." },
        { de: "organisieren", fr: "organiser", ex: "Er organisiert Termine." },
        { de: "die Aufgabe", fr: "la tâche", ex: "Meine Aufgabe ist wichtig." },
        { de: "verdienen", fr: "gagner (de l'argent)", ex: "Sie verdient gut." },
        { de: "selbstständig", fr: "indépendant", ex: "Ich bin selbstständig." }
      ],
      grammaire: [
        { attention: "Pour le métier, **pas d'article** : *Ich arbeite **als** Lehrer* (et non « als ein Lehrer »).", titre: "Dire son métier : « als » et sans article", intro: "Pour la profession, pas d'article. « als » = en tant que.",
          tableau: { entetes: ["Structure", "Exemple", "Sens"], lignes: [["sein + métier", "Ich bin Lehrer.", "Je suis professeur."], ["arbeiten als", "Ich arbeite als Lehrer.", "Je travaille comme professeur."], ["bei + entreprise", "Ich arbeite bei BMW.", "Je travaille chez BMW."]] },
          note: "Féminin : on ajoute souvent -in (Lehrer → Lehrerin, Verkäufer → Verkäuferin)." }
      ],
      dialogue: {
        titre: "Was machst du beruflich?", lieu: "Im Café",
        lignes: [
          { loc: "Tim", de: "Was machst du beruflich?", fr: "Que fais-tu comme métier ?" },
          { loc: "Sara", de: "Ich arbeite als Verkäuferin und berate Kunden.", fr: "Je travaille comme vendeuse et je conseille les clients." },
          { loc: "Tim", de: "Macht das Spaß?", fr: "Ça te plaît ?" },
          { loc: "Sara", de: "Ja, und ich verdiene nicht schlecht. Und du?", fr: "Oui, et je gagne plutôt bien. Et toi ?" },
          { loc: "Tim", de: "Ich bin selbstständig und organisiere Events.", fr: "Je suis indépendant et j'organise des événements." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was ist Saras Beruf?", options: ["Verkäuferin", "Lehrerin", "Ärztin"], correct: 0, explication: "« Ich arbeite als Verkäuferin »." },
        { type: "qcm", consigne: "Choisissez.", question: "Ich arbeite ___ Lehrer.", options: ["als", "wie", "bei", "für"], correct: 0, explication: "als + profession." },
        { type: "association", consigne: "Associez le verbe et sa traduction.", paires: [{ gauche: "beraten", droite: "conseiller" }, { gauche: "verdienen", droite: "gagner" }, { gauche: "organisieren", droite: "organiser" }, { gauche: "arbeiten", droite: "travailler" }] },
        { type: "trou", consigne: "Complétez.", texte: "Sie arbeitet {0} Verkäuferin {1} einer Bäckerei.", accepte: [["als"], ["in"]], indice: "comme / dans" },
        { type: "oral", consigne: "Production orale.", prompt: "Dites votre métier et une de vos tâches : « Ich arbeite als … »", attendus: ["ich arbeite", "als"], modele: "Ich arbeite als Ingenieur und ich organisiere Projekte." }
      ]
    },
    {
      id: "a2t03",
      rp: {
        "scene": "Le week-end",
        "intro": "Raconte ton week-end à Zika (au passé).",
        "fin": "Bravo ! Tu sais raconter au passé.",
        "tours": [
          {
            "de": "Was hast du am Wochenende gemacht?",
            "fr": "Qu'as-tu fait le week-end ?",
            "options": [
              {
                "de": "Ich habe Freunde getroffen.",
                "ok": true
              },
              {
                "de": "Ich treffe Freunde.",
                "hint": "C'est au PASSÉ : Perfekt « Ich habe … getroffen »."
              }
            ],
            "bravo": "Bien joué !"
          },
          {
            "de": "Und am Sonntag?",
            "fr": "Et dimanche ?",
            "options": [
              {
                "de": "Ich bin ins Kino gegangen.",
                "ok": true
              },
              {
                "de": "Ich habe ins Kino gegangen.",
                "hint": "Avec « gehen » (déplacement) on utilise « sein » : « Ich BIN … gegangen »."
              }
            ],
            "bravo": "Super !"
          }
        ]
      },
      vocCours: [
        "Ce thème fournit le vocabulaire pour **raconter des événements passés** : marqueurs temporels et verbes d'action courants. Mots clés : *gestern* (hier), *letzte Woche* (la semaine dernière), *vor zwei Tagen* (il y a deux jours), *früher* (autrefois), *damals* (à l'époque).",
        "Le vocabulaire se combine avec le **Perfekt** : apprends les **participes passés** des verbes fréquents en même temps que les mots (*gemacht, gegangen, gesehen, gewesen*). Note les verbes de déplacement avec *sein* (« *Ich **bin** gefahren* »).",
        "Astuce : raconte un **souvenir réel** (ton week-end, tes dernières vacances) avec ces marqueurs et 5-6 verbes au passé. Le récit personnel ancre à la fois le vocabulaire et le temps du passé."
      ], numero: 3, titre: "Raconter le passé", titreDE: "Über die Vergangenheit erzählen",
      theme: "Raconter le passé", duree: 55,
      objectifs: ["Raconter au passé composé", "Utiliser war / hatte (prétérit de sein/haben)"],
      grammairePoints: ["Perfekt (révision)", "Präteritum: war, hatte"],
      vocabulaire: [
        { de: "gestern", fr: "hier", ex: "Gestern war ich müde." },
        { de: "letzte Woche", fr: "la semaine dernière", ex: "Letzte Woche war ich krank." },
        { de: "früher", fr: "autrefois", ex: "Früher hatte ich kein Auto." },
        { de: "passieren", fr: "se passer", ex: "Was ist passiert?" },
        { de: "treffen", fr: "rencontrer", ex: "Ich habe Anna getroffen." },
        { de: "der Urlaub", fr: "les vacances", ex: "Der Urlaub war toll." },
        { de: "verbringen", fr: "passer (du temps)", ex: "Wir haben drei Tage verbracht." },
        { de: "erzählen", fr: "raconter", ex: "Erzähl mir alles!" },
        { de: "das Wochenende", fr: "le week-end", ex: "Mein Wochenende war schön." },
        { de: "vor zwei Tagen", fr: "il y a deux jours", ex: "Vor zwei Tagen kam er an." }
      ],
      grammaire: [
        { attention: "*sein* → **war**, *haben* → **hatte** : ces deux-là se disent au prétérit **même à l'oral**.", titre: "Le prétérit de « sein » et « haben »", intro: "À l'oral, on utilise le Perfekt, SAUF pour sein/haben où l'on dit war/hatte.",
          tableau: { entetes: ["Pronom", "sein → war", "haben → hatte"], lignes: [["ich", "war", "hatte"], ["du", "warst", "hattest"], ["er/sie/es", "war", "hatte"], ["wir", "waren", "hatten"], ["ihr", "wart", "hattet"], ["sie/Sie", "waren", "hatten"]] },
          note: "Ex. : Gestern WAR ich im Kino. / Ich HATTE keine Zeit. (et non « habe gehabt »)." }
      ],
      dialogue: {
        titre: "Wie war dein Wochenende?", lieu: "Montagmorgen",
        lignes: [
          { loc: "Ben", de: "Wie war dein Wochenende?", fr: "Comment était ton week-end ?" },
          { loc: "Eva", de: "Sehr schön! Ich habe Freunde getroffen.", fr: "Très bien ! J'ai rencontré des amis." },
          { loc: "Ben", de: "Und am Sonntag?", fr: "Et dimanche ?" },
          { loc: "Eva", de: "Da war ich zu Hause, ich hatte keine Energie.", fr: "J'étais à la maison, je n'avais pas d'énergie." },
          { loc: "Ben", de: "Verstehe. Ich habe das ganze Wochenende gearbeitet.", fr: "Je comprends. J'ai travaillé tout le week-end." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was hat Eva am Wochenende gemacht?", options: ["Freunde getroffen", "Gearbeitet", "Eine Reise gemacht"], correct: 0, explication: "« Ich habe Freunde getroffen »." },
        { type: "qcm", consigne: "Choisissez (prétérit).", question: "Gestern ___ ich im Kino.", options: ["war", "habe", "bin", "hatte"], correct: 0, explication: "sein → war." },
        { type: "trou", consigne: "Complétez (war/hatte).", texte: "Ich {0} müde und ich {1} keine Zeit.", accepte: [["war"], ["hatte"]], indice: "sein / haben au prétérit" },
        { type: "conjugaison", consigne: "Conjuguez « sein » au prétérit (war).", verbe: "sein (Präteritum)", items: [{ pronom: "ich", reponse: "war" }, { pronom: "du", reponse: "warst" }, { pronom: "er/sie/es", reponse: "war" }, { pronom: "wir", reponse: "waren" }, { pronom: "ihr", reponse: "wart" }, { pronom: "sie/Sie", reponse: "waren" }] },
        { type: "ordre", consigne: "Construisez la phrase (Perfekt).", mots: ["Ich", "habe", "Anna", "getroffen"], correct: "Ich habe Anna getroffen", traduction: "J'ai rencontré Anna." }
      ]
    },
    {
      id: "a2t04",
      rp: {
        "scene": "Le CV",
        "intro": "Tu parles de ta formation avec Zika.",
        "fin": "Parfait ! Tu sais parler de ton parcours.",
        "tours": [
          {
            "de": "Welchen Abschluss haben Sie?",
            "fr": "Quel diplôme avez-vous ?",
            "options": [
              {
                "de": "Ich habe Abitur.",
                "ok": true
              },
              {
                "de": "Ich habe Hunger.",
                "hint": "Donne ton diplôme : « Ich habe Abitur / einen Bachelor »."
              }
            ],
            "bravo": "Bravo !"
          },
          {
            "de": "Haben Sie schon ein Praktikum gemacht?",
            "fr": "Avez-vous déjà fait un stage ?",
            "options": [
              {
                "de": "Ja, bei einer Firma.",
                "ok": true
              },
              {
                "de": "Nein, ich bin müde.",
                "hint": "Réponds sur le STAGE : « Ja, bei einer Firma » ou « Nein, noch nicht »."
              }
            ],
            "bravo": "Très bien !"
          }
        ]
      },
      vocCours: [
        "Ce champ lexical couvre l'**école**, la **formation** et le **CV** — essentiel pour candidater. Vocabulaire clé : *die Schule*, *die Ausbildung* (formation professionnelle), *das Studium* (études supérieures), *der Lebenslauf* (le CV), *das Praktikum* (le stage), *der Abschluss* (le diplôme).",
        "Attention au **faux-ami** *das Gymnasium* = le **lycée** (filière générale), et *die Note* = la **note** scolaire (ni musique, ni mémo). Distingue *lernen* (apprendre/étudier) et *studieren* (faire des études supérieures).",
        "Astuce : rédige les grandes lignes de **ton propre parcours** en allemand (école, diplômes, expériences). Comme pour un vrai CV, organise par rubriques — c'est ainsi que ce vocabulaire s'emploie réellement."
      ], numero: 4, titre: "École, formation, CV", titreDE: "Schule, Ausbildung, Lebenslauf",
      theme: "École, formation, curriculum vitae", duree: 50,
      objectifs: ["Parler de son parcours scolaire", "Lire/écrire un CV simple", "Dire des dates et durées"],
      grammairePoints: ["von … bis", "Dates et années"],
      vocabulaire: [
        { de: "die Schule", fr: "l'école", ex: "Ich war auf einer Schule in Wien." },
        { de: "die Ausbildung", fr: "la formation", ex: "Ich mache eine Ausbildung." },
        { de: "das Studium", fr: "les études", ex: "Mein Studium dauert drei Jahre." },
        { de: "der Abschluss", fr: "le diplôme", ex: "Ich habe einen Abschluss." },
        { de: "der Lebenslauf", fr: "le CV", ex: "Hier ist mein Lebenslauf." },
        { de: "die Erfahrung", fr: "l'expérience", ex: "Ich habe viel Erfahrung." },
        { de: "die Stelle", fr: "le poste / l'emploi", ex: "Ich suche eine Stelle." },
        { de: "sich bewerben", fr: "postuler", ex: "Ich bewerbe mich bei Siemens." },
        { de: "dauern", fr: "durer", ex: "Das Studium dauert lange." },
        { de: "abschließen", fr: "terminer (un cursus)", ex: "Ich habe das Studium abgeschlossen." }
      ],
      grammaire: [
        { attention: "*von* + datif ; on contracte souvent : *vom Montag **bis** Freitag*.", titre: "Dire une période : « von … bis »", intro: "Pour une durée datée. On lit les années sans « in ».",
          tableau: { entetes: ["Allemand", "Sens"], lignes: [["von 2015 bis 2018", "de 2015 à 2018"], ["zwei Jahre lang", "pendant deux ans"], ["seit 2020", "depuis 2020"], ["1998 (neunzehnhundertachtundneunzig)", "en 1998"]] },
          note: "Les années jusqu'à 1999 se lisent en « centaines » : 1998 = neunzehnhundert-achtundneunzig." }
      ],
      dialogue: {
        titre: "Im Vorstellungsgespräch", lieu: "Bewerbungsgespräch",
        lignes: [
          { loc: "Chefin", de: "Erzählen Sie von Ihrer Ausbildung.", fr: "Parlez-moi de votre formation." },
          { loc: "Herr Roth", de: "Ich habe von 2015 bis 2018 in München studiert.", fr: "J'ai étudié à Munich de 2015 à 2018." },
          { loc: "Chefin", de: "Und Berufserfahrung?", fr: "Et de l'expérience professionnelle ?" },
          { loc: "Herr Roth", de: "Ja, ich habe drei Jahre als Ingenieur gearbeitet.", fr: "Oui, j'ai travaillé trois ans comme ingénieur." },
          { loc: "Chefin", de: "Warum bewerben Sie sich bei uns?", fr: "Pourquoi postulez-vous chez nous ?" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie lange hat Herr Roth gearbeitet?", options: ["Drei Jahre", "Zwei Jahre", "Fünf Jahre"], correct: 0, explication: "« drei Jahre als Ingenieur »." },
        { type: "qcm", consigne: "Choisissez.", question: "Ich habe ___ 2015 ___ 2018 studiert.", options: ["von / bis", "seit / bis", "ab / zu", "in / bis"], correct: 0, explication: "von … bis (de … à)." },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "die Ausbildung", droite: "la formation" }, { gauche: "der Abschluss", droite: "le diplôme" }, { gauche: "die Stelle", droite: "le poste" }, { gauche: "sich bewerben", droite: "postuler" }] },
        { type: "trou", consigne: "Complétez.", texte: "Das Studium {0} drei Jahre. (durer)", accepte: [["dauert"]], indice: "dauern" },
        { type: "traduction", consigne: "Traduisez.", source: "Je cherche un poste.", accepte: ["Ich suche eine Stelle"], aide: "die Stelle" }
      ]
    },
    {
      id: "a2t05",
      rp: {
        "scene": "Le quotidien",
        "intro": "Parle de tes habitudes à Zika.",
        "fin": "Bravo ! Tu sais parler de tes habitudes.",
        "tours": [
          {
            "de": "Wie oft machst du Sport?",
            "fr": "À quelle fréquence fais-tu du sport ?",
            "options": [
              {
                "de": "Dreimal pro Woche.",
                "ok": true
              },
              {
                "de": "In der Stadt.",
                "hint": "Zika demande la FRÉQUENCE : « dreimal pro Woche », « oft », « selten »."
              }
            ],
            "bravo": "Parfait !"
          },
          {
            "de": "Was machst du am liebsten?",
            "fr": "Qu'aimes-tu faire le plus ?",
            "options": [
              {
                "de": "Am liebsten koche ich.",
                "ok": true
              },
              {
                "de": "Ich bin Koch.",
                "hint": "« am liebsten » = préférer : « Am liebsten … ich » + activité."
              }
            ],
            "bravo": "Génial !"
          }
        ]
      },
      vocCours: [
        "Ce vocabulaire élargit la **vie quotidienne** et les **loisirs** vus en A1, avec plus de verbes et d'**expressions de fréquence** : *immer* (toujours), *oft* (souvent), *manchmal* (parfois), *selten* (rarement), *nie* (jamais), *einmal pro Woche* (une fois par semaine).",
        "Beaucoup de verbes de loisir sont **séparables ou réfléchis** : *sich treffen* (se retrouver), *fernsehen* (regarder la télé), *spazieren gehen* (se promener), *sich entspannen* (se détendre). Apprends-les avec leur construction.",
        "Astuce : décris ta **semaine type** en disant à quelle fréquence tu fais chaque activité. Combiner adverbes de fréquence et verbes d'activité produit des phrases naturelles et très réutilisables."
      ], numero: 5, titre: "Activités quotidiennes & loisirs", titreDE: "Alltag und Freizeit",
      theme: "Activités quotidiennes, loisirs", duree: 50,
      objectifs: ["Décrire sa journée en détail", "Utiliser les verbes pronominaux (sich)"],
      grammairePoints: ["Verbes réfléchis (sich)", "Adverbes de fréquence"],
      vocabulaire: [
        { de: "sich waschen", fr: "se laver", ex: "Ich wasche mich." },
        { de: "sich anziehen", fr: "s'habiller", ex: "Er zieht sich an." },
        { de: "sich treffen", fr: "se retrouver", ex: "Wir treffen uns um acht." },
        { de: "sich entspannen", fr: "se détendre", ex: "Ich entspanne mich." },
        { de: "oft", fr: "souvent", ex: "Ich gehe oft joggen." },
        { de: "manchmal", fr: "parfois", ex: "Manchmal koche ich." },
        { de: "selten", fr: "rarement", ex: "Ich sehe selten fern." },
        { de: "immer", fr: "toujours", ex: "Ich frühstücke immer." },
        { de: "nie", fr: "jamais", ex: "Ich rauche nie." },
        { de: "das Hobby", fr: "le loisir", ex: "Mein Hobby ist Klettern." }
      ],
      grammaire: [
        { attention: "Le pronom réfléchi s'accorde au sujet : *ich → **mich**, du → **dich*** (*Ich freue **mich***).", titre: "Les verbes réfléchis (Reflexivverben)", intro: "Avec un pronom réfléchi à l'accusatif (mich, dich, sich…).",
          tableau: { entetes: ["Pronom", "Réfléchi", "Exemple"], lignes: [["ich", "mich", "ich wasche mich"], ["du", "dich", "du wäschst dich"], ["er/sie/es", "sich", "er wäscht sich"], ["wir", "uns", "wir treffen uns"], ["ihr", "euch", "ihr trefft euch"], ["sie/Sie", "sich", "sie treffen sich"]] },
          note: "Le pronom réfléchi se place après le verbe conjugué : « Ich entspanne mich am Abend »." }
      ],
      dialogue: {
        titre: "Ein typischer Tag", lieu: "Gespräch",
        lignes: [
          { loc: "Nora", de: "Was machst du morgens?", fr: "Que fais-tu le matin ?" },
          { loc: "Jan", de: "Ich wasche mich, ziehe mich an und frühstücke immer.", fr: "Je me lave, m'habille et prends toujours le petit-déj." },
          { loc: "Nora", de: "Und in der Freizeit?", fr: "Et pendant ton temps libre ?" },
          { loc: "Jan", de: "Ich treffe mich oft mit Freunden und entspanne mich.", fr: "Je retrouve souvent des amis et je me détends." },
          { loc: "Nora", de: "Joggst du manchmal?", fr: "Tu cours parfois ?" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was macht Jan oft?", options: ["Sich mit Freunden treffen", "Joggen", "Kochen"], correct: 0, explication: "« Ich treffe mich oft mit Freunden »." },
        { type: "qcm", consigne: "Pronom réfléchi correct.", question: "Ich entspanne ___ am Abend.", options: ["mich", "mir", "sich", "dich"], correct: 0, explication: "ich → mich." },
        { type: "trou", consigne: "Complétez le réfléchi.", texte: "Wir treffen {0} um acht und er zieht {1} an.", accepte: [["uns"], ["sich"]], indice: "wir → uns ; er → sich" },
        { type: "association", consigne: "Associez l'adverbe de fréquence.", paires: [{ gauche: "immer", droite: "toujours" }, { gauche: "oft", droite: "souvent" }, { gauche: "manchmal", droite: "parfois" }, { gauche: "nie", droite: "jamais" }] },
        { type: "ordre", consigne: "Construisez la phrase.", mots: ["Ich", "wasche", "mich", "morgens"], correct: "Ich wasche mich morgens", traduction: "Je me lave le matin." }
      ]
    },
    {
      id: "a2t06",
      rp: {
        "scene": "Au magasin",
        "intro": "Tu fais des achats. Zika est le vendeur.",
        "fin": "Parfait ! Tu sais faire des achats.",
        "tours": [
          {
            "de": "Guten Tag! Kann ich Ihnen helfen?",
            "fr": "Bonjour ! Puis-je vous aider ?",
            "options": [
              {
                "de": "Ja, ich suche eine Jacke.",
                "ok": true
              },
              {
                "de": "Nein, ich bin eine Jacke.",
                "hint": "« Je suis une veste » 😅. Dis « Ich suche eine Jacke »."
              }
            ],
            "bravo": "Excellent !"
          },
          {
            "de": "Welche Größe brauchen Sie?",
            "fr": "Quelle taille vous faut-il ?",
            "options": [
              {
                "de": "Größe M, bitte.",
                "ok": true
              },
              {
                "de": "Um zehn Uhr.",
                "hint": "Zika demande la TAILLE : « Größe M / 38 »."
              }
            ],
            "bravo": "Bien joué !"
          },
          {
            "de": "Das macht 40 Euro.",
            "fr": "Cela fait 40 euros.",
            "options": [
              {
                "de": "Kann ich mit Karte zahlen?",
                "ok": true
              },
              {
                "de": "Wie spät ist es?",
                "hint": "Il faut payer : « Kann ich mit Karte zahlen? »."
              }
            ],
            "bravo": "Super !"
          }
        ]
      },
      vocCours: [
        "Ce champ lexical très pratique concerne les **achats** au quotidien : magasins, prix, paiement. Vocabulaire clé : *einkaufen* (faire les courses), *das Geschäft / der Laden* (le magasin), *der Preis*, *kosten* (coûter), *bezahlen* (payer), *die Kasse* (la caisse).",
        "Apprends les **formules d'achat** toutes faites : « *Was kostet das?* », « *Ich hätte gern…* » (je voudrais…), « *Kann ich mit Karte bezahlen?* ». Le verbe poli *möchten* et le conditionnel *hätte gern* sont essentiels.",
        "Astuce : associe chaque mot à un **lieu d'achat** (*die Bäckerei* boulangerie, *der Supermarkt*, *die Apotheke*) et joue une scène d'achat. Ce vocabulaire concret se mémorise vite en situation."
      ], numero: 6, titre: "Acheter et dépenser", titreDE: "Einkaufen und Geld ausgeben",
      theme: "Acheter et dépenser de l'argent", duree: 50,
      objectifs: ["Faire des achats", "Comparer les prix (comparatif/superlatif)"],
      grammairePoints: ["Comparatif et superlatif", "kosten, ausgeben"],
      vocabulaire: [
        { de: "ausgeben", fr: "dépenser", ex: "Ich gebe viel Geld aus." },
        { de: "billig", fr: "bon marché", ex: "Das ist billig." },
        { de: "teuer", fr: "cher", ex: "Das Auto ist teuer." },
        { de: "günstig", fr: "avantageux", ex: "Ein günstiger Preis." },
        { de: "das Angebot", fr: "l'offre / la promo", ex: "Heute gibt es ein Angebot." },
        { de: "die Größe", fr: "la taille", ex: "Welche Größe brauchen Sie?" },
        { de: "anprobieren", fr: "essayer (un vêtement)", ex: "Darf ich das anprobieren?" },
        { de: "die Kasse", fr: "la caisse", ex: "Zahlen Sie an der Kasse." },
        { de: "der Rabatt", fr: "la réduction", ex: "Gibt es einen Rabatt?" },
        { de: "umtauschen", fr: "échanger", ex: "Kann ich das umtauschen?" }
      ],
      grammaire: [
        { attention: "« que » dans une comparaison = **als** (*größer **als***), pas *wie* (réservé à l'égalité *so … wie*).", titre: "Comparatif et superlatif", intro: "Comparatif : adjectif + -er (+ als). Superlatif : am + adjectif + -sten.",
          tableau: { entetes: ["Adjectif", "Comparatif", "Superlatif"], lignes: [["billig", "billiger", "am billigsten"], ["teuer", "teurer", "am teuersten"], ["gut", "besser", "am besten"], ["groß", "größer", "am größten"]] },
          note: "« als » = que (Das ist billiger ALS das.). Beaucoup d'adjectifs courts prennent un Umlaut (groß → größer)." }
      ],
      dialogue: {
        titre: "Im Geschäft", lieu: "Kleidungsgeschäft",
        lignes: [
          { loc: "Verkäufer", de: "Kann ich Ihnen helfen?", fr: "Puis-je vous aider ?" },
          { loc: "Kundin", de: "Ja, darf ich diese Jacke anprobieren?", fr: "Oui, puis-je essayer cette veste ?" },
          { loc: "Verkäufer", de: "Natürlich. Welche Größe?", fr: "Bien sûr. Quelle taille ?" },
          { loc: "Kundin", de: "Größe M. Ist sie teurer als die blaue?", fr: "Taille M. Est-elle plus chère que la bleue ?" },
          { loc: "Verkäufer", de: "Nein, die blaue ist am teuersten. Diese ist günstiger.", fr: "Non, la bleue est la plus chère. Celle-ci est plus avantageuse." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Welche Jacke ist am teuersten?", options: ["Die blaue", "Die Größe M", "Das Angebot"], correct: 0, explication: "« die blaue ist am teuersten »." },
        { type: "qcm", consigne: "Comparatif de « teuer ».", question: "Das Auto ist ___ als das Fahrrad.", options: ["teurer", "teuerer", "am teuersten", "teuer"], correct: 0, explication: "teuer → teurer." },
        { type: "trou", consigne: "Complétez le superlatif.", texte: "Dieses Angebot ist am {0}. (billig)", accepte: [["billigsten"]], indice: "am … -sten" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "billig", droite: "bon marché" }, { gauche: "teuer", droite: "cher" }, { gauche: "der Rabatt", droite: "la réduction" }, { gauche: "anprobieren", droite: "essayer" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Au magasin : demandez à essayer un vêtement et son prix.", attendus: ["anprobieren", "kostet"], modele: "Darf ich das anprobieren? Wie viel kostet die Jacke?" }
      ]
    },
    {
      id: "a2t07",
      rp: {
        "scene": "À la banque",
        "intro": "Tu parles d'argent avec Zika.",
        "fin": "Bien ! Tu sais parler d'argent.",
        "tours": [
          {
            "de": "Möchten Sie Geld sparen oder ausgeben?",
            "fr": "Voulez-vous économiser ou dépenser de l'argent ?",
            "options": [
              {
                "de": "Ich möchte sparen.",
                "ok": true
              },
              {
                "de": "Ich möchte schlafen.",
                "hint": "Réponds sur l'argent : « sparen » (économiser) ou « ausgeben » (dépenser)."
              }
            ],
            "bravo": "Bravo !"
          },
          {
            "de": "Haben Sie noch Fragen?",
            "fr": "Avez-vous d'autres questions ?",
            "options": [
              {
                "de": "Ja, ist das Konto kostenlos?",
                "ok": true
              },
              {
                "de": "Nein, ich bin glücklich.",
                "hint": "Pose une question utile : « Ist das Konto kostenlos? »."
              }
            ],
            "bravo": "Très bien !"
          }
        ]
      },
      vocCours: [
        "Ce thème approfondit le vocabulaire de l'**argent** et des **finances personnelles**. Mots clés : *das Geld*, *das Konto* (le compte), *die Bank*, *sparen* (économiser), *ausgeben* (dépenser), *verdienen* (gagner sa vie), *die Rechnung* (la facture), *bar* (en espèces).",
        "Attention aux nuances : *kosten* (coûter) ≠ *bezahlen* (payer) ≠ *ausgeben* (dépenser). Distingue aussi *teuer* (cher) de *billig / günstig* (bon marché) — *günstig* (avantageux) est plus positif que *billig*, qui peut suggérer « bas de gamme ».",
        "Astuce : parle de **ton propre budget** (ce que tu gagnes, économises, dépenses) avec ces verbes. Relier le vocabulaire financier à des montants concrets le rend immédiatement utile et mémorable."
      ], numero: 7, titre: "Les mots autour de l'argent", titreDE: "Rund ums Geld",
      theme: "Les mots autour de l'argent", duree: 45,
      objectifs: ["Utiliser le vocabulaire de la banque", "Payer en espèces ou par carte"],
      grammairePoints: ["Verbes avec datif (zahlen, gehören)"],
      vocabulaire: [
        { de: "das Geld", fr: "l'argent", ex: "Ich habe kein Geld dabei." },
        { de: "das Konto", fr: "le compte", ex: "Mein Konto ist leer." },
        { de: "die Bank", fr: "la banque", ex: "Ich gehe zur Bank." },
        { de: "bar", fr: "en espèces", ex: "Ich zahle bar." },
        { de: "die Kreditkarte", fr: "la carte de crédit", ex: "Nehmen Sie Kreditkarte?" },
        { de: "überweisen", fr: "virer (de l'argent)", ex: "Ich überweise die Miete." },
        { de: "sparen", fr: "épargner", ex: "Wir sparen für ein Haus." },
        { de: "leihen", fr: "prêter / emprunter", ex: "Kannst du mir Geld leihen?" },
        { de: "die Rechnung", fr: "la facture", ex: "Die Rechnung ist hoch." },
        { de: "der Betrag", fr: "le montant", ex: "Der Betrag ist 50 Euro." }
      ],
      grammaire: [
        { attention: "Le destinataire (à qui ?) est au **datif** : *Ich gebe **dem** Kind…* (*der* → *dem*).", titre: "Le datif du destinataire (à qui ?)", intro: "Certains verbes ont un complément au datif (la personne à qui).",
          tableau: { entetes: ["Verbe", "Exemple", "Sens"], lignes: [["leihen", "Ich leihe dir Geld.", "Je te prête de l'argent."], ["geben", "Er gibt mir die Karte.", "Il me donne la carte."], ["gehören", "Das Geld gehört mir.", "L'argent m'appartient."], ["helfen", "Ich helfe Ihnen.", "Je vous aide."]] },
          note: "Pronoms datif : mir, dir, ihm/ihr, uns, euch, ihnen/Ihnen." }
      ],
      dialogue: {
        titre: "An der Kasse", lieu: "Supermarkt",
        lignes: [
          { loc: "Kassierer", de: "Das macht 23,50 Euro.", fr: "Cela fait 23,50 euros." },
          { loc: "Kunde", de: "Kann ich mit Karte zahlen?", fr: "Puis-je payer par carte ?" },
          { loc: "Kassierer", de: "Ja, oder bar. Wie Sie möchten.", fr: "Oui, ou en espèces. Comme vous voulez." },
          { loc: "Kunde", de: "Ich zahle bar. Können Sie mir wechseln?", fr: "Je paie en espèces. Pouvez-vous me rendre la monnaie ?" },
          { loc: "Kassierer", de: "Natürlich. Hier ist Ihr Wechselgeld.", fr: "Bien sûr. Voici votre monnaie." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie zahlt der Kunde?", options: ["Bar", "Mit Karte", "Er überweist"], correct: 0, explication: "« Ich zahle bar »." },
        { type: "qcm", consigne: "Pronom datif.", question: "Kannst du ___ Geld leihen? (à moi)", options: ["mir", "mich", "ich", "dir"], correct: 0, explication: "leihen + datif : mir." },
        { type: "trou", consigne: "Complétez (datif).", texte: "Das Geld gehört {0}. (à lui)", accepte: [["ihm"]], indice: "er → ihm" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "das Konto", droite: "le compte" }, { gauche: "sparen", droite: "épargner" }, { gauche: "bar", droite: "en espèces" }, { gauche: "überweisen", droite: "virer" }] },
        { type: "traduction", consigne: "Traduisez.", source: "Puis-je payer par carte ?", accepte: ["Kann ich mit Karte zahlen", "Kann ich mit Karte zahlen?"], aide: "mit Karte zahlen" }
      ]
    },
    {
      id: "a2t08",
      rp: {
        "scene": "Si j'étais riche…",
        "intro": "Imagine que tu gagnes au loto ! Réponds au conditionnel.",
        "fin": "Bravo ! Tu maîtrises le conditionnel du rêve.",
        "tours": [
          {
            "de": "Was würdest du machen, wenn du reich wärst?",
            "fr": "Que ferais-tu si tu étais riche ?",
            "options": [
              {
                "de": "Ich würde eine Weltreise machen.",
                "ok": true
              },
              {
                "de": "Ich mache eine Weltreise.",
                "hint": "C'est hypothétique : conditionnel « Ich würde … machen »."
              }
            ],
            "bravo": "Parfait !"
          },
          {
            "de": "Und wo würdest du wohnen?",
            "fr": "Et où habiterais-tu ?",
            "options": [
              {
                "de": "Ich würde am Meer wohnen.",
                "ok": true
              },
              {
                "de": "Ich wohne in einer Wohnung.",
                "hint": "Toujours au conditionnel : « Ich würde … wohnen »."
              }
            ],
            "bravo": "Génial !"
          }
        ]
      },
      vocCours: [
        "Ce thème ludique fait rêver : « **et si j'étais riche ?** ». Il introduit le vocabulaire des **souhaits** et de l'**hypothèse**, en lien avec le **Konjunktiv II**. Expressions clés : *Wenn ich reich wäre…*, *Ich würde… kaufen / reisen* (j'achèterais / voyagerais).",
        "Apprends les formes irréelles fréquentes : *wäre* (serais), *hätte* (aurais), *würde + infinitif* (ferais), *könnte* (pourrais). Le vocabulaire des envies (*die Villa, die Weltreise, der Luxus, das Vermögen* fortune) donne de la matière au rêve.",
        "Astuce : écris **trois phrases sur ce que tu ferais** si tu gagnais au loto (« *Ich würde…* »). Cet exercice motivant fixe à la fois le vocabulaire du désir et la structure du conditionnel."
      ], numero: 8, titre: "Et si… ? Le rêve de richesse", titreDE: "Wenn ich reich wäre…",
      theme: "Le rêve de la richesse : Et si… ?", duree: 55,
      objectifs: ["Exprimer un souhait / une hypothèse", "Utiliser le Konjunktiv II (würde, wäre, hätte)"],
      grammairePoints: ["Subjonctif II (conditionnel)", "wenn-Sätze"],
      vocabulaire: [
        { de: "reich", fr: "riche", ex: "Wenn ich reich wäre…" },
        { de: "der Traum", fr: "le rêve", ex: "Das ist mein Traum." },
        { de: "die Million", fr: "le million", ex: "Eine Million Euro!" },
        { de: "gewinnen", fr: "gagner", ex: "Wenn ich gewinnen würde…" },
        { de: "die Welt", fr: "le monde", ex: "Ich würde die Welt bereisen." },
        { de: "spenden", fr: "faire un don", ex: "Ich würde Geld spenden." },
        { de: "sich leisten", fr: "se permettre", ex: "Ich könnte mir ein Haus leisten." },
        { de: "aufhören", fr: "arrêter", ex: "Ich würde aufhören zu arbeiten." },
        { de: "vielleicht", fr: "peut-être", ex: "Vielleicht würde ich reisen." },
        { de: "das Glück", fr: "le bonheur / la chance", ex: "Geld ist nicht alles." }
      ],
      grammaire: [
        { attention: "Formes irrégulières à connaître : *Ich **hätte** gern…*, ***Könnten** Sie…?*", titre: "Le Konjunktiv II (conditionnel)", intro: "Pour l'irréel/le souhait. Souvent : würde + infinitif. Mais wäre (sein), hätte (haben), könnte (können) ont une forme propre.",
          tableau: { entetes: ["Verbe", "Konjunktiv II", "Exemple"], lignes: [["sein", "wäre", "Wenn ich reich wäre…"], ["haben", "hätte", "Ich hätte gern ein Haus."], ["können", "könnte", "Ich könnte reisen."], ["autres verbes", "würde + Inf.", "Ich würde die Welt bereisen."]] },
          note: "Structure : « Wenn ich … wäre/hätte, würde ich … » → Si j'étais/avais…, je …rais." }
      ],
      dialogue: {
        titre: "Wenn wir im Lotto gewinnen…", lieu: "Beim Kaffee",
        lignes: [
          { loc: "Mia", de: "Was würdest du machen, wenn du reich wärst?", fr: "Que ferais-tu si tu étais riche ?" },
          { loc: "Tom", de: "Ich würde die Welt bereisen und ein Haus kaufen.", fr: "Je voyagerais dans le monde et j'achèterais une maison." },
          { loc: "Mia", de: "Würdest du aufhören zu arbeiten?", fr: "Tu arrêterais de travailler ?" },
          { loc: "Tom", de: "Vielleicht. Und ich würde Geld spenden. Und du?", fr: "Peut-être. Et je ferais des dons. Et toi ?" },
          { loc: "Mia", de: "Ich hätte gern eine kleine Insel!", fr: "J'aimerais bien avoir une petite île !" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was würde Tom machen?", options: ["Die Welt bereisen", "Eine Insel kaufen", "Nichts ändern"], correct: 0, explication: "« Ich würde die Welt bereisen »." },
        { type: "qcm", consigne: "Konjunktiv II de « sein ».", question: "Wenn ich reich ___ …", options: ["wäre", "war", "bin", "würde"], correct: 0, explication: "sein → wäre." },
        { type: "trou", consigne: "Complétez (würde/hätte).", texte: "Ich {0} gern ein Haus und ich {1} viel reisen.", accepte: [["hätte"], ["würde"]], indice: "haben → hätte ; autre verbe → würde" },
        { type: "ordre", consigne: "Construisez la phrase.", mots: ["Ich", "würde", "die", "Welt", "bereisen"], correct: "Ich würde die Welt bereisen", traduction: "Je voyagerais dans le monde." },
        { type: "oral", consigne: "Production orale.", prompt: "Répondez : « Was würdest du machen, wenn du reich wärst? »", attendus: ["würde", "ich"], modele: "Wenn ich reich wäre, würde ich reisen und ein Haus kaufen." }
      ]
    },
    {
      id: "a2t09",
      rp: {
        "scene": "Au bureau (téléphone)",
        "intro": "Tu passes un appel professionnel. Zika répond.",
        "fin": "Parfait ! Tu gères un appel professionnel.",
        "tours": [
          {
            "de": "Firma Meyer, guten Tag! Was kann ich für Sie tun?",
            "fr": "Société Meyer, bonjour ! Que puis-je pour vous ?",
            "options": [
              {
                "de": "Ich möchte Herrn Klein sprechen.",
                "ok": true
              },
              {
                "de": "Ich möchte einen Kaffee.",
                "hint": "Tu appelles une entreprise : « Ich möchte Herrn/Frau … sprechen »."
              }
            ],
            "bravo": "Excellent !"
          },
          {
            "de": "Herr Klein ist nicht da. Möchten Sie eine Nachricht hinterlassen?",
            "fr": "M. Klein est absent. Voulez-vous laisser un message ?",
            "options": [
              {
                "de": "Ja, er soll mich zurückrufen.",
                "ok": true
              },
              {
                "de": "Nein, guten Morgen!",
                "hint": "Réponds : « Ja, er soll mich zurückrufen » (qu'il me rappelle)."
              }
            ],
            "bravo": "Bien joué !"
          }
        ]
      },
      vocCours: [
        "Ce champ lexical professionnel couvre le **bureau**, le **téléphone** et la **prise de rendez-vous**. Vocabulaire clé : *der Termin*, *die Besprechung* (réunion), *die Unterlagen* (les documents), *erreichen* (joindre qqn), *zurückrufen* (rappeler).",
        "Soigne les **formules téléphoniques** professionnelles, au registre poli (*Sie*) : « *Könnten Sie mir sagen…?* », « *Ich verbinde Sie* » (je vous mets en relation), « *Kann ich eine Nachricht hinterlassen?* » (puis-je laisser un message ?).",
        "Astuce : ces échanges sont très **ritualisés** ; mémorise une dizaine de phrases-clés (saluer, demander, proposer un créneau, prendre congé) et tu géreras la plupart des appels et rendez-vous professionnels."
      ], numero: 9, titre: "Au bureau, au téléphone, les rendez-vous", titreDE: "Im Büro, am Telefon, Termine",
      theme: "Au bureau, au téléphone, prendre des rendez-vous", duree: 55,
      objectifs: ["Téléphoner professionnellement", "Prendre/décaler un rendez-vous", "Utiliser « dass » et « weil »"],
      grammairePoints: ["Subordonnées (dass, weil)", "Formules de politesse"],
      vocabulaire: [
        { de: "der Termin", fr: "le rendez-vous", ex: "Ich hätte gern einen Termin." },
        { de: "verbinden", fr: "mettre en relation", ex: "Ich verbinde Sie." },
        { de: "die Nachricht", fr: "le message", ex: "Kann ich eine Nachricht hinterlassen?" },
        { de: "zurückrufen", fr: "rappeler", ex: "Ich rufe Sie zurück." },
        { de: "erreichen", fr: "joindre", ex: "Wie kann ich Sie erreichen?" },
        { de: "die Besprechung", fr: "la réunion", ex: "Die Besprechung ist um zehn." },
        { de: "verschieben", fr: "décaler", ex: "Können wir den Termin verschieben?" },
        { de: "dringend", fr: "urgent", ex: "Es ist dringend." },
        { de: "Bescheid geben", fr: "tenir au courant", ex: "Ich gebe Ihnen Bescheid." },
        { de: "der Anrufbeantworter", fr: "le répondeur", ex: "Sprechen Sie auf den Anrufbeantworter." }
      ],
      grammaire: [
        { attention: "*dass* rejette le verbe conjugué **à la fin** : *Ich denke, dass es gut **ist***.", titre: "La subordonnée avec « dass » (que)", intro: "Comme « weil », « dass » envoie le verbe conjugué à la FIN.",
          tableau: { entetes: ["Phrase", "Sens"], lignes: [["Ich denke, dass es gut ist.", "Je pense que c'est bien."], ["Ich glaube, dass er kommt.", "Je crois qu'il vient."], ["Sie sagt, dass sie keine Zeit hat.", "Elle dit qu'elle n'a pas le temps."]] },
          note: "Après dass / weil / wenn → le verbe va à la fin (subordonnée)." }
      ],
      dialogue: {
        titre: "Am Telefon", lieu: "Büroanruf",
        lignes: [
          { loc: "Sekretärin", de: "Firma Klein, guten Tag!", fr: "Société Klein, bonjour !" },
          { loc: "Herr Vogel", de: "Guten Tag, ich hätte gern einen Termin mit Frau Bauer.", fr: "Bonjour, je voudrais un rendez-vous avec Mme Bauer." },
          { loc: "Sekretärin", de: "Frau Bauer ist gerade in einer Besprechung.", fr: "Mme Bauer est en réunion en ce moment." },
          { loc: "Herr Vogel", de: "Können Sie ihr sagen, dass es dringend ist?", fr: "Pouvez-vous lui dire que c'est urgent ?" },
          { loc: "Sekretärin", de: "Natürlich. Sie ruft Sie zurück.", fr: "Bien sûr. Elle vous rappelle." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum kann Frau Bauer nicht sprechen?", options: ["Sie ist in einer Besprechung", "Sie ist krank", "Sie ist im Urlaub"], correct: 0, explication: "« gerade in einer Besprechung »." },
        { type: "qcm", consigne: "Position du verbe après « dass ».", question: "Ich glaube, dass er morgen ___.", options: ["kommt", "kommt morgen", "kommen", "kommt nicht morgen"], correct: 0, explication: "dass → verbe à la fin : … dass er morgen kommt." },
        { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Sie sagt, dass sie keine Zeit {0}.", accepte: [["hat"]], indice: "haben à la fin" },
        { type: "ordre", consigne: "Construisez la subordonnée.", mots: ["dass", "es", "dringend", "ist"], correct: "dass es dringend ist", traduction: "que c'est urgent" },
        { type: "traduction", consigne: "Traduisez.", source: "Je voudrais un rendez-vous.", accepte: ["Ich hätte gern einen Termin", "Ich möchte einen Termin"], aide: "einen Termin" }
      ]
    }
  ]
};
