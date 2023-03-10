

const loadCat = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))


}
// display news category

const displayCategories = categories => {

    let cnt1 = 0;
    const categoriesContainer = document.getElementById('cat-container');
    let txt1 = "0";
    let cnt = 1;


    categories.forEach(category => {
        const categoriesContainerDiv = document.createElement('span');
        txt2 = cnt.toString();
        let result = txt1.concat(txt2);
        categoriesContainerDiv.innerHTML = `
        <a class="fw-bold px-3 fs-5 text-secondary text-decoration-none" onclick ="loadnews('${result}')">${category.category_name}</a>
            `;


        // spinner-start
        toggleSpinner(true);

        categoriesContainer.appendChild(categoriesContainerDiv);
        cnt++;
        cnt1++;

    })
}


loadCat();


