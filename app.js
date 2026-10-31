
(function(){
'use strict';
const I={
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
 bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
 signal:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".8"/>',
 utensils:'<path d="M6 3v7a2 2 0 0 0 2 2v9M10 3v7a2 2 0 0 1-2 2M18 21V3c-3 1-4 4-4 8h4"/>',
 fuel:'<path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h12M6 8h6M14 9h2.5a1.5 1.5 0 0 1 1.5 1.5V17a1.5 1.5 0 0 0 3 0V8l-3-3"/>',
 wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
 road:'<path d="M8 3L4 21M16 3l4 18M12 4v3M12 10v3M12 16v4"/>',
 clip:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 14l2 2 4-4"/>',
 umbrella:'<path d="M3 12a9 9 0 0 1 18 0z"/><path d="M12 12v6a2 2 0 0 0 4 0"/>',
 palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2-.6-1.2.2-2.5 1.6-2.5H17a4 4 0 0 0 4-4C21 7 17 3 12 3z"/><circle cx="7.5" cy="11" r=".9"/><circle cx="10.5" cy="7.5" r=".9"/><circle cx="15" cy="7.8" r=".9"/>',
 play:'<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
 music:'<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
 chat:'<path d="M21 12a8 8 0 0 1-11.7 7L3 21l2-5.3A8 8 0 1 1 21 12z"/>',
 sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 17v4M17 19h4"/>',
 bag:'<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
 medical:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>',
 book:'<path d="M4 4h6a3 3 0 0 1 2 1 3 3 0 0 1 2-1h6v15h-6a3 3 0 0 0-2 1 3 3 0 0 0-2-1H4z"/><path d="M12 5v15"/>',
 child:'<circle cx="12" cy="8" r="3"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/>',
 user:'<circle cx="12" cy="8" r="3.5"/><path d="M5 21v-1a7 7 0 0 1 14 0v1"/>',
 users:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.3"/><path d="M3 20v-1a5 5 0 0 1 10 0v1M15 14.5a4 4 0 0 1 6 3.5v2"/>',
 card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
 coin:'<circle cx="12" cy="12" r="9"/><path d="M14.5 9a3 3 0 0 0-5 1c0 3 5 1.5 5 4.5a3 3 0 0 1-5.5 1M12 6.5v1.5M12 16v1.5"/>',
 building:'<path d="M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 7h3M8 11h3M8 15h3"/>',
 key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>',
 luggage:'<rect x="5" y="7" width="14" height="14" rx="2"/><path d="M9 7V4h6v3M9 11v6M15 11v6"/>',
 star:'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>',
 percent:'<path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
 home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
 cart:'<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21 8H6"/>',
 car:'<path d="M3 13l2-6h14l2 6v5h-3v-2H6v2H3z"/><path d="M3 13h18"/>',
 heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
 drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
 shirt:'<path d="M8 3L3 6l2 4 3-1v12h8V9l3 1 2-4-5-3a4 4 0 0 1-8 0z"/>',
 phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
 cash:'<path d="M3 7h18v10H3z"/><circle cx="12" cy="12" r="2.5"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
 trend:'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
 archive:'<path d="M3 4h18v4H3zM5 8v12h14V8M10 12h4"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
 compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
 gift:'<path d="M3 8h18v4H3zM5 12v9h14v-9M12 8v13"/><path d="M12 8S10 3 7.5 4.5 8 8 12 8zm0 0s2-5 4.5-3.5S16 8 12 8z"/>',
 brief:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
 dots:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
 file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
 grid:'<path d="M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z"/>',
 pie:'<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
 bars:'<path d="M12 20V10M18 20V4M6 20v-4"/>',
 cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 left:'<path d="M15 18l-6-6 6-6"/>',
 right:'<path d="M9 18l6-6-6-6"/>',
 x:'<path d="M18 6L6 18M6 6l12 12"/>',
 trash:'<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
 check:'<path d="M20 6L9 17l-5-5"/>',
 alert:'<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
 over:'<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>'
};
const ic=(n,s)=>'<svg viewBox="0 0 24 24" width="'+(s||20)+'" height="'+(s||20)+'" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+I[n]+'</svg>';

/* ---------- dátumy ---------- */
const MN12=['Január','Február','Marec','Apríl','Máj','Jún','Júl','August','September','Október','November','December'];
const MS12=['Jan','Feb','Mar','Apr','Máj','Jún','Júl','Aug','Sep','Okt','Nov','Dec'];
const MG12=['januára','februára','marca','apríla','mája','júna','júla','augusta','septembra','októbra','novembra','decembra'];
const DAYMS=864e5;
const _n=new Date();const TODAY=new Date(_n.getFullYear(),_n.getMonth(),_n.getDate());
const addDays=(d,n)=>new Date(d.getFullYear(),d.getMonth(),d.getDate()+n);
const mon=d=>addDays(d,-((d.getDay()+6)%7));
const isoWeek=d=>{const t=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));const n=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-n);const y=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t-y)/DAYMS+1)/7);};
const fd=d=>d.getDate()+'. '+(d.getMonth()+1)+'.';
const dim=M=>new Date(M.y,M.mo+1,0).getDate();
const round2=n=>Math.round(n*100)/100;

/* ---------- kategórie ---------- */
const PEOPLE={J:'J',I:'I'};
const sb=a=>a.map(x=>({id:x[0],name:x[1]}));
const CATS=[
 {id:'des',name:'Desiatky',icon:'heart',kind:'tithe',subs:[]},
 {id:'poz',name:'Pôžičky',icon:'file',subs:sb([['prima','Prima'],['melon','Žltý melón']])},
 {id:'byv',name:'Bývanie',icon:'home',subs:sb([['najom','Nájom'],['elektrina','Elektrina'],['o2','O2']])},
 {id:'jed',name:'Jedlo',icon:'utensils',subs:[]},
 {id:'dro',name:'Drogéria',icon:'drop',subs:[]},
 {id:'obl',name:'Oblečenie',icon:'shirt',subs:[]},
 {id:'aut',name:'Auto',icon:'car',subs:sb([['nafta','Nafta'],['servis','Servis'],['dialnicna','Diaľničná'],['stk','STK'],['poistka','Poistka']])},
 {id:'app',name:'Aplikácie',icon:'phone',subs:sb([['adobe','Adobe'],['ytb','YTB'],['spotify','Spotify'],['chatgpt','ChatGPT'],['claude','Claude'],['shopify','Shopify']])},
 {id:'dlh',name:'Dlhy',icon:'cash',kind:'debt',subs:[]},
 {id:'dov',name:'Dovolenka',icon:'sun',subs:[]},
 {id:'inv',name:'Investovanie',icon:'trend',subs:[]},
 {id:'odk',name:'Odkladanie',icon:'archive',subs:sb([['deti','Deti'],['rodicia','Rodičia']])},
 {id:'rez',name:'Rezervy',icon:'shield',subs:sb([['r1','Rezerva 1'],['r2','Rezerva 2']])},
 {id:'vyl',name:'Výlety',icon:'compass',subs:[]},
 {id:'osl',name:'Oslavy',icon:'gift',subs:[]},
 {id:'pod',name:'Podnikanie',icon:'brief',subs:sb([['vszp','VšZP'],['rozvoj','Rozvoj']])},
 {id:'ost',name:'Ostatné',icon:'dots',kind:'manual',subs:[]},
 {id:'x',name:'Vlastné',icon:'dots',kind:'custom',subs:[]}
];
const GRP_OF={des:'main',poz:'main',jed:'main',byv:'main',dro:'main',aut:'main',app:'main',dlh:'extra'};
CATS.forEach(c=>c.grp=GRP_OF[c.id]||'side');
const GRPS=[['main','Hlavné'],['side','Vedľajšie'],['extra','Mimoriadne']];
const CAT=Object.fromEntries(CATS.map(c=>[c.id,c]));
/* zobrazovacie kategórie (neskôr upraviteľné v nastaveniach) */
const DGRP=[{id:'des',name:'Desiatky'},{id:'byv',name:'Bývanie'},{id:'kon',name:'Konzum'},{id:'pra',name:'Pravidelné'},{id:'odk',name:'Odkladanie'},{id:'dlh',name:'Dlhy'},{id:'mim',name:'Mimoriadne'}];
const GMAP_CAT={x:'mim',des:'des',byv:'byv',jed:'kon',dro:'kon',obl:'kon',app:'pra',aut:'pra',pod:'pra',odk:'odk',inv:'odk',rez:'odk',poz:'dlh',dlh:'dlh',dov:'mim',vyl:'mim',osl:'mim',ost:'mim'};
const GMAP_KEY={'aut.nafta':'kon'};
const IKEY={'des':'heart','byv.najom':'key','byv.elektrina':'bolt','byv.o2':'signal','aut.nafta':'fuel','aut.servis':'wrench','aut.dialnicna':'road','aut.stk':'clip','aut.poistka':'umbrella','app.adobe':'palette','app.ytb':'play','app.spotify':'music','app.chatgpt':'chat','app.claude':'sparkle','app.shopify':'bag','poz.prima':'card','poz.melon':'coin','dlh.rodicia':'users','dlh.blazka':'user','dlh.brano':'user','dlh.h1':'building','dlh.h2':'building','dlh.realbyt':'building','dlh.orange':'signal','dlh.vszp':'medical','odk.deti':'child','odk.rodicia':'users','rez.r1':'shield','rez.r2':'shield','pod.vszp':'medical','pod.rozvoj':'book','dov':'luggage'};
const grpOfKey=key=>{const d=S.defs&&S.defs[key];if(d&&d.grp)return d.grp;return GMAP_KEY[key]||GMAP_CAT[key.split('.')[0]]||'mim';};
function iconOf(key){const d=S.defs&&S.defs[key];if(d&&d.icon)return d.icon;if(IKEY[key])return IKEY[key];if(key.indexOf('x.')===0)return GICON[grpOfKey(key)]||'dots';const p=key.split('.');if(p[0]==='jed')return 'utensils';const c=CAT[p[0]];return c?c.icon:'dots';}
const gIco=(key,sz)=>'<span class="ico gi g-'+grpOfKey(key)+'">'+ic(iconOf(key),sz||18)+'</span>';
const DEFLIM={'poz.prima':540,'poz.melon':180,'byv.najom':280,'byv.elektrina':50,'byv.o2':200,
 'jed':500,'dro':100,'obl':100,
 'aut.nafta':150,'aut.servis':45,'aut.dialnicna':10,'aut.stk':10,'aut.poistka':15,
 'app.adobe':20,'app.ytb':20,'app.spotify':10,'app.chatgpt':27,'app.claude':22,'app.shopify':27,
 'dov':100,'inv':50,'odk.deti':50,'odk.rodicia':50,'rez.r1':50,'rez.r2':null,'vyl':50,'osl':50,'pod.vszp':120,'pod.rozvoj':50};
const DEFPLAN=[
 {d:1,name:'Nájom',key:'byv.najom',amt:280},{d:2,name:'Adobe',key:'app.adobe',amt:20},{d:3,name:'YTB',key:'app.ytb',amt:20},{d:3,name:'Spotify',key:'app.spotify',amt:10},
 {d:4,name:'Poistka auta',key:'aut.poistka',amt:15},{d:5,name:'Elektrina',key:'byv.elektrina',amt:50},{d:6,name:'STK',key:'aut.stk',amt:10},{d:8,name:'O2',key:'byv.o2',amt:200},
 {d:9,name:'ChatGPT',key:'app.chatgpt',amt:27},{d:9,name:'Claude',key:'app.claude',amt:22},{d:10,name:'Desiatok 10 %',key:'des',amt:null},
 {d:11,name:'Dovolenka',key:'dov',amt:100},{d:11,name:'Investovanie',key:'inv',amt:50},{d:11,name:'Odkladanie – deti',key:'odk.deti',amt:50},{d:11,name:'Odkladanie – rodičia',key:'odk.rodicia',amt:50},{d:11,name:'Rezerva 1',key:'rez.r1',amt:50},
 {d:12,name:'Shopify',key:'app.shopify',amt:27},{d:15,name:'Prima',key:'poz.prima',amt:540},{d:15,name:'Žltý melón',key:'poz.melon',amt:180},
 {d:20,name:'Podnikanie – VšZP',key:'pod.vszp',amt:120},{d:22,name:'Podnikanie – Rozvoj',key:'pod.rozvoj',amt:50}
];
const S={
  tab:'home', defs:{}, idlg:null, ptab:'mes', openPCat:{}, openCats:{}, openBud:{}, doneN:5, doneSort:'new', month:5, anaTab:'ana', expanded:null, trend:'chart', grp:'all', incAll:false, upAll:false, doneAll:false, repAll:false, confirm:false,
  months:[], tx:[], incTx:[], debts:[], members:[], me:'J', hh:null, loaded:false, itemOpen:null, items:{}, busy:0, code:null, sig:null, mode:'exp', draft:{key:null,grp:'kon',who:'J'}, rep:{J:true,I:true}
};

/* ---------- mesiace, limity, týždne ---------- */
const M_=m=>S.months[m];
const mname=m=>MN12[M_(m).mo];
const mshort=m=>MS12[M_(m).mo];
const vis=()=>S.months.map((x,i)=>i).filter(i=>S.months[i].status!=='planned');
const prevVis=m=>{const v=vis(),k=v.indexOf(m);return k>0?v[k-1]:-1;};
const calIdx=d=>S.months.findIndex(x=>x.y===d.getFullYear()&&x.mo===d.getMonth());
const curDay=M=>{const f=new Date(M.y,M.mo,1),l=new Date(M.y,M.mo,dim(M));return TODAY<f?0:TODAY>l?dim(M):TODAY.getDate();};
function weekInfoM(M,k){const a=addDays(mon(new Date(M.y,M.mo,1)),7*k),b=addDays(a,6);return{n:isoWeek(a),a,b,range:fd(a)+' – '+fd(b),label:'Týždeň '+isoWeek(a)+' ('+fd(a)+' – '+fd(b)+')'};}
const weekInfo=(m,k)=>weekInfoM(M_(m),k);
function foodAssign(dt){
  for(let i=0;i<S.months.length;i++){const a=mon(new Date(S.months[i].y,S.months[i].mo,1)),b=addDays(a,27);if(dt>=a&&dt<=b)return{m:i,w:Math.floor(Math.round((dt-a)/DAYMS)/7)};}
  const ci=calIdx(dt);return{m:ci>=0?ci:S.month,w:3};
}
function curWeek(m){const a=mon(new Date(M_(m).y,M_(m).mo,1));const k=Math.floor(Math.round((TODAY-a)/DAYMS)/7);return Math.max(0,Math.min(3,k));}

