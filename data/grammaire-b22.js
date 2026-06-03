/* =====================================================================
   grammaire-b22.js — 9 LEÇONS DE GRAMMAIRE du module B2.2
   (extension de window.GRAMMAIRE_B2). Suit les 9 points B2.2 du
   programme « Erkundungen » : Konjunktiv II, congruence, ordre des mots,
   temps, emploi du conditionnel, Konjunktiv I (discours indirect +
   formes de substitution), locutions verbo-nominales, prépositions.
   ===================================================================== */
window.GRAMMAIRE_B2 = Object.assign(window.GRAMMAIRE_B2 || {}, {
  b2g09: {
    id: "b2g09", titre: "Le subjonctif II", titreDE: "Der Konjunktiv II", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B2",
    objectifs: ["Former le Konjunktiv II présent et passé", "Exprimer politesse, souhait et irréel"],
    grammairePoints: ["würde, hätte, wäre, könnte", "hätte/wäre + participe (passé)"],
    exemplesPlus: [{"de":"An deiner Stelle würde ich mit dem Chef sprechen.","fr":"Höflicher Rat mit *würde*."},{"de":"Wenn ich mehr Zeit hätte, würde ich ein Instrument lernen.","fr":"Irreale Bedingung: es ist gerade nicht möglich."},{"de":"Könnten Sie mir bitte kurz weiterhelfen?","fr":"Sehr höfliche Bitte mit *könnten*."},{"de":"Wenn ich das früher gewusst hätte, hätte ich anders gehandelt.","fr":"Konjunktiv II der Vergangenheit."},{"de":"Beinahe wäre ich zu spät gekommen.","fr":"*beinahe* + Konjunktiv II: es ist fast passiert."}],
    coursDE: [
      "Der **Konjunktiv II** drückt **Irreales**, **Höfliches** und **Wünsche** aus. Auf B2-Niveau solltest du nicht nur *würde* benutzen, sondern auch die echten Formen sicher beherrschen und die Vergangenheit bilden können.",
      "Für die **Gegenwart** nimmst du *würde* + Infinitiv oder die kurze Form: **wäre, hätte, könnte, müsste, dürfte, sollte**. Bei *sein, haben* und den Modalverben ist die kurze Form besser: « *Ich **wäre** froh* », « *Ich **hätte** Zeit* ».",
      "Für die **Vergangenheit** gibt es nur **eine** Form: *hätte* oder *wäre* + Partizip II. Beispiel: « *Ich **hätte** das nicht **gesagt*** », « *Wir **wären** früher **gekommen*** ». Diese Form benutzt du für irreale Situationen in der Vergangenheit.",
      "Typische Anwendungen: höfliche Bitten (« *Könnten Sie…* »), Ratschläge (« *Du solltest…* »), irreale Bedingungen (« *Wenn ich Zeit hätte, würde ich…* ») und Wünsche. Mit dem Konjunktiv II klingst du höflich und elegant."
    ],
    grammaire: [
      { exemples: [{"de":"Ich hätte dir gern geholfen.","fr":"J'aurais aimé t'aider."},{"de":"Er tut, als ob er alles wüsste.","fr":"Il fait comme s'il savait tout."}], regle: "Présent : **würde** + infinitif / *hätte, wäre, könnte*. Passé : **hätte/wäre + participe**. Comparaison irréelle : **als ob** + KII (fin).", attention: "Avec modal au passé : *Ich **hätte** kommen **können*** (double infinitif à la fin).", titre: "Présent et passé", intro: "Présent : würde + infinitif, ou les formes propres (hätte, wäre, könnte…). Passé : hätte/wäre + participe II.",
        tableau: { entetes: ["Emploi", "Forme", "Exemple"], lignes: [["politesse", "könnte / würde", "Könnten Sie mir helfen?"], ["souhait", "hätte/wäre gern", "Ich hätte gern mehr Zeit."], ["irréel présent", "würde + infinitif", "Ich würde sofort kündigen."], ["irréel passé", "hätte/wäre + participe", "Ich hätte das nie gesagt."], ["conseil", "An deiner Stelle würde ich …", "An deiner Stelle würde ich warten."]] },
        schemas: [{ legende: "Irréel passé : hätte (2) … participe (fin).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "hätte", r: "hätte (2)", c: "verbe" }, { m: "das anders", r: "complément", c: "objet" }, { m: "gemacht", r: "participe (fin)", c: "fin" }] }],
        note: "Avec un modal au passé : « Ich hätte kommen können » (j'aurais pu venir) — double infinitif à la fin." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "L'irréel du passé se forme avec…", options: ["hätte/wäre + participe II", "würde + infinitif", "haben + infinitif"], correct: 0, explication: "Ich hätte gesagt / Ich wäre gegangen." },
      { type: "qcm", consigne: "Choisissez (politesse).", question: "___ Sie mir bitte helfen?", options: ["Könnten", "Können", "Konnten", "Kannst"], correct: 0, explication: "Konjunktiv II poli : Könnten Sie…?" },
      { type: "trou", consigne: "Complétez (irréel passé de sein).", texte: "An deiner Stelle {0} ich früher gegangen.", accepte: [["wäre"]], indice: "gehen → sein → wäre gegangen" },
      { type: "association", consigne: "Associez l'infinitif et sa forme.", paires: [{ gauche: "haben", droite: "hätte" }, { gauche: "sein", droite: "wäre" }, { gauche: "können", droite: "könnte" }, { gauche: "werden", droite: "würde" }] },
      { type: "ordre", consigne: "Construisez la phrase (irréel passé).", mots: ["Ich", "hätte", "das", "nie", "gesagt"], correct: "Ich hätte das nie gesagt", traduction: "Je n'aurais jamais dit ça." }
    ]
  },
  b2g10: {
    id: "b2g10", titre: "L'accord du verbe", titreDE: "Die Verbkongruenz", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B2",
    objectifs: ["Accorder le verbe avec le sujet", "Gérer les sujets collectifs et coordonnés"],
    grammairePoints: ["singulier / pluriel", "sowohl…als auch, eine Reihe von"],
    exemplesPlus: [{"de":"Sowohl der Lehrer als auch die Schüler waren zufrieden.","fr":"Zwei Subjekte: das Verb steht im Plural."},{"de":"Eine Reihe von Problemen wurde diskutiert.","fr":"*eine Reihe von*: meistens Singular."},{"de":"Die Mehrheit der Studenten ist dafür.","fr":"*die Mehrheit*: Verb im Singular."},{"de":"Weder er noch seine Freunde kommen zur Party.","fr":"Bei *weder … noch* richtet sich das Verb meist nach dem Letzten."},{"de":"Ein Drittel der Mitglieder hat abgestimmt.","fr":"Bruchzahl als Subjekt: Singular."}],
    coursDE: [
      "Die **Verbkongruenz** bedeutet, dass das Verb mit dem Subjekt in **Person und Zahl** übereinstimmt. Meistens ist das einfach, aber bei zusammengesetzten Subjekten gibt es auf B2-Niveau einige feine Regeln.",
      "Bei zwei Subjekten mit **und** steht das Verb im **Plural**: « *Anna und Tom **kommen** heute* ». Bei **sowohl … als auch** ebenfalls Plural. Bei **entweder … oder** und **weder … noch** richtet sich das Verb meist nach dem **näheren** Subjekt.",
      "Ausdrücke wie **eine Reihe von**, **eine Gruppe von**, **eine Menge** stehen formal im **Singular**: « *Eine Reihe von Studenten **war** anwesend* ». In der Standardsprache ist hier der Singular korrekt.",
      "Bei Mengenangaben (*ein Kilo, ein Liter, ein Prozent*) hängt das Verb vom gemessenen Nomen ab. Solche Details wirken klein, aber sie zeigen ein sicheres Sprachgefühl auf B2-Niveau."
    ],
    grammaire: [
      { exemples: [{"de":"Eine Reihe von Gästen fehlt noch.","fr":"Un certain nombre d'invités manquent encore."},{"de":"Anna und Tom kommen später.","fr":"Anna et Tom viennent plus tard."}], regle: "Le verbe s'accorde avec le **noyau** du sujet : *A und B* → pluriel ; *eine Reihe von …* → singulier (noyau *Reihe*).", attention: "*es gibt* est **toujours** au singulier (*es gibt viele Möglichkeiten*).", titre: "Le verbe s'accorde avec le vrai sujet", intro: "On repère le noyau du sujet pour choisir le singulier ou le pluriel.",
        tableau: { entetes: ["Sujet", "Accord", "Exemple"], lignes: [["nom singulier", "singulier", "Die Gruppe arbeitet gut."], ["eine Reihe von + pluriel", "singulier (noyau Reihe)", "Eine Reihe von Studenten fehlt."], ["A und B", "pluriel", "Anna und Tom kommen."], ["sowohl … als auch", "pluriel", "Sowohl er als auch sie sind da."], ["weder … noch", "souvent pluriel", "Weder er noch sie waren da."]] },
        note: "« es gibt » est toujours suivi… du verbe au singulier (es gibt viele Möglichkeiten). Le noyau « eine Reihe / eine Gruppe » impose le singulier." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Anna und Tom ___ » prend…", options: ["le pluriel (kommen)", "le singulier (kommt)", "peu importe"], correct: 0, explication: "deux sujets coordonnés → pluriel." },
      { type: "qcm", consigne: "Choisissez.", question: "Eine Reihe von Studenten ___ heute.", options: ["fehlt", "fehlen", "fehlst", "fehle"], correct: 0, explication: "noyau « eine Reihe » → singulier." },
      { type: "trou", consigne: "Complétez (accord).", texte: "Sowohl er als auch seine Kollegen {0} eingeladen. (sein)", accepte: [["sind"]], indice: "sowohl … als auch → pluriel : sind" },
      { type: "association", consigne: "Associez le sujet et l'accord.", paires: [{ gauche: "die Gruppe", droite: "singulier" }, { gauche: "Anna und Tom", droite: "pluriel" }, { gauche: "eine Reihe von …", droite: "singulier" }, { gauche: "es gibt", droite: "singulier" }] },
      { type: "qcm", consigne: "Choisissez.", question: "Es ___ viele Möglichkeiten.", options: ["gibt", "geben", "gibst", "gäbe"], correct: 0, explication: "es gibt = toujours singulier." }
    ]
  },
  b2g11: {
    id: "b2g11", titre: "L'ordre des mots", titreDE: "Die Wortstellung", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B2",
    objectifs: ["Ordonner les compléments (TeKaMoLo)", "Placer correctement « nicht »"],
    grammairePoints: ["Te-Ka-Mo-Lo", "parenthèse verbale, position de nicht"],
    exemplesPlus: [{"de":"Ich fahre morgen mit dem Auto zur Arbeit.","fr":"Reihenfolge: temporal – modal – lokal (Te-Ka-Mo-Lo)."},{"de":"Er hat gestern in der Stadt ein Geschenk gekauft.","fr":"Satzklammer: *hat … gekauft* umschließt den Satz."},{"de":"Sie ruft heute Abend ihre Mutter an.","fr":"Trennbares Verb: *an* steht am Ende."},{"de":"Ich habe den Film nicht gesehen.","fr":"*nicht* steht vor dem Partizip."},{"de":"Wir fahren nicht nach Berlin, sondern nach Dresden.","fr":"*nicht* vor dem Teil, der verneint wird."}],
    coursDE: [
      "Die **Wortstellung** im deutschen Satz folgt klaren Regeln. Auf B2-Niveau geht es darum, die Reihenfolge im Mittelfeld und die Position von *nicht* zu beherrschen, damit deine Sätze natürlich klingen.",
      "Im Hauptsatz steht das Verb immer auf **Position 2**, und bei zusammengesetzten Formen bildet sich eine **Satzklammer**: das konjugierte Verb vorn, der zweite Teil am Ende. « *Ich **habe** gestern einen Brief **geschrieben*** ».",
      "Für die Reihenfolge im Mittelfeld hilft die Regel **Te-Ka-Mo-Lo**: **Te**mporal (wann?) – **Ka**usal (warum?) – **Mo**dal (wie?) – **Lo**kal (wo?). Beispiel: « *Ich fahre **morgen** **wegen der Arbeit** **mit dem Zug** **nach Köln*** ».",
      "Die Position von **nicht**: Es steht **am Ende**, wenn es den ganzen Satz verneint, aber **direkt vor** dem Element, das es genau verneint. « *Ich komme heute **nicht*** » aber « *Ich fahre **nicht** nach Berlin* »."
    ],
    grammaire: [
      { exemples: [{"de":"Ich fahre morgen mit dem Zug nach Köln.","fr":"Demain, je vais à Cologne en train."},{"de":"Er hat gestern nicht angerufen.","fr":"Il n'a pas appelé hier."}], regle: "Champ central : **TeKaMoLo** (Temporel – Kausal – Modal – Lokal). Verbe conjugué en **2ᵉ**, reste du verbe **à la fin**.", attention: "*nicht* se place **avant** l'élément nié (adjectif, lieu) mais **à la fin** s'il nie le verbe seul.", titre: "Le champ central : TeKaMoLo", intro: "Dans le Mittelfeld, l'ordre habituel des compléments est : Temporel – Kausal – Modal – Lokal. Le verbe conjugué reste en 2e position, le reste du verbe à la fin (parenthèse verbale).",
        tableau: { entetes: ["Ordre", "Question", "Exemple"], lignes: [["Te (temps)", "wann?", "Ich fahre morgen"], ["Ka (cause)", "warum?", "… wegen der Arbeit"], ["Mo (manière)", "wie?", "… mit dem Zug"], ["Lo (lieu)", "wohin?", "… nach Berlin."]] },
        schemas: [{ legende: "Parenthèse verbale : verbe (2) … reste du verbe (fin).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "habe", r: "auxiliaire (2)", c: "verbe" }, { m: "gestern in Berlin", r: "Te … Lo", c: "objet" }, { m: "gearbeitet", r: "participe (fin)", c: "fin" }] }],
        note: "« nicht » se place en fin de Mittelfeld, mais AVANT l'élément nié (adjectif, lieu, partie du verbe) : « Ich fahre nicht nach Berlin »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "TeKaMoLo signifie l'ordre…", options: ["temps – cause – manière – lieu", "lieu – manière – cause – temps", "sujet – verbe – objet"], correct: 0, explication: "Temporal, Kausal, Modal, Lokal." },
      { type: "qcm", consigne: "Choisissez le bon ordre.", question: "Ich fahre …", options: ["morgen mit dem Zug nach Köln", "nach Köln morgen mit dem Zug", "mit dem Zug morgen nach Köln", "nach Köln mit dem Zug morgen"], correct: 0, explication: "Temps (morgen) – manière (mit dem Zug) – lieu (nach Köln)." },
      { type: "trou", consigne: "Complétez (négation de lieu).", texte: "Ich fahre {0} nach Berlin, ich bleibe hier.", accepte: [["nicht"]], indice: "négation avant l'élément nié : nicht nach Berlin" },
      { type: "association", consigne: "Associez la lettre et la catégorie.", paires: [{ gauche: "Te", droite: "temps" }, { gauche: "Ka", droite: "cause" }, { gauche: "Mo", droite: "manière" }, { gauche: "Lo", droite: "lieu" }] },
      { type: "ordre", consigne: "Construisez la phrase (TeKaMoLo).", mots: ["Ich", "gehe", "heute", "zu", "Fuß", "ins", "Büro"], correct: "Ich gehe heute zu Fuß ins Büro", traduction: "Aujourd'hui je vais au bureau à pied." }
    ]
  },
  b2g12: {
    id: "b2g12", titre: "Les indicateurs de temps", titreDE: "Temporalangaben", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
    objectifs: ["Relier des actions dans le temps", "Choisir conjonction, préposition ou adverbe"],
    grammairePoints: ["als, während, nachdem, seitdem", "vor/seit/bis, danach", "ab, gegen, über, innerhalb/außerhalb"],
    exemplesPlus: [{"de":"Als ich gestern aufwachte, schien die Sonne.","fr":"*als*: einmal in der Vergangenheit."},{"de":"Während ich arbeitete, hörte ich Musik.","fr":"*während*: zwei Dinge gleichzeitig."},{"de":"Seitdem er umgezogen ist, sehen wir uns selten.","fr":"*seitdem*: ab einem Zeitpunkt bis jetzt."},{"de":"Nachdem das Spiel zu Ende war, gingen alle nach Hause.","fr":"*nachdem*: das eine nach dem anderen."},{"de":"Seit drei Wochen habe ich nichts von ihr gehört.","fr":"*seit* + Dativ: Dauer bis zur Gegenwart."}],
    coursDE: [
      "**Temporalangaben** verbinden Sätze in der Zeit. Auf B2-Niveau benutzt du vor allem **Temporalsätze** mit verschiedenen Konjunktionen, die genau zeigen, ob etwas gleichzeitig, vorher oder nachher passiert.",
      "Für **Gleichzeitigkeit** benutzt du **während** (parallel), **als** (einmalig in der Vergangenheit) und **wenn** (Gegenwart oder Wiederholung): « *Als ich klein war, wohnte ich in Bonn* », « *Während sie kochte, deckte er den Tisch* ».",
      "Für **Vorzeitigkeit** benutzt du **nachdem** (+ Plusquamperfekt) und **sobald**; für **Nachzeitigkeit** **bevor** und **ehe**: « *Nachdem ich gegessen hatte, ging ich los* ». **seitdem** zeigt einen Anfangspunkt: « *Seitdem ich hier wohne, bin ich glücklich* ».",
      "Auch Präpositionen helfen: *vor, seit, bis, innerhalb* (+ Genitiv). Achte darauf, ob du eine **Konjunktion** (Nebensatz, Verb am Ende) oder eine **Präposition** (mit Nomen) brauchst – das ist der häufigste Fehler.",
      "Bei den **temporalen Präpositionen** helfen oft Paare: **vor** (früher) gegenüber **nach** (später), **seit** (Beginn in der Vergangenheit, dauert an) gegenüber **bis** (Endpunkt), **während/bei** (Gleichzeitigkeit), **ab** (nur der Beginn) gegenüber **von … bis** (Beginn und Ende). Dazu kommen **innerhalb/außerhalb** (+ Genitiv), **gegen** (ungefähr eine Uhrzeit) und **über** (die ganze Dauer). Merke: « vor zwei Jahren » = il y a deux ans, und **ab** und **bis** nie zusammen — entweder « von Montag bis Freitag » ODER « ab Montag »."
    ],
    grammaire: [
      { exemples: [{"de":"Seitdem er hier ist, geht es besser.","fr":"Depuis qu'il est là, ça va mieux."},{"de":"Nach dem Essen gingen wir spazieren.","fr":"Après le repas, nous sommes allés nous promener."}], regle: "Trois moyens : **conjonction** (verbe fin : *während, nachdem, seitdem*), **préposition** (*vor, seit, nach*), **adverbe** (*danach, inzwischen*).", attention: "Même idée, trois formes : *nachdem ich gegessen hatte* = *nach dem Essen* = *danach*.", titre: "Conjonctions, prépositions et adverbes temporels", intro: "Trois moyens d'exprimer le temps : la subordonnée (verbe fin), la préposition (+ groupe nominal), l'adverbe.",
        tableau: { entetes: ["Type", "Mot", "Exemple"], lignes: [["conjonction", "während / als / nachdem", "Während ich aß, las ich."], ["conjonction", "seitdem / sobald / bis", "Seitdem er hier ist, geht es besser."], ["préposition", "vor / seit / nach (+ Dat.)", "Nach dem Essen ging ich."], ["adverbe", "danach / vorher / inzwischen", "Inzwischen war es spät."]] },
        note: "Même idée, trois formes : « nachdem ich gegessen hatte » (conj.) = « nach dem Essen » (prép.) = « danach » (adv.)." },
      {"titre":"Antisèche : prépositions temporelles","intro":"Tableau de référence des principales prépositions de temps.","exemples":[{"de":"Vor dem Essen, nach der Arbeit, seit 2019, bis morgen, ab Montag, gegen 18 Uhr.","fr":"avant le repas, après le travail, depuis 2019, jusqu'à demain, à partir de lundi, vers 18h."}],"regle":"**vor** = avant · **nach** = après · **seit** = depuis · **bis** = jusqu'à · **während/bei** = pendant · **ab** = à partir de · **von…bis** = de…à · **innerhalb/außerhalb** = dans/hors d'un délai · **gegen** = environ (heure) · **über** = toute la durée.","attention":"**ab** et **bis** jamais ensemble : « von Montag bis Freitag » OU « ab Montag ». « il y a X ans » = **vor** X Jahren.","tableau":{"entetes":["Préposition","Sens","Exemple"],"lignes":[["vor / nach","avant / après","vor dem Essen / nach der Arbeit"],["seit / bis","depuis / jusqu'à","seit 2019 / bis morgen"],["während / bei","pendant (simultané)","während des Essens / beim Essen"],["ab","à partir de (début)","ab 9 Uhr"],["von … bis","de … à (début+fin)","von 9 bis 17 Uhr"],["innerhalb / außerhalb","dans / hors d'un délai (+ Gén.)","innerhalb einer Woche"],["gegen","environ (heure)","gegen 18 Uhr"],["über","toute la durée","über das Wochenende"]]},"note":"**während / innerhalb / außerhalb** demandent le **génitif** ; **vor / nach / seit / bei / ab** le **datif**."}
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« seitdem » introduit…", options: ["une subordonnée (verbe à la fin)", "un groupe nominal", "rien"], correct: 0, explication: "Conjonction → verbe à la fin." },
      { type: "qcm", consigne: "Conjonction ou préposition ?", question: "___ dem Essen gingen wir spazieren.", options: ["Nach", "Nachdem", "Während", "Seitdem"], correct: 0, explication: "+ groupe nominal (dem Essen) → préposition « nach »." },
      { type: "trou", consigne: "Complétez (conjonction, verbe à la fin).", texte: "Seitdem er Sport {0}, fühlt er sich besser. (machen)", accepte: [["macht"]], indice: "seitdem → verbe à la fin" },
      { type: "association", consigne: "Associez le mot et son type.", paires: [{ gauche: "während", droite: "conjonction" }, { gauche: "nach", droite: "préposition" }, { gauche: "danach", droite: "adverbe" }, { gauche: "seitdem", droite: "conjonction" }] },
      { type: "ordre", consigne: "Construisez la subordonnée temporelle.", mots: ["während", "ich", "kochte"], correct: "während ich kochte", traduction: "pendant que je cuisinais" },
      {"type":"qcm","consigne":"vor ou nach ?","question":"___ dem Frühstück putze ich mir die Zähne.","options":["Nach","Vor","Seit"],"correct":0,"explication":"D'abord manger, ensuite les dents → nach (= après)."},
      {"type":"qcm","consigne":"seit ou bis ?","question":"Ich wohne ___ 2019 in München.","options":["seit","bis","ab"],"correct":0,"explication":"Début dans le passé qui dure encore → seit (+ présent)."},
      {"type":"qcm","cat":"comp","consigne":"« Il y a 2 ans, je suis venu en Allemagne. »","question":"Quelle traduction est correcte ?","options":["Ich bin nach 2 Jahren nach Deutschland gekommen.","Ich bin vor 2 Jahren nach Deutschland gekommen.","Ich bin seit 2 Jahren nach Deutschland gekommen."],"correct":1,"explication":"« il y a » dans le passé → vor + Dativ : vor 2 Jahren."},
      {"type":"qcm","consigne":"während ou bei ?","question":"___ Regen bleibe ich zu Hause.","options":["Bei","Während","Seit"],"correct":0,"explication":"bei + nom (condition) ; während veut une subordonnée ou un génitif."},
      {"type":"qcm","consigne":"ab ou von…bis ?","question":"Der Kurs geht ___ 9 bis 12 Uhr.","options":["von","ab","seit"],"correct":0,"explication":"Deux bornes (9 et 12) → von…bis ; ab = seulement le début."},
      {"type":"qcm","consigne":"Sens de « gegen 18 Uhr » ?","question":"Wir kommen gegen 18 Uhr an.","options":["exactement à 18h","environ, vers 18h","à partir de 18h"],"correct":1,"explication":"gegen + heure = environ, vers."},
      {"type":"qcm","consigne":"innerhalb ou außerhalb ?","question":"___ der Öffnungszeiten ist das Büro geschlossen.","options":["Außerhalb","Innerhalb","Während"],"correct":0,"explication":"en dehors des horaires → außerhalb (+ génitif)."},
      {"type":"qcm","consigne":"Sens de « über das Wochenende » ?","question":"Wir fahren über das Wochenende weg.","options":["après le week-end","pendant tout le week-end","avant le week-end"],"correct":1,"explication":"über + période = toute la durée."},
      {"type":"association","consigne":"Associez la préposition et son sens.","paires":[{"gauche":"seit","droite":"depuis (dure encore)"},{"gauche":"bis","droite":"jusqu'à (fin)"},{"gauche":"ab","droite":"à partir de (début)"},{"gauche":"gegen","droite":"environ (heure)"},{"gauche":"über","droite":"toute la durée"}]}
    ]
  },
  b2g13: {
    id: "b2g13", titre: "L'emploi du conditionnel", titreDE: "Gebrauch des Konjunktivs II", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
    objectifs: ["Exprimer souhait irréel et comparaison irréelle", "Employer « als ob »"],
    grammairePoints: ["wenn … doch nur", "als ob / als wenn + Konjunktiv II"],
    exemplesPlus: [{"de":"Wenn er doch nur pünktlicher wäre!","fr":"Irrealer Wunsch mit *doch nur*."},{"de":"Hätte ich doch mehr gelernt!","fr":"Wunsch über die Vergangenheit."},{"de":"Er tut so, als ob er alles wüsste.","fr":"*als ob* + Konjunktiv II: es ist nicht wirklich so."},{"de":"Sie sieht aus, als wäre sie krank.","fr":"*als* + Konjunktiv II (ohne *ob*, Verb folgt direkt)."},{"de":"Wenn ich nur früher davon erfahren hätte!","fr":"Bedauern über die Vergangenheit."}],
    coursDE: [
      "In dieser Lektion vertiefst du den **Gebrauch** des Konjunktivs II in besonderen Strukturen, die typisch für B2 sind: irreale Wünsche, irreale Vergleiche und höfliche Distanz.",
      "Für **irreale Wünsche** benutzt du **wenn … doch (nur)**: « *Wenn ich **doch nur** mehr Zeit **hätte!*** », « *Wäre ich **doch** früher gekommen!* ». Diese Sätze drücken Bedauern oder einen starken Wunsch aus.",
      "Für **irreale Vergleiche** benutzt du **als ob** + Konjunktiv II (Verb am Ende): « *Er tut so, **als ob** er alles **wüsste*** ». Eine Variante ist **als** + Verb direkt danach: « *Er tut so, **als wüsste** er alles* ».",
      "Der Konjunktiv II schafft außerdem **höfliche Distanz**: « *Ich **würde** vorschlagen, dass… *», « *Es **wäre** schön, wenn… *». In formellen Situationen wirkt diese Form besonders respektvoll und professionell."
    ],
    grammaire: [
      { exemples: [{"de":"Wenn ich doch nur mehr Zeit hätte!","fr":"Si seulement j'avais plus de temps !"},{"de":"Sie sieht aus, als ob sie müde wäre.","fr":"Elle a l'air fatiguée."}], regle: "Emplois : **souhait irréel** (*Wenn … doch nur*), **comparaison irréelle** (*als ob* + KII fin), **politesse**, **conseil**.", attention: "Après **als ob**, le verbe va à la **fin** ; après **als** seul, il vient **juste après** (*als wüsste er*).", titre: "Souhaits et comparaisons irréels", intro: "Le Konjunktiv II sert au souhait irréel (wenn … doch nur) et à la comparaison irréelle (als ob).",
        tableau: { entetes: ["Emploi", "Structure", "Exemple"], lignes: [["souhait irréel", "Wenn … doch nur + KII", "Wenn ich doch nur mehr Zeit hätte!"], ["comparaison", "als ob + KII (fin)", "Er tut, als ob er alles wüsste."], ["comparaison", "als + KII (verbe 2e)", "Er tut, als wüsste er alles."], ["politesse/conseil", "würde / sollte", "Du solltest dich ausruhen."]] },
        schemas: [{ legende: "als ob : verbe au Konjunktiv II à la FIN.", mots: [{ m: "Er tut so,", r: "principale", c: "objet" }, { m: "als ob", r: "comparaison irréelle", c: "conj" }, { m: "er alles", r: "sujet + complément", c: "sujet" }, { m: "wüsste", r: "Konjunktiv II (fin)", c: "fin" }] }],
        note: "Après « als ob », le verbe va à la fin ; après « als » seul, le verbe vient juste après (« als wüsste er »)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Après « als ob », le verbe (Konjunktiv II) se place…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "als ob → subordination → verbe à la fin." },
      { type: "qcm", consigne: "Choisissez (souhait irréel).", question: "Wenn ich doch nur mehr Geld ___!", options: ["hätte", "habe", "hatte", "haben"], correct: 0, explication: "souhait irréel → Konjunktiv II : hätte." },
      { type: "trou", consigne: "Complétez (als ob, verbe à la fin).", texte: "Er tut, als ob er krank {0}. (sein)", accepte: [["wäre"]], indice: "als ob + Konjunktiv II → wäre" },
      { type: "association", consigne: "Associez l'emploi et la structure.", paires: [{ gauche: "souhait irréel", droite: "wenn … doch nur" }, { gauche: "comparaison", droite: "als ob" }, { gauche: "conseil", droite: "du solltest" }, { gauche: "politesse", droite: "würde" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Si seulement j'avais plus de temps !", accepte: ["Wenn ich doch nur mehr Zeit hätte", "Hätte ich doch nur mehr Zeit"], aide: "souhait irréel : wenn … doch nur + Konjunktiv II" }
    ]
  },
  b2g14: {
    id: "b2g14", titre: "Le discours indirect (Konjunktiv I)", titreDE: "Indirekte Rede: Konjunktiv I", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B2",
    objectifs: ["Former le Konjunktiv I", "Rapporter des propos (presse)"],
    grammairePoints: ["sei, habe, könne, werde", "rapport neutre"],
    exemplesPlus: [{"de":"Er sagt, er sei sehr beschäftigt.","fr":"Indirekte Rede mit Konjunktiv I: *sei*."},{"de":"Sie meint, sie habe keine Zeit.","fr":"Konjunktiv I: *habe*."},{"de":"Der Minister erklärte, man werde die Steuern senken.","fr":"Konjunktiv I: *werde* für die Zukunft."},{"de":"Im Bericht heißt es, das Projekt könne bald beginnen.","fr":"Konjunktiv I: *könne*."},{"de":"Sie fragte, ob er am Montag komme.","fr":"Indirekte Frage mit *ob*."}],
    coursDE: [
      "Die **indirekte Rede** benutzt man, um wiederzugeben, was eine andere Person gesagt hat – besonders in Nachrichten, Berichten und formellen Texten. Dafür gibt es im Deutschen den **Konjunktiv I**.",
      "Der Konjunktiv I zeigt, dass der Sprecher die Information nur **wiedergibt** und sich **distanziert**. Die wichtigsten Formen kommen vom Verbstamm + -e: *er **sei***, *er **habe***, *er **könne***, *er **werde***, *er **gehe***.",
      "Vergleiche: Direkt « *Er sagt: „Ich **bin** krank.“* » wird zu indirekt « *Er sagt, er **sei** krank* ». Oft fällt *dass* weg, und das Verb steht auf Position 2; mit *dass* steht es am Ende: « *Er sagt, **dass** er krank **sei*** ».",
      "Der Konjunktiv I ist vor allem in **schriftlichen, seriösen** Texten wichtig. In der gesprochenen Sprache benutzen viele Deutsche stattdessen den Indikativ oder den Konjunktiv II. Für das Verständnis von Nachrichten ist diese Form aber unverzichtbar."
    ],
    grammaire: [
      { regle: "**Discours indirect** (presse) : **Konjunktiv I** (*sei, habe, könne, werde*) pour citer **sans s'engager**.", attention: "Si le KI = indicatif (souvent au **pluriel**), on passe au **Konjunktiv II** (*sie **hätten***).", exemples: [{"de":"Er sagt, er sei müde.","fr":"Il dit qu'il est fatigué."},{"de":"Sie sagen, sie hätten keine Zeit.","fr":"Ils disent qu'ils n'ont pas le temps."}], titre: "Citer sans s'engager", intro: "Le Konjunktiv I (3e personne) sert au discours indirect, surtout dans la presse et les comptes rendus.",
        tableau: { entetes: ["Direct", "Indirect (Konjunktiv I)"], lignes: [["« Ich bin müde. »", "Er sagt, er sei müde."], ["« Ich habe Zeit. »", "Sie sagt, sie habe Zeit."], ["« Ich kann kommen. »", "Er sagt, er könne kommen."], ["« Ich werde anrufen. »", "Sie sagt, sie werde anrufen."], ["« Ich machte das. »", "Er sagt, er habe das gemacht. (passé → Perfekt KI)"]] },
        note: "Le passé du discours indirect se rend par le Perfekt au Konjunktiv I : « er habe … gemacht », « sie sei … gegangen »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le Konjunktiv I sert surtout…", options: ["au discours indirect (presse)", "à l'irréel", "à la politesse"], correct: 0, explication: "Citer des propos de façon neutre." },
      { type: "qcm", consigne: "Choisissez (Konjunktiv I de sein).", question: "Er sagt, er ___ krank.", options: ["sei", "ist", "wäre", "war"], correct: 0, explication: "discours indirect → Konjunktiv I : sei." },
      { type: "trou", consigne: "Complétez (Konjunktiv I de haben).", texte: "Sie sagt, sie {0} keine Zeit.", accepte: [["habe"]], indice: "haben → habe (Konjunktiv I, 3e sing.)" },
      { type: "association", consigne: "Associez l'infinitif et le Konjunktiv I (er).", paires: [{ gauche: "sein", droite: "sei" }, { gauche: "haben", droite: "habe" }, { gauche: "können", droite: "könne" }, { gauche: "werden", droite: "werde" }] },
      { type: "qcm", consigne: "Choisissez (passé indirect).", question: "« Ich habe es gemacht. » → Er sagt, er ___ es gemacht.", options: ["habe", "hatte", "hat", "haben"], correct: 0, explication: "passé indirect → Perfekt KI : habe gemacht." }
    ]
  },
  b2g15: {
    id: "b2g15", titre: "Konjunktiv I : formes de substitution", titreDE: "Ersatzformen des Konjunktivs I", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
    objectifs: ["Savoir quand remplacer le Konjunktiv I", "Utiliser le Konjunktiv II / würde à la place"],
    grammairePoints: ["KI = indicatif → KII", "würde + infinitif"],
    exemplesPlus: [{"de":"Sie sagen, sie hätten keine Zeit.","fr":"Klingt Konjunktiv I wie der Indikativ, nimmt man Konjunktiv II: *hätten*."},{"de":"Er behauptet, sie würden bald heiraten.","fr":"Ersatzform: *würde* + Infinitiv."},{"de":"Die Kinder sagen, sie wären schon fertig.","fr":"Konjunktiv II *wären* statt *seien*."},{"de":"Man berichtet, die Preise würden weiter steigen.","fr":"*würde* + Infinitiv für die indirekte Rede."},{"de":"Sie meinten, sie könnten uns nicht helfen.","fr":"Konjunktiv II *könnten*."}],
    coursDE: [
      "Der **Konjunktiv I** sieht manchmal genauso aus wie der **Indikativ** (besonders im Plural). Dann ist die indirekte Rede nicht klar erkennbar, und man braucht eine **Ersatzform**.",
      "Die Regel ist einfach: Wenn der Konjunktiv I **gleich** wie der Indikativ ist, benutzt du stattdessen den **Konjunktiv II**. Beispiel: « *sie haben* » ist in beiden Formen gleich → man sagt « *sie **hätten*** »: « *Sie sagen, sie **hätten** keine Zeit* ».",
      "Eine weitere häufige Ersatzform ist **würde + Infinitiv**, vor allem bei normalen Verben: « *Er sagt, er **würde** später **kommen*** ». Diese Form ist klar und wird in vielen Texten benutzt.",
      "In der Praxis arbeiten die drei Formen zusammen: Zuerst versuchst du den **Konjunktiv I**; ist er nicht erkennbar, nimmst du den **Konjunktiv II**; und bei normalen Verben oft **würde + Infinitiv**. So bleibt die indirekte Rede immer eindeutig."
    ],
    grammaire: [
      { regle: "Quand le **Konjunktiv I** se confond avec l'indicatif, on le **remplace** par le Konjunktiv II ou par **würde + infinitif**.", attention: "Règle pratique : **3ᵉ sing.** → KI (*er sei, habe*) ; **pluriel / ich** → KII ou *würde*.", exemples: [{"de":"Sie sagen, sie kämen später.","fr":"Ils disent qu'ils viendront plus tard."},{"de":"Er meint, die Leute würden mehr lesen.","fr":"Il pense que les gens liraient davantage."}], titre: "Quand le Konjunktiv I se confond avec l'indicatif", intro: "Si la forme du Konjunktiv I est identique à l'indicatif (souvent au pluriel et à « ich »), on la remplace par le Konjunktiv II, ou par « würde + infinitif ».",
        tableau: { entetes: ["Direct", "KI ambigu", "Forme de substitution"], lignes: [["« Sie haben Zeit. »", "sie haben (= indicatif)", "Sie hätten Zeit. (KII)"], ["« Wir kommen. »", "wir kommen (= indicatif)", "Sie kämen / würden kommen."], ["« Ich bin müde. »", "ich sei (rare à la 1re)", "Ich sei / wäre müde."], ["« Sie lernen viel. »", "sie lernen (= indicatif)", "Sie würden viel lernen."]] },
        note: "Règle pratique : 3e personne du singulier → Konjunktiv I (er sei, er habe) ; pluriel et « ich » → Konjunktiv II ou würde." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "On remplace le Konjunktiv I quand…", options: ["il se confond avec l'indicatif", "il est trop court", "le sujet est « er »"], correct: 0, explication: "Pour rester clair, on passe au Konjunktiv II / würde." },
      { type: "qcm", consigne: "Choisissez (substitution, pluriel).", question: "Sie sagen, sie ___ keine Zeit. (haben)", options: ["hätten", "haben", "habe", "hätte"], correct: 0, explication: "pluriel ambigu → Konjunktiv II : hätten." },
      { type: "trou", consigne: "Complétez (würde + infinitif).", texte: "Er sagt, die Leute {0} mehr lesen. (würde + lesen → forme conjuguée)", accepte: [["würden"]], indice: "pluriel → würden + infinitif" },
      { type: "association", consigne: "Associez la personne et la forme conseillée.", paires: [{ gauche: "er/sie (3e sing.)", droite: "Konjunktiv I (sei, habe)" }, { gauche: "sie (pluriel)", droite: "Konjunktiv II / würde" }, { gauche: "ich", droite: "Konjunktiv II / würde" }, { gauche: "wir", droite: "Konjunktiv II / würde" }] },
      { type: "qcm", consigne: "Choisissez.", question: "Pourquoi « sie haben » devient « sie hätten » au discours indirect ?", options: ["Sinon = indicatif (ambigu)", "Pour faire poli", "C'est obligatoire partout"], correct: 0, explication: "« sie haben » KI = indicatif → on passe au KII." }
    ]
  },
  b2g16: {
    id: "b2g16", titre: "Locutions verbo-nominales", titreDE: "Nomen-Verb-Verbindungen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
    objectifs: ["Employer des locutions figées nom + verbe", "Reformuler avec un verbe simple"],
    grammairePoints: ["in Frage stellen, zur Verfügung stehen", "Bezug nehmen auf"],
    exemplesPlus: [{"de":"Niemand stellt deine Kompetenz in Frage.","fr":"*in Frage stellen* = bezweifeln."},{"de":"Ich stehe Ihnen gern zur Verfügung.","fr":"*zur Verfügung stehen* = bereit sein zu helfen."},{"de":"Wir möchten Bezug auf Ihr Schreiben nehmen.","fr":"*Bezug nehmen auf* = sich beziehen auf."},{"de":"Die Regierung hat eine Entscheidung getroffen.","fr":"*eine Entscheidung treffen* = entscheiden."},{"de":"Dieses Thema spielt eine wichtige Rolle.","fr":"*eine Rolle spielen* = wichtig sein."}],
    coursDE: [
      "**Nomen-Verb-Verbindungen** (auch *Funktionsverbgefüge*) sind feste Verbindungen aus einem Nomen und einem Verb. Sie sind typisch für die **formelle und schriftliche** Sprache und gehören zum guten B2-Niveau.",
      "Bei diesen Ausdrücken trägt das **Nomen** die Hauptbedeutung, und das Verb hat nur eine Hilfsfunktion. Oft kann man sie durch ein einfaches Verb ersetzen: *eine Entscheidung **treffen*** = entscheiden, *in Frage **stellen*** = bezweifeln, *zur Verfügung **stehen*** = verfügbar sein.",
      "Weitere häufige Beispiele: *Bezug **nehmen** auf* (= sich beziehen auf), *eine Rolle **spielen***, *Kritik **üben*** (= kritisieren), *in Kraft **treten*** (= gültig werden). Diese Ausdrücke passen besonders gut in offizielle Texte.",
      "Mein Tipp: Lerne diese Verbindungen **als Ganzes**, wie eine Vokabel, mit der richtigen Präposition. So kannst du formelle Briefe und Berichte auf höherem Niveau schreiben und anspruchsvolle Texte besser verstehen."
    ],
    grammaire: [
      { regle: "Locutions **nom + verbe support** (style formel) : *in Frage **stellen***, *zur Verfügung **stehen***, *Bezug **nehmen** auf*.", attention: "À l'**oral**, on préfère le verbe simple (*in Frage stellen* → *bezweifeln*).", exemples: [{"de":"Wir treffen eine Entscheidung.","fr":"Nous prenons une décision."},{"de":"Das Material steht zur Verfügung.","fr":"Le matériel est à disposition."}], titre: "Les Funktionsverbgefüge (style soutenu)", intro: "Ces locutions associent un nom et un verbe « support ». Elles donnent un style formel et ont souvent un équivalent verbal simple.",
        tableau: { entetes: ["Locution", "Sens", "Équivalent simple"], lignes: [["eine Entscheidung treffen", "prendre une décision", "(sich) entscheiden"], ["in Frage stellen", "remettre en question", "bezweifeln"], ["zur Verfügung stehen", "être à disposition", "verfügbar sein"], ["Bezug nehmen auf", "se référer à", "sich beziehen auf"], ["in Kraft treten", "entrer en vigueur", "gelten"]] },
        note: "À l'écrit formel, ces tournures sont fréquentes ; à l'oral, on préfère souvent le verbe simple." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez le verbe support.", question: "eine Entscheidung ___", options: ["treffen", "machen", "geben", "nehmen"], correct: 0, explication: "eine Entscheidung treffen." },
      { type: "qcm", consigne: "Choisissez l'équivalent.", question: "« in Frage stellen » signifie…", options: ["bezweifeln", "fragen", "antworten", "verfügen"], correct: 0, explication: "remettre en question = bezweifeln." },
      { type: "trou", consigne: "Complétez (locution).", texte: "Das Material steht Ihnen zur {0}.", accepte: [["Verfügung"]], indice: "zur Verfügung stehen" },
      { type: "association", consigne: "Associez la locution et son sens.", paires: [{ gauche: "in Frage stellen", droite: "remettre en question" }, { gauche: "zur Verfügung stehen", droite: "être à disposition" }, { gauche: "Bezug nehmen auf", droite: "se référer à" }, { gauche: "in Kraft treten", droite: "entrer en vigueur" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Nous prenons une décision.", accepte: ["Wir treffen eine Entscheidung"], aide: "eine Entscheidung treffen" }
    ]
  },
  b2g17: {
    id: "b2g17", titre: "Les prépositions (génitif)", titreDE: "Präpositionen mit Genitiv", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
    objectifs: ["Employer les prépositions à génitif", "Exprimer cause, opposition, lieu, moyen"],
    grammairePoints: ["wegen, trotz, während", "aufgrund, innerhalb, statt"],
    exemplesPlus: [{"de":"Wegen des Streiks fielen viele Züge aus.","fr":"*wegen* + Genitiv: der Grund."},{"de":"Trotz des Regens fand das Konzert statt.","fr":"*trotz* + Genitiv."},{"de":"Während der Sitzung wurden viele Fragen geklärt.","fr":"*während* + Genitiv: in dieser Zeit."},{"de":"Aufgrund eines Fehlers verzögert sich die Lieferung.","fr":"*aufgrund* + Genitiv: die Ursache."},{"de":"Statt eines Briefes schickte sie eine E-Mail.","fr":"*statt* + Genitiv: an Stelle von."}],
    coursDE: [
      "Auf B2-Niveau benutzt du viele **Präpositionen mit Genitiv**. Sie sind typisch für die **gehobene und schriftliche** Sprache und machen deine Texte präziser und formeller.",
      "Die wichtigsten sind: **wegen** (à cause de), **trotz** (malgré), **während** (pendant), **aufgrund** (en raison de), **innerhalb** (à l'intérieur de), **außerhalb**, **statt / anstatt** (au lieu de). Nach ihnen steht der Genitiv: « ***wegen** des schlechten Wetter**s*** ».",
      "Denk an die Genitiv-Endungen: maskulin und neutral **des … -(e)s**, feminin **der …**: « *während **des** Unterricht**s*** », « *trotz **der** Kälte* ». Bei femininen Nomen ändert sich das Nomen selbst nicht.",
      "Beachte: In der **gesprochenen** Sprache ersetzen viele Deutsche den Genitiv durch **von + Dativ** (« *wegen **dem** Wetter* »). In **schriftlichen** und formellen Texten solltest du aber den **Genitiv** benutzen."
    ],
    grammaire: [
      { exemples: [{"de":"Während der Sitzung war es still.","fr":"Pendant la réunion, c'était silencieux."},{"de":"Aufgrund der Krise stiegen die Preise.","fr":"En raison de la crise, les prix ont augmenté."}], regle: "Prépositions à **génitif** (soutenu) : *wegen* (à cause de), *trotz* (malgré), *während* (pendant), *aufgrund, innerhalb, statt*.", attention: "À l'oral, *wegen/trotz* tolèrent le datif, mais le **génitif** reste la norme écrite.", titre: "Les prépositions qui régissent le génitif", intro: "Au registre soutenu, plusieurs prépositions imposent le génitif (causales, concessives, temporelles, locales).",
        tableau: { entetes: ["Préposition", "Sens", "Exemple"], lignes: [["wegen", "à cause de", "wegen des Wetters"], ["trotz", "malgré", "trotz der Probleme"], ["während", "pendant", "während der Sitzung"], ["aufgrund", "en raison de", "aufgrund der Krise"], ["innerhalb / außerhalb", "à l'intérieur / en dehors de", "innerhalb einer Woche"], ["statt / anstatt", "au lieu de", "statt eines Briefes"]] },
        note: "À l'oral, « wegen » et « trotz » sont souvent suivis du datif, mais le génitif reste correct et soutenu." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« trotz » exprime…", options: ["l'opposition (malgré)", "la cause", "le but"], correct: 0, explication: "trotz = malgré (concession)." },
      { type: "qcm", consigne: "Choisissez (génitif masculin).", question: "Wegen ___ Staus kam ich zu spät.", options: ["des", "der", "dem", "den"], correct: 0, explication: "wegen + génitif, der Stau → des Staus." },
      { type: "trou", consigne: "Complétez (génitif féminin).", texte: "Während {0} Sitzung war es still.", accepte: [["der"]], indice: "während + génitif, die Sitzung → der" },
      { type: "association", consigne: "Associez la préposition et son sens.", paires: [{ gauche: "wegen", droite: "à cause de" }, { gauche: "trotz", droite: "malgré" }, { gauche: "aufgrund", droite: "en raison de" }, { gauche: "statt", droite: "au lieu de" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Malgré la pluie, nous sommes sortis.", accepte: ["Trotz des Regens sind wir rausgegangen", "Trotz des Regens gingen wir raus", "Trotz des Regens sind wir nach draußen gegangen"], aide: "trotz + génitif : trotz des Regens" }
    ]
  }
});
