// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-atob-support@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-string@v0.2.2-esm/index.mjs";var s=atob;var e=/[^\u0000-\u007F]/;var n=t()?function(t){try{return s(t)}catch(t){return null}}:function(t){return e.test(t)?null:r(t,"base64").toString("utf8")};export{n as default};
//# sourceMappingURL=index.mjs.map
