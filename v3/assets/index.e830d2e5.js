import{c as S,b as O,t as R,e as z,u as M,f as j,a as K}from"./use-translate.a4133d47.js";import{t as y,n as P,c as L,w as $}from"./with-install.00d98dcc.js";import{b as Y}from"./constant.80c6de18.js";import{c as Z}from"./interceptor.1d862fca.js";import{u as q}from"./use-placeholder.ce48cd4f.js";import{z as A,D as C,e as t,P as G,C as H,A as J,r as Q,o as W,a as X,w as a,B as e,h as u,t as n,d as T,F as ee}from"./vue-libs.bf80eadf.js";import{r as te,u as ae}from"./use-route.9fd68ea8.js";import{B as oe,I as ne}from"./index.fe213903.js";import{c as k}from"./index.3b22b198.js";import{T as le}from"./function-call.042ace5c.js";import"./use-height.83f492b2.js";import"./mount-component.4fccb495.js";import"./use-expose.b164e589.js";import"./index.baabf595.js";import"./use-touch.b6ff7b52.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.6cb86735.js";import"./index.3b031159.js";const[U,N]=S("tabbar"),ue={route:Boolean,fixed:y,border:y,zIndex:P,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:L(0),safeAreaInsetBottom:{type:Boolean,default:null}},w=Symbol(U);var re=A({name:U,props:ue,emits:["change","update:modelValue"],setup(i,{emit:o,slots:d}){const p=C(),{linkChildren:_}=O(w),v=q(p,N),g=()=>{var f;return(f=i.safeAreaInsetBottom)!=null?f:i.fixed},m=()=>{var s;const{fixed:f,zIndex:b,border:r}=i;return t("div",{ref:p,role:"tablist",style:R(b),class:[N({fixed:f}),{[Y]:r,"van-safe-area-bottom":g()}]},[(s=d.default)==null?void 0:s.call(d)])};return _({props:i,setActive:(f,b)=>{Z(i.beforeChange,{args:[f],done(){o("update:modelValue",f),o("change",f),b()}})}}),()=>i.fixed&&i.placeholder?v(m):m()}});const V=$(re),[ie,I]=S("tabbar-item"),ce=z({},te,{dot:Boolean,icon:String,name:P,badge:P,badgeProps:Object,iconPrefix:String});var se=A({name:ie,props:ce,emits:["click"],setup(i,{emit:o,slots:d}){const p=ae(),_=G().proxy,{parent:v,index:g}=M(w);if(!v)return;const m=H(()=>{var s;const{route:b,modelValue:r}=v.props;if(b&&"$route"in _){const{$route:c}=_,{to:x}=i,h=j(x)?x:{path:x};return!!c.matched.find(E=>{const D="path"in h&&h.path===E.path,F="name"in h&&h.name===E.name;return D||F})}return((s=i.name)!=null?s:g.value)===r}),B=b=>{var r;m.value||v.setActive((r=i.name)!=null?r:g.value,p),o("click",b)},f=()=>{if(d.icon)return d.icon({active:m.value});if(i.icon)return t(ne,{name:i.icon,classPrefix:i.iconPrefix},null)};return()=>{var h;const{dot:b,badge:r}=i,{activeColor:s,inactiveColor:c}=v.props,x=m.value?s:c;return t("div",{role:"tab",class:I({active:m.value}),style:{color:x},tabindex:0,"aria-selected":m.value,onClick:B},[t(oe,J({dot:b,class:I("icon"),content:r},i.badgeProps),{default:f}),t("div",{class:I("text")},[(h=d.default)==null?void 0:h.call(d,{active:m.value})])])}}});const l=$(se);const de=["src"],Ne=A({setup(i){const o=K({"zh-CN":{badge:"\u5FBD\u6807\u63D0\u793A",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",switchEvent:"\u76D1\u542C\u5207\u6362\u4E8B\u4EF6"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event"}}),d=C(0),p=C(0),_=C(0),v=C(0),g=C(0),m=C("home"),B={active:k("user-active.png"),inactive:k("user-inactive.png")},f=b=>{le(`${o("tab")} ${b+1}`)};return(b,r)=>{const s=Q("demo-block");return W(),X(ee,null,[t(s,{title:e(o)("basicUsage")},{default:a(()=>[t(e(V),{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=c=>d.value=c)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("matchByName")},{default:a(()=>[t(e(V),{modelValue:m.value,"onUpdate:modelValue":r[1]||(r[1]=c=>m.value=c)},{default:a(()=>[t(e(l),{name:"home",icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"search",icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"friends",icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"setting",icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("badge")},{default:a(()=>[t(e(V),{modelValue:p.value,"onUpdate:modelValue":r[2]||(r[2]=c=>p.value=c)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search",dot:""},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o",badge:"5"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o",badge:"20"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("customIcon")},{default:a(()=>[t(e(V),{modelValue:_.value,"onUpdate:modelValue":r[3]||(r[3]=c=>_.value=c)},{default:a(()=>[t(e(l),{badge:"3"},{icon:a(c=>[T("img",{src:c.active?B.active:B.inactive},null,8,de)]),default:a(()=>[T("span",null,n(e(o)("custom")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("customColor")},{default:a(()=>[t(e(V),{modelValue:v.value,"onUpdate:modelValue":r[4]||(r[4]=c=>v.value=c),"active-color":"#ee0a24","inactive-color":"#000"},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("switchEvent")},{default:a(()=>[t(e(V),{modelValue:g.value,"onUpdate:modelValue":r[5]||(r[5]=c=>g.value=c),onChange:f},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(`${e(o)("tab")} 1`),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(`${e(o)("tab")} 2`),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(`${e(o)("tab")} 3`),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(`${e(o)("tab")} 4`),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{Ne as default};
