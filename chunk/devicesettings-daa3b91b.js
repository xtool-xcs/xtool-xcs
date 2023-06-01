import{bc as T}from"../assets/index-83a10b2e.js";import"./setting.vue_vue_type_style_index_0_lang-315c55c2.js";import{_ as Y}from"./setting.vue_vue_type_script_setup_true_lang-0ee96bfb.js";import{k as X,H as q,f as S,b as H,w as J,D as K,I as Q,a0 as Z,a1 as ee,u as M}from"./xcs-vue-family-70642f71.js";import{d as te,b as ie}from"./xcs-canvas-5c2592d6.js";import{u as se}from"./use-message-cd8b9f19.js";import"./index-55948043.js";import"./modal-c96d5b67.js";import"./button-00b27872.js";import"./light-87cce264.js";import"./space-5433d955.js";import"./use-style-1280d407.js";import"./loading-b06a4834.js";import"./scrollbar-5a89bf25.js";import"./fade-in.cssr-8e3c8f09.js";import"./image-bad03660.js";import"./spin-afa417d1.js";import"./text-3b674000.js";import"./light-28752129.js";import"./checkbox-9495194d.js";import"./inputnumber-fff11604.js";import"./headers-069f588a.js";const Fe=X({__name:"DeviceSettings",props:{show:{type:Boolean},laserFaq:null,info:null,ext:null,gtmFlameAlarm:{type:Function},gtmLimitSwitch:{type:Function},gtmMoveStop:{type:Function},gtmPositionMode:{type:Function},exportGcode:{type:Function},setExtSettingParams:{type:Function},setDeviceInfo:{type:Function},exportLog:{type:Function},checkUpdateFirmware:{type:Function},setDeviceName:{type:Function},setFillLight:{type:Function},setFlameAlarm:{type:Function},onShowMessage:{type:Function},setOfflineModeEnable:{type:Function}},emits:["close","showWifiConfig","showConnector"],setup(P,{emit:u}){const i=P,{t}=q(),g=()=>{u("close")},F=(s,r,c)=>{if(s){i.onShowMessage("info","device.process.device_is_working");return}return r(c)},D=se(),l=(s,r)=>i.ext.isWifiConnect?{params:{cmd:`${r}${s}`}}:s,v=()=>{const s=i.ext.canvasId,r=i.ext.dataSource.data[s].mode,{current:c}=i.ext.getCurrentArea(r);i.ext.emit(T.UPDATE_PROCESSING_AREA,{canvasId:s,option:{...c}})},I=500,L=(s,r)=>{var o;const c=l(`X${s} Y${r}`,"M98");(o=i.ext.apis)==null||o.setRedCrossOffset(c)},w=S(()=>{var s;return((s=i.info)==null?void 0:s.name)||"-"}),p=H(w.value),y=te(L,I),k=S(()=>{const{show:s,info:r,laserFaq:c,ext:o}=i,{id:A,cover:W,name:b,snCode:z,version:$,power:f,gMode:m,redCrossOffsetX:h,type:O,ip:_,redCrossOffsetY:x,flameAlarmSensitivity:V,moveStop:B,limitSwitch:G,redLight:N,isInProcessing:U}=r,E={vertical:!1,align:"center",justify:"space-between"},R=`${o.isWifiConnect?t("device.setting.wifi_connected"):t("device.setting.wifi_not_connected")} ${_!=="0.0.0.0"?`- ${_}`:""}`,j=N?[{id:"gMode",label:t("device.setting.position_mode"),type:"radioGroup",value:m,attrs:{options:[{label:t("device.setting.red_dot"),value:0}],onUpdateValue:e=>{var n,d;const a=l("S0 N0","M9");i.setDeviceInfo({gMode:e}),i.ext.changeWalkBorderParams(),v(),e?(n=o.apis)==null||n.toLowLightMode():((d=o.apis)==null||d.toRedCrossMode(),o.apis.setLaserPower(a)),i.gtmPositionMode({positionMode:e})}}}]:[{id:"gMode",label:t("device.setting.position_mode"),type:"radioGroup",value:m,attrs:{options:[{label:t("device.setting.red_cross"),value:0},{label:t("device.setting.laser_spot"),value:1}],onUpdateValue:e=>{var a,n;i.setDeviceInfo({gMode:e}),i.ext.changeWalkBorderParams(),v(),e?(a=o.apis)==null||a.toLowLightMode():((n=o.apis)==null||n.toRedCrossMode(),i.setExtSettingParams({isLowLight:!1}),o.setLowLight({isLowLight:!1,lightPower:3})),i.gtmPositionMode({positionMode:e})}}},{id:"redCrossOffset",label:t("device.setting.red_cross_offset"),type:"group",children:[{id:"redCrossOffsetX",type:"number",value:h,attrs:{size:"small",showButton:!1,disabled:m===1,prefix:"X",suffix:"mm",min:-5,max:5,fractionDigits:1,step:.1,onUpdateValue:e=>{i.setDeviceInfo({redCrossOffsetX:e}),y(e,x)}}},{id:"redCrossOffsetY",type:"number",value:x,attrs:{size:"small",showButton:!1,disabled:m===1,prefix:"Y",suffix:"mm",min:-5,max:5,step:.1,fractionDigits:1,onUpdateValue:e=>{i.setDeviceInfo({redCrossOffsetY:e}),y(h,e)}}}]},{id:"flameAlarmSensitivity",label:t("device.setting.flame_alarm"),type:"radioGroup",value:V,attrs:{options:[{label:t("device.setting.high_sensitivity"),value:1},{label:t("device.setting.low_sensitivity"),value:2},{label:t("device.setting.not_show_sensitivity_again"),value:3}],onUpdateValue:e=>{var n;i.setDeviceInfo({flameAlarmSensitivity:e});const a=l(`N${e}`,"M309");(n=o.apis)==null||n.setFlameAlarmSensitivity(a),i.gtmFlameAlarm({extId:A,flameAlarm:e})}}}];return{show:s,close:g,info:{url:W,name:b,button:{label:t("device.setting.change"),id:"changeDevice",action:()=>{g(),u("showConnector")}}},list:[{id:"base",label:t("device.setting.basic"),formData:[{id:"name",label:t("device.setting.name"),type:"input",value:p.value,attrs:{size:"small",maxlength:15,onUpdateValue:e=>{p.value=e},onBlur:e=>{var n;if(ie(p.value.trim())){p.value=b,D.error(t("device.setting.name_is_empty"));return}const a=l(`${JSON.stringify(e.target.value)}`,"M100");(n=o.apis)==null||n.setDeviceName(a),i.setDeviceInfo({name:e.target.value})}}},{id:"powerGroup",label:t("device.setting.model"),type:"group",spaceProps:{justify:"space-between"},children:[{id:"power",type:"text",value:f>0?`${f} W`:t("device.setting.unrecognized_laser_model")},{id:"unrecognizedLaser",type:"button",label:t("device.setting.unrecognized_laser_faq"),hidden:f>0,attrs:{class:"unrecognized-laser-button",size:"tiny",tag:"a",text:!0,target:"_blank",href:c}}]},{id:"snCode",label:t("device.setting.serial_num"),type:"text",value:z},{id:"firmwareVersionGroup",label:t("device.setting.firmware_version"),type:"group",spaceProps:{justify:"space-between"},children:[{id:"version",type:"text",value:$},{id:"firmwareVersionButton",type:"button",label:t("device.setting.check_firmware"),attrs:{size:"small",style:{minWidth:"72px"},onClick:i.checkUpdateFirmware}}]},{id:"wifiConfigGroup",label:t("device.connect.wifi_config"),type:"group",spaceProps:{justify:"space-between"},children:[{id:"wifiConnect",type:"text",value:R},{id:"wifiConfigButton",type:"button",hidden:{}.VITE_PAD,label:t("device.connect.wifi_config_button_label"),attrs:{size:"small",style:{minWidth:"72px"},disabled:O==="WIFI",onClick:()=>{u("showWifiConfig")}}}]}]},{id:"workParam",label:t("device.setting.work_param"),formData:[...j,{id:"moveStop",label:t("device.setting.stop_move"),type:"switch",value:!!B,attrs:{size:"small",justify:"space-between",onUpdateValue:e=>{var d,C;i.setDeviceInfo({moveStop:+e});const a=l(`N${+e}`,"M318"),n=l(`N${+e}`,"M317");(d=o.apis)==null||d.setMoveStop(a),(C=o.apis)==null||C.setTiltStop(n),i.gtmMoveStop({moveStop:e})}}},{id:"limitSwitch",label:t("device.setting.limit"),type:"switch",value:!!G,attrs:{size:"small",justify:"space-between",onUpdateValue:e=>{var n;i.setDeviceInfo({limitSwitch:+e});const a=l(`N${+e}`,"M319");(n=o.apis)==null||n.setLimitSwitch(a),i.gtmLimitSwitch({limitSwitch:e})}}},{id:"workLogsGroup",label:t("device.setting.export_gcode"),type:"buttonGroup",attrs:{spaceProps:E,options:[{id:"workLogsButton",type:"button",label:t("device.common.export"),attrs:{size:"small",onClick:()=>{const e=U.value&&!o.isWifiConnect;return F(e,i.exportGcode)}}}]}}]}]}});return J(()=>w.value,s=>{p.value=s}),(s,r)=>(K(),Q(M(Y),Z(ee(M(k))),null,16))}});export{Fe as default};