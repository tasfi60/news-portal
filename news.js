const loadnews = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    // console.log(url);
    // fetch('https://openapi.programming-hero.com/api/news/category/01')
    fetch(url)
        .then(res => res.json())
        .then(data => displaynews(data.data))
}

// const list = [];
// const totalNews = document.getElementById("total-news");
// totalNews.innerText = list.length;


const displaynews = news => {
    // console.log(news);


    const totalNews = document.getElementById("total-news");
    totalNews.innerText = news.length;
    // const totalNews = news.length;
    // console.log(news.data);
    // console.log(news[0].author.name);
    // console.log(news[0].author.img);

    // console.log(news[0].thumbnail_url);
    // console.log(news[0].rating.number);
    // console.log(news[0].title);
    // console.log(news[0].details);
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ``;

    news.forEach(single => {
        // console.log(meal);
        // const newsContainer = document.getElementById('news-container');
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        
   <div class="col-12 col-lg-12 col-sm-10">
        <div class="card">
              <div class="row">
                 <div class="col-lg-5 col-sm-12">
                  <img src="${single.thumbnail_url}" class="card-img-top img-fluid" alt="...">
                  </div>
                    <div class="col-lg-7 col-sm-12">
                        <div class="card-body">
                            <h5 class="card-title fs-2 fw-bold mt-5">${single.title}</h5>
                            <p class="card-text fs-4 text-secondary mt-5">${single.details.slice(0, 200)}</p>
                            <div class="d-flex mt-5">
                                <img style="width:5%; height:10%;border-radius: 50%;" src="${single.author.img}" alt=" ...">
                                <div>
                                    <h4 class="fw-bold">${single.author.name}</h4>
                                    <p class="text-secondary">  ${single.author.published_date ? single.author.published_date.substring(0, 10) : 'No date'}</p >
                                </div >
                                <div class="p-5"> <i
                                        class="fa-regular fa-eye fs-5 ">${single.rating.number}</i></div>
                                <div class="p-5 d-flex">
                                    <i class="fa-regular fa-star-half-stroke"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
           </div >
       </div >
    `;
        newsContainer.appendChild(newsDiv);

    })
}


loadnews("01");
