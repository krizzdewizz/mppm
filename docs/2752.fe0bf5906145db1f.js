"use strict";(self.webpackChunkmppm=self.webpackChunkmppm||[]).push([[2752],{2752:(F,T,v)=>{v.r(T),v.d(T,{startTapClick:()=>b});var u=v(1643);const b=n=>{let o,i,E,d,s=10*-m,r=0;const P=n.getBoolean("animated",!0)&&n.getBoolean("rippleEffect",!0),p=new WeakMap,D=t=>{s=(0,u.q)(t),h(t)},R=()=>{clearTimeout(d),d=void 0,i&&(I(!1),i=void 0)},S=t=>{i||null!==(null==o?void 0:o.parentElement)||(o=void 0,g(k(t),t))},h=t=>{g(void 0,t)},g=(t,e)=>{if(t&&t===i)return;clearTimeout(d),d=void 0;const{x:l,y:a}=(0,u.p)(e);if(i){if(p.has(i))throw new Error("internal error");i.classList.contains(f)||w(i,l,a),I(!0)}if(t){const M=p.get(t);M&&(clearTimeout(M),p.delete(t));const x=L(t)?0:y;t.classList.remove(f),d=setTimeout(()=>{w(t,l,a),d=void 0},x)}i=t},w=(t,e,l)=>{r=Date.now(),t.classList.add(f);const a=P&&q(t);a&&a.addRipple&&(C(),E=a.addRipple(e,l))},C=()=>{void 0!==E&&(E.then(t=>t()),E=void 0)},I=t=>{C();const e=i;if(!e)return;const l=A-Date.now()+r;if(t&&l>0&&!L(e)){const a=setTimeout(()=>{e.classList.remove(f),p.delete(e)},A);p.set(e,a)}else e.classList.remove(f)},c=document;c.addEventListener("ionScrollStart",t=>{o=t.target,R()}),c.addEventListener("ionScrollEnd",()=>{o=void 0}),c.addEventListener("ionGestureCaptured",R),c.addEventListener("touchstart",t=>{s=(0,u.q)(t),S(t)},!0),c.addEventListener("touchcancel",D,!0),c.addEventListener("touchend",D,!0),c.addEventListener("mousedown",t=>{const e=(0,u.q)(t)-m;s<e&&S(t)},!0),c.addEventListener("mouseup",t=>{const e=(0,u.q)(t)-m;s<e&&h(t)},!0),c.addEventListener("contextmenu",t=>{h(t)},!0)},k=n=>{if(!n.composedPath)return n.target.closest(".ion-activatable");{const s=n.composedPath();for(let r=0;r<s.length-2;r++){const o=s[r];if(null==o?void 0:o.classList.contains("ion-activatable"))return o}}},L=n=>n.classList.contains("ion-activatable-instant"),q=n=>{if(n.shadowRoot){const s=n.shadowRoot.querySelector("ion-ripple-effect");if(s)return s}return n.querySelector("ion-ripple-effect")},f="ion-activated",y=200,A=200,m=2500}}]);