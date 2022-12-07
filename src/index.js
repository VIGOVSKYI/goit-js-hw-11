import './css/styles.css';

const searchFormRef = document.querySelector("#search-form");

const galleryContainer = document.querySelector(".gallery");

searchFormRef.addEventListener("submit",onSearch);

function onSearch(e) {
    e.preventDefault();

    const searchValue = e.currentTarget.elements.searchQuery.value;

    console.log(searchValue);

    // const API_KEY = "31894288-d396035e6b984cce02ff6ba47";

    const URL = `https://pixabay.com/api/?key=31894288-d396035e6b984cce02ff6ba47
    &q=${searchValue}&per_page=10&page=1
    &image_type=fhoto&orientation=horizontal&safesearch=true`

    fetch(URL).then(response => response.json()).then(data => console.log(data));

};

    































{/* <div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div> */}
