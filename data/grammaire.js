/* =====================================================================
   grammaire.js — 12 LEÇONS DE GRAMMAIRE dédiées (A1)
   Intercalées avec les 19 leçons thématiques (total ~31 leçons).
   Schéma identique aux leçons (mais sans vocabulaire ni dialogue :
   le rendu saute ces sections). cat:"comp" = compréhension de la règle,
   sinon "appro" (application).
   ===================================================================== */
window.GRAMMAIRE = {
  /* ---------------- Module A1.1 ---------------- */
  g01: {
    id: "g01",
    einstieg: {"intro":"Observe le verbe *sein* (être). Que remarques-tu d'une personne à l'autre ?","exemples":[{"de":"ich bin müde","fr":"je suis fatigué"},{"de":"du bist nett","fr":"tu es gentil"},{"de":"er ist groß","fr":"il est grand"},{"de":"wir sind hier","fr":"nous sommes ici"}],"question":"Peux-tu deviner les formes de *sein*, ou faut-il les apprendre par cœur ?"},
    merke: ["*sein* (être) et *haben* (avoir) sont irréguliers : à apprendre par cœur.","Présent régulier : radical + *-e, -st, -t, -en, -t, -en* (ich komme, du kommst…).","Le verbe conjugué est toujours en *position 2* dans la phrase affirmative.","Le pronom de politesse *Sie* (vous) prend toujours une majuscule."],
    achtung: [{"erreur":"ich habe 20 Jahre","correct":"ich **bin** 20 Jahre alt","explication":"Pour l'âge, l'allemand utilise *sein* (être) + *alt*, pas *haben*. Littéralement « je suis 20 ans vieux »."},{"erreur":"du bis nett","correct":"du **bist** nett","explication":"*sein* à *du* = *bist* (avec -t). Forme à mémoriser."},{"erreur":"Heute ich gehe","correct":"Heute **gehe ich**","explication":"Si la phrase commence par un complément (*heute*), le verbe reste en position 2 et le sujet passe après."}],
    kontrast: {"titre":"Le présent : allemand vs français","similitudes":["Les deux langues ont des verbes irréguliers très fréquents (*sein/haben*, être/avoir)."],"differences":["L'allemand n'a qu'UN présent : *ich gehe* = « je vais » ET « je suis en train d'aller ».","Le verbe est en *position 2*, même après un complément (*Morgen komme ich* = littéralement « demain viens je »).","La politesse se dit *Sie* (avec majuscule), pas *du*."]}, titre: "Pronoms personnels & présent", titreDE: "Personalpronomen & Präsens",
    theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Reconnaître les pronoms personnels", "Conjuguer un verbe régulier au présent", "Maîtriser le verbe « sein »"],
    grammairePoints: ["Personalpronomen", "Présent"],
    exemplesPlus: [{"de":"Ich heiße Anna und ich wohne in Hamburg.","fr":"Je m'appelle Anna et j'habite à Hambourg."},{"de":"Du bist sehr nett.","fr":"Tu es très gentil."},{"de":"Wir lernen jeden Tag Deutsch.","fr":"Nous apprenons l'allemand tous les jours."},{"de":"Sie arbeitet bei einer großen Firma.","fr":"Elle travaille dans une grande entreprise."},{"de":"Seid ihr müde?","fr":"Êtes-vous fatigués ?"}],
    cours: [
      "En allemand, **chaque phrase a besoin d'un sujet**, et ce sujet est très souvent un **pronom personnel** : *ich* (je), *du* (tu), *er / sie / es* (il / elle / cela), *wir* (nous), *ihr* (vous, à plusieurs personnes qu'on tutoie) et *sie / Sie* (ils / elles, ainsi que le vouvoiement poli « Sie » avec une majuscule). Contrairement au français, le pronom n'est presque jamais sous-entendu : on ne dit pas « bin müde » mais toujours « *ich bin müde* » (je suis fatigué).",
      "Le cœur de la phrase, c'est le **verbe conjugué**. Pour le former au présent, on part de l'**infinitif** (par exemple *wohnen*, habiter), on retire la terminaison **-en** pour obtenir le **radical** (*wohn-*), puis on ajoute la terminaison qui correspond au pronom : **-e** (ich), **-st** (du), **-t** (er/sie/es), **-en** (wir), **-t** (ihr), **-en** (sie/Sie). Cela donne *ich wohne*, *du wohnst*, *er wohnt*, *wir wohnen*…",
      "Retiens dès maintenant la **règle d'or de l'allemand** : dans une phrase déclarative (une affirmation), le **verbe conjugué occupe toujours la deuxième position**. Ce qui occupe la première place peut changer — le sujet, une indication de temps, un complément de lieu — mais le verbe, lui, ne bouge pas. On dira « *Ich lerne heute Deutsch* » ou, en mettant le temps en tête, « *Heute lerne ich Deutsch* », mais jamais « Heute ich lerne ».",
      "Un verbe est absolument incontournable et **totalement irrégulier** : le verbe **sein** (être). Il faut l'apprendre par cœur : *ich bin*, *du bist*, *er/sie/es ist*, *wir sind*, *ihr seid*, *sie/Sie sind*. On l'emploie pour se présenter, décrire ou donner son état : « *Ich bin Student* » (je suis étudiant), « *Sie ist müde* » (elle est fatiguée).",
      "Petite difficulté de prononciation à connaître tout de suite : quand le radical se termine par **-t** ou **-d** (comme *arbeiten*, travailler, ou *finden*, trouver), on intercale un **-e-** avant la terminaison pour pouvoir prononcer le mot : *du arbeitest*, *er findet*. Sans ce -e-, ce serait imprononçable.",
      "En résumé : un pronom, un verbe en 2ᵉ position, des terminaisons régulières à mémoriser, et le verbe *sein* à connaître par cœur. Avec cela, tu peux déjà construire des dizaines de phrases simples et correctes."
    ],
    grammaire: [
      { titre: "Les pronoms personnels", intro: "Ils déterminent la terminaison du verbe.",
        tableau: { entetes: ["Pronom", "Sens"], lignes: [["ich", "je"], ["du", "tu"], ["er/sie/es", "il/elle"], ["wir", "nous"], ["ihr", "vous"], ["sie/Sie", "ils/vous (poli)"]] },
        note: "« Sie » (majuscule) = vouvoiement poli." },
      { titre: "Le présent",
        regle: "On prend le **radical** (l'infinitif sans la terminaison **-en**) et on ajoute la terminaison du pronom : **-e, -st, -t, -en, -t, -en**. Et règle d'or de l'allemand : **le verbe conjugué est toujours en 2ᵉ position** dans une phrase déclarative.",
        intro: "Avec **machen** (faire) : le radical est **mach-**. On obtient *ich mach**e***, *du mach**st***, *er mach**t***… Le verbe **sein** (être), lui, est totalement irrégulier — à connaître par cœur.",
        tableau: { entetes: ["Pronom", "mach-en", "sein"], lignes: [["ich", "mache", "bin"], ["du", "machst", "bist"], ["er/sie/es", "macht", "ist"], ["wir", "machen", "sind"], ["ihr", "macht", "seid"], ["sie/Sie", "machen", "sind"]] },
        schemas: [{ legende: "Phrase de base : le verbe conjugué est toujours en 2e position.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "mache", r: "verbe (2)", c: "verbe" }, { m: "eine Pause", r: "complément", c: "objet" }] }],
        exemples: [
          { de: "Ich wohne in Berlin.", fr: "J'habite à Berlin." },
          { de: "Du machst eine Pause.", fr: "Tu fais une pause." },
          { de: "Er ist mein Freund.", fr: "Il est mon ami." },
          { de: "Wir sind müde.", fr: "Nous sommes fatigués." }
        ],
        note: "« sein » est irrégulier : à apprendre par cœur.",
        attention: "Si le radical finit par **-t** ou **-d** (*arbeiten*, *finden*), on intercale un **-e-** pour pouvoir prononcer : *du arbeit**e**st*, *er find**e**t*." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Quelle terminaison avec « du » ?", options: ["-st", "-t", "-en", "-e"], correct: 0, explication: "du → radical + -st." },
      { type: "conjugaison", consigne: "Conjuguez « wohnen ».", verbe: "wohnen", items: [{ pronom: "ich", reponse: "wohne" }, { pronom: "du", reponse: "wohnst" }, { pronom: "er/sie/es", reponse: "wohnt" }, { pronom: "wir", reponse: "wohnen" }, { pronom: "ihr", reponse: "wohnt" }, { pronom: "sie/Sie", reponse: "wohnen" }] },
      { type: "conjugaison", consigne: "Conjuguez « sein ».", verbe: "sein", items: [{ pronom: "ich", reponse: "bin" }, { pronom: "du", reponse: "bist" }, { pronom: "er/sie/es", reponse: "ist" }, { pronom: "wir", reponse: "sind" }, { pronom: "ihr", reponse: "seid" }, { pronom: "sie/Sie", reponse: "sind" }] },
      { type: "trou", consigne: "Complétez le pronom.", texte: "{0} bist mein Freund. (tu)", accepte: [["du"]], indice: "2e personne" },
      { type: "ordre", consigne: "Ordre des mots.", mots: ["Wir", "machen", "eine", "Pause"], correct: "Wir machen eine Pause", traduction: "Nous faisons une pause." }
    ]
  },
  g02: {
    id: "g02", titre: "Les verbes (présent)", titreDE: "Die Verben im Präsens",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Distinguer verbes réguliers et irréguliers", "Gérer les verbes à changement de voyelle"],
    einstieg: {
      intro: "Compare la voyelle du radical entre *ich* et *du* / *er*. Que remarques-tu ?",
      exemples: [
        { de: "ich fahre → du fährst", fr: "je vais (roule) → tu vas" },
        { de: "ich spreche → er spricht", fr: "je parle → il parle" },
        { de: "ich sehe → sie sieht", fr: "je vois → elle voit" },
        { de: "ich gebe → er gibt", fr: "je donne → il donne" }
      ],
      question: "À quelles personnes la voyelle du radical change-t-elle, et comment ?"
    },
    merke: [
      "La voyelle du radical change *seulement* à *du* et *er/sie/es*.",
      "Trois changements : *a* → *ä* (*fahren* → du fährst), *e* → *i* (*sprechen* → er spricht), *e* → *ie* (*lesen* → sie liest).",
      "Aux autres personnes (*ich*, *wir*, *ihr*, *sie* pluriel), on garde la voyelle de l'infinitif.",
      "Les terminaisons, elles, ne changent jamais : -e, -st, -t, -en, -t, -en."
    ],
    achtung: [
      { erreur: "du fahrst", correct: "du **fährst**", explication: "À *du* et *er*, le *a* devient *ä* (Umlaut). Oublier l'Umlaut est l'erreur la plus fréquente des francophones." },
      { erreur: "ich spriche", correct: "ich **spreche**", explication: "Le changement ne concerne PAS *ich* : on garde la voyelle de l'infinitif (*ich spreche*, *ich fahre*)." },
      { erreur: "wir spricht", correct: "wir **sprechen**", explication: "*wir* prend toujours la forme de base en *-en*, sans changement de voyelle." },
      { erreur: "du nehmst", correct: "du **nimmst**", explication: "*nehmen* est doublement irrégulier : *e* → *i* ET la consonne change (du nimmst, er nimmt). À mémoriser à part." }
    ],
    kontrast: {
      titre: "Le changement de voyelle : allemand vs français",
      similitudes: [
        "Les deux langues ont des verbes irréguliers très courants au présent."
      ],
      differences: [
        "En allemand, seule la *voyelle du radical* change (*a* → *ä*, *e* → *i*) ; le verbe reste reconnaissable.",
        "Le changement touche *uniquement* *du* et *er/sie/es* - jamais *ich*, *wir*, *ihr*.",
        "En français, l'irrégularité est souvent globale (« je vais, nous allons ») ; en allemand, *fahren* reste *fahren* partout, seule la voyelle change au singulier."
      ]
    },
    grammairePoints: ["Verbes irréguliers", "e→i, e→ie, a→ä"],
    exemplesPlus: [{"de":"Er fährt mit dem Auto zur Arbeit.","fr":"Il va au travail en voiture."},{"de":"Du sprichst sehr gut Deutsch.","fr":"Tu parles très bien allemand."},{"de":"Sie liest gern Romane.","fr":"Elle aime lire des romans."},{"de":"Das Kind schläft schon.","fr":"L'enfant dort déjà."},{"de":"Nimmst du auch einen Kaffee?","fr":"Tu prends aussi un café ?"}],
    cours: [
      "Tu connais déjà les terminaisons régulières du présent. Mais l'allemand compte une famille de **verbes forts** qui, en plus des terminaisons, **changent la voyelle de leur radical**. Bonne nouvelle : ce changement ne se produit **que** pour deux personnes, la **2ᵉ du singulier (du)** et la **3ᵉ du singulier (er/sie/es)**. Partout ailleurs, le verbe reste parfaitement régulier.",
      "Il existe trois changements très fréquents. Le premier est **e → i** : le verbe *sprechen* (parler) donne « *du sprichst* », « *er spricht* ». Le deuxième est **e → ie** : *lesen* (lire) donne « *du liest* », « *sie liest* », et *sehen* (voir) donne « *er sieht* ». Le troisième est **a → ä** : *fahren* (rouler, aller) donne « *du fährst* », « *er fährt* », et *schlafen* (dormir) donne « *er schläft* ».",
      "L'erreur classique du débutant, c'est de propager le changement à toutes les personnes. **Ne fais pas cela** : avec *ich*, *wir*, *ihr* et *sie* (pluriel), on **garde la voyelle de l'infinitif**. On dit donc « *ich spreche* » (et non « ich spriche ») et « *wir fahren* » (et non « wir fähren »). Le changement est réservé au **singulier du et er/sie/es**.",
      "Pourquoi est-ce si important ? Parce que ces verbes sont parmi les plus utilisés de la langue : parler, lire, voir, manger (*essen* → er isst), prendre (*nehmen* → er nimmt), donner (*geben* → er gibt). Tu les rencontreras dans presque chaque phrase. Mieux vaut donc les automatiser dès le début.",
      "Astuce de mémorisation : apprends toujours ces verbes avec leur **forme « er »** entre parenthèses, comme le font les dictionnaires allemands : *sprechen (er spricht)*, *fahren (er fährt)*. Ainsi, dès que tu apprends le verbe, tu apprends en même temps son irrégularité."
    ],
    grammaire: [
      { titre: "Verbes à changement de voyelle (2e/3e pers. sing.)",
        regle: "Certains verbes forts **changent la voyelle de leur radical** — mais **seulement** à la **2ᵉ personne (du)** et à la **3ᵉ du singulier (er/sie/es)**. Les autres personnes restent régulières.",
        intro: "Trois changements fréquents : **e → i** (*sprechen* → er **spricht**), **e → ie** (*lesen* → er **liest**) et **a → ä** (*fahren* → er **fährt**).",
        tableau: { entetes: ["Type", "Infinitif", "er/sie/es"], lignes: [["e → i", "sprechen", "spricht"], ["e → ie", "lesen / sehen", "liest / sieht"], ["a → ä", "fahren", "fährt"], ["régulier", "machen", "macht"]] },
        exemples: [
          { de: "Du sprichst sehr gut Deutsch.", fr: "Tu parles très bien allemand." },
          { de: "Sie liest ein Buch.", fr: "Elle lit un livre." },
          { de: "Er fährt nach Hamburg.", fr: "Il va (roule) à Hambourg." }
        ],
        note: "Seules les 2e (du) et 3e (er/sie/es) personnes du singulier changent.",
        attention: "Au pluriel et avec *ich*/*wir*/*sie*, on garde la voyelle de l'infinitif : *wir **sprechen***, *ich **fahre*** (et non « ~~spreche~~ », « ~~fähre~~ »)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Er ___ Deutsch. (sprechen)", options: ["spricht", "sprecht", "sprichst", "sprechen"], correct: 0, explication: "sprechen : e→i → er spricht." },
      { type: "qcm", consigne: "Choisissez.", question: "Du ___ Auto. (fahren)", options: ["fährst", "fahrst", "fährt", "fahren"], correct: 0, explication: "fahren : a→ä → du fährst." },
      { type: "conjugaison", consigne: "Conjuguez « sprechen ».", verbe: "sprechen", items: [{ pronom: "ich", reponse: "spreche" }, { pronom: "du", reponse: "sprichst" }, { pronom: "er/sie/es", reponse: "spricht" }, { pronom: "wir", reponse: "sprechen" }, { pronom: "ihr", reponse: "sprecht" }, { pronom: "sie/Sie", reponse: "sprechen" }] },
      { type: "trou", consigne: "Complétez (lesen).", texte: "Sie {0} ein Buch. (elle)", accepte: [["liest"]], indice: "e → ie" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "ich nehme", droite: "du nimmst" }, { gauche: "ich gebe", droite: "du gibst" }, { gauche: "ich esse", droite: "du isst" }] },
      { type: "production", cat: "prod", competence: "conj_present",
        consigne: "Production écrite - les verbes à changement de voyelle.",
        prompt: "Écris 4 phrases avec des verbes à changement de voyelle (fahren, sprechen, sehen, lesen, geben, nehmen…). Utilise au moins une fois *du* et une fois *er/sie/es* pour bien montrer le changement.",
        attendus: ["fährst", "fährt", "sprichst", "spricht", "siehst", "sieht", "liest", "gibst", "gibt", "nimmst", "nimmt"],
        minMots: 12,
        checklist: [
          "J'ai utilisé au moins 3 verbes à changement de voyelle",
          "J'ai mis le changement à du et er/sie/es (du fährst, er spricht)",
          "Je n'ai PAS changé la voyelle à ich, wir, ihr (ich fahre, wir fahren)",
          "Le verbe est en position 2 dans chaque phrase"
        ],
        modele: "Mein Bruder fährt jeden Tag nach Berlin. Du sprichst sehr gut Deutsch! Sie liest gern Romane. Er gibt mir ein Buch." }
    ]
  },
  g03: {
    id: "g03",
    einstieg: {"intro":"Regarde l'article devant chaque nom. Correspond-il au sexe ?","exemples":[{"de":"der Mann","fr":"l'homme"},{"de":"die Frau","fr":"la femme"},{"de":"das Kind","fr":"l'enfant"},{"de":"das Mädchen","fr":"la jeune fille (!)"}],"question":"Pourquoi *Mädchen* (fille) est-il neutre (*das*) ?"},
    merke: ["Trois genres : *der* (masculin), *die* (féminin), *das* (neutre).","Le nominatif est le cas du **sujet** — question **Wer?** (qui ?) / **Was?** (quoi ?).","Le genre est souvent *imprévisible* : apprends toujours le mot AVEC son article.","Au pluriel, l'article défini est *die* pour tous les genres.","Après *sein* (être), l'attribut reste au **nominatif** : *Das ist **ein** Mann*."],
    achtung: [{"erreur":"die Mädchen (une fille)","correct":"**das** Mädchen","explication":"Les diminutifs en *-chen* sont toujours neutres (*das*), quel que soit le sens."},{"erreur":"das Sonne","correct":"**die** Sonne","explication":"*Sonne* (soleil) est féminin en allemand. Le genre français ne se transpose pas."},{"erreur":"Das Auto ist rot, er ist schnell.","correct":"…**es** ist schnell.","explication":"*Auto* est neutre → on le reprend par *es*, pas *er*."}],
    kontrast: {"titre":"Le genre : allemand vs français","similitudes":["Les deux langues attribuent un genre grammatical aux noms."],"differences":["L'allemand a *trois* genres (der/die/das), le français deux.","Le genre ne correspond pas : *die Sonne* (f.) = le soleil (m.), *der Mond* (m.) = la lune (f.).","Il faut mémoriser l'article avec chaque nom : pas de règle fiable."]}, titre: "Le groupe de noms : der/die/das", titreDE: "Artikel: der/die/das",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Reconnaître le genre des noms", "Utiliser l'article défini et indéfini"],
    grammairePoints: ["der/die/das", "ein/eine"],
    exemplesPlus: [{"de":"Der Mann liest eine Zeitung.","fr":"L'homme lit un journal."},{"de":"Die Frau kauft ein Brot.","fr":"La femme achète un pain."},{"de":"Das Kind spielt im Garten.","fr":"L'enfant joue dans le jardin."},{"de":"Ein Hund läuft auf der Straße.","fr":"Un chien court dans la rue."},{"de":"Die Bücher sind sehr interessant.","fr":"Les livres sont très intéressants."}],
    cours: [
      "En allemand, **chaque nom possède un genre** : **masculin** (article *der*), **féminin** (article *die*) ou **neutre** (article *das*). Ce genre est souvent **différent du français** et n'est pas toujours logique : « le soleil » est féminin (*die Sonne*), « la lune » est masculin (*der Mond*) et « la jeune fille » est neutre (*das Mädchen*) ! La conclusion est simple : on **n'apprend jamais un nom seul**, mais toujours **avec son article**.",
      "Ces articles que tu viens de voir (*der, die, das*) sont les **articles définis** : ils désignent une chose précise et connue (« le livre dont je parle »). Au pluriel, et c'est une bonne nouvelle, **les trois genres se confondent** : l'article défini pluriel est *die* pour tout le monde (« *die Bücher* », les livres).",
      "À côté, il y a les **articles indéfinis**, qui présentent une chose pour la première fois ou de façon vague (« un livre, quel qu'il soit »). Au masculin et au neutre, c'est **ein** (« *ein Mann* », « *ein Kind* ») ; au féminin, c'est **eine** (« *eine Frau* »). Remarque que *der* et *das* se réduisent au même *ein* : c'est plus simple qu'il n'y paraît.",
      "Tout ce que nous venons de voir correspond au **nominatif**, c'est-à-dire au cas du **sujet** de la phrase — celui qui fait l'action ou dont on parle. C'est la forme de base, celle que donne le dictionnaire. Les autres cas (accusatif, datif) viendront plus tard et modifieront légèrement ces articles ; mais tout part de cette base *der / die / das*.",
      "Conseil pratique : dans cette application, les mots sont **colorés selon leur genre** — bleu pour *der*, rose pour *die*, vert pour *das*. Profite de ces couleurs : elles créent une mémoire visuelle qui t'aidera, peu à peu, à « sentir » le genre des mots sans même y réfléchir."
    ],
    grammaire: [
      { titre: "Articles défini et indéfini (nominatif)",
        regle: "**Tout nom allemand a un genre** : masculin (**der**), féminin (**die**) ou neutre (**das**). L'article **défini** (*der/die/das* = le/la) désigne une chose connue ; l'article **indéfini** (*ein/eine* = un/une) une chose nouvelle.",
        intro: "Le genre n'est **pas** toujours logique (*das Mädchen*, « la jeune fille », est neutre !). Apprends donc **toujours le nom avec son article** : pas « *Tisch* » mais « **der** Tisch ».",
        tableau: { entetes: ["Genre", "Défini", "Indéfini", "Exemple"], lignes: [["masculin", "der", "ein", "der/ein Mann"], ["féminin", "die", "eine", "die/eine Frau"], ["neutre", "das", "ein", "das/ein Kind"], ["pluriel", "die", "— (keine)", "die Kinder"]] },
        exemples: [
          { de: "Der Mann ist nett.", fr: "L'homme est gentil." },
          { de: "Das ist eine Frau.", fr: "C'est une femme." },
          { de: "Ich sehe ein Kind.", fr: "Je vois un enfant." }
        ],
        note: "Les noms s'écrivent toujours avec une MAJUSCULE.",
        attention: "Au pluriel, l'article défini est **die** pour tous les genres — et il n'existe **pas** de pluriel de *ein* (on dit *Kinder* tout court, ou *keine Kinder* à la négation)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez l'article défini.", question: "___ Frau ist nett.", options: ["Die", "Der", "Das", "Den"], correct: 0, explication: "Frau est féminin → die." },
      { type: "qcm", consigne: "Article indéfini.", question: "Das ist ___ Auto.", options: ["ein", "eine", "einen", "der"], correct: 0, explication: "Auto est neutre → ein." },
      { type: "association", consigne: "Associez le nom à son article.", paires: [{ gauche: "Mann", droite: "der" }, { gauche: "Frau", droite: "die" }, { gauche: "Kind", droite: "das" }, { gauche: "Buch", droite: "das" }] },
      { type: "trou", consigne: "Complétez (ein/eine).", texte: "Ich habe {0} Hund und {1} Katze.", accepte: [["einen"], ["eine"]], indice: "der Hund (acc.), die Katze" },
      { type: "qcm", consigne: "Choisissez.", question: "Comment écrit-on les noms ?", options: ["Avec une majuscule", "En minuscule", "Comme on veut"], correct: 0, explication: "Tous les noms prennent une majuscule." },
      { type: "qcm", consigne: "Le cas du sujet.", question: "Le sujet d'une phrase (Wer? / Was?) est au…", options: ["nominatif", "accusatif", "datif", "génitif"], correct: 0, explication: "Le sujet est toujours au nominatif — c'est la forme du dictionnaire." }
    ]
  },
  g04: {
    id: "g04",
    einstieg: {"intro":"Compare les deux façons de dire « ne… pas ».","exemples":[{"de":"Ich habe kein Auto.","fr":"Je n'ai pas de voiture."},{"de":"Das ist nicht gut.","fr":"Ce n'est pas bon."},{"de":"Ich komme nicht.","fr":"Je ne viens pas."}],"question":"Quand utilise-t-on *kein* et quand *nicht* ?"},
    merke: ["Pour nier un *nom*, on utilise *kein* : *Ich habe kein Auto*.","Pour nier un *verbe*, un *adjectif* ou un complément, on utilise *nicht* : *Ich komme nicht*.","*kein* s'accorde comme l'article *ein* (keinen, keine, kein, keine)."],
    achtung: [{"erreur":"Ich habe nicht ein Auto.","correct":"Ich habe **kein** Auto.","explication":"Devant un nom avec *ein*, on utilise *kein*, jamais *nicht ein*."},{"erreur":"Ich habe keine Zeit nicht.","correct":"Ich habe **keine** Zeit.","explication":"Pas de double négation en allemand : *kein* suffit."},{"erreur":"Ich nicht komme.","correct":"Ich komme **nicht**.","explication":"*nicht* se place après le verbe conjugué (souvent en fin de phrase)."}],
    kontrast: {"titre":"La négation : allemand vs français","similitudes":["Les deux langues nient autour du verbe."],"differences":["Le français a deux mots (*ne… pas*) ; l'allemand un seul (*nicht* ou *kein*).","L'allemand choisit *kein* (nom) ou *nicht* (le reste) - distinction absente en français.","Pas de double négation : « je n'ai rien » = *ich habe nichts*."]}, titre: "La négation : nicht / kein", titreDE: "Verneinung: nicht / kein",
    theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Choisir entre nicht et kein", "Décliner kein"],
    grammairePoints: ["nicht", "kein"],
    exemplesPlus: [{"de":"Ich habe kein Geld dabei.","fr":"Je n'ai pas d'argent sur moi."},{"de":"Das ist nicht richtig.","fr":"Ce n'est pas correct."},{"de":"Er trinkt keinen Alkohol.","fr":"Il ne boit pas d'alcool."},{"de":"Wir wohnen nicht in Berlin.","fr":"Nous n'habitons pas à Berlin."},{"de":"— Magst du keinen Tee? — Doch!","fr":"— Tu n'aimes pas le thé ? — Si !"}],
    cours: [
      "Pour dire **non** ou exprimer une négation en allemand, tu disposes de deux outils, et tout l'enjeu est de savoir lequel choisir : **nicht** ou **kein**. Le bon réflexe se résume en une question : « est-ce que je nie un **nom** qui, à la forme positive, serait introduit par *ein/eine* ou par aucun article ? »",
      "On utilise **kein** pour nier un nom qui, à la forme positive, aurait *ein/eine* ou **pas d'article du tout**. *Kein* se comporte exactement comme *ein* : « *Ich habe ein Auto* » (j'ai une voiture) devient « *Ich habe kein Auto* » (je n'ai pas de voiture). De même : « *Ich trinke keinen Kaffee* » (je ne bois pas de café). En français, *kein* correspond à « pas de / aucun ».",
      "On utilise **nicht** dans tous les autres cas : pour nier un **verbe**, un **adjectif**, un **adverbe**, ou un nom précédé d'un **article défini** (der/die/das) ou d'un possessif. Exemples : « *Ich arbeite nicht* » (je ne travaille pas), « *Das ist nicht gut* » (ce n'est pas bon), « *Ich kenne den Mann nicht* » (je ne connais pas cet homme).",
      "La position de **nicht** demande de l'attention. En général, *nicht* se place **à la fin de la phrase** quand il nie tout l'énoncé (« *Ich verstehe das nicht* »). Mais il se place **juste devant** l'élément qu'il nie quand la négation est partielle : devant un adjectif (« *nicht schön* »), devant un complément de lieu (« *nicht in Berlin* »).",
      "Pour répondre simplement, « *Nein* » signifie « non ». Et il existe un troisième mot précieux, **doch**, qui sert à **contredire une question négative** : si l'on te demande « *Du kommst nicht?* » (tu ne viens pas ?) et que tu veux dire « si, je viens ! », tu réponds « *Doch!* ». Ce petit mot n'a pas d'équivalent direct en français."
    ],
    grammaire: [
      { titre: "nicht ou kein ?",
        regle: "**kein** nie un **nom** sans article ou avec un article indéfini (*ein*). **nicht** nie tout le reste : un **verbe**, un **adjectif**, un nom **défini** (avec *der/die/das*) ou un complément précis.",
        intro: "Le réflexe : « *Ich habe **ein** Auto* » → négation avec **kein** : « *Ich habe **kein** Auto* ». Mais « *Ich mag **den** Film* » → négation avec **nicht** : « *Ich mag den Film **nicht*** ».",
        tableau: { entetes: ["Cas", "Négation", "Exemple"], lignes: [["nom indéfini", "kein", "Ich habe keinen Hund."], ["nom défini", "nicht", "Ich mag den Film nicht."], ["verbe", "nicht", "Ich arbeite nicht."], ["adjectif", "nicht", "Das ist nicht gut."]] },
        schemas: [{ legende: "« nicht » se place généralement à la fin de la phrase.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "arbeite", r: "verbe (2)", c: "verbe" }, { m: "heute", r: "temps", c: "objet" }, { m: "nicht", r: "négation", c: "fin" }] }],
        exemples: [
          { de: "Ich habe keine Zeit.", fr: "Je n'ai pas le temps." },
          { de: "Das ist nicht gut.", fr: "Ce n'est pas bien." },
          { de: "Er kommt heute nicht.", fr: "Il ne vient pas aujourd'hui." }
        ],
        note: "kein se décline comme « ein » : keinen (m. acc.), keine (f./pl.), kein (n.).",
        attention: "**nicht** se place **avant** un adjectif ou un complément de lieu (« *Das ist **nicht** schön* », « *Ich fahre **nicht** nach Berlin* »), mais **à la fin** quand il nie le verbe seul (« *Ich arbeite **nicht*** »)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "nicht ou kein ?", question: "Ich habe ___ Zeit.", options: ["keine", "nicht", "kein", "nichts"], correct: 0, explication: "die Zeit (f.) sans article → keine." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich verstehe das ___.", options: ["nicht", "kein", "keine", "keinen"], correct: 0, explication: "On nie un verbe/nom défini → nicht." },
      { type: "trou", consigne: "Complétez (kein/keine/keinen).", texte: "Er trinkt {0} Bier und isst {1} Suppe.", accepte: [["kein"], ["keine"]], indice: "das Bier, die Suppe" },
      { type: "ordre", consigne: "Ordre des mots.", mots: ["Ich", "habe", "keinen", "Hunger"], correct: "Ich habe keinen Hunger", traduction: "Je n'ai pas faim." },
      { type: "traduction", consigne: "Traduisez.", source: "Je ne bois pas de café.", accepte: ["Ich trinke keinen Kaffee"], aide: "kein + accusatif (der Kaffee)" }
    ]
  },
  g05: {
    id: "g05",
    einstieg: {"intro":"Observe les prépositions qui situent un objet dans l'espace.","exemples":[{"de":"Das Buch ist auf dem Tisch.","fr":"Le livre est sur la table."},{"de":"Ich bin in der Schule.","fr":"Je suis à l'école."},{"de":"Die Lampe ist an der Wand.","fr":"La lampe est au mur."}],"question":"Quelle différence entre *auf*, *in* et *an* ?"},
    merke: ["*in* (dans), *auf* (sur, surface horizontale), *an* (à/contre, surface verticale).","Pour dire OÙ l'on est (*Wo?*), ces prépositions sont suivies du *datif* (dem/der).","*an* + mur/eau, *auf* + table/sol, *in* + espace fermé."],
    achtung: [{"erreur":"Ich bin in die Schule.","correct":"Ich bin in **der** Schule.","explication":"Lieu où l'on est (*Wo?*) → *datif* (der), pas accusatif."},{"erreur":"Das Bild ist auf der Wand.","correct":"Das Bild ist **an** der Wand.","explication":"Sur un mur (surface verticale) = *an*, pas *auf*."}],
    kontrast: {"titre":"Prépositions de lieu : allemand vs français","similitudes":["Les deux situent les objets dans l'espace."],"differences":["L'allemand distingue *auf* (sur, horizontal) et *an* (à/contre, vertical).","La préposition impose un *cas* au nom (datif pour *Wo?*).","Le français n'a pas de variation de cas après la préposition."]}, titre: "Prépositions de lieu", titreDE: "Lokale Präpositionen",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Situer un objet (Wo?)", "Employer les prépositions de lieu + datif"],
    grammairePoints: ["in, auf, neben…", "Wo? + datif"],
    exemplesPlus: [{"de":"Das Buch liegt auf dem Tisch.","fr":"Le livre est sur la table."},{"de":"Ich bin in der Schule.","fr":"Je suis à l'école."},{"de":"Die Katze schläft unter dem Stuhl.","fr":"Le chat dort sous la chaise."},{"de":"Wir warten an der Bushaltestelle.","fr":"Nous attendons à l'arrêt de bus."},{"de":"Das Bild hängt über dem Sofa.","fr":"Le tableau est accroché au-dessus du canapé."}],
    cours: [
      "Quand tu veux dire **où se trouve** quelque chose (la question **Wo?**, « où ? », sans déplacement), tu emploies des **prépositions de lieu** suivies du **datif**. Les plus courantes sont *in* (dans), *auf* (sur), *an* (à, contre, au bord de), *neben* (à côté de), *vor* (devant), *hinter* (derrière), *über* (au-dessus de), *unter* (sous) et *zwischen* (entre).",
      "L'idée clé est la suivante : ces neuf prépositions sont appelées **prépositions mixtes** (*Wechselpräpositionen*). Elles peuvent être suivies soit du **datif**, soit de l'accusatif. La règle est limpide : **pas de mouvement vers un lieu → datif** (on répond à *Wo?*). C'est ce cas que nous étudions ici.",
      "Au datif, les articles deviennent **dem** (masculin et neutre) et **der** (féminin). Ainsi : « *Das Buch liegt auf dem Tisch* » (le livre est sur la table), « *Ich bin in der Schule* » (je suis à l'école), « *Die Lampe steht neben dem Sofa* » (la lampe est à côté du canapé). Remarque comme *der Tisch* (masc.) devient *dem*, et *die Schule* (fém.) devient *der*.",
      "Quelques fusions sont quasi obligatoires, à l'oral comme à l'écrit : **in dem → im** (« *im Garten* », dans le jardin) et **an dem → am** (« *am Fenster* », à la fenêtre). Tu les entendras partout ; autant les adopter tout de suite.",
      "Petit piège à anticiper : la différence entre *in* et *auf*. *In* implique un espace clos (dans une pièce, une boîte, une ville) ; *auf* implique une surface (sur une table) ou certains lieux ouverts (« *auf dem Markt* », au marché). Quand le mouvement entrera en jeu (question **Wohin?**, « vers où ? »), ces mêmes prépositions passeront à l'accusatif — c'est l'objet d'une leçon suivante."
    ],
    grammaire: [
      { titre: "Où ? (Wo?) → datif",
        regle: "Pour dire **où se trouve** quelque chose (question **Wo?**), ces prépositions de lieu sont suivies du **datif**. Au datif : *der* → **dem**, *das* → **dem**, *die* → **der**.",
        intro: "Pense à la **position immobile** : *Das Buch ist **auf dem** Tisch* (sur la table). On contracte souvent : *in dem* = **im**, *an dem* = **am**.",
        tableau: { entetes: ["Préposition", "Sens", "Exemple"], lignes: [["in", "dans", "im Zimmer"], ["auf", "sur", "auf dem Tisch"], ["unter", "sous", "unter dem Bett"], ["neben", "à côté de", "neben der Tür"], ["vor / hinter", "devant / derrière", "vor dem Haus"], ["zwischen", "entre", "zwischen A und B"]] },
        exemples: [
          { de: "Die Lampe ist über dem Tisch.", fr: "La lampe est au-dessus de la table." },
          { de: "Die Katze schläft unter dem Bett.", fr: "Le chat dort sous le lit." },
          { de: "Ich wohne in der Stadt.", fr: "J'habite en ville." }
        ],
        note: "Datif : der→dem, das→dem, die→der. « in dem » = im, « an dem » = am.",
        attention: "Ces prépositions (*in, auf, an, unter…*) peuvent aussi prendre l'**accusatif** quand il y a un **déplacement** (question **Wohin?**). Ici, on parle de **position** (Wo?) → **datif**." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Das Buch ist ___ dem Tisch.", options: ["auf", "in", "neben", "an"], correct: 0, explication: "sur la table → auf." },
      { type: "qcm", consigne: "Datif correct.", question: "Die Lampe ist in ___ Küche.", options: ["der", "dem", "die", "den"], correct: 0, explication: "die Küche (f.) au datif → der." },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "auf", droite: "sur" }, { gauche: "unter", droite: "sous" }, { gauche: "neben", droite: "à côté de" }, { gauche: "zwischen", droite: "entre" }] },
      { type: "trou", consigne: "Complétez (dem/der).", texte: "Der Stuhl steht neben {0} Sofa und vor {1} Wand.", accepte: [["dem"], ["der"]], indice: "das Sofa, die Wand" },
      { type: "ordre", consigne: "Ordre des mots.", mots: ["Die", "Katze", "ist", "unter", "dem", "Bett"], correct: "Die Katze ist unter dem Bett", traduction: "Le chat est sous le lit." }
    ]
  },
  g06: {
    id: "g06",
    einstieg: {"intro":"Compare l'article du sujet et celui de l'objet (le COD).","exemples":[{"de":"Der Mann ist hier. Ich sehe den Mann.","fr":"L'homme est là. Je vois l'homme."},{"de":"Ich habe einen Hund.","fr":"J'ai un chien."},{"de":"Ich kaufe die Zeitung.","fr":"J'achète le journal."}],"question":"Quel genre change à l'accusatif (compare *der* → *den*) ?"},
    merke: ["L'accusatif marque le *COD* (l'objet direct de l'action). Question : **Wen?** (qui ?) / **Was?** (quoi ?).","Seul le *masculin* change : *der → den*, *ein → einen*, *mein → meinen*, *kein → keinen*.","Féminin (*die*), neutre (*das*) et pluriel ne changent pas à l'accusatif.","5 prépositions imposent TOUJOURS l'accusatif : *für, um, durch, gegen, ohne* (moyen mnémo : **FUDGO**).","Après *sein* (être), PAS d'accusatif → on reste au nominatif : *Das ist **ein** Kaffee*, mais *Ich trinke **einen** Kaffee*."],
    achtung: [{"erreur":"Ich sehe der Mann.","correct":"Ich sehe **den** Mann.","explication":"COD masculin → accusatif *den*, pas *der*."},{"erreur":"Ich habe ein Hund.","correct":"Ich habe **einen** Hund.","explication":"*ein* masculin à l'accusatif devient *einen*."},{"erreur":"ein Geschenk für der Vater","correct":"ein Geschenk für **den** Vater","explication":"*für* impose l'accusatif (mnémo FUDGO) : *der Vater* → *den Vater*."},{"erreur":"Das ist einen Kaffee.","correct":"Das ist **ein** Kaffee.","explication":"Après *sein*, on reste au nominatif (*ein*), pas d'accusatif. Contraste : *Ich trinke **einen** Kaffee* (trinken → accusatif)."}],
    kontrast: {"titre":"L'accusatif : allemand vs français","similitudes":["Les deux ont un complément d'objet direct (COD)."],"differences":["En allemand, le COD masculin change l'article (*den*, *einen*) ; en français, non.","Beaucoup de prépositions imposent l'accusatif (*für*, *ohne*, *durch*, *gegen*).","L'accusatif se *voit* sur l'article ; en français, le COD se repère à la place."]}, titre: "L'accusatif", titreDE: "Der Akkusativ",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Former l'accusatif (COD)", "Utiliser les pronoms à l'accusatif"],
    grammairePoints: ["den/einen", "mich/dich/ihn…"],
    exemplesPlus: [{"de":"Ich sehe den Mann dort.","fr":"Je vois l'homme là-bas."},{"de":"Sie kauft einen Apfel.","fr":"Elle achète une pomme."},{"de":"Er liebt dich wirklich.","fr":"Il t'aime vraiment."},{"de":"Wir brauchen einen neuen Computer.","fr":"Nous avons besoin d'un nouvel ordinateur."},{"de":"Kennst du mich noch?","fr":"Tu me reconnais encore ?"}],
    cours: [
      "L'**accusatif** est le cas du **complément d'objet direct** : c'est ce (ou celui) qui **subit** directement l'action du verbe. Dans « je vois *le chien* », « le chien » est à l'accusatif. La question qui le révèle est **Wen?** (qui ?) ou **Was?** (quoi ?) : « je vois quoi / qui ? → le chien ».",
      "Voici la **grande simplification** à retenir : par rapport au nominatif, **seul le masculin change** à l'accusatif. *der* devient **den**, et *ein* devient **einen**. Le féminin (*die / eine*), le neutre (*das / ein*) et le pluriel (*die*) **ne changent pas du tout**. Autrement dit, si tu maîtrises le nominatif, tu n'as qu'**une seule nouveauté** à mémoriser : der → den, ein → einen.",
      "Exemples concrets : « *Ich sehe den Mann* » (je vois l'homme — masc., donc *den*), « *Ich kaufe einen Apfel* » (j'achète une pomme — *der Apfel*, donc *einen*). Mais : « *Ich sehe die Frau* » (fém., inchangé), « *Ich habe ein Auto* » (neutre, inchangé). Beaucoup de verbes très courants entraînent l'accusatif : *haben* (avoir), *sehen* (voir), *kaufen* (acheter), *essen* (manger), *brauchen* (avoir besoin de), *nehmen* (prendre).",
      "Les **pronoms personnels** ont eux aussi une forme à l'accusatif, à connaître par cœur : *ich → mich*, *du → dich*, *er → ihn*, *sie → sie*, *es → es*, *wir → uns*, *ihr → euch*, *sie/Sie → sie/Sie*. Exemples : « *Ich liebe dich* » (je t'aime), « *Er kennt mich* » (il me connaît).",
      "Pourquoi ce cas est-il fondamental ? Parce que l'allemand, contrairement au français, ne s'appuie pas sur l'ordre des mots pour savoir qui fait quoi : c'est la **terminaison du cas** qui le dit. « *Den Mann sieht der Hund* » signifie toujours « le chien voit l'homme », même si *den Mann* est en tête, car *den* marque clairement l'objet. Maîtriser l'accusatif, c'est commencer à comprendre la logique profonde de la langue.",
      "Deux compléments essentiels pour maîtriser vraiment ce cas. **D'abord, cinq prépositions imposent TOUJOURS l'accusatif**, quel que soit le sens : **für** (pour), **um** (autour de / à), **durch** (à travers), **gegen** (contre), **ohne** (sans). Retiens-les avec le moyen mnémotechnique **FUDGO**. Exemples : « *ein Geschenk **für den** Vater* », « *Wir joggen **um den** Block* », « *Das Motorrad fährt **durch den** Tunnel* », « *ohne **einen** Plan* ». Dès qu'une de ces prépositions apparaît, le masculin passe à *den / einen*.",
      "**Ensuite, un piège capital : après le verbe *sein* (être), on n'emploie JAMAIS l'accusatif** — on reste au **nominatif**, car *sein* ne fait subir aucune action ; il relie simplement deux choses égales. Compare : « *Ich trinke **einen** Kaffee* » (accusatif, car *trinken* agit sur le café) mais « *Das ist **ein** Kaffee* » (nominatif, car *sein* ne fait qu'identifier). La même règle vaut après *werden* (devenir) et *bleiben* (rester). Enfin, sache que les prépositions « mixtes » (*in, auf, an, über…*), elles, ne prennent l'accusatif **que** lorsqu'il y a un **déplacement** (question *Wohin?*, « vers où ? ») : « *Ich gehe **in die** Stadt* » (accusatif, mouvement) vs « *Ich bin **in der** Stadt* » (datif, position) — un point que tu approfondiras avec le datif."
    ],
    grammaire: [
      { titre: "Articles à l'accusatif",
        regle: "Le **complément d'objet direct** (le COD, celui qui « subit » l'action) se met à l'**accusatif**. Bonne nouvelle : **seul le masculin change** — *der* → **den**, *ein* → **einen**. Féminin, neutre et pluriel ne bougent pas.",
        intro: "Compare : *Der Mann* (sujet) → *Ich sehe **den** Mann* (COD). *Ein Hund* → *Ich habe **einen** Hund*.",
        tableau: { entetes: ["Genre", "Nominatif", "Accusatif"], lignes: [["masculin", "der / ein", "den / einen"], ["féminin", "die / eine", "die / eine"], ["neutre", "das / ein", "das / ein"], ["pluriel", "die", "die"]] },
        schemas: [{ legende: "Le complément d'objet direct (COD) est à l'accusatif — seul le masculin change (der → den).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "sehe", r: "verbe (2)", c: "verbe" }, { m: "den Mann", r: "COD (accusatif)", c: "objet" }] }],
        exemples: [
          { de: "Ich nehme einen Kaffee.", fr: "Je prends un café." },
          { de: "Sie kauft eine Tasche.", fr: "Elle achète un sac." },
          { de: "Wir sehen das Haus.", fr: "Nous voyons la maison." }
        ],
        note: "Ex. : Ich sehe den Mann / einen Hund.",
        attention: "Beaucoup de débutants oublient le **-n** du masculin : on dit *Ich habe **einen** Hund* (et non « ~~ein Hund~~ »)." },
      { titre: "Pronoms personnels à l'accusatif", intro: "",
        tableau: { entetes: ["Nominatif", "Accusatif"], lignes: [["ich", "mich"], ["du", "dich"], ["er/sie/es", "ihn / sie / es"], ["wir", "uns"], ["ihr", "euch"], ["sie/Sie", "sie / Sie"]] },
        note: "Ex. : Ich liebe dich. / Ich sehe ihn." },
      { titre: "Prépositions toujours à l'accusatif (FUDGO)",
        regle: "Cinq prépositions sont **toujours** suivies de l'**accusatif**, quel que soit le sens : **für** (pour), **um** (autour de / à), **durch** (à travers), **gegen** (contre), **ohne** (sans).",
        intro: "Moyen mnémotechnique : **FUDGO** (*Für, Um, Durch, Gegen, Ohne*). Au masculin, l'article passe donc à *den / einen* : *für **den** Mann*, *ohne **einen** Plan*.",
        tableau: { entetes: ["Préposition", "Sens", "Exemple"], lignes: [["durch", "à travers", "durch den Tunnel"], ["für", "pour", "für meinen Vater"], ["gegen", "contre", "gegen die Wand"], ["ohne", "sans", "ohne einen Plan"], ["um", "autour de / à", "um den Block"]] },
        exemples: [
          { de: "Das Geschenk ist für dich.", fr: "Le cadeau est pour toi." },
          { de: "Wir joggen um den Block.", fr: "Nous courons autour du pâté de maisons." },
          { de: "Er kommt ohne seinen Bruder.", fr: "Il vient sans son frère." }
        ],
        note: "FUDGO = für, um, durch, gegen, ohne → toujours l'accusatif.",
        attention: "Ces cinq prépositions prennent l'accusatif **même sans mouvement**. À ne pas confondre avec les prépositions **mixtes** (*in, auf, an…*), qui ne prennent l'accusatif qu'avec un **déplacement** (question *Wohin?*)." },
      { titre: "Après « sein » : nominatif, pas accusatif !",
        regle: "Le verbe **sein** (être) — comme **werden** (devenir) et **bleiben** (rester) — n'a **pas** de COD : ce qui suit reste au **nominatif**, jamais à l'accusatif.",
        intro: "C'est LE piège du masculin : *Ich sehe **einen** Mann* (accusatif après *sehen*) mais *Das ist **ein** Mann* (nominatif après *sein*).",
        tableau: { entetes: ["Verbe", "Cas", "Exemple"], lignes: [["sein (être)", "nominatif", "Das ist ein Kaffee."], ["trinken (boire)", "accusatif", "Ich trinke einen Kaffee."], ["werden (devenir)", "nominatif", "Er wird ein guter Arzt."], ["kennen (connaître)", "accusatif", "Ich kenne einen guten Arzt."]] },
        note: "Règle d'or : sein / werden / bleiben → nominatif (jamais d'accusatif)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez l'accusatif.", question: "Ich nehme ___ Kaffee.", options: ["einen", "ein", "eine", "der"], correct: 0, explication: "der Kaffee (m.) → einen." },
      { type: "qcm", consigne: "Pronom accusatif.", question: "Ich liebe ___ ! (toi)", options: ["dich", "du", "dir", "dein"], correct: 0, explication: "du → dich (accusatif)." },
      { type: "trou", consigne: "Complétez (den/die/das).", texte: "Ich sehe {0} Mann und {1} Frau.", accepte: [["den"], ["die"]], indice: "der Mann → den ; die Frau → die" },
      { type: "association", consigne: "Associez nominatif → accusatif.", paires: [{ gauche: "ich", droite: "mich" }, { gauche: "du", droite: "dich" }, { gauche: "er", droite: "ihn" }, { gauche: "wir", droite: "uns" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je prends une salade.", accepte: ["Ich nehme einen Salat"], aide: "der Salat → accusatif" },
      { type: "qcm", consigne: "Préposition + accusatif (FUDGO).", question: "Das Geschenk ist ___ meinen Vater.", options: ["für", "mit", "bei", "aus"], correct: 0, explication: "für → accusatif (FUDGO) : für meinen Vater." },
      { type: "trou", consigne: "Complétez (accusatif après durch / für).", texte: "Wir gehen {0} den Park und kaufen etwas {1} den Abend.", accepte: [["durch"], ["für"]], indice: "durch = à travers, für = pour (FUDGO)" },
      { type: "qcm", consigne: "sein (nominatif) ou accusatif ?", question: "Das ist ___ Kaffee, aber ich trinke ___ Tee.", options: ["ein … einen", "einen … ein", "einen … einen", "ein … ein"], correct: 0, explication: "Après sein → nominatif (ein Kaffee) ; après trinken → accusatif (einen Tee)." },
      { type: "traduction", consigne: "Traduisez (FUDGO).", source: "Il vient sans son frère.", accepte: ["Er kommt ohne seinen Bruder"], aide: "ohne + accusatif : der Bruder → seinen Bruder" }
    ]
  },
  /* ---------------- Module A1.2 ---------------- */
  g07: {
    id: "g07",
    einstieg: {"intro":"Où va le 2e élément du verbe (en gras à l'oral) ?","exemples":[{"de":"Ich kann gut schwimmen.","fr":"Je sais bien nager."},{"de":"Ich stehe um 7 Uhr auf.","fr":"Je me lève à 7h."},{"de":"Ich habe Pizza gegessen.","fr":"J'ai mangé une pizza."}],"question":"Où se placent *schwimmen*, *auf* et *gegessen* dans la phrase ?"},
    merke: ["Verbe modal (*können, müssen…*) : le verbe principal va à l'*infinitif en fin de phrase*.","Verbe séparable : la *particule* (*auf-, an-, ein-*) se détache et part à la *fin*.","Passé composé : *haben/sein* + *participe* (*ge…t / ge…en*) en fin de phrase."],
    achtung: [{"erreur":"Ich kann schwimmen gut.","correct":"Ich kann gut **schwimmen**.","explication":"Avec un modal, l'infinitif va tout à la *fin* de la phrase."},{"erreur":"Ich aufstehe um 7.","correct":"Ich **stehe** um 7 **auf**.","explication":"Verbe séparable : la particule *auf* se détache et part à la fin."},{"erreur":"Ich bin Pizza gegessen.","correct":"Ich **habe** Pizza gegessen.","explication":"*essen* forme son passé avec *haben*, pas *sein*."}],
    kontrast: {"titre":"Verbes composés : allemand vs français","similitudes":["Les deux ont des verbes à plusieurs éléments et un passé composé."],"differences":["L'allemand rejette l'infinitif ou le participe en *fin de phrase*.","Les verbes séparables coupent en deux (*aufstehen* → *ich stehe… auf*) - inexistant en français.","Le choix *haben/sein* dépend du verbe (mouvement/changement d'état → *sein*)."]}, titre: "Les verbes : modaux, séparables, passé", titreDE: "Modalverben, trennbare Verben, Perfekt",
    theme: "Grammaire", type: "grammaire", duree: 40,
    objectifs: ["Employer les verbes de modalité", "Reconnaître les verbes séparables", "Former le passé composé"],
    grammairePoints: ["müssen/können/wollen", "trennbare Verben", "Perfekt"],
    exemplesPlus: [{"de":"Ich muss heute lange arbeiten.","fr":"Je dois travailler longtemps aujourd'hui."},{"de":"Kannst du mir helfen?","fr":"Peux-tu m'aider ?"},{"de":"Er steht jeden Morgen um sechs Uhr auf.","fr":"Il se lève à six heures chaque matin."},{"de":"Wir haben gestern Fußball gespielt.","fr":"Nous avons joué au foot hier."},{"de":"Ich bin nach München gefahren.","fr":"Je suis allé à Munich."}],
    cours: [
      "Cette leçon réunit trois mécanismes essentiels du verbe allemand. Le premier : les **verbes de modalité** (*Modalverben*), qui expriment une nuance — la possibilité, l'obligation, la volonté. Les principaux sont *können* (pouvoir), *müssen* (devoir), *wollen* (vouloir), *sollen* (devoir, conseil), *dürfen* (avoir le droit) et *mögen* (aimer).",
      "Leur fonctionnement crée une structure très typique de l'allemand : le **verbe modal est conjugué en 2ᵉ position**, et **l'autre verbe part à l'infinitif tout à la fin** de la phrase. On parle de structure « en parenthèse » (*Satzklammer*). Exemple : « *Ich muss heute viel arbeiten* » (je dois beaucoup travailler aujourd'hui) — *muss* en 2ᵉ position, *arbeiten* rejeté à la fin.",
      "Deuxième mécanisme : les **verbes à particule séparable** (*trennbare Verben*), comme *aufstehen* (se lever), *einkaufen* (faire les courses), *ankommen* (arriver). Au présent, la **particule** (auf-, ein-, an-) **se détache** et file en fin de phrase : « *Ich stehe um 7 Uhr auf* » (je me lève à 7 h). On retrouve la logique de parenthèse : verbe conjugué en 2ᵉ position, particule à la fin.",
      "Troisième mécanisme, capital : le **Perfekt**, le temps du **passé parlé** (celui qu'on utilise à l'oral et dans les messages). Il se forme avec un **auxiliaire conjugué** (*haben* ou *sein*) en 2ᵉ position + le **participe passé** en fin de phrase. Le participe se forme souvent en *ge- … -t* : *machen → gemacht*, *spielen → gespielt*. Exemple : « *Ich habe Fußball gespielt* ».",
      "Quand choisir **sein** plutôt que **haben** ? On emploie *sein* avec les verbes de **déplacement** (gehen, fahren, kommen) et de **changement d'état** (aufstehen, einschlafen) : « *Ich bin nach Berlin gefahren* ». Tous les autres verbes utilisent *haben*. Attention aux verbes forts, dont le participe se termine souvent en *-en* avec parfois un changement de voyelle : *sprechen → gesprochen*, *trinken → getrunken*, *sehen → gesehen*."
    ],
    grammaire: [
      { titre: "Verbes de modalité",
        regle: "Un verbe de modalité (**müssen** devoir, **können** pouvoir, **wollen** vouloir…) se conjugue en **2ᵉ position**, et le **2ᵉ verbe part à l'infinitif, tout à la fin** de la phrase. C'est la « parenthèse verbale » (*Satzklammer*).",
        intro: "Particularité : à **ich** et **er/sie/es**, le modal **n'a pas de terminaison** (*ich **muss***, *er **kann***). Et la voyelle change souvent au pluriel : *wir **müssen***.",
        tableau: { entetes: ["Pronom", "müssen", "können", "wollen"], lignes: [["ich", "muss", "kann", "will"], ["du", "musst", "kannst", "willst"], ["er/sie/es", "muss", "kann", "will"], ["wir/sie/Sie", "müssen", "können", "wollen"], ["ihr", "müsst", "könnt", "wollt"]] },
        exemples: [
          { de: "Ich muss heute arbeiten.", fr: "Je dois travailler aujourd'hui." },
          { de: "Kannst du mir helfen?", fr: "Peux-tu m'aider ?" },
          { de: "Wir wollen ins Kino gehen.", fr: "Nous voulons aller au cinéma." }
        ],
        note: "ich et er/sie/es n'ont pas de terminaison.",
        attention: "L'infinitif va **à la fin**, pas juste après le modal : on dit *Ich muss heute **arbeiten*** (et non « ~~Ich muss arbeiten heute~~ »)." },
      { titre: "Séparables & Perfekt",
        regle: "**Verbe séparable** (*auf**stehen***, *ein**kaufen***) : au présent, le **préfixe se détache et part à la fin**. **Perfekt** (passé composé) : **haben** ou **sein** en 2ᵉ position + **participe** (*ge…t* / *ge…en*) à la fin.",
        intro: "Choix de l'auxiliaire au Perfekt : **sein** pour les verbes de **mouvement** ou de **changement d'état** (*gehen*, *fahren*, *aufstehen*) ; **haben** pour tous les autres.",
        tableau: { entetes: ["Infinitif", "Présent / Perfekt"], lignes: [["aufstehen", "ich stehe … auf"], ["machen", "ich habe … gemacht"], ["fahren", "ich bin … gefahren"]] },
        schemas: [
          { legende: "Verbe de modalité — la « parenthèse verbale » (Satzklammer).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "muss", r: "modal (2)", c: "verbe" }, { m: "heute", r: "…", c: "objet" }, { m: "arbeiten", r: "infinitif (fin)", c: "fin" }] },
          { legende: "Verbe séparable — le préfixe part à la fin.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "stehe", r: "verbe (2)", c: "verbe" }, { m: "um 7 Uhr", r: "…", c: "objet" }, { m: "auf", r: "préfixe (fin)", c: "fin" }] },
          { legende: "Passé composé (Perfekt) — participe à la fin.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "habe", r: "auxiliaire (2)", c: "verbe" }, { m: "Pizza", r: "…", c: "objet" }, { m: "gegessen", r: "participe (fin)", c: "fin" }] }
        ],
        exemples: [
          { de: "Ich stehe um sieben Uhr auf.", fr: "Je me lève à sept heures." },
          { de: "Ich habe Pizza gegessen.", fr: "J'ai mangé une pizza." },
          { de: "Sie ist nach Berlin gefahren.", fr: "Elle est allée (en véhicule) à Berlin." }
        ],
        note: "Mouvement (fahren, gehen, fliegen) → auxiliaire SEIN. Sinon HABEN.",
        attention: "Au Perfekt, le préfixe séparable se **recolle** dans le participe : *einkaufen* → *ich habe **eingekauft***. Les verbes en **-ieren** n'ont **pas** de *ge-* : *studieren* → *studiert*." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Où va l'infinitif après un modal ?", options: ["À la fin", "En 2e position", "Au début"], correct: 0, explication: "Modal conjugué en 2e, infinitif à la fin." },
      { type: "conjugaison", consigne: "Conjuguez « können ».", verbe: "können", items: [{ pronom: "ich", reponse: "kann" }, { pronom: "du", reponse: "kannst" }, { pronom: "er/sie/es", reponse: "kann" }, { pronom: "wir", reponse: "können" }, { pronom: "ihr", reponse: "könnt" }, { pronom: "sie/Sie", reponse: "können" }] },
      { type: "qcm", consigne: "Auxiliaire ?", question: "Ich ___ nach Berlin gefahren.", options: ["bin", "habe", "ist", "hat"], correct: 0, explication: "fahren (mouvement) → sein." },
      { type: "trou", consigne: "Participe passé de « machen ».", texte: "Was hast du {0}?", accepte: [["gemacht"]], indice: "ge-…-t" },
      { type: "ordre", consigne: "Ordre (séparable).", mots: ["Ich", "stehe", "um", "sieben", "auf"], correct: "Ich stehe um sieben auf", traduction: "Je me lève à sept heures." }
    ]
  },
  g08: {
    id: "g08",
    einstieg: {"intro":"Observe la préposition selon qu'il s'agit d'un jour, d'une heure ou d'un mois.","exemples":[{"de":"am Montag","fr":"lundi"},{"de":"um 8 Uhr","fr":"à 8 heures"},{"de":"im Januar","fr":"en janvier"}],"question":"Quelle préposition pour un jour, une heure, un mois ?"},
    merke: ["*am* + jour ou partie de journée (*am Montag*, *am Morgen*).","*um* + heure précise (*um 8 Uhr*).","*im* + mois ou saison (*im Mai*, *im Sommer*)."],
    achtung: [{"erreur":"in Montag","correct":"**am** Montag","explication":"Les jours prennent *am* (= an dem), pas *in*."},{"erreur":"am 8 Uhr","correct":"**um** 8 Uhr","explication":"L'heure précise prend *um*."},{"erreur":"am Januar","correct":"**im** Januar","explication":"Les mois prennent *im* (= in dem)."}],
    kontrast: {"titre":"Le temps : allemand vs français","similitudes":["Les deux utilisent des prépositions pour situer dans le temps."],"differences":["Là où le français dit « le lundi / à 8h / en janvier », l'allemand distingue *am / um / im*.","Pas de préposition devant l'année : *2024* (et non *im 2024*).","*um* = heure, *am* = jour, *im* = mois - à mémoriser."]}, titre: "Prépositions de temps", titreDE: "Temporale Präpositionen",
    theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Choisir la bonne préposition de temps"],
    grammairePoints: ["am, um, im, von…bis"],
    exemplesPlus: [{"de":"Am Montag habe ich frei.","fr":"Lundi, je suis en congé."},{"de":"Der Kurs beginnt um neun Uhr.","fr":"Le cours commence à neuf heures."},{"de":"Im Sommer fahren wir ans Meer.","fr":"En été, nous allons à la mer."},{"de":"Ich arbeite von Montag bis Freitag.","fr":"Je travaille du lundi au vendredi."},{"de":"Seit zwei Jahren lerne ich Deutsch.","fr":"J'apprends l'allemand depuis deux ans."}],
    cours: [
      "Pour situer une action **dans le temps**, l'allemand utilise des prépositions précises, et le piège pour un francophone est qu'on ne peut pas les traduire mot à mot. Il faut apprendre quelle préposition va avec quel type d'expression. La plupart de ces prépositions de temps sont suivies du **datif**.",
      "Avec les **moments de la journée** et les **jours**, on emploie **am** (contraction de *an dem*) : « *am Morgen* » (le matin), « *am Montag* » (lundi), « *am Wochenende* » (le week-end). Seule exception à mémoriser : « *in der Nacht* » (la nuit), qui prend *in*.",
      "Pour l'**heure précise**, on utilise **um** : « *um 8 Uhr* » (à 8 heures), « *um Mitternacht* » (à minuit). Pour les **mois** et les **saisons**, on emploie **im** (contraction de *in dem*) : « *im Januar* » (en janvier), « *im Sommer* » (en été), « *im Winter* » (en hiver).",
      "Pour exprimer une **durée encadrée**, le couple **von … bis** est parfait : « *von Montag bis Freitag* » (du lundi au vendredi), « *von 9 bis 17 Uhr* ». Pour dire **depuis**, on utilise **seit** + datif (« *seit zwei Jahren* », depuis deux ans) ; et pour dire **dans / d'ici** un certain temps, **in** + datif (« *in einer Woche* », dans une semaine).",
      "Un dernier réflexe utile : avec les **années**, l'allemand ne met **pas de préposition** comme en français. On ne dit pas « in 2024 » mais simplement « *2024* » ou « *im Jahr 2024* ». Récapitule régulièrement ces petites cases (am / um / im / von…bis / seit / in) : ce sont elles qui rendent ton allemand naturel quand tu parles de ton emploi du temps."
    ],
    grammaire: [
      { titre: "am / um / im / von…bis",
        regle: "Chaque type d'indication temporelle a **sa** préposition : **am** pour les **jours/moments de la journée**, **um** pour l'**heure précise**, **im** pour les **mois/saisons**, **von … bis** pour une **durée**.",
        intro: "Moyen mnémotechnique : **am** M**o**ntag, **um** acht **U**hr, **im** S**o**mmer. (*am* = an dem, *im* = in dem.)",
        tableau: { entetes: ["Préposition", "Usage", "Exemple"], lignes: [["am", "jours, dates, moments", "am Montag, am Abend"], ["um", "heure précise", "um 9 Uhr"], ["im", "mois, saisons", "im Mai, im Winter"], ["von … bis", "de … à", "von 9 bis 17 Uhr"], ["ab", "à partir de", "ab Montag"]] },
        exemples: [
          { de: "Am Montag habe ich frei.", fr: "Lundi, je suis libre." },
          { de: "Der Kurs beginnt um 9 Uhr.", fr: "Le cours commence à 9 h." },
          { de: "Im Sommer fahren wir ans Meer.", fr: "En été, nous allons à la mer." }
        ],
        note: "Exception : « in der Nacht ».",
        attention: "Pas de préposition avec *heute*, *morgen*, *gestern* : on dit ***Heute** arbeite ich* (et non « ~~am heute~~ »)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Heure précise → quelle préposition ?", options: ["um", "am", "im", "in"], correct: 0, explication: "um 9 Uhr." },
      { type: "qcm", consigne: "Choisissez.", question: "___ Sommer ist es warm.", options: ["Im", "Am", "Um", "In"], correct: 0, explication: "saison → im." },
      { type: "trou", consigne: "Complétez (am/um/im).", texte: "{0} Montag habe ich {1} 10 Uhr einen Termin.", accepte: [["am"], ["um"]], indice: "jour / heure" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "um", droite: "9 Uhr" }, { gauche: "am", droite: "Montag" }, { gauche: "im", droite: "Januar" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Lundi à huit heures.", accepte: ["Am Montag um acht Uhr", "am Montag um 8 Uhr"], aide: "am … um …" }
    ]
  },
  g09: {
    id: "g09",
    einstieg: {"intro":"Compare la place du verbe après ces petits mots de liaison.","exemples":[{"de":"Ich bleibe zu Hause, denn es regnet.","fr":"Je reste à la maison, car il pleut."},{"de":"Ich weiß, dass er kommt.","fr":"Je sais qu'il vient."},{"de":"Ich lese, weil ich Zeit habe.","fr":"Je lis parce que j'ai le temps."}],"question":"Où se place le verbe après *weil* / *dass* ?"},
    merke: ["Coordination (*und, oder, aber, denn*) : *ne change pas* l'ordre des mots.","Subordination (*weil, dass, wenn, ob*) : *rejette le verbe conjugué à la fin*.","Virgule obligatoire devant *dass, weil, wenn*…"],
    achtung: [{"erreur":"…, weil ich habe Zeit.","correct":"…, weil ich Zeit **habe**.","explication":"Après *weil*, le verbe conjugué part en *fin* de subordonnée."},{"erreur":"Ich bleibe, denn habe ich Zeit.","correct":"…, denn ich **habe** Zeit.","explication":"*denn* ne change pas l'ordre : sujet puis verbe en position 2."}],
    kontrast: {"titre":"Les conjonctions : allemand vs français","similitudes":["*denn/weil* ≈ car/parce que ; *aber* ≈ mais ; *und* ≈ et."],"differences":["Après une subordination (*weil, dass*), l'allemand met le verbe à la *fin* - pas le français.","*denn* (coordination) et *weil* (subordination) traduisent « car » mais changent l'ordre différemment.","La virgule est grammaticale (obligatoire) en allemand devant la subordonnée."]}, titre: "Les conjonctions", titreDE: "Konjunktionen",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Relier deux phrases", "Distinguer und/aber/denn et weil (verbe à la fin)"],
    grammairePoints: ["und, oder, aber, denn", "weil"],
    exemplesPlus: [{"de":"Ich bleibe zu Hause, denn ich bin krank.","fr":"Je reste à la maison, car je suis malade."},{"de":"Ich bleibe zu Hause, weil ich krank bin.","fr":"Je reste à la maison parce que je suis malade."},{"de":"Möchtest du Kaffee oder Tee?","fr":"Veux-tu du café ou du thé ?"},{"de":"Es ist spät, aber ich bin nicht müde.","fr":"Il est tard, mais je ne suis pas fatigué."},{"de":"Ich weiß, dass du recht hast.","fr":"Je sais que tu as raison."}],
    cours: [
      "Les **conjonctions** servent à relier deux idées. En allemand, elles se divisent en deux familles qui se comportent de façon **radicalement différente** vis-à-vis de la place du verbe. Comprendre cette différence, c'est franchir une étape majeure vers des phrases riches et correctes.",
      "La première famille, ce sont les **conjonctions de coordination** : *und* (et), *oder* (ou), *aber* (mais), *denn* (car), *sondern* (mais au contraire). Leur grande qualité : elles **ne changent rien** à l'ordre des mots. Le verbe reste en **2ᵉ position** dans les deux propositions : « *Ich bleibe zu Hause, denn ich bin krank* » (je reste à la maison, car je suis malade).",
      "La seconde famille, ce sont les **conjonctions de subordination** : *weil* (parce que), *dass* (que), *wenn* (si/quand), *ob* (si, interrogatif), *obwohl* (bien que), *als* (quand, dans le passé). Avec elles, attention : le **verbe conjugué est rejeté tout à la fin** de la subordonnée ! Exemple : « *Ich bleibe zu Hause, weil ich krank bin* ». Compare avec *denn* ci-dessus : même sens, mais *bin* a changé de place.",
      "Une virgule sépare toujours les deux propositions. Et si la subordonnée commence la phrase, la principale qui suit commence alors par son verbe (à cause de la règle de la 2ᵉ position) : « *Weil ich krank bin, bleibe ich zu Hause* ». On obtient une suite « verbe, verbe » au centre de la phrase, très caractéristique de l'allemand.",
      "Conseil : entraîne-toi spécialement avec *weil* et *dass*, les plus fréquentes, en te répétant la consigne « weil → verbe à la fin ». Cet automatisme te servira toute ta vie d'apprenant, car il s'applique à **toutes** les subordonnées sans exception."
    ],
    grammaire: [
      { titre: "Coordination (verbe en 2e position)", intro: "und (et), oder (ou), aber (mais), denn (car) ne changent pas l'ordre.",
        tableau: { entetes: ["Conjonction", "Exemple"], lignes: [["und", "Es ist warm und sonnig."], ["aber", "Es ist kalt, aber schön."], ["denn", "Ich bleibe, denn es regnet."]] },
        note: "Ces 4 conjonctions gardent l'ordre normal sujet-verbe." },
      { titre: "Subordination : weil (verbe à la FIN)",
        regle: "**weil** (parce que) introduit une **subordonnée** : il **rejette le verbe conjugué tout à la fin**. C'est LA grande différence avec *denn* (qui, lui, garde le verbe en 2ᵉ position).",
        intro: "Compare : *Ich bleibe, **denn** ich **bin** krank.* (verbe 2ᵉ) vs *Ich bleibe, **weil** ich krank **bin**.* (verbe fin). Même sens, ordre différent.",
        tableau: { entetes: ["Phrase", "Sens"], lignes: [["Ich bleibe, weil es regnet.", "… parce qu'il pleut."], ["…, weil ich krank bin.", "… parce que je suis malade."]] },
        exemples: [
          { de: "Ich lerne Deutsch, weil ich in Berlin wohne.", fr: "J'apprends l'allemand parce que j'habite à Berlin." },
          { de: "Sie kommt nicht, weil sie krank ist.", fr: "Elle ne vient pas parce qu'elle est malade." }
        ],
        attention: "N'oublie pas la **virgule** avant *weil*, et place bien le verbe **à la fin** : *…, weil ich müde **bin*** (et non « ~~weil ich bin müde~~ »).",
        schemas: [
          { legende: "Coordination (und / aber / denn) : le verbe reste en 2e position.", mots: [{ m: "Es ist kalt,", r: "phrase 1", c: "objet" }, { m: "aber", r: "connecteur", c: "conj" }, { m: "die Sonne", r: "sujet", c: "sujet" }, { m: "scheint", r: "verbe (2)", c: "verbe" }] },
          { legende: "Subordination (weil) : le verbe est rejeté à la FIN.", mots: [{ m: "Ich bleibe,", r: "principale", c: "objet" }, { m: "weil", r: "connecteur", c: "conj" }, { m: "es", r: "sujet", c: "sujet" }, { m: "regnet", r: "verbe (fin)", c: "fin" }] }
        ],
        note: "Comparez : « denn ich bin krank » (2e) vs « weil ich krank bin » (fin)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Avec « weil », le verbe va…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "weil = subordination → verbe à la fin." },
      { type: "qcm", consigne: "Conjonction logique.", question: "Es ist kalt, ___ die Sonne scheint.", options: ["aber", "und", "denn", "weil"], correct: 0, explication: "opposition → aber." },
      { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Ich komme nicht, weil ich krank {0}.", accepte: [["bin"]], indice: "weil → verbe à la fin" },
      { type: "ordre", consigne: "Ordre (subordonnée).", mots: ["weil", "es", "einen", "Stau", "gibt"], correct: "weil es einen Stau gibt", traduction: "parce qu'il y a un embouteillage" },
      { type: "qcm", consigne: "Choisissez.", question: "Ich lerne Deutsch, ___ ich in Berlin wohne.", options: ["weil", "aber", "oder", "und"], correct: 0, explication: "cause → weil." }
    ]
  },
  g10: {
    id: "g10",
    einstieg: {"intro":"À qui donne-t-on ? Observe l'article du destinataire.","exemples":[{"de":"Ich gebe dem Mann das Buch.","fr":"Je donne le livre à l'homme."},{"de":"Ich helfe der Frau.","fr":"J'aide la femme."},{"de":"Das Auto gehört dem Kind.","fr":"La voiture appartient à l'enfant."}],"question":"Comment changent *der/die/das* au datif ?"},
    merke: ["Le datif marque souvent le *destinataire* — question **Wem?** (à qui ?).","Articles au datif : *der→dem*, *die→der*, *das→dem*, pluriel *die→den* (+ -n au nom).","Pronoms au datif : *mir, dir, ihm, ihr, uns, euch, ihnen* (*Ihnen* poli).","Certains verbes exigent le datif : *helfen, danken, gehören, gefallen*."],
    achtung: [{"erreur":"Ich helfe die Frau.","correct":"Ich helfe **der** Frau.","explication":"*helfen* exige le *datif* : der Frau, pas die Frau."},{"erreur":"mit der Auto","correct":"mit **dem** Auto","explication":"*Auto* est neutre → datif *dem*."},{"erreur":"mit die Kindern","correct":"mit **den** Kindern","explication":"Datif pluriel : article *den* + nom en *-n*."}],
    kontrast: {"titre":"Le datif : allemand vs français","similitudes":["Le datif ≈ le complément d'attribution (« à quelqu'un »)."],"differences":["L'allemand *marque* le datif sur l'article (dem/der) ; le français utilise « à ».","Des verbes comme *helfen, danken* prennent le datif sans préposition (≠ « aider quelqu'un »).","Au datif pluriel, le nom prend un *-n* (den Kindern, den Männern)."]}, titre: "Le groupe de noms au datif", titreDE: "Der Dativ",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Former le datif", "Employer les prépositions + datif (mit, zu, bei…)"],
    grammairePoints: ["dem/der/dem", "mit, zu, bei, von…"],
    exemplesPlus: [{"de":"Ich helfe meiner Mutter.","fr":"J'aide ma mère."},{"de":"Das Buch gehört dem Lehrer.","fr":"Le livre appartient au professeur."},{"de":"Wir fahren mit dem Bus.","fr":"Nous allons en bus."},{"de":"Er gibt dem Kind einen Apfel.","fr":"Il donne une pomme à l'enfant."},{"de":"Nach der Arbeit gehe ich nach Hause.","fr":"Après le travail, je rentre à la maison."}],
    cours: [
      "Le **datif** est le cas du **complément d'objet indirect** : il répond à la question **Wem?** (« à qui ? »). Dans « je donne le livre *à mon ami* », « à mon ami » est au datif. C'est le cas de la personne à qui l'on donne, dit, montre ou achète quelque chose.",
      "Les articles au datif sont à mémoriser car ils changent pour tous les genres : masculin **dem**, neutre **dem**, féminin **der**, et — particularité importante — le **pluriel devient den**, avec en plus un **-n** ajouté au nom (s'il ne se termine pas déjà par -n ou -s) : « *Ich helfe den Kindern* » (j'aide les enfants). Pour les indéfinis : **einem** (masc./neutre), **einer** (fém.).",
      "Trois usages principaux. D'abord, après certains **verbes qui exigent le datif** : *helfen* (aider), *danken* (remercier), *gefallen* (plaire), *gehören* (appartenir), *antworten* (répondre). Exemple : « *Das Buch gehört dem Lehrer* » (le livre appartient au professeur). Ces verbes sont à apprendre comme des « verbes à datif ».",
      "Ensuite, après un groupe de **prépositions toujours suivies du datif** : *mit* (avec), *zu* (à, vers), *bei* (chez, près de), *von* (de), *nach* (après, vers), *aus* (hors de), *seit* (depuis). Exemple : « *Ich fahre mit dem Bus* » (je vais en bus). Les contractions sont fréquentes : *zu dem → zum*, *zu der → zur*, *bei dem → beim*, *von dem → vom*.",
      "Enfin, quand une phrase contient **à la fois** un objet au datif (la personne) et un objet à l'accusatif (la chose), l'ordre habituel est **datif avant accusatif** quand ce sont des noms : « *Ich gebe dem Mann das Buch* ». Maîtriser le couple datif / accusatif, c'est pouvoir exprimer des actions complètes : qui fait quoi, à qui, avec quoi."
    ],
    grammaire: [
      { titre: "Articles au datif",
        regle: "Le **datif** s'emploie pour le **complément d'objet indirect** (« à qui ? ») et **après certaines prépositions**. Articles : *der/das* → **dem**, *die* → **der**, pluriel → **den** (+ **-n** au nom).",
        intro: "Sept prépositions sont **toujours** suivies du datif — à mémoriser ensemble : **mit, zu, bei, von, aus, nach, seit**.",
        tableau: { entetes: ["Genre", "Nominatif", "Datif"], lignes: [["masculin", "der / ein", "dem / einem"], ["féminin", "die / eine", "der / einer"], ["neutre", "das / ein", "dem / einem"], ["pluriel", "die", "den (+ -n)"]] },
        exemples: [
          { de: "Ich fahre mit dem Bus.", fr: "Je vais en bus." },
          { de: "Sie wohnt bei der Mutter.", fr: "Elle habite chez sa mère." },
          { de: "Wir kommen aus der Schweiz.", fr: "Nous venons de Suisse." }
        ],
        note: "Prépositions toujours + datif : mit, zu, bei, von, aus, nach, seit.",
        attention: "Au **pluriel datif**, le nom prend un **-n** s'il ne l'a pas déjà : *die Kinder* → *mit **den Kindern***. Contractions fréquentes : *zu dem* = **zum**, *zu der* = **zur**, *bei dem* = **beim**." },
      { titre: "Pronoms personnels au datif",
        regle: "Les pronoms ont aussi une forme au **datif** (« à moi, à toi… »), à connaître par cœur — très fréquente avec *helfen, geben, gefallen, gehören*.",
        intro: "*Gib **mir** das Buch* (donne-**moi** le livre), *Ich helfe **dir*** (je **t'**aide), *Das gehört **ihm*** (ça **lui** appartient).",
        tableau: { entetes: ["Nominatif", "Accusatif", "Datif"], lignes: [["ich", "mich", "mir"], ["du", "dich", "dir"], ["er / es", "ihn / es", "ihm"], ["sie (elle)", "sie", "ihr"], ["wir", "uns", "uns"], ["ihr", "euch", "euch"], ["sie / Sie", "sie / Sie", "ihnen / Ihnen"]] },
        exemples: [
          { de: "Kannst du mir helfen?", fr: "Peux-tu m'aider ?" },
          { de: "Ich gebe dir mein Buch.", fr: "Je te donne mon livre." },
          { de: "Das Auto gehört ihnen.", fr: "La voiture leur appartient." }
        ],
        note: "Datif : mir, dir, ihm, ihr, uns, euch, ihnen (Ihnen poli).",
        attention: "Avec **deux pronoms**, l'ordre est **accusatif avant datif** : *Ich gebe **es dir*** (je te le donne). Mais avec des **noms**, c'est l'inverse : datif avant accusatif (*Ich gebe **dem Kind das Buch***)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez (mit + datif).", question: "Ich fahre mit ___ Bus.", options: ["dem", "der", "den", "das"], correct: 0, explication: "der Bus (m.) au datif → dem." },
      { type: "qcm", consigne: "Datif.", question: "Ich wohne bei ___ Mutter.", options: ["der", "dem", "die", "den"], correct: 0, explication: "die Mutter (f.) → der." },
      { type: "trou", consigne: "Complétez (dem/der).", texte: "Ich fahre mit {0} Bahn zu {1} Arzt.", accepte: [["der"], ["dem"]], indice: "die Bahn (f.), der Arzt (m.)" },
      { type: "association", consigne: "Associez (toujours + datif).", paires: [{ gauche: "mit", droite: "avec" }, { gauche: "zu", droite: "vers/chez" }, { gauche: "bei", droite: "chez" }, { gauche: "aus", droite: "de (origine)" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je voyage en train. (avec le train)", accepte: ["Ich fahre mit dem Zug", "Ich reise mit dem Zug"], aide: "mit dem Zug" },
      { type: "qcm", consigne: "Pronom au datif.", question: "Kannst du ___ helfen? (à moi)", options: ["mir", "mich", "ich", "mein"], correct: 0, explication: "helfen + datif → mir (à moi)." },
      { type: "trou", consigne: "Complétez (pronom au datif).", texte: "Das Buch gefällt {0}. (à eux)", accepte: [["ihnen"]], indice: "sie (pluriel) → ihnen" }
    ]
  },
  g11: {
    id: "g11",
    einstieg: {"intro":"Aller quelque part, venir de quelque part : observe les prépositions.","exemples":[{"de":"Ich gehe nach Hause.","fr":"Je rentre à la maison."},{"de":"Ich fahre in die Stadt.","fr":"Je vais en ville."},{"de":"Ich komme aus Frankreich.","fr":"Je viens de France."}],"question":"Quelle préposition pour aller (*wohin?*) et pour venir (*woher?*) ?"},
    merke: ["*Wohin?* (direction) : *in* + *accusatif* (*in die Stadt*), *nach* + ville/pays, *zu* + personne.","*Woher?* (origine) : *aus* (*aus Frankreich*), *von*.","*nach Hause* (rentrer) / *zu Hause* (être à la maison) : expressions figées."],
    achtung: [{"erreur":"Ich gehe zu Hause.","correct":"Ich gehe **nach** Hause.","explication":"Aller à la maison = *nach Hause* ; être à la maison = *zu Hause*."},{"erreur":"Ich fahre in der Stadt.","correct":"Ich fahre in **die** Stadt.","explication":"Direction (*wohin?*) → *accusatif* (die Stadt), pas datif."},{"erreur":"Ich komme von Frankreich.","correct":"Ich komme **aus** Frankreich.","explication":"Venir d'un pays/d'une ville = *aus*, pas *von*."}],
    kontrast: {"titre":"Direction et origine : allemand vs français","similitudes":["Les deux distinguent aller et venir."],"differences":["L'allemand oppose *wohin?* (accusatif) et *wo?* (datif) - même préposition, cas différent.","*nach* (villes/pays sans article) vs *in* (avec article) pour la direction.","*aus* (sortir de) ≠ *von* - distinction absente en français."]}, titre: "Indicateurs de lieu", titreDE: "Ortsangaben",
    theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Dire où (Wo?) et où aller (Wohin?)", "Choisir nach / zu / in"],
    grammairePoints: ["nach, zu, in", "Wo? / Wohin?"],
    exemplesPlus: [{"de":"Ich gehe in die Schule.","fr":"Je vais à l'école."},{"de":"Wir fahren nach Italien.","fr":"Nous allons en Italie."},{"de":"Er geht zum Arzt.","fr":"Il va chez le médecin."},{"de":"Stell die Lampe auf den Tisch.","fr":"Pose la lampe sur la table."},{"de":"Am Abend gehe ich nach Hause.","fr":"Le soir, je rentre à la maison."}],
    cours: [
      "Cette leçon complète celle des prépositions de lieu en introduisant le **mouvement vers un endroit** : la question **Wohin?** (« vers où ? »). C'est ici que se révèle toute la logique des **prépositions mixtes** (in, auf, an, neben, vor…) : avec mouvement, elles passent à l'**accusatif** ; sans mouvement (Wo?), elles restaient au datif.",
      "Compare les deux pour bien sentir la différence. **Sans mouvement** (*Wo?* → datif) : « *Ich bin in der Schule* » (je suis à l'école). **Avec mouvement** (*Wohin?* → accusatif) : « *Ich gehe in die Schule* » (je vais à l'école). Le même mot *in* déclenche *der* (datif) ou *die* (accusatif) selon qu'il y a déplacement ou non. C'est LA grande règle des Wechselpräpositionen.",
      "À côté de ces prépositions mixtes, certaines prépositions de direction sont **toujours suivies du datif**, même quand elles expriment un mouvement : *nach* et *zu*. On utilise **nach** pour les **villes, les pays sans article et les points cardinaux** : « *Ich fahre nach Berlin* », « *nach Deutschland* », « *nach Hause* » (rentrer à la maison). On utilise **zu** pour aller **vers une personne ou un lieu précis** : « *Ich gehe zum Arzt* » (je vais chez le médecin), « *zur Schule* ».",
      "Attention au piège **nach Hause / zu Hause** : *nach Hause* = rentrer à la maison (mouvement), *zu Hause* = être à la maison (sans mouvement). Deux expressions figées très fréquentes qu'il faut connaître telles quelles.",
      "Pour résumer la stratégie : pose-toi toujours la question **Wo? (où, statique) ou Wohin? (vers où, dynamique)**. Si c'est dynamique avec une préposition mixte → accusatif. Pour les destinations « villes / pays », pense *nach* ; pour « chez quelqu'un / un lieu précis », pense *zu*. Avec ces réflexes, tu indiques sans hésiter où tu es et où tu vas."
    ],
    grammaire: [
      { titre: "Où aller ? (Wohin?)",
        regle: "Pour exprimer une **destination** (question **Wohin?**), la préposition dépend du lieu : **nach** pour villes/pays sans article, **zu** pour les personnes et lieux précis, **in** (+ accusatif) pour entrer dans un endroit.",
        intro: "Ne confonds pas avec **Wo?** (où l'on est, + datif). Ici on **se déplace vers** : *Ich gehe **zum** Arzt*, *Ich fahre **nach** Berlin*, *Ich gehe **in die** Stadt*.",
        tableau: { entetes: ["Préposition", "Usage", "Exemple"], lignes: [["nach", "villes, pays sans article", "nach Berlin"], ["zu", "personnes, lieux précis", "zum Arzt"], ["in", "+ accusatif (entrer)", "in die Stadt"], ["nach Hause", "rentrer", "Ich gehe nach Hause."]] },
        exemples: [
          { de: "Ich fahre nach Italien.", fr: "Je vais en Italie." },
          { de: "Gehst du zum Arzt?", fr: "Tu vas chez le médecin ?" },
          { de: "Wir gehen in die Stadt.", fr: "Nous allons en ville." }
        ],
        note: "« zu Hause » = être à la maison (lieu) ; « nach Hause » = vers la maison (mouvement).",
        attention: "Pays avec article → **in** + accusatif, pas *nach* : *in **die** Schweiz*, *in **die** Türkei* (et non « ~~nach die Schweiz~~ »)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez (ville).", question: "Ich fliege ___ Spanien.", options: ["nach", "zu", "in", "mit"], correct: 0, explication: "pays sans article → nach." },
      { type: "qcm", consigne: "Choisissez.", question: "Ich gehe ___ Arzt.", options: ["zum", "nach", "in", "auf"], correct: 0, explication: "personne/lieu précis → zu (zum = zu dem)." },
      { type: "trou", consigne: "Complétez (nach/zu).", texte: "Heute fahre ich {0} München und dann gehe ich {1} Bahnhof.", accepte: [["nach"], ["zum"]], indice: "ville / lieu précis" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "nach", droite: "ville/pays" }, { gauche: "zu", droite: "personne/lieu" }, { gauche: "zu Hause", droite: "à la maison" }] },
      { type: "ordre", consigne: "Ordre des mots.", mots: ["Ich", "gehe", "nach", "Hause"], correct: "Ich gehe nach Hause", traduction: "Je rentre à la maison." }
    ]
  },
  g12: {
    id: "g12",
    einstieg: {"intro":"L'adjectif change-t-il selon sa place (avant le nom ou après *sein*) ?","exemples":[{"de":"Das Haus ist schön.","fr":"La maison est belle."},{"de":"ein schönes Haus","fr":"une belle maison"},{"de":"der große Mann","fr":"le grand homme"}],"question":"Quand l'adjectif prend-il une terminaison ?"},
    merke: ["Adjectif *attribut* (après *sein*) : *invariable* - *Das Haus ist schön*.","Adjectif *épithète* (devant le nom) : il prend une *terminaison* - *ein schönes Haus*.","La terminaison dépend du genre, du cas et de l'article."],
    achtung: [{"erreur":"ein schön Haus","correct":"ein **schönes** Haus","explication":"Devant un nom, l'adjectif prend une terminaison (*-es* au neutre)."},{"erreur":"Das Haus ist schönes.","correct":"Das Haus ist **schön**.","explication":"Après *sein*, l'adjectif reste *invariable* (sans terminaison)."}],
    kontrast: {"titre":"Les adjectifs : allemand vs français","similitudes":["L'adjectif qualifie le nom dans les deux langues."],"differences":["L'épithète se place *avant* le nom (*ein schönes Haus*) et se *décline*.","L'adjectif *attribut* (après être) est *invariable* en allemand (≠ « belle » en français).","La terminaison varie selon genre/cas/article - système absent en français."]}, titre: "Les adjectifs", titreDE: "Die Adjektive",
    theme: "Grammaire", type: "grammaire", duree: 30,
    objectifs: ["Utiliser l'adjectif attribut", "Former un comparatif simple"],
    grammairePoints: ["sein + adjectif", "comparatif"],
    exemplesPlus: [{"de":"Das Wetter ist heute schön.","fr":"Le temps est beau aujourd'hui."},{"de":"Anna ist größer als Tom.","fr":"Anna est plus grande que Tom."},{"de":"Dieses Auto ist schneller.","fr":"Cette voiture est plus rapide."},{"de":"Berlin ist so groß wie Madrid.","fr":"Berlin est aussi grande que Madrid."},{"de":"Im Sommer sind die Tage am längsten.","fr":"En été, les jours sont les plus longs."}],
    cours: [
      "Les **adjectifs** permettent de décrire, de nuancer, de donner ton avis. En allemand, leur comportement dépend d'une distinction fondamentale : l'adjectif est-il **attribut** (après le verbe) ou **épithète** (devant le nom) ? Cette leçon se concentre sur le cas le plus simple et le plus utile au début : l'adjectif **attribut**.",
      "Excellente nouvelle pour commencer : quand l'adjectif est **attribut**, c'est-à-dire placé **après** un verbe comme *sein* (être), *werden* (devenir) ou *bleiben* (rester), il est **totalement invariable**. Il ne prend **aucune terminaison**, quel que soit le genre ou le nombre : « *Der Mann ist groß* », « *Die Frau ist groß* », « *Die Kinder sind groß* ». Profite de cette simplicité !",
      "À l'inverse, quand l'adjectif est **épithète**, placé directement **devant** un nom comme dans « *ein schönes Haus* », il prend une terminaison qui dépend du genre, du cas et de l'article. C'est une difficulté plus avancée que tu travailleras aux niveaux A2 et B1 ; pour l'instant, retiens surtout la règle de l'attribut invariable.",
      "Passons au **comparatif**, pour comparer deux choses. Pour le comparatif de **supériorité**, on ajoute **-er** à l'adjectif, suivi de **als** (« que ») : « *Anna ist größer als Tom* » (Anna est plus grande que Tom). Beaucoup d'adjectifs courts prennent en plus un **Umlaut** : *alt → älter*, *groß → größer*, *jung → jünger*.",
      "Pour dire « **aussi … que** » (comparatif d'égalité), on utilise **so … wie** : « *Tom ist so groß wie Paul* ». Enfin, quelques comparatifs sont **irréguliers** et à connaître par cœur : *gut → besser* (bon → meilleur), *viel → mehr* (beaucoup → plus), *gern → lieber* (volontiers → plutôt). Avec l'attribut invariable et ces formes de comparaison, tu peux déjà décrire et comparer le monde autour de toi."
    ],
    grammaire: [
      { titre: "Adjectif attribut (invariable)",
        regle: "Quand l'adjectif vient **après** le verbe **sein**, **werden** ou **bleiben**, il est **invariable** : il ne prend **aucune** terminaison.",
        intro: "*Das Auto ist **neu*** — pas de terminaison. (Attention : devant un **nom**, l'adjectif se décline, mais c'est une étape suivante.)",
        tableau: { entetes: ["Phrase", "Sens"], lignes: [["Das Auto ist neu.", "La voiture est neuve."], ["Die Wohnung ist groß.", "L'appart est grand."], ["Die Kinder sind müde.", "Les enfants sont fatigués."]] },
        exemples: [
          { de: "Der Kaffee ist heiß.", fr: "Le café est chaud." },
          { de: "Die Stadt ist schön.", fr: "La ville est belle." }
        ],
        note: "Invariable ici : neu, groß, müde ne prennent pas de terminaison." },
      { titre: "Le comparatif",
        regle: "Comparatif de supériorité = adjectif **+ -er**, suivi de **als** (= que). Beaucoup d'adjectifs courts prennent en plus un **Umlaut** (a→ä, o→ö, u→ü).",
        intro: "*klein* → *klein**er***, *groß* → *gr**ö**ßer*. Quelques irréguliers à retenir : *gut* → **besser**, *gern* → **lieber**.",
        tableau: { entetes: ["Adjectif", "Comparatif"], lignes: [["klein", "kleiner"], ["groß", "größer"], ["gut", "besser"], ["gern", "lieber"]] },
        exemples: [
          { de: "Berlin ist größer als Bonn.", fr: "Berlin est plus grand que Bonn." },
          { de: "Heute ist es kälter als gestern.", fr: "Aujourd'hui il fait plus froid qu'hier." }
        ],
        note: "Ex. : Berlin ist größer als Bonn.",
        attention: "Le mot pour « que » dans une comparaison est **als**, pas *wie*. *wie* sert seulement à l'**égalité** : *so groß **wie*** (aussi grand que)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Après « ist », l'adjectif…", options: ["ne change pas", "prend -en", "prend -e"], correct: 0, explication: "Adjectif attribut = invariable." },
      { type: "qcm", consigne: "Comparatif de « groß ».", question: "Berlin ist ___ als Bonn.", options: ["größer", "großer", "am größten", "groß"], correct: 0, explication: "groß → größer (Umlaut)." },
      { type: "association", consigne: "Associez l'adjectif et son contraire.", paires: [{ gauche: "groß", droite: "klein" }, { gauche: "neu", droite: "alt" }, { gauche: "gut", droite: "schlecht" }, { gauche: "teuer", droite: "billig" }] },
      { type: "trou", consigne: "Complétez le comparatif.", texte: "Das Auto ist {0} als das Fahrrad. (schnell)", accepte: [["schneller"]], indice: "schnell + -er" },
      { type: "traduction", consigne: "Traduisez.", source: "La maison est grande.", accepte: ["Das Haus ist groß"], aide: "adjectif invariable après ist" }
    ]
  },
  g13: {
    id: "g13",
    einstieg: {"intro":"Observe comment l'allemand exprime l'appartenance (« de qui ? »).","exemples":[{"de":"das Auto des Vaters","fr":"la voiture du père"},{"de":"die Tasche der Frau","fr":"le sac de la femme"},{"de":"Annas Buch","fr":"le livre d'Anna"}],"question":"Qu'est-ce qui change dans *der Vater* → *des Vaters* ?"},
    merke: ["Le génitif exprime l'**appartenance** — question **Wessen?** (de qui ? à qui ?).","Articles : masculin/neutre → **des** (+ **-s** au nom), féminin/pluriel → **der**.","Noms masculins et neutres : on ajoute **-s** (mots courts : **-es**) — *des Vater**s***, *des Kind**es***.","À l'oral, on remplace souvent par **von + datif** : *das Auto **von meinem** Vater*.","Prépositions + génitif : *wegen* (à cause de), *während* (pendant), *trotz* (malgré), *(an)statt* (au lieu de)."],
    achtung: [{"erreur":"das Auto von der Vater","correct":"das Auto **des Vaters** (ou *von dem Vater*)","explication":"Génitif masculin : *des* + nom en **-s**. À l'oral, *von* + datif (*von dem Vater*) est accepté."},{"erreur":"Annas' Buch","correct":"**Annas** Buch","explication":"Avec un prénom, on ajoute **-s** SANS apostrophe : *Annas*, *Peters* — et on le place AVANT le nom."},{"erreur":"während dem Film","correct":"während **des Films**","explication":"*während* (pendant) demande le génitif à l'écrit soigné : *des Films*."}],
    kontrast: {"titre":"Le génitif : allemand vs français","similitudes":["Les deux expriment l'appartenance (« de… »)."],"differences":["L'allemand *décline* l'article (*des/der*) et ajoute un **-s** au nom masculin/neutre.","L'ordre est « la chose + du possesseur » : *das Auto **des Vaters***.","À l'oral, l'allemand préfère souvent *von + datif* — proche du « de » français."]}, titre: "Le génitif (l'appartenance)", titreDE: "Der Genitiv",
    theme: "Grammaire", type: "grammaire", duree: 35,
    objectifs: ["Exprimer l'appartenance (Wessen?)", "Former le génitif des articles et des noms", "Connaître von + datif à l'oral"],
    grammairePoints: ["des / der", "-s au nom", "von + datif"],
    exemplesPlus: [{"de":"Das ist das Haus meiner Eltern.","fr":"C'est la maison de mes parents."},{"de":"Die Farbe des Autos ist rot.","fr":"La couleur de la voiture est rouge."},{"de":"Während der Woche arbeite ich viel.","fr":"Pendant la semaine, je travaille beaucoup."},{"de":"Trotz des Regens gehen wir spazieren.","fr":"Malgré la pluie, nous allons nous promener."},{"de":"Das ist Peters Fahrrad.","fr":"C'est le vélo de Peter."}],
    cours: [
      "Le **génitif** est le **4ᵉ et dernier cas** allemand. Il exprime avant tout l'**appartenance** (la possession) : « le livre **de** l'homme », « la voiture **du** père ». La question qui le révèle est **Wessen?** (« de qui ? à qui ? »). C'est le cas le plus **formel** : on le rencontre surtout à l'écrit (journaux, textes soignés), et il complète le système que tu connais déjà (nominatif, accusatif, datif).",
      "À la différence de l'accusatif, où seul le masculin bougeait, le génitif se reconnaît à **deux marques** simultanées. D'abord l'**article** : au masculin et au neutre, *der/das* devient **des** ; au féminin et au pluriel, *die* devient **der**. Ensuite — et c'est la nouveauté — le **nom masculin ou neutre reçoit un -s** : *der Vater* → *des Vater**s***, *das Kind* → *des Kind**es*** (on ajoute *-es* aux mots courts d'une syllabe pour faciliter la prononciation). Le féminin, lui, ne change pas le nom : *die Frau* → *der Frau*.",
      "L'**ordre des mots** est fixe : on énonce d'abord **la chose possédée**, puis **le possesseur au génitif**, juste après. « *das Auto des Vaters* » (la voiture du père, littéralement « la voiture du-père »), « *die Farbe der Blume* » (la couleur de la fleur). Avec un **prénom**, l'allemand fait plus simple : on ajoute un **-s sans apostrophe** et on place le nom **devant** : « *Annas Auto* » (la voiture d'Anna), « *Peters Buch* » (le livre de Peter).",
      "Certaines **prépositions** sont suivies du génitif, surtout à l'écrit : **wegen** (à cause de), **während** (pendant), **trotz** (malgré), **(an)statt** (au lieu de). Exemples : « *während des Films* » (pendant le film), « *trotz des schlechten Wetters* » (malgré le mauvais temps), « *wegen des Regens* » (à cause de la pluie).",
      "Point essentiel pour parler naturellement : **à l'oral et dans la langue familière, le génitif de possession est très souvent remplacé par *von* + datif**. Ainsi, au lieu de « *das Auto des Vaters* », on entend couramment « *das Auto **von** meinem Vater* ». De même, après *wegen* ou *trotz*, beaucoup d'Allemands utilisent le datif à l'oral (« *wegen dem Regen* »). Retiens donc les deux : le **génitif** pour l'écrit soigné, **von + datif** pour la conversation.",
      "Avec ce 4ᵉ cas, tu tiens **tout le système de déclinaison** allemand. Chaque cas a son rôle : le **nominatif** pour le sujet (*Wer?*), l'**accusatif** pour le COD (*Wen? / Was?*), le **datif** pour le destinataire (*Wem?*), et le **génitif** pour l'appartenance (*Wessen?*). Le tableau de synthèse ci-dessous réunit les quatre — garde-le sous les yeux : c'est la carte complète de la grammaire allemande."
    ],
    grammaire: [
      { titre: "Articles au génitif",
        regle: "Le **génitif** marque l'**appartenance** (« de qui ? » = **Wessen?**). Articles : *der/das* → **des**, *die* → **der**. Et le nom **masculin/neutre** prend un **-s** (ou **-es**).",
        intro: "Compare : *der Vater* (sujet) → *das Auto **des Vaters*** (possesseur). *die Frau* → *die Tasche **der Frau*** (le nom féminin ne change pas).",
        tableau: { entetes: ["Genre", "Nominatif", "Génitif"], lignes: [["masculin", "der / ein", "des / eines (+ -s au nom)"], ["féminin", "die / eine", "der / einer"], ["neutre", "das / ein", "des / eines (+ -s au nom)"], ["pluriel", "die", "der"]] },
        schemas: [{ legende: "Le possesseur se met au génitif, juste après la chose possédée.", mots: [{ m: "das Auto", r: "chose possédée", c: "sujet" }, { m: "des", r: "article génitif", c: "verbe" }, { m: "Vaters", r: "possesseur (+ -s)", c: "objet" }] }],
        exemples: [
          { de: "Das ist das Haus des Lehrers.", fr: "C'est la maison du professeur." },
          { de: "Die Farbe der Blume ist schön.", fr: "La couleur de la fleur est belle." },
          { de: "Das ist Annas Fahrrad.", fr: "C'est le vélo d'Anna." }
        ],
        note: "Prénoms : -s SANS apostrophe et placé avant (Annas Auto, Peters Buch).",
        attention: "N'oublie pas le **-s** au masculin/neutre : *das Ende **des Films*** (et non « ~~des Film~~ »). Le féminin, lui, ne prend jamais de -s : *der Frau*, *der Blume*." },
      { titre: "Prépositions + génitif (à l'écrit)",
        regle: "Quatre prépositions courantes demandent le **génitif** dans la langue soignée : **wegen** (à cause de), **während** (pendant), **trotz** (malgré), **(an)statt** (au lieu de).",
        intro: "*während **des** Films*, *trotz **des** Wetters*, *wegen **des** Regens*. À l'oral, on entend souvent le datif à la place (*wegen dem Regen*).",
        tableau: { entetes: ["Préposition", "Sens", "Exemple"], lignes: [["während", "pendant", "während des Tages"], ["wegen", "à cause de", "wegen des Staus"], ["trotz", "malgré", "trotz des Regens"], ["(an)statt", "au lieu de", "statt eines Kaffees"]] },
        exemples: [
          { de: "Während der Ferien reisen wir.", fr: "Pendant les vacances, nous voyageons." },
          { de: "Trotz des Regens spielen die Kinder.", fr: "Malgré la pluie, les enfants jouent." }
        ],
        note: "À l'oral / familier : ces prépositions passent souvent au datif.",
        attention: "Pour la **possession**, l'oral remplace le génitif par **von + datif** : *das Auto **von meinem** Vater* = *das Auto **des** Vaters*." },
      { titre: "Vue d'ensemble : les 4 cas (article défini)",
        regle: "Voici la **carte complète** de la déclinaison. Remarque : le **masculin** est celui qui change le plus (der/den/dem/des) ; le féminin et le neutre changent peu.",
        intro: "Chaque cas répond à une question : **Wer?** (nominatif), **Wen?** (accusatif), **Wem?** (datif), **Wessen?** (génitif).",
        tableau: { entetes: ["Cas", "Masculin", "Féminin", "Neutre", "Pluriel"], lignes: [["Nominatif (Wer?)", "der", "die", "das", "die"], ["Accusatif (Wen?)", "den", "die", "das", "die"], ["Datif (Wem?)", "dem", "der", "dem", "den"], ["Génitif (Wessen?)", "des", "der", "des", "der"]] },
        note: "Astuce : au masculin, tout finit par -n (accusatif/datif) ou -s (génitif) — jamais *der* ailleurs qu'au nominatif.",
        attention: "Le pluriel au **datif** ajoute un **-n** au nom (*den Kinder**n***) ; le masculin/neutre au **génitif** ajoute un **-s** (*des Kind**es***)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Quelle question pose-t-on au génitif ?", options: ["Wessen?", "Wen?", "Wem?", "Wer?"], correct: 0, explication: "Wessen? = de qui ? (appartenance) → génitif." },
      { type: "qcm", consigne: "Génitif masculin.", question: "Das ist das Auto ___ Vaters.", options: ["des", "dem", "der", "den"], correct: 0, explication: "der Vater (m.) au génitif → des Vaters." },
      { type: "trou", consigne: "Complétez (des / der).", texte: "Das Haus {0} Mannes und die Tasche {1} Frau.", accepte: [["des"], ["der"]], indice: "der Mann → des ; die Frau → der" },
      { type: "association", consigne: "Associez (préposition + génitif).", paires: [{ gauche: "während", droite: "pendant" }, { gauche: "wegen", droite: "à cause de" }, { gauche: "trotz", droite: "malgré" }, { gauche: "statt", droite: "au lieu de" }] },
      { type: "trou", consigne: "Complétez (préposition + génitif).", texte: "Wir bleiben zu Hause, {0} des Regens.", accepte: [["wegen"]], indice: "à cause de → wegen" },
      { type: "traduction", consigne: "Traduisez.", source: "la voiture du père", accepte: ["das Auto des Vaters", "das Auto von meinem Vater"], aide: "génitif : des Vaters (ou von + datif à l'oral)" }
    ]
  }
};
