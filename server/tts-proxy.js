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
try{fs.mkdirSync(CACHE_DIR,{recursive:true});}catch(e){console.warn("[tts] cache:",e.message);}
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
function sysPrompt(niveau,niveauParle,langue,mode,oral,unclear){const n=String(niveau||"A1").toUpperCase(),np=String(niveauParle||niveau||"A1").toUpperCase(),lg=String(langue||"fr"),m=String(mode||"");const deb=(n==="A1"||n==="A2");let s="Tu es un tuteur d'allemand bienveillant et patient. L'apprenant a le niveau "+n+". Langue de l'apprenant (code): "+lg+". ";s+="IMPORTANT: adresse-toi a lui en allemand de niveau "+np+" (vocabulaire et grammaire de ce niveau), soit un cran sous son niveau reel des qu'il est B1 ou plus, pour qu'il comprenne facilement. ";s+=deb?"Explique les regles et le vocabulaire DANS LA LANGUE DE L'APPRENANT, mais donne toujours les exemples en allemand simple (niveau "+np+"). Phrases courtes. ":"Reponds PRINCIPALEMENT EN ALLEMAND (niveau "+np+"); clarifie tres brievement dans la langue de l'apprenant seulement si vraiment necessaire. ";s+="Corrige gentiment les fautes (forme correcte + courte explication). Encourage, reste concis (style conversation), et termine souvent par une petite question pour faire parler l'apprenant. ";if(m==="pflege")s+="CONTEXTE SPECIAL: allemand pour les soins infirmiers (Deutsch fuer die Pflege). Propose des jeux de role realistes (patient, collegue infirmier, medecin), enseigne le vocabulaire medical et les tournures professionnelles, et la facon de documenter/communiquer en milieu de soins. ";if(m==="grammaire"){s+="MODE DRILL GRAMMAIRE: tu es un coach de grammaire interactif. Si aucun point n'est encore choisi, demande a l'apprenant quel point il veut travailler ou propose-en un adapte a son niveau (prepositions temporelles, cas et declinaisons, Konjunktiv, ordre des mots, verbes a prepositions...). Une fois le point choisi: rappelle la regle en 2-3 phrases simples dans sa langue, puis enchaine des EXERCICES UN PAR UN (phrase a completer, choix multiple, ou corrige l'erreur). Attends sa reponse, corrige tout de suite et brievement, felicite, puis propose le suivant un peu plus difficile. Apres environ 5 exercices, fais un mini-bilan et propose de continuer ou de changer de point. Reste concis et interactif. ";}else if(m==="expression"||m==="prononciation"){s+="MODE EXPRESSION ET PRONONCIATION: tu es un coach d'expression orale et de confiance; l'apprenant a valide A1+A2 et STRESSE de parler. PARLE-LUI EN ALLEMAND de niveau "+np+" (un cran sous le sien, pour qu'il comprenne), MAIS pousse-le a PRODUIRE au niveau "+n+", c'est-a-dire a utiliser SA grammaire et des phrases plus riches de son niveau pour s'exprimer librement et communiquer sans souci. Deroulement: propose un petit defi ou sujet a sa portee et fais-le parler AU MICRO, de plus en plus longtemps. A chaque reponse (transcrite de sa voix): 1) retour CONFIANCE et COMMUNICATION d'abord (felicite-le d'avoir ose, dis si le message passe), 2) reformule sa phrase en mieux + 1 ou 2 corrections en douceur, 3) PRONONCIATION: si des mots sont signales peu clairs, dis lesquels et donne un conseil concret pour le son allemand concerne (u-Umlaut, o-Umlaut, ch doux/dur, r, sch, z, w...), 4) invite-le a redire la phrase en visant le niveau "+n+", 5) propose le defi suivant un peu plus ambitieux (se presenter, donner un avis, raconter, mini-presentation, entretien, parler devant un public). Donne des amorces utiles (Also..., Ich denke..., Meiner Meinung nach...). Reste chaleureux et bref. ";}else if(oral){s+="MODE ORAL: l'apprenant s'ENTRAINE A PARLER; sa phrase vient d'etre transcrite de sa voix (il peut y avoir des hesitations ou des erreurs de transcription, ignore-les). Aide-le a s'exprimer: 1) reformule sa phrase de facon correcte et naturelle (niveau "+np+"), 2) une astuce courte pour mieux dire, 3) encourage-le chaleureusement car il STRESSE a l'oral, 4) propose une petite mise en situation ou une question simple pour qu'il continue a parler a voix haute. Sois bref, chaleureux, comme un coach de prise de parole. ";}if(Array.isArray(unclear)&&unclear.length)s+="INDICE: ces mots ont ete mal compris a la transcription (donc probablement mal prononces): "+unclear.join(", ")+". Concentre tes conseils de prononciation dessus. ";return s;}
function clean(msgs){if(!Array.isArray(msgs))return [];return msgs.slice(-20).map(m=>({role:(m&&m.role==="assistant")?"assistant":"user",content:String((m&&m.content)||"").slice(0,4000)})).filter(m=>m.content);}
function loadSubs(){try{return JSON.parse(fs.readFileSync(SUBS,"utf8"))||{};}catch(e){return {};}}
function saveSubs(o){try{fs.writeFileSync(SUBS,JSON.stringify(o));}catch(e){}}
function tgUserId(initData){try{if(!BOT_TOKEN||!initData)return null;var p=new URLSearchParams(initData);var hash=p.get("hash");p.delete("hash");var a=[];p.forEach(function(v,k){a.push(k+"="+v);});a.sort();var dcs=a.join("\n");var secret=crypto.createHmac("sha256","WebAppData").update(BOT_TOKEN).digest();var calc=crypto.createHmac("sha256",secret).update(dcs).digest("hex");if(calc!==hash)return null;var us=JSON.parse(p.get("user")||"{}");return us.id?String(us.id):null;}catch(e){return null;}}
function tgSend(chat,text){var body=JSON.stringify({chat_id:chat,text:text});return call({hostname:"api.telegram.org",path:"/bot"+BOT_TOKEN+"/sendMessage",method:"POST",headers:{"content-type":"application/json","content-length":Buffer.byteLength(body)}},body);}
function sendReminders(){if(!BOT_TOKEN)return;var subs=loadSubs();var now=new Date();var mins=now.getHours()*60+now.getMinutes();var today=now.toISOString().slice(0,10);var changed=false;Object.keys(subs).forEach(function(id){var sb=subs[id];if(!sb||sb.last===today)return;var t=String(sb.heure||"19:00").split(":");var due=parseInt(t[0],10)*60+parseInt(t[1]||"0",10);if(mins>=due&&mins<due+90){tgSend(id,"⏰ Coach Zika: 5 minutes d'allemand aujourd'hui pour garder ta serie ! sprachakademie.app").catch(function(){});sb.last=today;changed=true;}});if(changed)saveSubs(subs);}
const H={"Content-Type":"audio/mpeg","Cache-Control":"public, max-age=31536000, immutable"};
http.createServer(async(rq,rs)=>{try{
  const u=new URL(rq.url,"http://localhost");
  const ref=String(rq.headers.origin||rq.headers.referer||"");
  const ok=!ref||ref.indexOf("sprachakademie.app")>=0||ref.indexOf("localhost")>=0||ref.indexOf("127.0.0.1")>=0;
  const ip=(rq.headers["x-forwarded-for"]||rq.socket.remoteAddress||"?").split(",")[0].trim();
  if(rq.method==="POST"&&/\/chat\/?$/.test(u.pathname)){
    if(!ANTHKEY){rs.writeHead(503);return rs.end("chat not configured (ANTHROPIC_API_KEY manquante)");}
    if(!ok){rs.writeHead(403);return rs.end("forbidden");}
    if(tooMany(ip)){rs.writeHead(429);return rs.end("slow down");}
    let data="";rq.on("data",d=>{data+=d;if(data.length>40000)rq.destroy();});
    rq.on("end",async()=>{try{
      const body=JSON.parse(data||"{}");const msgs=clean(body.messages);
      if(!msgs.length){rs.writeHead(400);return rs.end("no messages");}
      const r=await anthropic(sysPrompt(body.niveau,body.niveauParle,body.langue,body.mode,body.oral,body.unclear),msgs);
      if(r.status<200||r.status>=300){console.warn("[chat] upstream "+r.status+" "+r.buf.toString().slice(0,200));rs.writeHead(r.status===401?503:502);return rs.end("chat upstream "+r.status);}
      const j=JSON.parse(r.buf.toString());const reply=(j.content&&j.content[0]&&j.content[0].text)?j.content[0].text:"";
      rs.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});rs.end(JSON.stringify({reply:reply}));
    }catch(e){console.error("[chat]",e&&e.message);rs.writeHead(500);rs.end("chat error");}});
    return;
  }
  if(rq.method==="POST"&&/\/stt\/?$/.test(u.pathname)){
    if(!KEY){rs.writeHead(503);return rs.end("stt not configured");}
    if(!ok){rs.writeHead(403);return rs.end("forbidden");}
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
  if(rq.method!=="GET"){rs.writeHead(405);return rs.end("method");}
  if(/\/voices\/?$/.test(u.pathname)){if(!KEY){rs.writeHead(503);return rs.end("no key");}if(!ok){rs.writeHead(403);return rs.end("forbidden");}const l=await listVoices();rs.writeHead(200,{"Content-Type":"application/json; charset=utf-8"});return rs.end(JSON.stringify(l.map(v=>({id:v.voice_id,name:v.name,category:v.category})),null,2));}
  if(/\/cache\/?$/.test(u.pathname)){let n=0,b=0;try{for(const f of fs.readdirSync(CACHE_DIR))if(f.endsWith(".mp3")){n++;b+=fs.statSync(path.join(CACHE_DIR,f)).size;}}catch(e){}rs.writeHead(200,{"Content-Type":"application/json"});return rs.end(JSON.stringify({fichiers:n,megaoctets:+(b/1048576).toFixed(2),dossier:CACHE_DIR},null,2));}
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
}catch(e){console.error("[srv]",e&&e.message);rs.writeHead(500);return rs.end("error");}}).listen(PORT,"127.0.0.1",()=>console.log("TTS+chat+stt+notify -> 127.0.0.1:"+PORT+" (tts:"+(KEY?"OK":"X")+", chat:"+(ANTHKEY?"OK":"X")+", notify:"+(BOT_TOKEN?"OK":"X")+", voix "+(CONFIG_VOICE||"auto")+")"));
setInterval(sendReminders,15*60*1000);
