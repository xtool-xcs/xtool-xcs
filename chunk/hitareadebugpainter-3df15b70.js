var f=Object.defineProperty;var g=(r,t,e)=>t in r?f(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>(g(r,typeof t!="symbol"?t+"":t,e),e),c=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var a=(r,t,e)=>(c(r,t,"read from private field"),e?e.call(r):t.get(r)),p=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},d=(r,t,e,s)=>(c(r,t,"write to private field"),s?s.call(r,e):t.set(r,e),e);import{X as u,ae as A,af as E,ag as T,ah as v,ai as M,L as P}from"./xcs-canvas-5c2592d6.js";const l={color:44321,alpha:.2},R={mode:"timer"};var n;class _{constructor(t,e){o(this,"container");o(this,"graphicsMap",new Map);p(this,n,void 0);o(this,"options");d(this,n,t),this.options=u(R,e),this.container=new A,this.container.name="HitAreaDisplays",this.initEvents(),console.log(`[ DebugPainter ] run in "${this.options.mode}" mode`),this.options.mode==="timer"&&this.listenTicker()}get viewport(){return a(this,n).viewport}get transformer(){return a(this,n).transformer}listenTicker(){E.system.add(()=>{this.updateAll()})}initEvents(){this.transformer.on(T.TRANSFORM_CHANGE,()=>{this.transformer.selected.forEach(e=>{this.handleAddOrUpdate(e)})});const t=a(this,n).events;a(this,n).on(t.ADD_HIT_AREA,e=>{this.handleAddOrUpdate(e)}),a(this,n).on(t.UPDATE_HIT_AREA,e=>{this.handleAddOrUpdate(e)}),a(this,n).on(t.REMOVE_HIT_AREA,e=>{this.handleRemove(e)})}handleAddOrUpdate(t){if(!(t!=null&&t.hitArea))return;const e=t.hitArea;this.graphicsMap.has(e)?this.update(e,t):this.add(e,t)}handleRemove(t){if(!(t!=null&&t.hitArea))return;const e=t.hitArea;this.graphicsMap.has(e)&&this.remove(e)}setTransformBy(t,e){let s=e;const i=new v;i.prepend(s.localTransform),this.container.parent!==s.parent&&(s=s.parent,i.prepend(s.localTransform)),t.transform.setFromMatrix(i)}add(t,e){const s=w();m(s,t),this.setTransformBy(s,e),this.container.addChild(s),this.graphicsMap.set(t,{display:e,graphics:s})}update(t,e){const{graphics:s}=this.graphicsMap.get(t);m(s,t),this.setTransformBy(s,e)}remove(t){const{graphics:e}=this.graphicsMap.get(t);this.container.removeChild(e),this.graphicsMap.delete(t)}updateAll(){for(const[t,{display:e}]of this.graphicsMap.entries())this.update(t,e)}}n=new WeakMap;function w(){const r=M(P.PATH);return r.interactive=!1,r.interactiveChildren=!1,r}function m(r,t,e="evenodd"){var h;typeof(t==null?void 0:t.toSVGString)!="function"&&console.warn("[ DebugPainter ] hitArea is not a skPath");const s=((h=t.toSVGString)==null?void 0:h.call(t))??"";r.clear(),r.beginFill(l.color,l.alpha);const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d",s),i.setAttribute("fill-rule",e),r.embedPath(i),r.endFill()}export{_ as HitAreaDebugPainter};