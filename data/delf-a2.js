/* =====================================================================
   delf-a2.js — Examen blanc DELF A2 (allemand), format officiel.
   4 épreuves notées chacune sur 25 → total /100.
     • Compréhension de l'oral  (CO) — 25 min — auto-corrigée
     • Compréhension des écrits (CE) — 30 min — auto-corrigée
     • Production écrite        (EE) — 45 min — notée par l'IA (coach Zika)
     • Production orale         (EO) — 10 min de préparation + 8 min — IA
   Réussite : ≥ 50/100 ET aucune épreuve < 5/25 (note éliminatoire).
   Pendant l'épreuve : AUCUNE correction n'est montrée. Le résultat (note,
   copie corrigée, PDF) est rendu 24 h après la remise (cf. serveur).

   NB : les bonnes réponses (correct) sont volontairement RÉPARTIES sur
   toutes les positions (pas toujours la 1re), contrairement aux QCM des
   leçons — l'examen ne doit pas être devinable par réflexe.
   ===================================================================== */
(function () {
  window.DELF_A2 = {
    exam: "a2",
    code: "A2",
    titre: "Examen DELF A2 — Allemand",
    sousTitre: "Examen blanc complet, format officiel · 4 épreuves /25 → /100",
    seuil: 50,         // total minimal sur 100 pour réussir
    eliminatoire: 5,   // note < 5/25 dans une épreuve = éliminatoire
    // Ordre des épreuves (collectives puis individuelle)
    ordre: ["co", "ce", "ee", "eo"],

    epreuves: {
      /* ----------------------- COMPRÉHENSION DE L'ORAL ----------------- */
      co: {
        code: "co", titre: "Compréhension de l'oral", icone: "🎧",
        duree: 25 * 60, sur: 25, collective: true,
        intro: "Vous allez écouter 3 documents. Vous pouvez écouter chaque document 2 fois maximum, puis vous répondez aux questions. Aucune correction ne s'affiche pendant l'épreuve.",
        documents: [
          {
            id: "co1", titre: "Document 1 — Un message sur le répondeur",
            audio: "Hallo Tom, hier ist Lena. Sag mal, hast du am Samstag Zeit? Es gibt ein Konzert im Stadtpark. Es beginnt um acht Uhr abends und der Eintritt kostet zehn Euro. Wenn du Lust hast, treffen wir uns um halb acht vor dem Eingang. Ruf mich bitte heute Abend zurück. Tschüss!",
            questions: [
              { q: "Wann beginnt das Konzert?", options: ["Um halb acht", "Um acht Uhr", "Um zehn Uhr"], correct: 1 },
              { q: "Was kostet der Eintritt?", options: ["Zehn Euro", "Acht Euro", "Zwanzig Euro"], correct: 0 },
              { q: "Wo treffen sich Lena und Tom?", options: ["Im Stadtpark", "Bei Lena zu Hause", "Vor dem Eingang"], correct: 2 }
            ]
          },
          {
            id: "co2", titre: "Document 2 — Une annonce à la gare",
            audio: "Sehr geehrte Fahrgäste, der Zug nach München, Abfahrt um vierzehn Uhr zwanzig, hat heute etwa zehn Minuten Verspätung. Der Zug fährt heute von Gleis fünf ab, nicht von Gleis drei. Bitte beachten Sie die Anzeigetafeln. Wir wünschen Ihnen eine gute Reise.",
            questions: [
              { q: "Wohin fährt der Zug?", options: ["Nach Hamburg", "Nach Berlin", "Nach München"], correct: 2 },
              { q: "Wie viel Verspätung hat der Zug?", options: ["Etwa zehn Minuten", "Etwa zwanzig Minuten", "Keine Verspätung"], correct: 0 },
              { q: "Von welchem Gleis fährt der Zug heute ab?", options: ["Von Gleis drei", "Von Gleis fünf", "Von Gleis vierzehn"], correct: 1 }
            ]
          },
          {
            id: "co3", titre: "Document 3 — Au téléphone avec le cabinet médical",
            audio: "Praxis Doktor Weber, guten Tag. — Guten Tag, ich möchte einen Termin, bitte. Ich habe seit gestern starke Kopfschmerzen. — Können Sie morgen um elf Uhr kommen? — Ja, das passt gut. — Schön. Wie ist Ihr Name, bitte? — Müller, Sabine Müller. — Alles klar, Frau Müller. Dann bis morgen um elf Uhr.",
            questions: [
              { q: "Warum ruft die Frau an?", options: ["Sie braucht einen Termin", "Sie sucht eine Adresse", "Sie ist die Ärztin"], correct: 0 },
              { q: "Welches Problem hat sie?", options: ["Bauchschmerzen", "Kopfschmerzen", "Husten"], correct: 1 },
              { q: "Wann ist der Termin?", options: ["Heute um elf Uhr", "Morgen um zwölf Uhr", "Morgen um elf Uhr"], correct: 2 }
            ]
          }
        ]
      },

      /* ---------------------- COMPRÉHENSION DES ÉCRITS ----------------- */
      ce: {
        code: "ce", titre: "Compréhension des écrits", icone: "📖",
        duree: 30 * 60, sur: 25, collective: true,
        intro: "Vous lisez 3 documents puis vous répondez aux questions. Aucune correction ne s'affiche pendant l'épreuve.",
        documents: [
          {
            id: "ce1", titre: "Document 1 — Un courriel d'invitation",
            texte: "Liebe Sofia,\n\nam nächsten Samstag werde ich 30 Jahre alt und ich möchte das mit meinen Freunden feiern. Die Party beginnt um 19 Uhr bei mir zu Hause, in der Gartenstraße 12. Es gibt Essen, Getränke und Musik. Bring bitte kein Geschenk mit, nur gute Laune!\n\nKannst du kommen? Bitte antworte mir bis Donnerstag.\n\nLiebe Grüße,\nMarkus",
            questions: [
              { q: "Was feiert Markus?", options: ["Seinen Geburtstag", "Eine neue Wohnung", "Seine Hochzeit"], correct: 0 },
              { q: "Wann beginnt die Party?", options: ["Um 12 Uhr", "Um 19 Uhr", "Am Donnerstag"], correct: 1 },
              { q: "Was soll Sofia mitbringen?", options: ["Ein Geschenk", "Etwas zu essen", "Nur gute Laune"], correct: 2 }
            ]
          },
          {
            id: "ce2", titre: "Document 2 — Une affiche : nouveaux cours",
            texte: "Volkshochschule — Neue Kurse ab Oktober!\n\n• Yoga für Anfänger: jeden Montag, 18:00–19:00 Uhr\n• Deutsch-Konversation: jeden Mittwoch, 19:00–20:30 Uhr\n• Kochkurs „Italienisch\": jeden Freitag, 17:00–19:00 Uhr\n\nAnmeldung im Büro (Zimmer 4) oder per E-Mail: info@vhs-beispiel.de. Die Kurse beginnen am 5. Oktober.",
            questions: [
              { q: "An welchem Tag ist der Deutsch-Konversationskurs?", options: ["Am Montag", "Am Mittwoch", "Am Freitag"], correct: 1 },
              { q: "Wie lange dauert der Kochkurs?", options: ["Eine Stunde", "Zwei Stunden", "Drei Stunden"], correct: 1 },
              { q: "Wie kann man sich anmelden?", options: ["Nur telefonisch", "Im Büro oder per E-Mail", "Man muss nicht"], correct: 1 }
            ]
          },
          {
            id: "ce3", titre: "Document 3 — Un petit article de blog",
            texte: "Mein neues Leben in Hamburg\n\nSeit drei Monaten wohne ich in Hamburg. Am Anfang war alles schwierig: Ich kannte niemanden und das Wetter war oft schlecht. Aber jetzt gefällt es mir sehr gut. Ich habe nette Kollegen und am Wochenende gehe ich gern an den Hafen. Nur eine Sache fehlt mir: das Essen meiner Mutter! Nächsten Monat besuche ich meine Familie und freue mich schon sehr.",
            questions: [
              { q: "Wie lange wohnt die Person schon in Hamburg?", options: ["Seit drei Wochen", "Seit drei Monaten", "Seit drei Jahren"], correct: 1 },
              { q: "Was macht sie gern am Wochenende?", options: ["An den Hafen gehen", "Zu Hause kochen", "Lange arbeiten"], correct: 0 },
              { q: "Was fehlt ihr in Hamburg?", options: ["Nette Kollegen", "Gutes Wetter", "Das Essen ihrer Mutter"], correct: 2 }
            ]
          }
        ]
      },

      /* ------------------------ PRODUCTION ÉCRITE ---------------------- */
      ee: {
        code: "ee", titre: "Production écrite", icone: "✍️",
        duree: 45 * 60, sur: 25, collective: true,
        intro: "Vous rédigez 2 textes courts en allemand. Soignez la consigne, la grammaire et le vocabulaire. Votre copie sera corrigée par l'IA après l'examen.",
        taches: [
          {
            id: "ee1", titre: "Exercice 1 — Raconter", minMots: 40, maxMots: 60,
            consigne: "Vous avez passé un bon week-end. Écrivez un message à un(e) ami(e) allemand(e) (40 à 60 mots) : dites où vous étiez, ce que vous avez fait et avec qui. Racontez au passé (Perfekt).",
            criteres: ["Respect de la consigne (raconter un week-end passé)", "Emploi du Perfekt", "Vocabulaire des loisirs et du temps", "Connecteurs : zuerst, dann, danach, am Ende"]
          },
          {
            id: "ee2", titre: "Exercice 2 — Écrire un message", minMots: 40, maxMots: 60,
            consigne: "Un(e) ami(e) allemand(e) vous a aidé(e) à déménager. Écrivez-lui un message (40 à 60 mots) pour le/la remercier et l'inviter à dîner chez vous. Proposez une date et une heure.",
            criteres: ["Remerciement clair", "Invitation + proposition de date/heure", "Formules de politesse (Liebe/r…, Liebe Grüße)", "Correction grammaticale de niveau A2"]
          }
        ]
      },

      /* ------------------------ PRODUCTION ORALE ----------------------- */
      eo: {
        code: "eo", titre: "Production orale", icone: "🗣️",
        prep: 10 * 60, duree: 8 * 60, sur: 25, collective: false,
        intro: "Épreuve individuelle en 3 parties. Vous avez d'abord 10 minutes de préparation, puis vous parlez (6 à 8 minutes). Enregistrez-vous au micro (ou écrivez ce que vous diriez). L'IA évaluera votre production.",
        taches: [
          {
            id: "eo1", type: "entretien", titre: "Partie 1 — Entretien dirigé",
            consigne: "Présentez-vous : nom, âge, nationalité, lieu d'habitation, travail ou études, langues parlées et loisirs.",
            points: ["Name, Alter, Herkunft", "Wohnort und Beruf / Studium", "Sprachen und Hobbys"]
          },
          {
            id: "eo2", type: "monologue", titre: "Partie 2 — Monologue suivi",
            consigne: "Choisissez UN sujet et parlez-en 1 à 2 minutes : « Meine Stadt », « Mein idealer Urlaub » ou « Ein typischer Tag ».",
            points: ["Beschreiben Sie mit Details", "Geben Sie Ihre Meinung (Ich finde…, Ich mag…)", "Benutzen Sie Konnektoren (und, aber, weil, deshalb)"]
          },
          {
            id: "eo3", type: "jeuderole", titre: "Partie 3 — Jeu de rôle",
            consigne: "Situation : vous êtes au restaurant. Saluez, commandez à boire et à manger, demandez le prix et payez. L'examinateur joue le serveur.",
            points: ["Begrüßen und bestellen", "Nach dem Preis fragen", "Höflich bezahlen und sich verabschieden"]
          }
        ]
      }
    }
  };
})();
