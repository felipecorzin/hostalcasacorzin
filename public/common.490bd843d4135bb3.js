"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{6022:(y,m,i)=>{i.d(m,{c:()=>r});var c=i(9816),u=i(7864),l=i(1898);const r=(o,n)=>{let e,t;const a=(v,_,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(v,_);E&&n(E)?E!==e&&(g(),d(E,w)):g()},d=(v,_)=>{e=v,t||(t=e);const w=e;(0,c.w)(()=>w.classList.add("ion-activated")),_()},g=(v=!1)=>{if(!e)return;const _=e;(0,c.w)(()=>_.classList.remove("ion-activated")),v&&t!==e&&e.click(),e=void 0};return(0,l.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:v=>a(v.currentX,v.currentY,u.a),onMove:v=>a(v.currentX,v.currentY,u.b),onEnd:()=>{g(!0),(0,u.h)(),t=void 0}})}},2225:(y,m,i)=>{i.d(m,{g:()=>c});const c=(n,e,t,a,d)=>l(n[1],e[1],t[1],a[1],d).map(g=>u(n[0],e[0],t[0],a[0],g)),u=(n,e,t,a,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+a*d))-n*Math.pow(d-1,3),l=(n,e,t,a,d)=>o((a-=d)-3*(t-=d)+3*(e-=d)-(n-=d),3*t-6*e+3*n,3*e-3*n,n).filter(v=>v>=0&&v<=1),o=(n,e,t,a)=>{if(0===n)return((n,e,t)=>{const a=e*e-4*n*t;return a<0?[]:[(-e+Math.sqrt(a))/(2*n),(-e-Math.sqrt(a))/(2*n)]})(e,t,a);const d=(3*(t/=n)-(e/=n)*e)/3,g=(2*e*e*e-9*e*t+27*(a/=n))/27;if(0===d)return[Math.pow(-g,1/3)];if(0===g)return[Math.sqrt(-d),-Math.sqrt(-d)];const v=Math.pow(g/2,2)+Math.pow(d/3,3);if(0===v)return[Math.pow(g/2,.5)-e/3];if(v>0)return[Math.pow(-g/2+Math.sqrt(v),1/3)-Math.pow(g/2+Math.sqrt(v),1/3)-e/3];const _=Math.sqrt(Math.pow(-d/3,3)),w=Math.acos(-g/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(_,1/3);return[E*Math.cos(w/3)-e/3,E*Math.cos((w+2*Math.PI)/3)-e/3,E*Math.cos((w+4*Math.PI)/3)-e/3]}},5062:(y,m,i)=>{i.d(m,{i:()=>c});const c=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(y,m,i)=>{i.r(m),i.d(m,{startFocusVisible:()=>r});const c="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let n=[],e=!0;const t=o?o.shadowRoot:document,a=o||document.body,d=M=>{n.forEach(h=>h.classList.remove(c)),M.forEach(h=>h.classList.add(c)),n=M},g=()=>{e=!1,d([])},v=M=>{e=l.includes(M.key),e||d([])},_=M=>{if(e&&void 0!==M.composedPath){const h=M.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));d(h)}},w=()=>{t.activeElement===a&&d([])};return t.addEventListener("keydown",v),t.addEventListener("focusin",_),t.addEventListener("focusout",w),t.addEventListener("touchstart",g),t.addEventListener("mousedown",g),{destroy:()=>{t.removeEventListener("keydown",v),t.removeEventListener("focusin",_),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",g),t.removeEventListener("mousedown",g)},setFocus:d}}},8689:(y,m,i)=>{i.d(m,{c:()=>u});var c=i(3577);const u=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const d=void 0!==e.label||l(e),g=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,v=(0,c.h)(e);t=!0===e.legacy||!d&&!g&&null!==v}return t}}},l=n=>null!==n.shadowRoot&&!!(r.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||o.includes(n.tagName)&&""!==n.textContent),r=["ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(y,m,i)=>{i.d(m,{a:()=>r,b:()=>o,c:()=>l,d:()=>e,h:()=>n});const c={getEngine(){var t;const a=window;return a.TapticEngine||(null===(t=a.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&a.Capacitor.Plugins.Haptics},available(){var t;const a=window;return!!this.getEngine()&&("web"!==(null===(t=a.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const a=this.getEngine();if(!a)return;const d=this.isCapacitor()?t.style.toUpperCase():t.style;a.impact({style:d})},notification(t){const a=this.getEngine();if(!a)return;const d=this.isCapacitor()?t.style.toUpperCase():t.style;a.notification({style:d})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},u=()=>c.available(),l=()=>{u()&&c.selection()},r=()=>{u()&&c.selectionStart()},o=()=>{u()&&c.selectionChanged()},n=()=>{u()&&c.selectionEnd()},e=t=>{u()&&c.impact(t)}},7366:(y,m,i)=>{i.d(m,{a:()=>c,b:()=>_,c:()=>e,d:()=>w,e:()=>D,f:()=>n,g:()=>E,h:()=>l,i:()=>u,j:()=>p,k:()=>O,l:()=>t,m:()=>g,n:()=>M,o:()=>d,p:()=>o,q:()=>r,r:()=>s,s:()=>C,t:()=>v,u:()=>h,v:()=>f,w:()=>a});const c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2055:(y,m,i)=>{i.d(m,{I:()=>n,a:()=>d,b:()=>o,c:()=>_,d:()=>E,f:()=>g,g:()=>a,i:()=>t,p:()=>w,r:()=>M,s:()=>v});var c=i(5861),u=i(3577),l=i(1178);const o="ion-content",n=".ion-content-scroll-host",e=`${o}, ${n}`,t=h=>"ION-CONTENT"===h.tagName,a=function(){var h=(0,c.Z)(function*(f){return t(f)?(yield new Promise(s=>(0,u.c)(f,s)),f.getScrollElement()):f});return function(s){return h.apply(this,arguments)}}(),d=h=>h.querySelector(n)||h.querySelector(e),g=h=>h.closest(e),v=(h,f)=>t(h)?h.scrollToTop(f):Promise.resolve(h.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),_=(h,f,s,p)=>t(h)?h.scrollByPoint(f,s,p):Promise.resolve(h.scrollBy({top:s,left:f,behavior:p>0?"smooth":"auto"})),w=h=>(0,l.b)(h,o),E=h=>{if(t(h)){const s=h.scrollY;return h.scrollY=!1,s}return h.style.setProperty("overflow","hidden"),!0},M=(h,f)=>{t(h)?h.scrollY=f:h.style.removeProperty("overflow")}},9240:(y,m,i)=>{i.d(m,{g:()=>u});var c=i(1178);const u=(r,o,n)=>{const e=null==r?0:r.toString().length,t=l(e,o);if(void 0===n)return t;try{return n(e,o)}catch(a){return(0,c.a)("Exception in provided `counterFormatter`.",a),t}},l=(r,o)=>`${r} / ${o}`},5234:(y,m,i)=>{i.r(m),i.d(m,{KEYBOARD_DID_CLOSE:()=>u,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>f,keyboardDidClose:()=>w,keyboardDidOpen:()=>v,keyboardDidResize:()=>_,resetKeyboardAssist:()=>e,setKeyboardClose:()=>g,setKeyboardOpen:()=>d,startKeyboardAssist:()=>t,trackViewportChanges:()=>h});const c="ionKeyboardDidShow",u="ionKeyboardDidHide";let r={},o={},n=!1;const e=()=>{r={},o={},n=!1},t=s=>{a(s),s.visualViewport&&(o=f(s.visualViewport),s.visualViewport.onresize=()=>{h(s),v()||_(s)?d(s):w(s)&&g(s)})},a=s=>{s.addEventListener("keyboardDidShow",p=>d(s,p)),s.addEventListener("keyboardDidHide",()=>g(s))},d=(s,p)=>{E(s,p),n=!0},g=s=>{M(s),n=!1},v=()=>!n&&r.width===o.width&&(r.height-o.height)*o.scale>150,_=s=>n&&!w(s),w=s=>n&&o.height===s.innerHeight,E=(s,p)=>{const C=new CustomEvent(c,{detail:{keyboardHeight:p?p.keyboardHeight:s.innerHeight-o.height}});s.dispatchEvent(C)},M=s=>{const p=new CustomEvent(u);s.dispatchEvent(p)},h=s=>{r=Object.assign({},o),o=f(s.visualViewport)},f=s=>({width:Math.round(s.width),height:Math.round(s.height),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,pageTop:s.pageTop,pageLeft:s.pageLeft,scale:s.scale})},9852:(y,m,i)=>{i.d(m,{c:()=>u});var c=i(3457);const u=l=>{let r,o,n;const e=()=>{r=()=>{n=!0,l&&l(!0)},o=()=>{n=!1,l&&l(!1)},null==c.w||c.w.addEventListener("keyboardWillShow",r),null==c.w||c.w.addEventListener("keyboardWillHide",o)};return e(),{init:e,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",r),null==c.w||c.w.removeEventListener("keyboardWillHide",o),r=o=void 0},isKeyboardVisible:()=>n}}},7741:(y,m,i)=>{i.d(m,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(l,r,o)=>{const n=l*r/o-l+"ms",e=2*Math.PI*r/o;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(l,r,o)=>{const n=r/o,e=l*n-l+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,r)=>({r:6,style:{left:9-9*r+"px","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":l*r/o-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":l*r/o-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/o-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/o-l+"ms"}})}}},7539:(y,m,i)=>{i.r(m),i.d(m,{createSwipeBackGesture:()=>o});var c=i(3577),u=i(5062),l=i(1898);i(4349);const o=(n,e,t,a,d)=>{const g=n.ownerDocument.defaultView;let v=(0,u.i)(n);const w=s=>v?-s.deltaX:s.deltaX;return(0,l.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s=>(v=(0,u.i)(n),(s=>{const{startX:O}=s;return v?O>=g.innerWidth-50:O<=50})(s)&&e()),onStart:t,onMove:s=>{const O=w(s)/g.innerWidth;a(O)},onEnd:s=>{const p=w(s),O=g.innerWidth,C=p/O,D=(s=>v?-s.velocityX:s.velocityX)(s),L=D>=0&&(D>.2||p>O/2),P=(L?1-C:C)*O;let x=0;if(P>5){const b=P/Math.abs(D);x=Math.min(b,540)}d(L,C<=0?.01:(0,c.l)(0,C,.9999),x)}})}},7264:(y,m,i)=>{i.d(m,{T:()=>r});var c=i(2340),u=i(1571),l=i(529);let r=(()=>{class o{constructor(e){this.http=e,this.baseUrl=c.N.baseUrl}getActividades(){return this.http.get(`${this.baseUrl}/activity/findAll`)}getActividad(e){return this.http.get(`${this.baseUrl}/activity/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(u.LFG(l.eN))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},374:(y,m,i)=>{i.d(m,{D:()=>o});var c=i(529),u=i(2340),l=i(1571),r=i(7556);let o=(()=>{class n{constructor(t,a){this.http=t,this.authService=a,this.baseUrl=u.N.baseUrl}getPlanes(){return this.http.get(`${this.baseUrl}/plan/findAll`)}crearPlan(t){const a=new c.WM({"x-token":this.authService.token});return new Promise(d=>{this.http.post(`${this.baseUrl}/plan/crearPlan`,t,{headers:a}).subscribe(g=>{d(!0)})})}getPlan(t){return this.http.get(`${this.baseUrl}/plan/${t}`)}deletePlan(t){return this.http.delete(`${this.baseUrl}/plan/${t}`)}deleteAll(){return this.http.delete(this.baseUrl)}findByTitle(t){return this.http.get(`${this.baseUrl}?title=${t}`)}}return n.\u0275fac=function(t){return new(t||n)(l.LFG(c.eN),l.LFG(r.e))},n.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},9846:(y,m,i)=>{i.d(m,{F:()=>r});var c=i(5861),u=i(1571),l=i(7173);let r=(()=>{class o{constructor(e,t){this.alertController=e,this.toastController=t}alertaInformativaLogin(e,t,a){var d=this;return(0,c.Z)(function*(){yield(yield d.alertController.create({header:e,subHeader:t,message:a,buttons:["OK"]})).present()})()}alertaInformativa(e){var t=this;return(0,c.Z)(function*(){yield(yield t.alertController.create({message:e,buttons:["OK"]})).present()})()}presentToast(e){var t=this;return(0,c.Z)(function*(){(yield t.toastController.create({message:e,duration:1500,position:"bottom",cssClass:"miToast"})).present()})()}}return o.\u0275fac=function(e){return new(e||o)(u.LFG(l.Br),u.LFG(l.yF))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);