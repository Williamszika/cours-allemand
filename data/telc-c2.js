/* =====================================================================
   telc-c2.js — Examen blanc telc Deutsch C2, format officiel.
   Le C2 bouscule la structure : PAS de Sprachbausteine, et un module
   combiné « Hören und Schreiben » (écouter puis SYNTHÉTISER par écrit).
     • Épreuve écrite — /225, réussite ≥ 135 (≈ 4 h 10)
         Leseverstehen 60 (auto) + Hören und Schreiben 75 (IA, synthèse)
         + Schriftlicher Ausdruck 90 (IA, dissertation sur sources)
     • Épreuve orale — /75, réussite ≥ 45 (Präsentation + Diskussion, IA)
   NB : telc ne publie pas de barème /point unique pour le C2 ; les totaux
   ci-dessus sont des valeurs par défaut respectant la règle des 60 %
   (modifiables en une ligne dans TELC_CFG côté serveur).
   Niveau C2 : textes abstraits/littéraires/scientifiques, langue soignée.
   ===================================================================== */
(function () {
  window.TELC_C2 = {
    exam: "c2", code: "C2", titre: "Examen telc Deutsch C2",
    sousTitre: "Examen blanc complet, format officiel · écrit /225 + oral /75",
    seuilPct: 60,
    parts: {

      /* =========================== ÉPREUVE ÉCRITE ===================== */
      schriftlich: {
        key: "c2-schriftlich", titre: "Épreuve écrite", icone: "📝", sur: 225, seuil: 135,
        format: "c2",
        intro: "Épreuve collective d'environ 4 h 10. Textes de niveau universitaire/littéraire. Aucune correction ne s'affiche : vous composez puis remettez votre copie (corrigée sous 24 h).",
        durees: { lesen: 80 * 60, hoerenSchreiben: 60 * 60, pause: 20 * 60, schreiben: 90 * 60 },

        lesen: {
          sur: 60, titre: "Leseverstehen", icone: "📖",
          intro: "Analyse de textes complexes : ordre logique, nuances implicites, décodage d'arguments.",
          blocs: [
            {
              titre: "Teil 1 — Ein essayistischer Text",
              texte: "Über das Vergessen\n\nMan hält das Gedächtnis gemeinhin für einen Speicher, in dem Erlebtes unversehrt aufbewahrt wird. Doch diese Vorstellung trügt. Erinnern ist kein bloßes Abrufen, sondern ein Rekonstruieren – jedes Mal aufs Neue, gefärbt von der Gegenwart, in der wir uns erinnern. Was wir für ein treues Abbild der Vergangenheit halten, ist in Wahrheit eine Erzählung, die wir uns selbst erzählen. Insofern ist das Vergessen kein bloßer Mangel, sondern die Bedingung dafür, dass wir überhaupt eine kohärente Geschichte unseres Lebens entwerfen können.",
              questions: [
                { q: "Welche verbreitete Vorstellung stellt der Text infrage?", options: ["Dass das Gedächtnis ein treuer Speicher ist", "Dass man nichts vergisst", "Dass Erinnerungen unwichtig sind"], correct: 0 },
                { q: "Wie beschreibt der Autor das Erinnern?", options: ["Als bloßes Abrufen", "Als ein Rekonstruieren, gefärbt von der Gegenwart", "Als reinen Mangel"], correct: 1 },
                { q: "Welche Rolle spielt das Vergessen laut Text?", options: ["Es ist nur ein Defizit", "Es ist Bedingung für eine kohärente Lebensgeschichte", "Es verhindert jedes Erinnern"], correct: 1 }
              ]
            },
            {
              titre: "Teil 2 — Logische Reihenfolge",
              texte: "Bringen Sie die Abschnitte in die logische Reihenfolge:\n\nA) Erst diese Erkenntnis führte zu einem grundlegenden Umdenken in der Stadtplanung.\nB) Lange Zeit galt das Auto als Inbegriff von Fortschritt und Freiheit.\nC) Doch mit wachsendem Verkehr zeigten sich bald die Schattenseiten: Lärm, Abgase, verstopfte Straßen.\nD) Heute setzen viele Städte konsequent auf Fußgänger, Rad und öffentlichen Nahverkehr.",
              questions: [
                { q: "Welcher Abschnitt steht am Anfang?", options: ["Abschnitt A", "Abschnitt B", "Abschnitt D"], correct: 1 },
                { q: "Welche Reihenfolge ist logisch korrekt?", options: ["B – C – A – D", "A – B – C – D", "D – C – B – A"], correct: 0 },
                { q: "Welcher Abschnitt bildet den Schluss?", options: ["Abschnitt A", "Abschnitt C", "Abschnitt D"], correct: 2 }
              ]
            },
            {
              titre: "Teil 3 — Argumentation entschlüsseln",
              texte: "Zur Debatte um das Grundeinkommen\n\nWer gegen ein bedingungsloses Grundeinkommen argumentiert, beruft sich gern auf die menschliche Natur: Ohne Zwang, so die Annahme, werde niemand mehr arbeiten. Diese These klingt plausibel, verkennt aber, dass Menschen Tätigkeit nicht allein des Geldes wegen suchen, sondern auch aus dem Bedürfnis nach Sinn und Anerkennung. Die eigentliche Frage ist mithin nicht, ob Menschen ohne Zwang arbeiten, sondern unter welchen Bedingungen sie es freiwillig und gern tun.",
              questions: [
                { q: "Auf welche Annahme berufen sich die Gegner laut Text?", options: ["Dass Menschen ohne Zwang nicht mehr arbeiten", "Dass das Grundeinkommen zu teuer ist", "Dass alle reich werden wollen"], correct: 0 },
                { q: "Welchen Einwand bringt der Autor vor?", options: ["Menschen arbeiten nur für Geld", "Menschen suchen auch Sinn und Anerkennung", "Arbeit ist grundsätzlich überflüssig"], correct: 1 },
                { q: "Wie formuliert der Autor die eigentliche Frage um?", options: ["Ob Menschen ohne Zwang arbeiten", "Unter welchen Bedingungen sie freiwillig arbeiten", "Wie viel Geld nötig ist"], correct: 1 }
              ]
            }
          ]
        },

        hoerenSchreiben: {
          sur: 75, titre: "Hören und Schreiben", icone: "🎧",
          intro: "Écoutez la conférence (2 fois maximum), prenez des notes, puis rédigez une synthèse cohérente. Notée par l'IA.",
          audios: [
            { titre: "Vortrag — Die Aufmerksamkeitsökonomie", audio: "In meinem heutigen Vortrag möchte ich auf ein oft übersehenes Phänomen eingehen: die sogenannte Aufmerksamkeitsökonomie. Unsere Aufmerksamkeit ist zu einer knappen Ressource geworden, um die zahllose Dienste konkurrieren. Drei Punkte sind dabei zentral. Erstens: Was kostenlos erscheint, bezahlen wir mit unserer Zeit und unseren Daten. Zweitens: Die ständige Ablenkung verändert, wie wir denken – tiefes, konzentriertes Lesen fällt vielen zunehmend schwer. Drittens: Es liegt an uns, bewusste Grenzen zu setzen, denn die Anbieter haben kein Interesse daran, dass wir weniger Zeit mit ihnen verbringen." }
          ],
          tache: {
            id: "c2-hs", consigne: "Fassen Sie die wichtigsten Aussagen des Vortrags in einem zusammenhängenden Text zusammen (ca. 120–150 Wörter). Geben Sie die drei zentralen Punkte präzise und strukturiert wieder.", minMots: 120
          }
        },

        schreiben: {
          sur: 90, titre: "Schriftlicher Ausdruck", icone: "✍️",
          intro: "Dissertation critique (~350 mots) à partir de plusieurs sources. Style académique exigé. Notée par l'IA.",
          tache: {
            id: "c2-essay", titre: "Kritischer Essay (ca. 350 Wörter)", minMots: 300,
            consigne: "Verfassen Sie einen kritischen, formellen Essay (ca. 350 Wörter) zum Thema „Fortschritt um jeden Preis?“. Beziehen Sie die folgenden Quellen ein und nehmen Sie begründet Stellung:\n\nQuelle 1 (Statistik): 78 % der Befragten halten technischen Fortschritt für unverzichtbar, zugleich fürchten 54 % seine sozialen Folgen.\nQuelle 2 (Zitat): „Nicht alles, was machbar ist, ist auch wünschenswert.“ (Hans Jonas)\nQuelle 3 (These): Manche Ökonomen warnen, ein Verzicht auf Innovation gefährde den Wohlstand.",
            leitpunkte: [
              "Einleitung mit Problematisierung",
              "Quellen kritisch verarbeiten und gewichten",
              "Eigene These klar entwickeln und begründen",
              "Gegenpositionen einbeziehen und abwägen",
              "Formeller, literarisch-akademischer Stil"
            ]
          }
        }
      },

      /* =========================== ÉPREUVE ORALE ===================== */
      muendlich: {
        key: "c2-muendlich", titre: "Épreuve orale", icone: "🗣️", sur: 75, seuil: 45,
        prep: 20 * 60, duree: 15 * 60,
        intro: "Au telc C2, l'oral est généralement individuel (15 min) avec 20 min de préparation. Ici, en mode solo : préparez, puis enregistrez (ou écrivez) vos interventions. L'IA évalue sur 75 (exigences C2 : fluidité native, nuance, idiomes, registre).",
        taches: [
          {
            id: "c2-eo1", type: "praesentation", titre: "Teil 1 — Präsentation / Exposé",
            consigne: "Développez un exposé parfaitement fluide et structuré sur le sujet imposé : « Hat das gedruckte Buch in Zeiten der Digitalisierung noch eine Zukunft? ». Incluez des nuances fines, des contre-arguments et des exemples pertinents.",
            points: ["Klar strukturierter, flüssiger Vortrag", "Feine Differenzierung und Gegenargumente", "Treffende Beispiele und gehobenes Register"]
          },
          {
            id: "c2-eo2", type: "diskussion", titre: "Teil 2 — Débat et entretien",
            consigne: "Débat : les examinateurs contredisent vos positions par des questions pointues (ex. : « Ist Nostalgie nicht ein schwaches Argument? », « Übersehen Sie nicht die ökologischen Kosten von Papier? »). Défendez votre point de vue avec répartie, expressions idiomatiques et registre adapté.",
            points: ["Schlagfertig argumentieren und kontern", "Idiomatische, natürliche Ausdrucksweise", "Register situativ und souverän anpassen"]
          }
        ]
      }
    }
  };
})();
