/* =====================================================================
   comprehension.js — Exercices de COMPRÉHENSION (basés sur le dialogue)
   2 par leçon : une question de contenu + un « vrai / faux ».
   Marqués cat:"comp" pour être regroupés sous « Exercices de
   compréhension » (avant les exercices approfondis).
   Fusionnés dans les leçons par data/cours.js.
   ===================================================================== */
(function () {
  const VF = ["Richtig (vrai)", "Falsch (faux)"];
  function contenu(question, options, correct, explication) {
    return { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue — choisissez la bonne réponse.", question, options, correct, explication };
  }
  function vraiFaux(question, correct, explication) {
    return { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue — vrai ou faux ?", question, options: VF, correct, explication };
  }

  window.COMPREHENSION = {
    l01: [
      contenu("Woher kommt Anna?", ["Aus Österreich", "Aus Frankreich", "Aus Berlin"], 0, "Anna sagt: « Ich komme aus Österreich, aus Wien. »"),
      vraiFaux("Tom wohnt jetzt in Berlin.", 0, "Tom: « Ich wohne jetzt in Berlin. »")
    ],
    l02: [
      contenu("Wie heißt der Mann?", ["Schäfer", "Schneider", "Schreiber"], 0, "Er buchstabiert: S-C-H-Ä-F-E-R."),
      vraiFaux("Der Mann buchstabiert seinen Namen.", 0, "Die Sekretärin sagt: « Buchstabieren Sie bitte! »")
    ],
    l03: [
      contenu("Welche Sprachen spricht Yusuf?", ["Türkisch, Deutsch und ein bisschen Englisch", "Nur Spanisch", "Französisch und Italienisch"], 0, "Yusuf: « Ich spreche Türkisch, Deutsch und ein bisschen Englisch. »"),
      vraiFaux("Maria kommt aus Mexiko.", 0, "Maria: « Aus Mexiko. »")
    ],
    l04: [
      contenu("Was macht Paul gern?", ["Gitarre spielen und Musik hören", "Kochen", "Tanzen"], 0, "Paul: « Ich spiele gern Gitarre und höre Musik. »"),
      vraiFaux("Lena kocht sehr gern.", 0, "Lena: « ich koche sehr gern. »")
    ],
    l05: [
      contenu("Was ist Herr Bauer von Beruf?", ["Ingenieur", "Arzt", "Lehrer"], 0, "Herr Bauer: « Ich bin Ingenieur. »"),
      vraiFaux("Frau Weber arbeitet im Krankenhaus.", 0, "Frau Weber: « Ich arbeite im Krankenhaus. »")
    ],
    l06: [
      contenu("Was macht Jan am Abend?", ["Er sieht fern oder ruft Freunde an", "Er arbeitet", "Er kauft ein"], 0, "Jan: « Am Abend sehe ich fern oder ich rufe Freunde an. »"),
      vraiFaux("Jan steht am Samstag früh auf.", 1, "Jan steht SPÄT auf: « Ich stehe spät auf. »")
    ],
    l07: [
      contenu("Was kostet das Zimmer mit Frühstück?", ["90 Euro", "19 Euro", "70 Euro"], 0, "Die Rezeption: « Das macht 90 Euro mit Frühstück. »"),
      vraiFaux("Es gibt kostenloses WLAN im Hotel.", 0, "« Ja, es gibt kostenloses WLAN. »")
    ],
    l08: [
      contenu("Wo ist der Bahnhof?", ["Neben der Post", "Neben der Bank", "Im Hotel"], 0, "« Der Bahnhof ist neben der Post. »"),
      vraiFaux("Der Bahnhof ist sehr weit.", 1, "Es sind nur fünf Minuten: « fünf Minuten »."),
    ],
    l09: [
      contenu("Was möchte der Gast trinken?", ["Ein Wasser", "Ein Bier", "Einen Wein"], 0, "Der Gast: « Ein Wasser, bitte. »"),
      vraiFaux("Der Gast trinkt keinen Alkohol.", 0, "« Ich trinke keinen Alkohol. »")
    ],
    l10: [
      contenu("Wann wacht Frau Lang auf?", ["Um sechs Uhr", "Um acht Uhr", "Um zehn Uhr"], 0, "« Zuerst wache ich um sechs auf. »"),
      vraiFaux("Am Abend kocht Frau Lang.", 0, "« Am Abend koche ich und dann sehe ich fern. »")
    ],
    l11: [
      contenu("Was muss Nora heute machen?", ["Drei Berichte schreiben", "Eine Reise buchen", "Einkaufen"], 0, "Nora: « Ich muss heute drei Berichte schreiben. »"),
      vraiFaux("Tim hilft Nora.", 0, "Tim: « Kann ich dir helfen? » — « Kannst du die E-Mails beantworten? »")
    ],
    l12: [
      contenu("Was ist Lisas Problem?", ["Der Computer funktioniert nicht", "Das Telefon ist kaputt", "Sie ist krank"], 0, "Lisa: « Mein Computer funktioniert nicht! »"),
      vraiFaux("Man speichert mit Strg + S.", 0, "Der IT-Mann: « Drücken Sie Strg + S. »")
    ],
    l13: [
      contenu("Wann passt der Termin?", ["Am Dienstag um 16 Uhr", "Am Montag um 10 Uhr", "Am Freitag"], 0, "« Und am Dienstag um 16 Uhr? — Ja, das passt! »"),
      vraiFaux("Am Montag muss Herr Kurt arbeiten.", 0, "« Am Montag muss ich arbeiten. »")
    ],
    l14: [
      contenu("Wie ist das Wetter in Hamburg?", ["Es regnet und es ist kalt", "Sonnig und warm", "Es schneit"], 0, "Ben: « Es regnet und es ist kalt. »"),
      vraiFaux("Bei Mia sind es 22 Grad.", 0, "Mia: « 22 Grad! Ein schöner Frühlingstag. »")
    ],
    l15: [
      contenu("Wohin ist Lars gereist?", ["Nach Italien", "Nach Spanien", "Nach Frankreich"], 0, "Lars: « Ich bin nach Italien geflogen. »"),
      vraiFaux("Lars hat Rom besucht.", 0, "« Ich habe Rom besucht und viel Pizza gegessen! »")
    ],
    l16: [
      contenu("Wohin fährt die Reisende?", ["Nach München", "Nach Stuttgart", "Nach Berlin"], 0, "« Eine Fahrkarte nach München, bitte. »"),
      vraiFaux("Der Zug hat Verspätung.", 1, "Der Zug ist pünktlich: « Nein, er ist pünktlich. »")
    ],
    l17: [
      contenu("Wo ist die Küche?", ["Neben dem Bad", "Im Wohnzimmer", "Neben dem Balkon"], 0, "Der Makler: « Neben dem Bad. »"),
      vraiFaux("Die Wohnung hat einen Balkon.", 0, "« Es gibt auch einen Balkon. »")
    ],
    l18: [
      contenu("Was hat der Patient?", ["Eine Erkältung", "Bauchschmerzen", "Nichts"], 0, "Die Ärztin: « Sie haben eine Erkältung. »"),
      vraiFaux("Der Patient soll viel Tee trinken.", 0, "« Trinken Sie viel Tee und nehmen Sie diese Tabletten. »")
    ],
    l19: [
      contenu("Warum ist Herr Berg heute zu spät?", ["Wegen eines Staus", "Weil er krank ist", "Wegen des Wetters"], 0, "« Ich bin zu spät, weil es einen Stau gab. »"),
      vraiFaux("Gestern hat Herr Berg verschlafen.", 0, "« Gestern habe ich verschlafen. »")
    ]
  };
})();
