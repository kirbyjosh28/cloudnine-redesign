var xS=Object.create;var kx=Object.defineProperty;var wS=Object.getOwnPropertyDescriptor;var SS=Object.getOwnPropertyNames;var CS=Object.getPrototypeOf,kS=Object.prototype.hasOwnProperty;var fi=(i,s)=>()=>{try{return s||i((s={exports:{}}).exports,s),s.exports}catch(u){throw s=0,u}};var ES=(i,s,u,f)=>{if(s&&typeof s=="object"||typeof s=="function")for(let h of SS(s))!kS.call(i,h)&&h!==u&&kx(i,h,{get:()=>s[h],enumerable:!(f=wS(s,h))||f.enumerable});return i};var kn=(i,s,u)=>(u=i!=null?xS(CS(i)):{},ES(s||!i||!i.__esModule?kx(u,"default",{value:i,enumerable:!0}):u,i));var Ex=fi((wt,L_)=>{"use strict";(function(){function i(m,R){Object.defineProperty(f.prototype,m,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",R[0],R[1])}})}function s(m){return m===null||typeof m!="object"?null:(m=ho&&m[ho]||m["@@iterator"],typeof m=="function"?m:null)}function u(m,R){m=(m=m.constructor)&&(m.displayName||m.name)||"ReactClass";var ee=m+"."+R;Eo[ee]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",R,m),Eo[ee]=!0)}function f(m,R,ee){this.props=m,this.context=R,this.refs=To,this.updater=ee||cn}function h(){}function g(m,R,ee){this.props=m,this.context=R,this.refs=To,this.updater=ee||cn}function k(){}function T(m){return""+m}function M(m){try{T(m);var R=!1}catch{R=!0}if(R){R=console;var ee=R.error,Z=typeof Symbol=="function"&&Symbol.toStringTag&&m[Symbol.toStringTag]||m.constructor.name||"Object";return ee.call(R,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Z),T(m)}}function ae(m){if(m==null)return null;if(typeof m=="function")return m.$$typeof===qe?null:m.displayName||m.name||null;if(typeof m=="string")return m;switch(m){case ke:return"Fragment";case Se:return"Profiler";case W:return"StrictMode";case en:return"Suspense";case jt:return"SuspenseList";case Fn:return"Activity";case Lo:return"ViewTransition"}if(typeof m=="object")switch(typeof m.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),m.$$typeof){case vt:return"Portal";case Mt:return m.displayName||"Context";case $e:return(m._context.displayName||"Context")+".Consumer";case En:var R=m.render;return m=m.displayName,m||(m=R.displayName||R.name||"",m=m!==""?"ForwardRef("+m+")":"ForwardRef"),m;case In:return R=m.displayName||null,R!==null?R:ae(m.type)||"Memo";case Pn:R=m._payload,m=m._init;try{return ae(m(R))}catch{}}return null}function B(m){if(m===ke)return"<>";if(typeof m=="object"&&m!==null&&m.$$typeof===Pn)return"<...>";try{var R=ae(m);return R?"<"+R+">":"<...>"}catch{return"<...>"}}function oe(){var m=xe.A;return m===null?null:m.getOwner()}function H(){return Error("react-stack-top-frame")}function Y(m){if(ie.call(m,"key")){var R=Object.getOwnPropertyDescriptor(m,"key").get;if(R&&R.isReactWarning)return!1}return m.key!==void 0}function S(m,R){function ee(){Yt||(Yt=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",R))}ee.isReactWarning=!0,Object.defineProperty(m,"key",{get:ee,configurable:!0})}function V(){var m=ae(this.type);return Ot[m]||(Ot[m]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),m=this.props.ref,m!==void 0?m:null}function I(m,R,ee,Z,le,we){var be=ee.ref;return m={$$typeof:me,type:m,key:R,props:ee,_owner:Z},(be!==void 0?be:null)!==null?Object.defineProperty(m,"ref",{enumerable:!1,get:V}):Object.defineProperty(m,"ref",{enumerable:!1,value:null}),m._store={},Object.defineProperty(m._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(m,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(m,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:le}),Object.defineProperty(m,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:we}),Object.freeze&&(Object.freeze(m.props),Object.freeze(m)),m}function F(m,R){return R=I(m.type,R,m.props,m._owner,m._debugStack,m._debugTask),m._store&&(R._store.validated=m._store.validated),R}function Ee(m){Ye(m)?m._store&&(m._store.validated=1):typeof m=="object"&&m!==null&&m.$$typeof===Pn&&(m._payload.status==="fulfilled"?Ye(m._payload.value)&&m._payload.value._store&&(m._payload.value._store.validated=1):m._store&&(m._store.validated=1))}function Ye(m){return typeof m=="object"&&m!==null&&m.$$typeof===me}function Ze(m){var R={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(ee){return R[ee]})}function It(m,R){return typeof m=="object"&&m!==null&&m.key!=null?(M(m.key),Ze(""+m.key)):R.toString(36)}function Vt(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(k,k):(m.status="pending",m.then(function(R){m.status==="pending"&&(m.status="fulfilled",m.value=R)},function(R){m.status==="pending"&&(m.status="rejected",m.reason=R)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Ce(m,R,ee,Z,le){var we=typeof m;(we==="undefined"||we==="boolean")&&(m=null);var be=!1;if(m===null)be=!0;else switch(we){case"bigint":case"string":case"number":be=!0;break;case"object":switch(m.$$typeof){case me:case vt:be=!0;break;case Pn:return be=m._init,Ce(be(m._payload),R,ee,Z,le)}}if(be){be=m,le=le(be);var Oe=Z===""?"."+It(be,0):Z;return ge(le)?(ee="",Oe!=null&&(ee=Oe.replace(X,"$&/")+"/"),Ce(le,R,ee,"",function(Ct){return Ct})):le!=null&&(Ye(le)&&(le.key!=null&&(be&&be.key===le.key||M(le.key)),ee=F(le,ee+(le.key==null||be&&be.key===le.key?"":(""+le.key).replace(X,"$&/")+"/")+Oe),Z!==""&&be!=null&&Ye(be)&&be.key==null&&be._store&&!be._store.validated&&(ee._store.validated=2),le=ee),R.push(le)),1}if(be=0,Oe=Z===""?".":Z+":",ge(m))for(var Ae=0;Ae<m.length;Ae++)Z=m[Ae],we=Oe+It(Z,Ae),be+=Ce(Z,R,ee,we,le);else if(Ae=s(m),typeof Ae=="function")for(Ae===m.entries&&(U||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),U=!0),m=Ae.call(m),Ae=0;!(Z=m.next()).done;)Z=Z.value,we=Oe+It(Z,Ae++),be+=Ce(Z,R,ee,we,le);else if(we==="object"){if(typeof m.then=="function")return Ce(Vt(m),R,ee,Z,le);throw R=String(m),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return be}function yt(m,R,ee){if(m==null)return m;var Z=[],le=0;return Ce(m,Z,"","",function(we){return R.call(ee,we,le++)}),Z}function _t(m){if(m._status===-1){var R=null,ee=null,Z=m._ioInfo;Z!=null&&(Z.start=Z.end=performance.now(),Z.value=new Promise(function(be,Oe){R=be,ee=Oe})),Z=m._result;var le=Z();if(le.then(function(be){if(m._status===0||m._status===-1){m._status=1,m._result=be;var Oe=m._ioInfo;if(Oe!=null){Oe.end=performance.now();var Ae=be?.default;R(Ae),Oe.value.status="fulfilled",Oe.value.value=Ae}le.status===void 0&&(le.status="fulfilled",le.value=be)}},function(be){if(m._status===0||m._status===-1){m._status=2,m._result=be;var Oe=m._ioInfo;Oe!=null&&(Oe.end=performance.now(),Oe.value.then(k,k),ee(be),Oe.value.status="rejected",Oe.value.reason=be),le.status===void 0&&(le.status="rejected",le.reason=be)}}),Z=m._ioInfo,Z!=null){var we=le.displayName;typeof we=="string"&&(Z.name=we)}m._status===-1&&(m._status=0,m._result=le)}if(m._status===1)return Z=m._result,Z===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,Z),"default"in Z||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,Z),Z.default;throw m._result}function Xe(){var m=xe.H;return m===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),m}function at(){xe.asyncTransitions--}function Tt(m){var R=xe.T,ee={};ee.types=R!==null?R.types:null,ee._updatedFibers=new Set,xe.T=ee;try{var Z=m(),le=xe.S;le!==null&&le(ee,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&(xe.asyncTransitions++,Z.then(at,at),Z.then(k,G))}catch(we){G(we)}finally{R===null&&ee._updatedFibers&&(m=ee._updatedFibers.size,ee._updatedFibers.clear(),10<m&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),R!==null&&ee.types!==null&&(R.types!==null&&R.types!==ee.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),R.types=ee.types),xe.T=R}}function Je(m){var R=xe.T;if(R!==null){var ee=R.types;ee===null?R.types=[m]:ee.indexOf(m)===-1&&ee.push(m)}else xe.asyncTransitions===0&&console.error("addTransitionType can only be called inside a `startTransition()` callback. It must be associated with a specific Transition."),Tt(Je.bind(null,m))}function it(m){if(De===null)try{var R=("require"+Math.random()).slice(0,7);De=(L_&&L_[R]).call(L_,"timers").setImmediate}catch{De=function(Z){se===!1&&(se=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var le=new MessageChannel;le.port1.onmessage=Z,le.port2.postMessage(void 0)}}return De(m)}function re(m){return 1<m.length&&typeof AggregateError=="function"?new AggregateError(m):m[0]}function ye(m,R){R!==ze-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),ze=R}function Te(m,R,ee){var Z=xe.actQueue;if(Z!==null)if(Z.length!==0)try{ne(Z),it(function(){return Te(m,R,ee)});return}catch(le){xe.thrownErrors.push(le)}else xe.actQueue=null;0<xe.thrownErrors.length?(Z=re(xe.thrownErrors),xe.thrownErrors.length=0,ee(Z)):R(m)}function ne(m){if(!Ve){Ve=!0;var R=0;try{for(;R<m.length;R++){var ee=m[R];do{xe.didUsePromise=!1;var Z=ee(!1);if(Z!==null){if(xe.didUsePromise){m[R]=ee,m.splice(0,R);return}ee=Z}else break}while(!0)}m.length=0}catch(le){m.splice(0,R+1),xe.thrownErrors.push(le)}finally{Ve=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var me=Symbol.for("react.transitional.element"),vt=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),$e=Symbol.for("react.consumer"),Mt=Symbol.for("react.context"),En=Symbol.for("react.forward_ref"),en=Symbol.for("react.suspense"),jt=Symbol.for("react.suspense_list"),In=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Fn=Symbol.for("react.activity"),Lo=Symbol.for("react.view_transition"),ho=Symbol.iterator,Eo={},cn={isMounted:function(){return!1},enqueueForceUpdate:function(m){u(m,"forceUpdate")},enqueueReplaceState:function(m){u(m,"replaceState")},enqueueSetState:function(m){u(m,"setState")}},Rl=Object.assign,To={};Object.freeze(To),f.prototype.isReactComponent={},f.prototype.setState=function(m,R){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,R,"setState")},f.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};var tt={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(St in tt)tt.hasOwnProperty(St)&&i(St,tt[St]);h.prototype=f.prototype,tt=g.prototype=new h,tt.constructor=g,Rl(tt,f.prototype),tt.isPureReactComponent=!0;var ge=Array.isArray,qe=Symbol.for("react.client.reference"),xe={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},ie=Object.prototype.hasOwnProperty,nt=console.createTask?console.createTask:function(){return null};tt={react_stack_bottom_frame:function(m){return m()}};var Yt,qt,Ot={},Ie=tt.react_stack_bottom_frame.bind(tt,H)(),et=nt(B(H)),U=!1,X=/\/+/g,G=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},se=!1,De=null,ze=0,de=!1,Ve=!1,ft=typeof queueMicrotask=="function"?function(m){queueMicrotask(function(){return queueMicrotask(m)})}:it;tt=Object.freeze({__proto__:null,c:function(m){return Xe().useMemoCache(m)}});var St={map:yt,forEach:function(m,R,ee){yt(m,function(){R.apply(this,arguments)},ee)},count:function(m){var R=0;return yt(m,function(){R++}),R},toArray:function(m){return yt(m,function(R){return R})||[]},only:function(m){if(!Ye(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};wt.Activity=Fn,wt.Children=St,wt.Component=f,wt.Fragment=ke,wt.Profiler=Se,wt.PureComponent=g,wt.StrictMode=W,wt.Suspense=en,wt.ViewTransition=Lo,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xe,wt.__COMPILER_RUNTIME=tt,wt.act=function(m){var R=xe.actQueue,ee=ze;ze++;var Z=xe.actQueue=R!==null?R:[],le=!1;try{var we=m()}catch(Ae){xe.thrownErrors.push(Ae)}if(0<xe.thrownErrors.length)throw ye(R,ee),m=re(xe.thrownErrors),xe.thrownErrors.length=0,m;if(we!==null&&typeof we=="object"&&typeof we.then=="function"){var be=we;return ft(function(){le||de||(de=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Ae,Ct){le=!0,be.then(function(Fe){if(ye(R,ee),ee===0){try{ne(Z),it(function(){return Te(Fe,Ae,Ct)})}catch(Tn){xe.thrownErrors.push(Tn)}if(0<xe.thrownErrors.length){var tn=re(xe.thrownErrors);xe.thrownErrors.length=0,Ct(tn)}}else Ae(Fe)},function(Fe){ye(R,ee),0<xe.thrownErrors.length&&(Fe=re(xe.thrownErrors),xe.thrownErrors.length=0),Ct(Fe)})}}}var Oe=we;if(ye(R,ee),ee===0&&(ne(Z),Z.length!==0&&ft(function(){le||de||(de=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),xe.actQueue=null),0<xe.thrownErrors.length)throw m=re(xe.thrownErrors),xe.thrownErrors.length=0,m;return{then:function(Ae,Ct){le=!0,ee===0?(xe.actQueue=Z,it(function(){return Te(Oe,Ae,Ct)})):Ae(Oe)}}},wt.addTransitionType=Je,wt.cache=function(m){return function(){return m.apply(null,arguments)}},wt.cacheSignal=function(){return null},wt.captureOwnerStack=function(){var m=xe.getCurrentStack;return m===null?null:m()},wt.cloneElement=function(m,R,ee){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var Z=Rl({},m.props),le=m.key,we=m._owner;if(R!=null){var be;e:{if(ie.call(R,"ref")&&(be=Object.getOwnPropertyDescriptor(R,"ref").get)&&be.isReactWarning){be=!1;break e}be=R.ref!==void 0}be&&(we=oe()),Y(R)&&(M(R.key),le=""+R.key);for(Oe in R)!ie.call(R,Oe)||Oe==="key"||Oe==="__self"||Oe==="__source"||Oe==="ref"&&R.ref===void 0||(Z[Oe]=R[Oe])}var Oe=arguments.length-2;if(Oe===1)Z.children=ee;else if(1<Oe){be=Array(Oe);for(var Ae=0;Ae<Oe;Ae++)be[Ae]=arguments[Ae+2];Z.children=be}for(Z=I(m.type,le,Z,we,m._debugStack,m._debugTask),le=2;le<arguments.length;le++)Ee(arguments[le]);return Z},wt.createContext=function(m){return m={$$typeof:Mt,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:$e,_context:m},m._currentRenderer=null,m._currentRenderer2=null,m},wt.createElement=function(m,R,ee){for(var Z=2;Z<arguments.length;Z++)Ee(arguments[Z]);var le;Z={};var we=null;if(R!=null)for(le in qt||!("__self"in R)||"key"in R||(qt=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),Y(R)&&(M(R.key),we=""+R.key),R)ie.call(R,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(Z[le]=R[le]);var be=arguments.length-2;if(be===1)Z.children=ee;else if(1<be){for(var Oe=Array(be),Ae=0;Ae<be;Ae++)Oe[Ae]=arguments[Ae+2];Object.freeze&&Object.freeze(Oe),Z.children=Oe}if(m&&m.defaultProps)for(le in be=m.defaultProps,be)Z[le]===void 0&&(Z[le]=be[le]);return we&&S(Z,typeof m=="function"?m.displayName||m.name||"Unknown":m),(le=1e4>xe.recentlyCreatedOwnerStacks++)?(Oe=Error.stackTraceLimit,Error.stackTraceLimit=10,be=Error("react-stack-top-frame"),Error.stackTraceLimit=Oe):be=Ie,I(m,we,Z,oe(),be,le?nt(B(m)):et)},wt.createRef=function(){var m={current:null};return Object.seal(m),m},wt.forwardRef=function(m){m!=null&&m.$$typeof===In?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof m!="function"?console.error("forwardRef requires a render function but was given %s.",m===null?"null":typeof m):m.length!==0&&m.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",m.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),m!=null&&m.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var R={$$typeof:En,render:m},ee;return Object.defineProperty(R,"displayName",{enumerable:!1,configurable:!0,get:function(){return ee},set:function(Z){ee=Z,m.name||m.displayName||(Object.defineProperty(m,"name",{value:Z}),m.displayName=Z)}}),R},wt.isValidElement=Ye,wt.lazy=function(m){m={_status:-1,_result:m};var R={$$typeof:Pn,_payload:m,_init:_t},ee={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return m._ioInfo=ee,R._debugInfo=[{awaited:ee}],R},wt.memo=function(m,R){m==null&&console.error("memo: The first argument must be a component. Instead received: %s",m===null?"null":typeof m),R={$$typeof:In,type:m,compare:R===void 0?null:R};var ee;return Object.defineProperty(R,"displayName",{enumerable:!1,configurable:!0,get:function(){return ee},set:function(Z){ee=Z,m.name||m.displayName||(Object.defineProperty(m,"name",{value:Z}),m.displayName=Z)}}),R},wt.startTransition=Tt,wt.unstable_useCacheRefresh=function(){return Xe().useCacheRefresh()},wt.use=function(m){return Xe().use(m)},wt.useActionState=function(m,R,ee){return Xe().useActionState(m,R,ee)},wt.useCallback=function(m,R){return Xe().useCallback(m,R)},wt.useContext=function(m){var R=Xe();return m.$$typeof===$e&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),R.useContext(m)},wt.useDebugValue=function(m,R){return Xe().useDebugValue(m,R)},wt.useDeferredValue=function(m,R){return Xe().useDeferredValue(m,R)},wt.useEffect=function(m,R){return m==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),Xe().useEffect(m,R)},wt.useEffectEvent=function(m){return Xe().useEffectEvent(m)},wt.useId=function(){return Xe().useId()},wt.useImperativeHandle=function(m,R,ee){return Xe().useImperativeHandle(m,R,ee)},wt.useInsertionEffect=function(m,R){return m==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),Xe().useInsertionEffect(m,R)},wt.useLayoutEffect=function(m,R){return m==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),Xe().useLayoutEffect(m,R)},wt.useMemo=function(m,R){return Xe().useMemo(m,R)},wt.useOptimistic=function(m,R){return Xe().useOptimistic(m,R)},wt.useReducer=function(m,R,ee){return Xe().useReducer(m,R,ee)},wt.useRef=function(m){return Xe().useRef(m)},wt.useState=function(m){return Xe().useState(m)},wt.useSyncExternalStore=function(m,R,ee){return Xe().useSyncExternalStore(m,R,ee)},wt.useTransition=function(){return Xe().useTransition()},wt.version="19.3.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var Gl=fi((q9,Tx)=>{"use strict";Tx.exports=Ex()});var Mx=fi(Hn=>{"use strict";(function(){function i(){if(Ze=!1,yt){var re=Hn.unstable_now();at=re;var ye=!0;try{e:{Ee=!1,Ye&&(Ye=!1,Vt(_t),_t=-1),F=!0;var Te=I;try{t:{for(g(re),V=u(H);V!==null&&!(V.expirationTime>re&&T());){var ne=V.callback;if(typeof ne=="function"){V.callback=null,I=V.priorityLevel;var me=ne(V.expirationTime<=re);if(re=Hn.unstable_now(),typeof me=="function"){V.callback=me,g(re),ye=!0;break t}V===u(H)&&f(H),g(re)}else f(H);V=u(H)}if(V!==null)ye=!0;else{var vt=u(Y);vt!==null&&M(k,vt.startTime-re),ye=!1}}break e}finally{V=null,I=Te,F=!1}ye=void 0}}finally{ye?Tt():yt=!1}}}function s(re,ye){var Te=re.length;re.push(ye);e:for(;0<Te;){var ne=Te-1>>>1,me=re[ne];if(0<h(me,ye))re[ne]=ye,re[Te]=me,Te=ne;else break e}}function u(re){return re.length===0?null:re[0]}function f(re){if(re.length===0)return null;var ye=re[0],Te=re.pop();if(Te!==ye){re[0]=Te;e:for(var ne=0,me=re.length,vt=me>>>1;ne<vt;){var ke=2*(ne+1)-1,W=re[ke],Se=ke+1,$e=re[Se];if(0>h(W,Te))Se<me&&0>h($e,W)?(re[ne]=$e,re[Se]=Te,ne=Se):(re[ne]=W,re[ke]=Te,ne=ke);else if(Se<me&&0>h($e,Te))re[ne]=$e,re[Se]=Te,ne=Se;else break e}}return ye}function h(re,ye){var Te=re.sortIndex-ye.sortIndex;return Te!==0?Te:re.id-ye.id}function g(re){for(var ye=u(Y);ye!==null;){if(ye.callback===null)f(Y);else if(ye.startTime<=re)f(Y),ye.sortIndex=ye.expirationTime,s(H,ye);else break;ye=u(Y)}}function k(re){if(Ye=!1,g(re),!Ee)if(u(H)!==null)Ee=!0,yt||(yt=!0,Tt());else{var ye=u(Y);ye!==null&&M(k,ye.startTime-re)}}function T(){return Ze?!0:!(Hn.unstable_now()-at<Xe)}function M(re,ye){_t=It(function(){re(Hn.unstable_now())},ye)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),Hn.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var ae=performance;Hn.unstable_now=function(){return ae.now()}}else{var B=Date,oe=B.now();Hn.unstable_now=function(){return B.now()-oe}}var H=[],Y=[],S=1,V=null,I=3,F=!1,Ee=!1,Ye=!1,Ze=!1,It=typeof setTimeout=="function"?setTimeout:null,Vt=typeof clearTimeout=="function"?clearTimeout:null,Ce=typeof setImmediate<"u"?setImmediate:null,yt=!1,_t=-1,Xe=5,at=-1;if(typeof Ce=="function")var Tt=function(){Ce(i)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,it=Je.port2;Je.port1.onmessage=i,Tt=function(){it.postMessage(null)}}else Tt=function(){It(i,0)};Hn.unstable_IdlePriority=5,Hn.unstable_ImmediatePriority=1,Hn.unstable_LowPriority=4,Hn.unstable_NormalPriority=3,Hn.unstable_Profiling=null,Hn.unstable_UserBlockingPriority=2,Hn.unstable_cancelCallback=function(re){re.callback=null},Hn.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xe=0<re?Math.floor(1e3/re):5},Hn.unstable_getCurrentPriorityLevel=function(){return I},Hn.unstable_next=function(re){switch(I){case 1:case 2:case 3:var ye=3;break;default:ye=I}var Te=I;I=ye;try{return re()}finally{I=Te}},Hn.unstable_requestPaint=function(){Ze=!0},Hn.unstable_runWithPriority=function(re,ye){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var Te=I;I=re;try{return ye()}finally{I=Te}},Hn.unstable_scheduleCallback=function(re,ye,Te){var ne=Hn.unstable_now();switch(typeof Te=="object"&&Te!==null?(Te=Te.delay,Te=typeof Te=="number"&&0<Te?ne+Te:ne):Te=ne,re){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Te+me,re={id:S++,callback:ye,priorityLevel:re,startTime:Te,expirationTime:me,sortIndex:-1},Te>ne?(re.sortIndex=Te,s(Y,re),u(H)===null&&re===u(Y)&&(Ye?(Vt(_t),_t=-1):Ye=!0,M(k,Te-ne))):(re.sortIndex=me,s(H,re),Ee||F||(Ee=!0,yt||(yt=!0,Tt()))),re},Hn.unstable_shouldYield=T,Hn.unstable_wrapCallback=function(re){var ye=I;return function(){var Te=I;I=ye;try{return re.apply(this,arguments)}finally{I=Te}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var Dx=fi((G9,Rx)=>{"use strict";Rx.exports=Mx()});var Ox=fi(Yo=>{"use strict";(function(){function i(){}function s(Y){return""+Y}function u(Y,S,V){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;if(I==null)I=null;else if(I===oe)I=oe;else{try{s(I);var F=!1}catch{F=!0}F&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol=="function"&&Symbol.toStringTag&&I[Symbol.toStringTag]||I.constructor.name||"Object"),s(I)),I=""+I}return{$$typeof:ae,key:I,children:Y,containerInfo:S,implementation:V}}function f(Y,S){if(Y==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}function h(Y){return Y===null?"`null`":Y===void 0?"`undefined`":Y===""?"an empty string":'something with type "'+typeof Y+'"'}function g(Y){return Y===null?"`null`":Y===void 0?"`undefined`":Y===""?"an empty string":typeof Y=="string"?JSON.stringify(Y):typeof Y=="number"?"`"+Y+"`":'something with type "'+typeof Y+'"'}function k(){var Y=H.H;return Y===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),Y}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var T=Gl(),M={d:{f:i,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},ae=Symbol.for("react.portal"),B=Symbol.for("react.recoverable"),oe=Symbol.for("react.optimistic_key"),H=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map=="function"&&Map.prototype!=null&&typeof Map.prototype.forEach=="function"&&typeof Set=="function"&&Set.prototype!=null&&typeof Set.prototype.clear=="function"&&typeof Set.prototype.forEach=="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),Yo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,Yo.browser=function(Y){return{$$typeof:B,_reason:Y}},Yo.createPortal=function(Y,S){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error("Target container is not a DOM element.");return u(Y,S,null,V)},Yo.flushSync=function(Y){var S=H.T,V=M.p;try{if(H.T=null,M.p=2,Y)return Y()}finally{H.T=S,M.p=V,M.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},Yo.preconnect=function(Y,S){typeof Y=="string"&&Y?S!=null&&typeof S!="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",g(S)):S!=null&&typeof S.crossOrigin!="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",h(S.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",h(Y)),typeof Y=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,M.d.C(Y,S))},Yo.prefetchDNS=function(Y){if(typeof Y!="string"||!Y)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",h(Y));else if(1<arguments.length){var S=arguments[1];typeof S=="object"&&S.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",g(S)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",g(S))}typeof Y=="string"&&M.d.D(Y)},Yo.preinit=function(Y,S){if(typeof Y=="string"&&Y?S==null||typeof S!="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",g(S)):S.as!=="style"&&S.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',g(S.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",h(Y)),typeof Y=="string"&&S&&typeof S.as=="string"){var V=S.as,I=f(V,S.crossOrigin),F=typeof S.integrity=="string"?S.integrity:void 0,Ee=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;V==="style"?M.d.S(Y,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:I,integrity:F,fetchPriority:Ee}):V==="script"&&M.d.X(Y,{crossOrigin:I,integrity:F,fetchPriority:Ee,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},Yo.preinitModule=function(Y,S){var V="";typeof Y=="string"&&Y||(V+=" The `href` argument encountered was "+h(Y)+"."),S!==void 0&&typeof S!="object"?V+=" The `options` argument encountered was "+h(S)+".":S&&"as"in S&&S.as!=="script"&&(V+=" The `as` option encountered was "+g(S.as)+"."),V?console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",V):(V=S&&typeof S.as=="string"?S.as:"script",V)==="script"||(V=g(V),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',V,Y)),typeof Y=="string"&&(typeof S=="object"&&S!==null?(S.as==null||S.as==="script")&&(V=f(S.as,S.crossOrigin),M.d.M(Y,{crossOrigin:V,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})):S==null&&M.d.M(Y))},Yo.preload=function(Y,S){var V="";if(typeof Y=="string"&&Y||(V+=" The `href` argument encountered was "+h(Y)+"."),S==null||typeof S!="object"?V+=" The `options` argument encountered was "+h(S)+".":typeof S.as=="string"&&S.as||(V+=" The `as` option encountered was "+h(S.as)+"."),V&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',V),typeof Y=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){V=S.as;var I=f(V,S.crossOrigin);M.d.L(Y,V,{crossOrigin:I,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},Yo.preloadModule=function(Y,S){var V="";typeof Y=="string"&&Y||(V+=" The `href` argument encountered was "+h(Y)+"."),S!==void 0&&typeof S!="object"?V+=" The `options` argument encountered was "+h(S)+".":S&&"as"in S&&typeof S.as!="string"&&(V+=" The `as` option encountered was "+h(S.as)+"."),V&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',V),typeof Y=="string"&&(S?(V=f(S.as,S.crossOrigin),M.d.m(Y,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:V,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})):M.d.m(Y))},Yo.requestFormReset=function(Y){M.d.r(Y)},Yo.unstable_batchedUpdates=function(Y,S){return Y(S)},Yo.useFormState=function(Y,S,V){return k().useFormState(Y,S,V)},Yo.useFormStatus=function(){return k().useHostTransitionStatus()},Yo.version="19.3.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var B_=fi((W9,Ax)=>{"use strict";Ax.exports=Ox()});var Nx=fi($_=>{"use strict";(function(){function i(e,t){for(e=e.memoizedState;e!==null&&0<t;)e=e.next,t--;return e}function s(e,t,n,o){if(n>=t.length)return o;var l=t[n],a=po(e)?e.slice():At({},e);return a[l]=s(e[l],t,n+1,o),a}function u(e,t,n){if(t.length!==n.length)console.warn("copyWithRename() expects paths of the same length");else{for(var o=0;o<n.length-1;o++)if(t[o]!==n[o]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return f(e,t,n,0)}}function f(e,t,n,o){var l=t[o],a=po(e)?e.slice():At({},e);return o+1===t.length?(a[n[o]]=a[l],po(a)?a.splice(l,1):delete a[l]):a[l]=f(e[l],t,n,o+1),a}function h(e,t,n){var o=t[n],l=po(e)?e.slice():At({},e);return n+1===t.length?(po(l)?l.splice(o,1):delete l[o],l):(l[o]=h(e[o],t,n+1),l)}function g(){return!1}function k(){return null}function T(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function M(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function ae(){}function B(){}function oe(e){var t=[];return e.forEach(function(n){t.push(n)}),t.sort().join(", ")}function H(e,t,n,o){return new Ke(e,t,n,o)}function Y(e,t){e.context===Cr&&(Km(e.current,2,t,e,null,null),hc())}function S(e,t){if(Di!==null){var n=t.staleFamilies;t=t.updatedFamilies,Wu(),We(e.current,t,n),hc()}}function V(e){Di=e}function I(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function F(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Ee(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ye(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ze(e){if(F(e)!==e)throw Error("Unable to find node on an unmounted component.")}function It(e){var t=e.alternate;if(!t){if(t=F(e),t===null)throw Error("Unable to find node on an unmounted component.");return t!==e?null:e}for(var n=e,o=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(o=l.return,o!==null){n=o;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Ze(l),e;if(a===o)return Ze(l),t;a=a.sibling}throw Error("Unable to find node on an unmounted component.")}if(n.return!==o.return)n=l,o=a;else{for(var r=!1,c=l.child;c;){if(c===n){r=!0,n=l,o=a;break}if(c===o){r=!0,o=l,n=a;break}c=c.sibling}if(!r){for(c=a.child;c;){if(c===n){r=!0,n=a,o=l;break}if(c===o){r=!0,o=a,n=l;break}c=c.sibling}if(!r)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(n.alternate!==o)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(n.tag!==3)throw Error("Unable to find node on an unmounted component.");return n.stateNode.current===n?e:t}function Vt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Vt(e),t!==null)return t;e=e.sibling}return null}function Ce(e,t,n,o,l){yt(e.child,!1,t,n,o,l)}function yt(e,t,n,o,l,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,o,l,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&yt(e.child,t,n,o,l,a))return!0;e=e.sibling}return!1}function _t(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function Xe(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function at(e){var t=[null,null],n=_t(e);return n===null||Tt(t,e,n.child,{foundSelf:!1}),t}function Tt(e,t,n,o){for(;n!==null;){if(n===t)o.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(o.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Tt(e,t,n.child,o))return!0;n=n.sibling}return!1}function Je(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error("Expected to find a host node. This is a bug in React.")}}function it(e,t,n){return e===n?!0:e===t?(vc=e,!0):!1}function re(e,t,n){return e===n?(ip=e,!1):e===t?(ip!==null&&(vc=e),!0):!1}function ye(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Te(e,t,n){for(var o=0,l=e;l;l=n(l))o++;l=0;for(var a=t;a;a=n(a))l++;for(;0<o-l;)e=n(e),o--;for(;0<l-o;)t=n(t),l--;for(;o--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}function ne(e){return e===null||typeof e!="object"?null:(e=$2&&e[$2]||e["@@iterator"],typeof e=="function"?e:null)}function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===T6?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wc:return"Fragment";case rp:return"Profiler";case wh:return"StrictMode";case cp:return"Suspense";case up:return"SuspenseList";case dp:return"Activity";case fp:return"ViewTransition"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case xc:return"Portal";case ka:return e.displayName||"Context";case sp:return(e._context.displayName||"Context")+".Consumer";case Sh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ch:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case xl:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}function vt(e){return typeof e.tag=="number"?ke(e):typeof e.name=="string"?e.name:null}function ke(e){var t=e.type;switch(e.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(t._context.displayName||"Context")+".Consumer";case 10:return t.displayName||"Context";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(t);case 8:return t===wh?"StrictMode":"Mode";case 22:if(e.return!==null)return ke(e.return);break;case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 30:return"ViewTransition";case 1:case 0:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;break;case 29:if(t=e._debugInfo,t!=null){for(var n=t.length-1;0<=n;n--)if(typeof t[n].name=="string")return t[n].name}if(e.return!==null)return ke(e.return)}return null}function W(e){return{current:e}}function Se(e,t){0>Ei?console.error("Unexpected pop."):(t!==_p[Ei]&&console.error("Unexpected Fiber popped."),e.current=hp[Ei],hp[Ei]=null,_p[Ei]=null,Ei--)}function $e(e,t,n){Ei++,hp[Ei]=e.current,_p[Ei]=n,e.current=t}function Mt(e){return e===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),e}function En(e,t){$e(yr,t,e),$e(rd,e,e),$e(gr,null,e);var n=t.nodeType;switch(n){case 9:case 11:n=n===9?"#document":"#fragment",t=(t=t.documentElement)&&(t=t.namespaceURI)?Q5(t):Ii;break;default:if(n=t.tagName,t=t.namespaceURI)t=Q5(t),t=G5(t,n);else switch(n){case"svg":t=lu;break;case"math":t=M_;break;default:t=Ii}}n=n.toLowerCase(),n=Dl(null,n),n={context:t,ancestorInfo:n},Se(gr,e),$e(gr,n,e)}function en(e){Se(gr,e),Se(rd,e),Se(yr,e)}function jt(){return Mt(gr.current)}function In(e){var t=e.memoizedState;t!==null&&(iu._currentValue=t.memoizedState,$e(kh,e,e)),t=Mt(gr.current);var n=e.type,o=G5(t.context,n);n=Dl(t.ancestorInfo,n),o={context:o,ancestorInfo:n},t!==o&&($e(rd,e,e),$e(gr,o,e))}function Pn(e){rd.current===e&&(Se(gr,e),Se(rd,e)),kh.current===e&&(Se(kh,e),iu._currentValue=Ns)}function Fn(){}function Lo(){if(sd===0){H2=console.log,U2=console.info,I2=console.warn,j2=console.error,Y2=console.group,X2=console.groupCollapsed,V2=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Fn,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}sd++}function ho(){if(sd--,sd===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:At({},e,{value:H2}),info:At({},e,{value:U2}),warn:At({},e,{value:I2}),error:At({},e,{value:j2}),group:At({},e,{value:Y2}),groupCollapsed:At({},e,{value:X2}),groupEnd:At({},e,{value:V2})})}0>sd&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Eo(e){var t=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,e=e.stack,Error.prepareStackTrace=t,e.startsWith(`Error: react-stack-top-frame
`)&&(e=e.slice(29)),t=e.indexOf(`
`),t!==-1&&(e=e.slice(t+1)),t=e.indexOf("react_stack_bottom_frame"),t!==-1&&(t=e.lastIndexOf(`
`,t)),t!==-1)e=e.slice(0,t);else return"";return e}function cn(e){if(mp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mp=t&&t[1]||"",q2=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mp+e+q2}function Rl(e,t){if(!e||pp)return"";var n=gp.get(e);if(n!==void 0)return n;pp=!0,n=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var o=null;o=P.H,P.H=null,Lo();try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(Ne){var $=Ne}Reflect.construct(e,[],O)}else{try{O.call()}catch(Ne){$=Ne}O=!1;try{var ce=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),O=!0,new e}finally{O&&(ce!==void 0?Object.defineProperty(e.prototype,"props",ce):delete e.prototype.props)}}}else{try{throw Error()}catch(Ne){$=Ne}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(Ne){if(Ne&&$&&typeof Ne.stack=="string")return[Ne.stack,$.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),c=r[0],d=r[1];if(c&&d){var _=c.split(`
`),w=d.split(`
`);for(r=a=0;a<_.length&&!_[a].includes("DetermineComponentFrameRoot");)a++;for(;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;if(a===_.length||r===w.length)for(a=_.length-1,r=w.length-1;1<=a&&0<=r&&_[a]!==w[r];)r--;for(;1<=a&&0<=r;a--,r--)if(_[a]!==w[r]){if(a!==1||r!==1)do if(a--,r--,0>r||_[a]!==w[r]){var A=`
`+_[a].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),typeof e=="function"&&gp.set(e,A),A}while(1<=a&&0<=r);break}}}finally{pp=!1,P.H=o,ho(),Error.prepareStackTrace=n}return _=(_=e?e.displayName||e.name:"")?cn(_):"",typeof e=="function"&&gp.set(e,_),_}function To(e,t){switch(e.tag){case 26:case 27:case 5:return cn(e.type);case 16:return cn("Lazy");case 13:return e.child!==t&&t!==null?cn("Suspense Fallback"):cn("Suspense");case 19:return cn("SuspenseList");case 0:case 15:return Rl(e.type,!1);case 11:return Rl(e.type.render,!1);case 1:return Rl(e.type,!0);case 31:return cn("Activity");case 30:return cn("ViewTransition");default:return""}}function tt(e){try{var t="",n=null;do{t+=To(e,n);var o=e._debugInfo;if(o)for(var l=o.length-1;0<=l;l--){var a=o[l];if(typeof a.name=="string"){var r=t;e:{var c=a.name,d=a.env,_=a.debugLocation;if(_!=null){var w=Eo(_),A=w.lastIndexOf(`
`),O=A===-1?w:w.slice(A+1);if(O.indexOf(c)!==-1){var $=`
`+O;break e}}$=cn(c+(d?" ["+d+"]":""))}t=r+$}}n=e,e=e.return}while(e);return t}catch(ce){return`
Error generating stack: `+ce.message+`
`+ce.stack}}function ge(e){return(e=e?e.displayName||e.name:"")?cn(e):""}function qe(){if(Il===null)return null;var e=Il._debugOwner;return e!=null?vt(e):null}function xe(){if(Il===null)return"";var e=Il;try{var t="";switch(e.tag===6&&(e=e.return),e.tag){case 26:case 27:case 5:t+=cn(e.type);break;case 13:t+=cn("Suspense");break;case 19:t+=cn("SuspenseList");break;case 31:t+=cn("Activity");break;case 30:t+=cn("ViewTransition");break;case 0:case 15:case 1:e._debugOwner||t!==""||(t+=ge(e.type));break;case 11:e._debugOwner||t!==""||(t+=ge(e.type.render))}for(;e;)if(typeof e.tag=="number"){var n=e;e=n._debugOwner;var o=n._debugStack;if(e&&o){var l=Eo(o);l!==""&&(t+=`
`+l)}}else if(e.debugStack!=null){var a=e.debugStack;(e=e.owner)&&a&&(t+=`
`+Eo(a))}else break;var r=t}catch(c){r=`
Error generating stack: `+c.message+`
`+c.stack}return r}function ie(e,t,n,o,l,a,r){var c=Il;nt(e);try{return e!==null&&e._debugTask?e._debugTask.run(t.bind(null,n,o,l,a,r)):t(n,o,l,a,r)}finally{nt(c)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function nt(e){P.getCurrentStack=e===null?null:xe,Ja=!1,Il=e}function Yt(e){return typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}function qt(e){try{return Ot(e),!1}catch{return!0}}function Ot(e){return""+e}function Ie(e,t){if(qt(e))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",t,Yt(e)),Ot(e)}function et(e,t){if(qt(e))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",t,Yt(e)),Ot(e)}function U(e){if(qt(e))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",Yt(e)),Ot(e)}function X(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)return!0;if(!t.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{Cc=t.inject(e),Ho=t}catch(n){console.error("React instrumentation encountered an error: %o.",n)}return!!t.checkDCE}function G(e){if(typeof z6=="function"&&L6(e),Ho&&typeof Ho.setStrictMode=="function")try{Ho.setStrictMode(Cc,e)}catch(t){Ka||(Ka=!0,console.error("React instrumentation encountered an error: %o",t))}}function se(e){return e>>>=0,e===0?32:31-(B6(e)/$6|0)|0}function De(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),e}}function ze(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var l=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var c=o&134217727;return c!==0?(o=c&~a,o!==0?l=De(o):(r&=c,r!==0?l=De(r):n||(n=c&~e,n!==0&&(l=De(n))))):(c=o&~a,c!==0?l=De(c):r!==0?l=De(r):n||(n=o&~e,n!==0&&(l=De(n)))),l===0?0:t!==0&&t!==l&&(t&a)===0&&(a=l&-l,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:l}function de(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ve(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var o=31-ol(n),l=1<<o;t|=e[o],n&=~l}return t}function ft(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function St(){var e=Mh;return Mh<<=1,(Mh&62914560)===0&&(Mh=4194304),e}function m(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function R(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ee(e,t,n,o,l,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,_=e.hiddenUpdates;for(n=r&~n;0<n;){var w=31-ol(n),A=1<<w;c[w]=0,d[w]=-1;var O=_[w];if(O!==null)for(_[w]=null,w=0;w<O.length;w++){var $=O[w];$!==null&&($.lane&=-536870913)}n&=~A}o!==0&&Z(e,o,0),a!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Z(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-ol(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&261930}function le(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-ol(n),l=1<<o;l&t|e[o]&t&&(e[o]|=t),n&=~l}}function we(e,t){var n=t&-t;return n=(n&42)!==0?1:be(n),(n&(e.suspendedLanes|t))!==0?0:n}function be(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e,t,n){if(ei)for(e=e.pendingUpdatersLaneMap;0<n;){var o=31-ol(n),l=1<<o;e[o].add(t),n&=~l}}function Ae(e,t){if(ei)for(var n=e.pendingUpdatersLaneMap,o=e.memoizedUpdaters;0<t;){var l=31-ol(t);e=1<<l,l=n[l],0<l.size&&(l.forEach(function(a){var r=a.alternate;r!==null&&o.has(r)||o.add(a)}),l.clear()),t&=~e}}function Ct(e){return e&=-e,ll!==0&&ll<e?Ea!==0&&Ea<e?(e&134217727)!==0?ti:Rh:Ea:ll}function Fe(){var e=on.p;return e!==0?e:(e=window.event,e===void 0?ti:D2(e.type))}function tn(e,t){var n=on.p;try{return on.p=e,t()}finally{on.p=n}}function Tn(e){delete e[Ao],delete e[al],delete e[H6],delete e[U6]}function lo(e){var t;if(t=e[Ao])return t;for(var n=e.parentNode;n;){if(t=n[br]||n[Ao]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=f2(e);e!==null;){if(n=e[Ao])return n;e=f2(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){if(e=e[Ao]||e[br]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ao(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function Bo(e){var t=e[G2];return t||(t=e[G2]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function jn(e){e[cd]=!0}function An(e){e[Dh]=void 0}function Mo(e,t){_a(e,t),_a(e+"Capture",t)}function _a(e,t){cs[e]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),cs[e]=t;var n=e.toLowerCase();for(wp[n]=e,e==="onDoubleClick"&&(wp.ondblclick=e),e=0;e<t.length;e++)P2.add(t[e])}function Xi(e,t){I6[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||t.value==null||console.error(e==="select"?"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.":"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||t.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function ht(e){return oa.call(Z2,e)?!0:oa.call(W2,e)?!1:j6.test(e)?Z2[e]=!0:(W2[e]=!0,console.error("Invalid attribute name: `%s`",e),!1)}function Xo(){var e=Kt;return Kt=!1,e}function Is(e,t,n){if(ht(t)){if(!e.hasAttribute(t)){switch(typeof n){case"symbol":case"object":return n;case"function":return n;case"boolean":if(n===!1)return n}return n===void 0?void 0:null}return e=t.toLowerCase()==="nonce"?e.nonce:e.getAttribute(t),e===""&&n===!0?!0:(Ie(n,t),e===""+n?n:e)}}function Vi(e,t,n){if(ht(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}Ie(n,t),e.setAttribute(t,n)}}function Wl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}Ie(n,t),e.setAttribute(t,n)}}function ma(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}Ie(o,n),e.setAttributeNS(t,n,o)}}function $o(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return U(e),e;default:return""}}function _f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function e0(e,t,n){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,a=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(r){U(r),n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(r){U(r),n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pu(e){if(!e._valueTracker){var t=_f(e)?"checked":"value";e._valueTracker=e0(e,t,""+e[t])}}function js(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=_f(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function _l(e){return e.replace(Y6,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function gu(e,t){t.checked===void 0||t.defaultChecked===void 0||J2||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",qe()||"A component",t.type),J2=!0),t.value===void 0||t.defaultValue===void 0||F2||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",qe()||"A component",t.type),F2=!0)}function mi(e,t,n,o,l,a,r,c){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?(Ie(r,"type"),e.type=r):e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$o(t)):e.value!==""+$o(t)&&(e.value=""+$o(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Vo(e,$o(e.value)):Vo(e,$o(t)):n!=null?Vo(e,$o(n)):o!=null&&e.removeAttribute("value"),l==null&&a!=null&&(e.defaultChecked=!!a),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?(Ie(c,"name"),e.name=""+$o(c)):e.removeAttribute("name")}function Vr(e,t,n,o,l,a,r,c){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(Ie(a,"type"),e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){pu(e);return}n=n!=null?""+$o(n):"",t=t!=null?""+$o(t):n,c||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=c?e.checked:!!o,e.defaultChecked=!!o,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(Ie(r,"name"),e.name=r),pu(e)}function Vo(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function qr(e,t){t.value==null&&(typeof t.children=="object"&&t.children!==null?ap.Children.forEach(t.children,function(n){n==null||typeof n=="string"||typeof n=="number"||typeof n=="bigint"||eb||(eb=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):t.dangerouslySetInnerHTML==null||tb||(tb=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),t.selected==null||K2||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),K2=!0)}function yu(){var e=qe();return e?`

Check the render method of \``+e+"`.":""}function Zl(e,t,n,o){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&o&&(e[n].defaultSelected=!0)}else{for(n=""+$o(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function qi(e,t){for(e=0;e<ob.length;e++){var n=ob[e];if(t[n]!=null){var o=po(t[n]);t.multiple&&!o?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,yu()):!t.multiple&&o&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,yu())}}t.value===void 0||t.defaultValue===void 0||nb||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),nb=!0)}function Qi(e,t){t.value===void 0||t.defaultValue===void 0||lb||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",qe()||"A component"),lb=!0),t.children!=null&&t.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function ml(e,t,n){if(t!=null&&(t=""+$o(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$o(n):""}function Ys(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(po(o)){if(1<o.length)throw Error("<textarea> can only have at most one child.");o=o[0]}n=o}n==null&&(n=""),t=n}n=$o(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o),pu(e)}function qo(e,t){return e.serverProps===void 0&&e.serverTail.length===0&&e.children.length===1&&3<e.distanceFromLeaf&&e.distanceFromLeaf>15-t?qo(e.children[0],t):e}function Qo(e){return"  "+"  ".repeat(e)}function Gi(e){return"+ "+"  ".repeat(e)}function Ba(e){return"- "+"  ".repeat(e)}function t0(e){switch(e.tag){case 26:case 27:case 5:return e.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return e=e.type,e.displayName||e.name||null;case 11:return e=e.type.render,e.displayName||e.name||null;case 1:return e=e.type,e.displayName||e.name||null;default:return null}}function pi(e,t){return ab.test(e)?(e=JSON.stringify(e),e.length>t-2?8>t?'{"..."}':"{"+e.slice(0,t-7)+'..."}':"{"+e+"}"):e.length>t?5>t?'{"..."}':e.slice(0,t-3)+"...":e}function bu(e,t,n){var o=120-2*n;if(t===null)return Gi(n)+pi(e,o)+`
`;if(typeof t=="string"){for(var l=0;l<t.length&&l<e.length&&t.charCodeAt(l)===e.charCodeAt(l);l++);return l>o-8&&10<l&&(e="..."+e.slice(l-8),t="..."+t.slice(l-8)),Gi(n)+pi(e,o)+`
`+Ba(n)+pi(t,o)+`
`}return Qo(n)+pi(e,o)+`
`}function mf(e){return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/,function(t,n){return n})}function Xs(e,t){switch(typeof e){case"string":return e=JSON.stringify(e),e.length>t?5>t?'"..."':e.slice(0,t-4)+'..."':e;case"object":if(e===null)return"null";if(po(e))return"[...]";if(e.$$typeof===Fa)return(t=me(e.type))?"<"+t+">":"<...>";var n=mf(e);if(n==="Object"){n="",t-=2;for(var o in e)if(e.hasOwnProperty(o)){var l=JSON.stringify(o);if(l!=='"'+o+'"'&&(o=l),t-=o.length-2,l=Xs(e[o],15>t?t:15),t-=l.length,0>t){n+=n===""?"...":", ...";break}n+=(n===""?"":",")+o+":"+l}return"{"+n+"}"}return n;case"function":return(t=e.displayName||e.name)?"function "+t:"function";default:return String(e)}}function Qr(e,t){return typeof e!="string"||ab.test(e)?"{"+Xs(e,t-2)+"}":e.length>t-2?5>t?'"..."':'"'+e.slice(0,t-5)+'..."':'"'+e+'"'}function pf(e,t,n){var o=120-n.length-e.length,l=[],a;for(a in t)if(t.hasOwnProperty(a)&&a!=="children"){var r=Qr(t[a],120-n.length-a.length-1);o-=a.length+r.length+2,l.push(a+"="+r)}return l.length===0?n+"<"+e+`>
`:0<o?n+"<"+e+" "+l.join(" ")+`>
`:n+"<"+e+`
`+n+"  "+l.join(`
`+n+"  ")+`
`+n+`>
`}function f1(e,t,n){var o="",l=At({},t),a;for(a in e)if(e.hasOwnProperty(a)){delete l[a];var r=120-2*n-a.length-2,c=Xs(e[a],r);t.hasOwnProperty(a)?(r=Xs(t[a],r),o+=Gi(n)+a+": "+c+`
`,o+=Ba(n)+a+": "+r+`
`):o+=Gi(n)+a+": "+c+`
`}for(var d in l)l.hasOwnProperty(d)&&(e=Xs(l[d],120-2*n-d.length-2),o+=Ba(n)+d+": "+e+`
`);return o}function gf(e,t,n,o){var l="",a=new Map;for(_ in n)n.hasOwnProperty(_)&&a.set(_.toLowerCase(),_);if(a.size===1&&a.has("children"))l+=pf(e,t,Qo(o));else{for(var r in t)if(t.hasOwnProperty(r)&&r!=="children"){var c=120-2*(o+1)-r.length-1,d=a.get(r.toLowerCase());if(d!==void 0){a.delete(r.toLowerCase());var _=t[r];d=n[d];var w=Qr(_,c);c=Qr(d,c),typeof _=="object"&&_!==null&&typeof d=="object"&&d!==null&&mf(_)==="Object"&&mf(d)==="Object"&&(2<Object.keys(_).length||2<Object.keys(d).length||-1<w.indexOf("...")||-1<c.indexOf("..."))?l+=Qo(o+1)+r+`={{
`+f1(_,d,o+2)+Qo(o+1)+`}}
`:(l+=Gi(o+1)+r+"="+w+`
`,l+=Ba(o+1)+r+"="+c+`
`)}else l+=Qo(o+1)+r+"="+Qr(t[r],c)+`
`}a.forEach(function(A){if(A!=="children"){var O=120-2*(o+1)-A.length-1;l+=Ba(o+1)+A+"="+Qr(n[A],O)+`
`}}),l=l===""?Qo(o)+"<"+e+`>
`:Qo(o)+"<"+e+`
`+l+Qo(o)+`>
`}return e=n.children,t=t.children,typeof e=="string"||typeof e=="number"||typeof e=="bigint"?(a="",(typeof t=="string"||typeof t=="number"||typeof t=="bigint")&&(a=""+t),l+=bu(a,""+e,o+1)):(typeof t=="string"||typeof t=="number"||typeof t=="bigint")&&(l=e==null?l+bu(""+t,null,o+1):l+bu(""+t,void 0,o+1)),l}function vu(e,t){var n=t0(e);if(n===null){for(n="",e=e.child;e;)n+=vu(e,t),e=e.sibling;return n}return Qo(t)+"<"+n+`>
`}function $a(e,t){var n=qo(e,t);if(n!==e&&(e.children.length!==1||e.children[0]!==n))return Qo(t)+`...
`+$a(n,t+1);n="";var o=e.fiber._debugInfo;if(o)for(var l=0;l<o.length;l++){var a=o[l].name;typeof a=="string"&&(n+=Qo(t)+"<"+a+`>
`,t++)}if(o="",l=e.fiber.pendingProps,e.fiber.tag===6)o=bu(l,e.serverProps,t),t++;else if(a=t0(e.fiber),a!==null)if(e.serverProps===void 0){o=t;var r=120-2*o-a.length-2,c="";for(_ in l)if(l.hasOwnProperty(_)&&_!=="children"){var d=Qr(l[_],15);if(r-=_.length+d.length+2,0>r){c+=" ...";break}c+=" "+_+"="+d}o=Qo(o)+"<"+a+c+`>
`,t++}else e.serverProps===null?(o=pf(a,l,Gi(t)),t++):typeof e.serverProps=="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(o=gf(a,l,e.serverProps,t),t++);var _="";for(l=e.fiber.child,a=0;l&&a<e.children.length;)r=e.children[a],r.fiber===l?(_+=$a(r,t),a++):_+=vu(l,t),l=l.sibling;for(l&&0<e.children.length&&(_+=Qo(t)+`...
`),l=e.serverTail,e.serverProps===null&&t--,e=0;e<l.length;e++)a=l[e],_=typeof a=="string"?_+(Ba(t)+pi(a,120-2*t)+`
`):_+pf(a.type,a.props,Ba(t));return n+o+_}function Nn(e){try{return`

`+$a(e,0)}catch{return""}}function gi(e,t,n){for(var o=t,l=null,a=0;o;)o===e&&(a=0),l={fiber:o,children:l!==null?[l]:[],serverProps:o===t?n:o===e?null:void 0,serverTail:[],distanceFromLeaf:a},a++,o=o.return;return l!==null?Nn(l).replaceAll(/^[+-]/gm,">"):""}function Dl(e,t){var n=At({},e||rb),o={tag:t};return ib.indexOf(t)!==-1&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),V6.indexOf(t)!==-1&&(n.pTagInButtonScope=null),X6.indexOf(t)!==-1&&t!=="address"&&t!=="div"&&t!=="p"&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=o,t==="form"&&(n.formTag=o),t==="a"&&(n.aTagInScope=o),t==="button"&&(n.buttonTagInScope=o),t==="nobr"&&(n.nobrTagInScope=o),t==="p"&&(n.pTagInButtonScope=o),t==="li"&&(n.listItemTagAutoclosing=o),(t==="dd"||t==="dt")&&(n.dlItemTagAutoclosing=o),t==="#document"||t==="html"?n.containerTagInScope=null:n.containerTagInScope||(n.containerTagInScope=o),e!==null||t!=="#document"&&t!=="html"&&t!=="body"?n.implicitRootScope===!0&&(n.implicitRootScope=!1):n.implicitRootScope=!0,n}function _o(e,t,n){switch(t){case"tr":return e==="th"||e==="td"||e==="style"||e==="script"||e==="template";case"tbody":case"thead":case"tfoot":return e==="tr"||e==="style"||e==="script"||e==="template";case"colgroup":return e==="col"||e==="template";case"table":return e==="caption"||e==="colgroup"||e==="tbody"||e==="tfoot"||e==="thead"||e==="style"||e==="script"||e==="template";case"head":return e==="base"||e==="basefont"||e==="bgsound"||e==="link"||e==="meta"||e==="title"||e==="noscript"||e==="noframes"||e==="style"||e==="script"||e==="template";case"html":if(n)break;return e==="head"||e==="body"||e==="frameset";case"frameset":return e==="frame";case"#document":if(!n)return e==="html"}switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t!=="h1"&&t!=="h2"&&t!=="h3"&&t!=="h4"&&t!=="h5"&&t!=="h6";case"rp":case"rt":return q6.indexOf(t)===-1;case"caption":case"col":case"colgroup":case"input":return t!=="select";case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return t==null;case"head":return n||t===null;case"html":return n&&t==="#document"||t===null;case"body":return n&&(t==="#document"||t==="html")||t===null}return!0}function n0(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null}function yf(e,t){for(;e;){switch(e.tag){case 5:case 26:case 27:if(e.type===t)return e}e=e.return}return null}function xu(e,t){t=t||rb;var n=t.current;if(t=(n=_o(e,n&&n.tag,t.implicitRootScope)?null:n)?null:n0(e,t),t=n||t,!t)return!0;var o=t.tag;if(t=String(!!n)+"|"+e+"|"+o,Oh[t])return!1;Oh[t]=!0;var l=(t=Il)?yf(t.return,o):null,a=t!==null&&l!==null?gi(l,t,null):"",r="<"+e+">";return n?(n="",o==="table"&&e==="tr"&&(n+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,r,o,n,a)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,r,o,a),t&&(e=t.return,l===null||e===null||l===e&&e._debugOwner===t._debugOwner||ie(l,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,o,r)})),!1}function Rt(e,t,n){if(n||_o("#text",t,!1))return!0;if(n="#text|"+t,Oh[n])return!1;Oh[n]=!0;var o=(n=Il)?yf(n,t):null;return n=n!==null&&o!==null?gi(o,n,n.tag!==6?{children:null}:null):"",/\S/.test(e)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,t,n):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,t,n),!1}function Gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function Fl(e){return e.replace(P6,function(t,n){return n.toUpperCase()})}function wu(e,t,n){var o=t.indexOf("--")===0;o||(-1<t.indexOf("-")?kc.hasOwnProperty(t)&&kc[t]||(kc[t]=!0,console.error("Unsupported style property %s. Did you mean %s?",t,Fl(t.replace(G6,"ms-")))):Q6.test(t)?kc.hasOwnProperty(t)&&kc[t]||(kc[t]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",t,t.charAt(0).toUpperCase()+t.slice(1))):!ub.test(n)||Cp.hasOwnProperty(n)&&Cp[n]||(Cp[n]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,t,n.replace(ub,""))),typeof n=="number"&&(isNaN(n)?db||(db=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",t)):isFinite(n)||fb||(fb=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",t)))),n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||hb.has(t)?t==="float"?e.cssFloat=n:(et(n,t),e[t]=(""+n).trim()):e[t]=n+"px"}function Su(e,t,n){if(t!=null&&typeof t!="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(t&&Object.freeze(t),e=e.style,n!=null){if(t){var o={};if(n){for(var l in n)if(n.hasOwnProperty(l)&&!t.hasOwnProperty(l))for(var a=Sp[l]||[l],r=0;r<a.length;r++)o[a[r]]=l}for(var c in t)if(t.hasOwnProperty(c)&&(!n||n[c]!==t[c]))for(l=Sp[c]||[c],a=0;a<l.length;a++)o[l[a]]=c;c={};for(var d in t)for(l=Sp[d]||[d],a=0;a<l.length;a++)c[l[a]]=d;d={};for(var _ in o)if(l=o[_],(a=c[_])&&l!==a&&(r=l+","+a,!d[r])){d[r]=!0,r=console;var w=t[l];r.error.call(r,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",w==null||typeof w=="boolean"||w===""?"Removing":"Updating",l,a)}}for(var A in n)!n.hasOwnProperty(A)||t!=null&&t.hasOwnProperty(A)||(A.indexOf("--")===0?e.setProperty(A,""):A==="float"?e.cssFloat="":e[A]="",Kt=!0);for(var O in t)_=t[O],t.hasOwnProperty(O)&&n[O]!==_&&(wu(e,O,_),Kt=!0)}else for(o in t)t.hasOwnProperty(o)&&wu(e,o,t[o])}function Pi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function bf(e){return W6.get(e)||e}function vf(e,t){if(oa.call(Tc,t)&&Tc[t])return!0;if(F6.test(t)){if(e="aria-"+t.slice(4).toLowerCase(),e=_b.hasOwnProperty(e)?e:null,e==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),Tc[t]=!0;if(t!==e)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,e),Tc[t]=!0}if(Z6.test(t)){if(e=t.toLowerCase(),e=_b.hasOwnProperty(e)?e:null,e==null)return Tc[t]=!0,!1;t!==e&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,e),Tc[t]=!0)}return!0}function yi(e,t){var n=[],o;for(o in t)vf(e,o)||n.push(o);t=n.map(function(l){return"`"+l+"`"}).join(", "),n.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",t,e):1<n.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",t,e)}function Kn(e,t,n,o){if(oa.call(il,t)&&il[t])return!0;var l=t.toLowerCase();if(l==="onfocusin"||l==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),il[t]=!0;if(typeof n=="function"&&(e==="form"&&t==="action"||e==="input"&&t==="formAction"||e==="button"&&t==="formAction"))return!0;if(o!=null){if(e=o.possibleRegistrationNames,o.registrationNameDependencies.hasOwnProperty(t))return!0;if(o=e.hasOwnProperty(l)?e[l]:null,o!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",t,o),il[t]=!0;if(pb.test(t))return console.error("Unknown event handler property `%s`. It will be ignored.",t),il[t]=!0}else if(pb.test(t))return J6.test(t)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),il[t]=!0;if(K6.test(t)||e3.test(t))return!0;if(l==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),il[t]=!0;if(l==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),il[t]=!0;if(l==="is"&&n!==null&&n!==void 0&&typeof n!="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),il[t]=!0;if(typeof n=="number"&&isNaN(n))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),il[t]=!0;if(Nh.hasOwnProperty(l)){if(l=Nh[l],l!==t)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",t,l),il[t]=!0}else if(t!==l)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,l),il[t]=!0;switch(t){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof n){case"boolean":switch(t){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:return l=t.toLowerCase().slice(0,5),l==="data-"||l==="aria-"?!0:(n?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',n,t,t,n,t,t,t),il[t]=!0)}case"function":case"symbol":return il[t]=!0,!1;case"string":if(n==="false"||n==="true"){switch(t){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,n==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',t,n),il[t]=!0}}return!0}function Cu(e,t,n){var o=[],l;for(l in t)Kn(e,l,t[l],n)||o.push(l);t=o.map(function(a){return"`"+a+"`"}).join(", "),o.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",t,e):1<o.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",t,e)}function Wi(e){return t3.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wn(){}function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function xn(e){var t=Jn(e);if(t&&(e=t.stateNode)){var n=e[al]||null;e:switch(e=t.stateNode,t.type){case"input":if(mi(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(Ie(t,"name"),n=n.querySelectorAll('input[name="'+_l(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var l=o[al]||null;if(!l)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");mi(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&js(o)}break e;case"textarea":ml(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Zl(e,!!n.multiple,t,!1)}}}function Vs(e,t,n){if(kp)return e(t,n);kp=!0;try{var o=e(t);return o}finally{if(kp=!1,(Mc!==null||Rc!==null)&&(hc(),Mc&&(t=Mc,e=Rc,Rc=Mc=null,xn(t),e)))for(t=0;t<e.length;t++)xn(e[t])}}function Ol(e,t){var n=e.stateNode;if(n===null)return null;var o=n[al]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof n+"` type.");return n}function ku(){if(zh)return zh;var e,t=Tp,n=t.length,o,l="value"in vr?vr.value:vr.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var r=n-e;for(o=1;o<=r&&t[n-o]===l[a-o];o++);return zh=l.slice(e,1<o?1-o:void 0)}function ga(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pr(){return!0}function qs(){return!1}function bo(e){function t(n,o,l,a,r){this._reactName=n,this._targetInst=l,this.type=o,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Pr:qs,this.isPropagationStopped=qs,this}return At(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),t}function Wr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_3[e])?!!t[e]:!1}function Qs(){return Wr}function Zr(e,t){switch(e){case"keyup":return M3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==vb;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}function Gs(e,t){switch(e){case"compositionend":return Zi(t);case"keypress":return t.which!==wb?null:(Cb=!0,Sb);case"textInput":return e=t.data,e===Sb&&Cb?null:e;default:return null}}function o0(e,t){if(Dc)return e==="compositionend"||!Op&&Zr(e,t)?(e=ku(),zh=Tp=vr=null,Dc=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xb&&t.locale!=="ko"?null:t.data;default:return null}}function bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!D3[e.type]:t==="textarea"}function ya(e){if(!ni)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}function Eu(e,t,n,o){Mc?Rc?Rc.push(o):Rc=[o]:Mc=o,t=mh(t,"onChange"),0<t.length&&(n=new Lh("onChange","change",null,n,o),e.push({event:n,listeners:t}))}function Fi(e){N5(e,0)}function Go(e){var t=ao(e);if(js(t))return e}function Ji(e,t){if(e==="change")return t}function Ki(){md&&(md.detachEvent("onpropertychange",Fr),pd=md=null)}function Fr(e){if(e.propertyName==="value"&&Go(pd)){var t=[];Eu(t,pd,e,pa(e)),Vs(Fi,t)}}function xf(e,t,n){e==="focusin"?(Ki(),md=t,pd=n,md.attachEvent("onpropertychange",Fr)):e==="focusout"&&Ki()}function Ps(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(pd)}function wf(e,t){if(e==="click")return Go(t)}function Tu(e,t){if(e==="input"||e==="change")return Go(t)}function l0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}function er(e,t){if(rl(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var l=n[o];if(!oa.call(t,l)||!rl(e[l],t[l]))return!1}return!0}function Ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rt(e,t){var n=tr(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tr(n)}}function Zs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ws(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ws(e.document)}return t}function Ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fs(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Np||Oc==null||Oc!==Ws(o)||(o=Oc,"selectionStart"in o&&Ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),gd&&er(gd,o)||(gd=o,o=mh(Ap,"onSelect"),0<o.length&&(t=new Lh("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Oc)))}function pl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}function Jl(e){if(zp[e])return zp[e];if(!Ac[e])return e;var t=Ac[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Eb)return zp[e]=t[n];return e}function gl(e,t){Ob.set(e,t),Mo(t,[e])}function Kl(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Na.identifierPrefix;var n=L3++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Jr(e){if(e==null||typeof e=="string")return e;var t=null,n=Kc;if(n!==null)for(var o=0;o<n.length;o++){var l=e[n[o]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function Al(e,t){return e=Jr(e),t=Jr(t),t==null?e==="auto"?null:e:t==="auto"?null:t}function Sf(e){for(var t=$h,n=0;n<e.length&&n<la;n++){var o=e[n];if(typeof o=="object"&&o!==null)if(po(o)&&o.length===2&&typeof o[0]=="string"){if(t!==$h&&t!==Up)return $p;t=Up}else return $p;else{if(typeof o=="function"||typeof o=="string"&&50<o.length||t!==$h&&t!==Hp||typeof o=="bigint")return $p;t=Hp}}return t}function nr(e,t,n,o){if(!ArrayBuffer.isView(e)){var l=0,a;for(a in e)if(oa.call(e,a)&&a[0]!=="_"&&(l++,Nl(a,e[a],t,n,o),l>=la)){t.push([o+"\xA0\xA0".repeat(n)+"Only "+la+" properties are shown. React will not log more properties of this object.",""]);break}}}function Po(e){return"$$typeof"in e&&oa.call(e,"$$typeof")?e.$$typeof:void 0}function Nl(e,t,n,o,l){switch(typeof t){case"object":if(t===null){t="null";break}else{if(Po(t)===Fa){var a=me(t.type)||"\u2026",r=t.key;t=t.props;var c=Object.keys(t),d=c.length;if(r==null&&d===0){t="<"+a+" />";break}if(3>o||d===1&&c[0]==="children"&&r==null){t="<"+a+" \u2026 />";break}n.push([l+"\xA0\xA0".repeat(o)+e,"<"+a]),r!==null&&Nl("key",r,n,o+1,l),e=!1,r=0;for(var _ in t)if(r++,_==="children"?t.children!=null&&(!po(t.children)||0<t.children.length)&&(e=!0):oa.call(t,_)&&_[0]!=="_"&&Nl(_,t[_],n,o+1,l),r>=la)break;n.push(["",e?">\u2026</"+a+">":"/>"]);return}if(a=Object.prototype.toString.call(t),a=a.slice(8,a.length-1),ArrayBuffer.isView(t)){t=t.length,t=typeof t=="number"?a+"("+t+")":a;break}if(a==="Array"){if(_=t.length>la,r=Sf(t),r===Hp||r===$h){t=JSON.stringify(_?t.slice(0,la).concat("\u2026"):t);break}else if(r===Up){for(n.push([l+"\xA0\xA0".repeat(o)+e,""]),e=0;e<t.length&&e<la;e++)a=t[e],Nl(a[0],a[1],n,o+1,l);_&&Nl(la.toString(),"\u2026",n,o+1,l);return}}if(a==="Promise"){if(t.status==="fulfilled"){if(a=n.length,Nl(e,t.value,n,o,l),n.length>a){n=n[a],n[1]="Promise<"+(n[1]||"Object")+">";return}}else if(t.status==="rejected"&&(a=n.length,Nl(e,t.reason,n,o,l),n.length>a)){n=n[a],n[1]="Rejected Promise<"+n[1]+">";return}n.push(["\xA0\xA0".repeat(o)+e,"Promise"]);return}a==="Object"&&(_=Object.getPrototypeOf(t))&&typeof _.constructor=="function"&&(a=_.constructor.name),n.push([l+"\xA0\xA0".repeat(o)+e,a==="Object"?3>o?"":"\u2026":a]),3>o&&nr(t,n,o+1,l);return}case"function":t=t.name,t=t===""||typeof t!="string"?"() => {}":t+"() {}";break;case"string":t=t===H3?"\u2026":JSON.stringify(1024<=t.length?t.slice(0,1023)+"\u2026":t);break;case"undefined":t="undefined";break;case"boolean":t=t?"true":"false";break;default:t=String(t)}n.push([l+"\xA0\xA0".repeat(o)+e,t])}function Js(e,t,n,o){var l=!0,a=0;for(c in e){if(a>la){n.push(["Previous object has more than "+la+" properties. React will not attempt to diff objects with too many properties.",""]),l=!1;break}c in t||(n.push([Hh+"\xA0\xA0".repeat(o)+c,"\u2026"]),l=!1),a++}a=0;for(var r in t){if(a>la){n.push(["Next object has more than "+la+" properties. React will not attempt to diff objects with too many properties.",""]),l=!1;break}if(r in e){var c=e[r],d=t[r];if(c!==d){if(o===0&&r==="children"){l="\xA0\xA0".repeat(o)+r,n.push([Hh+l,"\u2026"],[Uh+l,"\u2026"]),l=!1;continue}if(!(3<=o)){if(typeof c=="object"&&typeof d=="object"&&c!==null&&d!==null&&Po(c)===Po(d))if(Po(d)===Fa){if(c.type===d.type&&c.key===d.key){c=me(d.type)||"\u2026",l="\xA0\xA0".repeat(o)+r,c="<"+c+" \u2026 />",n.push([Hh+l,c],[Uh+l,c]),l=!1;continue}}else{var _=Object.prototype.toString.call(c),w=Object.prototype.toString.call(d);if(_===w&&(w==="[object Object]"||w==="[object Array]")){_=[zb+"\xA0\xA0".repeat(o)+r,w==="[object Array]"?"Array":""],n.push(_),w=n.length,Js(c,d,n,o+1)?w===n.length&&(_[1]="Referentially unequal but deeply equal objects. Consider memoization."):l=!1;continue}}else if(typeof c=="function"&&typeof d=="function"&&c.name===d.name&&c.length===d.length&&(_=Function.prototype.toString.call(c),w=Function.prototype.toString.call(d),_===w)){c=d.name===""?"() => {}":d.name+"() {}",n.push([zb+"\xA0\xA0".repeat(o)+r,c+" Referentially unequal function closure. Consider memoization."]);continue}}Nl(r,c,n,o,Hh),Nl(r,d,n,o,Uh),l=!1}}else n.push([Uh+"\xA0\xA0".repeat(o)+r,"\u2026"]),l=!1;a++}return l}function io(e){Xt=e&63?"Blocking":e&64?"Gesture":e&4194176?"Transition":e&62914560?"Suspense":e&2080374784?"Idle":"Other"}function Wo(e,t,n,o){Cn&&(Sr.start=t,Sr.end=n,Mi.color="warning",Mi.tooltipText=o,Mi.properties=null,(e=e._debugTask)?e.run(performance.measure.bind(performance,o,Sr)):performance.measure(o,Sr),performance.clearMeasures(o))}function Ks(e,t,n){Wo(e,t,n,"Reconnect")}function ec(e,t,n,o,l){var a=ke(e);if(a!==null&&Cn){var r=e.alternate,c=e.actualDuration;if(r===null||r.child!==e.child)for(var d=e.child;d!==null;d=d.sibling)c-=d.actualDuration;c=.5>c?o?"tertiary-light":"primary-light":10>c?o?"tertiary":"primary":100>c?o?"tertiary-dark":"primary-dark":"error";var _=e.memoizedProps;o=e._debugTask,_!==null&&r!==null&&r.memoizedProps!==_?(d=[U3],_=Js(r.memoizedProps,_,d,0),1<d.length?(_&&!wr&&(r.lanes&l)===0&&100<e.actualDuration?(wr=!0,d[0]=I3,Mi.color="warning",Mi.tooltipText=Lb):(Mi.color=c,Mi.tooltipText=a),Mi.properties=d,Sr.start=t,Sr.end=n,e="\u200B"+a,o!=null?o.run(performance.measure.bind(performance,e,Sr)):performance.measure(e,Sr),performance.clearMeasures(e)):o!=null?o.run(console.timeStamp.bind(console,a,t,n,wl,void 0,c)):console.timeStamp(a,t,n,wl,void 0,c)):o!=null?o.run(console.timeStamp.bind(console,a,t,n,wl,void 0,c)):console.timeStamp(a,t,n,wl,void 0,c)}}function ba(e,t,n,o){if(Cn){var l=ke(e);if(l!==null){for(var a=null,r=[],c=0;c<o.length;c++){var d=o[c];a==null&&d.source!==null&&(a=d.source._debugTask),d=d.value,r.push(["Error",typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d)])}e.key!==null&&Nl("key",e.key,r,0,""),e.memoizedProps!==null&&nr(e.memoizedProps,r,0,""),a==null&&(a=e._debugTask),e={start:t,end:n,detail:{devtools:{color:"error",track:wl,tooltipText:e.tag===13?"Hydration failed":"Error boundary caught an error",properties:r}}},l="\u200B"+l,a?a.run(performance.measure.bind(performance,l,e)):performance.measure(l,e),performance.clearMeasures(l)}}}function yl(e,t,n,o,l){if(l!==null){if(Cn){var a=ke(e);if(a!==null){o=[];for(var r=0;r<l.length;r++){var c=l[r].value;o.push(["Error",typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c)])}e.key!==null&&Nl("key",e.key,o,0,""),e.memoizedProps!==null&&nr(e.memoizedProps,o,0,""),t={start:t,end:n,detail:{devtools:{color:"error",track:wl,tooltipText:"A lifecycle or effect errored",properties:o}}},e=e._debugTask,n="\u200B"+a,e?e.run(performance.measure.bind(performance,n,t)):performance.measure(n,t),performance.clearMeasures(n)}}}else a=ke(e),a!==null&&Cn&&(l=1>o?"secondary-light":100>o?"secondary":500>o?"secondary-dark":"error",(e=e._debugTask)?e.run(console.timeStamp.bind(console,a,t,n,wl,void 0,l)):console.timeStamp(a,t,n,wl,void 0,l))}function tc(e,t,n,o){!Cn||t<=e||(n=(n&738197653)===n?"tertiary-dark":"primary-dark",o?o.run(console.timeStamp.bind(console,"Prewarm",e,t,Xt,Ht,n)):console.timeStamp("Prewarm",e,t,Xt,Ht,n))}function Cf(e,t,n,o){!Cn||t<=e||(n=(n&738197653)===n?"tertiary-dark":"primary-dark",o?o.run(console.timeStamp.bind(console,"Suspended",e,t,Xt,Ht,n)):console.timeStamp("Suspended",e,t,Xt,Ht,n))}function vi(e,t,n,o){!Cn||t<=e||(o?o.run(console.timeStamp.bind(console,"Errored",e,t,Xt,Ht,"error")):console.timeStamp("Errored",e,t,Xt,Ht,"error"))}function or(e,t,n,o){!Cn||t<=e||(o?o.run(console.timeStamp.bind(console,n,e,t,Xt,Ht,"secondary-light")):console.timeStamp(n,e,t,Xt,Ht,"secondary-light"))}function kf(e,t,n,o,l){if(Cn&&!(t<=e)){for(var a=[],r=0;r<n.length;r++){var c=n[r].value;a.push(["Error",typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c)])}e={start:e,end:t,detail:{devtools:{color:"error",track:Xt,trackGroup:Ht,tooltipText:o?"Remaining Effects Errored":"Commit Errored",properties:a}}},l?l.run(performance.measure.bind(performance,"Errored",e)):performance.measure("Errored",e),performance.clearMeasures("Errored")}}function Du(e,t,n,o,l){n!==null?kf(e,t,n,!1,l):!Cn||t<=e||(l?l.run(console.timeStamp.bind(console,o?"Commit Interrupted View Transition":"Commit",e,t,Xt,Ht,o?"error":"secondary-dark")):console.timeStamp(o?"Commit Interrupted View Transition":"Commit",e,t,Xt,Ht,o?"error":"secondary-dark"))}function va(e,t,n){!Cn||t<=e||(n?n.run(console.timeStamp.bind(console,"Animating",e,t,Xt,Ht,"secondary-dark")):console.timeStamp("Animating",e,t,Xt,Ht,"secondary-dark"))}function b(){for(var e=Nc,t=Ip=Nc=0;t<e;){var n=aa[t];aa[t++]=null;var o=aa[t];aa[t++]=null;var l=aa[t];aa[t++]=null;var a=aa[t];if(aa[t++]=null,o!==null&&l!==null){var r=o.pending;r===null?l.next=l:(l.next=r.next,r.next=l),o.pending=l}a!==0&&L(n,l,a)}}function x(e,t,n,o){aa[Nc++]=e,aa[Nc++]=t,aa[Nc++]=n,aa[Nc++]=o,Ip|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function z(e,t,n,o){return x(e,t,n,o),K(e)}function D(e,t){return x(e,null,null,t),K(e)}function L(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var l=!1,a=e.return;a!==null;)a.childLanes|=n,o=a.alternate,o!==null&&(o.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&yd||(l=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,l&&t!==null&&(l=31-ol(n),e=a.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=n|536870912),a):null}function K(e){if(Wd>tS)throw Ts=Wd=0,Zd=y_=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Ts>nS&&(Ts=0,Zd=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),e.alternate===null&&(e.flags&4098)!==0&&T5(e);for(var t=e,n=t.return;n!==null;)t.alternate===null&&(t.flags&4098)!==0&&T5(e),t=n,n=t.return;return t.tag===3?t.stateNode:null}function ve(e){if(Di===null)return e;var t=Di(e);return t===void 0?e:t.current}function Me(e,t){if(Di===null)return!1;var n=Di,o=e.elementType;t=t.type;var l=!1,a=typeof t=="object"&&t!==null?t.$$typeof:null;switch(e.tag){case 1:typeof t=="function"&&(l=!0);break;case 0:(typeof t=="function"||a===xl)&&(l=!0);break;case 11:(a===Sh||a===xl)&&(l=!0);break;case 14:case 15:(a===Ch||a===xl)&&(l=!0);break;default:return!1}return!!(l&&(e=n(o),e!==void 0&&e===n(t)))}function He(e){Di!==null&&typeof WeakSet=="function"&&(zc===null&&(zc=new WeakSet),zc.add(e))}function We(e,t,n){do{var o=e,l=o.alternate,a=o.child,r=o.sibling,c=o.tag,d=o.type,_=o.elementType,w=null;switch(o=null,c){case 0:case 1:w=d;break;case 15:w=d,o=_;break;case 14:o=_;break;case 11:w=d.render,o=_}if(Di===null)throw Error("Expected resolveFamily to be set during hot reload.");var A=Di;if(d=_=!1,w!==null&&(w=A(w),w!==void 0&&(n.has(w)?d=!0:t.has(w)&&(c===1?d=!0:_=!0))),d||o===null||(c=A(o),c!==void 0&&n.has(c)?d=!0:typeof o=="object"&&o.$$typeof===xl&&(c=o._payload,c._status===1&&(c=A(c._result.default),c!==void 0&&n.has(c)&&(d=!0)))),zc!==null&&(zc.has(e)||l!==null&&zc.has(l))&&(d=!0),d&&(e._debugNeedsRemount=!0),(d||_)&&(l=D(e,2),l!==null&&Xn(l,e,2)),a===null||d||We(a,t,n),r===null)break;e=r}while(!0)}function Ke(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,$b||typeof Object.preventExtensions!="function"||Object.preventExtensions(this)}function mt(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xt(e,t){var n=e.alternate;switch(n===null?(n=H(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n._debugOwner=e._debugOwner,n._debugStack=e._debugStack,n._debugTask=e._debugTask,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null,n.actualDuration=-0,n.actualStartTime=-1.1),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext,_debugThenableState:t._debugThenableState},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugInfo=e._debugInfo,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case 0:case 15:case 14:case 1:case 11:n.type=ve(e.type)}return n}function ot(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext,_debugThenableState:t._debugThenableState},e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration),e}function Le(e,t,n,o,l,a){var r=0,c=ve(e);if(typeof c=="function")mt(c)&&(r=1);else if(typeof c=="string")r=jt(),r=d6(e,n,r)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(c){case dp:return t=H(31,n,t,l),t.elementType=dp,t.lanes=a,t;case wc:return Pt(n.children,l,a,t);case wh:r=8,l|=Uo,l|=Ta;break;case rp:return e=n,o=l,typeof e.id!="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id),t=H(12,e,t,o|Nt),t.elementType=rp,t.lanes=a,t.stateNode={effectDuration:0,passiveEffectDuration:0},t;case cp:return t=H(13,n,t,l),t.elementType=cp,t.lanes=a,t;case up:return t=H(19,n,t,l),t.elementType=up,t.lanes=a,t;case C6:case fp:return e=l|Bb,t=H(30,n,t,e),t.elementType=fp,t.lanes=a,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof c=="object"&&c!==null)switch(c.$$typeof){case ka:r=10;break e;case sp:r=9;break e;case Sh:r=11;break e;case Ch:r=14;break e;case xl:r=16,c=null;break e}n="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(n+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?c="null":po(e)?c="array":e!==void 0&&e.$$typeof===Fa?(c="<"+(me(e.type)||"Unknown")+" />",n=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,(r=o?vt(o):null)&&(n+=`

Check the render method of \``+r+"`."),r=29,n=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(c+"."+n)),c=null}return t=H(r,n,t,l),t.elementType=e,t.type=c,t.lanes=a,t._debugOwner=o,t}function wn(e,t,n){return t=Le(e.type,e.key,e.props,e._owner,t,n),t._debugOwner=e._owner,t._debugStack=e._debugStack,t._debugTask=e._debugTask,t}function Pt(e,t,n,o){return e=H(7,e,o,t),e.lanes=n,e}function Yn(e,t,n){return e=H(6,e,null,t),e.lanes=n,e}function Jt(e){var t=H(18,null,null,pt);return t.stateNode=e,t}function Mn(e,t,n){return t=H(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qe(e,t){if(typeof e=="object"&&e!==null){var n=jp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:tt(t)},jp.set(e,t),t)}return{value:e,source:t,stack:tt(t)}}function st(e,t){bl(),Lc[Bc++]=bd,Lc[Bc++]=Ih,Ih=e,bd=t}function Sn(e,t,n){bl(),ia[ra++]=Oi,ia[ra++]=Ai,ia[ra++]=us,us=e;var o=Oi;e=Ai;var l=32-ol(o)-1;o&=~(1<<l),n+=1;var a=32-ol(t)+l;if(30<a){var r=l-l%5;a=(o&(1<<r)-1).toString(32),o>>=r,l-=r,Oi=1<<32-ol(t)+l|n<<l|o,Ai=a+e}else Oi=1<<a|n<<l|o,Ai=e}function gn(e){bl(),e.return!==null&&(st(e,1),Sn(e,1,0))}function Zo(e){for(;e===Ih;)Ih=Lc[--Bc],Lc[Bc]=null,bd=Lc[--Bc],Lc[Bc]=null;for(;e===us;)us=ia[--ra],ia[ra]=null,Ai=ia[--ra],ia[ra]=null,Oi=ia[--ra],ia[ra]=null}function Fo(){return bl(),us!==null?{id:Oi,overflow:Ai}:null}function ro(e,t){bl(),ia[ra++]=Oi,ia[ra++]=Ai,ia[ra++]=us,Oi=t.id,Ai=t.overflow,us=e}function bl(){zt||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function Jo(e,t){if(e.return===null){if(jl===null)jl={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:t};else{if(jl.fiber!==e)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");jl.distanceFromLeaf>t&&(jl.distanceFromLeaf=t)}return jl}var n=Jo(e.return,t+1).children;return 0<n.length&&n[n.length-1].fiber===e?(n=n[n.length-1],n.distanceFromLeaf>t&&(n.distanceFromLeaf=t),n):(t={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:t},n.push(t),t)}function xa(){zt&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function Rn(e,t){oi||(e=Jo(e,0),e.serverProps=null,t!==null&&(t=u2(t),e.serverTail.push(t)))}function Ro(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,n="",o=jl;throw o!==null&&(jl=null,n=Nn(o)),Au(Qe(Error("Hydration failed because the server rendered "+(t?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+n),e)),Yp}function Ha(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[Ao]=e,t[al]=o,$m(n,o),n){case"dialog":Gt("cancel",t),Gt("close",t);break;case"iframe":case"object":case"embed":Gt("load",t);break;case"video":case"audio":for(n=0;n<Fd.length;n++)Gt(Fd[n],t);break;case"source":Gt("error",t);break;case"img":case"image":case"link":Gt("error",t),Gt("load",t);break;case"details":Gt("toggle",t);break;case"input":Xi("input",o),Gt("invalid",t),gu(t,o),Vr(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"option":qr(t,o);break;case"select":Xi("select",o),Gt("invalid",t),qi(t,o);break;case"textarea":Xi("textarea",o),Gt("invalid",t),Qi(t,o),Ys(t,o.value,o.defaultValue,o.children)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||U5(t.textContent,n)?(o.popover!=null&&(Gt("beforetoggle",t),Gt("toggle",t)),o.onScroll!=null&&Gt("scroll",t),o.onScrollEnd!=null&&Gt("scrollend",t),o.onClick!=null&&(t.onclick=Wn),t=!0):t=!1,t||Ro(e,!0)}function nc(e){for(xo=e.return;xo;)switch(xo.tag){case 5:case 31:case 13:sa=!1;return;case 27:case 3:sa=!0;return;default:xo=xo.return}}function lr(e){if(e!==xo)return!1;if(!zt)return nc(e),zt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ym(e.type,e.memoizedProps)),n=!n),n&&yn){for(n=yn;n;){var o=Jo(e,0),l=u2(n);o.serverTail.push(l),n=l.type==="Suspense"?Pm(n):Ul(n.nextSibling)}Ro(e)}if(nc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");yn=Pm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");yn=Pm(e)}else t===27?(t=yn,pr(e.type)?(e=Hg,Hg=null,yn=e):yn=t):yn=xo?Ul(e.stateNode.nextSibling):null;return!0}function xi(){yn=xo=null,oi=zt=!1}function Ou(){var e=kr;return e!==null&&(ul===null?ul=e:ul.push.apply(ul,e),kr=null),e}function Au(e){kr===null?kr=[e]:kr.push(e)}function a0(){var e=jl;if(e!==null){jl=null;for(var t=Nn(e);0<e.children.length;)e=e.children[0];ie(e.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",t)})}}function Ef(){$c=jh=null,Hc=!1}function ar(e,t,n){$e(Xp,t._currentValue,e),t._currentValue=n,$e(Vp,t._currentRenderer,e),t._currentRenderer!==void 0&&t._currentRenderer!==null&&t._currentRenderer!==Ub&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),t._currentRenderer=Ub}function wi(e,t){e._currentValue=Xp.current;var n=Vp.current;Se(Vp,t),e._currentRenderer=n,Se(Xp,t)}function Tf(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}e!==n&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function i0(e,t,n,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var a=l.dependencies;if(a!==null){var r=l.child;a=a.firstContext;e:for(;a!==null;){var c=a;a=l;for(var d=0;d<t.length;d++)if(c.context===t[d]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Tf(a.return,n,e),o||(r=null);break e}a=c.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Tf(r,n,e),r=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,r=l.alternate,r!==null&&(r.lanes|=n),Tf(l.return,n,e),r=l.child,r=r!==null?r.sibling:null):r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function Kr(e,t,n,o){e=null;for(var l=t,a=!1;l!==null;){if(!a){if((l.flags&524288)!==0)a=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error("Should have a current fiber. This is a bug in React.");if(r=r.memoizedProps,r!==null){var c=l.type;rl(l.pendingProps.value,r.value)||(e!==null?e.push(c):e=[c])}}else if(l===kh.current){if(r=l.alternate,r===null)throw Error("Should have a current fiber. This is a bug in React.");r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(iu):e=[iu])}l=l.return}return e!==null&&i0(t,e,n,o),t.flags|=262144,e!==null}function Mf(e){for(e=e.firstContext;e!==null;){if(!rl(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function es(e){jh=e,$c=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return Hc&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),h1(jh,e)}function Rf(e,t){return jh===null&&es(e),h1(e,t)}function h1(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$c===null){if(e===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");$c=t,e.dependencies={lanes:0,firstContext:t,_debugThenableState:null},e.flags|=524288}else $c=$c.next=t;return n}function r0(){return{controller:new Y3,data:new Map,refCount:0}}function ts(e){e.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),e.refCount++}function Nu(e){e.refCount--,0>e.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),e.refCount===0&&X3(V3,function(){e.controller.abort()})}function _1(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var o=t[e];n.indexOf(o)===-1&&n.push(o)}}}function Aw(e){var t=e.transitionTypes;return e.transitionTypes=null,t}function Ua(e,t,n){(e&127)!==0?0>li&&(li=to(),wd=Yh(t),qp=t,n!=null&&(Qp=ke(n)),(Wt&(yo|Vl))!==ko&&(Vn=!0,Tr=xd),e=td(),t=ed(),e!==Uc||t!==Sd?Uc=-1.1:t!==null&&(Tr=xd),fs=e,Sd=t):(e&4194048)!==0&&0>ca&&(ca=to(),Cd=Yh(t),Ib=t,n!=null&&(jb=ke(n)),0>Li)&&(e=td(),t=ed(),(e!==Rr||t!==hs)&&(Rr=-1.1),Mr=e,hs=t)}function Nw(e){if(0>li){li=to(),wd=e._debugTask!=null?e._debugTask:null,(Wt&(yo|Vl))!==ko&&(Tr=xd);var t=td(),n=ed();t!==Uc||n!==Sd?Uc=-1.1:n!==null&&(Tr=xd),fs=t,Sd=n}0>ca&&(ca=to(),Cd=e._debugTask!=null?e._debugTask:null,0>Li)&&(e=td(),t=ed(),(e!==Rr||t!==hs)&&(Rr=-1.1),Mr=e,hs=t)}function Si(){var e=ds;return ds=0,e}function Df(e){var t=ds;return ds=e,t}function zu(e){var t=ds;return ds+=e,t}function Of(){ut=lt=-1.1}function zl(){var e=lt;return lt=-1.1,e}function Ll(e){0<=e&&(lt=e)}function Ia(){var e=zn;return zn=-0,e}function ja(e){0<=e&&(zn=e)}function Ya(){var e=On;return On=null,e}function Xa(){var e=Vn;return Vn=!1,e}function s0(e){sl=to(),0>e.actualStartTime&&(e.actualStartTime=sl)}function c0(e){if(0<=sl){var t=to()-sl;e.actualDuration+=t,e.selfBaseDuration=t,sl=-1}}function m1(e){if(0<=sl){var t=to()-sl;e.actualDuration+=t,sl=-1}}function Va(){if(0<=sl){var e=to(),t=e-sl;sl=-1,ds+=t,zn+=t,ut=e}}function p1(e){On===null&&(On=[]),On.push(e),zi===null&&(zi=[]),zi.push(e)}function qa(){sl=to(),0>lt&&(lt=sl)}function Lu(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function zw(e,t){if(Ed===null){var n=Ed=[];Zp=0,Dr=Nm(),Ic={status:"pending",value:void 0,then:function(o){n.push(o)}}}return Zp++,t.then(g1,g1),t}function g1(){if(--Zp===0&&(-1<ca||(Li=-1.1),vd=null,Ed!==null)){Ic!==null&&(Ic.status="fulfilled");var e=Ed;Ed=null,Dr=0,Ic=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Lw(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),o}function u0(){var e=ms.current;return e!==null?e:mn.pooledCache}function Af(e,t){t===null?$e(ms,ms.current,e):$e(ms,t.pool,e)}function y1(){var e=u0();return e===null?null:{parent:co._currentValue,pool:e}}function b1(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function v1(e){return e=e.status,e==="fulfilled"||e==="rejected"}function x1(e,t,n,o){P.actQueue!==null&&(P.didUsePromise=!0);var l=e.thenables;if(n=l[n],n===void 0?l.push(t):n!==t&&(e.didWarnAboutUncachedPromise||(e.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),t.then(Wn,Wn),t=n),t._debugInfo===void 0){e=performance.now(),l=t.displayName;var a={name:typeof l=="string"?l:"Promise",start:e,end:e,value:t};t._debugInfo=[{awaited:a}],t.status!=="fulfilled"&&t.status!=="rejected"&&(e=function(){a.end=performance.now()},t.then(e,e))}switch(t.status){case"fulfilled":return t.value;case"rejected":throw o=t.reason,S1(o),o===void 0&&!("reason"in t)?Error("A rejected Promise was passed to React without a `reason` property. React threw a generic error from where the Promise was used to assist in identifying the problematic Promise. Make sure that instrumented Promises correctly set the `reason` property when setting `status` to `'rejected'`."):o;default:if(typeof t.status=="string")t.then(Wn,Wn);else{if(e=mn,e!==null&&100<e.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=r}},function(r){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw o=t.reason,S1(o),o}throw ys=t,Nd=!0,eg||o===null||o.alternate!==null||(gs=o,Fh=Error("This library called use() to suspend in a previous render but did not call use() when it finished. This indicates an incorrect use of use(). Learn more: https://react.dev/warnings/conditional-use-of-use")),jc}}function ir(e){try{return W3(e)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ys=t,Nd=!0,jc):t}}function w1(){if(ys===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var e=ys;return ys=null,Nd=!1,e}function S1(e){if(e===jc||e===Wh)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function C1(e,t){return e===t?!0:e.tag!==t.tag||e.type!==t.type||e.key!==t.key||e.index!==t.index||e.tag===3&&e.stateNode!==t.stateNode||e.return===null||t.return===null?!1:C1(e.return,t.return)}function Ko(e){var t=Ut;return e!=null&&(Ut=t===null?e:t.concat(e)),t}function d0(){var e=Ut;if(e!=null){for(var t=e.length-1;0<=t;t--)if(e[t].name!=null){var n=e[t].debugTask;if(n!=null)return n}}return null}function Nf(e,t,n){for(var o=Object.keys(e.props),l=0;l<o.length;l++){var a=o[l];if(a!=="children"&&a!=="key"&&a!=="ref"){t===null&&(t=wn(e,n.mode,0),t._debugInfo=Ut,t.return=n),ie(t,function(r){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key`, `ref`, and `children` props.",r)},a);break}}}function zf(e){var t=zd;return zd+=1,Yc===null&&(Yc=b1()),x1(Yc,e,t,null)}function rr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function k1(e,t){throw t.$$typeof===S6?Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`):(e=Object.prototype.toString.call(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead."))}function Lf(e,t){var n=d0();n!==null?n.run(k1.bind(null,e,t)):k1(e,t)}function E1(e,t){var n=ke(e)||"Component";av[n]||(av[n]=!0,t=t.displayName||t.name||"Component",e.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,t,t,t):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,t,t,n,t,n))}function Bf(e,t){var n=d0();n!==null?n.run(E1.bind(null,e,t)):E1(e,t)}function T1(e,t){var n=ke(e)||"Component";iv[n]||(iv[n]=!0,t=String(t),e.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,t):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,n,t,n))}function $f(e,t){var n=d0();n!==null?n.run(T1.bind(null,e,t)):T1(e,t)}function M1(e){function t(C,E){if(e){var N=C.deletions;N===null?(C.deletions=[E],C.flags|=16):N.push(E)}}function n(C,E){if(!e)return null;for(;E!==null;)t(C,E),E=E.sibling;return null}function o(C){for(var E=new Map;C!==null;)C.key===null?E.set(C.index,C):E.set(C.key,C),C=C.sibling;return E}function l(C,E){return C=xt(C,E),C.index=0,C.sibling=null,C}function a(C,E,N){return C.index=N,e?(N=C.alternate,N!==null?(N=N.index,N<E?(C.flags|=2,E):N):(C.flags|=134217730,E)):(C.flags|=1048576,E)}function r(C){return e&&C.alternate===null&&(C.flags|=134217730),C}function c(C,E,N,Q){return E===null||E.tag!==6?(E=Yn(N,C.mode,Q),E.return=C,E._debugOwner=C,E._debugTask=C._debugTask,E._debugInfo=Ut,E):(E=l(E,N),E.return=C,E._debugInfo=Ut,E)}function d(C,E,N,Q){var pe=N.type;return pe===wc?(E=w(C,E,N.props.children,Q,N.key),rr(E,N),Nf(N,E,C),E):E!==null&&(E.elementType===pe||Me(E,N)||typeof pe=="object"&&pe!==null&&pe.$$typeof===xl&&ir(pe)===E.type)?(E=l(E,N.props),rr(E,N),E.return=C,E._debugOwner=N._owner,E._debugInfo=Ut,E):(E=wn(N,C.mode,Q),rr(E,N),E.return=C,E._debugInfo=Ut,E)}function _(C,E,N,Q){return E===null||E.tag!==4||E.stateNode.containerInfo!==N.containerInfo||E.stateNode.implementation!==N.implementation?(E=Mn(N,C.mode,Q),E.return=C,E._debugInfo=Ut,E):(E=l(E,N.children||[]),E.return=C,E._debugInfo=Ut,E)}function w(C,E,N,Q,pe){return E===null||E.tag!==7?(E=Pt(N,C.mode,Q,pe),E.return=C,E._debugOwner=C,E._debugTask=C._debugTask,E._debugInfo=Ut,E):(E=l(E,N),E.return=C,E._debugInfo=Ut,E)}function A(C,E,N){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Yn(""+E,C.mode,N),E.return=C,E._debugOwner=C,E._debugTask=C._debugTask,E._debugInfo=Ut,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Fa:return N=wn(E,C.mode,N),rr(N,E),N.return=C,C=Ko(E._debugInfo),N._debugInfo=Ut,Ut=C,N;case xc:return E=Mn(E,C.mode,N),E.return=C,E._debugInfo=Ut,E;case xl:var Q=Ko(E._debugInfo);return E=ir(E),C=A(C,E,N),Ut=Q,C}if(po(E)||ne(E))return N=Pt(E,C.mode,N,null),N.return=C,N._debugOwner=C,N._debugTask=C._debugTask,C=Ko(E._debugInfo),N._debugInfo=Ut,Ut=C,N;if(typeof E.then=="function")return Q=Ko(E._debugInfo),C=A(C,zf(E),N),Ut=Q,C;if(E.$$typeof===ka)return A(C,Rf(C,E),N);Lf(C,E)}return typeof E=="function"&&Bf(C,E),typeof E=="symbol"&&$f(C,E),null}function O(C,E,N,Q){var pe=E!==null?E.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return pe!==null?null:c(C,E,""+N,Q);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Fa:return N.key===pe?(pe=Ko(N._debugInfo),C=d(C,E,N,Q),Ut=pe,C):null;case xc:return N.key===pe?_(C,E,N,Q):null;case xl:return pe=Ko(N._debugInfo),N=ir(N),C=O(C,E,N,Q),Ut=pe,C}if(po(N)||ne(N))return pe!==null?null:(pe=Ko(N._debugInfo),C=w(C,E,N,Q,null),Ut=pe,C);if(typeof N.then=="function")return pe=Ko(N._debugInfo),C=O(C,E,zf(N),Q),Ut=pe,C;if(N.$$typeof===ka)return O(C,E,Rf(C,N),Q);Lf(C,N)}return typeof N=="function"&&Bf(C,N),typeof N=="symbol"&&$f(C,N),null}function $(C,E,N,Q,pe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return C=C.get(N)||null,c(E,C,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Fa:return N=C.get(Q.key===null?N:Q.key)||null,C=Ko(Q._debugInfo),E=d(E,N,Q,pe),Ut=C,E;case xc:return C=C.get(Q.key===null?N:Q.key)||null,_(E,C,Q,pe);case xl:var dt=Ko(Q._debugInfo);return Q=ir(Q),E=$(C,E,N,Q,pe),Ut=dt,E}if(po(Q)||ne(Q))return N=C.get(N)||null,C=Ko(Q._debugInfo),E=w(E,N,Q,pe,null),Ut=C,E;if(typeof Q.then=="function")return dt=Ko(Q._debugInfo),E=$(C,E,N,zf(Q),pe),Ut=dt,E;if(Q.$$typeof===ka)return $(C,E,N,Rf(E,Q),pe);Lf(E,Q)}return typeof Q=="function"&&Bf(E,Q),typeof Q=="symbol"&&$f(E,Q),null}function ce(C,E,N,Q){if(typeof N!="object"||N===null)return Q;switch(N.$$typeof){case Fa:case xc:B(C,E,N);var pe=N.key;if(typeof pe!="string")break;if(Q===null){Q=new Set,Q.add(pe);break}if(!Q.has(pe)){Q.add(pe);break}ie(E,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",pe)});break;case xl:N=ir(N),ce(C,E,N,Q)}return Q}function Ne(C,E,N,Q){for(var pe=null,dt=null,Pe=null,Et=E,Bt=E=0,$n=null;Et!==null&&Bt<N.length;Bt++){Et.index>Bt?($n=Et,Et=null):$n=Et.sibling;var dn=O(C,Et,N[Bt],Q);if(dn===null){Et===null&&(Et=$n);break}pe=ce(C,dn,N[Bt],pe),e&&Et&&dn.alternate===null&&t(C,Et),E=a(dn,E,Bt),Pe===null?dt=dn:Pe.sibling=dn,Pe=dn,Et=$n}if(Bt===N.length)return n(C,Et),zt&&st(C,Bt),dt;if(Et===null){for(;Bt<N.length;Bt++)Et=A(C,N[Bt],Q),Et!==null&&(pe=ce(C,Et,N[Bt],pe),E=a(Et,E,Bt),Pe===null?dt=Et:Pe.sibling=Et,Pe=Et);return zt&&st(C,Bt),dt}for(Et=o(Et);Bt<N.length;Bt++)$n=$(Et,C,Bt,N[Bt],Q),$n!==null&&(pe=ce(C,$n,N[Bt],pe),e&&(dn=$n.alternate,dn!==null&&Et.delete(dn.key===null?Bt:dn.key)),E=a($n,E,Bt),Pe===null?dt=$n:Pe.sibling=$n,Pe=$n);return e&&Et.forEach(function(Yi){return t(C,Yi)}),zt&&st(C,Bt),dt}function Ge(C,E,N,Q){if(N==null)throw Error("An iterable object provided no iterator.");for(var pe=null,dt=null,Pe=E,Et=E=0,Bt=null,$n=null,dn=N.next();Pe!==null&&!dn.done;Et++,dn=N.next()){Pe.index>Et?(Bt=Pe,Pe=null):Bt=Pe.sibling;var Yi=O(C,Pe,dn.value,Q);if(Yi===null){Pe===null&&(Pe=Bt);break}$n=ce(C,Yi,dn.value,$n),e&&Pe&&Yi.alternate===null&&t(C,Pe),E=a(Yi,E,Et),dt===null?pe=Yi:dt.sibling=Yi,dt=Yi,Pe=Bt}if(dn.done)return n(C,Pe),zt&&st(C,Et),pe;if(Pe===null){for(;!dn.done;Et++,dn=N.next())Pe=A(C,dn.value,Q),Pe!==null&&($n=ce(C,Pe,dn.value,$n),E=a(Pe,E,Et),dt===null?pe=Pe:dt.sibling=Pe,dt=Pe);return zt&&st(C,Et),pe}for(Pe=o(Pe);!dn.done;Et++,dn=N.next())Bt=$(Pe,C,Et,dn.value,Q),Bt!==null&&($n=ce(C,Bt,dn.value,$n),e&&(dn=Bt.alternate,dn!==null&&Pe.delete(dn.key===null?Et:dn.key)),E=a(Bt,E,Et),dt===null?pe=Bt:dt.sibling=Bt,dt=Bt);return e&&Pe.forEach(function(vS){return t(C,vS)}),zt&&st(C,Et),pe}function Dt(C,E,N,Q){if(typeof N=="object"&&N!==null&&N.type===wc&&N.key===null&&N.props.ref===void 0&&(Nf(N,null,C),N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case Fa:var pe=Ko(N._debugInfo);e:{for(var dt=N.key;E!==null;){if(E.key===dt){if(dt=N.type,dt===wc){if(E.tag===7){n(C,E.sibling),Q=l(E,N.props.children),rr(Q,N),Q.return=C,Q._debugOwner=N._owner,Q._debugInfo=Ut,Nf(N,Q,C),C=Q;break e}}else if(E.elementType===dt||Me(E,N)||typeof dt=="object"&&dt!==null&&dt.$$typeof===xl&&ir(dt)===E.type){n(C,E.sibling),Q=l(E,N.props),rr(Q,N),Q.return=C,Q._debugOwner=N._owner,Q._debugInfo=Ut,C=Q;break e}n(C,E);break}else t(C,E);E=E.sibling}N.type===wc?(Q=Pt(N.props.children,C.mode,Q,N.key),rr(Q,N),Q.return=C,Q._debugOwner=C,Q._debugTask=C._debugTask,Q._debugInfo=Ut,Nf(N,Q,C),C=Q):(Q=wn(N,C.mode,Q),rr(Q,N),Q.return=C,Q._debugInfo=Ut,C=Q)}return C=r(C),Ut=pe,C;case xc:e:{for(pe=N,N=pe.key;E!==null;){if(E.key===N)if(E.tag===4&&E.stateNode.containerInfo===pe.containerInfo&&E.stateNode.implementation===pe.implementation){n(C,E.sibling),Q=l(E,pe.children||[]),Q.return=C,C=Q;break e}else{n(C,E);break}else t(C,E);E=E.sibling}Q=Mn(pe,C.mode,Q),Q.return=C,C=Q}return r(C);case xl:return pe=Ko(N._debugInfo),N=ir(N),C=Dt(C,E,N,Q),Ut=pe,C}if(po(N))return Ne(C,E,N,Q);if(ne(N)){if(pe=N,N=ne(pe),typeof N!="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");return dt=N.call(pe),dt===pe?(C.tag!==0||Object.prototype.toString.call(C.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(dt)!=="[object Generator]")&&(ov||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),ov=!0):pe.entries!==N||tg||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),tg=!0),Ge(C,E,dt,Q)}if(typeof N.then=="function")return pe=Ko(N._debugInfo),C=Dt(C,E,zf(N),Q),Ut=pe,C;if(N.$$typeof===ka)return Dt(C,E,Rf(C,N),Q);Lf(C,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(pe=""+N,E!==null&&E.tag===6?(n(C,E.sibling),Q=l(E,pe),Q.return=C,C=Q):(n(C,E),Q=Yn(pe,C.mode,Q),Q.return=C,Q._debugOwner=C,Q._debugTask=C._debugTask,Q._debugInfo=Ut,C=Q),r(C)):(typeof N=="function"&&Bf(C,N),typeof N=="symbol"&&$f(C,N),n(C,E))}return function(C,E,N,Q){var pe=Ut;Ut=null;try{zd=0;var dt=Dt(C,E,N,Q);return Yc=null,dt}catch($n){if($n===jc||$n===Wh)throw $n;var Pe=H(29,$n,null,C.mode);Pe.lanes=Q,Pe.return=C;var Et=Pe._debugInfo=Ut;if(Pe._debugOwner=C._debugOwner,Pe._debugTask=C._debugTask,Et!=null){for(var Bt=Et.length-1;0<=Bt;Bt--)if(typeof Et[Bt].stack=="string"){Pe._debugOwner=Et[Bt],Pe._debugTask=Et[Bt].debugTask;break}}return Pe}finally{Ut=pe}}}function R1(e,t){var n=po(e);return e=!n&&typeof ne(e)=="function",n||e?(n=n?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",n,t,n),!1):!0}function f0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function h0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sr(e){return{lane:e,tag:sv,payload:null,callback:null,next:null}}function cr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,og===o&&!dv){var l=ke(e);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,l),dv=!0}return(Wt&yo)!==ko?(l=o.pending,l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=K(e),L(e,null,n),t):(x(e,o,t,n),K(e))}function Bu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,le(e,n)}}function Hf(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?l=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $u(){if(lg){var e=Ic;if(e!==null)throw e}}function Hu(e,t,n,o){lg=!1;var l=e.updateQueue;Or=!1,og=l.shared;var a=l.firstBaseUpdate,r=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var d=c,_=d.next;d.next=null,r===null?a=_:r.next=_,r=d;var w=e.alternate;w!==null&&(w=w.updateQueue,c=w.lastBaseUpdate,c!==r&&(c===null?w.firstBaseUpdate=_:c.next=_,w.lastBaseUpdate=d))}if(a!==null){var A=l.baseState;r=0,w=_=d=null,c=a;do{var O=c.lane&-536870913,$=O!==c.lane;if($?(kt&O)===O:(o&O)===O){O!==0&&O===Dr&&(lg=!0),w!==null&&(w=w.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{O=e;var ce=c,Ne=t,Ge=n;switch(ce.tag){case cv:if(ce=ce.payload,typeof ce=="function"){Hc=!0;var Dt=ce.call(Ge,A,Ne);if(O.mode&Uo){G(!0);try{ce.call(Ge,A,Ne)}finally{G(!1)}}Hc=!1,A=Dt;break e}A=ce;break e;case ng:O.flags=O.flags&-65537|128;case sv:if(Dt=ce.payload,typeof Dt=="function"){if(Hc=!0,ce=Dt.call(Ge,A,Ne),O.mode&Uo){G(!0);try{Dt.call(Ge,A,Ne)}finally{G(!1)}}Hc=!1}else ce=Dt;if(ce==null)break e;A=At({},A,ce);break e;case uv:Or=!0}}O=c.callback,O!==null&&(e.flags|=64,$&&(e.flags|=8192),$=l.callbacks,$===null?l.callbacks=[O]:$.push(O))}else $={lane:O,tag:c.tag,payload:c.payload,callback:c.callback,next:null},w===null?(_=w=$,d=A):w=w.next=$,r|=O;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;$=c,c=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);w===null&&(d=A),l.baseState=d,l.firstBaseUpdate=_,l.lastBaseUpdate=w,a===null&&(l.shared.lanes=0),zr|=r,e.lanes=r,e.memoizedState=A}og=null}function D1(e,t){if(typeof e!="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+e);e.call(t)}function Bw(e,t){var n=e.shared.hiddenCallbacks;if(n!==null)for(e.shared.hiddenCallbacks=null,e=0;e<n.length;e++)D1(n[e],t)}function O1(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)D1(n[e],t)}function A1(e,t){var n=ui;$e(Jh,n,e),$e(Ar,t,e),ui=n|t.baseLanes}function _0(e){$e(Jh,ui,e),$e(Ar,Ar.current,e)}function m0(e){ui=Jh.current,Se(Ar,e),Se(Jh,e)}function ur(e){var t=e.alternate;$e(zo,zo.current&Xc,e),$e(No,e,e),Io===null&&(t===null||Ar.current!==null||t.memoizedState!==null)&&(Io=e)}function p0(e){$e(zo,zo.current,e),$e(No,e,e),Io===null&&(Io=e)}function N1(e){e.tag===22?($e(zo,zo.current,e),$e(No,e,e),Io===null&&(Io=e)):dr(e)}function dr(e){$e(zo,zo.current,e),$e(No,No.current,e)}function Bl(e){Se(No,e),Io===e&&(Io=null),Se(zo,e)}function Uu(e,t){$e(No,No.current,e),$e(zo,t,e)}function g0(e){Se(zo,e),Se(No,e),Io===e&&(Io=null)}function Uf(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Qm(n)||Gm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function $t(){var e=q;da===null?da=[e]:da.push(e)}function _e(){var e=q;if(da!==null&&($i++,da[$i]!==e)){var t=ke(gt);if(!fv.has(t)&&(fv.add(t),da!==null)){for(var n="",o=0;o<=$i;o++){var l=da[o],a=o===$i?e:l;for(l=o+1+". "+l;30>l.length;)l+=" ";l+=a+`
`,n+=l}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,t,n)}}}function oc(e){e==null||po(e)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",q,typeof e)}function If(){var e=ke(gt);_v.has(e)||(_v.add(e),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",e))}function Zn(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function y0(e,t){if(Hd)return!1;if(t===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",q),!1;e.length!==t.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,q,"["+t.join(", ")+"]","["+e.join(", ")+"]");for(var n=0;n<t.length&&n<e.length;n++)if(!rl(e[n],t[n]))return!1;return!0}function b0(e,t,n,o,l,a){Bi=a,gt=t,da=e!==null?e._debugHookTypes:null,$i=-1,Hd=e!==null&&e.type!==t.type,(Object.prototype.toString.call(n)==="[object AsyncFunction]"||Object.prototype.toString.call(n)==="[object AsyncGeneratorFunction]")&&(a=ke(gt),ag.has(a)||(ag.add(a),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",a===null?"An unknown Component":"<"+a+">"))),t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e!==null&&e.memoizedState!==null?rg:da!==null?mv:ig,vs=a=(t.mode&Uo)!==pt;var r=Fp(n,o,l);if(vs=!1,qc&&(r=v0(t,n,o,l)),a){G(!0);try{r=v0(t,n,o,l)}finally{G(!1)}}return z1(e,t),r}function z1(e,t){t._debugHookTypes=da,t.dependencies===null?ai!==null&&(t.dependencies={lanes:0,firstContext:null,_debugThenableState:ai}):t.dependencies._debugThenableState=ai;var n=ai;if(gs!==null&&C1(gs,t)&&(n!==null||Fh===null||eg||(eg=!0,console.error(Fh)),Fh=gs=null),P.H=t_,n=_n!==null&&_n.next!==null,Bi=0,da=q=uo=_n=gt=null,$i=-1,e!==null&&(e.flags&1206910976)!==(t.flags&1206910976)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),Kh=!1,$d=0,ai=null,n)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");e===null||no||(e=e.dependencies,e!==null&&Mf(e)&&(no=!0)),Nd?(Nd=!1,e=!0):e=!1,e&&(t=ke(t)||"Unknown",hv.has(t)||ag.has(t)||(hv.add(t),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function v0(e,t,n,o){gt=e;var l=0;do{if(qc&&(ai=null),$d=0,qc=!1,l>=F3)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(l+=1,Hd=!1,uo=_n=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}$i=-1,P.H=pv,a=Fp(t,n,o)}while(qc);return a}function $w(){var e=P.H,t=e.useState()[0];return t=typeof t.then=="function"?Iu(t):t,e=e.useState()[0],(_n!==null?_n.memoizedState:null)!==e&&(gt.flags|=1024),t}function x0(){var e=e_!==0;return e_=0,e}function w0(e,t,n){t.updateQueue=e.updateQueue,t.flags=(t.mode&Ta)!==pt?t.flags&-805308421:t.flags&-2053,e.lanes&=~n}function S0(e){if(Kh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Kh=!1}Bi=0,da=uo=_n=gt=null,$i=-1,q=null,qc=!1,$d=e_=0,ai=null}function el(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return uo===null?gt.memoizedState=uo=e:uo=uo.next=e,uo}function an(){if(_n===null){var e=gt.alternate;e=e!==null?e.memoizedState:null}else e=_n.next;var t=uo===null?gt.memoizedState:uo.next;if(t!==null)uo=t,_n=e;else{if(e===null)throw gt.alternate===null?Error("Update hook called on initial render. This is likely a bug in React. Please file an issue."):Error("Rendered more hooks than during the previous render.");_n=e,e={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},uo===null?gt.memoizedState=uo=e:uo=uo.next=e}return uo}function jf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Iu(e){var t=$d;return $d+=1,ai===null&&(ai=b1()),e=x1(ai,e,t,gt),t=gt,(uo===null?t.memoizedState:uo.next)===null&&(t=t.alternate,P.H=t!==null&&t.memoizedState!==null?rg:ig),e}function fr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Iu(e);if(e.$$typeof===E6)return;if(e.$$typeof===ka)return Dn(e)}throw Error("An unsupported type was passed to use(): "+String(e))}function ns(e){var t=null,n=gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=jf(),gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0||Hd)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=k6;else n.length!==e&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",n.length,e);return t.index++,n}function wa(e,t){return typeof t=="function"?t(e):t}function C0(e,t,n){var o=el();if(n!==void 0){var l=n(t);if(vs){G(!0);try{n(t)}finally{G(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=Yw.bind(null,gt,e),[o.memoizedState,e]}function lc(e){var t=an();return k0(t,_n,e)}function k0(e,t,n){var o=e.queue;if(o===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");o.lastRenderedReducer=n;var l=e.baseQueue,a=o.pending;if(a!==null){if(l!==null){var r=l.next;l.next=a.next,a.next=r}t.baseQueue!==l&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),t.baseQueue=l=a,o.pending=null}if(a=e.baseState,l===null)e.memoizedState=a;else{t=l.next;var c=r=null,d=null,_=t,w=!1;do{var A=_.lane&-536870913;if(A!==_.lane?(kt&A)===A:(Bi&A)===A){var O=_.revertLane;if(O===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),A===Dr&&(w=!0);else if((Bi&O)===O){_=_.next,O===Dr&&(w=!0);continue}else A={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(c=d=A,r=a):d=d.next=A,gt.lanes|=O,zr|=O;A=_.action,vs&&n(a,A),a=_.hasEagerState?_.eagerState:n(a,A)}else O={lane:A,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(c=d=O,r=a):d=d.next=O,gt.lanes|=A,zr|=A;_=_.next}while(_!==null&&_!==t);if(d===null?r=a:d.next=c,!rl(a,e.memoizedState)&&(no=!0,w&&(n=Ic,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=d,o.lastRenderedState=a}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ju(e){var t=an(),n=t.queue;if(n===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");n.lastRenderedReducer=e;var o=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var r=l=l.next;do a=e(a,r.action),r=r.next;while(r!==l);rl(a,t.memoizedState)||(no=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function E0(e,t,n){var o=gt,l=el();if(zt){if(n===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var a=n();Vc||a===n()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),Vc=!0)}else{if(a=t(),Vc||(n=t(),rl(a,n)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Vc=!0)),mn===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(kt&127)!==0||L1(o,t,a)}return l.memoizedState=a,n={value:a,getSnapshot:t},l.queue=n,qf($1.bind(null,o,n,e),[e]),o.flags|=2048,ic(ua|jo,{destroy:void 0},B1.bind(null,o,n,a,t),null),a}function Yf(e,t,n){var o=gt,l=an(),a=zt;if(a){if(n===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");n=n()}else if(n=t(),!Vc){var r=t();rl(n,r)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Vc=!0)}(r=!rl((_n||l).memoizedState,n))&&(l.memoizedState=n,no=!0),l=l.queue;var c=$1.bind(null,o,l,e);if(vl(2048,jo,c,[e]),e=l.getSnapshot!==t||r||uo!==null&&(uo.memoizedState.tag&ua)!==Bd,ic(e?ua|jo:jo,{destroy:void 0},B1.bind(null,o,l,n,t),null),e){if(o.flags|=2048,mn===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");a||(Bi&127)!==0||L1(o,t,n)}return n}function L1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=gt.updateQueue,t===null?(t=jf(),gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function B1(e,t,n,o){t.value=n,t.getSnapshot=o,H1(t)&&U1(e)}function $1(e,t,n){return n(function(){H1(t)&&(Ua(2,"updateSyncExternalStore()",e),U1(e))})}function H1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rl(e,n)}catch{return!0}}function U1(e){var t=D(e,2);t!==null&&Xn(t,e,2)}function T0(e){var t=el();if(typeof e=="function"){var n=e;if(e=n(),vs){G(!0);try{n()}finally{G(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},t}function M0(e){e=T0(e);var t=e.queue,n=ly.bind(null,gt,t);return t.dispatch=n,[e.memoizedState,n]}function R0(e){var t=el();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=X0.bind(null,gt,!0,n),n.dispatch=t,[e,t]}function I1(e,t){var n=an();return j1(n,_n,e,t)}function j1(e,t,n,o){return e.baseState=n,k0(e,_n,typeof o=="function"?o:wa)}function Y1(e,t){var n=an();return _n!==null?j1(n,_n,e,t):(n.baseState=e,[e,n.queue.dispatch])}function Hw(e,t,n,o,l){if(Ff(e))throw Error("Cannot update action state while rendering.");if(e=t.action,e!==null){var a={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};P.T!==null?n(!0):a.isTransition=!1,o(a),n=t.pending,n===null?(a.next=t.pending=a,X1(t,a)):(a.next=n.next,t.pending=n.next=a)}}function X1(e,t){var n=t.action,o=t.payload,l=e.state;if(t.isTransition){var a=P.T,r={};r.types=a!==null?a.types:null,r._updatedFibers=new Set,P.T=r;try{var c=n(l,o),d=P.S;d!==null&&d(r,c),V1(e,t,c)}catch(_){D0(e,t,_)}finally{a!==null&&r.types!==null&&(a.types!==null&&a.types!==r.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),a.types=r.types),P.T=a,a===null&&r._updatedFibers&&(e=r._updatedFibers.size,r._updatedFibers.clear(),10<e&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{r=n(l,o),V1(e,t,r)}catch(_){D0(e,t,_)}}function V1(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?(P.asyncTransitions++,n.then(Zf,Zf),n.then(function(o){q1(e,t,o)},function(o){return D0(e,t,o)}),t.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):q1(e,t,n)}function q1(e,t,n){t.status="fulfilled",t.value=n,Q1(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,X1(e,n)))}function D0(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,Q1(t),t=t.next;while(t!==o)}e.action=null}function Q1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function G1(e,t){return t}function ac(e,t){if(zt){var n=mn.formState;if(n!==null){e:{var o=gt;if(zt){if(yn){t:{for(var l=yn,a=sa;l.nodeType!==8;){if(!a){l=null;break t}if(l=Ul(l.nextSibling),l===null){l=null;break t}}a=l.data,l=a===Ag||a===ex?l:null}if(l){yn=Ul(l.nextSibling),o=l.data===Ag;break e}}Ro(o)}o=!1}o&&(t=n[0])}}return n=el(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:G1,lastRenderedState:t},n.queue=o,n=ly.bind(null,gt,o),o.dispatch=n,o=T0(!1),a=X0.bind(null,gt,!1,o.queue),o=el(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,n=Hw.bind(null,gt,l,a,n),l.dispatch=n,o.memoizedState=e,[t,n,!1]}function Xf(e){var t=an();return P1(t,_n,e)}function P1(e,t,n){if(t=k0(e,t,G1)[0],e=lc(wa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Iu(t)}catch(r){throw r===jc?Wh:r}else o=t;t=an();var l=t.queue,a=l.dispatch;return n!==t.memoizedState&&(gt.flags|=2048,ic(ua|jo,{destroy:void 0},Uw.bind(null,l,n),null)),[o,a,e]}function Uw(e,t){e.action=t}function Vf(e){var t=an(),n=_n;if(n!==null)return P1(t,n,e);an(),t=t.memoizedState,n=an();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function ic(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=gt.updateQueue,t===null&&(t=jf(),gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function O0(e){var t=el();return e={current:e},t.memoizedState=e}function os(e,t,n,o){var l=el();gt.flags|=e,l.memoizedState=ic(ua|t,{destroy:void 0},n,o===void 0?null:o)}function vl(e,t,n,o){var l=an();o=o===void 0?null:o;var a=l.memoizedState.inst;_n!==null&&o!==null&&y0(o,_n.memoizedState.deps)?l.memoizedState=ic(t,a,n,o):(gt.flags|=e,l.memoizedState=ic(ua|t,a,n,o))}function qf(e,t){(gt.mode&Ta)!==pt?os(545261568,jo,e,t):os(8390656,jo,e,t)}function Iw(e){gt.flags|=4;var t=gt.updateQueue;if(t===null)t=jf(),gt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function A0(e){var t=el(),n={impl:e};return t.memoizedState=n,function(){if((Wt&yo)!==ko)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return n.impl.apply(void 0,arguments)}}function Qf(e){var t=an().memoizedState;return Iw({ref:t,nextImpl:e}),function(){if((Wt&yo)!==ko)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return t.impl.apply(void 0,arguments)}}function N0(e,t){var n=4194308;return(gt.mode&Ta)!==pt&&(n|=268435456),os(n,Yl,e,t)}function W1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return t.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(t).join(", ")+"}"),e=e(),t.current=e,function(){t.current=null}}function z0(e,t,n){typeof t!="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null"),n=n!=null?n.concat([e]):null;var o=4194308;(gt.mode&Ta)!==pt&&(o|=268435456),os(o,Yl,W1.bind(null,t,e),n)}function Gf(e,t,n){typeof t!="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null"),n=n!=null?n.concat([e]):null,vl(4,Yl,W1.bind(null,t,e),n)}function L0(e,t){return el().memoizedState=[e,t===void 0?null:t],e}function Pf(e,t){var n=an();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&y0(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function B0(e,t){var n=el();t=t===void 0?null:t;var o=e();if(vs){G(!0);try{e()}finally{G(!1)}}return n.memoizedState=[o,t],o}function Wf(e,t){var n=an();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&y0(t,o[1]))return o[0];if(o=e(),vs){G(!0);try{e()}finally{G(!1)}}return n.memoizedState=[o,t],o}function $0(e,t){var n=el();return H0(n,e,t)}function Z1(e,t){var n=an();return J1(n,_n.memoizedState,e,t)}function F1(e,t){var n=an();return _n===null?H0(n,e,t):J1(n,_n.memoizedState,e,t)}function H0(e,t,n){return n===void 0||(Bi&1073741824)!==0&&(kt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=u5(),gt.lanes|=e,zr|=e,n)}function J1(e,t,n,o){return rl(n,t)?n:Ar.current!==null?(e=H0(e,n,o),rl(e,t)||(no=!0),e):(Bi&106)===0||(Bi&1073741824)!==0&&(kt&261930)===0?(no=!0,e.memoizedState=n):(e=u5(),gt.lanes|=e,zr|=e,t)}function Zf(){P.asyncTransitions--}function K1(e,t,n,o,l){var a=on.p;on.p=a!==0&&a<Ea?a:Ea;var r=P.T,c={};c.types=r!==null?r.types:null,c._updatedFibers=new Set,P.T=c,X0(e,!1,t,n);try{var d=l(),_=P.S;if(_!==null&&_(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){P.asyncTransitions++,d.then(Zf,Zf);var w=Lw(d,o);Yu(e,t,w,$l(e))}else Yu(e,t,o,$l(e))}catch(A){Yu(e,t,{then:function(){},status:"rejected",reason:A},$l(e))}finally{on.p=a,r!==null&&c.types!==null&&(r.types!==null&&r.types!==c.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),r.types=c.types),P.T=r,r===null&&c._updatedFibers&&(e=c._updatedFibers.size,c._updatedFibers.clear(),10<e&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function U0(e,t,n,o){if(e.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var l=ey(e).queue;Nw(e),K1(e,l,t,Ns,n===null?ae:function(){return ty(e),n(o)})}function ey(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ns,baseState:Ns,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:Ns},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ty(e){P.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var t=ey(e);t.next===null&&(t=e.alternate.memoizedState),Yu(e,t.next.queue,{},$l(e))}function I0(){var e=T0(!1);return e=K1.bind(null,gt,e.queue,!0,!1),el().memoizedState=e,[!1,e]}function ny(){var e=lc(wa)[0],t=an().memoizedState;return[typeof e=="boolean"?e:Iu(e),t]}function oy(){var e=ju(wa)[0],t=an().memoizedState;return[typeof e=="boolean"?e:Iu(e),t]}function ls(){return Dn(iu)}function j0(){var e=el(),t=mn.identifierPrefix;if(zt){var n=Ai,o=Oi;n=(o&~(1<<32-ol(o)-1)).toString(32)+n,t="_"+t+"R_"+n,n=e_++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Z3++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t}function Y0(){return el().memoizedState=jw.bind(null,gt)}function jw(e,t){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var o=$l(n),l=sr(o),a=cr(n,l,o);a!==null&&(Ua(o,"refresh()",e),Xn(a,n,o),Bu(a,n,o)),e=r0(),t!=null&&a!==null&&console.error("The seed argument is not enabled outside experimental channels."),l.payload={cache:e};return}n=n.return}}function Yw(e,t,n){var o=arguments;typeof o[3]=="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),o=$l(e);var l={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};Ff(e)?ay(t,l):(l=z(e,t,l,o),l!==null&&(Ua(o,"dispatch()",e),Xn(l,e,o),iy(l,t,o)))}function ly(e,t,n){var o=arguments;typeof o[3]=="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),o=$l(e),Yu(e,t,n,o)&&Ua(o,"setState()",e)}function Yu(e,t,n,o){var l={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ff(e))ay(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null)){var r=P.H;P.H=Oa;try{var c=t.lastRenderedState,d=a(c,n);if(l.hasEagerState=!0,l.eagerState=d,rl(d,c))return x(e,t,l,0),mn===null&&b(),!1}catch{}finally{P.H=r}}if(n=z(e,t,l,o),n!==null)return Xn(n,e,o),iy(n,t,o),!0}return!1}function X0(e,t,n,o){if(P.T===null&&Dr===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),o={lane:2,revertLane:Nm(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ff(e)){if(t)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else t=z(e,n,o,2),t!==null&&(Ua(2,"setOptimistic()",e),Xn(t,e,2))}function Ff(e){var t=e.alternate;return e===gt||t!==null&&t===gt}function ay(e,t){qc=Kh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function iy(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,le(e,n)}}function V0(e){if(e!==null&&typeof e!="function"){var t=String(e);Tv.has(t)||(Tv.add(t),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",e))}}function q0(e,t,n,o){var l=e.memoizedState,a=n(o,l);if(e.mode&Uo){G(!0);try{a=n(o,l)}finally{G(!1)}}a===void 0&&(t=me(t)||"Component",Sv.has(t)||(Sv.add(t),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",t))),l=a==null?l:At({},l,a),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}function ry(e,t,n,o,l,a,r){var c=e.stateNode;if(typeof c.shouldComponentUpdate=="function"){if(n=c.shouldComponentUpdate(o,a,r),e.mode&Uo){G(!0);try{n=c.shouldComponentUpdate(o,a,r)}finally{G(!1)}}return n===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",me(t)||"Component"),n}return t.prototype&&t.prototype.isPureReactComponent?!er(n,o)||!er(l,a):!0}function sy(e,t,n,o){var l=t.state;typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==l&&(e=ke(e)||"Component",yv.has(e)||(yv.add(e),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",e)),sg.enqueueReplaceState(t,t.state,null))}function as(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=At({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function cy(e){Bp(e),console.warn(`%s

%s
`,Qc?"An error occurred in the <"+Qc+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function uy(e){var t=Qc?"The above error occurred in the <"+Qc+"> component.":"The above error occurred in one of your React components.",n="React will try to recreate this component tree from scratch using the error boundary you provided, "+((cg||"Anonymous")+".");if(typeof e=="object"&&e!==null&&typeof e.environmentName=="string"){var o=e.environmentName;e=[`%o

%s

%s
`,e,t,n].slice(0),typeof e[0]=="string"?e.splice(0,1,ux+" "+e[0],dx,A_+o+A_,fx):e.splice(0,0,ux,dx,A_+o+A_,fx),e.unshift(console),o=yS.apply(console.error,e),o()}else console.error(`%o

%s

%s
`,e,t,n)}function dy(e){Bp(e)}function Jf(e,t){try{Qc=t.source?ke(t.source):null,cg=null;var n=t.value;if(P.actQueue!==null)P.thrownErrors.push(n);else{var o=e.onUncaughtError;o(n,{componentStack:t.stack})}}catch(l){setTimeout(function(){throw l})}}function fy(e,t,n){try{Qc=n.source?ke(n.source):null,cg=ke(t);var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Q0(e,t,n){return n=sr(n),n.tag=ng,n.payload={element:null},n.callback=function(){ie(t.source,Jf,e,t)},n}function G0(e){return e=sr(e),e.tag=ng,e}function P0(e,t,n,o){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var a=o.value;e.payload=function(){return l(a)},e.callback=function(){He(n),ie(o.source,fy,t,n,o)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){He(n),ie(o.source,fy,t,n,o),typeof l!="function"&&(Br===null?Br=new Set([this]):Br.add(this)),Q3(this,o),typeof l=="function"||(n.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",ke(n)||"Unknown")})}function Xw(e,t,n,o,l){if(n.flags|=32768,ei&&Zu(e,l),o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&Kr(t,n,l,!0),zt&&(oi=!0),n=No.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Io===null?fh():n.alternate===null&&Ln===Hi&&(Ln=r_),n.flags&=-257,n.flags|=65536,n.lanes=l,o===Zh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),Rm(e,o,l)),!1;case 22:return n.flags|=65536,o===Zh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),Rm(e,o,l)),!1}throw Error("Unexpected Suspense handler tag ("+n.tag+"). This is a bug in React.")}return Rm(e,o,l),fh(),!1}if(zt)return oi=!0,t=No.current,t!==null?(t.tag===19&&console.error("SuspenseList should never catch while hydrating. This is a bug in React."),(t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==Yp&&Au(Qe(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:o}),n))):(o!==Yp&&Au(Qe(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:o}),n)),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=Qe(o,n),l=Q0(e.stateNode,o,l),Hf(e,l),Ln!==Nr&&(Ln=ws)),!1;var a=Qe(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:o}),n);if(Qd===null?Qd=[a]:Qd.push(a),Ln!==Nr&&(Ln=ws),t===null)return!0;o=Qe(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Q0(n.stateNode,o,e),Hf(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Br===null||!Br.has(a))))return n.flags|=65536,l&=-l,n.lanes|=l,l=G0(l),P0(l,e,n,o),Hf(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}function mo(e,t,n,o){t.child=e===null?rv(t,null,n,o):bs(t,e.child,n,o)}function hy(e,t,n,o,l){n=n.render;var a=ve(n);if(a!==n&&(n=a,e!==null&&(no=!0)),a=t.ref,"ref"in o){var r={};for(var c in o)c!=="ref"&&(r[c]=o[c])}else r=o;return es(t),o=b0(e,t,n,r,a,l),c=x0(),e!==null&&!no?(w0(e,t,l),Ci(e,t,l)):(zt&&c&&gn(t),t.flags|=1,mo(e,t,o,l),t.child)}function _y(e,t,n,o,l){if(e===null){var a=n.type;return typeof a=="function"&&!mt(a)&&a.defaultProps===void 0&&n.compare===null?(n=ve(a),t.tag=15,t.type=n,Z0(t,a),my(e,t,n,o,l)):(e=Le(n.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!nm(e,l)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(r,o)&&e.ref===t.ref)return Ci(e,t,l)}return t.flags|=1,e=xt(a,o),e.ref=t.ref,e.return=t,t.child=e}function my(e,t,n,o,l){if(e!==null){var a=e.memoizedProps;if(er(a,o)&&e.ref===t.ref&&t.type===e.type)if(no=!1,t.pendingProps=o=a,nm(e,l))(e.flags&131072)!==0&&(no=!0);else return t.lanes=e.lanes,Ci(e,t,l)}return W0(e,t,n,o,l)}function py(e,t,n,o){var l=o.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:yd,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~a}else o=0,t.child=null;return gy(e,t,a,n,o)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Af(t,a!==null?a.cachePool:null),a!==null?A1(t,a):_0(t),N1(t);else return o=t.lanes=536870912,gy(e,t,a!==null?a.baseLanes|n:n,n,o)}else a!==null?(Af(t,a.cachePool),A1(t,a),dr(t),t.memoizedState=null):(e!==null&&Af(t,null),_0(t),dr(t));return mo(e,t,l,n),t.child}function Xu(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:yd,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gy(e,t,n,o,l){var a=u0();return a=a===null?null:{parent:co._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Af(t,null),_0(t),N1(t),e!==null&&Kr(e,t,o,!0),t.childLanes=l,null}function Kf(e,t){var n=t.hidden;return n!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,n===!0?"hidden":n===!1?"hidden={false}":"hidden={...}",n?'mode="hidden"':'mode="visible"'),t=eh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function yy(e,t,n){return bs(t,e.child,null,n),e=Kf(t,t.pendingProps),e.flags|=2,Bl(t),t.memoizedState=null,e}function Vw(e,t,n){var o=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(zt){if(o.mode==="hidden")return e=Kf(t,o),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Xu(null,e);if(p0(t),(e=yn)?(n=c2(e,sa),n=n!==null&&n.data===Rs?n:null,n!==null&&(o={dehydrated:n,treeContext:Fo(),retryLane:536870912,hydrationErrors:null},t.memoizedState=o,o=Jt(n),o.return=t,t.child=o,xo=t,yn=null)):n=null,n===null)throw Rn(t,e),Ro(t);return t.lanes=536870912,null}return Kf(t,o)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(p0(t),l)if(t.flags&256)t.flags&=-257,t=yy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(xa(),(n&536870912)!==0&&dh(t),no||Kr(e,t,n,!1),l=(n&e.childLanes)!==0,no||l){if(Ar.current===null){if(o=mn,o!==null&&(r=we(o,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,D(e,r),Xn(o,e,r),ug;fh()}t=yy(e,t,n)}else e=a.treeContext,yn=Ul(r.nextSibling),xo=t,zt=!0,kr=null,oi=!1,jl=null,sa=!1,e!==null&&ro(t,e),t=Kf(t,o),t.flags|=134221824;return t}return a=e.child,o={mode:o.mode,children:o.children},(n&536870912)!==0&&(n&e.lanes)!==0&&dh(t),e=xt(a,o),e.ref=t.ref,t.child=e,e.return=t,e}function rc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");(e===null||e.ref!==n)&&(t.flags|=4194816)}}function W0(e,t,n,o,l){if(n.prototype&&typeof n.prototype.render=="function"){var a=me(n)||"Unknown";Mv[a]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",a,a),Mv[a]=!0)}return t.mode&Uo&&Da.recordLegacyContextWarning(t,null),e===null&&(Z0(t,t.type),n.contextTypes&&(a=me(n)||"Unknown",Dv[a]||(Dv[a]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",a)))),es(t),n=b0(e,t,n,o,void 0,l),o=x0(),e!==null&&!no?(w0(e,t,l),Ci(e,t,l)):(zt&&o&&gn(t),t.flags|=1,mo(e,t,n,l),t.child)}function by(e,t,n,o,l,a){return es(t),$i=-1,Hd=e!==null&&e.type!==t.type,t.updateQueue=null,n=v0(t,o,n,l),z1(e,t),o=x0(),e!==null&&!no?(w0(e,t,a),Ci(e,t,a)):(zt&&o&&gn(t),t.flags|=1,mo(e,t,n,a),t.child)}function vy(e,t,n,o,l){switch(k(t)){case!1:var a=t.stateNode,r=new t.type(t.memoizedProps,a.context).state;a.updater.enqueueSetState(a,r,null);break;case!0:t.flags|=128,t.flags|=65536,a=Error("Simulated error coming from DevTools");var c=l&-l;if(t.lanes|=c,r=mn,r===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");c=G0(c),P0(c,r,t,Qe(a,t)),Hf(t,c)}if(es(t),t.stateNode===null){if(r=Cr,a=n.contextType,"contextType"in n&&a!==null&&(a===void 0||a.$$typeof!==ka)&&!Ev.has(n)&&(Ev.add(n),c=a===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof a!="object"?" However, it is set to a "+typeof a+".":a.$$typeof===sp?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(a).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",me(n)||"Component",c)),typeof a=="object"&&a!==null&&(r=Dn(a)),a=new n(o,r),t.mode&Uo){G(!0);try{a=new n(o,r)}finally{G(!1)}}if(r=t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=sg,t.stateNode=a,a._reactInternals=t,a._reactInternalInstance=gv,typeof n.getDerivedStateFromProps=="function"&&r===null&&(r=me(n)||"Component",bv.has(r)||(bv.add(r),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",r,a.state===null?"null":"undefined",r))),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"){var d=c=r=null;if(typeof a.componentWillMount=="function"&&a.componentWillMount.__suppressDeprecationWarning!==!0?r="componentWillMount":typeof a.UNSAFE_componentWillMount=="function"&&(r="UNSAFE_componentWillMount"),typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps.__suppressDeprecationWarning!==!0?c="componentWillReceiveProps":typeof a.UNSAFE_componentWillReceiveProps=="function"&&(c="UNSAFE_componentWillReceiveProps"),typeof a.componentWillUpdate=="function"&&a.componentWillUpdate.__suppressDeprecationWarning!==!0?d="componentWillUpdate":typeof a.UNSAFE_componentWillUpdate=="function"&&(d="UNSAFE_componentWillUpdate"),r!==null||c!==null||d!==null){a=me(n)||"Component";var _=typeof n.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";xv.has(a)||(xv.add(a),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,a,_,r!==null?`
  `+r:"",c!==null?`
  `+c:"",d!==null?`
  `+d:""))}}a=t.stateNode,r=me(n)||"Component",a.render||(n.prototype&&typeof n.prototype.render=="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",r):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",r)),!a.getInitialState||a.getInitialState.isReactClassApproved||a.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",r),a.getDefaultProps&&!a.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",r),a.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",r),n.childContextTypes&&!kv.has(n)&&(kv.add(n),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",r)),n.contextTypes&&!Cv.has(n)&&(Cv.add(n),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",r)),typeof a.componentShouldUpdate=="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",r),n.prototype&&n.prototype.isPureReactComponent&&typeof a.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",me(n)||"A pure component"),typeof a.componentDidUnmount=="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",r),typeof a.componentDidReceiveProps=="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",r),typeof a.componentWillRecieveProps=="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",r),typeof a.UNSAFE_componentWillRecieveProps=="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",r),c=a.props!==o,a.props!==void 0&&c&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",r),a.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",r,r),typeof a.getSnapshotBeforeUpdate!="function"||typeof a.componentDidUpdate=="function"||vv.has(n)||(vv.add(n),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",me(n))),typeof a.getDerivedStateFromProps=="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",r),typeof a.getDerivedStateFromError=="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",r),typeof n.getSnapshotBeforeUpdate=="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",r),(c=a.state)&&(typeof c!="object"||po(c))&&console.error("%s.state: must be set to an object or null",r),typeof a.getChildContext=="function"&&typeof n.childContextTypes!="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",r),a=t.stateNode,a.props=o,a.state=t.memoizedState,a.refs={},f0(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?Dn(r):Cr,a.state===o&&(r=me(n)||"Component",wv.has(r)||(wv.add(r),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",r))),t.mode&Uo&&Da.recordLegacyContextWarning(t,a),Da.recordUnsafeLifecycleWarnings(t,a),a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(q0(t,n,r,o),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",ke(t)||"Component"),sg.enqueueReplaceState(a,a.state,null)),Hu(t,o,a,l),$u(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),(t.mode&Ta)!==pt&&(t.flags|=268435456),a=!0}else if(e===null){a=t.stateNode;var w=t.memoizedProps;c=as(n,w),a.props=c;var A=a.context;d=n.contextType,r=Cr,typeof d=="object"&&d!==null&&(r=Dn(d)),_=n.getDerivedStateFromProps,d=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(w||A!==r)&&sy(t,a,o,r),Or=!1;var O=t.memoizedState;a.state=O,Hu(t,o,a,l),$u(),A=t.memoizedState,w||O!==A||Or?(typeof _=="function"&&(q0(t,n,_,o),A=t.memoizedState),(c=Or||ry(t,n,c,o,O,A,r))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308),(t.mode&Ta)!==pt&&(t.flags|=268435456)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),(t.mode&Ta)!==pt&&(t.flags|=268435456),t.memoizedProps=o,t.memoizedState=A),a.props=o,a.state=A,a.context=r,a=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),(t.mode&Ta)!==pt&&(t.flags|=268435456),a=!1)}else{a=t.stateNode,h0(e,t),r=t.memoizedProps,d=as(n,r),a.props=d,_=t.pendingProps,O=a.context,A=n.contextType,c=Cr,typeof A=="object"&&A!==null&&(c=Dn(A)),w=n.getDerivedStateFromProps,(A=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==_||O!==c)&&sy(t,a,o,c),Or=!1,O=t.memoizedState,a.state=O,Hu(t,o,a,l),$u();var $=t.memoizedState;r!==_||O!==$||Or||e!==null&&e.dependencies!==null&&Mf(e.dependencies)?(typeof w=="function"&&(q0(t,n,w,o),$=t.memoizedState),(d=Or||ry(t,n,d,o,O,$,c)||e!==null&&e.dependencies!==null&&Mf(e.dependencies))?(A||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,$,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,$,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=$),a.props=o,a.state=$,a.context=c,a=d):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),a=!1)}if(c=a,rc(e,t),r=(t.flags&128)!==0,c||r){if(c=t.stateNode,nt(t),r&&typeof n.getDerivedStateFromError!="function")n=null,sl=-1;else if(n=Gb(c),t.mode&Uo){G(!0);try{Gb(c)}finally{G(!1)}}t.flags|=1,e!==null&&r?(t.child=bs(t,e.child,null,l),t.child=bs(t,null,n,l)):mo(e,t,n,l),t.memoizedState=c.state,e=t.child}else e=Ci(e,t,l);return l=t.stateNode,a&&l.props!==o&&(Gc||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",ke(t)||"a component"),Gc=!0),e}function xy(e,t,n,o){return xi(),t.flags|=256,mo(e,t,n,o),t.child}function Z0(e,t){t&&t.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,t.displayName||t.name||"Component"),typeof t.getDerivedStateFromProps=="function"&&(e=me(t)||"Unknown",Ov[e]||(console.error("%s: Function components do not support getDerivedStateFromProps.",e),Ov[e]=!0)),typeof t.contextType=="object"&&t.contextType!==null&&(t=me(t)||"Unknown",Rv[t]||(console.error("%s: Function components do not support contextType.",t),Rv[t]=!0))}function F0(e){return{baseLanes:e,cachePool:y1()}}function J0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Tl),e}function wy(e,t,n){var o=t.pendingProps;g(t)&&(t.flags|=128);var l=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(zo.current&Ld)!==0),r&&(l=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(zt){if(l?ur(t):dr(t),(e=yn)?(n=c2(e,sa),n=n!==null&&n.data!==Rs?n:null,n!==null&&(r={dehydrated:n,treeContext:Fo(),retryLane:536870912,hydrationErrors:null},t.memoizedState=r,r=Jt(n),r.return=t,t.child=r,xo=t,yn=null)):n=null,n===null)throw Rn(t,e),Ro(t);return Gm(n)?t.lanes=32:t.lanes=536870912,null}return a=o.children,o=o.fallback,l?(dr(t),l=t.mode,a=eh({mode:"hidden",children:a},l),o=Pt(o,l,n,null),a.return=t,o.return=t,a.sibling=o,t.child=a,o=t.child,o.memoizedState=F0(n),o.childLanes=J0(e,r,n),t.memoizedState=fg,Xu(null,o)):(ur(t),K0(t,a))}var c=e.memoizedState;if(c!==null){var d=c.dehydrated;if(d!==null)return qw(e,t,a,r,o,d,c,n)}return l?(dr(t),l=o.fallback,a=t.mode,c=e.child,d=c.sibling,o=xt(c,{mode:"hidden",children:o.children}),o.subtreeFlags=c.subtreeFlags&1206910976,d!==null?l=xt(d,l):(l=Pt(l,a,n,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,Xu(null,o),o=t.child,l=e.child.memoizedState,l===null?l=F0(n):(a=l.cachePool,a!==null?(c=co._currentValue,a=a.parent!==c?{parent:c,pool:c}:a):a=y1(),l={baseLanes:l.baseLanes|n,cachePool:a}),o.memoizedState=l,o.childLanes=J0(e,r,n),t.memoizedState=fg,Xu(e.child,o)):(c!==null&&(n&62914560)===n&&(n&e.lanes)!==0&&dh(t),ur(t),n=e.child,e=n.sibling,n=xt(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function K0(e,t){return t=eh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function eh(e,t){return e=H(22,e,null,t),e.lanes=0,e}function th(e,t,n){return bs(t,e.child,null,n),e=K0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qw(e,t,n,o,l,a,r,c){if(n){if(t.flags&256)return ur(t),t.flags&=-257,th(e,t,c);if(t.memoizedState!==null)return dr(t),t.child=e.child,t.flags|=128,null;dr(t);var d=l.fallback,_=t.mode,w=eh({mode:"visible",children:l.children},_);return d=Pt(d,_,c,null),d.flags|=2,w.return=t,d.return=t,w.sibling=d,t.child=w,bs(t,e.child,null,c),d=t.child,d.memoizedState=F0(c),d.childLanes=J0(e,o,c),t.memoizedState=fg,Xu(null,d)}if(ur(t),xa(),(c&536870912)!==0&&dh(t),Gm(a)){if(o=a.nextSibling&&a.nextSibling.dataset,o){d=o.dgst;var A=o.msg;_=o.stck,w=o.cstck}return a=A,r=d,l=_,o=w,d=r,_=a,w=l,l=o,d!==q3&&(o=Error(_||"The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),o.stack=w||"",o.digest=d,d=l===void 0?null:l,_={value:o,source:null,stack:d},typeof d=="string"&&jp.set(o,_),Au(_)),th(e,t,c)}if(no||Kr(e,t,c,!1),o=(c&e.childLanes)!==0,no||o){if(Ar.current!==null)return th(e,t,c);if(o=mn,o!==null&&(d=we(o,c),d!==0&&d!==r.retryLane))throw r.retryLane=d,D(e,d),Xn(o,e,d),ug;return Qm(a)||fh(),th(e,t,c)}return Qm(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,yn=Ul(a.nextSibling),xo=t,zt=!0,kr=null,oi=!1,jl=null,sa=!1,e!==null&&ro(t,e),t=K0(t,l.children),t.flags|=134221824,t)}function Sy(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Tf(e.return,t,n)}function Cy(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Uf(n)===null&&(t=e),e=e.sibling}return t}function nh(e,t,n,o,l,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:l,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=n,r.tailMode=l,r.treeForkCount=a)}function em(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function tm(e,t,n){var o=t.pendingProps,l=o.revealOrder,a=o.tail,r=o.children,c=zo.current;if(t.flags&128)return Uu(t,c),null;if((o=(c&Ld)!==0)?(c=c&Xc|Ld,t.flags|=128):c&=Xc,Uu(t,c),c=l??"null",l!=null&&l!=="forwards"&&l!=="backwards"&&l!=="unstable_legacy-backwards"&&l!=="together"&&l!=="independent"&&!Av[c])if(Av[c]=!0,typeof l=="string")switch(l.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',l,l.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',l,l.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',l)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',l);c=a??"null",dg[c]||a==null||(a!=="visible"&&a!=="collapsed"&&a!=="hidden"?(dg[c]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',a)):l!=null&&l!=="forwards"&&l!=="backwards"&&l!=="unstable_legacy-backwards"&&(dg[c]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" (default) or "backwards". Did you mean to specify revealOrder="forwards"?',a)));e:if((l==null||l==="forwards"||l==="backwards"||l==="unstable_legacy-backwards")&&r!==void 0&&r!==null&&r!==!1)if(po(r)){for(c=0;c<r.length;c++)if(!R1(r[c],c))break e}else if(c=ne(r),typeof c=="function"){if(c=c.call(r))for(var d=c.next(),_=0;!d.done;d=c.next()){if(!R1(d.value,_))break e;_++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',l);if(l==="backwards"&&e!==null?(em(e),mo(e,t,r,n),em(e)):mo(e,t,r,n),zt?(bl(),r=bd):r=0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sy(e,n,t);else if(e.tag===19)Sy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":n=Cy(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null,em(t)),nh(t,!0,l,null,a,r);break;case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Uf(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}nh(t,!0,n,null,a,r);break;case"together":nh(t,!1,null,null,void 0,r);break;case"independent":t.memoizedState=null;break;default:n=Cy(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),nh(t,!1,l,n,a,r)}return t.child}function ky(e,t,n){var o=t.type,l=t.pendingProps,a=l.value;return"value"in l||zv||(zv=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),ar(t,o,a),mo(e,t,l.children,n),t.child}function Ci(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sl=-1,zr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Kr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error("Resuming work not yet implemented.");if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Mf(e)))}function Qw(e,t,n){switch(t.tag){case 3:En(t,t.stateNode.containerInfo),ar(t,co,e.memoizedState.cache),xi();break;case 27:case 5:In(t);break;case 4:En(t,t.stateNode.containerInfo);break;case 10:ar(t,t.type,t.memoizedProps.value);break;case 12:(n&t.childLanes)!==0&&(t.flags|=4),t.flags|=2048;var o=t.stateNode;o.effectDuration=-0,o.passiveEffectDuration=-0;break;case 31:if(t.memoizedState!==null)return t.flags|=128,p0(t),null;break;case 13:if(o=t.memoizedState,o!==null){if(o.dehydrated!==null)return ur(t),t.flags|=128,null;o=Kr(e,t,n,!1);var l=t.child.childLanes;return o||(n&l)!==0?wy(e,t,n):(ur(t),e=Ci(e,t,n),e!==null?e.sibling:null)}ur(t);break;case 19:if(t.flags&128)return tm(e,t,n);if(l=(e.flags&128)!==0,o=(n&t.childLanes)!==0,o||(Kr(e,t,n,!1),o=(n&t.childLanes)!==0),l){if(o)return tm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Uu(t,zo.current),o)break;return null;case 22:return t.lanes=0,py(e,t,n,t.pendingProps);case 24:ar(t,co,e.memoizedState.cache)}return Ci(e,t,n)}function om(e,t,n){if(t._debugNeedsRemount&&e!==null){n=Le(ve(t.elementType),t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes),n._debugStack=t._debugStack,n._debugTask=t._debugTask;var o=t.return;if(o===null)throw Error("Cannot swap the root fiber.");if(e.alternate=null,t.alternate=null,n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,n._debugInfo=t._debugInfo,t===o.child)o.child=n;else{var l=o.child;if(l===null)throw Error("Expected parent to have a child.");for(;l.sibling!==t;)if(l=l.sibling,l===null)throw Error("Expected to find the previous sibling.");l.sibling=n}return t=o.deletions,t===null?(o.deletions=[e],o.flags|=16):t.push(e),n.flags|=134217730,n}if(e!==null)if(e.memoizedProps!==t.pendingProps||t.type!==e.type)no=!0;else{if(!nm(e,n)&&(t.flags&128)===0)return no=!1,Qw(e,t,n);no=(e.flags&131072)!==0}else no=!1,(o=zt)&&(bl(),o=(t.flags&1048576)!==0),o&&(o=t.index,bl(),Sn(t,bd,o));switch(t.lanes=0,t.tag){case 16:e:if(o=t.pendingProps,e=ir(t.elementType),e=ve(e),t.type=e,typeof e=="function")mt(e)?(o=as(e,o),t.tag=1,t=vy(null,t,e,o,n)):(t.tag=0,Z0(t,e),t=W0(null,t,e,o,n));else{if(e!=null){if(l=e.$$typeof,l===Sh){t.tag=11,t=hy(null,t,e,o,n);break e}else if(l===Ch){t.tag=14,t=_y(null,t,e,o,n);break e}else if(l===ka){t.tag=10,t.type=e,t=ky(null,t,n);break e}}throw t="",e!==null&&typeof e=="object"&&e.$$typeof===xl&&(t=" Did you wrap a component in React.lazy() more than once?"),n=me(e)||e,Error("Element type is invalid. Received a promise that resolves to: "+n+". Lazy element type must resolve to a class or function."+t)}return t;case 0:return W0(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,l=as(o,t.pendingProps),vy(e,t,o,l,n);case 3:e:{if(En(t,t.stateNode.containerInfo),e===null)throw Error("Should have a current fiber. This is a bug in React.");o=t.pendingProps;var a=t.memoizedState;l=a.element,h0(e,t),Hu(t,o,null,n);var r=t.memoizedState;if(o=r.cache,ar(t,co,o),o!==a.cache&&i0(t,[co],n,!0),$u(),o=r.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=xy(e,t,o,n);break e}else if(o!==l){l=Qe(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),t),Au(l),t=xy(e,t,o,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,yn=Ul(e.firstChild),xo=t,zt=!0,kr=null,oi=!1,jl=null,sa=!0,n=rv(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(xi(),o===l){t=Ci(e,t,n);break e}mo(e,t,o,n)}t=t.child}return t;case 26:return rc(e,t),e===null?(n=p2(t.type,null,t.pendingProps,null))?t.memoizedState=n:zt||(t.stateNode=P5(t.type,t.pendingProps,Mt(yr.current),t)):t.memoizedState=p2(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return In(t),e===null&&zt&&(o=Mt(yr.current),l=jt(),o=t.stateNode=h2(t.type,t.pendingProps,o,l,!1),oi||(l=V5(o,t.type,t.pendingProps,l),l!==null&&(Jo(t,0).serverProps=l)),xo=t,sa=!0,l=yn,pr(t.type)?(Hg=l,yn=Ul(o.firstChild)):yn=l),mo(e,t,t.pendingProps.children,n),rc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&zt&&(a=jt(),o=xu(t.type,a.ancestorInfo),l=yn,(r=!l)||(r=t6(l,t.type,t.pendingProps,sa),r!==null?(t.stateNode=r,oi||(a=V5(r,t.type,t.pendingProps,a),a!==null&&(Jo(t,0).serverProps=a)),xo=t,yn=Ul(r.firstChild),sa=!1,a=!0):a=!1,r=!a),r&&(o&&Rn(t,l),Ro(t))),In(t),l=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,o=a.children,Ym(l,a)?o=null:r!==null&&Ym(l,r)&&(t.flags|=32),t.memoizedState!==null&&(l=b0(e,t,$w,null,null,n),iu._currentValue=l),rc(e,t),mo(e,t,o,n),t.child;case 6:return e===null&&zt&&(n=t.pendingProps,e=jt(),o=e.ancestorInfo.current,n=o!=null?Rt(n,o.tag,e.ancestorInfo.implicitRootScope):!0,e=yn,(o=!e)||(o=n6(e,t.pendingProps,sa),o!==null?(t.stateNode=o,xo=t,yn=null,o=!0):o=!1,o=!o),o&&(n&&Rn(t,e),Ro(t))),null;case 13:return wy(e,t,n);case 4:return En(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=bs(t,null,o,n):mo(e,t,o,n),t.child;case 11:return hy(e,t,t.type,t.pendingProps,n);case 7:return o=t.pendingProps,rc(e,t),mo(e,t,o,n),t.child;case 8:return mo(e,t,t.pendingProps.children,n),t.child;case 12:return t.flags|=4,t.flags|=2048,o=t.stateNode,o.effectDuration=-0,o.passiveEffectDuration=-0,mo(e,t,t.pendingProps.children,n),t.child;case 10:return ky(e,t,n);case 9:return l=t.type._context,o=t.pendingProps.children,typeof o!="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),es(t),l=Dn(l),o=Fp(o,l,void 0),t.flags|=1,mo(e,t,o,n),t.child;case 14:return _y(e,t,t.type,t.pendingProps,n);case 15:return my(e,t,t.type,t.pendingProps,n);case 19:return tm(e,t,n);case 31:return Vw(e,t,n);case 22:return py(e,t,n,t.pendingProps);case 24:return es(t),o=Dn(co),e===null?(l=u0(),l===null&&(l=mn,a=r0(),l.pooledCache=a,ts(a),a!==null&&(l.pooledCacheLanes|=n),l=a),t.memoizedState={parent:o,cache:l},f0(t),ar(t,co,l)):((e.lanes&n)!==0&&(h0(e,t),Hu(t,null,null,n),$u()),l=e.memoizedState,a=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ar(t,co,o)):(o=a.cache,ar(t,co,o),o!==l.cache&&i0(t,[co],n,!0))),mo(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=t.pendingProps,o.name!=null&&o.name!=="auto"?t.flags|=e===null?18882560:18874368:zt&&gn(t),o.className!==void 0&&(l=typeof o.className=="string"?JSON.stringify(o.className):"{...}",Nv[l]||(Nv[l]=!0,console.error(`<ViewTransition> doesn't accept a "className" prop. It has been renamed to "default".
-   <ViewTransition className=%s>
+   <ViewTransition default=%s>`,l,l))),e!==null&&e.memoizedProps.name!==o.name?t.flags|=4194816:rc(e,t),mo(e,t,o.children,n),t.child;case 29:throw t.pendingProps}throw Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function ki(e){e.flags|=4}function lm(e,t,n,o,l){var a;if((a=(e.mode&Bb)!==pt)&&(a=n===null?v2(t,o):v2(t,o)&&(o.src!==n.src||o.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(_5())e.flags|=8192;else throw ys=Zh,Kp}else e.flags&=-16777217}function Ey(e,t){if(t.type!=="stylesheet"||(t.state.loading&fa)!==As)e.flags&=-16777217;else if(e.flags|=16777216,!x2(t))if(_5())e.flags|=8192;else throw ys=Zh,Kp}function oh(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?St():536870912,e.lanes|=t,ks|=t)}function Vu(e,t){if(!zt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function hn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)if((e.mode&Nt)!==pt){for(var l=e.selfBaseDuration,a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&1206910976,o|=a.flags&1206910976,l+=a.treeBaseDuration,a=a.sibling;e.treeBaseDuration=l}else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags&1206910976,o|=l.flags&1206910976,l.return=e,l=l.sibling;else if((e.mode&Nt)!==pt){l=e.actualDuration,a=e.selfBaseDuration;for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,l+=r.actualDuration,a+=r.treeBaseDuration,r=r.sibling;e.actualDuration=l,e.treeBaseDuration=a}else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Gw(e,t,n){var o=t.pendingProps;switch(Zo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(t),null;case 1:return hn(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),wi(co,t),en(t),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(lr(t)?(a0(),ki(t)):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ou())),hn(t),null;case 26:var l=t.type,a=t.memoizedState;return e===null?(ki(t),a!==null?(hn(t),Ey(t,a)):(hn(t),lm(t,l,null,o,n))):a?a!==e.memoizedState?(ki(t),hn(t),Ey(t,a)):(hn(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&ki(t),hn(t),lm(t,l,e,o,n)),null;case 27:if(Pn(t),n=Mt(yr.current),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ki(t);else{if(!o){if(t.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return hn(t),t.subtreeFlags&=-33554433,null}e=jt(),lr(t)?Ha(t,e):(e=h2(l,o,n,e,!0),t.stateNode=e,ki(t))}return hn(t),t.subtreeFlags&=-33554433,null;case 5:if(Pn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ki(t);else{if(!o){if(t.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return hn(t),t.subtreeFlags&=-33554433,null}var r=jt();if(lr(t))Ha(t,r);else{switch(a=Mt(yr.current),xu(l,r.ancestorInfo),r=r.context,a=Ku(a),r){case lu:a=a.createElementNS(Ec,l);break;case M_:a=a.createElementNS(Ah,l);break;default:switch(l){case"svg":a=a.createElementNS(Ec,l);break;case"math":a=a.createElementNS(Ah,l);break;case"script":a=a.createElement("div"),ox||C4(o)||(console.error("Encountered a script tag while rendering React component. Scripts inside React components are never executed when rendering on the client. Consider using template tag instead (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)."),ox=!0),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof o.is=="string"?a.createElement("select",{is:o.is}):a.createElement("select"),o.multiple?a.multiple=!0:o.size&&(a.size=o.size);break;default:a=typeof o.is=="string"?a.createElement(l,{is:o.is}):a.createElement(l),l.indexOf("-")===-1&&(l!==l.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",l),Object.prototype.toString.call(a)!=="[object HTMLUnknownElement]"||oa.call(lx,l)||(lx[l]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",l)))}}a[Ao]=t,a[al]=o;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;e:switch(Oo(a,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ki(t)}}return hn(t),t.subtreeFlags&=-33554433,lm(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&ki(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(e=Mt(yr.current),n=jt(),lr(t)){if(e=t.stateNode,n=t.memoizedProps,l=!oi,o=null,a=xo,a!==null)switch(a.tag){case 3:l&&(l=d2(e,n,o),l!==null&&(Jo(t,0).serverProps=l));break;case 27:case 5:o=a.memoizedProps,l&&(l=d2(e,n,o),l!==null&&(Jo(t,0).serverProps=l))}e[Ao]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||U5(e.nodeValue,n)),e||Ro(t,!0)}else l=n.ancestorInfo.current,l!=null&&Rt(o,l.tag,n.ancestorInfo.implicitRootScope),e=Ku(e).createTextNode(o),e[Ao]=t,t.stateNode=e}return hn(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(o=lr(t),n!==null){if(e===null){if(!o)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");e[Ao]=t,hn(t),(t.mode&Nt)!==pt&&n!==null&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration))}else a0(),xi(),(t.flags&128)===0&&(n=t.memoizedState=null),t.flags|=4,hn(t),(t.mode&Nt)!==pt&&n!==null&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration));e=!1}else n=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bl(t),t):(Bl(t),null);if((t.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return hn(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=o,a=lr(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");a[Ao]=t,hn(t),(t.mode&Nt)!==pt&&l!==null&&(l=t.child,l!==null&&(t.treeBaseDuration-=l.treeBaseDuration))}else a0(),xi(),(t.flags&128)===0&&(l=t.memoizedState=null),t.flags|=4,hn(t),(t.mode&Nt)!==pt&&l!==null&&(l=t.child,l!==null&&(t.treeBaseDuration-=l.treeBaseDuration));l=!1}else l=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Bl(t),t):(Bl(t),null)}return Bl(t),(t.flags&128)!==0?(t.lanes=n,(t.mode&Nt)!==pt&&Lu(t),t):(n=o!==null,e=e!==null&&e.memoizedState!==null,n&&(o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),a=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(a=o.memoizedState.cachePool.pool),a!==l&&(o.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),oh(t,t.updateQueue),hn(t),(t.mode&Nt)!==pt&&n&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration)),null);case 4:return en(t),e===null&&Lm(t.stateNode.containerInfo),t.flags|=67108864,hn(t),null;case 10:return wi(t.type,t),hn(t),null;case 19:if(g0(t),o=t.memoizedState,o===null)return hn(t),null;if(l=(t.flags&128)!==0,a=o.rendering,a===null)if(l)Vu(o,!1);else{if(Ln!==Hi||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Uf(e),a!==null){for(t.flags|=128,Vu(o,!1),e=a.updateQueue,t.updateQueue=e,oh(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ot(n,e),n=n.sibling;return Uu(t,zo.current&Xc|Ld),zt&&st(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&eo()>h_&&(t.flags|=128,l=!0,Vu(o,!1),t.lanes=4194304)}else{if(!l)if(e=Uf(a),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,oh(t,e),Vu(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!a.alternate&&!zt)return hn(t),null}else 2*eo()-o.renderingStartTime>h_&&n!==536870912&&(t.flags|=128,l=!0,Vu(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(e=o.last,e!==null?e.sibling=a:t.child=a,o.last=a)}if(o.tail!==null){e=o.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=eo(),e.sibling=null,a=zo.current,a=l?a&Xc|Ld:a&Xc,o.tailMode==="visible"||o.tailMode==="collapsed"||!n||zt?Uu(t,a):(n=a,$e(No,t,t),$e(zo,n,t),Io===null&&(Io=t)),zt&&st(t,o.treeForkCount),e}return hn(t),null;case 22:case 23:return Bl(t),m0(t),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(hn(t),t.subtreeFlags&6&&(t.flags|=8192)):hn(t),n=t.updateQueue,n!==null&&oh(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&Se(ms,t),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wi(co,t),hn(t),null;case 25:return null;case 30:return t.flags|=33554432,hn(t),null}throw Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function Pw(e,t){switch(Zo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&Nt)!==pt&&Lu(t),t):null;case 3:return wi(co,t),en(t),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pn(t),null;case 31:if(t.memoizedState!==null){if(Bl(t),t.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&Nt)!==pt&&Lu(t),t):null;case 13:if(Bl(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&Nt)!==pt&&Lu(t),t):null;case 19:return g0(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return en(t),null;case 10:return wi(t.type,t),null;case 22:case 23:return Bl(t),m0(t),e!==null&&Se(ms,t),e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&Nt)!==pt&&Lu(t),t):null;case 24:return wi(co,t),null;case 25:return null;default:return null}}function Ty(e,t){switch(Zo(t),t.tag){case 3:wi(co,t),en(t);break;case 26:case 27:case 5:Pn(t);break;case 4:en(t);break;case 31:t.memoizedState!==null&&Bl(t);break;case 13:Bl(t);break;case 19:g0(t);break;case 10:wi(t.type,t);break;case 22:case 23:Bl(t),m0(t),e!==null&&Se(ms,t);break;case 24:wi(co,t)}}function Qa(e){return(e.mode&Nt)!==pt}function My(e,t){Qa(e)?(qa(),qu(t,e),Va()):qu(t,e)}function am(e,t,n){Qa(e)?(qa(),sc(n,e,t),Va()):sc(n,e,t)}function qu(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var l=o.next;n=l;do{if((n.tag&e)===e&&(o=void 0,(e&cl)!==Bd&&(eu=!0),o=ie(t,G3,n),(e&cl)!==Bd&&(eu=!1),o!==void 0&&typeof o!="function")){var a=void 0;a=(n.tag&Yl)!==0?"useLayoutEffect":(n.tag&cl)!==0?"useInsertionEffect":"useEffect";var r=void 0;r=o===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof o.then=="function"?`

It looks like you wrote `+a+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+a+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+o,ie(t,function(c,d){console.error("%s must not return anything besides a function, which is used for clean-up.%s",c,d)},a,r)}n=n.next}while(n!==l)}}catch(c){nn(t,t.return,c)}}function sc(e,t,n){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var a=l.next;o=a;do{if((o.tag&e)===e){var r=o.inst,c=r.destroy;c!==void 0&&(r.destroy=void 0,(e&cl)!==Bd&&(eu=!0),l=t,ie(l,P3,l,n,c),(e&cl)!==Bd&&(eu=!1))}o=o.next}while(o!==a)}}catch(d){nn(t,t.return,d)}}function Ry(e,t){Qa(e)?(qa(),qu(t,e),Va()):qu(t,e)}function im(e,t,n){Qa(e)?(qa(),sc(n,e,t),Va()):sc(n,e,t)}function Dy(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;e.type.defaultProps||"ref"in e.memoizedProps||Gc||(n.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",ke(e)||"instance"),n.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",ke(e)||"instance"));try{ie(e,O1,t,n)}catch(o){nn(e,e.return,o)}}}function Ww(e,t,n){return e.getSnapshotBeforeUpdate(t,n)}function Zw(e,t){var n=t.memoizedProps,o=t.memoizedState;t=e.stateNode,e.type.defaultProps||"ref"in e.memoizedProps||Gc||(t.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",ke(e)||"instance"),t.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",ke(e)||"instance"));try{var l=as(e.type,n),a=ie(e,Ww,t,l,o);n=Lv,a!==void 0||n.has(e.type)||(n.add(e.type),ie(e,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",ke(e))})),t.__reactInternalSnapshotBeforeUpdate=a}catch(r){nn(e,e.return,r)}}function Oy(e,t,n){n.props=as(e.type,e.memoizedProps),n.state=e.memoizedState,Qa(e)?(qa(),ie(e,Kb,e,t,n),Va()):ie(e,Kb,e,t,n)}function Fw(e){var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;var o=Kl(e.memoizedProps,n);(n.ref===null||n.ref.name!==o)&&(n.ref=n2(o)),n=n.ref;break;case 7:e.stateNode===null&&(n=new Hl(e),Ce(e,K4,n),e.stateNode=n),n=e.stateNode;break;default:n=e.stateNode}if(typeof t=="function")if(Qa(e))try{qa(),e.refCleanup=t(n)}finally{Va()}else e.refCleanup=t(n);else typeof t=="string"?console.error("String refs are no longer supported."):t.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",ke(e)),t.current=n}}function Ga(e,t){try{ie(e,Fw,e)}catch(n){nn(e,t,n)}}function Do(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{if(Qa(e))try{qa(),ie(e,o)}finally{Va(e)}else ie(e,o)}catch(l){nn(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{if(Qa(e))try{qa(),ie(e,n,null)}finally{Va(e)}else ie(e,n,null)}catch(l){nn(e,t,l)}else n.current=null}function Ay(e,t,n,o){var l=e.memoizedProps,a=l.id,r=l.onCommit;l=l.onRender,t=t===null?"mount":"update",Qh&&(t="nested-update"),typeof l=="function"&&l(a,t,e.actualDuration,e.treeBaseDuration,e.actualStartTime,n),typeof r=="function"&&r(a,t,o,n)}function Jw(e,t,n,o){var l=e.memoizedProps;e=l.id,l=l.onPostCommit,t=t===null?"mount":"update",Qh&&(t="nested-update"),typeof l=="function"&&l(e,t,o,n)}function lh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)s2(e.stateNode,t[n])}function Ny(e){for(var t=e.return;t!==null&&(sm(t)&&s2(e.stateNode,t.stateNode),!rm(t));)t=t.return}function Qu(e){for(var t=e.return;t!==null&&(sm(t)&&e6(e.stateNode,t.stateNode),!rm(t));)t=t.return}function rm(e){return e.tag===5||e.tag===3||e.tag===27}function sm(e){return e&&e.tag===7&&e.stateNode!==null}function cm(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{ie(e,T4,o,t,n,e)}catch(l){nn(e,e.return,l)}}function um(e,t,n){try{ie(e,R4,e.stateNode,e.type,n,t,e)}catch(o){nn(e,e.return,o)}}function zy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pr(e.type)||e.tag===4}function dm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fm(e,t,n,o){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(Z5(n),(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,t)):(Z5(n),t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(l),l=n._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Wn)),lh(e,o),Kt=!0;else if(l!==4&&(l===27&&(lh(e,o),o=null,pr(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(fm(e,t,n,o),e=e.sibling;e!==null;)fm(e,t,n,o),e=e.sibling}function ah(e,t,n,o){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?n.insertBefore(l,t):n.appendChild(l),lh(e,o),Kt=!0;else if(l!==4&&(l===27&&(lh(e,o),o=null,pr(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(ah(e,t,n,o),e=e.sibling;e!==null;)ah(e,t,n,o),e=e.sibling}function Kw(e){for(var t,n=e.return;n!==null;){if(zy(n)){t=n;break}n=n.return}n=null;for(var o=e.return;o!==null;){if(sm(o)){var l=o.stateNode;n===null?n=[l]:n.push(l)}if(rm(o))break;o=o.return}if(t==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(t.tag){case 27:t=t.stateNode,o=dm(e),ah(e,o,t,n);break;case 5:o=t.stateNode,t.flags&32&&(W5(o),t.flags&=-33),t=dm(e),ah(e,t,o,n);break;case 3:case 4:t=t.stateNode.containerInfo,o=dm(e),fm(e,o,t,n);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function Ly(e){var t=e.stateNode,n=e.memoizedProps;try{ie(e,c6,e.type,n,t,e)}catch(o){nn(e,e.return,o)}}function By(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(o_=!0)}function $y(){var e=ri;return ri=null,e}function cc(e,t,n,o,l){return Cl=0,(t=Hy(e.child,t,n,o,l))&&e._debugTask!=null&&Sl===null&&(Sl=e._debugTask),t}function Hy(e,t,n,o,l){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(o!==null){var c=Xm(r);o.push(c),c.view&&(a=!0)}else a||Xm(r).view&&(a=!0);o_=!0,K5(r,Cl===0?t:t+"_"+Cl,n),Cl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Hy(e.child,t,n,o,l)&&(a=!0));e=e.sibling}return a}function Pa(e,t){for(;e!==null;)e.tag===5?e2(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Pa(e.child,t)),e=e.sibling}function ih(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ih(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error("Found a pair with an auto name. This is a bug in React.");var n=t.name;t=Al(t.default,t.share),t!=="none"&&(cc(e,n,t,null,!1)||Pa(e.child,!1))}e=e.sibling}}function hm(e,t){if(e.tag===30){var n=e.stateNode,o=e.memoizedProps,l=Kl(o,n),a=Al(o.default,n.paired?o.share:o.enter);a!=="none"?cc(e,l,a,null,!1)?(ih(e),n.paired||t||fc(e,o.onEnter)):Pa(e.child,!1):ih(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)hm(e,t),e=e.sibling;else ih(e)}function _m(e){if(Xl!==null&&Xl.size!==0){var t=Xl;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,o=n.name;if(o!=null&&o!=="auto"){var l=t.get(o);if(l!==void 0){var a=Al(n.default,n.share);if(a!=="none"&&(cc(e,o,a,null,!1)?(a=e.stateNode,l.paired=a,a.paired=l,fc(e,n.onShare)):Pa(e.child,!1)),t.delete(o),t.size===0)break}}}_m(e)}e=e.sibling}}}function mm(e){if(e.tag===30){var t=e.memoizedProps,n=Kl(t,e.stateNode),o=Xl!==null?Xl.get(n):void 0,l=Al(t.default,o!==void 0?t.share:t.exit);l!=="none"&&(cc(e,n,l,null,!1)?o!==void 0?(l=e.stateNode,o.paired=l,l.paired=o,Xl.delete(n),fc(e,t.onShare)):fc(e,t.onExit):Pa(e.child,!1)),Xl!==null&&_m(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)mm(e),e=e.sibling;else Xl!==null&&_m(e)}function Uy(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Kl(t,e.stateNode);t=Al(t.default,t.update),e.flags&=-5,t!=="none"&&cc(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Uy(e);e=e.sibling}}function pm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Pa(e.child,!1))}pm(e)}e=e.sibling}}function rh(e){if(e.tag===30)e.stateNode.paired=null,Pa(e.child,!1),pm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)rh(e),e=e.sibling;else pm(e)}function Iy(e){for(e=e.child;e!==null;)e.tag===30?Pa(e.child,!1):(e.subtreeFlags&33554432)!==0&&Iy(e),e=e.sibling}function gm(e,t,n,o,l,a,r){for(var c=!1;t!==null;){if(t.tag===5){var d=t.stateNode;if(a!==null&&Cl<a.length){var _=a[Cl],w=Xm(d);(_.view||w.view)&&(c=!0);var A;if(A=(e.flags&4)===0)if(w.clip)A=!0;else{A=_.rect;var O=w.rect;A=A.y!==O.y||A.x!==O.x||A.height!==O.height||A.width!==O.width}A&&(e.flags|=4),w.abs?w=!_.abs:(_=_.rect,w=w.rect,w=_.height!==w.height||_.width!==w.width),w&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&K5(d,Cl===0?n:n+"_"+Cl,l),c&&(e.flags&4)!==0||(ri===null&&(ri=[]),ri.push(d,Cl===0?o:o+"_"+Cl,t.memoizedProps)),Cl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:gm(e,t.child,n,o,l,a,r)&&(c=!0));t=t.sibling}return c}function jy(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,o=e.stateNode,l=Kl(n,o),a=Al(n.default,n.update);if(t){o=o.clones;var r=o===null?null:o.map(I4)}else r=e.memoizedState,e.memoizedState=null;o=e;var c=e.child,d=l;Cl=0,a=gm(o,c,d,l,a,r,!1),(e.flags&4)!==0&&a&&(t||fc(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&jy(e,t);e=e.sibling}}function Yy(e){var t=e.memoizedProps.name;if(t!=null&&t!=="auto"){var n=l_.get(t);if(n!==void 0){if(n!==e&&n!==e.alternate&&!Bv[t]){Bv[t]=!0;var o=JSON.stringify(t);ie(e,function(){console.error("There are two <ViewTransition name=%s> components with the same name mounted at the same time. This is not supported and will cause View Transitions to error. Try to use a more unique name e.g. by using a namespace prefix and adding the id of an item to the name.",o)}),ie(n,function(){console.error("The existing <ViewTransition name=%s> duplicate has this stack trace.",o)})}}else l_.set(t,e)}}function Xy(e){var t=e.memoizedProps.name;if(t!=null&&t!=="auto"){var n=l_.get(t);n===void 0||n!==e&&n!==e.alternate||l_.delete(t)}}function Vy(e,t){return t.tag===31?(t=t.memoizedState,e.memoizedState!==null&&t===null):t.tag===13?(e=e.memoizedState,t=t.memoizedState,e!==null&&e.dehydrated!==null&&(t===null||t.dehydrated===null)):t.tag===3?e.memoizedState.isDehydrated&&(t.flags&256)===0:!1}function e4(e,t,n){if(e=e.containerInfo,Ng=ru,e=Mu(e),Ru(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var a=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{o.nodeType,r.nodeType}catch{o=null;break e}var c=0,d=-1,_=-1,w=0,A=0,O=e,$=null;t:for(;;){for(var ce;O!==o||a!==0&&O.nodeType!==3||(d=c+a),O!==r||l!==0&&O.nodeType!==3||(_=c+l),O.nodeType===3&&(c+=O.nodeValue.length),(ce=O.firstChild)!==null;)$=O,O=ce;for(;;){if(O===e)break t;if($===o&&++w===a&&(d=c),$===r&&++A===l&&(_=c),(ce=O.nextSibling)!==null)break;O=$,$=O.parentNode}O=ce}o=d===-1||_===-1?null:{start:d,end:_}}else o=null}o=o||{start:0,end:0}}else o=null;for(zg={focusedElem:e,selectionRange:o},ru=!1,n=(n&335544064)===n,Co=t,t=n?9270:1024;Co!==null;){if(e=Co,n&&(o=e.deletions,o!==null))for(a=0;a<o.length;a++)n&&mm(o[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&By(e),sh(n);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&n&&mm(o),sh(n);continue}else if(o!==null&&o.memoizedState!==null){n&&By(e),sh(n);continue}}o=e.child,(e.subtreeFlags&t)!==0&&o!==null?(o.return=e,Co=o):(n&&Uy(e),sh(n))}}Xl=null}function sh(e){for(;Co!==null;){var t=Co,n=t,o=e,l=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:(a&1024)!==0&&l!==null&&Zw(n,l);break;case 3:if((a&1024)!==0){if(o=n.stateNode.containerInfo,n=o.nodeType,n===9)qm(o);else if(n===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":qm(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:o&&l!==null&&(o=l,l=n,n=Kl(o.memoizedProps,o.stateNode),l=l.memoizedProps,l=Al(l.default,l.update),l!=="none"&&cc(o,n,l,o.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(o=t.sibling,o!==null){o.return=t.return,Co=o;break}Co=t.return}}function qy(e,t,n){var o=zl(),l=Ia(),a=Ya(),r=Xa(),c=n.flags;switch(n.tag){case 0:case 11:case 15:Ca(e,n),c&4&&My(n,Yl|ua);break;case 1:if(Ca(e,n),c&4)if(e=n.stateNode,t===null)n.type.defaultProps||"ref"in n.memoizedProps||Gc||(e.props!==n.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",ke(n)||"instance"),e.state!==n.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",ke(n)||"instance")),Qa(n)?(qa(),ie(n,Jp,n,e),Va()):ie(n,Jp,n,e);else{var d=as(n.type,t.memoizedProps);t=t.memoizedState,n.type.defaultProps||"ref"in n.memoizedProps||Gc||(e.props!==n.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",ke(n)||"instance"),e.state!==n.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",ke(n)||"instance")),Qa(n)?(qa(),ie(n,Zb,n,e,d,t,e.__reactInternalSnapshotBeforeUpdate),Va()):ie(n,Zb,n,e,d,t,e.__reactInternalSnapshotBeforeUpdate)}c&64&&Dy(n),c&512&&Ga(n,n.return);break;case 3:if(t=Si(),Ca(e,n),c&64&&(c=n.updateQueue,c!==null)){if(d=null,n.child!==null)switch(n.child.tag){case 27:case 5:d=n.child.stateNode;break;case 1:d=n.child.stateNode}try{ie(n,O1,c,d)}catch(w){nn(n,n.return,w)}}e.effectDuration+=Df(t);break;case 27:t===null&&c&4&&Ly(n);case 26:case 5:if(Ca(e,n),t===null){if(c&4)cm(n);else if(c&64){e=n.type,t=n.memoizedProps,d=n.stateNode;try{ie(n,M4,d,e,t,n)}catch(w){nn(n,n.return,w)}}}c&512&&Ga(n,n.return);break;case 12:if(c&4){c=Si(),Ca(e,n),e=n.stateNode,e.effectDuration+=zu(c);try{ie(n,Ay,n,t,Ni,e.effectDuration)}catch(w){nn(n,n.return,w)}}else Ca(e,n);break;case 31:Ca(e,n),c&4&&Wy(e,n);break;case 13:Ca(e,n),c&4&&Zy(e,n),c&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(c=h4.bind(null,n),o6(e,c))));break;case 22:if(c=n.memoizedState!==null||So,!c){var _=t!==null&&t.memoizedState!==null||rn;t=So,d=rn,So=c,(rn=_)&&!d?(c=a_,(n.subtreeFlags&8772)!==0&&(c|=hg),ea(e,n,c),(n.mode&Nt)!==pt&&0<=lt&&0<=ut&&.05<ut-lt&&Ks(n,lt,ut)):Ca(e,n),So=t,rn=d}break;case 30:c&18874368&&Yy(n),Ca(e,n),c&512&&Ga(n,n.return);break;case 7:c&512&&Ga(n,n.return);default:Ca(e,n)}(n.mode&Nt)!==pt&&0<=lt&&0<=ut&&((Vn||.05<zn)&&yl(n,lt,ut,zn,On),n.alternate===null&&n.return!==null&&n.return.alternate!==null&&.05<ut-lt&&(Vy(n.return.alternate,n.return)||Wo(n,lt,ut,"Mount"))),Ll(o),ja(l),On=a,Vn=r}function ym(e,t){for(e=e.child;e!==null;)Qy(e,t),e=e.sibling}function Qy(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;t?ie(e,z4,n):ie(e,$4,e.stateNode,e.memoizedProps)}catch(a){nn(e,e.return,a)}bm(e,t);break;case 6:try{var o=e.stateNode;t?ie(e,L4,o):ie(e,H4,o,e.memoizedProps),Kt=!0}catch(a){nn(e,e.return,a)}break;case 18:try{var l=e.stateNode;t?ie(e,N4,l):ie(e,B4,e.stateNode)}catch(a){nn(e,e.return,a)}break;case 22:case 23:e.memoizedState===null&&ym(e,t);break;default:ym(e,t)}}function bm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,o=t;switch(n.tag){case 4:Qy(n,o);break e;case 22:n.memoizedState===null&&bm(n,o);break e;default:bm(n,o)}}e=e.sibling}}function Gy(e){var t=e.alternate;t!==null&&(e.alternate=null,Gy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tn(t)),e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sa(e,t,n){for(n=n.child;n!==null;)Py(e,t,n),n=n.sibling}function Py(e,t,n){if(Ho&&typeof Ho.onCommitFiberUnmount=="function")try{Ho.onCommitFiberUnmount(Cc,n)}catch(_){Ka||(Ka=!0,console.error("React instrumentation encountered an error: %o",_))}var o=zl(),l=Ia(),a=Ya(),r=Xa();switch(n.tag){case 26:rn||Do(n,t),Sa(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!rn&&(e=n.stateNode,e.parentNode.removeChild(e));break;case 27:rn||Do(n,t),Qu(n);var c=fo,d=kl;pr(n.type)&&(fo=n.stateNode,kl=!1),Sa(e,t,n),ie(n,_2,n.stateNode,n.type,n.memoizedProps),fo=c,kl=d;break;case 5:rn||Do(n,t),Qu(n);case 6:if(n.tag===6&&Qu(n),c=fo,d=kl,fo=null,Sa(e,t,n),fo=c,kl=d,fo!==null)if(kl)try{ie(n,A4,fo,n.stateNode),Kt=!0}catch(_){nn(n,t,_)}else try{ie(n,O4,fo,n.stateNode),Kt=!0}catch(_){nn(n,t,_)}break;case 18:fo!==null&&(kl?(e=fo,F5(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),bc(e)):F5(fo,n.stateNode));break;case 4:c=fo,d=kl,fo=n.stateNode.containerInfo,kl=!0,Sa(e,t,n),fo=c,kl=d;break;case 0:case 11:case 14:case 15:sc(cl,n,t),rn||am(n,t,Yl),Sa(e,t,n);break;case 1:rn||(Do(n,t),c=n.stateNode,typeof c.componentWillUnmount=="function"&&Oy(n,t,c)),Sa(e,t,n);break;case 21:Sa(e,t,n);break;case 22:rn=(c=rn)||n.memoizedState!==null,Sa(e,t,n),rn=c;break;case 30:n.flags&18874368&&Xy(n),Do(n,t),Sa(e,t,n);break;case 7:rn||Do(n,t),Sa(e,t,n);break;default:Sa(e,t,n)}(n.mode&Nt)!==pt&&0<=lt&&0<=ut&&(Vn||.05<zn)&&yl(n,lt,ut,zn,On),Ll(o),ja(l),On=a,Vn=r}function Wy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ie(t,a6,e)}catch(n){nn(t,t.return,n)}}}function Zy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ie(t,i6,e)}catch(n){nn(t,t.return,n)}}function t4(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $v),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $v),t;default:throw Error("Unexpected Suspense handler tag ("+e.tag+"). This is a bug in React.")}}function ch(e,t){var n=t4(e);t.forEach(function(o){if(!n.has(o)){if(n.add(o),ei)if(Pc!==null&&Wc!==null)Zu(Wc,Pc);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var l=_4.bind(null,e,o);o.then(l,l)}})}function tl(e,t,n){var o=t.deletions;if(o!==null)for(var l=0;l<o.length;l++){var a=e,r=t,c=o[l],d=zl(),_=r;e:for(;_!==null;){switch(_.tag){case 27:if(pr(_.type)){fo=_.stateNode,kl=!1;break e}break;case 5:fo=_.stateNode,kl=!1;break e;case 3:case 4:fo=_.stateNode.containerInfo,kl=!0;break e}_=_.return}if(fo===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");Py(a,r,c),fo=null,kl=!1,(c.mode&Nt)!==pt&&0<=lt&&0<=ut&&.05<ut-lt&&Wo(c,lt,ut,"Unmount"),Ll(d),a=c,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fy(t,e,n),t=t.sibling}function Fy(e,t,n){var o=zl(),l=Ia(),a=Ya(),r=Xa(),c=e.alternate,d=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(d&4&&(c=e.updateQueue,c=c!==null?c.events:null,c!==null))for(var _=0;_<c.length;_++){var w=c[_];w.ref.impl=w.nextImpl}tl(t,e,n),nl(e),d&4&&(sc(cl|ua,e,e.return),qu(cl|ua,e),am(e,e.return,Yl|ua));break;case 1:tl(t,e,n),nl(e),d&512&&(rn||c===null||Do(c,c.return)),d&64&&So&&(t=e.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(d=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=d===null?n:d.concat(n))));break;case 26:if(_=Aa,tl(t,e,n),nl(e),d&512&&(rn||c===null||Do(c,c.return)),d&4)if(d=c!==null?c.memoizedState:null,n=e.memoizedState,c===null)if(n===null)if(e.stateNode===null)if(So)e.stateNode=P5(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,d=_.ownerDocument||_;t:switch(t){case"title":c=d.getElementsByTagName("title")[0],(!c||c[cd]||c[Ao]||c.namespaceURI===Ec||c.hasAttribute("itemprop"))&&(c=d.createElement(t),d.head.insertBefore(c,d.querySelector("head > title"))),Oo(c,t,n),c[Ao]=e,jn(c),t=c;break e;case"link":if(_=b2("link","href",d).get(t+(n.href||""))){for(w=0;w<_.length;w++)if(c=_[w],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){_.splice(w,1);break t}}c=d.createElement(t),Oo(c,t,n),d.head.appendChild(c);break;case"meta":if(_=b2("meta","content",d).get(t+(n.content||""))){for(w=0;w<_.length;w++)if(c=_[w],Ie(n.content,"content"),c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){_.splice(w,1);break t}}c=d.createElement(t),Oo(c,t,n),d.head.appendChild(c);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+t+'". This is a bug in React.')}c[Ao]=e,jn(c),t=c}e.stateNode=t}else So||Jm(_,e.type,e.stateNode);else e.stateNode=y2(_,n,e.memoizedProps);else d!==n?(d===null?(t=c.stateNode,t===null||rn||t.parentNode.removeChild(t)):d.count--,n===null?So||Jm(_,e.type,e.stateNode):y2(_,n,e.memoizedProps)):n===null&&e.stateNode!==null&&um(e,e.memoizedProps,c.memoizedProps);break;case 27:tl(t,e,n),nl(e),d&512&&(rn||c===null||Do(c,c.return)),c!==null&&d&4&&um(e,e.memoizedProps,c.memoizedProps);break;case 5:if(_=si,si=!1,tl(t,e,n),si=_,nl(e),d&512&&(rn||c===null||Do(c,c.return)),e.flags&32){t=e.stateNode;try{ie(e,W5,t),Kt=!0}catch(ce){nn(e,e.return,ce)}}d&4&&e.stateNode!=null&&(t=e.memoizedProps,um(e,t,c!==null?c.memoizedProps:t)),d&1024&&(_g=!0,e.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(tl(t,e,n),nl(e),d&4){if(e.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");t=e.memoizedProps,n=c!==null?c.memoizedProps:t,d=e.stateNode;try{ie(e,D4,d,n,t),Kt=!0}catch(ce){nn(e,e.return,ce)}}break;case 3:if(_=Si(),Kt=!1,R_=null,w=Aa,Aa=nd(t.containerInfo),tl(t,e,n),Aa=w,nl(e),d&4&&c!==null&&c.memoizedState.isDehydrated)try{ie(e,l6,t.containerInfo)}catch(ce){nn(e,e.return,ce)}_g&&(_g=!1,Jy(e)),t.effectDuration+=Df(_),Kt=!1;break;case 4:d=si,si=So,c=Xo(),_=Aa,Aa=nd(e.stateNode.containerInfo),tl(t,e,n),nl(e),Aa=_,Kt&&Id&&(i_=!0),Kt=c,si=d;break;case 12:d=Si(),tl(t,e,n),nl(e),e.stateNode.effectDuration+=zu(d);break;case 31:tl(t,e,n),nl(e),d&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ch(e,t)));break;case 13:tl(t,e,n),nl(e),e.child.flags&8192&&e.memoizedState!==null!=(c!==null&&c.memoizedState!==null)&&(f_=eo()),d&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ch(e,t)));break;case 22:_=e.memoizedState!==null,w=c!==null&&c.memoizedState!==null;var A=So,O=rn,$=si;So=A||_,si=$||_,rn=O||w,tl(t,e,n),rn=O,si=$,So=A,w&&!_&&!A&&!O&&(e.mode&Nt)!==pt&&0<=lt&&0<=ut&&.05<ut-lt&&Ks(e,lt,ut),nl(e),d&8192&&(t=e.stateNode,t._visibility=_?t._visibility&~yd:t._visibility|yd,!_||c===null||w||So||rn||(t=a_,n=w||rn,c=So,w=rn,So=_||So,rn=n,hr(e,t),(e.mode&Nt)!==pt&&0<=lt&&0<=ut&&.05<ut-lt&&Wo(e,lt,ut,"Disconnect"),So=c,rn=w),!_&&si||ym(e,_)),d&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ch(e,n))));break;case 19:tl(t,e,n),nl(e),d&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ch(e,t)));break;case 30:d&512&&(rn||c===null||Do(c,c.return)),d=Xo(),_=Id,w=(n&335544064)===n,A=e.memoizedProps,Id=w&&Al(A.default,A.update)!=="none",tl(t,e,n),nl(e),w&&c!==null&&Kt&&(e.flags|=4),Id=_,Kt=d;break;case 21:break;case 7:d&512&&(rn||c===null||Do(c,c.return)),c&&c.stateNode!==null&&(c.stateNode._fragmentFiber=e);default:tl(t,e,n),nl(e)}(e.mode&Nt)!==pt&&0<=lt&&0<=ut&&((Vn||.05<zn)&&yl(e,lt,ut,zn,On),e.alternate===null&&e.return!==null&&e.return.alternate!==null&&.05<ut-lt&&(Vy(e.return.alternate,e.return)||Wo(e,lt,ut,"Mount"))),Ll(o),ja(l),On=a,Vn=r}function nl(e){var t=e.flags;if(t&2){try{ie(e,Kw,e)}catch(n){nn(e,e.return,n)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Jy(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,ru=!0,t.reset(),ru=!1),e=e.sibling}}function uc(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Ky(t,e),t=t.sibling;else jy(t,!1)}function Ky(e,t){var n=e.alternate;if(n===null)hm(e,!1);else switch(e.tag){case 3:if(mg=ci=!1,$y(),uc(t,e),!ci&&!i_){if(e=ri,e!==null)for(var o=0;o<e.length;o+=3){n=e[o];var l=e[o+1];e2(n,e[o+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),mg=!0}ri=null;break;case 5:uc(t,e);break;case 4:o=ci,ci=!1,uc(t,e),ci&&(i_=!0),ci=o;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?hm(e,!1):uc(t,e));break;case 30:o=ci,l=$y(),ci=!1,uc(t,e),ci&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Kl(a,r),r=Kl(n.memoizedProps,r);var c=Al(a.default,a.update);c==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Cl=0,t=gm(e,n,t,r,c,a,!0),Cl!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(fc(e,e.memoizedProps.onUpdate),ri=l):l!==null&&(l.push.apply(l,ri),ri=l),ci=(e.flags&32)!==0?!0:o;break;default:uc(t,e)}}function Ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)qy(e,t.alternate,t),t=t.sibling}function e5(e,t){var n=zl(),o=Ia(),l=Ya(),a=Xa();switch(e.tag){case 0:case 11:case 14:case 15:am(e,e.return,Yl),hr(e,t);break;case 1:Do(e,e.return);var r=e.stateNode;typeof r.componentWillUnmount=="function"&&Oy(e,e.return,r),hr(e,t);break;case 27:(t&a_)!==Ud&&ie(e,_2,e.stateNode,e.type,e.memoizedProps);case 5:Do(e,e.return),e.tag!==5&&e.tag!==27||Qu(e),hr(e,t);break;case 6:Qu(e);break;case 26:Do(e,e.return),r=e.stateNode,e.memoizedState!==null||r===null||rn||r.parentNode.removeChild(r),hr(e,t);break;case 22:e.memoizedState===null&&hr(e,t);break;case 30:e.flags&18874368&&Xy(e),Do(e,e.return),hr(e,t);break;case 7:Do(e,e.return);default:hr(e,t)}(e.mode&Nt)!==pt&&0<=lt&&0<=ut&&(Vn||.05<zn)&&yl(e,lt,ut,zn,On),Ll(n),ja(o),On=l,Vn=a}function hr(e,t){for(e=e.child;e!==null;)e5(e,t),e=e.sibling}function t5(e,t,n,o){var l=zl(),a=Ia(),r=Ya(),c=Xa(),d=n.flags,_=(o&hg)!==Ud;switch(n.tag){case 0:case 11:case 15:ea(e,n,o),My(n,Yl);break;case 1:if(ea(e,n,o),t=n.stateNode,typeof t.componentDidMount=="function"&&ie(n,Jp,n,t),t=n.updateQueue,t!==null){e=n.stateNode;try{ie(n,Bw,t,e)}catch(A){nn(n,n.return,A)}}_&&d&64&&Dy(n),Ga(n,n.return);break;case 27:(o&a_)!==Ud&&Ly(n);case 5:n.tag!==5&&n.tag!==27||Ny(n),ea(e,n,o),_&&t===null&&d&4&&cm(n),Ga(n,n.return);break;case 6:Ny(n);break;case 26:var w=n.stateNode;n.memoizedState!==null||w===null||So||Jm(nd(w.ownerDocument),n.type,w),ea(e,n,o),_&&t===null&&d&4&&cm(n),Ga(n,n.return);break;case 12:if(_&&d&4){d=Si(),ea(e,n,o),_=n.stateNode,_.effectDuration+=zu(d);try{ie(n,Ay,n,t,Ni,_.effectDuration)}catch(A){nn(n,n.return,A)}}else ea(e,n,o);break;case 31:ea(e,n,o),_&&d&4&&Wy(e,n);break;case 13:ea(e,n,o),_&&d&4&&Zy(e,n);break;case 22:n.memoizedState===null&&ea(e,n,o),Ga(n,n.return);break;case 30:ea(e,n,o),d&18874368&&Yy(n),Ga(n,n.return);break;case 7:Ga(n,n.return);default:ea(e,n,o)}(n.mode&Nt)!==pt&&0<=lt&&0<=ut&&(Vn||.05<zn)&&yl(n,lt,ut,zn,On),Ll(l),ja(a),On=r,Vn=c}function ea(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&~hg,t=t.child;t!==null;)t5(e,t.alternate,t,n),t=t.sibling}function vm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&ts(e),n!=null&&Nu(n))}function xm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(ts(t),e!=null&&Nu(e))}function ta(e,t,n,o,l){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256)||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child))for(t=t.child;t!==null;)a=t.sibling,n5(e,t,n,o,a!==null?a.actualStartTime:l),t=a;else a&&Iy(t)}function n5(e,t,n,o,l){var a=zl(),r=Ia(),c=Ya(),d=Xa(),_=wr,w=(n&335544064)===n;w&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&rh(t);var A=t.flags;switch(t.tag){case 0:case 11:case 15:(t.mode&Nt)!==pt&&0<t.actualStartTime&&(t.flags&1)!==0&&ec(t,t.actualStartTime,l,go,n),ta(e,t,n,o,l),A&2048&&Ry(t,jo|ua);break;case 1:(t.mode&Nt)!==pt&&0<t.actualStartTime&&((t.flags&128)!==0?ba(t,t.actualStartTime,l,[]):(t.flags&1)!==0&&ec(t,t.actualStartTime,l,go,n)),ta(e,t,n,o,l);break;case 3:var O=Si(),$=go;go=t.alternate!==null&&t.alternate.memoizedState.isDehydrated&&(t.flags&256)===0,ta(e,t,n,o,l),go=$,w&&mg&&(n=e.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),A&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),o=t.memoizedState.cache,o!==n&&(ts(o),n!=null&&Nu(n))),e.passiveEffectDuration+=Df(O);break;case 12:if(A&2048){A=Si(),ta(e,t,n,o,l),e=t.stateNode,e.passiveEffectDuration+=zu(A);try{ie(t,Jw,t,t.alternate,Ni,e.passiveEffectDuration)}catch(ce){nn(t,t.return,ce)}}else ta(e,t,n,o,l);break;case 31:A=go,O=t.alternate!==null?t.alternate.memoizedState:null,w=t.memoizedState,O!==null&&w===null?(w=t.deletions,w!==null&&0<w.length&&w[0].tag===18?(go=!1,O=O.hydrationErrors,O!==null&&ba(t,t.actualStartTime,l,O)):go=!0):go=!1,ta(e,t,n,o,l),go=A;break;case 13:A=go,O=t.alternate!==null?t.alternate.memoizedState:null,w=t.memoizedState,O===null||O.dehydrated===null||w!==null&&w.dehydrated!==null?go=!1:(w=t.deletions,w!==null&&0<w.length&&w[0].tag===18?(go=!1,O=O.hydrationErrors,O!==null&&ba(t,t.actualStartTime,l,O)):go=!0),ta(e,t,n,o,l),go=A;break;case 23:break;case 22:$=t.stateNode,O=t.alternate,t.memoizedState!==null?(w&&O!==null&&O.memoizedState===null&&rh(O),$._visibility&Ri?ta(e,t,n,o,l):Gu(e,t,n,o,l)):(w&&O!==null&&O.memoizedState!==null&&rh(t),$._visibility&Ri?ta(e,t,n,o,l):($._visibility|=Ri,dc(e,t,n,o,(t.subtreeFlags&10256)!==0||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child),l),(t.mode&Nt)===pt||go||(e=t.actualStartTime,0<=e&&.05<l-e&&Ks(t,e,l),0<=lt&&0<=ut&&.05<ut-lt&&Ks(t,lt,ut)))),A&2048&&vm(O,t);break;case 24:ta(e,t,n,o,l),A&2048&&xm(t.alternate,t);break;case 30:w&&(A=t.alternate,A!==null&&(Pa(A.child,!0),Pa(t.child,!0))),ta(e,t,n,o,l);break;default:ta(e,t,n,o,l)}(t.mode&Nt)!==pt&&((e=!go&&t.alternate===null&&t.return!==null&&t.return.alternate!==null)&&(n=t.actualStartTime,0<=n&&.05<l-n&&Wo(t,n,l,"Mount")),0<=lt&&0<=ut&&((Vn||.05<zn)&&yl(t,lt,ut,zn,On),e&&.05<ut-lt&&Wo(t,lt,ut,"Mount"))),Ll(a),ja(r),On=c,Vn=d,wr=_}function dc(e,t,n,o,l,a){for(l=l&&((t.subtreeFlags&10256)!==0||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child)),t=t.child;t!==null;){var r=t.sibling;o5(e,t,n,o,l,r!==null?r.actualStartTime:a),t=r}}function o5(e,t,n,o,l,a){var r=zl(),c=Ia(),d=Ya(),_=Xa(),w=wr;l&&(t.mode&Nt)!==pt&&0<t.actualStartTime&&(t.flags&1)!==0&&ec(t,t.actualStartTime,a,go,n);var A=t.flags;switch(t.tag){case 0:case 11:case 15:dc(e,t,n,o,l,a),Ry(t,jo);break;case 23:break;case 22:var O=t.stateNode;t.memoizedState!==null?O._visibility&Ri?dc(e,t,n,o,l,a):Gu(e,t,n,o,a):(O._visibility|=Ri,dc(e,t,n,o,l,a)),l&&A&2048&&vm(t.alternate,t);break;case 24:dc(e,t,n,o,l,a),l&&A&2048&&xm(t.alternate,t);break;default:dc(e,t,n,o,l,a)}(t.mode&Nt)!==pt&&0<=lt&&0<=ut&&(Vn||.05<zn)&&yl(t,lt,ut,zn,On),Ll(r),ja(c),On=d,Vn=_,wr=w}function Gu(e,t,n,o,l){if(t.subtreeFlags&10256||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child))for(var a=t.child;a!==null;){t=a.sibling;var r=e,c=n,d=o,_=t!==null?t.actualStartTime:l,w=wr;(a.mode&Nt)!==pt&&0<a.actualStartTime&&(a.flags&1)!==0&&ec(a,a.actualStartTime,_,go,c);var A=a.flags;switch(a.tag){case 22:Gu(r,a,c,d,_),A&2048&&vm(a.alternate,a);break;case 24:Gu(r,a,c,d,_),A&2048&&xm(a.alternate,a);break;default:Gu(r,a,c,d,_)}wr=w,a=t}}function is(e,t,n){if(e.subtreeFlags&xs)for(e=e.child;e!==null;)l5(e,t,n),e=e.sibling}function l5(e,t,n){switch(e.tag){case 26:is(e,t,n),e.flags&xs&&(e.memoizedState!==null?f6(n,Aa,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&S2(n,e)));break;case 5:is(e,t,n),e.flags&xs&&(e=e.stateNode,(t&335544128)===t&&S2(n,e));break;case 3:case 4:var o=Aa;Aa=nd(e.stateNode.containerInfo),is(e,t,n),Aa=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=xs,xs=16777216,is(e,t,n),xs=o):is(e,t,n));break;case 30:if((e.flags&xs)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var l=e.stateNode;l.paired=null,Xl===null&&(Xl=new Map),Xl.set(o,l)}is(e,t,n);break;default:is(e,t,n)}}function a5(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n],l=zl();Co=o,s5(o,e),(o.mode&Nt)!==pt&&0<=lt&&0<=ut&&.05<ut-lt&&Wo(o,lt,ut,"Unmount"),Ll(l)}a5(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i5(e),e=e.sibling}function i5(e){var t=zl(),n=Ia(),o=Ya(),l=Xa();switch(e.tag){case 0:case 11:case 15:Pu(e),e.flags&2048&&im(e,e.return,jo|ua);break;case 3:var a=Si();Pu(e),e.stateNode.passiveEffectDuration+=Df(a);break;case 12:a=Si(),Pu(e),e.stateNode.passiveEffectDuration+=zu(a);break;case 22:a=e.stateNode,e.memoizedState!==null&&a._visibility&Ri&&(e.return===null||e.return.tag!==13)?(a._visibility&=~Ri,uh(e),(e.mode&Nt)!==pt&&0<=lt&&0<=ut&&.05<ut-lt&&Wo(e,lt,ut,"Disconnect")):Pu(e);break;default:Pu(e)}(e.mode&Nt)!==pt&&0<=lt&&0<=ut&&(Vn||.05<zn)&&yl(e,lt,ut,zn,On),Ll(t),ja(n),Vn=l,On=o}function uh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n],l=zl();Co=o,s5(o,e),(o.mode&Nt)!==pt&&0<=lt&&0<=ut&&.05<ut-lt&&Wo(o,lt,ut,"Unmount"),Ll(l)}a5(e)}for(e=e.child;e!==null;)r5(e),e=e.sibling}function r5(e){var t=zl(),n=Ia(),o=Ya(),l=Xa();switch(e.tag){case 0:case 11:case 15:im(e,e.return,jo),uh(e);break;case 22:var a=e.stateNode;a._visibility&Ri&&(a._visibility&=~Ri,uh(e));break;default:uh(e)}(e.mode&Nt)!==pt&&0<=lt&&0<=ut&&(Vn||.05<zn)&&yl(e,lt,ut,zn,On),Ll(t),ja(n),Vn=l,On=o}function s5(e,t){for(;Co!==null;){var n=Co,o=n,l=t,a=zl(),r=Ia(),c=Ya(),d=Xa();switch(o.tag){case 0:case 11:case 15:im(o,l,jo);break;case 23:case 22:o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(l=o.memoizedState.cachePool.pool,l!=null&&ts(l));break;case 24:Nu(o.memoizedState.cache)}if((o.mode&Nt)!==pt&&0<=lt&&0<=ut&&(Vn||.05<zn)&&yl(o,lt,ut,zn,On),Ll(a),ja(r),Vn=d,On=c,o=n.child,o!==null)o.return=n,Co=o;else e:for(n=e;Co!==null;){if(o=Co,a=o.sibling,r=o.return,Gy(o),o===n){Co=null;break e}if(a!==null){a.return=r,Co=a;break e}Co=r}}}function n4(){K3.forEach(function(e){return e()})}function c5(){var e=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return e||P.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),e}function $l(e){if((Wt&yo)!==ko&&kt!==0)return kt&-kt;var t=P.T;return t!==null?(t._updatedFibers||(t._updatedFibers=new Set),t._updatedFibers.add(e),gs!==null&&Fe()===ll&&(gs=null),Nm()):(e=Fe(),e===ll&&(gs=null),e)}function u5(){if(Tl===0)if((kt&536870912)===0||zt){var e=Th;Th<<=1,(Th&3932160)===0&&(Th=262144),Tl=e}else Tl=536870912;return e=No.current,e!==null&&(e.flags|=32),Tl}function fc(e,t){if(t!=null){var n=e.stateNode,o=n.ref;o===null&&(o=n.ref=n2(Kl(e.memoizedProps,n))),Jc===null&&(Jc=[]),Jc.push(t.bind(null,o))}}function Xn(e,t,n){if(eu&&console.error("useInsertionEffect must not schedule updates."),kg&&(b_=!0),(e===mn&&(sn===Ss||sn===Cs)||e.cancelPendingCommit!==null)&&(_c(e,0),_r(e,kt,Tl,!1)),R(e,n),(Wt&yo)!==ko&&e===mn){if(Ja)switch(t.tag){case 0:case 11:case 15:e=Lt&&ke(Lt)||"Unknown",Wv.has(e)||(Wv.add(e),t=ke(t)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",t,e,e));break;case 1:Pv||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),Pv=!0)}}else ei&&Oe(e,t,n),p4(t),e===mn&&((Wt&yo)===ko&&(Lr|=n),Ln===Nr&&_r(e,kt,Tl,!1)),Wa(e)}function d5(e,t,n){if((Wt&(yo|Vl))!==ko)throw Error("Should not already be working.");if(kt!==0&&Lt!==null){var o=Lt,l=eo();switch(Yb){case Vd:case Ss:var a=kd;Cn&&((o=o._debugTask)?o.run(console.timeStamp.bind(console,"Suspended",a,l,wl,void 0,"primary-light")):console.timeStamp("Suspended",a,l,wl,void 0,"primary-light"));break;case Cs:a=kd,Cn&&((o=o._debugTask)?o.run(console.timeStamp.bind(console,"Action",a,l,wl,void 0,"primary-light")):console.timeStamp("Action",a,l,wl,void 0,"primary-light"));break;default:Cn&&(o=l-kd,3>o||console.timeStamp("Blocked",kd,l,wl,void 0,5>o?"primary-light":10>o?"primary":100>o?"primary-dark":"error"))}}a=(n=!n&&(t&127)===0&&(t&e.expiredLanes)===0||de(e,t))?l4(e,t):Sm(e,t,!0);var r=n;do{if(a===Hi){Zc&&!n&&_r(e,t,0,!1),t=sn,kd=to(),Yb=t;break}else{if(o=eo(),l=e.current.alternate,r&&!o4(l)){io(t),l=wo,a=o,!Cn||a<=l||(qn?qn.run(console.timeStamp.bind(console,"Teared Render",l,a,Xt,Ht,"error")):console.timeStamp("Teared Render",l,a,Xt,Ht,"error")),rs(t,o),a=Sm(e,t,!1),r=!1;continue}if(a===ws){if(r=t,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){io(t),vi(wo,o,t,qn),rs(t,o),t=c;e:{o=e,a=r,r=Qd;var d=o.current.memoizedState.isDehydrated;if(d&&(_c(o,c).flags|=256),c=Sm(o,c,!1),c!==ws&&c!==Xd){if(yg&&!d){o.errorRecoveryDisabledLanes|=a,Lr|=a,a=Nr;break e}o=ul,ul=r,o!==null&&(ul===null?ul=o:ul.push.apply(ul,o))}a=c}if(r=!1,a!==ws)continue;o=eo()}}if(a===Yd){io(t),vi(wo,o,t,qn),rs(t,o),_c(e,0),_r(e,t,0,!0);break}e:{switch(n=e,a){case Hi:case Yd:throw Error("Root did not complete. This is a bug in React.");case Nr:if((t&4194048)!==t&&(t&62914560)!==t)break;case Xd:io(t),tc(wo,o,t,qn),rs(t,o),l=t,(l&127)!==0?Vh=o:(l&4194048)!==0&&(qh=o),_r(n,t,Tl,!Ui);break e;case ws:ul=null;break;case r_:case Hv:break;default:throw Error("Unknown root exit status.")}if(P.actQueue!==null)Cm(n,l,t,ul,Gd,d_,Tl,Lr,ks,Ui,a,null,null,wo,o);else{if((t&62914560)===t&&(r=f_+jv-eo(),10<r)){if(_r(n,t,Tl,!Ui),ze(n,0,!0)!==0)break e;Ml=t,n.timeoutHandle=Bg(f5.bind(null,n,l,ul,Gd,d_,t,Tl,Lr,ks,Ui,a,"Throttled",wo,o),r);break e}f5(n,l,ul,Gd,d_,t,Tl,Lr,ks,Ui,a,null,wo,o)}}}break}while(!0);Wa(e)}function f5(e,t,n,o,l,a,r,c,d,_,w,A,O,$){e.timeoutHandle=Os;var ce=t.subtreeFlags,Ne=(a&335544064)===a,Ge=null;if((Ne||ce&8192||(ce&16785408)===16785408)&&(Ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wn},Xl=null,l5(t,a,Ge),Ne&&(ce=Ge,Ne=e.containerInfo,Ne=(Ne.nodeType===9?Ne:Ne.ownerDocument).__reactViewTransition,Ne!=null&&(ce.count++,ce.waitingForViewTransition=!0,ce=ad.bind(ce),Ne.finished.then(ce,ce))),ce=(a&62914560)===a?f_-eo():(a&4194048)===a?Iv-eo():0,ce=h6(Ge,ce),ce!==null)){Ml=a,e.cancelPendingCommit=ce(Cm.bind(null,e,t,a,n,o,l,r,c,d,_,w,Ge,Ge.waitingForViewTransition?"Waiting for the previous Animation":0<Ge.count?0<Ge.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Ge.imgCount===1?"Suspended on an Image":0<Ge.imgCount?"Suspended on Images":null,O,$)),_r(e,a,r,!_);return}Cm(e,t,a,n,o,l,r,c,d,_,w,Ge,A,O,$)}function o4(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var l=n[o],a=l.getSnapshot;l=l.value;try{if(!rl(a(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _r(e,t,n,o){t=Ve(e,t),t&=~u_,t&=~Lr,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var a=31-ol(l),r=1<<a;o[a]=-1,l&=~r}n!==0&&Z(e,n,t)}function hc(){return(Wt&(yo|Vl))===ko?(Fu(0,!1),!1):!0}function wm(){if(Lt!==null){if(sn===El)var e=Lt.return;else e=Lt,Ef(),S0(e),Yc=null,zd=0,e=Lt;for(;e!==null;)Ty(e.alternate,e),e=e.return;Lt=null}}function rs(e,t){(e&127)!==0&&(Er=t),(e&4194048)!==0&&(Ra=t),(e&62914560)!==0&&(Pp=t),(e&2080374784)!==0&&(Wp=t)}function _c(e,t){Cn&&(console.timeStamp("Blocking Track",.003,.003,"Blocking",Ht,"primary-light"),console.timeStamp("Transition Track",.003,.003,"Transition",Ht,"primary-light"),console.timeStamp("Suspense Track",.003,.003,"Suspense",Ht,"primary-light"),console.timeStamp("Idle Track",.003,.003,"Idle",Ht,"primary-light"));var n=wo;if(wo=to(),kt!==0&&0<n){if(io(kt),Ln===r_||Ln===Nr)tc(n,wo,t,qn);else{var o=wo,l=qn;if(Cn&&!(o<=n)){var a=(t&738197653)===t?"tertiary-dark":"primary-dark",r=(t&536870912)===t?"Prewarm":(t&201326741)===t?"Interrupted Hydration":"Interrupted Render";l?l.run(console.timeStamp.bind(console,r,n,o,Xt,Ht,a)):console.timeStamp(r,n,o,Xt,Ht,a)}}rs(kt,wo)}if(n=qn,qn=null,(t&127)!==0){qn=wd,l=0<=li&&li<Er?Er:li,o=0<=fs&&fs<Er?Er:fs,a=0<=o?o:0<=l?l:wo,0<=Vh?(io(2),Cf(Vh,a,t,n)):(_s&127)!==0&&(io(2),va(Er,a,Sl)),n=l;var c=o,d=Sd,_=0<Uc,w=Tr===xd,A=Tr===Xh;if(l=wo,o=wd,a=qp,r=Qp,Cn){if(Xt="Blocking",0<n?n>l&&(n=l):n=l,0<c?c>n&&(c=n):c=n,d!==null&&n>c){var O=_?"secondary-light":"warning";o?o.run(console.timeStamp.bind(console,_?"Consecutive":"Event: "+d,c,n,Xt,Ht,O)):console.timeStamp(_?"Consecutive":"Event: "+d,c,n,Xt,Ht,O)}l>n&&(c=w?"error":(t&738197653)===t?"tertiary-light":"primary-light",w=A?"Promise Resolved":w?"Cascading Update":5<l-n?"Update Blocked":"Update",A=[],r!=null&&A.push(["Component name",r]),a!=null&&A.push(["Method name",a]),n={start:n,end:l,detail:{devtools:{properties:A,track:Xt,trackGroup:Ht,color:c}}},o?o.run(performance.measure.bind(performance,w,n)):performance.measure(w,n),performance.clearMeasures(w))}li=-1.1,Tr=0,Qp=qp=null,Vh=-1.1,Uc=fs,fs=-1.1,Er=to()}return(t&4194048)!==0&&(qn=Cd,l=0<=Li&&Li<Ra?Ra:Li,n=0<=ca&&ca<Ra?Ra:ca,o=0<=Mr&&Mr<Ra?Ra:Mr,a=0<=o?o:0<=n?n:wo,0<=qh?(io(256),Cf(qh,a,t,qn)):(_s&4194048)!==0&&(io(256),va(Ra,a,Sl)),A=o,c=hs,d=0<Rr,_=Gp===Xh,a=wo,o=Cd,r=Ib,w=jb,Cn&&(Xt="Transition",0<n?n>a&&(n=a):n=a,0<l?l>n&&(l=n):l=n,0<A?A>l&&(A=l):A=l,l>A&&c!==null&&(O=d?"secondary-light":"warning",o?o.run(console.timeStamp.bind(console,d?"Consecutive":"Event: "+c,A,l,Xt,Ht,O)):console.timeStamp(d?"Consecutive":"Event: "+c,A,l,Xt,Ht,O)),n>l&&(o?o.run(console.timeStamp.bind(console,"Action",l,n,Xt,Ht,"primary-dark")):console.timeStamp("Action",l,n,Xt,Ht,"primary-dark")),a>n&&(l=_?"Promise Resolved":5<a-n?"Update Blocked":"Update",A=[],w!=null&&A.push(["Component name",w]),r!=null&&A.push(["Method name",r]),n={start:n,end:a,detail:{devtools:{properties:A,track:Xt,trackGroup:Ht,color:"primary-light"}}},o?o.run(performance.measure.bind(performance,l,n)):performance.measure(l,n),performance.clearMeasures(l))),ca=Li=-1.1,Gp=0,qh=-1.1,Rr=Mr,Mr=-1.1,Ra=to()),(t&62914560)!==0&&(_s&62914560)!==0&&(io(4194304),va(Pp,wo,Sl)),(t&2080374784)!==0&&(_s&2080374784)!==0&&(io(268435456),va(Wp,wo,Sl)),n=e.timeoutHandle,n!==Os&&(e.timeoutHandle=Os,fS(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ml=0,wm(),mn=e,Lt=n=xt(e.current,null),kt=t,sn=El,ql=null,Ui=!1,Zc=de(e,t),yg=!1,Ln=Hi,ks=Tl=u_=Lr=zr=0,ul=Qd=null,d_=!1,ui=Ve(e,t),b(),e=Nb(),1e3<e-Ab&&(P.recentlyCreatedOwnerStacks=0,Ab=e),Da.discardPendingWarnings(),n}function h5(e,t){gt=null,P.H=t_,P.getCurrentStack=null,Ja=!1,Il=null,t===jc||t===Wh?(t=w1(),sn=Vd):t===Kp?(t=w1(),sn=Uv):sn=t===ug?gg:t!==null&&typeof t=="object"&&typeof t.then=="function"?qd:s_,ql=t;var n=Lt;n===null?(Ln=Yd,Jf(e,Qe(t,e.current))):n.mode&Nt&&c0(n)}function _5(){var e=No.current;return e===null?!0:(kt&4194048)===kt?Io===null:(kt&62914560)===kt||(kt&536870912)!==0?e===Io:!1}function m5(){var e=P.H;return P.H=t_,e===null?t_:e}function p5(){var e=P.A;return P.A=J3,e}function dh(e){qn===null&&(qn=e._debugTask==null?null:e._debugTask)}function fh(){Ln=Nr,Ui||(kt&4194048)!==kt&&No.current!==null||(Zc=!0),(zr&134217727)===0&&(Lr&134217727)===0||mn===null||_r(mn,kt,Tl,!1)}function Sm(e,t,n){var o=Wt;Wt|=yo;var l=m5(),a=p5();if(mn!==e||kt!==t){if(ei){var r=e.memoizedUpdaters;0<r.size&&(Zu(e,kt),r.clear()),Ae(e,t)}Gd=null,_c(e,t)}t=!1,r=Ln;e:do try{if(sn!==El&&Lt!==null){var c=Lt,d=ql;switch(sn){case gg:wm(),r=Xd;break e;case Vd:case Ss:case Cs:case qd:No.current===null&&(t=!0);var _=sn;if(sn=El,ql=null,mc(e,c,d,_),n&&Zc){r=Hi;break e}break;default:_=sn,sn=El,ql=null,mc(e,c,d,_)}}g5(),r=Ln;break}catch(w){h5(e,w)}while(!0);return t&&e.shellSuspendCounter++,Ef(),Wt=o,P.H=l,P.A=a,Lt===null&&(mn=null,kt=0,b()),r}function g5(){for(;Lt!==null;)y5(Lt)}function l4(e,t){var n=Wt;Wt|=yo;var o=m5(),l=p5();if(mn!==e||kt!==t){if(ei){var a=e.memoizedUpdaters;0<a.size&&(Zu(e,kt),a.clear()),Ae(e,t)}Gd=null,h_=eo()+Yv,_c(e,t)}else Zc=de(e,t);e:do try{if(sn!==El&&Lt!==null)t:switch(t=Lt,a=ql,sn){case s_:sn=El,ql=null,mc(e,t,a,s_);break;case Ss:case Cs:if(v1(a)){sn=El,ql=null,b5(t);break}t=function(){sn!==Ss&&sn!==Cs||mn!==e||(sn=c_),Wa(e)},a.then(t,t);break e;case Vd:sn=c_;break e;case Uv:sn=pg;break e;case c_:v1(a)?(sn=El,ql=null,b5(t)):(sn=El,ql=null,mc(e,t,a,c_));break;case pg:var r=null;switch(Lt.tag){case 26:r=Lt.memoizedState;case 5:case 27:var c=Lt;if(r?x2(r):c.stateNode.complete){sn=El,ql=null;var d=c.sibling;if(d!==null)Lt=d;else{var _=c.return;_!==null?(Lt=_,hh(_)):Lt=null}break t}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}sn=El,ql=null,mc(e,t,a,pg);break;case qd:sn=El,ql=null,mc(e,t,a,qd);break;case gg:wm(),Ln=Xd;break e;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}P.actQueue!==null?g5():a4();break}catch(w){h5(e,w)}while(!0);return Ef(),P.H=o,P.A=l,Wt=n,Lt!==null?Hi:(mn=null,kt=0,b(),Ln)}function a4(){for(;Lt!==null&&!D6();)y5(Lt)}function y5(e){var t=e.alternate;(e.mode&Nt)!==pt?(s0(e),t=ie(e,om,t,e,ui),c0(e)):t=ie(e,om,t,e,ui),e.memoizedProps=e.pendingProps,t===null?hh(e):Lt=t}function b5(e){var t=ie(e,i4,e);e.memoizedProps=e.pendingProps,t===null?hh(e):Lt=t}function i4(e){var t=e.alternate,n=(e.mode&Nt)!==pt;switch(n&&s0(e),e.tag){case 15:case 0:t=by(t,e,e.pendingProps,e.type,void 0,kt);break;case 11:t=by(t,e,e.pendingProps,e.type.render,e.ref,kt);break;case 5:S0(e);var o=e;o===xo&&(zt?(nc(o),o.tag===5&&o.stateNode!=null&&(yn=o.stateNode)):(nc(o),zt=!0));default:Ty(t,e),e=Lt=ot(e,ui),t=om(t,e,ui)}return n&&c0(e),t}function mc(e,t,n,o){Ef(),S0(t),Yc=null,zd=0;var l=t.return;try{if(Xw(e,l,t,n,kt)){Ln=Yd,Jf(e,Qe(n,e.current)),Lt=null;return}}catch(a){if(l!==null)throw Lt=l,a;Ln=Yd,Jf(e,Qe(n,e.current)),Lt=null;return}t.flags&32768?(zt||o===s_?e=!0:Zc||(kt&536870912)!==0?e=!1:(Ui=e=!0,(o===Ss||o===Cs||o===Vd||o===qd)&&(o=No.current,o!==null&&o.tag===13&&(o.flags|=16384))),v5(t,e)):hh(t)}function hh(e){var t=e;do{if((t.flags&32768)!==0){v5(t,Ui);return}var n=t.alternate;if(e=t.return,s0(t),n=ie(t,Gw,n,t,ui),(t.mode&Nt)!==pt&&m1(t),n!==null){Lt=n;return}if(t=t.sibling,t!==null){Lt=t;return}Lt=t=e}while(t!==null);Ln===Hi&&(Ln=Hv)}function v5(e,t){do{var n=Pw(e.alternate,e);if(n!==null){n.flags&=32767,Lt=n;return}if((e.mode&Nt)!==pt){m1(e),n=e.actualDuration;for(var o=e.child;o!==null;)n+=o.actualDuration,o=o.sibling;e.actualDuration=n}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Lt=e;return}Lt=e=n}while(e!==null);Ln=Xd,Lt=null}function Cm(e,t,n,o,l,a,r,c,d,_,w,A,O,$,ce){e.cancelPendingCommit=null;do Wu();while(Bn!==di);if(Da.flushLegacyContextWarning(),Da.flushPendingUnsafeLifecycleWarnings(),(Wt&(yo|Vl))!==ko)throw Error("Should not already be working.");if(io(n),w===ws)vi($,ce,n,qn);else if(o!==null){if(_=t!==null&&t.alternate!==null&&t.alternate.memoizedState.isDehydrated&&(t.flags&256)!==0,a=qn,Cn&&!(ce<=$)){w=[];for(var Ne=0;Ne<o.length;Ne++){var Ge=o[Ne].value;w.push(["Recoverable Error",typeof Ge=="object"&&Ge!==null&&typeof Ge.message=="string"?String(Ge.message):String(Ge)])}$={start:$,end:ce,detail:{devtools:{color:"primary-dark",track:Xt,trackGroup:Ht,tooltipText:_?"Hydration Failed":"Recovered after Error",properties:w}}},a?a.run(performance.measure.bind(performance,"Recovered",$)):performance.measure("Recovered",$),performance.clearMeasures("Recovered")}}else a=qn,!Cn||ce<=$||(_=(n&738197653)===n?"tertiary-dark":"primary-dark",w=(n&536870912)===n?"Prepared":(n&201326741)===n?"Hydrated":"Render",a?a.run(console.timeStamp.bind(console,w,$,ce,Xt,Ht,_)):console.timeStamp(w,$,ce,Xt,Ht,_));if(t!==null){if(n===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),t===e.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");e===mn&&(Lt=mn=null,kt=0),Es=t,Na=e,Ml=n,Sg=l,Qv=o,p_=ce,g_=O,Ql=__,Cg=null,r4(e,t,n,r,c,d,A,O,ce)}}function r4(e,t,n,o,l,a,r,c,d){var _=t.lanes|t.childLanes;if(wg=_,_|=Ip,ee(e,n,_,o,l,a),Jc=null,(n&335544064)===n?(Kc=Aw(e),o=10262):(Kc=null,o=10256),t.actualDuration!==0||(t.subtreeFlags&o)!==0||(t.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,m4(Sc,function(){return ef=window.event,Ql===__&&(Ql=bg),Mm(),null})):(e.callbackNode=null,e.callbackPriority=0),zi=null,Ni=to(),c!==null&&or(d,Ni,c,qn),o_=!1,c=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||c){c=P.T,P.T=null,d=on.p,on.p=ll,o=Wt,Wt|=Vl;try{e4(e,t,n)}finally{Wt=o,on.p=d,P.T=c}}Bn=Vv,o_?(_s|=n,Sl=null,Fc=V4(r,e.containerInfo,Kc,km,Em,d4,Tm,Mm,s4,c4,u4.bind(null,n))):(km(),Em(),Tm())}function s4(e){if(Bn!==di){var t=Na.onRecoverableError;t(e,x5(null))}}function c4(e){Ma=to(),Du(g_===null?p_:Ni,Ma,zi,Ql===Pd,qn),g_=Cg=e}function u4(e){if((_s&e)!==0){var t=Sl;_s&=~e,Sl=null,(e&4194048)!==0&&(kt&4194048)===0&&(Ml&4194048)===0&&(io(256),va(Ra,eo(),t)),(e&62914560)!==0&&(kt&62914560)===0&&(Ml&62914560)===0&&(io(4194304),va(Pp,eo(),t)),(e&2080374784)!==0&&(kt&2080374784)===0&&(Ml&2080374784)===0&&(io(268435456),va(Wp,eo(),t))}}function d4(){Bn===vg&&(Bn=di,Ky(Es,Na),Bn=xg)}function km(){if(Bn===Vv){Bn=di;var e=Na,t=Es,n=Ml,o=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||o){o=P.T,P.T=null;var l=on.p;on.p=ll;var a=Wt;Wt|=Vl;try{Pc=n,Wc=e,Id=i_=!1,Of(),Fy(t,e,n),Wc=Pc=null,n=zg;var r=Mu(e.containerInfo),c=n.focusedElem,d=n.selectionRange;if(r!==c&&c&&c.ownerDocument&&Zs(c.ownerDocument.documentElement,c)){if(d!==null&&Ru(c)){var _=d.start,w=d.end;if(w===void 0&&(w=_),"selectionStart"in c)c.selectionStart=_,c.selectionEnd=Math.min(w,c.value.length);else{var A=c.ownerDocument||document,O=A&&A.defaultView||window;if(O.getSelection){var $=O.getSelection(),ce=c.textContent.length,Ne=Math.min(d.start,ce),Ge=d.end===void 0?Ne:Math.min(d.end,ce);!$.extend&&Ne>Ge&&(r=Ge,Ge=Ne,Ne=r);var Dt=rt(c,Ne),C=rt(c,Ge);if(Dt&&C&&($.rangeCount!==1||$.anchorNode!==Dt.node||$.anchorOffset!==Dt.offset||$.focusNode!==C.node||$.focusOffset!==C.offset)){var E=A.createRange();E.setStart(Dt.node,Dt.offset),$.removeAllRanges(),Ne>Ge?($.addRange(E),$.extend(C.node,C.offset)):(E.setEnd(C.node,C.offset),$.addRange(E))}}}}for(A=[],$=c;$=$.parentNode;)$.nodeType===1&&A.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<A.length;c++){var N=A[c];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}ru=!!Ng,zg=Ng=null}finally{Wt=a,on.p=l,P.T=o}}e.current=t,Bn=qv}}function Em(){if(Bn===qv){Bn=di;var e=Cg;if(e!==null){Ni=to();var t=Ma,n=Ni;!Cn||n<=t||(Sl?Sl.run(console.timeStamp.bind(console,e,t,n,Xt,Ht,"secondary-light")):console.timeStamp(e,t,n,Xt,Ht,"secondary-light"))}e=Na,t=Es,n=Ml;var o=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||o){o=P.T,P.T=null;var l=on.p;on.p=ll;var a=Wt;Wt|=Vl;try{Pc=n,Wc=e,Of(),qy(e,t.alternate,t),Wc=Pc=null}finally{Wt=a,on.p=l,P.T=o}}e=p_,t=g_,Ma=to(),Du(t===null?e:Ni,Ma,zi,Ql===Pd,qn),Bn=vg}}function Tm(){if(Bn===xg||Bn===vg){if(Bn===xg){var e=Ma;Ma=to();var t=Ma,n=Ql===Pd;!Cn||t<=e||(Sl?Sl.run(console.timeStamp.bind(console,n?"Interrupted View Transition":"Starting Animation",e,t,Xt,Ht,n?"error":"secondary-light")):console.timeStamp(n?"Interrupted View Transition":"Starting Animation",e,t,Xt,Ht,n?" error":"secondary-light")),Ql!==Pd&&(Ql=Xv)}Bn=di,e=Fc,Fc=null,O6(),t=Na;var o=Es;n=Ml;var l=Qv,a=(n&335544064)===n?10262:10256;(a=o.actualDuration!==0||(o.subtreeFlags&a)!==0||(o.flags&a)!==0)?Bn=m_:(Bn=di,Es=Na=null,w5(t,t.pendingLanes),Ts=0,Zd=null);var r=t.pendingLanes;if(r===0&&(Br=null),a||E5(t),r=Ct(n),o=o.stateNode,Ho&&typeof Ho.onCommitFiberRoot=="function")try{var c=(o.current.flags&128)===128;switch(r){case ll:var d=bp;break;case Ea:d=vp;break;case ti:d=Sc;break;case Rh:d=xp;break;default:d=Sc}Ho.onCommitFiberRoot(Cc,o,d,c)}catch(O){Ka||(Ka=!0,console.error("React instrumentation encountered an error: %o",O))}if(ei&&t.memoizedUpdaters.clear(),n4(),l!==null){c=P.T,d=on.p,on.p=ll,P.T=null;try{var _=t.onRecoverableError;for(o=0;o<l.length;o++){var w=l[o],A=x5(w.stack);ie(w.source,_,w.value,A)}}finally{P.T=c,on.p=d}}if(_=Jc,w=Kc,Kc=null,_!==null&&(Jc=null,w===null&&(w=[]),e!==null))for(A=0;A<_.length;A++)l=(0,_[A])(w),l!==void 0&&e.finished.finally(l);(Ml&3)!==0&&Wu(),Wa(t),r=t.pendingLanes,(n&261930)!==0&&(r&42)!==0?(Gh=!0,t===y_?Wd++:(Wd=0,y_=t)):(Wd=0,y_=null),a||rs(n,Ma),Fu(0,!1)}}function x5(e){return e={componentStack:e},Object.defineProperty(e,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),e}function w5(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Nu(t)))}function Wu(){return Fc!==null&&(Fc.skipTransition(),Gv||(Gv=!0,console.warn("A flushSync update cancelled a View Transition because it was called while the View Transition was still preparing. To preserve the synchronous semantics, React had to skip the View Transition. If you can, try to avoid flushSync() in a scenario that's likely to interfere.")),Fc=null,Ql=Pd),km(),Em(),Tm(),Mm()}function Mm(){if(Bn!==m_)return!1;var e=Na,t=wg;wg=0;var n=Ct(Ml),o=ti===0||ti>n?ti:n;n=P.T;var l=on.p;try{on.p=o,P.T=null;var a=Sg;Sg=null,o=Na;var r=Ml;if(Bn=di,Es=Na=null,Ml=0,(Wt&(yo|Vl))!==ko)throw Error("Cannot flush passive effects while already rendering.");io(r),kg=!0,b_=!1;var c=0;if(zi=null,c=eo(),Ql===Xv)va(Ma,c,Sl);else{var d=Ma,_=c,w=Ql===bg;!Cn||_<=d||(qn?qn.run(console.timeStamp.bind(console,w?"Waiting for Paint":"Waiting",d,_,Xt,Ht,"secondary-light")):console.timeStamp(w?"Waiting for Paint":"Waiting",d,_,Xt,Ht,"secondary-light"))}d=Wt,Wt|=Vl;var A=o.current;Of(),i5(A);var O=o.current;A=p_,Of(),n5(o,O,r,a,A),E5(o),Wt=d;var $=eo();if(O=c,A=qn,zi!==null?kf(O,$,zi,!0,A):!Cn||$<=O||(A?A.run(console.timeStamp.bind(console,"Remaining Effects",O,$,Xt,Ht,"secondary-dark")):console.timeStamp("Remaining Effects",O,$,Xt,Ht,"secondary-dark")),rs(r,$),Fu(0,!1),b_?o===Zd?Ts++:(Ts=0,Zd=o):Ts=0,b_=kg=!1,Ho&&typeof Ho.onPostCommitFiberRoot=="function")try{Ho.onPostCommitFiberRoot(Cc,o)}catch(Ne){Ka||(Ka=!0,console.error("React instrumentation encountered an error: %o",Ne))}var ce=o.current.stateNode;return ce.effectDuration=0,ce.passiveEffectDuration=0,!0}finally{on.p=l,P.T=n,w5(e,t)}}function S5(e,t,n){t=Qe(n,t),p1(t),t=Q0(e.stateNode,t,2),e=cr(e,t,2),e!==null&&(R(e,2),Wa(e))}function nn(e,t,n){if(eu=!1,e.tag===3)S5(e,e,n);else{for(;t!==null;){if(t.tag===3){S5(t,e,n);return}if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Br===null||!Br.has(o))){e=Qe(n,e),p1(e),n=G0(2),o=cr(t,n,2),o!==null&&(P0(n,o,t,e),R(o,2),Wa(o));return}}t=t.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,n)}}function Rm(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new eS;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(n)||(yg=!0,l.add(n),o=f4.bind(null,e,t,n),ei&&Zu(e,n),t.then(o,o))}function f4(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,(n&127)!==0?0>li&&(Er=li=to(),wd=Yh("Promise Resolved"),Tr=Xh):(n&4194048)!==0&&0>ca&&(Ra=ca=to(),Cd=Yh("Promise Resolved"),Gp=Xh),c5()&&P.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),mn===e&&(kt&n)===n&&((Ln===Nr||Ln===r_&&(kt&62914560)===kt&&eo()-f_<jv)&&(Wt&yo)===ko?_c(e,0):u_|=n,ks===kt&&(ks=0)),Wa(e)}function C5(e,t){t===0&&(t=St()),e=D(e,t),e!==null&&(R(e,t),Wa(e))}function h4(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),C5(e,n)}function _4(e,t){var n=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}o!==null&&o.delete(t),C5(e,n)}function Dm(e,t,n){if((t.subtreeFlags&134225920)!==0)for(t=t.child;t!==null;){var o=e,l=t,a=l.type===wh;a=n||a,l.tag!==22?l.flags&134217728?a&&ie(l,k5,o,l):Dm(o,l,a):l.memoizedState===null&&(a&&l.flags&134225920?ie(l,k5,o,l):l.subtreeFlags&134217728&&ie(l,Dm,o,l,a)),t=t.sibling}}function k5(e,t){G(!0);try{e5(t,Ud),r5(t),t5(e,t.alternate,t,Ud),o5(e,t,0,null,!1,0)}finally{G(!1)}}function E5(e){var t=!0;e.current.mode&(Uo|Ta)||(t=!1),Dm(e,e.current,t)}function T5(e){if((Wt&yo)===ko){var t=e.tag;if(t===3||t===1||t===0||t===11||t===14||t===15){if(t=ke(e)||"ReactComponent",v_!==null){if(v_.has(t))return;v_.add(t)}else v_=new Set([t]);ie(e,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function Zu(e,t){ei&&e.memoizedUpdaters.forEach(function(n){Oe(e,n,t)})}function m4(e,t){var n=P.actQueue;return n!==null?(n.push(t),oS):yp(e,t)}function p4(e){c5()&&P.actQueue===null&&ie(e,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,ke(e))})}function Wa(e){e!==nu&&e.next===null&&(nu===null?tu=nu=e:nu=nu.next=e),x_=!0,P.actQueue!==null?Tg||(Tg=!0,O5()):Eg||(Eg=!0,O5())}function Fu(e,t){if(!Mg&&x_){Mg=!0;do for(var n=!1,o=tu;o!==null;){if(!t)if(e!==0){var l=o.pendingLanes;if(l===0)var a=0;else{var r=o.suspendedLanes,c=o.pingedLanes;a=(1<<31-ol(42|e)+1)-1,a&=l&~(r&~c),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,D5(o,a))}else a=kt,a=ze(o,o===mn?a:0,o.cancelPendingCommit!==null||o.timeoutHandle!==Os),(a&3)===0||de(o,a)||(n=!0,D5(o,a));o=o.next}while(n);Mg=!1}}function g4(){ef=window.event,Om()}function Om(){x_=Tg=Eg=!1;var e=0;$r!==0&&k4()&&(e=$r);for(var t=eo(),n=null,o=tu;o!==null;){var l=o.next,a=M5(o,t);a===0?(o.next=null,n===null?tu=l:n.next=l,l===null&&(nu=n)):(n=o,(e!==0||(a&3)!==0)&&(x_=!0)),o=l}Bn!==di&&Bn!==m_||Fu(e,!1),$r!==0&&($r=0)}function M5(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-ol(a),c=1<<r,d=l[r];d===-1?((c&n)===0||(c&o)!==0)&&(l[r]=ft(c,t)):d<=t&&(e.expiredLanes|=c),a&=~c}if(t=mn,n=kt,n=ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==Os),o=e.callbackNode,n===0||e===t&&(sn===Ss||sn===Cs)||e.cancelPendingCommit!==null)return o!==null&&Am(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||de(e,n)){if(t=n&-n,t!==e.callbackPriority||P.actQueue!==null&&o!==Rg)Am(o);else return t;switch(Ct(n)){case ll:case Ea:n=vp;break;case ti:n=Sc;break;case Rh:n=xp;break;default:n=Sc}return o=R5.bind(null,e),P.actQueue!==null?(P.actQueue.push(o),n=Rg):n=yp(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&Am(o),e.callbackPriority=2,e.callbackNode=null,2}function R5(e,t){if(Gh=Qh=!1,ef=window.event,Bn!==di&&Bn!==m_)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ql===__&&(Ql=bg),Wu()&&e.callbackNode!==n)return null;var o=kt;return o=ze(e,e===mn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==Os),o===0?null:(d5(e,o,t),M5(e,eo()),e.callbackNode!=null&&e.callbackNode===n?R5.bind(null,e):null)}function D5(e,t){if(Wu())return null;Qh=Gh,Gh=!1,d5(e,t,!0)}function Am(e){e!==Rg&&e!==null&&R6(e)}function O5(){P.actQueue!==null&&P.actQueue.push(function(){return Om(),null}),hS(function(){(Wt&(yo|Vl))!==ko?yp(bp,g4):Om()})}function Nm(){if($r===0){var e=Dr;e===0&&(e=Eh,Eh<<=1,(Eh&261888)===0&&(Eh=256)),$r=e}return $r}function A5(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:(Ie(e,"action"),Wi(e))}function y4(e,t,n,o,l){if(t==="submit"&&n&&n.stateNode===l){var a=A5((l[al]||null).action),r=o.submitter;r&&(t=(t=r[al]||null)?A5(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var c=new Lh("action","action",null,o,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($r!==0){var d=new FormData(l,r),_={pending:!0,data:d,method:l.method,action:a};Object.freeze(_),U0(n,_,null,d)}}else typeof a=="function"&&(c.preventDefault(),d=new FormData(l,r),_={pending:!0,data:d,method:l.method,action:a},Object.freeze(_),U0(n,_,a,d))},currentTarget:l}]})}}function _h(e,t,n){e.currentTarget=n;try{t(e)}catch(o){Bp(o)}e.currentTarget=null}function N5(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n];e:{var l=void 0,a=o.event;if(o=o.listeners,t)for(var r=o.length-1;0<=r;r--){var c=o[r],d=c.instance,_=c.currentTarget;if(c=c.listener,d!==l&&a.isPropagationStopped())break e;d!==null?ie(d,_h,a,c,_):_h(a,c,_),l=d}else for(r=0;r<o.length;r++){if(c=o[r],d=c.instance,_=c.currentTarget,c=c.listener,d!==l&&a.isPropagationStopped())break e;d!==null?ie(d,_h,a,c,_):_h(a,c,_),l=d}}}}function Gt(e,t){Dg.has(e)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',e);var n=t[Q2];n===void 0&&(n=t[Q2]=new Set);var o=e+"__bubble";n.has(o)||(z5(t,e,2,!1),n.add(o))}function zm(e,t,n){Dg.has(e)&&!t&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',e);var o=0;t&&(o|=4),z5(n,e,o,t)}function Lm(e){if(!e[w_]){e[w_]=!0,P2.forEach(function(n){n!=="selectionchange"&&(Dg.has(n)||zm(n,!1,e),zm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[w_]||(t[w_]=!0,zm("selectionchange",!1,t))}}function z5(e,t,n,o){switch(D2(t)){case ll:var l=y6;break;case Ea:l=b6;break;default:l=tp}n=l.bind(null,t,n,e),l=void 0,!Ep||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Bm(e,t,n,o,l){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var r=o.tag;if(r===3||r===4){var c=o.stateNode.containerInfo;if(c===l)break;if(r===4)for(r=o.return;r!==null;){var d=r.tag;if((d===3||d===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;c!==null;){if(r=lo(c),r===null)return;if(d=r.tag,d===5||d===6||d===26||d===27){o=a=r;continue e}c=c.parentNode}}o=o.return}Vs(function(){var _=a,w=pa(n),A=[];e:{var O=Ob.get(e);if(O!==void 0){var $=Lh,ce=e;switch(e){case"keypress":if(ga(n)===0)break e;case"keydown":case"keyup":$=p3;break;case"focusin":ce="focus",$=Dp;break;case"focusout":ce="blur",$=Dp;break;case"beforeblur":case"afterblur":$=Dp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=gb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=l3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=x3;break;case Tb:case Mb:case Rb:$=r3;break;case Db:$=S3;break;case"scroll":case"scrollend":$=n3;break;case"wheel":$=k3;break;case"copy":case"cut":case"paste":$=c3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=bb;break;case"submit":$=b3;break;case"toggle":case"beforetoggle":$=T3}var Ne=(t&4)!==0,Ge=!Ne&&(e==="scroll"||e==="scrollend"),Dt=Ne?O!==null?O+"Capture":null:O;Ne=[];for(var C=_,E;C!==null;){var N=C;if(E=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||E===null||Dt===null||(N=Ol(C,Dt),N!=null&&Ne.push(Ju(C,N,E))),Ge)break;C=C.return}0<Ne.length&&(O=new $(O,ce,null,n,w),A.push({event:O,listeners:Ne}))}}if((t&7)===0){e:{if($=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",$&&n!==ud&&(ce=n.relatedTarget||n.fromElement)&&(lo(ce)||ce[br]))break e;(O||$)&&(ce=w.window===w?w:($=w.ownerDocument)?$.defaultView||$.parentWindow:window,O?($=n.relatedTarget||n.toElement,O=_,$=$?lo($):null,$!==null&&(Ge=F($),Ne=$.tag,$!==Ge||Ne!==5&&Ne!==27&&Ne!==6)&&($=null)):(O=null,$=_),O!==$&&(Ne=gb,N="onMouseLeave",Dt="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(Ne=bb,N="onPointerLeave",Dt="onPointerEnter",C="pointer"),Ge=O==null?ce:ao(O),E=$==null?ce:ao($),ce=new Ne(N,C+"leave",O,n,w),ce.target=Ge,ce.relatedTarget=E,N=null,lo(w)===_&&(Ne=new Ne(Dt,C+"enter",$,n,w),Ne.target=E,Ne.relatedTarget=Ge,N=Ne),Ge=N,Ne=O&&$?Te(O,$,b4):null,O!==null&&L5(A,ce,O,Ne,!1),$!==null&&Ge!==null&&L5(A,Ge,$,Ne,!0)))}e:{if(O=_?ao(_):window,$=O.nodeName&&O.nodeName.toLowerCase(),$==="select"||$==="input"&&O.type==="file")var Q=Ji;else if(bi(O))if(kb)Q=Tu;else{Q=Ps;var pe=xf}else $=O.nodeName,!$||$.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?_&&Pi(_.elementType)&&(Q=Ji):Q=wf;if(Q&&(Q=Q(e,_))){Eu(A,Q,n,w);break e}pe&&pe(e,O,_)}switch(pe=_?ao(_):window,e){case"focusin":(bi(pe)||pe.contentEditable==="true")&&(Oc=pe,Ap=_,gd=null);break;case"focusout":gd=Ap=Oc=null;break;case"mousedown":Np=!0;break;case"contextmenu":case"mouseup":case"dragend":Np=!1,Fs(A,n,w);break;case"selectionchange":if(O3)break;case"keydown":case"keyup":Fs(A,n,w)}var dt;if(Op)e:{switch(e){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else Dc?Zr(e,n)&&(Pe="onCompositionEnd"):e==="keydown"&&n.keyCode===vb&&(Pe="onCompositionStart");Pe&&(xb&&n.locale!=="ko"&&(Dc||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&Dc&&(dt=ku()):(vr=w,Tp="value"in vr?vr.value:vr.textContent,Dc=!0)),pe=mh(_,Pe),0<pe.length&&(Pe=new yb(Pe,e,null,n,w),A.push({event:Pe,listeners:pe}),dt?Pe.data=dt:(dt=Zi(n),dt!==null&&(Pe.data=dt)))),(dt=R3?Gs(e,n):o0(e,n))&&(Pe=mh(_,"onBeforeInput"),0<Pe.length&&(pe=new d3("onBeforeInput","beforeinput",null,n,w),A.push({event:pe,listeners:Pe}),pe.data=dt)),y4(A,e,_,n,w)}N5(A,t)})}function Ju(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mh(e,t){for(var n=t+"Capture",o=[];e!==null;){var l=e,a=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||a===null||(l=Ol(e,n),l!=null&&o.unshift(Ju(e,l,a)),l=Ol(e,t),l!=null&&o.push(Ju(e,l,a))),e.tag===3)return o;e=e.return}return[]}function b4(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function L5(e,t,n,o,l){for(var a=t._reactName,r=[];n!==null&&n!==o;){var c=n,d=c.alternate,_=c.stateNode;if(c=c.tag,d!==null&&d===o)break;c!==5&&c!==26&&c!==27||_===null||(d=_,l?(_=Ol(n,a),_!=null&&r.unshift(Ju(n,_,d))):l||(_=Ol(n,a),_!=null&&r.push(Ju(n,_,d)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}function $m(e,t){yi(e,t),e!=="input"&&e!=="textarea"&&e!=="select"||t==null||t.value!==null||mb||(mb=!0,e==="select"&&t.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e));var n={registrationNameDependencies:cs,possibleRegistrationNames:wp};Pi(e)||typeof t.is=="string"||Cu(e,t,n),t.contentEditable&&!t.suppressContentEditableWarning&&t.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function vo(e,t,n,o){t!==n&&(n=mr(n),mr(t)!==n&&(o[e]=t))}function B5(e){return!!(e.getAttribute("vt-share")||e.getAttribute("vt-exit")||e.getAttribute("vt-enter")||e.getAttribute("vt-update"))}function $5(e){if(!B5(e))return!1;var t=e.getAttribute("vt-name");return e=e.style["view-transition-name"],t?t===e:e.startsWith("_T_")}function v4(e,t,n){t.forEach(function(o){o==="style"?e.getAttribute(o)!==""&&(o=e.style,(o.length===1&&o[0]==="view-transition-name"||o.length===2&&o[0]==="view-transition-class"&&o[1]==="view-transition-name")&&$5(e)||(n.style=Um(e))):n[I5(o)]=e.getAttribute(o)})}function Za(e,t){t===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)}function H5(e,t){return e=e.namespaceURI===Ah||e.namespaceURI===Ec?e.ownerDocument.createElementNS(e.namespaceURI,e.tagName):e.ownerDocument.createElement(e.tagName),e.innerHTML=t,e.innerHTML}function mr(e){return qt(e)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",Yt(e)),Ot(e)),(typeof e=="string"?e:""+e).replace(lS,`
`).replace(aS,"")}function U5(e,t){return t=mr(t),mr(e)===t}function un(e,t,n,o,l,a){switch(n){case"children":if(typeof o=="string")Rt(o,t,!1),t==="body"||t==="textarea"&&o===""||Gr(e,o);else if(typeof o=="number"||typeof o=="bigint")Rt(""+o,t,!1),t!=="body"&&Gr(e,""+o);else return;break;case"className":Wl(e,"class",o);break;case"tabIndex":Wl(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Wl(e,n,o);break;case"style":Su(e,o,a);return;case"data":if(t!=="object"){Wl(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){console.error(n==="src"?'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.':'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',n,n),e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}Ie(o,n),o=Wi(o),e.setAttribute(n,o);break;case"action":case"formAction":if(o!=null&&(t==="form"?n==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof o=="function"&&(l.encType==null&&l.method==null||k_||(k_=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),l.target==null||C_||(C_=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):t==="input"||t==="button"?n==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):t!=="input"||l.type==="submit"||l.type==="image"||S_?t!=="button"||l.type==null||l.type==="submit"||S_?typeof o=="function"&&(l.name==null||Jv||(Jv=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),l.formEncType==null&&l.formMethod==null||k_||(k_=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),l.formTarget==null||C_||(C_=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(S_=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(S_=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):console.error(n==="action"?"You can only pass the action prop to <form>.":"You can only pass the formAction prop to <input> or <button>.")),typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&un(e,t,"name",l.name,l,null),un(e,t,"formEncType",l.formEncType,l,null),un(e,t,"formMethod",l.formMethod,l,null),un(e,t,"formTarget",l.formTarget,l,null)):(un(e,t,"encType",l.encType,l,null),un(e,t,"method",l.method,l,null),un(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}Ie(o,n),o=Wi(o),e.setAttribute(n,o);break;case"onClick":o!=null&&(typeof o!="function"&&Za(n,o),e.onclick=Wn);return;case"onScroll":o!=null&&(typeof o!="function"&&Za(n,o),Gt("scroll",e));return;case"onScrollEnd":o!=null&&(typeof o!="function"&&Za(n,o),Gt("scrollend",e));return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(n=o.__html,n!=null){if(l.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}Ie(o,n),n=Wi(o),e.setAttributeNS(Ms,"xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?(Ie(o,n),e.setAttribute(n,o)):e.removeAttribute(n);break;case"inert":o!==""||E_[n]||(E_[n]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",n));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?(Ie(o,n),e.setAttribute(n,o)):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?(Ie(o,n),e.setAttribute(n,o)):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):(Ie(o,n),e.setAttribute(n,o));break;case"popover":Gt("beforetoggle",e),Gt("toggle",e),Vi(e,"popover",o);break;case"xlinkActuate":ma(e,Ms,"xlink:actuate",o);break;case"xlinkArcrole":ma(e,Ms,"xlink:arcrole",o);break;case"xlinkRole":ma(e,Ms,"xlink:role",o);break;case"xlinkShow":ma(e,Ms,"xlink:show",o);break;case"xlinkTitle":ma(e,Ms,"xlink:title",o);break;case"xlinkType":ma(e,Ms,"xlink:type",o);break;case"xmlBase":ma(e,Og,"xml:base",o);break;case"xmlLang":ma(e,Og,"xml:lang",o);break;case"xmlSpace":ma(e,Og,"xml:space",o);break;case"is":a!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),Vi(e,"is",o);break;case"innerText":case"textContent":return;case"popoverTarget":Kv||o==null||typeof o!="object"||(Kv=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",o));default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=bf(n),Vi(e,n,o);else{cs.hasOwnProperty(n)&&o!=null&&typeof o!="function"&&Za(n,o);return}}Kt=!0}function Hm(e,t,n,o,l,a){switch(n){case"style":Su(e,o,a);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(n=o.__html,n!=null){if(l.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof o=="string")Gr(e,o);else if(typeof o=="number"||typeof o=="bigint")Gr(e,""+o);else return;break;case"onScroll":o!=null&&(typeof o!="function"&&Za(n,o),Gt("scroll",e));return;case"onScrollEnd":o!=null&&(typeof o!="function"&&Za(n,o),Gt("scrollend",e));return;case"onClick":o!=null&&(typeof o!="function"&&Za(n,o),e.onclick=Wn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(cs.hasOwnProperty(n))o!=null&&typeof o!="function"&&Za(n,o);else e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),a=n.slice(2,l?n.length-7:void 0),t=e[al]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,l),typeof o=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,o,l);break e}Kt=!0,n in e?e[n]=o:o===!0?e.setAttribute(n,""):Vi(e,n,o)}return}Kt=!0}function Oo(e,t,n){switch($m(t,n),t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Gt("error",e),Gt("load",e);var o=!1,l=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:un(e,t,a,r,n,null)}}l&&un(e,t,"srcSet",n.srcSet,n,null),o&&un(e,t,"src",n.src,n,null);return;case"input":Xi("input",n),Gt("invalid",e);var c=a=r=l=null,d=null,_=null;for(o in n)if(n.hasOwnProperty(o)){var w=n[o];if(w!=null)switch(o){case"name":l=w;break;case"type":r=w;break;case"checked":d=w;break;case"defaultChecked":_=w;break;case"value":a=w;break;case"defaultValue":c=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:un(e,t,o,w,n,null)}}gu(e,n),Vr(e,a,c,d,_,r,l,!1);return;case"select":Xi("select",n),Gt("invalid",e),o=r=a=null;for(l in n)if(n.hasOwnProperty(l)&&(c=n[l],c!=null))switch(l){case"value":a=c;break;case"defaultValue":r=c;break;case"multiple":o=c;default:un(e,t,l,c,n,null)}qi(e,n),t=a,n=r,e.multiple=!!o,t!=null?Zl(e,!!o,t,!1):n!=null&&Zl(e,!!o,n,!0);return;case"textarea":Xi("textarea",n),Gt("invalid",e),a=l=o=null;for(r in n)if(n.hasOwnProperty(r)&&(c=n[r],c!=null))switch(r){case"value":o=c;break;case"defaultValue":l=c;break;case"children":a=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:un(e,t,r,c,n,null)}Qi(e,n),Ys(e,o,l,a);return;case"option":qr(e,n);for(d in n)n.hasOwnProperty(d)&&(o=n[d],o!=null)&&(d==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":un(e,t,d,o,n,null));return;case"dialog":Gt("beforetoggle",e),Gt("toggle",e),Gt("cancel",e),Gt("close",e);break;case"iframe":case"object":Gt("load",e);break;case"video":case"audio":for(o=0;o<Fd.length;o++)Gt(Fd[o],e);break;case"image":Gt("error",e),Gt("load",e);break;case"details":Gt("toggle",e);break;case"embed":case"source":case"link":Gt("error",e),Gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in n)if(n.hasOwnProperty(_)&&(o=n[_],o!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:un(e,t,_,o,n,null)}return;default:if(Pi(t)){for(w in n)n.hasOwnProperty(w)&&(o=n[w],o!==void 0&&Hm(e,t,w,o,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(o=n[c],o!=null&&un(e,t,c,o,n,null))}function x4(e,t,n,o){switch($m(t,o),t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,a=null,r=null,c=null,d=null,_=null,w=null;for($ in n){var A=n[$];if(n.hasOwnProperty($)&&A!=null)switch($){case"checked":break;case"value":break;case"defaultValue":d=A;default:o.hasOwnProperty($)||un(e,t,$,null,o,A)}}for(var O in o){var $=o[O];if(A=n[O],o.hasOwnProperty(O)&&($!=null||A!=null))switch(O){case"type":$!==A&&(Kt=!0),a=$;break;case"name":$!==A&&(Kt=!0),l=$;break;case"checked":$!==A&&(Kt=!0),_=$;break;case"defaultChecked":$!==A&&(Kt=!0),w=$;break;case"value":$!==A&&(Kt=!0),r=$;break;case"defaultValue":$!==A&&(Kt=!0),c=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:$!==A&&un(e,t,O,$,o,A)}}t=n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null,o=o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null,t||!o||Fv||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),Fv=!0),!t||o||Zv||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),Zv=!0),mi(e,r,c,d,_,w,a,l);return;case"select":$=r=c=O=null;for(a in n)if(d=n[a],n.hasOwnProperty(a)&&d!=null)switch(a){case"value":break;case"multiple":$=d;default:o.hasOwnProperty(a)||un(e,t,a,null,o,d)}for(l in o)if(a=o[l],d=n[l],o.hasOwnProperty(l)&&(a!=null||d!=null))switch(l){case"value":a!==d&&(Kt=!0),O=a;break;case"defaultValue":a!==d&&(Kt=!0),c=a;break;case"multiple":a!==d&&(Kt=!0),r=a;default:a!==d&&un(e,t,l,a,o,d)}o=c,t=r,n=$,O!=null?Zl(e,!!t,O,!1):!!n!=!!t&&(o!=null?Zl(e,!!t,o,!0):Zl(e,!!t,t?[]:"",!1));return;case"textarea":$=O=null;for(c in n)if(l=n[c],n.hasOwnProperty(c)&&l!=null&&!o.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:un(e,t,c,null,o,l)}for(r in o)if(l=o[r],a=n[r],o.hasOwnProperty(r)&&(l!=null||a!=null))switch(r){case"value":l!==a&&(Kt=!0),O=l;break;case"defaultValue":l!==a&&(Kt=!0),$=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:l!==a&&un(e,t,r,l,o,a)}ml(e,O,$);return;case"option":for(var ce in n)O=n[ce],n.hasOwnProperty(ce)&&O!=null&&!o.hasOwnProperty(ce)&&(ce==="selected"?e.selected=!1:un(e,t,ce,null,o,O));for(d in o)O=o[d],$=n[d],o.hasOwnProperty(d)&&O!==$&&(O!=null||$!=null)&&(d==="selected"?(O!==$&&(Kt=!0),e.selected=O&&typeof O!="function"&&typeof O!="symbol"):un(e,t,d,O,o,$));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ne in n)O=n[Ne],n.hasOwnProperty(Ne)&&O!=null&&!o.hasOwnProperty(Ne)&&un(e,t,Ne,null,o,O);for(_ in o)if(O=o[_],$=n[_],o.hasOwnProperty(_)&&O!==$&&(O!=null||$!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:un(e,t,_,O,o,$)}return;default:if(Pi(t)){for(var Ge in n)O=n[Ge],n.hasOwnProperty(Ge)&&O!==void 0&&!o.hasOwnProperty(Ge)&&Hm(e,t,Ge,void 0,o,O);for(w in o)O=o[w],$=n[w],!o.hasOwnProperty(w)||O===$||O===void 0&&$===void 0||Hm(e,t,w,O,o,$);return}}for(var Dt in n)O=n[Dt],n.hasOwnProperty(Dt)&&O!=null&&!o.hasOwnProperty(Dt)&&un(e,t,Dt,null,o,O);for(A in o)O=o[A],$=n[A],!o.hasOwnProperty(A)||O===$||O==null&&$==null||un(e,t,A,O,o,$)}function I5(e){switch(e){case"class":return"className";case"for":return"htmlFor";default:return e}}function Um(e){for(var t={},n=e.style,o=0;o<n.length;o++){var l=n[o];l==="view-transition-name"&&$5(e)||(t[l]=n.getPropertyValue(l))}return t}function j5(e,t,n){if(t!=null&&typeof t!="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var o,l=o="",a;for(a in t)if(t.hasOwnProperty(a)){var r=t[a];r!=null&&typeof r!="boolean"&&r!==""&&(a.indexOf("--")===0?(et(r,a),o+=l+a+":"+(""+r).trim()):typeof r!="number"||r===0||hb.has(a)?(et(r,a),o+=l+a.replace(sb,"-$1").toLowerCase().replace(cb,"-ms-")+":"+(""+r).trim()):o+=l+a.replace(sb,"-$1").toLowerCase().replace(cb,"-ms-")+":"+r+"px",l=";")}o=o||null,t=e.getAttribute("style"),t!==o&&(o=mr(o),t=mr(t),t===o||t[t.length-1]===";"&&B5(e)||(n.style=Um(e)))}}function na(e,t,n,o,l,a){if(l.delete(n),e=e.getAttribute(n),e===null)switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":return}else if(o!=null)switch(typeof o){case"function":case"symbol":case"boolean":break;default:if(Ie(o,t),e===""+o)return}vo(t,e,o,a)}function Y5(e,t,n,o,l,a){if(l.delete(n),e=e.getAttribute(n),e===null){switch(typeof o){case"function":case"symbol":return}if(!o)return}else switch(typeof o){case"function":case"symbol":break;default:if(o)return}vo(t,e,o,a)}function Im(e,t,n,o,l,a){if(l.delete(n),e=e.getAttribute(n),e===null)switch(typeof o){case"undefined":case"function":case"symbol":return}else if(o!=null)switch(typeof o){case"function":case"symbol":break;default:if(Ie(o,n),e===""+o)return}vo(t,e,o,a)}function X5(e,t,n,o,l,a){if(l.delete(n),e=e.getAttribute(n),e===null)switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(o))return}else if(o!=null)switch(typeof o){case"function":case"symbol":case"boolean":break;default:if(!isNaN(o)&&(Ie(o,t),e===""+o))return}vo(t,e,o,a)}function jm(e,t,n,o,l,a){if(l.delete(n),e=e.getAttribute(n),e===null)switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":return}else if(o!=null)switch(typeof o){case"function":case"symbol":case"boolean":break;default:if(Ie(o,t),n=Wi(""+o),e===n)return}vo(t,e,o,a)}function V5(e,t,n,o){for(var l={},a=new Set,r=e.attributes,c=0;c<r.length;c++)switch(r[c].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;case"vt-name":case"vt-update":case"vt-enter":case"vt-exit":case"vt-share":case"vt-parent-enter":case"vt-parent-exit":break;default:a.add(r[c].name)}if(Pi(t)){for(var d in n)if(n.hasOwnProperty(d)){var _=n[d];if(_!=null){if(cs.hasOwnProperty(d))typeof _!="function"&&Za(d,_);else if(n.suppressHydrationWarning!==!0)switch(d){case"children":typeof _!="string"&&typeof _!="number"||vo("children",e.textContent,_,l);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":r=e.innerHTML,_=_?_.__html:void 0,_!=null&&(_=H5(e,_),vo(d,r,_,l));continue;case"style":a.delete(d),j5(e,_,l);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":a.delete(d.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",d);continue;case"className":a.delete("class"),r=Is(e,"class",_),vo("className",r,_,l);continue;default:o.context===Ii&&t!=="svg"&&t!=="math"?a.delete(d.toLowerCase()):a.delete(d),r=Is(e,d,_),vo(d,r,_,l)}}}}else for(_ in n)if(n.hasOwnProperty(_)&&(d=n[_],d!=null)){if(cs.hasOwnProperty(_))typeof d!="function"&&Za(_,d);else if(n.suppressHydrationWarning!==!0)switch(_){case"children":typeof d!="string"&&typeof d!="number"||vo("children",e.textContent,d,l);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":r=e.innerHTML,d=d?d.__html:void 0,d!=null&&(d=H5(e,d),r!==d&&(l[_]={__html:r}));continue;case"className":na(e,_,"class",d,a,l);continue;case"tabIndex":na(e,_,"tabindex",d,a,l);continue;case"style":a.delete(_),j5(e,d,l);continue;case"multiple":a.delete(_),vo(_,e.multiple,d,l);continue;case"muted":a.delete(_),vo(_,e.muted,d,l);continue;case"autoFocus":a.delete("autofocus"),vo(_,e.autofocus,d,l);continue;case"data":if(t!=="object"){a.delete(_),r=e.getAttribute("data"),vo(_,r,d,l);continue}case"src":case"href":if(!(d!==""||t==="a"&&_==="href"||t==="object"&&_==="data")){console.error(_==="src"?'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.':'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',_,_);continue}jm(e,_,_,d,a,l);continue;case"action":case"formAction":if(r=e.getAttribute(_),typeof d=="function"){a.delete(_.toLowerCase()),_==="formAction"?(a.delete("name"),a.delete("formenctype"),a.delete("formmethod"),a.delete("formtarget")):(a.delete("enctype"),a.delete("method"),a.delete("target"));continue}else if(r===rS){a.delete(_.toLowerCase()),vo(_,"function",d,l);continue}jm(e,_,_.toLowerCase(),d,a,l);continue;case"xlinkHref":jm(e,_,"xlink:href",d,a,l);continue;case"contentEditable":Im(e,_,"contenteditable",d,a,l);continue;case"spellCheck":Im(e,_,"spellcheck",d,a,l);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":Im(e,_,_,d,a,l);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":Y5(e,_,_.toLowerCase(),d,a,l);continue;case"capture":case"download":e:{c=e;var w=r=_,A=l;if(a.delete(w),c=c.getAttribute(w),c===null)switch(typeof d){case"undefined":case"function":case"symbol":break e;default:if(d===!1)break e}else if(d!=null)switch(typeof d){case"function":case"symbol":break;case"boolean":if(d===!0&&c==="")break e;break;default:if(Ie(d,r),c===""+d)break e}vo(r,c,d,A)}continue;case"cols":case"rows":case"size":case"span":e:{if(c=e,w=r=_,A=l,a.delete(w),c=c.getAttribute(w),c===null)switch(typeof d){case"undefined":case"function":case"symbol":case"boolean":break e;default:if(isNaN(d)||1>d)break e}else if(d!=null)switch(typeof d){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(d)||1>d)&&(Ie(d,r),c===""+d))break e}vo(r,c,d,A)}continue;case"rowSpan":X5(e,_,"rowspan",d,a,l);continue;case"start":X5(e,_,_,d,a,l);continue;case"xHeight":na(e,_,"x-height",d,a,l);continue;case"xlinkActuate":na(e,_,"xlink:actuate",d,a,l);continue;case"xlinkArcrole":na(e,_,"xlink:arcrole",d,a,l);continue;case"xlinkRole":na(e,_,"xlink:role",d,a,l);continue;case"xlinkShow":na(e,_,"xlink:show",d,a,l);continue;case"xlinkTitle":na(e,_,"xlink:title",d,a,l);continue;case"xlinkType":na(e,_,"xlink:type",d,a,l);continue;case"xmlBase":na(e,_,"xml:base",d,a,l);continue;case"xmlLang":na(e,_,"xml:lang",d,a,l);continue;case"xmlSpace":na(e,_,"xml:space",d,a,l);continue;case"inert":d!==""||E_[_]||(E_[_]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",_)),Y5(e,_,_,d,a,l);continue;default:if(!(2<_.length)||_[0]!=="o"&&_[0]!=="O"||_[1]!=="n"&&_[1]!=="N"){c=bf(_),r=!1,o.context===Ii&&t!=="svg"&&t!=="math"?a.delete(c.toLowerCase()):(w=_.toLowerCase(),w=Nh.hasOwnProperty(w)&&Nh[w]||null,w!==null&&w!==_&&(r=!0,a.delete(w)),a.delete(c));e:if(w=e,A=c,c=d,ht(A))if(w.hasAttribute(A))w=A.toLowerCase()==="nonce"?w.nonce:w.getAttribute(A),Ie(c,A),c=w===""+c?c:w;else{switch(typeof c){case"function":case"symbol":break e;case"boolean":if(w=A.toLowerCase().slice(0,5),w!=="data-"&&w!=="aria-")break e}c=c===void 0?void 0:null}else c=void 0;r||vo(_,c,d,l)}}}return 0<a.size&&n.suppressHydrationWarning!==!0&&v4(e,a,l),Object.keys(l).length===0?null:l}function w4(e,t){switch(e.length){case 0:return"";case 1:return e[0];case 2:return e[0]+" "+t+" "+e[1];default:return e.slice(0,-1).join(", ")+", "+t+" "+e[e.length-1]}}function q5(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function S4(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var l=n[o],a=l.transferSize,r=l.initiatorType,c=l.duration;if(a&&c&&q5(r)){for(r=0,c=l.responseEnd,o+=1;o<n.length;o++){var d=n[o],_=d.startTime;if(_>c)break;var w=d.transferSize,A=d.initiatorType;w&&q5(A)&&(d=d.responseEnd,r+=w*(d<c?1:(c-_)/(d-_)))}if(--o,t+=8*(a+r)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}function Ku(e){return e.nodeType===9?e:e.ownerDocument}function Q5(e){switch(e){case Ec:return lu;case Ah:return M_;default:return Ii}}function G5(e,t){if(e===Ii)switch(t){case"svg":return lu;case"math":return M_;default:return Ii}return e===lu&&t==="foreignObject"?Ii:e}function P5(e,t,n,o){return n=Ku(n).createElement(e),n[Ao]=o,n[al]=t,Oo(n,e,t),jn(n),n}function C4(e){if(e=e.type,typeof e!="string"||e===""||(e=e.toLowerCase(),e==="module"||e==="importmap"||e==="speculationrules"))return!1;switch(e){case"application/ecmascript":case"application/javascript":case"application/x-ecmascript":case"application/x-javascript":case"text/ecmascript":case"text/javascript":case"text/javascript1.0":case"text/javascript1.1":case"text/javascript1.2":case"text/javascript1.3":case"text/javascript1.4":case"text/javascript1.5":case"text/jscript":case"text/livescript":case"text/x-ecmascript":case"text/x-javascript":return!1}return!0}function Ym(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function k4(){var e=window.event;return e&&e.type==="popstate"?e===Lg?!1:(Lg=e,!0):(Lg=null,!1)}function ed(){var e=window.event;return e&&e!==ef?e.type:null}function td(){var e=window.event;return e&&e!==ef?e.timeStamp:-1.1}function E4(e){setTimeout(function(){throw e})}function T4(e,t,n){switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&e.focus();break;case"img":n.src?e.src=n.src:n.srcSet&&(e.srcset=n.srcSet)}}function M4(){}function R4(e,t,n,o){x4(e,t,n,o),e[al]=o}function W5(e){Gr(e,"")}function D4(e,t,n){e.nodeValue=n}function Z5(e){if(!e.__reactWarnedAboutChildrenConflict){var t=e[al]||null;if(t!==null){var n=Jn(e);n!==null&&(typeof t.children=="string"||typeof t.children=="number"?(e.__reactWarnedAboutChildrenConflict=!0,ie(n,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):t.dangerouslySetInnerHTML!=null&&(e.__reactWarnedAboutChildrenConflict=!0,ie(n,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function pr(e){return e==="head"}function O4(e,t){e.removeChild(t)}function A4(e,t){(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).removeChild(t)}function F5(e,t){var n=t,o=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n===Kd||n===T_){if(o===0){e.removeChild(l),bc(t);return}o--}else if(n===Jd||n===Hr||n===Ds||n===ou||n===Rs)o++;else if(n===cS)Wm(e.ownerDocument.documentElement);else if(n===dS){n=e.ownerDocument.head,Wm(n);for(var a=n.firstChild;a;){var r=a.nextSibling,c=a.nodeName;a[cd]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n===uS&&Wm(e.ownerDocument.body);n=l}while(n);bc(t)}function J5(e,t){var n=e;e=0;do{var o=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&o.nodeType===8)if(n=o.data,n===Kd){if(e===0)break;e--}else n!==Jd&&n!==Hr&&n!==Ds&&n!==ou||e++;n=o}while(n)}function N4(e){J5(e,!0)}function z4(e){e=e.style,typeof e.setProperty=="function"?e.setProperty("display","none","important"):e.display="none"}function L4(e){e.nodeValue=""}function B4(e){J5(e,!1)}function $4(e,t){t=t[nx],t=t!=null&&t.hasOwnProperty("display")?t.display:null,e.style.display=t==null||typeof t=="boolean"?"":(""+t).trim()}function H4(e,t){e.nodeValue=t}function U4(e){for(var t=e.firstChild;t!=null;){if(t.nodeType===1&&getComputedStyle(t).display==="block"){var n=Jn(t)||Jn(e);ie(n,function(o,l){console.error(`You're about to start a <ViewTransition> around a display: inline element <%s>, which itself has a display: block element <%s> inside it. This might trigger a bug in Safari which causes the View Transition to be skipped with a duplicate name error.
https://bugs.webkit.org/show_bug.cgi?id=290923`,o.toLocaleLowerCase(),l.toLocaleLowerCase())},e.tagName,t.tagName);break}if(t.firstChild!=null)t=t.firstChild;else{if(t===e)break;for(;t.nextSibling==null&&t.parentNode!=null&&t.parentNode!==e;)t=t.parentNode;t=t.nextSibling}}}function K5(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var o=1;else for(var l=o=0;l<t.length;l++){var a=t[l];0<a.width&&0<a.height&&o++}o===1?(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom):U4(e)}}function e2(e,t){e=e.style,t=t[nx];var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function t2(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Xm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return t2(t,n,e)}function I4(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return t2(t,n,e)}function j4(e,t){if(typeof e=="object"&&e!==null)switch(e.name){case"TimeoutError":return Error("A ViewTransition timed out because a Navigation stalled. This can happen if a Navigation is blocked on React itself. Such as if it's resolved inside useEffect. This can be solved by moving the resolution to useLayoutEffect.",{cause:e});case"AbortError":return t?null:Error("A ViewTransition was aborted early. This might be because you have other View Transition libraries on the page and only one can run at a time. To avoid this, use only React's built-in <ViewTransition> to coordinate.",{cause:e});case"InvalidStateError":if(e.message==="View transition was skipped because document visibility state is hidden."||e.message==="Skipping view transition because document visibility state has become hidden."||e.message==="Skipping view transition because viewport size changed."||e.message==="Transition was aborted because of invalid state")return null}return e}function Y4(e){return e.documentElement.clientHeight}function X4(e){this.addEventListener("load",e),this.addEventListener("error",e)}function V4(e,t,n,o,l,a,r,c,d,_,w){var A=t.nodeType===9?t:t.ownerDocument;try{var O=A.startViewTransition({update:function(){var ce=A.defaultView,Ne=ce.navigation&&ce.navigation.transition,Ge=A.fonts.status;o();var Dt=[];if(Ge==="loaded"&&(Y4(A),A.fonts.status==="loading"&&Dt.push(A.fonts.ready)),Ge=Dt.length,e!==null)for(var C=e.suspenseyImages,E=0,N=0;N<C.length;N++){var Q=C[N];if(!Q.complete){var pe=Q.getBoundingClientRect();if(0<pe.bottom&&0<pe.right&&pe.top<ce.innerHeight&&pe.left<ce.innerWidth){if(E+=w2(Q),E>D_){Dt.length=Ge;break}Q=new Promise(X4.bind(Q)),Dt.push(Q)}}}if(0<Dt.length)return _(0<Ge?Dt.length>Ge?"Waiting on Fonts and Images":"Waiting on Fonts":"Waiting on Images"),ce=Promise.race([Promise.all(Dt),new Promise(function(dt){return setTimeout(dt,_S)})]).then(l,l),(Ne?Promise.allSettled([Ne.finished,ce]):ce).then(a,a);if(l(),Ne)return Ne.finished.then(a,a);a()},types:n});A.__reactViewTransition=O;var $=[];return O.ready.then(function(){for(var ce=A.documentElement.getAnimations({subtree:!0}),Ne=0;Ne<ce.length;Ne++){var Ge=ce[Ne],Dt=Ge.effect,C=Dt.pseudoElement;if(C!=null&&C.startsWith("::view-transition")){$.push(Ge),Ge=Dt.getKeyframes();for(var E=C=void 0,N=!0,Q=0;Q<Ge.length;Q++){var pe=Ge[Q],dt=pe.width;if(C===void 0)C=dt;else if(C!==dt){N=!1;break}if(dt=pe.height,E===void 0)E=dt;else if(E!==dt){N=!1;break}delete pe.width,delete pe.height,pe.transform==="none"&&delete pe.transform}N&&C!==void 0&&E!==void 0&&(Dt.setKeyframes(Ge),N=getComputedStyle(Dt.target,Dt.pseudoElement),N.width!==C||N.height!==E)&&(N=Ge[0],N.width=C,N.height=E,N=Ge[Ge.length-1],N.width=C,N.height=E,Dt.setKeyframes(Ge))}}r()},function(ce){A.__reactViewTransition===O&&(A.__reactViewTransition=null);try{ce=j4(ce,!1),ce!==null&&d(ce)}finally{o(),l(),r(),w()}}),O.finished.finally(function(){for(var ce=0;ce<$.length;ce++)$[ce].cancel();A.__reactViewTransition===O&&(A.__reactViewTransition=null),w(),c()}),O}catch{return o(),l(),w(),r(),null}}function ss(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}function n2(e){return{name:e,group:new ss("group",e),imagePair:new ss("image-pair",e),old:new ss("old",e),new:new ss("new",e)}}function Hl(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}function q4(e,t,n,o){return Je(e).addEventListener(t,n,o),!1}function Q4(e,t,n,o){return Je(e).removeEventListener(t,n,o),!1}function pc(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function o2(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function l2(e,t,n,o){if(e.length===0)return-1;o=o2(o);for(var l=0;l<e.length;l++){var a=e[l];if(a.type===t&&a.listener===n&&o2(a.optionsOrUseCapture)===o)return l}return-1}function a2(e,t){return e.tag===6?!1:(e=Je(e),r6(e,t))}function Vm(e,t){return t.push(e),!1}function G4(e,t){return e.tag===6?!1:(e=Je(e),e===t||e.contains(t)?(t.blur(),!0):!1)}function P4(e,t){return e.tag===6||(e=Je(e),t.observe(e)),!1}function W4(e,t){return e.tag===6||(e=Je(e),t.unobserve(e)),!1}function Z4(e,t,n){za.push({fragmentInstance:e,observer:t,instance:n}),$g||($g=!0,s6(function(){$g=!1;var o=za;za=[];for(var l=0;l<o.length;l++){var a=o[l];a.observer.unobserve(a.instance)}}))}function F4(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Je(e),t.push.apply(t,e.getClientRects());return!1}function J4(e,t,n,o,l){var a=lo(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)e:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break e}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=l.ownerDocument,l===a||l===a.documentElement||l===a.body;e:{for(a=t,t=_t(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break e}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Te(n,a,ye),t===null?t=!1:(yt(t,!0,it,a,n),a=vc,vc=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===o)&&(t=Te(o,a,ye),t===null?t=!1:(yt(t,!0,re,a,o),a=vc,ip=vc=null,t=a!==null)),t):!1}function i2(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}function K4(e,t){return e=Je(e),r2(e,t),!1}function r2(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function s2(e,t){var n=t._eventListeners;if(n!==null)for(var o=0;o<n.length;o++){var l=n[o];e.addEventListener(l.type,l.attachedListener,pc(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,c=0;c<za.length;c++){var d=za[c];(d.fragmentInstance!==t||d.observer!==a||d.instance!==e)&&(za[r++]=d)}za.length=r,a.observe(e)}),r2(e,t))}function e6(e,t){var n=t._eventListeners;if(n!==null)for(var o=0;o<n.length;o++){var l=n[o];e.removeEventListener(l.type,l.attachedListener,pc(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?Z4(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function qm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qm(n),Tn(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function t6(e,t,n,o){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[cd])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){Ie(l.name,"name");var a=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Ul(e.nextSibling),e===null)break}return null}function n6(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ul(e.nextSibling),e===null))return null;return e}function c2(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ul(e.nextSibling),e===null))return null;return e}function Qm(e){return e.data===Hr||e.data===Ds}function Gm(e){return e.data===ou||e.data===Hr&&e.ownerDocument.readyState!==tx}function o6(e,t){var n=e.ownerDocument;if(e.data===Ds)e._reactRetry=t;else if(e.data!==Hr||n.readyState!==tx)t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ul(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===Jd||t===ou||t===Hr||t===Ds||t===Rs||t===Ag||t===ex)break;if(t===Kd||t===T_)return null}}return e}function u2(e){if(e.nodeType===1){for(var t=e.nodeName.toLowerCase(),n={},o=e.attributes,l=0;l<o.length;l++){var a=o[l];n[I5(a.name)]=a.name.toLowerCase()==="style"?Um(e):a.value}return{type:t,props:n}}return e.nodeType===8?e.data===Rs?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:e.nodeValue}function d2(e,t,n){return n===null||n[sS]!==!0?(e.nodeValue===t?e=null:(t=mr(t),e=mr(e.nodeValue)===t?null:e.nodeValue),e):null}function Pm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===Kd||n===T_){if(t===0)return Ul(e.nextSibling);t--}else n!==Jd&&n!==ou&&n!==Hr&&n!==Ds&&n!==Rs||t++}e=e.nextSibling}return null}function f2(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===Jd||n===ou||n===Hr||n===Ds||n===Rs){if(t===0)return e;t--}else n!==Kd&&n!==T_||t++}e=e.previousSibling}return null}function l6(e){bc(e)}function a6(e){bc(e)}function i6(e){bc(e)}function r6(e,t){function n(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return o}function s6(e){ix(function(){ix(function(t){return e(t)})})}function h2(e,t,n,o,l){switch(l&&xu(e,o.ancestorInfo),t=Ku(n),e){case"html":if(e=t.documentElement,!e)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return e;case"head":if(e=t.head,!e)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return e;case"body":if(e=t.body,!e)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return e;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function c6(e,t,n,o){if(!n[br]&&Jn(n)){var l=n.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",l,l,l)}switch(e){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Oo(n,e,t),n[Ao]=o,n[al]=t}function _2(e,t,n){for(var o in n){var l=n[o];n.hasOwnProperty(o)&&l!=null&&un(e,t,o,null,iS,l)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Wn&&(e.onclick=null),Tn(e)}function Wm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tn(e)}function nd(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}function m2(e,t,n){var o=au;if(o&&typeof t=="string"&&t){var l=_l(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),cx.has(l)||(cx.add(l),e={rel:e,crossOrigin:n,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),Oo(t,"link",e),jn(t),o.head.appendChild(t)))}}function p2(e,t,n,o){var l=(l=yr.current)?nd(l):null;if(!l)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=gc(n.href),t=Bo(l).hoistableStyles,o=t.get(n),o||(o={type:"style",instance:null,count:0,state:null},t.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=gc(n.href);var a=Bo(l).hoistableStyles,r=a.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:As,preload:null}},a.set(e,r),(a=l.querySelector(od(e)))?a._p||(r.instance=a,r.state.loading=tf|fa):(a=ha.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ha.set(e,a)),u6(l,e,a,r.state))),t&&o===null)throw n=`

  - `+ph(t)+`
  + `+ph(n),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+n);return r}if(t&&o!==null)throw n=`

  - `+ph(t)+`
  + `+ph(n),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+n);return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=yc(n),t=Bo(l).hoistableScripts,o=t.get(n),o||(o={type:"script",instance:null,count:0,state:null},t.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+e+'". this is a bug in React.')}}function ph(e){var t=0,n="<link";return typeof e.rel=="string"?(t++,n+=' rel="'+e.rel+'"'):oa.call(e,"rel")&&(t++,n+=' rel="'+(e.rel===null?"null":"invalid type "+typeof e.rel)+'"'),typeof e.href=="string"?(t++,n+=' href="'+e.href+'"'):oa.call(e,"href")&&(t++,n+=' href="'+(e.href===null?"null":"invalid type "+typeof e.href)+'"'),typeof e.precedence=="string"?(t++,n+=' precedence="'+e.precedence+'"'):oa.call(e,"precedence")&&(t++,n+=" precedence={"+(e.precedence===null?"null":"invalid type "+typeof e.precedence)+"}"),Object.getOwnPropertyNames(e).length>t&&(n+=" ..."),n+" />"}function gc(e){return'href="'+_l(e)+'"'}function od(e){return'link[rel="stylesheet"]['+e+"]"}function g2(e){return At({},e,{"data-precedence":e.precedence,precedence:null})}function u6(e,t,n,o){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Dh]!==!0){o.loading=tf;return}}else t=e.createElement("link"),t[Dh]=!0,t.onload=t.onerror=An.bind(null,t),Oo(t,"link",n),jn(t),e.head.appendChild(t);o.preload=t,t.addEventListener("load",function(){return o.loading|=tf}),t.addEventListener("error",function(){return o.loading|=rx})}function yc(e){return'[src="'+_l(e)+'"]'}function ld(e){return"script[async]"+e}function y2(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+_l(n.href)+'"]');if(o)return t.instance=o,jn(o),o;var l=At({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),jn(o),Oo(o,"style",l),gh(o,n.precedence,e),t.instance=o;case"stylesheet":l=gc(n.href);var a=e.querySelector(od(l));if(a)return t.state.loading|=fa,t.instance=a,jn(a),a;o=g2(n),(l=ha.get(l))&&Zm(o,l),a=(e.ownerDocument||e).createElement("link"),jn(a);var r=a;return r._p=new Promise(function(c,d){r.onload=c,r.onerror=d}),Oo(a,"link",o),t.state.loading|=fa,gh(a,n.precedence,e),t.instance=a;case"script":return a=yc(n.src),(l=e.querySelector(ld(a)))?(t.instance=l,jn(l),l):(o=n,(l=ha.get(a))&&(o=At({},n),Fm(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),jn(l),Oo(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+t.type+'". this is a bug in React.')}else t.type==="stylesheet"&&(t.state.loading&fa)===As&&(o=t.instance,t.state.loading|=fa,gh(o,n.precedence,e));return t.instance}function gh(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,a=l,r=0;r<o.length;r++){var c=o[r];if(c.dataset.precedence===t)a=c;else if(a!==l)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Zm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}function b2(e,t,n){if(R_===null){var o=new Map,l=R_=new Map;l.set(n,o)}else l=R_,o=l.get(n),o||(o=new Map,l.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var a=n[l];if(!(a[cd]||a[Ao]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!==Ec){var r=a.getAttribute(t)||"";r=e+r;var c=o.get(r);c?c.push(a):o.set(r,[a])}}return o}function Jm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function d6(e,t,n){var o=!n.ancestorInfo.containerTagInScope;if(n.context===lu||t.itemProp!=null)return!o||t.itemProp==null||e!=="meta"&&e!=="title"&&e!=="style"&&e!=="link"&&e!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",e,e),!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href===""){o&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError){if(t.rel==="stylesheet"&&typeof t.precedence=="string"){e=t.href;var l=t.onError,a=t.disabled;n=[],t.onLoad&&n.push("`onLoad`"),l&&n.push("`onError`"),a!=null&&n.push("`disabled`"),l=w4(n,"and"),l+=n.length===1?" prop":" props",a=n.length===1?"an "+l:"the "+l,n.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',e,a,l)}o&&(typeof t.rel!="string"||typeof t.href!="string"||t.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(t.onError||t.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}return t.rel==="stylesheet"?(e=t.precedence,t=t.disabled,typeof e!="string"&&o&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof e=="string"&&t==null):!0;case"script":if(e=t.async&&typeof t.async!="function"&&typeof t.async!="symbol",!e||t.onLoad||t.onError||!t.src||typeof t.src!="string"){o&&(e?t.onLoad||t.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":o&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",e)}return!1}function v2(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function x2(e){return!(e.type==="stylesheet"&&(e.state.loading&sx)===As)}function w2(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function S2(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=w2(t),e.suspenseyImages.push(t)),e=_6.bind(e),t.decode().then(e,e))}function f6(e,t,n,o){if(n.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(n.state.loading&fa)===As){if(n.instance===null){var l=gc(o.href),a=t.querySelector(od(l));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ad.bind(e),t.then(e,e)),n.state.loading|=fa,n.instance=a,jn(a);return}a=t.ownerDocument||t,o=g2(o),(l=ha.get(l))&&Zm(o,l),a=a.createElement("link"),jn(a);var r=a;r._p=new Promise(function(c,d){r.onload=c,r.onerror=d}),Oo(a,"link",o),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&sx)===As&&(e.count++,n=ad.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}function h6(e,t){return e.stylesheets&&e.count===0&&yh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var o=setTimeout(function(){if(e.stylesheets&&yh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},mS+t);0<e.imgBytes&&D_===0&&(D_=125*S4()*gS);var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>D_?50:pS)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function C2(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)yh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ad(){this.count--,C2(this)}function _6(){this.imgCount--,C2(this)}function yh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,O_=new Map,t.forEach(m6,e),O_=null,ad.call(e))}function m6(e,t){if(!(t.state.loading&fa)){var n=O_.get(e);if(n)var o=n.get(Ug);else{n=new Map,O_.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<l.length;a++){var r=l[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),o=r)}o&&n.set(Ug,o)}l=t.instance,r=l.getAttribute("data-precedence"),a=n.get(r)||o,a===o&&n.set(Ug,l),n.set(r,l),this.count++,o=ad.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),a?a.parentNode.insertBefore(l,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=fa}}function p6(e,t,n,o,l,a,r,c,d){for(this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Os,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=m(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=m(0),this.hiddenUpdates=m(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.transitionTypes=null,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,e=this.pendingUpdatersLaneMap=[],t=0;31>t;t++)e.push(new Set);this._debugRootType=n?"hydrateRoot()":"createRoot()"}function k2(e,t,n,o,l,a,r,c,d,_,w,A){return e=new p6(e,t,n,r,d,_,w,A,c),t=j3,a===!0&&(t|=Uo|Ta),t|=Nt,a=H(3,null,null,t),e.current=a,a.stateNode=e,t=r0(),ts(t),e.pooledCache=t,ts(t),a.memoizedState={element:o,isDehydrated:n,cache:t},f0(a),e}function E2(e){return e?(e=Cr,e):Cr}function Km(e,t,n,o,l,a){if(Ho&&typeof Ho.onScheduleFiberRoot=="function")try{Ho.onScheduleFiberRoot(Cc,o,n)}catch(r){Ka||(Ka=!0,console.error("React instrumentation encountered an error: %o",r))}l=E2(l),o.context===null?o.context=l:o.pendingContext=l,Ja&&Il!==null&&!hx&&(hx=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,ke(Il)||"Unknown")),o=sr(t),o.payload={element:n},a=a===void 0?null:a,a!==null&&(typeof a!="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",a),o.callback=a),n=cr(e,o,t),n!==null&&(Ua(t,"root.render()",null),Xn(n,e,t),Bu(n,e,t))}function T2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ep(e,t){T2(e,t),(e=e.alternate)&&T2(e,t)}function M2(e){if(e.tag===13||e.tag===31){var t=D(e,67108864);t!==null&&Xn(t,e,67108864),ep(e,67108864)}}function R2(e){if(e.tag===13||e.tag===31){var t=$l(e);t=be(t);var n=D(e,t);n!==null&&Xn(n,e,t),ep(e,t)}}function g6(){return Il}function y6(e,t,n,o){var l=P.T;P.T=null;var a=on.p;try{on.p=ll,tp(e,t,n,o)}finally{on.p=a,P.T=l}}function b6(e,t,n,o){var l=P.T;P.T=null;var a=on.p;try{on.p=Ea,tp(e,t,n,o)}finally{on.p=a,P.T=l}}function tp(e,t,n,o){if(ru){var l=np(o);if(l===null)Bm(e,t,o,N_,n),O2(e,o);else if(v6(l,e,t,n,o))o.stopPropagation();else if(O2(e,o),t&4&&-1<bS.indexOf(e)){for(;l!==null;){var a=Jn(l);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=De(a.pendingLanes);if(r!==0){var c=a;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var d=1<<31-ol(r);c.entanglements[1]|=d,r&=~d}Wa(a),(Wt&(yo|Vl))===ko&&(h_=eo()+Yv,Fu(0,!1))}}break;case 31:case 13:c=D(a,2),c!==null&&Xn(c,a,2),hc(),ep(a,2)}if(a=np(o),a===null&&Bm(e,t,o,N_,n),a===l)break;l=a}l!==null&&o.stopPropagation()}else Bm(e,t,o,null,n)}}function np(e){return e=pa(e),op(e)}function op(e){if(N_=null,e=lo(e),e!==null){var t=F(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Ee(t),e!==null)return e;e=null}else if(n===31){if(e=Ye(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return N_=e,null}function D2(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return ll;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return Ea;case"message":switch(A6()){case bp:return ll;case vp:return Ea;case Sc:case N6:return ti;case xp:return Rh;default:return ti}default:return ti}}function O2(e,t){switch(e){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":nf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":of.delete(t.pointerId)}}function id(e,t,n,o,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&M2(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function v6(e,t,n,o,l){switch(t){case"focusin":return Ur=id(Ur,e,t,n,o,l),!0;case"dragenter":return Ir=id(Ir,e,t,n,o,l),!0;case"mouseover":return jr=id(jr,e,t,n,o,l),!0;case"pointerover":var a=l.pointerId;return nf.set(a,id(nf.get(a)||null,e,t,n,o,l)),!0;case"gotpointercapture":return a=l.pointerId,of.set(a,id(of.get(a)||null,e,t,n,o,l)),!0}return!1}function A2(e){var t=lo(e.target);if(t!==null){var n=F(t);if(n!==null){if(t=n.tag,t===13){if(t=Ee(n),t!==null){e.blockedOn=t,tn(e.priority,function(){R2(n)});return}}else if(t===31){if(t=Ye(n),t!==null){e.blockedOn=t,tn(e.priority,function(){R2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=np(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n),l=o;ud!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),ud=l,n.target.dispatchEvent(o),ud===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),ud=null}else return t=Jn(n),t!==null&&M2(t),e.blockedOn=n,!1;t.shift()}return!0}function N2(e,t,n){bh(e)&&n.delete(t)}function x6(){Ig=!1,Ur!==null&&bh(Ur)&&(Ur=null),Ir!==null&&bh(Ir)&&(Ir=null),jr!==null&&bh(jr)&&(jr=null),nf.forEach(N2),of.forEach(N2)}function vh(e,t){e.blockedOn===t&&(e.blockedOn=null,Ig||(Ig=!0,so.unstable_scheduleCallback(so.unstable_NormalPriority,x6)))}function z2(e){z_!==e&&(z_=e,so.unstable_scheduleCallback(so.unstable_NormalPriority,function(){z_===e&&(z_=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(op(o||n)===null)continue;break}var a=Jn(n);a!==null&&(e.splice(t,3),t-=3,n={pending:!0,data:l,method:n.method,action:o},Object.freeze(n),U0(a,n,o,l))}}))}function bc(e){function t(d){return vh(d,e)}Ur!==null&&vh(Ur,e),Ir!==null&&vh(Ir,e),jr!==null&&vh(jr,e),nf.forEach(t),of.forEach(t);for(var n=0;n<Yr.length;n++){var o=Yr[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)A2(n),n.blockedOn===null&&Yr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var l=n[o],a=n[o+1],r=l[al]||null;if(typeof a=="function")r||z2(n);else if(r){var c=null;if(a&&a.hasAttribute("formAction")){if(l=a,r=a[al]||null)c=r.formAction;else if(op(l)!==null)continue}else c=r.action;typeof c=="function"?n[o+1]=c:(n.splice(o,3),o-=3),z2(n)}}}function L2(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return l=r})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function lp(e){this._internalRoot=e}function xh(e){this._internalRoot=e}function B2(e){e[br]&&(e._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var so=Dx(),ap=Gl(),w6=B_(),vc=null,ip=null,At=Object.assign,S6=Symbol.for("react.element"),Fa=Symbol.for("react.transitional.element"),xc=Symbol.for("react.portal"),wc=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),rp=Symbol.for("react.profiler"),sp=Symbol.for("react.consumer"),ka=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),up=Symbol.for("react.suspense_list"),Ch=Symbol.for("react.memo"),xl=Symbol.for("react.lazy"),dp=Symbol.for("react.activity"),C6=Symbol.for("react.legacy_hidden"),k6=Symbol.for("react.memo_cache_sentinel"),fp=Symbol.for("react.view_transition"),E6=Symbol.for("react.recoverable"),$2=Symbol.iterator,T6=Symbol.for("react.client.reference"),po=Array.isArray,P=ap.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,on=w6.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M6=Object.freeze({pending:!1,data:null,method:null,action:null}),hp=[],_p=[],Ei=-1,gr=W(null),rd=W(null),yr=W(null),kh=W(null),sd=0,H2,U2,I2,j2,Y2,X2,V2;Fn.__reactDisabledLog=!0;var mp,q2,pp=!1,gp=new(typeof WeakMap=="function"?WeakMap:Map),Il=null,Ja=!1,oa=Object.prototype.hasOwnProperty,yp=so.unstable_scheduleCallback,R6=so.unstable_cancelCallback,D6=so.unstable_shouldYield,O6=so.unstable_requestPaint,eo=so.unstable_now,A6=so.unstable_getCurrentPriorityLevel,bp=so.unstable_ImmediatePriority,vp=so.unstable_UserBlockingPriority,Sc=so.unstable_NormalPriority,N6=so.unstable_LowPriority,xp=so.unstable_IdlePriority,z6=so.log,L6=so.unstable_setDisableYieldValue,Cc=null,Ho=null,Ka=!1,ei=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",ol=Math.clz32?Math.clz32:se,B6=Math.log,$6=Math.LN2,Eh=256,Th=262144,Mh=4194304,ll=2,Ea=8,ti=32,Rh=268435456,Ti=Math.random().toString(36).slice(2),Ao="__reactFiber$"+Ti,al="__reactProps$"+Ti,br="__reactContainer$"+Ti,Q2="__reactEvents$"+Ti,H6="__reactListeners$"+Ti,U6="__reactHandles$"+Ti,G2="__reactResources$"+Ti,cd="__reactMarker$"+Ti,Dh="__reactLoad$"+Ti,P2=new Set,cs={},wp={},I6={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},j6=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),W2={},Z2={},Kt=!1,Y6=/[\n"\\]/g,F2=!1,J2=!1,K2=!1,eb=!1,tb=!1,nb=!1,ob=["value","defaultValue"],lb=!1,ab=/["'&<>\n\t]|^\s|\s$/,X6="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),ib="applet caption html table td th marquee object select template foreignObject desc title".split(" "),V6=ib.concat(["button"]),q6="dd dt li option optgroup p rp rt".split(" "),rb={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},Oh={},Sp={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlock:"borderBlockEndColor borderBlockEndStyle borderBlockEndWidth borderBlockStartColor borderBlockStartStyle borderBlockStartWidth".split(" "),borderBlockColor:["borderBlockEndColor","borderBlockStartColor"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBlockStyle:["borderBlockEndStyle","borderBlockStartStyle"],borderBlockWidth:["borderBlockEndWidth","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInline:"borderInlineEndColor borderInlineEndStyle borderInlineEndWidth borderInlineStartColor borderInlineStartStyle borderInlineStartWidth".split(" "),borderInlineColor:["borderInlineEndColor","borderInlineStartColor"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderInlineStyle:["borderInlineEndStyle","borderInlineStartStyle"],borderInlineWidth:["borderInlineEndWidth","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],colorAdjust:["printColorAdjust"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],containIntrinsicSize:["containIntrinsicHeight","containIntrinsicWidth"],container:["containerName","containerType"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontSynthesis:["fontSynthesisPosition","fontSynthesisSmallCaps","fontSynthesisStyle","fontSynthesisWeight"],fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],inset:["bottom","left","right","top"],insetBlock:["insetBlockEnd","insetBlockStart"],insetInline:["insetInlineEnd","insetInlineStart"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marginBlock:["marginBlockEnd","marginBlockStart"],marginInline:["marginInlineEnd","marginInlineStart"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],offset:["offsetAnchor","offsetDistance","offsetPath","offsetPosition","offsetRotate"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],paddingBlock:["paddingBlockEnd","paddingBlockStart"],paddingInline:["paddingInlineEnd","paddingInlineStart"],pageBreakAfter:["breakAfter"],pageBreakBefore:["breakBefore"],pageBreakInside:["breakInside"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],scrollMargin:["scrollMarginBottom","scrollMarginLeft","scrollMarginRight","scrollMarginTop"],scrollMarginBlock:["scrollMarginBlockEnd","scrollMarginBlockStart"],scrollMarginInline:["scrollMarginInlineEnd","scrollMarginInlineStart"],scrollPadding:["scrollPaddingBottom","scrollPaddingLeft","scrollPaddingRight","scrollPaddingTop"],scrollPaddingBlock:["scrollPaddingBlockEnd","scrollPaddingBlockStart"],scrollPaddingInline:["scrollPaddingInlineEnd","scrollPaddingInlineStart"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle","textDecorationThickness"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],textWrap:["textWrapMode","textWrapStyle"],transition:["transitionBehavior","transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],verticalAlign:["alignmentBaseline","baselineShift","baselineSource"],whiteSpace:["textWrapMode","whiteSpaceCollapse"],wordWrap:["overflowWrap"]},sb=/([A-Z])/g,cb=/^ms-/,Q6=/^(?:webkit|moz|o)[A-Z]/,G6=/^-ms-/,P6=/-(.)/g,ub=/;\s*$/,kc={},Cp={},db=!1,fb=!1,hb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),Ah="http://www.w3.org/1998/Math/MathML",Ec="http://www.w3.org/2000/svg",W6=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nh={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",credentialless:"credentialless",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",masktype:"maskType",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},_b={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},Tc={},Z6=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),F6=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mb=!1,il={},pb=/^on./,J6=/^on[^A-Z]/,K6=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),e3=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),t3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,ud=null,Mc=null,Rc=null,kp=!1,ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ep=!1;if(ni)try{var dd={};Object.defineProperty(dd,"passive",{get:function(){Ep=!0}}),window.addEventListener("test",dd,dd),window.removeEventListener("test",dd,dd)}catch{Ep=!1}var vr=null,Tp=null,zh=null,xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lh=bo(xr),fd=At({},xr,{view:0,detail:0}),n3=bo(fd),Mp,Rp,hd,Bh=At({},fd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hd&&(hd&&e.type==="mousemove"?(Mp=e.screenX-hd.screenX,Rp=e.screenY-hd.screenY):Rp=Mp=0,hd=e),Mp)},movementY:function(e){return"movementY"in e?e.movementY:Rp}}),gb=bo(Bh),o3=At({},Bh,{dataTransfer:0}),l3=bo(o3),a3=At({},fd,{relatedTarget:0}),Dp=bo(a3),i3=At({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),r3=bo(i3),s3=At({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c3=bo(s3),u3=At({},xr,{data:0}),yb=bo(u3),d3=yb,f3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},m3=At({},fd,{key:function(e){if(e.key){var t=f3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qs,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p3=bo(m3),g3=At({},Bh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bb=bo(g3),y3=At({},xr,{submitter:0}),b3=bo(y3),v3=At({},fd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qs}),x3=bo(v3),w3=At({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),S3=bo(w3),C3=At({},Bh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k3=bo(C3),E3=At({},xr,{newState:0,oldState:0,source:0}),T3=bo(E3),M3=[9,13,27,32],vb=229,Op=ni&&"CompositionEvent"in window,_d=null;ni&&"documentMode"in document&&(_d=document.documentMode);var R3=ni&&"TextEvent"in window&&!_d,xb=ni&&(!Op||_d&&8<_d&&11>=_d),wb=32,Sb=String.fromCharCode(wb),Cb=!1,Dc=!1,D3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},md=null,pd=null,kb=!1;ni&&(kb=ya("input")&&(!document.documentMode||9<document.documentMode));var rl=typeof Object.is=="function"?Object.is:l0,O3=ni&&"documentMode"in document&&11>=document.documentMode,Oc=null,Ap=null,gd=null,Np=!1,Ac={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionrun:pl("Transition","TransitionRun"),transitionstart:pl("Transition","TransitionStart"),transitioncancel:pl("Transition","TransitionCancel"),transitionend:pl("Transition","TransitionEnd")},zp={},Eb={};ni&&(Eb=document.createElement("div").style,"AnimationEvent"in window||(delete Ac.animationend.animation,delete Ac.animationiteration.animation,delete Ac.animationstart.animation),"TransitionEvent"in window||delete Ac.transitionend.transition);var Tb=Jl("animationend"),Mb=Jl("animationiteration"),Rb=Jl("animationstart"),A3=Jl("transitionrun"),N3=Jl("transitionstart"),z3=Jl("transitioncancel"),Db=Jl("transitionend"),Ob=new Map,Lp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lp.push("scrollEnd");var L3=0,Ab=0;if(typeof performance=="object"&&typeof performance.now=="function")var B3=performance,Nb=function(){return B3.now()};else{var $3=Date;Nb=function(){return $3.now()}}var Bp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},H3="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",$h=0,$p=1,Hp=2,Up=3,la=100,Hh="-\xA0",Uh="+\xA0",zb="\u2007\xA0",Cn=typeof console<"u"&&typeof console.timeStamp=="function"&&typeof performance<"u"&&typeof performance.measure=="function",wl="Components \u269B",Ht="Scheduler \u269B",Xt="Blocking",wr=!1,Mi={color:"primary",properties:null,tooltipText:"",track:wl},Sr={start:-0,end:-0,detail:{devtools:Mi}},U3=["Changed Props",""],Lb="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",I3=["Changed Props",Lb],yd=1,Ri=2,aa=[],Nc=0,Ip=0,Cr={};Object.freeze(Cr);var Di=null,zc=null,pt=0,j3=1,Nt=2,Uo=8,Ta=16,Bb=32,$b=!1;try{var Hb=Object.preventExtensions({})}catch{$b=!0}var jp=new WeakMap,Lc=[],Bc=0,Ih=null,bd=0,ia=[],ra=0,us=null,Oi=1,Ai="",xo=null,yn=null,zt=!1,oi=!1,jl=null,kr=null,sa=!1,Yp=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Xp=W(null),Vp=W(null),Ub={},jh=null,$c=null,Hc=!1,Y3=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},X3=so.unstable_scheduleCallback,V3=so.unstable_NormalPriority,co={$$typeof:ka,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},vd=null,to=so.unstable_now,Yh=console.createTask?console.createTask:function(){return null},xd=1,Xh=2,wo=-0,Ni=-0,Ma=-0,zi=null,sl=-1.1,ds=-0,zn=-0,lt=-1.1,ut=-1.1,On=null,Vn=!1,Er=-0,li=-1.1,wd=null,Tr=0,qp=null,Qp=null,fs=-1.1,Sd=null,Uc=-1.1,Vh=-1.1,Ra=-0,Li=-1.1,ca=-1.1,Gp=0,Cd=null,Ib=null,jb=null,Mr=-1.1,hs=null,Rr=-1.1,qh=-1.1,Pp=-0,Wp=-0,_s=0,Sl=null,Yb=0,kd=-1.1,Qh=!1,Gh=!1,Ed=null,Zp=0,Dr=0,Ic=null,Xb=P.S;P.S=function(e,t){if(Iv=eo(),typeof t=="object"&&t!==null&&typeof t.then=="function"){if(0>Li&&0>ca){Li=to();var n=td(),o=ed();(n!==Rr||o!==hs)&&(Rr=-1.1),Mr=n,hs=o}zw(e,t)}if(vd!==null)for(n=tu;n!==null;)_1(n,vd),n=n.next;if(n=e.types,n!==null){for(o=tu;o!==null;)_1(o,n),o=o.next;if(Dr!==0){o=vd,o===null&&(o=vd=[]);for(var l=0;l<n.length;l++){var a=n[l];o.indexOf(a)===-1&&o.push(a)}}}Xb!==null&&Xb(e,t)};var ms=W(null),Da={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},Td=[],Md=[],Rd=[],Dd=[],Od=[],Ad=[],ps=new Set;Da.recordUnsafeLifecycleWarnings=function(e,t){ps.has(e.type)||(typeof t.componentWillMount=="function"&&t.componentWillMount.__suppressDeprecationWarning!==!0&&Td.push(e),e.mode&Uo&&typeof t.UNSAFE_componentWillMount=="function"&&Md.push(e),typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&Rd.push(e),e.mode&Uo&&typeof t.UNSAFE_componentWillReceiveProps=="function"&&Dd.push(e),typeof t.componentWillUpdate=="function"&&t.componentWillUpdate.__suppressDeprecationWarning!==!0&&Od.push(e),e.mode&Uo&&typeof t.UNSAFE_componentWillUpdate=="function"&&Ad.push(e))},Da.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;0<Td.length&&(Td.forEach(function(c){e.add(ke(c)||"Component"),ps.add(c.type)}),Td=[]);var t=new Set;0<Md.length&&(Md.forEach(function(c){t.add(ke(c)||"Component"),ps.add(c.type)}),Md=[]);var n=new Set;0<Rd.length&&(Rd.forEach(function(c){n.add(ke(c)||"Component"),ps.add(c.type)}),Rd=[]);var o=new Set;0<Dd.length&&(Dd.forEach(function(c){o.add(ke(c)||"Component"),ps.add(c.type)}),Dd=[]);var l=new Set;0<Od.length&&(Od.forEach(function(c){l.add(ke(c)||"Component"),ps.add(c.type)}),Od=[]);var a=new Set;if(0<Ad.length&&(Ad.forEach(function(c){a.add(ke(c)||"Component"),ps.add(c.type)}),Ad=[]),0<t.size){var r=oe(t);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,r)}0<o.size&&(r=oe(o),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,r)),0<a.size&&(r=oe(a),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,r)),0<e.size&&(r=oe(e),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,r)),0<n.size&&(r=oe(n),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,r)),0<l.size&&(r=oe(l),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,r))};var Ph=new Map,Vb=new Set;Da.recordLegacyContextWarning=function(e,t){for(var n=null,o=e;o!==null;)o.mode&Uo&&(n=o),o=o.return;n===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!Vb.has(e.type)&&(o=Ph.get(n),e.type.contextTypes!=null||e.type.childContextTypes!=null||t!==null&&typeof t.getChildContext=="function")&&(o===void 0&&(o=[],Ph.set(n,o)),o.push(e))},Da.flushLegacyContextWarning=function(){Ph.forEach(function(e){if(e.length!==0){var t=e[0],n=new Set;e.forEach(function(l){n.add(ke(l)||"Component"),Vb.add(l.type)});var o=oe(n);ie(t,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,o)})}})},Da.discardPendingWarnings=function(){Td=[],Md=[],Rd=[],Dd=[],Od=[],Ad=[],Ph=new Map};var q3="",qb={react_stack_bottom_frame:function(e,t,n){var o=Ja;Ja=!0;try{return e(t,n)}finally{Ja=o}}},Fp=qb.react_stack_bottom_frame.bind(qb),Qb={react_stack_bottom_frame:function(e){var t=Ja;Ja=!0;try{return e.render()}finally{Ja=t}}},Gb=Qb.react_stack_bottom_frame.bind(Qb),Pb={react_stack_bottom_frame:function(e,t){try{t.componentDidMount()}catch(n){nn(e,e.return,n)}}},Jp=Pb.react_stack_bottom_frame.bind(Pb),Wb={react_stack_bottom_frame:function(e,t,n,o,l){try{t.componentDidUpdate(n,o,l)}catch(a){nn(e,e.return,a)}}},Zb=Wb.react_stack_bottom_frame.bind(Wb),Fb={react_stack_bottom_frame:function(e,t){var n=t.stack;e.componentDidCatch(t.value,{componentStack:n!==null?n:""})}},Q3=Fb.react_stack_bottom_frame.bind(Fb),Jb={react_stack_bottom_frame:function(e,t,n){try{n.componentWillUnmount()}catch(o){nn(e,t,o)}}},Kb=Jb.react_stack_bottom_frame.bind(Jb),ev={react_stack_bottom_frame:function(e){var t=e.create;return e=e.inst,t=t(),e.destroy=t}},G3=ev.react_stack_bottom_frame.bind(ev),tv={react_stack_bottom_frame:function(e,t,n){try{n()}catch(o){nn(e,t,o)}}},P3=tv.react_stack_bottom_frame.bind(tv),nv={react_stack_bottom_frame:function(e){var t=e._init;return t(e._payload)}},W3=nv.react_stack_bottom_frame.bind(nv),jc=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),Kp=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Wh=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Zh={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},gs=null,Fh=null,eg=!1,ys=null,Nd=!1,Yc=null,zd=0,Ut=null,tg,ov=tg=!1,lv={},av={},iv={};B=function(e,t,n){if(n!==null&&typeof n=="object"&&n._store&&(!n._store.validated&&n.key==null||n._store.validated===2)){if(typeof n._store!="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");n._store.validated=1;var o=ke(e),l=o||"null";if(!lv[l]){lv[l]=!0,n=n._owner,e=e._debugOwner;var a="";e&&typeof e.tag=="number"&&(l=ke(e))&&(a=`

Check the render method of \``+l+"`."),a||o&&(a=`

Check the top-level render call using <`+o+">.");var r="";n!=null&&e!==n&&(o=null,typeof n.tag=="number"?o=ke(n):typeof n.name=="string"&&(o=n.name),o&&(r=" It was passed a child from "+o+".")),ie(t,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',a,r)})}}};var bs=M1(!0),rv=M1(!1),sv=0,cv=1,uv=2,ng=3,Or=!1,dv=!1,og=null,lg=!1,Ar=W(null),Jh=W(0),No=W(null),Io=null,Xc=1,Ld=2,zo=W(0),Bd=0,ua=1,cl=2,Yl=4,jo=8,Vc,fv=new Set,hv=new Set,ag=new Set,_v=new Set,Bi=0,gt=null,_n=null,uo=null,Kh=!1,qc=!1,vs=!1,e_=0,$d=0,ai=null,Z3=0,F3=25,q=null,da=null,$i=-1,Hd=!1,t_={readContext:Dn,use:fr,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useLayoutEffect:Zn,useInsertionEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useSyncExternalStore:Zn,useId:Zn,useHostTransitionStatus:Zn,useFormState:Zn,useActionState:Zn,useOptimistic:Zn,useMemoCache:Zn,useCacheRefresh:Zn,useEffectEvent:Zn},ig=null,mv=null,rg=null,pv=null,ii=null,Oa=null,n_=null;ig={readContext:function(e){return Dn(e)},use:fr,useCallback:function(e,t){return q="useCallback",$t(),oc(t),L0(e,t)},useContext:function(e){return q="useContext",$t(),Dn(e)},useEffect:function(e,t){return q="useEffect",$t(),oc(t),qf(e,t)},useImperativeHandle:function(e,t,n){return q="useImperativeHandle",$t(),oc(n),z0(e,t,n)},useInsertionEffect:function(e,t){q="useInsertionEffect",$t(),oc(t),os(4,cl,e,t)},useLayoutEffect:function(e,t){return q="useLayoutEffect",$t(),oc(t),N0(e,t)},useMemo:function(e,t){q="useMemo",$t(),oc(t);var n=P.H;P.H=ii;try{return B0(e,t)}finally{P.H=n}},useReducer:function(e,t,n){q="useReducer",$t();var o=P.H;P.H=ii;try{return C0(e,t,n)}finally{P.H=o}},useRef:function(e){return q="useRef",$t(),O0(e)},useState:function(e){q="useState",$t();var t=P.H;P.H=ii;try{return M0(e)}finally{P.H=t}},useDebugValue:function(){q="useDebugValue",$t()},useDeferredValue:function(e,t){return q="useDeferredValue",$t(),$0(e,t)},useTransition:function(){return q="useTransition",$t(),I0()},useSyncExternalStore:function(e,t,n){return q="useSyncExternalStore",$t(),E0(e,t,n)},useId:function(){return q="useId",$t(),j0()},useFormState:function(e,t){return q="useFormState",$t(),If(),ac(e,t)},useActionState:function(e,t){return q="useActionState",$t(),ac(e,t)},useOptimistic:function(e){return q="useOptimistic",$t(),R0(e)},useHostTransitionStatus:ls,useMemoCache:ns,useCacheRefresh:function(){return q="useCacheRefresh",$t(),Y0()},useEffectEvent:function(e){return q="useEffectEvent",$t(),A0(e)}},mv={readContext:function(e){return Dn(e)},use:fr,useCallback:function(e,t){return q="useCallback",_e(),L0(e,t)},useContext:function(e){return q="useContext",_e(),Dn(e)},useEffect:function(e,t){return q="useEffect",_e(),qf(e,t)},useImperativeHandle:function(e,t,n){return q="useImperativeHandle",_e(),z0(e,t,n)},useInsertionEffect:function(e,t){q="useInsertionEffect",_e(),os(4,cl,e,t)},useLayoutEffect:function(e,t){return q="useLayoutEffect",_e(),N0(e,t)},useMemo:function(e,t){q="useMemo",_e();var n=P.H;P.H=ii;try{return B0(e,t)}finally{P.H=n}},useReducer:function(e,t,n){q="useReducer",_e();var o=P.H;P.H=ii;try{return C0(e,t,n)}finally{P.H=o}},useRef:function(e){return q="useRef",_e(),O0(e)},useState:function(e){q="useState",_e();var t=P.H;P.H=ii;try{return M0(e)}finally{P.H=t}},useDebugValue:function(){q="useDebugValue",_e()},useDeferredValue:function(e,t){return q="useDeferredValue",_e(),$0(e,t)},useTransition:function(){return q="useTransition",_e(),I0()},useSyncExternalStore:function(e,t,n){return q="useSyncExternalStore",_e(),E0(e,t,n)},useId:function(){return q="useId",_e(),j0()},useActionState:function(e,t){return q="useActionState",_e(),ac(e,t)},useFormState:function(e,t){return q="useFormState",_e(),If(),ac(e,t)},useOptimistic:function(e){return q="useOptimistic",_e(),R0(e)},useHostTransitionStatus:ls,useMemoCache:ns,useCacheRefresh:function(){return q="useCacheRefresh",_e(),Y0()},useEffectEvent:function(e){return q="useEffectEvent",_e(),A0(e)}},rg={readContext:function(e){return Dn(e)},use:fr,useCallback:function(e,t){return q="useCallback",_e(),Pf(e,t)},useContext:function(e){return q="useContext",_e(),Dn(e)},useEffect:function(e,t){q="useEffect",_e(),vl(2048,jo,e,t)},useImperativeHandle:function(e,t,n){return q="useImperativeHandle",_e(),Gf(e,t,n)},useInsertionEffect:function(e,t){return q="useInsertionEffect",_e(),vl(4,cl,e,t)},useLayoutEffect:function(e,t){return q="useLayoutEffect",_e(),vl(4,Yl,e,t)},useMemo:function(e,t){q="useMemo",_e();var n=P.H;P.H=Oa;try{return Wf(e,t)}finally{P.H=n}},useReducer:function(e,t,n){q="useReducer",_e();var o=P.H;P.H=Oa;try{return lc(e,t,n)}finally{P.H=o}},useRef:function(){return q="useRef",_e(),an().memoizedState},useState:function(){q="useState",_e();var e=P.H;P.H=Oa;try{return lc(wa)}finally{P.H=e}},useDebugValue:function(){q="useDebugValue",_e()},useDeferredValue:function(e,t){return q="useDeferredValue",_e(),Z1(e,t)},useTransition:function(){return q="useTransition",_e(),ny()},useSyncExternalStore:function(e,t,n){return q="useSyncExternalStore",_e(),Yf(e,t,n)},useId:function(){return q="useId",_e(),an().memoizedState},useFormState:function(e){return q="useFormState",_e(),If(),Xf(e)},useActionState:function(e){return q="useActionState",_e(),Xf(e)},useOptimistic:function(e,t){return q="useOptimistic",_e(),I1(e,t)},useHostTransitionStatus:ls,useMemoCache:ns,useCacheRefresh:function(){return q="useCacheRefresh",_e(),an().memoizedState},useEffectEvent:function(e){return q="useEffectEvent",_e(),Qf(e)}},pv={readContext:function(e){return Dn(e)},use:fr,useCallback:function(e,t){return q="useCallback",_e(),Pf(e,t)},useContext:function(e){return q="useContext",_e(),Dn(e)},useEffect:function(e,t){q="useEffect",_e(),vl(2048,jo,e,t)},useImperativeHandle:function(e,t,n){return q="useImperativeHandle",_e(),Gf(e,t,n)},useInsertionEffect:function(e,t){return q="useInsertionEffect",_e(),vl(4,cl,e,t)},useLayoutEffect:function(e,t){return q="useLayoutEffect",_e(),vl(4,Yl,e,t)},useMemo:function(e,t){q="useMemo",_e();var n=P.H;P.H=n_;try{return Wf(e,t)}finally{P.H=n}},useReducer:function(e,t,n){q="useReducer",_e();var o=P.H;P.H=n_;try{return ju(e,t,n)}finally{P.H=o}},useRef:function(){return q="useRef",_e(),an().memoizedState},useState:function(){q="useState",_e();var e=P.H;P.H=n_;try{return ju(wa)}finally{P.H=e}},useDebugValue:function(){q="useDebugValue",_e()},useDeferredValue:function(e,t){return q="useDeferredValue",_e(),F1(e,t)},useTransition:function(){return q="useTransition",_e(),oy()},useSyncExternalStore:function(e,t,n){return q="useSyncExternalStore",_e(),Yf(e,t,n)},useId:function(){return q="useId",_e(),an().memoizedState},useFormState:function(e){return q="useFormState",_e(),If(),Vf(e)},useActionState:function(e){return q="useActionState",_e(),Vf(e)},useOptimistic:function(e,t){return q="useOptimistic",_e(),Y1(e,t)},useHostTransitionStatus:ls,useMemoCache:ns,useCacheRefresh:function(){return q="useCacheRefresh",_e(),an().memoizedState},useEffectEvent:function(e){return q="useEffectEvent",_e(),Qf(e)}},ii={readContext:function(e){return M(),Dn(e)},use:function(e){return T(),fr(e)},useCallback:function(e,t){return q="useCallback",T(),$t(),L0(e,t)},useContext:function(e){return q="useContext",T(),$t(),Dn(e)},useEffect:function(e,t){return q="useEffect",T(),$t(),qf(e,t)},useImperativeHandle:function(e,t,n){return q="useImperativeHandle",T(),$t(),z0(e,t,n)},useInsertionEffect:function(e,t){q="useInsertionEffect",T(),$t(),os(4,cl,e,t)},useLayoutEffect:function(e,t){return q="useLayoutEffect",T(),$t(),N0(e,t)},useMemo:function(e,t){q="useMemo",T(),$t();var n=P.H;P.H=ii;try{return B0(e,t)}finally{P.H=n}},useReducer:function(e,t,n){q="useReducer",T(),$t();var o=P.H;P.H=ii;try{return C0(e,t,n)}finally{P.H=o}},useRef:function(e){return q="useRef",T(),$t(),O0(e)},useState:function(e){q="useState",T(),$t();var t=P.H;P.H=ii;try{return M0(e)}finally{P.H=t}},useDebugValue:function(){q="useDebugValue",T(),$t()},useDeferredValue:function(e,t){return q="useDeferredValue",T(),$t(),$0(e,t)},useTransition:function(){return q="useTransition",T(),$t(),I0()},useSyncExternalStore:function(e,t,n){return q="useSyncExternalStore",T(),$t(),E0(e,t,n)},useId:function(){return q="useId",T(),$t(),j0()},useFormState:function(e,t){return q="useFormState",T(),$t(),ac(e,t)},useActionState:function(e,t){return q="useActionState",T(),$t(),ac(e,t)},useOptimistic:function(e){return q="useOptimistic",T(),$t(),R0(e)},useMemoCache:function(e){return T(),ns(e)},useHostTransitionStatus:ls,useCacheRefresh:function(){return q="useCacheRefresh",$t(),Y0()},useEffectEvent:function(e){return q="useEffectEvent",T(),$t(),A0(e)}},Oa={readContext:function(e){return M(),Dn(e)},use:function(e){return T(),fr(e)},useCallback:function(e,t){return q="useCallback",T(),_e(),Pf(e,t)},useContext:function(e){return q="useContext",T(),_e(),Dn(e)},useEffect:function(e,t){q="useEffect",T(),_e(),vl(2048,jo,e,t)},useImperativeHandle:function(e,t,n){return q="useImperativeHandle",T(),_e(),Gf(e,t,n)},useInsertionEffect:function(e,t){return q="useInsertionEffect",T(),_e(),vl(4,cl,e,t)},useLayoutEffect:function(e,t){return q="useLayoutEffect",T(),_e(),vl(4,Yl,e,t)},useMemo:function(e,t){q="useMemo",T(),_e();var n=P.H;P.H=Oa;try{return Wf(e,t)}finally{P.H=n}},useReducer:function(e,t,n){q="useReducer",T(),_e();var o=P.H;P.H=Oa;try{return lc(e,t,n)}finally{P.H=o}},useRef:function(){return q="useRef",T(),_e(),an().memoizedState},useState:function(){q="useState",T(),_e();var e=P.H;P.H=Oa;try{return lc(wa)}finally{P.H=e}},useDebugValue:function(){q="useDebugValue",T(),_e()},useDeferredValue:function(e,t){return q="useDeferredValue",T(),_e(),Z1(e,t)},useTransition:function(){return q="useTransition",T(),_e(),ny()},useSyncExternalStore:function(e,t,n){return q="useSyncExternalStore",T(),_e(),Yf(e,t,n)},useId:function(){return q="useId",T(),_e(),an().memoizedState},useFormState:function(e){return q="useFormState",T(),_e(),Xf(e)},useActionState:function(e){return q="useActionState",T(),_e(),Xf(e)},useOptimistic:function(e,t){return q="useOptimistic",T(),_e(),I1(e,t)},useMemoCache:function(e){return T(),ns(e)},useHostTransitionStatus:ls,useCacheRefresh:function(){return q="useCacheRefresh",_e(),an().memoizedState},useEffectEvent:function(e){return q="useEffectEvent",T(),_e(),Qf(e)}},n_={readContext:function(e){return M(),Dn(e)},use:function(e){return T(),fr(e)},useCallback:function(e,t){return q="useCallback",T(),_e(),Pf(e,t)},useContext:function(e){return q="useContext",T(),_e(),Dn(e)},useEffect:function(e,t){q="useEffect",T(),_e(),vl(2048,jo,e,t)},useImperativeHandle:function(e,t,n){return q="useImperativeHandle",T(),_e(),Gf(e,t,n)},useInsertionEffect:function(e,t){return q="useInsertionEffect",T(),_e(),vl(4,cl,e,t)},useLayoutEffect:function(e,t){return q="useLayoutEffect",T(),_e(),vl(4,Yl,e,t)},useMemo:function(e,t){q="useMemo",T(),_e();var n=P.H;P.H=Oa;try{return Wf(e,t)}finally{P.H=n}},useReducer:function(e,t,n){q="useReducer",T(),_e();var o=P.H;P.H=Oa;try{return ju(e,t,n)}finally{P.H=o}},useRef:function(){return q="useRef",T(),_e(),an().memoizedState},useState:function(){q="useState",T(),_e();var e=P.H;P.H=Oa;try{return ju(wa)}finally{P.H=e}},useDebugValue:function(){q="useDebugValue",T(),_e()},useDeferredValue:function(e,t){return q="useDeferredValue",T(),_e(),F1(e,t)},useTransition:function(){return q="useTransition",T(),_e(),oy()},useSyncExternalStore:function(e,t,n){return q="useSyncExternalStore",T(),_e(),Yf(e,t,n)},useId:function(){return q="useId",T(),_e(),an().memoizedState},useFormState:function(e){return q="useFormState",T(),_e(),Vf(e)},useActionState:function(e){return q="useActionState",T(),_e(),Vf(e)},useOptimistic:function(e,t){return q="useOptimistic",T(),_e(),Y1(e,t)},useMemoCache:function(e){return T(),ns(e)},useHostTransitionStatus:ls,useCacheRefresh:function(){return q="useCacheRefresh",_e(),an().memoizedState},useEffectEvent:function(e){return q="useEffectEvent",T(),_e(),Qf(e)}};var gv={},yv=new Set,bv=new Set,vv=new Set,xv=new Set,wv=new Set,Sv=new Set,Cv=new Set,kv=new Set,Ev=new Set,Tv=new Set;Object.freeze(gv);var sg={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=$l(e),l=sr(o);l.payload=t,n!=null&&(V0(n),l.callback=n),t=cr(e,l,o),t!==null&&(Ua(o,"this.setState()",e),Xn(t,e,o),Bu(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=$l(e),l=sr(o);l.tag=cv,l.payload=t,n!=null&&(V0(n),l.callback=n),t=cr(e,l,o),t!==null&&(Ua(o,"this.replaceState()",e),Xn(t,e,o),Bu(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$l(e),o=sr(n);o.tag=uv,t!=null&&(V0(t),o.callback=t),t=cr(e,o,n),t!==null&&(Ua(n,"this.forceUpdate()",e),Xn(t,e,n),Bu(t,e,n))}},Qc=null,cg=null,ug=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),no=!1,Mv={},Rv={},Dv={},Ov={},Gc=!1,Av={},dg={},Nv={},fg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},zv=!1,Lv=null;Lv=new Set;var o_=!1,Xl=null,ri=null,Cl=0,l_=new Map,Bv={},Ud=0,hg=1,a_=2,So=!1,rn=!1,si=!1,_g=!1,$v=typeof WeakSet=="function"?WeakSet:Set,Co=null,Pc=null,Wc=null,ci=!1,Id=!1,i_=!1,mg=!1,fo=null,kl=!1,Aa=null,go=!1,xs=8192,J3={getCacheForType:function(e){var t=Dn(co),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Dn(co).controller.signal},getOwner:function(){return Il}};if(typeof Symbol=="function"&&Symbol.for){var jd=Symbol.for;jd("selector.component"),jd("selector.has_pseudo_class"),jd("selector.role"),jd("selector.test_id"),jd("selector.text")}var K3=[],eS=typeof WeakMap=="function"?WeakMap:Map,ko=0,yo=2,Vl=4,Hi=0,Yd=1,ws=2,r_=3,Nr=4,Xd=6,Hv=5,Wt=ko,mn=null,Lt=null,kt=0,El=0,s_=1,Ss=2,Vd=3,Uv=4,pg=5,qd=6,c_=7,gg=8,Cs=9,sn=El,ql=null,Ui=!1,Zc=!1,yg=!1,ui=0,Ln=Hi,zr=0,Lr=0,u_=0,Tl=0,ks=0,Qd=null,ul=null,d_=!1,f_=0,Iv=0,jv=300,h_=1/0,Yv=500,Gd=null,qn=null,Br=null,__=0,Pd=1,bg=2,Xv=3,di=0,Vv=1,qv=2,vg=3,xg=4,m_=5,Bn=0,Na=null,Es=null,Ml=0,wg=0,p_=-0,Sg=null,Qv=null,Fc=null,Jc=null,Kc=null,g_=null,Ql=__,Cg=null,tS=50,Wd=0,y_=null,kg=!1,b_=!1,nS=50,Ts=0,Zd=null,eu=!1,Gv=!1,v_=null,Pv=!1,Wv=new Set,oS={},tu=null,nu=null,Eg=!1,Tg=!1,x_=!1,Mg=!1,$r=0,Rg={};(function(){for(var e=0;e<Lp.length;e++){var t=Lp[e],n=t.toLowerCase();t=t[0].toUpperCase()+t.slice(1),gl(n,"on"+t)}gl(Tb,"onAnimationEnd"),gl(Mb,"onAnimationIteration"),gl(Rb,"onAnimationStart"),gl("dblclick","onDoubleClick"),gl("focusin","onFocus"),gl("focusout","onBlur"),gl(A3,"onTransitionRun"),gl(N3,"onTransitionStart"),gl(z3,"onTransitionCancel"),gl(Db,"onTransitionEnd")})(),_a("onMouseEnter",["mouseout","mouseover"]),_a("onMouseLeave",["mouseout","mouseover"]),_a("onPointerEnter",["pointerout","pointerover"]),_a("onPointerLeave",["pointerout","pointerover"]),Mo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mo("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fd)),w_="_reactListening"+Math.random().toString(36).slice(2),Zv=!1,Fv=!1,S_=!1,Jv=!1,C_=!1,k_=!1,Kv=!1,E_={},lS=/\r\n?/g,aS=/\u0000|\uFFFD/g,Ms="http://www.w3.org/1999/xlink",Og="http://www.w3.org/XML/1998/namespace",iS={},rS="javascript:throw new Error('React form unexpectedly submitted.')",sS="suppressHydrationWarning",Rs="&",T_="/&",Jd="$",Kd="/$",Hr="$?",Ds="$~",ou="$!",cS="html",uS="body",dS="head",Ag="F!",ex="F",tx="loading",nx="style",Ii=0,lu=1,M_=2,Ng=null,zg=null,ox=!1,lx={dialog:!0,webview:!0},Lg=null,ef=void 0,Bg=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,Os=-1,ax=typeof Promise=="function"?Promise:void 0,ix=typeof requestAnimationFrame=="function"?requestAnimationFrame:Bg,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof ax<"u"?function(e){return ax.resolve(null).then(e).catch(E4)}:Bg,_S=500;ss.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:At({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},ss.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),o=[],l=0;l<n.length;l++){var a=n[l].effect;a!==null&&a.target===e&&a.pseudoElement===t&&o.push(n[l])}return o},ss.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)},Hl.prototype.addEventListener=function(e,t,n){var o=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(o=n.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(l2(a,e,t,n)===-1){var r=this,c=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(c=function(d){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,d):t.handleEvent(d)}),o!==null&&(l=r.removeEventListener.bind(r,e,t,n),o.addEventListener("abort",l,{once:!0}),l=o.removeEventListener.bind(o,"abort",l)),o=pc(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:c,cleanup:l}),Ce(this._fragmentFiber,q4,e,c,o)}this._eventListeners=a}},Hl.prototype.removeEventListener=function(e,t,n){var o=this._eventListeners;if(o!==null&&(t=l2(o,e,t,n),t!==-1)){var l=o[t];n=l.attachedListener;var a=l.cleanup;l=pc(l.optionsOrUseCapture),Ce(this._fragmentFiber,Q4,e,n,l),o.splice(t,1),a!==null&&a()}},Hl.prototype.dispatchEvent=function(e){var t=_t(this._fragmentFiber);if(t===null)return!0;t=Je(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var o=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var a=n[l];o.addEventListener(a.type,a.attachedListener,pc(a.optionsOrUseCapture))}if(t.appendChild(o),e=o.dispatchEvent(e),n)for(l=0;l<n.length;l++)a=n[l],o.removeEventListener(a.type,a.attachedListener,pc(a.optionsOrUseCapture));return t.removeChild(o),e}return t.dispatchEvent(e)},Hl.prototype.focus=function(e){yt(this._fragmentFiber.child,!0,a2,e,void 0,void 0)},Hl.prototype.focusLast=function(e){var t=[];yt(this._fragmentFiber.child,!0,Vm,t,void 0,void 0);for(var n=t.length-1;0<=n&&!a2(t[n],e);n--);},Hl.prototype.blur=function(){var e=_t(this._fragmentFiber);e!==null&&(e=Je(e),e=Ku(e).activeElement,e!==null&&Ce(this._fragmentFiber,G4,e))},Hl.prototype.observeUsing=function(e){var t=!1,n=!1;Ce(this._fragmentFiber,function(o){if(o.tag===6)t=!0;else return n=!0;return!1}),t&&!n&&console.error("observeUsing() was called on a FragmentInstance with only text children. Observers do not work on text nodes."),this._observers===null&&(this._observers=new Set),this._observers.add(e),Ce(this._fragmentFiber,P4,e)},Hl.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Ce(this._fragmentFiber,W4,e);for(var n=t=0;n<za.length;n++){var o=za[n];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):za[t++]=o}za.length=t}else console.error("You are calling unobserveUsing() with an observer that is not being observed with this fragment instance. First attach the observer with observeUsing()")};var za=[],$g=!1;Hl.prototype.getClientRects=function(){var e=[];return Ce(this._fragmentFiber,F4,e),e},Hl.prototype.getRootNode=function(e){var t=_t(this._fragmentFiber);return t===null?this:Je(t).getRootNode(e)},Hl.prototype.compareDocumentPosition=function(e){var t=_t(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Ce(this._fragmentFiber,Vm,n);var o=Je(t);if(n.length===0){if(t=o,Xe(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(t=n)}n=this._fragmentFiber;var l=o=t.compareDocumentPosition(e);return t===e?l=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=at(n)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=Je(n).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Je(n[0]),l=Je(n[n.length-1]);var a=Xe(this._fragmentFiber)?t.parentElement:o;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),c=l.compareDocumentPosition(e),d=r&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=o&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,t=o&&t===e||a&&l===e||d||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&t===e||!a&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||J4(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC},Hl.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error("FragmentInstance.scrollIntoView() does not support scrollIntoViewOptions. Use the alignToTop boolean instead.");var t=[];Ce(this._fragmentFiber,Vm,t);var n=e!==!1;if(t.length===0){var o=at(this._fragmentFiber);if(o=n?o[1]||o[0]||_t(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=Je(o),i2(e,n);return}if(o=Je(o),o.nodeType!==9){if(o.nodeType===11){n="host"in o?o.host:null,n!==null?n.scrollIntoView(e):console.warn("You are attempting to scroll a FragmentInstance that is only mounted inside a detached DocumentFragment. No scroll was performed.");return}o.scrollIntoView(e)}}for(o=n?t.length-1:0;o!==(n?-1:t.length);){var l=t[o];l.tag===6?(l=Je(l),i2(l,n)):Je(l).scrollIntoView(e),o+=n?-1:1}};var Hg=null,As=0,tf=1,rx=2,sx=3,fa=4,ha=new Map,cx=new Set,ji=on.d;on.d={f:function(){var e=ji.f(),t=hc();return e||t},r:function(e){var t=Jn(e);t!==null&&t.tag===5&&t.type==="form"?ty(t):ji.r(e)},D:function(e){ji.D(e),m2("dns-prefetch",e,null)},C:function(e,t){ji.C(e,t),m2("preconnect",e,t)},L:function(e,t,n){ji.L(e,t,n);var o=au;if(o&&e&&t){var l='link[rel="preload"][as="'+_l(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+_l(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+_l(n.imageSizes)+'"]')):l+='[href="'+_l(e)+'"]';var a=l;switch(t){case"style":a=gc(e);break;case"script":a=yc(e)}if(!(ha.has(a)||(e=At({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ha.set(a,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(od(a))||t==="script"&&o.querySelector(ld(a))))){var r=o.createElement("link");Oo(r,"link",e),t==="style"&&(r[Dh]=!0,r.onload=r.onerror=function(){An(r)}),jn(r),o.head.appendChild(r)}}},m:function(e,t){ji.m(e,t);var n=au;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+_l(o)+'"][href="'+_l(e)+'"]',a=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=yc(e)}if(!ha.has(a)&&(e=At({rel:"modulepreload",href:e},t),ha.set(a,e),n.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ld(a)))return}o=n.createElement("link"),Oo(o,"link",e),jn(o),n.head.appendChild(o)}}},X:function(e,t){ji.X(e,t);var n=au;if(n&&e){var o=Bo(n).hoistableScripts,l=yc(e),a=o.get(l);a||(a=n.querySelector(ld(l)),a||(e=At({src:e,async:!0},t),(t=ha.get(l))&&Fm(e,t),a=n.createElement("script"),jn(a),Oo(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},o.set(l,a))}},S:function(e,t,n){ji.S(e,t,n);var o=au;if(o&&e){var l=Bo(o).hoistableStyles,a=gc(e);t=t||"default";var r=l.get(a);if(!r){var c={loading:As,preload:null};if(r=o.querySelector(od(a)))c.loading=tf|fa;else{e=At({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ha.get(a))&&Zm(e,n);var d=r=o.createElement("link");jn(d),Oo(d,"link",e),d._p=new Promise(function(_,w){d.onload=_,d.onerror=w}),d.addEventListener("load",function(){c.loading|=tf}),d.addEventListener("error",function(){c.loading|=rx}),c.loading|=fa,gh(r,t,o)}r={type:"stylesheet",instance:r,count:1,state:c},l.set(a,r)}}},M:function(e,t){ji.M(e,t);var n=au;if(n&&e){var o=Bo(n).hoistableScripts,l=yc(e),a=o.get(l);a||(a=n.querySelector(ld(l)),a||(e=At({src:e,async:!0,type:"module"},t),(t=ha.get(l))&&Fm(e,t),a=n.createElement("script"),jn(a),Oo(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},o.set(l,a))}}};var au=typeof document>"u"?null:document,R_=null,mS=6e4,pS=800,gS=500,D_=0,Ug=null,O_=null,Ns=M6,iu={$$typeof:ka,Provider:null,Consumer:null,_currentValue:Ns,_currentValue2:Ns,_threadCount:0},ux="%c%s%c",dx="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",fx="",A_=" ",yS=Function.prototype.bind,hx=!1,_x=null,mx=null,px=null,gx=null,yx=null,bx=null,vx=null,xx=null,wx=null,Sx=null;_x=function(e,t,n,o){t=i(e,t),t!==null&&(n=s(t.memoizedState,n,0,o),t.memoizedState=n,t.baseState=n,e.memoizedProps=At({},e.memoizedProps),n=D(e,2),n!==null&&Xn(n,e,2))},mx=function(e,t,n){t=i(e,t),t!==null&&(n=h(t.memoizedState,n,0),t.memoizedState=n,t.baseState=n,e.memoizedProps=At({},e.memoizedProps),n=D(e,2),n!==null&&Xn(n,e,2))},px=function(e,t,n,o){t=i(e,t),t!==null&&(n=u(t.memoizedState,n,o),t.memoizedState=n,t.baseState=n,e.memoizedProps=At({},e.memoizedProps),n=D(e,2),n!==null&&Xn(n,e,2))},gx=function(e,t,n){e.pendingProps=s(e.memoizedProps,t,0,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=D(e,2),t!==null&&Xn(t,e,2)},yx=function(e,t){e.pendingProps=h(e.memoizedProps,t,0),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=D(e,2),t!==null&&Xn(t,e,2)},bx=function(e,t,n){e.pendingProps=u(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=D(e,2),t!==null&&Xn(t,e,2)},vx=function(e){var t=D(e,2);t!==null&&Xn(t,e,2)},xx=function(e){var t=St(),n=D(e,t);n!==null&&Xn(n,e,t)},wx=function(e){k=e},Sx=function(e){g=e};var ru=!0,N_=null,Ig=!1,Ur=null,Ir=null,jr=null,nf=new Map,of=new Map,Yr=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),z_=null;if(xh.prototype.render=lp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error("Cannot update an unmounted root.");var n=arguments;typeof n[1]=="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):I(n[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof n[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),n=e;var o=t.current,l=$l(o);Km(o,l,n,t,null,null)},xh.prototype.unmount=lp.prototype.unmount=function(){var e=arguments;if(typeof e[0]=="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),e=this._internalRoot,e!==null){this._internalRoot=null;var t=e.containerInfo;(Wt&(yo|Vl))!==ko&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Km(e.current,2,null,e,null,null),hc(),t[br]=null}},xh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fe();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yr.length&&t!==0&&t<Yr[n].priority;n++);Yr.splice(n,0,e),n===0&&A2(e)}},(function(){var e=ap.version;if(e!=="19.3.0")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(e+`
  - react-dom:  19.3.0
Learn more: https://react.dev/warnings/version-mismatch`))})(),typeof Map=="function"&&Map.prototype!=null&&typeof Map.prototype.forEach=="function"&&typeof Set=="function"&&Set.prototype!=null&&typeof Set.prototype.clear=="function"&&typeof Set.prototype.forEach=="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),on.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error("Unable to find node on an unmounted component."):(e=Object.keys(e).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+e));return e=It(t),e=e!==null?Vt(e):null,e=e===null?null:e.stateNode,e},!(function(){var e={bundleType:1,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.3.0"};return e.overrideHookState=_x,e.overrideHookStateDeletePath=mx,e.overrideHookStateRenamePath=px,e.overrideProps=gx,e.overridePropsDeletePath=yx,e.overridePropsRenamePath=bx,e.scheduleUpdate=vx,e.scheduleRetry=xx,e.setErrorHandler=wx,e.setSuspenseHandler=Sx,e.scheduleRefresh=S,e.scheduleRoot=Y,e.setRefreshHandler=V,e.getCurrentFiber=g6,X(e)})()&&ni&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var Cx=window.location.protocol;/^(https?|file):$/.test(Cx)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(Cx==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}$_.createRoot=function(e,t){if(!I(e))throw Error("Target container is not a DOM element.");B2(e);var n=!1,o="",l=cy,a=uy,r=dy;return t!=null&&(t.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof t=="object"&&t!==null&&t.$$typeof===Fa&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=k2(e,1,!1,null,null,n,o,null,l,a,r,L2),e[br]=t.current,Lm(e),new lp(t)},$_.hydrateRoot=function(e,t,n){if(!I(e))throw Error("Target container is not a DOM element.");B2(e),t===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var o=!1,l="",a=cy,r=uy,c=dy,d=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.formState!==void 0&&(d=n.formState)),t=k2(e,1,!0,t,n??null,o,l,d,a,r,c,L2),t.context=E2(null),n=t.current,o=$l(n),o=be(o),l=sr(o),l.callback=null,cr(n,l,o),Ua(o,"hydrateRoot()",null),n=o,t.current.lanes=n,R(t,n),Wa(t),e[br]=t.current,Lm(e),new xh(t)},$_.version="19.3.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var Lx=fi((F9,zx)=>{"use strict";zx.exports=Nx()});var Bx=fi(H_=>{"use strict";(function(){function i(W){if(W==null)return null;if(typeof W=="function")return W.$$typeof===Tt?null:W.displayName||W.name||null;if(typeof W=="string")return W;switch(W){case I:return"Fragment";case Ee:return"Profiler";case F:return"StrictMode";case Vt:return"Suspense";case Ce:return"SuspenseList";case Xe:return"Activity";case at:return"ViewTransition"}if(typeof W=="object")switch(typeof W.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),W.$$typeof){case V:return"Portal";case Ze:return W.displayName||"Context";case Ye:return(W._context.displayName||"Context")+".Consumer";case It:var Se=W.render;return W=W.displayName,W||(W=Se.displayName||Se.name||"",W=W!==""?"ForwardRef("+W+")":"ForwardRef"),W;case yt:return Se=W.displayName||null,Se!==null?Se:i(W.type)||"Memo";case _t:Se=W._payload,W=W._init;try{return i(W(Se))}catch{}}return null}function s(W){return""+W}function u(W){try{s(W);var Se=!1}catch{Se=!0}if(Se){Se=console;var $e=Se.error,Mt=typeof Symbol=="function"&&Symbol.toStringTag&&W[Symbol.toStringTag]||W.constructor.name||"Object";return $e.call(Se,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Mt),s(W)}}function f(W){if(W===I)return"<>";if(typeof W=="object"&&W!==null&&W.$$typeof===_t)return"<...>";try{var Se=i(W);return Se?"<"+Se+">":"<...>"}catch{return"<...>"}}function h(){var W=Je.A;return W===null?null:W.getOwner()}function g(){return Error("react-stack-top-frame")}function k(W){if(it.call(W,"key")){var Se=Object.getOwnPropertyDescriptor(W,"key").get;if(Se&&Se.isReactWarning)return!1}return W.key!==void 0}function T(W,Se){function $e(){Te||(Te=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",Se))}$e.isReactWarning=!0,Object.defineProperty(W,"key",{get:$e,configurable:!0})}function M(){var W=i(this.type);return ne[W]||(ne[W]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),W=this.props.ref,W!==void 0?W:null}function ae(W,Se,$e,Mt,En,en){var jt=$e.ref;return W={$$typeof:S,type:W,key:Se,props:$e,_owner:Mt},(jt!==void 0?jt:null)!==null?Object.defineProperty(W,"ref",{enumerable:!1,get:M}):Object.defineProperty(W,"ref",{enumerable:!1,value:null}),W._store={},Object.defineProperty(W._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(W,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(W,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:En}),Object.defineProperty(W,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:en}),Object.freeze&&(Object.freeze(W.props),Object.freeze(W)),W}function B(W,Se,$e,Mt,En,en){var jt=Se.children;if(jt!==void 0)if(Mt)if(re(jt)){for(Mt=0;Mt<jt.length;Mt++)oe(jt[Mt]);Object.freeze&&Object.freeze(jt)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else oe(jt);if(it.call(Se,"key")){jt=i(W);var In=Object.keys(Se).filter(function(Fn){return Fn!=="key"});Mt=0<In.length?"{key: someKey, "+In.join(": ..., ")+": ...}":"{key: someKey}",ke[jt+Mt]||(In=0<In.length?"{"+In.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Mt,jt,In,jt),ke[jt+Mt]=!0)}if(jt=null,$e!==void 0&&(u($e),jt=""+$e),k(Se)&&(u(Se.key),jt=""+Se.key),"key"in Se){$e={};for(var Pn in Se)Pn!=="key"&&($e[Pn]=Se[Pn])}else $e=Se;return jt&&T($e,typeof W=="function"?W.displayName||W.name||"Unknown":W),ae(W,jt,$e,h(),En,en)}function oe(W){H(W)?W._store&&(W._store.validated=1):typeof W=="object"&&W!==null&&W.$$typeof===_t&&(W._payload.status==="fulfilled"?H(W._payload.value)&&W._payload.value._store&&(W._payload.value._store.validated=1):W._store&&(W._store.validated=1))}function H(W){return typeof W=="object"&&W!==null&&W.$$typeof===S}var Y=Gl(),S=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),Ye=Symbol.for("react.consumer"),Ze=Symbol.for("react.context"),It=Symbol.for("react.forward_ref"),Vt=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),yt=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Xe=Symbol.for("react.activity"),at=Symbol.for("react.view_transition"),Tt=Symbol.for("react.client.reference"),Je=Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it=Object.prototype.hasOwnProperty,re=Array.isArray,ye=console.createTask?console.createTask:function(){return null};Y={react_stack_bottom_frame:function(W){return W()}};var Te,ne={},me=Y.react_stack_bottom_frame.bind(Y,g)(),vt=ye(f(g)),ke={};H_.Fragment=I,H_.jsx=function(W,Se,$e){var Mt=1e4>Je.recentlyCreatedOwnerStacks++;if(Mt){var En=Error.stackTraceLimit;Error.stackTraceLimit=10;var en=Error("react-stack-top-frame");Error.stackTraceLimit=En}else en=me;return B(W,Se,$e,!1,en,Mt?ye(f(W)):vt)},H_.jsxs=function(W,Se,$e){var Mt=1e4>Je.recentlyCreatedOwnerStacks++;if(Mt){var En=Error.stackTraceLimit;Error.stackTraceLimit=10;var en=Error("react-stack-top-frame");Error.stackTraceLimit=En}else en=me;return B(W,Se,$e,!0,en,Mt?ye(f(W)):vt)}})()});var dl=fi((K9,$x)=>{"use strict";$x.exports=Bx()});var Rw=kn(Gl(),1),Dw=kn(Lx(),1);var j=kn(Gl(),1),cw=kn(B_(),1),Qn=kn(Gl(),1),Re=kn(dl(),1),Un=kn(dl(),1),_i=kn(Gl(),1),fw=kn(B_(),1),Hs=kn(dl(),1),e1=kn(dl(),1),Ft=kn(Gl(),1),y=kn(dl(),1),vn=kn(dl(),1),Gn=kn(Gl(),1),p=kn(dl(),1),bt=kn(Gl(),1),Zt=kn(dl(),1),Ew=kn(Gl(),1),Pl=kn(dl(),1),hf=kn(dl(),1),Tw=kn(Gl(),1),hu=kn(dl(),1),_u=kn(dl(),1),Be=kn(dl(),1),he=kn(dl(),1),TS=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,MS={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(i)),i.textContent=TS}var bn=MS,RS=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,DS={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-components-icon-transitions");i||(i=document.createElement("style"),i.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(i)),i.textContent=RS}var pn=DS;var OS=({size:i=16})=>(0,Re.jsx)("svg",{width:i,height:i,viewBox:"0 0 16 16",fill:"none",children:(0,Re.jsx)("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var AS=({size:i=24,style:s={}})=>(0,Re.jsxs)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",style:s,children:[(0,Re.jsxs)("g",{clipPath:"url(#clip0_list_sparkle)",children:[(0,Re.jsx)("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),(0,Re.jsx)("defs",{children:(0,Re.jsx)("clipPath",{id:"clip0_list_sparkle",children:(0,Re.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),NS=({size:i=20,...s})=>(0,Re.jsxs)("svg",{width:i,height:i,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[(0,Re.jsx)("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),(0,Re.jsx)("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var zS=({size:i=24,copied:s=!1,tint:u})=>(0,Re.jsxs)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",style:u?{color:u,transition:"color 0.3s ease"}:void 0,children:[(0,Re.jsxs)("g",{className:`${pn.iconState} ${s?pn.hiddenScaled:pn.visibleScaled}`,children:[(0,Re.jsx)("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),(0,Re.jsx)("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,Re.jsxs)("g",{className:`${pn.iconState} ${s?pn.visibleScaled:pn.hiddenScaled}`,children:[(0,Re.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),LS=({size:i=24,state:s="idle"})=>{let u=s==="idle",f=s==="sent",h=s==="failed",g=s==="sending";return(0,Re.jsxs)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[(0,Re.jsx)("g",{className:`${pn.iconStateFast} ${u?pn.visibleScaled:g?pn.sending:pn.hiddenScaled}`,children:(0,Re.jsx)("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,Re.jsxs)("g",{className:`${pn.iconStateFast} ${f?pn.visibleScaled:pn.hiddenScaled}`,children:[(0,Re.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,Re.jsxs)("g",{className:`${pn.iconStateFast} ${h?pn.visibleScaled:pn.hiddenScaled}`,children:[(0,Re.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,Re.jsx)("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var BS=({size:i=24,isOpen:s=!0})=>(0,Re.jsxs)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[(0,Re.jsxs)("g",{className:`${pn.iconFade} ${s?pn.visible:pn.hidden}`,children:[(0,Re.jsx)("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,Re.jsxs)("g",{className:`${pn.iconFade} ${s?pn.hidden:pn.visible}`,children:[(0,Re.jsx)("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),(0,Re.jsx)("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),$S=({size:i=24,isPaused:s=!1})=>(0,Re.jsxs)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[(0,Re.jsxs)("g",{className:`${pn.iconFadeFast} ${s?pn.hidden:pn.visible}`,children:[(0,Re.jsx)("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,Re.jsx)("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,Re.jsx)("path",{className:`${pn.iconFadeFast} ${s?pn.visible:pn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var HS=({size:i=16})=>(0,Re.jsxs)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[(0,Re.jsx)("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var US=({size:i=16})=>(0,Re.jsx)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:(0,Re.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var uw=({size:i=16})=>(0,Re.jsxs)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[(0,Re.jsxs)("g",{clipPath:"url(#clip0_2_53)",children:[(0,Re.jsx)("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,Re.jsx)("defs",{children:(0,Re.jsx)("clipPath",{id:"clip0_2_53",children:(0,Re.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),IS=({size:i=24})=>(0,Re.jsx)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:(0,Re.jsx)("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),jS=({size:i=16})=>(0,Re.jsxs)("svg",{width:i,height:i,viewBox:"0 0 20 20",fill:"none",children:[(0,Re.jsx)("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Re.jsx)("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),YS=({size:i=16})=>(0,Re.jsx)("svg",{width:i,height:i,viewBox:"0 0 20 20",fill:"none",children:(0,Re.jsx)("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),XS=({size:i=16})=>(0,Re.jsx)("svg",{width:i,height:i,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Re.jsx)("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),VS=({size:i=24})=>(0,Re.jsx)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Re.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),qS=({size:i=16})=>(0,Re.jsx)("svg",{width:i,height:i,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Re.jsx)("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var QS=({size:i=24})=>(0,Re.jsxs)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[(0,Re.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),(0,Re.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),(0,Re.jsx)("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),dw=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],jg=dw.flatMap(i=>[`:not([${i}])`,`:not([${i}] *)`]).join(""),Kg="feedback-freeze-styles",Yg="__agentation_freeze";function GS(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:s=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let i=window;return i[Yg]||(i[Yg]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),i[Yg]}var Qt=GS();typeof window<"u"&&!Qt.installed&&(Qt.origSetTimeout=window.setTimeout.bind(window),Qt.origSetInterval=window.setInterval.bind(window),Qt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(i,s,...u)=>typeof i=="string"?Qt.origSetTimeout(i,s):Qt.origSetTimeout((...f)=>{Qt.frozen?Qt.frozenTimeoutQueue.push(()=>i(...f)):i(...f)},s,...u),window.setInterval=(i,s,...u)=>typeof i=="string"?Qt.origSetInterval(i,s):Qt.origSetInterval((...f)=>{Qt.frozen||i(...f)},s,...u),window.requestAnimationFrame=i=>Qt.origRAF(s=>{Qt.frozen?Qt.frozenRAFQueue.push(i):i(s)}),Qt.installed=!0);var ct=Qt.origSetTimeout,PS=Qt.origSetInterval,du=Qt.origRAF;function WS(i){return i?dw.some(s=>!!i.closest?.(`[${s}]`)):!1}function ZS(){if(typeof document>"u"||Qt.frozen)return;Qt.frozen=!0,Qt.frozenTimeoutQueue=[],Qt.frozenRAFQueue=[];let i=document.getElementById(Kg);i||(i=document.createElement("style"),i.id=Kg),i.textContent=`
    *${jg},
    *${jg}::before,
    *${jg}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(i),Qt.pausedAnimations=[];try{document.getAnimations().forEach(s=>{if(s.playState!=="running")return;let u=s.effect?.target;WS(u)||(s.pause(),Qt.pausedAnimations.push(s))})}catch{}document.querySelectorAll("video").forEach(s=>{s.paused||(s.dataset.wasPaused="false",s.pause())})}function Hx(){if(typeof document>"u"||!Qt.frozen)return;Qt.frozen=!1;let i=Qt.frozenTimeoutQueue;Qt.frozenTimeoutQueue=[];for(let u of i)Qt.origSetTimeout(()=>{if(Qt.frozen){Qt.frozenTimeoutQueue.push(u);return}try{u()}catch(f){console.warn("[agentation] Error replaying queued timeout:",f)}},0);let s=Qt.frozenRAFQueue;Qt.frozenRAFQueue=[];for(let u of s)Qt.origRAF(f=>{if(Qt.frozen){Qt.frozenRAFQueue.push(u);return}u(f)});for(let u of Qt.pausedAnimations)try{u.play()}catch(f){console.warn("[agentation] Error resuming animation:",f)}Qt.pausedAnimations=[],document.getElementById(Kg)?.remove(),document.querySelectorAll("video").forEach(u=>{u.dataset.wasPaused==="false"&&(u.play().catch(()=>{}),delete u.dataset.wasPaused)})}function Xg(i){if(!i)return;let s=u=>u.stopImmediatePropagation();document.addEventListener("focusin",s,!0),document.addEventListener("focusout",s,!0);try{i.focus()}finally{document.removeEventListener("focusin",s,!0),document.removeEventListener("focusout",s,!0)}}var F_=(0,Qn.forwardRef)(function({element:s,timestamp:u,selectedText:f,placeholder:h="What should change?",initialValue:g="",submitLabel:k="Add",onSubmit:T,onCancel:M,onDelete:ae,style:B,accentColor:oe="#3c82f7",isExiting:H=!1,lightMode:Y=!1,computedStyles:S},V){let[I,F]=(0,Qn.useState)(g),[Ee,Ye]=(0,Qn.useState)(!1),[Ze,It]=(0,Qn.useState)("initial"),[Vt,Ce]=(0,Qn.useState)(!1),[yt,_t]=(0,Qn.useState)(!1),Xe=(0,Qn.useRef)(null),at=(0,Qn.useRef)(null),Tt=(0,Qn.useRef)(null),Je=(0,Qn.useRef)(null);(0,Qn.useEffect)(()=>{H&&Ze!=="exit"&&It("exit")},[H,Ze]),(0,Qn.useEffect)(()=>{ct(()=>{It("enter")},0);let me=ct(()=>{It("entered")},200),vt=ct(()=>{let ke=Xe.current;ke&&(Xg(ke),ke.selectionStart=ke.selectionEnd=ke.value.length,ke.scrollTop=ke.scrollHeight)},50);return()=>{clearTimeout(me),clearTimeout(vt),Tt.current&&clearTimeout(Tt.current),Je.current&&clearTimeout(Je.current)}},[]);let it=(0,Qn.useCallback)(()=>{Je.current&&clearTimeout(Je.current),Ye(!0),Je.current=ct(()=>{Ye(!1),Xg(Xe.current)},250)},[]);(0,Qn.useImperativeHandle)(V,()=>({shake:it}),[it]);let re=(0,Qn.useCallback)(()=>{It("exit"),Tt.current=ct(()=>{M()},150)},[M]),ye=(0,Qn.useCallback)(()=>{I.trim()&&T(I.trim())},[I,T]),Te=(0,Qn.useCallback)(me=>{me.stopPropagation(),!me.nativeEvent.isComposing&&(me.key==="Enter"&&!me.shiftKey&&(me.preventDefault(),ye()),me.key==="Escape"&&re())},[ye,re]),ne=[bn.popup,Y?bn.light:"",Ze==="enter"?bn.enter:"",Ze==="entered"?bn.entered:"",Ze==="exit"?bn.exit:"",Ee?bn.shake:""].filter(Boolean).join(" ");return(0,Un.jsxs)("div",{ref:at,className:ne,"data-annotation-popup":!0,style:B,onClick:me=>me.stopPropagation(),children:[(0,Un.jsxs)("div",{className:bn.header,children:[S&&Object.keys(S).length>0?(0,Un.jsxs)("button",{className:bn.headerToggle,onClick:()=>{let me=yt;_t(!yt),me&&ct(()=>Xg(Xe.current),0)},type:"button",children:[(0,Un.jsx)("svg",{className:`${bn.chevron} ${yt?bn.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Un.jsx)("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,Un.jsx)("span",{className:bn.element,children:s})]}):(0,Un.jsx)("span",{className:bn.element,children:s}),u&&(0,Un.jsx)("span",{className:bn.timestamp,children:u})]}),S&&Object.keys(S).length>0&&(0,Un.jsx)("div",{className:`${bn.stylesWrapper} ${yt?bn.expanded:""}`,children:(0,Un.jsx)("div",{className:bn.stylesInner,children:(0,Un.jsx)("div",{className:bn.stylesBlock,children:Object.entries(S).map(([me,vt])=>(0,Un.jsxs)("div",{className:bn.styleLine,children:[(0,Un.jsx)("span",{className:bn.styleProperty,children:me.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",(0,Un.jsx)("span",{className:bn.styleValue,children:vt}),";"]},me))})})}),f&&(0,Un.jsxs)("div",{className:bn.quote,children:["\u201C",f.slice(0,80),f.length>80?"...":"","\u201D"]}),(0,Un.jsx)("textarea",{ref:Xe,className:bn.textarea,style:{borderColor:Vt?oe:void 0},placeholder:h,value:I,onChange:me=>F(me.target.value),onFocus:()=>Ce(!0),onBlur:()=>Ce(!1),rows:2,onKeyDown:Te}),(0,Un.jsxs)("div",{className:bn.actions,children:[ae&&(0,Un.jsx)("div",{className:bn.deleteWrapper,children:(0,Un.jsx)("button",{className:bn.deleteButton,onClick:ae,type:"button",children:(0,Un.jsx)(VS,{size:22})})}),(0,Un.jsx)("button",{className:bn.cancel,onClick:re,children:"Cancel"}),(0,Un.jsx)("button",{className:bn.submit,style:{backgroundColor:oe,opacity:I.trim()?1:.4},onClick:ye,disabled:!I.trim(),children:k})]})]})}),FS=({content:i,children:s,...u})=>{let[f,h]=(0,_i.useState)(!1),[g,k]=(0,_i.useState)(!1),[T,M]=(0,_i.useState)({top:0,right:0}),ae=(0,_i.useRef)(null),B=(0,_i.useRef)(null),oe=(0,_i.useRef)(null),H=()=>{if(ae.current){let V=ae.current.getBoundingClientRect();M({top:V.top+V.height/2,right:window.innerWidth-V.left+8})}},Y=()=>{k(!0),oe.current&&(clearTimeout(oe.current),oe.current=null),H(),B.current=ct(()=>{h(!0)},500)},S=()=>{B.current&&(clearTimeout(B.current),B.current=null),h(!1),oe.current=ct(()=>{k(!1)},150)};return(0,_i.useEffect)(()=>()=>{B.current&&clearTimeout(B.current),oe.current&&clearTimeout(oe.current)},[]),(0,Hs.jsxs)(Hs.Fragment,{children:[(0,Hs.jsx)("span",{ref:ae,onMouseEnter:Y,onMouseLeave:S,...u,children:s}),g&&(0,fw.createPortal)((0,Hs.jsx)("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:T.top,right:T.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:f?1:0,transition:"opacity 0.15s ease"},children:i}),document.body)]})},JS=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,KS={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-help-tooltip-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(i)),i.textContent=JS}var Ux=KS,$s=({content:i})=>(0,e1.jsx)(FS,{className:Ux.tooltip,content:i,children:(0,e1.jsx)(NS,{className:Ux.tooltipIcon})}),Ue={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},hw=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Ue.navigation},{type:"header",label:"Header",...Ue.header},{type:"hero",label:"Hero",...Ue.hero},{type:"section",label:"Section",...Ue.section},{type:"sidebar",label:"Sidebar",...Ue.sidebar},{type:"footer",label:"Footer",...Ue.footer},{type:"modal",label:"Modal",...Ue.modal},{type:"banner",label:"Banner",...Ue.banner},{type:"drawer",label:"Drawer",...Ue.drawer},{type:"popover",label:"Popover",...Ue.popover},{type:"divider",label:"Divider",...Ue.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Ue.card},{type:"text",label:"Text",...Ue.text},{type:"image",label:"Image",...Ue.image},{type:"video",label:"Video",...Ue.video},{type:"table",label:"Table",...Ue.table},{type:"grid",label:"Grid",...Ue.grid},{type:"list",label:"List",...Ue.list},{type:"chart",label:"Chart",...Ue.chart},{type:"codeBlock",label:"Code Block",...Ue.codeBlock},{type:"map",label:"Map",...Ue.map},{type:"timeline",label:"Timeline",...Ue.timeline},{type:"calendar",label:"Calendar",...Ue.calendar},{type:"accordion",label:"Accordion",...Ue.accordion},{type:"carousel",label:"Carousel",...Ue.carousel},{type:"logo",label:"Logo",...Ue.logo},{type:"faq",label:"FAQ",...Ue.faq},{type:"gallery",label:"Gallery",...Ue.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Ue.button},{type:"input",label:"Input",...Ue.input},{type:"search",label:"Search",...Ue.search},{type:"form",label:"Form",...Ue.form},{type:"tabs",label:"Tabs",...Ue.tabs},{type:"dropdown",label:"Dropdown",...Ue.dropdown},{type:"toggle",label:"Toggle",...Ue.toggle},{type:"stepper",label:"Stepper",...Ue.stepper},{type:"rating",label:"Rating",...Ue.rating},{type:"fileUpload",label:"File Upload",...Ue.fileUpload},{type:"checkbox",label:"Checkbox",...Ue.checkbox},{type:"radio",label:"Radio",...Ue.radio},{type:"slider",label:"Slider",...Ue.slider},{type:"datePicker",label:"Date Picker",...Ue.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Ue.avatar},{type:"badge",label:"Badge",...Ue.badge},{type:"tag",label:"Tag",...Ue.tag},{type:"breadcrumb",label:"Breadcrumb",...Ue.breadcrumb},{type:"pagination",label:"Pagination",...Ue.pagination},{type:"progress",label:"Progress",...Ue.progress},{type:"alert",label:"Alert",...Ue.alert},{type:"toast",label:"Toast",...Ue.toast},{type:"notification",label:"Notification",...Ue.notification},{type:"tooltip",label:"Tooltip",...Ue.tooltip},{type:"stat",label:"Stat",...Ue.stat},{type:"skeleton",label:"Skeleton",...Ue.skeleton},{type:"chip",label:"Chip",...Ue.chip},{type:"icon",label:"Icon",...Ue.icon},{type:"spinner",label:"Spinner",...Ue.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Ue.pricing},{type:"testimonial",label:"Testimonial",...Ue.testimonial},{type:"cta",label:"CTA",...Ue.cta},{type:"productCard",label:"Product Card",...Ue.productCard},{type:"profile",label:"Profile",...Ue.profile},{type:"feature",label:"Feature",...Ue.feature},{type:"team",label:"Team",...Ue.team},{type:"login",label:"Login",...Ue.login},{type:"contact",label:"Contact",...Ue.contact}]}],La={};for(let i of hw)for(let s of i.items)La[s.type]=s;function ue({w:i,h:s=3,strong:u}){return(0,y.jsx)("div",{style:{width:typeof i=="number"?`${i}px`:i,height:s,borderRadius:2,background:u?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function fn({w:i,h:s,radius:u=3,style:f}){return(0,y.jsx)("div",{style:{width:typeof i=="number"?`${i}px`:i,height:typeof s=="number"?`${s}px`:s,borderRadius:u,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...f}})}function hl({size:i}){return(0,y.jsx)("div",{style:{width:i,height:i,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function e8({width:i,height:s}){let u=Math.max(8,s*.2);return(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${u}px`,gap:i*.02},children:[(0,y.jsx)(fn,{w:Math.max(20,s*.5),h:Math.max(12,s*.4),radius:2}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",gap:i*.03,marginLeft:i*.04},children:[(0,y.jsx)(ue,{w:i*.06}),(0,y.jsx)(ue,{w:i*.07}),(0,y.jsx)(ue,{w:i*.05}),(0,y.jsx)(ue,{w:i*.06})]}),(0,y.jsx)(fn,{w:i*.1,h:Math.min(28,s*.5),radius:4})]})}function t8({width:i,height:s,text:u}){return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:s*.05},children:[u?(0,y.jsx)("span",{style:{fontSize:Math.min(20,s*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:u}):(0,y.jsx)(ue,{w:i*.5,h:Math.max(6,s*.04),strong:!0}),(0,y.jsx)(ue,{w:i*.6}),(0,y.jsx)(ue,{w:i*.4}),(0,y.jsx)(fn,{w:Math.min(140,i*.2),h:Math.min(36,s*.12),radius:6,style:{marginTop:s*.06}})]})}function n8({width:i,height:s}){let u=Math.max(3,Math.floor(s/36));return(0,y.jsxs)("div",{style:{padding:i*.08,display:"flex",flexDirection:"column",gap:s*.03},children:[(0,y.jsx)(ue,{w:i*.6,h:4,strong:!0}),Array.from({length:u},(f,h)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,y.jsx)(fn,{w:10,h:10,radius:2}),(0,y.jsx)(ue,{w:i*(.4+h*17%30/100)})]},h))]})}function o8({width:i,height:s}){let u=Math.max(2,Math.min(4,Math.floor(i/160)));return(0,y.jsx)("div",{style:{display:"flex",padding:`${s*.12}px ${i*.03}px`,gap:i*.05},children:Array.from({length:u},(f,h)=>(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsx)(ue,{w:"60%",h:3,strong:!0}),(0,y.jsx)(ue,{w:"80%",h:2}),(0,y.jsx)(ue,{w:"70%",h:2}),(0,y.jsx)(ue,{w:"60%",h:2})]},h))})}function l8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsxs)("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,y.jsx)(ue,{w:i*.3,h:4,strong:!0}),(0,y.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),(0,y.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,y.jsx)(ue,{w:"90%"}),(0,y.jsx)(ue,{w:"70%"}),(0,y.jsx)(ue,{w:"80%"})]}),(0,y.jsxs)("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[(0,y.jsx)(fn,{w:70,h:26,radius:4}),(0,y.jsx)(fn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function a8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsx)("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,y.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,y.jsx)(ue,{w:"70%",h:4,strong:!0}),(0,y.jsx)(ue,{w:"95%",h:2}),(0,y.jsx)(ue,{w:"85%",h:2}),(0,y.jsx)(ue,{w:"50%",h:2})]})]})}function i8({width:i,height:s,text:u}){if(u)return(0,y.jsx)("div",{style:{padding:4,fontSize:Math.min(14,s*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:u});let f=Math.max(2,Math.floor(s/18));return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[(0,y.jsx)(ue,{w:i*.6,h:5,strong:!0}),Array.from({length:f},(h,g)=>(0,y.jsx)(ue,{w:`${70+g*13%25}%`,h:2},g))]})}function r8({width:i,height:s}){return(0,y.jsx)("div",{style:{height:"100%",position:"relative"},children:(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${s}`,preserveAspectRatio:"none",fill:"none",children:[(0,y.jsx)("line",{x1:"0",y1:"0",x2:i,y2:s,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,y.jsx)("line",{x1:i,y1:"0",x2:"0",y2:s,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,y.jsx)("circle",{cx:i*.3,cy:s*.3,r:Math.min(i,s)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function s8({width:i,height:s}){let u=Math.max(2,Math.min(5,Math.floor(i/100))),f=Math.max(2,Math.min(6,Math.floor(s/32)));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsx)("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:u},(h,g)=>(0,y.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,y.jsx)(ue,{w:"70%",h:3,strong:!0})},g))}),Array.from({length:f},(h,g)=>(0,y.jsx)("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:u},(k,T)=>(0,y.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,y.jsx)(ue,{w:`${50+(g*7+T*13)%40}%`,h:2})},T))},g))]})}function c8({width:i,height:s}){let u=Math.max(2,Math.floor(s/28));return(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:u},(f,h)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[(0,y.jsx)(hl,{size:8}),(0,y.jsx)(ue,{w:`${55+h*17%35}%`,h:2})]},h))})}function u8({width:i,height:s,text:u}){return(0,y.jsx)("div",{style:{height:"100%",borderRadius:Math.min(8,s/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:u?(0,y.jsx)("span",{style:{fontSize:Math.min(13,s*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:u}):(0,y.jsx)(ue,{w:Math.max(20,i*.5),h:3,strong:!0})})}function d8({width:i,height:s}){return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[(0,y.jsx)(ue,{w:Math.min(80,i*.3),h:2}),(0,y.jsx)("div",{style:{height:Math.min(36,s*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:(0,y.jsx)(ue,{w:"40%",h:2})})]})}function f8({width:i,height:s}){let u=Math.max(2,Math.min(5,Math.floor(s/56)));return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:s*.04,padding:8},children:[Array.from({length:u},(f,h)=>(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsx)(ue,{w:60+h*17%30,h:2}),(0,y.jsx)(fn,{w:"100%",h:28,radius:4})]},h)),(0,y.jsx)(fn,{w:Math.min(120,i*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function h8({width:i,height:s}){let u=Math.max(2,Math.min(4,Math.floor(i/120)));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsx)("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:u},(f,h)=>(0,y.jsx)("div",{style:{padding:"8px 12px",borderBottom:h===0?"2px solid var(--agd-bar-strong)":"none"},children:(0,y.jsx)(ue,{w:60,h:3,strong:h===0})},h))}),(0,y.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,y.jsx)(ue,{w:"80%",h:2}),(0,y.jsx)(ue,{w:"65%",h:2}),(0,y.jsx)(ue,{w:"75%",h:2})]})]})}function _8({width:i,height:s}){let u=Math.min(i,s)/2;return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${s}`,fill:"none",children:[(0,y.jsx)("circle",{cx:i/2,cy:s/2,r:u-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),(0,y.jsx)("circle",{cx:i/2,cy:s*.38,r:u*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),(0,y.jsx)("path",{d:`M${i/2-u*.55} ${s*.78} C${i/2-u*.55} ${s*.55} ${i/2+u*.55} ${s*.55} ${i/2+u*.55} ${s*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function m8({width:i,height:s}){return(0,y.jsx)("div",{style:{height:"100%",borderRadius:s/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)(ue,{w:Math.max(16,i*.5),h:2,strong:!0})})}function p8({width:i,height:s}){return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:s*.08},children:[(0,y.jsx)(ue,{w:i*.5,h:Math.max(5,s*.06),strong:!0}),(0,y.jsx)(ue,{w:i*.35})]})}function g8({width:i,height:s}){return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:s*.04,padding:i*.04},children:[(0,y.jsx)(ue,{w:i*.3,h:4,strong:!0}),(0,y.jsx)(ue,{w:i*.7}),(0,y.jsx)(ue,{w:i*.5}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",gap:i*.03,marginTop:s*.06},children:[(0,y.jsx)(fn,{w:"33%",h:"100%",radius:4}),(0,y.jsx)(fn,{w:"33%",h:"100%",radius:4}),(0,y.jsx)(fn,{w:"33%",h:"100%",radius:4})]})]})}function y8({width:i,height:s}){let u=Math.max(2,Math.min(4,Math.floor(i/140))),f=Math.max(1,Math.min(3,Math.floor(s/120)));return(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${u}, 1fr)`,gridTemplateRows:`repeat(${f}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:u*f},(h,g)=>(0,y.jsx)(fn,{w:"100%",h:"100%",radius:4},g))})}function b8({width:i,height:s}){let u=Math.max(2,Math.floor((s-32)/28));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsx)("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:(0,y.jsx)(ue,{w:i*.5,h:3,strong:!0})}),(0,y.jsx)("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:u},(f,h)=>(0,y.jsx)("div",{style:{padding:"4px 6px",borderRadius:3,background:h===0?"var(--agd-fill)":"transparent"},children:(0,y.jsx)(ue,{w:`${50+h*17%35}%`,h:2,strong:h===0})},h))})]})}function v8({width:i,height:s}){let u=Math.min(i,s)/2;return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${s}`,fill:"none",children:[(0,y.jsx)("rect",{x:"1",y:"1",width:i-2,height:s-2,rx:u,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,y.jsx)("circle",{cx:i-u,cy:s/2,r:u*.7,fill:"var(--agd-bar)"})]})}function x8({width:i,height:s}){let u=Math.min(s/2,20);return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:u,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${u*.6}px`,gap:6},children:[(0,y.jsx)(hl,{size:Math.min(14,s*.4)}),(0,y.jsx)(ue,{w:"50%",h:2})]})}function w8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,y.jsx)(hl,{size:Math.min(20,s*.5)}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(ue,{w:"60%",h:3,strong:!0}),(0,y.jsx)(ue,{w:"80%",h:2})]}),(0,y.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function S8({width:i,height:s}){return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${s}`,fill:"none",children:[(0,y.jsx)("rect",{x:"0",y:"0",width:i,height:s,rx:s/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),(0,y.jsx)("rect",{x:"1",y:"1",width:i*.65,height:s-2,rx:(s-2)/2,fill:"var(--agd-bar)"})]})}function C8({width:i,height:s}){let u=Math.max(3,Math.min(7,Math.floor(i/50))),f=i/(u*2);return(0,y.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:u},(h,g)=>{let k=30+(g*37+17)%55;return(0,y.jsx)(fn,{w:f,h:`${k}%`,radius:2},g)})})}function k8({width:i,height:s}){let u=Math.min(i,s)*.12;return(0,y.jsxs)("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,y.jsx)(fn,{w:"100%",h:"100%",radius:4}),(0,y.jsx)("div",{style:{position:"absolute",width:u*2,height:u*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)("div",{style:{width:0,height:0,borderLeft:`${u*.6}px solid var(--agd-bar-strong)`,borderTop:`${u*.4}px solid transparent`,borderBottom:`${u*.4}px solid transparent`,marginLeft:u*.15}})})]})}function E8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)(ue,{w:"60%",h:2})}),(0,y.jsx)("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function T8({width:i,height:s}){let u=Math.max(2,Math.min(4,Math.floor(i/80)));return(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:u},(f,h)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[h>0&&(0,y.jsx)("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),(0,y.jsx)(ue,{w:40+h*13%20,h:2,strong:h===u-1})]},h))})}function M8({width:i,height:s}){let u=Math.max(3,Math.min(5,Math.floor(i/40))),f=Math.min(28,s*.8);return(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:u},(h,g)=>(0,y.jsx)(fn,{w:f,h:f,radius:4,style:g===1?{background:"var(--agd-bar)"}:void 0},g))})}function R8({width:i}){return(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,y.jsx)("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function D8({width:i,height:s}){let u=Math.max(2,Math.min(4,Math.floor(s/40)));return(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:u},(f,h)=>(0,y.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:h===0?2:1},children:[(0,y.jsx)(ue,{w:`${40+h*17%25}%`,h:3,strong:!0}),(0,y.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:h===0?"\u25BC":"\u25B6"})]},h))})}function O8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[(0,y.jsxs)("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[(0,y.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u2039"}),(0,y.jsx)(fn,{w:"100%",h:"100%",radius:4}),(0,y.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[(0,y.jsx)(hl,{size:5}),(0,y.jsx)(hl,{size:5}),(0,y.jsx)(hl,{size:5})]})]})}function A8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:s*.04},children:[(0,y.jsx)(ue,{w:i*.4,h:3,strong:!0}),(0,y.jsx)(ue,{w:i*.3,h:6,strong:!0}),(0,y.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(u,f)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,y.jsx)(hl,{size:5}),(0,y.jsx)(ue,{w:`${50+f*17%35}%`,h:2})]},f))}),(0,y.jsx)(fn,{w:i*.7,h:Math.min(32,s*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function N8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[(0,y.jsx)("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"\u201C"}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsx)(ue,{w:"90%",h:2}),(0,y.jsx)(ue,{w:"75%",h:2}),(0,y.jsx)(ue,{w:"60%",h:2})]}),(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,y.jsx)(hl,{size:20}),(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,y.jsx)(ue,{w:60,h:3,strong:!0}),(0,y.jsx)(ue,{w:40,h:2})]})]})]})}function z8({width:i,height:s}){return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:s*.08},children:[(0,y.jsx)(ue,{w:i*.5,h:Math.max(4,s*.05),strong:!0}),(0,y.jsx)(ue,{w:i*.35}),(0,y.jsx)(fn,{w:Math.min(140,i*.25),h:Math.min(32,s*.15),radius:6,style:{marginTop:s*.04,background:"var(--agd-bar)"}})]})}function L8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,y.jsx)("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,y.jsx)("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(ue,{w:"40%",h:3,strong:!0}),(0,y.jsx)(ue,{w:"70%",h:2})]})]})}function B8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[(0,y.jsx)(ue,{w:i*.4,h:3,strong:!0}),(0,y.jsx)(fn,{w:60,h:Math.min(24,s*.6),radius:4})]})}function $8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:s*.06},children:[(0,y.jsx)(ue,{w:i*.5,h:2}),(0,y.jsx)(ue,{w:i*.4,h:Math.max(8,s*.18),strong:!0}),(0,y.jsx)(ue,{w:i*.3,h:2})]})}function H8({width:i,height:s}){let u=Math.max(3,Math.min(5,Math.floor(i/100))),f=Math.min(12,s*.35);return(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:u},(h,g)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[(0,y.jsx)("div",{style:{width:f,height:f,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:g===0?"var(--agd-bar)":"transparent",flexShrink:0}}),g<u-1&&(0,y.jsx)("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},g))})}function U8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[(0,y.jsx)(ue,{w:Math.max(16,i*.5),h:2,strong:!0}),(0,y.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function I8({width:i,height:s}){let f=Math.min(s*.7,i/7.5);return(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:f*.2},children:Array.from({length:5},(h,g)=>(0,y.jsx)("svg",{width:f,height:f,viewBox:"0 0 16 16",fill:"none",children:(0,y.jsx)("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:g<3?"var(--agd-bar)":"none"})},g))})}function j8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${s}`,fill:"none",style:{position:"absolute",inset:0},children:[(0,y.jsx)("line",{x1:0,y1:s*.3,x2:i,y2:s*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),(0,y.jsx)("line",{x1:0,y1:s*.6,x2:i,y2:s*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),(0,y.jsx)("line",{x1:i*.4,y1:0,x2:i*.6,y2:s,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),(0,y.jsx)("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:(0,y.jsxs)("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[(0,y.jsx)("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),(0,y.jsx)("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Y8({width:i,height:s}){let u=Math.max(3,Math.min(5,Math.floor(s/60)));return(0,y.jsxs)("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[(0,y.jsx)("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:u},(f,h)=>(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[(0,y.jsx)(hl,{size:8}),h<u-1&&(0,y.jsx)("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},h))}),(0,y.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:u},(f,h)=>(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(ue,{w:`${35+h*13%25}%`,h:3,strong:!0}),(0,y.jsx)(ue,{w:`${50+h*17%30}%`,h:2})]},h))})]})}function X8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:s*.06},children:[(0,y.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,y.jsx)("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,y.jsx)("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),(0,y.jsx)(ue,{w:i*.4,h:2}),(0,y.jsx)(ue,{w:i*.25,h:2})]})}function V8({width:i,height:s}){let u=Math.max(3,Math.min(8,Math.floor(s/20)));return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsxs)("div",{style:{display:"flex",gap:3,marginBottom:4},children:[(0,y.jsx)(hl,{size:6}),(0,y.jsx)(hl,{size:6}),(0,y.jsx)(hl,{size:6})]}),Array.from({length:u},(f,h)=>(0,y.jsx)("div",{style:{display:"flex",gap:6,paddingLeft:h>0&&h<u-1?12:0},children:(0,y.jsx)(ue,{w:`${25+h*23%50}%`,h:2,strong:h===0})},h))]})}function q8({width:i,height:s}){let h=Math.min((i-16)/7,(s-40)/6);return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[(0,y.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u2039"}),(0,y.jsx)(ue,{w:i*.3,h:3,strong:!0}),(0,y.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,y.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(g,k)=>(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:h*.6},children:(0,y.jsx)(ue,{w:h*.5,h:2})},`h${k}`)),Array.from({length:35},(g,k)=>(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:h},children:(0,y.jsx)("div",{style:{width:h*.6,height:h*.6,borderRadius:"50%",background:k===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:k===12?1:.3}})})},k))]})]})}function Q8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,y.jsx)(hl,{size:Math.min(32,s*.55)}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(ue,{w:"50%",h:3,strong:!0}),(0,y.jsx)(ue,{w:"75%",h:2})]}),(0,y.jsx)(ue,{w:30,h:2})]})}function G8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsx)("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,y.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,y.jsx)(ue,{w:"65%",h:4,strong:!0}),(0,y.jsx)(ue,{w:"40%",h:3}),(0,y.jsx)("div",{style:{flex:1}}),(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,y.jsx)(ue,{w:"30%",h:5,strong:!0}),(0,y.jsx)(fn,{w:Math.min(70,i*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function P8({width:i,height:s}){let u=Math.min(48,s*.3);return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:s*.06},children:[(0,y.jsx)(hl,{size:u}),(0,y.jsx)(ue,{w:i*.45,h:4,strong:!0}),(0,y.jsx)(ue,{w:i*.3,h:2}),(0,y.jsxs)("div",{style:{display:"flex",gap:i*.08,marginTop:s*.04},children:[(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,y.jsx)(ue,{w:20,h:3,strong:!0}),(0,y.jsx)(ue,{w:28,h:2})]}),(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,y.jsx)(ue,{w:20,h:3,strong:!0}),(0,y.jsx)(ue,{w:28,h:2})]}),(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,y.jsx)(ue,{w:20,h:3,strong:!0}),(0,y.jsx)(ue,{w:28,h:2})]})]})]})}function W8({width:i,height:s}){let u=Math.max(i*.6,80),f=Math.max(3,Math.floor(s/40));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex"},children:[(0,y.jsx)("div",{style:{width:i-u,background:"var(--agd-fill)",opacity:.3}}),(0,y.jsxs)("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:i*.04},children:[(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:s*.06},children:[(0,y.jsx)(ue,{w:u*.4,h:4,strong:!0}),(0,y.jsx)("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:f},(h,g)=>(0,y.jsx)("div",{style:{padding:"6px 0"},children:(0,y.jsx)(ue,{w:`${50+g*17%35}%`,h:2,strong:g===0})},g))]})]})}function Z8({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,y.jsx)(ue,{w:"70%",h:3,strong:!0}),(0,y.jsx)(ue,{w:"90%",h:2}),(0,y.jsx)(ue,{w:"60%",h:2})]}),(0,y.jsx)("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function F8({width:i,height:s}){let u=Math.min(s*.7,i*.3);return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:i*.08},children:[(0,y.jsx)(fn,{w:u,h:u,radius:u*.25}),(0,y.jsx)(ue,{w:i*.45,h:Math.max(4,s*.2),strong:!0})]})}function J8({width:i,height:s}){let u=Math.max(2,Math.min(5,Math.floor(s/56)));return(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:u},(f,h)=>(0,y.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:h===0?2:1},children:[(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,y.jsx)("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),(0,y.jsx)(ue,{w:i*(.3+h*13%25/100),h:3,strong:!0})]}),(0,y.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:h===0?"\u25BC":"\u25B6"})]},h))})}function K8({width:i,height:s}){let u=Math.max(2,Math.min(4,Math.floor(i/120))),f=Math.max(1,Math.min(3,Math.floor(s/120)));return(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${u}, 1fr)`,gridTemplateRows:`repeat(${f}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:u*f},(h,g)=>(0,y.jsx)("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[(0,y.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),(0,y.jsx)("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},g))})}function e7({width:i,height:s}){let u=Math.min(i,s);return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${s}`,fill:"none",children:[(0,y.jsx)("rect",{x:"1",y:(s-u+2)/2,width:u-2,height:u-2,rx:u*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,y.jsx)("path",{d:`M${u*.25} ${s/2}l${u*.2} ${u*.2} ${u*.3}-${u*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function t7({width:i,height:s}){let u=Math.min(i,s)/2-1;return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${s}`,fill:"none",children:[(0,y.jsx)("circle",{cx:i/2,cy:s/2,r:u,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,y.jsx)("circle",{cx:i/2,cy:s/2,r:u*.45,fill:"var(--agd-bar)"})]})}function n7({width:i,height:s}){let u=Math.max(2,s*.12),f=Math.min(s*.35,10),h=i*.55;return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[(0,y.jsx)("div",{style:{width:"100%",height:u,borderRadius:u/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:(0,y.jsx)("div",{style:{width:h,height:"100%",borderRadius:u/2,background:"var(--agd-bar)"}})}),(0,y.jsx)("div",{style:{position:"absolute",left:h-f,width:f*2,height:f*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function o7({width:i,height:s}){let u=Math.min(36,s*.15),f=7,h=4,g=Math.min((i-16)/f,(s-u-40)/(h+1));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsxs)("div",{style:{height:u,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[(0,y.jsx)(ue,{w:"40%",h:2}),(0,y.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[(0,y.jsx)("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,y.jsx)("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),(0,y.jsxs)("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[(0,y.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u2039"}),(0,y.jsx)(ue,{w:i*.25,h:2,strong:!0}),(0,y.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${f}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:f*h},(k,T)=>(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:g},children:(0,y.jsx)("div",{style:{width:g*.5,height:g*.5,borderRadius:"50%",background:T===10?"var(--agd-bar)":"transparent"},children:(0,y.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:T===10?1:.25}})})})},T))})]})]})}function l7({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:s*.08,padding:4},children:[(0,y.jsx)("div",{style:{width:"100%",height:s*.2,borderRadius:4,background:"var(--agd-fill)"}}),(0,y.jsx)("div",{style:{width:"70%",height:Math.max(6,s*.1),borderRadius:3,background:"var(--agd-fill)"}}),(0,y.jsx)("div",{style:{width:"90%",height:Math.max(4,s*.06),borderRadius:3,background:"var(--agd-fill)"}}),(0,y.jsx)("div",{style:{width:"50%",height:Math.max(4,s*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function a7({width:i,height:s}){return(0,y.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:(0,y.jsxs)("div",{style:{height:"100%",flex:1,borderRadius:s/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${s*.3}px`,gap:4},children:[(0,y.jsx)(ue,{w:"60%",h:2,strong:!0}),(0,y.jsx)("div",{style:{width:Math.max(6,s*.3),height:Math.max(6,s*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function i7({width:i,height:s}){let u=Math.min(i,s);return(0,y.jsx)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${s}`,fill:"none",children:(0,y.jsx)("path",{d:`M${i/2} ${(s-u)/2+u*.1}l${u*.12} ${u*.25} ${u*.28} ${u*.04}-${u*.2} ${u*.2} ${u*.05} ${u*.28}-${u*.25}-${u*.12}-${u*.25} ${u*.12} ${u*.05}-${u*.28}-${u*.2}-${u*.2} ${u*.28}-${u*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function r7({width:i,height:s}){let u=Math.min(i,s)/2-2;return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${i} ${s}`,fill:"none",children:[(0,y.jsx)("circle",{cx:i/2,cy:s/2,r:u,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),(0,y.jsx)("path",{d:`M${i/2} ${s/2-u}a${u} ${u} 0 0 1 ${u} ${u}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function s7({width:i,height:s}){let u=Math.min(36,s*.25,i*.12),f=Math.max(1,Math.min(3,Math.floor(s/80)));return(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:f},(h,g)=>(0,y.jsxs)("div",{style:{display:"flex",gap:i*.04,alignItems:"flex-start"},children:[(0,y.jsx)(fn,{w:u,h:u,radius:u*.25}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsx)(ue,{w:`${40+g*13%20}%`,h:3,strong:!0}),(0,y.jsx)(ue,{w:`${60+g*17%25}%`,h:2})]})]},g))})}function c7({width:i,height:s}){let u=Math.max(2,Math.min(4,Math.floor(i/120))),f=Math.min(36,s*.25);return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:s*.06,padding:s*.06},children:[(0,y.jsx)(ue,{w:i*.3,h:4,strong:!0}),(0,y.jsx)("div",{style:{display:"flex",gap:i*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:u},(h,g)=>(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,y.jsx)(hl,{size:f}),(0,y.jsx)(ue,{w:i*.12,h:3,strong:!0}),(0,y.jsx)(ue,{w:i*.08,h:2})]},g))})]})}function u7({width:i,height:s}){let u=Math.max(2,Math.min(3,Math.floor(s/80)));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:i*.06,gap:s*.04},children:[(0,y.jsx)(ue,{w:i*.5,h:Math.max(5,s*.04),strong:!0}),(0,y.jsx)(ue,{w:i*.35,h:2}),(0,y.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:s*.03,marginTop:s*.04},children:Array.from({length:u},(f,h)=>(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(ue,{w:Math.min(60,i*.2),h:2}),(0,y.jsx)(fn,{w:"100%",h:Math.min(32,s*.1),radius:4})]},h))}),(0,y.jsx)(fn,{w:"100%",h:Math.min(36,s*.12),radius:6,style:{marginTop:s*.03,background:"var(--agd-bar)"}}),(0,y.jsx)(ue,{w:i*.4,h:2})]})}function d7({width:i,height:s}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:i*.04,gap:s*.03},children:[(0,y.jsx)(ue,{w:i*.4,h:4,strong:!0}),(0,y.jsx)(ue,{w:i*.6,h:2}),(0,y.jsxs)("div",{style:{display:"flex",gap:6,marginTop:s*.03},children:[(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(ue,{w:50,h:2}),(0,y.jsx)(fn,{w:"100%",h:Math.min(28,s*.1),radius:4})]}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(ue,{w:40,h:2}),(0,y.jsx)(fn,{w:"100%",h:Math.min(28,s*.1),radius:4})]})]}),(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(ue,{w:50,h:2}),(0,y.jsx)(fn,{w:"100%",h:Math.min(28,s*.1),radius:4})]}),(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[(0,y.jsx)(ue,{w:60,h:2}),(0,y.jsx)(fn,{w:"100%",h:"100%",radius:4})]}),(0,y.jsx)(fn,{w:Math.min(120,i*.3),h:Math.min(30,s*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var f7={navigation:e8,hero:t8,sidebar:n8,footer:o8,modal:l8,card:a8,text:i8,image:r8,table:s8,list:c8,button:u8,input:d8,form:f8,tabs:h8,avatar:_8,badge:m8,header:p8,section:g8,grid:y8,dropdown:b8,toggle:v8,search:x8,toast:w8,progress:S8,chart:C8,video:k8,tooltip:E8,breadcrumb:T8,pagination:M8,divider:R8,accordion:D8,carousel:O8,pricing:A8,testimonial:N8,cta:z8,alert:L8,banner:B8,stat:$8,stepper:H8,tag:U8,rating:I8,map:j8,timeline:Y8,fileUpload:X8,codeBlock:V8,calendar:q8,notification:Q8,productCard:G8,profile:P8,drawer:W8,popover:Z8,logo:F8,faq:J8,gallery:K8,checkbox:e7,radio:t7,slider:n7,datePicker:o7,skeleton:l7,chip:a7,icon:i7,spinner:r7,feature:s7,team:c7,login:u7,contact:d7};function h7({type:i,width:s,height:u,text:f}){let h=f7[i];return h?(0,y.jsx)("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:(0,y.jsx)(h,{width:s,height:u,text:f})}):(0,y.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:i})})}var _7=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,m7={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-design-mode-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(i)),i.textContent=_7}var te=m7,su=24,U_=5;function Ix(i,s,u,f,h){let g=1/0,k=1/0,T=i.x,M=i.x+i.width,ae=i.x+i.width/2,B=i.y,oe=i.y+i.height,H=i.y+i.height/2,Y=!f,S=Y?[T,M,ae]:[...f.left?[T]:[],...f.right?[M]:[]],V=Y?[B,oe,H]:[...f.top?[B]:[],...f.bottom?[oe]:[]],I=[];for(let at of s)u.has(at.id)||I.push(at);h&&I.push(...h);for(let at of I){let Tt=at.x,Je=at.x+at.width,it=at.x+at.width/2,re=at.y,ye=at.y+at.height,Te=at.y+at.height/2;for(let ne of S)for(let me of[Tt,Je,it]){let vt=me-ne;Math.abs(vt)<U_&&Math.abs(vt)<Math.abs(g)&&(g=vt)}for(let ne of V)for(let me of[re,ye,Te]){let vt=me-ne;Math.abs(vt)<U_&&Math.abs(vt)<Math.abs(k)&&(k=vt)}}let F=Math.abs(g)<U_?g:0,Ee=Math.abs(k)<U_?k:0,Ye=[],Ze=new Set,It=T+F,Vt=M+F,Ce=ae+F,yt=B+Ee,_t=oe+Ee,Xe=H+Ee;for(let at of I){let Tt=at.x,Je=at.x+at.width,it=at.x+at.width/2,re=at.y,ye=at.y+at.height,Te=at.y+at.height/2;for(let ne of[Tt,it,Je])for(let me of[It,Ce,Vt])if(Math.abs(me-ne)<.5){let vt=`x:${Math.round(ne)}`;Ze.has(vt)||(Ze.add(vt),Ye.push({axis:"x",pos:ne}))}for(let ne of[re,Te,ye])for(let me of[yt,Xe,_t])if(Math.abs(me-ne)<.5){let vt=`y:${Math.round(ne)}`;Ze.has(vt)||(Ze.add(vt),Ye.push({axis:"y",pos:ne}))}}return{dx:F,dy:Ee,guides:Ye}}function jx(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function p7({placements:i,onChange:s,activeComponent:u,onActiveComponentChange:f,isDarkMode:h,exiting:g,onInteractionChange:k,className:T,passthrough:M,extraSnapRects:ae,onSelectionChange:B,deselectSignal:oe,onDragMove:H,onDragEnd:Y,clearSignal:S,wireframe:V}){let[I,F]=(0,Ft.useState)(new Set),[Ee,Ye]=(0,Ft.useState)(null),[Ze,It]=(0,Ft.useState)(null),[Vt,Ce]=(0,Ft.useState)(null),[yt,_t]=(0,Ft.useState)([]),[Xe,at]=(0,Ft.useState)(null),[Tt,Je]=(0,Ft.useState)(!1),it=(0,Ft.useRef)(!1),[re,ye]=(0,Ft.useState)(new Set),Te=(0,Ft.useRef)(new Map),ne=(0,Ft.useRef)(null),me=(0,Ft.useRef)(null),vt=(0,Ft.useRef)(i);vt.current=i;let ke=(0,Ft.useRef)(B);ke.current=B;let W=(0,Ft.useRef)(H);W.current=H;let Se=(0,Ft.useRef)(Y);Se.current=Y;let $e=(0,Ft.useRef)(oe);(0,Ft.useEffect)(()=>{oe!==$e.current&&($e.current=oe,F(new Set))},[oe]);let Mt=(0,Ft.useRef)(S);(0,Ft.useEffect)(()=>{if(S!==void 0&&S!==Mt.current){Mt.current=S;let ge=new Set(vt.current.map(qe=>qe.id));ge.size>0&&(ye(ge),F(new Set),me.current=null,ct(()=>{s([]),ye(new Set)},180))}},[S,s]),(0,Ft.useEffect)(()=>{let ge=qe=>{let xe=qe.target;if(!(xe.tagName==="INPUT"||xe.tagName==="TEXTAREA"||xe.isContentEditable)){if((qe.key==="Backspace"||qe.key==="Delete")&&I.size>0){qe.preventDefault();let nt=new Set(I);ye(nt),F(new Set),ct(()=>{s(vt.current.filter(Yt=>!nt.has(Yt.id))),ye(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(qe.key)&&I.size>0){qe.preventDefault();let nt=qe.shiftKey?20:1,Yt=qe.key==="ArrowLeft"?-nt:qe.key==="ArrowRight"?nt:0,qt=qe.key==="ArrowUp"?-nt:qe.key==="ArrowDown"?nt:0;s(i.map(Ot=>I.has(Ot.id)?{...Ot,x:Math.max(0,Ot.x+Yt),y:Math.max(0,Ot.y+qt)}:Ot));return}if(qe.key==="Escape"){u?f(null):I.size>0&&F(new Set);return}}};return document.addEventListener("keydown",ge),()=>document.removeEventListener("keydown",ge)},[I,u,i,s,f]);let En=(0,Ft.useCallback)(ge=>{if(ge.button!==0||M||ge.target.closest(`.${te.placement}`))return;ge.preventDefault(),ge.stopPropagation();let xe=window.scrollY,ie=ge.clientX,nt=ge.clientY;if(u){me.current="place",k?.(!0);let Yt=!1,qt=ie,Ot=nt,Ie=U=>{qt=U.clientX,Ot=U.clientY;let X=Math.abs(qt-ie),G=Math.abs(Ot-nt);if((X>5||G>5)&&(Yt=!0),Yt){let se=Math.min(ie,qt),De=Math.min(nt,Ot),ze=Math.abs(qt-ie),de=Math.abs(Ot-nt);Ye({x:se,y:De,w:ze,h:de}),Ce({x:U.clientX+12,y:U.clientY+12,text:`${Math.round(ze)} \xD7 ${Math.round(de)}`})}},et=U=>{window.removeEventListener("mousemove",Ie),window.removeEventListener("mouseup",et),Ye(null),Ce(null),me.current=null,k?.(!1);let X=Ue[u],G,se,De,ze;Yt?(G=Math.min(ie,qt),se=Math.min(nt,Ot)+xe,De=Math.max(su,Math.abs(qt-ie)),ze=Math.max(su,Math.abs(Ot-nt))):(De=X.width,ze=X.height,G=ie-De/2,se=nt+xe-ze/2),G=Math.max(0,G),se=Math.max(0,se);let de={id:jx(),type:u,x:G,y:se,width:De,height:ze,scrollY:xe,timestamp:Date.now()},Ve=[...i,de];s(Ve),F(new Set([de.id])),f(null)};window.addEventListener("mousemove",Ie),window.addEventListener("mouseup",et)}else{ge.shiftKey||F(new Set),me.current="select";let Yt=!1,qt=Ie=>{let et=Math.abs(Ie.clientX-ie),U=Math.abs(Ie.clientY-nt);if((et>4||U>4)&&(Yt=!0),Yt){let X=Math.min(ie,Ie.clientX),G=Math.min(nt,Ie.clientY);It({x:X,y:G,w:Math.abs(Ie.clientX-ie),h:Math.abs(Ie.clientY-nt)})}},Ot=Ie=>{if(window.removeEventListener("mousemove",qt),window.removeEventListener("mouseup",Ot),me.current=null,Yt){let et=Math.min(ie,Ie.clientX),U=Math.min(nt,Ie.clientY)+xe,X=Math.abs(Ie.clientX-ie),G=Math.abs(Ie.clientY-nt),se=new Set(ge.shiftKey?I:new Set);for(let De of i){let ze=De.y-xe;De.x+De.width>et&&De.x<et+X&&De.y+De.height>U&&De.y<U+G&&se.add(De.id)}F(se)}It(null)};window.addEventListener("mousemove",qt),window.addEventListener("mouseup",Ot)}},[u,M,i,s,I]),en=(0,Ft.useCallback)((ge,qe)=>{if(ge.button!==0)return;let xe=ge.target;if(xe.closest(`.${te.handle}`)||xe.closest(`.${te.deleteButton}`))return;ge.preventDefault(),ge.stopPropagation();let ie;ge.shiftKey?(ie=new Set(I),ie.has(qe)?ie.delete(qe):ie.add(qe)):I.has(qe)?ie=new Set(I):ie=new Set([qe]),F(ie),(ie.size!==I.size||[...ie].some(Ve=>!I.has(Ve)))&&ke.current?.(ie,ge.shiftKey);let Yt=window.scrollY,qt=ge.clientX,Ot=ge.clientY,Ie=new Map;for(let Ve of i)ie.has(Ve.id)&&Ie.set(Ve.id,{x:Ve.x,y:Ve.y});me.current="move",k?.(!0);let et=!1,U=!1,X=i,G=0,se=0,De=new Map;for(let Ve of i)Ie.has(Ve.id)&&De.set(Ve.id,{w:Ve.width,h:Ve.height});let ze=Ve=>{let ft=Ve.clientX-qt,St=Ve.clientY-Ot;if((Math.abs(ft)>2||Math.abs(St)>2)&&(et=!0),!et)return;if(Ve.altKey&&!U){U=!0;let Fe=[];for(let tn of i)Ie.has(tn.id)&&Fe.push({...tn,id:jx(),timestamp:Date.now()});X=[...i,...Fe]}let m=1/0,R=1/0,ee=-1/0,Z=-1/0;for(let[Fe,tn]of Ie){let Tn=De.get(Fe);Tn&&(m=Math.min(m,tn.x+ft),R=Math.min(R,tn.y+St),ee=Math.max(ee,tn.x+ft+Tn.w),Z=Math.max(Z,tn.y+St+Tn.h))}let le={x:m,y:R,width:ee-m,height:Z-R},{dx:we,dy:be,guides:Oe}=Ix(le,X,new Set(Ie.keys()),void 0,ae);_t(Oe);let Ae=ft+we,Ct=St+be;G=Ae,se=Ct,s(X.map(Fe=>{let tn=Ie.get(Fe.id);return tn?{...Fe,x:Math.max(0,tn.x+Ae),y:Math.max(0,tn.y+Ct)}:Fe})),W.current?.(Ae,Ct)},de=()=>{window.removeEventListener("mousemove",ze),window.removeEventListener("mouseup",de),me.current=null,k?.(!1),_t([]),Se.current?.(G,se,et)};window.addEventListener("mousemove",ze),window.addEventListener("mouseup",de)},[I,i,s,k]),jt=(0,Ft.useCallback)((ge,qe,xe)=>{ge.preventDefault(),ge.stopPropagation();let ie=i.find(se=>se.id===qe);if(!ie)return;F(new Set([qe])),me.current="resize",k?.(!0);let nt=ge.clientX,Yt=ge.clientY,qt=ie.width,Ot=ie.height,Ie=ie.x,et=ie.y,U={left:xe.includes("w"),right:xe.includes("e"),top:xe.includes("n"),bottom:xe.includes("s")},X=se=>{let De=se.clientX-nt,ze=se.clientY-Yt,de=qt,Ve=Ot,ft=Ie,St=et;xe.includes("e")&&(de=Math.max(su,qt+De)),xe.includes("w")&&(de=Math.max(su,qt-De),ft=Ie+qt-de),xe.includes("s")&&(Ve=Math.max(su,Ot+ze)),xe.includes("n")&&(Ve=Math.max(su,Ot-ze),St=et+Ot-Ve);let m={x:ft,y:St,width:de,height:Ve},{dx:R,dy:ee,guides:Z}=Ix(m,vt.current,new Set([qe]),U,ae);_t(Z),R!==0&&(U.right?de+=R:U.left&&(ft+=R,de-=R)),ee!==0&&(U.bottom?Ve+=ee:U.top&&(St+=ee,Ve-=ee)),s(vt.current.map(le=>le.id===qe?{...le,x:ft,y:St,width:de,height:Ve}:le)),Ce({x:se.clientX+12,y:se.clientY+12,text:`${Math.round(de)} \xD7 ${Math.round(Ve)}`})},G=()=>{window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",G),Ce(null),me.current=null,k?.(!1),_t([])};window.addEventListener("mousemove",X),window.addEventListener("mouseup",G)},[i,s,k]),In=(0,Ft.useCallback)(ge=>{me.current=null,ye(qe=>{let xe=new Set(qe);return xe.add(ge),xe}),F(qe=>{let xe=new Set(qe);return xe.delete(ge),xe}),ct(()=>{s(vt.current.filter(qe=>qe.id!==ge)),ye(qe=>{let xe=new Set(qe);return xe.delete(ge),xe})},180)},[s]),Pn=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),Fn={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Lo=(0,Ft.useCallback)(ge=>{let qe=i.find(xe=>xe.id===ge);qe&&(it.current=!!qe.text,at(ge),Je(!1))},[i]),ho=(0,Ft.useCallback)(()=>{Xe&&(Je(!0),ct(()=>{at(null),Je(!1)},150))},[Xe]);(0,Ft.useEffect)(()=>{g&&Xe&&ho()},[g]);let Eo=(0,Ft.useCallback)(ge=>{Xe&&(s(i.map(qe=>qe.id===Xe?{...qe,text:ge.trim()||void 0}:qe)),ho())},[Xe,i,s,ho]),cn=typeof window<"u"?window.scrollY:0,Rl=["nw","ne","se","sw"],To=V?"#f97316":"#3c82f7",tt=[{dir:"n",cls:te.edgeN,arrow:(0,vn.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,vn.jsx)("path",{d:"M4 0.5L1 4.5h6z",fill:To})})},{dir:"e",cls:te.edgeE,arrow:(0,vn.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,vn.jsx)("path",{d:"M5.5 4L1.5 1v6z",fill:To})})},{dir:"s",cls:te.edgeS,arrow:(0,vn.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,vn.jsx)("path",{d:"M4 5.5L1 1.5h6z",fill:To})})},{dir:"w",cls:te.edgeW,arrow:(0,vn.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,vn.jsx)("path",{d:"M0.5 4L4.5 1v6z",fill:To})})}];return(0,vn.jsxs)(vn.Fragment,{children:[(0,vn.jsx)("div",{ref:ne,className:`${te.overlay} ${h?"":te.light} ${u?te.placing:""} ${M?te.passthrough:""} ${g?te.overlayExiting:""} ${V?te.wireframe:""}${T?` ${T}`:""}`,"data-feedback-toolbar":!0,onMouseDown:En,children:i.map(ge=>{let qe=I.has(ge.id),xe=La[ge.type]?.label||ge.type,ie=ge.y-cn;return(0,vn.jsxs)("div",{"data-design-placement":ge.id,className:`${te.placement} ${qe?te.selected:""} ${re.has(ge.id)?te.exiting:""}`,style:{left:ge.x,top:ie,width:ge.width,height:ge.height,position:"fixed"},onMouseDown:nt=>en(nt,ge.id),onDoubleClick:()=>Lo(ge.id),children:[(0,vn.jsx)("span",{className:te.placementLabel,children:xe}),(0,vn.jsx)("span",{className:`${te.placementAnnotation} ${ge.text?te.annotationVisible:""}`,children:(ge.text&&Te.current.set(ge.id,ge.text),ge.text||Te.current.get(ge.id)||"")}),(0,vn.jsx)("div",{className:te.placementContent,children:(0,vn.jsx)(h7,{type:ge.type,width:ge.width,height:ge.height,text:ge.text})}),(0,vn.jsx)("div",{className:te.deleteButton,onMouseDown:nt=>nt.stopPropagation(),onClick:()=>In(ge.id),children:"\u2715"}),Rl.map(nt=>(0,vn.jsx)("div",{className:`${te.handle} ${te[`handle${nt.charAt(0).toUpperCase()}${nt.slice(1)}`]}`,onMouseDown:Yt=>jt(Yt,ge.id,nt)},nt)),tt.map(({dir:nt,cls:Yt,arrow:qt})=>(0,vn.jsx)("div",{className:`${te.edgeHandle} ${Yt}`,onMouseDown:Ot=>jt(Ot,ge.id,nt),children:qt},nt))]},ge.id)})}),Xe&&(()=>{let ge=i.find(et=>et.id===Xe);if(!ge)return null;let qe=ge.y-cn,xe=ge.x+ge.width/2,ie=qe-8,nt=qe+ge.height+8,Yt=ie>200,qt=nt<window.innerHeight-100,Ot=Math.max(160,Math.min(window.innerWidth-160,xe)),Ie;return Yt?Ie={left:Ot,bottom:window.innerHeight-ie}:qt?Ie={left:Ot,top:nt}:Ie={left:Ot,top:Math.max(80,window.innerHeight/2-80)},(0,vn.jsx)(F_,{element:La[ge.type]?.label||ge.type,placeholder:Fn[ge.type]||"Label or content text",initialValue:ge.text??"",submitLabel:it.current?"Save":"Set",onSubmit:Eo,onCancel:ho,onDelete:it.current?()=>{Eo("")}:void 0,isExiting:Tt,lightMode:!h,style:Ie})})(),Ee&&(0,vn.jsx)("div",{className:te.drawBox,style:{left:Ee.x,top:Ee.y,width:Ee.w,height:Ee.h},"data-feedback-toolbar":!0}),Ze&&(0,vn.jsx)("div",{className:te.selectBox,style:{left:Ze.x,top:Ze.y,width:Ze.w,height:Ze.h},"data-feedback-toolbar":!0}),Vt&&(0,vn.jsx)("div",{className:te.sizeIndicator,style:{left:Vt.x,top:Vt.y},"data-feedback-toolbar":!0,children:Vt.text}),yt.map((ge,qe)=>(0,vn.jsx)("div",{className:te.guideLine,style:ge.axis==="x"?{position:"fixed",left:ge.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ge.pos-cn,right:0,height:1},"data-feedback-toolbar":!0},`${ge.axis}-${ge.pos}-${qe}`))]})}function g7(i){if(!i)return"";let s=i.scrollTop>2,u=i.scrollTop+i.clientHeight<i.scrollHeight-2;return`${s?te.fadeTop:""} ${u?te.fadeBottom:""}`}var v="currentColor",J="0.5";function y7({type:i}){switch(i){case"navigation":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:v,opacity:".4"}),(0,p.jsx)("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:v,opacity:".25"})]});case"header":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:v,opacity:".35"}),(0,p.jsx)("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:v,opacity:".15"})]});case"hero":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:v,opacity:".35"}),(0,p.jsx)("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:v,strokeWidth:J})]});case"section":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:v,opacity:".3"}),(0,p.jsx)("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:v,opacity:".15"})]});case"sidebar":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:v,opacity:".3"}),(0,p.jsx)("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:v,opacity:".15"})]});case"footer":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:v,opacity:".2"})]});case"modal":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:v,opacity:".3"}),(0,p.jsx)("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:v,strokeWidth:J})]});case"divider":return(0,p.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,p.jsx)("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:v,strokeWidth:"0.5",opacity:".3"})});case"card":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:v,opacity:".04"}),(0,p.jsx)("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:v,opacity:".12"})]});case"text":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:v,opacity:".3"}),(0,p.jsx)("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:v,opacity:".12"})]});case"image":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:v,strokeWidth:".3",opacity:".25"}),(0,p.jsx)("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:v,strokeWidth:".3",opacity:".25"})]});case"video":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:v,strokeWidth:J,fill:v,opacity:".15"})]});case"table":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:v,strokeWidth:".3",opacity:".25"}),(0,p.jsx)("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:v,strokeWidth:".3",opacity:".25"}),(0,p.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:v,strokeWidth:".3",opacity:".25"}),(0,p.jsx)("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:v,strokeWidth:".3",opacity:".25"})]});case"grid":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:v,strokeWidth:J})]});case"list":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:v,opacity:".2"}),(0,p.jsx)("circle",{cx:"3.5",cy:"8",r:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:v,opacity:".2"}),(0,p.jsx)("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:v,opacity:".2"})]});case"chart":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:v,opacity:".2"}),(0,p.jsx)("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:v,opacity:".3"}),(0,p.jsx)("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:v,opacity:".2"})]});case"accordion":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:v,strokeWidth:J})]});case"carousel":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:v,strokeWidth:J,opacity:".35"}),(0,p.jsx)("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:v,strokeWidth:J,opacity:".35"}),(0,p.jsx)("circle",{cx:"8.5",cy:"14",r:".6",fill:v,opacity:".35"}),(0,p.jsx)("circle",{cx:"10",cy:"14",r:".6",fill:v,opacity:".15"}),(0,p.jsx)("circle",{cx:"11.5",cy:"14",r:".6",fill:v,opacity:".15"})]});case"button":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:v,opacity:".25"})]});case"input":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:v,opacity:".12"})]});case"search":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:v,strokeWidth:J}),(0,p.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:v,strokeWidth:J,opacity:".3"}),(0,p.jsx)("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:v,strokeWidth:J,opacity:".3"}),(0,p.jsx)("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:v,opacity:".12"})]});case"form":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:v,strokeWidth:J})]});case"tabs":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:v,strokeWidth:J})]});case"dropdown":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:v,opacity:".2"}),(0,p.jsx)("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:v,strokeWidth:J,opacity:".3"}),(0,p.jsx)("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:v,strokeWidth:J,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:v,strokeWidth:J}),(0,p.jsx)("circle",{cx:"13",cy:"8",r:"2",fill:v,opacity:".3"})]});case"avatar":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("circle",{cx:"10",cy:"8",r:"6",stroke:v,strokeWidth:J}),(0,p.jsx)("circle",{cx:"10",cy:"6.5",r:"2",stroke:v,strokeWidth:J}),(0,p.jsx)("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:v,strokeWidth:J})]});case"badge":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:v,opacity:".25"})]});case"breadcrumb":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:v,opacity:".3"}),(0,p.jsx)("path",{d:"M6.5 7l1 1-1 1",stroke:v,strokeWidth:J,opacity:".2"}),(0,p.jsx)("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:v,opacity:".2"}),(0,p.jsx)("path",{d:"M14 7l1 1-1 1",stroke:v,strokeWidth:J,opacity:".2"}),(0,p.jsx)("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:v,opacity:".15"})]});case"pagination":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:v,opacity:".15",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:v,strokeWidth:J})]});case"progress":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:v,opacity:".2"})]});case"toast":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("circle",{cx:"5",cy:"8",r:"1.5",stroke:v,strokeWidth:J,opacity:".3"}),(0,p.jsx)("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:v,opacity:".12"})]});case"tooltip":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("path",{d:"M9 10l1 2.5 1-2.5",stroke:v,strokeWidth:J})]});case"pricing":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:v,opacity:".1"}),(0,p.jsx)("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:v,opacity:".1"}),(0,p.jsx)("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:v,opacity:".2"})]});case"testimonial":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("text",{x:"4",y:"5.5",fontSize:"4",fill:v,opacity:".2",fontFamily:"serif",children:"\u201C"}),(0,p.jsx)("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:v,opacity:".12"}),(0,p.jsx)("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:v,strokeWidth:J,opacity:".25"}),(0,p.jsx)("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:v,opacity:".15"})]});case"cta":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:v,opacity:".3"}),(0,p.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:v,strokeWidth:J})]});case"alert":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:v,strokeWidth:J,opacity:".3"}),(0,p.jsx)("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:v,strokeWidth:"0.6",opacity:".5"}),(0,p.jsx)("circle",{cx:"6",cy:"9.3",r:".3",fill:v,opacity:".5"}),(0,p.jsx)("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:v,opacity:".2"})]});case"banner":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:v,strokeWidth:J})]});case"stat":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:v,opacity:".3"}),(0,p.jsx)("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:v,opacity:".12"})]});case"stepper":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("circle",{cx:"4",cy:"8",r:"2",fill:v,opacity:".2",stroke:v,strokeWidth:J}),(0,p.jsx)("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:v,strokeWidth:".4",opacity:".3"}),(0,p.jsx)("circle",{cx:"10",cy:"8",r:"2",stroke:v,strokeWidth:J}),(0,p.jsx)("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:v,strokeWidth:".4",opacity:".3"}),(0,p.jsx)("circle",{cx:"16",cy:"8",r:"2",stroke:v,strokeWidth:J})]});case"tag":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:v,strokeWidth:J,opacity:".2"}),(0,p.jsx)("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:v,strokeWidth:J,opacity:".2"})]});case"rating":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:v,opacity:".25"}),(0,p.jsx)("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:v,opacity:".25"}),(0,p.jsx)("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:v,strokeWidth:J,opacity:".25"})]});case"map":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:v,strokeWidth:".3",opacity:".15"}),(0,p.jsx)("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:v,strokeWidth:".3",opacity:".15"}),(0,p.jsx)("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:v,opacity:".15",stroke:v,strokeWidth:J})]});case"timeline":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:v,strokeWidth:".4",opacity:".25"}),(0,p.jsx)("circle",{cx:"5",cy:"4",r:"1.5",fill:v,opacity:".2",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("circle",{cx:"5",cy:"13",r:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:v,opacity:".15"})]});case"fileUpload":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:v,strokeWidth:J,strokeDasharray:"2 1"}),(0,p.jsx)("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:v,strokeWidth:J,opacity:".3"}),(0,p.jsx)("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:v,opacity:".15"})]});case"codeBlock":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("circle",{cx:"4",cy:"4",r:".6",fill:v,opacity:".3"}),(0,p.jsx)("circle",{cx:"5.5",cy:"4",r:".6",fill:v,opacity:".3"}),(0,p.jsx)("circle",{cx:"7",cy:"4",r:".6",fill:v,opacity:".3"}),(0,p.jsx)("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:v,opacity:".2"}),(0,p.jsx)("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:v,opacity:".12"})]});case"calendar":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:v,strokeWidth:".4",opacity:".25"}),(0,p.jsx)("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:v,opacity:".2"}),(0,p.jsx)("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:v,opacity:".2"}),(0,p.jsx)("circle",{cx:"7",cy:"9",r:".6",fill:v,opacity:".2"}),(0,p.jsx)("circle",{cx:"10",cy:"9",r:".6",fill:v,opacity:".2"}),(0,p.jsx)("circle",{cx:"13",cy:"9",r:".6",fill:v,opacity:".3"}),(0,p.jsx)("circle",{cx:"7",cy:"12",r:".6",fill:v,opacity:".2"}),(0,p.jsx)("circle",{cx:"10",cy:"12",r:".6",fill:v,opacity:".2"})]});case"notification":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("circle",{cx:"5.5",cy:"8",r:"2",stroke:v,strokeWidth:J,opacity:".25"}),(0,p.jsx)("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:v,opacity:".12"}),(0,p.jsx)("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:v,opacity:".25"})]});case"productCard":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:v,opacity:".04"}),(0,p.jsx)("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:v,strokeWidth:J})]});case"profile":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("circle",{cx:"10",cy:"5",r:"3",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:v,opacity:".12"})]});case"drawer":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:v,strokeWidth:J,opacity:".15"})]});case"popover":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("path",{d:"M9 11l1 2.5 1-2.5",stroke:v,strokeWidth:J})]});case"logo":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:v,strokeWidth:J}),(0,p.jsx)("path",{d:"M5 9.5l2-4 2 4",stroke:v,strokeWidth:J,opacity:".3"}),(0,p.jsx)("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:v,opacity:".2"}),(0,p.jsx)("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:v,opacity:".12"})]});case"faq":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("text",{x:"2.5",y:"5.5",fontSize:"4",fill:v,opacity:".3",fontWeight:"bold",children:"?"}),(0,p.jsx)("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:v,opacity:".12"}),(0,p.jsx)("text",{x:"2.5",y:"11.5",fontSize:"4",fill:v,opacity:".3",fontWeight:"bold",children:"?"}),(0,p.jsx)("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:v,opacity:".12"})]});case"gallery":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:v,strokeWidth:J})]});case"checkbox":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:v,strokeWidth:J,opacity:".35"})]});case"radio":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("circle",{cx:"10",cy:"8",r:"4",stroke:v,strokeWidth:J}),(0,p.jsx)("circle",{cx:"10",cy:"8",r:"2",fill:v,opacity:".3"})]});case"slider":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("circle",{cx:"12",cy:"8",r:"2.5",stroke:v,strokeWidth:J})]});case"datePicker":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:v,opacity:".2"}),(0,p.jsx)("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:v,opacity:".12"}),(0,p.jsx)("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:v,strokeWidth:J,strokeDasharray:"2 1",opacity:".3"}),(0,p.jsx)("circle",{cx:"6",cy:"10",r:".6",fill:v,opacity:".2"}),(0,p.jsx)("circle",{cx:"10",cy:"10",r:".6",fill:v,opacity:".3"}),(0,p.jsx)("circle",{cx:"14",cy:"10",r:".6",fill:v,opacity:".2"}),(0,p.jsx)("circle",{cx:"6",cy:"13",r:".6",fill:v,opacity:".2"}),(0,p.jsx)("circle",{cx:"10",cy:"13",r:".6",fill:v,opacity:".2"})]});case"skeleton":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:v,opacity:".08"}),(0,p.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:v,opacity:".08"}),(0,p.jsx)("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:v,opacity:".08"})]});case"chip":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:v,opacity:".08",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:v,strokeWidth:J,opacity:".2"}),(0,p.jsx)("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:v,strokeWidth:J,opacity:".2"}),(0,p.jsx)("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:v,strokeWidth:J,opacity:".25"})]});case"icon":return(0,p.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,p.jsx)("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:v,strokeWidth:J,opacity:".3"})});case"spinner":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("circle",{cx:"10",cy:"8",r:"5",stroke:v,strokeWidth:J,opacity:".12"}),(0,p.jsx)("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:v,strokeWidth:J,opacity:".35",strokeLinecap:"round"})]});case"feature":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:v,strokeWidth:J,opacity:".25"}),(0,p.jsx)("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:v,opacity:".12"}),(0,p.jsx)("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:v,opacity:".12"})]});case"team":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("circle",{cx:"5",cy:"5",r:"2.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:v,opacity:".2"}),(0,p.jsx)("circle",{cx:"15",cy:"5",r:"2.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:v,opacity:".2"}),(0,p.jsx)("circle",{cx:"10",cy:"5",r:"2.5",stroke:v,strokeWidth:J,opacity:".5"}),(0,p.jsx)("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:v,opacity:".15"}),(0,p.jsx)("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:v,opacity:".1"})]});case"login":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:v,opacity:".25"}),(0,p.jsx)("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:v,opacity:".2"})]});case"contact":return(0,p.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,p.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:v,opacity:".2"}),(0,p.jsx)("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:v,strokeWidth:J}),(0,p.jsx)("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:v,opacity:".2"})]});default:return null}}function b7({activeType:i,onSelect:s,onDragStart:u,scrollRef:f,fadeClass:h,blankCanvas:g}){return(0,p.jsx)("div",{ref:f,className:`${te.placeScroll} ${h||""}`,children:hw.map(k=>(0,p.jsxs)("div",{className:te.paletteSection,children:[(0,p.jsx)("div",{className:te.paletteSectionTitle,children:k.section}),k.items.map(T=>(0,p.jsxs)("div",{className:`${te.paletteItem} ${i===T.type?te.active:""} ${g?te.wireframe:""}`,onClick:()=>s(T.type),onMouseDown:M=>{M.button===0&&u(T.type,M)},children:[(0,p.jsx)("div",{className:te.paletteItemIcon,children:(0,p.jsx)(y7,{type:T.type})}),(0,p.jsx)("span",{className:te.paletteItemLabel,children:T.label})]},T.type))]},k.section))})}function v7({value:i,suffix:s}){let[u,f]=(0,Gn.useState)(null),[h,g]=(0,Gn.useState)(s),[k,T]=(0,Gn.useState)("up"),M=(0,Gn.useRef)(i),ae=(0,Gn.useRef)(s),B=(0,Gn.useRef)(),oe=u!==null&&h!==s;return(0,Gn.useEffect)(()=>{if(i!==M.current){if(i===0){M.current=i,ae.current=s,f(null);return}T(i>M.current?"up":"down"),f(M.current),g(ae.current),M.current=i,ae.current=s,clearTimeout(B.current),B.current=ct(()=>f(null),250)}else ae.current=s},[i,s]),u===null?(0,p.jsxs)(p.Fragment,{children:[i,s?` ${s}`:""]}):oe?(0,p.jsxs)("span",{className:te.rollingWrap,children:[(0,p.jsxs)("span",{style:{visibility:"hidden"},children:[i," ",s]}),(0,p.jsxs)("span",{className:`${te.rollingNum} ${k==="up"?te.exitUp:te.exitDown}`,children:[u," ",h]},`o${u}-${i}`),(0,p.jsxs)("span",{className:`${te.rollingNum} ${k==="up"?te.enterUp:te.enterDown}`,children:[i," ",s]},`n${i}`)]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("span",{className:te.rollingWrap,children:[(0,p.jsx)("span",{style:{visibility:"hidden"},children:i}),(0,p.jsx)("span",{className:`${te.rollingNum} ${k==="up"?te.exitUp:te.exitDown}`,children:u},`o${u}-${i}`),(0,p.jsx)("span",{className:`${te.rollingNum} ${k==="up"?te.enterUp:te.enterDown}`,children:i},`n${i}`)]}),s?` ${s}`:""]})}function x7({activeType:i,onSelect:s,isDarkMode:u,sectionCount:f,onDetectSections:h,visible:g,onExited:k,placementCount:T,onClearPlacements:M,onDragStart:ae,blankCanvas:B,onBlankCanvasChange:oe,wireframePurpose:H,onWireframePurposeChange:Y,Tooltip:S}){let[V,I]=(0,Gn.useState)(!1),[F,Ee]=(0,Gn.useState)("exit"),[Ye,Ze]=(0,Gn.useState)(!1),[It,Vt]=(0,Gn.useState)(!0),Ce=(0,Gn.useRef)(0),yt=(0,Gn.useRef)(""),_t=(0,Gn.useRef)(0),Xe=(0,Gn.useRef)(),at=(0,Gn.useRef)(null),[Tt,Je]=(0,Gn.useState)("");(0,Gn.useEffect)(()=>(g?(I(!0),clearTimeout(Xe.current),cancelAnimationFrame(_t.current),_t.current=du(()=>{_t.current=du(()=>{Ee("enter")})})):(cancelAnimationFrame(_t.current),Ee("exit"),clearTimeout(Xe.current),Xe.current=ct(()=>{I(!1),k?.()},200)),()=>cancelAnimationFrame(_t.current)),[g]);let it=T>0||f>0,re=T+f;if(re>0&&(Ce.current=re,yt.current=B?re===1?"Component":"Components":re===1?"Change":"Changes"),(0,Gn.useEffect)(()=>{if(it)Ye?Vt(!1):(Vt(!0),Ze(!0),du(()=>{du(()=>{Vt(!1)})}));else{Vt(!0);let Te=ct(()=>Ze(!1),300);return()=>clearTimeout(Te)}},[it]),(0,Gn.useEffect)(()=>{if(!V)return;let Te=at.current;if(!Te)return;let ne=()=>Je(g7(Te));ne(),Te.addEventListener("scroll",ne,{passive:!0});let me=new ResizeObserver(ne);return me.observe(Te),()=>{Te.removeEventListener("scroll",ne),me.disconnect()}},[V]),!V)return null;let ye=[];return T>0&&ye.push("placed"),f>0&&ye.push("captured"),(0,p.jsxs)("div",{className:`${te.palette} ${te[F]} ${u?"":te.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:Te=>Te.stopPropagation(),onMouseDown:Te=>Te.stopPropagation(),onTransitionEnd:Te=>{Te.target===Te.currentTarget&&(g||(clearTimeout(Xe.current),I(!1),Ee("exit"),k?.()))},children:[(0,p.jsxs)("div",{className:te.paletteHeader,children:[(0,p.jsx)("div",{className:te.paletteHeaderTitle,children:"Layout Mode"}),(0,p.jsxs)("div",{className:te.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",(0,p.jsx)("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),(0,p.jsxs)("div",{className:`${te.canvasToggle} ${B?te.active:""}`,onClick:()=>oe(!B),children:[(0,p.jsx)("span",{className:te.canvasToggleIcon,children:(0,p.jsxs)("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[(0,p.jsx)("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),(0,p.jsx)("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,p.jsx)("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,p.jsx)("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,p.jsx)("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,p.jsx)("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,p.jsx)("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,p.jsx)("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,p.jsx)("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,p.jsx)("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),(0,p.jsx)("span",{className:te.canvasToggleLabel,children:"Wireframe New Page"})]}),(0,p.jsx)("div",{className:`${te.wireframePurposeWrap} ${B?"":te.collapsed}`,children:(0,p.jsx)("div",{className:te.wireframePurposeInner,children:(0,p.jsx)("textarea",{className:te.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:H,onChange:Te=>Y(Te.target.value),rows:2})})}),(0,p.jsx)(b7,{activeType:i,onSelect:s,onDragStart:ae,scrollRef:at,fadeClass:Tt,blankCanvas:B}),Ye&&(0,p.jsx)("div",{className:`${te.paletteFooterWrap} ${It?te.footerHidden:""}`,children:(0,p.jsx)("div",{className:te.paletteFooterInner,children:(0,p.jsx)("div",{className:te.paletteFooterInnerContent,children:(0,p.jsxs)("div",{className:te.paletteFooter,children:[(0,p.jsx)("span",{className:te.paletteFooterCount,children:(0,p.jsx)(v7,{value:Ce.current,suffix:yt.current})}),(0,p.jsx)("button",{className:te.paletteFooterClear,onClick:M,children:"Clear"})]})})})})]})}function mu(i){if(i.parentElement)return i.parentElement;let s=i.getRootNode();return s instanceof ShadowRoot?s.host:null}function fl(i,s){let u=i;for(;u;){if(u.matches(s))return u;u=mu(u)}return null}function w7(i,s=4){let u=[],f=i,h=0;for(;f&&h<s;){let g=f.tagName.toLowerCase();if(g==="html"||g==="body")break;let k=g;if(f.id)k=`#${f.id}`;else if(f.className&&typeof f.className=="string"){let M=f.className.split(/\s+/).find(ae=>ae.length>2&&!ae.match(/^[a-z]{1,2}$/)&&!ae.match(/[A-Z0-9]{5,}/));M&&(k=`.${M.split("_")[0]}`)}let T=mu(f);!f.parentElement&&T&&(k=`\u27E8shadow\u27E9 ${k}`),u.unshift(k),f=T,h++}return u.join(" > ")}function fu(i){let s=w7(i);if(i.dataset.element)return{name:i.dataset.element,path:s};let u=i.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(u)){let f=fl(i,"svg");if(f){let h=mu(f);if(h instanceof HTMLElement)return{name:`graphic in ${fu(h).name}`,path:s}}return{name:"graphic element",path:s}}if(u==="svg"){let f=mu(i);if(f?.tagName.toLowerCase()==="button"){let h=f.textContent?.trim();return{name:h?`icon in "${h}" button`:"button icon",path:s}}return{name:"icon",path:s}}if(u==="button"){let f=i.textContent?.trim(),h=i.getAttribute("aria-label");return h?{name:`button [${h}]`,path:s}:{name:f?`button "${f.slice(0,25)}"`:"button",path:s}}if(u==="a"){let f=i.textContent?.trim(),h=i.getAttribute("href");return f?{name:`link "${f.slice(0,25)}"`,path:s}:h?{name:`link to ${h.slice(0,30)}`,path:s}:{name:"link",path:s}}if(u==="input"){let f=i.getAttribute("type")||"text",h=i.getAttribute("placeholder"),g=i.getAttribute("name");return h?{name:`input "${h}"`,path:s}:g?{name:`input [${g}]`,path:s}:{name:`${f} input`,path:s}}if(["h1","h2","h3","h4","h5","h6"].includes(u)){let f=i.textContent?.trim();return{name:f?`${u} "${f.slice(0,35)}"`:u,path:s}}if(u==="p"){let f=i.textContent?.trim();return f?{name:`paragraph: "${f.slice(0,40)}${f.length>40?"...":""}"`,path:s}:{name:"paragraph",path:s}}if(u==="span"||u==="label"){let f=i.textContent?.trim();return f&&f.length<40?{name:`"${f}"`,path:s}:{name:u,path:s}}if(u==="li"){let f=i.textContent?.trim();return f&&f.length<40?{name:`list item: "${f.slice(0,35)}"`,path:s}:{name:"list item",path:s}}if(u==="blockquote")return{name:"blockquote",path:s};if(u==="code"){let f=i.textContent?.trim();return f&&f.length<30?{name:`code: \`${f}\``,path:s}:{name:"code",path:s}}if(u==="pre")return{name:"code block",path:s};if(u==="img"){let f=i.getAttribute("alt");return{name:f?`image "${f.slice(0,30)}"`:"image",path:s}}if(u==="video")return{name:"video",path:s};if(["div","section","article","nav","header","footer","aside","main"].includes(u)){let f=i.className,h=i.getAttribute("role"),g=i.getAttribute("aria-label");if(g)return{name:`${u} [${g}]`,path:s};if(h)return{name:`${h}`,path:s};if(typeof f=="string"&&f){let k=f.split(/[\s_-]+/).map(T=>T.replace(/[A-Z0-9]{5,}.*$/,"")).filter(T=>T.length>2&&!/^[a-z]{1,2}$/.test(T)).slice(0,2);if(k.length>0)return{name:k.join(" "),path:s}}return{name:u==="div"?"container":u,path:s}}return{name:u,path:s}}function lf(i){let s=[],u=i.textContent?.trim();u&&u.length<100&&s.push(u);let f=i.previousElementSibling;if(f){let g=f.textContent?.trim();g&&g.length<50&&s.unshift(`[before: "${g.slice(0,40)}"]`)}let h=i.nextElementSibling;if(h){let g=h.textContent?.trim();g&&g.length<50&&s.push(`[after: "${g.slice(0,40)}"]`)}return s.join(" ")}function I_(i){let s=mu(i);if(!s)return"";let h=(i.getRootNode()instanceof ShadowRoot&&i.parentElement?Array.from(i.parentElement.children):Array.from(s.children)).filter(B=>B!==i&&B instanceof HTMLElement);if(h.length===0)return"";let g=h.slice(0,4).map(B=>{let oe=B.tagName.toLowerCase(),H=B.className,Y="";if(typeof H=="string"&&H){let S=H.split(/\s+/).map(V=>V.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(V=>V.length>2&&!/^[a-z]{1,2}$/.test(V));S&&(Y=`.${S}`)}if(oe==="button"||oe==="a"){let S=B.textContent?.trim().slice(0,15);if(S)return`${oe}${Y} "${S}"`}return`${oe}${Y}`}),T=s.tagName.toLowerCase();if(typeof s.className=="string"&&s.className){let B=s.className.split(/\s+/).map(oe=>oe.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(oe=>oe.length>2&&!/^[a-z]{1,2}$/.test(oe));B&&(T=`.${B}`)}let M=s.children.length,ae=M>g.length+1?` (${M} total in ${T})`:"";return g.join(", ")+ae}function af(i){let s=i.className;return typeof s!="string"||!s?"":s.split(/\s+/).filter(f=>f.length>0).map(f=>{let h=f.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return h?h[1]:f}).filter((f,h,g)=>g.indexOf(f)===h).join(", ")}var _w=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),S7=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),C7=new Set(["input","textarea","select"]),k7=new Set(["img","video","canvas","svg"]),E7=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function j_(i){if(typeof window>"u")return{};let s=window.getComputedStyle(i),u={},f=i.tagName.toLowerCase(),h;S7.has(f)?h=["color","fontSize","fontWeight","fontFamily","lineHeight"]:f==="button"||f==="a"&&i.getAttribute("role")==="button"?h=["backgroundColor","color","padding","borderRadius","fontSize"]:C7.has(f)?h=["backgroundColor","color","padding","borderRadius","fontSize"]:k7.has(f)?h=["width","height","objectFit","borderRadius"]:E7.has(f)?h=["display","padding","margin","gap","backgroundColor"]:h=["color","fontSize","margin","padding","backgroundColor"];for(let g of h){let k=g.replace(/([A-Z])/g,"-$1").toLowerCase(),T=s.getPropertyValue(k);T&&!_w.has(T)&&(u[g]=T)}return u}var T7=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Y_(i){if(typeof window>"u")return"";let s=window.getComputedStyle(i),u=[];for(let f of T7){let h=f.replace(/([A-Z])/g,"-$1").toLowerCase(),g=s.getPropertyValue(h);g&&!_w.has(g)&&u.push(`${h}: ${g}`)}return u.join("; ")}function M7(i){if(!i)return;let s={},u=i.split(";").map(f=>f.trim()).filter(Boolean);for(let f of u){let h=f.indexOf(":");if(h>0){let g=f.slice(0,h).trim(),k=f.slice(h+1).trim();g&&k&&(s[g]=k)}}return Object.keys(s).length>0?s:void 0}function X_(i){let s=[],u=i.getAttribute("role"),f=i.getAttribute("aria-label"),h=i.getAttribute("aria-describedby"),g=i.getAttribute("tabindex"),k=i.getAttribute("aria-hidden");return u&&s.push(`role="${u}"`),f&&s.push(`aria-label="${f}"`),h&&s.push(`aria-describedby="${h}"`),g&&s.push(`tabindex=${g}`),k==="true"&&s.push("aria-hidden"),i.matches("a, button, input, select, textarea, [tabindex]")&&s.push("focusable"),s.join(", ")}function V_(i){let s=[],u=i;for(;u&&u.tagName.toLowerCase()!=="html";){let f=u.tagName.toLowerCase(),h=f;if(u.id)h=`${f}#${u.id}`;else if(u.className&&typeof u.className=="string"){let k=u.className.split(/\s+/).map(T=>T.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(T=>T.length>2);k&&(h=`${f}.${k}`)}let g=mu(u);!u.parentElement&&g&&(h=`\u27E8shadow\u27E9 ${h}`),s.unshift(h),u=g}return s.join(" > ")}var R7=new Set(["nav","header","main","section","article","footer","aside"]),t1={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Yx={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},D7=new Set(["script","style","noscript","link","meta"]),O7=40;function mw(i){let s=i;for(;s&&s!==document.body&&s!==document.documentElement;){let u=window.getComputedStyle(s).position;if(u==="fixed"||u==="sticky")return!0;s=s.parentElement}return!1}function Us(i){let s=i.tagName.toLowerCase();if(["nav","header","footer","main"].includes(s)&&document.querySelectorAll(s).length===1)return s;if(i.id)return`#${CSS.escape(i.id)}`;if(i.className&&typeof i.className=="string"){let h=i.className.split(/\s+/).filter(g=>g.length>0).find(g=>g.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(g)&&!/^[a-z]{1,2}$/.test(g));if(h){let g=`${s}.${CSS.escape(h)}`;if(document.querySelectorAll(g).length===1)return g}}let u=i.parentElement;if(u){let h=Array.from(u.children).indexOf(i)+1;return`${u===document.body?"body":Us(u)} > ${s}:nth-child(${h})`}return s}function J_(i){let s=i.tagName.toLowerCase(),u=i.getAttribute("aria-label");if(u)return u;let f=i.getAttribute("role");if(f&&t1[f])return t1[f];if(Yx[s])return Yx[s];let h=i.querySelector("h1, h2, h3, h4, h5, h6");if(h){let k=h.textContent?.trim();if(k&&k.length<=50)return k;if(k)return k.slice(0,47)+"..."}let{name:g}=fu(i);return g.charAt(0).toUpperCase()+g.slice(1)}function pw(i){let s=i.className;return typeof s!="string"||!s?null:s.split(/\s+/).map(f=>f.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(f=>f.length>2&&!/^[a-z]{1,2}$/.test(f))||null}function gw(i){let s=i.textContent?.trim();if(!s)return null;let u=s.replace(/\s+/g," ");return u.length<=30?u:u.slice(0,30)+"\u2026"}function A7(){let i=document.querySelector("main")||document.body,s=Array.from(i.children),u=s;i!==document.body&&s.length<3&&(u=Array.from(document.body.children));let f=[];return u.forEach((h,g)=>{if(!(h instanceof HTMLElement))return;let k=h.tagName.toLowerCase();if(D7.has(k)||h.hasAttribute("data-feedback-toolbar")||h.closest("[data-feedback-toolbar]"))return;let T=window.getComputedStyle(h);if(T.display==="none"||T.visibility==="hidden")return;let M=h.getBoundingClientRect();if(M.height<O7)return;let ae=R7.has(k),B=h.getAttribute("role")&&t1[h.getAttribute("role")],oe=k==="div"&&M.height>=60;if(!ae&&!B&&!oe)return;let H=window.scrollY,Y=mw(h),S={x:M.x,y:Y?M.y:M.y+H,width:M.width,height:M.height};f.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:J_(h),tagName:k,selector:Us(h),role:h.getAttribute("role"),className:pw(h),textSnippet:gw(h),originalRect:S,currentRect:{...S},originalIndex:g,isFixed:Y})}),f}function N7(i){let s=window.scrollY,u=i.getBoundingClientRect(),f=mw(i),h={x:u.x,y:f?u.y:u.y+s,width:u.width,height:u.height},g=i.parentElement,k=0;return g&&(k=Array.from(g.children).indexOf(i)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:J_(i),tagName:i.tagName.toLowerCase(),selector:Us(i),role:i.getAttribute("role"),className:pw(i),textSnippet:gw(i),originalRect:h,currentRect:{...h},originalIndex:k,isFixed:f}}var Xx={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Vx=["nw","n","ne","e","se","s","sw","w"],q_=24,qx=16,Q_=5;function Qx(i,s,u,f){let h=1/0,g=1/0,k=i.x,T=i.x+i.width,M=i.x+i.width/2,ae=i.y,B=i.y+i.height,oe=i.y+i.height/2,H=[];for(let Ce of s)u.has(Ce.id)||H.push(Ce.currentRect);f&&H.push(...f);for(let Ce of H){let yt=Ce.x,_t=Ce.x+Ce.width,Xe=Ce.x+Ce.width/2,at=Ce.y,Tt=Ce.y+Ce.height,Je=Ce.y+Ce.height/2;for(let it of[k,T,M])for(let re of[yt,_t,Xe]){let ye=re-it;Math.abs(ye)<Q_&&Math.abs(ye)<Math.abs(h)&&(h=ye)}for(let it of[ae,B,oe])for(let re of[at,Tt,Je]){let ye=re-it;Math.abs(ye)<Q_&&Math.abs(ye)<Math.abs(g)&&(g=ye)}}let Y=Math.abs(h)<Q_?h:0,S=Math.abs(g)<Q_?g:0,V=[],I=new Set,F=k+Y,Ee=T+Y,Ye=M+Y,Ze=ae+S,It=B+S,Vt=oe+S;for(let Ce of H){let yt=Ce.x,_t=Ce.x+Ce.width,Xe=Ce.x+Ce.width/2,at=Ce.y,Tt=Ce.y+Ce.height,Je=Ce.y+Ce.height/2;for(let it of[yt,Xe,_t])for(let re of[F,Ye,Ee])if(Math.abs(re-it)<.5){let ye=`x:${Math.round(it)}`;I.has(ye)||(I.add(ye),V.push({axis:"x",pos:it}))}for(let it of[at,Je,Tt])for(let re of[Ze,Vt,It])if(Math.abs(re-it)<.5){let ye=`y:${Math.round(it)}`;I.has(ye)||(I.add(ye),V.push({axis:"y",pos:it}))}}return{dx:Y,dy:S,guides:V}}var z7=new Set(["script","style","noscript","link","meta","br","hr"]);function Gx(i){let s=i;for(;s&&s!==document.body&&s!==document.documentElement;){if(s.closest("[data-feedback-toolbar]"))return null;if(z7.has(s.tagName.toLowerCase())){s=s.parentElement;continue}let u=s.getBoundingClientRect();if(u.width>=qx&&u.height>=qx)return s;s=s.parentElement}return null}function L7({rearrangeState:i,onChange:s,isDarkMode:u,exiting:f,className:h,blankCanvas:g,extraSnapRects:k,onSelectionChange:T,deselectSignal:M,onDragMove:ae,onDragEnd:B,clearSignal:oe}){let{sections:H}=i,Y=(0,bt.useRef)(i);Y.current=i;let[S,V]=(0,bt.useState)(new Set),[I,F]=(0,bt.useState)(!1),Ee=(0,bt.useRef)(oe);(0,bt.useEffect)(()=>{oe!==void 0&&oe!==Ee.current&&(Ee.current=oe,H.length>0&&F(!0))},[oe,H.length]);let Ye=(0,bt.useRef)(M);(0,bt.useEffect)(()=>{M!==Ye.current&&(Ye.current=M,V(new Set))},[M]);let[Ze,It]=(0,bt.useState)(null),[Vt,Ce]=(0,bt.useState)(!1),yt=(0,bt.useRef)(!1),_t=(0,bt.useCallback)(U=>{let X=H.find(G=>G.id===U);X&&(yt.current=!!X.note,It(U),Ce(!1))},[H]),Xe=(0,bt.useCallback)(()=>{Ze&&(Ce(!0),ct(()=>{It(null),Ce(!1)},150))},[Ze]),at=(0,bt.useCallback)(U=>{Ze&&(s({...i,sections:H.map(X=>X.id===Ze?{...X,note:U.trim()||void 0}:X)}),Xe())},[Ze,H,i,s,Xe]);(0,bt.useEffect)(()=>{f&&Ze&&Xe()},[f]);let[Tt,Je]=(0,bt.useState)(new Set),it=(0,bt.useRef)(new Map),[re,ye]=(0,bt.useState)(null),[Te,ne]=(0,bt.useState)(null),[me,vt]=(0,bt.useState)([]),[ke,W]=(0,bt.useState)(0),Se=(0,bt.useRef)(null),$e=(0,bt.useRef)(new Set),Mt=(0,bt.useRef)(new Map),[En,en]=(0,bt.useState)(new Map),[jt,In]=(0,bt.useState)(new Map),Pn=(0,bt.useRef)(new Set),Fn=(0,bt.useRef)(new Map),Lo=(0,bt.useRef)(T);Lo.current=T;let ho=(0,bt.useRef)(ae);ho.current=ae;let Eo=(0,bt.useRef)(B);Eo.current=B,(0,bt.useEffect)(()=>{g&&V(new Set)},[g]);let[cn,Rl]=(0,bt.useState)(()=>!i.sections.some(U=>{let X=U.originalRect,G=U.currentRect;return Math.abs(X.x-G.x)>1||Math.abs(X.y-G.y)>1||Math.abs(X.width-G.width)>1||Math.abs(X.height-G.height)>1}));(0,bt.useEffect)(()=>{if(!cn){let U=ct(()=>Rl(!0),380);return()=>clearTimeout(U)}},[]);let To=(0,bt.useRef)(new Set);(0,bt.useEffect)(()=>{To.current=new Set(H.map(U=>U.selector))},[H]),(0,bt.useEffect)(()=>{let U=()=>W(window.scrollY);return U(),window.addEventListener("scroll",U,{passive:!0}),window.addEventListener("resize",U,{passive:!0}),()=>{window.removeEventListener("scroll",U),window.removeEventListener("resize",U)}},[]),(0,bt.useEffect)(()=>{let U=X=>{if(Se.current){ye(null);return}let G=document.elementFromPoint(X.clientX,X.clientY);if(!G){ye(null);return}if(G.closest("[data-feedback-toolbar]")){ye(null);return}if(G.closest("[data-design-placement]")){ye(null);return}if(G.closest("[data-annotation-popup]")){ye(null);return}let se=Gx(G);if(!se){ye(null);return}for(let ze of To.current)try{let de=document.querySelector(ze);if(de&&(de===se||se.contains(de))){ye(null);return}}catch{}let De=se.getBoundingClientRect();ye({x:De.x,y:De.y,w:De.width,h:De.height})};return document.addEventListener("mousemove",U,{passive:!0}),()=>document.removeEventListener("mousemove",U)},[H]),(0,bt.useEffect)(()=>{let U=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=U}},[]),(0,bt.useEffect)(()=>{let U=X=>{if(Se.current||X.button!==0)return;let G=X.target;if(!G||G.closest("[data-feedback-toolbar]")||G.closest("[data-design-placement]")||G.closest("[data-annotation-popup]"))return;let se=Gx(G),De=!1;if(se)for(let de of To.current)try{let Ve=document.querySelector(de);if(Ve&&(Ve===se||se.contains(Ve))){De=!0;break}}catch{}let ze=!!(X.shiftKey||X.metaKey||X.ctrlKey);if(se&&!De){X.preventDefault(),X.stopPropagation();let de=N7(se),Ve=[...H,de],ft=[...i.originalOrder,de.id];s({...i,sections:Ve,originalOrder:ft});let St=new Set([de.id]);V(St),Lo.current?.(St,ze),ye(null);let m=X.clientX,R=X.clientY,ee={x:de.currentRect.x,y:de.currentRect.y},Z=de.originalRect,le=!1,we=0,be=0;Se.current="move";let Oe=Ct=>{let Fe=Ct.clientX-m,tn=Ct.clientY-R;if(!le&&(Math.abs(Fe)>2||Math.abs(tn)>2)&&(le=!0),!le)return;let Tn={x:ee.x+Fe,y:ee.y+tn,width:de.currentRect.width,height:de.currentRect.height},lo=Qx(Tn,Ve,new Set([de.id]),k);vt(lo.guides);let Jn=Fe+lo.dx,ao=tn+lo.dy;we=Jn,be=ao;let Bo=document.querySelector(`[data-rearrange-section="${de.id}"]`);Bo&&(Bo.style.transform=`translate(${Jn}px, ${ao}px)`),en(new Map([[de.id,{x:ee.x+Jn,y:ee.y+ao,width:de.currentRect.width,height:de.currentRect.height}]])),ho.current?.(Jn,ao)},Ae=()=>{window.removeEventListener("mousemove",Oe),window.removeEventListener("mouseup",Ae),Se.current=null,vt([]),en(new Map);let Ct=document.querySelector(`[data-rearrange-section="${de.id}"]`);Ct&&(Ct.style.transform=""),le&&s({...i,sections:Ve.map(Fe=>Fe.id===de.id?{...Fe,currentRect:{...Fe.currentRect,x:Math.max(0,ee.x+we),y:Math.max(0,ee.y+be)}}:Fe),originalOrder:ft}),Eo.current?.(we,be,le)};window.addEventListener("mousemove",Oe),window.addEventListener("mouseup",Ae)}else if(De&&se){X.preventDefault();for(let de of H)try{let Ve=document.querySelector(de.selector);if(Ve&&Ve===se){let ft=new Set([de.id]);V(ft),Lo.current?.(ft,ze);return}}catch{}ze||(V(new Set),Lo.current?.(new Set,!1))}else ze||(V(new Set),Lo.current?.(new Set,!1))};return document.addEventListener("mousedown",U,!0),()=>document.removeEventListener("mousedown",U,!0)},[H,i,s]),(0,bt.useEffect)(()=>{let U=X=>{let G=X.target;if(!(G.tagName==="INPUT"||G.tagName==="TEXTAREA"||G.isContentEditable)){if((X.key==="Backspace"||X.key==="Delete")&&S.size>0){X.preventDefault();let se=new Set(S);Je(De=>{let ze=new Set(De);for(let de of se)ze.add(de);return ze}),V(new Set),ct(()=>{let De=Y.current;s({...De,sections:De.sections.filter(ze=>!se.has(ze.id)),originalOrder:De.originalOrder.filter(ze=>!se.has(ze))}),Je(ze=>{let de=new Set(ze);for(let Ve of se)de.delete(Ve);return de})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(X.key)&&S.size>0){X.preventDefault();let se=X.shiftKey?20:1,De=X.key==="ArrowLeft"?-se:X.key==="ArrowRight"?se:0,ze=X.key==="ArrowUp"?-se:X.key==="ArrowDown"?se:0;s({...i,sections:H.map(de=>S.has(de.id)?{...de,currentRect:{...de.currentRect,x:Math.max(0,de.currentRect.x+De),y:Math.max(0,de.currentRect.y+ze)}}:de)});return}X.key==="Escape"&&S.size>0&&V(new Set)}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[S,H,i,s]);let tt=(0,bt.useCallback)((U,X)=>{if(U.button!==0)return;let G=U.target;if(G.closest(`.${te.handle}`)||G.closest(`.${te.deleteButton}`))return;U.preventDefault(),U.stopPropagation();let se;U.shiftKey||U.metaKey||U.ctrlKey?(se=new Set(S),se.has(X)?se.delete(X):se.add(X)):S.has(X)?se=new Set(S):se=new Set([X]),V(se),(se.size!==S.size||[...se].some(le=>!S.has(le)))&&Lo.current?.(se,!!(U.shiftKey||U.metaKey||U.ctrlKey));let ze=U.clientX,de=U.clientY,Ve=new Map;for(let le of H)se.has(le.id)&&Ve.set(le.id,{x:le.currentRect.x,y:le.currentRect.y});Se.current="move";let ft=!1,St=0,m=0,R=new Map;for(let le of H)if(se.has(le.id)){let we=document.querySelector(`[data-rearrange-section="${le.id}"]`);R.set(le.id,{outlineEl:we,curW:le.currentRect.width,curH:le.currentRect.height})}let ee=le=>{let we=le.clientX-ze,be=le.clientY-de;if(we===0&&be===0)return;ft=!0;let Oe=1/0,Ae=1/0,Ct=-1/0,Fe=-1/0;for(let[ao,{curW:Bo,curH:jn}]of R){let An=Ve.get(ao);if(!An)continue;let Mo=An.x+we,_a=An.y+be;Oe=Math.min(Oe,Mo),Ae=Math.min(Ae,_a),Ct=Math.max(Ct,Mo+Bo),Fe=Math.max(Fe,_a+jn)}let tn=Qx({x:Oe,y:Ae,width:Ct-Oe,height:Fe-Ae},H,se,k),Tn=we+tn.dx,lo=be+tn.dy;St=Tn,m=lo,vt(tn.guides);for(let[,{outlineEl:ao}]of R)ao&&(ao.style.transform=`translate(${Tn}px, ${lo}px)`);let Jn=new Map;for(let[ao,{curW:Bo,curH:jn}]of R){let An=Ve.get(ao);if(An){let Mo={x:Math.max(0,An.x+Tn),y:Math.max(0,An.y+lo),width:Bo,height:jn};Jn.set(ao,Mo)}}en(Jn),ho.current?.(Tn,lo)},Z=le=>{window.removeEventListener("mousemove",ee),window.removeEventListener("mouseup",Z),Se.current=null,vt([]),en(new Map);for(let[,{outlineEl:we}]of R)we&&(we.style.transform="");if(ft){let we=le.clientX-ze,be=le.clientY-de;if(Math.abs(we)<5&&Math.abs(be)<5)s({...i,sections:H.map(Oe=>{let Ae=Ve.get(Oe.id);return Ae?{...Oe,currentRect:{...Oe.currentRect,x:Ae.x,y:Ae.y}}:Oe})});else{s({...i,sections:H.map(Oe=>{let Ae=Ve.get(Oe.id);return Ae?{...Oe,currentRect:{...Oe.currentRect,x:Math.max(0,Ae.x+St),y:Math.max(0,Ae.y+m)}}:Oe})}),Eo.current?.(St,m,!0);return}}Eo.current?.(0,0,!1)};window.addEventListener("mousemove",ee),window.addEventListener("mouseup",Z)},[S,H,i,s]),ge=(0,bt.useCallback)((U,X,G)=>{U.preventDefault(),U.stopPropagation();let se=H.find(Z=>Z.id===X);if(!se)return;V(new Set([X])),Se.current="resize";let De=U.clientX,ze=U.clientY,de={...se.currentRect},Ve=se.originalRect,ft=de.width/de.height,St={...de},m=document.querySelector(`[data-rearrange-section="${X}"]`),R=Z=>{let le=Z.clientX-De,we=Z.clientY-ze,be=de.x,Oe=de.y,Ae=de.width,Ct=de.height;if(G.includes("e")&&(Ae=Math.max(q_,de.width+le)),G.includes("w")&&(Ae=Math.max(q_,de.width-le),be=de.x+de.width-Ae),G.includes("s")&&(Ct=Math.max(q_,de.height+we)),G.includes("n")&&(Ct=Math.max(q_,de.height-we),Oe=de.y+de.height-Ct),Z.shiftKey)if(G.length===2){let tn=Math.abs(Ae-de.width),Tn=Math.abs(Ct-de.height);tn>Tn?Ct=Ae/ft:Ae=Ct*ft,G.includes("w")&&(be=de.x+de.width-Ae),G.includes("n")&&(Oe=de.y+de.height-Ct)}else G==="e"||G==="w"?Ct=Ae/ft:Ae=Ct*ft,G==="w"&&(be=de.x+de.width-Ae),G==="n"&&(Oe=de.y+de.height-Ct);St={x:be,y:Oe,width:Ae,height:Ct},m&&(m.style.left=`${be}px`,m.style.top=`${Oe-ke}px`,m.style.width=`${Ae}px`,m.style.height=`${Ct}px`),ne({x:Z.clientX+12,y:Z.clientY+12,text:`${Math.round(Ae)} \xD7 ${Math.round(Ct)}`}),en(new Map([[X,St]]))},ee=()=>{window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",ee),ne(null),Se.current=null,en(new Map),s({...i,sections:H.map(Z=>Z.id===X?{...Z,currentRect:St}:Z)})};window.addEventListener("mousemove",R),window.addEventListener("mouseup",ee)},[H,i,s,ke]),qe=(0,bt.useCallback)(U=>{Je(X=>{let G=new Set(X);return G.add(U),G}),V(X=>{let G=new Set(X);return G.delete(U),G}),ct(()=>{let X=Y.current;s({...X,sections:X.sections.filter(G=>G.id!==U),originalOrder:X.originalOrder.filter(G=>G!==U)}),Je(G=>{let se=new Set(G);return se.delete(U),se})},180)},[s]),xe=U=>{let X=U.originalRect,G=U.currentRect;return Math.abs(X.x-G.x)>1||Math.abs(X.y-G.y)>1||Math.abs(X.width-G.width)>1||Math.abs(X.height-G.height)>1},ie=U=>{let X=U.originalRect,G=U.currentRect;return Math.abs(X.x-G.x)>1||Math.abs(X.y-G.y)>1},nt=U=>{let X=U.originalRect,G=U.currentRect;return Math.abs(X.width-G.width)>1||Math.abs(X.height-G.height)>1};for(let U of H)Mt.current.has(U.id)||(ie(U)?Mt.current.set(U.id,"move"):nt(U)&&Mt.current.set(U.id,"resize"));for(let U of Mt.current.keys())H.some(X=>X.id===U)||Mt.current.delete(U);let Yt=H.filter(U=>{try{if(Tt.has(U.id)||S.has(U.id))return!0;let X=document.querySelector(U.selector);if(!X)return!1;let G=X.getBoundingClientRect(),se=U.originalRect;return Math.abs(G.width-se.width)+Math.abs(G.height-se.height)<200}catch{return!1}}),qt=Yt.filter(U=>xe(U)),Ot=Yt.filter(U=>!xe(U)),Ie=new Set(qt.map(U=>U.id));for(let U of $e.current)Ie.has(U)||$e.current.delete(U);let et=[...Ie].sort().join(",");for(let U of qt)Fn.current.set(U.id,{currentRect:U.currentRect,originalRect:U.originalRect,isFixed:U.isFixed});return(0,bt.useEffect)(()=>{let U=Pn.current;Pn.current=Ie;let X=new Map;for(let G of U)if(!Ie.has(G)){if(!H.some(De=>De.id===G))continue;let se=Fn.current.get(G);se&&(X.set(G,{orig:se.originalRect,target:se.currentRect,isFixed:se.isFixed}),Fn.current.delete(G))}if(X.size>0){In(se=>{let De=new Map(se);for(let[ze,de]of X)De.set(ze,de);return De});let G=ct(()=>{In(se=>{let De=new Map(se);for(let ze of X.keys())De.delete(ze);return De})},250);return()=>clearTimeout(G)}},[et,H]),(0,Zt.jsxs)(Zt.Fragment,{children:[(0,Zt.jsxs)("div",{className:`${te.rearrangeOverlay} ${u?"":te.light} ${f?te.overlayExiting:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,children:[re&&(0,Zt.jsx)("div",{className:te.hoverHighlight,style:{left:re.x,top:re.y,width:re.w,height:re.h}}),Ot.map(U=>{let X=U.currentRect,G=U.isFixed?X.y:X.y-ke,se=Xx,De=S.has(U.id);return(0,Zt.jsxs)("div",{"data-rearrange-section":U.id,className:`${te.sectionOutline} ${De?te.selected:""} ${I||f||Tt.has(U.id)?te.exiting:""}`,style:{left:X.x,top:G,width:X.width,height:X.height,borderColor:se.border,backgroundColor:se.bg,...cn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ze=>tt(ze,U.id),onDoubleClick:()=>_t(U.id),children:[(0,Zt.jsx)("span",{className:te.sectionLabel,style:{backgroundColor:se.pill},children:U.label}),(0,Zt.jsx)("span",{className:`${te.sectionAnnotation} ${U.note?te.annotationVisible:""}`,children:(U.note&&it.current.set(U.id,U.note),U.note||it.current.get(U.id)||"")}),(0,Zt.jsxs)("span",{className:te.sectionDimensions,children:[Math.round(X.width)," \xD7 ",Math.round(X.height)]}),(0,Zt.jsx)("div",{className:te.deleteButton,onMouseDown:ze=>ze.stopPropagation(),onClick:()=>qe(U.id),children:"\u2715"}),Vx.map(ze=>(0,Zt.jsx)("div",{className:`${te.handle} ${te[`handle${ze.charAt(0).toUpperCase()}${ze.slice(1)}`]}`,onMouseDown:de=>ge(de,U.id,ze)},ze))]},U.id)}),qt.map(U=>{let X=U.currentRect,G=U.isFixed?X.y:X.y-ke,se=S.has(U.id),De=ie(U),ze=nt(U);if(g&&!se)return null;let Ve=!$e.current.has(U.id);return Ve&&$e.current.add(U.id),(0,Zt.jsxs)("div",{"data-rearrange-section":U.id,className:`${te.ghostOutline} ${se?te.selected:""} ${I||f||Tt.has(U.id)?te.exiting:""}`,style:{left:X.x,top:G,width:X.width,height:X.height,...cn?{}:{opacity:0,animation:"none",transition:"none"},...Ve?{}:{animation:"none"}},onMouseDown:ft=>tt(ft,U.id),onDoubleClick:()=>_t(U.id),children:[(0,Zt.jsx)("span",{className:te.sectionLabel,style:{backgroundColor:Xx.pill},children:U.label}),(0,Zt.jsx)("span",{className:`${te.sectionAnnotation} ${U.note?te.annotationVisible:""}`,children:(U.note&&it.current.set(U.id,U.note),U.note||it.current.get(U.id)||"")}),(0,Zt.jsxs)("span",{className:te.sectionDimensions,children:[Math.round(X.width)," \xD7 ",Math.round(X.height)]}),(0,Zt.jsx)("div",{className:te.deleteButton,onMouseDown:ft=>ft.stopPropagation(),onClick:()=>qe(U.id),children:"\u2715"}),Vx.map(ft=>(0,Zt.jsx)("div",{className:`${te.handle} ${te[`handle${ft.charAt(0).toUpperCase()}${ft.slice(1)}`]}`,onMouseDown:St=>ge(St,U.id,ft)},ft)),(0,Zt.jsx)("span",{className:te.ghostBadge,children:(()=>{let ft=Mt.current.get(U.id);if(De&&ze){let[St,m]=ft==="resize"?["Resize","Move"]:["Move","Resize"];return(0,Zt.jsxs)(Zt.Fragment,{children:["Suggested ",St," ",(0,Zt.jsxs)("span",{className:te.ghostBadgeExtra,children:["& ",m]})]})}return`Suggested ${ze?"Resize":"Move"}`})()})]},U.id)})]}),!g&&(()=>{let U=[];for(let X of qt){let G=En.get(X.id);U.push({id:X.id,orig:X.originalRect,target:G||X.currentRect,isFixed:X.isFixed,isSelected:S.has(X.id),isExiting:Tt.has(X.id)})}for(let[X,G]of En)if(!U.some(se=>se.id===X)){let se=H.find(De=>De.id===X);se&&U.push({id:X,orig:se.originalRect,target:G,isFixed:se.isFixed,isSelected:S.has(X)})}for(let[X,G]of jt)U.some(se=>se.id===X)||U.push({id:X,orig:G.orig,target:G.target,isFixed:G.isFixed,isSelected:!1,isExiting:!0});return U.length===0?null:(0,Zt.jsxs)("svg",{className:`${te.connectorSvg} ${I||f?te.connectorExiting:""}`,children:[U.map(({id:X,orig:G,target:se,isFixed:De,isSelected:ze,isExiting:de})=>{let Ve=G.x+G.width/2,ft=(De?G.y:G.y-ke)+G.height/2,St=se.x+se.width/2,m=(De?se.y:se.y-ke)+se.height/2,R=St-Ve,ee=m-ft,Z=Math.sqrt(R*R+ee*ee);if(Z<2)return null;let le=Math.min(1,Z/40),we=Math.min(Z*.3,60),be=Z>0?-ee/Z:0,Oe=Z>0?R/Z:0,Ae=(Ve+St)/2+be*we,Ct=(ft+m)/2+Oe*we,Fe=En.has(X),tn=Fe||ze?1:.4,Tn=Fe||ze?1:.5;return(0,Zt.jsxs)("g",{className:de?te.connectorExiting:"",children:[(0,Zt.jsx)("path",{className:te.connectorLine,d:`M ${Ve} ${ft} Q ${Ae} ${Ct} ${St} ${m}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:tn*le}),(0,Zt.jsx)("circle",{className:te.connectorDot,cx:Ve,cy:ft,r:4*le,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Tn*le,filter:"url(#connDotShadow)"}),(0,Zt.jsx)("circle",{className:te.connectorDot,cx:St,cy:m,r:4*le,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Tn*le,filter:"url(#connDotShadow)"})]},`conn-${X}`)}),(0,Zt.jsx)("defs",{children:(0,Zt.jsx)("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,Zt.jsx)("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),Ze&&(()=>{let U=H.find(m=>m.id===Ze);if(!U)return null;let X=U.currentRect,G=U.isFixed?X.y:X.y-ke,se=X.x+X.width/2,De=G-8,ze=G+X.height+8,de=De>200,Ve=ze<window.innerHeight-100,ft=Math.max(160,Math.min(window.innerWidth-160,se)),St;return de?St={left:ft,bottom:window.innerHeight-De}:Ve?St={left:ft,top:ze}:St={left:ft,top:Math.max(80,window.innerHeight/2-80)},(0,Zt.jsx)(F_,{element:U.label,placeholder:"Add a note about this section",initialValue:U.note??"",submitLabel:yt.current?"Save":"Set",onSubmit:at,onCancel:Xe,onDelete:yt.current?()=>{at("")}:void 0,isExiting:Vt,lightMode:!u,style:St})})(),Te&&(0,Zt.jsx)("div",{className:te.sizeIndicator,style:{left:Te.x,top:Te.y},"data-feedback-toolbar":!0,children:Te.text}),me.map((U,X)=>(0,Zt.jsx)("div",{className:te.guideLine,style:U.axis==="x"?{position:"fixed",left:U.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:U.pos-ke,width:"100vw",height:1}},`${U.axis}-${U.pos}-${X}`))]})}var n1=new Set(["script","style","noscript","link","meta","br","hr"]);function B7(){let i=document.querySelector("main")||document.body,s=[],u=Array.from(i.children),f=i!==document.body&&u.length<3?Array.from(document.body.children):u;for(let h of f){if(!(h instanceof HTMLElement)||n1.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;let g=window.getComputedStyle(h);if(g.display==="none"||g.visibility==="hidden")continue;let k=h.getBoundingClientRect();if(!(k.height<10||k.width<10)){s.push({label:J_(h),selector:Us(h),top:k.top,bottom:k.bottom,left:k.left,right:k.right,area:k.width*k.height});for(let T of Array.from(h.children)){if(!(T instanceof HTMLElement)||n1.has(T.tagName.toLowerCase())||T.hasAttribute("data-feedback-toolbar"))continue;let M=window.getComputedStyle(T);if(M.display==="none"||M.visibility==="hidden")continue;let ae=T.getBoundingClientRect();ae.height<10||ae.width<10||s.push({label:J_(T),selector:Us(T),top:ae.top,bottom:ae.bottom,left:ae.left,right:ae.right,area:ae.width*ae.height})}}}return s}function $7(i){let s=window.scrollY;return i.map(({label:u,selector:f,rect:h})=>{let g=h.y-s;return{label:u,selector:f,top:g,bottom:g+h.height,left:h.x,right:h.x+h.width,area:h.width*h.height}})}function H7(i){let s=window.scrollY,u=i.y-s,f=i.x;return{top:u,bottom:u+i.height,left:f,right:f+i.width,area:i.width*i.height}}function o1(i,s){let u=s?$7(s):B7(),f=H7(i),h=null,g=null,k=null,T=null,M=null;for(let S of u){if(Math.abs(S.left-f.left)<2&&Math.abs(S.top-f.top)<2&&Math.abs(S.right-S.left-i.width)<2&&Math.abs(S.bottom-S.top-i.height)<2)continue;S.left<=f.left+2&&S.right>=f.right-2&&S.top<=f.top+2&&S.bottom>=f.bottom-2&&S.area>f.area*1.5&&(!M||S.area<M._area)&&(M={label:S.label,selector:S.selector,_area:S.area});let V=f.right>S.left+5&&f.left<S.right-5,I=f.bottom>S.top+5&&f.top<S.bottom-5;if(V&&S.bottom<=f.top+5){let F=Math.round(f.top-S.bottom);(!h||F<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,F),_dist:F})}if(V&&S.top>=f.bottom-5){let F=Math.round(S.top-f.bottom);(!g||F<g._dist)&&(g={label:S.label,selector:S.selector,gap:Math.max(0,F),_dist:F})}if(I&&S.right<=f.left+5){let F=Math.round(f.left-S.right);(!k||F<k._dist)&&(k={label:S.label,selector:S.selector,gap:Math.max(0,F),_dist:F})}if(I&&S.left>=f.right-5){let F=Math.round(S.left-f.right);(!T||F<T._dist)&&(T={label:S.label,selector:S.selector,gap:Math.max(0,F),_dist:F})}}let ae=window.innerWidth,B=window.innerHeight,oe=I7(i,ae),H=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,Y=U7(f,i,ae,B,M?{label:M.label,selector:M.selector,_area:M._area}:null,u);return{above:H(h),below:H(g),left:H(k),right:H(T),alignment:oe,containedIn:M?{label:M.label,selector:M.selector}:null,outOfBounds:Y}}function U7(i,s,u,f,h,g){let k={},T=!1,M=[];if(i.left<-2&&M.push("left"),i.right>u+2&&M.push("right"),i.top<-2&&M.push("top"),i.bottom>f+2&&M.push("bottom"),M.length>0&&(k.viewport=M,T=!0),h){let ae=g.find(B=>B.label===h.label&&B.selector===h.selector&&Math.abs(B.area-h._area)<10);if(ae){let B=[];i.left<ae.left-2&&B.push("left"),i.right>ae.right+2&&B.push("right"),i.top<ae.top-2&&B.push("top"),i.bottom>ae.bottom+2&&B.push("bottom"),B.length>0&&(k.container={label:h.label,edges:B},T=!0)}}return T?k:null}function I7(i,s){if(i.width/s>.85)return"full-width";let f=i.x+i.width/2,h=s/2,g=f-h,k=s*.08;return Math.abs(g)<k?"center":g<0?"left":"right"}function yw(i){switch(i){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function bw(i,s={}){let u=[];i.above&&u.push(`Below \`${i.above.label}\`${i.above.gap>0?` (${i.above.gap}px gap)`:""}`),i.below&&u.push(`Above \`${i.below.label}\`${i.below.gap>0?` (${i.below.gap}px gap)`:""}`),s.includeLeftRight&&(i.left&&u.push(`Right of \`${i.left.label}\`${i.left.gap>0?` (${i.left.gap}px gap)`:""}`),i.right&&u.push(`Left of \`${i.right.label}\`${i.right.gap>0?` (${i.right.gap}px gap)`:""}`));let f=yw(i.alignment);return i.containedIn?u.push(`${f.charAt(0).toUpperCase()+f.slice(1)} in \`${i.containedIn.label}\``):u.push(`${f.charAt(0).toUpperCase()+f.slice(1)} in page`),s.includePixelRef&&s.pixelRef&&u.push(`Pixel ref: \`${s.pixelRef}\``),i.outOfBounds&&(i.outOfBounds.viewport&&u.push(`**Outside viewport** (${i.outOfBounds.viewport.join(", ")} edge${i.outOfBounds.viewport.length>1?"s":""})`),i.outOfBounds.container&&u.push(`**Outside \`${i.outOfBounds.container.label}\`** (${i.outOfBounds.container.edges.join(", ")} edge${i.outOfBounds.container.edges.length>1?"s":""})`)),u}function j7(i,s,u){let f=[];i.above&&f.push(`below \`${i.above.label}\``),i.below&&f.push(`above \`${i.below.label}\``),i.left&&f.push(`right of \`${i.left.label}\``),i.right&&f.push(`left of \`${i.right.label}\``),i.containedIn&&f.push(`inside \`${i.containedIn.label}\``),f.push(yw(i.alignment)),i.outOfBounds?.viewport&&f.push(`**outside viewport** (${i.outOfBounds.viewport.join(", ")})`),i.outOfBounds?.container&&f.push(`**outside \`${i.outOfBounds.container.label}\`** (${i.outOfBounds.container.edges.join(", ")})`);let h=u?`, ${Math.round(u.width)}\xD7${Math.round(u.height)}px`:"";return`at (${Math.round(s.x)}, ${Math.round(s.y)})${h}: ${f.join(", ")}`}var Px=15;function Wx(i){if(i.length<2)return[];let s=[],u=new Set;for(let f=0;f<i.length;f++){if(u.has(f))continue;let h=[f];for(let g=f+1;g<i.length;g++)u.has(g)||Math.abs(i[f].rect.y-i[g].rect.y)<Px&&h.push(g);if(h.length>=2){let g=h.map(M=>i[M]);g.sort((M,ae)=>M.rect.x-ae.rect.x);let k=[];for(let M=0;M<g.length-1;M++)k.push(Math.round(g[M+1].rect.x-(g[M].rect.x+g[M].rect.width)));let T=Math.round(g.reduce((M,ae)=>M+ae.rect.y,0)/g.length);s.push({labels:g.map(M=>M.label),type:"row",sharedEdge:T,gaps:k,avgGap:k.length?Math.round(k.reduce((M,ae)=>M+ae,0)/k.length):0}),h.forEach(M=>u.add(M))}}for(let f=0;f<i.length;f++){if(u.has(f))continue;let h=[f];for(let g=f+1;g<i.length;g++)u.has(g)||Math.abs(i[f].rect.x-i[g].rect.x)<Px&&h.push(g);if(h.length>=2){let g=h.map(M=>i[M]);g.sort((M,ae)=>M.rect.y-ae.rect.y);let k=[];for(let M=0;M<g.length-1;M++)k.push(Math.round(g[M+1].rect.y-(g[M].rect.y+g[M].rect.height)));let T=Math.round(g.reduce((M,ae)=>M+ae.rect.x,0)/g.length);s.push({labels:g.map(M=>M.label),type:"column",sharedEdge:T,gaps:k,avgGap:k.length?Math.round(k.reduce((M,ae)=>M+ae,0)/k.length):0}),h.forEach(M=>u.add(M))}}return s}function Y7(i){if(i.length<2)return[];let s=Wx(i.map(k=>({label:k.label,rect:k.originalRect}))),u=Wx(i.map(k=>({label:k.label,rect:k.currentRect}))),f=[],h=new Set;for(let k of s){let T=new Set(k.labels),M=null,ae=0;for(let B of u){let oe=B.labels.filter(H=>T.has(H)).length;oe>=2&&oe>ae&&(M=B,ae=oe)}if(M){let B=M.labels.filter(H=>T.has(H)),oe=B.join(", ");if(M.type!==k.type){let H=k.type==="row"?"y":"x",Y=M.type==="row"?"y":"x";f.push(`**${oe}**: ${k.type} (${H}\u2248${k.sharedEdge}, ${k.avgGap}px gaps) \u2192 ${M.type} (${Y}\u2248${M.sharedEdge}, ${M.avgGap}px gaps)`)}else if(Math.abs(k.sharedEdge-M.sharedEdge)>20||Math.abs(k.avgGap-M.avgGap)>5){let H=k.type==="row"?"y":"x",Y=Math.abs(k.sharedEdge-M.sharedEdge)>20?` ${H}: ${k.sharedEdge} \u2192 ${M.sharedEdge}`:"",S=Math.abs(k.avgGap-M.avgGap)>5?` gaps: ${k.avgGap}px \u2192 ${M.avgGap}px`:"";f.push(`**${oe}**: ${k.type} shifted \u2014${Y}${S}`)}B.forEach(H=>h.add(H))}else{let B=k.labels.join(", "),oe=k.type==="row"?"y":"x";f.push(`**${B}**: ${k.type} (${oe}\u2248${k.sharedEdge}) dissolved`),k.labels.forEach(H=>h.add(H))}}for(let k of u){if(k.labels.every(ae=>h.has(ae))||k.labels.filter(ae=>!h.has(ae)).length<2)continue;if(!s.some(ae=>ae.labels.filter(oe=>k.labels.includes(oe)).length>=2)){let ae=k.type==="row"?"y":"x";f.push(`**${k.labels.join(", ")}**: new ${k.type} (${ae}\u2248${k.sharedEdge}, ${k.avgGap}px gaps)`),k.labels.forEach(B=>h.add(B))}}let g=i.filter(k=>!h.has(k.label));if(g.length>=2){let k={};for(let T of g){let M=Math.round(T.currentRect.x/5)*5;(k[M]??(k[M]=[])).push(T.label)}for(let[T,M]of Object.entries(k))M.length>=2&&f.push(`**${M.join(", ")}**: shared left edge at x\u2248${T}`)}return f}function vw(i){if(typeof document>"u")return{viewport:i,contentArea:null};let s=[],u=new Set,f=T=>{u.has(T)||T instanceof HTMLElement&&(T.hasAttribute("data-feedback-toolbar")||n1.has(T.tagName.toLowerCase())||(u.add(T),s.push(T)))},h=document.querySelector("main");h&&f(h);let g=document.querySelector("[role='main']");g&&f(g);for(let T of Array.from(document.body.children))if(f(T),T.children){for(let M of Array.from(T.children))if(f(M),M.children)for(let ae of Array.from(M.children))f(ae)}let k=null;for(let T of s){let M=T.getBoundingClientRect();if(M.height<50)continue;let ae=getComputedStyle(T);if(ae.maxWidth&&ae.maxWidth!=="none"&&ae.maxWidth!=="0px"){(!k||M.width<k.rect.width)&&(k={el:T,rect:M});continue}!k&&M.width<i.width-20&&M.width>100&&(k={el:T,rect:M})}if(k){let{el:T,rect:M}=k;return{viewport:i,contentArea:{width:Math.round(M.width),left:Math.round(M.left),right:Math.round(M.right),centerX:Math.round(M.left+M.width/2),selector:Us(T)}}}return{viewport:i,contentArea:null}}function X7(i){if(typeof document>"u")return null;let s=document.querySelector(i);if(!s?.parentElement)return null;let u=getComputedStyle(s.parentElement),f={parentDisplay:u.display,parentSelector:Us(s.parentElement)};return u.display.includes("flex")&&(f.flexDirection=u.flexDirection),u.display.includes("grid")&&u.gridTemplateColumns!=="none"&&(f.gridCols=u.gridTemplateColumns),u.gap&&u.gap!=="normal"&&u.gap!=="0px"&&(f.gap=u.gap),f}function xw(i,s){let u=s.contentArea,f=u?u.width:s.viewport.width,h=u?u.left:0,g=u?u.centerX:Math.round(s.viewport.width/2),k=Math.round(i.x-h),T=Math.round(h+f-(i.x+i.width)),M=(i.width/f*100).toFixed(1),ae=i.x+i.width/2,B=Math.abs(ae-g)<20,oe=i.width/f>.95,H=[];return oe?H.push("`width: 100%` of container"):H.push(`left \`${k}px\` in container, right \`${T}px\`, width \`${M}%\` (\`${Math.round(i.width)}px\`)`),B&&!oe&&H.push("centered \u2014 `margin-inline: auto`"),H.join(" \u2014 ")}function ww(i){let{viewport:s,contentArea:u}=i,f=`### Reference Frame
`;if(f+=`- Viewport: \`${s.width}\xD7${s.height}px\`
`,u){let h=u;f+=`- Content area: \`${h.width}px\` wide, left edge at \`x=${h.left}\`, right at \`x=${h.right}\` (\`${h.selector}\`)
`,f+=`- Pixel \u2192 CSS translation:
`,f+=`  - **Horizontal position in container**: \`element.x - ${h.left}\` \u2192 use as \`margin-left\` or \`left\`
`,f+=`  - **Width as % of container**: \`element.width / ${h.width} \xD7 100\` \u2192 use as \`width: X%\`
`,f+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` \u2192 use as `margin-top` or `gap`\n",f+=`  - **Centered**: if \`|element.centerX - ${h.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else f+=`- No distinct content container \u2014 elements positioned relative to full viewport
`,f+=`- Pixel \u2192 CSS translation:
`,f+=`  - **Width as % of viewport**: \`element.width / ${s.width} \xD7 100\` \u2192 use as \`width: X%\`
`,f+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(s.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return f+=`
`,f}function V7(i){let s=X7(i);if(!s)return null;let u=`\`${s.parentDisplay}\``;return s.flexDirection&&(u+=`, flex-direction: \`${s.flexDirection}\``),s.gridCols&&(u+=`, grid-template-columns: \`${s.gridCols}\``),s.gap&&(u+=`, gap: \`${s.gap}\``),`Parent: ${u} (\`${s.parentSelector}\`)`}function Zx(i,s,u,f="standard"){if(i.length===0)return"";let h=[...i].sort((I,F)=>Math.abs(I.y-F.y)<20?I.x-F.x:I.y-F.y),g="";if(u?.blankCanvas?(g+=`## Wireframe: New Page

`,u.wireframePurpose&&(g+=`> **Purpose:** ${u.wireframePurpose}
>
`),g+=`> ${i.length} component${i.length!==1?"s":""} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):g+=`## Design Layout

> ${i.length} component${i.length!==1?"s":""} placed

`,f==="compact")return g+=`### Components
`,h.forEach((I,F)=>{let Ee=La[I.type]?.label||I.type;g+=`${F+1}. **${Ee}** \u2014 \`${Math.round(I.width)}\xD7${Math.round(I.height)}px\` at \`(${Math.round(I.x)}, ${Math.round(I.y)})\`
`}),g;let k=vw(s);g+=ww(k),g+=`### Components
`,h.forEach((I,F)=>{let Ee=La[I.type]?.label||I.type,Ye={x:I.x,y:I.y,width:I.width,height:I.height};g+=`${F+1}. **${Ee}** \u2014 \`${Math.round(I.width)}\xD7${Math.round(I.height)}px\` at \`(${Math.round(I.x)}, ${Math.round(I.y)})\`
`;let Ze=o1(Ye),Vt=bw(Ze,{includeLeftRight:f==="detailed"||f==="forensic"});for(let yt of Vt)g+=`   - ${yt}
`;let Ce=xw(Ye,k);Ce&&(g+=`   - CSS: ${Ce}
`)}),g+=`
### Layout Analysis
`;let T=[];for(let I of h){let F=T.find(Ee=>Math.abs(Ee.y-I.y)<30);F?F.items.push(I):T.push({y:I.y,items:[I]})}if(T.sort((I,F)=>I.y-F.y),T.forEach((I,F)=>{I.items.sort((Ye,Ze)=>Ye.x-Ze.x);let Ee=I.items.map(Ye=>La[Ye.type]?.label||Ye.type);if(I.items.length===1){let Ze=I.items[0].width>s.width*.8;g+=`- Row ${F+1} (y\u2248${Math.round(I.y)}): ${Ee[0]}${Ze?" \u2014 full width":""}
`}else g+=`- Row ${F+1} (y\u2248${Math.round(I.y)}): ${Ee.join(" | ")} \u2014 ${I.items.length} items side by side
`}),f==="detailed"||f==="forensic"){g+=`
### Spacing & Gaps
`;for(let I=0;I<h.length-1;I++){let F=h[I],Ee=h[I+1],Ye=La[F.type]?.label||F.type,Ze=La[Ee.type]?.label||Ee.type,It=Math.round(Ee.y-(F.y+F.height)),Vt=Math.round(Ee.x-(F.x+F.width));Math.abs(F.y-Ee.y)<30?g+=`- ${Ye} \u2192 ${Ze}: \`${Vt}px\` horizontal gap
`:g+=`- ${Ye} \u2192 ${Ze}: \`${It}px\` vertical gap
`}if(f==="forensic"&&h.length>2){g+=`
### All Pairwise Gaps
`;for(let I=0;I<h.length;I++)for(let F=I+1;F<h.length;F++){let Ee=h[I],Ye=h[F],Ze=La[Ee.type]?.label||Ee.type,It=La[Ye.type]?.label||Ye.type,Vt=Math.round(Ye.y-(Ee.y+Ee.height)),Ce=Math.round(Ye.x-(Ee.x+Ee.width));g+=`- ${Ze} \u2194 ${It}: h=\`${Ce}px\` v=\`${Vt}px\`
`}}f==="forensic"&&(g+=`
### Z-Order (placement order)
`,i.forEach((I,F)=>{let Ee=La[I.type]?.label||I.type;g+=`${F}. ${Ee} at \`(${Math.round(I.x)}, ${Math.round(I.y)})\`
`}))}g+=`
### Suggested Implementation
`;let M=h.some(I=>I.type==="navigation"),ae=h.some(I=>I.type==="hero"),B=h.some(I=>I.type==="sidebar"),oe=h.some(I=>I.type==="footer"),H=h.filter(I=>I.type==="card"),Y=h.filter(I=>I.type==="form"),S=h.filter(I=>I.type==="table"),V=h.filter(I=>I.type==="modal");if(M&&(g+=`- Top navigation bar with logo + nav links + CTA
`),ae&&(g+=`- Hero section with heading, subtext, and call-to-action
`),B&&(g+=`- Sidebar layout \u2014 use CSS Grid with sidebar + main content area
`),H.length>1?g+=`- ${H.length}-column card grid \u2014 use CSS Grid or Flexbox
`:H.length===1&&(g+=`- Card component with image + content area
`),Y.length>0&&(g+=`- ${Y.length} form${Y.length>1?"s":""} \u2014 add proper labels, validation, and submit handling
`),S.length>0&&(g+=`- Data table \u2014 consider sortable columns and pagination
`),V.length>0&&(g+=`- Modal dialog \u2014 add overlay backdrop and focus trapping
`),oe&&(g+=`- Multi-column footer with links
`),f==="detailed"||f==="forensic"){if(g+=`
### CSS Suggestions
`,B){let I=h.find(F=>F.type==="sidebar");g+=`- \`display: grid; grid-template-columns: ${Math.round(I.width)}px 1fr;\`
`}if(H.length>1){let I=Math.round(H[0].width);g+=`- \`display: grid; grid-template-columns: repeat(${H.length}, ${I}px); gap: 16px;\`
`}M&&(g+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return g}function Fx(i,s="standard",u){let{sections:f}=i,h=[];for(let B of f){let oe=B.originalRect,H=B.currentRect,Y=Math.abs(oe.x-H.x)>1||Math.abs(oe.y-H.y)>1,S=Math.abs(oe.width-H.width)>1||Math.abs(oe.height-H.height)>1;if(!Y&&!S){s==="forensic"&&h.push({section:B,posMoved:!1,sizeChanged:!1});continue}h.push({section:B,posMoved:Y,sizeChanged:S})}if(h.length===0||s!=="forensic"&&h.every(B=>!B.posMoved&&!B.sizeChanged))return"";let g=`## Suggested Layout Changes

`,k=u?u.width:typeof window<"u"?window.innerWidth:0,T=u?u.height:typeof window<"u"?window.innerHeight:0,M=vw({width:k,height:T});s!=="compact"&&(g+=ww(M)),s==="forensic"&&(g+=`> Detected at: \`${new Date(i.detectedAt).toISOString()}\`
`,g+=`> Total sections: ${f.length}

`);let ae=B=>f.map(oe=>({label:oe.label,selector:oe.selector,rect:B==="original"?oe.originalRect:oe.currentRect}));g+=`**Changes:**
`;for(let{section:B,posMoved:oe,sizeChanged:H}of h){let Y=B.originalRect,S=B.currentRect;if(!oe&&!H){g+=`- ${B.label} \u2014 unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`;continue}if(s==="compact"){oe&&H?g+=`- Suggested: move **${B.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`:oe?g+=`- Suggested: move **${B.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:g+=`- Suggested: resize **${B.label}** to ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`;continue}if(oe&&H?g+=`- Suggested: move and resize **${B.label}**
`:oe?g+=`- Suggested: move **${B.label}**
`:g+=`- Suggested: resize **${B.label}** from ${Math.round(Y.width)}\xD7${Math.round(Y.height)}px to ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`,oe){let I=o1(Y,ae("original")),F=o1(S,ae("current")),Ee=H?{width:Y.width,height:Y.height}:void 0;g+=`  - Currently ${j7(I,{x:Y.x,y:Y.y},Ee)}
`;let Ye=H?{width:S.width,height:S.height}:void 0,Ze=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,It=Ye?`, ${Math.round(Ye.width)}\xD7${Math.round(Ye.height)}px`:"",Ce=bw(F,{includeLeftRight:s==="detailed"||s==="forensic"});if(Ce.length>0){g+=`  - Suggested position ${Ze}${It}: ${Ce[0]}
`;for(let _t=1;_t<Ce.length;_t++)g+=`    ${Ce[_t]}
`}else g+=`  - Suggested position ${Ze}${It}
`;let yt=xw(S,M);yt&&(g+=`  - CSS: ${yt}
`)}let V=V7(B.selector);if(V&&(g+=`  - ${V}
`),g+=`  - Selector: \`${B.selector}\`
`,s==="detailed"||s==="forensic"){let I=B.className?`${B.tagName}.${B.className.split(" ")[0]}`:B.tagName;I!==B.selector&&(g+=`  - Element: \`${I}\`
`),B.role&&(g+=`  - Role: \`${B.role}\`
`),s==="forensic"&&B.textSnippet&&(g+=`  - Text: "${B.textSnippet}"
`)}s==="forensic"&&(g+=`  - Original rect: \`{ x: ${Math.round(Y.x)}, y: ${Math.round(Y.y)}, w: ${Math.round(Y.width)}, h: ${Math.round(Y.height)} }\`
`,g+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(s!=="compact"){let B=h.filter(H=>H.posMoved).map(H=>({label:H.section.label,originalRect:H.section.originalRect,currentRect:H.section.currentRect})),oe=Y7(B);if(oe.length>0){g+=`
### Layout Summary
`;for(let H of oe)g+=`- ${H}
`}}if(s!=="compact"&&f.length>1){g+=`
### All Sections (current positions)
`;let B=[...f].sort((oe,H)=>Math.abs(oe.currentRect.y-H.currentRect.y)<20?oe.currentRect.x-H.currentRect.x:oe.currentRect.y-H.currentRect.y);for(let oe of B){let H=oe.currentRect,Y=Math.abs(H.x-oe.originalRect.x)>1||Math.abs(H.y-oe.originalRect.y)>1||Math.abs(H.width-oe.originalRect.width)>1||Math.abs(H.height-oe.originalRect.height)>1;g+=`- ${oe.label}: \`${Math.round(H.width)}\xD7${Math.round(H.height)}px\` at \`(${Math.round(H.x)}, ${Math.round(H.y)})\`${Y?" \u2190 suggested":""}
`}}return g}var l1="feedback-annotations-",Sw=7;function K_(i){return`${l1}${i}`}function Vg(i){if(typeof window>"u")return[];try{let s=localStorage.getItem(K_(i));if(!s)return[];let u=JSON.parse(s),f=Date.now()-Sw*24*60*60*1e3;return u.filter(h=>!h.timestamp||h.timestamp>f)}catch{return[]}}function Cw(i,s){if(!(typeof window>"u"))try{localStorage.setItem(K_(i),JSON.stringify(s))}catch{}}function q7(){let i=new Map;if(typeof window>"u")return i;try{let s=Date.now()-Sw*24*60*60*1e3;for(let u=0;u<localStorage.length;u++){let f=localStorage.key(u);if(f?.startsWith(l1)){let h=f.slice(l1.length),g=localStorage.getItem(f);if(g){let T=JSON.parse(g).filter(M=>!M.timestamp||M.timestamp>s);T.length>0&&i.set(h,T)}}}}catch{}return i}function rf(i,s,u){let f=s.map(h=>({...h,_syncedTo:u}));Cw(i,f)}var r1="agentation-design-";function Q7(i){if(typeof window>"u")return[];try{let s=localStorage.getItem(`${r1}${i}`);return s?JSON.parse(s):[]}catch{return[]}}function G7(i,s){if(!(typeof window>"u"))try{localStorage.setItem(`${r1}${i}`,JSON.stringify(s))}catch{}}function P7(i){if(!(typeof window>"u"))try{localStorage.removeItem(`${r1}${i}`)}catch{}}var s1="agentation-rearrange-";function W7(i){if(typeof window>"u")return null;try{let s=localStorage.getItem(`${s1}${i}`);return s?JSON.parse(s):null}catch{return null}}function Z7(i,s){if(!(typeof window>"u"))try{localStorage.setItem(`${s1}${i}`,JSON.stringify(s))}catch{}}function F7(i){if(!(typeof window>"u"))try{localStorage.removeItem(`${s1}${i}`)}catch{}}var c1="agentation-wireframe-";function J7(i){if(typeof window>"u")return null;try{let s=localStorage.getItem(`${c1}${i}`);return s?JSON.parse(s):null}catch{return null}}function Jx(i,s){if(!(typeof window>"u"))try{localStorage.setItem(`${c1}${i}`,JSON.stringify(s))}catch{}}function G_(i){if(!(typeof window>"u"))try{localStorage.removeItem(`${c1}${i}`)}catch{}}var kw="agentation-session-";function u1(i){return`${kw}${i}`}function K7(i){if(typeof window>"u")return null;try{return localStorage.getItem(u1(i))}catch{return null}}function qg(i,s){if(!(typeof window>"u"))try{localStorage.setItem(u1(i),s)}catch{}}function e9(i){if(!(typeof window>"u"))try{localStorage.removeItem(u1(i))}catch{}}var a1=`${kw}toolbar-hidden`;function t9(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(a1)==="1"}catch{return!1}}function n9(i){if(!(typeof window>"u"))try{i?sessionStorage.setItem(a1,"1"):sessionStorage.removeItem(a1)}catch{}}async function Qg(i,s){let u=await fetch(`${i}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:s})});if(!u.ok)throw new Error(`Failed to create session: ${u.status}`);return u.json()}async function Kx(i,s){let u=await fetch(`${i}/sessions/${s}`);if(!u.ok)throw new Error(`Failed to get session: ${u.status}`);return u.json()}async function cu(i,s,u){let f=await fetch(`${i}/sessions/${s}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!f.ok)throw new Error(`Failed to sync annotation: ${f.status}`);return f.json()}async function ew(i,s,u){let f=await fetch(`${i}/annotations/${s}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!f.ok)throw new Error(`Failed to update annotation: ${f.status}`);return f.json()}async function Xr(i,s){let u=await fetch(`${i}/annotations/${s}`,{method:"DELETE"});if(!u.ok)throw new Error(`Failed to delete annotation: ${u.status}`)}var ln={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},tw=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),nw=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],o9=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function l9(i){let s=i?.mode??"filtered",u=tw;if(i?.skipExact){let f=i.skipExact instanceof Set?i.skipExact:new Set(i.skipExact);u=new Set([...tw,...f])}return{maxComponents:i?.maxComponents??6,maxDepth:i?.maxDepth??30,mode:s,skipExact:u,skipPatterns:i?.skipPatterns?[...nw,...i.skipPatterns]:nw,userPatterns:i?.userPatterns??o9,filter:i?.filter}}function a9(i){return i.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function i9(i,s=10){let u=new Set,f=i,h=0;for(;f&&h<s;)f.className&&typeof f.className=="string"&&f.className.split(/\s+/).forEach(g=>{if(g.length>1){let k=g.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();k.length>1&&u.add(k)}}),f=f.parentElement,h++;return u}function r9(i,s){let u=a9(i);for(let f of s){if(f===u)return!0;let h=u.split("-").filter(k=>k.length>2),g=f.split("-").filter(k=>k.length>2);for(let k of h)for(let T of g)if(k===T||k.includes(T)||T.includes(k))return!0}return!1}function s9(i,s,u,f){if(u.filter)return u.filter(i,s);switch(u.mode){case"all":return!0;case"filtered":return!(u.skipExact.has(i)||u.skipPatterns.some(h=>h.test(i)));case"smart":return u.skipExact.has(i)||u.skipPatterns.some(h=>h.test(i))?!1:!!(f&&r9(i,f)||u.userPatterns.some(h=>h.test(i)));default:return!0}}var uu=null,c9=new WeakMap;function Gg(i){return Object.keys(i).some(s=>s.startsWith("__reactFiber$")||s.startsWith("__reactInternalInstance$")||s.startsWith("__reactProps$"))}function u9(){if(uu!==null)return uu;if(typeof document>"u")return!1;if(document.body&&Gg(document.body))return uu=!0,!0;let i=["#root","#app","#__next","[data-reactroot]"];for(let s of i){let u=document.querySelector(s);if(u&&Gg(u))return uu=!0,!0}if(document.body){for(let s of document.body.children)if(Gg(s))return uu=!0,!0}return uu=!1,!1}var sf={map:c9};function d9(i){return Object.keys(i).find(u=>u.startsWith("__reactFiber$")||u.startsWith("__reactInternalInstance$"))||null}function f9(i){let s=d9(i);return s?i[s]:null}function zs(i){return i?i.displayName?i.displayName:i.name?i.name:null:null}function h9(i){let{tag:s,type:u,elementType:f}=i;if(s===ln.HostComponent||s===ln.HostText||s===ln.HostHoistable||s===ln.HostSingleton||s===ln.Fragment||s===ln.Mode||s===ln.Profiler||s===ln.DehydratedFragment||s===ln.HostRoot||s===ln.HostPortal||s===ln.ScopeComponent||s===ln.OffscreenComponent||s===ln.LegacyHiddenComponent||s===ln.CacheComponent||s===ln.TracingMarkerComponent||s===ln.Throw||s===ln.ViewTransitionComponent||s===ln.ActivityComponent)return null;if(s===ln.ForwardRef){let h=f;if(h?.render){let g=zs(h.render);if(g)return g}return h?.displayName?h.displayName:zs(u)}if(s===ln.MemoComponent||s===ln.SimpleMemoComponent){let h=f;if(h?.type){let g=zs(h.type);if(g)return g}return h?.displayName?h.displayName:zs(u)}if(s===ln.ContextProvider){let h=u;return h?._context?.displayName?`${h._context.displayName}.Provider`:null}if(s===ln.ContextConsumer){let h=u;return h?.displayName?`${h.displayName}.Consumer`:null}if(s===ln.LazyComponent){let h=f;return h?._status===1&&h._result?zs(h._result):null}return s===ln.SuspenseComponent||s===ln.SuspenseListComponent?null:s===ln.IncompleteClassComponent||s===ln.IncompleteFunctionComponent||s===ln.FunctionComponent||s===ln.ClassComponent||s===ln.IndeterminateComponent?zs(u):null}function _9(i){return i.length<=2||i.length<=3&&i===i.toLowerCase()}function m9(i,s){let u=l9(s),f=u.mode==="all";if(f){let M=sf.map.get(i);if(M!==void 0)return M}if(!u9()){let M={path:null,components:[]};return f&&sf.map.set(i,M),M}let h=u.mode==="smart"?i9(i):void 0,g=[];try{let M=f9(i),ae=0;for(;M&&ae<u.maxDepth&&g.length<u.maxComponents;){let B=h9(M);B&&!_9(B)&&s9(B,ae,u,h)&&g.push(B),M=M.return,ae++}}catch{let M={path:null,components:[]};return f&&sf.map.set(i,M),M}if(g.length===0){let M={path:null,components:[]};return f&&sf.map.set(i,M),M}let T={path:g.slice().reverse().map(M=>`<${M}>`).join(" "),components:g};return f&&sf.map.set(i,T),T}var cf={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function p9(i){if(!i||typeof i!="object")return null;let s=Object.keys(i),u=s.find(g=>g.startsWith("__reactFiber$"));if(u)return i[u]||null;let f=s.find(g=>g.startsWith("__reactInternalInstance$"));if(f)return i[f]||null;let h=s.find(g=>{if(!g.startsWith("__react"))return!1;let k=i[g];return k&&typeof k=="object"&&"_debugSource"in k});return h&&i[h]||null}function ff(i){if(!i.type||typeof i.type=="string")return null;if(typeof i.type=="object"||typeof i.type=="function"){let s=i.type;if(s.displayName)return s.displayName;if(s.name)return s.name}return null}function g9(i,s=50){let u=i,f=0;for(;u&&f<s;){if(u._debugSource)return{source:u._debugSource,componentName:ff(u)};if(u._debugOwner?._debugSource)return{source:u._debugOwner._debugSource,componentName:ff(u._debugOwner)};u=u.return,f++}return null}function y9(i){let s=i,u=0,f=50;for(;s&&u<f;){let h=s,g=["_debugSource","__source","_source","debugSource"];for(let k of g){let T=h[k];if(T&&typeof T=="object"&&"fileName"in T)return{source:T,componentName:ff(s)}}if(s.memoizedProps){let k=s.memoizedProps;if(k.__source&&typeof k.__source=="object"){let T=k.__source;if(T.fileName&&T.lineNumber)return{source:{fileName:T.fileName,lineNumber:T.lineNumber,columnNumber:T.columnNumber},componentName:ff(s)}}}s=s.return,u++}return null}var P_=new Map;function b9(i){let s=i.tag,u=i.type,f=i.elementType;if(typeof u=="string"||u==null||typeof u=="function"&&u.prototype?.isReactComponent)return null;if((s===cf.FunctionComponent||s===cf.IndeterminateComponent)&&typeof u=="function")return u;if(s===cf.ForwardRef&&f){let h=f.render;if(typeof h=="function")return h}if((s===cf.MemoComponent||s===cf.SimpleMemoComponent)&&f){let h=f.type;if(typeof h=="function")return h}return typeof u=="function"?u:null}function v9(){let i=Ew.default,s=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(s&&"H"in s)return{get:()=>s.H,set:f=>{s.H=f}};let u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(u){let f=u.ReactCurrentDispatcher;if(f&&"current"in f)return{get:()=>f.current,set:h=>{f.current=h}}}return null}function x9(i){let s=i.split(`
`),u=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],f=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,h=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let g of s){let k=g.trim();if(!k||u.some(M=>M.test(k)))continue;let T=f.exec(k)||h.exec(k);if(T)return{fileName:T[1],line:parseInt(T[2],10),column:parseInt(T[3],10)}}return null}function w9(i){let s=i;return s=s.replace(/[?#].*$/,""),s=s.replace(/^turbopack:\/\/\/\[project\]\//,""),s=s.replace(/^webpack-internal:\/\/\/\.\//,""),s=s.replace(/^webpack-internal:\/\/\//,""),s=s.replace(/^webpack:\/\/\/\.\//,""),s=s.replace(/^webpack:\/\/\//,""),s=s.replace(/^turbopack:\/\/\//,""),s=s.replace(/^https?:\/\/[^/]+\//,""),s=s.replace(/^file:\/\/\//,"/"),s=s.replace(/^\([^)]+\)\/\.\//,""),s=s.replace(/^\.\//,""),s}function S9(i){let s=b9(i);if(!s)return null;if(P_.has(s))return P_.get(s);let u=v9();if(!u)return P_.set(s,null),null;let f=u.get(),h=null;try{let g=new Proxy({},{get(){throw new Error("probe")}});u.set(g);try{s({})}catch(k){if(k instanceof Error&&k.message==="probe"&&k.stack){let T=x9(k.stack);T&&(h={fileName:w9(T.fileName),lineNumber:T.line,columnNumber:T.column,componentName:ff(i)||void 0})}}}finally{u.set(f)}return P_.set(s,h),h}function C9(i,s=15){let u=i,f=0;for(;u&&f<s;){let h=S9(u);if(h)return h;u=u.return,f++}return null}function i1(i){let s=p9(i);if(!s)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let u=g9(s);if(u||(u=y9(s)),u?.source)return{found:!0,source:{fileName:u.source.fileName,lineNumber:u.source.lineNumber,columnNumber:u.source.columnNumber,componentName:u.componentName||void 0},isReactApp:!0,isProduction:!1};let f=C9(s);return f?{found:!0,source:f,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function k9(i,s="path"){let{fileName:u,lineNumber:f,columnNumber:h}=i,g=`${u}:${f}`;return h!==void 0&&(g+=`:${h}`),s==="vscode"?`vscode://file${u.startsWith("/")?"":"/"}${g}`:g}function E9(i,s=10){let u=i,f=0;for(;u&&f<s;){let h=i1(u);if(h.found)return h;u=u.parentElement,f++}return i1(i)}var T9=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,M9={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(i)),i.textContent=T9}var fe=M9,uf=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function ow(i,s,u="standard"){if(i.length===0)return"";let f=typeof window<"u"?`${window.innerWidth}\xD7${window.innerHeight}`:"unknown",h=`## Page Feedback: ${s}
`;return u==="forensic"?(h+=`
**Environment:**
`,h+=`- Viewport: ${f}
`,typeof window<"u"&&(h+=`- URL: ${window.location.href}
`,h+=`- User Agent: ${navigator.userAgent}
`,h+=`- Timestamp: ${new Date().toISOString()}
`,h+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),h+=`
---
`):u!=="compact"&&(h+=`**Viewport:** ${f}
`),h+=`
`,i.forEach((g,k)=>{u==="compact"?(h+=`${k+1}. **${g.element}**${g.sourceFile?` (${g.sourceFile})`:""}: ${g.comment}`,g.selectedText&&(h+=` (re: "${g.selectedText.slice(0,30)}${g.selectedText.length>30?"...":""}")`),h+=`
`):u==="forensic"?(h+=`### ${k+1}. ${g.element}
`,g.isMultiSelect&&g.fullPath&&(h+=`*Forensic data shown for first element of selection*
`),g.fullPath&&(h+=`**Full DOM Path:** ${g.fullPath}
`),g.cssClasses&&(h+=`**CSS Classes:** ${g.cssClasses}
`),g.boundingBox&&(h+=`**Position:** x:${Math.round(g.boundingBox.x)}, y:${Math.round(g.boundingBox.y)} (${Math.round(g.boundingBox.width)}\xD7${Math.round(g.boundingBox.height)}px)
`),h+=`**Annotation at:** ${g.x.toFixed(1)}% from left, ${Math.round(g.y)}px from top
`,g.selectedText&&(h+=`**Selected text:** "${g.selectedText}"
`),g.nearbyText&&!g.selectedText&&(h+=`**Context:** ${g.nearbyText.slice(0,100)}
`),g.computedStyles&&(h+=`**Computed Styles:** ${g.computedStyles}
`),g.accessibility&&(h+=`**Accessibility:** ${g.accessibility}
`),g.nearbyElements&&(h+=`**Nearby Elements:** ${g.nearbyElements}
`),g.sourceFile&&(h+=`**Source:** ${g.sourceFile}
`),g.reactComponents&&(h+=`**React:** ${g.reactComponents}
`),h+=`**Feedback:** ${g.comment}

`):(h+=`### ${k+1}. ${g.element}
`,h+=`**Location:** ${g.elementPath}
`,g.sourceFile&&(h+=`**Source:** ${g.sourceFile}
`),g.reactComponents&&(h+=`**React:** ${g.reactComponents}
`),u==="detailed"&&(g.cssClasses&&(h+=`**Classes:** ${g.cssClasses}
`),g.boundingBox&&(h+=`**Position:** ${Math.round(g.boundingBox.x)}px, ${Math.round(g.boundingBox.y)}px (${Math.round(g.boundingBox.width)}\xD7${Math.round(g.boundingBox.height)}px)
`)),g.selectedText&&(h+=`**Selected text:** "${g.selectedText}"
`),u==="detailed"&&g.nearbyText&&!g.selectedText&&(h+=`**Context:** ${g.nearbyText.slice(0,100)}
`),h+=`**Feedback:** ${g.comment}

`)}),h.trim()}var R9=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,D9={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",markerIn:"styles-module__markerIn___x4G8D",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",markerTooltip:"styles-module__markerTooltip___-VUm-",tooltipIn:"styles-module__tooltipIn___aJslQ",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-annotation-marker-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(i)),i.textContent=R9}var oo=D9;function lw({annotation:i,globalIndex:s,layerIndex:u,layerSize:f,isExiting:h,isClearing:g,isAnimated:k,isHovered:T,isDeleting:M,isEditingAny:ae,renumberFrom:B,markerClickBehavior:oe,tooltipStyle:H,onHoverEnter:Y,onHoverLeave:S,onClick:V,onContextMenu:I}){let F=(T||M)&&!ae,Ee=F&&oe==="delete",Ye=i.isMultiSelect,Ze=Ye?"var(--agentation-color-green)":"var(--agentation-color-accent)",It=h?oo.exit:g?oo.clearing:k?"":oo.enter,Vt=h?`${(f-1-u)*20}ms`:`${u*20}ms`;return(0,Pl.jsxs)("div",{className:`${oo.marker} ${Ye?oo.multiSelect:""} ${It} ${Ee?oo.hovered:""}`,"data-annotation-marker":!0,style:{left:`${i.x}%`,top:i.y,backgroundColor:Ee?void 0:Ze,animationDelay:Vt},onMouseEnter:()=>Y(i),onMouseLeave:S,onClick:Ce=>{Ce.stopPropagation(),h||V(i)},onContextMenu:I?Ce=>{oe==="delete"&&(Ce.preventDefault(),Ce.stopPropagation(),h||I(i))}:void 0,children:[F?Ee?(0,Pl.jsx)(uw,{size:Ye?18:16}):(0,Pl.jsx)(XS,{size:16}):(0,Pl.jsx)("span",{className:B!==null&&s>=B?oo.renumber:void 0,children:s+1}),T&&!ae&&(0,Pl.jsxs)("div",{className:`${oo.markerTooltip} ${oo.enter}`,style:H,children:[(0,Pl.jsxs)("span",{className:oo.markerQuote,children:[i.element,i.selectedText&&` "${i.selectedText.slice(0,30)}${i.selectedText.length>30?"...":""}"`]}),(0,Pl.jsx)("span",{className:oo.markerNote,children:i.comment})]})]})}function O9({x:i,y:s,isMultiSelect:u,isExiting:f}){return(0,Pl.jsx)("div",{className:`${oo.marker} ${oo.pending} ${u?oo.multiSelect:""} ${f?oo.exit:oo.enter}`,style:{left:`${i}%`,top:s,backgroundColor:u?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:(0,Pl.jsx)(OS,{size:12})})}function aw({annotation:i,fixed:s}){let u=i.isMultiSelect;return(0,Pl.jsx)("div",{className:`${oo.marker} ${s?oo.fixed:""} ${oo.hovered} ${u?oo.multiSelect:""} ${oo.exit}`,"data-annotation-marker":!0,style:{left:`${i.x}%`,top:i.y},children:(0,Pl.jsx)(uw,{size:u?12:10})})}var A9=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,N9={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-switch-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-switch-styles",document.head.appendChild(i)),i.textContent=A9}var Pg=N9,Wg=({className:i="",...s})=>(0,hf.jsxs)("div",{className:`${Pg.switchContainer} ${i}`,children:[(0,hf.jsx)("input",{className:Pg.switchInput,type:"checkbox",...s}),(0,hf.jsx)("div",{className:Pg.switchThumb})]}),z9=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,L9={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-checkbox-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(i)),i.textContent=z9}var W_=L9,B9=({className:i="",...s})=>(0,hu.jsxs)("div",{className:`${W_.checkboxContainer} ${i}`,children:[(0,hu.jsx)("input",{className:W_.checkboxInput,type:"checkbox",...s}),(0,hu.jsx)("svg",{className:W_.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,hu.jsx)("path",{className:W_.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),$9=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,H9={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-checkbox-field-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(i)),i.textContent=$9}var iw=H9,rw=({className:i="",label:s,tooltip:u,checked:f,onChange:h,...g})=>{let k=(0,Tw.useId)();return(0,_u.jsxs)("div",{className:`${iw.container} ${i}`,...g,children:[(0,_u.jsx)(B9,{id:k,onChange:h,checked:f}),(0,_u.jsx)("label",{className:iw.label,htmlFor:k,children:s}),u&&(0,_u.jsx)($s,{content:u})]})},U9=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,I9={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let i=document.getElementById("feedback-tool-styles-settings-panel-styles");i||(i=document.createElement("style"),i.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(i)),i.textContent=U9}var je=I9;function j9({settings:i,onSettingsChange:s,isDarkMode:u,onToggleTheme:f,isDevMode:h,connectionStatus:g,endpoint:k,isVisible:T,toolbarNearBottom:M,settingsPage:ae,onSettingsPageChange:B,onHideToolbar:oe}){return(0,Be.jsx)("div",{className:`${je.settingsPanel} ${T?je.enter:je.exit}`,style:M?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:(0,Be.jsxs)("div",{className:je.settingsPanelContainer,children:[(0,Be.jsxs)("div",{className:`${je.settingsPage} ${ae==="automations"?je.slideLeft:""}`,children:[(0,Be.jsxs)("div",{className:je.settingsHeader,children:[(0,Be.jsx)("a",{className:je.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:(0,Be.jsx)("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Be.jsx)("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),(0,Be.jsxs)("p",{className:je.settingsVersion,children:["v","3.0.2"]}),(0,Be.jsx)("button",{className:je.themeToggle,onClick:f,title:u?"Switch to light mode":"Switch to dark mode",children:(0,Be.jsx)("span",{className:je.themeIconWrapper,children:(0,Be.jsx)("span",{className:je.themeIcon,children:u?(0,Be.jsx)(jS,{size:20}):(0,Be.jsx)(YS,{size:20})},u?"sun":"moon")})})]}),(0,Be.jsx)("div",{className:je.divider}),(0,Be.jsxs)("div",{className:je.settingsSection,children:[(0,Be.jsxs)("div",{className:je.settingsRow,children:[(0,Be.jsxs)("div",{className:je.settingsLabel,children:["Output Detail",(0,Be.jsx)($s,{content:"Controls how much detail is included in the copied output"})]}),(0,Be.jsxs)("button",{className:je.cycleButton,onClick:()=>{let Y=(uf.findIndex(S=>S.value===i.outputDetail)+1)%uf.length;s({outputDetail:uf[Y].value})},children:[(0,Be.jsx)("span",{className:je.cycleButtonText,children:uf.find(H=>H.value===i.outputDetail)?.label},i.outputDetail),(0,Be.jsx)("span",{className:je.cycleDots,children:uf.map(H=>(0,Be.jsx)("span",{className:`${je.cycleDot} ${i.outputDetail===H.value?je.active:""}`},H.value))})]})]}),(0,Be.jsxs)("div",{className:`${je.settingsRow} ${je.settingsRowMarginTop} ${h?"":je.settingsRowDisabled}`,children:[(0,Be.jsxs)("div",{className:je.settingsLabel,children:["React Components",(0,Be.jsx)($s,{content:h?"Include React component names in annotations":"Disabled \u2014 production builds minify component names, making detection unreliable. Use in development mode."})]}),(0,Be.jsx)(Wg,{checked:h&&i.reactEnabled,onChange:H=>s({reactEnabled:H.target.checked}),disabled:!h})]}),(0,Be.jsxs)("div",{className:`${je.settingsRow} ${je.settingsRowMarginTop}`,children:[(0,Be.jsxs)("div",{className:je.settingsLabel,children:["Hide Until Restart",(0,Be.jsx)($s,{content:"Hides the toolbar until you open a new tab"})]}),(0,Be.jsx)(Wg,{checked:!1,onChange:H=>{H.target.checked&&oe()}})]})]}),(0,Be.jsx)("div",{className:je.divider}),(0,Be.jsxs)("div",{className:je.settingsSection,children:[(0,Be.jsx)("div",{className:`${je.settingsLabel} ${je.settingsLabelMarker}`,children:"Marker Color"}),(0,Be.jsx)("div",{className:je.colorOptions,children:df.map(H=>(0,Be.jsx)("button",{className:`${je.colorOption} ${i.annotationColorId===H.id?je.selected:""}`,style:{"--swatch":H.srgb,"--swatch-p3":H.p3},onClick:()=>s({annotationColorId:H.id}),title:H.label,type:"button"},H.id))})]}),(0,Be.jsx)("div",{className:je.divider}),(0,Be.jsxs)("div",{className:je.settingsSection,children:[(0,Be.jsx)(rw,{className:"checkbox-field",label:"Clear on copy/send",checked:i.autoClearAfterCopy,onChange:H=>s({autoClearAfterCopy:H.target.checked}),tooltip:"Automatically clear annotations after copying"}),(0,Be.jsx)(rw,{className:je.checkboxField,label:"Block page interactions",checked:i.blockInteractions,onChange:H=>s({blockInteractions:H.target.checked})})]}),(0,Be.jsx)("div",{className:je.divider}),(0,Be.jsxs)("button",{className:je.settingsNavLink,onClick:()=>B("automations"),children:[(0,Be.jsx)("span",{children:"Manage MCP & Webhooks"}),(0,Be.jsxs)("span",{className:je.settingsNavLinkRight,children:[k&&g!=="disconnected"&&(0,Be.jsx)("span",{className:`${je.mcpNavIndicator} ${je[g]}`}),(0,Be.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Be.jsx)("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),(0,Be.jsxs)("div",{className:`${je.settingsPage} ${je.automationsPage} ${ae==="automations"?je.slideIn:""}`,children:[(0,Be.jsxs)("button",{className:je.settingsBackButton,onClick:()=>B("main"),children:[(0,Be.jsx)(qS,{size:16}),(0,Be.jsx)("span",{children:"Manage MCP & Webhooks"})]}),(0,Be.jsx)("div",{className:je.divider}),(0,Be.jsxs)("div",{className:je.settingsSection,children:[(0,Be.jsxs)("div",{className:je.settingsRow,children:[(0,Be.jsxs)("span",{className:je.automationHeader,children:["MCP Connection",(0,Be.jsx)($s,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),k&&(0,Be.jsx)("div",{className:`${je.mcpStatusDot} ${je[g]}`,title:g==="connected"?"Connected":g==="connecting"?"Connecting...":"Disconnected"})]}),(0,Be.jsxs)("p",{className:je.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",(0,Be.jsx)("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:je.learnMoreLink,children:"Learn more"})]})]}),(0,Be.jsx)("div",{className:je.divider}),(0,Be.jsxs)("div",{className:`${je.settingsSection} ${je.settingsSectionGrow}`,children:[(0,Be.jsxs)("div",{className:je.settingsRow,children:[(0,Be.jsxs)("span",{className:je.automationHeader,children:["Webhooks",(0,Be.jsx)($s,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),(0,Be.jsxs)("div",{className:je.autoSendContainer,children:[(0,Be.jsx)("label",{htmlFor:"agentation-auto-send",className:`${je.autoSendLabel} ${i.webhooksEnabled?je.active:""} ${i.webhookUrl?"":je.disabled}`,children:"Auto-Send"}),(0,Be.jsx)(Wg,{id:"agentation-auto-send",checked:i.webhooksEnabled,onChange:H=>s({webhooksEnabled:H.target.checked}),disabled:!i.webhookUrl})]})]}),(0,Be.jsx)("p",{className:je.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),(0,Be.jsx)("textarea",{className:je.webhookUrlInput,placeholder:"Webhook URL",value:i.webhookUrl,onKeyDown:H=>H.stopPropagation(),onChange:H=>s({webhookUrl:H.target.value})})]})]})]})})}function Zg(i,s="filtered"){let{name:u,path:f}=fu(i);if(s==="off")return{name:u,elementName:u,path:f,reactComponents:null};let h=m9(i,{mode:s});return{name:h.path?`${h.path} ${u}`:u,elementName:u,path:f,reactComponents:h.path}}var sw=!1,Fg={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},hi=i=>{if(!i||!i.trim())return!1;try{let s=new URL(i.trim());return s.protocol==="http:"||s.protocol==="https:"}catch{return!1}},Y9={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},df=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],X9=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;let i=document.createElement("style");i.id="agentation-color-tokens",i.textContent=[...df.map(s=>`
      [data-agentation-accent="${s.id}"] {
        --agentation-color-accent: ${s.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${s.id}"] {
          --agentation-color-accent: ${s.p3};
        }
      }
    `),`:root {
      ${df.map(s=>`--agentation-color-${s.id}: ${s.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${df.map(s=>`--agentation-color-${s.id}: ${s.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(i)};X9();function Ls(i,s){let u=document.elementFromPoint(i,s);if(!u)return null;for(;u?.shadowRoot;){let f=u.shadowRoot.elementFromPoint(i,s);if(!f||f===u)break;u=f}return u}function Jg(i){let s=i;for(;s&&s!==document.body;){let f=window.getComputedStyle(s).position;if(f==="fixed"||f==="sticky")return!0;s=s.parentElement}return!1}function Bs(i){return i.status!=="resolved"&&i.status!=="dismissed"}function Z_(i){let s=i1(i),u=s.found?s:E9(i);if(u.found&&u.source)return k9(u.source,"path")}function Mw({demoAnnotations:i,demoDelay:s=1e3,enableDemoMode:u=!1,onAnnotationAdd:f,onAnnotationDelete:h,onAnnotationUpdate:g,onAnnotationsClear:k,onCopy:T,onSubmit:M,copyToClipboard:ae=!0,endpoint:B,sessionId:oe,onSessionCreated:H,webhookUrl:Y,className:S}={}){let[V,I]=(0,j.useState)(!1),[F,Ee]=(0,j.useState)([]),[Ye,Ze]=(0,j.useState)(!0),[It,Vt]=(0,j.useState)(()=>t9()),[Ce,yt]=(0,j.useState)(!1),_t=(0,j.useRef)(null);(0,j.useEffect)(()=>{let b=z=>{let D=_t.current;D&&D.contains(z.target)&&z.stopPropagation()},x=["mousedown","click","pointerdown"];return x.forEach(z=>document.body.addEventListener(z,b)),()=>{x.forEach(z=>document.body.removeEventListener(z,b))}},[]);let[Xe,at]=(0,j.useState)(!1),[Tt,Je]=(0,j.useState)(!1),[it,re]=(0,j.useState)(null),[ye,Te]=(0,j.useState)({x:0,y:0}),[ne,me]=(0,j.useState)(null),[vt,ke]=(0,j.useState)(!1),[W,Se]=(0,j.useState)("idle"),[$e,Mt]=(0,j.useState)(!1),[En,en]=(0,j.useState)(!1),[jt,In]=(0,j.useState)(null),[Pn,Fn]=(0,j.useState)(null),[Lo,ho]=(0,j.useState)([]),[Eo,cn]=(0,j.useState)(null),[Rl,To]=(0,j.useState)(null),[tt,ge]=(0,j.useState)(null),[qe,xe]=(0,j.useState)(null),[ie,nt]=(0,j.useState)([]),[Yt,qt]=(0,j.useState)(0),[Ot,Ie]=(0,j.useState)(!1),[et,U]=(0,j.useState)(!1),[X,G]=(0,j.useState)(!1),[se,De]=(0,j.useState)(!1),[ze,de]=(0,j.useState)(!1),[Ve,ft]=(0,j.useState)("main"),[St,m]=(0,j.useState)(!1),[R,ee]=(0,j.useState)(!1),[Z,le]=(0,j.useState)(!1),[we,be]=(0,j.useState)([]),[Oe,Ae]=(0,j.useState)(null),Ct=(0,j.useRef)(!1),[Fe,tn]=(0,j.useState)(!1),[Tn,lo]=(0,j.useState)(!1),[Jn,ao]=(0,j.useState)(1),[Bo,jn]=(0,j.useState)("new-page"),[An,Mo]=(0,j.useState)(""),[_a,Xi]=(0,j.useState)(!1),[ht,Xo]=(0,j.useState)(null),Is=(0,j.useRef)(!1),Vi=(0,j.useRef)({rearrange:null,placements:[]}),Wl=(0,j.useRef)({rearrange:null,placements:[]}),[ma,$o]=(0,j.useState)(0),[_f,e0]=(0,j.useState)(0),[pu,js]=(0,j.useState)(0),[_l,gu]=(0,j.useState)(0),mi=(0,j.useRef)(new Set),Vr=(0,j.useRef)(new Set),Vo=(0,j.useRef)(null),qr=(0,j.useRef)(),yu=R&&V&&!Z&&Fe;(0,j.useEffect)(()=>{if(yu){lo(!1);let b=du(()=>{lo(!0)});return()=>cancelAnimationFrame(b)}else lo(!1)},[yu]);let Zl=(0,j.useRef)(new Map),qi=(0,j.useRef)(new Map),Qi=(0,j.useRef)(),[ml,Ys]=(0,j.useState)(!1),[qo,Qo]=(0,j.useState)([]),Gi=(0,j.useRef)(qo);Gi.current=qo;let[Ba,t0]=(0,j.useState)(null),pi=(0,j.useRef)(null),bu=(0,j.useRef)(!1),mf=(0,j.useRef)([]),Xs=(0,j.useRef)(0),Qr=(0,j.useRef)(null),pf=(0,j.useRef)(null),f1=(0,j.useRef)(1),[gf,vu]=(0,j.useState)(!1),$a=(0,j.useRef)(null),[Nn,gi]=(0,j.useState)([]),Dl=(0,j.useRef)({cmd:!1,shift:!1}),_o=()=>{m(!0)},n0=()=>{m(!1)},yf=()=>{gf||($a.current=ct(()=>vu(!0),850))},xu=()=>{$a.current&&(clearTimeout($a.current),$a.current=null),vu(!1),n0()};(0,j.useEffect)(()=>()=>{$a.current&&clearTimeout($a.current)},[]);let[Rt,Gr]=(0,j.useState)(()=>{try{let b=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...Fg,...b,annotationColorId:df.find(x=>x.id===b.annotationColorId)?b.annotationColorId:Fg.annotationColorId}}catch{return Fg}}),[Fl,wu]=(0,j.useState)(!0),[Su,Pi]=(0,j.useState)(!1),bf=()=>{_t.current?.classList.add(fe.disableTransitions),wu(b=>!b),du(()=>{_t.current?.classList.remove(fe.disableTransitions)})},vf=!0,yi=vf&&Rt.reactEnabled?Y9[Rt.outputDetail]:"off",[Kn,Cu]=(0,j.useState)(oe??null),Wi=(0,j.useRef)(!1),[Wn,pa]=(0,j.useState)(B?"connecting":"disconnected"),[xn,Vs]=(0,j.useState)(null),[Ol,ku]=(0,j.useState)(!1),[ga,Pr]=(0,j.useState)(null),qs=(0,j.useRef)(!1),[bo,Wr]=(0,j.useState)(new Set),[Qs,Zr]=(0,j.useState)(new Set),[Zi,Gs]=(0,j.useState)(!1),[o0,bi]=(0,j.useState)(!1),[ya,Eu]=(0,j.useState)(!1),Fi=(0,j.useRef)(null),Go=(0,j.useRef)(null),Ji=(0,j.useRef)(null),Ki=(0,j.useRef)(null),Fr=(0,j.useRef)(!1),xf=(0,j.useRef)(0),Ps=(0,j.useRef)(null),wf=(0,j.useRef)(null),Tu=8,l0=50,er=(0,j.useRef)(null),Ws=(0,j.useRef)(null),tr=(0,j.useRef)(null),rt=typeof window<"u"?window.location.pathname:"/";(0,j.useEffect)(()=>{if(se)de(!0);else{m(!1),ft("main");let b=ct(()=>de(!1),0);return()=>clearTimeout(b)}},[se]);let Zs=V&&Ye&&!R;(0,j.useEffect)(()=>{if(Zs){Je(!1),at(!0),Wr(new Set);let b=ct(()=>{Wr(x=>{let z=new Set(x);return F.forEach(D=>z.add(D.id)),z})},350);return()=>clearTimeout(b)}else if(Xe){Je(!0);let b=ct(()=>{at(!1),Je(!1)},250);return()=>clearTimeout(b)}},[Zs]),(0,j.useEffect)(()=>{U(!0),qt(window.scrollY);let b=Vg(rt);Ee(b.filter(Bs)),sw||(Pi(!0),sw=!0,ct(()=>Pi(!1),750));try{let x=localStorage.getItem("feedback-toolbar-theme");x!==null&&wu(x==="dark")}catch{}try{let x=localStorage.getItem("feedback-toolbar-position");if(x){let z=JSON.parse(x);typeof z.x=="number"&&typeof z.y=="number"&&Vs(z)}}catch{}},[rt]),(0,j.useEffect)(()=>{et&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Rt))},[Rt,et]),(0,j.useEffect)(()=>{et&&localStorage.setItem("feedback-toolbar-theme",Fl?"dark":"light")},[Fl,et]);let Mu=(0,j.useRef)(!1);(0,j.useEffect)(()=>{let b=Mu.current;Mu.current=Ol,b&&!Ol&&xn&&et&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(xn))},[Ol,xn,et]),(0,j.useEffect)(()=>{if(!B||!et||Wi.current)return;Wi.current=!0,pa("connecting"),(async()=>{try{let x=K7(rt),z=oe||x,D=!1;if(z)try{let L=await Kx(B,z);Cu(L.id),pa("connected"),qg(rt,L.id),D=!0;let K=Vg(rt),ve=new Set(L.annotations.map(He=>He.id)),Me=K.filter(He=>!ve.has(He.id));if(Me.length>0){let We=`${typeof window<"u"?window.location.origin:""}${rt}`,mt=(await Promise.allSettled(Me.map(ot=>cu(B,L.id,{...ot,sessionId:L.id,url:We})))).map((ot,Le)=>ot.status==="fulfilled"?ot.value:(console.warn("[Agentation] Failed to sync annotation:",ot.reason),Me[Le])),xt=[...L.annotations,...mt];Ee(xt.filter(Bs)),rf(rt,xt.filter(Bs),L.id)}else Ee(L.annotations.filter(Bs)),rf(rt,L.annotations.filter(Bs),L.id)}catch(L){console.warn("[Agentation] Could not join session, creating new:",L),e9(rt)}if(!D){let L=typeof window<"u"?window.location.href:"/",K=await Qg(B,L);Cu(K.id),pa("connected"),qg(rt,K.id),H?.(K.id);let ve=q7(),Me=typeof window<"u"?window.location.origin:"",He=[];for(let[We,Ke]of ve){let mt=Ke.filter(Le=>!Le._syncedTo);if(mt.length===0)continue;let xt=`${Me}${We}`,ot=We===rt;He.push((async()=>{try{let Le=ot?K:await Qg(B,xt),Yn=(await Promise.allSettled(mt.map(Jt=>cu(B,Le.id,{...Jt,sessionId:Le.id,url:xt})))).map((Jt,Mn)=>Jt.status==="fulfilled"?Jt.value:(console.warn("[Agentation] Failed to sync annotation:",Jt.reason),mt[Mn])).filter(Bs);if(rf(We,Yn,Le.id),ot){let Jt=new Set(mt.map(Mn=>Mn.id));Ee(Mn=>{let Qe=Mn.filter(st=>!Jt.has(st.id));return[...Yn,...Qe]})}}catch(Le){console.warn(`[Agentation] Failed to sync annotations for ${We}:`,Le)}})())}await Promise.allSettled(He)}}catch(x){pa("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",x)}})()},[B,oe,et,H,rt]),(0,j.useEffect)(()=>{if(!B||!et)return;let b=async()=>{try{(await fetch(`${B}/health`)).ok?pa("connected"):pa("disconnected")}catch{pa("disconnected")}};b();let x=PS(b,1e4);return()=>clearInterval(x)},[B,et]),(0,j.useEffect)(()=>{if(!B||!et||!Kn)return;let b=new EventSource(`${B}/sessions/${Kn}/events`),x=["resolved","dismissed"],z=D=>{try{let L=JSON.parse(D.data);if(x.includes(L.payload?.status)){let K=L.payload.id,ve=L.payload.kind;if(ve==="placement"){for(let[Me,He]of Zl.current)if(He===K){Zl.current.delete(Me),be(We=>We.filter(Ke=>Ke.id!==Me));break}}else if(ve==="rearrange"){for(let[Me,He]of qi.current)if(He===K){qi.current.delete(Me),Xo(We=>{if(!We)return null;let Ke=We.sections.filter(mt=>mt.id!==Me);return Ke.length===0?null:{...We,sections:Ke}});break}}else Zr(Me=>new Set(Me).add(K)),ct(()=>{Ee(Me=>Me.filter(He=>He.id!==K)),Zr(Me=>{let He=new Set(Me);return He.delete(K),He})},150)}}catch{}};return b.addEventListener("annotation.updated",z),()=>{b.removeEventListener("annotation.updated",z),b.close()}},[B,et,Kn]),(0,j.useEffect)(()=>{if(!B||!et)return;let b=wf.current==="disconnected",x=Wn==="connected";wf.current=Wn,b&&x&&(async()=>{try{let D=Vg(rt);if(D.length===0)return;let K=`${typeof window<"u"?window.location.origin:""}${rt}`,ve=Kn,Me=[];if(ve)try{Me=(await Kx(B,ve)).annotations}catch{ve=null}ve||(ve=(await Qg(B,K)).id,Cu(ve),qg(rt,ve));let He=new Set(Me.map(Ke=>Ke.id)),We=D.filter(Ke=>!He.has(Ke.id));if(We.length>0){let mt=(await Promise.allSettled(We.map(Le=>cu(B,ve,{...Le,sessionId:ve,url:K})))).map((Le,wn)=>Le.status==="fulfilled"?Le.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Le.reason),We[wn])),ot=[...Me,...mt].filter(Bs);Ee(ot),rf(rt,ot,ve)}}catch(D){console.warn("[Agentation] Failed to sync on reconnect:",D)}})()},[Wn,B,et,Kn,rt]);let Ru=(0,j.useCallback)(()=>{Ce||(yt(!0),De(!1),I(!1),ct(()=>{n9(!0),Vt(!0),yt(!1)},400))},[Ce]);(0,j.useEffect)(()=>{if(!u||!et||!i||i.length===0||F.length>0)return;let b=[];return b.push(ct(()=>{I(!0)},s-200)),i.forEach((x,z)=>{let D=s+z*300;b.push(ct(()=>{let L=document.querySelector(x.selector);if(!L)return;let K=L.getBoundingClientRect(),{name:ve,path:Me}=fu(L),He={id:`demo-${Date.now()}-${z}`,x:(K.left+K.width/2)/window.innerWidth*100,y:K.top+K.height/2+window.scrollY,comment:x.comment,element:ve,elementPath:Me,timestamp:Date.now(),selectedText:x.selectedText,boundingBox:{x:K.left,y:K.top+window.scrollY,width:K.width,height:K.height},nearbyText:lf(L),cssClasses:af(L)};Ee(We=>[...We,He])},D))}),()=>{b.forEach(clearTimeout)}},[u,et,i,s]),(0,j.useEffect)(()=>{let b=()=>{qt(window.scrollY),Ie(!0),tr.current&&clearTimeout(tr.current),tr.current=ct(()=>{Ie(!1)},150)};return window.addEventListener("scroll",b,{passive:!0}),()=>{window.removeEventListener("scroll",b),tr.current&&clearTimeout(tr.current)}},[]),(0,j.useEffect)(()=>{et&&F.length>0?Kn?rf(rt,F,Kn):Cw(rt,F):et&&F.length===0&&localStorage.removeItem(K_(rt))},[F,rt,et,Kn]),(0,j.useEffect)(()=>{if(et&&!Ct.current){Ct.current=!0;let b=Q7(rt);b.length>0&&be(b)}},[et,rt]),(0,j.useEffect)(()=>{et&&Ct.current&&!Fe&&(we.length>0?G7(rt,we):P7(rt))},[we,rt,et,Fe]),(0,j.useEffect)(()=>{if(et&&!Is.current){Is.current=!0;let b=W7(rt);if(b){let x={...b,sections:b.sections.map(z=>({...z,currentRect:z.currentRect??{...z.originalRect}}))};Xo(x)}}},[et,rt]),(0,j.useEffect)(()=>{et&&Is.current&&!Fe&&(ht?Z7(rt,ht):F7(rt))},[ht,rt,et,Fe]);let Fs=(0,j.useRef)(!1);(0,j.useEffect)(()=>{if(et&&!Fs.current){Fs.current=!0;let b=J7(rt);b&&(Wl.current={rearrange:b.rearrange,placements:b.placements||[]},b.purpose&&Mo(b.purpose))}},[et,rt]),(0,j.useEffect)(()=>{if(!et||!Fs.current)return;let b=Wl.current;Fe?(ht?.sections?.length??0)>0||we.length>0||An?Jx(rt,{rearrange:ht,placements:we,purpose:An}):G_(rt):(b.rearrange?.sections?.length??0)>0||b.placements.length>0||An?Jx(rt,{rearrange:b.rearrange,placements:b.placements,purpose:An}):G_(rt)},[ht,we,An,Fe,rt,et]),(0,j.useEffect)(()=>{R&&!ht&&Xo({sections:[],originalOrder:[],detectedAt:Date.now()})},[R,ht]),(0,j.useEffect)(()=>{if(!B||!Kn)return;let b=Zl.current,x=new Set(we.map(z=>z.id));for(let z of we){if(b.has(z.id))continue;b.set(z.id,"");let D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:rt;cu(B,Kn,{id:z.id,x:z.x/window.innerWidth*100,y:z.y,comment:`Place ${z.type} at (${Math.round(z.x)}, ${Math.round(z.y)}), ${z.width}\xD7${z.height}px${z.text?` \u2014 "${z.text}"`:""}`,element:`[design:${z.type}]`,elementPath:"[placement]",timestamp:z.timestamp,url:D,intent:"change",severity:"important",kind:"placement",placement:{componentType:z.type,width:z.width,height:z.height,scrollY:z.scrollY,text:z.text}}).then(L=>{b.has(z.id)&&b.set(z.id,L.id)}).catch(L=>{console.warn("[Agentation] Failed to sync placement annotation:",L),b.delete(z.id)})}for(let[z,D]of b)x.has(z)||(b.delete(z),D&&Xr(B,D).catch(()=>{}))},[we,B,Kn,rt]),(0,j.useEffect)(()=>{if(!(!B||!Kn))return Qi.current&&clearTimeout(Qi.current),Qi.current=ct(()=>{let b=qi.current;if(!ht||ht.sections.length===0){for(let[,D]of b)D&&Xr(B,D).catch(()=>{});b.clear();return}let x=new Set(ht.sections.map(D=>D.id)),z=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:rt;for(let D of ht.sections){let L=D.originalRect,K=D.currentRect;if(!(Math.abs(L.x-K.x)>1||Math.abs(L.y-K.y)>1||Math.abs(L.width-K.width)>1||Math.abs(L.height-K.height)>1)){let He=b.get(D.id);He&&(b.delete(D.id),Xr(B,He).catch(()=>{}));continue}let Me=b.get(D.id);Me?ew(B,Me,{comment:`Move ${D.label} section (${D.tagName}) \u2014 from (${Math.round(L.x)},${Math.round(L.y)}) ${Math.round(L.width)}\xD7${Math.round(L.height)} to (${Math.round(K.x)},${Math.round(K.y)}) ${Math.round(K.width)}\xD7${Math.round(K.height)}`}).catch(He=>{console.warn("[Agentation] Failed to update rearrange annotation:",He)}):(b.set(D.id,""),cu(B,Kn,{id:D.id,x:K.x/window.innerWidth*100,y:K.y,comment:`Move ${D.label} section (${D.tagName}) \u2014 from (${Math.round(L.x)},${Math.round(L.y)}) ${Math.round(L.width)}\xD7${Math.round(L.height)} to (${Math.round(K.x)},${Math.round(K.y)}) ${Math.round(K.width)}\xD7${Math.round(K.height)}`,element:D.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:z,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:D.selector,label:D.label,tagName:D.tagName,originalRect:L,currentRect:K}}).then(He=>{b.has(D.id)&&b.set(D.id,He.id)}).catch(He=>{console.warn("[Agentation] Failed to sync rearrange annotation:",He),b.delete(D.id)}))}for(let[D,L]of b)x.has(D)||(b.delete(D),L&&Xr(B,L).catch(()=>{}))},300),()=>{Qi.current&&clearTimeout(Qi.current)}},[ht,B,Kn,rt]);let pl=(0,j.useRef)(new Map);(0,j.useLayoutEffect)(()=>{let b=ht?.sections??[],x=new Set;if((R||Z)&&V)for(let z of b){x.add(z.id);try{let D=document.querySelector(z.selector);if(!D)continue;if(!pl.current.has(z.id)){let L={transform:D.style.transform,transformOrigin:D.style.transformOrigin,opacity:D.style.opacity,position:D.style.position,zIndex:D.style.zIndex,display:D.style.display},K=[],ve=D.parentElement;for(;ve&&ve!==document.body;){let He=getComputedStyle(ve);(He.overflow!=="visible"||He.overflowX!=="visible"||He.overflowY!=="visible")&&(K.push({el:ve,overflow:ve.style.overflow}),ve.style.overflow="visible"),ve=ve.parentElement}getComputedStyle(D).display==="inline"&&(D.style.display="inline-block"),pl.current.set(z.id,{el:D,origStyles:L,ancestors:K}),D.style.transformOrigin="top left",D.style.zIndex="9999"}}catch{}}for(let[z,D]of pl.current)if(!x.has(z)){let{el:L,origStyles:K,ancestors:ve}=D;L.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",L.style.transform=K.transform,L.style.transformOrigin=K.transformOrigin,L.style.opacity=K.opacity,L.style.position=K.position,L.style.zIndex=K.zIndex,pl.current.delete(z),ct(()=>{L.style.transition="",L.style.display=K.display;for(let Me of ve)Me.el.style.overflow=Me.overflow},450)}},[ht,R,Z,V]),(0,j.useEffect)(()=>()=>{for(let[,b]of pl.current){let{el:x,origStyles:z,ancestors:D}=b;x.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",x.style.transform=z.transform,x.style.transformOrigin=z.transformOrigin,x.style.opacity=z.opacity,x.style.position=z.position,x.style.zIndex=z.zIndex,ct(()=>{x.style.transition="",x.style.display=z.display;for(let L of D)L.el.style.overflow=L.overflow},450)}pl.current.clear()},[]);let Jl=(0,j.useCallback)(()=>{le(!0),ee(!1),Ae(null),clearTimeout(qr.current),qr.current=ct(()=>{le(!1)},300)},[]),gl=(0,j.useCallback)(()=>{R&&(le(!0),ee(!1),Ae(null),clearTimeout(qr.current),qr.current=ct(()=>{le(!1)},300)),I(!1)},[R]),Kl=(0,j.useCallback)(()=>{X||(ZS(),G(!0))},[X]),Jr=(0,j.useCallback)(()=>{X&&(Hx(),G(!1))},[X]),Al=(0,j.useCallback)(()=>{X?Jr():Kl()},[X,Kl,Jr]),Sf=(0,j.useCallback)(()=>{if(Nn.length===0)return;let b=Nn[0],x=b.element,z=Nn.length>1,D=Nn.map(L=>L.element.getBoundingClientRect());if(z){let L={left:Math.min(...D.map(Le=>Le.left)),top:Math.min(...D.map(Le=>Le.top)),right:Math.max(...D.map(Le=>Le.right)),bottom:Math.max(...D.map(Le=>Le.bottom))},K=Nn.slice(0,5).map(Le=>Le.name).join(", "),ve=Nn.length>5?` +${Nn.length-5} more`:"",Me=D.map(Le=>({x:Le.left,y:Le.top+window.scrollY,width:Le.width,height:Le.height})),We=Nn[Nn.length-1].element,Ke=D[D.length-1],mt=Ke.left+Ke.width/2,xt=Ke.top+Ke.height/2,ot=Jg(We);me({x:mt/window.innerWidth*100,y:ot?xt:xt+window.scrollY,clientY:xt,element:`${Nn.length} elements: ${K}${ve}`,elementPath:"multi-select",boundingBox:{x:L.left,y:L.top+window.scrollY,width:L.right-L.left,height:L.bottom-L.top},isMultiSelect:!0,isFixed:ot,elementBoundingBoxes:Me,multiSelectElements:Nn.map(Le=>Le.element),targetElement:We,fullPath:V_(x),accessibility:X_(x),computedStyles:Y_(x),computedStylesObj:j_(x),nearbyElements:I_(x),cssClasses:af(x),nearbyText:lf(x),sourceFile:Z_(x)})}else{let L=D[0],K=Jg(x);me({x:L.left/window.innerWidth*100,y:K?L.top:L.top+window.scrollY,clientY:L.top,element:b.name,elementPath:b.path,boundingBox:{x:L.left,y:K?L.top:L.top+window.scrollY,width:L.width,height:L.height},isFixed:K,fullPath:V_(x),accessibility:X_(x),computedStyles:Y_(x),computedStylesObj:j_(x),nearbyElements:I_(x),cssClasses:af(x),nearbyText:lf(x),reactComponents:b.reactComponents,sourceFile:Z_(x)})}gi([]),re(null)},[Nn]);(0,j.useEffect)(()=>{V||(me(null),ge(null),xe(null),nt([]),re(null),De(!1),gi([]),Dl.current={cmd:!1,shift:!1},X&&Jr())},[V,X,Jr]),(0,j.useEffect)(()=>()=>{Hx()},[]),(0,j.useEffect)(()=>{if(!V)return;let b=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),x=":not([data-agentation-root]):not([data-agentation-root] *)",z=document.createElement("style");return z.id="feedback-cursor-styles",z.textContent=`
      body ${x} {
        cursor: crosshair !important;
      }

      body :is(${b})${x} {
        cursor: text !important;
      }
    `,document.head.appendChild(z),()=>{let D=document.getElementById("feedback-cursor-styles");D&&D.remove()}},[V]),(0,j.useEffect)(()=>{if(Ba!==null&&V)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Ba,V]),(0,j.useEffect)(()=>{if(!V||ne||ml||R)return;let b=x=>{let z=x.composedPath()[0]||x.target;if(fl(z,"[data-feedback-toolbar]")){re(null);return}let D=Ls(x.clientX,x.clientY);if(!D||fl(D,"[data-feedback-toolbar]")){re(null);return}let{name:L,elementName:K,path:ve,reactComponents:Me}=Zg(D,yi),He=D.getBoundingClientRect();re({element:L,elementName:K,elementPath:ve,rect:He,reactComponents:Me}),Te({x:x.clientX,y:x.clientY})};return document.addEventListener("mousemove",b),()=>document.removeEventListener("mousemove",b)},[V,ne,ml,R,yi,qo]);let nr=(0,j.useCallback)(b=>{if(ge(b),In(null),Fn(null),ho([]),b.elementBoundingBoxes?.length){let x=[];for(let z of b.elementBoundingBoxes){let D=z.x+z.width/2,L=z.y+z.height/2-window.scrollY,K=Ls(D,L);K&&x.push(K)}nt(x),xe(null)}else if(b.boundingBox){let x=b.boundingBox,z=x.x+x.width/2,D=b.isFixed?x.y+x.height/2:x.y+x.height/2-window.scrollY,L=Ls(z,D);if(L){let K=L.getBoundingClientRect(),ve=K.width/x.width,Me=K.height/x.height;ve<.5||Me<.5?xe(null):xe(L)}else xe(null);nt([])}else xe(null),nt([])},[]);(0,j.useEffect)(()=>{if(!V||ml||R)return;let b=x=>{if(Fr.current){Fr.current=!1;return}let z=x.composedPath()[0]||x.target;if(fl(z,"[data-feedback-toolbar]")||fl(z,"[data-annotation-popup]")||fl(z,"[data-annotation-marker]"))return;if(x.metaKey&&x.shiftKey&&!ne&&!tt){x.preventDefault(),x.stopPropagation();let Pt=Ls(x.clientX,x.clientY);if(!Pt)return;let Yn=Pt.getBoundingClientRect(),{name:Jt,path:Mn,reactComponents:Qe}=Zg(Pt,yi),st=Nn.findIndex(Sn=>Sn.element===Pt);st>=0?gi(Sn=>Sn.filter((gn,Zo)=>Zo!==st)):gi(Sn=>[...Sn,{element:Pt,rect:Yn,name:Jt,path:Mn,reactComponents:Qe??void 0}]);return}let D=fl(z,"button, a, input, select, textarea, [role='button'], [onclick]");if(Rt.blockInteractions&&D&&(x.preventDefault(),x.stopPropagation()),ne){if(D&&!Rt.blockInteractions)return;x.preventDefault(),er.current?.shake();return}if(tt){if(D&&!Rt.blockInteractions)return;x.preventDefault(),Ws.current?.shake();return}x.preventDefault();let L=Ls(x.clientX,x.clientY);if(!L)return;let{name:K,path:ve,reactComponents:Me}=Zg(L,yi),He=L.getBoundingClientRect(),We=x.clientX/window.innerWidth*100,Ke=Jg(L),mt=Ke?x.clientY:x.clientY+window.scrollY,xt=window.getSelection(),ot;xt&&xt.toString().trim().length>0&&(ot=xt.toString().trim().slice(0,500));let Le=j_(L),wn=Y_(L);me({x:We,y:mt,clientY:x.clientY,element:K,elementPath:ve,selectedText:ot,boundingBox:{x:He.left,y:Ke?He.top:He.top+window.scrollY,width:He.width,height:He.height},nearbyText:lf(L),cssClasses:af(L),isFixed:Ke,fullPath:V_(L),accessibility:X_(L),computedStyles:wn,computedStylesObj:Le,nearbyElements:I_(L),reactComponents:Me??void 0,sourceFile:Z_(L),targetElement:L}),re(null)};return document.addEventListener("click",b,!0),()=>document.removeEventListener("click",b,!0)},[V,ml,R,ne,tt,Rt.blockInteractions,yi,Nn]),(0,j.useEffect)(()=>{if(!V)return;let b=D=>{D.key==="Meta"&&(Dl.current.cmd=!0),D.key==="Shift"&&(Dl.current.shift=!0)},x=D=>{let L=Dl.current.cmd&&Dl.current.shift;D.key==="Meta"&&(Dl.current.cmd=!1),D.key==="Shift"&&(Dl.current.shift=!1);let K=Dl.current.cmd&&Dl.current.shift;L&&!K&&Nn.length>0&&Sf()},z=()=>{Dl.current={cmd:!1,shift:!1},gi([])};return document.addEventListener("keydown",b),document.addEventListener("keyup",x),window.addEventListener("blur",z),()=>{document.removeEventListener("keydown",b),document.removeEventListener("keyup",x),window.removeEventListener("blur",z)}},[V,Nn,Sf]),(0,j.useEffect)(()=>{if(!V||ne||ml||R)return;let b=x=>{let z=x.composedPath()[0]||x.target;fl(z,"[data-feedback-toolbar]")||fl(z,"[data-annotation-marker]")||fl(z,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(z.tagName)||z.isContentEditable||(x.preventDefault(),Fi.current={x:x.clientX,y:x.clientY})};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[V,ne,ml,R]),(0,j.useEffect)(()=>{if(!V||ne)return;let b=x=>{if(!Fi.current)return;let z=x.clientX-Fi.current.x,D=x.clientY-Fi.current.y,L=z*z+D*D,K=Tu*Tu;if(!ya&&L>=K&&(Go.current=Fi.current,Eu(!0),x.preventDefault()),(ya||L>=K)&&Go.current){if(Ji.current){let Qe=Math.min(Go.current.x,x.clientX),st=Math.min(Go.current.y,x.clientY),Sn=Math.abs(x.clientX-Go.current.x),gn=Math.abs(x.clientY-Go.current.y);Ji.current.style.transform=`translate(${Qe}px, ${st}px)`,Ji.current.style.width=`${Sn}px`,Ji.current.style.height=`${gn}px`}let ve=Date.now();if(ve-xf.current<l0)return;xf.current=ve;let Me=Go.current.x,He=Go.current.y,We=Math.min(Me,x.clientX),Ke=Math.min(He,x.clientY),mt=Math.max(Me,x.clientX),xt=Math.max(He,x.clientY),ot=(We+mt)/2,Le=(Ke+xt)/2,wn=new Set,Pt=[[We,Ke],[mt,Ke],[We,xt],[mt,xt],[ot,Le],[ot,Ke],[ot,xt],[We,Le],[mt,Le]];for(let[Qe,st]of Pt){let Sn=document.elementsFromPoint(Qe,st);for(let gn of Sn)gn instanceof HTMLElement&&wn.add(gn)}let Yn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let Qe of Yn)if(Qe instanceof HTMLElement){let st=Qe.getBoundingClientRect(),Sn=st.left+st.width/2,gn=st.top+st.height/2,Zo=Sn>=We&&Sn<=mt&&gn>=Ke&&gn<=xt,Fo=Math.min(st.right,mt)-Math.max(st.left,We),ro=Math.min(st.bottom,xt)-Math.max(st.top,Ke),bl=Fo>0&&ro>0?Fo*ro:0,Jo=st.width*st.height,xa=Jo>0?bl/Jo:0;(Zo||xa>.5)&&wn.add(Qe)}let Jt=[],Mn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let Qe of wn){if(fl(Qe,"[data-feedback-toolbar]")||fl(Qe,"[data-annotation-marker]"))continue;let st=Qe.getBoundingClientRect();if(!(st.width>window.innerWidth*.8&&st.height>window.innerHeight*.5)&&!(st.width<10||st.height<10)&&st.left<mt&&st.right>We&&st.top<xt&&st.bottom>Ke){let Sn=Qe.tagName,gn=Mn.has(Sn);if(!gn&&(Sn==="DIV"||Sn==="SPAN")){let Zo=Qe.textContent&&Qe.textContent.trim().length>0,Fo=Qe.onclick!==null||Qe.getAttribute("role")==="button"||Qe.getAttribute("role")==="link"||Qe.classList.contains("clickable")||Qe.hasAttribute("data-clickable");(Zo||Fo)&&!Qe.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(gn=!0)}if(gn){let Zo=!1;for(let Fo of Jt)if(Fo.left<=st.left&&Fo.right>=st.right&&Fo.top<=st.top&&Fo.bottom>=st.bottom){Zo=!0;break}Zo||Jt.push(st)}}}if(Ki.current){let Qe=Ki.current;for(;Qe.children.length>Jt.length;)Qe.removeChild(Qe.lastChild);Jt.forEach((st,Sn)=>{let gn=Qe.children[Sn];gn||(gn=document.createElement("div"),gn.className=fe.selectedElementHighlight,Qe.appendChild(gn)),gn.style.transform=`translate(${st.left}px, ${st.top}px)`,gn.style.width=`${st.width}px`,gn.style.height=`${st.height}px`})}}};return document.addEventListener("mousemove",b,{passive:!0}),()=>document.removeEventListener("mousemove",b)},[V,ne,ya,Tu]),(0,j.useEffect)(()=>{if(!V)return;let b=x=>{let z=ya,D=Go.current;if(ya&&D){Fr.current=!0;let L=Math.min(D.x,x.clientX),K=Math.min(D.y,x.clientY),ve=Math.max(D.x,x.clientX),Me=Math.max(D.y,x.clientY),He=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(ot=>{if(!(ot instanceof HTMLElement)||fl(ot,"[data-feedback-toolbar]")||fl(ot,"[data-annotation-marker]"))return;let Le=ot.getBoundingClientRect();Le.width>window.innerWidth*.8&&Le.height>window.innerHeight*.5||Le.width<10||Le.height<10||Le.left<ve&&Le.right>L&&Le.top<Me&&Le.bottom>K&&He.push({element:ot,rect:Le})});let Ke=He.filter(({element:ot})=>!He.some(({element:Le})=>Le!==ot&&ot.contains(Le))),mt=x.clientX/window.innerWidth*100,xt=x.clientY+window.scrollY;if(Ke.length>0){let ot=Ke.reduce((Mn,{rect:Qe})=>({left:Math.min(Mn.left,Qe.left),top:Math.min(Mn.top,Qe.top),right:Math.max(Mn.right,Qe.right),bottom:Math.max(Mn.bottom,Qe.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Le=Ke.slice(0,5).map(({element:Mn})=>fu(Mn).name).join(", "),wn=Ke.length>5?` +${Ke.length-5} more`:"",Pt=Ke[0].element,Yn=j_(Pt),Jt=Y_(Pt);me({x:mt,y:xt,clientY:x.clientY,element:`${Ke.length} elements: ${Le}${wn}`,elementPath:"multi-select",boundingBox:{x:ot.left,y:ot.top+window.scrollY,width:ot.right-ot.left,height:ot.bottom-ot.top},isMultiSelect:!0,fullPath:V_(Pt),accessibility:X_(Pt),computedStyles:Jt,computedStylesObj:Yn,nearbyElements:I_(Pt),cssClasses:af(Pt),nearbyText:lf(Pt),sourceFile:Z_(Pt)})}else{let ot=Math.abs(ve-L),Le=Math.abs(Me-K);ot>20&&Le>20&&me({x:mt,y:xt,clientY:x.clientY,element:"Area selection",elementPath:`region at (${Math.round(L)}, ${Math.round(K)})`,boundingBox:{x:L,y:K+window.scrollY,width:ot,height:Le},isMultiSelect:!0})}re(null)}else z&&(Fr.current=!0);Fi.current=null,Go.current=null,Eu(!1),Ki.current&&(Ki.current.innerHTML="")};return document.addEventListener("mouseup",b),()=>document.removeEventListener("mouseup",b)},[V,ya]);let Po=(0,j.useCallback)(async(b,x,z)=>{let D=Rt.webhookUrl||Y;if(!D||!Rt.webhooksEnabled&&!z)return!1;try{return(await fetch(D,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:b,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...x})})).ok}catch(L){return console.warn("[Agentation] Webhook failed:",L),!1}},[Y,Rt.webhookUrl,Rt.webhooksEnabled]),Nl=(0,j.useCallback)(b=>{if(!ne)return;let x={id:Date.now().toString(),x:ne.x,y:ne.y,comment:b,element:ne.element,elementPath:ne.elementPath,timestamp:Date.now(),selectedText:ne.selectedText,boundingBox:ne.boundingBox,nearbyText:ne.nearbyText,cssClasses:ne.cssClasses,isMultiSelect:ne.isMultiSelect,isFixed:ne.isFixed,fullPath:ne.fullPath,accessibility:ne.accessibility,computedStyles:ne.computedStyles,nearbyElements:ne.nearbyElements,reactComponents:ne.reactComponents,sourceFile:ne.sourceFile,elementBoundingBoxes:ne.elementBoundingBoxes,...B&&Kn?{sessionId:Kn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};Ee(z=>[...z,x]),Ps.current=x.id,ct(()=>{Ps.current=null},300),ct(()=>{Wr(z=>new Set(z).add(x.id))},250),f?.(x),Po("annotation.add",{annotation:x}),Gs(!0),ct(()=>{me(null),Gs(!1)},150),window.getSelection()?.removeAllRanges(),B&&Kn&&cu(B,Kn,x).then(z=>{z.id!==x.id&&(Ee(D=>D.map(L=>L.id===x.id?{...L,id:z.id}:L)),Wr(D=>{let L=new Set(D);return L.delete(x.id),L.add(z.id),L}))}).catch(z=>{console.warn("[Agentation] Failed to sync annotation:",z)})},[ne,f,Po,B,Kn]),Js=(0,j.useCallback)(()=>{Gs(!0),ct(()=>{me(null),Gs(!1)},150)},[]),io=(0,j.useCallback)(b=>{let x=F.findIndex(D=>D.id===b),z=F[x];tt?.id===b&&(bi(!0),ct(()=>{ge(null),xe(null),nt([]),bi(!1)},150)),cn(b),Zr(D=>new Set(D).add(b)),z&&(h?.(z),Po("annotation.delete",{annotation:z})),B&&Xr(B,b).catch(D=>{console.warn("[Agentation] Failed to delete annotation from server:",D)}),ct(()=>{Ee(D=>D.filter(L=>L.id!==b)),Zr(D=>{let L=new Set(D);return L.delete(b),L}),cn(null),x<F.length-1&&(To(x),ct(()=>To(null),200))},150)},[F,tt,h,Po,B]),Wo=(0,j.useCallback)(b=>{if(!b){In(null),Fn(null),ho([]);return}if(In(b.id),b.elementBoundingBoxes?.length){let x=[];for(let z of b.elementBoundingBoxes){let D=z.x+z.width/2,L=z.y+z.height/2-window.scrollY,ve=document.elementsFromPoint(D,L).find(Me=>!Me.closest("[data-annotation-marker]")&&!Me.closest("[data-agentation-root]"));ve&&x.push(ve)}ho(x),Fn(null)}else if(b.boundingBox){let x=b.boundingBox,z=x.x+x.width/2,D=b.isFixed?x.y+x.height/2:x.y+x.height/2-window.scrollY,L=Ls(z,D);if(L){let K=L.getBoundingClientRect(),ve=K.width/x.width,Me=K.height/x.height;ve<.5||Me<.5?Fn(null):Fn(L)}else Fn(null);ho([])}else Fn(null),ho([])},[]),Ks=(0,j.useCallback)(b=>{if(!tt)return;let x={...tt,comment:b};Ee(z=>z.map(D=>D.id===tt.id?x:D)),g?.(x),Po("annotation.update",{annotation:x}),B&&ew(B,tt.id,{comment:b}).catch(z=>{console.warn("[Agentation] Failed to update annotation on server:",z)}),bi(!0),ct(()=>{ge(null),xe(null),nt([]),bi(!1)},150)},[tt,g,Po,B]),ec=(0,j.useCallback)(()=>{bi(!0),ct(()=>{ge(null),xe(null),nt([]),bi(!1)},150)},[]),ba=(0,j.useCallback)(()=>{let b=F.length,x=we.length>0||!!ht;if(b===0&&qo.length===0&&!x)return;if(k?.(F),Po("annotations.clear",{annotations:F}),B){Promise.all(F.map(L=>Xr(B,L.id).catch(K=>{console.warn("[Agentation] Failed to delete annotation from server:",K)})));for(let[,L]of Zl.current)L&&Xr(B,L).catch(()=>{});Zl.current.clear();for(let[,L]of qi.current)L&&Xr(B,L).catch(()=>{});qi.current.clear()}en(!0),Mt(!0),Qo([]);let z=pi.current;if(z){let L=z.getContext("2d");L&&L.clearRect(0,0,z.width,z.height)}(we.length>0||ht)&&(js(L=>L+1),gu(L=>L+1),ct(()=>{be([]),Xo(null)},200)),Fe&&tn(!1),An&&Mo(""),Wl.current={rearrange:null,placements:[]},G_(rt);let D=b*30+200;ct(()=>{Ee([]),Wr(new Set),localStorage.removeItem(K_(rt)),en(!1)},D),ct(()=>Mt(!1),1500)},[rt,F,qo,we,ht,Fe,An,k,Po,B]),yl=(0,j.useCallback)(async()=>{let b=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:rt,x=R&&Fe,z;if(x){if(we.length===0&&!ht&&!An)return;z=""}else{if(z=ow(F,b,Rt.outputDetail),!z&&qo.length===0&&we.length===0&&!ht)return;z||(z=`## Page Feedback: ${b}
`)}if(!x&&qo.length>0){let D=new Set;for(let Me of F)Me.drawingIndex!=null&&D.add(Me.drawingIndex);let L=pi.current;L&&(L.style.visibility="hidden");let K=[],ve=window.scrollY;for(let Me=0;Me<qo.length;Me++){if(D.has(Me))continue;let He=qo[Me];if(He.points.length<2)continue;let We=He.fixed?He.points:He.points.map(Rn=>({x:Rn.x,y:Rn.y-ve})),Ke=1/0,mt=1/0,xt=-1/0,ot=-1/0;for(let Rn of We)Ke=Math.min(Ke,Rn.x),mt=Math.min(mt,Rn.y),xt=Math.max(xt,Rn.x),ot=Math.max(ot,Rn.y);let Le=xt-Ke,wn=ot-mt,Pt=Math.hypot(Le,wn),Yn=We[0],Jt=We[We.length-1],Mn=Math.hypot(Jt.x-Yn.x,Jt.y-Yn.y),Qe,st=Mn<Pt*.35,Sn=Le/Math.max(wn,1);if(st&&Pt>20){let Rn=Math.max(Le,wn)*.15,Ro=0;for(let Ha of We){let nc=Ha.x-Ke<Rn,lr=xt-Ha.x<Rn,xi=Ha.y-mt<Rn,Ou=ot-Ha.y<Rn;(nc||lr)&&(xi||Ou)&&Ro++}Qe=Ro>We.length*.15?"box":"circle"}else Sn>3&&wn<40?Qe="underline":Mn>Pt*.5?Qe="arrow":Qe="drawing";let gn=Math.min(10,We.length),Zo=Math.max(1,Math.floor(We.length/gn)),Fo=new Set,ro=[],bl=[Yn];for(let Rn=Zo;Rn<We.length-1;Rn+=Zo)bl.push(We[Rn]);bl.push(Jt);for(let Rn of bl){let Ro=Ls(Rn.x,Rn.y);if(!Ro||Fo.has(Ro)||fl(Ro,"[data-feedback-toolbar]"))continue;Fo.add(Ro);let{name:Ha}=fu(Ro);ro.includes(Ha)||ro.push(Ha)}let Jo=`${Math.round(Ke)},${Math.round(mt)} \u2192 ${Math.round(xt)},${Math.round(ot)}`,xa;(Qe==="circle"||Qe==="box")&&ro.length>0?xa=`${Qe==="box"?"Boxed":"Circled"} **${ro[0]}**${ro.length>1?` (and ${ro.slice(1).join(", ")})`:""} (region: ${Jo})`:Qe==="underline"&&ro.length>0?xa=`Underlined **${ro[0]}** (${Jo})`:Qe==="arrow"&&ro.length>=2?xa=`Arrow from **${ro[0]}** to **${ro[ro.length-1]}** (${Math.round(Yn.x)},${Math.round(Yn.y)} \u2192 ${Math.round(Jt.x)},${Math.round(Jt.y)})`:ro.length>0?xa=`${Qe==="arrow"?"Arrow":"Drawing"} near **${ro.join("**, **")}** (region: ${Jo})`:xa=`Drawing at ${Jo}`,K.push(xa)}L&&(L.style.visibility=""),K.length>0&&(z+=`
**Drawings:**
`,K.forEach((Me,He)=>{z+=`${He+1}. ${Me}
`}))}if((we.length>0||x&&An)&&(z+=`
`+Zx(we,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Fe,wireframePurpose:An||void 0},Rt.outputDetail)),ht){let D=Fx(ht,Rt.outputDetail,{width:window.innerWidth,height:window.innerHeight});D&&(z+=`
`+D)}if(ae)try{await navigator.clipboard.writeText(z)}catch{}T?.(z),ke(!0),ct(()=>ke(!1),2e3),Rt.autoClearAfterCopy&&ct(()=>ba(),500)},[F,qo,we,ht,Fe,R,Bo,An,rt,Rt.outputDetail,yi,Rt.autoClearAfterCopy,ba,ae,T]),tc=(0,j.useCallback)(async()=>{let b=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:rt,x=ow(F,b,Rt.outputDetail);if(!x&&we.length===0&&!ht)return;if(x||(x=`## Page Feedback: ${b}
`),we.length>0&&(x+=`
`+Zx(we,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Fe,wireframePurpose:An||void 0},Rt.outputDetail)),ht){let D=Fx(ht,Rt.outputDetail,{width:window.innerWidth,height:window.innerHeight});D&&(x+=`
`+D)}M&&M(x,F),Se("sending"),await new Promise(D=>ct(D,150));let z=await Po("submit",{output:x,annotations:F},!0);Se(z?"sent":"failed"),ct(()=>Se("idle"),2500),z&&Rt.autoClearAfterCopy&&ct(()=>ba(),500)},[M,Po,F,we,ht,Fe,Bo,rt,Rt.outputDetail,yi,Rt.autoClearAfterCopy,ba]);(0,j.useEffect)(()=>{if(!ga)return;let b=10,x=D=>{let L=D.clientX-ga.x,K=D.clientY-ga.y,ve=Math.sqrt(L*L+K*K);if(!Ol&&ve>b&&ku(!0),Ol||ve>b){let Me=ga.toolbarX+L,He=ga.toolbarY+K,We=20,Ke=337,mt=44,ot=Ke-(V?Wn==="connected"?297:257:44),Le=We-ot,wn=window.innerWidth-We-Ke;Me=Math.max(Le,Math.min(wn,Me)),He=Math.max(We,Math.min(window.innerHeight-mt-We,He)),Vs({x:Me,y:He})}},z=()=>{Ol&&(qs.current=!0),ku(!1),Pr(null)};return document.addEventListener("mousemove",x),document.addEventListener("mouseup",z),()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",z)}},[ga,Ol,V,Wn]);let Cf=(0,j.useCallback)(b=>{if(b.target.closest("button")||b.target.closest("[data-agentation-settings-panel]"))return;let x=b.currentTarget.parentElement;if(!x)return;let z=x.getBoundingClientRect(),D=xn?.x??z.left,L=xn?.y??z.top;Pr({x:b.clientX,y:b.clientY,toolbarX:D,toolbarY:L})},[xn]);if((0,j.useEffect)(()=>{if(!xn)return;let b=()=>{let L=xn.x,K=xn.y,He=20-(337-(V?Wn==="connected"?297:257:44)),We=window.innerWidth-20-337;L=Math.max(He,Math.min(We,L)),K=Math.max(20,Math.min(window.innerHeight-44-20,K)),(L!==xn.x||K!==xn.y)&&Vs({x:L,y:K})};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[xn,V,Wn]),(0,j.useEffect)(()=>{let b=x=>{let z=x.target,D=z.tagName==="INPUT"||z.tagName==="TEXTAREA"||z.isContentEditable;if(x.key==="Escape"){if(R){Oe?Ae(null):Jl();return}if(ml){Ys(!1);return}if(Nn.length>0){gi([]);return}ne||V&&(_o(),I(!1))}if((x.metaKey||x.ctrlKey)&&x.shiftKey&&(x.key==="f"||x.key==="F")){x.preventDefault(),_o(),V?gl():I(!0);return}if(!(D||x.metaKey||x.ctrlKey)&&((x.key==="p"||x.key==="P")&&(x.preventDefault(),_o(),Al()),(x.key==="l"||x.key==="L")&&(x.preventDefault(),_o(),ml&&Ys(!1),se&&De(!1),ne&&Js(),R?Jl():ee(!0)),(x.key==="h"||x.key==="H")&&F.length>0&&(x.preventDefault(),_o(),Ze(L=>!L)),(x.key==="c"||x.key==="C")&&(F.length>0||we.length>0||ht)&&(x.preventDefault(),_o(),yl()),(x.key==="x"||x.key==="X")&&(F.length>0||we.length>0||ht)&&(x.preventDefault(),_o(),ba(),we.length>0&&be([]),ht&&Xo(null)),x.key==="s"||x.key==="S")){let L=hi(Rt.webhookUrl)||hi(Y||"");F.length>0&&L&&W==="idle"&&(x.preventDefault(),_o(),tc())}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[V,ml,R,Oe,we,ht,ne,F.length,Rt.webhookUrl,Y,W,tc,Al,yl,ba,Nn]),!et||It)return null;let vi=F.length>0,or=F.filter(b=>!Qs.has(b.id)&&b.kind!=="placement"&&b.kind!=="rearrange"),kf=or.length>0,Du=F.filter(b=>Qs.has(b.id)),va=b=>{let K=b.x/100*window.innerWidth,ve=typeof b.y=="string"?parseFloat(b.y):b.y,Me={};window.innerHeight-ve-22-10<80&&(Me.top="auto",Me.bottom="calc(100% + 10px)");let We=K-200/2,Ke=10;if(We<Ke){let mt=Ke-We;Me.left=`calc(50% + ${mt}px)`}else if(We+200>window.innerWidth-Ke){let mt=We+200-(window.innerWidth-Ke);Me.left=`calc(50% - ${mt}px)`}return Me};return(0,cw.createPortal)((0,he.jsxs)("div",{ref:_t,style:{display:"contents"},"data-agentation-theme":Fl?"dark":"light","data-agentation-accent":Rt.annotationColorId,"data-agentation-root":"",children:[(0,he.jsx)("div",{className:`${fe.toolbar}${S?` ${S}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:xn?{left:xn.x,top:xn.y,right:"auto",bottom:"auto"}:void 0,children:(0,he.jsxs)("div",{className:`${fe.toolbarContainer} ${V?fe.expanded:fe.collapsed} ${Su?fe.entrance:""} ${Ce?fe.hiding:""} ${!Rt.webhooksEnabled&&(hi(Rt.webhookUrl)||hi(Y||""))?fe.serverConnected:""}`,onClick:V?void 0:b=>{if(qs.current){qs.current=!1,b.preventDefault();return}I(!0)},onMouseDown:Cf,role:V?void 0:"button",tabIndex:V?-1:0,title:V?void 0:"Start feedback mode",children:[(0,he.jsxs)("div",{className:`${fe.toggleContent} ${V?fe.hidden:fe.visible}`,children:[(0,he.jsx)(AS,{size:24}),kf&&(0,he.jsx)("span",{className:`${fe.badge} ${V?fe.fadeOut:""} ${Su?fe.entrance:""}`,children:or.length})]}),(0,he.jsxs)("div",{className:`${fe.controlsContent} ${V?fe.visible:fe.hidden} ${xn&&xn.y<100?fe.tooltipBelow:""} ${St||se?fe.tooltipsHidden:""} ${gf?fe.tooltipsInSession:""}`,onMouseEnter:yf,onMouseLeave:xu,children:[(0,he.jsxs)("div",{className:`${fe.buttonWrapper} ${xn&&xn.x<120?fe.buttonWrapperAlignLeft:""}`,children:[(0,he.jsx)("button",{className:fe.controlButton,onClick:b=>{b.stopPropagation(),_o(),Al()},"data-active":X,children:(0,he.jsx)($S,{size:24,isPaused:X})}),(0,he.jsxs)("span",{className:fe.buttonTooltip,children:[X?"Resume animations":"Pause animations",(0,he.jsx)("span",{className:fe.shortcut,children:"P"})]})]}),(0,he.jsxs)("div",{className:fe.buttonWrapper,children:[(0,he.jsx)("button",{className:`${fe.controlButton} ${Fl?"":fe.light}`,onClick:b=>{b.stopPropagation(),_o(),ml&&Ys(!1),se&&De(!1),ne&&Js(),R?Jl():ee(!0)},"data-active":R,style:R&&Fe?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:(0,he.jsx)(QS,{size:21})}),(0,he.jsxs)("span",{className:fe.buttonTooltip,children:[R?"Exit layout mode":"Layout mode",(0,he.jsx)("span",{className:fe.shortcut,children:"L"})]})]}),(0,he.jsxs)("div",{className:fe.buttonWrapper,children:[(0,he.jsx)("button",{className:fe.controlButton,onClick:b=>{b.stopPropagation(),_o(),Ze(!Ye)},disabled:!vi||R,children:(0,he.jsx)(BS,{size:24,isOpen:Ye})}),(0,he.jsxs)("span",{className:fe.buttonTooltip,children:[Ye?"Hide markers":"Show markers",(0,he.jsx)("span",{className:fe.shortcut,children:"H"})]})]}),(0,he.jsxs)("div",{className:fe.buttonWrapper,children:[(0,he.jsx)("button",{className:`${fe.controlButton} ${vt?fe.statusShowing:""}`,onClick:b=>{b.stopPropagation(),_o(),yl()},disabled:R&&Fe?we.length===0&&!ht?.sections?.length:!vi&&qo.length===0&&we.length===0&&!ht?.sections?.length,"data-active":vt,children:(0,he.jsx)(zS,{size:24,copied:vt,tint:R&&Fe&&(we.length>0||ht?.sections?.length)?"#f97316":void 0})}),(0,he.jsxs)("span",{className:fe.buttonTooltip,children:[R&&Fe?"Copy layout":"Copy feedback",(0,he.jsx)("span",{className:fe.shortcut,children:"C"})]})]}),(0,he.jsxs)("div",{className:`${fe.buttonWrapper} ${fe.sendButtonWrapper} ${V&&!Rt.webhooksEnabled&&(hi(Rt.webhookUrl)||hi(Y||""))?fe.sendButtonVisible:""}`,children:[(0,he.jsxs)("button",{className:`${fe.controlButton} ${W==="sent"||W==="failed"?fe.statusShowing:""}`,onClick:b=>{b.stopPropagation(),_o(),tc()},disabled:!vi||!hi(Rt.webhookUrl)&&!hi(Y||"")||W==="sending","data-no-hover":W==="sent"||W==="failed",tabIndex:hi(Rt.webhookUrl)||hi(Y||"")?0:-1,children:[(0,he.jsx)(LS,{size:24,state:W}),vi&&W==="idle"&&(0,he.jsx)("span",{className:fe.buttonBadge,children:F.length})]}),(0,he.jsxs)("span",{className:fe.buttonTooltip,children:["Send Annotations",(0,he.jsx)("span",{className:fe.shortcut,children:"S"})]})]}),(0,he.jsxs)("div",{className:fe.buttonWrapper,children:[(0,he.jsx)("button",{className:fe.controlButton,onClick:b=>{b.stopPropagation(),_o(),ba()},disabled:!vi&&qo.length===0&&we.length===0&&!ht?.sections?.length,"data-danger":!0,children:(0,he.jsx)(US,{size:24})}),(0,he.jsxs)("span",{className:fe.buttonTooltip,children:["Clear all",(0,he.jsx)("span",{className:fe.shortcut,children:"X"})]})]}),(0,he.jsxs)("div",{className:fe.buttonWrapper,children:[(0,he.jsx)("button",{className:fe.controlButton,onClick:b=>{b.stopPropagation(),_o(),R&&Jl(),De(!se)},children:(0,he.jsx)(HS,{size:24})}),B&&Wn!=="disconnected"&&(0,he.jsx)("span",{className:`${fe.mcpIndicator} ${fe[Wn]} ${se?fe.hidden:""}`,title:Wn==="connected"?"MCP Connected":"MCP Connecting..."}),(0,he.jsx)("span",{className:fe.buttonTooltip,children:"Settings"})]}),(0,he.jsx)("div",{className:fe.divider}),(0,he.jsxs)("div",{className:`${fe.buttonWrapper} ${xn&&typeof window<"u"&&xn.x>window.innerWidth-120?fe.buttonWrapperAlignRight:""}`,children:[(0,he.jsx)("button",{className:fe.controlButton,onClick:b=>{b.stopPropagation(),_o(),gl()},children:(0,he.jsx)(IS,{size:24})}),(0,he.jsxs)("span",{className:fe.buttonTooltip,children:["Exit",(0,he.jsx)("span",{className:fe.shortcut,children:"Esc"})]})]})]}),(0,he.jsx)(x7,{visible:R&&V,activeType:Oe,onSelect:b=>{Ae(Oe===b?null:b)},isDarkMode:Fl,sectionCount:ht?.sections.length??0,onDetectSections:()=>{let b=A7(),x=ht?.sections??[],z=new Set(x.map(ve=>ve.selector)),D=b.filter(ve=>!z.has(ve.selector)),L=[...x,...D],K=[...ht?.originalOrder??[],...D.map(ve=>ve.id)];Xo({sections:L,originalOrder:K,detectedAt:Date.now()})},placementCount:we.length,onClearPlacements:()=>{js(b=>b+1),gu(b=>b+1),ct(()=>{Xo({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Fe,onBlankCanvasChange:b=>{let x={sections:[],originalOrder:[],detectedAt:Date.now()};b?(Vi.current={rearrange:ht,placements:we},Xo(Wl.current.rearrange||x),be(Wl.current.placements),Ae(null)):(Wl.current={rearrange:ht,placements:we},Xo(Vi.current.rearrange||x),be(Vi.current.placements)),tn(b)},wireframePurpose:An,onWireframePurposeChange:Mo,Tooltip:$s,onDragStart:(b,x)=>{x.preventDefault();let z=Ue[b],D=null,L=!1,K=x.clientX,ve=x.clientY,He=x.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,We=mt=>{let xt=mt.clientX-K,ot=mt.clientY-ve;if(!L&&(Math.abs(xt)>4||Math.abs(ot)>4)&&(L=!0,D=document.createElement("div"),D.className=`${te.dragPreview}${Fe?` ${te.dragPreviewWireframe}`:""}`,document.body.appendChild(D)),!D)return;let Le=Math.max(0,He-mt.clientY),wn=Math.min(1,Le/180),Pt=1-Math.pow(1-wn,2),Yn=28,Jt=20,Mn=Math.min(140,z.width*.18),Qe=Math.min(90,z.height*.18),st=Yn+(Mn-Yn)*Pt,Sn=Jt+(Qe-Jt)*Pt;D.style.width=`${st}px`,D.style.height=`${Sn}px`,D.style.left=`${mt.clientX-st/2}px`,D.style.top=`${mt.clientY-Sn/2}px`,D.style.opacity=`${.5+.5*Pt}`,D.textContent=Pt>.25?b:""},Ke=mt=>{if(window.removeEventListener("mousemove",We),window.removeEventListener("mouseup",Ke),D&&document.body.removeChild(D),L){let xt=z.width,ot=z.height,Le=window.scrollY,wn=Math.max(0,mt.clientX-xt/2),Pt=Math.max(0,mt.clientY+Le-ot/2),Yn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:b,x:wn,y:Pt,width:xt,height:ot,scrollY:Le,timestamp:Date.now()};be(Jt=>[...Jt,Yn]),Ae(null),mi.current=new Set,$o(Jt=>Jt+1)}};window.addEventListener("mousemove",We),window.addEventListener("mouseup",Ke)}}),(0,he.jsx)(j9,{settings:Rt,onSettingsChange:b=>Gr(x=>({...x,...b})),isDarkMode:Fl,onToggleTheme:bf,isDevMode:vf,connectionStatus:Wn,endpoint:B,isVisible:ze,toolbarNearBottom:!!xn&&xn.y<230,settingsPage:Ve,onSettingsPageChange:ft,onHideToolbar:Ru})]})}),(R||Z)&&(0,he.jsx)("div",{className:`${te.blankCanvas} ${Tn?te.visible:""} ${_a?te.gridActive:""}`,style:{"--canvas-opacity":Jn},"data-feedback-toolbar":!0}),R&&Fe&&Tn&&(0,he.jsxs)("div",{className:te.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,he.jsxs)("div",{className:te.wireframeOpacityRow,children:[(0,he.jsx)("span",{className:te.wireframeOpacityLabel,children:"Toggle Opacity"}),(0,he.jsx)("input",{type:"range",className:te.wireframeOpacitySlider,min:0,max:1,step:.01,value:Jn,onChange:b=>ao(Number(b.target.value))})]}),(0,he.jsxs)("div",{className:te.wireframeNoticeTitleRow,children:[(0,he.jsx)("span",{className:te.wireframeNoticeTitle,children:"Wireframe Mode"}),(0,he.jsx)("span",{className:te.wireframeNoticeDivider}),(0,he.jsx)("button",{className:te.wireframeStartOver,onClick:()=>{js(b=>b+1),Xo({sections:[],originalOrder:[],detectedAt:Date.now()}),Wl.current={rearrange:null,placements:[]},Mo(""),G_(rt)},children:"Start Over"})]}),"Drag components onto the canvas.",(0,he.jsx)("br",{}),"Copied output will only include the wireframed layout."]}),(R||Z)&&(0,he.jsx)(p7,{placements:we,onChange:be,activeComponent:Z?null:Oe,onActiveComponentChange:Ae,isDarkMode:Fl,exiting:Z,onInteractionChange:Xi,passthrough:!Oe,extraSnapRects:ht?.sections.map(b=>b.currentRect),deselectSignal:ma,clearSignal:pu,wireframe:Fe,onSelectionChange:(b,x)=>{mi.current=b,x||(Vr.current=new Set,e0(z=>z+1))},onDragMove:(b,x)=>{let z=Vr.current;if(!(!z.size||!ht)){if(!Vo.current){Vo.current=new Map;for(let D of ht.sections)z.has(D.id)&&Vo.current.set(D.id,{x:D.currentRect.x,y:D.currentRect.y})}for(let D of ht.sections){if(!z.has(D.id)||!Vo.current.get(D.id))continue;let K=document.querySelector(`[data-rearrange-section="${D.id}"]`);K&&(K.style.transform=`translate(${b}px, ${x}px)`)}}},onDragEnd:(b,x,z)=>{let D=Vr.current,L=Vo.current;if(Vo.current=null,!(!D.size||!ht||!L)){for(let K of D){let ve=document.querySelector(`[data-rearrange-section="${K}"]`);ve&&(ve.style.transform="")}z&&Xo(K=>K&&{...K,sections:K.sections.map(ve=>{let Me=L.get(ve.id);return Me?{...ve,currentRect:{...ve.currentRect,x:Math.max(0,Me.x+b),y:Math.max(0,Me.y+x)}}:ve})})}}}),(R||Z)&&ht&&(0,he.jsx)(L7,{rearrangeState:ht,onChange:Xo,isDarkMode:Fl,exiting:Z,blankCanvas:Fe,extraSnapRects:we.map(b=>({x:b.x,y:b.y,width:b.width,height:b.height})),clearSignal:_l,deselectSignal:_f,onSelectionChange:(b,x)=>{Vr.current=b,x||(mi.current=new Set,$o(z=>z+1))},onDragMove:(b,x)=>{let z=mi.current;if(z.size){if(!Vo.current){Vo.current=new Map;for(let D of we)z.has(D.id)&&Vo.current.set(D.id,{x:D.x,y:D.y})}for(let D of z){let L=document.querySelector(`[data-design-placement="${D}"]`);L&&(L.style.transform=`translate(${b}px, ${x}px)`)}}},onDragEnd:(b,x,z)=>{let D=mi.current,L=Vo.current;if(Vo.current=null,!(!D.size||!L)){for(let K of D){let ve=document.querySelector(`[data-design-placement="${K}"]`);ve&&(ve.style.transform="")}z&&be(K=>K.map(ve=>{let Me=L.get(ve.id);return Me?{...ve,x:Math.max(0,Me.x+b),y:Math.max(0,Me.y+x)}:ve}))}}}),(0,he.jsx)("canvas",{ref:pi,className:`${fe.drawCanvas} ${ml?fe.active:""}`,style:{opacity:Zs?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),(0,he.jsxs)("div",{className:fe.markersLayer,"data-feedback-toolbar":!0,children:[Xe&&or.filter(b=>!b.isFixed).map((b,x,z)=>(0,he.jsx)(lw,{annotation:b,globalIndex:or.findIndex(D=>D.id===b.id),layerIndex:x,layerSize:z.length,isExiting:Tt,isClearing:En,isAnimated:bo.has(b.id),isHovered:!Tt&&jt===b.id,isDeleting:Eo===b.id,isEditingAny:!!tt,renumberFrom:Rl,markerClickBehavior:Rt.markerClickBehavior,tooltipStyle:va(b),onHoverEnter:D=>!Tt&&D.id!==Ps.current&&Wo(D),onHoverLeave:()=>Wo(null),onClick:D=>Rt.markerClickBehavior==="delete"?io(D.id):nr(D),onContextMenu:nr},b.id)),Xe&&!Tt&&Du.filter(b=>!b.isFixed).map(b=>(0,he.jsx)(aw,{annotation:b},b.id))]}),(0,he.jsxs)("div",{className:fe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[Xe&&or.filter(b=>b.isFixed).map((b,x,z)=>(0,he.jsx)(lw,{annotation:b,globalIndex:or.findIndex(D=>D.id===b.id),layerIndex:x,layerSize:z.length,isExiting:Tt,isClearing:En,isAnimated:bo.has(b.id),isHovered:!Tt&&jt===b.id,isDeleting:Eo===b.id,isEditingAny:!!tt,renumberFrom:Rl,markerClickBehavior:Rt.markerClickBehavior,tooltipStyle:va(b),onHoverEnter:D=>!Tt&&D.id!==Ps.current&&Wo(D),onHoverLeave:()=>Wo(null),onClick:D=>Rt.markerClickBehavior==="delete"?io(D.id):nr(D),onContextMenu:nr},b.id)),Xe&&!Tt&&Du.filter(b=>b.isFixed).map(b=>(0,he.jsx)(aw,{annotation:b,fixed:!0},b.id))]}),V&&(0,he.jsxs)("div",{className:fe.overlay,"data-feedback-toolbar":!0,style:ne||tt?{zIndex:99999}:void 0,children:[it?.rect&&!ne&&!Ot&&!ya&&(0,he.jsx)("div",{className:`${fe.hoverHighlight} ${fe.enter}`,style:{left:it.rect.left,top:it.rect.top,width:it.rect.width,height:it.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Nn.filter(b=>document.contains(b.element)).map((b,x)=>{let z=b.element.getBoundingClientRect(),D=Nn.length>1;return(0,he.jsx)("div",{className:D?fe.multiSelectOutline:fe.singleSelectOutline,style:{position:"fixed",left:z.left,top:z.top,width:z.width,height:z.height,...D?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},x)}),jt&&!ne&&(()=>{let b=F.find(L=>L.id===jt);if(!b?.boundingBox)return null;if(b.elementBoundingBoxes?.length)return Lo.length>0?Lo.filter(L=>document.contains(L)).map((L,K)=>{let ve=L.getBoundingClientRect();return(0,he.jsx)("div",{className:`${fe.multiSelectOutline} ${fe.enter}`,style:{left:ve.left,top:ve.top,width:ve.width,height:ve.height}},`hover-outline-live-${K}`)}):b.elementBoundingBoxes.map((L,K)=>(0,he.jsx)("div",{className:`${fe.multiSelectOutline} ${fe.enter}`,style:{left:L.x,top:L.y-Yt,width:L.width,height:L.height}},`hover-outline-${K}`));let x=Pn&&document.contains(Pn)?Pn.getBoundingClientRect():null,z=x?{x:x.left,y:x.top,width:x.width,height:x.height}:{x:b.boundingBox.x,y:b.isFixed?b.boundingBox.y:b.boundingBox.y-Yt,width:b.boundingBox.width,height:b.boundingBox.height},D=b.isMultiSelect;return(0,he.jsx)("div",{className:`${D?fe.multiSelectOutline:fe.singleSelectOutline} ${fe.enter}`,style:{left:z.x,top:z.y,width:z.width,height:z.height,...D?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),it&&!ne&&!Ot&&!ya&&(0,he.jsxs)("div",{className:`${fe.hoverTooltip} ${fe.enter}`,style:{left:Math.max(8,Math.min(ye.x,window.innerWidth-100)),top:Math.max(ye.y-(it.reactComponents?48:32),8)},children:[it.reactComponents&&(0,he.jsx)("div",{className:fe.hoverReactPath,children:it.reactComponents}),(0,he.jsx)("div",{className:fe.hoverElementName,children:it.elementName})]}),ne&&(0,he.jsxs)(he.Fragment,{children:[ne.multiSelectElements?.length?ne.multiSelectElements.filter(b=>document.contains(b)).map((b,x)=>{let z=b.getBoundingClientRect();return(0,he.jsx)("div",{className:`${fe.multiSelectOutline} ${Zi?fe.exit:fe.enter}`,style:{left:z.left,top:z.top,width:z.width,height:z.height}},`pending-multi-${x}`)}):ne.targetElement&&document.contains(ne.targetElement)?(()=>{let b=ne.targetElement.getBoundingClientRect();return(0,he.jsx)("div",{className:`${fe.singleSelectOutline} ${Zi?fe.exit:fe.enter}`,style:{left:b.left,top:b.top,width:b.width,height:b.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():ne.boundingBox&&(0,he.jsx)("div",{className:`${ne.isMultiSelect?fe.multiSelectOutline:fe.singleSelectOutline} ${Zi?fe.exit:fe.enter}`,style:{left:ne.boundingBox.x,top:ne.boundingBox.y-Yt,width:ne.boundingBox.width,height:ne.boundingBox.height,...ne.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let b=ne.x,x=ne.isFixed?ne.y:ne.y-Yt;return(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(O9,{x:b,y:x,isMultiSelect:ne.isMultiSelect,isExiting:Zi}),(0,he.jsx)(F_,{ref:er,element:ne.element,selectedText:ne.selectedText,computedStyles:ne.computedStylesObj,placeholder:ne.element==="Area selection"?"What should change in this area?":ne.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Nl,onCancel:Js,isExiting:Zi,lightMode:!Fl,accentColor:ne.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,b/100*window.innerWidth)),...x>window.innerHeight-290?{bottom:window.innerHeight-x+20}:{top:x+20}}})]})})()]}),tt&&(0,he.jsxs)(he.Fragment,{children:[tt.elementBoundingBoxes?.length?ie.length>0?ie.filter(b=>document.contains(b)).map((b,x)=>{let z=b.getBoundingClientRect();return(0,he.jsx)("div",{className:`${fe.multiSelectOutline} ${fe.enter}`,style:{left:z.left,top:z.top,width:z.width,height:z.height}},`edit-multi-live-${x}`)}):tt.elementBoundingBoxes.map((b,x)=>(0,he.jsx)("div",{className:`${fe.multiSelectOutline} ${fe.enter}`,style:{left:b.x,top:b.y-Yt,width:b.width,height:b.height}},`edit-multi-${x}`)):(()=>{let b=qe&&document.contains(qe)?qe.getBoundingClientRect():null,x=b?{x:b.left,y:b.top,width:b.width,height:b.height}:tt.boundingBox?{x:tt.boundingBox.x,y:tt.isFixed?tt.boundingBox.y:tt.boundingBox.y-Yt,width:tt.boundingBox.width,height:tt.boundingBox.height}:null;return x?(0,he.jsx)("div",{className:`${tt.isMultiSelect?fe.multiSelectOutline:fe.singleSelectOutline} ${fe.enter}`,style:{left:x.x,top:x.y,width:x.width,height:x.height,...tt.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),(0,he.jsx)(F_,{ref:Ws,element:tt.element,selectedText:tt.selectedText,computedStyles:M7(tt.computedStyles),placeholder:"Edit your feedback...",initialValue:tt.comment,submitLabel:"Save",onSubmit:Ks,onCancel:ec,onDelete:()=>io(tt.id),isExiting:o0,lightMode:!Fl,accentColor:tt.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{let b=tt.isFixed?tt.y:tt.y-Yt;return{left:Math.max(160,Math.min(window.innerWidth-160,tt.x/100*window.innerWidth)),...b>window.innerHeight-290?{bottom:window.innerHeight-b+20}:{top:b+20}}})()})]}),ya&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("div",{ref:Ji,className:fe.dragSelection}),(0,he.jsx)("div",{ref:Ki,className:fe.highlightsContainer})]})]})]}),document.body)}function Ow(){if(typeof window>"u"||!window.location)return!1;let i=window.location.hostname||"",s=window.location.protocol||"";return i==="localhost"||i==="127.0.0.1"||i==="0.0.0.0"||i==="[::1]"||i.endsWith(".local")||s==="file:"}function d1(i={}){if(typeof window>"u"||typeof document>"u"||!Ow()||window.__agentationMounted||document.getElementById("agentation-root")||document.querySelector("[data-feedback-toolbar]"))return;if(window.__agentationMounted=!0,!document.body){document.addEventListener("DOMContentLoaded",()=>d1(i),{once:!0});return}let s=window.location.protocol==="http:",u=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname==="0.0.0.0",f=i.endpoint||(s||u?"http://localhost:4747":void 0);if(!document.querySelector('link[href*="agentation.css"]')){let M=document.createElement("link");M.rel="stylesheet",M.href="/src/agentation.css",document.head.appendChild(M)}let h="agentation-override-styles";if(!document.getElementById(h))try{let M=document.createElement("style");M.id=h,M.textContent=`
        [data-feedback-toolbar] {
          z-index: 2147483647 !important;
        }
        [data-annotation-popup] {
          z-index: 2147483647 !important;
        }
        [data-annotation-marker] {
          z-index: 2147483646 !important;
        }
        .styles-module__toolbar___wNsdK {
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          z-index: 2147483647 !important;
        }
        .styles-module__toolbarContainer___dIhma {
          pointer-events: auto !important;
          cursor: pointer !important;
        }
        .styles-module__toggleContent___0yfyP,
        .styles-module__toggleContent___0yfyP svg,
        .styles-module__toggleContent___0yfyP path {
          pointer-events: none !important;
        }
      `,document.head.appendChild(M)}catch{}let g=document.getElementById("agentation-root");g||(g=document.createElement("div"),g.id="agentation-root",g.style.position="relative",g.style.zIndex="2147483647",document.body.appendChild(g));let k=(0,Dw.createRoot)(g);k.render(Rw.default.createElement(Mw,{endpoint:f,...i}));let T=()=>{document.querySelectorAll('.styles-module__toolbar___wNsdK, [data-agentation-toolbar="true"]').forEach(B=>{B.style.setProperty("position","fixed","important"),B.style.setProperty("bottom","20px","important"),B.style.setProperty("right","20px","important"),B.style.setProperty("z-index","2147483647","important"),B.style.setProperty("pointer-events","none","important")}),document.querySelectorAll(".styles-module__toolbarContainer___dIhma").forEach(B=>{B.style.setProperty("pointer-events","auto","important"),B.style.setProperty("cursor","pointer","important")})};return setTimeout(T,100),setTimeout(T,500),setTimeout(T,1500),window.__agentation={root:k,mountNode:g},window.openAgentation=()=>{let M=document.querySelector('[data-feedback-toolbar] [class*="toolbarContainer"]');M&&(M.className.includes("collapsed")||!M.className.includes("expanded"))&&M.click()},window.closeAgentation=()=>{let M=document.querySelector('[data-feedback-toolbar] [class*="toolbarContainer"]');if(M&&M.className.includes("collapsed"))return;let ae=document.querySelector('[data-feedback-toolbar] button[aria-label*="Exit" i], [data-feedback-toolbar] button[title*="Exit" i], [data-feedback-toolbar] [class*="controlsContent"] [class*="buttonWrapper"]:last-child button');ae?ae.click():document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",code:"Escape",keyCode:27,which:27,bubbles:!0}))},window.toggleAgentation=()=>{let M=document.querySelector('[data-feedback-toolbar] [class*="toolbarContainer"]');M&&(M.className.includes("collapsed")||!M.className.includes("expanded"))?window.openAgentation():window.closeAgentation()},console.log(`%c[Agentation]%c Visual feedback toolbar loaded. MCP server connected at http://localhost:4747.
Click the circular launcher in the bottom-right corner or press Cmd+Shift+F to open/collapse.`,"color: #0071e3; font-weight: bold;","color: inherit;"),{root:k,mountNode:g}}typeof window<"u"&&Ow()&&!window.__agentationMounted&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>d1(),{once:!0}):d1());export{Ow as isLocalEnvironment,d1 as mountAgentation};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.development.js:
  (**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.development.js:
  (**
   * @license React
   * react-dom-client.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
