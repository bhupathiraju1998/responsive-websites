let container = document.getElementById("checkBoxWithLabelContainer");
let inputEl = document.createElement("input");
inputEl.id = "checkbox";
inputEl.type = "checkbox";
container.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.id = "checkboxLabel";
labelEl.setAttribute("for", "checkbox");
labelEl.textContent = "I am a label";
labelEl.classList.add("pl-3");

container.appendChild(labelEl);
inputEl.onclick = function() {
    labelEl.classList.toggle("checked");
};