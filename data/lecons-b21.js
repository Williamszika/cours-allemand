/* =====================================================================
   MODULE B2.1 — Société, relations et monde professionnel
   Niveau B2 (CECRL). D'après la progression « Erkundungen B2 ».
   Thèmes : formation, relations, logement, voyages et réclamations,
   différences culturelles au travail, l'Europe et les Allemands, small talk.
   Explications en français, contenu en allemand soutenu.
   ===================================================================== */
window.MODULE_B21 = {
  id: "b2-1",
  titre: "B2.1 — Société & monde professionnel",
  sousTitre: "Gesellschaft & Berufswelt",
  niveau: "B2",
  description:
    "On nuance et on argumente : la formation, les relations humaines, le logement, " +
    "les voyages et les réclamations, les différences culturelles au travail, " +
    "l'Europe vue par les Allemands et l'art du small talk.",
  couleur: "#db2777",
  lecons: [
    {
      id: "b2t01", numero: 1, titre: "École et formation", titreDE: "Schule und Ausbildung",
      theme: "École et formation", duree: 60,
      objectifs: ["Parler de son parcours et de la formation", "Exprimer une opinion nuancée sur le système éducatif"],
      grammairePoints: ["Nominalisation", "Verbes modaux (sens)"],
      vocabulaire: [
        { de: "die Ausbildung", fr: "la formation (professionnelle)", ex: "Sie macht eine Ausbildung zur Krankenschwester." },
        { de: "der Studiengang", fr: "la filière d'études", ex: "Welchen Studiengang hast du gewählt?" },
        { de: "die Fähigkeit", fr: "la compétence / l'aptitude", ex: "Soziale Fähigkeiten sind heute gefragt." },
        { de: "der Abschluss", fr: "le diplôme", ex: "Ohne Abschluss ist es schwer." },
        { de: "sich bewerben", fr: "postuler / se porter candidat", ex: "Ich bewerbe mich um einen Studienplatz." },
        { de: "die Voraussetzung", fr: "la condition préalable", ex: "Das Abitur ist eine Voraussetzung." },
        { de: "der Lehrgang", fr: "le stage / la formation", ex: "Der Lehrgang dauert sechs Monate." },
        { de: "lebenslang", fr: "tout au long de la vie", ex: "Lebenslanges Lernen ist wichtig." }
      ],
      grammaire: [
        { attention: "Le verbe devient nom (*ausbilden → die Ausbildung*), souvent suivi d'un **génitif** (*der Lehrlinge*).", titre: "Nominaliser pour un style soutenu", intro: "À l'écrit formel (B2), on transforme souvent un verbe en nom : « ausbilden → die Ausbildung ». Cela condense l'information.",
          tableau: { entetes: ["Verbe", "Nom", "Exemple"], lignes: [["ausbilden", "die Ausbildung", "die Ausbildung der Lehrlinge"], ["bewerben", "die Bewerbung", "die Bewerbung um die Stelle"], ["entscheiden", "die Entscheidung", "die Entscheidung über das Studium"], ["fördern", "die Förderung", "die Förderung von Talenten"]] },
          note: "La nominalisation s'accompagne souvent d'un complément au génitif (der Lehrlinge) ou avec « von »." }
      ],
      dialogue: {
        titre: "Welcher Weg nach der Schule?", lieu: "Berufsberatung",
        lignes: [
          { loc: "Berater", de: "Möchten Sie eher studieren oder eine Ausbildung machen?", fr: "Préférez-vous étudier ou faire une formation professionnelle ?" },
          { loc: "Lena", de: "Ich schwanke noch. Eine Ausbildung wäre praktischer.", fr: "J'hésite encore. Une formation serait plus concrète." },
          { loc: "Berater", de: "Beide Wege haben Vor- und Nachteile.", fr: "Les deux voies ont des avantages et des inconvénients." },
          { loc: "Lena", de: "Letztlich kommt es auf meine Stärken an.", fr: "Au fond, tout dépend de mes points forts." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wozu tendiert Lena?", options: ["Zu einer Ausbildung", "Zu einem Auslandsjahr", "Zu gar nichts"], correct: 0, explication: "« Eine Ausbildung wäre praktischer »." },
        { type: "qcm", consigne: "Choisissez la nominalisation.", question: "sich bewerben → die ___", options: ["Bewerbung", "Bewerbe", "Bewerber", "Bewirtung"], correct: 0, explication: "bewerben → die Bewerbung." },
        { type: "trou", consigne: "Complétez (nom au génitif).", texte: "Die Förderung {0} Talente ist wichtig. (article génitif pluriel)", accepte: [["der"]], indice: "génitif pluriel → der Talente" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Ausbildung", droite: "la formation" }, { gauche: "der Abschluss", droite: "le diplôme" }, { gauche: "die Voraussetzung", droite: "la condition" }, { gauche: "sich bewerben", droite: "postuler" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Comparez en 3 phrases les études universitaires et la formation professionnelle (avantages/inconvénients).", attendus: ["Ausbildung", "Vorteil"], modele: "Ein Studium eröffnet viele Möglichkeiten, dauert aber lange. Eine Ausbildung ist praxisnah und man verdient früher Geld. Letztlich hängt die Wahl von den eigenen Zielen ab." }
      ]
    },
    {
      id: "b2t02", numero: 2, titre: "Relations interpersonnelles", titreDE: "Zwischenmenschliche Beziehungen",
      theme: "Relations interpersonnelles", duree: 60,
      objectifs: ["Décrire des relations et des sentiments", "Gérer un désaccord avec tact"],
      grammairePoints: ["Verbes pronominaux réciproques", "Adjectifs + prépositions"],
      vocabulaire: [
        { de: "die Beziehung", fr: "la relation", ex: "Eine gute Beziehung braucht Vertrauen." },
        { de: "das Vertrauen", fr: "la confiance", ex: "Vertrauen muss man sich verdienen." },
        { de: "sich verstehen", fr: "s'entendre", ex: "Wir verstehen uns blendend." },
        { de: "der Streit", fr: "la dispute", ex: "Nach dem Streit haben sie sich versöhnt." },
        { de: "rücksichtsvoll", fr: "prévenant / attentionné", ex: "Sei rücksichtsvoll gegenüber anderen." },
        { de: "sich verlassen auf", fr: "compter sur", ex: "Auf ihn kann man sich verlassen." },
        { de: "die Eifersucht", fr: "la jalousie", ex: "Eifersucht zerstört Beziehungen." },
        { de: "der Kompromiss", fr: "le compromis", ex: "Wir haben einen Kompromiss gefunden." }
      ],
      grammaire: [
        { attention: "*sich* = réciprocité (l'un l'autre) ; on peut renforcer avec **einander** (*Sie helfen einander*).", titre: "Réciprocité et adjectifs à préposition", intro: "« sich » exprime la réciprocité (l'un l'autre) ; beaucoup d'adjectifs imposent une préposition + cas.",
          tableau: { entetes: ["Structure", "Sens", "Exemple"], lignes: [["sich verstehen", "s'entendre", "Sie verstehen sich gut."], ["sich verlassen auf + Akk.", "compter sur", "Ich verlasse mich auf dich."], ["böse auf + Akk.", "fâché contre", "Er ist böse auf mich."], ["nett zu + Dat.", "gentil avec", "Sie ist nett zu allen."]] },
          note: "Pour la réciprocité, on peut renforcer avec « einander » : « Sie helfen einander »." }
      ],
      dialogue: {
        titre: "Ein klärendes Gespräch", lieu: "WG-Küche",
        lignes: [
          { loc: "Tom", de: "Ich habe das Gefühl, du bist sauer auf mich.", fr: "J'ai l'impression que tu m'en veux." },
          { loc: "Mia", de: "Ein bisschen. Du hast dich nicht gemeldet.", fr: "Un peu. Tu n'as pas donné de nouvelles." },
          { loc: "Tom", de: "Tut mir leid, lass uns einen Kompromiss finden.", fr: "Désolé, trouvons un compromis." },
          { loc: "Mia", de: "Einverstanden. Hauptsache, wir reden miteinander.", fr: "D'accord. L'essentiel, c'est qu'on se parle." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum ist Mia verärgert?", options: ["Tom hat sich nicht gemeldet", "Tom war zu laut", "Tom hat gelogen"], correct: 0, explication: "« Du hast dich nicht gemeldet »." },
        { type: "qcm", consigne: "Choisissez la préposition.", question: "Ich kann mich ___ dich verlassen.", options: ["auf", "an", "über", "für"], correct: 0, explication: "sich verlassen auf + accusatif." },
        { type: "trou", consigne: "Complétez (préposition + cas).", texte: "Er ist böse {0} mich.", accepte: [["auf"]], indice: "böse auf + accusatif" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "das Vertrauen", droite: "la confiance" }, { gauche: "der Streit", droite: "la dispute" }, { gauche: "der Kompromiss", droite: "le compromis" }, { gauche: "die Eifersucht", droite: "la jalousie" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Décrivez ce qui fait une bonne relation pour vous (au moins deux qualités).", attendus: ["Vertrauen", "Beziehung"], modele: "Für mich beruht eine gute Beziehung auf Vertrauen und Respekt. Man sollte einander zuhören und Kompromisse finden können." }
      ]
    },
    {
      id: "b2t03", numero: 3, titre: "Vivre et louer", titreDE: "Wohnen und Mieten",
      theme: "Logement et location", duree: 60,
      objectifs: ["Comprendre une annonce et un contrat de location", "Décrire un logement et négocier"],
      grammairePoints: ["Wechselpräpositionen", "Adjectifs déclinés"],
      vocabulaire: [
        { de: "die Miete", fr: "le loyer", ex: "Die Miete ist im Voraus zu zahlen." },
        { de: "die Kaution", fr: "la caution", ex: "Die Kaution beträgt drei Monatsmieten." },
        { de: "der Mietvertrag", fr: "le bail / contrat", ex: "Lesen Sie den Mietvertrag genau." },
        { de: "die Nebenkosten", fr: "les charges", ex: "Die Nebenkosten sind nicht inbegriffen." },
        { de: "der Vermieter", fr: "le propriétaire (bailleur)", ex: "Der Vermieter wohnt nebenan." },
        { de: "kündigen", fr: "résilier", ex: "Ich möchte die Wohnung kündigen." },
        { de: "möbliert", fr: "meublé", ex: "Die Wohnung ist möbliert." },
        { de: "die Besichtigung", fr: "la visite (du logement)", ex: "Die Besichtigung ist am Samstag." }
      ],
      grammaire: [
        { attention: "**Wo?** → datif / **Wohin?** → accusatif : *Ich stelle die Vase **auf den** Tisch* (direction).", titre: "Situer et déménager : Wechselpräpositionen", intro: "Les prépositions mixtes prennent le datif (position, Wo?) ou l'accusatif (direction, Wohin?).",
          tableau: { entetes: ["Question", "Cas", "Exemple"], lignes: [["Wo? (position)", "datif", "Der Schrank steht in der Ecke."], ["Wohin? (direction)", "accusatif", "Ich stelle den Schrank in die Ecke."], ["Wo?", "datif", "Die Lampe hängt über dem Tisch."], ["Wohin?", "accusatif", "Ich hänge die Lampe über den Tisch."]] },
          schemas: [{ legende: "Wohin ? → accusatif (mouvement vers).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "stelle", r: "verbe (2)", c: "verbe" }, { m: "das Sofa", r: "accusatif", c: "objet" }, { m: "an die Wand", r: "direction (acc.)", c: "fin" }] }],
          note: "an, auf, hinter, in, neben, über, unter, vor, zwischen : position = Dat., direction = Akk." }
      ],
      dialogue: {
        titre: "Bei der Besichtigung", lieu: "Wohnung",
        lignes: [
          { loc: "Interessent", de: "Wie hoch ist die Miete inklusive Nebenkosten?", fr: "À combien s'élève le loyer charges comprises ?" },
          { loc: "Vermieterin", de: "Warm 850 Euro, die Kaution beträgt zwei Monatsmieten.", fr: "850 euros charges comprises, la caution est de deux mois de loyer." },
          { loc: "Interessent", de: "Ist die Wohnung möbliert?", fr: "Le logement est-il meublé ?" },
          { loc: "Vermieterin", de: "Teilweise. Die Küche ist eingebaut.", fr: "En partie. La cuisine est équipée." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie hoch ist die Kaution?", options: ["Zwei Monatsmieten", "Drei Monatsmieten", "Eine Monatsmiete"], correct: 0, explication: "« die Kaution beträgt zwei Monatsmieten »." },
        { type: "qcm", consigne: "Choisissez le cas (Wohin?).", question: "Ich hänge das Bild an ___ Wand.", options: ["die", "der", "dem", "den"], correct: 0, explication: "direction → accusatif, die Wand (f.) → die." },
        { type: "trou", consigne: "Complétez (Wo?, datif).", texte: "Das Sofa steht an {0} Wand.", accepte: [["der"]], indice: "position → datif, die Wand → der" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Miete", droite: "le loyer" }, { gauche: "die Kaution", droite: "la caution" }, { gauche: "die Nebenkosten", droite: "les charges" }, { gauche: "kündigen", droite: "résilier" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Rédigez 3 questions à poser au propriétaire lors d'une visite.", attendus: ["Miete", "?"], modele: "Wie hoch sind die Nebenkosten? Ist eine Renovierung nötig? Wann kann ich einziehen?" }
      ]
    },
    {
      id: "b2t04", numero: 4, titre: "Voyages et réclamations", titreDE: "Reisen und Beschwerden",
      theme: "Voyages et lettres de réclamation", duree: 60,
      objectifs: ["Décrire un problème en vacances", "Rédiger une lettre de réclamation formelle"],
      grammairePoints: ["Lettre formelle", "Konjunktiv II (politesse/exigence)"],
      vocabulaire: [
        { de: "die Beschwerde", fr: "la réclamation", ex: "Ich möchte eine Beschwerde einreichen." },
        { de: "die Reklamation", fr: "la réclamation (produit/service)", ex: "Die Reklamation wurde bearbeitet." },
        { de: "mangelhaft", fr: "défectueux / insuffisant", ex: "Der Service war mangelhaft." },
        { de: "die Entschädigung", fr: "le dédommagement", ex: "Wir fordern eine Entschädigung." },
        { de: "die Verspätung", fr: "le retard", ex: "Der Flug hatte sechs Stunden Verspätung." },
        { de: "erstatten", fr: "rembourser", ex: "Die Kosten wurden erstattet." },
        { de: "der Mangel", fr: "le défaut / le manque", ex: "Wir haben mehrere Mängel festgestellt." },
        { de: "umgehend", fr: "immédiatement / sans délai", ex: "Bitte antworten Sie umgehend." }
      ],
      grammaire: [
        { attention: "Exigence polie au **Konjunktiv II** (*Ich **würde** Sie bitten…*) ; clôture : *Mit freundlichen Grüßen*.", titre: "La lettre de réclamation (registre formel)", intro: "On structure : objet, exposé des faits, exigence (Konjunktiv II), délai, formule de politesse.",
          tableau: { entetes: ["Fonction", "Formule"], lignes: [["Objet", "Betreff: Beschwerde über …"], ["Exposé", "Leider musste ich feststellen, dass …"], ["Exigence", "Ich würde Sie bitten, … / Ich erwarte, dass …"], ["Délai", "… bis spätestens zum 30. Juni."], ["Clôture", "Mit freundlichen Grüßen"]] },
          note: "Le Konjunktiv II (« ich würde Sie bitten ») rend l'exigence ferme mais polie." }
      ],
      dialogue: {
        titre: "Beschwerde an der Rezeption", lieu: "Hotel",
        lignes: [
          { loc: "Gast", de: "Das Zimmer entspricht nicht der Beschreibung.", fr: "La chambre ne correspond pas à la description." },
          { loc: "Rezeption", de: "Das tut mir leid. Was genau stimmt nicht?", fr: "J'en suis désolé. Qu'est-ce qui ne va pas exactement ?" },
          { loc: "Gast", de: "Es gibt keinen Balkon, obwohl er gebucht war.", fr: "Il n'y a pas de balcon, alors qu'il était réservé." },
          { loc: "Rezeption", de: "Ich kümmere mich umgehend um ein anderes Zimmer.", fr: "Je m'occupe immédiatement d'une autre chambre." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was ist das Problem?", options: ["Kein Balkon trotz Buchung", "Kein Frühstück", "Zu teuer"], correct: 0, explication: "« Es gibt keinen Balkon, obwohl er gebucht war »." },
        { type: "qcm", consigne: "Choisissez (exigence polie).", question: "Ich ___ Sie bitten, das Geld zu erstatten.", options: ["würde", "werde", "wurde", "will"], correct: 0, explication: "Konjunktiv II poli : ich würde Sie bitten." },
        { type: "trou", consigne: "Complétez (formule de clôture).", texte: "Mit freundlichen {0}", accepte: [["Grüßen"]], indice: "formule : Mit freundlichen Grüßen" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Beschwerde", droite: "la réclamation" }, { gauche: "mangelhaft", droite: "défectueux" }, { gauche: "die Entschädigung", droite: "le dédommagement" }, { gauche: "erstatten", droite: "rembourser" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Écrivez le début d'une lettre de réclamation (objet + exposé + exigence).", attendus: ["Beschwerde", "würde"], modele: "Betreff: Beschwerde über mein Hotelzimmer. Leider musste ich feststellen, dass das Zimmer keinen Balkon hatte. Ich würde Sie bitten, mir eine Entschädigung anzubieten." }
      ]
    },
    {
      id: "b2t05", numero: 5, titre: "Différences culturelles au travail", titreDE: "Kulturelle Unterschiede im Beruf",
      theme: "Différences culturelles professionnelles", duree: 60,
      objectifs: ["Comparer des cultures de travail", "Exprimer une généralisation prudente"],
      grammairePoints: ["man / es heißt, dass", "Comparatifs"],
      vocabulaire: [
        { de: "die Hierarchie", fr: "la hiérarchie", ex: "Die Hierarchie ist hier eher flach." },
        { de: "die Pünktlichkeit", fr: "la ponctualité", ex: "Pünktlichkeit gilt als wichtig." },
        { de: "die Verbindlichkeit", fr: "le caractère engageant / la fiabilité", ex: "Verbindlichkeit wird geschätzt." },
        { de: "der Umgangston", fr: "le ton (relationnel)", ex: "Der Umgangston ist locker." },
        { de: "das Vorurteil", fr: "le préjugé", ex: "Man sollte Vorurteile vermeiden." },
        { de: "die Eigenverantwortung", fr: "la responsabilité individuelle", ex: "Eigenverantwortung wird erwartet." },
        { de: "direkt", fr: "direct (franc)", ex: "Deutsche gelten als direkt." },
        { de: "die Erwartung", fr: "l'attente", ex: "Die Erwartungen sind hoch." }
      ],
      grammaire: [
        { attention: "*gelten **als*** = passer pour : une généralisation **prudente**, pas une vérité absolue.", titre: "Généraliser sans affirmer : « gelten als », « man », « es heißt »", intro: "Pour décrire une tendance culturelle sans la présenter comme une vérité absolue.",
          tableau: { entetes: ["Tournure", "Sens", "Exemple"], lignes: [["gelten als", "passer pour", "Deutsche gelten als pünktlich."], ["man", "on (général)", "In Japan grüßt man mit einer Verbeugung."], ["es heißt, dass", "on dit que", "Es heißt, dass Hierarchien flacher werden."], ["tendenziell", "plutôt / en tendance", "Der Ton ist tendenziell formell."]] },
          note: "Ces tournures permettent une généralisation prudente, attendue à l'écrit B2." }
      ],
      dialogue: {
        titre: "Erster Tag im Ausland", lieu: "Büro",
        lignes: [
          { loc: "Neue", de: "Soll ich die Kollegen siezen oder duzen?", fr: "Dois-je vouvoyer ou tutoyer les collègues ?" },
          { loc: "Kollege", de: "Hier duzt man sich, der Ton ist locker.", fr: "Ici on se tutoie, le ton est décontracté." },
          { loc: "Neue", de: "Und wie wichtig ist Pünktlichkeit?", fr: "Et la ponctualité, c'est important ?" },
          { loc: "Kollege", de: "Sehr. Meetings beginnen pünktlich.", fr: "Très. Les réunions commencent à l'heure." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie ist der Umgangston im Büro?", options: ["Locker, man duzt sich", "Sehr formell", "Unfreundlich"], correct: 0, explication: "« Hier duzt man sich, der Ton ist locker »." },
        { type: "qcm", consigne: "Choisissez.", question: "Deutsche ___ als pünktlich.", options: ["gelten", "halten", "scheinen", "wirken"], correct: 0, explication: "gelten als = passer pour." },
        { type: "trou", consigne: "Complétez (généralisation).", texte: "Es {0}, dass die Hierarchien flacher werden.", accepte: [["heißt"]], indice: "es heißt, dass = on dit que" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Hierarchie", droite: "la hiérarchie" }, { gauche: "das Vorurteil", droite: "le préjugé" }, { gauche: "der Umgangston", droite: "le ton" }, { gauche: "die Erwartung", droite: "l'attente" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Comparez la culture de travail de votre pays avec une autre (gelten als / man).", attendus: ["gelten", "man"], modele: "In meinem Land gilt ein lockerer Ton als normal, während man anderswo formeller ist. Pünktlichkeit wird überall geschätzt." }
      ]
    },
    {
      id: "b2t06", numero: 6, titre: "L'Europe et les Allemands", titreDE: "Europa und die Deutschen",
      theme: "L'Europe et les Allemands", duree: 60,
      objectifs: ["Discuter de l'Europe et de l'identité", "Argumenter pour et contre"],
      grammairePoints: ["Connecteurs d'argumentation", "Passif"],
      vocabulaire: [
        { de: "die Europäische Union", fr: "l'Union européenne", ex: "Deutschland ist Mitglied der Europäischen Union." },
        { de: "die Grenze", fr: "la frontière", ex: "Innerhalb der EU gibt es offene Grenzen." },
        { de: "die Freizügigkeit", fr: "la libre circulation", ex: "Die Freizügigkeit erlaubt das Reisen ohne Pass." },
        { de: "der Binnenmarkt", fr: "le marché intérieur", ex: "Der Binnenmarkt fördert den Handel." },
        { de: "die Vielfalt", fr: "la diversité", ex: "Europa lebt von seiner Vielfalt." },
        { de: "die Zusammenarbeit", fr: "la coopération", ex: "Die Zusammenarbeit ist eng." },
        { de: "die Währung", fr: "la monnaie", ex: "Der Euro ist die gemeinsame Währung." },
        { de: "souverän", fr: "souverain", ex: "Die Staaten bleiben souverän." }
      ],
      grammaire: [
        { attention: "*einerseits … andererseits* structure l'argumentation ; le passif rend le propos impersonnel.", titre: "Argumenter : connecteurs et passif impersonnel", intro: "On organise un argumentaire avec des connecteurs ; le passif rend le propos impersonnel et objectif.",
          tableau: { entetes: ["Fonction", "Connecteur / forme", "Exemple"], lignes: [["thèse", "einerseits", "Einerseits stärkt die EU den Handel,"], ["contre", "andererseits", "andererseits verlieren Staaten an Macht."], ["concession", "zwar … aber", "Zwar ist es teuer, aber sinnvoll."], ["passif", "wird … + participe", "Vieles wird gemeinsam entschieden."]] },
          note: "« einerseits … andererseits » structure une argumentation équilibrée." }
      ],
      dialogue: {
        titre: "Pro und Kontra EU", lieu: "Seminar",
        lignes: [
          { loc: "Jonas", de: "Was bringt uns die EU eigentlich?", fr: "Que nous apporte l'UE au fond ?" },
          { loc: "Sara", de: "Einerseits Reisefreiheit, andererseits viel Bürokratie.", fr: "D'un côté la liberté de circulation, de l'autre beaucoup de bureaucratie." },
          { loc: "Jonas", de: "Trotzdem überwiegen die Vorteile, finde ich.", fr: "Malgré tout, les avantages l'emportent, je trouve." },
          { loc: "Sara", de: "Da stimme ich dir zu.", fr: "Là je suis d'accord avec toi." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was nennt Sara als Nachteil?", options: ["Die Bürokratie", "Die Reisefreiheit", "Die Währung"], correct: 0, explication: "« andererseits viel Bürokratie »." },
        { type: "qcm", consigne: "Choisissez le connecteur.", question: "Einerseits ist es teuer, ___ ist es sinnvoll.", options: ["andererseits", "deshalb", "weil", "obwohl"], correct: 0, explication: "einerseits … andererseits." },
        { type: "trou", consigne: "Complétez (passif).", texte: "Viele Gesetze {0} gemeinsam beschlossen.", accepte: [["werden"]], indice: "pluriel passif → werden + participe" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Grenze", droite: "la frontière" }, { gauche: "die Vielfalt", droite: "la diversité" }, { gauche: "die Währung", droite: "la monnaie" }, { gauche: "die Zusammenarbeit", droite: "la coopération" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Donnez un argument pour et un argument contre l'UE (einerseits … andererseits).", attendus: ["einerseits", "andererseits"], modele: "Einerseits ermöglicht die EU freies Reisen und Handel, andererseits kritisieren manche die Bürokratie. Insgesamt überwiegen für mich die Vorteile." }
      ]
    },
    {
      id: "b2t07", numero: 7, titre: "Le small talk", titreDE: "Small Talk",
      theme: "Petites conversations", duree: 55,
      objectifs: ["Engager et entretenir une conversation légère", "Éviter les sujets sensibles"],
      grammairePoints: ["Questions ouvertes", "Formules de relance"],
      vocabulaire: [
        { de: "das Gespräch", fr: "la conversation", ex: "Ein lockeres Gespräch entspannt die Stimmung." },
        { de: "die Stimmung", fr: "l'ambiance / l'humeur", ex: "Die Stimmung war gut." },
        { de: "anknüpfen an", fr: "rebondir sur", ex: "Ich knüpfe an das Wetter an." },
        { de: "das Thema", fr: "le sujet", ex: "Politik ist ein heikles Thema." },
        { de: "heikel", fr: "délicat / sensible", ex: "Gehalt ist ein heikles Thema." },
        { de: "höflich", fr: "poli", ex: "Bleib immer höflich." },
        { de: "die Floskel", fr: "la formule toute faite", ex: "« Wie geht's? » ist eine Floskel." },
        { de: "auflockern", fr: "détendre (l'atmosphère)", ex: "Ein Witz lockert das Gespräch auf." }
      ],
      grammaire: [
        { attention: "Évite les sujets **heikel** (salaire, religion, politique) ; préfère les questions ouvertes.", titre: "Lancer et relancer la conversation", intro: "On préfère des questions ouvertes (W-Fragen) et des relances brèves pour montrer son intérêt.",
          tableau: { entetes: ["Acte", "Formule"], lignes: [["Ouvrir", "Schönes Wetter heute, nicht wahr?"], ["Question ouverte", "Was machen Sie beruflich?"], ["Relancer", "Ach wirklich? Erzählen Sie mehr!"], ["Clore poliment", "Es war nett, mit Ihnen zu plaudern."]] },
          note: "Sujets sûrs : météo, voyages, loisirs. Sujets à éviter : salaire, religion, politique, âge." }
      ],
      dialogue: {
        titre: "Auf einer Konferenz", lieu: "Empfang",
        lignes: [
          { loc: "A", de: "Sind Sie zum ersten Mal hier?", fr: "C'est la première fois que vous venez ?" },
          { loc: "B", de: "Ja, und Sie? Woher kommen Sie?", fr: "Oui, et vous ? D'où venez-vous ?" },
          { loc: "A", de: "Aus Hamburg. Die Stadt ist gerade wunderschön.", fr: "De Hambourg. La ville est magnifique en ce moment." },
          { loc: "B", de: "Ach wirklich? Da wollte ich immer schon hin.", fr: "Ah vraiment ? J'ai toujours voulu y aller." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Womit beginnt A das Gespräch?", options: ["Mit einer offenen Frage", "Mit einer Beschwerde", "Mit Politik"], correct: 0, explication: "« Sind Sie zum ersten Mal hier? »." },
        { type: "qcm", consigne: "Choisissez un sujet adapté au small talk.", question: "Welches Thema ist sicher?", options: ["Das Wetter", "Das Gehalt", "Die Religion", "Das Alter"], correct: 0, explication: "La météo est un sujet neutre ; les autres sont heikel." },
        { type: "trou", consigne: "Complétez (relance).", texte: "Ach {0}? Erzählen Sie mehr!", accepte: [["wirklich"]], indice: "relance d'intérêt : Ach wirklich?" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Stimmung", droite: "l'ambiance" }, { gauche: "heikel", droite: "délicat" }, { gauche: "die Floskel", droite: "la formule" }, { gauche: "auflockern", droite: "détendre" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Lancez un small talk avec un inconnu lors d'un événement (2-3 phrases).", attendus: ["?", "Sie"], modele: "Schönes Wetter heute, nicht wahr? Sind Sie auch zum ersten Mal hier? Was machen Sie beruflich?" }
      ]
    }
  ]
};
