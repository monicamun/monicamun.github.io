(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,m=[];u<s.length;u++)o=s[u],n[o]&&m.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"97381cf1"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,r){a=n[t]=[e,r]});e.push(a[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t),i=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,a[1](o)}n[t]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"4dd0":function(t,e,a){"use strict";var r=a("5678"),n=a.n(r);n.a},5678:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"container",attrs:{id:"main-container"}},[a("div",{staticClass:"row"},[t._m(1),a("div",{staticClass:"col col-lg-9"},[a("div",{staticClass:"container"},[t._m(2),a("div",{staticClass:"row",attrs:{id:"header"}},[a("div",{staticClass:"col"},[a("h2",[t._v("Monica Muñoz")]),a("div",{attrs:{id:"nav"}},[a("router-link",{staticClass:"router-link",attrs:{to:"/"}},[t._v("Home")]),t._v("|\n                "),a("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[t._v("About")]),t._v("|\n                "),a("router-link",{staticClass:"router-link",attrs:{to:"/projects"}},[t._v("Projects")])],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("transition",{attrs:{name:"router-anim","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutLeft"}},[a("router-view")],1)],1)])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{attrs:{id:"bg"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"col col-lg-3"},[r("div",{attrs:{id:"aside-information"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("img",{attrs:{id:"img-porfolio",src:a("806a"),alt:""}})])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"empty-content"}},[a("div",{staticClass:"col"},[t._v(" ")])])}],o=(a("ee44"),a("2877")),s={},c=Object(o["a"])(s,n,i,!1,null,"ad339d42",null),l=c.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v("Hola Mundo")])])}],p={name:"home",components:{}},f=p,v=Object(o["a"])(f,d,m,!1,null,null,null),h=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about "},[a("h1",[t._v("This is an about page")]),a("b-container",[a("b-row",[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Card Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("Go somewhere")])],1),a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Card Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("Go somewhere")])],1)],1),a("b-row",[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Card Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("Go somewhere")])],1),a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Card Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")]),a("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("Go somewhere")])],1)],1)],1)],1)},g=[],_={},w=_,y=(a("4dd0"),Object(o["a"])(w,b,g,!1,null,"6f734998",null)),C=y.exports;r["default"].use(u["a"]);var x=new u["a"]({routes:[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/projects",name:"projects",component:C}]}),k=a("5f5b");a("f9e3"),a("2dd8");r["default"].use(k["a"]),r["default"].config.productionTip=!1,new r["default"]({router:x,render:function(t){return t(l)}}).$mount("#app")},"806a":function(t,e,a){t.exports=a.p+"img/logotipo_tinto.e64db817.png"},d0ba:function(t,e,a){},ee44:function(t,e,a){"use strict";var r=a("d0ba"),n=a.n(r);n.a}});
//# sourceMappingURL=app.2447e554.js.map