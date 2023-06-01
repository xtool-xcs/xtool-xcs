import{_ as D,B as T,u as q,n as O,bp as G,j as B,d as H}from"../assets/index-83a10b2e.js";import{e as J}from"./index-55948043.js";import{k as m,D as d,E as _,G as r,K as s,j as u,u as c,J as w,y as v,F as $,I as k,H as Z,f as y,r as Q,Z as A,q as W,M as X}from"./xcs-vue-family-70642f71.js";import{I as h}from"./index-e902da34.js";import{s as Y,f as b,a as ee,b as te}from"./firmware-update-failed@2x-64908d38.js";import{q as ne,a8 as oe}from"./xcs-canvas-5c2592d6.js";const se={class:"is-low"},ae={class:"text"},re=m({__name:"AppVersionLow",setup(t){return(e,p)=>{const n=h;return d(),_("section",se,[r("div",ae,s(e.$t("device.firmware.app_version_low")),1),u(n,{fit:"contain",position:"center",src:c(Y)},null,8,["src"])])}}});const ie=D(re,[["__scopeId","data-v-4b7a5fa2"]]),ce={class:"update-info"},le={class:"info-header"},de={class:"info-content"},pe={class:"info-content-box"},ue={class:"info-footer"},_e=m({__name:"ChangeLog",props:{langKey:null,changeLog:null,latestVersion:null,currentVersion:null},setup(t){const e=(p,n={})=>{const[C]=p.split("-");return n[C]||n.en||"empty"};return(p,n)=>(d(),_("section",ce,[r("div",le,s(p.$t("device.firmware.need_update_firmware",{latestVersion:t.latestVersion})),1),r("div",de,[r("div",pe,s(e(t.langKey,t.changeLog)),1)]),r("div",ue,s(p.$t("device.firmware.version")+t.currentVersion),1)]))}});const me=D(_e,[["__scopeId","data-v-8283b2b7"]]),fe={class:"update-info"},we={class:"text"},ge=m({__name:"Download",props:{state:null},setup(t){return(e,p)=>{const n=h;return d(),_("section",fe,[r("div",we,s(e.$t("device.firmware.downloading",{percent:t.state.downloadPercent})),1),u(n,{fit:"contain",position:"center",src:c(b)},null,8,["src"])])}}}),ve={class:"result"},he={class:"text"},ye={class:"text"},$e=["href"],ke=m({__name:"Failed",props:{supportUrl:null},setup(t){return(e,p)=>{const n=h;return d(),_("section",ve,[r("div",he,s(e.$t("device.firmware.failed")),1),u(n,{fit:"contain",position:"center",src:c(ee)},null,8,["src"]),r("div",ye,[r("a",{href:t.supportUrl,target:"_blank",rel:"noopener noreferrer"},s(e.$t("device.firmware.helper")),9,$e)])])}}}),Ce=m({__name:"Footer",props:{step:null,actions:null},setup(t){return(e,p)=>{const n=T;return t.step==="appVersionLow"?(d(),_($,{key:0},[u(n,{size:"small",onClick:t.actions.laterReminder},{default:w(()=>[v(s(e.$t("device.firmware.later_remind")),1)]),_:1},8,["onClick"]),u(n,{size:"small",type:"primary",tag:"a",target:"_blank",onClick:t.actions.updateAppNow},{default:w(()=>[v(s(e.$t("setting.download_update")),1)]),_:1},8,["onClick"])],64)):t.step==="changeLog"?(d(),_($,{key:1},[u(n,{size:"small",onClick:t.actions.laterReminder},{default:w(()=>[v(s(e.$t("device.firmware.later_remind")),1)]),_:1},8,["onClick"]),u(n,{size:"small",type:"primary",onClick:t.actions.updateNow},{default:w(()=>[v(s(e.$t("device.firmware.update_now")),1)]),_:1},8,["onClick"])],64)):t.step==="success"?(d(),k(n,{key:2,size:"small",type:"primary",onClick:t.actions.close},{default:w(()=>[v(s(e.$t("device.firmware.done")),1)]),_:1},8,["onClick"])):t.step==="failed"?(d(),_($,{key:3},[u(n,{size:"small",onClick:t.actions.close},{default:w(()=>[v(s(e.$t("device.firmware.cancel")),1)]),_:1},8,["onClick"]),u(n,{size:"small",type:"primary",onClick:t.actions.updateNow},{default:w(()=>[v(s(e.$t("device.firmware.retry")),1)]),_:1},8,["onClick"])],64)):(d(),_($,{key:4},[],64))}}}),Fe={class:"result"},be={class:"text"},xe=m({__name:"Success",setup(t){return(e,p)=>{const n=h;return d(),_("section",Fe,[r("div",be,s(e.$t("device.firmware.succeeded")),1),u(n,{fit:"contain",position:"center",src:c(te)},null,8,["src"])])}}}),Ue={class:"updating"},Ve={class:"text"},Le={class:"text"},Se=m({__name:"Updating",setup(t){return(e,p)=>{const n=h;return d(),_("section",Ue,[r("div",Ve,s(e.$t("device.firmware.updating")),1),r("div",Le,s(e.$t("device.firmware.updating_tip2")),1),u(n,{fit:"contain",position:"center",src:c(b)},null,8,["src"])])}}}),Ne={class:"updating"},Ie={class:"text"},Pe=m({__name:"Upload",props:{state:null},setup(t){return(e,p)=>{const n=h;return d(),_("section",Ne,[r("div",Ie,s(e.$t("device.firmware.uploading",{percent:t.state.uploadPercent})),1),u(n,{fit:"contain",position:"center",src:c(b)},null,8,["src"])])}}}),Be={class:"firmware-container"},Ae={class:"firmware-container-header"},De={class:"firmware-container-content"},ze={class:"firmware-container-footer"},qe=m({__name:"FirmwareNext",setup(t){const e=q(),p=O(),{t:n}=Z(),C=y(()=>e.connected),x={downloading:!1,downloadPercent:0,uploading:!1,updating:!1,uploadPercent:0},l=Q({...x}),z=y(()=>{var o,a,i;return(i=(a=(o=e.ext)==null?void 0:o.config)==null?void 0:a.supportUrls)==null?void 0:i.firmware}),K=y(()=>!l.downloading&&!l.uploading&&!l.updating),U=()=>{e.firmwareUpdating=!1,e.deviceFirmware.manualCheckUpdate=!1,e.deviceFirmware.show=!1,L()},V=y(()=>{const{appVersionLow:o}=e.deviceFirmware||{};return g(o?"appVersionLow":"changeLog"),e.showUpdateFirmware}),M=async o=>{const a=e.ext;if(a)return l.downloading=!0,a.downloadFirmware({url:[o],onDownloadProgress(i){const f=Math.floor(i.loaded/i.total*100);console.log(["=> download",f]),l.downloadPercent=f}}).finally(()=>{l.downloading=!1})},j=o=>{const a=e.ext;if(a)return l.uploading=!0,a.updateFirmware({data:o,onUploadProgress(i){const f=Math.floor(i.loaded/i.total*100);console.log(["=> upload",f]),l.uploadPercent=f}}).finally(()=>{l.uploading=!1})},E=()=>{const o=e.ext;if(!o)return;const{latestVersion:a}=e.deviceFirmware;return l.updating=!0,o.checkFirmwareUpdated(a,{delay:1e3,loopCount:20}).finally(()=>{l.updating=!1})},L=()=>{Object.assign(l,x)},S={close(){const o=e.ext;o&&(l.downloading?o.downloadCancelable():l.uploading&&o.uploadCancelable(),e.deviceFirmware.show=!1,e.deviceFirmware.manualCheckUpdate=!1,L())},laterReminder(){var o;G.add({id:((o=e.ext)==null?void 0:o.id)||"",version:e.deviceFirmware.latestVersion}),S.close()},async updateNow(){console.info(["=> 开始更新固件",e.deviceFirmware]);const o=e.deviceFirmware.downloadUrl;if(!C.value){B(n("device.firmware.empty_ext"));return}const{ext:a}=e;if(ne(a==null?void 0:a.apis.isDeviceBusy)){const i=await(a==null?void 0:a.apis.isDeviceBusy());if(oe(i)||i){B(n("device.firmware.busy_tips"));return}}if(o)try{g("download");const i=await M(o);g("upload"),await j(i),g("updating"),await E(),g("success")}catch(i){console.error(["=> 固件更新失败",i]),g("failed")}},retry(){return this.updateNow()},updateAppNow(){window.MeApi&&window.MeApi.app.updateAppVersion()}},N={changeLog:{title:"device.firmware.find_new_version",content:me},download:{content:ge},upload:{content:Pe},updating:{content:Se},success:{content:xe},failed:{content:ke},appVersionLow:{title:"device.firmware.find_new_version",content:ie},dSerialSwitch:{}},R=Object.keys(N),{current:I,goTo:g}=J(R),F=y(()=>V.value===!0?N[I.value]:null);return(o,a)=>{const i=H;return d(),k(i,{show:c(V),round:"",closeable:c(K),"close-on-click-overlay":!1,style:{width:"90%"},onClosed:U,onClickCloseIcon:U},{default:w(()=>{var f,P;return[r("section",Be,[r("section",Ae,[r("h3",null,s(o.$t(((f=c(F))==null?void 0:f.title)||"device.firmware.update")),1)]),r("section",De,[c(F)?(d(),k(A(c(F).content),W({key:0,"lang-key":c(p).langKey,"current-version":(P=c(e).info)==null?void 0:P.version,state:l,"support-url":c(z)},c(e).deviceFirmware),null,16,["lang-key","current-version","state","support-url"])):X("",!0)]),r("section",ze,[(d(),k(A(c(Ce)),{step:c(I),actions:S},null,8,["step"]))])])]}),_:1},8,["show","closeable"])}}});export{qe as default};
