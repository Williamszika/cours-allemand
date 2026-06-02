/* =====================================================================
   grammaire-c12.js — 10 LEÇONS DE GRAMMAIRE du module C1.2
   (extension de window.GRAMMAIRE_C1). Suit les 10 points C1.2 du
   programme : hypothèses, relatives, attributs participiaux, déclinaison,
   connecteurs fixes, participes/adjectifs nominalisés, Konjunktiv I,
   impératif, nominalisation, formes passives.
   ===================================================================== */
window.GRAMMAIRE_C1 = Object.assign(window.GRAMMAIRE_C1 || {}, {
  c1g10: {
    id: "c1g10", titre: "Exprimer des hypothèses", titreDE: "Vermutungen ausdrücken", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Graduer la probabilité", "Employer modaux subjectifs et adverbes"],
    grammairePoints: ["dürfte, müsste, könnte", "wohl, vermutlich, offenbar"],
    coursDE: [
      "Über die Modalverben hinaus verfügt das Deutsche über ein reiches Inventar, um **Vermutungen** und **Wahrscheinlichkeitsgrade** auszudrücken. Auf C1 wählst du das passende Mittel je nach Sicherheit bewusst aus.",
      "Mit **Modalverben** im subjektiven Gebrauch: *dürfte* (begründete Annahme), *müsste* (hohe Wahrscheinlichkeit), *könnte* (Möglichkeit). Mit dem **Futur I** drückt man oft eine Gegenwartsvermutung aus: « *Er **wird** wohl zu Hause sein* ».",
      "Besonders idiomatisch sind die **Modaladverbien**, die den Sicherheitsgrad fein abstufen: *bestimmt/sicher* (sehr sicher), *wahrscheinlich, vermutlich* (wahrscheinlich), *wohl* (vermutlich), *offenbar/anscheinend* (dem Anschein nach), *vielleicht/möglicherweise* (eher unsicher).",
      "Achte auf den Unterschied zwischen **anscheinend** (es scheint so, mit Beleg) und **scheinbar** (nur dem Schein nach, in Wirklichkeit nicht) – eine klassische Stolperfalle. Wahrscheinlichkeit präzise zu graduieren, gehört zu den feinsten Kompetenzen auf C1."
    ],
    grammaire: [
      { exemples: [{"de":"Er dürfte den Zug verpasst haben.","fr":"Il a probablement raté le train."},{"de":"Vermutlich kommt sie später.","fr":"Elle viendra probablement plus tard."}], regle: "Graduer la **probabilité** : *müsste/dürfte* (probable), *wird wohl*, *vermutlich*, *könnte/womöglich* (possible).", attention: "Hypothèse au **passé** : *Er **dürfte** es vergessen **haben*** (dürfte + infinitif passé).", titre: "Les degrés de la supposition", intro: "On exprime une hypothèse par un modal au sens subjectif, par « werden + wohl » ou par un adverbe.",
        tableau: { entetes: ["Degré", "Moyen", "Exemple"], lignes: [["quasi sûr", "müsste / dürfte", "Er müsste schon da sein."], ["probable", "wird wohl", "Sie wird wohl kommen."], ["vraisemblable", "vermutlich / wahrscheinlich", "Vermutlich klappt es."], ["apparent", "offenbar / anscheinend", "Offenbar hat er es vergessen."], ["possible", "könnte / womöglich", "Womöglich regnet es."]] },
        note: "Hypothèse au passé : « Er dürfte es vergessen haben » (dürfte + infinitif passé)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« dürfte » exprime une supposition…", options: ["probable", "certaine à 100 %", "impossible"], correct: 0, explication: "dürfte = probablement." },
      { type: "qcm", consigne: "Choisissez (probable, futur).", question: "Sie ___ wohl bald kommen.", options: ["wird", "ist", "hat", "war"], correct: 0, explication: "werden + wohl = probabilité." },
      { type: "trou", consigne: "Complétez (apparence).", texte: "{0} hat er den Termin vergessen. (apparemment)", accepte: [["Offenbar", "Anscheinend"]], indice: "apparemment = offenbar / anscheinend" },
      { type: "association", consigne: "Associez le marqueur et le degré.", paires: [{ gauche: "dürfte", droite: "probable" }, { gauche: "müsste", droite: "quasi sûr" }, { gauche: "könnte", droite: "possible" }, { gauche: "offenbar", droite: "apparent" }] },
      { type: "qcm", consigne: "Choisissez (hypothèse passée).", question: "Er ___ es vergessen haben.", options: ["dürfte", "darf", "durfte", "muss nicht"], correct: 0, explication: "dürfte + infinitif passé = supposition au passé." }
    ]
  },
  c1g11: {
    id: "c1g11", titre: "Les propositions relatives", titreDE: "Relativsätze", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C1",
    objectifs: ["Maîtriser tous les pronoms relatifs", "Employer dessen/deren, was, wo"],
    grammairePoints: ["der/die/das + cas", "dessen/deren, was, wo"],
    coursDE: [
      "**Relativsätze** liefern Zusatzinformationen zu einem Nomen. Auf C1 beherrschst du auch den **Genitiv** des Relativpronomens sowie die Relativadverbien *was* und *wo*.",
      "Das Relativpronomen richtet sich in **Genus und Numerus** nach dem Bezugswort, im **Kasus** aber nach seiner Funktion im Relativsatz: « *der Mann, **der** kommt* » / « *den ich kenne* » / « *dem ich helfe* ». Das Verb steht am Ende.",
      "Im **Genitiv** lauten die Formen **dessen** (m./n.) und **deren** (f./Pl.): « *der Autor, **dessen** Buch ich lese* », « *die Firma, **deren** Chef ich kenne* ». Bei einer Präposition rückt diese vor das Pronomen: « *das Thema, **über das** wir sprechen* ».",
      "**was** bezieht sich auf ganze Sätze oder unbestimmte Pronomen (*alles, etwas, nichts*): « *Das ist alles, **was** ich weiß* ». **wo** ersetzt elegant eine lokale Präposition + Pronomen: « *die Stadt, **wo** ich wohne* » (= in der ich wohne)."
    ],
    grammaire: [
      { exemples: [{"de":"Der Autor, dessen Buch ich lese, ist berühmt.","fr":"L'auteur dont je lis le livre est célèbre."},{"de":"Das ist alles, was ich weiß.","fr":"C'est tout ce que je sais."}], regle: "Relatifs avancés : **génitif** *dessen/deren*, **was** (après *alles/nichts/das Beste* ou une phrase), **wo** (lieu).", attention: "*was* peut reprendre **toute la principale** : *Er kam zu spät, **was** alle ärgerte*.", titre: "Relatifs avancés : génitif, neutre, lieu", intro: "Outre der/die/das, le C1 emploie le génitif relatif (dessen/deren), « was » (après tout/rien/le neutre) et « wo ».",
        tableau: { entetes: ["Type", "Pronom", "Exemple"], lignes: [["sujet", "der/die/das", "der Mann, der kommt"], ["génitif", "dessen / deren", "der Autor, dessen Buch ich las"], ["+ préposition", "mit dem, für die", "die Kollegin, mit der ich arbeite"], ["neutre/abstrait", "was", "alles, was ich weiß"], ["lieu", "wo", "die Stadt, wo ich wohne"]] },
        schemas: [{ legende: "Génitif relatif : dessen + nom … verbe à la FIN.", mots: [{ m: "der Autor,", r: "principale", c: "objet" }, { m: "dessen Buch", r: "génitif relatif", c: "conj" }, { m: "ich gerade", r: "sujet + complément", c: "sujet" }, { m: "lese", r: "verbe (fin)", c: "fin" }] }],
        note: "« was » reprend etwas, nichts, alles, das, ou une phrase entière : « Er kam zu spät, was mich ärgerte »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Après « alles », le relatif est…", options: ["was", "das", "der", "dem"], correct: 0, explication: "alles, was … (neutre/abstrait → was)." },
      { type: "qcm", consigne: "Choisissez (génitif relatif).", question: "Der Autor, ___ Buch ich lese, ist berühmt.", options: ["dessen", "deren", "den", "dem"], correct: 0, explication: "génitif masculin → dessen." },
      { type: "trou", consigne: "Complétez (relatif de lieu).", texte: "Das ist die Stadt, {0} ich geboren bin.", accepte: [["wo"]], indice: "lieu → wo" },
      { type: "association", consigne: "Associez le contexte et le relatif.", paires: [{ gauche: "génitif masc.", droite: "dessen" }, { gauche: "génitif fém./plur.", droite: "deren" }, { gauche: "après alles/nichts", droite: "was" }, { gauche: "lieu", droite: "wo" }] },
      { type: "ordre", consigne: "Construisez la relative (génitif).", mots: ["dessen", "Auto", "kaputt", "ist"], correct: "dessen Auto kaputt ist", traduction: "dont la voiture est cassée" }
    ]
  },
  c1g12: {
    id: "c1g12", titre: "Les attributs participiaux", titreDE: "Partizipialattribute", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C1",
    objectifs: ["Construire un participe attribut", "Transformer une relative en participe"],
    grammairePoints: ["Partizip I (actif)", "Partizip II (passif/accompli)"],
    coursDE: [
      "Das **Partizipialattribut** ist eine typisch schriftsprachliche, verdichtete Konstruktion: Ein Partizip steht – oft mit eigenen Ergänzungen – **vor** dem Nomen und ersetzt einen ganzen Relativsatz. Diese Struktur prägt formelle deutsche Texte.",
      "Das **Partizip I** (Infinitiv + -d) hat eine **aktive** Bedeutung und drückt Gleichzeitigkeit aus: « *das **schlafende** Kind* » (= das Kind, das schläft). Es wird wie ein Adjektiv dekliniert.",
      "Das **Partizip II** hat meist eine **passive** oder **abgeschlossene** Bedeutung: « *der **reparierte** Wagen* » (= der Wagen, der repariert wurde). Auch hier gilt die normale Adjektivdeklination.",
      "Die wahre C1-Kompetenz zeigt das **erweiterte** Partizipialattribut, in das weitere Angaben eingeschoben werden: « *das **von dem Ingenieur sorgfältig geprüfte** Projekt* » (= das Projekt, das vom Ingenieur sorgfältig geprüft wurde). Solche Konstruktionen aufzulösen ist für anspruchsvolle Texte unerlässlich."
    ],
    grammaire: [
      { regle: "Le **participe** placé devant le nom (et décliné) condense une relative : **Partizip I** (actif), **Partizip II** (passif/accompli).", attention: "Construction **étendue** : article + [compléments + participe] + nom (*das **von allen gelesene** Buch*).", exemples: [{"de":"das lachende Kind","fr":"l'enfant qui rit"},{"de":"der gerade gelesene Roman","fr":"le roman qu'on vient de lire"}], titre: "Le participe comme adjectif épithète", intro: "Placé devant le nom et décliné, le participe condense une relative. Partizip I = sens actif/simultané ; Partizip II = sens passif/accompli.",
        tableau: { entetes: ["Relative", "Attribut participial"], lignes: [["das Kind, das lacht", "das lachende Kind"], ["der Roman, der gelesen wird", "der gelesene Roman"], ["die Frau, die schläft", "die schlafende Frau"], ["das Buch, das von allen gelesen wird", "das von allen gelesene Buch"]] },
        schemas: [{ legende: "Attribut étendu : article + [compléments + participe] + nom.", mots: [{ m: "das", r: "article", c: "sujet" }, { m: "von allen", r: "complément", c: "objet" }, { m: "gelesene", r: "participe décliné", c: "verbe" }, { m: "Buch", r: "nom", c: "fin" }] }],
        note: "Partizip I = infinitif + d (lachen → lachend) ; il se décline comme un adjectif. Construction fréquente à l'écrit soutenu." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le Partizip I exprime un sens…", options: ["actif / simultané", "passif / accompli", "futur"], correct: 0, explication: "das lachende Kind = qui rit (actif)." },
      { type: "qcm", consigne: "Choisissez (Partizip I).", question: "das ___ Kind (lachen)", options: ["lachende", "gelachte", "lachte", "gelacht"], correct: 0, explication: "Partizip I : lachen → lachend + -e." },
      { type: "trou", consigne: "Complétez (Partizip II attribut).", texte: "der von allen {0} Roman (lesen)", accepte: [["gelesene"]], indice: "Partizip II : lesen → gelesen + -e" },
      { type: "association", consigne: "Associez la relative et l'attribut.", paires: [{ gauche: "das Kind, das lacht", droite: "das lachende Kind" }, { gauche: "der Roman, der gelesen wird", droite: "der gelesene Roman" }, { gauche: "die Frau, die schläft", droite: "die schlafende Frau" }, { gauche: "der Zug, der ankommt", droite: "der ankommende Zug" }] },
      { type: "qcm", consigne: "Choisissez.", question: "« der reparierte Wagen » vient de…", options: ["der Wagen, der repariert wurde", "der Wagen, der repariert", "der Wagen repariert"], correct: 0, explication: "Partizip II = sens passif/accompli." }
    ]
  },
  c1g13: {
    id: "c1g13", titre: "La déclinaison des adjectifs", titreDE: "Adjektivdeklination", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Décliner après der/ein/ø", "Gérer les cas particuliers (etwas/viel)"],
    grammairePoints: ["faible / mixte / forte", "etwas Gutes, viele nette"],
    coursDE: [
      "Die **Adjektivdeklination** sollte auf C1 vollständig automatisiert sein. Entscheidend ist, ob das vorangehende Wort den Kasus bereits markiert (dann schwache Endung) oder nicht (dann starke Endung).",
      "Man unterscheidet drei Typen: **schwach** nach dem bestimmten Artikel (-e/-en), **gemischt** nach dem unbestimmten Artikel und den Possessiva, **stark** ohne Artikel (das Adjektiv übernimmt die Artikelendung): « *guter Wein* », « *kaltes Wasser* ».",
      "Auf C1 kommen besondere Fälle hinzu: Nach *viele, einige, mehrere, wenige* dekliniert man das Adjektiv **stark** (parallel): « *viele **nette** Leute* ». Nach *etwas, nichts, viel, wenig* wird das Adjektiv **großgeschrieben und stark dekliniert**: « *etwas **Gutes**, nichts **Neues*** ».",
      "Diese feinen Regeln entscheiden über die Korrektheit auf hohem Niveau. Wer sie sicher beherrscht, schreibt fehlerfreie, idiomatische Nominalphrasen – eine Grundvoraussetzung für gehobene Texte."
    ],
    grammaire: [
      { regle: "Déclinaison selon le déterminant (der / ein / sans article) et le cas. Après **etwas/nichts/viel** → adjectif nominalisé en **-es**.", attention: "Après *viele, einige, mehrere* : déclinaison **forte** au pluriel (*viele nett**e** Leute*).", exemples: [{"de":"Erzähl mir etwas Schönes!","fr":"Raconte-moi quelque chose de beau !"},{"de":"Ich kenne viele nette Leute.","fr":"Je connais beaucoup de gens sympathiques."}], titre: "Les trois déclinaisons, sans faille", intro: "La terminaison dépend du déterminant (défini, indéfini, aucun) et du cas.",
        tableau: { entetes: ["Contexte", "Nom. m.", "Acc. m.", "Dat. f."], lignes: [["der …", "der gute Wein", "den guten Wein", "der guten Idee"], ["ein …", "ein guter Wein", "einen guten Wein", "einer guten Idee"], ["sans article", "guter Wein", "guten Wein", "guter Idee"], ["etwas/nichts + adj.", "etwas Gutes", "etwas Gutes", "—"]] },
        note: "Après etwas, nichts, viel, wenig : adjectif nominalisé en -es (etwas Schönes). Après viele, einige, mehrere : déclinaison forte au pluriel (viele nette Leute)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Sans article, l'adjectif prend…", options: ["la marque forte du cas", "toujours -e", "aucune terminaison"], correct: 0, explication: "guter Wein, kaltes Wasser (forte)." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich trinke einen ___ Wein.", options: ["guten", "guter", "gutes", "gute"], correct: 0, explication: "ein + masc. acc. → guten." },
      { type: "trou", consigne: "Complétez (après etwas).", texte: "Erzähl mir etwas {0}! (gut)", accepte: [["Gutes"]], indice: "etwas + adjectif nominalisé en -es" },
      { type: "association", consigne: "Associez le contexte et la terminaison (nom. m.).", paires: [{ gauche: "der … Wein", droite: "gute" }, { gauche: "ein … Wein", droite: "guter" }, { gauche: "… Wein (sans art.)", droite: "guter" }, { gauche: "den … Wein", droite: "guten" }] },
      { type: "traduction", consigne: "Traduisez.", source: "beaucoup de gens sympathiques (nominatif)", accepte: ["viele nette Leute", "viele nette Menschen"], aide: "viele + déclinaison forte au pluriel → nette" }
    ]
  },
  c1g14: {
    id: "c1g14", titre: "Les connecteurs fixes", titreDE: "Feste Konnektoren", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Employer des locutions connectrices", "Structurer un texte argumentatif"],
    grammairePoints: ["im Gegensatz dazu, aus diesem Grund", "in diesem Zusammenhang, im Vergleich dazu"],
    coursDE: [
      "Auf C1 strukturierst du längere Texte mit **festen Konnektoren** – mehrteiligen Wendungen, die Abschnitte logisch verbinden und deinen Argumenten Klarheit verleihen. Sie sind das Gerüst kohärenter Darstellungen.",
      "Für den **Gegensatz**: *im Gegensatz dazu*, *im Vergleich dazu*, *demgegenüber*, *einerseits … andererseits*. Beispiel: « *Die Theorie ist überzeugend. **Im Gegensatz dazu** scheitert sie in der Praxis* ».",
      "Für **Grund, Zweck und Bezug**: *aus diesem Grund*, *zu diesem Zweck*, *in diesem Zusammenhang*, *in Bezug auf*, *im Hinblick auf*. Diese Wendungen verknüpfen Gedanken über Satzgrenzen hinweg und schaffen einen roten Faden.",
      "Solche Konnektoren stehen meist am **Satzanfang** und lösen die Inversion aus. Ihr abwechslungsreicher, präziser Einsatz unterscheidet einen flüssigen, akademischen Stil von einer bloßen Aneinanderreihung von Sätzen."
    ],
    grammaire: [
      { regle: "Locutions connectrices : *aus diesem Grund* (pour cette raison), *im Gegensatz dazu* (en revanche), *darüber hinaus* (en outre).", attention: "Comme les Verbindungsadverbien : en tête, le verbe reste en **2ᵉ** position.", exemples: [{"de":"Es ist teuer. Darüber hinaus ist es weit.","fr":"C'est cher. En outre, c'est loin."},{"de":"Im Gegensatz dazu ist die Bahn günstig.","fr":"En revanche, le train est avantageux."}], titre: "Les locutions connectrices du texte", intro: "Ces groupes figés relient les idées et structurent un texte soutenu. Placés en tête → inversion (verbe en 2e).",
        tableau: { entetes: ["Locution", "Sens", "Fonction"], lignes: [["aus diesem Grund", "pour cette raison", "cause/conséquence"], ["im Gegensatz dazu", "en revanche", "opposition"], ["im Vergleich dazu", "en comparaison", "comparaison"], ["in diesem Zusammenhang", "à ce propos", "transition"], ["darüber hinaus", "en outre", "addition"]] },
        note: "Comme les Verbindungsadverbien, ces locutions laissent le verbe en 2e position : « Aus diesem Grund haben wir … »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« im Gegensatz dazu » exprime…", options: ["une opposition", "une addition", "une cause"], correct: 0, explication: "im Gegensatz dazu = en revanche." },
      { type: "qcm", consigne: "Choisissez (addition).", question: "Es ist günstig. ___ ist es praktisch.", options: ["Darüber hinaus", "Im Gegensatz dazu", "Aus diesem Grund", "Trotzdem"], correct: 0, explication: "darüber hinaus = en outre (addition)." },
      { type: "trou", consigne: "Complétez (inversion).", texte: "Aus diesem Grund {0} wir die Lösung. (wählen)", accepte: [["wählen", "wählten"]], indice: "locution en tête → verbe en 2e position" },
      { type: "association", consigne: "Associez la locution et son sens.", paires: [{ gauche: "aus diesem Grund", droite: "pour cette raison" }, { gauche: "im Gegensatz dazu", droite: "en revanche" }, { gauche: "darüber hinaus", droite: "en outre" }, { gauche: "im Vergleich dazu", droite: "en comparaison" }] },
      { type: "ordre", consigne: "Construisez la phrase (inversion).", mots: ["Darüber", "hinaus", "ist", "es", "günstig"], correct: "Darüber hinaus ist es günstig", traduction: "En outre, c'est avantageux." }
    ]
  },
  c1g15: {
    id: "c1g15", titre: "Participes et adjectifs nominalisés", titreDE: "Nominalisierte Partizipien und Adjektive", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Nominaliser un adjectif/participe", "Décliner ces noms correctement"],
    grammairePoints: ["der/die Angestellte, der Reisende", "das Beste, etwas Neues"],
    coursDE: [
      "Im Deutschen können **Adjektive und Partizipien als Nomen** verwendet werden. Diese **Nominalisierung** ist sehr produktiv und gehört zum aktiven Repertoire auf C1. Das Wort wird **großgeschrieben**, behält aber seine **Adjektivendung**.",
      "Bei **Personen** entstehen geläufige Nomen: *der/die **Angestellte***, *der **Reisende***, *der **Bekannte***, *der **Deutsche***. Die Endung folgt der Adjektivdeklination: « *ein **Angestellter*** », « *die **Angestellten*** », « *mit einem **Bekannten*** ».",
      "Bei **Abstrakta** verwendet man häufig das Neutrum, oft nach *etwas, nichts, viel, das*: *das **Beste***, *das **Wichtigste***, *etwas **Neues***. Beispiel: « *Das **Wichtigste** ist die Gesundheit* ».",
      "Diese Konstruktionen verdichten die Sprache und wirken elegant. Die Schwierigkeit liegt in der korrekten Endung, die sich nach Artikel und Kasus richtet. Wer sie beherrscht, drückt sich präzise und gehoben aus."
    ],
    grammaire: [
      { regle: "Un adjectif/participe peut devenir **nom** (majuscule) en gardant sa **déclinaison d'adjectif** : *der **Reisende**, der **Angestellte**, das **Beste***.", attention: "Déclinaison vivante : *der Angestellte / ein Angestellt**er** / dem Angestellt**en***.", exemples: [{"de":"Der Angestellte ist krank.","fr":"L'employé est malade."},{"de":"Wir haben etwas Neues erlebt.","fr":"Nous avons vécu quelque chose de nouveau."}], titre: "Quand l'adjectif/participe devient nom", intro: "Un adjectif ou participe peut se nominaliser (majuscule) ; il garde sa déclinaison d'adjectif.",
        tableau: { entetes: ["Origine", "Nom", "Sens"], lignes: [["angestellt", "der/die Angestellte", "l'employé(e)"], ["reisen → reisend", "der/die Reisende", "le voyageur"], ["bekannt", "ein Bekannter", "une connaissance"], ["gut", "das Beste / das Gute", "le meilleur / le bien"], ["neu (après etwas)", "etwas Neues", "quelque chose de nouveau"]] },
        note: "Ces noms se déclinent comme des adjectifs : der Angestellte / ein Angestellter / dem Angestellten." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Un adjectif nominalisé garde…", options: ["sa déclinaison d'adjectif", "une déclinaison fixe", "aucune déclinaison"], correct: 0, explication: "der Angestellte / ein Angestellter." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich spreche mit ___ Angestellten. (dem)", options: ["dem", "der", "den", "das"], correct: 0, explication: "datif : mit dem Angestellten." },
      { type: "trou", consigne: "Complétez (après etwas).", texte: "Wir haben etwas {0} erlebt. (schön)", accepte: [["Schönes"]], indice: "etwas + adj. nominalisé en -es" },
      { type: "association", consigne: "Associez l'origine et le nom.", paires: [{ gauche: "angestellt", droite: "der Angestellte" }, { gauche: "reisend", droite: "der Reisende" }, { gauche: "bekannt", droite: "ein Bekannter" }, { gauche: "gut", droite: "das Beste" }] },
      { type: "qcm", consigne: "Choisissez (nominatif, sans article).", question: "Ein ___ hat angerufen. (bekannt)", options: ["Bekannter", "Bekannte", "Bekannten", "Bekanntes"], correct: 0, explication: "ein + masc. nom. → Bekannter." }
    ]
  },
  c1g16: {
    id: "c1g16", titre: "Le subjonctif I", titreDE: "Der Konjunktiv I", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C1",
    objectifs: ["Former le Konjunktiv I", "Rapporter affirmations, questions et ordres"],
    grammairePoints: ["sei, habe, könne, werde", "questions et ordres indirects"],
    coursDE: [
      "Der **Konjunktiv I** ist die Form der **indirekten Rede** in formellen, vor allem schriftlichen Texten wie Nachrichten und Berichten. Er signalisiert, dass der Sprecher eine fremde Aussage **wiedergibt**, ohne sie zu bewerten.",
      "Die Formen leiten sich vom Verbstamm + -e ab und sind in der 3. Person besonders klar: *er **sei***, *er **habe***, *er **könne***, *er **werde***. Beispiel: « *Der Minister erklärte, er **sei** zuversichtlich und die Lage **werde** sich bessern* ».",
      "Auch **indirekte Fragen und Aufforderungen** werden so wiedergegeben. Bei Fragen mit *ob* oder Fragewort: « *Sie fragte, **ob** er Zeit **habe*** ». Aufforderungen mit *sollen*: « *Er sagte, ich **solle** warten* ».",
      "Ist der Konjunktiv I mit dem Indikativ formgleich (oft im Plural), weicht man auf den **Konjunktiv II** aus (« *sie **hätten*** » statt « sie haben »). Diese Ausweichregel sichert die Eindeutigkeit der indirekten Rede."
    ],
    grammaire: [
      { regle: "**Discours indirect** complet : affirmations (*sei, habe*), **questions** (*ob* / mot interrogatif), **ordres** (*sollen*).", attention: "Si le KI = indicatif (pluriel), on passe au **Konjunktiv II** (*sie hätten*).", exemples: [{"de":"Er sagt, er sei bereit.","fr":"Il dit qu'il est prêt."},{"de":"Er fragt, ob ich komme.","fr":"Il demande si je viens."}], titre: "Le discours indirect complet", intro: "Le Konjunktiv I rapporte des propos. On adapte aussi les questions (ob / W-Wort) et les ordres (sollen).",
        tableau: { entetes: ["Type", "Direct", "Indirect"], lignes: [["affirmation", "« Ich bin müde. »", "Er sagt, er sei müde."], ["passé", "« Ich war dort. »", "Er sagt, er sei dort gewesen."], ["question oui/non", "« Kommst du? »", "Er fragt, ob ich komme."], ["question W", "« Wann kommst du? »", "Er fragt, wann ich komme."], ["ordre", "« Komm! »", "Er sagt, ich solle kommen."]] },
        note: "Si le Konjunktiv I se confond avec l'indicatif (pluriel), on passe au Konjunktiv II : « sie haben » → « sie hätten »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Un ordre rapporté se rend avec…", options: ["sollen", "müssen", "dürfen", "wollen"], correct: 0, explication: "« Komm! » → Er sagt, ich solle kommen." },
      { type: "qcm", consigne: "Choisissez (Konjunktiv I de sein).", question: "Sie sagt, sie ___ krank.", options: ["sei", "ist", "wäre", "war"], correct: 0, explication: "Konjunktiv I : sei." },
      { type: "trou", consigne: "Complétez (question oui/non indirecte).", texte: "Er fragt, {0} ich Zeit habe.", accepte: [["ob"]], indice: "question oui/non → ob" },
      { type: "association", consigne: "Associez l'infinitif et le Konjunktiv I (er).", paires: [{ gauche: "sein", droite: "sei" }, { gauche: "haben", droite: "habe" }, { gauche: "können", droite: "könne" }, { gauche: "werden", droite: "werde" }] },
      { type: "qcm", consigne: "Choisissez (substitution au pluriel).", question: "Sie sagen, sie ___ keine Zeit. (haben)", options: ["hätten", "haben", "habe", "hätte"], correct: 0, explication: "pluriel ambigu → Konjunktiv II : hätten." }
    ]
  },
  c1g17: {
    id: "c1g17", titre: "L'impératif", titreDE: "Der Imperativ", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "C1",
    objectifs: ["Former l'impératif (du/ihr/Sie/wir)", "Connaître les alternatives à l'impératif"],
    grammairePoints: ["Geh! Geht! Gehen Sie!", "Infinitif, sollen, passif"],
    coursDE: [
      "Der **Imperativ** dient Aufforderungen, Bitten, Ratschlägen und Anweisungen. Auf C1 kennst du nicht nur die Grundformen, sondern auch die **stilistischen Alternativen**, die je nach Situation passender sein können.",
      "Die drei Grundformen: **du** (Verbstamm, oft ohne -e: « *Geh!*, *Komm!*, *Hör zu!* »), **ihr** (wie die Präsensform: « *Geht!* »), **Sie** (mit Pronomen und Inversion: « *Gehen Sie bitte!* »). Bei *sein*: « *Sei … / Seid … / Seien Sie …* ».",
      "In **Anleitungen und auf Schildern** steht oft der **Infinitiv**: « *Zwiebeln klein **schneiden*** », « *Bitte nicht **rauchen*** ». Offizielle Aufforderungen formuliert man mit **sollen** oder im **Passiv**: « *Das Formular **ist auszufüllen*** ».",
      "Den Ton mildern Partikeln wie *doch, mal, bitte*: « *Komm **doch mal** vorbei!* » klingt freundlicher als ein bloßes « Komm! ». Die Wahl der passenden Form je nach Register ist auf C1 ein Zeichen kommunikativer Kompetenz."
    ],
    grammaire: [
      { exemples: [{"de":"Nehmen Sie bitte Platz!","fr":"Asseyez-vous, je vous prie !"},{"de":"Bitte nicht stören!","fr":"Prière de ne pas déranger !"}], regle: "Quatre formes : **du** (radical), **ihr** (+ -t), **Sie** (verbe + Sie), **wir** (verbe + wir). À l'écrit : **infinitif** (consignes).", attention: "*sein* est irrégulier : *Sei / Seid / Seien Sie* ruhig! Alternative polie : *Würden Sie bitte …?*", titre: "Donner un ordre ou une consigne", intro: "L'impératif a quatre formes ; à l'écrit, on lui préfère parfois l'infinitif (consignes) ou « sollen ».",
        tableau: { entetes: ["Personne", "Forme", "Exemple"], lignes: [["du", "radical (parfois -e)", "Komm! / Arbeite!"], ["ihr", "radical + -t", "Kommt!"], ["Sie", "verbe + Sie", "Kommen Sie!"], ["wir", "verbe + wir", "Gehen wir!"], ["consigne écrite", "infinitif", "Bitte nicht rauchen!"]] },
        note: "sein est irrégulier : Sei ruhig! / Seid ruhig! / Seien Sie ruhig! Alternative polie : « Würden Sie bitte …? »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Sur un panneau, la consigne emploie souvent…", options: ["l'infinitif", "le subjonctif", "le prétérit"], correct: 0, explication: "Bitte nicht rauchen! (infinitif)." },
      { type: "qcm", consigne: "Choisissez (impératif Sie).", question: "___ Sie bitte langsamer!", options: ["Sprechen", "Sprich", "Sprecht", "Gesprochen"], correct: 0, explication: "forme de politesse : Sprechen Sie!" },
      { type: "trou", consigne: "Complétez (impératif du de sein).", texte: "{0} bitte ruhig! (sein, du)", accepte: [["Sei"]], indice: "sein → Sei!" },
      { type: "association", consigne: "Associez la personne et la forme.", paires: [{ gauche: "du", droite: "Komm!" }, { gauche: "ihr", droite: "Kommt!" }, { gauche: "Sie", droite: "Kommen Sie!" }, { gauche: "wir", droite: "Gehen wir!" }] },
      { type: "ordre", consigne: "Construisez l'impératif poli.", mots: ["Nehmen", "Sie", "bitte", "Platz"], correct: "Nehmen Sie bitte Platz", traduction: "Asseyez-vous, je vous prie." }
    ]
  },
  c1g18: {
    id: "c1g18", titre: "La nominalisation", titreDE: "Die Nominalisierung", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Passer du style verbal au style nominal", "Employer les prépositions adéquates"],
    grammairePoints: ["weil → wegen, nachdem → nach", "das Lernen, die Prüfung"],
    coursDE: [
      "Die **Nominalisierung** – die Umwandlung von Verben und Nebensätzen in Nomengruppen – prägt den **Nominalstil** der deutschen Schriftsprache. Auf C1 musst du zwischen verbalem und nominalem Stil bewusst wechseln können.",
      "Verben werden zu Nomen, oft mit Artikel: *lernen → **das Lernen***, *ankommen → **die Ankunft***, *prüfen → **die Prüfung***. Statt « *Während wir lernten…* » schreibt man « *Während des Lernens…* ».",
      "Vor allem **adverbiale Nebensätze** lassen sich in Präpositionalphrasen umwandeln: *weil* → **wegen** (+ Genitiv), *nachdem* → **nach** (+ Dativ), *obwohl* → **trotz**. Beispiel: « ***Wegen** des schlechten Wetters fiel das Spiel aus* » statt « Weil das Wetter schlecht war… ».",
      "Der Nominalstil wirkt **sachlich, dicht und formell** und ist in Wissenschaft und Verwaltung verbreitet, kann aber schwerfällig werden. Gute Texte mischen daher beide Stile. Diese Umwandlung in beide Richtungen zu beherrschen, ist eine zentrale C1-Kompetenz."
    ],
    grammaire: [
      { regle: "Du **style verbal** au **style nominal** : on condense une subordonnée en groupe nominal (*weil es regnet* → *wegen des Regens*).", attention: "Correspondances : *weil → wegen*, *obwohl → trotz*, *nachdem → nach*, *wenn → bei*, *indem → durch*.", exemples: [{"de":"Wegen des Regens blieben wir zu Hause.","fr":"À cause de la pluie, nous sommes restés à la maison."},{"de":"Nach der Prüfung war sie erleichtert.","fr":"Après l'examen, elle était soulagée."}], titre: "Du verbe au nom (style soutenu)", intro: "À l'écrit formel, on condense une subordonnée en groupe nominal introduit par une préposition.",
        tableau: { entetes: ["Style verbal (subordonnée)", "Style nominal (groupe)"], lignes: [["weil es regnet", "wegen des Regens"], ["nachdem er ankam", "nach seiner Ankunft"], ["obwohl es schwierig ist", "trotz der Schwierigkeit"], ["indem man übt", "durch Üben"], ["wenn man ankommt", "bei der Ankunft"]] },
        schemas: [{ legende: "Subordonnée → préposition + nom (souvent + génitif).", mots: [{ m: "wegen", r: "préposition", c: "conj" }, { m: "des starken", r: "génitif", c: "objet" }, { m: "Regens", r: "nom", c: "sujet" }, { m: "(blieben wir)", r: "principale", c: "verbe" }] }],
        note: "Correspondances : weil→wegen, trotzdem/obwohl→trotz, nachdem→nach, bevor→vor, wenn→bei, indem→durch." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« weil » se nominalise en…", options: ["wegen + génitif", "trotz + génitif", "durch + accusatif"], correct: 0, explication: "weil → wegen (cause)." },
      { type: "qcm", consigne: "Choisissez.", question: "nachdem er ankam → ___ seiner Ankunft", options: ["nach", "vor", "bei", "durch"], correct: 0, explication: "nachdem → nach (postériorité)." },
      { type: "trou", consigne: "Complétez (obwohl → trotz).", texte: "{0} der Schwierigkeit gelang es. (obwohl → préposition)", accepte: [["Trotz"]], indice: "obwohl → trotz + génitif" },
      { type: "association", consigne: "Associez la conjonction et la préposition.", paires: [{ gauche: "weil", droite: "wegen" }, { gauche: "obwohl", droite: "trotz" }, { gauche: "nachdem", droite: "nach" }, { gauche: "indem", droite: "durch" }] },
      { type: "traduction", consigne: "Traduisez (style nominal).", source: "À cause de la pluie, nous sommes restés.", accepte: ["Wegen des Regens sind wir geblieben", "Wegen des Regens blieben wir"], aide: "wegen + génitif (des Regens)" }
    ]
  },
  c1g19: {
    id: "c1g19", titre: "Les formes passives", titreDE: "Passiv und Passiversatz", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C1",
    objectifs: ["Maîtriser passif de processus et d'état", "Employer les formes de substitution du passif"],
    grammairePoints: ["werden/sein + participe", "man, sich lassen, sein + zu + Inf., -bar"],
    coursDE: [
      "Auf C1 beherrschst du nicht nur das **Passiv** in allen Zeitformen, sondern auch seine zahlreichen **Ersatzformen**, mit denen man eine passivische Bedeutung ohne *werden* ausdrückt. Das bereichert den Stil und vermeidet Wiederholungen.",
      "Zur Erinnerung: Das **Vorgangspassiv** mit *werden + Partizip II* (« *Das Haus **wird gebaut*** »), das **Zustandspassiv** mit *sein + Partizip II* (« *Das Haus **ist gebaut*** »). Mit Modalverb: « *Das **muss erledigt werden*** ».",
      "Wichtige **Passiversatzformen**: das unpersönliche **man** (« *Man baut das Haus* »), **sich lassen + Infinitiv** (« *Das **lässt sich** leicht **machen*** » = kann gemacht werden), **sein + zu + Infinitiv** (« *Das Formular **ist auszufüllen*** » = muss ausgefüllt werden).",
      "Hinzu kommen Adjektive auf **-bar** und **-lich**, die eine passive Möglichkeit ausdrücken: *machbar* (= kann gemacht werden), *lösbar*, *verständlich*. Diese Varianten erlauben es dir, denselben Inhalt stilistisch unterschiedlich und elegant zu formulieren."
    ],
    grammaire: [
      { exemples: [{"de":"Das lässt sich leicht erklären.","fr":"Cela peut s'expliquer facilement."},{"de":"Die Aufgabe ist bis Freitag zu erledigen.","fr":"La tâche doit être faite pour vendredi."}], regle: "Passif (werden/sein + participe) et **substituts** : *man*, *sich lassen* (= können werden), *sein + zu + Inf.*, adjectifs en **-bar**.", attention: "*Das lässt sich lösen* = *kann gelöst werden* ; *Das ist zu lösen* = *muss/kann gelöst werden*.", titre: "Passif et alternatives", intro: "Outre le passif (werden/sein + participe), le C1 emploie des formes de substitution plus légères.",
        tableau: { entetes: ["Forme", "Exemple", "Équivaut à"], lignes: [["Vorgangspassiv", "Es wird gemacht.", "(action)"], ["Zustandspassiv", "Es ist gemacht.", "(résultat)"], ["man", "Man macht es.", "Es wird gemacht."], ["sich lassen", "Das lässt sich machen.", "kann gemacht werden"], ["sein + zu + Inf.", "Das ist zu machen.", "muss/kann gemacht werden"], ["adjectif en -bar", "machbar, lösbar", "kann gemacht/gelöst werden"]] },
        schemas: [{ legende: "Passiversatz : sein + zu + infinitif = nécessité/possibilité passive.", mots: [{ m: "Das Problem", r: "sujet", c: "sujet" }, { m: "ist", r: "sein (2)", c: "verbe" }, { m: "leicht", r: "complément", c: "objet" }, { m: "zu lösen", r: "zu + infinitif (fin)", c: "fin" }] }],
        note: "« lösbar » = « kann gelöst werden » ; « Das lässt sich lösen » = même idée, registre courant." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Das lässt sich machen » équivaut à…", options: ["kann gemacht werden", "muss gemacht werden", "wurde gemacht"], correct: 0, explication: "sich lassen = possibilité passive." },
      { type: "qcm", consigne: "Choisissez (passif d'état).", question: "Le résultat (Zustandspassiv) se forme avec…", options: ["sein + participe", "werden + participe", "haben + participe"], correct: 0, explication: "Die Tür ist geöffnet (état)." },
      { type: "trou", consigne: "Complétez (sein + zu + Inf.).", texte: "Das Problem ist leicht zu {0}. (lösen)", accepte: [["lösen"]], indice: "sein + zu + infinitif" },
      { type: "association", consigne: "Associez la forme et son équivalent.", paires: [{ gauche: "man macht", droite: "es wird gemacht" }, { gauche: "lässt sich machen", droite: "kann gemacht werden" }, { gauche: "ist zu machen", droite: "muss gemacht werden" }, { gauche: "machbar", droite: "kann gemacht werden" }] },
      { type: "ordre", consigne: "Construisez la phrase (Passiversatz).", mots: ["Das", "lässt", "sich", "leicht", "lösen"], correct: "Das lässt sich leicht lösen", traduction: "Cela peut se résoudre facilement." }
    ]
  }
});
