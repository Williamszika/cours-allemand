/* =====================================================================
   delf-a1.js — Examen blanc DELF A1 (allemand), même format que le A2.
   4 épreuves notées /25 → /100 ; réussite ≥ 50/100, éliminatoire < 5/25 ;
   correction différée 24 h. Contenu de niveau A1 (très simple).
   Réponses correctes réparties sur toutes les positions.
   ===================================================================== */
(function () {
  window.DELF_A1 = {
    exam: "a1", code: "A1", titre: "Examen DELF A1 — Allemand",
    sousTitre: "Examen blanc complet, format officiel · 4 épreuves /25 → /100",
    seuil: 50, eliminatoire: 5, ordre: ["co", "ce", "ee", "eo"],
    epreuves: {

      co: {
        code: "co", titre: "Compréhension de l'oral", icone: "🎧",
        duree: 20 * 60, sur: 25, collective: true,
        intro: "Vous écoutez 3 documents courts (2 écoutes max chacun) puis vous répondez.",
        documents: [
          {
            id: "co1", titre: "Document 1 — Un message",
            audio: "Hallo, hier ist Anna. Ich komme heute um sechs Uhr zu dir. Bis später! Tschüss!",
            questions: [
              { q: "Wer spricht?", options: ["Anna", "Tom", "Lena"], correct: 0 },
              { q: "Wann kommt Anna?", options: ["Um fünf Uhr", "Um sechs Uhr", "Um sieben Uhr"], correct: 1 }
            ]
          },
          {
            id: "co2", titre: "Document 2 — Une annonce",
            audio: "Achtung, liebe Kunden: Der Supermarkt schließt heute um zwanzig Uhr. Vielen Dank für Ihren Einkauf.",
            questions: [
              { q: "Worum geht es?", options: ["Um einen Supermarkt", "Um einen Bahnhof", "Um eine Schule"], correct: 0 },
              { q: "Wann schließt der Supermarkt?", options: ["Um 18 Uhr", "Um 20 Uhr", "Um 22 Uhr"], correct: 1 }
            ]
          },
          {
            id: "co3", titre: "Document 3 — Au café",
            audio: "Guten Tag, einen Kaffee bitte. — Das macht zwei Euro fünfzig. — Hier, bitte. — Danke schön!",
            questions: [
              { q: "Was bestellt die Person?", options: ["Einen Tee", "Ein Wasser", "Einen Kaffee"], correct: 2 },
              { q: "Was kostet es?", options: ["Zwei Euro fünfzig", "Drei Euro fünfzig", "Fünf Euro"], correct: 0 }
            ]
          }
        ]
      },

      ce: {
        code: "ce", titre: "Compréhension des écrits", icone: "📖",
        duree: 30 * 60, sur: 25, collective: true,
        intro: "Vous lisez 3 documents courts puis vous répondez.",
        documents: [
          {
            id: "ce1", titre: "Document 1 — Un SMS",
            texte: "Hallo Tom! Wir treffen uns morgen um 15 Uhr vor dem Kino. Bis dann! Liebe Grüße, Sarah",
            questions: [
              { q: "Wann treffen sie sich?", options: ["Heute", "Morgen", "Am Wochenende"], correct: 1 },
              { q: "Wo treffen sie sich?", options: ["Vor dem Kino", "Im Café", "Zu Hause"], correct: 0 }
            ]
          },
          {
            id: "ce2", titre: "Document 2 — Une affiche",
            texte: "Bäckerei Müller\nÖffnungszeiten:\nMontag bis Freitag: 7–18 Uhr\nSamstag: 7–12 Uhr\nSonntag: geschlossen",
            questions: [
              { q: "Wann ist die Bäckerei am Sonntag geöffnet?", options: ["Von 7 bis 18 Uhr", "Von 7 bis 12 Uhr", "Gar nicht (geschlossen)"], correct: 2 },
              { q: "Wie lange ist samstags geöffnet?", options: ["Bis 12 Uhr", "Bis 18 Uhr", "Bis 20 Uhr"], correct: 0 }
            ]
          },
          {
            id: "ce3", titre: "Document 3 — Une note",
            texte: "Liebe Mama,\nich bin im Park mit Felix. Ich komme um 17 Uhr zurück.\nLukas",
            questions: [
              { q: "Wo ist Lukas?", options: ["Im Park", "In der Schule", "Zu Hause"], correct: 0 },
              { q: "Wann kommt er zurück?", options: ["Um 16 Uhr", "Um 17 Uhr", "Um 18 Uhr"], correct: 1 }
            ]
          }
        ]
      },

      ee: {
        code: "ee", titre: "Production écrite", icone: "✍️",
        duree: 30 * 60, sur: 25, collective: true,
        intro: "Vous écrivez 2 textes très simples en allemand. Corrigés par l'IA après l'examen.",
        taches: [
          {
            id: "ee1", titre: "Exercice 1 — Se présenter", minMots: 20, maxMots: 30,
            consigne: "Stellen Sie sich vor (20–30 Wörter): Name, Alter, Land, Sprachen und ein Hobby. Schreiben Sie einfache Sätze.",
            criteres: ["Name, Alter, Land", "Sprachen et un Hobby", "Phrases simples correctes (ich heiße…, ich bin…, ich wohne…)"]
          },
          {
            id: "ee2", titre: "Exercice 2 — Une invitation (SMS)", minMots: 20, maxMots: 30,
            consigne: "Schreiben Sie eine kurze SMS an einen Freund (20–30 Wörter): Laden Sie ihn zu einem Kaffee ein. Sagen Sie wann und wo.",
            criteres: ["Invitation claire (Komm…, Hast du Zeit?)", "Quand (jour/heure) et où", "Formules simples (Hallo, Liebe Grüße)"]
          }
        ]
      },

      eo: {
        code: "eo", titre: "Production orale", icone: "🗣️",
        prep: 10 * 60, duree: 7 * 60, sur: 25, collective: false,
        intro: "Épreuve individuelle en 3 parties. 10 min de préparation, puis vous parlez (≈ 5–7 min). Enregistrez-vous au micro (ou écrivez ce que vous diriez). L'IA évalue.",
        taches: [
          {
            id: "eo1", type: "entretien", titre: "Partie 1 — Entretien dirigé",
            consigne: "Présentez-vous : nom, âge, pays, langues, où vous habitez et un loisir.",
            points: ["Name und Alter", "Land, Wohnort und Sprachen", "Ein Hobby"]
          },
          {
            id: "eo2", type: "info", titre: "Partie 2 — Échange d'informations",
            consigne: "Posez et répondez à des questions simples à partir de ces mots : Familie? Wohnen? Arbeit / Schule? Essen?",
            points: ["Einfache Fragen stellen (Wo…? Was…? Wie…?)", "Kurze Antworten geben"]
          },
          {
            id: "eo3", type: "dialog", titre: "Partie 3 — Dialogue simulé (au café)",
            consigne: "Jouez une scène au café : saluez, commandez une boisson, demandez le prix et payez. L'examinateur joue le serveur.",
            points: ["Begrüßen und bestellen", "Nach dem Preis fragen", "Bezahlen und sich verabschieden"]
          }
        ]
      }
    }
  };
})();
