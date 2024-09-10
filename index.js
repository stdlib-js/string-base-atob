// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).atob=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof atob?atob:null;var t=atob;var n=/./,i="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function a(r){return"number"==typeof r}function c(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function u(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+c(i):c(i)+r,n&&(r="-"+r)),r}var f=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function s(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=u(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=u(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===l.call(r.specifier)?l.call(t):f.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var p=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,y=String.prototype.replace,b=/e\+(\d)$/,h=/e-(\d)$/,v=/^(\d+)$/,w=/^(\d+)e/,m=/\.0$/,j=/\.0*e/,S=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!a(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=y.call(t,S,"$1e"),t=y.call(t,j,"e"),t=y.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=y.call(t,b,"e+0$1"),t=y.call(t,h,"e-0$1"),r.alternate&&(t=y.call(t,v,"$1."),t=y.call(t,w,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===d.call(r.specifier)?d.call(t):g.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var x=String.fromCharCode,k=Array.isArray;function T(r){return r!=r}function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,i,o,a,c,f,l,p,g,d,y;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+_(y):_(y)+p)),a+=n.arg||"",c+=1}return a}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(O(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function B(r){var e,t;if("string"!=typeof r)throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return A.apply(null,e)}var I,C=Object.prototype,P=C.toString,G=C.__defineGetter__,R=C.__defineSetter__,L=C.__lookupGetter__,Z=C.__lookupSetter__;I=function(){try{return i({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var W=I;function M(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(r){return"boolean"==typeof r}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return X&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var N,D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";N=q()?function(r){var e,t,n,i,o;if(null==r)return H.call(r);t=r[J],o=J,e=null!=(i=r)&&z.call(i,o);try{r[J]=void 0}catch(e){return H.call(r)}return n=H.call(r),e?r[J]=t:delete r[J],n}:function(r){return H.call(r)};var K=N,Q=Boolean,Y=Boolean.prototype.toString;var rr=q();function er(r){return"object"==typeof r&&(r instanceof Q||(rr?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function tr(r){return U(r)||er(r)}M(tr,"isPrimitive",U),M(tr,"isObject",er);var nr="object"==typeof self?self:null,ir="object"==typeof window?window:null,or="object"==typeof global?global:null,ar="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!U(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ar)return ar;if(nr)return nr;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),ur=cr.document&&cr.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr,pr=/^\s*function\s*([^(]*)/i;M(lr,"REGEXP",pr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===K(r)};var gr=sr;function dr(r){return null!==r&&"object"==typeof r}var yr=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr);function br(r){return dr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function hr(r){var e,t,n;if(("Object"===(t=K(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return br(r)?"Buffer":t}M(dr,"isObjectLikeArray",yr);var vr="function"==typeof n||"object"==typeof fr||"function"==typeof ur?function(r){return hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?hr(r).toLowerCase():e};var wr="function"==typeof Buffer?Buffer:null;var mr,jr=r.Buffer;mr=function(){var r,e;if("function"!=typeof wr)return!1;try{r=br(e="function"==typeof wr.from?wr.from([1,2,3,4]):new wr([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Sr,Er=mr,_r=(Sr=Er.from,"function"===vr(Sr));function xr(r){return"string"==typeof r}var kr=String.prototype.valueOf;var Tr,Vr=q();function Ar(r){return"object"==typeof r&&(r instanceof String||(Vr?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object String]"===K(r)))}function Fr(r){return xr(r)||Ar(r)}M(Fr,"isPrimitive",xr),M(Fr,"isObject",Ar),Tr=_r?function(r,e){if(!xr(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!xr(e))throw new TypeError(B("invalid argument. Second argument must be a string. Value: `%s`.",e));return Er.from(r,e)}return Er.from(r,"utf8")}:function(r,e){if(!xr(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!xr(e))throw new TypeError(B("invalid argument. Second argument must be a string. Value: `%s`.",e));return new Er(r,e)}return new Er(r,"utf8")};var Or,$r=Tr,Br=/[^\u0000-\u007F]/;return Or=function(){var r;if("function"!=typeof e)return!1;try{r="Hello, world"===e("SGVsbG8sIHdvcmxk")}catch(e){r=!1}return r}()?function(r){try{return t(r)}catch(r){return null}}:function(r){return Br.test(r)?null:$r(r,"base64").toString("utf8")},Or}));
//# sourceMappingURL=index.js.map