/* ---------- API (PHP + MySQL na hostingu; každé volanie vyžaduje tajný kód domácnosti) ---------- */
const API='api/index.php';
const pad2=n=>String(n).padStart(2,'0');
const iso=d=>d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate());
const parseD=s=>{const a=s.split('-').map(Number);return new Date(a[0],a[1]-1,a[2]);};
const store={
  get(k){try{return localStorage.getItem(k);}catch(e){return null;}},
  set(k,v){try{localStorage.setItem(k,v);}catch(e){}},
  del(k){try{localStorage.removeItem(k);}catch(e){}}
};
async function rpc(fn,args){
  const r=await fetch(API+'?fn='+encodeURIComponent(fn),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(args||{})});
  const t=await r.text();let j=null;
  try{j=t?JSON.parse(t):null;}catch(e){}
  if(!r.ok){const err=new Error((j&&j.message)||('HTTP '+r.status));err.status=r.status;throw err;}
  return j;
}
const monthPayload=(E_,dr,id,plan)=>({id:id||null,y:E_.y,mo:E_.mo,inc_j:dr.inc.J,inc_i:dr.inc.I,limits:dr.lim,plan:plan});
async function createFirstMonth(){
  const lim={};Object.entries(DEFLIM).forEach(([k,v])=>{lim[k]=v;});(CAT.dlh.subs||[]).forEach(d=>{lim['dlh.'+d.id]=null;});
  await rpc('save_month',{p_code:S.code,p_month:{y:TODAY.getFullYear(),mo:TODAY.getMonth(),inc_j:0,inc_i:0,limits:lim,plan:DEFPLAN.map(p=>({d:p.d,name:p.name,key:p.key,amt:p.amt}))}});
}
async function loadAll(retry,force){
  if(!S.code)return 'gate';
  const st=await rpc('get_state',{p_code:S.code});
  const sig=JSON.stringify(st);
  if(!force&&S.loaded&&sig===S.sig)return 'same';
  S.defs={};(st.item_defs||[]).forEach(d=>{S.defs[d.key]={name:d.name,grp:d.grp,budget:d.budget,day:d.day,icon:d.icon,custom:!!d.custom,deleted:!!d.deleted};});
  CAT.x.subs=Object.keys(S.defs).filter(k=>S.defs[k].custom).map(k=>({id:k.slice(2),name:S.defs[k].name}));
  CAT.dlh.subs=st.debts.map(d=>({id:d.sub,name:d.name,bal:+d.balance,asOf:parseD(d.as_of)}));
  if(!st.months.length){
    if(retry)throw new Error('Prvý mesiac sa nepodarilo vytvoriť');
    await createFirstMonth();
    return loadAll(true,true);
  }
  S.sig=sig;
  const keepId=S.months[S.month]?S.months[S.month].id:null;
  const idx={};
  S.months=st.months.map((r,i)=>{idx[r.id]=i;return{id:r.id,y:r.y,mo:r.mo,status:r.status,seq:r.seq,inc:{J:+r.inc_j,I:+r.inc_i},lim:{},plan:[]};});
  st.limits.forEach(r=>{const i=idx[r.month_id];if(i!==undefined)S.months[i].lim[r.key]=r.amount===null?null:+r.amount;});
  S.months.forEach(mm=>{ // staré týždenné limity jedla sa spoja do jednej položky
    const ks=Object.keys(mm.lim).filter(k=>/^jed\.w\d$/.test(k));
    if(!ks.length)return;
    if(!Object.prototype.hasOwnProperty.call(mm.lim,'jed'))mm.lim.jed=sum(ks.map(k=>mm.lim[k]||0));
    ks.forEach(k=>{delete mm.lim[k];});
  });
  st.plans.slice().sort((a,b)=>a.sort-b.sort).forEach(r=>{const i=idx[r.month_id];if(i!==undefined)S.months[i].plan.push({d:r.day,name:r.name,key:r.key,amt:r.amount===null?null:+r.amount});});
  S.tx=st.transactions.filter(r=>idx[r.month_id]!==undefined).map(r=>({id:r.id,m:idx[r.month_id],dt:parseD(r.dt),cat:r.cat,sub:r.cat==='jed'?'':r.sub,amt:+r.amount,who:r.who,note:r.note}));
  S.incTx=st.incomes.filter(r=>idx[r.month_id]!==undefined).map(r=>({id:r.id,m:idx[r.month_id],dt:parseD(r.dt),who:r.who,amt:+r.amount,note:r.note}));
  S.debts=st.debts;
  S.items={};(st.items||[]).forEach(x=>{S.items[x.key]={stav:x.stav===null?null:+x.stav,auto:!!x.auto,asOf:parseD(x.as_of)};});
  CAT.dlh.subs=st.debts.map(d=>({id:d.sub,name:d.name,bal:+d.balance,asOf:parseD(d.as_of)}));
  Object.keys(S.defs).forEach(k=>{const d=S.defs[k];if(d.custom||!d.name)return;const p=k.split('.');if(p[1]){const sx=CAT[p[0]]&&CAT[p[0]].subs.find(x=>x.id===p[1]);if(sx)sx.name=d.name;}else if(CAT[p[0]]&&!CAT[p[0]].subs.length)CAT[p[0]].name=d.name;});
  let k=keepId?S.months.findIndex(x=>x.id===keepId):-1;
  if(k<0||S.months[k].status==='planned'){k=S.months.findIndex(x=>x.status==='active');if(k<0){const v=vis();k=v.length?v[v.length-1]:0;}}
  S.month=k;S.loaded=true;
  return 'ok';
}
const limT={};
function saveLimit(M,key){
  clearTimeout(limT[M.id+key]);
  S.busy++;
  limT[M.id+key]=setTimeout(async()=>{
    try{await rpc('set_limit',{p_code:S.code,p_month:M.id,p_key:key,p_amount:M.lim[key]});}
    catch(e){console.error(e);toast('Limit sa nepodarilo uložiť',true);}
    finally{S.busy--;}
  },400);
}

/* ---------- výpočty ---------- */
const NF0=new Intl.NumberFormat('sk-SK',{maximumFractionDigits:0});
const NF2=new Intl.NumberFormat('sk-SK',{minimumFractionDigits:2,maximumFractionDigits:2});
const nb=s=>s.replace(/\s/g,' ');
const eur=n=>nb((n<0?'−':'')+NF0.format(Math.abs(Math.round(n))))+' €';
const eur2=n=>nb(NF2.format(n))+' €';
const sgn=n=>(Math.round(n)>0?'+':Math.round(n)<0?'−':'')+eur(Math.abs(n));
const sum=a=>a.reduce((x,y)=>x+y,0);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const pctOf=(v,l)=>l>0?Math.min(100,v/l*100):0;
const getLim=(m,key)=>{const v=M_(m).lim[key];return v===undefined||v===null?null:v;};
const incExp=m=>M_(m).inc.J+M_(m).inc.I;
const incTxm=m=>S.incTx.filter(t=>t.m===m);
const received=m=>sum(incTxm(m).map(t=>t.amt));
const income=(m=S.month)=>{const r=received(m);return M_(m).status==='closed'?(r||incExp(m)):Math.max(incExp(m),r);};
const txm=m=>S.tx.filter(t=>t.m===m);
const total=m=>sum(txm(m).map(t=>t.amt));
const byCat=m=>{const o={};CATS.forEach(c=>o[c.id]=0);txm(m).forEach(t=>o[t.cat]+=t.amt);return o;};
const bySub=m=>{const o={};txm(m).forEach(t=>{const k=t.cat+'.'+t.sub;o[k]=(o[k]||0)+t.amt;});return o;};
const byWho=m=>{const o={J:0,I:0};txm(m).forEach(t=>o[t.who]+=t.amt);return o;};
const baseLimit=(c,m)=>c.kind==='tithe'?income(m)*.1:c.kind==='manual'?0:(c.subs.length?sum(c.subs.map(s=>getLim(m,c.id+'.'+s.id)||0)):(getLim(m,c.id)||0));
const rawPlan=(m=S.month)=>sum(CATS.map(c=>baseLimit(c,m)));
const leftover=(m=S.month)=>Math.max(0,income(m)-sum(CATS.filter(c=>c.kind!=='debt').map(c=>baseLimit(c,m))));
const catLimit=(c,m=S.month)=>baseLimit(c,m);
const isIn=(m,key)=>Object.prototype.hasOwnProperty.call(M_(m).lim,key);
const txKey=t=>t.sub?t.cat+'.'+t.sub:t.cat;
function itemList(){
  const out=[];
  CATS.forEach(c=>{
    if(c.kind==='weeks'||c.kind==='manual'||c.kind==='tithe')return;
    if(c.subs.length)c.subs.forEach(x=>out.push({key:c.id+'.'+x.id,cat:c,name:x.name,debt:c.kind==='debt',sub:x}));
    else if(c.kind!=='custom')out.push({key:c.id,cat:c,name:c.name,debt:false});
  });
  return out.filter(it=>!(S.defs[it.key]&&S.defs[it.key].deleted));
}
function itemStav(it){
  if(it.debt)return{tracked:true,value:debtBal(it.sub),auto:true};
  const x=S.items[it.key];
  if(!x||x.stav===null)return{tracked:false};
  const used=x.auto?sum(S.tx.filter(t=>txKey(t)===it.key&&t.dt>=x.asOf).map(t=>t.amt)):0;
  return{tracked:true,value:x.stav-used,auto:x.auto,base:x.stav};
}
const stavTxt=it=>{const v=itemStav(it);return v.tracked?'stav '+eur(v.value):'';};
const payDayOf=(m,key)=>{const p=M_(m).plan.find(x=>x.key===key);return p?p.d:null;};
const budget=(m=S.month)=>sum(CATS.map(c=>catLimit(c,m)));
const debtBal=s=>s.bal-sum(S.tx.filter(t=>t.cat==='dlh'&&t.sub===s.id&&t.dt>=s.asOf).map(t=>t.amt));
function status(spent,limit){
  if(!(limit>0)) return {k:'ok',t:'',i:'check'};
  const p=spent/limit;
  if(p>1.0001) return {k:'bad',t:'Prekročené o '+eur(spent-limit),i:'over'};
  if(p>=.85&&p<.9999) return {k:'warn',t:'Pozor, blízko limitu',i:'alert'};
  return {k:'ok',t:'V norme',i:'check'};
}
const pill=s=>'<span class="pill '+s.k+'">'+ic(s.i,14)+s.t+'</span>';
const flag=s=>s.k==='ok'?'':'<span class="flag '+s.k+'">'+(s.k==='bad'?s.t:'Pozor, blízko limitu')+'</span>';
const dot=(w,sm)=>'<span class="dot '+(sm?'sm ':'')+w+'" title="'+PEOPLE[w]+'" aria-label="'+PEOPLE[w]+'">'+w+'</span>';
const dl=t=>t.dt.getDate()+'. '+MG12[t.dt.getMonth()];
const byDateDesc=(a,b)=>b.dt-a.dt||b.id-a.id;
function subName(c,s,m){return c.kind==='weeks'?weekInfo(m,+s.id[1]).label:s.name;}
function txLabel(t){
  const c=CAT[t.cat]; if(!c.subs.length) return c.name;
  const s=c.subs.find(x=>x.id===t.sub);
  return c.name+(s?' · '+(c.kind==='weeks'?'týždeň '+weekInfo(t.m,+t.sub[1]).n:s.name):'');
}
function txRows(arr){
  return '<div class="list">'+arr.map(t=>'<div class="li">'+gIco(txKey(t))+'<div class="t"><b>'+esc(t.note||CAT[t.cat].name)+'</b><span>'+esc(txLabel(t))+' · '+dl(t)+'</span></div>'+dot(t.who,true)+'<span class="a num">'+eur2(t.amt)+'</span></div>').join('')+'</div>';
}
function leaves(m){
  const ss=bySub(m),cc=byCat(m),out=[];
  CATS.forEach(c=>{
    if(c.kind==='manual') return;
    if(c.subs.length) c.subs.forEach(s=>{const l=getLim(m,c.id+'.'+s.id);if(l>0) out.push({c,name:c.name+' · '+(c.kind==='weeks'?'týždeň '+weekInfo(m,+s.id[1]).n:s.name),limit:l,spent:ss[c.id+'.'+s.id]||0});});
    else{const l=catLimit(c,m);if(l>0) out.push({c,name:c.name,limit:l,spent:cc[c.id]});}
  });
  return out;
}
function mpick(){
  const v=vis(),k=v.indexOf(S.month);
  return '<div class="mpick"><button data-act="prev" aria-label="Predchádzajúci mesiac"'+(k<=0?' disabled':'')+'>'+ic('left',18)+'</button><span>'+mname(S.month)+' '+M_(S.month).y+'</span><button data-act="next" aria-label="Nasledujúci mesiac"'+(k>=v.length-1?' disabled':'')+'>'+ic('right',18)+'</button></div>';
}
const head=t=>'<div class="sh"><h1>'+t+'</h1>'+mpick()+'</div>';

/* ---------- prehľad ---------- */
function incomeBlock(m){
  const M=M_(m),recv=received(m),entries=incTxm(m).slice().sort(byDateDesc),shown=S.incAll?entries:entries.slice(0,2);
  return '<div class="blk"><h3>Príjmy <span class="small num">'+eur(recv)+(M.status!=='closed'?' z '+eur(incExp(m))+' očakávaných':'')+'</span></h3><section class="card">'+
   (entries.length?'<div class="list">'+shown.map(t=>'<div class="li"><div class="t"><b>'+esc(t.note)+'</b><span>'+dl(t)+'</span></div>'+dot(t.who,true)+'<span class="a num" style="color:var(--ok)">+'+eur2(t.amt)+'</span></div>').join('')+'</div>'+(entries.length>2?'<button class="link" data-act="incAll" aria-expanded="'+S.incAll+'">'+(S.incAll?'Zobraziť menej':'Zobraziť všetky '+entries.length)+'</button>':''):'<p class="empty">V tomto mesiaci zatiaľ žiadny príjem.</p>')+
   (M.status!=='closed'&&incExp(m)===0&&recv===0?'<p class="note" style="margin-top:10px">Rozpočet a desiatky sa počítajú z príjmu. Nastavte očakávaný príjem J a I.</p><button class="btn sm" style="margin-top:8px" data-act="editM" data-m="'+m+'">Nastaviť očakávaný príjem</button>':'')+
   '<button class="btn ghost" style="width:100%;margin-top:12px" data-act="addinc">Pridať príjem</button></section></div>';
}
function planAmt(m,p){if(p.key==='des'||p.amt===null)return income(m)*.1;const l=getLim(m,p.key);return l!==null?l:(p.amt||0);}
function relDay(dd){return dd===1?'zajtra':'o '+dd+(dd<5?' dni':' dní');}
function upcomingBlock(m){
  const M=M_(m); if(M.status!=='active') return '';
  const cd=curDay(M), ups=M.plan.filter(p=>p.d>cd&&p.d<=dim(M)).sort((a,b)=>a.d-b.d), left=sum(ups.map(p=>planAmt(m,p)));
  const shown=S.upAll?ups:ups.slice(0,3);
  const rows=shown.map(u=>'<div class="li"><div class="t"><b>'+esc(u.name||'Platba')+'</b><span>'+u.d+'. '+MG12[M.mo]+(TODAY.getMonth()===M.mo&&TODAY.getFullYear()===M.y?' · '+relDay(u.d-cd):'')+'</span></div><span class="a num">'+eur(planAmt(m,u))+'</span></div>').join('');
  return '<div class="blk"><h3>Nastávajúce platby <span class="small num">spolu '+eur(left)+'</span></h3><section class="card">'+(ups.length?'<div class="list">'+rows+'</div>'+(ups.length>3?'<button class="link" data-act="upAll" aria-expanded="'+S.upAll+'">'+(S.upAll?'Zobraziť menej':'Zobraziť všetkých '+ups.length)+'</button>':''):'<p class="empty">V tomto mesiaci už nič nezostáva.</p>')+'</section></div>';
}
function gradRow(name,extra,spent,limit){
  const st=status(spent,limit), left=limit-spent;
  return '<div class="gr"><div class="row-between"><b>'+name+'</b><span class="num"><b>'+eur(spent)+'</b> <span class="small">/ '+eur(limit)+'</span></span></div><div class="track" role="img" aria-label="'+name+': '+eur(spent)+' z '+eur(limit)+'"><div class="fill '+(st.k==='ok'?'':st.k)+'" style="width:'+pctOf(spent,limit)+'%"></div></div><span class="small">'+[extra,st.k==='ok'?'zostáva '+eur(left):''].filter(Boolean).join(' · ')+'</span>'+flag(st)+'</div>';
}
function gradualBlock(m){
  const ss=bySub(m),cc=byCat(m),M=M_(m);
  let food;
  if(M.status==='active'){const k=curWeek(m),w=weekInfo(m,k);food=gradRow('Jedlo · týždeň '+w.n,w.range,ss['jed.w'+k]||0,getLim(m,'jed.w'+k)||0);}
  else food=gradRow('Jedlo','celý mesiac',cc.jed,catLimit(CAT.jed,m));
  return '<div class="blk"><h3>Postupné výdavky</h3><section class="card">'+food+gradRow('Drogéria','',cc.dro,catLimit(CAT.dro,m))+gradRow('Nafta','',ss['aut.nafta']||0,getLim(m,'aut.nafta')||0)+'</section></div>';
}
const DSORT=[['new','Najnovšie'],['old','Najstaršie'],['amt','Najvyššia suma']];
function doneList(m){
  const M=M_(m),a=new Date(M.y,M.mo,1),b=new Date(M.y,M.mo,dim(M));
  const all=txm(m).filter(t=>!S.doneWho||S.doneWho==='all'||t.who===S.doneWho);
  const cmp={new:byDateDesc,old:(x,y)=>x.dt-y.dt||x.id-y.id,amt:(x,y)=>y.amt-x.amt||byDateDesc(x,y)}[S.doneSort||'new'];
  all.sort(cmp);
  return {a:a,b:b,all:all,shown:all.slice(0,S.doneN||5)};
}
function doneBlock(m){
  const d=doneList(m),sort=S.doneSort||'new';
  return '<div class="blk"><h3>Vykonané platby <span class="small num">'+fd(d.a)+' – '+fd(d.b)+'</span></h3><section class="card">'+
   '<div class="subchips dsort" role="group" aria-label="Kto platil">'+[['all','Všetci'],['J','J'],['I','I']].map(x=>'<button type="button" class="sc" data-act="dwho" data-v="'+x[0]+'" aria-pressed="'+((S.doneWho||'all')===x[0])+'">'+(x[0]==='all'?x[1]:dot(x[0],true)+x[1])+'</button>').join('')+'</div>'+
   '<div class="subchips dsort" role="group" aria-label="Zoradenie">'+DSORT.map(x=>'<button type="button" class="sc" data-act="dsort" data-v="'+x[0]+'" aria-pressed="'+(sort===x[0])+'">'+x[1]+'</button>').join('')+'</div>'+
   (d.all.length?'<div class="donelist" id="donelist" tabindex="0" aria-label="Vykonané platby">'+txRows(d.shown)+'<p class="note dmore" id="dmore">'+(d.shown.length<d.all.length?'Rolovaním zobrazíte ďalšie ('+(d.all.length-d.shown.length)+')':'To je všetko ('+d.all.length+')')+'</p></div>':'<p class="empty">V tomto období zatiaľ žiadna platba.</p>')+
   '</section></div>';
}

