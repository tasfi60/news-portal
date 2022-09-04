const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}



const displayCategories = categories => {
    let cnt1 = 0;
    document.getElementById("news-name").innerHTML = ``;
    const newsName = document.getElementById("news-name");
    newsName.innerHTML = `${categories[cnt1].category_name}`;

    const categoriesContainer = document.getElementById('categories');
    let txt1 = "0";
    let cnt = 1;

    //const newsName = document.getElementById("news-name");
    //newsName.innerText = categories;

    categories.forEach(category => {
        const categoriesContainerDiv = document.createElement('span');
        txt2 = cnt.toString();
        let result = txt1.concat(txt2);
        categoriesContainerDiv.innerHTML = `
        <a class="fw-bold px-3 fs-5 text-secondary text-decoration-none" onclick ="loadnews('${result}')">${category.category_name}</a>
            `;
        

        categoriesContainer.appendChild(categoriesContainerDiv);
        cnt++;
        cnt1++;

    })

}


loadCategories();


