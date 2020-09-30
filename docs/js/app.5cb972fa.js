(function(e){function t(t){for(var n,i,u=t[0],s=t[1],c=t[2],d=0,v=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(v.length)v.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("vueweeter")]),n("div",{attrs:{id:"vueweet"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.vueweet,expression:"vueweet"}],class:{filled:e.vueweet},attrs:{type:"text",maxlength:"48",placeholder:"What do you have to say?"},domProps:{value:e.vueweet},on:{input:[function(t){t.target.composing||(e.vueweet=t.target.value)},e.trimVueweet]}}),n("img",{class:{disabled:!e.vueweet},attrs:{id:"send",src:r("71a2"),alt:"SEND"},on:{click:e.sendVueweet}})]),n("div",{attrs:{id:"limitIndicator"}},[e._v(e._s(e.vueweet.length)+" / 48")]),n("div",{attrs:{id:"vueweets"}},e._l(e.vueweets,(function(t){return n("div",{key:t.createdAt,staticClass:"vueweet"},[n("span",{staticClass:"content"},[e._v(e._s(t.content))]),n("span",{staticClass:"time"},[e._v(" "+e._s(e.distance(t.createdAt,Date.now()))+" ago ")])])})),0)])},a=[],i=r("0ff2"),u=r("1556"),s=r("59ca"),c=r.n(s);r("e71f");n["a"].use(i["a"]);const l=c.a.initializeApp({projectId:"vueweeter",databaseURL:"https://vueweeter.firebaseio.com"}).firestore();l.collection("posts");var d={name:"App",data:()=>({vueweet:"",vueweets:[]}),methods:{sendVueweet(){this.vueweet&&(l.collection("vueweets").add({createdAt:Date.now(),content:this.vueweet.trim()}),this.vueweet="")},trimVueweet(){this.vueweet=this.vueweet.replace("  "," ")},distance(e,t){return Object(u["a"])(e,t)}},firestore:{vueweets:l.collection("vueweets").orderBy("createdAt")}},v=d,p=(r("034f"),r("2877")),f=Object(p["a"])(v,o,a,!1,null,null,null),w=f.exports;n["a"].config.productionTip=!1,new n["a"]({render:e=>e(w)}).$mount("#app")},"71a2":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEklEQVRogdXZW6hUVRzH8TUer9jRtAwjy8qKDH2ppJKerKQbFt2oKAUhK7pgEHSxLApKhSiPKdVTN+kidH2sLIsgiiwCy65EZplWmnjMNPz0sPbAOnNm75k5M2fGfm9z1u///3/X3uus/d9rh/A/V6nTAPUIo0MIF4UQpocQNoYQXiiVSns7S1VD6MJZeAa79NU6DO80Y1XhJCzBz4o1L4QQhnYaOIQQcFgI4coQwtwQwik5tu0hhJ0hhMnZ7xPbgJYvjMTleBP/5lzlvXgFl2AEvkzGru4EdAln4knsKFgeH+IGjE9iZyTju8R/7LaBT8H9+L4A+lssxpScHCsS79PtgB6H67OrmaffsRKnI3dLx/DMW9aswYIehjlYg39yoPdk43PUuRXi4iT+JwxpJXQJp6IH2wqu9vu4DgcPoMarSZ6HWgV+JO7CVwXQG7EIRzdR51BxNyprajPQ3ZiHd7A/B3prdjdmKFjXDdS8Ocn9yUASdGE2nkdvDvTfeBEXYFiD+afhoILxj5M6tzSSeDqWYXPBEnkX8zG2Eegs/1CszvL8hlFVPFOTWvswoVbSibgNnxVAb8CdOKpR6Ar4lyryTq7iezgZf6MoYQkPyH+kb8GjOFmT6zoHvqeKrwubEs9lRUnPrwK9W7zF56IlTV8O/KpqFwVnJ57tGFmUuCcxbxJ3mu5WQA8EPvM/m/ieqJV8cUXit5DX1rYKfmUBfLe+O97MWgWOwB/9FlHcGo9rJ3wWMy/xflfkTYOOx+tVJrEvKzixRfCP1wLC2sR/X6NFZ4p9S6V68SDGNAG/og74yRUxxzY0gSxJCefh8yoT2YaFGNFq+Cx2URLzQcPwFcmG4CrVX0R+xLXoqgO+p074Er5O4hY0NYEk8XDciF+rTOQL8TlSagY+q3NaErcH41oygaTAaLGFrvY+u07/TWB5vfBZ/lVJ7Mstha8oNB5LxS40T481CD8CfybxFw7aBJKik/CU/j1UQ/BZrkuT+K0abMubEk4Q1/5O8VSt4YavYvktHwzOQRMmiA/MslrWxgwEZrT4tF1Q753ArQn8hoHcwZYJjyQw19QZ82kSc8dgM9aCuSeB+UGNsx/xnbis/ZjULtY8oLH6drY31fAvS7xvt4uzULg9gdoi5yBWfG38JfHObTdrVWGUvh8o7s7xzU48vQqOV9ou8RixrB2So/LEszrxPNcJzlyJjd03CeCSivEx4sFBWed0ijVXuCIB3I3Dk7H5ydhmFW35ASHxfWJ9AroqGXsv+fvSTnIWSjxXKmuf+LXmGH01rdOcuRJfdNKrvRr3Jr/Xd5qxpnBGArxfPMwta2Gn+eoSXtNff4nfiA984RCx00zV9Lfetrat4pN2VghhWghhbalU+qid9Q9I/QdWivrYalImXgAAAABJRU5ErkJggg=="},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.5cb972fa.js.map