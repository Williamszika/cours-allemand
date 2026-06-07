/* =====================================================================
   telc-finalc.js — Examen combiné telc C1 + C2 (croisé, plus difficile).
   Format telc C1 standard, contenu croisé C1+C2 et plus exigeant.
   Écrit /191 = Lesen 48 + Sprachbausteine 22 + Hören 48 + Schreiben 48
   + DICTÉE 25 (niveau C2, 20 min) ; seuil RELEVÉ 124/191 (65 %).
   Oral /48, seuil 31 (65 %). Correction différée 24 h. Discussions orales
   = dialogue parlé avec l'examinateur. Réponses correctes réparties.
   ===================================================================== */
(function () {
  var RF = ["Richtig (vrai)", "Falsch (faux)"];
  window.TELC_FINALC = {
    exam: "finalc", code: "FINALC", titre: "Examen combiné telc C1 + C2",
    sousTitre: "Croisé C1+C2 · écrit /191 (dictée C2 incluse) + oral /48",
    seuilPct: 65,
    parts: {
      schriftlich: {
        key: "finalc-schriftlich", titre: "Épreuve écrite", icone: "📝", sur: 191, seuil: 124,
        intro: "Examen combiné C1+C2, le plus exigeant. Écrit /191 (dictée C2 incluse). Aucune correction pendant l'épreuve.",
        durees: { leseSb: 90 * 60, hoeren: 40 * 60, schreiben: 70 * 60 },
        lesen: {
          sur: 48, titre: "Leseverstehen", icone: "📖", intro: "Textes abstraits de niveau C1 et C2.",
          blocs: [
            {
              titre: "Teil 1 — Ein Essay (C1)",
              texte: "Über die Geduld\n\nIn einer Welt, die auf sofortige Verfügbarkeit ausgerichtet ist, gilt Geduld beinahe als Schwäche. Wer wartet, scheint zu zögern; wer zögert, verliert. Dabei übersehen wir, dass die wertvollsten Dinge – Vertrauen, Können, echte Beziehungen – sich nicht beschleunigen lassen. Geduld ist somit kein passives Hinnehmen, sondern eine aktive Haltung: die Bereitschaft, einem Prozess Zeit zu geben, der sich nicht erzwingen lässt.",
              questions: [
                { q: "Wie wird Geduld heute oft wahrgenommen?", options: ["Als Stärke", "Beinahe als Schwäche", "Als Pflicht"], correct: 1 },
                { q: "Was lässt sich laut Text nicht beschleunigen?", options: ["Vertrauen, Können, echte Beziehungen", "Technik", "Konsum"], correct: 0 },
                { q: "Wie definiert der Autor Geduld?", options: ["Als passives Hinnehmen", "Als aktive Haltung, einem Prozess Zeit zu geben", "Als Zögern"], correct: 1 }
              ]
            },
            {
              titre: "Teil 2 — Ein Standpunkt (C2)",
              texte: "Zur Sprache der Wissenschaft\n\nWissenschaftliche Texte gelten oft als unnötig kompliziert. Tatsächlich aber erfüllt ihre Präzision einen Zweck: Sie soll Missverständnisse ausschließen und Aussagen überprüfbar machen. Problematisch wird es erst, wenn Fachsprache nicht der Genauigkeit, sondern der Abgrenzung dient – wenn sie also weniger erklärt als beeindruckt. Die Kunst besteht darin, exakt zu bleiben, ohne den Leser auszuschließen.",
              questions: [
                { q: "Welchen Zweck erfüllt die Präzision wissenschaftlicher Texte?", options: ["Sie soll beeindrucken", "Sie schließt Missverständnisse aus und macht Aussagen überprüfbar", "Sie grenzt Laien aus"], correct: 1 },
                { q: "Wann wird Fachsprache laut Text problematisch?", options: ["Wenn sie der Abgrenzung statt der Genauigkeit dient", "Wenn sie zu einfach ist", "Immer"], correct: 0 },
                { q: "Worin besteht die „Kunst“?", options: ["Möglichst kompliziert zu schreiben", "Exakt zu bleiben, ohne den Leser auszuschließen", "Auf Fachbegriffe zu verzichten"], correct: 1 }
              ]
            }
          ]
        },
        sprachbausteine: {
          sur: 22, titre: "Sprachbausteine", icone: "🧩", intro: "Idiomes, syntaxe complexe et prépositions régies (C1–C2).",
          questions: [
            { q: "Er ließ sich durch nichts ___ seinem Ziel abbringen.", options: ["von", "aus", "über"], correct: 0 },
            { q: "___ aller Kritik hielt sie an ihrer Entscheidung fest.", options: ["Während", "Wegen", "Trotz"], correct: 2 },
            { q: "Es handelt sich hierbei ___ ein komplexes Problem.", options: ["über", "um", "von"], correct: 1 },
            { q: "Sie verfügt ___ jahrelange Erfahrung.", options: ["auf", "über", "an"], correct: 1 },
            { q: "Das Projekt scheiterte ___ fehlender Mittel.", options: ["an", "auf", "über"], correct: 0 },
            { q: "Angesichts ___ Entwicklung ist Vorsicht geboten.", options: ["die rasante", "der rasanten", "dem rasanten"], correct: 1 },
            { q: "Je differenzierter die Analyse, ___ überzeugender das Ergebnis.", options: ["desto", "also", "wie"], correct: 0 },
            { q: "Man muss sich ___ veränderte Bedingungen anpassen.", options: ["an", "auf", "über"], correct: 0 },
            { q: "___ er erschöpft war, hielt er die Frist ein.", options: ["Damit", "Obwohl", "Weil"], correct: 1 },
            { q: "Seine Argumente waren ___ stichhaltig, dass niemand widersprach.", options: ["so", "auch", "kaum"], correct: 0 }
          ]
        },
        hoeren: {
          sur: 48, titre: "Hörverstehen", icone: "🎧", intro: "Conférences et débats (C1–C2), 2 écoutes max. Richtig / Falsch.",
          documents: [
            {
              titre: "Document 1 — Auszug aus einem Vortrag",
              audio: "Lange Zeit galt Multitasking als Schlüsselkompetenz der modernen Arbeitswelt. Die Forschung zeichnet inzwischen ein anderes Bild: Wer mehrere Aufgaben gleichzeitig bearbeitet, verliert messbar an Genauigkeit und Tempo. Das Gehirn wechselt lediglich rasch hin und her, was Energie kostet. Konzentration auf eine Sache ist demnach kein Rückschritt, sondern eine unterschätzte Stärke.",
              questions: [
                { q: "Multitasking galt lange als Schlüsselkompetenz.", options: RF, correct: 0 },
                { q: "Laut Forschung erhöht Multitasking die Genauigkeit.", options: RF, correct: 1 },
                { q: "Das Gehirn wechselt schnell zwischen Aufgaben hin und her.", options: RF, correct: 0 }
              ]
            },
            {
              titre: "Document 2 — Eine Debatte",
              audio: "Ich halte ein generelles Tempolimit für überfällig. — Das ist ein bekanntes Argument, doch der Effekt auf die Umwelt wird meist überschätzt. — Mag sein, aber es geht auch um Sicherheit, nicht nur um Emissionen. — Da haben Sie einen Punkt, allerdings müsste man dann auch in bessere Ausbildung investieren.",
              questions: [
                { q: "Die erste Person ist für ein Tempolimit.", options: RF, correct: 0 },
                { q: "Die zweite Person hält den Umwelteffekt für überschätzt.", options: RF, correct: 0 },
                { q: "Am Ende lehnt die zweite Person jedes Argument ab.", options: RF, correct: 1 }
              ]
            }
          ]
        },
        schreiben: {
          sur: 48, titre: "Schriftlicher Ausdruck", icone: "✍️", intro: "Essai argumenté (~300 mots), style académique. Noté par l'IA.",
          tache: {
            id: "finalc-essay", titre: "Kritischer Essay (ca. 300 Wörter)", minMots: 250,
            consigne: "Verfassen Sie einen kritischen, formellen Essay (ca. 300 Wörter) zum Thema „Sollte die Arbeitszeit generell verkürzt werden?“. Entwickeln Sie eine klare These, wägen Sie Pro- und Gegenargumente ab und ziehen Sie eine begründete Schlussfolgerung. Achten Sie auf einen präzisen, akademischen Stil.",
            leitpunkte: ["Einleitung mit klarer These", "Pro- und Gegenargumente abwägen", "Beispiele/Belege einbeziehen", "Begründete Schlussfolgerung", "Akademischer Stil"]
          }
        },
        dictee: {
          titre: "Dictée — niveau C2", niveau: "C2", duree: 20 * 60, sur: 25,
          intro: "Écoutez (2 fois maximum) et écrivez exactement le texte. Niveau C2.",
          texte: "Erinnern ist kein bloßes Abrufen, sondern ein fortwährendes Rekonstruieren, das von der Gegenwart gefärbt wird. Was wir für ein getreues Abbild der Vergangenheit halten, ist in Wahrheit eine Erzählung, die wir uns selbst erzählen. Gerade das Vergessen ermöglicht es uns, aus unzähligen Eindrücken eine kohärente Geschichte unseres Lebens zu formen."
        }
      },
      muendlich: {
        key: "finalc-muendlich", titre: "Épreuve orale", icone: "🗣️", sur: 48, seuil: 31,
        prep: 20 * 60, duree: 18 * 60,
        intro: "3 parties (présentation, questions de suivi, débat). Les échanges sont un dialogue parlé avec l'examinateur. Aucune correction pendant l'épreuve.",
        taches: [
          {
            id: "finalc-eo1", type: "praesentation", titre: "Teil 1 — Präsentation",
            consigne: "Faites un exposé structuré (≈ 3 min) sur le sujet imposé : « Chancen und Risiken der künstlichen Intelligenz ». Incluez des nuances, des contre-arguments et des exemples.",
            points: ["Klar gegliederter, flüssiger Vortrag", "Differenzierung und Gegenargumente", "Gehobenes Register"]
          },
          {
            id: "finalc-eo2", type: "anschlussfragen", titre: "Teil 2 — Anschlussfragen",
            consigne: "Répondez aux questions approfondies de l'examinateur sur votre exposé et défendez votre point de vue avec répartie.",
            points: ["Flexibel reagieren", "Standpunkt verteidigen", "Spontan und flüssig formulieren"],
            opener: "Vielen Dank für Ihren Vortrag. Sie sagen, KI biete große Chancen — aber sehen Sie nicht die Gefahr, dass ganze Berufsgruppen verschwinden? Wie würden Sie darauf reagieren?"
          },
          {
            id: "finalc-eo3", type: "diskussion", titre: "Teil 3 — Diskussion",
            consigne: "Débattez avec l'examinateur de la citation : « Nicht alles, was machbar ist, ist auch wünschenswert. » Argumentez, nuancez, concédez et réfutez.",
            points: ["Argumentieren und differenzieren", "Zugeständnisse machen", "Souverän widerlegen"],
            opener: "Ein berühmter Satz lautet: „Nicht alles, was machbar ist, ist auch wünschenswert.“ Ich finde, das ist zu pessimistisch — Fortschritt sollte man nicht bremsen. Was entgegnen Sie mir?"
          }
        ]
      }
    }
  };
})();
