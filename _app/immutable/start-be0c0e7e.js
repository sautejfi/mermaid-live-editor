import{S as Ye,i as We,s as Xe,a as Ze,e as C,c as Qe,b as M,g as pe,t as F,d as de,f as J,h as G,j as xe,o as ke,k as et,l as tt,m as nt,n as ve,p as q,q as rt,r as at,u as ot,v as Y,w as W,x as $e,y as X,z as Z,A as Ce}from"./chunks/index-b90ed33e.js";import{g as Fe,f as Je,s as K,a as Re,i as st}from"./chunks/singletons-e1adf4b7.js";import{_ as te}from"./chunks/preload-helper-b21cceae.js";import{s as it}from"./chunks/paths-6cd3a76e.js";function lt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function ct(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(a,e){const t=new URL(a);for(const o of ft){let i=t[o];Object.defineProperty(t,o,{get(){return e(),i},enumerable:!0,configurable:!0})}return pt(t),t}function pt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(a){let e=5381;if(typeof a=="string"){let t=a.length;for(;t;)e=e*33^a.charCodeAt(--t)}else if(ArrayBuffer.isView(a)){const t=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>{if((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(a instanceof Request?a.url:a.toString(),document.baseURI).href;ue.delete(o)}return he(a,e)};const ue=new Map;function ht(a,e,t){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(i+=`[data-hash="${dt(t.body)}"]`);const c=document.querySelector(i);if(c!=null&&c.textContent){const{body:n,...u}=JSON.parse(c.textContent),h=c.getAttribute("data-ttl");return h&&ue.set(e,{body:n,init:u,ttl:1e3*Number(h)}),Promise.resolve(new Response(n,u))}return he(a,t)}function mt(a,e){const t=ue.get(a);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ue.delete(a)}return he(a,e)}const _t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function gt(a){const e=[],t=[];let o=!0;return{pattern:a==="/"?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).slice(1).filter(yt).map((c,n,u)=>{const h=decodeURIComponent(c),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(h);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const g=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(h);if(g)return e.push(g[1]),t.push(g[2]),"(?:/([^/]+))?";const v=n===u.length-1;if(!h)return;const U=h.split(/\[(.+?)\](?!\])/).map((T,V)=>{if(V%2){const D=_t.exec(T);if(!D)throw new Error(`Invalid param: ${T}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,ae,z,oe,Q]=D;return e.push(oe),t.push(Q),z?"(.*?)":ae?"([^/]*)?":"([^/]+?)"}return v&&T.includes(".")&&(o=!1),T.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("");return"/"+U}).join("")}${o?"/?":""}$`),names:e,types:t}}function yt(a){return!/^\([^)]+\)$/.test(a)}function wt(a,e,t,o){const i={};for(let c=0;c<e.length;c+=1){const n=e[c],u=t[c];let h=a[c+1]||"";if(u){const m=o[u];if(!m)throw new Error(`Missing "${u}" param matcher`);if(!m(h))return}i[n]=h}return i}function bt(a,e,t,o){const i=new Set(e);return Object.entries(t).map(([u,[h,m,g]])=>{const{pattern:v,names:I,types:U}=gt(u),T={id:u,exec:V=>{const D=v.exec(V);if(D)return wt(D,I,U,o)},errors:[1,...g||[]].map(V=>a[V]),layouts:[0,...m||[]].map(n),leaf:c(h)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function c(u){const h=u<0;return h&&(u=~u),[h,a[u]]}function n(u){return u===void 0?u:[i.has(u),a[u]]}}function vt(a){let e,t,o;var i=a[0][0];function c(n){return{props:{data:n[2],form:n[1]}}}return i&&(e=Y(i,c(a))),{c(){e&&W(e.$$.fragment),t=C()},l(n){e&&$e(e.$$.fragment,n),t=C()},m(n,u){e&&X(e,n,u),M(n,t,u),o=!0},p(n,u){const h={};if(u&4&&(h.data=n[2]),u&2&&(h.form=n[1]),i!==(i=n[0][0])){if(e){pe();const m=e;F(m.$$.fragment,1,0,()=>{Z(m,1)}),de()}i?(e=Y(i,c(n)),W(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(h)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Z(e,n)}}}function Et(a){let e,t,o;var i=a[0][0];function c(n){return{props:{data:n[2],$$slots:{default:[kt]},$$scope:{ctx:n}}}}return i&&(e=Y(i,c(a))),{c(){e&&W(e.$$.fragment),t=C()},l(n){e&&$e(e.$$.fragment,n),t=C()},m(n,u){e&&X(e,n,u),M(n,t,u),o=!0},p(n,u){const h={};if(u&4&&(h.data=n[2]),u&523&&(h.$$scope={dirty:u,ctx:n}),i!==(i=n[0][0])){if(e){pe();const m=e;F(m.$$.fragment,1,0,()=>{Z(m,1)}),de()}i?(e=Y(i,c(n)),W(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(h)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Z(e,n)}}}function kt(a){let e,t,o;var i=a[0][1];function c(n){return{props:{data:n[3],form:n[1]}}}return i&&(e=Y(i,c(a))),{c(){e&&W(e.$$.fragment),t=C()},l(n){e&&$e(e.$$.fragment,n),t=C()},m(n,u){e&&X(e,n,u),M(n,t,u),o=!0},p(n,u){const h={};if(u&8&&(h.data=n[3]),u&2&&(h.form=n[1]),i!==(i=n[0][1])){if(e){pe();const m=e;F(m.$$.fragment,1,0,()=>{Z(m,1)}),de()}i?(e=Y(i,c(n)),W(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(h)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Z(e,n)}}}function Ge(a){let e,t=a[5]&&Ke(a);return{c(){e=et("div"),t&&t.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=nt(e);t&&t.l(i),i.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(o,i){M(o,e,i),t&&t.m(e,null)},p(o,i){o[5]?t?t.p(o,i):(t=Ke(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&G(e),t&&t.d()}}}function Ke(a){let e;return{c(){e=rt(a[6])},l(t){e=at(t,a[6])},m(t,o){M(t,e,o)},p(t,o){o&64&&ot(e,t[6])},d(t){t&&G(e)}}}function Rt(a){let e,t,o,i,c;const n=[Et,vt],u=[];function h(g,v){return g[0][1]?0:1}e=h(a),t=u[e]=n[e](a);let m=a[4]&&Ge(a);return{c(){t.c(),o=Ze(),m&&m.c(),i=C()},l(g){t.l(g),o=Qe(g),m&&m.l(g),i=C()},m(g,v){u[e].m(g,v),M(g,o,v),m&&m.m(g,v),M(g,i,v),c=!0},p(g,[v]){let I=e;e=h(g),e===I?u[e].p(g,v):(pe(),F(u[I],1,1,()=>{u[I]=null}),de(),t=u[e],t?t.p(g,v):(t=u[e]=n[e](g),t.c()),J(t,1),t.m(o.parentNode,o)),g[4]?m?m.p(g,v):(m=Ge(g),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null)},i(g){c||(J(t),c=!0)},o(g){F(t),c=!1},d(g){u[e].d(g),g&&G(o),m&&m.d(g),g&&G(i)}}}function St(a,e,t){let{stores:o}=e,{page:i}=e,{components:c}=e,{form:n}=e,{data_0:u=null}=e,{data_1:h=null}=e;xe(o.page.notify);let m=!1,g=!1,v=null;return ke(()=>{const I=o.page.subscribe(()=>{m&&(t(5,g=!0),t(6,v=document.title||"untitled page"))});return t(4,m=!0),I}),a.$$set=I=>{"stores"in I&&t(7,o=I.stores),"page"in I&&t(8,i=I.page),"components"in I&&t(0,c=I.components),"form"in I&&t(1,n=I.form),"data_0"in I&&t(2,u=I.data_0),"data_1"in I&&t(3,h=I.data_1)},a.$$.update=()=>{a.$$.dirty&384&&o.page.set(i)},[c,n,u,h,m,g,v,o,i]}class Ot extends Ye{constructor(e){super(),We(this,e,St,Rt,Xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const It={},me=[()=>te(()=>import("./chunks/0-e1d2e060.js"),["./chunks/0-e1d2e060.js","./chunks/_layout-fd68092a.js","./components/pages/_layout.svelte-70667fc3.js","./chunks/index-b90ed33e.js","./chunks/paths-6cd3a76e.js","./chunks/state-6913993a.js","./chunks/preload-helper-b21cceae.js","./chunks/theme-f774cdef.js","./assets/_layout-7fda812f.css"],import.meta.url),()=>te(()=>import("./chunks/1-d60ebbcd.js"),["./chunks/1-d60ebbcd.js","./components/error.svelte-25714e8f.js","./chunks/index-b90ed33e.js","./chunks/singletons-e1adf4b7.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>te(()=>import("./chunks/2-ab17d403.js"),["./chunks/2-ab17d403.js","./components/pages/_page.svelte-4948d2d5.js","./chunks/index-b90ed33e.js","./chunks/singletons-e1adf4b7.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>te(()=>import("./chunks/3-7313ba5c.js"),["./chunks/3-7313ba5c.js","./components/pages/edit/_page.svelte-128a40ea.js","./chunks/index-b90ed33e.js","./chunks/state-6913993a.js","./chunks/preload-helper-b21cceae.js","./chunks/theme-f774cdef.js","./chunks/view-4595586a.js","./assets/view-0c536ccf.css","./chunks/paths-6cd3a76e.js","./assets/_page-826332b8.css"],import.meta.url),()=>te(()=>import("./chunks/4-3157a2f0.js"),["./chunks/4-3157a2f0.js","./components/pages/view/_page.svelte-f36b0a7a.js","./chunks/index-b90ed33e.js","./chunks/view-4595586a.js","./chunks/state-6913993a.js","./chunks/preload-helper-b21cceae.js","./assets/view-0c536ccf.css"],import.meta.url)],$t=[],Lt={"/":[2],"/edit":[3],"/view":[4]},At={handleError:({error:a})=>{console.error(a)}};class Se{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,t){this.status=e,this.location=t}}const jt="/__data.json";async function Nt(a){var e;for(const t in a)if(typeof((e=a[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,i])=>[o,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Pt=-1,Ut=-2,Tt=-3,Dt=-4,Vt=-5,qt=-6;function Bt(a){const e=JSON.parse(a);if(typeof e=="number")return i(e);const t=e,o=Array(t.length);function i(c){if(c===Pt)return;if(c===Tt)return NaN;if(c===Dt)return 1/0;if(c===Vt)return-1/0;if(c===qt)return-0;if(c in o)return o[c];const n=t[c];if(!n||typeof n!="object")o[c]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":o[c]=new Date(n[1]);break;case"Set":const h=new Set;o[c]=h;for(let v=1;v<n.length;v+=1)h.add(i(n[v]));break;case"Map":const m=new Map;o[c]=m;for(let v=1;v<n.length;v+=2)m.set(i(n[v]),i(n[v+1]));break;case"RegExp":o[c]=new RegExp(n[1],n[2]);break;case"Object":o[c]=Object(n[1]);break;case"BigInt":o[c]=BigInt(n[1]);break;case"null":const g=Object.create(null);o[c]=g;for(let v=1;v<n.length;v+=2)g[n[v]]=i(n[v+1]);break}else{const u=new Array(n.length);o[c]=u;for(let h=0;h<n.length;h+=1){const m=n[h];m!==Ut&&(u[h]=i(m))}}else{const u={};o[c]=u;for(const h in n){const m=n[h];u[h]=i(m)}}return o[c]}return i(0)}const He="sveltekit:scroll",B="sveltekit:index",le=bt(me,$t,Lt,It),Oe=me[0],Ie=me[1];Oe();Ie();let re={};try{re=JSON.parse(sessionStorage[He])}catch{}function Ee(a){re[a]=Re()}function Ct({target:a,base:e,trailing_slash:t}){var Ve;const o=[];let i=null;const c={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},u=!1,h=!1,m=!0,g=!1,v=!1,I,U=(Ve=history.state)==null?void 0:Ve[B];U||(U=Date.now(),history.replaceState({...history.state,[B]:U},"",location.href));const T=re[U];T&&(history.scrollRestoration="manual",scrollTo(T.x,T.y));let V=!1,D,ae,z;async function oe(){z=z||Promise.resolve(),await z,z=null;const r=new URL(location.href),f=ye(r,!0);i=null,await Ae(f,r,[])}async function Q(r,{noscroll:f=!1,replaceState:p=!1,keepfocus:s=!1,state:l={}},d,_){return typeof r=="string"&&(r=new URL(r,Fe(document))),we({url:r,scroll:f?Re():null,keepfocus:s,redirect_chain:d,details:{state:l,replaceState:p},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Le(r){const f=ye(r,!1);if(!f)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${r}`);return i={id:f.id,promise:Pe(f)},i.promise}async function Ae(r,f,p,s,l={},d){var k,E;ae=l;let _=r&&await Pe(r);if(_||(_=await De(f,null,ne(new Error(`Not found: ${f.pathname}`),{url:f,params:{},routeId:null}),404)),f=(r==null?void 0:r.url)||f,ae!==l)return!1;if(_.type==="redirect")if(p.length>10||p.includes(f.pathname))_=await se({status:500,error:ne(new Error("Redirect loop"),{url:f,params:{},routeId:null}),url:f,routeId:null});else return Q(new URL(_.location,f).href,{},[...p,f.pathname],l),!1;else((E=(k=_.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await K.updated.check()&&await ie(f);if(o.length=0,v=!1,g=!0,s&&s.details){const{details:w}=s,b=w.replaceState?0:1;w.state[B]=U+=b,history[w.replaceState?"replaceState":"pushState"](w.state,"",f)}if(i=null,h){n=_.state,_.props.page&&(_.props.page.url=f);const w=fe();I.$set(_.props),w()}else je(_);if(s){const{scroll:w,keepfocus:b}=s;if(!b){const S=document.body,$=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),$!==null?S.setAttribute("tabindex",$):S.removeAttribute("tabindex")}if(await Ce(),m){const S=f.hash&&document.getElementById(f.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Ce();m=!0,_.props.page&&(D=_.props.page),d&&d(),g=!1}function je(r){var l,d;n=r.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),D=r.props.page;const p=fe();I=new Ot({target:a,props:{...r.props,stores:K},hydrate:!0}),p();const s={from:null,to:ce("to",{params:n.params,routeId:(d=(l=n.route)==null?void 0:l.id)!=null?d:null,url:new URL(location.href)}),type:"load"};c.after_navigate.forEach(_=>_(s)),h=!0}async function x({url:r,params:f,branch:p,status:s,error:l,route:d,form:_}){var $;const k=p.filter(Boolean),E={type:"loaded",state:{url:r,params:f,branch:p,error:l,route:d},props:{components:k.map(L=>L.node.component)}};_!==void 0&&(E.props.form=_);let w={},b=!D;for(let L=0;L<k.length;L+=1){const N=k[L];w={...w,...N.data},(b||!n.branch.some(P=>P===N))&&(E.props[`data_${L}`]=w,b=b||Object.keys(($=N.data)!=null?$:{}).length>0)}if(b||(b=Object.keys(D.data).length!==Object.keys(w).length),!n.url||r.href!==n.url.href||n.error!==l||_!==void 0||b){E.props.page={error:l,params:f,routeId:d&&d.id,status:s,url:r,form:_,data:b?w:D.data};const L=(N,P)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${P}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return E}async function _e({loader:r,parent:f,url:p,params:s,routeId:l,server_data_node:d}){var w,b,S,$,L;let _=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await r();if((w=E.shared)!=null&&w.load){let N=function(...O){for(const y of O){const{href:R}=new URL(y,p);k.dependencies.add(R)}};const P={routeId:l,params:new Proxy(s,{get:(O,y)=>(k.params.add(y),O[y])}),data:(b=d==null?void 0:d.data)!=null?b:null,url:ut(p,()=>{k.url=!0}),async fetch(O,y){let R;O instanceof Request?(R=O.url,y={body:O.method==="GET"||O.method==="HEAD"?void 0:await O.blob(),cache:O.cache,credentials:O.credentials,headers:O.headers,integrity:O.integrity,keepalive:O.keepalive,method:O.method,mode:O.mode,redirect:O.redirect,referrer:O.referrer,referrerPolicy:O.referrerPolicy,signal:O.signal,...y}):R=O;const j=new URL(R,p).href;return N(j),h?mt(j,y):ht(R,j,y)},setHeaders:()=>{},depends:N,parent(){return k.parent=!0,f()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(S=await E.shared.load.call(null,P))!=null?S:null,_=_?await Nt(_):null}return{node:E,loader:r,server:d,shared:($=E.shared)!=null&&$.load?{type:"data",data:_,uses:k}:null,data:(L=_!=null?_:d==null?void 0:d.data)!=null?L:null}}function Ne(r,f,p,s){if(v)return!0;if(!p)return!1;if(p.parent&&f||p.url&&r)return!0;for(const l of p.params)if(s[l]!==n.params[l])return!0;for(const l of p.dependencies)if(o.some(d=>d(new URL(l))))return!0;return!1}function ge(r,f){var p,s;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((p=r.uses.dependencies)!=null?p:[]),params:new Set((s=r.uses.params)!=null?s:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:(r==null?void 0:r.type)==="skip"&&f!=null?f:null}async function Pe({id:r,invalidating:f,url:p,params:s,route:l}){var O;if((i==null?void 0:i.id)===r)return i.promise;const{errors:d,layouts:_,leaf:k}=l,E=[..._,k];d.forEach(y=>y==null?void 0:y().catch(()=>{})),E.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let w=null;const b=n.url?r!==n.url.pathname+n.url.search:!1,S=E.reduce((y,R,j)=>{var ee;const A=n.branch[j],H=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||Ne(b,y.some(Boolean),(ee=A.server)==null?void 0:ee.uses,s));return y.push(H),y},[]);if(S.some(Boolean)){try{w=await ze(p,S)}catch(y){return se({status:500,error:ne(y,{url:p,params:s,routeId:l.id}),url:p,routeId:l.id})}if(w.type==="redirect")return w}const $=w==null?void 0:w.nodes;let L=!1;const N=E.map(async(y,R)=>{var ee;if(!y)return;const j=n.branch[R],A=$==null?void 0:$[R];if((!A||A.type==="skip")&&y[1]===(j==null?void 0:j.loader)&&!Ne(b,L,(ee=j.shared)==null?void 0:ee.uses,s))return j;if(L=!0,(A==null?void 0:A.type)==="error")throw A;return _e({loader:y[1],url:p,params:s,routeId:l.id,parent:async()=>{var Be;const qe={};for(let be=0;be<R;be+=1)Object.assign(qe,(Be=await N[be])==null?void 0:Be.data);return qe},server_data_node:ge(A===void 0&&y[0]?{type:"skip"}:A!=null?A:null,j==null?void 0:j.server)})});for(const y of N)y.catch(()=>{});const P=[];for(let y=0;y<E.length;y+=1)if(E[y])try{P.push(await N[y])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let j=500,A;$!=null&&$.includes(R)?(j=(O=R.status)!=null?O:j,A=R.error):R instanceof Se?(j=R.status,A=R.body):A=ne(R,{params:s,url:p,routeId:l.id});const H=await Ue(y,P,d);return H?await x({url:p,params:s,branch:P.slice(0,H.idx).concat(H.node),status:j,error:A,route:l}):await De(p,l.id,A,j)}else P.push(void 0);return await x({url:p,params:s,branch:P,status:200,error:null,route:l,form:f?void 0:null})}async function Ue(r,f,p){for(;r--;)if(p[r]){let s=r;for(;!f[s];)s-=1;try{return{idx:s+1,node:{node:await p[r](),loader:p[r],data:{},server:null,shared:null}}}catch{continue}}}async function se({status:r,error:f,url:p,routeId:s}){var w;const l={},d=await Oe();let _=null;if(d.server)try{const b=await ze(p,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;_=(w=b.nodes[0])!=null?w:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||u)&&await ie(p)}const k=await _e({loader:Oe,url:p,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:ge(_)}),E={node:await Ie(),loader:Ie,shared:null,server:null,data:null};return await x({url:p,params:l,branch:[k,E],status:r,error:f,route:null})}function ye(r,f){if(Te(r))return;const p=decodeURI(r.pathname.slice(e.length)||"/");for(const s of le){const l=s.exec(p);if(l){const d=new URL(r.origin+lt(r.pathname,t)+r.search+r.hash);return{id:d.pathname+d.search,invalidating:f,route:s,params:ct(l),url:d}}}}function Te(r){return r.origin!==location.origin||!r.pathname.startsWith(e)}async function we({url:r,scroll:f,keepfocus:p,redirect_chain:s,details:l,type:d,delta:_,nav_token:k,accepted:E,blocked:w}){var N,P,O,y;let b=!1;const S=ye(r,!1),$={from:ce("from",{params:n.params,routeId:(P=(N=n.route)==null?void 0:N.id)!=null?P:null,url:n.url}),to:ce("to",{params:(O=S==null?void 0:S.params)!=null?O:null,routeId:(y=S==null?void 0:S.route.id)!=null?y:null,url:r}),type:d};_!==void 0&&($.delta=_);const L={...$,cancel:()=>{b=!0}};if(c.before_navigate.forEach(R=>R(L)),b){w();return}Ee(U),E(),h&&K.navigating.set($),await Ae(S,r,s,{scroll:f,keepfocus:p,details:l},k,()=>{c.after_navigate.forEach(R=>R($)),K.navigating.set(null)})}async function De(r,f,p,s){return r.origin===location.origin&&r.pathname===location.pathname&&!u?await se({status:s,error:p,url:r,routeId:f}):await ie(r)}function ie(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{ke(()=>(c.after_navigate.push(r),()=>{const f=c.after_navigate.indexOf(r);c.after_navigate.splice(f,1)}))},before_navigate:r=>{ke(()=>(c.before_navigate.push(r),()=>{const f=c.before_navigate.indexOf(r);c.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(g||!h)&&(m=!1)},goto:(r,f={})=>Q(r,f,[]),invalidate:r=>{if(r===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof r=="function")o.push(r);else{const{href:f}=new URL(r,location.href);o.push(p=>p.href===f)}return oe()},invalidateAll:()=>(v=!0,oe()),prefetch:async r=>{const f=new URL(r,Fe(document));await Le(f)},prefetch_routes:async r=>{const p=(r?le.filter(s=>r.some(l=>s.exec(l))):le).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(p)},apply_action:async r=>{if(r.type==="error"){const f=new URL(location.href),{branch:p,route:s}=n;if(!s)return;const l=await Ue(n.branch.length,p,s.errors);if(l){const d=await x({url:f,params:n.params,branch:p.slice(0,l.idx).concat(l.node),status:500,error:r.error,route:s});n=d.state;const _=fe();I.$set(d.props),_()}}else if(r.type==="redirect")Q(r.location,{},[]);else{const f={form:r.data,page:{...D,form:r.data,status:r.status}},p=fe();I.$set(f),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var _,k;let l=!1;const d={from:ce("from",{params:n.params,routeId:(k=(_=n.route)==null?void 0:_.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>l=!0};c.before_navigate.forEach(E=>E(d)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ee(U);try{sessionStorage[He]=JSON.stringify(re)}catch{}}});const r=s=>{const{url:l,options:d}=Je(s);if(l&&d.prefetch){if(Te(l))return;Le(l)}};let f;const p=s=>{clearTimeout(f),f=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:l,url:d,options:_}=Je(s);if(!l||!d)return;const k=l instanceof SVGAElement;if(!k&&d.protocol!==location.protocol&&!(d.protocol==="https:"||d.protocol==="http:"))return;const E=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||E.includes("external")||_.reload||(k?l.target.baseVal:l.target))return;const[w,b]=d.href.split("#");if(b!==void 0&&w===location.href.split("#")[0]){V=!0,Ee(U),n.url=d,K.page.set({...D,url:d}),K.page.notify();return}we({url:d,scroll:_.noscroll?Re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[B]===U)return;const l=s.state[B]-U;we({url:new URL(location.href),scroll:re[s.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=s.state[B]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[B]:++U},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&K.navigating.set(null)})},_hydrate:async({status:r,error:f,node_ids:p,params:s,routeId:l,data:d,form:_})=>{var w;u=!0;const k=new URL(location.href);let E;try{const b=p.map(async(S,$)=>{const L=d[$];return _e({loader:me[S],url:k,params:s,routeId:l,parent:async()=>{const N={};for(let P=0;P<$;P+=1)Object.assign(N,(await b[P]).data);return N},server_data_node:ge(L)})});E=await x({url:k,params:s,branch:await Promise.all(b),status:r,error:f,form:_,route:(w=le.find(S=>S.id===l))!=null?w:null})}catch(b){if(b instanceof Me){await ie(new URL(b.location,location.href));return}E=await se({status:b instanceof Se?b.status:500,error:ne(b,{url:k,params:s,routeId:l}),url:k,routeId:l})}je(E)}}}async function ze(a,e){const t=new URL(a);t.pathname=a.pathname.replace(/\/$/,"")+jt;const o=await he(t.href,{headers:{"x-sveltekit-invalidated":e.map(c=>c?"1":"").join(",")}}),i=await o.text();if(!o.ok)throw new Error(JSON.parse(i));return Bt(i)}function ne(a,e){var t;return a instanceof Se?a.body:(t=At.handleError({error:a,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Ft=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(a,e){for(const t of Ft)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${a}.${t} should now be ${a}.url.${t}`)},enumerable:!1});return e}function fe(){return()=>{}}async function zt({env:a,hydrate:e,paths:t,target:o,trailing_slash:i}){it(t);const c=Ct({target:o,base:t.base,trailing_slash:i});st({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{zt as start};
