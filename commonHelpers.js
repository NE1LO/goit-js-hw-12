import{S as f,a as d,i as p}from"./assets/vendor-c145bea9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=i=>{let s;return s=i.reduce((o,r)=>o+`<li class="photo-list__item">
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
      </li>`,""),s},l=document.querySelector(".photo-list"),c=document.querySelector(".form"),a=document.querySelector(".loader"),h=new f(".photo-list a"),m="41690622-1f4c10e5fb0aefa04cb32f231",g=i=>{i.preventDefault(),l.children.length>0&&(l.innerHTML=""),a.style.display="inline-block",d.defaults.baseURL="https://pixabay.com/api/",URLSearchParams({key:m,image_type:"photo",q:c.search.value,orientation:"horizontal",safesearch:!0}),(async()=>await d.get())().then(o=>o.data).then(o=>{o.hits.length===0?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.style.display="none"):(l.innerHTML=u(o.hits),a.style.display="none",h.refresh())}).catch(o=>p.error({message:"error server",position:"topRight"})),c.reset()};c.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