function monthLeaves(m){
  const M=M_(m),ss=bySub(m),cc=byCat(m),out=[],inc=income(m);
  CATS.forEach(c=>{
    if(c.kind==='manual'){if(cc[c.id]>0)out.push({key:c.id,c:c,name:c.name,sub:'mimo plánu',limit:0,spent:cc[c.id],day:null,pre:{cat:c.id,sub:''}});return;}
    if(c.kind==='tithe'){out.push({key:'des',c:c,name:c.name,sub:'10 % z príjmu',limit:inc*.1,spent:cc[c.id],day:payDayOf(m,'des'),pre:{cat:c.id,sub:''}});return;}
    if(c.subs.length){
      c.subs.forEach((x,k)=>{
        const key=c.id+'.'+x.id,l=getLim(m,key),sp=ss[key]||0;
        if(!isIn(m,key)&&!sp)return;
        if(S.defs[key]&&S.defs[key].deleted&&!sp)return;
        const w=c.kind==='weeks'?weekInfo(m,k):null;
        out.push({key:key,c:c,name:w?'Jedlo · týždeň '+w.n:x.name,sub:w?w.range:c.name,limit:l||0,spent:sp,day:c.kind==='weeks'?null:payDayOf(m,key),pre:{cat:c.id,sub:c.kind==='weeks'?'':x.id}});
      });
    } else {
      const l=getLim(m,c.id),sp=cc[c.id]||0;
      if(!isIn(m,c.id)&&!sp)return;
      out.push({key:c.id,c:c,name:c.name,sub:'',limit:l||0,spent:sp,day:payDayOf(m,c.id),pre:{cat:c.id,sub:''}});
    }
  });
  return out;
}
function itemState(it,M){
  const rest=Math.max(0,it.limit-it.spent),paid=it.limit>0&&rest<.5;
  if(paid)return 'paid';
  if(it.day&&it.limit>0){
    const due=new Date(M.y,M.mo,it.day+1),ms=due-new Date();
    if(ms<=0)return 'late';
    if(ms<=48*3600*1000)return 'soon';
    return 'wait';
  }
  if(it.limit>0&&it.spent>it.limit+.5)return 'over';
  return 'flex';
}
const STL={late:['po termíne','bad'],over:['prekročené','bad'],soon:['do 48 h','orange'],wait:['čaká','mute'],flex:['v limite','mute'],paid:['uhradené','ok']};
function itemRow(it,M,show){
  const left=it.limit-it.spent,stt=itemState(it,M),paid=stt==='paid',st=it.limit>0?status(it.spent,it.limit):{k:'ok'};
  const btn=(it.day&&paid)?'<span></span>':'<button class="padd" data-act="addFor" data-key="'+it.key+'">'+(it.day?'Uhradiť':'Pridať')+'</button>';
  const dcls=stt==='late'?' late':stt==='soon'?' soon':'';
  const sub=[show==='cat'?'':it.c.name!==it.name&&it.sub?it.sub:'',it.day?'<span class="dtx'+dcls+'">'+it.day+'. '+(M.mo+1)+'.</span>':''].filter(Boolean);
  return '<div class="it'+(it.day&&paid?' done':'')+'"><div class="it-top">'+gIco(it.key)+'<div class="pr-n"><b>'+esc(it.name)+'</b><span>'+(sub.length?sub.join(' · '):'&nbsp;')+'</span></div>'+
   '<div class="pr-a"><b class="num">'+eur(it.spent)+'<span class="small">'+(it.limit>0?' / '+eur(it.limit):'')+'</span></b>'+(it.limit>0?'<div class="track thin mini" role="img" aria-label="'+esc(it.name)+': '+eur(it.spent)+' z '+eur(it.limit)+'"><div class="fill '+(st.k==='ok'?'':st.k)+'" style="width:'+pctOf(it.spent,it.limit)+'%"></div></div>':'')+'</div>'+btn+'</div></div>';
}
function viewHome(){
  const m=S.month,M=M_(m),spent=total(m),inc=income(m),rec=received(m),lv=monthLeaves(m);
  const rest=sum(lv.map(x=>Math.max(0,x.limit-x.spent))),free=inc-spent-rest;
  const st0=lv.map(x=>({x:x,s:itemState(x,M)})),paidN=st0.filter(o=>o.s==='paid').length;
  const nextUp=st0.filter(o=>o.x.day&&(o.s==='late'||o.s==='soon'||o.s==='wait')).sort((a,b)=>(a.s==='late'?0:1)-(b.s==='late'?0:1)||a.x.day-b.x.day).slice(0,5);
  const nextHtml=nextUp.length&&M.status!=='planned'?'<div class="nextup"><span class="small">Najbližšie platby</span><div class="nu-l">'+nextUp.map(o=>'<button type="button" class="nu g-'+grpOfKey(o.x.key)+'" data-act="addFor" data-key="'+o.x.key+'"><span class="ico gi">'+ic(iconOf(o.x.key),16)+'</span><span class="nu-t"><b>'+esc(o.x.name)+'</b><small class="'+(o.s==='late'?'d-late':o.s==='soon'?'d-soon':'')+'">'+o.x.day+'. '+(M.mo+1)+'. · '+eur(Math.max(0,o.x.limit-o.x.spent))+'</small></span></button>').join('')+'</div></div>':'';
  const hero='<section class="card hero"><div class="hstats big3">'+
   '<div class="st-inc"><span>K dispozícii</span><b class="num">'+eur(inc)+'</b><small>'+(M.status!=='closed'&&rec<inc?'prijaté '+eur(rec)+' z očakávaných':'podľa príjmov')+'</small></div>'+
   '<div class="st-rest"><span>Zostáva uhradiť</span><b class="num">'+eur(rest)+'</b><small>'+(rest>0?'z plánovaných výdavkov':'všetko uhradené')+'</small></div>'+
   '<div class="st-spent"><span>Minuté</span><b class="num">'+eur(spent)+'</b><small>v tomto mesiaci</small></div></div>'+
   '<div class="track" role="img" aria-label="Minuté '+eur(spent)+', zostáva uhradiť '+eur(rest)+' z príjmu '+eur(inc)+'"><div class="fill'+(spent+rest>inc?' bad':'')+'" style="width:'+pctOf(spent,inc)+'%"></div></div>'+
   '<div class="row-between small" style="margin-top:8px"><span>Po úhradách všetkého ostane</span><b class="num '+(free>=0?'pos':'neg')+'">'+eur(free)+'</b></div>'+nextHtml+'</section>';
  const pv=S.pview==='date'?'date':'cat',pf=S.pfilt||'all';
  const pass=o=>pf==='all'?true:pf==='paid'?o.s==='paid':o.s!=='paid';
  let body;
  if(pv==='cat'){
    body=DGRP.map(g=>{
      const all=st0.filter(o=>grpOfKey(o.x.key)===g.id);if(!all.length)return '';
      const its=all.filter(pass);if(!its.length)return '';
      const sp=sum(all.map(o=>o.x.spent)),lim=sum(all.map(o=>o.x.limit)),open=!!S.openCats[g.id],st=lim>0?status(sp,lim):{k:'ok'};
      const cnt={};all.forEach(o=>{cnt[o.s]=(cnt[o.s]||0)+1;});
      const CST={late:['po termíne','late'],over:['prekročené','late'],soon:['v termíne','soon'],wait:['pred termínom','']};
      const bub=['late','over','soon','wait'].filter(k=>cnt[k]).map(k=>'<span class="dtx '+CST[k][1]+'">'+cnt[k]+' '+CST[k][0]+'</span>').join(' · ');
      return '<div class="cg"><button type="button" class="cg-h" data-act="catTog" data-c="'+g.id+'" aria-expanded="'+open+'"><span class="chev" aria-hidden="true"></span><span class="ico gi g-'+g.id+'">'+ic(GICON[g.id]||'dots',18)+'</span><span class="cg-n"><b>'+g.name+'</b><span class="cg-s">'+(bub||'&nbsp;')+'</span></span><span class="pr-a"><b class="num">'+eur(sp)+(lim>0?'<span class="small"> / '+eur(lim)+'</span>':'')+'</b></span></button>'+
       (lim>0?'<div class="track cg-t" role="img" aria-label="'+g.name+': '+eur(sp)+' z '+eur(lim)+'"><div class="fill '+(st.k==='ok'?'':st.k)+'" style="width:'+pctOf(sp,lim)+'%"></div></div>':'')+
       (open?'<div class="cg-b">'+its.map(o=>itemRow(o.x,M,'cat')).join('')+'</div>':'')+'</div>';
    }).join('');
  } else {
    const BK=[['late','Po termíne','bad'],['soon','Do 48 hodín','orange'],['over','Prekročené budgety','bad'],['wait','Čaká na termín','mute'],['flex','Mesačné budgety','mute'],['paid','Uhradené','ok']];
    body=BK.map(bk=>{
      const its=st0.filter(o=>o.s===bk[0]&&pass(o));if(!its.length)return '';
      its.sort((a,b)=>(a.x.day||99)-(b.x.day||99));
      const amt=bk[0]==='paid'?sum(its.map(o=>o.x.spent)):sum(its.map(o=>Math.max(0,o.x.limit-o.x.spent)));
      return '<div class="dg"><div class="dg-h"><b class="dgt '+bk[2]+'">'+bk[1]+'</b><span class="small">'+its.length+' · '+(bk[0]==='paid'?'zaplatené ':'zostáva ')+'<b class="num">'+eur(amt)+'</b></span></div>'+its.map(o=>itemRow(o.x,M,'date')).join('')+'</div>';
    }).join('');
  }
  const ctl='<div class="pctl"><div class="seg" role="group" aria-label="Zobrazenie">'+[['cat','Podľa kategórií'],['date','Podľa termínu']].map(x=>'<button data-act="pview" data-v="'+x[0]+'" aria-pressed="'+(pv===x[0])+'">'+x[1]+'</button>').join('')+'</div>'+
   '<div class="subchips">'+[['all','Všetko'],['open','Neuhradené'],['paid','Uhradené']].map(x=>'<button type="button" class="sc" data-act="pfilt" data-v="'+x[0]+'" aria-pressed="'+(pf===x[0])+'">'+x[1]+'</button>').join('')+'</div></div>';
  const A='<div class="blk"><h3>Plánované platby <span class="small num">uhradené '+paidN+' z '+lv.length+'</span></h3><section class="card">'+(lv.length?ctl+(body||'<p class="empty">Nič na zobrazenie pre tento filter.</p>'):'<p class="empty">Mesiac zatiaľ nemá žiadne položky. Pridajte ich v Pláne.</p>')+'</section></div>';
  return head('Prehľad')+hero+'<div class="home2">'+A+doneBlock(m)+'</div>';
}

