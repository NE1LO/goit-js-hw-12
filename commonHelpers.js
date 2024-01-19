import{S as y,a as m,i as p}from"./assets/vendor-1feca4b1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const g=document.querySelector(".photo-list"),u=s=>{let e;e=s.reduce((l,r)=>l+`<li class="photo-list__item">
        <a href="${r.largeImageURL}">
          <img
            width="360"
            height="200"
            src="${r.largeImageURL}"
            alt="${r.tags}"
          />
        </a>
        <div class="photo-list__block">
          <div class="photo-list__block__info">
            <p><b>Likes</b></p>
            <p>${r.likes}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Views</b></p>
            <p>${r.views}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Comments</b></p>
            <p>${r.comments}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Download</b></p>
            <p>${r.downloads}</p>
          </div>
        </div>
      </li>`,""),g.insertAdjacentHTML("beforeend",e)},b=document.querySelector(".photo-list"),d=document.querySelector(".form"),c=document.querySelector(".loader"),n=document.querySelector(".btn-more"),h=new y(".photo-list a"),_=m.create({baseURL:"https://pixabay.com/api/",params:{key:"41690622-1f4c10e5fb0aefa04cb32f231","Content-Type":"application/json",image_type:"photo",orientation:"horizontal",safesearch:!0}}),f=async s=>{try{return(await _.get("",{params:s})).data}catch(e){console.log(e)}},i={page:1,per_page:20,q:""};d.addEventListener("submit",async s=>{if(s.preventDefault(),b.innerHTML="",i.q=d.search.value.trim(),i.q===""){p.error({message:"you need to write the text",position:"topRight"});return}c.style.display="flex";const e=await f(i);if(e.hits.length==0){p.error({message:"Sorry we can't find this photo",position:"topRight"}),c.style.display="none",n.style.display="none";return}else u(e.hits),h.refresh(),c.style.display="none",n.style.display="flex"});n.addEventListener("click",async s=>{s.preventDefault(),i.page++;const e=await f(i);if(i.page>=Math.ceil(e.totalHits/i.per_page)){p.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n.style.display="none";return}else u(e.hits),window.scrollBy({top:3*document.querySelector(".photo-list__item").getBoundingClientRect().height,behavior:"smooth"}),h.refresh()});
//# sourceMappingURL=commonHelpers.js.map
