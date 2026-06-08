#!/usr/bin/env python3
# Supports publicitaires QR — Sprachakademie (https://sprachakademie.app)
# QR seul (SVG + PNG) + affiches A4 (PNG 300dpi, PDF, SVG vecteur) en FR et DE (A2).
import os, segno
from PIL import Image, ImageDraw, ImageFont

URL="https://sprachakademie.app"; SHOWN="sprachakademie.app"
OUT=os.path.dirname(os.path.abspath(__file__)); os.makedirs(OUT, exist_ok=True)
NAVY="#1e3a8a"; INK="#0f172a"; MUTE="#475569"; SOFT="#64748b"
BLUE="#2563eb"; VIO="#7c3aed"; CARDBG="#f1f5f9"; CARDLN="#cbd5e1"
FLAG=("#000000","#dd0000","#ffce00")
FREG="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FBLD="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

# Textes par langue. DE = niveau A2 (phrases simples, vocabulaire courant).
TXT={
 "fr":{"tag":"DEUTSCH LERNEN · A1 → C2","h1":"Apprends","h2":"l'allemand",
       "sub":"Du débutant (A1) à l'expert (C2)",
       "f1":"Cours · Vocabulaire · Grammaire · Dialogues audio",
       "f2":"Tuteur IA · Coach de prononciation · Examens DELF & telc",
       "scan":"SCANNE-MOI","cta":"Scanne & commence maintenant",
       "foot":"Apprends à ton rythme, où que tu sois."},
 "de":{"tag":"DEUTSCH LERNEN · A1 → C2","h1":"Lerne","h2":"Deutsch",
       "sub":"Von Anfänger (A1) bis Profi (C2)",
       "f1":"Kurse · Wortschatz · Grammatik · Dialoge",
       "f2":"KI-Tutor · Aussprache-Coach · Prüfungen DELF & telc",
       "scan":"SCANN MICH","cta":"Jetzt scannen und starten!",
       "foot":"Lern in deinem Tempo, wo du willst."},
}

qr=segno.make(URL,error="q")
MAT=[[bool(c) for c in row] for row in qr.matrix]; N=len(MAT)
qr.save(os.path.join(OUT,"qr-sprachakademie.svg"),border=4,scale=16,dark=NAVY)
qr.save(os.path.join(OUT,"qr-sprachakademie.png"),border=4,scale=24,dark=NAVY)

W,H=2480,3508; MX=200; CX=W//2
_meas=ImageDraw.Draw(Image.new("RGB",(8,8)))
def font(sz,b=True): return ImageFont.truetype(FBLD if b else FREG,sz)
def tw(s,f): return _meas.textlength(s,font=f)
def fit(s,maxw,start,minsz,b=True):
    sz=start
    while sz>minsz and tw(s,font(sz,b))>maxw: sz-=4
    return sz
def hx(c): c=c.lstrip("#"); return tuple(int(c[i:i+2],16) for i in (0,2,4))

