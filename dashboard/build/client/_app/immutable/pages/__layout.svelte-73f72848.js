<<<<<<< HEAD:dashboard/build/client/_app/immutable/pages/__layout.svelte-ccc988b0.js
import{_ as T}from"../chunks/preload-helper-c28b9807.js";import{F as Te,S as ye,i as Ie,s as qe,l as b,r as G,a as N,m as g,n as E,u as B,h as f,c as S,p as _,G as Z,b as V,H as v,I as ee,v as pe,E as w,J as Re,K as Y,e as fe,L as Le,t as A,d as z,f as I,o as Me,g as x,M as W,w as j,x as te,y as H,B as J,N as Ce,O as _e,P as Ue,Q as Fe,R as Ge,T as me,U as Be,V as je,W as de,X as Pe,Y as Ae,Z as Ve}from"../chunks/index-dd217174.js";import{R as we}from"../chunks/Rolling-71ab3f52.js";import{g as He}from"../chunks/navigation-75a744b1.js";import{p as X,u as ve}from"../chunks/Popup-bd678b0b.js";import{f as he,a as Ne}from"../chunks/index-ae3f141b.js";import"../chunks/singletons-eca981c1.js";import"../chunks/index-32c9bc07.js";const be=(l,e)=>{const s=l[e];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((t,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})};const Je=()=>{const l=Te("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},Se={subscribe(l){return Je().page.subscribe(l)}};function ge(l,e,s){const t=l.slice();return t[5]=e[s],t}function ke(l){let e,s,t,a,c,r,i=l[5].name+"",o,p,n,u,m;function d(){return l[3](l[5])}return{c(){e=b("button"),s=b("span"),t=b("img"),c=N(),r=b("span"),o=G(i),p=N(),this.h()},l(q){e=g(q,"BUTTON",{class:!0});var $=E(e);s=g($,"SPAN",{class:!0});var M=E(s);t=g(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(f),c=S($),r=g($,"SPAN",{class:!0});var O=E(r);o=B(O,i),O.forEach(f),p=S($),$.forEach(f),this.h()},h(){Z(t.src,a="/assets/icons/"+l[5].icon)||_(t,"src",a),_(t,"alt","icon"),_(t,"class","svelte-s6hqp2"),_(s,"class","icon svelte-s6hqp2"),_(r,"class","name svelte-s6hqp2"),_(e,"class",n="item "+(l[1].url.pathname.split("/")[1]===l[5].path?"selected":"not-selected")+" svelte-s6hqp2")},m(q,$){V(q,e,$),v(e,s),v(s,t),v(e,c),v(e,r),v(r,o),v(e,p),u||(m=ee(e,"click",d),u=!0)},p(q,$){l=q,$&2&&n!==(n="item "+(l[1].url.pathname.split("/")[1]===l[5].path?"selected":"not-selected")+" svelte-s6hqp2")&&_(e,"class",n)},d(q){q&&f(e),u=!1,m()}}}function Ee(l){let e,s,t;return{c(){e=b("span"),s=b("img"),this.h()},l(a){e=g(a,"SPAN",{class:!0});var c=E(e);s=g(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(f),this.h()},h(){Z(s.src,t="https://cdn.discordapp.com/avatars/"+l[0].id+"/"+l[0].avatar+".png")||_(s,"src",t),_(s,"alt","pfp"),_(s,"class","svelte-s6hqp2"),_(e,"class","avatar")},m(a,c){V(a,e,c),v(e,s)},p(a,c){c&1&&!Z(s.src,t="https://cdn.discordapp.com/avatars/"+a[0].id+"/"+a[0].avatar+".png")&&_(s,"src",t)},d(a){a&&f(e)}}}function Ke(l){let e,s,t,a,c,r,i,o,p,n,u,m=l[0].username+"",d,q,$,M,O=l[0].discriminator+"",K,se,R,L,re,le,ie,C=l[2],D=[];for(let h=0;h<C.length;h+=1)D[h]=ke(ge(l,C,h));let y=l[0].avatar&&Ee(l);return{c(){e=b("nav"),s=b("div"),t=b("span"),a=G("fyfu modmail"),c=N(),r=b("div");for(let h=0;h<D.length;h+=1)D[h].c();i=N(),o=b("div"),y&&y.c(),p=N(),n=b("span"),u=b("span"),d=G(m),q=N(),$=b("span"),M=G("#"),K=G(O),se=N(),R=b("span"),L=b("img"),this.h()},l(h){e=g(h,"NAV",{class:!0});var P=E(e);s=g(P,"DIV",{class:!0});var k=E(s);t=g(k,"SPAN",{class:!0});var F=E(t);a=B(F,"fyfu modmail"),F.forEach(f),k.forEach(f),c=S(P),r=g(P,"DIV",{class:!0});var oe=E(r);for(let ne=0;ne<D.length;ne+=1)D[ne].l(oe);oe.forEach(f),i=S(P),o=g(P,"DIV",{class:!0});var U=E(o);y&&y.l(U),p=S(U),n=g(U,"SPAN",{class:!0});var Q=E(n);u=g(Q,"SPAN",{class:!0});var ue=E(u);d=B(ue,m),ue.forEach(f),q=S(Q),$=g(Q,"SPAN",{class:!0});var ae=E($);M=B(ae,"#"),K=B(ae,O),ae.forEach(f),Q.forEach(f),se=S(U),R=g(U,"SPAN",{class:!0});var ce=E(R);L=g(ce,"IMG",{src:!0,alt:!0,class:!0}),ce.forEach(f),U.forEach(f),P.forEach(f),this.h()},h(){_(t,"class","name svelte-s6hqp2"),_(s,"class","brand svelte-s6hqp2"),_(r,"class","items svelte-s6hqp2"),_(u,"class","username"),_($,"class","discriminator svelte-s6hqp2"),_(n,"class","name svelte-s6hqp2"),Z(L.src,re="/assets/icons/logout.svg")||_(L,"src",re),_(L,"alt","logout"),_(L,"class","svelte-s6hqp2"),_(R,"class","logout svelte-s6hqp2"),_(o,"class","user svelte-s6hqp2"),_(e,"class","svelte-s6hqp2")},m(h,P){V(h,e,P),v(e,s),v(s,t),v(t,a),v(e,c),v(e,r);for(let k=0;k<D.length;k+=1)D[k].m(r,null);v(e,i),v(e,o),y&&y.m(o,null),v(o,p),v(o,n),v(n,u),v(u,d),v(n,q),v(n,$),v($,M),v($,K),v(o,se),v(o,R),v(R,L),le||(ie=ee(R,"click",l[4]),le=!0)},p(h,[P]){if(P&6){C=h[2];let k;for(k=0;k<C.length;k+=1){const F=ge(h,C,k);D[k]?D[k].p(F,P):(D[k]=ke(F),D[k].c(),D[k].m(r,null))}for(;k<D.length;k+=1)D[k].d(1);D.length=C.length}h[0].avatar?y?y.p(h,P):(y=Ee(h),y.c(),y.m(o,p)):y&&(y.d(1),y=null),P&1&&m!==(m=h[0].username+"")&&pe(d,m),P&1&&O!==(O=h[0].discriminator+"")&&pe(K,O)},i:w,o:w,d(h){h&&f(e),Re(D,h),y&&y.d(),le=!1,ie()}}}function Qe(l,e,s){let t;Y(l,Se,o=>s(1,t=o));let{userData:a}=e,c=[...a.manager?[{path:"manageusers",name:"User Management",icon:"user-settings.svg"}]:[],{path:"tickets",name:"Tickets",icon:"tickets.svg"},{path:"blocked",name:"Blockierte User",icon:"blocked.svg"},{path:"snippets",name:"Snippets",icon:"quote.svg"}];const r=o=>He(`/${o.path}`),i=()=>document.location.href="/api/v1/logout";return l.$$set=o=>{"userData"in o&&s(0,a=o.userData)},[a,t,c,r,i]}class We extends ye{constructor(e){super(),Ie(this,e,Qe,Ke,qe,{userData:0})}}function Oe(l){const e=s=>{l&&!l.contains(s.target)&&!s.defaultPrevented&&l.dispatchEvent(new CustomEvent("click_outside",l))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function Xe(l){let e,s,t;return s=new we({props:{style:"transform: scale(.2);"}}),{c(){e=b("div"),j(s.$$.fragment),this.h()},l(a){e=g(a,"DIV",{class:!0});var c=E(e);te(s.$$.fragment,c),c.forEach(f),this.h()},h(){_(e,"class","loading svelte-1p50pmi")},m(a,c){V(a,e,c),H(s,e,null),t=!0},p:w,i(a){t||(I(s.$$.fragment,a),t=!0)},o(a){A(s.$$.fragment,a),t=!1},d(a){a&&f(e),J(s)}}}function Ye(l){let e,s,t,a,c,r=l[3].key&&$e(l),i=l[0]&&De(l);const o=l[6].default,p=Ce(o,l,l[5],null);return{c(){r&&r.c(),e=N(),i&&i.c(),s=N(),t=b("main"),p&&p.c(),this.h()},l(n){r&&r.l(n),e=S(n),i&&i.l(n),s=S(n),t=g(n,"MAIN",{class:!0});var u=E(t);p&&p.l(u),u.forEach(f),this.h()},h(){_(t,"class",a=_e(l[0]?"userData":"")+" svelte-1p50pmi")},m(n,u){r&&r.m(n,u),V(n,e,u),i&&i.m(n,u),V(n,s,u),V(n,t,u),p&&p.m(t,null),c=!0},p(n,u){n[3].key?r?(r.p(n,u),u&8&&I(r,1)):(r=$e(n),r.c(),I(r,1),r.m(e.parentNode,e)):r&&(x(),A(r,1,1,()=>{r=null}),z()),n[0]?i?(i.p(n,u),u&1&&I(i,1)):(i=De(n),i.c(),I(i,1),i.m(s.parentNode,s)):i&&(x(),A(i,1,1,()=>{i=null}),z()),p&&p.p&&(!c||u&32)&&Ue(p,o,n,n[5],c?Ge(o,n[5],u,null):Fe(n[5]),null),(!c||u&1&&a!==(a=_e(n[0]?"userData":"")+" svelte-1p50pmi"))&&_(t,"class",a)},i(n){c||(I(r),I(i),I(p,n),c=!0)},o(n){A(r),A(i),A(p,n),c=!1},d(n){r&&r.d(n),n&&f(e),i&&i.d(n),n&&f(s),n&&f(t),p&&p.d(n)}}}function $e(l){let e,s,t,a,c,r={ctx:l,current:null,token:null,hasCatch:!1,pending:xe,then:ze,catch:Ze,value:10,blocks:[,,,]};return me(e=be(Object.assign({"../lib/popups/snippet-delete.svelte":()=>T(()=>import("../chunks/snippet-delete-d1ed7299.js"),["_app/immutable/chunks/snippet-delete-d1ed7299.js","_app/immutable/assets/snippet-delete-2d3d7bec.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-71ab3f52.js","_app/immutable/assets/Rolling-2d2c9fb9.css"]),"../lib/popups/snippet-new.svelte":()=>T(()=>import("../chunks/snippet-new-063d14d2.js"),["_app/immutable/chunks/snippet-new-063d14d2.js","_app/immutable/assets/snippet-new-3342ba39.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-71ab3f52.js","_app/immutable/assets/Rolling-2d2c9fb9.css","_app/immutable/chunks/Popup-bd678b0b.js","_app/immutable/chunks/index-32c9bc07.js"]),"../lib/popups/snippet.svelte":()=>T(()=>import("../chunks/snippet-380707c2.js"),["_app/immutable/chunks/snippet-380707c2.js","_app/immutable/assets/snippet-4ee3df07.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-71ab3f52.js","_app/immutable/assets/Rolling-2d2c9fb9.css","_app/immutable/chunks/Popup-bd678b0b.js","_app/immutable/chunks/index-32c9bc07.js"]),"../lib/popups/unblock.svelte":()=>T(()=>import("../chunks/unblock-64b710bf.js"),["_app/immutable/chunks/unblock-64b710bf.js","_app/immutable/assets/unblock-2d3d7bec.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-71ab3f52.js","_app/immutable/assets/Rolling-2d2c9fb9.css"])}),`../lib/popups/${l[3].key}.svelte`),r),{c(){r.block.c(),s=N(),t=b("div"),this.h()},l(i){r.block.l(i),s=S(i),t=g(i,"DIV",{class:!0}),E(t).forEach(f),this.h()},h(){_(t,"class","popup-blur svelte-1p50pmi")},m(i,o){r.block.m(i,r.anchor=o),r.mount=()=>s.parentNode,r.anchor=s,V(i,s,o),V(i,t,o),c=!0},p(i,o){l=i,r.ctx=l,o&8&&e!==(e=be(Object.assign({"../lib/popups/snippet-delete.svelte":()=>T(()=>import("../chunks/snippet-delete-d1ed7299.js"),["_app/immutable/chunks/snippet-delete-d1ed7299.js","_app/immutable/assets/snippet-delete-2d3d7bec.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-71ab3f52.js","_app/immutable/assets/Rolling-2d2c9fb9.css"]),"../lib/popups/snippet-new.svelte":()=>T(()=>import("../chunks/snippet-new-063d14d2.js"),["_app/immutable/chunks/snippet-new-063d14d2.js","_app/immutable/assets/snippet-new-3342ba39.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-71ab3f52.js","_app/immutable/assets/Rolling-2d2c9fb9.css","_app/immutable/chunks/Popup-bd678b0b.js","_app/immutable/chunks/index-32c9bc07.js"]),"../lib/popups/snippet.svelte":()=>T(()=>import("../chunks/snippet-380707c2.js"),["_app/immutable/chunks/snippet-380707c2.js","_app/immutable/assets/snippet-4ee3df07.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-71ab3f52.js","_app/immutable/assets/Rolling-2d2c9fb9.css","_app/immutable/chunks/Popup-bd678b0b.js","_app/immutable/chunks/index-32c9bc07.js"]),"../lib/popups/unblock.svelte":()=>T(()=>import("../chunks/unblock-64b710bf.js"),["_app/immutable/chunks/unblock-64b710bf.js","_app/immutable/assets/unblock-2d3d7bec.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-71ab3f52.js","_app/immutable/assets/Rolling-2d2c9fb9.css"])}),`../lib/popups/${l[3].key}.svelte`))&&me(e,r)||Be(r,l,o)},i(i){c||(I(r.block),je(()=>{a||(a=de(t,he,{duration:200},!0)),a.run(1)}),c=!0)},o(i){for(let o=0;o<3;o+=1){const p=r.blocks[o];A(p)}a||(a=de(t,he,{duration:200},!1)),a.run(0),c=!1},d(i){r.block.d(i),r.token=null,r=null,i&&f(s),i&&f(t),i&&a&&a.end()}}}function Ze(l){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function ze(l){let e,s,t,a,c,r,i;var o=l[10].default;function p(n){return{props:{value:n[3].value,close:n[8]}}}return o&&(t=new o(p(l))),{c(){e=b("div"),s=b("div"),t&&j(t.$$.fragment),this.h()},l(n){e=g(n,"DIV",{class:!0});var u=E(e);s=g(u,"DIV",{class:!0});var m=E(s);t&&te(t.$$.fragment,m),m.forEach(f),u.forEach(f),this.h()},h(){_(s,"class","content"),_(e,"class","popup svelte-1p50pmi")},m(n,u){V(n,e,u),v(e,s),t&&H(t,s,null),c=!0,r||(i=[Pe(Oe.call(null,e)),ee(e,"click_outside",l[9])],r=!0)},p(n,u){const m={};if(u&8&&(m.value=n[3].value),u&24&&(m.close=n[8]),o!==(o=n[10].default)){if(t){x();const d=t;A(d.$$.fragment,1,0,()=>{J(d,1)}),z()}o?(t=new o(p(n)),j(t.$$.fragment),I(t.$$.fragment,1),H(t,s,null)):t=null}else o&&t.$set(m)},i(n){c||(t&&I(t.$$.fragment,n),a&&a.end(1),c=!0)},o(n){t&&A(t.$$.fragment,n),a=Ae(e,Ne,{y:50,duration:150}),c=!1},d(n){n&&f(e),t&&J(t),n&&a&&a.end(),r=!1,Ve(i)}}}function xe(l){let e,s,t,a,c,r;return s=new we({props:{style:"transform: scale(.2);"}}),{c(){e=b("div"),j(s.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var o=E(e);te(s.$$.fragment,o),o.forEach(f),this.h()},h(){_(e,"class","popup invisible svelte-1p50pmi")},m(i,o){V(i,e,o),H(s,e,null),a=!0,c||(r=[Pe(Oe.call(null,e)),ee(e,"click_outside",l[7])],c=!0)},p:w,i(i){a||(I(s.$$.fragment,i),t&&t.end(1),a=!0)},o(i){A(s.$$.fragment,i),t=Ae(e,Ne,{y:50,duration:150}),a=!1},d(i){i&&f(e),J(s),i&&t&&t.end(),c=!1,Ve(r)}}}function De(l){let e,s;return e=new We({props:{userData:l[0]}}),{c(){j(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,a){H(e,t,a),s=!0},p(t,a){const c={};a&1&&(c.userData=t[0]),e.$set(c)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){J(e,t)}}}function et(l){var n;let e,s,t,a,c,r;document.title=e="FyFu Modmail "+((n=l[2].url)!=null&&n.pathname.split("/")[1]?`| ${l[2].url.pathname.split("/")[1][0].toUpperCase()}${l[2].url.pathname.split("/")[1].slice(1)}`:"");const i=[Ye,Xe],o=[];function p(u,m){return u[1]?0:1}return t=p(l),a=o[t]=i[t](l),{c(){s=N(),a.c(),c=fe()},l(u){Le('[data-svelte="svelte-nobfek"]',document.head).forEach(f),s=S(u),a.l(u),c=fe()},m(u,m){V(u,s,m),o[t].m(u,m),V(u,c,m),r=!0},p(u,[m]){var q;(!r||m&4)&&e!==(e="FyFu Modmail "+((q=u[2].url)!=null&&q.pathname.split("/")[1]?`| ${u[2].url.pathname.split("/")[1][0].toUpperCase()}${u[2].url.pathname.split("/")[1].slice(1)}`:""))&&(document.title=e);let d=t;t=p(u),t===d?o[t].p(u,m):(x(),A(o[d],1,1,()=>{o[d]=null}),z(),a=o[t],a?a.p(u,m):(a=o[t]=i[t](u),a.c()),I(a,1),a.m(c.parentNode,c))},i(u){r||(I(a),r=!0)},o(u){A(a),r=!1},d(u){u&&f(s),o[t].d(u),u&&f(c)}}}async function ct({session:l,url:e}){return!(l!=null&&l.userData)&&e.pathname!=="/login"?{status:307,redirect:"/login"}:(l==null?void 0:l.userData)&&(e.pathname==="/login"||e.pathname==="/")?{status:307,redirect:"/tickets"}:{status:200,props:l||{}}}function tt(l,e,s){let t,a,c;Y(l,Se,d=>s(2,t=d)),Y(l,X,d=>s(3,a=d)),Y(l,ve,d=>s(4,c=d));let{$$slots:r={},$$scope:i}=e,{userData:o}=e,p;Me(()=>s(1,p=!0));const n=()=>W(X,a={key:null,value:null},a),u=d=>{d&&W(ve,c=c+1,c),W(X,a={key:null,value:null},a)},m=()=>W(X,a={key:null,value:null},a);return l.$$set=d=>{"userData"in d&&s(0,o=d.userData),"$$scope"in d&&s(5,i=d.$$scope)},[o,p,t,a,c,i,r,n,u,m]}class pt extends ye{constructor(e){super(),Ie(this,e,tt,et,qe,{userData:0})}}export{pt as default,ct as load};
=======
import{_ as T}from"../chunks/preload-helper-c28b9807.js";import{F as Te,S as ye,i as Ie,s as qe,l as b,r as G,a as N,m as g,n as E,u as B,h as f,c as S,p as _,G as Z,b as V,H as v,I as ee,v as pe,E as w,J as Re,K as Y,e as fe,L as Le,t as A,d as z,f as I,o as Me,g as x,M as W,w as j,x as te,y as H,B as J,N as Ce,O as _e,P as Ue,Q as Fe,R as Ge,T as me,U as Be,V as je,W as de,X as Pe,Y as Ae,Z as Ve}from"../chunks/index-dd217174.js";import{R as we}from"../chunks/Rolling-44ec13db.js";import{g as He}from"../chunks/navigation-75a744b1.js";import{p as X,u as ve}from"../chunks/Popup-bd678b0b.js";import{f as he,a as Ne}from"../chunks/index-ae3f141b.js";import"../chunks/singletons-eca981c1.js";import"../chunks/index-32c9bc07.js";const be=(l,e)=>{const s=l[e];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((t,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})};const Je=()=>{const l=Te("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},Se={subscribe(l){return Je().page.subscribe(l)}};function ge(l,e,s){const t=l.slice();return t[5]=e[s],t}function ke(l){let e,s,t,a,c,r,i=l[5].name+"",o,p,n,u,m;function d(){return l[3](l[5])}return{c(){e=b("button"),s=b("span"),t=b("img"),c=N(),r=b("span"),o=G(i),p=N(),this.h()},l(q){e=g(q,"BUTTON",{class:!0});var $=E(e);s=g($,"SPAN",{class:!0});var M=E(s);t=g(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(f),c=S($),r=g($,"SPAN",{class:!0});var O=E(r);o=B(O,i),O.forEach(f),p=S($),$.forEach(f),this.h()},h(){Z(t.src,a="/assets/icons/"+l[5].icon)||_(t,"src",a),_(t,"alt","icon"),_(t,"class","svelte-s6hqp2"),_(s,"class","icon svelte-s6hqp2"),_(r,"class","name svelte-s6hqp2"),_(e,"class",n="item "+(l[1].url.pathname.split("/")[1]===l[5].path?"selected":"not-selected")+" svelte-s6hqp2")},m(q,$){V(q,e,$),v(e,s),v(s,t),v(e,c),v(e,r),v(r,o),v(e,p),u||(m=ee(e,"click",d),u=!0)},p(q,$){l=q,$&2&&n!==(n="item "+(l[1].url.pathname.split("/")[1]===l[5].path?"selected":"not-selected")+" svelte-s6hqp2")&&_(e,"class",n)},d(q){q&&f(e),u=!1,m()}}}function Ee(l){let e,s,t;return{c(){e=b("span"),s=b("img"),this.h()},l(a){e=g(a,"SPAN",{class:!0});var c=E(e);s=g(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(f),this.h()},h(){Z(s.src,t="https://cdn.discordapp.com/avatars/"+l[0].id+"/"+l[0].avatar+".png")||_(s,"src",t),_(s,"alt","pfp"),_(s,"class","svelte-s6hqp2"),_(e,"class","avatar")},m(a,c){V(a,e,c),v(e,s)},p(a,c){c&1&&!Z(s.src,t="https://cdn.discordapp.com/avatars/"+a[0].id+"/"+a[0].avatar+".png")&&_(s,"src",t)},d(a){a&&f(e)}}}function Ke(l){let e,s,t,a,c,r,i,o,p,n,u,m=l[0].username+"",d,q,$,M,O=l[0].discriminator+"",K,se,R,L,re,le,ie,C=l[2],D=[];for(let h=0;h<C.length;h+=1)D[h]=ke(ge(l,C,h));let y=l[0].avatar&&Ee(l);return{c(){e=b("nav"),s=b("div"),t=b("span"),a=G("fyfu modmail"),c=N(),r=b("div");for(let h=0;h<D.length;h+=1)D[h].c();i=N(),o=b("div"),y&&y.c(),p=N(),n=b("span"),u=b("span"),d=G(m),q=N(),$=b("span"),M=G("#"),K=G(O),se=N(),R=b("span"),L=b("img"),this.h()},l(h){e=g(h,"NAV",{class:!0});var P=E(e);s=g(P,"DIV",{class:!0});var k=E(s);t=g(k,"SPAN",{class:!0});var F=E(t);a=B(F,"fyfu modmail"),F.forEach(f),k.forEach(f),c=S(P),r=g(P,"DIV",{class:!0});var oe=E(r);for(let ne=0;ne<D.length;ne+=1)D[ne].l(oe);oe.forEach(f),i=S(P),o=g(P,"DIV",{class:!0});var U=E(o);y&&y.l(U),p=S(U),n=g(U,"SPAN",{class:!0});var Q=E(n);u=g(Q,"SPAN",{class:!0});var ue=E(u);d=B(ue,m),ue.forEach(f),q=S(Q),$=g(Q,"SPAN",{class:!0});var ae=E($);M=B(ae,"#"),K=B(ae,O),ae.forEach(f),Q.forEach(f),se=S(U),R=g(U,"SPAN",{class:!0});var ce=E(R);L=g(ce,"IMG",{src:!0,alt:!0,class:!0}),ce.forEach(f),U.forEach(f),P.forEach(f),this.h()},h(){_(t,"class","name svelte-s6hqp2"),_(s,"class","brand svelte-s6hqp2"),_(r,"class","items svelte-s6hqp2"),_(u,"class","username"),_($,"class","discriminator svelte-s6hqp2"),_(n,"class","name svelte-s6hqp2"),Z(L.src,re="/assets/icons/logout.svg")||_(L,"src",re),_(L,"alt","logout"),_(L,"class","svelte-s6hqp2"),_(R,"class","logout svelte-s6hqp2"),_(o,"class","user svelte-s6hqp2"),_(e,"class","svelte-s6hqp2")},m(h,P){V(h,e,P),v(e,s),v(s,t),v(t,a),v(e,c),v(e,r);for(let k=0;k<D.length;k+=1)D[k].m(r,null);v(e,i),v(e,o),y&&y.m(o,null),v(o,p),v(o,n),v(n,u),v(u,d),v(n,q),v(n,$),v($,M),v($,K),v(o,se),v(o,R),v(R,L),le||(ie=ee(R,"click",l[4]),le=!0)},p(h,[P]){if(P&6){C=h[2];let k;for(k=0;k<C.length;k+=1){const F=ge(h,C,k);D[k]?D[k].p(F,P):(D[k]=ke(F),D[k].c(),D[k].m(r,null))}for(;k<D.length;k+=1)D[k].d(1);D.length=C.length}h[0].avatar?y?y.p(h,P):(y=Ee(h),y.c(),y.m(o,p)):y&&(y.d(1),y=null),P&1&&m!==(m=h[0].username+"")&&pe(d,m),P&1&&O!==(O=h[0].discriminator+"")&&pe(K,O)},i:w,o:w,d(h){h&&f(e),Re(D,h),y&&y.d(),le=!1,ie()}}}function Qe(l,e,s){let t;Y(l,Se,o=>s(1,t=o));let{userData:a}=e,c=[...a.manager?[{path:"manageusers",name:"User Management",icon:"user-settings.svg"}]:[],{path:"tickets",name:"Tickets",icon:"tickets.svg"},{path:"blocked",name:"Blockierte User",icon:"blocked.svg"},{path:"snippets",name:"Snippets",icon:"quote.svg"}];const r=o=>He(`/${o.path}`),i=()=>document.location.href="/api/v1/logout";return l.$$set=o=>{"userData"in o&&s(0,a=o.userData)},[a,t,c,r,i]}class We extends ye{constructor(e){super(),Ie(this,e,Qe,Ke,qe,{userData:0})}}function Oe(l){const e=s=>{l&&!l.contains(s.target)&&!s.defaultPrevented&&l.dispatchEvent(new CustomEvent("click_outside",l))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function Xe(l){let e,s,t;return s=new we({props:{style:"transform: scale(.2);"}}),{c(){e=b("div"),j(s.$$.fragment),this.h()},l(a){e=g(a,"DIV",{class:!0});var c=E(e);te(s.$$.fragment,c),c.forEach(f),this.h()},h(){_(e,"class","loading svelte-1p50pmi")},m(a,c){V(a,e,c),H(s,e,null),t=!0},p:w,i(a){t||(I(s.$$.fragment,a),t=!0)},o(a){A(s.$$.fragment,a),t=!1},d(a){a&&f(e),J(s)}}}function Ye(l){let e,s,t,a,c,r=l[3].key&&$e(l),i=l[0]&&De(l);const o=l[6].default,p=Ce(o,l,l[5],null);return{c(){r&&r.c(),e=N(),i&&i.c(),s=N(),t=b("main"),p&&p.c(),this.h()},l(n){r&&r.l(n),e=S(n),i&&i.l(n),s=S(n),t=g(n,"MAIN",{class:!0});var u=E(t);p&&p.l(u),u.forEach(f),this.h()},h(){_(t,"class",a=_e(l[0]?"userData":"")+" svelte-1p50pmi")},m(n,u){r&&r.m(n,u),V(n,e,u),i&&i.m(n,u),V(n,s,u),V(n,t,u),p&&p.m(t,null),c=!0},p(n,u){n[3].key?r?(r.p(n,u),u&8&&I(r,1)):(r=$e(n),r.c(),I(r,1),r.m(e.parentNode,e)):r&&(x(),A(r,1,1,()=>{r=null}),z()),n[0]?i?(i.p(n,u),u&1&&I(i,1)):(i=De(n),i.c(),I(i,1),i.m(s.parentNode,s)):i&&(x(),A(i,1,1,()=>{i=null}),z()),p&&p.p&&(!c||u&32)&&Ue(p,o,n,n[5],c?Ge(o,n[5],u,null):Fe(n[5]),null),(!c||u&1&&a!==(a=_e(n[0]?"userData":"")+" svelte-1p50pmi"))&&_(t,"class",a)},i(n){c||(I(r),I(i),I(p,n),c=!0)},o(n){A(r),A(i),A(p,n),c=!1},d(n){r&&r.d(n),n&&f(e),i&&i.d(n),n&&f(s),n&&f(t),p&&p.d(n)}}}function $e(l){let e,s,t,a,c,r={ctx:l,current:null,token:null,hasCatch:!1,pending:xe,then:ze,catch:Ze,value:10,blocks:[,,,]};return me(e=be(Object.assign({"../lib/popups/snippet-delete.svelte":()=>T(()=>import("../chunks/snippet-delete-4134d541.js"),["_app/immutable/chunks/snippet-delete-4134d541.js","_app/immutable/assets/snippet-delete-2d3d7bec.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-44ec13db.js","_app/immutable/assets/Rolling-2d2c9fb9.css"]),"../lib/popups/snippet-new.svelte":()=>T(()=>import("../chunks/snippet-new-fb212cb0.js"),["_app/immutable/chunks/snippet-new-fb212cb0.js","_app/immutable/assets/snippet-new-3342ba39.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-44ec13db.js","_app/immutable/assets/Rolling-2d2c9fb9.css","_app/immutable/chunks/Popup-bd678b0b.js","_app/immutable/chunks/index-32c9bc07.js"]),"../lib/popups/snippet.svelte":()=>T(()=>import("../chunks/snippet-2c8e79a0.js"),["_app/immutable/chunks/snippet-2c8e79a0.js","_app/immutable/assets/snippet-4ee3df07.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-44ec13db.js","_app/immutable/assets/Rolling-2d2c9fb9.css","_app/immutable/chunks/Popup-bd678b0b.js","_app/immutable/chunks/index-32c9bc07.js"]),"../lib/popups/unblock.svelte":()=>T(()=>import("../chunks/unblock-44cb6cae.js"),["_app/immutable/chunks/unblock-44cb6cae.js","_app/immutable/assets/unblock-2d3d7bec.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-44ec13db.js","_app/immutable/assets/Rolling-2d2c9fb9.css"])}),`../lib/popups/${l[3].key}.svelte`),r),{c(){r.block.c(),s=N(),t=b("div"),this.h()},l(i){r.block.l(i),s=S(i),t=g(i,"DIV",{class:!0}),E(t).forEach(f),this.h()},h(){_(t,"class","popup-blur svelte-1p50pmi")},m(i,o){r.block.m(i,r.anchor=o),r.mount=()=>s.parentNode,r.anchor=s,V(i,s,o),V(i,t,o),c=!0},p(i,o){l=i,r.ctx=l,o&8&&e!==(e=be(Object.assign({"../lib/popups/snippet-delete.svelte":()=>T(()=>import("../chunks/snippet-delete-4134d541.js"),["_app/immutable/chunks/snippet-delete-4134d541.js","_app/immutable/assets/snippet-delete-2d3d7bec.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-44ec13db.js","_app/immutable/assets/Rolling-2d2c9fb9.css"]),"../lib/popups/snippet-new.svelte":()=>T(()=>import("../chunks/snippet-new-fb212cb0.js"),["_app/immutable/chunks/snippet-new-fb212cb0.js","_app/immutable/assets/snippet-new-3342ba39.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-44ec13db.js","_app/immutable/assets/Rolling-2d2c9fb9.css","_app/immutable/chunks/Popup-bd678b0b.js","_app/immutable/chunks/index-32c9bc07.js"]),"../lib/popups/snippet.svelte":()=>T(()=>import("../chunks/snippet-2c8e79a0.js"),["_app/immutable/chunks/snippet-2c8e79a0.js","_app/immutable/assets/snippet-4ee3df07.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-44ec13db.js","_app/immutable/assets/Rolling-2d2c9fb9.css","_app/immutable/chunks/Popup-bd678b0b.js","_app/immutable/chunks/index-32c9bc07.js"]),"../lib/popups/unblock.svelte":()=>T(()=>import("../chunks/unblock-44cb6cae.js"),["_app/immutable/chunks/unblock-44cb6cae.js","_app/immutable/assets/unblock-2d3d7bec.css","_app/immutable/chunks/index-dd217174.js","_app/immutable/chunks/Rolling-44ec13db.js","_app/immutable/assets/Rolling-2d2c9fb9.css"])}),`../lib/popups/${l[3].key}.svelte`))&&me(e,r)||Be(r,l,o)},i(i){c||(I(r.block),je(()=>{a||(a=de(t,he,{duration:200},!0)),a.run(1)}),c=!0)},o(i){for(let o=0;o<3;o+=1){const p=r.blocks[o];A(p)}a||(a=de(t,he,{duration:200},!1)),a.run(0),c=!1},d(i){r.block.d(i),r.token=null,r=null,i&&f(s),i&&f(t),i&&a&&a.end()}}}function Ze(l){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function ze(l){let e,s,t,a,c,r,i;var o=l[10].default;function p(n){return{props:{value:n[3].value,close:n[8]}}}return o&&(t=new o(p(l))),{c(){e=b("div"),s=b("div"),t&&j(t.$$.fragment),this.h()},l(n){e=g(n,"DIV",{class:!0});var u=E(e);s=g(u,"DIV",{class:!0});var m=E(s);t&&te(t.$$.fragment,m),m.forEach(f),u.forEach(f),this.h()},h(){_(s,"class","content"),_(e,"class","popup svelte-1p50pmi")},m(n,u){V(n,e,u),v(e,s),t&&H(t,s,null),c=!0,r||(i=[Pe(Oe.call(null,e)),ee(e,"click_outside",l[9])],r=!0)},p(n,u){const m={};if(u&8&&(m.value=n[3].value),u&24&&(m.close=n[8]),o!==(o=n[10].default)){if(t){x();const d=t;A(d.$$.fragment,1,0,()=>{J(d,1)}),z()}o?(t=new o(p(n)),j(t.$$.fragment),I(t.$$.fragment,1),H(t,s,null)):t=null}else o&&t.$set(m)},i(n){c||(t&&I(t.$$.fragment,n),a&&a.end(1),c=!0)},o(n){t&&A(t.$$.fragment,n),a=Ae(e,Ne,{y:50,duration:150}),c=!1},d(n){n&&f(e),t&&J(t),n&&a&&a.end(),r=!1,Ve(i)}}}function xe(l){let e,s,t,a,c,r;return s=new we({props:{style:"transform: scale(.2);"}}),{c(){e=b("div"),j(s.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var o=E(e);te(s.$$.fragment,o),o.forEach(f),this.h()},h(){_(e,"class","popup invisible svelte-1p50pmi")},m(i,o){V(i,e,o),H(s,e,null),a=!0,c||(r=[Pe(Oe.call(null,e)),ee(e,"click_outside",l[7])],c=!0)},p:w,i(i){a||(I(s.$$.fragment,i),t&&t.end(1),a=!0)},o(i){A(s.$$.fragment,i),t=Ae(e,Ne,{y:50,duration:150}),a=!1},d(i){i&&f(e),J(s),i&&t&&t.end(),c=!1,Ve(r)}}}function De(l){let e,s;return e=new We({props:{userData:l[0]}}),{c(){j(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,a){H(e,t,a),s=!0},p(t,a){const c={};a&1&&(c.userData=t[0]),e.$set(c)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){J(e,t)}}}function et(l){var n;let e,s,t,a,c,r;document.title=e="FyFu Modmail "+((n=l[2].url)!=null&&n.pathname.split("/")[1]?`| ${l[2].url.pathname.split("/")[1][0].toUpperCase()}${l[2].url.pathname.split("/")[1].slice(1)}`:"");const i=[Ye,Xe],o=[];function p(u,m){return u[1]?0:1}return t=p(l),a=o[t]=i[t](l),{c(){s=N(),a.c(),c=fe()},l(u){Le('[data-svelte="svelte-nobfek"]',document.head).forEach(f),s=S(u),a.l(u),c=fe()},m(u,m){V(u,s,m),o[t].m(u,m),V(u,c,m),r=!0},p(u,[m]){var q;(!r||m&4)&&e!==(e="FyFu Modmail "+((q=u[2].url)!=null&&q.pathname.split("/")[1]?`| ${u[2].url.pathname.split("/")[1][0].toUpperCase()}${u[2].url.pathname.split("/")[1].slice(1)}`:""))&&(document.title=e);let d=t;t=p(u),t===d?o[t].p(u,m):(x(),A(o[d],1,1,()=>{o[d]=null}),z(),a=o[t],a?a.p(u,m):(a=o[t]=i[t](u),a.c()),I(a,1),a.m(c.parentNode,c))},i(u){r||(I(a),r=!0)},o(u){A(a),r=!1},d(u){u&&f(s),o[t].d(u),u&&f(c)}}}async function ct({session:l,url:e}){return!(l!=null&&l.userData)&&e.pathname!=="/login"?{status:307,redirect:"/login"}:(l==null?void 0:l.userData)&&(e.pathname==="/login"||e.pathname==="/")?{status:307,redirect:"/tickets"}:{status:200,props:l||{}}}function tt(l,e,s){let t,a,c;Y(l,Se,d=>s(2,t=d)),Y(l,X,d=>s(3,a=d)),Y(l,ve,d=>s(4,c=d));let{$$slots:r={},$$scope:i}=e,{userData:o}=e,p;Me(()=>s(1,p=!0));const n=()=>W(X,a={key:null,value:null},a),u=d=>{d&&W(ve,c=c+1,c),W(X,a={key:null,value:null},a)},m=()=>W(X,a={key:null,value:null},a);return l.$$set=d=>{"userData"in d&&s(0,o=d.userData),"$$scope"in d&&s(5,i=d.$$scope)},[o,p,t,a,c,i,r,n,u,m]}class pt extends ye{constructor(e){super(),Ie(this,e,tt,et,qe,{userData:0})}}export{pt as default,ct as load};
>>>>>>> cfe3d57d7ff2894a22f422988fe520aad1b8482c:dashboard/build/client/_app/immutable/pages/__layout.svelte-73f72848.js
