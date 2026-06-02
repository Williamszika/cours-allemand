/* =====================================================================
   MODULE B1.1 — Vie quotidienne, travail et médias
   Niveau B1 (CECRL). Approfondissement : temps du passé (dont
   plus-que-parfait), passif, propositions relatives, Konjunktiv II passé.
   Explications en français, contenu en allemand.
   ===================================================================== */
window.MODULE_B11 = {
  id: "b1-1",
  titre: "B1.1 — Quotidien, travail & médias",
  sousTitre: "Alltag, Beruf & Medien",
  niveau: "B1",
  description:
    "On gagne en nuance : gérer son temps, le monde du travail et ses codes, " +
    "la lecture, les souvenirs d'enfance, les médias, la publicité et les réclamations.",
  couleur: "#9333ea",
  lecons: [
    {
      id: "b1t01",
      rp: {
        "scene": "Freizeit",
        "intro": "Sprich mit Zika über deine Freizeit.",
        "fin": "Super! Du kannst über deine Freizeit sprechen.",
        "tours": [
          {
            "de": "Hast du am Wochenende Zeit?",
            "options": [
              {
                "de": "Ja, am Samstag habe ich Zeit.",
                "ok": true
              },
              {
                "de": "Ja, ich bin Zeit.",
                "hint": "« Ich bin Zeit » ist falsch. Sag « Ich habe Zeit »."
              }
            ],
            "bravo": "Sehr gut!"
          },
          {
            "de": "Was machst du gern in deiner Freizeit?",
            "options": [
              {
                "de": "Ich treffe mich gern mit Freunden.",
                "ok": true
              },
              {
                "de": "Ich arbeite im Büro.",
                "hint": "Das ist Arbeit. Für die Freizeit: « Ich … gern »."
              }
            ],
            "bravo": "Prima!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem Thema lernst du Wörter rund um die **Zeit** und die **Aktivitäten** im Alltag. Wichtig sind Ausdrücke wie *Zeit haben*, *keine Zeit haben*, *Zeit verbringen* (passer du temps) und *etwas unternehmen* (entreprendre). Du sprichst darüber, wie du deinen Tag und deine Woche organisierst.",
        "Achte auf den Unterschied zwischen **die Zeit** (le temps qui passe), **die Freizeit** (le temps libre) und **die Uhrzeit** (l'heure). Nützlich sind auch die Häufigkeitswörter: *täglich* (chaque jour), *wöchentlich*, *regelmäßig* (régulièrement), *gelegentlich* (à l'occasion).",
        "Tipp: Beschreibe deine eigene Woche mit diesen Wörtern und sage, **wann** und **wie oft** du etwas machst. Wenn du das Vokabular mit deinem eigenen Leben verbindest, bleibt es viel besser im Kopf."
      ], numero: 1, titre: "Temps et activités", titreDE: "Zeit und Aktivitäten",
      theme: "Temps et activités", duree: 55,
      objectifs: ["Organiser et raconter ses activités", "Situer deux actions passées dans le temps"],
      grammairePoints: ["Plus-que-parfait (Plusquamperfekt)", "nachdem / bevor"],
      exemplesPlus: [{"de":"Ich muss heute noch viele Aufgaben erledigen.","fr":"*erledigen* = etwas fertig machen."},{"de":"Beeil dich, wir haben nicht viel Zeit!","fr":"*sich beeilen* = schnell machen."},{"de":"Verschwende deine Zeit nicht mit dem Handy.","fr":"*Zeit verschwenden* = Zeit unnütz verbrauchen."},{"de":"Zuerst arbeite ich, anschließend mache ich Sport.","fr":"*anschließend* = danach."},{"de":"Ich kann nicht zwei Dinge gleichzeitig machen.","fr":"*gleichzeitig* = zur selben Zeit."}],
      vocabulaire: [
        { de: "die Aktivität", fr: "l'activité", ex: "Ich plane meine Aktivitäten." },
        { de: "der Zeitplan", fr: "l'emploi du temps", ex: "Mein Zeitplan ist voll." },
        { de: "erledigen", fr: "régler / faire (une tâche)", ex: "Ich habe alles erledigt." },
        { de: "sich beeilen", fr: "se dépêcher", ex: "Beeil dich!" },
        { de: "verschwenden", fr: "gaspiller", ex: "Verschwende keine Zeit." },
        { de: "gleichzeitig", fr: "en même temps", ex: "Ich kann nicht alles gleichzeitig machen." },
        { de: "vorher", fr: "avant (cela)", ex: "Vorher hatte ich gegessen." },
        { de: "anschließend", fr: "ensuite", ex: "Anschließend bin ich gegangen." }
      ],
      grammaire: [
        { attention: "Choix de l'auxiliaire comme au Perfekt : **hatte** (haben) ou **war** (sein) + participe — souvent avec *nachdem*.", titre: "Le plus-que-parfait (Plusquamperfekt)", intro: "Pour une action ANTÉRIEURE à une autre action passée. hatte/war + participe.",
          tableau: { entetes: ["Auxiliaire (prétérit)", "...", "Participe (fin)"], lignes: [["Ich hatte schon", "", "gegessen."], ["Er war schon", "", "gegangen."], ["Nachdem ich gegessen hatte,", "", "ging ich."]] },
          note: "Avec « nachdem » (après que) : subordonnée au plus-que-parfait, principale au prétérit/Perfekt." }
      ],
      dialogue: {
        titre: "Ein voller Tag", lieu: "Gespräch",
        lignes: [
          { loc: "Anna", de: "Du siehst gestresst aus.", fr: "Tu as l'air stressé." },
          { loc: "Tom", de: "Ja, ich hatte zu viel auf einmal geplant.", fr: "Oui, j'avais planifié trop de choses à la fois." },
          { loc: "Anna", de: "Was hast du gemacht?", fr: "Qu'as-tu fait ?" },
          { loc: "Tom", de: "Nachdem ich gearbeitet hatte, bin ich noch einkaufen gegangen.", fr: "Après avoir travaillé, je suis encore allé faire les courses." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum ist Tom gestresst?", options: ["Er hatte zu viel geplant", "Er hat geschlafen", "Er war im Urlaub"], correct: 0, explication: "« ich hatte zu viel auf einmal geplant »." },
        { type: "qcm", consigne: "Choisissez (plus-que-parfait).", question: "Nachdem ich gegessen ___, ging ich.", options: ["hatte", "habe", "war", "bin"], correct: 0, explication: "essen → hatte gegessen." },
        { type: "trou", consigne: "Complétez (war/hatte).", texte: "Als ich ankam, {0} der Zug schon abgefahren.", accepte: [["war"]], indice: "abfahren → sein → war abgefahren" },
        { type: "ordre", consigne: "Construisez la phrase.", mots: ["Ich", "hatte", "alles", "erledigt"], correct: "Ich hatte alles erledigt", traduction: "J'avais tout réglé." },
        { type: "oral", consigne: "Production orale.", prompt: "Racontez ce que vous aviez fait avant de venir aujourd'hui (plus-que-parfait).", attendus: ["hatte", "war"], modele: "Bevor ich kam, hatte ich gefrühstückt und meine Mails gelesen." }
      ]
    },
    {
      id: "b1t02",
      rp: {
        "scene": "Pünktlichkeit",
        "intro": "Zika spricht mit dir über Pünktlichkeit.",
        "fin": "Gut! Pünktlichkeit ist wichtig.",
        "tours": [
          {
            "de": "Warum kommst du immer zu spät?",
            "options": [
              {
                "de": "Tut mir leid, der Bus hatte Verspätung.",
                "ok": true
              },
              {
                "de": "Ich bin sehr pünktlich.",
                "hint": "Du bist zu spät: erkläre warum, z. B. « Der Bus hatte Verspätung »."
              }
            ],
            "bravo": "Genau!"
          },
          {
            "de": "Versuch bitte, das nächste Mal pünktlich zu sein.",
            "options": [
              {
                "de": "Ja, ich verspreche es.",
                "ok": true
              },
              {
                "de": "Nein, danke.",
                "hint": "Versprich, dich zu bessern: « Ja, ich verspreche es »."
              }
            ],
            "bravo": "Perfekt!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema behandelt die **Pünktlichkeit** – ein wichtiger Wert in der deutschen Kultur. Schlüsselwörter sind *pünktlich* (à l'heure), *zu spät* (en retard), *die Verspätung* (le retard), *sich verspäten* (être en retard), *rechtzeitig* (à temps).",
        "In Deutschland gilt: Wer einen Termin hat, kommt **pünktlich** oder sogar ein paar Minuten früher. Nützliche Sätze sind *Entschuldigung für die Verspätung* und *Ich komme gleich*. Achte auf das Gegensatzpaar *früh* (tôt) ↔ *spät* (tard).",
        "Tipp: Lerne die Wörter zusammen mit einer kleinen Situation (zum Beispiel: zu einem Termin kommen). So verbindest du Vokabular und Kultur und merkst dir beides leichter."
      ], numero: 2, titre: "La ponctualité", titreDE: "Pünktlichkeit",
      theme: "Ponctualité", duree: 50,
      objectifs: ["Parler de ponctualité et de retard", "Exprimer une habitude / une attente sociale"],
      grammairePoints: ["Indicateurs de temps", "pünktlich, rechtzeitig"],
      exemplesPlus: [{"de":"In Deutschland ist es wichtig, pünktlich zu sein.","fr":"*pünktlich* = genau zur richtigen Zeit."},{"de":"Komm rechtzeitig, damit wir den Zug nicht verpassen.","fr":"*rechtzeitig* = früh genug."},{"de":"Er ist sehr zuverlässig und kommt nie zu spät.","fr":"*zuverlässig* = man kann ihm vertrauen."},{"de":"Entschuldigung, ich habe mich verspätet.","fr":"*sich verspäten* = zu spät kommen."},{"de":"Pünktlichkeit ist bei uns eine wichtige Gewohnheit.","fr":"*die Gewohnheit* = etwas, das man immer macht."}],
      vocabulaire: [
        { de: "pünktlich", fr: "ponctuel", ex: "Sei bitte pünktlich!" },
        { de: "die Verspätung", fr: "le retard", ex: "Entschuldige die Verspätung." },
        { de: "rechtzeitig", fr: "à temps", ex: "Komm rechtzeitig an." },
        { de: "der Termin", fr: "le rendez-vous", ex: "Ich habe einen wichtigen Termin." },
        { de: "verpassen", fr: "rater", ex: "Ich habe den Bus verpasst." },
        { de: "zuverlässig", fr: "fiable", ex: "Er ist sehr zuverlässig." },
        { de: "die Gewohnheit", fr: "l'habitude", ex: "Pünktlichkeit ist eine gute Gewohnheit." },
        { de: "sich verspäten", fr: "être en retard", ex: "Ich habe mich verspätet." }
      ],
      grammaire: [
        { attention: "*seit* (depuis) + **présent** ; *vor* (il y a) + passé : *seit zwei Jahren* ≠ *vor zwei Jahren*.", titre: "Indicateurs de temps fréquents", intro: "Pour préciser quand et à quelle fréquence.",
          tableau: { entetes: ["Expression", "Sens"], lignes: [["rechtzeitig", "à temps"], ["pünktlich", "ponctuellement"], ["normalerweise", "normalement"], ["meistens", "la plupart du temps"], ["selten / kaum", "rarement / à peine"]] },
          note: "En Allemagne, la ponctualité est très valorisée : « 5 Minuten vorher » = arriver 5 min en avance." }
      ],
      dialogue: {
        titre: "Zu spät!", lieu: "Vor dem Meeting",
        lignes: [
          { loc: "Chef", de: "Sie kommen zehn Minuten zu spät.", fr: "Vous arrivez avec dix minutes de retard." },
          { loc: "Lena", de: "Es tut mir leid, ich habe den Bus verpasst.", fr: "Je suis désolée, j'ai raté le bus." },
          { loc: "Chef", de: "Bitte seien Sie das nächste Mal pünktlich.", fr: "Soyez ponctuelle la prochaine fois." },
          { loc: "Lena", de: "Natürlich, normalerweise bin ich sehr zuverlässig.", fr: "Bien sûr, normalement je suis très fiable." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum kam Lena zu spät?", options: ["Sie hat den Bus verpasst", "Sie hat verschlafen", "Sie war krank"], correct: 0, explication: "« ich habe den Bus verpasst »." },
        { type: "qcm", consigne: "Choisissez.", question: "Komm bitte ___ ! (à temps)", options: ["rechtzeitig", "spät", "selten", "kaum"], correct: 0, explication: "rechtzeitig = à temps." },
        { type: "trou", consigne: "Complétez.", texte: "Ich habe mich {0}. (être en retard, Perfekt)", accepte: [["verspätet"]], indice: "sich verspäten → habe mich verspätet" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "pünktlich", droite: "ponctuel" }, { gauche: "die Verspätung", droite: "le retard" }, { gauche: "zuverlässig", droite: "fiable" }, { gauche: "verpassen", droite: "rater" }] },
        { type: "traduction", consigne: "Traduisez.", source: "Sois ponctuel !", accepte: ["Sei pünktlich", "Sei pünktlich!"], aide: "impératif de sein" }
      ]
    },
    {
      id: "b1t03",
      rp: {
        "scene": "Im Museum",
        "intro": "Du besuchst ein Museum. Zika arbeitet dort.",
        "fin": "Schön! Du kannst ein Museum besuchen.",
        "tours": [
          {
            "de": "Guten Tag! Möchten Sie eine Führung machen?",
            "options": [
              {
                "de": "Ja, gern. Wann beginnt sie?",
                "ok": true
              },
              {
                "de": "Nein, ich bin ein Museum.",
                "hint": "Antworte sinnvoll: « Ja, gern » oder « Nein, danke »."
              }
            ],
            "bravo": "Toll!"
          },
          {
            "de": "Der Eintritt kostet 8 Euro.",
            "options": [
              {
                "de": "Hier, bitte. Zahle ich bar?",
                "ok": true
              },
              {
                "de": "Wie spät ist es?",
                "hint": "Du musst zahlen: « Hier, bitte »."
              }
            ],
            "bravo": "Bravo!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem Thema geht es um die **Freizeit** im **Museum**. Wichtige Wörter sind *das Museum*, *die Ausstellung* (l'exposition), *die Sammlung* (la collection), *der Eintritt* (l'entrée), *die Führung* (la visite guidée), *besichtigen* (visiter).",
        "Viele Wörter beschreiben, was man im Museum tut: *anschauen* (regarder), *besuchen*, *sich interessieren für* (s'intéresser à). Beachte: *der Eintritt* ist der Preis, den man zahlt, und *die Öffnungszeiten* sind die Stunden, in denen das Museum offen ist.",
        "Tipp: Stell dir einen echten Museumsbesuch vor und beschreibe ihn mit diesen Wörtern. Wenn du sagst, was dich interessiert, übst du das Vokabular und deine Meinung zugleich."
      ], numero: 3, titre: "Temps libre : les musées", titreDE: "Freizeit: Museen",
      theme: "Le temps libre: Musées", duree: 50,
      objectifs: ["Parler d'une visite culturelle", "Donner une appréciation"],
      grammairePoints: ["Propositions relatives", "Adjectifs"],
      exemplesPlus: [{"de":"Die Ausstellung im Museum war sehr beeindruckend.","fr":"*beeindruckend* = es macht großen Eindruck."},{"de":"Der Eintritt kostet zehn Euro.","fr":"*der Eintritt* = das Geld zum Hineingehen."},{"de":"Wir machen eine Führung durch die Sammlung.","fr":"*die Führung* = jemand zeigt und erklärt alles."},{"de":"Dieses Gemälde ist sehr berühmt.","fr":"*das Gemälde* = ein gemaltes Bild."},{"de":"Der Besuch lohnt sich wirklich.","fr":"*sich lohnen* = es ist die Mühe wert."}],
      vocabulaire: [
        { de: "das Museum", fr: "le musée", ex: "Das Museum ist berühmt." },
        { de: "die Ausstellung", fr: "l'exposition", ex: "Die Ausstellung ist sehenswert." },
        { de: "der Eintritt", fr: "l'entrée (prix)", ex: "Der Eintritt ist frei." },
        { de: "die Führung", fr: "la visite guidée", ex: "Wir machen eine Führung." },
        { de: "das Gemälde", fr: "le tableau", ex: "Dieses Gemälde ist beeindruckend." },
        { de: "die Sammlung", fr: "la collection", ex: "Eine große Sammlung." },
        { de: "beeindruckend", fr: "impressionnant", ex: "Die Kunst war beeindruckend." },
        { de: "sich lohnen", fr: "valoir la peine", ex: "Der Besuch lohnt sich." }
      ],
      grammaire: [
        { attention: "Le pronom relatif prend le **cas de sa fonction** dans la relative, et le verbe va **à la fin**.", titre: "Les propositions relatives", intro: "« der/die/das » relatifs reprennent un nom ; le verbe va à la fin de la relative.",
          tableau: { entetes: ["Antécédent", "Pronom relatif", "Exemple"], lignes: [["masculin", "der", "der Mann, der dort steht"], ["féminin", "die", "die Frau, die singt"], ["neutre", "das", "das Bild, das ich mag"], ["pluriel", "die", "die Leute, die warten"]] },
          schemas: [{ legende: "Relative : le verbe va à la fin.", mots: [{ m: "Das ist das Museum,", r: "principale", c: "objet" }, { m: "das", r: "pronom relatif", c: "conj" }, { m: "ich gestern", r: "sujet+…", c: "sujet" }, { m: "besucht habe", r: "verbe (fin)", c: "fin" }] }],
          note: "Le pronom relatif s'accorde en genre/nombre avec l'antécédent ; son cas dépend de sa fonction dans la relative." }
      ],
      dialogue: {
        titre: "Im Museum", lieu: "Kunstmuseum",
        lignes: [
          { loc: "Mia", de: "Das ist das Gemälde, das ich so liebe.", fr: "C'est le tableau que j'aime tant." },
          { loc: "Jan", de: "Wirklich beeindruckend. Gibt es eine Führung?", fr: "Vraiment impressionnant. Y a-t-il une visite guidée ?" },
          { loc: "Mia", de: "Ja, und der Eintritt ist heute frei.", fr: "Oui, et l'entrée est gratuite aujourd'hui." },
          { loc: "Jan", de: "Super, der Besuch lohnt sich!", fr: "Super, la visite vaut la peine !" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie ist der Eintritt heute?", options: ["Frei", "Teuer", "Geschlossen"], correct: 0, explication: "« der Eintritt ist heute frei »." },
        { type: "qcm", consigne: "Pronom relatif.", question: "Das ist die Frau, ___ singt.", options: ["die", "der", "das", "den"], correct: 0, explication: "die Frau (fém., sujet) → die." },
        { type: "trou", consigne: "Complétez le pronom relatif.", texte: "Das ist das Bild, {0} ich mag.", accepte: [["das"]], indice: "das Bild (neutre, COD) → das" },
        { type: "ordre", consigne: "Construisez la relative.", mots: ["der", "Mann", "der", "dort", "steht"], correct: "der Mann der dort steht", traduction: "l'homme qui est là" },
        { type: "traduction", consigne: "Traduisez.", source: "La visite vaut la peine.", accepte: ["Der Besuch lohnt sich"], aide: "sich lohnen" }
      ]
    },
    {
      id: "b1t04",
      rp: {
        "scene": "Bildende Kunst",
        "intro": "Ihr sprecht über ein Gemälde.",
        "fin": "Toll! Du kannst über Kunst sprechen.",
        "tours": [
          {
            "de": "Wie findest du dieses Bild?",
            "options": [
              {
                "de": "Es gefällt mir sehr. Es ist beeindruckend.",
                "ok": true
              },
              {
                "de": "Ich bin ein Bild.",
                "hint": "Sag deine Meinung: « Es gefällt mir » / « Es gefällt mir nicht »."
              }
            ],
            "bravo": "Richtig!"
          },
          {
            "de": "Magst du moderne oder klassische Kunst?",
            "options": [
              {
                "de": "Ich mag moderne Kunst lieber.",
                "ok": true
              },
              {
                "de": "Ich male ein Haus.",
                "hint": "Wähle: « moderne » oder « klassische » Kunst."
              }
            ],
            "bravo": "Sehr gut!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema erweitert die Freizeit um die **bildende Kunst**. Schlüsselwörter sind *die Kunst* (l'art), *das Gemälde / das Bild* (le tableau), *der Künstler / die Künstlerin*, *malen* (peindre), *zeichnen* (dessiner), *die Skulptur*.",
        "Mit Adjektiven beschreibst du Kunstwerke: *modern*, *klassisch*, *abstrakt*, *bekannt* (connu), *beeindruckend* (impressionnant). Beachte das Verb *gefallen* + Dativ, um deine Meinung zu sagen: « *Das Bild **gefällt mir*** » (ce tableau me plaît).",
        "Tipp: Such dir ein Kunstwerk, das du magst, und beschreibe es kurz auf Deutsch. Über Kunst zu sprechen heißt, Vokabular, Adjektive und Meinung gleichzeitig zu üben."
      ], numero: 4, titre: "Temps libre : les beaux-arts", titreDE: "Freizeit: Bildende Kunst",
      theme: "Le temps libre: Beaux-arts", duree: 50,
      objectifs: ["Décrire une œuvre d'art", "Exprimer goûts et opinions"],
      grammairePoints: ["Adjectifs (comparatif/superlatif)", "gefallen + datif"],
      exemplesPlus: [{"de":"Der Künstler drückt seine Gefühle mit Farben aus.","fr":"*ausdrücken* = zeigen, was man fühlt."},{"de":"Dieses Kunstwerk ist sehr abstrakt.","fr":"*abstrakt* = ohne klare, reale Formen."},{"de":"Im Park steht eine große Skulptur.","fr":"*die Skulptur* = ein Kunstwerk aus Stein oder Metall."},{"de":"Über Geschmack kann man nicht streiten.","fr":"*der Geschmack* = was jeder schön findet."},{"de":"Moderne Kunst gefällt nicht jedem.","fr":"*die Kunst* = Malerei, Musik, Skulptur usw."}],
      vocabulaire: [
        { de: "die Kunst", fr: "l'art", ex: "Ich interessiere mich für Kunst." },
        { de: "der Künstler", fr: "l'artiste", ex: "Ein berühmter Künstler." },
        { de: "das Kunstwerk", fr: "l'œuvre d'art", ex: "Ein modernes Kunstwerk." },
        { de: "die Farbe", fr: "la couleur", ex: "Die Farben sind kräftig." },
        { de: "die Skulptur", fr: "la sculpture", ex: "Eine Skulptur aus Stein." },
        { de: "abstrakt", fr: "abstrait", ex: "Abstrakte Kunst." },
        { de: "ausdrücken", fr: "exprimer", ex: "Kunst drückt Gefühle aus." },
        { de: "der Geschmack", fr: "le goût", ex: "Das ist Geschmackssache." }
      ],
      grammaire: [
        { attention: "Umlaut fréquent (*alt → älter*) ; irréguliers (*gut → besser*). « que » = **als**.", titre: "Comparatif et superlatif (révision B1)", intro: "Pour comparer des œuvres, des goûts.",
          tableau: { entetes: ["Adjectif", "Comparatif", "Superlatif"], lignes: [["schön", "schöner", "am schönsten"], ["gut", "besser", "am besten"], ["interessant", "interessanter", "am interessantesten"], ["hoch", "höher", "am höchsten"]] },
          note: "« gefallen » + datif : Das Bild gefällt mir (mieux) → … gefällt mir besser." }
      ],
      dialogue: {
        titre: "Geschmackssache", lieu: "Galerie",
        lignes: [
          { loc: "Eva", de: "Wie findest du diese Skulptur?", fr: "Comment trouves-tu cette sculpture ?" },
          { loc: "Ben", de: "Mir gefällt das Gemälde dort besser.", fr: "Je préfère le tableau là-bas." },
          { loc: "Eva", de: "Wirklich? Ich finde die Skulptur am interessantesten.", fr: "Vraiment ? Je trouve la sculpture la plus intéressante." },
          { loc: "Ben", de: "Na ja, das ist Geschmackssache.", fr: "Bon, c'est une affaire de goût." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was gefällt Ben besser?", options: ["Das Gemälde", "Die Skulptur", "Die Galerie"], correct: 0, explication: "« Mir gefällt das Gemälde besser »." },
        { type: "qcm", consigne: "Superlatif.", question: "Diese Kunst ist am ___. (interessant)", options: ["interessantesten", "interessanter", "interessant", "interessanteste"], correct: 0, explication: "am interessantesten." },
        { type: "trou", consigne: "Complétez (gefallen + datif).", texte: "Das Bild gefällt {0}. (à moi)", accepte: [["mir"]], indice: "gefallen + datif" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "die Kunst", droite: "l'art" }, { gauche: "der Künstler", droite: "l'artiste" }, { gauche: "die Farbe", droite: "la couleur" }, { gauche: "abstrakt", droite: "abstrait" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Dites quelle œuvre vous préférez et pourquoi (comparatif).", attendus: ["gefällt", "besser"], modele: "Mir gefällt das moderne Gemälde besser, weil die Farben kräftiger sind." }
      ]
    },
    {
      id: "b1t05",
      rp: {
        "scene": "Berufe",
        "intro": "Zika fragt nach deinem Beruf.",
        "fin": "Sehr gut! Du kannst über deinen Beruf sprechen.",
        "tours": [
          {
            "de": "Was sind Sie von Beruf?",
            "options": [
              {
                "de": "Ich bin Krankenpfleger.",
                "ok": true
              },
              {
                "de": "Ich bin ein Beruf.",
                "hint": "Nenne deinen Beruf ohne Artikel: « Ich bin Krankenpfleger »."
              }
            ],
            "bravo": "Prima!"
          },
          {
            "de": "Gefällt Ihnen Ihre Arbeit?",
            "options": [
              {
                "de": "Ja, die Arbeit macht mir Spaß.",
                "ok": true
              },
              {
                "de": "Ich bin müde.",
                "hint": "Antworte auf die Frage: « Ja, sie macht mir Spaß » / « Nein »."
              }
            ],
            "bravo": "Genau!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema vertieft die Welt der **Berufe**. Du lernst nicht nur Berufsnamen, sondern auch Wörter für Aufgaben, Arbeitsplatz und Karriere: *die Stelle* (le poste), *der Arbeitgeber* (l'employeur), *die Erfahrung* (l'expérience), *sich bewerben* (postuler).",
        "Denk an die weibliche Form auf **-in** (*der Arzt → die Ärztin*) und daran, dass man den Beruf **ohne Artikel** nennt: « *Ich bin Ingenieur* ». Nützlich ist auch *als* + Beruf: « *Ich arbeite **als** Krankenpfleger* ».",
        "Tipp: Beschreibe deinen eigenen Beruf (oder deinen Traumberuf): Was machst du? Wo arbeitest du? Welche Erfahrung hast du? So wird das Vokabular konkret und persönlich."
      ], numero: 5, titre: "Professions", titreDE: "Berufe",
      theme: "Professions", duree: 50,
      objectifs: ["Décrire un métier en détail", "Parler de compétences"],
      grammairePoints: ["Verbes + prépositions", "als / wie"],
      exemplesPlus: [{"de":"Ich bewerbe mich um eine Stelle als Manager.","fr":"*sich bewerben um* = um eine Arbeit fragen."},{"de":"Diese Arbeit bringt viel Verantwortung mit sich.","fr":"*die Verantwortung* = man muss für etwas sorgen."},{"de":"Sie arbeitet in Teilzeit, nur zwanzig Stunden.","fr":"*Teilzeit* = nicht den ganzen Tag arbeiten."},{"de":"Das Gehalt ist gut, aber die Arbeit ist hart.","fr":"*das Gehalt* = das Geld für die Arbeit pro Monat."},{"de":"Für diese Stelle braucht man viel Erfahrung.","fr":"*die Erfahrung* = was man schon gelernt und gemacht hat."}],
      vocabulaire: [
        { de: "die Stelle", fr: "le poste", ex: "Ich habe eine neue Stelle." },
        { de: "die Fähigkeit", fr: "la compétence", ex: "Er hat viele Fähigkeiten." },
        { de: "die Verantwortung", fr: "la responsabilité", ex: "Ich trage Verantwortung." },
        { de: "sich bewerben um", fr: "postuler pour", ex: "Ich bewerbe mich um die Stelle." },
        { de: "der Lohn / das Gehalt", fr: "le salaire", ex: "Das Gehalt ist gut." },
        { de: "die Teilzeit", fr: "le temps partiel", ex: "Ich arbeite Teilzeit." },
        { de: "die Erfahrung", fr: "l'expérience", ex: "Ich habe viel Erfahrung." },
        { de: "der Vertrag", fr: "le contrat", ex: "Ich unterschreibe den Vertrag." }
      ],
      grammaire: [
        { attention: "Reprends une **chose** par *da(r)-* (*darauf*) et interroge par *wo(r)-* (*Worauf?*).", titre: "Verbes + prépositions (travail)", intro: "Préposition fixe imposant son cas.",
          tableau: { entetes: ["Verbe + prép.", "Cas", "Exemple"], lignes: [["sich bewerben um", "accusatif", "Ich bewerbe mich um die Stelle."], ["sich freuen auf", "accusatif", "Ich freue mich auf den Job."], ["arbeiten an", "datif", "Ich arbeite an einem Projekt."], ["sich kümmern um", "accusatif", "Er kümmert sich um die Kunden."]] },
          note: "À apprendre verbe + préposition + cas ensemble." }
      ],
      dialogue: {
        titre: "Neue Stelle", lieu: "Im Büro",
        lignes: [
          { loc: "Tim", de: "Ich habe mich um eine neue Stelle beworben.", fr: "J'ai postulé pour un nouveau poste." },
          { loc: "Sara", de: "Toll! Mehr Verantwortung?", fr: "Super ! Plus de responsabilités ?" },
          { loc: "Tim", de: "Ja, und das Gehalt ist besser.", fr: "Oui, et le salaire est meilleur." },
          { loc: "Sara", de: "Ich drücke dir die Daumen!", fr: "Je croise les doigts pour toi !" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Worum hat sich Tim beworben?", options: ["Um eine neue Stelle", "Um Urlaub", "Um eine Wohnung"], correct: 0, explication: "« um eine neue Stelle beworben »." },
        { type: "qcm", consigne: "Préposition.", question: "Ich bewerbe mich ___ die Stelle.", options: ["um", "auf", "für", "an"], correct: 0, explication: "sich bewerben um + accusatif." },
        { type: "trou", consigne: "Complétez.", texte: "Ich arbeite {0} einem wichtigen Projekt. (préposition)", accepte: [["an"]], indice: "arbeiten an + datif" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "die Stelle", droite: "le poste" }, { gauche: "das Gehalt", droite: "le salaire" }, { gauche: "der Vertrag", droite: "le contrat" }, { gauche: "die Fähigkeit", droite: "la compétence" }] },
        { type: "traduction", consigne: "Traduisez.", source: "Je postule pour le poste.", accepte: ["Ich bewerbe mich um die Stelle"], aide: "sich bewerben um" }
      ]
    },
    {
      id: "b1t06",
      rp: {
        "scene": "Probleme am Arbeitsplatz",
        "intro": "Du hast ein Problem bei der Arbeit. Sprich mit Zika.",
        "fin": "Gut gelöst! Du kannst über Probleme sprechen.",
        "tours": [
          {
            "de": "Du siehst gestresst aus. Was ist los?",
            "options": [
              {
                "de": "Ich habe zu viele Überstunden.",
                "ok": true
              },
              {
                "de": "Mir geht es gut, danke.",
                "hint": "Nenne dein Problem: « Ich habe zu viele Überstunden »."
              }
            ],
            "bravo": "Perfekt!"
          },
          {
            "de": "Hast du schon mit dem Chef gesprochen?",
            "options": [
              {
                "de": "Nein, noch nicht. Ich habe Angst.",
                "ok": true
              },
              {
                "de": "Ja, ich bin der Chef.",
                "hint": "Antworte ehrlich: « Nein, noch nicht » oder « Ja »."
              }
            ],
            "bravo": "Toll!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem Thema sprichst du über **Probleme bei der Arbeit**. Wichtige Wörter sind *der Stress*, *der Konflikt* (le conflit), *die Überstunden* (les heures supplémentaires), *die Kündigung* (le licenciement), *sich beschweren* (se plaindre).",
        "Nützlich sind die Modalverben und *weil*, um Probleme zu erklären: « *Ich bin gestresst, **weil** ich zu viel Arbeit habe* ». Beachte den Unterschied zwischen *der Kollege* (le collègue) und *der Chef* (le patron, nicht der Koch!).",
        "Tipp: Beschreibe ein typisches Problem am Arbeitsplatz und schlage eine Lösung vor. Wenn du Probleme und Lösungen verbindest, übst du Vokabular und Argumentation zusammen."
      ], numero: 6, titre: "Problèmes au travail", titreDE: "Probleme am Arbeitsplatz",
      theme: "Problèmes au travail", duree: 55,
      objectifs: ["Exprimer un problème et une solution", "Nuancer avec le Konjunktiv II"],
      grammairePoints: ["Konjunktiv II (conseil/reproche)", "sollte / könnte"],
      exemplesPlus: [{"de":"Es gibt oft Konflikte zwischen den Kollegen.","fr":"*der Konflikt* = ein Streit oder Problem."},{"de":"Ich mache jeden Tag Überstunden.","fr":"*die Überstunde* = Arbeit nach der normalen Zeit."},{"de":"Der Druck bei der Arbeit ist sehr hoch.","fr":"*der Druck* = man muss viel und schnell arbeiten."},{"de":"Wir suchen zusammen eine Lösung.","fr":"*die Lösung* = die Antwort auf ein Problem."},{"de":"Wenn es so weitergeht, kündige ich.","fr":"*kündigen* = die Arbeit beenden."}],
      vocabulaire: [
        { de: "der Konflikt", fr: "le conflit", ex: "Es gibt einen Konflikt im Team." },
        { de: "der Kollege", fr: "le collègue", ex: "Mein Kollege ist schwierig." },
        { de: "die Überstunde", fr: "l'heure sup", ex: "Ich mache zu viele Überstunden." },
        { de: "sich beschweren", fr: "se plaindre", ex: "Ich beschwere mich beim Chef." },
        { de: "die Lösung", fr: "la solution", ex: "Wir suchen eine Lösung." },
        { de: "der Druck", fr: "la pression", ex: "Der Druck ist hoch." },
        { de: "kündigen", fr: "démissionner/licencier", ex: "Er hat gekündigt." },
        { de: "die Pause", fr: "la pause", ex: "Du solltest eine Pause machen." }
      ],
      grammaire: [
        { attention: "*Du **solltest**…* (conseil) ; reproche au passé : *Du hättest … **sollen***.", titre: "Konjunktiv II : conseil et reproche", intro: "sollte (devrait), könnte (pourrait), würde + infinitif.",
          tableau: { entetes: ["Forme", "Exemple", "Sens"], lignes: [["sollte", "Du solltest mit dem Chef reden.", "Tu devrais parler au chef."], ["könnte", "Du könntest eine Pause machen.", "Tu pourrais faire une pause."], ["An deiner Stelle würde…", "An deiner Stelle würde ich kündigen.", "À ta place, je démissionnerais."]] },
          note: "« An deiner Stelle würde ich… » = à ta place, je…rais (conseil très courant)." }
      ],
      dialogue: {
        titre: "Zu viel Stress", lieu: "In der Kaffeeküche",
        lignes: [
          { loc: "Nora", de: "Ich mache jeden Tag Überstunden.", fr: "Je fais des heures sup tous les jours." },
          { loc: "Lars", de: "Du solltest mit dem Chef reden.", fr: "Tu devrais parler au chef." },
          { loc: "Nora", de: "Meinst du? Es gibt schon genug Konflikte.", fr: "Tu crois ? Il y a déjà assez de conflits." },
          { loc: "Lars", de: "An deiner Stelle würde ich es trotzdem versuchen.", fr: "À ta place, j'essaierais quand même." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was rät Lars?", options: ["Mit dem Chef reden", "Kündigen", "Nichts tun"], correct: 0, explication: "« Du solltest mit dem Chef reden »." },
        { type: "qcm", consigne: "Conseil (Konjunktiv II).", question: "Du ___ eine Pause machen.", options: ["solltest", "sollst", "musst", "willst"], correct: 0, explication: "conseil → solltest." },
        { type: "trou", consigne: "Complétez (könnte).", texte: "Ihr {0} zusammen eine Lösung suchen.", accepte: [["könntet"]], indice: "ihr → könntet" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "der Konflikt", droite: "le conflit" }, { gauche: "der Druck", droite: "la pression" }, { gauche: "sich beschweren", droite: "se plaindre" }, { gauche: "kündigen", droite: "démissionner" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Donnez un conseil à un collègue stressé (Konjunktiv II).", attendus: ["solltest", "könntest"], modele: "Du solltest mit dem Chef sprechen und weniger Überstunden machen." }
      ]
    },
    {
      id: "b1t07",
      rp: {
        "scene": "Einen Termin vereinbaren",
        "intro": "Du vereinbarst einen Termin. Zika ist im Büro.",
        "fin": "Perfekt! Du kannst Termine vereinbaren.",
        "tours": [
          {
            "de": "Wann hätten Sie Zeit für ein Treffen?",
            "options": [
              {
                "de": "Am Dienstagnachmittag, wenn es geht.",
                "ok": true
              },
              {
                "de": "In Berlin.",
                "hint": "Zika fragt WANN: « Am Dienstag … »."
              }
            ],
            "bravo": "Bravo!"
          },
          {
            "de": "Passt Ihnen 15 Uhr?",
            "options": [
              {
                "de": "Ja, das passt mir gut.",
                "ok": true
              },
              {
                "de": "Ich bin 15 Jahre alt.",
                "hint": "Antworte: « Ja, das passt » oder « Nein, lieber später »."
              }
            ],
            "bravo": "Richtig!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema hilft dir, **berufliche Termine zu vereinbaren**. Schlüsselwörter sind *der Termin*, *vereinbaren* (convenir), *verschieben* (reporter), *absagen* (annuler), *bestätigen* (confirmer), *passen* (« *Passt Ihnen Montag?* »).",
        "Am Telefon und per E-Mail benutzt du oft die **höfliche Form** mit *Sie* und dem Konjunktiv II: « *Könnten wir einen Termin vereinbaren?* », « *Würde Ihnen Dienstag passen?* ». Diese Höflichkeit ist im Beruf sehr wichtig.",
        "Tipp: Übe einen kompletten Dialog: einen Termin vorschlagen, ihn verschieben und am Ende bestätigen. Solche festen Abläufe lernst du am besten als ganze Mini-Gespräche."
      ], numero: 7, titre: "Prendre des rendez-vous (pro)", titreDE: "Termine vereinbaren",
      theme: "Prendre des rendez-vous", duree: 50,
      objectifs: ["Fixer/décaler un rendez-vous professionnel", "Proposer poliment"],
      grammairePoints: ["Konjunktiv II (politesse)", "würde / könnte"],
      exemplesPlus: [{"de":"Können wir einen Termin vereinbaren?","fr":"*vereinbaren* = zusammen einen Termin festlegen."},{"de":"Leider muss ich die Besprechung verschieben.","fr":"*verschieben* = auf später legen."},{"de":"Passt Ihnen Montag um zehn Uhr?","fr":"*passen* = gut sein für jemanden."},{"de":"Ich bestätige den Termin per E-Mail.","fr":"*bestätigen* = sicher sagen, dass es gilt."},{"de":"Mein Vorschlag ist Dienstagnachmittag.","fr":"*der Vorschlag* = eine Idee, die man anbietet."}],
      vocabulaire: [
        { de: "vereinbaren", fr: "convenir", ex: "Wir vereinbaren einen Termin." },
        { de: "verschieben", fr: "décaler", ex: "Können wir verschieben?" },
        { de: "absagen", fr: "annuler", ex: "Ich muss leider absagen." },
        { de: "passen", fr: "convenir (à qqn)", ex: "Passt Ihnen Montag?" },
        { de: "der Vorschlag", fr: "la proposition", ex: "Ein guter Vorschlag." },
        { de: "frei", fr: "libre", ex: "Bin ich da frei?" },
        { de: "die Besprechung", fr: "la réunion", ex: "Die Besprechung dauert eine Stunde." },
        { de: "bestätigen", fr: "confirmer", ex: "Ich bestätige den Termin." }
      ],
      grammaire: [
        { attention: "*Könnten Sie…?*, *Würden Sie…?* : le Konjunktiv II adoucit la demande.", titre: "Demander poliment (Konjunktiv II)", intro: "Plus poli que le présent.",
          tableau: { entetes: ["Présent", "Poli (Konjunktiv II)"], lignes: [["Können Sie…?", "Könnten Sie…?"], ["Passt Ihnen…?", "Würde Ihnen … passen?"], ["Ich will…", "Ich würde gern…"], ["Haben Sie Zeit?", "Hätten Sie Zeit?"]] },
          note: "« Würde es Ihnen passen, wenn…? » = est-ce que ça vous conviendrait si… ?" }
      ],
      dialogue: {
        titre: "Am Telefon", lieu: "Büroanruf",
        lignes: [
          { loc: "Herr Vogel", de: "Könnten wir einen Termin vereinbaren?", fr: "Pourrions-nous convenir d'un rendez-vous ?" },
          { loc: "Sekretärin", de: "Gern. Würde Ihnen Dienstag passen?", fr: "Volontiers. Mardi vous conviendrait-il ?" },
          { loc: "Herr Vogel", de: "Leider nicht. Könnten wir verschieben?", fr: "Malheureusement non. Pourrions-nous décaler ?" },
          { loc: "Sekretärin", de: "Natürlich. Ich bestätige Mittwoch um 10 Uhr.", fr: "Bien sûr. Je confirme mercredi à 10h." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wann ist der Termin am Ende?", options: ["Mittwoch um 10 Uhr", "Dienstag", "Montag"], correct: 0, explication: "« Ich bestätige Mittwoch um 10 Uhr »." },
        { type: "qcm", consigne: "Forme polie.", question: "___ Sie Zeit am Freitag?", options: ["Hätten", "Haben", "Habt", "Hast"], correct: 0, explication: "poli → Hätten Sie…" },
        { type: "trou", consigne: "Complétez (poli).", texte: "{0} Sie mir helfen? (pouvoir, poli)", accepte: [["Könnten"]], indice: "Konjunktiv II de können" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "vereinbaren", droite: "convenir" }, { gauche: "verschieben", droite: "décaler" }, { gauche: "absagen", droite: "annuler" }, { gauche: "bestätigen", droite: "confirmer" }] },
        { type: "traduction", consigne: "Traduisez (poli).", source: "Pourriez-vous décaler le rendez-vous ?", accepte: ["Könnten Sie den Termin verschieben", "Könnten Sie den Termin verschieben?"], aide: "Könnten Sie…" }
      ]
    },
    {
      id: "b1t08",
      rp: {
        "scene": "Umgangsformen im Beruf",
        "intro": "Zika erklärt dir die guten Umgangsformen.",
        "fin": "Sehr gut! Du kennst die Umgangsformen.",
        "tours": [
          {
            "de": "Wie begrüßt man den Chef am besten?",
            "options": [
              {
                "de": "Guten Tag, Herr Müller!",
                "ok": true
              },
              {
                "de": "Hey, alles klar?",
                "hint": "Im Beruf ist man höflich: « Guten Tag, Herr/Frau … »."
              }
            ],
            "bravo": "Sehr gut!"
          },
          {
            "de": "Duzt oder siezt man Kollegen am ersten Tag?",
            "options": [
              {
                "de": "Man siezt sie zuerst.",
                "ok": true
              },
              {
                "de": "Man duzt alle sofort.",
                "hint": "Am Anfang ist « Sie » höflicher."
              }
            ],
            "bravo": "Prima!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem Thema geht es um die **guten Umgangsformen** (les bonnes manières) im Beruf. Wichtige Wörter sind *höflich* (poli), *der Respekt*, *die Begrüßung* (la salutation), *sich vorstellen* (se présenter), *die Anrede* (la formule d'appel).",
        "Sehr wichtig ist der Unterschied zwischen **du** und **Sie**. Im Beruf benutzt man fast immer *Sie* und den Nachnamen: « *Guten Tag, Herr Schmidt* ». Das *Du* bietet meist die ältere oder höhergestellte Person an.",
        "Tipp: Achte in deutschen Filmen oder Videos darauf, wie sich Menschen im Beruf begrüßen und anreden. Diese kulturellen Feinheiten lernst du am besten durch Beobachtung und Nachahmung."
      ], numero: 8, titre: "Les bonnes manières au travail", titreDE: "Umgangsformen im Beruf",
      theme: "Les bonnes manières dans le monde du travail", duree: 50,
      objectifs: ["Connaître les codes professionnels", "Exprimer ce qui se fait / ne se fait pas"],
      grammairePoints: ["man / es ist üblich", "sollen (norme)"],
      exemplesPlus: [{"de":"Im Büro siezt man die Kollegen meistens.","fr":"*siezen* = jemanden mit *Sie* anreden."},{"de":"Es ist üblich, morgens alle zu grüßen.","fr":"*üblich* = normal, man macht es oft."},{"de":"Man sollte die Kollegen respektieren.","fr":"*respektieren* = jemanden achten."},{"de":"Höfliche Umgangsformen sind wichtig.","fr":"*die Umgangsform* = wie man sich benimmt."},{"de":"Im Büro trägt man oft elegante Kleidung.","fr":"*die Kleidung* = was man anzieht."}],
      vocabulaire: [
        { de: "höflich", fr: "poli", ex: "Man sollte höflich sein." },
        { de: "die Umgangsform", fr: "les bonnes manières", ex: "Gute Umgangsformen sind wichtig." },
        { de: "siezen / duzen", fr: "vouvoyer / tutoyer", ex: "Im Büro siezt man sich." },
        { de: "grüßen", fr: "saluer", ex: "Man grüßt die Kollegen." },
        { de: "üblich", fr: "habituel / d'usage", ex: "Das ist hier üblich." },
        { de: "respektieren", fr: "respecter", ex: "Man muss die Regeln respektieren." },
        { de: "die Kleidung", fr: "la tenue", ex: "Die Kleidung ist formell." },
        { de: "der Respekt", fr: "le respect", ex: "Respekt ist wichtig." }
      ],
      grammaire: [
        { attention: "*man* = 3ᵉ pers. du singulier (*man **macht***) ; *es ist üblich, **zu** + infinitif*.", titre: "Exprimer une norme : man / es ist üblich", intro: "Pour ce qui se fait habituellement.",
          tableau: { entetes: ["Structure", "Exemple", "Sens"], lignes: [["man + verbe", "Man grüßt zuerst.", "On salue d'abord."], ["es ist üblich, zu…", "Es ist üblich, pünktlich zu sein.", "Il est d'usage d'être à l'heure."], ["man soll(te)", "Man sollte höflich sein.", "On devrait être poli."]] },
          note: "« zu + infinitif » après certaines expressions : Es ist wichtig, zu grüßen." }
      ],
      dialogue: {
        titre: "Der erste Arbeitstag", lieu: "Neuer Job",
        lignes: [
          { loc: "Neue", de: "Duzt oder siezt man sich hier?", fr: "On se tutoie ou se vouvoie ici ?" },
          { loc: "Kollege", de: "Im Büro siezt man sich meistens.", fr: "Au bureau, on se vouvoie le plus souvent." },
          { loc: "Neue", de: "Und die Kleidung?", fr: "Et la tenue ?" },
          { loc: "Kollege", de: "Eher formell. Und man grüßt immer.", fr: "Plutôt formelle. Et on salue toujours." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie spricht man sich im Büro an?", options: ["Man siezt sich", "Man duzt sich", "Egal"], correct: 0, explication: "« Im Büro siezt man sich meistens »." },
        { type: "qcm", consigne: "Choisissez.", question: "Es ist ___, pünktlich zu sein.", options: ["üblich", "üblicher", "unhöflich", "selten"], correct: 0, explication: "es ist üblich = il est d'usage." },
        { type: "trou", consigne: "Complétez (man + verbe).", texte: "Man {0} die Kollegen am Morgen. (saluer)", accepte: [["grüßt"]], indice: "man grüßt" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "höflich", droite: "poli" }, { gauche: "siezen", droite: "vouvoyer" }, { gauche: "üblich", droite: "d'usage" }, { gauche: "der Respekt", droite: "le respect" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Donnez deux règles de politesse au travail (man…).", attendus: ["man", "sollte"], modele: "Man sollte pünktlich sein und man grüßt immer die Kollegen." }
      ]
    },
    {
      id: "b1t09",
      rp: {
        "scene": "Bücher und Lesen",
        "intro": "Ihr sprecht über Bücher.",
        "fin": "Toll! Du kannst über Bücher sprechen.",
        "tours": [
          {
            "de": "Liest du gern? Was für Bücher magst du?",
            "options": [
              {
                "de": "Ja, ich lese gern Krimis.",
                "ok": true
              },
              {
                "de": "Ich bin ein Buch.",
                "hint": "Nenne eine Art Buch: « Ich lese gern Krimis / Romane »."
              }
            ],
            "bravo": "Genau!"
          },
          {
            "de": "Welches Buch hast du zuletzt gelesen?",
            "options": [
              {
                "de": "Ich habe einen spannenden Roman gelesen.",
                "ok": true
              },
              {
                "de": "Ich lese morgen.",
                "hint": "Es geht um die Vergangenheit: « Ich habe … gelesen »."
              }
            ],
            "bravo": "Perfekt!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema dreht sich um das **Lesen** und um **Bücher**. Schlüsselwörter sind *das Buch*, *der Roman* (le roman), *der Autor / die Autorin*, *die Geschichte* (l'histoire), *die Seite* (la page), *spannend* (passionnant), *langweilig* (ennuyeux).",
        "Mit dem Verb *lesen* (irregulär: *du liest*, *er liest*) und Adjektiven beschreibst du deine Lektüre. Beachte den Unterschied zwischen *die Bibliothek* (la bibliothèque, où l'on emprunte) und *die Buchhandlung* (la librairie, où l'on achète).",
        "Tipp: Sprich über ein Buch, das du gelesen hast: Worum geht es? Wie hat es dir gefallen? Über eigene Lektüre zu sprechen, ist eine ausgezeichnete Übung für Vokabular und Vergangenheit."
      ], numero: 9, titre: "La lecture", titreDE: "Lesen und Bücher",
      theme: "La lecture", duree: 50,
      objectifs: ["Parler de ses lectures", "Résumer / recommander un livre"],
      grammairePoints: ["Propositions relatives", "Genre littéraire"],
      exemplesPlus: [{"de":"Ich lese gerade einen spannenden Roman.","fr":"*spannend* = sehr interessant, man will weiterlesen."},{"de":"Die Handlung spielt in Berlin.","fr":"*die Handlung* = was in der Geschichte passiert."},{"de":"Die Hauptfigur ist ein junger Arzt.","fr":"*die Figur* = eine Person in der Geschichte."},{"de":"Ich kann dir dieses Buch sehr empfehlen.","fr":"*empfehlen* = sagen, dass etwas gut ist."},{"de":"Das Buch war leider sehr langweilig.","fr":"*langweilig* = nicht interessant."}],
      vocabulaire: [
        { de: "das Buch", fr: "le livre", ex: "Ich lese ein spannendes Buch." },
        { de: "der Roman", fr: "le roman", ex: "Ein historischer Roman." },
        { de: "der Autor", fr: "l'auteur", ex: "Wer ist der Autor?" },
        { de: "die Handlung", fr: "l'intrigue", ex: "Die Handlung ist spannend." },
        { de: "die Figur", fr: "le personnage", ex: "Die Hauptfigur ist sympathisch." },
        { de: "empfehlen", fr: "recommander", ex: "Ich empfehle dir dieses Buch." },
        { de: "spannend", fr: "captivant", ex: "Der Krimi ist spannend." },
        { de: "langweilig", fr: "ennuyeux", ex: "Das Ende war langweilig." }
      ],
      grammaire: [
        { attention: "La préposition se place **avant** le pronom relatif : *der Kollege, **mit dem** ich arbeite*.", titre: "Relatives avec préposition (B1)", intro: "La préposition se place AVANT le pronom relatif.",
          tableau: { entetes: ["Exemple", "Sens"], lignes: [["das Buch, über das ich spreche", "le livre dont je parle"], ["der Autor, von dem ich lese", "l'auteur que je lis"], ["die Figur, mit der ich mitfühle", "le personnage avec qui je compatis"]] },
          note: "Préposition + pronom relatif accordé : über das, von dem, mit der…" }
      ],
      dialogue: {
        titre: "Buchtipp", lieu: "In der Bibliothek",
        lignes: [
          { loc: "Lea", de: "Kannst du mir ein Buch empfehlen?", fr: "Tu peux me recommander un livre ?" },
          { loc: "Tom", de: "Ja, der Roman, den ich gerade lese, ist super.", fr: "Oui, le roman que je lis en ce moment est super." },
          { loc: "Lea", de: "Worum geht es?", fr: "De quoi ça parle ?" },
          { loc: "Tom", de: "Um eine Figur, die in die Vergangenheit reist.", fr: "D'un personnage qui voyage dans le passé." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Worum geht es im Roman?", options: ["Eine Figur, die in die Vergangenheit reist", "Eine Liebesgeschichte", "Einen Krieg"], correct: 0, explication: "« eine Figur, die in die Vergangenheit reist »." },
        { type: "qcm", consigne: "Pronom relatif (COD).", question: "Der Roman, ___ ich lese, ist gut.", options: ["den", "der", "dem", "das"], correct: 0, explication: "der Roman, COD masc. → den." },
        { type: "trou", consigne: "Complétez (relative).", texte: "Das Buch, über {0} ich spreche, ist spannend.", accepte: [["das"]], indice: "über + das (neutre)" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "der Roman", droite: "le roman" }, { gauche: "die Handlung", droite: "l'intrigue" }, { gauche: "empfehlen", droite: "recommander" }, { gauche: "spannend", droite: "captivant" }] },
        { type: "traduction", consigne: "Traduisez.", source: "Je te recommande ce livre.", accepte: ["Ich empfehle dir dieses Buch"], aide: "empfehlen + datif" }
      ]
    },
    {
      id: "b1t10",
      rp: {
        "scene": "Kindheit",
        "intro": "Erzähl Zika von deiner Kindheit.",
        "fin": "Schön! Du kannst über früher erzählen.",
        "tours": [
          {
            "de": "Wo bist du aufgewachsen?",
            "options": [
              {
                "de": "Ich bin auf dem Land aufgewachsen.",
                "ok": true
              },
              {
                "de": "Ich wohne in der Stadt.",
                "hint": "Es geht um früher: « Ich bin … aufgewachsen »."
              }
            ],
            "bravo": "Toll!"
          },
          {
            "de": "Was hast du als Kind gern gemacht?",
            "options": [
              {
                "de": "Ich habe viel draußen gespielt.",
                "ok": true
              },
              {
                "de": "Ich spiele Fußball.",
                "hint": "Vergangenheit: « Ich habe … gespielt »."
              }
            ],
            "bravo": "Bravo!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem Thema erzählst du von deiner **Kindheit** und deiner **Vergangenheit**. Wichtige Wörter sind *die Kindheit*, *aufwachsen* (grandir), *sich erinnern an* (se souvenir de), *früher* (autrefois), *als Kind* (enfant).",
        "Hier brauchst du das **Präteritum** und das **Perfekt**. Besonders *war*, *hatte* und *als* (quand, dans le passé) sind nützlich: « ***Als** ich ein Kind war, **wohnte** ich auf dem Land* ». Achte auf *sich erinnern an* + Akkusativ.",
        "Tipp: Erzähle eine kurze Erinnerung aus deiner Kindheit. Persönliche Geschichten sind die beste Methode, um die Vergangenheitsformen und das passende Vokabular fest zu verankern."
      ], numero: 10, titre: "Passé et enfance", titreDE: "Vergangenheit und Kindheit",
      theme: "Passé et enfance", duree: 55,
      objectifs: ["Raconter des souvenirs d'enfance", "Utiliser le prétérit pour le récit"],
      grammairePoints: ["Prétérit (récit)", "als / wenn (passé)"],
      exemplesPlus: [{"de":"In meiner Kindheit war ich oft bei den Großeltern.","fr":"*die Kindheit* = die Zeit, als man ein Kind war."},{"de":"Ich bin auf dem Land aufgewachsen.","fr":"*aufwachsen* = als Kind groß werden."},{"de":"Ich erinnere mich gern an damals.","fr":"*sich erinnern an* = an Vergangenes denken."},{"de":"Früher hatten wir kein Handy.","fr":"*früher* = vor langer Zeit."},{"de":"Mein liebstes Spielzeug war ein Teddybär.","fr":"*das Spielzeug* = womit Kinder spielen."}],
      vocabulaire: [
        { de: "die Kindheit", fr: "l'enfance", ex: "Meine Kindheit war glücklich." },
        { de: "die Erinnerung", fr: "le souvenir", ex: "Ich habe schöne Erinnerungen." },
        { de: "früher", fr: "autrefois", ex: "Früher spielte ich draußen." },
        { de: "aufwachsen", fr: "grandir", ex: "Ich bin auf dem Land aufgewachsen." },
        { de: "der Nachbar", fr: "le voisin", ex: "Wir spielten mit den Nachbarn." },
        { de: "damals", fr: "à l'époque", ex: "Damals gab es kein Internet." },
        { de: "sich erinnern an", fr: "se souvenir de", ex: "Ich erinnere mich an die Schule." },
        { de: "das Spielzeug", fr: "le jouet", ex: "Mein Lieblingsspielzeug war ein Bär." }
      ],
      grammaire: [
        { attention: "**als** = une seule fois (passé) ; **wenn** = chaque fois / habitude.", titre: "« als » vs « wenn » au passé", intro: "« als » = une fois précise dans le passé ; « wenn » = chaque fois / répétition.",
          tableau: { entetes: ["Mot", "Usage", "Exemple"], lignes: [["als", "une fois (passé)", "Als ich klein war, …"], ["wenn", "chaque fois", "Immer wenn es regnete, …"], ["prétérit", "récit", "Ich spielte, ich ging, ich war"]] },
          note: "« Als » (subordonnée) envoie le verbe à la fin : « Als ich Kind war, … »." }
      ],
      dialogue: {
        titre: "Erinnerungen", lieu: "Beim Kaffee",
        lignes: [
          { loc: "Mia", de: "Wie war deine Kindheit?", fr: "Comment était ton enfance ?" },
          { loc: "Ben", de: "Schön. Als ich klein war, wohnten wir auf dem Land.", fr: "Belle. Quand j'étais petit, on habitait à la campagne." },
          { loc: "Mia", de: "Und was hast du gemacht?", fr: "Et que faisais-tu ?" },
          { loc: "Ben", de: "Immer wenn es schneite, baute ich einen Schneemann.", fr: "Chaque fois qu'il neigeait, je faisais un bonhomme de neige." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wo wohnte Ben als Kind?", options: ["Auf dem Land", "In der Stadt", "Am Meer"], correct: 0, explication: "« wohnten wir auf dem Land »." },
        { type: "qcm", consigne: "als ou wenn ?", question: "___ ich gestern ankam, regnete es.", options: ["Als", "Wenn", "Wann", "Ob"], correct: 0, explication: "une fois précise au passé → als." },
        { type: "trou", consigne: "Complétez (sich erinnern an).", texte: "Ich erinnere {0} an meine Kindheit.", accepte: [["mich"]], indice: "sich erinnern an" },
        { type: "ordre", consigne: "Construisez la subordonnée.", mots: ["Als", "ich", "klein", "war"], correct: "Als ich klein war", traduction: "Quand j'étais petit" },
        { type: "oral", consigne: "Production orale.", prompt: "Racontez un souvenir d'enfance (prétérit / als).", attendus: ["als", "war"], modele: "Als ich klein war, spielte ich jeden Tag mit meinen Nachbarn im Garten." }
      ]
    },
    {
      id: "b1t11",
      rp: {
        "scene": "Medien",
        "intro": "Ihr sprecht über Medien.",
        "fin": "Gut! Du kannst über Medien sprechen.",
        "tours": [
          {
            "de": "Woher bekommst du deine Nachrichten?",
            "options": [
              {
                "de": "Meistens aus dem Internet.",
                "ok": true
              },
              {
                "de": "Ich bin eine Zeitung.",
                "hint": "Nenne eine Quelle: « aus dem Internet », « aus der Zeitung »."
              }
            ],
            "bravo": "Richtig!"
          },
          {
            "de": "Schaust du oft fern?",
            "options": [
              {
                "de": "Nein, ich höre lieber Podcasts.",
                "ok": true
              },
              {
                "de": "Ja, ich lese ein Buch.",
                "hint": "Antworte zum Fernsehen: « Ja/Nein, ich … lieber »."
              }
            ],
            "bravo": "Sehr gut!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema behandelt die **Medien**. Schlüsselwörter sind *die Nachrichten* (les informations), *die Zeitung* (le journal), *das Fernsehen* (la télévision), *das Radio*, *die sozialen Medien* (les réseaux sociaux), *die Sendung* (l'émission).",
        "Viele Wörter sind **international** (*das Internet, das Video, der Podcast*), aber achte auf typisch deutsche Begriffe wie *die Sendung* (l'émission) und *der Sender* (la chaîne). Nützliche Verben: *informieren*, *berichten* (rapporter), *teilen* (partager).",
        "Tipp: Sag, welche Medien du nutzt und warum. Wenn du über deine eigenen Gewohnheiten sprichst, wird das abstrakte Medien-Vokabular sofort konkret und nützlich."
      ], numero: 11, titre: "Les médias", titreDE: "Medien",
      theme: "Médias", duree: 50,
      objectifs: ["Parler des médias et de leur usage", "Comprendre le passif"],
      grammairePoints: ["Le passif (Passiv)", "werden + participe"],
      exemplesPlus: [{"de":"Die Medien berichten über das Ereignis.","fr":"*berichten* = Informationen geben."},{"de":"Diese Sendung läuft jeden Abend.","fr":"*die Sendung* = ein Programm im TV oder Radio."},{"de":"Man sollte die Quelle einer Nachricht prüfen.","fr":"*die Quelle* = woher eine Information kommt."},{"de":"Die Zeitung hat den Artikel veröffentlicht.","fr":"*veröffentlichen* = öffentlich machen."},{"de":"Ich habe einen Beitrag online gelesen.","fr":"*der Beitrag* = ein Artikel oder Text."}],
      vocabulaire: [
        { de: "die Medien", fr: "les médias", ex: "Die Medien berichten darüber." },
        { de: "die Nachricht", fr: "l'information", ex: "Die Nachricht wurde gesendet." },
        { de: "senden", fr: "diffuser", ex: "Die Sendung wird live gesendet." },
        { de: "die Sendung", fr: "l'émission", ex: "Eine interessante Sendung." },
        { de: "berichten", fr: "rapporter", ex: "Man berichtet über das Ereignis." },
        { de: "die Quelle", fr: "la source", ex: "Eine zuverlässige Quelle." },
        { de: "veröffentlichen", fr: "publier", ex: "Der Artikel wurde veröffentlicht." },
        { de: "der Beitrag", fr: "l'article / la contribution", ex: "Ein guter Beitrag." }
      ],
      grammaire: [
        { attention: "**werden** + participe (à la fin) ; agent : *von + datif*. Au Perfekt passif : *werden → **worden***.", titre: "Le passif (Passiv)", intro: "werden (conjugué) + participe II (à la fin). On met en avant l'action, pas l'auteur.",
          tableau: { entetes: ["Temps", "Forme", "Exemple"], lignes: [["présent", "wird + participe", "Die Nachricht wird gesendet."], ["prétérit", "wurde + participe", "Der Artikel wurde veröffentlicht."], ["avec auteur", "von + datif", "… wurde von der Zeitung veröffentlicht."]] },
          schemas: [{ legende: "Passif présent : werden (2) + participe (fin).", mots: [{ m: "Die Nachricht", r: "sujet", c: "sujet" }, { m: "wird", r: "werden (2)", c: "verbe" }, { m: "live", r: "…", c: "objet" }, { m: "gesendet", r: "participe (fin)", c: "fin" }] }],
          note: "L'auteur (facultatif) est introduit par « von + datif »." }
      ],
      dialogue: {
        titre: "Über Nachrichten", lieu: "Diskussion",
        lignes: [
          { loc: "Jan", de: "Wo hast du das gelesen?", fr: "Où as-tu lu ça ?" },
          { loc: "Eva", de: "Der Artikel wurde gestern veröffentlicht.", fr: "L'article a été publié hier." },
          { loc: "Jan", de: "Ist die Quelle zuverlässig?", fr: "La source est fiable ?" },
          { loc: "Eva", de: "Ja, es wird von einer großen Zeitung berichtet.", fr: "Oui, c'est rapporté par un grand journal." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wann wurde der Artikel veröffentlicht?", options: ["Gestern", "Heute", "Letzte Woche"], correct: 0, explication: "« wurde gestern veröffentlicht »." },
        { type: "qcm", consigne: "Passif présent.", question: "Die Sendung ___ live gesendet.", options: ["wird", "ist", "hat", "wurde"], correct: 0, explication: "passif présent → wird + participe." },
        { type: "trou", consigne: "Complétez (passif prétérit).", texte: "Der Artikel {0} veröffentlicht. (werden, prétérit)", accepte: [["wurde"]], indice: "wurde + participe" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "die Medien", droite: "les médias" }, { gauche: "die Quelle", droite: "la source" }, { gauche: "senden", droite: "diffuser" }, { gauche: "veröffentlichen", droite: "publier" }] },
        { type: "traduction", consigne: "Traduisez (passif).", source: "L'information est diffusée.", accepte: ["Die Nachricht wird gesendet"], aide: "wird + participe" }
      ]
    },
    {
      id: "b1t12",
      rp: {
        "scene": "Werbung",
        "intro": "Ihr sprecht über Werbung.",
        "fin": "Prima! Du kannst über Werbung sprechen.",
        "tours": [
          {
            "de": "Was hältst du von Werbung im Internet?",
            "options": [
              {
                "de": "Ich finde sie oft nervig.",
                "ok": true
              },
              {
                "de": "Ich bin Werbung.",
                "hint": "Sag deine Meinung: « Ich finde sie nervig / nützlich »."
              }
            ],
            "bravo": "Prima!"
          },
          {
            "de": "Beeinflusst Werbung deine Einkäufe?",
            "options": [
              {
                "de": "Manchmal, aber nicht oft.",
                "ok": true
              },
              {
                "de": "Ja, ich gehe schlafen.",
                "hint": "Antworte: « Ja, manchmal » oder « Nein, fast nie »."
              }
            ],
            "bravo": "Genau!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem Thema geht es um die **Werbung** (la publicité). Schlüsselwörter sind *die Werbung*, *die Anzeige* (l'annonce), *das Plakat* (l'affiche), *werben für* (faire de la pub pour), *die Marke* (la marque), *die Zielgruppe* (le public cible).",
        "Du sprichst über die **Wirkung** (l'effet) von Werbung: *überzeugen* (convaincre), *beeinflussen* (influencer), *auffallen* (attirer l'attention). Beachte das Verb *werben für* + Akkusativ.",
        "Tipp: Beschreibe eine Werbung, die du kennst: Für welches Produkt? Wie wirkt sie? So verbindest du das Vokabular mit echten Beispielen und übst deine Meinung."
      ], numero: 12, titre: "Publicité : impact et histoire", titreDE: "Werbung: Wirkung und Geschichte",
      theme: "Publicité: Impact et histoire", duree: 50,
      objectifs: ["Parler de l'impact de la publicité", "Exprimer cause et conséquence"],
      grammairePoints: ["deshalb / weil", "Cause et conséquence"],
      exemplesPlus: [{"de":"Werbung beeinflusst, was wir kaufen.","fr":"*beeinflussen* = auf etwas wirken, etwas ändern."},{"de":"Diese Marke ist sehr bekannt.","fr":"*die Marke* = der Name eines Produkts."},{"de":"Der Slogan überzeugt viele Verbraucher.","fr":"*überzeugen* = jemanden sicher machen."},{"de":"Die Werbung hat eine starke Wirkung.","fr":"*die Wirkung* = was etwas bewirkt."},{"de":"Der Verbraucher entscheidet am Ende.","fr":"*der Verbraucher* = wer ein Produkt kauft."}],
      vocabulaire: [
        { de: "die Werbung", fr: "la publicité", ex: "Die Werbung ist überall." },
        { de: "die Wirkung", fr: "l'effet", ex: "Werbung hat eine starke Wirkung." },
        { de: "beeinflussen", fr: "influencer", ex: "Werbung beeinflusst uns." },
        { de: "die Marke", fr: "la marque", ex: "Eine bekannte Marke." },
        { de: "der Verbraucher", fr: "le consommateur", ex: "Der Verbraucher entscheidet." },
        { de: "überzeugen", fr: "convaincre", ex: "Die Werbung überzeugt mich nicht." },
        { de: "der Slogan", fr: "le slogan", ex: "Ein einprägsamer Slogan." },
        { de: "wirken", fr: "agir / faire effet", ex: "Werbung wirkt unbewusst." }
      ],
      grammaire: [
        { attention: "*weil* → verbe **à la fin** ; *deshalb* → verbe en **2ᵉ** position.", titre: "Cause et conséquence : weil / deshalb", intro: "« weil » (subordonnée, verbe à la fin) ; « deshalb » (principale, verbe en 2e).",
          tableau: { entetes: ["Connecteur", "Position du verbe", "Exemple"], lignes: [["weil", "à la fin", "…, weil sie überzeugt."], ["deshalb", "2e position", "Sie überzeugt, deshalb kaufe ich."], ["denn", "2e position", "Ich kaufe, denn es ist gut."]] },
          note: "deshalb / deswegen / darum = c'est pourquoi (le verbe suit immédiatement)." }
      ],
      dialogue: {
        titre: "Werbung wirkt", lieu: "Vor dem Fernseher",
        lignes: [
          { loc: "Lea", de: "Diese Werbung sehe ich ständig.", fr: "Cette pub, je la vois sans arrêt." },
          { loc: "Tom", de: "Genau, deshalb kennt jeder die Marke.", fr: "Exactement, c'est pourquoi tout le monde connaît la marque." },
          { loc: "Lea", de: "Beeinflusst dich Werbung?", fr: "La pub t'influence ?" },
          { loc: "Tom", de: "Manchmal, weil die Slogans einprägsam sind.", fr: "Parfois, parce que les slogans sont mémorables." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum kennt jeder die Marke?", options: ["Wegen der ständigen Werbung", "Wegen des Preises", "Wegen der Qualität"], correct: 0, explication: "« deshalb kennt jeder die Marke » (pub constante)." },
        { type: "qcm", consigne: "Choisissez.", question: "Die Werbung ist gut, ___ kaufe ich das Produkt.", options: ["deshalb", "weil", "obwohl", "dass"], correct: 0, explication: "conséquence → deshalb (verbe en 2e)." },
        { type: "trou", consigne: "Complétez (weil, verbe à la fin).", texte: "Ich kaufe es, weil es mich {0}. (convaincre)", accepte: [["überzeugt"]], indice: "weil → verbe à la fin" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "die Werbung", droite: "la publicité" }, { gauche: "die Marke", droite: "la marque" }, { gauche: "beeinflussen", droite: "influencer" }, { gauche: "der Verbraucher", droite: "le consommateur" }] },
        { type: "ordre", consigne: "Construisez la phrase (deshalb).", mots: ["Es", "ist", "gut,", "deshalb", "kaufe", "ich", "es"], correct: "Es ist gut, deshalb kaufe ich es", traduction: "C'est bon, c'est pourquoi je l'achète." }
      ]
    },
    {
      id: "b1t13",
      rp: {
        "scene": "Produkte beschreiben",
        "intro": "Du beschreibst ein Produkt.",
        "fin": "Sehr gut! Du kannst Produkte beschreiben.",
        "tours": [
          {
            "de": "Warum gefällt dir dieses Handy?",
            "options": [
              {
                "de": "Es ist praktisch und zuverlässig.",
                "ok": true
              },
              {
                "de": "Es ist ein Handy.",
                "hint": "Nenne Eigenschaften: « praktisch, zuverlässig, schnell »."
              }
            ],
            "bravo": "Perfekt!"
          },
          {
            "de": "Ist es nicht zu teuer?",
            "options": [
              {
                "de": "Nein, es ist ziemlich günstig.",
                "ok": true
              },
              {
                "de": "Ja, es ist ein Telefon.",
                "hint": "Antworte zum Preis: « Nein, es ist günstig » / « Ja, leider »."
              }
            ],
            "bravo": "Toll!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema liefert Wörter, um **Produkte** und ihre **Eigenschaften** zu beschreiben. Schlüsselwörter sind *das Produkt*, *die Qualität*, *die Eigenschaft* (la propriété), *praktisch*, *zuverlässig* (fiable), *langlebig* (durable), *günstig* (avantageux).",
        "Viele Eigenschaften sind **Adjektive**, die du steigern kannst (*gut → besser → am besten*). Beachte das Gegensatzpaar *günstig / teuer* und den Unterschied zu *billig*, das oft negativ klingt.",
        "Tipp: Beschreibe ein Produkt, das du gekauft hast, mit drei Eigenschaften. Wenn du Adjektive an echte Gegenstände bindest, lernst du sie schneller und genauer."
      ], numero: 13, titre: "Publicité : produits et propriétés", titreDE: "Produkte und Eigenschaften",
      theme: "Publicité: Les produits et leurs propriétés", duree: 50,
      objectifs: ["Décrire les qualités d'un produit", "Décliner l'adjectif épithète"],
      grammairePoints: ["Déclinaison de l'adjectif", "Comparatif (Werbesprache)"],
      exemplesPlus: [{"de":"Dieses Gerät ist praktisch und hochwertig.","fr":"*hochwertig* = von guter Qualität."},{"de":"Das Produkt ist günstig und umweltfreundlich.","fr":"*umweltfreundlich* = gut für die Natur."},{"de":"Auf das Gerät gibt es zwei Jahre Garantie.","fr":"*die Garantie* = kostenlose Reparatur bei Defekt."},{"de":"Die Schuhe sind sehr haltbar.","fr":"*haltbar* = sie halten lange."},{"de":"Eine wichtige Eigenschaft ist der Preis.","fr":"*die Eigenschaft* = ein Merkmal von etwas."}],
      vocabulaire: [
        { de: "die Eigenschaft", fr: "la propriété/qualité", ex: "Das Produkt hat gute Eigenschaften." },
        { de: "praktisch", fr: "pratique", ex: "Ein praktisches Gerät." },
        { de: "hochwertig", fr: "de haute qualité", ex: "Ein hochwertiges Material." },
        { de: "günstig", fr: "avantageux", ex: "Ein günstiger Preis." },
        { de: "umweltfreundlich", fr: "écologique", ex: "Eine umweltfreundliche Verpackung." },
        { de: "haltbar", fr: "durable / résistant", ex: "Das Produkt ist haltbar." },
        { de: "das Gerät", fr: "l'appareil", ex: "Ein modernes Gerät." },
        { de: "die Garantie", fr: "la garantie", ex: "Zwei Jahre Garantie." }
      ],
      grammaire: [
        { attention: "Après *ein*, l'adjectif porte la marque du genre (*ein **guter** Wein*) ; après *der*, c'est -e/-en.", titre: "L'adjectif épithète (déclinaison B1)", intro: "Après l'article indéfini, l'adjectif prend la marque du genre/cas.",
          tableau: { entetes: ["Cas / genre", "Exemple"], lignes: [["m. nominatif", "ein praktischer Stift"], ["m. accusatif", "einen praktischen Stift"], ["f. nom./acc.", "eine günstige Lampe"], ["n. nom./acc.", "ein hochwertiges Gerät"]] },
          note: "Au pluriel sans article : haltbare Produkte (-e). La langue publicitaire en abuse !" }
      ],
      dialogue: {
        titre: "Im Werbespot", lieu: "Produktvorstellung",
        lignes: [
          { loc: "Sprecher", de: "Unser neues, umweltfreundliches Gerät!", fr: "Notre nouvel appareil écologique !" },
          { loc: "Kundin", de: "Ist es haltbar?", fr: "Est-il résistant ?" },
          { loc: "Sprecher", de: "Ja, mit zwei Jahren Garantie und einem günstigen Preis.", fr: "Oui, avec deux ans de garantie et un prix avantageux." },
          { loc: "Kundin", de: "Klingt nach einem praktischen Produkt.", fr: "Ça a l'air d'un produit pratique." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Welche Eigenschaft hat das Gerät?", options: ["Umweltfreundlich", "Schwer", "Teuer"], correct: 0, explication: "« umweltfreundliches Gerät »." },
        { type: "qcm", consigne: "Déclinaison.", question: "Das ist ein ___ Gerät. (praktisch, neutre)", options: ["praktisches", "praktischer", "praktische", "praktisch"], correct: 0, explication: "ein + neutre → -es." },
        { type: "trou", consigne: "Complétez (günstig, m. nominatif).", texte: "Das ist ein {0} Preis.", accepte: [["günstiger"]], indice: "ein + masc. nom. → -er" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "praktisch", droite: "pratique" }, { gauche: "hochwertig", droite: "de haute qualité" }, { gauche: "haltbar", droite: "résistant" }, { gauche: "umweltfreundlich", droite: "écologique" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Vantez un produit avec 2 adjectifs déclinés (ein … Produkt).", attendus: ["ein", "produkt"], modele: "Das ist ein praktisches und umweltfreundliches Produkt mit einem günstigen Preis." }
      ]
    },
    {
      id: "b1t14",
      rp: {
        "scene": "Eine Reklamation",
        "intro": "Du reklamierst ein kaputtes Produkt. Zika ist im Geschäft.",
        "fin": "Gut gemacht! Du kannst dich beschweren.",
        "tours": [
          {
            "de": "Guten Tag, was kann ich für Sie tun?",
            "options": [
              {
                "de": "Dieses Gerät funktioniert nicht.",
                "ok": true
              },
              {
                "de": "Ich möchte einen Kaffee.",
                "hint": "Erkläre dein Problem: « Das Gerät funktioniert nicht »."
              }
            ],
            "bravo": "Bravo!"
          },
          {
            "de": "Möchten Sie es umtauschen oder das Geld zurück?",
            "options": [
              {
                "de": "Ich hätte gern mein Geld zurück.",
                "ok": true
              },
              {
                "de": "Ich bin kaputt.",
                "hint": "Wähle: « umtauschen » oder « Geld zurück »."
              }
            ],
            "bravo": "Richtig!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem Thema lernst du, eine **Reklamation** zu machen – also etwas zu beanstanden. Schlüsselwörter sind *die Reklamation*, *sich beschweren* (se plaindre), *kaputt* (cassé), *defekt*, *umtauschen* (échanger), *zurückgeben* (rendre), *die Garantie*.",
        "Nützliche Sätze sind höflich, aber bestimmt: « *Das Gerät funktioniert nicht* », « *Ich möchte es umtauschen* », « *Ich hätte gern mein Geld zurück* ». Der Konjunktiv II (*hätte gern*, *könnten Sie*) macht die Reklamation höflich.",
        "Tipp: Übe einen Reklamations-Dialog im Geschäft. Diese Situation ist sehr praktisch im Alltag, und feste Sätze helfen dir, ruhig und korrekt zu reagieren."
      ], numero: 14, titre: "Les réclamations", titreDE: "Reklamationen",
      theme: "Les réclamations", duree: 55,
      objectifs: ["Faire une réclamation", "Demander un remboursement / échange poliment"],
      grammairePoints: ["Konjunktiv II (politesse)", "weil / deshalb"],
      exemplesPlus: [{"de":"Das Gerät ist kaputt, ich möchte mich beschweren.","fr":"*sich beschweren* = sagen, dass etwas nicht gut ist."},{"de":"Kann ich das Produkt umtauschen?","fr":"*umtauschen* = gegen ein anderes wechseln."},{"de":"Ich möchte die Ware zurückgeben.","fr":"*zurückgeben* = zurückbringen."},{"de":"Ich bekomme eine Rückerstattung des Geldes.","fr":"*die Rückerstattung* = man bekommt das Geld zurück."},{"de":"Das Handy funktioniert nicht mehr.","fr":"*funktionieren* = richtig arbeiten."}],
      vocabulaire: [
        { de: "die Reklamation", fr: "la réclamation", ex: "Ich habe eine Reklamation." },
        { de: "sich beschweren über", fr: "se plaindre de", ex: "Ich beschwere mich über das Produkt." },
        { de: "kaputt", fr: "cassé", ex: "Das Gerät ist kaputt." },
        { de: "umtauschen", fr: "échanger", ex: "Kann ich es umtauschen?" },
        { de: "zurückgeben", fr: "rendre", ex: "Ich möchte es zurückgeben." },
        { de: "die Rückerstattung", fr: "le remboursement", ex: "Ich verlange eine Rückerstattung." },
        { de: "der Mangel", fr: "le défaut", ex: "Das Produkt hat einen Mangel." },
        { de: "funktionieren", fr: "fonctionner", ex: "Es funktioniert nicht." }
      ],
      grammaire: [
        { attention: "Exigence polie : *Ich **würde** Sie bitten…* — ferme mais courtois.", titre: "Réclamer poliment (Konjunktiv II)", intro: "Plus efficace et courtois.",
          tableau: { entetes: ["Direct", "Poli"], lignes: [["Ich will mein Geld zurück.", "Ich hätte gern mein Geld zurück."], ["Tauschen Sie das um!", "Könnten Sie das umtauschen?"], ["Das ist kaputt.", "Leider funktioniert das Gerät nicht."]] },
          note: "Structure type : « Ich möchte mich über … beschweren, weil … (verbe à la fin) »." }
      ],
      dialogue: {
        titre: "An der Servicetheke", lieu: "Im Geschäft",
        lignes: [
          { loc: "Kunde", de: "Ich möchte mich über dieses Gerät beschweren.", fr: "Je voudrais me plaindre de cet appareil." },
          { loc: "Verkäufer", de: "Was ist das Problem?", fr: "Quel est le problème ?" },
          { loc: "Kunde", de: "Es funktioniert nicht. Könnte ich es umtauschen?", fr: "Il ne marche pas. Pourrais-je l'échanger ?" },
          { loc: "Verkäufer", de: "Natürlich, oder Sie bekommen eine Rückerstattung.", fr: "Bien sûr, ou vous obtenez un remboursement." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was ist das Problem?", options: ["Das Gerät funktioniert nicht", "Es ist zu teuer", "Es ist zu groß"], correct: 0, explication: "« Es funktioniert nicht »." },
        { type: "qcm", consigne: "Poli.", question: "___ ich es umtauschen?", options: ["Könnte", "Kann", "Muss", "Will"], correct: 0, explication: "poli → Könnte ich…" },
        { type: "trou", consigne: "Complétez (sich beschweren über).", texte: "Ich beschwere mich {0} das Produkt.", accepte: [["über"]], indice: "sich beschweren über + accusatif" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "kaputt", droite: "cassé" }, { gauche: "umtauschen", droite: "échanger" }, { gauche: "die Rückerstattung", droite: "le remboursement" }, { gauche: "der Mangel", droite: "le défaut" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Faites une réclamation polie (produit cassé).", attendus: ["könnte", "funktioniert"], modele: "Leider funktioniert das Gerät nicht. Könnte ich es umtauschen oder mein Geld zurückbekommen?" }
      ]
    }
  ]
};
