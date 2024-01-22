import{S as y,a as g,i as l}from"./assets/vendor-1feca4b1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const m=document.querySelector(".photo-list"),h=i=>{let e;e=i.reduce((c,r)=>c+`<li class="photo-list__item">
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
      </li>`,""),m.insertAdjacentHTML("beforeend",e)},b=document.querySelector(".photo-list"),d=document.querySelector(".form"),a=document.querySelector(".loader"),n=document.querySelector(".btn-more"),u=new y(".photo-list a"),_=g.create({baseURL:"https://pixabay.com/api/",params:{key:"41690622-1f4c10e5fb0aefa04cb32f231","Content-Type":"application/json",image_type:"photo",orientation:"horizontal",safesearch:!0}}),f=async i=>{try{return(await _.get("",{params:i})).data}catch{l.error({message:"error server",position:"topRight"})}},s={page:1,per_page:40,q:""};d.addEventListener("submit",async i=>{if(i.preventDefault(),b.innerHTML="",n.style.display="none",s.page=1,s.q=d.search.value.trim(),s.q===""){l.error({message:"you need to write the text",position:"topRight"});return}a.style.display="flex";const e=await f(s);if(e.hits.length===0){l.error({message:"Sorry we can't find this photo",position:"topRight"}),a.style.display="none",n.style.display="none";return}h(e.hits),u.refresh(),a.style.display="none",n.style.display="flex",s.page===Math.ceil(e.totalHits/s.per_page)&&(l.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n.style.display="none",a.style.display="none")});n.addEventListener("click",async i=>{i.preventDefault(),s.page++;const e=await f(s);if(console.log(e),h(e.hits),window.scrollBy({top:3*document.querySelector(".photo-list__item").getBoundingClientRect().height,behavior:"smooth"}),u.refresh(),s.page===Math.ceil(e.totalHits/s.per_page)){l.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n.style.display="none";return}});
//# sourceMappingURL=commonHelpers.js.map
