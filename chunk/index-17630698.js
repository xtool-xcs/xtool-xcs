var p=Object.defineProperty;var d=(a,t,e)=>t in a?p(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>(d(a,typeof t!="symbol"?t+"":t,e),e);import{bL as u}from"../assets/index-83a10b2e.js";import{s,g as o}from"./xcs-canvas-5c2592d6.js";function n(){return new Worker(""+new URL("../assets/curveWorker-87f6141c.js",import.meta.url).href)}class g extends u{constructor(){super(n)}getCurveData(t){return this.request({type:"getCurveData",data:t})}getVectorGCode(t){return this.request({type:"getVectorGCode",data:t})}getBitmapGCode(t){return this.request({type:"getBitmapGCode",data:t})}}class l{constructor(){i(this,"dataMap",{})}setModeData(t,e,r){s(this.dataMap,[t,e],r)}setData(t,e){s(this.dataMap,t,e)}getData(t){return o(this.dataMap,t)}getModeData(t,e){return o(this.dataMap,[t,e])}deleteData(t){s(this.dataMap,[t],null)}deleteModeData(t,e){const r=o(this.dataMap,t);r&&delete r[e]}init(){this.clear()}clear(){this.dataMap={}}}export{l as C,g as a};