/* ---------- rozpočet ---------- */
function stepper(act,attrs,val,label,d){
  return '<div class="ctl"><button data-act="'+act+'" '+attrs+' data-d="-'+d+'" aria-label="Znížiť '+label+' o '+d+' eur">−</button><output class="num">'+eur(val)+'</output><button data-act="'+act+'" '+attrs+' data-d="'+d+'" aria-label="Zvýšiť '+label+' o '+d+' eur">+</button></div>';
}
function subsHtml(c,m){
  const ss=bySub(m);
  if(c.kind==='tithe') return '<div class="subs"><p class="small" style="margin:0 0 8px">Vždy 10 % z príjmu ('+eur(income(m))+'). Limit sa nastavuje sám.</p>'+(txm(m).some(t=>t.cat==='des')?txRows(txm(m).filter(t=>t.cat==='des')):'<p class="empty">V tomto mesiaci zatiaľ bez zápisu.</p>')+'</div>';
  if(c.kind==='manual') return '<div class="subs"><p class="small" style="margin:0 0 8px">Bez limitu, len ručné zápisy.</p>'+(txm(m).some(t=>t.cat==='ost')?txRows(txm(m).filter(t=>t.cat==='ost').sort(byDateDesc)):'<p class="empty">V tomto mesiaci zatiaľ bez zápisu.</p>')+'</div>';
  if(!c.subs.length){const pd0=payDayOf(m,c.id),st0=stavTxt({key:c.id,debt:false});return '<div class="subs"><div class="sub"><div class="nm">Mesačný limit'+((pd0||st0)?'<span>'+[st0,pd0?'platba '+pd0+'. v mesiaci':''].filter(Boolean).join(' · ')+'</span>':'')+'</div>'+stepper('lim','data-c="'+c.id+'"',getLim(m,c.id)||0,'limit',10)+'</div></div>';}
  const debtNote=c.kind==='debt'?'<p class="small" style="margin:0 0 6px">Limit je mesačná splátka. Zvyšok príjmu po ostatných kategóriách: '+eur(leftover(m))+'. Zostatok dlhov spolu: '+eur(sum(c.subs.map(debtBal)))+'.</p>':'';
  const subsIn=c.subs.filter(x=>isIn(m,c.id+'.'+x.id)||(ss[c.id+'.'+x.id]||0)>0);
  if(!subsIn.length)return '<div class="subs"><p class="small" style="margin:0">V tomto mesiaci tu nie je žiadna položka. Pridáte ju v karte Plán (Upraviť mesiac, Pridať z výdavkov).</p></div>';
  return '<div class="subs">'+debtNote+subsIn.map(s=>{
    const key=c.id+'.'+s.id, v=ss[key]||0, l=getLim(m,key), has=l!==null, pd=payDayOf(m,key);
    const st=has?status(v,l):null;
    return '<div class="sub"><div class="nm">'+subName(c,s,m)+'<span class="num">'+eur(v)+(has?' z '+eur(l):' · bez limitu')+(c.kind==='debt'?' · zostatok '+eur(debtBal(s)):(stavTxt({key:key,debt:false})?' · '+stavTxt({key:key,debt:false}):''))+(pd?' · platba '+pd+'.':'')+'</span></div>'+stepper('lim','data-c="'+c.id+'" data-s="'+s.id+'"',l||0,'limit',c.kind==='debt'?25:(has&&l>=100?10:5))+(has?'<div class="track"><div class="fill '+(st.k==='ok'?'':st.k)+'" style="width:'+pctOf(v,l)+'%"></div></div>':'')+'</div>';
  }).join('')+'</div>';
}
function grpStats(m,list){const cc=byCat(m);return {spent:sum(list.map(c=>cc[c.id])),limit:sum(list.map(c=>catLimit(c,m)))};}
function catRow(c,m,cc){
  const v=cc[c.id], lim=catLimit(c,m), s=status(v,lim), op=S.expanded===c.id;
  const right=lim>0?'<b>'+eur(v)+'</b> <i>/ '+eur(lim)+'</i>':'<b>'+eur(v)+'</b> <i>bez limitu</i>';
  return '<div class="b"><button class="b-head" data-act="exp" data-c="'+c.id+'" aria-expanded="'+op+'"><div class="b-top"><span class="ico">'+ic(c.icon,18)+'</span><div class="t"><b>'+c.name+'</b>'+flag(s)+'</div><span class="num rt2">'+right+'</span></div>'+(lim>0?'<div class="track thin"><div class="fill '+(s.k==='ok'?'':s.k)+'" style="width:'+pctOf(v,lim)+'%"></div></div>':'')+'</button>'+(op?subsHtml(c,m):'')+'</div>';
}
function catVisible(c,m,cc){
  if(c.kind==='tithe'||c.kind==='weeks'||c.kind==='manual'||c.kind==='debt')return true;
  if(cc[c.id]>0)return true;
  return c.subs.length?c.subs.some(x=>isIn(m,c.id+'.'+x.id)):isIn(m,c.id);
}
const GICON={des:'percent',byv:'home',kon:'cart',pra:'phone',odk:'archive',dlh:'cash',mim:'star'};
function budItem(it,m){
  const c=it.c,key=it.key,pr=key.split('.'),has=it.limit>0||getLim(m,key)!==null;
  const ds=c.kind==='debt'?c.subs.find(x=>x.id===pr[1]):null;
  const sv=stavTxt({key:key,debt:c.kind==='debt',sub:ds});
  const dbt=ds?'zostatok '+eur(debtBal(ds)):'';
  const info=[it.sub&&it.sub!==c.name?it.sub:(c.name!==it.name?c.name:''),sv,dbt,it.day?'platba '+it.day+'.':''].filter(Boolean).join(' · ');
  const st=has?status(it.spent,it.limit):null,step=c.kind==='debt'?25:(has&&it.limit>=100?10:5);
  const left=it.limit-it.spent;
  const ctl=c.kind==='tithe'?'<span class="small">sám, 10 % z príjmu</span>':c.kind==='manual'?'':stepper('lim','data-c="'+pr[0]+'"'+(pr[1]?' data-s="'+pr[1]+'"':''),it.limit||0,'limit',step);
  return '<div class="bi"><span class="ico bi-i">'+ic(iconOf(key),18)+'</span><div class="bi-n"><b>'+esc(it.name)+'</b><span>'+(info?esc(info):'&nbsp;')+'</span></div><div class="bi-c">'+ctl+'</div>'+
   '<div class="bi-b">'+(has?'<div class="track" role="img" aria-label="'+esc(it.name)+': '+eur(it.spent)+' z '+eur(it.limit)+'"><div class="fill '+(st.k==='ok'?'':st.k)+'" style="width:'+pctOf(it.spent,it.limit)+'%"></div></div>':'')+
   '<span class="bi-s num"><b>'+eur(it.spent)+'</b>'+(has?' z '+eur(it.limit)+' · '+(left>=0?'zostáva '+eur(left):'<span class="neg">nad o '+eur(-left)+'</span>'):' · bez limitu')+'</span></div></div>';
}
function viewBudgets(){
  const m=S.month,lv=monthLeaves(m),inc=income(m);
  const gs=DGRP.map(g=>{const its=lv.filter(x=>grpOfKey(x.key)===g.id);return {g:g,its:its,sp:sum(its.map(x=>x.spent)),lim:sum(its.map(x=>x.limit))};}).filter(x=>x.its.length);
  if(!gs.length)return head('Rozpočet')+'<section class="card"><p class="empty">Mesiac zatiaľ nemá žiadne položky. Pridajte ich v Pláne.</p></section>';
  const sel=gs.find(x=>x.g.id===S.grp)||gs.find(x=>x.g.id!=='des')||gs[0];
  const spentAll=sum(gs.map(x=>x.sp)),limAll=sum(gs.map(x=>x.lim)),left=limAll-spentAll;
  const hero='<section class="card bhero"><div class="bh-top"><div><div class="small">Rozpočet mesiaca</div><div class="big2 num">'+eur(limAll)+'</div></div>'+
   '<div class="bh-st"><div><span>Minuté</span><b class="num">'+eur(spentAll)+'</b></div><div><span>'+(left>=0?'Zostáva':'Nad rozpočtom')+'</span><b class="num '+(left>=0?'pos':'neg')+'">'+eur(Math.abs(left))+'</b></div><div><span>Príjem</span><b class="num">'+eur(inc)+'</b></div></div></div>'+
   '<div class="stack" role="img" aria-label="Rozdelenie rozpočtu podľa kategórií">'+gs.filter(x=>x.lim>0).map(x=>'<button class="g-'+x.g.id+'" data-act="grp" data-g="'+x.g.id+'" style="flex:'+x.lim+'" title="'+x.g.name+': '+eur(x.lim)+'" aria-label="'+x.g.name+' '+eur(x.lim)+'"></button>').join('')+'</div>'+
   '<div class="legend">'+gs.filter(x=>x.lim>0).map(x=>'<span class="g-'+x.g.id+'"><i></i>'+x.g.name+' <b class="num">'+eur(x.lim)+'</b></span>').join('')+'</div></section>';
  const tiles='<div class="tiles" role="group" aria-label="Kategórie">'+gs.map(x=>{
    const s=status(x.sp,x.lim),l=x.lim-x.sp;
    return '<button class="tile g-'+x.g.id+'" data-act="grp" data-g="'+x.g.id+'" aria-pressed="'+(sel.g.id===x.g.id)+'"><span class="tile-i">'+ic(GICON[x.g.id]||'dots',20)+'</span><span class="tile-n"><b>'+x.g.name+'</b><small class="num">'+eur(x.sp)+(x.lim>0?' z '+eur(x.lim):'')+'</small></span>'+
     (x.lim>0?'<span class="tile-t track thin"><span class="fill '+(s.k==='ok'?'':s.k)+'" style="width:'+pctOf(x.sp,x.lim)+'%"></span></span>':'')+'</button>';
  }).join('')+'</div>';
  const sm=sel.lim-sel.sp,sst=status(sel.sp,sel.lim);
  const note=sel.g.id==='dlh'?'<p class="small bnote">Limit je mesačná splátka. Zvyšok príjmu po ostatných kategóriách: '+eur(leftover(m))+'. Zostatok dlhov spolu: '+eur(sum(CAT.dlh.subs.map(debtBal)))+'.</p>':'';
  const manual=sel.g.id==='mim'&&txm(m).some(t=>t.cat==='ost')?'<div class="bnote"><div class="small" style="margin-bottom:6px">Ručné zápisy (Ostatné)</div>'+txRows(txm(m).filter(t=>t.cat==='ost').sort(byDateDesc))+'</div>':'';
  const detail='<section class="card bdet g-'+sel.g.id+'"><div class="bd-h"><span class="tile-i big">'+ic(GICON[sel.g.id]||'dots',24)+'</span><div class="bd-t"><h3>'+sel.g.name+'</h3><span class="small num">'+sel.its.length+(sel.its.length===1?' položka':sel.its.length<5?' položky':' položiek')+'</span></div><div class="bd-r num"><b>'+eur(sel.sp)+'</b><span class="small">'+(sel.lim>0?'z '+eur(sel.lim):'bez limitu')+'</span></div></div>'+
   (sel.lim>0?'<div class="track"><div class="fill '+(sst.k==='ok'?'':sst.k)+'" style="width:'+pctOf(sel.sp,sel.lim)+'%"></div></div>':'')+note+'<div class="bd-l">'+sel.its.map(x=>budItem(x,m)).join('')+'</div>'+manual+'</section>';
  const raw=rawPlan(m);
  return head('Rozpočet')+hero+'<div class="bud2"><div class="bud2-t">'+tiles+'</div><div class="bud2-r">'+detail+'<p class="note">Zmena limitu platí len pre mesiac '+mname(m)+'. Celý mesiac upravíte v karte Plán.</p>'+(raw>inc?'<div class="warnbox">Plán bez dlhov prevyšuje príjem o '+eur(raw-inc)+'.</div>':'')+'</div><div class="bud2-i">'+incomeBlock(m)+'</div></div>';
}

