let count = 0;
const handleCategory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    console.log(data.data.news_category);

    const tabContainer = document.getElementById("tab-container")
    data.data.news_category.slice(0, 3).forEach((category) => {
        count++;
        const div = document.createElement("div")
        div.innerHTML = `
        <a class="tab">${category.category_name} ${count}</a>

        `;
        tabContainer.appendChild(div)
    });


}
handleCategory()




