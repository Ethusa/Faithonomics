var Wd=Object.defineProperty;var Bd=(e,t,n)=>t in e?Wd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ce=(e,t,n)=>Bd(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mc={exports:{}},Ki={},hc={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=Symbol.for("react.element"),Hd=Symbol.for("react.portal"),Vd=Symbol.for("react.fragment"),Gd=Symbol.for("react.strict_mode"),Qd=Symbol.for("react.profiler"),Jd=Symbol.for("react.provider"),Yd=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),Xd=Symbol.for("react.suspense"),Zd=Symbol.for("react.memo"),ep=Symbol.for("react.lazy"),Ba=Symbol.iterator;function tp(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gc=Object.assign,yc={};function Hn(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||fc}Hn.prototype.isReactComponent={};Hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vc(){}vc.prototype=Hn.prototype;function Vo(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||fc}var Go=Vo.prototype=new vc;Go.constructor=Vo;gc(Go,Hn.prototype);Go.isPureReactComponent=!0;var qa=Array.isArray,wc=Object.prototype.hasOwnProperty,Qo={current:null},bc={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)wc.call(t,r)&&!bc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Dr,type:e,key:s,ref:a,props:i,_owner:Qo.current}}function np(e,t){return{$$typeof:Dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr}function rp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ha=/\/+/g;function fs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rp(""+e.key):t.toString(36)}function pi(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Dr:case Hd:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+fs(a,0):r,qa(i)?(n="",e!=null&&(n=e.replace(Ha,"$&/")+"/"),pi(i,t,n,"",function(u){return u})):i!=null&&(Jo(i)&&(i=np(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ha,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",qa(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+fs(s,l);a+=pi(s,t,n,c,i)}else if(c=tp(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+fs(s,l++),a+=pi(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Vr(e,t,n){if(e==null)return e;var r=[],i=0;return pi(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ip(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},mi={transition:null},sp={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:mi,ReactCurrentOwner:Qo};function kc(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Vr,forEach:function(e,t,n){Vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!Jo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Hn;U.Fragment=Vd;U.Profiler=Qd;U.PureComponent=Vo;U.StrictMode=Gd;U.Suspense=Xd;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp;U.act=kc;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gc({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Qo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)wc.call(t,c)&&!bc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Dr,type:e.type,key:i,ref:s,props:r,_owner:a}};U.createContext=function(e){return e={$$typeof:Yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jd,_context:e},e.Consumer=e};U.createElement=xc;U.createFactory=function(e){var t=xc.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Kd,render:e}};U.isValidElement=Jo;U.lazy=function(e){return{$$typeof:ep,_payload:{_status:-1,_result:e},_init:ip}};U.memo=function(e,t){return{$$typeof:Zd,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=mi.transition;mi.transition={};try{e()}finally{mi.transition=t}};U.unstable_act=kc;U.useCallback=function(e,t){return Le.current.useCallback(e,t)};U.useContext=function(e){return Le.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};U.useEffect=function(e,t){return Le.current.useEffect(e,t)};U.useId=function(){return Le.current.useId()};U.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Le.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};U.useRef=function(e){return Le.current.useRef(e)};U.useState=function(e){return Le.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Le.current.useTransition()};U.version="18.3.1";hc.exports=U;var S=hc.exports;const op=qd(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=S,lp=Symbol.for("react.element"),cp=Symbol.for("react.fragment"),up=Object.prototype.hasOwnProperty,dp=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pp={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)up.call(t,r)&&!pp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lp,type:e,key:s,ref:a,props:i,_owner:dp.current}}Ki.Fragment=cp;Ki.jsx=jc;Ki.jsxs=jc;mc.exports=Ki;var o=mc.exports,Qs={},Sc={exports:{}},Ge={},Cc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,M){var D=k.length;k.push(M);e:for(;0<D;){var W=D-1>>>1,C=k[W];if(0<i(C,M))k[W]=M,k[D]=C,D=W;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var M=k[0],D=k.pop();if(D!==M){k[0]=D;e:for(var W=0,C=k.length,$=C>>>1;W<$;){var R=2*(W+1)-1,V=k[R],B=R+1,q=k[B];if(0>i(V,D))B<C&&0>i(q,V)?(k[W]=q,k[B]=D,W=B):(k[W]=V,k[R]=D,W=R);else if(B<C&&0>i(q,D))k[W]=q,k[B]=D,W=B;else break e}}return M}function i(k,M){var D=k.sortIndex-M.sortIndex;return D!==0?D:k.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],h=1,f=null,y=3,v=!1,g=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(k){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=k)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function w(k){if(b=!1,p(k),!g)if(n(c)!==null)g=!0,Y(N);else{var M=n(u);M!==null&&X(w,M.startTime-k)}}function N(k,M){g=!1,b&&(b=!1,m(E),E=-1),v=!0;var D=y;try{for(p(M),f=n(c);f!==null&&(!(f.expirationTime>M)||k&&!J());){var W=f.callback;if(typeof W=="function"){f.callback=null,y=f.priorityLevel;var C=W(f.expirationTime<=M);M=e.unstable_now(),typeof C=="function"?f.callback=C:f===n(c)&&r(c),p(M)}else r(c);f=n(c)}if(f!==null)var $=!0;else{var R=n(u);R!==null&&X(w,R.startTime-M),$=!1}return $}finally{f=null,y=D,v=!1}}var I=!1,P=null,E=-1,O=5,L=-1;function J(){return!(e.unstable_now()-L<O)}function fe(){if(P!==null){var k=e.unstable_now();L=k;var M=!0;try{M=P(!0,k)}finally{M?ae():(I=!1,P=null)}}else I=!1}var ae;if(typeof d=="function")ae=function(){d(fe)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,_=Je.port2;Je.port1.onmessage=fe,ae=function(){_.postMessage(null)}}else ae=function(){T(fe,0)};function Y(k){P=k,I||(I=!0,ae())}function X(k,M){E=T(function(){k(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Y(N))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(k){switch(y){case 1:case 2:case 3:var M=3;break;default:M=y}var D=y;y=M;try{return k()}finally{y=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,M){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var D=y;y=k;try{return M()}finally{y=D}},e.unstable_scheduleCallback=function(k,M,D){var W=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?W+D:W):D=W,k){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=D+C,k={id:h++,callback:M,priorityLevel:k,startTime:D,expirationTime:C,sortIndex:-1},D>W?(k.sortIndex=D,t(u,k),n(c)===null&&k===n(u)&&(b?(m(E),E=-1):b=!0,X(w,D-W))):(k.sortIndex=C,t(c,k),g||v||(g=!0,Y(N))),k},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(k){var M=y;return function(){var D=y;y=M;try{return k.apply(this,arguments)}finally{y=D}}}})(Nc);Cc.exports=Nc;var mp=Cc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp=S,Ve=mp;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,xr={};function fn(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(xr[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Js=Object.prototype.hasOwnProperty,fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Va={},Ga={};function gp(e){return Js.call(Ga,e)?!0:Js.call(Va,e)?!1:fp.test(e)?Ga[e]=!0:(Va[e]=!0,!1)}function yp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vp(e,t,n,r){if(t===null||typeof t>"u"||yp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yo=/[\-:]([a-z])/g;function Ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yo,Ko);je[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yo,Ko);je[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yo,Ko);je[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xo(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vp(t,n,i,r)&&(n=null),r||i===null?gp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gr=Symbol.for("react.element"),wn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),Zo=Symbol.for("react.strict_mode"),Ys=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),Ec=Symbol.for("react.context"),ea=Symbol.for("react.forward_ref"),Ks=Symbol.for("react.suspense"),Xs=Symbol.for("react.suspense_list"),ta=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),Pc=Symbol.for("react.offscreen"),Qa=Symbol.iterator;function Kn(e){return e===null||typeof e!="object"?null:(e=Qa&&e[Qa]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,gs;function ar(e){if(gs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gs=t&&t[1]||""}return`
`+gs+e}var ys=!1;function vs(e,t){if(!e||ys)return"";ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ar(e):""}function wp(e){switch(e.tag){case 5:return ar(e.type);case 16:return ar("Lazy");case 13:return ar("Suspense");case 19:return ar("SuspenseList");case 0:case 2:case 15:return e=vs(e.type,!1),e;case 11:return e=vs(e.type.render,!1),e;case 1:return e=vs(e.type,!0),e;default:return""}}function Zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case wn:return"Portal";case Ys:return"Profiler";case Zo:return"StrictMode";case Ks:return"Suspense";case Xs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ec:return(e.displayName||"Context")+".Consumer";case Tc:return(e._context.displayName||"Context")+".Provider";case ea:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ta:return t=e.displayName||null,t!==null?t:Zs(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return Zs(e(t))}catch{}}return null}function bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zs(t);case 8:return t===Zo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xp(e){var t=Ac(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qr(e){e._valueTracker||(e._valueTracker=xp(e))}function Lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ac(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function eo(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ja(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _c(e,t){t=t.checked,t!=null&&Xo(e,"checked",t,!1)}function to(e,t){_c(e,t);var n=Jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?no(e,t.type,n):t.hasOwnProperty("defaultValue")&&no(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ya(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function no(e,t,n){(t!=="number"||Si(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lr=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ro(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ka(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(lr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function $c(e,t){var n=Jt(t.value),r=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function io(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jr,Rc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kp=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){kp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pr[t]=pr[e]})});function Mc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pr.hasOwnProperty(e)&&pr[e]?(""+t).trim():t+"px"}function Dc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var jp=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function so(e,t){if(t){if(jp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ao=null;function na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,Ln=null,_n=null;function Za(e){if(e=Ur(e)){if(typeof lo!="function")throw Error(j(280));var t=e.stateNode;t&&(t=ns(t),lo(e.stateNode,e.type,t))}}function Fc(e){Ln?_n?_n.push(e):_n=[e]:Ln=e}function Oc(){if(Ln){var e=Ln,t=_n;if(_n=Ln=null,Za(e),t)for(e=0;e<t.length;e++)Za(t[e])}}function Uc(e,t){return e(t)}function Wc(){}var ws=!1;function Bc(e,t,n){if(ws)return e(t,n);ws=!0;try{return Uc(e,t,n)}finally{ws=!1,(Ln!==null||_n!==null)&&(Wc(),Oc())}}function jr(e,t){var n=e.stateNode;if(n===null)return null;var r=ns(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var co=!1;if(It)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){co=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{co=!1}function Sp(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var mr=!1,Ci=null,Ni=!1,uo=null,Cp={onError:function(e){mr=!0,Ci=e}};function Np(e,t,n,r,i,s,a,l,c){mr=!1,Ci=null,Sp.apply(Cp,arguments)}function Ip(e,t,n,r,i,s,a,l,c){if(Np.apply(this,arguments),mr){if(mr){var u=Ci;mr=!1,Ci=null}else throw Error(j(198));Ni||(Ni=!0,uo=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function el(e){if(gn(e)!==e)throw Error(j(188))}function Tp(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return el(i),e;if(s===r)return el(i),t;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Hc(e){return e=Tp(e),e!==null?Vc(e):null}function Vc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vc(e);if(t!==null)return t;e=e.sibling}return null}var Gc=Ve.unstable_scheduleCallback,tl=Ve.unstable_cancelCallback,Ep=Ve.unstable_shouldYield,Pp=Ve.unstable_requestPaint,ue=Ve.unstable_now,Ap=Ve.unstable_getCurrentPriorityLevel,ra=Ve.unstable_ImmediatePriority,Qc=Ve.unstable_UserBlockingPriority,Ii=Ve.unstable_NormalPriority,Lp=Ve.unstable_LowPriority,Jc=Ve.unstable_IdlePriority,Xi=null,wt=null;function _p(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Xi,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Rp,$p=Math.log,zp=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-($p(e)/zp|0)|0}var Yr=64,Kr=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ti(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=cr(l):(s&=a,s!==0&&(r=cr(s)))}else a=n&~i,a!==0?r=cr(a):s!==0&&(r=cr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-lt(t),i=1<<n,r|=e[n],t&=~i;return r}function Mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-lt(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Mp(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yc(){var e=Yr;return Yr<<=1,!(Yr&4194240)&&(Yr=64),e}function bs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function Fp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-lt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ia(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Q=0;function Kc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xc,sa,Zc,eu,tu,mo=!1,Xr=[],Ut=null,Wt=null,Bt=null,Sr=new Map,Cr=new Map,Mt=[],Op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nl(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function Zn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ur(t),t!==null&&sa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Up(e,t,n,r,i){switch(t){case"focusin":return Ut=Zn(Ut,e,t,n,r,i),!0;case"dragenter":return Wt=Zn(Wt,e,t,n,r,i),!0;case"mouseover":return Bt=Zn(Bt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Sr.set(s,Zn(Sr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Cr.set(s,Zn(Cr.get(s)||null,e,t,n,r,i)),!0}return!1}function nu(e){var t=rn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=qc(n),t!==null){e.blockedOn=t,tu(e.priority,function(){Zc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ho(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ao=r,n.target.dispatchEvent(r),ao=null}else return t=Ur(n),t!==null&&sa(t),e.blockedOn=n,!1;t.shift()}return!0}function rl(e,t,n){hi(e)&&n.delete(t)}function Wp(){mo=!1,Ut!==null&&hi(Ut)&&(Ut=null),Wt!==null&&hi(Wt)&&(Wt=null),Bt!==null&&hi(Bt)&&(Bt=null),Sr.forEach(rl),Cr.forEach(rl)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,mo||(mo=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Wp)))}function Nr(e){function t(i){return er(i,e)}if(0<Xr.length){er(Xr[0],e);for(var n=1;n<Xr.length;n++){var r=Xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&er(Ut,e),Wt!==null&&er(Wt,e),Bt!==null&&er(Bt,e),Sr.forEach(t),Cr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)nu(n),n.blockedOn===null&&Mt.shift()}var $n=At.ReactCurrentBatchConfig,Ei=!0;function Bp(e,t,n,r){var i=Q,s=$n.transition;$n.transition=null;try{Q=1,oa(e,t,n,r)}finally{Q=i,$n.transition=s}}function qp(e,t,n,r){var i=Q,s=$n.transition;$n.transition=null;try{Q=4,oa(e,t,n,r)}finally{Q=i,$n.transition=s}}function oa(e,t,n,r){if(Ei){var i=ho(e,t,n,r);if(i===null)Ps(e,t,r,Pi,n),nl(e,r);else if(Up(i,e,t,n,r))r.stopPropagation();else if(nl(e,r),t&4&&-1<Op.indexOf(e)){for(;i!==null;){var s=Ur(i);if(s!==null&&Xc(s),s=ho(e,t,n,r),s===null&&Ps(e,t,r,Pi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ps(e,t,r,null,n)}}var Pi=null;function ho(e,t,n,r){if(Pi=null,e=na(r),e=rn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ap()){case ra:return 1;case Qc:return 4;case Ii:case Lp:return 16;case Jc:return 536870912;default:return 16}default:return 16}}var Ft=null,aa=null,fi=null;function iu(){if(fi)return fi;var e,t=aa,n=t.length,r,i="value"in Ft?Ft.value:Ft.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return fi=i.slice(e,1<r?1-r:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function il(){return!1}function Qe(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zr:il,this.isPropagationStopped=il,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=Qe(Vn),Or=ie({},Vn,{view:0,detail:0}),Hp=Qe(Or),xs,ks,tr,Zi=ie({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(xs=e.screenX-tr.screenX,ks=e.screenY-tr.screenY):ks=xs=0,tr=e),xs)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),sl=Qe(Zi),Vp=ie({},Zi,{dataTransfer:0}),Gp=Qe(Vp),Qp=ie({},Or,{relatedTarget:0}),js=Qe(Qp),Jp=ie({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Yp=Qe(Jp),Kp=ie({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xp=Qe(Kp),Zp=ie({},Vn,{data:0}),ol=Qe(Zp),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nm[e])?!!t[e]:!1}function ca(){return rm}var im=ie({},Or,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ca,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sm=Qe(im),om=ie({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),al=Qe(om),am=ie({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ca}),lm=Qe(am),cm=ie({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),um=Qe(cm),dm=ie({},Zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=Qe(dm),mm=[9,13,27,32],ua=It&&"CompositionEvent"in window,hr=null;It&&"documentMode"in document&&(hr=document.documentMode);var hm=It&&"TextEvent"in window&&!hr,su=It&&(!ua||hr&&8<hr&&11>=hr),ll=" ",cl=!1;function ou(e,t){switch(e){case"keyup":return mm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function fm(e,t){switch(e){case"compositionend":return au(t);case"keypress":return t.which!==32?null:(cl=!0,ll);case"textInput":return e=t.data,e===ll&&cl?null:e;default:return null}}function gm(e,t){if(xn)return e==="compositionend"||!ua&&ou(e,t)?(e=iu(),fi=aa=Ft=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return su&&t.locale!=="ko"?null:t.data;default:return null}}var ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ym[e.type]:t==="textarea"}function lu(e,t,n,r){Fc(r),t=Ai(t,"onChange"),0<t.length&&(n=new la("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,Ir=null;function vm(e){wu(e,0)}function es(e){var t=Sn(e);if(Lc(t))return e}function wm(e,t){if(e==="change")return t}var cu=!1;if(It){var Ss;if(It){var Cs="oninput"in document;if(!Cs){var dl=document.createElement("div");dl.setAttribute("oninput","return;"),Cs=typeof dl.oninput=="function"}Ss=Cs}else Ss=!1;cu=Ss&&(!document.documentMode||9<document.documentMode)}function pl(){fr&&(fr.detachEvent("onpropertychange",uu),Ir=fr=null)}function uu(e){if(e.propertyName==="value"&&es(Ir)){var t=[];lu(t,Ir,e,na(e)),Bc(vm,t)}}function bm(e,t,n){e==="focusin"?(pl(),fr=t,Ir=n,fr.attachEvent("onpropertychange",uu)):e==="focusout"&&pl()}function xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return es(Ir)}function km(e,t){if(e==="click")return es(t)}function jm(e,t){if(e==="input"||e==="change")return es(t)}function Sm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Sm;function Tr(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Js.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function ml(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hl(e,t){var n=ml(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ml(n)}}function du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pu(){for(var e=window,t=Si();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Si(e.document)}return t}function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cm(e){var t=pu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&du(n.ownerDocument.documentElement,n)){if(r!==null&&da(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=hl(n,s);var a=hl(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nm=It&&"documentMode"in document&&11>=document.documentMode,kn=null,fo=null,gr=null,go=!1;function fl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;go||kn==null||kn!==Si(r)||(r=kn,"selectionStart"in r&&da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&Tr(gr,r)||(gr=r,r=Ai(fo,"onSelect"),0<r.length&&(t=new la("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},Ns={},mu={};It&&(mu=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function ts(e){if(Ns[e])return Ns[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mu)return Ns[e]=t[n];return e}var hu=ts("animationend"),fu=ts("animationiteration"),gu=ts("animationstart"),yu=ts("transitionend"),vu=new Map,gl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){vu.set(e,t),fn(t,[e])}for(var Is=0;Is<gl.length;Is++){var Ts=gl[Is],Im=Ts.toLowerCase(),Tm=Ts[0].toUpperCase()+Ts.slice(1);Kt(Im,"on"+Tm)}Kt(hu,"onAnimationEnd");Kt(fu,"onAnimationIteration");Kt(gu,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(yu,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Em=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function yl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ip(r,t,void 0,e),e.currentTarget=null}function wu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;yl(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;yl(i,l,u),s=c}}}if(Ni)throw e=uo,Ni=!1,uo=null,e}function Z(e,t){var n=t[xo];n===void 0&&(n=t[xo]=new Set);var r=e+"__bubble";n.has(r)||(bu(t,e,2,!1),n.add(r))}function Es(e,t,n){var r=0;t&&(r|=4),bu(n,e,r,t)}var ti="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[ti]){e[ti]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(Em.has(n)||Es(n,!1,e),Es(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,Es("selectionchange",!1,t))}}function bu(e,t,n,r){switch(ru(t)){case 1:var i=Bp;break;case 4:i=qp;break;default:i=oa}n=i.bind(null,t,n,e),i=void 0,!co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ps(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=rn(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Bc(function(){var u=s,h=na(n),f=[];e:{var y=vu.get(e);if(y!==void 0){var v=la,g=e;switch(e){case"keypress":if(gi(n)===0)break e;case"keydown":case"keyup":v=sm;break;case"focusin":g="focus",v=js;break;case"focusout":g="blur",v=js;break;case"beforeblur":case"afterblur":v=js;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=lm;break;case hu:case fu:case gu:v=Yp;break;case yu:v=um;break;case"scroll":v=Hp;break;case"wheel":v=pm;break;case"copy":case"cut":case"paste":v=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=al}var b=(t&4)!==0,T=!b&&e==="scroll",m=b?y!==null?y+"Capture":null:y;b=[];for(var d=u,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,m!==null&&(w=jr(d,m),w!=null&&b.push(Pr(d,w,p)))),T)break;d=d.return}0<b.length&&(y=new v(y,g,null,n,h),f.push({event:y,listeners:b}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",y&&n!==ao&&(g=n.relatedTarget||n.fromElement)&&(rn(g)||g[Tt]))break e;if((v||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?rn(g):null,g!==null&&(T=gn(g),g!==T||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(b=sl,w="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=al,w="onPointerLeave",m="onPointerEnter",d="pointer"),T=v==null?y:Sn(v),p=g==null?y:Sn(g),y=new b(w,d+"leave",v,n,h),y.target=T,y.relatedTarget=p,w=null,rn(h)===u&&(b=new b(m,d+"enter",g,n,h),b.target=p,b.relatedTarget=T,w=b),T=w,v&&g)t:{for(b=v,m=g,d=0,p=b;p;p=yn(p))d++;for(p=0,w=m;w;w=yn(w))p++;for(;0<d-p;)b=yn(b),d--;for(;0<p-d;)m=yn(m),p--;for(;d--;){if(b===m||m!==null&&b===m.alternate)break t;b=yn(b),m=yn(m)}b=null}else b=null;v!==null&&vl(f,y,v,b,!1),g!==null&&T!==null&&vl(f,T,g,b,!0)}}e:{if(y=u?Sn(u):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var N=wm;else if(ul(y))if(cu)N=jm;else{N=xm;var I=bm}else(v=y.nodeName)&&v.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(N=km);if(N&&(N=N(e,u))){lu(f,N,n,h);break e}I&&I(e,y,u),e==="focusout"&&(I=y._wrapperState)&&I.controlled&&y.type==="number"&&no(y,"number",y.value)}switch(I=u?Sn(u):window,e){case"focusin":(ul(I)||I.contentEditable==="true")&&(kn=I,fo=u,gr=null);break;case"focusout":gr=fo=kn=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,fl(f,n,h);break;case"selectionchange":if(Nm)break;case"keydown":case"keyup":fl(f,n,h)}var P;if(ua)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else xn?ou(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(su&&n.locale!=="ko"&&(xn||E!=="onCompositionStart"?E==="onCompositionEnd"&&xn&&(P=iu()):(Ft=h,aa="value"in Ft?Ft.value:Ft.textContent,xn=!0)),I=Ai(u,E),0<I.length&&(E=new ol(E,e,null,n,h),f.push({event:E,listeners:I}),P?E.data=P:(P=au(n),P!==null&&(E.data=P)))),(P=hm?fm(e,n):gm(e,n))&&(u=Ai(u,"onBeforeInput"),0<u.length&&(h=new ol("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=P))}wu(f,t)})}function Pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=jr(e,n),s!=null&&r.unshift(Pr(e,s,i)),s=jr(e,t),s!=null&&r.push(Pr(e,s,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vl(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=jr(n,s),c!=null&&a.unshift(Pr(n,c,l))):i||(c=jr(n,s),c!=null&&a.push(Pr(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Pm=/\r\n?/g,Am=/\u0000|\uFFFD/g;function wl(e){return(typeof e=="string"?e:""+e).replace(Pm,`
`).replace(Am,"")}function ni(e,t,n){if(t=wl(t),wl(e)!==t&&n)throw Error(j(425))}function Li(){}var yo=null,vo=null;function wo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,Lm=typeof clearTimeout=="function"?clearTimeout:void 0,bl=typeof Promise=="function"?Promise:void 0,_m=typeof queueMicrotask=="function"?queueMicrotask:typeof bl<"u"?function(e){return bl.resolve(null).then(e).catch($m)}:bo;function $m(e){setTimeout(function(){throw e})}function As(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Nr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),vt="__reactFiber$"+Gn,Ar="__reactProps$"+Gn,Tt="__reactContainer$"+Gn,xo="__reactEvents$"+Gn,zm="__reactListeners$"+Gn,Rm="__reactHandles$"+Gn;function rn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xl(e);e!==null;){if(n=e[vt])return n;e=xl(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[vt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function ns(e){return e[Ar]||null}var ko=[],Cn=-1;function Xt(e){return{current:e}}function ee(e){0>Cn||(e.current=ko[Cn],ko[Cn]=null,Cn--)}function K(e,t){Cn++,ko[Cn]=e.current,e.current=t}var Yt={},Ie=Xt(Yt),Me=Xt(!1),un=Yt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function _i(){ee(Me),ee(Ie)}function kl(e,t,n){if(Ie.current!==Yt)throw Error(j(168));K(Ie,t),K(Me,n)}function xu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,bp(e)||"Unknown",i));return ie({},n,r)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,un=Ie.current,K(Ie,e),K(Me,Me.current),!0}function jl(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=xu(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,ee(Me),ee(Ie),K(Ie,e)):ee(Me),K(Me,n)}var jt=null,rs=!1,Ls=!1;function ku(e){jt===null?jt=[e]:jt.push(e)}function Mm(e){rs=!0,ku(e)}function Zt(){if(!Ls&&jt!==null){Ls=!0;var e=0,t=Q;try{var n=jt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,rs=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),Gc(ra,Zt),i}finally{Q=t,Ls=!1}}return null}var Nn=[],In=0,zi=null,Ri=0,Ke=[],Xe=0,dn=null,St=1,Ct="";function tn(e,t){Nn[In++]=Ri,Nn[In++]=zi,zi=e,Ri=t}function ju(e,t,n){Ke[Xe++]=St,Ke[Xe++]=Ct,Ke[Xe++]=dn,dn=e;var r=St;e=Ct;var i=32-lt(r)-1;r&=~(1<<i),n+=1;var s=32-lt(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,St=1<<32-lt(t)+i|n<<i|r,Ct=s+e}else St=1<<s|n<<i|r,Ct=e}function pa(e){e.return!==null&&(tn(e,1),ju(e,1,0))}function ma(e){for(;e===zi;)zi=Nn[--In],Nn[In]=null,Ri=Nn[--In],Nn[In]=null;for(;e===dn;)dn=Ke[--Xe],Ke[Xe]=null,Ct=Ke[--Xe],Ke[Xe]=null,St=Ke[--Xe],Ke[Xe]=null}var He=null,qe=null,te=!1,at=null;function Su(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,qe=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,qe=null,!0):!1;default:return!1}}function jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(te){var t=qe;if(t){var n=t;if(!Sl(e,t)){if(jo(e))throw Error(j(418));t=qt(n.nextSibling);var r=He;t&&Sl(e,t)?Su(r,n):(e.flags=e.flags&-4097|2,te=!1,He=e)}}else{if(jo(e))throw Error(j(418));e.flags=e.flags&-4097|2,te=!1,He=e}}}function Cl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function ri(e){if(e!==He)return!1;if(!te)return Cl(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wo(e.type,e.memoizedProps)),t&&(t=qe)){if(jo(e))throw Cu(),Error(j(418));for(;t;)Su(e,t),t=qt(t.nextSibling)}if(Cl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=He?qt(e.stateNode.nextSibling):null;return!0}function Cu(){for(var e=qe;e;)e=qt(e.nextSibling)}function Fn(){qe=He=null,te=!1}function ha(e){at===null?at=[e]:at.push(e)}var Dm=At.ReactCurrentBatchConfig;function nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function ii(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nl(e){var t=e._init;return t(e._payload)}function Nu(e){function t(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=Qt(m,d),m.index=0,m.sibling=null,m}function s(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,p,w){return d===null||d.tag!==6?(d=Fs(p,m.mode,w),d.return=m,d):(d=i(d,p),d.return=m,d)}function c(m,d,p,w){var N=p.type;return N===bn?h(m,d,p.props.children,w,p.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===zt&&Nl(N)===d.type)?(w=i(d,p.props),w.ref=nr(m,d,p),w.return=m,w):(w=ji(p.type,p.key,p.props,null,m.mode,w),w.ref=nr(m,d,p),w.return=m,w)}function u(m,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Os(p,m.mode,w),d.return=m,d):(d=i(d,p.children||[]),d.return=m,d)}function h(m,d,p,w,N){return d===null||d.tag!==7?(d=ln(p,m.mode,w,N),d.return=m,d):(d=i(d,p),d.return=m,d)}function f(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Fs(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gr:return p=ji(d.type,d.key,d.props,null,m.mode,p),p.ref=nr(m,null,d),p.return=m,p;case wn:return d=Os(d,m.mode,p),d.return=m,d;case zt:var w=d._init;return f(m,w(d._payload),p)}if(lr(d)||Kn(d))return d=ln(d,m.mode,p,null),d.return=m,d;ii(m,d)}return null}function y(m,d,p,w){var N=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:l(m,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gr:return p.key===N?c(m,d,p,w):null;case wn:return p.key===N?u(m,d,p,w):null;case zt:return N=p._init,y(m,d,N(p._payload),w)}if(lr(p)||Kn(p))return N!==null?null:h(m,d,p,w,null);ii(m,p)}return null}function v(m,d,p,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(p)||null,l(d,m,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gr:return m=m.get(w.key===null?p:w.key)||null,c(d,m,w,N);case wn:return m=m.get(w.key===null?p:w.key)||null,u(d,m,w,N);case zt:var I=w._init;return v(m,d,p,I(w._payload),N)}if(lr(w)||Kn(w))return m=m.get(p)||null,h(d,m,w,N,null);ii(d,w)}return null}function g(m,d,p,w){for(var N=null,I=null,P=d,E=d=0,O=null;P!==null&&E<p.length;E++){P.index>E?(O=P,P=null):O=P.sibling;var L=y(m,P,p[E],w);if(L===null){P===null&&(P=O);break}e&&P&&L.alternate===null&&t(m,P),d=s(L,d,E),I===null?N=L:I.sibling=L,I=L,P=O}if(E===p.length)return n(m,P),te&&tn(m,E),N;if(P===null){for(;E<p.length;E++)P=f(m,p[E],w),P!==null&&(d=s(P,d,E),I===null?N=P:I.sibling=P,I=P);return te&&tn(m,E),N}for(P=r(m,P);E<p.length;E++)O=v(P,m,E,p[E],w),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?E:O.key),d=s(O,d,E),I===null?N=O:I.sibling=O,I=O);return e&&P.forEach(function(J){return t(m,J)}),te&&tn(m,E),N}function b(m,d,p,w){var N=Kn(p);if(typeof N!="function")throw Error(j(150));if(p=N.call(p),p==null)throw Error(j(151));for(var I=N=null,P=d,E=d=0,O=null,L=p.next();P!==null&&!L.done;E++,L=p.next()){P.index>E?(O=P,P=null):O=P.sibling;var J=y(m,P,L.value,w);if(J===null){P===null&&(P=O);break}e&&P&&J.alternate===null&&t(m,P),d=s(J,d,E),I===null?N=J:I.sibling=J,I=J,P=O}if(L.done)return n(m,P),te&&tn(m,E),N;if(P===null){for(;!L.done;E++,L=p.next())L=f(m,L.value,w),L!==null&&(d=s(L,d,E),I===null?N=L:I.sibling=L,I=L);return te&&tn(m,E),N}for(P=r(m,P);!L.done;E++,L=p.next())L=v(P,m,E,L.value,w),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?E:L.key),d=s(L,d,E),I===null?N=L:I.sibling=L,I=L);return e&&P.forEach(function(fe){return t(m,fe)}),te&&tn(m,E),N}function T(m,d,p,w){if(typeof p=="object"&&p!==null&&p.type===bn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Gr:e:{for(var N=p.key,I=d;I!==null;){if(I.key===N){if(N=p.type,N===bn){if(I.tag===7){n(m,I.sibling),d=i(I,p.props.children),d.return=m,m=d;break e}}else if(I.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===zt&&Nl(N)===I.type){n(m,I.sibling),d=i(I,p.props),d.ref=nr(m,I,p),d.return=m,m=d;break e}n(m,I);break}else t(m,I);I=I.sibling}p.type===bn?(d=ln(p.props.children,m.mode,w,p.key),d.return=m,m=d):(w=ji(p.type,p.key,p.props,null,m.mode,w),w.ref=nr(m,d,p),w.return=m,m=w)}return a(m);case wn:e:{for(I=p.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(m,d.sibling),d=i(d,p.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Os(p,m.mode,w),d.return=m,m=d}return a(m);case zt:return I=p._init,T(m,d,I(p._payload),w)}if(lr(p))return g(m,d,p,w);if(Kn(p))return b(m,d,p,w);ii(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,p),d.return=m,m=d):(n(m,d),d=Fs(p,m.mode,w),d.return=m,m=d),a(m)):n(m,d)}return T}var On=Nu(!0),Iu=Nu(!1),Mi=Xt(null),Di=null,Tn=null,fa=null;function ga(){fa=Tn=Di=null}function ya(e){var t=Mi.current;ee(Mi),e._currentValue=t}function Co(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){Di=e,fa=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(fa!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(Di===null)throw Error(j(308));Tn=e,Di.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var sn=null;function va(e){sn===null?sn=[e]:sn.push(e)}function Tu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,va(t)):(n.next=i.next,i.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Et(e,n)}return i=r.interleaved,i===null?(t.next=t,va(r)):(t.next=i.next,i.next=t),r.interleaved=t,Et(e,n)}function yi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ia(e,n)}}function Il(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fi(e,t,n,r){var i=e.updateQueue;Rt=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;a=0,h=u=c=null,l=s;do{var y=l.lane,v=l.eventTime;if((r&y)===y){h!==null&&(h=h.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,b=l;switch(y=t,v=n,b.tag){case 1:if(g=b.payload,typeof g=="function"){f=g.call(v,f,y);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,y=typeof g=="function"?g.call(v,f,y):g,y==null)break e;f=ie({},f,y);break e;case 2:Rt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else v={eventTime:v,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=v,c=f):h=h.next=v,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(h===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);mn|=a,e.lanes=a,e.memoizedState=f}}function Tl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Wr={},bt=Xt(Wr),Lr=Xt(Wr),_r=Xt(Wr);function on(e){if(e===Wr)throw Error(j(174));return e}function ba(e,t){switch(K(_r,t),K(Lr,e),K(bt,Wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:io(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=io(t,e)}ee(bt),K(bt,t)}function Un(){ee(bt),ee(Lr),ee(_r)}function Pu(e){on(_r.current);var t=on(bt.current),n=io(t,e.type);t!==n&&(K(Lr,e),K(bt,n))}function xa(e){Lr.current===e&&(ee(bt),ee(Lr))}var ne=Xt(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _s=[];function ka(){for(var e=0;e<_s.length;e++)_s[e]._workInProgressVersionPrimary=null;_s.length=0}var vi=At.ReactCurrentDispatcher,$s=At.ReactCurrentBatchConfig,pn=0,re=null,me=null,ge=null,Ui=!1,yr=!1,$r=0,Fm=0;function Se(){throw Error(j(321))}function ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Sa(e,t,n,r,i,s){if(pn=s,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vi.current=e===null||e.memoizedState===null?Bm:qm,e=n(r,i),yr){s=0;do{if(yr=!1,$r=0,25<=s)throw Error(j(301));s+=1,ge=me=null,t.updateQueue=null,vi.current=Hm,e=n(r,i)}while(yr)}if(vi.current=Wi,t=me!==null&&me.next!==null,pn=0,ge=me=re=null,Ui=!1,t)throw Error(j(300));return e}function Ca(){var e=$r!==0;return $r=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?re.memoizedState=ge=e:ge=ge.next=e,ge}function nt(){if(me===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ge===null?re.memoizedState:ge.next;if(t!==null)ge=t,me=e;else{if(e===null)throw Error(j(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ge===null?re.memoizedState=ge=e:ge=ge.next=e}return ge}function zr(e,t){return typeof t=="function"?t(e):t}function zs(e){var t=nt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var h=u.lane;if((pn&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,re.lanes|=h,mn|=h}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,pt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,re.lanes|=s,mn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rs(e){var t=nt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);pt(s,t.memoizedState)||(Re=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Au(){}function Lu(e,t){var n=re,r=nt(),i=t(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Re=!0),r=r.queue,Na(zu.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Rr(9,$u.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(j(349));pn&30||_u(n,t,i)}return i}function _u(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $u(e,t,n,r){t.value=n,t.getSnapshot=r,Ru(t)&&Mu(e)}function zu(e,t,n){return n(function(){Ru(t)&&Mu(e)})}function Ru(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function Mu(e){var t=Et(e,1);t!==null&&ct(t,e,1,-1)}function El(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=Wm.bind(null,re,e),[t.memoizedState,e]}function Rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Du(){return nt().memoizedState}function wi(e,t,n,r){var i=gt();re.flags|=e,i.memoizedState=Rr(1|t,n,void 0,r===void 0?null:r)}function is(e,t,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(me!==null){var a=me.memoizedState;if(s=a.destroy,r!==null&&ja(r,a.deps)){i.memoizedState=Rr(t,n,s,r);return}}re.flags|=e,i.memoizedState=Rr(1|t,n,s,r)}function Pl(e,t){return wi(8390656,8,e,t)}function Na(e,t){return is(2048,8,e,t)}function Fu(e,t){return is(4,2,e,t)}function Ou(e,t){return is(4,4,e,t)}function Uu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wu(e,t,n){return n=n!=null?n.concat([e]):null,is(4,4,Uu.bind(null,t,e),n)}function Ia(){}function Bu(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ja(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qu(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ja(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hu(e,t,n){return pn&21?(pt(n,t)||(n=Yc(),re.lanes|=n,mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Om(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=$s.transition;$s.transition={};try{e(!1),t()}finally{Q=n,$s.transition=r}}function Vu(){return nt().memoizedState}function Um(e,t,n){var r=Gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gu(e))Qu(t,n);else if(n=Tu(e,t,n,r),n!==null){var i=Pe();ct(n,e,r,i),Ju(n,t,r)}}function Wm(e,t,n){var r=Gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gu(e))Qu(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,a)){var c=t.interleaved;c===null?(i.next=i,va(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Tu(e,t,i,r),n!==null&&(i=Pe(),ct(n,e,r,i),Ju(n,t,r))}}function Gu(e){var t=e.alternate;return e===re||t!==null&&t===re}function Qu(e,t){yr=Ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ju(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ia(e,n)}}var Wi={readContext:tt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Bm={readContext:tt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Pl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wi(4194308,4,Uu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return wi(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Um.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:El,useDebugValue:Ia,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=El(!1),t=e[0];return e=Om.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,i=gt();if(te){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ve===null)throw Error(j(349));pn&30||_u(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Pl(zu.bind(null,r,s,e),[e]),r.flags|=2048,Rr(9,$u.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=gt(),t=ve.identifierPrefix;if(te){var n=Ct,r=St;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Fm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qm={readContext:tt,useCallback:Bu,useContext:tt,useEffect:Na,useImperativeHandle:Wu,useInsertionEffect:Fu,useLayoutEffect:Ou,useMemo:qu,useReducer:zs,useRef:Du,useState:function(){return zs(zr)},useDebugValue:Ia,useDeferredValue:function(e){var t=nt();return Hu(t,me.memoizedState,e)},useTransition:function(){var e=zs(zr)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Au,useSyncExternalStore:Lu,useId:Vu,unstable_isNewReconciler:!1},Hm={readContext:tt,useCallback:Bu,useContext:tt,useEffect:Na,useImperativeHandle:Wu,useInsertionEffect:Fu,useLayoutEffect:Ou,useMemo:qu,useReducer:Rs,useRef:Du,useState:function(){return Rs(zr)},useDebugValue:Ia,useDeferredValue:function(e){var t=nt();return me===null?t.memoizedState=e:Hu(t,me.memoizedState,e)},useTransition:function(){var e=Rs(zr)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Au,useSyncExternalStore:Lu,useId:Vu,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function No(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ss={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=Gt(e),s=Nt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ht(e,s,i),t!==null&&(ct(t,e,i,r),yi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=Gt(e),s=Nt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ht(e,s,i),t!==null&&(ct(t,e,i,r),yi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Gt(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ht(e,i,r),t!==null&&(ct(t,e,r,n),yi(t,e,r))}};function Al(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(i,s):!0}function Yu(e,t,n){var r=!1,i=Yt,s=t.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=De(t)?un:Ie.current,r=t.contextTypes,s=(r=r!=null)?Dn(e,i):Yt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ll(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ss.enqueueReplaceState(t,t.state,null)}function Io(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},wa(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=De(t)?un:Ie.current,i.context=Dn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(No(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ss.enqueueReplaceState(i,i.state,null),Fi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=wp(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function To(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vm=typeof WeakMap=="function"?WeakMap:Map;function Ku(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qi||(qi=!0,Do=r),To(e,t)},n}function Xu(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){To(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){To(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function _l(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=oh.bind(null,e,t,n),t.then(e,e))}function $l(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e)}var Gm=At.ReactCurrentOwner,Re=!1;function Ee(e,t,n,r){t.child=e===null?Iu(t,null,n,r):On(t,e.child,n,r)}function Rl(e,t,n,r,i){n=n.render;var s=t.ref;return zn(t,i),r=Sa(e,t,n,r,s,i),n=Ca(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(te&&n&&pa(t),t.flags|=1,Ee(e,t,r,i),t.child)}function Ml(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!za(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Zu(e,t,s,r,i)):(e=ji(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Tr,n(a,r)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Qt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Zu(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Tr(s,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return Eo(e,t,n,r,i)}function ed(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Pn,Be),Be|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Pn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(Pn,Be),Be|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,K(Pn,Be),Be|=r;return Ee(e,t,i,n),t.child}function td(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Eo(e,t,n,r,i){var s=De(n)?un:Ie.current;return s=Dn(t,s),zn(t,i),n=Sa(e,t,n,r,s,i),r=Ca(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(te&&r&&pa(t),t.flags|=1,Ee(e,t,n,i),t.child)}function Dl(e,t,n,r,i){if(De(n)){var s=!0;$i(t)}else s=!1;if(zn(t,i),t.stateNode===null)bi(e,t),Yu(t,n,r),Io(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=De(n)?un:Ie.current,u=Dn(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Ll(t,a,r,u),Rt=!1;var y=t.memoizedState;a.state=y,Fi(t,r,a,i),c=t.memoizedState,l!==r||y!==c||Me.current||Rt?(typeof h=="function"&&(No(t,n,h,r),c=t.memoizedState),(l=Rt||Al(t,n,l,r,y,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Eu(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:st(t.type,l),a.props=u,f=t.pendingProps,y=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=tt(c):(c=De(n)?un:Ie.current,c=Dn(t,c));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||y!==c)&&Ll(t,a,r,c),Rt=!1,y=t.memoizedState,a.state=y,Fi(t,r,a,i);var g=t.memoizedState;l!==f||y!==g||Me.current||Rt?(typeof v=="function"&&(No(t,n,v,r),g=t.memoizedState),(u=Rt||Al(t,n,u,r,y,g,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Po(e,t,n,r,s,i)}function Po(e,t,n,r,i,s){td(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&jl(t,n,!1),Pt(e,t,s);r=t.stateNode,Gm.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=On(t,e.child,null,s),t.child=On(t,null,l,s)):Ee(e,t,l,s),t.memoizedState=r.state,i&&jl(t,n,!0),t.child}function nd(e){var t=e.stateNode;t.pendingContext?kl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kl(e,t.context,!1),ba(e,t.containerInfo)}function Fl(e,t,n,r,i){return Fn(),ha(i),t.flags|=256,Ee(e,t,n,r),t.child}var Ao={dehydrated:null,treeContext:null,retryLane:0};function Lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function rd(e,t,n){var r=t.pendingProps,i=ne.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(ne,i&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ls(a,r,0,null),e=ln(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Lo(n),t.memoizedState=Ao,e):Ta(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Qm(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Qt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Qt(l,s):(s=ln(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Lo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Ao,r}return s=e.child,e=s.sibling,r=Qt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ta(e,t){return t=ls({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function si(e,t,n,r){return r!==null&&ha(r),On(t,e.child,null,n),e=Ta(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qm(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Ms(Error(j(422))),si(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ls({mode:"visible",children:r.children},i,0,null),s=ln(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&On(t,e.child,null,a),t.child.memoizedState=Lo(a),t.memoizedState=Ao,s);if(!(t.mode&1))return si(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Ms(s,r,void 0),si(e,t,a,r)}if(l=(a&e.childLanes)!==0,Re||l){if(r=ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Et(e,i),ct(r,e,i,-1))}return $a(),r=Ms(Error(j(421))),si(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ah.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,qe=qt(i.nextSibling),He=t,te=!0,at=null,e!==null&&(Ke[Xe++]=St,Ke[Xe++]=Ct,Ke[Xe++]=dn,St=e.id,Ct=e.overflow,dn=t),t=Ta(t,r.children),t.flags|=4096,t)}function Ol(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Co(e.return,t,n)}function Ds(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function id(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ee(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ol(e,n,t);else if(e.tag===19)Ol(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ds(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ds(t,!0,n,null,s);break;case"together":Ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jm(e,t,n){switch(t.tag){case 3:nd(t),Fn();break;case 5:Pu(t);break;case 1:De(t.type)&&$i(t);break;case 4:ba(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(Mi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?rd(e,t,n):(K(ne,ne.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);K(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return id(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,ed(e,t,n)}return Pt(e,t,n)}var sd,_o,od,ad;sd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_o=function(){};od=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,on(bt.current);var s=null;switch(n){case"input":i=eo(e,i),r=eo(e,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=ro(e,i),r=ro(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Li)}so(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Z("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ad=function(e,t,n,r){n!==r&&(t.flags|=4)};function rr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ym(e,t,n){var r=t.pendingProps;switch(ma(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return De(t.type)&&_i(),Ce(t),null;case 3:return r=t.stateNode,Un(),ee(Me),ee(Ie),ka(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Uo(at),at=null))),_o(e,t),Ce(t),null;case 5:xa(t);var i=on(_r.current);if(n=t.type,e!==null&&t.stateNode!=null)od(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Ce(t),null}if(e=on(bt.current),ri(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[vt]=t,r[Ar]=s,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<ur.length;i++)Z(ur[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Ja(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Ka(r,s),Z("invalid",r)}so(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ni(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ni(r.textContent,l,e),i=["children",""+l]):xr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Z("scroll",r)}switch(n){case"input":Qr(r),Ya(r,s,!0);break;case"textarea":Qr(r),Xa(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Li)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[vt]=t,e[Ar]=r,sd(e,t,!1,!1),t.stateNode=e;e:{switch(a=oo(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<ur.length;i++)Z(ur[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":Ja(e,r),i=eo(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),Z("invalid",e);break;case"textarea":Ka(e,r),i=ro(e,r),Z("invalid",e);break;default:i=r}so(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Dc(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Rc(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&kr(e,c):typeof c=="number"&&kr(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xr.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Z("scroll",e):c!=null&&Xo(e,s,c,a))}switch(n){case"input":Qr(e),Ya(e,r,!1);break;case"textarea":Qr(e),Xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?An(e,!!r.multiple,s,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Li)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)ad(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=on(_r.current),on(bt.current),ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(s=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ni(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Ce(t),null;case 13:if(ee(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&qe!==null&&t.mode&1&&!(t.flags&128))Cu(),Fn(),t.flags|=98560,s=!1;else if(s=ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[vt]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),s=!1}else at!==null&&(Uo(at),at=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?he===0&&(he=3):$a())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Un(),_o(e,t),e===null&&Er(t.stateNode.containerInfo),Ce(t),null;case 10:return ya(t.type._context),Ce(t),null;case 17:return De(t.type)&&_i(),Ce(t),null;case 19:if(ee(ne),s=t.memoizedState,s===null)return Ce(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)rr(s,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Oi(e),a!==null){for(t.flags|=128,rr(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ne,ne.current&1|2),t.child}e=e.sibling}s.tail!==null&&ue()>Bn&&(t.flags|=128,r=!0,rr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Oi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!te)return Ce(t),null}else 2*ue()-s.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,rr(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ue(),t.sibling=null,n=ne.current,K(ne,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return _a(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Km(e,t){switch(ma(t),t.tag){case 1:return De(t.type)&&_i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),ee(Me),ee(Ie),ka(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xa(t),null;case 13:if(ee(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ne),null;case 4:return Un(),null;case 10:return ya(t.type._context),null;case 22:case 23:return _a(),null;case 24:return null;default:return null}}var oi=!1,Ne=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,A=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function $o(e,t,n){try{n()}catch(r){oe(e,t,r)}}var Ul=!1;function Zm(e,t){if(yo=Ei,e=pu(),da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,h=0,f=e,y=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==s||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)y=f,f=v;for(;;){if(f===e)break t;if(y===n&&++u===i&&(l=a),y===s&&++h===r&&(c=a),(v=f.nextSibling)!==null)break;f=y,y=f.parentNode}f=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(vo={focusedElem:e,selectionRange:n},Ei=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,T=g.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:st(t.type,b),T);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){oe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return g=Ul,Ul=!1,g}function vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&$o(t,n,s)}i=i.next}while(i!==r)}}function os(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ld(e){var t=e.alternate;t!==null&&(e.alternate=null,ld(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Ar],delete t[xo],delete t[zm],delete t[Rm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cd(e){return e.tag===5||e.tag===3||e.tag===4}function Wl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Li));else if(r!==4&&(e=e.child,e!==null))for(Ro(e,t,n),e=e.sibling;e!==null;)Ro(e,t,n),e=e.sibling}function Mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mo(e,t,n),e=e.sibling;e!==null;)Mo(e,t,n),e=e.sibling}var xe=null,ot=!1;function _t(e,t,n){for(n=n.child;n!==null;)ud(e,t,n),n=n.sibling}function ud(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Xi,n)}catch{}switch(n.tag){case 5:Ne||En(n,t);case 6:var r=xe,i=ot;xe=null,_t(e,t,n),xe=r,ot=i,xe!==null&&(ot?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ot?(e=xe,n=n.stateNode,e.nodeType===8?As(e.parentNode,n):e.nodeType===1&&As(e,n),Nr(e)):As(xe,n.stateNode));break;case 4:r=xe,i=ot,xe=n.stateNode.containerInfo,ot=!0,_t(e,t,n),xe=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&$o(n,t,a),i=i.next}while(i!==r)}_t(e,t,n);break;case 1:if(!Ne&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){oe(n,t,l)}_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,_t(e,t,n),Ne=r):_t(e,t,n);break;default:_t(e,t,n)}}function Bl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xm),t.forEach(function(r){var i=lh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,ot=!1;break e;case 3:xe=l.stateNode.containerInfo,ot=!0;break e;case 4:xe=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(xe===null)throw Error(j(160));ud(s,a,i),xe=null,ot=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dd(t,e),t=t.sibling}function dd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),ht(e),r&4){try{vr(3,e,e.return),os(3,e)}catch(b){oe(e,e.return,b)}try{vr(5,e,e.return)}catch(b){oe(e,e.return,b)}}break;case 1:rt(t,e),ht(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(rt(t,e),ht(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var i=e.stateNode;try{kr(i,"")}catch(b){oe(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&_c(i,s),oo(l,a);var u=oo(l,s);for(a=0;a<c.length;a+=2){var h=c[a],f=c[a+1];h==="style"?Dc(i,f):h==="dangerouslySetInnerHTML"?Rc(i,f):h==="children"?kr(i,f):Xo(i,h,f,u)}switch(l){case"input":to(i,s);break;case"textarea":$c(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?An(i,!!s.multiple,v,!1):y!==!!s.multiple&&(s.defaultValue!=null?An(i,!!s.multiple,s.defaultValue,!0):An(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ar]=s}catch(b){oe(e,e.return,b)}}break;case 6:if(rt(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){oe(e,e.return,b)}}break;case 3:if(rt(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(b){oe(e,e.return,b)}break;case 4:rt(t,e),ht(e);break;case 13:rt(t,e),ht(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Aa=ue())),r&4&&Bl(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||h,rt(t,e),Ne=u):rt(t,e),ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(A=e,h=e.child;h!==null;){for(f=A=h;A!==null;){switch(y=A,v=y.child,y.tag){case 0:case 11:case 14:case 15:vr(4,y,y.return);break;case 1:En(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(b){oe(r,n,b)}}break;case 5:En(y,y.return);break;case 22:if(y.memoizedState!==null){Hl(f);continue}}v!==null?(v.return=y,A=v):Hl(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Mc("display",a))}catch(b){oe(e,e.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){oe(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:rt(t,e),ht(e),r&4&&Bl(e);break;case 21:break;default:rt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cd(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kr(i,""),r.flags&=-33);var s=Wl(e);Mo(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Wl(e);Ro(e,l,a);break;default:throw Error(j(161))}}catch(c){oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eh(e,t,n){A=e,pd(e)}function pd(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||oi;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ne;l=oi;var u=Ne;if(oi=a,(Ne=c)&&!u)for(A=i;A!==null;)a=A,c=a.child,a.tag===22&&a.memoizedState!==null?Vl(i):c!==null?(c.return=a,A=c):Vl(i);for(;s!==null;)A=s,pd(s),s=s.sibling;A=i,oi=l,Ne=u}ql(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):ql(e)}}function ql(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||os(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Tl(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tl(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Nr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Ne||t.flags&512&&zo(t)}catch(y){oe(t,t.return,y)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Hl(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Vl(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{os(4,t)}catch(c){oe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){oe(t,i,c)}}var s=t.return;try{zo(t)}catch(c){oe(t,s,c)}break;case 5:var a=t.return;try{zo(t)}catch(c){oe(t,a,c)}}}catch(c){oe(t,t.return,c)}if(t===e){A=null;break}var l=t.sibling;if(l!==null){l.return=t.return,A=l;break}A=t.return}}var th=Math.ceil,Bi=At.ReactCurrentDispatcher,Ea=At.ReactCurrentOwner,et=At.ReactCurrentBatchConfig,G=0,ve=null,de=null,ke=0,Be=0,Pn=Xt(0),he=0,Mr=null,mn=0,as=0,Pa=0,wr=null,ze=null,Aa=0,Bn=1/0,kt=null,qi=!1,Do=null,Vt=null,ai=!1,Ot=null,Hi=0,br=0,Fo=null,xi=-1,ki=0;function Pe(){return G&6?ue():xi!==-1?xi:xi=ue()}function Gt(e){return e.mode&1?G&2&&ke!==0?ke&-ke:Dm.transition!==null?(ki===0&&(ki=Yc()),ki):(e=Q,e!==0||(e=window.event,e=e===void 0?16:ru(e.type)),e):1}function ct(e,t,n,r){if(50<br)throw br=0,Fo=null,Error(j(185));Fr(e,n,r),(!(G&2)||e!==ve)&&(e===ve&&(!(G&2)&&(as|=n),he===4&&Dt(e,ke)),Fe(e,r),n===1&&G===0&&!(t.mode&1)&&(Bn=ue()+500,rs&&Zt()))}function Fe(e,t){var n=e.callbackNode;Dp(e,t);var r=Ti(e,e===ve?ke:0);if(r===0)n!==null&&tl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tl(n),t===1)e.tag===0?Mm(Gl.bind(null,e)):ku(Gl.bind(null,e)),_m(function(){!(G&6)&&Zt()}),n=null;else{switch(Kc(r)){case 1:n=ra;break;case 4:n=Qc;break;case 16:n=Ii;break;case 536870912:n=Jc;break;default:n=Ii}n=bd(n,md.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function md(e,t){if(xi=-1,ki=0,G&6)throw Error(j(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Ti(e,e===ve?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Vi(e,r);else{t=r;var i=G;G|=2;var s=fd();(ve!==e||ke!==t)&&(kt=null,Bn=ue()+500,an(e,t));do try{ih();break}catch(l){hd(e,l)}while(!0);ga(),Bi.current=s,G=i,de!==null?t=0:(ve=null,ke=0,t=he)}if(t!==0){if(t===2&&(i=po(e),i!==0&&(r=i,t=Oo(e,i))),t===1)throw n=Mr,an(e,0),Dt(e,r),Fe(e,ue()),n;if(t===6)Dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!nh(i)&&(t=Vi(e,r),t===2&&(s=po(e),s!==0&&(r=s,t=Oo(e,s))),t===1))throw n=Mr,an(e,0),Dt(e,r),Fe(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:nn(e,ze,kt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Aa+500-ue(),10<t)){if(Ti(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bo(nn.bind(null,e,ze,kt),t);break}nn(e,ze,kt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-lt(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*th(r/1960))-r,10<r){e.timeoutHandle=bo(nn.bind(null,e,ze,kt),r);break}nn(e,ze,kt);break;case 5:nn(e,ze,kt);break;default:throw Error(j(329))}}}return Fe(e,ue()),e.callbackNode===n?md.bind(null,e):null}function Oo(e,t){var n=wr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Vi(e,t),e!==2&&(t=ze,ze=n,t!==null&&Uo(t)),e}function Uo(e){ze===null?ze=e:ze.push.apply(ze,e)}function nh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Pa,t&=~as,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function Gl(e){if(G&6)throw Error(j(327));Rn();var t=Ti(e,0);if(!(t&1))return Fe(e,ue()),null;var n=Vi(e,t);if(e.tag!==0&&n===2){var r=po(e);r!==0&&(t=r,n=Oo(e,r))}if(n===1)throw n=Mr,an(e,0),Dt(e,t),Fe(e,ue()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,ze,kt),Fe(e,ue()),null}function La(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Bn=ue()+500,rs&&Zt())}}function hn(e){Ot!==null&&Ot.tag===0&&!(G&6)&&Rn();var t=G;G|=1;var n=et.transition,r=Q;try{if(et.transition=null,Q=1,e)return e()}finally{Q=r,et.transition=n,G=t,!(G&6)&&Zt()}}function _a(){Be=Pn.current,ee(Pn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lm(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(ma(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_i();break;case 3:Un(),ee(Me),ee(Ie),ka();break;case 5:xa(r);break;case 4:Un();break;case 13:ee(ne);break;case 19:ee(ne);break;case 10:ya(r.type._context);break;case 22:case 23:_a()}n=n.return}if(ve=e,de=e=Qt(e.current,null),ke=Be=t,he=0,Mr=null,Pa=as=mn=0,ze=wr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}sn=null}return e}function hd(e,t){do{var n=de;try{if(ga(),vi.current=Wi,Ui){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ui=!1}if(pn=0,ge=me=re=null,yr=!1,$r=0,Ea.current=null,n===null||n.return===null){he=1,Mr=t,de=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=$l(a);if(v!==null){v.flags&=-257,zl(v,a,l,s,t),v.mode&1&&_l(s,u,t),t=v,c=u;var g=t.updateQueue;if(g===null){var b=new Set;b.add(c),t.updateQueue=b}else g.add(c);break e}else{if(!(t&1)){_l(s,u,t),$a();break e}c=Error(j(426))}}else if(te&&l.mode&1){var T=$l(a);if(T!==null){!(T.flags&65536)&&(T.flags|=256),zl(T,a,l,s,t),ha(Wn(c,l));break e}}s=c=Wn(c,l),he!==4&&(he=2),wr===null?wr=[s]:wr.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Ku(s,c,t);Il(s,m);break e;case 1:l=c;var d=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Vt===null||!Vt.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Xu(s,l,t);Il(s,w);break e}}s=s.return}while(s!==null)}yd(n)}catch(N){t=N,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function fd(){var e=Bi.current;return Bi.current=Wi,e===null?Wi:e}function $a(){(he===0||he===3||he===2)&&(he=4),ve===null||!(mn&268435455)&&!(as&268435455)||Dt(ve,ke)}function Vi(e,t){var n=G;G|=2;var r=fd();(ve!==e||ke!==t)&&(kt=null,an(e,t));do try{rh();break}catch(i){hd(e,i)}while(!0);if(ga(),G=n,Bi.current=r,de!==null)throw Error(j(261));return ve=null,ke=0,he}function rh(){for(;de!==null;)gd(de)}function ih(){for(;de!==null&&!Ep();)gd(de)}function gd(e){var t=wd(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?yd(e):de=t,Ea.current=null}function yd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Km(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=Ym(n,t,Be),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function nn(e,t,n){var r=Q,i=et.transition;try{et.transition=null,Q=1,sh(e,t,n,r)}finally{et.transition=i,Q=r}return null}function sh(e,t,n,r){do Rn();while(Ot!==null);if(G&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Fp(e,s),e===ve&&(de=ve=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ai||(ai=!0,bd(Ii,function(){return Rn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=et.transition,et.transition=null;var a=Q;Q=1;var l=G;G|=4,Ea.current=null,Zm(e,n),dd(n,e),Cm(vo),Ei=!!yo,vo=yo=null,e.current=n,eh(n),Pp(),G=l,Q=a,et.transition=s}else e.current=n;if(ai&&(ai=!1,Ot=e,Hi=i),s=e.pendingLanes,s===0&&(Vt=null),_p(n.stateNode),Fe(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qi)throw qi=!1,e=Do,Do=null,e;return Hi&1&&e.tag!==0&&Rn(),s=e.pendingLanes,s&1?e===Fo?br++:(br=0,Fo=e):br=0,Zt(),null}function Rn(){if(Ot!==null){var e=Kc(Hi),t=et.transition,n=Q;try{if(et.transition=null,Q=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,Hi=0,G&6)throw Error(j(331));var i=G;for(G|=4,A=e.current;A!==null;){var s=A,a=s.child;if(A.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(A=u;A!==null;){var h=A;switch(h.tag){case 0:case 11:case 15:vr(8,h,s)}var f=h.child;if(f!==null)f.return=h,A=f;else for(;A!==null;){h=A;var y=h.sibling,v=h.return;if(ld(h),h===u){A=null;break}if(y!==null){y.return=v,A=y;break}A=v}}}var g=s.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}A=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,A=a;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var d=e.current;for(A=d;A!==null;){a=A;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,A=p;else e:for(a=d;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:os(9,l)}}catch(N){oe(l,l.return,N)}if(l===a){A=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,A=w;break e}A=l.return}}if(G=i,Zt(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Xi,e)}catch{}r=!0}return r}finally{Q=n,et.transition=t}}return!1}function Ql(e,t,n){t=Wn(n,t),t=Ku(e,t,1),e=Ht(e,t,1),t=Pe(),e!==null&&(Fr(e,1,t),Fe(e,t))}function oe(e,t,n){if(e.tag===3)Ql(e,e,n);else for(;t!==null;){if(t.tag===3){Ql(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Wn(n,e),e=Xu(t,e,1),t=Ht(t,e,1),e=Pe(),t!==null&&(Fr(t,1,e),Fe(t,e));break}}t=t.return}}function oh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ke&n)===n&&(he===4||he===3&&(ke&130023424)===ke&&500>ue()-Aa?an(e,0):Pa|=n),Fe(e,t)}function vd(e,t){t===0&&(e.mode&1?(t=Kr,Kr<<=1,!(Kr&130023424)&&(Kr=4194304)):t=1);var n=Pe();e=Et(e,t),e!==null&&(Fr(e,t,n),Fe(e,n))}function ah(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vd(e,n)}function lh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),vd(e,n)}var wd;wd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Jm(e,t,n);Re=!!(e.flags&131072)}else Re=!1,te&&t.flags&1048576&&ju(t,Ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bi(e,t),e=t.pendingProps;var i=Dn(t,Ie.current);zn(t,n),i=Sa(null,t,r,e,i,n);var s=Ca();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(s=!0,$i(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wa(t),i.updater=ss,t.stateNode=i,i._reactInternals=t,Io(t,r,e,n),t=Po(null,t,r,!0,s,n)):(t.tag=0,te&&s&&pa(t),Ee(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=uh(r),e=st(r,e),i){case 0:t=Eo(null,t,r,e,n);break e;case 1:t=Dl(null,t,r,e,n);break e;case 11:t=Rl(null,t,r,e,n);break e;case 14:t=Ml(null,t,r,st(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Eo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Dl(e,t,r,i,n);case 3:e:{if(nd(t),e===null)throw Error(j(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Eu(e,t),Fi(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Wn(Error(j(423)),t),t=Fl(e,t,r,n,i);break e}else if(r!==i){i=Wn(Error(j(424)),t),t=Fl(e,t,r,n,i);break e}else for(qe=qt(t.stateNode.containerInfo.firstChild),He=t,te=!0,at=null,n=Iu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),r===i){t=Pt(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Pu(t),e===null&&So(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,wo(r,i)?a=null:s!==null&&wo(r,s)&&(t.flags|=32),td(e,t),Ee(e,t,a,n),t.child;case 6:return e===null&&So(t),null;case 13:return rd(e,t,n);case 4:return ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=On(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Rl(e,t,r,i,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,K(Mi,r._currentValue),r._currentValue=a,s!==null)if(pt(s.value,a)){if(s.children===i.children&&!Me.current){t=Pt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Nt(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Co(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(j(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Co(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ee(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zn(t,n),i=tt(i),r=r(i),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,i=st(r,t.pendingProps),i=st(r.type,i),Ml(e,t,r,i,n);case 15:return Zu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),bi(e,t),t.tag=1,De(r)?(e=!0,$i(t)):e=!1,zn(t,n),Yu(t,r,i),Io(t,r,i,n),Po(null,t,r,!0,e,n);case 19:return id(e,t,n);case 22:return ed(e,t,n)}throw Error(j(156,t.tag))};function bd(e,t){return Gc(e,t)}function ch(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new ch(e,t,n,r)}function za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uh(e){if(typeof e=="function")return za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ea)return 11;if(e===ta)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ji(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")za(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case bn:return ln(n.children,i,s,t);case Zo:a=8,i|=8;break;case Ys:return e=Ze(12,n,t,i|2),e.elementType=Ys,e.lanes=s,e;case Ks:return e=Ze(13,n,t,i),e.elementType=Ks,e.lanes=s,e;case Xs:return e=Ze(19,n,t,i),e.elementType=Xs,e.lanes=s,e;case Pc:return ls(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tc:a=10;break e;case Ec:a=9;break e;case ea:a=11;break e;case ta:a=14;break e;case zt:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ze(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function ln(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function ls(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=Pc,e.lanes=n,e.stateNode={isHidden:!1},e}function Fs(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Os(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bs(0),this.expirationTimes=bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ra(e,t,n,r,i,s,a,l,c){return e=new dh(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ze(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wa(s),e}function ph(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xd(e){if(!e)return Yt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(De(n))return xu(e,n,t)}return t}function kd(e,t,n,r,i,s,a,l,c){return e=Ra(n,r,!0,e,i,s,a,l,c),e.context=xd(null),n=e.current,r=Pe(),i=Gt(n),s=Nt(r,i),s.callback=t??null,Ht(n,s,i),e.current.lanes=i,Fr(e,i,r),Fe(e,r),e}function cs(e,t,n,r){var i=t.current,s=Pe(),a=Gt(i);return n=xd(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(i,t,a),e!==null&&(ct(e,i,a,s),yi(e,i,a)),a}function Gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ma(e,t){Jl(e,t),(e=e.alternate)&&Jl(e,t)}function mh(){return null}var jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Da(e){this._internalRoot=e}us.prototype.render=Da.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));cs(e,t,null,null)};us.prototype.unmount=Da.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){cs(null,e,null,null)}),t[Tt]=null}};function us(e){this._internalRoot=e}us.prototype.unstable_scheduleHydration=function(e){if(e){var t=eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&nu(e)}};function Fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yl(){}function hh(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Gi(a);s.call(u)}}var a=kd(t,r,e,0,null,!1,!1,"",Yl);return e._reactRootContainer=a,e[Tt]=a.current,Er(e.nodeType===8?e.parentNode:e),hn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Gi(c);l.call(u)}}var c=Ra(e,0,!1,null,null,!1,!1,"",Yl);return e._reactRootContainer=c,e[Tt]=c.current,Er(e.nodeType===8?e.parentNode:e),hn(function(){cs(t,c,n,r)}),c}function ps(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Gi(a);l.call(c)}}cs(t,a,e,i)}else a=hh(n,t,e,i,r);return Gi(a)}Xc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cr(t.pendingLanes);n!==0&&(ia(t,n|1),Fe(t,ue()),!(G&6)&&(Bn=ue()+500,Zt()))}break;case 13:hn(function(){var r=Et(e,1);if(r!==null){var i=Pe();ct(r,e,1,i)}}),Ma(e,1)}};sa=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Pe();ct(t,e,134217728,n)}Ma(e,134217728)}};Zc=function(e){if(e.tag===13){var t=Gt(e),n=Et(e,t);if(n!==null){var r=Pe();ct(n,e,t,r)}Ma(e,t)}};eu=function(){return Q};tu=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};lo=function(e,t,n){switch(t){case"input":if(to(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ns(r);if(!i)throw Error(j(90));Lc(r),to(r,i)}}}break;case"textarea":$c(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}};Uc=La;Wc=hn;var fh={usingClientEntryPoint:!1,Events:[Ur,Sn,ns,Fc,Oc,La]},ir={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gh={bundleType:ir.bundleType,version:ir.version,rendererPackageName:ir.rendererPackageName,rendererConfig:ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hc(e),e===null?null:e.stateNode},findFiberByHostInstance:ir.findFiberByHostInstance||mh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{Xi=li.inject(gh),wt=li}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fa(t))throw Error(j(200));return ph(e,t,null,n)};Ge.createRoot=function(e,t){if(!Fa(e))throw Error(j(299));var n=!1,r="",i=jd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ra(e,1,!1,null,null,n,!1,r,i),e[Tt]=t.current,Er(e.nodeType===8?e.parentNode:e),new Da(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Hc(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return hn(e)};Ge.hydrate=function(e,t,n){if(!ds(t))throw Error(j(200));return ps(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!Fa(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=jd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=kd(t,null,e,1,n??null,i,!1,s,a),e[Tt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new us(t)};Ge.render=function(e,t,n){if(!ds(t))throw Error(j(200));return ps(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!ds(e))throw Error(j(40));return e._reactRootContainer?(hn(function(){ps(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};Ge.unstable_batchedUpdates=La;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ds(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return ps(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function Sd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sd)}catch(e){console.error(e)}}Sd(),Sc.exports=Ge;var yh=Sc.exports,Kl=yh;Qs.createRoot=Kl.createRoot,Qs.hydrateRoot=Kl.hydrateRoot;const ye={learner:{memberId:"member-learner-001",contactId:"contact-learner-001",email:"learner@example.com",displayName:"Amina Jacobs",roles:["learner"]},lecturer:{memberId:"member-lecturer-001",contactId:"contact-lecturer-001",email:"lecturer@example.com",displayName:"Faithonomics Lecturer",roles:["lecturer"]},administrator:{memberId:"member-admin-001",contactId:"contact-admin-001",email:"admin@example.com",displayName:"Faithonomics Admin",roles:["administrator"]}},dr=e=>`/Faithonomics/${e.replace(/^\/+/,"")}`,ut=[{id:"course-faithonomics-core",slug:"faithonomics-economic-discipleship",title:"Faithonomics Economic Discipleship",summary:"Eight levels that align work, stewardship, ownership, integrity and economic impact with God's framework.",description:"A structured Faithonomics LMS pathway with 8 levels, 32 sessions, step-based teaching blocks, interactive activities, written reflections and completion tracking.",imageUrl:dr("faithonomics-logo.png"),status:"published",pricePlanIds:["plan-faithonomics-core"],storeProductIds:["product-faithonomics-core"],isFree:!1,lecturerIds:[ye.lecturer.memberId],estimatedHours:32,certificateTemplateId:"certificate-faithonomics-core",theme:{primary:"#234638",accent:"#B99245"}}],Cd=[{title:"Level 1: Economic Alignment",description:"Move from economic pressure to intentional alignment.",sessions:["The Daily Grind","Competing Paradigms","Strategic Alignment","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_bf680d1d5dfc468fbd5db89ae370217b~mv2.png",imageAlt:"Faithonomics Level 1 course artwork."},{title:"Level 2: God's Economic Framework",description:"Understand creation, household, and community as economic foundations.",sessions:["The Household Model of Economics","The Economy of Creation","The Economy of Community","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_c29d7165ba394234ad2f0e43b16ed57b~mv2.png",imageAlt:"Faithonomics Level 2 course artwork."},{title:"Level 3: Economic Renewal",description:"Explore identity, repentance, and the power to change economic habits.",sessions:["The Way In","A New Identity","Power to Change","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_f82323d9106a4fe2a024bdf5dc58ef46~mv2.png",imageAlt:"Faithonomics Level 3 course artwork."},{title:"Level 4: Economic Impact and Transformation",description:"Trace transformation from personal decisions to social and societal renewal.",sessions:["Personal Change","Social Change","Societal Change","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_9e68cca7bfc54ba1a2215b7e63db5223~mv2.png",imageAlt:"Faithonomics Level 4 course artwork."},{title:"Level 5: God the Economist",description:"Practise abundance, ownership, and creative stewardship.",sessions:["More Than Enough","Who Really Owns It?","Created to Create","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_1625036257f242189f311908439e6f57~mv2.png",imageAlt:"Faithonomics Level 5 course artwork."},{title:"Level 6: The Great Command",description:"Let love set the standard for enterprise, access, and business culture.",sessions:["How We Do Business","Room for Everyone","Love Sets the Standard","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_71676a8bba0c4e7b919f743daae40178~mv2.png",imageAlt:"Faithonomics Level 6 course artwork."},{title:"Level 7: Godly Economic Practices",description:"Develop practical habits for work, generosity, and management.",sessions:["Work That Matters","Open Hands, Open Doors","Manage What Matters","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_98ed63ccc0c74cecb623057e5a23a200~mv2.png",imageAlt:"Faithonomics Level 7 course artwork."},{title:"Level 8: Economic Integrity",description:"Confront idolatry, hidden costs, and the discipline of enough.",sessions:["When Success Becomes an Idol","Who Pays the Price?","Enough Is Enough","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_714bd11be0764efc80bd75a8aeff1ddb~mv2.png",imageAlt:"Faithonomics Level 8 course artwork."}],vh=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),xt=Cd.map((e,t)=>({id:`level-${t+1}`,courseId:"course-faithonomics-core",title:e.title,description:e.description,sequence:t+1,..."imageUrl"in e?{imageUrl:e.imageUrl,imageAlt:e.imageAlt}:{}})),$t=xt.map(e=>({moduleId:e.id,levelTitle:e.title,username:`level${e.sequence}`,password:`faith${e.sequence}`})),wh={id:"daily-grind-video-checkpoint",timeSeconds:206,durationSeconds:321,title:"Interactive Quiz: The Daily Grind",questions:[{id:"daily-grind-thabo-choice",prompt:"Thabo has R50. The latte costs R45. The coffee and muffin costs R49. Why might Thabo still choose the R49 option?",choices:["Because spending almost everything is always wise","Because the muffin may help him get through the morning","Because the latte is a bad product","Because the coffee shop owner told him to choose it","Because cheaper choices are always selfish","Because the muffin makes the coffee free"],correctAnswer:"Because the muffin may help him get through the morning",feedback:'Correct. Thabo is not only asking, "What is cheaper?" He is asking, "What will help me use what I have well today?" This shows that everyday choices are shaped by needs, values, and the situation.'},{id:"daily-grind-thabo-decision",prompt:"Which question best describes what is happening inside Thabo's decision?",choices:["How can I buy the most expensive thing?","How can I copy what other people are buying?","How can I use my limited money in a way that serves my day well?","How can I avoid thinking about my choice?","How can I make Johan happy?","How can I prove that food is more important than drink?"],correctAnswer:"How can I use my limited money in a way that serves my day well?",feedback:"Correct. Thabo's choice is an everyday example of economics. He has to decide how to use limited money for a real need. This is not cold maths; it is a human choice."},{id:"daily-grind-johan-beans",prompt:"Johan must choose between cheaper Robusta beans and smoother Arabica beans that cost more. Which question should guide him best?",choices:["Which beans cost the least today, even if customers enjoy them less?","Which beans sound more professional when I talk about them?","Which beans help me serve customers well and keep the shop healthy?","Which beans make the fastest decision possible?","Which beans will make every customer buy muffins?","Which beans allow me to ignore what customers think?"],correctAnswer:"Which beans help me serve customers well and keep the shop healthy?",feedback:"Correct. Johan's choice is not only about cost. He must think about quality, trust, customers, and the future of the business. Business choices are moral choices because they affect people."},{id:"daily-grind-government-choice",prompt:"The government considers helping local farmers by making imported beans more expensive. What is the difficult part of this decision?",choices:["It may help local farmers but make coffee more expensive for shops and customers","It will make all coffee free for everyone","It only affects farmers and never affects ordinary people","It proves that government decisions are always easy","It means coffee shops will no longer need customers","It removes the need for careful thinking"],correctAnswer:"It may help local farmers but make coffee more expensive for shops and customers",feedback:"Correct. A decision can help one group while placing pressure on another. This is why public choices must be guided by wisdom, justice, and care for people."},{id:"daily-grind-bigger-lesson",prompt:"What do Thabo, Johan, and the government all show us about economics?",choices:["Economics is only for experts who understand difficult maths","Economics is mainly about banks and stock markets","Economics is about people, businesses, and governments making choices with what they have","Economics has nothing to do with values or beliefs","Economics is only about choosing the cheapest option","Economics is a machine that works without human hearts or convictions"],correctAnswer:"Economics is about people, businesses, and governments making choices with what they have",feedback:"Correct. Economics studies real choices. And because real choices come from what people value, trust, love, and believe, our morals and faith should stand at the centre of our economic life."}],conclusion:"Thabo's coffee choice, Johan's business decision, and the government's farming policy all point to one lesson: economics is not only about money, banks, graphs, or difficult maths. It is about the choices people make with what they have. Because choices are shaped by what people value and believe, our morals and faith must guide our economic life."},bh={id:"tale-of-two-cities-video-checkpoint",timeSeconds:581,durationSeconds:736,title:"Interactive Quiz: Tale of Two Cities",questions:[{id:"tale-edenic-economy",prompt:"According to the Bible's account of human history, what was the defining characteristic of humanity's role in the Edenic economy?",choices:["The accumulation of surplus goods for future trade","Labour as a form of penance for existence","Stewardship of resources belonging to the Creator","Final ownership of the land and its resources","Determining the price of goods through market demand","Developing technology to master the natural world"],correctAnswer:"Stewardship of resources belonging to the Creator",feedback:"Correct. Eden begins with stewardship: people receive creation as a trust from the Creator rather than as final owners."},{id:"tale-first-meltdown",prompt:"What is the first economic meltdown in human history?",choices:["The depletion of natural resources due to over-farming","The failure of the irrigation systems in Eden","A heart that no longer trusts in divine provision","The introduction of currency and debt cycles","The sudden inflation of value within the garden","The collapse of the first market in the wilderness"],correctAnswer:"A heart that no longer trusts in divine provision",feedback:"Correct. The first collapse begins inside the human heart when trust in God's provision gives way to grasping and suspicion."},{id:"tale-cain-enoch",prompt:"What motivated Cain to build the city of Enoch after the conflict with Abel?",choices:["A plan to centralize the worship of the Creator","An attempt to restore the abundance of the lost Eden","A divine mandate to expand the borders of the garden","The need to establish a fair system of trade between tribes","A desire for self-protection and security in his own strength","The pursuit of artistic beauty through metalwork and music"],correctAnswer:"A desire for self-protection and security in his own strength",feedback:"Correct. Cain's city is presented as security built around human strength after broken trust and exile."},{id:"tale-babel-goal",prompt:"According to the analysis of Babel, what was the primary goal of the tower and city project?",choices:["To make a name for humanity without a divine centre","To preserve linguistic diversity through written records","To create a global distribution network for surplus grain","To bridge the gap between human labour and divine rest","To establish a centralised system of debt and credit","To defend against the rising power of neighbouring empires"],correctAnswer:"To make a name for humanity without a divine centre",feedback:"Correct. Babel gathers human ambition around self-made greatness rather than worship, trust, and divine centre."},{id:"tale-babylon-unstable",prompt:"The prophets describe the economy of Babylon as morally unstable because its beauty was dependent on what?",choices:["The use of unsustainable farming practices in the fertile crescent","The isolationist trade policies that limited its wealth","A lack of skilled labour and technological advancement","Extraction, forced labour, and the exploitation of the weak","High levels of inflation caused by military overspending","Frequent natural disasters that interrupted its markets"],correctAnswer:"Extraction, forced labour, and the exploitation of the weak",feedback:"Correct. Babylon can look impressive, but the prophets expose the injustice and exploitation underneath its wealth."},{id:"tale-new-jerusalem-economy",prompt:"How is the New Jerusalem's economy fundamentally different from Babylon's?",choices:["It sends blessing outward and brings healing to the nations","It returns humanity to a primitive, pre-urban state","It eliminates the need for human work and creativity","It relies on a strictly barter-based system without value","It restricts its resources to a specific chosen population","It is built on the foundations of human debt and labour"],correctAnswer:"It sends blessing outward and brings healing to the nations",feedback:"Correct. The New Jerusalem is not built on extraction. Its life flows outward as healing and blessing for the nations."},{id:"tale-work-restored",prompt:"In the New Jerusalem, what happens to the concept of work?",choices:["It is restored to its original purpose of joyful cultivation","It remains a painful toil due to the resistance of the ground","It is automated through advanced celestial technology","It is categorised strictly as religious ritual worship","It becomes a way to earn a higher status within the city","It is replaced by eternal leisure and rest"],correctAnswer:"It is restored to its original purpose of joyful cultivation",feedback:"Correct. Work is not erased. It is healed and restored as joyful, fruitful service before God."},{id:"tale-decisive-question",prompt:"What is identified as the decisive question behind every economy in the Bible?",choices:["Which ruler possesses the most military power?","How can it most effectively eliminate the need for labour?","Who or what stands at its centre?","How much gross domestic product can it generate?","What is the most efficient use of available technology?","How can it achieve a state of permanent human unity?"],correctAnswer:"Who or what stands at its centre?",feedback:"Correct. Biblical economics keeps asking what occupies the centre: God and neighbour, or human pride, fear, and control."}],conclusion:"The story moves from Eden's stewardship, through cities shaped by fear and pride, toward the New Jerusalem where work, resources, and public life are restored around God's presence and blessing."},Ye=(e,t={})=>`
  <style>
    :root {
      color-scheme: light;
      --paper: #f7f3e8;
      --cream: #e8d8b8;
      --forest: #234638;
      --ubuntu: #4f6b3a;
      --leaf: #7c8f5a;
      --gold: #b99245;
      --amber: #d99a3d;
      --kraft: #9a6b3f;
      --deep-kraft: #5b3a24;
      --ink: #17130f;
      --muted: #5d6659;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: "Segoe UI", system-ui, sans-serif;
      background:
        linear-gradient(180deg, rgba(247, 243, 232, 0.98), rgba(232, 216, 184, 0.74)),
        radial-gradient(circle at 16% 10%, rgba(217, 154, 61, 0.16), transparent 32%);
      color: var(--ink);
    }

    .rich-step {
      padding: clamp(18px, 4vw, 34px);
    }

    h2,
    h3,
    p {
      margin-top: 0;
    }

    h2 {
      margin-bottom: 10px;
      color: var(--forest);
      font-size: clamp(1.65rem, 4vw, 2.6rem);
      line-height: 1.08;
    }

    h3 {
      margin-bottom: 8px;
      color: var(--forest);
      font-size: 1.08rem;
    }

    p,
    li {
      color: var(--muted);
      line-height: 1.62;
      text-align: justify;
      text-justify: inter-word;
    }

    .intro {
      width: 100%;
      max-width: none;
      margin-bottom: 22px;
      font-size: 1rem;
    }

    .eyebrow {
      margin-bottom: 8px;
      color: var(--gold);
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0;
      text-transform: uppercase;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin: 18px 0;
    }

    .card,
    .callout,
    .comparison {
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.56);
      box-shadow: 0 16px 34px rgba(91, 58, 36, 0.12);
    }

    .card {
      padding: 16px;
    }

    .card strong {
      display: block;
      margin-bottom: 6px;
      color: var(--deep-kraft);
      font-size: 0.86rem;
      text-transform: uppercase;
    }

    .pill {
      display: inline-flex;
      min-height: 28px;
      align-items: center;
      margin: 8px 6px 0 0;
      padding: 0 10px;
      border-radius: 999px;
      background: rgba(124, 143, 90, 0.22);
      color: var(--forest);
      font-size: 0.82rem;
      font-weight: 750;
    }

    .callout {
      margin-top: 18px;
      padding: 16px;
      border-left: 5px solid var(--gold);
      background: rgba(217, 154, 61, 0.1);
    }

    .lesson-graphic {
      width: 100%;
      margin: 18px 0;
    }

    .lesson-graphic img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 16px 34px rgba(91, 58, 36, 0.14);
    }

    .engine-lesson {
      margin: 18px 0;
      padding: clamp(20px, 3vw, 34px);
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.62);
      box-shadow: 0 16px 34px rgba(91, 58, 36, 0.12);
    }

    .engine-lesson h3 {
      margin-bottom: 14px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(1.7rem, 3vw, 2.55rem);
      font-weight: 600;
    }

    .engine-intro {
      max-width: none;
      margin-bottom: 18px;
      font-size: 1.02rem;
    }

    .engine-vocab {
      margin-bottom: 24px;
      padding: 14px 16px;
      border-left: 4px solid var(--gold);
      background: rgba(217, 154, 61, 0.12);
      color: var(--muted);
      line-height: 1.55;
    }

    .engine-vocab strong {
      display: block;
      margin-bottom: 4px;
      color: var(--deep-kraft);
    }

    .engine-layout {
      display: grid;
      grid-template-columns: minmax(260px, 0.8fr) minmax(420px, 1.2fr);
      gap: clamp(18px, 3vw, 30px);
      align-items: start;
    }

    .engine-framework-title {
      margin: 0 0 12px;
      color: var(--forest);
      font-size: 1.02rem;
    }

    .engine-mech {
      display: grid;
      grid-template-columns: 30px 1fr;
      gap: 10px;
      padding: 10px 0;
      color: var(--ink);
      line-height: 1.48;
    }

    .engine-num {
      width: 25px;
      height: 25px;
      display: grid;
      place-items: center;
      background: rgba(217, 154, 61, 0.2);
      color: var(--deep-kraft);
      font-weight: 800;
    }

    .engine-copy {
      border-left: 3px solid rgba(185, 146, 69, 0.45);
      padding-left: 10px;
    }

    .engine-chart-card {
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.72);
      padding: 16px;
    }

    .engine-chart-title {
      margin-bottom: 8px;
      color: var(--muted);
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
    }

    .engine-stage-radio {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }

    .engine-chart {
      position: relative;
      min-height: 330px;
      border: 1px dashed rgba(154, 107, 63, 0.62);
      background: rgba(255, 253, 249, 0.92);
    }

    .engine-chart svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .engine-stage-marker {
      opacity: 0;
      transition: opacity 160ms ease;
    }

    .engine-stage-labels {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 6px;
      margin-top: 8px;
      font-size: 0.73rem;
      text-align: center;
    }

    .engine-stage-labels label {
      min-height: 30px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(91, 58, 36, 0.16);
      border-radius: 999px;
      background: rgba(247, 243, 232, 0.8);
      color: var(--deep-kraft);
      font-weight: 750;
      cursor: pointer;
    }

    .engine-legend {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      margin-top: 10px;
      color: var(--muted);
      font-size: 0.78rem;
    }

    .engine-legend span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .engine-legend i {
      width: 12px;
      height: 12px;
      display: inline-block;
    }

    .engine-legend .productivity i {
      border: 3px solid var(--ubuntu);
      background: rgba(124, 143, 90, 0.18);
    }

    .engine-legend .cost i {
      border: 3px dashed var(--kraft);
      background: rgba(154, 107, 63, 0.12);
    }

    .engine-insight {
      display: none;
      margin-top: 12px;
      border-left: 4px solid var(--gold);
      background: rgba(217, 154, 61, 0.12);
      padding: 11px 13px;
      color: var(--muted);
      line-height: 1.45;
    }

    .engine-stage-radio[value="village"]:checked ~ .engine-chart .stage-village,
    .engine-stage-radio[value="town"]:checked ~ .engine-chart .stage-town,
    .engine-stage-radio[value="small-city"]:checked ~ .engine-chart .stage-small-city,
    .engine-stage-radio[value="large-city"]:checked ~ .engine-chart .stage-large-city,
    .engine-stage-radio[value="megacity"]:checked ~ .engine-chart .stage-megacity {
      opacity: 1;
    }

    .engine-stage-radio[value="village"]:checked ~ .engine-stage-labels label[data-stage="village"],
    .engine-stage-radio[value="town"]:checked ~ .engine-stage-labels label[data-stage="town"],
    .engine-stage-radio[value="small-city"]:checked ~ .engine-stage-labels label[data-stage="small-city"],
    .engine-stage-radio[value="large-city"]:checked ~ .engine-stage-labels label[data-stage="large-city"],
    .engine-stage-radio[value="megacity"]:checked ~ .engine-stage-labels label[data-stage="megacity"] {
      background: var(--forest);
      color: #fff7df;
    }

    .engine-stage-radio[value="village"]:checked ~ .engine-insights .stage-village,
    .engine-stage-radio[value="town"]:checked ~ .engine-insights .stage-town,
    .engine-stage-radio[value="small-city"]:checked ~ .engine-insights .stage-small-city,
    .engine-stage-radio[value="large-city"]:checked ~ .engine-insights .stage-large-city,
    .engine-stage-radio[value="megacity"]:checked ~ .engine-insights .stage-megacity {
      display: block;
    }

    .city-neutral-page {
      display: grid;
      gap: clamp(18px, 3vw, 28px);
    }

    .city-neutral-hero,
    .augustine-panel,
    .liturgy-panel,
    .moral-budget-panel {
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      padding: clamp(18px, 3vw, 30px);
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.96), rgba(232, 216, 184, 0.68)),
        radial-gradient(circle at 94% 0%, rgba(79, 107, 58, 0.12), transparent 36%);
      box-shadow: 0 18px 40px rgba(91, 58, 36, 0.13);
    }

    .city-neutral-hero h2,
    .augustine-panel h3,
    .liturgy-panel h3,
    .moral-budget-panel h3 {
      font-family: Georgia, "Times New Roman", serif;
      color: var(--forest);
      line-height: 1.08;
    }

    .city-neutral-hero h2 {
      max-width: 980px;
      font-size: clamp(2rem, 5vw, 4rem);
    }

    .city-neutral-hero p:last-child,
    .augustine-panel p:last-child,
    .liturgy-panel p:last-child,
    .moral-budget-panel p:last-child {
      margin-bottom: 0;
    }

    .lesson-main-point {
      border: 1px solid rgba(185, 146, 69, 0.52);
      border-left: 6px solid var(--gold);
      border-radius: 8px;
      padding: clamp(16px, 2.4vw, 24px);
      background:
        linear-gradient(135deg, rgba(255, 253, 248, 0.92), rgba(232, 216, 184, 0.62)),
        radial-gradient(circle at 100% 0%, rgba(35, 70, 56, 0.13), transparent 34%);
      box-shadow: 0 14px 30px rgba(91, 58, 36, 0.1);
    }

    .lesson-main-point strong {
      display: block;
      margin-bottom: 8px;
      color: var(--ochre);
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .lesson-main-point p {
      margin: 0;
      color: var(--forest);
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(1.08rem, 2vw, 1.45rem);
      font-weight: 700;
      line-height: 1.35;
      text-align: justify;
      text-justify: inter-word;
    }

    .lesson-main-takeaway {
      position: relative;
      overflow: hidden;
      border: 2px solid rgba(185, 146, 69, 0.72);
      border-radius: 8px;
      padding: clamp(18px, 2.4vw, 26px);
      background:
        linear-gradient(135deg, rgba(35, 70, 56, 0.98), rgba(28, 55, 46, 0.96)),
        radial-gradient(circle at 92% 8%, rgba(217, 154, 61, 0.24), transparent 34%);
      color: #fff7df;
      box-shadow: 0 16px 34px rgba(35, 70, 56, 0.22);
    }

    .lesson-main-takeaway::before {
      content: "";
      position: absolute;
      inset: 0;
      border-top: 6px solid var(--gold);
      pointer-events: none;
    }

    .lesson-main-takeaway strong {
      display: inline-block;
      margin-bottom: 10px;
      border: 1px solid rgba(244, 223, 173, 0.46);
      border-radius: 999px;
      padding: 6px 11px;
      background: rgba(255, 247, 223, 0.12);
      color: #f4dfad;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .lesson-main-takeaway p {
      position: relative;
      margin: 0;
      color: #fff7df;
      font-size: clamp(0.95rem, 1.15vw, 1.05rem);
      font-weight: 500;
      line-height: 1.58;
      text-align: justify;
      text-justify: inter-word;
    }

    .city-neutral-visuals,
    .augustine-layout,
    .city-love-grid,
    .moral-budget-grid {
      display: grid;
      gap: clamp(14px, 2.4vw, 22px);
    }

    .city-neutral-visuals {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .city-neutral-visuals figure,
    .augustine-portrait {
      margin: 0;
      display: grid;
      place-items: center;
      overflow: visible;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
    }

    .city-neutral-visuals img,
    .augustine-portrait img {
      display: block;
      width: 100%;
      height: auto;
      min-height: 0;
      object-fit: contain;
    }

    .augustine-layout {
      grid-template-columns: minmax(220px, 0.45fr) minmax(0, 1fr);
      align-items: start;
    }

    .augustine-copy {
      display: grid;
      gap: 10px;
      align-content: start;
    }

    .city-love-grid {
      grid-template-columns: repeat(2, minmax(250px, 1fr));
      margin-top: 18px;
    }

    .augustine-copy .city-love-grid {
      margin-top: 4px;
    }

    .augustine-copy .city-love-shell {
      aspect-ratio: auto;
      min-height: 0;
    }

    .city-love-shell {
      position: relative;
      min-height: clamp(320px, 38vw, 460px);
      perspective: 1200px;
    }

    .city-love-toggle,
    .city-visual-toggle {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }

    .city-love-card {
      display: block;
      min-height: inherit;
      height: 100%;
      cursor: pointer;
    }

    .city-love-inner {
      display: block;
      position: relative;
      width: 100%;
      min-height: inherit;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 420ms ease;
    }

    .city-love-toggle:checked + .city-love-card .city-love-inner {
      transform: rotateY(180deg);
    }

    .city-love-face {
      position: absolute;
      inset: 0;
      display: grid;
      overflow: hidden;
      border: 2px solid rgba(185, 146, 69, 0.52);
      border-radius: 8px;
      backface-visibility: hidden;
      box-shadow: 0 18px 34px rgba(91, 58, 36, 0.14);
    }

    .city-love-front {
      place-items: center;
      margin: 0;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: none;
    }

    .city-love-front img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 0;
    }

    .augustine-copy .city-love-card,
    .augustine-copy .city-love-inner {
      min-height: 0;
      height: auto;
    }

    .augustine-copy .city-love-front {
      position: relative;
      inset: auto;
      overflow: visible;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
    }

    .augustine-copy .city-love-front img {
      width: 100%;
      height: auto;
      object-fit: contain;
      padding: 0;
    }

    .city-love-back {
      align-content: start;
      justify-items: stretch;
      gap: 12px;
      padding: clamp(18px, 3vw, 30px);
      background:
        linear-gradient(145deg, rgba(35, 70, 56, 0.97), rgba(79, 107, 58, 0.92)),
        radial-gradient(circle at 0% 0%, rgba(185, 146, 69, 0.26), transparent 38%);
      color: #fff7df;
      transform: rotateY(180deg);
    }

    .augustine-copy .city-love-back {
      align-content: start;
      justify-content: stretch;
      justify-items: stretch;
      grid-template-rows: auto 1fr;
      padding-top: clamp(18px, 2.2vw, 26px);
    }

    .augustine-copy .city-love-back.city-love-back-man,
    .augustine-copy .city-love-back[data-love-city="man"] {
      background:
        linear-gradient(145deg, #4b1f26 0%, #742f2b 52%, #9a5a32 100%),
        radial-gradient(circle at 0% 0%, rgba(217, 154, 61, 0.24), transparent 40%);
    }

    .augustine-copy .city-love-back.city-love-back-god,
    .augustine-copy .city-love-back[data-love-city="god"] {
      background:
        linear-gradient(145deg, rgba(35, 70, 56, 0.97), rgba(79, 107, 58, 0.92)),
        radial-gradient(circle at 0% 0%, rgba(185, 146, 69, 0.26), transparent 38%);
    }

    .city-love-back strong {
      display: block;
      color: #f3d99a;
      font-size: 0.82rem;
      letter-spacing: 0;
      line-height: 1.25;
      text-align: left;
      text-transform: uppercase;
    }

    .augustine-copy .city-love-back strong {
      margin: 0;
      align-self: start;
    }

    .city-love-back p {
      margin: 0;
      color: #fff7df;
      font-size: clamp(1rem, 1.6vw, 1.18rem);
      line-height: 1.62;
      text-align: justify;
      text-justify: inter-word;
    }

    .augustine-copy .city-love-back p {
      align-self: start;
    }

    .city-visual-button,
    .city-visual-close,
    .city-visual-enlarge {
      min-height: 42px;
      width: fit-content;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(35, 70, 56, 0.18);
      border-radius: 8px;
      padding: 0 16px;
      background: var(--forest);
      color: var(--paper);
      font-weight: 800;
      cursor: pointer;
      transition:
        background 160ms ease,
        transform 160ms ease;
    }

    .city-visual-button:hover,
    .city-visual-close:hover,
    .city-visual-enlarge:hover {
      background: #1d3a2f;
      transform: translateY(-1px);
    }

    .city-visual-button {
      display: flex;
      margin: 4px auto 0;
    }

    .city-visual-popup {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: grid;
      place-items: center;
      padding: clamp(54px, 7vh, 72px) clamp(12px, 2.8vw, 32px) clamp(12px, 2.8vw, 32px);
      background: rgba(23, 19, 15, 0.72);
      backdrop-filter: blur(5px);
    }

    .city-visual-popup[hidden] {
      display: none;
    }

    .city-visual-popup.is-open {
      pointer-events: auto;
      visibility: visible;
    }

    .city-visual-backdrop {
      position: absolute;
      inset: 0;
      border: 0;
      padding: 0;
      background: transparent;
      cursor: pointer;
    }

    .city-visual-panel {
      position: relative;
      z-index: 1;
      width: min(1380px, calc(100vw - 24px));
      max-height: calc(100vh - 96px);
      aspect-ratio: 16 / 9;
      overflow: visible;
      border: 1px solid rgba(185, 146, 69, 0.48);
      border-radius: 8px;
      padding: 0;
      background: transparent;
      box-shadow: 0 34px 90px rgba(23, 19, 15, 0.52);
      transition:
        opacity 180ms ease,
        visibility 180ms ease;
    }

    .urban-liturgy-frame {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
      border-radius: 8px;
      background: #f7f3e8;
    }

    .city-visual-actions {
      position: absolute;
      top: -46px;
      right: 0;
      z-index: 3;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: flex-end;
      align-items: center;
    }

    .city-visual-actions .city-visual-close,
    .city-visual-actions .city-visual-enlarge {
      min-height: 38px;
      border-color: rgba(185, 146, 69, 0.72);
      font-size: 0.9rem;
      box-shadow: 0 12px 28px rgba(23, 19, 15, 0.34);
    }

    .city-visual-enlarge {
      text-decoration: none;
    }

    .moral-budget-grid {
      grid-template-columns: repeat(5, minmax(130px, 1fr));
      margin: 18px 0;
    }

    .budget-resource {
      border: 1px solid rgba(91, 58, 36, 0.16);
      border-radius: 8px;
      padding: 14px;
      background: rgba(255, 255, 255, 0.58);
    }

    .budget-resource strong {
      display: block;
      margin-bottom: 6px;
      color: var(--forest);
      font-size: 0.82rem;
      text-transform: uppercase;
    }

    .budget-resource p {
      margin: 0;
      color: var(--muted);
      font-size: 0.92rem;
      line-height: 1.45;
    }

    .moral-budget-embed {
      display: block;
      width: 100%;
      height: 315px;
      min-height: 0 !important;
      max-height: 315px;
      border: 1px solid rgba(91, 58, 36, 0.22);
      border-radius: 8px;
      background: #f7f3e8;
      box-shadow: 0 16px 34px rgba(91, 58, 36, 0.12);
    }

    .comparison {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      overflow: hidden;
    }

    .comparison div {
      padding: 14px;
    }

    .comparison div:first-child {
      border-right: 1px solid rgba(91, 58, 36, 0.18);
      background: rgba(35, 70, 56, 0.08);
    }

    ul {
      display: grid;
      gap: 9px;
      margin: 10px 0 0;
      padding-left: 18px;
      color: var(--muted);
      line-height: 1.5;
    }

    textarea {
      width: 100%;
      min-height: 150px;
      margin-top: 12px;
      border: 1px solid rgba(91, 58, 36, 0.22);
      border-radius: 8px;
      padding: 12px 14px;
      background: rgba(255, 255, 255, 0.72);
      color: var(--ink);
      font: inherit;
      line-height: 1.55;
      resize: vertical;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
    }

    textarea:focus {
      outline: 3px solid rgba(185, 146, 69, 0.28);
      outline-offset: 2px;
    }

    .market-theology-page {
      display: grid;
      gap: clamp(18px, 3vw, 26px);
      align-items: stretch;
      justify-items: center;
    }

    .audio-discussion {
      width: min(100%, 1180px);
      display: grid;
      gap: 10px;
      justify-items: center;
      margin-inline: auto;
    }

    .audio-discussion-copy {
      margin: 0;
      color: var(--forest);
      font-size: clamp(1rem, 1.6vw, 1.18rem);
      font-weight: 800;
      text-align: center;
    }

    .audio-discussion-toggle {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }

    .audio-discussion-button {
      width: min(100%, 480px);
      display: block;
      padding: 0;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: pointer;
    }

    .audio-discussion-button img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0 16px 22px rgba(91, 58, 36, 0.16));
      transition: transform 180ms ease;
    }

    .audio-discussion-button:hover img {
      transform: translateY(-2px);
    }

    .audio-popup {
      position: fixed;
      inset: 0;
      z-index: 140;
      display: none;
      padding: clamp(18px, 3vw, 32px);
      background: rgba(23, 19, 15, 0.94);
    }

    .audio-discussion-toggle:checked ~ .audio-popup {
      display: grid;
    }

    .audio-popup-scrim {
      position: absolute;
      inset: 0;
      cursor: pointer;
    }

    .audio-popup-panel {
      position: relative;
      z-index: 1;
      width: min(100%, 980px);
      min-height: min(72vh, 680px);
      display: grid;
      gap: clamp(20px, 4vw, 34px);
      align-content: center;
      justify-self: center;
      align-self: center;
      border: 1px solid rgba(232, 216, 184, 0.22);
      border-radius: 8px;
      padding: clamp(22px, 4vw, 48px);
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.96), rgba(232, 216, 184, 0.84)),
        radial-gradient(circle at 50% 0%, rgba(185, 146, 69, 0.18), transparent 42%);
      box-shadow: 0 28px 70px rgba(0, 0, 0, 0.42);
    }

    .soundwave {
      min-height: clamp(150px, 24vw, 240px);
      display: flex;
      gap: clamp(7px, 1.3vw, 14px);
      align-items: center;
      justify-content: center;
      padding: clamp(16px, 3vw, 30px);
    }

    .soundwave span {
      width: clamp(7px, 1.2vw, 13px);
      height: 42%;
      border-radius: 999px;
      background: linear-gradient(180deg, var(--gold), var(--forest));
      animation: soundwave-rise 1.05s ease-in-out infinite;
      box-shadow: 0 10px 20px rgba(91, 58, 36, 0.16);
    }

    .soundwave span:nth-child(2) {
      animation-delay: -0.86s;
    }

    .soundwave span:nth-child(3) {
      animation-delay: -0.68s;
    }

    .soundwave span:nth-child(4) {
      animation-delay: -0.5s;
    }

    .soundwave span:nth-child(5) {
      animation-delay: -0.32s;
    }

    .soundwave span:nth-child(6) {
      animation-delay: -0.14s;
    }

    .soundwave span:nth-child(7) {
      animation-delay: -0.76s;
    }

    .soundwave span:nth-child(8) {
      animation-delay: -0.58s;
    }

    .soundwave span:nth-child(9) {
      animation-delay: -0.4s;
    }

    .soundwave span:nth-child(10) {
      animation-delay: -0.22s;
    }

    @keyframes soundwave-rise {
      0%,
      100% {
        transform: scaleY(0.34);
      }

      50% {
        transform: scaleY(1);
      }
    }

    .audio-popup audio {
      width: min(100%, 760px);
      justify-self: center;
      accent-color: var(--forest);
    }

    .audio-popup-close {
      min-height: 42px;
      width: fit-content;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      border: 1px solid rgba(35, 70, 56, 0.18);
      border-radius: 8px;
      padding: 0 16px;
      background: var(--forest);
      color: var(--paper);
      font-weight: 800;
      cursor: pointer;
      transition:
        background 160ms ease,
        transform 160ms ease;
    }

    .audio-popup-close:hover {
      background: #1d3a2f;
      transform: translateY(-1px);
    }

    .wrong-thinking-section {
      width: min(100%, 1180px);
      display: grid;
      gap: clamp(16px, 2.6vw, 24px);
      margin-inline: auto;
    }

    .wrong-thinking-section h2 {
      margin: 0;
      color: var(--forest);
      font-size: clamp(1.75rem, 4vw, 2.7rem);
      line-height: 1.08;
    }

    .scholars-heading {
      margin: clamp(6px, 1.4vw, 12px) 0 0;
      color: var(--deep-kraft);
      font-size: clamp(1.2rem, 2.4vw, 1.7rem);
      font-weight: 850;
      text-align: center;
    }

    .wrong-thinking-images,
    .wrong-card-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: clamp(14px, 2.4vw, 22px);
      width: 100%;
    }

    .wrong-thinking-image {
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      padding: clamp(10px, 1.8vw, 18px);
      background: rgba(255, 255, 255, 0.58);
      box-shadow: 0 18px 36px rgba(91, 58, 36, 0.14);
    }

    .wrong-thinking-image:nth-child(1) {
      background:
        linear-gradient(145deg, rgba(210, 225, 194, 0.96), rgba(124, 143, 90, 0.34)),
        radial-gradient(circle at 12% 0%, rgba(35, 70, 56, 0.16), transparent 42%);
    }

    .wrong-thinking-image:nth-child(2) {
      background:
        linear-gradient(145deg, rgba(236, 214, 151, 0.96), rgba(217, 154, 61, 0.28)),
        radial-gradient(circle at 92% 0%, rgba(91, 58, 36, 0.14), transparent 42%);
    }

    .wrong-thinking-image {
      margin: 0;
      overflow: hidden;
    }

    .wrong-thinking-image img {
      display: block;
      width: 100%;
      height: 100%;
      min-height: clamp(280px, 34vw, 430px);
      object-fit: contain;
      border-radius: 6px;
      background: rgba(247, 243, 232, 0.28);
    }

    .wrong-flip-card {
      position: relative;
      aspect-ratio: 4 / 3;
      min-height: 0;
    }

    .wrong-flip-toggle,
    .wrong-slide-toggle {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }

    .wrong-flip-cover {
      position: absolute;
      inset: 0;
      overflow: hidden;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: pointer;
    }

    .wrong-flip-cover img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      transition: transform 220ms ease;
    }

    .wrong-flip-cover:hover img {
      transform: none;
    }

    .wrong-flip-cta,
    .wrong-popup-close,
    .wrong-carousel-controls label {
      min-height: 42px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(35, 70, 56, 0.18);
      border-radius: 8px;
      background: var(--forest);
      color: var(--paper);
      font-weight: 800;
      cursor: pointer;
      transition:
        background 160ms ease,
        transform 160ms ease;
    }

    .wrong-flip-cta {
      position: absolute;
      right: clamp(14px, 2vw, 20px);
      bottom: clamp(14px, 2vw, 20px);
      padding: 0 18px;
      background: rgba(35, 70, 56, 0.92);
      box-shadow: 0 12px 26px rgba(23, 19, 15, 0.2);
    }

    .wrong-flip-cta:hover,
    .wrong-popup-close:hover,
    .wrong-carousel-controls label:hover {
      background: #1d3a2f;
      transform: translateY(-1px);
    }

    .wrong-carousel-popup {
      position: fixed;
      inset: 0;
      z-index: 120;
      display: none;
      padding: clamp(12px, 2vw, 24px);
      background: rgba(23, 19, 15, 0.94);
    }

    .wrong-flip-toggle:checked ~ .wrong-carousel-popup {
      display: grid;
    }

    .wrong-popup-scrim {
      position: absolute;
      inset: 0;
      cursor: pointer;
    }

    .wrong-popup-panel {
      position: relative;
      z-index: 1;
      min-width: 0;
      min-height: 0;
      display: grid;
      border-radius: 8px;
      overflow: hidden;
      background: rgba(247, 243, 232, 0.08);
    }

    .wrong-carousel {
      position: relative;
      min-height: 0;
      display: grid;
      grid-template-rows: minmax(0, 1fr) auto;
      gap: 12px;
    }

    .wrong-carousel-window {
      min-height: 0;
      overflow: hidden;
      border: 0;
      border-radius: 8px;
      background: rgba(247, 243, 232, 0.08);
    }

    .wrong-carousel-track {
      display: flex;
      width: 200%;
      height: 100%;
      transition: transform 320ms ease;
    }

    .wrong-carousel-slide {
      flex: 0 0 50%;
      margin: 0;
    }

    .wrong-carousel-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 0;
    }

    .wrong-slide-two-toggle:checked ~ .wrong-carousel-window .wrong-carousel-track {
      transform: translateX(-50%);
    }

    .wrong-carousel-controls {
      display: grid;
      grid-template-columns: minmax(52px, 0.12fr) minmax(52px, 0.12fr) auto;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }

    .wrong-carousel-controls label {
      min-width: 42px;
      padding: 0 12px;
      background: rgba(35, 70, 56, 0.82);
      font-size: 0.92rem;
    }

    .wrong-slide-one-toggle:checked ~ .wrong-carousel-controls .wrong-dot-one,
    .wrong-slide-two-toggle:checked ~ .wrong-carousel-controls .wrong-dot-two {
      background: var(--gold);
      color: var(--ink);
    }

    .wrong-popup-close {
      padding: 0 14px;
      background: rgba(91, 58, 36, 0.86);
      color: var(--paper);
    }

    .market-image-story {
      width: min(100%, 1180px);
      margin-inline: auto;
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      padding: clamp(18px, 3vw, 30px);
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.96), rgba(232, 216, 184, 0.68)),
        radial-gradient(circle at 10% 0%, rgba(185, 146, 69, 0.14), transparent 38%);
      box-shadow: 0 20px 42px rgba(91, 58, 36, 0.14);
    }

    .market-image-story::after {
      content: "";
      display: block;
      clear: both;
    }

    .market-theology-visual {
      float: right;
      width: min(46%, 520px);
      margin: 0 0 clamp(16px, 2.4vw, 26px) clamp(20px, 3vw, 38px);
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.62);
      box-shadow: 0 18px 34px rgba(91, 58, 36, 0.16);
    }

    .market-theology-visual img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    .market-image-story p {
      margin: 0 0 clamp(12px, 1.8vw, 18px);
      color: var(--muted);
      font-size: clamp(1rem, 1.45vw, 1.16rem);
      line-height: 1.66;
    }

    .market-image-story p:last-child {
      margin-bottom: 0;
    }

    .market-image-story .closing-line {
      color: var(--forest);
      font-weight: 750;
    }

    .scripture-reflection {
      width: min(100%, 1180px);
      margin-inline: auto;
    }

    .value-bars {
      display: grid;
      gap: 12px;
      margin: 18px 0;
    }

    .value-row {
      display: grid;
      grid-template-columns: minmax(98px, 0.32fr) minmax(0, 1fr);
      gap: 12px;
      align-items: center;
      color: var(--deep-kraft);
      font-size: 0.9rem;
      font-weight: 750;
    }

    .value-track {
      min-height: 22px;
      overflow: hidden;
      border: 1px solid rgba(91, 58, 36, 0.16);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.58);
    }

    .value-fill {
      display: flex;
      min-height: 22px;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--leaf), var(--gold));
      color: var(--paper);
      font-size: 0.78rem;
      font-weight: 800;
    }

    .choice-list {
      display: grid;
      gap: 12px;
      margin-top: 14px;
    }

    .choice-list .card {
      display: grid;
      gap: 6px;
      box-shadow: none;
    }

    .ordinary-art-page {
      min-height: calc(100vh - 120px);
      display: grid;
      gap: clamp(24px, 4vw, 42px);
      align-content: start;
      border-radius: 8px;
      background:
        linear-gradient(180deg, rgba(247, 243, 232, 0.84), rgba(247, 243, 232, 0.94)),
        radial-gradient(circle at 12% 0%, rgba(217, 154, 61, 0.12), transparent 34%);
    }

    .ordinary-story {
      color: #76604f;
    }

    .ordinary-story::after {
      content: "";
      display: block;
      clear: both;
    }

    .ordinary-hero {
      float: left;
      width: min(59%, 740px);
      margin: 0 clamp(24px, 3vw, 42px) 18px 0;
      border-radius: 8px;
      object-fit: contain;
      box-shadow: 0 18px 34px rgba(91, 58, 36, 0.16);
    }

    .ordinary-copy {
      max-width: none;
    }

    .ordinary-copy p {
      margin: 0 0 clamp(12px, 1.6vw, 18px);
      color: #76604f;
      font-size: clamp(1.08rem, 1.65vw, 1.38rem);
      line-height: 1.62;
    }

    .ordinary-copy p:last-child {
      margin-bottom: 0;
    }

    .ordinary-copy .ordinary-small {
      max-width: 72ch;
      margin-top: clamp(10px, 1.6vw, 18px);
      padding-top: clamp(10px, 1.4vw, 16px);
      border-top: 1px solid rgba(118, 96, 79, 0.18);
      font-size: clamp(0.98rem, 1.35vw, 1.14rem);
      line-height: 1.58;
    }

    .transparent-quote-row {
      display: grid;
      grid-template-columns: repeat(2, minmax(280px, 1fr));
      gap: clamp(34px, 8vw, 110px);
      align-items: end;
      margin: 0;
      padding: clamp(12px, 2.2vw, 20px) clamp(8px, 2vw, 18px);
      border-radius: 8px;
      background:
        linear-gradient(90deg, rgba(247, 243, 232, 0.18), rgba(232, 216, 184, 0.32), rgba(247, 243, 232, 0.18));
    }

    .transparent-quote {
      margin: 0;
      border: 0;
      background: transparent;
      box-shadow: none;
      display: grid;
      place-items: end center;
    }

    .transparent-quote img {
      display: block;
      width: 100%;
      max-width: 640px;
      height: clamp(130px, 15vw, 178px);
      object-fit: contain;
      mix-blend-mode: multiply;
      filter: drop-shadow(0 10px 12px rgba(91, 58, 36, 0.12));
    }

    .economics-step-page {
      display: grid;
      gap: clamp(18px, 3vw, 26px);
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      padding: clamp(18px, 3vw, 28px);
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.96), rgba(232, 216, 184, 0.72)),
        radial-gradient(circle at 15% 0%, rgba(217, 154, 61, 0.14), transparent 36%);
      box-shadow: 0 22px 48px rgba(91, 58, 36, 0.16);
    }

    .economics-step-header {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      justify-content: space-between;
    }

    .economics-step-header h2,
    .economics-step-header p {
      margin: 0;
    }

    .economics-step-header h2 {
      margin-top: 5px;
      color: var(--forest);
      font-size: clamp(1.65rem, 4vw, 2.55rem);
      line-height: 1.08;
    }

    .completion-icon {
      flex: 0 0 auto;
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(185, 146, 69, 0.44);
      border-radius: 8px;
      background: rgba(247, 243, 232, 0.72);
      color: var(--forest);
      font-weight: 850;
      box-shadow: 0 10px 20px rgba(91, 58, 36, 0.1);
    }

    .economics-teaching-panel {
      border: 1px solid rgba(91, 58, 36, 0.16);
      border-radius: 8px;
      padding: clamp(18px, 3vw, 28px);
      background:
        linear-gradient(180deg, rgba(247, 243, 232, 0.92), rgba(255, 255, 255, 0.55)),
        radial-gradient(circle at 85% 8%, rgba(124, 143, 90, 0.1), transparent 34%);
      box-shadow: 0 18px 38px rgba(91, 58, 36, 0.12);
    }

    .economics-hero-layout {
      display: grid;
      grid-template-columns: minmax(280px, 0.9fr) minmax(380px, 1.1fr);
      gap: clamp(18px, 3vw, 28px);
      align-items: stretch;
      margin-top: clamp(14px, 2vw, 18px);
    }

    .economics-hero-copy {
      display: grid;
      grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
      gap: clamp(16px, 2.4vw, 22px);
      min-width: 0;
    }

    .economics-hero-copy .teaching-section {
      display: grid;
      align-content: center;
      margin-top: 0;
    }

    .economics-square-image {
      display: block;
      width: 100%;
      height: 100%;
      min-height: clamp(520px, 58vw, 650px);
      margin: 0;
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      object-fit: cover;
      object-position: center;
      background: var(--cream);
      box-shadow: 0 18px 34px rgba(91, 58, 36, 0.18);
    }

    .teaching-section {
      margin-top: clamp(16px, 2.5vw, 22px);
      overflow: hidden;
      border: 1px solid rgba(91, 58, 36, 0.13);
      border-left: 4px solid rgba(185, 146, 69, 0.72);
      border-radius: 8px;
      padding: clamp(12px, 1.8vw, 16px) clamp(14px, 2vw, 18px);
      background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.46), rgba(247, 243, 232, 0.7)),
        radial-gradient(circle at 100% 0%, rgba(185, 146, 69, 0.1), transparent 34%);
      box-shadow: 0 12px 26px rgba(91, 58, 36, 0.08);
    }

    .teaching-section.everyday-life-section {
      border-left-color: rgba(79, 107, 58, 0.86);
      background:
        linear-gradient(145deg, rgba(124, 143, 90, 0.14), rgba(247, 243, 232, 0.76)),
        radial-gradient(circle at 100% 0%, rgba(79, 107, 58, 0.12), transparent 34%);
    }

    .teaching-section.misunderstanding-section {
      border-color: rgba(217, 154, 61, 0.34);
      border-left-color: var(--amber);
      background:
        linear-gradient(145deg, rgba(217, 154, 61, 0.2), rgba(247, 243, 232, 0.78)),
        radial-gradient(circle at 100% 0%, rgba(154, 107, 63, 0.14), transparent 34%);
    }

    .teaching-section.misunderstanding-section h3 {
      color: var(--deep-kraft);
    }

    .teaching-section.takeaway-section {
      border-left-color: rgba(35, 70, 56, 0.84);
      background:
        linear-gradient(145deg, rgba(35, 70, 56, 0.1), rgba(247, 243, 232, 0.76)),
        radial-gradient(circle at 100% 0%, rgba(185, 146, 69, 0.12), transparent 34%);
    }

    .teaching-section:first-of-type {
      margin-top: 0;
    }

    .teaching-section h3,
    .teaching-section p {
      margin: 0;
    }

    .teaching-section h3 {
      margin-bottom: 10px;
      color: var(--forest);
      font-size: clamp(1.05rem, 2vw, 1.22rem);
      line-height: 1.2;
    }

    .teaching-section p + p {
      margin-top: 22px;
    }

    .teaching-section p,
    .economics-list li {
      color: var(--deep-kraft);
      font-size: clamp(0.96rem, 1.55vw, 1.08rem);
      line-height: 1.72;
    }

    .economics-list {
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 8px 18px;
      margin: 9px 0 0;
      padding-left: 18px;
    }

    .economics-visual-card {
      clear: both;
      margin: clamp(18px, 3vw, 26px) 0;
      border: 1px solid rgba(91, 58, 36, 0.16);
      border-radius: 8px;
      padding: clamp(10px, 1.8vw, 14px);
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.86), rgba(255, 255, 255, 0.58)),
        radial-gradient(circle at 12% 0%, rgba(217, 154, 61, 0.12), transparent 32%);
      box-shadow: 0 16px 34px rgba(91, 58, 36, 0.12);
    }

    .economics-visual-card img {
      display: block;
      width: 100%;
      max-height: 520px;
      object-fit: contain;
      border-radius: 6px;
    }

    .quote-card-row,
    .concept-card-row {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: clamp(14px, 2.5vw, 20px);
    }

    .quote-card-row {
      align-items: stretch;
    }

    .quote-card {
      display: grid;
      place-items: center;
      border: 1px solid rgba(185, 146, 69, 0.34);
      border-left: 5px solid var(--gold);
      border-radius: 8px;
      padding: 12px;
      background: rgba(247, 243, 232, 0.74);
      box-shadow: 0 16px 34px rgba(91, 58, 36, 0.12);
    }

    .quote-card img {
      width: 100%;
      max-height: 210px;
      object-fit: contain;
      mix-blend-mode: multiply;
      filter: drop-shadow(0 10px 12px rgba(91, 58, 36, 0.12));
    }

    .concept-card-row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .concept-card {
      border: 1px solid rgba(91, 58, 36, 0.15);
      border-radius: 8px;
      padding: 16px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0 14px 28px rgba(91, 58, 36, 0.1);
    }

    .concept-card strong {
      display: block;
      margin-bottom: 7px;
      color: var(--gold);
      font-size: 0.76rem;
      text-transform: uppercase;
    }

    .concept-card h3,
    .concept-card p {
      margin: 0;
    }

    .concept-card h3 {
      margin-bottom: 7px;
      color: var(--forest);
      font-size: 1.04rem;
    }

    .concept-card p {
      color: var(--muted);
      line-height: 1.5;
    }

    .economics-highlight {
      border: 1px solid rgba(185, 146, 69, 0.36);
      border-left: 5px solid var(--gold);
      border-radius: 8px;
      padding: 16px 18px;
      background: rgba(217, 154, 61, 0.1);
      box-shadow: 0 14px 28px rgba(91, 58, 36, 0.1);
    }

    .economics-highlight h3,
    .economics-highlight p {
      margin: 0;
    }

    .economics-highlight h3 {
      margin-bottom: 7px;
      color: var(--forest);
    }

    .economics-choice-chart {
      display: grid;
      gap: 12px;
      border: 1px solid rgba(91, 58, 36, 0.15);
      border-radius: 8px;
      padding: 16px;
      background: rgba(255, 255, 255, 0.48);
      box-shadow: 0 14px 28px rgba(91, 58, 36, 0.1);
    }

    .economics-choice-chart h3 {
      margin: 0;
      color: var(--forest);
    }

    .choice-chart-row {
      display: grid;
      grid-template-columns: minmax(90px, 0.18fr) minmax(0, 1fr);
      gap: 12px;
      align-items: center;
    }

    .choice-chart-row strong {
      color: var(--deep-kraft);
    }

    .choice-chart-tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .choice-chart-tags span {
      border: 1px solid rgba(79, 107, 58, 0.2);
      border-radius: 999px;
      padding: 6px 10px;
      background: rgba(124, 143, 90, 0.17);
      color: var(--forest);
      font-size: 0.86rem;
      font-weight: 750;
    }

    .faith-reflection {
      border-color: rgba(217, 154, 61, 0.44);
      border-left-color: var(--amber);
      background:
        linear-gradient(145deg, rgba(217, 154, 61, 0.13), rgba(247, 243, 232, 0.74));
    }

    .pillars-page {
      display: grid;
      gap: clamp(18px, 3vw, 28px);
    }

    .pillars-hero {
      display: grid;
      gap: 10px;
      justify-items: center;
      text-align: center;
      padding: clamp(18px, 3vw, 28px);
      border: 1px solid rgba(91, 58, 36, 0.18);
      border-radius: 8px;
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.94), rgba(232, 216, 184, 0.7)),
        radial-gradient(circle at 50% 0%, rgba(217, 154, 61, 0.16), transparent 36%);
      box-shadow: 0 18px 42px rgba(91, 58, 36, 0.14);
    }

    .pillars-hero h2 {
      max-width: 980px;
      margin: 0;
      font-family: Georgia, "Times New Roman", serif;
      color: var(--forest);
      font-size: clamp(2rem, 6vw, 4.4rem);
      line-height: 1;
    }

    .pillars-hero p {
      max-width: 760px;
      margin: 0;
      color: var(--deep-kraft);
      font-size: clamp(0.98rem, 1.5vw, 1.12rem);
    }

    .pillars-grid {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, minmax(260px, 1fr));
      gap: clamp(16px, 2.5vw, 26px);
      padding: clamp(12px, 2vw, 18px);
      border-radius: 8px;
      overflow: visible;
      background:
        linear-gradient(180deg, rgba(247, 243, 232, 0.42), rgba(232, 216, 184, 0.36)),
        radial-gradient(circle at 0% 100%, rgba(185, 146, 69, 0.12), transparent 30%);
    }

    .pillar-card-shell {
      position: relative;
      min-height: clamp(210px, 22vw, 280px);
      z-index: 0;
    }

    .pillar-card-shell:has(.pillar-toggle:checked) {
      z-index: 1000;
    }

    .pillar-toggle {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }

    .pillar-flip-card {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      min-height: inherit;
      cursor: pointer;
      transform-style: preserve-3d;
      transition:
        transform 420ms ease,
        filter 180ms ease;
    }

    .pillar-toggle:checked + .pillar-flip-card {
      z-index: 4;
      transform: translateY(-2px) scale(1.01);
      filter: drop-shadow(0 24px 30px rgba(91, 58, 36, 0.18));
    }

    .pillar-toggle:focus-visible + .pillar-flip-card .pillar-face {
      outline: 3px solid rgba(185, 146, 69, 0.45);
      outline-offset: 3px;
    }

    .pillar-face {
      position: absolute;
      inset: 0;
      overflow: hidden;
      border: 2px solid rgba(185, 146, 69, 0.58);
      border-radius: 8px;
      backface-visibility: hidden;
      box-shadow:
        0 18px 34px rgba(91, 58, 36, 0.13),
        inset 0 1px 0 rgba(255, 255, 255, 0.7);
    }

    .pillar-front {
      display: grid;
      grid-template-columns: minmax(112px, 0.42fr) minmax(0, 1fr);
      gap: clamp(14px, 2vw, 22px);
      align-items: center;
      padding: clamp(22px, 3vw, 32px);
      background:
        linear-gradient(145deg, rgba(247, 243, 232, 0.96), rgba(232, 216, 184, 0.56)),
        radial-gradient(circle at 0% 100%, rgba(185, 146, 69, 0.18), transparent 34%);
    }

    .pillar-icon {
      display: grid;
      place-items: center;
      min-height: 128px;
      color: var(--gold);
    }

    .pillar-icon img {
      display: block;
      width: min(150px, 100%);
      height: auto;
      max-height: 150px;
      object-fit: contain;
      filter: drop-shadow(0 10px 10px rgba(91, 58, 36, 0.16));
    }

    .pillar-front h3,
    .pillar-front p,
    .pillar-popup-card h3,
    .pillar-popup-card p {
      margin: 0;
    }

    .pillar-front h3 {
      color: var(--forest);
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(1.75rem, 3.5vw, 3.15rem);
      line-height: 1;
    }

    .pillar-front p {
      max-width: 30rem;
      margin-top: 10px;
      color: var(--deep-kraft);
      font-size: clamp(0.95rem, 1.35vw, 1.08rem);
      line-height: 1.35;
    }

    .pillar-front span {
      display: inline-flex;
      width: fit-content;
      margin-top: 14px;
      border-radius: 999px;
      padding: 6px 10px;
      background: rgba(185, 146, 69, 0.16);
      color: var(--deep-kraft);
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
    }

    .pillar-popup {
      position: fixed;
      inset: 0;
      z-index: 9999;
      isolation: isolate;
      display: grid;
      place-items: center;
      padding: clamp(16px, 4vw, 38px);
      background: rgba(23, 19, 15, 0.68);
      backdrop-filter: blur(5px);
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
      transition:
        opacity 180ms ease,
        visibility 180ms ease;
    }

    .pillar-toggle:checked ~ .pillar-popup {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .pillar-popup-backdrop {
      position: absolute;
      inset: 0;
      cursor: pointer;
    }

    .pillar-popup-card {
      position: relative;
      z-index: 1;
      width: min(760px, calc(100vw - 28px));
      max-height: min(84vh, 680px);
      display: grid;
      gap: clamp(14px, 2vw, 18px);
      overflow: auto;
      border: 2px solid rgba(185, 146, 69, 0.58);
      border-radius: 8px;
      padding: clamp(20px, 3vw, 32px);
      background:
        linear-gradient(145deg, #f7f3e8, #f0e5cf),
        radial-gradient(circle at 100% 0%, rgba(79, 107, 58, 0.12), transparent 36%);
      box-shadow: 0 34px 90px rgba(23, 19, 15, 0.52);
      transform: translateY(18px) rotateX(4deg) scale(0.97);
      transform-origin: center;
      transition: transform 220ms ease;
    }

    .pillar-toggle:checked ~ .pillar-popup .pillar-popup-card {
      transform: translateY(0) rotateX(0) scale(1);
    }

    .pillar-popup-close {
      position: sticky;
      top: 0;
      justify-self: end;
      border: 1px solid rgba(91, 58, 36, 0.2);
      border-radius: 999px;
      padding: 7px 12px;
      background: #f7f3e8;
      color: var(--deep-kraft);
      cursor: pointer;
      font-size: 0.78rem;
      font-weight: 850;
      text-transform: uppercase;
      box-shadow: 0 8px 16px rgba(91, 58, 36, 0.12);
    }

    .pillar-popup-card strong {
      color: var(--gold);
      font-size: 0.76rem;
      text-transform: uppercase;
    }

    .pillar-popup-card h3 {
      color: var(--forest);
      max-width: 100%;
      font-size: clamp(1.55rem, 3vw, 2.25rem);
      line-height: 1.16;
      text-wrap: balance;
    }

    .pillar-popup-card p {
      color: var(--muted);
      max-width: 68ch;
      font-size: clamp(1.04rem, 1.55vw, 1.18rem);
      line-height: 1.65;
    }

    .complete-button {
      display: inline-flex;
      min-height: 42px;
      align-items: center;
      justify-content: center;
      margin-top: 22px;
      padding: 0 16px;
      border: 1px solid var(--forest);
      border-radius: 8px;
      background: linear-gradient(145deg, var(--forest), var(--ubuntu));
      color: var(--paper);
      font: inherit;
      font-weight: 750;
      cursor: pointer;
      box-shadow: 0 12px 24px rgba(35, 70, 56, 0.22);
      transition:
        background 160ms ease,
        transform 160ms ease,
        box-shadow 160ms ease;
    }

    .complete-button:hover {
      background: linear-gradient(145deg, #1d3a2f, var(--forest));
      box-shadow: 0 14px 28px rgba(35, 70, 56, 0.26);
      transform: translateY(-1px);
    }

    @media (max-width: 640px) {
      .comparison {
        grid-template-columns: 1fr;
      }

      .comparison div:first-child {
        border-right: 0;
        border-bottom: 1px solid rgba(91, 58, 36, 0.18);
      }

      .value-row {
        grid-template-columns: 1fr;
        gap: 6px;
      }

      .engine-layout {
        grid-template-columns: 1fr;
      }

      .engine-chart {
        min-height: 285px;
      }

      .engine-stage-labels {
        grid-template-columns: repeat(2, 1fr);
      }

      .city-neutral-visuals,
      .augustine-layout,
      .city-love-grid,
      .moral-budget-grid {
        grid-template-columns: 1fr;
      }

      .city-neutral-visuals img,
      .augustine-portrait img {
        min-height: 0;
      }

      .city-love-shell {
        min-height: 330px;
      }

      .city-visual-panel {
        width: min(calc((100vh - 36px) * 1.777), calc(100vw - 18px));
        max-width: calc(100vw - 18px);
      }

      .city-visual-actions {
        top: -46px;
        right: 0;
        left: 0;
      }

      .moral-budget-embed {
        height: 470px;
        max-height: 470px;
      }

      .ordinary-hero {
        float: none;
        width: 100%;
        margin: 0 0 18px;
      }

      .ordinary-copy p {
        font-size: 1rem;
        line-height: 1.56;
      }

      .market-theology-visual {
        float: none;
        width: 100%;
        margin: 0 0 18px;
      }

      .audio-discussion-button {
        width: min(100%, 360px);
      }

      .audio-popup-panel {
        min-height: min(72vh, 560px);
        padding: 18px;
      }

      .soundwave {
        min-height: 130px;
      }

      .wrong-thinking-images,
      .wrong-card-grid {
        grid-template-columns: 1fr;
      }

      .wrong-thinking-image img {
        min-height: 0;
      }

      .wrong-flip-card {
        min-height: 0;
      }

      .market-image-story p {
        font-size: 1rem;
        line-height: 1.58;
      }

      .transparent-quote-row {
        grid-template-columns: 1fr;
      }

      .economics-step-header {
        align-items: flex-start;
      }

      .economics-hero-layout {
        grid-template-columns: 1fr;
      }

      .economics-square-image {
        height: auto;
        min-height: 0;
        object-fit: contain;
      }

      .quote-card-row,
      .concept-card-row {
        grid-template-columns: 1fr;
      }

      .pillars-grid {
        grid-template-columns: 1fr;
      }

      .pillar-card-shell {
        min-height: 250px;
      }

      .pillar-front {
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
      }

      .choice-chart-row {
        grid-template-columns: 1fr;
        gap: 7px;
      }
    }
  </style>
  <main class="rich-step" data-rich-lesson-step>
    ${e}
    ${t.includeCompleteButton===!1?"":`<button class="complete-button" data-classroom-complete data-score="5" data-max-score="5">${t.completeButtonLabel??"Continue"}</button>`}
  </main>
`,xh=e=>[{id:`${e}-ordinary-business-life`,kind:"customHtml",title:"Step 2: The Ordinary Business of Life",body:Ye(`
      <p class="eyebrow">Interactive exploration</p>
      <h2>The Ordinary Business of Life</h2>
      <p class="intro">
        Economics is the art of making the most of life. Every transaction involves deeper questions of value,
        cost, preference, justice, and faith.
      </p>
      <div class="grid">
        <section class="card">
          <strong>1. The Consumer: Thabo</strong>
          <h3>Muffin combo or fancy latte?</h3>
          <p>Thabo has R50. A muffin combo costs R49, while a fancy latte costs R45. His decision is not only about price; it is about what will serve his real day well.</p>
          <span class="pill">Need</span><span class="pill">Preference</span><span class="pill">Limited money</span>
        </section>
        <section class="card">
          <strong>2. The Producer: Johan</strong>
          <h3>Cheap Robusta or premium Arabica?</h3>
          <p>Johan must choose between higher margins and higher quality. Business decisions are moral decisions because they affect trust, customers, workers, and the future.</p>
          <span class="pill">Quality</span><span class="pill">Profit</span><span class="pill">Trust</span>
        </section>
        <section class="card">
          <strong>3. The Government</strong>
          <h3>Tax, protect, or subsidise?</h3>
          <p>Public policy can help one group while placing pressure on another. Good economic decisions need wisdom, justice, and care for ordinary people.</p>
          <span class="pill">Public good</span><span class="pill">Trade-offs</span><span class="pill">Justice</span>
        </section>
      </div>
      <div class="callout">
        <h3>Reflect</h3>
        <p>Do these choices treat people merely as consumers and producers, or as image-bearers of God?</p>
      </div>
    `)},{id:`${e}-economics-everyday-choices`,kind:"customHtml",title:"Step 3: Understanding Economics in Everyday Life",body:Ye(`
      <section class="economics-step-page">
        <header class="economics-step-header">
          <div>
            <p class="eyebrow">Step 3</p>
            <h2>Understanding Economics in Everyday Life</h2>
          </div>
          <div class="completion-icon" aria-label="Step status">&#10003;</div>
        </header>

        <section class="economics-teaching-panel">
          <p class="eyebrow">The study of choices</p>
          <h2>What Is Economics?</h2>
          <div class="economics-hero-layout">
            <img
              class="economics-square-image"
              src="https://static.wixstatic.com/media/7638b6_f52c1f6f2d0c42a980e209c87b9db1dd~mv2.png"
              alt="Papercraft public building representing shared economic choices"
            />
            <div class="economics-hero-copy">
              <section class="teaching-section">
                <h3>What Economics Means</h3>
                <p>
                  Economics is the study of the choices persons, businesses, and governments make when they use limited
                  means to satisfy unlimited wants and essential needs. We all want many things, but we are limited in
                  how we can meet those wants and needs. Because we do not have unlimited time, money, energy, skills,
                  or materials, we must make choices.
                </p>
              </section>

              <section class="teaching-section">
                <h3>Why Choices Matter</h3>
                <p>
                  Life is full of constraints. We cannot do everything, buy everything, or produce everything at once.
                  Economics helps us understand how people decide what matters most and how they make the best use of
                  what they have. Economics is the science of figuring out how to make the most of what we have got.
                </p>
              </section>
            </div>
          </div>

          <figure class="economics-visual-card">
            <img
              src="https://static.wixstatic.com/media/7638b6_4acddffa7162437eb2b046ff7ceeb9c3~mv2.png"
              alt="Visual explanation of the everyday areas economics looks at"
            />
          </figure>

          <section class="teaching-section everyday-life-section">
            <h3>Economics in Everyday Life</h3>
            <p>
              The scope of economic activity reaches into everyday life. It helps us understand how individuals and
              society interact in the interest of well-being, while trying to meet essential needs and important wants.
              Economics also considers the choices and trade-offs people make as they try to use resources wisely and
              achieve better outcomes.
            </p>
          </section>

          <section class="teaching-section misunderstanding-section">
            <h3>Common Misunderstanding</h3>
            <p>
              Many people misunderstand economics as only being about complex mathematical models, the stock exchange,
              government policy, or making money. However, economics goes far beyond that. It is about the resources we
              have, how we use them, our connections with people, organisations, and nations, what we do to create or
              obtain resources, and how we use and share them.
            </p>
          </section>

          <section class="teaching-section takeaway-section">
            <h3>Final Takeaway</h3>
            <p>
              Economics is not only about numbers. It is about choices, limited resources, human needs, and how people
              live together.
            </p>
          </section>
        </section>

        <div class="quote-card-row" aria-label="Economics quote visuals">
          <figure class="quote-card">
            <img src="https://static.wixstatic.com/media/7638b6_cf834dcfb79f4803a64eb0cc7b0de17b~mv2.png" alt="Alfred Marshall quote about economics and ordinary life" />
          </figure>
          <figure class="quote-card">
            <img src="https://static.wixstatic.com/media/7638b6_bda9733d617c4cca965c4c45b6971001~mv2.png" alt="Gary Becker quote about economy and making the most of life" />
          </figure>
        </div>

      </section>
    `)},{id:`${e}-practical-economic-elements`,kind:"customHtml",title:"Step 4: Practical Economic Elements",body:Ye(`
      <section class="pillars-page">
        <section class="pillars-hero">
          <p class="eyebrow">Practical life</p>
          <h2>The Four Pillars of Economic Activity</h2>
          <p>
            Tap a pillar to open a detail popup and see how property, relationships, work, and consumption shape daily
            choices for individuals, businesses, and governments.
          </p>
        </section>

        <div class="pillars-grid" aria-label="Four pillars of economic activity">
          <input class="pillar-toggle pillar-reset" type="radio" name="${e}-pillar-detail" id="${e}-pillar-none" checked />

          <div class="pillar-card-shell">
            <input class="pillar-toggle" type="radio" name="${e}-pillar-detail" id="${e}-pillar-property" />
            <label class="pillar-flip-card" for="${e}-pillar-property">
              <div class="pillar-face pillar-front">
                <div class="pillar-icon" aria-hidden="true">
                  <img src="${dr("assets/pillar-property-clean.png")}" alt="" />
                </div>
                <div>
                  <h3>Property</h3>
                  <p>What we own, manage, and protect.</p>
                  <span>Click to find out more</span>
                </div>
              </div>
            </label>
            <div class="pillar-popup" role="dialog" aria-label="Property detail">
              <label class="pillar-popup-backdrop" for="${e}-pillar-none" aria-label="Close property detail"></label>
              <div class="pillar-popup-card">
                <label class="pillar-popup-close" for="${e}-pillar-none">Close</label>
                <strong>Property</strong>
                <h3>What we own, manage, and protect</h3>
                <p>For individuals, property includes money, a home, tools, time, and personal belongings. We choose whether to use these gifts for fear, pride, comfort, service, or stewardship.</p>
                <p>For businesses, property includes stock, equipment, buildings, ideas, and capital. These assets should create value without exploiting people.</p>
                <p>For governments, property includes laws, rights, land use, and public resources. Good policy protects ownership while also caring for public welfare.</p>
              </div>
            </div>
          </div>

          <div class="pillar-card-shell">
            <input class="pillar-toggle" type="radio" name="${e}-pillar-detail" id="${e}-pillar-relationships" />
            <label class="pillar-flip-card" for="${e}-pillar-relationships">
              <div class="pillar-face pillar-front">
                <div class="pillar-icon" aria-hidden="true">
                  <img src="${dr("assets/pillar-relationships-clean.png")}" alt="" />
                </div>
                <div>
                  <h3>Relationships</h3>
                  <p>Who we trust, trade with, and serve.</p>
                  <span>Click to find out more</span>
                </div>
              </div>
            </label>
            <div class="pillar-popup" role="dialog" aria-label="Relationships detail">
              <label class="pillar-popup-backdrop" for="${e}-pillar-none" aria-label="Close relationships detail"></label>
              <div class="pillar-popup-card">
                <label class="pillar-popup-close" for="${e}-pillar-none">Close</label>
                <strong>Relationships</strong>
                <h3>Who we trust, trade with, and serve</h3>
                <p>For individuals, relationships affect family budgets, friendships, borrowing, lending, and daily support. Our economic choices can build trust or damage it.</p>
                <p>For businesses, relationships include customers, workers, suppliers, competitors, and the community. Fair dealing creates long-term strength.</p>
                <p>For governments, relationships include trade, diplomacy, social support, and peace. Public decisions can strengthen or weaken the bonds of society.</p>
              </div>
            </div>
          </div>

          <div class="pillar-card-shell">
            <input class="pillar-toggle" type="radio" name="${e}-pillar-detail" id="${e}-pillar-work" />
            <label class="pillar-flip-card" for="${e}-pillar-work">
              <div class="pillar-face pillar-front">
                <div class="pillar-icon" aria-hidden="true">
                  <img src="${dr("assets/pillar-work-clean.png")}" alt="" />
                </div>
                <div>
                  <h3>Work</h3>
                  <p>How effort becomes service.</p>
                  <span>Click to find out more</span>
                </div>
              </div>
            </label>
            <div class="pillar-popup" role="dialog" aria-label="Work detail">
              <label class="pillar-popup-backdrop" for="${e}-pillar-none" aria-label="Close work detail"></label>
              <div class="pillar-popup-card">
                <label class="pillar-popup-close" for="${e}-pillar-none">Close</label>
                <strong>Work</strong>
                <h3>How effort becomes service</h3>
                <p>For individuals, work is a source of income, skill, dignity, and purpose. The question is not only, "How much do I earn?" but also, "What kind of person am I becoming through my work?"</p>
                <p>For businesses, work creates jobs, products, services, and training. Good businesses organise labour in ways that respect people.</p>
                <p>For governments, work connects to labour law, education, safety, fair wages, and economic growth. Wise policy helps people work with dignity.</p>
              </div>
            </div>
          </div>

          <div class="pillar-card-shell">
            <input class="pillar-toggle" type="radio" name="${e}-pillar-detail" id="${e}-pillar-consumption" />
            <label class="pillar-flip-card" for="${e}-pillar-consumption">
              <div class="pillar-face pillar-front">
                <div class="pillar-icon" aria-hidden="true">
                  <img src="${dr("assets/pillar-consumption-clean.png")}" alt="" />
                </div>
                <div>
                  <h3>Consumption</h3>
                  <p>How we use resources to meet needs.</p>
                  <span>Click to find out more</span>
                </div>
              </div>
            </label>
            <div class="pillar-popup" role="dialog" aria-label="Consumption detail">
              <label class="pillar-popup-backdrop" for="${e}-pillar-none" aria-label="Close consumption detail"></label>
              <div class="pillar-popup-card">
                <label class="pillar-popup-close" for="${e}-pillar-none">Close</label>
                <strong>Consumption</strong>
                <h3>How we use resources to meet needs</h3>
                <p>For individuals, consumption includes food, clothing, transport, entertainment, and technology. Every purchase asks whether we are meeting a need, feeding greed, or serving a good purpose.</p>
                <p>For businesses, consumption patterns shape production, pricing, advertising, and distribution. Companies must decide whether to serve real needs or only create more desire.</p>
                <p>For governments, consumption affects access to goods, public services, taxation, and fairness. Good systems help people meet needs without wasting resources.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,{includeCompleteButton:!1})},{id:`${e}-art-of-living-well`,kind:"customHtml",title:"Step 5: The Architecture of Choice",body:Ye(`
      <section class="market-theology-page">
        <section class="audio-discussion" aria-label="Audio discussion">
          <p class="audio-discussion-copy">Click the button to listen to the discussion.</p>
          <input
            class="audio-discussion-toggle"
            type="checkbox"
            id="${e}-wallet-worldview-audio"
            data-rich-popup-toggle
            data-audio-toggle
            data-audio-target="#${e}-wallet-worldview-audio-player"
          />
          <label class="audio-discussion-button" for="${e}-wallet-worldview-audio">
            <img
              src="https://static.wixstatic.com/media/7638b6_4d265beddab44939b223089de3158338~mv2.png"
              alt="Open audio discussion"
            />
          </label>
          <div class="audio-popup" role="dialog" aria-label="Audio discussion player">
            <label class="audio-popup-scrim" for="${e}-wallet-worldview-audio" aria-label="Close audio discussion"></label>
            <div class="audio-popup-panel">
              <div class="soundwave" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <audio id="${e}-wallet-worldview-audio-player" controls preload="metadata">
                <source src="https://static.wixstatic.com/mp3/7638b6_731005efcdc94fc89592073673540bd8.m4a" type="audio/mp4" />
              </audio>
              <label class="audio-popup-close" for="${e}-wallet-worldview-audio">Close</label>
            </div>
          </div>
        </section>

        <section class="wrong-thinking-section" aria-label="Wrong thinking about economics">
          <h2>Wrong thinking about economics</h2>

          <div class="wrong-thinking-images" aria-label="Wrong economic thinking visuals">
            <figure class="wrong-thinking-image">
              <img
                src="https://static.wixstatic.com/media/7638b6_a9ec244496864c2aa33dfb8d0104c46f~mv2.png"
                alt="Wrong thinking about economics visual"
              />
            </figure>
            <figure class="wrong-thinking-image">
              <img
                src="https://static.wixstatic.com/media/7638b6_c05404d411b64c23b78e6c2ce1ab3cff~mv2.png"
                alt="Wrong thinking about economics comparison visual"
              />
            </figure>
          </div>

          <p class="scholars-heading">Find out what scholars says</p>

          <div class="wrong-card-grid" aria-label="Wrong thinking flip cards">
            <article class="wrong-flip-card">
              <input class="wrong-flip-toggle" type="checkbox" id="${e}-wrong-card-one" data-rich-popup-toggle />
              <label class="wrong-flip-cover" for="${e}-wrong-card-one">
                <img
                  src="https://static.wixstatic.com/media/7638b6_d6bf992a5e584631869e2b85fb075a6b~mv2.png"
                  alt="First wrong thinking flip card cover"
                />
                <span class="wrong-flip-cta">Find out more</span>
              </label>
              <div class="wrong-carousel-popup" role="dialog" aria-label="First wrong thinking carousel">
                <label class="wrong-popup-scrim" for="${e}-wrong-card-one" aria-label="Close first carousel"></label>
                <div class="wrong-popup-panel">
                  <div class="wrong-carousel">
                    <input class="wrong-slide-toggle wrong-slide-one-toggle" type="radio" name="${e}-wrong-card-one-carousel" id="${e}-wrong-card-one-slide-one" checked />
                    <input class="wrong-slide-toggle wrong-slide-two-toggle" type="radio" name="${e}-wrong-card-one-carousel" id="${e}-wrong-card-one-slide-two" />
                    <div class="wrong-carousel-window">
                      <div class="wrong-carousel-track">
                        <figure class="wrong-carousel-slide">
                          <img
                            src="https://static.wixstatic.com/media/7638b6_f8c5c53c17a9489895b293cb53e9aad1~mv2.png"
                            alt="First carousel slide for the first wrong thinking card"
                          />
                        </figure>
                        <figure class="wrong-carousel-slide">
                          <img
                            src="https://static.wixstatic.com/media/7638b6_2951a0d17d8a4389b4c29a84397af2a1~mv2.png"
                            alt="Second carousel slide for the first wrong thinking card"
                          />
                        </figure>
                      </div>
                    </div>
                    <div class="wrong-carousel-controls">
                      <label class="wrong-dot-one" for="${e}-wrong-card-one-slide-one">1</label>
                      <label class="wrong-dot-two" for="${e}-wrong-card-one-slide-two">2</label>
                      <label class="wrong-popup-close" for="${e}-wrong-card-one">Close</label>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article class="wrong-flip-card">
              <input class="wrong-flip-toggle" type="checkbox" id="${e}-wrong-card-two" data-rich-popup-toggle />
              <label class="wrong-flip-cover" for="${e}-wrong-card-two">
                <img
                  src="https://static.wixstatic.com/media/7638b6_af53a18f98cc4c84ba49e3357ca743f1~mv2.png"
                  alt="Second wrong thinking flip card cover"
                />
                <span class="wrong-flip-cta">Find out more</span>
              </label>
              <div class="wrong-carousel-popup" role="dialog" aria-label="Second wrong thinking carousel">
                <label class="wrong-popup-scrim" for="${e}-wrong-card-two" aria-label="Close second carousel"></label>
                <div class="wrong-popup-panel">
                  <div class="wrong-carousel">
                    <input class="wrong-slide-toggle wrong-slide-one-toggle" type="radio" name="${e}-wrong-card-two-carousel" id="${e}-wrong-card-two-slide-one" checked />
                    <input class="wrong-slide-toggle wrong-slide-two-toggle" type="radio" name="${e}-wrong-card-two-carousel" id="${e}-wrong-card-two-slide-two" />
                    <div class="wrong-carousel-window">
                      <div class="wrong-carousel-track">
                        <figure class="wrong-carousel-slide">
                          <img
                            src="https://static.wixstatic.com/media/7638b6_a894e89316604b2d8d33688b97811959~mv2.png"
                            alt="First carousel slide for the second wrong thinking card"
                          />
                        </figure>
                        <figure class="wrong-carousel-slide">
                          <img
                            src="https://static.wixstatic.com/media/7638b6_16fe653c77904001a72b0786dd8fce2c~mv2.png"
                            alt="Second carousel slide for the second wrong thinking card"
                          />
                        </figure>
                      </div>
                    </div>
                    <div class="wrong-carousel-controls">
                      <label class="wrong-dot-one" for="${e}-wrong-card-two-slide-one">1</label>
                      <label class="wrong-dot-two" for="${e}-wrong-card-two-slide-two">2</label>
                      <label class="wrong-popup-close" for="${e}-wrong-card-two">Close</label>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <article class="market-image-story">
          <figure class="market-theology-visual">
            <img
              src="https://static.wixstatic.com/media/7638b6_5f69750a6fca42718c433eaf03285fc7~mv2.png"
              alt="Faithonomics visual exploring economic thinking and theological teaching"
            />
          </figure>
          <p>
            At times our Christian way of thinking sees economics as being a science based on natural laws, and we
            should only correct it when it is in clear conflict with Bible morals. For example, liberal economic
            theories suggest that society works because people focus on their own needs and try to outdo each other.
          </p>
          <p>
            On the other hand, in socialist theories, the key goals are people cooperating and ensuring everyone is
            treated equally. However, both of these approaches omit God from these important human interactions.
          </p>
          <p>
            Economic thought and theological teaching in the past were deeply connected. God's provision and justice
            formed the foundation for understanding how society should organise resources and care for people.
          </p>
          <p>
            During the period of the Enlightenment, God's wisdom was replaced by reason and human experience. Divine
            guidance on economic thought was replaced by thinkers like Adam Smith with the autonomous market system
            and Karl Marx with the socio-economic "laws" of historical development.
          </p>
          <p class="closing-line">
            Removing God from the choices we make in what we have, how we work and how we use what we have directly
            affects our relationship with God. Redefining God, humanity and our worship of God.
          </p>
        </article>

        <section class="callout scripture-reflection">
          <h3>Read Matthew 6:25-34</h3>
          <p>
            Read Matthew 6:25-34, and reflect on what the portion of Scripture says about how we should make
            our economic choices. How do I practically apply it to my daily life, my work/business, or who I
            vote for?
          </p>
          <textarea aria-label="Matthew 6 economic choice reflection" rows="7" placeholder="Write your reflection here..."></textarea>
        </section>
      </section>
    `,{completeButtonLabel:"Complete step"})},{id:`${e}-market-orthodoxy`,kind:"customHtml",title:"Step 5: Market Orthodoxy",body:Ye(`
      <p class="eyebrow">The religion of economics</p>
      <h2>Market Orthodoxy</h2>
      <p class="intro">
        Modern economics often claims to be neutral, but it can begin to operate like a godless religion:
        it offers a story of providence, a view of humanity, a priesthood, and a promise of salvation.
      </p>
      <div class="grid">
        <section class="card">
          <strong>I. The New God</strong>
          <h3>The Invisible Hand</h3>
          <p>The market is treated as a form of providence that guides outcomes and deserves trust.</p>
        </section>
        <section class="card">
          <strong>II. The Image</strong>
          <h3>Reduced Humanity</h3>
          <p>People are reduced from spiritual image-bearers to rational consumers and profit-driven producers.</p>
        </section>
        <section class="card">
          <strong>III. The Priesthood</strong>
          <h3>Expert Orthodoxy</h3>
          <p>Economists and market experts proclaim doctrines of growth, globalisation, and efficiency.</p>
        </section>
        <section class="card">
          <strong>IV. Salvation</strong>
          <h3>Material Abundance</h3>
          <p>The promised heaven is technological progress, uninterrupted growth, and more consumption.</p>
        </section>
      </div>
      <div class="callout">
        <h3>Checkpoint</h3>
        <p>Faithonomics asks what has taken the place of God in the economic imagination.</p>
      </div>
    `)},{id:`${e}-economic-theology`,kind:"customHtml",title:"Step 6: Economic Theology",body:Ye(`
      <p class="eyebrow">Paradigm shift</p>
      <h2>Towards an Economic Theology</h2>
      <p class="intro">
        Economic theology asks how belief in God should shape what we consider real, valuable, fair,
        responsible, and meaningful in the economy.
      </p>
      <div class="comparison">
        <div>
          <h3>Modern Economics Often Prioritises</h3>
          <ul>
            <li>Efficiency and progress</li>
            <li>Material abundance</li>
            <li>Self-interest as rationality</li>
            <li>Value measured mainly by market price</li>
            <li>Debt treated as a technical obligation</li>
          </ul>
        </div>
        <div>
          <h3>Economic Theology Reframes</h3>
          <ul>
            <li>Purpose and meaning</li>
            <li>Community and trust</li>
            <li>Morality and fairness</li>
            <li>Value measured by human flourishing and created purpose</li>
            <li>Debt viewed through responsibility, neighbour-love, and grace</li>
          </ul>
        </div>
      </div>
      <div class="callout">
        <h3>Learning move</h3>
        <p>Do not ask only, "What works?" Ask, "What kind of people and community does this economy form?"</p>
      </div>
    `)},{id:`${e}-daily-application`,kind:"customHtml",title:"Step 7: Daily Application",body:Ye(`
      <p class="eyebrow">Practice</p>
      <h2>Applying the Lens to Daily Life</h2>
      <p class="intro">
        Rejecting the religion of the market changes ordinary behaviour. Faith reshapes work, money,
        purchasing, management, and the way we see people.
      </p>
      <div class="grid">
        <section class="card">
          <strong>The Office</strong>
          <h3>Purpose over pure profit</h3>
          <p>A job is not only a mechanism to maximise income. It is a vocation that should contribute to human flourishing.</p>
        </section>
        <section class="card">
          <strong>The Office</strong>
          <h3>Colleagues as image-bearers</h3>
          <p>Workers are not merely human resources or budget lines. They carry dignity and deserve fair wages, rest, and honour.</p>
        </section>
        <section class="card">
          <strong>The Wallet</strong>
          <h3>Stewardship over consumerism</h3>
          <p>Money is entrusted for good, not simply for accumulating goods. Material abundance cannot save us.</p>
        </section>
        <section class="card">
          <strong>The Wallet</strong>
          <h3>Mindful purchasing</h3>
          <p>Even buying coffee raises faithful questions: Was this ethically sourced? Does this purchase support a fair economic system?</p>
        </section>
      </div>
      <div class="callout">
        <h3>Monday question</h3>
        <p>What is one economic decision you can make this week that treats people as image-bearers rather than market units?</p>
      </div>
    `)}],kh=e=>({id:`${e}-city-economic-engine`,kind:"customHtml",title:"Step 2: The City: Economic Engine",body:Ye(`
    <p class="eyebrow">Urban theology and agglomeration economics</p>
    <h2>The City: Economic Engine and Human Vocation</h2>
    <p class="intro">
      Cities gather people, work, money, land, skills and ideas. When people live and work close together,
      they can share resources, find better matches and learn from one another. This step asks what happens
      economically, culturally and theologically when human life becomes concentrated in a city.
    </p>

    <figure class="lesson-graphic">
      <img
        src="https://static.wixstatic.com/media/7638b6_ebdf2c0114524151aeccb50803b561b4~mv2.png"
        alt="City economy statistics graphic."
      />
    </figure>

    <figure class="lesson-graphic">
      <img
        src="https://static.wixstatic.com/media/7638b6_87333f384bcd49f0b4b6d8e2f3ac8ece~mv2.png"
        alt="Biblical city economy graphic."
      />
    </figure>

    <section class="card">
      <h3>A city is more than a place</h3>
      <p>
        A city is not merely a geographic backdrop for trade. It is a sophisticated economic actor
        that organises land, labour, capital and human desire into one interacting system.
      </p>
      <div class="grid">
        <section class="card">
          <strong>Land</strong>
          <p>Where homes, firms, roads and services are placed.</p>
        </section>
        <section class="card">
          <strong>Labour</strong>
          <p>How different human skills and vocations connect.</p>
        </section>
        <section class="card">
          <strong>Capital</strong>
          <p>How money, buildings, tools and investment are mobilised.</p>
        </section>
        <section class="card">
          <strong>Desire</strong>
          <p>How status, advertising and urban habits shape what people want.</p>
        </section>
      </div>
    </section>

    <section class="engine-lesson">
      <h3>The Economic Engine</h3>
      <p class="engine-intro">
        Cities become powerful when people and businesses are close together. Economists call these benefits
        <strong>agglomeration economies</strong>. Proximity can help an economy through
        <strong>sharing, matching and learning</strong>.
      </p>

      <div class="engine-vocab">
        <strong>Vocabulary Check: Agglomeration Economics</strong>
        The study of how being close together can help people and businesses share resources, find better matches,
        and learn from one another.
      </div>

      <div class="engine-layout">
        <section>
          <h4 class="engine-framework-title">The Sharing-Matching-Learning Framework</h4>

          <div class="engine-mech">
            <span class="engine-num">1</span>
            <span class="engine-copy"><strong>Sharing:</strong> Firms can share expensive resources such as ports, railways and power networks.</span>
          </div>

          <div class="engine-mech">
            <span class="engine-num">2</span>
            <span class="engine-copy"><strong>Matching:</strong> Workers, employers, suppliers and customers have more chances to find the right fit.</span>
          </div>

          <div class="engine-mech">
            <span class="engine-num">3</span>
            <span class="engine-copy"><strong>Learning:</strong> Ideas move faster when people work and interact near one another.</span>
          </div>
        </section>

        <section class="engine-chart-card">
          <input class="engine-stage-radio" type="radio" name="${e}-engine-stage" id="${e}-stage-village" value="village" checked>
          <input class="engine-stage-radio" type="radio" name="${e}-engine-stage" id="${e}-stage-town" value="town">
          <input class="engine-stage-radio" type="radio" name="${e}-engine-stage" id="${e}-stage-small-city" value="small-city">
          <input class="engine-stage-radio" type="radio" name="${e}-engine-stage" id="${e}-stage-large-city" value="large-city">
          <input class="engine-stage-radio" type="radio" name="${e}-engine-stage" id="${e}-stage-megacity" value="megacity">

          <div class="engine-chart-title">THE URBAN TRADE-OFF - SIMPLE TEACHING GRAPHIC</div>

          <div class="engine-chart">
            <svg viewBox="0 0 700 340" role="img" aria-label="Conceptual graph showing productivity gains and urban costs as settlement size increases">
              <line x1="60" y1="285" x2="650" y2="285" stroke="#d8d2c8"/>
              <line x1="60" y1="45" x2="60" y2="285" stroke="#e1dcd4"/>

              <path d="M60 270 C150 245 220 215 290 170 C365 120 445 80 530 72 C585 68 620 69 650 67"
                    fill="none" stroke="#4f6b3a" stroke-width="5" stroke-linecap="round"/>

              <path d="M60 280 C170 268 250 248 330 215 C430 174 535 112 650 35"
                    fill="none" stroke="#9a6b3f" stroke-width="4" stroke-dasharray="9 8" stroke-linecap="round"/>

              <g class="engine-stage-marker stage-village">
                <line x1="60" y1="38" x2="60" y2="285" stroke="#b99245" stroke-width="2" stroke-dasharray="5 6"/>
                <circle cx="60" cy="270" r="8" fill="#4f6b3a" stroke="#fff" stroke-width="3"/>
                <circle cx="60" cy="280" r="7" fill="#9a6b3f" stroke="#fff" stroke-width="3"/>
              </g>
              <g class="engine-stage-marker stage-town">
                <line x1="205" y1="38" x2="205" y2="285" stroke="#b99245" stroke-width="2" stroke-dasharray="5 6"/>
                <circle cx="205" cy="220" r="8" fill="#4f6b3a" stroke="#fff" stroke-width="3"/>
                <circle cx="205" cy="255" r="7" fill="#9a6b3f" stroke="#fff" stroke-width="3"/>
              </g>
              <g class="engine-stage-marker stage-small-city">
                <line x1="355" y1="38" x2="355" y2="285" stroke="#b99245" stroke-width="2" stroke-dasharray="5 6"/>
                <circle cx="355" cy="128" r="8" fill="#4f6b3a" stroke="#fff" stroke-width="3"/>
                <circle cx="355" cy="205" r="7" fill="#9a6b3f" stroke="#fff" stroke-width="3"/>
              </g>
              <g class="engine-stage-marker stage-large-city">
                <line x1="515" y1="38" x2="515" y2="285" stroke="#b99245" stroke-width="2" stroke-dasharray="5 6"/>
                <circle cx="515" cy="76" r="8" fill="#4f6b3a" stroke="#fff" stroke-width="3"/>
                <circle cx="515" cy="122" r="7" fill="#9a6b3f" stroke="#fff" stroke-width="3"/>
              </g>
              <g class="engine-stage-marker stage-megacity">
                <line x1="650" y1="38" x2="650" y2="285" stroke="#b99245" stroke-width="2" stroke-dasharray="5 6"/>
                <circle cx="650" cy="67" r="8" fill="#4f6b3a" stroke="#fff" stroke-width="3"/>
                <circle cx="650" cy="35" r="7" fill="#9a6b3f" stroke="#fff" stroke-width="3"/>
              </g>
            </svg>
          </div>

          <div class="engine-stage-labels">
            <label for="${e}-stage-village" data-stage="village">Village</label>
            <label for="${e}-stage-town" data-stage="town">Town</label>
            <label for="${e}-stage-small-city" data-stage="small-city">Small City</label>
            <label for="${e}-stage-large-city" data-stage="large-city">Large City</label>
            <label for="${e}-stage-megacity" data-stage="megacity">Megacity</label>
          </div>

          <div class="engine-legend">
            <span class="productivity"><i></i>Productivity gains</span>
            <span class="cost"><i></i>Urban costs</span>
          </div>

          <div class="engine-insights">
            <p class="engine-insight stage-village"><strong>Village:</strong> Fewer firms and specialists means fewer opportunities for sharing, matching and learning.</p>
            <p class="engine-insight stage-town"><strong>Town:</strong> More workers and firms create more opportunities to share resources and find better matches.</p>
            <p class="engine-insight stage-small-city"><strong>Small City:</strong> Specialisation and knowledge-sharing become much easier.</p>
            <p class="engine-insight stage-large-city"><strong>Large City:</strong> Productivity benefits can be strong, but congestion and housing pressure become more important.</p>
            <p class="engine-insight stage-megacity"><strong>Megacity:</strong> Scale remains powerful, but urban costs can rise sharply if infrastructure and institutions do not keep up.</p>
          </div>
        </section>
      </div>
    </section>

    <figure class="lesson-graphic">
      <img
        src="https://static.wixstatic.com/media/7638b6_e18b819642c34d3596200a0c1f0eda34~mv2.png"
        alt="Economic engine learning graphic."
      />
    </figure>

    <section class="callout">
      <h3>Lesson takeaway</h3>
      <p>
        A city is concentrated human vocation. Economically, proximity enables sharing, matching and learning.
        Biblically, the city concentrates image-bearers and their vocations. Culturally, its repeated systems
        form habits and desires. Its use of land, time, capital, attention and honour gives us a window into
        its moral budget.
      </p>
    </section>
  `,{completeButtonLabel:"Complete city lesson"})}),jh=e=>({id:`${e}-city-not-neutral-economic-unit`,kind:"customHtml",title:"Step 3: The City Is Not a Neutral Economic Unit",body:Ye(`
      <section class="city-neutral-page">
        <header class="city-neutral-hero">
          <p class="eyebrow">No neutral economic units</p>
          <h2>The City Is Not a Neutral Economic Unit</h2>
          <p class="intro">
            A city is more than a place where people happen to live and trade. It is an economic unit:
            a connected system that organises land, labour, capital, infrastructure, time and human
            relationships. Because these arrangements influence people's daily choices and opportunities,
            the city is not neutral. Its design and institutions encourage some patterns of life more than others.
          </p>
          <p>
            In conventional socio-economic discussions, a city is frequently described as a passive spatial
            background. In this standard view, urban settlements are merely geographic areas where independent
            individuals, businesses, and markets exchange goods and services. Just as a city is more than a neutral
            place where trade happens, an economic system is more than a neutral tool for buying and selling.
            Every economic system teaches people something. Through its rules, rewards and repeated practices,
            it shapes how people think, what they value and how they behave.
          </p>
        </header>

        <section class="lesson-main-point" aria-label="Lesson main point">
          <strong>Lesson main point</strong>
          <p>
            The city shows that no economic entity is neutral. Every zoning map, transit schedule, and retail
            district is a decision about the human soul and what we should learn to love.
          </p>
        </section>

        <div class="city-neutral-visuals" aria-label="City economic unit visuals">
          <figure>
            <img
              src="https://static.wixstatic.com/media/7638b6_765686efba994ddd9c2cb90bb7c674ea~mv2.png"
              alt="Illustration of the city as an economic unit."
            />
          </figure>
          <figure>
            <img
              src="https://static.wixstatic.com/media/7638b6_378e35b9ed7d4aa391c68c68354fe5e8~mv2.png"
              alt="Visual showing urban economic systems shaping daily life."
            />
          </figure>
        </div>

        <section class="augustine-panel">
          <div class="augustine-layout">
            <figure class="augustine-portrait">
              <img
                src="https://static.wixstatic.com/media/7638b6_26eb262c28cc445ea8f138382b07a2b9~mv2.png"
                alt="Saint Augustine."
              />
            </figure>
            <div class="augustine-copy">
              <p class="eyebrow">Augustine's view</p>
              <h3>Two Cities Formed by Two Different Loves</h3>
              <p>
                In The City of God, Augustine of Hippo argues that societies are shaped by what they love most.
                A society is not only defined by its laws, buildings or markets; it is also defined by its deepest
                love. Augustine describes human history as a struggle between two kinds of cities, or two ways of
                organising life, because human beings are not only thinking beings who choose through logic and
                information. We are also desiring beings, shaped by what we love, long for and practise every day.
                Moral character is formed through the ordering of love, which Augustine calls ordinatio amoris:
                learning to love the right things in the right way.
              </p>

              <div class="city-love-grid" aria-label="Augustine two cities flip cards">
                <div class="city-love-shell">
                  <input class="city-love-toggle" type="checkbox" id="${e}-city-of-man-card" />
                  <label class="city-love-card" for="${e}-city-of-man-card">
                    <span class="city-love-inner">
                      <figure class="city-love-face city-love-front">
                        <img
                          src="https://static.wixstatic.com/media/7638b6_b36e305ca27a450fa4a58d4dc09af06e~mv2.png"
                          alt="The City of Man flip card front."
                        />
                      </figure>
                      <span class="city-love-face city-love-back city-love-back-man" data-love-city="man">
                        <strong>The City of Man (Civitas Terrena)</strong>
                        <p>
                          The City of Man (Civitas Terrena) is built on disordered self-love. This is a love of self
                          that becomes so strong that it pushes God and neighbour aside. In this kind of city, people
                          seek power, status, security and success mainly for themselves.
                        </p>
                      </span>
                    </span>
                  </label>
                </div>

                <div class="city-love-shell">
                  <input class="city-love-toggle" type="checkbox" id="${e}-city-of-god-card" />
                  <label class="city-love-card" for="${e}-city-of-god-card">
                    <span class="city-love-inner">
                      <figure class="city-love-face city-love-front">
                        <img
                          src="https://static.wixstatic.com/media/7638b6_a5926de0f5dd4633a4066902b05a1db5~mv2.png"
                          alt="The City of God flip card front."
                        />
                      </figure>
                      <span class="city-love-face city-love-back city-love-back-god" data-love-city="god">
                        <strong>The City of God (Civitas Dei)</strong>
                        <p>
                          The City of God (Civitas Dei) is built on rightly ordered love. This is love for God and
                          neighbour that leads people towards service, justice, community and shared flourishing.
                        </p>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="liturgy-panel">
          <p class="eyebrow">The city as a liturgical centre</p>
          <h3>The City as a Liturgical Centre</h3>
          <p>
            The word liturgy usually refers to repeated practices of worship, but Christian philosopher James K. A.
            Smith uses it more broadly for cultural liturgies: repeated social practices that shape what people
            imagine, love and desire. He argues that people are formed not only by ideas in their minds, but also by
            habits, physical spaces, symbols, routines and rewards that train the heart over time.
          </p>
          <p>
            Shopping malls, sports stadiums, corporate office parks and commercial districts therefore do more than
            provide goods, entertainment or work. Through planned spaces, repeated actions and powerful images, they
            quietly teach people what to want, fear and admire. Applied to the city, this means urban life is an
            immersive teaching environment: its rhythms, routes, work patterns, shops, advertisements and public
            spaces form people's desires and expectations, making the city a kind of everyday liturgy.
          </p>

          <button
            class="city-visual-button"
            type="button"
            data-rich-dialog-open="#${e}-urban-liturgy-popup"
          >
            Open visual representation
          </button>
          <div
            class="city-visual-popup"
            id="${e}-urban-liturgy-popup"
            role="dialog"
            aria-modal="true"
            aria-label="Urban liturgy visual representation"
            data-rich-dialog
            hidden
          >
            <button
              class="city-visual-backdrop"
              type="button"
              data-rich-dialog-close
              aria-label="Close visual representation"
            ></button>
            <section class="city-visual-panel">
              <div class="city-visual-actions" aria-label="Visual representation controls">
                <a
                  class="city-visual-enlarge"
                  href="urban-liturgy.html"
                  target="_blank"
                  rel="noopener"
                  role="button"
                >
                  Enlarge image
                </a>
                <button class="city-visual-close" type="button" data-rich-dialog-close>Close</button>
              </div>
              <iframe
                class="urban-liturgy-frame"
                title="Interactive Urban Liturgy visual"
                src="urban-liturgy.html"
                loading="lazy"
              ></iframe>
            </section>
          </div>
        </section>

        <section class="moral-budget-panel">
          <p class="eyebrow">Urban ethics</p>
          <h3>A City's Moral Budget</h3>
          <p>
            While a standard financial budget tracks the movement of money within a municipal administration,
            an urban system possesses a moral budget that reveals its underlying priorities through the distribution
            of scarce civic resources. The term moral budget helps evaluate the ethical values embedded within urban
            planning and economic management.
          </p>
          <p>
            A city reveals its true values through how it allocates five critical resources: Land, Time, Capital,
            Attention, and Honour.
          </p>
          <div class="moral-budget-grid" aria-label="Five resources in a city's moral budget">
            <section class="budget-resource">
              <strong>Land</strong>
              <p>Who gets access to housing, work, parks, services and safe public space.</p>
            </section>
            <section class="budget-resource">
              <strong>Time</strong>
              <p>Whose days are protected or consumed by commutes, queues and unreliable systems.</p>
            </section>
            <section class="budget-resource">
              <strong>Capital</strong>
              <p>Where investment, infrastructure, support and economic opportunity are directed.</p>
            </section>
            <section class="budget-resource">
              <strong>Attention</strong>
              <p>Which needs, messages, neighbourhoods and stories become visible in public life.</p>
            </section>
            <section class="budget-resource">
              <strong>Honour</strong>
              <p>Which people, lifestyles and contributions are celebrated as worthy of respect.</p>
            </section>
          </div>
          <iframe
            class="moral-budget-embed"
            title="Global Moral Budget Observatory City Audit Quiz"
            sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
            src="moral-budget-audit.html"
          ></iframe>
        </section>

        <section class="lesson-main-takeaway" aria-label="Main takeaway">
          <strong>Main takeaway</strong>
          <p>
            The city is not a neutral economic unit, and neither are we neutral participants in it. Every day,
            through our work, buying, travel, saving, spending, giving and status-seeking, we show what we value.
            Augustine's two cities remind us that our economic lives are shaped by love: either love curved inward
            toward self, power and possession, or love directed toward God, neighbour and the common good. The city
            acts like a liturgical centre because its repeated rhythms train our desires, but our personal economic
            engagement also reveals our own moral budget. So the key question is not only, "What does the city
            prioritise?" but also, "What do I value, how am I being shaped by my economic choices, and what does my
            daily economic life show that I truly love?"
          </p>
        </section>
      </section>
    `,{completeButtonLabel:"Complete moral budget step"})}),Sh=(e,t={})=>({id:`${e}-city-trajectory-timeline`,kind:"customHtml",title:"Step 4: The Trajectory of the City",body:Ye(`
    <style>
      .trajectory-page {
        display: grid;
        gap: clamp(16px, 2.6vw, 24px);
      }

      .trajectory-header h2,
      .trajectory-header p {
        margin: 0;
      }

      .trajectory-header h2 {
        color: var(--forest);
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(1.7rem, 4vw, 2.8rem);
        line-height: 1.08;
      }

      .trajectory-stage {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 0;
        overflow: hidden;
        border: 0;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
      }

      .trajectory-stage > img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        mix-blend-mode: multiply;
      }

      .trajectory-hotspot {
        position: absolute;
        top: 88.2%;
        width: clamp(32px, 4.4vw, 48px);
        aspect-ratio: 1;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 50%;
        padding: 0;
        background: transparent;
        color: transparent;
        font-size: 0;
        cursor: pointer;
        box-shadow: none;
        transform: translate(-50%, -50%);
        transition:
          background 160ms ease,
          transform 160ms ease,
          box-shadow 160ms ease;
      }

      .trajectory-hotspot:hover,
      .trajectory-hotspot:focus-visible {
        background: rgba(185, 146, 69, 0.18);
        box-shadow: 0 0 0 4px rgba(247, 243, 232, 0.72);
        outline: 3px solid rgba(185, 146, 69, 0.72);
        outline-offset: 1px;
        transform: translate(-50%, -50%) scale(1.08);
      }

      .trajectory-point-1 { left: 9.6%; }
      .trajectory-point-2 { left: 24.1%; }
      .trajectory-point-3 { left: 38%; }
      .trajectory-point-4 { left: 51.4%; }
      .trajectory-point-5 { left: 65.3%; }
      .trajectory-point-6 { left: 79.4%; }
      .trajectory-point-7 { left: 93.1%; }

      .trajectory-popup[hidden] {
        display: none;
      }

      .trajectory-popup.is-open {
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: grid;
        place-items: center;
        overflow: auto;
        padding: clamp(12px, 3vw, 30px);
        background: rgba(23, 19, 15, 0.84);
        backdrop-filter: blur(5px);
      }

      .trajectory-popup-backdrop {
        position: absolute;
        inset: 0;
        border: 0;
        background: transparent;
        cursor: pointer;
      }

      .trajectory-popup-panel {
        position: relative;
        z-index: 1;
        width: min(1120px, calc(100vw - 24px));
        max-height: min(92vh, 860px);
        overflow: auto;
        border: 2px solid rgba(185, 146, 69, 0.62);
        border-radius: 8px;
        padding: clamp(14px, 2.4vw, 24px);
        background: #f7f3e8;
        box-shadow: 0 34px 90px rgba(0, 0, 0, 0.52);
      }

      .trajectory-popup-head {
        display: flex;
        gap: 14px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 14px;
      }

      .trajectory-popup-head h3 {
        margin: 0;
        color: var(--forest);
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(1.25rem, 3vw, 2rem);
      }

      .trajectory-close {
        flex: 0 0 auto;
        width: 42px;
        height: 42px;
        display: grid;
        place-items: center;
        border: 1px solid rgba(91, 58, 36, 0.22);
        border-radius: 50%;
        padding: 0;
        background: var(--forest);
        color: var(--paper);
        font: inherit;
        font-size: 1.5rem;
        line-height: 1;
        cursor: pointer;
      }

      .trajectory-close:hover,
      .trajectory-close:focus-visible {
        background: #1d3a2f;
        outline: 3px solid rgba(185, 146, 69, 0.58);
        outline-offset: 2px;
      }

      .trajectory-popup-images {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: clamp(12px, 2vw, 20px);
        align-items: center;
      }

      .trajectory-popup-images.single {
        grid-template-columns: minmax(0, 1fr);
      }

      .trajectory-popup-images figure {
        margin: 0;
        background: transparent;
      }

      .trajectory-popup-images img {
        display: block;
        width: 100%;
        height: auto;
        max-height: 72vh;
        object-fit: contain;
        border-radius: 6px;
      }

      .trajectory-slideshow {
        position: relative;
      }

      .trajectory-slide-toggle {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
      }

      .trajectory-slide-window {
        overflow: hidden;
        border-radius: 6px;
      }

      .trajectory-slide-track {
        display: flex;
        transition: transform 360ms ease;
      }

      .trajectory-slide {
        flex: 0 0 100%;
        margin: 0;
      }

      .trajectory-slide img {
        display: block;
        width: 100%;
        height: auto;
        max-height: 68vh;
        object-fit: contain;
      }

      .trajectory-slide-2:checked ~ .trajectory-slide-window .trajectory-slide-track {
        transform: translateX(-100%);
      }

      .trajectory-slide-controls {
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr) 42px;
        gap: 12px;
        align-items: center;
        margin-top: 14px;
      }

      .trajectory-slide-arrow {
        width: 42px;
        height: 42px;
        display: grid;
        place-items: center;
        border: 1px solid rgba(91, 58, 36, 0.28);
        border-radius: 50%;
        background: var(--forest);
        color: var(--paper);
        font-size: 1.35rem;
        line-height: 1;
        cursor: pointer;
        transition: opacity 160ms ease, background 160ms ease;
      }

      .trajectory-slide-arrow:hover,
      .trajectory-slide-arrow:focus-visible {
        background: #1d3a2f;
        outline: 3px solid rgba(185, 146, 69, 0.58);
        outline-offset: 2px;
      }

      .trajectory-slide-1:checked ~ .trajectory-slide-controls .trajectory-slide-prev,
      .trajectory-slide-2:checked ~ .trajectory-slide-controls .trajectory-slide-next {
        opacity: 0.35;
        pointer-events: none;
      }

      .trajectory-slide-dots {
        display: flex;
        gap: 9px;
        align-items: center;
        justify-content: center;
      }

      .trajectory-slide-dot {
        width: 11px;
        height: 11px;
        border: 2px solid var(--forest);
        border-radius: 50%;
        background: transparent;
        cursor: pointer;
      }

      .trajectory-slide-1:checked ~ .trajectory-slide-controls .trajectory-slide-dot-1,
      .trajectory-slide-2:checked ~ .trajectory-slide-controls .trajectory-slide-dot-2 {
        background: var(--forest);
      }

      @media (max-width: 640px) {
        .trajectory-hotspot {
          width: 32px;
        }

        .trajectory-popup-images {
          grid-template-columns: 1fr;
        }

        .trajectory-popup-panel {
          width: calc(100vw - 16px);
          padding: 10px;
        }
      }
    </style>

    <section class="trajectory-page">
      <header class="trajectory-header">
        <p class="eyebrow">Interactive timeline</p>
        <h2>The Trajectory of the City</h2>
      </header>

      <figure class="trajectory-stage">
        <img
          src="https://static.wixstatic.com/media/7638b6_3c725c9d31f74d438d5c8f5f77b5c2f5~mv2.png"
          alt="The trajectory of the city that excludes God, from the Fall through Cain, Enoch, Lamech, Babel and Babylon to total collapse."
        />
        <button class="trajectory-hotspot trajectory-point-1" type="button" aria-label="Open point 1 image: The Fall" data-rich-dialog-open="#${e}-trajectory-popup-1"></button>
        <button class="trajectory-hotspot trajectory-point-2" type="button" aria-label="Open point 2 images: Cain" data-rich-dialog-open="#${e}-trajectory-popup-2"></button>
        <button class="trajectory-hotspot trajectory-point-3" type="button" aria-label="Open point 3 image: Enoch" data-rich-dialog-open="#${e}-trajectory-popup-3"></button>
        <button class="trajectory-hotspot trajectory-point-4" type="button" aria-label="Open point 4 images: Lamech" data-rich-dialog-open="#${e}-trajectory-popup-4"></button>
        <button class="trajectory-hotspot trajectory-point-5" type="button" aria-label="Open point 5 image: Babel" data-rich-dialog-open="#${e}-trajectory-popup-5"></button>
        <button class="trajectory-hotspot trajectory-point-6" type="button" aria-label="Open point 6 images: Babylon" data-rich-dialog-open="#${e}-trajectory-popup-6"></button>
        <button class="trajectory-hotspot trajectory-point-7" type="button" aria-label="Open point 7 image: Total collapse" data-rich-dialog-open="#${e}-trajectory-popup-7"></button>
      </figure>

      <section class="trajectory-popup" id="${e}-trajectory-popup-1" role="dialog" aria-modal="true" aria-labelledby="${e}-trajectory-title-1" data-rich-dialog hidden>
        <button class="trajectory-popup-backdrop" type="button" aria-label="Close point 1 popup" data-rich-dialog-close></button>
        <div class="trajectory-popup-panel">
          <header class="trajectory-popup-head">
            <h3 id="${e}-trajectory-title-1">Point 1: The Fall</h3>
            <button class="trajectory-close" type="button" aria-label="Close point 1 popup" data-rich-dialog-close>&times;</button>
          </header>
          <div class="trajectory-popup-images single">
            <figure><img src="https://static.wixstatic.com/media/7638b6_9b3d754226284d84a5ef13072ed390bf~mv2.png" alt="Point 1 teaching visual: The Fall." /></figure>
          </div>
        </div>
      </section>

      <section class="trajectory-popup" id="${e}-trajectory-popup-2" role="dialog" aria-modal="true" aria-labelledby="${e}-trajectory-title-2" data-rich-dialog hidden>
        <button class="trajectory-popup-backdrop" type="button" aria-label="Close point 2 popup" data-rich-dialog-close></button>
        <div class="trajectory-popup-panel">
          <header class="trajectory-popup-head">
            <h3 id="${e}-trajectory-title-2">Point 2: Cain</h3>
            <button class="trajectory-close" type="button" aria-label="Close point 2 popup" data-rich-dialog-close>&times;</button>
          </header>
          <div class="trajectory-slideshow" aria-label="Point 2 image slideshow">
            <input class="trajectory-slide-toggle trajectory-slide-1" type="radio" name="${e}-trajectory-slides-2" id="${e}-trajectory-slide-2-1" checked />
            <input class="trajectory-slide-toggle trajectory-slide-2" type="radio" name="${e}-trajectory-slides-2" id="${e}-trajectory-slide-2-2" />
            <div class="trajectory-slide-window">
              <div class="trajectory-slide-track">
                <figure class="trajectory-slide"><img src="https://static.wixstatic.com/media/7638b6_b8c7fe9434324c149d30f6f0808635d8~mv2.png" alt="Point 2 teaching visual about Cain, image 1." /></figure>
                <figure class="trajectory-slide"><img src="https://static.wixstatic.com/media/7638b6_fb077df9d0ef479c9dad04dbaab24801~mv2.png" alt="Point 2 teaching visual about Cain, image 2." /></figure>
              </div>
            </div>
            <div class="trajectory-slide-controls">
              <label class="trajectory-slide-arrow trajectory-slide-prev" for="${e}-trajectory-slide-2-1" aria-label="Show previous Point 2 image">&#8592;</label>
              <div class="trajectory-slide-dots" aria-label="Choose Point 2 image">
                <label class="trajectory-slide-dot trajectory-slide-dot-1" for="${e}-trajectory-slide-2-1" aria-label="Show Point 2 image 1"></label>
                <label class="trajectory-slide-dot trajectory-slide-dot-2" for="${e}-trajectory-slide-2-2" aria-label="Show Point 2 image 2"></label>
              </div>
              <label class="trajectory-slide-arrow trajectory-slide-next" for="${e}-trajectory-slide-2-2" aria-label="Show next Point 2 image">&#8594;</label>
            </div>
          </div>
        </div>
      </section>

      <section class="trajectory-popup" id="${e}-trajectory-popup-3" role="dialog" aria-modal="true" aria-labelledby="${e}-trajectory-title-3" data-rich-dialog hidden>
        <button class="trajectory-popup-backdrop" type="button" aria-label="Close point 3 popup" data-rich-dialog-close></button>
        <div class="trajectory-popup-panel">
          <header class="trajectory-popup-head">
            <h3 id="${e}-trajectory-title-3">Point 3: Enoch</h3>
            <button class="trajectory-close" type="button" aria-label="Close point 3 popup" data-rich-dialog-close>&times;</button>
          </header>
          <div class="trajectory-popup-images single">
            <figure><img src="https://static.wixstatic.com/media/7638b6_c5eced9d51024b30a082fa95aecaa072~mv2.png" alt="Point 3 teaching visual about Enoch." /></figure>
          </div>
        </div>
      </section>

      <section class="trajectory-popup" id="${e}-trajectory-popup-4" role="dialog" aria-modal="true" aria-labelledby="${e}-trajectory-title-4" data-rich-dialog hidden>
        <button class="trajectory-popup-backdrop" type="button" aria-label="Close point 4 popup" data-rich-dialog-close></button>
        <div class="trajectory-popup-panel">
          <header class="trajectory-popup-head">
            <h3 id="${e}-trajectory-title-4">Point 4: Lamech</h3>
            <button class="trajectory-close" type="button" aria-label="Close point 4 popup" data-rich-dialog-close>&times;</button>
          </header>
          <div class="trajectory-slideshow" aria-label="Point 4 image slideshow">
            <input class="trajectory-slide-toggle trajectory-slide-1" type="radio" name="${e}-trajectory-slides-4" id="${e}-trajectory-slide-4-1" checked />
            <input class="trajectory-slide-toggle trajectory-slide-2" type="radio" name="${e}-trajectory-slides-4" id="${e}-trajectory-slide-4-2" />
            <div class="trajectory-slide-window">
              <div class="trajectory-slide-track">
                <figure class="trajectory-slide"><img src="https://static.wixstatic.com/media/7638b6_7138836788404b1e8d0a7845c67d0f13~mv2.png" alt="Point 4 teaching visual about Lamech, image 1." /></figure>
                <figure class="trajectory-slide"><img src="https://static.wixstatic.com/media/7638b6_746226c4458c4ba0a84f471a91f7ab8e~mv2.png" alt="Point 4 teaching visual about Lamech, image 2." /></figure>
              </div>
            </div>
            <div class="trajectory-slide-controls">
              <label class="trajectory-slide-arrow trajectory-slide-prev" for="${e}-trajectory-slide-4-1" aria-label="Show previous Point 4 image">&#8592;</label>
              <div class="trajectory-slide-dots" aria-label="Choose Point 4 image">
                <label class="trajectory-slide-dot trajectory-slide-dot-1" for="${e}-trajectory-slide-4-1" aria-label="Show Point 4 image 1"></label>
                <label class="trajectory-slide-dot trajectory-slide-dot-2" for="${e}-trajectory-slide-4-2" aria-label="Show Point 4 image 2"></label>
              </div>
              <label class="trajectory-slide-arrow trajectory-slide-next" for="${e}-trajectory-slide-4-2" aria-label="Show next Point 4 image">&#8594;</label>
            </div>
          </div>
        </div>
      </section>

      <section class="trajectory-popup" id="${e}-trajectory-popup-5" role="dialog" aria-modal="true" aria-labelledby="${e}-trajectory-title-5" data-rich-dialog hidden>
        <button class="trajectory-popup-backdrop" type="button" aria-label="Close point 5 popup" data-rich-dialog-close></button>
        <div class="trajectory-popup-panel">
          <header class="trajectory-popup-head">
            <h3 id="${e}-trajectory-title-5">Point 5: Babel</h3>
            <button class="trajectory-close" type="button" aria-label="Close point 5 popup" data-rich-dialog-close>&times;</button>
          </header>
          <div class="trajectory-popup-images single">
            <figure><img src="https://static.wixstatic.com/media/7638b6_e8310d3aaeaa4399b3b21b99205ea496~mv2.png" alt="Point 5 teaching visual about Babel." /></figure>
          </div>
        </div>
      </section>

      <section class="trajectory-popup" id="${e}-trajectory-popup-6" role="dialog" aria-modal="true" aria-labelledby="${e}-trajectory-title-6" data-rich-dialog hidden>
        <button class="trajectory-popup-backdrop" type="button" aria-label="Close point 6 popup" data-rich-dialog-close></button>
        <div class="trajectory-popup-panel">
          <header class="trajectory-popup-head">
            <h3 id="${e}-trajectory-title-6">Point 6: Babylon</h3>
            <button class="trajectory-close" type="button" aria-label="Close point 6 popup" data-rich-dialog-close>&times;</button>
          </header>
          <div class="trajectory-slideshow" aria-label="Point 6 image slideshow">
            <input class="trajectory-slide-toggle trajectory-slide-1" type="radio" name="${e}-trajectory-slides-6" id="${e}-trajectory-slide-6-1" checked />
            <input class="trajectory-slide-toggle trajectory-slide-2" type="radio" name="${e}-trajectory-slides-6" id="${e}-trajectory-slide-6-2" />
            <div class="trajectory-slide-window">
              <div class="trajectory-slide-track">
                <figure class="trajectory-slide"><img src="https://static.wixstatic.com/media/7638b6_42d34737fe6a4bdb926e486578aed5f2~mv2.png" alt="Point 6 teaching visual about Babylon, image 1." /></figure>
                <figure class="trajectory-slide"><img src="https://static.wixstatic.com/media/7638b6_17b750fcfbe94417b4b05d76a3be35d9~mv2.png" alt="Point 6 teaching visual about Babylon, image 2." /></figure>
              </div>
            </div>
            <div class="trajectory-slide-controls">
              <label class="trajectory-slide-arrow trajectory-slide-prev" for="${e}-trajectory-slide-6-1" aria-label="Show previous Point 6 image">&#8592;</label>
              <div class="trajectory-slide-dots" aria-label="Choose Point 6 image">
                <label class="trajectory-slide-dot trajectory-slide-dot-1" for="${e}-trajectory-slide-6-1" aria-label="Show Point 6 image 1"></label>
                <label class="trajectory-slide-dot trajectory-slide-dot-2" for="${e}-trajectory-slide-6-2" aria-label="Show Point 6 image 2"></label>
              </div>
              <label class="trajectory-slide-arrow trajectory-slide-next" for="${e}-trajectory-slide-6-2" aria-label="Show next Point 6 image">&#8594;</label>
            </div>
          </div>
        </div>
      </section>

      <section class="trajectory-popup" id="${e}-trajectory-popup-7" role="dialog" aria-modal="true" aria-labelledby="${e}-trajectory-title-7" data-rich-dialog hidden>
        <button class="trajectory-popup-backdrop" type="button" aria-label="Close point 7 popup" data-rich-dialog-close></button>
        <div class="trajectory-popup-panel">
          <header class="trajectory-popup-head">
            <h3 id="${e}-trajectory-title-7">Point 7: Total Collapse</h3>
            <button class="trajectory-close" type="button" aria-label="Close point 7 popup" data-rich-dialog-close>&times;</button>
          </header>
          <div class="trajectory-popup-images single">
            <figure><img src="https://static.wixstatic.com/media/7638b6_f53711fae80b4e62812d52830282d31d~mv2.png" alt="Point 7 teaching visual: total collapse." /></figure>
          </div>
        </div>
      </section>
    </section>
  `,{...t.includeCompleteButton===void 0?{}:{includeCompleteButton:t.includeCompleteButton},completeButtonLabel:t.completeButtonLabel??"Complete trajectory timeline"})}),Xl=[{number:1,label:"The Garden",images:[{url:"https://static.wixstatic.com/media/7638b6_3232598d947547769b19edd2f2963e0e~mv2.png",alt:"The Garden: an economy of gift, abundance, stewardship and divine generosity."},{url:"https://static.wixstatic.com/media/7638b6_29e376cb2414463d8ddd637d76bb56f4~mv2.png",alt:"The Garden economy expressed through abundance as gift, work as stewardship and limits as freedom."}]},{number:2,label:"Jerusalem",images:[{url:"https://static.wixstatic.com/media/7638b6_ffdea86f0e1e40b5b19202f684ad4aa9~mv2.png",alt:"Jerusalem as the earthly shadow centred on worship, justice and covenant."},{url:"https://static.wixstatic.com/media/7638b6_994b99b252df4e17aa830f35dfb03796~mv2.png",alt:"The collapse of the earthly city through greed, exploitation and exile."}]},{number:3,label:"New Jerusalem",images:[{url:"https://static.wixstatic.com/media/7638b6_309bf85168744a9195377b3d4fee4906~mv2.png",alt:"The New Jerusalem where economics and worship are one, scarcity ends and moral clarity returns."},{url:"https://static.wixstatic.com/media/7638b6_a04f8ce1bddc41a797f6298a82d30dfd~mv2.png",alt:"Human vocation and everyday jobs finding their purpose in healing the world."}]}],Ch=(e,t={})=>{const n=Xl.map(i=>`
        <button
          class="kingdom-hotspot kingdom-number-hotspot kingdom-point-${i.number}"
          type="button"
          aria-label="Open point ${i.number}: ${i.label}"
          data-rich-dialog-open="#${e}-kingdom-trajectory-popup-${i.number}"
        ></button>
        <button
          class="kingdom-hotspot kingdom-hand-hotspot kingdom-point-${i.number}"
          type="button"
          aria-label="Open point ${i.number} images: ${i.label}"
          data-rich-dialog-open="#${e}-kingdom-trajectory-popup-${i.number}"
        ></button>`).join(""),r=Xl.map(i=>`
      <section
        class="kingdom-popup"
        id="${e}-kingdom-trajectory-popup-${i.number}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${e}-kingdom-trajectory-title-${i.number}"
        data-rich-dialog
        hidden
      >
        <button class="kingdom-popup-backdrop" type="button" aria-label="Close point ${i.number} popup" data-rich-dialog-close></button>
        <div class="kingdom-popup-panel">
          <header class="kingdom-popup-head">
            <h3 id="${e}-kingdom-trajectory-title-${i.number}">Point ${i.number}: ${i.label}</h3>
            <button class="kingdom-close" type="button" aria-label="Close point ${i.number} popup" data-rich-dialog-close>&times;</button>
          </header>
          <div class="kingdom-flipbook" aria-label="Point ${i.number} two-sided image">
            <input
              class="kingdom-flip-toggle kingdom-flip-front-toggle"
              type="radio"
              name="${e}-kingdom-flip-${i.number}"
              id="${e}-kingdom-flip-${i.number}-front"
              checked
            />
            <input
              class="kingdom-flip-toggle kingdom-flip-back-toggle"
              type="radio"
              name="${e}-kingdom-flip-${i.number}"
              id="${e}-kingdom-flip-${i.number}-back"
            />
            <div class="kingdom-flip-stage">
              <div class="kingdom-flip-card">
                <figure class="kingdom-flip-face kingdom-flip-front">
                  <img src="${i.images[0].url}" alt="${i.images[0].alt}" />
                </figure>
                <figure class="kingdom-flip-face kingdom-flip-back">
                  <img src="${i.images[1].url}" alt="${i.images[1].alt}" />
                </figure>
              </div>
            </div>
            <div class="kingdom-flip-controls">
              <label class="kingdom-flip-arrow kingdom-flip-prev" for="${e}-kingdom-flip-${i.number}-front" aria-label="Show previous ${i.label} image">&#8592;</label>
              <div class="kingdom-flip-dots" aria-label="Choose ${i.label} image">
                <label class="kingdom-flip-dot kingdom-flip-dot-front" for="${e}-kingdom-flip-${i.number}-front" aria-label="Show ${i.label} image 1"></label>
                <label class="kingdom-flip-dot kingdom-flip-dot-back" for="${e}-kingdom-flip-${i.number}-back" aria-label="Show ${i.label} image 2"></label>
              </div>
              <label class="kingdom-flip-arrow kingdom-flip-next" for="${e}-kingdom-flip-${i.number}-back" aria-label="Flip to next ${i.label} image">&#8594;</label>
            </div>
          </div>
        </div>
      </section>`).join("");return{id:`${e}-kingdom-trajectory-timeline`,kind:"customHtml",title:"Step 5: The Trajectory of the City with God at the Centre",body:Ye(`
      <style>
        .kingdom-trajectory-page {
          display: grid;
          gap: clamp(16px, 2.6vw, 24px);
        }

        .kingdom-trajectory-header h2,
        .kingdom-trajectory-header p {
          margin: 0;
        }

        .kingdom-trajectory-header h2 {
          color: var(--forest);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.7rem, 4vw, 2.8rem);
          line-height: 1.08;
        }

        .kingdom-trajectory-stage {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          margin: 0;
          overflow: hidden;
          border: 0;
          background: transparent;
          box-shadow: none;
        }

        .kingdom-trajectory-stage > img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        .kingdom-hotspot {
          position: absolute;
          width: clamp(32px, 4.4vw, 48px);
          aspect-ratio: 1;
          border: 0;
          border-radius: 50%;
          padding: 0;
          background: transparent;
          color: transparent;
          font-size: 0;
          cursor: pointer;
          box-shadow: none;
          transform: translate(-50%, -50%);
          transition: background 160ms ease, box-shadow 160ms ease, transform 160ms ease;
        }

        .kingdom-number-hotspot {
          top: 73.1%;
        }

        .kingdom-hand-hotspot {
          top: 94.3%;
        }

        .kingdom-hotspot:hover,
        .kingdom-hotspot:focus-visible {
          background: rgba(185, 146, 69, 0.18);
          box-shadow: 0 0 0 4px rgba(247, 243, 232, 0.76);
          outline: 3px solid rgba(185, 146, 69, 0.76);
          outline-offset: 1px;
          transform: translate(-50%, -50%) scale(1.08);
        }

        .kingdom-point-1 { left: 17%; }
        .kingdom-point-2 { left: 50.9%; }
        .kingdom-point-3 { left: 84.7%; }

        .kingdom-popup[hidden] {
          display: none;
        }

        .kingdom-popup.is-open {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: grid;
          place-items: center;
          overflow: auto;
          padding: clamp(12px, 3vw, 30px);
          background: rgba(23, 19, 15, 0.84);
          backdrop-filter: blur(5px);
        }

        .kingdom-popup-backdrop {
          position: absolute;
          inset: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .kingdom-popup-panel {
          position: relative;
          z-index: 1;
          width: min(1120px, calc(100vw - 24px));
          max-height: min(92vh, 860px);
          overflow: auto;
          border: 2px solid rgba(185, 146, 69, 0.62);
          border-radius: 8px;
          padding: clamp(14px, 2.4vw, 24px);
          background: #f7f3e8;
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.52);
        }

        .kingdom-popup-head {
          display: flex;
          gap: 14px;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .kingdom-popup-head h3 {
          margin: 0;
          color: var(--forest);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.25rem, 3vw, 2rem);
        }

        .kingdom-close {
          flex: 0 0 auto;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(91, 58, 36, 0.22);
          border-radius: 50%;
          padding: 0;
          background: var(--forest);
          color: var(--paper);
          font: inherit;
          font-size: 1.5rem;
          line-height: 1;
          cursor: pointer;
        }

        .kingdom-close:hover,
        .kingdom-close:focus-visible,
        .kingdom-flip-arrow:hover,
        .kingdom-flip-arrow:focus-visible {
          background: #1d3a2f;
          outline: 3px solid rgba(185, 146, 69, 0.58);
          outline-offset: 2px;
        }

        .kingdom-flipbook {
          position: relative;
        }

        .kingdom-flip-toggle {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
        }

        .kingdom-flip-stage {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          perspective: 1600px;
        }

        .kingdom-flip-card {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          transition: transform 560ms cubic-bezier(0.22, 0.72, 0.22, 1);
        }

        .kingdom-flip-face {
          position: absolute;
          inset: 0;
          margin: 0;
          overflow: hidden;
          border-radius: 6px;
          background: #f7f3e8;
          backface-visibility: hidden;
        }

        .kingdom-flip-back {
          transform: rotateY(180deg);
        }

        .kingdom-flip-face img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .kingdom-flip-back-toggle:checked ~ .kingdom-flip-stage .kingdom-flip-card {
          transform: rotateY(180deg);
        }

        .kingdom-flip-controls {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr) 42px;
          gap: 12px;
          align-items: center;
          margin-top: 14px;
        }

        .kingdom-flip-arrow {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(91, 58, 36, 0.28);
          border-radius: 50%;
          background: var(--forest);
          color: var(--paper);
          font-size: 1.35rem;
          line-height: 1;
          cursor: pointer;
          transition: opacity 160ms ease, background 160ms ease;
        }

        .kingdom-flip-front-toggle:checked ~ .kingdom-flip-controls .kingdom-flip-prev,
        .kingdom-flip-back-toggle:checked ~ .kingdom-flip-controls .kingdom-flip-next {
          opacity: 0.35;
          pointer-events: none;
        }

        .kingdom-flip-dots {
          display: flex;
          gap: 9px;
          align-items: center;
          justify-content: center;
        }

        .kingdom-flip-dot {
          width: 11px;
          height: 11px;
          border: 2px solid var(--forest);
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
        }

        .kingdom-flip-front-toggle:checked ~ .kingdom-flip-controls .kingdom-flip-dot-front,
        .kingdom-flip-back-toggle:checked ~ .kingdom-flip-controls .kingdom-flip-dot-back {
          background: var(--forest);
        }

        @media (max-width: 640px) {
          .kingdom-hotspot {
            width: 32px;
          }

          .kingdom-popup-panel {
            width: calc(100vw - 16px);
            padding: 10px;
          }
        }
      </style>

      <section class="kingdom-trajectory-page">
        <header class="kingdom-trajectory-header">
          <p class="eyebrow">Interactive timeline</p>
          <h2>The Trajectory of the City with God at the Centre</h2>
        </header>

        <figure class="kingdom-trajectory-stage">
          <img
            src="https://static.wixstatic.com/media/7638b6_bece28cf41be4c1089a1ea1faef3bdf0~mv2.png"
            alt="The trajectory of the city with God at the centre, from the Garden through Jerusalem to the New Jerusalem."
          />
          ${n}
        </figure>

        ${r}
      </section>
    `,{...t.includeCompleteButton===void 0?{}:{includeCompleteButton:t.includeCompleteButton},completeButtonLabel:t.completeButtonLabel??"Complete kingdom trajectory timeline"})}},Nh=e=>{const t=Sh(e,{includeCompleteButton:!1}),n=Ch(e,{completeButtonLabel:"Complete both trajectory timelines"}),r=`${e}-trajectory-view-without-god`,i=`${e}-trajectory-view-with-god`;return{id:`${e}-combined-city-trajectories`,kind:"customHtml",title:"Step 4: The Two Trajectories of the City",body:`
      <style>
        .combined-trajectories {
          display: grid;
          gap: 14px;
        }

        .combined-trajectory-toggle {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          white-space: nowrap;
        }

        .combined-trajectory-tabs {
          position: sticky;
          top: 0;
          z-index: 70;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
          margin-top: 52px;
          padding: 8px;
          border: 1px solid #d4c39f;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 6px 18px rgba(45, 57, 42, 0.12);
        }

        .combined-trajectory-tab {
          display: flex;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          border-radius: 6px;
          padding: 9px 12px;
          color: #294f3c;
          cursor: pointer;
          font-family: Arial, sans-serif;
          font-size: 0.92rem;
          font-weight: 800;
          text-align: center;
        }

        #${r}:checked ~ .combined-trajectory-tabs label[for="${r}"],
        #${i}:checked ~ .combined-trajectory-tabs label[for="${i}"] {
          border-color: #294f3c;
          background: #294f3c;
          color: #ffffff;
        }

        .combined-trajectory-panel {
          display: none;
        }

        #${r}:checked ~ .combined-trajectory-panels .combined-trajectory-without-god,
        #${i}:checked ~ .combined-trajectory-panels .combined-trajectory-with-god {
          display: block;
        }

        .combined-trajectory-panel > .rich-step {
          padding-top: 10px;
        }

        @media (max-width: 560px) {
          .combined-trajectory-tabs {
            grid-template-columns: 1fr;
          }

          .combined-trajectory-tab {
            min-height: 42px;
          }
        }
      </style>
      <section class="combined-trajectories" data-rich-lesson-step>
        <input class="combined-trajectory-toggle" type="radio" name="${e}-trajectory-view" id="${r}" checked />
        <input class="combined-trajectory-toggle" type="radio" name="${e}-trajectory-view" id="${i}" />
        <nav class="combined-trajectory-tabs" aria-label="Choose a city trajectory">
          <label class="combined-trajectory-tab" for="${r}">City without God</label>
          <label class="combined-trajectory-tab" for="${i}">City with God</label>
        </nav>
        <div class="combined-trajectory-panels">
          <section class="combined-trajectory-panel combined-trajectory-without-god">
            ${t.body??""}
          </section>
          <section class="combined-trajectory-panel combined-trajectory-with-god">
            ${n.body??""}
          </section>
        </div>
      </section>
    `}},Ih=e=>({id:`${e}-living-between-two-cities-discussion`,kind:"customHtml",title:"Step 5: Living Between Two Cities Discussion",body:Ye(`
    <style>
      .two-cities-discussion {
        display: grid;
        gap: clamp(18px, 3vw, 28px);
      }

      .two-cities-discussion header h2,
      .two-cities-discussion header p {
        margin: 0;
      }

      .two-cities-discussion header {
        display: grid;
        gap: 10px;
      }

      .two-cities-discussion .intro {
        margin: 0;
      }

      .two-cities-questions {
        display: grid;
        gap: 0;
        margin: 0;
        padding: 0;
        list-style: none;
        border-top: 1px solid rgba(91, 58, 36, 0.2);
      }

      .two-cities-questions li {
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr);
        gap: 14px;
        align-items: start;
        padding: 18px 0;
        border-bottom: 1px solid rgba(91, 58, 36, 0.2);
      }

      .two-cities-question-number {
        width: 38px;
        height: 38px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: var(--forest);
        color: var(--paper);
        font-weight: 800;
        line-height: 1;
      }

      .two-cities-questions strong {
        display: block;
        margin-bottom: 5px;
        color: var(--forest);
        font-size: 1.04rem;
      }

      .two-cities-questions p {
        margin: 0;
      }

      .two-cities-practice {
        border-left: 5px solid var(--gold);
        padding: 14px 0 14px 18px;
      }

      .two-cities-practice strong {
        display: block;
        margin-bottom: 5px;
        color: var(--forest);
      }

      .two-cities-practice p {
        margin: 0;
      }

      @media (max-width: 520px) {
        .two-cities-questions li {
          grid-template-columns: 34px minmax(0, 1fr);
          gap: 10px;
        }

        .two-cities-question-number {
          width: 32px;
          height: 32px;
        }
      }
    </style>

    <section class="two-cities-discussion">
      <header>
        <p class="eyebrow">Two cities reflection</p>
        <h2>How Do We Live Between the Reality of Two Cities?</h2>
        <p class="intro">
          We live in the tension between the City of Man, shaped by self-love, scarcity, status and control, and the
          City of God, shaped by love of God and neighbour, gift, justice, stewardship and healing. Reflect on how
          both trajectories appear in ordinary economic life and how faithful presence can point toward the New Jerusalem.
        </p>
      </header>

      <ol class="two-cities-questions" aria-label="Two cities discussion questions">
        <li>
          <span class="two-cities-question-number" aria-hidden="true">1</span>
          <div>
            <strong>Recognise the City of Man</strong>
            <p>Where do you see scarcity, fear, status, domination or exploitation shaping work, business, consumption or city life?</p>
          </div>
        </li>
        <li>
          <span class="two-cities-question-number" aria-hidden="true">2</span>
          <div>
            <strong>Notice signs of the City of God</strong>
            <p>Where do you already see generosity, stewardship, justice, worship, healing or shared flourishing breaking into economic life?</p>
          </div>
        </li>
        <li>
          <span class="two-cities-question-number" aria-hidden="true">3</span>
          <div>
            <strong>Live faithfully between the two cities</strong>
            <p>How can we resist the City of Man without withdrawing from our workplaces, markets and communities while we await the New Jerusalem?</p>
          </div>
        </li>
      </ol>

      <section class="two-cities-practice" aria-label="Practical response">
        <strong>Practical response</strong>
        <p>End your forum post with one concrete economic choice you will practise this week as a sign of faithful presence.</p>
      </section>
    </section>
  `,{includeCompleteButton:!1})}),Ae=Cd.flatMap((e,t)=>e.sessions.map((n,r)=>{const i=t+1,s=r+1,a=`level-${i}-session-${s}-${vh(n)}`,l=n==="Monday Morning",u=i===1?{1:{imageUrl:"https://static.wixstatic.com/media/7638b6_ebb07e58d7b64e3d8a99c272402c6dc9~mv2.png",imageAlt:"Papercraft Faithonomics choices scene for the opening session."},2:{imageUrl:"https://static.wixstatic.com/media/7638b6_0b086c8a75d9429c956c72a796be1f79~mv2.png",imageAlt:"Split papercraft road showing a grey decline path and green-gold renewal path through an open door."},3:{imageUrl:"https://static.wixstatic.com/media/7638b6_b3c35b4d4ed84d3aa0e50cd23c543fc3~mv2.png",imageAlt:"Faithonomics Session 3 illustrated header."},4:{imageUrl:"https://static.wixstatic.com/media/7638b6_d23d57dc349c4025aadcd93121e2db05~mv2.png",imageAlt:"Faithonomics Session 4 illustrated header."}}[s]:void 0,h=[{id:`${a}-session-teaching`,kind:"text",title:"Step 1: Core Teaching",body:`${e.title} frames ${n} as part of faithful economic discipleship. Learners identify the dominant assumption, compare it with God's economy, and name the decision that needs alignment.`},{id:`${a}-session-scripture`,kind:"scripture",title:"Step 2: Scripture and Principle",body:"Read the assigned passage, identify the economic principle, and state how it challenges scarcity, ownership, status, work, generosity, or integrity."},{id:`${a}-session-application`,kind:"text",title:"Step 3: Business Application",body:"Apply the principle to a business case: stakeholders, value creation, pricing, wages, stewardship, customer care, supplier relationships, and long-term trust."},{id:`${a}-session-reflection`,kind:"customHtml",title:"Step 4: Reflection Checkpoint",body:`<main><h2>${n}</h2><p>Choose one action you will practise before the next session.</p><button data-classroom-complete data-score="5" data-max-score="5">Mark reflection complete</button></main>`}];if(i===1&&s===1){h[0]={id:`${a}-session-teaching-video`,kind:"video",title:"Step 1: Choices",body:"Watch the teaching video. At 3:26 it pauses for a checkpoint quiz, then unlocks the next step only after the quiz is completed and the video reaches the end.",url:"https://youtu.be/_0sm9yWHgG4",videoCheckpoint:wh},h.splice(1,2,...xh(a).slice(0,4));const y=h.findIndex(v=>v.id===`${a}-session-reflection`);y!==-1&&h.splice(y,1)}if(i===1&&s===2){h[0]={id:`${a}-tale-of-two-cities-video`,kind:"video",title:"Step 1: Tale of Two Cities",body:"Watch the teaching video. At 9:41 it pauses for a checkpoint quiz. Read the feedback, then continue the video to unlock the next step.",url:"https://youtu.be/th2TF7u2TxQ",videoCheckpoint:bh},h[1]=kh(a),h.splice(2,0,jh(a));const y=h.findIndex(v=>v.id===`${a}-session-application`);y!==-1&&(h[y]=Nh(a)),h.splice(4,0,Ih(a))}i===1&&s===3&&h.splice(3,0,{id:`${a}-teaching-video`,kind:"video",title:"Step 4: Teaching Video",body:"Watch the teaching video before attempting the strategic alignment checkpoint.",url:"wix-media://video/faithonomics-strategic-alignment.mp4"});const f=h.find(y=>y.id===`${a}-session-reflection`);return f&&(f.title=`Step ${h.length}: Reflection Checkpoint`),{id:a,courseId:"course-faithonomics-core",moduleId:`level-${i}`,title:`Session ${s}: ${n}`,summary:l?"Translate the level into a practical Monday morning decision, conversation, metric, and action.":a==="level-1-session-1-the-daily-grind"?'To explore the core Faithonomics principle of "The Daily Grind": economics is the study of everyday choices, and those choices must be shaped by our faith, biblical wisdom, and Christ-like moral convictions.':`Develop the core Faithonomics principle of "${n}" and connect it to everyday economic decisions.`,sequence:t*4+r+1,required:!0,estimatedMinutes:a==="level-1-session-1-the-daily-grind"?145:l?35:50,...u?{imageUrl:u.imageUrl,imageAlt:u.imageAlt}:{},content:h}})),Wo=[{id:"activity-four-pillars-discussion",lessonId:"level-1-session-1-the-daily-grind",contentStepId:"level-1-session-1-the-daily-grind-practical-economic-elements",kind:"discussion",title:"Four pillars discussion forum",instructions:"Choose one pillar: property, relationships, work, or consumption. Post one everyday example that shows how this pillar influences choices. Then reply to two course participants' posts with a thoughtful question, connection, or practical suggestion.",required:!0,maxScore:5,completionMode:"postAndReply",replyRequirement:2},{id:"activity-living-between-two-cities-discussion",lessonId:"level-1-session-2-competing-paradigms",contentStepId:"level-1-session-2-competing-paradigms-living-between-two-cities-discussion",kind:"discussion",title:"Living Between Two Cities discussion forum",instructions:"Drawing on the two city trajectories, write one post that identifies a City of Man pattern in everyday economic life, recognises a sign of the City of God, and reflects on how we live faithfully between these two realities while awaiting the New Jerusalem. End with one concrete economic practice for this week. Then reply thoughtfully to two course participants.",required:!0,maxScore:5,completionMode:"postAndReply",replyRequirement:2},{id:"activity-strategic-video",lessonId:"level-1-session-3-strategic-alignment",kind:"interactiveVideo",title:"Strategic alignment video checkpoint",instructions:"Watch the teaching video and answer each checkpoint question before this session can be completed.",required:!0,maxScore:5,videoUrl:"wix-media://video/faithonomics-strategic-alignment.mp4",completionMode:"videoQuestions",minimumScore:5,videoQuestions:[{id:"video-question-metric",timeSeconds:68,prompt:"Which planning habit best proves alignment has moved beyond intention?",choices:["A Monday-ready metric","A larger slogan","A hidden budget line"],correctAnswer:"A Monday-ready metric"},{id:"video-question-stakeholders",timeSeconds:142,prompt:"Who should be considered when testing whether a decision is aligned?",choices:["Only the owner","Customers, workers, suppliers and community","Only current buyers"],correctAnswer:"Customers, workers, suppliers and community"}]},{id:"activity-alignment-timeline",lessonId:"level-1-session-3-strategic-alignment",kind:"timeline",title:"Alignment timeline",instructions:"Place the alignment practices in the order a team should use them.",required:!0,maxScore:5,minimumScore:5},{id:"activity-monday-discussion",lessonId:"level-1-session-4-monday-morning",kind:"discussion",title:"Monday morning group practice",instructions:"Post your Monday action and reply to one learner with a constructive question or encouragement.",required:!0,maxScore:5,completionMode:"postAndReply"},{id:"activity-monday-short-answer",lessonId:"level-1-session-4-monday-morning",kind:"shortAnswer",title:"Monday action short answer",instructions:"Write the concrete action you will take first, who it affects, and how you will know it is faithful.",required:!0,maxScore:5,modelAnswer:"A strong answer names one concrete first action, identifies affected people, and describes a measurable sign of faithful economic alignment."}],Nd=[{id:"question-access",activityId:"activity-economic-alignment-quiz",prompt:"What is the safest way to grant access to a paid Faithonomics level?",kind:"multipleChoice",points:5},{id:"question-alignment-timeline",activityId:"activity-alignment-timeline",prompt:"Arrange the practices from diagnosis to Monday action.",kind:"timeline",points:5,correctAnswer:["assumption","scripture","stakeholders","metric"]},{id:"question-monday-short-answer",activityId:"activity-monday-short-answer",prompt:"What is the first faithful economic action you will take on Monday morning?",kind:"shortAnswer",points:5}],Id=[{id:"choice-browser-success",questionId:"question-access",label:"Trust the browser success page",value:"browser",isCorrect:!1},{id:"choice-backend-verify",questionId:"question-access",label:"Verify the completed Wix order in backend code",value:"backend",isCorrect:!0},{id:"choice-timeline-scripture",questionId:"question-alignment-timeline",label:"Compare with Scripture",value:"scripture",isCorrect:!0,sequence:2},{id:"choice-timeline-metric",questionId:"question-alignment-timeline",label:"Set a Monday-ready metric",value:"metric",isCorrect:!0,sequence:4},{id:"choice-timeline-assumption",questionId:"question-alignment-timeline",label:"Name the inherited assumption",value:"assumption",isCorrect:!0,sequence:1},{id:"choice-timeline-stakeholders",questionId:"question-alignment-timeline",label:"Test impact on stakeholders",value:"stakeholders",isCorrect:!0,sequence:3}],qn=[{id:"enrol-faithonomics-amina",courseId:"course-faithonomics-core",memberId:ye.learner.memberId,contactId:ye.learner.contactId,source:"admin",status:"active",enrolledAt:"2026-06-01T08:00:00.000Z"}],mt=[],Td=[],Oa=[],Ed=[{id:"post-kingdom-first-001",activityId:"activity-kingdom-first-discussion",memberId:"member-learner-002",authorName:"Thabo Mokoena",body:"Matthew 6 challenges how I think about overtime. I often say yes because I fear falling behind, even when it damages family life and rest. Seeking the kingdom first would mean planning honestly, working faithfully, but not treating income as my saviour.",createdAt:"2026-06-22T07:45:00.000Z"},{id:"post-kingdom-first-002",activityId:"activity-kingdom-first-discussion",memberId:"member-learner-003",authorName:"Lerato Dlamini",body:"For me this affects voting and business policy. I usually ask which option protects my own costs first. This passage asks me to consider righteousness too: who is protected, who is ignored, and whether the policy helps people live with dignity.",createdAt:"2026-06-22T08:05:00.000Z"},{id:"post-four-pillars-001",activityId:"activity-four-pillars-discussion",memberId:"member-learner-002",authorName:"Thabo Mokoena",body:"I chose property. For me, property is not only a house or money. It is also my phone, my time, and the tools I use for work. This pillar challenges me to ask whether I use what I have only for myself, or whether I can steward it in a way that helps others.",createdAt:"2026-06-22T08:10:00.000Z"},{id:"post-four-pillars-002",activityId:"activity-four-pillars-discussion",memberId:"member-learner-003",authorName:"Lerato Dlamini",body:"Relationships stood out to me. Buying, selling, borrowing, and working are never only private choices. They can build trust or damage trust. I think a business can lose money in the long run if it treats relationships as less important than quick profit.",createdAt:"2026-06-22T08:18:00.000Z"},{id:"post-four-pillars-003",activityId:"activity-four-pillars-discussion",memberId:"member-learner-004",authorName:"Johan van der Merwe",body:"I chose consumption. Every purchase trains my habits. Sometimes I buy because I need something, but sometimes I buy because I feel pressure to look successful. This pillar helps me think about whether my choices serve a good purpose.",createdAt:"2026-06-22T08:26:00.000Z"},{id:"post-two-cities-001",activityId:"activity-living-between-two-cities-discussion",memberId:"member-learner-002",authorName:"Thabo Mokoena",body:"I see the City of Man in workplace cultures where status and constant availability become measures of human worth. I also see the City of God when colleagues share knowledge and protect one another from burnout. Living between the two means staying present while refusing to treat productivity as identity. This week I will protect one honest rest boundary and help a colleague finish a difficult task.",createdAt:"2026-06-22T08:34:00.000Z"},{id:"post-two-cities-002",activityId:"activity-living-between-two-cities-discussion",memberId:"member-learner-003",authorName:"Lerato Dlamini",body:"Our city often reflects scarcity by giving safe transport and good services mainly to people who can pay more. Yet community food gardens and shared childcare show another economy based on gift and neighbour-love. Faithful presence means working for better systems without pretending we can build the New Jerusalem ourselves. I will support one local initiative that restores dignity rather than only offering temporary relief.",createdAt:"2026-06-22T08:38:00.000Z"},{id:"post-two-cities-003",activityId:"activity-living-between-two-cities-discussion",memberId:"member-learner-004",authorName:"Johan van der Merwe",body:"The City of Man appears when a business treats customers, workers and suppliers only as costs or revenue. Signs of the City of God appear when profit supports excellent work, fair relationships and service. We live between the cities by reforming ordinary institutions instead of escaping them or idolising them. This week I will review one supplier decision for fairness as well as price.",createdAt:"2026-06-22T08:43:00.000Z"},{id:"post-monday-practice-001",activityId:"activity-monday-discussion",memberId:"member-learner-002",authorName:"Thabo Mokoena",body:"My Monday action is to review our supplier terms through the lens of fairness, not only speed.",createdAt:"2026-06-22T08:15:00.000Z"}],Pd=[{id:"reply-kingdom-first-001",postId:"post-kingdom-first-001",memberId:ye.lecturer.memberId,authorName:ye.lecturer.displayName,body:"Strong connection between anxiety and work. What boundary could show trust in God without becoming irresponsible toward your employer or family?",createdAt:"2026-06-22T08:30:00.000Z"},{id:"reply-kingdom-first-002",postId:"post-kingdom-first-002",memberId:"member-learner-004",authorName:"Johan van der Merwe",body:"Your point about voting helps me. Could you add one practical question you would ask before supporting a policy?",createdAt:"2026-06-22T08:42:00.000Z"},{id:"reply-monday-practice-001",postId:"post-monday-practice-001",memberId:ye.lecturer.memberId,authorName:ye.lecturer.displayName,body:"Good start. Add one measurable sign that the supplier relationship has become more just.",createdAt:"2026-06-22T09:00:00.000Z"}],we=({size:e=20,children:t,...n})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...n,children:t}),Th=e=>o.jsxs(we,{...e,children:[o.jsx("circle",{cx:"12",cy:"8",r:"5"}),o.jsx("path",{d:"m8.5 12.5-2 7 5.5-3 5.5 3-2-7"})]}),Eh=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M4 5.5c2.8 0 5 .8 8 2.5v11c-3-1.7-5.2-2.5-8-2.5z"}),o.jsx("path",{d:"M20 5.5c-2.8 0-5 .8-8 2.5v11c3-1.7 5.2-2.5 8-2.5z"})]}),cn=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M9 4h6l1 2h3v15H5V6h3z"}),o.jsx("path",{d:"m9 13 2 2 4-5"})]}),Ph=e=>o.jsx(we,{...e,children:o.jsx("path",{d:"m15 18-6-6 6-6"})}),Ah=e=>o.jsx(we,{...e,children:o.jsx("path",{d:"m9 18 6-6-6-6"})}),Bo=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M12 4v11"}),o.jsx("path",{d:"m8 11 4 4 4-4"}),o.jsx("path",{d:"M5 20h14"})]}),Zl=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M14 4h6v6"}),o.jsx("path",{d:"m10 14 10-10"}),o.jsx("path",{d:"M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"})]}),Qi=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M6 3h8l4 4v14H6z"}),o.jsx("path",{d:"M14 3v5h5"}),o.jsx("path",{d:"M9 13h6M9 17h6"})]}),Lh=e=>o.jsxs(we,{...e,children:[o.jsx("rect",{x:"4",y:"4",width:"7",height:"7",rx:"1"}),o.jsx("rect",{x:"13",y:"4",width:"7",height:"4",rx:"1"}),o.jsx("rect",{x:"13",y:"10",width:"7",height:"10",rx:"1"}),o.jsx("rect",{x:"4",y:"13",width:"7",height:"7",rx:"1"})]}),ms=e=>o.jsxs(we,{...e,children:[o.jsx("rect",{x:"5",y:"10",width:"14",height:"10",rx:"2"}),o.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]}),_h=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M8 3H3v5"}),o.jsx("path",{d:"M3 3l6 6"}),o.jsx("path",{d:"M16 3h5v5"}),o.jsx("path",{d:"m21 3-6 6"}),o.jsx("path",{d:"M8 21H3v-5"}),o.jsx("path",{d:"m3 21 6-6"}),o.jsx("path",{d:"M16 21h5v-5"}),o.jsx("path",{d:"m21 21-6-6"})]}),Ad=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M10 17H5V7h5"}),o.jsx("path",{d:"M14 8l4 4-4 4"}),o.jsx("path",{d:"M18 12H9"})]}),$h=e=>o.jsx(we,{...e,children:o.jsx("path",{d:"M4 7h16M4 12h16M4 17h16"})}),dt=e=>o.jsxs(we,{...e,children:[o.jsx("circle",{cx:"12",cy:"12",r:"9"}),o.jsx("path",{d:"m10 8 6 4-6 4z"})]}),Ld=e=>o.jsxs(we,{...e,children:[o.jsx("circle",{cx:"12",cy:"12",r:"9"}),o.jsx("path",{d:"M10 9v6M14 9v6"})]}),zh=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"}),o.jsx("path",{d:"m8.5 12 2.2 2.2 4.8-5"})]}),_d=e=>o.jsxs(we,{...e,children:[o.jsx("circle",{cx:"9",cy:"8",r:"3"}),o.jsx("path",{d:"M3.5 20c.7-3.2 2.7-5 5.5-5s4.8 1.8 5.5 5"}),o.jsx("path",{d:"M15 11a3 3 0 1 0 0-6"}),o.jsx("path",{d:"M16 15c2.4.3 4 2 4.5 5"})]}),qo=e=>o.jsx(we,{...e,children:o.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),Rh="/Faithonomics/faithonomics-logo.png",ci=({label:e,children:t,onClick:n,active:r=!1})=>o.jsx("button",{className:r?"icon-button active":"icon-button",onClick:n,title:e,"aria-label":e,children:t}),Mh=({identity:e,onChange:t})=>o.jsxs("label",{className:"role-switcher",children:[o.jsx("span",{children:"Role"}),o.jsxs("select",{value:e.memberId,onChange:n=>{const r=Object.values(ye).find(i=>i.memberId===n.target.value);r&&t(r)},children:[o.jsx("option",{value:ye.learner.memberId,children:"Learner"}),o.jsx("option",{value:ye.lecturer.memberId,children:"Lecturer"}),o.jsx("option",{value:ye.administrator.memberId,children:"Administrator"})]})]}),Dh=({identity:e,view:t,setView:n,onIdentityChange:r,activeLevelTitle:i,onLogout:s})=>o.jsxs("header",{className:"topbar",children:[o.jsx("div",{className:"brand-mark","aria-hidden":"true",children:o.jsx("img",{src:Rh,alt:""})}),o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Faithonomics"}),o.jsx("h1",{children:"Learning Portal"})]}),o.jsxs("nav",{className:"nav-actions","aria-label":"Portal views",children:[o.jsx(ci,{label:"Learner dashboard",active:t==="learner",onClick:()=>n("learner"),children:o.jsx(Lh,{size:20})}),o.jsx(ci,{label:"Lecturer dashboard",active:t==="lecturer",onClick:()=>n("lecturer"),children:o.jsx(cn,{size:20})}),o.jsx(ci,{label:"Reports",active:t==="reports",onClick:()=>n("reports"),children:o.jsx(Qi,{size:20})}),o.jsx(ci,{label:"Administrator",active:t==="admin",onClick:()=>n("admin"),children:o.jsx(zh,{size:20})})]}),o.jsxs("div",{className:"identity-cluster",children:[i?o.jsx("span",{className:"level-badge",children:i}):null,o.jsx(Mh,{identity:e,onChange:r}),o.jsxs("button",{className:"login-link",type:"button",onClick:s,children:[o.jsx(Ad,{size:17}),"Change level"]})]})]}),Qn=e=>[...e].sort((t,n)=>t.sequence-n.sequence),Ua=(e,t,n)=>{const r=e.filter(a=>a.required);if(r.length===0)return 100;const i=new Set(t.filter(a=>a.enrolmentId===n&&a.status==="completed").map(a=>a.lessonId)),s=r.filter(a=>i.has(a.id)).length;return Math.round(s/r.length*100)},Wa=(e,t,n)=>{const r=new Set(t.filter(s=>s.enrolmentId===n.id&&s.status==="completed").map(s=>s.lessonId)),i=new Map;for(const s of Qn(e)){const a=i.get(s.moduleId)??[];a.push(s),i.set(s.moduleId,a)}return Array.from(i.values()).flatMap(s=>{let a=null;return s.map(l=>{const c=a===null?{lessonId:l.id,locked:!1}:{lessonId:l.id,locked:!0,reason:`Complete "${a.title}" first.`};return l.required&&!r.has(l.id)&&(a=l),c})})},Fh=(e,t,n)=>{const r=new Map(Wa(e,t,n).map(s=>[s.lessonId,s.locked])),i=new Set(t.filter(s=>s.enrolmentId===n.id&&s.status==="completed").map(s=>s.lessonId));return Qn(e).find(s=>!r.get(s.id)&&!i.has(s.id))??null},Oh=e=>e.content.filter(t=>t.completionRequired!==!1).map(t=>t.id),Uh=(e,t,n,r)=>{const i=t.filter(u=>u.lessonId===e.id&&u.required).map(u=>u.id),s=e.content.filter(u=>u.kind==="customHtml").map(u=>u.id),a=new Set([...n.filter(u=>u.completed).map(u=>u.activityId),...r]),l=Array.from(new Set([...i,...Oh(e),...s])),c=l.filter(u=>a.has(u)).length;return{allowed:c===l.length,completed:c,required:l.length}},ec=()=>new Date().toISOString();class Wh{constructor(){ce(this,"identities",new Map(Object.values(ye).map(t=>[t.memberId,t])));ce(this,"courses",[...ut]);ce(this,"modules",[...xt]);ce(this,"lessons",[...Ae]);ce(this,"activities",[...Wo]);ce(this,"questions",[...Nd]);ce(this,"choices",[...Id]);ce(this,"enrolments",[...qn]);ce(this,"progress",[...mt]);ce(this,"activityCompletions",[...Td]);ce(this,"submissions",[...Oa]);ce(this,"discussionPosts",[...Ed]);ce(this,"discussionReplies",[...Pd]);ce(this,"quizAttempts",[]);ce(this,"marks",[]);ce(this,"feedback",[]);ce(this,"certificates",[]);ce(this,"aiUsage",[]);ce(this,"auditLogs",[])}async getIdentity(t){return this.identities.get(t)??null}async listCourses(){return[...this.courses]}async getCourse(t){return this.courses.find(n=>n.id===t||n.slug===t)??null}async listModules(t){return this.modules.filter(n=>n.courseId===t).sort((n,r)=>n.sequence-r.sequence)}async listLessons(t){return this.lessons.filter(n=>n.courseId===t).sort((n,r)=>n.sequence-r.sequence)}async listActivities(t){return this.activities.filter(n=>n.lessonId===t)}async listQuestions(t){return this.questions.filter(n=>n.activityId===t)}async listAnswerChoices(t){return this.choices.filter(n=>n.questionId===t)}async listEnrolmentsByMember(t){return this.enrolments.filter(n=>n.memberId===t)}async listEnrolmentsByCourse(t){return this.enrolments.filter(n=>n.courseId===t)}async insertEnrolment(t){return this.enrolments=[...this.enrolments,t],t}async listProgress(t){return this.progress.filter(n=>n.enrolmentId===t)}async saveProgress(t){const n=this.progress.findIndex(r=>r.id===t.id);return this.progress=n===-1?[...this.progress,t]:this.progress.map((r,i)=>i===n?t:r),t}async listActivityCompletions(t,n){return this.activityCompletions.filter(r=>r.memberId===t&&r.lessonId===n)}async saveActivityCompletion(t){const n=this.activityCompletions.findIndex(r=>r.activityId===t.activityId&&r.memberId===t.memberId);return this.activityCompletions=n===-1?[...this.activityCompletions,t]:this.activityCompletions.map((r,i)=>i===n?t:r),t}async saveQuizAttempt(t){return this.quizAttempts=[...this.quizAttempts,t],t}async listSubmissions(t){return this.submissions.filter(n=>!(t.memberId&&n.memberId!==t.memberId||t.courseId&&n.courseId!==t.courseId||t.status&&n.status!==t.status))}async saveSubmission(t){const n=this.submissions.findIndex(r=>r.id===t.id);return this.submissions=n===-1?[...this.submissions,t]:this.submissions.map((r,i)=>i===n?t:r),t}async listDiscussionPosts(t){return this.discussionPosts.filter(n=>n.activityId===t)}async listDiscussionReplies(t){return this.discussionReplies.filter(n=>n.postId===t)}async saveDiscussionPost(t){return this.discussionPosts=[...this.discussionPosts.filter(n=>n.id!==t.id),t],t}async saveDiscussionReply(t){return this.discussionReplies=[...this.discussionReplies.filter(n=>n.id!==t.id),t],t}async saveMark(t){return this.marks=[...this.marks.filter(n=>n.id!==t.id),t],t}async saveFeedback(t){return this.feedback=[...this.feedback.filter(n=>n.id!==t.id),t],t}async saveCertificate(t){return this.certificates=[...this.certificates.filter(n=>n.id!==t.id),t],t}async saveAIUsage(t){return this.aiUsage=[...this.aiUsage,t],t}async countAIUsage(t,n){return this.aiUsage.filter(r=>r.memberId===t&&r.createdAt>=n).length}async appendAuditLog(t){return this.auditLogs=[...this.auditLogs,t],t}async buildReportRows(t){var i;const n=[],r=t?this.courses.filter(s=>s.id===t):this.courses;return r.forEach(s=>{const a=this.modules.filter(u=>u.courseId===s.id),l=this.lessons.filter(u=>u.courseId===s.id);this.enrolments.filter(u=>u.courseId===s.id).forEach(u=>{const h=this.identities.get(u.memberId);l.forEach(f=>{const y=a.find(T=>T.id===f.moduleId),v=this.progress.find(T=>T.enrolmentId===u.id&&T.lessonId===f.id),g=this.submissions.find(T=>T.enrolmentId===u.id&&T.lessonId===f.id),b=g?this.marks.find(T=>T.submissionId===g.id):void 0;n.push({learnerName:(h==null?void 0:h.displayName)??u.memberId,courseTitle:s.title,moduleTitle:(y==null?void 0:y.title)??"Unassigned",lessonTitle:f.title,completionStatus:(v==null?void 0:v.status)??"notStarted",score:(b==null?void 0:b.score)??null,lastActivityAt:(v==null?void 0:v.lastActivityAt)??(g==null?void 0:g.submittedAt)??null})})})}),n.length===0&&n.push({learnerName:"No learners yet",courseTitle:((i=r[0])==null?void 0:i.title)??"No course",moduleTitle:"",lessonTitle:"",completionStatus:"notStarted",score:null,lastActivityAt:null}),n.sort((s,a)=>(s.lastActivityAt??ec()).localeCompare(a.lastActivityAt??ec()))}}const Bh=()=>new Wh,qh=e=>e.replace(/\/+$/,""),tc=()=>new Date().toISOString(),ft=(e,t)=>typeof e[t]=="string"?e[t]:null,Hh=(e,t)=>typeof e[t]=="number"?e[t]:null,Vh=(e,t,n)=>{const r=n;return{collection:e,record_id:t,payload:n,course_id:ft(r,"courseId"),module_id:ft(r,"moduleId"),lesson_id:ft(r,"lessonId"),activity_id:ft(r,"activityId"),question_id:ft(r,"questionId"),member_id:ft(r,"memberId"),enrolment_id:ft(r,"enrolmentId"),post_id:ft(r,"postId"),submission_id:ft(r,"submissionId"),status:ft(r,"status"),sequence:Hh(r,"sequence")}},Gh=(e,t)=>(e.sequence??0)-(t.sequence??0);class Qh{constructor(t,n,r="classroom_records"){ce(this,"restBaseUrl");this.anonKey=n,this.tableName=r,this.restBaseUrl=`${qh(t)}/rest/v1`}headers(t={}){return{apikey:this.anonKey,Authorization:`Bearer ${this.anonKey}`,...t}}async request(t,n={}){const r=await fetch(`${this.restBaseUrl}/${t}`,{...n,headers:this.headers(n.headers??{})});if(!r.ok){const i=await r.text();throw new Error(`Supabase request failed (${r.status}): ${i}`)}return r.status===204?null:await r.json()}async listRecords(t,n={},r=!1){const i=new URLSearchParams({select:"payload",collection:`eq.${t}`});return Object.entries(n).forEach(([a,l])=>{l!=null&&i.set(a,`eq.${String(l)}`)}),r&&i.set("order","sequence.asc.nullslast"),(await this.request(`${this.tableName}?${i.toString()}`)).map(a=>a.payload)}async getRecord(t,n){return(await this.listRecords(t,{record_id:n}))[0]??null}async upsertRecord(t,n,r){var a;const i=new URLSearchParams({on_conflict:"collection,record_id"});return((a=(await this.request(`${this.tableName}?${i.toString()}`,{method:"POST",headers:{"Content-Type":"application/json",Prefer:"resolution=merge-duplicates,return=representation"},body:JSON.stringify([Vh(t,n,r)])}))[0])==null?void 0:a.payload)??r}async getIdentity(t){const n=await this.getRecord("identities",t);if(n)return n;const r=(await this.listEnrolmentsByMember(t))[0];return r?{memberId:t,contactId:r.contactId,email:"",displayName:t,roles:["learner"]}:null}async listCourses(){return this.listRecords("courses")}async getCourse(t){const n=await this.getRecord("courses",t);return n||((await this.listCourses()).find(r=>r.slug===t)??null)}async listModules(t){return this.listRecords("modules",{course_id:t},!0)}async listLessons(t){return this.listRecords("lessons",{course_id:t},!0)}async listActivities(t){return this.listRecords("activities",{lesson_id:t},!0)}async listQuestions(t){return this.listRecords("questions",{activity_id:t})}async listAnswerChoices(t){return this.listRecords("answerChoices",{question_id:t},!0)}async listEnrolmentsByMember(t){return this.listRecords("enrolments",{member_id:t})}async listEnrolmentsByCourse(t){return this.listRecords("enrolments",{course_id:t})}async insertEnrolment(t){return this.upsertRecord("enrolments",t.id,t)}async listProgress(t){return this.listRecords("lessonProgress",{enrolment_id:t})}async saveProgress(t){return this.upsertRecord("lessonProgress",t.id,t)}async listActivityCompletions(t,n){return this.listRecords("activityCompletions",{member_id:t,lesson_id:n})}async saveActivityCompletion(t){return this.upsertRecord("activityCompletions",`${t.memberId}-${t.activityId}`,t)}async saveQuizAttempt(t){return this.upsertRecord("quizAttempts",t.id,t)}async listSubmissions(t){return this.listRecords("submissions",{member_id:t.memberId,course_id:t.courseId,status:t.status})}async saveSubmission(t){return this.upsertRecord("submissions",t.id,t)}async listDiscussionPosts(t){return(await this.listRecords("discussionPosts",{activity_id:t})).sort((r,i)=>r.createdAt.localeCompare(i.createdAt))}async listDiscussionReplies(t){return(await this.listRecords("discussionReplies",{post_id:t})).sort((r,i)=>r.createdAt.localeCompare(i.createdAt))}async saveDiscussionPost(t){return this.upsertRecord("discussionPosts",t.id,t)}async saveDiscussionReply(t){return this.upsertRecord("discussionReplies",t.id,t)}async saveMark(t){return this.upsertRecord("marks",t.id,t)}async saveFeedback(t){return this.upsertRecord("feedback",t.id,t)}async saveCertificate(t){return this.upsertRecord("certificates",t.id,t)}async saveAIUsage(t){return this.upsertRecord("aiUsage",t.id,t)}async countAIUsage(t,n){return(await this.listRecords("aiUsage",{member_id:t})).filter(i=>i.createdAt>=n).length}async appendAuditLog(t){return this.upsertRecord("auditLogs",t.id,t)}async buildReportRows(t){var s;const n=t?(await Promise.all([this.getCourse(t)])).filter(a=>!!a):await this.listCourses(),r=await this.listRecords("marks"),i=[];for(const a of n){const[l,c,u]=await Promise.all([this.listModules(a.id),this.listLessons(a.id),this.listEnrolmentsByCourse(a.id)]);for(const h of u){const f=await this.getIdentity(h.memberId),y=await this.listProgress(h.id),v=await this.listSubmissions({memberId:h.memberId,courseId:a.id});c.sort(Gh).forEach(g=>{const b=l.find(p=>p.id===g.moduleId),T=y.find(p=>p.lessonId===g.id),m=v.find(p=>p.lessonId===g.id),d=m?r.find(p=>p.submissionId===m.id):void 0;i.push({learnerName:(f==null?void 0:f.displayName)??h.memberId,courseTitle:a.title,moduleTitle:(b==null?void 0:b.title)??"Unassigned",lessonTitle:g.title,completionStatus:(T==null?void 0:T.status)??"notStarted",score:(d==null?void 0:d.score)??null,lastActivityAt:(T==null?void 0:T.lastActivityAt)??(m==null?void 0:m.submittedAt)??null})})}}return i.length===0&&i.push({learnerName:"No learners yet",courseTitle:((s=n[0])==null?void 0:s.title)??"No course",moduleTitle:"",lessonTitle:"",completionStatus:"notStarted",score:null,lastActivityAt:null}),i.sort((a,l)=>(a.lastActivityAt??tc()).localeCompare(l.lastActivityAt??tc()))}}const Jh="<app-namespace>",Yh={courses:"courses",modules:"modules",lessons:"lessons",activities:"activities",questions:"questions",answerChoices:"answer-choices",enrolments:"enrolments",lessonProgress:"lesson-progress",quizAttempts:"quiz-attempts",activityCompletions:"activity-completions",submissions:"submissions",discussionPosts:"discussion-posts",discussionReplies:"discussion-replies",marks:"marks",feedback:"feedback",certificates:"certificates",lecturerAssignments:"lecturer-assignments",aiUsage:"ai-usage",auditLogs:"audit-logs"},Kh=(e,t=Jh)=>`${t}/${Yh[e]}`,We=async()=>{const t=await import("@wix/data");if(!t.items)throw new Error("Wix Data API is not available in this runtime.");return t.items},it=e=>({...e,_id:e.id}),Xh=e=>({...e,_id:`${e.memberId}-${e.activityId}`});class Zh{constructor(t){this.namespace=t}collection(t){return Kh(t,this.namespace)}async query(t){return(await We()).query(this.collection(t))}async getIdentity(t){const r=(await this.listEnrolmentsByMember(t))[0];return r?{memberId:t,contactId:r.contactId,email:"",displayName:t,roles:["learner"]}:null}async listCourses(){return(await(await this.query("courses")).limit(1e3).find()).items}async getCourse(t){const n=await(await this.query("courses")).eq("_id",t).limit(1).find();return n.items[0]?n.items[0]:(await(await this.query("courses")).eq("slug",t).limit(1).find()).items[0]??null}async listModules(t){return(await(await this.query("modules")).eq("courseId",t).ascending("sequence").limit(1e3).find()).items}async listLessons(t){return(await(await this.query("lessons")).eq("courseId",t).ascending("sequence").limit(1e3).find()).items}async listActivities(t){return(await(await this.query("activities")).eq("lessonId",t).limit(1e3).find()).items}async listQuestions(t){return(await(await this.query("questions")).eq("activityId",t).limit(1e3).find()).items}async listAnswerChoices(t){return(await(await this.query("answerChoices")).eq("questionId",t).limit(1e3).find()).items}async listEnrolmentsByMember(t){return(await(await this.query("enrolments")).eq("memberId",t).limit(1e3).find()).items}async listEnrolmentsByCourse(t){return(await(await this.query("enrolments")).eq("courseId",t).limit(1e3).find()).items}async insertEnrolment(t){return(await We()).insert(this.collection("enrolments"),it(t))}async listProgress(t){return(await(await this.query("lessonProgress")).eq("enrolmentId",t).limit(1e3).find()).items}async saveProgress(t){return(await We()).save(this.collection("lessonProgress"),it(t))}async listActivityCompletions(t,n){return(await(await this.query("activityCompletions")).eq("memberId",t).eq("lessonId",n).limit(1e3).find()).items}async saveActivityCompletion(t){return(await We()).save(this.collection("activityCompletions"),Xh(t))}async saveQuizAttempt(t){return(await We()).insert(this.collection("quizAttempts"),it(t))}async listSubmissions(t){let n=await this.query("submissions");return t.memberId&&(n=n.eq("memberId",t.memberId)),t.courseId&&(n=n.eq("courseId",t.courseId)),t.status&&(n=n.eq("status",t.status)),(await n.limit(1e3).find()).items}async saveSubmission(t){return(await We()).save(this.collection("submissions"),it(t))}async listDiscussionPosts(t){return(await(await this.query("discussionPosts")).eq("activityId",t).limit(1e3).find()).items}async listDiscussionReplies(t){return(await(await this.query("discussionReplies")).eq("postId",t).limit(1e3).find()).items}async saveDiscussionPost(t){return(await We()).save(this.collection("discussionPosts"),it(t))}async saveDiscussionReply(t){return(await We()).save(this.collection("discussionReplies"),it(t))}async saveMark(t){return(await We()).save(this.collection("marks"),it(t))}async saveFeedback(t){return(await We()).save(this.collection("feedback"),it(t))}async saveCertificate(t){return(await We()).save(this.collection("certificates"),it(t))}async saveAIUsage(t){return(await We()).insert(this.collection("aiUsage"),it(t))}async countAIUsage(t,n){return(await(await this.query("aiUsage")).eq("memberId",t).limit(1e3).find()).items.filter(i=>i.createdAt>=n).length}async appendAuditLog(t){return(await We()).insert(this.collection("auditLogs"),it(t))}async buildReportRows(t){const n=t?await this.getCourse(t):null,r=t?n?[n]:[]:await this.listCourses();return(await Promise.all(r.filter(s=>s!==null).map(async s=>{const[a,l,c]=await Promise.all([this.listModules(s.id),this.listLessons(s.id),this.listEnrolmentsByCourse(s.id)]);return c.flatMap(u=>l.map(h=>{const f=a.find(y=>y.id===h.moduleId);return{learnerName:u.memberId,courseTitle:s.title,moduleTitle:(f==null?void 0:f.title)??"Unassigned",lessonTitle:h.title,completionStatus:"notStarted",score:null,lastActivityAt:null}}))}))).flat()}}const nc=(e,t)=>!!(e!=null&&e.roles.includes(t)),hs=e=>nc(e,"lecturer")||nc(e,"administrator");var ef={};const tf=typeof process<"u"?ef:{},Ji=tf.WIX_APP_NAMESPACE??void 0,rc="https://mubisxvbvcdnrhdqnnyy.supabase.co",Ho="sb_publishable_7p_-KtzLqPDubr4ebv1zcA_9yvCb59u",nf="classroom_records",$d=!!Ho,rf=!$d&&!!(Ji&&Ji!=="<app-namespace>"),$e=$d&&rc&&Ho?new Qh(rc,Ho,nf):rf&&Ji?new Zh(Ji):Bh(),sr=["https://static.wixstatic.com/media/7638b6_7dce53d2b46b43c0a42e8cc509325e3f~mv2.png","https://static.wixstatic.com/media/7638b6_5565b4e4adcf4e6db1b3e0075c7f44bd~mv2.png","https://static.wixstatic.com/media/7638b6_d369a23ccc264bed911d2f2662249aa7~mv2.png","https://static.wixstatic.com/media/7638b6_a63863ef5ce945d6adc25625d8e8e748~mv2.png","https://static.wixstatic.com/media/7638b6_7fd81c4b4f96408dab20186b2bd32a96~mv2.png"],zd=({mode:e,slideIndex:t,setSlideIndex:n,onOpenCourse:r,onClose:i})=>{const s=sr[t]??sr[0]??"";return o.jsxs("div",{className:"level-one-slideshow-modal",role:"dialog","aria-modal":"true","aria-label":"Level 1 introduction",children:[o.jsx("button",{className:"course-about-backdrop",type:"button","aria-label":"Close slideshow",onClick:i}),o.jsxs("article",{className:"level-one-slideshow-panel",children:[o.jsx("div",{className:"level-one-slide-stage",children:o.jsx("img",{src:s,alt:`Level 1 introduction slide ${t+1}`})}),o.jsxs("div",{className:"level-one-slide-controls",children:[o.jsx("button",{className:"about-button",type:"button",onClick:()=>n(a=>Math.max(0,a-1)),disabled:t===0,children:"Previous"}),o.jsxs("span",{children:[t+1," / ",sr.length]}),o.jsx("button",{className:"about-button",type:"button",onClick:()=>n(a=>Math.min(sr.length-1,a+1)),disabled:t===sr.length-1,children:"Next"}),o.jsxs("button",{className:"course-link-button",type:"button",onClick:r,children:[o.jsx(dt,{size:18}),e==="start"?"Start level":"Open course"]}),o.jsx("button",{className:"about-button",type:"button",onClick:i,children:"Close"})]})]})]})},sf=ye.learner,or=qn.find(e=>e.memberId===sf.memberId)??null,Yi=e=>{var n,r;const t=Number(((n=e.id.match(/^level-(\d+)$/))==null?void 0:n[1])??((r=e.title.match(/Level\s+(\d+)/i))==null?void 0:r[1]));return Number.isFinite(t)&&t>0?t:e.sequence},of=e=>[...e].sort((t,n)=>Yi(t)-Yi(n)||t.sequence-n.sequence),af=(e,t,n)=>{const r=new Map;if(!n)return e.forEach((a,l)=>{r.set(a.id,l===0?"current":"upcoming")}),r;const i=new Set(e.filter(a=>{const l=Ae.filter(c=>c.moduleId===a.id);return Ua(l,t,n.id)===100}).map(a=>a.id)),s=e.find(a=>!i.has(a.id))??e.at(-1);return e.forEach(a=>{const l=i.has(a.id)?"completed":a.id===(s==null?void 0:s.id)?"current":"upcoming";r.set(a.id,l)}),r},lf=({onSelectLevel:e})=>{const[t,n]=S.useState(mt),[r,i]=S.useState(null),[s,a]=S.useState(null),[l,c]=S.useState(0),u=S.useMemo(()=>of(xt),[]),h=u.find(g=>g.id===r)??null,f=S.useMemo(()=>af(u,t,or),[t,u]),y=g=>{i(null),c(0),a(g)},v=()=>{a(null),c(0)};return S.useEffect(()=>{let g=!0;return or?($e.listProgress(or.id).then(b=>{g&&n(b)}).catch(()=>{g&&n(mt)}),()=>{g=!1}):()=>{g=!1}},[]),o.jsxs("main",{className:"course-intro-page",children:[o.jsx("section",{className:"course-intro-hero",children:o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Faithonomics courses"}),o.jsx("h1",{children:"Choose Your Level"}),o.jsx("p",{children:"Start with the current level, review completed learning, or see what is coming next in the Faithonomics pathway."})]})}),o.jsx("section",{className:"intro-course-grid","aria-label":"Faithonomics levels",children:u.map(g=>{const b=f.get(g.id)??"upcoming",T=Qn(Ae.filter(N=>N.moduleId===g.id)),m=or?Ua(T,t,or.id):b==="completed"?100:0,d=Yi(g),p=()=>e(g.id),w=()=>{if(g.id==="level-1"){y("about");return}i(g.id)};return o.jsxs("article",{className:`intro-course-card ${b}`,style:{order:d},children:[o.jsxs("button",{className:"intro-course-image-link",type:"button",onClick:p,"aria-label":`Open ${g.title}`,children:[g.imageUrl?o.jsx("img",{src:g.imageUrl,alt:g.imageAlt??g.title}):null,o.jsx("span",{children:b})]}),o.jsxs("div",{className:"intro-course-details",children:[o.jsxs("div",{className:"intro-course-meta",children:[o.jsxs("span",{children:["Level ",d]}),o.jsxs("span",{children:[T.length," sessions"]}),o.jsxs("span",{children:[m,"% complete"]})]}),o.jsxs("div",{className:"intro-course-actions",children:[o.jsxs("button",{className:"course-link-button",type:"button",onClick:p,children:[o.jsx(dt,{size:18}),"Open course"]}),o.jsx("button",{className:"about-button",type:"button",onClick:w,children:"About"})]})]})]},g.id)})}),h?o.jsxs("div",{className:"course-about-modal",role:"dialog","aria-modal":"true","aria-labelledby":"course-about-title",children:[o.jsx("button",{className:"course-about-backdrop",type:"button","aria-label":"Close about",onClick:()=>i(null)}),o.jsxs("article",{className:"course-about-panel",children:[h.imageUrl?o.jsx("img",{src:h.imageUrl,alt:""}):null,o.jsxs("div",{children:[o.jsxs("p",{className:"eyebrow",children:["Level ",Yi(h)]}),o.jsx("h2",{id:"course-about-title",children:h.title.replace(/^Level \d+:\s*/,"")}),o.jsx("p",{children:h.description}),o.jsxs("div",{className:"intro-course-actions",children:[o.jsxs("button",{className:"course-link-button",type:"button",onClick:()=>e(h.id),children:[o.jsx(dt,{size:18}),"Open course"]}),o.jsx("button",{className:"about-button",type:"button",onClick:()=>i(null),children:"Close"})]})]})]})]}):null,s?o.jsx(zd,{mode:s,slideIndex:l,setSlideIndex:c,onOpenCourse:()=>e("level-1"),onClose:v}):null]})},Rd=(e,t)=>qn.find(n=>n.courseId===e&&n.memberId===t)??null,cf=({course:e,activeLevel:t,identity:n,completedLessonIds:r,progressRecords:i,onOpenLesson:s})=>{const a=hs(n),l=Qn(Ae.filter(m=>m.courseId===e.id&&(a||!t||m.moduleId===t.id))),c=Rd(e.id,n.memberId),u=c?Md(e.id,n,c,r,i):[],h=c?Ua(l,u,c.id):0,f=c&&!a?Fh(l,u,c):l[0]??null,y=new Map(a?l.map(m=>[m.id,!1]):c?Wa(l,u,c).map(m=>[m.lessonId,m.locked]):l.map(m=>[m.id,!0])),v=a?e.title:(t==null?void 0:t.title)??e.title,g=a?e.imageUrl:(t==null?void 0:t.imageUrl)??e.imageUrl,b=a?"":(t==null?void 0:t.imageAlt)??"",T=a||!!c||e.isFree;return o.jsxs("article",{className:"course-card",children:[o.jsx("img",{src:g,alt:b}),o.jsxs("div",{className:"course-card-body",children:[o.jsxs("div",{className:"course-title-row",children:[o.jsx("h2",{children:v}),a?o.jsx("span",{className:"pill",children:"Staff preview"}):!c&&!e.isFree?o.jsx("span",{className:"pill locked",children:"Paid"}):o.jsx("span",{className:"pill",children:"Open"})]}),o.jsx("p",{children:a?e.summary:(t==null?void 0:t.description)??e.summary}),o.jsx("div",{className:"progress-line","aria-label":`${h}% complete`,children:o.jsx("span",{style:{width:`${h}%`}})}),o.jsxs("div",{className:"card-meta",children:[o.jsxs("span",{children:[h,"% complete"]}),o.jsxs("span",{children:[l.length," sessions"]})]}),o.jsxs("button",{className:"primary-button",disabled:!f||!T,onClick:()=>{f&&s(e.id,f.id)},children:[o.jsx(dt,{size:18}),"Continue learning"]}),o.jsx(uf,{courseId:e.id,sessions:l,lockStates:y,onOpenLesson:s})]})]})},uf=({courseId:e,sessions:t,lockStates:n,onOpenLesson:r})=>o.jsx("div",{className:"session-list","aria-label":"Level sessions",children:t.map(i=>{const s=!!n.get(i.id);return o.jsxs("button",{disabled:s,title:s?"Complete the previous required session first.":i.title,onClick:()=>r(e,i.id),children:[s?o.jsx(ms,{size:15}):o.jsx(dt,{size:15}),i.imageUrl?o.jsx("img",{className:"session-thumb",src:i.imageUrl,alt:""}):null,o.jsx("span",{children:i.title})]},i.id)})}),Md=(e,t,n,r,i)=>{const a=[...i.filter(l=>l.enrolmentId===n.id)];for(const l of r)a.some(c=>c.lessonId===l)||a.push({id:`local-progress-${l}`,enrolmentId:n.id,courseId:e,lessonId:l,memberId:t.memberId,status:"completed",percent:100,lastActivityAt:new Date().toISOString(),completedAt:new Date().toISOString()});return a},df=({identity:e,activeLevelId:t,completedLessonIds:n,pendingIntroSlideshowLevelId:r,onIntroSlideshowHandled:i,onOpenLesson:s})=>{const a=hs(e),l=a?null:xt.find(p=>p.id===t)??null,c=Ae.filter(p=>!l||p.moduleId===l.id),[u,h]=S.useState(mt),[f,y]=S.useState(!1),[v,g]=S.useState(!1),[b,T]=S.useState(0);S.useEffect(()=>{const p=qn.filter(N=>N.memberId===e.memberId);let w=!0;return y(!1),Promise.all(p.map(N=>$e.listProgress(N.id))).then(N=>{w&&(h(N.flat()),y(!0))}).catch(()=>{w&&(h(mt),y(!0))}),()=>{w=!1}},[e.memberId]),S.useEffect(()=>{if(!f||!r)return;if(a){i();return}if(r!=="level-1"||t!=="level-1"){i();return}const p=ut[0]??null;if(!p){i();return}const w=Rd(p.id,e.memberId),N=Ae.filter(E=>E.moduleId==="level-1"),I=w?Md(p.id,e,w,n,u):[];if(N.some(E=>I.some(O=>O.lessonId===E.id&&O.status==="completed"))){i();return}T(0),g(!0)},[t,n,e,a,u,i,r,f]);const m=()=>{g(!1),i()},d=()=>{m();const p=Qn(Ae.filter(w=>w.moduleId==="level-1"))[0]??null;p&&s(p.courseId,p.id)};return o.jsxs("main",{className:"content-shell",children:[o.jsxs("section",{className:"dashboard-intro paper-stage",children:[o.jsx("div",{className:"paper-sun","aria-hidden":"true"}),o.jsx("div",{className:"paper-layer paper-back","aria-hidden":"true"}),o.jsx("div",{className:"paper-layer paper-mid","aria-hidden":"true"}),o.jsx("div",{className:"paper-road","aria-hidden":"true"}),o.jsxs("div",{className:"paper-people","aria-hidden":"true",children:[o.jsx("span",{}),o.jsx("span",{})]}),o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Student page"}),o.jsx("h2",{children:e.displayName}),o.jsx("p",{className:"intro-copy",children:l?`${l.title} is open. Continue through each required session in sequence.`:"Faithonomics courses, progress, submissions, feedback and certificates in one Wix-connected classroom."})]}),o.jsxs("div",{className:"stat-strip",children:[o.jsxs("div",{children:[o.jsx("strong",{children:l?"1":qn.filter(p=>p.memberId===e.memberId).length}),o.jsx("span",{children:l?"Active level":"Courses"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:c.length}),o.jsx("span",{children:"Sessions"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"24h"}),o.jsx("span",{children:"Next reminder"})]})]})]}),o.jsx("section",{className:"course-grid","aria-label":"Enrolled courses",children:ut.map(p=>o.jsx(cf,{course:p,activeLevel:l,identity:e,completedLessonIds:n,progressRecords:u,onOpenLesson:s},p.id))}),v?o.jsx(zd,{mode:"start",slideIndex:b,setSlideIndex:T,onOpenCourse:d,onClose:m}):null]})},ic=e=>e.trim().toLowerCase(),pf=(e,t,n,r)=>e.find(i=>i.moduleId===t&&ic(i.username)===ic(n)&&i.password===r)??null,mf=({initialModuleId:e,onBack:t,onLogin:n})=>{const r=$t.find(g=>g.moduleId===e)??$t[0],[i,s]=S.useState((r==null?void 0:r.moduleId)??""),[a,l]=S.useState((r==null?void 0:r.username)??""),[c,u]=S.useState((r==null?void 0:r.password)??""),[h,f]=S.useState(""),y=$t.find(g=>g.moduleId===i)??r;S.useEffect(()=>{const g=$t.find(b=>b.moduleId===e)??$t[0];s((g==null?void 0:g.moduleId)??""),l((g==null?void 0:g.username)??""),u((g==null?void 0:g.password)??""),f("")},[e]);const v=g=>{g.preventDefault();const b=pf($t,i,a,c);if(!b){f("The level login or password is incorrect.");return}f(""),n(b)};return o.jsx("main",{className:"login-page",children:o.jsxs("section",{className:"login-panel",children:[o.jsxs("div",{className:"login-brand",children:[o.jsx("div",{className:"login-logo-crop",children:o.jsx("img",{src:"https://static.wixstatic.com/media/7638b6_d0228f89f4b24c9b99aa50c8b52a03b3~mv2.png",alt:"Faithonomics"})}),o.jsx("h1",{children:"Student Portal"}),o.jsx("p",{children:"Sign in with the login issued for your selected level."}),y?o.jsx("span",{className:"login-selected-level",children:y.levelTitle}):null,o.jsx("button",{className:"login-back-button",type:"button",onClick:t,children:"View all courses"})]}),o.jsxs("form",{className:"login-form",onSubmit:v,children:[o.jsxs("label",{children:[o.jsx("span",{children:"Level"}),o.jsx("select",{value:i,onChange:g=>{const b=$t.find(T=>T.moduleId===g.target.value);s(g.target.value),l((b==null?void 0:b.username)??""),u((b==null?void 0:b.password)??"")},children:$t.map(g=>o.jsx("option",{value:g.moduleId,children:g.levelTitle},g.moduleId))})]}),o.jsxs("label",{children:[o.jsx("span",{children:"Login"}),o.jsx("input",{autoComplete:"username",value:a,onChange:g=>l(g.target.value),placeholder:"level1"})]}),o.jsxs("label",{children:[o.jsx("span",{children:"Password"}),o.jsx("input",{autoComplete:"current-password",type:"password",value:c,onChange:g=>u(g.target.value),placeholder:"faith1"})]}),h?o.jsx("p",{className:"status error",children:h}):null,o.jsxs("button",{className:"primary-button",type:"submit",children:[o.jsx(Ad,{size:18}),y?`Open ${y.levelTitle}`:"Open student page"]})]})]})})},ui=e=>e.trim().toLowerCase(),hf=(e,t)=>{if(e===void 0||t===void 0)return!1;const n=Array.isArray(e)?e.map(ui):[ui(e)],r=Array.isArray(t)?t.map(ui):[ui(t)];return n.length!==r.length?!1:n.every((i,s)=>r[s]===i)},ff=(e,t,n)=>{const r=e.map(i=>{const s=t.filter(c=>c.questionId===i.id&&c.isCorrect).sort((c,u)=>(c.sequence??0)-(u.sequence??0)).map(c=>c.value),a=i.correctAnswer??s,l=hf(a,n[i.id]);return{questionId:i.id,correct:l,awarded:l?i.points:0}});return{score:r.reduce((i,s)=>i+s.awarded,0),maxScore:e.reduce((i,s)=>i+s.points,0),answers:r}},gf=/<\/?(script|object|embed|link|meta|base|form)\b[^>]*>/gi,yf=/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi,vf=/(href|src)\s*=\s*("|')\s*javascript:[^"']*\2/gi,wf=e=>e.replace(gf,"").replace(yf,"").replace(vf,'$1="#"'),sc=(e,t)=>{const n=wf(e),r=`
    <script>
      window.classroomComplete = function(score, maxScore) {
        parent.postMessage({
          type: "classroom.activity.completed",
          activityId: ${JSON.stringify(t)},
          score: Number(score || 0),
          maxScore: Number(maxScore || 0),
          completed: true
        }, "*");
      };
      document.addEventListener("click", function(event) {
        var target = event.target && event.target.closest
          ? event.target.closest("[data-classroom-complete]")
          : null;
        if (!target) {
          return;
        }
        window.classroomComplete(
          target.getAttribute("data-score") || 0,
          target.getAttribute("data-max-score") || 0
        );
      });
      var lastRichDialogTrigger = null;
      function getOpenRichDialog() {
        return document.querySelector("[data-rich-dialog].is-open:not([hidden])");
      }
      function openRichDialog(trigger) {
        var selector = trigger.getAttribute("data-rich-dialog-open");
        var dialog = selector ? document.querySelector(selector) : null;
        if (!dialog) {
          return;
        }
        lastRichDialogTrigger = trigger;
        dialog.hidden = false;
        dialog.classList.add("is-open");
        document.body.style.overflow = "hidden";
        parent.postMessage({
          type: "classroom.richPopup.opened",
          activityId: ${JSON.stringify(t)}
        }, "*");
        var focusTarget = dialog.querySelector("[data-rich-dialog-close], iframe, button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
        if (focusTarget && typeof focusTarget.focus === "function") {
          focusTarget.focus();
        }
      }
      function closeRichDialog(dialog) {
        if (!dialog) {
          return;
        }
        dialog.classList.remove("is-open");
        dialog.hidden = true;
        document.body.style.overflow = "";
        if (lastRichDialogTrigger && typeof lastRichDialogTrigger.focus === "function") {
          lastRichDialogTrigger.focus();
        }
      }
      document.addEventListener("click", function(event) {
        var openTarget = event.target && event.target.closest
          ? event.target.closest("[data-rich-dialog-open]")
          : null;
        if (openTarget) {
          event.preventDefault();
          openRichDialog(openTarget);
          return;
        }
        var closeTarget = event.target && event.target.closest
          ? event.target.closest("[data-rich-dialog-close]")
          : null;
        if (closeTarget) {
          event.preventDefault();
          closeRichDialog(closeTarget.closest("[data-rich-dialog]") || getOpenRichDialog());
        }
      });
      window.addEventListener("message", function(event) {
        var message = event.data;
        if (!message || typeof message !== "object" || message.type !== "urban-liturgy.close-outer") {
          return;
        }
        closeRichDialog(getOpenRichDialog());
      });
      document.addEventListener("keydown", function(event) {
        if (event.key !== "Escape") {
          return;
        }
        var openDialog = getOpenRichDialog();
        if (openDialog) {
          event.preventDefault();
          closeRichDialog(openDialog);
        }
      });
      document.addEventListener("change", function(event) {
        var target = event.target && event.target.closest
          ? event.target.closest("[data-rich-popup-toggle], [data-audio-toggle]")
          : null;
        if (!target) {
          return;
        }
        if (target.matches("[data-rich-popup-toggle]") && target.checked) {
          parent.postMessage({
            type: "classroom.richPopup.opened",
            activityId: ${JSON.stringify(t)}
          }, "*");
        }
        if (!target.matches("[data-audio-toggle]")) {
          return;
        }
        var selector = target.getAttribute("data-audio-target");
        var audio = selector ? document.querySelector(selector) : null;
        if (!audio || typeof audio.play !== "function" || typeof audio.pause !== "function") {
          return;
        }
        if (target.checked) {
          audio.currentTime = 0;
          var playPromise = audio.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function() {});
          }
          return;
        }
        audio.pause();
        audio.currentTime = 0;
      });
    <\/script>
  `;return`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>${n}${r}</body></html>`},Dd=(e,t)=>{if(typeof e!="object"||e===null)return null;const n=e;if(n.type!=="classroom.activity.completed"&&n.type!=="classroom.activity.progress"||typeof n.activityId!="string"||!t.includes(n.activityId))return null;const r=typeof n.score=="number"&&Number.isFinite(n.score)?n.score:void 0,i=typeof n.maxScore=="number"&&Number.isFinite(n.maxScore)?n.maxScore:void 0;return{type:n.type,activityId:n.activityId,...r===void 0?{}:{score:r},...i===void 0?{}:{maxScore:i},...typeof n.completed=="boolean"?{completed:n.completed}:{}}},bf=(e,t)=>{if(typeof e!="object"||e===null)return null;const n=e,r=typeof n.statement=="object"&&n.statement!==null?n.statement:n,i=typeof r.verb=="object"&&r.verb!==null?r.verb:null,s=typeof r.result=="object"&&r.result!==null?r.result:null,a=typeof(i==null?void 0:i.id)=="string"?i.id:"";if(!(a.includes("completed")||a.includes("passed")||(s==null?void 0:s.completion)===!0))return null;const c=typeof(s==null?void 0:s.score)=="object"&&s.score!==null?s.score:null,u=typeof(c==null?void 0:c.raw)=="number"?c.raw:void 0,h=typeof(c==null?void 0:c.max)=="number"?c.max:void 0;return{type:"classroom.activity.completed",activityId:t,completed:!0,...u===void 0?{}:{score:u},...h===void 0?{}:{maxScore:h}}},xf=(e,t)=>qn.find(n=>n.courseId===e&&n.memberId===t)??null,Fd=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,kf=e=>(e==null?void 0:e.startsWith("wix-media://"))??!1,jf=e=>/^https?:\/\//i.test(e??""),Sf="https://www.youtube-nocookie.com",Cf="/Faithonomics/assets/discussion-forum-button-clean.png",Nf="/Faithonomics/assets/discussion-forum-header-clean.png",Od=e=>{if(!e)return null;try{const t=new URL(e),n=t.hostname.replace(/^www\./,"");if(n==="youtu.be")return t.pathname.split("/").filter(Boolean)[0]??null;if(n.endsWith("youtube.com")){if(t.pathname==="/watch")return t.searchParams.get("v");const r=t.pathname.match(/^\/embed\/([^/?]+)/);if(r)return r[1]??null}}catch{const t=e.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);return(t==null?void 0:t[1])??null}return null},Us=(e,t)=>e.kind==="ordering"||e.kind==="timeline"||t.kind==="ordering"||t.kind==="timeline",en=(e,t)=>{const n=e[t];return Array.isArray(n)?"":n??""},Ws=(e,t,n)=>{const r=e[t];return Array.isArray(r)?[...r,...Array.from({length:n},()=>"")].slice(0,n):Array.from({length:n},()=>"")},oc=({courseLessons:e,courseModules:t,activeLessonId:n,lockStates:r,onSelect:i})=>o.jsxs("aside",{className:"lesson-sidebar",children:[o.jsx("h2",{children:"Levels and Sessions"}),[...t].sort((s,a)=>s.sequence-a.sequence).map(s=>{const a=Qn(e.filter(l=>l.moduleId===s.id));return o.jsxs("section",{className:"level-group",children:[o.jsx("h3",{children:s.title}),o.jsx("p",{children:s.description}),a.map(l=>{const c=!!r.get(l.id);return o.jsxs("button",{className:l.id===n?"lesson-nav-item active":"lesson-nav-item",disabled:c,onClick:()=>i(l.id),children:[c?o.jsx(ms,{size:16}):o.jsx(Eh,{size:16}),l.imageUrl?o.jsx("img",{className:"lesson-nav-thumb",src:l.imageUrl,alt:""}):null,o.jsx("span",{children:l.title})]},l.id)})]},s.id)})]}),yt=({completed:e})=>o.jsx("p",{className:e?"status success":"status",children:e?"Completion recorded.":"Required before session completion."}),ac=({activity:e,courseId:t,lessonId:n,enrolment:r,identity:i,completed:s,discussionPosts:a,discussionReplies:l,onComplete:c,onAddPost:u,onAddReply:h})=>{var W;const[f,y]=S.useState({}),[v,g]=S.useState(""),[b,T]=S.useState("Psalm 1 shows that delight grows through daily meditation and repeated choices."),[m,d]=S.useState({}),[p,w]=S.useState(""),[N,I]=S.useState({}),P=S.useRef(null),E=C=>{if(!r)return;const $=new Date().toISOString(),R={id:`submission-${e.id}-${i.memberId}`,activityId:e.id,lessonId:n,courseId:t,enrolmentId:r.id,memberId:i.memberId,contactId:r.contactId,responseText:C,status:"submitted",submittedAt:$};$e.saveSubmission(R).catch(()=>{})},O=(C,$,R)=>{if(!r)return;const V={id:`quiz-${e.id}-${i.memberId}-${Date.now()}`,activityId:e.id,lessonId:n,memberId:i.memberId,enrolmentId:r.id,answers:C,score:$,maxScore:R,submittedAt:new Date().toISOString()};$e.saveQuizAttempt(V).catch(()=>{})},L=Nd.filter(C=>C.activityId===e.id),J=Id.filter(C=>L.some($=>$.id===C.questionId));if(S.useEffect(()=>{if(e.kind!=="h5p")return;const C=$=>{var B;const R=(B=P.current)==null?void 0:B.contentWindow;if(R&&$.source!==R)return;const V=Dd($.data,[e.id])??bf($.data,e.id);(V==null?void 0:V.type)==="classroom.activity.completed"&&c(e,V.score??e.maxScore,V.maxScore??e.maxScore)};return window.addEventListener("message",C),()=>window.removeEventListener("message",C)},[e,c]),e.kind==="reflection")return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(cn,{size:20})]}),o.jsx("p",{children:e.instructions}),o.jsx("textarea",{value:b,onChange:C=>T(C.target.value),"aria-label":"Written reflection"}),o.jsx("button",{className:"secondary-button",onClick:()=>{g("Answer saved."),E(b),c(e,e.maxScore,e.maxScore)},children:"Save answer"}),v?o.jsx("p",{className:"status success",children:v}):o.jsx(yt,{completed:s})]});if(e.kind==="h5p")return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(cn,{size:20})]}),o.jsx("p",{children:e.instructions}),e.embedUrl?o.jsx("iframe",{ref:P,className:"h5p-frame",title:e.title,src:e.embedUrl,sandbox:"allow-scripts allow-same-origin allow-forms",referrerPolicy:"strict-origin-when-cross-origin"}):o.jsxs("div",{className:"video-placeholder",children:[o.jsx(dt,{size:42}),o.jsx("span",{children:"H5P package awaiting hosted embed URL"})]}),o.jsx(yt,{completed:s})]});if(e.kind==="interactiveVideo"){const C=e.videoQuestions??[],$=C.filter(q=>m[q.id]===q.correctAnswer).length,R=C.length===0?e.maxScore:Math.round($/C.length*e.maxScore),V=R>=(e.minimumScore??e.maxScore),B=((W=e.videoUrl)==null?void 0:W.startsWith("wix-media://"))??!1;return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(dt,{size:20})]}),o.jsx("p",{children:e.instructions}),e.videoUrl&&!B?o.jsx("video",{className:"lesson-video",controls:!0,preload:"metadata",src:e.videoUrl}):o.jsxs("div",{className:"video-placeholder",children:[o.jsx(dt,{size:42}),o.jsx("span",{children:"Wix Media video with timed questions"})]}),o.jsx("div",{className:"video-question-grid",children:C.map(q=>o.jsxs("fieldset",{children:[o.jsxs("legend",{children:[Fd(q.timeSeconds)," - ",q.prompt]}),q.choices.map(le=>o.jsxs("label",{className:"choice-row",children:[o.jsx("input",{type:"radio",name:q.id,value:le,checked:m[q.id]===le,onChange:()=>d(Oe=>({...Oe,[q.id]:le}))}),le]},le))]},q.id))}),o.jsxs("div",{className:"activity-toolbar",children:[o.jsxs("span",{className:"status",children:["Score: ",R,"/",e.maxScore]}),o.jsx("button",{className:"secondary-button",disabled:!V,onClick:()=>{O(m,R,e.maxScore),c(e,R,e.maxScore)},children:"Save video answers"})]}),o.jsx(yt,{completed:s})]})}if(e.kind==="discussion"){const C=a.filter(H=>H.activityId===e.id),$=new Set(C.map(H=>H.id)),R=new Map(C.map(H=>[H.id,H])),V=C.some(H=>H.memberId===i.memberId),B=Math.max(1,e.replyRequirement??1),q=new Set(l.filter(H=>{const Lt=R.get(H.postId);return H.memberId===i.memberId&&$.has(H.postId)&&Lt!==void 0&&Lt.memberId!==i.memberId}).map(H=>H.postId)),le=q.size,Oe=V&&le>=B,Br=e.id==="activity-kingdom-first-discussion"?"Share how Matthew 6 reshapes one economic choice...":e.id==="activity-four-pillars-discussion"?"Choose property, relationships, work, or consumption. Share one everyday example...":"Share your Monday action...",qr=(H,Lt)=>{H&&Lt>=B&&c(e,e.maxScore,e.maxScore)};return o.jsxs("section",{className:"activity-panel discussion-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(_d,{size:20})]}),o.jsx("p",{children:e.instructions}),o.jsxs("div",{className:"discussion-requirements","aria-label":"Discussion completion requirements",children:[o.jsx("span",{className:V?"met":"",children:V?"Post added":"Add one post"}),o.jsxs("span",{className:le>=B?"met":"",children:["Reply to course participants: ",le,"/",B]})]}),o.jsxs("div",{className:"discussion-composer",children:[o.jsx("textarea",{value:p,onChange:H=>w(H.target.value),"aria-label":"Group discussion post",placeholder:Br}),o.jsx("button",{className:"secondary-button",onClick:()=>{p.trim()&&(u(e,p.trim()),w(""),qr(!0,le))},children:"Add post"})]}),o.jsx("div",{className:"discussion-list",children:C.map(H=>{const Lt=l.filter(x=>x.postId===H.id),Jn=H.memberId===i.memberId,Hr=q.has(H.id);return o.jsxs("article",{className:["discussion-post",Jn?"own-post":"",Hr?"replied":""].filter(Boolean).join(" "),children:[o.jsx("strong",{children:H.authorName}),Jn?o.jsx("span",{className:"discussion-badge",children:"Your post"}):null,Hr?o.jsx("span",{className:"discussion-badge replied",children:"Reply counted"}):null,o.jsx("p",{children:H.body}),o.jsx("div",{className:"reply-list",children:Lt.map(x=>o.jsxs("p",{children:[o.jsxs("strong",{children:[x.authorName,":"]})," ",x.body]},x.id))}),Jn?o.jsx("p",{className:"status",children:"This is your post. Reply to course participants to complete the activity."}):o.jsxs("div",{className:"reply-composer",children:[o.jsx("textarea",{value:N[H.id]??"",onChange:x=>I(z=>({...z,[H.id]:x.target.value})),"aria-label":`Reply to ${H.authorName}`,placeholder:"Ask a thoughtful question or add a practical connection..."}),o.jsx("button",{className:"secondary-button",onClick:()=>{var F;const x=(F=N[H.id])==null?void 0:F.trim();if(!x)return;h(H,x),I(pe=>({...pe,[H.id]:""}));const z=le+(q.has(H.id)?0:1);qr(V,z)},children:"Add reply"})]})]},H.id)})}),o.jsx("p",{className:Oe?"status success":"status",children:Oe?"Discussion requirement met.":`Add one post and reply to ${B} ${B===1?"course participant":"course participants"} to complete this activity.`}),o.jsx(yt,{completed:s})]})}if(e.kind==="shortAnswer"){const C=L.length>0&&L.every($=>en(f,$.id).trim().length>=10);return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(Qi,{size:20})]}),o.jsx("p",{children:e.instructions}),L.map($=>o.jsxs("label",{className:"short-answer-field",children:[o.jsx("span",{children:$.prompt}),o.jsx("textarea",{value:en(f,$.id),onChange:R=>y(V=>({...V,[$.id]:R.target.value})),"aria-label":$.prompt,placeholder:"Write a brief answer..."})]},$.id)),o.jsxs("div",{className:"activity-toolbar",children:[o.jsx("span",{className:"status",children:"Saved answers can be reviewed by a lecturer before final marks."}),o.jsx("button",{className:"secondary-button",disabled:!C,onClick:()=>{const $=L.reduce((R,V)=>(R[V.id]=en(f,V.id),R),{});g("Short answer saved for review."),E(JSON.stringify($)),c(e,e.maxScore,e.maxScore)},children:"Save short answer"})]}),v?o.jsx("p",{className:"status success",children:v}):o.jsx(yt,{completed:s})]})}const fe=C=>J.filter($=>$.questionId===C),ae=(C,$)=>{y(R=>({...R,[C]:$}))},Je=(C,$,R,V)=>{y(B=>{const q=Ws(B,C,V);return q[$]=R,{...B,[C]:q}})},_=L.reduce((C,$)=>{const R=fe($.id);return C[$.id]=Us($,e)?Ws(f,$.id,R.length):en(f,$.id),C},{}),Y=ff(L,J,_),X=Y.score>=(e.minimumScore??e.maxScore),k=C=>{const $=_[C.id];if(Us(C,e)){const R=fe(C.id);return Array.isArray($)&&R.length>0&&$.length===R.length&&$.every(V=>V.trim().length>0)&&new Set($).size===$.length}return typeof $=="string"&&$.trim().length>0},M=L.length>0&&L.every(k)&&X,D=C=>{const $=fe(C.id);if(C.kind==="fillBlank"||e.kind==="fillBlank")return o.jsxs("fieldset",{children:[o.jsx("legend",{children:C.prompt}),o.jsx("input",{className:"blank-input",value:en(f,C.id),onChange:R=>ae(C.id,R.target.value),"aria-label":C.prompt,placeholder:"Type your answer"})]},C.id);if(C.kind==="matching"||e.kind==="matching")return o.jsxs("fieldset",{children:[o.jsx("legend",{children:C.prompt}),o.jsxs("select",{className:"match-select",value:en(f,C.id),onChange:R=>ae(C.id,R.target.value),"aria-label":`Match answer for ${C.prompt}`,children:[o.jsx("option",{value:"",children:"Choose matching answer"}),$.map(R=>o.jsx("option",{value:R.value,children:R.label},R.id))]})]},C.id);if(Us(C,e)){const R=Ws(f,C.id,$.length),V=new Set(R.filter(B=>B.length>0));return o.jsxs("fieldset",{children:[o.jsx("legend",{children:C.prompt}),o.jsx("div",{className:"timeline-slots",children:$.map((B,q)=>o.jsxs("label",{children:[o.jsx("span",{children:e.kind==="timeline"?`Timeline ${q+1}`:`Position ${q+1}`}),o.jsxs("select",{value:R[q]??"",onChange:le=>Je(C.id,q,le.target.value,$.length),"aria-label":`${C.prompt} position ${q+1}`,children:[o.jsx("option",{value:"",children:"Choose item"}),$.map(le=>o.jsx("option",{value:le.value,disabled:V.has(le.value)&&R[q]!==le.value,children:le.label},le.id))]})]},`${C.id}-slot-${q+1}`))})]},C.id)}return o.jsxs("fieldset",{children:[o.jsx("legend",{children:C.prompt}),$.map(R=>o.jsxs("label",{className:"choice-row",children:[o.jsx("input",{type:"radio",name:C.id,value:R.value,checked:en(f,C.id)===R.value,onChange:()=>ae(C.id,R.value)}),R.label]},R.id))]},C.id)};return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(cn,{size:20})]}),o.jsx("p",{children:e.instructions}),L.map(D),o.jsxs("div",{className:"activity-toolbar",children:[o.jsxs("span",{className:"status",children:["Score: ",Y.score,"/",Y.maxScore]}),o.jsx("button",{className:"secondary-button",disabled:!M,onClick:()=>{O(_,Y.score,Y.maxScore),c(e,Y.score,Y.maxScore)},children:"Submit answers"})]}),o.jsx(yt,{completed:s})]})},If=({content:e,completed:t,onCompleteContent:n})=>{const r=e.videoCheckpoint,i=Od(e.url),s=S.useRef(null),a=S.useRef(null),[l,c]=S.useState("loading"),[u,h]=S.useState(!1),[f,y]=S.useState(!1),[v,g]=S.useState("intro"),[b,T]=S.useState(0),[m,d]=S.useState(!1),[p,w]=S.useState({}),N=(r==null?void 0:r.id)??"",I=(r==null?void 0:r.timeSeconds)??0,P=(r==null?void 0:r.durationSeconds)??0,E=S.useCallback(()=>{c("loading"),T(k=>k+1)},[]),O=S.useCallback(()=>{s.current!==null&&(window.clearTimeout(s.current),s.current=null)},[]),L=S.useCallback(()=>{a.current!==null&&(window.clearTimeout(a.current),a.current=null)},[]),J=S.useCallback(()=>{O(),L(),d(!1),c("ready"),h(!0)},[O,L]),fe=S.useCallback(()=>{L(),n(e.id)},[L,e.id,n]);if(S.useEffect(()=>{if(!(!r||!i))return O(),L(),y(!1),h(!1),g("intro"),T(k=>k+1),w({}),d(!1),c("loading"),s.current=window.setTimeout(J,I*1e3),()=>{O(),L()}},[r,N,I,O,L,J,i]),S.useEffect(()=>{if(!r||!f||t)return;const k=P-I;if(!(k<=0))return a.current=window.setTimeout(fe,k*1e3+1500),()=>{L()}},[r,P,I,L,fe,t,f]),!r||!i)return o.jsxs("div",{className:"video-placeholder",children:[o.jsx(dt,{size:42}),o.jsx("span",{children:"YouTube checkpoint video is awaiting a valid URL and quiz."})]});const ae=r.questions.every(k=>!!p[k.id]),Je=v==="resume"?Math.ceil(I+1):0,_=new URLSearchParams({autoplay:"1",modestbranding:"1",mute:"1",playsinline:"1",rel:"0",start:String(Je)}),Y=`${Sf}/embed/${i}?${_.toString()}`,X=()=>{d(!0),ae&&(y(!0),h(!1),g("resume"),c("loading"),T(k=>k+1))};return o.jsxs("div",{className:"checkpoint-video-shell",children:[e.body?o.jsx("p",{children:e.body}):null,o.jsxs("div",{className:"youtube-frame-wrap",children:[o.jsx("div",{className:"youtube-frame-slot","aria-label":e.title,children:u&&!f?o.jsxs("div",{className:"video-placeholder",children:[o.jsx(Ld,{size:42}),o.jsx("span",{children:"Video paused for checkpoint quiz."})]}):o.jsx("iframe",{title:e.title,src:Y,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowFullScreen:!0,loading:"eager",referrerPolicy:"strict-origin-when-cross-origin",onLoad:()=>c("ready")},`${i}-${v}-${b}`)}),u&&!f?o.jsxs("div",{className:"video-blocker",role:"status","aria-live":"polite",children:[o.jsx(ms,{size:24}),o.jsx("span",{children:"Complete the checkpoint quiz pop-up to continue the video."})]}):null]}),o.jsxs("div",{className:"video-state-row",children:[o.jsx("span",{className:t?"status success":"status",children:t?"Video step complete.":f?"Finish the remaining video segment to complete this step.":`Checkpoint quiz opens at ${Fd(r.timeSeconds)}.`}),l==="loading"?o.jsx("span",{className:"status",children:"Loading YouTube player..."}):null,!u&&!t?o.jsx("button",{className:"secondary-button",type:"button",onClick:E,children:f?"Start remaining video":"Start video"}):null,f&&!t?o.jsx("button",{className:"secondary-button",type:"button",onClick:fe,children:"I finished the video"}):null]}),u?o.jsx("div",{className:"checkpoint-modal-backdrop",role:"presentation",children:o.jsxs("section",{className:"checkpoint-quiz checkpoint-modal",role:"dialog","aria-modal":"true","aria-live":"polite","aria-labelledby":`${r.id}-title`,children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h4",{id:`${r.id}-title`,children:r.title}),o.jsx(cn,{size:19})]}),o.jsx("p",{className:"checkpoint-intro",children:"Answer each question to continue the video. Feedback appears as you choose."}),r.questions.map(k=>{const M=p[k.id],D=M===k.correctAnswer;return o.jsxs("article",{className:"checkpoint-question",role:"group","aria-labelledby":`${k.id}-prompt`,children:[o.jsx("p",{className:"checkpoint-prompt",id:`${k.id}-prompt`,children:k.prompt}),o.jsx("div",{className:"checkpoint-choice-list",children:k.choices.map((W,C)=>{const $=String.fromCharCode(65+C);return o.jsxs("label",{className:"choice-row",children:[o.jsx("input",{type:"radio",name:k.id,value:W,checked:M===W,onChange:()=>w(R=>({...R,[k.id]:W}))}),o.jsxs("span",{children:[o.jsxs("strong",{children:[$,"."]})," ",W]})]},W)})}),M?o.jsx("p",{className:D?"quiz-feedback success":"quiz-feedback error",children:D?k.feedback:"Not quite. Review the scenario and compare your answer with the main idea before you continue."}):null]},k.id)}),m&&!ae?o.jsx("p",{className:"status error",children:"Answer every question before continuing."}):null,o.jsx("button",{className:"primary-button",disabled:!ae,onClick:X,children:"Continue video"})]})}):null]})},Tf=e=>e.kind==="video"?"Mark video complete":e.kind==="webLink"?"Mark link reviewed":e.kind==="download"?"Mark download reviewed":"Continue",lc={consumer:"muffin",producer:"robusta",government:"freeTrade"},Bs={consumer:{muffin:"Coffee + Muffin (R49)",latte:"Fancy Latte (R45)"},producer:{robusta:"Robusta Beans",arabica:"Arabica Beans"},government:{freeTrade:"Free Trade",importTax:"Import Tax"}},qs=e=>`/Faithonomics/${e.replace(/^\/+/,"")}`,cc={consumer:{still:qs("assets/simulator-thabo-static.gif"),motion:"https://static.wixstatic.com/media/7638b6_63ddf056c7a84471b430693d65decee9~mv2.gif"},producer:{still:qs("assets/simulator-johan-static.gif"),motion:"https://static.wixstatic.com/media/7638b6_958741e949ae4756bd69a76fa52c3b98~mv2.gif"},government:{still:qs("assets/simulator-government-static.gif"),motion:"https://static.wixstatic.com/media/7638b6_ead4d59a26914e5083ba3de1a0721cc3~mv2.gif"}},Ef=["Micro","Meso","Macro"],Pf={Micro:["thabo","pricePressure"],Meso:["johan","fairnessTrust"],Macro:["farmer","government"]},uc="https://static.wixstatic.com/media/7638b6_f5c6de8175f94568906e6da8e8076dbf~mv2.png",vn={farmer:{happy:"https://static.wixstatic.com/media/7638b6_573af9fe2b7f41b9b625a413d3bf77c1~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_1a280fbd8cec49aea5b37ef82a6b6028~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_1a280fbd8cec49aea5b37ef82a6b6028~mv2.png"},johan:{happy:"https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png"},thabo:{happy:uc,neutral:uc,unsatisfied:"https://static.wixstatic.com/media/7638b6_873ba6be814f4d768cbf56339c2f8b7a~mv2.png"},fairnessTrust:{happy:"https://static.wixstatic.com/media/7638b6_324c44a8162448c5b444d9e0843f1766~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_a936d246f0e64f6c907f64e3ecacfd7c~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_4f4e7890783c40689dbd497826b690bd~mv2.png"},pricePressure:{happy:"https://static.wixstatic.com/media/7638b6_519de2e908a2420aa76a24bd372094d3~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_caa1a4b61e0a45da957521ad88d85073~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_caa1a4b61e0a45da957521ad88d85073~mv2.png"},government:{happy:"https://static.wixstatic.com/media/7638b6_35bf49a6a16741b9b72bf63e87f8f8d1~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_10e58b2c5aa34625aaccd294f2a3f1c4~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_a13ba433beb149349f07acd4ffea114d~mv2.png"}},dc={happy:"Happy",neutral:"Neutral",unsatisfied:"Unsatisfied"};function Hs({ariaLabel:e,value:t,options:n,theme:r,onChange:i}){const a=n.findIndex(c=>c.value===t)===1?1:0,l=n[a];return o.jsxs("div",{className:`simulator-choice-slider ${r}`,"data-position":a,children:[o.jsxs("div",{className:"simulator-slider-guidance",children:[o.jsx("span",{children:"Tap a block to change"}),o.jsx("strong",{children:l.label})]}),o.jsx("div",{className:"simulator-slider-options",role:"group","aria-label":e,children:n.map((c,u)=>o.jsxs("button",{type:"button",className:u===a?"active":"",onClick:()=>i(c.value),"aria-pressed":u===a,children:[o.jsx("span",{children:c.label}),o.jsx("small",{children:c.description})]},c.value))})]})}const di=e=>e>=75?"happy":e>=45?"neutral":"unsatisfied",Af=e=>e<=35?"happy":e<=65?"neutral":"unsatisfied",Lf=e=>{let t="",n="",r=0,i=0,s=0;e.consumer==="muffin"&&e.producer==="robusta"?(t="Basic Needs & Business Wants",n="Thabo chooses the coffee and muffin because he needs food before work. Johan chooses cheaper Robusta beans because he wants to keep more money in the business. Both are making choices between needs, wants, and limited resources.",r=75,i=90,s=55):e.consumer==="latte"&&e.producer==="arabica"?(t="Quality and Experience",n="Thabo spends his money on a fancy latte because he wants something special. Johan buys better Arabica beans so the coffee tastes smoother. He earns less profit, but the shop feels more honest and careful.",r=90,i=62,s=82):e.consumer==="latte"&&e.producer==="robusta"?(t="Paying for Quality, Getting Cheap",n="Thabo pays for a premium latte, hoping for a good experience. Johan uses cheaper beans to make more profit. Johan may earn more today, but Thabo may feel cheated if the coffee tastes flat.",r=45,i=88,s=35):(t="Mismatched Priorities",n="Thabo just wants basic food to fill him up, but Johan spends extra money on fancy beans. Johan is trying to offer quality, but he might lose money if everyday customers only want the cheapest option.",r=68,i=48,s=64);const a=e.government==="freeTrade"?"Free Trade":"Government Import Tax",l=e.government==="freeTrade"?28:82,c=e.government==="freeTrade"?18:72,u=e.government==="freeTrade"?r:Math.max(20,r-18),h=e.government==="freeTrade"?i:Math.max(20,i-16),f=e.government==="freeTrade"?s:Math.min(95,s+10),y=e.government==="freeTrade"?55:80,v=100-c,g=di(u),b=di(h),T=di(l),m=di(f),d=Af(c),p=e.government==="freeTrade"?"neutral":"happy",w=e.government==="freeTrade"?"The government keeps trade free. Prices stay low for Thabo, and Johan can buy cheap imported beans. This helps the coffee shop, but local South African farmers may struggle to compete with cheap imports.":"The government adds an import tax. Johan's beans now cost more, so he may raise prices. Thabo's R50 may not stretch as far, but local farmers get more protection.";return{headline:t,policyLabel:a,story:n,policyImpact:w,theologicalLens:"Does this market state treat humans merely as consumers and producers, or as image-bearers of the divine?",scaleAnalysis:[{scale:"Micro",title:"Thabo's daily life",body:e.consumer==="muffin"?"At the personal level, Thabo is trying to use limited money for food, energy, and good value before work.":"At the personal level, Thabo chooses experience and taste, but must still ask whether the choice serves his real day well."},{scale:"Meso",title:"Johan's business and community",body:e.producer==="robusta"?"At the shop level, Johan protects profit, but the quality and trust relationship with customers may carry pressure.":"At the shop level, Johan invests in quality, which can build trust, but it reduces the money left after costs."},{scale:"Macro",title:"Policy and wider society",body:e.government==="freeTrade"?"At the wider policy level, open trade keeps prices lower, yet local farmers carry more risk.":"At the wider policy level, the import tax protects local farmers, yet customers and small shops feel higher prices."}],assessments:[{id:"thabo",category:"Thabo's satisfaction",status:g,value:u,explanation:g==="happy"?"Thabo feels that his R50 gives him good value for the day ahead.":g==="neutral"?"Thabo receives part of what he needs, but price, taste, or fullness still feels imperfect.":"Thabo feels the choice does not stretch his limited money far enough.",iconUrl:vn.thabo[g]},{id:"johan",category:"Johan's business satisfaction",status:b,value:h,explanation:b==="happy"?"Johan feels the choice protects his profit and keeps the shop moving.":b==="neutral"?"Johan can still trade, but quality, costs, or customer trust creates tension.":"Johan feels squeezed because the business choice may not cover his costs well.",iconUrl:vn.johan[b]},{id:"farmer",category:"Farmer impact",status:T,value:l,explanation:T==="happy"?"Local farmers are protected from cheaper imports and have a better chance to compete.":T==="neutral"?"Local farmers receive some help, but still face pressure from the market.":"Local farmers struggle because cheaper imported beans make it hard to compete.",iconUrl:vn.farmer[T]},{id:"fairnessTrust",category:"Fairness and Trust",status:m,value:f,explanation:m==="happy"?"The choices feel honest and balanced, so trust can grow between buyer, seller, and community.":m==="neutral"?"The outcome has some balance, but one group still carries a noticeable cost.":"The outcome feels unfair because one person benefits while another carries too much loss.",iconUrl:vn.fairnessTrust[m]},{id:"pricePressure",category:"Price Pressure",status:d,value:v,explanation:d==="happy"?"Prices stay low enough for Thabo's R50 to cover his immediate need.":d==="neutral"?"Prices are manageable, but Thabo must still choose carefully.":"Prices place heavy pressure on Thabo, so his R50 may no longer be enough.",iconUrl:vn.pricePressure[d]},{id:"government",category:"Government",status:p,value:y,explanation:e.government==="freeTrade"?"The state keeps prices low and trade open, but leaves local farmers exposed.":"The state protects local farmers, but must explain why some prices may rise.",iconUrl:vn.government[p]}]}},_f=e=>{const t=new Map(e.scaleAnalysis.map(i=>[i.scale,i])),n=new Map(e.assessments.map(i=>[i.id,i])),r=Ef.map(i=>{const s=t.get(i),a=Pf[i].map(l=>n.get(l)).filter(l=>!!l);return!s||a.length===0?null:{id:`scale-${i.toLowerCase()}`,kind:"scale",scale:i,scaleTitle:s.title,scaleBody:s.body,assessments:a}}).filter(i=>i!==null);return[{id:"overview",kind:"overview",title:`${e.headline} + ${e.policyLabel}`,body:e.story,secondaryBody:e.policyImpact},...r]},$f=({content:e,completed:t,onCompleteContent:n})=>{const[r,i]=S.useState(lc),[s,a]=S.useState(!1),[l,c]=S.useState(0),[u,h]=S.useState(!1),[f,y]=S.useState(!1),[v,g]=S.useState({}),b=S.useRef(lc),T=S.useRef({}),m=Lf(r),d=_f(m),p=s?d[l]??null:null,w=l>0,N=l<d.length-1,I=l>=d.length-1,P=S.useCallback(_=>{const Y=T.current[_];Y!==void 0&&window.clearTimeout(Y);const X=Date.now();g(k=>({...k,[_]:X})),T.current[_]=window.setTimeout(()=>{g(k=>{if(k[_]!==X)return k;const M={...k};return delete M[_],M}),delete T.current[_]},2200)},[]),E=_=>{Object.keys(_).some(X=>_[X]!==void 0&&_[X]!==r[X])&&(i(X=>({...X,..._})),c(0),a(!1),h(!1),y(!1))},O=()=>{c(0),a(!0),h(!1),y(!1)},L=()=>{a(!1),h(!1)},J=()=>{h(!0),c(_=>Math.max(_-1,0))},fe=()=>{h(!0),c(_=>Math.min(_+1,d.length-1))};S.useEffect(()=>{var X;if(!s||u||I)return;const _=((X=d[l])==null?void 0:X.kind)==="overview"?3600:5600,Y=window.setTimeout(()=>{c(k=>Math.min(k+1,d.length-1))},_);return()=>window.clearTimeout(Y)},[s,u,l,d.length,I]),S.useEffect(()=>{s&&I&&y(!0)},[s,I]),S.useEffect(()=>{const _=b.current;Object.keys(r).filter(X=>_[X]!==r[X]).forEach(P),b.current=r},[r,P]),S.useEffect(()=>()=>{Object.values(T.current).forEach(_=>{_!==void 0&&window.clearTimeout(_)})},[]);const ae=_=>v[_]?cc[_].motion:cc[_].still,Je=_=>`${_}-${v[_]??"still"}`;return o.jsxs("section",{className:"lesson-block simulator-lesson-block",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(cn,{size:20})]}),o.jsxs("div",{className:"simulator-layout",children:[o.jsxs("div",{className:"simulator-controls",children:[o.jsx("blockquote",{children:"Thabo is walking to work. He has R50. He stops at Ubuntu Brews, owned by Johan."}),o.jsxs("section",{className:"simulator-control-card",children:[o.jsx("p",{className:"simulator-control-label consumer",children:"Thabo's Choice (The Consumer)"}),o.jsx("p",{children:"Thabo only has R50. What should he buy?"}),o.jsx(Hs,{ariaLabel:"Change Thabo's choice",theme:"consumer",value:r.consumer,onChange:_=>E({consumer:_}),options:[{value:"muffin",label:"Coffee + Muffin (R49)",description:"Fills you up"},{value:"latte",label:"Fancy Latte (R45)",description:"Tastes amazing"}]})]}),o.jsxs("section",{className:"simulator-control-card",children:[o.jsx("p",{className:"simulator-control-label producer",children:"Johan's Choice (The Business)"}),o.jsx("p",{children:"Johan must buy coffee beans. Which ones should he pick?"}),o.jsx(Hs,{ariaLabel:"Change Johan's choice",theme:"producer",value:r.producer,onChange:_=>E({producer:_}),options:[{value:"robusta",label:"Robusta Beans",description:"Cheaper, makes more profit"},{value:"arabica",label:"Arabica Beans",description:"Expensive, but tastes better"}]})]}),o.jsxs("section",{className:"simulator-control-card",children:[o.jsx("p",{className:"simulator-control-label government",children:"The Government's Choice"}),o.jsx("p",{children:"The state must decide how to manage imported goods."}),o.jsx(Hs,{ariaLabel:"Change the government's choice",theme:"government",value:r.government,onChange:_=>E({government:_}),options:[{value:"freeTrade",label:"Free Trade",description:"Keeps prices low, hurts local farmers"},{value:"importTax",label:"Import Tax",description:"Raises prices, protects local farmers"}]})]})]}),o.jsxs("section",{className:"simulator-lock-panel","aria-live":"polite",children:[o.jsx("p",{className:"simulator-control-label government",children:"Ready to analyse"}),o.jsx("h4",{children:"Lock your choice"}),o.jsx("p",{children:"Tap either choice block to change Thabo's, Johan's, and the government's choices before locking them. The selected block slides across so you can see what is active. Lock your choices, then use the Next button in the feedback to see how economics studies choices and how each choice has an impact. After the final feedback slide, close the feedback and press Continue below to unlock the next step."}),o.jsxs("div",{className:"simulator-choice-summary",children:[o.jsxs("div",{className:`simulator-choice-summary-item ${v.consumer?"is-animating":""}`,children:[o.jsx("img",{src:ae("consumer"),alt:"Thabo"},Je("consumer")),o.jsxs("span",{children:[o.jsx("strong",{children:"Thabo"}),Bs.consumer[r.consumer]]})]}),o.jsxs("div",{className:`simulator-choice-summary-item ${v.producer?"is-animating":""}`,children:[o.jsx("img",{src:ae("producer"),alt:"Johan"},Je("producer")),o.jsxs("span",{children:[o.jsx("strong",{children:"Johan"}),Bs.producer[r.producer]]})]}),o.jsxs("div",{className:`simulator-choice-summary-item ${v.government?"is-animating":""}`,children:[o.jsx("img",{src:ae("government"),alt:"Government"},Je("government")),o.jsxs("span",{children:[o.jsx("strong",{children:"Government"}),Bs.government[r.government]]})]})]}),o.jsx("button",{className:"primary-button",type:"button",onClick:O,children:"Lock your choice"})]})]}),p?o.jsx("div",{className:"simulator-response-deck-backdrop",role:"presentation",children:o.jsxs("section",{className:`simulator-response-slide ${p.kind==="scale"?p.scale.toLowerCase():"overview"}`,role:"dialog","aria-modal":"true","aria-live":"polite","aria-label":p.kind==="scale"?`${p.scale} economic effects`:"Economic effects overview",children:[o.jsx("button",{className:"simulator-response-close",type:"button",onClick:L,"aria-label":"Close impact response slides",children:o.jsx(qo,{size:18})}),o.jsx("p",{className:"simulator-response-kicker",children:"Your choice has the following economic effects"}),p.kind==="overview"?o.jsxs("div",{className:"simulator-response-overview",children:[o.jsx("span",{children:"What happens?"}),o.jsx("h5",{children:p.title}),o.jsx("p",{children:p.body}),o.jsxs("p",{children:[o.jsx("strong",{children:"Policy impact:"})," ",p.secondaryBody]})]}):o.jsxs("div",{className:"simulator-response-scale-slide",children:[o.jsxs("div",{className:"simulator-response-copy",children:[o.jsx("span",{className:"simulator-scale-pill",children:p.scale}),o.jsx("h5",{children:p.scaleTitle}),o.jsx("p",{children:p.scaleBody})]}),o.jsx("div",{className:"simulator-response-effect-grid",children:p.assessments.map(_=>o.jsxs("article",{className:`simulator-response-effect ${_.status}`,children:[o.jsx("img",{src:_.iconUrl,alt:`${_.category} ${dc[_.status].toLowerCase()} icon`}),o.jsxs("div",{children:[o.jsx("span",{className:`simulator-status-pill ${_.status}`,children:dc[_.status]}),o.jsx("h6",{children:_.category}),o.jsx("p",{children:_.explanation})]})]},_.id))})]}),o.jsxs("div",{className:"simulator-response-controls","aria-label":"Impact slide controls",children:[o.jsxs("button",{type:"button",className:"simulator-response-nav-button",onClick:J,disabled:!w,"aria-label":"Previous impact slide",children:[o.jsx(Ph,{size:18}),o.jsx("span",{children:"Back"})]}),o.jsxs("button",{type:"button",className:"simulator-response-nav-button timing",onClick:()=>h(_=>!_),"aria-label":u?"Resume slide timing":"Pause slide timing",children:[u?o.jsx(dt,{size:18}):o.jsx(Ld,{size:18}),o.jsx("span",{children:u?"Resume":"Pause"})]}),o.jsxs("button",{type:"button",className:"simulator-response-nav-button",onClick:fe,disabled:!N,"aria-label":"Next impact slide",children:[o.jsx("span",{children:"Next"}),o.jsx(Ah,{size:18})]})]}),o.jsx("div",{className:"simulator-response-dots","aria-label":"Impact slide progress",children:d.map((_,Y)=>o.jsx("span",{className:Y===l?"active":"","aria-label":_.kind==="scale"?`${_.scale} slide`:"What happens slide"},_.id))})]})}):null,o.jsxs("div",{className:"step-toolbar",children:[o.jsx("button",{className:f&&!t?"primary-button":"secondary-button",disabled:t||!f,onClick:()=>n(e.id),children:t?"Step complete":f?"Continue":"Review feedback first"}),o.jsx(yt,{completed:t})]})]})},zf=({content:e,completed:t,onCompleteContent:n,onContinueContent:r})=>{const i=e.completionRequired!==!1,s=kf(e.url),a=jf(e.url)?e.url:void 0,l=Od(a),c=e.kind==="video"&&!!(l&&e.videoCheckpoint),u=e.kind==="scripture"?o.jsx("blockquote",{children:e.body}):e.kind==="video"?c?o.jsx(If,{content:e,completed:t,onCompleteContent:n}):a&&!s?o.jsx("video",{className:"lesson-video",controls:!0,preload:"metadata",src:a,onEnded:()=>n(e.id)}):o.jsxs("div",{className:"video-placeholder",children:[o.jsx(dt,{size:42}),o.jsx("span",{children:s?"Wix Media video asset":"Video asset awaiting Wix Media URL"})]}):e.kind==="image"?a&&!s?o.jsx("img",{className:"lesson-image",src:a,alt:e.alt??e.title}):o.jsxs("div",{className:"resource-placeholder",children:[o.jsx(Qi,{size:34}),o.jsx("span",{children:s?"Wix Media image asset":"Image asset awaiting Wix Media URL"})]}):e.kind==="download"?o.jsxs("div",{className:"lesson-resource",children:[o.jsx("p",{children:e.body}),a?o.jsxs("a",{className:"resource-link",href:a,target:"_blank",rel:"noreferrer",children:[o.jsx(Bo,{size:18}),e.fileName??"Open download"]}):o.jsxs("div",{className:"resource-placeholder",children:[o.jsx(Bo,{size:34}),o.jsx("span",{children:s?"Wix Media document asset":"Document awaiting Wix Media URL"})]})]}):e.kind==="webLink"?o.jsxs("div",{className:"lesson-resource",children:[o.jsx("p",{children:e.body}),a?o.jsxs("a",{className:"resource-link",href:a,target:"_blank",rel:"noreferrer",children:[o.jsx(Zl,{size:18}),"Open learning link"]}):o.jsxs("div",{className:"resource-placeholder",children:[o.jsx(Zl,{size:34}),o.jsx("span",{children:"Web link awaiting Wix CMS URL"})]})]}):o.jsx("p",{children:e.body});return o.jsxs("section",{className:"lesson-block",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(Qi,{size:20})]}),u,i&&c?o.jsxs("div",{className:"step-toolbar",children:[o.jsx("button",{className:t?"primary-button":"secondary-button",disabled:!t,type:"button",onClick:r,children:t?"Continue":"Complete video first"}),o.jsx("span",{className:t?"status success":"status",children:t?"Video, quiz, and final video segment complete. Continue to the next step.":"This button activates after the checkpoint quiz and full video."}),o.jsx(yt,{completed:t})]}):i?o.jsxs("div",{className:"step-toolbar",children:[o.jsx("button",{className:"secondary-button",disabled:t,onClick:()=>n(e.id),children:t?"Step complete":Tf(e)}),o.jsx(yt,{completed:t})]}):o.jsx("p",{className:"status",children:"Optional resource."})]})},pc=({htmlBlock:e,completedContentIds:t,onCompleteContent:n})=>{var a;const r=S.useRef(null);S.useEffect(()=>{const l=c=>{var h;const u=Dd(c.data,[e.id]);if((u==null?void 0:u.type)==="classroom.activity.completed"&&n(u.activityId),typeof c.data=="object"&&c.data!==null){const f=c.data;f.type==="classroom.richPopup.opened"&&f.activityId===e.id&&((h=r.current)==null||h.scrollIntoView({behavior:"smooth",block:"start"}))}};return window.addEventListener("message",l),()=>window.removeEventListener("message",l)},[e.id,n]);const i=((a=e.body)==null?void 0:a.includes("data-rich-lesson-step"))??!1,s=()=>{var c;if(document.fullscreenElement){(c=document.exitFullscreen)==null||c.call(document);return}const l=r.current;l!=null&&l.requestFullscreen&&l.requestFullscreen().catch(()=>{})};return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(cn,{size:20})]}),i?o.jsxs("div",{className:"rich-lesson-frame-wrap",ref:r,children:[o.jsxs("button",{className:"rich-step-fullscreen-button",type:"button",onClick:s,"aria-label":`View ${e.title} fullscreen`,children:[o.jsx(_h,{size:16}),"Fullscreen"]}),o.jsx("iframe",{className:"rich-lesson-frame",title:e.title,sandbox:"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms",allow:"fullscreen",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin",srcDoc:sc(e.body??"",e.id)})]}):o.jsx("iframe",{title:e.title,sandbox:"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms",allow:"fullscreen",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin",srcDoc:sc(e.body??"",e.id)}),o.jsx(yt,{completed:t.includes(e.id)})]})},Rf=({identity:e,course:t,lessonId:n,activeLevelId:r,completedLessonIds:i,drawerOpen:s,setDrawerOpen:a,onSelectLesson:l,onCompleteLesson:c,onReturnToDashboard:u})=>{const h=hs(e),f=Ae.filter(x=>x.courseId===t.id&&(h||!r||x.moduleId===r)),y=xt.filter(x=>x.courseId===t.id&&(h||!r||x.id===r)),v=f.find(x=>x.id===n)??f[0],g=xf(t.id,e.memberId),[b,T]=S.useState(()=>g?mt.filter(x=>x.enrolmentId===g.id):[]),[m,d]=S.useState(Td),[p,w]=S.useState(Ed),[N,I]=S.useState(Pd),[P,E]=S.useState(0),[O,L]=S.useState(null),[J,fe]=S.useState(()=>{const x=new Set([...b.filter(z=>z.status==="completed").map(z=>z.lessonId),...i]);return f.filter(z=>x.has(z.id)).flatMap(z=>z.content.map(F=>F.id))});S.useEffect(()=>{E(0),L(null)},[v==null?void 0:v.id]),S.useEffect(()=>{if(!g){T([]);return}let x=!0;return $e.listProgress(g.id).then(z=>{x&&T(z)}).catch(()=>{x&&T(mt.filter(z=>z.enrolmentId===g.id))}),()=>{x=!1}},[g==null?void 0:g.id]),S.useEffect(()=>{if(!v)return;let x=!0;const z=Wo.filter(F=>F.lessonId===v.id&&F.kind==="discussion");return Promise.all([$e.listActivityCompletions(e.memberId,v.id),Promise.all(z.map(F=>$e.listDiscussionPosts(F.id)))]).then(async([F,pe])=>{if(!x)return;const se=pe.flat(),Ue=await Promise.all(se.map(be=>$e.listDiscussionReplies(be.id)));x&&(d(be=>[...be.filter(Te=>Te.lessonId!==v.id||Te.memberId!==e.memberId),...F]),w(be=>[...be.filter(Te=>!z.some(Yn=>Yn.id===Te.activityId)),...se]),I(be=>[...be.filter(Te=>!se.some(Yn=>Yn.id===Te.postId)),...Ue.flat()]))}).catch(()=>{}),()=>{x=!1}},[e.memberId,v==null?void 0:v.id]),S.useEffect(()=>{if(!v)return;const x=m.filter(z=>z.memberId===e.memberId&&z.lessonId===v.id&&z.completed&&v.content.some(F=>F.id===z.activityId)).map(z=>z.activityId);x.length>0&&fe(z=>Array.from(new Set([...z,...x])))},[m,e.memberId,v]);const ae=[...b];for(const x of i)ae.some(z=>z.lessonId===x)||ae.push({id:`local-progress-${x}`,enrolmentId:(g==null?void 0:g.id)??"local-enrolment",courseId:t.id,lessonId:x,memberId:e.memberId,status:"completed",percent:100,lastActivityAt:new Date().toISOString(),completedAt:new Date().toISOString()});const Je=h?f.map(x=>({lessonId:x.id,locked:!1})):g?Wa(f,ae,g):[],_=new Map(Je.map(x=>[x.lessonId,x.locked])),Y=v?Wo.filter(x=>x.lessonId===v.id):[],X=Y.filter(x=>!x.contentStepId),k=m.filter(x=>x.memberId===e.memberId),M=v?Uh(v,Y,k,J):{allowed:!1,completed:0,required:0},D=S.useCallback((x,z=x.maxScore,F=x.maxScore)=>{const pe={activityId:x.id,memberId:e.memberId,lessonId:x.lessonId,completed:!0,score:z,maxScore:F,completedAt:new Date().toISOString()};d(se=>{const Ue=se.findIndex(be=>be.activityId===x.id&&be.memberId===e.memberId);return Ue===-1?[...se,pe]:se.map((be,Te)=>Te===Ue?pe:be)}),$e.saveActivityCompletion(pe).catch(()=>{})},[e.memberId]),W=S.useCallback(x=>{if(g){const z=new Date().toISOString(),F={id:`progress-${g.id}-${x.id}`,enrolmentId:g.id,courseId:t.id,lessonId:x.id,memberId:e.memberId,status:"completed",percent:100,lastActivityAt:z,completedAt:z};T(pe=>[...pe.filter(se=>se.id!==F.id&&se.lessonId!==x.id),F]),$e.saveProgress(F).catch(()=>{})}c(x.id)},[t.id,g,e.memberId,c]),C=S.useCallback(x=>{const z=(v==null?void 0:v.content.findIndex(se=>se.id===x))??-1,F=(v==null?void 0:v.content.length)??0,pe=(v==null?void 0:v.id)==="level-1-session-1-the-daily-grind"&&z>=0&&z===F-1;if(fe(se=>se.includes(x)?se:[...se,x]),v){const se={activityId:x,memberId:e.memberId,lessonId:v.id,completed:!0,score:5,maxScore:5,completedAt:new Date().toISOString()};d(Ue=>{const be=Ue.findIndex(Te=>Te.activityId===x&&Te.memberId===e.memberId);return be===-1?[...Ue,se]:Ue.map((Te,Yn)=>Yn===be?se:Te)}),$e.saveActivityCompletion(se).catch(()=>{})}if(pe&&v){W(v),u();return}z>=0&&z<((v==null?void 0:v.content.length)??0)-1&&E(z+1)},[e.memberId,v,u,W]),$=S.useCallback((x,z)=>{const F={id:`post-${x.id}-${Date.now()}`,activityId:x.id,memberId:e.memberId,authorName:e.displayName,body:z,createdAt:new Date().toISOString()};w(pe=>[...pe,F]),$e.saveDiscussionPost(F).catch(()=>{})},[e.displayName,e.memberId]),R=S.useCallback((x,z)=>{const F={id:`reply-${x.id}-${Date.now()}`,postId:x.id,memberId:e.memberId,authorName:e.displayName,body:z,createdAt:new Date().toISOString()};I(pe=>[...pe,F]),$e.saveDiscussionReply(F).catch(()=>{})},[e.displayName,e.memberId]);if(!v)return o.jsx("main",{className:"empty-state",children:"No session is available."});const V=h?-1:v.content.findIndex(x=>x.completionRequired!==!1&&!J.includes(x.id)),B=V===-1?v.content:v.content.slice(0,V+1),q=v.content.length-B.length,le=h||V===-1,Oe=B.length===0?-1:Math.min(P,B.length-1),Br=Oe>=0?B[Oe]:void 0,qr=Oe>0,H=Oe>=0&&Oe<B.length-1,Lt=()=>{E(x=>Math.min(B.length-1,x+1))},Jn=()=>{M.allowed&&W(v)},Hr=x=>{const z=Y.find(F=>F.contentStepId===x.id);if(x.id.endsWith("-ordinary-business-life"))return o.jsx($f,{content:x,completed:J.includes(x.id),onCompleteContent:C},x.id);if(x.kind==="customHtml"&&z){const F=k.some(Ue=>Ue.activityId===z.id&&Ue.completed),pe=J.includes(x.id),se=O===z.id;return o.jsxs("div",{className:"linked-step-activity",children:[o.jsx(pc,{htmlBlock:x,completedContentIds:J,onCompleteContent:C}),o.jsxs("section",{className:"discussion-launch-panel","aria-label":"Open discussion forum activity",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Forum activity"}),o.jsx("h3",{children:z.title}),o.jsx("p",{children:"Click the image to open the forum. Add your own post, then reply to two course participants. When your contribution is complete, the Continue button will unlock."})]}),o.jsxs("button",{className:"discussion-image-button",type:"button",onClick:()=>L(z.id),"aria-label":`Open ${x.title} forum`,children:[o.jsx("img",{src:Cf,alt:""}),o.jsx("span",{children:"Open discussion forum"})]}),o.jsxs("div",{className:"discussion-step-actions",children:[o.jsx("button",{className:F&&!pe?"primary-button":"secondary-button",type:"button",disabled:!F||pe,onClick:()=>C(x.id),children:pe?"Step complete":F?"Continue":"Complete discussion first"}),o.jsx("span",{className:F?"status success":"status",children:F?"Forum contribution complete. Press Continue to unlock the next step.":"Required: one post and replies to two course participants."})]})]}),se?o.jsxs("div",{className:"discussion-modal",role:"dialog","aria-modal":"true","aria-label":z.title,children:[o.jsx("button",{className:"discussion-modal-backdrop",type:"button","aria-label":"Close discussion forum",onClick:()=>L(null)}),o.jsxs("div",{className:"discussion-modal-card",children:[o.jsxs("button",{className:"discussion-modal-close",type:"button",onClick:()=>L(null),"aria-label":"Close discussion forum",children:[o.jsx(qo,{size:18}),"Close"]}),o.jsx("img",{className:"discussion-popup-hero",src:Nf,alt:""}),o.jsx(ac,{activity:z,courseId:t.id,lessonId:v.id,enrolment:g,identity:e,completed:F,discussionPosts:p,discussionReplies:N,onComplete:(Ue,be,Te)=>{D(Ue,be,Te)},onAddPost:$,onAddReply:R})]})]}):null]},x.id)}return x.kind==="customHtml"?o.jsx(pc,{htmlBlock:x,completedContentIds:J,onCompleteContent:C},x.id):o.jsx(zf,{content:x,completed:J.includes(x.id),onCompleteContent:C,onContinueContent:Lt},x.id)};return o.jsxs("main",{className:"lesson-layout",children:[o.jsxs("div",{className:s?"mobile-drawer open":"mobile-drawer",children:[o.jsx("button",{className:"close-drawer",onClick:()=>a(!1),"aria-label":"Close session list",children:o.jsx(qo,{size:19})}),o.jsx(oc,{courseLessons:f,courseModules:y,activeLessonId:v.id,lockStates:_,onSelect:x=>{l(x),a(!1)}})]}),o.jsx(oc,{courseLessons:f,courseModules:y,activeLessonId:v.id,lockStates:_,onSelect:l}),o.jsxs("article",{className:"lesson-main",children:[o.jsxs("button",{className:"drawer-trigger",onClick:()=>a(!0),children:[o.jsx($h,{size:18}),"Sessions"]}),o.jsx("p",{className:"eyebrow",children:t.title}),o.jsx("h2",{children:v.title}),o.jsx("p",{className:"lesson-summary",children:v.summary}),v.imageUrl?o.jsx("figure",{className:"lesson-artwork",children:o.jsx("img",{src:v.imageUrl,alt:v.imageAlt??""})}):null,o.jsxs("section",{className:"lesson-carousel","aria-label":"Lesson steps",children:[o.jsxs("div",{className:"lesson-carousel-header",children:[o.jsxs("div",{children:[o.jsxs("span",{className:"carousel-step-count",children:["Step ",Oe+1," of ",v.content.length]}),q>0?o.jsxs("p",{children:[q," ",q===1?"step is":"steps are"," locked until you complete this step."]}):o.jsx("p",{children:"All lesson steps are unlocked."})]}),o.jsxs("div",{className:"carousel-controls",children:[o.jsx("button",{className:"carousel-nav-button",type:"button",disabled:!qr,onClick:()=>E(x=>Math.max(0,x-1)),children:"Previous"}),o.jsx("button",{className:"carousel-nav-button",type:"button",disabled:!H,onClick:()=>E(x=>Math.min(B.length-1,x+1)),children:"Next"})]})]}),o.jsx("div",{className:"carousel-step-tabs","aria-label":"Unlocked lesson step navigation",children:B.map((x,z)=>{const F=J.includes(x.id);return o.jsxs("button",{className:["carousel-step-tab",z===Oe?"active":"",F?"complete":""].filter(Boolean).join(" "),type:"button",onClick:()=>E(z),"aria-current":z===Oe?"step":void 0,children:[o.jsx("span",{className:"carousel-step-number",children:z+1}),o.jsx("span",{className:"carousel-step-title",children:x.title.replace(/^Step \d+:\s*/,"")})]},x.id)})}),o.jsx("div",{className:"lesson-carousel-stage",children:Br?Hr(Br):null})]}),le?X.map(x=>o.jsx(ac,{activity:x,courseId:t.id,lessonId:v.id,enrolment:g,identity:e,completed:k.some(z=>z.activityId===x.id&&z.completed),discussionPosts:p,discussionReplies:N,onComplete:D,onAddPost:$,onAddReply:R},x.id)):X.length>0?o.jsxs("section",{className:"activity-panel locked-activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:"Activities locked"}),o.jsx(ms,{size:20})]}),o.jsx("p",{children:"Complete all required lesson steps before opening quizzes, discussions, or submissions."})]}):null,o.jsxs("section",{className:"completion-gate",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Session completion"}),o.jsxs("span",{children:[M.completed,"/",M.required," required steps and activities complete"]})]}),o.jsx("button",{className:"primary-button",disabled:!M.allowed,onClick:Jn,children:"Complete session"}),i.has(v.id)?o.jsx("p",{className:"status success",children:"Session completed."}):null]})]})]})},Vs=[{id:"course-builder",label:"Course builder",description:"Create courses, levels, sessions and teaching blocks."},{id:"submissions",label:"Submissions",description:"Review written responses and file submissions."},{id:"ai-review",label:"AI review queue",description:"Draft marks awaiting lecturer approval."},{id:"inactive",label:"Inactive learners",description:"Learners who need a reminder or pastoral follow-up."}],Gs=[["users","Users and roles","Assign learner, lecturer and administrator permissions."],["courses","Courses and lecturers","Connect levels, sessions and assigned lecturers."],["payments","Payments and access","Verify Wix orders, free access and enrolment codes."],["certificates","Certificates","Control certificate templates and issuing rules."],["codes","Enrolment codes","Create, pause and audit private access codes."],["ai","AI usage","Monitor usage limits and lecturer approval records."],["automations","Automation triggers","Connect welcome, reminder and completion emails."],["audit","Audit records","Review sensitive actions and export compliance logs."]],Mf=()=>{const t=[["Learner","Course","Level","Session","Status"],...Ae.map(s=>{var c,u;const a=xt.find(h=>h.id===s.moduleId),l=((c=mt.find(h=>h.lessonId===s.id))==null?void 0:c.status)??"notStarted";return[ye.learner.displayName,((u=ut[0])==null?void 0:u.title)??"Faithonomics",(a==null?void 0:a.title)??"",s.title,l]})].map(s=>s.map(a=>`"${String(a).replace(/"/g,'""')}"`).join(",")).join(`
`),n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download="faithonomics-progress-report.csv",document.body.append(i),i.click(),i.remove(),URL.revokeObjectURL(r)},Df=()=>{var c;const[e,t]=S.useState("course-builder"),[n,r]=S.useState(""),[i,s]=S.useState([{id:"draft-faithonomics-core",title:((c=ut[0])==null?void 0:c.title)??"Faithonomics Course",levelCount:xt.length,sessionCount:Ae.length,status:"Published"}]),a=Vs.find(u=>u.id===e)??Vs[0],l=()=>{s(u=>[...u,{id:`draft-course-${Date.now()}`,title:`New Faithonomics Course ${u.length+1}`,levelCount:0,sessionCount:0,status:"Draft"}]),r("Draft course created. Add levels, sessions, media and activities before publishing.")};return o.jsxs("main",{className:"content-shell",children:[o.jsxs("section",{className:"dashboard-intro",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Lecturer workspace"}),o.jsx("h2",{children:(a==null?void 0:a.label)??"Course builder"})]}),o.jsxs("button",{className:"primary-button",onClick:Mf,children:[o.jsx(Bo,{size:18}),"Export CSV"]})]}),o.jsx("section",{className:"work-grid","aria-label":"Lecturer tools",children:Vs.map(u=>o.jsxs("button",{className:e===u.id?"work-card tool-card active":"work-card tool-card",onClick:()=>{t(u.id),r("")},children:[o.jsx("h3",{children:u.label}),o.jsx("p",{children:u.description})]},u.id))}),o.jsxs("section",{className:"workspace-panel",children:[e==="course-builder"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"panel-heading",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Builder"}),o.jsx("h3",{children:"Create or edit courses"})]}),o.jsx("button",{className:"primary-button",onClick:l,children:"Create course"})]}),o.jsx("div",{className:"builder-list",children:i.map(u=>o.jsxs("article",{children:[o.jsx("strong",{children:u.title}),o.jsx("span",{children:u.status}),o.jsxs("span",{children:[u.levelCount," levels"]}),o.jsxs("span",{children:[u.sessionCount," sessions"]})]},u.id))})]}):null,e==="submissions"?o.jsx("div",{className:"builder-list",children:Oa.map(u=>o.jsxs("article",{children:[o.jsx("strong",{children:u.status}),o.jsx("span",{children:u.responseText??"File submission"}),o.jsx("span",{children:u.submittedAt??"Draft"})]},u.id))}):null,e==="ai-review"?o.jsx("div",{className:"empty-state compact",children:"AI-assisted marks appear here until a lecturer approves or edits them."}):null,e==="inactive"?o.jsx("div",{className:"empty-state compact",children:"No inactive learners in the sample data. Reminder automations are ready to connect in Wix."}):null,n?o.jsx("p",{className:"status success",children:n}):null]})]})},Ff=()=>{const[e,t]=S.useState("users"),[n,r]=S.useState(""),i=Gs.find(([s])=>s===e)??Gs[0];return o.jsxs("main",{className:"content-shell",children:[o.jsxs("section",{className:"dashboard-intro",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Administration"}),o.jsx("h2",{children:"System controls"})]}),o.jsx("span",{className:"pill",children:"Backend enforced"})]}),o.jsx("section",{className:"admin-list","aria-label":"Administrator controls",children:Gs.map(([s,a])=>o.jsxs("button",{className:e===s?"active":"",onClick:()=>{t(s),r("")},children:[o.jsx(_d,{size:18}),a]},s))}),o.jsxs("section",{className:"workspace-panel",children:[o.jsxs("div",{className:"panel-heading",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Control panel"}),o.jsx("h3",{children:(i==null?void 0:i[1])??"Users and roles"})]}),o.jsx("button",{className:"primary-button",onClick:()=>r("System control saved for backend review."),children:"Save control"})]}),o.jsx("p",{children:(i==null?void 0:i[2])??"Manage system settings."}),o.jsxs("div",{className:"control-metrics",children:[o.jsxs("span",{children:[xt.length," levels"]}),o.jsxs("span",{children:[Ae.length," sessions"]}),o.jsxs("span",{children:[Oa.length," submissions"]})]}),n?o.jsx("p",{className:"status success",children:n}):null]})]})},Of=()=>{const e=()=>{const r=ut[0];if(!r)return[];const i=xt.filter(s=>s.courseId===r.id);return Ae.filter(s=>s.courseId===r.id).map(s=>{var a,l,c;return{learnerName:ye.learner.displayName,courseTitle:r.title,moduleTitle:((a=i.find(u=>u.id===s.moduleId))==null?void 0:a.title)??"Unassigned",lessonTitle:s.title,completionStatus:((l=mt.find(u=>u.lessonId===s.id))==null?void 0:l.status)??"notStarted",score:null,lastActivityAt:((c=mt.find(u=>u.lessonId===s.id))==null?void 0:c.lastActivityAt)??null}})},[t,n]=S.useState(e);return S.useEffect(()=>{var i;let r=!0;return $e.buildReportRows((i=ut[0])==null?void 0:i.id).then(s=>{r&&n(s)}).catch(()=>{r&&n(e())}),()=>{r=!1}},[]),o.jsxs("main",{className:"content-shell",children:[o.jsx("section",{className:"dashboard-intro",children:o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Reports"}),o.jsx("h2",{children:"Learner progress"})]})}),o.jsxs("div",{className:"report-table",role:"table","aria-label":"Progress report",children:[o.jsxs("div",{role:"row",className:"report-row head",children:[o.jsx("span",{children:"Learner"}),o.jsx("span",{children:"Level"}),o.jsx("span",{children:"Session"}),o.jsx("span",{children:"Status"})]}),t.map(r=>o.jsxs("div",{role:"row",className:"report-row",children:[o.jsx("span",{children:r.learnerName}),o.jsx("span",{children:r.moduleTitle}),o.jsx("span",{children:r.lessonTitle}),o.jsx("span",{children:r.completionStatus})]},`${r.learnerName}-${r.lessonTitle}`))]})]})},Uf=()=>{var d,p;const[e,t]=S.useState(ye.learner),[n,r]=S.useState("learner"),[i,s]=S.useState(((d=ut[0])==null?void 0:d.id)??""),[a,l]=S.useState(((p=Ae[0])==null?void 0:p.id)??""),[c,u]=S.useState(null),[h,f]=S.useState(null),[y,v]=S.useState(null),[g,b]=S.useState(()=>new Set(mt.filter(w=>w.status==="completed").map(w=>w.lessonId))),[T,m]=S.useState(!1);return{identity:e,setIdentity:t,view:n,setView:r,activeCourseId:i,setActiveCourseId:s,activeLessonId:a,setActiveLessonId:l,activeLevelId:c,setActiveLevelId:u,selectedLoginLevelId:h,setSelectedLoginLevelId:f,pendingIntroSlideshowLevelId:y,setPendingIntroSlideshowLevelId:v,completedLessonIds:g,setCompletedLessonIds:b,drawerOpen:T,setDrawerOpen:m}},Wf=()=>{const e=Uf(),t=ut.find(c=>c.id===e.activeCourseId)??ut[0],n=xt.find(c=>c.id===e.activeLevelId)??null,r=hs(e.identity),i=(c,u)=>{e.setActiveCourseId(c),e.setActiveLessonId(u),e.setView("lesson")},s=c=>{var h,f;const u=Ae.filter(y=>y.moduleId===c.moduleId).sort((y,v)=>y.sequence-v.sequence)[0];e.setIdentity(ye.learner),e.setActiveCourseId(((h=ut[0])==null?void 0:h.id)??""),e.setActiveLessonId((u==null?void 0:u.id)??((f=Ae[0])==null?void 0:f.id)??""),e.setActiveLevelId(c.moduleId),e.setSelectedLoginLevelId(null),e.setPendingIntroSlideshowLevelId(c.moduleId),e.setView("learner")},a=()=>{e.setActiveLevelId(null),e.setSelectedLoginLevelId(null),e.setPendingIntroSlideshowLevelId(null),e.setIdentity(ye.learner),e.setView("learner")},l=c=>{e.setCompletedLessonIds(u=>{const h=new Set(u);return h.add(c),h})};return e.activeLevelId?o.jsxs("div",{className:"app-shell",children:[o.jsx(Dh,{identity:e.identity,view:e.view,setView:e.setView,onIdentityChange:e.setIdentity,activeLevelTitle:r?"Staff preview: all levels":(n==null?void 0:n.title)??null,onLogout:a}),e.view==="learner"?o.jsx(df,{identity:e.identity,activeLevelId:e.activeLevelId,completedLessonIds:e.completedLessonIds,pendingIntroSlideshowLevelId:e.pendingIntroSlideshowLevelId,onIntroSlideshowHandled:()=>e.setPendingIntroSlideshowLevelId(null),onOpenLesson:i}):null,e.view==="lesson"&&t?o.jsx(Rf,{identity:e.identity,course:t,lessonId:e.activeLessonId,activeLevelId:e.activeLevelId,completedLessonIds:e.completedLessonIds,drawerOpen:e.drawerOpen,setDrawerOpen:e.setDrawerOpen,onSelectLesson:e.setActiveLessonId,onCompleteLesson:l,onReturnToDashboard:()=>e.setView("learner")}):null,e.view==="lecturer"?o.jsx(Df,{}):null,e.view==="admin"?o.jsx(Ff,{}):null,e.view==="reports"?o.jsx(Of,{}):null,o.jsxs("footer",{className:"site-footer",children:[o.jsx(Th,{size:18}),"Faithonomics Economic Discipleship"]})]}):o.jsx("div",{className:"app-shell",children:e.selectedLoginLevelId?o.jsx(mf,{initialModuleId:e.selectedLoginLevelId,onBack:()=>e.setSelectedLoginLevelId(null),onLogin:s}):o.jsx(lf,{onSelectLevel:e.setSelectedLoginLevelId})})},Ud=document.getElementById("root");if(!Ud)throw new Error("Root element was not found.");Qs.createRoot(Ud).render(o.jsx(op.StrictMode,{children:o.jsx(Wf,{})}));
