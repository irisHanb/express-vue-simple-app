(function(e){function t(t){for(var o,r,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)r=u[l],a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);m&&m(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({about:"about",movieDetail:"movieDetail",movieList:"movieList"}[e]||e)+"."+{about:"856c2879",movieDetail:"0fefe27e",movieList:"1936a1d1"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={movieList:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({about:"about",movieDetail:"movieDetail",movieList:"movieList"}[e]||e)+"."+{about:"31d6cfe0",movieDetail:"31d6cfe0",movieList:"adb8bf03"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"30b7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Menus"),n("router-view")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e.isAuthenticated?n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.onClickLogout(t)}}},[e._v("Logout")]):n("router-link",{attrs:{to:"/login"}},[e._v("Login")]),n("router-link",{attrs:{to:"/me"}},[e._v("Me")])],1)},u=[],c=n("2f62"),s=n("bc3a"),l=n.n(s);o["a"].use(c["a"]);var f=function(){var e=localStorage,t=e.accessToken;t&&(l.a.defaults.headers.common["Authorization"]="Bearer ".concat(t))};f();var m=new c["a"].Store({state:{accessToken:null},getters:{},mutations:{LOGIN:function(e,t){var n=t.accessToken;e.accessToken=n,localStorage.accessToken=n},LOGOUT:function(e){e.accessToken=null}},actions:{LOGIN:function(e,t){var n=e.commit,o=t.email,r=t.password;return l.a.post("/login",{email:o,password:r}).then(function(e){var t=e.data;n("LOGIN",t),l.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.accessToken)})},LOGOUT:function(e){var t=e.commit;t("LOGOUT")}}}),p={computed:{isAuthenticated:function(){return m.getters.isAuthenticated}},methods:{onClickLogout:function(){var e=this;m.dispatch("LOGOUT").then(function(){return e.$router.push("/")})}}},d=p,v=(n("a181"),n("2877")),h=Object(v["a"])(d,i,u,!1,null,null,null),b=h.exports,g={components:{Menus:b}},y=g,L=(n("5c0b"),Object(v["a"])(y,r,a,!1,null,null,null)),O=L.exports,k=n("8c4f");n("baab");o["a"].use(k["a"]);var w=function(e,t,n){var o=!1;if(o)return n();n("/login?returnPath=me")},T=new k["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return n.e("about").then(n.bind(null,"57da"))}},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"578a"))}},{path:"/me",name:"me",beforeEnter:w(),component:function(){return n.e("about").then(n.bind(null,"1a31"))}},{path:"/users",name:"users",component:function(){return n.e("movieList").then(n.bind(null,"7088"))}},{path:"/movie",name:"movieList",component:function(){return n.e("movieList").then(n.bind(null,"a442"))}},{path:"/movie/:id",name:"movieDetail",component:function(){return n.e("movieDetail").then(n.bind(null,"1adb"))}}]});o["a"].config.productionTip=!1,o["a"].prototype.$http=l.a,new o["a"]({router:T,store:m,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},a181:function(e,t,n){"use strict";var o=n("30b7"),r=n.n(o);r.a}});
//# sourceMappingURL=app.adeb5448.js.map