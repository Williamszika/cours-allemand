/* =====================================================================
   telc-b1.js — Examen blanc telc Deutsch B1, format officiel.
   DEUX grandes parties indépendantes (bénéfice gardé) :
     • Épreuve écrite (Schriftliche Prüfung) — /225, réussite ≥ 135
         Leseverstehen (75) + Sprachbausteine (30) + Hörverstehen (75)
         + Schriftlicher Ausdruck (45, noté par l'IA)
     • Épreuve orale (Mündliche Prüfung) — /75, réussite ≥ 45 (notée IA)
   Certificat telc B1 (→ débloque B2) : ≥ 60 % à CHAQUE partie.
   Correction différée 24 h (cf. serveur). Aucune correction pendant l'épreuve.
   Réponses correctes RÉPARTIES sur toutes les positions (examen non devinable).
   ===================================================================== */
(function () {
  var RF = ["Richtig (vrai)", "Falsch (faux)"];
  window.TELC_B1 = {
    exam: "b1", code: "B1", titre: "Examen telc Deutsch B1",
    sousTitre: "Examen blanc complet, format officiel · écrit /225 + oral /75",
    seuilPct: 60,
    parts: {

      /* =========================== ÉPREUVE ÉCRITE ===================== */
      schriftlich: {
        key: "b1-schriftlich", titre: "Épreuve écrite", icone: "📝", sur: 225, seuil: 135,
        intro: "Épreuve collective d'environ 2 h 30, enchaînée. Aucune correction ne s'affiche : vous composez puis remettez votre copie (corrigée sous 24 h).",
        durees: { leseSb: 90 * 60, hoeren: 30 * 60, schreiben: 30 * 60 },

        lesen: {
          sur: 75, titre: "Leseverstehen", icone: "📖",
          intro: "Lisez les documents et répondez. (Compréhension écrite)",
          blocs: [
            {
              titre: "Teil 1 — Ein Leserbrief",
              texte: "Homeoffice – Fluch oder Segen?\n\nSeit der Pandemie arbeite ich, wie viele Kollegen, oft von zu Hause. Am Anfang war ich begeistert: kein langer Weg zur Arbeit mehr und mehr Zeit für die Familie. Doch nach einigen Monaten merkte ich auch Nachteile. Mir fehlten die Gespräche mit den Kollegen und manchmal war es schwer, Arbeit und Freizeit zu trennen. Heute arbeite ich nur noch zwei Tage pro Woche zu Hause – für mich ist das die beste Lösung.",
              questions: [
                { q: "Wie fand die Person das Homeoffice am Anfang?", options: ["Anstrengend", "Toll", "Langweilig"], correct: 1 },
                { q: "Welchen Nachteil nennt sie?", options: ["Den langen Arbeitsweg", "Zu wenig Zeit für die Familie", "Den fehlenden Kontakt zu Kollegen"], correct: 2 },
                { q: "Wie arbeitet die Person heute?", options: ["Nur im Büro", "Teils zu Hause, teils im Büro", "Nur zu Hause"], correct: 1 }
              ]
            },
            {
              titre: "Teil 2 — Anzeigen zuordnen",
              texte: "Kleinanzeigen:\nA) Deutschkurs am Abend, zweimal pro Woche, für Berufstätige.\nB) Gebrauchtes Fahrrad, gut gepflegt, günstig abzugeben.\nC) Babysitter für zwei Kinder am Samstag gesucht.\nD) Möblierte Wohnung ab sofort zu vermieten, zentral gelegen.\nE) Gitarrenunterricht für Anfänger, auch online möglich.\nF) Verkaufe Kühlschrank, fast neu, Abholung in Köln.",
              questions: [
                { q: "Lena möchte abends nach der Arbeit Deutsch lernen.", options: ["Anzeige A", "Anzeige C", "Anzeige E"], correct: 0 },
                { q: "Tom sucht eine möblierte Wohnung im Zentrum.", options: ["Anzeige B", "Anzeige D", "Anzeige F"], correct: 1 },
                { q: "Sara möchte ein Instrument lernen.", options: ["Anzeige A", "Anzeige E", "Anzeige C"], correct: 1 },
                { q: "Familie Bauer braucht samstags jemanden für die Kinder.", options: ["Anzeige D", "Anzeige B", "Anzeige C"], correct: 2 }
              ]
            },
            {
              titre: "Teil 3 — Eine Mitteilung",
              texte: "Stadtbibliothek – Wichtige Information\n\nLiebe Leserinnen und Leser, vom 1. bis 8. August bleibt die Bibliothek wegen Renovierung geschlossen. Bücher, die in dieser Zeit zurückgegeben werden müssen, können Sie ohne Gebühr bis zum 12. August abgeben. Online können Sie wie gewohnt E-Books ausleihen. Ab dem 9. August sind wir wieder für Sie da – mit einem neuen Lesecafé im ersten Stock!",
              questions: [
                { q: "Warum ist die Bibliothek geschlossen?", options: ["Wegen der Ferien", "Wegen Renovierung", "Wegen eines Feiertags"], correct: 1 },
                { q: "Was gilt für Bücher, die man jetzt zurückgeben muss?", options: ["Man zahlt eine Gebühr", "Man kann sie bis 12. August ohne Gebühr abgeben", "Man kann sie nicht abgeben"], correct: 1 },
                { q: "Was ist ab dem 9. August neu?", options: ["Ein Lesecafé", "Eine neue Öffnungszeit", "Ein Online-Shop"], correct: 0 }
              ]
            }
          ]
        },

        sprachbausteine: {
          sur: 30, titre: "Sprachbausteine", icone: "🧩",
          intro: "Choisissez le mot ou la structure qui complète correctement chaque phrase (grammaire et vocabulaire).",
          questions: [
            { q: "Ich schreibe Ihnen, ___ Ihnen einen neuen Termin vorzuschlagen.", options: ["um", "weil", "dass"], correct: 0 },
            { q: "Ich kann am Montag nicht kommen, ___ ich krank bin.", options: ["trotzdem", "weil", "sondern"], correct: 1 },
            { q: "___ Sie am Mittwoch um 15 Uhr Zeit?", options: ["Haben", "Sind", "Wissen"], correct: 0 },
            { q: "Wir treffen uns ___ meinem Büro im ersten Stock.", options: ["ins", "an", "in"], correct: 2 },
            { q: "Bitte bringen Sie die Dokumente ___.", options: ["mit", "auf", "ab"], correct: 0 },
            { q: "___ Sie noch Fragen haben, rufen Sie mich gern an.", options: ["Wenn", "Wann", "Als"], correct: 0 },
            { q: "Ich freue mich schon ___ unser Treffen.", options: ["für", "über", "auf"], correct: 2 },
            { q: "Ich schicke Ihnen die Information, ___ Sie brauchen.", options: ["der", "die", "das"], correct: 1 },
            { q: "Mit ___ Grüßen", options: ["freundliche", "freundlichen", "freundlich"], correct: 1 },
            { q: "Ich wünsche ___ einen schönen Tag.", options: ["Ihnen", "Sie", "Ihr"], correct: 0 }
          ]
        },

        hoeren: {
          sur: 75, titre: "Hörverstehen", icone: "🎧",
          intro: "Écoutez chaque document (2 fois maximum) et indiquez si l'affirmation est vraie (Richtig) ou fausse (Falsch).",
          documents: [
            {
              titre: "Document 1 — Verkehrs- und Wettermeldung",
              audio: "Guten Morgen, liebe Hörerinnen und Hörer. Hier die Verkehrsmeldung: Auf der A3 zwischen Frankfurt und Würzburg gibt es einen Stau von etwa fünf Kilometern wegen eines Unfalls. Bitte fahren Sie vorsichtig. Auf den anderen Strecken ist der Verkehr frei. Und nun das Wetter: Heute Nachmittag wird es sonnig und warm, bis zu vierundzwanzig Grad.",
              questions: [
                { q: "Auf der A3 gibt es einen Stau.", options: RF, correct: 0 },
                { q: "Der Stau ist wegen einer Baustelle.", options: RF, correct: 1 },
                { q: "Am Nachmittag wird es sonnig.", options: RF, correct: 0 }
              ]
            },
            {
              titre: "Document 2 — An der Bushaltestelle",
              audio: "Entschuldigung, wann fährt der nächste Bus zum Bahnhof? — Der nächste Bus fährt in zehn Minuten, um Viertel nach drei. — Und was kostet die Fahrt? — Zwei Euro fünfzig. Sie können beim Fahrer bezahlen. — Vielen Dank! — Gern. Die Haltestelle ist dort drüben, vor der Apotheke.",
              questions: [
                { q: "Der Bus fährt in zehn Minuten.", options: RF, correct: 0 },
                { q: "Die Fahrt kostet drei Euro.", options: RF, correct: 1 },
                { q: "Die Haltestelle ist vor der Apotheke.", options: RF, correct: 0 }
              ]
            },
            {
              titre: "Document 3 — Eine Nachricht von Julia",
              audio: "Hallo Markus, hier ist Julia. Du, ich wollte dir sagen: Ich finde deine Idee mit dem Wochenende am See super! Aber ich glaube, Samstag ist besser als Sonntag, weil ich am Sonntag arbeiten muss. Können wir vielleicht auch Lisa fragen? Sie hat ein Auto und wir könnten zusammen fahren. Ruf mich bitte zurück. Tschüss!",
              questions: [
                { q: "Julia findet Markus' Idee gut.", options: RF, correct: 0 },
                { q: "Julia möchte lieber am Sonntag fahren.", options: RF, correct: 1 },
                { q: "Lisa hat ein Auto.", options: RF, correct: 0 }
              ]
            }
          ]
        },

        schreiben: {
          sur: 45, titre: "Schriftlicher Ausdruck", icone: "✍️",
          intro: "Rédigez une lettre / un e-mail (environ 80–100 mots). Votre texte sera corrigé par l'IA.",
          tache: {
            id: "b1-brief", titre: "Eine Beschwerde-E-Mail", minMots: 80,
            consigne: "Sie haben vor zwei Wochen in einem Online-Shop eine Kaffeemaschine bestellt. Das Gerät funktioniert nicht richtig. Schreiben Sie eine E-Mail an den Kundenservice (ca. 80–100 Wörter) und gehen Sie auf alle vier Leitpunkte ein.",
            leitpunkte: [
              "Grund Ihres Schreibens (Ihre Bestellung nennen)",
              "Welches Problem haben Sie genau?",
              "Was erwarten Sie? (Reparatur, Umtausch oder Geld zurück)",
              "Bitten Sie um eine schnelle Antwort (mit Frist)"
            ]
          }
        }
      },

      /* =========================== ÉPREUVE ORALE ===================== */
      muendlich: {
        key: "b1-muendlich", titre: "Épreuve orale", icone: "🗣️", sur: 75, seuil: 45,
        prep: 20 * 60, duree: 15 * 60,
        intro: "Au telc B1, l'oral se passe en binôme. Ici, en mode solo : vous disposez de 20 minutes de préparation, puis vous enregistrez (ou écrivez) votre production pour les 3 parties. L'IA évalue le tout sur 75.",
        taches: [
          {
            id: "b1-eo1", type: "kontakt", titre: "Teil 1 — Kontaktaufnahme",
            consigne: "Présentez-vous : nom, âge, lieu d'habitation, travail ou études, langues, loisirs. Dites aussi pourquoi vous apprenez l'allemand et ce que vous aimez faire le week-end.",
            points: ["Persönliche Vorstellung (Name, Alter, Wohnort)", "Beruf / Studium und Sprachen", "Hobbys, Wochenende und warum Deutsch"]
          },
          {
            id: "b1-eo2", type: "thema", titre: "Teil 2 — Über ein Thema sprechen",
            consigne: "Réagissez à cette opinion : « Soziale Medien machen uns einsamer, nicht sozialer. » Donnez votre avis, des arguments et des exemples ; pesez le pour et le contre.",
            points: ["Ihre Meinung (Ich bin der Meinung…, Ich finde…)", "Argumente und konkrete Beispiele", "Vor- und Nachteile abwägen"]
          },
          {
            id: "b1-eo3", type: "planen", titre: "Teil 3 — Gemeinsam etwas planen",
            consigne: "Planifiez une fête de départ pour un collègue qui quitte l'entreprise. Faites des propositions et justifiez : lieu, date et heure, repas et boissons, programme/surprise, qui organise quoi.",
            points: ["Vorschläge machen (Wir könnten…, Ich schlage vor…)", "Begründen und auf Vorschläge reagieren", "Einen gemeinsamen Plan und Kompromiss finden"]
          }
        ]
      }
    }
  };
})();
