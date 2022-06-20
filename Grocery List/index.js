let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];
let groceryCont = document.getElementById("groceryListContainer");
groceryCont.classList.add("bg-container");
let heading = document.createElement("h1");
heading.classList.add("heading");
heading.textContent = "Grocery List";
groceryCont.appendChild(heading);
let listContainer = document.createElement("div");

listContainer.classList.add("list-container");
groceryCont.appendChild(listContainer);

let listEl = document.createElement("ul");
for (let each of groceryList) {
    let eachItem = document.createElement("li");
    eachItem.textContent = each;
    listEl.appendChild(eachItem);
}
listContainer.appendChild(listEl);