// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-biguint64array@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-bigint@esm/index.mjs";var i="function"==typeof BigUint64Array?BigUint64Array:null,n=t,s=r,e=i;var a=function(){var t;if("function"!=typeof e)return!1;try{return t=new e(["9223372036854775807","9223372036854775809"]),n(t)&&s(t[0])&&"9223372036854775807"===t[0].toString()&&s(t[1])&&"9223372036854775809"===t[1].toString()}catch(t){return!1}};export{a as default};
//# sourceMappingURL=index.mjs.map
