import{_ as v}from"./nuxt-link.4a68c461.js";import{A as w,q as y,s as k,o as a,c,a as e,n as _,h as o,b as n,w as f,C as h,j as C,l as $,m as z}from"./entry.88697106.js";const N={id:"TopNav",class:"relative bg-white dark:bg-black z-30 flex items-center w-full border-b h-[61px]"},L=e("h1",null,"UnDumb",-1),j={class:"hidden md:flex items-center bg-[#F1F1F2] p-1 rounded-full max-w-[480px] w-full"},A=e("input",{type:"text",class:"w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none",placeholder:"Search accounts"},null,-1),P={class:"px-3 py-1 flex items-center border-l border-l-gray-300"},B={class:"flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full"},F=e("span",{class:"px-2 font-medium text-[15px]"},"Upload",-1),R={key:0,class:"flex items-center"},S=e("span",{class:"mx-4 font-medium text-[15px]"},"Log in",-1),V=[S],I={key:1,class:"flex items-center"},M={class:"relative"},O=["src"],T={key:0,id:"PopupMenu",class:"absolute bg-white dark:bg-black rounded-lg py-1.5 w-[200px] shadow-xl border top-[43px] -right-2"},U=e("span",{class:"pl-2 font-semibold text-sm"},"Profile",-1),q=e("span",{class:"pl-2 font-semibold text-sm"},"Log out",-1),D={__name:"TopNav",setup(E){const{$userStore:l,$generalStore:d}=$(),u=w(),p=y();let s=k(!1);const g=()=>{l.id?p.push("/upload"):d.isLoginOpen=!0},b=()=>{try{l.logout(),p.push("/")}catch(m){console.log(m)}};return(m,t)=>{const x=v,i=z;return a(),c("div",N,[e("div",{class:_([o(u).fullPath==="/"?"max-w-[1150px]":"","flex items-center justify-between w-full px-6 mx-auto"])},[e("div",{class:_(o(u).fullPath==="/"?"w-[70%]":"lg:w-[20%] w-[70%]")},[n(x,{to:"/"},{default:f(()=>[L]),_:1})],2),e("div",j,[A,e("div",P,[n(i,{name:"ri:search-line",color:"#A1A2A7",size:"22"})])]),e("div",B,[e("button",{onClick:t[0]||(t[0]=r=>g()),class:"flex items-center border rounded-sm px-3 py-[6px]"},[n(i,{name:"mdi:plus",size:"22"}),F]),o(l).id?(a(),c("div",I,[e("div",M,[e("button",{class:"mt-1",onClick:t[2]||(t[2]=r=>h(s)?s.value=!o(s):s=!o(s))},[e("img",{class:"rounded-full",width:"33",src:o(l).image},null,8,O)]),o(s)?(a(),c("div",T,[n(x,{to:`/profile/${o(l).id}`,onClick:t[3]||(t[3]=r=>h(s)?s.value=!1:s=!1),class:"flex items-center justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer"},{default:f(()=>[n(i,{name:"ph:user",size:"20"}),U]),_:1},8,["to"]),e("div",{onClick:t[4]||(t[4]=r=>b()),class:"flex items-center justify-start py-3 px-1.5 hover:bg-gray-100 border-t cursor-pointer"},[n(i,{name:"ic:outline-login",size:"20"}),q])])):C("",!0)])])):(a(),c("div",R,[e("button",{onClick:t[1]||(t[1]=r=>o(d).isLoginOpen=!0),class:"flex items-center bg-[#f0cc2c] text-white border rounded-md px-3 py-[6px]"},V),n(i,{name:"mdi:dots-vertical",color:"#161724",size:"25"})]))])],2)])}}},J=D;export{J as _};