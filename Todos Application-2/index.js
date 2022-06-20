let todoItemsContainer = document.getElementById("todoItemsContainer");
let buttonEl = document.getElementById("addTodoButton");

let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];
let todosCount = todoList.length;

function statuschange(inputElementId, labelId) {
    let checkboxEl = document.getElementById(inputElementId);
    let labelEl = document.getElementById(labelId);
    labelEl.classList.toggle("checked");

}

function deletingEl(todoId) {
    let todoEl = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoEl);
}



function createAndAppendTodo(todo) {
    let todoId = 'todo' + todo.uniqueNo;
    let checkboxId = 'checkbox' + todo.uniqueNo;
    let labelId = 'label' + todo.uniqueNo;
    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    let inputElementId = checkboxId;
    inputElement.id = inputElementId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        statuschange(inputElementId, labelId);
    }
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        deletingEl(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function addNewItem() {
    let inputEl = document.getElementById("todoUserInput");
    let inputValue = inputEl.value;
    if (inputValue === "") {
        alert("Enter a Valid Text");
        return;
    }
    todosCount = todosCount + 1;
    let addTodo = {
        text: inputValue,
        uniqueNo: todosCount
    };
    createAndAppendTodo(addTodo);
    inputEl.value = "";
}

buttonEl.onclick = function() {
    addNewItem();
};