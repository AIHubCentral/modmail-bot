import{S as Z,i as $,s as z,l as b,r as U,a as I,m as g,n as k,u as B,h as d,c as O,p as m,b as K,H as u,a0 as V,I as N,a1 as G,g as L,t as R,d as Q,f as j,Z as W,K as X,E as q,w as Y,x as ee,y as te,B as ne,M as se}from"./index-dd217174.js";import{R as ae}from"./Rolling-b09130bd.js";import{p as J}from"./Popup-bd678b0b.js";import"./index-32c9bc07.js";function le(r){let e;return{c(){e=U("Erstellen")},l(t){e=B(t,"Erstellen")},m(t,n){K(t,e,n)},i:q,o:q,d(t){t&&d(e)}}}function re(r){let e,t;return e=new ae({props:{scaleFactor:"0.12"}}),{c(){Y(e.$$.fragment)},l(n){ee(e.$$.fragment,n)},m(n,p){te(e,n,p),t=!0},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function oe(r){let e,t,n,p,o,a,w,_,f,s,c,S,h,x,E,D,A;const C=[re,le],v=[];function F(l,i){return l[2]==="save"?0:1}return s=F(r),c=v[s]=C[s](r),{c(){e=b("div"),t=b("h2"),n=U("Snippet erstellen"),p=I(),o=b("form"),a=b("input"),w=I(),_=b("div"),f=b("button"),c.c(),S=I(),h=b("button"),x=U("Abbrechen"),this.h()},l(l){e=g(l,"DIV",{class:!0});var i=k(e);t=g(i,"H2",{});var y=k(t);n=B(y,"Snippet erstellen"),y.forEach(d),p=O(i),o=g(i,"FORM",{});var H=k(o);a=g(H,"INPUT",{class:!0,type:!0,placeholder:!0,maxlength:!0}),H.forEach(d),w=O(i),_=g(i,"DIV",{class:!0});var T=k(_);f=g(T,"BUTTON",{class:!0});var M=k(f);c.l(M),M.forEach(d),S=O(T),h=g(T,"BUTTON",{class:!0});var P=k(h);x=B(P,"Abbrechen"),P.forEach(d),T.forEach(d),i.forEach(d),this.h()},h(){m(a,"class","new-name svelte-6vbnsw"),m(a,"type","text"),m(a,"placeholder","Name"),m(a,"maxlength","128"),m(f,"class","ja svelte-6vbnsw"),m(h,"class","nein svelte-6vbnsw"),m(_,"class","buttons svelte-6vbnsw"),m(e,"class","wrapper svelte-6vbnsw")},m(l,i){K(l,e,i),u(e,t),u(t,n),u(e,p),u(e,o),u(o,a),V(a,r[1]),u(e,w),u(e,_),u(_,f),v[s].m(f,null),u(_,S),u(_,h),u(h,x),E=!0,D||(A=[N(a,"input",r[4]),N(o,"submit",G(r[3])),N(f,"click",r[3]),N(h,"click",r[5])],D=!0)},p(l,[i]){i&2&&a.value!==l[1]&&V(a,l[1]);let y=s;s=F(l),s!==y&&(L(),R(v[y],1,1,()=>{v[y]=null}),Q(),c=v[s],c||(c=v[s]=C[s](l),c.c()),j(c,1),c.m(f,null))},i(l){E||(j(c),E=!0)},o(l){R(c),E=!1},d(l){l&&d(e),v[s].d(),D=!1,W(A)}}}function ce(r,e,t){let n;X(r,J,s=>t(6,n=s));let{close:p}=e,o="",a=!1;async function w(){if(!o)return;t(2,a="save"),(await fetch("/api/v1/snippets",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,content:"Text nicht festgelegt"})})).status===204?se(J,n={key:"snippet",value:{name:o,content:""}},n):p()}function _(){o=this.value,t(1,o)}const f=async()=>{p()};return r.$$set=s=>{"close"in s&&t(0,p=s.close)},[p,o,a,w,_,f]}class fe extends Z{constructor(e){super(),$(this,e,ce,oe,z,{close:0})}}export{fe as default};
