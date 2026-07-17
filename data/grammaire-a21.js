/* =====================================================================
   grammaire-a21.js — 9 LEÇONS DE GRAMMAIRE du module A2.1
   (window.GRAMMAIRE_A2). Schéma identique aux fiches A1.
   ===================================================================== */
window.GRAMMAIRE_A2 = Object.assign(window.GRAMMAIRE_A2 || {}, {
  a2g01: {
    id: "a2g01",
    einstieg: {"intro":"Observe ces verbes au passé. Comment se forme le prétérit ?","exemples":[{"de":"Ich war gestern krank.","fr":"J'étais malade hier."},{"de":"Er hatte keine Zeit.","fr":"Il n'avait pas le temps."},{"de":"Wir gingen ins Kino.","fr":"Nous allions au cinéma."}],"question":"Comment se forme le prétérit des verbes réguliers et irréguliers ?"},
    merke: ["Prétérit régulier : radical + *-te* (*machen* → *machte*).","Verbes forts : changement de voyelle, sans *-te* (*gehen* → *ging*, *sein* → *war*).","À l'oral on préfère le *Perfekt* ; le prétérit domine à l'*écrit* et avec *sein/haben/modaux*."],
    achtung: [{"erreur":"Ich gehte ins Kino.","correct":"Ich **ging** ins Kino.","explication":"*gehen* est un verbe fort : prétérit *ging*, pas *gehte*."},{"erreur":"Ich habte ein Auto.","correct":"Ich **hatte** ein Auto.","explication":"*haben* → *hatte* (irrégulier)."}],
    kontrast: {"titre":"Le prétérit : allemand vs français","similitudes":["Comme l'imparfait/passé simple, le prétérit raconte le passé."],"differences":["Un seul prétérit allemand couvre imparfait ET passé simple.","À l'oral on dit plutôt le *Perfekt*, sauf *war/hatte* et les modaux.","Les verbes forts changent de voyelle (*ging, kam, fand*)."]}, titre: "Les verbes au prétérit", titreDE: "Das Präteritum", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Former le prétérit (récit écrit)", "Connaître le prétérit des modaux"],
    grammairePoints: ["Präteritum", "konnte, musste…"],
    exemplesPlus: [{"de":"Als Kind war ich oft krank.","fr":"Enfant, j'étais souvent malade."},{"de":"Wir hatten kein Auto.","fr":"Nous n'avions pas de voiture."},{"de":"Er ging jeden Tag zur Schule.","fr":"Il allait à l'école tous les jours."},{"de":"Ich konnte gestern nicht kommen.","fr":"Je n'ai pas pu venir hier."},{"de":"Sie sprach langsam und deutlich.","fr":"Elle parlait lentement et distinctement."}],
    cours: [
      "Le **prétérit** (*Präteritum*) est le **passé de l'écrit** et du récit : on le trouve dans les livres, les articles et les contes. À l'oral, on lui préfère le Perfekt — sauf pour quelques verbes très courants que tu emploieras tout le temps au prétérit, même en parlant : *sein*, *haben* et les verbes de modalité.",
      "Commençons par les indispensables. **sein** → *ich war, du warst, er war, wir waren, ihr wart, sie waren* (j'étais…). **haben** → *ich hatte, du hattest, er hatte, wir hatten…* (j'avais…). Ces deux-là sont à connaître par cœur absolument, car on les utilise sans cesse, à l'oral comme à l'écrit.",
      "Pour les **verbes faibles** (réguliers), le prétérit se forme très simplement : radical + **-te** + terminaison. *machen* → *ich machte, du machtest, er machte, wir machten*. Remarque qu'à la 1ʳᵉ et à la 3ᵉ personne du singulier, il n'y a **aucune terminaison** supplémentaire : *ich machte = er machte*.",
      "Les **verbes forts** (irréguliers), eux, **changent de voyelle** au radical et n'ont pas de -te- : *gehen → ging*, *kommen → kam*, *fahren → fuhr*, *sehen → sah*, *sprechen → sprach*. Là encore, *ich* et *er* sont identiques (*ich ging = er ging*). Ces formes sont à mémoriser : ce sont elles qui reviennent dans toutes les histoires.",
      "Enfin, les **verbes de modalité** au prétérit sont très fréquents à l'oral : *können → konnte*, *müssen → musste*, *wollen → wollte*, *dürfen → durfte*, *sollen → sollte*. « *Ich konnte nicht kommen* » sonne bien plus naturel que le Perfekt. Retiens donc : *sein, haben, modaux* → prétérit même à l'oral ; le reste → Perfekt à l'oral, prétérit à l'écrit."
    ],
    grammaire: [
      { regle: "Le **prétérit** est le temps du **récit écrit**. Réguliers : radical + **-te** (*machen → machte*). Irréguliers : changement de voyelle (*gehen → ging*).", attention: "À l'oral on préfère le **Perfekt** ; mais **sein, haben** et les **modaux** se disent au prétérit même à l'oral (*war, hatte, musste*).", exemples: [{"de":"Gestern machte er seine Hausaufgaben.","fr":"Hier, il a fait ses devoirs."},{"de":"Sie ging früh nach Hause.","fr":"Elle est rentrée tôt à la maison."}], titre: "Le prétérit (temps du récit écrit)", intro: "Réguliers : radical + -te. Irréguliers : radical modifié.",
        tableau: { entetes: ["Infinitif", "Type", "er/sie/es"], lignes: [["machen", "régulier", "machte"], ["arbeiten", "régulier", "arbeitete"], ["gehen", "irrégulier", "ging"], ["kommen", "irrégulier", "kam"], ["müssen", "modal", "musste"], ["können", "modal", "konnte"]] },
        note: "À l'oral on préfère le Perfekt ; le Präteritum domine à l'écrit (récits, presse) et pour sein/haben/modaux." },
      { titre: "sein, haben et les modaux au prétérit",
        regle: "À connaître par cœur — ce sont les seuls qu'on emploie au **prétérit même à l'oral**.",
        intro: "Terminaisons : *–, -st, –, -en, -t, -en* — à *ich* et *er/sie/es*, pas de terminaison.",
        tableau: { entetes: ["Pronom", "sein", "haben", "können"], lignes: [["ich", "war", "hatte", "konnte"], ["du", "warst", "hattest", "konntest"], ["er/sie/es", "war", "hatte", "konnte"], ["wir", "waren", "hatten", "konnten"], ["ihr", "wart", "hattet", "konntet"], ["sie/Sie", "waren", "hatten", "konnten"]] },
        note: "Les modaux perdent l'Umlaut au prétérit : müssen → musste, können → konnte." },
      { titre: "Les verbes forts fréquents",
        regle: "Les verbes forts **changent de voyelle** au prétérit (sans -te). À apprendre par cœur — ce sont eux qui font les récits.",
        intro: "*gehen → ging*, *kommen → kam*, *sehen → sah*.",
        tableau: { entetes: ["Infinitif", "Prétérit (er)", "Sens"], lignes: [["gehen", "ging", "aller"], ["kommen", "kam", "venir"], ["sehen", "sah", "voir"], ["essen", "aß", "manger"], ["nehmen", "nahm", "prendre"], ["sprechen", "sprach", "parler"], ["finden", "fand", "trouver"], ["geben", "gab", "donner"]] },
        note: "À *ich* et *er/sie/es* : forme identique et sans terminaison (ich ging = er ging)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le prétérit régulier se forme avec…", options: ["radical + -te", "ge- + -t", "radical + -st"], correct: 0, explication: "machen → machte." },
      { type: "qcm", consigne: "Prétérit de « können ».", question: "Ich ___ nicht kommen.", options: ["konnte", "kann", "könnte", "gekonnt"], correct: 0, explication: "können → konnte." },
      { type: "trou", consigne: "Complétez (prétérit de machen).", texte: "Gestern {0} er seine Hausaufgaben.", accepte: [["machte"]], indice: "régulier : mach + te" },
      { type: "association", consigne: "Associez infinitif → prétérit.", paires: [{ gauche: "gehen", droite: "ging" }, { gauche: "kommen", droite: "kam" }, { gauche: "sein", droite: "war" }, { gauche: "haben", droite: "hatte" }] },
      { type: "ordre", consigne: "Phrase au prétérit.", mots: ["Er", "ging", "nach", "Hause"], correct: "Er ging nach Hause", traduction: "Il rentra à la maison." },
      { type: "qcm", consigne: "Prétérit de sein (wir).", question: "Wir ___ gestern im Kino.", options: ["waren", "warst", "war", "wart"], correct: 0, explication: "sein prétérit wir → waren." },
      { type: "trou", consigne: "Prétérit fort.", texte: "Er {0} mir ein Buch. (geben)", accepte: [["gab"]], indice: "geben → gab (fort)" },
      { type: "qcm", consigne: "Modal au prétérit.", question: "Prétérit de « müssen » (ich) :", options: ["musste", "müsste", "muss", "gemusst"], correct: 0, explication: "müssen → musste (sans Umlaut)." }
    ]
  },
  a2g02: {
    id: "a2g02",
    einstieg: {"intro":"Regarde l'auxiliaire du passé composé.","exemples":[{"de":"Ich habe gegessen.","fr":"J'ai mangé."},{"de":"Sie ist gekommen.","fr":"Elle est venue."},{"de":"Ich habe eingekauft.","fr":"J'ai fait les courses."}],"question":"Quand utilise-t-on *haben* et quand *sein* ?"},
    merke: ["Perfekt = *haben/sein* + *participe II* en fin de phrase.","*sein* avec les verbes de *mouvement* (gehen, kommen, fahren) et de *changement d'état* (werden).","Participe : *ge-…-t* (régulier), *ge-…-en* (fort) ; séparables : *ein**ge**kauft*."],
    achtung: [{"erreur":"Ich habe gegangen.","correct":"Ich **bin** gegangen.","explication":"*gehen* (mouvement) prend *sein*."},{"erreur":"Ich habe getelefoniert.","correct":"Ich habe **telefoniert**.","explication":"Les verbes en *-ieren* n'ont *pas* de *ge-*."}],
    kontrast: {"titre":"Le passé composé : allemand vs français","similitudes":["Auxiliaire + participe, comme « avoir/être » + participe."],"differences":["L'allemand met le participe en *fin de phrase*.","Le choix *haben/sein* suit d'autres règles (mouvement → sein).","Pas de *ge-* pour les verbes en *-ieren* ni les inséparables (*be-, ver-*)."]}, titre: "Le passé composé (approfondi)", titreDE: "Das Perfekt", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Former le Perfekt", "Choisir haben ou sein", "Participes irréguliers"],
    grammairePoints: ["haben/sein + participe", "Partizip II"],
    exemplesPlus: [{"de":"Ich habe einen Film gesehen.","fr":"J'ai vu un film."},{"de":"Wir sind nach Berlin gefahren.","fr":"Nous sommes allés à Berlin."},{"de":"Hast du schon gegessen?","fr":"As-tu déjà mangé ?"},{"de":"Er hat das Fenster geöffnet.","fr":"Il a ouvert la fenêtre."},{"de":"Sie ist früh aufgestanden.","fr":"Elle s'est levée tôt."}],
    cours: [
      "Tu as déjà rencontré le **Perfekt** au niveau A1 : c'est le **passé de l'oral**, celui qu'on utilise pour raconter sa journée, écrire un message, parler de ses vacances. Il se forme avec un **auxiliaire** (*haben* ou *sein*) conjugué au présent en 2ᵉ position + le **participe passé** (*Partizip II*) rejeté tout à la fin de la phrase.",
      "Le point à approfondir, c'est la **formation du participe**. Verbes **faibles** : *ge- + radical + -t* (*machen → gemacht*, *spielen → gespielt*, *arbeiten → gearbeitet*). Verbes **forts** : souvent *ge- + radical (modifié) + -en* (*sprechen → gesprochen*, *trinken → getrunken*, *schreiben → geschrieben*). Ces participes forts s'apprennent verbe par verbe.",
      "Attention à trois familles **sans ge-**. Les verbes en **-ieren** (*studieren → studiert*, *telefonieren → telefoniert*). Les verbes à **préfixe inséparable** (be-, ver-, er-, ent-…) : *verstehen → verstanden*, *bezahlen → bezahlt*. Et les verbes à **préfixe séparable**, où le *ge-* se glisse **au milieu** : *aufstehen → aufgestanden*, *einkaufen → eingekauft*.",
      "Le choix **haben / sein** se confirme : *sein* avec les verbes de **mouvement** (gehen, fahren, fliegen, kommen) et de **changement d'état** (aufstehen, einschlafen, werden) ; *haben* avec tous les autres, en particulier les verbes ayant un objet à l'accusatif. « *Ich habe einen Film gesehen* » mais « *Ich bin ins Kino gegangen* ».",
      "Astuce de placement : l'auxiliaire et le participe forment une **parenthèse** autour de la phrase. Tout le reste (temps, lieu, objets) se loge **entre** les deux : « *Ich **habe** gestern mit Anna im Park Fußball **gespielt*** ». Cette structure « auxiliaire … participe » est l'une des plus caractéristiques de l'allemand."
    ],
    grammaire: [
      { regle: "**Perfekt** = **haben/sein** (2ᵉ position) + **participe II** à la fin. Mouvement/changement d'état → **sein** ; sinon → **haben**.", attention: "Verbes en **-ieren** : **pas** de *ge-* (*studieren → studiert*). Séparables : *ge-* au milieu (*eingekauft*).", exemples: [{"de":"Ich habe einen Film gesehen.","fr":"J'ai vu un film."},{"de":"Wir sind nach Hause gefahren.","fr":"Nous sommes rentrés à la maison."}], titre: "Auxiliaire + participe (à la fin)", intro: "Mouvement / changement d'état → sein. Sinon → haben.",
        tableau: { entetes: ["Infinitif", "Auxiliaire", "Participe II"], lignes: [["machen", "haben", "gemacht"], ["sehen", "haben", "gesehen"], ["gehen", "sein", "gegangen"], ["fahren", "sein", "gefahren"], ["bleiben", "sein", "geblieben"], ["aufstehen", "sein", "aufgestanden"]] },
        note: "Verbes en -ieren : pas de ge- (studieren → studiert). Séparables : ge- au milieu (eingekauft)." },
      { titre: "Former le participe II (les 5 cas)",
        regle: "Le participe suit **5 schémas** selon le type de verbe.",
        intro: "*machen → gemacht* · *sehen → gesehen* · *studieren → studiert* · *verstehen → verstanden* · *einkaufen → eingekauft*.",
        tableau: { entetes: ["Type", "Schéma", "Exemple"], lignes: [["faible", "ge- + radical + -t", "machen → gemacht"], ["fort", "ge- + radical + -en", "sehen → gesehen"], ["-ieren", "PAS de ge-", "studieren → studiert"], ["inséparable (be-/ver-)", "PAS de ge-", "verstehen → verstanden"], ["séparable", "ge- au milieu", "einkaufen → eingekauft"]] },
        note: "Les verbes forts changent souvent de voyelle (trinken → getrunken, sprechen → gesprochen)." },
      { titre: "Participes forts fréquents",
        regle: "Les verbes forts sont à mémoriser un par un — voici les plus courants (souvent avec changement de voyelle).",
        intro: "Apprends l'infinitif + l'auxiliaire + le participe ensemble.",
        tableau: { entetes: ["Infinitif", "Aux.", "Participe II"], lignes: [["trinken", "haben", "getrunken"], ["sprechen", "haben", "gesprochen"], ["schreiben", "haben", "geschrieben"], ["nehmen", "haben", "genommen"], ["essen", "haben", "gegessen"], ["kommen", "sein", "gekommen"], ["fliegen", "sein", "geflogen"], ["werden", "sein", "geworden"]] },
        note: "Mouvement / changement d'état → sein (gekommen, geflogen, geworden)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez l'auxiliaire.", question: "Ich ___ ins Kino gegangen.", options: ["bin", "habe", "war", "hatte"], correct: 0, explication: "gehen (mouvement) → sein." },
      { type: "qcm", consigne: "Participe de « sehen ».", question: "Ich habe einen Film ___.", options: ["gesehen", "geseht", "gesieht", "sah"], correct: 0, explication: "sehen → gesehen (irrégulier)." },
      { type: "trou", consigne: "Complétez (auxiliaire).", texte: "Wir {0} Pizza gegessen und dann {1} wir nach Hause gefahren.", accepte: [["haben"], ["sind"]], indice: "essen → haben ; fahren → sein" },
      { type: "association", consigne: "Associez → participe.", paires: [{ gauche: "fahren", droite: "gefahren" }, { gauche: "bleiben", droite: "geblieben" }, { gauche: "studieren", droite: "studiert" }, { gauche: "einkaufen", droite: "eingekauft" }] },
      { type: "ordre", consigne: "Phrase au Perfekt.", mots: ["Ich", "habe", "einen", "Film", "gesehen"], correct: "Ich habe einen Film gesehen", traduction: "J'ai vu un film." },
      { type: "qcm", consigne: "Verbe en -ieren.", question: "Participe de « telefonieren » :", options: ["telefoniert", "getelefoniert", "telefonierte", "telefonieren"], correct: 0, explication: "-ieren : pas de ge- → telefoniert." },
      { type: "trou", consigne: "Séparable (ge- au milieu).", texte: "Ich bin um sieben auf{0}. (aufstehen)", accepte: [["gestanden"]], indice: "aufstehen → aufgestanden" },
      { type: "qcm", consigne: "Participe fort.", question: "Participe de « trinken » :", options: ["getrunken", "getrinkt", "getrank", "trinkte"], correct: 0, explication: "trinken → getrunken (fort)." }
    ]
  },
  a2g03: {
    id: "a2g03",
    einstieg: {"intro":"Observe comment l'article change selon la fonction du nom.","exemples":[{"de":"Der Mann gibt dem Kind den Ball.","fr":"L'homme donne le ballon à l'enfant."},{"de":"Ich sehe die Frau.","fr":"Je vois la femme."},{"de":"Ich fahre mit dem Auto.","fr":"Je vais en voiture."}],"question":"Comment l'article change-t-il selon la fonction (sujet, COD, COI) ?"},
    merke: ["Nominatif (sujet) : der/die/das. Accusatif (COD) : *den*/die/das.","Datif (COI, « à qui ») : *dem/der/dem*, pluriel *den* + nom en *-n*.","Seul le masculin change à l'accusatif (der → den)."],
    achtung: [{"erreur":"Ich gebe der Mann das Buch.","correct":"Ich gebe **dem** Mann das Buch.","explication":"Le destinataire est au *datif* : dem Mann."},{"erreur":"Ich sehe der Mann.","correct":"Ich sehe **den** Mann.","explication":"Le COD masculin est à l'accusatif : den Mann."}],
    kontrast: {"titre":"La déclinaison : allemand vs français","similitudes":["Sujet, COD et « à qqn » existent dans les deux langues."],"differences":["L'allemand marque les cas sur l'*article* (der/den/dem).","Le datif remplace « à + article ».","Connaître le *genre* est indispensable pour décliner."]}, titre: "Le groupe de noms (déclinaison)", titreDE: "Die Nomengruppe", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Décliner l'article selon le cas", "Reconnaître nominatif / accusatif / datif"],
    grammairePoints: ["Déclinaison de l'article", "Nom./Acc./Dat."],
    exemplesPlus: [{"de":"Ich kenne den neuen Lehrer.","fr":"Je connais le nouveau professeur."},{"de":"Das ist das Auto meines Bruders.","fr":"C'est la voiture de mon frère."},{"de":"Wir helfen den Kindern.","fr":"Nous aidons les enfants."},{"de":"Sie gibt der Frau das Buch.","fr":"Elle donne le livre à la femme."},{"de":"Der Hund des Nachbarn bellt laut.","fr":"Le chien du voisin aboie fort."}],
    cours: [
      "Au niveau A1, tu as appris les articles cas par cas. Il est temps de les voir **ensemble**, sous forme de **déclinaison** : le tableau complet des formes de l'article selon le **genre** (masculin, féminin, neutre, pluriel) et le **cas** (la fonction dans la phrase).",
      "Voici l'**article défini**. Nominatif : *der, die, das, die*. Accusatif : *den, die, das, die*. Datif : *dem, der, dem, den (+n au nom)*. Observe la logique : seul le **masculin** bouge entre nominatif et accusatif (*der → den*) ; et au **datif**, presque tout change. C'est ce tableau qu'il faut finir par connaître les yeux fermés.",
      "L'**article indéfini** suit exactement le même schéma de terminaisons : *ein/eine/ein* (nom.), *einen/eine/ein* (acc.), *einem/einer/einem* (dat.). Bonne nouvelle : les **possessifs** (*mein, dein, sein, ihr…*) et la négation **kein** se déclinent **comme ein**. Apprends *ein* → tu connais déjà *mein* et *kein*.",
      "À quoi sert cette déclinaison ? À indiquer **la fonction des mots**, ce qui permet à l'allemand de déplacer les groupes sans ambiguïté. La terminaison de l'article dit « je suis le sujet » (nominatif), « je suis l'objet direct » (accusatif) ou « je suis l'objet indirect / après certaines prépositions » (datif).",
      "Conseil de méthode : ne cherche pas à tout retenir d'un coup. Mémorise d'abord la **colonne du datif** (*dem / der / dem / den*), la plus utile et la plus nouvelle, puis appuie-toi sur la règle « seul le masculin change à l'accusatif ». Avec ces deux repères, l'essentiel est couvert."
    ],
    grammaire: [
      { regle: "L'**article change selon le cas** : nominatif (sujet), accusatif (COD), datif (COI). Le plus mobile est le masculin : *der → den → dem*.", attention: "Au **datif pluriel**, le nom prend un **-n** (*den Kindern*).", exemples: [{"de":"Der Mann gibt dem Kind einen Apfel.","fr":"L'homme donne une pomme à l'enfant."},{"de":"Ich sehe die Frau.","fr":"Je vois la femme."}], titre: "L'article défini selon le cas", intro: "L'article change selon la fonction du nom dans la phrase.",
        tableau: { entetes: ["Cas", "masculin", "féminin", "neutre", "pluriel"], lignes: [["Nominatif (sujet)", "der", "die", "das", "die"], ["Accusatif (COD)", "den", "die", "das", "die"], ["Datif (COI)", "dem", "der", "dem", "den +n"]] },
        note: "Indéfini : ein/eine → einen (m. acc.) → einem/einer (datif). Au pluriel datif, le nom prend souvent un -n." },
      { titre: "Trouver le bon cas (méthode)",
        regle: "Pour choisir le cas : **sujet** → nominatif (Wer?) ; **COD** → accusatif (Wen?) ; **à qui** → datif (Wem?) ; après une **préposition** → le cas qu'elle impose.",
        intro: "*Der Mann* (sujet) *gibt* *dem Kind* (à qui) *den Ball* (quoi).",
        tableau: { entetes: ["Indice", "Question", "Cas"], lignes: [["qui fait l'action", "Wer?", "Nominatif"], ["ce qui subit", "Wen? / Was?", "Accusatif"], ["le destinataire", "Wem?", "Datif"], ["après für/ohne/durch", "—", "Accusatif"], ["après mit/zu/bei", "—", "Datif"]] },
        note: "Le verbe et la préposition décident : helfen → datif ; für → accusatif." },
      { titre: "Les possessifs se déclinent comme ein",
        regle: "**mein, dein, sein, ihr, unser, euer, Ihr** prennent les mêmes terminaisons que *ein/kein*.",
        intro: "*mein Bruder → meinen Bruder → meinem Bruder → meines Bruders*.",
        tableau: { entetes: ["Cas", "Masculin", "Féminin", "Neutre", "Pluriel"], lignes: [["Nominatif", "mein", "meine", "mein", "meine"], ["Accusatif", "meinen", "meine", "mein", "meine"], ["Datif", "meinem", "meiner", "meinem", "meinen"], ["Génitif", "meines", "meiner", "meines", "meiner"]] },
        note: "Apprends *ein* → tu connais *mein, dein, kein*… (mêmes terminaisons)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Quel cas pour le COD ?", options: ["Accusatif", "Datif", "Nominatif"], correct: 0, explication: "Le complément d'objet direct = accusatif." },
      { type: "qcm", consigne: "Datif.", question: "Ich gebe ___ Mann das Buch.", options: ["dem", "den", "der", "das"], correct: 0, explication: "der Mann au datif (COI) → dem." },
      { type: "trou", consigne: "Complétez (den/dem).", texte: "Ich sehe {0} Hund und gebe {1} Hund Wasser.", accepte: [["den"], ["dem"]], indice: "COD → accusatif ; COI → datif" },
      { type: "association", consigne: "Associez cas → article masculin.", paires: [{ gauche: "Nominatif", droite: "der" }, { gauche: "Accusatif", droite: "den" }, { gauche: "Datif", droite: "dem" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je donne le livre à la femme.", accepte: ["Ich gebe der Frau das Buch"], aide: "der Frau (datif) + das Buch (acc.)" },
      { type: "qcm", consigne: "Possessif à l'accusatif.", question: "Ich sehe ___ Bruder. (mon frère, COD)", options: ["meinen", "mein", "meinem", "meines"], correct: 0, explication: "mein + masc. acc. → meinen." },
      { type: "trou", consigne: "Possessif au datif.", texte: "Ich helfe {0} Schwester. (ma sœur)", accepte: [["meiner"]], indice: "mein + fém. datif → meiner" },
      { type: "qcm", consigne: "Quel cas ?", question: "« Ich danke dem Lehrer » — dem Lehrer est…", options: ["datif", "accusatif", "nominatif"], correct: 0, explication: "danken → datif." }
    ]
  },
  a2g04: {
    id: "a2g04",
    einstieg: {"intro":"Observe les différentes négations.","exemples":[{"de":"Ich kenne ihn nicht.","fr":"Je ne le connais pas."},{"de":"Ich habe nichts gesehen.","fr":"Je n'ai rien vu."},{"de":"Niemand ist gekommen.","fr":"Personne n'est venu."}],"question":"Où se place *nicht*, et quels autres mots négatifs existe-t-il ?"},
    merke: ["*nicht* se place avant l'élément nié, ou en *fin* s'il nie tout le verbe.","Mots négatifs : *nichts* (rien), *niemand* (personne), *nie* (jamais), *kein* (aucun).","Une seule négation suffit."],
    achtung: [{"erreur":"Ich habe nicht nichts.","correct":"Ich habe **nichts**.","explication":"Pas de double négation : *nichts* seul suffit."},{"erreur":"Ich habe nicht ein Auto.","correct":"Ich habe **kein** Auto.","explication":"Devant un nom : *kein*, pas *nicht ein*."}],
    kontrast: {"titre":"La négation (approfondie) : allemand vs français","similitudes":["Mots équivalents : rien/nichts, personne/niemand."],"differences":["L'allemand n'a *pas* de double négation (≠ « ne… personne »).","La place de *nicht* dépend de ce qu'on nie.","*kein* (nom) vs *nicht* (le reste)."]}, titre: "La négation (approfondie)", titreDE: "Die Verneinung", theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Placer nicht correctement", "Utiliser kein, nichts, niemand, nie"],
    grammairePoints: ["nicht / kein", "nichts, niemand, nie"],
    exemplesPlus: [{"de":"Ich habe niemanden gesehen.","fr":"Je n'ai vu personne."},{"de":"Er sagt nie die Wahrheit.","fr":"Il ne dit jamais la vérité."},{"de":"Wir haben kein Geld mehr.","fr":"Nous n'avons plus d'argent."},{"de":"Das interessiert mich gar nicht.","fr":"Ça ne m'intéresse pas du tout."},{"de":"— Hast du nichts gehört? — Doch!","fr":"— Tu n'as rien entendu ? — Si !"}],
    cours: [
      "Tu connais déjà le duo **nicht / kein**. Au niveau A2, on précise la **place exacte de nicht** et on enrichit la palette avec des mots plus expressifs : *nichts* (rien), *niemand* (personne), *nie / niemals* (jamais), *nirgendwo* (nulle part), *kein… mehr* (ne… plus) et *noch nicht* (pas encore).",
      "Rappel du choix de base : **kein** nie un nom qui aurait *ein* ou pas d'article (« *Ich habe kein Geld* ») ; **nicht** nie tout le reste — un verbe, un adjectif, un nom défini. Nuance fine : *nicht* se place **à la fin** s'il nie toute la phrase, mais **juste devant** l'élément précis qu'il vise (adjectif, complément de lieu, infinitif).",
      "Les pronoms de négation sont très pratiques. *nichts* s'oppose à *etwas* : « *Ich sehe nichts* ». *niemand* s'oppose à *jemand* : « *Niemand ist da* ». *nie* s'oppose à *immer* : « *Ich gehe nie ins Kino* ». Ces mots se suffisent à eux-mêmes : on n'ajoute **pas** *nicht* en plus (pas de double négation comme en français).",
      "Deux expressions très courantes. **kein… mehr** = « ne… plus » : « *Ich habe kein Geld mehr* ». **nicht mehr** pour les verbes : « *Ich rauche nicht mehr* ». Et **noch nicht** = « pas encore » : « *Ich bin noch nicht fertig* ».",
      "N'oublie pas le précieux **doch**, qui contredit une question ou une affirmation négative : « *— Du magst keinen Kaffee? — Doch!* » (— Tu n'aimes pas le café ? — Si !). Maîtriser ces nuances rend ta négation à la fois correcte et naturelle."
    ],
    grammaire: [
      { exemples: [{"de":"Ich habe keine Geschwister.","fr":"Je n'ai pas de frères et sœurs."},{"de":"Niemand war zu Hause.","fr":"Personne n'était à la maison."}], regle: "**kein** nie un **nom** (sans article / indéfini) ; **nicht** nie le reste. Mots spécifiques : **nichts** (rien), **niemand** (personne), **nie** (jamais).", attention: "**niemand** et **nichts** sont déjà négatifs : pas de double négation (*Ich sehe **nichts***).", titre: "Les mots de négation", intro: "kein nie un nom ; nicht le reste ; et des mots spécifiques.",
        tableau: { entetes: ["Mot", "Sens", "Exemple"], lignes: [["kein", "aucun/pas de", "Ich habe kein Auto."], ["nicht", "ne… pas", "Ich komme nicht."], ["nichts", "rien", "Ich sehe nichts."], ["niemand", "personne", "Niemand ist da."], ["nie", "jamais", "Ich rauche nie."]] },
        note: "« nicht » se place en général à la fin, mais AVANT un adjectif/lieu : « Das ist nicht gut »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "___ ist im Büro. (personne)", options: ["Niemand", "Nichts", "Nicht", "Kein"], correct: 0, explication: "niemand = personne." },
      { type: "qcm", consigne: "nicht ou kein ?", question: "Ich habe ___ Hunger.", options: ["keinen", "nicht", "nichts", "nie"], correct: 0, explication: "der Hunger (m.) sans article → keinen." },
      { type: "trou", consigne: "Complétez.", texte: "Ich sehe {0}. (rien)", accepte: [["nichts"]], indice: "rien" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "nichts", droite: "rien" }, { gauche: "niemand", droite: "personne" }, { gauche: "nie", droite: "jamais" }, { gauche: "kein", droite: "aucun" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je ne fume jamais.", accepte: ["Ich rauche nie"], aide: "nie" }
    ]
  },
  a2g05: {
    id: "a2g05",
    einstieg: {"intro":"Observe la place du verbe dans la 2e proposition.","exemples":[{"de":"Ich bleibe zu Hause, weil es regnet.","fr":"Je reste à la maison parce qu'il pleut."},{"de":"Wenn ich Zeit habe, lese ich.","fr":"Quand j'ai le temps, je lis."},{"de":"Ich weiß, dass du kommst.","fr":"Je sais que tu viens."}],"question":"Où va le verbe dans la subordonnée, et si elle est en tête ?"},
    merke: ["Dans une *subordonnée* (weil, dass, wenn, ob…), le verbe conjugué va à la *fin*.","Subordonnée en *tête* → la principale commence par son *verbe* : *Wenn…, **lese** ich*.","Virgule obligatoire entre les deux propositions."],
    achtung: [{"erreur":"…, weil ich habe keine Zeit.","correct":"…, weil ich keine Zeit **habe**.","explication":"Verbe conjugué en *fin* de subordonnée."},{"erreur":"Wenn ich Zeit habe, ich lese.","correct":"Wenn ich Zeit habe, **lese ich**.","explication":"Après une subordonnée en tête, la principale commence par le verbe."}],
    kontrast: {"titre":"Subordonnées : allemand vs français","similitudes":["Conjonctions équivalentes (parce que/weil, que/dass)."],"differences":["Le verbe part en *fin* de subordonnée allemande.","La subordonnée en tête provoque l'*inversion* sujet-verbe.","La virgule est obligatoire devant la subordonnée."]}, titre: "Principales et subordonnées", titreDE: "Haupt- und Nebensätze", theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Distinguer principale et subordonnée", "Placer le verbe (2e position vs fin)"],
    grammairePoints: ["weil, dass, wenn, obwohl", "Ordre des mots"],
    exemplesPlus: [{"de":"Ich glaube, dass er recht hat.","fr":"Je crois qu'il a raison."},{"de":"Wir bleiben hier, obwohl es regnet.","fr":"Nous restons ici bien qu'il pleuve."},{"de":"Wenn ich Zeit habe, helfe ich dir.","fr":"Si j'ai le temps, je t'aide."},{"de":"Sie weiß nicht, ob er kommt.","fr":"Elle ne sait pas s'il vient."},{"de":"Weil ich müde war, bin ich früh ins Bett gegangen.","fr":"Comme j'étais fatigué, je me suis couché tôt."}],
    cours: [
      "Une **phrase principale** (*Hauptsatz*) peut tenir seule ; une **subordonnée** (*Nebensatz*) en dépend et commence par une conjonction de subordination. La grande affaire de l'allemand, c'est que ces deux propositions **ne placent pas le verbe au même endroit**. Bien le comprendre débloque des phrases complexes et naturelles.",
      "Dans la **principale**, la règle d'or tient : le **verbe conjugué est en 2ᵉ position**. Dans la **subordonnée**, au contraire, le **verbe conjugué part tout à la fin** : « *Ich bleibe zu Hause, **weil** ich müde **bin*** ». Les conjonctions qui déclenchent ce rejet sont *weil, dass, wenn, ob, obwohl, als*.",
      "Quand la **subordonnée est en tête** de la phrase, elle compte comme **premier élément** : la principale qui suit doit donc commencer par son verbe (2ᵉ position). On obtient le schéma typique « …, verbe… » : « ***Weil** ich müde bin, **bleibe** ich zu Hause* ». Deux verbes se retrouvent côte à côte au centre, autour de la virgule.",
      "Ne confonds pas avec les **conjonctions de coordination** (*und, oder, aber, denn, sondern*), qui **ne renvoient pas** le verbe à la fin : « *Ich bleibe zu Hause, **denn** ich **bin** müde* ». *denn* et *weil* ont le même sens (« car / parce que ») mais une grammaire opposée — c'est l'erreur classique à surveiller.",
      "Méthode : repère la conjonction et demande-toi si elle est de subordination (→ verbe à la fin) ou de coordination (→ rien ne change). Entraîne-toi surtout avec *weil*, *dass* et *wenn* : une fois l'automatisme « subordonnée = verbe à la fin » acquis, il te servira jusqu'au niveau C2."
    ],
    grammaire: [
      { exemples: [{"de":"Ich bleibe heute, weil ich krank bin.","fr":"Je reste aujourd'hui parce que je suis malade."},{"de":"Obwohl es regnet, gehe ich spazieren.","fr":"Bien qu'il pleuve, je vais me promener."}], regle: "Les conjonctions de **subordination** (*weil, dass, wenn, obwohl*) rejettent le **verbe à la FIN**. Les conjonctions de **coordination** (*und, aber, denn, oder*) gardent le verbe en **2ᵉ** position.", attention: "Si la **subordonnée est en tête**, la principale **commence par le verbe** : *Weil ich müde bin, **bleibe** ich zu Hause*.", titre: "Subordonnées : verbe à la FIN", intro: "weil, dass, wenn, obwohl introduisent une subordonnée → verbe conjugué à la fin.",
        tableau: { entetes: ["Conjonction", "Sens", "Exemple"], lignes: [["weil", "parce que", "…, weil ich müde bin."], ["dass", "que", "Ich denke, dass es gut ist."], ["wenn", "si / quand", "…, wenn ich Zeit habe."], ["obwohl", "bien que", "…, obwohl es regnet."]] },
        schemas: [
          { legende: "Principale : verbe en 2e position.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "bleibe", r: "verbe (2)", c: "verbe" }, { m: "zu Hause", r: "complément", c: "objet" }] },
          { legende: "Subordonnée (weil) : le verbe est rejeté à la FIN.", mots: [{ m: "…, weil", r: "connecteur", c: "conj" }, { m: "ich", r: "sujet", c: "sujet" }, { m: "müde", r: "complément", c: "objet" }, { m: "bin", r: "verbe (fin)", c: "fin" }] }
        ],
        note: "Si la subordonnée est en tête, la principale commence par le verbe : « Weil ich müde bin, bleibe ich zu Hause »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Avec « obwohl », le verbe va…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "obwohl = subordination → verbe à la fin." },
      { type: "qcm", consigne: "Complétez.", question: "Ich bleibe zu Hause, weil es ___.", options: ["regnet", "regnet nicht heute", "es regnet", "regnen"], correct: 0, explication: "verbe à la fin : … weil es regnet." },
      { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Ich glaube, dass er morgen {0}. (kommen)", accepte: [["kommt"]], indice: "dass → verbe à la fin" },
      { type: "ordre", consigne: "Construisez la subordonnée.", mots: ["weil", "ich", "müde", "bin"], correct: "weil ich müde bin", traduction: "parce que je suis fatigué" },
      { type: "qcm", consigne: "Choisissez la conjonction.", question: "Ich gehe spazieren, ___ es regnet. (bien que)", options: ["obwohl", "weil", "dass", "wenn"], correct: 0, explication: "obwohl = bien que." }
    ]
  },
  a2g06: {
    id: "a2g06",
    einstieg: {"intro":"Ces verbes ont deux objets. Observe leur ordre.","exemples":[{"de":"Ich gebe dir das Buch.","fr":"Je te donne le livre."},{"de":"Er schenkt seiner Mutter Blumen.","fr":"Il offre des fleurs à sa mère."},{"de":"Ich zeige dem Kind das Bild.","fr":"Je montre l'image à l'enfant."}],"question":"Dans quel ordre se placent le datif (à qui) et l'accusatif (quoi) ?"},
    merke: ["Verbes à deux objets : datif (à qui) + accusatif (quoi) : *geben, schenken, zeigen, bringen*.","Ordre par défaut : *datif puis accusatif*.","Si l'accusatif est un *pronom*, il passe devant : *Ich gebe es dem Kind*."],
    achtung: [{"erreur":"Er schenkt seine Mutter Blumen.","correct":"Er schenkt **seiner** Mutter Blumen.","explication":"Le destinataire est au datif : seiner Mutter."},{"erreur":"Ich gebe das Buch dir.","correct":"Ich gebe **dir das Buch**.","explication":"Datif (dir) avant accusatif, sauf pronom accusatif."}],
    kontrast: {"titre":"Double complément : allemand vs français","similitudes":["« donner qqch à qqn » existe dans les deux langues."],"differences":["L'allemand marque le datif sur le déterminant (dem, seiner).","Ordre datif → accusatif.","Un pronom accusatif passe devant le datif."]}, titre: "Verbes avec datif et accusatif", titreDE: "Verben mit Dativ und Akkusativ", theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Reconnaître les verbes à datif", "Construire « donner qqch à qqn »"],
    grammairePoints: ["helfen, danken (datif)", "geben jdm etwas"],
    exemplesPlus: [{"de":"Ich schenke meiner Mutter Blumen.","fr":"J'offre des fleurs à ma mère."},{"de":"Er zeigt dem Touristen den Weg.","fr":"Il montre le chemin au touriste."},{"de":"Kannst du mir das Salz geben?","fr":"Peux-tu me passer le sel ?"},{"de":"Sie erklärt den Schülern die Regel.","fr":"Elle explique la règle aux élèves."},{"de":"Ich bringe dir einen Kaffee.","fr":"Je t'apporte un café."}],
    cours: [
      "Certains verbes se construisent avec **deux compléments** : une **personne au datif** (à qui ?) et une **chose à l'accusatif** (quoi ?). Ce sont les verbes de don et de communication : *geben* (donner), *schenken* (offrir), *zeigen* (montrer), *bringen* (apporter), *schicken* (envoyer), *erklären* (expliquer), *empfehlen* (recommander).",
      "Le modèle est : *sujet + verbe + datif (personne) + accusatif (chose)*. « *Ich gebe **dem Kind** (datif) **einen Apfel** (accusatif)* » (je donne une pomme à l'enfant). La personne qui reçoit est au datif, l'objet donné est à l'accusatif. Mémorise un exemple type et décline-le.",
      "L'**ordre des deux objets** suit une règle simple avec des noms : **datif avant accusatif** (la personne avant la chose). Mais dès qu'un objet devient un **pronom**, il **passe devant** : « *Ich gebe **es** dem Kind* » ; et si les deux sont pronoms, l'accusatif passe en premier : « *Ich gebe **es ihm*** ».",
      "Autre famille importante : les **verbes à datif seul**, sans objet à l'accusatif. Les plus fréquents : *helfen* (aider), *danken* (remercier), *gefallen* (plaire), *gehören* (appartenir), *antworten* (répondre), *folgen* (suivre). « *Ich helfe **dir*** », « *Das Buch gehört **mir*** ». À apprendre comme « verbes à datif ».",
      "Le réflexe à installer : quand tu apprends un verbe, note **sa construction** (datif ? accusatif ? les deux ? + préposition ?). C'est aussi important que le sens, car c'est elle qui détermine la forme des mots qui suivent."
    ],
    grammaire: [
      { exemples: [{"de":"Ich schenke meiner Mutter Blumen.","fr":"J'offre des fleurs à ma mère."},{"de":"Er zeigt dem Kind das Foto.","fr":"Il montre la photo à l'enfant."}], regle: "Certains verbes prennent **datif (à qui)** + **accusatif (quoi)** : *geben, schenken, zeigen, empfehlen*. Ordre habituel (deux noms) : **datif avant accusatif**.", attention: "Verbes **toujours + datif seul** : *helfen, danken, gefallen, gehören* (*Ich helfe **dir***).", titre: "Datif seul, ou datif + accusatif", intro: "Certains verbes demandent le datif ; d'autres datif (personne) + accusatif (chose).",
        tableau: { entetes: ["Verbe", "Construction", "Exemple"], lignes: [["helfen", "+ datif", "Ich helfe dir."], ["danken", "+ datif", "Ich danke Ihnen."], ["gefallen", "+ datif", "Das gefällt mir."], ["geben", "datif + accusatif", "Ich gebe dem Kind einen Apfel."], ["schenken", "datif + accusatif", "Er schenkt ihr Blumen."]] },
        schemas: [
          { legende: "Donner : à QUI (datif) + QUOI (accusatif).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "gebe", r: "verbe (2)", c: "verbe" }, { m: "dem Kind", r: "datif (à qui)", c: "objet" }, { m: "einen Apfel", r: "accusatif (quoi)", c: "fin" }] }
        ],
        note: "Ordre habituel : datif (personne) AVANT accusatif (chose), quand les deux sont des noms." },
      { titre: "L'ordre des objets (avec pronoms)",
        regle: "Deux **noms** : datif + accusatif. Deux **pronoms** : **accusatif + datif**. **Mixte** : le pronom passe en premier.",
        intro: "*Ich gebe dem Kind das Buch* → *Ich gebe **es ihm*** → *Ich gebe **es** dem Kind*.",
        tableau: { entetes: ["Combinaison", "Ordre", "Exemple"], lignes: [["2 noms", "datif + accusatif", "Ich gebe dem Kind das Buch."], ["2 pronoms", "accusatif + datif", "Ich gebe es ihm."], ["pronom + nom", "pronom d'abord", "Ich gebe es dem Kind."]] },
        note: "Règle simple : le pronom passe devant ; entre deux pronoms, l'accusatif gagne." },
      { titre: "Les pronoms au datif",
        regle: "Les pronoms ont une forme au **datif** (« à moi, à toi… »), très fréquente avec ces verbes.",
        intro: "*Gib **mir** das Buch* · *Ich helfe **dir*** · *Das gehört **ihm***.",
        tableau: { entetes: ["Nominatif", "Accusatif", "Datif"], lignes: [["ich", "mich", "mir"], ["du", "dich", "dir"], ["er / es", "ihn / es", "ihm"], ["sie (elle)", "sie", "ihr"], ["wir", "uns", "uns"], ["ihr", "euch", "euch"], ["sie / Sie", "sie / Sie", "ihnen / Ihnen"]] },
        note: "Datif : mir, dir, ihm, ihr, uns, euch, ihnen (Ihnen poli)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« helfen » se construit avec…", options: ["le datif", "l'accusatif", "le nominatif"], correct: 0, explication: "helfen + datif : Ich helfe dir." },
      { type: "qcm", consigne: "Complétez (datif).", question: "Das Buch gefällt ___. (à moi)", options: ["mir", "mich", "ich", "meiner"], correct: 0, explication: "gefallen + datif → mir." },
      { type: "trou", consigne: "Complétez (datif + accusatif).", texte: "Ich gebe {0} Kind {1} Apfel.", accepte: [["dem"], ["einen"]], indice: "à qui (datif) / quoi (accusatif)" },
      { type: "association", consigne: "Associez le verbe et son cas.", paires: [{ gauche: "helfen", droite: "datif" }, { gauche: "danken", droite: "datif" }, { gauche: "sehen", droite: "accusatif" }, { gauche: "gefallen", droite: "datif" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je t'aide.", accepte: ["Ich helfe dir"], aide: "helfen + datif" },
      { type: "qcm", consigne: "Deux pronoms.", question: "« Je le lui donne » = Ich gebe…", options: ["es ihm", "ihm es", "ihn ihm", "ihm ihn"], correct: 0, explication: "2 pronoms → accusatif (es) avant datif (ihm)." },
      { type: "trou", consigne: "Pronom au datif.", texte: "Kannst du {0} helfen? (à moi)", accepte: [["mir"]], indice: "helfen + datif → mir" },
      { type: "qcm", consigne: "Pronom au datif.", question: "Das Buch gehört ___. (à eux)", options: ["ihnen", "sie", "sich", "ihr"], correct: 0, explication: "gehören + datif → ihnen." }
    ]
  },
  a2g07: {
    id: "a2g07",
    einstieg: {"intro":"Comment être poli et exprimer une hypothèse ?","exemples":[{"de":"Ich hätte gern einen Kaffee.","fr":"Je voudrais un café."},{"de":"Wenn ich Zeit hätte, würde ich kommen.","fr":"Si j'avais le temps, je viendrais."},{"de":"Könnten Sie mir helfen?","fr":"Pourriez-vous m'aider ?"}],"question":"Quelles formes expriment la politesse et l'irréel ?"},
    merke: ["Konjunktiv II = *politesse, souhait, hypothèse irréelle*.","Formes clés : *wäre*, *hätte*, *würde + infinitif*, *könnte/möchte*.","Hypothèse : *wenn… + Konjunktiv II* dans les deux propositions."],
    achtung: [{"erreur":"Ich will einen Kaffee.","correct":"Ich **hätte gern** einen Kaffee.","explication":"Pour être poli, on évite *ich will* ; on dit *ich hätte gern* / *möchte*."},{"erreur":"Wenn ich Zeit habe, würde ich kommen.","correct":"Wenn ich Zeit **hätte**, würde ich kommen.","explication":"L'hypothèse irréelle exige le Konjunktiv II aussi dans le *wenn*."}],
    kontrast: {"titre":"Le conditionnel : allemand vs français","similitudes":["Exprime souhait, politesse, hypothèse."],"differences":["L'allemand utilise souvent *würde + infinitif* (≈ « -rais »).","*möchte* (voudrais) n'a pas d'équivalent simple.","Dans *wenn* (si), on met le Konjunktiv II, pas l'imparfait."]}, titre: "Le subjonctif II (conditionnel)", titreDE: "Konjunktiv II", theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Exprimer l'irréel et le souhait", "Faire une demande polie"],
    grammairePoints: ["würde + Inf.", "wäre, hätte, könnte"],
    exemplesPlus: [{"de":"Ich hätte gern einen Tee.","fr":"Je voudrais un thé."},{"de":"Könnten Sie mir helfen?","fr":"Pourriez-vous m'aider ?"},{"de":"Wenn ich reich wäre, würde ich reisen.","fr":"Si j'étais riche, je voyagerais."},{"de":"Du solltest mehr schlafen.","fr":"Tu devrais dormir plus."},{"de":"Das wäre wirklich schön.","fr":"Ce serait vraiment bien."}],
    cours: [
      "Le **Konjunktiv II** est le mode de l'**irréel** et de la **politesse** : il sert à exprimer ce qui n'est pas réel (« si j'étais riche… »), un souhait, un conseil ou une demande polie. Il correspond souvent au **conditionnel** français.",
      "La forme la plus courante et la plus facile : **würde + infinitif** (rejeté à la fin), exactement comme « would + verbe » en anglais. « *Ich würde gern nach Italien fahren* » (j'aimerais bien aller en Italie). Cette construction marche avec presque tous les verbes et te permet de t'exprimer tout de suite.",
      "Mais quelques verbes très fréquents ont une **forme propre** plus élégante, à connaître par cœur : *sein → wäre* (« je serais »), *haben → hätte* (« j'aurais »), et les modaux *können → könnte*, *müssen → müsste*, *dürfen → dürfte*, *sollen → sollte*. Avec eux, on n'utilise **pas** *würde* : on dit « *Ich hätte gern…* ».",
      "Les emplois sont très utiles. **Politesse** : « *Könnten Sie mir helfen?* » (pourriez-vous m'aider ?), « *Ich hätte gern einen Kaffee* » — bien plus poli que « ich will ». **Conseil** : « *Du solltest mehr schlafen* ». **Souhait / irréel** : « *Wenn ich Zeit hätte, würde ich kommen* ».",
      "Stratégie : pour la majorité des verbes, **würde + infinitif** suffit et est correct. Apprends en priorité les irréguliers *wäre*, *hätte*, *könnte* et *möchte* (« je voudrais ») : ils reviennent constamment dans les demandes polies et les conseils."
    ],
    grammaire: [
      { exemples: [{"de":"Könnten Sie mir bitte helfen?","fr":"Pourriez-vous m'aider, s'il vous plaît ?"},{"de":"Ich hätte gern einen Kaffee.","fr":"Je voudrais un café."}], regle: "Pour la **politesse**, le **souhait** et l'**irréel** : **würde** + infinitif, ou les formes propres **hätte, wäre, könnte**.", attention: "Le « si » irréel se construit avec **wenn + Konjunktiv II** : *Wenn ich Zeit **hätte**, **würde** ich kommen*.", titre: "Formes du Konjunktiv II", intro: "würde + infinitif pour la plupart ; sein/haben/modaux ont une forme propre.",
        tableau: { entetes: ["Verbe", "Konjunktiv II", "Exemple"], lignes: [["sein", "wäre", "Wenn ich reich wäre…"], ["haben", "hätte", "Ich hätte gern Kaffee."], ["können", "könnte", "Könnten Sie helfen?"], ["werden", "würde", "Ich würde gern reisen."]] },
        note: "Demande polie : « Könnten Sie… ? », « Ich hätte gern… », « Würden Sie… ? »." },
      { titre: "Conjugaison de wäre, hätte, könnte",
        regle: "Ces trois formes propres se conjuguent avec les terminaisons *-e, -est, -e, -en, -et, -en*.",
        intro: "*ich wäre, du wärst, er wäre…* — à connaître par cœur.",
        tableau: { entetes: ["Pronom", "sein → wäre", "haben → hätte", "können → könnte"], lignes: [["ich", "wäre", "hätte", "könnte"], ["du", "wärst", "hättest", "könntest"], ["er/sie/es", "wäre", "hätte", "könnte"], ["wir", "wären", "hätten", "könnten"], ["ihr", "wärt", "hättet", "könntet"], ["sie/Sie", "wären", "hätten", "könnten"]] },
        note: "*möchten* (= vouloir poli) : ich möchte, du möchtest, er möchte…" },
      { titre: "Quand würde, quand forme propre ?",
        regle: "Pour *sein, haben* et les **modaux** → forme propre (wäre, hätte, könnte). Pour **tous les autres verbes** → *würde + infinitif*.",
        intro: "*ich **wäre** froh* (pas « würde sein ») · *ich **würde** gern kommen* (verbe ordinaire).",
        tableau: { entetes: ["Emploi", "Forme", "Exemple"], lignes: [["politesse", "könnte / würde", "Könnten Sie helfen?"], ["souhait poli", "hätte / möchte gern", "Ich hätte gern Tee."], ["conseil", "sollte", "Du solltest schlafen."], ["irréel", "wenn + KII, würde", "Wenn ich Zeit hätte, würde ich…"]] },
        note: "En cas de doute sur un verbe ordinaire : *würde + infinitif* est presque toujours correct." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Demande polie : « ___ Sie mir helfen? »", options: ["Könnten", "Können", "Konnten", "Kannst"], correct: 0, explication: "Konjunktiv II poli : Könnten Sie…" },
      { type: "qcm", consigne: "Konjunktiv II de haben.", question: "Ich ___ gern einen Kaffee.", options: ["hätte", "habe", "hatte", "würde"], correct: 0, explication: "haben → hätte." },
      { type: "trou", consigne: "Complétez (würde/wäre).", texte: "Wenn ich Zeit {0}, {1} ich mehr lesen.", accepte: [["hätte"], ["würde"]], indice: "haben → hätte ; verbe → würde" },
      { type: "ordre", consigne: "Demande polie.", mots: ["Könnten", "Sie", "mir", "helfen"], correct: "Könnten Sie mir helfen", traduction: "Pourriez-vous m'aider ?" },
      { type: "oral", consigne: "Production orale.", prompt: "Demandez poliment l'addition au restaurant (Konjunktiv II).", attendus: ["könnte", "hätte"], modele: "Könnten Sie mir bitte die Rechnung bringen? Ich hätte gern die Rechnung." },
      { type: "qcm", consigne: "Konjunktiv II de sein (wir).", question: "Wenn wir reich ___, würden wir reisen.", options: ["wären", "sind", "waren", "wärst"], correct: 0, explication: "sein KII wir → wären." },
      { type: "qcm", consigne: "würde ou forme propre ?", question: "Pour « haben », on dit…", options: ["ich hätte", "ich würde haben", "ich habe"], correct: 0, explication: "haben → forme propre hätte." },
      { type: "trou", consigne: "Conseil.", texte: "Du {0} mehr schlafen. (sollen)", accepte: [["solltest"]], indice: "conseil → sollte : du solltest" }
    ]
  },
  a2g08: {
    id: "a2g08",
    einstieg: {"intro":"Observe comment on situe une action dans le temps.","exemples":[{"de":"Ich wohne seit drei Jahren hier.","fr":"J'habite ici depuis trois ans."},{"de":"Vor einer Woche war ich krank.","fr":"Il y a une semaine, j'étais malade."},{"de":"In zwei Tagen komme ich.","fr":"Dans deux jours, je viens."}],"question":"Comment dit-on « depuis », « il y a », « dans » ?"},
    merke: ["*seit* + datif = depuis (action qui continue).","*vor* + datif = il y a (passé).","*in* + datif = dans (futur)."],
    achtung: [{"erreur":"Ich wohne hier für drei Jahre.","correct":"Ich wohne hier **seit** drei Jahren.","explication":"« depuis » (durée en cours) = *seit* + datif, pas *für*."},{"erreur":"vor eine Woche","correct":"vor **einer** Woche","explication":"*vor* régit le datif."}],
    kontrast: {"titre":"Indicateurs de temps : allemand vs français","similitudes":["« depuis / il y a / dans » ont des équivalents."],"differences":["*seit* régit le *datif* et marque une durée en cours.","*vor* = « il y a » (passé), *in* = « dans » (futur).","Ces prépositions imposent le datif."]}, titre: "Les indicateurs de temps", titreDE: "Temporale Angaben", theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Situer dans le temps", "Choisir la bonne préposition / le bon cas"],
    grammairePoints: ["am, im, um, seit, vor", "jeden Tag (accusatif)"],
    exemplesPlus: [{"de":"Jeden Tag stehe ich um sieben auf.","fr":"Chaque jour, je me lève à sept heures."},{"de":"Letzte Woche war ich krank.","fr":"La semaine dernière, j'étais malade."},{"de":"Nächstes Jahr fahren wir nach Japan.","fr":"L'année prochaine, nous allons au Japon."},{"de":"Vor drei Tagen habe ich ihn gesehen.","fr":"Il y a trois jours, je l'ai vu."},{"de":"Wir treffen uns am Abend.","fr":"Nous nous retrouvons le soir."}],
    cours: [
      "Pour situer une action dans le temps avec précision, l'allemand combine **prépositions temporelles** et **adverbes**. Au niveau A2, l'objectif est de savoir répondre clairement à la question **Wann?** (quand ?) : à quel moment, depuis quand, pour combien de temps, à quelle fréquence.",
      "Côté **prépositions** (souvent + datif) : **am** pour les jours et moments de la journée (*am Montag*, *am Abend*), **um** pour l'heure (*um 8 Uhr*), **im** pour les mois et saisons (*im Mai*, *im Sommer*), **seit** pour « depuis » (*seit einem Jahr*), **vor** pour « il y a » (*vor zwei Tagen*), **von… bis** pour une période.",
      "Nouveauté de l'A2 : certaines expressions de temps se mettent à l'**accusatif** (sans préposition !) pour une **durée** ou une **répétition** : *jeden Tag* (chaque jour), *jeden Montag*, *letzte Woche*, *nächstes Jahr*, *einen Monat lang*. On dit « *Ich lerne **jeden Tag** Deutsch* ».",
      "Les **adverbes de fréquence** ordonnent tes habitudes : *immer* (toujours), *meistens*, *oft* (souvent), *manchmal* (parfois), *selten* (rarement), *nie* (jamais). Et les **repères** : *heute, gestern, vorgestern, morgen, übermorgen, früher, bald, schon, noch*.",
      "Pour l'ordre des mots, retiens la formule **TeKaMoLo** : **Te**mps – **Ka**use – **Mo**dalité – **Lo**cal. Le complément de temps vient en général **avant** le lieu : « *Ich fahre **morgen** (temps) **nach Berlin** (lieu)* ». Ce repère évite la plupart des erreurs d'ordre."
    ],
    grammaire: [
      { exemples: [{"de":"Am Montag um acht beginnt der Kurs.","fr":"Lundi à huit heures, le cours commence."},{"de":"Ich arbeite seit drei Jahren hier.","fr":"Je travaille ici depuis trois ans."}], regle: "Situer dans le temps : **am** (jour), **um** (heure), **im** (mois/saison), **seit** (depuis), **von … bis** (de … à).", attention: "« depuis » se dit **seit + datif** avec un verbe au **présent** : *Ich lerne **seit** zwei Jahren Deutsch*.", titre: "Dire quand", intro: "Chaque repère temporel a sa structure.",
        tableau: { entetes: ["Expression", "Sens", "Exemple"], lignes: [["am + jour", "le…", "am Montag"], ["im + mois/saison", "en…", "im Sommer"], ["um + heure", "à…", "um 8 Uhr"], ["seit + datif", "depuis", "seit zwei Jahren"], ["vor + datif", "il y a", "vor einer Woche"], ["jeden Tag (acc.)", "chaque jour", "jeden Tag, jede Woche"]] },
        note: "Durée habituelle à l'accusatif : jeden Tag, jeden Morgen, letzten Montag." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "___ zwei Jahren wohne ich hier.", options: ["Seit", "Vor", "Am", "Um"], correct: 0, explication: "seit + datif = depuis." },
      { type: "qcm", consigne: "Choisissez.", question: "Wir treffen uns ___ Freitag.", options: ["am", "im", "um", "seit"], correct: 0, explication: "jour → am." },
      { type: "trou", consigne: "Complétez.", texte: "{0} Sommer fahre ich {1} 9 Uhr los.", accepte: [["im"], ["um"]], indice: "saison / heure" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "am", droite: "Montag" }, { gauche: "im", droite: "Juli" }, { gauche: "um", droite: "10 Uhr" }, { gauche: "seit", droite: "2020" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Il y a une semaine.", accepte: ["Vor einer Woche", "vor einer woche"], aide: "vor + datif" }
    ]
  },
  a2g09: {
    id: "a2g09",
    einstieg: {"intro":"Chaque cas a une fonction. Observe.","exemples":[{"de":"Der Hund beißt den Mann.","fr":"Le chien mord l'homme."},{"de":"Ich helfe dem Mann.","fr":"J'aide l'homme."},{"de":"das Auto des Mannes","fr":"la voiture de l'homme"}],"question":"À quoi sert chaque cas (N / A / D / G) ?"},
    merke: ["*Nominatif* = sujet ; *Accusatif* = COD.","*Datif* = « à qui » ; *Génitif* = « de qui » (possession).","Le cas se lit sur l'article (et parfois le nom : datif pl. -n, génitif -s)."],
    achtung: [{"erreur":"Ich helfe den Mann.","correct":"Ich helfe **dem** Mann.","explication":"*helfen* → datif (dem Mann)."},{"erreur":"das Auto der Mann","correct":"das Auto **des Mannes**","explication":"Génitif masculin : *des* + nom en *-s/-es*."}],
    kontrast: {"titre":"Les quatre cas : allemand vs français","similitudes":["Sujet, COD, « à/de qqn » existent dans les deux."],"differences":["L'allemand a *quatre cas* visibles sur l'article.","Le génitif (des/der) = « de ».","Le cas dépend du verbe, de la préposition ou de la fonction."]}, titre: "Les cas (vue d'ensemble)", titreDE: "Die Fälle", theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Comprendre à quoi sert chaque cas", "Poser la bonne question (wer/wen/wem)"],
    grammairePoints: ["Nominatif/Accusatif/Datif", "wer? wen? wem?"],
    exemplesPlus: [{"de":"Der Lehrer erklärt den Schülern die Grammatik.","fr":"Le professeur explique la grammaire aux élèves."},{"de":"Wer hat das gesagt?","fr":"Qui a dit ça ?"},{"de":"Wen hast du eingeladen?","fr":"Qui as-tu invité ?"},{"de":"Wem gehört diese Tasche?","fr":"À qui appartient ce sac ?"},{"de":"Ich danke dir für deine Hilfe.","fr":"Je te remercie pour ton aide."}],
    cours: [
      "Le **système des cas** est le squelette de la grammaire allemande. Un « cas » indique la **fonction** d'un groupe dans la phrase, et cette fonction se marque sur l'**article** (et parfois sur le nom ou l'adjectif). Au niveau A2, on prend de la hauteur pour voir comment **nominatif, accusatif et datif** s'articulent.",
      "Le **nominatif** est le cas du **sujet** — celui qui fait l'action ou dont on parle. Question : **Wer? / Was?**. C'est aussi la forme de l'attribut après *sein, werden, bleiben* : « *Das ist **ein guter Freund*** ». C'est la forme « de base » du dictionnaire.",
      "L'**accusatif** est le cas du **complément d'objet direct**, ce qui subit l'action. Question : **Wen? / Was?**. Rappel : seul le masculin change (*der → den, ein → einen*). On le trouve après des verbes comme *haben, sehen, kaufen*, et après les prépositions *für, ohne, durch, gegen, um*.",
      "Le **datif** est le cas du **complément d'objet indirect**, souvent la personne « à qui ». Question : **Wem?**. Ses articles : *dem, der, dem, den (+n)*. On le trouve après les verbes à datif (*helfen, danken, gefallen*) et après les prépositions *mit, zu, bei, von, nach, aus, seit*.",
      "La méthode gagnante : pour chaque verbe et chaque préposition, **demande-toi quel cas il commande**, puis applique le bon article. Pose-toi les questions *Wer? Wen? Wem?* pour identifier les fonctions. Ce réflexe transforme la déclinaison en une grille logique que tu lis automatiquement."
    ],
    grammaire: [
      { exemples: [{"de":"Der Mann gibt dem Kind den Ball.","fr":"L'homme donne le ballon à l'enfant."},{"de":"Das ist das Auto meines Bruders.","fr":"C'est la voiture de mon frère."}], regle: "Quatre cas : **Nominatif** (sujet), **Accusatif** (COD), **Datif** (COI / après certaines prép.), **Genitiv** (appartenance). La **fonction** du nom décide du cas.", attention: "Le cas se voit surtout sur l'**article** et l'**adjectif**, rarement sur le nom.", titre: "Les 3 cas essentiels", intro: "Chaque cas a une fonction et une question.",
        tableau: { entetes: ["Cas", "Fonction", "Question", "Exemple"], lignes: [["Nominatif", "sujet", "wer? (qui ?)", "Der Mann schläft."], ["Accusatif", "COD", "wen/was?", "Ich sehe den Mann."], ["Datif", "COI (à qui)", "wem?", "Ich helfe dem Mann."]] },
        note: "Astuce : le cas dépend du verbe et des prépositions. mit/zu/bei… → datif ; durch/für/ohne… → accusatif." },
      { titre: "Tableau complet des 4 cas (article défini)",
        regle: "Voici la **carte complète** de la déclinaison. Le **masculin** change le plus (der/den/dem/des) ; féminin et neutre changent peu.",
        intro: "Chaque cas répond à une question : **Wer?** (nom.), **Wen?** (acc.), **Wem?** (dat.), **Wessen?** (gén.).",
        tableau: { entetes: ["Cas", "Masculin", "Féminin", "Neutre", "Pluriel"], lignes: [["Nominatif", "der", "die", "das", "die"], ["Accusatif", "den", "die", "das", "die"], ["Datif", "dem", "der", "dem", "den"], ["Génitif", "des", "der", "des", "der"]] },
        note: "Datif pluriel : nom + -n (den Kindern) ; génitif masc./neutre : nom + -s (des Mannes)." },
      { titre: "L'article indéfini et kein/mein",
        regle: "*ein/kein/mein* suivent le même schéma que *der* — sauf au masc. nominatif et au neutre nom./acc., où ils n'ont pas de terminaison.",
        intro: "*ein Mann → einen Mann → einem Mann → eines Mannes*.",
        tableau: { entetes: ["Cas", "Masculin", "Féminin", "Neutre", "Pluriel (kein)"], lignes: [["Nominatif", "ein", "eine", "ein", "keine"], ["Accusatif", "einen", "eine", "ein", "keine"], ["Datif", "einem", "einer", "einem", "keinen"], ["Génitif", "eines", "einer", "eines", "keiner"]] },
        note: "*ein* n'a pas de pluriel : on prend *kein/mein* (keine Kinder)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Quelle question pour le datif ?", options: ["wem?", "wen?", "wer?"], correct: 0, explication: "Datif → wem? (à qui ?)." },
      { type: "qcm", consigne: "Identifiez le cas.", question: "« Ich sehe den Hund. » → den Hund est…", options: ["accusatif (COD)", "datif", "nominatif"], correct: 0, explication: "COD → accusatif." },
      { type: "trou", consigne: "Complétez (der/den/dem).", texte: "{0} Mann (sujet) gibt {1} Kind (à qui) {2} Ball (quoi).", accepte: [["Der"], ["dem"], ["den"]], indice: "nominatif / datif / accusatif" },
      { type: "association", consigne: "Associez cas → question.", paires: [{ gauche: "Nominatif", droite: "wer?" }, { gauche: "Accusatif", droite: "wen?" }, { gauche: "Datif", droite: "wem?" }] },
      { type: "qcm", consigne: "Préposition + datif ?", question: "Lequel est toujours + datif ?", options: ["mit", "für", "durch", "ohne"], correct: 0, explication: "mit + datif. (für/durch/ohne + accusatif.)" },
      { type: "qcm", consigne: "Datif pluriel.", question: "Ich helfe ___ Kindern.", options: ["den", "die", "der", "dem"], correct: 0, explication: "datif pluriel → den (+ nom en -n : Kindern)." },
      { type: "trou", consigne: "Accusatif masculin.", texte: "Ich sehe {0} Mann. (der Mann)", accepte: [["den"]], indice: "accusatif masculin → den" },
      { type: "qcm", consigne: "Article indéfini datif.", question: "Ich gebe ___ Kind einen Apfel. (à un enfant)", options: ["einem", "ein", "einen", "eines"], correct: 0, explication: "datif neutre → einem." }
    ]
  }
});
