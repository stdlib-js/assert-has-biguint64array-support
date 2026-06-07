"use strict";var i=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var a=i(function(B,e){
var y=typeof BigUint64Array=="function"?BigUint64Array:null;e.exports=y
});var p=i(function(l,g){
var c=require('@stdlib/assert-is-biguint64array/dist'),n=require('@stdlib/assert-is-bigint/dist'),u=a(),s="9223372036854775807",o="9223372036854775809";function f(){var r;if(typeof u!="function")return!1;try{return r=new u([s,o]),c(r)&&n(r[0])&&r[0].toString()===s&&n(r[1])&&r[1].toString()===o}catch(t){return!1}}g.exports=f
});var v=p();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
