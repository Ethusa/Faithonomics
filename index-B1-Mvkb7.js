var Bu=Object.defineProperty;var Wu=(e,t,n)=>t in e?Bu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ce=(e,t,n)=>Wu(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Hu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mc={exports:{}},Kr={},hc={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),qu=Symbol.for("react.portal"),Vu=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),Qu=Symbol.for("react.profiler"),Ju=Symbol.for("react.provider"),Yu=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),Zu=Symbol.for("react.memo"),ep=Symbol.for("react.lazy"),Wa=Symbol.iterator;function tp(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gc=Object.assign,yc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||fc}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vc(){}vc.prototype=qn.prototype;function Vs(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||fc}var Gs=Vs.prototype=new vc;Gs.constructor=Vs;gc(Gs,qn.prototype);Gs.isPureReactComponent=!0;var Ha=Array.isArray,wc=Object.prototype.hasOwnProperty,Qs={current:null},bc={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,n){var i,r={},o=null,a=null;if(t!=null)for(i in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)wc.call(t,i)&&!bc.hasOwnProperty(i)&&(r[i]=t[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Fi,type:e,key:o,ref:a,props:r,_owner:Qs.current}}function np(e,t){return{$$typeof:Fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Js(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fi}function ip(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qa=/\/+/g;function go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ip(""+e.key):t.toString(36)}function pr(e,t,n,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Fi:case qu:a=!0}}if(a)return a=e,r=r(a),e=i===""?"."+go(a,0):i,Ha(r)?(n="",e!=null&&(n=e.replace(qa,"$&/")+"/"),pr(r,t,n,"",function(d){return d})):r!=null&&(Js(r)&&(r=np(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(qa,"$&/")+"/")+e)),t.push(r)),1;if(a=0,i=i===""?".":i+":",Ha(e))for(var l=0;l<e.length;l++){o=e[l];var c=i+go(o,l);a+=pr(o,t,n,c,r)}else if(c=tp(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=i+go(o,l++),a+=pr(o,t,n,c,r);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Vi(e,t,n){if(e==null)return e;var i=[],r=0;return pr(e,i,"","",function(o){return t.call(n,o,r++)}),i}function rp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},mr={transition:null},op={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:mr,ReactCurrentOwner:Qs};function kc(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Vi,forEach:function(e,t,n){Vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vi(e,function(){t++}),t},toArray:function(e){return Vi(e,function(t){return t})||[]},only:function(e){if(!Js(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=qn;U.Fragment=Vu;U.Profiler=Qu;U.PureComponent=Vs;U.StrictMode=Gu;U.Suspense=Xu;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=op;U.act=kc;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=gc({},e.props),r=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Qs.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)wc.call(t,c)&&!bc.hasOwnProperty(c)&&(i[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:Fi,type:e.type,key:r,ref:o,props:i,_owner:a}};U.createContext=function(e){return e={$$typeof:Yu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ju,_context:e},e.Consumer=e};U.createElement=xc;U.createFactory=function(e){var t=xc.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Ku,render:e}};U.isValidElement=Js;U.lazy=function(e){return{$$typeof:ep,_payload:{_status:-1,_result:e},_init:rp}};U.memo=function(e,t){return{$$typeof:Zu,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=mr.transition;mr.transition={};try{e()}finally{mr.transition=t}};U.unstable_act=kc;U.useCallback=function(e,t){return Ae.current.useCallback(e,t)};U.useContext=function(e){return Ae.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ae.current.useEffect(e,t)};U.useId=function(){return Ae.current.useId()};U.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ae.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};U.useRef=function(e){return Ae.current.useRef(e)};U.useState=function(e){return Ae.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Ae.current.useTransition()};U.version="18.3.1";hc.exports=U;var S=hc.exports;const sp=Hu(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=S,lp=Symbol.for("react.element"),cp=Symbol.for("react.fragment"),dp=Object.prototype.hasOwnProperty,up=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pp={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,t,n){var i,r={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(i in t)dp.call(t,i)&&!pp.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:lp,type:e,key:o,ref:a,props:r,_owner:up.current}}Kr.Fragment=cp;Kr.jsx=jc;Kr.jsxs=jc;mc.exports=Kr;var s=mc.exports,Jo={},Sc={exports:{}},Ge={},Cc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,M){var F=k.length;k.push(M);e:for(;0<F;){var B=F-1>>>1,C=k[B];if(0<r(C,M))k[B]=M,k[F]=C,F=B;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var M=k[0],F=k.pop();if(F!==M){k[0]=F;e:for(var B=0,C=k.length,z=C>>>1;B<z;){var R=2*(B+1)-1,V=k[R],W=R+1,H=k[W];if(0>r(V,F))W<C&&0>r(H,V)?(k[B]=H,k[W]=F,B=W):(k[B]=V,k[R]=F,B=R);else if(W<C&&0>r(H,F))k[B]=H,k[W]=F,B=W;else break e}}return M}function r(k,M){var F=k.sortIndex-M.sortIndex;return F!==0?F:k.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],d=[],h=1,f=null,y=3,v=!1,g=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(k){for(var M=n(d);M!==null;){if(M.callback===null)i(d);else if(M.startTime<=k)i(d),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(d)}}function w(k){if(b=!1,p(k),!g)if(n(c)!==null)g=!0,Y(N);else{var M=n(d);M!==null&&X(w,M.startTime-k)}}function N(k,M){g=!1,b&&(b=!1,m(E),E=-1),v=!0;var F=y;try{for(p(M),f=n(c);f!==null&&(!(f.expirationTime>M)||k&&!J());){var B=f.callback;if(typeof B=="function"){f.callback=null,y=f.priorityLevel;var C=B(f.expirationTime<=M);M=e.unstable_now(),typeof C=="function"?f.callback=C:f===n(c)&&i(c),p(M)}else i(c);f=n(c)}if(f!==null)var z=!0;else{var R=n(d);R!==null&&X(w,R.startTime-M),z=!1}return z}finally{f=null,y=F,v=!1}}var I=!1,P=null,E=-1,O=5,A=-1;function J(){return!(e.unstable_now()-A<O)}function fe(){if(P!==null){var k=e.unstable_now();A=k;var M=!0;try{M=P(!0,k)}finally{M?ae():(I=!1,P=null)}}else I=!1}var ae;if(typeof u=="function")ae=function(){u(fe)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,_=Je.port2;Je.port1.onmessage=fe,ae=function(){_.postMessage(null)}}else ae=function(){T(fe,0)};function Y(k){P=k,I||(I=!0,ae())}function X(k,M){E=T(function(){k(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Y(N))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(k){switch(y){case 1:case 2:case 3:var M=3;break;default:M=y}var F=y;y=M;try{return k()}finally{y=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,M){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var F=y;y=k;try{return M()}finally{y=F}},e.unstable_scheduleCallback=function(k,M,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,k){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=F+C,k={id:h++,callback:M,priorityLevel:k,startTime:F,expirationTime:C,sortIndex:-1},F>B?(k.sortIndex=F,t(d,k),n(c)===null&&k===n(d)&&(b?(m(E),E=-1):b=!0,X(w,F-B))):(k.sortIndex=C,t(c,k),g||v||(g=!0,Y(N))),k},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(k){var M=y;return function(){var F=y;y=M;try{return k.apply(this,arguments)}finally{y=F}}}})(Nc);Cc.exports=Nc;var mp=Cc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp=S,Ve=mp;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,xi={};function fn(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(xi[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=Object.prototype.hasOwnProperty,fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Va={},Ga={};function gp(e){return Yo.call(Ga,e)?!0:Yo.call(Va,e)?!1:fp.test(e)?Ga[e]=!0:(Va[e]=!0,!1)}function yp(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vp(e,t,n,i){if(t===null||typeof t>"u"||yp(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,i,r,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ys=/[\-:]([a-z])/g;function Ks(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ys,Ks);je[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ys,Ks);je[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ys,Ks);je[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,t,n,i){var r=je.hasOwnProperty(t)?je[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vp(t,n,r,i)&&(n=null),i||r===null?gp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var $t=hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),wn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),Zs=Symbol.for("react.strict_mode"),Ko=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),Ec=Symbol.for("react.context"),ea=Symbol.for("react.forward_ref"),Xo=Symbol.for("react.suspense"),Zo=Symbol.for("react.suspense_list"),ta=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Pc=Symbol.for("react.offscreen"),Qa=Symbol.iterator;function Kn(e){return e===null||typeof e!="object"?null:(e=Qa&&e[Qa]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,yo;function ai(e){if(yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yo=t&&t[1]||""}return`
`+yo+e}var vo=!1;function wo(e,t){if(!e||vo)return"";vo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),o=i.stack.split(`
`),a=r.length-1,l=o.length-1;1<=a&&0<=l&&r[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==o[l]){var c=`
`+r[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{vo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ai(e):""}function wp(e){switch(e.tag){case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return ai("Suspense");case 19:return ai("SuspenseList");case 0:case 2:case 15:return e=wo(e.type,!1),e;case 11:return e=wo(e.type.render,!1),e;case 1:return e=wo(e.type,!0),e;default:return""}}function es(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case wn:return"Portal";case Ko:return"Profiler";case Zs:return"StrictMode";case Xo:return"Suspense";case Zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ec:return(e.displayName||"Context")+".Consumer";case Tc:return(e._context.displayName||"Context")+".Provider";case ea:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ta:return t=e.displayName||null,t!==null?t:es(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return es(e(t))}catch{}}return null}function bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return es(t);case 8:return t===Zs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $c(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xp(e){var t=$c(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){e._valueTracker||(e._valueTracker=xp(e))}function Ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=$c(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ts(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ja(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _c(e,t){t=t.checked,t!=null&&Xs(e,"checked",t,!1)}function ns(e,t){_c(e,t);var n=Jt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?is(e,t.type,n):t.hasOwnProperty("defaultValue")&&is(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ya(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function is(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var li=Array.isArray;function $n(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function rs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ka(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(li(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function zc(e,t){var n=Jt(t.value),i=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ji,Rc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ji=Ji||document.createElement("div"),Ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kp=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(e){kp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pi[t]=pi[e]})});function Mc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pi.hasOwnProperty(e)&&pi[e]?(""+t).trim():t+"px"}function Fc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mc(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var jp=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ss(e,t){if(t){if(jp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function as(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ls=null;function na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cs=null,An=null,_n=null;function Za(e){if(e=Ui(e)){if(typeof cs!="function")throw Error(j(280));var t=e.stateNode;t&&(t=no(t),cs(e.stateNode,e.type,t))}}function Dc(e){An?_n?_n.push(e):_n=[e]:An=e}function Oc(){if(An){var e=An,t=_n;if(_n=An=null,Za(e),t)for(e=0;e<t.length;e++)Za(t[e])}}function Uc(e,t){return e(t)}function Bc(){}var bo=!1;function Wc(e,t,n){if(bo)return e(t,n);bo=!0;try{return Uc(e,t,n)}finally{bo=!1,(An!==null||_n!==null)&&(Bc(),Oc())}}function ji(e,t){var n=e.stateNode;if(n===null)return null;var i=no(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ds=!1;if(It)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{ds=!1}function Sp(e,t,n,i,r,o,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var mi=!1,Cr=null,Nr=!1,us=null,Cp={onError:function(e){mi=!0,Cr=e}};function Np(e,t,n,i,r,o,a,l,c){mi=!1,Cr=null,Sp.apply(Cp,arguments)}function Ip(e,t,n,i,r,o,a,l,c){if(Np.apply(this,arguments),mi){if(mi){var d=Cr;mi=!1,Cr=null}else throw Error(j(198));Nr||(Nr=!0,us=d)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function el(e){if(gn(e)!==e)throw Error(j(188))}function Tp(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return el(r),e;if(o===i)return el(r),t;o=o.sibling}throw Error(j(188))}if(n.return!==i.return)n=r,i=o;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=o;break}if(l===i){a=!0,i=r,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,i=r;break}if(l===i){a=!0,i=o,n=r;break}l=l.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function qc(e){return e=Tp(e),e!==null?Vc(e):null}function Vc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vc(e);if(t!==null)return t;e=e.sibling}return null}var Gc=Ve.unstable_scheduleCallback,tl=Ve.unstable_cancelCallback,Ep=Ve.unstable_shouldYield,Pp=Ve.unstable_requestPaint,de=Ve.unstable_now,$p=Ve.unstable_getCurrentPriorityLevel,ia=Ve.unstable_ImmediatePriority,Qc=Ve.unstable_UserBlockingPriority,Ir=Ve.unstable_NormalPriority,Ap=Ve.unstable_LowPriority,Jc=Ve.unstable_IdlePriority,Xr=null,wt=null;function _p(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Xr,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Rp,zp=Math.log,Lp=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(zp(e)/Lp|0)|0}var Yi=64,Ki=4194304;function ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tr(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=ci(l):(o&=a,o!==0&&(i=ci(o)))}else a=n&~r,a!==0?i=ci(a):o!==0&&(i=ci(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,o=t&-t,r>=o||r===16&&(o&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-lt(t),r=1<<n,i|=e[n],t&=~r;return i}function Mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fp(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-lt(o),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=Mp(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ps(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yc(){var e=Yi;return Yi<<=1,!(Yi&4194240)&&(Yi=64),e}function xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Di(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function Dp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-lt(n),o=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~o}}function ra(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-lt(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var Q=0;function Kc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xc,oa,Zc,ed,td,ms=!1,Xi=[],Ut=null,Bt=null,Wt=null,Si=new Map,Ci=new Map,Mt=[],Op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nl(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ci.delete(t.pointerId)}}function Zn(e,t,n,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Ui(t),t!==null&&oa(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Up(e,t,n,i,r){switch(t){case"focusin":return Ut=Zn(Ut,e,t,n,i,r),!0;case"dragenter":return Bt=Zn(Bt,e,t,n,i,r),!0;case"mouseover":return Wt=Zn(Wt,e,t,n,i,r),!0;case"pointerover":var o=r.pointerId;return Si.set(o,Zn(Si.get(o)||null,e,t,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ci.set(o,Zn(Ci.get(o)||null,e,t,n,i,r)),!0}return!1}function nd(e){var t=rn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Hc(n),t!==null){e.blockedOn=t,td(e.priority,function(){Zc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ls=i,n.target.dispatchEvent(i),ls=null}else return t=Ui(n),t!==null&&oa(t),e.blockedOn=n,!1;t.shift()}return!0}function il(e,t,n){hr(e)&&n.delete(t)}function Bp(){ms=!1,Ut!==null&&hr(Ut)&&(Ut=null),Bt!==null&&hr(Bt)&&(Bt=null),Wt!==null&&hr(Wt)&&(Wt=null),Si.forEach(il),Ci.forEach(il)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,ms||(ms=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Bp)))}function Ni(e){function t(r){return ei(r,e)}if(0<Xi.length){ei(Xi[0],e);for(var n=1;n<Xi.length;n++){var i=Xi[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Ut!==null&&ei(Ut,e),Bt!==null&&ei(Bt,e),Wt!==null&&ei(Wt,e),Si.forEach(t),Ci.forEach(t),n=0;n<Mt.length;n++)i=Mt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)nd(n),n.blockedOn===null&&Mt.shift()}var zn=$t.ReactCurrentBatchConfig,Er=!0;function Wp(e,t,n,i){var r=Q,o=zn.transition;zn.transition=null;try{Q=1,sa(e,t,n,i)}finally{Q=r,zn.transition=o}}function Hp(e,t,n,i){var r=Q,o=zn.transition;zn.transition=null;try{Q=4,sa(e,t,n,i)}finally{Q=r,zn.transition=o}}function sa(e,t,n,i){if(Er){var r=hs(e,t,n,i);if(r===null)$o(e,t,i,Pr,n),nl(e,i);else if(Up(r,e,t,n,i))i.stopPropagation();else if(nl(e,i),t&4&&-1<Op.indexOf(e)){for(;r!==null;){var o=Ui(r);if(o!==null&&Xc(o),o=hs(e,t,n,i),o===null&&$o(e,t,i,Pr,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else $o(e,t,i,null,n)}}var Pr=null;function hs(e,t,n,i){if(Pr=null,e=na(i),e=rn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pr=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($p()){case ia:return 1;case Qc:return 4;case Ir:case Ap:return 16;case Jc:return 536870912;default:return 16}default:return 16}}var Dt=null,aa=null,fr=null;function rd(){if(fr)return fr;var e,t=aa,n=t.length,i,r="value"in Dt?Dt.value:Dt.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===r[o-i];i++);return fr=r.slice(e,1<i?1-i:void 0)}function gr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function rl(){return!1}function Qe(e){function t(n,i,r,o,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zi:rl,this.isPropagationStopped=rl,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=Qe(Vn),Oi=re({},Vn,{view:0,detail:0}),qp=Qe(Oi),ko,jo,ti,Zr=re({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(ko=e.screenX-ti.screenX,jo=e.screenY-ti.screenY):jo=ko=0,ti=e),ko)},movementY:function(e){return"movementY"in e?e.movementY:jo}}),ol=Qe(Zr),Vp=re({},Zr,{dataTransfer:0}),Gp=Qe(Vp),Qp=re({},Oi,{relatedTarget:0}),So=Qe(Qp),Jp=re({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Yp=Qe(Jp),Kp=re({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xp=Qe(Kp),Zp=re({},Vn,{data:0}),sl=Qe(Zp),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nm[e])?!!t[e]:!1}function ca(){return im}var rm=re({},Oi,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ca,charCode:function(e){return e.type==="keypress"?gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),om=Qe(rm),sm=re({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),al=Qe(sm),am=re({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ca}),lm=Qe(am),cm=re({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),dm=Qe(cm),um=re({},Zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=Qe(um),mm=[9,13,27,32],da=It&&"CompositionEvent"in window,hi=null;It&&"documentMode"in document&&(hi=document.documentMode);var hm=It&&"TextEvent"in window&&!hi,od=It&&(!da||hi&&8<hi&&11>=hi),ll=" ",cl=!1;function sd(e,t){switch(e){case"keyup":return mm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function fm(e,t){switch(e){case"compositionend":return ad(t);case"keypress":return t.which!==32?null:(cl=!0,ll);case"textInput":return e=t.data,e===ll&&cl?null:e;default:return null}}function gm(e,t){if(xn)return e==="compositionend"||!da&&sd(e,t)?(e=rd(),fr=aa=Dt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return od&&t.locale!=="ko"?null:t.data;default:return null}}var ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ym[e.type]:t==="textarea"}function ld(e,t,n,i){Dc(i),t=$r(t,"onChange"),0<t.length&&(n=new la("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var fi=null,Ii=null;function vm(e){wd(e,0)}function eo(e){var t=Sn(e);if(Ac(t))return e}function wm(e,t){if(e==="change")return t}var cd=!1;if(It){var Co;if(It){var No="oninput"in document;if(!No){var ul=document.createElement("div");ul.setAttribute("oninput","return;"),No=typeof ul.oninput=="function"}Co=No}else Co=!1;cd=Co&&(!document.documentMode||9<document.documentMode)}function pl(){fi&&(fi.detachEvent("onpropertychange",dd),Ii=fi=null)}function dd(e){if(e.propertyName==="value"&&eo(Ii)){var t=[];ld(t,Ii,e,na(e)),Wc(vm,t)}}function bm(e,t,n){e==="focusin"?(pl(),fi=t,Ii=n,fi.attachEvent("onpropertychange",dd)):e==="focusout"&&pl()}function xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eo(Ii)}function km(e,t){if(e==="click")return eo(t)}function jm(e,t){if(e==="input"||e==="change")return eo(t)}function Sm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Sm;function Ti(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Yo.call(t,r)||!pt(e[r],t[r]))return!1}return!0}function ml(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hl(e,t){var n=ml(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ml(n)}}function ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pd(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cm(e){var t=pd(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ud(n.ownerDocument.documentElement,n)){if(i!==null&&ua(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=hl(n,o);var a=hl(n,i);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nm=It&&"documentMode"in document&&11>=document.documentMode,kn=null,fs=null,gi=null,gs=!1;function fl(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gs||kn==null||kn!==Sr(i)||(i=kn,"selectionStart"in i&&ua(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gi&&Ti(gi,i)||(gi=i,i=$r(fs,"onSelect"),0<i.length&&(t=new la("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=kn)))}function er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionend:er("Transition","TransitionEnd")},Io={},md={};It&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function to(e){if(Io[e])return Io[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in md)return Io[e]=t[n];return e}var hd=to("animationend"),fd=to("animationiteration"),gd=to("animationstart"),yd=to("transitionend"),vd=new Map,gl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){vd.set(e,t),fn(t,[e])}for(var To=0;To<gl.length;To++){var Eo=gl[To],Im=Eo.toLowerCase(),Tm=Eo[0].toUpperCase()+Eo.slice(1);Kt(Im,"on"+Tm)}Kt(hd,"onAnimationEnd");Kt(fd,"onAnimationIteration");Kt(gd,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(yd,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Em=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function yl(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Ip(i,t,void 0,e),e.currentTarget=null}function wd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&r.isPropagationStopped())break e;yl(r,l,d),o=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&r.isPropagationStopped())break e;yl(r,l,d),o=c}}}if(Nr)throw e=us,Nr=!1,us=null,e}function Z(e,t){var n=t[xs];n===void 0&&(n=t[xs]=new Set);var i=e+"__bubble";n.has(i)||(bd(t,e,2,!1),n.add(i))}function Po(e,t,n){var i=0;t&&(i|=4),bd(n,e,i,t)}var tr="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[tr]){e[tr]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(Em.has(n)||Po(n,!1,e),Po(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[tr]||(t[tr]=!0,Po("selectionchange",!1,t))}}function bd(e,t,n,i){switch(id(t)){case 1:var r=Wp;break;case 4:r=Hp;break;default:r=sa}n=r.bind(null,t,n,e),r=void 0,!ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function $o(e,t,n,i,r){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=rn(l),a===null)return;if(c=a.tag,c===5||c===6){i=o=a;continue e}l=l.parentNode}}i=i.return}Wc(function(){var d=o,h=na(n),f=[];e:{var y=vd.get(e);if(y!==void 0){var v=la,g=e;switch(e){case"keypress":if(gr(n)===0)break e;case"keydown":case"keyup":v=om;break;case"focusin":g="focus",v=So;break;case"focusout":g="blur",v=So;break;case"beforeblur":case"afterblur":v=So;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ol;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=lm;break;case hd:case fd:case gd:v=Yp;break;case yd:v=dm;break;case"scroll":v=qp;break;case"wheel":v=pm;break;case"copy":case"cut":case"paste":v=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=al}var b=(t&4)!==0,T=!b&&e==="scroll",m=b?y!==null?y+"Capture":null:y;b=[];for(var u=d,p;u!==null;){p=u;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,m!==null&&(w=ji(u,m),w!=null&&b.push(Pi(u,w,p)))),T)break;u=u.return}0<b.length&&(y=new v(y,g,null,n,h),f.push({event:y,listeners:b}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",y&&n!==ls&&(g=n.relatedTarget||n.fromElement)&&(rn(g)||g[Tt]))break e;if((v||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=d,g=g?rn(g):null,g!==null&&(T=gn(g),g!==T||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=d),v!==g)){if(b=ol,w="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=al,w="onPointerLeave",m="onPointerEnter",u="pointer"),T=v==null?y:Sn(v),p=g==null?y:Sn(g),y=new b(w,u+"leave",v,n,h),y.target=T,y.relatedTarget=p,w=null,rn(h)===d&&(b=new b(m,u+"enter",g,n,h),b.target=p,b.relatedTarget=T,w=b),T=w,v&&g)t:{for(b=v,m=g,u=0,p=b;p;p=yn(p))u++;for(p=0,w=m;w;w=yn(w))p++;for(;0<u-p;)b=yn(b),u--;for(;0<p-u;)m=yn(m),p--;for(;u--;){if(b===m||m!==null&&b===m.alternate)break t;b=yn(b),m=yn(m)}b=null}else b=null;v!==null&&vl(f,y,v,b,!1),g!==null&&T!==null&&vl(f,T,g,b,!0)}}e:{if(y=d?Sn(d):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var N=wm;else if(dl(y))if(cd)N=jm;else{N=xm;var I=bm}else(v=y.nodeName)&&v.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(N=km);if(N&&(N=N(e,d))){ld(f,N,n,h);break e}I&&I(e,y,d),e==="focusout"&&(I=y._wrapperState)&&I.controlled&&y.type==="number"&&is(y,"number",y.value)}switch(I=d?Sn(d):window,e){case"focusin":(dl(I)||I.contentEditable==="true")&&(kn=I,fs=d,gi=null);break;case"focusout":gi=fs=kn=null;break;case"mousedown":gs=!0;break;case"contextmenu":case"mouseup":case"dragend":gs=!1,fl(f,n,h);break;case"selectionchange":if(Nm)break;case"keydown":case"keyup":fl(f,n,h)}var P;if(da)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else xn?sd(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(od&&n.locale!=="ko"&&(xn||E!=="onCompositionStart"?E==="onCompositionEnd"&&xn&&(P=rd()):(Dt=h,aa="value"in Dt?Dt.value:Dt.textContent,xn=!0)),I=$r(d,E),0<I.length&&(E=new sl(E,e,null,n,h),f.push({event:E,listeners:I}),P?E.data=P:(P=ad(n),P!==null&&(E.data=P)))),(P=hm?fm(e,n):gm(e,n))&&(d=$r(d,"onBeforeInput"),0<d.length&&(h=new sl("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:d}),h.data=P))}wd(f,t)})}function Pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ji(e,n),o!=null&&i.unshift(Pi(e,o,r)),o=ji(e,t),o!=null&&i.push(Pi(e,o,r))),e=e.return}return i}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vl(e,t,n,i,r){for(var o=t._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,r?(c=ji(n,o),c!=null&&a.unshift(Pi(n,c,l))):r||(c=ji(n,o),c!=null&&a.push(Pi(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Pm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function wl(e){return(typeof e=="string"?e:""+e).replace(Pm,`
`).replace($m,"")}function nr(e,t,n){if(t=wl(t),wl(e)!==t&&n)throw Error(j(425))}function Ar(){}var ys=null,vs=null;function ws(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bs=typeof setTimeout=="function"?setTimeout:void 0,Am=typeof clearTimeout=="function"?clearTimeout:void 0,bl=typeof Promise=="function"?Promise:void 0,_m=typeof queueMicrotask=="function"?queueMicrotask:typeof bl<"u"?function(e){return bl.resolve(null).then(e).catch(zm)}:bs;function zm(e){setTimeout(function(){throw e})}function Ao(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),Ni(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ni(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),vt="__reactFiber$"+Gn,$i="__reactProps$"+Gn,Tt="__reactContainer$"+Gn,xs="__reactEvents$"+Gn,Lm="__reactListeners$"+Gn,Rm="__reactHandles$"+Gn;function rn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xl(e);e!==null;){if(n=e[vt])return n;e=xl(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[vt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function no(e){return e[$i]||null}var ks=[],Cn=-1;function Xt(e){return{current:e}}function ee(e){0>Cn||(e.current=ks[Cn],ks[Cn]=null,Cn--)}function K(e,t){Cn++,ks[Cn]=e.current,e.current=t}var Yt={},Ie=Xt(Yt),Me=Xt(!1),dn=Yt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Yt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Fe(e){return e=e.childContextTypes,e!=null}function _r(){ee(Me),ee(Ie)}function kl(e,t,n){if(Ie.current!==Yt)throw Error(j(168));K(Ie,t),K(Me,n)}function xd(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(j(108,bp(e)||"Unknown",r));return re({},n,i)}function zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,dn=Ie.current,K(Ie,e),K(Me,Me.current),!0}function jl(e,t,n){var i=e.stateNode;if(!i)throw Error(j(169));n?(e=xd(e,t,dn),i.__reactInternalMemoizedMergedChildContext=e,ee(Me),ee(Ie),K(Ie,e)):ee(Me),K(Me,n)}var jt=null,io=!1,_o=!1;function kd(e){jt===null?jt=[e]:jt.push(e)}function Mm(e){io=!0,kd(e)}function Zt(){if(!_o&&jt!==null){_o=!0;var e=0,t=Q;try{var n=jt;for(Q=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}jt=null,io=!1}catch(r){throw jt!==null&&(jt=jt.slice(e+1)),Gc(ia,Zt),r}finally{Q=t,_o=!1}}return null}var Nn=[],In=0,Lr=null,Rr=0,Ke=[],Xe=0,un=null,St=1,Ct="";function tn(e,t){Nn[In++]=Rr,Nn[In++]=Lr,Lr=e,Rr=t}function jd(e,t,n){Ke[Xe++]=St,Ke[Xe++]=Ct,Ke[Xe++]=un,un=e;var i=St;e=Ct;var r=32-lt(i)-1;i&=~(1<<r),n+=1;var o=32-lt(t)+r;if(30<o){var a=r-r%5;o=(i&(1<<a)-1).toString(32),i>>=a,r-=a,St=1<<32-lt(t)+r|n<<r|i,Ct=o+e}else St=1<<o|n<<r|i,Ct=e}function pa(e){e.return!==null&&(tn(e,1),jd(e,1,0))}function ma(e){for(;e===Lr;)Lr=Nn[--In],Nn[In]=null,Rr=Nn[--In],Nn[In]=null;for(;e===un;)un=Ke[--Xe],Ke[Xe]=null,Ct=Ke[--Xe],Ke[Xe]=null,St=Ke[--Xe],Ke[Xe]=null}var qe=null,He=null,te=!1,at=null;function Sd(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,He=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,He=null,!0):!1;default:return!1}}function js(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ss(e){if(te){var t=He;if(t){var n=t;if(!Sl(e,t)){if(js(e))throw Error(j(418));t=Ht(n.nextSibling);var i=qe;t&&Sl(e,t)?Sd(i,n):(e.flags=e.flags&-4097|2,te=!1,qe=e)}}else{if(js(e))throw Error(j(418));e.flags=e.flags&-4097|2,te=!1,qe=e}}}function Cl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function ir(e){if(e!==qe)return!1;if(!te)return Cl(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ws(e.type,e.memoizedProps)),t&&(t=He)){if(js(e))throw Cd(),Error(j(418));for(;t;)Sd(e,t),t=Ht(t.nextSibling)}if(Cl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=qe?Ht(e.stateNode.nextSibling):null;return!0}function Cd(){for(var e=He;e;)e=Ht(e.nextSibling)}function Dn(){He=qe=null,te=!1}function ha(e){at===null?at=[e]:at.push(e)}var Fm=$t.ReactCurrentBatchConfig;function ni(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var i=n.stateNode}if(!i)throw Error(j(147,e));var r=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=r.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function rr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nl(e){var t=e._init;return t(e._payload)}function Nd(e){function t(m,u){if(e){var p=m.deletions;p===null?(m.deletions=[u],m.flags|=16):p.push(u)}}function n(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function i(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function r(m,u){return m=Qt(m,u),m.index=0,m.sibling=null,m}function o(m,u,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<u?(m.flags|=2,u):p):(m.flags|=2,u)):(m.flags|=1048576,u)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,u,p,w){return u===null||u.tag!==6?(u=Oo(p,m.mode,w),u.return=m,u):(u=r(u,p),u.return=m,u)}function c(m,u,p,w){var N=p.type;return N===bn?h(m,u,p.props.children,w,p.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Lt&&Nl(N)===u.type)?(w=r(u,p.props),w.ref=ni(m,u,p),w.return=m,w):(w=jr(p.type,p.key,p.props,null,m.mode,w),w.ref=ni(m,u,p),w.return=m,w)}function d(m,u,p,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Uo(p,m.mode,w),u.return=m,u):(u=r(u,p.children||[]),u.return=m,u)}function h(m,u,p,w,N){return u===null||u.tag!==7?(u=ln(p,m.mode,w,N),u.return=m,u):(u=r(u,p),u.return=m,u)}function f(m,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Oo(""+u,m.mode,p),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Gi:return p=jr(u.type,u.key,u.props,null,m.mode,p),p.ref=ni(m,null,u),p.return=m,p;case wn:return u=Uo(u,m.mode,p),u.return=m,u;case Lt:var w=u._init;return f(m,w(u._payload),p)}if(li(u)||Kn(u))return u=ln(u,m.mode,p,null),u.return=m,u;rr(m,u)}return null}function y(m,u,p,w){var N=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:l(m,u,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gi:return p.key===N?c(m,u,p,w):null;case wn:return p.key===N?d(m,u,p,w):null;case Lt:return N=p._init,y(m,u,N(p._payload),w)}if(li(p)||Kn(p))return N!==null?null:h(m,u,p,w,null);rr(m,p)}return null}function v(m,u,p,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(p)||null,l(u,m,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gi:return m=m.get(w.key===null?p:w.key)||null,c(u,m,w,N);case wn:return m=m.get(w.key===null?p:w.key)||null,d(u,m,w,N);case Lt:var I=w._init;return v(m,u,p,I(w._payload),N)}if(li(w)||Kn(w))return m=m.get(p)||null,h(u,m,w,N,null);rr(u,w)}return null}function g(m,u,p,w){for(var N=null,I=null,P=u,E=u=0,O=null;P!==null&&E<p.length;E++){P.index>E?(O=P,P=null):O=P.sibling;var A=y(m,P,p[E],w);if(A===null){P===null&&(P=O);break}e&&P&&A.alternate===null&&t(m,P),u=o(A,u,E),I===null?N=A:I.sibling=A,I=A,P=O}if(E===p.length)return n(m,P),te&&tn(m,E),N;if(P===null){for(;E<p.length;E++)P=f(m,p[E],w),P!==null&&(u=o(P,u,E),I===null?N=P:I.sibling=P,I=P);return te&&tn(m,E),N}for(P=i(m,P);E<p.length;E++)O=v(P,m,E,p[E],w),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?E:O.key),u=o(O,u,E),I===null?N=O:I.sibling=O,I=O);return e&&P.forEach(function(J){return t(m,J)}),te&&tn(m,E),N}function b(m,u,p,w){var N=Kn(p);if(typeof N!="function")throw Error(j(150));if(p=N.call(p),p==null)throw Error(j(151));for(var I=N=null,P=u,E=u=0,O=null,A=p.next();P!==null&&!A.done;E++,A=p.next()){P.index>E?(O=P,P=null):O=P.sibling;var J=y(m,P,A.value,w);if(J===null){P===null&&(P=O);break}e&&P&&J.alternate===null&&t(m,P),u=o(J,u,E),I===null?N=J:I.sibling=J,I=J,P=O}if(A.done)return n(m,P),te&&tn(m,E),N;if(P===null){for(;!A.done;E++,A=p.next())A=f(m,A.value,w),A!==null&&(u=o(A,u,E),I===null?N=A:I.sibling=A,I=A);return te&&tn(m,E),N}for(P=i(m,P);!A.done;E++,A=p.next())A=v(P,m,E,A.value,w),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?E:A.key),u=o(A,u,E),I===null?N=A:I.sibling=A,I=A);return e&&P.forEach(function(fe){return t(m,fe)}),te&&tn(m,E),N}function T(m,u,p,w){if(typeof p=="object"&&p!==null&&p.type===bn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Gi:e:{for(var N=p.key,I=u;I!==null;){if(I.key===N){if(N=p.type,N===bn){if(I.tag===7){n(m,I.sibling),u=r(I,p.props.children),u.return=m,m=u;break e}}else if(I.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Lt&&Nl(N)===I.type){n(m,I.sibling),u=r(I,p.props),u.ref=ni(m,I,p),u.return=m,m=u;break e}n(m,I);break}else t(m,I);I=I.sibling}p.type===bn?(u=ln(p.props.children,m.mode,w,p.key),u.return=m,m=u):(w=jr(p.type,p.key,p.props,null,m.mode,w),w.ref=ni(m,u,p),w.return=m,m=w)}return a(m);case wn:e:{for(I=p.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(m,u.sibling),u=r(u,p.children||[]),u.return=m,m=u;break e}else{n(m,u);break}else t(m,u);u=u.sibling}u=Uo(p,m.mode,w),u.return=m,m=u}return a(m);case Lt:return I=p._init,T(m,u,I(p._payload),w)}if(li(p))return g(m,u,p,w);if(Kn(p))return b(m,u,p,w);rr(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(m,u.sibling),u=r(u,p),u.return=m,m=u):(n(m,u),u=Oo(p,m.mode,w),u.return=m,m=u),a(m)):n(m,u)}return T}var On=Nd(!0),Id=Nd(!1),Mr=Xt(null),Fr=null,Tn=null,fa=null;function ga(){fa=Tn=Fr=null}function ya(e){var t=Mr.current;ee(Mr),e._currentValue=t}function Cs(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){Fr=e,fa=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(fa!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(Fr===null)throw Error(j(308));Tn=e,Fr.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var on=null;function va(e){on===null?on=[e]:on.push(e)}function Td(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,va(t)):(n.next=r.next,r.next=n),t.interleaved=n,Et(e,i)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ed(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,G&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,Et(e,n)}return r=i.interleaved,r===null?(t.next=t,va(i)):(t.next=r.next,r.next=t),i.interleaved=t,Et(e,n)}function yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ra(e,n)}}function Il(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Dr(e,t,n,i){var r=e.updateQueue;Rt=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?o=d:a.next=d,a=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=c))}if(o!==null){var f=r.baseState;a=0,h=d=c=null,l=o;do{var y=l.lane,v=l.eventTime;if((i&y)===y){h!==null&&(h=h.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,b=l;switch(y=t,v=n,b.tag){case 1:if(g=b.payload,typeof g=="function"){f=g.call(v,f,y);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,y=typeof g=="function"?g.call(v,f,y):g,y==null)break e;f=re({},f,y);break e;case 2:Rt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=r.effects,y===null?r.effects=[l]:y.push(l))}else v={eventTime:v,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=v,c=f):h=h.next=v,a|=y;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;y=l,l=y.next,y.next=null,r.lastBaseUpdate=y,r.shared.pending=null}}while(!0);if(h===null&&(c=f),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=h,t=r.shared.interleaved,t!==null){r=t;do a|=r.lane,r=r.next;while(r!==t)}else o===null&&(r.shared.lanes=0);mn|=a,e.lanes=a,e.memoizedState=f}}function Tl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(j(191,r));r.call(i)}}}var Bi={},bt=Xt(Bi),Ai=Xt(Bi),_i=Xt(Bi);function sn(e){if(e===Bi)throw Error(j(174));return e}function ba(e,t){switch(K(_i,t),K(Ai,e),K(bt,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=os(t,e)}ee(bt),K(bt,t)}function Un(){ee(bt),ee(Ai),ee(_i)}function Pd(e){sn(_i.current);var t=sn(bt.current),n=os(t,e.type);t!==n&&(K(Ai,e),K(bt,n))}function xa(e){Ai.current===e&&(ee(bt),ee(Ai))}var ne=Xt(0);function Or(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zo=[];function ka(){for(var e=0;e<zo.length;e++)zo[e]._workInProgressVersionPrimary=null;zo.length=0}var vr=$t.ReactCurrentDispatcher,Lo=$t.ReactCurrentBatchConfig,pn=0,ie=null,me=null,ge=null,Ur=!1,yi=!1,zi=0,Dm=0;function Se(){throw Error(j(321))}function ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Sa(e,t,n,i,r,o){if(pn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vr.current=e===null||e.memoizedState===null?Wm:Hm,e=n(i,r),yi){o=0;do{if(yi=!1,zi=0,25<=o)throw Error(j(301));o+=1,ge=me=null,t.updateQueue=null,vr.current=qm,e=n(i,r)}while(yi)}if(vr.current=Br,t=me!==null&&me.next!==null,pn=0,ge=me=ie=null,Ur=!1,t)throw Error(j(300));return e}function Ca(){var e=zi!==0;return zi=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function nt(){if(me===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,me=e;else{if(e===null)throw Error(j(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function Li(e,t){return typeof t=="function"?t(e):t}function Ro(e){var t=nt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=me,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var l=a=null,c=null,d=o;do{var h=d.lane;if((pn&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=f,a=i):c=c.next=f,ie.lanes|=h,mn|=h}d=d.next}while(d!==null&&d!==o);c===null?a=i:c.next=l,pt(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseState=a,t.baseQueue=c,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do o=r.lane,ie.lanes|=o,mn|=o,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Mo(e){var t=nt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do o=e(o,a.action),a=a.next;while(a!==r);pt(o,t.memoizedState)||(Re=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function $d(){}function Ad(e,t){var n=ie,i=nt(),r=t(),o=!pt(i.memoizedState,r);if(o&&(i.memoizedState=r,Re=!0),i=i.queue,Na(Ld.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Ri(9,zd.bind(null,n,i,r,t),void 0,null),ve===null)throw Error(j(349));pn&30||_d(n,t,r)}return r}function _d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zd(e,t,n,i){t.value=n,t.getSnapshot=i,Rd(t)&&Md(e)}function Ld(e,t,n){return n(function(){Rd(t)&&Md(e)})}function Rd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function Md(e){var t=Et(e,1);t!==null&&ct(t,e,1,-1)}function El(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t.queue=e,e=e.dispatch=Bm.bind(null,ie,e),[t.memoizedState,e]}function Ri(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Fd(){return nt().memoizedState}function wr(e,t,n,i){var r=gt();ie.flags|=e,r.memoizedState=Ri(1|t,n,void 0,i===void 0?null:i)}function ro(e,t,n,i){var r=nt();i=i===void 0?null:i;var o=void 0;if(me!==null){var a=me.memoizedState;if(o=a.destroy,i!==null&&ja(i,a.deps)){r.memoizedState=Ri(t,n,o,i);return}}ie.flags|=e,r.memoizedState=Ri(1|t,n,o,i)}function Pl(e,t){return wr(8390656,8,e,t)}function Na(e,t){return ro(2048,8,e,t)}function Dd(e,t){return ro(4,2,e,t)}function Od(e,t){return ro(4,4,e,t)}function Ud(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bd(e,t,n){return n=n!=null?n.concat([e]):null,ro(4,4,Ud.bind(null,t,e),n)}function Ia(){}function Wd(e,t){var n=nt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ja(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Hd(e,t){var n=nt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ja(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function qd(e,t,n){return pn&21?(pt(n,t)||(n=Yc(),ie.lanes|=n,mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Om(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var i=Lo.transition;Lo.transition={};try{e(!1),t()}finally{Q=n,Lo.transition=i}}function Vd(){return nt().memoizedState}function Um(e,t,n){var i=Gt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Gd(e))Qd(t,n);else if(n=Td(e,t,n,i),n!==null){var r=Pe();ct(n,e,i,r),Jd(n,t,i)}}function Bm(e,t,n){var i=Gt(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gd(e))Qd(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(r.hasEagerState=!0,r.eagerState=l,pt(l,a)){var c=t.interleaved;c===null?(r.next=r,va(t)):(r.next=c.next,c.next=r),t.interleaved=r;return}}catch{}finally{}n=Td(e,t,r,i),n!==null&&(r=Pe(),ct(n,e,i,r),Jd(n,t,i))}}function Gd(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Qd(e,t){yi=Ur=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jd(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ra(e,n)}}var Br={readContext:tt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Wm={readContext:tt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Pl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wr(4194308,4,Ud.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return wr(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=gt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Um.bind(null,ie,e),[i.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:El,useDebugValue:Ia,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=El(!1),t=e[0];return e=Om.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ie,r=gt();if(te){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ve===null)throw Error(j(349));pn&30||_d(i,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,Pl(Ld.bind(null,i,o,e),[e]),i.flags|=2048,Ri(9,zd.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=gt(),t=ve.identifierPrefix;if(te){var n=Ct,i=St;n=(i&~(1<<32-lt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=zi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hm={readContext:tt,useCallback:Wd,useContext:tt,useEffect:Na,useImperativeHandle:Bd,useInsertionEffect:Dd,useLayoutEffect:Od,useMemo:Hd,useReducer:Ro,useRef:Fd,useState:function(){return Ro(Li)},useDebugValue:Ia,useDeferredValue:function(e){var t=nt();return qd(t,me.memoizedState,e)},useTransition:function(){var e=Ro(Li)[0],t=nt().memoizedState;return[e,t]},useMutableSource:$d,useSyncExternalStore:Ad,useId:Vd,unstable_isNewReconciler:!1},qm={readContext:tt,useCallback:Wd,useContext:tt,useEffect:Na,useImperativeHandle:Bd,useInsertionEffect:Dd,useLayoutEffect:Od,useMemo:Hd,useReducer:Mo,useRef:Fd,useState:function(){return Mo(Li)},useDebugValue:Ia,useDeferredValue:function(e){var t=nt();return me===null?t.memoizedState=e:qd(t,me.memoizedState,e)},useTransition:function(){var e=Mo(Li)[0],t=nt().memoizedState;return[e,t]},useMutableSource:$d,useSyncExternalStore:Ad,useId:Vd,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ns(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var oo={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Pe(),r=Gt(e),o=Nt(i,r);o.payload=t,n!=null&&(o.callback=n),t=qt(e,o,r),t!==null&&(ct(t,e,r,i),yr(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Pe(),r=Gt(e),o=Nt(i,r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=qt(e,o,r),t!==null&&(ct(t,e,r,i),yr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),i=Gt(e),r=Nt(n,i);r.tag=2,t!=null&&(r.callback=t),t=qt(e,r,i),t!==null&&(ct(t,e,i,n),yr(t,e,i))}};function $l(e,t,n,i,r,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,i)||!Ti(r,o):!0}function Yd(e,t,n){var i=!1,r=Yt,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(r=Fe(t)?dn:Ie.current,i=t.contextTypes,o=(i=i!=null)?Fn(e,r):Yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oo,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),t}function Al(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&oo.enqueueReplaceState(t,t.state,null)}function Is(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},wa(e);var o=t.contextType;typeof o=="object"&&o!==null?r.context=tt(o):(o=Fe(t)?dn:Ie.current,r.context=Fn(e,o)),r.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ns(e,t,o,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&oo.enqueueReplaceState(r,r.state,null),Dr(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",i=t;do n+=wp(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:r,digest:null}}function Fo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ts(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vm=typeof WeakMap=="function"?WeakMap:Map;function Kd(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Hr||(Hr=!0,Fs=i),Ts(e,t)},n}function Xd(e,t,n){n=Nt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){Ts(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ts(e,t),typeof i!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function _l(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Vm;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=sh.bind(null,e,t,n),t.then(e,e))}function zl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ll(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e)}var Gm=$t.ReactCurrentOwner,Re=!1;function Ee(e,t,n,i){t.child=e===null?Id(t,null,n,i):On(t,e.child,n,i)}function Rl(e,t,n,i,r){n=n.render;var o=t.ref;return Ln(t,r),i=Sa(e,t,n,i,o,r),n=Ca(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Pt(e,t,r)):(te&&n&&pa(t),t.flags|=1,Ee(e,t,i,r),t.child)}function Ml(e,t,n,i,r){if(e===null){var o=n.type;return typeof o=="function"&&!La(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Zd(e,t,o,i,r)):(e=jr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&r)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(a,i)&&e.ref===t.ref)return Pt(e,t,r)}return t.flags|=1,e=Qt(o,i),e.ref=t.ref,e.return=t,t.child=e}function Zd(e,t,n,i,r){if(e!==null){var o=e.memoizedProps;if(Ti(o,i)&&e.ref===t.ref)if(Re=!1,t.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Pt(e,t,r)}return Es(e,t,n,i,r)}function eu(e,t,n){var i=t.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Pn,We),We|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Pn,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,K(Pn,We),We|=i}else o!==null?(i=o.baseLanes|n,t.memoizedState=null):i=n,K(Pn,We),We|=i;return Ee(e,t,r,n),t.child}function tu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Es(e,t,n,i,r){var o=Fe(n)?dn:Ie.current;return o=Fn(t,o),Ln(t,r),n=Sa(e,t,n,i,o,r),i=Ca(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Pt(e,t,r)):(te&&i&&pa(t),t.flags|=1,Ee(e,t,n,r),t.child)}function Fl(e,t,n,i,r){if(Fe(n)){var o=!0;zr(t)}else o=!1;if(Ln(t,r),t.stateNode===null)br(e,t),Yd(t,n,i),Is(t,n,i,r),i=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=tt(d):(d=Fe(n)?dn:Ie.current,d=Fn(t,d));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==d)&&Al(t,a,i,d),Rt=!1;var y=t.memoizedState;a.state=y,Dr(t,i,a,r),c=t.memoizedState,l!==i||y!==c||Me.current||Rt?(typeof h=="function"&&(Ns(t,n,h,i),c=t.memoizedState),(l=Rt||$l(t,n,l,i,y,c,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=d,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Ed(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:ot(t.type,l),a.props=d,f=t.pendingProps,y=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=tt(c):(c=Fe(n)?dn:Ie.current,c=Fn(t,c));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||y!==c)&&Al(t,a,i,c),Rt=!1,y=t.memoizedState,a.state=y,Dr(t,i,a,r);var g=t.memoizedState;l!==f||y!==g||Me.current||Rt?(typeof v=="function"&&(Ns(t,n,v,i),g=t.memoizedState),(d=Rt||$l(t,n,d,i,y,g,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=g),a.props=i,a.state=g,a.context=c,i=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),i=!1)}return Ps(e,t,n,i,o,r)}function Ps(e,t,n,i,r,o){tu(e,t);var a=(t.flags&128)!==0;if(!i&&!a)return r&&jl(t,n,!1),Pt(e,t,o);i=t.stateNode,Gm.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&a?(t.child=On(t,e.child,null,o),t.child=On(t,null,l,o)):Ee(e,t,l,o),t.memoizedState=i.state,r&&jl(t,n,!0),t.child}function nu(e){var t=e.stateNode;t.pendingContext?kl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kl(e,t.context,!1),ba(e,t.containerInfo)}function Dl(e,t,n,i,r){return Dn(),ha(r),t.flags|=256,Ee(e,t,n,i),t.child}var $s={dehydrated:null,treeContext:null,retryLane:0};function As(e){return{baseLanes:e,cachePool:null,transitions:null}}function iu(e,t,n){var i=t.pendingProps,r=ne.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),K(ne,r&1),e===null)return Ss(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=lo(a,i,0,null),e=ln(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=As(n),t.memoizedState=$s,e):Ta(t,a));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Qm(e,t,a,i,l,r,n);if(o){o=i.fallback,a=t.mode,r=e.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=c,t.deletions=null):(i=Qt(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?o=Qt(l,o):(o=ln(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,a=e.child.memoizedState,a=a===null?As(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=$s,i}return o=e.child,e=o.sibling,i=Qt(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ta(e,t){return t=lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function or(e,t,n,i){return i!==null&&ha(i),On(t,e.child,null,n),e=Ta(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qm(e,t,n,i,r,o,a){if(n)return t.flags&256?(t.flags&=-257,i=Fo(Error(j(422))),or(e,t,a,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,r=t.mode,i=lo({mode:"visible",children:i.children},r,0,null),o=ln(o,r,a,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&On(t,e.child,null,a),t.child.memoizedState=As(a),t.memoizedState=$s,o);if(!(t.mode&1))return or(e,t,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,o=Error(j(419)),i=Fo(o,i,void 0),or(e,t,a,i)}if(l=(a&e.childLanes)!==0,Re||l){if(i=ve,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Et(e,r),ct(i,e,r,-1))}return za(),i=Fo(Error(j(421))),or(e,t,a,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=ah.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,He=Ht(r.nextSibling),qe=t,te=!0,at=null,e!==null&&(Ke[Xe++]=St,Ke[Xe++]=Ct,Ke[Xe++]=un,St=e.id,Ct=e.overflow,un=t),t=Ta(t,i.children),t.flags|=4096,t)}function Ol(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Cs(e.return,t,n)}function Do(e,t,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function ru(e,t,n){var i=t.pendingProps,r=i.revealOrder,o=i.tail;if(Ee(e,t,i.children,n),i=ne.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ol(e,n,t);else if(e.tag===19)Ol(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(K(ne,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Or(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Do(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Or(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Do(t,!0,n,null,o);break;case"together":Do(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jm(e,t,n){switch(t.tag){case 3:nu(t),Dn();break;case 5:Pd(t);break;case 1:Fe(t.type)&&zr(t);break;case 4:ba(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;K(Mr,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(K(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?iu(e,t,n):(K(ne,ne.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);K(ne,ne.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return ru(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(ne,ne.current),i)break;return null;case 22:case 23:return t.lanes=0,eu(e,t,n)}return Pt(e,t,n)}var ou,_s,su,au;ou=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_s=function(){};su=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,sn(bt.current);var o=null;switch(n){case"input":r=ts(e,r),i=ts(e,i),o=[];break;case"select":r=re({},r,{value:void 0}),i=re({},i,{value:void 0}),o=[];break;case"textarea":r=rs(e,r),i=rs(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ar)}ss(n,i);var a;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(xi.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in i){var c=i[d];if(l=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(xi.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Z("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};au=function(e,t,n,i){n!==i&&(t.flags|=4)};function ii(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Ym(e,t,n){var i=t.pendingProps;switch(ma(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Fe(t.type)&&_r(),Ce(t),null;case 3:return i=t.stateNode,Un(),ee(Me),ee(Ie),ka(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ir(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Us(at),at=null))),_s(e,t),Ce(t),null;case 5:xa(t);var r=sn(_i.current);if(n=t.type,e!==null&&t.stateNode!=null)su(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Ce(t),null}if(e=sn(bt.current),ir(t)){i=t.stateNode,n=t.type;var o=t.memoizedProps;switch(i[vt]=t,i[$i]=o,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",i),Z("close",i);break;case"iframe":case"object":case"embed":Z("load",i);break;case"video":case"audio":for(r=0;r<di.length;r++)Z(di[r],i);break;case"source":Z("error",i);break;case"img":case"image":case"link":Z("error",i),Z("load",i);break;case"details":Z("toggle",i);break;case"input":Ja(i,o),Z("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Z("invalid",i);break;case"textarea":Ka(i,o),Z("invalid",i)}ss(n,o),r=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?i.textContent!==l&&(o.suppressHydrationWarning!==!0&&nr(i.textContent,l,e),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&nr(i.textContent,l,e),r=["children",""+l]):xi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Z("scroll",i)}switch(n){case"input":Qi(i),Ya(i,o,!0);break;case"textarea":Qi(i),Xa(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ar)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=a.createElement(n,{is:i.is}):(e=a.createElement(n),n==="select"&&(a=e,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):e=a.createElementNS(e,n),e[vt]=t,e[$i]=i,ou(e,t,!1,!1),t.stateNode=e;e:{switch(a=as(n,i),n){case"dialog":Z("cancel",e),Z("close",e),r=i;break;case"iframe":case"object":case"embed":Z("load",e),r=i;break;case"video":case"audio":for(r=0;r<di.length;r++)Z(di[r],e);r=i;break;case"source":Z("error",e),r=i;break;case"img":case"image":case"link":Z("error",e),Z("load",e),r=i;break;case"details":Z("toggle",e),r=i;break;case"input":Ja(e,i),r=ts(e,i),Z("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=re({},i,{value:void 0}),Z("invalid",e);break;case"textarea":Ka(e,i),r=rs(e,i),Z("invalid",e);break;default:r=i}ss(n,r),l=r;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Fc(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Rc(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ki(e,c):typeof c=="number"&&ki(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xi.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Z("scroll",e):c!=null&&Xs(e,o,c,a))}switch(n){case"input":Qi(e),Ya(e,i,!1);break;case"textarea":Qi(e),Xa(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Jt(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?$n(e,!!i.multiple,o,!1):i.defaultValue!=null&&$n(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ar)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)au(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(n=sn(_i.current),sn(bt.current),ir(t)){if(i=t.stateNode,n=t.memoizedProps,i[vt]=t,(o=i.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:nr(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&nr(i.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vt]=t,t.stateNode=i}return Ce(t),null;case 13:if(ee(ne),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&He!==null&&t.mode&1&&!(t.flags&128))Cd(),Dn(),t.flags|=98560,o=!1;else if(o=ir(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[vt]=t}else Dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else at!==null&&(Us(at),at=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?he===0&&(he=3):za())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Un(),_s(e,t),e===null&&Ei(t.stateNode.containerInfo),Ce(t),null;case 10:return ya(t.type._context),Ce(t),null;case 17:return Fe(t.type)&&_r(),Ce(t),null;case 19:if(ee(ne),o=t.memoizedState,o===null)return Ce(t),null;if(i=(t.flags&128)!==0,a=o.rendering,a===null)if(i)ii(o,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Or(e),a!==null){for(t.flags|=128,ii(o,!1),i=a.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)o=n,e=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>Wn&&(t.flags|=128,i=!0,ii(o,!1),t.lanes=4194304)}else{if(!i)if(e=Or(a),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ii(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!te)return Ce(t),null}else 2*de()-o.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,i=!0,ii(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=ne.current,K(ne,i?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return _a(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?We&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Km(e,t){switch(ma(t),t.tag){case 1:return Fe(t.type)&&_r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),ee(Me),ee(Ie),ka(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xa(t),null;case 13:if(ee(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ne),null;case 4:return Un(),null;case 10:return ya(t.type._context),null;case 22:case 23:return _a(),null;case 24:return null;default:return null}}var sr=!1,Ne=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,$=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){se(e,t,i)}else n.current=null}function zs(e,t,n){try{n()}catch(i){se(e,t,i)}}var Ul=!1;function Zm(e,t){if(ys=Er,e=pd(),ua(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,h=0,f=e,y=null;t:for(;;){for(var v;f!==n||r!==0&&f.nodeType!==3||(l=a+r),f!==o||i!==0&&f.nodeType!==3||(c=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)y=f,f=v;for(;;){if(f===e)break t;if(y===n&&++d===r&&(l=a),y===o&&++h===i&&(c=a),(v=f.nextSibling)!==null)break;f=y,y=f.parentNode}f=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(vs={focusedElem:e,selectionRange:n},Er=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,T=g.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:ot(t.type,b),T);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return g=Ul,Ul=!1,g}function vi(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&zs(t,n,o)}r=r.next}while(r!==i)}}function so(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lu(e){var t=e.alternate;t!==null&&(e.alternate=null,lu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[$i],delete t[xs],delete t[Lm],delete t[Rm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cu(e){return e.tag===5||e.tag===3||e.tag===4}function Bl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(i!==4&&(e=e.child,e!==null))for(Rs(e,t,n),e=e.sibling;e!==null;)Rs(e,t,n),e=e.sibling}function Ms(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ms(e,t,n),e=e.sibling;e!==null;)Ms(e,t,n),e=e.sibling}var xe=null,st=!1;function _t(e,t,n){for(n=n.child;n!==null;)du(e,t,n),n=n.sibling}function du(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Xr,n)}catch{}switch(n.tag){case 5:Ne||En(n,t);case 6:var i=xe,r=st;xe=null,_t(e,t,n),xe=i,st=r,xe!==null&&(st?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(st?(e=xe,n=n.stateNode,e.nodeType===8?Ao(e.parentNode,n):e.nodeType===1&&Ao(e,n),Ni(e)):Ao(xe,n.stateNode));break;case 4:i=xe,r=st,xe=n.stateNode.containerInfo,st=!0,_t(e,t,n),xe=i,st=r;break;case 0:case 11:case 14:case 15:if(!Ne&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&zs(n,t,a),r=r.next}while(r!==i)}_t(e,t,n);break;case 1:if(!Ne&&(En(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){se(n,t,l)}_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:n.mode&1?(Ne=(i=Ne)||n.memoizedState!==null,_t(e,t,n),Ne=i):_t(e,t,n);break;default:_t(e,t,n)}}function Wl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xm),t.forEach(function(i){var r=lh.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,st=!1;break e;case 3:xe=l.stateNode.containerInfo,st=!0;break e;case 4:xe=l.stateNode.containerInfo,st=!0;break e}l=l.return}if(xe===null)throw Error(j(160));du(o,a,r),xe=null,st=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){se(r,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uu(t,e),t=t.sibling}function uu(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),ht(e),i&4){try{vi(3,e,e.return),so(3,e)}catch(b){se(e,e.return,b)}try{vi(5,e,e.return)}catch(b){se(e,e.return,b)}}break;case 1:it(t,e),ht(e),i&512&&n!==null&&En(n,n.return);break;case 5:if(it(t,e),ht(e),i&512&&n!==null&&En(n,n.return),e.flags&32){var r=e.stateNode;try{ki(r,"")}catch(b){se(e,e.return,b)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&_c(r,o),as(l,a);var d=as(l,o);for(a=0;a<c.length;a+=2){var h=c[a],f=c[a+1];h==="style"?Fc(r,f):h==="dangerouslySetInnerHTML"?Rc(r,f):h==="children"?ki(r,f):Xs(r,h,f,d)}switch(l){case"input":ns(r,o);break;case"textarea":zc(r,o);break;case"select":var y=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?$n(r,!!o.multiple,v,!1):y!==!!o.multiple&&(o.defaultValue!=null?$n(r,!!o.multiple,o.defaultValue,!0):$n(r,!!o.multiple,o.multiple?[]:"",!1))}r[$i]=o}catch(b){se(e,e.return,b)}}break;case 6:if(it(t,e),ht(e),i&4){if(e.stateNode===null)throw Error(j(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(b){se(e,e.return,b)}}break;case 3:if(it(t,e),ht(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(b){se(e,e.return,b)}break;case 4:it(t,e),ht(e);break;case 13:it(t,e),ht(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||($a=de())),i&4&&Wl(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(d=Ne)||h,it(t,e),Ne=d):it(t,e),ht(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for($=e,h=e.child;h!==null;){for(f=$=h;$!==null;){switch(y=$,v=y.child,y.tag){case 0:case 11:case 14:case 15:vi(4,y,y.return);break;case 1:En(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){i=y,n=y.return;try{t=i,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(b){se(i,n,b)}}break;case 5:En(y,y.return);break;case 22:if(y.memoizedState!==null){ql(f);continue}}v!==null?(v.return=y,$=v):ql(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,d?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Mc("display",a))}catch(b){se(e,e.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(b){se(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:it(t,e),ht(e),i&4&&Wl(e);break;case 21:break;default:it(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cu(n)){var i=n;break e}n=n.return}throw Error(j(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ki(r,""),i.flags&=-33);var o=Bl(e);Ms(e,o,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=Bl(e);Rs(e,l,a);break;default:throw Error(j(161))}}catch(c){se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eh(e,t,n){$=e,pu(e)}function pu(e,t,n){for(var i=(e.mode&1)!==0;$!==null;){var r=$,o=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||sr;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||Ne;l=sr;var d=Ne;if(sr=a,(Ne=c)&&!d)for($=r;$!==null;)a=$,c=a.child,a.tag===22&&a.memoizedState!==null?Vl(r):c!==null?(c.return=a,$=c):Vl(r);for(;o!==null;)$=o,pu(o),o=o.sibling;$=r,sr=l,Ne=d}Hl(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,$=o):Hl(e)}}function Hl(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||so(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ne)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Tl(t,o,i);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tl(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ni(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Ne||t.flags&512&&Ls(t)}catch(y){se(t,t.return,y)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function ql(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Vl(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{so(4,t)}catch(c){se(t,n,c)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(c){se(t,r,c)}}var o=t.return;try{Ls(t)}catch(c){se(t,o,c)}break;case 5:var a=t.return;try{Ls(t)}catch(c){se(t,a,c)}}}catch(c){se(t,t.return,c)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var th=Math.ceil,Wr=$t.ReactCurrentDispatcher,Ea=$t.ReactCurrentOwner,et=$t.ReactCurrentBatchConfig,G=0,ve=null,ue=null,ke=0,We=0,Pn=Xt(0),he=0,Mi=null,mn=0,ao=0,Pa=0,wi=null,Le=null,$a=0,Wn=1/0,kt=null,Hr=!1,Fs=null,Vt=null,ar=!1,Ot=null,qr=0,bi=0,Ds=null,xr=-1,kr=0;function Pe(){return G&6?de():xr!==-1?xr:xr=de()}function Gt(e){return e.mode&1?G&2&&ke!==0?ke&-ke:Fm.transition!==null?(kr===0&&(kr=Yc()),kr):(e=Q,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e):1}function ct(e,t,n,i){if(50<bi)throw bi=0,Ds=null,Error(j(185));Di(e,n,i),(!(G&2)||e!==ve)&&(e===ve&&(!(G&2)&&(ao|=n),he===4&&Ft(e,ke)),De(e,i),n===1&&G===0&&!(t.mode&1)&&(Wn=de()+500,io&&Zt()))}function De(e,t){var n=e.callbackNode;Fp(e,t);var i=Tr(e,e===ve?ke:0);if(i===0)n!==null&&tl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&tl(n),t===1)e.tag===0?Mm(Gl.bind(null,e)):kd(Gl.bind(null,e)),_m(function(){!(G&6)&&Zt()}),n=null;else{switch(Kc(i)){case 1:n=ia;break;case 4:n=Qc;break;case 16:n=Ir;break;case 536870912:n=Jc;break;default:n=Ir}n=bu(n,mu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mu(e,t){if(xr=-1,kr=0,G&6)throw Error(j(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var i=Tr(e,e===ve?ke:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Vr(e,i);else{t=i;var r=G;G|=2;var o=fu();(ve!==e||ke!==t)&&(kt=null,Wn=de()+500,an(e,t));do try{rh();break}catch(l){hu(e,l)}while(!0);ga(),Wr.current=o,G=r,ue!==null?t=0:(ve=null,ke=0,t=he)}if(t!==0){if(t===2&&(r=ps(e),r!==0&&(i=r,t=Os(e,r))),t===1)throw n=Mi,an(e,0),Ft(e,i),De(e,de()),n;if(t===6)Ft(e,i);else{if(r=e.current.alternate,!(i&30)&&!nh(r)&&(t=Vr(e,i),t===2&&(o=ps(e),o!==0&&(i=o,t=Os(e,o))),t===1))throw n=Mi,an(e,0),Ft(e,i),De(e,de()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(j(345));case 2:nn(e,Le,kt);break;case 3:if(Ft(e,i),(i&130023424)===i&&(t=$a+500-de(),10<t)){if(Tr(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){Pe(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=bs(nn.bind(null,e,Le,kt),t);break}nn(e,Le,kt);break;case 4:if(Ft(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var a=31-lt(i);o=1<<a,a=t[a],a>r&&(r=a),i&=~o}if(i=r,i=de()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*th(i/1960))-i,10<i){e.timeoutHandle=bs(nn.bind(null,e,Le,kt),i);break}nn(e,Le,kt);break;case 5:nn(e,Le,kt);break;default:throw Error(j(329))}}}return De(e,de()),e.callbackNode===n?mu.bind(null,e):null}function Os(e,t){var n=wi;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Vr(e,t),e!==2&&(t=Le,Le=n,t!==null&&Us(t)),e}function Us(e){Le===null?Le=e:Le.push.apply(Le,e)}function nh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!pt(o(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~Pa,t&=~ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),i=1<<n;e[n]=-1,t&=~i}}function Gl(e){if(G&6)throw Error(j(327));Rn();var t=Tr(e,0);if(!(t&1))return De(e,de()),null;var n=Vr(e,t);if(e.tag!==0&&n===2){var i=ps(e);i!==0&&(t=i,n=Os(e,i))}if(n===1)throw n=Mi,an(e,0),Ft(e,t),De(e,de()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Le,kt),De(e,de()),null}function Aa(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Wn=de()+500,io&&Zt())}}function hn(e){Ot!==null&&Ot.tag===0&&!(G&6)&&Rn();var t=G;G|=1;var n=et.transition,i=Q;try{if(et.transition=null,Q=1,e)return e()}finally{Q=i,et.transition=n,G=t,!(G&6)&&Zt()}}function _a(){We=Pn.current,ee(Pn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Am(n)),ue!==null)for(n=ue.return;n!==null;){var i=n;switch(ma(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_r();break;case 3:Un(),ee(Me),ee(Ie),ka();break;case 5:xa(i);break;case 4:Un();break;case 13:ee(ne);break;case 19:ee(ne);break;case 10:ya(i.type._context);break;case 22:case 23:_a()}n=n.return}if(ve=e,ue=e=Qt(e.current,null),ke=We=t,he=0,Mi=null,Pa=ao=mn=0,Le=wi=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var a=o.next;o.next=r,i.next=a}n.pending=i}on=null}return e}function hu(e,t){do{var n=ue;try{if(ga(),vr.current=Br,Ur){for(var i=ie.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ur=!1}if(pn=0,ge=me=ie=null,yi=!1,zi=0,Ea.current=null,n===null||n.return===null){he=1,Mi=t,ue=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=zl(a);if(v!==null){v.flags&=-257,Ll(v,a,l,o,t),v.mode&1&&_l(o,d,t),t=v,c=d;var g=t.updateQueue;if(g===null){var b=new Set;b.add(c),t.updateQueue=b}else g.add(c);break e}else{if(!(t&1)){_l(o,d,t),za();break e}c=Error(j(426))}}else if(te&&l.mode&1){var T=zl(a);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Ll(T,a,l,o,t),ha(Bn(c,l));break e}}o=c=Bn(c,l),he!==4&&(he=2),wi===null?wi=[o]:wi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Kd(o,c,t);Il(o,m);break e;case 1:l=c;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Vt===null||!Vt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Xd(o,l,t);Il(o,w);break e}}o=o.return}while(o!==null)}yu(n)}catch(N){t=N,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function fu(){var e=Wr.current;return Wr.current=Br,e===null?Br:e}function za(){(he===0||he===3||he===2)&&(he=4),ve===null||!(mn&268435455)&&!(ao&268435455)||Ft(ve,ke)}function Vr(e,t){var n=G;G|=2;var i=fu();(ve!==e||ke!==t)&&(kt=null,an(e,t));do try{ih();break}catch(r){hu(e,r)}while(!0);if(ga(),G=n,Wr.current=i,ue!==null)throw Error(j(261));return ve=null,ke=0,he}function ih(){for(;ue!==null;)gu(ue)}function rh(){for(;ue!==null&&!Ep();)gu(ue)}function gu(e){var t=wu(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?yu(e):ue=t,Ea.current=null}function yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Km(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,ue=null;return}}else if(n=Ym(n,t,We),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);he===0&&(he=5)}function nn(e,t,n){var i=Q,r=et.transition;try{et.transition=null,Q=1,oh(e,t,n,i)}finally{et.transition=r,Q=i}return null}function oh(e,t,n,i){do Rn();while(Ot!==null);if(G&6)throw Error(j(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Dp(e,o),e===ve&&(ue=ve=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ar||(ar=!0,bu(Ir,function(){return Rn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var a=Q;Q=1;var l=G;G|=4,Ea.current=null,Zm(e,n),uu(n,e),Cm(vs),Er=!!ys,vs=ys=null,e.current=n,eh(n),Pp(),G=l,Q=a,et.transition=o}else e.current=n;if(ar&&(ar=!1,Ot=e,qr=r),o=e.pendingLanes,o===0&&(Vt=null),_p(n.stateNode),De(e,de()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hr)throw Hr=!1,e=Fs,Fs=null,e;return qr&1&&e.tag!==0&&Rn(),o=e.pendingLanes,o&1?e===Ds?bi++:(bi=0,Ds=e):bi=0,Zt(),null}function Rn(){if(Ot!==null){var e=Kc(qr),t=et.transition,n=Q;try{if(et.transition=null,Q=16>e?16:e,Ot===null)var i=!1;else{if(e=Ot,Ot=null,qr=0,G&6)throw Error(j(331));var r=G;for(G|=4,$=e.current;$!==null;){var o=$,a=o.child;if($.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for($=d;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:vi(8,h,o)}var f=h.child;if(f!==null)f.return=h,$=f;else for(;$!==null;){h=$;var y=h.sibling,v=h.return;if(lu(h),h===d){$=null;break}if(y!==null){y.return=v,$=y;break}$=v}}}var g=o.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}$=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,$=a;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,$=m;break e}$=o.return}}var u=e.current;for($=u;$!==null;){a=$;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,$=p;else e:for(a=u;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:so(9,l)}}catch(N){se(l,l.return,N)}if(l===a){$=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,$=w;break e}$=l.return}}if(G=r,Zt(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Xr,e)}catch{}i=!0}return i}finally{Q=n,et.transition=t}}return!1}function Ql(e,t,n){t=Bn(n,t),t=Kd(e,t,1),e=qt(e,t,1),t=Pe(),e!==null&&(Di(e,1,t),De(e,t))}function se(e,t,n){if(e.tag===3)Ql(e,e,n);else for(;t!==null;){if(t.tag===3){Ql(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vt===null||!Vt.has(i))){e=Bn(n,e),e=Xd(t,e,1),t=qt(t,e,1),e=Pe(),t!==null&&(Di(t,1,e),De(t,e));break}}t=t.return}}function sh(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ke&n)===n&&(he===4||he===3&&(ke&130023424)===ke&&500>de()-$a?an(e,0):Pa|=n),De(e,t)}function vu(e,t){t===0&&(e.mode&1?(t=Ki,Ki<<=1,!(Ki&130023424)&&(Ki=4194304)):t=1);var n=Pe();e=Et(e,t),e!==null&&(Di(e,t,n),De(e,n))}function ah(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vu(e,n)}function lh(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(j(314))}i!==null&&i.delete(t),vu(e,n)}var wu;wu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Jm(e,t,n);Re=!!(e.flags&131072)}else Re=!1,te&&t.flags&1048576&&jd(t,Rr,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;br(e,t),e=t.pendingProps;var r=Fn(t,Ie.current);Ln(t,n),r=Sa(null,t,i,e,r,n);var o=Ca();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(i)?(o=!0,zr(t)):o=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wa(t),r.updater=oo,t.stateNode=r,r._reactInternals=t,Is(t,i,e,n),t=Ps(null,t,i,!0,o,n)):(t.tag=0,te&&o&&pa(t),Ee(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(br(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=dh(i),e=ot(i,e),r){case 0:t=Es(null,t,i,e,n);break e;case 1:t=Fl(null,t,i,e,n);break e;case 11:t=Rl(null,t,i,e,n);break e;case 14:t=Ml(null,t,i,ot(i.type,e),n);break e}throw Error(j(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:ot(i,r),Es(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:ot(i,r),Fl(e,t,i,r,n);case 3:e:{if(nu(t),e===null)throw Error(j(387));i=t.pendingProps,o=t.memoizedState,r=o.element,Ed(e,t),Dr(t,i,null,n);var a=t.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){r=Bn(Error(j(423)),t),t=Dl(e,t,i,n,r);break e}else if(i!==r){r=Bn(Error(j(424)),t),t=Dl(e,t,i,n,r);break e}else for(He=Ht(t.stateNode.containerInfo.firstChild),qe=t,te=!0,at=null,n=Id(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),i===r){t=Pt(e,t,n);break e}Ee(e,t,i,n)}t=t.child}return t;case 5:return Pd(t),e===null&&Ss(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,a=r.children,ws(i,r)?a=null:o!==null&&ws(i,o)&&(t.flags|=32),tu(e,t),Ee(e,t,a,n),t.child;case 6:return e===null&&Ss(t),null;case 13:return iu(e,t,n);case 4:return ba(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=On(t,null,i,n):Ee(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:ot(i,r),Rl(e,t,i,r,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,o=t.memoizedProps,a=r.value,K(Mr,i._currentValue),i._currentValue=a,o!==null)if(pt(o.value,a)){if(o.children===r.children&&!Me.current){t=Pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(o.tag===1){c=Nt(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Cs(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Cs(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ee(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,Ln(t,n),r=tt(r),i=i(r),t.flags|=1,Ee(e,t,i,n),t.child;case 14:return i=t.type,r=ot(i,t.pendingProps),r=ot(i.type,r),Ml(e,t,i,r,n);case 15:return Zd(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:ot(i,r),br(e,t),t.tag=1,Fe(i)?(e=!0,zr(t)):e=!1,Ln(t,n),Yd(t,i,r),Is(t,i,r,n),Ps(null,t,i,!0,e,n);case 19:return ru(e,t,n);case 22:return eu(e,t,n)}throw Error(j(156,t.tag))};function bu(e,t){return Gc(e,t)}function ch(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,i){return new ch(e,t,n,i)}function La(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dh(e){if(typeof e=="function")return La(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ea)return 11;if(e===ta)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jr(e,t,n,i,r,o){var a=2;if(i=e,typeof e=="function")La(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case bn:return ln(n.children,r,o,t);case Zs:a=8,r|=8;break;case Ko:return e=Ze(12,n,t,r|2),e.elementType=Ko,e.lanes=o,e;case Xo:return e=Ze(13,n,t,r),e.elementType=Xo,e.lanes=o,e;case Zo:return e=Ze(19,n,t,r),e.elementType=Zo,e.lanes=o,e;case Pc:return lo(n,r,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tc:a=10;break e;case Ec:a=9;break e;case ea:a=11;break e;case ta:a=14;break e;case Lt:a=16,i=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ze(a,n,t,r),t.elementType=e,t.type=i,t.lanes=o,t}function ln(e,t,n,i){return e=Ze(7,e,i,t),e.lanes=n,e}function lo(e,t,n,i){return e=Ze(22,e,i,t),e.elementType=Pc,e.lanes=n,e.stateNode={isHidden:!1},e}function Oo(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Uo(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uh(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xo(0),this.expirationTimes=xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xo(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ra(e,t,n,i,r,o,a,l,c){return e=new uh(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wa(o),e}function ph(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function xu(e){if(!e)return Yt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Fe(n))return xd(e,n,t)}return t}function ku(e,t,n,i,r,o,a,l,c){return e=Ra(n,i,!0,e,r,o,a,l,c),e.context=xu(null),n=e.current,i=Pe(),r=Gt(n),o=Nt(i,r),o.callback=t??null,qt(n,o,r),e.current.lanes=r,Di(e,r,i),De(e,i),e}function co(e,t,n,i){var r=t.current,o=Pe(),a=Gt(r);return n=xu(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,a),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=qt(r,t,a),e!==null&&(ct(e,r,a,o),yr(e,r,a)),a}function Gr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ma(e,t){Jl(e,t),(e=e.alternate)&&Jl(e,t)}function mh(){return null}var ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fa(e){this._internalRoot=e}uo.prototype.render=Fa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));co(e,t,null,null)};uo.prototype.unmount=Fa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){co(null,e,null,null)}),t[Tt]=null}};function uo(e){this._internalRoot=e}uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ed();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&nd(e)}};function Da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yl(){}function hh(e,t,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var d=Gr(a);o.call(d)}}var a=ku(t,i,e,0,null,!1,!1,"",Yl);return e._reactRootContainer=a,e[Tt]=a.current,Ei(e.nodeType===8?e.parentNode:e),hn(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var d=Gr(c);l.call(d)}}var c=Ra(e,0,!1,null,null,!1,!1,"",Yl);return e._reactRootContainer=c,e[Tt]=c.current,Ei(e.nodeType===8?e.parentNode:e),hn(function(){co(t,c,n,i)}),c}function mo(e,t,n,i,r){var o=n._reactRootContainer;if(o){var a=o;if(typeof r=="function"){var l=r;r=function(){var c=Gr(a);l.call(c)}}co(t,a,e,r)}else a=hh(n,t,e,r,i);return Gr(a)}Xc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ci(t.pendingLanes);n!==0&&(ra(t,n|1),De(t,de()),!(G&6)&&(Wn=de()+500,Zt()))}break;case 13:hn(function(){var i=Et(e,1);if(i!==null){var r=Pe();ct(i,e,1,r)}}),Ma(e,1)}};oa=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Pe();ct(t,e,134217728,n)}Ma(e,134217728)}};Zc=function(e){if(e.tag===13){var t=Gt(e),n=Et(e,t);if(n!==null){var i=Pe();ct(n,e,t,i)}Ma(e,t)}};ed=function(){return Q};td=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};cs=function(e,t,n){switch(t){case"input":if(ns(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=no(i);if(!r)throw Error(j(90));Ac(i),ns(i,r)}}}break;case"textarea":zc(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};Uc=Aa;Bc=hn;var fh={usingClientEntryPoint:!1,Events:[Ui,Sn,no,Dc,Oc,Aa]},ri={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gh={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qc(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||mh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lr.isDisabled&&lr.supportsFiber)try{Xr=lr.inject(gh),wt=lr}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Da(t))throw Error(j(200));return ph(e,t,null,n)};Ge.createRoot=function(e,t){if(!Da(e))throw Error(j(299));var n=!1,i="",r=ju;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Ra(e,1,!1,null,null,n,!1,i,r),e[Tt]=t.current,Ei(e.nodeType===8?e.parentNode:e),new Fa(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=qc(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return hn(e)};Ge.hydrate=function(e,t,n){if(!po(t))throw Error(j(200));return mo(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!Da(e))throw Error(j(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",a=ju;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ku(t,null,e,1,n??null,r,!1,o,a),e[Tt]=t.current,Ei(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new uo(t)};Ge.render=function(e,t,n){if(!po(t))throw Error(j(200));return mo(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!po(e))throw Error(j(40));return e._reactRootContainer?(hn(function(){mo(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Aa;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!po(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return mo(e,t,n,!1,i)};Ge.version="18.3.1-next-f1338f8080-20240426";function Su(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Su)}catch(e){console.error(e)}}Su(),Sc.exports=Ge;var yh=Sc.exports,Kl=yh;Jo.createRoot=Kl.createRoot,Jo.hydrateRoot=Kl.hydrateRoot;const ye={learner:{memberId:"member-learner-001",contactId:"contact-learner-001",email:"learner@example.com",displayName:"Amina Jacobs",roles:["learner"]},lecturer:{memberId:"member-lecturer-001",contactId:"contact-lecturer-001",email:"lecturer@example.com",displayName:"Faithonomics Lecturer",roles:["lecturer"]},administrator:{memberId:"member-admin-001",contactId:"contact-admin-001",email:"admin@example.com",displayName:"Faithonomics Admin",roles:["administrator"]}},ui=e=>`/Faithonomics/${e.replace(/^\/+/,"")}`,dt=[{id:"course-faithonomics-core",slug:"faithonomics-economic-discipleship",title:"Faithonomics Economic Discipleship",summary:"Eight levels that align work, stewardship, ownership, integrity and economic impact with God's framework.",description:"A structured Faithonomics LMS pathway with 8 levels, 32 sessions, step-based teaching blocks, interactive activities, written reflections and completion tracking.",imageUrl:ui("faithonomics-logo.png"),status:"published",pricePlanIds:["plan-faithonomics-core"],storeProductIds:["product-faithonomics-core"],isFree:!1,lecturerIds:[ye.lecturer.memberId],estimatedHours:32,certificateTemplateId:"certificate-faithonomics-core",theme:{primary:"#234638",accent:"#B99245"}}],Cu=[{title:"Level 1: Economic Alignment",description:"Move from economic pressure to intentional alignment.",sessions:["The Daily Grind","Competing Paradigms","Strategic Alignment","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_bf680d1d5dfc468fbd5db89ae370217b~mv2.png",imageAlt:"Faithonomics Level 1 course artwork."},{title:"Level 2: God's Economic Framework",description:"Understand creation, household, and community as economic foundations.",sessions:["The Household Model of Economics","The Economy of Creation","The Economy of Community","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_c29d7165ba394234ad2f0e43b16ed57b~mv2.png",imageAlt:"Faithonomics Level 2 course artwork."},{title:"Level 3: Economic Renewal",description:"Explore identity, repentance, and the power to change economic habits.",sessions:["The Way In","A New Identity","Power to Change","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_f82323d9106a4fe2a024bdf5dc58ef46~mv2.png",imageAlt:"Faithonomics Level 3 course artwork."},{title:"Level 4: Economic Impact and Transformation",description:"Trace transformation from personal decisions to social and societal renewal.",sessions:["Personal Change","Social Change","Societal Change","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_9e68cca7bfc54ba1a2215b7e63db5223~mv2.png",imageAlt:"Faithonomics Level 4 course artwork."},{title:"Level 5: God the Economist",description:"Practise abundance, ownership, and creative stewardship.",sessions:["More Than Enough","Who Really Owns It?","Created to Create","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_1625036257f242189f311908439e6f57~mv2.png",imageAlt:"Faithonomics Level 5 course artwork."},{title:"Level 6: The Great Command",description:"Let love set the standard for enterprise, access, and business culture.",sessions:["How We Do Business","Room for Everyone","Love Sets the Standard","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_71676a8bba0c4e7b919f743daae40178~mv2.png",imageAlt:"Faithonomics Level 6 course artwork."},{title:"Level 7: Godly Economic Practices",description:"Develop practical habits for work, generosity, and management.",sessions:["Work That Matters","Open Hands, Open Doors","Manage What Matters","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_98ed63ccc0c74cecb623057e5a23a200~mv2.png",imageAlt:"Faithonomics Level 7 course artwork."},{title:"Level 8: Economic Integrity",description:"Confront idolatry, hidden costs, and the discipline of enough.",sessions:["When Success Becomes an Idol","Who Pays the Price?","Enough Is Enough","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_714bd11be0764efc80bd75a8aeff1ddb~mv2.png",imageAlt:"Faithonomics Level 8 course artwork."}],vh=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),xt=Cu.map((e,t)=>({id:`level-${t+1}`,courseId:"course-faithonomics-core",title:e.title,description:e.description,sequence:t+1,..."imageUrl"in e?{imageUrl:e.imageUrl,imageAlt:e.imageAlt}:{}})),zt=xt.map(e=>({moduleId:e.id,levelTitle:e.title,username:`level${e.sequence}`,password:`faith${e.sequence}`})),wh={id:"daily-grind-video-checkpoint",timeSeconds:206,durationSeconds:321,title:"Interactive Quiz: The Daily Grind",questions:[{id:"daily-grind-thabo-choice",prompt:"Thabo has R50. The latte costs R45. The coffee and muffin costs R49. Why might Thabo still choose the R49 option?",choices:["Because spending almost everything is always wise","Because the muffin may help him get through the morning","Because the latte is a bad product","Because the coffee shop owner told him to choose it","Because cheaper choices are always selfish","Because the muffin makes the coffee free"],correctAnswer:"Because the muffin may help him get through the morning",feedback:'Correct. Thabo is not only asking, "What is cheaper?" He is asking, "What will help me use what I have well today?" This shows that everyday choices are shaped by needs, values, and the situation.'},{id:"daily-grind-thabo-decision",prompt:"Which question best describes what is happening inside Thabo's decision?",choices:["How can I buy the most expensive thing?","How can I copy what other people are buying?","How can I use my limited money in a way that serves my day well?","How can I avoid thinking about my choice?","How can I make Johan happy?","How can I prove that food is more important than drink?"],correctAnswer:"How can I use my limited money in a way that serves my day well?",feedback:"Correct. Thabo's choice is an everyday example of economics. He has to decide how to use limited money for a real need. This is not cold maths; it is a human choice."},{id:"daily-grind-johan-beans",prompt:"Johan must choose between cheaper Robusta beans and smoother Arabica beans that cost more. Which question should guide him best?",choices:["Which beans cost the least today, even if customers enjoy them less?","Which beans sound more professional when I talk about them?","Which beans help me serve customers well and keep the shop healthy?","Which beans make the fastest decision possible?","Which beans will make every customer buy muffins?","Which beans allow me to ignore what customers think?"],correctAnswer:"Which beans help me serve customers well and keep the shop healthy?",feedback:"Correct. Johan's choice is not only about cost. He must think about quality, trust, customers, and the future of the business. Business choices are moral choices because they affect people."},{id:"daily-grind-government-choice",prompt:"The government considers helping local farmers by making imported beans more expensive. What is the difficult part of this decision?",choices:["It may help local farmers but make coffee more expensive for shops and customers","It will make all coffee free for everyone","It only affects farmers and never affects ordinary people","It proves that government decisions are always easy","It means coffee shops will no longer need customers","It removes the need for careful thinking"],correctAnswer:"It may help local farmers but make coffee more expensive for shops and customers",feedback:"Correct. A decision can help one group while placing pressure on another. This is why public choices must be guided by wisdom, justice, and care for people."},{id:"daily-grind-bigger-lesson",prompt:"What do Thabo, Johan, and the government all show us about economics?",choices:["Economics is only for experts who understand difficult maths","Economics is mainly about banks and stock markets","Economics is about people, businesses, and governments making choices with what they have","Economics has nothing to do with values or beliefs","Economics is only about choosing the cheapest option","Economics is a machine that works without human hearts or convictions"],correctAnswer:"Economics is about people, businesses, and governments making choices with what they have",feedback:"Correct. Economics studies real choices. And because real choices come from what people value, trust, love, and believe, our morals and faith should stand at the centre of our economic life."}],conclusion:"Thabo's coffee choice, Johan's business decision, and the government's farming policy all point to one lesson: economics is not only about money, banks, graphs, or difficult maths. It is about the choices people make with what they have. Because choices are shaped by what people value and believe, our morals and faith must guide our economic life."},bh={id:"tale-of-two-cities-video-checkpoint",timeSeconds:581,durationSeconds:736,title:"Interactive Quiz: Tale of Two Cities",questions:[{id:"tale-edenic-economy",prompt:"According to the Bible's account of human history, what was the defining characteristic of humanity's role in the Edenic economy?",choices:["The accumulation of surplus goods for future trade","Labour as a form of penance for existence","Stewardship of resources belonging to the Creator","Final ownership of the land and its resources","Determining the price of goods through market demand","Developing technology to master the natural world"],correctAnswer:"Stewardship of resources belonging to the Creator",feedback:"Correct. Eden begins with stewardship: people receive creation as a trust from the Creator rather than as final owners."},{id:"tale-first-meltdown",prompt:"What is the first economic meltdown in human history?",choices:["The depletion of natural resources due to over-farming","The failure of the irrigation systems in Eden","A heart that no longer trusts in divine provision","The introduction of currency and debt cycles","The sudden inflation of value within the garden","The collapse of the first market in the wilderness"],correctAnswer:"A heart that no longer trusts in divine provision",feedback:"Correct. The first collapse begins inside the human heart when trust in God's provision gives way to grasping and suspicion."},{id:"tale-cain-enoch",prompt:"What motivated Cain to build the city of Enoch after the conflict with Abel?",choices:["A plan to centralize the worship of the Creator","An attempt to restore the abundance of the lost Eden","A divine mandate to expand the borders of the garden","The need to establish a fair system of trade between tribes","A desire for self-protection and security in his own strength","The pursuit of artistic beauty through metalwork and music"],correctAnswer:"A desire for self-protection and security in his own strength",feedback:"Correct. Cain's city is presented as security built around human strength after broken trust and exile."},{id:"tale-babel-goal",prompt:"According to the analysis of Babel, what was the primary goal of the tower and city project?",choices:["To make a name for humanity without a divine centre","To preserve linguistic diversity through written records","To create a global distribution network for surplus grain","To bridge the gap between human labour and divine rest","To establish a centralised system of debt and credit","To defend against the rising power of neighbouring empires"],correctAnswer:"To make a name for humanity without a divine centre",feedback:"Correct. Babel gathers human ambition around self-made greatness rather than worship, trust, and divine centre."},{id:"tale-babylon-unstable",prompt:"The prophets describe the economy of Babylon as morally unstable because its beauty was dependent on what?",choices:["The use of unsustainable farming practices in the fertile crescent","The isolationist trade policies that limited its wealth","A lack of skilled labour and technological advancement","Extraction, forced labour, and the exploitation of the weak","High levels of inflation caused by military overspending","Frequent natural disasters that interrupted its markets"],correctAnswer:"Extraction, forced labour, and the exploitation of the weak",feedback:"Correct. Babylon can look impressive, but the prophets expose the injustice and exploitation underneath its wealth."},{id:"tale-new-jerusalem-economy",prompt:"How is the New Jerusalem's economy fundamentally different from Babylon's?",choices:["It sends blessing outward and brings healing to the nations","It returns humanity to a primitive, pre-urban state","It eliminates the need for human work and creativity","It relies on a strictly barter-based system without value","It restricts its resources to a specific chosen population","It is built on the foundations of human debt and labour"],correctAnswer:"It sends blessing outward and brings healing to the nations",feedback:"Correct. The New Jerusalem is not built on extraction. Its life flows outward as healing and blessing for the nations."},{id:"tale-work-restored",prompt:"In the New Jerusalem, what happens to the concept of work?",choices:["It is restored to its original purpose of joyful cultivation","It remains a painful toil due to the resistance of the ground","It is automated through advanced celestial technology","It is categorised strictly as religious ritual worship","It becomes a way to earn a higher status within the city","It is replaced by eternal leisure and rest"],correctAnswer:"It is restored to its original purpose of joyful cultivation",feedback:"Correct. Work is not erased. It is healed and restored as joyful, fruitful service before God."},{id:"tale-decisive-question",prompt:"What is identified as the decisive question behind every economy in the Bible?",choices:["Which ruler possesses the most military power?","How can it most effectively eliminate the need for labour?","Who or what stands at its centre?","How much gross domestic product can it generate?","What is the most efficient use of available technology?","How can it achieve a state of permanent human unity?"],correctAnswer:"Who or what stands at its centre?",feedback:"Correct. Biblical economics keeps asking what occupies the centre: God and neighbour, or human pride, fear, and control."}],conclusion:"The story moves from Eden's stewardship, through cities shaped by fear and pride, toward the New Jerusalem where work, resources, and public life are restored around God's presence and blessing."},Ye=(e,t={})=>`
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
                  <img src="${ui("assets/pillar-property-clean.png")}" alt="" />
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
                  <img src="${ui("assets/pillar-relationships-clean.png")}" alt="" />
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
                  <img src="${ui("assets/pillar-work-clean.png")}" alt="" />
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
                  <img src="${ui("assets/pillar-consumption-clean.png")}" alt="" />
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
                          alt="The City without God flip card front."
                        />
                      </figure>
                      <span class="city-love-face city-love-back city-love-back-man" data-love-city="man">
                        <strong>The City without God (Civitas Terrena)</strong>
                        <p>
                          The City without God (Civitas Terrena) is built on disordered self-love. This is a love of self
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
  `,{...t.includeCompleteButton===void 0?{}:{includeCompleteButton:t.includeCompleteButton},completeButtonLabel:t.completeButtonLabel??"Complete trajectory timeline"})}),Xl=[{number:1,label:"The Garden",images:[{url:"https://static.wixstatic.com/media/7638b6_3232598d947547769b19edd2f2963e0e~mv2.png",alt:"The Garden: an economy of gift, abundance, stewardship and divine generosity."},{url:"https://static.wixstatic.com/media/7638b6_29e376cb2414463d8ddd637d76bb56f4~mv2.png",alt:"The Garden economy expressed through abundance as gift, work as stewardship and limits as freedom."}]},{number:2,label:"Jerusalem",images:[{url:"https://static.wixstatic.com/media/7638b6_ffdea86f0e1e40b5b19202f684ad4aa9~mv2.png",alt:"Jerusalem as the earthly shadow centred on worship, justice and covenant."},{url:"https://static.wixstatic.com/media/7638b6_994b99b252df4e17aa830f35dfb03796~mv2.png",alt:"The collapse of the earthly city through greed, exploitation and exile."}]},{number:3,label:"New Jerusalem",images:[{url:"https://static.wixstatic.com/media/7638b6_309bf85168744a9195377b3d4fee4906~mv2.png",alt:"The New Jerusalem where economics and worship are one, scarcity ends and moral clarity returns."},{url:"https://static.wixstatic.com/media/7638b6_a04f8ce1bddc41a797f6298a82d30dfd~mv2.png",alt:"Human vocation and everyday jobs finding their purpose in healing the world."}]}],Ch=(e,t={})=>{const n=Xl.map(r=>`
        <button
          class="kingdom-hotspot kingdom-number-hotspot kingdom-point-${r.number}"
          type="button"
          aria-label="Open point ${r.number}: ${r.label}"
          data-rich-dialog-open="#${e}-kingdom-trajectory-popup-${r.number}"
        ></button>
        <button
          class="kingdom-hotspot kingdom-hand-hotspot kingdom-point-${r.number}"
          type="button"
          aria-label="Open point ${r.number} images: ${r.label}"
          data-rich-dialog-open="#${e}-kingdom-trajectory-popup-${r.number}"
        ></button>`).join(""),i=Xl.map(r=>`
      <section
        class="kingdom-popup"
        id="${e}-kingdom-trajectory-popup-${r.number}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${e}-kingdom-trajectory-title-${r.number}"
        data-rich-dialog
        hidden
      >
        <button class="kingdom-popup-backdrop" type="button" aria-label="Close point ${r.number} popup" data-rich-dialog-close></button>
        <div class="kingdom-popup-panel">
          <header class="kingdom-popup-head">
            <h3 id="${e}-kingdom-trajectory-title-${r.number}">Point ${r.number}: ${r.label}</h3>
            <button class="kingdom-close" type="button" aria-label="Close point ${r.number} popup" data-rich-dialog-close>&times;</button>
          </header>
          <div class="kingdom-flipbook" aria-label="Point ${r.number} two-sided image">
            <input
              class="kingdom-flip-toggle kingdom-flip-front-toggle"
              type="radio"
              name="${e}-kingdom-flip-${r.number}"
              id="${e}-kingdom-flip-${r.number}-front"
              checked
            />
            <input
              class="kingdom-flip-toggle kingdom-flip-back-toggle"
              type="radio"
              name="${e}-kingdom-flip-${r.number}"
              id="${e}-kingdom-flip-${r.number}-back"
            />
            <div class="kingdom-flip-stage">
              <div class="kingdom-flip-card">
                <figure class="kingdom-flip-face kingdom-flip-front">
                  <img src="${r.images[0].url}" alt="${r.images[0].alt}" />
                </figure>
                <figure class="kingdom-flip-face kingdom-flip-back">
                  <img src="${r.images[1].url}" alt="${r.images[1].alt}" />
                </figure>
              </div>
            </div>
            <div class="kingdom-flip-controls">
              <label class="kingdom-flip-arrow kingdom-flip-prev" for="${e}-kingdom-flip-${r.number}-front" aria-label="Show previous ${r.label} image">&#8592;</label>
              <div class="kingdom-flip-dots" aria-label="Choose ${r.label} image">
                <label class="kingdom-flip-dot kingdom-flip-dot-front" for="${e}-kingdom-flip-${r.number}-front" aria-label="Show ${r.label} image 1"></label>
                <label class="kingdom-flip-dot kingdom-flip-dot-back" for="${e}-kingdom-flip-${r.number}-back" aria-label="Show ${r.label} image 2"></label>
              </div>
              <label class="kingdom-flip-arrow kingdom-flip-next" for="${e}-kingdom-flip-${r.number}-back" aria-label="Flip to next ${r.label} image">&#8594;</label>
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

        ${i}
      </section>
    `,{...t.includeCompleteButton===void 0?{}:{includeCompleteButton:t.includeCompleteButton},completeButtonLabel:t.completeButtonLabel??"Complete kingdom trajectory timeline"})}},Nh=e=>{const t=Sh(e,{includeCompleteButton:!1}),n=Ch(e,{completeButtonLabel:"Complete both trajectory timelines"}),i=`${e}-trajectory-view-without-god`,r=`${e}-trajectory-view-with-god`;return{id:`${e}-combined-city-trajectories`,kind:"customHtml",title:"Step 4: The Two Trajectories of the City",body:`
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

        #${i}:checked ~ .combined-trajectory-tabs label[for="${i}"],
        #${r}:checked ~ .combined-trajectory-tabs label[for="${r}"] {
          border-color: #294f3c;
          background: #294f3c;
          color: #ffffff;
        }

        .combined-trajectory-panel {
          display: none;
        }

        #${i}:checked ~ .combined-trajectory-panels .combined-trajectory-without-god,
        #${r}:checked ~ .combined-trajectory-panels .combined-trajectory-with-god {
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
        <input class="combined-trajectory-toggle" type="radio" name="${e}-trajectory-view" id="${i}" checked />
        <input class="combined-trajectory-toggle" type="radio" name="${e}-trajectory-view" id="${r}" />
        <nav class="combined-trajectory-tabs" aria-label="Choose a city trajectory">
          <label class="combined-trajectory-tab" for="${i}">City without God</label>
          <label class="combined-trajectory-tab" for="${r}">City with God</label>
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
    `}},Ih=[{key:"spiritual-centre",title:"Spiritual Centre",imageUrl:"https://static.wixstatic.com/media/7638b6_855f1ad517a1435480e9d5cd9b73bb93~mv2.png",babylon:"Human pride, self-glory, wealth, and power apart from God.",newJerusalem:"God's presence, glory, and the throne of God and of the Lamb."},{key:"view-of-people",title:"View of People",imageUrl:"https://static.wixstatic.com/media/7638b6_511388be90cb42a986331931d222ca91~mv2.png",babylon:"Commodities, slaves, or consumers; economic units and disposable objects to be purchased and discarded.",newJerusalem:"Image-bearers, family, priests, and servants with inherent dignity and spiritual worth."},{key:"view-of-wealth",title:"View of Wealth",imageUrl:"https://static.wixstatic.com/media/7638b6_bd952b5fa70d448ab15cccafa9c0e9d5~mv2.png",babylon:"Ultimate security, status, and luxury achieved through hoarding, predatory accumulation, and power.",newJerusalem:"A gift from God; stewardship, blessing, and shared abundance used for service."},{key:"view-of-work",title:"View of Work",imageUrl:"https://static.wixstatic.com/media/7638b6_84a6fb3b318649e9907772b5ac481411~mv2.png",babylon:"Toil, exploitation, performance-driven mastery, and the twisting of craftsmanship into slavery.",newJerusalem:"Vocation, co-creative partnership with God, worshipful service, and creativity freed from the curse of toil."},{key:"social-fruit",title:"Social Fruit",imageUrl:"https://static.wixstatic.com/media/7638b6_d3154fd777e74fbcb84f5aef137cb831~mv2.png",babylon:"Intoxication, deception, excess, oppression, violence, anxiety, moral corruption, and environmental degradation.",newJerusalem:"Healing of the nations, justice, righteousness, peace (shalom), restored life, and universal flourishing."},{key:"final-destiny",title:"Final Destiny",imageUrl:"https://static.wixstatic.com/media/7638b6_d568232ec526406594c8b8c22c30d89b~mv2.png",babylon:"Sudden collapse, judgment, and destruction by fire.",newJerusalem:"Enduring life, renewal of the material cosmos, and eternal communion with God."}],Th=e=>{const t=Ih.map(n=>{const i=`${e}-contrast-${n.key}`,r=`${e}-contrast-${n.key}-babylon`,o=`${e}-contrast-${n.key}-new-jerusalem`;return`
        <article class="two-city-contrast-card">
          <input class="two-city-contrast-toggle" type="checkbox" id="${i}" />
          <div class="two-city-contrast-scene">
            <div class="two-city-contrast-inner">
              <label class="two-city-contrast-face two-city-contrast-front" for="${i}">
                <img src="${n.imageUrl}" alt="${n.title} comparison" />
                <span>${n.title}</span>
              </label>
              <div class="two-city-contrast-face two-city-contrast-back">
                <label class="two-city-contrast-return" for="${i}">
                  <strong>${n.title}</strong>
                  <span>Choose a city to compare</span>
                </label>
                <div class="two-city-contrast-actions">
                  <button type="button" data-rich-dialog-open="#${r}">Babylon: The City without God</button>
                  <button type="button" data-rich-dialog-open="#${o}">New Jerusalem: The City of God</button>
                </div>
              </div>
            </div>
          </div>
        </article>
        <section class="two-city-contrast-popup" id="${r}" role="dialog" aria-modal="true" aria-labelledby="${r}-title" data-rich-dialog hidden>
          <button class="two-city-contrast-scrim" type="button" aria-label="Close ${n.title} Babylon comparison" data-rich-dialog-close></button>
          <div class="two-city-contrast-popup-panel">
            <header>
              <p class="eyebrow">${n.title}</p>
              <h3 id="${r}-title">Babylon: The City without God</h3>
              <button class="two-city-contrast-close" type="button" aria-label="Close ${n.title} Babylon comparison" data-rich-dialog-close>&times;</button>
            </header>
            <p>${n.babylon}</p>
          </div>
        </section>
        <section class="two-city-contrast-popup" id="${o}" role="dialog" aria-modal="true" aria-labelledby="${o}-title" data-rich-dialog hidden>
          <button class="two-city-contrast-scrim" type="button" aria-label="Close ${n.title} New Jerusalem comparison" data-rich-dialog-close></button>
          <div class="two-city-contrast-popup-panel">
            <header>
              <p class="eyebrow">${n.title}</p>
              <h3 id="${o}-title">New Jerusalem: The City of God</h3>
              <button class="two-city-contrast-close" type="button" aria-label="Close ${n.title} New Jerusalem comparison" data-rich-dialog-close>&times;</button>
            </header>
            <p>${n.newJerusalem}</p>
          </div>
        </section>`}).join("");return{id:`${e}-living-between-two-cities-discussion`,kind:"customHtml",title:"Step 5: Living Between Two Cities Discussion",body:Ye(`
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

      .two-cities-foundation {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: clamp(20px, 4vw, 42px);
        align-items: stretch;
        padding: clamp(16px, 3vw, 28px) 0;
        border-top: 1px solid rgba(91, 58, 36, 0.2);
        border-bottom: 1px solid rgba(91, 58, 36, 0.2);
      }

      .two-cities-foundation figure {
        display: grid;
        place-items: center;
        margin: 0;
      }

      .two-cities-foundation img {
        display: block;
        width: 100%;
        height: 100%;
        max-height: 480px;
        border-radius: 8px;
        object-fit: contain;
      }

      .two-cities-foundation p {
        margin: 0;
        color: var(--ink);
        font-size: clamp(1rem, 2vw, 1.14rem);
        line-height: 1.72;
      }

      .two-cities-contrast {
        display: grid;
        gap: 16px;
      }

      .two-cities-contrast header h2,
      .two-cities-contrast header p {
        margin: 0;
      }

      .two-cities-contrast header {
        display: grid;
        gap: 7px;
      }

      .two-cities-contrast-intro {
        display: grid;
        gap: 10px;
        max-width: 900px;
        color: #4d5c51;
        font-size: 16px;
        line-height: 1.72;
      }

      .two-cities-contrast-intro p {
        margin: 0;
      }

      .two-cities-in-between {
        display: grid;
        gap: 16px;
        padding-top: 8px;
        border-top: 1px solid rgba(91, 58, 36, 0.2);
      }

      .two-cities-in-between header {
        display: grid;
        gap: 7px;
      }

      .two-cities-in-between header h2,
      .two-cities-in-between header p,
      .two-cities-in-between-copy p {
        margin: 0;
      }

      .two-cities-in-between-content {
        display: grid;
        gap: 24px;
      }

      .two-cities-in-between figure {
        margin: 0;
        overflow: hidden;
        border: 1px solid rgba(91, 58, 36, 0.24);
        border-radius: 8px;
        background: #f6efdc;
      }

      .two-cities-in-between figure img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        height: auto;
        object-fit: fill;
      }

      .two-cities-in-between-copy {
        display: grid;
        gap: 14px;
        color: #243d32;
        font-size: 16px;
        line-height: 1.72;
      }

      .faithful-presence {
        display: grid;
        gap: 18px;
        padding-top: 8px;
        border-top: 1px solid rgba(91, 58, 36, 0.2);
      }

      .faithful-presence header {
        display: grid;
        gap: 7px;
      }

      .faithful-presence header h2,
      .faithful-presence header p,
      .faithful-presence-intro p,
      .faithful-presence-panel h3,
      .faithful-presence-panel p {
        margin: 0;
      }

      .faithful-presence-intro {
        display: grid;
        gap: 12px;
        max-width: 960px;
        color: #4d5c51;
        font-size: 16px;
        line-height: 1.72;
      }

      .faithful-presence-toggle {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
      }

      .faithful-presence-tabs {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        width: min(100%, 420px);
        padding: 6px;
        border-radius: 8px;
        background: #e7ded0;
      }

      .faithful-presence-tabs label {
        min-height: 50px;
        display: grid;
        place-items: center;
        border-radius: 6px;
        color: var(--forest);
        cursor: pointer;
        font-size: 1rem;
        font-weight: 850;
        text-align: center;
      }

      .faithful-presence-engage-toggle:checked ~ .faithful-presence-tabs [data-faithful-presence-tab="engage"],
      .faithful-presence-resist-toggle:checked ~ .faithful-presence-tabs [data-faithful-presence-tab="resist"] {
        background: var(--forest);
        box-shadow: 0 6px 16px rgba(24, 61, 50, 0.2);
        color: var(--paper);
      }

      .faithful-presence-panels {
        display: grid;
      }

      .faithful-presence-panel {
        display: none;
        grid-template-columns: minmax(0, 1.15fr) minmax(260px, 0.85fr);
        gap: clamp(24px, 5vw, 64px);
        align-items: center;
        padding: clamp(26px, 5vw, 54px);
        border: 1px solid rgba(91, 58, 36, 0.16);
        border-radius: 8px;
        background: #fbf8f0;
        box-shadow: 0 12px 28px rgba(69, 55, 33, 0.1);
      }

      .faithful-presence-engage-toggle:checked ~ .faithful-presence-panels .faithful-presence-panel--engage,
      .faithful-presence-resist-toggle:checked ~ .faithful-presence-panels .faithful-presence-panel--resist {
        display: grid;
      }

      .faithful-presence-panel-copy {
        display: grid;
        gap: 14px;
        color: #425249;
        font-size: 18px;
        line-height: 1.5;
      }

      .faithful-presence-panel-copy h3 {
        color: var(--forest);
        font-size: clamp(1.25rem, 2.1vw, 1.72rem);
      }

      .faithful-presence-callout {
        display: grid;
        gap: 16px;
        padding: 24px;
        border-left: 5px solid var(--gold);
        background: #f0e4cf;
        color: var(--forest);
      }

      .faithful-presence-callout p {
        font-size: 18px;
        font-weight: 800;
        line-height: 1.35;
      }

      .faithful-presence-popup-button {
        width: fit-content;
        min-height: 42px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border: 1px solid var(--forest);
        border-radius: 6px;
        padding: 9px 13px;
        background: var(--forest);
        color: var(--paper);
        cursor: pointer;
        font: inherit;
        font-weight: 800;
      }

      .faithful-presence-click-icon {
        font-size: 1.05rem;
        line-height: 1;
      }

      .faithful-presence-popup-button:hover,
      .faithful-presence-popup-button:focus-visible {
        background: #315746;
      }

      .faithful-presence-popup {
        position: fixed;
        inset: 0;
        z-index: 900;
        display: grid;
        place-items: center;
        padding: 20px;
      }

      .faithful-presence-popup[hidden] {
        display: none;
      }

      .faithful-presence-popup-scrim {
        position: absolute;
        inset: 0;
        border: 0;
        background: rgba(24, 31, 25, 0.72);
        cursor: pointer;
      }

      .faithful-presence-popup-panel {
        position: relative;
        z-index: 1;
        width: min(100%, 1080px);
        max-height: min(90vh, 760px);
        overflow: auto;
        border: 1px solid rgba(185, 146, 69, 0.62);
        border-radius: 8px;
        padding: 12px;
        background: var(--paper);
        box-shadow: 0 22px 50px rgba(0, 0, 0, 0.3);
      }

      .faithful-presence-popup-panel img {
        display: block;
        width: 100%;
        height: auto;
      }

      .faithful-presence-popup-close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 36px;
        height: 36px;
        border: 0;
        border-radius: 50%;
        background: var(--forest);
        color: var(--paper);
        cursor: pointer;
        font-size: 1.5rem;
        line-height: 1;
      }

      .economic-foundation-reflection {
        display: grid;
        gap: 16px;
        padding: 20px;
        border: 1px solid rgba(185, 146, 69, 0.48);
        border-left: 5px solid var(--gold);
        border-radius: 8px;
        background: #eee0bf;
      }

      .economic-foundation-reflection h2,
      .economic-foundation-reflection p {
        margin: 0;
      }

      .economic-foundation-reflection h2 {
        color: var(--forest);
        font-size: clamp(1.1rem, 1.75vw, 1.35rem);
      }

      .economic-foundation-reflection p {
        color: #4d5c51;
        font-size: 16px;
        line-height: 1.72;
      }

      .economic-foundation-reflection textarea {
        min-height: 180px;
        margin: 0;
      }

      .economic-foundation-reflection-complete {
        justify-self: start;
      }

      .two-city-contrast-grid {
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 10px;
      }

      .two-city-contrast-card {
        min-height: 0;
        aspect-ratio: 0.76;
        perspective: 1200px;
      }

      .two-city-contrast-toggle {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
      }

      .two-city-contrast-scene,
      .two-city-contrast-inner,
      .two-city-contrast-face {
        width: 100%;
        height: 100%;
      }

      .two-city-contrast-scene {
        min-height: 0;
      }

      .two-city-contrast-inner {
        position: relative;
        transform-style: preserve-3d;
        transition: transform 420ms ease;
      }

      .two-city-contrast-toggle:checked + .two-city-contrast-scene .two-city-contrast-inner {
        transform: rotateY(180deg);
      }

      .two-city-contrast-face {
        position: absolute;
        inset: 0;
        overflow: hidden;
        border: 1px solid rgba(91, 58, 36, 0.24);
        border-radius: 8px;
        backface-visibility: hidden;
      }

      .two-city-contrast-front {
        display: grid;
        grid-template-rows: 1fr auto;
        background: var(--paper);
        cursor: pointer;
      }

      .two-city-contrast-front img {
        width: 100%;
        height: 100%;
        min-height: 0;
        object-fit: cover;
      }

      .two-city-contrast-front span {
        padding: 8px 6px;
        background: var(--forest);
        color: var(--paper);
        font-size: clamp(0.68rem, 0.9vw, 0.9rem);
        font-weight: 850;
        line-height: 1.2;
        text-align: center;
      }

      .two-city-contrast-back {
        display: grid;
        grid-template-rows: 1fr auto;
        gap: 8px;
        padding: 12px;
        background: #f7f3e8;
        color: var(--forest);
        transform: rotateY(180deg);
      }

      .two-city-contrast-return {
        display: grid;
        align-content: center;
        gap: 5px;
        cursor: pointer;
        text-align: center;
      }

      .two-city-contrast-return strong {
        font-size: clamp(0.78rem, 1vw, 1rem);
      }

      .two-city-contrast-actions {
        display: grid;
        gap: 6px;
      }

      .two-city-contrast-actions button {
        min-height: 38px;
        border: 1px solid var(--forest);
        border-radius: 6px;
        padding: 6px;
        background: transparent;
        color: var(--forest);
        cursor: pointer;
        font: inherit;
        font-size: clamp(0.6rem, 0.76vw, 0.76rem);
        font-weight: 800;
      }

      .two-city-contrast-actions button:hover,
      .two-city-contrast-actions button:focus-visible {
        background: var(--forest);
        color: var(--paper);
      }

      .two-city-contrast-popup {
        position: fixed;
        inset: 0;
        z-index: 900;
        display: grid;
        place-items: center;
        padding: 20px;
      }

      .two-city-contrast-popup[hidden] {
        display: none;
      }

      .two-city-contrast-scrim {
        position: absolute;
        inset: 0;
        border: 0;
        background: rgba(24, 31, 25, 0.72);
        cursor: pointer;
      }

      .two-city-contrast-popup-panel {
        position: relative;
        z-index: 1;
        width: min(100%, 620px);
        border: 1px solid rgba(185, 146, 69, 0.62);
        border-radius: 8px;
        padding: clamp(22px, 4vw, 36px);
        background: var(--paper);
        box-shadow: 0 22px 50px rgba(0, 0, 0, 0.3);
      }

      .two-city-contrast-popup-panel header {
        position: relative;
        display: grid;
        gap: 8px;
        padding-right: 42px;
      }

      .two-city-contrast-popup-panel header h3,
      .two-city-contrast-popup-panel header p,
      .two-city-contrast-popup-panel > p {
        margin: 0;
      }

      .two-city-contrast-popup-panel > p {
        margin-top: 18px;
        color: var(--ink);
        font-size: 1.06rem;
        line-height: 1.68;
      }

      .two-city-contrast-close {
        position: absolute;
        top: -5px;
        right: 0;
        width: 36px;
        height: 36px;
        border: 0;
        border-radius: 50%;
        background: var(--forest);
        color: var(--paper);
        cursor: pointer;
        font-size: 1.5rem;
        line-height: 1;
      }

      @media (max-width: 850px) {
        .two-city-contrast-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(14px, 2vw, 22px);
        }

        .two-city-contrast-card,
        .two-city-contrast-scene {
          min-height: 280px;
          aspect-ratio: auto;
        }

        .two-city-contrast-front span {
          padding: 12px 14px;
          font-size: 1rem;
        }

        .two-city-contrast-back {
          gap: 14px;
          padding: 22px;
        }

        .two-city-contrast-return {
          gap: 8px;
        }

        .two-city-contrast-return strong {
          font-size: 1.32rem;
        }

        .two-city-contrast-actions {
          gap: 9px;
        }

        .two-city-contrast-actions button {
          min-height: 48px;
          padding: 8px 10px;
          font-size: 0.84rem;
        }
      }

      @media (max-width: 700px) {
        .two-cities-foundation {
          grid-template-columns: 1fr;
        }

        .faithful-presence-tabs {
          width: 100%;
        }

        .faithful-presence-panel {
          grid-template-columns: 1fr;
          gap: 22px;
          padding: 24px;
        }

        .faithful-presence-panel-copy,
        .faithful-presence-callout p {
          font-size: 16px;
        }

        .two-cities-foundation figure {
          width: min(100%, 376px);
          justify-self: center;
        }

        .two-city-contrast-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .two-city-contrast-card,
        .two-city-contrast-scene {
          min-height: 280px;
        }
      }

      @media (max-width: 460px) {
        .two-city-contrast-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>

    <section class="two-cities-discussion">
      <section class="audio-discussion" aria-label="Which City Is Your Money Building audio discussion">
        <p class="audio-discussion-copy">Click the image to listen to <strong>Which City Is Your Money Building?</strong></p>
        <input
          class="audio-discussion-toggle"
          type="checkbox"
          id="${e}-which-city-money-building-audio"
          data-rich-popup-toggle
          data-audio-toggle
          data-audio-target="#${e}-which-city-money-building-audio-player"
        />
        <label class="audio-discussion-button" for="${e}-which-city-money-building-audio">
          <img
            src="https://static.wixstatic.com/media/7638b6_4d265beddab44939b223089de3158338~mv2.png"
            alt="Open Which City Is Your Money Building audio discussion"
          />
        </label>
        <div class="audio-popup" role="dialog" aria-label="Which City Is Your Money Building audio player">
          <label class="audio-popup-scrim" for="${e}-which-city-money-building-audio" aria-label="Close audio discussion"></label>
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
            <audio id="${e}-which-city-money-building-audio-player" controls preload="metadata">
              <source src="https://static.wixstatic.com/mp3/7638b6_892fd48495d84ca7a131a8b908493da7.m4a" type="audio/mp4" />
            </audio>
            <label class="audio-popup-close" for="${e}-which-city-money-building-audio">Close</label>
          </div>
        </div>
      </section>

      <header>
        <p class="eyebrow">Two cities reflection</p>
        <h2>How Do We Live Between the Reality of Two Cities?</h2>
      </header>

      <section class="two-cities-foundation" aria-label="God's economic work">
        <figure>
          <img
            src="https://static.wixstatic.com/media/7638b6_1f8d4701ddd94634946065ff3de07fda~mv2.png"
            alt="Illustration accompanying the teaching about God's economic work"
          />
        </figure>
        <p>
          According to the Bible, our economic interactions - like work, running a business, investing and drinking a Coke - must be grounded in our understanding of God. A triune God has engaged in economic interactions with humans throughout history. God’s “<em>economic work</em>” includes creation, extends to redemption and culminates in a new creation. Our role is not just to produce, allocate, and distribute material goods and services. It also involves recognising God’s guidance over every aspect of life, including what we do and what we own, to achieve His ultimate purpose of salvation. Therefore, our economic worldview cannot be grounded in this is how the world works, but must be built around who God is and what He is doing.
        </p>
      </section>

      <section class="two-cities-contrast" aria-label="Contrasting the two cities">
        <header>
          <p class="eyebrow">Two city comparison</p>
          <h2>Contrasting the Two Cities</h2>
        </header>
        <div class="two-cities-contrast-intro">
          <p>Many economists and business leaders are taught that markets, money, and cities are just neutral, technical machines. However, the Bible shows us a far more beautiful and challenging truth: every economy is spiritual because it is built on what we love, value, and worship.</p>
          <p>These flip cards help you explore two opposing pathways in our daily economic lives, influencing how we organize our lives, businesses, and desires. The city of Babylon and the New Jerusalem, as described in the Bible, are not merely ancient historical references; they symbolize two contrasting forces that shape our world, work, and sense of worth. Babylon represents the City without God, while New Jerusalem embodies the City of God, where God is central to its economic activities.</p>
        </div>
        <div class="two-city-contrast-grid">
          ${t}
        </div>
      </section>

      <section class="two-cities-in-between" aria-label="Living in the in-between">
        <header>
          <p class="eyebrow">Two cities reflection</p>
          <h2>Living in the In-Between</h2>
        </header>
        <div class="two-cities-in-between-content">
          <div class="two-cities-in-between-copy">
            <p>In the <strong>"in-between"</strong> of Babylon and the New Jerusalem, we participate in everyday economic life without bowing to its idols, choosing God’s generous provision, justice, and healing over fear and self-interest.</p>
          </div>
          <figure>
            <img
              src="https://static.wixstatic.com/media/7638b6_91a34d5451d44738b3dffa85f4495aa2~mv2.gif"
              alt="Animated illustration of living between Babylon and the New Jerusalem"
            />
          </figure>
        </div>
      </section>

      <section class="faithful-presence" aria-label="Being Citizens of God's City">
        <input class="faithful-presence-toggle faithful-presence-engage-toggle" type="radio" name="${e}-faithful-presence" id="${e}-faithful-presence-engage" checked />
        <input class="faithful-presence-toggle faithful-presence-resist-toggle" type="radio" name="${e}-faithful-presence" id="${e}-faithful-presence-resist" />
        <header>
          <p class="eyebrow">Faithful presence</p>
          <h2>Being Citizens of God’s City: Faithful Presence in the City of Man</h2>
        </header>
        <div class="faithful-presence-intro">
          <p>How do we actually live as citizens of God’s coming city while working inside the everyday markets of our world? The Bible shows us that faithful presence is not about running away to hide in isolated communities, nor is it about blindly blending in with the crowd. Instead, it is a delicate daily dance guided by two powerful commands: <strong>the call to resist</strong> and <strong>the call to engage</strong>.</p>
          <p>These two movements act like our economic compass. They show us exactly when we must stand our ground to protect human dignity, and when we must roll up our sleeves to bring God’s love and repair directly into our workplaces.</p>
          <p>Here is how we navigate this tension:</p>
        </div>
        <div class="faithful-presence-tabs" role="tablist" aria-label="Faithful presence commands">
          <label data-faithful-presence-tab="engage" for="${e}-faithful-presence-engage" role="tab">Engage</label>
          <label data-faithful-presence-tab="resist" for="${e}-faithful-presence-resist" role="tab">Resist</label>
        </div>
        <div class="faithful-presence-panels">
          <article class="faithful-presence-panel faithful-presence-panel--engage">
            <div class="faithful-presence-panel-copy">
              <h3>&#x1F331; The Command to Engage</h3>
              <p>Engagement brings curiosity, skill, and presence into the places where work happens. It asks us to listen closely, contribute generously, and seek repair from within the relationships we have been given.</p>
            </div>
            <aside class="faithful-presence-callout">
              <p>Engage when participation can make room for truth, care, and a more humane shared life.</p>
              <button class="faithful-presence-popup-button" type="button" data-rich-dialog-open="#${e}-faithful-presence-engage-guide">The Command to Engage <span class="faithful-presence-click-icon" aria-hidden="true">&#x1F5B1;</span></button>
            </aside>
          </article>
          <article class="faithful-presence-panel faithful-presence-panel--resist">
            <div class="faithful-presence-panel-copy">
              <h3>&#x1F6E1;&#xFE0F; The Command to Resist</h3>
              <p>Resistance refuses the patterns that deform people and communities. It may look like setting a boundary, telling the truth about harm, declining a false measure of success, or protecting a different rhythm of rest and worship.</p>
            </div>
            <aside class="faithful-presence-callout">
              <p>Resist when the cost of belonging to the system is silence, complicity, or the erosion of what matters most.</p>
              <button class="faithful-presence-popup-button" type="button" data-rich-dialog-open="#${e}-faithful-presence-resist-guide">The Command to Resist <span class="faithful-presence-click-icon" aria-hidden="true">&#x1F5B1;</span></button>
            </aside>
          </article>
        </div>
        <section id="${e}-faithful-presence-engage-guide" class="faithful-presence-popup" role="dialog" aria-label="Engagement guide" data-rich-dialog hidden>
          <button class="faithful-presence-popup-scrim" type="button" data-rich-dialog-close aria-label="Close engagement guide"></button>
          <div class="faithful-presence-popup-panel">
            <button class="faithful-presence-popup-close" type="button" data-rich-dialog-close aria-label="Close engagement guide">&times;</button>
            <img src="https://static.wixstatic.com/media/7638b6_1f432e0ca93f47f78f97f71a15b2a228~mv2.png" alt="Engagement guide" />
          </div>
        </section>
        <section id="${e}-faithful-presence-resist-guide" class="faithful-presence-popup" role="dialog" aria-label="Resistance guide" data-rich-dialog hidden>
          <button class="faithful-presence-popup-scrim" type="button" data-rich-dialog-close aria-label="Close resistance guide"></button>
          <div class="faithful-presence-popup-panel">
            <button class="faithful-presence-popup-close" type="button" data-rich-dialog-close aria-label="Close resistance guide">&times;</button>
            <img src="https://static.wixstatic.com/media/7638b6_a2821415eaa34850898577caa2a7ddf7~mv2.png" alt="Resistance guide" />
          </div>
        </section>
      </section>

      <section class="economic-foundation-reflection" aria-label="Matthew 7 and Revelation 18 reflection">
        <h2>Read Matthew 7:24-27 and Revelation 18</h2>
        <p>Revelation 18 describes how a corrupt economic system that did not have God at its centre comes to a fall. Thus, one day all systems that operate in greed, exploitation, oppression, idolatry, and a rejection of God’s justice will come to a fall. It does not matter whether it is capitalistic or socialistic in nature. Jesus teaches that applying His teaching will last. Consider whether in all our economic dealings we place God at the centre and build upon the rock.</p>
        <textarea aria-label="Matthew 7 and Revelation 18 economic reflection" rows="8" placeholder="Write your reflection here..."></textarea>
        <button class="complete-button economic-foundation-reflection-complete" data-classroom-complete data-score="5" data-max-score="5">Complete step</button>
      </section>
    </section>
  `,{includeCompleteButton:!1})}},$e=Cu.flatMap((e,t)=>e.sessions.map((n,i)=>{const r=t+1,o=i+1,a=`level-${r}-session-${o}-${vh(n)}`,l=n==="Monday Morning",d=r===1?{1:{imageUrl:"https://static.wixstatic.com/media/7638b6_ebb07e58d7b64e3d8a99c272402c6dc9~mv2.png",imageAlt:"Papercraft Faithonomics choices scene for the opening session."},2:{imageUrl:"https://static.wixstatic.com/media/7638b6_0b086c8a75d9429c956c72a796be1f79~mv2.png",imageAlt:"Split papercraft road showing a grey decline path and green-gold renewal path through an open door."},3:{imageUrl:"https://static.wixstatic.com/media/7638b6_b3c35b4d4ed84d3aa0e50cd23c543fc3~mv2.png",imageAlt:"Faithonomics Session 3 illustrated header."},4:{imageUrl:"https://static.wixstatic.com/media/7638b6_d23d57dc349c4025aadcd93121e2db05~mv2.png",imageAlt:"Faithonomics Session 4 illustrated header."}}[o]:void 0,h=[{id:`${a}-session-teaching`,kind:"text",title:"Step 1: Core Teaching",body:`${e.title} frames ${n} as part of faithful economic discipleship. Learners identify the dominant assumption, compare it with God's economy, and name the decision that needs alignment.`},{id:`${a}-session-scripture`,kind:"scripture",title:"Step 2: Scripture and Principle",body:"Read the assigned passage, identify the economic principle, and state how it challenges scarcity, ownership, status, work, generosity, or integrity."},{id:`${a}-session-application`,kind:"text",title:"Step 3: Business Application",body:"Apply the principle to a business case: stakeholders, value creation, pricing, wages, stewardship, customer care, supplier relationships, and long-term trust."},{id:`${a}-session-reflection`,kind:"customHtml",title:"Step 4: Reflection Checkpoint",body:`<main><h2>${n}</h2><p>Choose one action you will practise before the next session.</p><button data-classroom-complete data-score="5" data-max-score="5">Mark reflection complete</button></main>`}];if(r===1&&o===1){h[0]={id:`${a}-session-teaching-video`,kind:"video",title:"Step 1: Choices",body:"Watch the teaching video. At 3:26 it pauses for a checkpoint quiz, then unlocks the next step only after the quiz is completed and the video reaches the end.",url:"https://youtu.be/_0sm9yWHgG4",videoCheckpoint:wh},h.splice(1,2,...xh(a).slice(0,4));const y=h.findIndex(v=>v.id===`${a}-session-reflection`);y!==-1&&h.splice(y,1)}if(r===1&&o===2){h[0]={id:`${a}-tale-of-two-cities-video`,kind:"video",title:"Step 1: Tale of Two Cities",body:"Watch the teaching video. At 9:41 it pauses for a checkpoint quiz. Read the feedback, then continue the video to unlock the next step.",url:"https://youtu.be/th2TF7u2TxQ",videoCheckpoint:bh},h[1]=kh(a),h.splice(2,0,jh(a));const y=h.findIndex(g=>g.id===`${a}-session-application`);y!==-1&&(h[y]=Nh(a)),h.splice(4,0,Th(a));const v=h.findIndex(g=>g.id===`${a}-session-reflection`);v!==-1&&h.splice(v,1)}r===1&&o===3&&h.splice(3,0,{id:`${a}-teaching-video`,kind:"video",title:"Step 4: Teaching Video",body:"Watch the teaching video before attempting the strategic alignment checkpoint.",url:"wix-media://video/faithonomics-strategic-alignment.mp4"});const f=h.find(y=>y.id===`${a}-session-reflection`);return f&&(f.title=`Step ${h.length}: Reflection Checkpoint`),{id:a,courseId:"course-faithonomics-core",moduleId:`level-${r}`,title:`Session ${o}: ${n}`,summary:l?"Translate the level into a practical Monday morning decision, conversation, metric, and action.":a==="level-1-session-1-the-daily-grind"?'To explore the core Faithonomics principle of "The Daily Grind": economics is the study of everyday choices, and those choices must be shaped by our faith, biblical wisdom, and Christ-like moral convictions.':`Develop the core Faithonomics principle of "${n}" and connect it to everyday economic decisions.`,sequence:t*4+i+1,required:!0,estimatedMinutes:a==="level-1-session-1-the-daily-grind"?145:l?35:50,...d?{imageUrl:d.imageUrl,imageAlt:d.imageAlt}:{},content:h}})),Bs=[{id:"activity-four-pillars-discussion",lessonId:"level-1-session-1-the-daily-grind",contentStepId:"level-1-session-1-the-daily-grind-practical-economic-elements",kind:"discussion",title:"Four pillars discussion forum",instructions:"Choose one pillar: property, relationships, work, or consumption. Post one everyday example that shows how this pillar influences choices. Then reply to two course participants' posts with a thoughtful question, connection, or practical suggestion.",required:!0,maxScore:5,completionMode:"postAndReply",replyRequirement:2},{id:"activity-living-between-two-cities-discussion",lessonId:"level-1-session-2-competing-paradigms",contentStepId:"level-1-session-2-competing-paradigms-combined-city-trajectories",kind:"discussion",title:"Living Between Two Cities discussion forum",instructions:"Drawing on the two city trajectories, write one post that identifies a City without God pattern in everyday economic life, recognises a sign of the City of God, and reflects on how we live faithfully between these two realities while awaiting the New Jerusalem. End with one concrete economic practice for this week. Then reply thoughtfully to two course participants.",required:!0,maxScore:5,completionMode:"postAndReply",replyRequirement:2},{id:"activity-strategic-video",lessonId:"level-1-session-3-strategic-alignment",kind:"interactiveVideo",title:"Strategic alignment video checkpoint",instructions:"Watch the teaching video and answer each checkpoint question before this session can be completed.",required:!0,maxScore:5,videoUrl:"wix-media://video/faithonomics-strategic-alignment.mp4",completionMode:"videoQuestions",minimumScore:5,videoQuestions:[{id:"video-question-metric",timeSeconds:68,prompt:"Which planning habit best proves alignment has moved beyond intention?",choices:["A Monday-ready metric","A larger slogan","A hidden budget line"],correctAnswer:"A Monday-ready metric"},{id:"video-question-stakeholders",timeSeconds:142,prompt:"Who should be considered when testing whether a decision is aligned?",choices:["Only the owner","Customers, workers, suppliers and community","Only current buyers"],correctAnswer:"Customers, workers, suppliers and community"}]},{id:"activity-alignment-timeline",lessonId:"level-1-session-3-strategic-alignment",kind:"timeline",title:"Alignment timeline",instructions:"Place the alignment practices in the order a team should use them.",required:!0,maxScore:5,minimumScore:5},{id:"activity-monday-discussion",lessonId:"level-1-session-4-monday-morning",kind:"discussion",title:"Monday morning group practice",instructions:"Post your Monday action and reply to one learner with a constructive question or encouragement.",required:!0,maxScore:5,completionMode:"postAndReply"},{id:"activity-monday-short-answer",lessonId:"level-1-session-4-monday-morning",kind:"shortAnswer",title:"Monday action short answer",instructions:"Write the concrete action you will take first, who it affects, and how you will know it is faithful.",required:!0,maxScore:5,modelAnswer:"A strong answer names one concrete first action, identifies affected people, and describes a measurable sign of faithful economic alignment."}],Nu=[{id:"question-access",activityId:"activity-economic-alignment-quiz",prompt:"What is the safest way to grant access to a paid Faithonomics level?",kind:"multipleChoice",points:5},{id:"question-alignment-timeline",activityId:"activity-alignment-timeline",prompt:"Arrange the practices from diagnosis to Monday action.",kind:"timeline",points:5,correctAnswer:["assumption","scripture","stakeholders","metric"]},{id:"question-monday-short-answer",activityId:"activity-monday-short-answer",prompt:"What is the first faithful economic action you will take on Monday morning?",kind:"shortAnswer",points:5}],Iu=[{id:"choice-browser-success",questionId:"question-access",label:"Trust the browser success page",value:"browser",isCorrect:!1},{id:"choice-backend-verify",questionId:"question-access",label:"Verify the completed Wix order in backend code",value:"backend",isCorrect:!0},{id:"choice-timeline-scripture",questionId:"question-alignment-timeline",label:"Compare with Scripture",value:"scripture",isCorrect:!0,sequence:2},{id:"choice-timeline-metric",questionId:"question-alignment-timeline",label:"Set a Monday-ready metric",value:"metric",isCorrect:!0,sequence:4},{id:"choice-timeline-assumption",questionId:"question-alignment-timeline",label:"Name the inherited assumption",value:"assumption",isCorrect:!0,sequence:1},{id:"choice-timeline-stakeholders",questionId:"question-alignment-timeline",label:"Test impact on stakeholders",value:"stakeholders",isCorrect:!0,sequence:3}],Hn=[{id:"enrol-faithonomics-amina",courseId:"course-faithonomics-core",memberId:ye.learner.memberId,contactId:ye.learner.contactId,source:"admin",status:"active",enrolledAt:"2026-06-01T08:00:00.000Z"}],mt=[],Tu=[],Oa=[],Eu=[{id:"post-kingdom-first-001",activityId:"activity-kingdom-first-discussion",memberId:"member-learner-002",authorName:"Thabo Mokoena",body:"Matthew 6 challenges how I think about overtime. I often say yes because I fear falling behind, even when it damages family life and rest. Seeking the kingdom first would mean planning honestly, working faithfully, but not treating income as my saviour.",createdAt:"2026-06-22T07:45:00.000Z"},{id:"post-kingdom-first-002",activityId:"activity-kingdom-first-discussion",memberId:"member-learner-003",authorName:"Lerato Dlamini",body:"For me this affects voting and business policy. I usually ask which option protects my own costs first. This passage asks me to consider righteousness too: who is protected, who is ignored, and whether the policy helps people live with dignity.",createdAt:"2026-06-22T08:05:00.000Z"},{id:"post-four-pillars-001",activityId:"activity-four-pillars-discussion",memberId:"member-learner-002",authorName:"Thabo Mokoena",body:"I chose property. For me, property is not only a house or money. It is also my phone, my time, and the tools I use for work. This pillar challenges me to ask whether I use what I have only for myself, or whether I can steward it in a way that helps others.",createdAt:"2026-06-22T08:10:00.000Z"},{id:"post-four-pillars-002",activityId:"activity-four-pillars-discussion",memberId:"member-learner-003",authorName:"Lerato Dlamini",body:"Relationships stood out to me. Buying, selling, borrowing, and working are never only private choices. They can build trust or damage trust. I think a business can lose money in the long run if it treats relationships as less important than quick profit.",createdAt:"2026-06-22T08:18:00.000Z"},{id:"post-four-pillars-003",activityId:"activity-four-pillars-discussion",memberId:"member-learner-004",authorName:"Johan van der Merwe",body:"I chose consumption. Every purchase trains my habits. Sometimes I buy because I need something, but sometimes I buy because I feel pressure to look successful. This pillar helps me think about whether my choices serve a good purpose.",createdAt:"2026-06-22T08:26:00.000Z"},{id:"post-two-cities-001",activityId:"activity-living-between-two-cities-discussion",memberId:"member-learner-002",authorName:"Thabo Mokoena",body:"I see the City without God in workplace cultures where status and constant availability become measures of human worth. I also see the City of God when colleagues share knowledge and protect one another from burnout. Living between the two means staying present while refusing to treat productivity as identity. This week I will protect one honest rest boundary and help a colleague finish a difficult task.",createdAt:"2026-06-22T08:34:00.000Z"},{id:"post-two-cities-002",activityId:"activity-living-between-two-cities-discussion",memberId:"member-learner-003",authorName:"Lerato Dlamini",body:"Our city often reflects scarcity by giving safe transport and good services mainly to people who can pay more. Yet community food gardens and shared childcare show another economy based on gift and neighbour-love. Faithful presence means working for better systems without pretending we can build the New Jerusalem ourselves. I will support one local initiative that restores dignity rather than only offering temporary relief.",createdAt:"2026-06-22T08:38:00.000Z"},{id:"post-two-cities-003",activityId:"activity-living-between-two-cities-discussion",memberId:"member-learner-004",authorName:"Johan van der Merwe",body:"The City without God appears when a business treats customers, workers and suppliers only as costs or revenue. Signs of the City of God appear when profit supports excellent work, fair relationships and service. We live between the cities by reforming ordinary institutions instead of escaping them or idolising them. This week I will review one supplier decision for fairness as well as price.",createdAt:"2026-06-22T08:43:00.000Z"},{id:"post-monday-practice-001",activityId:"activity-monday-discussion",memberId:"member-learner-002",authorName:"Thabo Mokoena",body:"My Monday action is to review our supplier terms through the lens of fairness, not only speed.",createdAt:"2026-06-22T08:15:00.000Z"}],Pu=[{id:"reply-kingdom-first-001",postId:"post-kingdom-first-001",memberId:ye.lecturer.memberId,authorName:ye.lecturer.displayName,body:"Strong connection between anxiety and work. What boundary could show trust in God without becoming irresponsible toward your employer or family?",createdAt:"2026-06-22T08:30:00.000Z"},{id:"reply-kingdom-first-002",postId:"post-kingdom-first-002",memberId:"member-learner-004",authorName:"Johan van der Merwe",body:"Your point about voting helps me. Could you add one practical question you would ask before supporting a policy?",createdAt:"2026-06-22T08:42:00.000Z"},{id:"reply-monday-practice-001",postId:"post-monday-practice-001",memberId:ye.lecturer.memberId,authorName:ye.lecturer.displayName,body:"Good start. Add one measurable sign that the supplier relationship has become more just.",createdAt:"2026-06-22T09:00:00.000Z"}],we=({size:e=20,children:t,...n})=>s.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...n,children:t}),Eh=e=>s.jsxs(we,{...e,children:[s.jsx("circle",{cx:"12",cy:"8",r:"5"}),s.jsx("path",{d:"m8.5 12.5-2 7 5.5-3 5.5 3-2-7"})]}),Ph=e=>s.jsxs(we,{...e,children:[s.jsx("path",{d:"M4 5.5c2.8 0 5 .8 8 2.5v11c-3-1.7-5.2-2.5-8-2.5z"}),s.jsx("path",{d:"M20 5.5c-2.8 0-5 .8-8 2.5v11c3-1.7 5.2-2.5 8-2.5z"})]}),cn=e=>s.jsxs(we,{...e,children:[s.jsx("path",{d:"M9 4h6l1 2h3v15H5V6h3z"}),s.jsx("path",{d:"m9 13 2 2 4-5"})]}),$h=e=>s.jsx(we,{...e,children:s.jsx("path",{d:"m15 18-6-6 6-6"})}),Ah=e=>s.jsx(we,{...e,children:s.jsx("path",{d:"m9 18 6-6-6-6"})}),Ws=e=>s.jsxs(we,{...e,children:[s.jsx("path",{d:"M12 4v11"}),s.jsx("path",{d:"m8 11 4 4 4-4"}),s.jsx("path",{d:"M5 20h14"})]}),Zl=e=>s.jsxs(we,{...e,children:[s.jsx("path",{d:"M14 4h6v6"}),s.jsx("path",{d:"m10 14 10-10"}),s.jsx("path",{d:"M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"})]}),Qr=e=>s.jsxs(we,{...e,children:[s.jsx("path",{d:"M6 3h8l4 4v14H6z"}),s.jsx("path",{d:"M14 3v5h5"}),s.jsx("path",{d:"M9 13h6M9 17h6"})]}),_h=e=>s.jsxs(we,{...e,children:[s.jsx("rect",{x:"4",y:"4",width:"7",height:"7",rx:"1"}),s.jsx("rect",{x:"13",y:"4",width:"7",height:"4",rx:"1"}),s.jsx("rect",{x:"13",y:"10",width:"7",height:"10",rx:"1"}),s.jsx("rect",{x:"4",y:"13",width:"7",height:"7",rx:"1"})]}),ho=e=>s.jsxs(we,{...e,children:[s.jsx("rect",{x:"5",y:"10",width:"14",height:"10",rx:"2"}),s.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]}),zh=e=>s.jsxs(we,{...e,children:[s.jsx("path",{d:"M8 3H3v5"}),s.jsx("path",{d:"M3 3l6 6"}),s.jsx("path",{d:"M16 3h5v5"}),s.jsx("path",{d:"m21 3-6 6"}),s.jsx("path",{d:"M8 21H3v-5"}),s.jsx("path",{d:"m3 21 6-6"}),s.jsx("path",{d:"M16 21h5v-5"}),s.jsx("path",{d:"m21 21-6-6"})]}),$u=e=>s.jsxs(we,{...e,children:[s.jsx("path",{d:"M10 17H5V7h5"}),s.jsx("path",{d:"M14 8l4 4-4 4"}),s.jsx("path",{d:"M18 12H9"})]}),Lh=e=>s.jsx(we,{...e,children:s.jsx("path",{d:"M4 7h16M4 12h16M4 17h16"})}),ut=e=>s.jsxs(we,{...e,children:[s.jsx("circle",{cx:"12",cy:"12",r:"9"}),s.jsx("path",{d:"m10 8 6 4-6 4z"})]}),Au=e=>s.jsxs(we,{...e,children:[s.jsx("circle",{cx:"12",cy:"12",r:"9"}),s.jsx("path",{d:"M10 9v6M14 9v6"})]}),Rh=e=>s.jsxs(we,{...e,children:[s.jsx("path",{d:"M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"}),s.jsx("path",{d:"m8.5 12 2.2 2.2 4.8-5"})]}),_u=e=>s.jsxs(we,{...e,children:[s.jsx("circle",{cx:"9",cy:"8",r:"3"}),s.jsx("path",{d:"M3.5 20c.7-3.2 2.7-5 5.5-5s4.8 1.8 5.5 5"}),s.jsx("path",{d:"M15 11a3 3 0 1 0 0-6"}),s.jsx("path",{d:"M16 15c2.4.3 4 2 4.5 5"})]}),Hs=e=>s.jsx(we,{...e,children:s.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),Mh="/Faithonomics/faithonomics-logo.png",cr=({label:e,children:t,onClick:n,active:i=!1})=>s.jsx("button",{className:i?"icon-button active":"icon-button",onClick:n,title:e,"aria-label":e,children:t}),Fh=({identity:e,onChange:t})=>s.jsxs("label",{className:"role-switcher",children:[s.jsx("span",{children:"Role"}),s.jsxs("select",{value:e.memberId,onChange:n=>{const i=Object.values(ye).find(r=>r.memberId===n.target.value);i&&t(i)},children:[s.jsx("option",{value:ye.learner.memberId,children:"Learner"}),s.jsx("option",{value:ye.lecturer.memberId,children:"Lecturer"}),s.jsx("option",{value:ye.administrator.memberId,children:"Administrator"})]})]}),Dh=({identity:e,view:t,setView:n,onIdentityChange:i,activeLevelTitle:r,onLogout:o})=>s.jsxs("header",{className:"topbar",children:[s.jsx("div",{className:"brand-mark","aria-hidden":"true",children:s.jsx("img",{src:Mh,alt:""})}),s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Faithonomics"}),s.jsx("h1",{children:"Learning Portal"})]}),s.jsxs("nav",{className:"nav-actions","aria-label":"Portal views",children:[s.jsx(cr,{label:"Learner dashboard",active:t==="learner",onClick:()=>n("learner"),children:s.jsx(_h,{size:20})}),s.jsx(cr,{label:"Lecturer dashboard",active:t==="lecturer",onClick:()=>n("lecturer"),children:s.jsx(cn,{size:20})}),s.jsx(cr,{label:"Reports",active:t==="reports",onClick:()=>n("reports"),children:s.jsx(Qr,{size:20})}),s.jsx(cr,{label:"Administrator",active:t==="admin",onClick:()=>n("admin"),children:s.jsx(Rh,{size:20})})]}),s.jsxs("div",{className:"identity-cluster",children:[r?s.jsx("span",{className:"level-badge",children:r}):null,s.jsx(Fh,{identity:e,onChange:i}),s.jsxs("button",{className:"login-link",type:"button",onClick:o,children:[s.jsx($u,{size:17}),"Change level"]})]})]}),Qn=e=>[...e].sort((t,n)=>t.sequence-n.sequence),Ua=(e,t,n)=>{const i=e.filter(a=>a.required);if(i.length===0)return 100;const r=new Set(t.filter(a=>a.enrolmentId===n&&a.status==="completed").map(a=>a.lessonId)),o=i.filter(a=>r.has(a.id)).length;return Math.round(o/i.length*100)},Ba=(e,t,n)=>{const i=new Set(t.filter(o=>o.enrolmentId===n.id&&o.status==="completed").map(o=>o.lessonId)),r=new Map;for(const o of Qn(e)){const a=r.get(o.moduleId)??[];a.push(o),r.set(o.moduleId,a)}return Array.from(r.values()).flatMap(o=>{let a=null;return o.map(l=>{const c=a===null?{lessonId:l.id,locked:!1}:{lessonId:l.id,locked:!0,reason:`Complete "${a.title}" first.`};return l.required&&!i.has(l.id)&&(a=l),c})})},Oh=(e,t,n)=>{const i=new Map(Ba(e,t,n).map(o=>[o.lessonId,o.locked])),r=new Set(t.filter(o=>o.enrolmentId===n.id&&o.status==="completed").map(o=>o.lessonId));return Qn(e).find(o=>!i.get(o.id)&&!r.has(o.id))??null},Uh=e=>e.content.filter(t=>t.completionRequired!==!1).map(t=>t.id),Bh=(e,t,n,i)=>{const r=t.filter(d=>d.lessonId===e.id&&d.required).map(d=>d.id),o=e.content.filter(d=>d.kind==="customHtml").map(d=>d.id),a=new Set([...n.filter(d=>d.completed).map(d=>d.activityId),...i]),l=Array.from(new Set([...r,...Uh(e),...o])),c=l.filter(d=>a.has(d)).length;return{allowed:c===l.length,completed:c,required:l.length}},ec=()=>new Date().toISOString();class Wh{constructor(){ce(this,"identities",new Map(Object.values(ye).map(t=>[t.memberId,t])));ce(this,"courses",[...dt]);ce(this,"modules",[...xt]);ce(this,"lessons",[...$e]);ce(this,"activities",[...Bs]);ce(this,"questions",[...Nu]);ce(this,"choices",[...Iu]);ce(this,"enrolments",[...Hn]);ce(this,"progress",[...mt]);ce(this,"activityCompletions",[...Tu]);ce(this,"submissions",[...Oa]);ce(this,"discussionPosts",[...Eu]);ce(this,"discussionReplies",[...Pu]);ce(this,"quizAttempts",[]);ce(this,"marks",[]);ce(this,"feedback",[]);ce(this,"certificates",[]);ce(this,"aiUsage",[]);ce(this,"auditLogs",[])}async getIdentity(t){return this.identities.get(t)??null}async listCourses(){return[...this.courses]}async getCourse(t){return this.courses.find(n=>n.id===t||n.slug===t)??null}async listModules(t){return this.modules.filter(n=>n.courseId===t).sort((n,i)=>n.sequence-i.sequence)}async listLessons(t){return this.lessons.filter(n=>n.courseId===t).sort((n,i)=>n.sequence-i.sequence)}async listActivities(t){return this.activities.filter(n=>n.lessonId===t)}async listQuestions(t){return this.questions.filter(n=>n.activityId===t)}async listAnswerChoices(t){return this.choices.filter(n=>n.questionId===t)}async listEnrolmentsByMember(t){return this.enrolments.filter(n=>n.memberId===t)}async listEnrolmentsByCourse(t){return this.enrolments.filter(n=>n.courseId===t)}async insertEnrolment(t){return this.enrolments=[...this.enrolments,t],t}async listProgress(t){return this.progress.filter(n=>n.enrolmentId===t)}async saveProgress(t){const n=this.progress.findIndex(i=>i.id===t.id);return this.progress=n===-1?[...this.progress,t]:this.progress.map((i,r)=>r===n?t:i),t}async listActivityCompletions(t,n){return this.activityCompletions.filter(i=>i.memberId===t&&i.lessonId===n)}async saveActivityCompletion(t){const n=this.activityCompletions.findIndex(i=>i.activityId===t.activityId&&i.memberId===t.memberId);return this.activityCompletions=n===-1?[...this.activityCompletions,t]:this.activityCompletions.map((i,r)=>r===n?t:i),t}async saveQuizAttempt(t){return this.quizAttempts=[...this.quizAttempts,t],t}async listSubmissions(t){return this.submissions.filter(n=>!(t.memberId&&n.memberId!==t.memberId||t.courseId&&n.courseId!==t.courseId||t.status&&n.status!==t.status))}async saveSubmission(t){const n=this.submissions.findIndex(i=>i.id===t.id);return this.submissions=n===-1?[...this.submissions,t]:this.submissions.map((i,r)=>r===n?t:i),t}async listDiscussionPosts(t){return this.discussionPosts.filter(n=>n.activityId===t)}async listDiscussionReplies(t){return this.discussionReplies.filter(n=>n.postId===t)}async saveDiscussionPost(t){return this.discussionPosts=[...this.discussionPosts.filter(n=>n.id!==t.id),t],t}async saveDiscussionReply(t){return this.discussionReplies=[...this.discussionReplies.filter(n=>n.id!==t.id),t],t}async saveMark(t){return this.marks=[...this.marks.filter(n=>n.id!==t.id),t],t}async saveFeedback(t){return this.feedback=[...this.feedback.filter(n=>n.id!==t.id),t],t}async saveCertificate(t){return this.certificates=[...this.certificates.filter(n=>n.id!==t.id),t],t}async saveAIUsage(t){return this.aiUsage=[...this.aiUsage,t],t}async countAIUsage(t,n){return this.aiUsage.filter(i=>i.memberId===t&&i.createdAt>=n).length}async appendAuditLog(t){return this.auditLogs=[...this.auditLogs,t],t}async buildReportRows(t){var r;const n=[],i=t?this.courses.filter(o=>o.id===t):this.courses;return i.forEach(o=>{const a=this.modules.filter(d=>d.courseId===o.id),l=this.lessons.filter(d=>d.courseId===o.id);this.enrolments.filter(d=>d.courseId===o.id).forEach(d=>{const h=this.identities.get(d.memberId);l.forEach(f=>{const y=a.find(T=>T.id===f.moduleId),v=this.progress.find(T=>T.enrolmentId===d.id&&T.lessonId===f.id),g=this.submissions.find(T=>T.enrolmentId===d.id&&T.lessonId===f.id),b=g?this.marks.find(T=>T.submissionId===g.id):void 0;n.push({learnerName:(h==null?void 0:h.displayName)??d.memberId,courseTitle:o.title,moduleTitle:(y==null?void 0:y.title)??"Unassigned",lessonTitle:f.title,completionStatus:(v==null?void 0:v.status)??"notStarted",score:(b==null?void 0:b.score)??null,lastActivityAt:(v==null?void 0:v.lastActivityAt)??(g==null?void 0:g.submittedAt)??null})})})}),n.length===0&&n.push({learnerName:"No learners yet",courseTitle:((r=i[0])==null?void 0:r.title)??"No course",moduleTitle:"",lessonTitle:"",completionStatus:"notStarted",score:null,lastActivityAt:null}),n.sort((o,a)=>(o.lastActivityAt??ec()).localeCompare(a.lastActivityAt??ec()))}}const Hh=()=>new Wh,qh=e=>e.replace(/\/+$/,""),tc=()=>new Date().toISOString(),ft=(e,t)=>typeof e[t]=="string"?e[t]:null,Vh=(e,t)=>typeof e[t]=="number"?e[t]:null,Gh=(e,t,n)=>{const i=n;return{collection:e,record_id:t,payload:n,course_id:ft(i,"courseId"),module_id:ft(i,"moduleId"),lesson_id:ft(i,"lessonId"),activity_id:ft(i,"activityId"),question_id:ft(i,"questionId"),member_id:ft(i,"memberId"),enrolment_id:ft(i,"enrolmentId"),post_id:ft(i,"postId"),submission_id:ft(i,"submissionId"),status:ft(i,"status"),sequence:Vh(i,"sequence")}},Qh=(e,t)=>(e.sequence??0)-(t.sequence??0);class Jh{constructor(t,n,i="classroom_records"){ce(this,"restBaseUrl");this.anonKey=n,this.tableName=i,this.restBaseUrl=`${qh(t)}/rest/v1`}headers(t={}){return{apikey:this.anonKey,Authorization:`Bearer ${this.anonKey}`,...t}}async request(t,n={}){const i=await fetch(`${this.restBaseUrl}/${t}`,{...n,headers:this.headers(n.headers??{})});if(!i.ok){const r=await i.text();throw new Error(`Supabase request failed (${i.status}): ${r}`)}return i.status===204?null:await i.json()}async listRecords(t,n={},i=!1){const r=new URLSearchParams({select:"payload",collection:`eq.${t}`});return Object.entries(n).forEach(([a,l])=>{l!=null&&r.set(a,`eq.${String(l)}`)}),i&&r.set("order","sequence.asc.nullslast"),(await this.request(`${this.tableName}?${r.toString()}`)).map(a=>a.payload)}async getRecord(t,n){return(await this.listRecords(t,{record_id:n}))[0]??null}async upsertRecord(t,n,i){var a;const r=new URLSearchParams({on_conflict:"collection,record_id"});return((a=(await this.request(`${this.tableName}?${r.toString()}`,{method:"POST",headers:{"Content-Type":"application/json",Prefer:"resolution=merge-duplicates,return=representation"},body:JSON.stringify([Gh(t,n,i)])}))[0])==null?void 0:a.payload)??i}async getIdentity(t){const n=await this.getRecord("identities",t);if(n)return n;const i=(await this.listEnrolmentsByMember(t))[0];return i?{memberId:t,contactId:i.contactId,email:"",displayName:t,roles:["learner"]}:null}async listCourses(){return this.listRecords("courses")}async getCourse(t){const n=await this.getRecord("courses",t);return n||((await this.listCourses()).find(i=>i.slug===t)??null)}async listModules(t){return this.listRecords("modules",{course_id:t},!0)}async listLessons(t){return this.listRecords("lessons",{course_id:t},!0)}async listActivities(t){return this.listRecords("activities",{lesson_id:t},!0)}async listQuestions(t){return this.listRecords("questions",{activity_id:t})}async listAnswerChoices(t){return this.listRecords("answerChoices",{question_id:t},!0)}async listEnrolmentsByMember(t){return this.listRecords("enrolments",{member_id:t})}async listEnrolmentsByCourse(t){return this.listRecords("enrolments",{course_id:t})}async insertEnrolment(t){return this.upsertRecord("enrolments",t.id,t)}async listProgress(t){return this.listRecords("lessonProgress",{enrolment_id:t})}async saveProgress(t){return this.upsertRecord("lessonProgress",t.id,t)}async listActivityCompletions(t,n){return this.listRecords("activityCompletions",{member_id:t,lesson_id:n})}async saveActivityCompletion(t){return this.upsertRecord("activityCompletions",`${t.memberId}-${t.activityId}`,t)}async saveQuizAttempt(t){return this.upsertRecord("quizAttempts",t.id,t)}async listSubmissions(t){return this.listRecords("submissions",{member_id:t.memberId,course_id:t.courseId,status:t.status})}async saveSubmission(t){return this.upsertRecord("submissions",t.id,t)}async listDiscussionPosts(t){return(await this.listRecords("discussionPosts",{activity_id:t})).sort((i,r)=>i.createdAt.localeCompare(r.createdAt))}async listDiscussionReplies(t){return(await this.listRecords("discussionReplies",{post_id:t})).sort((i,r)=>i.createdAt.localeCompare(r.createdAt))}async saveDiscussionPost(t){return this.upsertRecord("discussionPosts",t.id,t)}async saveDiscussionReply(t){return this.upsertRecord("discussionReplies",t.id,t)}async saveMark(t){return this.upsertRecord("marks",t.id,t)}async saveFeedback(t){return this.upsertRecord("feedback",t.id,t)}async saveCertificate(t){return this.upsertRecord("certificates",t.id,t)}async saveAIUsage(t){return this.upsertRecord("aiUsage",t.id,t)}async countAIUsage(t,n){return(await this.listRecords("aiUsage",{member_id:t})).filter(r=>r.createdAt>=n).length}async appendAuditLog(t){return this.upsertRecord("auditLogs",t.id,t)}async buildReportRows(t){var o;const n=t?(await Promise.all([this.getCourse(t)])).filter(a=>!!a):await this.listCourses(),i=await this.listRecords("marks"),r=[];for(const a of n){const[l,c,d]=await Promise.all([this.listModules(a.id),this.listLessons(a.id),this.listEnrolmentsByCourse(a.id)]);for(const h of d){const f=await this.getIdentity(h.memberId),y=await this.listProgress(h.id),v=await this.listSubmissions({memberId:h.memberId,courseId:a.id});c.sort(Qh).forEach(g=>{const b=l.find(p=>p.id===g.moduleId),T=y.find(p=>p.lessonId===g.id),m=v.find(p=>p.lessonId===g.id),u=m?i.find(p=>p.submissionId===m.id):void 0;r.push({learnerName:(f==null?void 0:f.displayName)??h.memberId,courseTitle:a.title,moduleTitle:(b==null?void 0:b.title)??"Unassigned",lessonTitle:g.title,completionStatus:(T==null?void 0:T.status)??"notStarted",score:(u==null?void 0:u.score)??null,lastActivityAt:(T==null?void 0:T.lastActivityAt)??(m==null?void 0:m.submittedAt)??null})})}}return r.length===0&&r.push({learnerName:"No learners yet",courseTitle:((o=n[0])==null?void 0:o.title)??"No course",moduleTitle:"",lessonTitle:"",completionStatus:"notStarted",score:null,lastActivityAt:null}),r.sort((a,l)=>(a.lastActivityAt??tc()).localeCompare(l.lastActivityAt??tc()))}}const Yh="<app-namespace>",Kh={courses:"courses",modules:"modules",lessons:"lessons",activities:"activities",questions:"questions",answerChoices:"answer-choices",enrolments:"enrolments",lessonProgress:"lesson-progress",quizAttempts:"quiz-attempts",activityCompletions:"activity-completions",submissions:"submissions",discussionPosts:"discussion-posts",discussionReplies:"discussion-replies",marks:"marks",feedback:"feedback",certificates:"certificates",lecturerAssignments:"lecturer-assignments",aiUsage:"ai-usage",auditLogs:"audit-logs"},Xh=(e,t=Yh)=>`${t}/${Kh[e]}`,Be=async()=>{const t=await import("@wix/data");if(!t.items)throw new Error("Wix Data API is not available in this runtime.");return t.items},rt=e=>({...e,_id:e.id}),Zh=e=>({...e,_id:`${e.memberId}-${e.activityId}`});class ef{constructor(t){this.namespace=t}collection(t){return Xh(t,this.namespace)}async query(t){return(await Be()).query(this.collection(t))}async getIdentity(t){const i=(await this.listEnrolmentsByMember(t))[0];return i?{memberId:t,contactId:i.contactId,email:"",displayName:t,roles:["learner"]}:null}async listCourses(){return(await(await this.query("courses")).limit(1e3).find()).items}async getCourse(t){const n=await(await this.query("courses")).eq("_id",t).limit(1).find();return n.items[0]?n.items[0]:(await(await this.query("courses")).eq("slug",t).limit(1).find()).items[0]??null}async listModules(t){return(await(await this.query("modules")).eq("courseId",t).ascending("sequence").limit(1e3).find()).items}async listLessons(t){return(await(await this.query("lessons")).eq("courseId",t).ascending("sequence").limit(1e3).find()).items}async listActivities(t){return(await(await this.query("activities")).eq("lessonId",t).limit(1e3).find()).items}async listQuestions(t){return(await(await this.query("questions")).eq("activityId",t).limit(1e3).find()).items}async listAnswerChoices(t){return(await(await this.query("answerChoices")).eq("questionId",t).limit(1e3).find()).items}async listEnrolmentsByMember(t){return(await(await this.query("enrolments")).eq("memberId",t).limit(1e3).find()).items}async listEnrolmentsByCourse(t){return(await(await this.query("enrolments")).eq("courseId",t).limit(1e3).find()).items}async insertEnrolment(t){return(await Be()).insert(this.collection("enrolments"),rt(t))}async listProgress(t){return(await(await this.query("lessonProgress")).eq("enrolmentId",t).limit(1e3).find()).items}async saveProgress(t){return(await Be()).save(this.collection("lessonProgress"),rt(t))}async listActivityCompletions(t,n){return(await(await this.query("activityCompletions")).eq("memberId",t).eq("lessonId",n).limit(1e3).find()).items}async saveActivityCompletion(t){return(await Be()).save(this.collection("activityCompletions"),Zh(t))}async saveQuizAttempt(t){return(await Be()).insert(this.collection("quizAttempts"),rt(t))}async listSubmissions(t){let n=await this.query("submissions");return t.memberId&&(n=n.eq("memberId",t.memberId)),t.courseId&&(n=n.eq("courseId",t.courseId)),t.status&&(n=n.eq("status",t.status)),(await n.limit(1e3).find()).items}async saveSubmission(t){return(await Be()).save(this.collection("submissions"),rt(t))}async listDiscussionPosts(t){return(await(await this.query("discussionPosts")).eq("activityId",t).limit(1e3).find()).items}async listDiscussionReplies(t){return(await(await this.query("discussionReplies")).eq("postId",t).limit(1e3).find()).items}async saveDiscussionPost(t){return(await Be()).save(this.collection("discussionPosts"),rt(t))}async saveDiscussionReply(t){return(await Be()).save(this.collection("discussionReplies"),rt(t))}async saveMark(t){return(await Be()).save(this.collection("marks"),rt(t))}async saveFeedback(t){return(await Be()).save(this.collection("feedback"),rt(t))}async saveCertificate(t){return(await Be()).save(this.collection("certificates"),rt(t))}async saveAIUsage(t){return(await Be()).insert(this.collection("aiUsage"),rt(t))}async countAIUsage(t,n){return(await(await this.query("aiUsage")).eq("memberId",t).limit(1e3).find()).items.filter(r=>r.createdAt>=n).length}async appendAuditLog(t){return(await Be()).insert(this.collection("auditLogs"),rt(t))}async buildReportRows(t){const n=t?await this.getCourse(t):null,i=t?n?[n]:[]:await this.listCourses();return(await Promise.all(i.filter(o=>o!==null).map(async o=>{const[a,l,c]=await Promise.all([this.listModules(o.id),this.listLessons(o.id),this.listEnrolmentsByCourse(o.id)]);return c.flatMap(d=>l.map(h=>{const f=a.find(y=>y.id===h.moduleId);return{learnerName:d.memberId,courseTitle:o.title,moduleTitle:(f==null?void 0:f.title)??"Unassigned",lessonTitle:h.title,completionStatus:"notStarted",score:null,lastActivityAt:null}}))}))).flat()}}const nc=(e,t)=>!!(e!=null&&e.roles.includes(t)),fo=e=>nc(e,"lecturer")||nc(e,"administrator");var tf={};const nf=typeof process<"u"?tf:{},Jr=nf.WIX_APP_NAMESPACE??void 0,ic="https://mubisxvbvcdnrhdqnnyy.supabase.co",qs="sb_publishable_7p_-KtzLqPDubr4ebv1zcA_9yvCb59u",rf="classroom_records",zu=!!qs,of=!zu&&!!(Jr&&Jr!=="<app-namespace>"),ze=zu&&ic&&qs?new Jh(ic,qs,rf):of&&Jr?new ef(Jr):Hh(),oi=["https://static.wixstatic.com/media/7638b6_7dce53d2b46b43c0a42e8cc509325e3f~mv2.png","https://static.wixstatic.com/media/7638b6_5565b4e4adcf4e6db1b3e0075c7f44bd~mv2.png","https://static.wixstatic.com/media/7638b6_d369a23ccc264bed911d2f2662249aa7~mv2.png","https://static.wixstatic.com/media/7638b6_a63863ef5ce945d6adc25625d8e8e748~mv2.png","https://static.wixstatic.com/media/7638b6_7fd81c4b4f96408dab20186b2bd32a96~mv2.png"],Lu=({mode:e,slideIndex:t,setSlideIndex:n,onOpenCourse:i,onClose:r})=>{const o=oi[t]??oi[0]??"";return s.jsxs("div",{className:"level-one-slideshow-modal",role:"dialog","aria-modal":"true","aria-label":"Level 1 introduction",children:[s.jsx("button",{className:"course-about-backdrop",type:"button","aria-label":"Close slideshow",onClick:r}),s.jsxs("article",{className:"level-one-slideshow-panel",children:[s.jsx("div",{className:"level-one-slide-stage",children:s.jsx("img",{src:o,alt:`Level 1 introduction slide ${t+1}`})}),s.jsxs("div",{className:"level-one-slide-controls",children:[s.jsx("button",{className:"about-button",type:"button",onClick:()=>n(a=>Math.max(0,a-1)),disabled:t===0,children:"Previous"}),s.jsxs("span",{children:[t+1," / ",oi.length]}),s.jsx("button",{className:"about-button",type:"button",onClick:()=>n(a=>Math.min(oi.length-1,a+1)),disabled:t===oi.length-1,children:"Next"}),s.jsxs("button",{className:"course-link-button",type:"button",onClick:i,children:[s.jsx(ut,{size:18}),e==="start"?"Start level":"Open course"]}),s.jsx("button",{className:"about-button",type:"button",onClick:r,children:"Close"})]})]})]})},sf=ye.learner,si=Hn.find(e=>e.memberId===sf.memberId)??null,Yr=e=>{var n,i;const t=Number(((n=e.id.match(/^level-(\d+)$/))==null?void 0:n[1])??((i=e.title.match(/Level\s+(\d+)/i))==null?void 0:i[1]));return Number.isFinite(t)&&t>0?t:e.sequence},af=e=>[...e].sort((t,n)=>Yr(t)-Yr(n)||t.sequence-n.sequence),lf=(e,t,n)=>{const i=new Map;if(!n)return e.forEach((a,l)=>{i.set(a.id,l===0?"current":"upcoming")}),i;const r=new Set(e.filter(a=>{const l=$e.filter(c=>c.moduleId===a.id);return Ua(l,t,n.id)===100}).map(a=>a.id)),o=e.find(a=>!r.has(a.id))??e.at(-1);return e.forEach(a=>{const l=r.has(a.id)?"completed":a.id===(o==null?void 0:o.id)?"current":"upcoming";i.set(a.id,l)}),i},cf=({onSelectLevel:e})=>{const[t,n]=S.useState(mt),[i,r]=S.useState(null),[o,a]=S.useState(null),[l,c]=S.useState(0),d=S.useMemo(()=>af(xt),[]),h=d.find(g=>g.id===i)??null,f=S.useMemo(()=>lf(d,t,si),[t,d]),y=g=>{r(null),c(0),a(g)},v=()=>{a(null),c(0)};return S.useEffect(()=>{let g=!0;return si?(ze.listProgress(si.id).then(b=>{g&&n(b)}).catch(()=>{g&&n(mt)}),()=>{g=!1}):()=>{g=!1}},[]),s.jsxs("main",{className:"course-intro-page",children:[s.jsx("section",{className:"course-intro-hero",children:s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Faithonomics courses"}),s.jsx("h1",{children:"Choose Your Level"}),s.jsx("p",{children:"Start with the current level, review completed learning, or see what is coming next in the Faithonomics pathway."})]})}),s.jsx("section",{className:"intro-course-grid","aria-label":"Faithonomics levels",children:d.map(g=>{const b=f.get(g.id)??"upcoming",T=Qn($e.filter(N=>N.moduleId===g.id)),m=si?Ua(T,t,si.id):b==="completed"?100:0,u=Yr(g),p=()=>e(g.id),w=()=>{if(g.id==="level-1"){y("about");return}r(g.id)};return s.jsxs("article",{className:`intro-course-card ${b}`,style:{order:u},children:[s.jsxs("button",{className:"intro-course-image-link",type:"button",onClick:p,"aria-label":`Open ${g.title}`,children:[g.imageUrl?s.jsx("img",{src:g.imageUrl,alt:g.imageAlt??g.title}):null,s.jsx("span",{children:b})]}),s.jsxs("div",{className:"intro-course-details",children:[s.jsxs("div",{className:"intro-course-meta",children:[s.jsxs("span",{children:["Level ",u]}),s.jsxs("span",{children:[T.length," sessions"]}),s.jsxs("span",{children:[m,"% complete"]})]}),s.jsxs("div",{className:"intro-course-actions",children:[s.jsxs("button",{className:"course-link-button",type:"button",onClick:p,children:[s.jsx(ut,{size:18}),"Open course"]}),s.jsx("button",{className:"about-button",type:"button",onClick:w,children:"About"})]})]})]},g.id)})}),h?s.jsxs("div",{className:"course-about-modal",role:"dialog","aria-modal":"true","aria-labelledby":"course-about-title",children:[s.jsx("button",{className:"course-about-backdrop",type:"button","aria-label":"Close about",onClick:()=>r(null)}),s.jsxs("article",{className:"course-about-panel",children:[h.imageUrl?s.jsx("img",{src:h.imageUrl,alt:""}):null,s.jsxs("div",{children:[s.jsxs("p",{className:"eyebrow",children:["Level ",Yr(h)]}),s.jsx("h2",{id:"course-about-title",children:h.title.replace(/^Level \d+:\s*/,"")}),s.jsx("p",{children:h.description}),s.jsxs("div",{className:"intro-course-actions",children:[s.jsxs("button",{className:"course-link-button",type:"button",onClick:()=>e(h.id),children:[s.jsx(ut,{size:18}),"Open course"]}),s.jsx("button",{className:"about-button",type:"button",onClick:()=>r(null),children:"Close"})]})]})]})]}):null,o?s.jsx(Lu,{mode:o,slideIndex:l,setSlideIndex:c,onOpenCourse:()=>e("level-1"),onClose:v}):null]})},Ru=(e,t)=>Hn.find(n=>n.courseId===e&&n.memberId===t)??null,df=({course:e,activeLevel:t,identity:n,completedLessonIds:i,progressRecords:r,onOpenLesson:o})=>{const a=fo(n),l=Qn($e.filter(m=>m.courseId===e.id&&(a||!t||m.moduleId===t.id))),c=Ru(e.id,n.memberId),d=c?Mu(e.id,n,c,i,r):[],h=c?Ua(l,d,c.id):0,f=c&&!a?Oh(l,d,c):l[0]??null,y=new Map(a?l.map(m=>[m.id,!1]):c?Ba(l,d,c).map(m=>[m.lessonId,m.locked]):l.map(m=>[m.id,!0])),v=a?e.title:(t==null?void 0:t.title)??e.title,g=a?e.imageUrl:(t==null?void 0:t.imageUrl)??e.imageUrl,b=a?"":(t==null?void 0:t.imageAlt)??"",T=a||!!c||e.isFree;return s.jsxs("article",{className:"course-card",children:[s.jsx("img",{src:g,alt:b}),s.jsxs("div",{className:"course-card-body",children:[s.jsxs("div",{className:"course-title-row",children:[s.jsx("h2",{children:v}),a?s.jsx("span",{className:"pill",children:"Staff preview"}):!c&&!e.isFree?s.jsx("span",{className:"pill locked",children:"Paid"}):s.jsx("span",{className:"pill",children:"Open"})]}),s.jsx("p",{children:a?e.summary:(t==null?void 0:t.description)??e.summary}),s.jsx("div",{className:"progress-line","aria-label":`${h}% complete`,children:s.jsx("span",{style:{width:`${h}%`}})}),s.jsxs("div",{className:"card-meta",children:[s.jsxs("span",{children:[h,"% complete"]}),s.jsxs("span",{children:[l.length," sessions"]})]}),s.jsxs("button",{className:"primary-button",disabled:!f||!T,onClick:()=>{f&&o(e.id,f.id)},children:[s.jsx(ut,{size:18}),"Continue learning"]}),s.jsx(uf,{courseId:e.id,sessions:l,lockStates:y,onOpenLesson:o})]})]})},uf=({courseId:e,sessions:t,lockStates:n,onOpenLesson:i})=>s.jsx("div",{className:"session-list","aria-label":"Level sessions",children:t.map(r=>{const o=!!n.get(r.id);return s.jsxs("button",{disabled:o,title:o?"Complete the previous required session first.":r.title,onClick:()=>i(e,r.id),children:[o?s.jsx(ho,{size:15}):s.jsx(ut,{size:15}),r.imageUrl?s.jsx("img",{className:"session-thumb",src:r.imageUrl,alt:""}):null,s.jsx("span",{children:r.title})]},r.id)})}),Mu=(e,t,n,i,r)=>{const a=[...r.filter(l=>l.enrolmentId===n.id)];for(const l of i)a.some(c=>c.lessonId===l)||a.push({id:`local-progress-${l}`,enrolmentId:n.id,courseId:e,lessonId:l,memberId:t.memberId,status:"completed",percent:100,lastActivityAt:new Date().toISOString(),completedAt:new Date().toISOString()});return a},pf=({identity:e,activeLevelId:t,completedLessonIds:n,pendingIntroSlideshowLevelId:i,onIntroSlideshowHandled:r,onOpenLesson:o})=>{const a=fo(e),l=a?null:xt.find(p=>p.id===t)??null,c=$e.filter(p=>!l||p.moduleId===l.id),[d,h]=S.useState(mt),[f,y]=S.useState(!1),[v,g]=S.useState(!1),[b,T]=S.useState(0);S.useEffect(()=>{const p=Hn.filter(N=>N.memberId===e.memberId);let w=!0;return y(!1),Promise.all(p.map(N=>ze.listProgress(N.id))).then(N=>{w&&(h(N.flat()),y(!0))}).catch(()=>{w&&(h(mt),y(!0))}),()=>{w=!1}},[e.memberId]),S.useEffect(()=>{if(!f||!i)return;if(a){r();return}if(i!=="level-1"||t!=="level-1"){r();return}const p=dt[0]??null;if(!p){r();return}const w=Ru(p.id,e.memberId),N=$e.filter(E=>E.moduleId==="level-1"),I=w?Mu(p.id,e,w,n,d):[];if(N.some(E=>I.some(O=>O.lessonId===E.id&&O.status==="completed"))){r();return}T(0),g(!0)},[t,n,e,a,d,r,i,f]);const m=()=>{g(!1),r()},u=()=>{m();const p=Qn($e.filter(w=>w.moduleId==="level-1"))[0]??null;p&&o(p.courseId,p.id)};return s.jsxs("main",{className:"content-shell",children:[s.jsxs("section",{className:"dashboard-intro paper-stage",children:[s.jsx("div",{className:"paper-sun","aria-hidden":"true"}),s.jsx("div",{className:"paper-layer paper-back","aria-hidden":"true"}),s.jsx("div",{className:"paper-layer paper-mid","aria-hidden":"true"}),s.jsx("div",{className:"paper-road","aria-hidden":"true"}),s.jsxs("div",{className:"paper-people","aria-hidden":"true",children:[s.jsx("span",{}),s.jsx("span",{})]}),s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Student page"}),s.jsx("h2",{children:e.displayName}),s.jsx("p",{className:"intro-copy",children:l?`${l.title} is open. Continue through each required session in sequence.`:"Faithonomics courses, progress, submissions, feedback and certificates in one Wix-connected classroom."})]}),s.jsxs("div",{className:"stat-strip",children:[s.jsxs("div",{children:[s.jsx("strong",{children:l?"1":Hn.filter(p=>p.memberId===e.memberId).length}),s.jsx("span",{children:l?"Active level":"Courses"})]}),s.jsxs("div",{children:[s.jsx("strong",{children:c.length}),s.jsx("span",{children:"Sessions"})]}),s.jsxs("div",{children:[s.jsx("strong",{children:"24h"}),s.jsx("span",{children:"Next reminder"})]})]})]}),s.jsx("section",{className:"course-grid","aria-label":"Enrolled courses",children:dt.map(p=>s.jsx(df,{course:p,activeLevel:l,identity:e,completedLessonIds:n,progressRecords:d,onOpenLesson:o},p.id))}),v?s.jsx(Lu,{mode:"start",slideIndex:b,setSlideIndex:T,onOpenCourse:u,onClose:m}):null]})},rc=e=>e.trim().toLowerCase(),mf=(e,t,n,i)=>e.find(r=>r.moduleId===t&&rc(r.username)===rc(n)&&r.password===i)??null,hf=({initialModuleId:e,onBack:t,onLogin:n})=>{const i=zt.find(g=>g.moduleId===e)??zt[0],[r,o]=S.useState((i==null?void 0:i.moduleId)??""),[a,l]=S.useState((i==null?void 0:i.username)??""),[c,d]=S.useState((i==null?void 0:i.password)??""),[h,f]=S.useState(""),y=zt.find(g=>g.moduleId===r)??i;S.useEffect(()=>{const g=zt.find(b=>b.moduleId===e)??zt[0];o((g==null?void 0:g.moduleId)??""),l((g==null?void 0:g.username)??""),d((g==null?void 0:g.password)??""),f("")},[e]);const v=g=>{g.preventDefault();const b=mf(zt,r,a,c);if(!b){f("The level login or password is incorrect.");return}f(""),n(b)};return s.jsx("main",{className:"login-page",children:s.jsxs("section",{className:"login-panel",children:[s.jsxs("div",{className:"login-brand",children:[s.jsx("div",{className:"login-logo-crop",children:s.jsx("img",{src:"https://static.wixstatic.com/media/7638b6_d0228f89f4b24c9b99aa50c8b52a03b3~mv2.png",alt:"Faithonomics"})}),s.jsx("h1",{children:"Student Portal"}),s.jsx("p",{children:"Sign in with the login issued for your selected level."}),y?s.jsx("span",{className:"login-selected-level",children:y.levelTitle}):null,s.jsx("button",{className:"login-back-button",type:"button",onClick:t,children:"View all courses"})]}),s.jsxs("form",{className:"login-form",onSubmit:v,children:[s.jsxs("label",{children:[s.jsx("span",{children:"Level"}),s.jsx("select",{value:r,onChange:g=>{const b=zt.find(T=>T.moduleId===g.target.value);o(g.target.value),l((b==null?void 0:b.username)??""),d((b==null?void 0:b.password)??"")},children:zt.map(g=>s.jsx("option",{value:g.moduleId,children:g.levelTitle},g.moduleId))})]}),s.jsxs("label",{children:[s.jsx("span",{children:"Login"}),s.jsx("input",{autoComplete:"username",value:a,onChange:g=>l(g.target.value),placeholder:"level1"})]}),s.jsxs("label",{children:[s.jsx("span",{children:"Password"}),s.jsx("input",{autoComplete:"current-password",type:"password",value:c,onChange:g=>d(g.target.value),placeholder:"faith1"})]}),h?s.jsx("p",{className:"status error",children:h}):null,s.jsxs("button",{className:"primary-button",type:"submit",children:[s.jsx($u,{size:18}),y?`Open ${y.levelTitle}`:"Open student page"]})]})]})})},dr=e=>e.trim().toLowerCase(),ff=(e,t)=>{if(e===void 0||t===void 0)return!1;const n=Array.isArray(e)?e.map(dr):[dr(e)],i=Array.isArray(t)?t.map(dr):[dr(t)];return n.length!==i.length?!1:n.every((r,o)=>i[o]===r)},gf=(e,t,n)=>{const i=e.map(r=>{const o=t.filter(c=>c.questionId===r.id&&c.isCorrect).sort((c,d)=>(c.sequence??0)-(d.sequence??0)).map(c=>c.value),a=r.correctAnswer??o,l=ff(a,n[r.id]);return{questionId:r.id,correct:l,awarded:l?r.points:0}});return{score:i.reduce((r,o)=>r+o.awarded,0),maxScore:e.reduce((r,o)=>r+o.points,0),answers:i}},yf=/<\/?(script|object|embed|link|meta|base|form)\b[^>]*>/gi,vf=/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi,wf=/(href|src)\s*=\s*("|')\s*javascript:[^"']*\2/gi,bf=e=>e.replace(yf,"").replace(vf,"").replace(wf,'$1="#"'),oc=(e,t)=>{const n=bf(e),i=`
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
  `;return`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>${n}${i}</body></html>`},Fu=(e,t)=>{if(typeof e!="object"||e===null)return null;const n=e;if(n.type!=="classroom.activity.completed"&&n.type!=="classroom.activity.progress"||typeof n.activityId!="string"||!t.includes(n.activityId))return null;const i=typeof n.score=="number"&&Number.isFinite(n.score)?n.score:void 0,r=typeof n.maxScore=="number"&&Number.isFinite(n.maxScore)?n.maxScore:void 0;return{type:n.type,activityId:n.activityId,...i===void 0?{}:{score:i},...r===void 0?{}:{maxScore:r},...typeof n.completed=="boolean"?{completed:n.completed}:{}}},xf=(e,t)=>{if(typeof e!="object"||e===null)return null;const n=e,i=typeof n.statement=="object"&&n.statement!==null?n.statement:n,r=typeof i.verb=="object"&&i.verb!==null?i.verb:null,o=typeof i.result=="object"&&i.result!==null?i.result:null,a=typeof(r==null?void 0:r.id)=="string"?r.id:"";if(!(a.includes("completed")||a.includes("passed")||(o==null?void 0:o.completion)===!0))return null;const c=typeof(o==null?void 0:o.score)=="object"&&o.score!==null?o.score:null,d=typeof(c==null?void 0:c.raw)=="number"?c.raw:void 0,h=typeof(c==null?void 0:c.max)=="number"?c.max:void 0;return{type:"classroom.activity.completed",activityId:t,completed:!0,...d===void 0?{}:{score:d},...h===void 0?{}:{maxScore:h}}},kf=(e,t)=>Hn.find(n=>n.courseId===e&&n.memberId===t)??null,Du=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,jf=e=>(e==null?void 0:e.startsWith("wix-media://"))??!1,Sf=e=>/^https?:\/\//i.test(e??""),Cf="https://www.youtube-nocookie.com",Nf="/Faithonomics/assets/discussion-forum-button-clean.png",If="/Faithonomics/assets/discussion-forum-header-clean.png",Ou=e=>{if(!e)return null;try{const t=new URL(e),n=t.hostname.replace(/^www\./,"");if(n==="youtu.be")return t.pathname.split("/").filter(Boolean)[0]??null;if(n.endsWith("youtube.com")){if(t.pathname==="/watch")return t.searchParams.get("v");const i=t.pathname.match(/^\/embed\/([^/?]+)/);if(i)return i[1]??null}}catch{const t=e.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);return(t==null?void 0:t[1])??null}return null},Bo=(e,t)=>e.kind==="ordering"||e.kind==="timeline"||t.kind==="ordering"||t.kind==="timeline",en=(e,t)=>{const n=e[t];return Array.isArray(n)?"":n??""},Wo=(e,t,n)=>{const i=e[t];return Array.isArray(i)?[...i,...Array.from({length:n},()=>"")].slice(0,n):Array.from({length:n},()=>"")},sc=({courseLessons:e,courseModules:t,activeLessonId:n,lockStates:i,onSelect:r})=>s.jsxs("aside",{className:"lesson-sidebar",children:[s.jsx("h2",{children:"Levels and Sessions"}),[...t].sort((o,a)=>o.sequence-a.sequence).map(o=>{const a=Qn(e.filter(l=>l.moduleId===o.id));return s.jsxs("section",{className:"level-group",children:[s.jsx("h3",{children:o.title}),s.jsx("p",{children:o.description}),a.map(l=>{const c=!!i.get(l.id);return s.jsxs("button",{className:l.id===n?"lesson-nav-item active":"lesson-nav-item",disabled:c,onClick:()=>r(l.id),children:[c?s.jsx(ho,{size:16}):s.jsx(Ph,{size:16}),l.imageUrl?s.jsx("img",{className:"lesson-nav-thumb",src:l.imageUrl,alt:""}):null,s.jsx("span",{children:l.title})]},l.id)})]},o.id)})]}),yt=({completed:e})=>s.jsx("p",{className:e?"status success":"status",children:e?"Completion recorded.":"Required before session completion."}),ac=({activity:e,courseId:t,lessonId:n,enrolment:i,identity:r,completed:o,discussionPosts:a,discussionReplies:l,onComplete:c,onAddPost:d,onAddReply:h})=>{var B;const[f,y]=S.useState({}),[v,g]=S.useState(""),[b,T]=S.useState("Psalm 1 shows that delight grows through daily meditation and repeated choices."),[m,u]=S.useState({}),[p,w]=S.useState(""),[N,I]=S.useState({}),P=S.useRef(null),E=C=>{if(!i)return;const z=new Date().toISOString(),R={id:`submission-${e.id}-${r.memberId}`,activityId:e.id,lessonId:n,courseId:t,enrolmentId:i.id,memberId:r.memberId,contactId:i.contactId,responseText:C,status:"submitted",submittedAt:z};ze.saveSubmission(R).catch(()=>{})},O=(C,z,R)=>{if(!i)return;const V={id:`quiz-${e.id}-${r.memberId}-${Date.now()}`,activityId:e.id,lessonId:n,memberId:r.memberId,enrolmentId:i.id,answers:C,score:z,maxScore:R,submittedAt:new Date().toISOString()};ze.saveQuizAttempt(V).catch(()=>{})},A=Nu.filter(C=>C.activityId===e.id),J=Iu.filter(C=>A.some(z=>z.id===C.questionId));if(S.useEffect(()=>{if(e.kind!=="h5p")return;const C=z=>{var W;const R=(W=P.current)==null?void 0:W.contentWindow;if(R&&z.source!==R)return;const V=Fu(z.data,[e.id])??xf(z.data,e.id);(V==null?void 0:V.type)==="classroom.activity.completed"&&c(e,V.score??e.maxScore,V.maxScore??e.maxScore)};return window.addEventListener("message",C),()=>window.removeEventListener("message",C)},[e,c]),e.kind==="reflection")return s.jsxs("section",{className:"activity-panel",children:[s.jsxs("div",{className:"activity-heading",children:[s.jsx("h3",{children:e.title}),s.jsx(cn,{size:20})]}),s.jsx("p",{children:e.instructions}),s.jsx("textarea",{value:b,onChange:C=>T(C.target.value),"aria-label":"Written reflection"}),s.jsx("button",{className:"secondary-button",onClick:()=>{g("Answer saved."),E(b),c(e,e.maxScore,e.maxScore)},children:"Save answer"}),v?s.jsx("p",{className:"status success",children:v}):s.jsx(yt,{completed:o})]});if(e.kind==="h5p")return s.jsxs("section",{className:"activity-panel",children:[s.jsxs("div",{className:"activity-heading",children:[s.jsx("h3",{children:e.title}),s.jsx(cn,{size:20})]}),s.jsx("p",{children:e.instructions}),e.embedUrl?s.jsx("iframe",{ref:P,className:"h5p-frame",title:e.title,src:e.embedUrl,sandbox:"allow-scripts allow-same-origin allow-forms",referrerPolicy:"strict-origin-when-cross-origin"}):s.jsxs("div",{className:"video-placeholder",children:[s.jsx(ut,{size:42}),s.jsx("span",{children:"H5P package awaiting hosted embed URL"})]}),s.jsx(yt,{completed:o})]});if(e.kind==="interactiveVideo"){const C=e.videoQuestions??[],z=C.filter(H=>m[H.id]===H.correctAnswer).length,R=C.length===0?e.maxScore:Math.round(z/C.length*e.maxScore),V=R>=(e.minimumScore??e.maxScore),W=((B=e.videoUrl)==null?void 0:B.startsWith("wix-media://"))??!1;return s.jsxs("section",{className:"activity-panel",children:[s.jsxs("div",{className:"activity-heading",children:[s.jsx("h3",{children:e.title}),s.jsx(ut,{size:20})]}),s.jsx("p",{children:e.instructions}),e.videoUrl&&!W?s.jsx("video",{className:"lesson-video",controls:!0,preload:"metadata",src:e.videoUrl}):s.jsxs("div",{className:"video-placeholder",children:[s.jsx(ut,{size:42}),s.jsx("span",{children:"Wix Media video with timed questions"})]}),s.jsx("div",{className:"video-question-grid",children:C.map(H=>s.jsxs("fieldset",{children:[s.jsxs("legend",{children:[Du(H.timeSeconds)," - ",H.prompt]}),H.choices.map(le=>s.jsxs("label",{className:"choice-row",children:[s.jsx("input",{type:"radio",name:H.id,value:le,checked:m[H.id]===le,onChange:()=>u(Oe=>({...Oe,[H.id]:le}))}),le]},le))]},H.id))}),s.jsxs("div",{className:"activity-toolbar",children:[s.jsxs("span",{className:"status",children:["Score: ",R,"/",e.maxScore]}),s.jsx("button",{className:"secondary-button",disabled:!V,onClick:()=>{O(m,R,e.maxScore),c(e,R,e.maxScore)},children:"Save video answers"})]}),s.jsx(yt,{completed:o})]})}if(e.kind==="discussion"){const C=a.filter(q=>q.activityId===e.id),z=new Set(C.map(q=>q.id)),R=new Map(C.map(q=>[q.id,q])),V=C.some(q=>q.memberId===r.memberId),W=Math.max(1,e.replyRequirement??1),H=new Set(l.filter(q=>{const At=R.get(q.postId);return q.memberId===r.memberId&&z.has(q.postId)&&At!==void 0&&At.memberId!==r.memberId}).map(q=>q.postId)),le=H.size,Oe=V&&le>=W,Wi=e.id==="activity-kingdom-first-discussion"?"Share how Matthew 6 reshapes one economic choice...":e.id==="activity-four-pillars-discussion"?"Choose property, relationships, work, or consumption. Share one everyday example...":"Share your Monday action...",Hi=(q,At)=>{q&&At>=W&&c(e,e.maxScore,e.maxScore)};return s.jsxs("section",{className:"activity-panel discussion-panel",children:[s.jsxs("div",{className:"activity-heading",children:[s.jsx("h3",{children:e.title}),s.jsx(_u,{size:20})]}),s.jsx("p",{children:e.instructions}),s.jsxs("div",{className:"discussion-requirements","aria-label":"Discussion completion requirements",children:[s.jsx("span",{className:V?"met":"",children:V?"Post added":"Add one post"}),s.jsxs("span",{className:le>=W?"met":"",children:["Reply to course participants: ",le,"/",W]})]}),s.jsxs("div",{className:"discussion-composer",children:[s.jsx("textarea",{value:p,onChange:q=>w(q.target.value),"aria-label":"Group discussion post",placeholder:Wi}),s.jsx("button",{className:"secondary-button",onClick:()=>{p.trim()&&(d(e,p.trim()),w(""),Hi(!0,le))},children:"Add post"})]}),s.jsx("div",{className:"discussion-list",children:C.map(q=>{const At=l.filter(x=>x.postId===q.id),Jn=q.memberId===r.memberId,qi=H.has(q.id);return s.jsxs("article",{className:["discussion-post",Jn?"own-post":"",qi?"replied":""].filter(Boolean).join(" "),children:[s.jsx("strong",{children:q.authorName}),Jn?s.jsx("span",{className:"discussion-badge",children:"Your post"}):null,qi?s.jsx("span",{className:"discussion-badge replied",children:"Reply counted"}):null,s.jsx("p",{children:q.body}),s.jsx("div",{className:"reply-list",children:At.map(x=>s.jsxs("p",{children:[s.jsxs("strong",{children:[x.authorName,":"]})," ",x.body]},x.id))}),Jn?s.jsx("p",{className:"status",children:"This is your post. Reply to course participants to complete the activity."}):s.jsxs("div",{className:"reply-composer",children:[s.jsx("textarea",{value:N[q.id]??"",onChange:x=>I(L=>({...L,[q.id]:x.target.value})),"aria-label":`Reply to ${q.authorName}`,placeholder:"Ask a thoughtful question or add a practical connection..."}),s.jsx("button",{className:"secondary-button",onClick:()=>{var D;const x=(D=N[q.id])==null?void 0:D.trim();if(!x)return;h(q,x),I(pe=>({...pe,[q.id]:""}));const L=le+(H.has(q.id)?0:1);Hi(V,L)},children:"Add reply"})]})]},q.id)})}),s.jsx("p",{className:Oe?"status success":"status",children:Oe?"Discussion requirement met.":`Add one post and reply to ${W} ${W===1?"course participant":"course participants"} to complete this activity.`}),s.jsx(yt,{completed:o})]})}if(e.kind==="shortAnswer"){const C=A.length>0&&A.every(z=>en(f,z.id).trim().length>=10);return s.jsxs("section",{className:"activity-panel",children:[s.jsxs("div",{className:"activity-heading",children:[s.jsx("h3",{children:e.title}),s.jsx(Qr,{size:20})]}),s.jsx("p",{children:e.instructions}),A.map(z=>s.jsxs("label",{className:"short-answer-field",children:[s.jsx("span",{children:z.prompt}),s.jsx("textarea",{value:en(f,z.id),onChange:R=>y(V=>({...V,[z.id]:R.target.value})),"aria-label":z.prompt,placeholder:"Write a brief answer..."})]},z.id)),s.jsxs("div",{className:"activity-toolbar",children:[s.jsx("span",{className:"status",children:"Saved answers can be reviewed by a lecturer before final marks."}),s.jsx("button",{className:"secondary-button",disabled:!C,onClick:()=>{const z=A.reduce((R,V)=>(R[V.id]=en(f,V.id),R),{});g("Short answer saved for review."),E(JSON.stringify(z)),c(e,e.maxScore,e.maxScore)},children:"Save short answer"})]}),v?s.jsx("p",{className:"status success",children:v}):s.jsx(yt,{completed:o})]})}const fe=C=>J.filter(z=>z.questionId===C),ae=(C,z)=>{y(R=>({...R,[C]:z}))},Je=(C,z,R,V)=>{y(W=>{const H=Wo(W,C,V);return H[z]=R,{...W,[C]:H}})},_=A.reduce((C,z)=>{const R=fe(z.id);return C[z.id]=Bo(z,e)?Wo(f,z.id,R.length):en(f,z.id),C},{}),Y=gf(A,J,_),X=Y.score>=(e.minimumScore??e.maxScore),k=C=>{const z=_[C.id];if(Bo(C,e)){const R=fe(C.id);return Array.isArray(z)&&R.length>0&&z.length===R.length&&z.every(V=>V.trim().length>0)&&new Set(z).size===z.length}return typeof z=="string"&&z.trim().length>0},M=A.length>0&&A.every(k)&&X,F=C=>{const z=fe(C.id);if(C.kind==="fillBlank"||e.kind==="fillBlank")return s.jsxs("fieldset",{children:[s.jsx("legend",{children:C.prompt}),s.jsx("input",{className:"blank-input",value:en(f,C.id),onChange:R=>ae(C.id,R.target.value),"aria-label":C.prompt,placeholder:"Type your answer"})]},C.id);if(C.kind==="matching"||e.kind==="matching")return s.jsxs("fieldset",{children:[s.jsx("legend",{children:C.prompt}),s.jsxs("select",{className:"match-select",value:en(f,C.id),onChange:R=>ae(C.id,R.target.value),"aria-label":`Match answer for ${C.prompt}`,children:[s.jsx("option",{value:"",children:"Choose matching answer"}),z.map(R=>s.jsx("option",{value:R.value,children:R.label},R.id))]})]},C.id);if(Bo(C,e)){const R=Wo(f,C.id,z.length),V=new Set(R.filter(W=>W.length>0));return s.jsxs("fieldset",{children:[s.jsx("legend",{children:C.prompt}),s.jsx("div",{className:"timeline-slots",children:z.map((W,H)=>s.jsxs("label",{children:[s.jsx("span",{children:e.kind==="timeline"?`Timeline ${H+1}`:`Position ${H+1}`}),s.jsxs("select",{value:R[H]??"",onChange:le=>Je(C.id,H,le.target.value,z.length),"aria-label":`${C.prompt} position ${H+1}`,children:[s.jsx("option",{value:"",children:"Choose item"}),z.map(le=>s.jsx("option",{value:le.value,disabled:V.has(le.value)&&R[H]!==le.value,children:le.label},le.id))]})]},`${C.id}-slot-${H+1}`))})]},C.id)}return s.jsxs("fieldset",{children:[s.jsx("legend",{children:C.prompt}),z.map(R=>s.jsxs("label",{className:"choice-row",children:[s.jsx("input",{type:"radio",name:C.id,value:R.value,checked:en(f,C.id)===R.value,onChange:()=>ae(C.id,R.value)}),R.label]},R.id))]},C.id)};return s.jsxs("section",{className:"activity-panel",children:[s.jsxs("div",{className:"activity-heading",children:[s.jsx("h3",{children:e.title}),s.jsx(cn,{size:20})]}),s.jsx("p",{children:e.instructions}),A.map(F),s.jsxs("div",{className:"activity-toolbar",children:[s.jsxs("span",{className:"status",children:["Score: ",Y.score,"/",Y.maxScore]}),s.jsx("button",{className:"secondary-button",disabled:!M,onClick:()=>{O(_,Y.score,Y.maxScore),c(e,Y.score,Y.maxScore)},children:"Submit answers"})]}),s.jsx(yt,{completed:o})]})},Tf=({content:e,completed:t,onCompleteContent:n})=>{const i=e.videoCheckpoint,r=Ou(e.url),o=S.useRef(null),a=S.useRef(null),[l,c]=S.useState("loading"),[d,h]=S.useState(!1),[f,y]=S.useState(!1),[v,g]=S.useState("intro"),[b,T]=S.useState(0),[m,u]=S.useState(!1),[p,w]=S.useState({}),N=(i==null?void 0:i.id)??"",I=(i==null?void 0:i.timeSeconds)??0,P=(i==null?void 0:i.durationSeconds)??0,E=S.useCallback(()=>{c("loading"),T(k=>k+1)},[]),O=S.useCallback(()=>{o.current!==null&&(window.clearTimeout(o.current),o.current=null)},[]),A=S.useCallback(()=>{a.current!==null&&(window.clearTimeout(a.current),a.current=null)},[]),J=S.useCallback(()=>{O(),A(),u(!1),c("ready"),h(!0)},[O,A]),fe=S.useCallback(()=>{A(),n(e.id)},[A,e.id,n]);if(S.useEffect(()=>{if(!(!i||!r))return O(),A(),y(!1),h(!1),g("intro"),T(k=>k+1),w({}),u(!1),c("loading"),o.current=window.setTimeout(J,I*1e3),()=>{O(),A()}},[i,N,I,O,A,J,r]),S.useEffect(()=>{if(!i||!f||t)return;const k=P-I;if(!(k<=0))return a.current=window.setTimeout(fe,k*1e3+1500),()=>{A()}},[i,P,I,A,fe,t,f]),!i||!r)return s.jsxs("div",{className:"video-placeholder",children:[s.jsx(ut,{size:42}),s.jsx("span",{children:"YouTube checkpoint video is awaiting a valid URL and quiz."})]});const ae=i.questions.every(k=>!!p[k.id]),Je=v==="resume"?Math.ceil(I+1):0,_=new URLSearchParams({autoplay:"1",modestbranding:"1",mute:"1",playsinline:"1",rel:"0",start:String(Je)}),Y=`${Cf}/embed/${r}?${_.toString()}`,X=()=>{u(!0),ae&&(y(!0),h(!1),g("resume"),c("loading"),T(k=>k+1))};return s.jsxs("div",{className:"checkpoint-video-shell",children:[e.body?s.jsx("p",{children:e.body}):null,s.jsxs("div",{className:"youtube-frame-wrap",children:[s.jsx("div",{className:"youtube-frame-slot","aria-label":e.title,children:d&&!f?s.jsxs("div",{className:"video-placeholder",children:[s.jsx(Au,{size:42}),s.jsx("span",{children:"Video paused for checkpoint quiz."})]}):s.jsx("iframe",{title:e.title,src:Y,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowFullScreen:!0,loading:"eager",referrerPolicy:"strict-origin-when-cross-origin",onLoad:()=>c("ready")},`${r}-${v}-${b}`)}),d&&!f?s.jsxs("div",{className:"video-blocker",role:"status","aria-live":"polite",children:[s.jsx(ho,{size:24}),s.jsx("span",{children:"Complete the checkpoint quiz pop-up to continue the video."})]}):null]}),s.jsxs("div",{className:"video-state-row",children:[s.jsx("span",{className:t?"status success":"status",children:t?"Video step complete.":f?"Finish the remaining video segment to complete this step.":`Checkpoint quiz opens at ${Du(i.timeSeconds)}.`}),l==="loading"?s.jsx("span",{className:"status",children:"Loading YouTube player..."}):null,!d&&!t?s.jsx("button",{className:"secondary-button",type:"button",onClick:E,children:f?"Start remaining video":"Start video"}):null,f&&!t?s.jsx("button",{className:"secondary-button",type:"button",onClick:fe,children:"I finished the video"}):null]}),d?s.jsx("div",{className:"checkpoint-modal-backdrop",role:"presentation",children:s.jsxs("section",{className:"checkpoint-quiz checkpoint-modal",role:"dialog","aria-modal":"true","aria-live":"polite","aria-labelledby":`${i.id}-title`,children:[s.jsxs("div",{className:"activity-heading",children:[s.jsx("h4",{id:`${i.id}-title`,children:i.title}),s.jsx(cn,{size:19})]}),s.jsx("p",{className:"checkpoint-intro",children:"Answer each question to continue the video. Feedback appears as you choose."}),i.questions.map(k=>{const M=p[k.id],F=M===k.correctAnswer;return s.jsxs("article",{className:"checkpoint-question",role:"group","aria-labelledby":`${k.id}-prompt`,children:[s.jsx("p",{className:"checkpoint-prompt",id:`${k.id}-prompt`,children:k.prompt}),s.jsx("div",{className:"checkpoint-choice-list",children:k.choices.map((B,C)=>{const z=String.fromCharCode(65+C);return s.jsxs("label",{className:"choice-row",children:[s.jsx("input",{type:"radio",name:k.id,value:B,checked:M===B,onChange:()=>w(R=>({...R,[k.id]:B}))}),s.jsxs("span",{children:[s.jsxs("strong",{children:[z,"."]})," ",B]})]},B)})}),M?s.jsx("p",{className:F?"quiz-feedback success":"quiz-feedback error",children:F?k.feedback:"Not quite. Review the scenario and compare your answer with the main idea before you continue."}):null]},k.id)}),m&&!ae?s.jsx("p",{className:"status error",children:"Answer every question before continuing."}):null,s.jsx("button",{className:"primary-button",disabled:!ae,onClick:X,children:"Continue video"})]})}):null]})},Ef=e=>e.kind==="video"?"Mark video complete":e.kind==="webLink"?"Mark link reviewed":e.kind==="download"?"Mark download reviewed":"Continue",lc={consumer:"muffin",producer:"robusta",government:"freeTrade"},Ho={consumer:{muffin:"Coffee + Muffin (R49)",latte:"Fancy Latte (R45)"},producer:{robusta:"Robusta Beans",arabica:"Arabica Beans"},government:{freeTrade:"Free Trade",importTax:"Import Tax"}},qo=e=>`/Faithonomics/${e.replace(/^\/+/,"")}`,cc={consumer:{still:qo("assets/simulator-thabo-static.gif"),motion:"https://static.wixstatic.com/media/7638b6_63ddf056c7a84471b430693d65decee9~mv2.gif"},producer:{still:qo("assets/simulator-johan-static.gif"),motion:"https://static.wixstatic.com/media/7638b6_958741e949ae4756bd69a76fa52c3b98~mv2.gif"},government:{still:qo("assets/simulator-government-static.gif"),motion:"https://static.wixstatic.com/media/7638b6_ead4d59a26914e5083ba3de1a0721cc3~mv2.gif"}},Pf=["Micro","Meso","Macro"],$f={Micro:["thabo","pricePressure"],Meso:["johan","fairnessTrust"],Macro:["farmer","government"]},dc="https://static.wixstatic.com/media/7638b6_f5c6de8175f94568906e6da8e8076dbf~mv2.png",vn={farmer:{happy:"https://static.wixstatic.com/media/7638b6_573af9fe2b7f41b9b625a413d3bf77c1~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_1a280fbd8cec49aea5b37ef82a6b6028~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_1a280fbd8cec49aea5b37ef82a6b6028~mv2.png"},johan:{happy:"https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png"},thabo:{happy:dc,neutral:dc,unsatisfied:"https://static.wixstatic.com/media/7638b6_873ba6be814f4d768cbf56339c2f8b7a~mv2.png"},fairnessTrust:{happy:"https://static.wixstatic.com/media/7638b6_324c44a8162448c5b444d9e0843f1766~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_a936d246f0e64f6c907f64e3ecacfd7c~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_4f4e7890783c40689dbd497826b690bd~mv2.png"},pricePressure:{happy:"https://static.wixstatic.com/media/7638b6_519de2e908a2420aa76a24bd372094d3~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_caa1a4b61e0a45da957521ad88d85073~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_caa1a4b61e0a45da957521ad88d85073~mv2.png"},government:{happy:"https://static.wixstatic.com/media/7638b6_35bf49a6a16741b9b72bf63e87f8f8d1~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_10e58b2c5aa34625aaccd294f2a3f1c4~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_a13ba433beb149349f07acd4ffea114d~mv2.png"}},uc={happy:"Happy",neutral:"Neutral",unsatisfied:"Unsatisfied"};function Vo({ariaLabel:e,value:t,options:n,theme:i,onChange:r}){const a=n.findIndex(c=>c.value===t)===1?1:0,l=n[a];return s.jsxs("div",{className:`simulator-choice-slider ${i}`,"data-position":a,children:[s.jsxs("div",{className:"simulator-slider-guidance",children:[s.jsx("span",{children:"Tap a block to change"}),s.jsx("strong",{children:l.label})]}),s.jsx("div",{className:"simulator-slider-options",role:"group","aria-label":e,children:n.map((c,d)=>s.jsxs("button",{type:"button",className:d===a?"active":"",onClick:()=>r(c.value),"aria-pressed":d===a,children:[s.jsx("span",{children:c.label}),s.jsx("small",{children:c.description})]},c.value))})]})}const ur=e=>e>=75?"happy":e>=45?"neutral":"unsatisfied",Af=e=>e<=35?"happy":e<=65?"neutral":"unsatisfied",_f=e=>{let t="",n="",i=0,r=0,o=0;e.consumer==="muffin"&&e.producer==="robusta"?(t="Basic Needs & Business Wants",n="Thabo chooses the coffee and muffin because he needs food before work. Johan chooses cheaper Robusta beans because he wants to keep more money in the business. Both are making choices between needs, wants, and limited resources.",i=75,r=90,o=55):e.consumer==="latte"&&e.producer==="arabica"?(t="Quality and Experience",n="Thabo spends his money on a fancy latte because he wants something special. Johan buys better Arabica beans so the coffee tastes smoother. He earns less profit, but the shop feels more honest and careful.",i=90,r=62,o=82):e.consumer==="latte"&&e.producer==="robusta"?(t="Paying for Quality, Getting Cheap",n="Thabo pays for a premium latte, hoping for a good experience. Johan uses cheaper beans to make more profit. Johan may earn more today, but Thabo may feel cheated if the coffee tastes flat.",i=45,r=88,o=35):(t="Mismatched Priorities",n="Thabo just wants basic food to fill him up, but Johan spends extra money on fancy beans. Johan is trying to offer quality, but he might lose money if everyday customers only want the cheapest option.",i=68,r=48,o=64);const a=e.government==="freeTrade"?"Free Trade":"Government Import Tax",l=e.government==="freeTrade"?28:82,c=e.government==="freeTrade"?18:72,d=e.government==="freeTrade"?i:Math.max(20,i-18),h=e.government==="freeTrade"?r:Math.max(20,r-16),f=e.government==="freeTrade"?o:Math.min(95,o+10),y=e.government==="freeTrade"?55:80,v=100-c,g=ur(d),b=ur(h),T=ur(l),m=ur(f),u=Af(c),p=e.government==="freeTrade"?"neutral":"happy",w=e.government==="freeTrade"?"The government keeps trade free. Prices stay low for Thabo, and Johan can buy cheap imported beans. This helps the coffee shop, but local South African farmers may struggle to compete with cheap imports.":"The government adds an import tax. Johan's beans now cost more, so he may raise prices. Thabo's R50 may not stretch as far, but local farmers get more protection.";return{headline:t,policyLabel:a,story:n,policyImpact:w,theologicalLens:"Does this market state treat humans merely as consumers and producers, or as image-bearers of the divine?",scaleAnalysis:[{scale:"Micro",title:"Thabo's daily life",body:e.consumer==="muffin"?"At the personal level, Thabo is trying to use limited money for food, energy, and good value before work.":"At the personal level, Thabo chooses experience and taste, but must still ask whether the choice serves his real day well."},{scale:"Meso",title:"Johan's business and community",body:e.producer==="robusta"?"At the shop level, Johan protects profit, but the quality and trust relationship with customers may carry pressure.":"At the shop level, Johan invests in quality, which can build trust, but it reduces the money left after costs."},{scale:"Macro",title:"Policy and wider society",body:e.government==="freeTrade"?"At the wider policy level, open trade keeps prices lower, yet local farmers carry more risk.":"At the wider policy level, the import tax protects local farmers, yet customers and small shops feel higher prices."}],assessments:[{id:"thabo",category:"Thabo's satisfaction",status:g,value:d,explanation:g==="happy"?"Thabo feels that his R50 gives him good value for the day ahead.":g==="neutral"?"Thabo receives part of what he needs, but price, taste, or fullness still feels imperfect.":"Thabo feels the choice does not stretch his limited money far enough.",iconUrl:vn.thabo[g]},{id:"johan",category:"Johan's business satisfaction",status:b,value:h,explanation:b==="happy"?"Johan feels the choice protects his profit and keeps the shop moving.":b==="neutral"?"Johan can still trade, but quality, costs, or customer trust creates tension.":"Johan feels squeezed because the business choice may not cover his costs well.",iconUrl:vn.johan[b]},{id:"farmer",category:"Farmer impact",status:T,value:l,explanation:T==="happy"?"Local farmers are protected from cheaper imports and have a better chance to compete.":T==="neutral"?"Local farmers receive some help, but still face pressure from the market.":"Local farmers struggle because cheaper imported beans make it hard to compete.",iconUrl:vn.farmer[T]},{id:"fairnessTrust",category:"Fairness and Trust",status:m,value:f,explanation:m==="happy"?"The choices feel honest and balanced, so trust can grow between buyer, seller, and community.":m==="neutral"?"The outcome has some balance, but one group still carries a noticeable cost.":"The outcome feels unfair because one person benefits while another carries too much loss.",iconUrl:vn.fairnessTrust[m]},{id:"pricePressure",category:"Price Pressure",status:u,value:v,explanation:u==="happy"?"Prices stay low enough for Thabo's R50 to cover his immediate need.":u==="neutral"?"Prices are manageable, but Thabo must still choose carefully.":"Prices place heavy pressure on Thabo, so his R50 may no longer be enough.",iconUrl:vn.pricePressure[u]},{id:"government",category:"Government",status:p,value:y,explanation:e.government==="freeTrade"?"The state keeps prices low and trade open, but leaves local farmers exposed.":"The state protects local farmers, but must explain why some prices may rise.",iconUrl:vn.government[p]}]}},zf=e=>{const t=new Map(e.scaleAnalysis.map(r=>[r.scale,r])),n=new Map(e.assessments.map(r=>[r.id,r])),i=Pf.map(r=>{const o=t.get(r),a=$f[r].map(l=>n.get(l)).filter(l=>!!l);return!o||a.length===0?null:{id:`scale-${r.toLowerCase()}`,kind:"scale",scale:r,scaleTitle:o.title,scaleBody:o.body,assessments:a}}).filter(r=>r!==null);return[{id:"overview",kind:"overview",title:`${e.headline} + ${e.policyLabel}`,body:e.story,secondaryBody:e.policyImpact},...i]},Lf=({content:e,completed:t,onCompleteContent:n})=>{const[i,r]=S.useState(lc),[o,a]=S.useState(!1),[l,c]=S.useState(0),[d,h]=S.useState(!1),[f,y]=S.useState(!1),[v,g]=S.useState({}),b=S.useRef(lc),T=S.useRef({}),m=_f(i),u=zf(m),p=o?u[l]??null:null,w=l>0,N=l<u.length-1,I=l>=u.length-1,P=S.useCallback(_=>{const Y=T.current[_];Y!==void 0&&window.clearTimeout(Y);const X=Date.now();g(k=>({...k,[_]:X})),T.current[_]=window.setTimeout(()=>{g(k=>{if(k[_]!==X)return k;const M={...k};return delete M[_],M}),delete T.current[_]},2200)},[]),E=_=>{Object.keys(_).some(X=>_[X]!==void 0&&_[X]!==i[X])&&(r(X=>({...X,..._})),c(0),a(!1),h(!1),y(!1))},O=()=>{c(0),a(!0),h(!1),y(!1)},A=()=>{a(!1),h(!1)},J=()=>{h(!0),c(_=>Math.max(_-1,0))},fe=()=>{h(!0),c(_=>Math.min(_+1,u.length-1))};S.useEffect(()=>{var X;if(!o||d||I)return;const _=((X=u[l])==null?void 0:X.kind)==="overview"?3600:5600,Y=window.setTimeout(()=>{c(k=>Math.min(k+1,u.length-1))},_);return()=>window.clearTimeout(Y)},[o,d,l,u.length,I]),S.useEffect(()=>{o&&I&&y(!0)},[o,I]),S.useEffect(()=>{const _=b.current;Object.keys(i).filter(X=>_[X]!==i[X]).forEach(P),b.current=i},[i,P]),S.useEffect(()=>()=>{Object.values(T.current).forEach(_=>{_!==void 0&&window.clearTimeout(_)})},[]);const ae=_=>v[_]?cc[_].motion:cc[_].still,Je=_=>`${_}-${v[_]??"still"}`;return s.jsxs("section",{className:"lesson-block simulator-lesson-block",children:[s.jsxs("div",{className:"activity-heading",children:[s.jsx("h3",{children:e.title}),s.jsx(cn,{size:20})]}),s.jsxs("div",{className:"simulator-layout",children:[s.jsxs("div",{className:"simulator-controls",children:[s.jsx("blockquote",{children:"Thabo is walking to work. He has R50. He stops at Ubuntu Brews, owned by Johan."}),s.jsxs("section",{className:"simulator-control-card",children:[s.jsx("p",{className:"simulator-control-label consumer",children:"Thabo's Choice (The Consumer)"}),s.jsx("p",{children:"Thabo only has R50. What should he buy?"}),s.jsx(Vo,{ariaLabel:"Change Thabo's choice",theme:"consumer",value:i.consumer,onChange:_=>E({consumer:_}),options:[{value:"muffin",label:"Coffee + Muffin (R49)",description:"Fills you up"},{value:"latte",label:"Fancy Latte (R45)",description:"Tastes amazing"}]})]}),s.jsxs("section",{className:"simulator-control-card",children:[s.jsx("p",{className:"simulator-control-label producer",children:"Johan's Choice (The Business)"}),s.jsx("p",{children:"Johan must buy coffee beans. Which ones should he pick?"}),s.jsx(Vo,{ariaLabel:"Change Johan's choice",theme:"producer",value:i.producer,onChange:_=>E({producer:_}),options:[{value:"robusta",label:"Robusta Beans",description:"Cheaper, makes more profit"},{value:"arabica",label:"Arabica Beans",description:"Expensive, but tastes better"}]})]}),s.jsxs("section",{className:"simulator-control-card",children:[s.jsx("p",{className:"simulator-control-label government",children:"The Government's Choice"}),s.jsx("p",{children:"The state must decide how to manage imported goods."}),s.jsx(Vo,{ariaLabel:"Change the government's choice",theme:"government",value:i.government,onChange:_=>E({government:_}),options:[{value:"freeTrade",label:"Free Trade",description:"Keeps prices low, hurts local farmers"},{value:"importTax",label:"Import Tax",description:"Raises prices, protects local farmers"}]})]})]}),s.jsxs("section",{className:"simulator-lock-panel","aria-live":"polite",children:[s.jsx("p",{className:"simulator-control-label government",children:"Ready to analyse"}),s.jsx("h4",{children:"Lock your choice"}),s.jsx("p",{children:"Tap either choice block to change Thabo's, Johan's, and the government's choices before locking them. The selected block slides across so you can see what is active. Lock your choices, then use the Next button in the feedback to see how economics studies choices and how each choice has an impact. After the final feedback slide, close the feedback and press Continue below to unlock the next step."}),s.jsxs("div",{className:"simulator-choice-summary",children:[s.jsxs("div",{className:`simulator-choice-summary-item ${v.consumer?"is-animating":""}`,children:[s.jsx("img",{src:ae("consumer"),alt:"Thabo"},Je("consumer")),s.jsxs("span",{children:[s.jsx("strong",{children:"Thabo"}),Ho.consumer[i.consumer]]})]}),s.jsxs("div",{className:`simulator-choice-summary-item ${v.producer?"is-animating":""}`,children:[s.jsx("img",{src:ae("producer"),alt:"Johan"},Je("producer")),s.jsxs("span",{children:[s.jsx("strong",{children:"Johan"}),Ho.producer[i.producer]]})]}),s.jsxs("div",{className:`simulator-choice-summary-item ${v.government?"is-animating":""}`,children:[s.jsx("img",{src:ae("government"),alt:"Government"},Je("government")),s.jsxs("span",{children:[s.jsx("strong",{children:"Government"}),Ho.government[i.government]]})]})]}),s.jsx("button",{className:"primary-button",type:"button",onClick:O,children:"Lock your choice"})]})]}),p?s.jsx("div",{className:"simulator-response-deck-backdrop",role:"presentation",children:s.jsxs("section",{className:`simulator-response-slide ${p.kind==="scale"?p.scale.toLowerCase():"overview"}`,role:"dialog","aria-modal":"true","aria-live":"polite","aria-label":p.kind==="scale"?`${p.scale} economic effects`:"Economic effects overview",children:[s.jsx("button",{className:"simulator-response-close",type:"button",onClick:A,"aria-label":"Close impact response slides",children:s.jsx(Hs,{size:18})}),s.jsx("p",{className:"simulator-response-kicker",children:"Your choice has the following economic effects"}),p.kind==="overview"?s.jsxs("div",{className:"simulator-response-overview",children:[s.jsx("span",{children:"What happens?"}),s.jsx("h5",{children:p.title}),s.jsx("p",{children:p.body}),s.jsxs("p",{children:[s.jsx("strong",{children:"Policy impact:"})," ",p.secondaryBody]})]}):s.jsxs("div",{className:"simulator-response-scale-slide",children:[s.jsxs("div",{className:"simulator-response-copy",children:[s.jsx("span",{className:"simulator-scale-pill",children:p.scale}),s.jsx("h5",{children:p.scaleTitle}),s.jsx("p",{children:p.scaleBody})]}),s.jsx("div",{className:"simulator-response-effect-grid",children:p.assessments.map(_=>s.jsxs("article",{className:`simulator-response-effect ${_.status}`,children:[s.jsx("img",{src:_.iconUrl,alt:`${_.category} ${uc[_.status].toLowerCase()} icon`}),s.jsxs("div",{children:[s.jsx("span",{className:`simulator-status-pill ${_.status}`,children:uc[_.status]}),s.jsx("h6",{children:_.category}),s.jsx("p",{children:_.explanation})]})]},_.id))})]}),s.jsxs("div",{className:"simulator-response-controls","aria-label":"Impact slide controls",children:[s.jsxs("button",{type:"button",className:"simulator-response-nav-button",onClick:J,disabled:!w,"aria-label":"Previous impact slide",children:[s.jsx($h,{size:18}),s.jsx("span",{children:"Back"})]}),s.jsxs("button",{type:"button",className:"simulator-response-nav-button timing",onClick:()=>h(_=>!_),"aria-label":d?"Resume slide timing":"Pause slide timing",children:[d?s.jsx(ut,{size:18}):s.jsx(Au,{size:18}),s.jsx("span",{children:d?"Resume":"Pause"})]}),s.jsxs("button",{type:"button",className:"simulator-response-nav-button",onClick:fe,disabled:!N,"aria-label":"Next impact slide",children:[s.jsx("span",{children:"Next"}),s.jsx(Ah,{size:18})]})]}),s.jsx("div",{className:"simulator-response-dots","aria-label":"Impact slide progress",children:u.map((_,Y)=>s.jsx("span",{className:Y===l?"active":"","aria-label":_.kind==="scale"?`${_.scale} slide`:"What happens slide"},_.id))})]})}):null,s.jsxs("div",{className:"step-toolbar",children:[s.jsx("button",{className:f&&!t?"primary-button":"secondary-button",disabled:t||!f,onClick:()=>n(e.id),children:t?"Step complete":f?"Continue":"Review feedback first"}),s.jsx(yt,{completed:t})]})]})},Rf=({content:e,completed:t,onCompleteContent:n,onContinueContent:i})=>{const r=e.completionRequired!==!1,o=jf(e.url),a=Sf(e.url)?e.url:void 0,l=Ou(a),c=e.kind==="video"&&!!(l&&e.videoCheckpoint),d=e.kind==="scripture"?s.jsx("blockquote",{children:e.body}):e.kind==="video"?c?s.jsx(Tf,{content:e,completed:t,onCompleteContent:n}):a&&!o?s.jsx("video",{className:"lesson-video",controls:!0,preload:"metadata",src:a,onEnded:()=>n(e.id)}):s.jsxs("div",{className:"video-placeholder",children:[s.jsx(ut,{size:42}),s.jsx("span",{children:o?"Wix Media video asset":"Video asset awaiting Wix Media URL"})]}):e.kind==="image"?a&&!o?s.jsx("img",{className:"lesson-image",src:a,alt:e.alt??e.title}):s.jsxs("div",{className:"resource-placeholder",children:[s.jsx(Qr,{size:34}),s.jsx("span",{children:o?"Wix Media image asset":"Image asset awaiting Wix Media URL"})]}):e.kind==="download"?s.jsxs("div",{className:"lesson-resource",children:[s.jsx("p",{children:e.body}),a?s.jsxs("a",{className:"resource-link",href:a,target:"_blank",rel:"noreferrer",children:[s.jsx(Ws,{size:18}),e.fileName??"Open download"]}):s.jsxs("div",{className:"resource-placeholder",children:[s.jsx(Ws,{size:34}),s.jsx("span",{children:o?"Wix Media document asset":"Document awaiting Wix Media URL"})]})]}):e.kind==="webLink"?s.jsxs("div",{className:"lesson-resource",children:[s.jsx("p",{children:e.body}),a?s.jsxs("a",{className:"resource-link",href:a,target:"_blank",rel:"noreferrer",children:[s.jsx(Zl,{size:18}),"Open learning link"]}):s.jsxs("div",{className:"resource-placeholder",children:[s.jsx(Zl,{size:34}),s.jsx("span",{children:"Web link awaiting Wix CMS URL"})]})]}):s.jsx("p",{children:e.body});return s.jsxs("section",{className:"lesson-block",children:[s.jsxs("div",{className:"activity-heading",children:[s.jsx("h3",{children:e.title}),s.jsx(Qr,{size:20})]}),d,r&&c?s.jsxs("div",{className:"step-toolbar",children:[s.jsx("button",{className:t?"primary-button":"secondary-button",disabled:!t,type:"button",onClick:i,children:t?"Continue":"Complete video first"}),s.jsx("span",{className:t?"status success":"status",children:t?"Video, quiz, and final video segment complete. Continue to the next step.":"This button activates after the checkpoint quiz and full video."}),s.jsx(yt,{completed:t})]}):r?s.jsxs("div",{className:"step-toolbar",children:[s.jsx("button",{className:"secondary-button",disabled:t,onClick:()=>n(e.id),children:t?"Step complete":Ef(e)}),s.jsx(yt,{completed:t})]}):s.jsx("p",{className:"status",children:"Optional resource."})]})},pc=({htmlBlock:e,completedContentIds:t,onCompleteContent:n})=>{var a;const i=S.useRef(null);S.useEffect(()=>{const l=c=>{var h;const d=Fu(c.data,[e.id]);if((d==null?void 0:d.type)==="classroom.activity.completed"&&n(d.activityId),typeof c.data=="object"&&c.data!==null){const f=c.data;f.type==="classroom.richPopup.opened"&&f.activityId===e.id&&((h=i.current)==null||h.scrollIntoView({behavior:"smooth",block:"start"}))}};return window.addEventListener("message",l),()=>window.removeEventListener("message",l)},[e.id,n]);const r=((a=e.body)==null?void 0:a.includes("data-rich-lesson-step"))??!1,o=()=>{var c;if(document.fullscreenElement){(c=document.exitFullscreen)==null||c.call(document);return}const l=i.current;l!=null&&l.requestFullscreen&&l.requestFullscreen().catch(()=>{})};return s.jsxs("section",{className:"activity-panel",children:[s.jsxs("div",{className:"activity-heading",children:[s.jsx("h3",{children:e.title}),s.jsx(cn,{size:20})]}),r?s.jsxs("div",{className:"rich-lesson-frame-wrap",ref:i,children:[s.jsxs("button",{className:"rich-step-fullscreen-button",type:"button",onClick:o,"aria-label":`View ${e.title} fullscreen`,children:[s.jsx(zh,{size:16}),"Fullscreen"]}),s.jsx("iframe",{className:"rich-lesson-frame",title:e.title,sandbox:"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms",allow:"fullscreen",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin",srcDoc:oc(e.body??"",e.id)})]}):s.jsx("iframe",{title:e.title,sandbox:"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms",allow:"fullscreen",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin",srcDoc:oc(e.body??"",e.id)}),s.jsx(yt,{completed:t.includes(e.id)})]})},Mf=({identity:e,course:t,lessonId:n,activeLevelId:i,completedLessonIds:r,drawerOpen:o,setDrawerOpen:a,onSelectLesson:l,onCompleteLesson:c,onReturnToDashboard:d})=>{const h=fo(e),f=$e.filter(x=>x.courseId===t.id&&(h||!i||x.moduleId===i)),y=xt.filter(x=>x.courseId===t.id&&(h||!i||x.id===i)),v=f.find(x=>x.id===n)??f[0],g=kf(t.id,e.memberId),[b,T]=S.useState(()=>g?mt.filter(x=>x.enrolmentId===g.id):[]),[m,u]=S.useState(Tu),[p,w]=S.useState(Eu),[N,I]=S.useState(Pu),[P,E]=S.useState(0),[O,A]=S.useState(null),[J,fe]=S.useState(()=>{const x=new Set([...b.filter(L=>L.status==="completed").map(L=>L.lessonId),...r]);return f.filter(L=>x.has(L.id)).flatMap(L=>L.content.map(D=>D.id))});S.useEffect(()=>{E(0),A(null)},[v==null?void 0:v.id]),S.useEffect(()=>{if(!g){T([]);return}let x=!0;return ze.listProgress(g.id).then(L=>{x&&T(L)}).catch(()=>{x&&T(mt.filter(L=>L.enrolmentId===g.id))}),()=>{x=!1}},[g==null?void 0:g.id]),S.useEffect(()=>{if(!v)return;let x=!0;const L=Bs.filter(D=>D.lessonId===v.id&&D.kind==="discussion");return Promise.all([ze.listActivityCompletions(e.memberId,v.id),Promise.all(L.map(D=>ze.listDiscussionPosts(D.id)))]).then(async([D,pe])=>{if(!x)return;const oe=pe.flat(),Ue=await Promise.all(oe.map(be=>ze.listDiscussionReplies(be.id)));x&&(u(be=>[...be.filter(Te=>Te.lessonId!==v.id||Te.memberId!==e.memberId),...D]),w(be=>[...be.filter(Te=>!L.some(Yn=>Yn.id===Te.activityId)),...oe]),I(be=>[...be.filter(Te=>!oe.some(Yn=>Yn.id===Te.postId)),...Ue.flat()]))}).catch(()=>{}),()=>{x=!1}},[e.memberId,v==null?void 0:v.id]),S.useEffect(()=>{if(!v)return;const x=m.filter(L=>L.memberId===e.memberId&&L.lessonId===v.id&&L.completed&&v.content.some(D=>D.id===L.activityId)).map(L=>L.activityId);x.length>0&&fe(L=>Array.from(new Set([...L,...x])))},[m,e.memberId,v]);const ae=[...b];for(const x of r)ae.some(L=>L.lessonId===x)||ae.push({id:`local-progress-${x}`,enrolmentId:(g==null?void 0:g.id)??"local-enrolment",courseId:t.id,lessonId:x,memberId:e.memberId,status:"completed",percent:100,lastActivityAt:new Date().toISOString(),completedAt:new Date().toISOString()});const Je=h?f.map(x=>({lessonId:x.id,locked:!1})):g?Ba(f,ae,g):[],_=new Map(Je.map(x=>[x.lessonId,x.locked])),Y=v?Bs.filter(x=>x.lessonId===v.id):[],X=Y.filter(x=>!x.contentStepId),k=m.filter(x=>x.memberId===e.memberId),M=v?Bh(v,Y,k,J):{allowed:!1,completed:0,required:0},F=S.useCallback((x,L=x.maxScore,D=x.maxScore)=>{const pe={activityId:x.id,memberId:e.memberId,lessonId:x.lessonId,completed:!0,score:L,maxScore:D,completedAt:new Date().toISOString()};u(oe=>{const Ue=oe.findIndex(be=>be.activityId===x.id&&be.memberId===e.memberId);return Ue===-1?[...oe,pe]:oe.map((be,Te)=>Te===Ue?pe:be)}),ze.saveActivityCompletion(pe).catch(()=>{})},[e.memberId]),B=S.useCallback(x=>{if(g){const L=new Date().toISOString(),D={id:`progress-${g.id}-${x.id}`,enrolmentId:g.id,courseId:t.id,lessonId:x.id,memberId:e.memberId,status:"completed",percent:100,lastActivityAt:L,completedAt:L};T(pe=>[...pe.filter(oe=>oe.id!==D.id&&oe.lessonId!==x.id),D]),ze.saveProgress(D).catch(()=>{})}c(x.id)},[t.id,g,e.memberId,c]),C=S.useCallback(x=>{const L=(v==null?void 0:v.content.findIndex(oe=>oe.id===x))??-1,D=(v==null?void 0:v.content.length)??0,pe=(v==null?void 0:v.id)==="level-1-session-1-the-daily-grind"&&L>=0&&L===D-1;if(fe(oe=>oe.includes(x)?oe:[...oe,x]),v){const oe={activityId:x,memberId:e.memberId,lessonId:v.id,completed:!0,score:5,maxScore:5,completedAt:new Date().toISOString()};u(Ue=>{const be=Ue.findIndex(Te=>Te.activityId===x&&Te.memberId===e.memberId);return be===-1?[...Ue,oe]:Ue.map((Te,Yn)=>Yn===be?oe:Te)}),ze.saveActivityCompletion(oe).catch(()=>{})}if(pe&&v){B(v),d();return}L>=0&&L<((v==null?void 0:v.content.length)??0)-1&&E(L+1)},[e.memberId,v,d,B]),z=S.useCallback((x,L)=>{const D={id:`post-${x.id}-${Date.now()}`,activityId:x.id,memberId:e.memberId,authorName:e.displayName,body:L,createdAt:new Date().toISOString()};w(pe=>[...pe,D]),ze.saveDiscussionPost(D).catch(()=>{})},[e.displayName,e.memberId]),R=S.useCallback((x,L)=>{const D={id:`reply-${x.id}-${Date.now()}`,postId:x.id,memberId:e.memberId,authorName:e.displayName,body:L,createdAt:new Date().toISOString()};I(pe=>[...pe,D]),ze.saveDiscussionReply(D).catch(()=>{})},[e.displayName,e.memberId]);if(!v)return s.jsx("main",{className:"empty-state",children:"No session is available."});const V=h?-1:v.content.findIndex(x=>x.completionRequired!==!1&&!J.includes(x.id)),W=V===-1?v.content:v.content.slice(0,V+1),H=v.content.length-W.length,le=h||V===-1,Oe=W.length===0?-1:Math.min(P,W.length-1),Wi=Oe>=0?W[Oe]:void 0,Hi=Oe>0,q=Oe>=0&&Oe<W.length-1,At=()=>{E(x=>Math.min(W.length-1,x+1))},Jn=()=>{M.allowed&&B(v)},qi=x=>{const L=Y.find(D=>D.contentStepId===x.id);if(x.id.endsWith("-ordinary-business-life"))return s.jsx(Lf,{content:x,completed:J.includes(x.id),onCompleteContent:C},x.id);if(x.kind==="customHtml"&&L){const D=k.some(Ue=>Ue.activityId===L.id&&Ue.completed),pe=J.includes(x.id),oe=O===L.id;return s.jsxs("div",{className:"linked-step-activity",children:[s.jsx(pc,{htmlBlock:x,completedContentIds:J,onCompleteContent:C}),s.jsxs("section",{className:"discussion-launch-panel","aria-label":"Open discussion forum activity",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Forum activity"}),s.jsx("h3",{children:L.title}),s.jsx("p",{children:"Click the image to open the forum. Add your own post, then reply to two course participants. When your contribution is complete, the Continue button will unlock."})]}),s.jsxs("button",{className:"discussion-image-button",type:"button",onClick:()=>A(L.id),"aria-label":`Open ${x.title} forum`,children:[s.jsx("img",{src:Nf,alt:""}),s.jsx("span",{children:"Open discussion forum"})]}),s.jsxs("div",{className:"discussion-step-actions",children:[s.jsx("button",{className:D&&!pe?"primary-button":"secondary-button",type:"button",disabled:!D||pe,onClick:()=>C(x.id),children:pe?"Step complete":D?"Continue":"Complete discussion first"}),s.jsx("span",{className:D?"status success":"status",children:D?"Forum contribution complete. Press Continue to unlock the next step.":"Required: one post and replies to two course participants."})]})]}),oe?s.jsxs("div",{className:"discussion-modal",role:"dialog","aria-modal":"true","aria-label":L.title,children:[s.jsx("button",{className:"discussion-modal-backdrop",type:"button","aria-label":"Close discussion forum",onClick:()=>A(null)}),s.jsxs("div",{className:"discussion-modal-card",children:[s.jsxs("button",{className:"discussion-modal-close",type:"button",onClick:()=>A(null),"aria-label":"Close discussion forum",children:[s.jsx(Hs,{size:18}),"Close"]}),s.jsx("img",{className:"discussion-popup-hero",src:If,alt:""}),s.jsx(ac,{activity:L,courseId:t.id,lessonId:v.id,enrolment:g,identity:e,completed:D,discussionPosts:p,discussionReplies:N,onComplete:(Ue,be,Te)=>{F(Ue,be,Te)},onAddPost:z,onAddReply:R})]})]}):null]},x.id)}return x.kind==="customHtml"?s.jsx(pc,{htmlBlock:x,completedContentIds:J,onCompleteContent:C},x.id):s.jsx(Rf,{content:x,completed:J.includes(x.id),onCompleteContent:C,onContinueContent:At},x.id)};return s.jsxs("main",{className:"lesson-layout",children:[s.jsxs("div",{className:o?"mobile-drawer open":"mobile-drawer",children:[s.jsx("button",{className:"close-drawer",onClick:()=>a(!1),"aria-label":"Close session list",children:s.jsx(Hs,{size:19})}),s.jsx(sc,{courseLessons:f,courseModules:y,activeLessonId:v.id,lockStates:_,onSelect:x=>{l(x),a(!1)}})]}),s.jsx(sc,{courseLessons:f,courseModules:y,activeLessonId:v.id,lockStates:_,onSelect:l}),s.jsxs("article",{className:"lesson-main",children:[s.jsxs("button",{className:"drawer-trigger",onClick:()=>a(!0),children:[s.jsx(Lh,{size:18}),"Sessions"]}),s.jsx("p",{className:"eyebrow",children:t.title}),s.jsx("h2",{children:v.title}),s.jsx("p",{className:"lesson-summary",children:v.summary}),v.imageUrl?s.jsx("figure",{className:"lesson-artwork",children:s.jsx("img",{src:v.imageUrl,alt:v.imageAlt??""})}):null,s.jsxs("section",{className:"lesson-carousel","aria-label":"Lesson steps",children:[s.jsxs("div",{className:"lesson-carousel-header",children:[s.jsxs("div",{children:[s.jsxs("span",{className:"carousel-step-count",children:["Step ",Oe+1," of ",v.content.length]}),H>0?s.jsxs("p",{children:[H," ",H===1?"step is":"steps are"," locked until you complete this step."]}):s.jsx("p",{children:"All lesson steps are unlocked."})]}),s.jsxs("div",{className:"carousel-controls",children:[s.jsx("button",{className:"carousel-nav-button",type:"button",disabled:!Hi,onClick:()=>E(x=>Math.max(0,x-1)),children:"Previous"}),s.jsx("button",{className:"carousel-nav-button",type:"button",disabled:!q,onClick:()=>E(x=>Math.min(W.length-1,x+1)),children:"Next"})]})]}),s.jsx("div",{className:"carousel-step-tabs","aria-label":"Unlocked lesson step navigation",children:W.map((x,L)=>{const D=J.includes(x.id);return s.jsxs("button",{className:["carousel-step-tab",L===Oe?"active":"",D?"complete":""].filter(Boolean).join(" "),type:"button",onClick:()=>E(L),"aria-current":L===Oe?"step":void 0,children:[s.jsx("span",{className:"carousel-step-number",children:L+1}),s.jsx("span",{className:"carousel-step-title",children:x.title.replace(/^Step \d+:\s*/,"")})]},x.id)})}),s.jsx("div",{className:"lesson-carousel-stage",children:Wi?qi(Wi):null})]}),le?X.map(x=>s.jsx(ac,{activity:x,courseId:t.id,lessonId:v.id,enrolment:g,identity:e,completed:k.some(L=>L.activityId===x.id&&L.completed),discussionPosts:p,discussionReplies:N,onComplete:F,onAddPost:z,onAddReply:R},x.id)):X.length>0?s.jsxs("section",{className:"activity-panel locked-activity-panel",children:[s.jsxs("div",{className:"activity-heading",children:[s.jsx("h3",{children:"Activities locked"}),s.jsx(ho,{size:20})]}),s.jsx("p",{children:"Complete all required lesson steps before opening quizzes, discussions, or submissions."})]}):null,s.jsxs("section",{className:"completion-gate",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Session completion"}),s.jsxs("span",{children:[M.completed,"/",M.required," required steps and activities complete"]})]}),s.jsx("button",{className:"primary-button",disabled:!M.allowed,onClick:Jn,children:"Complete session"}),r.has(v.id)?s.jsx("p",{className:"status success",children:"Session completed."}):null]})]})]})},Go=[{id:"course-builder",label:"Course builder",description:"Create courses, levels, sessions and teaching blocks."},{id:"submissions",label:"Submissions",description:"Review written responses and file submissions."},{id:"ai-review",label:"AI review queue",description:"Draft marks awaiting lecturer approval."},{id:"inactive",label:"Inactive learners",description:"Learners who need a reminder or pastoral follow-up."}],Qo=[["users","Users and roles","Assign learner, lecturer and administrator permissions."],["courses","Courses and lecturers","Connect levels, sessions and assigned lecturers."],["payments","Payments and access","Verify Wix orders, free access and enrolment codes."],["certificates","Certificates","Control certificate templates and issuing rules."],["codes","Enrolment codes","Create, pause and audit private access codes."],["ai","AI usage","Monitor usage limits and lecturer approval records."],["automations","Automation triggers","Connect welcome, reminder and completion emails."],["audit","Audit records","Review sensitive actions and export compliance logs."]],Ff=()=>{const t=[["Learner","Course","Level","Session","Status"],...$e.map(o=>{var c,d;const a=xt.find(h=>h.id===o.moduleId),l=((c=mt.find(h=>h.lessonId===o.id))==null?void 0:c.status)??"notStarted";return[ye.learner.displayName,((d=dt[0])==null?void 0:d.title)??"Faithonomics",(a==null?void 0:a.title)??"",o.title,l]})].map(o=>o.map(a=>`"${String(a).replace(/"/g,'""')}"`).join(",")).join(`
`),n=new Blob([t],{type:"text/csv;charset=utf-8"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download="faithonomics-progress-report.csv",document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(i)},Df=()=>{var c;const[e,t]=S.useState("course-builder"),[n,i]=S.useState(""),[r,o]=S.useState([{id:"draft-faithonomics-core",title:((c=dt[0])==null?void 0:c.title)??"Faithonomics Course",levelCount:xt.length,sessionCount:$e.length,status:"Published"}]),a=Go.find(d=>d.id===e)??Go[0],l=()=>{o(d=>[...d,{id:`draft-course-${Date.now()}`,title:`New Faithonomics Course ${d.length+1}`,levelCount:0,sessionCount:0,status:"Draft"}]),i("Draft course created. Add levels, sessions, media and activities before publishing.")};return s.jsxs("main",{className:"content-shell",children:[s.jsxs("section",{className:"dashboard-intro",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Lecturer workspace"}),s.jsx("h2",{children:(a==null?void 0:a.label)??"Course builder"})]}),s.jsxs("button",{className:"primary-button",onClick:Ff,children:[s.jsx(Ws,{size:18}),"Export CSV"]})]}),s.jsx("section",{className:"work-grid","aria-label":"Lecturer tools",children:Go.map(d=>s.jsxs("button",{className:e===d.id?"work-card tool-card active":"work-card tool-card",onClick:()=>{t(d.id),i("")},children:[s.jsx("h3",{children:d.label}),s.jsx("p",{children:d.description})]},d.id))}),s.jsxs("section",{className:"workspace-panel",children:[e==="course-builder"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"panel-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Builder"}),s.jsx("h3",{children:"Create or edit courses"})]}),s.jsx("button",{className:"primary-button",onClick:l,children:"Create course"})]}),s.jsx("div",{className:"builder-list",children:r.map(d=>s.jsxs("article",{children:[s.jsx("strong",{children:d.title}),s.jsx("span",{children:d.status}),s.jsxs("span",{children:[d.levelCount," levels"]}),s.jsxs("span",{children:[d.sessionCount," sessions"]})]},d.id))})]}):null,e==="submissions"?s.jsx("div",{className:"builder-list",children:Oa.map(d=>s.jsxs("article",{children:[s.jsx("strong",{children:d.status}),s.jsx("span",{children:d.responseText??"File submission"}),s.jsx("span",{children:d.submittedAt??"Draft"})]},d.id))}):null,e==="ai-review"?s.jsx("div",{className:"empty-state compact",children:"AI-assisted marks appear here until a lecturer approves or edits them."}):null,e==="inactive"?s.jsx("div",{className:"empty-state compact",children:"No inactive learners in the sample data. Reminder automations are ready to connect in Wix."}):null,n?s.jsx("p",{className:"status success",children:n}):null]})]})},Of=()=>{const[e,t]=S.useState("users"),[n,i]=S.useState(""),r=Qo.find(([o])=>o===e)??Qo[0];return s.jsxs("main",{className:"content-shell",children:[s.jsxs("section",{className:"dashboard-intro",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Administration"}),s.jsx("h2",{children:"System controls"})]}),s.jsx("span",{className:"pill",children:"Backend enforced"})]}),s.jsx("section",{className:"admin-list","aria-label":"Administrator controls",children:Qo.map(([o,a])=>s.jsxs("button",{className:e===o?"active":"",onClick:()=>{t(o),i("")},children:[s.jsx(_u,{size:18}),a]},o))}),s.jsxs("section",{className:"workspace-panel",children:[s.jsxs("div",{className:"panel-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Control panel"}),s.jsx("h3",{children:(r==null?void 0:r[1])??"Users and roles"})]}),s.jsx("button",{className:"primary-button",onClick:()=>i("System control saved for backend review."),children:"Save control"})]}),s.jsx("p",{children:(r==null?void 0:r[2])??"Manage system settings."}),s.jsxs("div",{className:"control-metrics",children:[s.jsxs("span",{children:[xt.length," levels"]}),s.jsxs("span",{children:[$e.length," sessions"]}),s.jsxs("span",{children:[Oa.length," submissions"]})]}),n?s.jsx("p",{className:"status success",children:n}):null]})]})},Uf=()=>{const e=()=>{const i=dt[0];if(!i)return[];const r=xt.filter(o=>o.courseId===i.id);return $e.filter(o=>o.courseId===i.id).map(o=>{var a,l,c;return{learnerName:ye.learner.displayName,courseTitle:i.title,moduleTitle:((a=r.find(d=>d.id===o.moduleId))==null?void 0:a.title)??"Unassigned",lessonTitle:o.title,completionStatus:((l=mt.find(d=>d.lessonId===o.id))==null?void 0:l.status)??"notStarted",score:null,lastActivityAt:((c=mt.find(d=>d.lessonId===o.id))==null?void 0:c.lastActivityAt)??null}})},[t,n]=S.useState(e);return S.useEffect(()=>{var r;let i=!0;return ze.buildReportRows((r=dt[0])==null?void 0:r.id).then(o=>{i&&n(o)}).catch(()=>{i&&n(e())}),()=>{i=!1}},[]),s.jsxs("main",{className:"content-shell",children:[s.jsx("section",{className:"dashboard-intro",children:s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Reports"}),s.jsx("h2",{children:"Learner progress"})]})}),s.jsxs("div",{className:"report-table",role:"table","aria-label":"Progress report",children:[s.jsxs("div",{role:"row",className:"report-row head",children:[s.jsx("span",{children:"Learner"}),s.jsx("span",{children:"Level"}),s.jsx("span",{children:"Session"}),s.jsx("span",{children:"Status"})]}),t.map(i=>s.jsxs("div",{role:"row",className:"report-row",children:[s.jsx("span",{children:i.learnerName}),s.jsx("span",{children:i.moduleTitle}),s.jsx("span",{children:i.lessonTitle}),s.jsx("span",{children:i.completionStatus})]},`${i.learnerName}-${i.lessonTitle}`))]})]})},Bf=()=>{var u,p;const[e,t]=S.useState(ye.learner),[n,i]=S.useState("learner"),[r,o]=S.useState(((u=dt[0])==null?void 0:u.id)??""),[a,l]=S.useState(((p=$e[0])==null?void 0:p.id)??""),[c,d]=S.useState(null),[h,f]=S.useState(null),[y,v]=S.useState(null),[g,b]=S.useState(()=>new Set(mt.filter(w=>w.status==="completed").map(w=>w.lessonId))),[T,m]=S.useState(!1);return{identity:e,setIdentity:t,view:n,setView:i,activeCourseId:r,setActiveCourseId:o,activeLessonId:a,setActiveLessonId:l,activeLevelId:c,setActiveLevelId:d,selectedLoginLevelId:h,setSelectedLoginLevelId:f,pendingIntroSlideshowLevelId:y,setPendingIntroSlideshowLevelId:v,completedLessonIds:g,setCompletedLessonIds:b,drawerOpen:T,setDrawerOpen:m}},Wf=()=>{const e=Bf(),t=dt.find(c=>c.id===e.activeCourseId)??dt[0],n=xt.find(c=>c.id===e.activeLevelId)??null,i=fo(e.identity),r=(c,d)=>{e.setActiveCourseId(c),e.setActiveLessonId(d),e.setView("lesson")},o=c=>{var h,f;const d=$e.filter(y=>y.moduleId===c.moduleId).sort((y,v)=>y.sequence-v.sequence)[0];e.setIdentity(ye.learner),e.setActiveCourseId(((h=dt[0])==null?void 0:h.id)??""),e.setActiveLessonId((d==null?void 0:d.id)??((f=$e[0])==null?void 0:f.id)??""),e.setActiveLevelId(c.moduleId),e.setSelectedLoginLevelId(null),e.setPendingIntroSlideshowLevelId(c.moduleId),e.setView("learner")},a=()=>{e.setActiveLevelId(null),e.setSelectedLoginLevelId(null),e.setPendingIntroSlideshowLevelId(null),e.setIdentity(ye.learner),e.setView("learner")},l=c=>{e.setCompletedLessonIds(d=>{const h=new Set(d);return h.add(c),h})};return e.activeLevelId?s.jsxs("div",{className:"app-shell",children:[s.jsx(Dh,{identity:e.identity,view:e.view,setView:e.setView,onIdentityChange:e.setIdentity,activeLevelTitle:i?"Staff preview: all levels":(n==null?void 0:n.title)??null,onLogout:a}),e.view==="learner"?s.jsx(pf,{identity:e.identity,activeLevelId:e.activeLevelId,completedLessonIds:e.completedLessonIds,pendingIntroSlideshowLevelId:e.pendingIntroSlideshowLevelId,onIntroSlideshowHandled:()=>e.setPendingIntroSlideshowLevelId(null),onOpenLesson:r}):null,e.view==="lesson"&&t?s.jsx(Mf,{identity:e.identity,course:t,lessonId:e.activeLessonId,activeLevelId:e.activeLevelId,completedLessonIds:e.completedLessonIds,drawerOpen:e.drawerOpen,setDrawerOpen:e.setDrawerOpen,onSelectLesson:e.setActiveLessonId,onCompleteLesson:l,onReturnToDashboard:()=>e.setView("learner")}):null,e.view==="lecturer"?s.jsx(Df,{}):null,e.view==="admin"?s.jsx(Of,{}):null,e.view==="reports"?s.jsx(Uf,{}):null,s.jsxs("footer",{className:"site-footer",children:[s.jsx(Eh,{size:18}),"Faithonomics Economic Discipleship"]})]}):s.jsx("div",{className:"app-shell",children:e.selectedLoginLevelId?s.jsx(hf,{initialModuleId:e.selectedLoginLevelId,onBack:()=>e.setSelectedLoginLevelId(null),onLogin:o}):s.jsx(cf,{onSelectLevel:e.setSelectedLoginLevelId})})},Uu=document.getElementById("root");if(!Uu)throw new Error("Root element was not found.");Jo.createRoot(Uu).render(s.jsx(sp.StrictMode,{children:s.jsx(Wf,{})}));
