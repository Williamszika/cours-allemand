const http=require("http"),https=require("https"),fs=require("fs"),path=require("path"),crypto=require("crypto");
const PORT=parseInt(process.env.TTS_PORT||"3001",10);
const CONFIG_VOICE=(process.env.ELEVENLABS_VOICE_ID||"").trim();
const KEY=(process.env.ELEVENLABS_API_KEY||"").trim();
const MODEL=(process.env.ELEVENLABS_MODEL||"eleven_multilingual_v2").trim();
const STTMODEL=(process.env.ELEVENLABS_STT_MODEL||"scribe_v1").trim();
const CACHE_DIR=(process.env.TTS_CACHE_DIR||path.join(__dirname,"tts-cache")).trim();
const ANTHKEY=(process.env.ANTHROPIC_API_KEY||"").trim();
const CHATMODEL=(process.env.ANTHROPIC_MODEL||"claude-haiku-4-5-20251001").trim();
const BOT_TOKEN=(process.env.TELEGRAM_BOT_TOKEN||"").trim();
const SUBS=path.join(__dirname,"subscribers.json");
const DATA_DIR=(process.env.DATA_DIR||path.join(__dirname,"data")).trim();
const USERS_DIR=path.join(DATA_DIR,"users");
const ADMIN_ID=(process.env.ADMIN_ID||"").trim();
const ADMIN_TOKEN=(process.env.ADMIN_TOKEN||"").trim();
let BOT_USERNAME=(process.env.BOT_USERNAME||"").trim();
const ALLOW=(process.env.ALLOW_ORIGIN||"sprachakademie.app").trim();
const ORDER=["A1","A2","B1","B2","C1","C2"];
// Examen DELF différé : la copie est corrigée GRADE_DELAY ms après la remise
// (24 h par défaut, surchargeable pour les tests via EXAM_DELAY_MS).
const GRADE_DELAY=Math.max(0,parseInt(process.env.EXAM_DELAY_MS||String(24*3600*1000),10)||24*3600*1000);
const EXAM_PASS=50;   // total minimal /100
const EXAM_ELIM=5;    // note éliminatoire par épreuve (/25)
const COMP_FILE=(process.env.COMP_FILE||path.join(__dirname,"..","data","competences.js")).trim();
function loadComp(){try{var stub={};new Function("window",fs.readFileSync(COMP_FILE,"utf8"))(stub);return stub.COMPETENCES||null;}catch(e){return null;}}
try{fs.mkdirSync(CACHE_DIR,{recursive:true});}catch(e){console.warn("[tts] cache:",e.message);}
try{fs.mkdirSync(USERS_DIR,{recursive:true});}catch(e){console.warn("[data]",e.message);}
const FREE=["JBFqnCBsd6RMkjVDRZzb","EXAVITQu4vr4xnSDxMaL","FGY2WhTYpPnrIDTdsKH5","nPczCjzI2devNBz1zQrb","XB0fDUnXU5powFXDhCwa","onwK4e9ZLuTAKqWW03F9"];
let goodVoice=CONFIG_VOICE||FREE[0],discovering=null;
const HITS=new Map();
function tooMany(ip){const now=Date.now(),w=60000,max=120;const e=HITS.get(ip)||{n:0,t:now};if(now-e.t>w){e.n=0;e.t=now;}e.n++;HITS.set(ip,e);return e.n>max;}
function ckey(v,t){return crypto.createHash("sha256").update(v+"|"+MODEL+"|"+t).digest("hex");}
function call(opts,body){return new Promise((res,rej)=>{const r=https.request(opts,x=>{const c=[];x.on("data",d=>c.push(d));x.on("end",()=>res({status:x.statusCode||500,buf:Buffer.concat(c)}));});r.on("error",rej);if(body)r.write(body);r.end();});}
function tts(v,t){const body=JSON.stringify({text:t,model_id:MODEL,voice_settings:{stability:0.5,similarity_boost:0.75,use_speaker_boost:true}});return call({hostname:"api.elevenlabs.io",path:"/v1/text-to-speech/"+v+"?output_format=mp3_44100_128",method:"POST",headers:{"xi-api-key":KEY,"content-type":"application/json","accept":"audio/mpeg","content-length":Buffer.byteLength(body)}},body);}
function stt(audio,ctype){const b="----b"+crypto.randomBytes(8).toString("hex");const pre=Buffer.from("--"+b+"\r\nContent-Disposition: form-data; name=\"model_id\"\r\n\r\n"+STTMODEL+"\r\n--"+b+"\r\nContent-Disposition: form-data; name=\"file\"; filename=\"a.webm\"\r\nContent-Type: "+(ctype||"audio/webm")+"\r\n\r\n");const post=Buffer.from("\r\n--"+b+"--\r\n");const body=Buffer.concat([pre,audio,post]);return call({hostname:"api.elevenlabs.io",path:"/v1/speech-to-text",method:"POST",headers:{"xi-api-key":KEY,"content-type":"multipart/form-data; boundary="+b,"content-length":body.length}},body);}
async function listVoices(){try{const r=await call({hostname:"api.elevenlabs.io",path:"/v1/voices",method:"GET",headers:{"xi-api-key":KEY,"accept":"application/json"}});if(r.status<200||r.status>=300)return[];const j=JSON.parse(r.buf.toString());return Array.isArray(j.voices)?j.voices:[];}catch(e){return[];}}
async function discover(){const acc=(await listVoices()).map(v=>v.voice_id).filter(Boolean);const seen=new Set(),cand=[];for(const id of acc.concat(FREE))if(id&&!seen.has(id)){seen.add(id);cand.push(id);}for(const id of cand){const r=await tts(id,"Hallo");if(r.status>=200&&r.status<300){console.log("[tts] voix OK: "+id+" -> Environment=ELEVENLABS_VOICE_ID="+id);return id;}}return null;}
async function synth(rv,t){const v=rv||goodVoice;let r=await tts(v,t);if(r.status>=200&&r.status<300){goodVoice=v;return r;}console.warn("[tts] voix "+v+" refusee HTTP "+r.status+" "+(r.buf?r.buf.toString().slice(0,200):""));if(r.status===401)return r;if(!discovering)discovering=discover().finally(()=>{discovering=null;});const g=await discovering;if(g&&g!==v){const r2=await tts(g,t);if(r2.status>=200&&r2.status<300){goodVoice=g;return r2;}}return r;}
function anthropic(system,messages){const body=JSON.stringify({model:CHATMODEL,max_tokens:1024,system:system,messages:messages});return call({hostname:"api.anthropic.com",path:"/v1/messages",method:"POST",headers:{"x-api-key":ANTHKEY,"anthropic-version":"2023-06-01","content-type":"application/json","content-length":Buffer.byteLength(body)}},body);}
function sysPrompt(niveau,niveauParle,langue,mode,oral,unclear){const n=String(niveau||"A1").toUpperCase(),np=String(niveauParle||niveau||"A1").toUpperCase(),lg=String(langue||"fr"),m=String(mode||"");var ORDER2=["A1","A2","B1","B2","C1","C2"];var LN={fr:"francais",en:"anglais",de:"allemand",ar:"arabe",tr:"turc",ru:"russe",uk:"ukrainien",fa:"persan",es:"espagnol",it:"italien",pt:"portugais",pl:"polonais",ro:"roumain",nl:"neerlandais"};var lgName=LN[lg]||lg;var immDE=ORDER2.indexOf(n)>=ORDER2.indexOf("B2");var LANGRULE=immDE?"REGLE DE LANGUE ABSOLUE (prioritaire sur toute autre instruction): ecris 100% de ta reponse EXCLUSIVEMENT en allemand de niveau "+np+"; n'utilise AUCUNE autre langue (ni francais ni anglais) et n'ajoute aucune traduction. Meme si des messages precedents etaient dans une autre langue, reponds maintenant en allemand. ":"REGLE DE LANGUE ABSOLUE (prioritaire sur toute autre instruction): ta SEULE langue de communication est le "+lgName+" (langue choisie par l'apprenant, code "+lg+"). Ecris EN "+lgName+" absolument TOUT: titres, accroches, explications, consignes, corrections, encouragements ET toute traduction ou clarification, y compris entre parentheses. Il est ABSOLUMENT INTERDIT d'ecrire la moindre phrase, glose ou traduction en francais si le "+lgName+" n'est pas le francais. SEULS les mots et phrases allemands a apprendre restent en allemand simple (niveau "+np+"); si tu les traduis ou les expliques, c'est en "+lgName+", JAMAIS en francais. Meme si les messages precedents de la conversation etaient en francais, IGNORE cela et ecris desormais en "+lgName+". ";if(m==="correction")return "Tu es un correcteur d'allemand bienveillant et precis. L'apprenant a le niveau "+n+". "+LANGRULE+"Sois concis et encourageant. On te donne une consigne et la production de l'apprenant. Donne EXACTEMENT ces 4 sections, titres en gras: **✅ Ce qui est bien** (1-2 points concrets); **✏️ A corriger** (liste les fautes importantes sous la forme: forme fautive -> forme correcte + mini-explication, 5 maximum); **🚀 Pour aller plus loin** (1 suggestion adaptee au niveau "+n+"); **📊 Note suggeree : X/100**. Ne reecris pas tout le texte, va a l'essentiel.";let s="Tu es un tuteur d'allemand bienveillant et patient. L'apprenant a le niveau "+n+". ";s+=LANGRULE;s+="Corrige gentiment les fautes (forme correcte + courte explication). Encourage, reste concis (style conversation), et termine souvent par une petite question pour faire parler l'apprenant. ";if(m==="pflege")s+="CONTEXTE SPECIAL: allemand pour les soins infirmiers (Deutsch fuer die Pflege). Propose des jeux de role realistes (patient, collegue infirmier, medecin), enseigne le vocabulaire medical et les tournures professionnelles, et la facon de documenter/communiquer en milieu de soins. CADRE LEGAL: tu fais UNIQUEMENT du Sprachtraining et de la preparation a l'examen (Pruefungsvorbereitung); tu n'es PAS un professionnel de sante; ne donne JAMAIS de conseil medical, de diagnostic, de dosage, de traitement ni de protocole de soin applicable a un vrai patient; si on te demande un avis medical reel, rappelle gentiment que tu es un outil d'apprentissage de la langue et oriente vers un professionnel de sante ou un medecin. ";if(m==="grammaire"){s+="MODE DRILL GRAMMAIRE: tu es un coach de grammaire interactif. Si aucun point n'est encore choisi, demande a l'apprenant quel point il veut travailler ou propose-en un adapte a son niveau (prepositions temporelles, cas et declinaisons, Konjunktiv, ordre des mots, verbes a prepositions...). Une fois le point choisi: rappelle la regle en 2-3 phrases simples dans sa langue, puis enchaine des EXERCICES UN PAR UN (phrase a completer, choix multiple, ou corrige l'erreur). Attends sa reponse, corrige tout de suite et brievement, felicite, puis propose le suivant un peu plus difficile. Apres environ 5 exercices, fais un mini-bilan et propose de continuer ou de changer de point. Reste concis et interactif. ";}else if(m==="expression"||m==="prononciation"){s+="MODE EXPRESSION ET PRONONCIATION: tu es un coach d'expression orale et de confiance; l'apprenant a valide A1+A2 et STRESSE de parler. PARLE-LUI EN ALLEMAND de niveau "+np+" (un cran sous le sien, pour qu'il comprenne), MAIS pousse-le a PRODUIRE au niveau "+n+", c'est-a-dire a utiliser SA grammaire et des phrases plus riches de son niveau pour s'exprimer librement et communiquer sans souci. Deroulement: propose un petit defi ou sujet a sa portee et fais-le parler AU MICRO, de plus en plus longtemps. A chaque reponse (transcrite de sa voix): 1) retour CONFIANCE et COMMUNICATION d'abord (felicite-le d'avoir ose, dis si le message passe), 2) reformule sa phrase en mieux + 1 ou 2 corrections en douceur, 3) PRONONCIATION: si des mots sont signales peu clairs, dis lesquels et donne un conseil concret pour le son allemand concerne (u-Umlaut, o-Umlaut, ch doux/dur, r, sch, z, w...), 4) invite-le a redire la phrase en visant le niveau "+n+", 5) propose le defi suivant un peu plus ambitieux (se presenter, donner un avis, raconter, mini-presentation, entretien, parler devant un public). Donne des amorces utiles (Also..., Ich denke..., Meiner Meinung nach...). Reste chaleureux et bref. ";}else if(m==="conversation"){s+="MODE CONVERSATION LIBRE: tu es avant tout un partenaire de conversation chaleureux. Tiens une vraie discussion du quotidien (loisirs, voyages, cuisine, projets, souvenirs, actualite legere...) adaptee a son niveau. Garde des reponses COURTES et naturelles, et fais TOUJOURS avancer le dialogue par une relance ou une petite question. Quand l'apprenant fait une faute, commence ta reponse par une mini-correction discrete sur UNE ligne au format '🔧 forme fautive -> forme correcte' (1 a 2 corrections maximum, l'essentiel), puis enchaine NATURELLEMENT la conversation sans le bloquer. S'il n'y a pas de faute notable, ne corrige pas et felicite-le brievement de temps en temps. Si l'apprenant ecrit dans sa langue, reponds en allemand simple et invite-le doucement a continuer en allemand. Objectif: le faire parler le plus possible, en confiance, comme un ami patient. ";}else if(m==="immersion"){s+="MODE IMMERSION (jeu de role): tu animes une mise en situation realiste du quotidien. Joue PLEINEMENT le ou les roles indiques par l'apprenant (serveur, medecin, vendeur, agent...) et RESTE dans le role. Parle en allemand a son niveau. Deroulement: 1) plante le decor en UNE phrase, 2) joue ta replique de personnage et invite l'apprenant a repondre, 3) avance la scene replique par replique jusqu'a une conclusion naturelle. S'il bloque, glisse une amorce utile entre parentheses (ex: '(Du kannst sagen: ...)'). Corrige seulement les fautes importantes, TRES brievement, sans casser l'immersion (format '🔧 forme fautive -> forme correcte'). A la fin de la scene, sors du role: felicitations + mini-bilan de 2-3 expressions cles a retenir, puis propose de rejouer ou de changer de scenario. Reste vivant, bref et encourageant. ";}else if(oral){s+="MODE ORAL: l'apprenant s'ENTRAINE A PARLER; sa phrase vient d'etre transcrite de sa voix (il peut y avoir des hesitations ou des erreurs de transcription, ignore-les). Aide-le a s'exprimer: 1) reformule sa phrase de facon correcte et naturelle (niveau "+np+"), 2) une astuce courte pour mieux dire, 3) encourage-le chaleureusement car il STRESSE a l'oral, 4) propose une petite mise en situation ou une question simple pour qu'il continue a parler a voix haute. Sois bref, chaleureux, comme un coach de prise de parole. ";}if(Array.isArray(unclear)&&unclear.length)s+="INDICE: ces mots ont ete mal compris a la transcription (donc probablement mal prononces): "+unclear.join(", ")+". Concentre tes conseils de prononciation dessus. ";s+=" RAPPEL FINAL - "+LANGRULE;return s;}
function clean(msgs){if(!Array.isArray(msgs))return [];return msgs.slice(-20).map(m=>({role:(m&&m.role==="assistant")?"assistant":"user",content:String((m&&m.content)||"").slice(0,4000)})).filter(m=>m.content);}
function loadSubs(){try{return JSON.parse(fs.readFileSync(SUBS,"utf8"))||{};}catch(e){return {};}}
function saveSubs(o){try{fs.writeFileSync(SUBS,JSON.stringify(o));}catch(e){}}
const ADMINS=path.join(__dirname,"admins.json");
function loadAdmins(){try{return JSON.parse(fs.readFileSync(ADMINS,"utf8"))||{};}catch(e){return {};}}
function saveAdmins(o){try{fs.writeFileSync(ADMINS,JSON.stringify(o));}catch(e){}}
// Journal d'audit des actions admin (qui fait quoi, quand). Capé à 300 entrées.
const AUDIT=path.join(__dirname,"admin-log.json");
function loadAudit(){try{return JSON.parse(fs.readFileSync(AUDIT,"utf8"))||[];}catch(e){return [];}}
function logAction(by,action,detail){try{var nm=by?((loadUser(by)||{}).name||""):"";var l=loadAudit();l.push({at:new Date().toISOString(),by:String(by||"token"),byName:nm,action:String(action||""),detail:String(detail||"")});if(l.length>300)l=l.slice(l.length-300);fs.writeFileSync(AUDIT,JSON.stringify(l));}catch(e){}}
// Créateur (owner) = ADMIN_ID ou le porteur du mot de passe ADMIN_TOKEN. Lui seul gère les admins.
function isOwner(id,key){return !!((ADMIN_TOKEN&&key&&key===ADMIN_TOKEN)||(ADMIN_ID&&id&&String(id)===String(ADMIN_ID)));}
function isAdmin(id,key){if(isOwner(id,key))return true;if(!id)return false;return !!loadAdmins()[String(id)];}
function uFile(id){return path.join(USERS_DIR,String(id).replace(/[^0-9]/g,"")+".json");}
function loadUser(id){try{return JSON.parse(fs.readFileSync(uFile(id),"utf8"));}catch(e){return null;}}
function saveUser(id,o){try{const f=uFile(id),t=f+"."+process.pid+".tmp";fs.writeFileSync(t,JSON.stringify(o));fs.renameSync(t,f);}catch(e){console.warn("[user]",e.message);}}
function listUsers(){try{return fs.readdirSync(USERS_DIR).filter(f=>f.endsWith(".json")).map(f=>{try{return JSON.parse(fs.readFileSync(path.join(USERS_DIR,f),"utf8"));}catch(e){return null;}}).filter(Boolean);}catch(e){return [];}}
function lvlMax(a,b){var i=Math.max(ORDER.indexOf(a),ORDER.indexOf(b));return i>=0?ORDER[i]:(b||a||null);}
function derivedLevel(p){p=p||{};var t=p.tests||{};function ok(k){return !!(t[k]&&t[k].reussi);}var bo=0;if(ok("a1"))bo=1;if(ok("final"))bo=2;if(ok("b1"))bo=3;if(ok("finalb"))bo=4;if(ok("c1"))bo=5;var di=Math.max(ORDER.indexOf(p.niveau||"A1"),0);return ORDER[Math.max(di,bo)]||"A1";}
function mergeProg(a,b){a=a||{};b=b||{};var out=Object.assign({},a,b);var al=a.lecons||{},bl=b.lecons||{},L={};Object.keys(al).concat(Object.keys(bl)).forEach(function(id){if(L[id])return;var x=al[id]||{},y=bl[id]||{},ex={};Object.keys(x.exercices||{}).concat(Object.keys(y.exercices||{})).forEach(function(k){ex[k]=!!((x.exercices&&x.exercices[k])||(y.exercices&&y.exercices[k]));});L[id]={exercices:ex,termine:!!(x.termine||y.termine),score:Math.max(x.score||0,y.score||0)};});out.lecons=L;var at=a.tests||{},bt=b.tests||{},T={};Object.keys(at).concat(Object.keys(bt)).forEach(function(id){if(T[id])return;var x=at[id]||{},y=bt[id]||{};T[id]={meilleur:Math.max(x.meilleur||0,y.meilleur||0),reussi:!!(x.reussi||y.reussi),dernier:(y.dernier!=null?y.dernier:x.dernier)};});out.tests=T;var am=a.temps||{},bm=b.temps||{},TM={};Object.keys(am).concat(Object.keys(bm)).forEach(function(d){TM[d]=Math.max(am[d]||0,bm[d]||0);});out.temps=TM;out.niveau=lvlMax(a.niveau,b.niveau);out.reglages=Object.assign({},a.reglages||{},b.reglages||{});if((a.reglages&&a.reglages.langueChoisie)||(b.reglages&&b.reglages.langueChoisie))out.reglages.langueChoisie=true;out.streak=Math.max(a.streak||0,b.streak||0);out.lastStudy=[a.lastStudy,b.lastStudy].filter(Boolean).sort().pop()||null;out.derniereVisite=[a.derniereVisite,b.derniereVisite].filter(Boolean).sort().pop()||null;out.lastNotified=[a.lastNotified,b.lastNotified].filter(Boolean).sort().pop()||null;return out;}
function tgVerify(initData){try{if(!BOT_TOKEN||!initData)return null;var p=new URLSearchParams(initData);var hash=p.get("hash");p.delete("hash");var a=[];p.forEach(function(v,k){a.push(k+"="+v);});a.sort();var dcs=a.join("\n");var secret=crypto.createHmac("sha256","WebAppData").update(BOT_TOKEN).digest();var calc=crypto.createHmac("sha256",secret).update(dcs).digest("hex");if(calc!==hash)return null;return {user:JSON.parse(p.get("user")||"{}"),start_param:p.get("start_param")||""};}catch(e){return null;}}
function tgUserId(initData){var v=tgVerify(initData);return (v&&v.user&&v.user.id)?String(v.user.id):null;}
function tgName(v){return v&&v.user?(((v.user.first_name||"")+" "+(v.user.last_name||"")).trim()):"";}
function tgSend(chat,text){var body=JSON.stringify({chat_id:chat,text:text});return call({hostname:"api.telegram.org",path:"/bot"+BOT_TOKEN+"/sendMessage",method:"POST",headers:{"content-type":"application/json","content-length":Buffer.byteLength(body)}},body);}
function touchUser(v,extra){if(!v||!v.user||!v.user.id)return;var id=String(v.user.id);var now=new Date().toISOString();var u=loadUser(id)||{id:id,createdAt:now,progress:{},conv:{messages:[]},referredBy:null};u.name=tgName(v)||u.name||"";u.username=v.user.username||u.username||"";u.tgLang=v.user.language_code||u.tgLang||"";u.lastSeen=now;if(extra)extra(u);saveUser(id,u);return u;}
function sendReminders(){if(!BOT_TOKEN)return;var subs=loadSubs();var now=new Date();var mins=now.getHours()*60+now.getMinutes();var today=now.toISOString().slice(0,10);var changed=false;Object.keys(subs).forEach(function(id){var sb=subs[id];if(!sb||sb.last===today)return;var t=String(sb.heure||"19:00").split(":");var due=parseInt(t[0],10)*60+parseInt(t[1]||"0",10);if(mins>=due&&mins<due+90){tgSend(id,"⏰ Coach Zika: 5 minutes d'allemand aujourd'hui pour garder ta serie ! https://sprachakademie.app").catch(function(){});sb.last=today;changed=true;}});if(changed)saveSubs(subs);}
function compStats(users){
  var COMP=loadComp(); if(!COMP||!COMP.parLecon)return [];
  var glob={};
  (users||[]).forEach(function(u){
    var p=u.progress||{}, lec=p.lecons||{}, per={};
    Object.keys(lec).forEach(function(id){
      var codes=COMP.parLecon[id]||[]; var ex=(lec[id]&&lec[id].exercices)||{};
      Object.keys(ex).forEach(function(k){ var ok=!!ex[k]; codes.forEach(function(c){ if(c==="lexique"||c==="gram_divers")return; per[c]=per[c]||{seen:0,ok:0}; per[c].seen++; if(ok)per[c].ok++; }); });
    });
    Object.keys(per).forEach(function(c){ var d=per[c]; glob[c]=glob[c]||{seen:0,ok:0,weak:0,users:0}; glob[c].seen+=d.seen; glob[c].ok+=d.ok; glob[c].users++; if(d.seen>=2&&d.ok/d.seen<0.5)glob[c].weak++; });
  });
  return Object.keys(glob).map(function(c){ var g=glob[c]; var info=(COMP.info&&COMP.info(c))||{}; return {code:c,label:info.label||c,niveau:info.niveau||"",cat:info.cat||"",users:g.users,score:g.seen?Math.round(g.ok/g.seen*100):0,weak:g.weak}; }).filter(function(r){return r.users>0;}).sort(function(a,b){return a.score-b.score;});
}
/* ---------- Examen DELF : correction différée par l'IA ----------------
   La production écrite (EE) et orale (EO) sont notées sur 25 par l'IA
   selon les descripteurs DELF A2 ; CO et CE sont déjà notées côté client.
   Réussite : total >= 50/100 ET aucune épreuve < 5/25 (sinon éliminatoire). */
