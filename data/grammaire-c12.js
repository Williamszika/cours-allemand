/* =====================================================================
   grammaire-c12.js — 10 LEÇONS DE GRAMMAIRE du module C1.2
   (extension de window.GRAMMAIRE_C1). Suit les 10 points C1.2 du
   programme : hypothèses, relatives, attributs participiaux, déclinaison,
   connecteurs fixes, participes/adjectifs nominalisés, Konjunktiv I,
   impératif, nominalisation, formes passives.
   ===================================================================== */
window.GRAMMAIRE_C1 = Object.assign(window.GRAMMAIRE_C1 || {}, {
  c1g10: {
    id: "c1g10",
    einstieg: {"intro":"Observe les nuances de probabilité.","exemples":[{"de":"Das dürfte stimmen.","fr":"Cela doit être vrai (probablement)."},{"de":"Es könnte sein, dass er kommt.","fr":"Il se pourrait qu'il vienne."},{"de":"Angenommen, du hättest recht, …","fr":"En supposant que tu aies raison, …"}],"question":"Comment graduer la probabilité d'une hypothèse ?"},
    merke: ["Probabilité forte : *dürfte* ; moyenne : *könnte / würde wohl*.","Hypothèse : *angenommen / gesetzt den Fall, …* + Konjunktiv II.","*es sei denn, …* = à moins que."],
    achtung: [{"erreur":"Das muss stimmen. (probabilité nuancée)","correct":"Das **dürfte** stimmen.","explication":"*dürfte* exprime une probabilité prudente."},{"erreur":"Angenommen, du hast recht, …","correct":"Angenommen, du **hättest** recht, …","explication":"L'hypothèse prend le Konjunktiv II."}],
    kontrast: {"titre":"Les hypothèses (C1) : allemand vs français","similitudes":["On gradue la probabilité."],"differences":["*dürfte* = probabilité prudente - sans équivalent simple.","*angenommen / gesetzt den Fall* + Konjunktiv II.","Les modaux nuancent (könnte, dürfte, müsste)."]}, titre: "Exprimer des hypothèses", titreDE: "Vermutungen ausdrücken", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Graduer la probabilité", "Employer modaux subjectifs et adverbes"],
    grammairePoints: ["dürfte, müsste, könnte", "wohl, vermutlich, offenbar"],
    exemplesPlus: [{"de":"Er ist offenbar bereits informiert worden.","fr":"*offenbar*: deutlich erkennbar."},{"de":"Die Ergebnisse dürften erst nächste Woche vorliegen.","fr":"*dürften*: eine wahrscheinliche Annahme."},{"de":"Vermutlich liegt das Problem an der Software.","fr":"*vermutlich*: eine begründete Vermutung."},{"de":"Sie müsste eigentlich längst zu Hause sein.","fr":"*müsste*: eine starke Annahme."},{"de":"Das wird wohl niemand bestreiten.","fr":"*wohl*: vorsichtige Sicherheit."}],
    coursDE: [
      "Über die Modalverben hinaus verfügt das Deutsche über ein reiches Inventar, um **Vermutungen** und **Wahrscheinlichkeitsgrade** auszudrücken. Auf C1 wählst du das passende Mittel je nach Sicherheit bewusst aus.",
      "Mit **Modalverben** im subjektiven Gebrauch: *dürfte* (begründete Annahme), *müsste* (hohe Wahrscheinlichkeit), *könnte* (Möglichkeit). Mit dem **Futur I** drückt man oft eine Gegenwartsvermutung aus: « *Er **wird** wohl zu Hause sein* ».",
      "Besonders idiomatisch sind die **Modaladverbien**, die den Sicherheitsgrad fein abstufen: *bestimmt/sicher* (sehr sicher), *wahrscheinlich, vermutlich* (wahrscheinlich), *wohl* (vermutlich), *offenbar/anscheinend* (dem Anschein nach), *vielleicht/möglicherweise* (eher unsicher).",
      "Achte auf den Unterschied zwischen **anscheinend** (es scheint so, mit Beleg) und **scheinbar** (nur dem Schein nach, in Wirklichkeit nicht) – eine klassische Stolperfalle. Wahrscheinlichkeit präzise zu graduieren, gehört zu den feinsten Kompetenzen auf C1."
    ],
    grammaire: [
      { exemples: [{"de":"Er dürfte den Zug verpasst haben.","fr":"Il a probablement raté le train."},{"de":"Vermutlich kommt sie später.","fr":"Elle viendra probablement plus tard."}], regle: "Graduer la **probabilité** : *müsste/dürfte* (probable), *wird wohl*, *vermutlich*, *könnte/womöglich* (possible).", attention: "Hypothèse au **passé** : *Er **dürfte** es vergessen **haben*** (dürfte + infinitif passé).", titre: "Les degrés de la supposition", intro: "On exprime une hypothèse par un modal au sens subjectif, par « werden + wohl » ou par un adverbe.",
        tableau: { entetes: ["Degré", "Moyen", "Exemple"], lignes: [["quasi sûr", "müsste / dürfte", "Er müsste schon da sein."], ["probable", "wird wohl", "Sie wird wohl kommen."], ["vraisemblable", "vermutlich / wahrscheinlich", "Vermutlich klappt es."], ["apparent", "offenbar / anscheinend", "Offenbar hat er es vergessen."], ["possible", "könnte / womöglich", "Womöglich regnet es."]] },
        note: "Hypothèse au passé : « Er dürfte es vergessen haben » (dürfte + infinitif passé)." },
      { titre: "Introduire une hypothèse (angenommen, es sei denn)",
        regle: "Le C1 introduit une hypothèse par des tournures figées : **angenommen (, dass)**, **gesetzt den Fall**, **vorausgesetzt (, dass)** (à condition que), **es sei denn** (à moins que).",
        intro: "***Angenommen**, du hättest recht…* · *Ich komme, **es sei denn**, es regnet*.",
        tableau: { entetes: ["Structure", "Sens", "Exemple"], lignes: [["angenommen (, dass)", "à supposer que", "Angenommen, er käme, …"], ["gesetzt den Fall", "en admettant que", "Gesetzt den Fall, es klappt, …"], ["vorausgesetzt (, dass)", "à condition que", "…, vorausgesetzt, du hilfst."], ["es sei denn", "à moins que", "Ich komme, es sei denn, es regnet."]] },
        note: "*angenommen / gesetzt den Fall* + Konjunktiv II (irréel) ; *vorausgesetzt* + indicatif (réel)." },
      { titre: "Les adverbes de probabilité (et un piège)",
        regle: "Les **Modaladverbien** graduent la certitude. Piège : **anscheinend** (selon toute apparence, réel) ≠ **scheinbar** (en apparence seulement, faux).",
        intro: "*bestimmt > wahrscheinlich > wohl > vielleicht*. *anscheinend schläft er* (réel) vs *scheinbar* (faux-semblant).",
        tableau: { entetes: ["Adverbe", "Degré / sens"], lignes: [["bestimmt / sicher", "très sûr"], ["wahrscheinlich / vermutlich", "probable"], ["wohl", "vraisemblablement"], ["anscheinend", "selon les apparences (réel)"], ["scheinbar", "en apparence (mais FAUX)"], ["vielleicht / möglicherweise", "possible (incertain)"]] },
        note: "Ne confonds pas *anscheinend* (c'est probablement vrai) et *scheinbar* (ça en a l'air, mais c'est faux)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« dürfte » exprime une supposition…", options: ["probable", "certaine à 100 %", "impossible"], correct: 0, explication: "dürfte = probablement." },
      { type: "qcm", consigne: "Choisissez (probable, futur).", question: "Sie ___ wohl bald kommen.", options: ["wird", "ist", "hat", "war"], correct: 0, explication: "werden + wohl = probabilité." },
      { type: "trou", consigne: "Complétez (apparence).", texte: "{0} hat er den Termin vergessen. (apparemment)", accepte: [["Offenbar", "Anscheinend"]], indice: "apparemment = offenbar / anscheinend" },
      { type: "association", consigne: "Associez le marqueur et le degré.", paires: [{ gauche: "dürfte", droite: "probable" }, { gauche: "müsste", droite: "quasi sûr" }, { gauche: "könnte", droite: "possible" }, { gauche: "offenbar", droite: "apparent" }] },
      { type: "qcm", consigne: "Choisissez (hypothèse passée).", question: "Er ___ es vergessen haben.", options: ["dürfte", "darf", "durfte", "muss nicht"], correct: 0, explication: "dürfte + infinitif passé = supposition au passé." },
      { type: "qcm", consigne: "Introduire une hypothèse.", question: "___, du hättest recht — was dann?", options: ["Angenommen", "Weil", "Obwohl", "Damit"], correct: 0, explication: "angenommen = à supposer que (+ Konjunktiv II)." },
      { type: "qcm", consigne: "anscheinend ou scheinbar ?", question: "Il dort vraiment, semble-t-il : « Er schläft ___. »", options: ["anscheinend", "scheinbar", "kaum", "nie"], correct: 0, explication: "anscheinend = selon les apparences (réel) ; scheinbar = faux-semblant." },
      { type: "qcm", consigne: "À moins que.", question: "Ich komme, ___, es regnet.", options: ["es sei denn", "vorausgesetzt", "angenommen", "obwohl"], correct: 0, explication: "à moins que → es sei denn." }
    ]
  },
  c1g11: {
    id: "c1g11",
    einstieg: {"intro":"Observe ces relatifs particuliers.","exemples":[{"de":"Alles, was er sagt, stimmt.","fr":"Tout ce qu'il dit est vrai."},{"de":"der Mann, dessen Auto gestohlen wurde","fr":"l'homme dont la voiture a été volée"},{"de":"die Stadt, in der ich wohne","fr":"la ville où j'habite"}],"question":"Quel relatif après *alles*, et pour dire « dont » ?"},
    merke: ["Génitif relatif : *dessen* (masc./neutre), *deren* (fém./pluriel) = « dont ».","Après *alles, etwas, nichts, das* → relatif *was*.","Préposition + relatif : *in der*, *mit dem*, *worüber* (chose)."],
    achtung: [{"erreur":"der Mann, sein Auto gestohlen wurde","correct":"der Mann, **dessen** Auto gestohlen wurde","explication":"« dont » = génitif relatif *dessen*."},{"erreur":"Alles, das er sagt, …","correct":"Alles, **was** er sagt, …","explication":"Après *alles*, le relatif est *was*."}],
    kontrast: {"titre":"Relatives (C1) : allemand vs français","similitudes":["« dont / ce que / où » existent."],"differences":["« dont » = *dessen/deren* (génitif relatif décliné).","Après *alles/etwas/nichts* → *was*.","Préposition + relatif décliné (worüber)."]}, titre: "Les propositions relatives", titreDE: "Relativsätze", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C1",
    objectifs: ["Maîtriser tous les pronoms relatifs", "Employer dessen/deren, was, wo"],
    grammairePoints: ["der/die/das + cas", "dessen/deren, was, wo"],
    exemplesPlus: [{"de":"Der Autor, dessen Roman ich gerade lese, lebt in Wien.","fr":"*dessen*: Relativpronomen im Genitiv (maskulin)."},{"de":"Die Kollegin, deren Vorschlag angenommen wurde, ist sehr erfahren.","fr":"*deren*: Genitiv feminin."},{"de":"Das Einzige, was mich stört, ist der Lärm.","fr":"*was* nach *das Einzige*."},{"de":"Wir besuchten die Stadt, wo meine Großeltern geboren wurden.","fr":"*wo* als Relativadverb für den Ort."},{"de":"Er hat die Prüfung bestanden, was ihn sehr freute.","fr":"*, was*: bezieht sich auf den ganzen Satz."}],
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
        note: "« was » reprend etwas, nichts, alles, das, ou une phrase entière : « Er kam zu spät, was mich ärgerte »." },
      { titre: "Les relatifs prépositionnels (wo(r)-)",
        regle: "Pour une **chose** après une préposition, on peut employer **wo(r)- + préposition** au lieu de *préposition + relatif* : *das Thema, **worüber** wir sprechen* = *über das wir sprechen*.",
        intro: "Pour une **personne**, on garde *préposition + relatif* (*der Mann, mit dem…*).",
        tableau: { entetes: ["Antécédent", "Préposition + relatif", "wo(r)- (chose)"], lignes: [["das Thema (über)", "über das wir sprechen", "worüber wir sprechen"], ["das Ziel (auf)", "auf das er hofft", "worauf er hofft"], ["das Mittel (mit)", "mit dem man …", "womit man …"], ["die Sache (von)", "von der ich rede", "wovon ich rede"]] },
        note: "wo(r)- surtout pour les choses abstraites ; pour une personne, toujours préposition + relatif." },
      { titre: "Tableau complet + weshalb/weswegen",
        regle: "Le pronom relatif complet inclut le **génitif** (dessen/deren) et le **datif pluriel** (denen). *weshalb/weswegen* reprend une **cause**.",
        intro: "*der Grund, **weshalb** ich komme* (la raison pour laquelle…).",
        tableau: { entetes: ["Cas", "masc.", "fém.", "neutre", "pluriel"], lignes: [["Nominatif", "der", "die", "das", "die"], ["Accusatif", "den", "die", "das", "die"], ["Datif", "dem", "der", "dem", "denen"], ["Génitif", "dessen", "deren", "dessen", "deren"]] },
        note: "denen (datif pluriel) et dessen/deren (génitif) sont les seules formes différentes de l'article." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Après « alles », le relatif est…", options: ["was", "das", "der", "dem"], correct: 0, explication: "alles, was … (neutre/abstrait → was)." },
      { type: "qcm", consigne: "Choisissez (génitif relatif).", question: "Der Autor, ___ Buch ich lese, ist berühmt.", options: ["dessen", "deren", "den", "dem"], correct: 0, explication: "génitif masculin → dessen." },
      { type: "trou", consigne: "Complétez (relatif de lieu).", texte: "Das ist die Stadt, {0} ich geboren bin.", accepte: [["wo"]], indice: "lieu → wo" },
      { type: "association", consigne: "Associez le contexte et le relatif.", paires: [{ gauche: "génitif masc.", droite: "dessen" }, { gauche: "génitif fém./plur.", droite: "deren" }, { gauche: "après alles/nichts", droite: "was" }, { gauche: "lieu", droite: "wo" }] },
      { type: "ordre", consigne: "Construisez la relative (génitif).", mots: ["dessen", "Auto", "kaputt", "ist"], correct: "dessen Auto kaputt ist", traduction: "dont la voiture est cassée" },
      { type: "qcm", consigne: "Relatif prépositionnel (chose).", question: "Das Thema, ___ wir sprechen, ist wichtig.", options: ["worüber", "über den", "über wen", "das"], correct: 0, explication: "chose + über → worüber (= über das)." },
      { type: "trou", consigne: "Datif pluriel relatif.", texte: "Die Leute, {0} ich helfe, sind dankbar.", accepte: [["denen"]], indice: "datif pluriel relatif → denen" },
      { type: "qcm", consigne: "Personne ou chose ?", question: "Der Kollege, ___ ich arbeite, ist nett.", options: ["mit dem", "womit", "worüber", "mit was"], correct: 0, explication: "personne → préposition + relatif : mit dem (pas womit)." }
    ]
  },
  c1g12: {
    id: "c1g12",
    einstieg: {"intro":"Observe comment condenser une relative.","exemples":[{"de":"das gestern gekaufte Buch","fr":"le livre acheté hier"},{"de":"die lachenden Kinder","fr":"les enfants qui rient"},{"de":"der vom Sturm beschädigte Baum","fr":"l'arbre endommagé par la tempête"}],"question":"Comment condenser une relative en un seul groupe ?"},
    merke: ["Participe I (*-end*) = action en cours, sens *actif* (*die lachenden Kinder*).","Participe II = sens *passif/accompli* (*das gekaufte Buch*).","L'attribut participial *étendu* condense une relative."],
    achtung: [{"erreur":"das gekaufte gestern Buch","correct":"das **gestern gekaufte** Buch","explication":"Les compléments se placent AVANT le participe, qui précède le nom."},{"erreur":"die lachende Kinder","correct":"die **lachenden** Kinder","explication":"Le participe employé en adjectif se décline."}],
    kontrast: {"titre":"Attributs participiaux : allemand vs français","similitudes":["Participe présent/passé qualifie le nom."],"differences":["L'allemand insère un groupe *avant* le nom (das gestern gekaufte Buch).","Condense une relative entière - écrit soutenu.","Le français déplie en relative."]}, titre: "Les attributs participiaux", titreDE: "Partizipialattribute", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C1",
    objectifs: ["Construire un participe attribut", "Transformer une relative en participe"],
    grammairePoints: ["Partizip I (actif)", "Partizip II (passif/accompli)"],
    exemplesPlus: [{"de":"Die steigende Nachfrage bereitet den Herstellern Probleme.","fr":"Partizip I (*steigend*): aktiv und gleichzeitig."},{"de":"Das gerade renovierte Gebäude wirkt sehr modern.","fr":"Partizip II (*renoviert*): passiv und abgeschlossen."},{"de":"Der lachende Junge erinnerte mich an meinen Sohn.","fr":"Partizip I als Adjektiv vor dem Nomen."},{"de":"Die von Experten geprüften Daten sind zuverlässig.","fr":"Erweitertes Partizip: *von Experten geprüft*."},{"de":"Ein vielversprechendes Konzept wurde vorgestellt.","fr":"Partizip I in einem zusammengesetzten Adjektiv."}],
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
        note: "Partizip I = infinitif + d (lachen → lachend) ; il se décline comme un adjectif. Construction fréquente à l'écrit soutenu." },
      { titre: "Partizip I ou Partizip II ?",
        regle: "**Partizip I** (infinitif + **-d**) = sens **actif/simultané** (« qui fait »). **Partizip II** = sens **passif/accompli** (« qui a été fait »). Les deux se déclinent comme des adjectifs.",
        intro: "*das **lachende** Kind* (qui rit — actif) vs *das **reparierte** Auto* (réparé — passif).",
        tableau: { entetes: ["", "Partizip I", "Partizip II"], lignes: [["formation", "infinitif + -d", "ge…t / ge…en"], ["sens", "actif, simultané", "passif, accompli"], ["exemple", "die steigenden Preise", "die gestiegenen Preise"], ["= relative", "…, die steigen", "…, die gestiegen sind"]] },
        note: "Partizip I : steigen → steigend (actif) ; Partizip II : steigen → gestiegen (accompli)." },
      { titre: "Le « gérondif » : zu + Partizip I",
        regle: "**zu + Partizip I** devant le nom exprime une **nécessité/possibilité passive** : *die **zu lösende** Aufgabe* = la tâche **qui doit être résolue**.",
        intro: "= *die Aufgabe, die gelöst werden muss/kann*. Structure très soutenue.",
        tableau: { entetes: ["Construction", "=", "Exemple"], lignes: [["die zu lösende Aufgabe", "die gelöst werden muss", "à résoudre"], ["das zu prüfende Dokument", "das geprüft werden muss", "à vérifier"], ["die nicht zu übersehenden Fehler", "die man nicht übersehen kann", "impossibles à ignorer"]] },
        note: "zu + participe I = « à faire / qui doit être fait ». Se décline comme un adjectif." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le Partizip I exprime un sens…", options: ["actif / simultané", "passif / accompli", "futur"], correct: 0, explication: "das lachende Kind = qui rit (actif)." },
      { type: "qcm", consigne: "Choisissez (Partizip I).", question: "das ___ Kind (lachen)", options: ["lachende", "gelachte", "lachte", "gelacht"], correct: 0, explication: "Partizip I : lachen → lachend + -e." },
      { type: "trou", consigne: "Complétez (Partizip II attribut).", texte: "der von allen {0} Roman (lesen)", accepte: [["gelesene"]], indice: "Partizip II : lesen → gelesen + -e" },
      { type: "association", consigne: "Associez la relative et l'attribut.", paires: [{ gauche: "das Kind, das lacht", droite: "das lachende Kind" }, { gauche: "der Roman, der gelesen wird", droite: "der gelesene Roman" }, { gauche: "die Frau, die schläft", droite: "die schlafende Frau" }, { gauche: "der Zug, der ankommt", droite: "der ankommende Zug" }] },
      { type: "qcm", consigne: "Choisissez.", question: "« der reparierte Wagen » vient de…", options: ["der Wagen, der repariert wurde", "der Wagen, der repariert", "der Wagen repariert"], correct: 0, explication: "Partizip II = sens passif/accompli." },
      { type: "qcm", consigne: "Partizip I ou II ?", question: "« die steigenden Preise » utilise…", options: ["le Partizip I (actif)", "le Partizip II (passif)", "un infinitif"], correct: 0, explication: "steigend = Partizip I, sens actif/simultané." },
      { type: "qcm", consigne: "Gérondif (zu + Partizip I).", question: "« die zu lösende Aufgabe » = ", options: ["die gelöst werden muss", "die gelöst wurde", "die löst"], correct: 0, explication: "zu + Partizip I = nécessité passive : qui doit être résolue." },
      { type: "trou", consigne: "Attribut étendu (ordre).", texte: "das {0} allen gelesene Buch (par tous)", accepte: [["von"]], indice: "article + [von allen + participe] + nom" }
    ]
  },
  c1g13: {
    id: "c1g13",
    einstieg: {"intro":"Observe l'adjectif sans article (déclinaison forte).","exemples":[{"de":"mit großem Interesse","fr":"avec grand intérêt"},{"de":"trotz schlechten Wetters","fr":"malgré le mauvais temps"},{"de":"viele junge Leute","fr":"beaucoup de jeunes gens"}],"question":"Comment se décline l'adjectif sans article ?"},
    merke: ["Sans article (forte) : l'adjectif prend la terminaison de l'article (*großem, schlechten*).","Génitif masc./neutre fort → *-en* (trotz schlechten Wetters).","Après *viele, einige, mehrere* → pluriel fort."],
    achtung: [{"erreur":"mit großes Interesse","correct":"mit **großem** Interesse","explication":"Datif neutre sans article → forte : großem."},{"erreur":"trotz schlechtes Wetters","correct":"trotz **schlechten** Wetters","explication":"Génitif masc./neutre fort → -en."}],
    kontrast: {"titre":"Déclinaison forte : allemand vs français","similitudes":["L'adjectif s'accorde."],"differences":["Sans article, l'adjectif *porte* les marques de l'article.","Cas particulier au génitif (-en).","Système plus complexe qu'en français."]}, titre: "La déclinaison des adjectifs", titreDE: "Adjektivdeklination", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Décliner après der/ein/ø", "Gérer les cas particuliers (etwas/viel)"],
    grammairePoints: ["faible / mixte / forte", "etwas Gutes, viele nette"],
    exemplesPlus: [{"de":"Ich habe etwas Interessantes gehört.","fr":"Nach *etwas*: großgeschrieben und mit *-es*."},{"de":"Es gibt nichts Besseres als einen freien Tag.","fr":"Nach *nichts*: nominalisiertes Adjektiv."},{"de":"Viele engagierte Freiwillige halfen bei der Aktion.","fr":"Starke Endung im Plural ohne Artikel."},{"de":"Trotz des schlechten Wetters kamen alle.","fr":"Gemischte Endung nach *des* (Genitiv)."},{"de":"Wir suchen einen erfahrenen, zuverlässigen Mitarbeiter.","fr":"Zwei Adjektive mit gleicher Endung."}],
    coursDE: [
      "Die **Adjektivdeklination** sollte auf C1 vollständig automatisiert sein. Entscheidend ist, ob das vorangehende Wort den Kasus bereits markiert (dann schwache Endung) oder nicht (dann starke Endung).",
      "Man unterscheidet drei Typen: **schwach** nach dem bestimmten Artikel (-e/-en), **gemischt** nach dem unbestimmten Artikel und den Possessiva, **stark** ohne Artikel (das Adjektiv übernimmt die Artikelendung): « *guter Wein* », « *kaltes Wasser* ».",
      "Auf C1 kommen besondere Fälle hinzu: Nach *viele, einige, mehrere, wenige* dekliniert man das Adjektiv **stark** (parallel): « *viele **nette** Leute* ». Nach *etwas, nichts, viel, wenig* wird das Adjektiv **großgeschrieben und stark dekliniert**: « *etwas **Gutes**, nichts **Neues*** ».",
      "Diese feinen Regeln entscheiden über die Korrektheit auf hohem Niveau. Wer sie sicher beherrscht, schreibt fehlerfreie, idiomatische Nominalphrasen – eine Grundvoraussetzung für gehobene Texte."
    ],
    grammaire: [
      { regle: "Déclinaison selon le déterminant (der / ein / sans article) et le cas. Après **etwas/nichts/viel** → adjectif nominalisé en **-es**.", attention: "Après *viele, einige, mehrere* : déclinaison **forte** au pluriel (*viele nett**e** Leute*).", exemples: [{"de":"Erzähl mir etwas Schönes!","fr":"Raconte-moi quelque chose de beau !"},{"de":"Ich kenne viele nette Leute.","fr":"Je connais beaucoup de gens sympathiques."}], titre: "Les trois déclinaisons, sans faille", intro: "La terminaison dépend du déterminant (défini, indéfini, aucun) et du cas.",
        tableau: { entetes: ["Contexte", "Nom. m.", "Acc. m.", "Dat. f."], lignes: [["der …", "der gute Wein", "den guten Wein", "der guten Idee"], ["ein …", "ein guter Wein", "einen guten Wein", "einer guten Idee"], ["sans article", "guter Wein", "guten Wein", "guter Idee"], ["etwas/nichts + adj.", "etwas Gutes", "etwas Gutes", "—"]] },
        note: "Après etwas, nichts, viel, wenig : adjectif nominalisé en -es (etwas Schönes). Après viele, einige, mehrere : déclinaison forte au pluriel (viele nette Leute)." },
      { titre: "L'adjectif substantivé (der Deutsche)",
        regle: "Un adjectif peut devenir un **nom** (majuscule) et **garder ses terminaisons d'adjectif** selon l'article : *der Deutsche / ein Deutscher / die Deutschen*.",
        intro: "*der Angestellte, ein Angestellter, die Angestellten* — se décline comme un adjectif épithète.",
        tableau: { entetes: ["Cas", "avec der", "avec ein", "pluriel"], lignes: [["Nominatif", "der Deutsche", "ein Deutscher", "die Deutschen"], ["Accusatif", "den Deutschen", "einen Deutschen", "die Deutschen"], ["Datif", "dem Deutschen", "einem Deutschen", "den Deutschen"], ["Génitif", "des Deutschen", "eines Deutschen", "der Deutschen"]] },
        note: "Fréquents : der/die Deutsche, Angestellte, Bekannte, Verwandte, Reisende, Erwachsene, Beamte." },
      { titre: "Après etwas/nichts et viele/alle",
        regle: "Après **etwas, nichts, viel, wenig** : adjectif **nominalisé** fort en **-es**. Après **viele, einige, mehrere** : **fort** (parallèle). Après **alle, beide, sämtliche** : **faible** (-en).",
        intro: "*nichts **Neues*** · *viele **nette** Leute* · *alle **netten** Leute*.",
        tableau: { entetes: ["Déterminant", "Déclinaison", "Exemple"], lignes: [["etwas / nichts / viel", "nominalisé fort -es", "etwas Gutes, nichts Neues"], ["viele / einige / mehrere", "forte (parallèle)", "viele nette Leute"], ["alle / beide / sämtliche", "faible (-en)", "alle netten Leute"], ["dieser / jener / welcher", "faible (-en)", "dieser nette Mann"]] },
        note: "Piège C1 : *viele* → forte (nette) mais *alle* → faible (netten)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Sans article, l'adjectif prend…", options: ["la marque forte du cas", "toujours -e", "aucune terminaison"], correct: 0, explication: "guter Wein, kaltes Wasser (forte)." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich trinke einen ___ Wein.", options: ["guten", "guter", "gutes", "gute"], correct: 0, explication: "ein + masc. acc. → guten." },
      { type: "trou", consigne: "Complétez (après etwas).", texte: "Erzähl mir etwas {0}! (gut)", accepte: [["Gutes"]], indice: "etwas + adjectif nominalisé en -es" },
      { type: "association", consigne: "Associez le contexte et la terminaison (nom. m.).", paires: [{ gauche: "der … Wein", droite: "gute" }, { gauche: "ein … Wein", droite: "guter" }, { gauche: "… Wein (sans art.)", droite: "guter" }, { gauche: "den … Wein", droite: "guten" }] },
      { type: "traduction", consigne: "Traduisez.", source: "beaucoup de gens sympathiques (nominatif)", accepte: ["viele nette Leute", "viele nette Menschen"], aide: "viele + déclinaison forte au pluriel → nette" },
      { type: "qcm", consigne: "Adjectif substantivé.", question: "Nominatif : « un Allemand » =", options: ["ein Deutscher", "ein Deutsche", "ein Deutschen", "einen Deutschen"], correct: 0, explication: "ein + forte : ein Deutscher." },
      { type: "trou", consigne: "Après alle (faible).", texte: "Alle {0} Kollegen waren da. (nett)", accepte: [["netten"]], indice: "alle → déclinaison faible : -en" },
      { type: "trou", consigne: "Après nichts (nominalisé).", texte: "Es gibt nichts {0} unter der Sonne. (neu)", accepte: [["Neues"]], indice: "nichts + adjectif nominalisé en -es" }
    ]
  },
  c1g14: {
    id: "c1g14",
    einstieg: {"intro":"Observe ces locutions de liaison.","exemples":[{"de":"Einerseits will ich, andererseits habe ich Angst.","fr":"D'un côté je veux, de l'autre j'ai peur."},{"de":"Er kann kaum laufen, geschweige denn rennen.","fr":"Il peut à peine marcher, encore moins courir."},{"de":"sei es heute, sei es morgen","fr":"que ce soit aujourd'hui ou demain"}],"question":"Comment opposer ou renforcer avec ces locutions ?"},
    merke: ["*einerseits … andererseits* : opposition équilibrée.","*geschweige denn* : encore moins (renforcement négatif).","*sei es …, sei es …* : que ce soit… ou…"],
    achtung: [{"erreur":"Einerseits ich will, andererseits …","correct":"Einerseits **will ich**, andererseits …","explication":"*einerseits* (position 1) → inversion."},{"erreur":"…, geschweige rennen.","correct":"…, geschweige **denn** rennen.","explication":"La locution complète est *geschweige denn*."}],
    kontrast: {"titre":"Connecteurs fixes : allemand vs français","similitudes":["« d'un côté… de l'autre » existe."],"differences":["*geschweige denn* (encore moins) - idiomatique.","*einerseits* en position 1 → inversion.","Locutions figées à mémoriser en bloc."]}, titre: "Les connecteurs fixes", titreDE: "Feste Konnektoren", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Employer des locutions connectrices", "Structurer un texte argumentatif"],
    grammairePoints: ["im Gegensatz dazu, aus diesem Grund", "in diesem Zusammenhang, im Vergleich dazu"],
    exemplesPlus: [{"de":"Im Gegensatz dazu vertritt sie eine ganz andere Auffassung.","fr":"*im Gegensatz dazu*: drückt einen Gegensatz aus."},{"de":"Aus diesem Grund wurde die Sitzung verschoben.","fr":"*aus diesem Grund*: nennt die Ursache."},{"de":"In diesem Zusammenhang sei auf eine Studie verwiesen.","fr":"*in diesem Zusammenhang*: thematische Verbindung."},{"de":"Im Vergleich dazu ist das alte Modell günstiger.","fr":"*im Vergleich dazu*: ein Vergleich."},{"de":"Vor diesem Hintergrund erscheint die Kritik berechtigt.","fr":"*vor diesem Hintergrund*: angesichts der Lage."}],
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
    id: "c1g15",
    einstieg: {"intro":"Observe ces adjectifs/participes devenus noms.","exemples":[{"de":"der Reisende","fr":"le voyageur"},{"de":"Das Gute siegt.","fr":"Le bien triomphe."},{"de":"ein Bekannter von mir","fr":"une de mes connaissances"}],"question":"Comment un adjectif/participe devient-il un nom ?"},
    merke: ["Adjectif/participe nominalisé : majuscule + *se décline comme un adjectif* (*der Reisende, ein Reisender*).","Neutre abstrait : *das Gute, das Schöne, etwas Neues*.","Après *etwas/nichts/viel* : neutre fort en *-es*."],
    achtung: [{"erreur":"ein Bekannte von mir","correct":"ein **Bekannter** von mir","explication":"Nominalisé masculin après *ein* → -er."},{"erreur":"etwas Gute","correct":"etwas **Gutes**","explication":"Après *etwas*, neutre fort en -es."}],
    kontrast: {"titre":"Nominalisation de l'adjectif : allemand vs français","similitudes":["On nominalise des adjectifs (« le beau »)."],"differences":["Le nom garde la *déclinaison de l'adjectif*.","Après etwas/nichts → -es (etwas Neues).","Très productif en allemand."]}, titre: "Participes et adjectifs nominalisés", titreDE: "Nominalisierte Partizipien und Adjektive", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Nominaliser un adjectif/participe", "Décliner ces noms correctement"],
    grammairePoints: ["der/die Angestellte, der Reisende", "das Beste, etwas Neues"],
    exemplesPlus: [{"de":"Die Angestellten fordern bessere Arbeitsbedingungen.","fr":"Nominalisiertes Partizip: *der/die Angestellte*."},{"de":"Ein Reisender hatte seinen Koffer vergessen.","fr":"*der Reisende*, hier ohne Artikel: *ein Reisender*."},{"de":"Wir wünschen Ihnen nur das Beste.","fr":"*das Beste*: nominalisierter Superlativ."},{"de":"Sie hat etwas völlig Neues ausprobiert.","fr":"*etwas Neues*: nominalisiertes Adjektiv."},{"de":"Der Vorsitzende eröffnete die Versammlung.","fr":"*der Vorsitzende*: nominalisiertes Partizip."}],
    coursDE: [
      "Im Deutschen können **Adjektive und Partizipien als Nomen** verwendet werden. Diese **Nominalisierung** ist sehr produktiv und gehört zum aktiven Repertoire auf C1. Das Wort wird **großgeschrieben**, behält aber seine **Adjektivendung**.",
      "Bei **Personen** entstehen geläufige Nomen: *der/die **Angestellte***, *der **Reisende***, *der **Bekannte***, *der **Deutsche***. Die Endung folgt der Adjektivdeklination: « *ein **Angestellter*** », « *die **Angestellten*** », « *mit einem **Bekannten*** ».",
      "Bei **Abstrakta** verwendet man häufig das Neutrum, oft nach *etwas, nichts, viel, das*: *das **Beste***, *das **Wichtigste***, *etwas **Neues***. Beispiel: « *Das **Wichtigste** ist die Gesundheit* ».",
      "Diese Konstruktionen verdichten die Sprache und wirken elegant. Die Schwierigkeit liegt in der korrekten Endung, die sich nach Artikel und Kasus richtet. Wer sie beherrscht, drückt sich präzise und gehoben aus."
    ],
    grammaire: [
      { regle: "Un adjectif/participe peut devenir **nom** (majuscule) en gardant sa **déclinaison d'adjectif** : *der **Reisende**, der **Angestellte**, das **Beste***.", attention: "Déclinaison vivante : *der Angestellte / ein Angestellt**er** / dem Angestellt**en***.", exemples: [{"de":"Der Angestellte ist krank.","fr":"L'employé est malade."},{"de":"Wir haben etwas Neues erlebt.","fr":"Nous avons vécu quelque chose de nouveau."}], titre: "Quand l'adjectif/participe devient nom", intro: "Un adjectif ou participe peut se nominaliser (majuscule) ; il garde sa déclinaison d'adjectif.",
        tableau: { entetes: ["Origine", "Nom", "Sens"], lignes: [["angestellt", "der/die Angestellte", "l'employé(e)"], ["reisen → reisend", "der/die Reisende", "le voyageur"], ["bekannt", "ein Bekannter", "une connaissance"], ["gut", "das Beste / das Gute", "le meilleur / le bien"], ["neu (après etwas)", "etwas Neues", "quelque chose de nouveau"]] },
        note: "Ces noms se déclinent comme des adjectifs : der Angestellte / ein Angestellter / dem Angestellten." },
      { titre: "Déclinaison complète (der Angestellte)",
        regle: "Le participe/adjectif nominalisé se décline **exactement comme un adjectif** : faible après *der*, forte/mixte après *ein* ou sans article.",
        intro: "*der Angestellte / ein Angestellter / dem Angestellten / die Angestellten*.",
        tableau: { entetes: ["Cas", "der", "ein", "pluriel"], lignes: [["Nominatif", "der Angestellte", "ein Angestellter", "die Angestellten"], ["Accusatif", "den Angestellten", "einen Angestellten", "die Angestellten"], ["Datif", "dem Angestellten", "einem Angestellten", "den Angestellten"], ["Génitif", "des Angestellten", "eines Angestellten", "der Angestellten"]] },
        note: "Sans article au pluriel : *Angestellte* (forte) — « Angestellte streiken »." },
      { titre: "Les abstraits neutres (das Gute)",
        regle: "Un adjectif neutre nominalisé désigne une **notion abstraite** : *das Gute, das Beste, das Wichtigste*. Beaucoup d'**expressions figées** en dérivent.",
        intro: "*Das **Beste** kommt noch* · *im **Allgemeinen*** (en général) · *im **Großen und Ganzen*** (dans l'ensemble).",
        tableau: { entetes: ["Expression", "Sens"], lignes: [["das Gute / das Böse", "le bien / le mal"], ["das Wichtigste", "le plus important"], ["im Allgemeinen", "en général"], ["im Großen und Ganzen", "dans l'ensemble"], ["auf dem Laufenden", "au courant"]] },
        note: "Ces neutres abstraits prennent une majuscule et se déclinent (des Guten, im Allgemeinen)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Un adjectif nominalisé garde…", options: ["sa déclinaison d'adjectif", "une déclinaison fixe", "aucune déclinaison"], correct: 0, explication: "der Angestellte / ein Angestellter." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich spreche mit ___ Angestellten. (dem)", options: ["dem", "der", "den", "das"], correct: 0, explication: "datif : mit dem Angestellten." },
      { type: "trou", consigne: "Complétez (après etwas).", texte: "Wir haben etwas {0} erlebt. (schön)", accepte: [["Schönes"]], indice: "etwas + adj. nominalisé en -es" },
      { type: "association", consigne: "Associez l'origine et le nom.", paires: [{ gauche: "angestellt", droite: "der Angestellte" }, { gauche: "reisend", droite: "der Reisende" }, { gauche: "bekannt", droite: "ein Bekannter" }, { gauche: "gut", droite: "das Beste" }] },
      { type: "qcm", consigne: "Choisissez (nominatif, sans article).", question: "Ein ___ hat angerufen. (bekannt)", options: ["Bekannter", "Bekannte", "Bekannten", "Bekanntes"], correct: 0, explication: "ein + masc. nom. → Bekannter." },
      { type: "qcm", consigne: "Déclinaison (génitif).", question: "das Büro ___ Angestellten.", options: ["des", "der", "dem", "den"], correct: 0, explication: "génitif : des Angestellten." },
      { type: "trou", consigne: "Sans article au pluriel.", texte: "Viele {0} streiken heute. (angestellt → nom)", accepte: [["Angestellte"]], indice: "pluriel sans « die » → forte : Angestellte" },
      { type: "qcm", consigne: "Expression figée.", question: "« en général » se dit…", options: ["im Allgemeinen", "in allgemein", "am allgemein", "das Allgemeine"], correct: 0, explication: "im Allgemeinen (neutre nominalisé figé)." }
    ]
  },
  c1g16: {
    id: "c1g16",
    einstieg: {"intro":"Observe le mode du discours rapporté soutenu.","exemples":[{"de":"Er sagte, er sei beschäftigt.","fr":"Il a dit qu'il était occupé."},{"de":"Man behauptet, das Projekt werde verschoben.","fr":"On affirme que le projet sera reporté."},{"de":"Sie betonte, sie habe nichts gewusst.","fr":"Elle a souligné qu'elle n'avait rien su."}],"question":"Quelles formes du Konjunktiv I sont les plus fréquentes ?"},
    merke: ["Konjunktiv I (presse, rapport soutenu) : *sei, habe, werde, könne, müsse*.","Formation : radical de l'infinitif + -e (er gehe, er komme).","Bascule au Konjunktiv II si la forme = indicatif (sie hätten)."],
    achtung: [{"erreur":"Er sagte, er ist beschäftigt.","correct":"Er sagte, er **sei** beschäftigt.","explication":"Discours rapporté soutenu → Konjunktiv I (sei)."},{"erreur":"Sie sagen, sie haben es gewusst.","correct":"Sie sagen, sie **hätten** es gewusst.","explication":"« sie haben » = indicatif → Konjunktiv II (hätten)."}],
    kontrast: {"titre":"Konjunktiv I : allemand vs français","similitudes":["Rapporter des propos (« il dit que »)."],"differences":["Mode dédié (sei, habe) pour marquer la distance/neutralité.","Très présent dans la presse écrite.","Le français use de la concordance des temps."]}, titre: "Le subjonctif I", titreDE: "Der Konjunktiv I", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C1",
    objectifs: ["Former le Konjunktiv I", "Rapporter affirmations, questions et ordres"],
    grammairePoints: ["sei, habe, könne, werde", "questions et ordres indirects"],
    exemplesPlus: [{"de":"Der Sprecher betonte, das Unternehmen sei nicht betroffen.","fr":"Konjunktiv I (*sei*) in der indirekten Rede."},{"de":"Sie erklärte, sie habe die Unterlagen bereits eingereicht.","fr":"Konjunktiv I: *habe*."},{"de":"Er fragte, ob das Angebot noch gültig sei.","fr":"Indirekte Frage mit *ob*."},{"de":"Im Gesetz heißt es, jeder Bürger habe dieses Recht.","fr":"Konjunktiv I in einem offiziellen Text."},{"de":"Der Arzt riet, der Patient solle sich schonen.","fr":"Indirekte Aufforderung mit *solle*."}],
    coursDE: [
      "Der **Konjunktiv I** ist die Form der **indirekten Rede** in formellen, vor allem schriftlichen Texten wie Nachrichten und Berichten. Er signalisiert, dass der Sprecher eine fremde Aussage **wiedergibt**, ohne sie zu bewerten.",
      "Die Formen leiten sich vom Verbstamm + -e ab und sind in der 3. Person besonders klar: *er **sei***, *er **habe***, *er **könne***, *er **werde***. Beispiel: « *Der Minister erklärte, er **sei** zuversichtlich und die Lage **werde** sich bessern* ».",
      "Auch **indirekte Fragen und Aufforderungen** werden so wiedergegeben. Bei Fragen mit *ob* oder Fragewort: « *Sie fragte, **ob** er Zeit **habe*** ». Aufforderungen mit *sollen*: « *Er sagte, ich **solle** warten* ».",
      "Ist der Konjunktiv I mit dem Indikativ formgleich (oft im Plural), weicht man auf den **Konjunktiv II** aus (« *sie **hätten*** » statt « sie haben »). Diese Ausweichregel sichert die Eindeutigkeit der indirekten Rede."
    ],
    grammaire: [
      { regle: "**Discours indirect** complet : affirmations (*sei, habe*), **questions** (*ob* / mot interrogatif), **ordres** (*sollen*).", attention: "Si le KI = indicatif (pluriel), on passe au **Konjunktiv II** (*sie hätten*).", exemples: [{"de":"Er sagt, er sei bereit.","fr":"Il dit qu'il est prêt."},{"de":"Er fragt, ob ich komme.","fr":"Il demande si je viens."}], titre: "Le discours indirect complet", intro: "Le Konjunktiv I rapporte des propos. On adapte aussi les questions (ob / W-Wort) et les ordres (sollen).",
        tableau: { entetes: ["Type", "Direct", "Indirect"], lignes: [["affirmation", "« Ich bin müde. »", "Er sagt, er sei müde."], ["passé", "« Ich war dort. »", "Er sagt, er sei dort gewesen."], ["question oui/non", "« Kommst du? »", "Er fragt, ob ich komme."], ["question W", "« Wann kommst du? »", "Er fragt, wann ich komme."], ["ordre", "« Komm! »", "Er sagt, ich solle kommen."]] },
        note: "Si le Konjunktiv I se confond avec l'indicatif (pluriel), on passe au Konjunktiv II : « sie haben » → « sie hätten »." },
      { titre: "Formes du Konjunktiv I (dont le passé)",
        regle: "KI = radical + **-e** ; *sein* est irrégulier (sei). Le **passé** indirect se rend par le **Perfekt du KI** : *sei/habe + participe*.",
        intro: "*er sei, er habe, er werde, er könne* ; passé : *er **habe** es **gemacht***, *er **sei gegangen***.",
        tableau: { entetes: ["Verbe", "KI présent (er)", "KI passé (er)"], lignes: [["sein", "sei", "sei gewesen"], ["haben", "habe", "habe gehabt"], ["machen", "mache", "habe gemacht"], ["gehen", "gehe", "sei gegangen"], ["werden", "werde", "sei geworden"]] },
        note: "sein KI complet : sei, sei(e)st, sei, seien, seiet, seien. Le passé indirect n'a qu'une forme (Perfekt KI)." },
      { titre: "Concordance : présent, passé, futur",
        regle: "Quel que soit le temps du discours direct : présent → **KI présent** ; passé (tous) → **KI Perfekt** ; futur → **KI werde + infinitif**.",
        intro: "*« Ich komme »* → *er komme* · *« Ich kam / bin gekommen »* → *er sei gekommen* · *« Ich werde kommen »* → *er werde kommen*.",
        tableau: { entetes: ["Direct", "Indirect (KI)", "Exemple"], lignes: [["présent", "KI présent", "Er sagt, er komme."], ["prétérit / parfait", "KI Perfekt (sei/habe + part.)", "Er sagt, er sei gekommen."], ["plus-que-parfait", "KI Perfekt", "Er sagt, er habe es getan."], ["futur", "werde + infinitif", "Er sagt, er werde kommen."]] },
        note: "Les trois temps du passé fusionnent en UNE forme indirecte : le Perfekt du KI." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Un ordre rapporté se rend avec…", options: ["sollen", "müssen", "dürfen", "wollen"], correct: 0, explication: "« Komm! » → Er sagt, ich solle kommen." },
      { type: "qcm", consigne: "Choisissez (Konjunktiv I de sein).", question: "Sie sagt, sie ___ krank.", options: ["sei", "ist", "wäre", "war"], correct: 0, explication: "Konjunktiv I : sei." },
      { type: "trou", consigne: "Complétez (question oui/non indirecte).", texte: "Er fragt, {0} ich Zeit habe.", accepte: [["ob"]], indice: "question oui/non → ob" },
      { type: "association", consigne: "Associez l'infinitif et le Konjunktiv I (er).", paires: [{ gauche: "sein", droite: "sei" }, { gauche: "haben", droite: "habe" }, { gauche: "können", droite: "könne" }, { gauche: "werden", droite: "werde" }] },
      { type: "qcm", consigne: "Choisissez (substitution au pluriel).", question: "Sie sagen, sie ___ keine Zeit. (haben)", options: ["hätten", "haben", "habe", "hätte"], correct: 0, explication: "pluriel ambigu → Konjunktiv II : hätten." },
      { type: "trou", consigne: "Passé indirect (KI Perfekt).", texte: "Er sagt, er {0} die Aufgabe erledigt. (haben)", accepte: [["habe"]], indice: "passé indirect → habe + participe" },
      { type: "qcm", consigne: "Futur indirect.", question: "« Ich werde kommen » → Er sagt, er ___ kommen.", options: ["werde", "wird", "würde", "sei"], correct: 0, explication: "futur indirect → werde + infinitif." },
      { type: "qcm", consigne: "Passé (mouvement).", question: "« Ich bin gegangen » → Er sagt, er ___ gegangen.", options: ["sei", "habe", "wäre", "ist"], correct: 0, explication: "gehen (mouvement) → KI Perfekt avec sein : sei gegangen." }
    ]
  },
  c1g17: {
    id: "c1g17",
    einstieg: {"intro":"Observe l'impératif poli et l'invitation.","exemples":[{"de":"Seien Sie bitte pünktlich!","fr":"Soyez ponctuel, s'il vous plaît !"},{"de":"Lass uns gehen!","fr":"Allons-y !"},{"de":"Man nehme zwei Eier.","fr":"Prendre deux œufs. (recette)"}],"question":"Comment former l'impératif poli et l'invitation « allons » ?"},
    merke: ["Impératif : *du* (komm!), *ihr* (kommt!), *Sie* (kommen Sie!).","*sein* irrégulier : *sei! seid! seien Sie!*","Invitation : *Lass(t) uns …* ; recette : *man nehme* (Konjunktiv I)."],
    achtung: [{"erreur":"Sei Sie pünktlich!","correct":"**Seien** Sie pünktlich!","explication":"Impératif de *sein* poli : *seien Sie*."},{"erreur":"Komme! (du)","correct":"**Komm!**","explication":"À *du*, l'impératif n'a pas de -e final."}],
    kontrast: {"titre":"L'impératif : allemand vs français","similitudes":["Ordre/invitation à la 2e personne."],"differences":["Trois formes (du/ihr/Sie), inversion à la forme polie (kommen Sie).","*Lass uns …* = « allons ».","*man nehme* (Konjunktiv I) dans les recettes."]}, titre: "L'impératif", titreDE: "Der Imperativ", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "C1",
    objectifs: ["Former l'impératif (du/ihr/Sie/wir)", "Connaître les alternatives à l'impératif"],
    grammairePoints: ["Geh! Geht! Gehen Sie!", "Infinitif, sollen, passif"],
    exemplesPlus: [{"de":"Nehmen Sie bitte Platz!","fr":"Höflichkeitsform mit *Sie*."},{"de":"Seid bitte etwas leiser!","fr":"Imperativ der 2. Person Plural."},{"de":"Bitte nicht rauchen!","fr":"Infinitiv als Aufforderung (z. B. auf Schildern)."},{"de":"Du sollst dich ausruhen.","fr":"*sollen* als indirekter Befehl."},{"de":"Vor Gebrauch gut schütteln!","fr":"Unpersönliche Aufforderung (Gebrauchsanweisung)."}],
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
    id: "c1g18",
    einstieg: {"intro":"Observe comment condenser une subordonnée en groupe nominal.","exemples":[{"de":"nach der Ankunft des Zuges","fr":"après l'arrivée du train"},{"de":"die Lösung des Problems","fr":"la résolution du problème"},{"de":"bei näherer Betrachtung","fr":"à y regarder de plus près"}],"question":"Comment transformer une subordonnée en groupe nominal ?"},
    merke: ["Style nominal (écrit soutenu) : subordonnée → *groupe nominal* + génitif.","*nachdem der Zug ankam* → *nach der Ankunft des Zuges*.","Suffixes : *-ung, -heit, -keit, -tion* transforment verbe/adjectif en nom."],
    achtung: [{"erreur":"nach das Ankommen des Zug","correct":"nach der **Ankunft** des **Zuges**","explication":"Nominalisation : *Ankunft* + génitif (des Zuges)."},{"erreur":"die Lösung das Problem","correct":"die Lösung **des Problems**","explication":"Le complément passe au génitif."}],
    kontrast: {"titre":"Le style nominal : allemand vs français","similitudes":["On nominalise (« après l'arrivée »)."],"differences":["L'allemand condense des subordonnées en groupes nominaux + génitif.","Style présent à l'écrit administratif/scientifique.","Suffixes productifs (-ung, -heit)."]}, titre: "La nominalisation", titreDE: "Die Nominalisierung", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Passer du style verbal au style nominal", "Employer les prépositions adéquates"],
    grammairePoints: ["weil → wegen, nachdem → nach", "das Lernen, die Prüfung"],
    exemplesPlus: [{"de":"Wegen des starken Schneefalls blieb die Schule geschlossen.","fr":"Nominalstil: *weil* wird zu *wegen* + Nomen."},{"de":"Nach dem Lesen des Berichts war alles klar.","fr":"*nachdem* wird zu *nach* + Nominalisierung."},{"de":"Beim Kochen höre ich gern Musik.","fr":"*während ich koche* wird zu *beim Kochen*."},{"de":"Trotz mangelnder Erfahrung wurde sie eingestellt.","fr":"*obwohl* wird zu *trotz* + Nomen."},{"de":"Durch regelmäßiges Üben verbessert man seine Aussprache.","fr":"*indem* wird zu *durch* + Nominalisierung."}],
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
        note: "Correspondances : weil→wegen, trotzdem/obwohl→trotz, nachdem→nach, bevor→vor, wenn→bei, indem→durch." },
      { titre: "Les suffixes de nominalisation",
        regle: "Un verbe ou un adjectif devient un **nom** grâce à des suffixes qui déterminent aussi le **genre**.",
        intro: "*prüfen → die Prüf**ung*** · *frei → die Frei**heit*** · *das **Lernen*** (infinitif nominalisé).",
        tableau: { entetes: ["Suffixe", "Genre", "Exemple"], lignes: [["-ung (verbe)", "die", "lösen → die Lösung"], ["-heit / -keit (adj.)", "die", "frei → die Freiheit"], ["-tion / -ität", "die", "reagieren → die Reaktion"], ["-nis", "das / die", "erlauben → die Erlaubnis"], ["das + infinitif", "das", "das Lesen, das Rauchen"]] },
        note: "Les noms en -ung, -heit, -keit, -tion, -ität sont **féminins** ; l'infinitif nominalisé est **neutre**." },
      { titre: "Quelle préposition, quel cas ?",
        regle: "Chaque conjonction se nominalise avec une **préposition** et un **cas** précis. À mémoriser ensemble.",
        intro: "*weil → wegen + génitif* · *nachdem → nach + datif* · *indem → durch + accusatif*.",
        tableau: { entetes: ["Conjonction", "Préposition + cas", "Exemple nominal"], lignes: [["weil", "wegen + Gén.", "wegen des Regens"], ["obwohl", "trotz + Gén.", "trotz der Kälte"], ["nachdem", "nach + Dat.", "nach dem Essen"], ["bevor", "vor + Dat.", "vor der Abreise"], ["während / wenn", "bei / während", "beim Kochen"], ["indem", "durch + Akk.", "durch regelmäßiges Üben"]] },
        note: "Attention au cas : wegen/trotz → génitif ; nach/vor/bei → datif ; durch → accusatif." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« weil » se nominalise en…", options: ["wegen + génitif", "trotz + génitif", "durch + accusatif"], correct: 0, explication: "weil → wegen (cause)." },
      { type: "qcm", consigne: "Choisissez.", question: "nachdem er ankam → ___ seiner Ankunft", options: ["nach", "vor", "bei", "durch"], correct: 0, explication: "nachdem → nach (postériorité)." },
      { type: "trou", consigne: "Complétez (obwohl → trotz).", texte: "{0} der Schwierigkeit gelang es. (obwohl → préposition)", accepte: [["Trotz"]], indice: "obwohl → trotz + génitif" },
      { type: "association", consigne: "Associez la conjonction et la préposition.", paires: [{ gauche: "weil", droite: "wegen" }, { gauche: "obwohl", droite: "trotz" }, { gauche: "nachdem", droite: "nach" }, { gauche: "indem", droite: "durch" }] },
      { type: "traduction", consigne: "Traduisez (style nominal).", source: "À cause de la pluie, nous sommes restés.", accepte: ["Wegen des Regens sind wir geblieben", "Wegen des Regens blieben wir"], aide: "wegen + génitif (des Regens)" },
      { type: "qcm", consigne: "Suffixe & genre.", question: "« die Lösung » (de lösen) est…", options: ["féminin (-ung)", "masculin", "neutre"], correct: 0, explication: "les noms en -ung sont féminins : die Lösung." },
      { type: "trou", consigne: "Nominalisation (indem → durch).", texte: "{0} regelmäßiges Üben lernt man schnell.", accepte: [["Durch"]], indice: "indem → durch + accusatif" },
      { type: "qcm", consigne: "Cas après la préposition.", question: "« nach » (de nachdem) régit…", options: ["le datif", "le génitif", "l'accusatif"], correct: 0, explication: "nach + datif : nach dem Essen." }
    ]
  },
  c1g19: {
    id: "c1g19",
    einstieg: {"intro":"Observe le passif exprimé sans *werden*.","exemples":[{"de":"Das Problem ist zu lösen.","fr":"Le problème doit/peut être résolu."},{"de":"Das lässt sich nicht ändern.","fr":"Cela ne peut pas être changé."},{"de":"Man kann das leicht reparieren.","fr":"On peut facilement réparer ça."}],"question":"Comment exprimer le passif sans *werden* ?"},
    merke: ["Substituts du passif : *sein + zu + infinitif* (= devoir/pouvoir être …).","*sich lassen + infinitif* (= peut être …) ; *man* + actif.","*-bar* (machbar = réalisable) exprime la possibilité passive."],
    achtung: [{"erreur":"Das Problem muss gelöst werden. (plus concis)","correct":"Das Problem **ist zu lösen**.","explication":"*sein + zu + inf* = passif d'obligation/possibilité, plus élégant."},{"erreur":"Das lässt nicht sich ändern.","correct":"Das **lässt sich** nicht ändern.","explication":"Ordre : *lässt sich* + infinitif."}],
    kontrast: {"titre":"Substituts du passif : allemand vs français","similitudes":["Le passif et « on » existent."],"differences":["*sein + zu + inf* et *sich lassen + inf* remplacent le passif modal.","*man* (= on) évite le passif.","*-bar* (lösbar) exprime « -able »."]}, titre: "Les formes passives", titreDE: "Passiv und Passiversatz", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C1",
    objectifs: ["Maîtriser passif de processus et d'état", "Employer les formes de substitution du passif"],
    grammairePoints: ["werden/sein + participe", "man, sich lassen, sein + zu + Inf., -bar"],
    exemplesPlus: [{"de":"Das Problem lässt sich leicht lösen.","fr":"*sich lassen* = kann gelöst werden (Passiversatz)."},{"de":"Diese Frage ist nicht so einfach zu beantworten.","fr":"*sein + zu + Infinitiv*: muss/kann beantwortet werden."},{"de":"Man hat die Entscheidung mehrfach verschoben.","fr":"*man* statt eines Passivs."},{"de":"Der Fehler ist kaum vermeidbar.","fr":"Adjektiv auf *-bar*: kann kaum vermieden werden."},{"de":"Die Akten werden derzeit überprüft.","fr":"Klassisches Vorgangspassiv mit *werden*."}],
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
        note: "« lösbar » = « kann gelöst werden » ; « Das lässt sich lösen » = même idée, registre courant." },
      { titre: "Le passif à tous les temps",
        regle: "Le *Vorgangspassiv* se conjugue à **tous les temps** en changeant seulement *werden*. Au Perfekt/Plusquamperfekt : **worden** (sans ge-).",
        intro: "Le participe du verbe ne bouge pas ; *werden* porte le temps.",
        tableau: { entetes: ["Temps", "Forme", "Exemple (bauen)"], lignes: [["Präsens", "wird gebaut", "Das Haus wird gebaut."], ["Präteritum", "wurde gebaut", "Das Haus wurde gebaut."], ["Perfekt", "ist gebaut worden", "Das Haus ist gebaut worden."], ["Plusquamperfekt", "war gebaut worden", "Das Haus war gebaut worden."], ["Futur I", "wird gebaut werden", "Das Haus wird gebaut werden."]] },
        note: "Perfekt / Plusquamperfekt passif : ist/war … **worden** (jamais « geworden »)." },
      { titre: "Nuances des substituts du passif",
        regle: "Les substituts ne sont pas interchangeables : **sein + zu** = obligation OU possibilité ; **sich lassen** = possibilité ; **-bar/-lich** = possibilité inhérente.",
        intro: "*Die Miete ist zu zahlen* (obligation) vs *Das ist leicht zu lösen* (possibilité).",
        tableau: { entetes: ["Forme", "Nuance", "Exemple"], lignes: [["sein + zu + Inf.", "obligation ou possibilité", "Die Miete ist zu zahlen."], ["sich lassen + Inf.", "possibilité", "Das lässt sich machen."], ["-bar / -lich", "possibilité inhérente", "essbar, verständlich"], ["man + actif", "généralisation neutre", "Man sagt, dass …"]] },
        note: "Négation : *un-* + -bar = « in- » (unlösbar = insoluble = nicht lösbar)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Das lässt sich machen » équivaut à…", options: ["kann gemacht werden", "muss gemacht werden", "wurde gemacht"], correct: 0, explication: "sich lassen = possibilité passive." },
      { type: "qcm", consigne: "Choisissez (passif d'état).", question: "Le résultat (Zustandspassiv) se forme avec…", options: ["sein + participe", "werden + participe", "haben + participe"], correct: 0, explication: "Die Tür ist geöffnet (état)." },
      { type: "trou", consigne: "Complétez (sein + zu + Inf.).", texte: "Das Problem ist leicht zu {0}. (lösen)", accepte: [["lösen"]], indice: "sein + zu + infinitif" },
      { type: "association", consigne: "Associez la forme et son équivalent.", paires: [{ gauche: "man macht", droite: "es wird gemacht" }, { gauche: "lässt sich machen", droite: "kann gemacht werden" }, { gauche: "ist zu machen", droite: "muss gemacht werden" }, { gauche: "machbar", droite: "kann gemacht werden" }] },
      { type: "ordre", consigne: "Construisez la phrase (Passiversatz).", mots: ["Das", "lässt", "sich", "leicht", "lösen"], correct: "Das lässt sich leicht lösen", traduction: "Cela peut se résoudre facilement." },
      { type: "qcm", consigne: "Perfekt passif.", question: "Das Haus ist gebaut ___.", options: ["worden", "geworden", "gewesen", "werden"], correct: 0, explication: "Perfekt passif : ist … worden." },
      { type: "trou", consigne: "Adjectif en -bar.", texte: "Dieses Problem ist nicht lös{0}.", accepte: [["bar"]], indice: "lösen → lösbar (possibilité passive)" },
      { type: "qcm", consigne: "Équivalent.", question: "« Die Rechnung ist zu bezahlen » exprime plutôt…", options: ["une obligation", "une interdiction", "un souhait"], correct: 0, explication: "sein + zu : ici obligation (doit être payée)." }
    ]
  }
});
