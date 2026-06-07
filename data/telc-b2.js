/* =====================================================================
   telc-b2.js — Examen blanc telc Deutsch B2, format officiel.
   Même structure que le B1 (deux parties indépendantes, bénéfice gardé),
   mais exigences B2 : textes plus longs, argumentation, idiomes, précision
   grammaticale (connecteurs logiques, déclinaisons, prépositions régies).
     • Épreuve écrite — /225, réussite ≥ 135 (2 h 20)
         Leseverstehen 75 + Sprachbausteine 30 + Hörverstehen 75
         + Schriftlicher Ausdruck 45 (texte argumenté, noté IA)
     • Épreuve orale — /75, réussite ≥ 45 (Präsentation, Diskussion,
         Problemlösung ; notée IA)
   Certificat telc B2 (→ débloque la suite) : ≥ 60 % à CHAQUE partie.
   ===================================================================== */
(function () {
  var RF = ["Richtig (vrai)", "Falsch (faux)"];
  window.TELC_B2 = {
    exam: "b2", code: "B2", titre: "Examen telc Deutsch B2",
    sousTitre: "Examen blanc complet, format officiel · écrit /225 + oral /75",
    seuilPct: 60,
    parts: {

      /* =========================== ÉPREUVE ÉCRITE ===================== */
      schriftlich: {
        key: "b2-schriftlich", titre: "Épreuve écrite", icone: "📝", sur: 225, seuil: 135,
        intro: "Épreuve collective d'environ 2 h 20, enchaînée. Aucune correction ne s'affiche : vous composez puis remettez votre copie (corrigée sous 24 h).",
        durees: { leseSb: 90 * 60, hoeren: 20 * 60, schreiben: 30 * 60 },

        lesen: {
          sur: 75, titre: "Leseverstehen", icone: "📖",
          intro: "Lisez des textes de presse, d'opinion et professionnels, puis répondez.",
          blocs: [
            {
              titre: "Teil 1 — Ein Meinungstext",
              texte: "Homeoffice: ein Modell mit Grenzen\n\nViele Unternehmen haben während der Pandemie entdeckt, dass Arbeit von zu Hause durchaus funktioniert. Befürworter betonen die gewonnene Flexibilität und den Wegfall langer Pendelzeiten. Kritiker hingegen warnen vor der Vereinsamung der Mitarbeiter und einer schleichenden Entgrenzung zwischen Beruf und Privatleben. Studien zeigen, dass die Produktivität zwar kurzfristig steigt, langfristig aber die Kreativität leidet, weil der spontane Austausch im Team fehlt. Die meisten Fachleute plädieren deshalb für ein hybrides Modell, das die Vorteile beider Welten verbindet.",
              questions: [
                { q: "Was ist das zentrale Argument der Kritiker?", options: ["Die Pendelzeiten sind zu lang", "Mitarbeiter vereinsamen und Beruf und Privatleben vermischen sich", "Die Produktivität sinkt sofort"], correct: 1 },
                { q: "Was sagen Studien laut Text über die Produktivität?", options: ["Sie sinkt von Anfang an", "Sie steigt kurzfristig, schadet aber langfristig der Kreativität", "Sie bleibt immer gleich"], correct: 1 },
                { q: "Welche Lösung empfehlen die Fachleute?", options: ["Nur Büroarbeit", "Nur Homeoffice", "Ein hybrides Modell"], correct: 2 }
              ]
            },
            {
              titre: "Teil 2 — Standpunkte zuordnen",
              texte: "Leserstimmen zum Thema „Tempolimit auf Autobahnen“:\nA) „Ein Limit würde unzählige Leben retten und die Umwelt schonen.“\nB) „Freie Fahrt gehört zur deutschen Kultur – der Staat soll sich nicht einmischen.“\nC) „Mir ist es ehrlich gesagt egal, ich fahre sowieso selten schneller als 130.“\nD) „Entscheidend ist nicht das Limit, sondern eine bessere Fahrausbildung.“\nE) „Ökonomisch bringt ein Limit kaum etwas, der Spritverbrauch sinkt nur minimal.“",
              questions: [
                { q: "Wer argumentiert vor allem mit Sicherheit und Umweltschutz?", options: ["Person A", "Person B", "Person E"], correct: 0 },
                { q: "Wer lehnt staatliche Eingriffe grundsätzlich ab?", options: ["Person C", "Person B", "Person D"], correct: 1 },
                { q: "Wer hält die Ausbildung für wichtiger als ein Limit?", options: ["Person E", "Person A", "Person D"], correct: 2 }
              ]
            },
            {
              titre: "Teil 3 — Ein internes Rundschreiben",
              texte: "Internes Rundschreiben\n\nSehr geehrte Kolleginnen und Kollegen, ab dem kommenden Quartal führen wir ein neues System zur Erfassung der Arbeitszeit ein. Die Stempeluhr entfällt; stattdessen tragen Sie Ihre Zeiten selbstständig in das Online-Portal ein. Wir bitten Sie, dies täglich und gewissenhaft zu tun, da fehlende Einträge zu Verzögerungen bei der Lohnabrechnung führen können. Eine Schulung findet am 15. des Monats statt; die Teilnahme ist für alle Mitarbeitenden ohne feste Gleitzeit verpflichtend.",
              questions: [
                { q: "Was ändert sich für die Mitarbeiter?", options: ["Sie stempeln wie bisher", "Sie erfassen ihre Arbeitszeit selbst online", "Die Arbeitszeit wird abgeschafft"], correct: 1 },
                { q: "Was kann bei fehlenden Einträgen passieren?", options: ["Nichts", "Die Lohnabrechnung verzögert sich", "Man wird sofort entlassen"], correct: 1 },
                { q: "Für wen ist die Schulung verpflichtend?", options: ["Für alle ohne feste Gleitzeit", "Für niemanden", "Nur für neue Mitarbeiter"], correct: 0 }
              ]
            }
          ]
        },

        sprachbausteine: {
          sur: 30, titre: "Sprachbausteine", icone: "🧩",
          intro: "Choisissez le connecteur, la déclinaison ou la préposition qui convient (précision grammaticale B2).",
          questions: [
            { q: "Er hat hart gearbeitet, ___ wurde er nicht befördert.", options: ["trotzdem", "deshalb", "also"], correct: 0 },
            { q: "Wir verschieben die Sitzung, ___ alle Teilnehmer anwesend sein können.", options: ["weil", "damit", "obwohl"], correct: 1 },
            { q: "___ des schlechten Wetters fand das Sommerfest statt.", options: ["Während", "Wegen", "Trotz"], correct: 2 },
            { q: "Ich freue mich schon ___ die Zusammenarbeit mit Ihnen.", options: ["auf", "über", "an"], correct: 0 },
            { q: "Der Bericht, ___ Sie gestern erhalten haben, ist streng vertraulich.", options: ["der", "den", "dem"], correct: 1 },
            { q: "Sie bestand ___ ihrer ursprünglichen Forderung.", options: ["an", "über", "auf"], correct: 2 },
            { q: "Je mehr er übte, ___ sicherer wurde sein Auftritt.", options: ["desto", "also", "wie"], correct: 0 },
            { q: "Es ist entscheidend, dass man sich ___ neue Situationen anpasst.", options: ["auf", "an", "über"], correct: 1 },
            { q: "___ er völlig erschöpft war, hielt er die Frist ein.", options: ["Damit", "Weil", "Obwohl"], correct: 2 },
            { q: "Die Verhandlungen wurden ___ des wachsenden Drucks abgebrochen.", options: ["wegen", "trotz", "während"], correct: 0 }
          ]
        },

        hoeren: {
          sur: 75, titre: "Hörverstehen", icone: "🎧",
          intro: "Écoutez chaque document (2 fois maximum) — interviews, débats, conversations rapides — et répondez Richtig / Falsch.",
          documents: [
            {
              titre: "Document 1 — Radiointerview mit einer Expertin",
              audio: "Und nun zu unserem Studiogast, Frau Doktor Brandt, Ernährungswissenschaftlerin. — Frau Brandt, stimmt es eigentlich, dass Zucker süchtig macht? — Nun, das ist etwas übertrieben. Zucker aktiviert zwar das Belohnungssystem im Gehirn, aber von einer echten Sucht im medizinischen Sinne kann man nicht sprechen. Problematisch ist eher die versteckte Menge in Fertigprodukten. Mein Rat: Lesen Sie die Zutatenliste genau, dann sind Sie auf der sicheren Seite.",
              questions: [
                { q: "Frau Brandt ist Ärztin.", options: RF, correct: 1 },
                { q: "Laut Frau Brandt macht Zucker im medizinischen Sinne süchtig.", options: RF, correct: 1 },
                { q: "Sie empfiehlt, die Zutatenliste genau zu lesen.", options: RF, correct: 0 }
              ]
            },
            {
              titre: "Document 2 — Eine Diskussion",
              audio: "Ich finde, man sollte das Handy in der Schule komplett verbieten. Die Schüler sind doch nur noch abgelenkt. — Das sehe ich völlig anders. Ein generelles Verbot bringt gar nichts; man muss den Schülern beibringen, das Handy sinnvoll zu nutzen. — Aber seien wir ehrlich, in der Praxis funktioniert das doch nie. — Doch, an meiner Schule haben wir mit klaren Regeln sehr gute Erfahrungen gemacht.",
              questions: [
                { q: "Die erste Person ist für ein Handyverbot.", options: RF, correct: 0 },
                { q: "Die zweite Person stimmt dem Verbot zu.", options: RF, correct: 1 },
                { q: "An der Schule der zweiten Person gibt es gute Erfahrungen mit Regeln.", options: RF, correct: 0 }
              ]
            },
            {
              titre: "Document 3 — Ein Gespräch unter Kollegen",
              audio: "Mensch, du siehst ja richtig fertig aus! — Frag lieber nicht. Mein Chef hat mir in letzter Minute noch ein Projekt aufs Auge gedrückt, und das Ganze muss bis morgen fertig sein. — Das ist ja eine Zumutung! Kannst du nicht einfach Nein sagen? — Bei dem? Keine Chance. Da beißt man auf Granit.",
              questions: [
                { q: "Die Person hat sehr kurzfristig viel Arbeit bekommen.", options: RF, correct: 0 },
                { q: "Der Chef lässt mit sich reden.", options: RF, correct: 1 },
                { q: "Die Aufgabe muss erst nächste Woche fertig sein.", options: RF, correct: 1 }
              ]
            }
          ]
        },

        schreiben: {
          sur: 45, titre: "Schriftlicher Ausdruck", icone: "✍️",
          intro: "Rédigez un texte argumenté (environ 150 mots). Votre texte sera corrigé par l'IA.",
          tache: {
            id: "b2-stellungnahme", titre: "Eine Stellungnahme (Leserbrief)", minMots: 130,
            consigne: "In Ihrer Stadt soll die Innenstadt für Autos komplett gesperrt werden. Schreiben Sie einen Leserbrief an die Lokalzeitung (ca. 150 Wörter). Nehmen Sie klar Stellung (dafür oder dagegen) und gehen Sie auf alle vier Punkte ein.",
            leitpunkte: [
              "Nehmen Sie eine klare Position ein (dafür / dagegen)",
              "Begründen Sie mit mindestens zwei Argumenten",
              "Gehen Sie auf einen möglichen Gegeneinwand ein",
              "Achten Sie auf die angemessene Form eines Leserbriefs"
            ]
          }
        }
      },

      /* =========================== ÉPREUVE ORALE ===================== */
      muendlich: {
        key: "b2-muendlich", titre: "Épreuve orale", icone: "🗣️", sur: 75, seuil: 45,
        prep: 20 * 60, duree: 15 * 60,
        intro: "Au telc B2, l'oral se passe en binôme. Ici, en mode solo : 20 minutes de préparation, puis vous enregistrez (ou écrivez) votre production pour les 3 parties. L'IA évalue le tout sur 75 (exigences B2 : argumentation structurée, réactivité, précision).",
        taches: [
          {
            id: "b2-eo1", type: "praesentation", titre: "Teil 1 — Präsentation",
            consigne: "Présentez brièvement un sujet de votre choix (un livre marquant, un voyage important ou une expérience professionnelle). Structurez : introduction, points principaux, conclusion. Soyez prêt à répondre à des questions.",
            points: ["Thema klar einführen und gliedern", "Hauptpunkte mit Details und Beispielen", "Auf mögliche Nachfragen vorbereitet sein"]
          },
          {
            id: "b2-eo2", type: "diskussion", titre: "Teil 2 — Diskussion",
            consigne: "Réagissez à cette thèse controversée : « Soziale Netzwerke sollten ab einem bestimmten Alter strenger reguliert werden. » Exprimez votre accord ou désaccord avec des arguments structurés et anticipez les contre-arguments.",
            points: ["Klar Position beziehen (Ich stimme zu / Ich widerspreche…)", "Argumente strukturieren (erstens, außerdem, schließlich)", "Auf Gegenargumente reagieren"]
          },
          {
            id: "b2-eo3", type: "problemloesung", titre: "Teil 3 — Problemlösung / Planung",
            consigne: "Planifiez (avec un partenaire) une campagne d'information dans votre entreprise pour promouvoir la mobilité durable. Discutez budget, canaux de communication, calendrier et répartition des tâches ; trouvez des compromis.",
            points: ["Vorschläge machen und begründen", "Budget, Kanäle und Aufgaben verteilen", "Kompromisse aushandeln und Einigung erzielen"]
          }
        ]
      }
    }
  };
})();
