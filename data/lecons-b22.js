/* =====================================================================
   MODULE B2.2 — Travail, savoir, monde et récits
   Niveau B2 (CECRL). D'après la progression « Erkundungen B2 ».
   Thèmes : e-mails et appels professionnels, loisirs, université,
   histoire et politique, actualités internationales, histoires criminelles.
   ===================================================================== */
window.MODULE_B22 = {
  id: "b2-2",
  titre: "B2.2 — Travail, savoir & monde",
  sousTitre: "Arbeit, Wissen & Welt",
  niveau: "B2",
  description:
    "On affine son expression : e-mails et appels professionnels, loisirs et activités, " +
    "vie universitaire, histoire et politique, actualités du monde et récits policiers.",
  couleur: "#db2777",
  lecons: [
    {
      id: "b2t08",
      rp: {
        "scene": "Am Telefon (Beruf)",
        "intro": "Beruflicher Anruf. Zika ist am Apparat.",
        "fin": "Perfekt! Du gehst professionell ans Telefon.",
        "tours": [
          {
            "de": "Firma Berger, guten Tag. Mit wem spreche ich?",
            "options": [
              {
                "de": "Guten Tag, hier spricht Anna Klein.",
                "ok": true
              },
              {
                "de": "Ich bin ein Telefon.",
                "hint": "Stell dich vor: « Hier spricht … »."
              }
            ],
            "bravo": "Sehr gut!"
          },
          {
            "de": "Möchten Sie eine Nachricht hinterlassen?",
            "options": [
              {
                "de": "Ja, bitte sagen Sie ihm, er soll zurückrufen.",
                "ok": true
              },
              {
                "de": "Nein, ich bin eine Nachricht.",
                "hint": "« Ja, er soll zurückrufen » oder « Nein, danke »."
              }
            ],
            "bravo": "Genau!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema behandelt **berufliche E-Mails** und **Telefonate**. Schlüsselwörter sind *die E-Mail*, *der Betreff* (l'objet), *der Anhang* (la pièce jointe), *zurückrufen* (rappeler), *eine Nachricht hinterlassen* (laisser un message), *weiterleiten* (transférer).",
        "Wichtig ist der Unterschied zwischen **formell** und **informell**. Formell: « *Sehr geehrte Frau Müller … Mit freundlichen Grüßen* ». Informell: « *Hallo Anna … Liebe Grüße* ». Am Telefon meldet man sich mit dem Namen: « *Schmidt, guten Tag* ».",
        "Tipp: Schreibe eine kurze formelle und eine informelle E-Mail zum selben Thema. Der bewusste Wechsel des Registers ist eine wichtige B2-Fähigkeit, die du am besten durch Schreiben übst."
      ], numero: 8, titre: "E-mails et appels professionnels", titreDE: "E-Mails und Telefonate",
      theme: "Travail quotidien : e-mails et appels", duree: 60,
      objectifs: ["Rédiger un e-mail professionnel", "Mener un appel téléphonique formel"],
      grammairePoints: ["Registre formel", "Discours rapporté"],
      vocabulaire: [
        { de: "der Betreff", fr: "l'objet (du mail)", ex: "Schreiben Sie einen klaren Betreff." },
        { de: "die Anlage", fr: "la pièce jointe", ex: "Die Unterlagen finden Sie in der Anlage." },
        { de: "weiterleiten", fr: "transférer", ex: "Ich leite Ihnen die E-Mail weiter." },
        { de: "die Rückmeldung", fr: "le retour / la réponse", ex: "Ich bitte um eine kurze Rückmeldung." },
        { de: "der Termin", fr: "le rendez-vous", ex: "Können wir den Termin verschieben?" },
        { de: "zurückrufen", fr: "rappeler", ex: "Ich rufe Sie später zurück." },
        { de: "die Durchwahl", fr: "la ligne directe / poste", ex: "Wie ist Ihre Durchwahl?" },
        { de: "verbinden", fr: "mettre en relation (téléphone)", ex: "Ich verbinde Sie mit der Buchhaltung." }
      ],
      grammaire: [
        { attention: "*Sehr geehrte/r…* (formel) ; demande polie : *Könnten Sie…?*", titre: "Le registre formel à l'écrit et au téléphone", intro: "On emploie « Sie », des formules figées et des tournures polies (Konjunktiv II).",
          tableau: { entetes: ["Acte", "Formule"], lignes: [["Ouvrir (mail)", "Sehr geehrte Frau Klein, …"], ["Demander", "Ich würde mich freuen, wenn …"], ["Au téléphone", "Könnten Sie mir bitte sagen, …?"], ["Clore (mail)", "Mit freundlichen Grüßen"]] },
          note: "Le discours rapporté est fréquent : « Sie sagte, sie sei beschäftigt » (Konjunktiv I — voir B2.2)." }
      ],
      dialogue: {
        titre: "Ein Anruf im Büro", lieu: "Telefon",
        lignes: [
          { loc: "Frau Berg", de: "Guten Tag, könnte ich bitte Herrn Klein sprechen?", fr: "Bonjour, pourrais-je parler à M. Klein, s'il vous plaît ?" },
          { loc: "Sekretär", de: "Einen Moment, ich verbinde Sie.", fr: "Un instant, je vous mets en relation." },
          { loc: "Sekretär", de: "Er ist leider in einer Besprechung.", fr: "Il est malheureusement en réunion." },
          { loc: "Frau Berg", de: "Könnten Sie ihm ausrichten, dass ich angerufen habe?", fr: "Pourriez-vous lui transmettre que j'ai appelé ?" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum kann Herr Klein nicht sprechen?", options: ["Er ist in einer Besprechung", "Er ist krank", "Er ist im Urlaub"], correct: 0, explication: "« Er ist leider in einer Besprechung »." },
        { type: "qcm", consigne: "Choisissez (mail formel).", question: "Comment ouvrir un mail formel ?", options: ["Sehr geehrte Frau Klein", "Hallo Schatz", "Na, du?", "Hey"], correct: 0, explication: "Formule formelle : Sehr geehrte/r …" },
        { type: "trou", consigne: "Complétez (pièce jointe).", texte: "Die Unterlagen finden Sie in der {0}.", accepte: [["Anlage"]], indice: "pièce jointe = die Anlage" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Betreff", droite: "l'objet" }, { gauche: "die Rückmeldung", droite: "le retour" }, { gauche: "zurückrufen", droite: "rappeler" }, { gauche: "verbinden", droite: "mettre en relation" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Rédigez un court e-mail formel pour déplacer un rendez-vous (3 phrases).", attendus: ["Sehr geehrte", "Grüßen"], modele: "Sehr geehrter Herr Klein, leider muss ich unseren Termin am Montag verschieben. Wäre Mittwoch um 10 Uhr möglich? Mit freundlichen Grüßen, …" }
      ]
    },
    {
      id: "b2t09",
      rp: {
        "scene": "Freizeit & Verein",
        "intro": "Ihr sprecht über Vereine und Hobbys.",
        "fin": "Sehr gut! Du kannst über Freizeit sprechen.",
        "tours": [
          {
            "de": "Engagierst du dich in einem Verein?",
            "options": [
              {
                "de": "Ja, ich spiele in einem Sportverein.",
                "ok": true
              },
              {
                "de": "Ich bin ein Verein.",
                "hint": "« Ja, ich bin in einem … verein » oder « Nein »."
              }
            ],
            "bravo": "Prima!"
          },
          {
            "de": "Wie oft trainiert ihr?",
            "options": [
              {
                "de": "Zweimal pro Woche.",
                "ok": true
              },
              {
                "de": "In der Stadt.",
                "hint": "Zika fragt WIE OFT: « Zweimal pro Woche »."
              }
            ],
            "bravo": "Richtig!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem Thema vertiefst du **Aktivitäten** und **Freizeit** auf höherem Niveau. Schlüsselwörter sind *die Freizeitgestaltung* (l'organisation du temps libre), *das Ehrenamt* (le bénévolat), *der Verein* (l'association/le club), *sich engagieren* (s'engager), *die Abwechslung* (la variété).",
        "In Deutschland spielt der **Verein** eine große Rolle: Sportverein, Musikverein, Gesangverein. Viele Menschen engagieren sich **ehrenamtlich** (bénévolement). Nützliche Verben: *teilnehmen an* (+ Dativ), *beitreten* (+ Dativ), *organisieren*.",
        "Tipp: Beschreibe deine Freizeit und überlege, in welchem Verein du in Deutschland mitmachen würdest. So verbindest du Vokabular, Kultur und deine eigenen Interessen."
      ], numero: 9, titre: "Activités et loisirs", titreDE: "Aktivitäten und Freizeit",
      theme: "Activités et loisirs", duree: 55,
      objectifs: ["Parler de ses loisirs en détail", "Exprimer préférence et fréquence"],
      grammairePoints: ["Comparatif/superlatif", "Adverbes de fréquence"],
      vocabulaire: [
        { de: "die Freizeitgestaltung", fr: "l'organisation des loisirs", ex: "Meine Freizeitgestaltung ist abwechslungsreich." },
        { de: "sich entspannen", fr: "se détendre", ex: "Beim Lesen entspanne ich mich." },
        { de: "das Ehrenamt", fr: "le bénévolat", ex: "Ich engagiere mich im Ehrenamt." },
        { de: "die Abwechslung", fr: "le changement / la variété", ex: "Ich brauche Abwechslung." },
        { de: "der Ausgleich", fr: "le contrepoids / l'équilibre", ex: "Sport ist ein guter Ausgleich." },
        { de: "regelmäßig", fr: "régulièrement", ex: "Ich treibe regelmäßig Sport." },
        { de: "die Begeisterung", fr: "l'enthousiasme", ex: "Sie spricht mit Begeisterung davon." },
        { de: "ausprobieren", fr: "essayer (tester)", ex: "Ich möchte etwas Neues ausprobieren." }
      ],
      grammaire: [
        { attention: "Échelle de fréquence : *immer > meistens > oft > manchmal > selten > nie*. Préférence : *am liebsten*.", titre: "Préférence, fréquence, intensité", intro: "On nuance avec le superlatif (am liebsten), les adverbes de fréquence et les degrés.",
          tableau: { entetes: ["Nuance", "Mot", "Exemple"], lignes: [["préférence", "am liebsten", "Am liebsten lese ich."], ["fréquence", "meistens / selten", "Ich gehe meistens joggen."], ["comparaison", "lieber … als", "Ich wandere lieber als ich jogge."], ["intensité", "ziemlich / besonders", "Das macht besonders viel Spaß."]] },
          note: "Échelle de fréquence : immer > meistens > oft > manchmal > selten > nie." }
      ],
      dialogue: {
        titre: "Was machst du am Wochenende?", lieu: "Pause",
        lignes: [
          { loc: "Nils", de: "Was machst du in deiner Freizeit am liebsten?", fr: "Que préfères-tu faire pendant ton temps libre ?" },
          { loc: "Eva", de: "Am liebsten klettere ich, als Ausgleich zum Büro.", fr: "Je préfère l'escalade, comme contrepoids au bureau." },
          { loc: "Nils", de: "Klingt anstrengend, aber spannend.", fr: "Ça a l'air fatigant, mais passionnant." },
          { loc: "Eva", de: "Du solltest es mal ausprobieren!", fr: "Tu devrais essayer un jour !" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was macht Eva am liebsten?", options: ["Klettern", "Joggen", "Lesen"], correct: 0, explication: "« Am liebsten klettere ich »." },
        { type: "qcm", consigne: "Choisissez (préférence).", question: "Ich wandere ___ als ich jogge.", options: ["lieber", "gern", "am liebsten", "mehr gern"], correct: 0, explication: "comparatif de gern → lieber … als." },
        { type: "trou", consigne: "Complétez (fréquence).", texte: "Ich treibe {0} Sport, fast jeden Tag.", accepte: [["regelmäßig"]], indice: "régulièrement = regelmäßig" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Ausgleich", droite: "l'équilibre" }, { gauche: "die Abwechslung", droite: "la variété" }, { gauche: "das Ehrenamt", droite: "le bénévolat" }, { gauche: "ausprobieren", droite: "essayer" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Parlez de votre loisir préféré et de sa fréquence (am liebsten, regelmäßig).", attendus: ["liebsten", "Freizeit"], modele: "In meiner Freizeit lese ich am liebsten. Außerdem treibe ich regelmäßig Sport, das ist ein guter Ausgleich." }
      ]
    },
    {
      id: "b2t10",
      rp: {
        "scene": "An der Universität",
        "intro": "Ihr sprecht über das Studium.",
        "fin": "Bravo! Du kannst über das Studium sprechen.",
        "tours": [
          {
            "de": "Was studierst du?",
            "options": [
              {
                "de": "Ich studiere Informatik.",
                "ok": true
              },
              {
                "de": "Ich bin eine Universität.",
                "hint": "« Ich studiere … » + Fach."
              }
            ],
            "bravo": "Perfekt!"
          },
          {
            "de": "Wie gefallen dir die Vorlesungen?",
            "options": [
              {
                "de": "Sie sind interessant, aber anspruchsvoll.",
                "ok": true
              },
              {
                "de": "Ich habe Hunger.",
                "hint": "Antworte zur Uni: « interessant », « schwierig »."
              }
            ],
            "bravo": "Bravo!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema behandelt die **Universität** und das **Studium**. Schlüsselwörter sind *die Universität*, *das Studienfach* (la matière), *die Vorlesung* (le cours magistral), *das Seminar*, *die Prüfung*, *der Bachelor / der Master*, *die Bibliothek*.",
        "Beachte typische Wörter des Studiums: *sich einschreiben* (s'inscrire), *das Semester*, *die Hausarbeit* (le mémoire), *die Note*. Wichtig ist auch *das Abitur* (le bac), die Voraussetzung fürs Studium an der Universität.",
        "Tipp: Beschreibe ein Studienfach, das dich interessiert, und warum. Auch wenn du nicht studierst, ist dieses Vokabular nützlich, um über Bildung und Ziele auf B2-Niveau zu sprechen."
      ], numero: 10, titre: "L'université", titreDE: "Universität und Studium",
      theme: "Université", duree: 60,
      objectifs: ["Décrire la vie universitaire", "Comprendre l'organisation des études"],
      grammairePoints: ["Nominalisation", "Subordonnées avec dass"],
      vocabulaire: [
        { de: "die Vorlesung", fr: "le cours magistral", ex: "Die Vorlesung beginnt um neun." },
        { de: "das Seminar", fr: "le séminaire / TD", ex: "Im Seminar diskutieren wir viel." },
        { de: "die Prüfungsordnung", fr: "le règlement des examens", ex: "Lies die Prüfungsordnung genau." },
        { de: "der Leistungsnachweis", fr: "l'attestation de réussite", ex: "Ich brauche einen Leistungsnachweis." },
        { de: "die Hausarbeit", fr: "le dossier / mémoire", ex: "Die Hausarbeit ist nächste Woche fällig." },
        { de: "sich einschreiben", fr: "s'inscrire", ex: "Ich schreibe mich für das Studium ein." },
        { de: "das Stipendium", fr: "la bourse", ex: "Sie hat ein Stipendium bekommen." },
        { de: "der Dozent", fr: "l'enseignant (universitaire)", ex: "Der Dozent ist sehr engagiert." }
      ],
      grammaire: [
        { attention: "*dass* → verbe **à la fin** ; souvent remplaçable par une nominalisation (*Ich hoffe **auf** ein Stipendium*).", titre: "Rapporter un contenu avec « dass »", intro: "Après les verbes d'opinion ou de déclaration, « dass » introduit une subordonnée (verbe à la fin).",
          tableau: { entetes: ["Verbe introducteur", "Exemple"], lignes: [["sagen, dass", "Der Dozent sagt, dass die Prüfung schwer ist."], ["denken, dass", "Ich denke, dass das Seminar nützlich ist."], ["wichtig sein, dass", "Es ist wichtig, dass man sich einschreibt."], ["hoffen, dass", "Ich hoffe, dass ich das Stipendium bekomme."]] },
          schemas: [{ legende: "dass : verbe conjugué à la FIN.", mots: [{ m: "Ich denke,", r: "principale", c: "objet" }, { m: "dass", r: "subordination", c: "conj" }, { m: "das Seminar nützlich", r: "sujet + complément", c: "sujet" }, { m: "ist", r: "verbe (fin)", c: "fin" }] }],
          note: "On peut souvent remplacer « dass + phrase » par un groupe nominalisé : « Ich hoffe auf ein Stipendium »." }
      ],
      dialogue: {
        titre: "Im Studierendensekretariat", lieu: "Universität",
        lignes: [
          { loc: "Student", de: "Ich möchte mich für den Masterstudiengang einschreiben.", fr: "Je voudrais m'inscrire au master." },
          { loc: "Mitarbeiterin", de: "Haben Sie alle Leistungsnachweise dabei?", fr: "Avez-vous toutes vos attestations ?" },
          { loc: "Student", de: "Ja, und ich hoffe, dass die Frist noch läuft.", fr: "Oui, et j'espère que le délai court encore." },
          { loc: "Mitarbeiterin", de: "Sie haben Glück, sie endet morgen.", fr: "Vous avez de la chance, il se termine demain." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was möchte der Student?", options: ["Sich einschreiben", "Eine Prüfung absagen", "Ein Zimmer mieten"], correct: 0, explication: "« mich für den Masterstudiengang einschreiben »." },
        { type: "qcm", consigne: "Choisissez (verbe à la fin).", question: "Ich denke, dass das Seminar nützlich ___.", options: ["ist", "ist nicht heute", "es ist", "sein"], correct: 0, explication: "dass → verbe à la fin : … nützlich ist." },
        { type: "trou", consigne: "Complétez (dass).", texte: "Es ist wichtig, {0} man sich rechtzeitig einschreibt.", accepte: [["dass"]], indice: "subordonnée complétive → dass" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Vorlesung", droite: "le cours magistral" }, { gauche: "die Hausarbeit", droite: "le dossier" }, { gauche: "das Stipendium", droite: "la bourse" }, { gauche: "sich einschreiben", droite: "s'inscrire" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Décrivez en 2-3 phrases une différence entre l'école et l'université (dass).", attendus: ["dass", "Universität"], modele: "An der Universität denke ich, dass man selbstständiger arbeiten muss. Es ist wichtig, dass man seine Zeit gut einteilt." }
      ]
    },
    {
      id: "b2t11",
      rp: {
        "scene": "Geschichte & Politik",
        "intro": "Ihr sprecht über Politik.",
        "fin": "Stark! Du kannst über Politik sprechen.",
        "tours": [
          {
            "de": "Gehst du wählen?",
            "options": [
              {
                "de": "Ja, wählen ist mir wichtig.",
                "ok": true
              },
              {
                "de": "Ich bin eine Wahl.",
                "hint": "« Ja, ich wähle » oder « Nein »."
              }
            ],
            "bravo": "Stark!"
          },
          {
            "de": "Welches Thema interessiert dich in der Politik?",
            "options": [
              {
                "de": "Vor allem die Umweltpolitik.",
                "ok": true
              },
              {
                "de": "Ich bin Politik.",
                "hint": "Nenne ein Thema: « die Umweltpolitik »."
              }
            ],
            "bravo": "Sehr gut!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem Thema geht es um **Geschichte** und **Politik** – anspruchsvolle, aber wichtige Felder. Schlüsselwörter sind *die Regierung* (le gouvernement), *die Wahl* (l'élection), *die Demokratie*, *das Gesetz* (la loi), *die Partei* (le parti), *der Bürger* (le citoyen).",
        "Viele politische Begriffe sind **Nomen auf -ung** (*die Regierung, die Verfassung* la constitution) oder international (*die Demokratie, die Republik*). Nützlich sind auch *wählen* (élire / voter) und *abstimmen über* (voter sur).",
        "Tipp: Lies einfache Nachrichten auf Deutsch und sammle politisches Vokabular. Dieses Feld ist abstrakt, aber unverzichtbar, um Zeitungen zu verstehen und über aktuelle Themen mitzureden."
      ], numero: 11, titre: "Histoire et politique", titreDE: "Geschichte und Politik",
      theme: "Histoire et politique", duree: 60,
      objectifs: ["Parler d'événements historiques", "Comprendre le système politique allemand"],
      grammairePoints: ["Prétérit (récit historique)", "Passif"],
      vocabulaire: [
        { de: "die Wiedervereinigung", fr: "la réunification", ex: "Die Wiedervereinigung war 1990." },
        { de: "die Mauer", fr: "le mur", ex: "Die Mauer fiel 1989." },
        { de: "die Demokratie", fr: "la démocratie", ex: "Deutschland ist eine Demokratie." },
        { de: "die Wahl", fr: "l'élection", ex: "Die Wahl findet alle vier Jahre statt." },
        { de: "die Regierung", fr: "le gouvernement", ex: "Die Regierung beschloss ein Gesetz." },
        { de: "der Bundeskanzler", fr: "le chancelier fédéral", ex: "Der Bundeskanzler wird gewählt." },
        { de: "die Verfassung", fr: "la constitution", ex: "Die Verfassung schützt die Grundrechte." },
        { de: "die Teilung", fr: "la division", ex: "Die Teilung dauerte vierzig Jahre." }
      ],
      grammaire: [
        { attention: "Récit au **Präteritum** ; le passif met l'événement en avant (*wurde … verabschiedet*).", titre: "Raconter l'Histoire : prétérit et passif", intro: "Le récit historique se fait au Präteritum ; le passif met l'événement au premier plan.",
          tableau: { entetes: ["Forme", "Exemple"], lignes: [["Präteritum", "Die Mauer fiel 1989."], ["Passif (prétérit)", "Das Gesetz wurde 1949 verabschiedet."], ["Plusquamperfekt", "Nachdem die Mauer gefallen war, …"], ["Passif + agent", "Der Kanzler wurde vom Bundestag gewählt."]] },
          note: "Dates : « 1990 » se dit « neunzehnhundertneunzig » ; on dit aussi « im Jahr 1990 »." }
      ],
      dialogue: {
        titre: "Ein Gespräch über 1989", lieu: "Museum",
        lignes: [
          { loc: "Guide", de: "Wissen Sie, wann die Mauer fiel?", fr: "Savez-vous quand le mur est tombé ?" },
          { loc: "Besucher", de: "1989, und die Wiedervereinigung war ein Jahr später.", fr: "En 1989, et la réunification a eu lieu un an plus tard." },
          { loc: "Guide", de: "Genau. Viele Gesetze wurden danach geändert.", fr: "Exactement. Beaucoup de lois ont été modifiées ensuite." },
          { loc: "Besucher", de: "Eine bewegte Zeit.", fr: "Une époque mouvementée." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wann fiel die Mauer?", options: ["1989", "1990", "1949"], correct: 0, explication: "« 1989 »." },
        { type: "qcm", consigne: "Choisissez (passif prétérit).", question: "Das Gesetz ___ 1949 verabschiedet.", options: ["wurde", "wird", "ist", "hat"], correct: 0, explication: "passif au prétérit → wurde + participe." },
        { type: "trou", consigne: "Complétez (prétérit).", texte: "Die Mauer {0} 1989. (fallen)", accepte: [["fiel"]], indice: "fallen → fiel" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Wiedervereinigung", droite: "la réunification" }, { gauche: "die Wahl", droite: "l'élection" }, { gauche: "die Regierung", droite: "le gouvernement" }, { gauche: "die Verfassung", droite: "la constitution" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Racontez en 2-3 phrases un événement historique (prétérit / passif).", attendus: ["wurde", "fiel"], modele: "1989 fiel die Berliner Mauer. Ein Jahr später wurde Deutschland wiedervereinigt. Viele Gesetze wurden danach geändert." }
      ]
    },
    {
      id: "b2t12",
      rp: {
        "scene": "Nachrichten",
        "intro": "Ihr sprecht über Medien und Nachrichten.",
        "fin": "Sehr gut! Du bist kritisch informiert.",
        "tours": [
          {
            "de": "Wie informierst du dich über das Weltgeschehen?",
            "options": [
              {
                "de": "Ich lese mehrere Nachrichtenseiten.",
                "ok": true
              },
              {
                "de": "Ich bin eine Nachricht.",
                "hint": "Nenne eine Quelle: « Ich lese … »."
              }
            ],
            "bravo": "Genau!"
          },
          {
            "de": "Vertraust du allen Quellen?",
            "options": [
              {
                "de": "Nein, ich prüfe die Quelle immer.",
                "ok": true
              },
              {
                "de": "Ja, allen.",
                "hint": "Kritisch bleiben: « Nein, ich prüfe die Quelle »."
              }
            ],
            "bravo": "Prima!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema dreht sich um **internationale Nachrichten**. Schlüsselwörter sind *die Nachricht* (l'information), *das Ereignis* (l'événement), *die Katastrophe*, *die Krise*, *berichten über* (rapporter), *die Quelle* (la source), *zuverlässig* (fiable).",
        "Auf B2-Niveau geht es auch um **kritisches Lesen**: Was ist eine Tatsache (*die Tatsache*), was eine Meinung (*die Meinung*)? Nützliche Verben sind *behaupten* (affirmer), *bezweifeln* (douter), *bestätigen* (confirmer).",
        "Tipp: Vergleiche, wie zwei verschiedene Quellen dasselbe Ereignis darstellen. Diese kritische Medienkompetenz auf Deutsch zu üben, ist genau das richtige Niveau für B2."
      ], numero: 12, titre: "Actualités du monde", titreDE: "Nachrichten aus aller Welt",
      theme: "Actualités internationales", duree: 60,
      objectifs: ["Comprendre une information journalistique", "Résumer et commenter une nouvelle"],
      grammairePoints: ["Discours indirect (Konjunktiv I)", "Nominalisation"],
      vocabulaire: [
        { de: "die Schlagzeile", fr: "le gros titre", ex: "Die Schlagzeile war alarmierend." },
        { de: "die Meldung", fr: "la dépêche / l'info", ex: "Laut einer Meldung steigt die Inflation." },
        { de: "berichten", fr: "rapporter / faire un reportage", ex: "Die Zeitung berichtet über die Krise." },
        { de: "die Quelle", fr: "la source", ex: "Prüfe immer die Quelle." },
        { de: "zuverlässig", fr: "fiable", ex: "Eine zuverlässige Quelle ist wichtig." },
        { de: "die Auswirkung", fr: "la conséquence / l'impact", ex: "Die Auswirkungen sind weltweit spürbar." },
        { de: "die Lage", fr: "la situation", ex: "Die Lage hat sich verschärft." },
        { de: "ereignen", fr: "se produire", ex: "Der Unfall ereignete sich gestern." }
      ],
      grammaire: [
        { attention: "**Konjunktiv I** (*sei, habe*) pour citer ; si la forme = indicatif (pluriel) → **Konjunktiv II**.", titre: "Rapporter une nouvelle : discours indirect (Konjunktiv I)", intro: "La presse emploie le Konjunktiv I pour citer sans s'engager : « Der Minister sagte, er sei zuversichtlich. »",
          tableau: { entetes: ["Direct", "Indirect (Konjunktiv I)"], lignes: [["« Ich bin müde. »", "Er sagt, er sei müde."], ["« Wir haben es geprüft. »", "Sie sagen, sie hätten es geprüft."], ["« Die Lage ist ernst. »", "Es heißt, die Lage sei ernst."], ["« Ich kann nicht kommen. »", "Er sagt, er könne nicht kommen."]] },
          note: "Si le Konjunktiv I ressemble à l'indicatif (par ex. « sie haben »), on emploie le Konjunktiv II (« sie hätten ») — voir B2.2." }
      ],
      dialogue: {
        titre: "Über die Nachrichten", lieu: "Café",
        lignes: [
          { loc: "Lia", de: "Hast du die Schlagzeile heute gelesen?", fr: "As-tu lu le gros titre aujourd'hui ?" },
          { loc: "Ben", de: "Ja, es heißt, die Preise seien wieder gestiegen.", fr: "Oui, on dit que les prix ont encore augmenté." },
          { loc: "Lia", de: "Stimmt die Quelle denn?", fr: "La source est-elle fiable au fait ?" },
          { loc: "Ben", de: "Sie gilt als zuverlässig.", fr: "Elle passe pour fiable." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was berichtet die Schlagzeile?", options: ["Die Preise sind gestiegen", "Es gibt Frieden", "Das Wetter wird gut"], correct: 0, explication: "« die Preise seien wieder gestiegen »." },
        { type: "qcm", consigne: "Choisissez (Konjunktiv I).", question: "Er sagt, er ___ zuversichtlich.", options: ["sei", "ist", "war", "wäre gewesen"], correct: 0, explication: "discours indirect → Konjunktiv I : sei." },
        { type: "trou", consigne: "Complétez (Konjunktiv I de sein, pluriel).", texte: "Es heißt, die Preise {0} gestiegen.", accepte: [["seien"]], indice: "Konjunktiv I pluriel de sein → seien" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Schlagzeile", droite: "le gros titre" }, { gauche: "die Quelle", droite: "la source" }, { gauche: "zuverlässig", droite: "fiable" }, { gauche: "die Auswirkung", droite: "l'impact" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Résumez une actualité récente au discours indirect (Er/Sie sagt, … sei/habe …).", attendus: ["sei", "sagt"], modele: "In den Nachrichten heißt es, die Lage sei ernst. Ein Experte sagt, man müsse schnell handeln." }
      ]
    },
    {
      id: "b2t13",
      rp: {
        "scene": "Als Zeuge",
        "intro": "Du bist Zeuge. Zika ist Polizist.",
        "fin": "Bravo! Du hast den B2-Wortschatz gemeistert!",
        "tours": [
          {
            "de": "Haben Sie gesehen, was passiert ist?",
            "options": [
              {
                "de": "Ja, ein Mann hat eine Tasche gestohlen.",
                "ok": true
              },
              {
                "de": "Ich bin ein Dieb.",
                "hint": "Beschreibe als Zeuge: « Ein Mann hat … gestohlen »."
              }
            ],
            "bravo": "Richtig!"
          },
          {
            "de": "Können Sie den Täter beschreiben?",
            "options": [
              {
                "de": "Er war groß und trug eine schwarze Jacke.",
                "ok": true
              },
              {
                "de": "Ich weiß nicht, wie spät es ist.",
                "hint": "Beschreibe die Person: « Er war groß / trug … »."
              }
            ],
            "bravo": "Perfekt!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem unterhaltsamen Thema geht es um **Kriminalgeschichten** und Krimis. Schlüsselwörter sind *das Verbrechen* (le crime), *der Täter* (l'auteur du crime), *das Opfer* (la victime), *der Zeuge* (le témoin), *die Ermittlung* (l'enquête), *der Verdacht* (le soupçon).",
        "Krimis sind ideal, um die **Vergangenheitsformen** zu üben, denn man erzählt, was passiert ist. Nützliche Verben: *stehlen* (voler), *einbrechen* (cambrioler), *verdächtigen* (soupçonner), *aufklären* (élucider), *verhaften* (arrêter).",
        "Tipp: Erzähle eine kurze Krimigeschichte im Präteritum (« *Eines Abends…* »). Geschichten zu erzählen verbindet spannendes Vokabular mit den Erzähltempora – eine perfekte, motivierende B2-Übung."
      ], numero: 13, titre: "Histoires criminelles", titreDE: "Kriminalgeschichten",
      theme: "Histoires criminelles", duree: 60,
      objectifs: ["Raconter un fait divers", "Formuler des hypothèses sur un coupable"],
      grammairePoints: ["Prétérit (récit)", "Supposition (Modalverben subjectifs)"],
      vocabulaire: [
        { de: "der Täter", fr: "le coupable / l'auteur", ex: "Der Täter ist noch flüchtig." },
        { de: "das Opfer", fr: "la victime", ex: "Das Opfer blieb unverletzt." },
        { de: "der Zeuge", fr: "le témoin", ex: "Ein Zeuge hat alles gesehen." },
        { de: "der Verdacht", fr: "le soupçon", ex: "Der Verdacht fiel auf den Nachbarn." },
        { de: "ermitteln", fr: "enquêter", ex: "Die Polizei ermittelt." },
        { de: "der Beweis", fr: "la preuve", ex: "Es fehlen die Beweise." },
        { de: "verhaften", fr: "arrêter", ex: "Der Verdächtige wurde verhaftet." },
        { de: "das Alibi", fr: "l'alibi", ex: "Er hat ein wasserdichtes Alibi." }
      ],
      grammaire: [
        { attention: "Supposition au passé : *Es **könnte** der Nachbar **gewesen sein***.", titre: "Raconter et supposer", intro: "Le récit policier se fait au Präteritum ; pour les hypothèses, on emploie les modaux au sens subjectif (könnte, müsste, dürfte).",
          tableau: { entetes: ["Fonction", "Forme", "Exemple"], lignes: [["récit", "Präteritum", "Der Täter floh in die Nacht."], ["hypothèse possible", "könnte", "Es könnte der Nachbar gewesen sein."], ["hypothèse probable", "dürfte/müsste", "Der Zeuge dürfte sich irren."], ["passif", "wurde + participe", "Der Verdächtige wurde verhaftet."]] },
          note: "« könnte … gewesen sein » = supposition au passé. Le Plusquamperfekt situe ce qui précède le crime." }
      ],
      dialogue: {
        titre: "Am Tatort", lieu: "Polizei",
        lignes: [
          { loc: "Kommissar", de: "Wer könnte ein Motiv gehabt haben?", fr: "Qui pourrait avoir eu un mobile ?" },
          { loc: "Assistent", de: "Der Nachbar hatte gestritten, er dürfte verdächtig sein.", fr: "Le voisin s'était disputé, il doit être suspect." },
          { loc: "Kommissar", de: "Aber er hat ein Alibi.", fr: "Mais il a un alibi." },
          { loc: "Assistent", de: "Dann müssen wir weiter ermitteln.", fr: "Alors nous devons continuer à enquêter." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum ist der Nachbar verdächtig?", options: ["Er hatte gestritten", "Er war im Urlaub", "Er ist Polizist"], correct: 0, explication: "« Der Nachbar hatte gestritten »." },
        { type: "qcm", consigne: "Choisissez (hypothèse passée).", question: "Es ___ der Nachbar gewesen sein.", options: ["könnte", "kann nicht heute", "konnte", "darf"], correct: 0, explication: "supposition au passé → könnte … gewesen sein." },
        { type: "trou", consigne: "Complétez (passif prétérit).", texte: "Der Verdächtige {0} gestern verhaftet.", accepte: [["wurde"]], indice: "passif prétérit → wurde + participe" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Täter", droite: "le coupable" }, { gauche: "das Opfer", droite: "la victime" }, { gauche: "der Zeuge", droite: "le témoin" }, { gauche: "der Beweis", droite: "la preuve" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Écrivez le début d'un fait divers (prétérit) avec une hypothèse (könnte/dürfte).", attendus: ["wurde", "könnte"], modele: "Gestern Nacht wurde in ein Geschäft eingebrochen. Ein Zeuge sah eine Person fliehen. Es könnte ein Bekannter gewesen sein, doch es fehlen noch Beweise." }
      ]
    }
  ]
};
