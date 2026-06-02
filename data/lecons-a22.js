/* =====================================================================
   MODULE A2.2 — Le monde autour de nous (Reisen & Welt)
   Niveau A2. Voyages, pays, animaux, personnes, logement, alimentation,
   actualités, environnement, technologie.
   ===================================================================== */
window.MODULE_A22 = {
  id: "a2-2",
  titre: "A2.2 — Voyages & monde",
  sousTitre: "Reisen & Welt",
  niveau: "A2",
  description:
    "On s'ouvre au monde : vacances et voyages, pays, animaux, description des personnes, " +
    "habitat, alimentation saine, actualités, environnement et technologie.",
  couleur: "#15803d",
  lecons: [
    {
      id: "a2t10",
      rp: {
        "scene": "Les vacances",
        "intro": "Tu racontes tes vacances à Zika (au passé).",
        "fin": "Bravo ! Tu sais raconter tes vacances.",
        "tours": [
          {
            "de": "Wohin bist du in den Urlaub gefahren?",
            "fr": "Où es-tu parti en vacances ?",
            "options": [
              {
                "de": "Ich bin nach Italien gefahren.",
                "ok": true
              },
              {
                "de": "Ich fahre nach Italien.",
                "hint": "C'est au passé : « Ich BIN … gefahren »."
              }
            ],
            "bravo": "Super !"
          },
          {
            "de": "Wie war das Wetter?",
            "fr": "Comment était le temps ?",
            "options": [
              {
                "de": "Es war sonnig und warm.",
                "ok": true
              },
              {
                "de": "Es ist sonnig.",
                "hint": "Au passé : « Es WAR sonnig »."
              }
            ],
            "bravo": "Bravo !"
          }
        ]
      },
      vocCours: [
        "Ce vocabulaire concerne les **vacances** et les loisirs en voyage. Mots clés : *der Urlaub* (les congés), *die Ferien* (les vacances scolaires), *sich erholen* (se reposer), *der Strand* (la plage), *die Sehenswürdigkeit* (le site touristique), *die Unterkunft* (l'hébergement).",
        "Distingue *der Urlaub* (congés d'un travailleur) de *die Ferien* (vacances scolaires, toujours au pluriel). On dit *in den Urlaub fahren*. Le **Perfekt** domine quand on raconte ses vacances (« *Wir **sind** ans Meer **gefahren*** »).",
        "Astuce : raconte **tes dernières vacances** (où, avec qui, activités) au passé. Le vocabulaire des vacances, relié à un vrai souvenir, devient vivant et facile à mobiliser."
      ], numero: 1, titre: "Les vacances", titreDE: "Der Urlaub",
      theme: "Vacances", duree: 50,
      objectifs: ["Parler de ses vacances", "Raconter un séjour au passé"],
      grammairePoints: ["Perfekt (révision)", "Indicateurs de lieu"],
      vocabulaire: [
        { de: "der Urlaub", fr: "les vacances", ex: "Wir machen Urlaub am Meer." },
        { de: "das Meer", fr: "la mer", ex: "Das Meer ist warm." },
        { de: "der Strand", fr: "la plage", ex: "Wir lagen am Strand." },
        { de: "die Berge", fr: "la montagne", ex: "Im Sommer fahren wir in die Berge." },
        { de: "sich erholen", fr: "se reposer", ex: "Ich habe mich gut erholt." },
        { de: "die Unterkunft", fr: "l'hébergement", ex: "Die Unterkunft war günstig." },
        { de: "buchen", fr: "réserver", ex: "Wir haben ein Hotel gebucht." },
        { de: "die Sehenswürdigkeit", fr: "le site touristique", ex: "Wir haben Sehenswürdigkeiten besichtigt." },
        { de: "das Wetter", fr: "le temps", ex: "Das Wetter war schön." },
        { de: "die Postkarte", fr: "la carte postale", ex: "Ich schreibe eine Postkarte." }
      ],
      grammaire: [
        { attention: "*Wo?* (être) → datif ; *Wohin?* (aller) → accusatif ou *nach/zu*. *zu Hause* ≠ *nach Hause*.", titre: "Aller / être à un endroit", intro: "« in die Berge » (où l'on va, accusatif) vs « in den Bergen » (où l'on est, datif).",
          tableau: { entetes: ["Question", "Exemple", "Cas"], lignes: [["Wohin? (où ?)", "Ich fahre ans Meer.", "accusatif"], ["Wo? (où ?)", "Ich bin am Meer.", "datif"], ["Wohin?", "in die Berge", "accusatif"], ["Wo?", "in den Bergen", "datif"]] },
          note: "an + das = ans ; an + dem = am." }
      ],
      dialogue: {
        titre: "Nach dem Urlaub", lieu: "Im Büro",
        lignes: [
          { loc: "Anna", de: "Wie war dein Urlaub?", fr: "Comment étaient tes vacances ?" },
          { loc: "Paul", de: "Toll! Wir waren am Meer und haben uns erholt.", fr: "Super ! On était à la mer et on s'est reposés." },
          { loc: "Anna", de: "Habt ihr ein Hotel gebucht?", fr: "Vous avez réservé un hôtel ?" },
          { loc: "Paul", de: "Ja, die Unterkunft war günstig und schön.", fr: "Oui, l'hébergement était avantageux et joli." },
          { loc: "Anna", de: "Und das Wetter?", fr: "Et le temps ?" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wo war Paul im Urlaub?", options: ["Am Meer", "In den Bergen", "Zu Hause"], correct: 0, explication: "« Wir waren am Meer »." },
        { type: "qcm", consigne: "Choisissez (Wohin? → accusatif).", question: "Ich fahre ___ Berge.", options: ["in die", "in den", "an die", "im"], correct: 0, explication: "mouvement → in die Berge (accusatif)." },
        { type: "trou", consigne: "Complétez (Perfekt).", texte: "Wir {0} ein Hotel {1}. (buchen)", accepte: [["haben"], ["gebucht"]], indice: "auxiliaire + participe" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "der Strand", droite: "la plage" }, { gauche: "die Berge", droite: "la montagne" }, { gauche: "sich erholen", droite: "se reposer" }, { gauche: "buchen", droite: "réserver" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Racontez vos dernières vacances (où, avec qui).", attendus: ["ich war", "ich habe"], modele: "Ich war am Meer. Ich habe mich erholt und viel geschwommen." }
      ]
    },
    {
      id: "a2t11",
      rp: {
        "scene": "Les pays",
        "intro": "Vous parlez d'origines avec Zika.",
        "fin": "Bravo ! Pays, langues et nationalités, c'est acquis.",
        "tours": [
          {
            "de": "Aus welchem Land kommst du?",
            "fr": "De quel pays viens-tu ?",
            "options": [
              {
                "de": "Ich komme aus der Türkei.",
                "ok": true
              },
              {
                "de": "Ich komme aus Türkei.",
                "hint": "Avec « die Türkei » : « aus DER Türkei » (article !)."
              }
            ],
            "bravo": "Très bien !"
          },
          {
            "de": "Welche Sprache spricht man dort?",
            "fr": "Quelle langue parle-t-on là-bas ?",
            "options": [
              {
                "de": "Man spricht Türkisch.",
                "ok": true
              },
              {
                "de": "Ich bin Türke.",
                "hint": "Zika demande la LANGUE : « Man spricht … »."
              }
            ],
            "bravo": "Parfait !"
          }
        ]
      },
      vocCours: [
        "Ce thème approfondit **pays**, **nationalités** et **langues**. Tu enrichis la liste des pays (avec ou sans article : *die Schweiz, die Türkei, der Iran, die Niederlande* au pluriel) et les adjectifs de nationalité (*deutsch, türkisch, polnisch…*).",
        "Maîtrise le trio **woher / wo / wohin** : *aus* (origine : *aus der Türkei*), *in* + datif (lieu : *in der Schweiz*), *nach / in* + accusatif (destination). Les noms d'habitants se forment souvent en *-er* (*der Italiener*), féminin en *-erin*.",
        "Astuce : crée une **carte mentale** reliant chaque pays à sa langue, sa nationalité et un fait connu. Relier ton **propre pays d'origine** à ce vocabulaire le rend particulièrement parlant."
      ], numero: 2, titre: "Pays et nationalités", titreDE: "Länder und Nationalitäten",
      theme: "Pays et nationalités", duree: 45,
      objectifs: ["Nommer pays et nationalités", "Dire d'où l'on vient et où l'on va"],
      grammairePoints: ["Nationalités", "nach / in + pays"],
      vocabulaire: [
        { de: "das Land", fr: "le pays", ex: "Welches Land besuchst du?" },
        { de: "die Nationalität", fr: "la nationalité", ex: "Welche Nationalität hast du?" },
        { de: "Deutschland / deutsch", fr: "Allemagne / allemand", ex: "Er ist Deutscher." },
        { de: "Frankreich / französisch", fr: "France / français", ex: "Sie ist Französin." },
        { de: "die Grenze", fr: "la frontière", ex: "Wir überqueren die Grenze." },
        { de: "die Hauptstadt", fr: "la capitale", ex: "Berlin ist die Hauptstadt." },
        { de: "der Ausländer", fr: "l'étranger", ex: "Viele Ausländer leben hier." },
        { de: "die Sprache", fr: "la langue", ex: "Welche Sprache spricht man dort?" },
        { de: "der Kontinent", fr: "le continent", ex: "Europa ist ein Kontinent." },
        { de: "die Reise", fr: "le voyage", ex: "Eine Reise nach Japan." }
      ],
      grammaire: [
        { attention: "Pays **sans** article → *nach* (*nach Italien*) ; pays **avec** article → *in* + accusatif (*in die Schweiz*).", titre: "Pays : « nach » et « in »", intro: "La plupart des pays sont neutres et sans article.",
          tableau: { entetes: ["Cas", "Préposition", "Exemple"], lignes: [["aller (sans article)", "nach", "Ich fahre nach Italien."], ["venir", "aus", "Ich komme aus Spanien."], ["pays avec article", "in die / in der", "in die Schweiz / in der Türkei"], ["être dans", "in", "Ich lebe in Deutschland."]] },
          note: "Exceptions avec article : die Schweiz, die Türkei, die USA (pluriel) → in die USA / in den USA." }
      ],
      dialogue: {
        titre: "Reisepläne", lieu: "Gespräch",
        lignes: [
          { loc: "Mia", de: "Woher kommst du eigentlich?", fr: "D'où viens-tu en fait ?" },
          { loc: "Yuki", de: "Aus Japan. Aber ich lebe in Deutschland.", fr: "Du Japon. Mais je vis en Allemagne." },
          { loc: "Mia", de: "Und wohin fährst du im Sommer?", fr: "Et où vas-tu cet été ?" },
          { loc: "Yuki", de: "Nach Italien und dann in die Schweiz.", fr: "En Italie puis en Suisse." },
          { loc: "Mia", de: "Schöne Reise!", fr: "Bon voyage !" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Woher kommt Yuki?", options: ["Aus Japan", "Aus Italien", "Aus der Schweiz"], correct: 0, explication: "« Aus Japan »." },
        { type: "qcm", consigne: "Choisissez (pays sans article).", question: "Ich fliege ___ Spanien.", options: ["nach", "in die", "zu", "an"], correct: 0, explication: "pays neutre → nach." },
        { type: "trou", consigne: "Complétez (nach / in die).", texte: "Ich fahre {0} Frankreich und dann {1} Schweiz.", accepte: [["nach"], ["in die"]], indice: "Frankreich (sans article) / die Schweiz" },
        { type: "association", consigne: "Associez pays → nationalité.", paires: [{ gauche: "Deutschland", droite: "deutsch" }, { gauche: "Frankreich", droite: "französisch" }, { gauche: "Spanien", droite: "spanisch" }, { gauche: "Italien", droite: "italienisch" }] },
        { type: "traduction", consigne: "Traduisez.", source: "Je vais en Italie.", accepte: ["Ich fahre nach Italien", "Ich gehe nach Italien", "Ich fliege nach Italien"], aide: "nach + pays" }
      ]
    },
    {
      id: "a2t12",
      rp: {
        "scene": "Planifier un voyage",
        "intro": "Tu réserves un voyage. Zika t'aide.",
        "fin": "Parfait ! Tu sais planifier un voyage.",
        "tours": [
          {
            "de": "Wann möchten Sie abfahren?",
            "fr": "Quand voulez-vous partir ?",
            "options": [
              {
                "de": "Am Freitagmorgen.",
                "ok": true
              },
              {
                "de": "Nach Hamburg.",
                "hint": "Zika demande QUAND : « Am Freitag … »."
              }
            ],
            "bravo": "Génial !"
          },
          {
            "de": "Möchten Sie umsteigen oder direkt fahren?",
            "fr": "Voulez-vous une correspondance ou un trajet direct ?",
            "options": [
              {
                "de": "Direkt, bitte.",
                "ok": true
              },
              {
                "de": "Mit dem Auto.",
                "hint": "Réponds « direkt » ou « umsteigen » (changer de train)."
              }
            ],
            "bravo": "Excellent !"
          }
        ]
      },
      vocCours: [
        "Ce champ lexical sert à **organiser un voyage** : réservations, itinéraire, bagages. Mots clés : *buchen* (réserver), *der Flug* (le vol), *die Fahrkarte* (le billet), *umsteigen* (changer de train), *der Aufenthalt* (le séjour), *die Verspätung* (le retard).",
        "Beaucoup de verbes sont **séparables** : *abfahren* (partir), *ankommen* (arriver), *umsteigen* (changer), *mitnehmen* (emporter). Apprends-les avec leur particule. Les horaires utilisent *um* (heure) et *von… bis* (de… à).",
        "Astuce : planifie un **voyage imaginaire** étape par étape (réserver, partir, changer, arriver) en allemand. Suivre un scénario chronologique relie naturellement vocabulaire et verbes de déplacement."
      ], numero: 3, titre: "Planifier un voyage", titreDE: "Eine Reise planen",
      theme: "Planifier un voyage", duree: 50,
      objectifs: ["Organiser un voyage", "Acheter des billets, réserver"],
      grammairePoints: ["Futur avec « werden »", "Verbes + prépositions"],
      vocabulaire: [
        { de: "die Fahrkarte", fr: "le billet", ex: "Ich kaufe eine Fahrkarte." },
        { de: "der Flug", fr: "le vol", ex: "Der Flug ist um 10 Uhr." },
        { de: "umsteigen", fr: "changer (de transport)", ex: "Wir steigen in Köln um." },
        { de: "die Reservierung", fr: "la réservation", ex: "Ich habe eine Reservierung." },
        { de: "der Koffer", fr: "la valise", ex: "Mein Koffer ist schwer." },
        { de: "packen", fr: "faire les bagages", ex: "Ich packe heute Abend." },
        { de: "sich freuen auf", fr: "se réjouir de", ex: "Ich freue mich auf den Urlaub." },
        { de: "abfahren", fr: "partir", ex: "Der Zug fährt um 8 ab." },
        { de: "die Verspätung", fr: "le retard", ex: "Der Flug hat Verspätung." },
        { de: "der Reiseführer", fr: "le guide (livre)", ex: "Ich lese den Reiseführer." }
      ],
      grammaire: [
        { attention: "*werden* en 2ᵉ position + **infinitif à la fin** : *Ich **werde** dich **anrufen***.", titre: "Le futur avec « werden »", intro: "werden (conjugué) + infinitif à la fin. Pour un projet/une prévision.",
          tableau: { entetes: ["Pronom", "werden", "Exemple"], lignes: [["ich", "werde", "Ich werde reisen."], ["du", "wirst", "Du wirst sehen."], ["er/sie/es", "wird", "Er wird kommen."], ["wir", "werden", "Wir werden fliegen."], ["ihr", "werdet", "Ihr werdet warten."], ["sie/Sie", "werden", "Sie werden buchen."]] },
          note: "Souvent l'allemand utilise le présent + indicateur de temps : « Morgen fahre ich nach Rom »." }
      ],
      dialogue: {
        titre: "Am Bahnhof", lieu: "Fahrkartenschalter",
        lignes: [
          { loc: "Reisende", de: "Eine Fahrkarte nach Hamburg, bitte.", fr: "Un billet pour Hambourg, s'il vous plaît." },
          { loc: "Beamter", de: "Hin und zurück? Sie müssen in Hannover umsteigen.", fr: "Aller-retour ? Vous devez changer à Hanovre." },
          { loc: "Reisende", de: "Gut. Wann fährt der Zug ab?", fr: "Bien. Quand part le train ?" },
          { loc: "Beamter", de: "Um 9:15, Gleis 4. Er hat keine Verspätung.", fr: "À 9h15, voie 4. Il n'a pas de retard." },
          { loc: "Reisende", de: "Super, ich freue mich auf die Reise!", fr: "Super, j'ai hâte de voyager !" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wo muss die Reisende umsteigen?", options: ["In Hannover", "In Hamburg", "In Köln"], correct: 0, explication: "« in Hannover umsteigen »." },
        { type: "qcm", consigne: "Futur avec werden.", question: "Morgen ___ ich nach Rom fliegen.", options: ["werde", "wird", "wirst", "werden"], correct: 0, explication: "ich werde + infinitif." },
        { type: "trou", consigne: "Complétez (se réjouir de).", texte: "Ich freue {0} auf den Urlaub.", accepte: [["mich"]], indice: "sich freuen auf" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "der Flug", droite: "le vol" }, { gauche: "umsteigen", droite: "changer" }, { gauche: "packen", droite: "faire les bagages" }, { gauche: "die Verspätung", droite: "le retard" }] },
        { type: "ordre", consigne: "Construisez la phrase (futur).", mots: ["Ich", "werde", "nach", "Rom", "fliegen"], correct: "Ich werde nach Rom fliegen", traduction: "Je vais voler vers Rome." }
      ]
    },
    {
      id: "a2t13",
      rp: {
        "scene": "Au zoo",
        "intro": "Tu parles d'animaux avec Zika.",
        "fin": "Bravo ! Le vocabulaire des animaux est acquis.",
        "tours": [
          {
            "de": "Welches Tier magst du am liebsten?",
            "fr": "Quel animal préfères-tu ?",
            "options": [
              {
                "de": "Ich mag Hunde am liebsten.",
                "ok": true
              },
              {
                "de": "Ich mag Pizza.",
                "hint": "Zika demande un ANIMAL : « Ich mag … » (Hunde, Katzen)."
              }
            ],
            "bravo": "Bien joué !"
          },
          {
            "de": "Hast du ein Haustier?",
            "fr": "As-tu un animal de compagnie ?",
            "options": [
              {
                "de": "Ja, eine Katze.",
                "ok": true
              },
              {
                "de": "Ja, ein Auto.",
                "hint": "« Haustier » = animal de compagnie : « eine Katze, einen Hund »."
              }
            ],
            "bravo": "Super !"
          }
        ]
      },
      vocCours: [
        "Ce vocabulaire couvre les **animaux**, domestiques, de la ferme et **sauvages**. Mots clés : *das Tier*, *der Hund* (chien), *die Katze* (chat), *das Pferd* (cheval), *der Vogel* (oiseau), et côté sauvage *der Löwe* (lion), *die Schlange* (serpent), *der Bär* (ours).",
        "Apprends chaque animal **avec son article et son pluriel**, souvent irrégulier (*der Vogel → die Vögel*, *das Pferd → die Pferde*). Pour décrire, associe des adjectifs : *gefährlich* (dangereux), *wild* (sauvage), *zahm* (apprivoisé), *süß* (mignon).",
        "Astuce : classe les animaux par **catégorie** (compagnie, ferme, sauvages) — plus facile à mémoriser qu'une liste pêle-mêle. Pense aux animaux qui te sont familiers pour ancrer le vocabulaire."
      ], numero: 4, titre: "Animaux (et animaux dangereux)", titreDE: "Tiere und gefährliche Tiere",
      theme: "Animaux et animaux dangereux", duree: 45,
      objectifs: ["Nommer des animaux", "Décrire un animal (taille, danger)"],
      grammairePoints: ["Adjectifs (révision)", "können (capacité)"],
      vocabulaire: [
        { de: "das Tier", fr: "l'animal", ex: "Mein Lieblingstier ist der Hund." },
        { de: "der Hund", fr: "le chien", ex: "Der Hund bellt." },
        { de: "die Katze", fr: "le chat", ex: "Die Katze schläft." },
        { de: "der Vogel", fr: "l'oiseau", ex: "Der Vogel fliegt." },
        { de: "der Löwe", fr: "le lion", ex: "Der Löwe ist gefährlich." },
        { de: "die Schlange", fr: "le serpent", ex: "Die Schlange ist giftig." },
        { de: "der Hai", fr: "le requin", ex: "Der Hai ist im Meer." },
        { de: "gefährlich", fr: "dangereux", ex: "Bären sind gefährlich." },
        { de: "giftig", fr: "venimeux", ex: "Diese Spinne ist giftig." },
        { de: "wild", fr: "sauvage", ex: "Wilde Tiere im Wald." }
      ],
      grammaire: [
        { attention: "L'adjectif placé **après *sein*** est **invariable** (*Der Hund ist **groß***).", titre: "Décrire un animal", intro: "Adjectif attribut (invariable) après « sein » + verbes de capacité.",
          tableau: { entetes: ["Phrase", "Sens"], lignes: [["Der Hai ist gefährlich.", "Le requin est dangereux."], ["Die Schlange ist giftig.", "Le serpent est venimeux."], ["Der Vogel kann fliegen.", "L'oiseau sait voler."], ["Der Löwe kann schnell laufen.", "Le lion court vite."]] },
          note: "« können » exprime la capacité (peut/sait faire). L'adjectif après « ist » ne change pas." }
      ],
      dialogue: {
        titre: "Im Zoo", lieu: "Zoobesuch",
        lignes: [
          { loc: "Kind", de: "Mama, ist der Löwe gefährlich?", fr: "Maman, le lion est dangereux ?" },
          { loc: "Mutter", de: "Ja, Löwen sind wilde Tiere.", fr: "Oui, les lions sont des animaux sauvages." },
          { loc: "Kind", de: "Und die Schlange?", fr: "Et le serpent ?" },
          { loc: "Mutter", de: "Manche Schlangen sind giftig.", fr: "Certains serpents sont venimeux." },
          { loc: "Kind", de: "Der Vogel kann fliegen!", fr: "L'oiseau sait voler !" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie sind Löwen?", options: ["Wild und gefährlich", "Klein und ruhig", "Giftig"], correct: 0, explication: "« wilde Tiere », « gefährlich »." },
        { type: "qcm", consigne: "Choisissez.", question: "Der Vogel ___ fliegen.", options: ["kann", "muss", "will", "soll"], correct: 0, explication: "können = capacité." },
        { type: "association", consigne: "Associez l'animal.", paires: [{ gauche: "der Hund", droite: "le chien" }, { gauche: "die Schlange", droite: "le serpent" }, { gauche: "der Hai", droite: "le requin" }, { gauche: "der Vogel", droite: "l'oiseau" }] },
        { type: "trou", consigne: "Complétez.", texte: "Diese Spinne ist {0}. (venimeux)", accepte: [["giftig"]], indice: "giftig" },
        { type: "traduction", consigne: "Traduisez.", source: "Le requin est dangereux.", accepte: ["Der Hai ist gefährlich"], aide: "gefährlich" }
      ]
    },
    {
      id: "a2t14",
      rp: {
        "scene": "Décrire une personne",
        "intro": "Décris quelqu'un à Zika.",
        "fin": "Bravo ! Tu sais décrire une personne.",
        "tours": [
          {
            "de": "Wie sieht dein bester Freund aus?",
            "fr": "À quoi ressemble ton meilleur ami ?",
            "options": [
              {
                "de": "Er ist groß und schlank.",
                "ok": true
              },
              {
                "de": "Er ist nett und ehrlich.",
                "hint": "« aussehen » = l'apparence : « Er ist groß / schlank ». (Le caractère, c'est après.)"
              }
            ],
            "bravo": "Bravo !"
          },
          {
            "de": "Und wie ist sein Charakter?",
            "fr": "Et comment est son caractère ?",
            "options": [
              {
                "de": "Er ist freundlich und lustig.",
                "ok": true
              },
              {
                "de": "Er ist groß.",
                "hint": "Là c'est le CARACTÈRE : « freundlich, lustig, ehrgeizig »."
              }
            ],
            "bravo": "Très bien !"
          }
        ]
      },
      vocCours: [
        "Ce champ lexical permet de **décrire** quelqu'un physiquement et moralement. Vocabulaire clé : l'apparence (*groß* grand, *schlank* mince, *die Haare* les cheveux, *die Augen* les yeux) et le caractère (*nett* gentil, *freundlich* aimable, *ehrgeizig* ambitieux, *schüchtern* timide).",
        "L'**adjectif attribut** après *sein* est invariable (« *Er ist groß und freundlich* »), mais devant le nom il se décline (« *ein **netter** Mann* »). Apprends des **paires d'opposés** (*groß / klein*, *jung / alt*, *fleißig / faul*) : on les retient deux fois mieux ensemble.",
        "Astuce : décris **une personne que tu connais** (apparence + caractère). Associer chaque adjectif à un visage réel rend le vocabulaire concret et durable."
      ], numero: 5, titre: "Décrire les personnes", titreDE: "Personen beschreiben",
      theme: "Personnes", duree: 50,
      objectifs: ["Décrire l'apparence et le caractère", "Utiliser les adjectifs"],
      grammairePoints: ["Adjectifs", "Description physique/caractère"],
      vocabulaire: [
        { de: "groß / klein", fr: "grand / petit", ex: "Er ist groß." },
        { de: "die Haare", fr: "les cheveux", ex: "Sie hat blonde Haare." },
        { de: "die Augen", fr: "les yeux", ex: "Er hat blaue Augen." },
        { de: "schlank", fr: "mince", ex: "Sie ist schlank." },
        { de: "freundlich", fr: "aimable", ex: "Er ist sehr freundlich." },
        { de: "nett", fr: "gentil", ex: "Meine Kollegin ist nett." },
        { de: "ruhig", fr: "calme", ex: "Er ist ruhig." },
        { de: "lustig", fr: "drôle", ex: "Sie ist lustig." },
        { de: "tragen", fr: "porter", ex: "Er trägt eine Brille." },
        { de: "die Brille", fr: "les lunettes", ex: "Sie trägt eine Brille." }
      ],
      grammaire: [
        { attention: "**Devant** un nom, l'adjectif **se décline** (*ein **kleiner** Hund*), contrairement à *Der Hund ist klein*.", titre: "L'adjectif épithète (introduction)", intro: "Devant un nom, l'adjectif prend une terminaison. Cas simple après l'article indéfini.",
          tableau: { entetes: ["Genre", "Exemple (nominatif)", "Terminaison"], lignes: [["masculin", "ein großer Mann", "-er"], ["féminin", "eine nette Frau", "-e"], ["neutre", "ein kleines Kind", "-es"], ["pluriel", "blonde Haare", "-e"]] },
          note: "Après « sein » l'adjectif reste invariable (Er ist groß), mais DEVANT un nom il s'accorde (ein großer Mann)." }
      ],
      dialogue: {
        titre: "Wie sieht er aus?", lieu: "Am Telefon",
        lignes: [
          { loc: "Lea", de: "Wie sieht dein neuer Kollege aus?", fr: "À quoi ressemble ton nouveau collègue ?" },
          { loc: "Tom", de: "Er ist groß und hat blonde Haare.", fr: "Il est grand et a les cheveux blonds." },
          { loc: "Lea", de: "Und sein Charakter?", fr: "Et son caractère ?" },
          { loc: "Tom", de: "Sehr freundlich und lustig.", fr: "Très aimable et drôle." },
          { loc: "Lea", de: "Trägt er eine Brille?", fr: "Il porte des lunettes ?" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie ist der Kollege?", options: ["Freundlich und lustig", "Ruhig und klein", "Streng"], correct: 0, explication: "« Sehr freundlich und lustig »." },
        { type: "qcm", consigne: "Terminaison de l'adjectif.", question: "Sie hat ___ Haare. (blond)", options: ["blonde", "blonder", "blondes", "blond"], correct: 0, explication: "pluriel → blonde Haare." },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "groß", droite: "grand" }, { gauche: "schlank", droite: "mince" }, { gauche: "freundlich", droite: "aimable" }, { gauche: "lustig", droite: "drôle" }] },
        { type: "trou", consigne: "Complétez.", texte: "Er trägt {0} Brille. (une)", accepte: [["eine"]], indice: "die Brille (fém.)" },
        { type: "oral", consigne: "Production orale.", prompt: "Décrivez une personne (physique + caractère).", attendus: ["er ist", "sie ist", "hat"], modele: "Sie ist groß und schlank. Sie hat braune Haare und ist sehr freundlich." }
      ]
    },
    {
      id: "a2t15",
      rp: {
        "scene": "Le logement",
        "intro": "Tu décris ton logement à Zika.",
        "fin": "Parfait ! Tu sais décrire ton logement.",
        "tours": [
          {
            "de": "Wohnst du in einem Haus oder in einer Wohnung?",
            "fr": "Habites-tu une maison ou un appartement ?",
            "options": [
              {
                "de": "In einer Wohnung.",
                "ok": true
              },
              {
                "de": "Ich wohne gern.",
                "hint": "Réponds « in einem Haus » ou « in einer Wohnung »."
              }
            ],
            "bravo": "Parfait !"
          },
          {
            "de": "Hat die Wohnung einen Balkon?",
            "fr": "L'appartement a-t-il un balcon ?",
            "options": [
              {
                "de": "Ja, einen kleinen Balkon.",
                "ok": true
              },
              {
                "de": "Ja, ich bin glücklich.",
                "hint": "Réponds sur le balcon : « Ja, einen Balkon » ou « Nein »."
              }
            ],
            "bravo": "Génial !"
          }
        ]
      },
      vocCours: [
        "Ce vocabulaire approfondit le **logement** et le **cadre de vie** : types d'habitat, environnement. Mots clés : *die Wohnung* (appartement), *das Reihenhaus* (maison mitoyenne), *der Garten* (jardin), *der Stadtteil* (quartier), *die Miete* (le loyer), *mieten* (louer).",
        "Distingue *die Stadt* (la ville), *das Dorf* (le village) et *die Gegend* (le coin, la région). Le vocabulaire se combine avec les **prépositions de lieu** + datif (« *Ich wohne **im** Zentrum / **am** Stadtrand* », au centre / en périphérie).",
        "Astuce : décris **ton propre logement et ton quartier** (type, pièces, environnement, avantages). Ce vocabulaire, relié à ton cadre de vie réel, s'emploie dans d'innombrables conversations."
      ], numero: 6, titre: "Habiter : jardin, ville…", titreDE: "Wohnen: Garten, Stadt",
      theme: "Vivre: jardin, ville etc.", duree: 50,
      objectifs: ["Décrire son lieu de vie", "Comparer ville et campagne"],
      grammairePoints: ["Prépositions de lieu", "Comparatif"],
      vocabulaire: [
        { de: "die Stadt", fr: "la ville", ex: "Ich wohne in der Stadt." },
        { de: "das Dorf", fr: "le village", ex: "Mein Dorf ist klein." },
        { de: "auf dem Land", fr: "à la campagne", ex: "Wir leben auf dem Land." },
        { de: "der Garten", fr: "le jardin", ex: "Wir haben einen Garten." },
        { de: "die Wohnung", fr: "l'appartement", ex: "Die Wohnung ist hell." },
        { de: "der Nachbar", fr: "le voisin", ex: "Mein Nachbar ist nett." },
        { de: "die Miete", fr: "le loyer", ex: "Die Miete ist hoch." },
        { de: "ruhig", fr: "calme", ex: "Das Dorf ist ruhig." },
        { de: "die Umgebung", fr: "les environs", ex: "Die Umgebung ist grün." },
        { de: "umziehen", fr: "déménager", ex: "Wir ziehen bald um." }
      ],
      grammaire: [
        { attention: "*so … wie* = égalité (aussi… que) ; *-er … als* = supériorité (plus… que). Ne les mélange pas.", titre: "Ville ou campagne : comparer", intro: "Comparatif + als ; superlatif am …-sten.",
          tableau: { entetes: ["Phrase", "Sens"], lignes: [["Die Stadt ist lauter als das Dorf.", "La ville est plus bruyante que le village."], ["Auf dem Land ist es ruhiger.", "À la campagne c'est plus calme."], ["Die Miete ist in der Stadt am höchsten.", "Le loyer est le plus élevé en ville."]] },
          note: "« auf dem Land » (à la campagne) est une expression figée au datif." }
      ],
      dialogue: {
        titre: "Stadt oder Land?", lieu: "Diskussion",
        lignes: [
          { loc: "Eva", de: "Wohnst du gern in der Stadt?", fr: "Tu aimes vivre en ville ?" },
          { loc: "Ben", de: "Nein, auf dem Land ist es ruhiger.", fr: "Non, à la campagne c'est plus calme." },
          { loc: "Eva", de: "Aber die Stadt ist praktischer!", fr: "Mais la ville est plus pratique !" },
          { loc: "Ben", de: "Stimmt, aber die Miete ist dort höher.", fr: "C'est vrai, mais le loyer y est plus élevé." },
          { loc: "Eva", de: "Wir haben einen Garten – das ist toll.", fr: "Nous avons un jardin – c'est génial." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum mag Ben das Land?", options: ["Es ist ruhiger", "Es ist praktischer", "Die Miete ist höher"], correct: 0, explication: "« auf dem Land ist es ruhiger »." },
        { type: "qcm", consigne: "Comparatif.", question: "Auf dem Land ist es ___ als in der Stadt.", options: ["ruhiger", "ruhig", "am ruhigsten", "ruhige"], correct: 0, explication: "ruhig → ruhiger." },
        { type: "trou", consigne: "Complétez.", texte: "Wir wohnen {0} dem Land in einem {1}. (à la campagne / village)", accepte: [["auf"], ["Dorf"]], indice: "auf dem Land / das Dorf" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "der Garten", droite: "le jardin" }, { gauche: "die Miete", droite: "le loyer" }, { gauche: "der Nachbar", droite: "le voisin" }, { gauche: "umziehen", droite: "déménager" }] },
        { type: "traduction", consigne: "Traduisez.", source: "La ville est plus bruyante que le village.", accepte: ["Die Stadt ist lauter als das Dorf"], aide: "laut → lauter … als" }
      ]
    },
    {
      id: "a2t16",
      rp: {
        "scene": "Manger sainement",
        "intro": "Tu parles d'alimentation avec Zika.",
        "fin": "Bravo ! Tu sais parler d'alimentation.",
        "tours": [
          {
            "de": "Isst du viel Obst und Gemüse?",
            "fr": "Manges-tu beaucoup de fruits et légumes ?",
            "options": [
              {
                "de": "Ja, jeden Tag.",
                "ok": true
              },
              {
                "de": "Ja, ich trinke Kaffee.",
                "hint": "Zika parle de FRUITS/LÉGUMES : « Ja, jeden Tag » ou « Nein, leider nicht »."
              }
            ],
            "bravo": "Excellent !"
          },
          {
            "de": "Was isst du nicht so gern?",
            "fr": "Qu'est-ce que tu n'aimes pas trop manger ?",
            "options": [
              {
                "de": "Ich mag kein Fleisch.",
                "ok": true
              },
              {
                "de": "Ich esse gern.",
                "hint": "Dis ce que tu n'aimes PAS : « Ich mag kein/keine … »."
              }
            ],
            "bravo": "Bien joué !"
          }
        ]
      },
      vocCours: [
        "Ce champ lexical relie **alimentation** et **santé**. Mots clés : *gesund* (sain) / *ungesund*, *das Obst* (les fruits), *das Gemüse* (les légumes), *die Ernährung* (l'alimentation), *vegetarisch*, *die Vitamine*, *fettarm* (pauvre en graisses).",
        "Note les **noms collectifs** : *das Obst* et *das Gemüse* sont **singuliers** en allemand (pas de pluriel comme en français !). Apprends aussi *essen* (manger, irrégulier : *er isst*) et *sich ernähren* (se nourrir).",
        "Astuce : décris **ce que tu manges sainement** (ou voudrais manger). Classer les aliments en « sain / moins sain » crée des associations utiles et faciles à mémoriser."
      ], numero: 7, titre: "Alimentation saine", titreDE: "Gesunde Ernährung",
      theme: "Alimentation saine", duree: 50,
      objectifs: ["Parler d'alimentation et de santé", "Donner des conseils"],
      grammairePoints: ["sollen (conseil)", "Substantifs (pluriels)"],
      vocabulaire: [
        { de: "die Ernährung", fr: "l'alimentation", ex: "Gesunde Ernährung ist wichtig." },
        { de: "das Gemüse", fr: "les légumes", ex: "Iss mehr Gemüse!" },
        { de: "das Obst", fr: "les fruits", ex: "Obst ist gesund." },
        { de: "der Zucker", fr: "le sucre", ex: "Zu viel Zucker ist schlecht." },
        { de: "fett", fr: "gras", ex: "Das Essen ist zu fett." },
        { de: "gesund / ungesund", fr: "sain / malsain", ex: "Fast Food ist ungesund." },
        { de: "vermeiden", fr: "éviter", ex: "Man soll Zucker vermeiden." },
        { de: "die Mahlzeit", fr: "le repas", ex: "Drei Mahlzeiten am Tag." },
        { de: "ausgewogen", fr: "équilibré", ex: "Eine ausgewogene Ernährung." },
        { de: "abnehmen", fr: "maigrir", ex: "Ich möchte abnehmen." }
      ],
      grammaire: [
        { attention: "*man* se conjugue comme *er/sie/es* (3ᵉ sing.) : *man **soll***, *man **kann***.", titre: "Donner un conseil avec « sollen » et « man »", intro: "« man soll » = on devrait. Conseils généraux.",
          tableau: { entetes: ["Phrase", "Sens"], lignes: [["Man soll viel Wasser trinken.", "On devrait boire beaucoup d'eau."], ["Du sollst mehr Gemüse essen.", "Tu devrais manger plus de légumes."], ["Man soll Zucker vermeiden.", "On devrait éviter le sucre."]] },
          note: "« man » = on (sujet impersonnel, verbe à la 3e personne du singulier)." }
      ],
      dialogue: {
        titre: "Beim Ernährungsberater", lieu: "Beratung",
        lignes: [
          { loc: "Berater", de: "Sie sollten mehr Obst und Gemüse essen.", fr: "Vous devriez manger plus de fruits et légumes." },
          { loc: "Patient", de: "Und Zucker?", fr: "Et le sucre ?" },
          { loc: "Berater", de: "Zucker soll man vermeiden.", fr: "On devrait éviter le sucre." },
          { loc: "Patient", de: "Ist Fast Food schlecht?", fr: "Le fast-food est mauvais ?" },
          { loc: "Berater", de: "Ja, es ist zu fett und ungesund.", fr: "Oui, c'est trop gras et malsain." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was soll man vermeiden?", options: ["Zucker", "Gemüse", "Wasser"], correct: 0, explication: "« Zucker soll man vermeiden »." },
        { type: "qcm", consigne: "Choisissez.", question: "Man ___ viel Wasser trinken.", options: ["soll", "will", "darf nicht", "muss nicht"], correct: 0, explication: "conseil → man soll." },
        { type: "trou", consigne: "Complétez.", texte: "Du sollst mehr {0} und {1} essen. (légumes / fruits)", accepte: [["Gemüse"], ["Obst"]], indice: "das Gemüse / das Obst" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "gesund", droite: "sain" }, { gauche: "fett", droite: "gras" }, { gauche: "vermeiden", droite: "éviter" }, { gauche: "die Mahlzeit", droite: "le repas" }] },
        { type: "traduction", consigne: "Traduisez.", source: "On devrait manger plus de légumes.", accepte: ["Man soll mehr Gemüse essen", "Man sollte mehr Gemüse essen"], aide: "man soll … essen" }
      ]
    },
    {
      id: "a2t17",
      rp: {
        "scene": "Les actualités",
        "intro": "Tu discutes de l'actualité avec Zika.",
        "fin": "Bravo ! Tu sais parler de l'actualité.",
        "tours": [
          {
            "de": "Liest du oft Nachrichten?",
            "fr": "Lis-tu souvent les actualités ?",
            "options": [
              {
                "de": "Ja, jeden Morgen.",
                "ok": true
              },
              {
                "de": "Ja, ich lese ein Buch.",
                "hint": "Zika parle des NACHRICHTEN (infos) : « Ja, jeden Morgen » ou « Nein, selten »."
              }
            ],
            "bravo": "Super !"
          },
          {
            "de": "Welches Thema interessiert dich?",
            "fr": "Quel sujet t'intéresse ?",
            "options": [
              {
                "de": "Politik interessiert mich.",
                "ok": true
              },
              {
                "de": "Ich bin müde.",
                "hint": "Nomme un sujet : « Politik / Sport / Wirtschaft interessiert mich »."
              }
            ],
            "bravo": "Bravo !"
          }
        ]
      },
      vocCours: [
        "Ce thème ouvre sur les **médias** et l'**actualité** — un grand pas vers l'allemand authentique. Mots clés : *die Nachrichten* (les informations), *die Zeitung* (le journal), *der Bericht* (le reportage), *die Politik*, *die Wirtschaft* (l'économie), *das Ereignis* (l'événement).",
        "Le vocabulaire devient plus **abstrait** : repère les **noms en -ung** (*die Regierung* gouvernement, *die Meinung* opinion, *die Entwicklung* évolution), tous féminins. Beaucoup de mots sont **internationaux** (*die Demokratie, die Krise, das Interview*).",
        "Astuce : lis ou écoute de **vraies brèves** en allemand simple (« Nachrichten in einfacher Sprache ») et relève les mots de ce champ. Le vocabulaire de l'actualité s'acquiert surtout par une exposition régulière."
      ], numero: 8, titre: "Les actualités", titreDE: "Nachrichten",
      theme: "Actualités nationales et internationales", duree: 50,
      objectifs: ["Comprendre une info simple", "Donner son opinion"],
      grammairePoints: ["Subordonnée « dass »", "Opinion : ich finde, dass…"],
      vocabulaire: [
        { de: "die Nachrichten", fr: "les informations", ex: "Ich sehe die Nachrichten." },
        { de: "die Zeitung", fr: "le journal", ex: "Ich lese die Zeitung." },
        { de: "das Ereignis", fr: "l'événement", ex: "Ein wichtiges Ereignis." },
        { de: "die Wahl", fr: "l'élection", ex: "Die Wahl ist im Herbst." },
        { de: "die Regierung", fr: "le gouvernement", ex: "Die Regierung entscheidet." },
        { de: "die Meinung", fr: "l'opinion", ex: "Meiner Meinung nach…" },
        { de: "wichtig", fr: "important", ex: "Das ist sehr wichtig." },
        { de: "berichten", fr: "rapporter", ex: "Die Zeitung berichtet darüber." },
        { de: "passieren", fr: "se passer", ex: "Was ist passiert?" },
        { de: "die Welt", fr: "le monde", ex: "Nachrichten aus der Welt." }
      ],
      grammaire: [
        { attention: "Après *Ich finde/denke, dass…*, le verbe va **à la fin** de la subordonnée.", titre: "Donner son opinion avec « dass »", intro: "ich finde / glaube / denke, dass + verbe à la fin.",
          tableau: { entetes: ["Phrase", "Sens"], lignes: [["Ich finde, dass das wichtig ist.", "Je trouve que c'est important."], ["Ich glaube, dass er recht hat.", "Je crois qu'il a raison."], ["Meiner Meinung nach ist das gut.", "À mon avis, c'est bien."]] },
          note: "« Meiner Meinung nach » est suivi du verbe (2e position) : « Meiner Meinung nach IST das gut »." }
      ],
      dialogue: {
        titre: "Über die Nachrichten", lieu: "Beim Frühstück",
        lignes: [
          { loc: "Tim", de: "Hast du die Nachrichten gesehen?", fr: "Tu as vu les infos ?" },
          { loc: "Nora", de: "Ja, ich finde, dass das Thema wichtig ist.", fr: "Oui, je trouve que le sujet est important." },
          { loc: "Tim", de: "Was meinst du dazu?", fr: "Qu'en penses-tu ?" },
          { loc: "Nora", de: "Meiner Meinung nach muss die Regierung handeln.", fr: "À mon avis, le gouvernement doit agir." },
          { loc: "Tim", de: "Da hast du recht.", fr: "Tu as raison." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie findet Nora das Thema?", options: ["Wichtig", "Langweilig", "Unwichtig"], correct: 0, explication: "« dass das Thema wichtig ist »." },
        { type: "qcm", consigne: "Position du verbe après « dass ».", question: "Ich finde, dass das ___.", options: ["wichtig ist", "ist wichtig", "wichtig sein", "ist"], correct: 0, explication: "dass → verbe à la fin." },
        { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Ich glaube, dass er recht {0}.", accepte: [["hat"]], indice: "haben à la fin" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "die Zeitung", droite: "le journal" }, { gauche: "die Wahl", droite: "l'élection" }, { gauche: "die Meinung", droite: "l'opinion" }, { gauche: "die Regierung", droite: "le gouvernement" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Donnez votre avis : « Ich finde, dass … »", attendus: ["ich finde", "dass"], modele: "Ich finde, dass Umweltschutz sehr wichtig ist." }
      ]
    },
    {
      id: "a2t18",
      rp: {
        "scene": "L'environnement",
        "intro": "Tu parles d'écologie avec Zika.",
        "fin": "Bravo ! Tu sais parler d'écologie.",
        "tours": [
          {
            "de": "Was machst du für die Umwelt?",
            "fr": "Que fais-tu pour l'environnement ?",
            "options": [
              {
                "de": "Ich trenne den Müll.",
                "ok": true
              },
              {
                "de": "Ich fahre gern Auto.",
                "hint": "Une action ÉCOLO : « Ich trenne den Müll » (je trie), « Ich fahre Rad »."
              }
            ],
            "bravo": "Très bien !"
          },
          {
            "de": "Fährst du oft mit dem Auto?",
            "fr": "Conduis-tu souvent ?",
            "options": [
              {
                "de": "Nein, meistens mit dem Rad.",
                "ok": true
              },
              {
                "de": "Ja, das ist gut für die Umwelt.",
                "hint": "La voiture pollue : plutôt « Nein, meistens mit dem Rad »."
              }
            ],
            "bravo": "Parfait !"
          }
        ]
      },
      vocCours: [
        "Ce champ lexical actuel concerne l'**environnement** et l'**écologie**. Mots clés : *die Umwelt*, *der Umweltschutz* (la protection de l'environnement), *der Müll* (les déchets), *trennen* (trier), *recyceln*, *die Energie*, *der Klimawandel* (le changement climatique).",
        "Beaucoup de termes sont des **noms composés** transparents : *Umwelt + Schutz = Umweltschutz*, *Klima + Wandel = Klimawandel*, *Müll + Trennung = Mülltrennung*. Savoir les **décomposer** aide à comprendre et à former soi-même des mots longs.",
        "Astuce : relie ce vocabulaire à des **gestes concrets** (trier, économiser l'énergie, prendre le vélo) et donne ton avis (« *Ich finde Umweltschutz wichtig* »). Le vocabulaire engagé se retient mieux quand on l'utilise pour s'exprimer."
      ], numero: 9, titre: "L'environnement", titreDE: "Die Umwelt",
      theme: "Thème: Environnement", duree: 50,
      objectifs: ["Parler d'écologie", "Dire ce qu'on fait pour la planète"],
      grammairePoints: ["Verbes + prépositions", "Conseils (sollte)"],
      vocabulaire: [
        { de: "die Umwelt", fr: "l'environnement", ex: "Wir müssen die Umwelt schützen." },
        { de: "der Müll", fr: "les déchets", ex: "Trenne den Müll!" },
        { de: "trennen", fr: "trier", ex: "Wir trennen den Müll." },
        { de: "recyceln", fr: "recycler", ex: "Man kann Papier recyceln." },
        { de: "der Klimawandel", fr: "le changement climatique", ex: "Der Klimawandel ist real." },
        { de: "die Energie", fr: "l'énergie", ex: "Wir sparen Energie." },
        { de: "schützen", fr: "protéger", ex: "Schützt die Natur!" },
        { de: "vermeiden", fr: "éviter", ex: "Plastik vermeiden." },
        { de: "öffentliche Verkehrsmittel", fr: "les transports en commun", ex: "Nimm öffentliche Verkehrsmittel." },
        { de: "die Natur", fr: "la nature", ex: "Die Natur ist schön." }
      ],
      grammaire: [
        { attention: "La préposition est **fixe** et impose le **cas** : *warten **auf** + Akk.*, *denken **an** + Akk.*", titre: "Verbes + prépositions fixes", intro: "Certains verbes vont toujours avec une préposition donnée.",
          tableau: { entetes: ["Verbe + prép.", "Sens", "Exemple"], lignes: [["achten auf (+ acc.)", "faire attention à", "Ich achte auf die Umwelt."], ["sich kümmern um", "s'occuper de", "Wir kümmern uns um die Natur."], ["denken an (+ acc.)", "penser à", "Denk an die Zukunft!"], ["sprechen über", "parler de", "Wir sprechen über den Klimawandel."]] },
          note: "La préposition est fixe et impose son cas (souvent l'accusatif ici)." }
      ],
      dialogue: {
        titre: "Umweltschutz", lieu: "Im Kurs",
        lignes: [
          { loc: "Lehrer", de: "Was machen Sie für die Umwelt?", fr: "Que faites-vous pour l'environnement ?" },
          { loc: "Sara", de: "Ich trenne den Müll und recycle Papier.", fr: "Je trie les déchets et recycle le papier." },
          { loc: "Lehrer", de: "Sehr gut. Und beim Transport?", fr: "Très bien. Et pour les transports ?" },
          { loc: "Sara", de: "Ich nehme öffentliche Verkehrsmittel.", fr: "Je prends les transports en commun." },
          { loc: "Lehrer", de: "Wir sollten alle Plastik vermeiden.", fr: "Nous devrions tous éviter le plastique." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was macht Sara für die Umwelt?", options: ["Müll trennen und recyceln", "Nichts", "Auto fahren"], correct: 0, explication: "« Ich trenne den Müll und recycle Papier »." },
        { type: "qcm", consigne: "Préposition fixe.", question: "Ich achte ___ die Umwelt.", options: ["auf", "an", "über", "für"], correct: 0, explication: "achten auf + accusatif." },
        { type: "trou", consigne: "Complétez.", texte: "Wir müssen die Umwelt {0}. (protéger)", accepte: [["schützen"]], indice: "schützen" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "der Müll", droite: "les déchets" }, { gauche: "trennen", droite: "trier" }, { gauche: "recyceln", droite: "recycler" }, { gauche: "die Energie", droite: "l'énergie" }] },
        { type: "traduction", consigne: "Traduisez.", source: "Nous trions les déchets.", accepte: ["Wir trennen den Müll"], aide: "den Müll trennen" }
      ]
    },
    {
      id: "a2t19",
      rp: {
        "scene": "La technologie",
        "intro": "Tu parles de technologie avec Zika.",
        "fin": "Bravo ! Tu as terminé le niveau A2 ! 🎉",
        "tours": [
          {
            "de": "Wie oft benutzt du dein Handy?",
            "fr": "À quelle fréquence utilises-tu ton portable ?",
            "options": [
              {
                "de": "Sehr oft, fast immer.",
                "ok": true
              },
              {
                "de": "In der Stadt.",
                "hint": "Zika demande la FRÉQUENCE : « oft », « selten », « fast immer »."
              }
            ],
            "bravo": "Génial !"
          },
          {
            "de": "Wofür benutzt du das Internet?",
            "fr": "Pour quoi utilises-tu Internet ?",
            "options": [
              {
                "de": "Zum Lernen und für Nachrichten.",
                "ok": true
              },
              {
                "de": "Ich habe ein Handy.",
                "hint": "Dis POUR QUOI : « zum Lernen, für Nachrichten, zum Spielen »."
              }
            ],
            "bravo": "Excellent !"
          }
        ]
      },
      vocCours: [
        "Ce dernier thème A2 porte sur la **technologie** et le **numérique** au quotidien. Vocabulaire clé : *das Handy* (le portable), *das Smartphone*, *die App*, *das Internet*, *die Nachricht* (le message), *herunterladen* (télécharger), *online sein*.",
        "Faux-ami important : *das Handy* désigne le **téléphone portable** en allemand (et non « pratique » comme en anglais). Beaucoup d'autres termes sont **internationaux** (*der Computer, die E-Mail, das WLAN, das Update*), ce qui facilite l'apprentissage.",
        "Astuce : décris **comment tu utilises la technologie** chaque jour (téléphone, applis, internet) avec ces verbes. Comme le numérique fait partie de ta vie, l'employer sur tes propres usages fixe le vocabulaire sans effort."
      ], numero: 10, titre: "La technologie", titreDE: "Technologie",
      theme: "Thème: Technologie", duree: 50,
      objectifs: ["Parler du numérique au quotidien", "Exprimer avantages et inconvénients"],
      grammairePoints: ["Subordonnée « wenn »", "Verbes + prépositions"],
      vocabulaire: [
        { de: "das Handy", fr: "le portable", ex: "Mein Handy ist neu." },
        { de: "das Internet", fr: "internet", ex: "Ich surfe im Internet." },
        { de: "die App", fr: "l'appli", ex: "Ich lade eine App herunter." },
        { de: "herunterladen", fr: "télécharger", ex: "Lade die Datei herunter." },
        { de: "die Nachricht", fr: "le message", ex: "Ich schreibe eine Nachricht." },
        { de: "soziale Netzwerke", fr: "les réseaux sociaux", ex: "Soziale Netzwerke sind beliebt." },
        { de: "der Vorteil", fr: "l'avantage", ex: "Ein großer Vorteil." },
        { de: "der Nachteil", fr: "l'inconvénient", ex: "Es gibt auch Nachteile." },
        { de: "online", fr: "en ligne", ex: "Ich kaufe online ein." },
        { de: "der Bildschirm", fr: "l'écran", ex: "Der Bildschirm ist groß." }
      ],
      grammaire: [
        { attention: "*wenn* rejette le verbe **à la fin** ; en tête, la principale commence par le verbe (*Wenn…, **kommt** er*).", titre: "La subordonnée avec « wenn » (si/quand)", intro: "wenn introduit une condition/un moment → verbe à la fin.",
          tableau: { entetes: ["Phrase", "Sens"], lignes: [["Wenn ich Zeit habe, lese ich.", "Quand j'ai le temps, je lis."], ["Ich helfe dir, wenn du willst.", "Je t'aide si tu veux."], ["Wenn das Handy kaputt ist, …", "Si le portable est cassé, …"]] },
          note: "Si « wenn… » est en tête, la principale commence par le verbe : « Wenn ich Zeit habe, LESE ich »." }
      ],
      dialogue: {
        titre: "Smartphone-Diskussion", lieu: "Im Kurs",
        lignes: [
          { loc: "Jan", de: "Was sind die Vorteile vom Handy?", fr: "Quels sont les avantages du portable ?" },
          { loc: "Lena", de: "Man kann immer Nachrichten schreiben.", fr: "On peut toujours écrire des messages." },
          { loc: "Jan", de: "Und die Nachteile?", fr: "Et les inconvénients ?" },
          { loc: "Lena", de: "Wenn man zu viel am Bildschirm ist, wird man müde.", fr: "Quand on est trop devant l'écran, on est fatigué." },
          { loc: "Jan", de: "Stimmt. Ich kaufe oft online ein.", fr: "C'est vrai. J'achète souvent en ligne." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was ist ein Nachteil?", options: ["Zu viel Bildschirm macht müde", "Man kann schreiben", "Man kauft online"], correct: 0, explication: "« Wenn man zu viel am Bildschirm ist, wird man müde »." },
        { type: "qcm", consigne: "Position du verbe après « wenn ».", question: "Wenn ich Zeit ___, lese ich.", options: ["habe", "habe ich", "haben", "hatte ich"], correct: 0, explication: "wenn → verbe à la fin : … wenn ich Zeit habe." },
        { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Ich helfe dir, wenn du {0}. (vouloir)", accepte: [["willst"]], indice: "wollen à la fin" },
        { type: "association", consigne: "Associez.", paires: [{ gauche: "herunterladen", droite: "télécharger" }, { gauche: "der Vorteil", droite: "l'avantage" }, { gauche: "der Nachteil", droite: "l'inconvénient" }, { gauche: "online", droite: "en ligne" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Donnez un avantage et un inconvénient du smartphone.", attendus: ["vorteil", "nachteil"], modele: "Ein Vorteil ist, dass man immer erreichbar ist. Ein Nachteil ist, dass man zu viel Zeit verliert." }
      ]
    }
  ]
};
