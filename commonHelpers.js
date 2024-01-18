import{a as u,i as d,S as f}from"./assets/vendor-2d2b6a0e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const h=document.querySelector(".photo-list"),y=n=>{let o;o=n.reduce((r,e)=>r+`<li class="photo-list__item">
        <a href="${e.largeImageURL}">
          <img
            width="360"
            height="200"
            src="${e.largeImageURL}"
            alt="${e.tags}"
          />
        </a>
        <div class="photo-list__block">
          <div class="photo-list__block__info">
            <p><b>Likes</b></p>
            <p>${e.likes}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Views</b></p>
            <p>${e.views}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Comments</b></p>
            <p>${e.comments}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Download</b></p>
            <p>${e.downloads}</p>
          </div>
        </div>
      </li>`,""),h.insertAdjacentHTML("beforeend",o)},m=document.querySelector(".btn-more");document.querySelector(".loader");const g=u.create({baseURL:"https://pixabay.com/api/",params:{key:"41690622-1f4c10e5fb0aefa04cb32f231","Content-Type":"application/json",image_type:"photo",orientation:"horizontal",safesearch:!0}}),b=async({page:n,perPage:o,q:r})=>{try{return(await g.get("",{params:{page:n,per_page:o,q:r}})).data}catch(e){console.log(e)}},_=n=>{let o=!1,r=1;const e=40;return async()=>{try{if(console.log(o),o)return d.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),m.style.display="none",[];const{hits:t,total:s}=await b({page:r,perPage:e,q:n});return r>=Math.ceil(s/e)&&(o=!0),r++,t}catch(t){console.error(t)}}},v=document.querySelector(".photo-list"),c=document.querySelector(".form"),p=document.querySelector(".loader"),i=document.querySelector(".btn-more"),L=new f(".photo-list a");i.style.display="none";let l=null;c.addEventListener("submit",async n=>{n.preventDefault(),l!==null&&i.removeEventListener("click",l),v.innerHTML="";const o=c.search.value,r=_(o);l=async()=>{p.style.display="flex";const e=await r();e.length<1?(d.error({message:"Sorry we can't find this photo",position:"topRight"}),i.style.display="none",p.style.display="none",c.search.value=""):(p.style.display="none",y(e),L.refresh(),i.style.display="flex")},await l(),i.addEventListener("click",l)});
//# sourceMappingURL=commonHelpers.js.map
