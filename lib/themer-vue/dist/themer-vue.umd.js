var __assign=Object.assign;!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["themer-vue"]={},e.Vue)}(this,(function(e,t){"use strict";function n(e,t){if(!e)return;const n=r(t);Object.keys(n).forEach((t=>{e.style.setProperty(function(e){const t=String(e);return t.startsWith("--")?t:`--${t}`}(t),n[t])}))}function r(e,t=[],n={}){return Object.keys(e).reduce(((o,s)=>{const i=e[s],u=[...t,s];return"string"==typeof i?o[u.join("-")]=i:o=r(i,u,n),o}),n)}function o(e){const t=function(e){let t,n=function(){try{const e=document.querySelector(":root");return e||void 0}catch(e){return}}(),r=[];if(Array.isArray(e)){if(!e.length)throw new Error("'themes' must be filled");r=[...e]}else if(o=e,"[object Object]"===Object.prototype.toString.apply(o)){const{element:t,themes:o}=e;n&&(n=t),Array.isArray(r)&&(r=o)}var o;t=r[0];const i={element:n,themes:r,theme:t};n&&s(i,r[0]);return i}(e);return __assign(__assign({},t),{setTheme:e=>s(t,e)})}function s(e,t){if("string"==typeof t){const n=e.themes.find((e=>e.value.name===t));if(!n)return!1;t=n}const r=function(e){const{colors:t}=e.value.data;return __assign({},t)}(t);return!!e.element&&(n(e.element,r),e.theme.value=t.value,!0)}const i="themeManager";e.createTheme=function(e){return{value:e instanceof Function?e():e}},e.createThemeManager=function(e){const n=o(e);n.theme=t.ref(n.theme.value);const r=n.setTheme;return n.setTheme=e=>r.call(n,e),{manager:n,install(e){e.provide(i,n),e.config.globalProperties.$themeManager=n}}},e.useThemeManager=function(){return t.inject(i)},Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));