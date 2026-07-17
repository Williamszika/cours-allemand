/* =====================================================================
   grammaire-b21.js — 8 LEÇONS DE GRAMMAIRE du module B2.1
   (window.GRAMMAIRE_B2). Suit les 8 points de grammaire B2.1 du
   programme « Erkundungen ». Approfondissement niveau B2.
   ===================================================================== */
window.GRAMMAIRE_B2 = Object.assign(window.GRAMMAIRE_B2 || {}, {
  b2g01: {
    id: "b2g01",
    einstieg: {"intro":"Ces modaux n'expriment pas l'obligation. Observe.","exemples":[{"de":"Er muss krank sein.","fr":"Il doit être malade. (probabilité)"},{"de":"Sie soll sehr reich sein.","fr":"On dit qu'elle est très riche."},{"de":"Das kann nicht stimmen.","fr":"Ça ne peut pas être vrai."}],"question":"Les modaux n'expriment-ils que l'obligation et la capacité ?"},
    merke: ["Emploi *subjectif* des modaux : supposition / rumeur.","*müssen* = forte probabilité (*er muss krank sein* = il est sûrement malade).","*sollen* = on dit que (rumeur) ; *dürfte* = probablement ; *könnte* = il se peut."],
    achtung: [{"erreur":"Er ist sicher krank.","correct":"Er **muss** krank sein.","explication":"Pour une déduction logique, l'allemand utilise *müssen* (sens subjectif)."},{"erreur":"Man sagt, sie ist reich.","correct":"Sie **soll** reich sein.","explication":"*sollen* exprime la rumeur (« on dit que »)."}],
    kontrast: {"titre":"Modaux subjectifs : allemand vs français","similitudes":["« il doit être malade » a un sens de probabilité dans les deux."],"differences":["L'allemand systématise : *müssen* (déduction), *sollen* (rumeur), *dürfte* (probable).","Même modal, deux sens (objectif/subjectif) selon le contexte.","Le français passe par « sûrement », « on dit que »."]}, titre: "Les verbes modaux", titreDE: "Die Modalverben", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
    objectifs: ["Distinguer sens objectif et subjectif des modaux", "Exprimer la supposition (müssen/können/dürfte)"],
    grammairePoints: ["sens objectif vs subjectif", "Vermutung : müsste, könnte, dürfte"],
    exemplesPlus: [{"de":"Du musst den Bericht bis Freitag abgeben.","fr":"Objektiv: eine echte Notwendigkeit."},{"de":"Er müsste eigentlich schon zu Hause sein.","fr":"Subjektiv: eine ziemlich sichere Vermutung."},{"de":"Sie könnte im Stau stehen.","fr":"Subjektiv: eine von mehreren Möglichkeiten."},{"de":"Das dürfte die richtige Lösung sein.","fr":"Subjektiv: wahrscheinlich richtig."},{"de":"Du darfst das Gebäude nicht ohne Ausweis betreten.","fr":"Objektiv: ein klares Verbot."}],
    coursDE: [
      "Die **Modalverben** (*können, müssen, dürfen, sollen, wollen, mögen*) kennst du schon aus dem Alltag. Auf B2-Niveau lernst du, dass sie **zwei verschiedene Bedeutungen** haben können: eine **objektive** und eine **subjektive**.",
      "Die **objektive** Bedeutung ist die normale: Sie beschreibt eine Möglichkeit, eine Pflicht oder eine Erlaubnis. « *Ich muss arbeiten* » bedeutet, dass es wirklich notwendig ist. Das ist die Bedeutung, die du schon gut kennst.",
      "Die **subjektive** Bedeutung drückt eine **Vermutung** aus – also wie sicher der Sprecher ist. *müssen* zeigt große Sicherheit (« *Er **muss** krank sein* » = ich bin fast sicher), *könnte* zeigt eine Möglichkeit, und *dürfte* eine vorsichtige Vermutung (« *Er **dürfte** zu Hause sein* »).",
      "Für Vermutungen sind die Konjunktiv-II-Formen **müsste, könnte, dürfte** besonders nützlich, weil sie höflicher und vorsichtiger klingen. Achte im Gespräch auf den Kontext: Dasselbe Modalverb kann « es ist nötig » oder « ich vermute » bedeuten."
    ],
    grammaire: [
      { regle: "Au B2, les modaux expriment aussi la **supposition** : *müssen* (quasi sûr), *dürfte* (probable), *können* (possible).", attention: "*sollen* subjectif = **rumeur** (*Er **soll** reich sein*) ; *wollen* subjectif = **prétention** (*Er **will** nichts gewusst haben*).", exemples: [{"de":"Er muss krank sein.","fr":"Il doit être malade (j'en suis sûr)."},{"de":"Sie dürfte schon da sein.","fr":"Elle est probablement déjà là."}], titre: "Sens objectif et sens subjectif", intro: "Au B2, les modaux servent aussi à exprimer une SUPPOSITION (sens subjectif), pas seulement l'obligation ou la capacité.",
        tableau: { entetes: ["Modal", "Sens objectif", "Sens subjectif (supposition)"], lignes: [["müssen", "devoir (obligation)", "Er muss krank sein. (j'en suis sûr)"], ["können", "pouvoir (capacité)", "Das kann stimmen. (c'est possible)"], ["dürfen", "avoir le droit", "Er dürfte zu Hause sein. (probablement)"], ["sollen", "devoir (consigne)", "Er soll reich sein. (on dit que)"], ["wollen", "vouloir", "Er will alles gesehen haben. (il prétend)"]] },
        note: "Degrés de certitude : müssen (quasi sûr) > dürfte (probable) > könnte/kann (possible). « sollen » subjectif = rumeur ; « wollen » subjectif = prétention." },
      { titre: "La supposition sur le PASSÉ",
        regle: "Pour supposer sur le **passé**, on emploie le modal + **infinitif passé** (participe + haben/sein) : *Er **muss** krank **gewesen sein*** (il a dû être malade).",
        intro: "modal + participe + haben/sein : *Sie **dürfte** es **vergessen haben***.",
        tableau: { entetes: ["Certitude", "Structure", "Exemple"], lignes: [["quasi sûr", "muss + Part. + haben/sein", "Er muss es gewusst haben."], ["probable", "dürfte + Part. + haben/sein", "Sie dürfte gegangen sein."], ["possible", "könnte + Part. + haben/sein", "Er könnte krank gewesen sein."], ["rumeur (passé)", "soll + Part. + haben/sein", "Er soll reich gewesen sein."]] },
        note: "Présent : *Er muss krank sein*. Passé : *Er muss krank **gewesen sein*** (+ infinitif passé)." },
      { titre: "L'échelle de certitude",
        regle: "Les modaux subjectifs forment une **échelle**, du plus sûr au plus incertain.",
        intro: "*muss* (≈100 %) → *dürfte/müsste* (≈80 %) → *kann/könnte* (≈50 %) → *mag* (peu probable).",
        tableau: { entetes: ["Modal", "Certitude", "Nuance"], lignes: [["muss", "≈ 95-100 %", "déduction quasi sûre"], ["dürfte / müsste", "≈ 75-90 %", "très probable"], ["kann / könnte", "≈ 50 %", "possible"], ["mag", "faible", "il se peut (concession)"], ["kann nicht", "exclu", "impossible"]] },
        note: "*Das kann nicht stimmen* = impossible (exclusion). *Das mag sein* = c'est possible (concession)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Er muss krank sein » exprime ici…", options: ["une supposition quasi certaine", "une obligation", "une permission"], correct: 0, explication: "Sens subjectif : j'en suis presque sûr." },
      { type: "qcm", consigne: "Choisissez (rumeur).", question: "Er ___ sehr reich sein, sagt man.", options: ["soll", "muss", "will", "darf"], correct: 0, explication: "sollen subjectif = on dit que." },
      { type: "trou", consigne: "Complétez (probabilité).", texte: "Sie {0} jetzt im Büro sein, sie arbeitet ja immer bis sechs.", accepte: [["dürfte"]], indice: "supposition probable → dürfte" },
      { type: "association", consigne: "Associez le modal et son sens subjectif.", paires: [{ gauche: "müssen", droite: "quasi certain" }, { gauche: "dürfte", droite: "probable" }, { gauche: "können", droite: "possible" }, { gauche: "wollen", droite: "prétention" }] },
      { type: "qcm", consigne: "Choisissez.", question: "« Er will alles gewusst haben » signifie…", options: ["Il prétend avoir tout su", "Il veut tout savoir", "Il doit tout savoir"], correct: 0, explication: "wollen subjectif = prétendre." },
      { type: "trou", consigne: "Supposition sur le passé.", texte: "Er muss den Bus verpasst {0}.", accepte: [["haben"]], indice: "supposition passée → modal + participe + haben" },
      { type: "qcm", consigne: "Échelle de certitude.", question: "Le plus sûr : « Er ___ es gewesen sein. »", options: ["muss", "könnte", "mag", "kann nicht"], correct: 0, explication: "müssen = déduction quasi certaine." },
      { type: "qcm", consigne: "Impossibilité.", question: "« Das ___ nicht stimmen » (c'est impossible).", options: ["kann", "muss", "soll", "will"], correct: 0, explication: "kann nicht = exclusion / impossibilité." }
    ]
  },
  b2g02: {
    id: "b2g02",
    einstieg: {"intro":"Observe la chronologie de deux actions passées.","exemples":[{"de":"Nachdem er gegessen hatte, ging er.","fr":"Après avoir mangé, il partit."},{"de":"Ich hatte ihn schon gewarnt.","fr":"Je l'avais déjà prévenu."},{"de":"Damals lebte sie in Berlin.","fr":"À l'époque, elle vivait à Berlin."}],"question":"Comment marquer qu'une action précède une autre dans le passé ?"},
    merke: ["*Plusquamperfekt* (*hatte/war* + participe) = action *antérieure* à un autre passé.","Récit/écrit : *Präteritum* domine ; oral : *Perfekt*.","Concordance : *nachdem* + Plusquamperfekt, principale au Präteritum."],
    achtung: [{"erreur":"Nachdem er aß, ging er.","correct":"Nachdem er gegessen **hatte**, ging er.","explication":"*nachdem* exige le Plusquamperfekt (antériorité)."},{"erreur":"Ich habe ihn schon gewarnt gehabt.","correct":"Ich **hatte** ihn schon gewarnt.","explication":"L'antériorité se dit au Plusquamperfekt."}],
    kontrast: {"titre":"Les temps du passé (B2) : allemand vs français","similitudes":["Plus-que-parfait pour l'antériorité."],"differences":["La concordance *nachdem* + Plusquamperfekt est stricte.","Le choix Perfekt/Präteritum dépend du registre.","Un seul Präteritum = imparfait + passé simple."]}, titre: "Les temps du passé", titreDE: "Perfekt, Präteritum, Plusquamperfekt", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
    objectifs: ["Choisir le temps selon le registre", "Marquer l'antériorité dans un texte"],
    grammairePoints: ["Perfekt / Präteritum", "Plusquamperfekt + nachdem"],
    exemplesPlus: [{"de":"Gestern habe ich meine alten Freunde getroffen.","fr":"Perfekt: im Gespräch über die Vergangenheit."},{"de":"Der Schriftsteller lebte lange im Ausland und schrieb dort seine Romane.","fr":"Präteritum: typisch für geschriebene Texte."},{"de":"Nachdem sie die Prüfung bestanden hatte, feierte sie mit Freunden.","fr":"Plusquamperfekt + *nachdem*: das war vorher."},{"de":"Als ich klein war, verbrachten wir jeden Sommer am Meer.","fr":"*als* + Präteritum für die Vergangenheit."},{"de":"Er hatte den Schlüssel vergessen, deshalb konnte er nicht ins Haus.","fr":"Plusquamperfekt für die frühere Ursache."}],
    coursDE: [
      "Auf B2-Niveau solltest du die drei Vergangenheitsformen sicher beherrschen und vor allem **richtig kombinieren** können. Jede Form hat ihre Funktion, und im Text arbeiten sie oft zusammen.",
      "Das **Perfekt** bleibt die Form der **gesprochenen Sprache** und der persönlichen Texte: « *Ich habe gestern lange gearbeitet* ». Das **Präteritum** ist die Form der **geschriebenen Erzählung** und der Nachrichten: « *Die Regierung beschloss ein neues Gesetz* ».",
      "Das **Plusquamperfekt** drückt die **Vorzeitigkeit** aus: eine Handlung, die vor einer anderen Vergangenheit liegt. Du bildest es mit *hatte* oder *war* + Partizip II, oft zusammen mit **nachdem**: « *Nachdem er gegessen hatte, ging er ins Bett* ».",
      "Achte auf die typische Kombination: Im **nachdem**-Satz steht das Plusquamperfekt, im Hauptsatz das Präteritum oder Perfekt. So zeigst du klar, welche Handlung zuerst kam. Diese saubere Zeitenfolge ist ein Zeichen für gutes B2-Deutsch."
    ],
    grammaire: [
      { exemples: [{"de":"Die Firma meldete hohe Verluste.","fr":"L'entreprise a annoncé de fortes pertes."},{"de":"Nachdem sie studiert hatte, fand sie eine Stelle.","fr":"Après ses études, elle a trouvé un poste."}], regle: "Perfekt (oral/e-mail), Präteritum (récit écrit/presse), Plusquamperfekt (antériorité). On les **combine** dans un texte.", attention: "*sein, haben* et les modaux → **Präteritum** même à l'oral.", titre: "Trois temps, trois usages", intro: "Perfekt = oral et lettres ; Präteritum = récit écrit et presse ; Plusquamperfekt = antériorité.",
        tableau: { entetes: ["Temps", "Registre / rôle", "Exemple"], lignes: [["Perfekt", "oral, e-mail", "Ich habe das schon erledigt."], ["Präteritum", "récit écrit, presse", "Die Firma meldete Verluste."], ["Plusquamperfekt", "antériorité", "Nachdem er gekündigt hatte, zog er um."], ["sein/haben/Modale", "Präteritum même à l'oral", "Ich war müde / hatte keine Zeit."]] },
        schemas: [{ legende: "Antériorité avec nachdem (Plusquamperfekt → Präteritum).", mots: [{ m: "Nachdem er studiert hatte,", r: "antérieur", c: "conj" }, { m: "fand", r: "verbe (1)", c: "verbe" }, { m: "er", r: "sujet", c: "sujet" }, { m: "eine Stelle", r: "complément", c: "fin" }] }],
        note: "Dans un texte au Präteritum, le Plusquamperfekt situe ce qui s'était passé avant." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Dans la presse écrite, on emploie surtout…", options: ["le Präteritum", "le Perfekt", "le Plusquamperfekt"], correct: 0, explication: "Le Präteritum est le temps du récit écrit." },
      { type: "qcm", consigne: "Choisissez (antériorité).", question: "Nachdem er ___ hatte, ging er. (essen)", options: ["gegessen", "gegessen war", "aß", "isst"], correct: 0, explication: "nachdem + Plusquamperfekt : hatte gegessen." },
      { type: "trou", consigne: "Complétez (Plusquamperfekt).", texte: "Als wir ankamen, {0} der Zug schon abgefahren.", accepte: [["war"]], indice: "abfahren → sein → war abgefahren" },
      { type: "association", consigne: "Associez le temps et son usage.", paires: [{ gauche: "Perfekt", droite: "oral / e-mail" }, { gauche: "Präteritum", droite: "récit écrit" }, { gauche: "Plusquamperfekt", droite: "antériorité" }, { gauche: "sein/haben", droite: "Präteritum à l'oral" }] },
      { type: "ordre", consigne: "Phrase au Plusquamperfekt.", mots: ["Er", "hatte", "die", "Stelle", "schon", "bekommen"], correct: "Er hatte die Stelle schon bekommen", traduction: "Il avait déjà obtenu le poste." }
    ]
  },
  b2g03: {
    id: "b2g03",
    einstieg: {"intro":"La terminaison de l'adjectif change selon l'article. Observe.","exemples":[{"de":"ein guter Wein","fr":"un bon vin"},{"de":"mit gutem Wein","fr":"avec du bon vin"},{"de":"die guten Weine","fr":"les bons vins"}],"question":"De quoi dépend la terminaison de l'adjectif épithète ?"},
    merke: ["Déclinaison *faible* (après der/die/das) : -e / -en.","Déclinaison *mixte* (après ein/kein/mein) : l'adjectif marque le genre.","Déclinaison *forte* (sans article) : l'adjectif prend les terminaisons de l'article (gutem, guter)."],
    achtung: [{"erreur":"ein gutes Wein","correct":"ein **guter** Wein","explication":"*Wein* est masculin : ein gut**er** Wein."},{"erreur":"mit dem guter Wein","correct":"mit dem **guten** Wein","explication":"Après *dem* (article), déclinaison faible : guten."}],
    kontrast: {"titre":"Déclinaison de l'adjectif : allemand vs français","similitudes":["L'adjectif s'accorde avec le nom."],"differences":["Trois déclinaisons (faible/mixte/forte) selon l'article.","La terminaison encode genre + cas + nombre.","Système absent en français."]}, titre: "La déclinaison des adjectifs", titreDE: "Die Adjektivdeklination", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B2",
    objectifs: ["Maîtriser les trois déclinaisons de l'adjectif", "Décliner sans article"],
    grammairePoints: ["après der / ein / ø", "terminaisons -e / -en / forte"],
    exemplesPlus: [{"de":"Der neue Kollege ist sehr freundlich.","fr":"Nach *der*: schwache Endung *-e*."},{"de":"Ich habe einen interessanten Artikel gelesen.","fr":"Nach *ein*: gemischte Endung *-en*."},{"de":"Sie trinkt gern heißen Tee mit Zitrone.","fr":"Ohne Artikel: starke Endung."},{"de":"Die Meinung der jungen Leute ist wichtig.","fr":"Nach *der* (Genitiv Plural): *-en*."},{"de":"Mit freundlichen Grüßen schließe ich den Brief.","fr":"Nach Präposition ohne Artikel: starke Endung."}],
    coursDE: [
      "Die **Adjektivdeklination** ist eine der wichtigsten Strukturen auf B2-Niveau. Ein Adjektiv vor einem Nomen bekommt eine Endung, und diese Endung hängt vom **Artikel**, vom **Kasus** und vom **Genus** ab. Es gibt drei Deklinationstypen.",
      "Nach dem **bestimmten Artikel** (der, die, das) ist die Endung schwach: meistens **-e** oder **-en**. Beispiel: « *der **gute** Wein* », « *den **guten** Wein* », « *mit dem **guten** Wein* ». Der Artikel zeigt schon den Kasus, deshalb braucht das Adjektiv wenig Information.",
      "Nach dem **unbestimmten Artikel** (ein, kein, mein…) muss das Adjektiv manchmal das Genus selbst zeigen: « *ein **guter** Wein* » (maskulin), « *ein **gutes** Bier* » (neutral), « *eine **gute** Idee* » (feminin).",
      "Ohne Artikel ist die Endung stark und übernimmt die Rolle des Artikels: « *guter Wein* », « *gutes Bier* ». Mein Tipp: Lerne zuerst die Regel nach *der/die/das* sicher, denn sie ist am häufigsten. Die anderen Typen kommen mit der Übung."
    ],
    grammaire: [
      { regle: "Trois systèmes selon le déterminant : après **der** (faible -e/-en), après **ein** (mixte), **sans article** (forte).", attention: "Sans article, l'adjectif **porte** la marque du cas : *gut**er** Wein*, *kalt**em** Wasser* (datif).", exemples: [{"de":"der gute Wein / ein guter Wein / guter Wein","fr":"le bon vin / un bon vin / du bon vin"},{"de":"Ich trinke einen guten Wein.","fr":"Je bois un bon vin."}], titre: "Trois systèmes selon le déterminant", intro: "L'adjectif épithète prend une terminaison selon ce qui le précède : article défini, indéfini, ou rien.",
        tableau: { entetes: ["Contexte", "Nom. masc.", "Acc. masc.", "Dat. fém."], lignes: [["après der/die/das", "der gute Wein", "den guten Wein", "der guten Idee"], ["après ein/kein/mein", "ein guter Wein", "einen guten Wein", "einer guten Idee"], ["sans article", "guter Wein", "guten Wein", "guter Idee"]] },
        note: "Sans article, l'adjectif « porte » la marque du cas (déclinaison forte). Après un article défini, c'est -e ou -en (déclinaison faible)." },
      { titre: "Type 1 — après l'article défini (déclinaison faible)",
        regle: "Après **der / die / das** (et *dieser, jeder, welcher, alle*…), l'adjectif prend une terminaison **faible** : **-e** ou **-en**. L'article porte déjà le cas, donc l'adjectif en dit peu.",
        intro: "Règle express : **-e** dans le « bloc » nominatif singulier (+ accusatif féminin/neutre), **-en** partout ailleurs.",
        tableau: { entetes: ["Cas", "Masculin", "Féminin", "Neutre", "Pluriel"], lignes: [["Nom.", "der gute", "die gute", "das gute", "die guten"], ["Acc.", "den guten", "die gute", "das gute", "die guten"], ["Dat.", "dem guten", "der guten", "dem guten", "den guten"], ["Gén.", "des guten", "der guten", "des guten", "der guten"]] },
        note: "Seulement 5 cases en **-e** (le bloc nominatif/accusatif singulier) ; tout le reste est en **-en**." },
      { titre: "Type 2 — après ein/kein/mein (déclinaison mixte)",
        regle: "Après **ein, kein, mein, dein…**, la déclinaison est **mixte** : là où *ein* ne marque pas le genre (masc. nominatif, neutre nom./acc.), c'est l'**adjectif** qui le fait (**-er, -es**).",
        intro: "Par rapport au type faible, seules **3 cases** changent : *ein gut**er*** (masc. nom.), *ein gut**es*** (neutre nom./acc.).",
        tableau: { entetes: ["Cas", "Masculin", "Féminin", "Neutre", "Pluriel (kein)"], lignes: [["Nom.", "ein guter", "eine gute", "ein gutes", "keine guten"], ["Acc.", "einen guten", "eine gute", "ein gutes", "keine guten"], ["Dat.", "einem guten", "einer guten", "einem guten", "keinen guten"], ["Gén.", "eines guten", "einer guten", "eines guten", "keiner guten"]] },
        note: "*ein* n'a pas de pluriel : on prend *kein/mein* (*keine guten Weine*)." },
      { titre: "Type 3 — sans article (déclinaison forte)",
        regle: "**Sans article**, l'adjectif prend les terminaisons **fortes** — celles de l'article défini (der→**-er**, das→**-es**, dem→**-em**, den→**-en**) : il porte seul la marque du cas.",
        intro: "Fréquent après une **préposition sans article**, avec les **matières** et au **pluriel indéterminé** : *guter Wein*, *mit kaltem Wasser*, *kalte Getränke*.",
        tableau: { entetes: ["Cas", "Masculin", "Féminin", "Neutre", "Pluriel"], lignes: [["Nom.", "guter", "gute", "gutes", "gute"], ["Acc.", "guten", "gute", "gutes", "gute"], ["Dat.", "gutem", "guter", "gutem", "guten"], ["Gén.", "guten", "guter", "guten", "guter"]] },
        note: "Astuce : la terminaison forte **copie l'article défini** (der→-er, das→-es, dem→-em). Exception : génitif masc./neutre en **-en** (*guten Weines*)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Sans article, l'adjectif prend…", options: ["la marque forte du cas", "toujours -e", "aucune terminaison"], correct: 0, explication: "guter Wein, gutes Bier (déclinaison forte)." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich trinke einen ___ Wein.", options: ["guten", "guter", "gutes", "gute"], correct: 0, explication: "ein + masc. accusatif → guten." },
      { type: "trou", consigne: "Complétez (sans article, nominatif neutre).", texte: "Frisch{0} Brot schmeckt am besten.", accepte: [["es"]], indice: "sans article, neutre nom. → frisches" },
      { type: "association", consigne: "Associez le contexte et la terminaison (nom. masc.).", paires: [{ gauche: "der … Wein", droite: "gute" }, { gauche: "ein … Wein", droite: "guter" }, { gauche: "… Wein (sans article)", droite: "guter" }, { gauche: "den … Wein", droite: "guten" }] },
      { type: "traduction", consigne: "Traduisez.", source: "un bon café (accusatif)", accepte: ["einen guten Kaffee"], aide: "ein + masc. acc. → einen guten" },
      { type: "trou", consigne: "Faible (après article défini, nom. masc.).", texte: "Der {0} Wein kommt aus Italien. (gut)", accepte: [["gute"]], indice: "der + nominatif masculin → -e" },
      { type: "trou", consigne: "Mixte (après ein, acc. masc.).", texte: "Sie hat einen {0} Film gesehen. (spannend)", accepte: [["spannenden"]], indice: "ein + accusatif masculin → -en" },
      { type: "qcm", consigne: "Forte (sans article, datif neutre).", question: "Ich trinke Tee mit ___ Wasser. (kalt)", options: ["kaltem", "kalten", "kaltes", "kalte"], correct: 0, explication: "Sans article, datif neutre → kaltem (comme « dem »)." },
      { type: "trou", consigne: "Forte (formule de politesse, datif pluriel).", texte: "Mit {0} Grüßen beende ich den Brief. (freundlich)", accepte: [["freundlichen"]], indice: "sans article, datif pluriel → -en" }
    ]
  },
  b2g04: {
    id: "b2g04",
    einstieg: {"intro":"Même préposition, deux cas selon le verbe. Observe.","exemples":[{"de":"Ich hänge das Bild an die Wand.","fr":"J'accroche le tableau au mur."},{"de":"Das Bild hängt an der Wand.","fr":"Le tableau est accroché au mur."},{"de":"Ich gehe in die Schule.","fr":"Je vais à l'école."}],"question":"Comment la même préposition choisit-elle son cas ?"},
    merke: ["Prépositions à deux cas : *in, an, auf, über, unter, vor, hinter, neben, zwischen*.","*Wohin?* (direction, mouvement) → *accusatif*.","*Wo?* (position) → *datif*."],
    achtung: [{"erreur":"Ich hänge das Bild an der Wand.","correct":"Ich hänge das Bild an **die** Wand.","explication":"Mouvement (Wohin?) → accusatif."},{"erreur":"Das Bild hängt an die Wand.","correct":"Das Bild hängt an **der** Wand.","explication":"Position (Wo?) → datif."}],
    kontrast: {"titre":"Prépositions à deux cas : allemand vs français","similitudes":["On distingue être / aller quelque part."],"differences":["La même préposition change de *cas* selon direction (acc.) ou position (dat.).","Le verbe (hängen/stellen) signale le sens.","Le français ne marque pas par le cas."]}, titre: "Prépositions de lieu à deux cas", titreDE: "Wechselpräpositionen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
    objectifs: ["Choisir datif ou accusatif", "Distinguer position et direction"],
    grammairePoints: ["Wo? + Dat. / Wohin? + Akk.", "an, auf, in, über…"],
    exemplesPlus: [{"de":"Die Lampe hängt über dem Tisch.","fr":"*Wo?* + Dativ: Position, keine Bewegung."},{"de":"Häng das Bild bitte über das Sofa.","fr":"*Wohin?* + Akkusativ: Bewegung zum Ziel."},{"de":"Der Hund liegt zwischen den beiden Stühlen.","fr":"*Wo?* + Dativ: *zwischen den Stühlen*."},{"de":"Ich stelle die Flasche in den Kühlschrank.","fr":"*Wohin?* + Akkusativ: *in den Kühlschrank*."},{"de":"Wir treffen uns vor dem Theater.","fr":"*Wo?* + Dativ: *vor dem Theater*."}],
    coursDE: [
      "Die **Wechselpräpositionen** sind neun Präpositionen, die mit **Dativ oder Akkusativ** stehen können: *in, an, auf, über, unter, vor, hinter, neben, zwischen*. Auf B2-Niveau geht es darum, sie ohne Nachdenken richtig zu benutzen.",
      "Die Grundregel kennst du: **Wo? → Dativ** (Position), **Wohin? → Akkusativ** (Bewegung zu einem Ziel). « *Das Bild hängt **an der** Wand* » (Wo?, Dativ) aber « *Ich hänge das Bild **an die** Wand* » (Wohin?, Akkusativ).",
      "Wichtig ist das passende **Verb**. Positionsverben verlangen den Dativ: *liegen, stehen, sitzen, hängen, stecken*. Richtungsverben verlangen den Akkusativ: *legen, stellen, setzen*. Viele bilden Paare: *liegen / legen*, *stehen / stellen*, *sitzen / setzen*.",
      "Auch im übertragenen Sinn gelten diese Präpositionen, etwa bei der Zeit oder in festen Ausdrücken. Achte auf den Artikel im Satz: *im* (= in dem, Dativ) oder *ins* (= in das, Akkusativ) verraten dir sofort den Kasus."
    ],
    grammaire: [
      { exemples: [{"de":"Das Auto steht vor dem Haus.","fr":"La voiture est devant la maison."},{"de":"Ich stelle die Vase auf den Tisch.","fr":"Je pose le vase sur la table."}], regle: "Prépositions à deux cas : **datif** pour la position (**Wo?**), **accusatif** pour la direction (**Wohin?**).", attention: "Couples : *liegen/legen, stehen/stellen* — Wo? (Dat.) vs Wohin? (Akk.).", titre: "Position (Dat.) ou direction (Akk.)", intro: "Neuf prépositions prennent le datif (Wo?) ou l'accusatif (Wohin?).",
        tableau: { entetes: ["Question", "Cas", "Exemple"], lignes: [["Wo? (position)", "datif", "Das Buch liegt auf dem Tisch."], ["Wohin? (direction)", "accusatif", "Ich lege das Buch auf den Tisch."], ["Wo?", "datif", "Ich bin in der Stadt."], ["Wohin?", "accusatif", "Ich fahre in die Stadt."]] },
        schemas: [{ legende: "Wohin ? → accusatif (mouvement vers).", mots: [{ m: "Er", r: "sujet", c: "sujet" }, { m: "hängt", r: "verbe (2)", c: "verbe" }, { m: "das Bild", r: "accusatif", c: "objet" }, { m: "an die Wand", r: "direction (acc.)", c: "fin" }] }],
        note: "Couples utiles : liegen/legen, stehen/stellen, sitzen/setzen, hängen — position (Dat.) vs action de placer (Akk.)." },
      { titre: "Les couples de verbes et leurs formes",
        regle: "Les **verbes de position** (forts, + datif) et les **verbes d'action** (faibles, + accusatif) vont par paires. Attention à leurs formes au prétérit / participe.",
        intro: "*Das Buch **lag** auf dem Tisch* (position) vs *Ich **legte** das Buch auf den Tisch* (action).",
        tableau: { entetes: ["Position (Dat.)", "Prétérit / Part.", "Action (Akk.)"], lignes: [["liegen (être couché)", "lag / gelegen", "legen (poser à plat)"], ["stehen (être debout)", "stand / gestanden", "stellen (poser debout)"], ["sitzen (être assis)", "saß / gesessen", "setzen (asseoir)"], ["hängen (pendre)", "hing / gehangen", "hängen (accrocher)"]] },
        note: "Les verbes de position sont souvent **forts** (lag, stand, saß, hing) ; les verbes d'action sont **faibles** (legte, stellte, setzte, hängte)." },
      { titre: "Emploi figuré : le cas est FIXÉ",
        regle: "Dans les expressions **figurées** (verbe/adjectif à préposition), la règle Wo?/Wohin? ne s'applique plus : le **cas est imposé** par l'expression.",
        intro: "*sich freuen **auf** + accusatif*, *teilnehmen **an** + datif* — indépendamment du mouvement.",
        tableau: { entetes: ["Expression", "Cas fixé", "Exemple"], lignes: [["denken an", "accusatif", "Ich denke an dich."], ["sich freuen auf", "accusatif", "Ich freue mich auf den Urlaub."], ["teilnehmen an", "datif", "Ich nehme an dem Kurs teil."], ["leiden unter", "datif", "Er leidet unter dem Stress."]] },
        note: "Ici, pas de Wo?/Wohin? : le cas fait partie de l'expression et se mémorise avec elle." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Pour la DIRECTION (Wohin?), on emploie…", options: ["l'accusatif", "le datif", "le génitif"], correct: 0, explication: "Wohin? → accusatif." },
      { type: "qcm", consigne: "Choisissez (Wo?).", question: "Das Auto steht vor ___ Haus.", options: ["dem", "das", "den", "der"], correct: 0, explication: "position → datif, das Haus → dem." },
      { type: "trou", consigne: "Complétez (Wohin?, accusatif).", texte: "Ich stelle die Vase auf {0} Tisch.", accepte: [["den"]], indice: "direction → accusatif, der Tisch → den" },
      { type: "association", consigne: "Associez le verbe et le cas.", paires: [{ gauche: "liegen", droite: "datif (position)" }, { gauche: "legen", droite: "accusatif (direction)" }, { gauche: "stehen", droite: "datif (position)" }, { gauche: "stellen", droite: "accusatif (direction)" }] },
      { type: "ordre", consigne: "Construisez la phrase (direction).", mots: ["Ich", "gehe", "in", "die", "Stadt"], correct: "Ich gehe in die Stadt", traduction: "Je vais en ville." },
      { type: "qcm", consigne: "Position ou action ?", question: "Prétérit de « liegen » (position) :", options: ["lag", "legte", "liegte", "gelegen"], correct: 0, explication: "liegen (position, fort) → lag." },
      { type: "trou", consigne: "Verbe d'action (accusatif).", texte: "Ich {0} das Buch auf den Tisch. (poser à plat)", accepte: [["lege"]], indice: "action → legen + accusatif" },
      { type: "qcm", consigne: "Emploi figuré (cas fixé).", question: "Ich nehme ___ dem Seminar teil.", options: ["an", "auf", "in", "über"], correct: 0, explication: "teilnehmen an + datif (cas fixé)." }
    ]
  },
  b2g05: {
    id: "b2g05",
    einstieg: {"intro":"Compare le passif de processus et d'état.","exemples":[{"de":"Die Tür wird geöffnet.","fr":"La porte est ouverte (on l'ouvre)."},{"de":"Die Tür ist geöffnet.","fr":"La porte est ouverte (état)."},{"de":"Hier darf nicht geraucht werden.","fr":"Il est interdit de fumer ici."}],"question":"Quelle différence entre *wird geöffnet* et *ist geöffnet* ?"},
    merke: ["Passif-*processus* : *werden* + participe (*wird gebaut*).","Passif-*état* : *sein* + participe (*ist gebaut* = c'est déjà fait).","Passif impersonnel : *Es wird getanzt* / *Hier wird gearbeitet*."],
    achtung: [{"erreur":"Die Tür ist geöffnet. (= on l'ouvre)","correct":"Die Tür **wird** geöffnet.","explication":"Processus en cours = *werden* ; *sein* donnerait l'état."},{"erreur":"Hier wird nicht rauchen.","correct":"Hier darf nicht **geraucht werden**.","explication":"Passif avec modal : participe + *werden* à la fin."}],
    kontrast: {"titre":"Le passif (B2) : allemand vs français","similitudes":["Passif de processus et d'état existent."],"differences":["L'allemand oppose *werden* (processus) et *sein* (état).","Passif impersonnel possible (*es wird getanzt*).","Agent : *von* (acteur) / *durch* (moyen)."]}, titre: "Le passif", titreDE: "Das Passiv", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B2",
    objectifs: ["Former le passif à tous les temps", "Employer le passif avec modal et le passif d'état"],
    grammairePoints: ["werden + participe II", "Passiv mit Modalverb, Zustandspassiv"],
    exemplesPlus: [{"de":"Die Brücke wird zurzeit gebaut.","fr":"Vorgangspassiv im Präsens: die Handlung läuft."},{"de":"Das Problem muss schnell gelöst werden.","fr":"Passiv mit Modalverb: *werden* am Ende."},{"de":"Der Vertrag wurde letzte Woche unterschrieben.","fr":"Passiv im Präteritum: *wurde* + Partizip."},{"de":"Die Tür ist bereits abgeschlossen.","fr":"Zustandspassiv: *sein* + Partizip (Ergebnis)."},{"de":"In dieser Fabrik werden Maschinen hergestellt.","fr":"Passiv ohne Handelnden: wichtig ist die Handlung."}],
    coursDE: [
      "Das **Passiv** ist auf B2-Niveau sehr wichtig, besonders in formellen und sachlichen Texten. Es stellt die **Handlung** in den Mittelpunkt, nicht die handelnde Person. Du bildest es mit **werden + Partizip II**.",
      "Wiederhole die Zeitformen: Präsens « *Das Haus **wird** gebaut* », Präteritum « *Das Haus **wurde** gebaut* », Perfekt « *Das Haus **ist** gebaut **worden*** » (Achtung: *worden*, nicht « geworden »). Den Urheber nennst du mit **von + Dativ**.",
      "Neu auf B2 ist das **Passiv mit Modalverb**: Modalverb + Partizip II + *werden*. Beispiel: « *Das Problem **muss** schnell **gelöst werden*** ». Das Modalverb steht auf Position 2, *werden* im Infinitiv am Ende.",
      "Ebenfalls neu ist das **Zustandspassiv** mit **sein + Partizip II**: Es beschreibt nicht die Handlung, sondern das **Ergebnis**. Vergleiche: « *Die Tür **wird** geöffnet* » (Handlung) und « *Die Tür **ist** geöffnet* » (Zustand). Dieser Unterschied ist typisch B2."
    ],
    grammaire: [
      { exemples: [{"de":"Das Problem muss gelöst werden.","fr":"Le problème doit être résolu."},{"de":"Das Museum ist sonntags geschlossen.","fr":"Le musée est fermé le dimanche."}], regle: "Vorgangspassiv (**werden** + participe = l'action) ; Zustandspassiv (**sein** + participe = le résultat) ; avec modal : *muss … gemacht **werden***.", attention: "Au **Perfekt passif**, *werden → **worden*** (*ist gebaut **worden***), sans ge-.", titre: "Passif de processus, passif d'état, passif modal", intro: "Vorgangspassiv : werden + participe (l'action). Zustandspassiv : sein + participe (le résultat). Avec modal : … werden (à la fin).",
        tableau: { entetes: ["Type", "Forme", "Exemple"], lignes: [["Présent", "wird + participe", "Das Haus wird gebaut."], ["Prétérit", "wurde + participe", "Das Haus wurde gebaut."], ["Parfait", "ist + participe + worden", "Das Haus ist gebaut worden."], ["avec modal", "muss + participe + werden", "Das muss repariert werden."], ["passif d'état", "ist + participe", "Das Haus ist gebaut. (résultat)"]] },
        schemas: [{ legende: "Passif avec modal : … participe + werden (fin).", mots: [{ m: "Der Vertrag", r: "sujet", c: "sujet" }, { m: "muss", r: "modal (2)", c: "verbe" }, { m: "heute", r: "complément", c: "objet" }, { m: "unterschrieben werden", r: "participe + werden (fin)", c: "fin" }] }],
        note: "Au Perfekt passif, le participe de werden devient « worden » (sans ge-). Agent : von + datif." },
      { titre: "Les alternatives au passif (B2)",
        regle: "L'allemand soigné remplace parfois le passif par des **tournures équivalentes** : **sein + zu + infinitif**, **sich lassen + infinitif**, **man** + actif, ou un adjectif en **-bar**.",
        intro: "*Das Problem **ist zu lösen*** = *muss gelöst werden*. *Das **lässt sich** machen* = *kann gemacht werden*.",
        tableau: { entetes: ["Tournure", "= passif", "Exemple"], lignes: [["sein + zu + Inf.", "muss/kann … werden", "Das ist noch zu erledigen."], ["sich lassen + Inf.", "kann … werden", "Das lässt sich reparieren."], ["man + actif", "on …", "Man kann das leicht lösen."], ["adjectif en -bar", "kann … werden", "Das ist machbar / lösbar."]] },
        note: "Ces formes sont fréquentes à l'écrit soutenu et allègent le style." },
      { titre: "Passif impersonnel et l'agent",
        regle: "**Passif impersonnel** : sans sujet réel, avec **es** en tête ou rien. **Agent** : *von + datif* (l'auteur) / *durch + accusatif* (le moyen).",
        intro: "*Es wird getanzt* / *Hier **wird** gearbeitet* (l'activité seule compte).",
        tableau: { entetes: ["Structure", "Rôle", "Exemple"], lignes: [["Es wird + participe", "activité (impersonnel)", "Es wird viel gelacht."], ["Hier wird + participe", "impersonnel sans es", "Hier wird gearbeitet."], ["von + datif", "l'auteur", "von der Regierung beschlossen"], ["durch + accusatif", "le moyen", "durch einen Fehler verursacht"]] },
        note: "Le passif impersonnel décrit une activité générale sans dire qui la fait." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le passif d'état (résultat) se forme avec…", options: ["sein + participe", "werden + participe", "haben + participe"], correct: 0, explication: "Zustandspassiv : Das Geschäft ist geöffnet." },
      { type: "qcm", consigne: "Choisissez (Perfekt passif).", question: "Das Haus ist letztes Jahr gebaut ___.", options: ["worden", "geworden", "gewesen", "werden"], correct: 0, explication: "Perfekt passif → … worden." },
      { type: "trou", consigne: "Complétez (passif modal).", texte: "Der Brief muss heute noch geschrieben {0}.", accepte: [["werden"]], indice: "passif + modal → participe + werden" },
      { type: "association", consigne: "Associez le temps et la forme.", paires: [{ gauche: "présent", droite: "wird gebaut" }, { gauche: "prétérit", droite: "wurde gebaut" }, { gauche: "parfait", droite: "ist gebaut worden" }, { gauche: "état", droite: "ist gebaut" }] },
      { type: "ordre", consigne: "Construisez la phrase au passif.", mots: ["Das", "Problem", "wurde", "gelöst"], correct: "Das Problem wurde gelöst", traduction: "Le problème a été résolu." },
      { type: "qcm", consigne: "Alternative au passif.", question: "« Das lässt sich machen » signifie…", options: ["Das kann gemacht werden", "Das muss gemacht werden", "Das ist schon gemacht"], correct: 0, explication: "sich lassen + infinitif = kann … werden." },
      { type: "trou", consigne: "sein + zu + infinitif.", texte: "Das Formular ist bis Freitag {0} unterschreiben.", accepte: [["zu"]], indice: "sein + zu + infinitif = doit être signé" },
      { type: "qcm", consigne: "von ou durch ?", question: "Die Stadt wurde ___ ein Erdbeben zerstört.", options: ["durch", "von", "mit", "bei"], correct: 0, explication: "moyen / cause → durch + accusatif." }
    ]
  },
  b2g06: {
    id: "b2g06",
    einstieg: {"intro":"Observe comment annoncer une subordonnée après ces verbes.","exemples":[{"de":"Ich verlasse mich auf dich.","fr":"Je compte sur toi."},{"de":"Es hängt davon ab.","fr":"Ça en dépend."},{"de":"Ich freue mich darüber, dass du kommst.","fr":"Je me réjouis que tu viennes."}],"question":"Comment annoncer une subordonnée après un verbe à préposition ?"},
    merke: ["Verbe + préposition fixe (*sich verlassen auf*, *abhängen von*, *sich freuen über*).","Devant *dass*, on annonce par *da(r)+prép* : *Ich freue mich **darüber**, dass…*","Question (chose) : *wo(r)+prép* ; reprise : *da(r)+prép*."],
    achtung: [{"erreur":"Ich freue mich über, dass du kommst.","correct":"Ich freue mich **darüber**, dass du kommst.","explication":"On annonce la subordonnée par *darüber* (da + über)."},{"erreur":"Es hängt von das ab.","correct":"Es hängt **davon** ab.","explication":"Pour une chose : *davon*, pas *von das*."}],
    kontrast: {"titre":"Verbes à préposition (B2) : allemand vs français","similitudes":["« compter sur », « dépendre de » sont fixes."],"differences":["*da(r)-/wo(r)-* annoncent ou reprennent (darüber, wovon).","La préposition diffère du français.","Devant *dass*, le *da(r)-* est souvent obligatoire."]}, titre: "Verbes à cas prépositionnel", titreDE: "Verben mit präpositionalem Kasus", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
    objectifs: ["Mémoriser les verbes à préposition fixe", "Reprendre avec da(r)- et interroger avec wo(r)-"],
    grammairePoints: ["sich bewerben um, bestehen aus", "darauf, worauf"],
    exemplesPlus: [{"de":"Ich bewerbe mich um eine Stelle als Ingenieur.","fr":"*sich bewerben um* + Akkusativ."},{"de":"Das Team besteht aus fünf Personen.","fr":"*bestehen aus* + Dativ."},{"de":"Worauf legst du beim Essen besonderen Wert?","fr":"Frage nach der Sache: *worauf*."},{"de":"Ich verlasse mich völlig darauf, dass du kommst.","fr":"*darauf* kündigt den *dass*-Satz an."},{"de":"Sie beschäftigt sich seit Jahren mit diesem Thema.","fr":"*sich beschäftigen mit* + Dativ."}],
    coursDE: [
      "Viele Verben verlangen eine **feste Präposition** mit einem bestimmten Kasus. Auf B2-Niveau erweiterst du deine Liste deutlich und lernst auch anspruchsvollere Verben für formelle Situationen.",
      "Beispiele mit festem Kasus: *sich bewerben **um*** + Akkusativ (« *Ich bewerbe mich um die Stelle* »), *bestehen **aus*** + Dativ (« *Das Team besteht aus fünf Personen* »), *teilnehmen **an*** + Dativ. Lerne jedes Verb mit Präposition **und** Kasus.",
      "Für Fragen und Verweise auf **Sachen** benutzt du die Pronominaladverbien **wo(r)-** und **da(r)-**: « *Worauf bewirbst du dich?* » – « *Darauf.* ». Bei **Personen** bleibst du bei Präposition + Pronomen: « *Ich denke an **sie*** ».",
      "Diese Verben sind oft mit einem **Nebensatz** oder einer Infinitivkonstruktion verbunden: « *Ich freue mich **darauf**, dich zu sehen* ». Das Wort *darauf* kündigt den Nebensatz an. Mit solchen Strukturen klingt dein Deutsch präzise."
    ],
    grammaire: [
      { exemples: [{"de":"Er bewirbt sich um eine Stelle.","fr":"Il postule pour un emploi."},{"de":"Das Team besteht aus fünf Leuten.","fr":"L'équipe se compose de cinq personnes."}], regle: "Verbes à préposition fixe : *sich bewerben **um***, *bestehen **aus***, *teilnehmen **an***, *hinweisen **auf***.", attention: "Reprise d'une **chose** par *da(r)-* (*darauf*), d'une **personne** par *préposition + wen/wem*.", titre: "Préposition fixe + cas + reprise", intro: "Beaucoup de verbes B2 imposent une préposition. On reprend une chose par da(r)- et on interroge par wo(r)-.",
        tableau: { entetes: ["Verbe", "Préposition + cas", "Exemple"], lignes: [["sich bewerben", "um + Akk.", "Ich bewerbe mich um die Stelle."], ["bestehen", "aus + Dat.", "Das Team besteht aus fünf Personen."], ["teilnehmen", "an + Dat.", "Sie nimmt an dem Kurs teil."], ["sich handeln", "um + Akk.", "Es handelt sich um einen Irrtum."], ["hinweisen", "auf + Akk.", "Ich weise darauf hin, dass …"]] },
        note: "Chose : « Worum bewirbst du dich? – Ich bewerbe mich darum. » Personne : « Um wen …? »" },
      { titre: "Annoncer une subordonnée : da(r)- + dass / zu",
        regle: "Un verbe à préposition annonce souvent la subordonnée par un **adverbe pronominal** (da(r)-) : *da(r)+prép* + *, dass…* (sujets différents) ou *, zu + infinitif* (même sujet).",
        intro: "*Ich freue mich **darauf**, dich zu sehen* (même sujet) · *…**darüber**, dass du kommst* (sujets ≠).",
        tableau: { entetes: ["Verbe + prép.", "Annonce", "Exemple"], lignes: [["sich freuen auf", "darauf …, zu + inf.", "Ich freue mich darauf, zu kommen."], ["warten auf", "darauf …, dass", "Ich warte darauf, dass er kommt."], ["denken an", "daran …, zu + inf.", "Denk daran, ihn anzurufen."], ["hinweisen auf", "darauf …, dass", "Ich weise darauf hin, dass …"]] },
        note: "Même sujet → da(r)- + **zu + infinitif**. Sujets différents → da(r)- + **dass** + subordonnée." },
      { titre: "Verbes à préposition B2 (à enrichir)",
        regle: "Élargis ta liste avec ces verbes fréquents à l'écrit et aux examens. Chaque verbe = préposition + cas fixes.",
        intro: "Attention aux verbes à **deux sens** selon la préposition.",
        tableau: { entetes: ["Verbe", "Prép. + cas", "Sens"], lignes: [["sich bewerben", "um + Akk.", "postuler pour"], ["bestehen", "aus + Dat.", "se composer de"], ["bestehen", "auf + Dat.", "insister sur"], ["zweifeln", "an + Dat.", "douter de"], ["verzichten", "auf + Akk.", "renoncer à"], ["sich beziehen", "auf + Akk.", "se référer à"]] },
        note: "*bestehen **aus*** (se composer de) ≠ *bestehen **auf*** (insister sur) — même verbe, sens opposés." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« sich bewerben » se construit avec…", options: ["um + accusatif", "auf + datif", "an + accusatif"], correct: 0, explication: "sich bewerben um + accusatif." },
      { type: "qcm", consigne: "Choisissez.", question: "Das Team besteht ___ fünf Personen.", options: ["aus", "von", "über", "um"], correct: 0, explication: "bestehen aus + datif." },
      { type: "trou", consigne: "Complétez (an + datif).", texte: "Ich nehme {0} dem Seminar teil.", accepte: [["an"]], indice: "teilnehmen an + datif" },
      { type: "association", consigne: "Associez le verbe et sa préposition.", paires: [{ gauche: "sich bewerben", droite: "um" }, { gauche: "bestehen", droite: "aus" }, { gauche: "teilnehmen", droite: "an" }, { gauche: "hinweisen", droite: "auf" }] },
      { type: "qcm", consigne: "Reprise (chose).", question: "Worauf weist du hin? – Ich weise ___ hin.", options: ["darauf", "daran", "darum", "davon"], correct: 0, explication: "hinweisen auf → darauf." },
      { type: "trou", consigne: "Annonce d'une subordonnée (da(r)-).", texte: "Ich freue mich {0}, dass du kommst.", accepte: [["darüber"]], indice: "sich freuen über → darüber + dass" },
      { type: "qcm", consigne: "aus ou auf ?", question: "Ich bestehe ___ meiner Meinung. (insister)", options: ["auf", "aus", "an", "über"], correct: 0, explication: "bestehen auf + datif = insister ; aus = se composer de." },
      { type: "trou", consigne: "Même sujet → zu + infinitif.", texte: "Ich freue mich darauf, dich {0} sehen.", accepte: [["zu"]], indice: "da(r)- + zu + infinitif (même sujet)" }
    ]
  },
  b2g07: {
    id: "b2g07",
    einstieg: {"intro":"Observe ces noms masculins hors nominatif.","exemples":[{"de":"der Name des Kollegen","fr":"le nom du collègue"},{"de":"Ich helfe dem Praktikanten.","fr":"J'aide le stagiaire."},{"de":"Wir suchen einen Experten.","fr":"Nous cherchons un expert."}],"question":"Quels masculins prennent *-(e)n* hors nominatif ?"},
    merke: ["Masculins faibles : *-(e)n* à tous les cas sauf nominatif singulier.","Souvent en *-e* (Kollege, Junge) ou personnes (Student, Praktikant, Experte).","*Name, Herz* : faibles + *-s* au génitif (des Namens)."],
    achtung: [{"erreur":"Ich helfe dem Praktikant.","correct":"Ich helfe dem **Praktikanten**.","explication":"Nom faible au datif : -en."},{"erreur":"der Name des Kollege","correct":"der Name des **Kollegen**","explication":"Nom faible au génitif : -en."}],
    kontrast: {"titre":"Noms faibles (B2) : allemand vs français","similitudes":["Les noms varient en nombre."],"differences":["*-(e)n* au *singulier* (hors nominatif) - sans équivalent.","Surtout des masculins désignant des personnes.","À mémoriser ; l'oubli sonne fautif."]}, titre: "La n-déclinaison", titreDE: "Die n-Deklination", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B2",
    objectifs: ["Identifier les noms en -n", "Ajouter -(e)n hors du nominatif"],
    grammairePoints: ["der Kollege → den Kollegen", "Herr, Student, Kunde, Mensch"],
    exemplesPlus: [{"de":"Ich habe gestern mit einem Kollegen gesprochen.","fr":"*der Kollege → einem Kollegen* (n-Deklination)."},{"de":"Kennst du diesen Studenten aus dem Seminar?","fr":"*der Student → diesen Studenten*."},{"de":"Wir haben den Kunden ausführlich beraten.","fr":"*der Kunde → den Kunden*."},{"de":"Der Beruf des Architekten ist anspruchsvoll.","fr":"*der Architekt → des Architekten* (Genitiv)."},{"de":"Sie hat einem Touristen den Weg erklärt.","fr":"*der Tourist → einem Touristen* (Dativ)."}],
    coursDE: [
      "Die **n-Deklination** betrifft eine Gruppe von **maskulinen Nomen**, die in fast allen Fällen ein **-n** oder **-en** bekommen – außer im Nominativ Singular. Auf B2 solltest du diese Endung automatisch setzen.",
      "Zur Gruppe gehören vor allem **Personen**: *der Kollege, der Student, der Kunde, der Junge, der Nachbar, der Mensch, der Herr, der Experte, der Kandidat*. Viele enden im Nominativ auf **-e** oder bezeichnen Personen.",
      "Die Endung erscheint im **Akkusativ, Dativ und Genitiv**: « *Ich treffe **den Kollegen*** », « *Ich helfe **dem Kollegen*** », « *das Büro **des Kollegen*** ». Nur im Nominativ heißt es « *der Kollege* ».",
      "Ein häufiger Fehler ist « *Ich kenne den Student* » statt « *Ich kenne **den Studenten*** ». Bei *Herr* gilt im Singular *-n* (*Herrn*) und im Plural *-en* (*Herren*). Lerne die wichtigsten Wörter dieser Gruppe auswendig."
    ],
    grammaire: [
      { regle: "Masculins (souvent animés) prenant **-(e)n** hors du nominatif singulier : *Kollege, Kunde, Student, Nachbar, Mensch, Herr*.", attention: "Indices : noms en **-e**, en *-ist/-ent*, ou d'origine grecque (*Journalist, Tourist*).", exemples: [{"de":"Ich berate den Kunden.","fr":"Je conseille le client."},{"de":"Ich spreche mit dem Nachbarn.","fr":"Je parle avec le voisin."}], titre: "Ces masculins prennent -(e)n partout sauf au nominatif singulier", intro: "Un groupe de masculins (souvent des êtres animés) ajoute -n/-en à l'accusatif, au datif et au génitif.",
        tableau: { entetes: ["Nominatif", "Acc./Dat.", "Sens"], lignes: [["der Kollege", "den/dem Kollegen", "le collègue"], ["der Kunde", "den/dem Kunden", "le client"], ["der Student", "den/dem Studenten", "l'étudiant"], ["der Nachbar", "den/dem Nachbarn", "le voisin"], ["der Mensch", "den/dem Menschen", "l'humain"], ["der Herr", "den/dem Herrn", "monsieur"]] },
        note: "Indices : noms en -e (Kollege), nationalités/professions (Student, Praktikant), origine grecque (Tourist, Journalist)." },
      { titre: "Le modèle complet (der Student)",
        regle: "Un nom de la n-déclinaison prend **-en** à l'accusatif, au datif ET au génitif — seul le **nominatif singulier** reste nu.",
        intro: "Le pluriel suit le même -en.",
        tableau: { entetes: ["Cas", "Singulier", "Pluriel"], lignes: [["Nominatif", "der Student", "die Studenten"], ["Accusatif", "den Studenten", "die Studenten"], ["Datif", "dem Studenten", "den Studenten"], ["Génitif", "des Studenten", "der Studenten"]] },
        note: "Une seule forme nue : le **nominatif singulier** (der Student)." },
      { titre: "Le génitif en -ns et l'adjectif",
        regle: "Quelques-uns (*Name, Wille, Gedanke* + le neutre *Herz*) font **-ns** au génitif : *des Name**ns***. Un **adjectif** devant un n-nom prend aussi **-en** : *den nett**en** Kollegen*.",
        intro: "*der Name → des Name**ns*** · *den **netten** Kollegen* (adjectif + nom : deux -en).",
        tableau: { entetes: ["Nominatif", "Datif", "Génitif"], lignes: [["der Name", "dem Namen", "des Namens"], ["der Gedanke", "dem Gedanken", "des Gedankens"], ["das Herz", "dem Herzen", "des Herzens"], ["+ adjectif", "dem netten Kollegen", "des netten Kollegen"]] },
        note: "Adjectif + n-nom → tous deux en **-en** au datif/accusatif/génitif (den netten Studenten)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "La n-déclinaison concerne surtout…", options: ["des masculins animés", "tous les neutres", "les féminins"], correct: 0, explication: "der Kollege, der Kunde, der Mensch…" },
      { type: "qcm", consigne: "Choisissez.", question: "Ich berate den ___. (Kunde)", options: ["Kunden", "Kunde", "Kundes", "Kunder"], correct: 0, explication: "accusatif → den Kunden." },
      { type: "trou", consigne: "Complétez (datif).", texte: "Ich spreche mit dem {0}. (Nachbar)", accepte: [["Nachbarn"]], indice: "datif → den/dem …n" },
      { type: "association", consigne: "Associez nominatif et accusatif.", paires: [{ gauche: "der Kollege", droite: "den Kollegen" }, { gauche: "der Herr", droite: "den Herrn" }, { gauche: "der Student", droite: "den Studenten" }, { gauche: "der Mensch", droite: "den Menschen" }] },
      { type: "ordre", consigne: "Construisez la phrase.", mots: ["Ich", "frage", "den", "Kollegen"], correct: "Ich frage den Kollegen", traduction: "Je demande au collègue." },
      { type: "trou", consigne: "Génitif spécial en -ns.", texte: "Der Anfang {0} Namens ist schwer zu lesen.", accepte: [["des"]], indice: "der Name → génitif des Namens" },
      { type: "qcm", consigne: "Adjectif + n-nom (datif).", question: "Ich habe mit ___ gesprochen. (der nette Kollege)", options: ["dem netten Kollegen", "dem nette Kollege", "den netten Kollegen", "dem netten Kollege"], correct: 0, explication: "datif : dem netten Kollegen (adjectif -en + nom -en)." },
      { type: "trou", consigne: "Accusatif (n-déclinaison).", texte: "Wir suchen einen erfahrenen {0}. (Experte)", accepte: [["Experten"]], indice: "der Experte → einen Experten (acc.)" }
    ]
  },
  b2g08: {
    id: "b2g08",
    einstieg: {"intro":"Observe les façons soutenues d'exprimer la cause.","exemples":[{"de":"Wegen des Regens bleibe ich zu Hause.","fr":"À cause de la pluie, je reste."},{"de":"Aufgrund der Krise sinken die Preise.","fr":"En raison de la crise, les prix baissent."},{"de":"Es regnet, folglich bleibe ich.","fr":"Il pleut, par conséquent je reste."}],"question":"Comment exprimer la cause de façon nominale (soutenue) ?"},
    merke: ["Cause nominale (+ génitif) : *wegen*, *aufgrund*, *infolge*.","Cause (subordonnée) : *weil/da* → verbe à la fin.","Conséquence (connecteur) : *folglich, daher, somit* → inversion."],
    achtung: [{"erreur":"Wegen dem Regen (soutenu)","correct":"Wegen **des** Regens","explication":"*wegen* + génitif à l'écrit soutenu."},{"erreur":"Es regnet, folglich ich bleibe.","correct":"…, folglich **bleibe ich**.","explication":"*folglich* (position 1) → inversion."}],
    kontrast: {"titre":"Cause/conséquence (B2) : allemand vs français","similitudes":["à cause de/wegen, par conséquent/folglich."],"differences":["Cause nominale + *génitif* (wegen des…) au registre soutenu.","Subordination (weil) → verbe en fin ; connecteur → inversion.","Plusieurs registres (oral *weil* vs écrit *aufgrund*)."]}, titre: "Causes et conséquences", titreDE: "Kausal- und Konsekutivsätze", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B2",
    objectifs: ["Exprimer la cause (weil, da, denn)", "Exprimer la conséquence (so … dass, deshalb)"],
    grammairePoints: ["weil, denn, deshalb", "so … dass, solch … dass"],
    exemplesPlus: [{"de":"Ich konnte nicht schlafen, weil der Lärm zu laut war.","fr":"*weil*: der Grund, Verb am Ende."},{"de":"Es war so kalt, dass der See zufror.","fr":"*so … dass*: die Folge."},{"de":"Sie hatte solchen Hunger, dass sie alles aß.","fr":"*solch … dass*: starke Ursache und Folge."},{"de":"Der Zug fiel aus, deshalb kam ich zu spät.","fr":"*deshalb*: die Folge im Hauptsatz."},{"de":"Wir gehen nach Hause, denn es wird schon dunkel.","fr":"*denn*: der Grund, normale Wortstellung."}],
    coursDE: [
      "Auf B2-Niveau drückst du **Gründe** (Kausalsätze) und **Folgen** (Konsekutivsätze) differenziert aus und variierst deine Verbindungswörter, um nicht immer nur *weil* zu benutzen.",
      "Für den **Grund** hast du mehrere Mittel: **weil** und **da** (Verb am Ende), **denn** (Verb auf Position 2) und das Adverb **deshalb/deswegen**. *da* benutzt man oft, wenn der Grund schon bekannt ist: « *Da es regnet, bleiben wir zu Hause* ».",
      "Für die **Folge** benutzt du **so … dass** und **solch- … dass**: « *Er war **so** müde, **dass** er sofort einschlief* », « *Es war **solch** ein schöner Tag, **dass** wir spazieren gingen* ».",
      "Auch **deshalb, deswegen, daher, folglich** drücken eine Folge aus und stehen auf Position 1, mit dem Verb direkt danach: « *Es regnete, **deshalb** **blieben** wir zu Hause* ». Mit dieser Vielfalt klingt dein Argumentieren reif und logisch."
    ],
    grammaire: [
      { exemples: [{"de":"Es war so spät, dass alle gingen.","fr":"Il était si tard que tout le monde est parti."},{"de":"Er kam nicht, denn er war krank.","fr":"Il n'est pas venu, car il était malade."}], regle: "Cause : *weil/da* (verbe fin), *denn* (2ᵉ). Conséquence : *deshalb* (2ᵉ), **so + adjectif + dass** (verbe fin).", attention: "*so … dass* insiste sur le **degré** : *Es war **so** kalt, **dass** wir blieben*.", titre: "Dire pourquoi et avec quelle conséquence", intro: "Cause : weil/da (verbe fin), denn (verbe 2e). Conséquence : deshalb (verbe 2e), so + adjectif + dass (verbe fin).",
        tableau: { entetes: ["Mot", "Rôle / position du verbe", "Exemple"], lignes: [["weil", "cause — verbe FIN", "Er kam nicht, weil er krank war."], ["denn", "cause — verbe 2e", "Er kam nicht, denn er war krank."], ["deshalb", "conséquence — verbe 2e", "Er war krank, deshalb kam er nicht."], ["so … dass", "conséquence — verbe FIN", "Es war so kalt, dass wir blieben."], ["solch … dass", "conséquence — verbe FIN", "Es war solch ein Lärm, dass …"]] },
        schemas: [{ legende: "so … dass : conséquence, verbe à la FIN.", mots: [{ m: "Es war so kalt,", r: "intensité", c: "objet" }, { m: "dass", r: "conséquence", c: "conj" }, { m: "wir zu Hause", r: "sujet + complément", c: "sujet" }, { m: "blieben", r: "verbe (fin)", c: "fin" }] }],
        note: "« so + adjectif + dass » insiste sur le degré : « so müde, dass … ». weil/da/so…dass → verbe à la fin ; denn/deshalb → verbe 2e." },
      { titre: "La cause nominale (registre soutenu)",
        regle: "À l'écrit soutenu, la cause s'exprime par **préposition + nom** (au lieu d'une subordonnée) : **wegen, aufgrund, infolge** (+ génitif), **dank** (+ génitif/datif).",
        intro: "*Wegen des Regens…* = *Weil es regnet…*. Plus court, plus formel.",
        tableau: { entetes: ["Préposition", "Sens", "Exemple"], lignes: [["wegen + Gén.", "à cause de", "wegen des Staus"], ["aufgrund + Gén.", "en raison de", "aufgrund der Krise"], ["infolge + Gén.", "par suite de", "infolge des Unfalls"], ["dank + Gén./Dat.", "grâce à", "dank deiner Hilfe"]] },
        note: "Ces prépositions + nom remplacent une subordonnée en *weil* (registre écrit)." },
      { titre: "Connecteurs de conséquence soutenus",
        regle: "Au-delà de *deshalb*, l'écrit emploie **folglich, somit, daher, infolgedessen** (= par conséquent). Tous en position 1 → **inversion**.",
        intro: "*Der Zug fiel aus, **folglich** kam ich zu spät.*",
        tableau: { entetes: ["Connecteur", "Sens", "Registre"], lignes: [["deshalb / deswegen", "c'est pourquoi", "courant"], ["daher / darum", "de ce fait", "courant / écrit"], ["folglich / somit", "par conséquent", "soutenu"], ["infolgedessen", "par suite de quoi", "soutenu"]] },
        note: "Tous entraînent l'inversion (verbe en 2e) : « …, somit **haben** wir … »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Avec « so … dass », le verbe de la conséquence va…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "dass = subordination → verbe à la fin." },
      { type: "qcm", consigne: "Cause ou conséquence ?", question: "Er war krank, ___ blieb er zu Hause.", options: ["deshalb", "weil", "denn nicht", "dass"], correct: 0, explication: "conséquence + verbe 2e → deshalb." },
      { type: "trou", consigne: "Complétez (so … dass, verbe à la fin).", texte: "Es war so spät, dass niemand mehr da {0}. (sein)", accepte: [["war"]], indice: "dass → verbe à la fin (prétérit)" },
      { type: "association", consigne: "Associez le mot et son rôle.", paires: [{ gauche: "weil", droite: "cause (verbe fin)" }, { gauche: "denn", droite: "cause (verbe 2e)" }, { gauche: "deshalb", droite: "conséquence (verbe 2e)" }, { gauche: "so … dass", droite: "conséquence (verbe fin)" }] },
      { type: "ordre", consigne: "Construisez la subordonnée de cause.", mots: ["weil", "er", "krank", "war"], correct: "weil er krank war", traduction: "parce qu'il était malade" },
      { type: "trou", consigne: "Cause nominale (+ génitif).", texte: "{0} des schlechten Wetters fahren wir nicht.", accepte: [["Wegen"]], indice: "cause nominale soutenue → wegen + génitif" },
      { type: "qcm", consigne: "Cause soutenue.", question: "___ der Krise steigen die Preise. (en raison de)", options: ["Aufgrund", "Weil", "Denn", "Obwohl"], correct: 0, explication: "aufgrund + génitif = en raison de (nominal)." },
      { type: "qcm", consigne: "Conséquence soutenue.", question: "Der Zug fiel aus, ___ kam ich zu spät.", options: ["folglich", "weil", "obwohl", "damit"], correct: 0, explication: "conséquence soutenue → folglich (+ inversion)." }
    ]
  }
});
