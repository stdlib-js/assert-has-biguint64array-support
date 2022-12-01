// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return t&&"symbol"==typeof Symbol.toStringTag}var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var i=e()?function(t){var e,i,u,l,a;if(null==t)return r.call(t);i=t[o],a=o,e=null!=(l=t)&&n.call(l,a);try{t[o]=void 0}catch(e){return r.call(t)}return u=r.call(t),e?t[o]=i:delete t[o],u}:function(t){return r.call(t)},u="function"==typeof BigUint64Array;var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var a,c=Object.defineProperty,f=Object.prototype,y=f.toString,p=f.__defineGetter__,b=f.__defineSetter__,g=f.__lookupGetter__,v=f.__lookupSetter__;a=function(){try{return l({},"x",{}),!0}catch(t){return!1}}()?c:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(g.call(t,e)||v.call(t,e)?(n=t.__proto__,t.__proto__=f,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&p&&p.call(t,e,r.get),u&&b&&b.call(t,e,r.set),t};var s=a;function d(t,e,r){s(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function _(t){return"boolean"==typeof t}var j=Boolean.prototype.toString;var w=e();function m(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===i(t)))}function h(t){return _(t)||m(t)}function S(){return new Function("return this;")()}d(h,"isPrimitive",_),d(h,"isObject",m);var B="object"==typeof self?self:null,O="object"==typeof window?window:null,P="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof P?P:null;var U=function(t){if(arguments.length){if(!_(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(B)return B;if(O)return O;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}();function E(t){return"bigint"==typeof t}function I(t){return"object"==typeof t&&"[object BigInt]"===i(t)&&function(t){try{return"bigint"==typeof t.valueOf()}catch(t){return!1}}(t)}function T(t){return E(t)||I(t)}function x(t){return function(){return t}}d(T,"isPrimitive",E),d(T,"isObject",I);var V=x(!1),k=x(!1),F=x(!1);d(V,"isPrimitive",k),d(V,"isObject",F);var G="function"==typeof U.BigInt&&"function"==typeof BigInt&&"bigint"==typeof U.BigInt("1")&&"bigint"==typeof BigInt("1")?T:V,C="function"==typeof BigUint64Array?BigUint64Array:null;function M(){var t,e;if("function"!=typeof C)return!1;try{return t=new C(["9223372036854775807","9223372036854775809"]),e=t,(u&&e instanceof BigUint64Array||"[object BigUint64Array]"===i(e))&&G(t[0])&&"9223372036854775807"===t[0].toString()&&G(t[1])&&"9223372036854775809"===t[1].toString()}catch(t){return!1}}export{M as default};
//# sourceMappingURL=mod.js.map