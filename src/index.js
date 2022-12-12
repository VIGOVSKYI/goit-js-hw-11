import './css/styles.css';

import { ImgApiService } from "./img-service";


const searchFormRef = document.querySelector("#search-form");

const loadMoreBtnRef = document.querySelector(".load-more");

const galleryContainer = document.querySelector(".gallery");

const  imgApiService  = new ImgApiService();

searchFormRef.addEventListener("submit", onSearch);

loadMoreBtnRef.addEventListener("click", loadMore);


function onSearch(e) {

    e.preventDefault();
  // galleryContainer.innerHTML = "";
  imgApiService.query = e.currentTarget.elements.searchQuery.value;
  imgApiService.resetPage();
  console.log(imgApiService.query);
  imgApiService.axiosApiImg();
  
};

function loadMore() {
  imgApiService.axiosApiImg().then(renderImg);
}

function renderImg() {

const markup = imgApiService.axiosApiImg().map((key) =>
        `<div class="photo-card">
<img src=${key.webformatURL} alt=${key.tags} loading="lazy" />
<div class="info">
  <p class="info-item">
    <b>Likes ${key.likes}</b>
  </p>
  <p class="info-item">
    <b>Views ${key.views}</b>
  </p>
  <p class="info-item">
    <b>Comments ${key.comments}</b>
  </p>
  <p class="info-item">
    <b>Downloads ${key.downloads}</b>
  </p>
</div>
</div>`)
    .join("");
    console.log(markup);

  galleryContainer.insertAdjacentHTML("beforeend", markup);
}
  




  




































  
  





    
