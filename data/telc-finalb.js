/* =====================================================================
   telc-finalb.js — Examen combiné telc B1 + B2 (croisé, plus difficile).
   Format telc B2 standard, contenu croisé B1+B2 et plus exigeant.
   Écrit /250 = Lesen 75 + Sprachbausteine 30 + Hören 75 + Schreiben 45
   + DICTÉE 25 (niveau C1, 15 min) ; seuil RELEVÉ 163/250 (65 %).
   Oral /75, seuil 49 (65 %). Correction différée 24 h. Discussions orales
   = dialogue parlé avec l'examinateur. Réponses correctes réparties.
   ===================================================================== */
(function () {
  var RF = ["Richtig (vrai)", "Falsch (faux)"];
  window.TELC_FINALB = {
    exam: "finalb", code: "FINALB", titre: "Examen combiné telc B1 + B2",
    sousTitre: "Croisé B1+B2 · écrit /250 (dictée C1 incluse) + oral /75",
    seuilPct: 65,
    parts: {
      schriftlich: {
        key: "finalb-schriftlich", titre: "Épreuve écrite", icone: "📝", sur: 250, seuil: 163,
        intro: "Examen combiné B1+B2, plus exigeant. Écrit /250 (dictée C1 incluse). Aucune correction pendant l'épreuve.",
        durees: { leseSb: 90 * 60, hoeren: 30 * 60, schreiben: 30 * 60 },
        lesen: {
          sur: 75, titre: "Leseverstehen", icone: "📖", intro: "Textes de niveau B1 et B2.",
          blocs: [
            {
              titre: "Teil 1 — Ein Erfahrungsbericht (B1)",
              texte: "Ein Jahr im Ausland\n\nNach dem Abitur wollte ich unbedingt eine Fremdsprache richtig lernen. Also ging ich für ein Jahr nach Spanien und arbeitete dort in einem kleinen Hotel. Am Anfang verstand ich fast nichts, und das war manchmal frustrierend. Doch nach ein paar Monaten konnte ich plötzlich Gespräche führen, ohne nachzudenken. Heute weiß ich: Eine Sprache lernt man nicht im Klassenzimmer, sondern im Alltag.",
              questions: [
                { q: "Warum ging die Person nach Spanien?", options: ["Um Urlaub zu machen", "Um eine Sprache richtig zu lernen", "Um zu studieren"], correct: 1 },
                { q: "Wie war es am Anfang?", options: ["Einfach", "Frustrierend, weil sie wenig verstand", "Langweilig"], correct: 1 },
                { q: "Was ist ihr Fazit?", options: ["Man lernt eine Sprache im Alltag", "Man lernt nur im Klassenzimmer", "Sprachen lernen ist unmöglich"], correct: 0 }
              ]
            },
            {
              titre: "Teil 2 — Ein Meinungstext (B2)",
              texte: "Die Vier-Tage-Woche\n\nImmer mehr Unternehmen testen die Vier-Tage-Woche. Befürworter argumentieren, dass ausgeruhte Mitarbeiter produktiver und seltener krank sind. Kritiker hingegen befürchten, dass die gleiche Arbeit in weniger Zeit erledigt werden muss, was den Druck sogar erhöht. Erste Studien deuten darauf hin, dass das Modell vor allem dann funktioniert, wenn auch die Arbeitsabläufe überdacht werden.",
              questions: [
                { q: "Was sagen die Befürworter?", options: ["Ausgeruhte Mitarbeiter sind produktiver", "Die Arbeit wird mehr", "Die Löhne sinken"], correct: 0 },
                { q: "Was befürchten die Kritiker?", options: ["Mehr Urlaub", "Dass der Druck steigt", "Dass niemand mehr arbeitet"], correct: 1 },
                { q: "Wann funktioniert das Modell laut Studien?", options: ["Immer", "Wenn die Arbeitsabläufe überdacht werden", "Nie"], correct: 1 }
              ]
            }
          ]
        },
        sprachbausteine: {
          sur: 30, titre: "Sprachbausteine", icone: "🧩", intro: "Connecteurs, prépositions et déclinaisons (B1–B2).",
          questions: [
            { q: "Ich freue mich, ___ du kommen kannst.", options: ["dass", "ob", "weil"], correct: 0 },
            { q: "___ des Regens haben wir gegrillt.", options: ["Wegen", "Trotz", "Während"], correct: 1 },
            { q: "Er interessiert sich sehr ___ Geschichte.", options: ["für", "auf", "an"], correct: 0 },
            { q: "Das ist der Kollege, ___ ich dir erzählt habe.", options: ["der", "den", "von dem"], correct: 2 },
            { q: "Je länger ich übe, ___ besser werde ich.", options: ["als", "desto", "wie"], correct: 1 },
            { q: "Sie hat den Termin verschoben, ___ sie krank war.", options: ["obwohl", "weil", "damit"], correct: 1 },
            { q: "Wir nehmen den Zug, ___ schneller anzukommen.", options: ["um", "damit", "zu"], correct: 0 },
            { q: "Mit ___ Kollegen verstehe ich mich gut.", options: ["meine", "meinen", "meinem"], correct: 1 },
            { q: "Er bestand ___ seiner Meinung.", options: ["auf", "an", "über"], correct: 0 },
            { q: "___ ich Zeit habe, rufe ich dich an.", options: ["Sobald", "Seitdem", "Bevor"], correct: 0 }
          ]
        },
        hoeren: {
          sur: 75, titre: "Hörverstehen", icone: "🎧", intro: "Annonces et dialogues (B1–B2), 2 écoutes max. Richtig / Falsch.",
          documents: [
            {
              titre: "Document 1 — Eine Durchsage",
              audio: "Liebe Kundinnen und Kunden, unser Geschäft schließt heute ausnahmsweise bereits um achtzehn Uhr wegen einer internen Schulung. Ab morgen gelten wieder die normalen Öffnungszeiten bis zwanzig Uhr. Wir danken für Ihr Verständnis.",
              questions: [
                { q: "Das Geschäft schließt heute früher.", options: RF, correct: 0 },
                { q: "Der Grund ist ein Stromausfall.", options: RF, correct: 1 },
                { q: "Morgen ist bis 20 Uhr geöffnet.", options: RF, correct: 0 }
              ]
            },
            {
              titre: "Document 2 — Ein Gespräch",
              audio: "Hast du dir das neue Projekt schon angeschaut? — Ja, aber ehrlich gesagt finde ich den Zeitplan zu eng. — Das sehe ich auch so. Wir sollten mit der Chefin reden und um eine Woche mehr bitten. — Gute Idee, ich schreibe ihr gleich eine Mail.",
              questions: [
                { q: "Die zweite Person findet den Zeitplan zu eng.", options: RF, correct: 0 },
                { q: "Sie wollen mehr Zeit verlangen.", options: RF, correct: 0 },
                { q: "Sie rufen die Chefin sofort an.", options: RF, correct: 1 }
              ]
            }
          ]
        },
        schreiben: {
          sur: 45, titre: "Schriftlicher Ausdruck", icone: "✍️", intro: "Lettre formelle / prise de position (~150 mots), notée par l'IA.",
          tache: {
            id: "finalb-brief", titre: "Eine Beschwerde / Stellungnahme", minMots: 130,
            consigne: "Ihr Fitnessstudio hat die Preise stark erhöht, ohne die Mitglieder zu informieren. Schreiben Sie eine formelle E-Mail an die Geschäftsleitung (ca. 150 Wörter): beschreiben Sie das Problem, äußern Sie Ihre Kritik mit Argumenten und fordern Sie eine konkrete Lösung.",
            leitpunkte: ["Grund des Schreibens", "Problem und Kritik mit Argumenten", "Konkrete Forderung", "Höflicher, formeller Stil"]
          }
        },
        dictee: {
          titre: "Dictée — niveau C1", niveau: "C1", duree: 15 * 60, sur: 25,
          intro: "Écoutez (2 fois maximum) et écrivez exactement le texte. Niveau C1.",
          texte: "Obwohl die Digitalisierung zahlreiche Erleichterungen mit sich bringt, warnen Fachleute zunehmend vor ihren Schattenseiten. Wer ständig erreichbar ist, verliert nicht selten die Fähigkeit, sich über längere Zeit zu konzentrieren. Entscheidend ist daher, bewusst Grenzen zu setzen und Pausen nicht als Luxus, sondern als Notwendigkeit zu begreifen."
        }
      },
      muendlich: {
        key: "finalb-muendlich", titre: "Épreuve orale", icone: "🗣️", sur: 75, seuil: 49,
        prep: 20 * 60, duree: 15 * 60,
        intro: "3 parties (présentation, discussion, planification). Les discussions sont un dialogue parlé avec l'examinateur. Aucune correction pendant l'épreuve.",
        taches: [
          {
            id: "finalb-eo1", type: "praesentation", titre: "Teil 1 — Präsentation",
            consigne: "Présentez en 2 minutes un sujet de votre choix (un projet, un voyage marquant, une expérience). Structurez : introduction, points principaux, conclusion.",
            points: ["Klare Gliederung", "Details und Beispiele", "Flüssiger Vortrag"]
          },
          {
            id: "finalb-eo2", type: "diskussion", titre: "Teil 2 — Diskussion",
            consigne: "Débattez avec l'examinateur de cette thèse : « Homeoffice sollte für alle Büroangestellten zur Pflicht werden. » Donnez votre avis, argumentez et réagissez à ses objections.",
            points: ["Position beziehen", "Argumente und Beispiele", "Auf Gegenargumente reagieren"],
            opener: "Ich behaupte: Homeoffice sollte für alle Büroangestellten zur Pflicht werden. Wie sehen Sie das?"
          },
          {
            id: "finalb-eo3", type: "planen", titre: "Teil 3 — Gemeinsam planen",
            consigne: "Planifiez avec l'examinateur une fête d'entreprise : lieu, date, budget, programme, répartition des tâches. Faites des propositions et trouvez des compromis.",
            points: ["Vorschläge machen und begründen", "Auf Vorschläge reagieren", "Kompromisse finden"],
            opener: "Gut, planen wir gemeinsam unsere Firmenfeier. Ich schlage vor, wir feiern in einem Restaurant. Was halten Sie davon, und wo sollen wir Ihrer Meinung nach feiern?"
          }
        ]
      }
    }
  };
})();
