import{bl as g,u as w,b5 as I,B as b,d as y,_ as C}from"../assets/index-83a10b2e.js";import{I as E}from"./index-e902da34.js";import{b as $}from"./xcs-canvas-5c2592d6.js";import{k,w as B,D,I as S,J as a,G as r,K as n,u as s,j as l,y as d}from"./xcs-vue-family-70642f71.js";import"./index-55948043.js";const x=""+new URL("../assets/err-tips-374efc2e.png",import.meta.url).href,z={class:"device-error-container"},N={class:"header"},U={class:"content"},L={class:"error-content"},V={class:"img-wrapper"},M={class:"error-tips"},R={class:"footer"},T=k({__name:"DeviceError",setup(j){const e=g(),p=w(),_=()=>{e.visible=!1},v=()=>{var i,c,t;const o=(t=(c=(i=p.ext)==null?void 0:i.config)==null?void 0:c.supportUrls)==null?void 0:t.faqUrl;I(o)},m=()=>{e.addErrorIgnoreList(e.currentInfo.code),e.visible=!1};B(()=>e.visible,()=>{window.MeApi.openNative.deviceWarning(e.visible)});const u=()=>{e.removeFirstError(),$(e.errorModalList)||(e.visible=!0)};return(o,i)=>{const c=E,t=b,f=y;return D(),S(f,{show:s(e).visible,"onUpdate:show":i[0]||(i[0]=h=>s(e).visible=h),"close-on-click-overlay":!1,round:"",style:{width:"90%"},"z-index":"100000",onClosed:u},{default:a(()=>[r("section",z,[r("div",N,n(o.$t(`device.error.${s(e).currentInfo.msg}.title`)),1),r("div",U,[r("div",L,n(o.$t(`device.error.${s(e).currentInfo.msg}.content`)),1),r("div",V,[l(c,{fit:"contain",position:"center",src:s(e).currentInfo.img??s(x)},null,8,["src"])]),r("div",M,n(o.$t("device.error.error_code",{code:s(e).currentInfo.code})),1)]),r("div",R,[l(t,{size:"small",type:"primary",onClick:v},{default:a(()=>[d(n(o.$t("device.error.how_resolve")),1)]),_:1}),r("span",null,[l(t,{size:"small",onClick:m},{default:a(()=>[d(n(o.$t("device.modal.ignore")),1)]),_:1}),l(t,{size:"small",type:"primary",onClick:_},{default:a(()=>[d(n(o.$t("device.modal.confirm")),1)]),_:1})])])])]),_:1},8,["show"])}}});const J=C(T,[["__scopeId","data-v-6d216777"]]);export{J as default};
