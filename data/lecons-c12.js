/* =====================================================================
   MODULE C1.2 — Progrès, mémoire et culture
   Niveau C1 (CECRL). Thèmes : le progrès, l'environnement et le climat,
   la division de l'Allemagne, le Mur, la vie en RDA, histoire et politique,
   musique et photographie. Registre soutenu, contenu culturel.
   ===================================================================== */
window.MODULE_C12 = {
  id: "c1-2",
  titre: "C1.2 — Progrès, mémoire & culture",
  sousTitre: "Fortschritt, Geschichte & Kultur",
  niveau: "C1",
  description:
    "On débat et on raconte avec recul : le progrès et ses limites, l'environnement, " +
    "la division de l'Allemagne, le Mur et la vie en RDA, l'histoire politique, " +
    "la musique et la photographie.",
  couleur: "#ea580c",
  lecons: [
    {
      id: "c1t08",
      rp: {
        "scene": "Über Fortschritt",
        "intro": "Diskutiere über den Fortschritt.",
        "fin": "Genau!",
        "tours": [
          {
            "de": "Ist technischer Fortschritt immer positiv?",
            "options": [
              {
                "de": "Nicht unbedingt, er hat auch Risiken.",
                "ok": true
              },
              {
                "de": "Ja, immer.",
                "hint": "Differenziere: « Nicht unbedingt, … »."
              }
            ],
            "bravo": "Bravo!"
          },
          {
            "de": "Können Sie ein Beispiel nennen?",
            "options": [
              {
                "de": "Künstliche Intelligenz bietet Chancen und Gefahren.",
                "ok": true
              },
              {
                "de": "Nein.",
                "hint": "Gib ein Beispiel mit Vor- und Nachteil."
              }
            ],
            "bravo": "Stark!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema behandelt den **Fortschritt** – technisch, wissenschaftlich und gesellschaftlich. Schlüsselwörter sind *der Fortschritt*, *die Entwicklung*, *die Erfindung* (l'invention), *die Forschung* (la recherche), *die Innovation*, *der Wandel* (le changement).",
        "Auf C1 betrachtest du den Fortschritt **kritisch**: *die Chance* vs. *das Risiko*, *der Nutzen* (l'utilité) vs. *die Gefahr*, *die Folgen* (les conséquences). Nützliche Verben: *ermöglichen* (rendre possible), *gefährden* (mettre en danger), *bewerten* (évaluer).",
        "Tipp: Wäge Vor- und Nachteile einer technischen Entwicklung ab (zum Beispiel der künstlichen Intelligenz). Das **Abwägen** von Argumenten ist eine der wichtigsten C1-Fähigkeiten."
      ], numero: 8, titre: "Le progrès", titreDE: "Der Fortschritt",
      theme: "Le progrès", duree: 60,
      objectifs: ["Débattre des bienfaits et risques du progrès", "Exprimer des hypothèses nuancées"],
      grammairePoints: ["Hypothèses (dürfte, vermutlich)", "Nominalisation"],
      exemplesPlus: [{"de":"Künstliche Intelligenz ist Segen und Fluch zugleich.","fr":"*der Segen* = etwas sehr Positives; Gegenteil: *der Fluch*."},{"de":"Diese Erfindung war wirklich bahnbrechend.","fr":"*bahnbrechend* = völlig neu und richtungsweisend."},{"de":"Der medizinische Fortschritt rettet Leben.","fr":"*der Fortschritt* = eine positive Entwicklung."},{"de":"Man muss die ethischen Auswirkungen bedenken.","fr":"*ethisch* = die Moral, Gut und Böse betreffend."},{"de":"Das Internet ist eine große Errungenschaft.","fr":"*die Errungenschaft* = ein wichtiges, erreichtes Ergebnis."}],
      vocabulaire: [
        { de: "der Fortschritt", fr: "le progrès", ex: "Der technische Fortschritt ist rasant." },
        { de: "die Errungenschaft", fr: "l'acquis / la conquête", ex: "Das Internet ist eine große Errungenschaft." },
        { de: "die Künstliche Intelligenz", fr: "l'intelligence artificielle", ex: "Künstliche Intelligenz verändert die Arbeit." },
        { de: "die Auswirkung", fr: "la répercussion", ex: "Die Auswirkungen sind kaum absehbar." },
        { de: "der Segen", fr: "la bénédiction", ex: "Fortschritt ist Segen und Fluch zugleich." },
        { de: "der Fluch", fr: "la malédiction", ex: "Für manche ist er ein Fluch." },
        { de: "ethisch", fr: "éthique", ex: "Es stellen sich ethische Fragen." },
        { de: "bahnbrechend", fr: "révolutionnaire (pionnier)", ex: "Eine bahnbrechende Entdeckung." }
      ],
      grammaire: [
        { attention: "En tête, l'adverbe (*vermutlich, womöglich*) entraîne l'**inversion** (verbe en 2ᵉ).", titre: "Nuancer une hypothèse sur l'avenir", intro: "On exprime la probabilité avec des modaux (dürfte) et des adverbes (vermutlich, womöglich).",
          tableau: { entetes: ["Degré", "Moyen", "Exemple"], lignes: [["probable", "dürfte / wird wohl", "Die KI dürfte vieles verändern."], ["vraisemblable", "vermutlich", "Vermutlich verlieren manche ihren Job."], ["possible", "könnte / womöglich", "Womöglich entstehen neue Berufe."], ["certain", "zweifellos", "Zweifellos bringt das Risiken."]] },
          note: "Ces marqueurs (vermutlich, womöglich, zweifellos) se placent souvent en 1re position → inversion (verbe en 2e)." }
      ],
      dialogue: {
        titre: "Fluch oder Segen?", lieu: "Podiumsdiskussion",
        lignes: [
          { loc: "Moderator", de: "Ist der technische Fortschritt eher Segen oder Fluch?", fr: "Le progrès technique est-il plutôt une bénédiction ou une malédiction ?" },
          { loc: "Expertin", de: "Beides. Er dürfte unser Leben erleichtern, wirft aber ethische Fragen auf.", fr: "Les deux. Il devrait faciliter notre vie, mais soulève des questions éthiques." },
          { loc: "Moderator", de: "Und die Arbeitsplätze?", fr: "Et les emplois ?" },
          { loc: "Expertin", de: "Vermutlich verschwinden einige, womöglich entstehen andere.", fr: "Vraisemblablement certains disparaîtront, peut-être d'autres apparaîtront." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie sieht die Expertin den Fortschritt?", options: ["Als Segen und Fluch zugleich", "Nur positiv", "Nur negativ"], correct: 0, explication: "« Beides … wirft ethische Fragen auf »." },
        { type: "qcm", consigne: "Choisissez (probabilité).", question: "Die KI ___ vieles verändern.", options: ["dürfte", "darf", "durfte", "muss nicht"], correct: 0, explication: "dürfte = probabilité." },
        { type: "trou", consigne: "Complétez (inversion après adverbe).", texte: "Vermutlich {0} einige Berufe. (verschwinden)", accepte: [["verschwinden"]], indice: "adverbe en tête → verbe en 2e position" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Errungenschaft", droite: "l'acquis" }, { gauche: "der Segen", droite: "la bénédiction" }, { gauche: "der Fluch", droite: "la malédiction" }, { gauche: "bahnbrechend", droite: "révolutionnaire" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Donnez un avantage et un risque du progrès technique (dürfte, vermutlich).", attendus: ["Fortschritt", "dürfte"], modele: "Der Fortschritt dürfte unseren Alltag erleichtern. Vermutlich entstehen neue Möglichkeiten, allerdings wirft die KI auch ethische Fragen auf." }
      ]
    },
    {
      id: "c1t09",
      rp: {
        "scene": "Umwelt & Klima",
        "intro": "Ihr sprecht über Klimaschutz.",
        "fin": "Sehr gut!",
        "tours": [
          {
            "de": "Was sollte man gegen den Klimawandel tun?",
            "options": [
              {
                "de": "Wir sollten erneuerbare Energien fördern.",
                "ok": true
              },
              {
                "de": "Nichts, das ist normal.",
                "hint": "Schlage etwas vor: « Wir sollten … »."
              }
            ],
            "bravo": "Sehr gut!"
          },
          {
            "de": "Tun Sie selbst etwas für die Umwelt?",
            "options": [
              {
                "de": "Ja, ich fahre meistens mit dem Rad.",
                "ok": true
              },
              {
                "de": "Ich fahre gern Auto.",
                "hint": "Nenne eine konkrete Handlung."
              }
            ],
            "bravo": "Genau!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem Thema geht es um **Umwelt** und **Klima** auf anspruchsvollem Niveau. Schlüsselwörter sind *der Klimawandel* (le changement climatique), *die Nachhaltigkeit* (la durabilité), *die erneuerbaren Energien* (les énergies renouvelables), *der CO2-Ausstoß* (les émissions de CO2), *schützen* (protéger).",
        "Viele Begriffe sind komplexe **Komposita** (*Klimaschutz, Umweltverschmutzung, Energiewende* la transition énergétique), die du in ihre Teile zerlegen kannst. Nützliche Wendungen: *Maßnahmen ergreifen* (prendre des mesures), *den Verbrauch senken* (réduire la consommation).",
        "Tipp: Formuliere konkrete Vorschläge zum Umweltschutz und begründe sie. Über ein gesellschaftlich wichtiges Thema strukturiert zu argumentieren, ist genau das, was auf C1 verlangt wird."
      ], numero: 9, titre: "Environnement et climat", titreDE: "Umwelt und Klima",
      theme: "Environnement et climat", duree: 60,
      objectifs: ["Argumenter sur le climat", "Proposer des solutions au passif"],
      grammairePoints: ["Passif et alternatives", "Connecteurs de conséquence"],
      exemplesPlus: [{"de":"Wir müssen den CO2-Ausstoß deutlich eindämmen.","fr":"*eindämmen* = begrenzen, verringern."},{"de":"Erneuerbare Energien schonen die Ressourcen.","fr":"*erneuerbar* = praktisch unbegrenzt verfügbar (Sonne, Wind)."},{"de":"Nachhaltigkeit bedeutet, an die Zukunft zu denken.","fr":"*die Nachhaltigkeit* = so handeln, dass die Ressourcen erhalten bleiben."},{"de":"Der Treibhauseffekt verstärkt den Klimawandel.","fr":"*der Treibhauseffekt* = die Erwärmung durch Gase in der Atmosphäre."},{"de":"Ein gewisser Verzicht ist unvermeidlich.","fr":"*der Verzicht* = das bewusste Weglassen von etwas."}],
      vocabulaire: [
        { de: "der Klimawandel", fr: "le changement climatique", ex: "Der Klimawandel schreitet voran." },
        { de: "der Treibhauseffekt", fr: "l'effet de serre", ex: "Der Treibhauseffekt verstärkt sich." },
        { de: "der CO2-Ausstoß", fr: "les émissions de CO2", ex: "Der CO2-Ausstoß muss sinken." },
        { de: "die Nachhaltigkeit", fr: "la durabilité", ex: "Nachhaltigkeit ist das Ziel." },
        { de: "erneuerbar", fr: "renouvelable", ex: "erneuerbare Energien fördern" },
        { de: "die Ressource", fr: "la ressource", ex: "Wir verschwenden Ressourcen." },
        { de: "der Verzicht", fr: "le renoncement", ex: "Der Verzicht fällt vielen schwer." },
        { de: "eindämmen", fr: "endiguer / limiter", ex: "Den Ausstoß muss man eindämmen." }
      ],
      grammaire: [
        { attention: "*Das **lässt sich** lösen* = peut être résolu ; *ist **zu** lösen* = doit/peut être résolu.", titre: "Passif et formes de substitution", intro: "Pour un propos objectif, on emploie le passif (werden + participe) ou ses alternatives (man, sich lassen, sein + zu + Inf.).",
          tableau: { entetes: ["Forme", "Exemple", "Sens"], lignes: [["passif", "Energie wird gespart.", "neutre/objectif"], ["man", "Man muss Energie sparen.", "général"], ["sich lassen", "Das lässt sich vermeiden.", "= kann vermieden werden"], ["sein + zu + Inf.", "Der Ausstoß ist zu senken.", "= muss gesenkt werden"]] },
          schemas: [{ legende: "sein + zu + infinitif = nécessité passive.", mots: [{ m: "Der CO2-Ausstoß", r: "sujet", c: "sujet" }, { m: "ist", r: "sein (2)", c: "verbe" }, { m: "dringend", r: "complément", c: "objet" }, { m: "zu senken", r: "zu + infinitif (fin)", c: "fin" }] }],
          note: "« Das lässt sich machen » et « Das ist zu machen » remplacent élégamment « Das kann/muss gemacht werden »." }
      ],
      dialogue: {
        titre: "Was tun gegen den Klimawandel?", lieu: "Diskussion",
        lignes: [
          { loc: "Lara", de: "Der CO2-Ausstoß muss dringend gesenkt werden.", fr: "Les émissions de CO2 doivent être réduites d'urgence." },
          { loc: "Tim", de: "Vieles lässt sich durch erneuerbare Energien erreichen.", fr: "On peut atteindre beaucoup grâce aux énergies renouvelables." },
          { loc: "Lara", de: "Aber auch persönlicher Verzicht ist gefragt.", fr: "Mais le renoncement personnel est aussi demandé." },
          { loc: "Tim", de: "Stimmt, Nachhaltigkeit beginnt im Alltag.", fr: "C'est vrai, la durabilité commence au quotidien." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was ist laut Tim ein Lösungsweg?", options: ["Erneuerbare Energien", "Mehr Autos", "Nichts tun"], correct: 0, explication: "« durch erneuerbare Energien »." },
        { type: "qcm", consigne: "Choisissez (alternative au passif).", question: "« Das lässt sich vermeiden » signifie…", options: ["kann vermieden werden", "muss vermieden werden", "wird nicht vermieden"], correct: 0, explication: "sich lassen = kann … werden (possibilité)." },
        { type: "trou", consigne: "Complétez (sein + zu + Inf.).", texte: "Der Ausstoß ist dringend zu {0}. (senken)", accepte: [["senken"]], indice: "sein + zu + infinitif" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Klimawandel", droite: "le changement climatique" }, { gauche: "die Nachhaltigkeit", droite: "la durabilité" }, { gauche: "erneuerbar", droite: "renouvelable" }, { gauche: "eindämmen", droite: "endiguer" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Proposez deux mesures climatiques (passif ou alternatives).", attendus: ["werden", "Klima"], modele: "Der CO2-Ausstoß muss gesenkt werden. Erneuerbare Energien sollten gefördert werden. Vieles lässt sich schon im Alltag erreichen." }
      ]
    },
    {
      id: "c1t10",
      rp: {
        "scene": "Die deutsche Teilung",
        "intro": "Ein Gespräch über Geschichte.",
        "fin": "Richtig!",
        "tours": [
          {
            "de": "Wissen Sie, wann Deutschland geteilt wurde?",
            "options": [
              {
                "de": "Ja, nach dem Zweiten Weltkrieg.",
                "ok": true
              },
              {
                "de": "Ich bin geteilt.",
                "hint": "Antworte historisch: « Nach dem Zweiten Weltkrieg »."
              }
            ],
            "bravo": "Prima!"
          },
          {
            "de": "Was bedeutete die Teilung für die Menschen?",
            "options": [
              {
                "de": "Viele Familien wurden getrennt.",
                "ok": true
              },
              {
                "de": "Nichts Besonderes.",
                "hint": "Beschreibe die Folgen: « Familien wurden getrennt »."
              }
            ],
            "bravo": "Richtig!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema behandelt ein zentrales Kapitel der deutschen Geschichte: die **Teilung Deutschlands**. Schlüsselwörter sind *die Teilung* (la division), *der Zweite Weltkrieg*, *die Besatzung* (l'occupation), *die BRD* (RFA) und *die DDR* (RDA), *der Kalte Krieg* (la guerre froide).",
        "Du lernst, historische Ereignisse **chronologisch** darzustellen – ideal, um das Präteritum und Zeitangaben zu üben. Nützliche Wendungen: *nach dem Krieg*, *in den 1950er Jahren*, *zur Zeit der Teilung*.",
        "Tipp: Dieses kulturelle Wissen hilft dir, Deutschland und seine Menschen besser zu verstehen. Versuche, den historischen Verlauf in eigenen Worten zusammenzufassen – eine anspruchsvolle, aber lohnende C1-Übung."
      ], numero: 10, titre: "La division de l'Allemagne", titreDE: "Die deutsche Teilung",
      theme: "Histoire de la division", duree: 60,
      objectifs: ["Comprendre la division de l'Allemagne", "Raconter au prétérit et au passif"],
      grammairePoints: ["Prétérit (récit)", "Passif historique"],
      exemplesPlus: [{"de":"Nach dem Krieg wurde Deutschland in Besatzungszonen geteilt.","fr":"*die Besatzungszone* = ein von den Siegermächten kontrolliertes Gebiet."},{"de":"Der Eiserne Vorhang spaltete Europa.","fr":"*der Eiserne Vorhang* = die Grenze zwischen Ost und West."},{"de":"Der Wiederaufbau dauerte viele Jahre.","fr":"*der Wiederaufbau* = das Neuerrichten nach der Zerstörung."},{"de":"1990 kam es zur Wiedervereinigung.","fr":"*die Wiedervereinigung* = die Vereinigung der beiden deutschen Staaten."},{"de":"Die Teilung prägte zwei Generationen.","fr":"*spalten* = in zwei Teile trennen."}],
      vocabulaire: [
        { de: "die Teilung", fr: "la division", ex: "Die Teilung dauerte über 40 Jahre." },
        { de: "die Besatzungszone", fr: "la zone d'occupation", ex: "Deutschland wurde in Besatzungszonen geteilt." },
        { de: "der Eiserne Vorhang", fr: "le rideau de fer", ex: "Der Eiserne Vorhang trennte Europa." },
        { de: "die Bundesrepublik", fr: "la République fédérale", ex: "Die Bundesrepublik entstand 1949." },
        { de: "die Wiedervereinigung", fr: "la réunification", ex: "Die Wiedervereinigung erfolgte 1990." },
        { de: "die Grenze", fr: "la frontière", ex: "Die Grenze war streng bewacht." },
        { de: "spalten", fr: "scinder / diviser", ex: "Der Konflikt spaltete das Land." },
        { de: "der Wiederaufbau", fr: "la reconstruction", ex: "Der Wiederaufbau dauerte Jahre." }
      ],
      grammaire: [
        { attention: "Dates au **Präteritum** ; le passif (*wurde geteilt*) met l'événement au premier plan.", titre: "Récit historique : prétérit et passif", intro: "L'Histoire se raconte au Präteritum ; le passif met l'événement au premier plan (l'agent est secondaire).",
          tableau: { entetes: ["Forme", "Exemple"], lignes: [["Präteritum", "Deutschland verlor den Krieg."], ["Passif (prétérit)", "Das Land wurde geteilt."], ["Plusquamperfekt", "Nachdem der Krieg geendet hatte, …"], ["Passif + agent", "Die Zonen wurden von den Alliierten verwaltet."]] },
          note: "« 1949 » : neunzehnhundertneunundvierzig ; on écrit aussi « im Jahr 1949 »." }
      ],
      dialogue: {
        titre: "Geschichtsunterricht", lieu: "Schule",
        lignes: [
          { loc: "Schüler", de: "Warum wurde Deutschland geteilt?", fr: "Pourquoi l'Allemagne a-t-elle été divisée ?" },
          { loc: "Lehrer", de: "Nach dem Krieg wurde es in vier Besatzungszonen aufgeteilt.", fr: "Après la guerre, elle a été partagée en quatre zones d'occupation." },
          { loc: "Schüler", de: "Und wann entstanden die beiden Staaten?", fr: "Et quand les deux États sont-ils nés ?" },
          { loc: "Lehrer", de: "1949 entstanden die BRD und die DDR.", fr: "En 1949 sont nées la RFA et la RDA." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "In wie viele Zonen wurde Deutschland geteilt?", options: ["Vier", "Zwei", "Drei"], correct: 0, explication: "« in vier Besatzungszonen »." },
        { type: "qcm", consigne: "Choisissez (passif prétérit).", question: "Das Land ___ 1945 geteilt.", options: ["wurde", "wird", "ist", "hat"], correct: 0, explication: "passif prétérit → wurde + participe." },
        { type: "trou", consigne: "Complétez (prétérit).", texte: "1949 {0} die beiden deutschen Staaten. (entstehen)", accepte: [["entstanden"]], indice: "entstehen → entstanden" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Teilung", droite: "la division" }, { gauche: "der Eiserne Vorhang", droite: "le rideau de fer" }, { gauche: "die Wiedervereinigung", droite: "la réunification" }, { gauche: "spalten", droite: "scinder" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Résumez la division de l'Allemagne en 2-3 phrases (prétérit/passif).", attendus: ["wurde", "geteilt"], modele: "Nach dem Zweiten Weltkrieg wurde Deutschland in vier Zonen geteilt. 1949 entstanden die BRD und die DDR. Das Land blieb über 40 Jahre gespalten." }
      ]
    },
    {
      id: "c1t11",
      rp: {
        "scene": "Die Berliner Mauer",
        "intro": "Ihr sprecht über die Mauer.",
        "fin": "Sehr gut!",
        "tours": [
          {
            "de": "Was symbolisiert die Berliner Mauer?",
            "options": [
              {
                "de": "Sie symbolisiert die Teilung und den Kalten Krieg.",
                "ok": true
              },
              {
                "de": "Eine Mauer aus Stein.",
                "hint": "Geh über das Konkrete hinaus: « Sie symbolisiert … »."
              }
            ],
            "bravo": "Perfekt!"
          },
          {
            "de": "Wissen Sie, wann sie fiel?",
            "options": [
              {
                "de": "1989, ein historischer Moment.",
                "ok": true
              },
              {
                "de": "Ich weiß es nicht.",
                "hint": "« 1989 »."
              }
            ],
            "bravo": "Bravo!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema widmet sich der **Berliner Mauer** – einem Symbol der deutschen Teilung. Schlüsselwörter sind *die Mauer* (le Mur), *der Bau* (la construction), *die Flucht* (la fuite), *die Grenze* (la frontière), *der Fall der Mauer* (la chute du Mur), *die Wiedervereinigung* (la réunification).",
        "Die Mauer wurde 1961 gebaut und fiel 1989. Du lernst, über ein **emotional aufgeladenes** historisches Ereignis zu sprechen: *die Trennung* (la séparation), *die Sehnsucht* (le désir ardent), *die Freiheit* (la liberté), *die Freude über den Fall*.",
        "Tipp: Der 9. November 1989 ist ein Schlüsseldatum. Über solche historischen Wendepunkte zu sprechen und Gefühle wie Hoffnung und Freiheit auszudrücken, gehört zur kulturellen und sprachlichen Bildung auf C1-Niveau."
      ], numero: 11, titre: "Le Mur", titreDE: "Die Berliner Mauer",
      theme: "Le Mur", duree: 60,
      objectifs: ["Raconter la construction et la chute du Mur", "Décrire des conséquences humaines"],
      grammairePoints: ["Plusquamperfekt", "Propositions relatives"],
      exemplesPlus: [{"de":"1961 wurde die Mauer errichtet.","fr":"*errichten* = (ein Bauwerk) aufbauen."},{"de":"Viele wagten die gefährliche Flucht in den Westen.","fr":"*die Flucht* = das heimliche, oft riskante Verlassen eines Landes."},{"de":"Der Mauerfall 1989 veränderte alles.","fr":"*der Mauerfall* = die Öffnung der Berliner Mauer."},{"de":"Die Wende brachte tiefgreifende Veränderungen.","fr":"*die Wende* = der politische Umbruch 1989/90."},{"de":"Die Trennung von Familien war schmerzhaft.","fr":"*überwinden* = (ein Hindernis) hinter sich lassen."}],
      vocabulaire: [
        { de: "die Mauer", fr: "le mur", ex: "Die Mauer wurde 1961 errichtet." },
        { de: "errichten", fr: "ériger / construire", ex: "Man errichtete die Mauer über Nacht." },
        { de: "die Flucht", fr: "la fuite / l'évasion", ex: "Die Flucht war lebensgefährlich." },
        { de: "der Mauerfall", fr: "la chute du Mur", ex: "Der Mauerfall war 1989." },
        { de: "die Wende", fr: "le tournant (1989/90)", ex: "Die Wende veränderte alles." },
        { de: "überwinden", fr: "surmonter / franchir", ex: "Viele versuchten, die Mauer zu überwinden." },
        { de: "die Trennung", fr: "la séparation", ex: "Die Trennung zerriss Familien." },
        { de: "der Wachturm", fr: "le mirador", ex: "Wachtürme bewachten die Grenze." }
      ],
      grammaire: [
        { attention: "Antériorité avec *nachdem* (plus-que-parfait → prétérit) ; relatives : préposition **avant** le pronom.", titre: "Antériorité et précisions : Plusquamperfekt + relatives", intro: "Le Plusquamperfekt situe ce qui précède ; les relatives précisent personnes et lieux (verbe à la fin).",
          tableau: { entetes: ["Outil", "Exemple"], lignes: [["Plusquamperfekt", "Nachdem die Mauer gefallen war, feierten alle."], ["relative (nom.)", "die Menschen, die flohen"], ["relative + prép.", "die Grenze, an der viele starben"], ["relative (wo)", "die Stadt, wo die Mauer stand"]] },
          schemas: [{ legende: "Relative : pronom relatif … verbe à la FIN.", mots: [{ m: "die Mauer,", r: "principale", c: "objet" }, { m: "die", r: "relatif (nom.)", c: "conj" }, { m: "Berlin jahrzehntelang", r: "complément", c: "sujet" }, { m: "teilte", r: "verbe (fin)", c: "fin" }] }],
          note: "« an der » (à laquelle) : préposition + pronom relatif au datif." }
      ],
      dialogue: {
        titre: "Erinnerungen an 1989", lieu: "Zeitzeugengespräch",
        lignes: [
          { loc: "Enkel", de: "Wie hast du den Mauerfall erlebt?", fr: "Comment as-tu vécu la chute du Mur ?" },
          { loc: "Oma", de: "Nachdem die Grenze geöffnet worden war, weinten wir vor Glück.", fr: "Après l'ouverture de la frontière, nous avons pleuré de joie." },
          { loc: "Enkel", de: "Und vorher?", fr: "Et avant ?" },
          { loc: "Oma", de: "Die Mauer, die uns getrennt hatte, schien für immer zu stehen.", fr: "Le Mur, qui nous avait séparés, semblait là pour toujours." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie reagierte die Oma auf den Mauerfall?", options: ["Sie weinte vor Glück", "Sie war wütend", "Sie blieb gleichgültig"], correct: 0, explication: "« weinten wir vor Glück »." },
        { type: "qcm", consigne: "Choisissez le pronom relatif.", question: "Die Mauer, ___ uns trennte, fiel 1989.", options: ["die", "der", "das", "den"], correct: 0, explication: "die Mauer, sujet de la relative → die (nom. fém.)." },
        { type: "trou", consigne: "Complétez (Plusquamperfekt).", texte: "Nachdem die Mauer gefallen {0}, feierten alle.", accepte: [["war"]], indice: "fallen → sein → war gefallen" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "errichten", droite: "ériger" }, { gauche: "die Flucht", droite: "la fuite" }, { gauche: "der Mauerfall", droite: "la chute du Mur" }, { gauche: "überwinden", droite: "franchir" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Racontez la chute du Mur en quelques phrases (Plusquamperfekt + relative).", attendus: ["Mauer", "gefallen"], modele: "Die Mauer, die Deutschland jahrzehntelang geteilt hatte, fiel 1989. Nachdem die Grenze geöffnet worden war, strömten die Menschen in den Westen." }
      ]
    },
    {
      id: "c1t12",
      rp: {
        "scene": "Leben in der DDR",
        "intro": "Ein Gespräch über die DDR.",
        "fin": "Stark!",
        "tours": [
          {
            "de": "Wie war das Leben in der DDR?",
            "options": [
              {
                "de": "Es war stark eingeschränkt und überwacht.",
                "ok": true
              },
              {
                "de": "Sehr modern und frei.",
                "hint": "Beschreibe realistisch: « eingeschränkt, überwacht »."
              }
            ],
            "bravo": "Stark!"
          },
          {
            "de": "Gibt es heute noch Nostalgie danach?",
            "options": [
              {
                "de": "Ja, man nennt das Ostalgie.",
                "ok": true
              },
              {
                "de": "Nein, nie.",
                "hint": "Das Wort lautet « Ostalgie »."
              }
            ],
            "bravo": "Sehr gut!"
          }
        ]
      },
      vocCoursDE: [
        "In diesem Thema geht es um das **Leben in der DDR** (RDA). Schlüsselwörter sind *der Alltag* (le quotidien), *die Mangelwirtschaft* (l'économie de pénurie), *die Stasi* (la police secrète), *die Überwachung* (la surveillance), *die Planwirtschaft* (l'économie planifiée), *die Ostalgie*.",
        "Du lernst, **Lebensbedingungen** zu beschreiben und zu bewerten: *eingeschränkt* (limité), *die Versorgung* (l'approvisionnement), *die Meinungsfreiheit* (la liberté d'opinion). Das Wort *die Ostalgie* (mélange de « Ost » et « Nostalgie ») beschreibt die nostalgische Erinnerung an den Osten.",
        "Tipp: Vergleiche das Leben in der DDR mit dem Leben heute. Vergangene Lebensumstände differenziert darzustellen und zu bewerten ist eine anspruchsvolle Aufgabe, die genau dem C1-Niveau entspricht."
      ], numero: 12, titre: "Vivre en RDA", titreDE: "Leben in der DDR",
      theme: "Vivre en RDA", duree: 60,
      objectifs: ["Décrire le quotidien en RDA", "Nuancer mémoire et jugement"],
      grammairePoints: ["Discours indirect (Konjunktiv I)", "Prétérit"],
      exemplesPlus: [{"de":"In der Planwirtschaft waren viele Güter Mangelware.","fr":"*die Mangelware* = etwas, das nur selten zu bekommen ist."},{"de":"Die Stasi betrieb eine umfassende Überwachung.","fr":"*die Überwachung* = das ständige Beobachten der Menschen."},{"de":"Es gab keine echte Meinungsfreiheit.","fr":"*die Meinungsfreiheit* = das Recht, seine Meinung frei zu äußern."},{"de":"Manche verklären die Vergangenheit heute.","fr":"*verklären* = die Vergangenheit schöner darstellen, als sie war."},{"de":"Trotz allem war der Zusammenhalt oft groß.","fr":"*der Zusammenhalt* = das Gefühl der Verbundenheit."}],
      vocabulaire: [
        { de: "die Planwirtschaft", fr: "l'économie planifiée", ex: "Die DDR hatte eine Planwirtschaft." },
        { de: "die Versorgung", fr: "l'approvisionnement", ex: "Die Versorgung war oft knapp." },
        { de: "die Mangelware", fr: "le produit rare", ex: "Bananen waren Mangelware." },
        { de: "die Überwachung", fr: "la surveillance", ex: "Die Überwachung war allgegenwärtig." },
        { de: "die Stasi", fr: "la Stasi (police secrète)", ex: "Die Stasi bespitzelte die Bürger." },
        { de: "der Zusammenhalt", fr: "la solidarité / cohésion", ex: "Der Zusammenhalt war oft groß." },
        { de: "die Meinungsfreiheit", fr: "la liberté d'expression", ex: "Meinungsfreiheit gab es kaum." },
        { de: "verklären", fr: "idéaliser / enjoliver", ex: "Manche verklären die Vergangenheit." }
      ],
      grammaire: [
        { attention: "**Konjunktiv I** pour rapporter sans s'engager ; au pluriel, on passe au **Konjunktiv II**.", titre: "Rapporter des témoignages : Konjunktiv I", intro: "Pour citer un témoin sans s'engager, on emploie le discours indirect au Konjunktiv I.",
          tableau: { entetes: ["Direct", "Indirect (Konjunktiv I)"], lignes: [["« Es war nicht alles schlecht. »", "Er sagt, es sei nicht alles schlecht gewesen."], ["« Wir hatten Zusammenhalt. »", "Sie sagt, sie hätten Zusammenhalt gehabt."], ["« Ich kann mich erinnern. »", "Er sagt, er könne sich erinnern."]] },
          note: "Si le Konjunktiv I = indicatif (pluriel), on emploie le Konjunktiv II (« sie hätten »)." }
      ],
      dialogue: {
        titre: "Zwei Sichtweisen", lieu: "Gespräch",
        lignes: [
          { loc: "Journalist", de: "Wie war das Leben in der DDR?", fr: "Comment était la vie en RDA ?" },
          { loc: "Zeitzeuge", de: "Er sagt, es sei nicht alles schlecht gewesen, aber die Überwachung sei schlimm gewesen.", fr: "Il dit que tout n'était pas mauvais, mais que la surveillance était terrible." },
          { loc: "Journalist", de: "Was vermisst er?", fr: "Que regrette-t-il ?" },
          { loc: "Zeitzeuge", de: "Den Zusammenhalt, sagt er, den vermisse er manchmal.", fr: "La solidarité, dit-il, ça lui manque parfois." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was empfand der Zeitzeuge als schlimm?", options: ["Die Überwachung", "Den Zusammenhalt", "Die Natur"], correct: 0, explication: "« die Überwachung sei schlimm gewesen »." },
        { type: "qcm", consigne: "Choisissez (Konjunktiv I de sein).", question: "Er sagt, es ___ nicht alles schlecht gewesen.", options: ["sei", "ist", "war", "wäre gewesen"], correct: 0, explication: "discours indirect → Konjunktiv I : sei." },
        { type: "trou", consigne: "Complétez (Konjunktiv I de können).", texte: "Sie sagt, sie {0} sich gut erinnern.", accepte: [["könne"]], indice: "können → könne (Konjunktiv I)" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Planwirtschaft", droite: "l'économie planifiée" }, { gauche: "die Mangelware", droite: "le produit rare" }, { gauche: "die Überwachung", droite: "la surveillance" }, { gauche: "verklären", droite: "idéaliser" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Rapportez deux propos d'un témoin sur la RDA (Konjunktiv I).", attendus: ["sei", "sagt"], modele: "Der Zeitzeuge sagt, das Leben sei einfach gewesen. Er meint, der Zusammenhalt sei groß gewesen, doch die Meinungsfreiheit habe gefehlt." }
      ]
    },
    {
      id: "c1t13",
      rp: {
        "scene": "Erinnerungskultur",
        "intro": "Ihr sprecht über Geschichte und Verantwortung.",
        "fin": "Sehr reif!",
        "tours": [
          {
            "de": "Warum ist Erinnerungskultur wichtig?",
            "options": [
              {
                "de": "Damit sich die Fehler der Vergangenheit nicht wiederholen.",
                "ok": true
              },
              {
                "de": "Sie ist nicht wichtig.",
                "hint": "Begründe: « Damit … »."
              }
            ],
            "bravo": "Genau!"
          },
          {
            "de": "Sollte jede Generation Verantwortung tragen?",
            "options": [
              {
                "de": "Ja, jede Generation trägt Verantwortung.",
                "ok": true
              },
              {
                "de": "Ich bin eine Generation.",
                "hint": "Beziehe Stellung."
              }
            ],
            "bravo": "Prima!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema vertieft **Geschichte** und **Politik**. Schlüsselwörter sind *die Verfassung* (la constitution), *die Demokratie*, *das Parlament*, *die Wiedervereinigung*, *die Verantwortung* (la responsabilité), *die Erinnerungskultur* (la culture du souvenir).",
        "Auf C1 verbindest du historisches und politisches Vokabular zu komplexen Aussagen. Nützlich sind abstrakte Nomen (*die Entwicklung, die Auseinandersetzung* le débat, *die Bewältigung* le fait de surmonter) und formelle Konnektoren (*infolgedessen, angesichts dessen*).",
        "Tipp: Fasse eine historische Entwicklung zusammen und bewerte ihre Bedeutung für heute. Geschichte und Gegenwart zu verknüpfen, verlangt genau die abstrakte Ausdrucksfähigkeit, die auf C1 trainiert wird."
      ], numero: 13, titre: "Histoire et politique", titreDE: "Geschichte und Politik",
      theme: "Histoire et politique", duree: 60,
      objectifs: ["Discuter d'enjeux politiques", "Exprimer une opinion argumentée"],
      grammairePoints: ["Nominalisation", "Connecteurs d'argumentation"],
      exemplesPlus: [{"de":"Die Gewaltenteilung schützt die Demokratie.","fr":"*die Gewaltenteilung* = die Trennung von Gesetzgebung, Regierung und Justiz."},{"de":"Das Grundgesetz garantiert die Grundrechte.","fr":"*das Grundgesetz* = die Verfassung Deutschlands."},{"de":"Eine niedrige Wahlbeteiligung ist bedenklich.","fr":"*die Wahlbeteiligung* = der Anteil der Bürger, die wählen gehen."},{"de":"Diese Maßnahme ist politisch sehr umstritten.","fr":"*umstritten* = es gibt sehr unterschiedliche Meinungen dazu."},{"de":"Demokratie verlangt Kompromisse und Verantwortung.","fr":"*der Kompromiss* = eine Einigung, bei der beide Seiten nachgeben."}],
      vocabulaire: [
        { de: "die Demokratie", fr: "la démocratie", ex: "Die Demokratie lebt vom Mitmachen." },
        { de: "die Gewaltenteilung", fr: "la séparation des pouvoirs", ex: "Die Gewaltenteilung schützt die Freiheit." },
        { de: "das Grundgesetz", fr: "la Loi fondamentale", ex: "Das Grundgesetz garantiert Grundrechte." },
        { de: "die Wahlbeteiligung", fr: "la participation électorale", ex: "Die Wahlbeteiligung war hoch." },
        { de: "der Kompromiss", fr: "le compromis", ex: "Politik lebt vom Kompromiss." },
        { de: "die Verantwortung", fr: "la responsabilité", ex: "Mit Macht kommt Verantwortung." },
        { de: "umstritten", fr: "controversé", ex: "Das Gesetz ist umstritten." },
        { de: "die Errungenschaft", fr: "l'acquis", ex: "Die Pressefreiheit ist eine Errungenschaft." }
      ],
      grammaire: [
        { attention: "*gleichwohl* (néanmoins) et *infolgedessen* (par conséquent) relèvent du registre **écrit soutenu**.", titre: "Argumenter avec recul", intro: "On structure l'argumentation avec des connecteurs soutenus et on nominalise pour condenser.",
          tableau: { entetes: ["Fonction", "Connecteur / forme", "Exemple"], lignes: [["thèse", "es lässt sich sagen, dass", "Es lässt sich sagen, dass …"], ["concession", "zwar … gleichwohl", "Zwar schwierig, gleichwohl nötig."], ["cause nominale", "aufgrund + Gén.", "aufgrund der Krise"], ["conséquence", "infolgedessen", "Infolgedessen sank das Vertrauen."]] },
          note: "« gleichwohl » et « infolgedessen » relèvent du registre écrit soigné." }
      ],
      dialogue: {
        titre: "Politik im Gespräch", lieu: "Seminar",
        lignes: [
          { loc: "Studentin", de: "Warum ist die Gewaltenteilung so wichtig?", fr: "Pourquoi la séparation des pouvoirs est-elle si importante ?" },
          { loc: "Professor", de: "Weil sie Machtmissbrauch verhindert.", fr: "Parce qu'elle empêche l'abus de pouvoir." },
          { loc: "Studentin", de: "Ist das Gesetz nicht umstritten?", fr: "Cette loi n'est-elle pas controversée ?" },
          { loc: "Professor", de: "Zwar umstritten, gleichwohl notwendig.", fr: "Certes controversée, néanmoins nécessaire." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wozu dient die Gewaltenteilung?", options: ["Sie verhindert Machtmissbrauch", "Sie spart Geld", "Sie erhöht Steuern"], correct: 0, explication: "« sie verhindert Machtmissbrauch »." },
        { type: "qcm", consigne: "Choisissez (concession soutenue).", question: "Zwar teuer, ___ notwendig.", options: ["gleichwohl", "weil", "damit", "sodass"], correct: 0, explication: "gleichwohl = néanmoins (concession)." },
        { type: "trou", consigne: "Complétez (conséquence).", texte: "Das Vertrauen sank; {0} stieg die Wut. (par conséquent)", accepte: [["infolgedessen"]], indice: "par conséquent = infolgedessen" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Gewaltenteilung", droite: "séparation des pouvoirs" }, { gauche: "das Grundgesetz", droite: "la Loi fondamentale" }, { gauche: "der Kompromiss", droite: "le compromis" }, { gauche: "umstritten", droite: "controversé" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Défendez l'importance de la démocratie (connecteur soutenu).", attendus: ["Demokratie", "weil"], modele: "Die Demokratie ist wichtig, weil sie Freiheit und Mitbestimmung sichert. Zwar erfordert sie Kompromisse, gleichwohl schützt sie vor Machtmissbrauch." }
      ]
    },
    {
      id: "c1t14",
      rp: {
        "scene": "Musik & Fotografie",
        "intro": "Ein Gespräch über Kunst.",
        "fin": "Wunderbar! C1-Wortschatz gemeistert.",
        "tours": [
          {
            "de": "Welche Musik berührt Sie am meisten?",
            "options": [
              {
                "de": "Ruhige Musik berührt mich am meisten.",
                "ok": true
              },
              {
                "de": "Ich bin Musik.",
                "hint": "Beschreibe und begründe: « … berührt mich, weil … »."
              }
            ],
            "bravo": "Richtig!"
          },
          {
            "de": "Was macht ein gutes Foto aus?",
            "options": [
              {
                "de": "Es erzählt eine Geschichte und schafft eine Stimmung.",
                "ok": true
              },
              {
                "de": "Ein teures Handy.",
                "hint": "Geh in die Tiefe: « Es erzählt … »."
              }
            ],
            "bravo": "Perfekt!"
          }
        ]
      },
      vocCoursDE: [
        "Dieses Thema behandelt **Musik** und **Fotografie** als Formen des künstlerischen Ausdrucks. Schlüsselwörter sind *die Musik*, *der Klang* (le son), *die Stimmung* (l'ambiance), *die Fotografie*, *das Motiv* (le sujet), *die Aufnahme* (la prise/l'enregistrement), *der Ausdruck* (l'expression).",
        "Auf C1 beschreibst du nicht nur, sondern **interpretierst** und **bewertest**: *wirken auf* (faire effet sur), *etwas ausdrücken*, *eine Atmosphäre schaffen* (créer une atmosphère), *berühren* (émouvoir). Viele Begriffe sind international (*das Genre, das Album, das Porträt*).",
        "Tipp: Beschreibe ein Musikstück oder ein Foto, das dich bewegt, und erkläre **warum**. Über Kunst zu sprechen und Wirkungen zu analysieren, ist eine subtile, hochwertige Sprechübung für das C1-Niveau."
      ], numero: 14, titre: "Musique et photographie", titreDE: "Musik und Fotografie",
      theme: "Musique et photographie", duree: 55,
      objectifs: ["Parler d'art et d'esthétique", "Décrire une œuvre et son effet"],
      grammairePoints: ["Adjectifs nominalisés", "Participe attribut"],
      exemplesPlus: [{"de":"Die Aufnahme fängt die Stimmung perfekt ein.","fr":"*die Aufnahme* = ein Foto oder eine Tonaufzeichnung."},{"de":"Aus dieser Perspektive wirkt das Bild dramatisch.","fr":"*die Perspektive* = der Blickwinkel."},{"de":"Die Melodie ist zeitlos und ergreifend.","fr":"*ergreifend* = es berührt einen tief."},{"de":"Eine gute Belichtung ist für das Foto entscheidend.","fr":"*die Belichtung* = die Menge an Licht beim Fotografieren."},{"de":"Ein Foto kann einen Moment für immer verewigen.","fr":"*verewigen* = für immer festhalten."}],
      vocabulaire: [
        { de: "die Aufnahme", fr: "l'enregistrement / la prise de vue", ex: "Die Aufnahme ist gestochen scharf." },
        { de: "die Stimmung", fr: "l'atmosphère", ex: "Das Foto fängt die Stimmung ein." },
        { de: "der Ausdruck", fr: "l'expression", ex: "Die Musik hat viel Ausdruck." },
        { de: "die Perspektive", fr: "la perspective", ex: "Die Perspektive ist ungewöhnlich." },
        { de: "ergreifend", fr: "émouvant / saisissant", ex: "Eine ergreifende Melodie." },
        { de: "der Belichtung", fr: "l'exposition (photo)", ex: "Die Belichtung war perfekt." },
        { de: "verewigen", fr: "immortaliser", ex: "Das Bild verewigt den Moment." },
        { de: "zeitlos", fr: "intemporel", ex: "Ein zeitloses Meisterwerk." }
      ],
      grammaire: [
        { attention: "Après *etwas/nichts*, l'adjectif nominalisé prend **-es** : *etwas Besonder**es***.", titre: "Décrire l'art : participe attribut et adjectif nominalisé", intro: "Le participe peut qualifier un nom (das berührende Bild) ; l'adjectif peut devenir nom (das Schöne, etwas Besonderes).",
          tableau: { entetes: ["Forme", "Exemple", "Sens"], lignes: [["participe présent", "die berührende Musik", "qui touche"], ["participe passé", "das aufgenommene Foto", "qui a été pris"], ["adjectif nominalisé", "das Schöne", "le beau"], ["après etwas/nichts", "etwas Besonderes", "quelque chose de spécial"]] },
          note: "Après etwas/nichts/viel, l'adjectif nominalisé prend une majuscule et -es : etwas Neues, nichts Gutes." }
      ],
      dialogue: {
        titre: "In der Ausstellung", lieu: "Galerie",
        lignes: [
          { loc: "Besucherin", de: "Diese Aufnahme hat etwas Magisches.", fr: "Cette prise de vue a quelque chose de magique." },
          { loc: "Fotograf", de: "Es ist die Stimmung des verschwindenden Lichts.", fr: "C'est l'atmosphère de la lumière qui disparaît." },
          { loc: "Besucherin", de: "Wirklich ergreifend.", fr: "Vraiment émouvant." },
          { loc: "Fotograf", de: "Ein guter Moment, für immer verewigt.", fr: "Un bon moment, immortalisé pour toujours." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was fängt die Aufnahme ein?", options: ["Die Stimmung des Lichts", "Eine Stadt", "Ein Konzert"], correct: 0, explication: "« die Stimmung des verschwindenden Lichts »." },
        { type: "qcm", consigne: "Choisissez (adjectif nominalisé).", question: "Diese Musik hat etwas ___.", options: ["Besonderes", "besondere", "besonderen", "besonder"], correct: 0, explication: "après etwas → majuscule + -es : Besonderes." },
        { type: "trou", consigne: "Complétez (participe présent attribut).", texte: "Die {0} Melodie rührte alle. (berühren → participe présent)", accepte: [["berührende"]], indice: "participe présent : berührend + terminaison" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Aufnahme", droite: "la prise de vue" }, { gauche: "ergreifend", droite: "émouvant" }, { gauche: "verewigen", droite: "immortaliser" }, { gauche: "zeitlos", droite: "intemporel" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Décrivez une œuvre qui vous touche (participe attribut, adjectif nominalisé).", attendus: ["etwas", "Stimmung"], modele: "Dieses Foto hat etwas Zeitloses. Die einfangende Perspektive und die ruhige Stimmung machen es zu etwas Besonderem." }
      ]
    }
  ]
};