/* ---------- grafy a analytika ---------- */
function chartMonths(){
  const ids=vis(),N=ids.length,buds=ids.map(i=>budget(i)),tots=ids.map(total);
  const max=Math.ceil(Math.max(...buds,...tots)*1.08/1000)*1000;
  const W=340,H=180,l=36,r=6,t=16,b=24,pw=W-l-r,ph=H-t-b,y=v=>t+ph-v/max*ph,band=pw/N,bw=Math.min(28,band-8);
  let g='<defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" class="hatch-bg"/><line x1="0" y1="0" x2="0" y2="6" class="hatch-ln"/></pattern></defs>';
  for(let v=0;v<=max;v+=1000) g+='<line class="grid" x1="'+l+'" x2="'+(W-r)+'" y1="'+y(v)+'" y2="'+y(v)+'"/><text class="ax" x="'+(l-6)+'" y="'+(y(v)+3)+'" text-anchor="end">'+NF0.format(v)+'</text>';
  let bars='',marks='',hits='';
  ids.forEach((i,k)=>{
    const v=tots[k],bx=l+band*k+(band-bw)/2,top=y(v),sel=i===S.month,open=M_(i).status==='active';
    const fill=open?'url(#hatch)':sel?'var(--bar)':'var(--bar-soft)';
    const stroke=open?' stroke="var(--bar)" stroke-width="'+(sel?2.5:1.5)+'"':'';
    bars+='<path d="M'+bx+','+(t+ph)+' V'+(top+4)+' a4,4 0 0 1 4,-4 h'+(bw-8)+' a4,4 0 0 1 4,4 V'+(t+ph)+' Z" fill="'+fill+'"'+stroke+'/>';
    if(sel) bars+='<text class="vlab" x="'+(bx+bw/2)+'" y="'+(top-5)+'" text-anchor="middle">'+eur(v)+'</text>';
    bars+='<text class="ax" x="'+(bx+bw/2)+'" y="'+(H-7)+'" text-anchor="middle" style="'+(sel?'font-weight:700;fill:var(--ink)':'')+'">'+mshort(i)+'</text>';
    marks+='<line class="budget" x1="'+(l+band*k+3)+'" x2="'+(l+band*(k+1)-3)+'" y1="'+y(buds[k])+'" y2="'+y(buds[k])+'"/>';
    hits+='<rect class="hit" x="'+(l+band*k)+'" y="'+t+'" width="'+band+'" height="'+ph+'" data-act="pick" data-m="'+i+'" data-tip="'+mname(i)+': '+eur(v)+' z '+eur(buds[k])+(open?' (priebežne)':'')+'"/>';
  });
  return '<svg class="chart" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Výdavky v jednotlivých mesiacoch oproti rozpočtu mesiaca">'+g+bars+marks+hits+'</svg>';
}
function tableMonths(){
  return '<div class="tscroll"><table><thead><tr><th>Mesiac</th><th>Výdavky</th><th>Rozpočet</th><th>Rozdiel</th></tr></thead><tbody>'+vis().map(i=>{const v=total(i),b=budget(i),d=v-b,open=M_(i).status==='active';return '<tr><td>'+mname(i)+(open?' (priebežne)':'')+'</td><td>'+eur(v)+'</td><td>'+eur(b)+'</td><td class="'+(open?'':d>0?'bad':'ok')+'">'+(open?'–':sgn(d))+'</td></tr>';}).join('')+'</tbody></table></div>';
}
function breakdown(){
  const m=S.month,cc=byCat(m),tot=total(m)||1;
  const items=CATS.map(c=>({c,v:cc[c.id]})).filter(x=>x.v>0).sort((a,b)=>b.v-a.v),mx=items[0]?items[0].v:1,shown=items.slice(0,6),rest=items.slice(6);
  const v0=vis(),k0=v0.indexOf(m),prevs=v0.slice(Math.max(0,k0-3),k0),showDelta=M_(m).status==='closed'&&prevs.length>0;
  return '<div class="hb">'+shown.map(({c,v})=>{
    let d='';
    if(showDelta){const avg=sum(prevs.map(k=>byCat(k)[c.id]))/prevs.length;if(avg>0&&Math.abs(Math.round((v-avg)/avg*100))>=15){const pc=Math.round((v-avg)/avg*100);d='<div class="dl'+(pc>=15?' up':'')+'">'+(pc>0?'▲ +':'▼ −')+Math.abs(pc)+' % oproti priemeru predošlých mesiacov</div>';}}
    return '<div class="hb-r"><span class="nm">'+c.name+'</span><span class="vl num">'+eur(v)+' · '+Math.round(v/tot*100)+' %</span><div class="tr"><i style="width:'+v/mx*100+'%"></i></div>'+d+'</div>';
  }).join('')+(rest.length?'<p class="note">Ďalších '+rest.length+' kategórií: '+eur(sum(rest.map(x=>x.v)))+'</p>':'')+'</div>';
}
function insights(){
  const m=S.month,cc=byCat(m),list=[];
  const v0=vis(),k0=v0.indexOf(m),prevs=v0.slice(Math.max(0,k0-3),k0);
  if(M_(m).status==='closed'&&prevs.length){
    let best=null;CATS.filter(c=>c.kind!=='debt').forEach(c=>{const avg=sum(prevs.map(k=>byCat(k)[c.id]))/prevs.length,df=cc[c.id]-avg;if(!best||df>best.df)best={c,df};});
    if(best&&best.df>20) list.push('Najväčší nárast: <b>'+best.c.name+'</b>, o '+eur(best.df)+' viac než je priemer predošlých mesiacov.');
  }
  const over=leaves(m).filter(x=>x.spent>x.limit+.005).sort((a,b)=>(b.spent-b.limit)-(a.spent-a.limit));
  if(over.length) list.push('Nad limitom: '+over.slice(0,3).map(x=>'<b>'+esc(x.name)+'</b> (+'+eur(x.spent-x.limit)+')').join(', ')+(over.length>3?' a ďalšie '+(over.length-3):'')+'.');
  else list.push('Žiadna položka nie je nad limitom.');
  const dp=sum(txm(m).filter(t=>t.cat==='dlh').map(t=>t.amt));
  list.push('Na splátky dlhov išlo <b>'+eur(dp)+'</b>'+(M_(m).status==='closed'?' z plánovaných '+eur(catLimit(CAT.dlh,m)):'')+'.');
  return '<ul class="ins">'+list.map(x=>'<li>'+x+'</li>').join('')+'</ul>';
}
const GCOL={des:'#D6457A',byv:'#2F7FD1',kon:'#E08A1A',pra:'#7A5BD6',odk:'#2A9D8F',dlh:'#C4473D',mim:'#5B6B7A'};
function grpSums(m){const o={};DGRP.forEach(g=>o[g.id]=0);txm(m).forEach(t=>{o[grpOfKey(txKey(t))]+=t.amt;});return o;}
function grpLims(m){const o={};DGRP.forEach(g=>o[g.id]=0);monthLeaves(m).forEach(x=>{o[grpOfKey(x.key)]+=x.limit;});return o;}
function stackChart(){
  const ids=vis(),N=ids.length,sums=ids.map(grpSums),buds=ids.map(i=>sum(Object.values(grpLims(i)))),tots=sums.map(o=>sum(Object.values(o)));
  const mx=Math.max(1,...buds,...tots),step=mx>6000?2000:mx>2500?1000:500,max=Math.ceil(mx*1.08/step)*step;
  const W=420,H=210,l=40,r=6,t=14,b=26,pw=W-l-r,ph=H-t-b,y=v=>t+ph-v/max*ph,band=pw/N,bw=Math.min(40,band-10);
  let g='';
  for(let v=0;v<=max;v+=step)g+='<line class="grid" x1="'+l+'" x2="'+(W-r)+'" y1="'+y(v)+'" y2="'+y(v)+'"/><text class="ax" x="'+(l-6)+'" y="'+(y(v)+3)+'" text-anchor="end">'+NF0.format(v)+'</text>';
  let bars='',marks='',hits='';
  ids.forEach((i,k)=>{
    const bx=l+band*k+(band-bw)/2,sel=i===S.month;let acc=0;
    DGRP.forEach(gr=>{const v=sums[k][gr.id];if(v<=0)return;const y1=y(acc+v),h=y(acc)-y1;acc+=v;bars+='<rect x="'+bx+'" y="'+y1+'" width="'+bw+'" height="'+Math.max(0,h-.6)+'" rx="2" fill="'+GCOL[gr.id]+'" opacity="'+(sel?1:.5)+'"/>';});
    if(sel&&tots[k]>0)bars+='<text class="vlab" x="'+(bx+bw/2)+'" y="'+(y(tots[k])-5)+'" text-anchor="middle">'+eur(tots[k])+'</text>';
    bars+='<text class="ax" x="'+(bx+bw/2)+'" y="'+(H-8)+'" text-anchor="middle" style="'+(sel?'font-weight:700;fill:var(--ink)':'')+'">'+mshort(i)+'</text>';
    marks+='<line class="budget" x1="'+(l+band*k+3)+'" x2="'+(l+band*(k+1)-3)+'" y1="'+y(buds[k])+'" y2="'+y(buds[k])+'"/>';
    hits+='<rect class="hit" x="'+(l+band*k)+'" y="'+t+'" width="'+band+'" height="'+ph+'" data-act="pick" data-m="'+i+'" data-tip="'+mname(i)+': '+eur(tots[k])+' z '+eur(buds[k])+(M_(i).status==='active'?' (priebežne)':'')+'"/>';
  });
  return '<svg class="chart" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Výdavky po mesiacoch podľa kategórií oproti rozpočtu">'+g+bars+marks+hits+'</svg>';
}
function donut(m){
  const sums=grpSums(m),tot=sum(Object.values(sums));
  if(tot<=0)return '<p class="empty">V tomto mesiaci zatiaľ žiadny výdavok.</p>';
  const R=52,C=2*Math.PI*R;let off=0,arcs='';
  DGRP.forEach(g=>{const v=sums[g.id];if(v<=0)return;const len=v/tot*C;arcs+='<circle r="'+R+'" cx="70" cy="70" fill="none" stroke="'+GCOL[g.id]+'" stroke-width="18" stroke-dasharray="'+Math.max(0,len-1.5)+' '+(C-Math.max(0,len-1.5))+'" stroke-dashoffset="'+(-off)+'" transform="rotate(-90 70 70)"/>';off+=len;});
  const list=DGRP.filter(g=>sums[g.id]>0).sort((a,b)=>sums[b.id]-sums[a.id]).map(g=>'<a class="dl-r g-'+g.id+'" href="#rozpocet/'+GSLUG[g.id]+'"><span class="ico gi">'+ic(GICON[g.id],16)+'</span><span class="dl-n">'+g.name+'</span><span class="num dl-v">'+eur(sums[g.id])+'</span><span class="small num dl-p">'+Math.round(sums[g.id]/tot*100)+' %</span></a>').join('');
  return '<div class="donut-w"><svg class="donut" viewBox="0 0 140 140" role="img" aria-label="Rozdelenie výdavkov podľa kategórií">'+arcs+'<text x="70" y="66" text-anchor="middle" class="d-l">Minuté</text><text x="70" y="86" text-anchor="middle" class="d-v">'+eur(tot)+'</text></svg><div class="dl">'+list+'</div></div>';
}
function topItems(m){
  const lv=monthLeaves(m).filter(x=>x.spent>0).sort((a,b)=>b.spent-a.spent).slice(0,8),tot=total(m)||1,mx=lv[0]?lv[0].spent:1;
  if(!lv.length)return '<p class="empty">V tomto mesiaci zatiaľ žiadny výdavok.</p>';
  return lv.map(x=>'<div class="ti g-'+grpOfKey(x.key)+'">'+gIco(x.key)+'<div class="ti-m"><div class="ti-h"><b>'+esc(x.name)+'</b><span class="num"><b>'+eur(x.spent)+'</b> <span class="small">'+Math.round(x.spent/tot*100)+' %</span></span></div><div class="track thin"><div class="fill gfill" style="width:'+x.spent/mx*100+'%"></div></div></div></div>').join('');
}
function planVs(m){
  const sums=grpSums(m),lims=grpLims(m);
  return DGRP.filter(g=>sums[g.id]>0||lims[g.id]>0).map(g=>{
    const sp=sums[g.id],lim=lims[g.id],d=sp-lim,st=lim>0?status(sp,lim):{k:'ok'};
    return '<div class="pv g-'+g.id+'"><span class="ico gi">'+ic(GICON[g.id],16)+'</span><div class="pv-m"><div class="pv-h"><b>'+g.name+'</b><span class="num"><b>'+eur(sp)+'</b><span class="small"> / '+eur(lim)+'</span></span></div><div class="track thin"><div class="fill '+(st.k==='ok'?'':st.k)+'" style="width:'+pctOf(sp,lim)+'%"></div></div><span class="small '+(d>.5?'neg':'')+'">'+(lim<=0&&sp>0?'bez limitu':d>.5?'nad plánom o '+eur(d):'pod plánom o '+eur(-d))+'</span></div></div>';
  }).join('')||'<p class="empty">Zatiaľ bez dát.</p>';
}
function viewAnalytics(){
  const tabs='<div class="seg full" role="group" aria-label="Analytika"><button data-act="anatab" data-v="ana" aria-pressed="'+(S.anaTab==='ana')+'">Grafy</button><button data-act="anatab" data-v="rep" aria-pressed="'+(S.anaTab==='rep')+'">Report</button></div>';
  if(S.anaTab==='rep') return head('Analytika')+tabs+viewReport();
  const m=S.month,who=byWho(m),wt=who.J+who.I||1,spent=total(m),bud=budget(m),pi=prevVis(m),diff=spent-bud;
  const ids=vis(),avg=ids.length?sum(ids.map(total))/ids.length:0;
  const kpi=(k,v,s,cls)=>'<div><span>'+k+'</span><b class="num '+(cls||'')+'">'+v+'</b><small>'+(s||'&nbsp;')+'</small></div>';
  const hero='<section class="card bhero"><div class="kpi4">'+
   kpi('Minuté · '+mname(m),eur(spent),pi>=0?sgn(spent-total(pi))+' voči '+mshort(pi):'')+
   kpi('Rozpočet mesiaca',eur(bud),'príjem '+eur(income(m)))+
   kpi(diff>0?'Nad rozpočtom':'Pod rozpočtom',eur(Math.abs(diff)),M_(m).status==='active'?'priebežne':'',diff>0?'neg':'pos')+
   kpi('Priemer mesiaca',eur(avg),ids.length+' '+(ids.length===1?'mesiac':ids.length<5?'mesiace':'mesiacov'))+'</div></section>';
  const trend='<div class="blk"><div class="row-between" style="margin-bottom:8px"><h3 style="margin:0">Výdavky po mesiacoch</h3><div class="seg" role="group" aria-label="Zobrazenie"><button data-act="trend" data-v="chart" aria-pressed="'+(S.trend==='chart')+'">Graf</button><button data-act="trend" data-v="table" aria-pressed="'+(S.trend==='table')+'">Tabuľka</button></div></div><section class="card">'+
   (S.trend==='chart'?'<div class="legend sleg">'+DGRP.map(g=>'<span><i style="background:'+GCOL[g.id]+'"></i>'+g.name+'</span>').join('')+'<span><i class="sw dash"></i>Rozpočet</span></div>'+stackChart()+'<p class="note">Klepnutím na stĺpec vyberiete mesiac.</p>':tableMonths())+'</section></div>';
  const kam='<div class="blk"><h3>Kam idú peniaze · '+mname(m)+'</h3><section class="card">'+donut(m)+'</section></div>';
  const pv='<div class="blk"><h3>Plán a skutočnosť · '+mname(m)+'</h3><section class="card">'+planVs(m)+'</section></div>';
  const ti='<div class="blk"><h3>Najväčšie položky · '+mname(m)+'</h3><section class="card">'+topItems(m)+'</section></div>';
  const kto='<div class="blk"><h3>Kto platí · '+mname(m)+'</h3><section class="card"><div class="legend" style="margin:0"><span>'+dot('J',true)+'J <b class="num">'+eur(who.J)+'</b> · '+Math.round(who.J/wt*100)+' %</span><span>'+dot('I',true)+'I <b class="num">'+eur(who.I)+'</b> · '+Math.round(who.I/wt*100)+' %</span></div><div class="split"><i class="J" style="flex:'+who.J/wt+'"></i><i class="I" style="flex:'+who.I/wt+'"></i></div></section></div>';
  const ins='<div class="blk"><h3>Čo si všimnúť</h3><section class="card">'+insights()+'</section></div>';
  return head('Analytika')+tabs+hero+'<div class="ana2"><div class="ana-l">'+trend+pv+ins+'</div><div class="ana-r">'+kam+ti+kto+'</div></div>';
}
function viewReport(){
  const m=S.month;
  if(M_(m).status==='active'){
    const closed=S.months.map((x,i)=>i).filter(i=>S.months[i].status==='closed'),li=closed[closed.length-1];
    return '<section class="card"><h3 style="margin:0 0 8px;font-size:15px">'+mname(m)+' ešte beží</h3><p class="sentence" style="margin-bottom:12px">Report vznikne po uzavretí mesiaca v karte Plán.</p>'+(li!==undefined?'<button class="btn" data-act="goLast" data-m="'+li+'">Zobraziť '+mname(li).toLowerCase()+'</button>':'')+'</section>'+deliv();
  }
  const spent=total(m),bud=budget(m),diff=spent-bud,rest=income(m)-spent,cc=byCat(m),pi=prevVis(m);
  const sentence='V mesiaci '+mname(m).toLowerCase()+' ste minuli '+eur(spent)+', '+(diff>0?'o '+eur(diff)+' nad rozpočtom':'o '+eur(-diff)+' pod rozpočtom')+'. Z príjmov '+eur(income(m))+' vám '+(rest>=0?'zostalo '+eur(rest)+'.':'chýba '+eur(-rest)+'.');
  const lv=leaves(m).filter(x=>x.spent>x.limit+.005).sort((a,b)=>(b.spent-b.limit)-(a.spent-a.limit));
  const row=(n,pl,sk)=>{const d=sk-pl;return '<tr><td>'+n+'</td><td>'+eur(pl)+'</td><td>'+eur(sk)+'</td><td class="'+(d>.5?'bad':'ok')+'">'+sgn(d)+'</td></tr>';};
  const sums=grpSums(m),lims=grpLims(m);
  const gr=DGRP.filter(g=>sums[g.id]>0||lims[g.id]>0).map(g=>row(g.name,lims[g.id],sums[g.id])).join('')+row('<b>Spolu</b>',bud,spent);
  const all=S.repAll?'<div class="tscroll" style="margin-top:10px"><table><tbody>'+monthLeaves(m).filter(x=>x.limit>0||x.spent>0).map(x=>row(esc(x.name),x.limit,x.spent)).join('')+'</tbody></table></div>':'';
  return '<section class="card"><p class="sentence">'+sentence+'</p></section>'+
  '<section class="card"><div class="kpis"><div><div class="k">Príjmy</div><div class="v num">'+eur(income(m))+'</div></div><div><div class="k">Výdavky</div><div class="v num">'+eur(spent)+'</div><div class="s num">'+(pi>=0?sgn(spent-total(pi))+' voči '+mshort(pi):'')+'</div></div><div><div class="k">Zostalo</div><div class="v num">'+eur(rest)+'</div></div></div></section>'+
  '<div class="blk"><h3>Plnenie rozpočtu</h3><section class="card"><div class="tscroll"><table><thead><tr><th>Kategória</th><th>Plán</th><th>Skutočnosť</th><th>Rozdiel</th></tr></thead><tbody>'+gr+'</tbody></table></div><button class="link" data-act="repAll" aria-expanded="'+S.repAll+'">'+(S.repAll?'Skryť položky':'Zobraziť položky')+'</button>'+all+'</section></div>'+
  '<div class="blk"><h3>Položky nad limitom</h3><section class="card">'+(lv.length?'<div class="list">'+lv.slice(0,5).map(x=>'<div class="li"><div class="t"><b>'+esc(x.name)+'</b><span class="num">'+eur(x.spent)+' z '+eur(x.limit)+'</span></div><span class="a num" style="color:var(--bad)">+'+eur(x.spent-x.limit)+'</span></div>').join('')+'</div>':'<p class="empty">Všetky položky sú v limite.</p>')+'</section></div>'+deliv();
}
function deliv(){return '';}
function _delivOld(){
  return '<div class="blk"><h3>Doručenie reportu</h3><section class="card"><p class="small" style="margin:0 0 4px">E-mailom po uzavretí mesiaca. V prototype sa neodosiela.</p>'+['J','I'].map(w=>'<div class="sw-row"><span class="who">'+dot(w,true)+PEOPLE[w]+'</span><button class="switch" role="switch" aria-checked="'+S.rep[w]+'" aria-label="Posielať report: '+PEOPLE[w]+'" data-act="rep" data-w="'+w+'"></button></div>').join('')+'</section></div>';
}