def layout(T):
    ops=[]
    ops.append(("band",MX,150,W-2*MX,370,28,NAVY))
    ops.append(("flag",MX+70,250,150,170))
    ops.append(("text","l",MX+290,250,"SPRACHAKADEMIE",96,True,"#ffffff"))
    ops.append(("text","l",MX+292,378,T["tag"],46,False,"#bfdbfe"))
    y=690
    hsz=fit(T["h2"],W-2*MX,210,120); hsz=min(hsz,fit(T["h1"],W-2*MX,210,120))
    ops.append(("text","c",CX,y,T["h1"],hsz,True,INK)); y+=int(hsz*1.02)
    ops.append(("text","c",CX,y,T["h2"],hsz,True,BLUE)); y+=int(hsz*0.96)+30
    ops.append(("text","c",CX,y,T["sub"],64,True,MUTE)); y+=64+58
    ops.append(("text","c",CX,y,T["f1"],44,False,SOFT)); y+=44+12
    ops.append(("text","c",CX,y,T["f2"],44,False,SOFT)); y+=44+62
    pw=tw(T["scan"],font(52,True))+120; ph=104
    ops.append(("pill",CX,y,pw,ph,"#fef3c7",T["scan"],52,"#92400e")); y+=ph+54
    qr_px=1010; card=qr_px+250
    ops.append(("card",CX,y,card,card,46,CARDBG,CARDLN))
    ops.append(("qr",CX,y+card//2,qr_px)); y+=card+78
    cw=tw(T["cta"],font(72,True))+190; chh=170
    ops.append(("grad",CX,y,cw,chh,T["cta"],72)); y+=chh+62
    ops.append(("text","c",CX,y,SHOWN,92,True,NAVY)); y+=92+30
    ops.append(("text","c",CX,y,T["foot"],44,False,SOFT)); y+=44
    return ops,y

def render_png(ops,suffix):
    img=Image.new("RGB",(W,H),"white"); d=ImageDraw.Draw(img)
    def asc(f): return f.getbbox("Ag")[1]
    def flag(x,y,w,h,r=12):
        b=h/3
        for i,col in enumerate(FLAG): d.rectangle([x,y+i*b,x+w,y+(i+1)*b],fill=col)
        d.rounded_rectangle([x,y,x+w,y+h],radius=r,outline="#ffffff",width=3)
    for op in ops:
        k=op[0]
        if k=="band": _,x,yy,w,h,r,fl=op; d.rounded_rectangle([x,yy,x+w,yy+h],radius=r,fill=fl)
        elif k=="flag": flag(op[1],op[2],op[3],op[4])
        elif k=="text":
            _,an,x,yy,s,sz,b,fl=op; f=font(sz,b); xx=x-(tw(s,f)/2 if an=="c" else 0)
            d.text((xx,yy-asc(f)),s,font=f,fill=fl)
        elif k=="pill":
            _,cx,yy,w,h,fl,s,sz,tc=op; d.rounded_rectangle([cx-w/2,yy,cx+w/2,yy+h],radius=h/2,fill=fl)
            f=font(sz,True); bb=f.getbbox(s); d.text((cx-tw(s,f)/2,yy+h/2-(bb[3]-bb[1])/2-bb[1]),s,font=f,fill=tc)
        elif k=="card":
            _,cx,yy,w,h,r,fl,ln=op; d.rounded_rectangle([cx-w/2,yy,cx+w/2,yy+h],radius=r,fill=fl,outline=ln,width=4)
        elif k=="qr":
            _,cx,cy,size=op; mod=size//N; q0x=cx-(mod*N)//2; q0y=cy-(mod*N)//2
            d.rounded_rectangle([q0x-mod*3,q0y-mod*3,q0x+mod*N+mod*3,q0y+mod*N+mod*3],radius=24,fill="#ffffff")
            col=hx(NAVY)
            for r in range(N):
                for c in range(N):
                    if MAT[r][c]: d.rectangle([q0x+c*mod,q0y+r*mod,q0x+c*mod+mod,q0y+r*mod+mod],fill=col)
        elif k=="grad":
            _,cx,yy,w,h,s,sz=op; x0=int(cx-w/2)
            g=Image.new("RGB",(int(w),h)); gd=ImageDraw.Draw(g); a=hx(BLUE); b2=hx(VIO)
            for i in range(int(w)):
                t=i/max(1,w-1); gd.line([(i,0),(i,h)],fill=tuple(int(a[k2]+(b2[k2]-a[k2])*t) for k2 in range(3)))
            m=Image.new("L",(int(w),h),0); ImageDraw.Draw(m).rounded_rectangle([0,0,int(w)-1,h-1],radius=h//2,fill=255)
            img.paste(g,(x0,yy),m); f=font(sz,True); bb=f.getbbox(s)
            d.text((cx-tw(s,f)/2,yy+h/2-(bb[3]-bb[1])/2-bb[1]),s,font=f,fill="#ffffff")
    img.save(os.path.join(OUT,f"affiche-sprachakademie-{suffix}.png"),"PNG")
    img.save(os.path.join(OUT,f"affiche-sprachakademie-{suffix}.pdf"),"PDF",resolution=300.0)

def render_svg(ops,suffix):
    sw,sh=827,1169; sc=sw/W
    def S(v): return round(v*sc,2)
    def esc(s): return s.replace("&","&amp;").replace("<","&lt;")
    P=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{sw}" height="{sh}" viewBox="0 0 {sw} {sh}" font-family="Helvetica,Arial,sans-serif">',
       f'<rect width="{sw}" height="{sh}" fill="#fff"/>',
       f'<defs><linearGradient id="g"><stop offset="0" stop-color="{BLUE}"/><stop offset="1" stop-color="{VIO}"/></linearGradient></defs>']
    def flag(x,y,w,h):
        b=h/3
        for i,col in enumerate(FLAG): P.append(f'<rect x="{S(x)}" y="{S(y+i*b)}" width="{S(w)}" height="{S(b)}" fill="{col}"/>')
        P.append(f'<rect x="{S(x)}" y="{S(y)}" width="{S(w)}" height="{S(h)}" fill="none" stroke="#fff"/>')
    for op in ops:
        k=op[0]
        if k=="band": _,x,yy,w,h,r,fl=op; P.append(f'<rect x="{S(x)}" y="{S(yy)}" width="{S(w)}" height="{S(h)}" rx="{S(r)}" fill="{fl}"/>')
        elif k=="flag": flag(op[1],op[2],op[3],op[4])
        elif k=="text":
            _,an,x,yy,s,sz,b,fl=op; P.append(f'<text x="{S(x)}" y="{S(yy+sz*0.78)}" font-size="{S(sz)}" font-weight="{"bold" if b else "normal"}" fill="{fl}" text-anchor="{"middle" if an=="c" else "start"}">{esc(s)}</text>')
        elif k=="pill":
            _,cx,yy,w,h,fl,s,sz,tc=op; P.append(f'<rect x="{S(cx-w/2)}" y="{S(yy)}" width="{S(w)}" height="{S(h)}" rx="{S(h/2)}" fill="{fl}"/>')
            P.append(f'<text x="{S(cx)}" y="{S(yy+h/2+sz*0.34)}" font-size="{S(sz)}" font-weight="bold" fill="{tc}" text-anchor="middle">{esc(s)}</text>')
        elif k=="card":
            _,cx,yy,w,h,r,fl,ln=op; P.append(f'<rect x="{S(cx-w/2)}" y="{S(yy)}" width="{S(w)}" height="{S(h)}" rx="{S(r)}" fill="{fl}" stroke="{ln}" stroke-width="2"/>')
        elif k=="qr":
            _,cx,cy,size=op; mod=size/N; q0x=cx-mod*N/2; q0y=cy-mod*N/2
            P.append(f'<rect x="{S(q0x-mod*3)}" y="{S(q0y-mod*3)}" width="{S(mod*N+mod*6)}" height="{S(mod*N+mod*6)}" rx="6" fill="#fff"/>')
            rs=[]
            for r in range(N):
                run=0
                for c in range(N+1):
                    on=c<N and MAT[r][c]
                    if on: run+=1
                    elif run: rs.append(f'<rect x="{round(S(q0x+(c-run)*mod),2)}" y="{round(S(q0y+r*mod),2)}" width="{round(S(run*mod)+0.3,2)}" height="{round(S(mod)+0.3,2)}"/>'); run=0
            P.append(f'<g fill="{NAVY}">'+''.join(rs)+'</g>')
        elif k=="grad":
            _,cx,yy,w,h,s,sz=op; P.append(f'<rect x="{S(cx-w/2)}" y="{S(yy)}" width="{S(w)}" height="{S(h)}" rx="{S(h/2)}" fill="url(#g)"/>')
            P.append(f'<text x="{S(cx)}" y="{S(yy+h/2+sz*0.34)}" font-size="{S(sz)}" font-weight="bold" fill="#fff" text-anchor="middle">{esc(s)}</text>')
    P.append('</svg>'); open(os.path.join(OUT,f"affiche-sprachakademie-{suffix}.svg"),"w",encoding="utf-8").write("\n".join(P))

for lang,T in TXT.items():
    ops,used=layout(T); render_png(ops,lang); render_svg(ops,lang)
    print(f"[{lang}] hauteur {used}/{H}", "OK" if used<H else "DÉBORDE")
print("QR v"+str(qr.version),N,"modules, ECC Q ->",URL)
for f in sorted(os.listdir(OUT)): print(f"  {f:36s} {os.path.getsize(os.path.join(OUT,f)):>8d} o")
