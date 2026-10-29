"use strict";var i=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(y){throw (t=0, y)}};};var a=i(function(l,e){
var c=typeof BigUint64Array=="function"?BigUint64Array:null;e.exports=c
});var p=i(function(S,g){
var f=require('@stdlib/assert-is-biguint64array/dist'),n=require('@stdlib/assert-is-bigint/dist'),u=a(),s="9223372036854775807",o="9223372036854775809";function v(){var r;if(typeof u!="function")return!1;try{return r=new u([s,o]),f(r)&&n(r[0])&&r[0].toString()===s&&n(r[1])&&r[1].toString()===o}catch(t){return!1}}g.exports=v
});var A=p();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
