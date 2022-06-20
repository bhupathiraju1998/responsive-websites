let inputEl = document.getElementById("cartItemTextInput");
let buttonEl = document.getElementById("addBtn");
let unliEL = document.getElementById("unorderedList");


buttonEl.onclick = function() {
    let listEl = document.createElement("li");
    listEl.textContent = inputEl.value;
    inputEl.value = "";
    listEl.classList.add("list-style");
    unliEL.appendChild(listEl);
};