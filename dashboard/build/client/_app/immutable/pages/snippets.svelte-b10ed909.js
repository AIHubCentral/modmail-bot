<<<<<<< HEAD:dashboard/build/client/_app/immutable/pages/snippets.svelte-175e61c2.js
import{S as de,i as ve,s as be,l as g,r as J,a as B,m as k,n as E,u as Z,h as d,c as O,p as _,G as C,b as N,H as b,a0 as se,I as q,a1 as L,t as F,d as ge,f as H,Z as ke,K as le,o as we,g as ye,M as ne,w as he,x as _e,y as pe,E as z,B as me,J as A,q as j}from"../chunks/index-dd217174.js";import{R as Ee}from"../chunks/Rolling-71ab3f52.js";import{I as Ie}from"../chunks/InfiniteScroll-48a8f2e2.js";import{p as R,u as Se}from"../chunks/Popup-bd678b0b.js";import"../chunks/index-32c9bc07.js";function ie(a,e,n){const t=a.slice();return t[14]=e[n],t}function ae(a,e,n){const t=a.slice();return t[17]=e[n],t}function re(a,e,n){const t=a.slice();return t[17]=e[n],t}function De(a){let e,n,t;return n=new Ee({props:{style:"transform: scale(.2);"}}),{c(){e=g("div"),he(n.$$.fragment),this.h()},l(i){e=k(i,"DIV",{class:!0});var f=E(e);_e(n.$$.fragment,f),f.forEach(d),this.h()},h(){_(e,"class","loading svelte-1b09m5s")},m(i,f){N(i,e,f),pe(n,e,null),t=!0},p:z,i(i){t||(H(n.$$.fragment,i),t=!0)},o(i){F(n.$$.fragment,i),t=!1},d(i){i&&d(e),me(n)}}}function Me(a){let e,n,t,i,f,p=a[3],o=[];for(let s=0;s<p.length;s+=1)o[s]=oe(re(a,p,s));let v=a[1],h=[];for(let s=0;s<v.length;s+=1)h[s]=fe(ie(a,v,s));let r=null;return v.length||(r=ce()),i=new Ie({}),i.$on("loadMore",a[13]),{c(){e=g("div");for(let s=0;s<o.length;s+=1)o[s].c();n=B();for(let s=0;s<h.length;s+=1)h[s].c();r&&r.c(),t=B(),he(i.$$.fragment),this.h()},l(s){e=k(s,"DIV",{class:!0});var c=E(e);for(let l=0;l<o.length;l+=1)o[l].l(c);c.forEach(d),n=O(s);for(let l=0;l<h.length;l+=1)h[l].l(s);r&&r.l(s),t=O(s),_e(i.$$.fragment,s),this.h()},h(){_(e,"class","ticket columns-template svelte-1b09m5s")},m(s,c){N(s,e,c);for(let l=0;l<o.length;l+=1)o[l].m(e,null);N(s,n,c);for(let l=0;l<h.length;l+=1)h[l].m(s,c);r&&r.m(s,c),N(s,t,c),pe(i,s,c),f=!0},p(s,c){if(c&8){p=s[3];let l;for(l=0;l<p.length;l+=1){const u=re(s,p,l);o[l]?o[l].p(u,c):(o[l]=oe(u),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=p.length}if(c&14){v=s[1];let l;for(l=0;l<v.length;l+=1){const u=ie(s,v,l);h[l]?h[l].p(u,c):(h[l]=fe(u),h[l].c(),h[l].m(t.parentNode,t))}for(;l<h.length;l+=1)h[l].d(1);h.length=v.length,!v.length&&r?r.p(s,c):v.length?r&&(r.d(1),r=null):(r=ce(),r.c(),r.m(t.parentNode,t))}},i(s){f||(H(i.$$.fragment,s),f=!0)},o(s){F(i.$$.fragment,s),f=!1},d(s){s&&d(e),A(o,s),s&&d(n),A(h,s),r&&r.d(s),s&&d(t),me(i,s)}}}function oe(a){let e,n=a[17].label+"",t;return{c(){e=g("div"),t=J(n),this.h()},l(i){e=k(i,"DIV",{class:!0,style:!0});var f=E(e);t=Z(f,n),f.forEach(d),this.h()},h(){_(e,"class","column "+a[17].id+" svelte-1b09m5s"),j(e,"width",a[17].width+"%"),j(e,"min-width",a[17].minwidth+"px")},m(i,f){N(i,e,f),b(e,t)},p:z,d(i){i&&d(e)}}}function ce(a){let e,n;return{c(){e=g("div"),n=J("Keine Snippets gefunden"),this.h()},l(t){e=k(t,"DIV",{class:!0});var i=E(e);n=Z(i,"Keine Snippets gefunden"),i.forEach(d),this.h()},h(){_(e,"class","loading svelte-1b09m5s")},m(t,i){N(t,e,i),b(e,n)},p:z,d(t){t&&d(e)}}}function ue(a){let e,n=a[17].get(a[14])+"";return{c(){e=g("div"),this.h()},l(t){e=k(t,"DIV",{class:!0,style:!0});var i=E(e);i.forEach(d),this.h()},h(){_(e,"class","column "+a[17].id+" svelte-1b09m5s"),j(e,"width",a[17].width+"%"),j(e,"min-width",a[17].minwidth+"px")},m(t,i){N(t,e,i),e.innerHTML=n},p(t,i){i&2&&n!==(n=t[17].get(t[14])+"")&&(e.innerHTML=n)},d(t){t&&d(e)}}}function fe(a){let e,n,t,i,f,p,o,v,h=a[3],r=[];for(let c=0;c<h.length;c+=1)r[c]=ue(ae(a,h,c));function s(){return a[12](a[14])}return{c(){e=g("button");for(let c=0;c<r.length;c+=1)r[c].c();n=B(),t=g("div"),i=g("button"),f=g("img"),this.h()},l(c){e=k(c,"BUTTON",{class:!0});var l=E(e);for(let V=0;V<r.length;V+=1)r[V].l(l);n=O(l),t=k(l,"DIV",{class:!0,style:!0});var u=E(t);i=k(u,"BUTTON",{class:!0});var y=E(i);f=k(y,"IMG",{src:!0,alt:!0,class:!0}),y.forEach(d),u.forEach(d),l.forEach(d),this.h()},h(){C(f.src,p="/assets/icons/pen.svg")||_(f,"src",p),_(f,"alt","edit"),_(f,"class","svelte-1b09m5s"),_(i,"class","svelte-1b09m5s"),_(t,"class","column last svelte-1b09m5s"),j(t,"margin-left","auto"),j(t,"min-width","30px"),_(e,"class","ticket svelte-1b09m5s")},m(c,l){N(c,e,l);for(let u=0;u<r.length;u+=1)r[u].m(e,null);b(e,n),b(e,t),b(t,i),b(i,f),o||(v=q(i,"click",L(s)),o=!0)},p(c,l){if(a=c,l&10){h=a[3];let u;for(u=0;u<h.length;u+=1){const y=ae(a,h,u);r[u]?r[u].p(y,l):(r[u]=ue(y),r[u].c(),r[u].m(e,n))}for(;u<r.length;u+=1)r[u].d(1);r.length=h.length}},d(c){c&&d(e),A(r,c),o=!1,v()}}}function Te(a){let e,n,t,i,f,p,o,v,h,r,s,c,l,u,y,V,m,M,T,S,D,G,K,Q;const W=[Me,De],$=[];function X(w,I){return w[1]?0:1}return S=X(a),D=$[S]=W[S](a),{c(){e=g("div"),n=g("div"),t=g("span"),i=J("Snippets"),f=B(),p=g("form"),o=g("input"),h=B(),r=g("button"),s=g("img"),l=B(),u=g("button"),y=g("img"),M=B(),T=g("div"),D.c(),this.h()},l(w){e=k(w,"DIV",{class:!0});var I=E(e);n=k(I,"DIV",{class:!0});var U=E(n);t=k(U,"SPAN",{class:!0});var Y=E(t);i=Z(Y,"Snippets"),Y.forEach(d),f=O(U),p=k(U,"FORM",{class:!0});var P=E(p);o=k(P,"INPUT",{type:!0,placeholder:!0,class:!0}),h=O(P),r=k(P,"BUTTON",{type:!0,class:!0});var x=E(r);s=k(x,"IMG",{src:!0,alt:!0,class:!0}),x.forEach(d),l=O(P),u=k(P,"BUTTON",{class:!0});var ee=E(u);y=k(ee,"IMG",{src:!0,alt:!0,class:!0}),ee.forEach(d),P.forEach(d),U.forEach(d),M=O(I),T=k(I,"DIV",{class:!0});var te=E(T);D.l(te),te.forEach(d),I.forEach(d),this.h()},h(){_(t,"class","svelte-1b09m5s"),_(o,"type","text"),_(o,"placeholder","Snippet name / content"),o.disabled=v=!a[1],_(o,"class","svelte-1b09m5s"),C(s.src,c="/assets/icons/search-thin.svg")||_(s,"src",c),_(s,"alt","search"),_(s,"class","svelte-1b09m5s"),_(r,"type","submit"),_(r,"class","svelte-1b09m5s"),C(y.src,V="/assets/icons/plus.svg")||_(y,"src",V),_(y,"alt","new"),_(y,"class","svelte-1b09m5s"),_(u,"class","add svelte-1b09m5s"),_(p,"class",m="search "+(a[1]?"":"disabled")+" svelte-1b09m5s"),_(n,"class","header svelte-1b09m5s"),_(T,"class","tickets svelte-1b09m5s"),_(e,"class","container svelte-1b09m5s")},m(w,I){N(w,e,I),b(e,n),b(n,t),b(t,i),b(n,f),b(n,p),b(p,o),se(o,a[0]),b(p,h),b(p,r),b(r,s),b(p,l),b(p,u),b(u,y),b(e,M),b(e,T),$[S].m(T,null),G=!0,K||(Q=[q(o,"input",a[9]),q(u,"click",L(a[10])),q(p,"submit",L(a[11]))],K=!0)},p(w,[I]){(!G||I&2&&v!==(v=!w[1]))&&(o.disabled=v),I&1&&o.value!==w[0]&&se(o,w[0]),(!G||I&2&&m!==(m="search "+(w[1]?"":"disabled")+" svelte-1b09m5s"))&&_(p,"class",m);let U=S;S=X(w),S===U?$[S].p(w,I):(ye(),F($[U],1,1,()=>{$[U]=null}),ge(),D=$[S],D?D.p(w,I):(D=$[S]=W[S](w),D.c()),H(D,1),D.m(T,null))},i(w){G||(H(D),G=!0)},o(w){F(D),G=!1},d(w){w&&d(e),$[S].d(),K=!1,ke(Q)}}}function Ne(a,e,n){let t,i;le(a,Se,m=>n(8,t=m)),le(a,R,m=>n(2,i=m));let f,p=[{id:"name",label:"Name",get:m=>m.name,width:20,minwidth:120},{id:"content",label:"Content",get:m=>m.content,width:60,minwidth:170}];we(async()=>{let m=await fetch("/api/v1/snippets");m.status===200&&n(1,f=await m.json())});let o="",v=!0;async function h(){n(1,f=[]);let m=o?`phrase=${o}`:"",M=await fetch(`/api/v1/snippets${m?`?${m} `:""}`);M.status===200&&n(1,f=await M.json())}async function r(){start=limit,limit+=50;let m=o?`phrase=${o}`:"",M=await fetch(`/api/v1/snippets?start=${start}&limit=${limit}${m?`&${m} `:""}`);if(M.status===200){let T=await M.json();n(1,f=[...f,...T])}}let s=t;function c(){o=this.value,n(0,o)}const l=()=>{ne(R,i={key:"snippet-new"},i)},u=()=>h(),y=m=>ne(R,i={key:"snippet",value:{name:m.name,content:m.content}},i),V=()=>r();return a.$$.update=()=>{a.$$.dirty&65&&o&&v&&n(6,v=!1),a.$$.dirty&65&&!o&&!v&&(n(6,v=!0),h()),a.$$.dirty&384&&t!==s&&(n(7,s=t),h())},[o,f,i,p,h,r,v,s,t,c,l,u,y,V]}class Ge extends de{constructor(e){super(),ve(this,e,Ne,Te,be,{})}}export{Ge as default};
=======
import{S as de,i as ve,s as be,l as g,r as J,a as B,m as k,n as E,u as Z,h as d,c as O,p as _,G as C,b as N,H as b,a0 as se,I as q,a1 as L,t as F,d as ge,f as H,Z as ke,K as le,o as we,g as ye,M as ne,w as he,x as _e,y as pe,E as z,B as me,J as A,q as j}from"../chunks/index-dd217174.js";import{R as Ee}from"../chunks/Rolling-44ec13db.js";import{I as Ie}from"../chunks/InfiniteScroll-48a8f2e2.js";import{p as R,u as Se}from"../chunks/Popup-bd678b0b.js";import"../chunks/index-32c9bc07.js";function ie(a,e,n){const t=a.slice();return t[14]=e[n],t}function ae(a,e,n){const t=a.slice();return t[17]=e[n],t}function re(a,e,n){const t=a.slice();return t[17]=e[n],t}function De(a){let e,n,t;return n=new Ee({props:{style:"transform: scale(.2);"}}),{c(){e=g("div"),he(n.$$.fragment),this.h()},l(i){e=k(i,"DIV",{class:!0});var f=E(e);_e(n.$$.fragment,f),f.forEach(d),this.h()},h(){_(e,"class","loading svelte-1b09m5s")},m(i,f){N(i,e,f),pe(n,e,null),t=!0},p:z,i(i){t||(H(n.$$.fragment,i),t=!0)},o(i){F(n.$$.fragment,i),t=!1},d(i){i&&d(e),me(n)}}}function Me(a){let e,n,t,i,f,p=a[3],o=[];for(let s=0;s<p.length;s+=1)o[s]=oe(re(a,p,s));let v=a[1],h=[];for(let s=0;s<v.length;s+=1)h[s]=fe(ie(a,v,s));let r=null;return v.length||(r=ce()),i=new Ie({}),i.$on("loadMore",a[13]),{c(){e=g("div");for(let s=0;s<o.length;s+=1)o[s].c();n=B();for(let s=0;s<h.length;s+=1)h[s].c();r&&r.c(),t=B(),he(i.$$.fragment),this.h()},l(s){e=k(s,"DIV",{class:!0});var c=E(e);for(let l=0;l<o.length;l+=1)o[l].l(c);c.forEach(d),n=O(s);for(let l=0;l<h.length;l+=1)h[l].l(s);r&&r.l(s),t=O(s),_e(i.$$.fragment,s),this.h()},h(){_(e,"class","ticket columns-template svelte-1b09m5s")},m(s,c){N(s,e,c);for(let l=0;l<o.length;l+=1)o[l].m(e,null);N(s,n,c);for(let l=0;l<h.length;l+=1)h[l].m(s,c);r&&r.m(s,c),N(s,t,c),pe(i,s,c),f=!0},p(s,c){if(c&8){p=s[3];let l;for(l=0;l<p.length;l+=1){const u=re(s,p,l);o[l]?o[l].p(u,c):(o[l]=oe(u),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=p.length}if(c&14){v=s[1];let l;for(l=0;l<v.length;l+=1){const u=ie(s,v,l);h[l]?h[l].p(u,c):(h[l]=fe(u),h[l].c(),h[l].m(t.parentNode,t))}for(;l<h.length;l+=1)h[l].d(1);h.length=v.length,!v.length&&r?r.p(s,c):v.length?r&&(r.d(1),r=null):(r=ce(),r.c(),r.m(t.parentNode,t))}},i(s){f||(H(i.$$.fragment,s),f=!0)},o(s){F(i.$$.fragment,s),f=!1},d(s){s&&d(e),A(o,s),s&&d(n),A(h,s),r&&r.d(s),s&&d(t),me(i,s)}}}function oe(a){let e,n=a[17].label+"",t;return{c(){e=g("div"),t=J(n),this.h()},l(i){e=k(i,"DIV",{class:!0,style:!0});var f=E(e);t=Z(f,n),f.forEach(d),this.h()},h(){_(e,"class","column "+a[17].id+" svelte-1b09m5s"),j(e,"width",a[17].width+"%"),j(e,"min-width",a[17].minwidth+"px")},m(i,f){N(i,e,f),b(e,t)},p:z,d(i){i&&d(e)}}}function ce(a){let e,n;return{c(){e=g("div"),n=J("Keine Snippets gefunden"),this.h()},l(t){e=k(t,"DIV",{class:!0});var i=E(e);n=Z(i,"Keine Snippets gefunden"),i.forEach(d),this.h()},h(){_(e,"class","loading svelte-1b09m5s")},m(t,i){N(t,e,i),b(e,n)},p:z,d(t){t&&d(e)}}}function ue(a){let e,n=a[17].get(a[14])+"";return{c(){e=g("div"),this.h()},l(t){e=k(t,"DIV",{class:!0,style:!0});var i=E(e);i.forEach(d),this.h()},h(){_(e,"class","column "+a[17].id+" svelte-1b09m5s"),j(e,"width",a[17].width+"%"),j(e,"min-width",a[17].minwidth+"px")},m(t,i){N(t,e,i),e.innerHTML=n},p(t,i){i&2&&n!==(n=t[17].get(t[14])+"")&&(e.innerHTML=n)},d(t){t&&d(e)}}}function fe(a){let e,n,t,i,f,p,o,v,h=a[3],r=[];for(let c=0;c<h.length;c+=1)r[c]=ue(ae(a,h,c));function s(){return a[12](a[14])}return{c(){e=g("button");for(let c=0;c<r.length;c+=1)r[c].c();n=B(),t=g("div"),i=g("button"),f=g("img"),this.h()},l(c){e=k(c,"BUTTON",{class:!0});var l=E(e);for(let V=0;V<r.length;V+=1)r[V].l(l);n=O(l),t=k(l,"DIV",{class:!0,style:!0});var u=E(t);i=k(u,"BUTTON",{class:!0});var y=E(i);f=k(y,"IMG",{src:!0,alt:!0,class:!0}),y.forEach(d),u.forEach(d),l.forEach(d),this.h()},h(){C(f.src,p="/assets/icons/pen.svg")||_(f,"src",p),_(f,"alt","edit"),_(f,"class","svelte-1b09m5s"),_(i,"class","svelte-1b09m5s"),_(t,"class","column last svelte-1b09m5s"),j(t,"margin-left","auto"),j(t,"min-width","30px"),_(e,"class","ticket svelte-1b09m5s")},m(c,l){N(c,e,l);for(let u=0;u<r.length;u+=1)r[u].m(e,null);b(e,n),b(e,t),b(t,i),b(i,f),o||(v=q(i,"click",L(s)),o=!0)},p(c,l){if(a=c,l&10){h=a[3];let u;for(u=0;u<h.length;u+=1){const y=ae(a,h,u);r[u]?r[u].p(y,l):(r[u]=ue(y),r[u].c(),r[u].m(e,n))}for(;u<r.length;u+=1)r[u].d(1);r.length=h.length}},d(c){c&&d(e),A(r,c),o=!1,v()}}}function Te(a){let e,n,t,i,f,p,o,v,h,r,s,c,l,u,y,V,m,M,T,S,D,G,K,Q;const W=[Me,De],$=[];function X(w,I){return w[1]?0:1}return S=X(a),D=$[S]=W[S](a),{c(){e=g("div"),n=g("div"),t=g("span"),i=J("Snippets"),f=B(),p=g("form"),o=g("input"),h=B(),r=g("button"),s=g("img"),l=B(),u=g("button"),y=g("img"),M=B(),T=g("div"),D.c(),this.h()},l(w){e=k(w,"DIV",{class:!0});var I=E(e);n=k(I,"DIV",{class:!0});var U=E(n);t=k(U,"SPAN",{class:!0});var Y=E(t);i=Z(Y,"Snippets"),Y.forEach(d),f=O(U),p=k(U,"FORM",{class:!0});var P=E(p);o=k(P,"INPUT",{type:!0,placeholder:!0,class:!0}),h=O(P),r=k(P,"BUTTON",{type:!0,class:!0});var x=E(r);s=k(x,"IMG",{src:!0,alt:!0,class:!0}),x.forEach(d),l=O(P),u=k(P,"BUTTON",{class:!0});var ee=E(u);y=k(ee,"IMG",{src:!0,alt:!0,class:!0}),ee.forEach(d),P.forEach(d),U.forEach(d),M=O(I),T=k(I,"DIV",{class:!0});var te=E(T);D.l(te),te.forEach(d),I.forEach(d),this.h()},h(){_(t,"class","svelte-1b09m5s"),_(o,"type","text"),_(o,"placeholder","Snippet name / content"),o.disabled=v=!a[1],_(o,"class","svelte-1b09m5s"),C(s.src,c="/assets/icons/search-thin.svg")||_(s,"src",c),_(s,"alt","search"),_(s,"class","svelte-1b09m5s"),_(r,"type","submit"),_(r,"class","svelte-1b09m5s"),C(y.src,V="/assets/icons/plus.svg")||_(y,"src",V),_(y,"alt","new"),_(y,"class","svelte-1b09m5s"),_(u,"class","add svelte-1b09m5s"),_(p,"class",m="search "+(a[1]?"":"disabled")+" svelte-1b09m5s"),_(n,"class","header svelte-1b09m5s"),_(T,"class","tickets svelte-1b09m5s"),_(e,"class","container svelte-1b09m5s")},m(w,I){N(w,e,I),b(e,n),b(n,t),b(t,i),b(n,f),b(n,p),b(p,o),se(o,a[0]),b(p,h),b(p,r),b(r,s),b(p,l),b(p,u),b(u,y),b(e,M),b(e,T),$[S].m(T,null),G=!0,K||(Q=[q(o,"input",a[9]),q(u,"click",L(a[10])),q(p,"submit",L(a[11]))],K=!0)},p(w,[I]){(!G||I&2&&v!==(v=!w[1]))&&(o.disabled=v),I&1&&o.value!==w[0]&&se(o,w[0]),(!G||I&2&&m!==(m="search "+(w[1]?"":"disabled")+" svelte-1b09m5s"))&&_(p,"class",m);let U=S;S=X(w),S===U?$[S].p(w,I):(ye(),F($[U],1,1,()=>{$[U]=null}),ge(),D=$[S],D?D.p(w,I):(D=$[S]=W[S](w),D.c()),H(D,1),D.m(T,null))},i(w){G||(H(D),G=!0)},o(w){F(D),G=!1},d(w){w&&d(e),$[S].d(),K=!1,ke(Q)}}}function Ne(a,e,n){let t,i;le(a,Se,m=>n(8,t=m)),le(a,R,m=>n(2,i=m));let f,p=[{id:"name",label:"Name",get:m=>m.name,width:20,minwidth:120},{id:"content",label:"Content",get:m=>m.content,width:60,minwidth:170}];we(async()=>{let m=await fetch("/api/v1/snippets");m.status===200&&n(1,f=await m.json())});let o="",v=!0;async function h(){n(1,f=[]);let m=o?`phrase=${o}`:"",M=await fetch(`/api/v1/snippets${m?`?${m} `:""}`);M.status===200&&n(1,f=await M.json())}async function r(){start=limit,limit+=50;let m=o?`phrase=${o}`:"",M=await fetch(`/api/v1/snippets?start=${start}&limit=${limit}${m?`&${m} `:""}`);if(M.status===200){let T=await M.json();n(1,f=[...f,...T])}}let s=t;function c(){o=this.value,n(0,o)}const l=()=>{ne(R,i={key:"snippet-new"},i)},u=()=>h(),y=m=>ne(R,i={key:"snippet",value:{name:m.name,content:m.content}},i),V=()=>r();return a.$$.update=()=>{a.$$.dirty&65&&o&&v&&n(6,v=!1),a.$$.dirty&65&&!o&&!v&&(n(6,v=!0),h()),a.$$.dirty&384&&t!==s&&(n(7,s=t),h())},[o,f,i,p,h,r,v,s,t,c,l,u,y,V]}class Ge extends de{constructor(e){super(),ve(this,e,Ne,Te,be,{})}}export{Ge as default};
>>>>>>> cfe3d57d7ff2894a22f422988fe520aad1b8482c:dashboard/build/client/_app/immutable/pages/snippets.svelte-b10ed909.js
