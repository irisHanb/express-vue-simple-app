(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["greeting"],{bb51:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("div",{staticClass:"header"},[o("h2"),t.user?o("span",[t._v(t._s(t.user.id)+" 님 반갑습니다.")]):t._e(),o("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.onLogout(e)}}},[t._v("logout")])]),o("nav",[o("router-link",{attrs:{to:"/todos"}},[t._v("todos")]),o("router-link",{attrs:{to:"/memos"}},[t._v("memos")])],1),o("div",{staticClass:"view"},[o("router-view")],1)])},s=[],r=o("cebc"),u=o("cd94"),i=o("2f62"),a={components:{Menus:u["a"]},created:function(){},computed:Object(r["a"])({},Object(i["b"])(["user"])),methods:{onLogout:function(){var t=this;this.$store.dispatch("logout").then(function(e){t.$router.push({name:"register"})})}}},c=a,d=o("2877"),l=Object(d["a"])(c,n,s,!1,null,"77b6348f",null);e["default"]=l.exports}}]);
//# sourceMappingURL=greeting.7f996ff4.js.map