/* ---------- plán ---------- */
function nextMonthOf(){const l=S.months[S.months.length-1];return {y:l.mo===11?l.y+1:l.y,mo:(l.mo+1)%12};}
function householdBlock(){
  const link=location.origin+location.pathname+'#k='+(S.code||'');
  return '<section class="card dev"><h3>Toto zariadenie</h3><div class="row-between"><span>Na tomto zariadení som</span><div class="whoseg" style="min-width:150px">'+['J','I'].map(w=>'<button type="button" data-act="meSet" data-w="'+w+'" aria-pressed="'+(S.me===w)+'">'+dot(w,true)+PEOPLE[w]+'</button>').join('')+'</div></div></section>'+
   '<section class="card dev"><h3>Pripojenie ďalšieho zariadenia</h3><p class="small" style="margin:0 0 10px">Na ďalšom zariadení otvorte tento odkaz alebo zadajte kód. Kto ho má, vidí a upravuje rozpočet, preto ho nezdieľajte nikde inde.</p>'+
   '<div class="code">'+esc((S.code||'').replace(/(.{4})/g,'$1 ').trim())+'</div>'+
   '<div class="btns" style="margin-top:12px"><button class="btn ghost" data-act="copyLink" data-v="'+esc(link)+'">Skopírovať odkaz</button><button class="btn ghost" data-act="copyCode" data-v="'+esc(S.code||'')+'">Skopírovať kód</button></div>'+
   '<button class="link" data-act="disconnect">Odpojiť toto zariadenie</button></section>';
}
function itemsBlock(){
  const its=itemList(),byG={};
  its.forEach(it=>{const g=grpOfKey(it.key);(byG[g]=byG[g]||[]).push(it);});
  const groups=DGRP.filter(g=>byG[g.id]).map(g=>{
    const list=byG[g.id],tracked=list.filter(it=>itemStav(it).tracked).length,open=!!S.openPCat[g.id];
    const rows=open?list.map(it=>{
      const c=it.cat,v=itemStav(it),op=S.itemOpen===it.key;
      let panel='';
      if(op){
        if(it.debt)panel='<div class="ip"><p class="small" style="margin:0">Zostatok dlhu '+eur(v.value)+'. Každá splátka, ktorú pridáte, ho zníži automaticky.</p><div class="btns"><button type="button" class="btn ghost sm" data-act="idEdit" data-key="'+it.key+'">Upraviť názov, kategóriu, budget, dátum</button></div></div>';
        else{
          const x=S.items[it.key]||{stav:null,auto:false};
          panel='<div class="ip"><label class="fld2" for="i-stav">Stav (€)<input id="i-stav" class="num-in" type="text" inputmode="decimal" value="'+(x.stav===null?'':x.stav)+'" placeholder="bez stavu"></label>'+
            '<label class="chk" for="i-auto"><input id="i-auto" type="checkbox"'+(x.auto?' checked':'')+'> Automaticky odrátavať, keď sa pridá výdavok z tejto položky</label>'+
            '<p class="note" style="margin:0">Zapnuté: stav sa zníži o každý výdavok pridaný od dnešného dňa. Bez stavu sa nič nesleduje.</p>'+
            '<div class="btns"><button type="button" class="btn sm" data-act="itemSave">Uložiť</button><button type="button" class="btn ghost sm" data-act="idEdit" data-key="'+it.key+'">Upraviť názov, kategóriu, budget, dátum</button></div></div>';
        }
      }
      return '<button class="ir" data-act="itemOpen" data-key="'+it.key+'" aria-expanded="'+op+'">'+gIco(it.key,16)+'<span class="nm">'+esc(c.subs.length?it.name:c.name)+(c.subs.length?'<small class="cn"> · '+esc(c.name)+'</small>':'')+'</span><span class="num st">'+(v.tracked?'Stav '+eur(v.value)+(v.auto&&!it.debt?' · auto':''):'<i>bez stavu</i>')+'</span></button>'+panel;
    }).join(''):'';
    return '<div class="pc g-'+g.id+'"><button type="button" class="pc-h" data-act="pcat" data-c="'+g.id+'" aria-expanded="'+open+'"><span class="chev" aria-hidden="true"></span><span class="ico gi">'+ic(GICON[g.id],18)+'</span><span class="pc-n"><b>'+g.name+'</b><small>'+list.length+(list.length===1?' položka':list.length<5?' položky':' položiek')+(tracked?' · '+tracked+' so stavom':'')+'</small></span></button>'+(open?'<div class="pc-b">'+rows+'</div>':'')+'</div>';
  }).join('');
  return '<section class="card"><button type="button" class="btn" style="width:100%;margin-bottom:12px" data-act="idNew">+ Nový výdavok</button><p class="small" style="margin:0 0 8px">Zoznam všetkých výdavkov. Pri niektorých sledujete aktuálny stav. Položky z neho pridáte do mesiaca v editore mesiaca.</p>'+groups+'</section>';
}
async function saveItem(){
  const key=S.itemOpen;if(!key)return;
  const raw=$('i-stav').value.trim(),stav=raw===''?null:parseFloat(raw.replace(/\s/g,'').replace(',','.'));
  if(raw!==''&&(!isFinite(stav)||stav<0)){toast('Zadajte platný stav.',true);return;}
  const auto=$('i-auto').checked&&stav!==null;
  S.busy++;
  try{
    await rpc('set_item',{p_code:S.code,p_key:key,p_stav:stav,p_auto:auto});
    const old=S.items[key];
    S.items[key]={stav:stav,auto:auto,asOf:(old&&old.stav===stav&&old.auto===auto)?old.asOf:new Date(TODAY)};
    S.itemOpen=null;render(true);toast('Položka uložená');
  }catch(err){console.error(err);toast('Položku sa nepodarilo uložiť',true);}
  finally{S.busy--;}
}
const PSLUG={mes:'mesiace',vyd:'vydavky',zar:'zariadenie'};
function monthCard(i,kind){
  const M=M_(i),sp=total(i),b=budget(i),lims=grpLims(i),tl=sum(Object.values(lims))||1,next=S.months[i+1]&&S.months[i+1].status==='planned'?i+1:-1;
  const pill=kind==='active'?'<span class="pill ok">'+ic('check',14)+'Aktívny</span>':kind==='planned'?'<span class="pill warn">Plánovaný</span>':'<span class="pill">Uzavretý</span>';
  const stack='<div class="mc-stack" title="Rozdelenie rozpočtu">'+DGRP.filter(g=>lims[g.id]>0).map(g=>'<i style="flex:'+lims[g.id]+';background:'+GCOL[g.id]+'"></i>').join('')+'</div>';
  const st=kind==='planned'?'':status(sp,b);
  const stats='<div class="mc-st"><div><span>Príjem</span><b class="num">'+eur(kind==='planned'?incExp(i):income(i))+'</b></div><div><span>Rozpočet</span><b class="num">'+eur(b)+'</b></div>'+(kind==='planned'?'':'<div><span>Minuté</span><b class="num">'+eur(sp)+'</b></div>')+'</div>';
  let btns;
  if(kind==='active'){
    btns='<button class="btn ghost sm" data-act="editM" data-m="'+i+'">Upraviť mesiac</button>'+(next>=0?'<button class="btn sm" data-act="askSwitch">Prepnúť na '+mname(next)+'</button>':'');
  } else if(kind==='planned'){
    btns='<button class="btn ghost sm" data-act="editM" data-m="'+i+'">Upraviť mesiac</button>';
  } else btns='<button class="btn ghost sm" data-act="viewM" data-m="'+i+'">Zobraziť</button><button class="btn ghost sm" data-act="editM" data-m="'+i+'">Upraviť</button>';
  const conf=kind==='active'&&S.confirm&&next>=0?'<div class="confirm"><p style="margin:0 0 10px"><b>Ukončiť '+mname(i)+' a aktivovať '+mname(next)+'?</b><br><span class="small">'+mname(i)+' sa presunie do histórie. Dá sa naďalej otvoriť aj upraviť.</span></p><div class="btns"><button class="btn sm" data-act="doSwitch">Áno, prepnúť</button><button class="btn sm ghost" data-act="cancelSwitch">Zrušiť</button></div></div>':'';
  const hint=kind==='active'&&next<0?'<p class="note" style="margin:10px 0 0">Na prepnutie najprv pridajte nasledujúci mesiac.</p>':'';
  return '<div class="mc mc-'+kind+'"><div class="mc-h"><div><b class="mc-n">'+mname(i)+' '+M.y+'</b></div>'+pill+'</div>'+stats+
   (kind==='planned'?'':'<div class="track"><div class="fill '+(st.k==='ok'?'':st.k)+'" style="width:'+pctOf(sp,b)+'%"></div></div>')+stack+'<div class="btns">'+btns+'</div>'+conf+hint+'</div>';
}
function viewPlan(){
  const act=S.months.findIndex(x=>x.status==='active');
  const planned=S.months.map((x,i)=>i).filter(i=>S.months[i].status==='planned');
  const closed=S.months.map((x,i)=>i).filter(i=>S.months[i].status==='closed').reverse();
  const nx=nextMonthOf(),pt=PSLUG[S.ptab]?S.ptab:'mes';
  const tabs='<div class="seg full" role="group" aria-label="Plán">'+[['mes','Mesiace'],['vyd','Výdavky'],['zar','Zariadenie']].map(x=>'<button data-act="ptab" data-v="'+x[0]+'" aria-pressed="'+(pt===x[0])+'">'+x[1]+'</button>').join('')+'</div>';
  let body='';
  if(pt==='mes'){
    const addCard='<button class="mc mc-add" data-act="newM"><span class="mc-plus">'+ic('plus',22)+'</span><b>Pridať mesiac</b><span class="small">'+MN12[nx.mo]+' '+nx.y+'</span></button>';
    body=(act>=0?'<div class="blk"><h3>Aktívny mesiac</h3>'+monthCard(act,'active')+'</div>':'')+
     '<div class="blk"><h3>Nasledujúce mesiace</h3><div class="mgrid">'+planned.map(i=>monthCard(i,'planned')).join('')+addCard+'</div></div>'+
     '<div class="blk"><h3>História</h3>'+(closed.length?'<div class="mgrid">'+closed.map(i=>monthCard(i,'closed')).join('')+'</div>':'<section class="card"><p class="empty">Zatiaľ žiadny uzavretý mesiac.</p></section>')+'</div>';
  } else if(pt==='vyd') body='<div class="blk"><h3>Výdavky <span class="small">'+itemList().length+' položiek</span></h3>'+itemsBlock()+'</div>';
  else body='<div class="blk"><h3>Vzhľad</h3><section class="card dev"><p class="small" style="margin:0 0 10px">Svetlý alebo tmavý režim a druhý dizajn aplikácie.</p><div class="lookrow">'+lookCtl()+'</div></section></div><div class="blk"><h3>Zariadenie a zdieľanie</h3>'+householdBlock()+'</div>';
  return '<div class="sh"><h1>Plán</h1></div>'+tabs+'<div class="plan2">'+body+'</div>';
}

/* ---------- dialóg výdavku (názov, kategória, budget, dátum) ---------- */
const ICON_PICK=['home','cart','car','heart','drop','shirt','phone','cash','sun','trend','archive','shield','compass','gift','brief','bolt','utensils','fuel','wrench','key','music','play','chat','bag','book','child','users','card','coin','luggage','star','building','palette','signal','umbrella','road','clip','sparkle','medical','percent'];
function openItemDlg(o){
  let d;
  if(o.key){
    const it=itemList().find(x=>x.key===o.key),df=S.defs[o.key]||{},dp=DEFPLAN.find(p=>p.key===o.key);
    const day=df.day||(dp&&!df.name&&df.day!==null?dp.d:null);
    d={key:o.key,name:df.name||(it?it.name:''),grp:grpOfKey(o.key),budget:df.budget!==undefined&&df.budget!==null?df.budget:(DEFLIM[o.key]!==undefined?DEFLIM[o.key]:null),dateOn:!!day,day:day||1,icon:df.icon||'',custom:o.key.indexOf('x.')===0};
  } else d={key:null,name:'',grp:o.grp||'kon',budget:null,dateOn:false,day:1,icon:'',custom:true};
  d.add=!!o.add;S.idlg=d;renderIdlg();$('idlg').hidden=false;setTimeout(()=>{const n=$('id-name');if(n)n.focus();},30);
}
function idSync(){
  const d=S.idlg;if(!d||!$('id-name'))return;
  d.name=$('id-name').value;d.budgetTxt=$('id-bud').value;
  if($('id-day'))d.day=$('id-day').value;
}
function renderIdlg(){
  const d=S.idlg;if(!d)return;
  const bud=d.budgetTxt!==undefined?d.budgetTxt:(d.budget===null?'':String(d.budget).replace('.',','));
  $('idlg').innerHTML='<form class="sheet" id="iform" novalidate aria-label="Výdavok"><header><h2>'+(d.key?'Upraviť výdavok':'Nový výdavok')+'</h2><button type="button" class="x" data-act="idClose" aria-label="Zavrieť">'+ic('x',18)+'</button></header>'+
   '<label class="fld" for="id-name">Názov<input id="id-name" type="text" maxlength="60" autocomplete="off" placeholder="Napr. Telocvičňa" value="'+esc(d.name)+'"></label>'+
   '<div><div class="sec-t" style="margin-bottom:8px">Kategória</div><div class="subchips">'+DGRP.map(g=>'<button type="button" class="sc" data-act="idGrp" data-g="'+g.id+'" aria-pressed="'+(d.grp===g.id)+'">'+g.name+'</button>').join('')+'</div></div>'+
   '<label class="fld" for="id-bud">Budget (€ na mesiac)<input id="id-bud" type="text" inputmode="decimal" autocomplete="off" placeholder="bez budgetu" value="'+esc(bud)+'"></label>'+
   '<div class="dt idd"><button type="button" class="switch sm" role="switch" aria-checked="'+d.dateOn+'" data-act="idDate" aria-label="Dátum platby"></button><span>Dátum platby</span>'+(d.dateOn?'<label class="dtl" for="id-day">Deň v mesiaci<input class="num-in sm" id="id-day" type="text" inputmode="numeric" value="'+esc(d.day)+'"></label>':'<span class="small">vypnutý</span>')+'</div>'+
   '<div><div class="sec-t" style="margin-bottom:8px">Ikonka</div><div class="icopick">'+ICON_PICK.map(n=>'<button type="button" class="icb g-'+d.grp+'" data-act="idIcon" data-i="'+n+'" aria-pressed="'+((d.icon||GICON[d.grp])===n||(d.icon===''&&false))+'" aria-label="'+n+'">'+ic(n,18)+'</button>').join('')+'</div></div>'+
   '<div class="msg bad" id="id-msg" role="alert"></div>'+
   '<button class="btn" type="submit">Uložiť</button>'+(d.key&&d.custom?'<button type="button" class="btn ghost" data-act="idDel">Zmazať výdavok</button>':'')+'</form>';
}
function closeIdlg(){S.idlg=null;$('idlg').hidden=true;$('idlg').innerHTML='';}
async function saveItemDef(del){
  idSync();const d=S.idlg;if(!d)return;
  const msg=t=>{const m=$('id-msg');if(m)m.textContent=t;};
  const name=d.name.trim();if(!name&&!del){msg('Zadajte názov.');return;}
  let budget=null;const bt=(d.budgetTxt||'').trim();
  if(bt!==''){budget=parseFloat(bt.replace(/\s/g,'').replace(',','.'));if(!isFinite(budget)||budget<0){msg('Budget musí byť číslo.');return;}}
  let day=null;if(d.dateOn){day=parseInt(d.day,10);if(!(day>=1&&day<=31)){msg('Deň musí byť od 1 do 31.');return;}}
  S.busy++;
  try{
    const key=await rpc('save_item_def',{p_code:S.code,p_key:d.key,p_name:name||d.name,p_grp:d.grp,p_budget:budget,p_day:day,p_icon:d.icon||null,p_deleted:!!del});
    await loadAll(false,true);
    if(E){
      if(del){delete E.draft.lim[key];delete E.draft.dates[key];}
      else if(d.add){E.draft.lim[key]=budget;if(day)E.draft.dates[key]=day;}
    }
    closeIdlg();render(true);if(E)renderEditor(true);
    toast(del?'Výdavok zmazaný':'Výdavok uložený');
  }catch(err){console.error(err);msg('Nepodarilo sa uložiť. Skúste to znova.');}
  finally{S.busy--;}
}

