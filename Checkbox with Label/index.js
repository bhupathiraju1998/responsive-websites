let element = document.getElementById("checkboxWithLabelContainer");
let cont = document.createElement("div");
cont.classList.add("cont");
element.appendChild(cont)
let inputEl = document.createElement("input");
inputEl.id = "checkbox";
inputEl.type = "checkbox";
cont.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.id = "checkboxLabel";
labelEl.classList.add("ml-2");
labelEl.setAttribute("for", "checkbox");
labelEl.textContent = "Click Me!";
cont.appendChild(labelEl);