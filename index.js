import{a as m,S as d,i as n}from"./assets/vendor-D3Q8GMQW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="55467714-b30f475b74465712765c76d28",g="https://pixabay.com/api/";function h(i){const t={key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:t}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const t=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:a,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${r}</p>
            <p><b>Views:</b> ${a}</p>
            <p><b>Comments:</b> ${u}</p>
            <p><b>Downloads:</b> ${f}</p>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",t),y.refresh()}function L(){c.innerHTML=""}function S(){l.classList.add("is-visible")}function v(){l.classList.remove("is-visible")}const w=document.querySelector(".form");w.addEventListener("submit",P);function P(i){i.preventDefault();const t=i.currentTarget,o=t.elements["search-text"].value.trim();if(o===""){n.error({message:"Please fill in the search field!"});return}L(),S(),h(o).then(s=>{if(s.hits.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(s.hits)}).catch(s=>{n.error({message:`Something went wrong: ${s.message}`})}).finally(()=>{v(),t.reset()})}
//# sourceMappingURL=index.js.map
