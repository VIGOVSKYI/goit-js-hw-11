import axios from "axios";

export class ImgApiService {

    constructor() { 
        this.searchValue = "";
        
        this.page = 1;
    }
    

async axiosApiImg() {
    
  console.log(this);

  const API_KEY = "31953746-f18352ce1cc5baacf746e1b6b";

  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchValue}&per_page=40&page=${this.page}&image_type=photo&orientation=horizontal&safesearch=true`
  
       return await axios.get(URL).then(response => {
        // console.log("response.data.totalHits",response.data.totalHits);

            // console.log(response.data.hits);
            this.page += 1;
     
            return response.data;

        });
    };

    resetPage() {
        this.page = 1;
    };
    
    
    get query () {
        return this.searchValue;
    };

    set query(NewQuery) {
        this.searchValue = NewQuery;
    };

};