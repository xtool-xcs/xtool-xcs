import{k as b,f as p,ai as a,T as z}from"./xcs-vue-family-70642f71.js";import{c as S,a as m,b as c,d as u,u as C,e as f,f as x,g as k}from"./light-87cce264.js";import{f as $,u as T}from"./fade-in.cssr-8e3c8f09.js";import{p as w}from"./use-style-1280d407.js";import{N}from"./loading-b06a4834.js";const R=n=>{const{opacityDisabled:r,heightTiny:e,heightSmall:t,heightMedium:l,heightLarge:s,heightHuge:i,primaryColor:o,fontSize:d}=n;return{fontSize:d,textColor:o,sizeTiny:e,sizeSmall:t,sizeMedium:l,sizeLarge:s,sizeHuge:i,color:o,opacitySpinning:r}},B={name:"Spin",common:S,self:R},L=B,P=m([m("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",{position:"relative"},[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[$()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[u("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[u("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),V={small:20,medium:18,large:16},W=Object.assign(Object.assign({},f.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),M=b({name:"Spin",props:W,setup(n){const{mergedClsPrefixRef:r,inlineThemeDisabled:e}=C(n),t=f("Spin","-spin",P,L,n,r),l=p(()=>{const{size:i}=n,{common:{cubicBezierEaseInOut:o},self:d}=t.value,{opacitySpinning:h,color:g,textColor:y}=d,v=typeof i=="number"?w(i):d[x("size",i)];return{"--n-bezier":o,"--n-opacity-spinning":h,"--n-size":v,"--n-color":g,"--n-text-color":y}}),s=e?k("spin",p(()=>{const{size:i}=n;return typeof i=="number"?String(i):i[0]}),l,n):void 0;return{mergedClsPrefix:r,compitableShow:T(n,["spinning","show"]),mergedStrokeWidth:p(()=>{const{strokeWidth:i}=n;if(i!==void 0)return i;const{size:o}=n;return V[typeof o=="number"?"medium":o]}),cssVars:e?void 0:l,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var n,r;const{$slots:e,mergedClsPrefix:t,description:l}=this,s=e.icon&&this.rotate,i=(l||e.description)&&a("div",{class:`${t}-spin-description`},l||((n=e.description)===null||n===void 0?void 0:n.call(e))),o=e.icon?a("div",{class:[`${t}-spin-body`,this.themeClass]},a("div",{class:[`${t}-spin`,s&&`${t}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),i):a("div",{class:[`${t}-spin-body`,this.themeClass]},a(N,{clsPrefix:t,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),i);return(r=this.onRender)===null||r===void 0||r.call(this),e.default?a("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},a("div",{class:[`${t}-spin-content`,this.compitableShow&&`${t}-spin-content--spinning`]},e),a(z,{name:"fade-in-transition"},{default:()=>this.compitableShow?o:null})):o}});export{M as N};
