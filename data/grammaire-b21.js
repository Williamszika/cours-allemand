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
    grammaire: [
      { titre: "Sens objectif et sens subjectif", intro: "Au B2, les modaux servent aussi à exprimer une SUPPOSITION (sens subjectif), pas seulement l'obligation ou la capacité.",
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
    grammaire: [
      { titre: "Trois temps, trois usages", intro: "Perfekt = oral et lettres ; Präteritum = récit écrit et presse ; Plusquamperfekt = antériorité.",
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
    grammaire: [
      { titre: "Trois systèmes selon le déterminant", intro: "L'adjectif épithète prend une terminaison selon ce qui le précède : article défini, indéfini, ou rien.",
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
    grammaire: [
      { titre: "Position (Dat.) ou direction (Akk.)", intro: "Neuf prépositions prennent le datif (Wo?) ou l'accusatif (Wohin?).",
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
    grammaire: [
      { titre: "Passif de processus, passif d'état, passif modal", intro: "Vorgangspassiv : werden + participe (l'action). Zustandspassiv : sein + participe (le résultat). Avec modal : … werden (à la fin).",
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
    grammaire: [
      { titre: "Préposition fixe + cas + reprise", intro: "Beaucoup de verbes B2 imposent une préposition. On reprend une chose par da(r)- et on interroge par wo(r)-.",
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
    grammaire: [
      { titre: "Ces masculins prennent -(e)n partout sauf au nominatif singulier", intro: "Un groupe de masculins (souvent des êtres animés) ajoute -n/-en à l'accusatif, au datif et au génitif.",
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
    grammaire: [
      { titre: "Dire pourquoi et avec quelle conséquence", intro: "Cause : weil/da (verbe fin), denn (verbe 2e). Conséquence : deshalb (verbe 2e), so + adjectif + dass (verbe fin).",
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
