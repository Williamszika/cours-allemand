/* =====================================================================
   telc-c1.js — Examen blanc telc Deutsch C1, format officiel.
   Même moteur telc (deux parties indépendantes, bénéfice gardé, correction
   différée 24 h), mais BARÈME PROPRE au C1 :
     • Épreuve écrite — /166, réussite ≥ 99 (≈ 3 h 40)
         Leseverstehen 48 + Sprachbausteine 22 + Hörverstehen 48
         + Schriftlicher Ausdruck 48 (texte argumenté ~350 mots, noté IA)
     • Épreuve orale — /48, réussite ≥ 29 (Präsentation, Anschlussfragen,
         Diskussion ; notée IA)
   Niveau C1 : textes longs et abstraits, idiomes, langue académique.
   Adaptations app : pas de pause forcée (rythme libre) ; Leseverstehen +
   Sprachbausteine partagent un même minuteur ; questions à choix multiples
   (auto-corrigées) ; oral en solo.
   ===================================================================== */
(function () {
  var RF = ["Richtig (vrai)", "Falsch (faux)"];
  window.TELC_C1 = {
    exam: "c1", code: "C1", titre: "Examen telc Deutsch C1",
    sousTitre: "Examen blanc complet, format officiel · écrit /166 + oral /48",
    seuilPct: 60,
    parts: {

      /* =========================== ÉPREUVE ÉCRITE ===================== */
      schriftlich: {
        key: "c1-schriftlich", titre: "Épreuve écrite", icone: "📝", sur: 166, seuil: 99,
        intro: "Épreuve collective d'environ 3 h 40. Textes longs et abstraits. Aucune correction ne s'affiche : vous composez puis remettez votre copie (corrigée sous 24 h).",
        durees: { leseSb: (90 + 22) * 60, hoeren: 40 * 60, schreiben: 70 * 60 },

        lesen: {
          sur: 48, titre: "Leseverstehen", icone: "📖",
          intro: "Lecture globale, sélective et détaillée de textes complexes, + reconstruction de texte.",
          blocs: [
            {
              titre: "Teil 1 — Ein abstrakter Text",
              texte: "Die Illusion der ständigen Erreichbarkeit\n\nIn einer Gesellschaft, die Produktivität zum obersten Wert erhoben hat, gilt ständige Erreichbarkeit längst als Selbstverständlichkeit. Wer nicht sofort auf eine Nachricht reagiert, gerät schnell in den Verdacht, nachlässig zu sein. Doch Studien legen nahe, dass gerade diese permanente Verfügbarkeit die Konzentrationsfähigkeit untergräbt und langfristig zu Erschöpfung führt. Paradoxerweise sinkt die tatsächliche Leistung, je mehr wir versuchen, allen Anforderungen gleichzeitig gerecht zu werden. Manche Unternehmen ziehen daraus bereits Konsequenzen und führen bewusst Phasen der Nichterreichbarkeit ein.",
              questions: [
                { q: "Was gilt laut Text in der heutigen Gesellschaft als selbstverständlich?", options: ["Dass man sofort erreichbar ist", "Dass man langsam arbeitet", "Dass man oft Pausen macht"], correct: 0 },
                { q: "Welche paradoxe Folge beschreibt der Text?", options: ["Die Leistung steigt mit mehr Erreichbarkeit", "Die Leistung sinkt, je mehr man allen gerecht werden will", "Erreichbarkeit hat keine Folgen"], correct: 1 },
                { q: "Wie reagieren manche Unternehmen?", options: ["Sie verlangen mehr Erreichbarkeit", "Sie führen Phasen der Nichterreichbarkeit ein", "Sie entlassen Mitarbeiter"], correct: 1 }
              ]
            },
            {
              titre: "Teil 2 — Textrekonstruktion (passende Sätze einsetzen)",
              texte: "Das Ehrenamt im Wandel\n\nFreiwilliges Engagement hat in Deutschland eine lange Tradition. ___[1]___ Heute jedoch verändert sich die Form dieses Engagements grundlegend. Viele Menschen wollen sich nicht mehr langfristig an einen Verein binden. ___[2]___ Stattdessen bevorzugen sie projektbezogene, zeitlich begrenzte Einsätze. ___[3]___ Für die Organisationen bedeutet dies, dass sie flexibler werden müssen.\n\nSätze zur Auswahl:\nA) Diese Entwicklung stellt traditionelle Vereine vor große Herausforderungen.\nB) Schon im 19. Jahrhundert organisierten sich Bürger in Vereinen und Initiativen.\nC) Eine feste wöchentliche Verpflichtung passt oft nicht mehr in ihren Alltag.\nD) Der Staat finanziert das Ehrenamt heute vollständig.",
              questions: [
                { q: "Welcher Satz passt in Lücke [1]?", options: ["Satz A", "Satz B", "Satz C"], correct: 1 },
                { q: "Welcher Satz passt in Lücke [2]?", options: ["Satz C", "Satz A", "Satz D"], correct: 0 },
                { q: "Welcher Satz passt in Lücke [3]?", options: ["Satz D", "Satz A", "Satz B"], correct: 1 }
              ]
            },
            {
              titre: "Teil 3 — Ein wissenschaftsjournalistischer Text",
              texte: "Künstliche Intelligenz in der Medizin\n\nAlgorithmen können heute Röntgenbilder mit einer Genauigkeit auswerten, die der erfahrener Fachärzte ebenbürtig ist. Befürworter sehen darin die Chance, Diagnosen zu beschleunigen und menschliche Fehler zu reduzieren. Kritiker hingegen warnen davor, die Verantwortung an Maschinen zu delegieren, deren Entscheidungswege oft nicht nachvollziehbar sind. Entscheidend wird sein, ob es gelingt, die Stärken beider Seiten – die Präzision der Maschine und das Urteilsvermögen des Menschen – sinnvoll zu verbinden.",
              questions: [
                { q: "Was können Algorithmen laut Text bereits leisten?", options: ["Röntgenbilder sehr genau auswerten", "Patienten selbstständig operieren", "Medikamente herstellen"], correct: 0 },
                { q: "Was kritisieren die Gegner vor allem?", options: ["Die hohe Genauigkeit", "Dass die Entscheidungswege oft nicht nachvollziehbar sind", "Die niedrigen Kosten"], correct: 1 },
                { q: "Was wird laut Text entscheidend sein?", options: ["Maschinen ganz zu verbieten", "Die Stärken von Mensch und Maschine zu verbinden", "Nur noch Menschen entscheiden zu lassen"], correct: 1 }
              ]
            }
          ]
        },

        sprachbausteine: {
          sur: 22, titre: "Sprachbausteine", icone: "🧩",
          intro: "Structures et lexique avancés : idiomes, prépositions régies, syntaxe complexe.",
          questions: [
            { q: "Er ließ sich durch nichts ___ seinem Vorhaben abbringen.", options: ["von", "aus", "über"], correct: 0 },
            { q: "___ aller Schwierigkeiten hielt sie an ihrem Plan fest.", options: ["Wegen", "Trotz", "Während"], correct: 1 },
            { q: "Je komplexer das Problem, ___ schwieriger ist die Lösung.", options: ["also", "sowie", "desto"], correct: 2 },
            { q: "Die geplante Maßnahme stieß ___ heftigen Widerstand.", options: ["auf", "an", "über"], correct: 0 },
            { q: "___ man auch argumentiert, es gibt stets Gegenstimmen.", options: ["Wobei", "Wie", "Wenngleich"], correct: 1 },
            { q: "Sie verfügt ___ umfangreiche internationale Erfahrung.", options: ["auf", "an", "über"], correct: 2 },
            { q: "Das ambitionierte Projekt scheiterte ___ mangelnder Finanzierung.", options: ["an", "auf", "über"], correct: 0 },
            { q: "Angesichts ___ Lage müssen rasch Entscheidungen fallen.", options: ["die angespannte", "der angespannten", "dem angespannten"], correct: 1 },
            { q: "Es handelt sich hierbei ___ ein äußerst komplexes Phänomen.", options: ["über", "um", "von"], correct: 1 },
            { q: "Seine Argumente waren ___ stichhaltig, dass niemand widersprach.", options: ["so", "auch", "kaum"], correct: 0 }
          ]
        },

        hoeren: {
          sur: 48, titre: "Hörverstehen", icone: "🎧",
          intro: "Conférences, interviews et débats complexes (2 écoutes max). Répondez Richtig / Falsch.",
          documents: [
            {
              titre: "Document 1 — Auszug aus einer Vorlesung",
              audio: "Meine Damen und Herren, willkommen zur heutigen Vorlesung. Wir beschäftigen uns mit dem Phänomen der sozialen Mobilität. Lange Zeit galt Bildung als der zentrale Schlüssel zum gesellschaftlichen Aufstieg. Neuere Studien zeichnen jedoch ein differenzierteres Bild: Zwar eröffnet Bildung Chancen, doch der soziale Hintergrund der Familie wirkt oft stärker nach, als wir lange angenommen haben.",
              questions: [
                { q: "Das Thema der Vorlesung ist die soziale Mobilität.", options: RF, correct: 0 },
                { q: "Laut neueren Studien ist Bildung der einzige Faktor für den Aufstieg.", options: RF, correct: 1 },
                { q: "Der familiäre Hintergrund spielt eine geringere Rolle als früher gedacht.", options: RF, correct: 1 }
              ]
            },
            {
              titre: "Document 2 — Ein Interview",
              audio: "Frau Professorin, viele behaupten, die Digitalisierung vernichte Arbeitsplätze. Teilen Sie diese Sorge? — Die Frage ist mir zu pauschal gestellt. Sicher fallen bestimmte Tätigkeiten weg, das lässt sich nicht leugnen. Gleichzeitig entstehen aber völlig neue Berufsfelder, die wir uns heute kaum vorstellen können. Entscheidend ist nicht, ob sich der Arbeitsmarkt wandelt, sondern wie wir diesen Wandel gestalten.",
              questions: [
                { q: "Die Professorin findet die Frage zu pauschal.", options: RF, correct: 0 },
                { q: "Sie bestreitet, dass bestimmte Tätigkeiten wegfallen.", options: RF, correct: 1 },
                { q: "Für sie ist entscheidend, wie man den Wandel gestaltet.", options: RF, correct: 0 }
              ]
            },
            {
              titre: "Document 3 — Eine kontroverse Debatte",
              audio: "Ich halte ein bedingungsloses Grundeinkommen für eine Utopie, die wir uns schlicht nicht leisten können. — Das ist ein verbreiteter Einwand, aber er greift zu kurz. Rechnet man bestehende Sozialleistungen gegen, sieht die Bilanz ganz anders aus. — Mag sein, doch Sie unterschätzen die psychologische Wirkung: Wer Geld ohne Gegenleistung erhält, verliert den Anreiz zu arbeiten. — Diese Annahme ist empirisch keineswegs belegt, im Gegenteil.",
              questions: [
                { q: "Die erste Person befürwortet das Grundeinkommen.", options: RF, correct: 1 },
                { q: "Die zweite Person verweist auf bestehende Sozialleistungen.", options: RF, correct: 0 },
                { q: "Laut der zweiten Person ist der Verlust des Arbeitsanreizes empirisch belegt.", options: RF, correct: 1 }
              ]
            }
          ]
        },

        schreiben: {
          sur: 48, titre: "Schriftlicher Ausdruck", icone: "✍️",
          intro: "Texte argumentatif structuré (~350 mots), au choix. Corrigé par l'IA (rigueur et langue académique attendues).",
          tache: {
            id: "c1-argument", titre: "Argumentativer Text (ca. 350 Wörter)", minMots: 300,
            consigne: "Wählen Sie EIN Thema und verfassen Sie einen strukturierten argumentativen Text (ca. 350 Wörter), in präziser, wissenschaftsnaher Sprache.\n\nThema 1: „Bildung sollte vollständig kostenlos sein – von der Kita bis zur Universität.“ Nehmen Sie begründet Stellung.\n\nThema 2: Statistiken zeigen, dass immer mehr junge Menschen in die Großstädte ziehen. Erörtern Sie Ursachen und Folgen dieser Entwicklung und schlagen Sie Lösungen vor.",
            leitpunkte: [
              "Einleitung mit klarer These",
              "Strukturierte Argumentation (These – Beleg – Beispiel)",
              "Gegenargumente abwägen und widerlegen",
              "Begründete Schlussfolgerung",
              "Präziser, akademischer Stil (Wissenschaftssprache)"
            ]
          }
        }
      },

      /* =========================== ÉPREUVE ORALE ===================== */
      muendlich: {
        key: "c1-muendlich", titre: "Épreuve orale", icone: "🗣️", sur: 48, seuil: 29,
        prep: 20 * 60, duree: 18 * 60,
        intro: "Au telc C1, l'oral se passe en binôme (16–20 min) avec 20 min de préparation. Ici, en mode solo : préparez, puis enregistrez (ou écrivez) vos 3 interventions. L'IA évalue le tout sur 48 (exigences C1 : fluidité, structure, nuance, langue soutenue).",
        taches: [
          {
            id: "c1-eo1", type: "praesentation", titre: "Teil 1 — Präsentation (≈ 3 min)",
            consigne: "Faites un exposé structuré (≈ 3 min) sur le sujet imposé : « Les défis du télétravail pour les individus et les entreprises ». Introduction, 2-3 arguments développés, conclusion.",
            points: ["Klare Gliederung (Einleitung, Hauptteil, Schluss)", "Differenzierte Argumente mit Beispielen", "Akademischer Wortschatz, flüssiger Vortrag"]
          },
          {
            id: "c1-eo2", type: "anschlussfragen", titre: "Teil 2 — Anschlussfragen",
            consigne: "Répondez à des questions approfondies sur votre exposé (ex. : « Welche Rolle spielt die Führungskultur? », « Wie lässt sich Vereinsamung im Homeoffice vermeiden? ») et défendez votre point de vue.",
            points: ["Flexibel auf Nachfragen reagieren", "Standpunkt verteidigen und präzisieren", "Spontan und flüssig formulieren"]
          },
          {
            id: "c1-eo3", type: "diskussion", titre: "Teil 3 — Diskussion",
            consigne: "Débat contradictoire sur la citation : « Künstliche Intelligenz wird den Menschen in den meisten Berufen ersetzen. » Argumentez, nuancez, concédez et réfutez de façon fluide.",
            points: ["Argumentieren und differenzieren", "Zugeständnisse machen (Zwar…, aber…)", "Gegenargumente souverän widerlegen"]
          }
        ]
      }
    }
  };
})();
