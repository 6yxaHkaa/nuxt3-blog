import{a as u,A as p,B as f,o as g,v,D as e,x as s,p as c,u as n,E as x,F as w,G as m,q as z,H as k,I as M,J as b}from"./entry.aa2fd21b.mjs";import{u as A}from"./state.f228ec5c.mjs";const B={class:"w-full flex justify-around mb-8 items-center md:w-full dark:bg-gray-600 bg-gray-500 py-2"},C=m("My Blog"),E={class:"flex justify-between items-center"},y=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-sun",viewBox:"0 0 16 16"},[e("path",{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})],-1),L=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 24 24"},[e("g",null,[e("path",{fill:"none",d:"M0 0h24v24H0z"}),m(),e("path",{"fill-rule":"nonzero",d:"M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"})])],-1),S={class:"main-div p-5"},V=e("h1",{class:"text-center text-red-500"},"Document not found",-1),I=u({__name:"[...slug]",setup(D){const d="theme",a=A("theme",()=>!1,"$aROEKgqrzL"),l=t=>{localStorage.setItem(d,t),a.value=t==="dark"};return p(()=>{const t=window.matchMedia("(prefers-color-scheme: dark)").matches,o=localStorage.getItem(d);l(o||(t?"dark":"light"))}),f(a,t=>{l(t?"dark":"light")}),(t,o)=>{const h=z,i=b,_=k;return g(),v("main",{class:w([{"theme-light":!n(a),"theme-dark":n(a)},"h-screen bg-themeBackground"])},[e("header",B,[s(h,{to:"/",class:"font-bold text-2xl text-white"},{default:c(()=>[C]),_:1}),e("div",E,[y,s(n(M),{modelValue:n(a),"onUpdate:modelValue":o[0]||(o[0]=r=>x(a)?a.value=r:null),class:"ml-4 md:mx-2"},null,8,["modelValue"]),L])]),e("div",S,[s(_,{path:t.$route.path},{default:c(({doc:r})=>[s(i,{value:r,class:"pr-3"},null,8,["value"])]),"not-found":c(()=>[V]),_:1},8,["path"])])],2)}}});export{I as default};
