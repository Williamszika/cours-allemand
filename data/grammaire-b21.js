/* =====================================================================
   grammaire-b21.js — 8 LEÇONS DE GRAMMAIRE du module B2.1
   (window.GRAMMAIRE_B2). Suit les 8 points de grammaire B2.1 du
   programme « Erkundungen ». Approfondissement niveau B2.
   ===================================================================== */
window.GRAMMAIRE_B2 = Object.assign(window.GRAMMAIRE_B2 || {}, {
  b2g01: {
    id: "b2g01", titre: "Les verbes modaux", titreDE: "Die Modalverben", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
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
        note: "Degrés de certitude : müssen (quasi sûr) > dürfte (probable) > könnte/kann (possible). « sollen » subjectif = rumeur ; « wollen » subjectif = prétention." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Er muss krank sein » exprime ici…", options: ["une supposition quasi certaine", "une obligation", "une permission"], correct: 0, explication: "Sens subjectif : j'en suis presque sûr." },
      { type: "qcm", consigne: "Choisissez (rumeur).", question: "Er ___ sehr reich sein, sagt man.", options: ["soll", "muss", "will", "darf"], correct: 0, explication: "sollen subjectif = on dit que." },
      { type: "trou", consigne: "Complétez (probabilité).", texte: "Sie {0} jetzt im Büro sein, sie arbeitet ja immer bis sechs.", accepte: [["dürfte"]], indice: "supposition probable → dürfte" },
      { type: "association", consigne: "Associez le modal et son sens subjectif.", paires: [{ gauche: "müssen", droite: "quasi certain" }, { gauche: "dürfte", droite: "probable" }, { gauche: "können", droite: "possible" }, { gauche: "wollen", droite: "prétention" }] },
      { type: "qcm", consigne: "Choisissez.", question: "« Er will alles gewusst haben » signifie…", options: ["Il prétend avoir tout su", "Il veut tout savoir", "Il doit tout savoir"], correct: 0, explication: "wollen subjectif = prétendre." }
    ]
  },
  b2g02: {
    id: "b2g02", titre: "Les temps du passé", titreDE: "Perfekt, Präteritum, Plusquamperfekt", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
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
    id: "b2g03", titre: "La déclinaison des adjectifs", titreDE: "Die Adjektivdeklination", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B2",
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
        note: "Sans article, l'adjectif « porte » la marque du cas (déclinaison forte). Après un article défini, c'est -e ou -en (déclinaison faible)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Sans article, l'adjectif prend…", options: ["la marque forte du cas", "toujours -e", "aucune terminaison"], correct: 0, explication: "guter Wein, gutes Bier (déclinaison forte)." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich trinke einen ___ Wein.", options: ["guten", "guter", "gutes", "gute"], correct: 0, explication: "ein + masc. accusatif → guten." },
      { type: "trou", consigne: "Complétez (sans article, nominatif neutre).", texte: "Frisch{0} Brot schmeckt am besten.", accepte: [["es"]], indice: "sans article, neutre nom. → frisches" },
      { type: "association", consigne: "Associez le contexte et la terminaison (nom. masc.).", paires: [{ gauche: "der … Wein", droite: "gute" }, { gauche: "ein … Wein", droite: "guter" }, { gauche: "… Wein (sans article)", droite: "guter" }, { gauche: "den … Wein", droite: "guten" }] },
      { type: "traduction", consigne: "Traduisez.", source: "un bon café (accusatif)", accepte: ["einen guten Kaffee"], aide: "ein + masc. acc. → einen guten" }
    ]
  },
  b2g04: {
    id: "b2g04", titre: "Prépositions de lieu à deux cas", titreDE: "Wechselpräpositionen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
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
        note: "Couples utiles : liegen/legen, stehen/stellen, sitzen/setzen, hängen — position (Dat.) vs action de placer (Akk.)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Pour la DIRECTION (Wohin?), on emploie…", options: ["l'accusatif", "le datif", "le génitif"], correct: 0, explication: "Wohin? → accusatif." },
      { type: "qcm", consigne: "Choisissez (Wo?).", question: "Das Auto steht vor ___ Haus.", options: ["dem", "das", "den", "der"], correct: 0, explication: "position → datif, das Haus → dem." },
      { type: "trou", consigne: "Complétez (Wohin?, accusatif).", texte: "Ich stelle die Vase auf {0} Tisch.", accepte: [["den"]], indice: "direction → accusatif, der Tisch → den" },
      { type: "association", consigne: "Associez le verbe et le cas.", paires: [{ gauche: "liegen", droite: "datif (position)" }, { gauche: "legen", droite: "accusatif (direction)" }, { gauche: "stehen", droite: "datif (position)" }, { gauche: "stellen", droite: "accusatif (direction)" }] },
      { type: "ordre", consigne: "Construisez la phrase (direction).", mots: ["Ich", "gehe", "in", "die", "Stadt"], correct: "Ich gehe in die Stadt", traduction: "Je vais en ville." }
    ]
  },
  b2g05: {
    id: "b2g05", titre: "Le passif", titreDE: "Das Passiv", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B2",
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
        note: "Au Perfekt passif, le participe de werden devient « worden » (sans ge-). Agent : von + datif." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le passif d'état (résultat) se forme avec…", options: ["sein + participe", "werden + participe", "haben + participe"], correct: 0, explication: "Zustandspassiv : Das Geschäft ist geöffnet." },
      { type: "qcm", consigne: "Choisissez (Perfekt passif).", question: "Das Haus ist letztes Jahr gebaut ___.", options: ["worden", "geworden", "gewesen", "werden"], correct: 0, explication: "Perfekt passif → … worden." },
      { type: "trou", consigne: "Complétez (passif modal).", texte: "Der Brief muss heute noch geschrieben {0}.", accepte: [["werden"]], indice: "passif + modal → participe + werden" },
      { type: "association", consigne: "Associez le temps et la forme.", paires: [{ gauche: "présent", droite: "wird gebaut" }, { gauche: "prétérit", droite: "wurde gebaut" }, { gauche: "parfait", droite: "ist gebaut worden" }, { gauche: "état", droite: "ist gebaut" }] },
      { type: "ordre", consigne: "Construisez la phrase au passif.", mots: ["Das", "Problem", "wurde", "gelöst"], correct: "Das Problem wurde gelöst", traduction: "Le problème a été résolu." }
    ]
  },
  b2g06: {
    id: "b2g06", titre: "Verbes à cas prépositionnel", titreDE: "Verben mit präpositionalem Kasus", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B2",
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
        note: "Chose : « Worum bewirbst du dich? – Ich bewerbe mich darum. » Personne : « Um wen …? »" }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« sich bewerben » se construit avec…", options: ["um + accusatif", "auf + datif", "an + accusatif"], correct: 0, explication: "sich bewerben um + accusatif." },
      { type: "qcm", consigne: "Choisissez.", question: "Das Team besteht ___ fünf Personen.", options: ["aus", "von", "über", "um"], correct: 0, explication: "bestehen aus + datif." },
      { type: "trou", consigne: "Complétez (an + datif).", texte: "Ich nehme {0} dem Seminar teil.", accepte: [["an"]], indice: "teilnehmen an + datif" },
      { type: "association", consigne: "Associez le verbe et sa préposition.", paires: [{ gauche: "sich bewerben", droite: "um" }, { gauche: "bestehen", droite: "aus" }, { gauche: "teilnehmen", droite: "an" }, { gauche: "hinweisen", droite: "auf" }] },
      { type: "qcm", consigne: "Reprise (chose).", question: "Worauf weist du hin? – Ich weise ___ hin.", options: ["darauf", "daran", "darum", "davon"], correct: 0, explication: "hinweisen auf → darauf." }
    ]
  },
  b2g07: {
    id: "b2g07", titre: "La n-déclinaison", titreDE: "Die n-Deklination", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B2",
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
        note: "Indices : noms en -e (Kollege), nationalités/professions (Student, Praktikant), origine grecque (Tourist, Journalist)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "La n-déclinaison concerne surtout…", options: ["des masculins animés", "tous les neutres", "les féminins"], correct: 0, explication: "der Kollege, der Kunde, der Mensch…" },
      { type: "qcm", consigne: "Choisissez.", question: "Ich berate den ___. (Kunde)", options: ["Kunden", "Kunde", "Kundes", "Kunder"], correct: 0, explication: "accusatif → den Kunden." },
      { type: "trou", consigne: "Complétez (datif).", texte: "Ich spreche mit dem {0}. (Nachbar)", accepte: [["Nachbarn"]], indice: "datif → den/dem …n" },
      { type: "association", consigne: "Associez nominatif et accusatif.", paires: [{ gauche: "der Kollege", droite: "den Kollegen" }, { gauche: "der Herr", droite: "den Herrn" }, { gauche: "der Student", droite: "den Studenten" }, { gauche: "der Mensch", droite: "den Menschen" }] },
      { type: "ordre", consigne: "Construisez la phrase.", mots: ["Ich", "frage", "den", "Kollegen"], correct: "Ich frage den Kollegen", traduction: "Je demande au collègue." }
    ]
  },
  b2g08: {
    id: "b2g08", titre: "Causes et conséquences", titreDE: "Kausal- und Konsekutivsätze", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B2",
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
        note: "« so + adjectif + dass » insiste sur le degré : « so müde, dass … ». weil/da/so…dass → verbe à la fin ; denn/deshalb → verbe 2e." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Avec « so … dass », le verbe de la conséquence va…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "dass = subordination → verbe à la fin." },
      { type: "qcm", consigne: "Cause ou conséquence ?", question: "Er war krank, ___ blieb er zu Hause.", options: ["deshalb", "weil", "denn nicht", "dass"], correct: 0, explication: "conséquence + verbe 2e → deshalb." },
      { type: "trou", consigne: "Complétez (so … dass, verbe à la fin).", texte: "Es war so spät, dass niemand mehr da {0}. (sein)", accepte: [["war"]], indice: "dass → verbe à la fin (prétérit)" },
      { type: "association", consigne: "Associez le mot et son rôle.", paires: [{ gauche: "weil", droite: "cause (verbe fin)" }, { gauche: "denn", droite: "cause (verbe 2e)" }, { gauche: "deshalb", droite: "conséquence (verbe 2e)" }, { gauche: "so … dass", droite: "conséquence (verbe fin)" }] },
      { type: "ordre", consigne: "Construisez la subordonnée de cause.", mots: ["weil", "er", "krank", "war"], correct: "weil er krank war", traduction: "parce qu'il était malade" }
    ]
  }
});
