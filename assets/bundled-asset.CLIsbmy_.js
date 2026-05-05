var i={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function v(){if(x)return n;x=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(d,r,t){var u=null;if(t!==void 0&&(u=""+t),r.key!==void 0&&(u=""+r.key),"key"in r){t={};for(var s in r)s!=="key"&&(t[s]=r[s])}else t=r;return r=t.ref,{$$typeof:e,type:d,key:u,ref:r!==void 0?r:null,props:t}}return n.Fragment=a,n.jsx=o,n.jsxs=o,n}var R;function l(){return R||(R=1,i.exports=v()),i.exports}var p=l();function E(e){return typeof e=="string"?e:e.src}export{E as b,p as j};
