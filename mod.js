// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var e=function(){return r&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,o=n;var i=function(t){return o.call(t)},u=Object.prototype.hasOwnProperty;var a=function(t,r){return null!=t&&u.call(t,r)},c="function"==typeof Symbol?Symbol.toStringTag:"",f=a,l=c,p=n;var y=i,b=function(t){var r,e,n;if(null==t)return p.call(t);e=t[l],r=f(t,l);try{t[l]=void 0}catch(r){return p.call(t)}return n=p.call(t),r?t[l]=e:delete t[l],n},v=e()?b:y,g=v,s="function"==typeof BigUint64Array;var _=function(t){return s&&t instanceof BigUint64Array||"[object BigUint64Array]"===g(t)},j="function"==typeof Object.defineProperty?Object.defineProperty:null;var d=function(){try{return j({},"x",{}),!0}catch(t){return!1}},m=Object.defineProperty,w=Object.prototype,O=w.toString,h=w.__defineGetter__,S=w.__defineSetter__,B=w.__lookupGetter__,P=w.__lookupSetter__;var A=function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(B.call(t,r)||P.call(t,r)?(n=t.__proto__,t.__proto__=w,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&h&&h.call(t,r,e.get),u&&S&&S.call(t,r,e.set),t},E=m,U=A,I=d()?E:U;var T=function(t,r,e){I(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},k=T;var x=function(t){return"boolean"==typeof t},V=Boolean.prototype.toString;var F=v,G=function(t){try{return V.call(t),!0}catch(t){return!1}},M=e();var z=function(t){return"object"==typeof t&&(t instanceof Boolean||(M?G(t):"[object Boolean]"===F(t)))},C=x,D=z;var q=k,H=function(t){return C(t)||D(t)},J=z;q(H,"isPrimitive",x),q(H,"isObject",J);var K="object"==typeof self?self:null,L="object"==typeof window?window:null,N=H.isPrimitive,Q=function(){return new Function("return this;")()},R=K,W=L,X=t(Object.freeze({__proto__:null}));var Y=function(t){if(arguments.length){if(!N(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Q()}if(R)return R;if(W)return W;if(X)return X;throw new Error("unexpected error. Unable to resolve global object.")},Z=Y();var $=function(){return"function"==typeof Z.BigInt&&"function"==typeof BigInt&&"bigint"==typeof Z.BigInt("1")&&"bigint"==typeof BigInt("1")};var tt=function(t){return"bigint"==typeof t};var rt=v,et=function(t){try{return"bigint"==typeof t.valueOf()}catch(t){return!1}};var nt=function(t){return"object"==typeof t&&"[object BigInt]"===rt(t)&&et(t)},ot=tt,it=nt;var ut=k,at=function(t){return ot(t)||it(t)},ct=nt;ut(at,"isPrimitive",tt),ut(at,"isObject",ct);var ft=at;var lt=k,pt=function(t){return function(){return t}},yt=pt(!1),bt=pt(!1),vt=pt(!1);lt(yt,"isPrimitive",bt),lt(yt,"isObject",vt);var gt,st=ft,_t=yt;gt=$()?st:_t;var jt="function"==typeof BigUint64Array?BigUint64Array:null,dt=_,mt=gt,wt=jt;var Ot=function(){var t;if("function"!=typeof wt)return!1;try{return t=new wt(["9223372036854775807","9223372036854775809"]),dt(t)&&mt(t[0])&&"9223372036854775807"===t[0].toString()&&mt(t[1])&&"9223372036854775809"===t[1].toString()}catch(t){return!1}};export{Ot as default};
//# sourceMappingURL=mod.js.map
