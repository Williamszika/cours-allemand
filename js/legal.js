/* legal.js - Pages legales de la mini-app (Impressum, Datenschutz, AGB, Widerruf).
   Textes en allemand (langue de reference juridique, DE). Contenu marque
   "loc-keep" => non auto-traduit. Les [CROCHETS] sont a completer par l'exploitant.
   NB : modeles a faire relire par un professionnel du droit. */
window.Legal = (function () {
  var STAND = "[DATUM EINTRAGEN]";
  var BETREIBER = "[NAME / FIRMA]";

  function box(html) { var d = document.createElement("section"); d.className = "lesson-section loc-keep"; d.innerHTML = html; return d; }

  var IMPRESSUM =
    "<h1>Impressum</h1>" +
    "<p>Angaben gem&auml;&szlig; &sect; 5 DDG (Digitale-Dienste-Gesetz):</p>" +
    "<p><strong>" + BETREIBER + "</strong><br>[STRASSE UND HAUSNUMMER]<br>[PLZ ORT]<br>[LAND]</p>" +
    "<p><strong>Kontakt</strong><br>E-Mail: [E-MAIL]<br>Telefon: [TELEFON, optional]</p>" +
    "<p>Verantwortlich f&uuml;r den Inhalt gem&auml;&szlig; &sect; 18 Abs. 2 MStV:<br>" + BETREIBER + ", Anschrift wie oben.</p>" +
    "<p>[Falls umsatzsteuerpflichtig: Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27a UStG: [USt-IdNr.]]</p>" +
    "<p><strong>EU-Streitschlichtung</strong><br>Plattform der EU-Kommission zur Online-Streitbeilegung (OS): " +
    "<a href=\"https://ec.europa.eu/consumers/odr\" target=\"_blank\" rel=\"noopener\">https://ec.europa.eu/consumers/odr</a>.<br>" +
    "Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>";

  var DATENSCHUTZ =
    "<h1>Datenschutzerkl&auml;rung</h1>" +
    "<p>Stand: " + STAND + ". Diese App (Telegram Mini-App zum Deutschlernen) verarbeitet personenbezogene Daten gem&auml;&szlig; DSGVO.</p>" +
    "<h2>1. Verantwortlicher</h2>" +
    "<p>" + BETREIBER + ", [ANSCHRIFT], E-Mail: [E-MAIL]. (Siehe auch Impressum.)</p>" +
    "<h2>2. Welche Daten wir verarbeiten</h2>" +
    "<ul>" +
    "<li><strong>Telegram-Konto</strong>: Telegram-ID, Vorname, ggf. Benutzername und Sprachcode (von Telegram beim &Ouml;ffnen &uuml;bermittelt).</li>" +
    "<li><strong>Lerndaten</strong>: gew&auml;hltes Niveau, Lernfortschritt (&Uuml;bungen, Tests, Serie/Streak, Lernzeit), Einstellungen (Sprache, Erinnerungen).</li>" +
    "<li><strong>KI-Tutor</strong>: Inhalt deiner Nachrichten an den Tutor und dessen Antworten werden gespeichert, um das Gespr&auml;ch fortzusetzen (begrenzter Verlauf).</li>" +
    "<li><strong>Sprachaufnahmen</strong>: Wenn du das Mikrofon nutzt, wird deine Aufnahme zur Transkription verarbeitet. Sie wird nicht dauerhaft gespeichert; nur der transkribierte Text geht in den Gespr&auml;chsverlauf.</li>" +
    "<li><strong>Einladungen</strong>: ID des werbenden Nutzers (Referral), falls vorhanden.</li>" +
    "</ul>" +
    "<h2>3. Zwecke und Rechtsgrundlagen</h2>" +
    "<p>Bereitstellung des Lerndienstes und Speicherung deines Fortschritts: Art. 6 Abs. 1 lit. b DSGVO (Nutzungsverh&auml;ltnis). Erinnerungen/Benachrichtigungen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, jederzeit widerrufbar). Verbesserung und Sicherheit des Dienstes: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>" +
    "<h2>4. Empf&auml;nger / Auftragsverarbeiter</h2>" +
    "<ul>" +
    "<li><strong>Telegram</strong> (Plattform, Konto und Nachrichten).</li>" +
    "<li><strong>KI-Anbieter</strong> (Anthropic) zur Erzeugung der Tutor-Antworten.</li>" +
    "<li><strong>Sprachdienst</strong> (ElevenLabs) f&uuml;r Sprachausgabe und Transkription.</li>" +
    "<li><strong>&Uuml;bersetzung der Oberfl&auml;che</strong> (Google / MyMemory), nur bei automatischer &Uuml;bersetzung von Texten.</li>" +
    "<li><strong>Hosting-Anbieter</strong> des Servers.</li>" +
    "</ul>" +
    "<p>Einige dieser Anbieter k&ouml;nnen Daten in Drittl&auml;ndern (z.&nbsp;B. USA) verarbeiten. Die &Uuml;bermittlung st&uuml;tzt sich auf geeignete Garantien (z.&nbsp;B. EU-Standardvertragsklauseln).</p>" +
    "<h2>5. Speicherdauer</h2>" +
    "<p>Wir speichern deine Daten, solange dein Konto aktiv genutzt wird. Du kannst jederzeit die L&ouml;schung verlangen; bei l&auml;ngerer Inaktivit&auml;t werden Daten gel&ouml;scht.</p>" +
    "<h2>6. Deine Rechte</h2>" +
    "<p>Du hast das Recht auf Auskunft (Art. 15), Berichtigung (16), L&ouml;schung (17), Einschr&auml;nkung (18), Daten&uuml;bertragbarkeit (20) und Widerspruch (21) sowie auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3). Anfragen an: [E-MAIL]. Du hast zudem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbeh&ouml;rde (Art. 77).</p>" +
    "<h2>7. L&ouml;schung deines Kontos</h2>" +
    "<p>Auf Anfrage l&ouml;schen wir dein Konto und die zugeh&ouml;rigen Daten vollst&auml;ndig. Schreibe dazu an [E-MAIL].</p>";

  var AGB =
    "<h1>Allgemeine Gesch&auml;ftsbedingungen (AGB)</h1>" +
    "<p>Stand: " + STAND + ".</p>" +
    "<h2>1. Geltungsbereich &amp; Anbieter</h2>" +
    "<p>Diese AGB gelten f&uuml;r die Nutzung der Deutschlern-App von " + BETREIBER + " (nachfolgend &bdquo;Anbieter&ldquo;).</p>" +
    "<h2>2. Leistung</h2>" +
    "<p>Der Anbieter stellt eine Lern-App f&uuml;r die deutsche Sprache (Kurse, &Uuml;bungen, KI-Sprachtutor) bereit. Die Nutzung ist derzeit <strong>kostenlos</strong>. Ein Anspruch auf st&auml;ndige Verf&uuml;gbarkeit besteht nicht; Funktionen k&ouml;nnen sich &auml;ndern.</p>" +
    "<h2>3. Kein medizinischer oder rechtlicher Rat</h2>" +
    "<p>Der Bereich &bdquo;Pflege&ldquo; dient ausschlie&szlig;lich dem <strong>Sprachtraining und der Pr&uuml;fungsvorbereitung</strong>. Es werden keine medizinischen oder pflegerischen Ratschl&auml;ge, Diagnosen oder Behandlungsempfehlungen gegeben. Die Inhalte ersetzen keine fachliche Beratung.</p>" +
    "<h2>4. KI-Inhalte</h2>" +
    "<p>Antworten des KI-Tutors k&ouml;nnen Fehler enthalten und sind ohne Gew&auml;hr. Bitte pr&uuml;fe wichtige Informationen eigenst&auml;ndig.</p>" +
    "<h2>5. Pflichten der Nutzer</h2>" +
    "<p>Keine missbr&auml;uchliche Nutzung, keine rechtswidrigen Inhalte. Der Anbieter kann Konten bei Versto&szlig; sperren oder l&ouml;schen.</p>" +
    "<h2>6. Haftung</h2>" +
    "<p>Der Anbieter haftet nur f&uuml;r Vorsatz und grobe Fahrl&auml;ssigkeit sowie nach zwingenden gesetzlichen Vorschriften.</p>" +
    "<h2>7. &Auml;nderungen &amp; anwendbares Recht</h2>" +
    "<p>Der Anbieter kann diese AGB anpassen. Es gilt das Recht der Bundesrepublik Deutschland, soweit gesetzlich zul&auml;ssig.</p>";

  var WIDERRUF =
    "<h1>Widerrufsrecht</h1>" +
    "<p>Die App ist derzeit <strong>kostenlos</strong>; es findet kein kostenpflichtiger Kauf statt, daher entsteht aktuell kein Widerrufsfall.</p>" +
    "<p>F&uuml;r zuk&uuml;nftige kostenpflichtige Angebote gilt: Verbraucher haben grunds&auml;tzlich ein <strong>14-t&auml;giges Widerrufsrecht</strong>. Bei digitalen Inhalten, die sofort bereitgestellt werden, erlischt das Widerrufsrecht, wenn du ausdr&uuml;cklich zustimmst, dass mit der Ausf&uuml;hrung vor Ablauf der Widerrufsfrist begonnen wird, und best&auml;tigst, dein Widerrufsrecht dadurch zu verlieren (&sect; 356 Abs. 5 BGB).</p>" +
    "<p>Widerruf an: [E-MAIL]. [Vollst&auml;ndige Widerrufsbelehrung + Muster-Widerrufsformular werden bei Einf&uuml;hrung von Bezahlfunktionen erg&auml;nzt.]</p>";

  var SECTIONS = { impressum: IMPRESSUM, datenschutz: DATENSCHUTZ, agb: AGB, widerruf: WIDERRUF };

  function page(which) {
    which = which || "legal";
    var frag = document.createDocumentFragment();
    var top = document.createElement("div"); top.className = "lesson-top";
    top.innerHTML = '<a class="btn-link" href="#/menu">&larr; Menu</a><span class="lesson-top-mod">&#9878; Rechtliches</span>';
    frag.appendChild(top);
    if (SECTIONS[which]) { frag.appendChild(box(SECTIONS[which])); }
    else {
      frag.appendChild(box(
        "<h1>Rechtliches</h1><p>Rechtliche Hinweise dieser App:</p>" +
        '<p><a class="btn-link" href="#/impressum">Impressum</a></p>' +
        '<p><a class="btn-link" href="#/datenschutz">Datenschutzerkl&auml;rung</a></p>' +
        '<p><a class="btn-link" href="#/agb">AGB</a></p>' +
        '<p><a class="btn-link" href="#/widerruf">Widerrufsrecht</a></p>'));
    }
    return frag;
  }
  return { page: page };
})();
