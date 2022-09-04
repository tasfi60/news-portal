const loadnews = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaynews(data.data))

}





const displaynews = news => {
    console.log(news);
    const tNews = document.getElementById("all-news");
    tNews.innerText = news.length;
    const newsContainer = document.getElementById('all news-container');
    newsContainer.innerHTML = ``;


    news.forEach(single => {
        console.log(single);
        let i = 0;
        let text1 = "0";
        let c = 1;
        const newsdiv = document.createElement('div');
        newsdiv.classList.add('col');
        txt2 = c.toString();
        let result = text1.concat(txt2);
        newsdiv.innerHTML = `
        
   <div class="col-12 col-lg-12 col-sm-12">
        <div class="card">
              <div class="row">
                 <div class="col-lg-5 col-sm-12">
                  <img src="${single.thumbnail_url}" class="card-img-top img-fluid" alt="...">
                  </div>
                    <div class="col-lg-7 col-sm-12">
                        <div class="card-body">
                            <h5 class="card-title fs-2 fw-bold mt-5">${single.title}</h5>
                            <p class="card-text fs-4 text-secondary mt-5">${single.details}</p>
                            <div class="d-flex mt-5">
                                <img style="width:5%; height:10%;border-radius: 50%;" src="${single.author.img}" alt=" ...">
                                <div>
                                    <h4 class="fw-bold"> ${single.author.name ? single.author.name : 'No Author'}</h4>
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
                            <button onclick="loadModal('${single._id}')"href="#" class="btn btn-primary w-50 h-25 px-2 py-3" data-bs-toggle="modal" data-bs-target="#pModal">Show Details</button>
                            </div >
                        </div >
                    </div >
                </div >
           </div >
       </div >
    `;
        i++;
        newsContainer.appendChild(newsdiv);

    })

}


loadnews("01");


const loadModal = async (id) => {
    console.log(id);
    const url = ` https://openapi.programming-hero.com/api/news/${id}`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => displaynewsDetails(data.data));
};



const displaynewsDetails = (modals) => {
    console.log(modals);
    console.log(modals[0].title);
    const ModalTitle = document.getElementById("pModalLabel");
    ModalTitle.innerText = modals[0].title;
    const phoneDetails = document.getElementById('pdetails');
    phoneDetails.innerHTML = `
    <img src="${modals[0].thumbnail_url}" class="card-img-top img-fluid" alt="...">
    <p class ="mt-5"> <span class ="fw-bold fs-5"> Details : </span> ${modals[0].details ? modals[0].details : 'No details Found'}</p>
    <p><span class ="fw-bold fs-5"> Author name: </span> ${modals[0].author.name ? modals[0].author.name : 'No author Found'}</p>
    `
};

