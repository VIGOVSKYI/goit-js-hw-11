import './css/styles.css';

import axios from "axios";

const searchFormRef = document.querySelector("#search-form");

const galleryContainer = document.querySelector(".gallery");

searchFormRef.addEventListener("submit", onSearch);


async function onSearch(e) {
    e.preventDefault();

    const searchValue = e.currentTarget.elements.searchQuery.value;

    console.log(searchValue);

    const API_KEY = "31894288-d396035e6b984cce02ff6ba47";

    const URL = `https://pixabay.com/api/?key=${API_KEY}
    &q=${searchValue}&per_page=10&page=1
    &image_type=photo&orientation=horizontal&safesearch=true`
  
 
  // const response =
  await axios.get(URL).then(response => {response.map((key) => 

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
      
    });
  
  console.log(response);
  
  // const objectPhoto = response.json();
  
  // console.log(objectPhoto);
  
  //   return objectPhoto;
  

// axios(URL).then(data => console.log(data)).catch(error => console.log(error));
};





// const markup = Object.map((key) => 

//       `<div class="photo-card">
//   <img src=${key.webformatURL} alt=${key.tags} loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes ${key.likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views ${key.views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments ${key.comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads ${key.downloads}</b>
//     </p>
//   </div>
// </div>`)
//     .join("");

//     console.log(markup);

//   galleryContainer.insertAdjacentHTML("beforeend", markup);


    
