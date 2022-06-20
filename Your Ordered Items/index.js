let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];
let unOrderedContainer = document.getElementById("itemsContainerList");

function deleteButton(listElId) {
let listEl = document.getElementById(listElId)
unOrderedContainer.removeChild(listEl);
}

function createList(each) {
let listEl = document.createElement("li");
listEl.classList.add("list-style", "p-3");
listEl.textContent = each.itemName;
let listElId = "item" + each.uniqueNo;
listEl.id = listElId;
unOrderedContainer.appendChild(listEl);

let buttonEl = document.createElement("button");


buttonEl.classList.add("btn", "btn-danger", "ml-3");
buttonEl.textContent = "Cancel";
listEl.appendChild(buttonEl);
let buttonElId = "button" + each.uniqueNo;
buttonEl.id = buttonElId;
buttonEl.onclick = function() {
    deleteButton(listElId);
};
}

for (let each of itemList) {
createList(each)
}