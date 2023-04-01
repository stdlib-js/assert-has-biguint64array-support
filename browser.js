// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).hasBigUint64ArraySupport=e()}(this,(function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return t&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var i=e()?function(t){var e,i,u,l,f;if(null==t)return n.call(t);i=t[o],f=o,e=null!=(l=t)&&r.call(l,f);try{t[o]=void 0}catch(e){return n.call(t)}return u=n.call(t),e?t[o]=i:delete t[o],u}:function(t){return n.call(t)},u="function"==typeof BigUint64Array;var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var f,a=Object.defineProperty,c=Object.prototype,y=c.toString,p=c.__defineGetter__,b=c.__defineSetter__,g=c.__lookupGetter__,s=c.__lookupSetter__;f=function(){try{return l({},"x",{}),!0}catch(t){return!1}}()?a:function(t,e,n){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===y.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(g.call(t,e)||s.call(t,e)?(r=t.__proto__,t.__proto__=c,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&p&&p.call(t,e,n.get),u&&b&&b.call(t,e,n.set),t};var d=f;function v(t,e,n){d(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function _(t){return"boolean"==typeof t}var j=Boolean.prototype.toString;var m=e();function w(t){return"object"==typeof t&&(t instanceof Boolean||(m?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===i(t)))}function h(t){return _(t)||w(t)}function S(){return new Function("return this;")()}v(h,"isPrimitive",_),v(h,"isObject",w);var B="object"==typeof self?self:null,O="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof A?A:null;var T=function(t){if(arguments.length){if(!_(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(B)return B;if(O)return O;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}();function U(t){return"bigint"==typeof t}function E(t){return"object"==typeof t&&"[object BigInt]"===i(t)&&function(t){try{return"bigint"==typeof t.valueOf()}catch(t){return!1}}(t)}function I(t){return U(t)||E(t)}function x(t){return function(){return t}}v(I,"isPrimitive",U),v(I,"isObject",E);var V=x(!1),k=x(!1),F=x(!1);v(V,"isPrimitive",k),v(V,"isObject",F);var G="function"==typeof T.BigInt&&"function"==typeof BigInt&&"bigint"==typeof T.BigInt("1")&&"bigint"==typeof BigInt("1")?I:V,C="function"==typeof BigUint64Array?BigUint64Array:null,M="9223372036854775807",q="9223372036854775809";return function(){var t,e;if("function"!=typeof C)return!1;try{return t=new C([M,q]),e=t,(u&&e instanceof BigUint64Array||"[object BigUint64Array]"===i(e))&&G(t[0])&&t[0].toString()===M&&G(t[1])&&t[1].toString()===q}catch(t){return!1}}}));
//# sourceMappingURL=browser.js.map