/* ---------- editor mesiaca ---------- */
let E=null;
const subNameCount=()=>{const n={};CATS.forEach(c=>c.subs.forEach(x=>{n[x.name]=(n[x.name]||0)+1;}));return n;};
function planLabel(key){
  const p=key.split('.'),c=CAT[p[0]];if(!c)return key;
  if(!p[1]||!c.subs.length)return c.name;
  const sx=c.subs.find(x=>x.id===p[1]);if(!sx)return c.name;
  return subNameCount()[sx.name]>1?c.name+' · '+sx.name:sx.name;
}
function openEditor(mode,idx){
  let src,y,mo;
  if(mode==='edit'){src=M_(idx);y=src.y;mo=src.mo;}
  else{src=S.months.reduce((a,b)=>b.seq>a.seq?b:a);const n=nextMonthOf();y=n.y;mo=n.mo;}
  E={mode,idx,y,mo,draft:{inc:Object.assign({},src.inc),lim:Object.assign({},src.lim),dates:src.plan.reduce((o,p)=>{if(o[p.key]===undefined)o[p.key]=p.d;return o;},{})}};
  renderEditor();$('editor').hidden=false;
}
function edSums(){
  const dr=E.draft,inc=dr.inc.J+dr.inc.I;let tot=0;const g={};
  const add=(key,v)=>{const id=grpOfKey(key);g[id]=(g[id]||0)+v;tot+=v;};
  CATS.forEach(c=>{
    if(c.kind==='manual')return;
    if(c.kind==='tithe'){add('des',inc*.1);return;}
    if(c.subs.length)c.subs.forEach(x=>{const k=c.id+'.'+x.id,n=dr.lim[k];if(typeof n==='number')add(k,n);});
    else{const n=dr.lim[c.id];if(typeof n==='number')add(c.id,n);}
  });
  return {inc,tot,g};
}
function edUpdSums(){
  const m=edSums(),ed=$('editor');
  const set=(id,t)=>{ed.querySelectorAll('[data-sum="'+id+'"]').forEach(el=>{el.textContent=t;});};
  set('inc',eur(m.inc));set('tot',eur(m.tot));
  const d=m.inc-m.tot,el=ed.querySelector('[data-sum="diff"]');
  if(el){el.textContent=(d>=0?'Zostáva ':'Nad príjem o ')+eur(Math.abs(d));el.className='ed-diff '+(d>=0?'ok':'bad');}
  Object.keys(m.g).forEach(k=>set('g.'+k,eur(m.g[k])));
}
function renderEditor(keep){
  const ed=$('editor'),old=ed.querySelector('.ed-body'),st=old&&keep?old.scrollTop:0,dr=E.draft,M={y:E.y,mo:E.mo};
  const m=edSums();
  const dateCell=(key,label)=>{
    const on=dr.dates[key]!==undefined,idk=key.replace('.','-');
    return '<div class="er-d"><button type="button" class="switch sm" role="switch" aria-checked="'+on+'" data-act="dateToggle" data-key="'+key+'" aria-label="Dátum platby: '+esc(label)+'"></button>'+(on?'<label for="e-date-'+idk+'">Deň<input class="num-in sm" type="text" inputmode="numeric" id="e-date-'+idk+'" data-k="date.'+key+'" value="'+dr.dates[key]+'"></label>':'<span class="small">bez dátumu</span>')+'</div>';
  };
  const limCell=(id,key,aria)=>{const v=dr.lim[key];return '<div class="er-l"><input class="num-in" type="text" inputmode="decimal" id="'+id+'" data-k="lim.'+key+'" value="'+(v===null||v===undefined?'':v)+'" placeholder="bez limitu" aria-label="Limit '+esc(aria)+'"><span>€</span></div>';};
  const rm=(key,label)=>'<button type="button" class="er-x" data-act="itemOff" data-key="'+key+'" aria-label="Odstrániť z mesiaca: '+esc(label)+'">'+ic('x',16)+'</button>';
  const inLim=k=>Object.prototype.hasOwnProperty.call(dr.lim,k);
  const row=(name,hint,lim,date,x,key)=>'<div class="er"><div class="er-n">'+(key?gIco(key,16):'')+'<span class="ern-t">'+name+(hint?'<small>'+hint+'</small>':'')+'</span></div>'+lim+date+(x||'<span></span>')+'</div>';
  const head='<div class="er er-h"><div>Položka</div><div>Limit</div><div>Platba v pevný deň</div><span></span></div>';
  const entries=[];
  CATS.filter(c=>c.kind!=='manual').forEach(c=>{
    if(c.kind==='tithe'){
      entries.push({key:'des',html:row(c.name,'10 % z príjmu','<div class="er-l er-auto">'+eur(m.inc*.1)+'</div>',dateCell('des',c.name),'','des')});
    } else if(c.subs.length){
      c.subs.forEach((x,k)=>{
        const key=c.id+'.'+x.id;
        if(c.kind!=='weeks'&&!inLim(key))return;
        const sv=c.kind==='weeks'?'':stavTxt({key:key,debt:c.kind==='debt',sub:x});
        const name=c.kind==='weeks'?'Jedlo · týždeň '+weekInfoM(M,k).n:esc(x.name);
        const hint=[c.kind==='weeks'?weekInfoM(M,k).range:c.name,sv,c.kind==='debt'?'limit = mesačná splátka':''].filter(Boolean).join(' · ');
        entries.push({key:key,html:row(name,hint,limCell('e-lim-'+c.id+'-'+x.id,key,x.name),c.kind==='weeks'?'<div class="er-d"><span class="small">—</span></div>':dateCell(key,x.name),c.kind==='weeks'?'':rm(key,x.name),key)});
      });
    } else if(inLim(c.id)){
      const sv=stavTxt({key:c.id,debt:false});
      entries.push({key:c.id,html:row(c.name,sv,limCell('e-lim-'+c.id,c.id,c.name),dateCell(c.id,c.name),rm(c.id,c.name),c.id)});
    }
  });
  const groups=DGRP.map(g=>{
    const es=entries.filter(e=>grpOfKey(e.key)===g.id),av=itemList().filter(it=>grpOfKey(it.key)===g.id&&!inLim(it.key));
    const add='<div class="eg-add"><span class="small">Pridať do mesiaca</span><div class="subchips">'+av.map(it=>{const c=it.cat,sv=stavTxt(it);return '<button type="button" class="sc" data-act="itemOn" data-key="'+it.key+'">+ '+esc(c.subs.length?it.name:c.name)+(sv?' <span class="small">'+sv+'</span>':'')+'</button>';}).join('')+'<button type="button" class="sc new" data-act="idNew" data-g="'+g.id+'" data-add="1">+ Nový výdavok</button></div></div>';
    return '<section class="card eg2 g-'+g.id+'"><div class="eg2-h"><span class="ico gi">'+ic(GICON[g.id],18)+'</span><h3>'+g.name+'</h3><b class="num" data-sum="g.'+g.id+'">'+eur(m.g[g.id]||0)+'</b></div>'+(es.length?es.map(e=>e.html).join(''):'<p class="small" style="margin:6px 0">Zatiaľ bez položiek v tomto mesiaci.</p>')+add+'</section>';
  }).join('');
  const d=m.inc-m.tot;
  ed.innerHTML='<div class="ed-head"><button type="button" class="x" data-act="edClose" aria-label="Zavrieť">'+ic('x',18)+'</button><h2>'+(E.mode==='new'?'Nový mesiac':'Upraviť mesiac')+' · '+MN12[E.mo]+' '+E.y+'</h2></div>'+
   '<div class="ed-sum"><div><span>Príjem</span><b data-sum="inc">'+eur(m.inc)+'</b></div><div><span>Rozpočet spolu</span><b data-sum="tot">'+eur(m.tot)+'</b></div><div class="ed-diff '+(d>=0?'ok':'bad')+'" data-sum="diff">'+(d>=0?'Zostáva ':'Nad príjem o ')+eur(Math.abs(d))+'</div></div>'+
   '<div class="ed-body">'+(E.mode==='new'?'<p class="small" style="margin:0">Predvyplnené podľa naposledy pridaného mesiaca. Upravte, čo treba, a uložte.</p>':'')+
   '<section class="card eg2 g-inc"><div class="eg2-h"><span class="ico gi">'+ic('cash',18)+'</span><h3>Očakávaný príjem</h3><b class="num" data-sum="inc">'+eur(m.inc)+'</b></div>'+['J','I'].map(w=>'<div class="er er-inc"><div class="er-n">'+dot(w,true)+'<span class="ern-t">'+PEOPLE[w]+'</span></div><div class="er-l"><input class="num-in" type="text" inputmode="decimal" id="e-inc-'+w+'" data-k="inc.'+w+'" value="'+dr.inc[w]+'" aria-label="Príjem '+esc(PEOPLE[w])+'"><span>€</span></div></div>').join('')+'</section>'+
   '<p class="small ed-note">Pri každej položke nastavte limit. Zapnite „Platba v pevný deň“, ak sa platí v konkrétny deň. Zobrazí sa potom medzi nastávajúcimi platbami.</p>'+head+groups+
   '</div>'+
   '<div class="ed-foot"><button type="button" class="btn" data-act="edSave">Uložiť mesiac</button></div>';
  ed.querySelector('.ed-body').scrollTop=st;
}
function edInput(e){
  const el=e.target.closest('[data-k]');if(!el||!E)return;
  const k=el.dataset.k.split('.'),v=el.value,num=x=>{const n=parseFloat(String(x).replace(/\s/g,'').replace(',','.'));return isFinite(n)&&n>=0?n:0;};
  const dr=E.draft;
  if(k[0]==='inc') dr.inc[k[1]]=num(v);
  else if(k[0]==='lim'){const key=k.slice(1).join('.');dr.lim[key]=v.trim()===''?null:num(v);}
  else if(k[0]==='date'){const key=k.slice(1).join('.');dr.dates[key]=Math.max(1,Math.min(31,Math.round(num(v))||1));}
  edUpdSums();
}
async function saveEditor(){
  const dr=E.draft,days=new Date(E.y,E.mo+1,0).getDate();
  const plan=Object.entries(dr.dates).map(([key,d])=>({d:Math.min(d,days),name:planLabel(key),key:key,amt:key==='des'?null:(dr.lim[key]===undefined?0:dr.lim[key])})).sort((a,b)=>a.d-b.d);
  const btn=document.querySelector('[data-act=edSave]');if(btn)btn.disabled=true;
  S.busy++;
  try{
    await rpc('save_month',{p_code:S.code,p_month:monthPayload(E,dr,E.mode==='edit'?M_(E.idx).id:null,plan)});
    const wasNew=E.mode==='new',mo=E.mo;
    E=null;$('editor').hidden=true;S.tab='plan';
    await loadAll(false,true);render();
    toast('Mesiac '+MN12[mo].toLowerCase()+(wasNew?' pridaný':' uložený'));
  }catch(err){
    console.error(err);toast('Mesiac sa nepodarilo uložiť',true);if(btn)btn.disabled=false;
  }finally{S.busy--;}
}
async function doSwitch(){
  const act=S.months.findIndex(x=>x.status==='active'),nx=act+1;
  if(act<0||!S.months[nx]||S.months[nx].status!=='planned')return;
  S.busy++;
  try{
    await rpc('switch_month',{p_code:S.code,p_month:S.months[nx].id});
    S.confirm=false;S.upAll=false;S.doneAll=false;S.incAll=false;
    await loadAll(false,true);S.month=S.months.findIndex(x=>x.status==='active');render();
    toast(mname(S.month)+' je teraz aktívny');
  }catch(err){console.error(err);toast('Prepnutie sa nepodarilo',true);}
  finally{S.busy--;}
}

/* ---------- shell ---------- */
const TABS=[['home','Prehľad','grid'],['bud','Rozpočet','pie'],null,['ana','Analytika','bars'],['plan','Plán','cal']];
const $=id=>document.getElementById(id);
/* ---------- vzhľad: svetlý/tmavý režim a western štýl ---------- */
function effTheme(){const a=document.documentElement.getAttribute('data-theme');if(a==='light'||a==='dark')return a;return window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
function applyLook(){
  const r=document.documentElement,t=store.get('rr_theme'),w=store.get('rr_style')==='western';
  if(t==='light'||t==='dark')r.setAttribute('data-theme',t);else r.removeAttribute('data-theme');
  if(w)r.setAttribute('data-style','western');else r.removeAttribute('data-style');
  const mt=document.querySelector('meta[name=theme-color]');if(mt)mt.setAttribute('content',w?'#3A2312':(effTheme()==='dark'?'#0A1118':'#14202E'));
}
function lookCtl(){
  const dark=effTheme()==='dark',w=document.documentElement.getAttribute('data-style')==='western';
  return '<button type="button" class="tbtn" data-act="themeTog" aria-label="'+(dark?'Prepnúť na svetlý režim':'Prepnúť na tmavý režim')+'" title="'+(dark?'Svetlý režim':'Tmavý režim')+'">'+ic(dark?'sun':'moon',20)+'</button>'+
   '<button type="button" class="wbtn" data-act="styleTog" aria-pressed="'+w+'">'+ic('star',16)+'<span>'+(w?'Moderný':'Western')+'</span></button>';
}
function renderTabs(){
  $('tabbar').innerHTML=TABS.map(t=>t?'<button class="tab" data-act="tab" data-t="'+t[0]+'"'+(S.tab===t[0]?' aria-current="page"':'')+'>'+ic(t[2],22)+t[1]+'</button>':'<button class="fab" data-act="add" aria-label="Pridať výdavok alebo príjem">'+ic('plus',26)+'</button>').join('')+'<div class="sidectl">'+lookCtl()+'</div>';
}
let confirmDisc=false;
function copyText(t){
  const done=()=>toast('Skopírované');
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done,()=>toast('Kopírovanie sa nepodarilo. Označte text ručne.',true));}
  else toast('Kopírovanie nie je dostupné. Označte text ručne.',true);
}
const TSLUG={home:'prehlad',bud:'rozpocet',ana:'analytika',plan:'plan'};
const GSLUG={des:'desiatky',byv:'byvanie',kon:'konzum',pra:'pravidelne',odk:'odkladanie',dlh:'dlhy',mim:'mimoriadne'};
let hashInit=false;
function hashOf(){let h=TSLUG[S.tab]||'prehlad';if(S.tab==='bud'&&GSLUG[S.grp])h+='/'+GSLUG[S.grp];if(S.tab==='ana'&&S.anaTab==='rep')h+='/report';if(S.tab==='plan'&&PSLUG[S.ptab]&&S.ptab!=='mes')h+='/'+PSLUG[S.ptab];return h;}
function syncHash(){
  const h='#'+hashOf();if(location.hash===h){hashInit=true;return;}
  try{history[hashInit?'pushState':'replaceState'](null,'',location.pathname+location.search+h);}catch(e){}
  hashInit=true;
}
function applyHash(){
  const p=location.hash.replace(/^#\/?/,'').split('/');
  if(!p[0]||/^k=/.test(p[0]))return false;
  const t=Object.keys(TSLUG).find(k=>TSLUG[k]===p[0]);if(!t)return false;
  S.tab=t;
  if(t==='bud')S.grp=Object.keys(GSLUG).find(k=>GSLUG[k]===p[1])||'all';
  if(t==='ana')S.anaTab=p[1]==='report'?'rep':'ana';
  if(t==='plan')S.ptab=Object.keys(PSLUG).find(k=>PSLUG[k]===p[1])||'mes';
  return true;
}
function onHash(){if(S.loaded&&applyHash()){S.confirm=false;render();}}
window.addEventListener('hashchange',onHash);
window.addEventListener('popstate',onHash);
function render(keepScroll){
  const sc=$('screen'),st=sc.scrollTop;
  sc.innerHTML='<div class="cols">'+({home:viewHome,bud:viewBudgets,ana:viewAnalytics,plan:viewPlan})[S.tab]()+'</div>';
  sc.scrollTop=keepScroll?st:0;
  hideTip();renderTabs();
  if(S.loaded)syncHash();
}
function sheetDate(){const v=$('date').value;let d=v?new Date(v+'T00:00:00'):new Date(TODAY);if(isNaN(d))d=new Date(TODAY);if(d>TODAY)d=new Date(TODAY);return d;}
function sheetKeys(gid){
  const out=itemList().filter(it=>grpOfKey(it.key)===gid).map(it=>({key:it.key,name:it.name,cat:it.cat}));
  if(gid==='des')out.unshift({key:'des',name:'Desiatky',cat:CAT.des});
  if(gid==='mim')out.push({key:'ost',name:'Ostatné',cat:CAT.ost});
  return out;
}
function keyName(key){for(const g of DGRP){const f=sheetKeys(g.id).find(x=>x.key===key);if(f)return f.name;}return key;}
function sheetRem(key){const x=monthLeaves(S.month).find(v=>v.key===key);return x?{in:true,limit:x.limit,spent:x.spent}:{in:false,limit:0,spent:0};}
function updSave(){$('save').disabled=!parseAmt()||(S.mode==='exp'&&!S.draft.key);}
function updSinfo(){
  const el=$('sinfo');if(!el)return;
  if(S.mode!=='exp'||!S.draft.key){el.innerHTML='';return;}
  const r=sheetRem(S.draft.key),rest=r.limit-r.spent,amt=parseAmt();
  if(!r.in||r.limit<=0){el.innerHTML='<span class="small">'+esc(keyName(S.draft.key))+' · bez budgetu v mesiaci '+mname(S.month).toLowerCase()+'</span>';return;}
  const after=rest-amt;
  el.innerHTML='<span class="small">Budget · zostáva <b class="num">'+eur(rest)+'</b>'+(amt?' → po zápise <b class="num '+(after>=0?'pos':'neg')+'">'+eur(after)+'</b>':'')+'</span>'+(rest>0&&Math.abs(amt-rest)>.004?'<button type="button" class="sc" data-act="sfill" data-v="'+rest+'">Zvyšok '+eur(rest)+'</button>':'');
}
function renderSheet(){
  const inc=S.mode==='inc',fx=!inc&&S.draft.fixed&&S.draft.key;
  $('stitle').textContent=inc?'Nový príjem':(fx?keyName(S.draft.key):'Nový výdavok');$('save').textContent=inc?'Pridať príjem':'Pridať výdavok';
  $('m-exp').setAttribute('aria-pressed',!inc);$('m-inc').setAttribute('aria-pressed',inc);
  const ms=document.querySelector('#form>.seg');if(ms)ms.hidden=!!fx;
  $('catwrap').hidden=inc||!!fx;$('wholbl').textContent=inc?'Kto dostal':'Kto platil';$('note').placeholder=inc?'Napr. Výplata':'Napr. Lidl';
  $('chips').innerHTML='<div class="stiles">'+DGRP.map(g=>'<button type="button" class="stile g-'+g.id+'" data-act="sgrp" data-g="'+g.id+'" aria-pressed="'+(S.draft.grp===g.id)+'"><span class="ico gi">'+ic(GICON[g.id],18)+'</span><span>'+g.name+'</span></button>').join('')+'</div>';
  $('whoseg').innerHTML=['J','I'].map(w=>'<button type="button" data-act="who" data-w="'+w+'" aria-pressed="'+(S.draft.who===w)+'">'+dot(w,true)+PEOPLE[w]+'</button>').join('');
  const sw=$('subwrap');
  if(inc){sw.innerHTML='<div class="subchips">'+['Výplata','Odmena','Iný príjem'].map(n=>'<button type="button" class="sc" data-act="preset" data-n="'+n+'">'+n+'</button>').join('')+'</div>';updSinfo();updSave();return;}
  if(fx){sw.innerHTML='<div class="fxit g-'+grpOfKey(S.draft.key)+'">'+gIco(S.draft.key)+'<span class="sit-n"><b>'+esc(keyName(S.draft.key))+'</b><small>'+esc(CATS.length&&CAT[S.draft.key.split('.')[0]]&&CAT[S.draft.key.split('.')[0]].name!==keyName(S.draft.key)?CAT[S.draft.key.split('.')[0]].name:DGRP.find(g=>g.id===grpOfKey(S.draft.key)).name)+'</small></span><button type="button" class="link" data-act="sfree">Zmeniť položku</button></div>';updSinfo();updSave();return;}
  const its=sheetKeys(S.draft.grp);
  sw.innerHTML='<div class="sec-t" style="margin-bottom:8px">Položka</div><div class="sitems">'+(its.length?its.map(it=>{
    const r=sheetRem(it.key),info=r.in?(r.limit>0?'zostáva '+eur(r.limit-r.spent)+' z '+eur(r.limit):'bez limitu'):'mimo plánu mesiaca',c=it.cat;
    return '<button type="button" class="sit g-'+S.draft.grp+'" data-act="skey" data-k="'+it.key+'" aria-pressed="'+(S.draft.key===it.key)+'">'+gIco(it.key)+'<span class="sit-n"><b>'+esc(it.name)+'</b><small>'+esc((c.subs&&c.subs.length&&c.name!==it.name?c.name+' · ':'')+info)+'</small></span></button>';
  }).join(''):'<p class="empty">V tejto kategórii zatiaľ nie je žiadna položka.</p>')+'</div>';
  updSinfo();updSave();
}
function parseAmt(){const v=parseFloat($('amt').value.replace(/\s/g,'').replace(',','.'));return isFinite(v)&&v>0?v:0;}
function openSheet(mode,pre){
  S.mode=mode||'exp';S.draft={key:null,grp:'kon',who:S.me};$('amt').value='';$('note').value='';$('date').max=iso(TODAY);$('date').min=iso(new Date(S.months[0].y,S.months[0].mo,1));$('date').value=iso(TODAY);
  if(pre){const k=pre.key||(pre.cat?(pre.sub?pre.cat+'.'+pre.sub:pre.cat):null);if(k){S.draft.key=k;S.draft.grp=grpOfKey(k);S.draft.fixed=!!pre.fixed;}if(pre.amt>0)$('amt').value=String(Math.round(pre.amt*100)/100).replace('.',',');if(pre.note)$('note').value=pre.note;}
  renderSheet();$('sheet').hidden=false;setTimeout(()=>$('amt').focus(),30);
}
function closeSheet(){$('sheet').hidden=true;}
let toastT;
function toast(msg,err){const t=$('toast');t.className='toast'+(err?' err':'');t.innerHTML=ic(err?'alert':'check',18)+esc(msg);t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>t.hidden=true,2600);}
function stepVis(dir){const v=vis(),k=v.indexOf(S.month)+dir;if(k>=0&&k<v.length){S.month=v[k];S.doneN=5;S.expanded=null;S.doneAll=false;S.upAll=false;S.incAll=false;render(true);}}