function clampN(x,a,b){x=Math.round(+x||0);return x<a?a:(x>b?b:x);}
function examGradeSys(kind,langue,sur,contexte){
  var LN={fr:"français",en:"anglais",de:"allemand",ar:"arabe",tr:"turc",ru:"russe",uk:"ukrainien",fa:"persan",es:"espagnol",it:"italien",pt:"portugais",pl:"polonais",ro:"roumain",nl:"néerlandais"};
  var lg=LN[String(langue||"fr")]||"français";sur=sur||25;var ctx=contexte||"DELF A2";var niv=/B1/.test(ctx)?"B1":"A2";
  return "Tu es examinateur officiel du "+ctx+" d'allemand (CECRL, niveau "+niv+"). Tu evalues la PRODUCTION "+kind+" d'un candidat selon les descripteurs "+niv+" : respect de la consigne, capacite a informer/decrire/raconter/argumenter/interagir, etendue et correction du vocabulaire et de la grammaire de niveau "+niv+", coherence et connecteurs. Tu notes l'ENSEMBLE de l'epreuve sur "+sur+" points. Sois juste mais bienveillant ; une production vide ou hors sujet recoit une note tres basse. Redige un bilan en "+lg+" : 2 a 4 phrases (points forts, puis 1 a 2 corrections utiles au format 'forme fautive -> forme correcte'). Puis, sur la TOUTE DERNIERE ligne, ecris EXACTEMENT au format : NOTE: X/"+sur+" (X = entier de 0 a "+sur+"). N'ecris rien apres cette ligne.";
}
function heuristicNote(items,sur){
  sur=sur||25;var w=0;(items||[]).forEach(function(t){var s=String(t.production||"").trim();w+=s?s.split(/\s+/).length:0;});
  if(w===0)return 0;return clampN(Math.round(Math.min(0.85,w/120)*sur),0,Math.round(sur*0.9));
}
async function aiNote(kind,items,langue,sur,contexte){
  sur=sur||25;if(!ANTHKEY)return {ok:false};
  var body=(items||[]).map(function(t,i){return "Tache "+(i+1)+" — Consigne : "+String(t.consigne||"").slice(0,800)+"\nProduction du candidat : «"+(String(t.production||"").trim()||"(rien)").slice(0,3000)+"»";}).join("\n\n");
  try{
    var r=await anthropic(examGradeSys(kind,langue,sur,contexte),[{role:"user",content:"Epreuve de production "+kind+" ("+(contexte||"DELF A2")+").\n\n"+body}]);
    if(r.status<200||r.status>=300){console.warn("[exam-ai] upstream "+r.status);return {ok:false};}
    var j=JSON.parse(r.buf.toString());var txt=(j.content&&j.content[0]&&j.content[0].text)?j.content[0].text:"";
    if(!txt)return {ok:false};
    var m=txt.match(/NOTE\s*:?\s*([0-9]{1,3})(?:[.,][0-9]+)?\s*\/\s*([0-9]{1,3})/i);
    var note=m?clampN(m[1],0,sur):heuristicNote(items,sur);
    var feedback=txt.replace(/\n?\s*NOTE\s*:?\s*[0-9][^\n]*\/\s*[0-9]+\s*$/i,"").trim();
    return {ok:true,note:note,feedback:feedback};
  }catch(e){console.warn("[exam-ai]",e&&e.message);return {ok:false};}
}
// telc B1 : écrit /225 (Lesen 75 + Sprachbausteine 30 + Hören 75 + Schreiben 45),
// oral /75. Réussite : >=60% dans CHAQUE partie (135/225 et 45/75), bénéfice gardé.
const B1_W_MAX=225,B1_W_PASS=135,B1_O_MAX=75,B1_O_PASS=45;
async function gradeExam(id,key){
  var u=loadUser(id);var ex=u&&u.exams&&u.exams[key];
  if(!u||!ex||ex.status!=="pending")return "none";
  if(key==="a2")return await gradeA2(id,u,ex);
  if(key.indexOf("b1-")===0)return await gradeB1(id,u,ex,key);
  return "none";
}
async function gradeA2(id,u,ex){
  var p=ex.payload||{},copy=p.copy||{},langue=p.langue||"fr";
  var co25=clampN(p.co25,0,25),ce25=clampN(p.ce25,0,25);
  var ee=await aiNote("ecrite",(copy.ee||[]).map(function(t){return {consigne:t.consigne,production:t.text};}),langue,25,"DELF A2");
  if(!ee.ok)return "postpone";
  var eo=await aiNote("orale",(copy.eo||[]).map(function(t){return {consigne:t.consigne,production:t.transcript};}),langue,25,"DELF A2");
  if(!eo.ok)return "postpone";
  var total=co25+ce25+ee.note+eo.note,minNote=Math.min(co25,ce25,ee.note,eo.note),elim=minNote<EXAM_ELIM,reussi=total>=EXAM_PASS&&!elim;
  u.progress=u.progress||{};u.progress.tests=u.progress.tests||{};
  var prev=u.progress.tests.a2||{meilleur:0,reussi:false};
  u.progress.tests.a2={meilleur:Math.max(prev.meilleur||0,total),reussi:!!(prev.reussi||reussi),dernier:total};
  ex.status="graded";ex.gradedAt=new Date().toISOString();
  ex.result={co25:co25,ce25:ce25,ee25:ee.note,eo25:eo.note,total:total,minNote:minNote,eliminatoire:elim,reussi:reussi,eeFeedback:ee.feedback,eoFeedback:eo.feedback};
  saveUser(id,u);
  var msg=reussi?"🎓 Ton résultat DELF A2 est prêt : "+total+"/100 — RÉUSSI ✅\nOuvre l'app pour ta copie corrigée et ton PDF. Glückwunsch!":(elim?"📋 Résultat DELF A2 : "+total+"/100. Une épreuve est sous 5/25 (éliminatoire). Regarde ta copie dans l'app et retente — du schaffst das! 💪":"📋 Résultat DELF A2 : "+total+"/100 (il faut 50). Pas encore réussi. Regarde ta copie dans l'app et retente bientôt ! 💪");
  if(BOT_TOKEN)tgSend(id,msg).catch(function(){});
  console.log("[exam] "+id+" DELF A2 corrigé: "+total+"/100");
  return "graded";
}
async function gradeB1(id,u,ex,key){
  var p=ex.payload||{},copy=p.copy||{},langue=p.langue||"fr";
  var part=(key==="b1-muendlich")?"muendlich":"schriftlich";
  if(part==="schriftlich"){
    var lesen=clampN(p.lesen,0,75),sb=clampN(p.sprachbausteine,0,30),hoeren=clampN(p.hoeren,0,75);
    var sch=await aiNote("ecrite (lettre/e-mail formel ou informel)",(copy.schreiben||[]).map(function(t){return {consigne:t.consigne,production:t.text};}),langue,45,"telc B1");
    if(!sch.ok)return "postpone";
    var wt=lesen+sb+hoeren+sch.note;
    ex.result={part:"schriftlich",lesen:lesen,sprachbausteine:sb,hoeren:hoeren,schreiben:sch.note,total:wt,sur:B1_W_MAX,seuil:B1_W_PASS,passed:wt>=B1_W_PASS,schreibenFeedback:sch.feedback};
  }else{
    var oral=await aiNote("orale (3 parties : presentation, discussion d'opinion, planification commune)",(copy.oral||[]).map(function(t){return {consigne:t.consigne,production:t.transcript};}),langue,75,"telc B1");
    if(!oral.ok)return "postpone";
    ex.result={part:"muendlich",total:oral.note,sur:B1_O_MAX,seuil:B1_O_PASS,passed:oral.note>=B1_O_PASS,oralFeedback:oral.feedback};
  }
  ex.status="graded";ex.gradedAt=new Date().toISOString();
  // Certificat B1 : réussi seulement si l'écrit ET l'oral sont validés (bénéfice gardé).
  var sr=(u.exams["b1-schriftlich"]&&u.exams["b1-schriftlich"].result)||null;
  var mr=(u.exams["b1-muendlich"]&&u.exams["b1-muendlich"].result)||null;
  var certified=!!(sr&&sr.passed&&mr&&mr.passed);
  var pct=Math.round(((sr?sr.total:0)+(mr?mr.total:0))/(B1_W_MAX+B1_O_MAX)*100);
  u.progress=u.progress||{};u.progress.tests=u.progress.tests||{};
  var prevB=u.progress.tests.b1||{meilleur:0,reussi:false};
  u.progress.tests.b1={meilleur:Math.max(prevB.meilleur||0,pct),reussi:!!(prevB.reussi||certified),dernier:pct};
  saveUser(id,u);
  var r=ex.result,pn=(part==="schriftlich")?"écrite":"orale";
  var msg=certified?"🏅 telc B1 — CERTIFIÉ ! Tu as réussi l'écrit ET l'oral. Le niveau B2 est débloqué. Ouvre l'app pour ta copie et ton PDF. Glückwunsch!":(r.passed?"✅ telc B1 — partie "+pn+" RÉUSSIE ("+r.total+"/"+r.sur+"). Il te reste "+(part==="schriftlich"?"l'oral":"l'écrit")+" pour le certificat. Ouvre l'app pour ta copie corrigée.":"📋 telc B1 — partie "+pn+" : "+r.total+"/"+r.sur+" (il faut "+r.seuil+"). Pas encore validée. Regarde ta copie corrigée dans l'app et repasse cette partie. 💪");
  if(BOT_TOKEN)tgSend(id,msg).catch(function(){});
  console.log("[exam] "+id+" telc B1 "+part+" corrigé: "+r.total+"/"+r.sur+(certified?" (CERTIFIÉ)":""));
  return "graded";
}
var examScanning=false;
async function scanPendingExams(){
  if(examScanning)return;examScanning=true;
  try{var now=Date.now();var users=listUsers();
    for(var i=0;i<users.length;i++){var u=users[i];if(!u||!u.id||!u.exams)continue;var keys=Object.keys(u.exams);
      for(var k=0;k<keys.length;k++){try{var ex=u.exams[keys[k]];
        if(ex&&ex.status==="pending"&&now-(Date.parse(ex.submittedAt)||0)>=GRADE_DELAY){await gradeExam(String(u.id),keys[k]);}
      }catch(e){console.warn("[exam-scan]",e&&e.message);}}
    }
  }finally{examScanning=false;}
}
const H={"Content-Type":"audio/mpeg","Cache-Control":"public, max-age=31536000, immutable"};
http.createServer(async(rq,rs)=>{try{
  const u=new URL(rq.url,"http://localhost");
  const ref=String(rq.headers.origin||rq.headers.referer||"");
  const matchRef=ref.indexOf(ALLOW)>=0||ref.indexOf("localhost")>=0||ref.indexOf("127.0.0.1")>=0;
  const ok=!ref||matchRef;          // tolérant : l'audio /tts garde l'accès même sans Referer (borné par le rate-limit + cache)
  const okStrict=!!ref&&matchRef;   // strict : exige une origine connue (endpoints fetch coûteux : chat, stt, voices)
  const ip=(rq.headers["x-forwarded-for"]||rq.socket.remoteAddress||"?").split(",")[0].trim();
  if(rq.method==="POST"&&/\/chat\/?$/.test(u.pathname)){
    if(!ANTHKEY){rs.writeHead(503);return rs.end("chat not configured (ANTHROPIC_API_KEY manquante)");}
    if(!okStrict){rs.writeHead(403);return rs.end("forbidden");}
    if(tooMany(ip)){rs.writeHead(429);return rs.end("slow down");}
    let data="";rq.on("data",d=>{data+=d;if(data.length>60000)rq.destroy();});
    rq.on("end",async()=>{try{
      const body=JSON.parse(data||"{}");const msgs=clean(body.messages);
      if(!msgs.length){rs.writeHead(400);return rs.end("no messages");}
      const v=tgVerify(body.initData);
      if(v&&v.user&&v.user.id){var __bu=loadUser(String(v.user.id));if(__bu&&__bu.blocked){rs.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});return rs.end(JSON.stringify({reply:"Ton acces au tuteur a ete suspendu par l'administration."}));}}
      let sys=sysPrompt(body.niveau,body.niveauParle,body.langue,body.mode,body.oral,body.unclear);
      if(v&&v.user&&v.user.first_name)sys+="L'apprenant s'appelle "+String(v.user.first_name).slice(0,40)+"; utilise son prenom de temps en temps, chaleureusement. ";
      const r=await anthropic(sys,msgs);
      if(r.status<200||r.status>=300){console.warn("[chat] upstream "+r.status+" "+r.buf.toString().slice(0,200));rs.writeHead(r.status===401?503:502);return rs.end("chat upstream "+r.status);}
      const j=JSON.parse(r.buf.toString());const reply=(j.content&&j.content[0]&&j.content[0].text)?j.content[0].text:"";
      rs.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});rs.end(JSON.stringify({reply:reply}));
      try{if(v&&v.user&&v.user.id){touchUser(v,function(us){us.conv=us.conv||{messages:[]};var lastU=msgs[msgs.length-1];if(lastU&&lastU.role==="user")us.conv.messages.push({role:"user",content:lastU.content,ts:Date.now()});us.conv.messages.push({role:"assistant",content:String(reply).slice(0,4000),ts:Date.now()});if(us.conv.messages.length>80)us.conv.messages=us.conv.messages.slice(-80);us.conv.updatedAt=new Date().toISOString();if(body.mode)us.lastMode=String(body.mode);});}}catch(e){console.warn("[chat-persist]",e&&e.message);}
    }catch(e){console.error("[chat]",e&&e.message);rs.writeHead(500);rs.end("chat error");}});
    return;
  }
  if(rq.method==="POST"&&/\/state\/?$/.test(u.pathname)){
    if(!BOT_TOKEN){rs.writeHead(503);return rs.end("state not configured");}
    if(tooMany(ip)){rs.writeHead(429);return rs.end("slow down");}
    let data="";rq.on("data",d=>{data+=d;if(data.length>400000)rq.destroy();});
    rq.on("end",function(){try{
      const body=JSON.parse(data||"{}");const v=tgVerify(body.initData);
      if(!v||!v.user||!v.user.id){rs.writeHead(403);return rs.end("bad initData");}
      const id=String(v.user.id);const before=loadUser(id);const isNew=!before;
      const usr=touchUser(v,function(us){
        var ref2=String(body.ref||v.start_param||"").replace(/[^0-9]/g,"");
        if(isNew&&ref2&&ref2!==id&&!us.referredBy)us.referredBy=ref2;
        if(body.progress&&typeof body.progress==="object")us.progress=mergeProg(us.progress,body.progress);
      });
      rs.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});
      return rs.end(JSON.stringify({ok:true,isNew:isNew,name:usr.name||"",first:(v.user.first_name||""),progress:usr.progress||{},conv:usr.conv||{messages:[]},isAdmin:isAdmin(id),isOwner:isOwner(id)}));
    }catch(e){console.error("[state]",e&&e.message);rs.writeHead(500);rs.end("state error");}});
    return;
  }
  if(rq.method==="POST"&&/\/exam\/?$/.test(u.pathname)){
    if(!BOT_TOKEN){rs.writeHead(503);return rs.end("exam not configured");}
    if(tooMany(ip)){rs.writeHead(429);return rs.end("slow down");}
    let data="";rq.on("data",d=>{data+=d;if(data.length>300000)rq.destroy();});
    rq.on("end",async()=>{try{
      const body=JSON.parse(data||"{}");const v=tgVerify(body.initData);
      if(!v||!v.user||!v.user.id){rs.writeHead(403);return rs.end("bad initData");}
      const id=String(v.user.id);const action=String(body.action||"result");
      const key=String(body.exam||"a2").replace(/[^a-z0-9-]/g,"").slice(0,24);
      if(action==="submit"){
        const payload=(body.payload&&typeof body.payload==="object")?body.payload:{};
        const us=touchUser(v,function(u2){u2.exams=u2.exams||{};u2.exams[key]={exam:key,status:"pending",submittedAt:new Date().toISOString(),payload:payload};});
        const sub=us.exams[key];
        rs.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});
        return rs.end(JSON.stringify({ok:true,status:"pending",submittedAt:sub.submittedAt,availableAt:Date.parse(sub.submittedAt)+GRADE_DELAY,delayMs:GRADE_DELAY}));
      }
      // action "result" (par défaut) : renvoie l'état de la copie <key>, en déclenchant la correction si l'échéance est atteinte.
      let ex=((loadUser(id)||{}).exams||{})[key];
      if(ex&&ex.status==="pending"){
        const due=Date.now()-(Date.parse(ex.submittedAt)||0)>=GRADE_DELAY;
        const force=!!body.force&&isOwner(id,body.key);
        if(due||force)await gradeExam(id,key);
        ex=((loadUser(id)||{}).exams||{})[key];
      }
      rs.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});
      if(!ex)return rs.end(JSON.stringify({status:"none"}));
      if(ex.status==="graded")return rs.end(JSON.stringify({status:"graded",exam:ex.exam,submittedAt:ex.submittedAt,gradedAt:ex.gradedAt,result:ex.result,copy:(ex.payload&&ex.payload.copy)||null}));
      return rs.end(JSON.stringify({status:"pending",exam:ex.exam,submittedAt:ex.submittedAt,availableAt:(Date.parse(ex.submittedAt)||Date.now())+GRADE_DELAY,delayMs:GRADE_DELAY}));
    }catch(e){console.error("[exam]",e&&e.message);rs.writeHead(500);rs.end("exam error");}});
    return;
  }
  if(rq.method==="POST"&&/\/stt\/?$/.test(u.pathname)){
    if(!KEY){rs.writeHead(503);return rs.end("stt not configured");}
    if(!okStrict){rs.writeHead(403);return rs.end("forbidden");}
    if(tooMany(ip)){rs.writeHead(429);return rs.end("slow down");}
    const chunks=[];let len=0;rq.on("data",d=>{chunks.push(d);len+=d.length;if(len>9000000)rq.destroy();});
    rq.on("end",async()=>{try{
      const audio=Buffer.concat(chunks);if(!audio.length){rs.writeHead(400);return rs.end("no audio");}
      const r=await stt(audio,rq.headers["content-type"]);
      if(r.status<200||r.status>=300){console.warn("[stt] upstream "+r.status+" "+r.buf.toString().slice(0,200));rs.writeHead(r.status===401?503:502);return rs.end("stt upstream "+r.status);}
      let text="",words=[];try{const jj=JSON.parse(r.buf.toString());text=jj.text||"";if(Array.isArray(jj.words))words=jj.words.filter(w=>w&&w.type==="word").map(w=>({w:w.text,lp:(typeof w.logprob==="number")?+w.logprob.toFixed(3):0}));}catch(e){}
      rs.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});rs.end(JSON.stringify({text:text,words:words}));
    }catch(e){console.error("[stt]",e&&e.message);rs.writeHead(500);rs.end("stt error");}});
    return;
  }
  if(rq.method==="POST"&&/\/notify\/?$/.test(u.pathname)){
    if(!BOT_TOKEN){rs.writeHead(503);return rs.end("notify not configured");}
    if(tooMany(ip)){rs.writeHead(429);return rs.end("slow down");}
    let data="";rq.on("data",d=>{data+=d;if(data.length>10000)rq.destroy();});
    rq.on("end",function(){try{
      const body=JSON.parse(data||"{}");const id=tgUserId(body.initData);
      if(!id){rs.writeHead(403);return rs.end("bad initData");}
      const subs=loadSubs();
      if(body.action==="off"){delete subs[id];}else{subs[id]={heure:String(body.heure||"19:00").slice(0,5),last:(subs[id]&&subs[id].last)||""};}
      saveSubs(subs);
      rs.writeHead(200,{"Content-Type":"application/json"});return rs.end(JSON.stringify({ok:true,sub:body.action!=="off"}));
    }catch(e){console.error("[notify]",e&&e.message);rs.writeHead(500);rs.end("notify error");}});
    return;
  }
  if(rq.method==="POST"&&/\/admin\/?$/.test(u.pathname)){
    if(tooMany(ip)){rs.writeHead(429);return rs.end("slow down");}
    let data="";rq.on("data",d=>{data+=d;if(data.length>10000)rq.destroy();});
    rq.on("end",function(){try{
      const body=JSON.parse(data||"{}");const id=tgUserId(body.initData);
      const owner=isOwner(id,body.key);const admin=owner||isAdmin(id,body.key);
      if(!admin){rs.writeHead(403,{"Content-Type":"application/json"});return rs.end(JSON.stringify({error:"forbidden",viewerId:id||null,adminConfigured:!!(ADMIN_ID||ADMIN_TOKEN)}));}
      if(body.action){if(body.action==="admin-add"||body.action==="admin-remove"){if(!owner){rs.writeHead(403,{"Content-Type":"application/json"});return rs.end(JSON.stringify({error:"owner_only"}));}var atgt=String(body.target||"").replace(/[^0-9]/g,"");if(!atgt){rs.writeHead(400,{"Content-Type":"application/json"});return rs.end(JSON.stringify({error:"no target"}));}var adm=loadAdmins();if(body.action==="admin-add"){if(ADMIN_ID&&atgt===String(ADMIN_ID)){rs.writeHead(400,{"Content-Type":"application/json"});return rs.end(JSON.stringify({error:"already_owner"}));}var au=loadUser(atgt)||{};adm[atgt]={addedBy:id||"token",addedAt:new Date().toISOString(),name:au.name||"",username:au.username||""};saveAdmins(adm);logAction(id,"admin-add",atgt);console.log("[admin] +admin "+atgt+" par "+(id||"token"));rs.writeHead(200,{"Content-Type":"application/json"});return rs.end(JSON.stringify({ok:true,action:"admin-add",target:atgt}));}delete adm[atgt];saveAdmins(adm);logAction(id,"admin-remove",atgt);console.log("[admin] -admin "+atgt+" par "+(id||"token"));rs.writeHead(200,{"Content-Type":"application/json"});return rs.end(JSON.stringify({ok:true,action:"admin-remove",target:atgt}));}if(body.action==="broadcast"){if(!BOT_TOKEN){rs.writeHead(503,{"Content-Type":"application/json"});return rs.end(JSON.stringify({error:"bot non configure"}));}var bmsg=String(body.message||"").slice(0,4000);if(!bmsg.trim()){rs.writeHead(400,{"Content-Type":"application/json"});return rs.end(JSON.stringify({error:"message vide"}));}var bflt=body.filter||{};var bnow=Date.now();var bids=listUsers().filter(function(bu){if(!bu||!bu.id||bu.blocked)return false;var bp=bu.progress||{};if(bflt.level&&derivedLevel(bp)!==bflt.level)return false;var blg=(bp.reglages&&bp.reglages.langue)||bu.tgLang||"?";if(bflt.lang&&blg!==bflt.lang)return false;var bls=Date.parse(bu.lastSeen||"")||0;var bh=bls?(bnow-bls)/3600000:1e9;if(bflt.activity==="actif"&&!(bh<=48))return false;if(bflt.activity==="peu"&&!(bh>48&&bh<=168))return false;if(bflt.activity==="inactif"&&!(bh>168))return false;if(bflt.inactiveDays&&!(bh>(+bflt.inactiveDays||0)*24))return false;return true;}).map(function(bu){return String(bu.id);});var bseg=[bflt.level,bflt.lang,bflt.activity,bflt.inactiveDays?(">"+bflt.inactiveDays+"j"):""].filter(Boolean).join("/");rs.writeHead(200,{"Content-Type":"application/json"});rs.end(JSON.stringify({ok:true,action:"broadcast",count:bids.length}));logAction(id,"broadcast",bids.length+" destinataires"+(bseg?" ["+bseg+"]":""));console.log("[admin] broadcast vers "+bids.length+" users par "+(id||"token"));var bx=0;(function bnext(){if(bx>=bids.length){console.log("[admin] broadcast termine ("+bids.length+")");return;}tgSend(bids[bx++],bmsg).catch(function(){});setTimeout(bnext,40);})();return;}if(body.action==="dm"){if(!BOT_TOKEN){rs.writeHead(503,{"Content-Type":"application/json"});return rs.end(JSON.stringify({error:"bot non configure"}));}var dtgt=String(body.target||"").replace(/[^0-9]/g,"");var dmsg=String(body.message||"").slice(0,4000);if(!dtgt||!dmsg.trim()){rs.writeHead(400,{"Content-Type":"application/json"});return rs.end(JSON.stringify({error:"cible ou message manquant"}));}tgSend(dtgt,dmsg).catch(function(){});logAction(id,"dm","-> "+dtgt);rs.writeHead(200,{"Content-Type":"application/json"});return rs.end(JSON.stringify({ok:true,action:"dm",target:dtgt}));}var tgt=String(body.target||"").replace(/[^0-9]/g,"");if(!tgt){rs.writeHead(400,{"Content-Type":"application/json"});return rs.end(JSON.stringify({error:"no target"}));}var act=String(body.action);if(act==="delete"){try{fs.unlinkSync(uFile(tgt));}catch(e){}logAction(id,"delete",tgt);console.log("[admin] delete "+tgt+" par "+(id||"token"));rs.writeHead(200,{"Content-Type":"application/json"});return rs.end(JSON.stringify({ok:true,action:"delete",target:tgt}));}if(act==="block"||act==="unblock"){var tu=loadUser(tgt);if(!tu){rs.writeHead(404,{"Content-Type":"application/json"});return rs.end(JSON.stringify({error:"not found"}));}tu.blocked=(act==="block");saveUser(tgt,tu);logAction(id,act,tgt);console.log("[admin] "+act+" "+tgt+" par "+(id||"token"));rs.writeHead(200,{"Content-Type":"application/json"});return rs.end(JSON.stringify({ok:true,action:act,target:tgt,blocked:tu.blocked}));}rs.writeHead(400,{"Content-Type":"application/json"});return rs.end(JSON.stringify({error:"unknown action"}));}
      const users=listUsers();const d7=Date.now()-7*864e5;
      const byLevel={},byLang={},refCount={};let total=users.length,new7=0,act7=0,msgs=0;
      const rows=users.map(function(u2){var p=u2.progress||{};var lv=derivedLevel(p);var __sm=0,__tp=p.temps||{};Object.keys(__tp).forEach(function(__d){__sm+=(+__tp[__d]||0);});byLevel[lv]=(byLevel[lv]||0)+1;var lg=(p.reglages&&p.reglages.langue)||u2.tgLang||"?";byLang[lg]=(byLang[lg]||0)+1;if(u2.referredBy)refCount[u2.referredBy]=(refCount[u2.referredBy]||0)+1;var c=Date.parse(u2.createdAt||"")||0;if(c>d7)new7++;var s=Date.parse(u2.lastSeen||"")||0;if(s>d7)act7++;var m=(u2.conv&&u2.conv.messages&&u2.conv.messages.length)||0;msgs+=m;return {id:u2.id,name:u2.name||"",username:u2.username||"",lvl:lv,lang:lg,streak:p.streak||0,lastSeen:u2.lastSeen||"",createdAt:u2.createdAt||"",msgs:m,referredBy:u2.referredBy||"",blocked:!!u2.blocked,done:Object.keys(p.lecons||{}).filter(function(k){return p.lecons[k]&&p.lecons[k].termine;}).length,exams:Object.keys(p.tests||{}).filter(function(k){return p.tests[k]&&p.tests[k].reussi;}).length,studyMin:__sm};});
      const byId={};rows.forEach(function(r){byId[r.id]=r;r.invited=0;});
      Object.keys(refCount).forEach(function(k){if(byId[k])byId[k].invited=refCount[k];});
      rows.sort(function(a,b){return (Date.parse(b.lastSeen||"")||0)-(Date.parse(a.lastSeen||"")||0);});
      const topRef=Object.keys(refCount).map(function(k){return {id:k,name:(byId[k]&&byId[k].name)||"",count:refCount[k]};}).sort(function(a,b){return b.count-a.count;}).slice(0,10);
      var __adm=loadAdmins();var __admList=Object.keys(__adm).map(function(aid){var d=__adm[aid]||{};var lu=loadUser(aid)||{};return {id:aid,name:d.name||lu.name||"",username:d.username||lu.username||"",addedAt:d.addedAt||""};});
      rs.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});
      return rs.end(JSON.stringify({ok:true,isOwner:owner,ownerId:String(ADMIN_ID||""),admins:__admList,stats:{total:total,new7:new7,active7:act7,messages:msgs,byLevel:byLevel,byLang:byLang,topReferrers:topRef,competences:compStats(users)},users:rows,auditLog:loadAudit().slice(-60).reverse()}));
    }catch(e){console.error("[admin]",e&&e.message);rs.writeHead(500);rs.end("admin error");}});
    return;
  }
  if(rq.method!=="GET"){rs.writeHead(405);return rs.end("method");}
  if(/\/botinfo\/?$/.test(u.pathname)){
    if(!BOT_USERNAME&&BOT_TOKEN){try{const gm=await call({hostname:"api.telegram.org",path:"/bot"+BOT_TOKEN+"/getMe",method:"GET",headers:{}});const jj=JSON.parse(gm.buf.toString());if(jj&&jj.ok&&jj.result&&jj.result.username)BOT_USERNAME=jj.result.username;}catch(e){}}
    rs.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"public, max-age=3600"});return rs.end(JSON.stringify({username:BOT_USERNAME||""}));
  }
  if(/\/voices\/?$/.test(u.pathname)){if(!KEY){rs.writeHead(503);return rs.end("no key");}if(!okStrict){rs.writeHead(403);return rs.end("forbidden");}const l=await listVoices();rs.writeHead(200,{"Content-Type":"application/json; charset=utf-8"});return rs.end(JSON.stringify(l.map(v=>({id:v.voice_id,name:v.name,category:v.category})),null,2));}
  if(/\/cache\/?$/.test(u.pathname)){let n=0,b=0;try{for(const f of fs.readdirSync(CACHE_DIR))if(f.endsWith(".mp3")){n++;b+=fs.statSync(path.join(CACHE_DIR,f)).size;}}catch(e){}rs.writeHead(200,{"Content-Type":"application/json"});return rs.end(JSON.stringify({fichiers:n,megaoctets:+(b/1048576).toFixed(2)},null,2));}
  if(!/\/tts\/?$/.test(u.pathname)){rs.writeHead(404);return rs.end("not found");}
  const text=(u.searchParams.get("text")||"").slice(0,1000).trim();
  const rv=(u.searchParams.get("v")||"").replace(/[^a-zA-Z0-9]/g,"");
  if(!text){rs.writeHead(400);return rs.end("missing text");}
  if(!KEY){rs.writeHead(503);return rs.end("no key");}
  if(!ok){rs.writeHead(403);return rs.end("forbidden");}
  const v=rv||goodVoice,file=path.join(CACHE_DIR,ckey(v,text)+".mp3");
  if(fs.existsSync(file)){rs.writeHead(200,Object.assign({"X-TTS-Cache":"HIT"},H));return fs.createReadStream(file).on("error",()=>{try{rs.end();}catch(e){}}).pipe(rs);}
  if(tooMany(ip)){rs.writeHead(429);return rs.end("slow down");}
  const r=await synth(v,text);
  if(r.status<200||r.status>=300){rs.writeHead(r.status===401?503:502);return rs.end("tts upstream "+r.status);}
  const tmp=file+"."+process.pid+".tmp";
  fs.writeFile(tmp,r.buf,e=>{if(e){try{fs.unlinkSync(tmp);}catch(_){}return;}fs.rename(tmp,file,()=>{});});
  rs.writeHead(200,Object.assign({"X-TTS-Cache":"MISS"},H));return rs.end(r.buf);
}catch(e){console.error("[srv]",e&&e.message);rs.writeHead(500);return rs.end("error");}}).listen(PORT,"127.0.0.1",()=>console.log("TTS+chat+stt+notify+state+admin -> 127.0.0.1:"+PORT+" (tts:"+(KEY?"OK":"X")+", chat:"+(ANTHKEY?"OK":"X")+", notify:"+(BOT_TOKEN?"OK":"X")+", admin:"+((ADMIN_ID||ADMIN_TOKEN)?"OK":"X")+", data:"+DATA_DIR+")"));
setInterval(sendReminders,15*60*1000);
// Examen DELF : scan régulier des copies en attente → correction à l'échéance (24 h).
setInterval(function(){scanPendingExams();},15*60*1000);
setTimeout(function(){scanPendingExams();},30*1000);
