import{b7 as h}from"../assets/index-83a10b2e.js";import{f as w}from"./index-55948043.js";import{P as S,L as u,a as l}from"./constant-2a798a0e.js";import{q as O}from"./xcs-canvas-5c2592d6.js";import{k as g,r as L,f as E,w as R,a2 as A,j as P,u as T}from"./xcs-vue-family-70642f71.js";function m(e){return S.find(o=>o.power===e)}function M(e){const{RED_CROSS:t,LASER_FOCUS:o}=l;return e?{x:e[t].x-e[o].x,y:e[t].y-e[o].y}:{x:0,y:21.8}}function X(e,t){let o={x:0,y:0};const{RED_CROSS:s,LASER_FOCUS:n,XT_TOUCH:i}=l;return t&&(e===u.RED_CROSS&&(o={x:t[i].x-t[s].x,y:t[i].y-t[s].y}),e===u.LOW_LIGHT&&(o={x:t[i].x-t[n].x,y:t[i].y-t[n].y})),o}function k(e){let t={x:0,y:0};const{LASER_FOCUS:o,XT_TOUCH:s}=l,n=m(e);return n&&(t={x:n[s].x-n[o].x,y:n[s].y-n[o].y}),t}function B(e,t,o){let s={x:e.x,y:e.y};if(o===u.RED_CROSS){const n=m(t),i=M(n);s={x:e.x+i.x,y:e.y+i.y}}return s}const F=g({__name:"LaserPosition",props:{deviceInfo:null,ext:null,showCoord:{type:Boolean},updateCoord:{type:Boolean},showMultiPointBtn:{type:Boolean}},emits:["onUpdateValue","onUpdateStatu","onMultiPointBtnClick"],setup(e,{emit:t}){const o=e,s=L({showCoord:o.showCoord,coordX:0,coordY:0,coordZ:0}),n=E(()=>[{name:"showCoord",label:"device.common.laser_head_position",widget:"switchCoord",widgetAttrs:{style:{"margin-top":"0"}},labelSuffix:{widget:"switch",widgetAttrs:{size:"small",defaultValue:o.showCoord,value:o.showCoord}},childs:i()},{name:"multiPointMask",widget:"button",visible:()=>o.showMultiPointBtn,widgetAttrs:{label:"测量加工区域",size:"small"}}]),i=()=>[],C=async()=>{var f;if(!o.updateCoord)return;const{power:a,gMode:c}=o.deviceInfo;console.log("[获取激光头位置  ] >");let r=await((f=o.ext.apis)==null?void 0:f.getLaserCoord());const d=B({x:r.x,y:r.y},a,c);r&&(s.coordX=d.x,s.coordY=d.y,s.coordZ=r.z,t("onUpdateValue",r,s))},{pause:p,resume:y}=w(C,300);R(()=>o.showCoord,()=>{o.showCoord?y():p()},{immediate:!0});const _={showCoord(a){t("onUpdateStatu",a)},multiPointMask(){t("onMultiPointBtnClick")}},x=(a,c)=>{const r=_[a];if(O(r))return r(c);s[a]=c};return(a,c)=>{const r=h;return A(a.$slots,"default",{},()=>[P(r,{style:{"margin-top":"1rem"},items:T(n),values:s,handler:x},null,8,["items","values"])])}}});export{F as _,M as a,k as b,B as c,X as d,m as g};