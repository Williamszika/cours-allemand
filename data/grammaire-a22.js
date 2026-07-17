/* =====================================================================
   grammaire-a22.js — 8 LEÇONS DE GRAMMAIRE du module A2.2
   Ajoutées à window.GRAMMAIRE_A2.
   ===================================================================== */
window.GRAMMAIRE_A2 = Object.assign(window.GRAMMAIRE_A2 || {}, {
  a2g10: {
    id: "a2g10",
    einstieg: {"intro":"Même préposition, deux cas. Observe pourquoi.","exemples":[{"de":"Das Buch liegt auf dem Tisch.","fr":"Le livre est sur la table."},{"de":"Ich lege das Buch auf den Tisch.","fr":"Je pose le livre sur la table."},{"de":"Geh nach links!","fr":"Va à gauche !"}],"question":"Pourquoi *dem Tisch* puis *den Tisch* avec la même préposition ?"},
    merke: ["Prépositions mixtes (*in, auf, an, über*…) : *Wo?* → datif, *Wohin?* → accusatif.","Verbe de position (*liegen, stehen*) → datif ; de déplacement (*legen, stellen*) → accusatif.","*links/rechts/geradeaus* pour indiquer une direction."],
    achtung: [{"erreur":"Ich lege das Buch auf dem Tisch.","correct":"Ich lege das Buch auf **den** Tisch.","explication":"Mouvement (Wohin?) → accusatif."},{"erreur":"Das Buch liegt auf den Tisch.","correct":"Das Buch liegt auf **dem** Tisch.","explication":"Position (Wo?) → datif."}],
    kontrast: {"titre":"Lieu et direction : allemand vs français","similitudes":["On distingue être quelque part / aller quelque part."],"differences":["La même préposition change de *cas* selon Wo? (datif) ou Wohin? (accusatif).","Paires position/déplacement (liegen/legen, stehen/stellen).","Le français ne marque pas cette différence par le cas."]}, titre: "Les indicateurs de lieu", titreDE: "Ortsangaben", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Distinguer Wo / Wohin / Woher", "Indiquer une direction"],
    grammairePoints: ["Wo? Wohin? Woher?", "hier, dort, links…"],
    exemplesPlus: [{"de":"Wo wohnst du? — In Köln.","fr":"Où habites-tu ? — À Cologne."},{"de":"Wohin gehst du? — Nach Hause.","fr":"Où vas-tu ? — À la maison."},{"de":"Woher kommst du? — Aus Spanien.","fr":"D'où viens-tu ? — D'Espagne."},{"de":"Das Kino ist gleich um die Ecke.","fr":"Le cinéma est juste au coin."},{"de":"Wir treffen uns vor dem Bahnhof.","fr":"On se retrouve devant la gare."}],
    cours: [
      "Décrire l'espace en allemand, c'est distinguer trois questions : **Wo?** (où, position), **Wohin?** (vers où, destination) et **Woher?** (d'où, provenance). À chacune correspondent des prépositions et des cas différents : c'est cette logique à trois directions qu'on consolide au niveau A2.",
      "**Wo?** (position, sans mouvement) → datif avec les prépositions mixtes : « *Ich bin **in der** Stadt* », « *Das Buch liegt **auf dem** Tisch* ». **Wohin?** (destination, mouvement) → accusatif avec ces mêmes prépositions : « *Ich gehe **in die** Stadt* ». Le même mot change de cas selon qu'il y a déplacement ou non.",
      "Pour les **destinations** : **nach** pour les villes et pays sans article (*nach Berlin, nach Deutschland*) et l'expression figée *nach Hause* ; **zu** pour aller vers une personne ou un lieu précis (*zum Arzt, zur Schule*) ; **in** + accusatif pour entrer dans un lieu (*in die Stadt, ins Kino*).",
      "Pour la **provenance** (Woher?) : **aus** (venir de — pays, ville, bâtiment : *Ich komme **aus** Frankreich*) et **von** (venir de — une personne, un point de départ : *Ich komme **vom** Arzt*). Les deux sont suivis du datif.",
      "Complète avec les **adverbes de lieu** : *hier* (ici), *dort/da* (là), *links* (à gauche), *rechts* (à droite), *oben* (en haut), *unten* (en bas), *vorne, hinten, draußen* (dehors), *drinnen* (dedans), *überall* (partout). Avec ces outils, tu situes et tu orientes sans hésiter."
    ],
    grammaire: [
      { regle: "**Wo?** (position) → datif (*in der Stadt*). **Wohin?** (direction) → *nach* (villes/pays), *zu* (personnes/lieux), *in* + accusatif (*in die Stadt*).", attention: "*nach Hause* = rentrer (mouvement) ; *zu Hause* = être à la maison (position). Pays avec article → *in die Schweiz*.", exemples: [{"de":"Ich gehe in die Stadt.","fr":"Je vais en ville."},{"de":"Er ist zu Hause.","fr":"Il est à la maison."}], titre: "Où ? / Où aller ? / D'où ?", intro: "Trois questions, trois logiques.",
        tableau: { entetes: ["Question", "Sens", "Réponse"], lignes: [["Wo?", "où (position)", "in der Stadt (datif)"], ["Wohin?", "où (direction)", "in die Stadt (acc.), nach Berlin"], ["Woher?", "d'où", "aus Spanien, von der Arbeit"]] },
        schemas: [
          { legende: "Wohin? (direction) → accusatif.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "gehe", r: "verbe (2)", c: "verbe" }, { m: "in die Stadt", r: "direction (acc.)", c: "fin" }] },
          { legende: "Wo? (position) → datif.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "bin", r: "verbe (2)", c: "verbe" }, { m: "in der Stadt", r: "position (datif)", c: "objet" }] }
        ],
        note: "Direction = accusatif (Wohin?) ; position = datif (Wo?). hier/da/dort, links, rechts, geradeaus, oben, unten." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Wohin? » demande…", options: ["la direction", "la position", "l'origine"], correct: 0, explication: "Wohin = où l'on va (direction)." },
      { type: "qcm", consigne: "Wo? → datif.", question: "Das Buch ist ___ Tisch.", options: ["auf dem", "auf den", "auf der", "an die"], correct: 0, explication: "position → datif : auf dem Tisch." },
      { type: "trou", consigne: "Complétez (in die / in der).", texte: "Ich gehe {0} Schule und ich bin {1} Schule.", accepte: [["in die"], ["in der"]], indice: "Wohin (acc.) / Wo (datif)" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "Wo?", droite: "position" }, { gauche: "Wohin?", droite: "direction" }, { gauche: "Woher?", droite: "origine" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je vais en ville.", accepte: ["Ich gehe in die Stadt"], aide: "Wohin → accusatif" }
    ]
  },
  a2g11: {
    id: "a2g11",
    einstieg: {"intro":"Comment marque-t-on « de qui » (la possession) ?","exemples":[{"de":"das Auto meines Vaters","fr":"la voiture de mon père"},{"de":"die Farbe des Hauses","fr":"la couleur de la maison"},{"de":"Annas Handy","fr":"le portable d'Anna"}],"question":"Quelle forme pour la possession à l'écrit et à l'oral ?"},
    merke: ["Génitif : *des* (masc./neutre, + nom en -s/-es), *der* (fém./pluriel).","À l'oral, on remplace souvent par *von* + datif (*von Anna*).","Les noms propres prennent un *-s* (*Annas Auto*)."],
    achtung: [{"erreur":"die Farbe des Haus","correct":"die Farbe des **Hauses**","explication":"Génitif masc./neutre : le nom prend *-s/-es*."},{"erreur":"das Auto von mein Vater","correct":"das Auto von **meinem** Vater","explication":"*von* régit le datif : meinem Vater."}],
    kontrast: {"titre":"La possession : allemand vs français","similitudes":["« la voiture de mon père » se dit dans les deux."],"differences":["L'allemand a un *cas* dédié (génitif : des/der).","À l'oral, *von* + datif remplace le génitif.","Le nom masc./neutre au génitif gagne un *-s*."]}, titre: "La possession (génitif)", titreDE: "Der Genitiv / Besitz", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Exprimer la possession", "Reconnaître le génitif et « von + datif »"],
    grammairePoints: ["Genitiv (des/der)", "von + datif"],
    exemplesPlus: [{"de":"Das ist das Haus meiner Eltern.","fr":"C'est la maison de mes parents."},{"de":"Wegen des Wetters bleiben wir zu Hause.","fr":"À cause du temps, nous restons à la maison."},{"de":"Annas Auto ist neu.","fr":"La voiture d'Anna est neuve."},{"de":"Trotz der Kälte gehen wir spazieren.","fr":"Malgré le froid, nous nous promenons."},{"de":"Während des Films habe ich geschlafen.","fr":"Pendant le film, j'ai dormi."}],
    cours: [
      "Le **génitif** (*Genitiv*) exprime l'**appartenance** : il répond à la question **Wessen?** (de qui ?) et correspond souvent au « de » français (« la voiture **de** mon père »). C'est le 4ᵉ cas de l'allemand, plus rare à l'oral mais indispensable à l'écrit soigné.",
      "Ses articles : masculin et neutre **des**, féminin et pluriel **der**. Particularité importante : au masculin et au neutre, le **nom prend en plus un -s (ou -es)** : *das Auto **des** Mann**es***, *das Buch **des** Kind**es***. Au féminin, rien ne s'ajoute au nom : *das Auto **der** Frau*.",
      "L'ordre est inversé par rapport au français : **possédé d'abord, possesseur ensuite** au génitif : « *das Haus **meiner Eltern*** ». Avec un **prénom**, c'est plus simple : on ajoute un -s directement, sans apostrophe : « ***Annas** Auto* », « ***Peters** Buch* ».",
      "À l'oral, les Allemands remplacent très souvent le génitif par **von + datif** : au lieu de « *das Auto meines Vaters* », on entend « *das Auto **von** meinem Vater* ». Les deux sont corrects ; *von + datif* est juste plus familier. Utilise-le sans complexe quand tu parles.",
      "Enfin, quelques **prépositions** se construisent avec le génitif : *während* (pendant), *wegen* (à cause de), *trotz* (malgré), *(an)statt* (au lieu de). « *Während **des** Unterricht**s*** ». Au niveau A2, il suffit de les reconnaître et de connaître les plus fréquentes."
    ],
    grammaire: [
      { exemples: [{"de":"Das ist das Haus meiner Eltern.","fr":"C'est la maison de mes parents."},{"de":"Wegen des Regens bleiben wir zu Hause.","fr":"À cause de la pluie, nous restons à la maison."}], regle: "Le **génitif** exprime l'**appartenance** : masc./neutre **des** + nom **-(e)s** ; fém./pluriel **der**.", attention: "À l'oral, on remplace souvent le génitif par **von + datif** : *das Auto **von** meinem Vater*.", titre: "Dire « de qui » / « de quoi »", intro: "À l'écrit : génitif. À l'oral : souvent « von + datif ».",
        tableau: { entetes: ["Forme", "Exemple", "Sens"], lignes: [["Genitiv (m/n)", "das Auto des Mannes", "la voiture de l'homme"], ["Genitiv (f/pl)", "die Tasche der Frau", "le sac de la femme"], ["von + datif (oral)", "das Auto von meinem Bruder", "la voiture de mon frère"]] },
        note: "Au génitif, les noms masculins/neutres prennent souvent un -s (des Mannes, des Kindes)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "À l'oral, on remplace souvent le génitif par…", options: ["von + datif", "für + accusatif", "mit + datif"], correct: 0, explication: "von + datif = génitif parlé." },
      { type: "qcm", consigne: "Génitif masculin.", question: "Das ist das Auto ___ Mannes.", options: ["des", "der", "dem", "den"], correct: 0, explication: "génitif m./n. → des (+ -s au nom)." },
      { type: "trou", consigne: "Complétez (von + datif).", texte: "Das ist das Fahrrad {0} meinem Bruder.", accepte: [["von"]], indice: "von + datif" },
      { type: "association", consigne: "Associez l'article génitif.", paires: [{ gauche: "masculin", droite: "des" }, { gauche: "féminin", droite: "der" }, { gauche: "neutre", droite: "des" }, { gauche: "pluriel", droite: "der" }] },
      { type: "traduction", consigne: "Traduisez (oral).", source: "C'est la voiture de mon père.", accepte: ["Das ist das Auto von meinem Vater"], aide: "von + datif" }
    ]
  },
  a2g12: {
    id: "a2g12",
    einstieg: {"intro":"Le même adjectif, trois terminaisons. Observe l'article.","exemples":[{"de":"der gute Wein","fr":"le bon vin"},{"de":"ein guter Wein","fr":"un bon vin"},{"de":"guter Wein","fr":"du bon vin"}],"question":"Pourquoi *gute*, *guter*, *guter* avec le même adjectif ?"},
    merke: ["La terminaison dépend de l'*article* qui précède.","Après *der/die/das* : terminaisons faibles (*-e / -en*).","Après *ein/kein/mein* : l'adjectif porte la marque du genre (*ein guter Mann*)."],
    achtung: [{"erreur":"ein gut Wein","correct":"ein **guter** Wein","explication":"Après *ein* (sans marque), l'adjectif prend *-er* (masculin)."},{"erreur":"der guter Wein","correct":"der **gute** Wein","explication":"Après *der*, l'adjectif est faible : *gute*."}],
    kontrast: {"titre":"L'accord de l'adjectif : allemand vs français","similitudes":["L'adjectif épithète s'accorde avec le nom."],"differences":["La terminaison dépend de l'*article* (faible/fort/mixte).","Trois séries de terminaisons selon der / ein / Ø.","Système plus systématique qu'en français."]}, titre: "Les adjectifs (déclinaison)", titreDE: "Adjektivdeklination", theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Accorder l'adjectif devant un nom", "Cas simples (nominatif/accusatif)"],
    grammairePoints: ["Terminaisons -e / -en", "après der / ein"],
    exemplesPlus: [{"de":"Ich trinke einen heißen Kaffee.","fr":"Je bois un café chaud."},{"de":"Das ist eine gute Idee.","fr":"C'est une bonne idée."},{"de":"Wir wohnen in einem kleinen Dorf.","fr":"Nous habitons dans un petit village."},{"de":"Sie trägt ein rotes Kleid.","fr":"Elle porte une robe rouge."},{"de":"Der alte Mann liest viele interessante Bücher.","fr":"Le vieil homme lit beaucoup de livres intéressants."}],
    cours: [
      "Au niveau A1, tu as vu l'adjectif **attribut** (après *sein*), toujours invariable. Place maintenant un adjectif **directement devant un nom** (épithète) : là, il prend une **terminaison**. C'est l'une des grandes difficultés de l'allemand, mais elle obéit à une logique qu'on peut apprivoiser.",
      "La terminaison dépend de **trois facteurs** : le genre du nom, le cas, et surtout **l'article qui précède**. La clé : si l'article a déjà « marqué » le cas et le genre (comme *der, die, das*), l'adjectif se contente d'une terminaison « faible », le plus souvent **-e** ou **-en**.",
      "Après l'**article défini** (*der/die/das*), c'est le plus simple : au nominatif singulier, terminaison **-e** (*der gut**e** Mann*, *die gut**e** Frau*, *das gut**e** Kind*) ; presque partout ailleurs (accusatif masculin, tout le datif, tout le pluriel), c'est **-en** (*den gut**en** Mann*, *mit dem gut**en** Mann*, *die gut**en** Kinder*).",
      "Après l'**article indéfini** (*ein/eine*) ou un possessif, l'adjectif doit parfois « porter » la marque du genre que *ein* ne montre pas : *ein gut**er** Mann* (masc.), *eine gut**e** Frau* (fém.), *ein gut**es** Kind* (neutre). Cette terminaison renseigne sur le genre, là où *ein* reste ambigu.",
      "Conseil à l'A2 : ne vise pas la perfection immédiate. Mémorise d'abord le cas le plus fréquent — **après *der/die/das* → -e au singulier sujet, -en presque partout ailleurs** — et l'idée que **-en** domine au pluriel et au datif. Les automatismes viendront avec la pratique et l'écoute."
    ],
    grammaire: [
      { regle: "Devant un nom, l'**adjectif se décline**. Après *der/die/das* → **-e / -en** ; après *ein* → l'adjectif **porte la marque du genre** (*ein **guter** Wein*).", attention: "Sans article, l'adjectif prend la **terminaison forte** du cas (*gut**er** Wein*, *kalt**es** Wasser*).", exemples: [{"de":"Der gute Wein ist teuer.","fr":"Le bon vin est cher."},{"de":"Ich trinke einen guten Kaffee.","fr":"Je bois un bon café."}], titre: "L'adjectif devant le nom", intro: "Après l'article défini : surtout -e (sing.) et -en. Après « ein » : prend la marque du genre.",
        tableau: { entetes: ["Cas / genre", "après der/die/das", "après ein/eine"], lignes: [["m. nominatif", "der gute Mann", "ein guter Mann"], ["m. accusatif", "den guten Mann", "einen guten Mann"], ["f. nom./acc.", "die gute Frau", "eine gute Frau"], ["n. nom./acc.", "das gute Kind", "ein gutes Kind"]] },
        note: "Rappel : après « sein » l'adjectif est INVARIABLE (Der Mann ist gut). Devant le nom, il s'accorde." },
      { titre: "Après der/die/das : la déclinaison faible",
        regle: "Après l'article défini, l'adjectif est **faible** : **-e** dans le « bloc » nominatif singulier (+ acc. fém./neutre), **-en** partout ailleurs.",
        intro: "Le **datif** et le **pluriel** sont toujours en **-en**.",
        tableau: { entetes: ["Cas", "Masculin", "Féminin", "Neutre", "Pluriel"], lignes: [["Nominatif", "der gute", "die gute", "das gute", "die guten"], ["Accusatif", "den guten", "die gute", "das gute", "die guten"], ["Datif", "dem guten", "der guten", "dem guten", "den guten"]] },
        note: "5 cases en -e (le bloc nominatif/accusatif singulier) ; tout le reste en -en." },
      { titre: "Après ein/kein/mein : la déclinaison mixte",
        regle: "Après *ein*, l'adjectif **porte la marque du genre** là où *ein* ne la montre pas : **-er** (masc. nom.), **-es** (neutre nom./acc.). Ailleurs → **-en**.",
        intro: "*ein gut**er** Mann*, *ein gut**es** Kind*, mais *einen gut**en** Mann*.",
        tableau: { entetes: ["Cas", "Masculin", "Féminin", "Neutre"], lignes: [["Nominatif", "ein guter", "eine gute", "ein gutes"], ["Accusatif", "einen guten", "eine gute", "ein gutes"], ["Datif", "einem guten", "einer guten", "einem guten"]] },
        note: "3 formes « fortes » : guter (m. nom.), gutes (n. nom./acc.) ; le reste en -en." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Devant un nom, l'adjectif…", options: ["s'accorde", "ne change jamais", "prend toujours -en"], correct: 0, explication: "Adjectif épithète = accordé." },
      { type: "qcm", consigne: "Terminaison.", question: "Ich kaufe einen ___ Wagen. (neu, m. acc.)", options: ["neuen", "neuer", "neues", "neu"], correct: 0, explication: "ein + m. accusatif → neuen." },
      { type: "trou", consigne: "Complétez (gut).", texte: "Das ist eine {0} Idee und ein {1} Plan.", accepte: [["gute"], ["guter"]], indice: "eine gute (f) / ein guter (m nom.)" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "der ___ Mann", droite: "gute" }, { gauche: "die ___ Frau", droite: "gute" }, { gauche: "das ___ Kind", droite: "gute" }, { gauche: "den ___ Mann", droite: "guten" }] },
      { type: "traduction", consigne: "Traduisez.", source: "une belle maison", accepte: ["ein schönes Haus"], aide: "ein + neutre → -es" },
      { type: "qcm", consigne: "Datif (faible).", question: "Ich wohne in dem ___ Haus. (klein)", options: ["kleinen", "kleine", "kleines", "kleiner"], correct: 0, explication: "datif après dem → faible -en : kleinen." },
      { type: "trou", consigne: "Mixte (neutre nom.).", texte: "Das ist ein {0} Auto. (schnell)", accepte: [["schnelles"]], indice: "ein + neutre nom. → -es" },
      { type: "qcm", consigne: "Datif (mixte).", question: "Ich fahre mit einem ___ Auto. (neu)", options: ["neuen", "neues", "neuer", "neu"], correct: 0, explication: "datif après einem → -en : neuen." }
    ]
  },
  a2g13: {
    id: "a2g13",
    einstieg: {"intro":"Certaines particules se détachent, d'autres non. Observe.","exemples":[{"de":"Ich stehe um 7 auf.","fr":"Je me lève à 7h."},{"de":"Ich verstehe dich.","fr":"Je te comprends."},{"de":"Ich kaufe ein.","fr":"Je fais les courses."}],"question":"Quelles particules se détachent et lesquelles non ?"},
    merke: ["Séparables (*auf-, an-, ein-, mit-, ab-*…) : accentuées, se détachent.","Inséparables (*be-, ge-, er-, ver-, ent-, zer-*) : non accentuées, jamais détachées.","Perfekt : séparable *ein**ge**kauft* ; inséparable *verstanden* (sans ge-)."],
    achtung: [{"erreur":"Ich aufstehe um 7.","correct":"Ich **stehe** um 7 **auf**.","explication":"*aufstehen* est séparable : *auf* part à la fin."},{"erreur":"Ich habe geverstanden.","correct":"Ich habe **verstanden**.","explication":"*verstehen* est inséparable : participe sans *ge-*."}],
    kontrast: {"titre":"Verbes à particule : allemand vs français","similitudes":["Des préfixes verbaux existent aussi en français (comprendre)."],"differences":["Les séparables se *coupent en deux* (ich stehe… auf).","L'accent indique si la particule est séparable.","Pas de *ge-* au participe des inséparables."]}, titre: "Verbes à particule", titreDE: "Trennbare und untrennbare Verben", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Distinguer séparables et inséparables", "Placer la particule"],
    grammairePoints: ["trennbar / untrennbar", "Préfixes"],
    exemplesPlus: [{"de":"Ich stehe um sechs Uhr auf.","fr":"Je me lève à six heures."},{"de":"Er kauft jeden Samstag ein.","fr":"Il fait les courses chaque samedi."},{"de":"Wann kommt der Zug an?","fr":"Quand le train arrive-t-il ?"},{"de":"Ich verstehe dich gut.","fr":"Je te comprends bien."},{"de":"Sie ruft mich später an.","fr":"Elle m'appelle plus tard."}],
    cours: [
      "Beaucoup de verbes allemands sont formés d'un **verbe de base + une particule** (un préfixe) qui en modifie le sens, parfois radicalement. *kommen* (venir) donne *ankommen* (arriver), *mitkommen* (venir avec), *bekommen* (recevoir !). Manier ces particules multiplie ton vocabulaire d'un coup.",
      "La distinction capitale est entre particules **séparables** et **inséparables**. Les **séparables** sont accentuées et se **détachent** : la particule part en fin de phrase au présent et au prétérit. *aufstehen* → « *Ich stehe um 7 Uhr **auf*** ». Les plus fréquentes : *an-, auf-, aus-, ein-, mit-, vor-, zu-, ab-, nach-, zurück-, weg-*.",
      "Les **inséparables** ne se détachent **jamais** et ne sont pas accentuées. Elles sont peu nombreuses et toujours les mêmes : **be-, ge-, er-, ver-, zer-, ent-, emp-, miss-**. *verstehen* → « *Ich **verstehe** dich* ». Au Perfekt, ces verbes ne prennent **pas** de *ge-* : *verstehen → verstanden*.",
      "Au **Perfekt**, la différence saute aux yeux. Séparable : le *ge-* s'insère **entre** la particule et le radical : *aufstehen → auf**ge**standen*, *einkaufen → ein**ge**kauft*. Inséparable : **pas de ge-** : *verstehen → verstanden*, *erklären → erklärt*. C'est un bon test pour reconnaître la famille d'un verbe.",
      "Astuce : si l'**accent tombe sur la particule** (ÁNkommen), elle est séparable ; s'il tombe sur le **radical** (verSTÉHen), elle est inséparable. Écoute bien tes audios : l'accent te dira presque toujours à quelle famille tu as affaire."
    ],
    grammaire: [
      { exemples: [{"de":"Ich rufe dich morgen an.","fr":"Je t'appelle demain."},{"de":"Ich habe den Text nicht verstanden.","fr":"Je n'ai pas compris le texte."}], regle: "**Séparables** (*auf-, an-, ein-, mit-, vor-, zu-*) : le préfixe **part à la fin**. **Inséparables** (*be-, er-, ent-, ver-, zer-, miss-*) : restent collés.", attention: "Au participe, l'inséparable n'a **pas** de *ge-* (*verstanden, bekommen*) ; le séparable l'insère (*aufgestanden*).", titre: "Séparable ou inséparable ?", intro: "La particule séparable part à la fin ; l'inséparable reste collée.",
        tableau: { entetes: ["Type", "Préfixes", "Exemple"], lignes: [["séparable", "auf-, ein-, an-, mit-, zu-, aus-", "Ich stehe um 7 auf."], ["inséparable", "be-, ge-, er-, ver-, ent-, emp-, zer-", "Ich verstehe das."]] },
        note: "Au Perfekt : séparable → aufgestanden (ge- au milieu) ; inséparable → verstanden (PAS de ge-)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« verstehen » est…", options: ["inséparable", "séparable"], correct: 0, explication: "ver- = préfixe inséparable." },
      { type: "qcm", consigne: "Séparable : placez la particule.", question: "Ich ___ um 7 Uhr ___ . (aufstehen)", options: ["stehe … auf", "aufstehe … —", "stehe auf … —", "auf … stehe"], correct: 0, explication: "verbe en 2e, particule à la fin." },
      { type: "trou", consigne: "Complétez (séparable einkaufen).", texte: "Wir {0} am Samstag {1}.", accepte: [["kaufen"], ["ein"]], indice: "verbe + particule à la fin" },
      { type: "association", consigne: "Séparable (S) ou inséparable (I) ?", paires: [{ gauche: "aufstehen", droite: "séparable" }, { gauche: "verstehen", droite: "inséparable" }, { gauche: "ankommen", droite: "séparable" }, { gauche: "bekommen", droite: "inséparable" }] },
      { type: "ordre", consigne: "Construisez la phrase.", mots: ["Der", "Zug", "kommt", "um", "acht", "an"], correct: "Der Zug kommt um acht an", traduction: "Le train arrive à huit heures." }
    ]
  },
  a2g14: {
    id: "a2g14",
    einstieg: {"intro":"Quand choisir le Perfekt, quand le prétérit ?","exemples":[{"de":"Ich habe gestern gearbeitet.","fr":"J'ai travaillé hier. (oral)"},{"de":"Gestern war ich krank.","fr":"Hier j'étais malade."},{"de":"Es war einmal ein König.","fr":"Il était une fois un roi. (récit)"}],"question":"Le choix dépend-il de l'oral ou de l'écrit ?"},
    merke: ["À l'*oral* : on préfère le *Perfekt* (ich habe gemacht).","À l'*écrit* (récits, presse) : on préfère le *Präteritum*.","*sein, haben, modaux* : prétérit même à l'oral (*war, hatte, konnte*)."],
    achtung: [{"erreur":"Ich habe gestern krank gewesen.","correct":"Ich **war** gestern krank.","explication":"Avec *sein*, on utilise le prétérit *war* même à l'oral."},{"erreur":"Ich machte gestern viel. (conversation)","correct":"Ich **habe** gestern viel **gemacht**.","explication":"À l'oral, le Perfekt est plus naturel pour les verbes ordinaires."}],
    kontrast: {"titre":"Perfekt vs prétérit : allemand vs français","similitudes":["Deux passés coexistent (comme passé composé/imparfait)."],"differences":["Le choix dépend surtout du *registre* (oral/écrit).","*war/hatte/konnte* restent au prétérit à l'oral.","Le français choisit selon l'aspect, l'allemand selon le canal."]}, titre: "Perfekt ou prétérit ?", titreDE: "Perfekt oder Präteritum?", theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Choisir le bon temps du passé", "À l'oral vs à l'écrit"],
    grammairePoints: ["Perfekt (oral)", "Präteritum (écrit, sein/haben/modaux)"],
    exemplesPlus: [{"de":"Gestern habe ich lange geschlafen.","fr":"Hier, j'ai dormi longtemps."},{"de":"Er war sehr müde.","fr":"Il était très fatigué."},{"de":"Wir haben den ganzen Tag gearbeitet.","fr":"Nous avons travaillé toute la journée."},{"de":"Ich hatte keine Zeit.","fr":"Je n'avais pas le temps."},{"de":"Plötzlich klingelte das Telefon.","fr":"Soudain, le téléphone sonna."}],
    cours: [
      "Tu connais désormais deux passés : le **Perfekt** (haben/sein + participe) et le **Präteritum** (formes en -te ou à voyelle changée). Une question revient sans cesse : **lequel utiliser ?** La réponse tient surtout au **registre** (oral ou écrit) et à **quelques verbes** particuliers.",
      "Règle n°1 : **à l'oral et dans les messages** (conversation, e-mails amicaux, SMS), on raconte le passé au **Perfekt**. « *Gestern **habe** ich einen Film **gesehen*** ». C'est le passé par défaut quand tu parles de ta vie. Si tu hésites en parlant, choisis le Perfekt : tu auras raison neuf fois sur dix.",
      "Règle n°2 : **à l'écrit narratif** (livres, articles, contes, biographies), on emploie le **Präteritum**. « *Er **ging** nach Hause und **öffnete** die Tür* ». C'est le temps du récit, qui donne un style fluide et littéraire.",
      "L'exception capitale : **sein, haben et les verbes de modalité** s'emploient au **prétérit même à l'oral**, car leurs formes Perfekt sont lourdes. On dit « *Ich **war** müde* », « *Ich **hatte** keine Zeit* », « *Ich **konnte** nicht kommen* ». C'est un réflexe qui rend ton allemand immédiatement plus naturel.",
      "En résumé : *war, hatte, konnte/musste/wollte* → prétérit partout ; pour **tous les autres verbes**, Perfekt à l'oral et prétérit à l'écrit. Garde ce repère simple et tu choisiras juste sans y penser."
    ],
    grammaire: [
      { exemples: [{"de":"Gestern habe ich Fußball gespielt.","fr":"Hier, j'ai joué au football."},{"de":"Es war kalt und ich hatte keine Jacke.","fr":"Il faisait froid et je n'avais pas de veste."}], regle: "**Perfekt** = oral, lettres, conversation. **Präteritum** = récit écrit, presse, contes. Même passé, **registre** différent.", attention: "*sein, haben* et les **modaux** vont au **Präteritum** même à l'oral (*Ich **war** müde*).", titre: "Quel passé utiliser ?", intro: "Même sens, contextes différents.",
        tableau: { entetes: ["Contexte", "Temps", "Exemple"], lignes: [["conversation", "Perfekt", "Ich habe gegessen."], ["récit écrit / presse", "Präteritum", "Er ging nach Hause."], ["sein / haben / modaux (oral)", "Präteritum", "Ich war / hatte / musste"]] },
        note: "Règle pratique : à l'oral, Perfekt partout — sauf war, hatte, et les modaux (konnte, musste…)." },
      { titre: "La même phrase : Perfekt vs Präteritum",
        regle: "Le sens est **identique** ; seul le registre change.",
        intro: "Oral → Perfekt · écrit → Präteritum.",
        tableau: { entetes: ["Perfekt (oral)", "Präteritum (écrit)"], lignes: [["Ich habe gearbeitet.", "Ich arbeitete."], ["Er ist gekommen.", "Er kam."], ["Wir haben gegessen.", "Wir aßen."], ["Sie hat es gesehen.", "Sie sah es."]] },
        note: "Choisis selon le canal : conversation/message → Perfekt ; récit écrit/presse → Präteritum." },
      { titre: "L'exception : sein, haben, modaux",
        regle: "Ces verbes restent au **prétérit même à l'oral** (leurs formes Perfekt sont lourdes).",
        intro: "*Ich war / hatte / konnte / musste / wollte / durfte*.",
        tableau: { entetes: ["Infinitif", "Prétérit (oral)", "Perfekt (évité)"], lignes: [["sein", "ich war", "(ich bin gewesen)"], ["haben", "ich hatte", "(ich habe gehabt)"], ["können", "ich konnte", "(gekonnt)"], ["müssen", "ich musste", "(gemusst)"], ["wollen", "ich wollte", "(gewollt)"]] },
        note: "On dit « Ich war müde », pas « Ich bin müde gewesen » (correct mais lourd)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "À l'oral, pour « être » au passé on dit…", options: ["war (Präteritum)", "habe gewesen", "bin gewesen"], correct: 0, explication: "sein → war (même à l'oral)." },
      { type: "qcm", consigne: "Conversation.", question: "Was ___ du gestern gemacht?", options: ["hast", "machtest", "tatest", "warst"], correct: 0, explication: "conversation → Perfekt : hast … gemacht." },
      { type: "trou", consigne: "Complétez (war/hatte).", texte: "Gestern {0} ich krank und {1} Fieber.", accepte: [["war"], ["hatte"]], indice: "sein / haben au prétérit" },
      { type: "association", consigne: "Associez contexte → temps.", paires: [{ gauche: "conversation", droite: "Perfekt" }, { gauche: "récit écrit", droite: "Präteritum" }, { gauche: "sein/haben", droite: "Präteritum" }] },
      { type: "traduction", consigne: "Traduisez (oral).", source: "J'ai mangé une pizza.", accepte: ["Ich habe eine Pizza gegessen"], aide: "Perfekt" },
      { type: "qcm", consigne: "Registre.", question: "Dans un conte écrit, on emploie…", options: ["le Präteritum", "le Perfekt", "le présent"], correct: 0, explication: "récit écrit → Präteritum (Es war einmal…)." },
      { type: "trou", consigne: "Modal (oral).", texte: "Ich {0} gestern nicht kommen. (können)", accepte: [["konnte"]], indice: "modal → prétérit même à l'oral : konnte" },
      { type: "qcm", consigne: "Conversation.", question: "« Es-tu allé au cinéma ? » (oral) =", options: ["Bist du ins Kino gegangen?", "Gingst du ins Kino?", "Warst du ins Kino gehen?"], correct: 0, explication: "oral + gehen (mouvement) → Perfekt avec sein." }
    ]
  },
  a2g15: {
    id: "a2g15",
    einstieg: {"intro":"La préposition du verbe ne se devine pas. Observe.","exemples":[{"de":"Ich warte auf den Bus.","fr":"J'attends le bus."},{"de":"Ich denke an dich.","fr":"Je pense à toi."},{"de":"Ich freue mich auf die Ferien.","fr":"J'ai hâte des vacances."}],"question":"La préposition correspond-elle à celle du français ?"},
    merke: ["Beaucoup de verbes ont une *préposition fixe* : *warten auf*, *denken an*, *sich freuen auf/über*.","La préposition impose son *cas* (*warten auf* + accusatif).","On apprend le verbe AVEC sa préposition et son cas."],
    achtung: [{"erreur":"Ich warte den Bus.","correct":"Ich warte **auf** den Bus.","explication":"*warten* exige *auf* + accusatif."},{"erreur":"Ich denke an dir.","correct":"Ich denke an **dich**.","explication":"*denken an* régit l'*accusatif*."}],
    kontrast: {"titre":"Verbes à préposition : allemand vs français","similitudes":["« penser à », « attendre » ont aussi des constructions fixes."],"differences":["La préposition allemande ne correspond *pas* à la française.","La préposition fixe le *cas* du complément.","À mémoriser verbe par verbe."]}, titre: "Verbes + prépositions", titreDE: "Verben mit Präpositionen", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Connaître les verbes à préposition fixe", "Choisir le bon cas"],
    grammairePoints: ["warten auf, denken an…", "Préposition fixe"],
    exemplesPlus: [{"de":"Ich warte auf den Bus.","fr":"J'attends le bus."},{"de":"Wir denken oft an dich.","fr":"Nous pensons souvent à toi."},{"de":"Sie interessiert sich für Kunst.","fr":"Elle s'intéresse à l'art."},{"de":"Ich freue mich auf das Wochenende.","fr":"J'attends le week-end avec impatience."},{"de":"Er hat Angst vor Hunden.","fr":"Il a peur des chiens."}],
    cours: [
      "De nombreux verbes s'accompagnent d'une **préposition fixe**, souvent **sans rapport logique** avec la préposition française. *warten **auf*** (attendre), *denken **an*** (penser à), *sich freuen **auf/über*** (se réjouir de), *sprechen **über/von*** (parler de). Ces couples verbe + préposition s'apprennent **en bloc**, comme un seul mot.",
      "Chaque préposition impose son **cas**, à mémoriser avec le verbe. *warten auf* + **accusatif** : « *Ich warte **auf den** Bus* ». *denken an* + **accusatif** : « *Ich denke **an dich*** ». *teilnehmen an* + **datif** : « *Ich nehme **an dem** Kurs teil* ». Note toujours : verbe + préposition + cas.",
      "Pour **interroger** sur une chose, on forme un mot en **wo(r)- + préposition** : *worauf?* (sur quoi ?), *woran?* (à quoi ?), *worüber?* (à propos de quoi ?). « *Worauf wartest du?* ». Le *-r-* s'insère quand la préposition commence par une voyelle (*wo**r**auf*).",
      "Pour **renvoyer** à une chose déjà mentionnée, on utilise **da(r)- + préposition** : *darauf* (là-dessus), *daran* (à cela), *darüber*. « *Ich warte **darauf*** ». Mais s'il s'agit d'une **personne**, on garde **préposition + pronom** : « *Ich warte **auf ihn*** ».",
      "Méthode incontournable : crée une liste des verbes à préposition les plus fréquents avec leur cas (*warten auf + A, denken an + A, sich interessieren für + A, Angst haben vor + D, helfen bei + D*) et révise-la régulièrement. C'est l'un des meilleurs investissements pour un allemand idiomatique."
    ],
    grammaire: [
      { exemples: [{"de":"Ich warte auf den Bus.","fr":"J'attends le bus."},{"de":"Sie denkt oft an ihre Familie.","fr":"Elle pense souvent à sa famille."}], regle: "Beaucoup de verbes imposent une **préposition fixe** (et son cas) : *warten **auf** + Akk.*, *denken **an** + Akk.*, *sich freuen **über/auf***.", attention: "*sich freuen **auf*** = se réjouir d'avance (futur) ; *sich freuen **über*** = être content de (présent/passé).", titre: "Verbes à préposition fixe", intro: "La préposition fait partie du verbe et impose son cas.",
        tableau: { entetes: ["Verbe + prép.", "Cas", "Exemple"], lignes: [["warten auf", "accusatif", "Ich warte auf den Bus."], ["denken an", "accusatif", "Ich denke an dich."], ["sich interessieren für", "accusatif", "Ich interessiere mich für Musik."], ["sprechen mit", "datif", "Ich spreche mit dem Lehrer."], ["helfen bei", "datif", "Er hilft mir bei der Arbeit."]] },
        note: "À apprendre par cœur (verbe + préposition + cas). Question : « auf wen/was wartest du? »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Ich warte ___ den Bus.", options: ["auf", "an", "für", "mit"], correct: 0, explication: "warten auf + accusatif." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich interessiere mich ___ Sport.", options: ["für", "auf", "an", "über"], correct: 0, explication: "sich interessieren für." },
      { type: "trou", consigne: "Complétez.", texte: "Ich denke {0} dich. (préposition)", accepte: [["an"]], indice: "denken an" },
      { type: "association", consigne: "Associez verbe → préposition.", paires: [{ gauche: "warten", droite: "auf" }, { gauche: "denken", droite: "an" }, { gauche: "sich interessieren", droite: "für" }, { gauche: "sprechen", droite: "mit" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je pense à toi.", accepte: ["Ich denke an dich"], aide: "denken an + accusatif" }
    ]
  },
  a2g16: {
    id: "a2g16",
    einstieg: {"intro":"Observe l'orthographe et le pluriel des noms.","exemples":[{"de":"das Kind → die Kinder","fr":"l'enfant → les enfants"},{"de":"der Apfel → die Äpfel","fr":"la pomme → les pommes"},{"de":"die Haustür","fr":"la porte d'entrée (Haus + Tür)"}],"question":"Le pluriel allemand est-il régulier ?"},
    merke: ["Tous les *noms* prennent une *majuscule*.","Le pluriel est *imprévisible* (*-e, -er, -(e)n, -s*, Umlaut) : à apprendre avec le mot.","Un *nom composé* prend le genre du *dernier* élément (die Tür → die Haustür)."],
    achtung: [{"erreur":"die hausaufgabe","correct":"die **Hausaufgabe**","explication":"Tous les noms s'écrivent avec une majuscule."},{"erreur":"das Haustür","correct":"**die** Haustür","explication":"Le composé prend le genre du dernier élément (die Tür)."}],
    kontrast: {"titre":"Les noms : allemand vs français","similitudes":["Les noms ont un genre et un pluriel."],"differences":["Tous les noms allemands ont une *majuscule*.","Le pluriel est *varié* et à mémoriser (≠ -s régulier).","Les composés forment un seul mot, genre du dernier élément."]}, titre: "Les substantifs (noms)", titreDE: "Die Substantive", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Former le pluriel", "Comprendre les noms composés"],
    grammairePoints: ["Pluriels", "Komposita", "suffixes"],
    exemplesPlus: [{"de":"Die Kinder spielen im Park.","fr":"Les enfants jouent dans le parc."},{"de":"Ich brauche eine neue Brille.","fr":"J'ai besoin de nouvelles lunettes."},{"de":"Der Apfelsaft schmeckt gut.","fr":"Le jus de pomme est bon."},{"de":"Wir kaufen drei Flaschen Wasser.","fr":"Nous achetons trois bouteilles d'eau."},{"de":"Die Häuser hier sind sehr alt.","fr":"Les maisons ici sont très vieilles."}],
    cours: [
      "En allemand, tout **nom** (substantif) s'écrit avec une **majuscule**, où qu'il soit dans la phrase : *der Tisch*, *die Freude*, *das Lernen*. C'est une règle absolue et un repère visuel précieux. Au niveau A2, on approfondit deux aspects : le **pluriel** et la **formation de noms composés**.",
      "Le **pluriel** allemand n'est pas régulier comme le -s anglais : plusieurs schémas existent, à apprendre **avec chaque mot**. Les principaux : **-e** (*der Tisch → die Tische*), souvent avec Umlaut (*der Stuhl → die Stühle*) ; **-(e)n** (*die Frau → die Frauen*) ; **-er** avec Umlaut (*das Kind → die Kinder*) ; **-s** (mots étrangers : *das Auto → die Autos*) ; parfois **aucun changement** (*der Lehrer → die Lehrer*).",
      "Conséquence pratique : on n'apprend jamais un nom seul, mais avec son **article ET son pluriel** : *der Tisch, -e* ; *die Frau, -en* ; *das Kind, -er*. C'est exactement ainsi que les dictionnaires les présentent. Prends cette habitude dès maintenant.",
      "Les **noms composés** (*Komposita*) sont une force de l'allemand : on assemble plusieurs noms en un seul. *die Hand + der Schuh = der Handschuh* (le gant). Règle d'or : c'est le **dernier élément** qui donne le **genre** et le sens principal. *Haus + Tür → die Haustür* (fém.) ; *Apfel + Saft → der Apfelsaft* (masc.).",
      "Cette logique te permet de **comprendre et de créer** des mots très longs en les découpant : *Geschwindigkeit* (vitesse) + *Begrenzung* (limitation) = *die Geschwindigkeitsbegrenzung* (la limitation de vitesse). Ne te laisse pas impressionner : un long mot allemand est souvent un petit puzzle parfaitement logique."
    ],
    grammaire: [
      { regle: "Tout **nom** prend une **majuscule** et a un **genre** (der/die/das) et un **pluriel** à apprendre. Le genre n'est pas toujours logique.", attention: "Apprends toujours le nom avec son **article et son pluriel** : *das Buch, die Büch**er***.", exemples: [{"de":"Das Kind liest ein Buch.","fr":"L'enfant lit un livre."},{"de":"Die Bücher sind interessant.","fr":"Les livres sont intéressants."}], titre: "Pluriels et noms composés", intro: "Plusieurs marques de pluriel ; les noms composés se collent.",
        tableau: { entetes: ["Règle", "Singulier → Pluriel"], lignes: [["-e (souvent + Umlaut)", "der Tisch → die Tische"], ["-er (+ Umlaut)", "das Kind → die Kinder"], ["-(e)n", "die Frau → die Frauen"], ["-s (mots étrangers)", "das Auto → die Autos"], ["composé (Kompositum)", "die Haus + die Tür → die Haustür"]] },
        note: "Le genre d'un nom composé = celui du DERNIER mot (die Haustür → die Tür). Les noms s'écrivent avec une majuscule. Suffixes féminins : -ung, -heit, -keit, -tion." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le genre de « das Hausboot » vient de…", options: ["le dernier mot (Boot)", "le premier mot (Haus)", "au hasard"], correct: 0, explication: "Composé : genre du dernier élément." },
      { type: "qcm", consigne: "Pluriel de « das Kind ».", question: "ein Kind → zwei ___", options: ["Kinder", "Kinds", "Kinden", "Kinde"], correct: 0, explication: "das Kind → die Kinder." },
      { type: "trou", consigne: "Pluriel de « die Frau ».", texte: "eine Frau, viele {0}.", accepte: [["Frauen"]], indice: "-en" },
      { type: "association", consigne: "Associez singulier → pluriel.", paires: [{ gauche: "der Tisch", droite: "die Tische" }, { gauche: "das Auto", droite: "die Autos" }, { gauche: "die Frau", droite: "die Frauen" }, { gauche: "das Kind", droite: "die Kinder" }] },
      { type: "qcm", consigne: "Article de « die Wohnung » (suffixe -ung).", question: "Les noms en -ung sont…", options: ["féminins (die)", "masculins (der)", "neutres (das)"], correct: 0, explication: "-ung → toujours féminin." }
    ]
  },
  a2g17: {
    id: "a2g17",
    einstieg: {"intro":"Une préposition peut servir au temps ET au lieu. Observe.","exemples":[{"de":"am Montag / an der Wand","fr":"lundi / au mur"},{"de":"im Mai / im Haus","fr":"en mai / dans la maison"},{"de":"um 8 Uhr","fr":"à 8 heures"}],"question":"Comment distinguer l'emploi temporel et l'emploi spatial ?"},
    merke: ["Mêmes prépositions pour le temps et le lieu : *an, in, vor, nach, zu*.","Temps : *am* (jour), *um* (heure), *im* (mois). Lieu : *an* (à/contre), *in* (dans), *auf* (sur).","Le *cas* dépend de l'emploi (souvent datif pour situer)."],
    achtung: [{"erreur":"in Montag","correct":"**am** Montag","explication":"Temps : les jours prennent *am*."},{"erreur":"Ich bin in die Stadt.","correct":"Ich bin in **der** Stadt.","explication":"Situer (Wo?) → datif : in der Stadt."}],
    kontrast: {"titre":"Prépositions (récap) : allemand vs français","similitudes":["Les prépositions situent dans le temps et l'espace."],"differences":["Une même préposition sert au temps et au lieu, avec des cas variables.","L'allemand est systématique : *am/um/im* pour le temps.","Le cas (datif/accusatif) change le sens (position vs direction)."]}, titre: "Prépositions de lieu et de temps", titreDE: "Präpositionen: Ort und Zeit", theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Maîtriser les prépositions mixtes", "Choisir accusatif (Wohin) ou datif (Wo)"],
    grammairePoints: ["Wechselpräpositionen", "temporelles"],
    exemplesPlus: [{"de":"Ich gehe durch den Park.","fr":"Je traverse le parc."},{"de":"Das Geschenk ist für dich.","fr":"Le cadeau est pour toi."},{"de":"Wir fahren mit dem Zug nach Hamburg.","fr":"Nous allons à Hambourg en train."},{"de":"Nach der Arbeit treffe ich Freunde.","fr":"Après le travail, je retrouve des amis."},{"de":"Seit einem Monat lerne ich Klavier.","fr":"Depuis un mois, j'apprends le piano."}],
    cours: [
      "Cette leçon fait la **synthèse** des prépositions, en réunissant celles du **lieu** et celles du **temps**. L'enjeu, au niveau A2, est de fixer **quel cas** commande chaque préposition, car c'est de là que dépendent toutes les terminaisons d'articles et d'adjectifs.",
      "Les **prépositions toujours suivies de l'accusatif** : *durch* (à travers), *für* (pour), *gegen* (contre), *ohne* (sans), *um* (autour de / à telle heure). Mémo : *durch, ohne, gegen, für, um*. « *Ich gehe **durch den** Park* », « *ein Geschenk **für dich*** ».",
      "Les **prépositions toujours suivies du datif** : *aus* (hors de), *bei* (chez), *mit* (avec), *nach* (après, vers), *seit* (depuis), *von* (de), *zu* (à, vers). Récite-les comme une formule : « *aus-bei-mit-nach-seit-von-zu* ». « *Ich fahre **mit dem** Bus **zur** Arbeit* ».",
      "Les **prépositions mixtes** (*Wechselpräpositionen*) : *in, an, auf, über, unter, vor, hinter, neben, zwischen*. Elles prennent l'**accusatif** s'il y a mouvement vers un but (*Wohin?*) et le **datif** s'il y a position (*Wo?*). C'est la seule famille « à deux cas », et la plus subtile.",
      "Pour le **temps**, beaucoup de ces mêmes prépositions servent aussi : *am* (jour), *um* (heure), *im* (mois/saison), *seit* (depuis + datif), *vor* (il y a + datif), *in* (dans + datif), *von… bis*. Garde près de toi un petit tableau « préposition → cas → emploi » : c'est l'outil de référence qui sécurise toute ta grammaire jusqu'au niveau B."
    ],
    grammaire: [
      { exemples: [{"de":"Das Buch liegt auf dem Tisch.","fr":"Le livre est sur la table (position)."},{"de":"Ich lege das Buch auf den Tisch.","fr":"Je pose le livre sur la table (direction)."}], regle: "Chaque préposition impose un **cas** : *mit, zu, bei* (+ datif), *für, ohne* (+ accusatif), *in, an, auf* (datif **ou** accusatif).", attention: "Les **prépositions mixtes** : **datif** si position (Wo?), **accusatif** si mouvement (Wohin?).", titre: "Prépositions mixtes (lieu)", intro: "an, auf, in, über, unter, vor, hinter, neben, zwischen : datif (Wo?) ou accusatif (Wohin?).",
        tableau: { entetes: ["Question", "Cas", "Exemple"], lignes: [["Wo? (position)", "datif", "Das Bild hängt an der Wand."], ["Wohin? (direction)", "accusatif", "Ich hänge das Bild an die Wand."], ["temps : am/im/um", "—", "am Montag, im Mai, um 8"], ["temps : seit/vor", "datif", "seit zwei Jahren, vor einer Woche"]] },
        schemas: [
          { legende: "Wohin? → accusatif.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "lege", r: "verbe (2)", c: "verbe" }, { m: "das Buch", r: "COD", c: "objet" }, { m: "auf den Tisch", r: "direction (acc.)", c: "fin" }] },
          { legende: "Wo? → datif.", mots: [{ m: "Das Buch", r: "sujet", c: "sujet" }, { m: "liegt", r: "verbe (2)", c: "verbe" }, { m: "auf dem Tisch", r: "position (datif)", c: "objet" }] }
        ],
        note: "Astuce : mouvement vers un endroit = accusatif ; sans mouvement = datif." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Wohin? » entraîne quel cas (préposition mixte) ?", options: ["accusatif", "datif", "génitif"], correct: 0, explication: "direction → accusatif." },
      { type: "qcm", consigne: "Wo? → datif.", question: "Das Bild hängt an ___ Wand.", options: ["der", "die", "dem", "den"], correct: 0, explication: "position, die Wand → datif : der Wand." },
      { type: "trou", consigne: "Complétez (den/dem).", texte: "Ich lege das Buch auf {0} Tisch; jetzt liegt es auf {1} Tisch.", accepte: [["den"], ["dem"]], indice: "Wohin (acc.) / Wo (datif)" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "Wo?", droite: "datif" }, { gauche: "Wohin?", droite: "accusatif" }, { gauche: "seit", droite: "datif" }, { gauche: "um", droite: "heure" }] },
      { type: "traduction", consigne: "Traduisez (position).", source: "Le livre est sur la table.", accepte: ["Das Buch liegt auf dem Tisch", "Das Buch ist auf dem Tisch"], aide: "Wo? → auf dem Tisch" }
    ]
  }
});
