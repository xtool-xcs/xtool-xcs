import{p as w}from"./use-style-1280d407.js";import{v as O,f as S,b as N,l as Q,k as P,g as X,ai as E,e as F,c as z,p as U,S as A,q as I,am as V}from"./xcs-vue-family-70642f71.js";import{r as Y,u as H}from"./light-87cce264.js";import{k as J,V as W,b as Z}from"./scrollbar-5a89bf25.js";import{b as B,i as K,f as ee,g as te}from"./space-5433d955.js";function se(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(r=>{if(r==="")return;const[n,s]=r.split(":");s===void 0?t[""]=n:t[n]=s}),t}function G(e,t){var r;if(e==null)return;const n=se(e);if(t===void 0)return n[""];if(typeof t=="string")return(r=n[t])!==null&&r!==void 0?r:n[""];if(Array.isArray(t)){for(let s=t.length-1;s>=0;--s){const i=t[s];if(i in n)return n[i]}return n[""]}else{let s,i=-1;return Object.keys(n).forEach(o=>{const a=Number(o);!Number.isNaN(a)&&t>=a&&a>=i&&(i=a,s=n[o])}),s}}function ne(e){var t;const r=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:n})=>n===O);return!!(r&&r.value===!1)}const re={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function ie(e){return`(min-width: ${e}px)`}const C={};function oe(e=re){if(!J)return S(()=>[]);if(typeof window.matchMedia!="function")return S(()=>[]);const t=N({}),r=Object.keys(e),n=(s,i)=>{s.matches?t.value[i]=!0:t.value[i]=!1};return r.forEach(s=>{const i=e[s];let o,a;C[i]===void 0?(o=window.matchMedia(ie(i)),o.addEventListener?o.addEventListener("change",d=>{a.forEach(f=>{f(d,s)})}):o.addListener&&o.addListener(d=>{a.forEach(f=>{f(d,s)})}),a=new Set,C[i]={mql:o,cbs:a}):(o=C[i].mql,a=C[i].cbs),a.add(n),o.matches&&a.forEach(d=>{d(o,s)})}),Q(()=>{r.forEach(s=>{const{cbs:i}=C[e[s]];i.has(n)&&i.delete(n)})}),S(()=>{const{value:s}=t;return r.filter(i=>s[i])})}const j=1,T=Y("n-grid"),L=1,ae={span:{type:[Number,String],default:L},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},me=P({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:ae,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:r,overflowRef:n,layoutShiftDisabledRef:s}=F(T),i=X();return{overflow:n,itemStyle:r,layoutShiftDisabled:s,mergedXGap:S(()=>w(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:o=L,privateShow:a=!0,privateColStart:d=void 0,privateOffset:f=0}=i.vnode.props,{value:_}=t,g=w(_||0);return{display:a?"":"none",gridColumn:`${d??`span ${o}`} / span ${o}`,marginLeft:f?`calc((100% - (${o} - 1) * ${g}) / ${o} * ${f} + ${g} * ${f})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:r,offset:n,mergedXGap:s}=this;return E("div",{style:{gridColumn:`span ${r} / span ${r}`,marginLeft:n?`calc((100% - (${r} - 1) * ${s}) / ${r} * ${n} + ${s} * ${n})`:""}},this.$slots)}return E("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),le={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},q=24,D="__ssr__",fe={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:q},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},he=P({name:"Grid",inheritAttrs:!1,props:fe,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:r}=H(e),n=/^\d+$/,s=N(void 0),i=oe((r==null?void 0:r.value)||le),o=B(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),a=S(()=>{if(o.value)return e.responsive==="self"?s.value:i.value}),d=B(()=>{var u;return(u=Number(G(e.cols.toString(),a.value)))!==null&&u!==void 0?u:q}),f=B(()=>G(e.xGap.toString(),a.value)),_=B(()=>G(e.yGap.toString(),a.value)),g=u=>{s.value=u.contentRect.width},v=u=>{Z(g,u)},x=N(!1),y=S(()=>{if(e.responsive==="self")return v}),p=N(!1),m=N();return z(()=>{const{value:u}=m;u&&u.hasAttribute(D)&&(u.removeAttribute(D),p.value=!0)}),U(T,{layoutShiftDisabledRef:A(e,"layoutShiftDisabled"),isSsrRef:p,itemStyleRef:A(e,"itemStyle"),xGapRef:f,overflowRef:x}),{isSsr:!K,contentEl:m,mergedClsPrefix:t,style:S(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:w(e.xGap),rowGap:w(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${d.value}, minmax(0, 1fr))`,columnGap:w(f.value),rowGap:w(_.value)}),isResponsive:o,responsiveQuery:a,responsiveCols:d,handleResize:y,overflow:x}},render(){if(this.layoutShiftDisabled)return E("div",I({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,r,n,s,i,o,a;this.overflow=!1;const d=ee(te(this)),f=[],{collapsed:_,collapsedRows:g,responsiveCols:v,responsiveQuery:x}=this;d.forEach(l=>{var $,h,c,R;if((($=l==null?void 0:l.type)===null||$===void 0?void 0:$.__GRID_ITEM__)!==!0)return;if(ne(l)){const b=V(l);b.props?b.props.privateShow=!1:b.props={privateShow:!1},f.push({child:b,rawChildSpan:0});return}l.dirs=((h=l.dirs)===null||h===void 0?void 0:h.filter(({dir:b})=>b!==O))||null;const k=V(l),M=Number((R=G((c=k.props)===null||c===void 0?void 0:c.span,x))!==null&&R!==void 0?R:j);M!==0&&f.push({child:k,rawChildSpan:M})});let y=0;const p=(t=f[f.length-1])===null||t===void 0?void 0:t.child;if(p!=null&&p.props){const l=(r=p.props)===null||r===void 0?void 0:r.suffix;l!==void 0&&l!==!1&&(y=(s=(n=p.props)===null||n===void 0?void 0:n.span)!==null&&s!==void 0?s:j,p.props.privateSpan=y,p.props.privateColStart=v+1-y,p.props.privateShow=(i=p.props.privateShow)!==null&&i!==void 0?i:!0)}let m=0,u=!1;for(const{child:l,rawChildSpan:$}of f){if(u&&(this.overflow=!0),!u){const h=Number((a=G((o=l.props)===null||o===void 0?void 0:o.offset,x))!==null&&a!==void 0?a:0),c=Math.min($+h,v);if(l.props?(l.props.privateSpan=c,l.props.privateOffset=h):l.props={privateSpan:c,privateOffset:h},_){const R=m%v;c+R>v&&(m+=v-R),c+m+y>g*v?u=!0:m+=c}}u&&(l.props?l.props.privateShow!==!0&&(l.props.privateShow=!1):l.props={privateShow:!1})}return E("div",I({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[D]:this.isSsr||void 0},this.$attrs),f.map(({child:l})=>l))};return this.isResponsive&&this.responsive==="self"?E(W,{onResize:this.handleResize},{default:e}):e()}});export{me as N,he as a};
