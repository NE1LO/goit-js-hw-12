import{S as i,a as l}from"./assets/vendor-f246f6af.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector(".photo-list");const c=document.querySelector(".form");document.querySelector(".loader");new i(".photo-list a");const u=l.create({baseURL:"https://pixabay.com/api/",params:{key:"41690622-1f4c10e5fb0aefa04cb32f231","Content-Type":"application/json",image_type:"photo",orientation:"horizontal",safesearch:!0}}),f=async n=>{try{return(await u.get("",{params:{q:n,page:1,per_page:40}})).data}catch(o){throw o}};c.addEventListener("submit",async n=>{n.preventDefault();const o=c.search.value;try{const r=await f(o);console.log(r)}catch(r){console.log(r)}});
//# sourceMappingURL=commonHelpers.js.map
