var qd=Object.defineProperty;var Bd=(e,t,n)=>t in e?qd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ue=(e,t,n)=>Bd(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fc={exports:{}},ti={},hc={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),Vd=Symbol.for("react.portal"),Qd=Symbol.for("react.fragment"),Gd=Symbol.for("react.strict_mode"),Yd=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Jd=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),ep=Symbol.for("react.memo"),tp=Symbol.for("react.lazy"),Vl=Symbol.iterator;function np(e){return e===null||typeof e!="object"?null:(e=Vl&&e[Vl]||e["@@iterator"],typeof e=="function"?e:null)}var gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vc=Object.assign,yc={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||gc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wc(){}wc.prototype=Kn.prototype;function Yo(e,t,n){this.props=e,this.context=t,this.refs=yc,this.updater=n||gc}var Ko=Yo.prototype=new wc;Ko.constructor=Yo;vc(Ko,Kn.prototype);Ko.isPureReactComponent=!0;var Ql=Array.isArray,xc=Object.prototype.hasOwnProperty,Jo={current:null},bc={key:!0,ref:!0,__self:!0,__source:!0};function kc(e,t,n){var r,s={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)xc.call(t,r)&&!bc.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Br,type:e,key:i,ref:l,props:s,_owner:Jo.current}}function rp(e,t){return{$$typeof:Br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function sp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gl=/\/+/g;function yi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sp(""+e.key):t.toString(36)}function gs(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Br:case Vd:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+yi(l,0):r,Ql(s)?(n="",e!=null&&(n=e.replace(Gl,"$&/")+"/"),gs(s,t,n,"",function(u){return u})):s!=null&&(Xo(s)&&(s=rp(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Gl,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=r===""?".":r+":",Ql(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+yi(i,a);l+=gs(i,t,n,c,s)}else if(c=np(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+yi(i,a++),l+=gs(i,t,n,c,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Kr(e,t,n){if(e==null)return e;var r=[],s=0;return gs(e,r,"","",function(i){return t.call(n,i,s++)}),r}function ip(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},vs={transition:null},op={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:vs,ReactCurrentOwner:Jo};function Sc(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!Xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Kn;W.Fragment=Qd;W.Profiler=Yd;W.PureComponent=Yo;W.StrictMode=Gd;W.Suspense=Zd;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=op;W.act=Sc;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vc({},e.props),s=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Jo.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)xc.call(t,c)&&!bc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Br,type:e.type,key:s,ref:i,props:r,_owner:l}};W.createContext=function(e){return e={$$typeof:Jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kd,_context:e},e.Consumer=e};W.createElement=kc;W.createFactory=function(e){var t=kc.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Xd,render:e}};W.isValidElement=Xo;W.lazy=function(e){return{$$typeof:tp,_payload:{_status:-1,_result:e},_init:ip}};W.memo=function(e,t){return{$$typeof:ep,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=vs.transition;vs.transition={};try{e()}finally{vs.transition=t}};W.unstable_act=Sc;W.useCallback=function(e,t){return ze.current.useCallback(e,t)};W.useContext=function(e){return ze.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};W.useEffect=function(e,t){return ze.current.useEffect(e,t)};W.useId=function(){return ze.current.useId()};W.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return ze.current.useMemo(e,t)};W.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};W.useRef=function(e){return ze.current.useRef(e)};W.useState=function(e){return ze.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return ze.current.useTransition()};W.version="18.3.1";hc.exports=W;var k=hc.exports;const lp=Hd(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=k,cp=Symbol.for("react.element"),up=Symbol.for("react.fragment"),dp=Object.prototype.hasOwnProperty,pp=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mp={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,t,n){var r,s={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)dp.call(t,r)&&!mp.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:cp,type:e,key:i,ref:l,props:s,_owner:pp.current}}ti.Fragment=up;ti.jsx=jc;ti.jsxs=jc;fc.exports=ti;var o=fc.exports,Ji={},Cc={exports:{}},Ke={},Ic={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,F){var E=I.length;I.push(F);e:for(;0<E;){var O=E-1>>>1,S=I[O];if(0<s(S,F))I[O]=F,I[E]=S,E=O;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var F=I[0],E=I.pop();if(E!==F){I[0]=E;e:for(var O=0,S=I.length,A=S>>>1;O<A;){var z=2*(O+1)-1,U=I[z],V=z+1,B=I[V];if(0>s(U,E))V<S&&0>s(B,U)?(I[O]=B,I[V]=E,O=V):(I[O]=U,I[z]=E,O=z);else if(V<S&&0>s(B,E))I[O]=B,I[V]=E,O=V;else break e}}return F}function s(I,F){var E=I.sortIndex-F.sortIndex;return E!==0?E:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],u=[],f=1,g=null,v=3,x=!1,y=!1,h=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=I)r(u),F.sortIndex=F.expirationTime,t(c,F);else break;F=n(u)}}function w(I){if(h=!1,p(I),!y)if(n(c)!==null)y=!0,J(N);else{var F=n(u);F!==null&&K(w,F.startTime-I)}}function N(I,F){y=!1,h&&(h=!1,m(_),_=-1),x=!0;var E=v;try{for(p(F),g=n(c);g!==null&&(!(g.expirationTime>F)||I&&!le());){var O=g.callback;if(typeof O=="function"){g.callback=null,v=g.priorityLevel;var S=O(g.expirationTime<=F);F=e.unstable_now(),typeof S=="function"?g.callback=S:g===n(c)&&r(c),p(F)}else r(c);g=n(c)}if(g!==null)var A=!0;else{var z=n(u);z!==null&&K(w,z.startTime-F),A=!1}return A}finally{g=null,v=E,x=!1}}var T=!1,P=null,_=-1,q=5,M=-1;function le(){return!(e.unstable_now()-M<q)}function fe(){if(P!==null){var I=e.unstable_now();M=I;var F=!0;try{F=P(!0,I)}finally{F?Z():(T=!1,P=null)}}else T=!1}var Z;if(typeof d=="function")Z=function(){d(fe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,L=$e.port2;$e.port1.onmessage=fe,Z=function(){L.postMessage(null)}}else Z=function(){C(fe,0)};function J(I){P=I,T||(T=!0,Z())}function K(I,F){_=C(function(){I(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,J(N))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(v){case 1:case 2:case 3:var F=3;break;default:F=v}var E=v;v=F;try{return I()}finally{v=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var E=v;v=I;try{return F()}finally{v=E}},e.unstable_scheduleCallback=function(I,F,E){var O=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?O+E:O):E=O,I){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=E+S,I={id:f++,callback:F,priorityLevel:I,startTime:E,expirationTime:S,sortIndex:-1},E>O?(I.sortIndex=E,t(u,I),n(c)===null&&I===n(u)&&(h?(m(_),_=-1):h=!0,K(w,E-O))):(I.sortIndex=S,t(c,I),y||x||(y=!0,J(N))),I},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(I){var F=v;return function(){var E=v;v=F;try{return I.apply(this,arguments)}finally{v=E}}}})(Nc);Ic.exports=Nc;var fp=Ic.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp=k,Ye=fp;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ec=new Set,Nr={};function xn(e,t){Wn(e,t),Wn(e+"Capture",t)}function Wn(e,t){for(Nr[e]=t,e=0;e<t.length;e++)Ec.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xi=Object.prototype.hasOwnProperty,gp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yl={},Kl={};function vp(e){return Xi.call(Kl,e)?!0:Xi.call(Yl,e)?!1:gp.test(e)?Kl[e]=!0:(Yl[e]=!0,!1)}function yp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wp(e,t,n,r){if(t===null||typeof t>"u"||yp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,s,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zo=/[\-:]([a-z])/g;function el(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zo,el);Ce[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zo,el);Ce[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zo,el);Ce[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function tl(e,t,n,r){var s=Ce.hasOwnProperty(t)?Ce[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wp(t,n,s,r)&&(n=null),r||s===null?vp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jr=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),nl=Symbol.for("react.strict_mode"),Zi=Symbol.for("react.profiler"),Pc=Symbol.for("react.provider"),Tc=Symbol.for("react.context"),rl=Symbol.for("react.forward_ref"),eo=Symbol.for("react.suspense"),to=Symbol.for("react.suspense_list"),sl=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Ac=Symbol.for("react.offscreen"),Jl=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=Jl&&e[Jl]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,wi;function mr(e){if(wi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wi=t&&t[1]||""}return`
`+wi+e}var xi=!1;function bi(e,t){if(!e||xi)return"";xi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{xi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function xp(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=bi(e.type,!1),e;case 11:return e=bi(e.type.render,!1),e;case 1:return e=bi(e.type,!0),e;default:return""}}function no(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cn:return"Fragment";case jn:return"Portal";case Zi:return"Profiler";case nl:return"StrictMode";case eo:return"Suspense";case to:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tc:return(e.displayName||"Context")+".Consumer";case Pc:return(e._context.displayName||"Context")+".Provider";case rl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sl:return t=e.displayName||null,t!==null?t:no(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return no(e(t))}catch{}}return null}function bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return no(t);case 8:return t===nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _c(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kp(e){var t=_c(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){e._valueTracker||(e._valueTracker=kp(e))}function Lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_c(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ro(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rc(e,t){t=t.checked,t!=null&&tl(e,"checked",t,!1)}function so(e,t){Rc(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?io(e,t.type,n):t.hasOwnProperty("defaultValue")&&io(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function io(e,t,n){(t!=="number"||Es(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(fr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function zc(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ta(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,$c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sp=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){Sp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function Fc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function Oc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Fc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var jp=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ao(e,t){if(t){if(jp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function co(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uo=null;function il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var po=null,$n=null,Fn=null;function na(e){if(e=Qr(e)){if(typeof po!="function")throw Error(j(280));var t=e.stateNode;t&&(t=oi(t),po(e.stateNode,e.type,t))}}function Dc(e){$n?Fn?Fn.push(e):Fn=[e]:$n=e}function Uc(){if($n){var e=$n,t=Fn;if(Fn=$n=null,na(e),t)for(e=0;e<t.length;e++)na(t[e])}}function Wc(e,t){return e(t)}function qc(){}var ki=!1;function Bc(e,t,n){if(ki)return e(t,n);ki=!0;try{return Wc(e,t,n)}finally{ki=!1,($n!==null||Fn!==null)&&(qc(),Uc())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var mo=!1;if(Tt)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){mo=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{mo=!1}function Cp(e,t,n,r,s,i,l,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var wr=!1,Ps=null,Ts=!1,fo=null,Ip={onError:function(e){wr=!0,Ps=e}};function Np(e,t,n,r,s,i,l,a,c){wr=!1,Ps=null,Cp.apply(Ip,arguments)}function Ep(e,t,n,r,s,i,l,a,c){if(Np.apply(this,arguments),wr){if(wr){var u=Ps;wr=!1,Ps=null}else throw Error(j(198));Ts||(Ts=!0,fo=u)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ra(e){if(bn(e)!==e)throw Error(j(188))}function Pp(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ra(s),e;if(i===r)return ra(s),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var l=!1,a=s.child;a;){if(a===n){l=!0,n=s,r=i;break}if(a===r){l=!0,r=s,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=s;break}if(a===r){l=!0,r=i,n=s;break}a=a.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Vc(e){return e=Pp(e),e!==null?Qc(e):null}function Qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qc(e);if(t!==null)return t;e=e.sibling}return null}var Gc=Ye.unstable_scheduleCallback,sa=Ye.unstable_cancelCallback,Tp=Ye.unstable_shouldYield,Ap=Ye.unstable_requestPaint,de=Ye.unstable_now,_p=Ye.unstable_getCurrentPriorityLevel,ol=Ye.unstable_ImmediatePriority,Yc=Ye.unstable_UserBlockingPriority,As=Ye.unstable_NormalPriority,Lp=Ye.unstable_LowPriority,Kc=Ye.unstable_IdlePriority,ni=null,St=null;function Rp(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:$p,zp=Math.log,Mp=Math.LN2;function $p(e){return e>>>=0,e===0?32:31-(zp(e)/Mp|0)|0}var es=64,ts=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _s(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~s;a!==0?r=hr(a):(i&=l,i!==0&&(r=hr(i)))}else l=n&~s,l!==0?r=hr(l):i!==0&&(r=hr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),s=1<<n,r|=e[n],t&=~s;return r}function Fp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Op(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-pt(i),a=1<<l,c=s[l];c===-1?(!(a&n)||a&r)&&(s[l]=Fp(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jc(){var e=es;return es<<=1,!(es&4194240)&&(es=64),e}function Si(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function Dp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-pt(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function ll(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var Y=0;function Xc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zc,al,eu,tu,nu,go=!1,ns=[],Bt=null,Ht=null,Vt=null,Tr=new Map,Ar=new Map,Dt=[],Up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ia(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function sr(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Qr(t),t!==null&&al(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Wp(e,t,n,r,s){switch(t){case"focusin":return Bt=sr(Bt,e,t,n,r,s),!0;case"dragenter":return Ht=sr(Ht,e,t,n,r,s),!0;case"mouseover":return Vt=sr(Vt,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return Tr.set(i,sr(Tr.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ar.set(i,sr(Ar.get(i)||null,e,t,n,r,s)),!0}return!1}function ru(e){var t=an(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Hc(n),t!==null){e.blockedOn=t,nu(e.priority,function(){eu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uo=r,n.target.dispatchEvent(r),uo=null}else return t=Qr(n),t!==null&&al(t),e.blockedOn=n,!1;t.shift()}return!0}function oa(e,t,n){ys(e)&&n.delete(t)}function qp(){go=!1,Bt!==null&&ys(Bt)&&(Bt=null),Ht!==null&&ys(Ht)&&(Ht=null),Vt!==null&&ys(Vt)&&(Vt=null),Tr.forEach(oa),Ar.forEach(oa)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,go||(go=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,qp)))}function _r(e){function t(s){return ir(s,e)}if(0<ns.length){ir(ns[0],e);for(var n=1;n<ns.length;n++){var r=ns[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&ir(Bt,e),Ht!==null&&ir(Ht,e),Vt!==null&&ir(Vt,e),Tr.forEach(t),Ar.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)ru(n),n.blockedOn===null&&Dt.shift()}var On=Rt.ReactCurrentBatchConfig,Ls=!0;function Bp(e,t,n,r){var s=Y,i=On.transition;On.transition=null;try{Y=1,cl(e,t,n,r)}finally{Y=s,On.transition=i}}function Hp(e,t,n,r){var s=Y,i=On.transition;On.transition=null;try{Y=4,cl(e,t,n,r)}finally{Y=s,On.transition=i}}function cl(e,t,n,r){if(Ls){var s=vo(e,t,n,r);if(s===null)Li(e,t,r,Rs,n),ia(e,r);else if(Wp(s,e,t,n,r))r.stopPropagation();else if(ia(e,r),t&4&&-1<Up.indexOf(e)){for(;s!==null;){var i=Qr(s);if(i!==null&&Zc(i),i=vo(e,t,n,r),i===null&&Li(e,t,r,Rs,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Li(e,t,r,null,n)}}var Rs=null;function vo(e,t,n,r){if(Rs=null,e=il(r),e=an(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rs=e,null}function su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_p()){case ol:return 1;case Yc:return 4;case As:case Lp:return 16;case Kc:return 536870912;default:return 16}default:return 16}}var Wt=null,ul=null,ws=null;function iu(){if(ws)return ws;var e,t=ul,n=t.length,r,s="value"in Wt?Wt.value:Wt.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===s[i-r];r++);return ws=s.slice(e,1<r?1-r:void 0)}function xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rs(){return!0}function la(){return!1}function Je(e){function t(n,r,s,i,l){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?rs:la,this.isPropagationStopped=la,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Je(Jn),Vr=oe({},Jn,{view:0,detail:0}),Vp=Je(Vr),ji,Ci,or,ri=oe({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(ji=e.screenX-or.screenX,Ci=e.screenY-or.screenY):Ci=ji=0,or=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:Ci}}),aa=Je(ri),Qp=oe({},ri,{dataTransfer:0}),Gp=Je(Qp),Yp=oe({},Vr,{relatedTarget:0}),Ii=Je(Yp),Kp=oe({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jp=Je(Kp),Xp=oe({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zp=Je(Xp),em=oe({},Jn,{data:0}),ca=Je(em),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rm[e])?!!t[e]:!1}function pl(){return sm}var im=oe({},Vr,{key:function(e){if(e.key){var t=tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pl,charCode:function(e){return e.type==="keypress"?xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),om=Je(im),lm=oe({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ua=Je(lm),am=oe({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pl}),cm=Je(am),um=oe({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),dm=Je(um),pm=oe({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=Je(pm),fm=[9,13,27,32],ml=Tt&&"CompositionEvent"in window,xr=null;Tt&&"documentMode"in document&&(xr=document.documentMode);var hm=Tt&&"TextEvent"in window&&!xr,ou=Tt&&(!ml||xr&&8<xr&&11>=xr),da=" ",pa=!1;function lu(e,t){switch(e){case"keyup":return fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function gm(e,t){switch(e){case"compositionend":return au(t);case"keypress":return t.which!==32?null:(pa=!0,da);case"textInput":return e=t.data,e===da&&pa?null:e;default:return null}}function vm(e,t){if(In)return e==="compositionend"||!ml&&lu(e,t)?(e=iu(),ws=ul=Wt=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ou&&t.locale!=="ko"?null:t.data;default:return null}}var ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ym[e.type]:t==="textarea"}function cu(e,t,n,r){Dc(r),t=zs(t,"onChange"),0<t.length&&(n=new dl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var br=null,Lr=null;function wm(e){xu(e,0)}function si(e){var t=Pn(e);if(Lc(t))return e}function xm(e,t){if(e==="change")return t}var uu=!1;if(Tt){var Ni;if(Tt){var Ei="oninput"in document;if(!Ei){var fa=document.createElement("div");fa.setAttribute("oninput","return;"),Ei=typeof fa.oninput=="function"}Ni=Ei}else Ni=!1;uu=Ni&&(!document.documentMode||9<document.documentMode)}function ha(){br&&(br.detachEvent("onpropertychange",du),Lr=br=null)}function du(e){if(e.propertyName==="value"&&si(Lr)){var t=[];cu(t,Lr,e,il(e)),Bc(wm,t)}}function bm(e,t,n){e==="focusin"?(ha(),br=t,Lr=n,br.attachEvent("onpropertychange",du)):e==="focusout"&&ha()}function km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(Lr)}function Sm(e,t){if(e==="click")return si(t)}function jm(e,t){if(e==="input"||e==="change")return si(t)}function Cm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Cm;function Rr(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Xi.call(t,s)||!gt(e[s],t[s]))return!1}return!0}function ga(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function va(e,t){var n=ga(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ga(n)}}function pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mu(){for(var e=window,t=Es();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Es(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Im(e){var t=mu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pu(n.ownerDocument.documentElement,n)){if(r!==null&&fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=va(n,i);var l=va(n,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nm=Tt&&"documentMode"in document&&11>=document.documentMode,Nn=null,yo=null,kr=null,wo=!1;function ya(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wo||Nn==null||Nn!==Es(r)||(r=Nn,"selectionStart"in r&&fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Rr(kr,r)||(kr=r,r=zs(yo,"onSelect"),0<r.length&&(t=new dl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function ss(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionend:ss("Transition","TransitionEnd")},Pi={},fu={};Tt&&(fu=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function ii(e){if(Pi[e])return Pi[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fu)return Pi[e]=t[n];return e}var hu=ii("animationend"),gu=ii("animationiteration"),vu=ii("animationstart"),yu=ii("transitionend"),wu=new Map,wa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){wu.set(e,t),xn(t,[e])}for(var Ti=0;Ti<wa.length;Ti++){var Ai=wa[Ti],Em=Ai.toLowerCase(),Pm=Ai[0].toUpperCase()+Ai.slice(1);en(Em,"on"+Pm)}en(hu,"onAnimationEnd");en(gu,"onAnimationIteration");en(vu,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(yu,"onTransitionEnd");Wn("onMouseEnter",["mouseout","mouseover"]);Wn("onMouseLeave",["mouseout","mouseover"]);Wn("onPointerEnter",["pointerout","pointerover"]);Wn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tm=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function xa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ep(r,t,void 0,e),e.currentTarget=null}function xu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&s.isPropagationStopped())break e;xa(s,a,u),i=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&s.isPropagationStopped())break e;xa(s,a,u),i=c}}}if(Ts)throw e=fo,Ts=!1,fo=null,e}function te(e,t){var n=t[jo];n===void 0&&(n=t[jo]=new Set);var r=e+"__bubble";n.has(r)||(bu(t,e,2,!1),n.add(r))}function _i(e,t,n){var r=0;t&&(r|=4),bu(n,e,r,t)}var is="_reactListening"+Math.random().toString(36).slice(2);function zr(e){if(!e[is]){e[is]=!0,Ec.forEach(function(n){n!=="selectionchange"&&(Tm.has(n)||_i(n,!1,e),_i(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[is]||(t[is]=!0,_i("selectionchange",!1,t))}}function bu(e,t,n,r){switch(su(t)){case 1:var s=Bp;break;case 4:s=Hp;break;default:s=cl}n=s.bind(null,t,n,e),s=void 0,!mo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Li(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;a!==null;){if(l=an(a),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Bc(function(){var u=i,f=il(n),g=[];e:{var v=wu.get(e);if(v!==void 0){var x=dl,y=e;switch(e){case"keypress":if(xs(n)===0)break e;case"keydown":case"keyup":x=om;break;case"focusin":y="focus",x=Ii;break;case"focusout":y="blur",x=Ii;break;case"beforeblur":case"afterblur":x=Ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=aa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=cm;break;case hu:case gu:case vu:x=Jp;break;case yu:x=dm;break;case"scroll":x=Vp;break;case"wheel":x=mm;break;case"copy":case"cut":case"paste":x=Zp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ua}var h=(t&4)!==0,C=!h&&e==="scroll",m=h?v!==null?v+"Capture":null:v;h=[];for(var d=u,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,m!==null&&(w=Pr(d,m),w!=null&&h.push(Mr(d,w,p)))),C)break;d=d.return}0<h.length&&(v=new x(v,y,null,n,f),g.push({event:v,listeners:h}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&n!==uo&&(y=n.relatedTarget||n.fromElement)&&(an(y)||y[At]))break e;if((x||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?an(y):null,y!==null&&(C=bn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(h=aa,w="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(h=ua,w="onPointerLeave",m="onPointerEnter",d="pointer"),C=x==null?v:Pn(x),p=y==null?v:Pn(y),v=new h(w,d+"leave",x,n,f),v.target=C,v.relatedTarget=p,w=null,an(f)===u&&(h=new h(m,d+"enter",y,n,f),h.target=p,h.relatedTarget=C,w=h),C=w,x&&y)t:{for(h=x,m=y,d=0,p=h;p;p=kn(p))d++;for(p=0,w=m;w;w=kn(w))p++;for(;0<d-p;)h=kn(h),d--;for(;0<p-d;)m=kn(m),p--;for(;d--;){if(h===m||m!==null&&h===m.alternate)break t;h=kn(h),m=kn(m)}h=null}else h=null;x!==null&&ba(g,v,x,h,!1),y!==null&&C!==null&&ba(g,C,y,h,!0)}}e:{if(v=u?Pn(u):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var N=xm;else if(ma(v))if(uu)N=jm;else{N=km;var T=bm}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(N=Sm);if(N&&(N=N(e,u))){cu(g,N,n,f);break e}T&&T(e,v,u),e==="focusout"&&(T=v._wrapperState)&&T.controlled&&v.type==="number"&&io(v,"number",v.value)}switch(T=u?Pn(u):window,e){case"focusin":(ma(T)||T.contentEditable==="true")&&(Nn=T,yo=u,kr=null);break;case"focusout":kr=yo=Nn=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,ya(g,n,f);break;case"selectionchange":if(Nm)break;case"keydown":case"keyup":ya(g,n,f)}var P;if(ml)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else In?lu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ou&&n.locale!=="ko"&&(In||_!=="onCompositionStart"?_==="onCompositionEnd"&&In&&(P=iu()):(Wt=f,ul="value"in Wt?Wt.value:Wt.textContent,In=!0)),T=zs(u,_),0<T.length&&(_=new ca(_,e,null,n,f),g.push({event:_,listeners:T}),P?_.data=P:(P=au(n),P!==null&&(_.data=P)))),(P=hm?gm(e,n):vm(e,n))&&(u=zs(u,"onBeforeInput"),0<u.length&&(f=new ca("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:u}),f.data=P))}xu(g,t)})}function Mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zs(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Pr(e,n),i!=null&&r.unshift(Mr(e,i,s)),i=Pr(e,t),i!=null&&r.push(Mr(e,i,s))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ba(e,t,n,r,s){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,s?(c=Pr(n,i),c!=null&&l.unshift(Mr(n,c,a))):s||(c=Pr(n,i),c!=null&&l.push(Mr(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Am=/\r\n?/g,_m=/\u0000|\uFFFD/g;function ka(e){return(typeof e=="string"?e:""+e).replace(Am,`
`).replace(_m,"")}function os(e,t,n){if(t=ka(t),ka(e)!==t&&n)throw Error(j(425))}function Ms(){}var xo=null,bo=null;function ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,Lm=typeof clearTimeout=="function"?clearTimeout:void 0,Sa=typeof Promise=="function"?Promise:void 0,Rm=typeof queueMicrotask=="function"?queueMicrotask:typeof Sa<"u"?function(e){return Sa.resolve(null).then(e).catch(zm)}:So;function zm(e){setTimeout(function(){throw e})}function Ri(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),_r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);_r(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ja(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),kt="__reactFiber$"+Xn,$r="__reactProps$"+Xn,At="__reactContainer$"+Xn,jo="__reactEvents$"+Xn,Mm="__reactListeners$"+Xn,$m="__reactHandles$"+Xn;function an(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ja(e);e!==null;){if(n=e[kt])return n;e=ja(e)}return t}e=n,n=e.parentNode}return null}function Qr(e){return e=e[kt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function oi(e){return e[$r]||null}var Co=[],Tn=-1;function tn(e){return{current:e}}function ne(e){0>Tn||(e.current=Co[Tn],Co[Tn]=null,Tn--)}function X(e,t){Tn++,Co[Tn]=e.current,e.current=t}var Zt={},Te=tn(Zt),Ue=tn(!1),fn=Zt;function qn(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function We(e){return e=e.childContextTypes,e!=null}function $s(){ne(Ue),ne(Te)}function Ca(e,t,n){if(Te.current!==Zt)throw Error(j(168));X(Te,t),X(Ue,n)}function ku(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(j(108,bp(e)||"Unknown",s));return oe({},n,r)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,fn=Te.current,X(Te,e),X(Ue,Ue.current),!0}function Ia(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=ku(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,ne(Ue),ne(Te),X(Te,e)):ne(Ue),X(Ue,n)}var It=null,li=!1,zi=!1;function Su(e){It===null?It=[e]:It.push(e)}function Fm(e){li=!0,Su(e)}function nn(){if(!zi&&It!==null){zi=!0;var e=0,t=Y;try{var n=It;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,li=!1}catch(s){throw It!==null&&(It=It.slice(e+1)),Gc(ol,nn),s}finally{Y=t,zi=!1}}return null}var An=[],_n=0,Os=null,Ds=0,et=[],tt=0,hn=null,Nt=1,Et="";function on(e,t){An[_n++]=Ds,An[_n++]=Os,Os=e,Ds=t}function ju(e,t,n){et[tt++]=Nt,et[tt++]=Et,et[tt++]=hn,hn=e;var r=Nt;e=Et;var s=32-pt(r)-1;r&=~(1<<s),n+=1;var i=32-pt(t)+s;if(30<i){var l=s-s%5;i=(r&(1<<l)-1).toString(32),r>>=l,s-=l,Nt=1<<32-pt(t)+s|n<<s|r,Et=i+e}else Nt=1<<i|n<<s|r,Et=e}function hl(e){e.return!==null&&(on(e,1),ju(e,1,0))}function gl(e){for(;e===Os;)Os=An[--_n],An[_n]=null,Ds=An[--_n],An[_n]=null;for(;e===hn;)hn=et[--tt],et[tt]=null,Et=et[--tt],et[tt]=null,Nt=et[--tt],et[tt]=null}var Ge=null,Qe=null,re=!1,dt=null;function Cu(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Na(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Qe=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hn!==null?{id:Nt,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Qe=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function No(e){if(re){var t=Qe;if(t){var n=t;if(!Na(e,t)){if(Io(e))throw Error(j(418));t=Qt(n.nextSibling);var r=Ge;t&&Na(e,t)?Cu(r,n):(e.flags=e.flags&-4097|2,re=!1,Ge=e)}}else{if(Io(e))throw Error(j(418));e.flags=e.flags&-4097|2,re=!1,Ge=e}}}function Ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function ls(e){if(e!==Ge)return!1;if(!re)return Ea(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ko(e.type,e.memoizedProps)),t&&(t=Qe)){if(Io(e))throw Iu(),Error(j(418));for(;t;)Cu(e,t),t=Qt(t.nextSibling)}if(Ea(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ge?Qt(e.stateNode.nextSibling):null;return!0}function Iu(){for(var e=Qe;e;)e=Qt(e.nextSibling)}function Bn(){Qe=Ge=null,re=!1}function vl(e){dt===null?dt=[e]:dt.push(e)}var Om=Rt.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function as(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pa(e){var t=e._init;return t(e._payload)}function Nu(e){function t(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function s(m,d){return m=Jt(m,d),m.index=0,m.sibling=null,m}function i(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,d,p,w){return d===null||d.tag!==6?(d=Wi(p,m.mode,w),d.return=m,d):(d=s(d,p),d.return=m,d)}function c(m,d,p,w){var N=p.type;return N===Cn?f(m,d,p.props.children,w,p.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ft&&Pa(N)===d.type)?(w=s(d,p.props),w.ref=lr(m,d,p),w.return=m,w):(w=Ns(p.type,p.key,p.props,null,m.mode,w),w.ref=lr(m,d,p),w.return=m,w)}function u(m,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=qi(p,m.mode,w),d.return=m,d):(d=s(d,p.children||[]),d.return=m,d)}function f(m,d,p,w,N){return d===null||d.tag!==7?(d=pn(p,m.mode,w,N),d.return=m,d):(d=s(d,p),d.return=m,d)}function g(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Wi(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Jr:return p=Ns(d.type,d.key,d.props,null,m.mode,p),p.ref=lr(m,null,d),p.return=m,p;case jn:return d=qi(d,m.mode,p),d.return=m,d;case Ft:var w=d._init;return g(m,w(d._payload),p)}if(fr(d)||nr(d))return d=pn(d,m.mode,p,null),d.return=m,d;as(m,d)}return null}function v(m,d,p,w){var N=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:a(m,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Jr:return p.key===N?c(m,d,p,w):null;case jn:return p.key===N?u(m,d,p,w):null;case Ft:return N=p._init,v(m,d,N(p._payload),w)}if(fr(p)||nr(p))return N!==null?null:f(m,d,p,w,null);as(m,p)}return null}function x(m,d,p,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(p)||null,a(d,m,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Jr:return m=m.get(w.key===null?p:w.key)||null,c(d,m,w,N);case jn:return m=m.get(w.key===null?p:w.key)||null,u(d,m,w,N);case Ft:var T=w._init;return x(m,d,p,T(w._payload),N)}if(fr(w)||nr(w))return m=m.get(p)||null,f(d,m,w,N,null);as(d,w)}return null}function y(m,d,p,w){for(var N=null,T=null,P=d,_=d=0,q=null;P!==null&&_<p.length;_++){P.index>_?(q=P,P=null):q=P.sibling;var M=v(m,P,p[_],w);if(M===null){P===null&&(P=q);break}e&&P&&M.alternate===null&&t(m,P),d=i(M,d,_),T===null?N=M:T.sibling=M,T=M,P=q}if(_===p.length)return n(m,P),re&&on(m,_),N;if(P===null){for(;_<p.length;_++)P=g(m,p[_],w),P!==null&&(d=i(P,d,_),T===null?N=P:T.sibling=P,T=P);return re&&on(m,_),N}for(P=r(m,P);_<p.length;_++)q=x(P,m,_,p[_],w),q!==null&&(e&&q.alternate!==null&&P.delete(q.key===null?_:q.key),d=i(q,d,_),T===null?N=q:T.sibling=q,T=q);return e&&P.forEach(function(le){return t(m,le)}),re&&on(m,_),N}function h(m,d,p,w){var N=nr(p);if(typeof N!="function")throw Error(j(150));if(p=N.call(p),p==null)throw Error(j(151));for(var T=N=null,P=d,_=d=0,q=null,M=p.next();P!==null&&!M.done;_++,M=p.next()){P.index>_?(q=P,P=null):q=P.sibling;var le=v(m,P,M.value,w);if(le===null){P===null&&(P=q);break}e&&P&&le.alternate===null&&t(m,P),d=i(le,d,_),T===null?N=le:T.sibling=le,T=le,P=q}if(M.done)return n(m,P),re&&on(m,_),N;if(P===null){for(;!M.done;_++,M=p.next())M=g(m,M.value,w),M!==null&&(d=i(M,d,_),T===null?N=M:T.sibling=M,T=M);return re&&on(m,_),N}for(P=r(m,P);!M.done;_++,M=p.next())M=x(P,m,_,M.value,w),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?_:M.key),d=i(M,d,_),T===null?N=M:T.sibling=M,T=M);return e&&P.forEach(function(fe){return t(m,fe)}),re&&on(m,_),N}function C(m,d,p,w){if(typeof p=="object"&&p!==null&&p.type===Cn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Jr:e:{for(var N=p.key,T=d;T!==null;){if(T.key===N){if(N=p.type,N===Cn){if(T.tag===7){n(m,T.sibling),d=s(T,p.props.children),d.return=m,m=d;break e}}else if(T.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ft&&Pa(N)===T.type){n(m,T.sibling),d=s(T,p.props),d.ref=lr(m,T,p),d.return=m,m=d;break e}n(m,T);break}else t(m,T);T=T.sibling}p.type===Cn?(d=pn(p.props.children,m.mode,w,p.key),d.return=m,m=d):(w=Ns(p.type,p.key,p.props,null,m.mode,w),w.ref=lr(m,d,p),w.return=m,m=w)}return l(m);case jn:e:{for(T=p.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(m,d.sibling),d=s(d,p.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=qi(p,m.mode,w),d.return=m,m=d}return l(m);case Ft:return T=p._init,C(m,d,T(p._payload),w)}if(fr(p))return y(m,d,p,w);if(nr(p))return h(m,d,p,w);as(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(m,d.sibling),d=s(d,p),d.return=m,m=d):(n(m,d),d=Wi(p,m.mode,w),d.return=m,m=d),l(m)):n(m,d)}return C}var Hn=Nu(!0),Eu=Nu(!1),Us=tn(null),Ws=null,Ln=null,yl=null;function wl(){yl=Ln=Ws=null}function xl(e){var t=Us.current;ne(Us),e._currentValue=t}function Eo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Ws=e,yl=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(yl!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(Ws===null)throw Error(j(308));Ln=e,Ws.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var cn=null;function bl(e){cn===null?cn=[e]:cn.push(e)}function Pu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,bl(t)):(n.next=s.next,s.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,_t(e,n)}return s=r.interleaved,s===null?(t.next=t,bl(r)):(t.next=s.next,s.next=t),r.interleaved=t,_t(e,n)}function bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ll(e,n)}}function Ta(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qs(e,t,n,r){var s=e.updateQueue;Ot=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,u=c.next;c.next=null,l===null?i=u:l.next=u,l=c;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=c))}if(i!==null){var g=s.baseState;l=0,f=u=c=null,a=i;do{var v=a.lane,x=a.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,h=a;switch(v=t,x=n,h.tag){case 1:if(y=h.payload,typeof y=="function"){g=y.call(x,g,v);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=h.payload,v=typeof y=="function"?y.call(x,g,v):y,v==null)break e;g=oe({},g,v);break e;case 2:Ot=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=s.effects,v===null?s.effects=[a]:v.push(a))}else x={eventTime:x,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=x,c=g):f=f.next=x,l|=v;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;v=a,a=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(f===null&&(c=g),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=f,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);vn|=l,e.lanes=l,e.memoizedState=g}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var Gr={},jt=tn(Gr),Fr=tn(Gr),Or=tn(Gr);function un(e){if(e===Gr)throw Error(j(174));return e}function Sl(e,t){switch(X(Or,t),X(Fr,e),X(jt,Gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lo(t,e)}ne(jt),X(jt,t)}function Vn(){ne(jt),ne(Fr),ne(Or)}function Au(e){un(Or.current);var t=un(jt.current),n=lo(t,e.type);t!==n&&(X(Fr,e),X(jt,n))}function jl(e){Fr.current===e&&(ne(jt),ne(Fr))}var se=tn(0);function Bs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mi=[];function Cl(){for(var e=0;e<Mi.length;e++)Mi[e]._workInProgressVersionPrimary=null;Mi.length=0}var ks=Rt.ReactCurrentDispatcher,$i=Rt.ReactCurrentBatchConfig,gn=0,ie=null,he=null,ve=null,Hs=!1,Sr=!1,Dr=0,Dm=0;function Ne(){throw Error(j(321))}function Il(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Nl(e,t,n,r,s,i){if(gn=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ks.current=e===null||e.memoizedState===null?Bm:Hm,e=n(r,s),Sr){i=0;do{if(Sr=!1,Dr=0,25<=i)throw Error(j(301));i+=1,ve=he=null,t.updateQueue=null,ks.current=Vm,e=n(r,s)}while(Sr)}if(ks.current=Vs,t=he!==null&&he.next!==null,gn=0,ve=he=ie=null,Hs=!1,t)throw Error(j(300));return e}function El(){var e=Dr!==0;return Dr=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ie.memoizedState=ve=e:ve=ve.next=e,ve}function it(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?ie.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(j(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?ie.memoizedState=ve=e:ve=ve.next=e}return ve}function Ur(e,t){return typeof t=="function"?t(e):t}function Fi(e){var t=it(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=he,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=l=null,c=null,u=i;do{var f=u.lane;if((gn&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=g,l=r):c=c.next=g,ie.lanes|=f,vn|=f}u=u.next}while(u!==null&&u!==i);c===null?l=r:c.next=a,gt(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,ie.lanes|=i,vn|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oi(e){var t=it(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do i=e(i,l.action),l=l.next;while(l!==s);gt(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _u(){}function Lu(e,t){var n=ie,r=it(),s=t(),i=!gt(r.memoizedState,s);if(i&&(r.memoizedState=s,De=!0),r=r.queue,Pl(Mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Wr(9,zu.bind(null,n,r,s,t),void 0,null),ye===null)throw Error(j(349));gn&30||Ru(n,t,s)}return s}function Ru(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zu(e,t,n,r){t.value=n,t.getSnapshot=r,$u(t)&&Fu(e)}function Mu(e,t,n){return n(function(){$u(t)&&Fu(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Fu(e){var t=_t(e,1);t!==null&&mt(t,e,1,-1)}function _a(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=qm.bind(null,ie,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ou(){return it().memoizedState}function Ss(e,t,n,r){var s=xt();ie.flags|=e,s.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function ai(e,t,n,r){var s=it();r=r===void 0?null:r;var i=void 0;if(he!==null){var l=he.memoizedState;if(i=l.destroy,r!==null&&Il(r,l.deps)){s.memoizedState=Wr(t,n,i,r);return}}ie.flags|=e,s.memoizedState=Wr(1|t,n,i,r)}function La(e,t){return Ss(8390656,8,e,t)}function Pl(e,t){return ai(2048,8,e,t)}function Du(e,t){return ai(4,2,e,t)}function Uu(e,t){return ai(4,4,e,t)}function Wu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qu(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,4,Wu.bind(null,t,e),n)}function Tl(){}function Bu(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Il(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hu(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Il(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vu(e,t,n){return gn&21?(gt(n,t)||(n=Jc(),ie.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function Um(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=$i.transition;$i.transition={};try{e(!1),t()}finally{Y=n,$i.transition=r}}function Qu(){return it().memoizedState}function Wm(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gu(e))Yu(t,n);else if(n=Pu(e,t,n,r),n!==null){var s=Re();mt(n,e,r,s),Ku(n,t,r)}}function qm(e,t,n){var r=Kt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gu(e))Yu(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(s.hasEagerState=!0,s.eagerState=a,gt(a,l)){var c=t.interleaved;c===null?(s.next=s,bl(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=Pu(e,t,s,r),n!==null&&(s=Re(),mt(n,e,r,s),Ku(n,t,r))}}function Gu(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Yu(e,t){Sr=Hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ku(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ll(e,n)}}var Vs={readContext:st,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Bm={readContext:st,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:La,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ss(4194308,4,Wu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ss(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ss(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wm.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:_a,useDebugValue:Tl,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=_a(!1),t=e[0];return e=Um.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,s=xt();if(re){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ye===null)throw Error(j(349));gn&30||Ru(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,La(Mu.bind(null,r,i,e),[e]),r.flags|=2048,Wr(9,zu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=xt(),t=ye.identifierPrefix;if(re){var n=Et,r=Nt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hm={readContext:st,useCallback:Bu,useContext:st,useEffect:Pl,useImperativeHandle:qu,useInsertionEffect:Du,useLayoutEffect:Uu,useMemo:Hu,useReducer:Fi,useRef:Ou,useState:function(){return Fi(Ur)},useDebugValue:Tl,useDeferredValue:function(e){var t=it();return Vu(t,he.memoizedState,e)},useTransition:function(){var e=Fi(Ur)[0],t=it().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:Lu,useId:Qu,unstable_isNewReconciler:!1},Vm={readContext:st,useCallback:Bu,useContext:st,useEffect:Pl,useImperativeHandle:qu,useInsertionEffect:Du,useLayoutEffect:Uu,useMemo:Hu,useReducer:Oi,useRef:Ou,useState:function(){return Oi(Ur)},useDebugValue:Tl,useDeferredValue:function(e){var t=it();return he===null?t.memoizedState=e:Vu(t,he.memoizedState,e)},useTransition:function(){var e=Oi(Ur)[0],t=it().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:Lu,useId:Qu,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Po(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),s=Kt(e),i=Pt(r,s);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,s),t!==null&&(mt(t,e,s,r),bs(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),s=Kt(e),i=Pt(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,s),t!==null&&(mt(t,e,s,r),bs(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=Kt(e),s=Pt(n,r);s.tag=2,t!=null&&(s.callback=t),t=Gt(e,s,r),t!==null&&(mt(t,e,r,n),bs(t,e,r))}};function Ra(e,t,n,r,s,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(s,i):!0}function Ju(e,t,n){var r=!1,s=Zt,i=t.contextType;return typeof i=="object"&&i!==null?i=st(i):(s=We(t)?fn:Te.current,r=t.contextTypes,i=(r=r!=null)?qn(e,s):Zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function za(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function To(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},kl(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=st(i):(i=We(t)?fn:Te.current,s.context=qn(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Po(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ci.enqueueReplaceState(s,s.state,null),qs(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t){try{var n="",r=t;do n+=xp(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Di(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ao(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qm=typeof WeakMap=="function"?WeakMap:Map;function Xu(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gs||(Gs=!0,Uo=r),Ao(e,t)},n}function Zu(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Ao(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ao(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ma(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qm;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=af.bind(null,e,t,n),t.then(e,e))}function $a(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fa(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var Gm=Rt.ReactCurrentOwner,De=!1;function Le(e,t,n,r){t.child=e===null?Eu(t,null,n,r):Hn(t,e.child,n,r)}function Oa(e,t,n,r,s){n=n.render;var i=t.ref;return Dn(t,s),r=Nl(e,t,n,r,i,s),n=El(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Lt(e,t,s)):(re&&n&&hl(t),t.flags|=1,Le(e,t,r,s),t.child)}function Da(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!Fl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ed(e,t,i,r,s)):(e=Ns(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Rr,n(l,r)&&e.ref===t.ref)return Lt(e,t,s)}return t.flags|=1,e=Jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function ed(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(Rr(i,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Lt(e,t,s)}return _o(e,t,n,r,s)}function td(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(zn,Ve),Ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(zn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(zn,Ve),Ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(zn,Ve),Ve|=r;return Le(e,t,s,n),t.child}function nd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _o(e,t,n,r,s){var i=We(n)?fn:Te.current;return i=qn(t,i),Dn(t,s),n=Nl(e,t,n,r,i,s),r=El(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Lt(e,t,s)):(re&&r&&hl(t),t.flags|=1,Le(e,t,n,s),t.child)}function Ua(e,t,n,r,s){if(We(n)){var i=!0;Fs(t)}else i=!1;if(Dn(t,s),t.stateNode===null)js(e,t),Ju(t,n,r),To(t,n,r,s),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=We(n)?fn:Te.current,u=qn(t,u));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==u)&&za(t,l,r,u),Ot=!1;var v=t.memoizedState;l.state=v,qs(t,r,l,s),c=t.memoizedState,a!==r||v!==c||Ue.current||Ot?(typeof f=="function"&&(Po(t,n,f,r),c=t.memoizedState),(a=Ot||Ra(t,n,a,r,v,c,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Tu(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ct(t.type,a),l.props=u,g=t.pendingProps,v=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=st(c):(c=We(n)?fn:Te.current,c=qn(t,c));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||v!==c)&&za(t,l,r,c),Ot=!1,v=t.memoizedState,l.state=v,qs(t,r,l,s);var y=t.memoizedState;a!==g||v!==y||Ue.current||Ot?(typeof x=="function"&&(Po(t,n,x,r),y=t.memoizedState),(u=Ot||Ra(t,n,u,r,v,y,c)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Lo(e,t,n,r,i,s)}function Lo(e,t,n,r,s,i){nd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return s&&Ia(t,n,!1),Lt(e,t,i);r=t.stateNode,Gm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Hn(t,e.child,null,i),t.child=Hn(t,null,a,i)):Le(e,t,a,i),t.memoizedState=r.state,s&&Ia(t,n,!0),t.child}function rd(e){var t=e.stateNode;t.pendingContext?Ca(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ca(e,t.context,!1),Sl(e,t.containerInfo)}function Wa(e,t,n,r,s){return Bn(),vl(s),t.flags|=256,Le(e,t,n,r),t.child}var Ro={dehydrated:null,treeContext:null,retryLane:0};function zo(e){return{baseLanes:e,cachePool:null,transitions:null}}function sd(e,t,n){var r=t.pendingProps,s=se.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),X(se,s&1),e===null)return No(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=pi(l,r,0,null),e=pn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=zo(n),t.memoizedState=Ro,e):Al(t,l));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Ym(e,t,l,r,a,s,n);if(i){i=r.fallback,l=t.mode,s=e.child,a=s.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Jt(s,c),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Jt(a,i):(i=pn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?zo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ro,r}return i=e.child,e=i.sibling,r=Jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Al(e,t){return t=pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function cs(e,t,n,r){return r!==null&&vl(r),Hn(t,e.child,null,n),e=Al(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ym(e,t,n,r,s,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Di(Error(j(422))),cs(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=pi({mode:"visible",children:r.children},s,0,null),i=pn(i,s,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Hn(t,e.child,null,l),t.child.memoizedState=zo(l),t.memoizedState=Ro,i);if(!(t.mode&1))return cs(e,t,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(j(419)),r=Di(i,r,void 0),cs(e,t,l,r)}if(a=(l&e.childLanes)!==0,De||a){if(r=ye,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,_t(e,s),mt(r,e,s,-1))}return $l(),r=Di(Error(j(421))),cs(e,t,l,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=cf.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,Qe=Qt(s.nextSibling),Ge=t,re=!0,dt=null,e!==null&&(et[tt++]=Nt,et[tt++]=Et,et[tt++]=hn,Nt=e.id,Et=e.overflow,hn=t),t=Al(t,r.children),t.flags|=4096,t)}function qa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Eo(e.return,t,n)}function Ui(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function id(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(Le(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qa(e,n,t);else if(e.tag===19)qa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(se,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Bs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ui(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Bs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ui(t,!0,n,null,i);break;case"together":Ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function js(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Km(e,t,n){switch(t.tag){case 3:rd(t),Bn();break;case 5:Au(t);break;case 1:We(t.type)&&Fs(t);break;case 4:Sl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;X(Us,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?sd(e,t,n):(X(se,se.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);X(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return id(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),X(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,td(e,t,n)}return Lt(e,t,n)}var od,Mo,ld,ad;od=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mo=function(){};ld=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,un(jt.current);var i=null;switch(n){case"input":s=ro(e,s),r=ro(e,r),i=[];break;case"select":s=oe({},s,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":s=oo(e,s),r=oo(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ms)}ao(n,r);var l;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Nr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&te("scroll",e),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};ad=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jm(e,t,n){var r=t.pendingProps;switch(gl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return We(t.type)&&$s(),Ee(t),null;case 3:return r=t.stateNode,Vn(),ne(Ue),ne(Te),Cl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ls(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Bo(dt),dt=null))),Mo(e,t),Ee(t),null;case 5:jl(t);var s=un(Or.current);if(n=t.type,e!==null&&t.stateNode!=null)ld(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Ee(t),null}if(e=un(jt.current),ls(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[kt]=t,r[$r]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(s=0;s<gr.length;s++)te(gr[s],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Xl(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":ea(r,i),te("invalid",r)}ao(n,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&os(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&os(r.textContent,a,e),s=["children",""+a]):Nr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":Xr(r),Zl(r,i,!0);break;case"textarea":Xr(r),ta(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ms)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[kt]=t,e[$r]=r,od(e,t,!1,!1),t.stateNode=e;e:{switch(l=co(n,r),n){case"dialog":te("cancel",e),te("close",e),s=r;break;case"iframe":case"object":case"embed":te("load",e),s=r;break;case"video":case"audio":for(s=0;s<gr.length;s++)te(gr[s],e);s=r;break;case"source":te("error",e),s=r;break;case"img":case"image":case"link":te("error",e),te("load",e),s=r;break;case"details":te("toggle",e),s=r;break;case"input":Xl(e,r),s=ro(e,r),te("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=oe({},r,{value:void 0}),te("invalid",e);break;case"textarea":ea(e,r),s=oo(e,r),te("invalid",e);break;default:s=r}ao(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Oc(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&$c(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Er(e,c):typeof c=="number"&&Er(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Nr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&te("scroll",e):c!=null&&tl(e,i,c,l))}switch(n){case"input":Xr(e),Zl(e,r,!1);break;case"textarea":Xr(e),ta(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Mn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ms)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)ad(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=un(Or.current),un(jt.current),ls(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(i=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:os(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&os(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Ee(t),null;case 13:if(ne(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Qe!==null&&t.mode&1&&!(t.flags&128))Iu(),Bn(),t.flags|=98560,i=!1;else if(i=ls(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[kt]=t}else Bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else dt!==null&&(Bo(dt),dt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ge===0&&(ge=3):$l())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Vn(),Mo(e,t),e===null&&zr(t.stateNode.containerInfo),Ee(t),null;case 10:return xl(t.type._context),Ee(t),null;case 17:return We(t.type)&&$s(),Ee(t),null;case 19:if(ne(se),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ar(i,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Bs(e),l!==null){for(t.flags|=128,ar(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>Gn&&(t.flags|=128,r=!0,ar(i,!1),t.lanes=4194304)}else{if(!r)if(e=Bs(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!re)return Ee(t),null}else 2*de()-i.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,ar(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,n=se.current,X(se,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Xm(e,t){switch(gl(t),t.tag){case 1:return We(t.type)&&$s(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),ne(Ue),ne(Te),Cl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jl(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return Vn(),null;case 10:return xl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var us=!1,Pe=!1,Zm=typeof WeakSet=="function"?WeakSet:Set,R=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function $o(e,t,n){try{n()}catch(r){ce(e,t,r)}}var Ba=!1;function ef(e,t){if(xo=Ls,e=mu(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,u=0,f=0,g=e,v=null;t:for(;;){for(var x;g!==n||s!==0&&g.nodeType!==3||(a=l+s),g!==i||r!==0&&g.nodeType!==3||(c=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)v=g,g=x;for(;;){if(g===e)break t;if(v===n&&++u===s&&(a=l),v===i&&++f===r&&(c=l),(x=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=x}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(bo={focusedElem:e,selectionRange:n},Ls=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var h=y.memoizedProps,C=y.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?h:ct(t.type,h),C);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=Ba,Ba=!1,y}function jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&$o(t,n,i)}s=s.next}while(s!==r)}}function ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cd(e){var t=e.alternate;t!==null&&(e.alternate=null,cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[$r],delete t[jo],delete t[Mm],delete t[$m])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ud(e){return e.tag===5||e.tag===3||e.tag===4}function Ha(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ms));else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}function Do(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Do(e,t,n),e=e.sibling;e!==null;)Do(e,t,n),e=e.sibling}var ke=null,ut=!1;function Mt(e,t,n){for(n=n.child;n!==null;)dd(e,t,n),n=n.sibling}function dd(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:Pe||Rn(n,t);case 6:var r=ke,s=ut;ke=null,Mt(e,t,n),ke=r,ut=s,ke!==null&&(ut?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(ut?(e=ke,n=n.stateNode,e.nodeType===8?Ri(e.parentNode,n):e.nodeType===1&&Ri(e,n),_r(e)):Ri(ke,n.stateNode));break;case 4:r=ke,s=ut,ke=n.stateNode.containerInfo,ut=!0,Mt(e,t,n),ke=r,ut=s;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&$o(n,t,l),s=s.next}while(s!==r)}Mt(e,t,n);break;case 1:if(!Pe&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Mt(e,t,n),Pe=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function Va(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zm),t.forEach(function(r){var s=uf.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,ut=!1;break e;case 3:ke=a.stateNode.containerInfo,ut=!0;break e;case 4:ke=a.stateNode.containerInfo,ut=!0;break e}a=a.return}if(ke===null)throw Error(j(160));dd(i,l,s),ke=null,ut=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ce(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pd(t,e),t=t.sibling}function pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),yt(e),r&4){try{jr(3,e,e.return),ui(3,e)}catch(h){ce(e,e.return,h)}try{jr(5,e,e.return)}catch(h){ce(e,e.return,h)}}break;case 1:lt(t,e),yt(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(lt(t,e),yt(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var s=e.stateNode;try{Er(s,"")}catch(h){ce(e,e.return,h)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Rc(s,i),co(a,l);var u=co(a,i);for(l=0;l<c.length;l+=2){var f=c[l],g=c[l+1];f==="style"?Oc(s,g):f==="dangerouslySetInnerHTML"?$c(s,g):f==="children"?Er(s,g):tl(s,f,g,u)}switch(a){case"input":so(s,i);break;case"textarea":zc(s,i);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Mn(s,!!i.multiple,x,!1):v!==!!i.multiple&&(i.defaultValue!=null?Mn(s,!!i.multiple,i.defaultValue,!0):Mn(s,!!i.multiple,i.multiple?[]:"",!1))}s[$r]=i}catch(h){ce(e,e.return,h)}}break;case 6:if(lt(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(h){ce(e,e.return,h)}}break;case 3:if(lt(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_r(t.containerInfo)}catch(h){ce(e,e.return,h)}break;case 4:lt(t,e),yt(e);break;case 13:lt(t,e),yt(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Rl=de())),r&4&&Va(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||f,lt(t,e),Pe=u):lt(t,e),yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(R=e,f=e.child;f!==null;){for(g=R=f;R!==null;){switch(v=R,x=v.child,v.tag){case 0:case 11:case 14:case 15:jr(4,v,v.return);break;case 1:Rn(v,v.return);var y=v.stateNode;if(typeof y.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(h){ce(r,n,h)}}break;case 5:Rn(v,v.return);break;case 22:if(v.memoizedState!==null){Ga(g);continue}}x!==null?(x.return=v,R=x):Ga(g)}f=f.sibling}e:for(f=null,g=e;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=g.stateNode,c=g.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Fc("display",l))}catch(h){ce(e,e.return,h)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(h){ce(e,e.return,h)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:lt(t,e),yt(e),r&4&&Va(e);break;case 21:break;default:lt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ud(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Er(s,""),r.flags&=-33);var i=Ha(e);Do(e,i,s);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ha(e);Oo(e,a,l);break;default:throw Error(j(161))}}catch(c){ce(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tf(e,t,n){R=e,md(e)}function md(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var s=R,i=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||us;if(!l){var a=s.alternate,c=a!==null&&a.memoizedState!==null||Pe;a=us;var u=Pe;if(us=l,(Pe=c)&&!u)for(R=s;R!==null;)l=R,c=l.child,l.tag===22&&l.memoizedState!==null?Ya(s):c!==null?(c.return=l,R=c):Ya(s);for(;i!==null;)R=i,md(i),i=i.sibling;R=s,us=a,Pe=u}Qa(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,R=i):Qa(e)}}function Qa(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||ui(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Aa(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&_r(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Pe||t.flags&512&&Fo(t)}catch(v){ce(t,t.return,v)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Ga(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ya(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ui(4,t)}catch(c){ce(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){ce(t,s,c)}}var i=t.return;try{Fo(t)}catch(c){ce(t,i,c)}break;case 5:var l=t.return;try{Fo(t)}catch(c){ce(t,l,c)}}}catch(c){ce(t,t.return,c)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var nf=Math.ceil,Qs=Rt.ReactCurrentDispatcher,_l=Rt.ReactCurrentOwner,rt=Rt.ReactCurrentBatchConfig,Q=0,ye=null,pe=null,Se=0,Ve=0,zn=tn(0),ge=0,qr=null,vn=0,di=0,Ll=0,Cr=null,Oe=null,Rl=0,Gn=1/0,Ct=null,Gs=!1,Uo=null,Yt=null,ds=!1,qt=null,Ys=0,Ir=0,Wo=null,Cs=-1,Is=0;function Re(){return Q&6?de():Cs!==-1?Cs:Cs=de()}function Kt(e){return e.mode&1?Q&2&&Se!==0?Se&-Se:Om.transition!==null?(Is===0&&(Is=Jc()),Is):(e=Y,e!==0||(e=window.event,e=e===void 0?16:su(e.type)),e):1}function mt(e,t,n,r){if(50<Ir)throw Ir=0,Wo=null,Error(j(185));Hr(e,n,r),(!(Q&2)||e!==ye)&&(e===ye&&(!(Q&2)&&(di|=n),ge===4&&Ut(e,Se)),qe(e,r),n===1&&Q===0&&!(t.mode&1)&&(Gn=de()+500,li&&nn()))}function qe(e,t){var n=e.callbackNode;Op(e,t);var r=_s(e,e===ye?Se:0);if(r===0)n!==null&&sa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sa(n),t===1)e.tag===0?Fm(Ka.bind(null,e)):Su(Ka.bind(null,e)),Rm(function(){!(Q&6)&&nn()}),n=null;else{switch(Xc(r)){case 1:n=ol;break;case 4:n=Yc;break;case 16:n=As;break;case 536870912:n=Kc;break;default:n=As}n=bd(n,fd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fd(e,t){if(Cs=-1,Is=0,Q&6)throw Error(j(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=_s(e,e===ye?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ks(e,r);else{t=r;var s=Q;Q|=2;var i=gd();(ye!==e||Se!==t)&&(Ct=null,Gn=de()+500,dn(e,t));do try{of();break}catch(a){hd(e,a)}while(!0);wl(),Qs.current=i,Q=s,pe!==null?t=0:(ye=null,Se=0,t=ge)}if(t!==0){if(t===2&&(s=ho(e),s!==0&&(r=s,t=qo(e,s))),t===1)throw n=qr,dn(e,0),Ut(e,r),qe(e,de()),n;if(t===6)Ut(e,r);else{if(s=e.current.alternate,!(r&30)&&!rf(s)&&(t=Ks(e,r),t===2&&(i=ho(e),i!==0&&(r=i,t=qo(e,i))),t===1))throw n=qr,dn(e,0),Ut(e,r),qe(e,de()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:ln(e,Oe,Ct);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=Rl+500-de(),10<t)){if(_s(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=So(ln.bind(null,e,Oe,Ct),t);break}ln(e,Oe,Ct);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var l=31-pt(r);i=1<<l,l=t[l],l>s&&(s=l),r&=~i}if(r=s,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nf(r/1960))-r,10<r){e.timeoutHandle=So(ln.bind(null,e,Oe,Ct),r);break}ln(e,Oe,Ct);break;case 5:ln(e,Oe,Ct);break;default:throw Error(j(329))}}}return qe(e,de()),e.callbackNode===n?fd.bind(null,e):null}function qo(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Ks(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Bo(t)),e}function Bo(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function rf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!gt(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Ll,t&=~di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function Ka(e){if(Q&6)throw Error(j(327));Un();var t=_s(e,0);if(!(t&1))return qe(e,de()),null;var n=Ks(e,t);if(e.tag!==0&&n===2){var r=ho(e);r!==0&&(t=r,n=qo(e,r))}if(n===1)throw n=qr,dn(e,0),Ut(e,t),qe(e,de()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Oe,Ct),qe(e,de()),null}function zl(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Gn=de()+500,li&&nn())}}function yn(e){qt!==null&&qt.tag===0&&!(Q&6)&&Un();var t=Q;Q|=1;var n=rt.transition,r=Y;try{if(rt.transition=null,Y=1,e)return e()}finally{Y=r,rt.transition=n,Q=t,!(Q&6)&&nn()}}function Ml(){Ve=zn.current,ne(zn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lm(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(gl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$s();break;case 3:Vn(),ne(Ue),ne(Te),Cl();break;case 5:jl(r);break;case 4:Vn();break;case 13:ne(se);break;case 19:ne(se);break;case 10:xl(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(ye=e,pe=e=Jt(e.current,null),Se=Ve=t,ge=0,qr=null,Ll=di=vn=0,Oe=Cr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=s,r.next=l}n.pending=r}cn=null}return e}function hd(e,t){do{var n=pe;try{if(wl(),ks.current=Vs,Hs){for(var r=ie.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Hs=!1}if(gn=0,ve=he=ie=null,Sr=!1,Dr=0,_l.current=null,n===null||n.return===null){ge=1,qr=t,pe=null;break}e:{var i=e,l=n.return,a=n,c=t;if(t=Se,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=a,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=$a(l);if(x!==null){x.flags&=-257,Fa(x,l,a,i,t),x.mode&1&&Ma(i,u,t),t=x,c=u;var y=t.updateQueue;if(y===null){var h=new Set;h.add(c),t.updateQueue=h}else y.add(c);break e}else{if(!(t&1)){Ma(i,u,t),$l();break e}c=Error(j(426))}}else if(re&&a.mode&1){var C=$a(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Fa(C,l,a,i,t),vl(Qn(c,a));break e}}i=c=Qn(c,a),ge!==4&&(ge=2),Cr===null?Cr=[i]:Cr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Xu(i,c,t);Ta(i,m);break e;case 1:a=c;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Yt===null||!Yt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Zu(i,a,t);Ta(i,w);break e}}i=i.return}while(i!==null)}yd(n)}catch(N){t=N,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function gd(){var e=Qs.current;return Qs.current=Vs,e===null?Vs:e}function $l(){(ge===0||ge===3||ge===2)&&(ge=4),ye===null||!(vn&268435455)&&!(di&268435455)||Ut(ye,Se)}function Ks(e,t){var n=Q;Q|=2;var r=gd();(ye!==e||Se!==t)&&(Ct=null,dn(e,t));do try{sf();break}catch(s){hd(e,s)}while(!0);if(wl(),Q=n,Qs.current=r,pe!==null)throw Error(j(261));return ye=null,Se=0,ge}function sf(){for(;pe!==null;)vd(pe)}function of(){for(;pe!==null&&!Tp();)vd(pe)}function vd(e){var t=xd(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?yd(e):pe=t,_l.current=null}function yd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Xm(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,pe=null;return}}else if(n=Jm(n,t,Ve),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ge===0&&(ge=5)}function ln(e,t,n){var r=Y,s=rt.transition;try{rt.transition=null,Y=1,lf(e,t,n,r)}finally{rt.transition=s,Y=r}return null}function lf(e,t,n,r){do Un();while(qt!==null);if(Q&6)throw Error(j(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Dp(e,i),e===ye&&(pe=ye=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ds||(ds=!0,bd(As,function(){return Un(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=rt.transition,rt.transition=null;var l=Y;Y=1;var a=Q;Q|=4,_l.current=null,ef(e,n),pd(n,e),Im(bo),Ls=!!xo,bo=xo=null,e.current=n,tf(n),Ap(),Q=a,Y=l,rt.transition=i}else e.current=n;if(ds&&(ds=!1,qt=e,Ys=s),i=e.pendingLanes,i===0&&(Yt=null),Rp(n.stateNode),qe(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Gs)throw Gs=!1,e=Uo,Uo=null,e;return Ys&1&&e.tag!==0&&Un(),i=e.pendingLanes,i&1?e===Wo?Ir++:(Ir=0,Wo=e):Ir=0,nn(),null}function Un(){if(qt!==null){var e=Xc(Ys),t=rt.transition,n=Y;try{if(rt.transition=null,Y=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,Ys=0,Q&6)throw Error(j(331));var s=Q;for(Q|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(R=u;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:jr(8,f,i)}var g=f.child;if(g!==null)g.return=f,R=g;else for(;R!==null;){f=R;var v=f.sibling,x=f.return;if(cd(f),f===u){R=null;break}if(v!==null){v.return=x,R=v;break}R=x}}}var y=i.alternate;if(y!==null){var h=y.child;if(h!==null){y.child=null;do{var C=h.sibling;h.sibling=null,h=C}while(h!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:jr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,R=m;break e}R=i.return}}var d=e.current;for(R=d;R!==null;){l=R;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,R=p;else e:for(l=d;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ui(9,a)}}catch(N){ce(a,a.return,N)}if(a===l){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(Q=s,nn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{Y=n,rt.transition=t}}return!1}function Ja(e,t,n){t=Qn(n,t),t=Xu(e,t,1),e=Gt(e,t,1),t=Re(),e!==null&&(Hr(e,1,t),qe(e,t))}function ce(e,t,n){if(e.tag===3)Ja(e,e,n);else for(;t!==null;){if(t.tag===3){Ja(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=Qn(n,e),e=Zu(t,e,1),t=Gt(t,e,1),e=Re(),t!==null&&(Hr(t,1,e),qe(t,e));break}}t=t.return}}function af(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Se&n)===n&&(ge===4||ge===3&&(Se&130023424)===Se&&500>de()-Rl?dn(e,0):Ll|=n),qe(e,t)}function wd(e,t){t===0&&(e.mode&1?(t=ts,ts<<=1,!(ts&130023424)&&(ts=4194304)):t=1);var n=Re();e=_t(e,t),e!==null&&(Hr(e,t,n),qe(e,n))}function cf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wd(e,n)}function uf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),wd(e,n)}var xd;xd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,Km(e,t,n);De=!!(e.flags&131072)}else De=!1,re&&t.flags&1048576&&ju(t,Ds,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;js(e,t),e=t.pendingProps;var s=qn(t,Te.current);Dn(t,n),s=Nl(null,t,r,e,s,n);var i=El();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(i=!0,Fs(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,kl(t),s.updater=ci,t.stateNode=s,s._reactInternals=t,To(t,r,e,n),t=Lo(null,t,r,!0,i,n)):(t.tag=0,re&&i&&hl(t),Le(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(js(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=pf(r),e=ct(r,e),s){case 0:t=_o(null,t,r,e,n);break e;case 1:t=Ua(null,t,r,e,n);break e;case 11:t=Oa(null,t,r,e,n);break e;case 14:t=Da(null,t,r,ct(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ct(r,s),_o(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ct(r,s),Ua(e,t,r,s,n);case 3:e:{if(rd(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Tu(e,t),qs(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=Qn(Error(j(423)),t),t=Wa(e,t,r,n,s);break e}else if(r!==s){s=Qn(Error(j(424)),t),t=Wa(e,t,r,n,s);break e}else for(Qe=Qt(t.stateNode.containerInfo.firstChild),Ge=t,re=!0,dt=null,n=Eu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===s){t=Lt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return Au(t),e===null&&No(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,l=s.children,ko(r,s)?l=null:i!==null&&ko(r,i)&&(t.flags|=32),nd(e,t),Le(e,t,l,n),t.child;case 6:return e===null&&No(t),null;case 13:return sd(e,t,n);case 4:return Sl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ct(r,s),Oa(e,t,r,s,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,l=s.value,X(Us,r._currentValue),r._currentValue=l,i!==null)if(gt(i.value,l)){if(i.children===s.children&&!Ue.current){t=Lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Pt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Eo(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(j(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Eo(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Le(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Dn(t,n),s=st(s),r=r(s),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,s=ct(r,t.pendingProps),s=ct(r.type,s),Da(e,t,r,s,n);case 15:return ed(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ct(r,s),js(e,t),t.tag=1,We(r)?(e=!0,Fs(t)):e=!1,Dn(t,n),Ju(t,r,s),To(t,r,s,n),Lo(null,t,r,!0,e,n);case 19:return id(e,t,n);case 22:return td(e,t,n)}throw Error(j(156,t.tag))};function bd(e,t){return Gc(e,t)}function df(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new df(e,t,n,r)}function Fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pf(e){if(typeof e=="function")return Fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rl)return 11;if(e===sl)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ns(e,t,n,r,s,i){var l=2;if(r=e,typeof e=="function")Fl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Cn:return pn(n.children,s,i,t);case nl:l=8,s|=8;break;case Zi:return e=nt(12,n,t,s|2),e.elementType=Zi,e.lanes=i,e;case eo:return e=nt(13,n,t,s),e.elementType=eo,e.lanes=i,e;case to:return e=nt(19,n,t,s),e.elementType=to,e.lanes=i,e;case Ac:return pi(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pc:l=10;break e;case Tc:l=9;break e;case rl:l=11;break e;case sl:l=14;break e;case Ft:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=nt(l,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function pn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function pi(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Ac,e.lanes=n,e.stateNode={isHidden:!1},e}function Wi(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function qi(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mf(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Si(0),this.expirationTimes=Si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ol(e,t,n,r,s,i,l,a,c){return e=new mf(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=nt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kl(i),e}function ff(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kd(e){if(!e)return Zt;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(We(n))return ku(e,n,t)}return t}function Sd(e,t,n,r,s,i,l,a,c){return e=Ol(n,r,!0,e,s,i,l,a,c),e.context=kd(null),n=e.current,r=Re(),s=Kt(n),i=Pt(r,s),i.callback=t??null,Gt(n,i,s),e.current.lanes=s,Hr(e,s,r),qe(e,r),e}function mi(e,t,n,r){var s=t.current,i=Re(),l=Kt(s);return n=kd(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(s,t,l),e!==null&&(mt(e,s,l,i),bs(e,s,l)),l}function Js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dl(e,t){Xa(e,t),(e=e.alternate)&&Xa(e,t)}function hf(){return null}var jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ul(e){this._internalRoot=e}fi.prototype.render=Ul.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));mi(e,t,null,null)};fi.prototype.unmount=Ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){mi(null,e,null,null)}),t[At]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=tu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&ru(e)}};function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Za(){}function gf(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Js(l);i.call(u)}}var l=Sd(t,r,e,0,null,!1,!1,"",Za);return e._reactRootContainer=l,e[At]=l.current,zr(e.nodeType===8?e.parentNode:e),yn(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=Js(c);a.call(u)}}var c=Ol(e,0,!1,null,null,!1,!1,"",Za);return e._reactRootContainer=c,e[At]=c.current,zr(e.nodeType===8?e.parentNode:e),yn(function(){mi(t,c,n,r)}),c}function gi(e,t,n,r,s){var i=n._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var c=Js(l);a.call(c)}}mi(t,l,e,s)}else l=gf(n,t,e,s,r);return Js(l)}Zc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(ll(t,n|1),qe(t,de()),!(Q&6)&&(Gn=de()+500,nn()))}break;case 13:yn(function(){var r=_t(e,1);if(r!==null){var s=Re();mt(r,e,1,s)}}),Dl(e,1)}};al=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Re();mt(t,e,134217728,n)}Dl(e,134217728)}};eu=function(e){if(e.tag===13){var t=Kt(e),n=_t(e,t);if(n!==null){var r=Re();mt(n,e,t,r)}Dl(e,t)}};tu=function(){return Y};nu=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};po=function(e,t,n){switch(t){case"input":if(so(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=oi(r);if(!s)throw Error(j(90));Lc(r),so(r,s)}}}break;case"textarea":zc(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};Wc=zl;qc=yn;var vf={usingClientEntryPoint:!1,Events:[Qr,Pn,oi,Dc,Uc,zl]},cr={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yf={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vc(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||hf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ps.isDisabled&&ps.supportsFiber)try{ni=ps.inject(yf),St=ps}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vf;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(t))throw Error(j(200));return ff(e,t,null,n)};Ke.createRoot=function(e,t){if(!Wl(e))throw Error(j(299));var n=!1,r="",s=jd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ol(e,1,!1,null,null,n,!1,r,s),e[At]=t.current,zr(e.nodeType===8?e.parentNode:e),new Ul(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Vc(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return yn(e)};Ke.hydrate=function(e,t,n){if(!hi(t))throw Error(j(200));return gi(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Wl(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",l=jd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Sd(t,null,e,1,n??null,s,!1,i,l),e[At]=t.current,zr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new fi(t)};Ke.render=function(e,t,n){if(!hi(t))throw Error(j(200));return gi(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!hi(e))throw Error(j(40));return e._reactRootContainer?(yn(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};Ke.unstable_batchedUpdates=zl;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hi(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return gi(e,t,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function Cd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cd)}catch(e){console.error(e)}}Cd(),Cc.exports=Ke;var wf=Cc.exports,ec=wf;Ji.createRoot=ec.createRoot,Ji.hydrateRoot=ec.hydrateRoot;const me={learner:{memberId:"member-learner-001",contactId:"contact-learner-001",email:"learner@example.com",displayName:"Amina Jacobs",roles:["learner"]},lecturer:{memberId:"member-lecturer-001",contactId:"contact-lecturer-001",email:"lecturer@example.com",displayName:"Faithonomics Lecturer",roles:["lecturer"]},administrator:{memberId:"member-admin-001",contactId:"contact-admin-001",email:"admin@example.com",displayName:"Faithonomics Admin",roles:["administrator"]}},vr=e=>`/Faithonomics/${e.replace(/^\/+/,"")}`,ft=[{id:"course-faithonomics-core",slug:"faithonomics-economic-discipleship",title:"Faithonomics Economic Discipleship",summary:"Eight levels that align work, stewardship, ownership, integrity and economic impact with God's framework.",description:"A structured Faithonomics LMS pathway with 8 levels, 32 sessions, step-based teaching blocks, interactive activities, written reflections and completion tracking.",imageUrl:vr("faithonomics-logo.png"),status:"published",pricePlanIds:["plan-faithonomics-core"],storeProductIds:["product-faithonomics-core"],isFree:!1,lecturerIds:[me.lecturer.memberId],estimatedHours:32,certificateTemplateId:"certificate-faithonomics-core",theme:{primary:"#234638",accent:"#B99245"}}],Id=[{title:"Level 1: Economic Alignment",description:"Move from economic pressure to intentional alignment.",sessions:["The Daily Grind","Competing Paradigms","Strategic Alignment","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_bf680d1d5dfc468fbd5db89ae370217b~mv2.png",imageAlt:"Faithonomics Level 1 course artwork."},{title:"Level 2: God's Economic Framework",description:"Understand creation, household, and community as economic foundations.",sessions:["The Household Model of Economics","The Economy of Creation","The Economy of Community","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_c29d7165ba394234ad2f0e43b16ed57b~mv2.png",imageAlt:"Faithonomics Level 2 course artwork."},{title:"Level 3: Economic Renewal",description:"Explore identity, repentance, and the power to change economic habits.",sessions:["The Way In","A New Identity","Power to Change","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_f82323d9106a4fe2a024bdf5dc58ef46~mv2.png",imageAlt:"Faithonomics Level 3 course artwork."},{title:"Level 4: Economic Impact and Transformation",description:"Trace transformation from personal decisions to social and societal renewal.",sessions:["Personal Change","Social Change","Societal Change","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_9e68cca7bfc54ba1a2215b7e63db5223~mv2.png",imageAlt:"Faithonomics Level 4 course artwork."},{title:"Level 5: God the Economist",description:"Practise abundance, ownership, and creative stewardship.",sessions:["More Than Enough","Who Really Owns It?","Created to Create","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_1625036257f242189f311908439e6f57~mv2.png",imageAlt:"Faithonomics Level 5 course artwork."},{title:"Level 6: The Great Command",description:"Let love set the standard for enterprise, access, and business culture.",sessions:["How We Do Business","Room for Everyone","Love Sets the Standard","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_71676a8bba0c4e7b919f743daae40178~mv2.png",imageAlt:"Faithonomics Level 6 course artwork."},{title:"Level 7: Godly Economic Practices",description:"Develop practical habits for work, generosity, and management.",sessions:["Work That Matters","Open Hands, Open Doors","Manage What Matters","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_98ed63ccc0c74cecb623057e5a23a200~mv2.png",imageAlt:"Faithonomics Level 7 course artwork."},{title:"Level 8: Economic Integrity",description:"Confront idolatry, hidden costs, and the discipline of enough.",sessions:["When Success Becomes an Idol","Who Pays the Price?","Enough Is Enough","Monday Morning"],imageUrl:"https://static.wixstatic.com/media/7638b6_714bd11be0764efc80bd75a8aeff1ddb~mv2.png",imageAlt:"Faithonomics Level 8 course artwork."}],xf=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),ot=Id.map((e,t)=>({id:`level-${t+1}`,courseId:"course-faithonomics-core",title:e.title,description:e.description,sequence:t+1,..."imageUrl"in e?{imageUrl:e.imageUrl,imageAlt:e.imageAlt}:{}})),$t=ot.map(e=>({moduleId:e.id,levelTitle:e.title,username:`level${e.sequence}`,password:`faith${e.sequence}`})),bf={id:"daily-grind-video-checkpoint",timeSeconds:206,durationSeconds:321,title:"Interactive Quiz: The Daily Grind",questions:[{id:"daily-grind-thabo-choice",prompt:"Thabo has R50. The latte costs R45. The coffee and muffin costs R49. Why might Thabo still choose the R49 option?",choices:["Because spending almost everything is always wise","Because the muffin may help him get through the morning","Because the latte is a bad product","Because the coffee shop owner told him to choose it","Because cheaper choices are always selfish","Because the muffin makes the coffee free"],correctAnswer:"Because the muffin may help him get through the morning",feedback:'Correct. Thabo is not only asking, "What is cheaper?" He is asking, "What will help me use what I have well today?" This shows that everyday choices are shaped by needs, values, and the situation.'},{id:"daily-grind-thabo-decision",prompt:"Which question best describes what is happening inside Thabo's decision?",choices:["How can I buy the most expensive thing?","How can I copy what other people are buying?","How can I use my limited money in a way that serves my day well?","How can I avoid thinking about my choice?","How can I make Johan happy?","How can I prove that food is more important than drink?"],correctAnswer:"How can I use my limited money in a way that serves my day well?",feedback:"Correct. Thabo's choice is an everyday example of economics. He has to decide how to use limited money for a real need. This is not cold maths; it is a human choice."},{id:"daily-grind-johan-beans",prompt:"Johan must choose between cheaper Robusta beans and smoother Arabica beans that cost more. Which question should guide him best?",choices:["Which beans cost the least today, even if customers enjoy them less?","Which beans sound more professional when I talk about them?","Which beans help me serve customers well and keep the shop healthy?","Which beans make the fastest decision possible?","Which beans will make every customer buy muffins?","Which beans allow me to ignore what customers think?"],correctAnswer:"Which beans help me serve customers well and keep the shop healthy?",feedback:"Correct. Johan's choice is not only about cost. He must think about quality, trust, customers, and the future of the business. Business choices are moral choices because they affect people."},{id:"daily-grind-government-choice",prompt:"The government considers helping local farmers by making imported beans more expensive. What is the difficult part of this decision?",choices:["It may help local farmers but make coffee more expensive for shops and customers","It will make all coffee free for everyone","It only affects farmers and never affects ordinary people","It proves that government decisions are always easy","It means coffee shops will no longer need customers","It removes the need for careful thinking"],correctAnswer:"It may help local farmers but make coffee more expensive for shops and customers",feedback:"Correct. A decision can help one group while placing pressure on another. This is why public choices must be guided by wisdom, justice, and care for people."},{id:"daily-grind-bigger-lesson",prompt:"What do Thabo, Johan, and the government all show us about economics?",choices:["Economics is only for experts who understand difficult maths","Economics is mainly about banks and stock markets","Economics is about people, businesses, and governments making choices with what they have","Economics has nothing to do with values or beliefs","Economics is only about choosing the cheapest option","Economics is a machine that works without human hearts or convictions"],correctAnswer:"Economics is about people, businesses, and governments making choices with what they have",feedback:"Correct. Economics studies real choices. And because real choices come from what people value, trust, love, and believe, our morals and faith should stand at the centre of our economic life."}],conclusion:"Thabo's coffee choice, Johan's business decision, and the government's farming policy all point to one lesson: economics is not only about money, banks, graphs, or difficult maths. It is about the choices people make with what they have. Because choices are shaped by what people value and believe, our morals and faith must guide our economic life."},rn=(e,t={})=>`
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
      min-height: 100vh;
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

    p {
      color: var(--muted);
      line-height: 1.62;
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
`,kf=e=>[{id:`${e}-ordinary-business-life`,kind:"customHtml",title:"Step 2: The Ordinary Business of Life",body:rn(`
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
    `)},{id:`${e}-economics-everyday-choices`,kind:"customHtml",title:"Step 3: Understanding Economics in Everyday Life",body:rn(`
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
    `)},{id:`${e}-practical-economic-elements`,kind:"customHtml",title:"Step 4: Practical Economic Elements",body:rn(`
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
                  <img src="${vr("assets/pillar-property-clean.png")}" alt="" />
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
                  <img src="${vr("assets/pillar-relationships-clean.png")}" alt="" />
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
                  <img src="${vr("assets/pillar-work-clean.png")}" alt="" />
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
                  <img src="${vr("assets/pillar-consumption-clean.png")}" alt="" />
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
    `,{includeCompleteButton:!1})},{id:`${e}-art-of-living-well`,kind:"customHtml",title:"Step 5: The Architecture of Choice",body:rn(`
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
    `,{completeButtonLabel:"Complete step"})},{id:`${e}-market-orthodoxy`,kind:"customHtml",title:"Step 5: Market Orthodoxy",body:rn(`
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
    `)},{id:`${e}-economic-theology`,kind:"customHtml",title:"Step 6: Economic Theology",body:rn(`
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
    `)},{id:`${e}-daily-application`,kind:"customHtml",title:"Step 7: Daily Application",body:rn(`
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
    `)}],je=Id.flatMap((e,t)=>e.sessions.map((n,r)=>{const s=t+1,i=r+1,l=`level-${s}-session-${i}-${xf(n)}`,a=n==="Monday Morning",u=s===1?{1:{imageUrl:"https://static.wixstatic.com/media/7638b6_ebb07e58d7b64e3d8a99c272402c6dc9~mv2.png",imageAlt:"Papercraft Faithonomics choices scene for the opening session."},2:{imageUrl:"https://static.wixstatic.com/media/7638b6_ee2d807107c24a2db2c5787e73578b85~mv2.png",imageAlt:"Split papercraft road showing a grey decline path and green-gold renewal path through an open door."},3:{imageUrl:"https://static.wixstatic.com/media/7638b6_fb2b739765044e78b2dcbd33e7a43038~mv2.png",imageAlt:"Papercraft strategy map with compass, cross marker, route, growth chart and scales."},4:{imageUrl:"https://static.wixstatic.com/media/7638b6_898e0407677c4585b6abb5e02e286355~mv2.png",imageAlt:"Papercraft Monday morning workspace with calendar, laptop, checklist, open path and cross-lit doorway."}}[i]:void 0,f=[{id:`${l}-session-teaching`,kind:"text",title:"Step 1: Core Teaching",body:`${e.title} frames ${n} as part of faithful economic discipleship. Learners identify the dominant assumption, compare it with God's economy, and name the decision that needs alignment.`},{id:`${l}-session-scripture`,kind:"scripture",title:"Step 2: Scripture and Principle",body:"Read the assigned passage, identify the economic principle, and state how it challenges scarcity, ownership, status, work, generosity, or integrity."},{id:`${l}-session-application`,kind:"text",title:"Step 3: Business Application",body:"Apply the principle to a business case: stakeholders, value creation, pricing, wages, stewardship, customer care, supplier relationships, and long-term trust."},{id:`${l}-session-reflection`,kind:"customHtml",title:"Step 4: Reflection Checkpoint",body:`<main><h2>${n}</h2><p>Choose one action you will practise before the next session.</p><button data-classroom-complete data-score="5" data-max-score="5">Mark reflection complete</button></main>`}];if(s===1&&i===1){f[0]={id:`${l}-session-teaching-video`,kind:"video",title:"Step 1: Choices",body:"Watch the teaching video. At 3:26 it pauses for a checkpoint quiz, then unlocks the next step only after the quiz is completed and the video reaches the end.",url:"https://youtu.be/_0sm9yWHgG4",videoCheckpoint:bf},f.splice(1,2,...kf(l).slice(0,4));const v=f.findIndex(x=>x.id===`${l}-session-reflection`);v!==-1&&f.splice(v,1)}s===1&&i===2&&f.splice(3,0,{id:`${l}-resource-link`,kind:"webLink",title:"Step 4: Wix Resource Link",body:"Open the lecturer-approved web resource stored in Wix CMS, then return here to confirm you reviewed it.",url:"https://www.wix.com/learn"}),s===1&&i===3&&f.splice(3,0,{id:`${l}-teaching-video`,kind:"video",title:"Step 4: Teaching Video",body:"Watch the teaching video before attempting the strategic alignment checkpoint.",url:"wix-media://video/faithonomics-strategic-alignment.mp4"});const g=f.find(v=>v.id===`${l}-session-reflection`);return g&&(g.title=`Step ${f.length}: Reflection Checkpoint`),{id:l,courseId:"course-faithonomics-core",moduleId:`level-${s}`,title:`Session ${i}: ${n}`,summary:a?"Translate the level into a practical Monday morning decision, conversation, metric, and action.":l==="level-1-session-1-the-daily-grind"?'To explore the core Faithonomics principle of "The Daily Grind": economics is the study of everyday choices, and those choices must be shaped by our faith, biblical wisdom, and Christ-like moral convictions.':`Develop the core Faithonomics principle of "${n}" and connect it to everyday economic decisions.`,sequence:t*4+r+1,required:!0,estimatedMinutes:l==="level-1-session-1-the-daily-grind"?145:a?35:50,...u?{imageUrl:u.imageUrl,imageAlt:u.imageAlt}:{},content:f}})),Ho=[{id:"activity-four-pillars-discussion",lessonId:"level-1-session-1-the-daily-grind",contentStepId:"level-1-session-1-the-daily-grind-practical-economic-elements",kind:"discussion",title:"Four pillars discussion forum",instructions:"Choose one pillar: property, relationships, work, or consumption. Post one everyday example that shows how this pillar influences choices. Then reply to two course participants' posts with a thoughtful question, connection, or practical suggestion.",required:!0,maxScore:5,completionMode:"postAndReply",replyRequirement:2},{id:"activity-economic-alignment-reflection",lessonId:"level-1-session-2-competing-paradigms",kind:"reflection",title:"Competing paradigms reflection",instructions:"Write a short reflection on the economic paradigm you most often inherit at work and how God's economy reframes it.",required:!0,maxScore:10,modelAnswer:"A strong answer names a current economic assumption, compares it with God's ownership and stewardship, and describes a concrete business practice that should change.",rubric:[{id:"rubric-paradigm",label:"Paradigm clarity",description:"Clearly identifies the economic assumption being challenged.",maxPoints:4},{id:"rubric-theology",label:"Theological connection",description:"Connects the response to God's ownership, stewardship, justice, generosity or love.",maxPoints:3},{id:"rubric-practice",label:"Practical change",description:"Names a specific Monday-ready business or work practice.",maxPoints:3}]},{id:"activity-paradigm-matching",lessonId:"level-1-session-2-competing-paradigms",kind:"matching",title:"Match the paradigm",instructions:"Match each workplace statement with the economic paradigm it reveals.",required:!0,maxScore:6,minimumScore:6},{id:"activity-strategic-video",lessonId:"level-1-session-3-strategic-alignment",kind:"interactiveVideo",title:"Strategic alignment video checkpoint",instructions:"Watch the teaching video and answer each checkpoint question before this session can be completed.",required:!0,maxScore:5,videoUrl:"wix-media://video/faithonomics-strategic-alignment.mp4",completionMode:"videoQuestions",minimumScore:5,videoQuestions:[{id:"video-question-metric",timeSeconds:68,prompt:"Which planning habit best proves alignment has moved beyond intention?",choices:["A Monday-ready metric","A larger slogan","A hidden budget line"],correctAnswer:"A Monday-ready metric"},{id:"video-question-stakeholders",timeSeconds:142,prompt:"Who should be considered when testing whether a decision is aligned?",choices:["Only the owner","Customers, workers, suppliers and community","Only current buyers"],correctAnswer:"Customers, workers, suppliers and community"}]},{id:"activity-alignment-timeline",lessonId:"level-1-session-3-strategic-alignment",kind:"timeline",title:"Alignment timeline",instructions:"Place the alignment practices in the order a team should use them.",required:!0,maxScore:5,minimumScore:5},{id:"activity-monday-discussion",lessonId:"level-1-session-4-monday-morning",kind:"discussion",title:"Monday morning group practice",instructions:"Post your Monday action and reply to one learner with a constructive question or encouragement.",required:!0,maxScore:5,completionMode:"postAndReply"},{id:"activity-monday-short-answer",lessonId:"level-1-session-4-monday-morning",kind:"shortAnswer",title:"Monday action short answer",instructions:"Write the concrete action you will take first, who it affects, and how you will know it is faithful.",required:!0,maxScore:5,modelAnswer:"A strong answer names one concrete first action, identifies affected people, and describes a measurable sign of faithful economic alignment."}],Nd=[{id:"question-access",activityId:"activity-economic-alignment-quiz",prompt:"What is the safest way to grant access to a paid Faithonomics level?",kind:"multipleChoice",points:5},{id:"question-match-scarcity",activityId:"activity-paradigm-matching",prompt:"Protect advantage by keeping opportunity narrow",kind:"matching",points:2,correctAnswer:"scarcity"},{id:"question-match-stewardship",activityId:"activity-paradigm-matching",prompt:"Treat resources as entrusted by God for faithful use",kind:"matching",points:2,correctAnswer:"stewardship"},{id:"question-match-community",activityId:"activity-paradigm-matching",prompt:"Make room for others to participate and flourish",kind:"matching",points:2,correctAnswer:"community"},{id:"question-alignment-timeline",activityId:"activity-alignment-timeline",prompt:"Arrange the practices from diagnosis to Monday action.",kind:"timeline",points:5,correctAnswer:["assumption","scripture","stakeholders","metric"]},{id:"question-monday-short-answer",activityId:"activity-monday-short-answer",prompt:"What is the first faithful economic action you will take on Monday morning?",kind:"shortAnswer",points:5}],Ed=[{id:"choice-browser-success",questionId:"question-access",label:"Trust the browser success page",value:"browser",isCorrect:!1},{id:"choice-backend-verify",questionId:"question-access",label:"Verify the completed Wix order in backend code",value:"backend",isCorrect:!0},{id:"choice-match-scarcity-a",questionId:"question-match-scarcity",label:"Scarcity paradigm",value:"scarcity",isCorrect:!0},{id:"choice-match-scarcity-b",questionId:"question-match-scarcity",label:"Stewardship paradigm",value:"stewardship",isCorrect:!1},{id:"choice-match-scarcity-c",questionId:"question-match-scarcity",label:"Community paradigm",value:"community",isCorrect:!1},{id:"choice-match-stewardship-a",questionId:"question-match-stewardship",label:"Scarcity paradigm",value:"scarcity",isCorrect:!1},{id:"choice-match-stewardship-b",questionId:"question-match-stewardship",label:"Stewardship paradigm",value:"stewardship",isCorrect:!0},{id:"choice-match-stewardship-c",questionId:"question-match-stewardship",label:"Community paradigm",value:"community",isCorrect:!1},{id:"choice-match-community-a",questionId:"question-match-community",label:"Scarcity paradigm",value:"scarcity",isCorrect:!1},{id:"choice-match-community-b",questionId:"question-match-community",label:"Stewardship paradigm",value:"stewardship",isCorrect:!1},{id:"choice-match-community-c",questionId:"question-match-community",label:"Community paradigm",value:"community",isCorrect:!0},{id:"choice-timeline-scripture",questionId:"question-alignment-timeline",label:"Compare with Scripture",value:"scripture",isCorrect:!0,sequence:2},{id:"choice-timeline-metric",questionId:"question-alignment-timeline",label:"Set a Monday-ready metric",value:"metric",isCorrect:!0,sequence:4},{id:"choice-timeline-assumption",questionId:"question-alignment-timeline",label:"Name the inherited assumption",value:"assumption",isCorrect:!0,sequence:1},{id:"choice-timeline-stakeholders",questionId:"question-alignment-timeline",label:"Test impact on stakeholders",value:"stakeholders",isCorrect:!0,sequence:3}],Yn=[{id:"enrol-faithonomics-amina",courseId:"course-faithonomics-core",memberId:me.learner.memberId,contactId:me.learner.contactId,source:"admin",status:"active",enrolledAt:"2026-06-01T08:00:00.000Z"}],vt=[],Pd=[],ql=[{id:"submission-paradigms-amina",activityId:"activity-economic-alignment-reflection",lessonId:"level-1-session-2-competing-paradigms",courseId:"course-faithonomics-core",enrolmentId:"enrol-faithonomics-amina",memberId:me.learner.memberId,contactId:me.learner.contactId,responseText:"I often inherit a scarcity mindset at work. God's economy reframes my role as stewardship, so I need to make decisions that build trust and room for others.",status:"submitted",submittedAt:"2026-06-21T12:30:00.000Z"}],Td=[{id:"post-kingdom-first-001",activityId:"activity-kingdom-first-discussion",memberId:"member-learner-002",authorName:"Thabo Mokoena",body:"Matthew 6 challenges how I think about overtime. I often say yes because I fear falling behind, even when it damages family life and rest. Seeking the kingdom first would mean planning honestly, working faithfully, but not treating income as my saviour.",createdAt:"2026-06-22T07:45:00.000Z"},{id:"post-kingdom-first-002",activityId:"activity-kingdom-first-discussion",memberId:"member-learner-003",authorName:"Lerato Dlamini",body:"For me this affects voting and business policy. I usually ask which option protects my own costs first. This passage asks me to consider righteousness too: who is protected, who is ignored, and whether the policy helps people live with dignity.",createdAt:"2026-06-22T08:05:00.000Z"},{id:"post-four-pillars-001",activityId:"activity-four-pillars-discussion",memberId:"member-learner-002",authorName:"Thabo Mokoena",body:"I chose property. For me, property is not only a house or money. It is also my phone, my time, and the tools I use for work. This pillar challenges me to ask whether I use what I have only for myself, or whether I can steward it in a way that helps others.",createdAt:"2026-06-22T08:10:00.000Z"},{id:"post-four-pillars-002",activityId:"activity-four-pillars-discussion",memberId:"member-learner-003",authorName:"Lerato Dlamini",body:"Relationships stood out to me. Buying, selling, borrowing, and working are never only private choices. They can build trust or damage trust. I think a business can lose money in the long run if it treats relationships as less important than quick profit.",createdAt:"2026-06-22T08:18:00.000Z"},{id:"post-four-pillars-003",activityId:"activity-four-pillars-discussion",memberId:"member-learner-004",authorName:"Johan van der Merwe",body:"I chose consumption. Every purchase trains my habits. Sometimes I buy because I need something, but sometimes I buy because I feel pressure to look successful. This pillar helps me think about whether my choices serve a good purpose.",createdAt:"2026-06-22T08:26:00.000Z"},{id:"post-monday-practice-001",activityId:"activity-monday-discussion",memberId:"member-learner-002",authorName:"Thabo Mokoena",body:"My Monday action is to review our supplier terms through the lens of fairness, not only speed.",createdAt:"2026-06-22T08:15:00.000Z"}],Ad=[{id:"reply-kingdom-first-001",postId:"post-kingdom-first-001",memberId:me.lecturer.memberId,authorName:me.lecturer.displayName,body:"Strong connection between anxiety and work. What boundary could show trust in God without becoming irresponsible toward your employer or family?",createdAt:"2026-06-22T08:30:00.000Z"},{id:"reply-kingdom-first-002",postId:"post-kingdom-first-002",memberId:"member-learner-004",authorName:"Johan van der Merwe",body:"Your point about voting helps me. Could you add one practical question you would ask before supporting a policy?",createdAt:"2026-06-22T08:42:00.000Z"},{id:"reply-monday-practice-001",postId:"post-monday-practice-001",memberId:me.lecturer.memberId,authorName:me.lecturer.displayName,body:"Good start. Add one measurable sign that the supplier relationship has become more just.",createdAt:"2026-06-22T09:00:00.000Z"}],we=({size:e=20,children:t,...n})=>o.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...n,children:t}),Sf=e=>o.jsxs(we,{...e,children:[o.jsx("circle",{cx:"12",cy:"8",r:"5"}),o.jsx("path",{d:"m8.5 12.5-2 7 5.5-3 5.5 3-2-7"})]}),jf=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M4 5.5c2.8 0 5 .8 8 2.5v11c-3-1.7-5.2-2.5-8-2.5z"}),o.jsx("path",{d:"M20 5.5c-2.8 0-5 .8-8 2.5v11c3-1.7 5.2-2.5 8-2.5z"})]}),mn=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M9 4h6l1 2h3v15H5V6h3z"}),o.jsx("path",{d:"m9 13 2 2 4-5"})]}),Cf=e=>o.jsx(we,{...e,children:o.jsx("path",{d:"m15 18-6-6 6-6"})}),If=e=>o.jsx(we,{...e,children:o.jsx("path",{d:"m9 18 6-6-6-6"})}),Vo=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M12 4v11"}),o.jsx("path",{d:"m8 11 4 4 4-4"}),o.jsx("path",{d:"M5 20h14"})]}),tc=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M14 4h6v6"}),o.jsx("path",{d:"m10 14 10-10"}),o.jsx("path",{d:"M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"})]}),Xs=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M6 3h8l4 4v14H6z"}),o.jsx("path",{d:"M14 3v5h5"}),o.jsx("path",{d:"M9 13h6M9 17h6"})]}),Nf=e=>o.jsxs(we,{...e,children:[o.jsx("rect",{x:"4",y:"4",width:"7",height:"7",rx:"1"}),o.jsx("rect",{x:"13",y:"4",width:"7",height:"4",rx:"1"}),o.jsx("rect",{x:"13",y:"10",width:"7",height:"10",rx:"1"}),o.jsx("rect",{x:"4",y:"13",width:"7",height:"7",rx:"1"})]}),vi=e=>o.jsxs(we,{...e,children:[o.jsx("rect",{x:"5",y:"10",width:"14",height:"10",rx:"2"}),o.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]}),Ef=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M8 3H3v5"}),o.jsx("path",{d:"M3 3l6 6"}),o.jsx("path",{d:"M16 3h5v5"}),o.jsx("path",{d:"m21 3-6 6"}),o.jsx("path",{d:"M8 21H3v-5"}),o.jsx("path",{d:"m3 21 6-6"}),o.jsx("path",{d:"M16 21h5v-5"}),o.jsx("path",{d:"m21 21-6-6"})]}),_d=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M10 17H5V7h5"}),o.jsx("path",{d:"M14 8l4 4-4 4"}),o.jsx("path",{d:"M18 12H9"})]}),Pf=e=>o.jsx(we,{...e,children:o.jsx("path",{d:"M4 7h16M4 12h16M4 17h16"})}),ht=e=>o.jsxs(we,{...e,children:[o.jsx("circle",{cx:"12",cy:"12",r:"9"}),o.jsx("path",{d:"m10 8 6 4-6 4z"})]}),Tf=e=>o.jsxs(we,{...e,children:[o.jsx("circle",{cx:"12",cy:"12",r:"9"}),o.jsx("path",{d:"M10 9v6M14 9v6"})]}),Af=e=>o.jsxs(we,{...e,children:[o.jsx("path",{d:"M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"}),o.jsx("path",{d:"m8.5 12 2.2 2.2 4.8-5"})]}),Ld=e=>o.jsxs(we,{...e,children:[o.jsx("circle",{cx:"9",cy:"8",r:"3"}),o.jsx("path",{d:"M3.5 20c.7-3.2 2.7-5 5.5-5s4.8 1.8 5.5 5"}),o.jsx("path",{d:"M15 11a3 3 0 1 0 0-6"}),o.jsx("path",{d:"M16 15c2.4.3 4 2 4.5 5"})]}),Qo=e=>o.jsx(we,{...e,children:o.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),_f="/Faithonomics/faithonomics-logo.png",ms=({label:e,children:t,onClick:n,active:r=!1})=>o.jsx("button",{className:r?"icon-button active":"icon-button",onClick:n,title:e,"aria-label":e,children:t}),Lf=({identity:e,onChange:t})=>o.jsxs("label",{className:"role-switcher",children:[o.jsx("span",{children:"Role"}),o.jsxs("select",{value:e.memberId,onChange:n=>{const r=Object.values(me).find(s=>s.memberId===n.target.value);r&&t(r)},children:[o.jsx("option",{value:me.learner.memberId,children:"Learner"}),o.jsx("option",{value:me.lecturer.memberId,children:"Lecturer"}),o.jsx("option",{value:me.administrator.memberId,children:"Administrator"})]})]}),Rf=({identity:e,view:t,setView:n,onIdentityChange:r,activeLevelTitle:s,onLogout:i})=>o.jsxs("header",{className:"topbar",children:[o.jsx("div",{className:"brand-mark","aria-hidden":"true",children:o.jsx("img",{src:_f,alt:""})}),o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Faithonomics"}),o.jsx("h1",{children:"Learning Portal"})]}),o.jsxs("nav",{className:"nav-actions","aria-label":"Portal views",children:[o.jsx(ms,{label:"Learner dashboard",active:t==="learner",onClick:()=>n("learner"),children:o.jsx(Nf,{size:20})}),o.jsx(ms,{label:"Lecturer dashboard",active:t==="lecturer",onClick:()=>n("lecturer"),children:o.jsx(mn,{size:20})}),o.jsx(ms,{label:"Reports",active:t==="reports",onClick:()=>n("reports"),children:o.jsx(Xs,{size:20})}),o.jsx(ms,{label:"Administrator",active:t==="admin",onClick:()=>n("admin"),children:o.jsx(Af,{size:20})})]}),o.jsxs("div",{className:"identity-cluster",children:[s?o.jsx("span",{className:"level-badge",children:s}):null,o.jsx(Lf,{identity:e,onChange:r}),o.jsxs("button",{className:"login-link",type:"button",onClick:i,children:[o.jsx(_d,{size:17}),"Change level"]})]})]}),wn=e=>[...e].sort((t,n)=>t.sequence-n.sequence),Bl=(e,t,n)=>{const r=e.filter(l=>l.required);if(r.length===0)return 100;const s=new Set(t.filter(l=>l.enrolmentId===n&&l.status==="completed").map(l=>l.lessonId)),i=r.filter(l=>s.has(l.id)).length;return Math.round(i/r.length*100)},Hl=(e,t,n)=>{const r=new Set(t.filter(i=>i.enrolmentId===n.id&&i.status==="completed").map(i=>i.lessonId));let s=null;return wn(e).map(i=>{const l=s===null?{lessonId:i.id,locked:!1}:{lessonId:i.id,locked:!0,reason:`Complete "${s.title}" first.`};return i.required&&!r.has(i.id)&&(s=i),l})},zf=(e,t,n,r)=>{const s=t.filter(l=>l.moduleId===e&&l.required);if(s.length===0)return!0;const i=new Set(n.filter(l=>l.enrolmentId===r.id&&l.status==="completed").map(l=>l.lessonId));return s.every(l=>i.has(l.id))},Rd=(e,t,n,r)=>{let s=null;return[...e].sort((i,l)=>i.sequence-l.sequence).map(i=>{const l=s===null?{moduleId:i.id,locked:!1}:{moduleId:i.id,locked:!0,reason:`Complete all sessions and required elements in "${s.title}" first.`};return zf(i.id,t,n,r)||(s=i),l})},Mf=(e,t,n)=>{const r=new Map(Hl(e,t,n).map(i=>[i.lessonId,i.locked])),s=new Set(t.filter(i=>i.enrolmentId===n.id&&i.status==="completed").map(i=>i.lessonId));return wn(e).find(i=>!r.get(i.id)&&!s.has(i.id))??null},$f=e=>e.content.filter(t=>t.completionRequired!==!1).map(t=>t.id),Ff=(e,t,n,r)=>{const s=t.filter(u=>u.lessonId===e.id&&u.required).map(u=>u.id),i=e.content.filter(u=>u.kind==="customHtml").map(u=>u.id),l=new Set([...n.filter(u=>u.completed).map(u=>u.activityId),...r]),a=Array.from(new Set([...s,...$f(e),...i])),c=a.filter(u=>l.has(u)).length;return{allowed:c===a.length,completed:c,required:a.length}},nc=()=>new Date().toISOString();class Of{constructor(){ue(this,"identities",new Map(Object.values(me).map(t=>[t.memberId,t])));ue(this,"courses",[...ft]);ue(this,"modules",[...ot]);ue(this,"lessons",[...je]);ue(this,"activities",[...Ho]);ue(this,"questions",[...Nd]);ue(this,"choices",[...Ed]);ue(this,"enrolments",[...Yn]);ue(this,"progress",[...vt]);ue(this,"activityCompletions",[...Pd]);ue(this,"submissions",[...ql]);ue(this,"discussionPosts",[...Td]);ue(this,"discussionReplies",[...Ad]);ue(this,"quizAttempts",[]);ue(this,"marks",[]);ue(this,"feedback",[]);ue(this,"certificates",[]);ue(this,"aiUsage",[]);ue(this,"auditLogs",[])}async getIdentity(t){return this.identities.get(t)??null}async listCourses(){return[...this.courses]}async getCourse(t){return this.courses.find(n=>n.id===t||n.slug===t)??null}async listModules(t){return this.modules.filter(n=>n.courseId===t).sort((n,r)=>n.sequence-r.sequence)}async listLessons(t){return this.lessons.filter(n=>n.courseId===t).sort((n,r)=>n.sequence-r.sequence)}async listActivities(t){return this.activities.filter(n=>n.lessonId===t)}async listQuestions(t){return this.questions.filter(n=>n.activityId===t)}async listAnswerChoices(t){return this.choices.filter(n=>n.questionId===t)}async listEnrolmentsByMember(t){return this.enrolments.filter(n=>n.memberId===t)}async listEnrolmentsByCourse(t){return this.enrolments.filter(n=>n.courseId===t)}async insertEnrolment(t){return this.enrolments=[...this.enrolments,t],t}async listProgress(t){return this.progress.filter(n=>n.enrolmentId===t)}async saveProgress(t){const n=this.progress.findIndex(r=>r.id===t.id);return this.progress=n===-1?[...this.progress,t]:this.progress.map((r,s)=>s===n?t:r),t}async listActivityCompletions(t,n){return this.activityCompletions.filter(r=>r.memberId===t&&r.lessonId===n)}async saveActivityCompletion(t){const n=this.activityCompletions.findIndex(r=>r.activityId===t.activityId&&r.memberId===t.memberId);return this.activityCompletions=n===-1?[...this.activityCompletions,t]:this.activityCompletions.map((r,s)=>s===n?t:r),t}async saveQuizAttempt(t){return this.quizAttempts=[...this.quizAttempts,t],t}async listSubmissions(t){return this.submissions.filter(n=>!(t.memberId&&n.memberId!==t.memberId||t.courseId&&n.courseId!==t.courseId||t.status&&n.status!==t.status))}async saveSubmission(t){const n=this.submissions.findIndex(r=>r.id===t.id);return this.submissions=n===-1?[...this.submissions,t]:this.submissions.map((r,s)=>s===n?t:r),t}async listDiscussionPosts(t){return this.discussionPosts.filter(n=>n.activityId===t)}async listDiscussionReplies(t){return this.discussionReplies.filter(n=>n.postId===t)}async saveDiscussionPost(t){return this.discussionPosts=[...this.discussionPosts.filter(n=>n.id!==t.id),t],t}async saveDiscussionReply(t){return this.discussionReplies=[...this.discussionReplies.filter(n=>n.id!==t.id),t],t}async saveMark(t){return this.marks=[...this.marks.filter(n=>n.id!==t.id),t],t}async saveFeedback(t){return this.feedback=[...this.feedback.filter(n=>n.id!==t.id),t],t}async saveCertificate(t){return this.certificates=[...this.certificates.filter(n=>n.id!==t.id),t],t}async saveAIUsage(t){return this.aiUsage=[...this.aiUsage,t],t}async countAIUsage(t,n){return this.aiUsage.filter(r=>r.memberId===t&&r.createdAt>=n).length}async appendAuditLog(t){return this.auditLogs=[...this.auditLogs,t],t}async buildReportRows(t){var s;const n=[],r=t?this.courses.filter(i=>i.id===t):this.courses;return r.forEach(i=>{const l=this.modules.filter(u=>u.courseId===i.id),a=this.lessons.filter(u=>u.courseId===i.id);this.enrolments.filter(u=>u.courseId===i.id).forEach(u=>{const f=this.identities.get(u.memberId);a.forEach(g=>{const v=l.find(C=>C.id===g.moduleId),x=this.progress.find(C=>C.enrolmentId===u.id&&C.lessonId===g.id),y=this.submissions.find(C=>C.enrolmentId===u.id&&C.lessonId===g.id),h=y?this.marks.find(C=>C.submissionId===y.id):void 0;n.push({learnerName:(f==null?void 0:f.displayName)??u.memberId,courseTitle:i.title,moduleTitle:(v==null?void 0:v.title)??"Unassigned",lessonTitle:g.title,completionStatus:(x==null?void 0:x.status)??"notStarted",score:(h==null?void 0:h.score)??null,lastActivityAt:(x==null?void 0:x.lastActivityAt)??(y==null?void 0:y.submittedAt)??null})})})}),n.length===0&&n.push({learnerName:"No learners yet",courseTitle:((s=r[0])==null?void 0:s.title)??"No course",moduleTitle:"",lessonTitle:"",completionStatus:"notStarted",score:null,lastActivityAt:null}),n.sort((i,l)=>(i.lastActivityAt??nc()).localeCompare(l.lastActivityAt??nc()))}}const Df=()=>new Of,Uf=e=>e.replace(/\/+$/,""),rc=()=>new Date().toISOString(),wt=(e,t)=>typeof e[t]=="string"?e[t]:null,Wf=(e,t)=>typeof e[t]=="number"?e[t]:null,qf=(e,t,n)=>{const r=n;return{collection:e,record_id:t,payload:n,course_id:wt(r,"courseId"),module_id:wt(r,"moduleId"),lesson_id:wt(r,"lessonId"),activity_id:wt(r,"activityId"),question_id:wt(r,"questionId"),member_id:wt(r,"memberId"),enrolment_id:wt(r,"enrolmentId"),post_id:wt(r,"postId"),submission_id:wt(r,"submissionId"),status:wt(r,"status"),sequence:Wf(r,"sequence")}},Bf=(e,t)=>(e.sequence??0)-(t.sequence??0);class Hf{constructor(t,n,r="classroom_records"){ue(this,"restBaseUrl");this.anonKey=n,this.tableName=r,this.restBaseUrl=`${Uf(t)}/rest/v1`}headers(t={}){return{apikey:this.anonKey,Authorization:`Bearer ${this.anonKey}`,...t}}async request(t,n={}){const r=await fetch(`${this.restBaseUrl}/${t}`,{...n,headers:this.headers(n.headers??{})});if(!r.ok){const s=await r.text();throw new Error(`Supabase request failed (${r.status}): ${s}`)}return r.status===204?null:await r.json()}async listRecords(t,n={},r=!1){const s=new URLSearchParams({select:"payload",collection:`eq.${t}`});return Object.entries(n).forEach(([l,a])=>{a!=null&&s.set(l,`eq.${String(a)}`)}),r&&s.set("order","sequence.asc.nullslast"),(await this.request(`${this.tableName}?${s.toString()}`)).map(l=>l.payload)}async getRecord(t,n){return(await this.listRecords(t,{record_id:n}))[0]??null}async upsertRecord(t,n,r){var l;const s=new URLSearchParams({on_conflict:"collection,record_id"});return((l=(await this.request(`${this.tableName}?${s.toString()}`,{method:"POST",headers:{"Content-Type":"application/json",Prefer:"resolution=merge-duplicates,return=representation"},body:JSON.stringify([qf(t,n,r)])}))[0])==null?void 0:l.payload)??r}async getIdentity(t){const n=await this.getRecord("identities",t);if(n)return n;const r=(await this.listEnrolmentsByMember(t))[0];return r?{memberId:t,contactId:r.contactId,email:"",displayName:t,roles:["learner"]}:null}async listCourses(){return this.listRecords("courses")}async getCourse(t){const n=await this.getRecord("courses",t);return n||((await this.listCourses()).find(r=>r.slug===t)??null)}async listModules(t){return this.listRecords("modules",{course_id:t},!0)}async listLessons(t){return this.listRecords("lessons",{course_id:t},!0)}async listActivities(t){return this.listRecords("activities",{lesson_id:t},!0)}async listQuestions(t){return this.listRecords("questions",{activity_id:t})}async listAnswerChoices(t){return this.listRecords("answerChoices",{question_id:t},!0)}async listEnrolmentsByMember(t){return this.listRecords("enrolments",{member_id:t})}async listEnrolmentsByCourse(t){return this.listRecords("enrolments",{course_id:t})}async insertEnrolment(t){return this.upsertRecord("enrolments",t.id,t)}async listProgress(t){return this.listRecords("lessonProgress",{enrolment_id:t})}async saveProgress(t){return this.upsertRecord("lessonProgress",t.id,t)}async listActivityCompletions(t,n){return this.listRecords("activityCompletions",{member_id:t,lesson_id:n})}async saveActivityCompletion(t){return this.upsertRecord("activityCompletions",`${t.memberId}-${t.activityId}`,t)}async saveQuizAttempt(t){return this.upsertRecord("quizAttempts",t.id,t)}async listSubmissions(t){return this.listRecords("submissions",{member_id:t.memberId,course_id:t.courseId,status:t.status})}async saveSubmission(t){return this.upsertRecord("submissions",t.id,t)}async listDiscussionPosts(t){return(await this.listRecords("discussionPosts",{activity_id:t})).sort((r,s)=>r.createdAt.localeCompare(s.createdAt))}async listDiscussionReplies(t){return(await this.listRecords("discussionReplies",{post_id:t})).sort((r,s)=>r.createdAt.localeCompare(s.createdAt))}async saveDiscussionPost(t){return this.upsertRecord("discussionPosts",t.id,t)}async saveDiscussionReply(t){return this.upsertRecord("discussionReplies",t.id,t)}async saveMark(t){return this.upsertRecord("marks",t.id,t)}async saveFeedback(t){return this.upsertRecord("feedback",t.id,t)}async saveCertificate(t){return this.upsertRecord("certificates",t.id,t)}async saveAIUsage(t){return this.upsertRecord("aiUsage",t.id,t)}async countAIUsage(t,n){return(await this.listRecords("aiUsage",{member_id:t})).filter(s=>s.createdAt>=n).length}async appendAuditLog(t){return this.upsertRecord("auditLogs",t.id,t)}async buildReportRows(t){var i;const n=t?(await Promise.all([this.getCourse(t)])).filter(l=>!!l):await this.listCourses(),r=await this.listRecords("marks"),s=[];for(const l of n){const[a,c,u]=await Promise.all([this.listModules(l.id),this.listLessons(l.id),this.listEnrolmentsByCourse(l.id)]);for(const f of u){const g=await this.getIdentity(f.memberId),v=await this.listProgress(f.id),x=await this.listSubmissions({memberId:f.memberId,courseId:l.id});c.sort(Bf).forEach(y=>{const h=a.find(p=>p.id===y.moduleId),C=v.find(p=>p.lessonId===y.id),m=x.find(p=>p.lessonId===y.id),d=m?r.find(p=>p.submissionId===m.id):void 0;s.push({learnerName:(g==null?void 0:g.displayName)??f.memberId,courseTitle:l.title,moduleTitle:(h==null?void 0:h.title)??"Unassigned",lessonTitle:y.title,completionStatus:(C==null?void 0:C.status)??"notStarted",score:(d==null?void 0:d.score)??null,lastActivityAt:(C==null?void 0:C.lastActivityAt)??(m==null?void 0:m.submittedAt)??null})})}}return s.length===0&&s.push({learnerName:"No learners yet",courseTitle:((i=n[0])==null?void 0:i.title)??"No course",moduleTitle:"",lessonTitle:"",completionStatus:"notStarted",score:null,lastActivityAt:null}),s.sort((l,a)=>(l.lastActivityAt??rc()).localeCompare(a.lastActivityAt??rc()))}}const Vf="<app-namespace>",Qf={courses:"courses",modules:"modules",lessons:"lessons",activities:"activities",questions:"questions",answerChoices:"answer-choices",enrolments:"enrolments",lessonProgress:"lesson-progress",quizAttempts:"quiz-attempts",activityCompletions:"activity-completions",submissions:"submissions",discussionPosts:"discussion-posts",discussionReplies:"discussion-replies",marks:"marks",feedback:"feedback",certificates:"certificates",lecturerAssignments:"lecturer-assignments",aiUsage:"ai-usage",auditLogs:"audit-logs"},Gf=(e,t=Vf)=>`${t}/${Qf[e]}`,He=async()=>{const t=await import("@wix/data");if(!t.items)throw new Error("Wix Data API is not available in this runtime.");return t.items},at=e=>({...e,_id:e.id}),Yf=e=>({...e,_id:`${e.memberId}-${e.activityId}`});class Kf{constructor(t){this.namespace=t}collection(t){return Gf(t,this.namespace)}async query(t){return(await He()).query(this.collection(t))}async getIdentity(t){const r=(await this.listEnrolmentsByMember(t))[0];return r?{memberId:t,contactId:r.contactId,email:"",displayName:t,roles:["learner"]}:null}async listCourses(){return(await(await this.query("courses")).limit(1e3).find()).items}async getCourse(t){const n=await(await this.query("courses")).eq("_id",t).limit(1).find();return n.items[0]?n.items[0]:(await(await this.query("courses")).eq("slug",t).limit(1).find()).items[0]??null}async listModules(t){return(await(await this.query("modules")).eq("courseId",t).ascending("sequence").limit(1e3).find()).items}async listLessons(t){return(await(await this.query("lessons")).eq("courseId",t).ascending("sequence").limit(1e3).find()).items}async listActivities(t){return(await(await this.query("activities")).eq("lessonId",t).limit(1e3).find()).items}async listQuestions(t){return(await(await this.query("questions")).eq("activityId",t).limit(1e3).find()).items}async listAnswerChoices(t){return(await(await this.query("answerChoices")).eq("questionId",t).limit(1e3).find()).items}async listEnrolmentsByMember(t){return(await(await this.query("enrolments")).eq("memberId",t).limit(1e3).find()).items}async listEnrolmentsByCourse(t){return(await(await this.query("enrolments")).eq("courseId",t).limit(1e3).find()).items}async insertEnrolment(t){return(await He()).insert(this.collection("enrolments"),at(t))}async listProgress(t){return(await(await this.query("lessonProgress")).eq("enrolmentId",t).limit(1e3).find()).items}async saveProgress(t){return(await He()).save(this.collection("lessonProgress"),at(t))}async listActivityCompletions(t,n){return(await(await this.query("activityCompletions")).eq("memberId",t).eq("lessonId",n).limit(1e3).find()).items}async saveActivityCompletion(t){return(await He()).save(this.collection("activityCompletions"),Yf(t))}async saveQuizAttempt(t){return(await He()).insert(this.collection("quizAttempts"),at(t))}async listSubmissions(t){let n=await this.query("submissions");return t.memberId&&(n=n.eq("memberId",t.memberId)),t.courseId&&(n=n.eq("courseId",t.courseId)),t.status&&(n=n.eq("status",t.status)),(await n.limit(1e3).find()).items}async saveSubmission(t){return(await He()).save(this.collection("submissions"),at(t))}async listDiscussionPosts(t){return(await(await this.query("discussionPosts")).eq("activityId",t).limit(1e3).find()).items}async listDiscussionReplies(t){return(await(await this.query("discussionReplies")).eq("postId",t).limit(1e3).find()).items}async saveDiscussionPost(t){return(await He()).save(this.collection("discussionPosts"),at(t))}async saveDiscussionReply(t){return(await He()).save(this.collection("discussionReplies"),at(t))}async saveMark(t){return(await He()).save(this.collection("marks"),at(t))}async saveFeedback(t){return(await He()).save(this.collection("feedback"),at(t))}async saveCertificate(t){return(await He()).save(this.collection("certificates"),at(t))}async saveAIUsage(t){return(await He()).insert(this.collection("aiUsage"),at(t))}async countAIUsage(t,n){return(await(await this.query("aiUsage")).eq("memberId",t).limit(1e3).find()).items.filter(s=>s.createdAt>=n).length}async appendAuditLog(t){return(await He()).insert(this.collection("auditLogs"),at(t))}async buildReportRows(t){const n=t?await this.getCourse(t):null,r=t?n?[n]:[]:await this.listCourses();return(await Promise.all(r.filter(i=>i!==null).map(async i=>{const[l,a,c]=await Promise.all([this.listModules(i.id),this.listLessons(i.id),this.listEnrolmentsByCourse(i.id)]);return c.flatMap(u=>a.map(f=>{const g=l.find(v=>v.id===f.moduleId);return{learnerName:u.memberId,courseTitle:i.title,moduleTitle:(g==null?void 0:g.title)??"Unassigned",lessonTitle:f.title,completionStatus:"notStarted",score:null,lastActivityAt:null}}))}))).flat()}}var Jf={};const Xf=typeof process<"u"?Jf:{},Zs=Xf.WIX_APP_NAMESPACE??void 0,sc="https://mubisxvbvcdnrhdqnnyy.supabase.co",Go="sb_publishable_7p_-KtzLqPDubr4ebv1zcA_9yvCb59u",Zf="classroom_records",zd=!!Go,eh=!zd&&!!(Zs&&Zs!=="<app-namespace>"),Fe=zd&&sc&&Go?new Hf(sc,Go,Zf):eh&&Zs?new Kf(Zs):Df(),ur=["https://static.wixstatic.com/media/7638b6_7dce53d2b46b43c0a42e8cc509325e3f~mv2.png","https://static.wixstatic.com/media/7638b6_5565b4e4adcf4e6db1b3e0075c7f44bd~mv2.png","https://static.wixstatic.com/media/7638b6_d369a23ccc264bed911d2f2662249aa7~mv2.png","https://static.wixstatic.com/media/7638b6_a63863ef5ce945d6adc25625d8e8e748~mv2.png","https://static.wixstatic.com/media/7638b6_7fd81c4b4f96408dab20186b2bd32a96~mv2.png"],Md=({mode:e,slideIndex:t,setSlideIndex:n,onOpenCourse:r,onClose:s})=>{const i=ur[t]??ur[0]??"";return o.jsxs("div",{className:"level-one-slideshow-modal",role:"dialog","aria-modal":"true","aria-label":"Level 1 introduction",children:[o.jsx("button",{className:"course-about-backdrop",type:"button","aria-label":"Close slideshow",onClick:s}),o.jsxs("article",{className:"level-one-slideshow-panel",children:[o.jsx("div",{className:"level-one-slide-stage",children:o.jsx("img",{src:i,alt:`Level 1 introduction slide ${t+1}`})}),o.jsxs("div",{className:"level-one-slide-controls",children:[o.jsx("button",{className:"about-button",type:"button",onClick:()=>n(l=>Math.max(0,l-1)),disabled:t===0,children:"Previous"}),o.jsxs("span",{children:[t+1," / ",ur.length]}),o.jsx("button",{className:"about-button",type:"button",onClick:()=>n(l=>Math.min(ur.length-1,l+1)),disabled:t===ur.length-1,children:"Next"}),o.jsxs("button",{className:"course-link-button",type:"button",onClick:r,children:[o.jsx(ht,{size:18}),e==="start"?"Start level":"Open course"]}),o.jsx("button",{className:"about-button",type:"button",onClick:s,children:"Close"})]})]})]})},th=me.learner,dr=Yn.find(e=>e.memberId===th.memberId)??null,ei=e=>{var n,r;const t=Number(((n=e.id.match(/^level-(\d+)$/))==null?void 0:n[1])??((r=e.title.match(/Level\s+(\d+)/i))==null?void 0:r[1]));return Number.isFinite(t)&&t>0?t:e.sequence},nh=e=>[...e].sort((t,n)=>ei(t)-ei(n)||t.sequence-n.sequence),rh=(e,t,n)=>{const r=new Map;if(!n)return e.forEach((l,a)=>{r.set(l.id,a===0?"current":"upcoming")}),r;const s=new Set(e.filter(l=>{const a=je.filter(c=>c.moduleId===l.id);return Bl(a,t,n.id)===100}).map(l=>l.id)),i=e.find(l=>!s.has(l.id))??e.at(-1);return e.forEach(l=>{const a=s.has(l.id)?"completed":l.id===(i==null?void 0:i.id)?"current":"upcoming";r.set(l.id,a)}),r},sh=({onSelectLevel:e})=>{const[t,n]=k.useState(vt),[r,s]=k.useState(null),[i,l]=k.useState(null),[a,c]=k.useState(0),u=k.useMemo(()=>nh(ot),[]),f=u.find(y=>y.id===r)??null,g=k.useMemo(()=>rh(u,t,dr),[t,u]),v=y=>{s(null),c(0),l(y)},x=()=>{l(null),c(0)};return k.useEffect(()=>{let y=!0;return dr?(Fe.listProgress(dr.id).then(h=>{y&&n(h)}).catch(()=>{y&&n(vt)}),()=>{y=!1}):()=>{y=!1}},[]),o.jsxs("main",{className:"course-intro-page",children:[o.jsx("section",{className:"course-intro-hero",children:o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Faithonomics courses"}),o.jsx("h1",{children:"Choose Your Level"}),o.jsx("p",{children:"Start with the current level, review completed learning, or see what is coming next in the Faithonomics pathway."})]})}),o.jsx("section",{className:"intro-course-grid","aria-label":"Faithonomics levels",children:u.map(y=>{const h=g.get(y.id)??"upcoming",C=wn(je.filter(N=>N.moduleId===y.id)),m=dr?Bl(C,t,dr.id):h==="completed"?100:0,d=ei(y),p=()=>e(y.id),w=()=>{if(y.id==="level-1"){v("about");return}s(y.id)};return o.jsxs("article",{className:`intro-course-card ${h}`,style:{order:d},children:[o.jsxs("button",{className:"intro-course-image-link",type:"button",onClick:p,"aria-label":`Open ${y.title}`,children:[y.imageUrl?o.jsx("img",{src:y.imageUrl,alt:y.imageAlt??y.title}):null,o.jsx("span",{children:h})]}),o.jsxs("div",{className:"intro-course-details",children:[o.jsxs("div",{className:"intro-course-meta",children:[o.jsxs("span",{children:["Level ",d]}),o.jsxs("span",{children:[C.length," sessions"]}),o.jsxs("span",{children:[m,"% complete"]})]}),o.jsxs("div",{className:"intro-course-actions",children:[o.jsxs("button",{className:"course-link-button",type:"button",onClick:p,children:[o.jsx(ht,{size:18}),"Open course"]}),o.jsx("button",{className:"about-button",type:"button",onClick:w,children:"About"})]})]})]},y.id)})}),f?o.jsxs("div",{className:"course-about-modal",role:"dialog","aria-modal":"true","aria-labelledby":"course-about-title",children:[o.jsx("button",{className:"course-about-backdrop",type:"button","aria-label":"Close about",onClick:()=>s(null)}),o.jsxs("article",{className:"course-about-panel",children:[f.imageUrl?o.jsx("img",{src:f.imageUrl,alt:""}):null,o.jsxs("div",{children:[o.jsxs("p",{className:"eyebrow",children:["Level ",ei(f)]}),o.jsx("h2",{id:"course-about-title",children:f.title.replace(/^Level \d+:\s*/,"")}),o.jsx("p",{children:f.description}),o.jsxs("div",{className:"intro-course-actions",children:[o.jsxs("button",{className:"course-link-button",type:"button",onClick:()=>e(f.id),children:[o.jsx(ht,{size:18}),"Open course"]}),o.jsx("button",{className:"about-button",type:"button",onClick:()=>s(null),children:"Close"})]})]})]})]}):null,i?o.jsx(Md,{mode:i,slideIndex:a,setSlideIndex:c,onOpenCourse:()=>e("level-1"),onClose:x}):null]})},$d=(e,t)=>Yn.find(n=>n.courseId===e&&n.memberId===t)??null,ih=({course:e,activeLevel:t,identity:n,completedLessonIds:r,progressRecords:s,onOpenLesson:i})=>{const l=wn(je.filter(w=>w.courseId===e.id)),a=ot.filter(w=>w.courseId===e.id),c=wn(je.filter(w=>w.courseId===e.id&&(!t||w.moduleId===t.id))),u=$d(e.id,n.memberId),f=u?Fd(e.id,n,u,r,s):[],g=u?Bl(c,f,u.id):0,v=new Map(u?Rd(a,l,f,u).map(w=>[w.moduleId,w]):[]),x=t?v.get(t.id):void 0,y=!!(x!=null&&x.locked),h=u&&!y?Mf(c,f,u):c[0]??null,C=new Map(u&&!y?Hl(c,f,u).map(w=>[w.lessonId,w.locked]):c.map(w=>[w.id,!0])),m=(t==null?void 0:t.title)??e.title,d=(t==null?void 0:t.imageUrl)??e.imageUrl,p=(t==null?void 0:t.imageAlt)??"";return o.jsxs("article",{className:"course-card",children:[o.jsx("img",{src:d,alt:p}),o.jsxs("div",{className:"course-card-body",children:[o.jsxs("div",{className:"course-title-row",children:[o.jsx("h2",{children:m}),!u&&!e.isFree?o.jsx("span",{className:"pill locked",children:"Paid"}):o.jsx("span",{className:"pill",children:"Open"})]}),o.jsx("p",{children:(t==null?void 0:t.description)??e.summary}),o.jsx("div",{className:"progress-line","aria-label":`${g}% complete`,children:o.jsx("span",{style:{width:`${g}%`}})}),o.jsxs("div",{className:"card-meta",children:[o.jsxs("span",{children:[g,"% complete"]}),o.jsxs("span",{children:[c.length," sessions"]})]}),o.jsxs("button",{className:"primary-button",disabled:y||!h||!u&&!e.isFree,onClick:()=>{h&&!y&&i(e.id,h.id)},children:[o.jsx(ht,{size:18}),"Continue learning"]}),x!=null&&x.locked?o.jsx("p",{className:"status error",children:x.reason}):null,o.jsx(oh,{courseId:e.id,sessions:c,lockStates:C,lockReason:x==null?void 0:x.reason,onOpenLesson:i})]})]})},oh=({courseId:e,sessions:t,lockStates:n,lockReason:r,onOpenLesson:s})=>o.jsx("div",{className:"session-list","aria-label":"Level sessions",children:t.map(i=>{const l=!!n.get(i.id);return o.jsxs("button",{disabled:l,title:l?r??"Complete the previous required session first.":i.title,onClick:()=>s(e,i.id),children:[l?o.jsx(vi,{size:15}):o.jsx(ht,{size:15}),i.imageUrl?o.jsx("img",{className:"session-thumb",src:i.imageUrl,alt:""}):null,o.jsx("span",{children:i.title})]},i.id)})}),Fd=(e,t,n,r,s)=>{const l=[...s.filter(a=>a.enrolmentId===n.id)];for(const a of r)l.some(c=>c.lessonId===a)||l.push({id:`local-progress-${a}`,enrolmentId:n.id,courseId:e,lessonId:a,memberId:t.memberId,status:"completed",percent:100,lastActivityAt:new Date().toISOString(),completedAt:new Date().toISOString()});return l},lh=({identity:e,activeLevelId:t,completedLessonIds:n,pendingIntroSlideshowLevelId:r,onIntroSlideshowHandled:s,onOpenLesson:i})=>{const l=ot.find(d=>d.id===t)??null,a=je.filter(d=>!l||d.moduleId===l.id),[c,u]=k.useState(vt),[f,g]=k.useState(!1),[v,x]=k.useState(!1),[y,h]=k.useState(0);k.useEffect(()=>{const d=Yn.filter(w=>w.memberId===e.memberId);let p=!0;return g(!1),Promise.all(d.map(w=>Fe.listProgress(w.id))).then(w=>{p&&(u(w.flat()),g(!0))}).catch(()=>{p&&(u(vt),g(!0))}),()=>{p=!1}},[e.memberId]),k.useEffect(()=>{if(!f||!r)return;if(r!=="level-1"||t!=="level-1"){s();return}const d=ft[0]??null;if(!d){s();return}const p=$d(d.id,e.memberId),w=je.filter(P=>P.moduleId==="level-1"),N=p?Fd(d.id,e,p,n,c):[];if(w.some(P=>N.some(_=>_.lessonId===P.id&&_.status==="completed"))){s();return}h(0),x(!0)},[t,n,e,c,s,r,f]);const C=()=>{x(!1),s()},m=()=>{C();const d=wn(je.filter(p=>p.moduleId==="level-1"))[0]??null;d&&i(d.courseId,d.id)};return o.jsxs("main",{className:"content-shell",children:[o.jsxs("section",{className:"dashboard-intro paper-stage",children:[o.jsx("div",{className:"paper-sun","aria-hidden":"true"}),o.jsx("div",{className:"paper-layer paper-back","aria-hidden":"true"}),o.jsx("div",{className:"paper-layer paper-mid","aria-hidden":"true"}),o.jsx("div",{className:"paper-road","aria-hidden":"true"}),o.jsxs("div",{className:"paper-people","aria-hidden":"true",children:[o.jsx("span",{}),o.jsx("span",{})]}),o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Student page"}),o.jsx("h2",{children:e.displayName}),o.jsx("p",{className:"intro-copy",children:l?`${l.title} is open. Continue through each required session in sequence.`:"Faithonomics courses, progress, submissions, feedback and certificates in one Wix-connected classroom."})]}),o.jsxs("div",{className:"stat-strip",children:[o.jsxs("div",{children:[o.jsx("strong",{children:l?"1":Yn.filter(d=>d.memberId===e.memberId).length}),o.jsx("span",{children:l?"Active level":"Courses"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:a.length}),o.jsx("span",{children:"Sessions"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"24h"}),o.jsx("span",{children:"Next reminder"})]})]})]}),o.jsx("section",{className:"course-grid","aria-label":"Enrolled courses",children:ft.map(d=>o.jsx(ih,{course:d,activeLevel:l,identity:e,completedLessonIds:n,progressRecords:c,onOpenLesson:i},d.id))}),v?o.jsx(Md,{mode:"start",slideIndex:y,setSlideIndex:h,onOpenCourse:m,onClose:C}):null]})},ic=e=>e.trim().toLowerCase(),ah=(e,t,n,r)=>e.find(s=>s.moduleId===t&&ic(s.username)===ic(n)&&s.password===r)??null,ch=({initialModuleId:e,onBack:t,onLogin:n})=>{const r=$t.find(y=>y.moduleId===e)??$t[0],[s,i]=k.useState((r==null?void 0:r.moduleId)??""),[l,a]=k.useState((r==null?void 0:r.username)??""),[c,u]=k.useState((r==null?void 0:r.password)??""),[f,g]=k.useState(""),v=$t.find(y=>y.moduleId===s)??r;k.useEffect(()=>{const y=$t.find(h=>h.moduleId===e)??$t[0];i((y==null?void 0:y.moduleId)??""),a((y==null?void 0:y.username)??""),u((y==null?void 0:y.password)??""),g("")},[e]);const x=y=>{y.preventDefault();const h=ah($t,s,l,c);if(!h){g("The level login or password is incorrect.");return}g(""),n(h)};return o.jsx("main",{className:"login-page",children:o.jsxs("section",{className:"login-panel",children:[o.jsxs("div",{className:"login-brand",children:[o.jsx("div",{className:"login-logo-crop",children:o.jsx("img",{src:"https://static.wixstatic.com/media/7638b6_d0228f89f4b24c9b99aa50c8b52a03b3~mv2.png",alt:"Faithonomics"})}),o.jsx("h1",{children:"Student Portal"}),o.jsx("p",{children:"Sign in with the login issued for your selected level."}),v?o.jsx("span",{className:"login-selected-level",children:v.levelTitle}):null,o.jsx("button",{className:"login-back-button",type:"button",onClick:t,children:"View all courses"})]}),o.jsxs("form",{className:"login-form",onSubmit:x,children:[o.jsxs("label",{children:[o.jsx("span",{children:"Level"}),o.jsx("select",{value:s,onChange:y=>{const h=$t.find(C=>C.moduleId===y.target.value);i(y.target.value),a((h==null?void 0:h.username)??""),u((h==null?void 0:h.password)??"")},children:$t.map(y=>o.jsx("option",{value:y.moduleId,children:y.levelTitle},y.moduleId))})]}),o.jsxs("label",{children:[o.jsx("span",{children:"Login"}),o.jsx("input",{autoComplete:"username",value:l,onChange:y=>a(y.target.value),placeholder:"level1"})]}),o.jsxs("label",{children:[o.jsx("span",{children:"Password"}),o.jsx("input",{autoComplete:"current-password",type:"password",value:c,onChange:y=>u(y.target.value),placeholder:"faith1"})]}),f?o.jsx("p",{className:"status error",children:f}):null,o.jsxs("button",{className:"primary-button",type:"submit",children:[o.jsx(_d,{size:18}),v?`Open ${v.levelTitle}`:"Open student page"]})]})]})})},fs=e=>e.trim().toLowerCase(),uh=(e,t)=>{if(e===void 0||t===void 0)return!1;const n=Array.isArray(e)?e.map(fs):[fs(e)],r=Array.isArray(t)?t.map(fs):[fs(t)];return n.length!==r.length?!1:n.every((s,i)=>r[i]===s)},dh=(e,t,n)=>{const r=e.map(s=>{const i=t.filter(c=>c.questionId===s.id&&c.isCorrect).sort((c,u)=>(c.sequence??0)-(u.sequence??0)).map(c=>c.value),l=s.correctAnswer??i,a=uh(l,n[s.id]);return{questionId:s.id,correct:a,awarded:a?s.points:0}});return{score:r.reduce((s,i)=>s+i.awarded,0),maxScore:e.reduce((s,i)=>s+i.points,0),answers:r}},ph=/<\/?(script|object|embed|link|meta|base|form)\b[^>]*>/gi,mh=/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi,fh=/(href|src)\s*=\s*("|')\s*javascript:[^"']*\2/gi,hh=e=>e.replace(ph,"").replace(mh,"").replace(fh,'$1="#"'),oc=(e,t)=>{const n=hh(e),r=`
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
  `;return`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>${n}${r}</body></html>`},Od=(e,t)=>{if(typeof e!="object"||e===null)return null;const n=e;if(n.type!=="classroom.activity.completed"&&n.type!=="classroom.activity.progress"||typeof n.activityId!="string"||!t.includes(n.activityId))return null;const r=typeof n.score=="number"&&Number.isFinite(n.score)?n.score:void 0,s=typeof n.maxScore=="number"&&Number.isFinite(n.maxScore)?n.maxScore:void 0;return{type:n.type,activityId:n.activityId,...r===void 0?{}:{score:r},...s===void 0?{}:{maxScore:s},...typeof n.completed=="boolean"?{completed:n.completed}:{}}},gh=(e,t)=>{if(typeof e!="object"||e===null)return null;const n=e,r=typeof n.statement=="object"&&n.statement!==null?n.statement:n,s=typeof r.verb=="object"&&r.verb!==null?r.verb:null,i=typeof r.result=="object"&&r.result!==null?r.result:null,l=typeof(s==null?void 0:s.id)=="string"?s.id:"";if(!(l.includes("completed")||l.includes("passed")||(i==null?void 0:i.completion)===!0))return null;const c=typeof(i==null?void 0:i.score)=="object"&&i.score!==null?i.score:null,u=typeof(c==null?void 0:c.raw)=="number"?c.raw:void 0,f=typeof(c==null?void 0:c.max)=="number"?c.max:void 0;return{type:"classroom.activity.completed",activityId:t,completed:!0,...u===void 0?{}:{score:u},...f===void 0?{}:{maxScore:f}}};let pr=null;const vh=(e,t)=>Yn.find(n=>n.courseId===e&&n.memberId===t)??null,Dd=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,yh=e=>(e==null?void 0:e.startsWith("wix-media://"))??!1,wh=e=>/^https?:\/\//i.test(e??""),xh="https://www.youtube.com",bh="/Faithonomics/assets/discussion-forum-button-clean.png",kh="/Faithonomics/assets/discussion-forum-header-clean.png",Ud=e=>{if(!e)return null;try{const t=new URL(e),n=t.hostname.replace(/^www\./,"");if(n==="youtu.be")return t.pathname.split("/").filter(Boolean)[0]??null;if(n.endsWith("youtube.com")){if(t.pathname==="/watch")return t.searchParams.get("v");const r=t.pathname.match(/^\/embed\/([^/?]+)/);if(r)return r[1]??null}}catch{const t=e.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);return(t==null?void 0:t[1])??null}return null},Sh=()=>{var e;return(e=window.YT)!=null&&e.Player?Promise.resolve(window.YT):pr||(pr=new Promise((t,n)=>{const r=document.querySelector('script[src="https://www.youtube.com/iframe_api"]'),s=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{var i;if(s==null||s(),(i=window.YT)!=null&&i.Player){t(window.YT);return}n(new Error("YouTube iframe API loaded without a player constructor."))},!r){const i=document.createElement("script");i.src="https://www.youtube.com/iframe_api",i.async=!0,i.onerror=()=>{pr=null,n(new Error("Unable to load the YouTube iframe API."))},document.head.appendChild(i)}}),pr)},Bi=(e,t)=>e.kind==="ordering"||e.kind==="timeline"||t.kind==="ordering"||t.kind==="timeline",sn=(e,t)=>{const n=e[t];return Array.isArray(n)?"":n??""},Hi=(e,t,n)=>{const r=e[t];return Array.isArray(r)?[...r,...Array.from({length:n},()=>"")].slice(0,n):Array.from({length:n},()=>"")},lc=({courseLessons:e,courseModules:t,activeLessonId:n,lockStates:r,onSelect:s})=>o.jsxs("aside",{className:"lesson-sidebar",children:[o.jsx("h2",{children:"Levels and Sessions"}),[...t].sort((i,l)=>i.sequence-l.sequence).map(i=>{const l=wn(e.filter(a=>a.moduleId===i.id));return o.jsxs("section",{className:"level-group",children:[o.jsx("h3",{children:i.title}),o.jsx("p",{children:i.description}),l.map(a=>{const c=!!r.get(a.id);return o.jsxs("button",{className:a.id===n?"lesson-nav-item active":"lesson-nav-item",disabled:c,onClick:()=>s(a.id),children:[c?o.jsx(vi,{size:16}):o.jsx(jf,{size:16}),a.imageUrl?o.jsx("img",{className:"lesson-nav-thumb",src:a.imageUrl,alt:""}):null,o.jsx("span",{children:a.title})]},a.id)})]},i.id)})]}),bt=({completed:e})=>o.jsx("p",{className:e?"status success":"status",children:e?"Completion recorded.":"Required before session completion."}),ac=({activity:e,courseId:t,lessonId:n,enrolment:r,identity:s,completed:i,discussionPosts:l,discussionReplies:a,onComplete:c,onAddPost:u,onAddReply:f})=>{var O;const[g,v]=k.useState({}),[x,y]=k.useState(""),[h,C]=k.useState("Psalm 1 shows that delight grows through daily meditation and repeated choices."),[m,d]=k.useState({}),[p,w]=k.useState(""),[N,T]=k.useState({}),P=k.useRef(null),_=S=>{if(!r)return;const A=new Date().toISOString(),z={id:`submission-${e.id}-${s.memberId}`,activityId:e.id,lessonId:n,courseId:t,enrolmentId:r.id,memberId:s.memberId,contactId:r.contactId,responseText:S,status:"submitted",submittedAt:A};Fe.saveSubmission(z).catch(()=>{})},q=(S,A,z)=>{if(!r)return;const U={id:`quiz-${e.id}-${s.memberId}-${Date.now()}`,activityId:e.id,lessonId:n,memberId:s.memberId,enrolmentId:r.id,answers:S,score:A,maxScore:z,submittedAt:new Date().toISOString()};Fe.saveQuizAttempt(U).catch(()=>{})},M=Nd.filter(S=>S.activityId===e.id),le=Ed.filter(S=>M.some(A=>A.id===S.questionId));if(k.useEffect(()=>{if(e.kind!=="h5p")return;const S=A=>{var V;const z=(V=P.current)==null?void 0:V.contentWindow;if(z&&A.source!==z)return;const U=Od(A.data,[e.id])??gh(A.data,e.id);(U==null?void 0:U.type)==="classroom.activity.completed"&&c(e,U.score??e.maxScore,U.maxScore??e.maxScore)};return window.addEventListener("message",S),()=>window.removeEventListener("message",S)},[e,c]),e.kind==="reflection")return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(mn,{size:20})]}),o.jsx("p",{children:e.instructions}),o.jsx("textarea",{value:h,onChange:S=>C(S.target.value),"aria-label":"Written reflection"}),o.jsx("button",{className:"secondary-button",onClick:()=>{y("Answer saved."),_(h),c(e,e.maxScore,e.maxScore)},children:"Save answer"}),x?o.jsx("p",{className:"status success",children:x}):o.jsx(bt,{completed:i})]});if(e.kind==="h5p")return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(mn,{size:20})]}),o.jsx("p",{children:e.instructions}),e.embedUrl?o.jsx("iframe",{ref:P,className:"h5p-frame",title:e.title,src:e.embedUrl,sandbox:"allow-scripts allow-same-origin allow-forms",referrerPolicy:"strict-origin-when-cross-origin"}):o.jsxs("div",{className:"video-placeholder",children:[o.jsx(ht,{size:42}),o.jsx("span",{children:"H5P package awaiting hosted embed URL"})]}),o.jsx(bt,{completed:i})]});if(e.kind==="interactiveVideo"){const S=e.videoQuestions??[],A=S.filter(B=>m[B.id]===B.correctAnswer).length,z=S.length===0?e.maxScore:Math.round(A/S.length*e.maxScore),U=z>=(e.minimumScore??e.maxScore),V=((O=e.videoUrl)==null?void 0:O.startsWith("wix-media://"))??!1;return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(ht,{size:20})]}),o.jsx("p",{children:e.instructions}),e.videoUrl&&!V?o.jsx("video",{className:"lesson-video",controls:!0,preload:"metadata",src:e.videoUrl}):o.jsxs("div",{className:"video-placeholder",children:[o.jsx(ht,{size:42}),o.jsx("span",{children:"Wix Media video with timed questions"})]}),o.jsx("div",{className:"video-question-grid",children:S.map(B=>o.jsxs("fieldset",{children:[o.jsxs("legend",{children:[Dd(B.timeSeconds)," - ",B.prompt]}),B.choices.map(ee=>o.jsxs("label",{className:"choice-row",children:[o.jsx("input",{type:"radio",name:B.id,value:ee,checked:m[B.id]===ee,onChange:()=>d(G=>({...G,[B.id]:ee}))}),ee]},ee))]},B.id))}),o.jsxs("div",{className:"activity-toolbar",children:[o.jsxs("span",{className:"status",children:["Score: ",z,"/",e.maxScore]}),o.jsx("button",{className:"secondary-button",disabled:!U,onClick:()=>{q(m,z,e.maxScore),c(e,z,e.maxScore)},children:"Save video answers"})]}),o.jsx(bt,{completed:i})]})}if(e.kind==="discussion"){const S=l.filter(D=>D.activityId===e.id),A=new Set(S.map(D=>D.id)),z=new Map(S.map(D=>[D.id,D])),U=S.some(D=>D.memberId===s.memberId),V=Math.max(1,e.replyRequirement??1),B=new Set(a.filter(D=>{const Ae=z.get(D.postId);return D.memberId===s.memberId&&A.has(D.postId)&&Ae!==void 0&&Ae.memberId!==s.memberId}).map(D=>D.postId)),ee=B.size,G=U&&ee>=V,Xe=e.id==="activity-kingdom-first-discussion"?"Share how Matthew 6 reshapes one economic choice...":e.id==="activity-four-pillars-discussion"?"Choose property, relationships, work, or consumption. Share one everyday example...":"Share your Monday action...",Ie=(D,Ae)=>{D&&Ae>=V&&c(e,e.maxScore,e.maxScore)};return o.jsxs("section",{className:"activity-panel discussion-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(Ld,{size:20})]}),o.jsx("p",{children:e.instructions}),o.jsxs("div",{className:"discussion-requirements","aria-label":"Discussion completion requirements",children:[o.jsx("span",{className:U?"met":"",children:U?"Post added":"Add one post"}),o.jsxs("span",{className:ee>=V?"met":"",children:["Reply to course participants: ",ee,"/",V]})]}),o.jsxs("div",{className:"discussion-composer",children:[o.jsx("textarea",{value:p,onChange:D=>w(D.target.value),"aria-label":"Group discussion post",placeholder:Xe}),o.jsx("button",{className:"secondary-button",onClick:()=>{p.trim()&&(u(e,p.trim()),w(""),Ie(!0,ee))},children:"Add post"})]}),o.jsx("div",{className:"discussion-list",children:S.map(D=>{const Ae=a.filter(Ze=>Ze.postId===D.id),zt=D.memberId===s.memberId,Zn=B.has(D.id);return o.jsxs("article",{className:["discussion-post",zt?"own-post":"",Zn?"replied":""].filter(Boolean).join(" "),children:[o.jsx("strong",{children:D.authorName}),zt?o.jsx("span",{className:"discussion-badge",children:"Your post"}):null,Zn?o.jsx("span",{className:"discussion-badge replied",children:"Reply counted"}):null,o.jsx("p",{children:D.body}),o.jsx("div",{className:"reply-list",children:Ae.map(Ze=>o.jsxs("p",{children:[o.jsxs("strong",{children:[Ze.authorName,":"]})," ",Ze.body]},Ze.id))}),zt?o.jsx("p",{className:"status",children:"This is your post. Reply to course participants to complete the activity."}):o.jsxs("div",{className:"reply-composer",children:[o.jsx("textarea",{value:N[D.id]??"",onChange:Ze=>T(er=>({...er,[D.id]:Ze.target.value})),"aria-label":`Reply to ${D.authorName}`,placeholder:"Ask a thoughtful question or add a practical connection..."}),o.jsx("button",{className:"secondary-button",onClick:()=>{var Yr;const Ze=(Yr=N[D.id])==null?void 0:Yr.trim();if(!Ze)return;f(D,Ze),T(b=>({...b,[D.id]:""}));const er=ee+(B.has(D.id)?0:1);Ie(U,er)},children:"Add reply"})]})]},D.id)})}),o.jsx("p",{className:G?"status success":"status",children:G?"Discussion requirement met.":`Add one post and reply to ${V} ${V===1?"course participant":"course participants"} to complete this activity.`}),o.jsx(bt,{completed:i})]})}if(e.kind==="shortAnswer"){const S=M.length>0&&M.every(A=>sn(g,A.id).trim().length>=10);return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(Xs,{size:20})]}),o.jsx("p",{children:e.instructions}),M.map(A=>o.jsxs("label",{className:"short-answer-field",children:[o.jsx("span",{children:A.prompt}),o.jsx("textarea",{value:sn(g,A.id),onChange:z=>v(U=>({...U,[A.id]:z.target.value})),"aria-label":A.prompt,placeholder:"Write a brief answer..."})]},A.id)),o.jsxs("div",{className:"activity-toolbar",children:[o.jsx("span",{className:"status",children:"Saved answers can be reviewed by a lecturer before final marks."}),o.jsx("button",{className:"secondary-button",disabled:!S,onClick:()=>{const A=M.reduce((z,U)=>(z[U.id]=sn(g,U.id),z),{});y("Short answer saved for review."),_(JSON.stringify(A)),c(e,e.maxScore,e.maxScore)},children:"Save short answer"})]}),x?o.jsx("p",{className:"status success",children:x}):o.jsx(bt,{completed:i})]})}const fe=S=>le.filter(A=>A.questionId===S),Z=(S,A)=>{v(z=>({...z,[S]:A}))},$e=(S,A,z,U)=>{v(V=>{const B=Hi(V,S,U);return B[A]=z,{...V,[S]:B}})},L=M.reduce((S,A)=>{const z=fe(A.id);return S[A.id]=Bi(A,e)?Hi(g,A.id,z.length):sn(g,A.id),S},{}),J=dh(M,le,L),K=J.score>=(e.minimumScore??e.maxScore),I=S=>{const A=L[S.id];if(Bi(S,e)){const z=fe(S.id);return Array.isArray(A)&&z.length>0&&A.length===z.length&&A.every(U=>U.trim().length>0)&&new Set(A).size===A.length}return typeof A=="string"&&A.trim().length>0},F=M.length>0&&M.every(I)&&K,E=S=>{const A=fe(S.id);if(S.kind==="fillBlank"||e.kind==="fillBlank")return o.jsxs("fieldset",{children:[o.jsx("legend",{children:S.prompt}),o.jsx("input",{className:"blank-input",value:sn(g,S.id),onChange:z=>Z(S.id,z.target.value),"aria-label":S.prompt,placeholder:"Type your answer"})]},S.id);if(S.kind==="matching"||e.kind==="matching")return o.jsxs("fieldset",{children:[o.jsx("legend",{children:S.prompt}),o.jsxs("select",{className:"match-select",value:sn(g,S.id),onChange:z=>Z(S.id,z.target.value),"aria-label":`Match answer for ${S.prompt}`,children:[o.jsx("option",{value:"",children:"Choose matching answer"}),A.map(z=>o.jsx("option",{value:z.value,children:z.label},z.id))]})]},S.id);if(Bi(S,e)){const z=Hi(g,S.id,A.length),U=new Set(z.filter(V=>V.length>0));return o.jsxs("fieldset",{children:[o.jsx("legend",{children:S.prompt}),o.jsx("div",{className:"timeline-slots",children:A.map((V,B)=>o.jsxs("label",{children:[o.jsx("span",{children:e.kind==="timeline"?`Timeline ${B+1}`:`Position ${B+1}`}),o.jsxs("select",{value:z[B]??"",onChange:ee=>$e(S.id,B,ee.target.value,A.length),"aria-label":`${S.prompt} position ${B+1}`,children:[o.jsx("option",{value:"",children:"Choose item"}),A.map(ee=>o.jsx("option",{value:ee.value,disabled:U.has(ee.value)&&z[B]!==ee.value,children:ee.label},ee.id))]})]},`${S.id}-slot-${B+1}`))})]},S.id)}return o.jsxs("fieldset",{children:[o.jsx("legend",{children:S.prompt}),A.map(z=>o.jsxs("label",{className:"choice-row",children:[o.jsx("input",{type:"radio",name:S.id,value:z.value,checked:sn(g,S.id)===z.value,onChange:()=>Z(S.id,z.value)}),z.label]},z.id))]},S.id)};return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(mn,{size:20})]}),o.jsx("p",{children:e.instructions}),M.map(E),o.jsxs("div",{className:"activity-toolbar",children:[o.jsxs("span",{className:"status",children:["Score: ",J.score,"/",J.maxScore]}),o.jsx("button",{className:"secondary-button",disabled:!F,onClick:()=>{q(L,J.score,J.maxScore),c(e,J.score,J.maxScore)},children:"Submit answers"})]}),o.jsx(bt,{completed:i})]})},jh=({content:e,completed:t,onCompleteContent:n})=>{const r=e.videoCheckpoint,s=Ud(e.url),i=k.useRef(null),l=k.useRef(null),a=k.useRef(null),c=k.useRef([]),u=k.useRef(null),f=k.useRef(null),g=k.useRef(0),v=k.useRef(0),x=k.useRef(!1),y=k.useRef(t),h=k.useRef(!1),[C,m]=k.useState("loading"),[d,p]=k.useState(!1),[w,N]=k.useState(!1),[T,P]=k.useState(!1),[_,q]=k.useState(!1),[M,le]=k.useState(!1),[fe,Z]=k.useState({}),$e=k.useCallback(E=>{const O=E.getIframe();O.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"),O.setAttribute("allowfullscreen","true")},[]),L=k.useCallback(()=>{const E=l.current;!E||h.current||(E.mute(),E.playVideo(),q(!1))},[]),J=k.useCallback(()=>{const E=l.current,O=r==null?void 0:r.timeSeconds;if(!E||typeof O!="number")return;E.pauseVideo();const S=E.getCurrentTime();Number.isFinite(S)&&S>O+.25&&E.seekTo(O,!0)},[r==null?void 0:r.timeSeconds]),K=k.useCallback(()=>{h.current=!0,q(!1),J(),le(!1),p(!0)},[J]);if(k.useEffect(()=>{x.current=w},[w]),k.useEffect(()=>{h.current=d},[d]),k.useEffect(()=>{y.current=t},[t]),k.useEffect(()=>{if(!r||!s)return;let E=!0;const O=()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},S=()=>{c.current.forEach(G=>window.clearTimeout(G)),c.current=[]},A=()=>{u.current!==null&&(window.clearTimeout(u.current),u.current=null)},z=()=>{f.current!==null&&(window.clearTimeout(f.current),f.current=null)},U=()=>{A(),!(x.current||h.current||y.current)&&(u.current=window.setTimeout(()=>{!x.current&&!h.current&&!y.current&&P(!0)},3e3))},V=()=>{const G=l.current;if(!G)return;const Xe=G.getCurrentTime(),Ie=G.getDuration();g.current=Number.isFinite(Xe)?Xe:g.current,v.current=Number.isFinite(Ie)?Ie:v.current;const D=g.current,Ae=v.current;if(h.current&&!x.current){J();return}if(!x.current&&D>=r.timeSeconds){A(),K();return}x.current&&!y.current&&Number.isFinite(Ae)&&Ae>0&&D>=Ae-1&&n(e.id)},B=()=>{O(),a.current=window.setInterval(V,350)},ee=G=>{S(),[0,250,900,1800,3e3].forEach((Xe,Ie,D)=>{const Ae=window.setTimeout(()=>{const zt=l.current;if(!E||!zt||h.current)return;L(),V(),Ie===D.length-1&&zt.getPlayerState()!==G.PlayerState.PLAYING&&g.current<.5&&!h.current&&q(!0)},Xe);c.current.push(Ae)})};return g.current=0,v.current=0,x.current=!1,h.current=!1,N(!1),p(!1),Z({}),le(!1),P(!1),q(!1),m("loading"),Sh().then(G=>{if(!E||!i.current)return;const Xe={autoplay:1,enablejsapi:1,modestbranding:1,mute:1,origin:window.location.origin,playsinline:1,rel:0,start:x.current?r.timeSeconds:0};l.current=new G.Player(i.current,{height:"100%",host:xh,videoId:s,width:"100%",playerVars:Xe,events:{onReady:Ie=>{l.current=Ie.target,$e(Ie.target),m("ready"),B(),ee(G)},onStateChange:Ie=>{if(Ie.data===G.PlayerState.PLAYING){q(!1),V(),B();return}if(Ie.data===G.PlayerState.ENDED&&!x.current){O(),A(),K();return}Ie.data===G.PlayerState.ENDED&&x.current&&!y.current&&(O(),A(),z(),n(e.id))},onError:()=>{m("error"),O(),q(!0),U()}}})}).catch(()=>{E&&(m("error"),O(),q(!0),U())}),()=>{var G;E=!1,O(),S(),A(),z(),(G=l.current)==null||G.destroy(),l.current=null}},[r,$e,e.id,J,n,K,L,s]),k.useEffect(()=>{if(!r||!w||t)return;const O=(r.durationSeconds??0)-r.timeSeconds;if(!(O<=0))return f.current=window.setTimeout(()=>{x.current&&!y.current&&n(e.id)},O*1e3+1500),()=>{f.current!==null&&(window.clearTimeout(f.current),f.current=null)}},[r,t,e.id,n,w]),!r||!s)return o.jsxs("div",{className:"video-placeholder",children:[o.jsx(ht,{size:42}),o.jsx("span",{children:"YouTube checkpoint video is awaiting a valid URL and quiz."})]});const I=r.questions.every(E=>!!fe[E.id]),F=()=>{if(le(!0),!I)return;N(!0),x.current=!0,h.current=!1,P(!1),p(!1);const E=l.current;if(E){const O=r.timeSeconds+.25;E.seekTo(O,!0),L()}};return o.jsxs("div",{className:"checkpoint-video-shell",children:[e.body?o.jsx("p",{children:e.body}):null,o.jsxs("div",{className:"youtube-frame-wrap",children:[o.jsx("div",{className:"youtube-frame-slot","aria-label":e.title,children:o.jsx("div",{className:"youtube-player-host",ref:i})}),d&&!w?o.jsxs("div",{className:"video-blocker",role:"status","aria-live":"polite",children:[o.jsx(vi,{size:24}),o.jsx("span",{children:"Complete the checkpoint quiz pop-up to continue the video."})]}):null]}),o.jsxs("div",{className:"video-state-row",children:[o.jsx("span",{className:t?"status success":"status",children:t?"Video step complete.":`Checkpoint quiz opens at ${Dd(r.timeSeconds)}.`}),C==="loading"?o.jsx("span",{className:"status",children:"Loading YouTube player..."}):null,_&&!d&&!w?o.jsx("button",{className:"secondary-button",type:"button",onClick:L,children:"Start video"}):null,T&&!d&&!w?o.jsx("button",{className:"secondary-button",type:"button",onClick:K,children:"Open checkpoint quiz"}):null]}),d?o.jsx("div",{className:"checkpoint-modal-backdrop",role:"presentation",children:o.jsxs("section",{className:"checkpoint-quiz checkpoint-modal",role:"dialog","aria-modal":"true","aria-live":"polite","aria-labelledby":`${r.id}-title`,children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h4",{id:`${r.id}-title`,children:r.title}),o.jsx(mn,{size:19})]}),o.jsx("p",{className:"checkpoint-intro",children:"Answer each question to continue the video. Feedback appears as you choose."}),r.questions.map(E=>{const O=fe[E.id],S=O===E.correctAnswer;return o.jsxs("article",{className:"checkpoint-question",role:"group","aria-labelledby":`${E.id}-prompt`,children:[o.jsx("p",{className:"checkpoint-prompt",id:`${E.id}-prompt`,children:E.prompt}),o.jsx("div",{className:"checkpoint-choice-list",children:E.choices.map((A,z)=>{const U=String.fromCharCode(65+z);return o.jsxs("label",{className:"choice-row",children:[o.jsx("input",{type:"radio",name:E.id,value:A,checked:O===A,onChange:()=>Z(V=>({...V,[E.id]:A}))}),o.jsxs("span",{children:[o.jsxs("strong",{children:[U,"."]})," ",A]})]},A)})}),O?o.jsx("p",{className:S?"quiz-feedback success":"quiz-feedback error",children:S?E.feedback:"Not quite. Review the scenario and compare your answer with the main idea before you continue."}):null]},E.id)}),M&&!I?o.jsx("p",{className:"status error",children:"Answer every question before continuing."}):null,o.jsx("button",{className:"primary-button",disabled:!I,onClick:F,children:"Continue video"})]})}):null]})},Ch=e=>e.kind==="video"?"Mark video complete":e.kind==="webLink"?"Mark link reviewed":e.kind==="download"?"Mark download reviewed":"Continue",cc={consumer:"muffin",producer:"robusta",government:"freeTrade"},Vi={consumer:{muffin:"Coffee + Muffin (R49)",latte:"Fancy Latte (R45)"},producer:{robusta:"Robusta Beans",arabica:"Arabica Beans"},government:{freeTrade:"Free Trade",importTax:"Import Tax"}},Qi=e=>`/Faithonomics/${e.replace(/^\/+/,"")}`,uc={consumer:{still:Qi("assets/simulator-thabo-static.gif"),motion:"https://static.wixstatic.com/media/7638b6_63ddf056c7a84471b430693d65decee9~mv2.gif"},producer:{still:Qi("assets/simulator-johan-static.gif"),motion:"https://static.wixstatic.com/media/7638b6_958741e949ae4756bd69a76fa52c3b98~mv2.gif"},government:{still:Qi("assets/simulator-government-static.gif"),motion:"https://static.wixstatic.com/media/7638b6_ead4d59a26914e5083ba3de1a0721cc3~mv2.gif"}},Ih=["Micro","Meso","Macro"],Nh={Micro:["thabo","pricePressure"],Meso:["johan","fairnessTrust"],Macro:["farmer","government"]},dc="https://static.wixstatic.com/media/7638b6_f5c6de8175f94568906e6da8e8076dbf~mv2.png",Sn={farmer:{happy:"https://static.wixstatic.com/media/7638b6_573af9fe2b7f41b9b625a413d3bf77c1~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_1a280fbd8cec49aea5b37ef82a6b6028~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_1a280fbd8cec49aea5b37ef82a6b6028~mv2.png"},johan:{happy:"https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_90fc8581d0e8406dad801f94d07355fe~mv2.png"},thabo:{happy:dc,neutral:dc,unsatisfied:"https://static.wixstatic.com/media/7638b6_873ba6be814f4d768cbf56339c2f8b7a~mv2.png"},fairnessTrust:{happy:"https://static.wixstatic.com/media/7638b6_324c44a8162448c5b444d9e0843f1766~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_a936d246f0e64f6c907f64e3ecacfd7c~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_4f4e7890783c40689dbd497826b690bd~mv2.png"},pricePressure:{happy:"https://static.wixstatic.com/media/7638b6_519de2e908a2420aa76a24bd372094d3~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_caa1a4b61e0a45da957521ad88d85073~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_caa1a4b61e0a45da957521ad88d85073~mv2.png"},government:{happy:"https://static.wixstatic.com/media/7638b6_35bf49a6a16741b9b72bf63e87f8f8d1~mv2.png",neutral:"https://static.wixstatic.com/media/7638b6_10e58b2c5aa34625aaccd294f2a3f1c4~mv2.png",unsatisfied:"https://static.wixstatic.com/media/7638b6_a13ba433beb149349f07acd4ffea114d~mv2.png"}},pc={happy:"Happy",neutral:"Neutral",unsatisfied:"Unsatisfied"};function Gi({ariaLabel:e,value:t,options:n,theme:r,onChange:s}){const l=n.findIndex(c=>c.value===t)===1?1:0,a=n[l];return o.jsxs("div",{className:`simulator-choice-slider ${r}`,"data-position":l,children:[o.jsxs("div",{className:"simulator-slider-guidance",children:[o.jsx("span",{children:"Tap a block to change"}),o.jsx("strong",{children:a.label})]}),o.jsx("div",{className:"simulator-slider-options",role:"group","aria-label":e,children:n.map((c,u)=>o.jsxs("button",{type:"button",className:u===l?"active":"",onClick:()=>s(c.value),"aria-pressed":u===l,children:[o.jsx("span",{children:c.label}),o.jsx("small",{children:c.description})]},c.value))})]})}const hs=e=>e>=75?"happy":e>=45?"neutral":"unsatisfied",Eh=e=>e<=35?"happy":e<=65?"neutral":"unsatisfied",Ph=e=>{let t="",n="",r=0,s=0,i=0;e.consumer==="muffin"&&e.producer==="robusta"?(t="Basic Needs & Business Wants",n="Thabo chooses the coffee and muffin because he needs food before work. Johan chooses cheaper Robusta beans because he wants to keep more money in the business. Both are making choices between needs, wants, and limited resources.",r=75,s=90,i=55):e.consumer==="latte"&&e.producer==="arabica"?(t="Quality and Experience",n="Thabo spends his money on a fancy latte because he wants something special. Johan buys better Arabica beans so the coffee tastes smoother. He earns less profit, but the shop feels more honest and careful.",r=90,s=62,i=82):e.consumer==="latte"&&e.producer==="robusta"?(t="Paying for Quality, Getting Cheap",n="Thabo pays for a premium latte, hoping for a good experience. Johan uses cheaper beans to make more profit. Johan may earn more today, but Thabo may feel cheated if the coffee tastes flat.",r=45,s=88,i=35):(t="Mismatched Priorities",n="Thabo just wants basic food to fill him up, but Johan spends extra money on fancy beans. Johan is trying to offer quality, but he might lose money if everyday customers only want the cheapest option.",r=68,s=48,i=64);const l=e.government==="freeTrade"?"Free Trade":"Government Import Tax",a=e.government==="freeTrade"?28:82,c=e.government==="freeTrade"?18:72,u=e.government==="freeTrade"?r:Math.max(20,r-18),f=e.government==="freeTrade"?s:Math.max(20,s-16),g=e.government==="freeTrade"?i:Math.min(95,i+10),v=e.government==="freeTrade"?55:80,x=100-c,y=hs(u),h=hs(f),C=hs(a),m=hs(g),d=Eh(c),p=e.government==="freeTrade"?"neutral":"happy",w=e.government==="freeTrade"?"The government keeps trade free. Prices stay low for Thabo, and Johan can buy cheap imported beans. This helps the coffee shop, but local South African farmers may struggle to compete with cheap imports.":"The government adds an import tax. Johan's beans now cost more, so he may raise prices. Thabo's R50 may not stretch as far, but local farmers get more protection.";return{headline:t,policyLabel:l,story:n,policyImpact:w,theologicalLens:"Does this market state treat humans merely as consumers and producers, or as image-bearers of the divine?",scaleAnalysis:[{scale:"Micro",title:"Thabo's daily life",body:e.consumer==="muffin"?"At the personal level, Thabo is trying to use limited money for food, energy, and good value before work.":"At the personal level, Thabo chooses experience and taste, but must still ask whether the choice serves his real day well."},{scale:"Meso",title:"Johan's business and community",body:e.producer==="robusta"?"At the shop level, Johan protects profit, but the quality and trust relationship with customers may carry pressure.":"At the shop level, Johan invests in quality, which can build trust, but it reduces the money left after costs."},{scale:"Macro",title:"Policy and wider society",body:e.government==="freeTrade"?"At the wider policy level, open trade keeps prices lower, yet local farmers carry more risk.":"At the wider policy level, the import tax protects local farmers, yet customers and small shops feel higher prices."}],assessments:[{id:"thabo",category:"Thabo's satisfaction",status:y,value:u,explanation:y==="happy"?"Thabo feels that his R50 gives him good value for the day ahead.":y==="neutral"?"Thabo receives part of what he needs, but price, taste, or fullness still feels imperfect.":"Thabo feels the choice does not stretch his limited money far enough.",iconUrl:Sn.thabo[y]},{id:"johan",category:"Johan's business satisfaction",status:h,value:f,explanation:h==="happy"?"Johan feels the choice protects his profit and keeps the shop moving.":h==="neutral"?"Johan can still trade, but quality, costs, or customer trust creates tension.":"Johan feels squeezed because the business choice may not cover his costs well.",iconUrl:Sn.johan[h]},{id:"farmer",category:"Farmer impact",status:C,value:a,explanation:C==="happy"?"Local farmers are protected from cheaper imports and have a better chance to compete.":C==="neutral"?"Local farmers receive some help, but still face pressure from the market.":"Local farmers struggle because cheaper imported beans make it hard to compete.",iconUrl:Sn.farmer[C]},{id:"fairnessTrust",category:"Fairness and Trust",status:m,value:g,explanation:m==="happy"?"The choices feel honest and balanced, so trust can grow between buyer, seller, and community.":m==="neutral"?"The outcome has some balance, but one group still carries a noticeable cost.":"The outcome feels unfair because one person benefits while another carries too much loss.",iconUrl:Sn.fairnessTrust[m]},{id:"pricePressure",category:"Price Pressure",status:d,value:x,explanation:d==="happy"?"Prices stay low enough for Thabo's R50 to cover his immediate need.":d==="neutral"?"Prices are manageable, but Thabo must still choose carefully.":"Prices place heavy pressure on Thabo, so his R50 may no longer be enough.",iconUrl:Sn.pricePressure[d]},{id:"government",category:"Government",status:p,value:v,explanation:e.government==="freeTrade"?"The state keeps prices low and trade open, but leaves local farmers exposed.":"The state protects local farmers, but must explain why some prices may rise.",iconUrl:Sn.government[p]}]}},Th=e=>{const t=new Map(e.scaleAnalysis.map(s=>[s.scale,s])),n=new Map(e.assessments.map(s=>[s.id,s])),r=Ih.map(s=>{const i=t.get(s),l=Nh[s].map(a=>n.get(a)).filter(a=>!!a);return!i||l.length===0?null:{id:`scale-${s.toLowerCase()}`,kind:"scale",scale:s,scaleTitle:i.title,scaleBody:i.body,assessments:l}}).filter(s=>s!==null);return[{id:"overview",kind:"overview",title:`${e.headline} + ${e.policyLabel}`,body:e.story,secondaryBody:e.policyImpact},...r]},Ah=({content:e,completed:t,onCompleteContent:n})=>{const[r,s]=k.useState(cc),[i,l]=k.useState(!1),[a,c]=k.useState(0),[u,f]=k.useState(!1),[g,v]=k.useState(!1),[x,y]=k.useState({}),h=k.useRef(cc),C=k.useRef({}),m=Ph(r),d=Th(m),p=i?d[a]??null:null,w=a>0,N=a<d.length-1,T=a>=d.length-1,P=k.useCallback(L=>{const J=C.current[L];J!==void 0&&window.clearTimeout(J);const K=Date.now();y(I=>({...I,[L]:K})),C.current[L]=window.setTimeout(()=>{y(I=>{if(I[L]!==K)return I;const F={...I};return delete F[L],F}),delete C.current[L]},2200)},[]),_=L=>{Object.keys(L).some(K=>L[K]!==void 0&&L[K]!==r[K])&&(s(K=>({...K,...L})),c(0),l(!1),f(!1),v(!1))},q=()=>{c(0),l(!0),f(!1),v(!1)},M=()=>{l(!1),f(!1)},le=()=>{f(!0),c(L=>Math.max(L-1,0))},fe=()=>{f(!0),c(L=>Math.min(L+1,d.length-1))};k.useEffect(()=>{var K;if(!i||u||T)return;const L=((K=d[a])==null?void 0:K.kind)==="overview"?3600:5600,J=window.setTimeout(()=>{c(I=>Math.min(I+1,d.length-1))},L);return()=>window.clearTimeout(J)},[i,u,a,d.length,T]),k.useEffect(()=>{i&&T&&v(!0)},[i,T]),k.useEffect(()=>{const L=h.current;Object.keys(r).filter(K=>L[K]!==r[K]).forEach(P),h.current=r},[r,P]),k.useEffect(()=>()=>{Object.values(C.current).forEach(L=>{L!==void 0&&window.clearTimeout(L)})},[]);const Z=L=>x[L]?uc[L].motion:uc[L].still,$e=L=>`${L}-${x[L]??"still"}`;return o.jsxs("section",{className:"lesson-block simulator-lesson-block",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(mn,{size:20})]}),o.jsxs("div",{className:"simulator-layout",children:[o.jsxs("div",{className:"simulator-controls",children:[o.jsx("blockquote",{children:"Thabo is walking to work. He has R50. He stops at Ubuntu Brews, owned by Johan."}),o.jsxs("section",{className:"simulator-control-card",children:[o.jsx("p",{className:"simulator-control-label consumer",children:"Thabo's Choice (The Consumer)"}),o.jsx("p",{children:"Thabo only has R50. What should he buy?"}),o.jsx(Gi,{ariaLabel:"Change Thabo's choice",theme:"consumer",value:r.consumer,onChange:L=>_({consumer:L}),options:[{value:"muffin",label:"Coffee + Muffin (R49)",description:"Fills you up"},{value:"latte",label:"Fancy Latte (R45)",description:"Tastes amazing"}]})]}),o.jsxs("section",{className:"simulator-control-card",children:[o.jsx("p",{className:"simulator-control-label producer",children:"Johan's Choice (The Business)"}),o.jsx("p",{children:"Johan must buy coffee beans. Which ones should he pick?"}),o.jsx(Gi,{ariaLabel:"Change Johan's choice",theme:"producer",value:r.producer,onChange:L=>_({producer:L}),options:[{value:"robusta",label:"Robusta Beans",description:"Cheaper, makes more profit"},{value:"arabica",label:"Arabica Beans",description:"Expensive, but tastes better"}]})]}),o.jsxs("section",{className:"simulator-control-card",children:[o.jsx("p",{className:"simulator-control-label government",children:"The Government's Choice"}),o.jsx("p",{children:"The state must decide how to manage imported goods."}),o.jsx(Gi,{ariaLabel:"Change the government's choice",theme:"government",value:r.government,onChange:L=>_({government:L}),options:[{value:"freeTrade",label:"Free Trade",description:"Keeps prices low, hurts local farmers"},{value:"importTax",label:"Import Tax",description:"Raises prices, protects local farmers"}]})]})]}),o.jsxs("section",{className:"simulator-lock-panel","aria-live":"polite",children:[o.jsx("p",{className:"simulator-control-label government",children:"Ready to analyse"}),o.jsx("h4",{children:"Lock your choice"}),o.jsx("p",{children:"Tap either choice block to change Thabo's, Johan's, and the government's choices before locking them. The selected block slides across so you can see what is active. Lock your choices, then use the Next button in the feedback to see how economics studies choices and how each choice has an impact. After the final feedback slide, close the feedback and press Continue below to unlock the next step."}),o.jsxs("div",{className:"simulator-choice-summary",children:[o.jsxs("div",{className:`simulator-choice-summary-item ${x.consumer?"is-animating":""}`,children:[o.jsx("img",{src:Z("consumer"),alt:"Thabo"},$e("consumer")),o.jsxs("span",{children:[o.jsx("strong",{children:"Thabo"}),Vi.consumer[r.consumer]]})]}),o.jsxs("div",{className:`simulator-choice-summary-item ${x.producer?"is-animating":""}`,children:[o.jsx("img",{src:Z("producer"),alt:"Johan"},$e("producer")),o.jsxs("span",{children:[o.jsx("strong",{children:"Johan"}),Vi.producer[r.producer]]})]}),o.jsxs("div",{className:`simulator-choice-summary-item ${x.government?"is-animating":""}`,children:[o.jsx("img",{src:Z("government"),alt:"Government"},$e("government")),o.jsxs("span",{children:[o.jsx("strong",{children:"Government"}),Vi.government[r.government]]})]})]}),o.jsx("button",{className:"primary-button",type:"button",onClick:q,children:"Lock your choice"})]})]}),p?o.jsx("div",{className:"simulator-response-deck-backdrop",role:"presentation",children:o.jsxs("section",{className:`simulator-response-slide ${p.kind==="scale"?p.scale.toLowerCase():"overview"}`,role:"dialog","aria-modal":"true","aria-live":"polite","aria-label":p.kind==="scale"?`${p.scale} economic effects`:"Economic effects overview",children:[o.jsx("button",{className:"simulator-response-close",type:"button",onClick:M,"aria-label":"Close impact response slides",children:o.jsx(Qo,{size:18})}),o.jsx("p",{className:"simulator-response-kicker",children:"Your choice has the following economic effects"}),p.kind==="overview"?o.jsxs("div",{className:"simulator-response-overview",children:[o.jsx("span",{children:"What happens?"}),o.jsx("h5",{children:p.title}),o.jsx("p",{children:p.body}),o.jsxs("p",{children:[o.jsx("strong",{children:"Policy impact:"})," ",p.secondaryBody]})]}):o.jsxs("div",{className:"simulator-response-scale-slide",children:[o.jsxs("div",{className:"simulator-response-copy",children:[o.jsx("span",{className:"simulator-scale-pill",children:p.scale}),o.jsx("h5",{children:p.scaleTitle}),o.jsx("p",{children:p.scaleBody})]}),o.jsx("div",{className:"simulator-response-effect-grid",children:p.assessments.map(L=>o.jsxs("article",{className:`simulator-response-effect ${L.status}`,children:[o.jsx("img",{src:L.iconUrl,alt:`${L.category} ${pc[L.status].toLowerCase()} icon`}),o.jsxs("div",{children:[o.jsx("span",{className:`simulator-status-pill ${L.status}`,children:pc[L.status]}),o.jsx("h6",{children:L.category}),o.jsx("p",{children:L.explanation})]})]},L.id))})]}),o.jsxs("div",{className:"simulator-response-controls","aria-label":"Impact slide controls",children:[o.jsxs("button",{type:"button",className:"simulator-response-nav-button",onClick:le,disabled:!w,"aria-label":"Previous impact slide",children:[o.jsx(Cf,{size:18}),o.jsx("span",{children:"Back"})]}),o.jsxs("button",{type:"button",className:"simulator-response-nav-button timing",onClick:()=>f(L=>!L),"aria-label":u?"Resume slide timing":"Pause slide timing",children:[u?o.jsx(ht,{size:18}):o.jsx(Tf,{size:18}),o.jsx("span",{children:u?"Resume":"Pause"})]}),o.jsxs("button",{type:"button",className:"simulator-response-nav-button",onClick:fe,disabled:!N,"aria-label":"Next impact slide",children:[o.jsx("span",{children:"Next"}),o.jsx(If,{size:18})]})]}),o.jsx("div",{className:"simulator-response-dots","aria-label":"Impact slide progress",children:d.map((L,J)=>o.jsx("span",{className:J===a?"active":"","aria-label":L.kind==="scale"?`${L.scale} slide`:"What happens slide"},L.id))})]})}):null,o.jsxs("div",{className:"step-toolbar",children:[o.jsx("button",{className:g&&!t?"primary-button":"secondary-button",disabled:t||!g,onClick:()=>n(e.id),children:t?"Step complete":g?"Continue":"Review feedback first"}),o.jsx(bt,{completed:t})]})]})},_h=({content:e,completed:t,onCompleteContent:n,onContinueContent:r})=>{const s=e.completionRequired!==!1,i=yh(e.url),l=wh(e.url)?e.url:void 0,a=Ud(l),c=e.kind==="video"&&!!(a&&e.videoCheckpoint),u=e.kind==="scripture"?o.jsx("blockquote",{children:e.body}):e.kind==="video"?c?o.jsx(jh,{content:e,completed:t,onCompleteContent:n}):l&&!i?o.jsx("video",{className:"lesson-video",controls:!0,preload:"metadata",src:l,onEnded:()=>n(e.id)}):o.jsxs("div",{className:"video-placeholder",children:[o.jsx(ht,{size:42}),o.jsx("span",{children:i?"Wix Media video asset":"Video asset awaiting Wix Media URL"})]}):e.kind==="image"?l&&!i?o.jsx("img",{className:"lesson-image",src:l,alt:e.alt??e.title}):o.jsxs("div",{className:"resource-placeholder",children:[o.jsx(Xs,{size:34}),o.jsx("span",{children:i?"Wix Media image asset":"Image asset awaiting Wix Media URL"})]}):e.kind==="download"?o.jsxs("div",{className:"lesson-resource",children:[o.jsx("p",{children:e.body}),l?o.jsxs("a",{className:"resource-link",href:l,target:"_blank",rel:"noreferrer",children:[o.jsx(Vo,{size:18}),e.fileName??"Open download"]}):o.jsxs("div",{className:"resource-placeholder",children:[o.jsx(Vo,{size:34}),o.jsx("span",{children:i?"Wix Media document asset":"Document awaiting Wix Media URL"})]})]}):e.kind==="webLink"?o.jsxs("div",{className:"lesson-resource",children:[o.jsx("p",{children:e.body}),l?o.jsxs("a",{className:"resource-link",href:l,target:"_blank",rel:"noreferrer",children:[o.jsx(tc,{size:18}),"Open learning link"]}):o.jsxs("div",{className:"resource-placeholder",children:[o.jsx(tc,{size:34}),o.jsx("span",{children:"Web link awaiting Wix CMS URL"})]})]}):o.jsx("p",{children:e.body});return o.jsxs("section",{className:"lesson-block",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(Xs,{size:20})]}),u,s&&c?o.jsxs("div",{className:"step-toolbar",children:[o.jsx("button",{className:t?"primary-button":"secondary-button",disabled:!t,type:"button",onClick:r,children:t?"Continue":"Complete video first"}),o.jsx("span",{className:t?"status success":"status",children:t?"Video, quiz, and final video segment complete. Continue to the next step.":"This button activates after the checkpoint quiz and full video."}),o.jsx(bt,{completed:t})]}):s?o.jsxs("div",{className:"step-toolbar",children:[o.jsx("button",{className:"secondary-button",disabled:t,onClick:()=>n(e.id),children:t?"Step complete":Ch(e)}),o.jsx(bt,{completed:t})]}):o.jsx("p",{className:"status",children:"Optional resource."})]})},mc=({htmlBlock:e,completedContentIds:t,onCompleteContent:n})=>{var l;const r=k.useRef(null);k.useEffect(()=>{const a=c=>{var f;const u=Od(c.data,[e.id]);if((u==null?void 0:u.type)==="classroom.activity.completed"&&n(u.activityId),typeof c.data=="object"&&c.data!==null){const g=c.data;g.type==="classroom.richPopup.opened"&&g.activityId===e.id&&((f=r.current)==null||f.scrollIntoView({behavior:"smooth",block:"start"}))}};return window.addEventListener("message",a),()=>window.removeEventListener("message",a)},[e.id,n]);const s=((l=e.body)==null?void 0:l.includes("data-rich-lesson-step"))??!1,i=()=>{var c;if(document.fullscreenElement){(c=document.exitFullscreen)==null||c.call(document);return}const a=r.current;a!=null&&a.requestFullscreen&&a.requestFullscreen().catch(()=>{})};return o.jsxs("section",{className:"activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:e.title}),o.jsx(mn,{size:20})]}),s?o.jsxs("div",{className:"rich-lesson-frame-wrap",ref:r,children:[o.jsxs("button",{className:"rich-step-fullscreen-button",type:"button",onClick:i,"aria-label":`View ${e.title} fullscreen`,children:[o.jsx(Ef,{size:16}),"Fullscreen"]}),o.jsx("iframe",{className:"rich-lesson-frame",title:e.title,sandbox:"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms",allow:"fullscreen",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin",srcDoc:oc(e.body??"",e.id)})]}):o.jsx("iframe",{title:e.title,sandbox:"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms",allow:"fullscreen",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin",srcDoc:oc(e.body??"",e.id)}),o.jsx(bt,{completed:t.includes(e.id)})]})},Lh=({identity:e,course:t,lessonId:n,activeLevelId:r,completedLessonIds:s,drawerOpen:i,setDrawerOpen:l,onSelectLesson:a,onCompleteLesson:c,onReturnToDashboard:u})=>{const f=je.filter(b=>b.courseId===t.id),g=ot.filter(b=>b.courseId===t.id),v=je.filter(b=>b.courseId===t.id&&(!r||b.moduleId===r)),x=ot.filter(b=>b.courseId===t.id&&(!r||b.id===r)),y=r?g.find(b=>b.id===r)??null:null,h=v.find(b=>b.id===n)??v[0],C=vh(t.id,e.memberId),[m,d]=k.useState(()=>C?vt.filter(b=>b.enrolmentId===C.id):[]),[p,w]=k.useState(Pd),[N,T]=k.useState(Td),[P,_]=k.useState(Ad),[q,M]=k.useState(0),[le,fe]=k.useState(null),[Z,$e]=k.useState(()=>{const b=new Set([...m.filter($=>$.status==="completed").map($=>$.lessonId),...s]);return v.filter($=>b.has($.id)).flatMap($=>$.content.map(H=>H.id))});k.useEffect(()=>{M(0),fe(null)},[h==null?void 0:h.id]),k.useEffect(()=>{if(!C){d([]);return}let b=!0;return Fe.listProgress(C.id).then($=>{b&&d($)}).catch(()=>{b&&d(vt.filter($=>$.enrolmentId===C.id))}),()=>{b=!1}},[C==null?void 0:C.id]),k.useEffect(()=>{if(!h)return;let b=!0;const $=Ho.filter(H=>H.lessonId===h.id&&H.kind==="discussion");return Promise.all([Fe.listActivityCompletions(e.memberId,h.id),Promise.all($.map(H=>Fe.listDiscussionPosts(H.id)))]).then(async([H,xe])=>{if(!b)return;const ae=xe.flat(),Be=await Promise.all(ae.map(be=>Fe.listDiscussionReplies(be.id)));b&&(w(be=>[...be.filter(_e=>_e.lessonId!==h.id||_e.memberId!==e.memberId),...H]),T(be=>[...be.filter(_e=>!$.some(tr=>tr.id===_e.activityId)),...ae]),_(be=>[...be.filter(_e=>!ae.some(tr=>tr.id===_e.postId)),...Be.flat()]))}).catch(()=>{}),()=>{b=!1}},[e.memberId,h==null?void 0:h.id]),k.useEffect(()=>{if(!h)return;const b=p.filter($=>$.memberId===e.memberId&&$.lessonId===h.id&&$.completed&&h.content.some(H=>H.id===$.activityId)).map($=>$.activityId);b.length>0&&$e($=>Array.from(new Set([...$,...b])))},[p,e.memberId,h]);const L=[...m];for(const b of s)L.some($=>$.lessonId===b)||L.push({id:`local-progress-${b}`,enrolmentId:(C==null?void 0:C.id)??"local-enrolment",courseId:t.id,lessonId:b,memberId:e.memberId,status:"completed",percent:100,lastActivityAt:new Date().toISOString(),completedAt:new Date().toISOString()});const J=C?Hl(v,L,C):[],K=new Map(J.map(b=>[b.lessonId,b.locked])),I=C&&r?Rd(g,f,L,C).find(b=>b.moduleId===r):void 0,F=h?Ho.filter(b=>b.lessonId===h.id):[],E=F.filter(b=>!b.contentStepId),O=p.filter(b=>b.memberId===e.memberId),S=h?Ff(h,F,O,Z):{allowed:!1,completed:0,required:0},A=k.useCallback((b,$=b.maxScore,H=b.maxScore)=>{const xe={activityId:b.id,memberId:e.memberId,lessonId:b.lessonId,completed:!0,score:$,maxScore:H,completedAt:new Date().toISOString()};w(ae=>{const Be=ae.findIndex(be=>be.activityId===b.id&&be.memberId===e.memberId);return Be===-1?[...ae,xe]:ae.map((be,_e)=>_e===Be?xe:be)}),Fe.saveActivityCompletion(xe).catch(()=>{})},[e.memberId]),z=k.useCallback(b=>{if(C){const $=new Date().toISOString(),H={id:`progress-${C.id}-${b.id}`,enrolmentId:C.id,courseId:t.id,lessonId:b.id,memberId:e.memberId,status:"completed",percent:100,lastActivityAt:$,completedAt:$};d(xe=>[...xe.filter(ae=>ae.id!==H.id&&ae.lessonId!==b.id),H]),Fe.saveProgress(H).catch(()=>{})}c(b.id)},[t.id,C,e.memberId,c]),U=k.useCallback(b=>{const $=(h==null?void 0:h.content.findIndex(ae=>ae.id===b))??-1,H=(h==null?void 0:h.content.length)??0,xe=(h==null?void 0:h.id)==="level-1-session-1-the-daily-grind"&&$>=0&&$===H-1;if($e(ae=>ae.includes(b)?ae:[...ae,b]),h){const ae={activityId:b,memberId:e.memberId,lessonId:h.id,completed:!0,score:5,maxScore:5,completedAt:new Date().toISOString()};w(Be=>{const be=Be.findIndex(_e=>_e.activityId===b&&_e.memberId===e.memberId);return be===-1?[...Be,ae]:Be.map((_e,tr)=>tr===be?ae:_e)}),Fe.saveActivityCompletion(ae).catch(()=>{})}if(xe&&h){z(h),u();return}$>=0&&$<((h==null?void 0:h.content.length)??0)-1&&M($+1)},[e.memberId,h,u,z]),V=k.useCallback((b,$)=>{const H={id:`post-${b.id}-${Date.now()}`,activityId:b.id,memberId:e.memberId,authorName:e.displayName,body:$,createdAt:new Date().toISOString()};T(xe=>[...xe,H]),Fe.saveDiscussionPost(H).catch(()=>{})},[e.displayName,e.memberId]),B=k.useCallback((b,$)=>{const H={id:`reply-${b.id}-${Date.now()}`,postId:b.id,memberId:e.memberId,authorName:e.displayName,body:$,createdAt:new Date().toISOString()};_(xe=>[...xe,H]),Fe.saveDiscussionReply(H).catch(()=>{})},[e.displayName,e.memberId]);if(!h)return o.jsx("main",{className:"empty-state",children:"No session is available."});if(I!=null&&I.locked)return o.jsx("main",{className:"content-shell",children:o.jsxs("section",{className:"dashboard-intro",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Level locked"}),o.jsx("h2",{children:(y==null?void 0:y.title)??"This level"}),o.jsx("p",{className:"intro-copy",children:I.reason})]}),o.jsx("span",{className:"pill locked",children:"Complete previous level"})]})});const ee=h.content.findIndex(b=>b.completionRequired!==!1&&!Z.includes(b.id)),G=ee===-1?h.content:h.content.slice(0,ee+1),Xe=h.content.length-G.length,Ie=ee===-1,D=G.length===0?-1:Math.min(q,G.length-1),Ae=D>=0?G[D]:void 0,zt=D>0,Zn=D>=0&&D<G.length-1,Ze=()=>{M(b=>Math.min(G.length-1,b+1))},er=()=>{S.allowed&&z(h)},Yr=b=>{const $=F.find(H=>H.contentStepId===b.id);if(b.id.endsWith("-ordinary-business-life"))return o.jsx(Ah,{content:b,completed:Z.includes(b.id),onCompleteContent:U},b.id);if(b.kind==="customHtml"&&$){const H=O.some(Be=>Be.activityId===$.id&&Be.completed),xe=Z.includes(b.id),ae=le===$.id;return o.jsxs("div",{className:"linked-step-activity",children:[o.jsx(mc,{htmlBlock:b,completedContentIds:Z,onCompleteContent:U}),o.jsxs("section",{className:"discussion-launch-panel","aria-label":"Open discussion forum activity",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Forum activity"}),o.jsx("h3",{children:$.title}),o.jsx("p",{children:"Click the image to open the forum. Add your own post, then reply to two course participants. When your contribution is complete, the Continue button will unlock."})]}),o.jsxs("button",{className:"discussion-image-button",type:"button",onClick:()=>fe($.id),"aria-label":"Open the Step 4 discussion forum",children:[o.jsx("img",{src:bh,alt:""}),o.jsx("span",{children:"Open discussion forum"})]}),o.jsxs("div",{className:"discussion-step-actions",children:[o.jsx("button",{className:H&&!xe?"primary-button":"secondary-button",type:"button",disabled:!H||xe,onClick:()=>U(b.id),children:xe?"Step complete":H?"Continue":"Complete discussion first"}),o.jsx("span",{className:H?"status success":"status",children:H?"Forum contribution complete. Press Continue to unlock the next step.":"Required: one post and replies to two course participants."})]})]}),ae?o.jsxs("div",{className:"discussion-modal",role:"dialog","aria-modal":"true","aria-label":$.title,children:[o.jsx("button",{className:"discussion-modal-backdrop",type:"button","aria-label":"Close discussion forum",onClick:()=>fe(null)}),o.jsxs("div",{className:"discussion-modal-card",children:[o.jsxs("button",{className:"discussion-modal-close",type:"button",onClick:()=>fe(null),"aria-label":"Close discussion forum",children:[o.jsx(Qo,{size:18}),"Close"]}),o.jsx("img",{className:"discussion-popup-hero",src:kh,alt:""}),o.jsx(ac,{activity:$,courseId:t.id,lessonId:h.id,enrolment:C,identity:e,completed:H,discussionPosts:N,discussionReplies:P,onComplete:(Be,be,_e)=>{A(Be,be,_e)},onAddPost:V,onAddReply:B})]})]}):null]},b.id)}return b.kind==="customHtml"?o.jsx(mc,{htmlBlock:b,completedContentIds:Z,onCompleteContent:U},b.id):o.jsx(_h,{content:b,completed:Z.includes(b.id),onCompleteContent:U,onContinueContent:Ze},b.id)};return o.jsxs("main",{className:"lesson-layout",children:[o.jsxs("div",{className:i?"mobile-drawer open":"mobile-drawer",children:[o.jsx("button",{className:"close-drawer",onClick:()=>l(!1),"aria-label":"Close session list",children:o.jsx(Qo,{size:19})}),o.jsx(lc,{courseLessons:v,courseModules:x,activeLessonId:h.id,lockStates:K,onSelect:b=>{a(b),l(!1)}})]}),o.jsx(lc,{courseLessons:v,courseModules:x,activeLessonId:h.id,lockStates:K,onSelect:a}),o.jsxs("article",{className:"lesson-main",children:[o.jsxs("button",{className:"drawer-trigger",onClick:()=>l(!0),children:[o.jsx(Pf,{size:18}),"Sessions"]}),o.jsx("p",{className:"eyebrow",children:t.title}),o.jsx("h2",{children:h.title}),o.jsx("p",{className:"lesson-summary",children:h.summary}),h.imageUrl?o.jsx("figure",{className:"lesson-artwork",children:o.jsx("img",{src:h.imageUrl,alt:h.imageAlt??""})}):null,o.jsxs("section",{className:"lesson-carousel","aria-label":"Lesson steps",children:[o.jsxs("div",{className:"lesson-carousel-header",children:[o.jsxs("div",{children:[o.jsxs("span",{className:"carousel-step-count",children:["Step ",D+1," of ",h.content.length]}),Xe>0?o.jsxs("p",{children:[Xe," ",Xe===1?"step is":"steps are"," locked until you complete this step."]}):o.jsx("p",{children:"All lesson steps are unlocked."})]}),o.jsxs("div",{className:"carousel-controls",children:[o.jsx("button",{className:"carousel-nav-button",type:"button",disabled:!zt,onClick:()=>M(b=>Math.max(0,b-1)),children:"Previous"}),o.jsx("button",{className:"carousel-nav-button",type:"button",disabled:!Zn,onClick:()=>M(b=>Math.min(G.length-1,b+1)),children:"Next"})]})]}),o.jsx("div",{className:"carousel-step-tabs","aria-label":"Unlocked lesson step navigation",children:G.map((b,$)=>{const H=Z.includes(b.id);return o.jsxs("button",{className:["carousel-step-tab",$===D?"active":"",H?"complete":""].filter(Boolean).join(" "),type:"button",onClick:()=>M($),"aria-current":$===D?"step":void 0,children:[o.jsx("span",{className:"carousel-step-number",children:$+1}),o.jsx("span",{className:"carousel-step-title",children:b.title.replace(/^Step \d+:\s*/,"")})]},b.id)})}),o.jsx("div",{className:"lesson-carousel-stage",children:Ae?Yr(Ae):null})]}),Ie?E.map(b=>o.jsx(ac,{activity:b,courseId:t.id,lessonId:h.id,enrolment:C,identity:e,completed:O.some($=>$.activityId===b.id&&$.completed),discussionPosts:N,discussionReplies:P,onComplete:A,onAddPost:V,onAddReply:B},b.id)):E.length>0?o.jsxs("section",{className:"activity-panel locked-activity-panel",children:[o.jsxs("div",{className:"activity-heading",children:[o.jsx("h3",{children:"Activities locked"}),o.jsx(vi,{size:20})]}),o.jsx("p",{children:"Complete all required lesson steps before opening quizzes, discussions, or submissions."})]}):null,o.jsxs("section",{className:"completion-gate",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Session completion"}),o.jsxs("span",{children:[S.completed,"/",S.required," required steps and activities complete"]})]}),o.jsx("button",{className:"primary-button",disabled:!S.allowed,onClick:er,children:"Complete session"}),s.has(h.id)?o.jsx("p",{className:"status success",children:"Session completed."}):null]})]})]})},Yi=[{id:"course-builder",label:"Course builder",description:"Create courses, levels, sessions and teaching blocks."},{id:"submissions",label:"Submissions",description:"Review written responses and file submissions."},{id:"ai-review",label:"AI review queue",description:"Draft marks awaiting lecturer approval."},{id:"inactive",label:"Inactive learners",description:"Learners who need a reminder or pastoral follow-up."}],Ki=[["users","Users and roles","Assign learner, lecturer and administrator permissions."],["courses","Courses and lecturers","Connect levels, sessions and assigned lecturers."],["payments","Payments and access","Verify Wix orders, free access and enrolment codes."],["certificates","Certificates","Control certificate templates and issuing rules."],["codes","Enrolment codes","Create, pause and audit private access codes."],["ai","AI usage","Monitor usage limits and lecturer approval records."],["automations","Automation triggers","Connect welcome, reminder and completion emails."],["audit","Audit records","Review sensitive actions and export compliance logs."]],Rh=()=>{const t=[["Learner","Course","Level","Session","Status"],...je.map(i=>{var c,u;const l=ot.find(f=>f.id===i.moduleId),a=((c=vt.find(f=>f.lessonId===i.id))==null?void 0:c.status)??"notStarted";return[me.learner.displayName,((u=ft[0])==null?void 0:u.title)??"Faithonomics",(l==null?void 0:l.title)??"",i.title,a]})].map(i=>i.map(l=>`"${String(l).replace(/"/g,'""')}"`).join(",")).join(`
`),n=new Blob([t],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download="faithonomics-progress-report.csv",document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(r)},zh=()=>{var c;const[e,t]=k.useState("course-builder"),[n,r]=k.useState(""),[s,i]=k.useState([{id:"draft-faithonomics-core",title:((c=ft[0])==null?void 0:c.title)??"Faithonomics Course",levelCount:ot.length,sessionCount:je.length,status:"Published"}]),l=Yi.find(u=>u.id===e)??Yi[0],a=()=>{i(u=>[...u,{id:`draft-course-${Date.now()}`,title:`New Faithonomics Course ${u.length+1}`,levelCount:0,sessionCount:0,status:"Draft"}]),r("Draft course created. Add levels, sessions, media and activities before publishing.")};return o.jsxs("main",{className:"content-shell",children:[o.jsxs("section",{className:"dashboard-intro",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Lecturer workspace"}),o.jsx("h2",{children:(l==null?void 0:l.label)??"Course builder"})]}),o.jsxs("button",{className:"primary-button",onClick:Rh,children:[o.jsx(Vo,{size:18}),"Export CSV"]})]}),o.jsx("section",{className:"work-grid","aria-label":"Lecturer tools",children:Yi.map(u=>o.jsxs("button",{className:e===u.id?"work-card tool-card active":"work-card tool-card",onClick:()=>{t(u.id),r("")},children:[o.jsx("h3",{children:u.label}),o.jsx("p",{children:u.description})]},u.id))}),o.jsxs("section",{className:"workspace-panel",children:[e==="course-builder"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"panel-heading",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Builder"}),o.jsx("h3",{children:"Create or edit courses"})]}),o.jsx("button",{className:"primary-button",onClick:a,children:"Create course"})]}),o.jsx("div",{className:"builder-list",children:s.map(u=>o.jsxs("article",{children:[o.jsx("strong",{children:u.title}),o.jsx("span",{children:u.status}),o.jsxs("span",{children:[u.levelCount," levels"]}),o.jsxs("span",{children:[u.sessionCount," sessions"]})]},u.id))})]}):null,e==="submissions"?o.jsx("div",{className:"builder-list",children:ql.map(u=>o.jsxs("article",{children:[o.jsx("strong",{children:u.status}),o.jsx("span",{children:u.responseText??"File submission"}),o.jsx("span",{children:u.submittedAt??"Draft"})]},u.id))}):null,e==="ai-review"?o.jsx("div",{className:"empty-state compact",children:"AI-assisted marks appear here until a lecturer approves or edits them."}):null,e==="inactive"?o.jsx("div",{className:"empty-state compact",children:"No inactive learners in the sample data. Reminder automations are ready to connect in Wix."}):null,n?o.jsx("p",{className:"status success",children:n}):null]})]})},Mh=()=>{const[e,t]=k.useState("users"),[n,r]=k.useState(""),s=Ki.find(([i])=>i===e)??Ki[0];return o.jsxs("main",{className:"content-shell",children:[o.jsxs("section",{className:"dashboard-intro",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Administration"}),o.jsx("h2",{children:"System controls"})]}),o.jsx("span",{className:"pill",children:"Backend enforced"})]}),o.jsx("section",{className:"admin-list","aria-label":"Administrator controls",children:Ki.map(([i,l])=>o.jsxs("button",{className:e===i?"active":"",onClick:()=>{t(i),r("")},children:[o.jsx(Ld,{size:18}),l]},i))}),o.jsxs("section",{className:"workspace-panel",children:[o.jsxs("div",{className:"panel-heading",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Control panel"}),o.jsx("h3",{children:(s==null?void 0:s[1])??"Users and roles"})]}),o.jsx("button",{className:"primary-button",onClick:()=>r("System control saved for backend review."),children:"Save control"})]}),o.jsx("p",{children:(s==null?void 0:s[2])??"Manage system settings."}),o.jsxs("div",{className:"control-metrics",children:[o.jsxs("span",{children:[ot.length," levels"]}),o.jsxs("span",{children:[je.length," sessions"]}),o.jsxs("span",{children:[ql.length," submissions"]})]}),n?o.jsx("p",{className:"status success",children:n}):null]})]})},$h=()=>{const e=()=>{const r=ft[0];if(!r)return[];const s=ot.filter(i=>i.courseId===r.id);return je.filter(i=>i.courseId===r.id).map(i=>{var l,a,c;return{learnerName:me.learner.displayName,courseTitle:r.title,moduleTitle:((l=s.find(u=>u.id===i.moduleId))==null?void 0:l.title)??"Unassigned",lessonTitle:i.title,completionStatus:((a=vt.find(u=>u.lessonId===i.id))==null?void 0:a.status)??"notStarted",score:null,lastActivityAt:((c=vt.find(u=>u.lessonId===i.id))==null?void 0:c.lastActivityAt)??null}})},[t,n]=k.useState(e);return k.useEffect(()=>{var s;let r=!0;return Fe.buildReportRows((s=ft[0])==null?void 0:s.id).then(i=>{r&&n(i)}).catch(()=>{r&&n(e())}),()=>{r=!1}},[]),o.jsxs("main",{className:"content-shell",children:[o.jsx("section",{className:"dashboard-intro",children:o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Reports"}),o.jsx("h2",{children:"Learner progress"})]})}),o.jsxs("div",{className:"report-table",role:"table","aria-label":"Progress report",children:[o.jsxs("div",{role:"row",className:"report-row head",children:[o.jsx("span",{children:"Learner"}),o.jsx("span",{children:"Level"}),o.jsx("span",{children:"Session"}),o.jsx("span",{children:"Status"})]}),t.map(r=>o.jsxs("div",{role:"row",className:"report-row",children:[o.jsx("span",{children:r.learnerName}),o.jsx("span",{children:r.moduleTitle}),o.jsx("span",{children:r.lessonTitle}),o.jsx("span",{children:r.completionStatus})]},`${r.learnerName}-${r.lessonTitle}`))]})]})},Fh=()=>{var d,p;const[e,t]=k.useState(me.learner),[n,r]=k.useState("learner"),[s,i]=k.useState(((d=ft[0])==null?void 0:d.id)??""),[l,a]=k.useState(((p=je[0])==null?void 0:p.id)??""),[c,u]=k.useState(null),[f,g]=k.useState(null),[v,x]=k.useState(null),[y,h]=k.useState(()=>new Set(vt.filter(w=>w.status==="completed").map(w=>w.lessonId))),[C,m]=k.useState(!1);return{identity:e,setIdentity:t,view:n,setView:r,activeCourseId:s,setActiveCourseId:i,activeLessonId:l,setActiveLessonId:a,activeLevelId:c,setActiveLevelId:u,selectedLoginLevelId:f,setSelectedLoginLevelId:g,pendingIntroSlideshowLevelId:v,setPendingIntroSlideshowLevelId:x,completedLessonIds:y,setCompletedLessonIds:h,drawerOpen:C,setDrawerOpen:m}},Oh=()=>{const e=Fh(),t=ft.find(a=>a.id===e.activeCourseId)??ft[0],n=ot.find(a=>a.id===e.activeLevelId)??null,r=(a,c)=>{e.setActiveCourseId(a),e.setActiveLessonId(c),e.setView("lesson")},s=a=>{var u,f;const c=je.filter(g=>g.moduleId===a.moduleId).sort((g,v)=>g.sequence-v.sequence)[0];e.setIdentity(me.learner),e.setActiveCourseId(((u=ft[0])==null?void 0:u.id)??""),e.setActiveLessonId((c==null?void 0:c.id)??((f=je[0])==null?void 0:f.id)??""),e.setActiveLevelId(a.moduleId),e.setSelectedLoginLevelId(null),e.setPendingIntroSlideshowLevelId(a.moduleId),e.setView("learner")},i=()=>{e.setActiveLevelId(null),e.setSelectedLoginLevelId(null),e.setPendingIntroSlideshowLevelId(null),e.setIdentity(me.learner),e.setView("learner")},l=a=>{e.setCompletedLessonIds(c=>{const u=new Set(c);return u.add(a),u})};return e.activeLevelId?o.jsxs("div",{className:"app-shell",children:[o.jsx(Rf,{identity:e.identity,view:e.view,setView:e.setView,onIdentityChange:e.setIdentity,activeLevelTitle:(n==null?void 0:n.title)??null,onLogout:i}),e.view==="learner"?o.jsx(lh,{identity:e.identity,activeLevelId:e.activeLevelId,completedLessonIds:e.completedLessonIds,pendingIntroSlideshowLevelId:e.pendingIntroSlideshowLevelId,onIntroSlideshowHandled:()=>e.setPendingIntroSlideshowLevelId(null),onOpenLesson:r}):null,e.view==="lesson"&&t?o.jsx(Lh,{identity:e.identity,course:t,lessonId:e.activeLessonId,activeLevelId:e.activeLevelId,completedLessonIds:e.completedLessonIds,drawerOpen:e.drawerOpen,setDrawerOpen:e.setDrawerOpen,onSelectLesson:e.setActiveLessonId,onCompleteLesson:l,onReturnToDashboard:()=>e.setView("learner")}):null,e.view==="lecturer"?o.jsx(zh,{}):null,e.view==="admin"?o.jsx(Mh,{}):null,e.view==="reports"?o.jsx($h,{}):null,o.jsxs("footer",{className:"site-footer",children:[o.jsx(Sf,{size:18}),"Faithonomics Economic Discipleship"]})]}):o.jsx("div",{className:"app-shell",children:e.selectedLoginLevelId?o.jsx(ch,{initialModuleId:e.selectedLoginLevelId,onBack:()=>e.setSelectedLoginLevelId(null),onLogin:s}):o.jsx(sh,{onSelectLevel:e.setSelectedLoginLevelId})})},Wd=document.getElementById("root");if(!Wd)throw new Error("Root element was not found.");Ji.createRoot(Wd).render(o.jsx(lp.StrictMode,{children:o.jsx(Oh,{})}));
