import{f as R,s as c,C,o as m,c as f,a as l,t as D,h as u,n as A,q as I,g as M,b as g,j as k,w as V,F as z,k as B,v as N,D as P,G as T,m as q,l as $}from"./entry.d58c5db0.js";import O from"./uploadLayout.d2a5385d.js";import"./TopNav.1b3dc74b.js";import"./nuxt-link.b7d80b15.js";const H={class:"w-[100%] relative flex justify-center"},G={__name:"uploadError",props:["errorType"],setup(h){const y=h,{errorType:d}=R(y);let a=c("");return C(()=>d.value,()=>{d.value=="caption"?a.value="Maximum 150 characters.":d.value=="bio"?a.value="Maximum 80 characters.":d.value=="file"?a.value="Unsupported file. Use MP4 instead.":a.value=""}),(x,v)=>(m(),f("div",H,[l("div",{class:A(["absolute top-6 z-50 mx-auto bg-black bg-opacity-70 text-white px-14 py-3 rounded-sm",u(d)?"visible":"invisible"])},D(u(a)),3)]))}},X=G;const J={key:0,class:"fixed flex items-center justify-center top-0 left-0 w-full h-screen bg-black z-50 bg-opacity-50"},K={class:"w-full mt-[80px] mb-[40px] bg-white dark:bg-black shadow-lg rounded-md py-6 md:px-10 px-4"},Q={key:0,class:"text-[23px] font-semibold"},W={key:1,class:"text-[23px] font-semibold"},Y=l("div",{class:"text-gray-400 mt-1"},"Add tiles to your story",-1),Z={class:"mt-5"},ee={class:"flex items-center justify-between"},te=l("div",{class:"mb-1 text-[15px]"},"Title",-1),le={class:"text-gray-400 text-[12px]"},se={class:"list"},oe=["onDrop"],ae=l("div",{class:"px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-[#f0cc2c] rounded-sm"}," Select file ",-1),ne={class:"flex gap-3"},re=l("button",{class:"add-btn"},"+",-1),me={__name:"index",setup(h){const{$userStore:y}=$(),d=I();let a=c(null),x=c(null),v=c(null),r=c(""),p=c(null),b=c(null),_=c(!1),F="All",w=new URL(document.location).searchParams.get("repostId");C(()=>r.value,e=>{if(e.length>=150){v.value="caption";return}v.value=null}),M(async()=>{const e=document.querySelector(".add-btn");document.querySelector(".list");function t(s){const o=s.target.parentElement;
