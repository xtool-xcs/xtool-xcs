import{b7 as B}from"../assets/index-83a10b2e.js";import{k as y,H as N,f as l,r as P,w as T,D as w,E as $,u as a,I as A,J as D,y as M,K as b,M as C,j as E,F as H}from"./xcs-vue-family-70642f71.js";import{L as f}from"./index-e7929b72.js";import{a as O}from"./headers-069f588a.js";import"./index-55948043.js";import"./xcs-canvas-5c2592d6.js";import"./devicedata-18553816.js";import"./params-f8cc805d.js";import"./urlparam-4b6ed041.js";import"./light-87cce264.js";import"./light-28752129.js";const R=y({__name:"WalkBorderSettings",props:{deviceInfo:null,ext:null},emits:["setDeviceInfo"],setup(g,{expose:u,emit:_}){var m,p,c,d;const t=g,{t:i}=N(),v=l(()=>"true"),o=P({power:((p=(m=t.deviceInfo)==null?void 0:m.walkBorderParams)==null?void 0:p.power)||t.ext.walkBorderParams.power,speed:((d=(c=t.deviceInfo)==null?void 0:c.walkBorderParams)==null?void 0:d.speed)||t.ext.walkBorderParams.speed});T(()=>t.deviceInfo.power,(e,r)=>{e!==r&&(o.power=t.ext.walkBorderParams.power,o.speed=t.ext.walkBorderParams.speed)});const L=`${i("device.process.framing_speed")} (mm/s)`,k=`${i("device.process.framing_power")} (%)`,n=[{name:"speed",label:L,widget:"slider",widgetAttrs:{formatTooltip(e){return`${e}mm/s`},min:80,max:180,digits:0}}],I=[{name:"power",label:k,widget:"slider",widgetAttrs:{formatTooltip(e){return`${e}%`},min:1,max:10,digits:0},desc:"device.process.framing_power_tip"}],x=l(()=>t.deviceInfo.gMode===f.LOW_LIGHT?[...n,...I]:n),h=async(...e)=>{const[r,s]=e;t.deviceInfo.gMode===f.LOW_LIGHT||(o.power=0),o[r]=s,_("setDeviceInfo",o)};return u({values:o}),(e,r)=>{const s=B;return w(),$(H,null,[a(v)?C("",!0):(w(),A(a(O),{key:0},{default:D(()=>[M(b(e.$t("device.process.framing_settings")),1)]),_:1})),E(s,{style:{width:"100%"},items:a(x),values:o,handler:h},null,8,["items","values"])],64)}}});export{R as default};