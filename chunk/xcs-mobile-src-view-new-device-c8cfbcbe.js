import{I as X,Q as Z,_ as W,aS as N,B as O,r as H,c as z,b as Q,a6 as ee,E as Y,a5 as te,F as ne,V as ie,aY as oe,j as se}from"../assets/index-83a10b2e.js";import{N as ce}from"./index-36e5bf24.js";import{k as I,D as o,E as f,G as r,F as E,L as j,_ as F,j as p,K as w,ac as ae,ad as le,H as M,b as m,f as J,c as A,u as d,I as h,J as k,y as D,M as P,l as K,s as re,v as _e,w as G,o as ue}from"./xcs-vue-family-70642f71.js";import{I as q}from"./index-e902da34.js";import{C as pe}from"./index-7795d5ed.js";import{G as ve,a as de}from"./index-ac8ea00e.js";import"./index-55948043.js";import"./xcs-canvas-5c2592d6.js";const fe=""+new URL("../assets/pic-device-connect-fail-e1eb3b4e.png",import.meta.url).href,me=""+new URL("../assets/pic-device-connect-transfer-5c29780d.png",import.meta.url).href,we=""+new URL("../assets/pic-device-connect-wifi-c83cd8dd.png",import.meta.url).href,ge=g=>(ae("data-v-cc3cbf20"),g=g(),le(),g),he={class:"steps"},be=ge(()=>r("i",{class:"step-line-inner"},null,-1)),ye=[be],Ce={key:0,class:"step-img"},ke={key:0,class:"error-tip"},Se={key:1,class:"progress-tip"},Ie={key:1,class:"step-img"},xe={class:"finish-tip"},De={class:"step-icon-text"},$e=I({__name:"Step",props:{active:{default:1},isError:{type:Boolean,default:!1},stepList:null},setup(g){const s=g;return(n,i)=>{const a=X,c=Z;return o(),f("div",null,[r("div",he,[(o(!0),f(E,null,j(s.stepList,(t,u)=>(o(),f("div",{key:u,class:"step"},[r("div",{class:F(["step-head",s.active==t.stepIndex||t.stepIndex<=s.active?"step-finish":"step-wait"])},[r("div",{class:F(["step-line",s.active===t.stepIndex+1||t.stepIndex+1<=s.active?"step-finish":"step-wait"])},ye,2),s.active==t.stepIndex?(o(),f("div",Ce,[s.isError?(o(),f("div",ke,[p(a,{name:"cross",color:"white"})])):(o(),f("div",Se,[p(c,{color:"white",class:"loading-wrap"})]))])):t.stepIndex+1<=s.active?(o(),f("div",Ie,[r("div",xe,[p(a,{class:"step-img-finish",name:"success",color:"white"})])])):(o(),f("div",{key:2,class:F(["step-icon",{active:s.active+1===t.stepIndex}])},[r("div",De,w(t.stepIndex),1)],2))],2),r("div",{class:F(["step-main",s.active==t.stepIndex||t.stepIndex<=s.active?"step-finish":"step-wait"])},[r("div",{class:F(["step-title",{active:s.active+1===t.stepIndex}])},w(t.title),3)],2)]))),128))])])}}});const Le=W($e,[["__scopeId","data-v-cc3cbf20"]]),Pe={class:"connect-wrap"},We={class:"connect-tip"},Ne=I({__name:"DeviceConnectWifi",emits:["finish"],setup(g,{emit:s}){const{t:n}=M(),i=N(),a=m(1),c=m(!1),t=J(()=>c.value?fe:a.value===1?me:we),u=()=>{c.value=!1,a.value=1,e()},l=[{stepIndex:1,title:n("mobile.connect.send_info_to_device")},{stepIndex:2,title:n("mobile.connect.connect_wifi")}];A(()=>{e(),i.wifiConfigState.isTransfer=!0});const e=async()=>{let v=await i.configWifi();v?(a.value++,console.log("wificonfig ="+v),setTimeout(()=>{a.value++,s("finish"),i.wifiConfigState.isTransfer=!1},5e3)):(c.value=!0,i.wifiConfigState.isTransfer=!0)};return(v,b)=>{const $=q,V=O;return o(),f("div",Pe,[r("div",We,w(v.$t("mobile.connect.connect_mobile_tip")),1),p(Le,{class:"connect-step",active:a.value,"is-error":c.value,"step-list":l},null,8,["active","is-error"]),p($,{class:"connect-img",src:d(t)},null,8,["src"]),r("div",null,[c.value?(o(),h(V,{key:0,type:"primary",class:"retry-btn",onClick:u},{default:k(()=>[D(w(v.$t("device.firmware.retry")),1)]),_:1})):P("",!0)])])}}});const Ve=W(Ne,[["__scopeId","data-v-e6833524"]]),Te={class:"connect-finish-wrap"},Be={class:"connect-finish-btn-wrap"},Fe=I({__name:"DeviceConnectWifiFinish",props:{successLightColor:null},emits:["retry"],setup(g,{emit:s}){const n=N(),i=()=>n.getSelectDeviceInfo().successImg,a=()=>{s("retry")},c=()=>{H.back()};return(t,u)=>{const l=q,e=O;return o(),f("div",Te,[p(l,{class:"device-img",src:i()},null,8,["src"]),r("p",null,w(t.$t("mobile.connect.connect_d1pro_success_tip",{successLightColor:g.successLightColor})),1),r("div",Be,[p(e,{type:"primary",block:"",plain:"",style:{margin:"4px auto"},onClick:a},{default:k(()=>[D(w(t.$t("device.firmware.retry")),1)]),_:1}),p(e,{block:"",type:"primary",onClick:c},{default:k(()=>[D(w(t.$t("device.common.complete")),1)]),_:1})])])}}});const Ae=W(Fe,[["__scopeId","data-v-bab551a1"]]),Ue={class:"connect-wrap"},Re={class:"connect-tip"},Ge=I({__name:"DeviceStepTip",props:{img:null,textList:null},setup(g){const s=N();return A(()=>{s.setCanNext(!0)}),(n,i)=>{const a=q;return o(),f("div",Ue,[p(a,{class:"connect-img",fit:"contain",src:g.img},null,8,["src"]),r("div",Re,[r("ul",null,[(o(!0),f(E,null,j(g.textList,(c,t)=>(o(),f("li",{key:t},w(c),1))),128))])])])}}});const Oe=W(Ge,[["__scopeId","data-v-a754a6aa"]]),Ee={class:"permission-wrap"},Me={class:"permission-tip"},qe={class:"hand-wrap"},je={class:"hand-wifi-tip"},ze=I({__name:"PermissionCheck",props:{modelValue:Number},emits:["update:modelValue"],setup(g,{emit:s}){const n=window.MeApi.permission,i=m(!1),a=m(!1),c=m(!1),t=m(!1),u=m(!1);let l;const{t:e}=M();A(()=>{l=setInterval(()=>{v()},1e3),v()});const v=async()=>{a.value=await n.isLocationOpen(),c.value=await n.isGrantedLocationPermission();const B=await z();u.value=B,B?t.value=await n.isAccuracyLocationOpen():t.value=!0,a.value&&c.value&&t.value?s("update:modelValue",1):i.value=!0};K(()=>{clearInterval(l)});const b=()=>{s("update:modelValue",2)},$=async()=>{a.value||(await z()?Q({title:e("mobile.common.notice"),message:e("mobile.connect.go_to_setting_tip"),confirmButtonText:e("mobile.common.go_to_setting"),cancelButtonText:e("mobile.common.back")}).then(()=>{a.value||n.openLocationPage()}):n.openLocationPage())},V=async()=>{c.value||await n.grantLocationPermission()||n.openAppPermissionPage()},T=async()=>{t.value||(await z()?Q({title:e("mobile.common.accurate_location_title"),message:e("mobile.common.accurate_location_tip"),confirmButtonText:e("mobile.common.go_to_setting"),cancelButtonText:e("mobile.common.back")}).then(()=>{t.value||n.openLocationPage()}):n.openLocationPage())};return(B,y)=>{const _=X,L=O,U=ee;return o(),f("div",Ee,[re(r("div",null,[r("div",Me,w(d(e)("mobile.connect.permission_gps_title")),1),p(U,{class:"permission-btn",size:16,direction:"vertical",fill:""},{default:k(()=>[p(L,{type:"primary",block:"",onClick:$},{default:k(()=>[a.value?(o(),h(_,{key:0,name:"success"})):P("",!0),D(" "+w(d(e)("mobile.connect.permission_gps_on")),1)]),_:1}),p(L,{type:"primary",block:"",onClick:V},{default:k(()=>[c.value?(o(),h(_,{key:0,name:"success"})):P("",!0),D(" "+w(d(e)("mobile.connect.permission_gps_info")),1)]),_:1}),u.value&&c.value?(o(),h(L,{key:0,type:"primary",block:"",onClick:T},{default:k(()=>[t.value?(o(),h(_,{key:0,name:"success"})):P("",!0),D(" "+w(d(e)("mobile.common.accurate_permission_on")),1)]),_:1})):P("",!0)]),_:1}),r("div",qe,[r("div",je,w(d(e)("mobile.connect.permission_gps_off")),1),r("a",{class:"hand-input-btn",onClick:b},w(d(e)("mobile.connect.hand_input_wifi")),1)])],512),[[_e,i.value]])])}}});const He=W(ze,[["__scopeId","data-v-bd6ae4dd"]]),Je={class:"input-wifi-wrap"},Ke={class:"wifi-wrap"},Qe=I({__name:"InputWifi",setup(g,{expose:s}){const{t:n}=M(),i=N(),a="ls_is_save_pw",c="wifi_pw",t=m(0),u=m(!1),l=m(""),e=m(""),v=m(!1);let b;G(()=>t.value,()=>{t.value===2?(l.value="",clearInterval(b)):t.value===1?(T(),b&&clearInterval(b),b=setInterval(()=>{T()},1e3)):T()}),G(()=>l.value,()=>{console.log("wifiName.value",l.value),e.value=V(l.value)??""}),G(()=>[l.value,e.value],()=>{l.value===""||e.value.length<8?i.setCanNext(!1):i.setCanNext(!0)}),G(()=>u.value,()=>{const y=u.value?"1":"0";localStorage.setItem(a,y)});const $=()=>{window.MeApi.wifi.openWifiPage()};A(()=>{i.setCanNext(!1),u.value=localStorage.getItem(a)==="1"});const V=y=>y===""?"":localStorage.getItem(c+y)??"";K(()=>{u.value&&localStorage.setItem(c+l.value,e.value)}),ue(()=>{clearInterval(b)});async function T(){try{if(await window.MeApi.wifi.isWifiOpen()){const _=await window.MeApi.wifi.getWifiName();l.value=_,!_&&t.value===1&&(t.value=0)}else l.value=""}catch(y){console.log(y)}}return s({canNext:()=>{let y=l.value,_=e.value;return y===""?(Y({message:n("mobile.connect.wifi_name_error")}),!1):_===""||_.length<8?(Y({message:n("mobile.connect.wifi_pwd_error")}),!1):(i.wifiConfigState.wifiName=y,i.wifiConfigState.wifiPwd=_,i.wifiConfigState.isCanNext=!0,!0)}}),(y,_)=>{const L=te,U=ne,C=pe,x=ie;return o(),f("div",Je,[r("div",Ke,[p(L,{class:"connect-wifi-tip",title:d(n)("mobile.connect.connect_wifi_tip"),label:d(n)("mobile.connect.wifi_support_tip")},null,8,["title","label"]),p(x,{class:"input-wrap"},{default:k(()=>[p(U,{modelValue:l.value,"onUpdate:modelValue":_[0]||(_[0]=S=>l.value=S),label:d(n)("mobile.connect.wifi_name"),clearable:"","label-width":"24%",maxlength:"50",readonly:t.value==1,"right-icon":t.value==1?"arrow":"",placeholder:d(n)("device.common.wifi_name"),onClickRightIcon:$},null,8,["modelValue","label","readonly","right-icon","placeholder"]),p(U,{modelValue:e.value,"onUpdate:modelValue":_[1]||(_[1]=S=>e.value=S),clearable:"","label-width":"24%",maxlength:"50",label:d(n)("mobile.connect.wifi_password"),type:v.value?"text":"password","right-icon":v.value?"eye-o":"closed-eye",placeholder:d(n)("mobile.connect.placeholder_password"),onClickRightIcon:_[2]||(_[2]=S=>v.value=!v.value)},null,8,["modelValue","label","type","right-icon","placeholder"]),p(L,null,{default:k(()=>[p(C,{modelValue:u.value,"onUpdate:modelValue":_[3]||(_[3]=S=>u.value=S)},{default:k(()=>[D(w(d(n)("mobile.connect.remember_password")),1)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),t.value==0?(o(),h(He,{key:0,modelValue:t.value,"onUpdate:modelValue":_[4]||(_[4]=S=>t.value=S),class:"permission-check"},null,8,["modelValue"])):P("",!0)])}}});const Ye=W(Qe,[["__scopeId","data-v-2733f9f4"]]),Xe=""+new URL("../assets/pic-set-phone-wifi-e91c7922.png",import.meta.url).href,Ze={class:"connect-wrap"},et={class:"connect-tip"},tt={class:"connect-wifi-btn"},nt=I({__name:"PhoneConnectDeviceWifi",setup(g){const{t:s}=M(),n=N(),i=oe[n.wifiConfigState.selectedDevice],a=[s("mobile.connect.mobile_connect_xtool_hot_spot",{selectedDevice:i}),s("mobile.connect.back_to_app")],c=()=>{window.MeApi.wifi.openWifiPage()};return(t,u)=>{const l=q,e=O;return o(),f("div",Ze,[p(l,{class:"connect-img",fit:"contain",src:d(Xe)},null,8,["src"]),r("div",et,[r("ul",null,[(o(),f(E,null,j(a,(v,b)=>r("li",{key:b},w(v),1)),64))])]),r("div",tt,[p(e,{block:"",plain:"",type:"primary",onClick:c},{default:k(()=>[D(w(d(s)("mobile.connect.setting_wifi")),1)]),_:1})])])}}});const it=W(nt,[["__scopeId","data-v-7ad64e3c"]]),ot={class:"device-name"},st=I({__name:"SelectNewDevice",emits:["updateSelectedDevice"],setup(g,{emit:s}){const n=N();A(()=>{const c=n.wifiConfigState.selectedDevice;i.forEach((t,u)=>{t.name===c&&a(u)}),c&&n.setCanNext(!0)});const i=n.wifiConfigState.deviceList,a=c=>{s("updateSelectedDevice",i[c].name)};return(c,t)=>{const u=q,l=ve,e=de;return o(),h(e,{class:"device-grip",border:!1,"column-num":2,gutter:10},{default:k(()=>[(o(!0),f(E,null,j(d(i),(v,b)=>(o(),h(l,{key:v.name,class:F(["device-default",v.name===d(n).wifiConfigState.selectedDevice?"device-selected":""]),onClick:$=>a(b)},{default:k(()=>[p(u,{class:"device-pic",src:v.devicePic},null,8,["src"]),r("span",ot,w(v.name),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})}}});const ct={class:"new-device-wrap"},at={class:"new-panel"},lt={class:"next-button"},rt=I({__name:"NewDeviceConnect",setup(g,{expose:s}){const{t:n}=M(),i=N(),a=m(),c=m(),t=m(""),u=m(""),l=m([]),e=m(0);A(()=>{t.value=i.wifiConfigState.selectedDevice});const v=J(()=>i.wifiConfigState.isCanNext);K(()=>{i.reset()});const b=C=>{t.value=C,i.wifiConfigState.selectedDevice=C},$=()=>{B()},V=()=>{_()},T=J(()=>e.value===0?n("device.common.next_step"):`${n("device.firmware.tips_confirm")}, ${n("device.common.next_step")}`),B=()=>{e.value--},y=(C,x)=>C.split("_")[0]===x.split("_")[0]&&C.split("_")[1]===x.split("_")[1],_=async()=>{const C=i.getSelectDeviceInfo(),x=await window.MeApi.wifi.getWifiName()||"";if(console.log(C),console.log(x),e.value===2){if(!a.value.canNext())return}else if(e.value===3){if(C.deviceWifi&&x&&!y(C.deviceWifi,x)){se(n("mobile.connect.connect_xtool_hot_spot_error"));return}}else if(e.value===0){const S=n(C.preLightColor);l.value=[n("mobile.connect.device_step_tip_one"),n("mobile.connect.device_step_tip_two",{preLightColor:S})]}else e.value===4&&(u.value=n(C.successLightColor));e.value++},L=()=>i.getSelectDeviceInfo().powerImg;return s({canBack:()=>e.value<=0?!1:(e.value===1&&(t.value=""),e.value--,!0)}),(C,x)=>{const S=O;return o(),f("div",ct,[r("div",at,[e.value==0?(o(),h(st,{key:0,onUpdateSelectedDevice:b})):e.value==1?(o(),h(Oe,{key:1,img:L(),"text-list":l.value},null,8,["img","text-list"])):e.value==2?(o(),h(Ye,{key:2,ref:R=>{R&&(a.value=R)}},null,512)):e.value==3?(o(),h(it,{key:3,ref:R=>{R&&(c.value=R)}},null,512)):e.value==4?(o(),h(Ve,{key:4,onFinish:V})):e.value==5?(o(),h(Ae,{key:5,"success-light-color":u.value,onRetry:$},null,8,["success-light-color"])):P("",!0)]),r("div",lt,[[4,5].includes(e.value)?P("",!0):(o(),h(S,{key:0,type:"primary",disabled:!d(v)||e.value===0&&!t.value,block:"",onClick:_},{default:k(()=>[D(w(d(T)),1)]),_:1},8,["disabled"]))])])}}});const _t=W(rt,[["__scopeId","data-v-68ac5cd3"]]),ht=I({__name:"NewDevice",setup(g){const s=N(),n=m(),i=m(!1);G(()=>s.wifiConfigState.isTransfer,()=>{i.value=s.wifiConfigState.isTransfer??!1});const a=()=>{n.value.canBack()||H.back()},c=()=>{H.back()};return(t,u)=>{const l=ce;return o(),f(E,null,[p(l,{"left-arrow":!i.value,title:t.$t("mobile.connect.add_new_device"),"right-text":i.value?t.$t("mobile.common.cancel"):"",onClickLeft:a,onClickRight:c},null,8,["left-arrow","title","right-text"]),p(d(_t),{ref_key:"newDeviceConnect",ref:n},null,512)],64)}}});export{ht as default};
