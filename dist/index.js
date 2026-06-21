"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=v(function(c,s){
var m=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/stats-strided-mskmidrange/dist').ndarray;function d(i){var r=i[1],e=i[0];return q(m(e,0),u(e),t(e,0),a(e),u(r),t(r,0),a(r))}s.exports=d
});var g=n();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
