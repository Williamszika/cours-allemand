/* =====================================================================
   MODULE A1.2 — Le quotidien (Alltag)
   Suite du cours d'allemand intensif. Approfondit les verbes (modaux,
   séparables, parfait), les prépositions de temps, les conjonctions,
   le datif et les adjectifs.
   ===================================================================== */
window.MODULE_A12 = {
  id: "a1-2",
  titre: "A1.2 — Le quotidien",
  sousTitre: "Alltag",
  description:
    "On passe à l'action : routine, monde du travail, rendez-vous, météo, voyages, " +
    "transports, logement, santé et excuses. Avec les verbes de modalité et le passé composé.",
  couleur: "#b91c1c",
  lecons: [
    /* ---------------------------------------------------------------- */
    {
      id: "l10",
      numero: 10,
      titre: "La routine quotidienne",
      titreDE: "Der Tagesablauf",
      theme: "Routine quotidienne",
      duree: 50,
      objectifs: [
        "Décrire sa journée du matin au soir",
        "Maîtriser les verbes à particule séparable",
        "Indiquer l'heure et les moments de la journée"
      ],
      grammairePoints: ["Verbes séparables (révision)", "Moments de la journée", "zuerst, dann, danach"],
      vocabulaire: [
        { de: "der Tagesablauf", fr: "le déroulement de la journée", ex: "Mein Tagesablauf ist voll." },
        { de: "aufwachen", fr: "se réveiller", ex: "Ich wache um 6 Uhr auf." },
        { de: "aufstehen", fr: "se lever", ex: "Dann stehe ich auf." },
        { de: "frühstücken", fr: "prendre le petit-déj", ex: "Ich frühstücke um 7 Uhr." },
        { de: "arbeiten", fr: "travailler", ex: "Ich arbeite bis 17 Uhr." },
        { de: "die Pause", fr: "la pause", ex: "Mittags mache ich Pause." },
        { de: "nach Hause gehen", fr: "rentrer à la maison", ex: "Ich gehe nach Hause." },
        { de: "kochen", fr: "cuisiner", ex: "Abends koche ich." },
        { de: "schlafen gehen", fr: "aller se coucher", ex: "Ich gehe um 23 Uhr schlafen." },
        { de: "der Morgen", fr: "le matin", ex: "Am Morgen trinke ich Kaffee." },
        { de: "der Mittag", fr: "le midi", ex: "Am Mittag esse ich." },
        { de: "der Abend", fr: "le soir", ex: "Am Abend sehe ich fern." },
        { de: "zuerst", fr: "d'abord", ex: "Zuerst dusche ich." },
        { de: "dann", fr: "ensuite", ex: "Dann frühstücke ich." }
      ],
      grammaire: [
        {
          titre: "Organiser un récit : zuerst, dann, danach, schließlich",
          intro: "Ces adverbes structurent la chronologie. Placés en tête, ils inversent sujet et verbe.",
          tableau: {
            entetes: ["Adverbe", "Sens", "Exemple"],
            lignes: [
              ["zuerst", "d'abord", "Zuerst stehe ich auf."],
              ["dann", "puis", "Dann dusche ich."],
              ["danach", "après cela", "Danach frühstücke ich."],
              ["schließlich", "enfin", "Schließlich gehe ich zur Arbeit."]
            ]
          },
          note: "⚠️ Règle d'or : le verbe reste en 2e position. « Dann dusche ich » (et non « Dann ich dusche »)."
        },
        {
          titre: "Les moments de la journée (am + ...)",
          intro: "On utilise « am » pour les moments de la journée (sauf « in der Nacht »).",
          tableau: {
            entetes: ["Moment", "Allemand"],
            lignes: [
              ["le matin", "am Morgen / morgens"],
              ["le midi", "am Mittag / mittags"],
              ["l'après-midi", "am Nachmittag"],
              ["le soir", "am Abend / abends"],
              ["la nuit", "in der Nacht / nachts"]
            ]
          },
          note: "Les formes en -s (morgens, abends) signifient « habituellement le matin/soir »."
        }
      ],
      dialogue: {
        titre: "Mein Tag (ma journée)",
        lieu: "Interview",
        lignes: [
          { loc: "Reporter", de: "Wie sieht Ihr Tag aus?", fr: "À quoi ressemble votre journée ?" },
          { loc: "Frau Lang", de: "Zuerst wache ich um sechs auf und stehe auf.", fr: "D'abord je me réveille à six heures et je me lève." },
          { loc: "Reporter", de: "Und dann?", fr: "Et ensuite ?" },
          { loc: "Frau Lang", de: "Dann frühstücke ich und fahre zur Arbeit.", fr: "Puis je prends le petit-déjeuner et je vais au travail." },
          { loc: "Reporter", de: "Was machen Sie am Abend?", fr: "Que faites-vous le soir ?" },
          { loc: "Frau Lang", de: "Am Abend koche ich und dann sehe ich fern.", fr: "Le soir je cuisine puis je regarde la télé." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez l'ordre correct (verbe en 2e position).",
          question: "Dann ___ ich.",
          options: ["frühstücke", "ich frühstücke", "frühstücken", "frühstückt"],
          correct: 0,
          explication: "Après « Dann », le verbe vient juste après : Dann frühstücke ich."
        },
        {
          type: "trou",
          consigne: "Complétez avec « am » et le bon moment.",
          texte: "{0} Morgen trinke ich Kaffee und {1} Abend sehe ich fern.",
          accepte: [["am"], ["am"]],
          indice: "am + moment de la journée"
        },
        {
          type: "association",
          consigne: "Associez le verbe et sa traduction.",
          paires: [
            { gauche: "aufwachen", droite: "se réveiller" },
            { gauche: "frühstücken", droite: "prendre le petit-déj" },
            { gauche: "schlafen gehen", droite: "aller se coucher" },
            { gauche: "die Pause", droite: "la pause" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la phrase (séparable + 2e position).",
          mots: ["Zuerst", "stehe", "ich", "auf"],
          correct: "Zuerst stehe ich auf",
          traduction: "D'abord je me lève."
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Le soir, je cuisine.",
          accepte: ["Am Abend koche ich", "Abends koche ich"],
          aide: "am Abend + verbe en 2e position"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l11",
      numero: 11,
      titre: "Le stress au bureau",
      titreDE: "Stress im Büro",
      theme: "Le stress au bureau",
      duree: 55,
      objectifs: [
        "Parler de ses obligations et capacités",
        "Utiliser les verbes de modalité",
        "Décrire une journée de travail chargée"
      ],
      grammairePoints: ["Verbes de modalité : müssen, können, wollen", "Structure: modal + infinitif à la fin"],
      vocabulaire: [
        { de: "der Stress", fr: "le stress", ex: "Ich habe viel Stress." },
        { de: "die Besprechung", fr: "la réunion", ex: "Die Besprechung ist um 10 Uhr." },
        { de: "der Termin", fr: "le rendez-vous", ex: "Ich habe einen Termin." },
        { de: "die E-Mail", fr: "le courriel", ex: "Ich schreibe eine E-Mail." },
        { de: "der Kollege", fr: "le collègue", ex: "Mein Kollege hilft mir." },
        { de: "müssen", fr: "devoir", ex: "Ich muss arbeiten." },
        { de: "können", fr: "pouvoir / savoir", ex: "Kannst du helfen?" },
        { de: "wollen", fr: "vouloir", ex: "Ich will Pause machen." },
        { de: "fertig", fr: "fini / prêt", ex: "Die Arbeit ist fertig." },
        { de: "wichtig", fr: "important", ex: "Das ist sehr wichtig." },
        { de: "schaffen", fr: "réussir / gérer", ex: "Ich schaffe das nicht." },
        { de: "der Feierabend", fr: "la fin de journée", ex: "Endlich Feierabend!" },
        { de: "die Überstunde", fr: "l'heure supplémentaire", ex: "Ich mache Überstunden." },
        { de: "anstrengend", fr: "fatigant", ex: "Der Tag war anstrengend." }
      ],
      grammaire: [
        {
          titre: "Les verbes de modalité (Modalverben)",
          intro:
            "müssen, können, wollen expriment l'obligation, la capacité, la volonté. Le 2e verbe va à l'INFINITIF, à la FIN.",
          tableau: {
            entetes: ["Pronom", "müssen", "können", "wollen"],
            lignes: [
              ["ich", "muss", "kann", "will"],
              ["du", "musst", "kannst", "willst"],
              ["er/sie/es", "muss", "kann", "will"],
              ["wir", "müssen", "können", "wollen"],
              ["ihr", "müsst", "könnt", "wollt"],
              ["sie/Sie", "müssen", "können", "wollen"]
            ]
          },
          note: "⚠️ ich et er/sie/es n'ont PAS de terminaison : ich muss, er kann, sie will."
        },
        {
          titre: "Construction : modal + ... + infinitif (Satzklammer)",
          intro: "Le verbe modal est conjugué en 2e position ; le verbe principal (infinitif) ferme la phrase.",
          tableau: {
            entetes: ["Position 2 (modal)", "...", "Fin (infinitif)"],
            lignes: [
              ["Ich muss heute viel", "", "arbeiten."],
              ["Kannst du mir", "", "helfen?"],
              ["Wir wollen am Freitag", "", "feiern."]
            ]
          },
          note: "Cette structure « modal ... infinitif » s'appelle la parenthèse verbale (Satzklammer)."
        }
      ],
      dialogue: {
        titre: "Viel zu tun (beaucoup à faire)",
        lieu: "Im Großraumbüro",
        lignes: [
          { loc: "Tim", de: "Du siehst gestresst aus. Was ist los?", fr: "Tu as l'air stressé. Qu'est-ce qui se passe ?" },
          { loc: "Nora", de: "Ich muss heute drei Berichte schreiben.", fr: "Je dois écrire trois rapports aujourd'hui." },
          { loc: "Tim", de: "Kann ich dir helfen?", fr: "Puis-je t'aider ?" },
          { loc: "Nora", de: "Ja, gern! Kannst du die E-Mails beantworten?", fr: "Oui, volontiers ! Peux-tu répondre aux mails ?" },
          { loc: "Tim", de: "Klar. Und danach wollen wir Feierabend machen!", fr: "Bien sûr. Et après on veut faire la fin de journée !" },
          { loc: "Nora", de: "Perfekt. Heute keine Überstunden!", fr: "Parfait. Pas d'heures sup aujourd'hui !" }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez la forme correcte de « müssen ».",
          question: "Ich ___ heute viel arbeiten.",
          options: ["muss", "musst", "müssen", "musse"],
          correct: 0,
          explication: "ich muss (pas de terminaison à la 1re personne)."
        },
        {
          type: "qcm",
          consigne: "Où va le verbe « helfen » (à l'infinitif) ?",
          question: "Kannst du mir ___?",
          options: ["helfen", "hilfst", "hilfe", "geholfen"],
          correct: 0,
          explication: "Après un modal, le 2e verbe est à l'infinitif et en fin : helfen."
        },
        {
          type: "trou",
          consigne: "Complétez avec « kann » ou « kannst ».",
          texte: "{0} du mir helfen? — Ja, ich {1} dir helfen.",
          accepte: [["kannst"], ["kann"]],
          indice: "du → kannst ; ich → kann"
        },
        {
          type: "conjugaison",
          consigne: "Conjuguez « können » (pouvoir).",
          verbe: "können",
          items: [
            { pronom: "ich", reponse: "kann" },
            { pronom: "du", reponse: "kannst" },
            { pronom: "er/sie/es", reponse: "kann" },
            { pronom: "wir", reponse: "können" },
            { pronom: "ihr", reponse: "könnt" },
            { pronom: "sie/Sie", reponse: "können" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la phrase (modal + infinitif à la fin).",
          mots: ["Ich", "muss", "heute", "arbeiten"],
          correct: "Ich muss heute arbeiten",
          traduction: "Je dois travailler aujourd'hui."
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Nous voulons faire une pause.",
          accepte: ["Wir wollen Pause machen", "Wir wollen eine Pause machen"],
          aide: "wollen ... machen"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l12",
      numero: 12,
      titre: "L'ordinateur",
      titreDE: "Der Computer",
      theme: "L'ordinateur",
      duree: 50,
      objectifs: [
        "Nommer le matériel informatique",
        "Donner des instructions (impératif)",
        "Résoudre un petit problème technique"
      ],
      grammairePoints: ["L'impératif (du, Sie, ihr)", "Verbes d'instruction : klicken, öffnen, speichern"],
      vocabulaire: [
        { de: "der Computer", fr: "l'ordinateur", ex: "Mein Computer ist neu." },
        { de: "der Laptop", fr: "l'ordinateur portable", ex: "Der Laptop ist schnell." },
        { de: "die Maus", fr: "la souris", ex: "Die Maus funktioniert nicht." },
        { de: "die Tastatur", fr: "le clavier", ex: "Die Tastatur ist deutsch." },
        { de: "der Bildschirm", fr: "l'écran", ex: "Der Bildschirm ist groß." },
        { de: "die Datei", fr: "le fichier", ex: "Öffne die Datei!" },
        { de: "speichern", fr: "enregistrer", ex: "Speichern Sie das Dokument!" },
        { de: "öffnen", fr: "ouvrir", ex: "Öffne das Programm!" },
        { de: "klicken", fr: "cliquer", ex: "Klick hier!" },
        { de: "drucken", fr: "imprimer", ex: "Ich drucke die Seite." },
        { de: "das Internet", fr: "internet", ex: "Das Internet ist langsam." },
        { de: "das Passwort", fr: "le mot de passe", ex: "Wie ist das Passwort?" },
        { de: "funktionieren", fr: "fonctionner", ex: "Es funktioniert nicht." },
        { de: "herunterladen", fr: "télécharger", ex: "Lade die Datei herunter!" }
      ],
      grammaire: [
        {
          titre: "L'impératif (Imperativ)",
          intro: "Pour donner un ordre/conseil. Trois formes : du (tutoiement), ihr (vous pluriel), Sie (vouvoiement).",
          tableau: {
            entetes: ["Forme", "Construction", "Exemple (öffnen)"],
            lignes: [
              ["du", "radical (sans -st)", "Öffne die Datei!"],
              ["ihr", "radical + -t", "Öffnet die Datei!"],
              ["Sie", "infinitif + Sie", "Öffnen Sie die Datei!"]
            ]
          },
          note: "À la forme « du », pas de pronom : « Klick hier! » Pour « Sie », on garde le pronom : « Klicken Sie hier! »"
        },
        {
          titre: "Impératif des verbes irréguliers et de « sein »",
          intro: "Les verbes en e→i gardent le changement à la forme du. « sein » est irrégulier.",
          tableau: {
            entetes: ["Verbe", "du", "Sie"],
            lignes: [
              ["nehmen (prendre)", "Nimm!", "Nehmen Sie!"],
              ["geben (donner)", "Gib!", "Geben Sie!"],
              ["sein (être)", "Sei ruhig!", "Seien Sie ruhig!"],
              ["haben (avoir)", "Hab Geduld!", "Haben Sie Geduld!"]
            ]
          },
          note: "« Sei vorsichtig! » = Sois prudent ! / « Seien Sie vorsichtig! » (poli)."
        }
      ],
      dialogue: {
        titre: "Technisches Problem (problème technique)",
        lieu: "Im Büro",
        lignes: [
          { loc: "Lisa", de: "Mein Computer funktioniert nicht!", fr: "Mon ordinateur ne marche pas !" },
          { loc: "IT-Mann", de: "Kein Problem. Starten Sie ihn neu.", fr: "Pas de problème. Redémarrez-le." },
          { loc: "Lisa", de: "Okay... und jetzt?", fr: "D'accord... et maintenant ?" },
          { loc: "IT-Mann", de: "Klicken Sie hier und geben Sie das Passwort ein.", fr: "Cliquez ici et saisissez le mot de passe." },
          { loc: "Lisa", de: "Super, es funktioniert! Und wie speichere ich?", fr: "Super, ça marche ! Et comment j'enregistre ?" },
          { loc: "IT-Mann", de: "Drücken Sie Strg + S.", fr: "Appuyez sur Ctrl + S." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez l'impératif « du » de « öffnen ».",
          question: "___ die Datei! (à un ami)",
          options: ["Öffne", "Öffnen", "Öffnet", "Öffnest"],
          correct: 0,
          explication: "Impératif du : radical sans -st → Öffne!"
        },
        {
          type: "qcm",
          consigne: "Choisissez l'impératif poli (Sie).",
          question: "___ Sie hier!",
          options: ["Klicken", "Klick", "Klickt", "Klickst"],
          correct: 0,
          explication: "Impératif Sie : infinitif + Sie → Klicken Sie!"
        },
        {
          type: "trou",
          consigne: "Complétez avec l'impératif « du » de « speichern ».",
          texte: "{0} das Dokument!",
          accepte: [["speichere", "speicher"]],
          indice: "radical de speichern"
        },
        {
          type: "association",
          consigne: "Associez le mot informatique et sa traduction.",
          paires: [
            { gauche: "die Tastatur", droite: "le clavier" },
            { gauche: "der Bildschirm", droite: "l'écran" },
            { gauche: "die Maus", droite: "la souris" },
            { gauche: "die Datei", droite: "le fichier" },
            { gauche: "das Passwort", droite: "le mot de passe" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez l'ordre poli.",
          mots: ["Speichern", "Sie", "das", "Dokument"],
          correct: "Speichern Sie das Dokument",
          traduction: "Enregistrez le document."
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand (impératif « du »).",
          source: "Clique ici !",
          accepte: ["Klick hier", "Klicke hier", "Klick hier!"],
          aide: "klicken, forme du"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l13",
      numero: 13,
      titre: "Prendre un rendez-vous",
      titreDE: "Einen Termin vereinbaren",
      theme: "Prendre un rendez-vous",
      duree: 55,
      objectifs: [
        "Fixer et décaler un rendez-vous",
        "Maîtriser les prépositions de temps",
        "Proposer et refuser poliment"
      ],
      grammairePoints: ["Prépositions de temps : am, um, von...bis, im", "Modalverb können (poli)"],
      vocabulaire: [
        { de: "der Termin", fr: "le rendez-vous", ex: "Ich brauche einen Termin." },
        { de: "vereinbaren", fr: "convenir / fixer", ex: "Wir vereinbaren einen Termin." },
        { de: "absagen", fr: "annuler", ex: "Ich muss den Termin absagen." },
        { de: "verschieben", fr: "décaler", ex: "Können wir verschieben?" },
        { de: "passen", fr: "convenir / aller", ex: "Passt Ihnen Montag?" },
        { de: "frei haben", fr: "être libre", ex: "Am Freitag habe ich frei." },
        { de: "die Uhrzeit", fr: "l'heure (précise)", ex: "Um welche Uhrzeit?" },
        { de: "der Vormittag", fr: "la matinée", ex: "Am Vormittag geht es." },
        { de: "der Nachmittag", fr: "l'après-midi", ex: "Am Nachmittag bin ich frei." },
        { de: "pünktlich", fr: "ponctuel", ex: "Bitte seien Sie pünktlich!" },
        { de: "der Arzt", fr: "le médecin", ex: "Ich gehe zum Arzt." },
        { de: "die Praxis", fr: "le cabinet médical", ex: "Die Praxis ist geschlossen." },
        { de: "leider", fr: "malheureusement", ex: "Leider geht das nicht." },
        { de: "es geht", fr: "ça va / c'est possible", ex: "Ja, das geht!" }
      ],
      grammaire: [
        {
          titre: "Les prépositions de temps (temporale Präpositionen)",
          intro: "Chaque type d'indication temporelle a sa préposition. À mémoriser absolument.",
          tableau: {
            entetes: ["Préposition", "Usage", "Exemple"],
            lignes: [
              ["am", "jours, dates, moments", "am Montag, am 3. Mai, am Abend"],
              ["um", "heure précise", "um 9 Uhr"],
              ["im", "mois, saisons", "im Januar, im Sommer"],
              ["von ... bis", "de ... à", "von 9 bis 17 Uhr"],
              ["ab", "à partir de", "ab Montag"]
            ]
          },
          note: "⚠️ « in der Nacht » est l'exception (pas « am »). Heure → um ; jour → am ; mois/saison → im."
        },
        {
          titre: "Demander poliment avec « können »",
          intro: "Pour proposer/demander avec courtoisie, on utilise « können » + infinitif.",
          tableau: {
            entetes: ["Phrase", "Sens"],
            lignes: [
              ["Können wir einen Termin machen?", "Pouvons-nous prendre rdv ?"],
              ["Können Sie am Montag?", "Pouvez-vous lundi ?"],
              ["Passt Ihnen 10 Uhr?", "10h vous convient ?"],
              ["Leider kann ich nicht.", "Malheureusement je ne peux pas."]
            ]
          },
          note: "« Passt Ihnen ...? » et « Geht es am ...? » sont les formules typiques pour proposer un créneau."
        }
      ],
      dialogue: {
        titre: "Beim Zahnarzt anrufen (appeler le dentiste)",
        lieu: "Am Telefon",
        lignes: [
          { loc: "Praxis", de: "Praxis Dr. Wolf, guten Tag!", fr: "Cabinet Dr Wolf, bonjour !" },
          { loc: "Herr Kurt", de: "Guten Tag, ich möchte einen Termin vereinbaren.", fr: "Bonjour, je voudrais prendre rendez-vous." },
          { loc: "Praxis", de: "Passt Ihnen Montag um 10 Uhr?", fr: "Lundi à 10h vous convient ?" },
          { loc: "Herr Kurt", de: "Leider nicht. Am Montag muss ich arbeiten.", fr: "Malheureusement non. Lundi je dois travailler." },
          { loc: "Praxis", de: "Und am Dienstag um 16 Uhr?", fr: "Et mardi à 16h ?" },
          { loc: "Herr Kurt", de: "Ja, das passt! Vielen Dank.", fr: "Oui, ça convient ! Merci beaucoup." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez la préposition de temps.",
          question: "Der Termin ist ___ 9 Uhr.",
          options: ["um", "am", "im", "in"],
          correct: 0,
          explication: "Heure précise → um 9 Uhr."
        },
        {
          type: "qcm",
          consigne: "Choisissez la préposition de temps.",
          question: "Ich habe ___ Montag frei.",
          options: ["am", "um", "im", "in"],
          correct: 0,
          explication: "Jour de la semaine → am Montag."
        },
        {
          type: "trou",
          consigne: "Complétez avec « am », « um » ou « im ».",
          texte: "{0} Sommer arbeite ich {1} Freitag nur {2} 8 bis 12 Uhr.",
          accepte: [["im"], ["am"], ["von"]],
          indice: "saison / jour / de...à"
        },
        {
          type: "association",
          consigne: "Associez la préposition et son usage.",
          paires: [
            { gauche: "um", droite: "une heure précise" },
            { gauche: "am", droite: "un jour de la semaine" },
            { gauche: "im", droite: "un mois ou une saison" },
            { gauche: "von ... bis", droite: "de ... à" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la question polie.",
          mots: ["Können", "wir", "einen", "Termin", "machen"],
          correct: "Können wir einen Termin machen",
          traduction: "Pouvons-nous prendre un rendez-vous ?"
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Le rendez-vous est lundi à dix heures.",
          accepte: ["Der Termin ist am Montag um 10 Uhr", "Der Termin ist am Montag um zehn Uhr"],
          aide: "am Montag um 10 Uhr"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l14",
      numero: 14,
      titre: "Les saisons et le temps",
      titreDE: "Jahreszeiten und Wetter",
      theme: "Les saisons et le temps",
      duree: 50,
      objectifs: [
        "Décrire la météo",
        "Nommer saisons et mois",
        "Utiliser les adjectifs et conjonctions simples"
      ],
      grammairePoints: ["Conjonctions : und, oder, aber, denn", "es ist + adjectif"],
      vocabulaire: [
        { de: "das Wetter", fr: "le temps (météo)", ex: "Wie ist das Wetter?" },
        { de: "die Jahreszeit", fr: "la saison", ex: "Welche Jahreszeit ist das?" },
        { de: "der Frühling", fr: "le printemps", ex: "Im Frühling blühen die Blumen." },
        { de: "der Sommer", fr: "l'été", ex: "Im Sommer ist es warm." },
        { de: "der Herbst", fr: "l'automne", ex: "Im Herbst regnet es oft." },
        { de: "der Winter", fr: "l'hiver", ex: "Im Winter schneit es." },
        { de: "die Sonne", fr: "le soleil", ex: "Die Sonne scheint." },
        { de: "der Regen", fr: "la pluie", ex: "Der Regen ist stark." },
        { de: "der Schnee", fr: "la neige", ex: "Der Schnee ist weiß." },
        { de: "warm", fr: "chaud", ex: "Heute ist es warm." },
        { de: "kalt", fr: "froid", ex: "Im Winter ist es kalt." },
        { de: "regnen", fr: "pleuvoir", ex: "Es regnet." },
        { de: "scheinen", fr: "briller", ex: "Die Sonne scheint." },
        { de: "der Grad", fr: "le degré", ex: "Es sind 20 Grad." }
      ],
      grammaire: [
        {
          titre: "Les conjonctions de coordination (und, oder, aber, denn)",
          intro:
            "Elles relient deux phrases SANS changer l'ordre des mots (le verbe reste en 2e position dans chaque partie).",
          tableau: {
            entetes: ["Conjonction", "Sens", "Exemple"],
            lignes: [
              ["und", "et", "Es ist warm und die Sonne scheint."],
              ["oder", "ou", "Wir gehen schwimmen oder wir bleiben hier."],
              ["aber", "mais", "Es ist kalt, aber es ist sonnig."],
              ["denn", "car", "Ich bleibe zu Hause, denn es regnet."]
            ]
          },
          note: "Ces 4 conjonctions ne comptent pas comme « position 1 » : l'ordre normal sujet-verbe est conservé."
        },
        {
          titre: "Parler de la météo : « es » impersonnel",
          intro: "La météo utilise le sujet neutre « es ».",
          tableau: {
            entetes: ["Allemand", "Sens"],
            lignes: [
              ["Es regnet.", "Il pleut."],
              ["Es schneit.", "Il neige."],
              ["Es ist warm / kalt.", "Il fait chaud / froid."],
              ["Es sind 25 Grad.", "Il fait 25 degrés."]
            ]
          },
          note: "« Es gibt » = il y a ; « Es ist » = il est/fait. Ne pas confondre."
        }
      ],
      dialogue: {
        titre: "Wie ist das Wetter? (quel temps fait-il ?)",
        lieu: "Telefongespräch zwischen zwei Städten",
        lignes: [
          { loc: "Mia", de: "Hallo Ben! Wie ist das Wetter in Hamburg?", fr: "Salut Ben ! Quel temps fait-il à Hambourg ?" },
          { loc: "Ben", de: "Es regnet und es ist kalt. Und bei dir?", fr: "Il pleut et il fait froid. Et chez toi ?" },
          { loc: "Mia", de: "Hier scheint die Sonne, aber es ist windig.", fr: "Ici le soleil brille, mais il y a du vent." },
          { loc: "Ben", de: "Wie viel Grad sind es?", fr: "Combien fait-il ?" },
          { loc: "Mia", de: "22 Grad! Ein schöner Frühlingstag.", fr: "22 degrés ! Une belle journée de printemps." },
          { loc: "Ben", de: "Ich komme zu dir, denn hier ist es schrecklich!", fr: "Je viens chez toi, car ici c'est affreux !" }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez la conjonction logique.",
          question: "Es ist kalt, ___ die Sonne scheint.",
          options: ["aber", "und", "denn", "oder"],
          correct: 0,
          explication: "Opposition (froid / soleil) → aber (mais)."
        },
        {
          type: "qcm",
          consigne: "Choisissez la conjonction « car ».",
          question: "Ich bleibe zu Hause, ___ es regnet.",
          options: ["denn", "aber", "oder", "und"],
          correct: 0,
          explication: "Cause → denn (car)."
        },
        {
          type: "trou",
          consigne: "Complétez avec « im » + la saison.",
          texte: "{0} Winter schneit es und {1} Sommer ist es warm.",
          accepte: [["im"], ["im"]],
          indice: "im + saison"
        },
        {
          type: "association",
          consigne: "Associez la saison et sa traduction.",
          paires: [
            { gauche: "der Frühling", droite: "le printemps" },
            { gauche: "der Sommer", droite: "l'été" },
            { gauche: "der Herbst", droite: "l'automne" },
            { gauche: "der Winter", droite: "l'hiver" }
          ]
        },
        {
          type: "ecoute",
          consigne: "Écoutez (🔊) et choisissez.",
          audio: "Es regnet und es ist kalt",
          options: ["Il pleut et il fait froid", "Il neige et il fait froid", "Il pleut et il fait chaud"],
          correct: 0
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Il fait chaud et le soleil brille.",
          accepte: ["Es ist warm und die Sonne scheint"],
          aide: "es ist warm / die Sonne scheint"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l15",
      numero: 15,
      titre: "Destinations et préparation de voyage",
      titreDE: "Reiseziele und Reisevorbereitung",
      theme: "Destinations, préparation de voyages",
      duree: 55,
      objectifs: [
        "Parler de projets de voyage",
        "Raconter un voyage au passé (Perfekt)",
        "Préparer ses bagages"
      ],
      grammairePoints: ["Le passé composé (Perfekt) avec haben/sein", "Participe passé (ge-...-t / ge-...-en)"],
      vocabulaire: [
        { de: "die Reise", fr: "le voyage", ex: "Die Reise war toll." },
        { de: "das Reiseziel", fr: "la destination", ex: "Mein Reiseziel ist Italien." },
        { de: "der Koffer", fr: "la valise", ex: "Der Koffer ist schwer." },
        { de: "packen", fr: "faire les bagages", ex: "Ich packe den Koffer." },
        { de: "der Pass", fr: "le passeport", ex: "Wo ist mein Pass?" },
        { de: "das Ticket", fr: "le billet", ex: "Ich habe das Ticket." },
        { de: "buchen", fr: "réserver", ex: "Ich buche ein Hotel." },
        { de: "der Urlaub", fr: "les vacances", ex: "Ich mache Urlaub in Spanien." },
        { de: "fahren", fr: "aller (en véhicule)", ex: "Wir fahren nach Berlin." },
        { de: "fliegen", fr: "voler / prendre l'avion", ex: "Ich fliege nach Rom." },
        { de: "besuchen", fr: "visiter / rendre visite", ex: "Ich besuche Freunde." },
        { de: "das Gepäck", fr: "les bagages", ex: "Das Gepäck ist im Auto." },
        { de: "die Sonnencreme", fr: "la crème solaire", ex: "Vergiss die Sonnencreme nicht!" },
        { de: "schön", fr: "beau / agréable", ex: "Der Urlaub war schön." }
      ],
      grammaire: [
        {
          titre: "Le passé composé (Perfekt) — le passé de l'oral",
          intro:
            "Le Perfekt = auxiliaire (haben ou sein) en 2e position + participe passé à la FIN. C'est le passé le plus courant à l'oral.",
          tableau: {
            entetes: ["Auxiliaire", "...", "Participe (fin)"],
            lignes: [
              ["Ich habe ein Hotel", "", "gebucht."],
              ["Wir haben viel", "", "gemacht."],
              ["Ich bin nach Rom", "", "geflogen."],
              ["Sie ist nach Berlin", "", "gefahren."]
            ]
          },
          note: "⚠️ Verbes de mouvement/changement d'état (fahren, fliegen, gehen, kommen) → auxiliaire SEIN. Les autres → HABEN."
        },
        {
          titre: "Former le participe passé (Partizip II)",
          intro: "Réguliers : ge- + radical + -t. Irréguliers : ge- + radical (souvent modifié) + -en.",
          tableau: {
            entetes: ["Infinitif", "Type", "Participe II"],
            lignes: [
              ["machen", "régulier", "gemacht"],
              ["buchen", "régulier", "gebucht"],
              ["fahren", "irrégulier", "gefahren"],
              ["fliegen", "irrégulier", "geflogen"],
              ["sehen", "irrégulier", "gesehen"]
            ]
          },
          note: "Verbes séparables : ge- s'insère : einkaufen → eingekauft. Verbes en -ieren : pas de ge- (buchen reste régulier, mais reservieren → reserviert)."
        }
      ],
      dialogue: {
        titre: "Nach dem Urlaub (après les vacances)",
        lieu: "Im Büro, am Montag",
        lignes: [
          { loc: "Eva", de: "Wie war dein Urlaub?", fr: "Comment étaient tes vacances ?" },
          { loc: "Lars", de: "Super! Ich bin nach Italien geflogen.", fr: "Super ! J'ai pris l'avion pour l'Italie." },
          { loc: "Eva", de: "Was hast du gemacht?", fr: "Qu'as-tu fait ?" },
          { loc: "Lars", de: "Ich habe Rom besucht und viel Pizza gegessen!", fr: "J'ai visité Rome et mangé beaucoup de pizza !" },
          { loc: "Eva", de: "Und das Wetter?", fr: "Et le temps ?" },
          { loc: "Lars", de: "Die Sonne hat jeden Tag geschienen. Wunderbar!", fr: "Le soleil a brillé tous les jours. Merveilleux !" }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez l'auxiliaire correct.",
          question: "Ich ___ nach Rom geflogen.",
          options: ["bin", "habe", "ist", "hat"],
          correct: 0,
          explication: "« fliegen » est un verbe de mouvement → auxiliaire sein : ich bin geflogen."
        },
        {
          type: "qcm",
          consigne: "Choisissez l'auxiliaire correct.",
          question: "Wir ___ ein Hotel gebucht.",
          options: ["haben", "sind", "habt", "seid"],
          correct: 0,
          explication: "« buchen » → auxiliaire haben : wir haben gebucht."
        },
        {
          type: "trou",
          consigne: "Complétez avec le participe passé de « machen ».",
          texte: "Was hast du im Urlaub {0}?",
          accepte: [["gemacht"]],
          indice: "régulier : ge- + mach + -t"
        },
        {
          type: "association",
          consigne: "Associez l'infinitif et son participe passé.",
          paires: [
            { gauche: "machen", droite: "gemacht" },
            { gauche: "fahren", droite: "gefahren" },
            { gauche: "fliegen", droite: "geflogen" },
            { gauche: "sehen", droite: "gesehen" },
            { gauche: "buchen", droite: "gebucht" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la phrase au passé composé.",
          mots: ["Ich", "habe", "Rom", "besucht"],
          correct: "Ich habe Rom besucht",
          traduction: "J'ai visité Rome."
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand (passé composé).",
          source: "Nous sommes allés à Berlin.",
          accepte: ["Wir sind nach Berlin gefahren"],
          aide: "fahren → sein + gefahren"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l16",
      numero: 16,
      titre: "Les moyens de transport",
      titreDE: "Verkehrsmittel",
      theme: "Moyens de transport",
      duree: 50,
      objectifs: [
        "Nommer les moyens de transport",
        "Dire comment on se déplace (mit + datif)",
        "Acheter un billet"
      ],
      grammairePoints: ["mit + datif", "Indicateurs de lieu : nach, zu, in"],
      vocabulaire: [
        { de: "das Verkehrsmittel", fr: "le moyen de transport", ex: "Welches Verkehrsmittel?" },
        { de: "der Bus", fr: "le bus", ex: "Ich fahre mit dem Bus." },
        { de: "der Zug", fr: "le train", ex: "Der Zug ist pünktlich." },
        { de: "die Bahn", fr: "le train / le métro", ex: "Ich nehme die Bahn." },
        { de: "das Auto", fr: "la voiture", ex: "Wir fahren mit dem Auto." },
        { de: "das Fahrrad", fr: "le vélo", ex: "Ich fahre mit dem Fahrrad." },
        { de: "das Flugzeug", fr: "l'avion", ex: "Das Flugzeug ist schnell." },
        { de: "die U-Bahn", fr: "le métro", ex: "Die U-Bahn kommt gleich." },
        { de: "die Haltestelle", fr: "l'arrêt", ex: "Wo ist die Haltestelle?" },
        { de: "die Fahrkarte", fr: "le billet", ex: "Eine Fahrkarte, bitte." },
        { de: "umsteigen", fr: "changer (de transport)", ex: "Ich steige in Köln um." },
        { de: "zu Fuß", fr: "à pied", ex: "Ich gehe zu Fuß." },
        { de: "abfahren", fr: "partir (départ)", ex: "Der Zug fährt um 9 ab." },
        { de: "die Verspätung", fr: "le retard", ex: "Der Zug hat Verspätung." }
      ],
      grammaire: [
        {
          titre: "« mit » + datif : dire avec quel moyen",
          intro:
            "Pour exprimer le moyen de transport, on utilise « mit » + datif. Au datif : der→dem, die→der, das→dem.",
          tableau: {
            entetes: ["Transport", "Genre", "mit + datif"],
            lignes: [
              ["der Bus", "masc.", "mit dem Bus"],
              ["das Auto", "neutre", "mit dem Auto"],
              ["die Bahn", "fém.", "mit der Bahn"],
              ["das Fahrrad", "neutre", "mit dem Fahrrad"]
            ]
          },
          note: "Exception : « zu Fuß » (à pied), sans « mit »."
        },
        {
          titre: "Les indicateurs de lieu : nach, zu, in",
          intro: "Pour dire où l'on va, la préposition dépend de la destination.",
          tableau: {
            entetes: ["Préposition", "Usage", "Exemple"],
            lignes: [
              ["nach", "villes, pays (sans article)", "Ich fahre nach Berlin."],
              ["zu", "personnes, lieux précis", "Ich gehe zum Arzt."],
              ["in", "+ accusatif (entrer dans)", "Ich gehe in die Stadt."],
              ["zu Hause / nach Hause", "à la maison / vers la maison", "Ich bin zu Hause."]
            ]
          },
          note: "« nach Hause » = rentrer (mouvement) ; « zu Hause » = être à la maison (lieu)."
        }
      ],
      dialogue: {
        titre: "Am Bahnhof (à la gare)",
        lieu: "Fahrkartenschalter",
        lignes: [
          { loc: "Reisende", de: "Eine Fahrkarte nach München, bitte.", fr: "Un billet pour Munich, s'il vous plaît." },
          { loc: "Beamter", de: "Einfach oder hin und zurück?", fr: "Aller simple ou aller-retour ?" },
          { loc: "Reisende", de: "Hin und zurück. Muss ich umsteigen?", fr: "Aller-retour. Dois-je changer ?" },
          { loc: "Beamter", de: "Ja, in Stuttgart. Der Zug fährt um 14 Uhr ab.", fr: "Oui, à Stuttgart. Le train part à 14h." },
          { loc: "Reisende", de: "Hat er Verspätung?", fr: "A-t-il du retard ?" },
          { loc: "Beamter", de: "Nein, er ist pünktlich. Gleis 7.", fr: "Non, il est à l'heure. Voie 7." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez la forme correcte au datif.",
          question: "Ich fahre mit ___ Bus.",
          options: ["dem", "der", "den", "das"],
          correct: 0,
          explication: "« der Bus » (masc.) au datif après « mit » → dem Bus."
        },
        {
          type: "qcm",
          consigne: "Choisissez la préposition pour une ville.",
          question: "Ich fahre ___ Berlin.",
          options: ["nach", "zu", "in", "mit"],
          correct: 0,
          explication: "Ville sans article → nach Berlin."
        },
        {
          type: "trou",
          consigne: "Complétez avec « mit dem » ou « mit der ».",
          texte: "Ich fahre {0} Bahn und du fährst {1} Auto.",
          accepte: [["mit der"], ["mit dem"]],
          indice: "die Bahn (f) / das Auto (n)"
        },
        {
          type: "association",
          consigne: "Associez le transport et sa traduction.",
          paires: [
            { gauche: "der Zug", droite: "le train" },
            { gauche: "das Fahrrad", droite: "le vélo" },
            { gauche: "das Flugzeug", droite: "l'avion" },
            { gauche: "die U-Bahn", droite: "le métro" },
            { gauche: "zu Fuß", droite: "à pied" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la phrase.",
          mots: ["Wir", "fahren", "mit", "dem", "Auto"],
          correct: "Wir fahren mit dem Auto",
          traduction: "Nous y allons en voiture."
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Je vais à vélo.",
          accepte: ["Ich fahre mit dem Fahrrad"],
          aide: "mit dem Fahrrad"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l17",
      numero: 17,
      titre: "Le logement et l'ameublement",
      titreDE: "Wohnen und Möbel",
      theme: "La vie et l'ameublement de la maison",
      duree: 55,
      objectifs: [
        "Décrire son logement",
        "Nommer les pièces et les meubles",
        "Situer des objets (Wechselpräpositionen)"
      ],
      grammairePoints: ["Prépositions mixtes (Wechselpräpositionen) + datif (Wo?)", "es gibt + accusatif"],
      vocabulaire: [
        { de: "die Wohnung", fr: "l'appartement", ex: "Die Wohnung ist groß." },
        { de: "das Haus", fr: "la maison", ex: "Das Haus hat einen Garten." },
        { de: "das Zimmer", fr: "la pièce", ex: "Die Wohnung hat drei Zimmer." },
        { de: "die Küche", fr: "la cuisine", ex: "Die Küche ist modern." },
        { de: "das Schlafzimmer", fr: "la chambre", ex: "Das Schlafzimmer ist klein." },
        { de: "das Bad", fr: "la salle de bain", ex: "Das Bad ist neben der Küche." },
        { de: "der Tisch", fr: "la table", ex: "Der Tisch ist aus Holz." },
        { de: "der Stuhl", fr: "la chaise", ex: "Der Stuhl ist bequem." },
        { de: "das Bett", fr: "le lit", ex: "Das Bett ist groß." },
        { de: "der Schrank", fr: "l'armoire", ex: "Der Schrank ist voll." },
        { de: "das Sofa", fr: "le canapé", ex: "Das Sofa ist gemütlich." },
        { de: "die Lampe", fr: "la lampe", ex: "Die Lampe ist an." },
        { de: "der Teppich", fr: "le tapis", ex: "Der Teppich liegt auf dem Boden." },
        { de: "gemütlich", fr: "confortable / cosy", ex: "Die Wohnung ist gemütlich." }
      ],
      grammaire: [
        {
          titre: "Les prépositions mixtes (Wechselpräpositionen) — situer (Wo? → datif)",
          intro:
            "Ces prépositions prennent le DATIF quand on situe (Wo? = position, pas de mouvement).",
          tableau: {
            entetes: ["Préposition", "Sens", "Exemple (Wo? → datif)"],
            lignes: [
              ["auf", "sur", "Das Buch ist auf dem Tisch."],
              ["unter", "sous", "Die Katze ist unter dem Bett."],
              ["in", "dans", "Die Lampe ist in der Küche."],
              ["neben", "à côté de", "Der Stuhl steht neben dem Sofa."],
              ["an", "à / contre", "Das Bild hängt an der Wand."]
            ]
          },
          note: "Datif : der→dem, das→dem, die→der. (Avec mouvement « Wohin? », ce serait l'accusatif — niveau A2.)"
        },
        {
          titre: "Décrire un logement : haben / es gibt + accusatif",
          intro: "Pour énumérer ce qu'il y a, on emploie « haben » ou « es gibt » + accusatif.",
          tableau: {
            entetes: ["Phrase", "Sens"],
            lignes: [
              ["Die Wohnung hat einen Balkon.", "L'appart a un balcon."],
              ["Es gibt eine Küche und ein Bad.", "Il y a une cuisine et une SDB."],
              ["Das Zimmer hat ein Fenster.", "La pièce a une fenêtre."]
            ]
          },
          note: "Rappel accusatif : seul le masculin change (ein → einen : einen Balkon)."
        }
      ],
      dialogue: {
        titre: "Die neue Wohnung (le nouvel appartement)",
        lieu: "Wohnungsbesichtigung",
        lignes: [
          { loc: "Makler", de: "Hier ist das Wohnzimmer. Sehr gemütlich, oder?", fr: "Voici le salon. Très cosy, non ?" },
          { loc: "Frau Roth", de: "Ja! Und das Sofa steht schon hier.", fr: "Oui ! Et le canapé est déjà là." },
          { loc: "Makler", de: "Genau. Die Lampe hängt an der Decke.", fr: "Exactement. La lampe est suspendue au plafond." },
          { loc: "Frau Roth", de: "Wo ist die Küche?", fr: "Où est la cuisine ?" },
          { loc: "Makler", de: "Neben dem Bad. Es gibt auch einen Balkon.", fr: "À côté de la salle de bain. Il y a aussi un balcon." },
          { loc: "Frau Roth", de: "Perfekt! Die Wohnung gefällt mir.", fr: "Parfait ! L'appartement me plaît." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez le datif correct (situer).",
          question: "Das Buch ist auf ___ Tisch.",
          options: ["dem", "den", "der", "das"],
          correct: 0,
          explication: "« der Tisch » (masc.), position (Wo?) → datif : dem Tisch."
        },
        {
          type: "qcm",
          consigne: "Choisissez l'accusatif après « hat ».",
          question: "Die Wohnung hat ___ Balkon.",
          options: ["einen", "ein", "eine", "dem"],
          correct: 0,
          explication: "« der Balkon » (masc.) à l'accusatif → einen Balkon."
        },
        {
          type: "trou",
          consigne: "Complétez avec « dem » ou « der » (datif).",
          texte: "Die Lampe ist in {0} Küche und der Stuhl neben {1} Sofa.",
          accepte: [["der"], ["dem"]],
          indice: "die Küche (f) / das Sofa (n)"
        },
        {
          type: "association",
          consigne: "Associez le meuble/la pièce et sa traduction.",
          paires: [
            { gauche: "das Bett", droite: "le lit" },
            { gauche: "der Schrank", droite: "l'armoire" },
            { gauche: "die Küche", droite: "la cuisine" },
            { gauche: "das Sofa", droite: "le canapé" },
            { gauche: "der Tisch", droite: "la table" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la phrase.",
          mots: ["Der", "Stuhl", "steht", "neben", "dem", "Tisch"],
          correct: "Der Stuhl steht neben dem Tisch",
          traduction: "La chaise est à côté de la table."
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Il y a une cuisine et une salle de bain.",
          accepte: ["Es gibt eine Küche und ein Bad", "Es gibt eine Küche und ein Badezimmer"],
          aide: "es gibt + accusatif"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l18",
      numero: 18,
      titre: "La santé",
      titreDE: "Die Gesundheit",
      theme: "Santé",
      duree: 55,
      objectifs: [
        "Nommer les parties du corps",
        "Dire ce qui ne va pas (chez le médecin)",
        "Donner un conseil (sollen / impératif)"
      ],
      grammairePoints: ["Verbe modal sollen (conseil)", "haben + Schmerzen", "Körperteile"],
      vocabulaire: [
        { de: "die Gesundheit", fr: "la santé", ex: "Gesundheit ist wichtig." },
        { de: "der Körper", fr: "le corps", ex: "Der Körper braucht Schlaf." },
        { de: "der Kopf", fr: "la tête", ex: "Mein Kopf tut weh." },
        { de: "der Bauch", fr: "le ventre", ex: "Ich habe Bauchschmerzen." },
        { de: "der Hals", fr: "la gorge / le cou", ex: "Mein Hals tut weh." },
        { de: "der Rücken", fr: "le dos", ex: "Der Rücken schmerzt." },
        { de: "die Hand", fr: "la main", ex: "Die Hand ist verletzt." },
        { de: "krank", fr: "malade", ex: "Ich bin krank." },
        { de: "der Schmerz", fr: "la douleur", ex: "Ich habe Schmerzen." },
        { de: "wehtun", fr: "faire mal", ex: "Was tut weh?" },
        { de: "die Erkältung", fr: "le rhume", ex: "Ich habe eine Erkältung." },
        { de: "das Medikament", fr: "le médicament", ex: "Nimm das Medikament!" },
        { de: "sollen", fr: "devoir (conseil)", ex: "Du sollst viel trinken." },
        { de: "sich ausruhen", fr: "se reposer", ex: "Ruh dich aus!" }
      ],
      grammaire: [
        {
          titre: "Le verbe modal « sollen » (conseil, recommandation)",
          intro:
            "« sollen » exprime un conseil ou une consigne (souvent d'un tiers : le médecin dit que...). Modal + infinitif à la fin.",
          tableau: {
            entetes: ["Pronom", "sollen", "Exemple"],
            lignes: [
              ["ich", "soll", "Was soll ich machen?"],
              ["du", "sollst", "Du sollst viel trinken."],
              ["er/sie/es", "soll", "Sie soll im Bett bleiben."],
              ["wir", "sollen", "Wir sollen Sport machen."],
              ["ihr", "sollt", "Ihr sollt aufpassen."],
              ["sie/Sie", "sollen", "Sie sollen sich ausruhen."]
            ]
          },
          note: "« Du sollst viel trinken » = Tu devrais beaucoup boire (conseil du médecin)."
        },
        {
          titre: "Exprimer la douleur : « wehtun » et « Schmerzen haben »",
          intro: "Deux structures fréquentes chez le médecin.",
          tableau: {
            entetes: ["Structure", "Exemple", "Sens"],
            lignes: [
              ["... tut weh", "Mein Kopf tut weh.", "J'ai mal à la tête."],
              ["... tun weh (pluriel)", "Meine Füße tun weh.", "J'ai mal aux pieds."],
              ["haben + ...schmerzen", "Ich habe Kopfschmerzen.", "J'ai mal à la tête."]
            ]
          },
          note: "Composés : Kopf + Schmerzen = Kopfschmerzen ; Bauch + Schmerzen = Bauchschmerzen."
        }
      ],
      dialogue: {
        titre: "Beim Arzt (chez le médecin)",
        lieu: "Arztpraxis",
        lignes: [
          { loc: "Ärztin", de: "Guten Tag! Was fehlt Ihnen?", fr: "Bonjour ! Qu'est-ce qui ne va pas ?" },
          { loc: "Patient", de: "Mein Kopf tut weh und ich habe Halsschmerzen.", fr: "J'ai mal à la tête et mal à la gorge." },
          { loc: "Ärztin", de: "Haben Sie Fieber?", fr: "Avez-vous de la fièvre ?" },
          { loc: "Patient", de: "Ja, ein bisschen. Ich bin müde.", fr: "Oui, un peu. Je suis fatigué." },
          { loc: "Ärztin", de: "Sie haben eine Erkältung. Sie sollen sich ausruhen.", fr: "Vous avez un rhume. Vous devriez vous reposer." },
          { loc: "Patient", de: "Und Medikamente?", fr: "Et des médicaments ?" },
          { loc: "Ärztin", de: "Trinken Sie viel Tee und nehmen Sie diese Tabletten.", fr: "Buvez beaucoup de thé et prenez ces comprimés." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez la forme de « sollen ».",
          question: "Du ___ viel Wasser trinken.",
          options: ["sollst", "soll", "sollen", "sollt"],
          correct: 0,
          explication: "du sollst (conseil)."
        },
        {
          type: "qcm",
          consigne: "Comment dit-on « J'ai mal à la tête » ?",
          question: "Choisissez la phrase correcte :",
          options: ["Ich habe Kopfschmerzen.", "Ich bin Kopf.", "Mein Kopf ist weh.", "Ich mache Kopf."],
          correct: 0,
          explication: "haben + Kopfschmerzen, ou « Mein Kopf tut weh »."
        },
        {
          type: "trou",
          consigne: "Complétez avec la partie du corps.",
          texte: "Mein {0} tut weh. (la tête)",
          accepte: [["Kopf"]],
          indice: "die tête = der Kopf"
        },
        {
          type: "association",
          consigne: "Associez la partie du corps et sa traduction.",
          paires: [
            { gauche: "der Kopf", droite: "la tête" },
            { gauche: "der Bauch", droite: "le ventre" },
            { gauche: "der Hals", droite: "la gorge" },
            { gauche: "der Rücken", droite: "le dos" },
            { gauche: "die Hand", droite: "la main" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez le conseil.",
          mots: ["Du", "sollst", "dich", "ausruhen"],
          correct: "Du sollst dich ausruhen",
          traduction: "Tu devrais te reposer."
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Je suis malade et j'ai mal à la gorge.",
          accepte: ["Ich bin krank und ich habe Halsschmerzen", "Ich bin krank und habe Halsschmerzen"],
          aide: "krank / Halsschmerzen"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l19",
      numero: 19,
      titre: "Les excuses",
      titreDE: "Entschuldigungen",
      theme: "Excuses",
      duree: 55,
      objectifs: [
        "Présenter des excuses et se justifier",
        "Donner une raison avec « weil »",
        "Raconter un contretemps au passé"
      ],
      grammairePoints: ["Conjonction de subordination « weil » (verbe à la fin)", "Perfekt (révision)"],
      vocabulaire: [
        { de: "die Entschuldigung", fr: "l'excuse", ex: "Entschuldigung für die Verspätung!" },
        { de: "sich entschuldigen", fr: "s'excuser", ex: "Ich entschuldige mich." },
        { de: "der Grund", fr: "la raison", ex: "Was ist der Grund?" },
        { de: "zu spät", fr: "trop tard / en retard", ex: "Ich bin zu spät." },
        { de: "der Stau", fr: "l'embouteillage", ex: "Es gibt einen Stau." },
        { de: "verschlafen", fr: "ne pas se réveiller", ex: "Ich habe verschlafen." },
        { de: "vergessen", fr: "oublier", ex: "Ich habe es vergessen." },
        { de: "verpassen", fr: "rater (un train)", ex: "Ich habe den Bus verpasst." },
        { de: "tut mir leid", fr: "je suis désolé", ex: "Das tut mir leid!" },
        { de: "kein Problem", fr: "pas de problème", ex: "Kein Problem!" },
        { de: "krank sein", fr: "être malade", ex: "Ich war krank." },
        { de: "der Termin", fr: "le rendez-vous", ex: "Ich habe den Termin vergessen." },
        { de: "weil", fr: "parce que", ex: "Ich komme später, weil ich arbeite." },
        { de: "leider", fr: "malheureusement", ex: "Leider bin ich zu spät." }
      ],
      grammaire: [
        {
          titre: "La conjonction « weil » (parce que) — verbe à la FIN",
          intro:
            "« weil » introduit une cause. Attention : c'est une subordonnée, donc le verbe conjugué va à la TOUTE FIN.",
          tableau: {
            entetes: ["Phrase principale", "weil + ... + verbe (fin)"],
            lignes: [
              ["Ich bin zu spät,", "weil es einen Stau gibt."],
              ["Ich komme nicht,", "weil ich krank bin."],
              ["Sie ruft an,", "weil sie den Termin vergisst."]
            ]
          },
          note: "⚠️ Comparez : « denn ich bin krank » (verbe en 2e) vs « weil ich krank bin » (verbe à la fin). Même sens, syntaxe différente !"
        },
        {
          titre: "weil + Perfekt : se justifier au passé",
          intro: "Au passé composé dans une subordonnée, l'auxiliaire (haben/sein) va tout à la fin.",
          tableau: {
            entetes: ["Phrase", "Sens"],
            lignes: [
              ["..., weil ich verschlafen habe.", "... parce que je ne me suis pas réveillé."],
              ["..., weil ich den Bus verpasst habe.", "... parce que j'ai raté le bus."],
              ["..., weil der Zug Verspätung hatte.", "... parce que le train avait du retard."]
            ]
          },
          note: "Ordre dans la subordonnée : weil + sujet + ... + participe + auxiliaire (tout à la fin)."
        }
      ],
      dialogue: {
        titre: "Tut mir leid! (désolé !)",
        lieu: "Im Büro, 9:30 Uhr",
        lignes: [
          { loc: "Chef", de: "Sie sind zu spät, Herr Berg!", fr: "Vous êtes en retard, M. Berg !" },
          { loc: "Herr Berg", de: "Entschuldigung! Es tut mir leid.", fr: "Excusez-moi ! Je suis désolé." },
          { loc: "Chef", de: "Was ist der Grund?", fr: "Quelle est la raison ?" },
          { loc: "Herr Berg", de: "Ich bin zu spät, weil es einen Stau gab.", fr: "Je suis en retard parce qu'il y avait un embouteillage." },
          { loc: "Chef", de: "Und gestern?", fr: "Et hier ?" },
          { loc: "Herr Berg", de: "Gestern habe ich verschlafen. Das passiert nicht wieder!", fr: "Hier je ne me suis pas réveillé. Ça ne se reproduira plus !" }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Où va le verbe après « weil » ?",
          question: "Ich komme nicht, weil ich krank ___.",
          options: ["bin", "ist", "sein", "war"],
          correct: 0,
          explication: "Subordonnée avec weil : le verbe conjugué à la fin → ... weil ich krank bin."
        },
        {
          type: "qcm",
          consigne: "Choisissez la bonne suite.",
          question: "Ich bin zu spät, weil es einen Stau ___.",
          options: ["gibt", "gibt es", "es gibt", "geben"],
          correct: 0,
          explication: "Verbe à la fin : ... weil es einen Stau gibt."
        },
        {
          type: "trou",
          consigne: "Complétez la subordonnée (verbe à la fin).",
          texte: "Ich komme später, weil ich noch {0}. (arbeiten)",
          accepte: [["arbeite"]],
          indice: "weil → verbe conjugué tout à la fin"
        },
        {
          type: "association",
          consigne: "Associez l'expression et sa traduction.",
          paires: [
            { gauche: "Es tut mir leid", droite: "Je suis désolé" },
            { gauche: "der Stau", droite: "l'embouteillage" },
            { gauche: "verschlafen", droite: "ne pas se réveiller" },
            { gauche: "den Bus verpassen", droite: "rater le bus" },
            { gauche: "kein Problem", droite: "pas de problème" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la subordonnée (verbe à la fin).",
          mots: ["weil", "ich", "krank", "bin"],
          correct: "weil ich krank bin",
          traduction: "parce que je suis malade"
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Je suis en retard parce qu'il y a un embouteillage.",
          accepte: ["Ich bin zu spät, weil es einen Stau gibt", "Ich bin zu spät weil es einen Stau gibt"],
          aide: "weil ... gibt (verbe à la fin)"
        }
      ]
    }
  ]
};
