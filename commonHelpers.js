import{a as b,S as v,i}from"./assets/vendor-D1eTGYtO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const m=document.querySelector(".loader");function h(){m.style.display="block"}function f(){m.style.display="none"}async function y(t,s){const c="44758497-ea11318ae0823ef09cb8fbdb5",o=new URLSearchParams({key:c,q:t,image_type:"photo",per_page:20,page:s}),{data:r}=await b.get(`https://pixabay.com/api/?${o}`);return console.log(r),r}function p(){gallery.innerHTML=""}const L=document.querySelector("#gallery");function w(t){const s=t.map(e=>`
     <div class="image-card">
            <a href="${e.largeImageURL}"><img src="${e.webformatURL}" width=360 height=200 alt="${e.tags}" /></a>
            <div class="image-text">
            <ul>
        <li><p>likes:</p><p>${e.likes}</p></li>
        <li><p>views:</p><p>${e.views}</p></li>
        <li><p>comments:</p><p>${e.comments}</p></li>
        <li><p>downloads:</p><p>${e.downloads}</p></li>
        </ul>
        </div>
      </div>
    `).join("");L.insertAdjacentHTML("beforeend",s),P.refresh()}const P=new v(".image-card a",{captionsData:"alt",captionDelay:250,navText:["&larr;","&rarr;"],closeText:"&times;"}),l=document.querySelector(".btn"),S=document.querySelector("#search-form"),g=document.querySelector("#searchInput");let n=1,a="",d=0;S.addEventListener("submit",async t=>{if(t.preventDefault(),p(),n=1,a=new FormData(t.target).get("query"),!a.trim())return i.show({position:"topRight",backgroundColor:"orange",message:"Будь ласка, введіть пошуковий запит."});if(a&&a.trim())try{h();const e=await y(a.trim(),n);if(console.log(e.hits),e.totalHits>0&&i.show({position:"topRight",backgroundColor:"green",message:`Found ${e.totalHits} results.`}),e.totalHits===0){p(),l.style.display="none",console.log(e.totalHits),i.show({position:"topRight",backgroundColor:"yellow",message:`Found ${e.totalHits} results.`}),g.value="";return}w(e.hits),d+=e.hits.length,g.value="",n+=1,n>1&&(l.textContent="Fetch more posts",l.style.display="block")}catch(e){console.log(e),i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{f()}});l.addEventListener("click",async()=>{if(a&&a.trim())try{h();const t=await y(a.trim(),n);w(t.hits),d+=t.hits.length,R(),n+=1,$(d,t.totalHits)}catch(t){console.log(t),i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{f()}});function $(t,s){t>=s&&(l.style.display="none",i.show({position:"topRight",backgroundColor:"yellow",message:"We're sorry, but you've reached the end of search results.'"}))}function R(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map