import{u as m,j as d,m as p,_ as f}from"../assets/index-83a10b2e.js";import{k as g,H as v,f as n,D,I as x,J as h,G as c,K as w,u as t,i as C}from"./xcs-vue-family-70642f71.js";import"./index-55948043.js";import"./xcs-canvas-5c2592d6.js";const F={class:"g-dialog-wrap"},S=g({__name:"DeviceAutoFocusDialog",setup(k){const{t:e}=v(),o=m(),s=n(()=>o.isShowDeviceAutoFocusDialog),u=n(()=>o.isInProcessing||o.isFrameMode),r=()=>{var a;if(o.setDeviceAutoFocusDialogStatus(!1),u.value){d(e("device.process.device_is_working"));return}(a=o.ext)==null||a.goToZCoord()};return(a,i)=>{const _=p;return D(),x(_,{show:t(s),"onUpdate:show":i[0]||(i[0]=l=>C(s)?s.value=l:null),title:t(e)("device.auto_focus.auto_focus_remain_modal_head"),"confirm-button-text":t(e)("common.msg.ok"),onConfirm:r},{default:h(()=>[c("div",F,[c("div",null,w(t(e)("mobile.auto_focus.auto_focus_remain_tip")),1)])]),_:1},8,["show","title","confirm-button-text"])}}});const B=f(S,[["__scopeId","data-v-75a65066"]]);export{B as default};