!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(){var e;(e=document.getElementById("form-input").value,fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${e}&APPID=5c421a898af8f8f0d9a04eb07a32545d&units=metric`).then(e=>e.json()).then(e=>{const t=e.list[0];return{city:e.city.name,date:Date(t.dt),temperature:`${t.main.temp} C`,humidity:`${t.main.humidity} %`,pressure:`${t.main.pressure} hPa`,wind:`${t.wind.speed} meter/sec`}}).catch(e=>null)).then(e=>{let t;t=null==e?document.getElementById("entry-template-on-error").innerHTML:document.getElementById("entry-template").innerHTML;const n=Handlebars.compile(t);document.getElementById("result").innerHTML=n(e)})}document.getElementById("search").onclick=function(){r()}},function(e,t){}]);