// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-biguint64array@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-bigint@v0.2.4-esm/index.mjs";var i="function"==typeof BigUint64Array?BigUint64Array:null,n="9223372036854775807",s="9223372036854775809";function e(){var e;if("function"!=typeof i)return!1;try{return e=new i([n,s]),t(e)&&r(e[0])&&e[0].toString()===n&&r(e[1])&&e[1].toString()===s}catch(t){return!1}}export{e as default};
//# sourceMappingURL=index.mjs.map
