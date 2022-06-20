/* Follow the instructions found in the description to complete the JavaScript functionality.*/
let unListCont = document.getElementById('todoItemsContainer');
let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];

function createNewTodo(each) {
    let todoEl = document.createElement("li");
    todoEl.classList.add("todo-item-container", "d-flex", "flex-row");
    unListCont.appendChild(todoEl);

    let inputEl = document.createElement("input");
    inputEl.type = "checkbox";
    inputEl.id = "inputElId";
    inputEl.classList.add("checkbox-input");
    todoEl.appendChild(inputEl);

    let labelCont = document.createElement("div");
    labelCont.classList.add("label-container", "d-flex", "flex-row");
    todoEl.appendChild(labelCont);

    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", "inputElId");
    labelEl.textContent = each.text;
    labelEl.classList.add("checkbox-label");
    labelCont.appendChild(labelEl);

    let delCont = document.createElement("div");
    delCont.classList.add("delete-icon-container");
    labelCont.appendChild(delCont);

    let delIcon = document.createElement("i");
    delIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    labelEl.appendChild(delIcon);

}
for (let each of todoList) {
    createNewTodo(each);
}