// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-biguint64array@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-bigint@v0.1.1-esm/index.mjs";var i="function"==typeof BigUint64Array?BigUint64Array:null;function n(){var n;if("function"!=typeof i)return!1;try{return n=new i(["9223372036854775807","9223372036854775809"]),t(n)&&r(n[0])&&"9223372036854775807"===n[0].toString()&&r(n[1])&&"9223372036854775809"===n[1].toString()}catch(t){return!1}}export{n as default};
//# sourceMappingURL=index.mjs.map
