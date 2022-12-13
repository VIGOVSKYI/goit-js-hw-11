import './css/styles.css';

import { ImgApiService } from "./img-service";

import Notiflix from 'notiflix';


const searchFormRef = document.querySelector("#search-form");

const loadMoreBtnRef = document.querySelector(".load-more");

const galleryContainer = document.querySelector(".gallery");

const  imgApiService  = new ImgApiService();

searchFormRef.addEventListener("submit", onSearch);

loadMoreBtnRef.addEventListener("click", loadMore);

function showloadMoreBtn() {
loadMoreBtnRef.classList.remove("is-hidden");
 }

function hideloadMoreBtn() {
loadMoreBtnRef.classList.add("is-hidden");
}

function clearContainer() {
  galleryContainer.innerHTML = "";
}

hideloadMoreBtn();

function onSearch(e) {
  e.preventDefault();

  hideloadMoreBtn();
  
  clearContainer();
  
  imgApiService.query = e.currentTarget.elements.searchQuery.value;

  
  imgApiService.resetPage();
  
  // console.log(imgApiService.query);
  
  imgApiService.axiosApiImg().then(renderImg);
  
  showloadMoreBtn();
};

function loadMore() {
  imgApiService.axiosApiImg().then(renderImg);
  }

function renderImg() {
  imgApiService.axiosApiImg().then(data => {

  console.log("data", data);
    
  if (data.hits.length === 0) {
    Notiflix.Notify.failure(
    "Sorry, there are no images matching your search query. Please try again.",
             {
               fontSize: '15px',
               timeout: 3000,
             }
               )
    };
    // if (data.totalHits) {
    //   hideloadMoreBtn();
    // Notiflix.Notify.failure(
    // "We're sorry, but you've reached the end of search results.",
    //          {
    //            fontSize: '15px',
    //            timeout: 3000,
    //          }
    //            )
   
    //          }
  
  const markup = data.hits.map((key) =>
      `<div class="photo-card">
<img src=${key.webformatURL} alt=${key.tags} loading="lazy" width="300" height="300"/>
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
    // console.log(markup);

    galleryContainer.insertAdjacentHTML("beforeend", markup);
  })
  .catch(error => {
    // if (error) {
    //   hideloadMoreBtn();

    // Notiflix.Notify.failure(
    // "We're sorry, but you've reached the end of search results.",
    //          {
    //            fontSize: '15px',
    //            timeout: 3000,
    //          }
    //            )
    //          }
 
});
};





// Notiflix.Notify.success(
//              "Too many matches found. Please enter a more specific name.",
//              {
//                fontSize: '15px',
//                timeout: 1500,
//              }
//            )
  




  




































  
  





    
