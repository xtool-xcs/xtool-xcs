import{f as d,i as u,m,_ as f}from"../assets/index-83a10b2e.js";import{k as g,a5 as x,H as h,f as r,D,I as k,J as v,G as n,K as S,u as t,i as w}from"./xcs-vue-family-70642f71.js";import"./index-55948043.js";import"./xcs-canvas-5c2592d6.js";const B={class:"dialog-error"},I=g({__name:"ErrorDialog",setup(C){const i=x(),{t:s}=h(),o=d(),e=r(()=>o.isNotSupportedFile),c=r(()=>s(o.dialogTxt??"")),l=()=>{o.showNotSupportedFileDialog(!1),o.isBackIndexPage&&(o.setBackIndexPage(!1),u(),i.replace("home"))};return(N,a)=>{const p=m;return D(),k(p,{show:t(e),"onUpdate:show":a[0]||(a[0]=_=>w(e)?e.value=_:null),"confirm-button-text":t(s)("common.msg.ok"),onConfirm:l},{default:v(()=>[n("div",B,[n("p",null,S(t(c)),1)])]),_:1},8,["show","confirm-button-text"])}}});const T=f(I,[["__scopeId","data-v-f00d90ac"]]);export{T as default};
