import{S as f,a as m,i as a}from"./assets/vendor-1feca4b1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const g=document.querySelector(".photo-list"),d=s=>{let e;e=s.reduce((n,r)=>n+`<li class="photo-list__item">
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
      </li>`,""),g.insertAdjacentHTML("beforeend",e)},y=document.querySelector(".photo-list"),p=document.querySelector(".form");document.querySelector(".loader");const c=document.querySelector(".btn-more"),u=new f(".photo-list a"),b=m.create({baseURL:"https://pixabay.com/api/",params:{key:"41690622-1f4c10e5fb0aefa04cb32f231","Content-Type":"application/json",image_type:"photo",orientation:"horizontal",safesearch:!0}}),h=async s=>{try{return(await b.get("",{params:s})).data}catch(e){console.log(e)}},i={page:1,per_page:20,q:""};p.addEventListener("submit",async s=>{if(s.preventDefault(),y.innerHTML="",i.q=p.search.value.trim(),i.q===""){a.error({message:"you need to write the text",position:"topRight"});return}const e=await h(i);if(e.hits.length==0){a.error({message:"Sorry we can't find this photo",position:"topRight"});return}else d(e.hits),u.refresh(),c.style.display="flex"});c.addEventListener("click",async s=>{s.preventDefault(),i.page++;const e=await h(i);if(i.page>=Math.ceil(e.totalHits/i.per_page)){a.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c.style.display="none";return}else d(e.hits),window.scrollBy({top:3*document.querySelector(".photo-list__item").getBoundingClientRect().height,behavior:"smooth"}),u.refresh()});
//# sourceMappingURL=commonHelpers.js.map
