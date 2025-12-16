import{a as p,S as d,i as o}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const g="https://pixabay.com/api/",y="53720827-61573bf1b5aa28f0604879aae";async function m(s){const t={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1},{data:r}=await p.get(g,{params:t});return r}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const t=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:a,views:i,comments:f,downloads:u})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${n}">
            <img class="gallery-img" src="${r}" alt="${e}" />
            </a>
            <div class="gallery-info">
            <div class="gallery-info-item">
                <span class="gallery-info-label">Likes</span>
                <span class="gallery-info-value">${a}</span>
            </div>
            <div class="gallery-info-item">
                <span class="gallery-info-label">Views</span>
                <span class="gallery-info-value">${i}</span>
            </div>
            <div class="gallery-info-item">
                <span class="gallery-info-label">Comments</span>
                <span class="gallery-info-value">${f}</span>
            </div>
            <div class="gallery-info-item">
                <span class="gallery-info-label">Downloads</span>
                <span class="gallery-info-value">${u}</span>
            </div>
            </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){l.innerHTML=""}function b(){c.classList.remove("is-hidden")}function S(){c.classList.add("is-hidden")}const w=document.querySelector(".form"),q=document.querySelector(".form-input");w.addEventListener("submit",P);async function P(s){s.preventDefault();const t=q.value.trim();if(!t){o.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}L(),b();try{const r=await m(t);if(!r.hits||r.hits.length===0){o.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(r.hits)}catch{o.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}}
//# sourceMappingURL=index.js.map
