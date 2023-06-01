var Ka=Object.defineProperty;var Ya=(r,e,t)=>e in r?Ka(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Fe=(r,e,t)=>(Ya(r,typeof e!="symbol"?e+"":e,t),t);import{b as Ja,c as ja}from"../chunk/index-55948043.js";import{k as Qa,b as Os,c as qa,o as $a,I as eo,J as to,u as no,D as io,G as so,z as ro}from"../chunk/xcs-vue-family-70642f71.js";import{N as ao}from"../chunk/spin-afa417d1.js";import"../chunk/light-87cce264.js";import"../chunk/xcs-canvas-5c2592d6.js";import"../chunk/fade-in.cssr-8e3c8f09.js";import"../chunk/use-style-1280d407.js";import"../chunk/loading-b06a4834.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ws="144",an={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ln={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oo=0,ks=1,lo=2,ma=1,co=2,si=3,On=0,vt=1,Pt=2,qt=0,Zn=1,Ks=2,Ys=3,Js=4,uo=5,Nn=100,ho=101,fo=102,js=103,Qs=104,po=200,mo=201,go=202,xo=203,ga=204,xa=205,_o=206,bo=207,yo=208,vo=209,Mo=210,So=0,wo=1,To=2,Rs=3,Lo=4,Co=5,Ro=6,Eo=7,_a=0,Go=1,Po=2,Ut=0,Io=1,Ao=2,Xo=3,Do=4,Fo=5,ba=300,kn=301,Kn=302,Es=303,Gs=304,Zi=306,Ps=1e3,Lt=1001,Is=1002,ot=1003,qs=1004,$s=1005,_t=1006,Wo=1007,Bi=1008,gn=1009,zo=1010,Ho=1011,ya=1012,Vo=1013,dn=1014,un=1015,di=1016,No=1017,Uo=1018,Bn=1020,Zo=1021,Bo=1022,It=1023,Oo=1024,ko=1025,pn=1026,Yn=1027,Ko=1028,Yo=1029,Jo=1030,jo=1031,Qo=1033,ji=33776,Qi=33777,qi=33778,$i=33779,er=35840,tr=35841,nr=35842,ir=35843,qo=36196,sr=37492,rr=37496,ar=37808,or=37809,lr=37810,cr=37811,dr=37812,ur=37813,hr=37814,fr=37815,pr=37816,mr=37817,gr=37818,xr=37819,_r=37820,br=37821,yr=36492,xn=3e3,He=3001,$o=3200,el=3201,va=0,tl=1,Vt="srgb",hn="srgb-linear",es=7680,nl=519,vr=35044,Mr="300 es",As=1035;class vn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sr=1234567;const oi=Math.PI/180,Hi=180/Math.PI;function jn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[r&255]+qe[r>>8&255]+qe[r>>16&255]+qe[r>>24&255]+"-"+qe[e&255]+qe[e>>8&255]+"-"+qe[e>>16&15|64]+qe[e>>24&255]+"-"+qe[t&63|128]+qe[t>>8&255]+"-"+qe[t>>16&255]+qe[t>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function it(r,e,t){return Math.max(e,Math.min(t,r))}function zs(r,e){return(r%e+e)%e}function il(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function sl(r,e,t){return r!==e?(t-r)/(e-r):0}function li(r,e,t){return(1-t)*r+t*e}function rl(r,e,t,n){return li(r,e,1-Math.exp(-t*n))}function al(r,e=1){return e-Math.abs(zs(r,e*2)-e)}function ol(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ll(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function cl(r,e){return r+Math.floor(Math.random()*(e-r+1))}function dl(r,e){return r+Math.random()*(e-r)}function ul(r){return r*(.5-Math.random())}function hl(r){r!==void 0&&(Sr=r);let e=Sr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fl(r){return r*oi}function pl(r){return r*Hi}function Xs(r){return(r&r-1)===0&&r!==0}function ml(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vi(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gl(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),d=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*d,c*h,c*f,a*l);break;case"YZY":r.set(c*f,a*d,c*h,a*l);break;case"ZXZ":r.set(c*h,c*f,a*d,a*l);break;case"XZX":r.set(a*d,c*g,c*m,a*l);break;case"YXY":r.set(c*m,a*d,c*g,a*l);break;case"ZYZ":r.set(c*g,c*m,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var wr=Object.freeze({__proto__:null,DEG2RAD:oi,RAD2DEG:Hi,generateUUID:jn,clamp:it,euclideanModulo:zs,mapLinear:il,inverseLerp:sl,lerp:li,damp:rl,pingpong:al,smoothstep:ol,smootherstep:ll,randInt:cl,randFloat:dl,randFloatSpread:ul,seededRandom:hl,degToRad:fl,radToDeg:pl,isPowerOfTwo:Xs,ceilPowerOfTwo:ml,floorPowerOfTwo:Vi,setQuaternionFromProperEuler:gl,normalize:at,denormalize:ri});class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],h=n[7],f=n[2],m=n[5],g=n[8],p=i[0],u=i[3],x=i[6],S=i[1],L=i[4],y=i[7],w=i[2],R=i[5],W=i[8];return s[0]=o*p+a*S+c*w,s[3]=o*u+a*L+c*R,s[6]=o*x+a*y+c*W,s[1]=l*p+d*S+h*w,s[4]=l*u+d*L+h*R,s[7]=l*x+d*y+h*W,s[2]=f*p+m*S+g*w,s[5]=f*u+m*L+g*R,s[8]=f*x+m*y+g*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*s*d+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],h=d*o-a*l,f=a*c-d*s,m=l*s-o*c,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*l-d*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(d*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],c=i[1],l=i[4],d=i[7];return i[0]=t*s+n*c,i[3]=t*o+n*l,i[6]=t*a+n*d,i[1]=-n*s+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*d,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Ma(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ni(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ts={[Vt]:{[hn]:mn},[hn]:{[Vt]:Wi}},Mt={legacyMode:!0,get workingColorSpace(){return hn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(ts[e]&&ts[e][t]!==void 0){const n=ts[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Sa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ke={r:0,g:0,b:0},St={h:0,s:0,l:0},pi={h:0,s:0,l:0};function ns(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function mi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=hn){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=hn){if(e=zs(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ns(o,s,e+1/3),this.g=ns(o,s,e),this.b=ns(o,s,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Mt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Mt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,d=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,d,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Mt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Vt){const n=Sa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Mt.fromWorkingColorSpace(mi(this,ke),e),it(ke.r*255,0,255)<<16^it(ke.g*255,0,255)<<8^it(ke.b*255,0,255)<<0}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=hn){Mt.fromWorkingColorSpace(mi(this,ke),t);const n=ke.r,i=ke.g,s=ke.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=d<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=hn){return Mt.fromWorkingColorSpace(mi(this,ke),t),e.r=ke.r,e.g=ke.g,e.b=ke.b,e}getStyle(e=Vt){return Mt.fromWorkingColorSpace(mi(this,ke),e),e!==Vt?`color(${e} ${ke.r} ${ke.g} ${ke.b})`:`rgb(${ke.r*255|0},${ke.g*255|0},${ke.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(St),St.h+=e,St.s+=t,St.l+=n,this.setHSL(St.h,St.s,St.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(St),e.getHSL(pi);const n=li(St.h,pi.h,t),i=li(St.s,pi.s,t),s=li(St.l,pi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Pe.NAMES=Sa;let Cn;class wa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cn===void 0&&(Cn=Ni("canvas")),Cn.width=e.width,Cn.height=e.height;const n=Cn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ni("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=mn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mn(t[n]/255)*255):t[n]=mn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ta{constructor(e=null){this.isSource=!0,this.uuid=jn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(is(i[o].image)):s.push(is(i[o]))}else s=is(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function is(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xl=0;class Rt extends vn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Lt,i=Lt,s=_t,o=Bi,a=It,c=gn,l=1,d=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=jn(),this.name="",this.source=new Ta(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ba)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case Is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case Is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=ba;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],d=c[4],h=c[8],f=c[1],m=c[5],g=c[9],p=c[2],u=c[6],x=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+u)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(l+1)/2,y=(m+1)/2,w=(x+1)/2,R=(d+f)/4,W=(h+p)/4,b=(g+u)/4;return L>y&&L>w?L<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(L),i=R/n,s=W/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=R/i,s=b/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=W/s,i=b/s),this.set(n,i,s,t),this}let S=Math.sqrt((u-g)*(u-g)+(h-p)*(h-p)+(f-d)*(f-d));return Math.abs(S)<.001&&(S=1),this.x=(u-g)/S,this.y=(h-p)/S,this.z=(f-d)/S,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _n extends vn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_t,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ta(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class La extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],d=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||c!==f||l!==m||d!==g){let u=1-a;const x=c*f+l*m+d*g+h*p,S=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const w=Math.sqrt(L),R=Math.atan2(w,x*S);u=Math.sin(u*R)/w,a=Math.sin(a*R)/w}const y=a*S;if(c=c*u+f*y,l=l*u+m*y,d=d*u+g*y,h=h*u+p*y,u===1-a){const w=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=w,l*=w,d*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],d=n[i+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+d*h+c*m-l*f,e[t+1]=c*g+d*f+l*h-a*m,e[t+2]=l*g+d*m+a*f-c*h,e[t+3]=d*g-a*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(i/2),h=a(s/2),f=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=f*d*h+l*m*g,this._y=l*m*h-f*d*g,this._z=l*d*g+f*m*h,this._w=l*d*h-f*m*g;break;case"YXZ":this._x=f*d*h+l*m*g,this._y=l*m*h-f*d*g,this._z=l*d*g-f*m*h,this._w=l*d*h+f*m*g;break;case"ZXY":this._x=f*d*h-l*m*g,this._y=l*m*h+f*d*g,this._z=l*d*g+f*m*h,this._w=l*d*h-f*m*g;break;case"ZYX":this._x=f*d*h-l*m*g,this._y=l*m*h+f*d*g,this._z=l*d*g-f*m*h,this._w=l*d*h+f*m*g;break;case"YZX":this._x=f*d*h+l*m*g,this._y=l*m*h+f*d*g,this._z=l*d*g-f*m*h,this._w=l*d*h-f*m*g;break;case"XZY":this._x=f*d*h-l*m*g,this._y=l*m*h-f*d*g,this._z=l*d*g+f*m*h,this._w=l*d*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(d-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+i*l-s*c,this._y=i*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-i*a,this._w=o*d-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),h=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,d=c*n+a*t-s*i,h=c*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=l*c+f*-s+d*-a-h*-o,this.y=d*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ss.copy(this).projectOnVector(e),this.sub(ss)}reflect(e){return this.sub(ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ss=new G,Tr=new bn;class $t{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const d=e[c],h=e[c+1],f=e[c+2];d<t&&(t=d),h<n&&(n=h),f<i&&(i=f),d>s&&(s=d),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const d=e.getX(c),h=e.getY(c),f=e.getZ(c);d<t&&(t=d),h<n&&(n=h),f<i&&(i=f),d>s&&(s=d),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)nn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(nn)}else n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox),rs.applyMatrix4(e.matrixWorld),this.union(rs);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ti),gi.subVectors(this.max,ti),Rn.subVectors(e.a,ti),En.subVectors(e.b,ti),Gn.subVectors(e.c,ti),Ot.subVectors(En,Rn),kt.subVectors(Gn,En),sn.subVectors(Rn,Gn);let t=[0,-Ot.z,Ot.y,0,-kt.z,kt.y,0,-sn.z,sn.y,Ot.z,0,-Ot.x,kt.z,0,-kt.x,sn.z,0,-sn.x,-Ot.y,Ot.x,0,-kt.y,kt.x,0,-sn.y,sn.x,0];return!as(t,Rn,En,Gn,gi)||(t=[1,0,0,0,1,0,0,0,1],!as(t,Rn,En,Gn,gi))?!1:(xi.crossVectors(Ot,kt),t=[xi.x,xi.y,xi.z],as(t,Rn,En,Gn,gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return nn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dt=[new G,new G,new G,new G,new G,new G,new G,new G],nn=new G,rs=new $t,Rn=new G,En=new G,Gn=new G,Ot=new G,kt=new G,sn=new G,ti=new G,gi=new G,xi=new G,rn=new G;function as(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){rn.fromArray(r,s);const a=i.x*Math.abs(rn.x)+i.y*Math.abs(rn.y)+i.z*Math.abs(rn.z),c=e.dot(rn),l=t.dot(rn),d=n.dot(rn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const bl=new $t,Lr=new G,_i=new G,os=new G;class ui{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(os.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?_i.set(0,0,1).multiplyScalar(e.radius):_i.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Lr.copy(e.center).add(_i)),this.expandByPoint(Lr.copy(e.center).sub(_i)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ft=new G,ls=new G,bi=new G,Kt=new G,cs=new G,yi=new G,ds=new G;class Hs{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ft)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ft.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ft.copy(this.direction).multiplyScalar(t).add(this.origin),Ft.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ls.copy(e).add(t).multiplyScalar(.5),bi.copy(t).sub(e).normalize(),Kt.copy(this.origin).sub(ls);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bi),a=Kt.dot(this.direction),c=-Kt.dot(bi),l=Kt.lengthSq(),d=Math.abs(1-o*o);let h,f,m,g;if(d>0)if(h=o*c-a,f=o*a-c,g=s*d,h>=0)if(f>=-g)if(f<=g){const p=1/d;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(bi).multiplyScalar(f).add(ls),m}intersectSphere(e,t){Ft.subVectors(e.center,this.origin);const n=Ft.dot(this.direction),i=Ft.dot(Ft)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ft)!==null}intersectTriangle(e,t,n,i,s){cs.subVectors(t,e),yi.subVectors(n,e),ds.crossVectors(cs,yi);let o=this.direction.dot(ds),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kt.subVectors(this.origin,e);const c=a*this.direction.dot(yi.crossVectors(Kt,yi));if(c<0)return null;const l=a*this.direction.dot(cs.cross(Kt));if(l<0||c+l>o)return null;const d=-a*Kt.dot(ds);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,d,h,f,m,g,p,u){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=d,x[10]=h,x[14]=f,x[3]=m,x[7]=g,x[11]=p,x[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pn.setFromMatrixColumn(e,0).length(),s=1/Pn.setFromMatrixColumn(e,1).length(),o=1/Pn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*h,g=a*d,p=a*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=f-p*l,t[9]=-a*c,t[2]=p-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,m=c*h,g=l*d,p=l*h;t[0]=f+p*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=p+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,m=c*h,g=l*d,p=l*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=p-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,m=o*h,g=a*d,p=a*h;t[0]=c*d,t[4]=g*l-m,t[8]=f*l+p,t[1]=c*h,t[5]=p*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*d,t[4]=p-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=m*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=f*h+p,t[5]=o*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*d,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yl,e,vl)}lookAt(e,t,n){const i=this.elements;return ht.subVectors(e,t),ht.lengthSq()===0&&(ht.z=1),ht.normalize(),Yt.crossVectors(n,ht),Yt.lengthSq()===0&&(Math.abs(n.z)===1?ht.x+=1e-4:ht.z+=1e-4,ht.normalize(),Yt.crossVectors(n,ht)),Yt.normalize(),vi.crossVectors(ht,Yt),i[0]=Yt.x,i[4]=vi.x,i[8]=ht.x,i[1]=Yt.y,i[5]=vi.y,i[9]=ht.y,i[2]=Yt.z,i[6]=vi.z,i[10]=ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],h=n[5],f=n[9],m=n[13],g=n[2],p=n[6],u=n[10],x=n[14],S=n[3],L=n[7],y=n[11],w=n[15],R=i[0],W=i[4],b=i[8],C=i[12],D=i[1],J=i[5],ne=i[9],N=i[13],X=i[2],O=i[6],K=i[10],Q=i[14],Z=i[3],I=i[7],F=i[11],ee=i[15];return s[0]=o*R+a*D+c*X+l*Z,s[4]=o*W+a*J+c*O+l*I,s[8]=o*b+a*ne+c*K+l*F,s[12]=o*C+a*N+c*Q+l*ee,s[1]=d*R+h*D+f*X+m*Z,s[5]=d*W+h*J+f*O+m*I,s[9]=d*b+h*ne+f*K+m*F,s[13]=d*C+h*N+f*Q+m*ee,s[2]=g*R+p*D+u*X+x*Z,s[6]=g*W+p*J+u*O+x*I,s[10]=g*b+p*ne+u*K+x*F,s[14]=g*C+p*N+u*Q+x*ee,s[3]=S*R+L*D+y*X+w*Z,s[7]=S*W+L*J+y*O+w*I,s[11]=S*b+L*ne+y*K+w*F,s[15]=S*C+L*N+y*Q+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],h=e[6],f=e[10],m=e[14],g=e[3],p=e[7],u=e[11],x=e[15];return g*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*m-n*c*m)+p*(+t*c*m-t*l*f+s*o*f-i*o*m+i*l*d-s*c*d)+u*(+t*l*h-t*a*m-s*o*h+n*o*m+s*a*d-n*l*d)+x*(-i*a*d-t*c*h+t*a*f+i*o*h-n*o*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],h=e[9],f=e[10],m=e[11],g=e[12],p=e[13],u=e[14],x=e[15],S=h*u*l-p*f*l+p*c*m-a*u*m-h*c*x+a*f*x,L=g*f*l-d*u*l-g*c*m+o*u*m+d*c*x-o*f*x,y=d*p*l-g*h*l+g*a*m-o*p*m-d*a*x+o*h*x,w=g*h*c-d*p*c-g*a*f+o*p*f+d*a*u-o*h*u,R=t*S+n*L+i*y+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/R;return e[0]=S*W,e[1]=(p*f*s-h*u*s-p*i*m+n*u*m+h*i*x-n*f*x)*W,e[2]=(a*u*s-p*c*s+p*i*l-n*u*l-a*i*x+n*c*x)*W,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*m-n*c*m)*W,e[4]=L*W,e[5]=(d*u*s-g*f*s+g*i*m-t*u*m-d*i*x+t*f*x)*W,e[6]=(g*c*s-o*u*s-g*i*l+t*u*l+o*i*x-t*c*x)*W,e[7]=(o*f*s-d*c*s+d*i*l-t*f*l-o*i*m+t*c*m)*W,e[8]=y*W,e[9]=(g*h*s-d*p*s-g*n*m+t*p*m+d*n*x-t*h*x)*W,e[10]=(o*p*s-g*a*s+g*n*l-t*p*l-o*n*x+t*a*x)*W,e[11]=(d*a*s-o*h*s-d*n*l+t*h*l+o*n*m-t*a*m)*W,e[12]=w*W,e[13]=(d*p*i-g*h*i+g*n*f-t*p*f-d*n*u+t*h*u)*W,e[14]=(g*a*i-o*p*i-g*n*c+t*p*c+o*n*u-t*a*u)*W,e[15]=(o*h*i-d*a*i+d*n*c-t*h*c-o*n*f+t*a*f)*W,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,d*a+n,d*c-i*o,0,l*c-i*a,d*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,h=a+a,f=s*l,m=s*d,g=s*h,p=o*d,u=o*h,x=a*h,S=c*l,L=c*d,y=c*h,w=n.x,R=n.y,W=n.z;return i[0]=(1-(p+x))*w,i[1]=(m+y)*w,i[2]=(g-L)*w,i[3]=0,i[4]=(m-y)*R,i[5]=(1-(f+x))*R,i[6]=(u+S)*R,i[7]=0,i[8]=(g+L)*W,i[9]=(u-S)*W,i[10]=(1-(f+p))*W,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pn.set(i[0],i[1],i[2]).length();const o=Pn.set(i[4],i[5],i[6]).length(),a=Pn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],wt.copy(this);const l=1/s,d=1/o,h=1/a;return wt.elements[0]*=l,wt.elements[1]*=l,wt.elements[2]*=l,wt.elements[4]*=d,wt.elements[5]*=d,wt.elements[6]*=d,wt.elements[8]*=h,wt.elements[9]*=h,wt.elements[10]*=h,t.setFromRotationMatrix(wt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),d=1/(o-s),h=(t+e)*c,f=(n+i)*l,m=(o+s)*d;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pn=new G,wt=new Ke,yl=new G(0,0,0),vl=new G(1,1,1),Yt=new G,vi=new G,ht=new G,Cr=new Ke,Rr=new bn;class hi{constructor(e=0,t=0,n=0,i=hi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],d=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rr.setFromEuler(this),this.setFromQuaternion(Rr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}hi.DefaultOrder="XYZ";hi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ca{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ml=0;const Er=new G,In=new bn,Wt=new Ke,Mi=new G,ni=new G,Sl=new G,wl=new bn,Gr=new G(1,0,0),Pr=new G(0,1,0),Ir=new G(0,0,1),Tl={type:"added"},Ar={type:"removed"};class et extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DefaultUp.clone();const e=new G,t=new hi,n=new bn,i=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new yt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=et.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=et.DefaultMatrixWorldAutoUpdate,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.multiply(In),this}rotateOnWorldAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.premultiply(In),this}rotateX(e){return this.rotateOnAxis(Gr,e)}rotateY(e){return this.rotateOnAxis(Pr,e)}rotateZ(e){return this.rotateOnAxis(Ir,e)}translateOnAxis(e,t){return Er.copy(e).applyQuaternion(this.quaternion),this.position.add(Er.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gr,e)}translateY(e){return this.translateOnAxis(Pr,e)}translateZ(e){return this.translateOnAxis(Ir,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Wt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mi.copy(e):Mi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wt.lookAt(ni,Mi,this.up):Wt.lookAt(Mi,ni,this.up),this.quaternion.setFromRotationMatrix(Wt),i&&(Wt.extractRotation(i.matrixWorld),In.setFromRotationMatrix(Wt),this.quaternion.premultiply(In.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ar)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ar)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,e,Sl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,wl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}et.DefaultUp=new G(0,1,0);et.DefaultMatrixAutoUpdate=!0;et.DefaultMatrixWorldAutoUpdate=!0;const Tt=new G,zt=new G,us=new G,Ht=new G,An=new G,Xn=new G,Xr=new G,hs=new G,fs=new G,ps=new G;class Nt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tt.subVectors(e,t),i.cross(Tt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Tt.subVectors(i,t),zt.subVectors(n,t),us.subVectors(e,t);const o=Tt.dot(Tt),a=Tt.dot(zt),c=Tt.dot(us),l=zt.dot(zt),d=zt.dot(us),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(l*c-a*d)*f,g=(o*d-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ht),Ht.x>=0&&Ht.y>=0&&Ht.x+Ht.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Ht),c.set(0,0),c.addScaledVector(s,Ht.x),c.addScaledVector(o,Ht.y),c.addScaledVector(a,Ht.z),c}static isFrontFacing(e,t,n,i){return Tt.subVectors(n,t),zt.subVectors(e,t),Tt.cross(zt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tt.subVectors(this.c,this.b),zt.subVectors(this.a,this.b),Tt.cross(zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Nt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;An.subVectors(i,n),Xn.subVectors(s,n),hs.subVectors(e,n);const c=An.dot(hs),l=Xn.dot(hs);if(c<=0&&l<=0)return t.copy(n);fs.subVectors(e,i);const d=An.dot(fs),h=Xn.dot(fs);if(d>=0&&h<=d)return t.copy(i);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(An,o);ps.subVectors(e,s);const m=An.dot(ps),g=Xn.dot(ps);if(g>=0&&m<=g)return t.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Xn,a);const u=d*g-m*h;if(u<=0&&h-d>=0&&m-g>=0)return Xr.subVectors(s,i),a=(h-d)/(h-d+(m-g)),t.copy(i).addScaledVector(Xr,a);const x=1/(u+p+f);return o=p*x,a=f*x,t.copy(n).addScaledVector(An,o).addScaledVector(Xn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ll=0;class Mn extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Zn,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ga,this.blendDst=xa,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ui extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ze=new G,Si=new we;class At{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=vr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Si.fromBufferAttribute(this,t),Si.applyMatrix3(e),this.setXY(t,Si.x,Si.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ra extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ea extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cl=0;const xt=new Ke,ms=new et,Dn=new G,ft=new $t,ii=new $t,Je=new G;class lt extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ma(e)?Ea:Ra)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new yt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xt.makeRotationFromQuaternion(e),this.applyMatrix4(xt),this}rotateX(e){return xt.makeRotationX(e),this.applyMatrix4(xt),this}rotateY(e){return xt.makeRotationY(e),this.applyMatrix4(xt),this}rotateZ(e){return xt.makeRotationZ(e),this.applyMatrix4(xt),this}translate(e,t,n){return xt.makeTranslation(e,t,n),this.applyMatrix4(xt),this}scale(e,t,n){return xt.makeScale(e,t,n),this.applyMatrix4(xt),this}lookAt(e){return ms.lookAt(e),ms.updateMatrix(),this.applyMatrix4(ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dn).negate(),this.translate(Dn.x,Dn.y,Dn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ft.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,ft.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,ft.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(ft.min),this.boundingBox.expandByPoint(ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(ft.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ii.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(ft.min,ii.min),ft.expandByPoint(Je),Je.addVectors(ft.max,ii.max),ft.expandByPoint(Je)):(ft.expandByPoint(ii.min),ft.expandByPoint(ii.max))}ft.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Je.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Je));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Je.fromBufferAttribute(a,l),c&&(Dn.fromBufferAttribute(e,l),Je.add(Dn)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],d=[];for(let D=0;D<a;D++)l[D]=new G,d[D]=new G;const h=new G,f=new G,m=new G,g=new we,p=new we,u=new we,x=new G,S=new G;function L(D,J,ne){h.fromArray(i,D*3),f.fromArray(i,J*3),m.fromArray(i,ne*3),g.fromArray(o,D*2),p.fromArray(o,J*2),u.fromArray(o,ne*2),f.sub(h),m.sub(h),p.sub(g),u.sub(g);const N=1/(p.x*u.y-u.x*p.y);isFinite(N)&&(x.copy(f).multiplyScalar(u.y).addScaledVector(m,-p.y).multiplyScalar(N),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-u.x).multiplyScalar(N),l[D].add(x),l[J].add(x),l[ne].add(x),d[D].add(S),d[J].add(S),d[ne].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let D=0,J=y.length;D<J;++D){const ne=y[D],N=ne.start,X=ne.count;for(let O=N,K=N+X;O<K;O+=3)L(n[O+0],n[O+1],n[O+2])}const w=new G,R=new G,W=new G,b=new G;function C(D){W.fromArray(s,D*3),b.copy(W);const J=l[D];w.copy(J),w.sub(W.multiplyScalar(W.dot(J))).normalize(),R.crossVectors(b,J);const N=R.dot(d[D])<0?-1:1;c[D*4]=w.x,c[D*4+1]=w.y,c[D*4+2]=w.z,c[D*4+3]=N}for(let D=0,J=y.length;D<J;++D){const ne=y[D],N=ne.start,X=ne.count;for(let O=N,K=N+X;O<K;O+=3)C(n[O+0]),C(n[O+1]),C(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new G,s=new G,o=new G,a=new G,c=new G,l=new G,d=new G,h=new G;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),p=e.getX(f+1),u=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,u),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,u),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(u,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Je.fromBufferAttribute(e,t),Je.normalize(),e.setXYZ(t,Je.x,Je.y,Je.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,h=a.normalized,f=new l.constructor(c.length*d);let m=0,g=0;for(let p=0,u=c.length;p<u;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*d;for(let x=0;x<d;x++)f[g++]=l[m++]}return new At(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,h=l.length;d<h;d++){const f=l[d],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];d.push(m.toJSON(e.data))}d.length>0&&(i[c]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],h=s[l];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dr=new Ke,Fn=new Hs,gs=new ui,Jt=new G,jt=new G,Qt=new G,xs=new G,_s=new G,bs=new G,wi=new G,Ti=new G,Li=new G,Ci=new we,Ri=new we,Ei=new we,ys=new G,Gi=new G;class Ct extends et{constructor(e=new lt,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(s),e.ray.intersectsSphere(gs)===!1)||(Dr.copy(s).invert(),Fn.copy(e.ray).applyMatrix4(Dr),n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,d=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){const x=m[p],S=i[x.materialIndex],L=Math.max(x.start,g.start),y=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let w=L,R=y;w<R;w+=3){const W=a.getX(w),b=a.getX(w+1),C=a.getX(w+2);o=Pi(this,S,e,Fn,c,l,d,h,f,W,b,C),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),u=Math.min(a.count,g.start+g.count);for(let x=p,S=u;x<S;x+=3){const L=a.getX(x),y=a.getX(x+1),w=a.getX(x+2);o=Pi(this,i,e,Fn,c,l,d,h,f,L,y,w),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){const x=m[p],S=i[x.materialIndex],L=Math.max(x.start,g.start),y=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let w=L,R=y;w<R;w+=3){const W=w,b=w+1,C=w+2;o=Pi(this,S,e,Fn,c,l,d,h,f,W,b,C),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),u=Math.min(c.count,g.start+g.count);for(let x=p,S=u;x<S;x+=3){const L=x,y=x+1,w=x+2;o=Pi(this,i,e,Fn,c,l,d,h,f,L,y,w),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Rl(r,e,t,n,i,s,o,a){let c;if(e.side===vt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side!==Pt,a),c===null)return null;Gi.copy(a),Gi.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Gi);return l<t.near||l>t.far?null:{distance:l,point:Gi.clone(),object:r}}function Pi(r,e,t,n,i,s,o,a,c,l,d,h){Jt.fromBufferAttribute(i,l),jt.fromBufferAttribute(i,d),Qt.fromBufferAttribute(i,h);const f=r.morphTargetInfluences;if(s&&f){wi.set(0,0,0),Ti.set(0,0,0),Li.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const u=f[g],x=s[g];u!==0&&(xs.fromBufferAttribute(x,l),_s.fromBufferAttribute(x,d),bs.fromBufferAttribute(x,h),o?(wi.addScaledVector(xs,u),Ti.addScaledVector(_s,u),Li.addScaledVector(bs,u)):(wi.addScaledVector(xs.sub(Jt),u),Ti.addScaledVector(_s.sub(jt),u),Li.addScaledVector(bs.sub(Qt),u)))}Jt.add(wi),jt.add(Ti),Qt.add(Li)}r.isSkinnedMesh&&(r.boneTransform(l,Jt),r.boneTransform(d,jt),r.boneTransform(h,Qt));const m=Rl(r,e,t,n,Jt,jt,Qt,ys);if(m){a&&(Ci.fromBufferAttribute(a,l),Ri.fromBufferAttribute(a,d),Ei.fromBufferAttribute(a,h),m.uv=Nt.getUV(ys,Jt,jt,Qt,Ci,Ri,Ei,new we)),c&&(Ci.fromBufferAttribute(c,l),Ri.fromBufferAttribute(c,d),Ei.fromBufferAttribute(c,h),m.uv2=Nt.getUV(ys,Jt,jt,Qt,Ci,Ri,Ei,new we));const g={a:l,b:d,c:h,normal:new G,materialIndex:0};Nt.getNormal(Jt,jt,Qt,g.normal),m.face=g}return m}class Qn extends lt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(h,2));function g(p,u,x,S,L,y,w,R,W,b,C){const D=y/W,J=w/b,ne=y/2,N=w/2,X=R/2,O=W+1,K=b+1;let Q=0,Z=0;const I=new G;for(let F=0;F<K;F++){const ee=F*J-N;for(let Y=0;Y<O;Y++){const ie=Y*D-ne;I[p]=ie*S,I[u]=ee*L,I[x]=X,l.push(I.x,I.y,I.z),I[p]=0,I[u]=0,I[x]=R>0?1:-1,d.push(I.x,I.y,I.z),h.push(Y/W),h.push(1-F/b),Q+=1}}for(let F=0;F<b;F++)for(let ee=0;ee<W;ee++){const Y=f+ee+O*F,ie=f+ee+O*(F+1),ue=f+(ee+1)+O*(F+1),xe=f+(ee+1)+O*F;c.push(Y,ie,xe),c.push(ie,ue,xe),Z+=6}a.addGroup(m,Z,C),m+=Z,f+=Q}}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $e(r){const e={};for(let t=0;t<r.length;t++){const n=Jn(r[t]);for(const i in n)e[i]=n[i]}return e}function El(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const Gl={clone:Jn,merge:$e};var Pl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Il=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pl,this.fragmentShader=Il,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jn(e.uniforms),this.uniformsGroups=El(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ga extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bt extends Ga{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wn=90,zn=1;class Al extends et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new bt(Wn,zn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new G(1,0,0)),this.add(i);const s=new bt(Wn,zn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new G(-1,0,0)),this.add(s);const o=new bt(Wn,zn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new G(0,1,0)),this.add(o);const a=new bt(Wn,zn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new G(0,-1,0)),this.add(a);const c=new bt(Wn,zn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new G(0,0,1)),this.add(c);const l=new bt(Wn,zn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new G(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,d=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Ut,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(d),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Pa extends Rt{constructor(e,t,n,i,s,o,a,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:kn,super(e,t,n,i,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xl extends _n{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Pa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qn(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vt,blending:qt});s.uniforms.tEquirect.value=t;const o=new Ct(i,s),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=_t),new Al(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const vs=new G,Dl=new G,Fl=new yt;class on{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=vs.subVectors(n,t).cross(Dl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(vs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fl.getNormalMatrix(e),i=this.coplanarPoint(vs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new ui,Ii=new G;class Ia{constructor(e=new on,t=new on,n=new on,i=new on,s=new on,o=new on){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],d=n[6],h=n[7],f=n[8],m=n[9],g=n[10],p=n[11],u=n[12],x=n[13],S=n[14],L=n[15];return t[0].setComponents(a-i,h-c,p-f,L-u).normalize(),t[1].setComponents(a+i,h+c,p+f,L+u).normalize(),t[2].setComponents(a+s,h+l,p+m,L+x).normalize(),t[3].setComponents(a-s,h-l,p-m,L-x).normalize(),t[4].setComponents(a-o,h-d,p-g,L-S).normalize(),t[5].setComponents(a+o,h+d,p+g,L+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ii.x=i.normal.x>0?e.max.x:e.min.x,Ii.y=i.normal.y>0?e.max.y:e.min.y,Ii.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ii)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Aa(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Wl(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,d){const h=l.array,f=l.usage,m=r.createBuffer();r.bindBuffer(d,m),r.bufferData(d,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,d,h){const f=d.array,m=d.updateRange;r.bindBuffer(h,l),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d&&(r.deleteBuffer(d.buffer),n.delete(l))}function c(l,d){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,d)):h.version<l.version&&(s(h.buffer,l,d),h.version=l.version)}return{get:o,remove:a,update:c}}class Oi extends lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,d=c+1,h=e/a,f=t/c,m=[],g=[],p=[],u=[];for(let x=0;x<d;x++){const S=x*f-o;for(let L=0;L<l;L++){const y=L*h-s;g.push(y,-S,0),p.push(0,0,1),u.push(L/a),u.push(1-x/c)}}for(let x=0;x<c;x++)for(let S=0;S<a;S++){const L=S+l*x,y=S+l*(x+1),w=S+1+l*(x+1),R=S+1+l*x;m.push(L,y,R),m.push(y,w,R)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(u,2))}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Hl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ul=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bl="vec3 transformed = vec3( position );",Ol=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Kl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,jl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ql=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ql=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$l=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ec=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ic=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,sc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ac=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,lc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dc="gl_FragColor = linearToOutputTexel( gl_FragColor );",uc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_c=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Lc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Rc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ec=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Gc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ic=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ac=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$c=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ld=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,_d=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Md=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ld=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Rd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ed=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Gd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Pd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Id=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ad=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Xd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ud=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Od=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$d=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,su=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ru=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,au=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ou=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,du=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,hu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:zl,alphamap_pars_fragment:Hl,alphatest_fragment:Vl,alphatest_pars_fragment:Nl,aomap_fragment:Ul,aomap_pars_fragment:Zl,begin_vertex:Bl,beginnormal_vertex:Ol,bsdfs:kl,iridescence_fragment:Kl,bumpmap_pars_fragment:Yl,clipping_planes_fragment:Jl,clipping_planes_pars_fragment:jl,clipping_planes_pars_vertex:Ql,clipping_planes_vertex:ql,color_fragment:$l,color_pars_fragment:ec,color_pars_vertex:tc,color_vertex:nc,common:ic,cube_uv_reflection_fragment:sc,defaultnormal_vertex:rc,displacementmap_pars_vertex:ac,displacementmap_vertex:oc,emissivemap_fragment:lc,emissivemap_pars_fragment:cc,encodings_fragment:dc,encodings_pars_fragment:uc,envmap_fragment:hc,envmap_common_pars_fragment:fc,envmap_pars_fragment:pc,envmap_pars_vertex:mc,envmap_physical_pars_fragment:Cc,envmap_vertex:gc,fog_vertex:xc,fog_pars_vertex:_c,fog_fragment:bc,fog_pars_fragment:yc,gradientmap_pars_fragment:vc,lightmap_fragment:Mc,lightmap_pars_fragment:Sc,lights_lambert_fragment:wc,lights_lambert_pars_fragment:Tc,lights_pars_begin:Lc,lights_toon_fragment:Rc,lights_toon_pars_fragment:Ec,lights_phong_fragment:Gc,lights_phong_pars_fragment:Pc,lights_physical_fragment:Ic,lights_physical_pars_fragment:Ac,lights_fragment_begin:Xc,lights_fragment_maps:Dc,lights_fragment_end:Fc,logdepthbuf_fragment:Wc,logdepthbuf_pars_fragment:zc,logdepthbuf_pars_vertex:Hc,logdepthbuf_vertex:Vc,map_fragment:Nc,map_pars_fragment:Uc,map_particle_fragment:Zc,map_particle_pars_fragment:Bc,metalnessmap_fragment:Oc,metalnessmap_pars_fragment:kc,morphcolor_vertex:Kc,morphnormal_vertex:Yc,morphtarget_pars_vertex:Jc,morphtarget_vertex:jc,normal_fragment_begin:Qc,normal_fragment_maps:qc,normal_pars_fragment:$c,normal_pars_vertex:ed,normal_vertex:td,normalmap_pars_fragment:nd,clearcoat_normal_fragment_begin:id,clearcoat_normal_fragment_maps:sd,clearcoat_pars_fragment:rd,iridescence_pars_fragment:ad,output_fragment:od,packing:ld,premultiplied_alpha_fragment:cd,project_vertex:dd,dithering_fragment:ud,dithering_pars_fragment:hd,roughnessmap_fragment:fd,roughnessmap_pars_fragment:pd,shadowmap_pars_fragment:md,shadowmap_pars_vertex:gd,shadowmap_vertex:xd,shadowmask_pars_fragment:_d,skinbase_vertex:bd,skinning_pars_vertex:yd,skinning_vertex:vd,skinnormal_vertex:Md,specularmap_fragment:Sd,specularmap_pars_fragment:wd,tonemapping_fragment:Td,tonemapping_pars_fragment:Ld,transmission_fragment:Cd,transmission_pars_fragment:Rd,uv_pars_fragment:Ed,uv_pars_vertex:Gd,uv_vertex:Pd,uv2_pars_fragment:Id,uv2_pars_vertex:Ad,uv2_vertex:Xd,worldpos_vertex:Dd,background_vert:Fd,background_frag:Wd,cube_vert:zd,cube_frag:Hd,depth_vert:Vd,depth_frag:Nd,distanceRGBA_vert:Ud,distanceRGBA_frag:Zd,equirect_vert:Bd,equirect_frag:Od,linedashed_vert:kd,linedashed_frag:Kd,meshbasic_vert:Yd,meshbasic_frag:Jd,meshlambert_vert:jd,meshlambert_frag:Qd,meshmatcap_vert:qd,meshmatcap_frag:$d,meshnormal_vert:eu,meshnormal_frag:tu,meshphong_vert:nu,meshphong_frag:iu,meshphysical_vert:su,meshphysical_frag:ru,meshtoon_vert:au,meshtoon_frag:ou,points_vert:lu,points_frag:cu,shadow_vert:du,shadow_frag:uu,sprite_vert:hu,sprite_frag:fu},te={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yt},uv2Transform:{value:new yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}}},Gt={basic:{uniforms:$e([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:$e([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:$e([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:$e([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:$e([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:$e([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:$e([te.points,te.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:$e([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:$e([te.common,te.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:$e([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:$e([te.sprite,te.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},cube:{uniforms:$e([te.envmap,{opacity:{value:1}}]),vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:$e([te.common,te.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:$e([te.lights,te.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Gt.physical={uniforms:$e([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};function pu(r,e,t,n,i,s){const o=new Pe(0);let a=i===!0?0:1,c,l,d=null,h=0,f=null;function m(p,u){let x=!1,S=u.isScene===!0?u.background:null;S&&S.isTexture&&(S=e.get(S));const L=r.xr,y=L.getSession&&L.getSession();y&&y.environmentBlendMode==="additive"&&(S=null),S===null?g(o,a):S&&S.isColor&&(g(S,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Zi)?(l===void 0&&(l=new Ct(new Qn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Jn(Gt.cube.uniforms),vertexShader:Gt.cube.vertexShader,fragmentShader:Gt.cube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,R,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(d!==S||h!==S.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,f=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ct(new Oi(2,2),new yn({name:"BackgroundMaterial",uniforms:Jn(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,f=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,u){t.buffers.color.setClear(p.r,p.g,p.b,u,s)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),a=u,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function mu(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=u(null);let l=c,d=!1;function h(X,O,K,Q,Z){let I=!1;if(o){const F=p(Q,K,O);l!==F&&(l=F,m(l.object)),I=x(X,Q,K,Z),I&&S(X,Q,K,Z)}else{const F=O.wireframe===!0;(l.geometry!==Q.id||l.program!==K.id||l.wireframe!==F)&&(l.geometry=Q.id,l.program=K.id,l.wireframe=F,I=!0)}Z!==null&&t.update(Z,34963),(I||d)&&(d=!1,b(X,O,K,Q),Z!==null&&r.bindBuffer(34963,t.get(Z).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(X){return n.isWebGL2?r.bindVertexArray(X):s.bindVertexArrayOES(X)}function g(X){return n.isWebGL2?r.deleteVertexArray(X):s.deleteVertexArrayOES(X)}function p(X,O,K){const Q=K.wireframe===!0;let Z=a[X.id];Z===void 0&&(Z={},a[X.id]=Z);let I=Z[O.id];I===void 0&&(I={},Z[O.id]=I);let F=I[Q];return F===void 0&&(F=u(f()),I[Q]=F),F}function u(X){const O=[],K=[],Q=[];for(let Z=0;Z<i;Z++)O[Z]=0,K[Z]=0,Q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:Q,object:X,attributes:{},index:null}}function x(X,O,K,Q){const Z=l.attributes,I=O.attributes;let F=0;const ee=K.getAttributes();for(const Y in ee)if(ee[Y].location>=0){const ue=Z[Y];let xe=I[Y];if(xe===void 0&&(Y==="instanceMatrix"&&X.instanceMatrix&&(xe=X.instanceMatrix),Y==="instanceColor"&&X.instanceColor&&(xe=X.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;F++}return l.attributesNum!==F||l.index!==Q}function S(X,O,K,Q){const Z={},I=O.attributes;let F=0;const ee=K.getAttributes();for(const Y in ee)if(ee[Y].location>=0){let ue=I[Y];ue===void 0&&(Y==="instanceMatrix"&&X.instanceMatrix&&(ue=X.instanceMatrix),Y==="instanceColor"&&X.instanceColor&&(ue=X.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),Z[Y]=xe,F++}l.attributes=Z,l.attributesNum=F,l.index=Q}function L(){const X=l.newAttributes;for(let O=0,K=X.length;O<K;O++)X[O]=0}function y(X){w(X,0)}function w(X,O){const K=l.newAttributes,Q=l.enabledAttributes,Z=l.attributeDivisors;K[X]=1,Q[X]===0&&(r.enableVertexAttribArray(X),Q[X]=1),Z[X]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,O),Z[X]=O)}function R(){const X=l.newAttributes,O=l.enabledAttributes;for(let K=0,Q=O.length;K<Q;K++)O[K]!==X[K]&&(r.disableVertexAttribArray(K),O[K]=0)}function W(X,O,K,Q,Z,I){n.isWebGL2===!0&&(K===5124||K===5125)?r.vertexAttribIPointer(X,O,K,Z,I):r.vertexAttribPointer(X,O,K,Q,Z,I)}function b(X,O,K,Q){if(n.isWebGL2===!1&&(X.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const Z=Q.attributes,I=K.getAttributes(),F=O.defaultAttributeValues;for(const ee in I){const Y=I[ee];if(Y.location>=0){let ie=Z[ee];if(ie===void 0&&(ee==="instanceMatrix"&&X.instanceMatrix&&(ie=X.instanceMatrix),ee==="instanceColor"&&X.instanceColor&&(ie=X.instanceColor)),ie!==void 0){const ue=ie.normalized,xe=ie.itemSize,B=t.get(ie);if(B===void 0)continue;const Ee=B.buffer,pe=B.type,_e=B.bytesPerElement;if(ie.isInterleavedBufferAttribute){const de=ie.data,Ie=de.stride,ve=ie.offset;if(de.isInstancedInterleavedBuffer){for(let fe=0;fe<Y.locationSize;fe++)w(Y.location+fe,de.meshPerAttribute);X.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let fe=0;fe<Y.locationSize;fe++)y(Y.location+fe);r.bindBuffer(34962,Ee);for(let fe=0;fe<Y.locationSize;fe++)W(Y.location+fe,xe/Y.locationSize,pe,ue,Ie*_e,(ve+xe/Y.locationSize*fe)*_e)}else{if(ie.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)w(Y.location+de,ie.meshPerAttribute);X.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let de=0;de<Y.locationSize;de++)y(Y.location+de);r.bindBuffer(34962,Ee);for(let de=0;de<Y.locationSize;de++)W(Y.location+de,xe/Y.locationSize,pe,ue,xe*_e,xe/Y.locationSize*de*_e)}}else if(F!==void 0){const ue=F[ee];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(Y.location,ue);break;case 3:r.vertexAttrib3fv(Y.location,ue);break;case 4:r.vertexAttrib4fv(Y.location,ue);break;default:r.vertexAttrib1fv(Y.location,ue)}}}}R()}function C(){ne();for(const X in a){const O=a[X];for(const K in O){const Q=O[K];for(const Z in Q)g(Q[Z].object),delete Q[Z];delete O[K]}delete a[X]}}function D(X){if(a[X.id]===void 0)return;const O=a[X.id];for(const K in O){const Q=O[K];for(const Z in Q)g(Q[Z].object),delete Q[Z];delete O[K]}delete a[X.id]}function J(X){for(const O in a){const K=a[O];if(K[X.id]===void 0)continue;const Q=K[X.id];for(const Z in Q)g(Q[Z].object),delete Q[Z];delete K[X.id]}}function ne(){N(),d=!0,l!==c&&(l=c,m(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:J,initAttributes:L,enableAttribute:y,disableUnusedAttributes:R}}function gu(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,d){r.drawArrays(s,l,d),t.update(d,s,1)}function c(l,d,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,d,h),t.update(d,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function xu(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(W){if(W==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";W="mediump"}return W==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),u=r.getParameter(36347),x=r.getParameter(36348),S=r.getParameter(36349),L=f>0,y=o||e.has("OES_texture_float"),w=L&&y,R=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:u,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:L,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:R}}function _u(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new on,a=new yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=d(h,m,0),n=h.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,f,m){const g=h.clippingPlanes,p=h.clipIntersection,u=h.clipShadows,x=r.get(h);if(!i||g===null||g.length===0||s&&!u)s?d(null):l();else{const S=s?0:n,L=S*4;let y=x.clippingState||null;c.value=y,y=d(g,f,L,m);for(let w=0;w!==L;++w)y[w]=t[w];x.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,m,g){const p=h!==null?h.length:0;let u=null;if(p!==0){if(u=c.value,g!==!0||u===null){const x=m+p*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(u===null||u.length<x)&&(u=new Float32Array(x));for(let L=0,y=m;L!==p;++L,y+=4)o.copy(h[L]).applyMatrix4(S,a),o.normal.toArray(u,y),u[y+3]=o.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,u}}function bu(r){let e=new WeakMap;function t(o,a){return a===Es?o.mapping=kn:a===Gs&&(o.mapping=Kn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Es||a===Gs)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xl(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class yu extends Ga{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Un=4,Fr=[.125,.215,.35,.446,.526,.582],cn=20,Ms=new yu,Wr=new Pe;let Ss=null;const ln=(1+Math.sqrt(5))/2,Vn=1/ln,zr=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,ln,Vn),new G(0,ln,-Vn),new G(Vn,0,ln),new G(-Vn,0,ln),new G(ln,Vn,0),new G(-ln,Vn,0)];class Hr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ss=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ur(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ss),e.scissorTest=!1,Ai(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kn||e.mapping===Kn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ss=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:di,format:It,encoding:xn,depthBuffer:!1},i=Vr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vr(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vu(s)),this._blurMaterial=Mu(s,e,t)}return i}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Ms)}_sceneToCubeUV(e,t,n,i){const a=new bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Wr),d.toneMapping=Ut,d.autoClear=!1;const m=new Ui({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),g=new Ct(new Qn,m);let p=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,p=!0):(m.color.copy(Wr),p=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):S===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const L=this._cubeSize;Ai(i,S*L,x>2?L:0,L,L),d.setRenderTarget(i),p&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===kn||e.mapping===Kn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ur()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nr());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ai(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ms)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=zr[(i-1)%zr.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Ct(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*cn-1),p=s/g,u=isFinite(s)?1+Math.floor(d*p):cn;u>cn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${cn}`);const x=[];let S=0;for(let W=0;W<cn;++W){const b=W/p,C=Math.exp(-b*b/2);x.push(C),W===0?S+=C:W<u&&(S+=2*C)}for(let W=0;W<x.length;W++)x[W]=x[W]/S;f.envMap.value=e.texture,f.samples.value=u,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:L}=this;f.dTheta.value=g,f.mipInt.value=L-n;const y=this._sizeLods[i],w=3*y*(i>L-Un?i-L+Un:0),R=4*(this._cubeSize-y);Ai(t,w,R,3*y,2*y),c.setRenderTarget(t),c.render(h,Ms)}}function vu(r){const e=[],t=[],n=[];let i=r;const s=r-Un+1+Fr.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Un?c=Fr[o-r+Un-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,p=3,u=2,x=1,S=new Float32Array(p*g*m),L=new Float32Array(u*g*m),y=new Float32Array(x*g*m);for(let R=0;R<m;R++){const W=R%3*2/3-1,b=R>2?0:-1,C=[W,b,0,W+2/3,b,0,W+2/3,b+1,0,W,b,0,W+2/3,b+1,0,W,b+1,0];S.set(C,p*g*R),L.set(f,u*g*R);const D=[R,R,R,R,R,R];y.set(D,x*g*R)}const w=new lt;w.setAttribute("position",new At(S,p)),w.setAttribute("uv",new At(L,u)),w.setAttribute("faceIndex",new At(y,x)),e.push(w),i>Un&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vr(r,e,t){const n=new _n(r,e,t);return n.texture.mapping=Zi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ai(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Mu(r,e,t){const n=new Float32Array(cn),i=new G(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Nr(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Ur(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Vs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Su(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Es||c===Gs,d=c===kn||c===Kn;if(l||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Hr(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||d&&h&&i(h)){t===null&&(t=new Hr(r));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wu(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tu(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let u=0,x=p.length;u<x;u++)e.update(p[u],34962)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let L=0,y=S.length;L<y;L+=3){const w=S[L+0],R=S[L+1],W=S[L+2];f.push(w,R,R,W,W,w)}}else{const S=g.array;p=g.version;for(let L=0,y=S.length/3-1;L<y;L+=3){const w=L+0,R=L+1,W=L+2;f.push(w,R,R,W,W,w)}}const u=new(Ma(f)?Ea:Ra)(f,1);u.version=p;const x=s.get(h);x&&e.remove(x),s.set(h,u)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function Lu(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function d(f,m){r.drawElements(s,m,a,f*c),t.update(m,s,1)}function h(f,m,g){if(g===0)return;let p,u;if(i)p=r,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,m,a,f*c,g),t.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=d,this.renderInstances=h}function Cu(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ru(r,e){return r[0]-e[0]}function Eu(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Gu(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Qe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,d,h,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=g!==void 0?g.length:0;let u=s.get(d);if(u===void 0||u.count!==p){let O=function(){N.dispose(),s.delete(d),d.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();const L=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],W=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let C=0;L===!0&&(C=1),y===!0&&(C=2),w===!0&&(C=3);let D=d.attributes.position.count*C,J=1;D>e.maxTextureSize&&(J=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const ne=new Float32Array(D*J*4*p),N=new La(ne,D,J,p);N.type=un,N.needsUpdate=!0;const X=C*4;for(let K=0;K<p;K++){const Q=R[K],Z=W[K],I=b[K],F=D*J*4*K;for(let ee=0;ee<Q.count;ee++){const Y=ee*X;L===!0&&(o.fromBufferAttribute(Q,ee),ne[F+Y+0]=o.x,ne[F+Y+1]=o.y,ne[F+Y+2]=o.z,ne[F+Y+3]=0),y===!0&&(o.fromBufferAttribute(Z,ee),ne[F+Y+4]=o.x,ne[F+Y+5]=o.y,ne[F+Y+6]=o.z,ne[F+Y+7]=0),w===!0&&(o.fromBufferAttribute(I,ee),ne[F+Y+8]=o.x,ne[F+Y+9]=o.y,ne[F+Y+10]=o.z,ne[F+Y+11]=I.itemSize===4?o.w:1)}}u={count:p,texture:N,size:new we(D,J)},s.set(d,u),d.addEventListener("dispose",O)}let x=0;for(let L=0;L<m.length;L++)x+=m[L];const S=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}else{const g=m===void 0?0:m.length;let p=n[d.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];n[d.id]=p}for(let y=0;y<g;y++){const w=p[y];w[0]=y,w[1]=m[y]}p.sort(Eu);for(let y=0;y<8;y++)y<g&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Ru);const u=d.morphAttributes.position,x=d.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const w=a[y],R=w[0],W=w[1];R!==Number.MAX_SAFE_INTEGER&&W?(u&&d.getAttribute("morphTarget"+y)!==u[R]&&d.setAttribute("morphTarget"+y,u[R]),x&&d.getAttribute("morphNormal"+y)!==x[R]&&d.setAttribute("morphNormal"+y,x[R]),i[y]=W,S+=W):(u&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),x&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),i[y]=0)}const L=d.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",L),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Pu(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Xa=new Rt,Da=new La,Fa=new _l,Wa=new Pa,Zr=[],Br=[],Or=new Float32Array(16),kr=new Float32Array(9),Kr=new Float32Array(4);function qn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Zr[i];if(s===void 0&&(s=new Float32Array(i),Zr[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function st(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function rt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ki(r,e){let t=Br[e];t===void 0&&(t=new Int32Array(e),Br[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Iu(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Au(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2fv(this.addr,e),rt(t,e)}}function Xu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;r.uniform3fv(this.addr,e),rt(t,e)}}function Du(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4fv(this.addr,e),rt(t,e)}}function Fu(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Kr.set(n),r.uniformMatrix2fv(this.addr,!1,Kr),rt(t,n)}}function Wu(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;kr.set(n),r.uniformMatrix3fv(this.addr,!1,kr),rt(t,n)}}function zu(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Or.set(n),r.uniformMatrix4fv(this.addr,!1,Or),rt(t,n)}}function Hu(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Vu(r,e){const t=this.cache;st(t,e)||(r.uniform2iv(this.addr,e),rt(t,e))}function Nu(r,e){const t=this.cache;st(t,e)||(r.uniform3iv(this.addr,e),rt(t,e))}function Uu(r,e){const t=this.cache;st(t,e)||(r.uniform4iv(this.addr,e),rt(t,e))}function Zu(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Bu(r,e){const t=this.cache;st(t,e)||(r.uniform2uiv(this.addr,e),rt(t,e))}function Ou(r,e){const t=this.cache;st(t,e)||(r.uniform3uiv(this.addr,e),rt(t,e))}function ku(r,e){const t=this.cache;st(t,e)||(r.uniform4uiv(this.addr,e),rt(t,e))}function Ku(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Xa,i)}function Yu(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fa,i)}function Ju(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wa,i)}function ju(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Da,i)}function Qu(r){switch(r){case 5126:return Iu;case 35664:return Au;case 35665:return Xu;case 35666:return Du;case 35674:return Fu;case 35675:return Wu;case 35676:return zu;case 5124:case 35670:return Hu;case 35667:case 35671:return Vu;case 35668:case 35672:return Nu;case 35669:case 35673:return Uu;case 5125:return Zu;case 36294:return Bu;case 36295:return Ou;case 36296:return ku;case 35678:case 36198:case 36298:case 36306:case 35682:return Ku;case 35679:case 36299:case 36307:return Yu;case 35680:case 36300:case 36308:case 36293:return Ju;case 36289:case 36303:case 36311:case 36292:return ju}}function qu(r,e){r.uniform1fv(this.addr,e)}function $u(r,e){const t=qn(e,this.size,2);r.uniform2fv(this.addr,t)}function eh(r,e){const t=qn(e,this.size,3);r.uniform3fv(this.addr,t)}function th(r,e){const t=qn(e,this.size,4);r.uniform4fv(this.addr,t)}function nh(r,e){const t=qn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ih(r,e){const t=qn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function sh(r,e){const t=qn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rh(r,e){r.uniform1iv(this.addr,e)}function ah(r,e){r.uniform2iv(this.addr,e)}function oh(r,e){r.uniform3iv(this.addr,e)}function lh(r,e){r.uniform4iv(this.addr,e)}function ch(r,e){r.uniform1uiv(this.addr,e)}function dh(r,e){r.uniform2uiv(this.addr,e)}function uh(r,e){r.uniform3uiv(this.addr,e)}function hh(r,e){r.uniform4uiv(this.addr,e)}function fh(r,e,t){const n=e.length,i=ki(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Xa,i[s])}function ph(r,e,t){const n=e.length,i=ki(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Fa,i[s])}function mh(r,e,t){const n=e.length,i=ki(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Wa,i[s])}function gh(r,e,t){const n=e.length,i=ki(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Da,i[s])}function xh(r){switch(r){case 5126:return qu;case 35664:return $u;case 35665:return eh;case 35666:return th;case 35674:return nh;case 35675:return ih;case 35676:return sh;case 5124:case 35670:return rh;case 35667:case 35671:return ah;case 35668:case 35672:return oh;case 35669:case 35673:return lh;case 5125:return ch;case 36294:return dh;case 36295:return uh;case 36296:return hh;case 35678:case 36198:case 36298:case 36306:case 35682:return fh;case 35679:case 36299:case 36307:return ph;case 35680:case 36300:case 36308:case 36293:return mh;case 36289:case 36303:case 36311:case 36292:return gh}}class _h{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Qu(t.type)}}class bh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xh(t.type)}}class yh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ws=/(\w+)(\])?(\[|\.)?/g;function Yr(r,e){r.seq.push(e),r.map[e.id]=e}function vh(r,e,t){const n=r.name,i=n.length;for(ws.lastIndex=0;;){const s=ws.exec(n),o=ws.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yr(t,l===void 0?new _h(a,r,e):new bh(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new yh(a),Yr(t,h)),t=h}}}class zi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);vh(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Jr(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Mh=0;function Sh(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function wh(r){switch(r){case xn:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function jr(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Sh(r.getShaderSource(e),o)}else return i}function Th(r,e){const t=wh(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Lh(r,e){let t;switch(e){case Io:t="Linear";break;case Ao:t="Reinhard";break;case Xo:t="OptimizedCineon";break;case Do:t="ACESFilmic";break;case Fo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ch(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ai).join(`
`)}function Rh(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eh(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ai(r){return r!==""}function Qr(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qr(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ds(r){return r.replace(Gh,Ph)}function Ph(r,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ds(t)}const Ih=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $r(r){return r.replace(Ih,Ah)}function Ah(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ea(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xh(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ma?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===co?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Dh(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case kn:case Kn:e="ENVMAP_TYPE_CUBE";break;case Zi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fh(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Kn:e="ENVMAP_MODE_REFRACTION";break}return e}function Wh(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case _a:e="ENVMAP_BLENDING_MULTIPLY";break;case Go:e="ENVMAP_BLENDING_MIX";break;case Po:e="ENVMAP_BLENDING_ADD";break}return e}function zh(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hh(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Xh(t),l=Dh(t),d=Fh(t),h=Wh(t),f=zh(t),m=t.isWebGL2?"":Ch(t),g=Rh(s),p=i.createProgram();let u,x,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=[g].filter(ai).join(`
`),u.length>0&&(u+=`
`),x=[m,g].filter(ai).join(`
`),x.length>0&&(x+=`
`)):(u=[ea(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ai).join(`
`),x=[m,ea(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ut?"#define TONE_MAPPING":"",t.toneMapping!==Ut?Se.tonemapping_pars_fragment:"",t.toneMapping!==Ut?Lh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,Th("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ai).join(`
`)),o=Ds(o),o=Qr(o,t),o=qr(o,t),a=Ds(a),a=Qr(a,t),a=qr(a,t),o=$r(o),a=$r(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,x=["#define varying in",t.glslVersion===Mr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=S+u+o,y=S+x+a,w=Jr(i,35633,L),R=Jr(i,35632,y);if(i.attachShader(p,w),i.attachShader(p,R),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const C=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(w).trim(),J=i.getShaderInfoLog(R).trim();let ne=!0,N=!0;if(i.getProgramParameter(p,35714)===!1){ne=!1;const X=jr(i,w,"vertex"),O=jr(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+X+`
`+O)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||J==="")&&(N=!1);N&&(this.diagnostics={runnable:ne,programLog:C,vertexShader:{log:D,prefix:u},fragmentShader:{log:J,prefix:x}})}i.deleteShader(w),i.deleteShader(R);let W;this.getUniforms=function(){return W===void 0&&(W=new zi(i,p)),W};let b;return this.getAttributes=function(){return b===void 0&&(b=Eh(i,p)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Mh++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=R,this}let Vh=0;class Nh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Uh(e),t.set(e,n)),n}}class Uh{constructor(e){this.id=Vh++,this.code=e,this.usedTimes=0}}function Zh(r,e,t,n,i,s,o){const a=new Ca,c=new Nh,l=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,C,D,J,ne){const N=J.fog,X=ne.geometry,O=b.isMeshStandardMaterial?J.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||O),Q=K&&K.mapping===Zi?K.image.height:null,Z=g[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const I=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,F=I!==void 0?I.length:0;let ee=0;X.morphAttributes.position!==void 0&&(ee=1),X.morphAttributes.normal!==void 0&&(ee=2),X.morphAttributes.color!==void 0&&(ee=3);let Y,ie,ue,xe;if(Z){const Ie=Gt[Z];Y=Ie.vertexShader,ie=Ie.fragmentShader}else Y=b.vertexShader,ie=b.fragmentShader,c.update(b),ue=c.getVertexShaderID(b),xe=c.getFragmentShaderID(b);const B=r.getRenderTarget(),Ee=b.alphaTest>0,pe=b.clearcoat>0,_e=b.iridescence>0;return{isWebGL2:d,shaderID:Z,shaderName:b.type,vertexShader:Y,fragmentShader:ie,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?r.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:xn,map:!!b.map,matcap:!!b.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Q,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===tl,tangentSpaceNormalMap:b.normalMapType===va,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===He,clearcoat:pe,clearcoatMap:pe&&!!b.clearcoatMap,clearcoatRoughnessMap:pe&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!b.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!b.iridescenceMap,iridescenceThicknessMap:_e&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Zn,alphaMap:!!b.alphaMap,alphaTest:Ee,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!X.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!N,useFog:b.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ne.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:Ut,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pt,flipSided:b.side===vt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function u(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)C.push(D),C.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(x(C,b),S(C,b),C.push(r.outputEncoding)),C.push(b.customProgramCacheKey),C.join()}function x(b,C){b.push(C.precision),b.push(C.outputEncoding),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.combine),b.push(C.vertexUvs),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function S(b,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),b.push(a.mask)}function L(b){const C=g[b.type];let D;if(C){const J=Gt[C];D=Gl.clone(J.uniforms)}else D=b.uniforms;return D}function y(b,C){let D;for(let J=0,ne=l.length;J<ne;J++){const N=l[J];if(N.cacheKey===C){D=N,++D.usedTimes;break}}return D===void 0&&(D=new Hh(r,C,b,s),l.push(D)),D}function w(b){if(--b.usedTimes===0){const C=l.indexOf(b);l[C]=l[l.length-1],l.pop(),b.destroy()}}function R(b){c.remove(b)}function W(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:L,acquireProgram:y,releaseProgram:w,releaseShaderCache:R,programs:l,dispose:W}}function Bh(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Oh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ta(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function na(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,g,p,u){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:u},r[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=p,x.group=u),e++,x}function a(h,f,m,g,p,u){const x=o(h,f,m,g,p,u);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(h,f,m,g,p,u){const x=o(h,f,m,g,p,u);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function l(h,f){t.length>1&&t.sort(h||Oh),n.length>1&&n.sort(f||ta),i.length>1&&i.sort(f||ta)}function d(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:d,sort:l}}function kh(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new na,r.set(n,[o])):i>=s.length?(o=new na,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Kh(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Pe};break;case"SpotLight":t={position:new G,direction:new G,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function Yh(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Jh=0;function jh(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Qh(r,e){const t=new Kh,n=Yh(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)i.probe.push(new G);const s=new G,o=new Ke,a=new Ke;function c(d,h){let f=0,m=0,g=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let p=0,u=0,x=0,S=0,L=0,y=0,w=0,R=0,W=0,b=0;d.sort(jh);const C=h!==!0?Math.PI:1;for(let J=0,ne=d.length;J<ne;J++){const N=d[J],X=N.color,O=N.intensity,K=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=X.r*O*C,m+=X.g*O*C,g+=X.b*O*C;else if(N.isLightProbe)for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],O);else if(N.isDirectionalLight){const Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity*C),N.castShadow){const I=N.shadow,F=n.get(N);F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=N.shadow.matrix,y++}i.directional[p]=Z,p++}else if(N.isSpotLight){const Z=t.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(X).multiplyScalar(O*C),Z.distance=K,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[x]=Z;const I=N.shadow;if(N.map&&(i.spotLightMap[W]=N.map,W++,I.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[x]=I.matrix,N.castShadow){const F=n.get(N);F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=Q,R++}x++}else if(N.isRectAreaLight){const Z=t.get(N);Z.color.copy(X).multiplyScalar(O),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=Z,S++}else if(N.isPointLight){const Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity*C),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const I=N.shadow,F=n.get(N);F.shadowBias=I.bias,F.shadowNormalBias=I.normalBias,F.shadowRadius=I.radius,F.shadowMapSize=I.mapSize,F.shadowCameraNear=I.camera.near,F.shadowCameraFar=I.camera.far,i.pointShadow[u]=F,i.pointShadowMap[u]=Q,i.pointShadowMatrix[u]=N.shadow.matrix,w++}i.point[u]=Z,u++}else if(N.isHemisphereLight){const Z=t.get(N);Z.skyColor.copy(N.color).multiplyScalar(O*C),Z.groundColor.copy(N.groundColor).multiplyScalar(O*C),i.hemi[L]=Z,L++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==p||D.pointLength!==u||D.spotLength!==x||D.rectAreaLength!==S||D.hemiLength!==L||D.numDirectionalShadows!==y||D.numPointShadows!==w||D.numSpotShadows!==R||D.numSpotMaps!==W)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=S,i.point.length=u,i.hemi.length=L,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=R+W-b,i.spotLightMap.length=W,i.numSpotLightShadowsWithMaps=b,D.directionalLength=p,D.pointLength=u,D.spotLength=x,D.rectAreaLength=S,D.hemiLength=L,D.numDirectionalShadows=y,D.numPointShadows=w,D.numSpotShadows=R,D.numSpotMaps=W,i.version=Jh++)}function l(d,h){let f=0,m=0,g=0,p=0,u=0;const x=h.matrixWorldInverse;for(let S=0,L=d.length;S<L;S++){const y=d[S];if(y.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),f++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),a.identity(),o.copy(y.matrixWorld),o.premultiply(x),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const w=i.hemi[u];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(x),u++}}}return{setup:c,setupView:l,state:i}}function ia(r,e){const t=new Qh(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function qh(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new ia(r,e),t.set(s,[c])):o>=a.length?(c=new ia(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class $h extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$o,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ef extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sf(r,e,t){let n=new Ia;const i=new we,s=new we,o=new Qe,a=new $h({depthPacking:el}),c=new ef,l={},d=t.maxTextureSize,h={0:vt,1:On,2:Pt},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:tf,fragmentShader:nf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new lt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ct(g,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma,this.render=function(y,w,R){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||y.length===0)return;const W=r.getRenderTarget(),b=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),D=r.state;D.setBlending(qt),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let J=0,ne=y.length;J<ne;J++){const N=y[J],X=N.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const O=X.getFrameExtents();if(i.multiply(O),s.copy(X.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/O.x),i.x=s.x*O.x,X.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/O.y),i.y=s.y*O.y,X.mapSize.y=s.y)),X.map===null){const Q=this.type!==si?{minFilter:ot,magFilter:ot}:{};X.map=new _n(i.x,i.y,Q),X.map.texture.name=N.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const K=X.getViewportCount();for(let Q=0;Q<K;Q++){const Z=X.getViewport(Q);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),D.viewport(o),X.updateMatrices(N,Q),n=X.getFrustum(),L(w,R,X.camera,N,this.type)}X.isPointLightShadow!==!0&&this.type===si&&x(X,R),X.needsUpdate=!1}u.needsUpdate=!1,r.setRenderTarget(W,b,C)};function x(y,w){const R=e.update(p);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new _n(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,R,f,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,R,m,p,null)}function S(y,w,R,W,b,C){let D=null;const J=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(J!==void 0?D=J:D=R.isPointLight===!0?c:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const ne=D.uuid,N=w.uuid;let X=l[ne];X===void 0&&(X={},l[ne]=X);let O=X[N];O===void 0&&(O=D.clone(),X[N]=O),D=O}return D.visible=w.visible,D.wireframe=w.wireframe,C===si?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:h[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaTest,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,R.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(R.matrixWorld),D.nearDistance=W,D.farDistance=b),D}function L(y,w,R,W,b){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===si)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const J=e.update(y),ne=y.material;if(Array.isArray(ne)){const N=J.groups;for(let X=0,O=N.length;X<O;X++){const K=N[X],Q=ne[K.materialIndex];if(Q&&Q.visible){const Z=S(y,Q,W,R.near,R.far,b);r.renderBufferDirect(R,null,J,Z,y,K)}}}else if(ne.visible){const N=S(y,ne,W,R.near,R.far,b);r.renderBufferDirect(R,null,J,N,y,null)}}const D=y.children;for(let J=0,ne=D.length;J<ne;J++)L(D[J],w,R,W,b)}}function rf(r,e,t){const n=t.isWebGL2;function i(){let E=!1;const se=new Qe;let z=null;const ce=new Qe(0,0,0,0);return{setMask:function(le){z!==le&&!E&&(r.colorMask(le,le,le,le),z=le)},setLocked:function(le){E=le},setClear:function(le,Re,Ye,Ve,Zt){Zt===!0&&(le*=Ve,Re*=Ve,Ye*=Ve),se.set(le,Re,Ye,Ve),ce.equals(se)===!1&&(r.clearColor(le,Re,Ye,Ve),ce.copy(se))},reset:function(){E=!1,z=null,ce.set(-1,0,0,0)}}}function s(){let E=!1,se=null,z=null,ce=null;return{setTest:function(le){le?Ee(2929):pe(2929)},setMask:function(le){se!==le&&!E&&(r.depthMask(le),se=le)},setFunc:function(le){if(z!==le){if(le)switch(le){case So:r.depthFunc(512);break;case wo:r.depthFunc(519);break;case To:r.depthFunc(513);break;case Rs:r.depthFunc(515);break;case Lo:r.depthFunc(514);break;case Co:r.depthFunc(518);break;case Ro:r.depthFunc(516);break;case Eo:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);z=le}},setLocked:function(le){E=le},setClear:function(le){ce!==le&&(r.clearDepth(le),ce=le)},reset:function(){E=!1,se=null,z=null,ce=null}}}function o(){let E=!1,se=null,z=null,ce=null,le=null,Re=null,Ye=null,Ve=null,Zt=null;return{setTest:function(We){E||(We?Ee(2960):pe(2960))},setMask:function(We){se!==We&&!E&&(r.stencilMask(We),se=We)},setFunc:function(We,Xt,mt){(z!==We||ce!==Xt||le!==mt)&&(r.stencilFunc(We,Xt,mt),z=We,ce=Xt,le=mt)},setOp:function(We,Xt,mt){(Re!==We||Ye!==Xt||Ve!==mt)&&(r.stencilOp(We,Xt,mt),Re=We,Ye=Xt,Ve=mt)},setLocked:function(We){E=We},setClear:function(We){Zt!==We&&(r.clearStencil(We),Zt=We)},reset:function(){E=!1,se=null,z=null,ce=null,le=null,Re=null,Ye=null,Ve=null,Zt=null}}}const a=new i,c=new s,l=new o,d=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,p=[],u=null,x=!1,S=null,L=null,y=null,w=null,R=null,W=null,b=null,C=!1,D=null,J=null,ne=null,N=null,X=null;const O=r.getParameter(35661);let K=!1,Q=0;const Z=r.getParameter(7938);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=Q>=2);let I=null,F={};const ee=r.getParameter(3088),Y=r.getParameter(2978),ie=new Qe().fromArray(ee),ue=new Qe().fromArray(Y);function xe(E,se,z){const ce=new Uint8Array(4),le=r.createTexture();r.bindTexture(E,le),r.texParameteri(E,10241,9728),r.texParameteri(E,10240,9728);for(let Re=0;Re<z;Re++)r.texImage2D(se+Re,0,6408,1,1,0,6408,5121,ce);return le}const B={};B[3553]=xe(3553,3553,1),B[34067]=xe(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ee(2929),c.setFunc(Rs),Be(!1),ct(ks),Ee(2884),Ne(qt);function Ee(E){f[E]!==!0&&(r.enable(E),f[E]=!0)}function pe(E){f[E]!==!1&&(r.disable(E),f[E]=!1)}function _e(E,se){return m[E]!==se?(r.bindFramebuffer(E,se),m[E]=se,n&&(E===36009&&(m[36160]=se),E===36160&&(m[36009]=se)),!0):!1}function de(E,se){let z=p,ce=!1;if(E)if(z=g.get(se),z===void 0&&(z=[],g.set(se,z)),E.isWebGLMultipleRenderTargets){const le=E.texture;if(z.length!==le.length||z[0]!==36064){for(let Re=0,Ye=le.length;Re<Ye;Re++)z[Re]=36064+Re;z.length=le.length,ce=!0}}else z[0]!==36064&&(z[0]=36064,ce=!0);else z[0]!==1029&&(z[0]=1029,ce=!0);ce&&(t.isWebGL2?r.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}function Ie(E){return u!==E?(r.useProgram(E),u=E,!0):!1}const ve={[Nn]:32774,[ho]:32778,[fo]:32779};if(n)ve[js]=32775,ve[Qs]=32776;else{const E=e.get("EXT_blend_minmax");E!==null&&(ve[js]=E.MIN_EXT,ve[Qs]=E.MAX_EXT)}const fe={[po]:0,[mo]:1,[go]:768,[ga]:770,[Mo]:776,[yo]:774,[_o]:772,[xo]:769,[xa]:771,[vo]:775,[bo]:773};function Ne(E,se,z,ce,le,Re,Ye,Ve){if(E===qt){x===!0&&(pe(3042),x=!1);return}if(x===!1&&(Ee(3042),x=!0),E!==uo){if(E!==S||Ve!==C){if((L!==Nn||R!==Nn)&&(r.blendEquation(32774),L=Nn,R=Nn),Ve)switch(E){case Zn:r.blendFuncSeparate(1,771,1,771);break;case Ks:r.blendFunc(1,1);break;case Ys:r.blendFuncSeparate(0,769,0,1);break;case Js:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Zn:r.blendFuncSeparate(770,771,1,771);break;case Ks:r.blendFunc(770,1);break;case Ys:r.blendFuncSeparate(0,769,0,1);break;case Js:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}y=null,w=null,W=null,b=null,S=E,C=Ve}return}le=le||se,Re=Re||z,Ye=Ye||ce,(se!==L||le!==R)&&(r.blendEquationSeparate(ve[se],ve[le]),L=se,R=le),(z!==y||ce!==w||Re!==W||Ye!==b)&&(r.blendFuncSeparate(fe[z],fe[ce],fe[Re],fe[Ye]),y=z,w=ce,W=Re,b=Ye),S=E,C=null}function je(E,se){E.side===Pt?pe(2884):Ee(2884);let z=E.side===vt;se&&(z=!z),Be(z),E.blending===Zn&&E.transparent===!1?Ne(qt):Ne(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),c.setFunc(E.depthFunc),c.setTest(E.depthTest),c.setMask(E.depthWrite),a.setMask(E.colorWrite);const ce=E.stencilWrite;l.setTest(ce),ce&&(l.setMask(E.stencilWriteMask),l.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),l.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Ae(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Ee(32926):pe(32926)}function Be(E){D!==E&&(E?r.frontFace(2304):r.frontFace(2305),D=E)}function ct(E){E!==oo?(Ee(2884),E!==J&&(E===ks?r.cullFace(1029):E===lo?r.cullFace(1028):r.cullFace(1032))):pe(2884),J=E}function Oe(E){E!==ne&&(K&&r.lineWidth(E),ne=E)}function Ae(E,se,z){E?(Ee(32823),(N!==se||X!==z)&&(r.polygonOffset(se,z),N=se,X=z)):pe(32823)}function pt(E){E?Ee(3089):pe(3089)}function dt(E){E===void 0&&(E=33984+O-1),I!==E&&(r.activeTexture(E),I=E)}function T(E,se){I===null&&dt();let z=F[I];z===void 0&&(z={type:void 0,texture:void 0},F[I]=z),(z.type!==E||z.texture!==se)&&(r.bindTexture(E,se||B[E]),z.type=E,z.texture=se)}function _(){const E=F[I];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function q(){try{r.texSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function me(){try{r.texStorage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function v(){try{r.texStorage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function k(){try{r.texImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function $(){try{r.texImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function oe(E){ie.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),ie.copy(E))}function re(E){ue.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),ue.copy(E))}function ge(E,se){let z=h.get(se);z===void 0&&(z=new WeakMap,h.set(se,z));let ce=z.get(E);ce===void 0&&(ce=r.getUniformBlockIndex(se,E.name),z.set(E,ce))}function Te(E,se){const ce=h.get(se).get(E);d.get(E)!==ce&&(r.uniformBlockBinding(se,ce,E.__bindingPointIndex),d.set(E,ce))}function De(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},I=null,F={},m={},g=new WeakMap,p=[],u=null,x=!1,S=null,L=null,y=null,w=null,R=null,W=null,b=null,C=!1,D=null,J=null,ne=null,N=null,X=null,ie.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ee,disable:pe,bindFramebuffer:_e,drawBuffers:de,useProgram:Ie,setBlending:Ne,setMaterial:je,setFlipSided:Be,setCullFace:ct,setLineWidth:Oe,setPolygonOffset:Ae,setScissorTest:pt,activeTexture:dt,bindTexture:T,unbindTexture:_,compressedTexImage2D:H,texImage2D:k,texImage3D:$,updateUBOMapping:ge,uniformBlockBinding:Te,texStorage2D:me,texStorage3D:v,texSubImage2D:j,texSubImage3D:q,compressedTexSubImage2D:ae,scissor:oe,viewport:re,reset:De}}function af(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,d=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const u=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,_){return x?new OffscreenCanvas(T,_):Ni("canvas")}function L(T,_,H,j){let q=1;if((T.width>j||T.height>j)&&(q=j/Math.max(T.width,T.height)),q<1||_===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ae=_?Vi:Math.floor,me=ae(q*T.width),v=ae(q*T.height);p===void 0&&(p=S(me,v));const k=H?S(me,v):p;return k.width=me,k.height=v,k.getContext("2d").drawImage(T,0,0,me,v),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+me+"x"+v+")."),k}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return Xs(T.width)&&Xs(T.height)}function w(T){return a?!1:T.wrapS!==Lt||T.wrapT!==Lt||T.minFilter!==ot&&T.minFilter!==_t}function R(T,_){return T.generateMipmaps&&_&&T.minFilter!==ot&&T.minFilter!==_t}function W(T){r.generateMipmap(T)}function b(T,_,H,j,q=!1){if(a===!1)return _;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=_;return _===6403&&(H===5126&&(ae=33326),H===5131&&(ae=33325),H===5121&&(ae=33321)),_===33319&&(H===5126&&(ae=33328),H===5131&&(ae=33327),H===5121&&(ae=33323)),_===6408&&(H===5126&&(ae=34836),H===5131&&(ae=34842),H===5121&&(ae=j===He&&q===!1?35907:32856),H===32819&&(ae=32854),H===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function C(T,_,H){return R(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==ot&&T.minFilter!==_t?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function D(T){return T===ot||T===qs||T===$s?9728:9729}function J(T){const _=T.target;_.removeEventListener("dispose",J),N(_),_.isVideoTexture&&g.delete(_)}function ne(T){const _=T.target;_.removeEventListener("dispose",ne),O(_)}function N(T){const _=n.get(T);if(_.__webglInit===void 0)return;const H=T.source,j=u.get(H);if(j){const q=j[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&X(T),Object.keys(j).length===0&&u.delete(H)}n.remove(T)}function X(T){const _=n.get(T);r.deleteTexture(_.__webglTexture);const H=T.source,j=u.get(H);delete j[_.__cacheKey],o.memory.textures--}function O(T){const _=T.texture,H=n.get(T),j=n.get(_);if(j.__webglTexture!==void 0&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++)r.deleteFramebuffer(H.__webglFramebuffer[q]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[q]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let q=0;q<H.__webglColorRenderbuffer.length;q++)H.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[q]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let q=0,ae=_.length;q<ae;q++){const me=n.get(_[q]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(_[q])}n.remove(_),n.remove(T)}let K=0;function Q(){K=0}function Z(){const T=K;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),K+=1,T}function I(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.encoding),_.join()}function F(T,_){const H=n.get(T);if(T.isVideoTexture&&pt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(H,T,_);return}}t.activeTexture(33984+_),t.bindTexture(3553,H.__webglTexture)}function ee(T,_){const H=n.get(T);if(T.version>0&&H.__version!==T.version){pe(H,T,_);return}t.activeTexture(33984+_),t.bindTexture(35866,H.__webglTexture)}function Y(T,_){const H=n.get(T);if(T.version>0&&H.__version!==T.version){pe(H,T,_);return}t.activeTexture(33984+_),t.bindTexture(32879,H.__webglTexture)}function ie(T,_){const H=n.get(T);if(T.version>0&&H.__version!==T.version){_e(H,T,_);return}t.activeTexture(33984+_),t.bindTexture(34067,H.__webglTexture)}const ue={[Ps]:10497,[Lt]:33071,[Is]:33648},xe={[ot]:9728,[qs]:9984,[$s]:9986,[_t]:9729,[Wo]:9985,[Bi]:9987};function B(T,_,H){if(H?(r.texParameteri(T,10242,ue[_.wrapS]),r.texParameteri(T,10243,ue[_.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,ue[_.wrapR]),r.texParameteri(T,10240,xe[_.magFilter]),r.texParameteri(T,10241,xe[_.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(_.wrapS!==Lt||_.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,D(_.magFilter)),r.texParameteri(T,10241,D(_.minFilter)),_.minFilter!==ot&&_.minFilter!==_t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(_.type===un&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===di&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(r.texParameterf(T,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Ee(T,_){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",J));const j=_.source;let q=u.get(j);q===void 0&&(q={},u.set(j,q));const ae=I(_);if(ae!==T.__cacheKey){q[ae]===void 0&&(q[ae]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),q[ae].usedTimes++;const me=q[T.__cacheKey];me!==void 0&&(q[T.__cacheKey].usedTimes--,me.usedTimes===0&&X(_)),T.__cacheKey=ae,T.__webglTexture=q[ae].texture}return H}function pe(T,_,H){let j=3553;_.isDataArrayTexture&&(j=35866),_.isData3DTexture&&(j=32879);const q=Ee(T,_),ae=_.source;if(t.activeTexture(33984+H),t.bindTexture(j,T.__webglTexture),ae.version!==ae.__currentVersion||q===!0){r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);const me=w(_)&&y(_.image)===!1;let v=L(_.image,me,!1,d);v=dt(_,v);const k=y(v)||a,$=s.convert(_.format,_.encoding);let oe=s.convert(_.type),re=b(_.internalFormat,$,oe,_.encoding,_.isVideoTexture);B(j,_,k);let ge;const Te=_.mipmaps,De=a&&_.isVideoTexture!==!0,E=ae.__currentVersion===void 0||q===!0,se=C(_,v,k);if(_.isDepthTexture)re=6402,a?_.type===un?re=36012:_.type===dn?re=33190:_.type===Bn?re=35056:re=33189:_.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===pn&&re===6402&&_.type!==ya&&_.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=dn,oe=s.convert(_.type)),_.format===Yn&&re===6402&&(re=34041,_.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Bn,oe=s.convert(_.type))),E&&(De?t.texStorage2D(3553,1,re,v.width,v.height):t.texImage2D(3553,0,re,v.width,v.height,0,$,oe,null));else if(_.isDataTexture)if(Te.length>0&&k){De&&E&&t.texStorage2D(3553,se,re,Te[0].width,Te[0].height);for(let z=0,ce=Te.length;z<ce;z++)ge=Te[z],De?t.texSubImage2D(3553,z,0,0,ge.width,ge.height,$,oe,ge.data):t.texImage2D(3553,z,re,ge.width,ge.height,0,$,oe,ge.data);_.generateMipmaps=!1}else De?(E&&t.texStorage2D(3553,se,re,v.width,v.height),t.texSubImage2D(3553,0,0,0,v.width,v.height,$,oe,v.data)):t.texImage2D(3553,0,re,v.width,v.height,0,$,oe,v.data);else if(_.isCompressedTexture){De&&E&&t.texStorage2D(3553,se,re,Te[0].width,Te[0].height);for(let z=0,ce=Te.length;z<ce;z++)ge=Te[z],_.format!==It?$!==null?De?t.compressedTexSubImage2D(3553,z,0,0,ge.width,ge.height,$,ge.data):t.compressedTexImage2D(3553,z,re,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(3553,z,0,0,ge.width,ge.height,$,oe,ge.data):t.texImage2D(3553,z,re,ge.width,ge.height,0,$,oe,ge.data)}else if(_.isDataArrayTexture)De?(E&&t.texStorage3D(35866,se,re,v.width,v.height,v.depth),t.texSubImage3D(35866,0,0,0,0,v.width,v.height,v.depth,$,oe,v.data)):t.texImage3D(35866,0,re,v.width,v.height,v.depth,0,$,oe,v.data);else if(_.isData3DTexture)De?(E&&t.texStorage3D(32879,se,re,v.width,v.height,v.depth),t.texSubImage3D(32879,0,0,0,0,v.width,v.height,v.depth,$,oe,v.data)):t.texImage3D(32879,0,re,v.width,v.height,v.depth,0,$,oe,v.data);else if(_.isFramebufferTexture){if(E)if(De)t.texStorage2D(3553,se,re,v.width,v.height);else{let z=v.width,ce=v.height;for(let le=0;le<se;le++)t.texImage2D(3553,le,re,z,ce,0,$,oe,null),z>>=1,ce>>=1}}else if(Te.length>0&&k){De&&E&&t.texStorage2D(3553,se,re,Te[0].width,Te[0].height);for(let z=0,ce=Te.length;z<ce;z++)ge=Te[z],De?t.texSubImage2D(3553,z,0,0,$,oe,ge):t.texImage2D(3553,z,re,$,oe,ge);_.generateMipmaps=!1}else De?(E&&t.texStorage2D(3553,se,re,v.width,v.height),t.texSubImage2D(3553,0,0,0,$,oe,v)):t.texImage2D(3553,0,re,$,oe,v);R(_,k)&&W(j),ae.__currentVersion=ae.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function _e(T,_,H){if(_.image.length!==6)return;const j=Ee(T,_),q=_.source;if(t.activeTexture(33984+H),t.bindTexture(34067,T.__webglTexture),q.version!==q.__currentVersion||j===!0){r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);const ae=_.isCompressedTexture||_.image[0].isCompressedTexture,me=_.image[0]&&_.image[0].isDataTexture,v=[];for(let z=0;z<6;z++)!ae&&!me?v[z]=L(_.image[z],!1,!0,l):v[z]=me?_.image[z].image:_.image[z],v[z]=dt(_,v[z]);const k=v[0],$=y(k)||a,oe=s.convert(_.format,_.encoding),re=s.convert(_.type),ge=b(_.internalFormat,oe,re,_.encoding),Te=a&&_.isVideoTexture!==!0,De=q.__currentVersion===void 0||j===!0;let E=C(_,k,$);B(34067,_,$);let se;if(ae){Te&&De&&t.texStorage2D(34067,E,ge,k.width,k.height);for(let z=0;z<6;z++){se=v[z].mipmaps;for(let ce=0;ce<se.length;ce++){const le=se[ce];_.format!==It?oe!==null?Te?t.compressedTexSubImage2D(34069+z,ce,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(34069+z,ce,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(34069+z,ce,0,0,le.width,le.height,oe,re,le.data):t.texImage2D(34069+z,ce,ge,le.width,le.height,0,oe,re,le.data)}}}else{se=_.mipmaps,Te&&De&&(se.length>0&&E++,t.texStorage2D(34067,E,ge,v[0].width,v[0].height));for(let z=0;z<6;z++)if(me){Te?t.texSubImage2D(34069+z,0,0,0,v[z].width,v[z].height,oe,re,v[z].data):t.texImage2D(34069+z,0,ge,v[z].width,v[z].height,0,oe,re,v[z].data);for(let ce=0;ce<se.length;ce++){const Re=se[ce].image[z].image;Te?t.texSubImage2D(34069+z,ce+1,0,0,Re.width,Re.height,oe,re,Re.data):t.texImage2D(34069+z,ce+1,ge,Re.width,Re.height,0,oe,re,Re.data)}}else{Te?t.texSubImage2D(34069+z,0,0,0,oe,re,v[z]):t.texImage2D(34069+z,0,ge,oe,re,v[z]);for(let ce=0;ce<se.length;ce++){const le=se[ce];Te?t.texSubImage2D(34069+z,ce+1,0,0,oe,re,le.image[z]):t.texImage2D(34069+z,ce+1,ge,oe,re,le.image[z])}}}R(_,$)&&W(34067),q.__currentVersion=q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function de(T,_,H,j,q){const ae=s.convert(H.format,H.encoding),me=s.convert(H.type),v=b(H.internalFormat,ae,me,H.encoding);n.get(_).__hasExternalTextures||(q===32879||q===35866?t.texImage3D(q,0,v,_.width,_.height,_.depth,0,ae,me,null):t.texImage2D(q,0,v,_.width,_.height,0,ae,me,null)),t.bindFramebuffer(36160,T),Ae(_)?f.framebufferTexture2DMultisampleEXT(36160,j,q,n.get(H).__webglTexture,0,Oe(_)):r.framebufferTexture2D(36160,j,q,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(T,_,H){if(r.bindRenderbuffer(36161,T),_.depthBuffer&&!_.stencilBuffer){let j=33189;if(H||Ae(_)){const q=_.depthTexture;q&&q.isDepthTexture&&(q.type===un?j=36012:q.type===dn&&(j=33190));const ae=Oe(_);Ae(_)?f.renderbufferStorageMultisampleEXT(36161,ae,j,_.width,_.height):r.renderbufferStorageMultisample(36161,ae,j,_.width,_.height)}else r.renderbufferStorage(36161,j,_.width,_.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(_.depthBuffer&&_.stencilBuffer){const j=Oe(_);H&&Ae(_)===!1?r.renderbufferStorageMultisample(36161,j,35056,_.width,_.height):Ae(_)?f.renderbufferStorageMultisampleEXT(36161,j,35056,_.width,_.height):r.renderbufferStorage(36161,34041,_.width,_.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const j=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let q=0;q<j.length;q++){const ae=j[q],me=s.convert(ae.format,ae.encoding),v=s.convert(ae.type),k=b(ae.internalFormat,me,v,ae.encoding),$=Oe(_);H&&Ae(_)===!1?r.renderbufferStorageMultisample(36161,$,k,_.width,_.height):Ae(_)?f.renderbufferStorageMultisampleEXT(36161,$,k,_.width,_.height):r.renderbufferStorage(36161,k,_.width,_.height)}}r.bindRenderbuffer(36161,null)}function ve(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),F(_.depthTexture,0);const j=n.get(_.depthTexture).__webglTexture,q=Oe(_);if(_.depthTexture.format===pn)Ae(_)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,q):r.framebufferTexture2D(36160,36096,3553,j,0);else if(_.depthTexture.format===Yn)Ae(_)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,q):r.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function fe(T){const _=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ve(_.__webglFramebuffer,T)}else if(H){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]=r.createRenderbuffer(),Ie(_.__webglDepthbuffer[j],T,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=r.createRenderbuffer(),Ie(_.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function Ne(T,_,H){const j=n.get(T);_!==void 0&&de(j.__webglFramebuffer,T,T.texture,36064,3553),H!==void 0&&fe(T)}function je(T){const _=T.texture,H=n.get(T),j=n.get(_);T.addEventListener("dispose",ne),T.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=_.version,o.memory.textures++);const q=T.isWebGLCubeRenderTarget===!0,ae=T.isWebGLMultipleRenderTargets===!0,me=y(T)||a;if(q){H.__webglFramebuffer=[];for(let v=0;v<6;v++)H.__webglFramebuffer[v]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),ae)if(i.drawBuffers){const v=T.texture;for(let k=0,$=v.length;k<$;k++){const oe=n.get(v[k]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Ae(T)===!1){const v=ae?_:[_];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let k=0;k<v.length;k++){const $=v[k];H.__webglColorRenderbuffer[k]=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer[k]);const oe=s.convert($.format,$.encoding),re=s.convert($.type),ge=b($.internalFormat,oe,re,$.encoding),Te=Oe(T);r.renderbufferStorageMultisample(36161,Te,ge,T.width,T.height),r.framebufferRenderbuffer(36160,36064+k,36161,H.__webglColorRenderbuffer[k])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(q){t.bindTexture(34067,j.__webglTexture),B(34067,_,me);for(let v=0;v<6;v++)de(H.__webglFramebuffer[v],T,_,36064,34069+v);R(_,me)&&W(34067),t.unbindTexture()}else if(ae){const v=T.texture;for(let k=0,$=v.length;k<$;k++){const oe=v[k],re=n.get(oe);t.bindTexture(3553,re.__webglTexture),B(3553,oe,me),de(H.__webglFramebuffer,T,oe,36064+k,3553),R(oe,me)&&W(3553)}t.unbindTexture()}else{let v=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?v=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(v,j.__webglTexture),B(v,_,me),de(H.__webglFramebuffer,T,_,36064,v),R(_,me)&&W(v),t.unbindTexture()}T.depthBuffer&&fe(T)}function Be(T){const _=y(T)||a,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let j=0,q=H.length;j<q;j++){const ae=H[j];if(R(ae,_)){const me=T.isWebGLCubeRenderTarget?34067:3553,v=n.get(ae).__webglTexture;t.bindTexture(me,v),W(me),t.unbindTexture()}}}function ct(T){if(a&&T.samples>0&&Ae(T)===!1){const _=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,j=T.height;let q=16384;const ae=[],me=T.stencilBuffer?33306:36096,v=n.get(T),k=T.isWebGLMultipleRenderTargets===!0;if(k)for(let $=0;$<_.length;$++)t.bindFramebuffer(36160,v.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+$,36161,null),t.bindFramebuffer(36160,v.__webglFramebuffer),r.framebufferTexture2D(36009,36064+$,3553,null,0);t.bindFramebuffer(36008,v.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,v.__webglFramebuffer);for(let $=0;$<_.length;$++){ae.push(36064+$),T.depthBuffer&&ae.push(me);const oe=v.__ignoreDepthValues!==void 0?v.__ignoreDepthValues:!1;if(oe===!1&&(T.depthBuffer&&(q|=256),T.stencilBuffer&&(q|=1024)),k&&r.framebufferRenderbuffer(36008,36064,36161,v.__webglColorRenderbuffer[$]),oe===!0&&(r.invalidateFramebuffer(36008,[me]),r.invalidateFramebuffer(36009,[me])),k){const re=n.get(_[$]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,re,0)}r.blitFramebuffer(0,0,H,j,0,0,H,j,q,9728),m&&r.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let $=0;$<_.length;$++){t.bindFramebuffer(36160,v.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+$,36161,v.__webglColorRenderbuffer[$]);const oe=n.get(_[$]).__webglTexture;t.bindFramebuffer(36160,v.__webglFramebuffer),r.framebufferTexture2D(36009,36064+$,3553,oe,0)}t.bindFramebuffer(36009,v.__webglMultisampledFramebuffer)}}function Oe(T){return Math.min(h,T.samples)}function Ae(T){const _=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function pt(T){const _=o.render.frame;g.get(T)!==_&&(g.set(T,_),T.update())}function dt(T,_){const H=T.encoding,j=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===As||H!==xn&&(H===He?a===!1?e.has("EXT_sRGB")===!0&&j===It?(T.format=As,T.minFilter=_t,T.generateMipmaps=!1):_=wa.sRGBToLinear(_):(j!==It||q!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),_}this.allocateTextureUnit=Z,this.resetTextureUnits=Q,this.setTexture2D=F,this.setTexture2DArray=ee,this.setTexture3D=Y,this.setTextureCube=ie,this.rebindTextures=Ne,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ae}function of(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===gn)return 5121;if(s===No)return 32819;if(s===Uo)return 32820;if(s===zo)return 5120;if(s===Ho)return 5122;if(s===ya)return 5123;if(s===Vo)return 5124;if(s===dn)return 5125;if(s===un)return 5126;if(s===di)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Zo)return 6406;if(s===It)return 6408;if(s===Oo)return 6409;if(s===ko)return 6410;if(s===pn)return 6402;if(s===Yn)return 34041;if(s===Ko)return 6403;if(s===Bo)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===As)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Yo)return 36244;if(s===Jo)return 33319;if(s===jo)return 33320;if(s===Qo)return 36249;if(s===ji||s===Qi||s===qi||s===$i)if(o===He)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ji)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$i)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ji)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$i)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===er||s===tr||s===nr||s===ir)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===er)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ir)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sr||s===rr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===sr)return o===He?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rr)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ar||s===or||s===lr||s===cr||s===dr||s===ur||s===hr||s===fr||s===pr||s===mr||s===gr||s===xr||s===_r||s===br)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ar)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===or)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lr)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cr)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dr)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ur)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hr)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fr)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pr)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mr)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gr)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xr)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_r)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===br)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===yr)return o===He?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Bn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class lf extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fn extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cf={type:"move"};class Ts{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const u=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const S=new fn;S.matrixAutoUpdate=!1,S.visible=!1,l.joints[p.jointName]=S,l.add(S)}const x=l.joints[p.jointName];u!==null&&(x.matrix.fromArray(u.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=u.radius),x.visible=u!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class df extends Rt{constructor(e,t,n,i,s,o,a,c,l,d){if(d=d!==void 0?d:pn,d!==pn&&d!==Yn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===pn&&(n=dn),n===void 0&&d===Yn&&(n=Bn),super(null,i,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ot,this.minFilter=c!==void 0?c:ot,this.flipY=!1,this.generateMipmaps=!1}}class uf extends vn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=null,l=null,d=null,h=null,f=null,m=null;const g=t.getContextAttributes();let p=null,u=null;const x=[],S=[],L=new bt;L.layers.enable(1),L.viewport=new Qe;const y=new bt;y.layers.enable(2),y.viewport=new Qe;const w=[L,y],R=new lf;R.layers.enable(1),R.layers.enable(2);let W=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let F=x[I];return F===void 0&&(F=new Ts,x[I]=F),F.getTargetRaySpace()},this.getControllerGrip=function(I){let F=x[I];return F===void 0&&(F=new Ts,x[I]=F),F.getGripSpace()},this.getHand=function(I){let F=x[I];return F===void 0&&(F=new Ts,x[I]=F),F.getHandSpace()};function C(I){const F=S.indexOf(I.inputSource);if(F===-1)return;const ee=x[F];ee!==void 0&&ee.dispatchEvent({type:I.type,data:I.inputSource})}function D(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",J);for(let I=0;I<x.length;I++){const F=S[I];F!==null&&(S[I]=null,x[I].disconnect(F))}W=null,b=null,e.setRenderTarget(p),f=null,h=null,d=null,i=null,u=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",D),i.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,F),i.updateRenderState({baseLayer:f}),u=new _n(f.framebufferWidth,f.framebufferHeight,{format:It,type:gn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let F=null,ee=null,Y=null;g.depth&&(Y=g.stencil?35056:33190,F=g.stencil?Yn:pn,ee=g.stencil?Bn:dn);const ie={colorFormat:32856,depthFormat:Y,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(ie),i.updateRenderState({layers:[h]}),u=new _n(h.textureWidth,h.textureHeight,{format:It,type:gn,depthTexture:new df(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ue=e.properties.get(u);ue.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function J(I){for(let F=0;F<I.removed.length;F++){const ee=I.removed[F],Y=S.indexOf(ee);Y>=0&&(S[Y]=null,x[Y].dispatchEvent({type:"disconnected",data:ee}))}for(let F=0;F<I.added.length;F++){const ee=I.added[F];let Y=S.indexOf(ee);if(Y===-1){for(let ue=0;ue<x.length;ue++)if(ue>=S.length){S.push(ee),Y=ue;break}else if(S[ue]===null){S[ue]=ee,Y=ue;break}if(Y===-1)break}const ie=x[Y];ie&&ie.dispatchEvent({type:"connected",data:ee})}}const ne=new G,N=new G;function X(I,F,ee){ne.setFromMatrixPosition(F.matrixWorld),N.setFromMatrixPosition(ee.matrixWorld);const Y=ne.distanceTo(N),ie=F.projectionMatrix.elements,ue=ee.projectionMatrix.elements,xe=ie[14]/(ie[10]-1),B=ie[14]/(ie[10]+1),Ee=(ie[9]+1)/ie[5],pe=(ie[9]-1)/ie[5],_e=(ie[8]-1)/ie[0],de=(ue[8]+1)/ue[0],Ie=xe*_e,ve=xe*de,fe=Y/(-_e+de),Ne=fe*-_e;F.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ne),I.translateZ(fe),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const je=xe+fe,Be=B+fe,ct=Ie-Ne,Oe=ve+(Y-Ne),Ae=Ee*B/Be*je,pt=pe*B/Be*je;I.projectionMatrix.makePerspective(ct,Oe,Ae,pt,je,Be)}function O(I,F){F===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(F.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;R.near=y.near=L.near=I.near,R.far=y.far=L.far=I.far,(W!==R.near||b!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),W=R.near,b=R.far);const F=I.parent,ee=R.cameras;O(R,F);for(let ie=0;ie<ee.length;ie++)O(ee[ie],F);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),I.matrix.copy(R.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const Y=I.children;for(let ie=0,ue=Y.length;ie<ue;ie++)Y[ie].updateMatrixWorld(!0);ee.length===2?X(R,L,y):R.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(I){h!==null&&(h.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)};let K=null;function Q(I,F){if(l=F.getViewerPose(c||o),m=F,l!==null){const ee=l.views;f!==null&&(e.setRenderTargetFramebuffer(u,f.framebuffer),e.setRenderTarget(u));let Y=!1;ee.length!==R.cameras.length&&(R.cameras.length=0,Y=!0);for(let ie=0;ie<ee.length;ie++){const ue=ee[ie];let xe=null;if(f!==null)xe=f.getViewport(ue);else{const Ee=d.getViewSubImage(h,ue);xe=Ee.viewport,ie===0&&(e.setRenderTargetTextures(u,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(u))}let B=w[ie];B===void 0&&(B=new bt,B.layers.enable(ie),B.viewport=new Qe,w[ie]=B),B.matrix.fromArray(ue.transform.matrix),B.projectionMatrix.fromArray(ue.projectionMatrix),B.viewport.set(xe.x,xe.y,xe.width,xe.height),ie===0&&R.matrix.copy(B.matrix),Y===!0&&R.cameras.push(B)}}for(let ee=0;ee<x.length;ee++){const Y=S[ee],ie=x[ee];Y!==null&&ie!==void 0&&ie.update(Y,F,c||o)}K&&K(I,F),m=null}const Z=new Aa;Z.setAnimationLoop(Q),this.setAnimationLoop=function(I){K=I},this.dispose=function(){}}}function hf(r,e){function t(p,u){p.fogColor.value.copy(u.color),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,x,S,L){u.isMeshBasicMaterial||u.isMeshLambertMaterial?i(p,u):u.isMeshToonMaterial?(i(p,u),d(p,u)):u.isMeshPhongMaterial?(i(p,u),l(p,u)):u.isMeshStandardMaterial?(i(p,u),h(p,u),u.isMeshPhysicalMaterial&&f(p,u,L)):u.isMeshMatcapMaterial?(i(p,u),m(p,u)):u.isMeshDepthMaterial?i(p,u):u.isMeshDistanceMaterial?(i(p,u),g(p,u)):u.isMeshNormalMaterial?i(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?a(p,u,x,S):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function i(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===vt&&(p.bumpScale.value*=-1)),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===vt&&p.normalScale.value.negate()),u.specularMap&&(p.specularMap.value=u.specularMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const x=e.get(u).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*y}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity);let S;u.map?S=u.map:u.specularMap?S=u.specularMap:u.displacementMap?S=u.displacementMap:u.normalMap?S=u.normalMap:u.bumpMap?S=u.bumpMap:u.roughnessMap?S=u.roughnessMap:u.metalnessMap?S=u.metalnessMap:u.alphaMap?S=u.alphaMap:u.emissiveMap?S=u.emissiveMap:u.clearcoatMap?S=u.clearcoatMap:u.clearcoatNormalMap?S=u.clearcoatNormalMap:u.clearcoatRoughnessMap?S=u.clearcoatRoughnessMap:u.iridescenceMap?S=u.iridescenceMap:u.iridescenceThicknessMap?S=u.iridescenceThicknessMap:u.specularIntensityMap?S=u.specularIntensityMap:u.specularColorMap?S=u.specularColorMap:u.transmissionMap?S=u.transmissionMap:u.thicknessMap?S=u.thicknessMap:u.sheenColorMap?S=u.sheenColorMap:u.sheenRoughnessMap&&(S=u.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let L;u.aoMap?L=u.aoMap:u.lightMap&&(L=u.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),p.uv2Transform.value.copy(L.matrix))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function a(p,u,x,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*x,p.scale.value=S*.5,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let L;u.map?L=u.map:u.alphaMap&&(L=u.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),p.uvTransform.value.copy(L.matrix))}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let x;u.map?x=u.map:u.alphaMap&&(x=u.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.roughness.value=u.roughness,p.metalness.value=u.metalness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap),u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function f(p,u,x){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap)),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap),u.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),p.clearcoatNormalMap.value=u.clearcoatNormalMap,u.side===vt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap)),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap)}function m(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){p.referencePosition.value.copy(u.referencePosition),p.nearDistance.value=u.nearDistance,p.farDistance.value=u.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ff(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(S,L){const y=L.program;n.uniformBlockBinding(S,y)}function l(S,L){let y=i[S.id];y===void 0&&(g(S),y=d(S),i[S.id]=y,S.addEventListener("dispose",u));const w=L.program;n.updateUBOMapping(S,w);const R=e.render.frame;s[S.id]!==R&&(f(S),s[S.id]=R)}function d(S){const L=h();S.__bindingPointIndex=L;const y=r.createBuffer(),w=S.__size,R=S.usage;return r.bindBuffer(35345,y),r.bufferData(35345,w,R),r.bindBuffer(35345,null),r.bindBufferBase(35345,L,y),y}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const L=i[S.id],y=S.uniforms,w=S.__cache;r.bindBuffer(35345,L);for(let R=0,W=y.length;R<W;R++){const b=y[R];if(m(b,R,w)===!0){const C=b.value,D=b.__offset;typeof C=="number"?(b.__data[0]=C,r.bufferSubData(35345,D,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):C.toArray(b.__data),r.bufferSubData(35345,D,b.__data))}}r.bindBuffer(35345,null)}function m(S,L,y){const w=S.value;if(y[L]===void 0)return typeof w=="number"?y[L]=w:y[L]=w.clone(),!0;if(typeof w=="number"){if(y[L]!==w)return y[L]=w,!0}else{const R=y[L];if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(S){const L=S.uniforms;let y=0;const w=16;let R=0;for(let W=0,b=L.length;W<b;W++){const C=L[W],D=p(C);if(C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,W>0){R=y%w;const J=w-R;R!==0&&J-D.boundary<0&&(y+=w-R,C.__offset=y)}y+=D.storage}return R=y%w,R>0&&(y+=w-R),S.__size=y,S.__cache={},this}function p(S){const L=S.value,y={boundary:0,storage:0};return typeof L=="number"?(y.boundary=4,y.storage=4):L.isVector2?(y.boundary=8,y.storage=8):L.isVector3||L.isColor?(y.boundary=16,y.storage=12):L.isVector4?(y.boundary=16,y.storage=16):L.isMatrix3?(y.boundary=48,y.storage=48):L.isMatrix4?(y.boundary=64,y.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),y}function u(S){const L=S.target;L.removeEventListener("dispose",u);const y=o.indexOf(L.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[L.id]),delete i[L.id],delete s[L.id]}function x(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:c,update:l,dispose:x}}function pf(){const r=Ni("canvas");return r.style.display="block",r}function za(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:pf(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=xn,this.physicallyCorrectLights=!1,this.toneMapping=Ut,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let u=!1,x=0,S=0,L=null,y=-1,w=null;const R=new Qe,W=new Qe;let b=null,C=e.width,D=e.height,J=1,ne=null,N=null;const X=new Qe(0,0,C,D),O=new Qe(0,0,C,D);let K=!1;const Q=new Ia;let Z=!1,I=!1,F=null;const ee=new Ke,Y=new we,ie=new G,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return L===null?J:1}let B=t;function Ee(M,A){for(let V=0;V<M.length;V++){const P=M[V],U=e.getContext(P,A);if(U!==null)return U}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ws}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",De,!1),B===null){const A=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&A.shift(),B=Ee(A,M),B===null)throw Ee(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let pe,_e,de,Ie,ve,fe,Ne,je,Be,ct,Oe,Ae,pt,dt,T,_,H,j,q,ae,me,v,k,$;function oe(){pe=new wu(B),_e=new xu(B,pe,r),pe.init(_e),v=new of(B,pe,_e),de=new rf(B,pe,_e),Ie=new Cu,ve=new Bh,fe=new af(B,pe,de,ve,_e,v,Ie),Ne=new bu(p),je=new Su(p),Be=new Wl(B,_e),k=new mu(B,pe,Be,_e),ct=new Tu(B,Be,Ie,k),Oe=new Pu(B,ct,Be,Ie),q=new Gu(B,_e,fe),_=new _u(ve),Ae=new Zh(p,Ne,je,pe,_e,k,_),pt=new hf(p,ve),dt=new kh,T=new qh(pe,_e),j=new pu(p,Ne,de,Oe,d,o),H=new sf(p,Oe,_e),$=new ff(B,Ie,_e,de),ae=new gu(B,pe,Ie,_e),me=new Lu(B,pe,Ie,_e),Ie.programs=Ae.programs,p.capabilities=_e,p.extensions=pe,p.properties=ve,p.renderLists=dt,p.shadowMap=H,p.state=de,p.info=Ie}oe();const re=new uf(p,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const M=pe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=pe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(C,D,!1))},this.getSize=function(M){return M.set(C,D)},this.setSize=function(M,A,V){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=M,D=A,e.width=Math.floor(M*J),e.height=Math.floor(A*J),V!==!1&&(e.style.width=M+"px",e.style.height=A+"px"),this.setViewport(0,0,M,A)},this.getDrawingBufferSize=function(M){return M.set(C*J,D*J).floor()},this.setDrawingBufferSize=function(M,A,V){C=M,D=A,J=V,e.width=Math.floor(M*V),e.height=Math.floor(A*V),this.setViewport(0,0,M,A)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(X)},this.setViewport=function(M,A,V,P){M.isVector4?X.set(M.x,M.y,M.z,M.w):X.set(M,A,V,P),de.viewport(R.copy(X).multiplyScalar(J).floor())},this.getScissor=function(M){return M.copy(O)},this.setScissor=function(M,A,V,P){M.isVector4?O.set(M.x,M.y,M.z,M.w):O.set(M,A,V,P),de.scissor(W.copy(O).multiplyScalar(J).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(M){de.setScissorTest(K=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){N=M},this.getClearColor=function(M){return M.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(M=!0,A=!0,V=!0){let P=0;M&&(P|=16384),A&&(P|=256),V&&(P|=1024),B.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",De,!1),dt.dispose(),T.dispose(),ve.dispose(),Ne.dispose(),je.dispose(),Oe.dispose(),k.dispose(),$.dispose(),Ae.dispose(),re.dispose(),re.removeEventListener("sessionstart",Re),re.removeEventListener("sessionend",Ye),F&&(F.dispose(),F=null),Ve.stop()};function ge(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;const M=Ie.autoReset,A=H.enabled,V=H.autoUpdate,P=H.needsUpdate,U=H.type;oe(),Ie.autoReset=M,H.enabled=A,H.autoUpdate=V,H.needsUpdate=P,H.type=U}function De(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function E(M){const A=M.target;A.removeEventListener("dispose",E),se(A)}function se(M){z(M),ve.remove(M)}function z(M){const A=ve.get(M).programs;A!==void 0&&(A.forEach(function(V){Ae.releaseProgram(V)}),M.isShaderMaterial&&Ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,A,V,P,U,he){A===null&&(A=ue);const be=U.isMesh&&U.matrixWorld.determinant()<0,Me=Za(M,A,V,P,U);de.setMaterial(P,be);let ye=V.index;const Xe=V.attributes.position;if(ye===null){if(Xe===void 0||Xe.count===0)return}else if(ye.count===0)return;let Le=1;P.wireframe===!0&&(ye=ct.getWireframeAttribute(V),Le=2),k.setup(U,P,Me,V,ye);let Ce,ze=ae;ye!==null&&(Ce=Be.get(ye),ze=me,ze.setIndex(Ce));const en=ye!==null?ye.count:Xe.count,Sn=V.drawRange.start*Le,wn=V.drawRange.count*Le,Et=he!==null?he.start*Le:0,Ge=he!==null?he.count*Le:1/0,Tn=Math.max(Sn,Et),Ue=Math.min(en,Sn+wn,Et+Ge)-1,gt=Math.max(0,Ue-Tn+1);if(gt!==0){if(U.isMesh)P.wireframe===!0?(de.setLineWidth(P.wireframeLinewidth*xe()),ze.setMode(1)):ze.setMode(4);else if(U.isLine){let Bt=P.linewidth;Bt===void 0&&(Bt=1),de.setLineWidth(Bt*xe()),U.isLineSegments?ze.setMode(1):U.isLineLoop?ze.setMode(2):ze.setMode(3)}else U.isPoints?ze.setMode(0):U.isSprite&&ze.setMode(4);if(U.isInstancedMesh)ze.renderInstances(Tn,gt,U.count);else if(V.isInstancedBufferGeometry){const Bt=Math.min(V.instanceCount,V._maxInstanceCount);ze.renderInstances(Tn,gt,Bt)}else ze.render(Tn,gt)}},this.compile=function(M,A){function V(P,U,he){P.transparent===!0&&P.side===Pt?(P.side=vt,P.needsUpdate=!0,fi(P,U,he),P.side=On,P.needsUpdate=!0,fi(P,U,he),P.side=Pt):fi(P,U,he)}f=T.get(M),f.init(),g.push(f),M.traverseVisible(function(P){P.isLight&&P.layers.test(A.layers)&&(f.pushLight(P),P.castShadow&&f.pushShadow(P))}),f.setupLights(p.physicallyCorrectLights),M.traverse(function(P){const U=P.material;if(U)if(Array.isArray(U))for(let he=0;he<U.length;he++){const be=U[he];V(be,M,P)}else V(U,M,P)}),g.pop(),f=null};let ce=null;function le(M){ce&&ce(M)}function Re(){Ve.stop()}function Ye(){Ve.start()}const Ve=new Aa;Ve.setAnimationLoop(le),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(M){ce=M,re.setAnimationLoop(M),M===null?Ve.stop():Ve.start()},re.addEventListener("sessionstart",Re),re.addEventListener("sessionend",Ye),this.render=function(M,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(A),A=re.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,A,L),f=T.get(M,g.length),f.init(),g.push(f),ee.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),Q.setFromProjectionMatrix(ee),I=this.localClippingEnabled,Z=_.init(this.clippingPlanes,I,A),h=dt.get(M,m.length),h.init(),m.push(h),Zt(M,A,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(ne,N),Z===!0&&_.beginShadows();const V=f.state.shadowsArray;if(H.render(V,M,A),Z===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(h,M),f.setupLights(p.physicallyCorrectLights),A.isArrayCamera){const P=A.cameras;for(let U=0,he=P.length;U<he;U++){const be=P[U];We(h,M,be,be.viewport)}}else We(h,M,A);L!==null&&(fe.updateMultisampleRenderTarget(L),fe.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(p,M,A),k.resetDefaultState(),y=-1,w=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Zt(M,A,V,P){if(M.visible===!1)return;if(M.layers.test(A.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(A);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Q.intersectsSprite(M)){P&&ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ee);const be=Oe.update(M),Me=M.material;Me.visible&&h.push(M,be,Me,V,ie.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Ie.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ie.render.frame),!M.frustumCulled||Q.intersectsObject(M))){P&&ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ee);const be=Oe.update(M),Me=M.material;if(Array.isArray(Me)){const ye=be.groups;for(let Xe=0,Le=ye.length;Xe<Le;Xe++){const Ce=ye[Xe],ze=Me[Ce.materialIndex];ze&&ze.visible&&h.push(M,be,ze,V,ie.z,Ce)}}else Me.visible&&h.push(M,be,Me,V,ie.z,null)}}const he=M.children;for(let be=0,Me=he.length;be<Me;be++)Zt(he[be],A,V,P)}function We(M,A,V,P){const U=M.opaque,he=M.transmissive,be=M.transparent;f.setupLightsView(V),he.length>0&&Xt(U,A,V),P&&de.viewport(R.copy(P)),U.length>0&&mt(U,A,V),he.length>0&&mt(he,A,V),be.length>0&&mt(be,A,V),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Xt(M,A,V){const P=_e.isWebGL2;F===null&&(F=new _n(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?di:gn,minFilter:Bi,samples:P&&s===!0?4:0})),p.getDrawingBufferSize(Y),P?F.setSize(Y.x,Y.y):F.setSize(Vi(Y.x),Vi(Y.y));const U=p.getRenderTarget();p.setRenderTarget(F),p.clear();const he=p.toneMapping;p.toneMapping=Ut,mt(M,A,V),p.toneMapping=he,fe.updateMultisampleRenderTarget(F),fe.updateRenderTargetMipmap(F),p.setRenderTarget(U)}function mt(M,A,V){const P=A.isScene===!0?A.overrideMaterial:null;for(let U=0,he=M.length;U<he;U++){const be=M[U],Me=be.object,ye=be.geometry,Xe=P===null?be.material:P,Le=be.group;Me.layers.test(V.layers)&&Ua(Me,A,V,ye,Xe,Le)}}function Ua(M,A,V,P,U,he){M.onBeforeRender(p,A,V,P,U,he),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(p,A,V,P,M,he),U.transparent===!0&&U.side===Pt?(U.side=vt,U.needsUpdate=!0,p.renderBufferDirect(V,A,P,U,M,he),U.side=On,U.needsUpdate=!0,p.renderBufferDirect(V,A,P,U,M,he),U.side=Pt):p.renderBufferDirect(V,A,P,U,M,he),M.onAfterRender(p,A,V,P,U,he)}function fi(M,A,V){A.isScene!==!0&&(A=ue);const P=ve.get(M),U=f.state.lights,he=f.state.shadowsArray,be=U.state.version,Me=Ae.getParameters(M,U.state,he,A,V),ye=Ae.getProgramCacheKey(Me);let Xe=P.programs;P.environment=M.isMeshStandardMaterial?A.environment:null,P.fog=A.fog,P.envMap=(M.isMeshStandardMaterial?je:Ne).get(M.envMap||P.environment),Xe===void 0&&(M.addEventListener("dispose",E),Xe=new Map,P.programs=Xe);let Le=Xe.get(ye);if(Le!==void 0){if(P.currentProgram===Le&&P.lightsStateVersion===be)return Zs(M,Me),Le}else Me.uniforms=Ae.getUniforms(M),M.onBuild(V,Me,p),M.onBeforeCompile(Me,p),Le=Ae.acquireProgram(Me,ye),Xe.set(ye,Le),P.uniforms=Me.uniforms;const Ce=P.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=_.uniform),Zs(M,Me),P.needsLights=Oa(M),P.lightsStateVersion=be,P.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix);const ze=Le.getUniforms(),en=zi.seqWithValue(ze.seq,Ce);return P.currentProgram=Le,P.uniformsList=en,Le}function Zs(M,A){const V=ve.get(M);V.outputEncoding=A.outputEncoding,V.instancing=A.instancing,V.skinning=A.skinning,V.morphTargets=A.morphTargets,V.morphNormals=A.morphNormals,V.morphColors=A.morphColors,V.morphTargetsCount=A.morphTargetsCount,V.numClippingPlanes=A.numClippingPlanes,V.numIntersection=A.numClipIntersection,V.vertexAlphas=A.vertexAlphas,V.vertexTangents=A.vertexTangents,V.toneMapping=A.toneMapping}function Za(M,A,V,P,U){A.isScene!==!0&&(A=ue),fe.resetTextureUnits();const he=A.fog,be=P.isMeshStandardMaterial?A.environment:null,Me=L===null?p.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:xn,ye=(P.isMeshStandardMaterial?je:Ne).get(P.envMap||be),Xe=P.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!P.normalMap&&!!V.attributes.tangent,Ce=!!V.morphAttributes.position,ze=!!V.morphAttributes.normal,en=!!V.morphAttributes.color,Sn=P.toneMapped?p.toneMapping:Ut,wn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Et=wn!==void 0?wn.length:0,Ge=ve.get(P),Tn=f.state.lights;if(Z===!0&&(I===!0||M!==w)){const ut=M===w&&P.id===y;_.setState(P,M,ut)}let Ue=!1;P.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Tn.state.version||Ge.outputEncoding!==Me||U.isInstancedMesh&&Ge.instancing===!1||!U.isInstancedMesh&&Ge.instancing===!0||U.isSkinnedMesh&&Ge.skinning===!1||!U.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==ye||P.fog===!0&&Ge.fog!==he||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==_.numPlanes||Ge.numIntersection!==_.numIntersection)||Ge.vertexAlphas!==Xe||Ge.vertexTangents!==Le||Ge.morphTargets!==Ce||Ge.morphNormals!==ze||Ge.morphColors!==en||Ge.toneMapping!==Sn||_e.isWebGL2===!0&&Ge.morphTargetsCount!==Et)&&(Ue=!0):(Ue=!0,Ge.__version=P.version);let gt=Ge.currentProgram;Ue===!0&&(gt=fi(P,A,U));let Bt=!1,ei=!1,Ki=!1;const nt=gt.getUniforms(),tn=Ge.uniforms;if(de.useProgram(gt.program)&&(Bt=!0,ei=!0,Ki=!0),P.id!==y&&(y=P.id,ei=!0),Bt||w!==M){if(nt.setValue(B,"projectionMatrix",M.projectionMatrix),_e.logarithmicDepthBuffer&&nt.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),w!==M&&(w=M,ei=!0,Ki=!0),P.isShaderMaterial||P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshStandardMaterial||P.envMap){const ut=nt.map.cameraPosition;ut!==void 0&&ut.setValue(B,ie.setFromMatrixPosition(M.matrixWorld))}(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&nt.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial||P.isShadowMaterial||U.isSkinnedMesh)&&nt.setValue(B,"viewMatrix",M.matrixWorldInverse)}if(U.isSkinnedMesh){nt.setOptional(B,U,"bindMatrix"),nt.setOptional(B,U,"bindMatrixInverse");const ut=U.skeleton;ut&&(_e.floatVertexTextures?(ut.boneTexture===null&&ut.computeBoneTexture(),nt.setValue(B,"boneTexture",ut.boneTexture,fe),nt.setValue(B,"boneTextureSize",ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Yi=V.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0&&_e.isWebGL2===!0)&&q.update(U,V,P,gt),(ei||Ge.receiveShadow!==U.receiveShadow)&&(Ge.receiveShadow=U.receiveShadow,nt.setValue(B,"receiveShadow",U.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(tn.envMap.value=ye,tn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),ei&&(nt.setValue(B,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&Ba(tn,Ki),he&&P.fog===!0&&pt.refreshFogUniforms(tn,he),pt.refreshMaterialUniforms(tn,P,J,D,F),zi.upload(B,Ge.uniformsList,tn,fe)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(zi.upload(B,Ge.uniformsList,tn,fe),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&nt.setValue(B,"center",U.center),nt.setValue(B,"modelViewMatrix",U.modelViewMatrix),nt.setValue(B,"normalMatrix",U.normalMatrix),nt.setValue(B,"modelMatrix",U.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const ut=P.uniformsGroups;for(let Ji=0,ka=ut.length;Ji<ka;Ji++)if(_e.isWebGL2){const Bs=ut[Ji];$.update(Bs,gt),$.bind(Bs,gt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gt}function Ba(M,A){M.ambientLightColor.needsUpdate=A,M.lightProbe.needsUpdate=A,M.directionalLights.needsUpdate=A,M.directionalLightShadows.needsUpdate=A,M.pointLights.needsUpdate=A,M.pointLightShadows.needsUpdate=A,M.spotLights.needsUpdate=A,M.spotLightShadows.needsUpdate=A,M.rectAreaLights.needsUpdate=A,M.hemisphereLights.needsUpdate=A}function Oa(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,A,V){ve.get(M.texture).__webglTexture=A,ve.get(M.depthTexture).__webglTexture=V;const P=ve.get(M);P.__hasExternalTextures=!0,P.__hasExternalTextures&&(P.__autoAllocateDepthBuffer=V===void 0,P.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,A){const V=ve.get(M);V.__webglFramebuffer=A,V.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(M,A=0,V=0){L=M,x=A,S=V;let P=!0;if(M){const ye=ve.get(M);ye.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),P=!1):ye.__webglFramebuffer===void 0?fe.setupRenderTarget(M):ye.__hasExternalTextures&&fe.rebindTextures(M,ve.get(M.texture).__webglTexture,ve.get(M.depthTexture).__webglTexture)}let U=null,he=!1,be=!1;if(M){const ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture)&&(be=!0);const Xe=ve.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(U=Xe[A],he=!0):_e.isWebGL2&&M.samples>0&&fe.useMultisampledRTT(M)===!1?U=ve.get(M).__webglMultisampledFramebuffer:U=Xe,R.copy(M.viewport),W.copy(M.scissor),b=M.scissorTest}else R.copy(X).multiplyScalar(J).floor(),W.copy(O).multiplyScalar(J).floor(),b=K;if(de.bindFramebuffer(36160,U)&&_e.drawBuffers&&P&&de.drawBuffers(M,U),de.viewport(R),de.scissor(W),de.setScissorTest(b),he){const ye=ve.get(M.texture);B.framebufferTexture2D(36160,36064,34069+A,ye.__webglTexture,V)}else if(be){const ye=ve.get(M.texture),Xe=A||0;B.framebufferTextureLayer(36160,36064,ye.__webglTexture,V||0,Xe)}y=-1},this.readRenderTargetPixels=function(M,A,V,P,U,he,be){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Me=Me[be]),Me){de.bindFramebuffer(36160,Me);try{const ye=M.texture,Xe=ye.format,Le=ye.type;if(Xe!==It&&v.convert(Xe)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Le===di&&(pe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Le!==gn&&v.convert(Le)!==B.getParameter(35738)&&!(Le===un&&(_e.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=M.width-P&&V>=0&&V<=M.height-U&&B.readPixels(A,V,P,U,v.convert(Xe),v.convert(Le),he)}finally{const ye=L!==null?ve.get(L).__webglFramebuffer:null;de.bindFramebuffer(36160,ye)}}},this.copyFramebufferToTexture=function(M,A,V=0){const P=Math.pow(2,-V),U=Math.floor(A.image.width*P),he=Math.floor(A.image.height*P);fe.setTexture2D(A,0),B.copyTexSubImage2D(3553,V,0,0,M.x,M.y,U,he),de.unbindTexture()},this.copyTextureToTexture=function(M,A,V,P=0){const U=A.image.width,he=A.image.height,be=v.convert(V.format),Me=v.convert(V.type);fe.setTexture2D(V,0),B.pixelStorei(37440,V.flipY),B.pixelStorei(37441,V.premultiplyAlpha),B.pixelStorei(3317,V.unpackAlignment),A.isDataTexture?B.texSubImage2D(3553,P,M.x,M.y,U,he,be,Me,A.image.data):A.isCompressedTexture?B.compressedTexSubImage2D(3553,P,M.x,M.y,A.mipmaps[0].width,A.mipmaps[0].height,be,A.mipmaps[0].data):B.texSubImage2D(3553,P,M.x,M.y,be,Me,A.image),P===0&&V.generateMipmaps&&B.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(M,A,V,P,U=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=M.max.x-M.min.x+1,be=M.max.y-M.min.y+1,Me=M.max.z-M.min.z+1,ye=v.convert(P.format),Xe=v.convert(P.type);let Le;if(P.isData3DTexture)fe.setTexture3D(P,0),Le=32879;else if(P.isDataArrayTexture)fe.setTexture2DArray(P,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,P.flipY),B.pixelStorei(37441,P.premultiplyAlpha),B.pixelStorei(3317,P.unpackAlignment);const Ce=B.getParameter(3314),ze=B.getParameter(32878),en=B.getParameter(3316),Sn=B.getParameter(3315),wn=B.getParameter(32877),Et=V.isCompressedTexture?V.mipmaps[0]:V.image;B.pixelStorei(3314,Et.width),B.pixelStorei(32878,Et.height),B.pixelStorei(3316,M.min.x),B.pixelStorei(3315,M.min.y),B.pixelStorei(32877,M.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Le,U,A.x,A.y,A.z,he,be,Me,ye,Xe,Et.data):V.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Le,U,A.x,A.y,A.z,he,be,Me,ye,Et.data)):B.texSubImage3D(Le,U,A.x,A.y,A.z,he,be,Me,ye,Xe,Et),B.pixelStorei(3314,Ce),B.pixelStorei(32878,ze),B.pixelStorei(3316,en),B.pixelStorei(3315,Sn),B.pixelStorei(32877,wn),U===0&&P.generateMipmaps&&B.generateMipmap(Le),de.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?fe.setTextureCube(M,0):M.isData3DTexture?fe.setTexture3D(M,0):M.isDataArrayTexture?fe.setTexture2DArray(M,0):fe.setTexture2D(M,0),de.unbindTexture()},this.resetState=function(){x=0,S=0,L=null,de.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class mf extends za{}mf.prototype.isWebGL1Renderer=!0;class gf extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class $n extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sa=new G,ra=new G,aa=new Ke,Ls=new Hs,Xi=new ui;class Ha extends et{constructor(e=new lt,t=new $n){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)sa.fromBufferAttribute(t,i-1),ra.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sa.distanceTo(ra);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(i),Xi.radius+=s,e.ray.intersectsSphere(Xi)===!1)return;aa.copy(i).invert(),Ls.copy(e.ray).applyMatrix4(aa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new G,d=new G,h=new G,f=new G,m=this.isLineSegments?2:1,g=n.index,u=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let L=x,y=S-1;L<y;L+=m){const w=g.getX(L),R=g.getX(L+1);if(l.fromBufferAttribute(u,w),d.fromBufferAttribute(u,R),Ls.distanceSqToSegment(l,d,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),S=Math.min(u.count,o.start+o.count);for(let L=x,y=S-1;L<y;L+=m){if(l.fromBufferAttribute(u,L),d.fromBufferAttribute(u,L+1),Ls.distanceSqToSegment(l,d,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const oa=new G,la=new G;class Ns extends Ha{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)oa.fromBufferAttribute(t,i),la.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+oa.distanceTo(la);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Va extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ca=new Ke,Fs=new Hs,Di=new ui,Fi=new G;class xf extends et{constructor(e=new lt,t=new Va){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere),Di.applyMatrix4(i),Di.radius+=s,e.ray.intersectsSphere(Di)===!1)return;ca.copy(i).invert(),Fs.copy(e.ray).applyMatrix4(ca);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,p=m;g<p;g++){const u=l.getX(g);Fi.fromBufferAttribute(h,u),da(Fi,u,c,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,p=m;g<p;g++)Fi.fromBufferAttribute(h,g),da(Fi,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function da(r,e,t,n,i,s,o){const a=Fs.distanceSqToPoint(r);if(a<t){const c=new G;Fs.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Us extends lt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const d=[],h=new G,f=new G,m=[],g=[],p=[],u=[];for(let x=0;x<=n;x++){const S=[],L=x/n;let y=0;x==0&&o==0?y=.5/t:x==n&&c==Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const R=w/t;h.x=-e*Math.cos(i+R*s)*Math.sin(o+L*a),h.y=e*Math.cos(o+L*a),h.z=e*Math.sin(i+R*s)*Math.sin(o+L*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),u.push(R+y,1-L),S.push(l++)}d.push(S)}for(let x=0;x<n;x++)for(let S=0;S<t;S++){const L=d[x][S+1],y=d[x][S],w=d[x+1][S],R=d[x+1][S+1];(x!==0||o>0)&&m.push(L,y,R),(x!==n-1||c<Math.PI)&&m.push(y,w,R)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(u,2))}static fromJSON(e){return new Us(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _f extends Mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class bf extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class yf extends bf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ua{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vf extends Ns{constructor(e=10,t=10,n=4473924,i=8947848){n=new Pe(n),i=new Pe(i);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,m=0,g=-a;f<=t;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const p=f===s?n:i;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const d=new lt;d.setAttribute("position",new tt(c,3)),d.setAttribute("color",new tt(l,3));const h=new $n({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}}class Mf extends Ns{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new lt;i.setAttribute("position",new tt(t,3)),i.setAttribute("color",new tt(n,3));const s=new $n({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Pe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ws}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ws);const ha={type:"change"},Cs={type:"start"},fa={type:"end"};class Sf extends vn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN},this.touches={ONE:Ln.ROTATE,TWO:Ln.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",dt),this._domElementKeyEvents=v},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ha),n.update(),s=i.NONE},this.update=function(){const v=new G,k=new bn().setFromUnitVectors(e.up,new G(0,1,0)),$=k.clone().invert(),oe=new G,re=new bn,ge=2*Math.PI;return function(){const De=n.object.position;v.copy(De).sub(n.target),v.applyQuaternion(k),a.setFromVector3(v),n.autoRotate&&s===i.NONE&&C(W()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let E=n.minAzimuthAngle,se=n.maxAzimuthAngle;return isFinite(E)&&isFinite(se)&&(E<-Math.PI?E+=ge:E>Math.PI&&(E-=ge),se<-Math.PI?se+=ge:se>Math.PI&&(se-=ge),E<=se?a.theta=Math.max(E,Math.min(se,a.theta)):a.theta=a.theta>(E+se)/2?Math.max(E,a.theta):Math.min(se,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),v.setFromSpherical(a),v.applyQuaternion($),De.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),l=1,h||oe.distanceToSquared(n.object.position)>o||8*(1-re.dot(n.object.quaternion))>o?(n.dispatchEvent(ha),oe.copy(n.object.position),re.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",Ne),n.domElement.removeEventListener("pointercancel",ct),n.domElement.removeEventListener("wheel",pt),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Be),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",dt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new ua,c=new ua;let l=1;const d=new G;let h=!1;const f=new we,m=new we,g=new we,p=new we,u=new we,x=new we,S=new we,L=new we,y=new we,w=[],R={};function W(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function C(v){c.theta-=v}function D(v){c.phi-=v}const J=function(){const v=new G;return function($,oe){v.setFromMatrixColumn(oe,0),v.multiplyScalar(-$),d.add(v)}}(),ne=function(){const v=new G;return function($,oe){n.screenSpacePanning===!0?v.setFromMatrixColumn(oe,1):(v.setFromMatrixColumn(oe,0),v.crossVectors(n.object.up,v)),v.multiplyScalar($),d.add(v)}}(),N=function(){const v=new G;return function($,oe){const re=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;v.copy(ge).sub(n.target);let Te=v.length();Te*=Math.tan(n.object.fov/2*Math.PI/180),J(2*$*Te/re.clientHeight,n.object.matrix),ne(2*oe*Te/re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(J($*(n.object.right-n.object.left)/n.object.zoom/re.clientWidth,n.object.matrix),ne(oe*(n.object.top-n.object.bottom)/n.object.zoom/re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(v){n.object.isPerspectiveCamera?l/=v:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*v)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(v){n.object.isPerspectiveCamera?l*=v:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/v)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(v){f.set(v.clientX,v.clientY)}function Q(v){S.set(v.clientX,v.clientY)}function Z(v){p.set(v.clientX,v.clientY)}function I(v){m.set(v.clientX,v.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;C(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),f.copy(m),n.update()}function F(v){L.set(v.clientX,v.clientY),y.subVectors(L,S),y.y>0?X(b()):y.y<0&&O(b()),S.copy(L),n.update()}function ee(v){u.set(v.clientX,v.clientY),x.subVectors(u,p).multiplyScalar(n.panSpeed),N(x.x,x.y),p.copy(u),n.update()}function Y(v){v.deltaY<0?O(b()):v.deltaY>0&&X(b()),n.update()}function ie(v){let k=!1;switch(v.code){case n.keys.UP:N(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:N(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:N(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:N(-n.keyPanSpeed,0),k=!0;break}k&&(v.preventDefault(),n.update())}function ue(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const v=.5*(w[0].pageX+w[1].pageX),k=.5*(w[0].pageY+w[1].pageY);f.set(v,k)}}function xe(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const v=.5*(w[0].pageX+w[1].pageX),k=.5*(w[0].pageY+w[1].pageY);p.set(v,k)}}function B(){const v=w[0].pageX-w[1].pageX,k=w[0].pageY-w[1].pageY,$=Math.sqrt(v*v+k*k);S.set(0,$)}function Ee(){n.enableZoom&&B(),n.enablePan&&xe()}function pe(){n.enableZoom&&B(),n.enableRotate&&ue()}function _e(v){if(w.length==1)m.set(v.pageX,v.pageY);else{const $=me(v),oe=.5*(v.pageX+$.x),re=.5*(v.pageY+$.y);m.set(oe,re)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;C(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),f.copy(m)}function de(v){if(w.length===1)u.set(v.pageX,v.pageY);else{const k=me(v),$=.5*(v.pageX+k.x),oe=.5*(v.pageY+k.y);u.set($,oe)}x.subVectors(u,p).multiplyScalar(n.panSpeed),N(x.x,x.y),p.copy(u)}function Ie(v){const k=me(v),$=v.pageX-k.x,oe=v.pageY-k.y,re=Math.sqrt($*$+oe*oe);L.set(0,re),y.set(0,Math.pow(L.y/S.y,n.zoomSpeed)),X(y.y),S.copy(L)}function ve(v){n.enableZoom&&Ie(v),n.enablePan&&de(v)}function fe(v){n.enableZoom&&Ie(v),n.enableRotate&&_e(v)}function Ne(v){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",je),n.domElement.addEventListener("pointerup",Be)),j(v),v.pointerType==="touch"?T(v):Oe(v))}function je(v){n.enabled!==!1&&(v.pointerType==="touch"?_(v):Ae(v))}function Be(v){q(v),w.length===0&&(n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Be)),n.dispatchEvent(fa),s=i.NONE}function ct(v){q(v)}function Oe(v){let k;switch(v.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case an.DOLLY:if(n.enableZoom===!1)return;Q(v),s=i.DOLLY;break;case an.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;Z(v),s=i.PAN}else{if(n.enableRotate===!1)return;K(v),s=i.ROTATE}break;case an.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;K(v),s=i.ROTATE}else{if(n.enablePan===!1)return;Z(v),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Cs)}function Ae(v){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;I(v);break;case i.DOLLY:if(n.enableZoom===!1)return;F(v);break;case i.PAN:if(n.enablePan===!1)return;ee(v);break}}function pt(v){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(v.preventDefault(),n.dispatchEvent(Cs),Y(v),n.dispatchEvent(fa))}function dt(v){n.enabled===!1||n.enablePan===!1||ie(v)}function T(v){switch(ae(v),w.length){case 1:switch(n.touches.ONE){case Ln.ROTATE:if(n.enableRotate===!1)return;ue(),s=i.TOUCH_ROTATE;break;case Ln.PAN:if(n.enablePan===!1)return;xe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ln.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(),s=i.TOUCH_DOLLY_PAN;break;case Ln.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Cs)}function _(v){switch(ae(v),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(v),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(v),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ve(v),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(v),n.update();break;default:s=i.NONE}}function H(v){n.enabled!==!1&&v.preventDefault()}function j(v){w.push(v)}function q(v){delete R[v.pointerId];for(let k=0;k<w.length;k++)if(w[k].pointerId==v.pointerId){w.splice(k,1);return}}function ae(v){let k=R[v.pointerId];k===void 0&&(k=new we,R[v.pointerId]=k),k.set(v.pageX,v.pageY)}function me(v){const k=v.pointerId===w[0].pointerId?w[1]:w[0];return R[k.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",Ne),n.domElement.addEventListener("pointercancel",ct),n.domElement.addEventListener("wheel",pt,{passive:!1}),this.update()}}var ci=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),n(++r%e.children.length)},!1);function t(d){return e.appendChild(d.dom),d}function n(d){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===d?"block":"none";r=d}var i=(performance||Date).now(),s=i,o=0,a=t(new ci.Panel("FPS","#0ff","#002")),c=t(new ci.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new ci.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var d=(performance||Date).now();if(c.update(d-i,200),d>=s+1e3&&(a.update(o*1e3/(d-s),100),s=d,o=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return d},update:function(){i=this.end()},domElement:e,setMode:n}};ci.Panel=function(r,e,t){var n=1/0,i=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,c=48*o,l=3*o,d=2*o,h=3*o,f=15*o,m=74*o,g=30*o,p=document.createElement("canvas");p.width=a,p.height=c,p.style.cssText="width:80px;height:48px";var u=p.getContext("2d");return u.font="bold "+9*o+"px Helvetica,Arial,sans-serif",u.textBaseline="top",u.fillStyle=t,u.fillRect(0,0,a,c),u.fillStyle=e,u.fillText(r,l,d),u.fillRect(h,f,m,g),u.fillStyle=t,u.globalAlpha=.9,u.fillRect(h,f,m,g),{dom:p,update:function(x,S){n=Math.min(n,x),i=Math.max(i,x),u.fillStyle=t,u.globalAlpha=1,u.fillRect(0,0,a,f),u.fillStyle=e,u.fillText(s(x)+" "+r+" ("+s(n)+"-"+s(i)+")",l,d),u.drawImage(p,h+o,f,m-o,g,h,f,m-o,g),u.fillRect(h+m-o,f,o,g),u.fillStyle=t,u.globalAlpha=.9,u.fillRect(h+m-o,f,o,s((1-x/S)*g))}}};const wf=ci,Na="dmFyIGpzPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgR3M9KHgsZyxkKT0+ZyBpbiB4P2pzKHgsZyx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZH0pOnhbZ109ZDt2YXIgaj0oeCxnLGQpPT4oR3MoeCx0eXBlb2YgZyE9InN5bWJvbCI/ZysiIjpnLGQpLGQpLEV0PSh4LGcsZCk9PntpZighZy5oYXMoeCkpdGhyb3cgVHlwZUVycm9yKCJDYW5ub3QgIitkKX07dmFyIHE9KHgsZyxkKT0+KEV0KHgsZywicmVhZCBmcm9tIHByaXZhdGUgZmllbGQiKSxkP2QuY2FsbCh4KTpnLmdldCh4KSksYj0oeCxnLGQpPT57aWYoZy5oYXMoeCkpdGhyb3cgVHlwZUVycm9yKCJDYW5ub3QgYWRkIHRoZSBzYW1lIHByaXZhdGUgbWVtYmVyIG1vcmUgdGhhbiBvbmNlIik7ZyBpbnN0YW5jZW9mIFdlYWtTZXQ/Zy5hZGQoeCk6Zy5zZXQoeCxkKX0sdHQ9KHgsZyxkLHJ0KT0+KEV0KHgsZywid3JpdGUgdG8gcHJpdmF0ZSBmaWVsZCIpLHJ0P3J0LmNhbGwoeCxkKTpnLnNldCh4LGQpLGQpO3ZhciBFPSh4LGcsZCk9PihFdCh4LGcsImFjY2VzcyBwcml2YXRlIG1ldGhvZCIpLGQpOyhmdW5jdGlvbigpe3ZhciBXLEosSSxvdCxTcixodCwkcixWLE90LHV0LEVyLGN0LE9yLGx0LFJyLGZ0LElyOyJ1c2Ugc3RyaWN0Ijtjb25zdCB4PXtbMF06e2VuY29kZToocix0LGUpPT5be3ByZWZpeDoiWCIsbnVtOnJ9LHtwcmVmaXg6IlkiLG51bTp0fV0sZGVjb2RlOihyLHQsZSxuKT0+e2NvbnN0e29mZnNldDppfT1lO3JldHVybiBuP3t4OnIseTp0fTp7eDpyLWkueCx5OnQtaS55fX19LFsxXTp7ZW5jb2RlOihyLHQpPT5be3ByZWZpeDoiWCIsbnVtOnIqLTF9LHtwcmVmaXg6IlkiLG51bTp0Ki0xfV0sZGVjb2RlOihyLHQsZSxuKT0+KHt4OnIqLTEseTp0Ki0xfSl9LFsyXTp7ZW5jb2RlOihyLHQsZSk9Pntjb25zdHtzdGFydDpufT1lO3JldHVyblt7cHJlZml4OiJVIixudW06LShyLW4ueCl9LHtwcmVmaXg6IlgiLG51bTotdH1dfSxkZWNvZGU6KHIsdCxlLG4pPT57Y29uc3R7c3RhcnQ6aX09ZTtyZXR1cm57eDpyKi0xK2kueCx5OnQqLTF9fX0sWzNdOntlbmNvZGU6KHIsdCxlKT0+e2NvbnN0e3N0YXJ0Om4scm90YXRlTXVsdGlwbGU6aT0xLGVuYWJsZVJlbGF0aXZlOnN9PWU7cmV0dXJuW3twcmVmaXg6IlUiLG51bTooci0ocz8wOm4ueCkpKml9LHtwcmVmaXg6IlgiLG51bTp0fV19LGRlY29kZToocix0LGUsbik9Pntjb25zdHtzdGFydDppLG9mZnNldDpzPXt4OjAseTowfSxybTphPTF9PWU7cmV0dXJuIG4/e3g6ci9hLHk6dH06e3g6ci9hK2kueC1zLngseTp0LXMueX19fSxbNF06e2VuY29kZToocix0LGUpPT57Y29uc3R7cm90YXRlTXVsdGlwbGU6bj0xfT1lO3JldHVyblt7cHJlZml4OiJYIixudW06cn0se3ByZWZpeDoiVSIsbnVtOnQqbn1dfSxkZWNvZGU6KHIsdCxlLG4pPT57Y29uc3R7b2Zmc2V0Omk9e3g6MCx5OjB9LHJtOnM9MX09ZTtyZXR1cm4gbj97eDpyLHk6dC9zfTp7eDpyLWkueCx5Oih0LWkueSkvc319fSxbNV06e2VuY29kZToocix0LGUpPT57Y29uc3R7cm90YXRlTXVsdGlwbGU6bj0xfT1lO3JldHVyblt7cHJlZml4OiJYIixudW06cn0se3ByZWZpeDoiVSIsbnVtOnQqbn1dfSxkZWNvZGU6KHIsdCxlLG4pPT57Y29uc3R7b2Zmc2V0Omk9e3g6MCx5OjB9LG9yaWdpbjpzPXt4OjAseTowfSxybTphPTF9PWU7cmV0dXJuIG4/e3g6cix5OnQvYX06e3g6ci1pLngseTpNYXRoLmFicyh0L2EpK2kueStzLnl9fX0sWzZdOntlbmNvZGU6KHIsdCxlKT0+W3twcmVmaXg6IlUiLG51bTotcn0se3ByZWZpeDoiWSIsbnVtOnR9XSxkZWNvZGU6KHIsdCxlLG4pPT57Y29uc3R7b2Zmc2V0Omk9e3g6MCx5OjB9fT1lO3JldHVybiBuP3t4OnQqLTEseTpyfTp7eDp0Ki0xLWkueCx5OnItaS55fX19LFs3XTp7ZW5jb2RlOihyLHQsZSk9Pntjb25zdHtyb3RhdGVNdWx0aXBsZTpuPTEsc3RhcnQ6aSxlbmFibGVSZWxhdGl2ZTpzfT1lO3JldHVyblt7cHJlZml4OiJYIixudW06cn0se3ByZWZpeDoiVSIsbnVtOih0LShzPzA6aS55KSkqbn1dfSxkZWNvZGU6KHIsdCxlLG4pPT57Y29uc3R7b2Zmc2V0Omk9e3g6MCx5OjB9LHJtOnM9MSxzdGFydDphfT1lO3JldHVybiBuP3t4OnIseTp0L3N9Ont4OnItaS54LHk6KHQtaS55KS9zK2EueX19fX07dmFyIGc9dHlwZW9mIGdsb2JhbD09Im9iamVjdCImJmdsb2JhbCYmZ2xvYmFsLk9iamVjdD09PU9iamVjdCYmZ2xvYmFsLGQ9ZyxydD10eXBlb2Ygc2VsZj09Im9iamVjdCImJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLEZyPWR8fHJ0fHxGdW5jdGlvbigicmV0dXJuIHRoaXMiKSgpLFA9RnIsTHI9UC5TeW1ib2wsTz1McixSdD1PYmplY3QucHJvdG90eXBlLERyPVJ0Lmhhc093blByb3BlcnR5LE5yPVJ0LnRvU3RyaW5nLFk9Tz9PLnRvU3RyaW5nVGFnOnZvaWQgMDtmdW5jdGlvbiBqcihyKXt2YXIgdD1Eci5jYWxsKHIsWSksZT1yW1ldO3RyeXtyW1ldPXZvaWQgMDt2YXIgbj0hMH1jYXRjaHt9dmFyIGk9TnIuY2FsbChyKTtyZXR1cm4gbiYmKHQ/cltZXT1lOmRlbGV0ZSByW1ldKSxpfXZhciBHcj1PYmplY3QucHJvdG90eXBlLFVyPUdyLnRvU3RyaW5nO2Z1bmN0aW9uIFhyKHIpe3JldHVybiBVci5jYWxsKHIpfXZhciBIcj0iW29iamVjdCBOdWxsXSIscXI9IltvYmplY3QgVW5kZWZpbmVkXSIsSXQ9Tz9PLnRvU3RyaW5nVGFnOnZvaWQgMDtmdW5jdGlvbiBHKHIpe3JldHVybiByPT1udWxsP3I9PT12b2lkIDA/cXI6SHI6SXQmJkl0IGluIE9iamVjdChyKT9qcihyKTpYcihyKX1mdW5jdGlvbiBVKHIpe3JldHVybiByIT1udWxsJiZ0eXBlb2Ygcj09Im9iamVjdCJ9dmFyIFlyPSJbb2JqZWN0IFN5bWJvbF0iO2Z1bmN0aW9uIHl0KHIpe3JldHVybiB0eXBlb2Ygcj09InN5bWJvbCJ8fFUocikmJkcocik9PVlyfWZ1bmN0aW9uIEZ0KHIsdCl7Zm9yKHZhciBlPS0xLG49cj09bnVsbD8wOnIubGVuZ3RoLGk9QXJyYXkobik7KytlPG47KWlbZV09dChyW2VdLGUscik7cmV0dXJuIGl9dmFyIEJyPUFycmF5LmlzQXJyYXksVD1CcixLcj0xLzAsTHQ9Tz9PLnByb3RvdHlwZTp2b2lkIDAsRHQ9THQ/THQudG9TdHJpbmc6dm9pZCAwO2Z1bmN0aW9uIE50KHIpe2lmKHR5cGVvZiByPT0ic3RyaW5nIilyZXR1cm4gcjtpZihUKHIpKXJldHVybiBGdChyLE50KSsiIjtpZih5dChyKSlyZXR1cm4gRHQ/RHQuY2FsbChyKToiIjt2YXIgdD1yKyIiO3JldHVybiB0PT0iMCImJjEvcj09LUtyPyItMCI6dH1mdW5jdGlvbiBYKHIpe3ZhciB0PXR5cGVvZiByO3JldHVybiByIT1udWxsJiYodD09Im9iamVjdCJ8fHQ9PSJmdW5jdGlvbiIpfWZ1bmN0aW9uIFpyKHIpe3JldHVybiByfXZhciBRcj0iW29iamVjdCBBc3luY0Z1bmN0aW9uXSIsV3I9IltvYmplY3QgRnVuY3Rpb25dIixKcj0iW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0iLFZyPSJbb2JqZWN0IFByb3h5XSI7ZnVuY3Rpb24ganQocil7aWYoIVgocikpcmV0dXJuITE7dmFyIHQ9RyhyKTtyZXR1cm4gdD09V3J8fHQ9PUpyfHx0PT1Rcnx8dD09VnJ9dmFyIGtyPVBbIl9fY29yZS1qc19zaGFyZWRfXyJdLF90PWtyLEd0PWZ1bmN0aW9uKCl7dmFyIHI9L1teLl0rJC8uZXhlYyhfdCYmX3Qua2V5cyYmX3Qua2V5cy5JRV9QUk9UT3x8IiIpO3JldHVybiByPyJTeW1ib2woc3JjKV8xLiIrcjoiIn0oKTtmdW5jdGlvbiB0ZShyKXtyZXR1cm4hIUd0JiZHdCBpbiByfXZhciByZT1GdW5jdGlvbi5wcm90b3R5cGUsZWU9cmUudG9TdHJpbmc7ZnVuY3Rpb24gRihyKXtpZihyIT1udWxsKXt0cnl7cmV0dXJuIGVlLmNhbGwocil9Y2F0Y2h7fXRyeXtyZXR1cm4gcisiIn1jYXRjaHt9fXJldHVybiIifXZhciBuZT0vW1xcXiQuKis/KClbXF17fXxdL2csaWU9L15cW29iamVjdCAuKz9Db25zdHJ1Y3RvclxdJC8sc2U9RnVuY3Rpb24ucHJvdG90eXBlLGFlPU9iamVjdC5wcm90b3R5cGUsb2U9c2UudG9TdHJpbmcsaGU9YWUuaGFzT3duUHJvcGVydHksdWU9UmVnRXhwKCJeIitvZS5jYWxsKGhlKS5yZXBsYWNlKG5lLCJcXCQmIikucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXCgpfCBmb3IgLis/KD89XFxcXSkvZywiJDEuKj8iKSsiJCIpO2Z1bmN0aW9uIGNlKHIpe2lmKCFYKHIpfHx0ZShyKSlyZXR1cm4hMTt2YXIgdD1qdChyKT91ZTppZTtyZXR1cm4gdC50ZXN0KEYocikpfWZ1bmN0aW9uIGxlKHIsdCl7cmV0dXJuIHI9PW51bGw/dm9pZCAwOnJbdF19ZnVuY3Rpb24gTChyLHQpe3ZhciBlPWxlKHIsdCk7cmV0dXJuIGNlKGUpP2U6dm9pZCAwfXZhciBmZT1MKFAsIldlYWtNYXAiKSxwdD1mZSx5ZT1mdW5jdGlvbigpe3RyeXt2YXIgcj1MKE9iamVjdCwiZGVmaW5lUHJvcGVydHkiKTtyZXR1cm4gcih7fSwiIix7fSkscn1jYXRjaHt9fSgpLFV0PXllLF9lPTkwMDcxOTkyNTQ3NDA5OTEscGU9L14oPzowfFsxLTldXGQqKSQvO2Z1bmN0aW9uIGd0KHIsdCl7dmFyIGU9dHlwZW9mIHI7cmV0dXJuIHQ9dD8/X2UsISF0JiYoZT09Im51bWJlciJ8fGUhPSJzeW1ib2wiJiZwZS50ZXN0KHIpKSYmcj4tMSYmciUxPT0wJiZyPHR9ZnVuY3Rpb24gZ2Uocix0LGUpe3Q9PSJfX3Byb3RvX18iJiZVdD9VdChyLHQse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOmUsd3JpdGFibGU6ITB9KTpyW3RdPWV9ZnVuY3Rpb24geHQocix0KXtyZXR1cm4gcj09PXR8fHIhPT1yJiZ0IT09dH12YXIgeGU9T2JqZWN0LnByb3RvdHlwZSxkZT14ZS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiB3ZShyLHQsZSl7dmFyIG49clt0XTsoIShkZS5jYWxsKHIsdCkmJnh0KG4sZSkpfHxlPT09dm9pZCAwJiYhKHQgaW4gcikpJiZnZShyLHQsZSl9dmFyIG1lPTkwMDcxOTkyNTQ3NDA5OTE7ZnVuY3Rpb24gZHQocil7cmV0dXJuIHR5cGVvZiByPT0ibnVtYmVyIiYmcj4tMSYmciUxPT0wJiZyPD1tZX1mdW5jdGlvbiBYdChyKXtyZXR1cm4gciE9bnVsbCYmZHQoci5sZW5ndGgpJiYhanQocil9dmFyIHplPU9iamVjdC5wcm90b3R5cGU7ZnVuY3Rpb24gSHQocil7dmFyIHQ9ciYmci5jb25zdHJ1Y3RvcixlPXR5cGVvZiB0PT0iZnVuY3Rpb24iJiZ0LnByb3RvdHlwZXx8emU7cmV0dXJuIHI9PT1lfWZ1bmN0aW9uIE1lKHIsdCl7Zm9yKHZhciBlPS0xLG49QXJyYXkocik7KytlPHI7KW5bZV09dChlKTtyZXR1cm4gbn12YXIgYmU9IltvYmplY3QgQXJndW1lbnRzXSI7ZnVuY3Rpb24gcXQocil7cmV0dXJuIFUocikmJkcocik9PWJlfXZhciBZdD1PYmplY3QucHJvdG90eXBlLHZlPVl0Lmhhc093blByb3BlcnR5LFBlPVl0LnByb3BlcnR5SXNFbnVtZXJhYmxlLFRlPXF0KGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk/cXQ6ZnVuY3Rpb24ocil7cmV0dXJuIFUocikmJnZlLmNhbGwociwiY2FsbGVlIikmJiFQZS5jYWxsKHIsImNhbGxlZSIpfSxCdD1UZTtmdW5jdGlvbiBBZSgpe3JldHVybiExfXZhciBLdD10eXBlb2YgZXhwb3J0cz09Im9iamVjdCImJmV4cG9ydHMmJiFleHBvcnRzLm5vZGVUeXBlJiZleHBvcnRzLFp0PUt0JiZ0eXBlb2YgbW9kdWxlPT0ib2JqZWN0IiYmbW9kdWxlJiYhbW9kdWxlLm5vZGVUeXBlJiZtb2R1bGUsQ2U9WnQmJlp0LmV4cG9ydHM9PT1LdCxRdD1DZT9QLkJ1ZmZlcjp2b2lkIDAsU2U9UXQ/UXQuaXNCdWZmZXI6dm9pZCAwLCRlPVNlfHxBZSx3dD0kZSxFZT0iW29iamVjdCBBcmd1bWVudHNdIixPZT0iW29iamVjdCBBcnJheV0iLFJlPSJbb2JqZWN0IEJvb2xlYW5dIixJZT0iW29iamVjdCBEYXRlXSIsRmU9IltvYmplY3QgRXJyb3JdIixMZT0iW29iamVjdCBGdW5jdGlvbl0iLERlPSJbb2JqZWN0IE1hcF0iLE5lPSJbb2JqZWN0IE51bWJlcl0iLGplPSJbb2JqZWN0IE9iamVjdF0iLEdlPSJbb2JqZWN0IFJlZ0V4cF0iLFVlPSJbb2JqZWN0IFNldF0iLFhlPSJbb2JqZWN0IFN0cmluZ10iLEhlPSJbb2JqZWN0IFdlYWtNYXBdIixxZT0iW29iamVjdCBBcnJheUJ1ZmZlcl0iLFllPSJbb2JqZWN0IERhdGFWaWV3XSIsQmU9IltvYmplY3QgRmxvYXQzMkFycmF5XSIsS2U9IltvYmplY3QgRmxvYXQ2NEFycmF5XSIsWmU9IltvYmplY3QgSW50OEFycmF5XSIsUWU9IltvYmplY3QgSW50MTZBcnJheV0iLFdlPSJbb2JqZWN0IEludDMyQXJyYXldIixKZT0iW29iamVjdCBVaW50OEFycmF5XSIsVmU9IltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldIixrZT0iW29iamVjdCBVaW50MTZBcnJheV0iLHRuPSJbb2JqZWN0IFVpbnQzMkFycmF5XSIscD17fTtwW0JlXT1wW0tlXT1wW1plXT1wW1FlXT1wW1dlXT1wW0plXT1wW1ZlXT1wW2tlXT1wW3RuXT0hMCxwW0VlXT1wW09lXT1wW3FlXT1wW1JlXT1wW1llXT1wW0llXT1wW0ZlXT1wW0xlXT1wW0RlXT1wW05lXT1wW2plXT1wW0dlXT1wW1VlXT1wW1hlXT1wW0hlXT0hMTtmdW5jdGlvbiBybihyKXtyZXR1cm4gVShyKSYmZHQoci5sZW5ndGgpJiYhIXBbRyhyKV19ZnVuY3Rpb24gZW4ocil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiByKHQpfX12YXIgV3Q9dHlwZW9mIGV4cG9ydHM9PSJvYmplY3QiJiZleHBvcnRzJiYhZXhwb3J0cy5ub2RlVHlwZSYmZXhwb3J0cyxCPVd0JiZ0eXBlb2YgbW9kdWxlPT0ib2JqZWN0IiYmbW9kdWxlJiYhbW9kdWxlLm5vZGVUeXBlJiZtb2R1bGUsbm49QiYmQi5leHBvcnRzPT09V3QsbXQ9bm4mJmQucHJvY2Vzcyxzbj1mdW5jdGlvbigpe3RyeXt2YXIgcj1CJiZCLnJlcXVpcmUmJkIucmVxdWlyZSgidXRpbCIpLnR5cGVzO3JldHVybiByfHxtdCYmbXQuYmluZGluZyYmbXQuYmluZGluZygidXRpbCIpfWNhdGNoe319KCksSnQ9c24sVnQ9SnQmJkp0LmlzVHlwZWRBcnJheSxhbj1WdD9lbihWdCk6cm4sa3Q9YW4sb249T2JqZWN0LnByb3RvdHlwZSxobj1vbi5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiB0cihyLHQpe3ZhciBlPVQociksbj0hZSYmQnQociksaT0hZSYmIW4mJnd0KHIpLHM9IWUmJiFuJiYhaSYma3QociksYT1lfHxufHxpfHxzLGg9YT9NZShyLmxlbmd0aCxTdHJpbmcpOltdLHU9aC5sZW5ndGg7Zm9yKHZhciBvIGluIHIpKHR8fGhuLmNhbGwocixvKSkmJiEoYSYmKG89PSJsZW5ndGgifHxpJiYobz09Im9mZnNldCJ8fG89PSJwYXJlbnQiKXx8cyYmKG89PSJidWZmZXIifHxvPT0iYnl0ZUxlbmd0aCJ8fG89PSJieXRlT2Zmc2V0Iil8fGd0KG8sdSkpKSYmaC5wdXNoKG8pO3JldHVybiBofWZ1bmN0aW9uIHJyKHIsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiByKHQoZSkpfX12YXIgdW49cnIoT2JqZWN0LmtleXMsT2JqZWN0KSxjbj11bixsbj1PYmplY3QucHJvdG90eXBlLGZuPWxuLmhhc093blByb3BlcnR5O2Z1bmN0aW9uIHluKHIpe2lmKCFIdChyKSlyZXR1cm4gY24ocik7dmFyIHQ9W107Zm9yKHZhciBlIGluIE9iamVjdChyKSlmbi5jYWxsKHIsZSkmJmUhPSJjb25zdHJ1Y3RvciImJnQucHVzaChlKTtyZXR1cm4gdH1mdW5jdGlvbiBlcihyKXtyZXR1cm4gWHQocik/dHIocik6eW4ocil9ZnVuY3Rpb24gX24ocil7dmFyIHQ9W107aWYociE9bnVsbClmb3IodmFyIGUgaW4gT2JqZWN0KHIpKXQucHVzaChlKTtyZXR1cm4gdH12YXIgcG49T2JqZWN0LnByb3RvdHlwZSxnbj1wbi5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiB4bihyKXtpZighWChyKSlyZXR1cm4gX24ocik7dmFyIHQ9SHQociksZT1bXTtmb3IodmFyIG4gaW4gciluPT0iY29uc3RydWN0b3IiJiYodHx8IWduLmNhbGwocixuKSl8fGUucHVzaChuKTtyZXR1cm4gZX1mdW5jdGlvbiBkbihyKXtyZXR1cm4gWHQocik/dHIociwhMCk6eG4ocil9dmFyIHduPS9cLnxcWyg/OlteW1xdXSp8KFsiJ10pKD86KD8hXDEpW15cXF18XFwuKSo/XDEpXF0vLG1uPS9eXHcqJC87ZnVuY3Rpb24genQocix0KXtpZihUKHIpKXJldHVybiExO3ZhciBlPXR5cGVvZiByO3JldHVybiBlPT0ibnVtYmVyInx8ZT09InN5bWJvbCJ8fGU9PSJib29sZWFuInx8cj09bnVsbHx8eXQocik/ITA6bW4udGVzdChyKXx8IXduLnRlc3Qocil8fHQhPW51bGwmJnIgaW4gT2JqZWN0KHQpfXZhciB6bj1MKE9iamVjdCwiY3JlYXRlIiksSz16bjtmdW5jdGlvbiBNbigpe3RoaXMuX19kYXRhX189Sz9LKG51bGwpOnt9LHRoaXMuc2l6ZT0wfWZ1bmN0aW9uIGJuKHIpe3ZhciB0PXRoaXMuaGFzKHIpJiZkZWxldGUgdGhpcy5fX2RhdGFfX1tyXTtyZXR1cm4gdGhpcy5zaXplLT10PzE6MCx0fXZhciB2bj0iX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyIsUG49T2JqZWN0LnByb3RvdHlwZSxUbj1Qbi5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiBBbihyKXt2YXIgdD10aGlzLl9fZGF0YV9fO2lmKEspe3ZhciBlPXRbcl07cmV0dXJuIGU9PT12bj92b2lkIDA6ZX1yZXR1cm4gVG4uY2FsbCh0LHIpP3Rbcl06dm9pZCAwfXZhciBDbj1PYmplY3QucHJvdG90eXBlLFNuPUNuLmhhc093blByb3BlcnR5O2Z1bmN0aW9uICRuKHIpe3ZhciB0PXRoaXMuX19kYXRhX187cmV0dXJuIEs/dFtyXSE9PXZvaWQgMDpTbi5jYWxsKHQscil9dmFyIEVuPSJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fIjtmdW5jdGlvbiBPbihyLHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIHRoaXMuc2l6ZSs9dGhpcy5oYXMocik/MDoxLGVbcl09SyYmdD09PXZvaWQgMD9Fbjp0LHRoaXN9ZnVuY3Rpb24gRChyKXt2YXIgdD0tMSxlPXI9PW51bGw/MDpyLmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrdDxlOyl7dmFyIG49clt0XTt0aGlzLnNldChuWzBdLG5bMV0pfX1ELnByb3RvdHlwZS5jbGVhcj1NbixELnByb3RvdHlwZS5kZWxldGU9Ym4sRC5wcm90b3R5cGUuZ2V0PUFuLEQucHJvdG90eXBlLmhhcz0kbixELnByb3RvdHlwZS5zZXQ9T247ZnVuY3Rpb24gUm4oKXt0aGlzLl9fZGF0YV9fPVtdLHRoaXMuc2l6ZT0wfWZ1bmN0aW9uIGV0KHIsdCl7Zm9yKHZhciBlPXIubGVuZ3RoO2UtLTspaWYoeHQocltlXVswXSx0KSlyZXR1cm4gZTtyZXR1cm4tMX12YXIgSW49QXJyYXkucHJvdG90eXBlLEZuPUluLnNwbGljZTtmdW5jdGlvbiBMbihyKXt2YXIgdD10aGlzLl9fZGF0YV9fLGU9ZXQodCxyKTtpZihlPDApcmV0dXJuITE7dmFyIG49dC5sZW5ndGgtMTtyZXR1cm4gZT09bj90LnBvcCgpOkZuLmNhbGwodCxlLDEpLC0tdGhpcy5zaXplLCEwfWZ1bmN0aW9uIERuKHIpe3ZhciB0PXRoaXMuX19kYXRhX18sZT1ldCh0LHIpO3JldHVybiBlPDA/dm9pZCAwOnRbZV1bMV19ZnVuY3Rpb24gTm4ocil7cmV0dXJuIGV0KHRoaXMuX19kYXRhX18scik+LTF9ZnVuY3Rpb24gam4ocix0KXt2YXIgZT10aGlzLl9fZGF0YV9fLG49ZXQoZSxyKTtyZXR1cm4gbjwwPygrK3RoaXMuc2l6ZSxlLnB1c2goW3IsdF0pKTplW25dWzFdPXQsdGhpc31mdW5jdGlvbiBBKHIpe3ZhciB0PS0xLGU9cj09bnVsbD8wOnIubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7Kyt0PGU7KXt2YXIgbj1yW3RdO3RoaXMuc2V0KG5bMF0sblsxXSl9fUEucHJvdG90eXBlLmNsZWFyPVJuLEEucHJvdG90eXBlLmRlbGV0ZT1MbixBLnByb3RvdHlwZS5nZXQ9RG4sQS5wcm90b3R5cGUuaGFzPU5uLEEucHJvdG90eXBlLnNldD1qbjt2YXIgR249TChQLCJNYXAiKSxaPUduO2Z1bmN0aW9uIFVuKCl7dGhpcy5zaXplPTAsdGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgRCxtYXA6bmV3KFp8fEEpLHN0cmluZzpuZXcgRH19ZnVuY3Rpb24gWG4ocil7dmFyIHQ9dHlwZW9mIHI7cmV0dXJuIHQ9PSJzdHJpbmcifHx0PT0ibnVtYmVyInx8dD09InN5bWJvbCJ8fHQ9PSJib29sZWFuIj9yIT09Il9fcHJvdG9fXyI6cj09PW51bGx9ZnVuY3Rpb24gbnQocix0KXt2YXIgZT1yLl9fZGF0YV9fO3JldHVybiBYbih0KT9lW3R5cGVvZiB0PT0ic3RyaW5nIj8ic3RyaW5nIjoiaGFzaCJdOmUubWFwfWZ1bmN0aW9uIEhuKHIpe3ZhciB0PW50KHRoaXMscikuZGVsZXRlKHIpO3JldHVybiB0aGlzLnNpemUtPXQ/MTowLHR9ZnVuY3Rpb24gcW4ocil7cmV0dXJuIG50KHRoaXMscikuZ2V0KHIpfWZ1bmN0aW9uIFluKHIpe3JldHVybiBudCh0aGlzLHIpLmhhcyhyKX1mdW5jdGlvbiBCbihyLHQpe3ZhciBlPW50KHRoaXMsciksbj1lLnNpemU7cmV0dXJuIGUuc2V0KHIsdCksdGhpcy5zaXplKz1lLnNpemU9PW4/MDoxLHRoaXN9ZnVuY3Rpb24gQyhyKXt2YXIgdD0tMSxlPXI9PW51bGw/MDpyLmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrdDxlOyl7dmFyIG49clt0XTt0aGlzLnNldChuWzBdLG5bMV0pfX1DLnByb3RvdHlwZS5jbGVhcj1VbixDLnByb3RvdHlwZS5kZWxldGU9SG4sQy5wcm90b3R5cGUuZ2V0PXFuLEMucHJvdG90eXBlLmhhcz1ZbixDLnByb3RvdHlwZS5zZXQ9Qm47dmFyIEtuPSJFeHBlY3RlZCBhIGZ1bmN0aW9uIjtmdW5jdGlvbiBNdChyLHQpe2lmKHR5cGVvZiByIT0iZnVuY3Rpb24ifHx0IT1udWxsJiZ0eXBlb2YgdCE9ImZ1bmN0aW9uIil0aHJvdyBuZXcgVHlwZUVycm9yKEtuKTt2YXIgZT1mdW5jdGlvbigpe3ZhciBuPWFyZ3VtZW50cyxpPXQ/dC5hcHBseSh0aGlzLG4pOm5bMF0scz1lLmNhY2hlO2lmKHMuaGFzKGkpKXJldHVybiBzLmdldChpKTt2YXIgYT1yLmFwcGx5KHRoaXMsbik7cmV0dXJuIGUuY2FjaGU9cy5zZXQoaSxhKXx8cyxhfTtyZXR1cm4gZS5jYWNoZT1uZXcoTXQuQ2FjaGV8fEMpLGV9TXQuQ2FjaGU9Qzt2YXIgWm49NTAwO2Z1bmN0aW9uIFFuKHIpe3ZhciB0PU10KHIsZnVuY3Rpb24obil7cmV0dXJuIGUuc2l6ZT09PVpuJiZlLmNsZWFyKCksbn0pLGU9dC5jYWNoZTtyZXR1cm4gdH12YXIgV249L1teLltcXV0rfFxbKD86KC0/XGQrKD86XC5cZCspPyl8KFsiJ10pKCg/Oig/IVwyKVteXFxdfFxcLikqPylcMilcXXwoPz0oPzpcLnxcW1xdKSg/OlwufFxbXF18JCkpL2csSm49L1xcKFxcKT8vZyxWbj1RbihmdW5jdGlvbihyKXt2YXIgdD1bXTtyZXR1cm4gci5jaGFyQ29kZUF0KDApPT09NDYmJnQucHVzaCgiIiksci5yZXBsYWNlKFduLGZ1bmN0aW9uKGUsbixpLHMpe3QucHVzaChpP3MucmVwbGFjZShKbiwiJDEiKTpufHxlKX0pLHR9KSxrbj1WbjtmdW5jdGlvbiB0aShyKXtyZXR1cm4gcj09bnVsbD8iIjpOdChyKX1mdW5jdGlvbiBpdChyLHQpe3JldHVybiBUKHIpP3I6enQocix0KT9bcl06a24odGkocikpfXZhciByaT0xLzA7ZnVuY3Rpb24gUShyKXtpZih0eXBlb2Ygcj09InN0cmluZyJ8fHl0KHIpKXJldHVybiByO3ZhciB0PXIrIiI7cmV0dXJuIHQ9PSIwIiYmMS9yPT0tcmk/Ii0wIjp0fWZ1bmN0aW9uIGJ0KHIsdCl7dD1pdCh0LHIpO2Zvcih2YXIgZT0wLG49dC5sZW5ndGg7ciE9bnVsbCYmZTxuOylyPXJbUSh0W2UrK10pXTtyZXR1cm4gZSYmZT09bj9yOnZvaWQgMH1mdW5jdGlvbiBlaShyLHQsZSl7dmFyIG49cj09bnVsbD92b2lkIDA6YnQocix0KTtyZXR1cm4gbj09PXZvaWQgMD9lOm59ZnVuY3Rpb24gbnIocix0KXtmb3IodmFyIGU9LTEsbj10Lmxlbmd0aCxpPXIubGVuZ3RoOysrZTxuOylyW2krZV09dFtlXTtyZXR1cm4gcn12YXIgbmk9cnIoT2JqZWN0LmdldFByb3RvdHlwZU9mLE9iamVjdCksaWk9bmk7ZnVuY3Rpb24gc2koKXt0aGlzLl9fZGF0YV9fPW5ldyBBLHRoaXMuc2l6ZT0wfWZ1bmN0aW9uIGFpKHIpe3ZhciB0PXRoaXMuX19kYXRhX18sZT10LmRlbGV0ZShyKTtyZXR1cm4gdGhpcy5zaXplPXQuc2l6ZSxlfWZ1bmN0aW9uIG9pKHIpe3JldHVybiB0aGlzLl9fZGF0YV9fLmdldChyKX1mdW5jdGlvbiBoaShyKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMocil9dmFyIHVpPTIwMDtmdW5jdGlvbiBjaShyLHQpe3ZhciBlPXRoaXMuX19kYXRhX187aWYoZSBpbnN0YW5jZW9mIEEpe3ZhciBuPWUuX19kYXRhX187aWYoIVp8fG4ubGVuZ3RoPHVpLTEpcmV0dXJuIG4ucHVzaChbcix0XSksdGhpcy5zaXplPSsrZS5zaXplLHRoaXM7ZT10aGlzLl9fZGF0YV9fPW5ldyBDKG4pfXJldHVybiBlLnNldChyLHQpLHRoaXMuc2l6ZT1lLnNpemUsdGhpc31mdW5jdGlvbiBTKHIpe3ZhciB0PXRoaXMuX19kYXRhX189bmV3IEEocik7dGhpcy5zaXplPXQuc2l6ZX1TLnByb3RvdHlwZS5jbGVhcj1zaSxTLnByb3RvdHlwZS5kZWxldGU9YWksUy5wcm90b3R5cGUuZ2V0PW9pLFMucHJvdG90eXBlLmhhcz1oaSxTLnByb3RvdHlwZS5zZXQ9Y2k7ZnVuY3Rpb24gbGkocix0KXtmb3IodmFyIGU9LTEsbj1yPT1udWxsPzA6ci5sZW5ndGgsaT0wLHM9W107KytlPG47KXt2YXIgYT1yW2VdO3QoYSxlLHIpJiYoc1tpKytdPWEpfXJldHVybiBzfWZ1bmN0aW9uIGlyKCl7cmV0dXJuW119dmFyIGZpPU9iamVjdC5wcm90b3R5cGUseWk9ZmkucHJvcGVydHlJc0VudW1lcmFibGUsc3I9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxfaT1zcj9mdW5jdGlvbihyKXtyZXR1cm4gcj09bnVsbD9bXToocj1PYmplY3QociksbGkoc3IociksZnVuY3Rpb24odCl7cmV0dXJuIHlpLmNhbGwocix0KX0pKX06aXIsYXI9X2kscGk9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxnaT1waT9mdW5jdGlvbihyKXtmb3IodmFyIHQ9W107cjspbnIodCxhcihyKSkscj1paShyKTtyZXR1cm4gdH06aXIseGk9Z2k7ZnVuY3Rpb24gb3Iocix0LGUpe3ZhciBuPXQocik7cmV0dXJuIFQocik/bjpucihuLGUocikpfWZ1bmN0aW9uIGhyKHIpe3JldHVybiBvcihyLGVyLGFyKX1mdW5jdGlvbiBkaShyKXtyZXR1cm4gb3Iocixkbix4aSl9dmFyIHdpPUwoUCwiRGF0YVZpZXciKSx2dD13aSxtaT1MKFAsIlByb21pc2UiKSxQdD1taSx6aT1MKFAsIlNldCIpLFR0PXppLHVyPSJbb2JqZWN0IE1hcF0iLE1pPSJbb2JqZWN0IE9iamVjdF0iLGNyPSJbb2JqZWN0IFByb21pc2VdIixscj0iW29iamVjdCBTZXRdIixmcj0iW29iamVjdCBXZWFrTWFwXSIseXI9IltvYmplY3QgRGF0YVZpZXddIixiaT1GKHZ0KSx2aT1GKFopLFBpPUYoUHQpLFRpPUYoVHQpLEFpPUYocHQpLE49RzsodnQmJk4obmV3IHZ0KG5ldyBBcnJheUJ1ZmZlcigxKSkpIT15cnx8WiYmTihuZXcgWikhPXVyfHxQdCYmTihQdC5yZXNvbHZlKCkpIT1jcnx8VHQmJk4obmV3IFR0KSE9bHJ8fHB0JiZOKG5ldyBwdCkhPWZyKSYmKE49ZnVuY3Rpb24ocil7dmFyIHQ9RyhyKSxlPXQ9PU1pP3IuY29uc3RydWN0b3I6dm9pZCAwLG49ZT9GKGUpOiIiO2lmKG4pc3dpdGNoKG4pe2Nhc2UgYmk6cmV0dXJuIHlyO2Nhc2Ugdmk6cmV0dXJuIHVyO2Nhc2UgUGk6cmV0dXJuIGNyO2Nhc2UgVGk6cmV0dXJuIGxyO2Nhc2UgQWk6cmV0dXJuIGZyfXJldHVybiB0fSk7dmFyIF9yPU4sQ2k9UC5VaW50OEFycmF5LHByPUNpLFNpPSJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fIjtmdW5jdGlvbiAkaShyKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5zZXQocixTaSksdGhpc31mdW5jdGlvbiBFaShyKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMocil9ZnVuY3Rpb24gc3Qocil7dmFyIHQ9LTEsZT1yPT1udWxsPzA6ci5sZW5ndGg7Zm9yKHRoaXMuX19kYXRhX189bmV3IEM7Kyt0PGU7KXRoaXMuYWRkKHJbdF0pfXN0LnByb3RvdHlwZS5hZGQ9c3QucHJvdG90eXBlLnB1c2g9JGksc3QucHJvdG90eXBlLmhhcz1FaTtmdW5jdGlvbiBPaShyLHQpe2Zvcih2YXIgZT0tMSxuPXI9PW51bGw/MDpyLmxlbmd0aDsrK2U8bjspaWYodChyW2VdLGUscikpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gUmkocix0KXtyZXR1cm4gci5oYXModCl9dmFyIElpPTEsRmk9MjtmdW5jdGlvbiBncihyLHQsZSxuLGkscyl7dmFyIGE9ZSZJaSxoPXIubGVuZ3RoLHU9dC5sZW5ndGg7aWYoaCE9dSYmIShhJiZ1PmgpKXJldHVybiExO3ZhciBvPXMuZ2V0KHIpLGM9cy5nZXQodCk7aWYobyYmYylyZXR1cm4gbz09dCYmYz09cjt2YXIgbD0tMSxmPSEwLHk9ZSZGaT9uZXcgc3Q6dm9pZCAwO2ZvcihzLnNldChyLHQpLHMuc2V0KHQscik7KytsPGg7KXt2YXIgXz1yW2xdLHc9dFtsXTtpZihuKXZhciBtPWE/bih3LF8sbCx0LHIscyk6bihfLHcsbCxyLHQscyk7aWYobSE9PXZvaWQgMCl7aWYobSljb250aW51ZTtmPSExO2JyZWFrfWlmKHkpe2lmKCFPaSh0LGZ1bmN0aW9uKE0sdil7aWYoIVJpKHksdikmJihfPT09TXx8aShfLE0sZSxuLHMpKSlyZXR1cm4geS5wdXNoKHYpfSkpe2Y9ITE7YnJlYWt9fWVsc2UgaWYoIShfPT09d3x8aShfLHcsZSxuLHMpKSl7Zj0hMTticmVha319cmV0dXJuIHMuZGVsZXRlKHIpLHMuZGVsZXRlKHQpLGZ9ZnVuY3Rpb24gTGkocil7dmFyIHQ9LTEsZT1BcnJheShyLnNpemUpO3JldHVybiByLmZvckVhY2goZnVuY3Rpb24obixpKXtlWysrdF09W2ksbl19KSxlfWZ1bmN0aW9uIERpKHIpe3ZhciB0PS0xLGU9QXJyYXkoci5zaXplKTtyZXR1cm4gci5mb3JFYWNoKGZ1bmN0aW9uKG4pe2VbKyt0XT1ufSksZX12YXIgTmk9MSxqaT0yLEdpPSJbb2JqZWN0IEJvb2xlYW5dIixVaT0iW29iamVjdCBEYXRlXSIsWGk9IltvYmplY3QgRXJyb3JdIixIaT0iW29iamVjdCBNYXBdIixxaT0iW29iamVjdCBOdW1iZXJdIixZaT0iW29iamVjdCBSZWdFeHBdIixCaT0iW29iamVjdCBTZXRdIixLaT0iW29iamVjdCBTdHJpbmddIixaaT0iW29iamVjdCBTeW1ib2xdIixRaT0iW29iamVjdCBBcnJheUJ1ZmZlcl0iLFdpPSJbb2JqZWN0IERhdGFWaWV3XSIseHI9Tz9PLnByb3RvdHlwZTp2b2lkIDAsQXQ9eHI/eHIudmFsdWVPZjp2b2lkIDA7ZnVuY3Rpb24gSmkocix0LGUsbixpLHMsYSl7c3dpdGNoKGUpe2Nhc2UgV2k6aWYoci5ieXRlTGVuZ3RoIT10LmJ5dGVMZW5ndGh8fHIuYnl0ZU9mZnNldCE9dC5ieXRlT2Zmc2V0KXJldHVybiExO3I9ci5idWZmZXIsdD10LmJ1ZmZlcjtjYXNlIFFpOnJldHVybiEoci5ieXRlTGVuZ3RoIT10LmJ5dGVMZW5ndGh8fCFzKG5ldyBwcihyKSxuZXcgcHIodCkpKTtjYXNlIEdpOmNhc2UgVWk6Y2FzZSBxaTpyZXR1cm4geHQoK3IsK3QpO2Nhc2UgWGk6cmV0dXJuIHIubmFtZT09dC5uYW1lJiZyLm1lc3NhZ2U9PXQubWVzc2FnZTtjYXNlIFlpOmNhc2UgS2k6cmV0dXJuIHI9PXQrIiI7Y2FzZSBIaTp2YXIgaD1MaTtjYXNlIEJpOnZhciB1PW4mTmk7aWYoaHx8KGg9RGkpLHIuc2l6ZSE9dC5zaXplJiYhdSlyZXR1cm4hMTt2YXIgbz1hLmdldChyKTtpZihvKXJldHVybiBvPT10O258PWppLGEuc2V0KHIsdCk7dmFyIGM9Z3IoaChyKSxoKHQpLG4saSxzLGEpO3JldHVybiBhLmRlbGV0ZShyKSxjO2Nhc2UgWmk6aWYoQXQpcmV0dXJuIEF0LmNhbGwocik9PUF0LmNhbGwodCl9cmV0dXJuITF9dmFyIFZpPTEsa2k9T2JqZWN0LnByb3RvdHlwZSx0cz1raS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiBycyhyLHQsZSxuLGkscyl7dmFyIGE9ZSZWaSxoPWhyKHIpLHU9aC5sZW5ndGgsbz1ocih0KSxjPW8ubGVuZ3RoO2lmKHUhPWMmJiFhKXJldHVybiExO2Zvcih2YXIgbD11O2wtLTspe3ZhciBmPWhbbF07aWYoIShhP2YgaW4gdDp0cy5jYWxsKHQsZikpKXJldHVybiExfXZhciB5PXMuZ2V0KHIpLF89cy5nZXQodCk7aWYoeSYmXylyZXR1cm4geT09dCYmXz09cjt2YXIgdz0hMDtzLnNldChyLHQpLHMuc2V0KHQscik7Zm9yKHZhciBtPWE7KytsPHU7KXtmPWhbbF07dmFyIE09cltmXSx2PXRbZl07aWYobil2YXIgaz1hP24odixNLGYsdCxyLHMpOm4oTSx2LGYscix0LHMpO2lmKCEoaz09PXZvaWQgMD9NPT09dnx8aShNLHYsZSxuLHMpOmspKXt3PSExO2JyZWFrfW18fChtPWY9PSJjb25zdHJ1Y3RvciIpfWlmKHcmJiFtKXt2YXIgJD1yLmNvbnN0cnVjdG9yLHo9dC5jb25zdHJ1Y3RvcjskIT16JiYiY29uc3RydWN0b3IiaW4gciYmImNvbnN0cnVjdG9yImluIHQmJiEodHlwZW9mICQ9PSJmdW5jdGlvbiImJiQgaW5zdGFuY2VvZiAkJiZ0eXBlb2Ygej09ImZ1bmN0aW9uIiYmeiBpbnN0YW5jZW9mIHopJiYodz0hMSl9cmV0dXJuIHMuZGVsZXRlKHIpLHMuZGVsZXRlKHQpLHd9dmFyIGVzPTEsZHI9IltvYmplY3QgQXJndW1lbnRzXSIsd3I9IltvYmplY3QgQXJyYXldIixhdD0iW29iamVjdCBPYmplY3RdIixucz1PYmplY3QucHJvdG90eXBlLG1yPW5zLmhhc093blByb3BlcnR5O2Z1bmN0aW9uIGlzKHIsdCxlLG4saSxzKXt2YXIgYT1UKHIpLGg9VCh0KSx1PWE/d3I6X3Iociksbz1oP3dyOl9yKHQpO3U9dT09ZHI/YXQ6dSxvPW89PWRyP2F0Om87dmFyIGM9dT09YXQsbD1vPT1hdCxmPXU9PW87aWYoZiYmd3Qocikpe2lmKCF3dCh0KSlyZXR1cm4hMTthPSEwLGM9ITF9aWYoZiYmIWMpcmV0dXJuIHN8fChzPW5ldyBTKSxhfHxrdChyKT9ncihyLHQsZSxuLGkscyk6Smkocix0LHUsZSxuLGkscyk7aWYoIShlJmVzKSl7dmFyIHk9YyYmbXIuY2FsbChyLCJfX3dyYXBwZWRfXyIpLF89bCYmbXIuY2FsbCh0LCJfX3dyYXBwZWRfXyIpO2lmKHl8fF8pe3ZhciB3PXk/ci52YWx1ZSgpOnIsbT1fP3QudmFsdWUoKTp0O3JldHVybiBzfHwocz1uZXcgUyksaSh3LG0sZSxuLHMpfX1yZXR1cm4gZj8oc3x8KHM9bmV3IFMpLHJzKHIsdCxlLG4saSxzKSk6ITF9ZnVuY3Rpb24gQ3Qocix0LGUsbixpKXtyZXR1cm4gcj09PXQ/ITA6cj09bnVsbHx8dD09bnVsbHx8IVUocikmJiFVKHQpP3IhPT1yJiZ0IT09dDppcyhyLHQsZSxuLEN0LGkpfXZhciBzcz0xLGFzPTI7ZnVuY3Rpb24gb3Mocix0LGUsbil7dmFyIGk9ZS5sZW5ndGgscz1pLGE9IW47aWYocj09bnVsbClyZXR1cm4hcztmb3Iocj1PYmplY3Qocik7aS0tOyl7dmFyIGg9ZVtpXTtpZihhJiZoWzJdP2hbMV0hPT1yW2hbMF1dOiEoaFswXWluIHIpKXJldHVybiExfWZvcig7KytpPHM7KXtoPWVbaV07dmFyIHU9aFswXSxvPXJbdV0sYz1oWzFdO2lmKGEmJmhbMl0pe2lmKG89PT12b2lkIDAmJiEodSBpbiByKSlyZXR1cm4hMX1lbHNle3ZhciBsPW5ldyBTO2lmKG4pdmFyIGY9bihvLGMsdSxyLHQsbCk7aWYoIShmPT09dm9pZCAwP0N0KGMsbyxzc3xhcyxuLGwpOmYpKXJldHVybiExfX1yZXR1cm4hMH1mdW5jdGlvbiB6cihyKXtyZXR1cm4gcj09PXImJiFYKHIpfWZ1bmN0aW9uIGhzKHIpe2Zvcih2YXIgdD1lcihyKSxlPXQubGVuZ3RoO2UtLTspe3ZhciBuPXRbZV0saT1yW25dO3RbZV09W24saSx6cihpKV19cmV0dXJuIHR9ZnVuY3Rpb24gTXIocix0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGU9PW51bGw/ITE6ZVtyXT09PXQmJih0IT09dm9pZCAwfHxyIGluIE9iamVjdChlKSl9fWZ1bmN0aW9uIHVzKHIpe3ZhciB0PWhzKHIpO3JldHVybiB0Lmxlbmd0aD09MSYmdFswXVsyXT9Ncih0WzBdWzBdLHRbMF1bMV0pOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09cnx8b3MoZSxyLHQpfX1mdW5jdGlvbiBjcyhyLHQpe3JldHVybiByIT1udWxsJiZ0IGluIE9iamVjdChyKX1mdW5jdGlvbiBscyhyLHQsZSl7dD1pdCh0LHIpO2Zvcih2YXIgbj0tMSxpPXQubGVuZ3RoLHM9ITE7KytuPGk7KXt2YXIgYT1RKHRbbl0pO2lmKCEocz1yIT1udWxsJiZlKHIsYSkpKWJyZWFrO3I9clthXX1yZXR1cm4gc3x8KytuIT1pP3M6KGk9cj09bnVsbD8wOnIubGVuZ3RoLCEhaSYmZHQoaSkmJmd0KGEsaSkmJihUKHIpfHxCdChyKSkpfWZ1bmN0aW9uIGZzKHIsdCl7cmV0dXJuIHIhPW51bGwmJmxzKHIsdCxjcyl9dmFyIHlzPTEsX3M9MjtmdW5jdGlvbiBwcyhyLHQpe3JldHVybiB6dChyKSYmenIodCk/TXIoUShyKSx0KTpmdW5jdGlvbihlKXt2YXIgbj1laShlLHIpO3JldHVybiBuPT09dm9pZCAwJiZuPT09dD9mcyhlLHIpOkN0KHQsbix5c3xfcyl9fWZ1bmN0aW9uIGdzKHIpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdD09bnVsbD92b2lkIDA6dFtyXX19ZnVuY3Rpb24geHMocil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBidCh0LHIpfX1mdW5jdGlvbiBkcyhyKXtyZXR1cm4genQocik/Z3MoUShyKSk6eHMocil9ZnVuY3Rpb24gYnIocil7cmV0dXJuIHR5cGVvZiByPT0iZnVuY3Rpb24iP3I6cj09bnVsbD9acjp0eXBlb2Ygcj09Im9iamVjdCI/VChyKT9wcyhyWzBdLHJbMV0pOnVzKHIpOmRzKHIpfWZ1bmN0aW9uIHZyKHIpe3JldHVybiByPT09dm9pZCAwfXZhciB3cz0iRXhwZWN0ZWQgYSBmdW5jdGlvbiI7ZnVuY3Rpb24gbXMocil7aWYodHlwZW9mIHIhPSJmdW5jdGlvbiIpdGhyb3cgbmV3IFR5cGVFcnJvcih3cyk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzO3N3aXRjaCh0Lmxlbmd0aCl7Y2FzZSAwOnJldHVybiFyLmNhbGwodGhpcyk7Y2FzZSAxOnJldHVybiFyLmNhbGwodGhpcyx0WzBdKTtjYXNlIDI6cmV0dXJuIXIuY2FsbCh0aGlzLHRbMF0sdFsxXSk7Y2FzZSAzOnJldHVybiFyLmNhbGwodGhpcyx0WzBdLHRbMV0sdFsyXSl9cmV0dXJuIXIuYXBwbHkodGhpcyx0KX19ZnVuY3Rpb24genMocix0LGUsbil7aWYoIVgocikpcmV0dXJuIHI7dD1pdCh0LHIpO2Zvcih2YXIgaT0tMSxzPXQubGVuZ3RoLGE9cy0xLGg9cjtoIT1udWxsJiYrK2k8czspe3ZhciB1PVEodFtpXSksbz1lO2lmKHU9PT0iX19wcm90b19fInx8dT09PSJjb25zdHJ1Y3RvciJ8fHU9PT0icHJvdG90eXBlIilyZXR1cm4gcjtpZihpIT1hKXt2YXIgYz1oW3VdO289bj9uKGMsdSxoKTp2b2lkIDAsbz09PXZvaWQgMCYmKG89WChjKT9jOmd0KHRbaSsxXSk/W106e30pfXdlKGgsdSxvKSxoPWhbdV19cmV0dXJuIHJ9ZnVuY3Rpb24gTXMocix0LGUpe2Zvcih2YXIgbj0tMSxpPXQubGVuZ3RoLHM9e307KytuPGk7KXt2YXIgYT10W25dLGg9YnQocixhKTtlKGgsYSkmJnpzKHMsaXQoYSxyKSxoKX1yZXR1cm4gc31mdW5jdGlvbiBicyhyLHQpe2lmKHI9PW51bGwpcmV0dXJue307dmFyIGU9RnQoZGkociksZnVuY3Rpb24obil7cmV0dXJuW25dfSk7cmV0dXJuIHQ9YnIodCksTXMocixlLGZ1bmN0aW9uKG4saSl7cmV0dXJuIHQobixpWzBdKX0pfWZ1bmN0aW9uIHZzKHIsdCl7cmV0dXJuIGJzKHIsbXMoYnIodCkpKX1jb25zdCBQcz1uZXcgUmVnRXhwKCJHKFxcZCpcXC4/XFxkKykiKSxUcz1uZXcgUmVnRXhwKCJYKC0/XFxkKlxcLj9cXGQrKSIpLEFzPW5ldyBSZWdFeHAoIlkoLT9cXGQqXFwuP1xcZCspIiksQ3M9bmV3IFJlZ0V4cCgiVSgtP1xcZCpcXC4/XFxkKykiKSxTcz1uZXcgUmVnRXhwKCJGKFxcZCpcXC4/XFxkKykiKSwkcz1uZXcgUmVnRXhwKCJTKC0/XFxkKlxcLj9cXGQrKSIpLEVzPXI9Pntjb25zdCB0PXIubWF0Y2goUHMpLGU9ci5tYXRjaChUcyksbj1yLm1hdGNoKEFzKSxpPXIubWF0Y2goQ3MpLHM9ci5tYXRjaChTcyksYT1yLm1hdGNoKCRzKTtyZXR1cm57Zzp0P3BhcnNlSW50KHRbMV0pOnZvaWQgMCx4OmU/cGFyc2VGbG9hdChlWzFdKTp2b2lkIDAseTpuP3BhcnNlRmxvYXQoblsxXSk6dm9pZCAwLHU6aT9wYXJzZUZsb2F0KGlbMV0pOnZvaWQgMCxmOnM/cGFyc2VGbG9hdChzWzFdKTp2b2lkIDAsczphP3BhcnNlSW50KGFbMV0pOnZvaWQgMH19O3ZhciBSPShyPT4ocltyLndpdGhOb1Bvd2VyPTBdPSJ3aXRoTm9Qb3dlciIscltyLndpdGhQb3dlcj0xXT0id2l0aFBvd2VyIixyW3IuaXNEb3RNb2RlPTI1XT0iaXNEb3RNb2RlIixyKSkoUnx8e30pO2Z1bmN0aW9uIFN0KHIpe2NvbnN0IHQ9ci50b1N0cmluZygxNik7cmV0dXJuIHQubGVuZ3RoPT09MT8iMCIrdDp0fWZ1bmN0aW9uIE9zKHIsdCxlKXtyZXR1cm4iIyIrU3QocikrU3QodCkrU3QoZSl9Y29uc3QgUnM9KHIsdD0xZTMpPT57bGV0IGU9KDEtci90KSoyNTU7ZT4yNTUmJihlPTI1NSksZTwwJiYoZT0wKTtjb25zdCBuPU1hdGguZmxvb3IoZSk7cmV0dXJuIE9zKG4sbixuKX0sSXM9KHIsdCk9PntsZXQgZT0iIjtjb25zdCBuPWAKYDtmb3IoY29uc3QgaSBvZiByKWlmKGk9PT1uKXt0KGUpLGU9IiI7Y29udGludWV9ZWxzZSBlKz1pfSxGcz0iRzkxIixMcz0iRzkwIjtjbGFzcyBEc3tjb25zdHJ1Y3Rvcigpe2IodGhpcyxvdCk7Yih0aGlzLGh0KTtiKHRoaXMsVik7Yih0aGlzLHV0KTtiKHRoaXMsY3QpO2IodGhpcyxsdCk7Yih0aGlzLGZ0KTtqKHRoaXMsImxhc3RYIiwwKTtqKHRoaXMsImxhc3RZIiwwKTtqKHRoaXMsImxhc3RQb3dlciIsMWUzKTtqKHRoaXMsImlzUmVsYXRpdmUiLCExKTtiKHRoaXMsVywwKTtiKHRoaXMsSiwwKTtqKHRoaXMsImdsb2JhbENvbmZpZyIse2lkOjAsb3g6MCxveTowLHNpemU6e3c6MWUzLGg6MWUzfSxrZXlzOlsieCIsInkiXX0pO2IodGhpcyxJLHtwb3dlckZhY3RvcjoxfSk7aih0aGlzLCJkZWNvZGUiLCh0LGUsbixpKT0+KHt4OnQseTplfSkpfWNsZWFuKCl7dGhpcy5sYXN0WD0wLHRoaXMubGFzdFk9MCx0aGlzLmxhc3RQb3dlcj0wLHRoaXMuaXNSZWxhdGl2ZT0hMSx0aGlzLmdsb2JhbENvbmZpZz17b3g6MCxveTowLHNpemU6e3c6MWUzLGg6MWUzfSxpZDowLGtleXM6WyJ4IiwieSJdfSx0dCh0aGlzLEkse3Bvd2VyRmFjdG9yOjF9KX1wYXJzZUxpbmUodCl7cmV0dXJuIHQuc3RhcnRzV2l0aCgiIyIpP0UodGhpcyxvdCxTcikuY2FsbCh0aGlzLHQpOkUodGhpcyxjdCxPcikuY2FsbCh0aGlzLHQpfXBhcnNlQ29kZSh0LGUpe3JldHVybiBJcyh0LG49Pntjb25zdCBpPXRoaXMucGFyc2VMaW5lKG4pO2kmJmUoaSl9KX19Vz1uZXcgV2Vha01hcCxKPW5ldyBXZWFrTWFwLEk9bmV3IFdlYWtNYXAsb3Q9bmV3IFdlYWtTZXQsU3I9ZnVuY3Rpb24odCl7aWYodC5pbmNsdWRlcygiZ2MiKSl7Y29uc3QgZT10LnJlcGxhY2UoIiMgZ2M9IiwiIiksbj1KU09OLnBhcnNlKGUpO3JldHVybiB0aGlzLmdsb2JhbENvbmZpZz17Li4udGhpcy5nbG9iYWxDb25maWcsLi4ubn0sdGhpcy5kZWNvZGU9eFt0aGlzLmdsb2JhbENvbmZpZy5pZF0uZGVjb2RlLHt3aWR0aDp0aGlzLmdsb2JhbENvbmZpZy5zaXplLncsaGVpZ2h0OnRoaXMuZ2xvYmFsQ29uZmlnLnNpemUuaCxpc0NvbW1lbnQ6ITB9fWlmKHQuaW5jbHVkZXMoImJsb2NrQ29uZmlnIikpe2NvbnN0IGU9dC5yZXBsYWNlKCIjIGJsb2NrQ29uZmlnPSIsIiIpO3R0KHRoaXMsSSxKU09OLnBhcnNlKGUpKX19LGh0PW5ldyBXZWFrU2V0LCRyPWZ1bmN0aW9uKHQpe2lmKHQuZz09PTApcmV0dXJuIDA7aWYodC5zKXtjb25zdCBlPXQucy9xKHRoaXMsSSkucG93ZXJGYWN0b3I7cmV0dXJuIHRoaXMubGFzdFBvd2VyPWUsZX1yZXR1cm4gdC5zPT09MD8odGhpcy5sYXN0UG93ZXI9MCwwKTp0aGlzLmxhc3RQb3dlcn0sVj1uZXcgV2Vha1NldCxPdD1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odCl8fHZyKHQpfSx1dD1uZXcgV2Vha1NldCxFcj1mdW5jdGlvbih0LGUpe2U9PT1SLndpdGhQb3dlcj90dCh0aGlzLEosdCk6dHQodGhpcyxXLHQpfSxjdD1uZXcgV2Vha1NldCxPcj1mdW5jdGlvbih0KXtpZih0LnN0YXJ0c1dpdGgoRnMpKXt0aGlzLmlzUmVsYXRpdmU9ITA7cmV0dXJufWlmKHQuc3RhcnRzV2l0aChMcykpe3RoaXMuaXNSZWxhdGl2ZT0hMTtyZXR1cm59Y29uc3QgZT12cyhFcyh0KSx2cik7aWYoW1Iud2l0aE5vUG93ZXIsUi53aXRoUG93ZXIsUi5pc0RvdE1vZGVdLmluY2x1ZGVzKGUuZykmJk9iamVjdC5rZXlzKGUpLmxlbmd0aD49Mil7Y29uc3Qgbj1lLmcsaT1lLmY/ZS5mOmUuZz09PVIud2l0aFBvd2VyP3EodGhpcyxKKTpxKHRoaXMsVyk7bGV0e3g6cyx5OmF9PXRoaXMuZGVjb2RlKGVbdGhpcy5nbG9iYWxDb25maWcua2V5c1swXV0sZVt0aGlzLmdsb2JhbENvbmZpZy5rZXlzWzFdXSx0aGlzLmdsb2JhbENvbmZpZyx0aGlzLmlzUmVsYXRpdmUpO2lmKGUuZiYmRSh0aGlzLHV0LEVyKS5jYWxsKHRoaXMsaSxuKSxzPUUodGhpcyxWLE90KS5jYWxsKHRoaXMscyk/dGhpcy5sYXN0WDp0aGlzLmlzUmVsYXRpdmU/cyt0aGlzLmxhc3RYOnMsYT1FKHRoaXMsVixPdCkuY2FsbCh0aGlzLGEpP3RoaXMubGFzdFk6dGhpcy5pc1JlbGF0aXZlP2ErdGhpcy5sYXN0WTphLHM9PT10aGlzLmxhc3RYJiZhPT09dGhpcy5sYXN0WSlyZXR1cm47Y29uc3QgaD1FKHRoaXMsaHQsJHIpLmNhbGwodGhpcyxlKSx1PUUodGhpcyxmdCxJcikuY2FsbCh0aGlzLHt4OnMseTphLHBvd2VyOmgsZzpuLGY6aX0pO3JldHVybiB0aGlzLmxhc3RYPXMsdGhpcy5sYXN0WT1hLHV9fSxsdD1uZXcgV2Vha1NldCxScj1mdW5jdGlvbih0KXtyZXR1cm4gcSh0aGlzLEkpLmlzVmVjdG9yP3EodGhpcyxJKS5pc0N1dD90PT09MD8iI2ZmZmZmZiI6IiMwMDAwMDAiOnQ9PT0wPyIjZmZmZmZmIjoiIzc0N0E3QSI6UnModCl9LGZ0PW5ldyBXZWFrU2V0LElyPWZ1bmN0aW9uKHQpe2NvbnN0e3g6ZSx5Om4scG93ZXI6aSxnOnMsZjphfT10LGg9cz09PVIuaXNEb3RNb2RlLHU9RSh0aGlzLGx0LFJyKS5jYWxsKHRoaXMsaSk7cmV0dXJuIGg/e3g6ZSx5Om4sY29sb3I6dSxnOlIsZjphfTp7c3RhcnRQb2ludDp7eDpNYXRoLm1heCh0aGlzLmxhc3RYLDApLHk6TWF0aC5tYXgodGhpcy5sYXN0WSwwKX0sZW5kUG9pbnQ6e3g6TWF0aC5tYXgoZSwwKSx5Ok1hdGgubWF4KG4sMCl9LHg6TWF0aC5tYXgoZSwwKSx5Ok1hdGgubWF4KG4sMCksY29sb3I6dSxmOmEsZzpzfX07LyoqCiAqIEBsaWNlbnNlCiAqIENvcHlyaWdodCAyMDEwLTIwMjIgVGhyZWUuanMgQXV0aG9ycwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUCiAqL2NvbnN0IFByPSIxNDQiO2Z1bmN0aW9uIFRyKHIsdCxlKXtyZXR1cm4gTWF0aC5tYXgodCxNYXRoLm1pbihlLHIpKX1jbGFzcyBOc3tjb25zdHJ1Y3Rvcih0PTAsZT0wLG49MCxpPTEpe3RoaXMuaXNRdWF0ZXJuaW9uPSEwLHRoaXMuX3g9dCx0aGlzLl95PWUsdGhpcy5fej1uLHRoaXMuX3c9aX1zdGF0aWMgc2xlcnBGbGF0KHQsZSxuLGkscyxhLGgpe2xldCB1PW5baSswXSxvPW5baSsxXSxjPW5baSsyXSxsPW5baSszXTtjb25zdCBmPXNbYSswXSx5PXNbYSsxXSxfPXNbYSsyXSx3PXNbYSszXTtpZihoPT09MCl7dFtlKzBdPXUsdFtlKzFdPW8sdFtlKzJdPWMsdFtlKzNdPWw7cmV0dXJufWlmKGg9PT0xKXt0W2UrMF09Zix0W2UrMV09eSx0W2UrMl09Xyx0W2UrM109dztyZXR1cm59aWYobCE9PXd8fHUhPT1mfHxvIT09eXx8YyE9PV8pe2xldCBtPTEtaDtjb25zdCBNPXUqZitvKnkrYypfK2wqdyx2PU0+PTA/MTotMSxrPTEtTSpNO2lmKGs+TnVtYmVyLkVQU0lMT04pe2NvbnN0IHo9TWF0aC5zcXJ0KGspLENyPU1hdGguYXRhbjIoeixNKnYpO209TWF0aC5zaW4obSpDcikveixoPU1hdGguc2luKGgqQ3IpL3p9Y29uc3QgJD1oKnY7aWYodT11Km0rZiokLG89byptK3kqJCxjPWMqbStfKiQsbD1sKm0rdyokLG09PT0xLWgpe2NvbnN0IHo9MS9NYXRoLnNxcnQodSp1K28qbytjKmMrbCpsKTt1Kj16LG8qPXosYyo9eixsKj16fX10W2VdPXUsdFtlKzFdPW8sdFtlKzJdPWMsdFtlKzNdPWx9c3RhdGljIG11bHRpcGx5UXVhdGVybmlvbnNGbGF0KHQsZSxuLGkscyxhKXtjb25zdCBoPW5baV0sdT1uW2krMV0sbz1uW2krMl0sYz1uW2krM10sbD1zW2FdLGY9c1thKzFdLHk9c1thKzJdLF89c1thKzNdO3JldHVybiB0W2VdPWgqXytjKmwrdSp5LW8qZix0W2UrMV09dSpfK2MqZitvKmwtaCp5LHRbZSsyXT1vKl8rYyp5K2gqZi11KmwsdFtlKzNdPWMqXy1oKmwtdSpmLW8qeSx0fWdldCB4KCl7cmV0dXJuIHRoaXMuX3h9c2V0IHgodCl7dGhpcy5feD10LHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKX1nZXQgeSgpe3JldHVybiB0aGlzLl95fXNldCB5KHQpe3RoaXMuX3k9dCx0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCl9Z2V0IHooKXtyZXR1cm4gdGhpcy5fen1zZXQgeih0KXt0aGlzLl96PXQsdGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpfWdldCB3KCl7cmV0dXJuIHRoaXMuX3d9c2V0IHcodCl7dGhpcy5fdz10LHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKX1zZXQodCxlLG4saSl7cmV0dXJuIHRoaXMuX3g9dCx0aGlzLl95PWUsdGhpcy5fej1uLHRoaXMuX3c9aSx0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCksdGhpc31jbG9uZSgpe3JldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLl94LHRoaXMuX3ksdGhpcy5feix0aGlzLl93KX1jb3B5KHQpe3JldHVybiB0aGlzLl94PXQueCx0aGlzLl95PXQueSx0aGlzLl96PXQueix0aGlzLl93PXQudyx0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCksdGhpc31zZXRGcm9tRXVsZXIodCxlKXtjb25zdCBuPXQuX3gsaT10Ll95LHM9dC5feixhPXQuX29yZGVyLGg9TWF0aC5jb3MsdT1NYXRoLnNpbixvPWgobi8yKSxjPWgoaS8yKSxsPWgocy8yKSxmPXUobi8yKSx5PXUoaS8yKSxfPXUocy8yKTtzd2l0Y2goYSl7Y2FzZSJYWVoiOnRoaXMuX3g9ZipjKmwrbyp5Kl8sdGhpcy5feT1vKnkqbC1mKmMqXyx0aGlzLl96PW8qYypfK2YqeSpsLHRoaXMuX3c9bypjKmwtZip5Kl87YnJlYWs7Y2FzZSJZWFoiOnRoaXMuX3g9ZipjKmwrbyp5Kl8sdGhpcy5feT1vKnkqbC1mKmMqXyx0aGlzLl96PW8qYypfLWYqeSpsLHRoaXMuX3c9bypjKmwrZip5Kl87YnJlYWs7Y2FzZSJaWFkiOnRoaXMuX3g9ZipjKmwtbyp5Kl8sdGhpcy5feT1vKnkqbCtmKmMqXyx0aGlzLl96PW8qYypfK2YqeSpsLHRoaXMuX3c9bypjKmwtZip5Kl87YnJlYWs7Y2FzZSJaWVgiOnRoaXMuX3g9ZipjKmwtbyp5Kl8sdGhpcy5feT1vKnkqbCtmKmMqXyx0aGlzLl96PW8qYypfLWYqeSpsLHRoaXMuX3c9bypjKmwrZip5Kl87YnJlYWs7Y2FzZSJZWlgiOnRoaXMuX3g9ZipjKmwrbyp5Kl8sdGhpcy5feT1vKnkqbCtmKmMqXyx0aGlzLl96PW8qYypfLWYqeSpsLHRoaXMuX3c9bypjKmwtZip5Kl87YnJlYWs7Y2FzZSJYWlkiOnRoaXMuX3g9ZipjKmwtbyp5Kl8sdGhpcy5feT1vKnkqbC1mKmMqXyx0aGlzLl96PW8qYypfK2YqeSpsLHRoaXMuX3c9bypjKmwrZip5Kl87YnJlYWs7ZGVmYXVsdDpjb25zb2xlLndhcm4oIlRIUkVFLlF1YXRlcm5pb246IC5zZXRGcm9tRXVsZXIoKSBlbmNvdW50ZXJlZCBhbiB1bmtub3duIG9yZGVyOiAiK2EpfXJldHVybiBlIT09ITEmJnRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKSx0aGlzfXNldEZyb21BeGlzQW5nbGUodCxlKXtjb25zdCBuPWUvMixpPU1hdGguc2luKG4pO3JldHVybiB0aGlzLl94PXQueCppLHRoaXMuX3k9dC55KmksdGhpcy5fej10LnoqaSx0aGlzLl93PU1hdGguY29zKG4pLHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKSx0aGlzfXNldEZyb21Sb3RhdGlvbk1hdHJpeCh0KXtjb25zdCBlPXQuZWxlbWVudHMsbj1lWzBdLGk9ZVs0XSxzPWVbOF0sYT1lWzFdLGg9ZVs1XSx1PWVbOV0sbz1lWzJdLGM9ZVs2XSxsPWVbMTBdLGY9bitoK2w7aWYoZj4wKXtjb25zdCB5PS41L01hdGguc3FydChmKzEpO3RoaXMuX3c9LjI1L3ksdGhpcy5feD0oYy11KSp5LHRoaXMuX3k9KHMtbykqeSx0aGlzLl96PShhLWkpKnl9ZWxzZSBpZihuPmgmJm4+bCl7Y29uc3QgeT0yKk1hdGguc3FydCgxK24taC1sKTt0aGlzLl93PShjLXUpL3ksdGhpcy5feD0uMjUqeSx0aGlzLl95PShpK2EpL3ksdGhpcy5fej0ocytvKS95fWVsc2UgaWYoaD5sKXtjb25zdCB5PTIqTWF0aC5zcXJ0KDEraC1uLWwpO3RoaXMuX3c9KHMtbykveSx0aGlzLl94PShpK2EpL3ksdGhpcy5feT0uMjUqeSx0aGlzLl96PSh1K2MpL3l9ZWxzZXtjb25zdCB5PTIqTWF0aC5zcXJ0KDErbC1uLWgpO3RoaXMuX3c9KGEtaSkveSx0aGlzLl94PShzK28pL3ksdGhpcy5feT0odStjKS95LHRoaXMuX3o9LjI1Knl9cmV0dXJuIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKSx0aGlzfXNldEZyb21Vbml0VmVjdG9ycyh0LGUpe2xldCBuPXQuZG90KGUpKzE7cmV0dXJuIG48TnVtYmVyLkVQU0lMT04/KG49MCxNYXRoLmFicyh0LngpPk1hdGguYWJzKHQueik/KHRoaXMuX3g9LXQueSx0aGlzLl95PXQueCx0aGlzLl96PTAsdGhpcy5fdz1uKToodGhpcy5feD0wLHRoaXMuX3k9LXQueix0aGlzLl96PXQueSx0aGlzLl93PW4pKToodGhpcy5feD10LnkqZS56LXQueiplLnksdGhpcy5feT10LnoqZS54LXQueCplLnosdGhpcy5fej10LngqZS55LXQueSplLngsdGhpcy5fdz1uKSx0aGlzLm5vcm1hbGl6ZSgpfWFuZ2xlVG8odCl7cmV0dXJuIDIqTWF0aC5hY29zKE1hdGguYWJzKFRyKHRoaXMuZG90KHQpLC0xLDEpKSl9cm90YXRlVG93YXJkcyh0LGUpe2NvbnN0IG49dGhpcy5hbmdsZVRvKHQpO2lmKG49PT0wKXJldHVybiB0aGlzO2NvbnN0IGk9TWF0aC5taW4oMSxlL24pO3JldHVybiB0aGlzLnNsZXJwKHQsaSksdGhpc31pZGVudGl0eSgpe3JldHVybiB0aGlzLnNldCgwLDAsMCwxKX1pbnZlcnQoKXtyZXR1cm4gdGhpcy5jb25qdWdhdGUoKX1jb25qdWdhdGUoKXtyZXR1cm4gdGhpcy5feCo9LTEsdGhpcy5feSo9LTEsdGhpcy5feio9LTEsdGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpLHRoaXN9ZG90KHQpe3JldHVybiB0aGlzLl94KnQuX3grdGhpcy5feSp0Ll95K3RoaXMuX3oqdC5feit0aGlzLl93KnQuX3d9bGVuZ3RoU3EoKXtyZXR1cm4gdGhpcy5feCp0aGlzLl94K3RoaXMuX3kqdGhpcy5feSt0aGlzLl96KnRoaXMuX3ordGhpcy5fdyp0aGlzLl93fWxlbmd0aCgpe3JldHVybiBNYXRoLnNxcnQodGhpcy5feCp0aGlzLl94K3RoaXMuX3kqdGhpcy5feSt0aGlzLl96KnRoaXMuX3ordGhpcy5fdyp0aGlzLl93KX1ub3JtYWxpemUoKXtsZXQgdD10aGlzLmxlbmd0aCgpO3JldHVybiB0PT09MD8odGhpcy5feD0wLHRoaXMuX3k9MCx0aGlzLl96PTAsdGhpcy5fdz0xKToodD0xL3QsdGhpcy5feD10aGlzLl94KnQsdGhpcy5feT10aGlzLl95KnQsdGhpcy5fej10aGlzLl96KnQsdGhpcy5fdz10aGlzLl93KnQpLHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKSx0aGlzfW11bHRpcGx5KHQpe3JldHVybiB0aGlzLm11bHRpcGx5UXVhdGVybmlvbnModGhpcyx0KX1wcmVtdWx0aXBseSh0KXtyZXR1cm4gdGhpcy5tdWx0aXBseVF1YXRlcm5pb25zKHQsdGhpcyl9bXVsdGlwbHlRdWF0ZXJuaW9ucyh0LGUpe2NvbnN0IG49dC5feCxpPXQuX3kscz10Ll96LGE9dC5fdyxoPWUuX3gsdT1lLl95LG89ZS5feixjPWUuX3c7cmV0dXJuIHRoaXMuX3g9bipjK2EqaCtpKm8tcyp1LHRoaXMuX3k9aSpjK2EqdStzKmgtbipvLHRoaXMuX3o9cypjK2EqbytuKnUtaSpoLHRoaXMuX3c9YSpjLW4qaC1pKnUtcypvLHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKSx0aGlzfXNsZXJwKHQsZSl7aWYoZT09PTApcmV0dXJuIHRoaXM7aWYoZT09PTEpcmV0dXJuIHRoaXMuY29weSh0KTtjb25zdCBuPXRoaXMuX3gsaT10aGlzLl95LHM9dGhpcy5feixhPXRoaXMuX3c7bGV0IGg9YSp0Ll93K24qdC5feCtpKnQuX3krcyp0Ll96O2lmKGg8MD8odGhpcy5fdz0tdC5fdyx0aGlzLl94PS10Ll94LHRoaXMuX3k9LXQuX3ksdGhpcy5fej0tdC5feixoPS1oKTp0aGlzLmNvcHkodCksaD49MSlyZXR1cm4gdGhpcy5fdz1hLHRoaXMuX3g9bix0aGlzLl95PWksdGhpcy5fej1zLHRoaXM7Y29uc3QgdT0xLWgqaDtpZih1PD1OdW1iZXIuRVBTSUxPTil7Y29uc3QgeT0xLWU7cmV0dXJuIHRoaXMuX3c9eSphK2UqdGhpcy5fdyx0aGlzLl94PXkqbitlKnRoaXMuX3gsdGhpcy5feT15KmkrZSp0aGlzLl95LHRoaXMuX3o9eSpzK2UqdGhpcy5feix0aGlzLm5vcm1hbGl6ZSgpLHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKSx0aGlzfWNvbnN0IG89TWF0aC5zcXJ0KHUpLGM9TWF0aC5hdGFuMihvLGgpLGw9TWF0aC5zaW4oKDEtZSkqYykvbyxmPU1hdGguc2luKGUqYykvbztyZXR1cm4gdGhpcy5fdz1hKmwrdGhpcy5fdypmLHRoaXMuX3g9bipsK3RoaXMuX3gqZix0aGlzLl95PWkqbCt0aGlzLl95KmYsdGhpcy5fej1zKmwrdGhpcy5feipmLHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKSx0aGlzfXNsZXJwUXVhdGVybmlvbnModCxlLG4pe3JldHVybiB0aGlzLmNvcHkodCkuc2xlcnAoZSxuKX1yYW5kb20oKXtjb25zdCB0PU1hdGgucmFuZG9tKCksZT1NYXRoLnNxcnQoMS10KSxuPU1hdGguc3FydCh0KSxpPTIqTWF0aC5QSSpNYXRoLnJhbmRvbSgpLHM9MipNYXRoLlBJKk1hdGgucmFuZG9tKCk7cmV0dXJuIHRoaXMuc2V0KGUqTWF0aC5jb3MoaSksbipNYXRoLnNpbihzKSxuKk1hdGguY29zKHMpLGUqTWF0aC5zaW4oaSkpfWVxdWFscyh0KXtyZXR1cm4gdC5feD09PXRoaXMuX3gmJnQuX3k9PT10aGlzLl95JiZ0Ll96PT09dGhpcy5feiYmdC5fdz09PXRoaXMuX3d9ZnJvbUFycmF5KHQsZT0wKXtyZXR1cm4gdGhpcy5feD10W2VdLHRoaXMuX3k9dFtlKzFdLHRoaXMuX3o9dFtlKzJdLHRoaXMuX3c9dFtlKzNdLHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKSx0aGlzfXRvQXJyYXkodD1bXSxlPTApe3JldHVybiB0W2VdPXRoaXMuX3gsdFtlKzFdPXRoaXMuX3ksdFtlKzJdPXRoaXMuX3osdFtlKzNdPXRoaXMuX3csdH1mcm9tQnVmZmVyQXR0cmlidXRlKHQsZSl7cmV0dXJuIHRoaXMuX3g9dC5nZXRYKGUpLHRoaXMuX3k9dC5nZXRZKGUpLHRoaXMuX3o9dC5nZXRaKGUpLHRoaXMuX3c9dC5nZXRXKGUpLHRoaXN9X29uQ2hhbmdlKHQpe3JldHVybiB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrPXQsdGhpc31fb25DaGFuZ2VDYWxsYmFjaygpe30qW1N5bWJvbC5pdGVyYXRvcl0oKXt5aWVsZCB0aGlzLl94LHlpZWxkIHRoaXMuX3kseWllbGQgdGhpcy5feix5aWVsZCB0aGlzLl93fX1jbGFzcyBIe2NvbnN0cnVjdG9yKHQ9MCxlPTAsbj0wKXtILnByb3RvdHlwZS5pc1ZlY3RvcjM9ITAsdGhpcy54PXQsdGhpcy55PWUsdGhpcy56PW59c2V0KHQsZSxuKXtyZXR1cm4gbj09PXZvaWQgMCYmKG49dGhpcy56KSx0aGlzLng9dCx0aGlzLnk9ZSx0aGlzLno9bix0aGlzfXNldFNjYWxhcih0KXtyZXR1cm4gdGhpcy54PXQsdGhpcy55PXQsdGhpcy56PXQsdGhpc31zZXRYKHQpe3JldHVybiB0aGlzLng9dCx0aGlzfXNldFkodCl7cmV0dXJuIHRoaXMueT10LHRoaXN9c2V0Wih0KXtyZXR1cm4gdGhpcy56PXQsdGhpc31zZXRDb21wb25lbnQodCxlKXtzd2l0Y2godCl7Y2FzZSAwOnRoaXMueD1lO2JyZWFrO2Nhc2UgMTp0aGlzLnk9ZTticmVhaztjYXNlIDI6dGhpcy56PWU7YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoImluZGV4IGlzIG91dCBvZiByYW5nZTogIit0KX1yZXR1cm4gdGhpc31nZXRDb21wb25lbnQodCl7c3dpdGNoKHQpe2Nhc2UgMDpyZXR1cm4gdGhpcy54O2Nhc2UgMTpyZXR1cm4gdGhpcy55O2Nhc2UgMjpyZXR1cm4gdGhpcy56O2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKCJpbmRleCBpcyBvdXQgb2YgcmFuZ2U6ICIrdCl9fWNsb25lKCl7cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMueCx0aGlzLnksdGhpcy56KX1jb3B5KHQpe3JldHVybiB0aGlzLng9dC54LHRoaXMueT10LnksdGhpcy56PXQueix0aGlzfWFkZCh0KXtyZXR1cm4gdGhpcy54Kz10LngsdGhpcy55Kz10LnksdGhpcy56Kz10LnosdGhpc31hZGRTY2FsYXIodCl7cmV0dXJuIHRoaXMueCs9dCx0aGlzLnkrPXQsdGhpcy56Kz10LHRoaXN9YWRkVmVjdG9ycyh0LGUpe3JldHVybiB0aGlzLng9dC54K2UueCx0aGlzLnk9dC55K2UueSx0aGlzLno9dC56K2Uueix0aGlzfWFkZFNjYWxlZFZlY3Rvcih0LGUpe3JldHVybiB0aGlzLngrPXQueCplLHRoaXMueSs9dC55KmUsdGhpcy56Kz10LnoqZSx0aGlzfXN1Yih0KXtyZXR1cm4gdGhpcy54LT10LngsdGhpcy55LT10LnksdGhpcy56LT10LnosdGhpc31zdWJTY2FsYXIodCl7cmV0dXJuIHRoaXMueC09dCx0aGlzLnktPXQsdGhpcy56LT10LHRoaXN9c3ViVmVjdG9ycyh0LGUpe3JldHVybiB0aGlzLng9dC54LWUueCx0aGlzLnk9dC55LWUueSx0aGlzLno9dC56LWUueix0aGlzfW11bHRpcGx5KHQpe3JldHVybiB0aGlzLngqPXQueCx0aGlzLnkqPXQueSx0aGlzLnoqPXQueix0aGlzfW11bHRpcGx5U2NhbGFyKHQpe3JldHVybiB0aGlzLngqPXQsdGhpcy55Kj10LHRoaXMueio9dCx0aGlzfW11bHRpcGx5VmVjdG9ycyh0LGUpe3JldHVybiB0aGlzLng9dC54KmUueCx0aGlzLnk9dC55KmUueSx0aGlzLno9dC56KmUueix0aGlzfWFwcGx5RXVsZXIodCl7cmV0dXJuIHRoaXMuYXBwbHlRdWF0ZXJuaW9uKEFyLnNldEZyb21FdWxlcih0KSl9YXBwbHlBeGlzQW5nbGUodCxlKXtyZXR1cm4gdGhpcy5hcHBseVF1YXRlcm5pb24oQXIuc2V0RnJvbUF4aXNBbmdsZSh0LGUpKX1hcHBseU1hdHJpeDModCl7Y29uc3QgZT10aGlzLngsbj10aGlzLnksaT10aGlzLnoscz10LmVsZW1lbnRzO3JldHVybiB0aGlzLng9c1swXSplK3NbM10qbitzWzZdKmksdGhpcy55PXNbMV0qZStzWzRdKm4rc1s3XSppLHRoaXMuej1zWzJdKmUrc1s1XSpuK3NbOF0qaSx0aGlzfWFwcGx5Tm9ybWFsTWF0cml4KHQpe3JldHVybiB0aGlzLmFwcGx5TWF0cml4Myh0KS5ub3JtYWxpemUoKX1hcHBseU1hdHJpeDQodCl7Y29uc3QgZT10aGlzLngsbj10aGlzLnksaT10aGlzLnoscz10LmVsZW1lbnRzLGE9MS8oc1szXSplK3NbN10qbitzWzExXSppK3NbMTVdKTtyZXR1cm4gdGhpcy54PShzWzBdKmUrc1s0XSpuK3NbOF0qaStzWzEyXSkqYSx0aGlzLnk9KHNbMV0qZStzWzVdKm4rc1s5XSppK3NbMTNdKSphLHRoaXMuej0oc1syXSplK3NbNl0qbitzWzEwXSppK3NbMTRdKSphLHRoaXN9YXBwbHlRdWF0ZXJuaW9uKHQpe2NvbnN0IGU9dGhpcy54LG49dGhpcy55LGk9dGhpcy56LHM9dC54LGE9dC55LGg9dC56LHU9dC53LG89dSplK2EqaS1oKm4sYz11Km4raCplLXMqaSxsPXUqaStzKm4tYSplLGY9LXMqZS1hKm4taCppO3JldHVybiB0aGlzLng9byp1K2YqLXMrYyotaC1sKi1hLHRoaXMueT1jKnUrZiotYStsKi1zLW8qLWgsdGhpcy56PWwqdStmKi1oK28qLWEtYyotcyx0aGlzfXByb2plY3QodCl7cmV0dXJuIHRoaXMuYXBwbHlNYXRyaXg0KHQubWF0cml4V29ybGRJbnZlcnNlKS5hcHBseU1hdHJpeDQodC5wcm9qZWN0aW9uTWF0cml4KX11bnByb2plY3QodCl7cmV0dXJuIHRoaXMuYXBwbHlNYXRyaXg0KHQucHJvamVjdGlvbk1hdHJpeEludmVyc2UpLmFwcGx5TWF0cml4NCh0Lm1hdHJpeFdvcmxkKX10cmFuc2Zvcm1EaXJlY3Rpb24odCl7Y29uc3QgZT10aGlzLngsbj10aGlzLnksaT10aGlzLnoscz10LmVsZW1lbnRzO3JldHVybiB0aGlzLng9c1swXSplK3NbNF0qbitzWzhdKmksdGhpcy55PXNbMV0qZStzWzVdKm4rc1s5XSppLHRoaXMuej1zWzJdKmUrc1s2XSpuK3NbMTBdKmksdGhpcy5ub3JtYWxpemUoKX1kaXZpZGUodCl7cmV0dXJuIHRoaXMueC89dC54LHRoaXMueS89dC55LHRoaXMuei89dC56LHRoaXN9ZGl2aWRlU2NhbGFyKHQpe3JldHVybiB0aGlzLm11bHRpcGx5U2NhbGFyKDEvdCl9bWluKHQpe3JldHVybiB0aGlzLng9TWF0aC5taW4odGhpcy54LHQueCksdGhpcy55PU1hdGgubWluKHRoaXMueSx0LnkpLHRoaXMuej1NYXRoLm1pbih0aGlzLnosdC56KSx0aGlzfW1heCh0KXtyZXR1cm4gdGhpcy54PU1hdGgubWF4KHRoaXMueCx0LngpLHRoaXMueT1NYXRoLm1heCh0aGlzLnksdC55KSx0aGlzLno9TWF0aC5tYXgodGhpcy56LHQueiksdGhpc31jbGFtcCh0LGUpe3JldHVybiB0aGlzLng9TWF0aC5tYXgodC54LE1hdGgubWluKGUueCx0aGlzLngpKSx0aGlzLnk9TWF0aC5tYXgodC55LE1hdGgubWluKGUueSx0aGlzLnkpKSx0aGlzLno9TWF0aC5tYXgodC56LE1hdGgubWluKGUueix0aGlzLnopKSx0aGlzfWNsYW1wU2NhbGFyKHQsZSl7cmV0dXJuIHRoaXMueD1NYXRoLm1heCh0LE1hdGgubWluKGUsdGhpcy54KSksdGhpcy55PU1hdGgubWF4KHQsTWF0aC5taW4oZSx0aGlzLnkpKSx0aGlzLno9TWF0aC5tYXgodCxNYXRoLm1pbihlLHRoaXMueikpLHRoaXN9Y2xhbXBMZW5ndGgodCxlKXtjb25zdCBuPXRoaXMubGVuZ3RoKCk7cmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKG58fDEpLm11bHRpcGx5U2NhbGFyKE1hdGgubWF4KHQsTWF0aC5taW4oZSxuKSkpfWZsb29yKCl7cmV0dXJuIHRoaXMueD1NYXRoLmZsb29yKHRoaXMueCksdGhpcy55PU1hdGguZmxvb3IodGhpcy55KSx0aGlzLno9TWF0aC5mbG9vcih0aGlzLnopLHRoaXN9Y2VpbCgpe3JldHVybiB0aGlzLng9TWF0aC5jZWlsKHRoaXMueCksdGhpcy55PU1hdGguY2VpbCh0aGlzLnkpLHRoaXMuej1NYXRoLmNlaWwodGhpcy56KSx0aGlzfXJvdW5kKCl7cmV0dXJuIHRoaXMueD1NYXRoLnJvdW5kKHRoaXMueCksdGhpcy55PU1hdGgucm91bmQodGhpcy55KSx0aGlzLno9TWF0aC5yb3VuZCh0aGlzLnopLHRoaXN9cm91bmRUb1plcm8oKXtyZXR1cm4gdGhpcy54PXRoaXMueDwwP01hdGguY2VpbCh0aGlzLngpOk1hdGguZmxvb3IodGhpcy54KSx0aGlzLnk9dGhpcy55PDA/TWF0aC5jZWlsKHRoaXMueSk6TWF0aC5mbG9vcih0aGlzLnkpLHRoaXMuej10aGlzLno8MD9NYXRoLmNlaWwodGhpcy56KTpNYXRoLmZsb29yKHRoaXMueiksdGhpc31uZWdhdGUoKXtyZXR1cm4gdGhpcy54PS10aGlzLngsdGhpcy55PS10aGlzLnksdGhpcy56PS10aGlzLnosdGhpc31kb3QodCl7cmV0dXJuIHRoaXMueCp0LngrdGhpcy55KnQueSt0aGlzLnoqdC56fWxlbmd0aFNxKCl7cmV0dXJuIHRoaXMueCp0aGlzLngrdGhpcy55KnRoaXMueSt0aGlzLnoqdGhpcy56fWxlbmd0aCgpe3JldHVybiBNYXRoLnNxcnQodGhpcy54KnRoaXMueCt0aGlzLnkqdGhpcy55K3RoaXMueip0aGlzLnopfW1hbmhhdHRhbkxlbmd0aCgpe3JldHVybiBNYXRoLmFicyh0aGlzLngpK01hdGguYWJzKHRoaXMueSkrTWF0aC5hYnModGhpcy56KX1ub3JtYWxpemUoKXtyZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIodGhpcy5sZW5ndGgoKXx8MSl9c2V0TGVuZ3RoKHQpe3JldHVybiB0aGlzLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKHQpfWxlcnAodCxlKXtyZXR1cm4gdGhpcy54Kz0odC54LXRoaXMueCkqZSx0aGlzLnkrPSh0LnktdGhpcy55KSplLHRoaXMueis9KHQuei10aGlzLnopKmUsdGhpc31sZXJwVmVjdG9ycyh0LGUsbil7cmV0dXJuIHRoaXMueD10LngrKGUueC10LngpKm4sdGhpcy55PXQueSsoZS55LXQueSkqbix0aGlzLno9dC56KyhlLnotdC56KSpuLHRoaXN9Y3Jvc3ModCl7cmV0dXJuIHRoaXMuY3Jvc3NWZWN0b3JzKHRoaXMsdCl9Y3Jvc3NWZWN0b3JzKHQsZSl7Y29uc3Qgbj10LngsaT10Lnkscz10LnosYT1lLngsaD1lLnksdT1lLno7cmV0dXJuIHRoaXMueD1pKnUtcypoLHRoaXMueT1zKmEtbip1LHRoaXMuej1uKmgtaSphLHRoaXN9cHJvamVjdE9uVmVjdG9yKHQpe2NvbnN0IGU9dC5sZW5ndGhTcSgpO2lmKGU9PT0wKXJldHVybiB0aGlzLnNldCgwLDAsMCk7Y29uc3Qgbj10LmRvdCh0aGlzKS9lO3JldHVybiB0aGlzLmNvcHkodCkubXVsdGlwbHlTY2FsYXIobil9cHJvamVjdE9uUGxhbmUodCl7cmV0dXJuICR0LmNvcHkodGhpcykucHJvamVjdE9uVmVjdG9yKHQpLHRoaXMuc3ViKCR0KX1yZWZsZWN0KHQpe3JldHVybiB0aGlzLnN1YigkdC5jb3B5KHQpLm11bHRpcGx5U2NhbGFyKDIqdGhpcy5kb3QodCkpKX1hbmdsZVRvKHQpe2NvbnN0IGU9TWF0aC5zcXJ0KHRoaXMubGVuZ3RoU3EoKSp0Lmxlbmd0aFNxKCkpO2lmKGU9PT0wKXJldHVybiBNYXRoLlBJLzI7Y29uc3Qgbj10aGlzLmRvdCh0KS9lO3JldHVybiBNYXRoLmFjb3MoVHIobiwtMSwxKSl9ZGlzdGFuY2VUbyh0KXtyZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VUb1NxdWFyZWQodCkpfWRpc3RhbmNlVG9TcXVhcmVkKHQpe2NvbnN0IGU9dGhpcy54LXQueCxuPXRoaXMueS10LnksaT10aGlzLnotdC56O3JldHVybiBlKmUrbipuK2kqaX1tYW5oYXR0YW5EaXN0YW5jZVRvKHQpe3JldHVybiBNYXRoLmFicyh0aGlzLngtdC54KStNYXRoLmFicyh0aGlzLnktdC55KStNYXRoLmFicyh0aGlzLnotdC56KX1zZXRGcm9tU3BoZXJpY2FsKHQpe3JldHVybiB0aGlzLnNldEZyb21TcGhlcmljYWxDb29yZHModC5yYWRpdXMsdC5waGksdC50aGV0YSl9c2V0RnJvbVNwaGVyaWNhbENvb3Jkcyh0LGUsbil7Y29uc3QgaT1NYXRoLnNpbihlKSp0O3JldHVybiB0aGlzLng9aSpNYXRoLnNpbihuKSx0aGlzLnk9TWF0aC5jb3MoZSkqdCx0aGlzLno9aSpNYXRoLmNvcyhuKSx0aGlzfXNldEZyb21DeWxpbmRyaWNhbCh0KXtyZXR1cm4gdGhpcy5zZXRGcm9tQ3lsaW5kcmljYWxDb29yZHModC5yYWRpdXMsdC50aGV0YSx0LnkpfXNldEZyb21DeWxpbmRyaWNhbENvb3Jkcyh0LGUsbil7cmV0dXJuIHRoaXMueD10Kk1hdGguc2luKGUpLHRoaXMueT1uLHRoaXMuej10Kk1hdGguY29zKGUpLHRoaXN9c2V0RnJvbU1hdHJpeFBvc2l0aW9uKHQpe2NvbnN0IGU9dC5lbGVtZW50cztyZXR1cm4gdGhpcy54PWVbMTJdLHRoaXMueT1lWzEzXSx0aGlzLno9ZVsxNF0sdGhpc31zZXRGcm9tTWF0cml4U2NhbGUodCl7Y29uc3QgZT10aGlzLnNldEZyb21NYXRyaXhDb2x1bW4odCwwKS5sZW5ndGgoKSxuPXRoaXMuc2V0RnJvbU1hdHJpeENvbHVtbih0LDEpLmxlbmd0aCgpLGk9dGhpcy5zZXRGcm9tTWF0cml4Q29sdW1uKHQsMikubGVuZ3RoKCk7cmV0dXJuIHRoaXMueD1lLHRoaXMueT1uLHRoaXMuej1pLHRoaXN9c2V0RnJvbU1hdHJpeENvbHVtbih0LGUpe3JldHVybiB0aGlzLmZyb21BcnJheSh0LmVsZW1lbnRzLGUqNCl9c2V0RnJvbU1hdHJpeDNDb2x1bW4odCxlKXtyZXR1cm4gdGhpcy5mcm9tQXJyYXkodC5lbGVtZW50cyxlKjMpfXNldEZyb21FdWxlcih0KXtyZXR1cm4gdGhpcy54PXQuX3gsdGhpcy55PXQuX3ksdGhpcy56PXQuX3osdGhpc31lcXVhbHModCl7cmV0dXJuIHQueD09PXRoaXMueCYmdC55PT09dGhpcy55JiZ0Lno9PT10aGlzLnp9ZnJvbUFycmF5KHQsZT0wKXtyZXR1cm4gdGhpcy54PXRbZV0sdGhpcy55PXRbZSsxXSx0aGlzLno9dFtlKzJdLHRoaXN9dG9BcnJheSh0PVtdLGU9MCl7cmV0dXJuIHRbZV09dGhpcy54LHRbZSsxXT10aGlzLnksdFtlKzJdPXRoaXMueix0fWZyb21CdWZmZXJBdHRyaWJ1dGUodCxlKXtyZXR1cm4gdGhpcy54PXQuZ2V0WChlKSx0aGlzLnk9dC5nZXRZKGUpLHRoaXMuej10LmdldFooZSksdGhpc31yYW5kb20oKXtyZXR1cm4gdGhpcy54PU1hdGgucmFuZG9tKCksdGhpcy55PU1hdGgucmFuZG9tKCksdGhpcy56PU1hdGgucmFuZG9tKCksdGhpc31yYW5kb21EaXJlY3Rpb24oKXtjb25zdCB0PShNYXRoLnJhbmRvbSgpLS41KSoyLGU9TWF0aC5yYW5kb20oKSpNYXRoLlBJKjIsbj1NYXRoLnNxcnQoMS10KioyKTtyZXR1cm4gdGhpcy54PW4qTWF0aC5jb3MoZSksdGhpcy55PW4qTWF0aC5zaW4oZSksdGhpcy56PXQsdGhpc30qW1N5bWJvbC5pdGVyYXRvcl0oKXt5aWVsZCB0aGlzLngseWllbGQgdGhpcy55LHlpZWxkIHRoaXMuen19Y29uc3QgJHQ9bmV3IEgsQXI9bmV3IE5zO3R5cGVvZiBfX1RIUkVFX0RFVlRPT0xTX188InUiJiZfX1RIUkVFX0RFVlRPT0xTX18uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoInJlZ2lzdGVyIix7ZGV0YWlsOntyZXZpc2lvbjpQcn19KSksdHlwZW9mIHdpbmRvdzwidSImJih3aW5kb3cuX19USFJFRV9fP2NvbnNvbGUud2FybigiV0FSTklORzogTXVsdGlwbGUgaW5zdGFuY2VzIG9mIFRocmVlLmpzIGJlaW5nIGltcG9ydGVkLiIpOndpbmRvdy5fX1RIUkVFX189UHIpLG9ubWVzc2FnZT1yPT57Y29uc3R7Z2NvZGU6dH09ci5kYXRhO2lmKCF0KXJldHVybjtjb25zdCBlPW5ldyBEcyxuPW5ldyBNYXAsaT1uZXcgTWFwO2xldCBzPXt3aWR0aDoxMDAsaGVpZ2h0OjEwMH07Y29uc29sZS50aW1lKCJwYXJzZSIpLGUucGFyc2VDb2RlKHQsYT0+e2NvbnN0IGg9YTtpZihoLndpZHRoJiZoLmhlaWdodCl7cz1oO3JldHVybn1jb25zdCB1PWE7aWYodS5zdGFydFBvaW50JiZ1LmVuZFBvaW50JiZ1LmNvbG9yKXtjb25zdCBjPW5ldyBIKHUuc3RhcnRQb2ludC54LC11LnN0YXJ0UG9pbnQueSksbD1uZXcgSCh1LmVuZFBvaW50LngsLXUuZW5kUG9pbnQueSk7aWYobi5oYXModS5jb2xvcikpe2NvbnN0IGY9bi5nZXQodS5jb2xvcik7Zj09bnVsbHx8Zi5wb2ludHMucHVzaChjLGwpfWVsc2Ugbi5zZXQodS5jb2xvcix7cG9pbnRzOltjLGxdLGNvbG9yOnUuY29sb3J9KTtyZXR1cm59Y29uc3Qgbz1hO2lmKG8ueCYmby55JiZvLmNvbG9yKXtjb25zdCBjPW5ldyBIKG8ueCwtby55KTtpZihpLmhhcyhvLmNvbG9yKSl7Y29uc3QgbD1pLmdldChvLmNvbG9yKTtsPT1udWxsfHxsLnBvaW50cy5wdXNoKGMpfWVsc2UgaS5zZXQoby5jb2xvcix7cG9pbnRzOltjXSxjb2xvcjpvLmNvbG9yfSk7cmV0dXJufX0pLGNvbnNvbGUubG9nKCJsaW5lcyIsbi5zaXplKSxjb25zb2xlLnRpbWVFbmQoInBhcnNlIikscG9zdE1lc3NhZ2Uoe2xpbmVzOm4scG9pbnRzOmkscGxhbmU6c30pfX0pKCk7Cg==",pa=typeof window<"u"&&window.Blob&&new Blob([atob(Na)],{type:"text/javascript;charset=utf-8"});function Tf(){let r;try{if(r=pa&&(window.URL||window.webkitURL).createObjectURL(pa),!r)throw"";return new Worker(r)}catch{return new Worker("data:application/javascript;base64,"+Na)}finally{r&&(window.URL||window.webkitURL).revokeObjectURL(r)}}function Lf(r,e=new $n({color:16711680})){const t=new lt().setFromPoints(r);return new xf(t,e)}function Cf(r,e=new $n({color:16711680})){const t=new lt().setFromPoints(r);return new Ns(t,e)}class Rf{constructor(e={width:window.innerWidth,height:window.innerHeight},t={}){Fe(this,"options");Fe(this,"size");Fe(this,"stats");Fe(this,"renderer");Fe(this,"scene");Fe(this,"camera");Fe(this,"axes");Fe(this,"grid");Fe(this,"indicatorPoint");Fe(this,"controls");Fe(this,"lineGroup");Fe(this,"materialMap",new Map);Fe(this,"pointsMaterialMap",new Map);Fe(this,"loadingMesh");Fe(this,"loadingSpeed",.01);Fe(this,"worker");Fe(this,"_enableLoading");Fe(this,"_enableStats");Fe(this,"_enableAxesHelper");Fe(this,"_enableGridHelper");Fe(this,"_enableIndicatorPoint");Fe(this,"_enableControls");this.size=e,this.options=t,this.options.antialias||(this.options.antialias=!0),this.options.background||(this.options.background=16448250),this.options.canvasColor||(this.options.canvasColor=16777215),this.options.autoFitRatio||(this.options.autoFitRatio=.8)}reset(){this.worker&&this.worker.terminate(),this.stopLoading(),this.removeAllLines(),this.setIndicatorPoint(0,0),this.controls.reset()}removeAllLines(){if(this.lineGroup){this.scene.remove(this.lineGroup);for(const e of this.lineGroup.children)e instanceof Ha&&e.geometry.dispose();this.lineGroup=null}this.materialMap.forEach(e=>{e.dispose()}),this.materialMap.clear()}setUp(){this.setUpComponents()}renderOn(e){e.appendChild(this.renderer.domElement),this.renderStats(e)}renderGCode(e,t){if(this.reset(),e.length<1)return;this.controls.mouseButtons.LEFT=an.PAN,this.worker=new Tf,this.worker.postMessage({gcode:e}),t!=null&&t.onStart&&(t==null||t.onStart());let n;this.enableLoading&&(n=setTimeout(()=>{this.startLoadig()},500)),this.worker.onmessage=i=>{this.worker.terminate();const s=()=>{this.enableLoading&&(clearTimeout(n),this.stopLoading()),t!=null&&t.onFinish&&(t==null||t.onFinish())},{lines:o,points:a,plane:c}=i.data;if(t!=null&&t.onParsed){let l=!1;o&&o.size>0&&(l=!0),a&&a.size>0&&(l=!0),c&&c.width>0&&c.height>0&&(l=!0),t==null||t.onParsed(l)}console.time("render"),c&&this.addPlane(c),o.forEach(l=>{this.addLine(l)}),a.forEach(l=>{this.addPoints(l)}),console.timeEnd("render"),this.centerGroup(),this.autoFit(),s()}}setSize(e){this.size=e,this.camera.aspect=this.size.width/this.size.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.size.width,this.size.height)}get enableControls(){return this._enableControls}set enableControls(e){this._enableControls=e,this.controls&&(this.controls.enabled=e)}get enableLoading(){return this._enableLoading}set enableLoading(e){this._enableLoading=e,e||this.stopLoading()}get enableStats(){return this._enableStats}set enableStats(e){this._enableStats=e;const t=()=>{this.stats&&(this.stats.end(),this.stats.dom.parentNode&&this.stats.dom.parentNode.removeChild(this.stats.dom),this.stats=null)};e?(t(),this.stats=wf()):t()}renderStats(e){this.stats&&e.appendChild(this.stats.dom)}setStatsTop(e=0){this.stats&&(this.stats.dom.style.top=e+"px")}get enableAxesHelper(){return this._enableAxesHelper}set enableAxesHelper(e){this._enableAxesHelper=e;const t=()=>{this.axes&&(this.axes.removeFromParent(),this.axes=null)};e?(t(),this.axes=new Mf(1e3),this.scene.add(this.axes)):t()}get enableGridHelper(){return this._enableGridHelper}set enableGridHelper(e){this._enableGridHelper=e;const t=()=>{this.grid&&(this.grid.removeFromParent(),this.grid=null)};e?(t(),this.grid=new vf(500,50,12303291,13553358),this.scene.add(this.grid)):t()}get enableIndicatorPoint(){return this._enableIndicatorPoint}set enableIndicatorPoint(e){this._enableIndicatorPoint=e;const t=()=>{this.indicatorPoint&&(this.indicatorPoint.removeFromParent(),this.indicatorPoint=null)};if(e){t();const n=new Us(.5),i=new Ui({color:16711680,wireframe:!0});i.side=Pt,this.indicatorPoint=new Ct(n,i),this.scene.add(this.indicatorPoint)}else t()}setIndicatorPoint(e,t){if(!this.indicatorPoint||!this.lineGroup)return;let n=0,i=0;(e!==-1||t!==-1)&&(n=e+this.lineGroup.position.x,i=t-this.lineGroup.position.y),this.indicatorPoint.position.set(n,-i,0)}revert(){this.controls.reset(),this.autoFit()}zoom(e){let t=this.camera.position.z*e;t>this.controls.maxDistance&&(t=this.controls.maxDistance),t<this.controls.minDistance&&(t=this.controls.minDistance),this.camera.position.z=t}centerGroup(){this.lineGroup&&new $t().setFromObject(this.lineGroup).getCenter(this.lineGroup.position).multiplyScalar(-1)}autoFit(e=!1){if(!this.lineGroup)return;const{width:t,height:n}=this.getLineGroupSize(),i=this.size.width<t||this.size.height<n;if(e&&!i)return;let s;this.size.width>this.size.height?this.size.width*(n/t)>this.size.height*this.options.autoFitRatio?s=this.calDistWithHeight(n/this.options.autoFitRatio):s=this.calDistWithWidth(t/this.options.autoFitRatio):this.size.height*(t/n)>this.size.width*this.options.autoFitRatio?s=this.calDistWithWidth(t/this.options.autoFitRatio):s=this.calDistWithHeight(n/this.options.autoFitRatio),this.camera.position.z=s}animate(){requestAnimationFrame(this.animate.bind(this)),this.render(),this.stats&&this.stats.update(),this.rotateLoadingMesh(),this.controls.update()}addPoints(e){this.lineGroup||(this.lineGroup=new fn,this.scene.add(this.lineGroup));const t=this.getCachedPointsMaterial(e.color),n=Lf(e.points,t);this.lineGroup.add(n)}addLine(e){this.lineGroup||(this.lineGroup=new fn,this.scene.add(this.lineGroup));const t=this.getCachedMaterial(e.color),n=Cf(e.points,t);this.lineGroup.add(n)}addPlane(e){this.lineGroup||(this.lineGroup=new fn,this.scene.add(this.lineGroup));const t=new Oi(e.width,e.height),n=new Ui({color:this.options.canvasColor,side:Pt}),i=new Ct(t,n);i.position.x=e.width*.5,i.position.y=-e.height*.5,this.lineGroup.add(i)}startLoadig(){this.stopLoading(),this.loadingMesh=new Ct(new Qn(10,10,10),new _f),this.scene.add(this.loadingMesh)}stopLoading(){this.loadingMesh&&(this.loadingMesh.removeFromParent(),this.loadingMesh=null)}rotateLoadingMesh(){this.loadingMesh&&(this.loadingMesh.rotation.x-=this.loadingSpeed*2,this.loadingMesh.rotation.y-=this.loadingSpeed,this.loadingMesh.rotation.z-=this.loadingSpeed*3)}setUpComponents(){this.scene=new gf,this.scene.background=new Pe(this.options.background),this.camera=new bt(45,this.size.width/this.size.height,1,1e4),this.camera.position.z=400,this.renderer=new za({antialias:this.options.antialias}),this.renderer.setSize(this.size.width,this.size.height),this.controls=new Sf(this.camera,this.renderer.domElement),this.controls.enableRotate=!1,this.controls.minDistance=1,this.controls.maxDistance=1e4;const e=new yf(4210752);this.scene.add(e)}getCachedMaterial(e){const t=e+"";let n;return this.materialMap.has(t)?n=this.materialMap.get(t):(n=new $n({color:e,transparent:!1}),this.materialMap.set(t,n)),n}getCachedPointsMaterial(e){const t=e+"";let n;return this.pointsMaterialMap.has(t)?n=this.pointsMaterialMap.get(t):(n=new Va({color:e,size:1,sizeAttenuation:!1}),this.pointsMaterialMap.set(t,n)),n}render(){this.renderer.render(this.scene,this.camera)}calDistWithHeight(e){const t=wr.degToRad(this.camera.fov);return e/(2*Math.tan(t/2))}calDistWithWidth(e){const t=wr.degToRad(this.camera.fov);return e/this.camera.aspect/(2*Math.tan(t/2))}getLineGroupSize(){const e=new $t().setFromObject(this.lineGroup).max,t=new $t().setFromObject(this.lineGroup).min,n=e.x-t.x,i=e.y-t.y;return{width:n,height:i}}}const Ef=Qa({__name:"preview",setup(r){const e=Os(),{width:t,height:n}=Ja(),i=Os(!0),s=new Rf({width:t.value,height:n.value}),o={async gcode(l){let d="";const h=window.MeApi||window.parent.MeApi;h?d=await h.fileHelper.readGcode(l):d=l,s.renderGCode(d,{onFinish:()=>{d="",i.value=!1}})},clean(){s.reset()},loading(l){i.value=l}},a=l=>{const{type:d,data:h}=l.data;o[d]&&o[d](h)},c=()=>({width:t.value,height:n.value});return ja(e,()=>{s.setSize(c()),s.autoFit(!0)}),qa(()=>{s.setUp();const l=e.value;l&&(s.renderOn(l),s.animate()),window.parent.addEventListener("message",a)}),$a(()=>{s.reset(),window.parent.removeEventListener("message",a)}),(l,d)=>(io(),eo(no(ao),{show:i.value},{default:to(()=>[so("div",{ref_key:"gCodeRef",ref:e},null,512)]),_:1},8,["show"]))}});const Gf=ro(Ef);Gf.mount("#app");
