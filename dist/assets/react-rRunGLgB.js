import{g as tt}from"./classnames-ELZfJkp_.js";var P={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D;function et(){if(D)return d;D=1;var v=Symbol.for("react.transitional.element"),C=Symbol.for("react.fragment");function T(A,p,a){var R=null;if(a!==void 0&&(R=""+a),p.key!==void 0&&(R=""+p.key),"key"in p){a={};for(var y in p)y!=="key"&&(a[y]=p[y])}else a=p;return p=a.ref,{$$typeof:v,type:A,key:R,ref:p!==void 0?p:null,props:a}}return d.Fragment=C,d.jsx=T,d.jsxs=T,d}var J;function rt(){return J||(J=1,P.exports=et()),P.exports}var it=rt(),O={exports:{}},u={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b;function nt(){if(b)return u;b=1;var v=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),a=Symbol.for("react.consumer"),R=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),B=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),$=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,Y={};function l(t,e,r){this.props=t,this.context=e,this.refs=Y,this.updater=r||g}l.prototype.isReactComponent={},l.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},l.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function N(){}N.prototype=l.prototype;function w(t,e,r){this.props=t,this.context=e,this.refs=Y,this.updater=r||g}var S=w.prototype=new N;S.constructor=w,k(S,l.prototype),S.isPureReactComponent=!0;var M=Array.isArray,i={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function x(t,e,r,n,s,f){return r=f.ref,{$$typeof:v,type:t,key:e,ref:r!==void 0?r:null,props:f}}function Q(t,e){return x(t.type,e,void 0,void 0,void 0,t.props)}function j(t){return typeof t=="object"&&t!==null&&t.$$typeof===v}function X(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var L=/\/+/g;function h(t,e){return typeof t=="object"&&t!==null&&t.key!=null?X(""+t.key):e.toString(36)}function I(){}function Z(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(I,I):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function E(t,e,r,n,s){var f=typeof t;(f==="undefined"||f==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(f){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case v:case C:o=!0;break;case H:return o=t._init,E(o(t._payload),e,r,n,s)}}if(o)return s=s(t),o=n===""?"."+h(t,0):n,M(s)?(r="",o!=null&&(r=o.replace(L,"$&/")+"/"),E(s,e,r,"",function(V){return V})):s!=null&&(j(s)&&(s=Q(s,r+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(L,"$&/")+"/")+o)),e.push(s)),1;o=0;var _=n===""?".":n+":";if(M(t))for(var c=0;c<t.length;c++)n=t[c],f=_+h(n,c),o+=E(n,e,r,f,s);else if(c=W(t),typeof c=="function")for(t=c.call(t),c=0;!(n=t.next()).done;)n=n.value,f=_+h(n,c++),o+=E(n,e,r,f,s);else if(f==="object"){if(typeof t.then=="function")return E(Z(t),e,r,n,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return o}function m(t,e,r){if(t==null)return t;var n=[],s=0;return E(t,n,"","",function(f){return e.call(r,f,s++)}),n}function F(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var U=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function K(){}return u.Children={map:m,forEach:function(t,e,r){m(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return m(t,function(){e++}),e},toArray:function(t){return m(t,function(e){return e})||[]},only:function(t){if(!j(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},u.Component=l,u.Fragment=T,u.Profiler=p,u.PureComponent=w,u.StrictMode=A,u.Suspense=G,u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,u.act=function(){throw Error("act(...) is not supported in production builds of React.")},u.cache=function(t){return function(){return t.apply(null,arguments)}},u.cloneElement=function(t,e,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=k({},t.props),s=t.key,f=void 0;if(e!=null)for(o in e.ref!==void 0&&(f=void 0),e.key!==void 0&&(s=""+e.key),e)!q.call(e,o)||o==="key"||o==="__self"||o==="__source"||o==="ref"&&e.ref===void 0||(n[o]=e[o]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var _=Array(o),c=0;c<o;c++)_[c]=arguments[c+2];n.children=_}return x(t.type,s,void 0,void 0,f,n)},u.createContext=function(t){return t={$$typeof:R,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:a,_context:t},t},u.createElement=function(t,e,r){var n,s={},f=null;if(e!=null)for(n in e.key!==void 0&&(f=""+e.key),e)q.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(s[n]=e[n]);var o=arguments.length-2;if(o===1)s.children=r;else if(1<o){for(var _=Array(o),c=0;c<o;c++)_[c]=arguments[c+2];s.children=_}if(t&&t.defaultProps)for(n in o=t.defaultProps,o)s[n]===void 0&&(s[n]=o[n]);return x(t,f,void 0,void 0,null,s)},u.createRef=function(){return{current:null}},u.forwardRef=function(t){return{$$typeof:y,render:t}},u.isValidElement=j,u.lazy=function(t){return{$$typeof:H,_payload:{_status:-1,_result:t},_init:F}},u.memo=function(t,e){return{$$typeof:B,type:t,compare:e===void 0?null:e}},u.startTransition=function(t){var e=i.T,r={};i.T=r;try{var n=t(),s=i.S;s!==null&&s(r,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(K,U)}catch(f){U(f)}finally{i.T=e}},u.unstable_useCacheRefresh=function(){return i.H.useCacheRefresh()},u.use=function(t){return i.H.use(t)},u.useActionState=function(t,e,r){return i.H.useActionState(t,e,r)},u.useCallback=function(t,e){return i.H.useCallback(t,e)},u.useContext=function(t){return i.H.useContext(t)},u.useDebugValue=function(){},u.useDeferredValue=function(t,e){return i.H.useDeferredValue(t,e)},u.useEffect=function(t,e){return i.H.useEffect(t,e)},u.useId=function(){return i.H.useId()},u.useImperativeHandle=function(t,e,r){return i.H.useImperativeHandle(t,e,r)},u.useInsertionEffect=function(t,e){return i.H.useInsertionEffect(t,e)},u.useLayoutEffect=function(t,e){return i.H.useLayoutEffect(t,e)},u.useMemo=function(t,e){return i.H.useMemo(t,e)},u.useOptimistic=function(t,e){return i.H.useOptimistic(t,e)},u.useReducer=function(t,e,r){return i.H.useReducer(t,e,r)},u.useRef=function(t){return i.H.useRef(t)},u.useState=function(t){return i.H.useState(t)},u.useSyncExternalStore=function(t,e,r){return i.H.useSyncExternalStore(t,e,r)},u.useTransition=function(){return i.H.useTransition()},u.version="19.0.0",u}var z;function ut(){return z||(z=1,O.exports=nt()),O.exports}var ot=ut();const ft=tt(ot);export{ft as R,ut as a,it as j,ot as r};
