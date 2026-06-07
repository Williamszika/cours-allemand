/* =====================================================================
   delf-final.js — Examen final DELF A1 + A2 (combiné), format DELF A2.
   Contenu croisé A1+A2, plus exigeant. 4 épreuves /25 + DICTÉE /25 (niveau
   B1, 10 min) → /125. Seuil RELEVÉ : 75/125 (60 %). Éliminatoire < 5/25.
   Correction différée 24 h. La discussion orale (jeu de rôle) est un
   dialogue parlé avec l'examinateur. Réponses correctes réparties.
   ===================================================================== */
(function () {
  window.DELF_FINAL = {
    exam: "final", code: "FINAL", nom: "A1 + A2 (combiné)",
    titre: "Examen final DELF A1 + A2", sousTitre: "Combiné A1+A2 · 4 épreuves + dictée → /125",
    seuil: 75, eliminatoire: 5, ordre: ["co", "ce", "ee", "dictee", "eo"],
    dictee: {
      titre: "Dictée — niveau B1", niveau: "B1", duree: 10 * 60, sur: 25,
      intro: "Écoutez (2 fois max) et écrivez exactement le texte. Niveau B1.",
      texte: "Letzte Woche bin ich mit dem Zug nach Hamburg gefahren. Das Wetter war ziemlich schlecht, aber die Stadt hat mir trotzdem sehr gut gefallen. Am Abend habe ich alte Freunde getroffen und wir sind zusammen essen gegangen."
    },
    epreuves: {
      co: {
        code: "co", titre: "Compréhension de l'oral", icone: "🎧", duree: 25 * 60, sur: 25, collective: true,
        intro: "3 documents (A1 et A2), 2 écoutes max chacun.",
        documents: [
          {
            id: "co1", titre: "Document 1 — Annonce en gare",
            audio: "Sehr geehrte Fahrgäste, der Zug nach Berlin um zehn Uhr fünfzehn fällt heute leider aus. Der nächste Zug nach Berlin fährt um elf Uhr von Gleis sieben. Wir bitten um Ihr Verständnis.",
            questions: [
              { q: "Was ist mit dem Zug um 10:15?", options: ["Er fährt pünktlich", "Er fällt aus", "Er hat zehn Minuten Verspätung"], correct: 1 },
              { q: "Wann fährt der nächste Zug nach Berlin?", options: ["Um 10:15", "Um 11 Uhr", "Um 7 Uhr"], correct: 1 }
            ]
          },
          {
            id: "co2", titre: "Document 2 — Eine Nachricht",
            audio: "Hallo Lisa, hier ist Markus. Können wir unser Treffen verschieben? Ich muss heute leider länger arbeiten. Passt dir morgen um achtzehn Uhr? Ruf mich bitte zurück. Danke!",
            questions: [
              { q: "Was möchte Markus?", options: ["Das Treffen verschieben", "Das Treffen absagen", "Sich früher treffen"], correct: 0 },
              { q: "Wann schlägt er vor?", options: ["Heute um 18 Uhr", "Morgen um 18 Uhr", "Morgen um 8 Uhr"], correct: 1 }
            ]
          },
          {
            id: "co3", titre: "Document 3 — Im Geschäft",
            audio: "Guten Tag, ich suche ein Geschenk für meine Mutter. — Wie wäre es mit diesem blauen Schal? Er kostet fünfundzwanzig Euro. — Oh, der ist schön. Den nehme ich, vielen Dank.",
            questions: [
              { q: "Für wen ist das Geschenk?", options: ["Für die Mutter", "Für den Vater", "Für eine Freundin"], correct: 0 },
              { q: "Was kostet der Schal?", options: ["Fünfzehn Euro", "Fünfundzwanzig Euro", "Fünfunddreißig Euro"], correct: 1 }
            ]
          }
        ]
      },
      ce: {
        code: "ce", titre: "Compréhension des écrits", icone: "📖", duree: 30 * 60, sur: 25, collective: true,
        intro: "3 documents (A1 et A2).",
        documents: [
          {
            id: "ce1", titre: "Document 1 — Un courriel professionnel",
            texte: "Liebe Kolleginnen und Kollegen,\n\nam Freitag fällt unsere Besprechung leider aus. Wir treffen uns stattdessen am Montag um 9 Uhr im großen Konferenzraum. Bitte bringen Sie Ihre Unterlagen mit.\n\nViele Grüße,\nFrau Klein",
            questions: [
              { q: "Wann findet die Besprechung jetzt statt?", options: ["Am Freitag", "Am Montag um 9 Uhr", "Gar nicht"], correct: 1 },
              { q: "Was sollen die Kollegen mitbringen?", options: ["Ihre Unterlagen", "Etwas zu essen", "Nichts"], correct: 0 }
            ]
          },
          {
            id: "ce2", titre: "Document 2 — Une affiche",
            texte: "Stadtbibliothek — Neue Öffnungszeiten ab März:\nMontag bis Freitag: 10–19 Uhr\nSamstag: 10–14 Uhr\nSonntag: geschlossen",
            questions: [
              { q: "Wie lange ist die Bibliothek samstags geöffnet?", options: ["Bis 14 Uhr", "Bis 19 Uhr", "Bis 10 Uhr"], correct: 0 },
              { q: "An welchem Tag ist geschlossen?", options: ["Am Samstag", "Am Sonntag", "Am Montag"], correct: 1 }
            ]
          },
          {
            id: "ce3", titre: "Document 3 — Un petit texte",
            texte: "Mein Bruder wohnt seit zwei Jahren in München. Er arbeitet als Koch in einem italienischen Restaurant. Am Wochenende fährt er oft in die Berge zum Wandern. Im Sommer besuche ich ihn meistens für eine Woche.",
            questions: [
              { q: "Was ist der Bruder von Beruf?", options: ["Koch", "Kellner", "Bergführer"], correct: 0 },
              { q: "Was macht er am Wochenende oft?", options: ["Wandern in den Bergen", "Im Restaurant essen", "Zu Hause kochen"], correct: 0 }
            ]
          }
        ]
      },
      ee: {
        code: "ee", titre: "Production écrite", icone: "✍️", duree: 45 * 60, sur: 25, collective: true,
        intro: "2 textes à rédiger (niveau A2). Corrigés par l'IA après l'examen.",
        taches: [
          {
            id: "ee1", titre: "Exercice 1 — Raconter un voyage", minMots: 40,
            consigne: "Erzählen Sie von einer Reise (40–60 Wörter): Wohin sind Sie gefahren, mit wem, was haben Sie gemacht? Schreiben Sie im Perfekt.",
            criteres: ["Récit au passé (Perfekt)", "Où / avec qui / quoi", "Connecteurs (zuerst, dann, danach)"]
          },
          {
            id: "ee2", titre: "Exercice 2 — Un e-mail d'excuse et d'invitation", minMots: 40,
            consigne: "Sie können zu einer Party nicht kommen. Schreiben Sie eine E-Mail (40–60 Wörter): entschuldigen Sie sich, sagen Sie warum, und laden Sie die Person zu einem anderen Treffen ein.",
            criteres: ["Excuse claire + raison", "Invitation à un autre moment", "Formules de politesse"]
          }
        ]
      },
      eo: {
        code: "eo", titre: "Production orale", icone: "🗣️", prep: 10 * 60, duree: 8 * 60, sur: 25, collective: false,
        intro: "3 parties. 10 min de préparation, puis passation. La 3e partie est un dialogue parlé avec l'examinateur.",
        taches: [
          {
            id: "eo1", type: "entretien", titre: "Partie 1 — Entretien dirigé",
            consigne: "Présentez-vous en détail : nom, âge, pays, profession ou études, langues, famille et loisirs.",
            points: ["Présentation complète", "Profession / études et langues", "Famille et loisirs"]
          },
          {
            id: "eo2", type: "monologue", titre: "Partie 2 — Monologue suivi",
            consigne: "Parlez 1 à 2 minutes de vos dernières vacances ou d'un week-end : où, quand, avec qui, ce que vous avez fait et aimé.",
            points: ["Récit structuré au passé", "Détails et opinions (Ich fand…, Es war…)", "Connecteurs"]
          },
          {
            id: "eo3", type: "jeuderole", titre: "Partie 3 — Jeu de rôle (au restaurant)",
            consigne: "Vous êtes au restaurant. Saluez, commandez à boire et à manger, posez une question (carte, prix), puis demandez l'addition et payez. L'examinateur joue le serveur.",
            scenario: "Im Restaurant: begrüßen, bestellen, eine Frage stellen, bezahlen.",
            opener: "Guten Abend und herzlich willkommen in unserem Restaurant! Haben Sie schon einen Wunsch, oder darf ich Ihnen zuerst etwas zu trinken bringen?"
          }
        ]
      }
    }
  };
})();
