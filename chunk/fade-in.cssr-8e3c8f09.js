import{f as s}from"./xcs-vue-family-70642f71.js";import{a as o,l as f}from"./light-87cce264.js";function l(t,n){return s(()=>{for(const i of n)if(t[i]!==void 0)return t[i];return t[n[n.length-1]]})}const{cubicBezierEaseInOut:r}=f;function $({name:t="fade-in",enterDuration:n="0.2s",leaveDuration:i="0.2s",enterCubicBezier:a=r,leaveCubicBezier:e=r}={}){return[o(`&.${t}-transition-enter-active`,{transition:`all ${n} ${a}!important`}),o(`&.${t}-transition-leave-active`,{transition:`all ${i} ${e}!important`}),o(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0}),o(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`,{opacity:1})]}export{$ as f,l as u};