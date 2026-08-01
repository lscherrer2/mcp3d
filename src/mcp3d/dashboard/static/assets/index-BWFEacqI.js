(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Qf={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function gx(){if(gg)return bo;gg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return bo.Fragment=e,bo.jsx=i,bo.jsxs=i,bo}var vg;function vx(){return vg||(vg=1,Qf.exports=gx()),Qf.exports}var Lt=vx(),Jf={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function Sx(){if(Sg)return ae;Sg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function g(N,nt,St){this.props=N,this.context=nt,this.refs=y,this.updater=St||T}g.prototype.isReactComponent={},g.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function B(){}B.prototype=g.prototype;function L(N,nt,St){this.props=N,this.context=nt,this.refs=y,this.updater=St||T}var D=L.prototype=new B;D.constructor=L,R(D,g.prototype),D.isPureReactComponent=!0;var j=Array.isArray;function G(){}var O={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function w(N,nt,St){var Y=St.ref;return{$$typeof:o,type:N,key:nt,ref:Y!==void 0?Y:null,props:St}}function C(N,nt){return w(N.type,nt,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function lt(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(St){return nt[St]})}var st=/\/+/g;function pt(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?lt(""+N.key):nt.toString(36)}function _t(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(G,G):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,nt,St,Y,ft){var Mt=typeof N;(Mt==="undefined"||Mt==="boolean")&&(N=null);var vt=!1;if(N===null)vt=!0;else switch(Mt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(N.$$typeof){case o:case e:vt=!0;break;case S:return vt=N._init,P(vt(N._payload),nt,St,Y,ft)}}if(vt)return ft=ft(N),vt=Y===""?"."+pt(N,0):Y,j(ft)?(St="",vt!=null&&(St=vt.replace(st,"$&/")+"/"),P(ft,nt,St,"",function(Zt){return Zt})):ft!=null&&(H(ft)&&(ft=C(ft,St+(ft.key==null||N&&N.key===ft.key?"":(""+ft.key).replace(st,"$&/")+"/")+vt)),nt.push(ft)),1;vt=0;var zt=Y===""?".":Y+":";if(j(N))for(var Yt=0;Yt<N.length;Yt++)Y=N[Yt],Mt=zt+pt(Y,Yt),vt+=P(Y,nt,St,Mt,ft);else if(Yt=M(N),typeof Yt=="function")for(N=Yt.call(N),Yt=0;!(Y=N.next()).done;)Y=Y.value,Mt=zt+pt(Y,Yt++),vt+=P(Y,nt,St,Mt,ft);else if(Mt==="object"){if(typeof N.then=="function")return P(_t(N),nt,St,Y,ft);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return vt}function K(N,nt,St){if(N==null)return N;var Y=[],ft=0;return P(N,Y,"","",function(Mt){return nt.call(St,Mt,ft++)}),Y}function Z(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(St){(N._status===0||N._status===-1)&&(N._status=1,N._result=St)},function(St){(N._status===0||N._status===-1)&&(N._status=2,N._result=St)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var xt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Tt={map:K,forEach:function(N,nt,St){K(N,function(){nt.apply(this,arguments)},St)},count:function(N){var nt=0;return K(N,function(){nt++}),nt},toArray:function(N){return K(N,function(nt){return nt})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ae.Activity=v,ae.Children=Tt,ae.Component=g,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=L,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ae.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},ae.cache=function(N){return function(){return N.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(N,nt,St){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Y=R({},N.props),ft=N.key;if(nt!=null)for(Mt in nt.key!==void 0&&(ft=""+nt.key),nt)!q.call(nt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&nt.ref===void 0||(Y[Mt]=nt[Mt]);var Mt=arguments.length-2;if(Mt===1)Y.children=St;else if(1<Mt){for(var vt=Array(Mt),zt=0;zt<Mt;zt++)vt[zt]=arguments[zt+2];Y.children=vt}return w(N.type,ft,Y)},ae.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ae.createElement=function(N,nt,St){var Y,ft={},Mt=null;if(nt!=null)for(Y in nt.key!==void 0&&(Mt=""+nt.key),nt)q.call(nt,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ft[Y]=nt[Y]);var vt=arguments.length-2;if(vt===1)ft.children=St;else if(1<vt){for(var zt=Array(vt),Yt=0;Yt<vt;Yt++)zt[Yt]=arguments[Yt+2];ft.children=zt}if(N&&N.defaultProps)for(Y in vt=N.defaultProps,vt)ft[Y]===void 0&&(ft[Y]=vt[Y]);return w(N,Mt,ft)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(N){return{$$typeof:d,render:N}},ae.isValidElement=H,ae.lazy=function(N){return{$$typeof:S,_payload:{_status:-1,_result:N},_init:Z}},ae.memo=function(N,nt){return{$$typeof:p,type:N,compare:nt===void 0?null:nt}},ae.startTransition=function(N){var nt=O.T,St={};O.T=St;try{var Y=N(),ft=O.S;ft!==null&&ft(St,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(G,xt)}catch(Mt){xt(Mt)}finally{nt!==null&&St.types!==null&&(nt.types=St.types),O.T=nt}},ae.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ae.use=function(N){return O.H.use(N)},ae.useActionState=function(N,nt,St){return O.H.useActionState(N,nt,St)},ae.useCallback=function(N,nt){return O.H.useCallback(N,nt)},ae.useContext=function(N){return O.H.useContext(N)},ae.useDebugValue=function(){},ae.useDeferredValue=function(N,nt){return O.H.useDeferredValue(N,nt)},ae.useEffect=function(N,nt){return O.H.useEffect(N,nt)},ae.useEffectEvent=function(N){return O.H.useEffectEvent(N)},ae.useId=function(){return O.H.useId()},ae.useImperativeHandle=function(N,nt,St){return O.H.useImperativeHandle(N,nt,St)},ae.useInsertionEffect=function(N,nt){return O.H.useInsertionEffect(N,nt)},ae.useLayoutEffect=function(N,nt){return O.H.useLayoutEffect(N,nt)},ae.useMemo=function(N,nt){return O.H.useMemo(N,nt)},ae.useOptimistic=function(N,nt){return O.H.useOptimistic(N,nt)},ae.useReducer=function(N,nt,St){return O.H.useReducer(N,nt,St)},ae.useRef=function(N){return O.H.useRef(N)},ae.useState=function(N){return O.H.useState(N)},ae.useSyncExternalStore=function(N,nt,St){return O.H.useSyncExternalStore(N,nt,St)},ae.useTransition=function(){return O.H.useTransition()},ae.version="19.2.8",ae}var xg;function Td(){return xg||(xg=1,Jf.exports=Sx()),Jf.exports}var Di=Td(),$f={exports:{}},Ao={},th={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function xx(){return yg||(yg=1,(function(o){function e(P,K){var Z=P.length;P.push(K);t:for(;0<Z;){var xt=Z-1>>>1,Tt=P[xt];if(0<l(Tt,K))P[xt]=K,P[Z]=Tt,Z=xt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var K=P[0],Z=P.pop();if(Z!==K){P[0]=Z;t:for(var xt=0,Tt=P.length,N=Tt>>>1;xt<N;){var nt=2*(xt+1)-1,St=P[nt],Y=nt+1,ft=P[Y];if(0>l(St,Z))Y<Tt&&0>l(ft,St)?(P[xt]=ft,P[Y]=Z,xt=Y):(P[xt]=St,P[nt]=Z,xt=nt);else if(Y<Tt&&0>l(ft,Z))P[xt]=ft,P[Y]=Z,xt=Y;else break t}}return K}function l(P,K){var Z=P.sortIndex-K.sortIndex;return Z!==0?Z:P.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,v=null,x=3,M=!1,T=!1,R=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=P)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function j(P){if(R=!1,D(P),!T)if(i(m)!==null)T=!0,G||(G=!0,lt());else{var K=i(p);K!==null&&_t(j,K.startTime-P)}}var G=!1,O=-1,q=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<q)}function H(){if(y=!1,G){var P=o.unstable_now();w=P;var K=!0;try{t:{T=!1,R&&(R=!1,B(O),O=-1),M=!0;var Z=x;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&C());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,x=v.priorityLevel;var Tt=xt(v.expirationTime<=P);if(P=o.unstable_now(),typeof Tt=="function"){v.callback=Tt,D(P),K=!0;break e}v===i(m)&&s(m),D(P)}else s(m);v=i(m)}if(v!==null)K=!0;else{var N=i(p);N!==null&&_t(j,N.startTime-P),K=!1}}break t}finally{v=null,x=Z,M=!1}K=void 0}}finally{K?lt():G=!1}}}var lt;if(typeof L=="function")lt=function(){L(H)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,pt=st.port2;st.port1.onmessage=H,lt=function(){pt.postMessage(null)}}else lt=function(){g(H,0)};function _t(P,K){O=g(function(){P(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Z=x;x=K;try{return P()}finally{x=Z}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=x;x=P;try{return K()}finally{x=Z}},o.unstable_scheduleCallback=function(P,K,Z){var xt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?xt+Z:xt):Z=xt,P){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Z+Tt,P={id:S++,callback:K,priorityLevel:P,startTime:Z,expirationTime:Tt,sortIndex:-1},Z>xt?(P.sortIndex=Z,e(p,P),i(m)===null&&P===i(p)&&(R?(B(O),O=-1):R=!0,_t(j,Z-xt))):(P.sortIndex=Tt,e(m,P),T||M||(T=!0,G||(G=!0,lt()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var K=x;return function(){var Z=x;x=K;try{return P.apply(this,arguments)}finally{x=Z}}}})(eh)),eh}var Mg;function yx(){return Mg||(Mg=1,th.exports=xx()),th.exports}var nh={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function Mx(){if(Eg)return Rn;Eg=1;var o=Td();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,S)},Rn.flushSync=function(m){var p=h.T,S=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=S,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):S==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin);s.d.L(m,S,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.8",Rn}var Tg;function Ex(){if(Tg)return nh.exports;Tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),nh.exports=Mx(),nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function Tx(){if(bg)return Ao;bg=1;var o=yx(),e=Td(),i=Ex();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,E=c.child;E;){if(E===a){_=!0,a=c,r=f;break}if(E===r){_=!0,r=c,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,r=c;break}if(E===r){_=!0,r=f,a=c;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case j:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var _t=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},xt=[],Tt=-1;function N(t){return{current:t}}function nt(t){0>Tt||(t.current=xt[Tt],xt[Tt]=null,Tt--)}function St(t,n){Tt++,xt[Tt]=t.current,t.current=n}var Y=N(null),ft=N(null),Mt=N(null),vt=N(null);function zt(t,n){switch(St(Mt,n),St(ft,t),St(Y,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?H_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=H_(n),t=G_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(Y),St(Y,t)}function Yt(){nt(Y),nt(ft),nt(Mt)}function Zt(t){t.memoizedState!==null&&St(vt,t);var n=Y.current,a=G_(n,t.type);n!==a&&(St(ft,t),St(Y,a))}function Ve(t){ft.current===t&&(nt(Y),nt(ft)),vt.current===t&&(nt(vt),yo._currentValue=Z)}var He,fe;function I(t){if(He===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);He=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+He+t+fe}var bn=!1;function he(t,n){if(!t||bn)return"";bn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(rt){var tt=rt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(rt){tt=rt}t.call(mt.prototype)}}else{try{throw Error()}catch(rt){tt=rt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(rt){if(rt&&tt&&typeof rt.stack=="string")return[rt.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var z=_.split(`
`),$=E.split(`
`);for(c=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(r===z.length||c===$.length)for(r=z.length-1,c=$.length-1;1<=r&&0<=c&&z[r]!==$[c];)c--;for(;1<=r&&0<=c;r--,c--)if(z[r]!==$[c]){if(r!==1||c!==1)do if(r--,c--,0>c||z[r]!==$[c]){var ct=`
`+z[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=c);break}}}finally{bn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?I(a):""}function _e(t,n){switch(t.tag){case 26:case 27:case 5:return I(t.type);case 16:return I("Lazy");case 13:return t.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return he(t.type,!1);case 11:return he(t.type.render,!1);case 1:return he(t.type,!0);case 31:return I("Activity");default:return""}}function Xt(t){try{var n="",a=null;do n+=_e(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var De=Object.prototype.hasOwnProperty,Vt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,b=o.unstable_shouldYield,et=o.unstable_requestPaint,ut=o.unstable_now,yt=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,Rt=o.unstable_NormalPriority,Kt=o.unstable_LowPriority,Jt=o.unstable_IdlePriority,bt=o.log,Bt=o.unstable_setDisableYieldValue,jt=null,Gt=null;function Ot(t){if(typeof bt=="function"&&Bt(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(jt,t)}catch{}}var te=Math.clz32?Math.clz32:X,se=Math.log,Ne=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(se(t)/Ne|0)|0}var Ct=256,ot=262144,gt=4194304;function At(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function wt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=At(r):(_&=E,_!==0?c=At(_):a||(a=E&~t,a!==0&&(c=At(a))))):(E=r&~f,E!==0?c=At(E):_!==0?c=At(_):a||(a=r&~t,a!==0&&(c=At(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ee(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function qe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var t=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pi(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,$=t.hiddenUpdates;for(a=_&~a;0<a;){var ct=31-te(a),mt=1<<ct;E[ct]=0,z[ct]=-1;var tt=$[ct];if(tt!==null)for($[ct]=null,ct=0;ct<tt.length;ct++){var rt=tt[ct];rt!==null&&(rt.lane&=-536870913)}a&=~mt}r!==0&&Lr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Lr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-te(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Nr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-te(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function bi(t,n){var a=n&-n;return a=(a&42)!==0?1:Ya(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ya(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Rs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Or(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:ug(t.type))}function ja(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var mi=Math.random().toString(36).slice(2),Ze="__reactFiber$"+mi,Sn="__reactProps$"+mi,Ii="__reactContainer$"+mi,Pr="__reactEvents$"+mi,kc="__reactListeners$"+mi,Wc="__reactHandles$"+mi,Xo="__reactResources$"+mi,Za="__reactMarker$"+mi;function zr(t){delete t[Ze],delete t[Sn],delete t[Pr],delete t[kc],delete t[Wc]}function A(t){var n=t[Ze];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ii]||a[Ze]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=j_(t);t!==null;){if(a=t[Ze])return a;t=j_(t)}return n}t=a,a=t.parentNode}return null}function k(t){if(t=t[Ze]||t[Ii]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function it(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function at(t){var n=t[Xo];return n||(n=t[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function V(t){t[Za]=!0}var Et=new Set,Dt={};function Nt(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for(Dt[t]=n,t=0;t<n.length;t++)Et.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},kt={};function Se(t){return De.call(kt,t)?!0:De.call($t,t)?!1:ne.test(t)?kt[t]=!0:($t[t]=!0,!1)}function xe(t,n,a){if(Se(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function be(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ie(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Me(t){if(!t._valueTracker){var n=qt(t)?"checked":"value";t._valueTracker=cn(t,n,""+t[n])}}function On(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=qt(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function _i(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function pn(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oe(t,n,a,r,c,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ie(n)):t.value!==""+ie(n)&&(t.value=""+ie(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?An(t,_,ie(n)):a!=null?An(t,_,ie(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ie(E):t.removeAttribute("name")}function Un(t,n,a,r,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Me(t);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Me(t)}function An(t,n,a){n==="number"&&_i(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ke(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function xn(t,n,a){if(n!=null&&(n=""+ie(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ie(a):""}function Cs(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(_t(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ie(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Me(t)}function Pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var h0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bd(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||h0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Id(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Bd(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Bd(t,f,n[f])}function qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var d0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),p0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(t){return p0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var Yc=null;function jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ws=null,Ds=null;function Fd(t){var n=k(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Oe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[Sn]||null;if(!c)throw Error(s(90));Oe(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&On(r)}break t;case"textarea":xn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ke(t,!!a.multiple,n,!1)}}}var Zc=!1;function Hd(t,n,a){if(Zc)return t(n,a);Zc=!0;try{var r=t(n);return r}finally{if(Zc=!1,(ws!==null||Ds!==null)&&(Ul(),ws&&(n=ws,t=Ds,Ds=ws=null,Fd(n),t)))for(n=0;n<t.length;n++)Fd(t[n])}}function Br(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Sn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Hi)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Kc=!1}var ha=null,Qc=null,Wo=null;function Gd(){if(Wo)return Wo;var t,n=Qc,a=n.length,r,c="value"in ha?ha.value:ha.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return Wo=c.slice(t,1<r?1-r:void 0)}function qo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function Vd(){return!1}function zn(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:Vd,this.isPropagationStopped=Vd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=zn(Ka),Fr=v({},Ka,{view:0,detail:0}),m0=zn(Fr),Jc,$c,Hr,Zo=v({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hr&&(Hr&&t.type==="mousemove"?(Jc=t.screenX-Hr.screenX,$c=t.screenY-Hr.screenY):$c=Jc=0,Hr=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Xd=zn(Zo),_0=v({},Zo,{dataTransfer:0}),g0=zn(_0),v0=v({},Fr,{relatedTarget:0}),tu=zn(v0),S0=v({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),x0=zn(S0),y0=v({},Ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M0=zn(y0),E0=v({},Ka,{data:0}),kd=zn(E0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=A0[t])?!!n[t]:!1}function eu(){return R0}var C0=v({},Fr,{key:function(t){if(t.key){var n=T0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w0=zn(C0),D0=v({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wd=zn(D0),U0=v({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),L0=zn(U0),N0=v({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=zn(N0),P0=v({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=zn(P0),B0=v({},Ka,{newState:0,oldState:0}),I0=zn(B0),F0=[9,13,27,32],nu=Hi&&"CompositionEvent"in window,Gr=null;Hi&&"documentMode"in document&&(Gr=document.documentMode);var H0=Hi&&"TextEvent"in window&&!Gr,qd=Hi&&(!nu||Gr&&8<Gr&&11>=Gr),Yd=" ",jd=!1;function Zd(t,n){switch(t){case"keyup":return F0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function G0(t,n){switch(t){case"compositionend":return Kd(n);case"keypress":return n.which!==32?null:(jd=!0,Yd);case"textInput":return t=n.data,t===Yd&&jd?null:t;default:return null}}function V0(t,n){if(Us)return t==="compositionend"||!nu&&Zd(t,n)?(t=Gd(),Wo=Qc=ha=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qd&&n.locale!=="ko"?null:n.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!X0[t.type]:n==="textarea"}function Jd(t,n,a,r){ws?Ds?Ds.push(r):Ds=[r]:ws=r,n=Il(n,"onChange"),0<n.length&&(a=new jo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Vr=null,Xr=null;function k0(t){O_(t,0)}function Ko(t){var n=it(t);if(On(n))return t}function $d(t,n){if(t==="change")return n}var tp=!1;if(Hi){var iu;if(Hi){var au="oninput"in document;if(!au){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),au=typeof ep.oninput=="function"}iu=au}else iu=!1;tp=iu&&(!document.documentMode||9<document.documentMode)}function np(){Vr&&(Vr.detachEvent("onpropertychange",ip),Xr=Vr=null)}function ip(t){if(t.propertyName==="value"&&Ko(Xr)){var n=[];Jd(n,Xr,t,jc(t)),Hd(k0,n)}}function W0(t,n,a){t==="focusin"?(np(),Vr=n,Xr=a,Vr.attachEvent("onpropertychange",ip)):t==="focusout"&&np()}function q0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ko(Xr)}function Y0(t,n){if(t==="click")return Ko(n)}function j0(t,n){if(t==="input"||t==="change")return Ko(n)}function Z0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:Z0;function kr(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!De.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,n){var a=ap(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ap(a)}}function rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function op(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_i(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=_i(t.document)}return n}function su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var K0=Hi&&"documentMode"in document&&11>=document.documentMode,Ls=null,ru=null,Wr=null,ou=!1;function lp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Ls==null||Ls!==_i(r)||(r=Ls,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&kr(Wr,r)||(Wr=r,r=Il(ru,"onSelect"),0<r.length&&(n=new jo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ls)))}function Qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ns={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},lu={},cp={};Hi&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Ja(t){if(lu[t])return lu[t];if(!Ns[t])return t;var n=Ns[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in cp)return lu[t]=n[a];return t}var up=Ja("animationend"),fp=Ja("animationiteration"),hp=Ja("animationstart"),Q0=Ja("transitionrun"),J0=Ja("transitionstart"),$0=Ja("transitioncancel"),dp=Ja("transitionend"),pp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function gi(t,n){pp.set(t,n),Nt(n,[t])}var Qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Os=0,uu=0;function Jo(){for(var t=Os,n=uu=Os=0;n<t;){var a=ni[n];ni[n++]=null;var r=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&mp(a,c,f)}}function $o(t,n,a,r){ni[Os++]=t,ni[Os++]=n,ni[Os++]=a,ni[Os++]=r,uu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function fu(t,n,a,r){return $o(t,n,a,r),tl(t)}function $a(t,n){return $o(t,null,null,n),tl(t)}function mp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-te(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function tl(t){if(50<po)throw po=0,yf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ps={};function tS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,r){return new tS(t,n,a,r)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function _p(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function el(t,n,a,r,c,f){var _=0;if(r=t,typeof t=="function")hu(t)&&(_=1);else if(typeof t=="string")_=sx(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Yn(31,a,n,c),t.elementType=w,t.lanes=f,t;case R:return ts(a.children,c,f,n);case y:_=8,c|=24;break;case g:return t=Yn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case j:return t=Yn(13,a,n,c),t.elementType=j,t.lanes=f,t;case G:return t=Yn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:_=10;break t;case B:_=9;break t;case D:_=11;break t;case O:_=14;break t;case q:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Yn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ts(t,n,a,r){return t=Yn(7,t,r,n),t.lanes=a,t}function du(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function gp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function pu(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var vp=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=vp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xt(n)},vp.set(t,n),n)}return{value:t,source:n,stack:Xt(n)}}var zs=[],Bs=0,nl=null,qr=0,ai=[],si=0,da=null,Ai=1,Ri="";function Vi(t,n){zs[Bs++]=qr,zs[Bs++]=nl,nl=t,qr=n}function Sp(t,n,a){ai[si++]=Ai,ai[si++]=Ri,ai[si++]=da,da=t;var r=Ai;t=Ri;var c=32-te(r)-1;r&=~(1<<c),a+=1;var f=32-te(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Ai=1<<32-te(n)+c|a<<c|r,Ri=f+t}else Ai=1<<f|a<<c|r,Ri=t}function mu(t){t.return!==null&&(Vi(t,1),Sp(t,1,0))}function _u(t){for(;t===nl;)nl=zs[--Bs],zs[Bs]=null,qr=zs[--Bs],zs[Bs]=null;for(;t===da;)da=ai[--si],ai[si]=null,Ri=ai[--si],ai[si]=null,Ai=ai[--si],ai[si]=null}function xp(t,n){ai[si++]=Ai,ai[si++]=Ri,ai[si++]=da,Ai=n.id,Ri=n.overflow,da=t}var yn=null,ke=null,ye=!1,pa=null,ri=!1,gu=Error(s(519));function ma(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yr(ii(n,t)),gu}function yp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ze]=t,n[Sn]=r,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)pe(_o[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Un(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Cs(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||I_(n.textContent,a)?(r.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),r.onScroll!=null&&pe("scroll",n),r.onScrollEnd!=null&&pe("scrollend",n),r.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||ma(t,!0)}function Mp(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:yn=yn.return}}function Is(t){if(t!==yn)return!1;if(!ye)return Mp(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||zf(t.type,t.memoizedProps)),a=!a),a&&ke&&ma(t),Mp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=Y_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=Y_(t)}else n===27?(n=ke,wa(t.type)?(t=Gf,Gf=null,ke=t):ke=n):ke=yn?li(t.stateNode.nextSibling):null;return!0}function es(){ke=yn=null,ye=!1}function vu(){var t=pa;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),pa=null),t}function Yr(t){pa===null?pa=[t]:pa.push(t)}var Su=N(null),ns=null,Xi=null;function _a(t,n,a){St(Su,n._currentValue),n._currentValue=a}function ki(t){t._currentValue=Su.current,nt(Su)}function xu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function yu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),xu(f.return,a,t),r||(_=null);break t}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),xu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Fs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=c.type;qn(c.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(c===vt.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(yo):t=[yo])}c=c.return}t!==null&&yu(n,t,a,r),n.flags|=262144}function il(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function is(t){ns=t,Xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return Ep(ns,t)}function al(t,n){return ns===null&&is(t),Ep(t,n)}function Ep(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(t===null)throw Error(s(308));Xi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Xi=Xi.next=n;return a}var eS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},nS=o.unstable_scheduleCallback,iS=o.unstable_NormalPriority,nn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new eS,data:new Map,refCount:0}}function jr(t){t.refCount--,t.refCount===0&&nS(iS,function(){t.controller.abort()})}var Zr=null,Eu=0,Hs=0,Gs=null;function aS(t,n){if(Zr===null){var a=Zr=[];Eu=0,Hs=Rf(),Gs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Eu++,n.then(Tp,Tp),n}function Tp(){if(--Eu===0&&Zr!==null){Gs!==null&&(Gs.status="fulfilled");var t=Zr;Zr=null,Hs=0,Gs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function sS(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var bp=P.S;P.S=function(t,n){l_=ut(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&aS(t,n),bp!==null&&bp(t,n)};var as=N(null);function Tu(){var t=as.current;return t!==null?t:Ge.pooledCache}function sl(t,n){n===null?St(as,as.current):St(as,n.pool)}function Ap(){var t=Tu();return t===null?null:{parent:nn._currentValue,pool:t}}var Vs=Error(s(460)),bu=Error(s(474)),rl=Error(s(542)),ol={then:function(){}};function Rp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dp(t),t;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dp(t),t}throw rs=n,Vs}}function ss(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rs=a,Vs):a}}var rs=null;function wp(){if(rs===null)throw Error(s(459));var t=rs;return rs=null,t}function Dp(t){if(t===Vs||t===rl)throw Error(s(483))}var Xs=null,Kr=0;function ll(t){var n=Kr;return Kr+=1,Xs===null&&(Xs=[]),Cp(Xs,t,n)}function Qr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function cl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Up(t){function n(W,F){if(t){var J=W.deletions;J===null?(W.deletions=[F],W.flags|=16):J.push(F)}}function a(W,F){if(!t)return null;for(;F!==null;)n(W,F),F=F.sibling;return null}function r(W){for(var F=new Map;W!==null;)W.key!==null?F.set(W.key,W):F.set(W.index,W),W=W.sibling;return F}function c(W,F){return W=Gi(W,F),W.index=0,W.sibling=null,W}function f(W,F,J){return W.index=J,t?(J=W.alternate,J!==null?(J=J.index,J<F?(W.flags|=67108866,F):J):(W.flags|=67108866,F)):(W.flags|=1048576,F)}function _(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,F,J,ht){return F===null||F.tag!==6?(F=du(J,W.mode,ht),F.return=W,F):(F=c(F,J),F.return=W,F)}function z(W,F,J,ht){var Wt=J.type;return Wt===R?ct(W,F,J.props.children,ht,J.key):F!==null&&(F.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===q&&ss(Wt)===F.type)?(F=c(F,J.props),Qr(F,J),F.return=W,F):(F=el(J.type,J.key,J.props,null,W.mode,ht),Qr(F,J),F.return=W,F)}function $(W,F,J,ht){return F===null||F.tag!==4||F.stateNode.containerInfo!==J.containerInfo||F.stateNode.implementation!==J.implementation?(F=pu(J,W.mode,ht),F.return=W,F):(F=c(F,J.children||[]),F.return=W,F)}function ct(W,F,J,ht,Wt){return F===null||F.tag!==7?(F=ts(J,W.mode,ht,Wt),F.return=W,F):(F=c(F,J),F.return=W,F)}function mt(W,F,J){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=du(""+F,W.mode,J),F.return=W,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case M:return J=el(F.type,F.key,F.props,null,W.mode,J),Qr(J,F),J.return=W,J;case T:return F=pu(F,W.mode,J),F.return=W,F;case q:return F=ss(F),mt(W,F,J)}if(_t(F)||lt(F))return F=ts(F,W.mode,J,null),F.return=W,F;if(typeof F.then=="function")return mt(W,ll(F),J);if(F.$$typeof===L)return mt(W,al(W,F),J);cl(W,F)}return null}function tt(W,F,J,ht){var Wt=F!==null?F.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Wt!==null?null:E(W,F,""+J,ht);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Wt?z(W,F,J,ht):null;case T:return J.key===Wt?$(W,F,J,ht):null;case q:return J=ss(J),tt(W,F,J,ht)}if(_t(J)||lt(J))return Wt!==null?null:ct(W,F,J,ht,null);if(typeof J.then=="function")return tt(W,F,ll(J),ht);if(J.$$typeof===L)return tt(W,F,al(W,J),ht);cl(W,J)}return null}function rt(W,F,J,ht,Wt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(J)||null,E(F,W,""+ht,Wt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case M:return W=W.get(ht.key===null?J:ht.key)||null,z(F,W,ht,Wt);case T:return W=W.get(ht.key===null?J:ht.key)||null,$(F,W,ht,Wt);case q:return ht=ss(ht),rt(W,F,J,ht,Wt)}if(_t(ht)||lt(ht))return W=W.get(J)||null,ct(F,W,ht,Wt,null);if(typeof ht.then=="function")return rt(W,F,J,ll(ht),Wt);if(ht.$$typeof===L)return rt(W,F,J,al(F,ht),Wt);cl(F,ht)}return null}function It(W,F,J,ht){for(var Wt=null,Ae=null,Ft=F,oe=F=0,ve=null;Ft!==null&&oe<J.length;oe++){Ft.index>oe?(ve=Ft,Ft=null):ve=Ft.sibling;var Re=tt(W,Ft,J[oe],ht);if(Re===null){Ft===null&&(Ft=ve);break}t&&Ft&&Re.alternate===null&&n(W,Ft),F=f(Re,F,oe),Ae===null?Wt=Re:Ae.sibling=Re,Ae=Re,Ft=ve}if(oe===J.length)return a(W,Ft),ye&&Vi(W,oe),Wt;if(Ft===null){for(;oe<J.length;oe++)Ft=mt(W,J[oe],ht),Ft!==null&&(F=f(Ft,F,oe),Ae===null?Wt=Ft:Ae.sibling=Ft,Ae=Ft);return ye&&Vi(W,oe),Wt}for(Ft=r(Ft);oe<J.length;oe++)ve=rt(Ft,W,oe,J[oe],ht),ve!==null&&(t&&ve.alternate!==null&&Ft.delete(ve.key===null?oe:ve.key),F=f(ve,F,oe),Ae===null?Wt=ve:Ae.sibling=ve,Ae=ve);return t&&Ft.forEach(function(Oa){return n(W,Oa)}),ye&&Vi(W,oe),Wt}function Qt(W,F,J,ht){if(J==null)throw Error(s(151));for(var Wt=null,Ae=null,Ft=F,oe=F=0,ve=null,Re=J.next();Ft!==null&&!Re.done;oe++,Re=J.next()){Ft.index>oe?(ve=Ft,Ft=null):ve=Ft.sibling;var Oa=tt(W,Ft,Re.value,ht);if(Oa===null){Ft===null&&(Ft=ve);break}t&&Ft&&Oa.alternate===null&&n(W,Ft),F=f(Oa,F,oe),Ae===null?Wt=Oa:Ae.sibling=Oa,Ae=Oa,Ft=ve}if(Re.done)return a(W,Ft),ye&&Vi(W,oe),Wt;if(Ft===null){for(;!Re.done;oe++,Re=J.next())Re=mt(W,Re.value,ht),Re!==null&&(F=f(Re,F,oe),Ae===null?Wt=Re:Ae.sibling=Re,Ae=Re);return ye&&Vi(W,oe),Wt}for(Ft=r(Ft);!Re.done;oe++,Re=J.next())Re=rt(Ft,W,oe,Re.value,ht),Re!==null&&(t&&Re.alternate!==null&&Ft.delete(Re.key===null?oe:Re.key),F=f(Re,F,oe),Ae===null?Wt=Re:Ae.sibling=Re,Ae=Re);return t&&Ft.forEach(function(_x){return n(W,_x)}),ye&&Vi(W,oe),Wt}function Be(W,F,J,ht){if(typeof J=="object"&&J!==null&&J.type===R&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Wt=J.key;F!==null;){if(F.key===Wt){if(Wt=J.type,Wt===R){if(F.tag===7){a(W,F.sibling),ht=c(F,J.props.children),ht.return=W,W=ht;break t}}else if(F.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===q&&ss(Wt)===F.type){a(W,F.sibling),ht=c(F,J.props),Qr(ht,J),ht.return=W,W=ht;break t}a(W,F);break}else n(W,F);F=F.sibling}J.type===R?(ht=ts(J.props.children,W.mode,ht,J.key),ht.return=W,W=ht):(ht=el(J.type,J.key,J.props,null,W.mode,ht),Qr(ht,J),ht.return=W,W=ht)}return _(W);case T:t:{for(Wt=J.key;F!==null;){if(F.key===Wt)if(F.tag===4&&F.stateNode.containerInfo===J.containerInfo&&F.stateNode.implementation===J.implementation){a(W,F.sibling),ht=c(F,J.children||[]),ht.return=W,W=ht;break t}else{a(W,F);break}else n(W,F);F=F.sibling}ht=pu(J,W.mode,ht),ht.return=W,W=ht}return _(W);case q:return J=ss(J),Be(W,F,J,ht)}if(_t(J))return It(W,F,J,ht);if(lt(J)){if(Wt=lt(J),typeof Wt!="function")throw Error(s(150));return J=Wt.call(J),Qt(W,F,J,ht)}if(typeof J.then=="function")return Be(W,F,ll(J),ht);if(J.$$typeof===L)return Be(W,F,al(W,J),ht);cl(W,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,F!==null&&F.tag===6?(a(W,F.sibling),ht=c(F,J),ht.return=W,W=ht):(a(W,F),ht=du(J,W.mode,ht),ht.return=W,W=ht),_(W)):a(W,F)}return function(W,F,J,ht){try{Kr=0;var Wt=Be(W,F,J,ht);return Xs=null,Wt}catch(Ft){if(Ft===Vs||Ft===rl)throw Ft;var Ae=Yn(29,Ft,null,W.mode);return Ae.lanes=ht,Ae.return=W,Ae}finally{}}}var os=Up(!0),Lp=Up(!1),ga=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(we&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=tl(t),mp(t,null,a),n}return $o(t,r,n,a),tl(t)}function Jr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Nr(t,a)}}function Cu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var wu=!1;function $r(){if(wu){var t=Gs;if(t!==null)throw t}}function to(t,n,a,r){wu=!1;var c=t.updateQueue;ga=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,$=z.next;z.next=null,_===null?f=$:_.next=$,_=z;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,E=ct.lastBaseUpdate,E!==_&&(E===null?ct.firstBaseUpdate=$:E.next=$,ct.lastBaseUpdate=z))}if(f!==null){var mt=c.baseState;_=0,ct=$=z=null,E=f;do{var tt=E.lane&-536870913,rt=tt!==E.lane;if(rt?(ge&tt)===tt:(r&tt)===tt){tt!==0&&tt===Hs&&(wu=!0),ct!==null&&(ct=ct.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var It=t,Qt=E;tt=n;var Be=a;switch(Qt.tag){case 1:if(It=Qt.payload,typeof It=="function"){mt=It.call(Be,mt,tt);break t}mt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Qt.payload,tt=typeof It=="function"?It.call(Be,mt,tt):It,tt==null)break t;mt=v({},mt,tt);break t;case 2:ga=!0}}tt=E.callback,tt!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[tt]:rt.push(tt))}else rt={lane:tt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ct===null?($=ct=rt,z=mt):ct=ct.next=rt,_|=tt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ct===null&&(z=mt),c.baseState=z,c.firstBaseUpdate=$,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),Ta|=_,t.lanes=_,t.memoizedState=mt}}function Np(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Op(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Np(a[t],n)}var ks=N(null),ul=N(0);function Pp(t,n){t=$i,St(ul,t),St(ks,n),$i=t|n.baseLanes}function Du(){St(ul,$i),St(ks,ks.current)}function Uu(){$i=ul.current,nt(ks),nt(ul)}var jn=N(null),oi=null;function xa(t){var n=t.alternate;St(tn,tn.current&1),St(jn,t),oi===null&&(n===null||ks.current!==null||n.memoizedState!==null)&&(oi=t)}function Lu(t){St(tn,tn.current),St(jn,t),oi===null&&(oi=t)}function zp(t){t.tag===22?(St(tn,tn.current),St(jn,t),oi===null&&(oi=t)):ya()}function ya(){St(tn,tn.current),St(jn,jn.current)}function Zn(t){nt(jn),oi===t&&(oi=null),nt(tn)}var tn=N(0);function fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,re=null,Pe=null,an=null,hl=!1,Ws=!1,ls=!1,dl=0,eo=0,qs=null,rS=0;function Qe(){throw Error(s(321))}function Nu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Ou(t,n,a,r,c,f){return Wi=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Sm:Zu,ls=!1,f=a(r,c),ls=!1,Ws&&(f=Ip(n,a,r,c)),Bp(t),f}function Bp(t){P.H=ao;var n=Pe!==null&&Pe.next!==null;if(Wi=0,an=Pe=re=null,hl=!1,eo=0,qs=null,n)throw Error(s(300));t===null||sn||(t=t.dependencies,t!==null&&il(t)&&(sn=!0))}function Ip(t,n,a,r){re=t;var c=0;do{if(Ws&&(qs=null),eo=0,Ws=!1,25<=c)throw Error(s(301));if(c+=1,an=Pe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=xm,f=n(a,r)}while(Ws);return f}function oS(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?no(n):n,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(re.flags|=1024),n}function Pu(){var t=dl!==0;return dl=0,t}function zu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Bu(t){if(hl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}hl=!1}Wi=0,an=Pe=re=null,Ws=!1,eo=dl=0,qs=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?re.memoizedState=an=t:an=an.next=t,an}function en(){if(Pe===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=an===null?re.memoizedState:an.next;if(n!==null)an=n,Pe=t;else{if(t===null)throw re.alternate===null?Error(s(467)):Error(s(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},an===null?re.memoizedState=an=t:an=an.next=t}return an}function pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(t){var n=eo;return eo+=1,qs===null&&(qs=[]),t=Cp(qs,t,n),n=re,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Sm:Zu),t}function ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return no(t);if(t.$$typeof===L)return Mn(t)}throw Error(s(438,String(t)))}function Iu(t){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=pl(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=C;return n.index++,a}function qi(t,n){return typeof n=="function"?n(t):n}function _l(t){var n=en();return Fu(n,Pe,t)}function Fu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=_=null,z=null,$=n,ct=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(ge&mt)===mt:(Wi&mt)===mt){var tt=$.revertLane;if(tt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===Hs&&(ct=!0);else if((Wi&tt)===tt){$=$.next,tt===Hs&&(ct=!0);continue}else mt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(E=z=mt,_=f):z=z.next=mt,re.lanes|=tt,Ta|=tt;mt=$.action,ls&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else tt={lane:mt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(E=z=tt,_=f):z=z.next=tt,re.lanes|=mt,Ta|=mt;$=$.next}while($!==null&&$!==n);if(z===null?_=f:z.next=E,!qn(f,t.memoizedState)&&(sn=!0,ct&&(a=Gs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=z,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Hu(t){var n=en(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);qn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Fp(t,n,a){var r=re,c=en(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!qn((Pe||c).memoizedState,a);if(_&&(c.memoizedState=a,sn=!0),c=c.queue,Xu(Vp.bind(null,r,c,t),[t]),c.getSnapshot!==n||_||an!==null&&an.memoizedState.tag&1){if(r.flags|=2048,Ys(9,{destroy:void 0},Gp.bind(null,r,c,a,n),null),Ge===null)throw Error(s(349));f||(Wi&127)!==0||Hp(r,n,a)}return a}function Hp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=pl(),re.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Gp(t,n,a,r){n.value=a,n.getSnapshot=r,Xp(n)&&kp(t)}function Vp(t,n,a){return a(function(){Xp(n)&&kp(t)})}function Xp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function kp(t){var n=$a(t,2);n!==null&&Gn(n,t,2)}function Gu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ls){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},n}function Wp(t,n,a,r){return t.baseState=a,Fu(t,Pe,typeof r=="function"?r:qi)}function lS(t,n,a,r,c){if(Sl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function qp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var E=a(c,r),z=P.S;z!==null&&z(_,E),Yp(t,n,E)}catch($){Vu(t,n,$)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(c,r),Yp(t,n,f)}catch($){Vu(t,n,$)}}function Yp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){jp(t,n,r)},function(r){return Vu(t,n,r)}):jp(t,n,a)}function jp(t,n,a){n.status="fulfilled",n.value=a,Zp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,qp(t,a)))}function Vu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Zp(n),n=n.next;while(n!==r)}t.action=null}function Zp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Kp(t,n){return n}function Qp(t,n){if(ye){var a=Ge.formState;if(a!==null){t:{var r=re;if(ye){if(ke){e:{for(var c=ke,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ke=li(c.nextSibling),r=c.data==="F!";break t}}ma(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:n},a.queue=r,a=_m.bind(null,re,r),r.dispatch=a,r=Gu(!1),f=ju.bind(null,re,!1,r.queue),r=Ln(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=lS.bind(null,re,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Jp(t){var n=en();return $p(n,Pe,t)}function $p(t,n,a){if(n=Fu(t,n,Kp)[0],t=_l(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=no(n)}catch(_){throw _===Vs?rl:_}else r=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(re.flags|=2048,Ys(9,{destroy:void 0},cS.bind(null,c,a),null)),[r,f,t]}function cS(t,n){t.action=n}function tm(t){var n=en(),a=Pe;if(a!==null)return $p(n,a,t);en(),n=n.memoizedState,a=en();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Ys(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=re.updateQueue,n===null&&(n=pl(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function em(){return en().memoizedState}function gl(t,n,a,r){var c=Ln();re.flags|=t,c.memoizedState=Ys(1|n,{destroy:void 0},a,r===void 0?null:r)}function vl(t,n,a,r){var c=en();r=r===void 0?null:r;var f=c.memoizedState.inst;Pe!==null&&r!==null&&Nu(r,Pe.memoizedState.deps)?c.memoizedState=Ys(n,f,a,r):(re.flags|=t,c.memoizedState=Ys(1|n,f,a,r))}function nm(t,n){gl(8390656,8,t,n)}function Xu(t,n){vl(2048,8,t,n)}function uS(t){re.flags|=4;var n=re.updateQueue;if(n===null)n=pl(),re.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function im(t){var n=en().memoizedState;return uS({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function am(t,n){return vl(4,2,t,n)}function sm(t,n){return vl(4,4,t,n)}function rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function om(t,n,a){a=a!=null?a.concat([t]):null,vl(4,4,rm.bind(null,n,t),a)}function ku(){}function lm(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Nu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function cm(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Nu(n,r[1]))return r[0];if(r=t(),ls){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function Wu(t,n,a){return a===void 0||(Wi&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=u_(),re.lanes|=t,Ta|=t,a)}function um(t,n,a,r){return qn(a,n)?a:ks.current!==null?(t=Wu(t,a,r),qn(t,n)||(sn=!0),t):(Wi&42)===0||(Wi&1073741824)!==0&&(ge&261930)===0?(sn=!0,t.memoizedState=a):(t=u_(),re.lanes|=t,Ta|=t,n)}function fm(t,n,a,r,c){var f=K.p;K.p=f!==0&&8>f?f:8;var _=P.T,E={};P.T=E,ju(t,!1,n,a);try{var z=c(),$=P.S;if($!==null&&$(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ct=sS(z,r);io(t,n,ct,Jn(t))}else io(t,n,r,Jn(t))}catch(mt){io(t,n,{then:function(){},status:"rejected",reason:mt},Jn())}finally{K.p=f,_!==null&&E.types!==null&&(_.types=E.types),P.T=_}}function fS(){}function qu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=hm(t).queue;fm(t,c,n,Z,a===null?fS:function(){return dm(t),a(r)})}function hm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function dm(t){var n=hm(t);n.next===null&&(n=t.alternate.memoizedState),io(t,n.next.queue,{},Jn())}function Yu(){return Mn(yo)}function pm(){return en().memoizedState}function mm(){return en().memoizedState}function hS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=va(a);var r=Sa(n,t,a);r!==null&&(Gn(r,n,a),Jr(r,n,a)),n={cache:Mu()},t.payload=n;return}n=n.return}}function dS(t,n,a){var r=Jn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sl(t)?gm(n,a):(a=fu(t,n,a,r),a!==null&&(Gn(a,t,r),vm(a,n,r)))}function _m(t,n,a){var r=Jn();io(t,n,a,r)}function io(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sl(t))gm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(c.hasEagerState=!0,c.eagerState=E,qn(E,_))return $o(t,n,c,0),Ge===null&&Jo(),!1}catch{}finally{}if(a=fu(t,n,c,r),a!==null)return Gn(a,t,r),vm(a,n,r),!0}return!1}function ju(t,n,a,r){if(r={lane:2,revertLane:Rf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Sl(t)){if(n)throw Error(s(479))}else n=fu(t,a,r,2),n!==null&&Gn(n,t,2)}function Sl(t){var n=t.alternate;return t===re||n!==null&&n===re}function gm(t,n){Ws=hl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function vm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Nr(t,a)}}var ao={readContext:Mn,use:ml,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};ao.useEffectEvent=Qe;var Sm={readContext:Mn,use:ml,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:nm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var r=t();if(ls){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Ln();if(a!==void 0){var c=a(n);if(ls){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=dS.bind(null,re,t),[r.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Gu(t);var n=t.queue,a=_m.bind(null,re,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(t,n){var a=Ln();return Wu(a,t,n)},useTransition:function(){var t=Gu(!1);return t=fm.bind(null,re,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=re,c=Ln();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ge===null)throw Error(s(349));(ge&127)!==0||Hp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,nm(Vp.bind(null,r,f,t),[t]),r.flags|=2048,Ys(9,{destroy:void 0},Gp.bind(null,r,f,a,n),null),a},useId:function(){var t=Ln(),n=Ge.identifierPrefix;if(ye){var a=Ri,r=Ai;a=(r&~(1<<32-te(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Yu,useFormState:Qp,useActionState:Qp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,re,!0,a),a.dispatch=n,[t,n]},useMemoCache:Iu,useCacheRefresh:function(){return Ln().memoizedState=hS.bind(null,re)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:Mn,use:ml,useCallback:lm,useContext:Mn,useEffect:Xu,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:_l,useRef:em,useState:function(){return _l(qi)},useDebugValue:ku,useDeferredValue:function(t,n){var a=en();return um(a,Pe.memoizedState,t,n)},useTransition:function(){var t=_l(qi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:Yu,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,n){var a=en();return Wp(a,Pe,t,n)},useMemoCache:Iu,useCacheRefresh:mm};Zu.useEffectEvent=im;var xm={readContext:Mn,use:ml,useCallback:lm,useContext:Mn,useEffect:Xu,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:Hu,useRef:em,useState:function(){return Hu(qi)},useDebugValue:ku,useDeferredValue:function(t,n){var a=en();return Pe===null?Wu(a,t,n):um(a,Pe.memoizedState,t,n)},useTransition:function(){var t=Hu(qi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:Yu,useFormState:tm,useActionState:tm,useOptimistic:function(t,n){var a=en();return Pe!==null?Wp(a,Pe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:mm};xm.useEffectEvent=im;function Ku(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Qu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Jn(),c=va(r);c.payload=n,a!=null&&(c.callback=a),n=Sa(t,c,r),n!==null&&(Gn(n,t,r),Jr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Jn(),c=va(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Sa(t,c,r),n!==null&&(Gn(n,t,r),Jr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),r=va(a);r.tag=2,n!=null&&(r.callback=n),n=Sa(t,r,a),n!==null&&(Gn(n,t,a),Jr(n,t,a))}};function ym(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!kr(a,r)||!kr(c,f):!0}function Mm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Qu.enqueueReplaceState(n,n.state,null)}function cs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Em(t){Qo(t)}function Tm(t){console.error(t)}function bm(t){Qo(t)}function xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Am(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ju(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(t,n)},a}function Rm(t){return t=va(t),t.tag=3,t}function Cm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Am(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Am(n,a,r),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function pS(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Ll():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Tf(t,r,c)),!1;case 22:return a.flags|=65536,r===ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Tf(t,r,c)),!1}throw Error(s(435,a.tag))}return Tf(t,r,c),Ll(),!1}if(ye)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==gu&&(t=Error(s(422),{cause:r}),Yr(ii(t,a)))):(r!==gu&&(n=Error(s(423),{cause:r}),Yr(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ii(r,a),c=Ju(t.stateNode,r,c),Cu(t,c),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=ii(f,a),ho===null?ho=[f]:ho.push(f),Je!==4&&(Je=2),n===null)return!0;r=ii(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Ju(a.stateNode,r,t),Cu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Rm(c),Cm(c,t,a,r),Cu(a,c),!1}a=a.return}while(a!==null);return!1}var $u=Error(s(461)),sn=!1;function En(t,n,a,r){n.child=t===null?Lp(n,null,a,r):os(n,t.child,a,r)}function wm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return is(n),r=Ou(t,n,a,_,f,c),E=Pu(),t!==null&&!sn?(zu(t,n,c),Yi(t,n,c)):(ye&&E&&mu(n),n.flags|=1,En(t,n,r,c),n.child)}function Dm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Um(t,n,f,r,c)):(t=el(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!lf(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:kr,a(_,r)&&t.ref===n.ref)return Yi(t,n,c)}return n.flags|=1,t=Gi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Um(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(kr(f,r)&&t.ref===n.ref)if(sn=!1,n.pendingProps=r=f,lf(t,c))(t.flags&131072)!==0&&(sn=!0);else return n.lanes=t.lanes,Yi(t,n,c)}return tf(t,n,a,r,c)}function Lm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Nm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&sl(n,f!==null?f.cachePool:null),f!==null?Pp(n,f):Du(),zp(n);else return r=n.lanes=536870912,Nm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(sl(n,f.cachePool),Pp(n,f),ya(),n.memoizedState=null):(t!==null&&sl(n,null),Du(),ya());return En(t,n,c,a),n.child}function so(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Nm(t,n,a,r,c){var f=Tu();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&sl(n,null),Du(),zp(n),t!==null&&Fs(t,n,r,!0),n.childLanes=c,null}function yl(t,n){return n=El({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Om(t,n,a){return os(n,t.child,null,a),t=yl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function mS(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(r.mode==="hidden")return t=yl(n,r),n.lanes=536870912,so(null,t);if(Lu(n),(t=ke)?(t=q_(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:da!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=gp(t),a.return=n,n.child=a,yn=n,ke=null)):t=null,t===null)throw ma(n);return n.lanes=536870912,null}return yl(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Lu(n),c)if(n.flags&256)n.flags&=-257,n=Om(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(sn||Fs(t,n,a,!1),c=(a&t.childLanes)!==0,sn||c){if(r=Ge,r!==null&&(_=bi(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,$a(t,_),Gn(r,t,_),$u;Ll(),n=Om(t,n,a)}else t=f.treeContext,ke=li(_.nextSibling),yn=n,ye=!0,pa=null,ri=!1,t!==null&&xp(n,t),n=yl(n,r),n.flags|=4096;return n}return t=Gi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function tf(t,n,a,r,c){return is(n),a=Ou(t,n,a,r,void 0,c),r=Pu(),t!==null&&!sn?(zu(t,n,c),Yi(t,n,c)):(ye&&r&&mu(n),n.flags|=1,En(t,n,a,c),n.child)}function Pm(t,n,a,r,c,f){return is(n),n.updateQueue=null,a=Ip(n,r,a,c),Bp(t),r=Pu(),t!==null&&!sn?(zu(t,n,f),Yi(t,n,f)):(ye&&r&&mu(n),n.flags|=1,En(t,n,a,f),n.child)}function zm(t,n,a,r,c){if(is(n),n.stateNode===null){var f=Ps,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Au(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):Ps,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Ku(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Qu.enqueueReplaceState(f,f.state,null),to(n,r,f,c),$r(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=cs(a,E);f.props=z;var $=f.context,ct=a.contextType;_=Ps,typeof ct=="object"&&ct!==null&&(_=Mn(ct));var mt=a.getDerivedStateFromProps;ct=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==_)&&Mm(n,f,r,_),ga=!1;var tt=n.memoizedState;f.state=tt,to(n,r,f,c),$r(),$=n.memoizedState,E||tt!==$||ga?(typeof mt=="function"&&(Ku(n,a,mt,r),$=n.memoizedState),(z=ga||ym(n,a,z,r,tt,$,_))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=_,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Ru(t,n),_=n.memoizedProps,ct=cs(a,_),f.props=ct,mt=n.pendingProps,tt=f.context,$=a.contextType,z=Ps,typeof $=="object"&&$!==null&&(z=Mn($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==mt||tt!==z)&&Mm(n,f,r,z),ga=!1,tt=n.memoizedState,f.state=tt,to(n,r,f,c),$r();var rt=n.memoizedState;_!==mt||tt!==rt||ga||t!==null&&t.dependencies!==null&&il(t.dependencies)?(typeof E=="function"&&(Ku(n,a,E,r),rt=n.memoizedState),(ct=ga||ym(n,a,ct,r,tt,rt,z)||t!==null&&t.dependencies!==null&&il(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=z,r=ct):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ml(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=os(n,t.child,null,c),n.child=os(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Yi(t,n,c),t}function Bm(t,n,a,r){return es(),n.flags|=256,En(t,n,a,r),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(t){return{baseLanes:t,cachePool:Ap()}}function af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function Im(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(c?xa(n):ya(),(t=ke)?(t=q_(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:da!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=gp(t),a.return=n,n.child=a,yn=n,ke=null)):t=null,t===null)throw ma(n);return Hf(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(ya(),c=n.mode,E=El({mode:"hidden",children:E},c),r=ts(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=nf(a),r.childLanes=af(t,_,a),n.memoizedState=ef,so(null,r)):(xa(n),sf(n,E))}var z=t.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=rf(t,n,a)):n.memoizedState!==null?(ya(),n.child=t.child,n.flags|=128,n=null):(ya(),E=r.fallback,c=n.mode,r=El({mode:"visible",children:r.children},c),E=ts(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,os(n,t.child,null,a),r=n.child,r.memoizedState=nf(a),r.childLanes=af(t,_,a),n.memoizedState=ef,n=so(null,r));else if(xa(n),Hf(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var $=_.dgst;_=$,r=Error(s(419)),r.stack="",r.digest=_,Yr({value:r,source:null,stack:null}),n=rf(t,n,a)}else if(sn||Fs(t,n,a,!1),_=(a&t.childLanes)!==0,sn||_){if(_=Ge,_!==null&&(r=bi(_,a),r!==0&&r!==z.retryLane))throw z.retryLane=r,$a(t,r),Gn(_,t,r),$u;Ff(E)||Ll(),n=rf(t,n,a)}else Ff(E)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,ke=li(E.nextSibling),yn=n,ye=!0,pa=null,ri=!1,t!==null&&xp(n,t),n=sf(n,r.children),n.flags|=4096);return n}return c?(ya(),E=r.fallback,c=n.mode,z=t.child,$=z.sibling,r=Gi(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,$!==null?E=Gi($,E):(E=ts(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,so(null,r),r=n.child,E=t.child.memoizedState,E===null?E=nf(a):(c=E.cachePool,c!==null?(z=nn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=Ap(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=af(t,_,a),n.memoizedState=ef,so(t.child,r)):(xa(n),a=t.child,t=a.sibling,a=Gi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function sf(t,n){return n=El({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function El(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function rf(t,n,a){return os(n,t.child,null,a),t=sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Fm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),xu(t.return,n,a)}function of(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Hm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=tn.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,St(tn,_),En(t,n,r,a),r=ye?qr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,a,n);else if(t.tag===19)Fm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&fl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&fl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}of(n,!0,a,null,f,r);break;case"together":of(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Yi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Gi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Gi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&il(t)))}function _S(t,n,a){switch(n.tag){case 3:zt(n,n.stateNode.containerInfo),_a(n,nn,t.memoizedState.cache),es();break;case 27:case 5:Zt(n);break;case 4:zt(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Im(t,n,a):(xa(n),t=Yi(t,n,a),t!==null?t.sibling:null);xa(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Fs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Hm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(tn,tn.current),r)break;return null;case 22:return n.lanes=0,Lm(t,n,a,n.pendingProps);case 24:_a(n,nn,t.memoizedState.cache)}return Yi(t,n,a)}function Gm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)sn=!0;else{if(!lf(t,a)&&(n.flags&128)===0)return sn=!1,_S(t,n,a);sn=(t.flags&131072)!==0}else sn=!1,ye&&(n.flags&1048576)!==0&&Sp(n,qr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ss(n.elementType),n.type=t,typeof t=="function")hu(t)?(r=cs(t,r),n.tag=1,n=zm(null,n,t,r,a)):(n.tag=0,n=tf(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=wm(null,n,t,r,a);break t}else if(c===O){n.tag=14,n=Dm(null,n,t,r,a);break t}}throw n=pt(t)||t,Error(s(306,n,""))}}return n;case 0:return tf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=cs(r,n.pendingProps),zm(t,n,r,c,a);case 3:t:{if(zt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Ru(t,n),to(n,r,null,a);var _=n.memoizedState;if(r=_.cache,_a(n,nn,r),r!==f.cache&&yu(n,[nn],a,!0),$r(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Bm(t,n,r,a);break t}else if(r!==c){c=ii(Error(s(424)),n),Yr(c),n=Bm(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ke=li(t.firstChild),yn=n,ye=!0,pa=null,ri=!0,a=Lp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(es(),r===c){n=Yi(t,n,a);break t}En(t,n,r,a)}n=n.child}return n;case 26:return Ml(t,n),t===null?(a=J_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,r=Fl(Mt.current).createElement(a),r[Ze]=n,r[Sn]=t,Tn(r,a,t),V(r),n.stateNode=r):n.memoizedState=J_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&ye&&(r=n.stateNode=Z_(n.type,n.pendingProps,Mt.current),yn=n,ri=!0,c=ke,wa(n.type)?(Gf=c,ke=li(r.firstChild)):ke=c),En(t,n,n.pendingProps.children,a),Ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((c=r=ke)&&(r=qS(r,n.type,n.pendingProps,ri),r!==null?(n.stateNode=r,yn=n,ke=li(r.firstChild),ri=!1,c=!0):c=!1),c||ma(n)),Zt(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,zf(c,f)?r=null:_!==null&&zf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Ou(t,n,oS,null,null,a),yo._currentValue=c),Ml(t,n),En(t,n,r,a),n.child;case 6:return t===null&&ye&&((t=a=ke)&&(a=YS(a,n.pendingProps,ri),a!==null?(n.stateNode=a,yn=n,ke=null,t=!0):t=!1),t||ma(n)),null;case 13:return Im(t,n,a);case 4:return zt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=os(n,null,r,a):En(t,n,r,a),n.child;case 11:return wm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,_a(n,n.type,r.value),En(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,is(n),c=Mn(c),r=r(c),n.flags|=1,En(t,n,r,a),n.child;case 14:return Dm(t,n,n.type,n.pendingProps,a);case 15:return Um(t,n,n.type,n.pendingProps,a);case 19:return Hm(t,n,a);case 31:return mS(t,n,a);case 22:return Lm(t,n,a,n.pendingProps);case 24:return is(n),r=Mn(nn),t===null?(c=Tu(),c===null&&(c=Ge,f=Mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Au(n),_a(n,nn,c)):((t.lanes&a)!==0&&(Ru(t,n),to(n,null,null,a),$r()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),_a(n,nn,r)):(r=f.cache,_a(n,nn,r),r!==c.cache&&yu(n,[nn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ji(t){t.flags|=4}function cf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(p_())t.flags|=8192;else throw rs=ol,bu}else t.flags&=-16777217}function Vm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ig(n))if(p_())t.flags|=8192;else throw rs=ol,bu}function Tl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ln():536870912,t.lanes|=n,Qs|=n)}function ro(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function gS(t,n,a){var r=n.pendingProps;switch(_u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ki(nn),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Is(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),We(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ji(n),f!==null?(We(n),Vm(n,f)):(We(n),cf(n,c,null,r,a))):f?f!==t.memoizedState?(ji(n),We(n),Vm(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ji(n),We(n),cf(n,c,t,r,a)),null;case 27:if(Ve(n),a=Mt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}t=Y.current,Is(n)?yp(n):(t=Z_(c,r,a),n.stateNode=t,ji(n))}return We(n),null;case 5:if(Ve(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(f=Y.current,Is(n))yp(n);else{var _=Fl(Mt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[Ze]=n,f[Sn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Tn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ji(n)}}return We(n),cf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Mt.current,Is(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=yn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Ze]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||I_(t.nodeValue,a)),t||ma(n,!0)}else t=Fl(t).createTextNode(r),t[Ze]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Is(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ze]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Is(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ze]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),We(n),null);case 4:return Yt(),t===null&&Uf(n.stateNode.containerInfo),We(n),null;case 10:return ki(n.type),We(n),null;case 19:if(nt(tn),r=n.memoizedState,r===null)return We(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ro(r,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=fl(t),f!==null){for(n.flags|=128,ro(r,!1),t=f.updateQueue,n.updateQueue=t,Tl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)_p(a,t),a=a.sibling;return St(tn,tn.current&1|2),ye&&Vi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&ut()>wl&&(n.flags|=128,c=!0,ro(r,!1),n.lanes=4194304)}else{if(!c)if(t=fl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Tl(n,t),ro(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!ye)return We(n),null}else 2*ut()-r.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,c=!0,ro(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ut(),t.sibling=null,a=tn.current,St(tn,c?a&1|2:a&1),ye&&Vi(n,r.treeForkCount),t):(We(n),null);case 22:case 23:return Zn(n),Uu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&nt(as),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(nn),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function vS(t,n){switch(_u(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ki(nn),Yt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ve(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(s(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(tn),null;case 4:return Yt(),null;case 10:return ki(n.type),null;case 22:case 23:return Zn(n),Uu(),t!==null&&nt(as),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ki(nn),null;case 25:return null;default:return null}}function Xm(t,n){switch(_u(n),n.tag){case 3:ki(nn),Yt();break;case 26:case 27:case 5:Ve(n);break;case 4:Yt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:nt(tn);break;case 10:ki(n.type);break;case 22:case 23:Zn(n),Uu(),t!==null&&nt(as);break;case 24:ki(nn)}}function oo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(E){Le(n,n.return,E)}}function Ma(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var z=a,$=E;try{$()}catch(ct){Le(c,z,ct)}}}r=r.next}while(r!==f)}}catch(ct){Le(n,n.return,ct)}}function km(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Op(n,a)}catch(r){Le(t,t.return,r)}}}function Wm(t,n,a){a.props=cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Le(t,n,r)}}function lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Le(t,n,c)}}function Ci(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Le(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Le(t,n,c)}else a.current=null}function qm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Le(t,t.return,c)}}function uf(t,n,a){try{var r=t.stateNode;HS(r,t.type,a,n),r[Sn]=n}catch(c){Le(t,t.return,c)}}function Ym(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&wa(t.type)||t.tag===4}function ff(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ym(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi));else if(r!==4&&(r===27&&wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(hf(t,n,a),t=t.sibling;t!==null;)hf(t,n,a),t=t.sibling}function bl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(bl(t,n,a),t=t.sibling;t!==null;)bl(t,n,a),t=t.sibling}function jm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,r,a),n[Ze]=t,n[Sn]=a}catch(f){Le(t,t.return,f)}}var Zi=!1,rn=!1,df=!1,Zm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function SS(t,n){if(t=t.containerInfo,Of=ql,t=op(t),su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,E=-1,z=-1,$=0,ct=0,mt=t,tt=null;e:for(;;){for(var rt;mt!==a||c!==0&&mt.nodeType!==3||(E=_+c),mt!==f||r!==0&&mt.nodeType!==3||(z=_+r),mt.nodeType===3&&(_+=mt.nodeValue.length),(rt=mt.firstChild)!==null;)tt=mt,mt=rt;for(;;){if(mt===t)break e;if(tt===a&&++$===c&&(E=_),tt===f&&++ct===r&&(z=_),(rt=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=rt}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:t,selectionRange:a},ql=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var It=cs(a.type,c);t=r.getSnapshotBeforeUpdate(It,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Qt){Le(a,a.return,Qt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)If(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":If(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Km(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(t,a),r&4&&oo(5,a);break;case 1:if(Qi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Le(a,a.return,_)}else{var c=cs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Le(a,a.return,_)}}r&64&&km(a),r&512&&lo(a,a.return);break;case 3:if(Qi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Op(t,n)}catch(_){Le(a,a.return,_)}}break;case 27:n===null&&r&4&&jm(a);case 26:case 5:Qi(t,a),n===null&&r&4&&qm(a),r&512&&lo(a,a.return);break;case 12:Qi(t,a);break;case 31:Qi(t,a),r&4&&$m(t,a);break;case 13:Qi(t,a),r&4&&t_(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=CS.bind(null,a),jS(t,a))));break;case 22:if(r=a.memoizedState!==null||Zi,!r){n=n!==null&&n.memoizedState!==null||rn,c=Zi;var f=rn;Zi=r,(rn=n)&&!f?Ji(t,a,(a.subtreeFlags&8772)!==0):Qi(t,a),Zi=c,rn=f}break;case 30:break;default:Qi(t,a)}}function Qm(t){var n=t.alternate;n!==null&&(t.alternate=null,Qm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Bn=!1;function Ki(t,n,a){for(a=a.child;a!==null;)Jm(t,n,a),a=a.sibling}function Jm(t,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:rn||Ci(a,n),Ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ci(a,n);var r=Ye,c=Bn;wa(a.type)&&(Ye=a.stateNode,Bn=!1),Ki(t,n,a),vo(a.stateNode),Ye=r,Bn=c;break;case 5:rn||Ci(a,n);case 6:if(r=Ye,c=Bn,Ye=null,Ki(t,n,a),Ye=r,Bn=c,Ye!==null)if(Bn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:Ye!==null&&(Bn?(t=Ye,k_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),sr(t)):k_(Ye,a.stateNode));break;case 4:r=Ye,c=Bn,Ye=a.stateNode.containerInfo,Bn=!0,Ki(t,n,a),Ye=r,Bn=c;break;case 0:case 11:case 14:case 15:Ma(2,a,n),rn||Ma(4,a,n),Ki(t,n,a);break;case 1:rn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Wm(a,n,r)),Ki(t,n,a);break;case 21:Ki(t,n,a);break;case 22:rn=(r=rn)||a.memoizedState!==null,Ki(t,n,a),rn=r;break;default:Ki(t,n,a)}}function $m(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{sr(t)}catch(a){Le(n,n.return,a)}}}function t_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{sr(t)}catch(a){Le(n,n.return,a)}}function xS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Zm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Zm),n;default:throw Error(s(435,t.tag))}}function Al(t,n){var a=xS(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=wS.bind(null,t,r);r.then(c,c)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(wa(E.type)){Ye=E.stateNode,Bn=!1;break t}break;case 5:Ye=E.stateNode,Bn=!1;break t;case 3:case 4:Ye=E.stateNode.containerInfo,Bn=!0;break t}E=E.return}if(Ye===null)throw Error(s(160));Jm(f,_,c),Ye=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)e_(n,t),n=n.sibling}var vi=null;function e_(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Fn(t),r&4&&(Ma(3,t,t.return),oo(3,t),Ma(5,t,t.return));break;case 1:In(n,t),Fn(t),r&512&&(rn||a===null||Ci(a,a.return)),r&64&&Zi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=vi;if(In(n,t),Fn(t),r&512&&(rn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Za]||f[Ze]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,r,a),f[Ze]=t,V(f),r=f;break t;case"link":var _=eg("link","href",c).get(r+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;case"meta":if(_=eg("meta","content",c).get(r+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Ze]=t,V(f),r=f}t.stateNode=r}else ng(c,t.type,t.stateNode);else t.stateNode=tg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ng(c,t.type,t.stateNode):tg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Fn(t),r&512&&(rn||a===null||Ci(a,a.return)),a!==null&&r&4&&uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Fn(t),r&512&&(rn||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{Pn(c,"")}catch(It){Le(t,t.return,It)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,uf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(df=!0);break;case 6:if(In(n,t),Fn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(It){Le(t,t.return,It)}}break;case 3:if(Vl=null,c=vi,vi=Hl(n.containerInfo),In(n,t),vi=c,Fn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{sr(n.containerInfo)}catch(It){Le(t,t.return,It)}df&&(df=!1,n_(t));break;case 4:r=vi,vi=Hl(t.stateNode.containerInfo),In(n,t),Fn(t),vi=r;break;case 12:In(n,t),Fn(t);break;case 31:In(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Al(t,r)));break;case 13:In(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=ut()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Al(t,r)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=Zi,ct=rn;if(Zi=$||c,rn=ct||z,In(n,t),rn=ct,Zi=$,Fn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Zi||rn||us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=z.stateNode;var mt=z.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;E.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(It){Le(z,z.return,It)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(It){Le(z,z.return,It)}}}else if(n.tag===18){if(a===null){z=n;try{var rt=z.stateNode;c?W_(rt,!0):W_(z.stateNode,!1)}catch(It){Le(z,z.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Al(t,a))));break;case 19:In(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Al(t,r)));break;case 30:break;case 21:break;default:In(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Ym(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ff(t);bl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Pn(_,""),a.flags&=-33);var E=ff(t);bl(t,E,_);break;case 3:case 4:var z=a.stateNode.containerInfo,$=ff(t);hf(t,$,z);break;default:throw Error(s(161))}}catch(ct){Le(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function n_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;n_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Km(t,n.alternate,n),n=n.sibling}function us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),us(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Wm(n,n.return,a),us(n);break;case 27:vo(n.stateNode);case 26:case 5:Ci(n,n.return),us(n);break;case 22:n.memoizedState===null&&us(n);break;case 30:us(n);break;default:us(n)}t=t.sibling}}function Ji(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(c,f,a),oo(4,f);break;case 1:if(Ji(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Le(r,r.return,$)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Np(z[c],E)}catch($){Le(r,r.return,$)}}a&&_&64&&km(f),lo(f,f.return);break;case 27:jm(f);case 26:case 5:Ji(c,f,a),a&&r===null&&_&4&&qm(f),lo(f,f.return);break;case 12:Ji(c,f,a);break;case 31:Ji(c,f,a),a&&_&4&&$m(c,f);break;case 13:Ji(c,f,a),a&&_&4&&t_(c,f);break;case 22:f.memoizedState===null&&Ji(c,f,a),lo(f,f.return);break;case 30:break;default:Ji(c,f,a)}n=n.sibling}}function pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&jr(a))}function mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jr(t))}function Si(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)i_(t,n,a,r),n=n.sibling}function i_(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,r),c&2048&&oo(9,n);break;case 1:Si(t,n,a,r);break;case 3:Si(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jr(t)));break;case 12:if(c&2048){Si(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Le(n,n.return,z)}}else Si(t,n,a,r);break;case 31:Si(t,n,a,r);break;case 13:Si(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,r):co(t,n):f._visibility&2?Si(t,n,a,r):(f._visibility|=2,js(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&pf(_,n);break;case 24:Si(t,n,a,r),c&2048&&mf(n.alternate,n);break;default:Si(t,n,a,r)}}function js(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,z=r,$=_.flags;switch(_.tag){case 0:case 11:case 15:js(f,_,E,z,c),oo(8,_);break;case 23:break;case 22:var ct=_.stateNode;_.memoizedState!==null?ct._visibility&2?js(f,_,E,z,c):co(f,_):(ct._visibility|=2,js(f,_,E,z,c)),c&&$&2048&&pf(_.alternate,_);break;case 24:js(f,_,E,z,c),c&&$&2048&&mf(_.alternate,_);break;default:js(f,_,E,z,c)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:co(a,r),c&2048&&pf(r.alternate,r);break;case 24:co(a,r),c&2048&&mf(r.alternate,r);break;default:co(a,r)}n=n.sibling}}var uo=8192;function Zs(t,n,a){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)a_(t,n,a),t=t.sibling}function a_(t,n,a){switch(t.tag){case 26:Zs(t,n,a),t.flags&uo&&t.memoizedState!==null&&rx(a,vi,t.memoizedState,t.memoizedProps);break;case 5:Zs(t,n,a);break;case 3:case 4:var r=vi;vi=Hl(t.stateNode.containerInfo),Zs(t,n,a),vi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=uo,uo=16777216,Zs(t,n,a),uo=r):Zs(t,n,a));break;default:Zs(t,n,a)}}function s_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,o_(r,t)}s_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)r_(t),t=t.sibling}function r_(t){switch(t.tag){case 0:case 11:case 15:fo(t),t.flags&2048&&Ma(9,t,t.return);break;case 3:fo(t);break;case 12:fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Rl(t)):fo(t);break;default:fo(t)}}function Rl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,o_(r,t)}s_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}t=t.sibling}}function o_(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,mn=r;else t:for(a=t;mn!==null;){r=mn;var c=r.sibling,f=r.return;if(Qm(r),r===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var yS={getCacheForType:function(t){var n=Mn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(nn).controller.signal}},MS=typeof WeakMap=="function"?WeakMap:Map,we=0,Ge=null,de=null,ge=0,Ue=0,Kn=null,Ea=!1,Ks=!1,_f=!1,$i=0,Je=0,Ta=0,fs=0,gf=0,Qn=0,Qs=0,ho=null,Hn=null,vf=!1,Cl=0,l_=0,wl=1/0,Dl=null,ba=null,un=0,Aa=null,Js=null,ta=0,Sf=0,xf=null,c_=null,po=0,yf=null;function Jn(){return(we&2)!==0&&ge!==0?ge&-ge:P.T!==null?Rf():Or()}function u_(){if(Qn===0)if((ge&536870912)===0||ye){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),Qn=t}else Qn=536870912;return t=jn.current,t!==null&&(t.flags|=32),Qn}function Gn(t,n,a){(t===Ge&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&($s(t,0),Ra(t,ge,Qn,!1)),vn(t,a),((we&2)===0||t!==Ge)&&(t===Ge&&((we&2)===0&&(fs|=a),Je===4&&Ra(t,ge,Qn,!1)),wi(t))}function f_(t,n,a){if((we&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||ee(t,n),c=r?bS(t,n):Ef(t,n,!0),f=r;do{if(c===0){Ks&&!r&&Ra(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ES(a)){c=Ef(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;c=ho;var z=E.current.memoizedState.isDehydrated;if(z&&($s(E,_).flags|=256),_=Ef(E,_,!1),_!==2){if(_f&&!z){E.errorRecoveryDisabledLanes|=f,fs|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){$s(t,0),Ra(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ra(r,n,Qn,!Ea);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Cl+300-ut(),10<c)){if(Ra(r,n,Qn,!Ea),wt(r,0,!0)!==0)break t;ta=n,r.timeoutHandle=V_(h_.bind(null,r,a,Hn,Dl,vf,n,Qn,fs,Qs,Ea,f,"Throttled",-0,0),c);break t}h_(r,a,Hn,Dl,vf,n,Qn,fs,Qs,Ea,f,null,-0,0)}}break}while(!0);wi(t)}function h_(t,n,a,r,c,f,_,E,z,$,ct,mt,tt,rt){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},a_(n,f,mt);var It=(f&62914560)===f?Cl-ut():(f&4194048)===f?l_-ut():0;if(It=ox(mt,It),It!==null){ta=f,t.cancelPendingCommit=It(x_.bind(null,t,n,f,a,r,c,_,E,z,ct,mt,null,tt,rt)),Ra(t,f,_,!$);return}}x_(t,n,f,a,r,c,_,E,z)}function ES(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(t,n,a,r){n&=~gf,n&=~fs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-te(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Lr(t,a,n)}function Ul(){return(we&6)===0?(mo(0),!1):!0}function Mf(){if(de!==null){if(Ue===0)var t=de.return;else t=de,Xi=ns=null,Bu(t),Xs=null,Kr=0,t=de;for(;t!==null;)Xm(t.alternate,t),t=t.return;de=null}}function $s(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,XS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,Mf(),Ge=t,de=a=Gi(t.current,null),ge=n,Ue=0,Kn=null,Ea=!1,Ks=ee(t,n),_f=!1,Qs=Qn=gf=fs=Ta=Je=0,Hn=ho=null,vf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-te(r),f=1<<c;n|=t[c],r&=~f}return $i=n,Jo(),a}function d_(t,n){re=null,P.H=ao,n===Vs||n===rl?(n=wp(),Ue=3):n===bu?(n=wp(),Ue=4):Ue=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,de===null&&(Je=1,xl(t,ii(n,t.current)))}function p_(){var t=jn.current;return t===null?!0:(ge&4194048)===ge?oi===null:(ge&62914560)===ge||(ge&536870912)!==0?t===oi:!1}function m_(){var t=P.H;return P.H=ao,t===null?ao:t}function __(){var t=P.A;return P.A=yS,t}function Ll(){Je=4,Ea||(ge&4194048)!==ge&&jn.current!==null||(Ks=!0),(Ta&134217727)===0&&(fs&134217727)===0||Ge===null||Ra(Ge,ge,Qn,!1)}function Ef(t,n,a){var r=we;we|=2;var c=m_(),f=__();(Ge!==t||ge!==n)&&(Dl=null,$s(t,n)),n=!1;var _=Je;t:do try{if(Ue!==0&&de!==null){var E=de,z=Kn;switch(Ue){case 8:Mf(),_=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var $=Ue;if(Ue=0,Kn=null,tr(t,E,z,$),a&&Ks){_=0;break t}break;default:$=Ue,Ue=0,Kn=null,tr(t,E,z,$)}}TS(),_=Je;break}catch(ct){d_(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Xi=ns=null,we=r,P.H=c,P.A=f,de===null&&(Ge=null,ge=0,Jo()),_}function TS(){for(;de!==null;)g_(de)}function bS(t,n){var a=we;we|=2;var r=m_(),c=__();Ge!==t||ge!==n?(Dl=null,wl=ut()+500,$s(t,n)):Ks=ee(t,n);t:do try{if(Ue!==0&&de!==null){n=de;var f=Kn;e:switch(Ue){case 1:Ue=0,Kn=null,tr(t,n,f,1);break;case 2:case 9:if(Rp(f)){Ue=0,Kn=null,v_(n);break}n=function(){Ue!==2&&Ue!==9||Ge!==t||(Ue=7),wi(t)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Rp(f)?(Ue=0,Kn=null,v_(n)):(Ue=0,Kn=null,tr(t,n,f,7));break;case 5:var _=null;switch(de.tag){case 26:_=de.memoizedState;case 5:case 27:var E=de;if(_?ig(_):E.stateNode.complete){Ue=0,Kn=null;var z=E.sibling;if(z!==null)de=z;else{var $=E.return;$!==null?(de=$,Nl($)):de=null}break e}}Ue=0,Kn=null,tr(t,n,f,5);break;case 6:Ue=0,Kn=null,tr(t,n,f,6);break;case 8:Mf(),Je=6;break t;default:throw Error(s(462))}}AS();break}catch(ct){d_(t,ct)}while(!0);return Xi=ns=null,P.H=r,P.A=c,we=a,de!==null?0:(Ge=null,ge=0,Jo(),Je)}function AS(){for(;de!==null&&!b();)g_(de)}function g_(t){var n=Gm(t.alternate,t,$i);t.memoizedProps=t.pendingProps,n===null?Nl(t):de=n}function v_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Pm(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=Pm(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Bu(n);default:Xm(a,n),n=de=_p(n,$i),n=Gm(a,n,$i)}t.memoizedProps=t.pendingProps,n===null?Nl(t):de=n}function tr(t,n,a,r){Xi=ns=null,Bu(n),Xs=null,Kr=0;var c=n.return;try{if(pS(t,c,n,a,ge)){Je=1,xl(t,ii(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Je=1,xl(t,ii(a,t.current)),de=null;return}n.flags&32768?(ye||r===1?t=!0:Ks||(ge&536870912)!==0?t=!1:(Ea=t=!0,(r===2||r===9||r===3||r===6)&&(r=jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),S_(n,t)):Nl(n)}function Nl(t){var n=t;do{if((n.flags&32768)!==0){S_(n,Ea);return}t=n.return;var a=gS(n.alternate,n,$i);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);Je===0&&(Je=5)}function S_(t,n){do{var a=vS(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);Je=6,de=null}function x_(t,n,a,r,c,f,_,E,z){t.cancelPendingCommit=null;do Ol();while(un!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=uu,pi(t,a,f,_,E,z),t===Ge&&(de=Ge=null,ge=0),Js=n,Aa=t,ta=a,Sf=f,xf=c,c_=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,DS(Rt,function(){return b_(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,c=K.p,K.p=2,_=we,we|=4;try{SS(t,n,a)}finally{we=_,K.p=c,P.T=r}}un=1,y_(),M_(),E_()}}function y_(){if(un===1){un=0;var t=Aa,n=Js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=K.p;K.p=2;var c=we;we|=4;try{e_(n,t);var f=Pf,_=op(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&rp(E.ownerDocument.documentElement,E)){if(z!==null&&su(E)){var $=z.start,ct=z.end;if(ct===void 0&&(ct=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(ct,E.value.length);else{var mt=E.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var rt=tt.getSelection(),It=E.textContent.length,Qt=Math.min(z.start,It),Be=z.end===void 0?Qt:Math.min(z.end,It);!rt.extend&&Qt>Be&&(_=Be,Be=Qt,Qt=_);var W=sp(E,Qt),F=sp(E,Be);if(W&&F&&(rt.rangeCount!==1||rt.anchorNode!==W.node||rt.anchorOffset!==W.offset||rt.focusNode!==F.node||rt.focusOffset!==F.offset)){var J=mt.createRange();J.setStart(W.node,W.offset),rt.removeAllRanges(),Qt>Be?(rt.addRange(J),rt.extend(F.node,F.offset)):(J.setEnd(F.node,F.offset),rt.addRange(J))}}}}for(mt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&mt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var ht=mt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}ql=!!Of,Pf=Of=null}finally{we=c,K.p=r,P.T=a}}t.current=n,un=2}}function M_(){if(un===2){un=0;var t=Aa,n=Js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=K.p;K.p=2;var c=we;we|=4;try{Km(t,n.alternate,n)}finally{we=c,K.p=r,P.T=a}}un=3}}function E_(){if(un===4||un===3){un=0,et();var t=Aa,n=Js,a=ta,r=c_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,Js=Aa=null,T_(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ba=null),Rs(a),n=n.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,c=K.p,K.p=2,P.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var E=r[_];f(E.value,{componentStack:E.stack})}}finally{P.T=n,K.p=c}}(ta&3)!==0&&Ol(),wi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===yf?po++:(po=0,yf=t):po=0,mo(0)}}function T_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,jr(n)))}function Ol(){return y_(),M_(),E_(),b_()}function b_(){if(un!==5)return!1;var t=Aa,n=Sf;Sf=0;var a=Rs(ta),r=P.T,c=K.p;try{K.p=32>a?32:a,P.T=null,a=xf,xf=null;var f=Aa,_=ta;if(un=0,Js=Aa=null,ta=0,(we&6)!==0)throw Error(s(331));var E=we;if(we|=4,r_(f.current),i_(f,f.current,_,a),we=E,mo(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{K.p=c,P.T=r,T_(t,n)}}function A_(t,n,a){n=ii(a,n),n=Ju(t.stateNode,n,2),t=Sa(t,n,2),t!==null&&(vn(t,2),wi(t))}function Le(t,n,a){if(t.tag===3)A_(t,t,a);else for(;n!==null;){if(n.tag===3){A_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ba===null||!ba.has(r))){t=ii(a,t),a=Rm(2),r=Sa(n,a,2),r!==null&&(Cm(a,r,n,t),vn(r,2),wi(r));break}}n=n.return}}function Tf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new MS;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(_f=!0,c.add(a),t=RS.bind(null,t,n,a),n.then(t,t))}function RS(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ge===t&&(ge&a)===a&&(Je===4||Je===3&&(ge&62914560)===ge&&300>ut()-Cl?(we&2)===0&&$s(t,0):gf|=a,Qs===ge&&(Qs=0)),wi(t)}function R_(t,n){n===0&&(n=ln()),t=$a(t,n),t!==null&&(vn(t,n),wi(t))}function CS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),R_(t,a)}function wS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),R_(t,a)}function DS(t,n){return Vt(t,n)}var Pl=null,er=null,bf=!1,zl=!1,Af=!1,Ca=0;function wi(t){t!==er&&t.next===null&&(er===null?Pl=er=t:er=er.next=t),zl=!0,bf||(bf=!0,LS())}function mo(t,n){if(!Af&&zl){Af=!0;do for(var a=!1,r=Pl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-te(42|t)+1)-1,f&=c&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,U_(r,f))}else f=ge,f=wt(r,r===Ge?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||ee(r,f)||(a=!0,U_(r,f));r=r.next}while(a);Af=!1}}function US(){C_()}function C_(){zl=bf=!1;var t=0;Ca!==0&&VS()&&(t=Ca);for(var n=ut(),a=null,r=Pl;r!==null;){var c=r.next,f=w_(r,n);f===0?(r.next=null,a===null?Pl=c:a.next=c,c===null&&(er=a)):(a=r,(t!==0||(f&3)!==0)&&(zl=!0)),r=c}un!==0&&un!==5||mo(t),Ca!==0&&(Ca=0)}function w_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-te(f),E=1<<_,z=c[_];z===-1?((E&a)===0||(E&r)!==0)&&(c[_]=qe(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ge,a=ge,a=wt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ee(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&U(r),Rs(a)){case 2:case 8:a=Ht;break;case 32:a=Rt;break;case 268435456:a=Jt;break;default:a=Rt}return r=D_.bind(null,t),a=Vt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&U(r),t.callbackPriority=2,t.callbackNode=null,2}function D_(t,n){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ol()&&t.callbackNode!==a)return null;var r=ge;return r=wt(t,t===Ge?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(f_(t,r,n),w_(t,ut()),t.callbackNode!=null&&t.callbackNode===a?D_.bind(null,t):null)}function U_(t,n){if(Ol())return null;f_(t,n,!0)}function LS(){kS(function(){(we&6)!==0?Vt(dt,US):C_()})}function Rf(){if(Ca===0){var t=Hs;t===0&&(t=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Ca=t}return Ca}function L_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ko(""+t)}function N_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function NS(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=L_((c[Sn]||null).action),_=r.submitter;_&&(n=(n=_[Sn]||null)?L_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new jo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ca!==0){var z=_?N_(c,_):new FormData(c);qu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=_?N_(c,_):new FormData(c),qu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var Cf=0;Cf<cu.length;Cf++){var wf=cu[Cf],OS=wf.toLowerCase(),PS=wf[0].toUpperCase()+wf.slice(1);gi(OS,"on"+PS)}gi(up,"onAnimationEnd"),gi(fp,"onAnimationIteration"),gi(hp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(Q0,"onTransitionRun"),gi(J0,"onTransitionStart"),gi($0,"onTransitionCancel"),gi(dp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function O_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],z=E.instance,$=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ct){Qo(ct)}c.currentTarget=null,f=z}else for(_=0;_<r.length;_++){if(E=r[_],z=E.instance,$=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ct){Qo(ct)}c.currentTarget=null,f=z}}}}function pe(t,n){var a=n[Pr];a===void 0&&(a=n[Pr]=new Set);var r=t+"__bubble";a.has(r)||(P_(n,t,2,!1),a.add(r))}function Df(t,n,a){var r=0;n&&(r|=4),P_(a,t,r,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Uf(t){if(!t[Bl]){t[Bl]=!0,Et.forEach(function(a){a!=="selectionchange"&&(zS.has(a)||Df(a,!1,t),Df(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,Df("selectionchange",!1,n))}}function P_(t,n,a,r){switch(ug(n)){case 2:var c=ux;break;case 8:c=fx;break;default:c=qf}a=c.bind(null,n,a,t),c=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Lf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===c)break;if(_===4)for(_=r.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;E!==null;){if(_=A(E),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){r=f=_;continue t}E=E.parentNode}}r=r.return}Hd(function(){var $=f,ct=jc(a),mt=[];t:{var tt=pp.get(t);if(tt!==void 0){var rt=jo,It=t;switch(t){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":rt=w0;break;case"focusin":It="focus",rt=tu;break;case"focusout":It="blur",rt=tu;break;case"beforeblur":case"afterblur":rt=tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=g0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=L0;break;case up:case fp:case hp:rt=x0;break;case dp:rt=O0;break;case"scroll":case"scrollend":rt=m0;break;case"wheel":rt=z0;break;case"copy":case"cut":case"paste":rt=M0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Wd;break;case"toggle":case"beforetoggle":rt=I0}var Qt=(n&4)!==0,Be=!Qt&&(t==="scroll"||t==="scrollend"),W=Qt?tt!==null?tt+"Capture":null:tt;Qt=[];for(var F=$,J;F!==null;){var ht=F;if(J=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||J===null||W===null||(ht=Br(F,W),ht!=null&&Qt.push(go(F,ht,J))),Be)break;F=F.return}0<Qt.length&&(tt=new rt(tt,It,null,a,ct),mt.push({event:tt,listeners:Qt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",tt&&a!==Yc&&(It=a.relatedTarget||a.fromElement)&&(A(It)||It[Ii]))break t;if((rt||tt)&&(tt=ct.window===ct?ct:(tt=ct.ownerDocument)?tt.defaultView||tt.parentWindow:window,rt?(It=a.relatedTarget||a.toElement,rt=$,It=It?A(It):null,It!==null&&(Be=u(It),Qt=It.tag,It!==Be||Qt!==5&&Qt!==27&&Qt!==6)&&(It=null)):(rt=null,It=$),rt!==It)){if(Qt=Xd,ht="onMouseLeave",W="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=Wd,ht="onPointerLeave",W="onPointerEnter",F="pointer"),Be=rt==null?tt:it(rt),J=It==null?tt:it(It),tt=new Qt(ht,F+"leave",rt,a,ct),tt.target=Be,tt.relatedTarget=J,ht=null,A(ct)===$&&(Qt=new Qt(W,F+"enter",It,a,ct),Qt.target=J,Qt.relatedTarget=Be,ht=Qt),Be=ht,rt&&It)e:{for(Qt=BS,W=rt,F=It,J=0,ht=W;ht;ht=Qt(ht))J++;ht=0;for(var Wt=F;Wt;Wt=Qt(Wt))ht++;for(;0<J-ht;)W=Qt(W),J--;for(;0<ht-J;)F=Qt(F),ht--;for(;J--;){if(W===F||F!==null&&W===F.alternate){Qt=W;break e}W=Qt(W),F=Qt(F)}Qt=null}else Qt=null;rt!==null&&z_(mt,tt,rt,Qt,!1),It!==null&&Be!==null&&z_(mt,Be,It,Qt,!0)}}t:{if(tt=$?it($):window,rt=tt.nodeName&&tt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&tt.type==="file")var Ae=$d;else if(Qd(tt))if(tp)Ae=j0;else{Ae=q0;var Ft=W0}else rt=tt.nodeName,!rt||rt.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?$&&qc($.elementType)&&(Ae=$d):Ae=Y0;if(Ae&&(Ae=Ae(t,$))){Jd(mt,Ae,a,ct);break t}Ft&&Ft(t,tt,$),t==="focusout"&&$&&tt.type==="number"&&$.memoizedProps.value!=null&&An(tt,"number",tt.value)}switch(Ft=$?it($):window,t){case"focusin":(Qd(Ft)||Ft.contentEditable==="true")&&(Ls=Ft,ru=$,Wr=null);break;case"focusout":Wr=ru=Ls=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,lp(mt,a,ct);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":lp(mt,a,ct)}var oe;if(nu)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Us?Zd(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(qd&&a.locale!=="ko"&&(Us||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Us&&(oe=Gd()):(ha=ct,Qc="value"in ha?ha.value:ha.textContent,Us=!0)),Ft=Il($,ve),0<Ft.length&&(ve=new kd(ve,t,null,a,ct),mt.push({event:ve,listeners:Ft}),oe?ve.data=oe:(oe=Kd(a),oe!==null&&(ve.data=oe)))),(oe=H0?G0(t,a):V0(t,a))&&(ve=Il($,"onBeforeInput"),0<ve.length&&(Ft=new kd("onBeforeInput","beforeinput",null,a,ct),mt.push({event:Ft,listeners:ve}),Ft.data=oe)),NS(mt,t,$,a,ct)}O_(mt,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Il(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Br(t,a),c!=null&&r.unshift(go(t,c,f)),c=Br(t,n),c!=null&&r.push(go(t,c,f))),t.tag===3)return r;t=t.return}return[]}function BS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function z_(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var E=a,z=E.alternate,$=E.stateNode;if(E=E.tag,z!==null&&z===r)break;E!==5&&E!==26&&E!==27||$===null||(z=$,c?($=Br(a,f),$!=null&&_.unshift(go(a,$,z))):c||($=Br(a,f),$!=null&&_.push(go(a,$,z)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var IS=/\r\n?/g,FS=/\u0000|\uFFFD/g;function B_(t){return(typeof t=="string"?t:""+t).replace(IS,`
`).replace(FS,"")}function I_(t,n){return n=B_(n),B_(t)===n}function ze(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Pn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Pn(t,""+r);break;case"className":Xe(t,"class",r);break;case"tabIndex":Xe(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,r);break;case"style":Id(t,r,f);break;case"data":if(n!=="object"){Xe(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ko(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(t,n,"name",c.name,c,null),ze(t,n,"formEncType",c.formEncType,c,null),ze(t,n,"formMethod",c.formMethod,c,null),ze(t,n,"formTarget",c.formTarget,c,null)):(ze(t,n,"encType",c.encType,c,null),ze(t,n,"method",c.method,c,null),ze(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ko(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Fi);break;case"onScroll":r!=null&&pe("scroll",t);break;case"onScrollEnd":r!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=ko(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":pe("beforetoggle",t),pe("toggle",t),xe(t,"popover",r);break;case"xlinkActuate":be(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":be(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":be(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":be(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":be(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":be(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":be(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":xe(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=d0.get(a)||a,xe(t,a,r))}}function Nf(t,n,a,r,c,f){switch(a){case"style":Id(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Pn(t,r):(typeof r=="number"||typeof r=="bigint")&&Pn(t,""+r);break;case"onScroll":r!=null&&pe("scroll",t);break;case"onScrollEnd":r!=null&&pe("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):xe(t,a,r)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(t,n,f,_,a,null)}}c&&ze(t,n,"srcSet",a.srcSet,a,null),r&&ze(t,n,"src",a.src,a,null);return;case"input":pe("invalid",t);var E=f=_=c=null,z=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":_=ct;break;case"checked":z=ct;break;case"defaultChecked":$=ct;break;case"value":f=ct;break;case"defaultValue":E=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ze(t,n,r,ct,a,null)}}Un(t,f,E,z,$,_,c,!1);return;case"select":pe("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:ze(t,n,c,E,a,null)}n=f,a=_,t.multiple=!!r,n!=null?Ke(t,!!r,n,!1):a!=null&&Ke(t,!!r,a,!0);return;case"textarea":pe("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:ze(t,n,_,E,a,null)}Cs(t,r,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ze(t,n,z,r,a,null)}return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(r=0;r<_o.length;r++)pe(_o[r],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(t,n,$,r,a,null)}return;default:if(qc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&Nf(t,n,ct,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&ze(t,n,E,r,a,null))}function HS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,z=null,$=null,ct=null;for(rt in a){var mt=a[rt];if(a.hasOwnProperty(rt)&&mt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":z=mt;default:r.hasOwnProperty(rt)||ze(t,n,rt,null,r,mt)}}for(var tt in r){var rt=r[tt];if(mt=a[tt],r.hasOwnProperty(tt)&&(rt!=null||mt!=null))switch(tt){case"type":f=rt;break;case"name":c=rt;break;case"checked":$=rt;break;case"defaultChecked":ct=rt;break;case"value":_=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==mt&&ze(t,n,tt,rt,r,mt)}}Oe(t,_,E,z,$,ct,f,c);return;case"select":rt=_=E=tt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":rt=z;default:r.hasOwnProperty(f)||ze(t,n,f,null,r,z)}for(c in r)if(f=r[c],z=a[c],r.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":tt=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==z&&ze(t,n,c,f,r,z)}n=E,a=_,r=rt,tt!=null?Ke(t,!!a,tt,!1):!!r!=!!a&&(n!=null?Ke(t,!!a,n,!0):Ke(t,!!a,a?[]:"",!1));return;case"textarea":rt=tt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ze(t,n,E,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":tt=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&ze(t,n,_,c,r,f)}xn(t,tt,rt);return;case"option":for(var It in a)if(tt=a[It],a.hasOwnProperty(It)&&tt!=null&&!r.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:ze(t,n,It,null,r,tt)}for(z in r)if(tt=r[z],rt=a[z],r.hasOwnProperty(z)&&tt!==rt&&(tt!=null||rt!=null))switch(z){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:ze(t,n,z,tt,r,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)tt=a[Qt],a.hasOwnProperty(Qt)&&tt!=null&&!r.hasOwnProperty(Qt)&&ze(t,n,Qt,null,r,tt);for($ in r)if(tt=r[$],rt=a[$],r.hasOwnProperty($)&&tt!==rt&&(tt!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:ze(t,n,$,tt,r,rt)}return;default:if(qc(n)){for(var Be in a)tt=a[Be],a.hasOwnProperty(Be)&&tt!==void 0&&!r.hasOwnProperty(Be)&&Nf(t,n,Be,void 0,r,tt);for(ct in r)tt=r[ct],rt=a[ct],!r.hasOwnProperty(ct)||tt===rt||tt===void 0&&rt===void 0||Nf(t,n,ct,tt,r,rt);return}}for(var W in a)tt=a[W],a.hasOwnProperty(W)&&tt!=null&&!r.hasOwnProperty(W)&&ze(t,n,W,null,r,tt);for(mt in r)tt=r[mt],rt=a[mt],!r.hasOwnProperty(mt)||tt===rt||tt==null&&rt==null||ze(t,n,mt,tt,r,rt)}function F_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,E=c.duration;if(f&&E&&F_(_)){for(_=0,E=c.responseEnd,r+=1;r<a.length;r++){var z=a[r],$=z.startTime;if($>E)break;var ct=z.transferSize,mt=z.initiatorType;ct&&F_(mt)&&(z=z.responseEnd,_+=ct*(z<E?1:(E-$)/(z-$)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Of=null,Pf=null;function Fl(t){return t.nodeType===9?t:t.ownerDocument}function H_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function G_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function VS(){var t=window.event;return t&&t.type==="popstate"?t===Bf?!1:(Bf=t,!0):(Bf=null,!1)}var V_=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,X_=typeof Promise=="function"?Promise:void 0,kS=typeof queueMicrotask=="function"?queueMicrotask:typeof X_<"u"?function(t){return X_.resolve(null).then(t).catch(WS)}:V_;function WS(t){setTimeout(function(){throw t})}function wa(t){return t==="head"}function k_(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),sr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")vo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,vo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[Za]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&vo(t.ownerDocument.body);a=c}while(a);sr(n)}function W_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function If(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function qS(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function YS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function q_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Ff(t){return t.data==="$?"||t.data==="$~"}function Hf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function jS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Gf=null;function Y_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function j_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Z_(t,n,a){switch(n=Fl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zr(t)}var ci=new Map,K_=new Set;function Hl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ea=K.d;K.d={f:ZS,r:KS,D:QS,C:JS,L:$S,m:tx,X:nx,S:ex,M:ix};function ZS(){var t=ea.f(),n=Ul();return t||n}function KS(t){var n=k(t);n!==null&&n.tag===5&&n.type==="form"?dm(n):ea.r(t)}var nr=typeof document>"u"?null:document;function Q_(t,n,a){var r=nr;if(r&&typeof n=="string"&&n){var c=pn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),K_.has(c)||(K_.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Tn(n,"link",t),V(n),r.head.appendChild(n)))}}function QS(t){ea.D(t),Q_("dns-prefetch",t,null)}function JS(t,n){ea.C(t,n),Q_("preconnect",t,n)}function $S(t,n,a){ea.L(t,n,a);var r=nr;if(r&&t&&n){var c='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+pn(a.imageSizes)+'"]')):c+='[href="'+pn(t)+'"]';var f=c;switch(n){case"style":f=ir(t);break;case"script":f=ar(t)}ci.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(So(f))||n==="script"&&r.querySelector(xo(f))||(n=r.createElement("link"),Tn(n,"link",t),V(n),r.head.appendChild(n)))}}function tx(t,n){ea.m(t,n);var a=nr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+pn(r)+'"][href="'+pn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ar(t)}if(!ci.has(f)&&(t=v({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}r=a.createElement("link"),Tn(r,"link",t),V(r),a.head.appendChild(r)}}}function ex(t,n,a){ea.S(t,n,a);var r=nr;if(r&&t){var c=at(r).hoistableStyles,f=ir(t);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(So(f)))E.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&Vf(t,a);var z=_=r.createElement("link");V(z),Tn(z,"link",t),z._p=new Promise(function($,ct){z.onload=$,z.onerror=ct}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Gl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function nx(t,n){ea.X(t,n);var a=nr;if(a&&t){var r=at(a).hoistableScripts,c=ar(t),f=r.get(c);f||(f=a.querySelector(xo(c)),f||(t=v({src:t,async:!0},n),(n=ci.get(c))&&Xf(t,n),f=a.createElement("script"),V(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ix(t,n){ea.M(t,n);var a=nr;if(a&&t){var r=at(a).hoistableScripts,c=ar(t),f=r.get(c);f||(f=a.querySelector(xo(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&Xf(t,n),f=a.createElement("script"),V(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function J_(t,n,a,r){var c=(c=Mt.current)?Hl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ir(a.href),a=at(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ir(a.href);var f=at(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(So(t)))&&!f._p&&(_.instance=f,_.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||ax(c,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ar(a),a=at(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ir(t){return'href="'+pn(t)+'"'}function So(t){return'link[rel="stylesheet"]['+t+"]"}function $_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function ax(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),V(n),t.head.appendChild(n))}function ar(t){return'[src="'+pn(t)+'"]'}function xo(t){return"script[async]"+t}function tg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+pn(a.href)+'"]');if(r)return n.instance=r,V(r),r;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),V(r),Tn(r,"style",c),Gl(r,a.precedence,t),n.instance=r;case"stylesheet":c=ir(a.href);var f=t.querySelector(So(c));if(f)return n.state.loading|=4,n.instance=f,V(f),f;r=$_(a),(c=ci.get(c))&&Vf(r,c),f=(t.ownerDocument||t).createElement("link"),V(f);var _=f;return _._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),Tn(f,"link",r),n.state.loading|=4,Gl(f,a.precedence,t),n.instance=f;case"script":return f=ar(a.src),(c=t.querySelector(xo(f)))?(n.instance=c,V(c),c):(r=a,(c=ci.get(f))&&(r=v({},a),Xf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),V(c),Tn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Gl(r,a.precedence,t));return n.instance}function Gl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Vl=null;function eg(t,n,a){if(Vl===null){var r=new Map,c=Vl=new Map;c.set(a,r)}else c=Vl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Za]||f[Ze]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=r.get(_);E?E.push(f):r.set(_,[f])}}return r}function ng(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function sx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ig(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function rx(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ir(r.href),f=n.querySelector(So(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Xl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,V(f);return}f=n.ownerDocument||n,r=$_(r),(c=ci.get(c))&&Vf(r,c),f=f.createElement("link"),V(f);var _=f;_._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),Tn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Xl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var kf=0;function ox(t,n){return t.stylesheets&&t.count===0&&Wl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Wl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&kf===0&&(kf=62500*GS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>kf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function Wl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(lx,t),kl=null,Xl.call(t))}function lx(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var r=a.get(null);else{a=new Map,kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=Xl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var yo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function cx(t,n,a,r,c,f,_,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function ag(t,n,a,r,c,f,_,E,z,$,ct,mt){return t=new cx(t,n,a,_,z,$,ct,mt,E),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=Mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Au(f),t}function sg(t){return t?(t=Ps,t):Ps}function rg(t,n,a,r,c,f){c=sg(c),r.context===null?r.context=c:r.pendingContext=c,r=va(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Sa(t,r,n),a!==null&&(Gn(a,t,n),Jr(a,t,n))}function og(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Wf(t,n){og(t,n),(t=t.alternate)&&og(t,n)}function lg(t){if(t.tag===13||t.tag===31){var n=$a(t,67108864);n!==null&&Gn(n,t,67108864),Wf(t,67108864)}}function cg(t){if(t.tag===13||t.tag===31){var n=Jn();n=Ya(n);var a=$a(t,n);a!==null&&Gn(a,t,n),Wf(t,n)}}var ql=!0;function ux(t,n,a,r){var c=P.T;P.T=null;var f=K.p;try{K.p=2,qf(t,n,a,r)}finally{K.p=f,P.T=c}}function fx(t,n,a,r){var c=P.T;P.T=null;var f=K.p;try{K.p=8,qf(t,n,a,r)}finally{K.p=f,P.T=c}}function qf(t,n,a,r){if(ql){var c=Yf(r);if(c===null)Lf(t,n,r,Yl,a),fg(t,r);else if(dx(c,t,n,a,r))r.stopPropagation();else if(fg(t,r),n&4&&-1<hx.indexOf(t)){for(;c!==null;){var f=k(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=At(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var z=1<<31-te(_);E.entanglements[1]|=z,_&=~z}wi(f),(we&6)===0&&(wl=ut()+500,mo(0))}}break;case 31:case 13:E=$a(f,2),E!==null&&Gn(E,f,2),Ul(),Wf(f,2)}if(f=Yf(r),f===null&&Lf(t,n,r,Yl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Lf(t,n,r,null,a)}}function Yf(t){return t=jc(t),jf(t)}var Yl=null;function jf(t){if(Yl=null,t=A(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yl=t,null}function ug(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case dt:return 2;case Ht:return 8;case Rt:case Kt:return 32;case Jt:return 268435456;default:return 32}default:return 32}}var Zf=!1,Da=null,Ua=null,La=null,Mo=new Map,Eo=new Map,Na=[],hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fg(t,n){switch(t){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function To(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=k(n),n!==null&&lg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function dx(t,n,a,r,c){switch(n){case"focusin":return Da=To(Da,t,n,a,r,c),!0;case"dragenter":return Ua=To(Ua,t,n,a,r,c),!0;case"mouseover":return La=To(La,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,To(Mo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Eo.set(f,To(Eo.get(f)||null,t,n,a,r,c)),!0}return!1}function hg(t){var n=A(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ja(t.priority,function(){cg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ja(t.priority,function(){cg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Yf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Yc=r,a.target.dispatchEvent(r),Yc=null}else return n=k(a),n!==null&&lg(n),t.blockedOn=a,!1;n.shift()}return!0}function dg(t,n,a){jl(t)&&a.delete(n)}function px(){Zf=!1,Da!==null&&jl(Da)&&(Da=null),Ua!==null&&jl(Ua)&&(Ua=null),La!==null&&jl(La)&&(La=null),Mo.forEach(dg),Eo.forEach(dg)}function Zl(t,n){t.blockedOn===n&&(t.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,px)))}var Kl=null;function pg(t){Kl!==t&&(Kl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Kl===t&&(Kl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(jf(r||a)===null)continue;break}var f=k(a);f!==null&&(t.splice(n,3),n-=3,qu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function sr(t){function n(z){return Zl(z,t)}Da!==null&&Zl(Da,t),Ua!==null&&Zl(Ua,t),La!==null&&Zl(La,t),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<Na.length;a++){var r=Na[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)hg(a),a.blockedOn===null&&Na.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[Sn]||null;if(typeof f=="function")_||pg(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[Sn]||null)E=_.formAction;else if(jf(c)!==null)continue}else E=_.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),pg(a)}}}function mg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Kf(t){this._internalRoot=t}Ql.prototype.render=Kf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Jn();rg(a,r,t,n,null,null)},Ql.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;rg(t.current,2,null,t,null,null),Ul(),n[Ii]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Or();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,t),a===0&&hg(t)}};var _g=e.version;if(_g!=="19.2.8")throw Error(s(527,_g,"19.2.8"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var mx={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{jt=Jl.inject(mx),Gt=Jl}catch{}}return Ao.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Em,f=Tm,_=bm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=ag(t,1,!1,null,null,a,r,null,c,f,_,mg),t[Ii]=n.current,Uf(t),new Kf(n)},Ao.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Em,_=Tm,E=bm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=ag(t,1,!0,n,a??null,r,c,z,f,_,E,mg),n.context=sg(null),a=n.current,r=Jn(),r=Ya(r),c=va(r),c.callback=null,Sa(a,c,r),a=r,n.current.lanes=a,vn(n,a),wi(n),t[Ii]=n.current,Uf(t),new Ql(n)},Ao.version="19.2.8",Ao}var Ag;function bx(){if(Ag)return $f.exports;Ag=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),$f.exports=Tx(),$f.exports}var Ax=bx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="176",Mr={ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rx=0,Rg=1,Cx=2,Nv=1,wx=2,oa=3,Wa=0,kn=1,la=2,Xa=0,Er=1,Cg=2,wg=3,Dg=4,Dx=5,Ss=100,Ux=101,Lx=102,Nx=103,Ox=104,Px=200,zx=201,Bx=202,Ix=203,zh=204,Bh=205,Fx=206,Hx=207,Gx=208,Vx=209,Xx=210,kx=211,Wx=212,qx=213,Yx=214,Ih=0,Fh=1,Hh=2,br=3,Gh=4,Vh=5,Xh=6,kh=7,Ov=0,jx=1,Zx=2,ka=0,Kx=1,Qx=2,Jx=3,$x=4,ty=5,ey=6,ny=7,Pv=300,Ar=301,Rr=302,Wh=303,qh=304,Hc=306,Yh=1e3,ys=1001,jh=1002,Ti=1003,iy=1004,$l=1005,Li=1006,ih=1007,Ms=1008,Pi=1009,zv=1010,Bv=1011,Po=1012,Ad=1013,Es=1014,ca=1015,Fo=1016,Rd=1017,Cd=1018,zo=1020,Iv=35902,Fv=1021,Hv=1022,Ei=1023,Bo=1026,Io=1027,Gv=1028,wd=1029,Vv=1030,Dd=1031,Ud=1033,Cc=33776,wc=33777,Dc=33778,Uc=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,td=37492,ed=37496,nd=37808,id=37809,ad=37810,sd=37811,rd=37812,od=37813,ld=37814,cd=37815,ud=37816,fd=37817,hd=37818,dd=37819,pd=37820,md=37821,Lc=36492,_d=36494,gd=36495,Xv=36283,vd=36284,Sd=36285,xd=36286,ay=3200,sy=3201,kv=0,ry=1,Va="",ei="srgb",Cr="srgb-linear",Pc="linear",Ie="srgb",rr=7680,Ug=519,oy=512,ly=513,cy=514,Wv=515,uy=516,fy=517,hy=518,dy=519,Lg=35044,Ng="300 es",ua=2e3,zc=2001;class As{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oo=Math.PI/180,yd=180/Math.PI;function Ho(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function me(o,e,i){return Math.max(e,Math.min(i,o))}function py(o,e){return(o%e+e)%e}function ah(o,e,i){return(1-i)*o+i*e}function Ro(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const my={DEG2RAD:Oo};class ce{constructor(e=0,i=0){ce.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(e,i,s,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const S=this.elements;return S[0]=e,S[1]=l,S[2]=d,S[3]=i,S[4]=u,S[5]=m,S[6]=s,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],S=s[4],v=s[7],x=s[2],M=s[5],T=s[8],R=l[0],y=l[3],g=l[6],B=l[1],L=l[4],D=l[7],j=l[2],G=l[5],O=l[8];return u[0]=h*R+d*B+m*j,u[3]=h*y+d*L+m*G,u[6]=h*g+d*D+m*O,u[1]=p*R+S*B+v*j,u[4]=p*y+S*L+v*G,u[7]=p*g+S*D+v*O,u[2]=x*R+M*B+T*j,u[5]=x*y+M*L+T*G,u[8]=x*g+M*D+T*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8];return i*h*S-i*d*p-s*u*S+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],v=S*h-d*p,x=d*m-S*u,M=p*u-h*m,T=i*v+s*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(l*p-S*s)*R,e[2]=(d*s-l*h)*R,e[3]=x*R,e[4]=(S*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(s*m-p*i)*R,e[8]=(h*i-s*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(sh.makeScale(e,i)),this}rotate(e){return this.premultiply(sh.makeRotation(-e)),this}translate(e,i){return this.premultiply(sh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new le;function qv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _y(){const o=Bc("canvas");return o.style.display="block",o}const Og={};function Nc(o){o in Og||(Og[o]=!0,console.warn(o))}function gy(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function vy(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sy(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pg=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zg=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xy(){const o={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ie&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Tr(l.r),l.g=Tr(l.g),l.b=Tr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Pc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Cr]:{primaries:e,whitePoint:s,transfer:Pc,toXYZ:Pg,fromXYZ:zg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:s,transfer:Ie,toXYZ:Pg,fromXYZ:zg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),o}const Ce=xy();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Tr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let or;class yy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{or===void 0&&(or=Bc("canvas")),or.width=e.width,or.height=e.height;const l=or.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=or}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Bc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=fa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let My=0;class Ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(rh(l[h].image)):u.push(rh(l[h]))}else u=rh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function rh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?yy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ey=0;class Wn extends As{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=ys,l=ys,u=Li,h=Ms,d=Ei,m=Pi,p=Wn.DEFAULT_ANISOTROPY,S=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Ho(),this.name="",this.source=new Ld(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Pv;Wn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],S=m[4],v=m[8],x=m[1],M=m[5],T=m[9],R=m[2],y=m[6],g=m[10];if(Math.abs(S-x)<.01&&Math.abs(v-R)<.01&&Math.abs(T-y)<.01){if(Math.abs(S+x)<.1&&Math.abs(v+R)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,j=(g+1)/2,G=(S+x)/4,O=(v+R)/4,q=(T+y)/4;return L>D&&L>j?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=G/s,u=O/s):D>j?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=G/l,u=q/l):j<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(j),s=O/u,l=q/u),this.set(s,l,u,i),this}let B=Math.sqrt((y-T)*(y-T)+(v-R)*(v-R)+(x-S)*(x-S));return Math.abs(B)<.001&&(B=1),this.x=(y-T)/B,this.y=(v-R)/B,this.z=(x-S)/B,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this.z=me(this.z,e.z,i.z),this.w=me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this.z=me(this.z,e,i),this.w=me(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ty extends As{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const u=new Wn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ld(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends Ty{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Yv extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class by extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],S=s[l+2],v=s[l+3];const x=u[h+0],M=u[h+1],T=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=S,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=T,e[i+3]=R;return}if(v!==R||m!==x||p!==M||S!==T){let y=1-d;const g=m*x+p*M+S*T+v*R,B=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const j=Math.sqrt(L),G=Math.atan2(j,g*B);y=Math.sin(y*G)/j,d=Math.sin(d*G)/j}const D=d*B;if(m=m*y+x*D,p=p*y+M*D,S=S*y+T*D,v=v*y+R*D,y===1-d){const j=1/Math.sqrt(m*m+p*p+S*S+v*v);m*=j,p*=j,S*=j,v*=j}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],S=s[l+3],v=u[h],x=u[h+1],M=u[h+2],T=u[h+3];return e[i]=d*T+S*v+m*M-p*x,e[i+1]=m*T+S*x+p*v-d*M,e[i+2]=p*T+S*M+d*x-m*v,e[i+3]=S*T-d*v-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),S=d(l/2),v=d(u/2),x=m(s/2),M=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=x*S*v+p*M*T,this._y=p*M*v-x*S*T,this._z=p*S*T+x*M*v,this._w=p*S*v-x*M*T;break;case"YXZ":this._x=x*S*v+p*M*T,this._y=p*M*v-x*S*T,this._z=p*S*T-x*M*v,this._w=p*S*v+x*M*T;break;case"ZXY":this._x=x*S*v-p*M*T,this._y=p*M*v+x*S*T,this._z=p*S*T+x*M*v,this._w=p*S*v-x*M*T;break;case"ZYX":this._x=x*S*v-p*M*T,this._y=p*M*v+x*S*T,this._z=p*S*T-x*M*v,this._w=p*S*v+x*M*T;break;case"YZX":this._x=x*S*v+p*M*T,this._y=p*M*v+x*S*T,this._z=p*S*T-x*M*v,this._w=p*S*v-x*M*T;break;case"XZY":this._x=x*S*v-p*M*T,this._y=p*M*v-x*S*T,this._z=p*S*T+x*M*v,this._w=p*S*v+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],v=i[10],x=s+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(S-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(S-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(me(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=s*S+h*d+l*p-u*m,this._y=l*S+h*m+u*d-s*p,this._z=u*S+h*p+s*m-l*d,this._w=h*S-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),v=Math.sin((1-i)*S)/p,x=Math.sin(i*S)/p;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Bg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Bg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),S=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*S,this.y=s+m*S+d*p-u*v,this.z=l+m*v+u*S-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this.z=me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this.z=me(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new Q,Bg=new bs;class Go{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,xi):xi.fromBufferAttribute(u,h),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),tc.copy(s.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),ec.subVectors(this.max,Co),lr.subVectors(e.a,Co),cr.subVectors(e.b,Co),ur.subVectors(e.c,Co),Pa.subVectors(cr,lr),za.subVectors(ur,cr),hs.subVectors(lr,ur);let i=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-hs.z,hs.y,Pa.z,0,-Pa.x,za.z,0,-za.x,hs.z,0,-hs.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-hs.y,hs.x,0];return!lh(i,lr,cr,ur,ec)||(i=[1,0,0,0,1,0,0,0,1],!lh(i,lr,cr,ur,ec))?!1:(nc.crossVectors(Pa,za),i=[nc.x,nc.y,nc.z],lh(i,lr,cr,ur,ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const na=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],xi=new Q,tc=new Go,lr=new Q,cr=new Q,ur=new Q,Pa=new Q,za=new Q,hs=new Q,Co=new Q,ec=new Q,nc=new Q,ds=new Q;function lh(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){ds.fromArray(o,u);const d=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),m=e.dot(ds),p=i.dot(ds),S=s.dot(ds);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const Ay=new Go,wo=new Q,ch=new Q;class Gc{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Ay.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(ch)),this.expandByPoint(wo.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ia=new Q,uh=new Q,ic=new Q,Ba=new Q,fh=new Q,ac=new Q,hh=new Q;class Nd{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ia)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ia.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){uh.copy(e).add(i).multiplyScalar(.5),ic.copy(i).sub(e).normalize(),Ba.copy(this.origin).sub(uh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(ic),d=Ba.dot(this.direction),m=-Ba.dot(ic),p=Ba.lengthSq(),S=Math.abs(1-h*h);let v,x,M,T;if(S>0)if(v=h*m-d,x=h*d-m,T=u*S,v>=0)if(x>=-T)if(x<=T){const R=1/S;v*=R,x*=R,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-T?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=T?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(uh).addScaledVector(ic,x),M}intersectSphere(e,i){ia.subVectors(e.center,this.origin);const s=ia.dot(this.direction),l=ia.dot(ia)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),S>=0?(u=(e.min.y-x.y)*S,h=(e.max.y-x.y)*S):(u=(e.max.y-x.y)*S,h=(e.min.y-x.y)*S),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ia)!==null}intersectTriangle(e,i,s,l,u){fh.subVectors(i,e),ac.subVectors(s,e),hh.crossVectors(fh,ac);let h=this.direction.dot(hh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,e);const m=d*this.direction.dot(ac.crossVectors(Ba,ac));if(m<0)return null;const p=d*this.direction.dot(fh.cross(Ba));if(p<0||m+p>h)return null;const S=-d*Ba.dot(hh);return S<0?null:this.at(S/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,i,s,l,u,h,d,m,p,S,v,x,M,T,R,y){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,S,v,x,M,T,R,y)}set(e,i,s,l,u,h,d,m,p,S,v,x,M,T,R,y){const g=this.elements;return g[0]=e,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=S,g[10]=v,g[14]=x,g[3]=M,g[7]=T,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/fr.setFromMatrixColumn(e,0).length(),u=1/fr.setFromMatrixColumn(e,1).length(),h=1/fr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),S=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=h*S,M=h*v,T=d*S,R=d*v;i[0]=m*S,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=T+M*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*S,M=m*v,T=p*S,R=p*v;i[0]=x+R*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*S,i[9]=-d,i[2]=M*d-T,i[6]=R+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*S,M=m*v,T=p*S,R=p*v;i[0]=x-R*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*S,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*S,M=h*v,T=d*S,R=d*v;i[0]=m*S,i[4]=T*p-M,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,M=h*p,T=d*m,R=d*p;i[0]=m*S,i[4]=R-x*v,i[8]=T*v+M,i[1]=v,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=M*v+T,i[10]=x-R*v}else if(e.order==="XZY"){const x=h*m,M=h*p,T=d*m,R=d*p;i[0]=m*S,i[4]=-v,i[8]=p*S,i[1]=x*v+R,i[5]=h*S,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*S,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ry,e,Cy)}lookAt(e,i,s){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ia.crossVectors(s,$n),Ia.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ia.crossVectors(s,$n)),Ia.normalize(),sc.crossVectors($n,Ia),l[0]=Ia.x,l[4]=sc.x,l[8]=$n.x,l[1]=Ia.y,l[5]=sc.y,l[9]=$n.y,l[2]=Ia.z,l[6]=sc.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],S=s[1],v=s[5],x=s[9],M=s[13],T=s[2],R=s[6],y=s[10],g=s[14],B=s[3],L=s[7],D=s[11],j=s[15],G=l[0],O=l[4],q=l[8],w=l[12],C=l[1],H=l[5],lt=l[9],st=l[13],pt=l[2],_t=l[6],P=l[10],K=l[14],Z=l[3],xt=l[7],Tt=l[11],N=l[15];return u[0]=h*G+d*C+m*pt+p*Z,u[4]=h*O+d*H+m*_t+p*xt,u[8]=h*q+d*lt+m*P+p*Tt,u[12]=h*w+d*st+m*K+p*N,u[1]=S*G+v*C+x*pt+M*Z,u[5]=S*O+v*H+x*_t+M*xt,u[9]=S*q+v*lt+x*P+M*Tt,u[13]=S*w+v*st+x*K+M*N,u[2]=T*G+R*C+y*pt+g*Z,u[6]=T*O+R*H+y*_t+g*xt,u[10]=T*q+R*lt+y*P+g*Tt,u[14]=T*w+R*st+y*K+g*N,u[3]=B*G+L*C+D*pt+j*Z,u[7]=B*O+L*H+D*_t+j*xt,u[11]=B*q+L*lt+D*P+j*Tt,u[15]=B*w+L*st+D*K+j*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],S=e[2],v=e[6],x=e[10],M=e[14],T=e[3],R=e[7],y=e[11],g=e[15];return T*(+u*m*v-l*p*v-u*d*x+s*p*x+l*d*M-s*m*M)+R*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*S-u*m*S)+y*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*S-s*p*S)+g*(-l*d*S-i*m*v+i*d*x+l*h*v-s*h*x+s*m*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],v=e[9],x=e[10],M=e[11],T=e[12],R=e[13],y=e[14],g=e[15],B=v*y*p-R*x*p+R*m*M-d*y*M-v*m*g+d*x*g,L=T*x*p-S*y*p-T*m*M+h*y*M+S*m*g-h*x*g,D=S*R*p-T*v*p+T*d*M-h*R*M-S*d*g+h*v*g,j=T*v*m-S*R*m-T*d*x+h*R*x+S*d*y-h*v*y,G=i*B+s*L+l*D+u*j;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/G;return e[0]=B*O,e[1]=(R*x*u-v*y*u-R*l*M+s*y*M+v*l*g-s*x*g)*O,e[2]=(d*y*u-R*m*u+R*l*p-s*y*p-d*l*g+s*m*g)*O,e[3]=(v*m*u-d*x*u-v*l*p+s*x*p+d*l*M-s*m*M)*O,e[4]=L*O,e[5]=(S*y*u-T*x*u+T*l*M-i*y*M-S*l*g+i*x*g)*O,e[6]=(T*m*u-h*y*u-T*l*p+i*y*p+h*l*g-i*m*g)*O,e[7]=(h*x*u-S*m*u+S*l*p-i*x*p-h*l*M+i*m*M)*O,e[8]=D*O,e[9]=(T*v*u-S*R*u-T*s*M+i*R*M+S*s*g-i*v*g)*O,e[10]=(h*R*u-T*d*u+T*s*p-i*R*p-h*s*g+i*d*g)*O,e[11]=(S*d*u-h*v*u-S*s*p+i*v*p+h*s*M-i*d*M)*O,e[12]=j*O,e[13]=(S*R*l-T*v*l+T*s*x-i*R*x-S*s*y+i*v*y)*O,e[14]=(T*d*l-h*R*l-T*s*m+i*R*m+h*s*y-i*d*y)*O,e[15]=(h*v*l-S*d*l+S*s*m-i*v*m-h*s*x+i*d*x)*O,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,S=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+s,S*m-l*h,0,p*m-l*d,S*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,S=h+h,v=d+d,x=u*p,M=u*S,T=u*v,R=h*S,y=h*v,g=d*v,B=m*p,L=m*S,D=m*v,j=s.x,G=s.y,O=s.z;return l[0]=(1-(R+g))*j,l[1]=(M+D)*j,l[2]=(T-L)*j,l[3]=0,l[4]=(M-D)*G,l[5]=(1-(x+g))*G,l[6]=(y+B)*G,l[7]=0,l[8]=(T+L)*O,l[9]=(y-B)*O,l[10]=(1-(x+R))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=fr.set(l[0],l[1],l[2]).length();const h=fr.set(l[4],l[5],l[6]).length(),d=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],yi.copy(this);const p=1/u,S=1/h,v=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=S,yi.elements[5]*=S,yi.elements[6]*=S,yi.elements[8]*=v,yi.elements[9]*=v,yi.elements[10]*=v,i.setFromRotationMatrix(yi),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=ua){const m=this.elements,p=2*u/(i-e),S=2*u/(s-l),v=(i+e)/(i-e),x=(s+l)/(s-l);let M,T;if(d===ua)M=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(d===zc)M=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=S,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=ua){const m=this.elements,p=1/(i-e),S=1/(s-l),v=1/(h-u),x=(i+e)*p,M=(s+l)*S;let T,R;if(d===ua)T=(h+u)*v,R=-2*v;else if(d===zc)T=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*S,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const fr=new Q,yi=new je,Ry=new Q(0,0,0),Cy=new Q(1,1,1),Ia=new Q,sc=new Q,$n=new Q,Ig=new je,Fg=new bs;class zi{constructor(e=0,i=0,s=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Ig.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ig,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Fg.setFromEuler(this),this.setFromQuaternion(Fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class jv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wy=0;const Hg=new Q,hr=new bs,aa=new je,rc=new Q,Do=new Q,Dy=new Q,Uy=new bs,Gg=new Q(1,0,0),Vg=new Q(0,1,0),Xg=new Q(0,0,1),kg={type:"added"},Ly={type:"removed"},dr={type:"childadded",child:null},dh={type:"childremoved",child:null};class gn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new Q,i=new zi,s=new bs,l=new Q(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new le}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return hr.setFromAxisAngle(e,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,i){return hr.setFromAxisAngle(e,i),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Gg,e)}rotateY(e){return this.rotateOnAxis(Vg,e)}rotateZ(e){return this.rotateOnAxis(Xg,e)}translateOnAxis(e,i){return Hg.copy(e).applyQuaternion(this.quaternion),this.position.add(Hg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Gg,e)}translateY(e){return this.translateOnAxis(Vg,e)}translateZ(e){return this.translateOnAxis(Xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?rc.copy(e):rc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Do,rc,this.up):aa.lookAt(rc,Do,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(aa),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kg),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ly),dh.child=e,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kg),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,Dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),S=h(e.images),v=h(e.shapes),x=h(e.skeletons),M=h(e.animations),T=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}gn.DEFAULT_UP=new Q(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new Q,sa=new Q,ph=new Q,ra=new Q,pr=new Q,mr=new Q,Wg=new Q,mh=new Q,_h=new Q,gh=new Q,vh=new $e,Sh=new $e,xh=new $e;class hi{constructor(e=new Q,i=new Q,s=new Q){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Mi.subVectors(e,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Mi.subVectors(l,i),sa.subVectors(s,i),ph.subVectors(e,i);const h=Mi.dot(Mi),d=Mi.dot(sa),m=Mi.dot(ph),p=sa.dot(sa),S=sa.dot(ph),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*S)*x,T=(h*S-d*m)*x;return u.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ra.x),m.addScaledVector(h,ra.y),m.addScaledVector(d,ra.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return vh.setScalar(0),Sh.setScalar(0),xh.setScalar(0),vh.fromBufferAttribute(e,i),Sh.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(vh,u.x),h.addScaledVector(Sh,u.y),h.addScaledVector(xh,u.z),h}static isFrontFacing(e,i,s,l){return Mi.subVectors(s,i),sa.subVectors(e,i),Mi.cross(sa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Mi.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return hi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;pr.subVectors(l,s),mr.subVectors(u,s),mh.subVectors(e,s);const m=pr.dot(mh),p=mr.dot(mh);if(m<=0&&p<=0)return i.copy(s);_h.subVectors(e,l);const S=pr.dot(_h),v=mr.dot(_h);if(S>=0&&v<=S)return i.copy(l);const x=m*v-S*p;if(x<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(s).addScaledVector(pr,h);gh.subVectors(e,u);const M=pr.dot(gh),T=mr.dot(gh);if(T>=0&&M<=T)return i.copy(u);const R=M*p-m*T;if(R<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(mr,d);const y=S*T-M*v;if(y<=0&&v-S>=0&&M-T>=0)return Wg.subVectors(u,l),d=(v-S)/(v-S+(M-T)),i.copy(l).addScaledVector(Wg,d);const g=1/(y+R+x);return h=R*g,d=x*g,i.copy(s).addScaledVector(pr,h).addScaledVector(mr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},oc={h:0,s:0,l:0};function yh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ee{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ce.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ce.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ce.workingColorSpace){if(e=py(e,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=yh(h,u,e+1/3),this.g=yh(h,u,e),this.b=yh(h,u,e-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(e,i=ei){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ei){const s=Zv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Ce.fromWorkingColorSpace(wn.copy(this),e),Math.round(me(wn.r*255,0,255))*65536+Math.round(me(wn.g*255,0,255))*256+Math.round(me(wn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=S<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ei){Ce.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==ei?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+e,Fa.s+i,Fa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Fa),e.getHSL(oc);const s=ah(Fa.h,oc.h,i),l=ah(Fa.s,oc.s,i),u=ah(Fa.l,oc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ee;Ee.NAMES=Zv;let Ny=0;class Dr extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Er,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Bh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Bh&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kv extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new Q,lc=new ce;let Oy=0;class di{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Lg,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(e),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lg&&(e.usage=this.usage),e}}class Qv extends di{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Jv extends di{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Oi extends di{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Py=0;const ui=new je,Mh=new gn,_r=new Q,ti=new Go,Uo=new Go,_n=new Q;class Bi extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qv(e)?Jv:Qv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new le().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,s){return ui.makeTranslation(e,i,s),this.applyMatrix4(ui),this}scale(e,i,s){return ui.makeScale(e,i,s),this.applyMatrix4(ui),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Oi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ti.min,Uo.min),ti.expandByPoint(_n),_n.addVectors(ti.max,Uo.max),ti.expandByPoint(_n)):(ti.expandByPoint(Uo.min),ti.expandByPoint(Uo.max))}ti.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)_n.fromBufferAttribute(d,p),m&&(_r.fromBufferAttribute(e,p),_n.add(_r)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<s.count;q++)d[q]=new Q,m[q]=new Q;const p=new Q,S=new Q,v=new Q,x=new ce,M=new ce,T=new ce,R=new Q,y=new Q;function g(q,w,C){p.fromBufferAttribute(s,q),S.fromBufferAttribute(s,w),v.fromBufferAttribute(s,C),x.fromBufferAttribute(u,q),M.fromBufferAttribute(u,w),T.fromBufferAttribute(u,C),S.sub(p),v.sub(p),M.sub(x),T.sub(x);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(R.copy(S).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(H),y.copy(v).multiplyScalar(M.x).addScaledVector(S,-T.x).multiplyScalar(H),d[q].add(R),d[w].add(R),d[C].add(R),m[q].add(y),m[w].add(y),m[C].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let q=0,w=B.length;q<w;++q){const C=B[q],H=C.start,lt=C.count;for(let st=H,pt=H+lt;st<pt;st+=3)g(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const L=new Q,D=new Q,j=new Q,G=new Q;function O(q){j.fromBufferAttribute(l,q),G.copy(j);const w=d[q];L.copy(w),L.sub(j.multiplyScalar(j.dot(w))).normalize(),D.crossVectors(G,w);const H=D.dot(m[q])<0?-1:1;h.setXYZW(q,L.x,L.y,L.z,H)}for(let q=0,w=B.length;q<w;++q){const C=B[q],H=C.start,lt=C.count;for(let st=H,pt=H+lt;st<pt;st+=3)O(e.getX(st+0)),O(e.getX(st+1)),O(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new Q,u=new Q,h=new Q,d=new Q,m=new Q,p=new Q,S=new Q,v=new Q;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),S.subVectors(h,u),v.subVectors(l,u),S.cross(v),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(S),m.add(S),p.add(S),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,u),v.subVectors(l,u),S.cross(v),s.setXYZ(x+0,S.x,S.y,S.z),s.setXYZ(x+1,S.x,S.y,S.z),s.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,S=d.itemSize,v=d.normalized,x=new p.constructor(m.length*S);let M=0,T=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*S;for(let g=0;g<S;g++)x[T++]=p[M++]}return new di(x,S,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let S=0,v=p.length;S<v;S++){const x=p[S],M=e(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];S.push(M.toJSON(e.data))}S.length>0&&(l[m]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const u=e.morphAttributes;for(const p in u){const S=[],v=u[p];for(let x=0,M=v.length;x<M;x++)S.push(v[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,S=h.length;p<S;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qg=new je,ps=new Nd,cc=new Gc,Yg=new Q,uc=new Q,fc=new Q,hc=new Q,Eh=new Q,dc=new Q,jg=new Q,pc=new Q;class Ni extends gn{constructor(e=new Bi,i=new Kv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){dc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const S=d[m],v=u[m];S!==0&&(Eh.fromBufferAttribute(v,e),h?dc.addScaledVector(Eh,S):dc.addScaledVector(Eh.sub(i),S))}i.add(dc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cc.copy(s.boundingSphere),cc.applyMatrix4(u),ps.copy(e.ray).recast(e.near),!(cc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(cc,Yg)===null||ps.origin.distanceToSquared(Yg)>(e.far-e.near)**2))&&(qg.copy(u).invert(),ps.copy(e.ray).applyMatrix4(qg),!(s.boundingBox!==null&&ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ps)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,S=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,R=x.length;T<R;T++){const y=x[T],g=h[y.materialIndex],B=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,j=L;D<j;D+=3){const G=d.getX(D),O=d.getX(D+1),q=d.getX(D+2);l=mc(this,g,e,s,p,S,v,G,O,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=T,g=R;y<g;y+=3){const B=d.getX(y),L=d.getX(y+1),D=d.getX(y+2);l=mc(this,h,e,s,p,S,v,B,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,R=x.length;T<R;T++){const y=x[T],g=h[y.materialIndex],B=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,j=L;D<j;D+=3){const G=D,O=D+1,q=D+2;l=mc(this,g,e,s,p,S,v,G,O,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=T,g=R;y<g;y+=3){const B=y,L=y+1,D=y+2;l=mc(this,h,e,s,p,S,v,B,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function zy(o,e,i,s,l,u,h,d){let m;if(e.side===kn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Wa,d),m===null)return null;pc.copy(d),pc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pc);return p<i.near||p>i.far?null:{distance:p,point:pc.clone(),object:o}}function mc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,uc),o.getVertexPosition(m,fc),o.getVertexPosition(p,hc);const S=zy(o,e,i,s,uc,fc,hc,jg);if(S){const v=new Q;hi.getBarycoord(jg,uc,fc,hc,v),l&&(S.uv=hi.getInterpolatedAttribute(l,d,m,p,v,new ce)),u&&(S.uv1=hi.getInterpolatedAttribute(u,d,m,p,v,new ce)),h&&(S.normal=hi.getInterpolatedAttribute(h,d,m,p,v,new Q),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new Q,materialIndex:0};hi.getNormal(uc,fc,hc,x.normal),S.face=x,S.barycoord=v}return S}class Vo extends Bi{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],S=[],v=[];let x=0,M=0;T("z","y","x",-1,-1,s,i,e,h,u,0),T("z","y","x",1,-1,s,i,-e,h,u,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,u,4),T("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Oi(p,3)),this.setAttribute("normal",new Oi(S,3)),this.setAttribute("uv",new Oi(v,2));function T(R,y,g,B,L,D,j,G,O,q,w){const C=D/O,H=j/q,lt=D/2,st=j/2,pt=G/2,_t=O+1,P=q+1;let K=0,Z=0;const xt=new Q;for(let Tt=0;Tt<P;Tt++){const N=Tt*H-st;for(let nt=0;nt<_t;nt++){const St=nt*C-lt;xt[R]=St*B,xt[y]=N*L,xt[g]=pt,p.push(xt.x,xt.y,xt.z),xt[R]=0,xt[y]=0,xt[g]=G>0?1:-1,S.push(xt.x,xt.y,xt.z),v.push(nt/O),v.push(1-Tt/q),K+=1}}for(let Tt=0;Tt<q;Tt++)for(let N=0;N<O;N++){const nt=x+N+_t*Tt,St=x+N+_t*(Tt+1),Y=x+(N+1)+_t*(Tt+1),ft=x+(N+1)+_t*Tt;m.push(nt,St,ft),m.push(St,Y,ft),Z+=6}d.addGroup(M,Z,w),M+=Z,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const s=wr(o[i]);for(const l in s)e[l]=s[l]}return e}function By(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function $v(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ce.workingColorSpace}const Iy={clone:wr,merge:Nn};var Fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fy,this.fragmentShader=Hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=By(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class t0 extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ua}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new Q,Zg=new ce,Kg=new ce;class fi extends t0{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=yd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yd*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z)}getViewSize(e,i){return this.getViewBounds(e,Zg,Kg),i.subVectors(Kg,Zg)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Oo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,vr=1;class Gy extends gn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(gr,vr,e,i);l.layers=this.layers,this.add(l);const u=new fi(gr,vr,e,i);u.layers=this.layers,this.add(u);const h=new fi(gr,vr,e,i);h.layers=this.layers,this.add(h);const d=new fi(gr,vr,e,i);d.layers=this.layers,this.add(d);const m=new fi(gr,vr,e,i);m.layers=this.layers,this.add(m);const p=new fi(gr,vr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ua)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,S]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,S),e.setRenderTarget(v,x,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class e0 extends Wn{constructor(e=[],i=Ar,s,l,u,h,d,m,p,S){super(e,i,s,l,u,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vy extends Ts{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new e0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Vo(5,5,5),u=new qa({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Xa});u.uniforms.tEquirect.value=i;const h=new Ni(l,u),d=i.minFilter;return i.minFilter===Ms&&(i.minFilter=Li),new Gy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class _c extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xy={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,s),g=this._getHandJoint(p,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const S=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=S.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Xy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new _c;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class ky extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const bh=new Q,Wy=new Q,qy=new le;class Ga{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=bh.subVectors(s,i).cross(Wy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||qy.getNormalMatrix(e),l=this.coplanarPoint(bh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Gc,gc=new Q;class Od{constructor(e=new Ga,i=new Ga,s=new Ga,l=new Ga,u=new Ga,h=new Ga){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ua){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],S=l[5],v=l[6],x=l[7],M=l[8],T=l[9],R=l[10],y=l[11],g=l[12],B=l[13],L=l[14],D=l[15];if(s[0].setComponents(m-u,x-p,y-M,D-g).normalize(),s[1].setComponents(m+u,x+p,y+M,D+g).normalize(),s[2].setComponents(m+h,x+S,y+T,D+B).normalize(),s[3].setComponents(m-h,x-S,y-T,D-B).normalize(),s[4].setComponents(m-d,x-v,y-R,D-L).normalize(),i===ua)s[5].setComponents(m+d,x+v,y+R,D+L).normalize();else if(i===zc)s[5].setComponents(d,v,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class n0 extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ic=new Q,Fc=new Q,Qg=new je,Lo=new Nd,vc=new Gc,Ah=new Q,Jg=new Q;class Yy extends gn{constructor(e=new Bi,i=new n0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Ic.fromBufferAttribute(i,l-1),Fc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Ic.distanceTo(Fc);e.setAttribute("lineDistance",new Oi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(l),vc.radius+=u,e.ray.intersectsSphere(vc)===!1)return;Qg.copy(l).invert(),Lo.copy(e.ray).applyMatrix4(Qg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,S=s.index,x=s.attributes.position;if(S!==null){const M=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let R=M,y=T-1;R<y;R+=p){const g=S.getX(R),B=S.getX(R+1),L=Sc(this,e,Lo,m,g,B,R);L&&i.push(L)}if(this.isLineLoop){const R=S.getX(T-1),y=S.getX(M),g=Sc(this,e,Lo,m,R,y,T-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),T=Math.min(x.count,h.start+h.count);for(let R=M,y=T-1;R<y;R+=p){const g=Sc(this,e,Lo,m,R,R+1,R);g&&i.push(g)}if(this.isLineLoop){const R=Sc(this,e,Lo,m,T-1,M,T-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Sc(o,e,i,s,l,u,h){const d=o.geometry.attributes.position;if(Ic.fromBufferAttribute(d,l),Fc.fromBufferAttribute(d,u),i.distanceSqToSegment(Ic,Fc,Ah,Jg)>s)return;Ah.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Ah);if(!(p<e.near||p>e.far))return{distance:p,point:Jg.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const $g=new Q,tv=new Q;class jy extends Yy{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)$g.fromBufferAttribute(i,l),tv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+$g.distanceTo(tv);e.setAttribute("lineDistance",new Oi(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class i0 extends Wn{constructor(e,i,s=Es,l,u,h,d=Ti,m=Ti,p,S=Bo){if(S!==Bo&&S!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,m,S,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ld(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const xc=new Q,yc=new Q,Rh=new Q,Mc=new hi;class Zy extends Bi{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),u=Math.cos(Oo*i),h=e.getIndex(),d=e.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],S=["a","b","c"],v=new Array(3),x={},M=[];for(let T=0;T<m;T+=3){h?(p[0]=h.getX(T),p[1]=h.getX(T+1),p[2]=h.getX(T+2)):(p[0]=T,p[1]=T+1,p[2]=T+2);const{a:R,b:y,c:g}=Mc;if(R.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),g.fromBufferAttribute(d,p[2]),Mc.getNormal(Rh),v[0]=`${Math.round(R.x*l)},${Math.round(R.y*l)},${Math.round(R.z*l)}`,v[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,v[2]=`${Math.round(g.x*l)},${Math.round(g.y*l)},${Math.round(g.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let B=0;B<3;B++){const L=(B+1)%3,D=v[B],j=v[L],G=Mc[S[B]],O=Mc[S[L]],q=`${D}_${j}`,w=`${j}_${D}`;w in x&&x[w]?(Rh.dot(x[w].normal)<=u&&(M.push(G.x,G.y,G.z),M.push(O.x,O.y,O.z)),x[w]=null):q in x||(x[q]={index0:p[B],index1:p[L],normal:Rh.clone()})}}for(const T in x)if(x[T]){const{index0:R,index1:y}=x[T];xc.fromBufferAttribute(d,R),yc.fromBufferAttribute(d,y),M.push(xc.x,xc.y,xc.z),M.push(yc.x,yc.y,yc.z)}this.setAttribute("position",new Oi(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Vc extends Bi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,S=m+1,v=e/d,x=i/m,M=[],T=[],R=[],y=[];for(let g=0;g<S;g++){const B=g*x-h;for(let L=0;L<p;L++){const D=L*v-u;T.push(D,-B,0),R.push(0,0,1),y.push(L/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let B=0;B<d;B++){const L=B+p*g,D=B+p*(g+1),j=B+1+p*(g+1),G=B+1+p*g;M.push(L,D,G),M.push(D,j,G)}this.setIndex(M),this.setAttribute("position",new Oi(T,3)),this.setAttribute("normal",new Oi(R,3)),this.setAttribute("uv",new Oi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ky extends Dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kv,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qy extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jy extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class a0 extends gn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class $y extends a0{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Ch=new je,ev=new Q,nv=new Q;class tM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Od,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;ev.setFromMatrixPosition(e.matrixWorld),i.position.copy(ev),nv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(nv),i.updateMatrixWorld(),Ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class s0 extends t0{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class eM extends tM{constructor(){super(new s0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iv extends a0{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new eM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nM extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class av{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iM extends As{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function sv(o,e,i,s){const l=aM(s);switch(i){case Fv:return o*e;case Gv:return o*e/l.components*l.byteLength;case wd:return o*e/l.components*l.byteLength;case Vv:return o*e*2/l.components*l.byteLength;case Dd:return o*e*2/l.components*l.byteLength;case Hv:return o*e*3/l.components*l.byteLength;case Ei:return o*e*4/l.components*l.byteLength;case Ud:return o*e*4/l.components*l.byteLength;case Cc:case wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Jh:return Math.max(o,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(o,8)*Math.max(e,8)/2;case $h:case td:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ed:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case sd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case od:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ld:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case cd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ud:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case pd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case md:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Lc:case _d:case gd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Xv:case vd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Sd:case xd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function aM(o){switch(o){case Pi:case zv:return{byteLength:1,components:1};case Po:case Bv:case Fo:return{byteLength:2,components:1};case Rd:case Cd:return{byteLength:2,components:4};case Es:case Ad:case ca:return{byteLength:4,components:1};case Iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function r0(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function sM(o){const e=new WeakMap;function i(d,m){const p=d.array,S=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,S),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const S=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,S);else{v.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<v.length;M++){const T=v[x],R=v[M];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++x,v[x]=R)}v.length=x+1;for(let M=0,T=v.length;M<T;M++){const R=v[M];o.bufferSubData(p,R.start*S.BYTES_PER_ELEMENT,S,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var rM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SM=`#ifdef USE_IRIDESCENCE
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
#endif`,xM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wM=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,UM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YM=`#ifdef USE_GRADIENTMAP
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
}`,jM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,JM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,sE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,kE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jE=`#ifdef USE_SKINNING
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
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$E=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tT=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,hT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,pT=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ST=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,MT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,TT=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,CT=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,DT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,LT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:rM,alphahash_pars_fragment:oM,alphamap_fragment:lM,alphamap_pars_fragment:cM,alphatest_fragment:uM,alphatest_pars_fragment:fM,aomap_fragment:hM,aomap_pars_fragment:dM,batching_pars_vertex:pM,batching_vertex:mM,begin_vertex:_M,beginnormal_vertex:gM,bsdfs:vM,iridescence_fragment:SM,bumpmap_pars_fragment:xM,clipping_planes_fragment:yM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:EM,clipping_planes_vertex:TM,color_fragment:bM,color_pars_fragment:AM,color_pars_vertex:RM,color_vertex:CM,common:wM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:UM,displacementmap_pars_vertex:LM,displacementmap_vertex:NM,emissivemap_fragment:OM,emissivemap_pars_fragment:PM,colorspace_fragment:zM,colorspace_pars_fragment:BM,envmap_fragment:IM,envmap_common_pars_fragment:FM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:JM,envmap_vertex:VM,fog_vertex:XM,fog_pars_vertex:kM,fog_fragment:WM,fog_pars_fragment:qM,gradientmap_pars_fragment:YM,lightmap_pars_fragment:jM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:KM,lights_pars_begin:QM,lights_toon_fragment:$M,lights_toon_pars_fragment:tE,lights_phong_fragment:eE,lights_phong_pars_fragment:nE,lights_physical_fragment:iE,lights_physical_pars_fragment:aE,lights_fragment_begin:sE,lights_fragment_maps:rE,lights_fragment_end:oE,logdepthbuf_fragment:lE,logdepthbuf_pars_fragment:cE,logdepthbuf_pars_vertex:uE,logdepthbuf_vertex:fE,map_fragment:hE,map_pars_fragment:dE,map_particle_fragment:pE,map_particle_pars_fragment:mE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:gE,morphinstance_vertex:vE,morphcolor_vertex:SE,morphnormal_vertex:xE,morphtarget_pars_vertex:yE,morphtarget_vertex:ME,normal_fragment_begin:EE,normal_fragment_maps:TE,normal_pars_fragment:bE,normal_pars_vertex:AE,normal_vertex:RE,normalmap_pars_fragment:CE,clearcoat_normal_fragment_begin:wE,clearcoat_normal_fragment_maps:DE,clearcoat_pars_fragment:UE,iridescence_pars_fragment:LE,opaque_fragment:NE,packing:OE,premultiplied_alpha_fragment:PE,project_vertex:zE,dithering_fragment:BE,dithering_pars_fragment:IE,roughnessmap_fragment:FE,roughnessmap_pars_fragment:HE,shadowmap_pars_fragment:GE,shadowmap_pars_vertex:VE,shadowmap_vertex:XE,shadowmask_pars_fragment:kE,skinbase_vertex:WE,skinning_pars_vertex:qE,skinning_vertex:YE,skinnormal_vertex:jE,specularmap_fragment:ZE,specularmap_pars_fragment:KE,tonemapping_fragment:QE,tonemapping_pars_fragment:JE,transmission_fragment:$E,transmission_pars_fragment:tT,uv_pars_fragment:eT,uv_pars_vertex:nT,uv_vertex:iT,worldpos_vertex:aT,background_vert:sT,background_frag:rT,backgroundCube_vert:oT,backgroundCube_frag:lT,cube_vert:cT,cube_frag:uT,depth_vert:fT,depth_frag:hT,distanceRGBA_vert:dT,distanceRGBA_frag:pT,equirect_vert:mT,equirect_frag:_T,linedashed_vert:gT,linedashed_frag:vT,meshbasic_vert:ST,meshbasic_frag:xT,meshlambert_vert:yT,meshlambert_frag:MT,meshmatcap_vert:ET,meshmatcap_frag:TT,meshnormal_vert:bT,meshnormal_frag:AT,meshphong_vert:RT,meshphong_frag:CT,meshphysical_vert:wT,meshphysical_frag:DT,meshtoon_vert:UT,meshtoon_frag:LT,points_vert:NT,points_frag:OT,shadow_vert:PT,shadow_frag:zT,sprite_vert:BT,sprite_frag:IT},Ut={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ui={basic:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Nn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Nn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Nn([Ut.points,Ut.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Nn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Nn([Ut.common,Ut.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Nn([Ut.sprite,Ut.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Nn([Ut.common,Ut.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Nn([Ut.lights,Ut.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ui.physical={uniforms:Nn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Ec={r:0,b:0,g:0},_s=new zi,FT=new je;function HT(o,e,i,s,l,u,h){const d=new Ee(0);let m=u===!0?0:1,p,S,v=null,x=0,M=null;function T(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function R(L){let D=!1;const j=T(L);j===null?g(d,m):j&&j.isColor&&(g(j,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,D){const j=T(D);j&&(j.isCubeTexture||j.mapping===Hc)?(S===void 0&&(S=new Ni(new Vo(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:wr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(G,O,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),_s.copy(D.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),S.material.uniforms.envMap.value=j,S.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(FT.makeRotationFromEuler(_s)),S.material.toneMapped=Ce.getTransfer(j.colorSpace)!==Ie,(v!==j||x!==j.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,v=j,x=j.version,M=o.toneMapping),S.layers.enableAll(),L.unshift(S,S.geometry,S.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new Ni(new Vc(2,2),new qa({name:"BackgroundMaterial",uniforms:wr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(j.colorSpace)!==Ie,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(v!==j||x!==j.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=j,x=j.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,D){L.getRGB(Ec,$v(o)),s.buffers.color.setClear(Ec.r,Ec.g,Ec.b,D,h)}function B(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(d,m)},render:R,addToRenderList:y,dispose:B}}function GT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(C,H,lt,st,pt){let _t=!1;const P=v(st,lt,H);u!==P&&(u=P,p(u.object)),_t=M(C,st,lt,pt),_t&&T(C,st,lt,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(_t||h)&&(h=!1,D(C,H,lt,st),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function S(C){return o.deleteVertexArray(C)}function v(C,H,lt){const st=lt.wireframe===!0;let pt=s[C.id];pt===void 0&&(pt={},s[C.id]=pt);let _t=pt[H.id];_t===void 0&&(_t={},pt[H.id]=_t);let P=_t[st];return P===void 0&&(P=x(m()),_t[st]=P),P}function x(C){const H=[],lt=[],st=[];for(let pt=0;pt<i;pt++)H[pt]=0,lt[pt]=0,st[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:lt,attributeDivisors:st,object:C,attributes:{},index:null}}function M(C,H,lt,st){const pt=u.attributes,_t=H.attributes;let P=0;const K=lt.getAttributes();for(const Z in K)if(K[Z].location>=0){const Tt=pt[Z];let N=_t[Z];if(N===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),Tt===void 0||Tt.attribute!==N||N&&Tt.data!==N.data)return!0;P++}return u.attributesNum!==P||u.index!==st}function T(C,H,lt,st){const pt={},_t=H.attributes;let P=0;const K=lt.getAttributes();for(const Z in K)if(K[Z].location>=0){let Tt=_t[Z];Tt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Tt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Tt=C.instanceColor));const N={};N.attribute=Tt,Tt&&Tt.data&&(N.data=Tt.data),pt[Z]=N,P++}u.attributes=pt,u.attributesNum=P,u.index=st}function R(){const C=u.newAttributes;for(let H=0,lt=C.length;H<lt;H++)C[H]=0}function y(C){g(C,0)}function g(C,H){const lt=u.newAttributes,st=u.enabledAttributes,pt=u.attributeDivisors;lt[C]=1,st[C]===0&&(o.enableVertexAttribArray(C),st[C]=1),pt[C]!==H&&(o.vertexAttribDivisor(C,H),pt[C]=H)}function B(){const C=u.newAttributes,H=u.enabledAttributes;for(let lt=0,st=H.length;lt<st;lt++)H[lt]!==C[lt]&&(o.disableVertexAttribArray(lt),H[lt]=0)}function L(C,H,lt,st,pt,_t,P){P===!0?o.vertexAttribIPointer(C,H,lt,pt,_t):o.vertexAttribPointer(C,H,lt,st,pt,_t)}function D(C,H,lt,st){R();const pt=st.attributes,_t=lt.getAttributes(),P=H.defaultAttributeValues;for(const K in _t){const Z=_t[K];if(Z.location>=0){let xt=pt[K];if(xt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const Tt=xt.normalized,N=xt.itemSize,nt=e.get(xt);if(nt===void 0)continue;const St=nt.buffer,Y=nt.type,ft=nt.bytesPerElement,Mt=Y===o.INT||Y===o.UNSIGNED_INT||xt.gpuType===Ad;if(xt.isInterleavedBufferAttribute){const vt=xt.data,zt=vt.stride,Yt=xt.offset;if(vt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<Z.locationSize;Zt++)g(Z.location+Zt,vt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Zt=0;Zt<Z.locationSize;Zt++)y(Z.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Zt=0;Zt<Z.locationSize;Zt++)L(Z.location+Zt,N/Z.locationSize,Y,Tt,zt*ft,(Yt+N/Z.locationSize*Zt)*ft,Mt)}else{if(xt.isInstancedBufferAttribute){for(let vt=0;vt<Z.locationSize;vt++)g(Z.location+vt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let vt=0;vt<Z.locationSize;vt++)y(Z.location+vt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let vt=0;vt<Z.locationSize;vt++)L(Z.location+vt,N/Z.locationSize,Y,Tt,N*ft,N/Z.locationSize*vt*ft,Mt)}}else if(P!==void 0){const Tt=P[K];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(Z.location,Tt);break;case 3:o.vertexAttrib3fv(Z.location,Tt);break;case 4:o.vertexAttrib4fv(Z.location,Tt);break;default:o.vertexAttrib1fv(Z.location,Tt)}}}}B()}function j(){q();for(const C in s){const H=s[C];for(const lt in H){const st=H[lt];for(const pt in st)S(st[pt].object),delete st[pt];delete H[lt]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const lt in H){const st=H[lt];for(const pt in st)S(st[pt].object),delete st[pt];delete H[lt]}delete s[C.id]}function O(C){for(const H in s){const lt=s[H];if(lt[C.id]===void 0)continue;const st=lt[C.id];for(const pt in st)S(st[pt].object),delete st[pt];delete lt[C.id]}}function q(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:w,dispose:j,releaseStatesOfGeometry:G,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:y,disableUnusedAttributes:B}}function VT(o,e,i){let s;function l(p){s=p}function u(p,S){o.drawArrays(s,p,S),i.update(S,s,1)}function h(p,S,v){v!==0&&(o.drawArraysInstanced(s,p,S,v),i.update(S,s,v))}function d(p,S,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,S,0,v);let M=0;for(let T=0;T<v;T++)M+=S[T];i.update(M,s,1)}function m(p,S,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],S[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,S,0,x,0,v);let T=0;for(let R=0;R<v;R++)T+=S[R]*x[R];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function XT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Ei&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const q=O===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Pi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ca&&!q)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),j=T>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:B,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:j,maxSamples:G}}function kT(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Ga,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=S(v,x,0)},this.setState=function(v,x,M){const T=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,g=o.get(v);if(!l||T===null||T.length===0||u&&!y)u?S(null):p();else{const B=u?0:s,L=B*4;let D=g.clippingState||null;m.value=D,D=S(T,x,L,M);for(let j=0;j!==L;++j)D[j]=i[j];g.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(v,x,M,T){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,T!==!0||y===null){const g=M+R*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,D=M;L!==R;++L,D+=4)h.copy(v[L]).applyMatrix4(B,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function WT(o){let e=new WeakMap;function i(h,d){return d===Wh?h.mapping=Ar:d===qh&&(h.mapping=Rr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Wh||d===qh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Vy(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const yr=4,rv=[.125,.215,.35,.446,.526,.582],xs=20,wh=new s0,ov=new Ee;let Dh=null,Uh=0,Lh=0,Nh=!1;const vs=(1+Math.sqrt(5))/2,Sr=1/vs,lv=[new Q(-vs,Sr,0),new Q(vs,Sr,0),new Q(-Sr,0,vs),new Q(Sr,0,vs),new Q(0,vs,-Sr),new Q(0,vs,Sr),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],qT=new Q;class cv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=qT}=u;Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dh,Uh,Lh),this._renderer.xr.enabled=Nh,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ar||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Fo,format:Ei,colorSpace:Cr,depthBuffer:!1},l=uv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YT(u)),this._blurMaterial=jT(u,e,i)}return l}_compileMaterial(e){const i=new Ni(this._lodPlanes[0],e);this._renderer.compile(i,wh)}_sceneToCubeUV(e,i,s,l,u){const m=new fi(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(ov),v.toneMapping=ka,v.autoClear=!1;const T=new Kv({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),R=new Ni(new Vo,T);let y=!1;const g=e.background;g?g.isColor&&(T.color.copy(g),e.background=null,y=!0):(T.color.copy(ov),y=!0);for(let B=0;B<6;B++){const L=B%3;L===0?(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+S[B],u.y,u.z)):L===1?(m.up.set(0,0,p[B]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+S[B],u.z)):(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+S[B]));const D=this._cubeSize;Tc(l,L*D,B>2?D:0,D,D),v.setRenderTarget(l),y&&v.render(R,m),v.render(e,m)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=g}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ar||e.mapping===Rr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ni(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Tc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,wh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=lv[(l-u-1)%lv.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,v=new Ni(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*xs-1),R=u/T,y=isFinite(u)?1+Math.floor(S*R):xs;y>xs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${xs}`);const g=[];let B=0;for(let O=0;O<xs;++O){const q=O/R,w=Math.exp(-q*q/2);g.push(w),O===0?B+=w:O<y&&(B+=2*w)}for(let O=0;O<g.length;O++)g[O]=g[O]/B;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-s;const D=this._sizeLods[l],j=3*D*(l>L-yr?l-L+yr:0),G=4*(this._cubeSize-D);Tc(i,j,G,3*D,2*D),m.setRenderTarget(i),m.render(v,wh)}}function YT(o){const e=[],i=[],s=[];let l=o;const u=o-yr+1+rv.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-yr?m=rv[h-o+yr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),S=-p,v=1+p,x=[S,S,v,S,v,v,S,S,v,v,S,v],M=6,T=6,R=3,y=2,g=1,B=new Float32Array(R*T*M),L=new Float32Array(y*T*M),D=new Float32Array(g*T*M);for(let G=0;G<M;G++){const O=G%3*2/3-1,q=G>2?0:-1,w=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];B.set(w,R*T*G),L.set(x,y*T*G);const C=[G,G,G,G,G,G];D.set(C,g*T*G)}const j=new Bi;j.setAttribute("position",new di(B,R)),j.setAttribute("uv",new di(L,y)),j.setAttribute("faceIndex",new di(D,g)),e.push(j),l>yr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function uv(o,e,i){const s=new Ts(o,e,i);return s.texture.mapping=Hc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function jT(o,e,i){const s=new Float32Array(xs),l=new Q(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Pd(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function fv(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pd(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function hv(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Pd(){return`

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
	`}function ZT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Wh||m===qh,S=m===Ar||m===Rr;if(p||S){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new cv(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new cv(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function KT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Nc("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function QT(o,e,i,s){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,T=v.attributes.position;let R=0;if(M!==null){const B=M.array;R=M.version;for(let L=0,D=B.length;L<D;L+=3){const j=B[L+0],G=B[L+1],O=B[L+2];x.push(j,G,G,O,O,j)}}else if(T!==void 0){const B=T.array;R=T.version;for(let L=0,D=B.length/3-1;L<D;L+=3){const j=L+0,G=L+1,O=L+2;x.push(j,G,G,O,O,j)}}else return;const y=new(qv(x)?Jv:Qv)(x,1);y.version=R;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function S(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:S}}function JT(o,e,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(s,M,u,x*h),i.update(M,s,1)}function p(x,M,T){T!==0&&(o.drawElementsInstanced(s,M,u,x*h,T),i.update(M,s,T))}function S(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,x,0,T);let y=0;for(let g=0;g<T;g++)y+=M[g];i.update(y,s,1)}function v(x,M,T,R){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/h,M[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,x,0,R,0,T);let g=0;for(let B=0;B<T;B++)g+=M[B]*R[B];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=v}function $T(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function tb(o,e,i){const s=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=S!==void 0?S.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let C=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),R===!0&&(D=2),y===!0&&(D=3);let j=d.attributes.position.count*D,G=1;j>e.maxTextureSize&&(G=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const O=new Float32Array(j*G*4*v),q=new Yv(O,j,G,v);q.type=ca,q.needsUpdate=!0;const w=D*4;for(let H=0;H<v;H++){const lt=g[H],st=B[H],pt=L[H],_t=j*G*4*H;for(let P=0;P<lt.count;P++){const K=P*w;T===!0&&(l.fromBufferAttribute(lt,P),O[_t+K+0]=l.x,O[_t+K+1]=l.y,O[_t+K+2]=l.z,O[_t+K+3]=0),R===!0&&(l.fromBufferAttribute(st,P),O[_t+K+4]=l.x,O[_t+K+5]=l.y,O[_t+K+6]=l.z,O[_t+K+7]=0),y===!0&&(l.fromBufferAttribute(pt,P),O[_t+K+8]=l.x,O[_t+K+9]=l.y,O[_t+K+10]=l.z,O[_t+K+11]=pt.itemSize===4?l.w:1)}}x={count:v,texture:q,size:new ce(j,G)},s.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const R=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function eb(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,S=m.geometry,v=e.get(m,S);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const o0=new Wn,dv=new i0(1,1),l0=new Yv,c0=new by,u0=new e0,pv=[],mv=[],_v=new Float32Array(16),gv=new Float32Array(9),vv=new Float32Array(4);function Ur(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=pv[l];if(u===void 0&&(u=new Float32Array(l),pv[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function dn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Xc(o,e){let i=mv[e];i===void 0&&(i=new Int32Array(e),mv[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function nb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),dn(i,e)}}function ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),dn(i,e)}}function sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),dn(i,e)}}function rb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;vv.set(s),o.uniformMatrix2fv(this.addr,!1,vv),dn(i,s)}}function ob(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;gv.set(s),o.uniformMatrix3fv(this.addr,!1,gv),dn(i,s)}}function lb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;_v.set(s),o.uniformMatrix4fv(this.addr,!1,_v),dn(i,s)}}function cb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),dn(i,e)}}function fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),dn(i,e)}}function hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),dn(i,e)}}function db(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),dn(i,e)}}function mb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),dn(i,e)}}function _b(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),dn(i,e)}}function gb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(dv.compareFunction=Wv,u=dv):u=o0,i.setTexture2D(e||u,l)}function vb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||c0,l)}function Sb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||u0,l)}function xb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||l0,l)}function yb(o){switch(o){case 5126:return nb;case 35664:return ib;case 35665:return ab;case 35666:return sb;case 35674:return rb;case 35675:return ob;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return fb;case 35669:case 35673:return hb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return xb}}function Mb(o,e){o.uniform1fv(this.addr,e)}function Eb(o,e){const i=Ur(e,this.size,2);o.uniform2fv(this.addr,i)}function Tb(o,e){const i=Ur(e,this.size,3);o.uniform3fv(this.addr,i)}function bb(o,e){const i=Ur(e,this.size,4);o.uniform4fv(this.addr,i)}function Ab(o,e){const i=Ur(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Rb(o,e){const i=Ur(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Cb(o,e){const i=Ur(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function wb(o,e){o.uniform1iv(this.addr,e)}function Db(o,e){o.uniform2iv(this.addr,e)}function Ub(o,e){o.uniform3iv(this.addr,e)}function Lb(o,e){o.uniform4iv(this.addr,e)}function Nb(o,e){o.uniform1uiv(this.addr,e)}function Ob(o,e){o.uniform2uiv(this.addr,e)}function Pb(o,e){o.uniform3uiv(this.addr,e)}function zb(o,e){o.uniform4uiv(this.addr,e)}function Bb(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||o0,u[h])}function Ib(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||c0,u[h])}function Fb(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||u0,u[h])}function Hb(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||l0,u[h])}function Gb(o){switch(o){case 5126:return Mb;case 35664:return Eb;case 35665:return Tb;case 35666:return bb;case 35674:return Ab;case 35675:return Rb;case 35676:return Cb;case 5124:case 35670:return wb;case 35667:case 35671:return Db;case 35668:case 35672:return Ub;case 35669:case 35673:return Lb;case 5125:return Nb;case 36294:return Ob;case 36295:return Pb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Hb}}class Vb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=yb(i.type)}}class Xb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Gb(i.type)}}class kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Oh=/(\w+)(\])?(\[|\.)?/g;function Sv(o,e){o.seq.push(e),o.map[e.id]=e}function Wb(o,e,i){const s=o.name,l=s.length;for(Oh.lastIndex=0;;){const u=Oh.exec(s),h=Oh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Sv(i,p===void 0?new Vb(d,o,e):new Xb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new kb(d),Sv(i,v)),i=v}}}class Oc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Wb(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function xv(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const qb=37297;let Yb=0;function jb(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const yv=new le;function Zb(o){Ce._getMatrix(yv,Ce.workingColorSpace,o);const e=`mat3( ${yv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Pc:return[e,"LinearTransferOETF"];case Ie:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Mv(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+jb(o.getShaderSource(e),h)}else return l}function Kb(o,e){const i=Zb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Qb(o,e){let i;switch(e){case Kx:i="Linear";break;case Qx:i="Reinhard";break;case Jx:i="Cineon";break;case $x:i="ACESFilmic";break;case ey:i="AgX";break;case ny:i="Neutral";break;case ty:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new Q;function Jb(){Ce.getLuminanceCoefficients(bc);const o=bc.x.toFixed(4),e=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $b(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function tA(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function eA(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function No(o){return o!==""}function Ev(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(o){return o.replace(nA,aA)}const iA=new Map;function aA(o,e){let i=ue[e];if(i===void 0){const s=iA.get(e);if(s!==void 0)i=ue[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Md(i)}const sA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bv(o){return o.replace(sA,rA)}function rA(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Av(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Nv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===wx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===oa&&(e="SHADOWMAP_TYPE_VSM"),e}function lA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ar:case Rr:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function uA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ov:e="ENVMAP_BLENDING_MULTIPLY";break;case jx:e="ENVMAP_BLENDING_MIX";break;case Zx:e="ENVMAP_BLENDING_ADD";break}return e}function fA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function hA(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=oA(i),p=lA(i),S=cA(i),v=uA(i),x=fA(i),M=$b(i),T=tA(u),R=l.createProgram();let y,g,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),g.length>0&&(g+=`
`)):(y=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?ue.tonemapping_pars_fragment:"",i.toneMapping!==ka?Qb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Kb("linearToOutputTexel",i.outputColorSpace),Jb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),h=Md(h),h=Ev(h,i),h=Tv(h,i),d=Md(d),d=Ev(d,i),d=Tv(d,i),h=bv(h),d=bv(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=B+y+h,D=B+g+d,j=xv(l,l.VERTEX_SHADER,L),G=xv(l,l.FRAGMENT_SHADER,D);l.attachShader(R,j),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(H){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R).trim(),st=l.getShaderInfoLog(j).trim(),pt=l.getShaderInfoLog(G).trim();let _t=!0,P=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(_t=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,j,G);else{const K=Mv(l,j,"vertex"),Z=Mv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+lt+`
`+K+`
`+Z)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||pt==="")&&(P=!1);P&&(H.diagnostics={runnable:_t,programLog:lt,vertexShader:{log:st,prefix:y},fragmentShader:{log:pt,prefix:g}})}l.deleteShader(j),l.deleteShader(G),q=new Oc(l,R),w=eA(l,R)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,qb)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Yb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=j,this.fragmentShader=G,this}let dA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new mA(e),i.set(e,s)),s}}class mA{constructor(e){this.id=dA++,this.code=e,this.usedTimes=0}}function _A(o,e,i,s,l,u,h){const d=new jv,m=new pA,p=new Set,S=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,H,lt,st){const pt=lt.fog,_t=st.geometry,P=w.isMeshStandardMaterial?lt.environment:null,K=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),Z=K&&K.mapping===Hc?K.image.height:null,xt=T[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Tt=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,N=Tt!==void 0?Tt.length:0;let nt=0;_t.morphAttributes.position!==void 0&&(nt=1),_t.morphAttributes.normal!==void 0&&(nt=2),_t.morphAttributes.color!==void 0&&(nt=3);let St,Y,ft,Mt;if(xt){const Te=Ui[xt];St=Te.vertexShader,Y=Te.fragmentShader}else St=w.vertexShader,Y=w.fragmentShader,m.update(w),ft=m.getVertexShaderID(w),Mt=m.getFragmentShaderID(w);const vt=o.getRenderTarget(),zt=o.state.buffers.depth.getReversed(),Yt=st.isInstancedMesh===!0,Zt=st.isBatchedMesh===!0,Ve=!!w.map,He=!!w.matcap,fe=!!K,I=!!w.aoMap,bn=!!w.lightMap,he=!!w.bumpMap,_e=!!w.normalMap,Xt=!!w.displacementMap,De=!!w.emissiveMap,Vt=!!w.metalnessMap,U=!!w.roughnessMap,b=w.anisotropy>0,et=w.clearcoat>0,ut=w.dispersion>0,yt=w.iridescence>0,dt=w.sheen>0,Ht=w.transmission>0,Rt=b&&!!w.anisotropyMap,Kt=et&&!!w.clearcoatMap,Jt=et&&!!w.clearcoatNormalMap,bt=et&&!!w.clearcoatRoughnessMap,Bt=yt&&!!w.iridescenceMap,jt=yt&&!!w.iridescenceThicknessMap,Gt=dt&&!!w.sheenColorMap,Ot=dt&&!!w.sheenRoughnessMap,te=!!w.specularMap,se=!!w.specularColorMap,Ne=!!w.specularIntensityMap,X=Ht&&!!w.transmissionMap,Ct=Ht&&!!w.thicknessMap,ot=!!w.gradientMap,gt=!!w.alphaMap,At=w.alphaTest>0,wt=!!w.alphaHash,ee=!!w.extensions;let qe=ka;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(qe=o.toneMapping);const ln={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:Y,defines:w.defines,customVertexShaderID:ft,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Zt,batchingColor:Zt&&st._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&st.instanceColor!==null,instancingMorph:Yt&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Cr,alphaToCoverage:!!w.alphaToCoverage,map:Ve,matcap:He,envMap:fe,envMapMode:fe&&K.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:bn,bumpMap:he,normalMap:_e,displacementMap:x&&Xt,emissiveMap:De,normalMapObjectSpace:_e&&w.normalMapType===ry,normalMapTangentSpace:_e&&w.normalMapType===kv,metalnessMap:Vt,roughnessMap:U,anisotropy:b,anisotropyMap:Rt,clearcoat:et,clearcoatMap:Kt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:bt,dispersion:ut,iridescence:yt,iridescenceMap:Bt,iridescenceThicknessMap:jt,sheen:dt,sheenColorMap:Gt,sheenRoughnessMap:Ot,specularMap:te,specularColorMap:se,specularIntensityMap:Ne,transmission:Ht,transmissionMap:X,thicknessMap:Ct,gradientMap:ot,opaque:w.transparent===!1&&w.blending===Er&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:At,alphaHash:wt,combine:w.combine,mapUv:Ve&&R(w.map.channel),aoMapUv:I&&R(w.aoMap.channel),lightMapUv:bn&&R(w.lightMap.channel),bumpMapUv:he&&R(w.bumpMap.channel),normalMapUv:_e&&R(w.normalMap.channel),displacementMapUv:Xt&&R(w.displacementMap.channel),emissiveMapUv:De&&R(w.emissiveMap.channel),metalnessMapUv:Vt&&R(w.metalnessMap.channel),roughnessMapUv:U&&R(w.roughnessMap.channel),anisotropyMapUv:Rt&&R(w.anisotropyMap.channel),clearcoatMapUv:Kt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&R(w.sheenRoughnessMap.channel),specularMapUv:te&&R(w.specularMap.channel),specularColorMapUv:se&&R(w.specularColorMap.channel),specularIntensityMapUv:Ne&&R(w.specularIntensityMap.channel),transmissionMapUv:X&&R(w.transmissionMap.channel),thicknessMapUv:Ct&&R(w.thicknessMap.channel),alphaMapUv:gt&&R(w.alphaMap.channel),vertexTangents:!!_t.attributes.tangent&&(_e||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!_t.attributes.uv&&(Ve||gt),fog:!!pt,useFog:w.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:zt,skinning:st.isSkinnedMesh===!0,morphTargets:_t.morphAttributes.position!==void 0,morphNormals:_t.morphAttributes.normal!==void 0,morphColors:_t.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ve&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===Ie,decodeVideoTextureEmissive:De&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===Ie,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===la,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ee&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&w.extensions.multiDraw===!0||Zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function g(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)C.push(H),C.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(B(C,w),L(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function B(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=T[w.type];let H;if(C){const lt=Ui[C];H=Iy.clone(lt.uniforms)}else H=w.uniforms;return H}function j(w,C){let H;for(let lt=0,st=S.length;lt<st;lt++){const pt=S[lt];if(pt.cacheKey===C){H=pt,++H.usedTimes;break}}return H===void 0&&(H=new hA(o,C,w,u),S.push(H)),H}function G(w){if(--w.usedTimes===0){const C=S.indexOf(w);S[C]=S[S.length-1],S.pop(),w.destroy()}}function O(w){m.remove(w)}function q(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:j,releaseProgram:G,releaseShaderCache:O,programs:S,dispose:q}}function gA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function vA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Rv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Cv(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(v,x,M,T,R,y){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:T,renderOrder:v.renderOrder,z:R,group:y},o[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=R,g.group=y),e++,g}function d(v,x,M,T,R,y){const g=h(v,x,M,T,R,y);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,x,M,T,R,y){const g=h(v,x,M,T,R,y);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||vA),s.length>1&&s.sort(x||Rv),l.length>1&&l.sort(x||Rv)}function S(){for(let v=e,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:S,sort:p}}function SA(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new Cv,o.set(s,[h])):l>=u.length?(h=new Cv,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function xA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new Ee};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":i={color:new Ee,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=i,i}}}function yA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let MA=0;function EA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function TA(o){const e=new xA,i=yA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,u=new je,h=new je;function d(p){let S=0,v=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,T=0,R=0,y=0,g=0,B=0,L=0,D=0,j=0,G=0,O=0;p.sort(EA);for(let w=0,C=p.length;w<C;w++){const H=p[w],lt=H.color,st=H.intensity,pt=H.distance,_t=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)S+=lt.r*st,v+=lt.g*st,x+=lt.b*st;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],st);O++}else if(H.isDirectionalLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,Z=i.get(H);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=_t,s.directionalShadowMatrix[M]=H.shadow.matrix,B++}s.directional[M]=P,M++}else if(H.isSpotLight){const P=e.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(lt).multiplyScalar(st),P.distance=pt,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[R]=P;const K=H.shadow;if(H.map&&(s.spotLightMap[j]=H.map,j++,K.updateMatrices(H),H.castShadow&&G++),s.spotLightMatrix[R]=K.matrix,H.castShadow){const Z=i.get(H);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[R]=Z,s.spotShadowMap[R]=_t,D++}R++}else if(H.isRectAreaLight){const P=e.get(H);P.color.copy(lt).multiplyScalar(st),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=P,y++}else if(H.isPointLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const K=H.shadow,Z=i.get(H);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[T]=Z,s.pointShadowMap[T]=_t,s.pointShadowMatrix[T]=H.shadow.matrix,L++}s.point[T]=P,T++}else if(H.isHemisphereLight){const P=e.get(H);P.skyColor.copy(H.color).multiplyScalar(st),P.groundColor.copy(H.groundColor).multiplyScalar(st),s.hemi[g]=P,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=v,s.ambient[2]=x;const q=s.hash;(q.directionalLength!==M||q.pointLength!==T||q.spotLength!==R||q.rectAreaLength!==y||q.hemiLength!==g||q.numDirectionalShadows!==B||q.numPointShadows!==L||q.numSpotShadows!==D||q.numSpotMaps!==j||q.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=T,s.hemi.length=g,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+j-G,s.spotLightMap.length=j,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=O,q.directionalLength=M,q.pointLength=T,q.spotLength=R,q.rectAreaLength=y,q.hemiLength=g,q.numDirectionalShadows=B,q.numPointShadows=L,q.numSpotShadows=D,q.numSpotMaps=j,q.numLightProbes=O,s.version=MA++)}function m(p,S){let v=0,x=0,M=0,T=0,R=0;const y=S.matrixWorldInverse;for(let g=0,B=p.length;g<B;g++){const L=p[g];if(L.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(L.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(L.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function wv(o){const e=new TA(o),i=[],s=[];function l(S){p.camera=S,i.length=0,s.length=0}function u(S){i.push(S)}function h(S){s.push(S)}function d(){e.setup(i)}function m(S){e.setupView(i,S)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function bA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new wv(o),e.set(l,[d])):u>=h.length?(d=new wv(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RA=`uniform sampler2D shadow_pass;
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
}`;function CA(o,e,i){let s=new Od;const l=new ce,u=new ce,h=new $e,d=new Qy({depthPacking:sy}),m=new Jy,p={},S=i.maxTextureSize,v={[Wa]:kn,[kn]:Wa,[la]:la},x=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:AA,fragmentShader:RA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new Bi;T.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ni(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nv;let g=this.type;this.render=function(G,O,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Xa),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=g!==oa&&this.type===oa,pt=g===oa&&this.type!==oa;for(let _t=0,P=G.length;_t<P;_t++){const K=G[_t],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const xt=Z.getFrameExtents();if(l.multiply(xt),u.copy(Z.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/xt.x),l.x=u.x*xt.x,Z.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/xt.y),l.y=u.y*xt.y,Z.mapSize.y=u.y)),Z.map===null||st===!0||pt===!0){const N=this.type!==oa?{minFilter:Ti,magFilter:Ti}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ts(l.x,l.y,N),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const Tt=Z.getViewportCount();for(let N=0;N<Tt;N++){const nt=Z.getViewport(N);h.set(u.x*nt.x,u.y*nt.y,u.x*nt.z,u.y*nt.w),lt.viewport(h),Z.updateMatrices(K,N),s=Z.getFrustum(),D(O,q,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===oa&&B(Z,q),Z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,H)};function B(G,O){const q=e.update(R);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ts(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(O,null,q,x,R,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(O,null,q,M,R,null)}function L(G,O,q,w){let C=null;const H=q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)C=H;else if(C=q.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const lt=C.uuid,st=O.uuid;let pt=p[lt];pt===void 0&&(pt={},p[lt]=pt);let _t=pt[st];_t===void 0&&(_t=C.clone(),pt[st]=_t,O.addEventListener("dispose",j)),C=_t}if(C.visible=O.visible,C.wireframe=O.wireframe,w===oa?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:v[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=o.properties.get(C);lt.light=q}return C}function D(G,O,q,w,C){if(G.visible===!1)return;if(G.layers.test(O.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===oa)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,G.matrixWorld);const st=e.update(G),pt=G.material;if(Array.isArray(pt)){const _t=st.groups;for(let P=0,K=_t.length;P<K;P++){const Z=_t[P],xt=pt[Z.materialIndex];if(xt&&xt.visible){const Tt=L(G,xt,w,C);G.onBeforeShadow(o,G,O,q,st,Tt,Z),o.renderBufferDirect(q,null,st,Tt,G,Z),G.onAfterShadow(o,G,O,q,st,Tt,Z)}}}else if(pt.visible){const _t=L(G,pt,w,C);G.onBeforeShadow(o,G,O,q,st,_t,null),o.renderBufferDirect(q,null,st,_t,G,null),G.onAfterShadow(o,G,O,q,st,_t,null)}}const lt=G.children;for(let st=0,pt=lt.length;st<pt;st++)D(lt[st],O,q,w,C)}function j(G){G.target.removeEventListener("dispose",j);for(const q in p){const w=p[q],C=G.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const wA={[Ih]:Fh,[Hh]:Xh,[Gh]:kh,[br]:Vh,[Fh]:Ih,[Xh]:Hh,[kh]:Gh,[Vh]:br};function DA(o,e){function i(){let X=!1;const Ct=new $e;let ot=null;const gt=new $e(0,0,0,0);return{setMask:function(At){ot!==At&&!X&&(o.colorMask(At,At,At,At),ot=At)},setLocked:function(At){X=At},setClear:function(At,wt,ee,qe,ln){ln===!0&&(At*=qe,wt*=qe,ee*=qe),Ct.set(At,wt,ee,qe),gt.equals(Ct)===!1&&(o.clearColor(At,wt,ee,qe),gt.copy(Ct))},reset:function(){X=!1,ot=null,gt.set(-1,0,0,0)}}}function s(){let X=!1,Ct=!1,ot=null,gt=null,At=null;return{setReversed:function(wt){if(Ct!==wt){const ee=e.get("EXT_clip_control");wt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),Ct=wt;const qe=At;At=null,this.setClear(qe)}},getReversed:function(){return Ct},setTest:function(wt){wt?vt(o.DEPTH_TEST):zt(o.DEPTH_TEST)},setMask:function(wt){ot!==wt&&!X&&(o.depthMask(wt),ot=wt)},setFunc:function(wt){if(Ct&&(wt=wA[wt]),gt!==wt){switch(wt){case Ih:o.depthFunc(o.NEVER);break;case Fh:o.depthFunc(o.ALWAYS);break;case Hh:o.depthFunc(o.LESS);break;case br:o.depthFunc(o.LEQUAL);break;case Gh:o.depthFunc(o.EQUAL);break;case Vh:o.depthFunc(o.GEQUAL);break;case Xh:o.depthFunc(o.GREATER);break;case kh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=wt}},setLocked:function(wt){X=wt},setClear:function(wt){At!==wt&&(Ct&&(wt=1-wt),o.clearDepth(wt),At=wt)},reset:function(){X=!1,ot=null,gt=null,At=null,Ct=!1}}}function l(){let X=!1,Ct=null,ot=null,gt=null,At=null,wt=null,ee=null,qe=null,ln=null;return{setTest:function(Te){X||(Te?vt(o.STENCIL_TEST):zt(o.STENCIL_TEST))},setMask:function(Te){Ct!==Te&&!X&&(o.stencilMask(Te),Ct=Te)},setFunc:function(Te,vn,pi){(ot!==Te||gt!==vn||At!==pi)&&(o.stencilFunc(Te,vn,pi),ot=Te,gt=vn,At=pi)},setOp:function(Te,vn,pi){(wt!==Te||ee!==vn||qe!==pi)&&(o.stencilOp(Te,vn,pi),wt=Te,ee=vn,qe=pi)},setLocked:function(Te){X=Te},setClear:function(Te){ln!==Te&&(o.clearStencil(Te),ln=Te)},reset:function(){X=!1,Ct=null,ot=null,gt=null,At=null,wt=null,ee=null,qe=null,ln=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let S={},v={},x=new WeakMap,M=[],T=null,R=!1,y=null,g=null,B=null,L=null,D=null,j=null,G=null,O=new Ee(0,0,0),q=0,w=!1,C=null,H=null,lt=null,st=null,pt=null;const _t=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=K>=2);let xt=null,Tt={};const N=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),St=new $e().fromArray(N),Y=new $e().fromArray(nt);function ft(X,Ct,ot,gt){const At=new Uint8Array(4),wt=o.createTexture();o.bindTexture(X,wt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ee=0;ee<ot;ee++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Ct+ee,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return wt}const Mt={};Mt[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),vt(o.DEPTH_TEST),h.setFunc(br),he(!1),_e(Rg),vt(o.CULL_FACE),I(Xa);function vt(X){S[X]!==!0&&(o.enable(X),S[X]=!0)}function zt(X){S[X]!==!1&&(o.disable(X),S[X]=!1)}function Yt(X,Ct){return v[X]!==Ct?(o.bindFramebuffer(X,Ct),v[X]=Ct,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ct),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Zt(X,Ct){let ot=M,gt=!1;if(X){ot=x.get(Ct),ot===void 0&&(ot=[],x.set(Ct,ot));const At=X.textures;if(ot.length!==At.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let wt=0,ee=At.length;wt<ee;wt++)ot[wt]=o.COLOR_ATTACHMENT0+wt;ot.length=At.length,gt=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,gt=!0);gt&&o.drawBuffers(ot)}function Ve(X){return T!==X?(o.useProgram(X),T=X,!0):!1}const He={[Ss]:o.FUNC_ADD,[Ux]:o.FUNC_SUBTRACT,[Lx]:o.FUNC_REVERSE_SUBTRACT};He[Nx]=o.MIN,He[Ox]=o.MAX;const fe={[Px]:o.ZERO,[zx]:o.ONE,[Bx]:o.SRC_COLOR,[zh]:o.SRC_ALPHA,[Xx]:o.SRC_ALPHA_SATURATE,[Gx]:o.DST_COLOR,[Fx]:o.DST_ALPHA,[Ix]:o.ONE_MINUS_SRC_COLOR,[Bh]:o.ONE_MINUS_SRC_ALPHA,[Vx]:o.ONE_MINUS_DST_COLOR,[Hx]:o.ONE_MINUS_DST_ALPHA,[kx]:o.CONSTANT_COLOR,[Wx]:o.ONE_MINUS_CONSTANT_COLOR,[qx]:o.CONSTANT_ALPHA,[Yx]:o.ONE_MINUS_CONSTANT_ALPHA};function I(X,Ct,ot,gt,At,wt,ee,qe,ln,Te){if(X===Xa){R===!0&&(zt(o.BLEND),R=!1);return}if(R===!1&&(vt(o.BLEND),R=!0),X!==Dx){if(X!==y||Te!==w){if((g!==Ss||D!==Ss)&&(o.blendEquation(o.FUNC_ADD),g=Ss,D=Ss),Te)switch(X){case Er:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cg:o.blendFunc(o.ONE,o.ONE);break;case wg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Dg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Er:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case wg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Dg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}B=null,L=null,j=null,G=null,O.set(0,0,0),q=0,y=X,w=Te}return}At=At||Ct,wt=wt||ot,ee=ee||gt,(Ct!==g||At!==D)&&(o.blendEquationSeparate(He[Ct],He[At]),g=Ct,D=At),(ot!==B||gt!==L||wt!==j||ee!==G)&&(o.blendFuncSeparate(fe[ot],fe[gt],fe[wt],fe[ee]),B=ot,L=gt,j=wt,G=ee),(qe.equals(O)===!1||ln!==q)&&(o.blendColor(qe.r,qe.g,qe.b,ln),O.copy(qe),q=ln),y=X,w=!1}function bn(X,Ct){X.side===la?zt(o.CULL_FACE):vt(o.CULL_FACE);let ot=X.side===kn;Ct&&(ot=!ot),he(ot),X.blending===Er&&X.transparent===!1?I(Xa):I(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const gt=X.stencilWrite;d.setTest(gt),gt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),De(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):zt(o.SAMPLE_ALPHA_TO_COVERAGE)}function he(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function _e(X){X!==Rx?(vt(o.CULL_FACE),X!==H&&(X===Rg?o.cullFace(o.BACK):X===Cx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):zt(o.CULL_FACE),H=X}function Xt(X){X!==lt&&(P&&o.lineWidth(X),lt=X)}function De(X,Ct,ot){X?(vt(o.POLYGON_OFFSET_FILL),(st!==Ct||pt!==ot)&&(o.polygonOffset(Ct,ot),st=Ct,pt=ot)):zt(o.POLYGON_OFFSET_FILL)}function Vt(X){X?vt(o.SCISSOR_TEST):zt(o.SCISSOR_TEST)}function U(X){X===void 0&&(X=o.TEXTURE0+_t-1),xt!==X&&(o.activeTexture(X),xt=X)}function b(X,Ct,ot){ot===void 0&&(xt===null?ot=o.TEXTURE0+_t-1:ot=xt);let gt=Tt[ot];gt===void 0&&(gt={type:void 0,texture:void 0},Tt[ot]=gt),(gt.type!==X||gt.texture!==Ct)&&(xt!==ot&&(o.activeTexture(ot),xt=ot),o.bindTexture(X,Ct||Mt[X]),gt.type=X,gt.texture=Ct)}function et(){const X=Tt[xt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ut(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Jt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(X){St.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Ot(X){Y.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Y.copy(X))}function te(X,Ct){let ot=p.get(Ct);ot===void 0&&(ot=new WeakMap,p.set(Ct,ot));let gt=ot.get(X);gt===void 0&&(gt=o.getUniformBlockIndex(Ct,X.name),ot.set(X,gt))}function se(X,Ct){const gt=p.get(Ct).get(X);m.get(Ct)!==gt&&(o.uniformBlockBinding(Ct,gt,X.__bindingPointIndex),m.set(Ct,gt))}function Ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},xt=null,Tt={},v={},x=new WeakMap,M=[],T=null,R=!1,y=null,g=null,B=null,L=null,D=null,j=null,G=null,O=new Ee(0,0,0),q=0,w=!1,C=null,H=null,lt=null,st=null,pt=null,St.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:vt,disable:zt,bindFramebuffer:Yt,drawBuffers:Zt,useProgram:Ve,setBlending:I,setMaterial:bn,setFlipSided:he,setCullFace:_e,setLineWidth:Xt,setPolygonOffset:De,setScissorTest:Vt,activeTexture:U,bindTexture:b,unbindTexture:et,compressedTexImage2D:ut,compressedTexImage3D:yt,texImage2D:Bt,texImage3D:jt,updateUBOMapping:te,uniformBlockBinding:se,texStorage2D:Jt,texStorage3D:bt,texSubImage2D:dt,texSubImage3D:Ht,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Kt,scissor:Gt,viewport:Ot,reset:Ne}}function UA(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ce,S=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,b){return M?new OffscreenCanvas(U,b):Bc("canvas")}function R(U,b,et){let ut=1;const yt=Vt(U);if((yt.width>et||yt.height>et)&&(ut=et/Math.max(yt.width,yt.height)),ut<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(ut*yt.width),Ht=Math.floor(ut*yt.height);v===void 0&&(v=T(dt,Ht));const Rt=b?T(dt,Ht):v;return Rt.width=dt,Rt.height=Ht,Rt.getContext("2d").drawImage(U,0,0,dt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+dt+"x"+Ht+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function g(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,b,et,ut,yt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=b;if(b===o.RED&&(et===o.FLOAT&&(dt=o.R32F),et===o.HALF_FLOAT&&(dt=o.R16F),et===o.UNSIGNED_BYTE&&(dt=o.R8)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.R8UI),et===o.UNSIGNED_SHORT&&(dt=o.R16UI),et===o.UNSIGNED_INT&&(dt=o.R32UI),et===o.BYTE&&(dt=o.R8I),et===o.SHORT&&(dt=o.R16I),et===o.INT&&(dt=o.R32I)),b===o.RG&&(et===o.FLOAT&&(dt=o.RG32F),et===o.HALF_FLOAT&&(dt=o.RG16F),et===o.UNSIGNED_BYTE&&(dt=o.RG8)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RG8UI),et===o.UNSIGNED_SHORT&&(dt=o.RG16UI),et===o.UNSIGNED_INT&&(dt=o.RG32UI),et===o.BYTE&&(dt=o.RG8I),et===o.SHORT&&(dt=o.RG16I),et===o.INT&&(dt=o.RG32I)),b===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),et===o.UNSIGNED_INT&&(dt=o.RGB32UI),et===o.BYTE&&(dt=o.RGB8I),et===o.SHORT&&(dt=o.RGB16I),et===o.INT&&(dt=o.RGB32I)),b===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),et===o.UNSIGNED_INT&&(dt=o.RGBA32UI),et===o.BYTE&&(dt=o.RGBA8I),et===o.SHORT&&(dt=o.RGBA16I),et===o.INT&&(dt=o.RGBA32I)),b===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),b===o.RGBA){const Ht=yt?Pc:Ce.getTransfer(ut);et===o.FLOAT&&(dt=o.RGBA32F),et===o.HALF_FLOAT&&(dt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(dt=Ht===Ie?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function D(U,b){let et;return U?b===null||b===Es||b===zo?et=o.DEPTH24_STENCIL8:b===ca?et=o.DEPTH32F_STENCIL8:b===Po&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Es||b===zo?et=o.DEPTH_COMPONENT24:b===ca?et=o.DEPTH_COMPONENT32F:b===Po&&(et=o.DEPTH_COMPONENT16),et}function j(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ti&&U.minFilter!==Li?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function G(U){const b=U.target;b.removeEventListener("dispose",G),q(b),b.isVideoTexture&&S.delete(b)}function O(U){const b=U.target;b.removeEventListener("dispose",O),C(b)}function q(U){const b=s.get(U);if(b.__webglInit===void 0)return;const et=U.source,ut=x.get(et);if(ut){const yt=ut[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(U),Object.keys(ut).length===0&&x.delete(et)}s.remove(U)}function w(U){const b=s.get(U);o.deleteTexture(b.__webglTexture);const et=U.source,ut=x.get(et);delete ut[b.__cacheKey],h.memory.textures--}function C(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(b.__webglFramebuffer[ut]))for(let yt=0;yt<b.__webglFramebuffer[ut].length;yt++)o.deleteFramebuffer(b.__webglFramebuffer[ut][yt]);else o.deleteFramebuffer(b.__webglFramebuffer[ut]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ut])}else{if(Array.isArray(b.__webglFramebuffer))for(let ut=0;ut<b.__webglFramebuffer.length;ut++)o.deleteFramebuffer(b.__webglFramebuffer[ut]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ut=0;ut<b.__webglColorRenderbuffer.length;ut++)b.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ut]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=U.textures;for(let ut=0,yt=et.length;ut<yt;ut++){const dt=s.get(et[ut]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(et[ut])}s.remove(U)}let H=0;function lt(){H=0}function st(){const U=H;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function pt(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function _t(U,b){const et=s.get(U);if(U.isVideoTexture&&Xt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const ut=U.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(et,U,b);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function P(U,b){const et=s.get(U);if(U.version>0&&et.__version!==U.version){Y(et,U,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function K(U,b){const et=s.get(U);if(U.version>0&&et.__version!==U.version){Y(et,U,b);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function Z(U,b){const et=s.get(U);if(U.version>0&&et.__version!==U.version){ft(et,U,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const xt={[Yh]:o.REPEAT,[ys]:o.CLAMP_TO_EDGE,[jh]:o.MIRRORED_REPEAT},Tt={[Ti]:o.NEAREST,[iy]:o.NEAREST_MIPMAP_NEAREST,[$l]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[ih]:o.LINEAR_MIPMAP_NEAREST,[Ms]:o.LINEAR_MIPMAP_LINEAR},N={[oy]:o.NEVER,[dy]:o.ALWAYS,[ly]:o.LESS,[Wv]:o.LEQUAL,[cy]:o.EQUAL,[hy]:o.GEQUAL,[uy]:o.GREATER,[fy]:o.NOTEQUAL};function nt(U,b){if(b.type===ca&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Li||b.magFilter===ih||b.magFilter===$l||b.magFilter===Ms||b.minFilter===Li||b.minFilter===ih||b.minFilter===$l||b.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,xt[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,xt[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,xt[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Tt[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Tt[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ti||b.minFilter!==$l&&b.minFilter!==Ms||b.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function St(U,b){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",G));const ut=b.source;let yt=x.get(ut);yt===void 0&&(yt={},x.set(ut,yt));const dt=pt(b);if(dt!==U.__cacheKey){yt[dt]===void 0&&(yt[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),yt[dt].usedTimes++;const Ht=yt[U.__cacheKey];Ht!==void 0&&(yt[U.__cacheKey].usedTimes--,Ht.usedTimes===0&&w(b)),U.__cacheKey=dt,U.__webglTexture=yt[dt].texture}return et}function Y(U,b,et){let ut=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ut=o.TEXTURE_3D);const yt=St(U,b),dt=b.source;i.bindTexture(ut,U.__webglTexture,o.TEXTURE0+et);const Ht=s.get(dt);if(dt.version!==Ht.__version||yt===!0){i.activeTexture(o.TEXTURE0+et);const Rt=Ce.getPrimaries(Ce.workingColorSpace),Kt=b.colorSpace===Va?null:Ce.getPrimaries(b.colorSpace),Jt=b.colorSpace===Va||Rt===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let bt=R(b.image,!1,l.maxTextureSize);bt=De(b,bt);const Bt=u.convert(b.format,b.colorSpace),jt=u.convert(b.type);let Gt=L(b.internalFormat,Bt,jt,b.colorSpace,b.isVideoTexture);nt(ut,b);let Ot;const te=b.mipmaps,se=b.isVideoTexture!==!0,Ne=Ht.__version===void 0||yt===!0,X=dt.dataReady,Ct=j(b,bt);if(b.isDepthTexture)Gt=D(b.format===Io,b.type),Ne&&(se?i.texStorage2D(o.TEXTURE_2D,1,Gt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,bt.width,bt.height,0,Bt,jt,null));else if(b.isDataTexture)if(te.length>0){se&&Ne&&i.texStorage2D(o.TEXTURE_2D,Ct,Gt,te[0].width,te[0].height);for(let ot=0,gt=te.length;ot<gt;ot++)Ot=te[ot],se?X&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ot.width,Ot.height,Bt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,ot,Gt,Ot.width,Ot.height,0,Bt,jt,Ot.data);b.generateMipmaps=!1}else se?(Ne&&i.texStorage2D(o.TEXTURE_2D,Ct,Gt,bt.width,bt.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,Bt,jt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,bt.width,bt.height,0,Bt,jt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){se&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Gt,te[0].width,te[0].height,bt.depth);for(let ot=0,gt=te.length;ot<gt;ot++)if(Ot=te[ot],b.format!==Ei)if(Bt!==null)if(se){if(X)if(b.layerUpdates.size>0){const At=sv(Ot.width,Ot.height,b.format,b.type);for(const wt of b.layerUpdates){const ee=Ot.data.subarray(wt*At/Ot.data.BYTES_PER_ELEMENT,(wt+1)*At/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,wt,Ot.width,Ot.height,1,Bt,ee)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ot.width,Ot.height,bt.depth,Bt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Gt,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ot.width,Ot.height,bt.depth,Bt,jt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,Gt,Ot.width,Ot.height,bt.depth,0,Bt,jt,Ot.data)}else{se&&Ne&&i.texStorage2D(o.TEXTURE_2D,Ct,Gt,te[0].width,te[0].height);for(let ot=0,gt=te.length;ot<gt;ot++)Ot=te[ot],b.format!==Ei?Bt!==null?se?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Ot.width,Ot.height,Bt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,Gt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?X&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ot.width,Ot.height,Bt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,ot,Gt,Ot.width,Ot.height,0,Bt,jt,Ot.data)}else if(b.isDataArrayTexture)if(se){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Gt,bt.width,bt.height,bt.depth),X)if(b.layerUpdates.size>0){const ot=sv(bt.width,bt.height,b.format,b.type);for(const gt of b.layerUpdates){const At=bt.data.subarray(gt*ot/bt.data.BYTES_PER_ELEMENT,(gt+1)*ot/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,Bt,jt,At)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Bt,jt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,bt.width,bt.height,bt.depth,0,Bt,jt,bt.data);else if(b.isData3DTexture)se?(Ne&&i.texStorage3D(o.TEXTURE_3D,Ct,Gt,bt.width,bt.height,bt.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Bt,jt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,bt.width,bt.height,bt.depth,0,Bt,jt,bt.data);else if(b.isFramebufferTexture){if(Ne)if(se)i.texStorage2D(o.TEXTURE_2D,Ct,Gt,bt.width,bt.height);else{let ot=bt.width,gt=bt.height;for(let At=0;At<Ct;At++)i.texImage2D(o.TEXTURE_2D,At,Gt,ot,gt,0,Bt,jt,null),ot>>=1,gt>>=1}}else if(te.length>0){if(se&&Ne){const ot=Vt(te[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Gt,ot.width,ot.height)}for(let ot=0,gt=te.length;ot<gt;ot++)Ot=te[ot],se?X&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Bt,jt,Ot):i.texImage2D(o.TEXTURE_2D,ot,Gt,Bt,jt,Ot);b.generateMipmaps=!1}else if(se){if(Ne){const ot=Vt(bt);i.texStorage2D(o.TEXTURE_2D,Ct,Gt,ot.width,ot.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,jt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Bt,jt,bt);y(b)&&g(ut),Ht.__version=dt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ft(U,b,et){if(b.image.length!==6)return;const ut=St(U,b),yt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const dt=s.get(yt);if(yt.version!==dt.__version||ut===!0){i.activeTexture(o.TEXTURE0+et);const Ht=Ce.getPrimaries(Ce.workingColorSpace),Rt=b.colorSpace===Va?null:Ce.getPrimaries(b.colorSpace),Kt=b.colorSpace===Va||Ht===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Bt=[];for(let gt=0;gt<6;gt++)!Jt&&!bt?Bt[gt]=R(b.image[gt],!0,l.maxCubemapSize):Bt[gt]=bt?b.image[gt].image:b.image[gt],Bt[gt]=De(b,Bt[gt]);const jt=Bt[0],Gt=u.convert(b.format,b.colorSpace),Ot=u.convert(b.type),te=L(b.internalFormat,Gt,Ot,b.colorSpace),se=b.isVideoTexture!==!0,Ne=dt.__version===void 0||ut===!0,X=yt.dataReady;let Ct=j(b,jt);nt(o.TEXTURE_CUBE_MAP,b);let ot;if(Jt){se&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,te,jt.width,jt.height);for(let gt=0;gt<6;gt++){ot=Bt[gt].mipmaps;for(let At=0;At<ot.length;At++){const wt=ot[At];b.format!==Ei?Gt!==null?se?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,0,0,wt.width,wt.height,Gt,wt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,te,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,0,0,wt.width,wt.height,Gt,Ot,wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,te,wt.width,wt.height,0,Gt,Ot,wt.data)}}}else{if(ot=b.mipmaps,se&&Ne){ot.length>0&&Ct++;const gt=Vt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,te,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){se?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Bt[gt].width,Bt[gt].height,Gt,Ot,Bt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,te,Bt[gt].width,Bt[gt].height,0,Gt,Ot,Bt[gt].data);for(let At=0;At<ot.length;At++){const ee=ot[At].image[gt].image;se?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,0,0,ee.width,ee.height,Gt,Ot,ee.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,te,ee.width,ee.height,0,Gt,Ot,ee.data)}}else{se?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Gt,Ot,Bt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,te,Gt,Ot,Bt[gt]);for(let At=0;At<ot.length;At++){const wt=ot[At];se?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,0,0,Gt,Ot,wt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,te,Gt,Ot,wt.image[gt])}}}y(b)&&g(o.TEXTURE_CUBE_MAP),dt.__version=yt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Mt(U,b,et,ut,yt,dt){const Ht=u.convert(et.format,et.colorSpace),Rt=u.convert(et.type),Kt=L(et.internalFormat,Ht,Rt,et.colorSpace),Jt=s.get(b),bt=s.get(et);if(bt.__renderTarget=b,!Jt.__hasExternalTextures){const Bt=Math.max(1,b.width>>dt),jt=Math.max(1,b.height>>dt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,dt,Kt,Bt,jt,b.depth,0,Ht,Rt,null):i.texImage2D(yt,dt,Kt,Bt,jt,0,Ht,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),_e(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,yt,bt.__webglTexture,0,he(b)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,yt,bt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(U,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const ut=b.depthTexture,yt=ut&&ut.isDepthTexture?ut.type:null,dt=D(b.stencilBuffer,yt),Ht=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=he(b);_e(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,dt,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,dt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,dt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,U)}else{const ut=b.textures;for(let yt=0;yt<ut.length;yt++){const dt=ut[yt],Ht=u.convert(dt.format,dt.colorSpace),Rt=u.convert(dt.type),Kt=L(dt.internalFormat,Ht,Rt,dt.colorSpace),Jt=he(b);et&&_e(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Kt,b.width,b.height):_e(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Jt,Kt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function zt(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=s.get(b.depthTexture);ut.__renderTarget=b,(!ut.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_t(b.depthTexture,0);const yt=ut.__webglTexture,dt=he(b);if(b.depthTexture.format===Bo)_e(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(b.depthTexture.format===Io)_e(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Yt(U){const b=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const ut=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ut){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ut.removeEventListener("dispose",yt)};ut.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=ut}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ut=U.texture.mipmaps;ut&&ut.length>0?zt(b.__webglFramebuffer[0],U):zt(b.__webglFramebuffer,U)}else if(et){b.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ut]),b.__webglDepthbuffer[ut]===void 0)b.__webglDepthbuffer[ut]=o.createRenderbuffer(),vt(b.__webglDepthbuffer[ut],U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,dt)}}else{const ut=U.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),vt(b.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(U,b,et){const ut=s.get(U);b!==void 0&&Mt(ut.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Yt(U)}function Ve(U){const b=U.texture,et=s.get(U),ut=s.get(b);U.addEventListener("dispose",O);const yt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,Ht=yt.length>1;if(Ht||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=b.version,h.memory.textures++),dt){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)et.__webglFramebuffer[Rt][Kt]=o.createFramebuffer()}else et.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let Rt=0,Kt=yt.length;Rt<Kt;Rt++){const Jt=s.get(yt[Rt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&_e(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<yt.length;Rt++){const Kt=yt[Rt];et.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const Jt=u.convert(Kt.format,Kt.colorSpace),bt=u.convert(Kt.type),Bt=L(Kt.internalFormat,Jt,bt,Kt.colorSpace,U.isXRRenderTarget===!0),jt=he(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Bt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),vt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),nt(o.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Mt(et.__webglFramebuffer[Rt][Kt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Kt);else Mt(et.__webglFramebuffer[Rt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(b)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let Rt=0,Kt=yt.length;Rt<Kt;Rt++){const Jt=yt[Rt],bt=s.get(Jt);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),nt(o.TEXTURE_2D,Jt),Mt(et.__webglFramebuffer,U,Jt,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,0),y(Jt)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ut.__webglTexture),nt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Mt(et.__webglFramebuffer[Kt],U,b,o.COLOR_ATTACHMENT0,Rt,Kt);else Mt(et.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,Rt,0);y(b)&&g(Rt),i.unbindTexture()}U.depthBuffer&&Yt(U)}function He(U){const b=U.textures;for(let et=0,ut=b.length;et<ut;et++){const yt=b[et];if(y(yt)){const dt=B(U),Ht=s.get(yt).__webglTexture;i.bindTexture(dt,Ht),g(dt),i.unbindTexture()}}}const fe=[],I=[];function bn(U){if(U.samples>0){if(_e(U)===!1){const b=U.textures,et=U.width,ut=U.height;let yt=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=s.get(U),Rt=b.length>1;if(Rt)for(let Jt=0;Jt<b.length;Jt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);const Kt=U.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Jt=0;Jt<b.length;Jt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[Jt]);const bt=s.get(b[Jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,et,ut,0,0,et,ut,yt,o.NEAREST),m===!0&&(fe.length=0,I.length=0,fe.push(o.COLOR_ATTACHMENT0+Jt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(fe.push(dt),I.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Jt=0;Jt<b.length;Jt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[Jt]);const bt=s.get(b[Jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function he(U){return Math.min(l.maxSamples,U.samples)}function _e(U){const b=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xt(U){const b=h.render.frame;S.get(U)!==b&&(S.set(U,b),U.update())}function De(U,b){const et=U.colorSpace,ut=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Cr&&et!==Va&&(Ce.getTransfer(et)===Ie?(ut!==Ei||yt!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function Vt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=lt,this.setTexture2D=_t,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=Zt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=_e}function LA(o,e){function i(s,l=Va){let u;const h=Ce.getTransfer(l);if(s===Pi)return o.UNSIGNED_BYTE;if(s===Rd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Cd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Iv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===zv)return o.BYTE;if(s===Bv)return o.SHORT;if(s===Po)return o.UNSIGNED_SHORT;if(s===Ad)return o.INT;if(s===Es)return o.UNSIGNED_INT;if(s===ca)return o.FLOAT;if(s===Fo)return o.HALF_FLOAT;if(s===Fv)return o.ALPHA;if(s===Hv)return o.RGB;if(s===Ei)return o.RGBA;if(s===Bo)return o.DEPTH_COMPONENT;if(s===Io)return o.DEPTH_STENCIL;if(s===Gv)return o.RED;if(s===wd)return o.RED_INTEGER;if(s===Vv)return o.RG;if(s===Dd)return o.RG_INTEGER;if(s===Ud)return o.RGBA_INTEGER;if(s===Cc||s===wc||s===Dc||s===Uc)if(h===Ie)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Cc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Cc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Zh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===td||s===ed)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===$h||s===td)return h===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===ed)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===nd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===id)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===od)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ld)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ud)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===md)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lc||s===_d||s===gd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Lc)return h===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_d)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xv||s===vd||s===Sd||s===xd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Lc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===vd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const NA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Wn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new qa({vertexShader:NA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new Vc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zA extends As{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,S=null,v=null,x=null,M=null,T=null;const R=new PA,y=i.getContextAttributes();let g=null,B=null;const L=[],D=[],j=new ce;let G=null;const O=new fi;O.viewport=new $e;const q=new fi;q.viewport=new $e;const w=[O,q],C=new nM;let H=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ft=L[Y];return ft===void 0&&(ft=new Th,L[Y]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Y){let ft=L[Y];return ft===void 0&&(ft=new Th,L[Y]=ft),ft.getGripSpace()},this.getHand=function(Y){let ft=L[Y];return ft===void 0&&(ft=new Th,L[Y]=ft),ft.getHandSpace()};function st(Y){const ft=D.indexOf(Y.inputSource);if(ft===-1)return;const Mt=L[ft];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,p||h),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function pt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",_t);for(let Y=0;Y<L.length;Y++){const ft=D[Y];ft!==null&&(D[Y]=null,L[Y].disconnect(ft))}H=null,lt=null,R.reset(),e.setRenderTarget(g),M=null,x=null,v=null,l=null,B=null,St.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",_t),y.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,vt=null,zt=null;y.depth&&(zt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?Io:Bo,vt=y.stencil?zo:Es);const Yt={colorFormat:i.RGBA8,depthFormat:zt,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Yt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new Ts(x.textureWidth,x.textureHeight,{format:Ei,type:Pi,depthTexture:new i0(x.textureWidth,x.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Ts(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function _t(Y){for(let ft=0;ft<Y.removed.length;ft++){const Mt=Y.removed[ft],vt=D.indexOf(Mt);vt>=0&&(D[vt]=null,L[vt].disconnect(Mt))}for(let ft=0;ft<Y.added.length;ft++){const Mt=Y.added[ft];let vt=D.indexOf(Mt);if(vt===-1){for(let Yt=0;Yt<L.length;Yt++)if(Yt>=D.length){D.push(Mt),vt=Yt;break}else if(D[Yt]===null){D[Yt]=Mt,vt=Yt;break}if(vt===-1)break}const zt=L[vt];zt&&zt.connect(Mt)}}const P=new Q,K=new Q;function Z(Y,ft,Mt){P.setFromMatrixPosition(ft.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);const vt=P.distanceTo(K),zt=ft.projectionMatrix.elements,Yt=Mt.projectionMatrix.elements,Zt=zt[14]/(zt[10]-1),Ve=zt[14]/(zt[10]+1),He=(zt[9]+1)/zt[5],fe=(zt[9]-1)/zt[5],I=(zt[8]-1)/zt[0],bn=(Yt[8]+1)/Yt[0],he=Zt*I,_e=Zt*bn,Xt=vt/(-I+bn),De=Xt*-I;if(ft.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(De),Y.translateZ(Xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),zt[10]===-1)Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Vt=Zt+Xt,U=Ve+Xt,b=he-De,et=_e+(vt-De),ut=He*Ve/U*Vt,yt=fe*Ve/U*Vt;Y.projectionMatrix.makePerspective(b,et,ut,yt,Vt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xt(Y,ft){ft===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ft.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ft=Y.near,Mt=Y.far;R.texture!==null&&(R.depthNear>0&&(ft=R.depthNear),R.depthFar>0&&(Mt=R.depthFar)),C.near=q.near=O.near=ft,C.far=q.far=O.far=Mt,(H!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,lt=C.far),O.layers.mask=Y.layers.mask|2,q.layers.mask=Y.layers.mask|4,C.layers.mask=O.layers.mask|q.layers.mask;const vt=Y.parent,zt=C.cameras;xt(C,vt);for(let Yt=0;Yt<zt.length;Yt++)xt(zt[Yt],vt);zt.length===2?Z(C,O,q):C.projectionMatrix.copy(O.projectionMatrix),Tt(Y,C,vt)};function Tt(Y,ft,Mt){Mt===null?Y.matrix.copy(ft.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ft.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=yd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Y){m=Y,x!==null&&(x.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let N=null;function nt(Y,ft){if(S=ft.getViewerPose(p||h),T=ft,S!==null){const Mt=S.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let vt=!1;Mt.length!==C.cameras.length&&(C.cameras.length=0,vt=!0);for(let Zt=0;Zt<Mt.length;Zt++){const Ve=Mt[Zt];let He=null;if(M!==null)He=M.getViewport(Ve);else{const I=v.getViewSubImage(x,Ve);He=I.viewport,Zt===0&&(e.setRenderTargetTextures(B,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(B))}let fe=w[Zt];fe===void 0&&(fe=new fi,fe.layers.enable(Zt),fe.viewport=new $e,w[Zt]=fe),fe.matrix.fromArray(Ve.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ve.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(He.x,He.y,He.width,He.height),Zt===0&&(C.matrix.copy(fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),vt===!0&&C.cameras.push(fe)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Zt=v.getDepthInformation(Mt[0]);Zt&&Zt.isValid&&Zt.texture&&R.init(e,Zt,l.renderState)}}for(let Mt=0;Mt<L.length;Mt++){const vt=D[Mt],zt=L[Mt];vt!==null&&zt!==void 0&&zt.update(vt,ft,p||h)}N&&N(Y,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),T=null}const St=new r0;St.setAnimationLoop(nt),this.setAnimationLoop=function(Y){N=Y},this.dispose=function(){}}}const gs=new zi,BA=new je;function IA(o,e){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,$v(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,B,L,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),S(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,D)):g.isMeshMatcapMaterial?(u(y,g),T(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),R(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,B,L):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===kn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===kn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const B=e.get(g),L=B.envMap,D=B.envMapRotation;L&&(y.envMap.value=L,gs.copy(D),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),y.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(gs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,B,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*B,y.scale.value=L*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function S(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,B){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const B=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function FA(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,L){const D=L.program;s.uniformBlockBinding(B,D)}function p(B,L){let D=l[B.id];D===void 0&&(T(B),D=S(B),l[B.id]=D,B.addEventListener("dispose",y));const j=L.program;s.updateUBOMapping(B,j);const G=e.render.frame;u[B.id]!==G&&(x(B),u[B.id]=G)}function S(B){const L=v();B.__bindingPointIndex=L;const D=o.createBuffer(),j=B.__size,G=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,j,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const L=l[B.id],D=B.uniforms,j=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let G=0,O=D.length;G<O;G++){const q=Array.isArray(D[G])?D[G]:[D[G]];for(let w=0,C=q.length;w<C;w++){const H=q[w];if(M(H,G,w,j)===!0){const lt=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let pt=0;for(let _t=0;_t<st.length;_t++){const P=st[_t],K=R(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,lt+pt,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,pt),pt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,L,D,j){const G=B.value,O=L+"_"+D;if(j[O]===void 0)return typeof G=="number"||typeof G=="boolean"?j[O]=G:j[O]=G.clone(),!0;{const q=j[O];if(typeof G=="number"||typeof G=="boolean"){if(q!==G)return j[O]=G,!0}else if(q.equals(G)===!1)return q.copy(G),!0}return!1}function T(B){const L=B.uniforms;let D=0;const j=16;for(let O=0,q=L.length;O<q;O++){const w=Array.isArray(L[O])?L[O]:[L[O]];for(let C=0,H=w.length;C<H;C++){const lt=w[C],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let pt=0,_t=st.length;pt<_t;pt++){const P=st[pt],K=R(P),Z=D%j,xt=Z%K.boundary,Tt=Z+xt;D+=xt,Tt!==0&&j-Tt<K.storage&&(D+=j-Tt),lt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=K.storage}}}const G=D%j;return G>0&&(D+=j-G),B.__size=D,B.__cache={},this}function R(B){const L={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(L.boundary=4,L.storage=4):B.isVector2?(L.boundary=8,L.storage=8):B.isVector3||B.isColor?(L.boundary=16,L.storage=12):B.isVector4?(L.boundary=16,L.storage=16):B.isMatrix3?(L.boundary=48,L.storage=48):B.isMatrix4?(L.boundary=64,L.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),L}function y(B){const L=B.target;L.removeEventListener("dispose",y);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function g(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class HA{constructor(e={}){const{canvas:i=_y(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const B=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let j=!1;this._outputColorSpace=ei;let G=0,O=0,q=null,w=-1,C=null;const H=new $e,lt=new $e;let st=null;const pt=new Ee(0);let _t=0,P=i.width,K=i.height,Z=1,xt=null,Tt=null;const N=new $e(0,0,P,K),nt=new $e(0,0,P,K);let St=!1;const Y=new Od;let ft=!1,Mt=!1;const vt=new je,zt=new je,Yt=new Q,Zt=new $e,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function fe(){return q===null?Z:1}let I=s;function bn(A,k){return i.getContext(A,k)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bd}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",wt,!1),I===null){const k="webgl2";if(I=bn(k,A),I===null)throw bn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let he,_e,Xt,De,Vt,U,b,et,ut,yt,dt,Ht,Rt,Kt,Jt,bt,Bt,jt,Gt,Ot,te,se,Ne,X;function Ct(){he=new KT(I),he.init(),se=new LA(I,he),_e=new XT(I,he,e,se),Xt=new DA(I,he),_e.reverseDepthBuffer&&x&&Xt.buffers.depth.setReversed(!0),De=new $T(I),Vt=new gA,U=new UA(I,he,Xt,Vt,_e,se,De),b=new WT(D),et=new ZT(D),ut=new sM(I),Ne=new GT(I,ut),yt=new QT(I,ut,De,Ne),dt=new eb(I,yt,ut,De),Gt=new tb(I,_e,U),bt=new kT(Vt),Ht=new _A(D,b,et,he,_e,Ne,bt),Rt=new IA(D,Vt),Kt=new SA,Jt=new bA(he),jt=new HT(D,b,et,Xt,dt,M,m),Bt=new CA(D,dt,_e),X=new FA(I,De,_e,Xt),Ot=new VT(I,he,De),te=new JT(I,he,De),De.programs=Ht.programs,D.capabilities=_e,D.extensions=he,D.properties=Vt,D.renderLists=Kt,D.shadowMap=Bt,D.state=Xt,D.info=De}Ct();const ot=new zA(D,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=he.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=he.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(P,K,!1))},this.getSize=function(A){return A.set(P,K)},this.setSize=function(A,k,it=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,K=k,i.width=Math.floor(A*Z),i.height=Math.floor(k*Z),it===!0&&(i.style.width=A+"px",i.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(P*Z,K*Z).floor()},this.setDrawingBufferSize=function(A,k,it){P=A,K=k,Z=it,i.width=Math.floor(A*it),i.height=Math.floor(k*it),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,k,it,at){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,k,it,at),Xt.viewport(H.copy(N).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,k,it,at){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,k,it,at),Xt.scissor(lt.copy(nt).multiplyScalar(Z).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Xt.setScissorTest(St=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){Tt=A},this.getClearColor=function(A){return A.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,it=!0){let at=0;if(A){let V=!1;if(q!==null){const Et=q.texture.format;V=Et===Ud||Et===Dd||Et===wd}if(V){const Et=q.texture.type,Dt=Et===Pi||Et===Es||Et===Po||Et===zo||Et===Rd||Et===Cd,Nt=jt.getClearColor(),Pt=jt.getClearAlpha(),ne=Nt.r,$t=Nt.g,kt=Nt.b;Dt?(T[0]=ne,T[1]=$t,T[2]=kt,T[3]=Pt,I.clearBufferuiv(I.COLOR,0,T)):(R[0]=ne,R[1]=$t,R[2]=kt,R[3]=Pt,I.clearBufferiv(I.COLOR,0,R))}else at|=I.COLOR_BUFFER_BIT}k&&(at|=I.DEPTH_BUFFER_BIT),it&&(at|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),jt.dispose(),Kt.dispose(),Jt.dispose(),Vt.dispose(),b.dispose(),et.dispose(),dt.dispose(),Ne.dispose(),X.dispose(),Ht.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Lr),ot.removeEventListener("sessionend",Nr),bi.stop()};function gt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const A=De.autoReset,k=Bt.enabled,it=Bt.autoUpdate,at=Bt.needsUpdate,V=Bt.type;Ct(),De.autoReset=A,Bt.enabled=k,Bt.autoUpdate=it,Bt.needsUpdate=at,Bt.type=V}function wt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ee(A){const k=A.target;k.removeEventListener("dispose",ee),qe(k)}function qe(A){ln(A),Vt.remove(A)}function ln(A){const k=Vt.get(A).programs;k!==void 0&&(k.forEach(function(it){Ht.releaseProgram(it)}),A.isShaderMaterial&&Ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,it,at,V,Et){k===null&&(k=Ve);const Dt=V.isMesh&&V.matrixWorld.determinant()<0,Nt=Pr(A,k,it,at,V);Xt.setMaterial(at,Dt);let Pt=it.index,ne=1;if(at.wireframe===!0){if(Pt=yt.getWireframeAttribute(it),Pt===void 0)return;ne=2}const $t=it.drawRange,kt=it.attributes.position;let Se=$t.start*ne,xe=($t.start+$t.count)*ne;Et!==null&&(Se=Math.max(Se,Et.start*ne),xe=Math.min(xe,(Et.start+Et.count)*ne)),Pt!==null?(Se=Math.max(Se,0),xe=Math.min(xe,Pt.count)):kt!=null&&(Se=Math.max(Se,0),xe=Math.min(xe,kt.count));const Xe=xe-Se;if(Xe<0||Xe===1/0)return;Ne.setup(V,at,Nt,it,Pt);let be,ie=Ot;if(Pt!==null&&(be=ut.get(Pt),ie=te,ie.setIndex(be)),V.isMesh)at.wireframe===!0?(Xt.setLineWidth(at.wireframeLinewidth*fe()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(V.isLine){let qt=at.linewidth;qt===void 0&&(qt=1),Xt.setLineWidth(qt*fe()),V.isLineSegments?ie.setMode(I.LINES):V.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else V.isPoints?ie.setMode(I.POINTS):V.isSprite&&ie.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Nc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))ie.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const qt=V._multiDrawStarts,cn=V._multiDrawCounts,Me=V._multiDrawCount,On=Pt?ut.get(Pt).bytesPerElement:1,_i=Vt.get(at).currentProgram.getUniforms();for(let Dn=0;Dn<Me;Dn++)_i.setValue(I,"_gl_DrawID",Dn),ie.render(qt[Dn]/On,cn[Dn])}else if(V.isInstancedMesh)ie.renderInstances(Se,Xe,V.count);else if(it.isInstancedBufferGeometry){const qt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,cn=Math.min(it.instanceCount,qt);ie.renderInstances(Se,Xe,cn)}else ie.render(Se,Xe)};function Te(A,k,it){A.transparent===!0&&A.side===la&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Ze(A,k,it),A.side=Wa,A.needsUpdate=!0,Ze(A,k,it),A.side=la):Ze(A,k,it)}this.compile=function(A,k,it=null){it===null&&(it=A),g=Jt.get(it),g.init(k),L.push(g),it.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),A!==it&&A.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights();const at=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Et=V.material;if(Et)if(Array.isArray(Et))for(let Dt=0;Dt<Et.length;Dt++){const Nt=Et[Dt];Te(Nt,it,V),at.add(Nt)}else Te(Et,it,V),at.add(Et)}),g=L.pop(),at},this.compileAsync=function(A,k,it=null){const at=this.compile(A,k,it);return new Promise(V=>{function Et(){if(at.forEach(function(Dt){Vt.get(Dt).currentProgram.isReady()&&at.delete(Dt)}),at.size===0){V(A);return}setTimeout(Et,10)}he.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let vn=null;function pi(A){vn&&vn(A)}function Lr(){bi.stop()}function Nr(){bi.start()}const bi=new r0;bi.setAnimationLoop(pi),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){vn=A,ot.setAnimationLoop(A),A===null?bi.stop():bi.start()},ot.addEventListener("sessionstart",Lr),ot.addEventListener("sessionend",Nr),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(k),k=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,k,q),g=Jt.get(A,L.length),g.init(k),L.push(g),zt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(zt),Mt=this.localClippingEnabled,ft=bt.init(this.clippingPlanes,Mt),y=Kt.get(A,B.length),y.init(),B.push(y),ot.enabled===!0&&ot.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Ya(Et,k,-1/0,D.sortObjects)}Ya(A,k,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(xt,Tt),He=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,He&&jt.addToRenderList(y,A),this.info.render.frame++,ft===!0&&bt.beginShadows();const it=g.state.shadowsArray;Bt.render(it,A,k),ft===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=y.opaque,V=y.transmissive;if(g.setupLights(),k.isArrayCamera){const Et=k.cameras;if(V.length>0)for(let Dt=0,Nt=Et.length;Dt<Nt;Dt++){const Pt=Et[Dt];Or(at,V,A,Pt)}He&&jt.render(A);for(let Dt=0,Nt=Et.length;Dt<Nt;Dt++){const Pt=Et[Dt];Rs(y,A,Pt,Pt.viewport)}}else V.length>0&&Or(at,V,A,k),He&&jt.render(A),Rs(y,A,k);q!==null&&O===0&&(U.updateMultisampleRenderTarget(q),U.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(D,A,k),Ne.resetDefaultState(),w=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],ft===!0&&bt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Ya(A,k,it,at){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){at&&Zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(zt);const Dt=dt.update(A),Nt=A.material;Nt.visible&&y.push(A,Dt,Nt,it,Zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Dt=dt.update(A),Nt=A.material;if(at&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Zt.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Zt.copy(Dt.boundingSphere.center)),Zt.applyMatrix4(A.matrixWorld).applyMatrix4(zt)),Array.isArray(Nt)){const Pt=Dt.groups;for(let ne=0,$t=Pt.length;ne<$t;ne++){const kt=Pt[ne],Se=Nt[kt.materialIndex];Se&&Se.visible&&y.push(A,Dt,Se,it,Zt.z,kt)}}else Nt.visible&&y.push(A,Dt,Nt,it,Zt.z,null)}}const Et=A.children;for(let Dt=0,Nt=Et.length;Dt<Nt;Dt++)Ya(Et[Dt],k,it,at)}function Rs(A,k,it,at){const V=A.opaque,Et=A.transmissive,Dt=A.transparent;g.setupLightsView(it),ft===!0&&bt.setGlobalState(D.clippingPlanes,it),at&&Xt.viewport(H.copy(at)),V.length>0&&ja(V,k,it),Et.length>0&&ja(Et,k,it),Dt.length>0&&ja(Dt,k,it),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Or(A,k,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[at.id]===void 0&&(g.state.transmissionRenderTarget[at.id]=new Ts(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Fo:Pi,minFilter:Ms,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Et=g.state.transmissionRenderTarget[at.id],Dt=at.viewport||H;Et.setSize(Dt.z*D.transmissionResolutionScale,Dt.w*D.transmissionResolutionScale);const Nt=D.getRenderTarget();D.setRenderTarget(Et),D.getClearColor(pt),_t=D.getClearAlpha(),_t<1&&D.setClearColor(16777215,.5),D.clear(),He&&jt.render(it);const Pt=D.toneMapping;D.toneMapping=ka;const ne=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),g.setupLightsView(at),ft===!0&&bt.setGlobalState(D.clippingPlanes,at),ja(A,it,at),U.updateMultisampleRenderTarget(Et),U.updateRenderTargetMipmap(Et),he.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let kt=0,Se=k.length;kt<Se;kt++){const xe=k[kt],Xe=xe.object,be=xe.geometry,ie=xe.material,qt=xe.group;if(ie.side===la&&Xe.layers.test(at.layers)){const cn=ie.side;ie.side=kn,ie.needsUpdate=!0,mi(Xe,it,at,be,ie,qt),ie.side=cn,ie.needsUpdate=!0,$t=!0}}$t===!0&&(U.updateMultisampleRenderTarget(Et),U.updateRenderTargetMipmap(Et))}D.setRenderTarget(Nt),D.setClearColor(pt,_t),ne!==void 0&&(at.viewport=ne),D.toneMapping=Pt}function ja(A,k,it){const at=k.isScene===!0?k.overrideMaterial:null;for(let V=0,Et=A.length;V<Et;V++){const Dt=A[V],Nt=Dt.object,Pt=Dt.geometry,ne=Dt.group;let $t=Dt.material;$t.allowOverride===!0&&at!==null&&($t=at),Nt.layers.test(it.layers)&&mi(Nt,k,it,Pt,$t,ne)}}function mi(A,k,it,at,V,Et){A.onBeforeRender(D,k,it,at,V,Et),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(D,k,it,at,A,Et),V.transparent===!0&&V.side===la&&V.forceSinglePass===!1?(V.side=kn,V.needsUpdate=!0,D.renderBufferDirect(it,k,at,V,A,Et),V.side=Wa,V.needsUpdate=!0,D.renderBufferDirect(it,k,at,V,A,Et),V.side=la):D.renderBufferDirect(it,k,at,V,A,Et),A.onAfterRender(D,k,it,at,V,Et)}function Ze(A,k,it){k.isScene!==!0&&(k=Ve);const at=Vt.get(A),V=g.state.lights,Et=g.state.shadowsArray,Dt=V.state.version,Nt=Ht.getParameters(A,V.state,Et,k,it),Pt=Ht.getProgramCacheKey(Nt);let ne=at.programs;at.environment=A.isMeshStandardMaterial?k.environment:null,at.fog=k.fog,at.envMap=(A.isMeshStandardMaterial?et:b).get(A.envMap||at.environment),at.envMapRotation=at.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,ne===void 0&&(A.addEventListener("dispose",ee),ne=new Map,at.programs=ne);let $t=ne.get(Pt);if($t!==void 0){if(at.currentProgram===$t&&at.lightsStateVersion===Dt)return Ii(A,Nt),$t}else Nt.uniforms=Ht.getUniforms(A),A.onBeforeCompile(Nt,D),$t=Ht.acquireProgram(Nt,Pt),ne.set(Pt,$t),at.uniforms=Nt.uniforms;const kt=at.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=bt.uniform),Ii(A,Nt),at.needsLights=Wc(A),at.lightsStateVersion=Dt,at.needsLights&&(kt.ambientLightColor.value=V.state.ambient,kt.lightProbe.value=V.state.probe,kt.directionalLights.value=V.state.directional,kt.directionalLightShadows.value=V.state.directionalShadow,kt.spotLights.value=V.state.spot,kt.spotLightShadows.value=V.state.spotShadow,kt.rectAreaLights.value=V.state.rectArea,kt.ltc_1.value=V.state.rectAreaLTC1,kt.ltc_2.value=V.state.rectAreaLTC2,kt.pointLights.value=V.state.point,kt.pointLightShadows.value=V.state.pointShadow,kt.hemisphereLights.value=V.state.hemi,kt.directionalShadowMap.value=V.state.directionalShadowMap,kt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,kt.spotShadowMap.value=V.state.spotShadowMap,kt.spotLightMatrix.value=V.state.spotLightMatrix,kt.spotLightMap.value=V.state.spotLightMap,kt.pointShadowMap.value=V.state.pointShadowMap,kt.pointShadowMatrix.value=V.state.pointShadowMatrix),at.currentProgram=$t,at.uniformsList=null,$t}function Sn(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Oc.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Ii(A,k){const it=Vt.get(A);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function Pr(A,k,it,at,V){k.isScene!==!0&&(k=Ve),U.resetTextureUnits();const Et=k.fog,Dt=at.isMeshStandardMaterial?k.environment:null,Nt=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Cr,Pt=(at.isMeshStandardMaterial?et:b).get(at.envMap||Dt),ne=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,$t=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),kt=!!it.morphAttributes.position,Se=!!it.morphAttributes.normal,xe=!!it.morphAttributes.color;let Xe=ka;at.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Xe=D.toneMapping);const be=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ie=be!==void 0?be.length:0,qt=Vt.get(at),cn=g.state.lights;if(ft===!0&&(Mt===!0||A!==C)){const Ke=A===C&&at.id===w;bt.setState(at,A,Ke)}let Me=!1;at.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==cn.state.version||qt.outputColorSpace!==Nt||V.isBatchedMesh&&qt.batching===!1||!V.isBatchedMesh&&qt.batching===!0||V.isBatchedMesh&&qt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&qt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&qt.instancing===!1||!V.isInstancedMesh&&qt.instancing===!0||V.isSkinnedMesh&&qt.skinning===!1||!V.isSkinnedMesh&&qt.skinning===!0||V.isInstancedMesh&&qt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&qt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&qt.instancingMorph===!1&&V.morphTexture!==null||qt.envMap!==Pt||at.fog===!0&&qt.fog!==Et||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==bt.numPlanes||qt.numIntersection!==bt.numIntersection)||qt.vertexAlphas!==ne||qt.vertexTangents!==$t||qt.morphTargets!==kt||qt.morphNormals!==Se||qt.morphColors!==xe||qt.toneMapping!==Xe||qt.morphTargetsCount!==ie)&&(Me=!0):(Me=!0,qt.__version=at.version);let On=qt.currentProgram;Me===!0&&(On=Ze(at,k,V));let _i=!1,Dn=!1,pn=!1;const Oe=On.getUniforms(),Un=qt.uniforms;if(Xt.useProgram(On.program)&&(_i=!0,Dn=!0,pn=!0),at.id!==w&&(w=at.id,Dn=!0),_i||C!==A){Xt.buffers.depth.getReversed()?(vt.copy(A.projectionMatrix),vy(vt),Sy(vt),Oe.setValue(I,"projectionMatrix",vt)):Oe.setValue(I,"projectionMatrix",A.projectionMatrix),Oe.setValue(I,"viewMatrix",A.matrixWorldInverse);const xn=Oe.map.cameraPosition;xn!==void 0&&xn.setValue(I,Yt.setFromMatrixPosition(A.matrixWorld)),_e.logarithmicDepthBuffer&&Oe.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Oe.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Dn=!0,pn=!0)}if(V.isSkinnedMesh){Oe.setOptional(I,V,"bindMatrix"),Oe.setOptional(I,V,"bindMatrixInverse");const Ke=V.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Oe.setValue(I,"boneTexture",Ke.boneTexture,U))}V.isBatchedMesh&&(Oe.setOptional(I,V,"batchingTexture"),Oe.setValue(I,"batchingTexture",V._matricesTexture,U),Oe.setOptional(I,V,"batchingIdTexture"),Oe.setValue(I,"batchingIdTexture",V._indirectTexture,U),Oe.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Oe.setValue(I,"batchingColorTexture",V._colorsTexture,U));const An=it.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Gt.update(V,it,On),(Dn||qt.receiveShadow!==V.receiveShadow)&&(qt.receiveShadow=V.receiveShadow,Oe.setValue(I,"receiveShadow",V.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Un.envMap.value=Pt,Un.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&k.environment!==null&&(Un.envMapIntensity.value=k.environmentIntensity),Dn&&(Oe.setValue(I,"toneMappingExposure",D.toneMappingExposure),qt.needsLights&&kc(Un,pn),Et&&at.fog===!0&&Rt.refreshFogUniforms(Un,Et),Rt.refreshMaterialUniforms(Un,at,Z,K,g.state.transmissionRenderTarget[A.id]),Oc.upload(I,Sn(qt),Un,U)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Oc.upload(I,Sn(qt),Un,U),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Oe.setValue(I,"center",V.center),Oe.setValue(I,"modelViewMatrix",V.modelViewMatrix),Oe.setValue(I,"normalMatrix",V.normalMatrix),Oe.setValue(I,"modelMatrix",V.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Ke=at.uniformsGroups;for(let xn=0,Cs=Ke.length;xn<Cs;xn++){const Pn=Ke[xn];X.update(Pn,On),X.bind(Pn,On)}}return On}function kc(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Wc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,k,it){const at=Vt.get(A);at.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Vt.get(A.texture).__webglTexture=k,Vt.get(A.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const it=Vt.get(A);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0};const Xo=I.createFramebuffer();this.setRenderTarget=function(A,k=0,it=0){q=A,G=k,O=it;let at=!0,V=null,Et=!1,Dt=!1;if(A){const Pt=Vt.get(A);if(Pt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(I.FRAMEBUFFER,null),at=!1;else if(Pt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Pt.__hasExternalTextures)U.rebindTextures(A,Vt.get(A.texture).__webglTexture,Vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(Pt.__boundDepthTexture!==kt){if(kt!==null&&Vt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const ne=A.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Dt=!0);const $t=Vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[k])?V=$t[k][it]:V=$t[k],Et=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?V=Vt.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?V=$t[it]:V=$t,H.copy(A.viewport),lt.copy(A.scissor),st=A.scissorTest}else H.copy(N).multiplyScalar(Z).floor(),lt.copy(nt).multiplyScalar(Z).floor(),st=St;if(it!==0&&(V=Xo),Xt.bindFramebuffer(I.FRAMEBUFFER,V)&&at&&Xt.drawBuffers(A,V),Xt.viewport(H),Xt.scissor(lt),Xt.setScissorTest(st),Et){const Pt=Vt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pt.__webglTexture,it)}else if(Dt){const Pt=Vt.get(A.texture),ne=k;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.__webglTexture,it,ne)}else if(A!==null&&it!==0){const Pt=Vt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pt.__webglTexture,it)}w=-1},this.readRenderTargetPixels=function(A,k,it,at,V,Et,Dt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){Xt.bindFramebuffer(I.FRAMEBUFFER,Nt);try{const Pt=A.texture,ne=Pt.format,$t=Pt.type;if(!_e.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-at&&it>=0&&it<=A.height-V&&I.readPixels(k,it,at,V,se.convert(ne),se.convert($t),Et)}finally{const Pt=q!==null?Vt.get(q).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,k,it,at,V,Et,Dt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt)if(k>=0&&k<=A.width-at&&it>=0&&it<=A.height-V){Xt.bindFramebuffer(I.FRAMEBUFFER,Nt);const Pt=A.texture,ne=Pt.format,$t=Pt.type;if(!_e.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.bufferData(I.PIXEL_PACK_BUFFER,Et.byteLength,I.STREAM_READ),I.readPixels(k,it,at,V,se.convert(ne),se.convert($t),0);const Se=q!==null?Vt.get(q).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,Se);const xe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await gy(I,xe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Et),I.deleteBuffer(kt),I.deleteSync(xe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,it=0){const at=Math.pow(2,-it),V=Math.floor(A.image.width*at),Et=Math.floor(A.image.height*at),Dt=k!==null?k.x:0,Nt=k!==null?k.y:0;U.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,it,0,0,Dt,Nt,V,Et),Xt.unbindTexture()};const Za=I.createFramebuffer(),zr=I.createFramebuffer();this.copyTextureToTexture=function(A,k,it=null,at=null,V=0,Et=null){Et===null&&(V!==0?(Nc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=V,V=0):Et=0);let Dt,Nt,Pt,ne,$t,kt,Se,xe,Xe;const be=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(it!==null)Dt=it.max.x-it.min.x,Nt=it.max.y-it.min.y,Pt=it.isBox3?it.max.z-it.min.z:1,ne=it.min.x,$t=it.min.y,kt=it.isBox3?it.min.z:0;else{const An=Math.pow(2,-V);Dt=Math.floor(be.width*An),Nt=Math.floor(be.height*An),A.isDataArrayTexture?Pt=be.depth:A.isData3DTexture?Pt=Math.floor(be.depth*An):Pt=1,ne=0,$t=0,kt=0}at!==null?(Se=at.x,xe=at.y,Xe=at.z):(Se=0,xe=0,Xe=0);const ie=se.convert(k.format),qt=se.convert(k.type);let cn;k.isData3DTexture?(U.setTexture3D(k,0),cn=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(U.setTexture2DArray(k,0),cn=I.TEXTURE_2D_ARRAY):(U.setTexture2D(k,0),cn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Me=I.getParameter(I.UNPACK_ROW_LENGTH),On=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_i=I.getParameter(I.UNPACK_SKIP_PIXELS),Dn=I.getParameter(I.UNPACK_SKIP_ROWS),pn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,$t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt);const Oe=A.isDataArrayTexture||A.isData3DTexture,Un=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const An=Vt.get(A),Ke=Vt.get(k),xn=Vt.get(An.__renderTarget),Cs=Vt.get(Ke.__renderTarget);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,xn.__webglFramebuffer),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let Pn=0;Pn<Pt;Pn++)Oe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(A).__webglTexture,V,kt+Pn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(k).__webglTexture,Et,Xe+Pn)),I.blitFramebuffer(ne,$t,Dt,Nt,Se,xe,Dt,Nt,I.DEPTH_BUFFER_BIT,I.NEAREST);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||Vt.has(A)){const An=Vt.get(A),Ke=Vt.get(k);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,Za),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,zr);for(let xn=0;xn<Pt;xn++)Oe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,An.__webglTexture,V,kt+xn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,An.__webglTexture,V),Un?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ke.__webglTexture,Et,Xe+xn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ke.__webglTexture,Et),V!==0?I.blitFramebuffer(ne,$t,Dt,Nt,Se,xe,Dt,Nt,I.COLOR_BUFFER_BIT,I.NEAREST):Un?I.copyTexSubImage3D(cn,Et,Se,xe,Xe+xn,ne,$t,Dt,Nt):I.copyTexSubImage2D(cn,Et,Se,xe,ne,$t,Dt,Nt);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Un?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(cn,Et,Se,xe,Xe,Dt,Nt,Pt,ie,qt,be.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(cn,Et,Se,xe,Xe,Dt,Nt,Pt,ie,be.data):I.texSubImage3D(cn,Et,Se,xe,Xe,Dt,Nt,Pt,ie,qt,be):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Et,Se,xe,Dt,Nt,ie,qt,be.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Et,Se,xe,be.width,be.height,ie,be.data):I.texSubImage2D(I.TEXTURE_2D,Et,Se,xe,Dt,Nt,ie,qt,be);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,On),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_i),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,pn),Et===0&&k.generateMipmaps&&I.generateMipmap(cn),Xt.unbindTexture()},this.copyTextureToTexture3D=function(A,k,it=null,at=null,V=0){return Nc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,it,at,V)},this.initRenderTarget=function(A){Vt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),Xt.unbindTexture()},this.resetState=function(){G=0,O=0,q=null,Xt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const Dv={type:"change"},zd={type:"start"},f0={type:"end"},Ac=new Nd,Uv=new Ga,GA=Math.cos(70*my.DEG2RAD),fn=new Q,Xn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ph=1e-6;class VA extends iM{constructor(e,i=null){super(e,i),this.state=Fe.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new bs,this._lastTargetPosition=new Q,this._quat=new bs().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new av,this._sphericalDelta=new av,this._scale=1,this._panOffset=new Q,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new Q,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kA.bind(this),this._onPointerDown=XA.bind(this),this._onPointerUp=WA.bind(this),this._onContextMenu=JA.bind(this),this._onMouseWheel=jA.bind(this),this._onKeyDown=ZA.bind(this),this._onTouchStart=KA.bind(this),this._onTouchMove=QA.bind(this),this._onMouseDown=qA.bind(this),this._onMouseMove=YA.bind(this),this._interceptControlDown=$A.bind(this),this._interceptControlUp=t1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dv),this.update(),this.state=Fe.NONE}update(e=null){const i=this.object.position;fn.copy(i).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),l<-Math.PI?l+=Xn:l>Math.PI&&(l-=Xn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),i.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=fn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new Q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<GA?this.object.lookAt(this.target):(Uv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(Uv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ph||this._lastTargetPosition.distanceToSquared(this.target)>Ph?(this.dispatchEvent(Dv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xn/60*this.autoRotateSpeed*e:Xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){fn.setFromMatrixColumn(i,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,i){this.screenSpacePanning===!0?fn.setFromMatrixColumn(i,1):(fn.setFromMatrixColumn(i,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let u=fn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),u=.5*(e.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ce,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function XA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function kA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function WA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(f0),this.state=Fe.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function qA(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Fe.DOLLY;break;case Mr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Fe.ROTATE}break;case Mr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(zd)}function YA(o){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function jA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(o.preventDefault(),this.dispatchEvent(zd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(f0))}function ZA(o){this.enabled!==!1&&this._handleKeyDown(o)}function KA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Fe.TOUCH_ROTATE;break;case xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Fe.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(zd)}function QA(o){switch(this._trackPointer(o),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Fe.NONE}}function JA(o){this.enabled!==!1&&o.preventDefault()}function $A(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function t1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e1(o){if(o.byteLength<8)throw new Error("Mesh payload is incomplete.");const e=new DataView(o),i=e.getUint32(0,!0),s=e.getUint32(4,!0),l=i*3,u=s*3,h=8+l*Float32Array.BYTES_PER_ELEMENT+u*Uint32Array.BYTES_PER_ELEMENT;if(o.byteLength!==h)throw new Error("Mesh payload has an unexpected size.");return{positions:new Float32Array(o,8,l),indices:new Uint32Array(o,8+l*Float32Array.BYTES_PER_ELEMENT,u)}}function n1({mesh:o,theme:e}){const i=Di.useRef(null),[s,l]=Di.useState("loading");return Di.useEffect(()=>{const u=i.current,h=new AbortController;let d=()=>{};l("loading");async function m(){try{const p=await fetch(o.url,{cache:"no-store",signal:h.signal});if(!p.ok)throw new Error("The interactive mesh has expired.");const{positions:S,indices:v}=e1(await p.arrayBuffer());if(h.signal.aborted)return;const x=new ky,M=e==="dark";x.background=new Ee(M?"#11181b":"#e8ebeb");const T=new fi(34,1,.01,1e5),R=new HA({antialias:!0,alpha:!1});R.setPixelRatio(Math.min(window.devicePixelRatio,2)),R.outputColorSpace=ei,u.replaceChildren(R.domElement);const y=new Bi;y.setAttribute("position",new di(S,3)),y.setIndex(new di(v,1)),y.computeVertexNormals(),y.rotateX(-Math.PI/2),y.computeBoundingBox();const g=y.boundingBox.getCenter(new Q);y.translate(-g.x,-g.y,-g.z),y.computeBoundingBox();const B=y.boundingBox.getSize(new Q),L=Math.max(B.x,B.y,B.z,1),D=new Ky({color:M?"#8faec0":"#b7ccda",roughness:.48,metalness:.08}),j=new Ni(y,D),G=new jy(new Zy(y,28),new n0({color:M?"#142229":"#29414e",transparent:!0,opacity:.82}));x.add(j,G),x.add(new $y(M?"#d4ebf2":"#fbffff",M?"#142027":"#7d8790",2.2));const O=new iv("#ffffff",2.8);O.position.set(L*1.3,L*1.7,L*2.1),x.add(O);const q=new iv(M?"#5f94ad":"#789aaa",1.1);q.position.set(-L*1.5,L*.7,-L),x.add(q),T.position.set(L*1.35,L,L*1.45),T.near=L/1e3,T.far=L*1e3;const w=new VA(T,R.domElement);w.enableDamping=!1,w.screenSpacePanning=!0,w.target.set(0,0,0),w.minDistance=L*.15,w.maxDistance=L*12,w.update();const C=()=>R.render(x,T),H=()=>{const{clientWidth:st,clientHeight:pt}=u;!st||!pt||(T.aspect=st/pt,T.updateProjectionMatrix(),R.setSize(st,pt,!1),C())},lt=new ResizeObserver(H);lt.observe(u),w.addEventListener("change",C),H(),l("ready"),d=()=>{lt.disconnect(),w.removeEventListener("change",C),w.dispose(),y.dispose(),D.dispose(),G.geometry.dispose(),G.material.dispose(),R.dispose(),u.replaceChildren()}}catch(p){h.signal.aborted||l(p.message||"Unable to load interactive mesh.")}}return m(),()=>{h.abort(),d()}},[o.id,o.url,e]),Lt.jsxs("div",{className:"interactive-model",ref:i,children:[s==="loading"&&Lt.jsx("div",{className:"model-overlay",children:"Preparing interactive geometry…"}),s!=="loading"&&s!=="ready"&&Lt.jsx("div",{className:"model-overlay error",children:s})]})}const Lv=650;function i1(){const o=window.localStorage.getItem("mcp3d-dashboard-theme");return o==="light"||o==="dark"?o:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function a1(o){const e=o==null?void 0:o.bounding_box_mm;return Array.isArray(e)?e.map(i=>`${i} mm`).join(" × "):"Awaiting geometry"}function s1(o){return o?new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date(o)):"—"}function r1(o){return o.replaceAll("_"," ")}function Ed(o){return(o==null?void 0:o.assembly_id)??(o==null?void 0:o.part_id)}function Rc({label:o,value:e}){return Lt.jsxs("div",{className:"metric",children:[Lt.jsx("span",{children:o}),Lt.jsx("strong",{children:e??"—"})]})}function o1({event:o,selectedImage:e,setSelectedImage:i,theme:s,setTheme:l,connection:u}){var S,v,x,M;const h=(o==null?void 0:o.images)??[],d=e&&h.some(T=>T.id===e.id)?e:h[0],m=o==null?void 0:o.mesh,p=(S=o==null?void 0:o.details)==null?void 0:S.summary;return Lt.jsxs("section",{className:"viewer-panel","aria-label":"Current part render",children:[Lt.jsxs("div",{className:"panel-heading",children:[Lt.jsxs("div",{children:[Lt.jsx("p",{className:"eyebrow",children:"Live viewport"}),Lt.jsx("h1",{children:Ed(o)??"No model selected"})]}),Lt.jsx("div",{className:"revision-mark",children:o!=null&&o.revision?`r${o.revision}`:"IDLE"})]}),Lt.jsxs("div",{className:"viewport",children:[Lt.jsx("div",{className:"viewport-corner top-left"}),Lt.jsx("div",{className:"viewport-corner top-right"}),Lt.jsx("div",{className:"viewport-corner bottom-left"}),Lt.jsx("div",{className:"viewport-corner bottom-right"}),m?Lt.jsx(n1,{mesh:m,theme:s}):d?Lt.jsx("img",{src:d.url,alt:`${d.name} view of ${Ed(o)}`}):Lt.jsxs("div",{className:"empty-viewport",children:[Lt.jsx("span",{className:"empty-glyph",children:"⌗"}),Lt.jsx("p",{children:"Waiting for the first CAD action"}),Lt.jsx("small",{children:"Apply a part or assembly revision and its inspection render will appear here."})]})]}),Lt.jsxs("div",{className:"viewer-footer",children:[m?Lt.jsx("div",{className:"control-hint",children:"Drag to orbit · right-drag to pan · scroll to zoom"}):Lt.jsx("div",{className:"view-tabs","aria-label":"Available current renders",children:h.map(T=>Lt.jsx("button",{className:(d==null?void 0:d.id)===T.id?"active":"",onClick:()=>i(T),children:T.name},T.id))}),Lt.jsxs("div",{className:"viewer-actions",children:[Lt.jsxs("button",{className:"theme-toggle",type:"button",onClick:()=>l(s==="dark"?"light":"dark"),"aria-label":`Switch to ${s==="dark"?"light":"dark"} mode`,children:[Lt.jsx("span",{"aria-hidden":"true",children:s==="dark"?"☼":"◐"}),s==="dark"?"Light":"Dark"]}),Lt.jsxs("div",{className:"status-line",children:[Lt.jsx("span",{className:"status-dot"})," ",u==="live"?((v=o==null?void 0:o.details)==null?void 0:v.renderer)??"observer ready":u]})]})]}),Lt.jsxs("div",{className:"metrics",children:[Lt.jsx(Rc,{label:"Envelope",value:a1(p)}),Lt.jsx(Rc,{label:"Volume",value:(p==null?void 0:p.volume_mm3)!=null?`${p.volume_mm3} mm³`:null}),Lt.jsx(Rc,{label:"Solid",value:p?p.valid_solid?"Valid":"Needs review":null}),Lt.jsx(Rc,{label:"View",value:m?"Interactive":((M=(x=o==null?void 0:o.details)==null?void 0:x.views)==null?void 0:M.length)??0})]})]})}function l1({event:o,newest:e}){var u,h,d;const i=((u=o.details)==null?void 0:u.checks)??[],s=((h=o.details)==null?void 0:h.operations)??[],l=o.status==="error"||i.some(m=>m.status==="fail");return Lt.jsxs("article",{className:`event-card ${o.status} ${e?"newest":""}`,children:[Lt.jsx("div",{className:"event-spine",children:Lt.jsx("span",{})}),Lt.jsxs("div",{className:"event-topline",children:[Lt.jsx("span",{className:"event-kind",children:o.action}),Lt.jsx("time",{children:s1(o.timestamp)})]}),Lt.jsx("h2",{children:r1(o.phase)}),Lt.jsx("p",{children:o.message}),Lt.jsxs("div",{className:"event-meta",children:[Lt.jsx("span",{children:Ed(o)??"unassigned"}),o.revision&&Lt.jsxs("span",{children:["r",o.revision]}),Lt.jsx("span",{className:l?"pill error":"pill",children:o.status})]}),s.length>0&&Lt.jsxs("div",{className:"operation-row","aria-label":"Operations in revision",children:[s.slice(0,5).map(m=>Lt.jsx("span",{children:m.id},`${m.id}-${m.kind}`)),s.length>5&&Lt.jsxs("span",{children:["+",s.length-5]})]}),i.length>0&&Lt.jsx("div",{className:"checks",children:i.map(m=>Lt.jsxs("span",{className:m.status==="pass"?"pass":"fail",children:[m.status==="pass"?"✓":"!"," ",m.kind]},m.id))}),((d=o.details)==null?void 0:d.artifacts)&&Lt.jsx("p",{className:"artifact-note",children:"CAD deliverables written"})]})}function c1({events:o}){return Lt.jsxs("aside",{className:"activity-rail","aria-label":"CAD session activity",children:[Lt.jsxs("header",{className:"activity-heading",children:[Lt.jsxs("div",{children:[Lt.jsx("p",{className:"eyebrow",children:"Session trace"}),Lt.jsx("h1",{children:"Actions & revisions"})]}),Lt.jsx("span",{className:"event-count",children:o.length})]}),Lt.jsx("div",{className:"trace-rule",children:Lt.jsx("span",{})}),Lt.jsx("div",{className:"event-list",children:o.length?o.map((e,i)=>Lt.jsx(l1,{event:e,newest:i===0},e.id)):Lt.jsxs("div",{className:"empty-trace",children:[Lt.jsx("strong",{children:"No actions yet"}),Lt.jsx("span",{children:"Tool calls will appear here as the CAD session progresses."})]})})]})}function u1(){const[o,e]=Di.useState({events:[],latest_render:null,generated_at:null}),[i,s]=Di.useState(null),[l,u]=Di.useState("connecting"),[h,d]=Di.useState(i1);Di.useEffect(()=>{document.documentElement.dataset.theme=h,window.localStorage.setItem("mcp3d-dashboard-theme",h)},[h]),Di.useEffect(()=>{let p=!1;async function S(){try{const x=await fetch("/api/snapshot",{cache:"no-store"});if(!x.ok)throw new Error("dashboard response failed");const M=await x.json();p||(e(M),u("live"))}catch{p||u("reconnecting")}}S();const v=window.setInterval(S,Lv);return()=>{p=!0,window.clearInterval(v)}},[]);const m=Di.useMemo(()=>o.latest_render,[o.latest_render]);return Lt.jsxs("main",{className:"dashboard-shell",children:[Lt.jsxs("div",{className:"workbench",children:[Lt.jsx(o1,{event:m,selectedImage:i,setSelectedImage:s,theme:h,setTheme:d,connection:l}),Lt.jsx(c1,{events:o.events})]}),Lt.jsxs("footer",{children:["Memory-only session trace · updates every ",Lv," ms · renders expire with the session"]})]})}Ax.createRoot(document.getElementById("root")).render(Lt.jsx(u1,{}));
