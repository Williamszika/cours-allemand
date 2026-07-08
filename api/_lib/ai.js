/* =====================================================================
   api/_lib/ai.js — Tuteur IA (Anthropic) + moteur d'examens différés.
   Porté depuis server/tts-proxy.js ; stockage rendu asynchrone (Upstash).
   ===================================================================== */
const path = require("path");
const fs = require("fs");
const store = require("./store");
const tg = require("./tg");
const { clampN } = require("./util");

const ANTHKEY = (process.env.ANTHROPIC_API_KEY || "").trim();
const CHATMODEL = (process.env.ANTHROPIC_MODEL || "claude-haiku-4-5-20251001").trim();
const GRADE_DELAY = Math.max(0, parseInt(process.env.EXAM_DELAY_MS || String(24 * 3600 * 1000), 10) || 24 * 3600 * 1000);
const EXAM_ELIM = 5;
const EXAM_SCAN_MAX = parseInt(process.env.EXAM_SCAN_MAX || "20", 10) || 20;

async function anthropic(system, messages) {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": ANTHKEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: CHATMODEL, max_tokens: 1024, system: system, messages: messages }),
  });
  const buf = Buffer.from(await r.arrayBuffer());
  return { status: r.status, buf: buf };
}

function sysPrompt(niveau, niveauParle, langue, mode, oral, unclear) {
  const n = String(niveau || "A1").toUpperCase(), np = String(niveauParle || niveau || "A1").toUpperCase(), lg = String(langue || "fr"), m = String(mode || "");
  var ORDER2 = ["A1", "A2", "B1", "B2", "C1", "C2"];
  var LN = { fr: "francais", en: "anglais", de: "allemand", ar: "arabe", tr: "turc", ru: "russe", uk: "ukrainien", fa: "persan", es: "espagnol", it: "italien", pt: "portugais", pl: "polonais", ro: "roumain", nl: "neerlandais" };
  var lgName = LN[lg] || lg;
  var immDE = ORDER2.indexOf(n) >= ORDER2.indexOf("B2");
  var LANGRULE = immDE ? "REGLE DE LANGUE ABSOLUE (prioritaire sur toute autre instruction): ecris 100% de ta reponse EXCLUSIVEMENT en allemand de niveau " + np + "; n'utilise AUCUNE autre langue (ni francais ni anglais) et n'ajoute aucune traduction. Meme si des messages precedents etaient dans une autre langue, reponds maintenant en allemand. " : "REGLE DE LANGUE ABSOLUE (prioritaire sur toute autre instruction): ta SEULE langue de communication est le " + lgName + " (langue choisie par l'apprenant, code " + lg + "). Ecris EN " + lgName + " absolument TOUT: titres, accroches, explications, consignes, corrections, encouragements ET toute traduction ou clarification, y compris entre parentheses. Il est ABSOLUMENT INTERDIT d'ecrire la moindre phrase, glose ou traduction en francais si le " + lgName + " n'est pas le francais. SEULS les mots et phrases allemands a apprendre restent en allemand simple (niveau " + np + "); si tu les traduis ou les expliques, c'est en " + lgName + ", JAMAIS en francais. Meme si les messages precedents de la conversation etaient en francais, IGNORE cela et ecris desormais en " + lgName + ". ";
  if (m === "correction") return "Tu es un correcteur d'allemand bienveillant et precis. L'apprenant a le niveau " + n + ". " + LANGRULE + "Sois concis et encourageant. On te donne une consigne et la production de l'apprenant. Donne EXACTEMENT ces 4 sections, titres en gras: **✅ Ce qui est bien** (1-2 points concrets); **✏️ A corriger** (liste les fautes importantes sous la forme: forme fautive -> forme correcte + mini-explication, 5 maximum); **🚀 Pour aller plus loin** (1 suggestion adaptee au niveau " + n + "); **📊 Note suggeree : X/100**. Ne reecris pas tout le texte, va a l'essentiel.";
  if (m === "examinateur") return "Tu es un EXAMINATEUR de l'epreuve orale d'un examen officiel d'allemand (niveau " + np + "). Tu animes une partie de discussion, de jeu de role ou de debat. Ton role: poser des questions, jouer ton personnage (serveur, interlocuteur, opposant...), reagir, relancer et CONTREDIRE pour faire parler le candidat. REGLE ABSOLUE - AUCUNE CORRECTION: tu ne corriges JAMAIS les fautes, tu ne donnes AUCUN retour sur la justesse de la langue, tu ne felicites pas, tu n'expliques rien, tu ne donnes aucun conseil, tu ne reveles aucune note. Tu restes strictement dans ton role d'examinateur. Parle UNIQUEMENT en allemand de niveau " + np + ", phrases courtes et naturelles, UNE seule question ou relance a la fois. Ne sors jamais de ton role.";
  let s = "Tu es un tuteur d'allemand bienveillant et patient. L'apprenant a le niveau " + n + ". ";
  s += LANGRULE;
  s += "Corrige gentiment les fautes (forme correcte + courte explication). Encourage, reste concis (style conversation), et termine souvent par une petite question pour faire parler l'apprenant. ";
  if (m === "pflege") s += "CONTEXTE SPECIAL: allemand pour les soins infirmiers (Deutsch fuer die Pflege). Propose des jeux de role realistes (patient, collegue infirmier, medecin), enseigne le vocabulaire medical et les tournures professionnelles, et la facon de documenter/communiquer en milieu de soins. CADRE LEGAL: tu fais UNIQUEMENT du Sprachtraining et de la preparation a l'examen (Pruefungsvorbereitung); tu n'es PAS un professionnel de sante; ne donne JAMAIS de conseil medical, de diagnostic, de dosage, de traitement ni de protocole de soin applicable a un vrai patient; si on te demande un avis medical reel, rappelle gentiment que tu es un outil d'apprentissage de la langue et oriente vers un professionnel de sante ou un medecin. ";
  if (m === "grammaire") { s += "MODE DRILL GRAMMAIRE: tu es un coach de grammaire interactif. Si aucun point n'est encore choisi, demande a l'apprenant quel point il veut travailler ou propose-en un adapte a son niveau (prepositions temporelles, cas et declinaisons, Konjunktiv, ordre des mots, verbes a prepositions...). Une fois le point choisi: rappelle la regle en 2-3 phrases simples dans sa langue, puis enchaine des EXERCICES UN PAR UN (phrase a completer, choix multiple, ou corrige l'erreur). Attends sa reponse, corrige tout de suite et brievement, felicite, puis propose le suivant un peu plus difficile. Apres environ 5 exercices, fais un mini-bilan et propose de continuer ou de changer de point. Reste concis et interactif. "; }
  else if (m === "expression" || m === "prononciation") { s += "MODE EXPRESSION ET PRONONCIATION: tu es un coach d'expression orale et de confiance; l'apprenant a valide A1+A2 et STRESSE de parler. PARLE-LUI EN ALLEMAND de niveau " + np + " (un cran sous le sien, pour qu'il comprenne), MAIS pousse-le a PRODUIRE au niveau " + n + ", c'est-a-dire a utiliser SA grammaire et des phrases plus riches de son niveau pour s'exprimer librement et communiquer sans souci. Deroulement: propose un petit defi ou sujet a sa portee et fais-le parler AU MICRO, de plus en plus longtemps. A chaque reponse (transcrite de sa voix): 1) retour CONFIANCE et COMMUNICATION d'abord (felicite-le d'avoir ose, dis si le message passe), 2) reformule sa phrase en mieux + 1 ou 2 corrections en douceur, 3) PRONONCIATION: si des mots sont signales peu clairs, dis lesquels et donne un conseil concret pour le son allemand concerne (u-Umlaut, o-Umlaut, ch doux/dur, r, sch, z, w...), 4) invite-le a redire la phrase en visant le niveau " + n + ", 5) propose le defi suivant un peu plus ambitieux (se presenter, donner un avis, raconter, mini-presentation, entretien, parler devant un public). Donne des amorces utiles (Also..., Ich denke..., Meiner Meinung nach...). Reste chaleureux et bref. "; }
  else if (m === "conversation") { s += "MODE CONVERSATION LIBRE: tu es avant tout un partenaire de conversation chaleureux. Tiens une vraie discussion du quotidien (loisirs, voyages, cuisine, projets, souvenirs, actualite legere...) adaptee a son niveau. Garde des reponses COURTES et naturelles, et fais TOUJOURS avancer le dialogue par une relance ou une petite question. Quand l'apprenant fait une faute, commence ta reponse par une mini-correction discrete sur UNE ligne au format '🔧 forme fautive -> forme correcte' (1 a 2 corrections maximum, l'essentiel), puis enchaine NATURELLEMENT la conversation sans le bloquer. S'il n'y a pas de faute notable, ne corrige pas et felicite-le brievement de temps en temps. Si l'apprenant ecrit dans sa langue, reponds en allemand simple et invite-le doucement a continuer en allemand. Objectif: le faire parler le plus possible, en confiance, comme un ami patient. "; }
  else if (m === "immersion") { s += "MODE IMMERSION (jeu de role): tu animes une mise en situation realiste du quotidien. Joue PLEINEMENT le ou les roles indiques par l'apprenant (serveur, medecin, vendeur, agent...) et RESTE dans le role. Parle en allemand a son niveau. Deroulement: 1) plante le decor en UNE phrase, 2) joue ta replique de personnage et invite l'apprenant a repondre, 3) avance la scene replique par replique jusqu'a une conclusion naturelle. S'il bloque, glisse une amorce utile entre parentheses (ex: '(Du kannst sagen: ...)'). Corrige seulement les fautes importantes, TRES brievement, sans casser l'immersion (format '🔧 forme fautive -> forme correcte'). A la fin de la scene, sors du role: felicitations + mini-bilan de 2-3 expressions cles a retenir, puis propose de rejouer ou de changer de scenario. Reste vivant, bref et encourageant. "; }
  else if (oral) { s += "MODE ORAL: l'apprenant s'ENTRAINE A PARLER; sa phrase vient d'etre transcrite de sa voix (il peut y avoir des hesitations ou des erreurs de transcription, ignore-les). Aide-le a s'exprimer: 1) reformule sa phrase de facon correcte et naturelle (niveau " + np + "), 2) une astuce courte pour mieux dire, 3) encourage-le chaleureusement car il STRESSE a l'oral, 4) propose une petite mise en situation ou une question simple pour qu'il continue a parler a voix haute. Sois bref, chaleureux, comme un coach de prise de parole. "; }
  if (Array.isArray(unclear) && unclear.length) s += "INDICE: ces mots ont ete mal compris a la transcription (donc probablement mal prononces): " + unclear.join(", ") + ". Concentre tes conseils de prononciation dessus. ";
  s += " RAPPEL FINAL - " + LANGRULE;
  return s;
}

