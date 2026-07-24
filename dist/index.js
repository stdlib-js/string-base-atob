"use strict";var e=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(f){throw (t=0, f)}};};var s=e(function(h,i){
i.exports=atob
});var o=e(function(y,a){
var p=s();function v(r){try{return p(r)}catch(t){return null}}a.exports=v
});var l=e(function(C,n){
var q=/[^\u0000-\u007F]/;n.exports=q
});var c=e(function(E,b){
var x=require('@stdlib/buffer-from-string/dist'),A=l();function I(r){return A.test(r)?null:x(r,"base64").toString("utf8")}b.exports=I
});var N=require('@stdlib/assert-has-atob-support/dist'),S=o(),_=c(),u;N()?u=S:u=_;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
