import './css/styles.css';

import { ImgApiService } from "./img-service";

import Notiflix from 'notiflix';

// import SimpleLightbox from 'simplelightbox';

// import 'simplelightbox/dist/simple-lightbox.min.css';




const searchFormRef = document.querySelector("#search-form");

const loadMoreBtnRef = document.querySelector(".load-more");

const galleryContainer = document.querySelector(".gallery__list");

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

  // hideloadMoreBtn();
  
  clearContainer();
  
  imgApiService.query = e.currentTarget.elements.searchQuery.value;

  if (imgApiService.query.trim() !== "") {

    imgApiService.resetPage();
  
    // console.log(imgApiService.query);
  
    imgApiService.axiosApiImg().then(renderImg);
    
    showloadMoreBtn();
  }
};


function loadMore() {
  imgApiService.axiosApiImg().then(renderImg);
};


function renderImg() {
  
   
  imgApiService.axiosApiImg().then(data => {

  // console.log("data", data.hits);

let totalPages = Math.ceil(data.totalHits / data.hits.length) || null;
    
if (imgApiService.page === totalPages) {
  hideloadMoreBtn();

  Notiflix.Notify.failure(
    "We're sorry, but you've reached the end of search results.",
    {
      fontSize: '15px',
      timeout: 3000,
    }
  );
  
    };
    
    if (data.totalHits === 0) {
    
      hideloadMoreBtn();
      
      Notiflix.Notify.failure(
        "Sorry, there are no images matching your search query. Please try again.",
        {
          fontSize: '15px',
          timeout: 3000,
        }
        );
      };

  
  const markup = data.hits.map((key) =>
      `<li class="gallery__item gallery">
      <a class="gallery__link" href="${key.largeImageURL}">
      <img class="gallery__img" src="${key.webformatURL}" alt="${key.tags}" loading="lazy" width=400/>
      </a>
      <div class="gallery__info">
      <ul class="gallery__details-list"><li class="gallery__details-item"><p class="gallery__details">
          <b>Likes</b>
          ${key.likes}
        </p></li>
        <li class="gallery__details-item"><p class="gallery__details">
          <b>Views</b>
          ${key.views}
        </p></li>
        <li class="gallery__details-item"><p class="gallery__details">
          <b>Comments</b>
          ${key.comments}
        </p></li>
        <li class="gallery__details-item"><p class="gallery__details">
          <b>Downloads</b>
          ${key.downloads}
        </p></li></ul>
      </div>
    </li>`)
      .join("");
    // console.log(markup);

    galleryContainer.insertAdjacentHTML("beforeend", markup);
  })
  .catch(error => {
   console.log(error);

});
  
};
  




  




































  
  





    
