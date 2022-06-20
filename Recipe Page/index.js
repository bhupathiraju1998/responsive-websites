let headingEl = document.getElementById('recipe-title');
let imageEl = document.getElementById("imgEl");


let imgContainerEl = document.getElementById("imgContainer");

let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
headingEl.textContent = recipeObj.title;
imageEl.setAttribute("src", recipeObj.imgSrc);
imageEl.classList.add("w-100");
imgContainerEl.appendChild(imageEl);
let unEl = document.getElementById("unOrderedList");

for (let each in recipeObj.ingredients) {
    let liEl = document.createElement("li");
    liEl.textContent = recipeObj.ingredients[each];
    liEl.classList.add("each-item")
    unEl.appendChild(liEl);
}