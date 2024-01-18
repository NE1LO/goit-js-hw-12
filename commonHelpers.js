import{a as u,i as d,S as f}from"./assets/vendor-2d2b6a0e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const h=document.querySelector(".photo-list"),y=n=>{let o;o=n.reduce((s,e)=>s+`<li class="photo-list__item">
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
      </li>`,""),h.insertAdjacentHTML("beforeend",o)},m=document.querySelector(".btn-more"),g=document.querySelector(".loader"),b=u.create({baseURL:"https://pixabay.com/api/",params:{key:"41690622-1f4c10e5fb0aefa04cb32f231","Content-Type":"application/json",image_type:"photo",orientation:"horizontal",safesearch:!0}}),_=async({page:n,perPage:o,q:s})=>{try{return(await b.get("",{params:{page:n,per_page:o,q:s}})).data}catch(e){console.log(e)}},v=n=>{let o=1;const s=40;return async()=>{try{const{hits:e,total:t}=await _({page:o,perPage:s,q:n});if(o>=Math.ceil(t/s)){d.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),m.style.display="none",g.style.display="none";return}return o++,e}catch(e){console.error(e)}}},p=document.querySelector(".photo-list"),a=document.querySelector(".form"),c=document.querySelector(".loader"),i=document.querySelector(".btn-more"),w=new f(".photo-list a");a.addEventListener("submit",async n=>{n.preventDefault(),p.innerHTML="";const o=a.search.value.trim();if(o===""){d.error({message:"you need to write the text",position:"topRight"});return}const s=v(o),e=async()=>{c.style.display="flex";const t=await s();if(t.length==0){d.error({message:"Sorry we can't find this photo",position:"topRight"}),i.style.display="none",c.style.display="none",a.search.value="";return}else c.style.display="none",y(t),w.refresh(),i.style.display==="flex"&&(p.lastElementChild,window.scrollBy({top:850,behavior:"smooth"})),i.style.display="flex"};await e(),i.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers.js.map
