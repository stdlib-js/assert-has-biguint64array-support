// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).hasBigUint64ArraySupport=e()}(this,(function(){"use strict";function t(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var e=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var r=function(){return e&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,o=n;var i=function(t){return o.call(t)},u=Object.prototype.hasOwnProperty;var a=function(t,e){return null!=t&&u.call(t,e)},c="function"==typeof Symbol?Symbol.toStringTag:"",f=a,l=c,p=n;var y=i,b=function(t){var e,r,n;if(null==t)return p.call(t);r=t[l],e=f(t,l);try{t[l]=void 0}catch(e){return p.call(t)}return n=p.call(t),e?t[l]=r:delete t[l],n},v=r()?b:y,g=v,_="function"==typeof BigUint64Array;var s=function(t){return _&&t instanceof BigUint64Array||"[object BigUint64Array]"===g(t)},d=t(Object.freeze({__proto__:null,default:()=>window}))();var j=function(){return"function"==typeof d.BigInt&&"function"==typeof BigInt&&"bigint"==typeof d.BigInt("1")&&"bigint"==typeof BigInt("1")},m="function"==typeof Object.defineProperty?Object.defineProperty:null;var O=function(){try{return m({},"x",{}),!0}catch(t){return!1}},h=Object.defineProperty,S=Object.prototype,w=S.toString,B=S.__defineGetter__,P=S.__defineSetter__,A=S.__lookupGetter__,T=S.__lookupSetter__;var U=h,I=function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===w.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===w.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(A.call(t,e)||T.call(t,e)?(n=t.__proto__,t.__proto__=S,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(t,e,r.get),u&&P&&P.call(t,e,r.set),t},E=O()?U:I;var k=function(t,e,r){E(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};var x=function(t){return"bigint"==typeof t};var G=v,V=function(t){try{return"bigint"==typeof t.valueOf()}catch(t){return!1}};var z=function(t){return"object"==typeof t&&"[object BigInt]"===G(t)&&V(t)},C=x,D=z;var F=k,M=function(t){return C(t)||D(t)},q=z;F(M,"isPrimitive",x),F(M,"isObject",q);var H=M;var J=k,K=function(t){return function(){return t}},L=K(!1),N=K(!1),Q=K(!1);J(L,"isPrimitive",N),J(L,"isObject",Q);var R,W=H,X=L;R=j()?W:X;var Y="function"==typeof BigUint64Array?BigUint64Array:null,Z=s,$=R,tt=Y,et="9223372036854775807",rt="9223372036854775809";return function(){var t;if("function"!=typeof tt)return!1;try{return t=new tt([et,rt]),Z(t)&&$(t[0])&&t[0].toString()===et&&$(t[1])&&t[1].toString()===rt}catch(t){return!1}}}));
//# sourceMappingURL=browser.js.map