/* ---- Recalcul serveur des scores auto (intégrité) ---- */
function normW(s) { return String(s == null ? "" : s).toLowerCase().replace(/[.,;:!?"«»()\[\]\/\\\-–—…]/g, " ").replace(/\s+/g, " ").trim(); }
function lcsScore(ref, got, sur) { var R = normW(ref).split(" ").filter(Boolean), G = normW(got).split(" ").filter(Boolean); if (!R.length) return 0; var n = R.length, m = G.length, dp = new Array(m + 1).fill(0); for (var i = 1; i <= n; i++) { var prev = 0; for (var j = 1; j <= m; j++) { var tmp = dp[j]; dp[j] = (R[i - 1] === G[j - 1]) ? prev + 1 : Math.max(dp[j], dp[j - 1]); prev = tmp; } } return Math.round(dp[m] / Math.max(n, m) * sur); }
function recQcm(items, sur) { if (!Array.isArray(items) || !items.length) return 0; var ok = 0; items.forEach(function (it) { if (it && it.selected === it.correct) ok++; }); return Math.round(ok / items.length * sur); }
function recDictee(d, sur) { if (!d || !d.texte) return 0; return lcsScore(d.texte, d.saisie, sur); }

function examGradeSys(kind, langue, sur, contexte) {
  var LN = { fr: "français", en: "anglais", de: "allemand", ar: "arabe", tr: "turc", ru: "russe", uk: "ukrainien", fa: "persan", es: "espagnol", it: "italien", pt: "portugais", pl: "polonais", ro: "roumain", nl: "néerlandais" };
  var lg = LN[String(langue || "fr")] || "français"; sur = sur || 25; var ctx = contexte || "DELF A2"; var niv = /B1/.test(ctx) ? "B1" : "A2";
  return "Tu es examinateur officiel du " + ctx + " d'allemand (CECRL, niveau " + niv + "). Tu evalues la PRODUCTION " + kind + " d'un candidat selon les descripteurs " + niv + " : respect de la consigne, capacite a informer/decrire/raconter/argumenter/interagir, etendue et correction du vocabulaire et de la grammaire de niveau " + niv + ", coherence et connecteurs. Tu notes l'ENSEMBLE de l'epreuve sur " + sur + " points. Sois juste mais bienveillant ; une production vide ou hors sujet recoit une note tres basse. Redige un bilan en " + lg + " : 2 a 4 phrases (points forts, puis 1 a 2 corrections utiles au format 'forme fautive -> forme correcte'). Puis, sur la TOUTE DERNIERE ligne, ecris EXACTEMENT au format : NOTE: X/" + sur + " (X = entier de 0 a " + sur + "). N'ecris rien apres cette ligne.";
}
function heuristicNote(items, sur) { sur = sur || 25; var w = 0; (items || []).forEach(function (t) { var s = String(t.production || "").trim(); w += s ? s.split(/\s+/).length : 0; }); if (w === 0) return 0; return clampN(Math.round(Math.min(0.85, w / 120) * sur), 0, Math.round(sur * 0.9)); }
async function aiCall(sys, userMsg) { try { var r = await anthropic(sys, [{ role: "user", content: userMsg }]); if (r.status < 200 || r.status >= 300) { console.warn("[exam-ai] upstream " + r.status); return null; } var j = JSON.parse(r.buf.toString()); return (j.content && j.content[0] && j.content[0].text) ? j.content[0].text : ""; } catch (e) { console.warn("[exam-ai]", e && e.message); return null; } }
async function aiNote(kind, items, langue, sur, contexte) {
  sur = sur || 25; if (!ANTHKEY) return { ok: false };
  var body = (items || []).map(function (t, i) { return "Tache " + (i + 1) + " — Consigne : " + String(t.consigne || "").slice(0, 800) + "\nProduction du candidat : «" + (String(t.production || "").trim() || "(rien)").slice(0, 3000) + "»"; }).join("\n\n");
  var sys = examGradeSys(kind, langue, sur, contexte), userMsg = "Epreuve de production " + kind + " (" + (contexte || "DELF A2") + ").\n\n" + body;
  var re = /NOTE\s*:?\s*([0-9]{1,3})(?:[.,][0-9]+)?\s*\/\s*([0-9]{1,3})/i;
  var txt = await aiCall(sys, userMsg);
  if (txt === null) return { ok: false };
  var m = txt.match(re);
  if (!m) { var txt2 = await aiCall(sys, userMsg + "\n\nRAPPEL IMPORTANT : termine ta reponse STRICTEMENT par une ligne au format exact : NOTE: X/" + sur); if (txt2 !== null) { var m2 = txt2.match(re); if (m2) { m = m2; txt = txt2; } } }
  var note, feedback;
  if (m) { note = clampN(m[1], 0, sur); feedback = txt.replace(/\n?\s*NOTE\s*:?\s*[0-9][^\n]*\/\s*[0-9]+\s*$/i, "").trim(); }
  else { note = heuristicNote(items, sur); feedback = (txt || "").trim(); console.warn("[exam-ai] NOTE introuvable apres 2 essais -> heuristique (" + note + "/" + sur + ")"); }
  return { ok: true, note: note, feedback: feedback };
}

const TELC_CFG = {
  b1: { wMax: 225, wPass: 135, oMax: 75, oPass: 45, lesenMax: 75, sbMax: 30, hoerenMax: 75, schreibenSur: 45, hsSur: 0 },
  b2: { wMax: 225, wPass: 135, oMax: 75, oPass: 45, lesenMax: 75, sbMax: 30, hoerenMax: 75, schreibenSur: 45, hsSur: 0 },
  c1: { wMax: 166, wPass: 99, oMax: 48, oPass: 29, lesenMax: 48, sbMax: 22, hoerenMax: 48, schreibenSur: 48, hsSur: 0 },
  c2: { wMax: 225, wPass: 135, oMax: 75, oPass: 45, lesenMax: 60, sbMax: 0, hoerenMax: 0, schreibenSur: 90, hsSur: 75 },
  finalb: { wMax: 250, wPass: 163, oMax: 75, oPass: 49, lesenMax: 75, sbMax: 30, hoerenMax: 75, schreibenSur: 45, hsSur: 0, dicteeSur: 25 },
  finalc: { wMax: 191, wPass: 124, oMax: 48, oPass: 31, lesenMax: 48, sbMax: 22, hoerenMax: 48, schreibenSur: 48, hsSur: 0, dicteeSur: 25 },
};
const DELF_CFG = { a1: { seuil: 50, sur: 100 }, a2: { seuil: 50, sur: 100 }, final: { seuil: 75, sur: 125, dictee: true } };

async function gradeExam(id, key) {
  var u = await store.loadUser(id); var ex = u && u.exams && u.exams[key];
  if (!u || !ex || ex.status !== "pending") return "none";
  if (key === "a1" || key === "a2" || key === "final") return await gradeDelf(id, u, ex, key);
  if (/^(b1|b2|c1|c2|finalb|finalc)-/.test(key)) return await gradeTelc(id, u, ex, key);
  return "none";
}
async function gradeDelf(id, u, ex, key) {
  var code = key || "a2", CODE = code.toUpperCase(), CTX = (code === "final" ? "DELF final A1+A2" : "DELF " + CODE);
  var cfg = DELF_CFG[code] || { seuil: 50, sur: 100 };
  var p = ex.payload || {}, copy = p.copy || {}, langue = p.langue || "fr";
  var co25 = recQcm(copy.co, 25), ce25 = recQcm(copy.ce, 25);
  var ee = await aiNote("ecrite", (copy.ee || []).map(function (t) { return { consigne: t.consigne, production: t.text }; }), langue, 25, CTX);
  if (!ee.ok) return "postpone";
  var eo = await aiNote("orale", (copy.eo || []).map(function (t) { return { consigne: t.consigne, production: (t.candidate || t.transcript) }; }), langue, 25, CTX);
  if (!eo.ok) return "postpone";
  var dicteeSur = cfg.dictee ? clampN((copy.dictee && copy.dictee.sur) || 25, 1, 100) : 0, dictee = cfg.dictee ? recDictee(copy.dictee, dicteeSur) : 0;
  var total = co25 + ce25 + ee.note + eo.note + dictee, minNote = Math.min(co25, ce25, ee.note, eo.note), elim = minNote < EXAM_ELIM, reussi = total >= cfg.seuil && !elim;
  u.progress = u.progress || {}; u.progress.tests = u.progress.tests || {};
  var pct = Math.round(total / cfg.sur * 100);
  var prev = u.progress.tests[code] || { meilleur: 0, reussi: false };
  u.progress.tests[code] = { meilleur: Math.max(prev.meilleur || 0, pct), reussi: !!(prev.reussi || reussi), dernier: pct };
  ex.status = "graded"; ex.gradedAt = new Date().toISOString();
  ex.result = { co25: co25, ce25: ce25, ee25: ee.note, eo25: eo.note, dictee: (cfg.dictee ? dictee : undefined), dicteeSur: (cfg.dictee ? dicteeSur : undefined), total: total, sur: cfg.sur, seuil: cfg.seuil, minNote: minNote, eliminatoire: elim, reussi: reussi, eeFeedback: ee.feedback, eoFeedback: eo.feedback };
  await store.saveUser(id, u);
  var msg = reussi ? ("🎓 Ton résultat " + CTX + " est prêt : " + total + "/" + cfg.sur + " — RÉUSSI ✅\nOuvre l'app pour ta copie corrigée et ton PDF. Glückwunsch!") : (elim ? ("📋 Résultat " + CTX + " : " + total + "/" + cfg.sur + ". Une épreuve est sous 5/25 (éliminatoire). Regarde ta copie dans l'app et retente — du schaffst das! 💪") : ("📋 Résultat " + CTX + " : " + total + "/" + cfg.sur + " (il faut " + cfg.seuil + "). Pas encore réussi. Regarde ta copie dans l'app et retente bientôt ! 💪"));
  if (tg.BOT_TOKEN) tg.tgSend(id, msg).catch(function () {});
  console.log("[exam] " + id + " " + CTX + " corrigé: " + total + "/" + cfg.sur);
  return "graded";
}
async function gradeTelc(id, u, ex, key) {
  var p = ex.payload || {}, copy = p.copy || {}, langue = p.langue || "fr";
  var code = key.split("-")[0], CTX = "telc " + code.toUpperCase(), cfg = TELC_CFG[code] || TELC_CFG.b1;
  var part = (key.indexOf("-muendlich") >= 0) ? "muendlich" : "schriftlich";
  if (part === "schriftlich") {
    var lesen = recQcm(copy.lesen, cfg.lesenMax), sb = recQcm(copy.sprachbausteine, cfg.sbMax), hoeren = recQcm(copy.hoeren, cfg.hoerenMax);
    var sch = await aiNote("ecrite (texte argumente/lettre formel/dissertation)", (copy.schreiben || []).map(function (t) { return { consigne: t.consigne, production: t.text }; }), langue, cfg.schreibenSur, CTX);
    if (!sch.ok) return "postpone";
    var hsNote = 0, hsFb = "";
    if ((cfg.hsSur || 0) > 0 && copy.hoerenSchreiben && copy.hoerenSchreiben.length) {
      var hs = await aiNote("ecrite (synthese a partir d'un document audio)", (copy.hoerenSchreiben || []).map(function (t) { return { consigne: t.consigne, production: t.text }; }), langue, cfg.hsSur, CTX);
      if (!hs.ok) return "postpone";
      hsNote = hs.note; hsFb = hs.feedback;
    }
    var dictee = (cfg.dicteeSur || 0) > 0 ? recDictee(copy.dictee, cfg.dicteeSur) : 0;
    var wt = lesen + sb + hoeren + sch.note + hsNote + dictee;
    ex.result = { part: "schriftlich", lesen: lesen, sprachbausteine: sb, hoeren: hoeren, schreiben: sch.note, hs: hsNote, dictee: dictee, lesenMax: cfg.lesenMax, sbMax: cfg.sbMax, hoerenMax: cfg.hoerenMax, schreibenMax: cfg.schreibenSur, hsMax: (cfg.hsSur || 0), dicteeMax: (cfg.dicteeSur || 0), total: wt, sur: cfg.wMax, seuil: cfg.wPass, passed: wt >= cfg.wPass, schreibenFeedback: sch.feedback, hsFeedback: hsFb };
  } else {
    var oral = await aiNote("orale (3 parties : presentation, questions de suivi, discussion)", (copy.oral || []).map(function (t) { return { consigne: t.consigne, production: (t.candidate || t.transcript) }; }), langue, cfg.oMax, CTX);
    if (!oral.ok) return "postpone";
    ex.result = { part: "muendlich", total: oral.note, sur: cfg.oMax, seuil: cfg.oPass, passed: oral.note >= cfg.oPass, oralFeedback: oral.feedback };
  }
  ex.status = "graded"; ex.gradedAt = new Date().toISOString();
  var sr = (u.exams[code + "-schriftlich"] && u.exams[code + "-schriftlich"].result) || null;
  var mr = (u.exams[code + "-muendlich"] && u.exams[code + "-muendlich"].result) || null;
  var certified = !!(sr && sr.passed && mr && mr.passed);
  var parts = []; if (sr) parts.push(sr.total / (sr.sur || cfg.wMax)); if (mr) parts.push(mr.total / (mr.sur || cfg.oMax));
  var pct = parts.length ? Math.round(parts.reduce(function (a, b) { return a + b; }, 0) / parts.length * 100) : 0;
  u.progress = u.progress || {}; u.progress.tests = u.progress.tests || {};
  var prevB = u.progress.tests[code] || { meilleur: 0, reussi: false };
  u.progress.tests[code] = { meilleur: Math.max(prevB.meilleur || 0, pct), reussi: !!(prevB.reussi || certified), dernier: pct };
  await store.saveUser(id, u);
  var r = ex.result, pn = (part === "schriftlich") ? "écrite" : "orale";
  var msg = certified ? ("🏅 " + CTX + " — CERTIFIÉ ! Tu as réussi l'écrit ET l'oral. La suite du parcours est débloquée. Ouvre l'app pour ta copie et ton PDF. Glückwunsch!") : (r.passed ? ("✅ " + CTX + " — partie " + pn + " RÉUSSIE (" + r.total + "/" + r.sur + "). Il te reste " + (part === "schriftlich" ? "l'oral" : "l'écrit") + " pour le certificat. Ouvre l'app pour ta copie corrigée.") : ("📋 " + CTX + " — partie " + pn + " : " + r.total + "/" + r.sur + " (il faut " + r.seuil + "). Pas encore validée. Regarde ta copie corrigée dans l'app et repasse cette partie. 💪"));
  if (tg.BOT_TOKEN) tg.tgSend(id, msg).catch(function () {});
  console.log("[exam] " + id + " " + CTX + " " + part + " corrigé: " + r.total + "/" + r.sur + (certified ? " (CERTIFIÉ)" : ""));
  return "graded";
}

/* Scan des copies en attente → correction à l'échéance (appelé par le cron). */
async function scanPendingExams() {
  var now = Date.now(), graded = 0;
  var users = await store.listUsers();
  for (var i = 0; i < users.length && graded < EXAM_SCAN_MAX; i++) {
    var u = users[i]; if (!u || !u.id || !u.exams) continue;
    var keys = Object.keys(u.exams);
    for (var k = 0; k < keys.length && graded < EXAM_SCAN_MAX; k++) {
      try {
        var ex = u.exams[keys[k]];
        if (ex && ex.status === "pending" && now - (Date.parse(ex.submittedAt) || 0) >= GRADE_DELAY) {
          var rr = await gradeExam(String(u.id), keys[k]); if (rr === "graded") graded++;
        }
      } catch (e) { console.warn("[exam-scan]", e && e.message); }
    }
  }
  return graded;
}
/* Rappels quotidiens (appelé par le cron). */
async function sendReminders() {
  if (!tg.BOT_TOKEN) return 0;
  var subs = await store.loadSubs(); var now = new Date();
  var mins = now.getHours() * 60 + now.getMinutes(), today = now.toISOString().slice(0, 10), changed = false, sent = 0;
  var ids = Object.keys(subs);
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i], sb = subs[id]; if (!sb || sb.last === today) continue;
    var t = String(sb.heure || "19:00").split(":"), due = parseInt(t[0], 10) * 60 + parseInt(t[1] || "0", 10);
    if (mins >= due && mins < due + 120) { await tg.tgSend(id, "⏰ Coach Zika: 5 minutes d'allemand aujourd'hui pour garder ta serie ! https://sprachakademie.app"); sb.last = today; changed = true; sent++; }
  }
  if (changed) await store.saveSubs(subs);
  return sent;
}

/* Compétences (pour le dashboard admin) — dégrade en [] si data absente. */
function loadComp() {
  try { var stub = {}; var f = path.join(process.cwd(), "data", "competences.js"); new Function("window", fs.readFileSync(f, "utf8"))(stub); return stub.COMPETENCES || null; }
  catch (e) { return null; }
}
function compStats(users) {
  var COMP = loadComp(); if (!COMP || !COMP.parLecon) return [];
  var glob = {};
  (users || []).forEach(function (u) {
    var p = u.progress || {}, lec = p.lecons || {}, per = {};
    Object.keys(lec).forEach(function (id) {
      var codes = COMP.parLecon[id] || []; var ex = (lec[id] && lec[id].exercices) || {};
      Object.keys(ex).forEach(function (k) { var ok = !!ex[k]; codes.forEach(function (c) { if (c === "lexique" || c === "gram_divers") return; per[c] = per[c] || { seen: 0, ok: 0 }; per[c].seen++; if (ok) per[c].ok++; }); });
    });
    Object.keys(per).forEach(function (c) { var d = per[c]; glob[c] = glob[c] || { seen: 0, ok: 0, weak: 0, users: 0 }; glob[c].seen += d.seen; glob[c].ok += d.ok; glob[c].users++; if (d.seen >= 2 && d.ok / d.seen < 0.5) glob[c].weak++; });
  });
  return Object.keys(glob).map(function (c) { var g = glob[c]; var info = (COMP.info && COMP.info(c)) || {}; return { code: c, label: info.label || c, niveau: info.niveau || "", cat: info.cat || "", users: g.users, score: g.seen ? Math.round(g.ok / g.seen * 100) : 0, weak: g.weak }; }).filter(function (r) { return r.users > 0; }).sort(function (a, b) { return a.score - b.score; });
}

module.exports = { ANTHKEY, GRADE_DELAY, anthropic, sysPrompt, gradeExam, scanPendingExams, sendReminders, compStats };