document.addEventListener('scroll',e=>{
  const l=e.target;if(!l||l.id!=='donelist')return;
  if(l.scrollTop+l.clientHeight<l.scrollHeight-24)return;
  const d=doneList(S.month);if(d.shown.length>=d.all.length)return;
  S.doneN=(S.doneN||5)+5;const d2=doneList(S.month),top=l.scrollTop;
  l.innerHTML=txRows(d2.shown)+'<p class="note dmore" id="dmore">'+(d2.shown.length<d2.all.length?'Rolovaním zobrazíte ďalšie ('+(d2.all.length-d2.shown.length)+')':'To je všetko ('+d2.all.length+')')+'</p>';
  l.scrollTop=top;
},true);

document.addEventListener('submit',e=>{if(e.target&&e.target.id==='iform'){e.preventDefault();saveItemDef(false);}});
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]');if(!el)return;
  const a=el.dataset.act;
  if(a==='tab'){S.tab=el.dataset.t;S.confirm=false;render();}
  else if(a==='prev')stepVis(-1);
  else if(a==='next')stepVis(1);
  else if(a==='pick'){S.month=+el.dataset.m;render(true);}
  else if(a==='exp'){S.expanded=S.expanded===el.dataset.c?null:el.dataset.c;render(true);}
  else if(a==='lim'){
    const key=el.dataset.s?el.dataset.c+'.'+el.dataset.s:el.dataset.c,M=M_(S.month),cur=M.lim[key]||0;
    M.lim[key]=Math.max(0,cur+ +el.dataset.d);render(true);saveLimit(M,key);
  }
  else if(a==='grp'){S.grp=el.dataset.g;S.expanded=null;render(true);}
  else if(a==='trend'){S.trend=el.dataset.v;render(true);}
  else if(a==='anatab'){S.anaTab=el.dataset.v;render();}
  else if(a==='goLast'){S.month=+el.dataset.m;render();}
  else if(a==='rep'){S.rep[el.dataset.w]=!S.rep[el.dataset.w];render(true);}
  else if(a==='upAll'){S.upAll=!S.upAll;render(true);}
  else if(a==='doneAll'){S.doneAll=!S.doneAll;render(true);}
  else if(a==='idNew'){openItemDlg({grp:el.dataset.g,add:!!el.dataset.add});}
  else if(a==='idEdit'){openItemDlg({key:el.dataset.key});}
  else if(a==='idClose'){closeIdlg();}
  else if(a==='idGrp'){idSync();S.idlg.grp=el.dataset.g;renderIdlg();}
  else if(a==='idDate'){idSync();S.idlg.dateOn=!S.idlg.dateOn;renderIdlg();}
  else if(a==='idIcon'){idSync();S.idlg.icon=S.idlg.icon===el.dataset.i?'':el.dataset.i;renderIdlg();}
  else if(a==='idDel'){if(window.confirm('Zmazať tento výdavok? Už zadané platby ostanú v histórii.'))saveItemDef(true);}
  else if(a==='themeTog'){store.set('rr_theme',effTheme()==='dark'?'light':'dark');applyLook();renderTabs();render(true);}
  else if(a==='styleTog'){store.set('rr_style',store.get('rr_style')==='western'?'modern':'western');applyLook();renderTabs();render(true);}
  else if(a==='ptab'){S.ptab=el.dataset.v;S.itemOpen=null;render();}
  else if(a==='pcat'){S.openPCat[el.dataset.c]=!S.openPCat[el.dataset.c];render(true);}
  else if(a==='bTog'){S.openBud[el.dataset.c]=!S.openBud[el.dataset.c];render(true);}
  else if(a==='catTog'){S.openCats[el.dataset.c]=!S.openCats[el.dataset.c];render(true);}
  else if(a==='dsort'){S.doneSort=el.dataset.v;S.doneN=5;render(true);}
  else if(a==='incAll'){S.incAll=!S.incAll;render(true);}
  else if(a==='repAll'){S.repAll=!S.repAll;render(true);}
  else if(a==='add'){openSheet('exp');}
  else if(a==='addFor'){const it=monthLeaves(S.month).find(x=>x.key===el.dataset.key);if(it)openSheet('exp',{key:it.key,fixed:true,amt:it.day?Math.max(0,it.limit-it.spent):0,note:it.day?it.name:''});}
  else if(a==='addinc'){openSheet('inc');}
  else if(a==='mode'){S.mode=el.dataset.v;renderSheet();}
  else if(a==='preset'){$('note').value=el.dataset.n;}
  else if(a==='close'){closeSheet();}
  else if(a==='pview'){S.pview=el.dataset.v;render(true);}
  else if(a==='pfilt'){S.pfilt=el.dataset.v;render(true);}
  else if(a==='dwho'){S.doneWho=el.dataset.v;S.doneN=5;render(true);}
  else if(a==='sfree'){S.draft.fixed=false;renderSheet();}
  else if(a==='sgrp'){S.draft.grp=el.dataset.g;if(S.draft.key&&grpOfKey(S.draft.key)!==S.draft.grp)S.draft.key=null;renderSheet();}
  else if(a==='skey'){S.draft.key=el.dataset.k;renderSheet();const n=$('note');if(n&&!n.value)n.placeholder=keyName(S.draft.key);}
  else if(a==='sfill'){$('amt').value=String(Math.round(+el.dataset.v*100)/100).replace('.',',');updSinfo();updSave();}
  else if(a==='dq'){const d=new Date(TODAY);d.setDate(d.getDate()-(+el.dataset.d));$('date').value=iso(d);renderSheet();}
  else if(a==='who'){S.draft.who=el.dataset.w;renderSheet();}
  else if(a==='newM'){openEditor('new');}
  else if(a==='editM'){openEditor('edit',+el.dataset.m);}
  else if(a==='viewM'){S.month=+el.dataset.m;S.tab='home';render();}
  else if(a==='askSwitch'){S.confirm=true;render(true);}
  else if(a==='cancelSwitch'){S.confirm=false;render(true);}
  else if(a==='doSwitch'){doSwitch();}
  else if(a==='meSet'){S.me=el.dataset.w;store.set('rr_me',S.me);render(true);}
  else if(a==='copyLink'||a==='copyCode'){copyText(el.dataset.v);}
  else if(a==='disconnect'){if(confirmDisc){store.del('rr_code');store.del('rr_me');resetState();confirmDisc=false;gateView();}else{confirmDisc=true;el.textContent='Naozaj odpojiť? Klepnite znova';}}
  else if(a==='edClose'){E=null;$('editor').hidden=true;}
  else if(a==='edSave'){saveEditor();}
  else if(a==='itemOpen'){S.itemOpen=S.itemOpen===el.dataset.key?null:el.dataset.key;render(true);}
  else if(a==='itemSave'){saveItem();}
  else if(a==='itemOn'){const k=el.dataset.key,df=S.defs[k]||{};E.draft.lim[k]=df.budget!==undefined&&df.budget!==null?df.budget:(DEFLIM[k]!==undefined?DEFLIM[k]:null);if(df.day)E.draft.dates[k]=df.day;renderEditor(true);}
  else if(a==='itemOff'){delete E.draft.lim[el.dataset.key];delete E.draft.dates[el.dataset.key];renderEditor(true);}
  else if(a==='dateToggle'){const k=el.dataset.key,dd=E.draft.dates;if(dd[k]===undefined)dd[k]=1;else delete dd[k];renderEditor(true);}
});
$('sheet').addEventListener('click',e=>{if(e.target===$('sheet'))closeSheet();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(S.idlg)closeIdlg();else if(!$('sheet').hidden)closeSheet();else if(E){E=null;$('editor').hidden=true;}}});
$('amt').addEventListener('input',()=>{updSave();updSinfo();});
$('date').addEventListener('change',renderSheet);
$('editor').addEventListener('input',edInput);
$('editor').addEventListener('change',edInput);
$('form').addEventListener('submit',async e=>{
  e.preventDefault();
  const amt=parseAmt();if(!amt)return;
  const dt=sheetDate(),btn=$('save');btn.disabled=true;S.busy++;
  try{
    if(S.mode==='inc'){
      let m=calIdx(dt);if(m<0)m=S.month;
      const r=await rpc('add_income',{p_code:S.code,p_month:M_(m).id,p_dt:iso(dt),p_amount:round2(amt),p_who:S.draft.who,p_note:$('note').value.trim()||'Príjem'});
      S.incTx.push({id:r.id,m,dt,who:r.who,amt:+r.amount,note:r.note});
      S.month=M_(m).status==='planned'?S.month:m;S.tab='bud';S.grp='all';closeSheet();render();
      toast('Príjem '+eur2(amt)+' pridaný');return;
    }
    if(!S.draft.key){btn.disabled=false;S.busy--;return;}
    const kp=S.draft.key.split('.'),c=CAT[kp[0]],sub=kp[1]||'';let m=calIdx(dt);if(m<0)m=S.month;
    const r=await rpc('add_transaction',{p_code:S.code,p_month:M_(m).id,p_dt:iso(dt),p_cat:c.id,p_sub:sub,p_amount:round2(amt),p_who:S.draft.who,p_note:$('note').value.trim()||keyName(S.draft.key)});
    S.tx.push({id:r.id,m,dt,cat:c.id,sub,amt:+r.amount,who:r.who,note:r.note});
    S.month=M_(m).status==='planned'?S.month:m;S.tab='home';closeSheet();render();
    toast('Výdavok '+eur2(amt)+' pridaný');
  }catch(err){
    console.error(err);toast('Zápis sa nepodarilo uložiť. Skúste to znova.',true);btn.disabled=false;
  }finally{S.busy--;}
});
$('sheet').querySelector('.x').innerHTML=ic('x',18);

const tip=$('tip');
function hideTip(){tip.hidden=true;}
document.addEventListener('pointermove',e=>{
  const el=e.target.closest&&e.target.closest('[data-tip]');
  if(!el){hideTip();return;}
  tip.textContent=el.getAttribute('data-tip');tip.hidden=false;
  const w=tip.offsetWidth,x=Math.min(window.innerWidth-w-8,Math.max(8,e.clientX-w/2));
  tip.style.left=x+'px';tip.style.top=Math.max(8,e.clientY-tip.offsetHeight-14)+'px';
});
document.addEventListener('pointerleave',hideTip);
$('screen').addEventListener('scroll',hideTip);

/* ---------- pripojenie zariadenia a spustenie ---------- */
const gate=$('gate');
function showGate(html){gate.innerHTML=html;gate.hidden=false;}
function hideGate(){gate.hidden=true;gate.innerHTML='';}
function cleanCode(s){return String(s||'').toLowerCase().replace(/[^0-9a-f]/g,'');}
function gateView(msg){
  let who=S.me||'J';
  showGate('<div><h1>Rodinný rozpočet</h1><p class="small" style="margin:8px 0 0">Bez hesiel. Zariadenia sa spájajú tajným kódom domácnosti.</p></div>'+
   '<section class="card"><div class="sec-t" style="margin-bottom:8px">Na tomto zariadení som</div><div class="whoseg" id="g-who"></div></section>'+
   '<section class="card"><h3 style="margin:0 0 10px;font-size:16px">Pripojiť sa kódom</h3><label class="fld" for="g-code">Kód domácnosti<input id="g-code" type="text" autocomplete="off" autocapitalize="off" spellcheck="false"></label><button class="btn" id="g-join" style="width:100%;margin-top:14px">Pripojiť</button></section>'+
   '<section class="card"><h3 style="margin:0 0 6px;font-size:16px">Začať odznova</h3><p class="small" style="margin:0 0 12px">Vytvorí novú domácnosť s vlastným kódom. Na prvé zariadenie.</p><button class="btn ghost" id="g-new" style="width:100%">Vytvoriť novú domácnosť</button></section>'+
   '<div id="g-msg" class="msg bad" role="status">'+esc(msg||'')+'</div>');
  const drawWho=()=>{$('g-who').innerHTML=['J','I'].map(w=>'<button type="button" data-w="'+w+'" aria-pressed="'+(who===w)+'">'+dot(w,true)+PEOPLE[w]+'</button>').join('');$('g-who').querySelectorAll('button').forEach(b=>b.onclick=()=>{who=b.dataset.w;drawWho();});};
  drawWho();
  $('g-join').onclick=async()=>{
    const code=cleanCode($('g-code').value);
    if(code.length<32){gateView('Kód má 32 znakov. Skontrolujte ho.');return;}
    S.me=who;store.set('rr_me',who);S.code=code;
    try{await rpc('get_state',{p_code:code});}catch(e){S.code=null;gateView(e.status?'Kód nepoznáme. Skontrolujte ho.':'Nepodarilo sa pripojiť. Skontrolujte internet.');return;}
    store.set('rr_code',code);boot();
  };
  $('g-new').onclick=async()=>{
    $('g-new').disabled=true;
    try{const code=await rpc('create_household');S.me=who;store.set('rr_me',who);S.code=code;store.set('rr_code',code);boot();}
    catch(e){console.error(e);gateView('Domácnosť sa nepodarilo vytvoriť. Skúste to znova.');}
  };
}
function resetState(){
  S.months=[];S.tx=[];S.incTx=[];S.debts=[];S.items={};S.itemOpen=null;S.loaded=false;S.sig=null;S.month=0;S.tab='home';S.code=null;
  $('sheet').hidden=true;$('editor').hidden=true;
}
async function boot(){
  showGate('<div class="loading">Načítavam…</div>');
  try{
    const r=await loadAll(false,true);
    if(r==='gate')return gateView();
    hideGate();S.tab='home';applyHash();render();
  }catch(e){
    console.error(e);
    if(e.status&&e.status<500){store.del('rr_code');S.code=null;return gateView('Kód už neplatí. Pripojte sa znova.');}
    showGate('<div><h1>Nepodarilo sa načítať</h1><p class="small">Skontrolujte pripojenie a skúste to znova.</p></div><button class="btn" id="retry">Skúsiť znova</button>');
    $('retry').onclick=boot;
  }
}
async function poll(){
  if(document.hidden||!S.loaded||S.busy>0||S.itemOpen||!$('sheet').hidden||!$('editor').hidden||S.idlg)return;
  try{const r=await loadAll();if(r==='ok')render(true);}catch(e){console.error(e);}
}
setInterval(poll,15000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)poll();});
window.addEventListener('online',poll);
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
// kód z odkazu (#k=...) alebo z uloženého zariadenia
(function init(){
  applyLook();
  const m=/[#&]k=([0-9a-fA-F]{32})/.exec(location.hash);
  if(m){store.set('rr_code',m[1].toLowerCase());try{history.replaceState(null,'',location.pathname+location.search);}catch(e){}}
  S.code=store.get('rr_code');
  const me=store.get('rr_me');if(me==='J'||me==='I')S.me=me;
  if(S.code&&!me){S.me='J';}
  boot();
})();
})();
