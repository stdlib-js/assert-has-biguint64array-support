// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var o=r()?function(e){var r,i,o,c,l;if(null==e)return t.call(e);i=e[a],l=a,r=null!=(c=e)&&n.call(c,l);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=i:delete e[a],o}:function(e){return t.call(e)},c="function"==typeof BigUint64Array;var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var s=Object.defineProperty;function u(e){return"number"==typeof e}function p(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function f(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+p(i):p(i)+e,n&&(e="-"+e)),e}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function y(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=f(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=f(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function b(e){return"string"==typeof e}var h=Math.abs,w=String.prototype.toLowerCase,v=String.prototype.toUpperCase,m=String.prototype.replace,_=/e\+(\d)$/,j=/e-(\d)$/,S=/^(\d+)$/,E=/^(\d+)e/,x=/\.0$/,k=/\.0*e/,A=/(\..*[^0])0*e/;function B(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!u(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":h(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=m.call(t,A,"$1e"),t=m.call(t,k,"e"),t=m.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=m.call(t,_,"e+0$1"),t=m.call(t,j,"e-0$1"),e.alternate&&(t=m.call(t,S,"$1."),t=m.call(t,E,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===v.call(e.specifier)?v.call(t):w.call(t)}function I(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function T(e,r,t){var n=r-e.length;return n<0?e:e=t?e+I(n):I(n)+e}var O=String.fromCharCode,V=isNaN,F=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function P(e){var r,t,n,i,a,o,c,l,s;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,l=0;l<e.length;l++)if(b(n=e[l]))o+=n;else{if(r=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,V(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,V(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=y(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!V(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=V(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=B(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,t,n,i;for(t=[],i=0,n=U.exec(e);n;)(r=e.slice(i,U.lastIndex-n[0].length)).length&&t.push(r),t.push(C(n)),i=U.lastIndex,n=U.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Z(e){return"string"==typeof e}function G(e){var r,t,n;if(!Z(e))throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=R(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return P.apply(null,t)}var W,L=Object.prototype,M=L.toString,N=L.__defineGetter__,X=L.__defineSetter__,z=L.__lookupGetter__,q=L.__lookupSetter__;W=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?s:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(e,r)||q.call(e,r)?(n=e.__proto__,e.__proto__=L,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,t.get),o&&X&&X.call(e,r,t.set),e};var D=W;function H(e,r,t){D(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function J(e){return"boolean"==typeof e}var K=Boolean,Q=Boolean.prototype.toString;var Y=r();function ee(e){return"object"==typeof e&&(e instanceof K||(Y?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===o(e)))}function re(e){return J(e)||ee(e)}function te(){return new Function("return this;")()}H(re,"isPrimitive",J),H(re,"isObject",ee);var ne="object"==typeof self?self:null,ie="object"==typeof window?window:null,ae="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},oe="object"==typeof ae?ae:null,ce="object"==typeof globalThis?globalThis:null;var le=function(e){if(arguments.length){if(!J(e))throw new TypeError(G("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return te()}if(ce)return ce;if(ne)return ne;if(ie)return ie;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}();function se(e){return"bigint"==typeof e}function ue(e){return"object"==typeof e&&"[object BigInt]"===o(e)&&function(e){try{return"bigint"==typeof e.valueOf()}catch(e){return!1}}(e)}function pe(e){return se(e)||ue(e)}function fe(e){return function(){return e}}H(pe,"isPrimitive",se),H(pe,"isObject",ue);var ge=fe(!1),de=fe(!1),ye=fe(!1);H(ge,"isPrimitive",de),H(ge,"isObject",ye);var be="function"==typeof le.BigInt&&"function"==typeof BigInt&&"bigint"==typeof le.BigInt("1")&&"bigint"==typeof BigInt("1")?pe:ge,he="function"==typeof BigUint64Array?BigUint64Array:null;function we(){var e,r;if("function"!=typeof he)return!1;try{return e=new he(["9223372036854775807","9223372036854775809"]),r=e,(c&&r instanceof BigUint64Array||"[object BigUint64Array]"===o(r))&&be(e[0])&&"9223372036854775807"===e[0].toString()&&be(e[1])&&"9223372036854775809"===e[1].toString()}catch(e){return!1}}export{we as default};
//# sourceMappingURL=mod.js.map
