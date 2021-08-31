(()=>{"use strict";var e,t,r,n,o,i,a={804:e=>{e.exports=window.React},907:e=>{e.exports=window.TopWrite},181:e=>{e.exports=JSON.parse('{"type":"object","properties":{"defaultLanguage":{"title":"默认语言","type":"string","default":"clike","anyOf":[{"type":"string","const":"clike","title":"C-like"},{"type":"string","const":"html","title":"HTML"},{"type":"string","const":"markup","title":"Markup"},{"type":"string","const":"css","title":"CSS"},{"type":"string","const":"javascript","title":"JavaScript"},{"type":"string","const":"sql","title":"SQL"}]}},"additionalProperties":false,"required":[]}')}},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return a[e](r,r.exports,s),r.exports}s.m=a,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);s.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,s.d(o,i),o},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>e+"-"+{157:"bf0e47",282:"40fc6f",522:"faee93"}[e]+".js",s.miniCssF=e=>e+".index.css",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="TopWritePlugins.highlight:",s.l=(e,t,o,i)=>{if(r[e])r[e].push(t);else{var a,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",n+o),a.src=e),r[e]=[t];var p=(t,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="",o=e=>new Promise(((t,r)=>{var n=s.miniCssF(e),o=s.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===t)return a}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,o.parentNode.removeChild(o),n(s)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),i={179:0},s.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{157:1}[e]&&t.push(i[e]=o(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{var e={179:0};s.f.j=(t,r)=>{var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=s.p+s.u(t),a=new Error;s.l(i,(r=>{if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,a,l]=r,u=0;for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(l)l(s);for(t&&t(r);u<i.length;u++)o=i[u],s.o(e,o)&&e[o]&&e[o][0](),e[i[u]]=0},r=self.webpackChunkTopWritePlugins_highlight=self.webpackChunkTopWritePlugins_highlight||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var u,c={};u=s(907),s.p=(0,u.getPublicPath)(),(()=>{s.d(c,{default:()=>r});var e=s(907),t=s(804);const r=function({models:r,components:n,activate:o,messages:i,locales:a}){let l;l=s(181);let u={};if(n)for(const[e,r]of Object.entries(n))r&&(u[e]=r instanceof Array?[(0,t.lazy)(r[0]),r[1]]:(0,t.lazy)(r));return new e.Plugin({name:"highlight",models:r,components:u,activate:o,localeLoader:i,config:l})}({components:{"html:code":()=>s.e(157).then(s.bind(s,157))}})})(),(window.TopWritePlugins=window.TopWritePlugins||{}).highlight=c.default})();
//# sourceMappingURL=index.js.map