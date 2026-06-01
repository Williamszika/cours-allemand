/* =====================================================================
   production.js — Exercices de PRODUCTION écrite et orale
   Un exercice « production » (écrit) + un exercice « oral » par leçon.
   Fusionnés dans les leçons par data/cours.js.
   - production : l'apprenant rédige ; auto-feedback sur mots-clés attendus
                  + modèle de correction + auto-évaluation.
   - oral : l'apprenant parle (reconnaissance vocale de-DE si dispo) ;
            sinon écoute-modèle + auto-évaluation.
   ===================================================================== */
window.PRODUCTION = {
  l01: [
    {
      type: "production",
      consigne: "Production écrite — Présentez-vous.",
      prompt: "Écrivez 3 à 4 phrases pour vous présenter : votre nom, votre pays d'origine et la ville où vous habitez.",
      attendus: ["ich heiße", "ich komme aus", "ich wohne in"],
      minMots: 8,
      checklist: ["J'ai dit mon nom (heißen)", "J'ai dit mon origine (kommen aus)", "J'ai dit où j'habite (wohnen in)"],
      modele: "Hallo! Ich heiße Marie. Ich komme aus Frankreich. Ich wohne in Lyon. Und du?"
    },
    {
      type: "oral",
      consigne: "Production orale — Saluez et présentez-vous.",
      prompt: "Dites à voix haute : « Bonjour, je m'appelle … et je viens de … »",
      attendus: ["ich heiße", "komme aus"],
      modele: "Guten Tag! Ich heiße Paul und ich komme aus der Schweiz."
    }
  ],
  l02: [
    {
      type: "production",
      consigne: "Production écrite — Vos coordonnées.",
      prompt: "Écrivez votre prénom épelé (lettre par lettre) puis votre âge en toutes lettres. Ex : M-A-R-I-E. Ich bin … Jahre alt.",
      attendus: ["jahre alt"],
      minMots: 6,
      checklist: ["J'ai épelé mon prénom", "J'ai écrit mon âge en lettres (… Jahre alt)"],
      modele: "Mein Name ist Tom: T-O-M. Ich bin sechsunddreißig Jahre alt."
    },
    {
      type: "oral",
      consigne: "Production orale — Épelez et comptez.",
      prompt: "Épelez votre prénom à voix haute, puis comptez de 1 à 10 en allemand.",
      attendus: ["eins", "zwei", "drei"],
      modele: "Anna: A-N-N-A. Eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn."
    }
  ],
  l03: [
    {
      type: "production",
      consigne: "Production écrite — Langues et origine.",
      prompt: "Écrivez d'où vous venez et quelles langues vous parlez (au moins deux).",
      attendus: ["ich komme aus", "ich spreche"],
      minMots: 8,
      checklist: ["J'ai dit mon origine", "J'ai cité au moins 2 langues (sprechen)"],
      modele: "Ich komme aus Marokko. Ich spreche Arabisch, Französisch und ein bisschen Deutsch."
    },
    {
      type: "oral",
      consigne: "Production orale — Vos langues.",
      prompt: "Dites quelles langues vous parlez : « Ich spreche … »",
      attendus: ["ich spreche"],
      modele: "Ich spreche Spanisch und Englisch. Ich lerne Deutsch."
    }
  ],
  l04: [
    {
      type: "production",
      consigne: "Production écrite — Vos loisirs.",
      prompt: "Écrivez 3 phrases sur vos loisirs en utilisant « gern ».",
      attendus: ["gern"],
      minMots: 9,
      checklist: ["J'ai utilisé « gern »", "J'ai cité au moins 2 activités", "Mes verbes sont conjugués"],
      modele: "Ich spiele gern Fußball. Ich höre gern Musik. Ich koche sehr gern."
    },
    {
      type: "oral",
      consigne: "Production orale — Ce que vous aimez faire.",
      prompt: "Dites une chose que vous aimez et une que vous n'aimez pas faire (gern / nicht gern).",
      attendus: ["gern"],
      modele: "Ich lese gern. Ich tanze nicht gern."
    }
  ],
  l05: [
    {
      type: "production",
      consigne: "Production écrite — Votre travail.",
      prompt: "Écrivez votre profession et où vous travaillez.",
      attendus: ["ich bin", "ich arbeite"],
      minMots: 7,
      checklist: ["J'ai dit ma profession (sans article)", "J'ai dit où je travaille (arbeiten in/bei)"],
      modele: "Ich bin Lehrerin. Ich arbeite in einer Schule in Berlin."
    },
    {
      type: "oral",
      consigne: "Production orale — Votre profession.",
      prompt: "Présentez votre métier : « Ich bin … von Beruf. »",
      attendus: ["ich bin"],
      modele: "Ich bin Ingenieur von Beruf. Ich arbeite bei Siemens."
    }
  ],
  l06: [
    {
      type: "production",
      consigne: "Production écrite — Votre samedi.",
      prompt: "Décrivez votre samedi avec au moins un verbe à particule séparable (aufstehen, einkaufen, fernsehen…) et une heure.",
      attendus: ["uhr"],
      minMots: 10,
      checklist: ["J'ai utilisé un verbe séparable", "J'ai donné une heure (… Uhr)", "Verbe en 2e position"],
      modele: "Am Samstag stehe ich um neun Uhr auf. Dann kaufe ich ein. Am Abend sehe ich fern."
    },
    {
      type: "oral",
      consigne: "Production orale — Votre week-end.",
      prompt: "Dites ce que vous faites le week-end.",
      attendus: ["am"],
      modele: "Am Samstag schlafe ich lange. Am Sonntag besuche ich Freunde."
    }
  ],
  l07: [
    {
      type: "production",
      consigne: "Production écrite — Réserver une chambre.",
      prompt: "Écrivez un court message pour réserver une chambre d'hôtel (type de chambre, nombre de nuits, petit-déjeuner).",
      attendus: ["ich möchte", "zimmer"],
      minMots: 10,
      checklist: ["J'ai utilisé « möchten »", "J'ai précisé le type de chambre", "J'ai précisé le nombre de nuits"],
      modele: "Guten Tag, ich möchte ein Einzelzimmer für zwei Nächte reservieren, bitte mit Frühstück. Danke!"
    },
    {
      type: "oral",
      consigne: "Production orale — À la réception.",
      prompt: "Jouez le client : demandez une chambre libre à la réception.",
      attendus: ["zimmer"],
      modele: "Guten Tag, haben Sie ein Zimmer frei? Ich möchte ein Doppelzimmer für eine Nacht."
    }
  ],
  l08: [
    {
      type: "production",
      consigne: "Production écrite — Où se trouve… ?",
      prompt: "Décrivez où se trouvent deux lieux dans votre ville en utilisant des prépositions de lieu (neben, zwischen, vor…).",
      attendus: ["neben"],
      minMots: 9,
      checklist: ["J'ai utilisé une préposition de lieu", "J'ai cité au moins 2 lieux"],
      modele: "Die Post ist neben der Bank. Das Café ist zwischen der Apotheke und dem Bahnhof."
    },
    {
      type: "oral",
      consigne: "Production orale — Indiquer le chemin.",
      prompt: "Expliquez à un touriste comment aller à la gare (geradeaus, links, rechts).",
      attendus: ["geradeaus"],
      modele: "Gehen Sie geradeaus und dann links. Der Bahnhof ist neben der Post."
    }
  ],
  l09: [
    {
      type: "production",
      consigne: "Production écrite — Votre commande.",
      prompt: "Écrivez ce que vous commandez au restaurant (un plat et une boisson) avec « Ich nehme / Ich möchte ».",
      attendus: ["ich nehme", "ich möchte"],
      minMots: 8,
      checklist: ["J'ai utilisé l'accusatif (einen/eine/ein)", "J'ai commandé un plat et une boisson"],
      modele: "Ich nehme eine Suppe und einen Salat. Und ich möchte ein Wasser, bitte."
    },
    {
      type: "oral",
      consigne: "Production orale — Au restaurant.",
      prompt: "Commandez à voix haute, puis demandez l'addition.",
      attendus: ["bitte"],
      modele: "Ich möchte bestellen. Einen Kaffee, bitte. Später die Rechnung, bitte."
    }
  ],
  l10: [
    {
      type: "production",
      consigne: "Production écrite — Votre journée.",
      prompt: "Décrivez votre journée du matin au soir avec « zuerst, dann, danach ».",
      attendus: ["zuerst", "dann"],
      minMots: 12,
      checklist: ["J'ai utilisé zuerst / dann / danach", "Verbe toujours en 2e position", "Du matin au soir"],
      modele: "Zuerst stehe ich auf. Dann frühstücke ich. Danach arbeite ich. Am Abend koche ich."
    },
    {
      type: "oral",
      consigne: "Production orale — Routine.",
      prompt: "Racontez votre matinée à voix haute.",
      attendus: ["ich"],
      modele: "Am Morgen wache ich um sechs Uhr auf. Dann dusche ich und frühstücke."
    }
  ],
  l11: [
    {
      type: "production",
      consigne: "Production écrite — Vos obligations.",
      prompt: "Écrivez 3 choses que vous devez ou pouvez faire aujourd'hui (müssen / können).",
      attendus: ["ich muss", "ich kann"],
      minMots: 9,
      checklist: ["J'ai utilisé müssen et/ou können", "L'infinitif est à la fin", "3 actions"],
      modele: "Heute muss ich drei E-Mails schreiben. Ich muss einen Bericht machen. Dann kann ich Pause machen."
    },
    {
      type: "oral",
      consigne: "Production orale — Au bureau.",
      prompt: "Dites ce que vous devez faire au travail aujourd'hui.",
      attendus: ["ich muss"],
      modele: "Ich muss heute viel arbeiten. Ich muss eine Besprechung vorbereiten."
    }
  ],
  l12: [
    {
      type: "production",
      consigne: "Production écrite — Mode d'emploi.",
      prompt: "Donnez 3 instructions à l'impératif (forme « Sie ») pour utiliser un ordinateur.",
      attendus: ["sie"],
      minMots: 8,
      checklist: ["J'ai utilisé l'impératif de politesse (Verb + Sie)", "3 instructions claires"],
      modele: "Öffnen Sie das Programm. Klicken Sie hier. Speichern Sie das Dokument mit Strg + S."
    },
    {
      type: "oral",
      consigne: "Production orale — Expliquer.",
      prompt: "Expliquez à un collègue comment enregistrer un fichier (impératif « du »).",
      attendus: ["speicher"],
      modele: "Klick auf die Datei und speichere mit Strg plus S. Fertig!"
    }
  ],
  l13: [
    {
      type: "production",
      consigne: "Production écrite — Proposer un rendez-vous.",
      prompt: "Écrivez un message pour proposer un rendez-vous (un jour + une heure) avec les bonnes prépositions de temps.",
      attendus: ["am", "um"],
      minMots: 9,
      checklist: ["J'ai utilisé « am » (jour)", "J'ai utilisé « um » (heure)", "Proposition polie (können/passen)"],
      modele: "Können wir einen Termin machen? Passt Ihnen am Montag um zehn Uhr?"
    },
    {
      type: "oral",
      consigne: "Production orale — Au téléphone.",
      prompt: "Téléphonez pour prendre rendez-vous chez le médecin.",
      attendus: ["termin"],
      modele: "Guten Tag, ich möchte einen Termin vereinbaren. Geht es am Dienstag um sechzehn Uhr?"
    }
  ],
  l14: [
    {
      type: "production",
      consigne: "Production écrite — La météo.",
      prompt: "Décrivez le temps qu'il fait aujourd'hui chez vous en reliant 2 idées avec une conjonction (und, aber, denn).",
      attendus: ["es ist"],
      minMots: 9,
      checklist: ["J'ai décrit la météo (es ist / es regnet…)", "J'ai utilisé une conjonction", "J'ai donné la saison ou la température"],
      modele: "Heute ist es kalt, aber die Sonne scheint. Es sind zehn Grad. Es ist Winter."
    },
    {
      type: "oral",
      consigne: "Production orale — Quel temps fait-il ?",
      prompt: "Décrivez la météo de votre ville à voix haute.",
      attendus: ["es"],
      modele: "Bei uns regnet es und es ist windig. Der Herbst ist da."
    }
  ],
  l15: [
    {
      type: "production",
      consigne: "Production écrite — Votre dernier voyage.",
      prompt: "Racontez un voyage au passé composé (Perfekt) : où, comment, ce que vous avez fait.",
      attendus: ["ich bin", "ich habe"],
      minMots: 12,
      checklist: ["J'ai utilisé sein + participe (bin … gefahren/geflogen)", "J'ai utilisé haben + participe", "Au moins 3 phrases"],
      modele: "Ich bin nach Italien geflogen. Ich habe Rom besucht und viel Pizza gegessen. Es war wunderbar!"
    },
    {
      type: "oral",
      consigne: "Production orale — Vos vacances.",
      prompt: "Racontez vos dernières vacances (passé composé).",
      attendus: ["ich"],
      modele: "Ich bin nach Spanien gefahren. Ich habe am Strand gelegen und gut gegessen."
    }
  ],
  l16: [
    {
      type: "production",
      consigne: "Production écrite — Vos déplacements.",
      prompt: "Écrivez comment vous allez au travail et comment vous voyagez (mit + datif).",
      attendus: ["mit dem", "mit der"],
      minMots: 9,
      checklist: ["J'ai utilisé « mit dem / mit der »", "J'ai cité 2 moyens de transport"],
      modele: "Ich fahre mit dem Bus zur Arbeit. In den Urlaub fahre ich mit dem Auto oder ich fliege."
    },
    {
      type: "oral",
      consigne: "Production orale — Comment vous déplacez-vous ?",
      prompt: "Dites comment vous venez au cours (mit dem … / zu Fuß).",
      attendus: ["mit"],
      modele: "Ich komme mit der U-Bahn. Manchmal gehe ich zu Fuß."
    }
  ],
  l17: [
    {
      type: "production",
      consigne: "Production écrite — Votre logement.",
      prompt: "Décrivez votre logement : les pièces (es gibt…) et où se trouvent 2 meubles (auf, neben, in + datif).",
      attendus: ["es gibt"],
      minMots: 12,
      checklist: ["J'ai utilisé « es gibt » + accusatif", "J'ai situé un meuble (datif)", "Au moins 2 pièces"],
      modele: "Meine Wohnung hat drei Zimmer. Es gibt eine Küche und ein Bad. Das Sofa steht im Wohnzimmer, neben dem Fenster."
    },
    {
      type: "oral",
      consigne: "Production orale — Votre chambre.",
      prompt: "Décrivez votre chambre et où sont les meubles.",
      attendus: ["ist"],
      modele: "Mein Bett ist an der Wand. Der Schrank steht neben dem Bett. Es ist sehr gemütlich."
    }
  ],
  l18: [
    {
      type: "production",
      consigne: "Production écrite — Chez le médecin.",
      prompt: "Écrivez ce qui ne va pas : décrivez 2 symptômes (… tut weh / ich habe …schmerzen).",
      attendus: ["tut weh", "schmerzen"],
      minMots: 8,
      checklist: ["J'ai décrit un symptôme (tut weh)", "J'ai utilisé « …schmerzen »", "J'ai dit que je suis malade (krank)"],
      modele: "Ich bin krank. Mein Kopf tut weh und ich habe Halsschmerzen. Ich bin sehr müde."
    },
    {
      type: "oral",
      consigne: "Production orale — Symptômes.",
      prompt: "Dites au médecin ce qui ne va pas.",
      attendus: ["weh"],
      modele: "Guten Tag. Mein Bauch tut weh und ich habe Fieber."
    }
  ],
  l19: [
    {
      type: "production",
      consigne: "Production écrite — Un message d'excuse.",
      prompt: "Écrivez un court message pour vous excuser d'un retard, en donnant la raison avec « weil » (verbe à la fin).",
      attendus: ["weil", "tut mir leid"],
      minMots: 10,
      checklist: ["J'ai présenté mes excuses (Entschuldigung / tut mir leid)", "J'ai utilisé « weil »", "Le verbe est à la fin de la subordonnée"],
      modele: "Hallo, es tut mir leid! Ich komme zu spät, weil es einen Stau gibt. Bis gleich!"
    },
    {
      type: "oral",
      consigne: "Production orale — S'excuser.",
      prompt: "Excusez-vous d'un retard et expliquez pourquoi (weil).",
      attendus: ["weil"],
      modele: "Entschuldigung! Ich bin zu spät, weil ich den Bus verpasst habe."
    }
  ]
};
