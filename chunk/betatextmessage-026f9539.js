import{t as d,G as m,H as _,x as r,w as f,ay as w,d as g,y as h,e as x,_ as y}from"../assets/index-83a10b2e.js";import{k as l,j as k,f as S,w as v,D as B,I as T,J as M,G as c,y as N,K as i,u as b,i as P}from"./xcs-vue-family-70642f71.js";import"./index-55948043.js";import"./xcs-canvas-5c2592d6.js";const[I,C]=d("notify"),V=m({},_,{type:r("danger"),color:String,message:f,position:r("top"),className:w,background:String,lockScroll:Boolean});var z=l({name:I,props:V,emits:["update:show"],setup(e,{emit:a,slots:s}){const o=t=>a("update:show",t);return()=>k(g,{show:e.show,class:[C([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,zIndex:e.zIndex,position:e.position,duration:.2,lockScroll:e.lockScroll,"onUpdate:show":o},{default:()=>[s.default?s.default():e.message]})}});const D=h(z);const G=l({__name:"BetaTextMessage",setup(e){const a=x(),s=S(()=>a.showBetaTextMessage===!0);v(()=>a.showBetaTextMessage,t=>{t&&setTimeout(()=>{a.setShowBetaTextMessageTip(!1)},5e3)});const o=()=>{const t="https://support.xtool.com/hc/en-us/articles/9001607040791";window.MeApi.app.openBrowser(t)};return(t,n)=>{const p=D;return B(),T(p,{show:b(s),"onUpdate:show":n[0]||(n[0]=u=>P(s)?s.value=u:null),type:"warning"},{default:M(()=>[c("div",null,[N(i(t.$t("canvas.message.text_version_not_match"))+" ",1),c("span",{class:"open-link",onClick:o},i(t.$t("canvas.message.learn_more")),1)])]),_:1},8,["show"])}}});const A=y(G,[["__scopeId","data-v-a21bf2cf"]]);export{A as default};
