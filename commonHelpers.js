import{S as f,a as l,i as p}from"./assets/vendor-c145bea9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=i=>{let s;return s=i.reduce((o,r)=>o+`<li class="photo-list__item">
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
      </li>`,""),s},h="41690622-1f4c10e5fb0aefa04cb32f231",a=document.querySelector(".photo-list"),d=document.querySelector(".form"),c=document.querySelector(".loader"),m=new f(".photo-list a"),g=i=>{i.preventDefault(),a.children.length>0&&(a.innerHTML=""),c.style.display="inline-block",l.defaults.baseURL="https://pixabay.com/api/",l.defaults.params={key:h,image_type:"photo",q:d.search.value,orientation:"horizontal",safesearch:!0},(async()=>await l.get())().then(o=>o.data).then(o=>{o.hits.length===0?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.style.display="none"):(a.innerHTML=u(o.hits),c.style.display="none",m.refresh())}).catch(o=>p.error({message:"error server",position:"topRight"})),d.reset()};d.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
