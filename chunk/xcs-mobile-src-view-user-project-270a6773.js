import{t as pe,v as E,w as U,x as fe,y as ge,f as he,e as _e,M as ve,j as V,z as be,b as ye,h as we,A as je,E as ke,B as xe,m as Pe,a as Fe,F as Se,_ as Te}from"../assets/index-83a10b2e.js";import{E as Ce}from"./index-6a076302.js";import{L as Ie}from"./index-606f09ea.js";import{S as Le}from"./index-8a9ed5a6.js";import{I as Me}from"./index-e902da34.js";import{T as Be}from"./index-ef61d1b8.js";import{N as De}from"./index-36e5bf24.js";import{k as J,j as a,y as K,H as Xe,b as d,c as Ae,n as He,E as X,u as m,J as h,I as z,G as j,$ as Ne,F as $,a5 as Ee,D as _,L as O,K as Y,s as Ue}from"./xcs-vue-family-70642f71.js";import{u as Ve}from"./systemback-e5f1562f.js";import"./index-55948043.js";import"./xcs-canvas-5c2592d6.js";const[ze,s]=pe("card"),$e={tag:String,num:U,desc:String,thumb:String,title:String,price:U,centered:Boolean,lazyLoad:Boolean,currency:fe("¥"),thumbLink:String,originPrice:U};var Re=J({name:ze,props:$e,emits:["clickThumb"],setup(c,{slots:t,emit:T}){const k=()=>{if(t.title)return t.title();if(c.title)return a("div",{class:[s("title"),"van-multi-ellipsis--l2"]},[c.title])},v=()=>{if(t.tag||c.tag)return a("div",{class:s("tag")},[t.tag?t.tag():a(Be,{mark:!0,type:"primary"},{default:()=>[c.tag]})])},x=()=>t.thumb?t.thumb():a(Me,{src:c.thumb,fit:"cover",width:"100%",height:"100%",lazyLoad:c.lazyLoad},null),P=()=>{if(t.thumb||c.thumb)return a("a",{href:c.thumbLink,class:s("thumb"),onClick:r=>T("clickThumb",r)},[x(),v()])},F=()=>{if(t.desc)return t.desc();if(c.desc)return a("div",{class:[s("desc"),"van-ellipsis"]},[c.desc])},g=()=>{const r=c.price.toString().split(".");return a("div",null,[a("span",{class:s("price-currency")},[c.currency]),a("span",{class:s("price-integer")},[r[0]]),K("."),a("span",{class:s("price-decimal")},[r[1]])])};return()=>{var r,b,S;const u=t.num||E(c.num),C=t.price||E(c.price),I=t["origin-price"]||E(c.originPrice),L=u||C||I||t.bottom,A=C&&a("div",{class:s("price")},[t.price?t.price():g()]),H=I&&a("div",{class:s("origin-price")},[t["origin-price"]?t["origin-price"]():`${c.currency} ${c.originPrice}`]),M=u&&a("div",{class:s("num")},[t.num?t.num():`x${c.num}`]),y=t.footer&&a("div",{class:s("footer")},[t.footer()]),B=L&&a("div",{class:s("bottom")},[(r=t["price-top"])==null?void 0:r.call(t),A,H,M,(b=t.bottom)==null?void 0:b.call(t)]);return a("div",{class:s()},[a("div",{class:s("header")},[P(),a("div",{class:s("content",{centered:c.centered})},[a("div",null,[k(),F(),(S=t.tags)==null?void 0:S.call(t)]),B])]),y])}}});const qe=ge(Re);const Ge=""+new URL("../assets/project-empty-08023ae3.png",import.meta.url).href,R=""+new URL("../assets/project-thumb-4eb04e4a.png",import.meta.url).href,Oe={key:0,class:"user-project-list"},Ye={class:"project-thumb"},Je={class:"operate-group"},Ke={class:"open-system-file"},We=J({__name:"UserProject",setup(c){const{t}=Xe(),T=Ee(),k=d([]),v=d(!1),x=d(!1),P=d(!1),F=d(!0),g=d(!1),r=d("");let b;const S=d(null),u=he(),C=_e(),I={async mounted(e,o){var l,p;const n=o.value;if(n==="projectImg"){e.src=R;return}try{const f=await((p=(l=window.MeApi)==null?void 0:l.fileHelper)==null?void 0:p.read2Str(n));f?e.src=f:e.src=R}catch(f){console.log(f),e.src=R}}},L=d(0),A=d(e=>e.replace(/[#%^\\/]/g,"")),H=d([{color:"#FF7245",icon:"project-copy",text:t("editor.context_menu.copy"),onClick:e=>y(1,e)},{color:"#9E42FF",icon:"project-share",text:t("mobile.projects.share"),onClick:e=>y(2,e)},{color:"#0A7AFF",icon:"project-rename",text:t("canvas.rename"),onClick:e=>y(3,e)},{color:"#FF3B30",icon:"project-delete",text:t("editor.context_menu.delete"),onClick:e=>y(4,e)}]),M=async e=>{if(console.log("[ filePath ] >",e.path),e.path){const o=we({message:t("device.status.loading"),overlay:!0,duration:0});try{await u.openProject({file:e.path,fileName:e.name,fileId:e.fileId}),u.setEditStatusProjectPath(e.fileId),u.setBackStatusProjects(!0),T.push({path:"process-setting",query:{refresh:1,path:e.path,fileName:e.name,fileId:e.fileId}})}catch(n){console.log("[ error ] >",n),u.showNotSupportedFileDialog(!0,"mobile.projects.open_xcs_file_error")}finally{o.close()}}},y=(e,o)=>{switch(L.value=e,e){case 0:M(o);break;case 1:te(o);break;case 2:oe(o.fileId);break;case 3:ne(o);break;case 4:le(o);break}};Ae(()=>{u.setEditStatusProjectPath(""),u.setBackStatusProjects(!1),ve.destroyAll(),C.resetSelectedAttrs(),u.reset(),Ve(()=>(B(),!0))});const B=()=>{u.showNotSupportedFileDialog(!1),je(),T.replace("home")},W=async()=>{var n,l;g.value=!0;let e="";try{e=await Q(3)}catch(p){console.log("[ openXcsFile error ] > ",p);return}if(!e){g.value=!1;return}console.log("[ import xcsFilePath ] > ",e);const o=e==null?void 0:e.endsWith(".xcs");if(e&&!o){const p=".xcs";ke({title:t("device.modal.tip"),message:t("mobile.projects.dialog_open_file_error",{fileType:p}),confirmButtonText:t("common.msg.ok")}),g.value=!1;return}await((l=(n=window.MeApi)==null?void 0:n.fileHelper)==null?void 0:l.importXCS("",e)),e&&o&&D(),g.value=!1},Q=async e=>{var o;return await((o=window.MeApi)==null?void 0:o.fileHelper.openDialog({type:e}))},Z=e=>{const o=new Date(e),n=o.getFullYear()+"/",l=(o.getMonth()+1<10?"0"+(o.getMonth()+1):o.getMonth()+1)+"/",p=(o.getDate()<10?"0"+o.getDate():o.getDate())+" ",f=(o.getHours()<10?"0"+o.getHours():o.getHours())+":",N=o.getMinutes()<10?"0"+o.getMinutes():o.getMinutes();return n+l+p+f+N},ee=async()=>{var e;return await((e=window.MeApi)==null?void 0:e.fileHelper.getAllXcsFile())},q=async()=>{let e=[],o=[];try{e=await ee()||[]}catch(n){console.log("[ getAllXcsFiles error ] > ",n)}console.log("[ xcsFileList ] > ",e);for(let n=0;n<e.length;n++)o.push({path:e[n].path,time:Z(parseInt(e[n].time)),fileId:e[n].fileId,name:e[n].name,shot:e[n].shot?e[n].shot:"projectImg"});k.value=o,k.value.length>0?F.value=!0:F.value=!1,v.value=!1,x.value=!0,L.value===1&&window.scrollTo(0,0)},D=()=>{x.value=!1,v.value=!0,q()},te=async e=>{var n;console.log("[ copyXcsProject ] > ",e.path),await((n=window.MeApi)==null?void 0:n.fileHelper.copyXCS(e.fileId))&&(V(t("mobile.projects.copy_success")),D())},oe=async e=>{console.log("[ shareXcsProject ] > ",e);const o=be(e,()=>{});console.log("[ shareXcsProject success ] > ",o)},ne=async e=>{b=e,r.value=e.name,P.value=!0,await He(),setTimeout(()=>{S.value.focus()},1)},ae=async(e,o)=>{var l;if(!e||e.length>50||!o)return;console.log("[ renameXcsFile ] > ",o.path,e);const n=await((l=window.MeApi)==null?void 0:l.fileHelper.renameXCS(o.fileId,e));G(),n&&(V(t("mobile.projects.rename_success")),D())},ce=()=>{ae(r.value,b)},se=()=>{G()},G=()=>{r.value="",b=null},re=async e=>{var n;console.log("[ deleteXcsFilePath ] > ",e.path),await((n=window.MeApi)==null?void 0:n.fileHelper.deleteXCS(e.fileId))&&(V(t("mobile.projects.delete_success")),D())},le=e=>{ye({title:t("mobile.projects.dialog_delete_title"),message:t("mobile.projects.dialog_delete_msg"),confirmButtonText:t("common.msg.ok"),cancelButtonText:t("common.msg.cancel")}).then(()=>{re(e)})};return(e,o)=>{const n=De,l=qe,p=Fe,f=xe,N=Le,ie=Ie,ue=Ce,de=Se,me=Pe;return _(),X($,null,[a(n,{fixed:"",placeholder:"","left-arrow":"",title:m(t)("mobile.common.my_project"),onClickLeft:B},null,8,["title"]),F.value?(_(),X("div",Oe,[a(ie,{loading:v.value,"onUpdate:loading":o[0]||(o[0]=i=>v.value=i),finished:x.value,"loading-text":m(t)("common.msg.project_loading"),"finished-text":m(t)("mobile.material.no_more"),onLoad:q},{default:h(()=>[(_(!0),X($,null,O(k.value,i=>(_(),z(N,{key:i.path},{right:h(()=>[j("div",Je,[(_(!0),X($,null,O(H.value,w=>(_(),z(f,{key:w,square:"",color:w.color,class:"operate-button",onClick:Qe=>w.onClick(i)},{default:h(()=>[j("div",null,[a(p,{name:w.icon,size:"20px",color:"#ffffff"},null,8,["name"]),j("div",null,Y(w.text),1)])]),_:2},1032,["color","onClick"]))),128))])]),default:h(()=>[a(l,{desc:i.time,title:i.name,class:"user-project-card",onClick:w=>M(i)},{thumb:h(()=>[Ue(j("img",Ye,null,512),[[I,i.shot]])]),_:2},1032,["desc","title","onClick"])]),_:2},1024))),128))]),_:1},8,["loading","finished","loading-text","finished-text"])])):(_(),z(ue,{key:1,image:m(Ge),"image-size":[231,150],description:m(t)("device.status.empty")},null,8,["image","description"])),j("div",Ke,[a(f,{type:"primary",block:"",loading:g.value,"loading-text":m(t)("mobile.projects.open_system_file"),onClick:W},{default:h(()=>[K(Y(m(t)("mobile.projects.open_system_file")),1)]),_:1},8,["loading","loading-text"])]),a(me,{show:P.value,"onUpdate:show":o[2]||(o[2]=i=>P.value=i),title:m(t)("mobile.projects.rename_title"),"show-cancel-button":"","lock-scroll":!0,"confirm-button-disabled":!r.value,"confirm-button-text":m(t)("common.msg.ok"),"cancel-button-text":m(t)("common.msg.cancel"),onTouchmove:o[3]||(o[3]=Ne(()=>{},["prevent"])),onConfirm:ce,onCancel:se},{default:h(()=>[j("div",null,[a(de,{ref_key:"autoFocus",ref:S,modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=i=>r.value=i),modelModifiers:{trim:!0},class:"project-new-name-input",maxlength:50,formatter:A.value,placeholder:m(t)("component.input.placeholder_file"),clearable:""},null,8,["modelValue","formatter","placeholder"])])]),_:1},8,["show","title","confirm-button-disabled","confirm-button-text","cancel-button-text"])],64)}}});const ut=Te(We,[["__scopeId","data-v-95a3bae1"]]);export{ut as default};
