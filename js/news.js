



// loading news for each news category
const loadnews = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayallnews(data.data))

}




//spinner function 

const toggleSpinner = isLoading => {
    const loadingSection = document.getElementById('loading');
    if (isLoading) {
        loadingSection.classList.remove('d-none')
        console.log("spinner done");
    }
    else {
        loadingSection.classList.add('d-none');
    }
}





// displaynews each news category

const displayallnews = news => {
    console.log(news);
    const allNews = document.getElementById("news-sec");
    allNews.innerText = news.length;




    const newsContainer = document.getElementById('newsContainer');

    newsContainer.innerHTML = ``;

    news.forEach(individual => {
        console.log(individual);
        let i = 0;
        let txt1 = "0";
        let c = 1;

       

        const news_Div = document.createElement('div');
        news_Div.classList.add('col');
        txt2 = c.toString();
        let result = txt1.concat(txt2);
        news_Div.innerHTML = `
        
   <div class="col-12 col-lg-12 col-sm-12">
        <div class="card">
              <div class="row">
                 <div class="col-lg-5 col-sm-12">
                  <img src="${individual.thumbnail_url}" class="card-img-top img-fluid" alt="...">
                  </div>
                    <div class="col-lg-7 col-sm-12">
                        <div class="card-body">
                            <h5 class="card-title fs-2 fw-bold mt-5">${individual.title}</h5>
                            <p class="card-text fs-4 text-secondary mt-5">${individual.details}</p>
                            <div class="d-flex mt-5">
                                <img style="width:5%; height:10%;border-radius: 50%;" src="${individual.author.img}" alt=" ...">
                                <div>
                                    <h4 class="fw-bold"> ${individual.author.name ? individual.author.name : 'No Author found'}</h4>
                                    <p class="text-secondary">  ${individual.author.published_date ? individual.author.published_date.substring(0, 10) : 'No date'}</p >
                                </div >
                                <div class="p-5"> <i
                                        class="fa-regular fa-eye fs-5 ">${individual.rating.number}</i></div>
                                <div class="p-5 d-flex">
                                    <i class="fa-regular fa-star-half-stroke"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div> 
                            <button onclick="loadnewsDetails('${individual._id}')"href="#" class="btn btn-primary w-50 h-25 px-2 py-3" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
                            </div >
                        </div >
                    </div >
                </div >
           </div >
       </div >
    `;
        i++;

        newsContainer.appendChild(news_Div);

    })


    // stop spinner
    toggleSpinner(false);
}



loadnews("01");






// loading each news-details

const loadnewsDetails = async (id) => {
    console.log(id);
    const url = ` https://openapi.programming-hero.com/api/news/${id}`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => displaynewsDetails(data.data));
};


// displaying news details

const displaynewsDetails = (modals) => {
    console.log(modals);
    console.log(modals[0].title);
    const modalTitle = document.getElementById("pModal");
    modalTitle.innerText = modals[0].title;
    const phoneDetails = document.getElementById('pdetails');
    phoneDetails.innerHTML = `
    <img src="${modals[0].thumbnail_url}" class="card-img-top img-fluid" alt="...">
    <p class ="mt-5"> <span class ="fw-bold fs-5"> Details : </span> ${modals[0].details ? modals[0].details : 'No details Found'}</p>
    <p><span class ="fw-bold fs-5"> Author name: </span> ${modals[0].author.name ? modals[0].author.name : 'No author Found'}</p>
    `
};
