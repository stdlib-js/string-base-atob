"use strict";var e=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var s=e(function(g,i){
i.exports=atob
});var o=e(function(h,a){
var f=s();function p(r){try{return f(r)}catch(t){return null}}a.exports=p
});var l=e(function(y,n){
var v=/[^\u0000-\u007F]/;n.exports=v
});var c=e(function(C,b){
var q=require('@stdlib/buffer-from-string/dist'),x=l();function A(r){return x.test(r)?null:q(r,"base64").toString("utf8")}b.exports=A
});var I=require('@stdlib/assert-has-atob-support/dist'),N=o(),S=c(),u;I()?u=N:u=S;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
