const categories = document.querySelectorAll(".item");

const numberOfCategories = `Number of categories: ${categories.length}`;

console.log(numberOfCategories);

categories.forEach(item => {
    
    const categoryTitle =`Category: ${item.querySelector("h2").textContent}` ;
    console.log(categoryTitle)
    const elements = `Elements: ${item.querySelectorAll("li").length}` ;
    console.log(elements)
    
});