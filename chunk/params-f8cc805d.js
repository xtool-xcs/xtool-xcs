var u=Object.defineProperty;var x=(s,e,t)=>e in s?u(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var a=(s,e,t)=>(x(s,typeof e!="symbol"?e+"":e,t),t);import{bw as y,bI as R,ah as D,bJ as M,bK as l}from"../assets/index-83a10b2e.js";import{m}from"./xcs-canvas-5c2592d6.js";const{LASER_CYLINDER:v}=y,{ROLLER:f,CATCH:S}=R,A=s=>{const{mode:e,data:t}=s,i={[v]:()=>{const{rotaryAttachmentType:o=f,perimeter:c}=t.LASER_CYLINDER;return{[f]:.6,[S]:(()=>{if(m(c)&&c!==0)return-Number((128/c).toFixed(2))})()}[o]},LASER_CONVEYOR_FEEDER:()=>{const{perimeter:o}=t.LASER_CONVEYOR_FEEDER;return m(o)?-Number((128/o).toFixed(2)):null}};return i[e]&&i[e]()};class L{constructor(e){a(this,"isWalkBorder",!1);a(this,"deviceData",{mode:void 0,data:void 0,displays:void 0});a(this,"processingArea",{width:0,height:0,key:""});a(this,"config");a(this,"deviceInfo",{});a(this,"totalSize",{x:0,y:0,width:0,height:0});const{config:t,deviceInfo:i}=e;this.config=t,this.deviceInfo=i}parse(){var n,d,h;console.log("basic params");const{width:e,offsetX:t=0,offsetY:i=0,startX:o=0,height:c,angle:r=0}=this.processingArea||{width:0,height:0},p=r%180!==0,g=((n=this.config.process.preview)==null?void 0:n.extendDirection)||{},E=this.config.process.backlash||[],b=D.isNumber(this.config.process.buildParams.accel)?this.config.process.buildParams.accel:0;return{processMode:(d=this.deviceData)==null?void 0:d.mode,maxPower:1e3,printSize:this.totalSize,size:{w:e,h:c},primaryOffset:{x:Math.abs(t||0),y:Math.abs(i||0)},offset:{x:Math.abs(t||0),y:Math.abs(i||0)},isVertical:p,start:{x:o,y:0},origin:{x:this.totalSize.x+Math.abs(t||0),y:this.totalSize.y+Math.abs(i||0)},id:0,maxGcodeLength:2048,funcName:M.plane,funcArgs:[],keys:[l.x,l.y],rotateMultiple:A(this.deviceData),extendDirection:g[(h=this.deviceData)==null?void 0:h.mode],backlashConfig:E,...this.config.process.buildParams,accel:b}}}export{L as B,A as c};
