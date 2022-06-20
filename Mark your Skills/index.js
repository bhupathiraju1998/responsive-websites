let skillsList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];


let unOrderedList = document.getElementById("skillListContainer");




function tooggle(labelElId) {
let labelEl = document.getElementById(labelElId);
labelEl.classList.toggle("checked");

}

function createList(each) {
let listEl = document.createElement("li");
listEl.classList.add("listStyle");
unOrderedList.appendChild(listEl);
let inputEl = document.createElement("input");
inputEl.type = "checkbox";
let inputElId = "checkbox" + each.uniqueNo;
inputEl.id = inputElId;

listEl.appendChild(inputEl);


let labelEl = document.createElement("label");
labelEl.setAttribute("for", inputElId);
let labelElId = "label" + each.uniqueNo;
labelEl.id = labelElId;
labelEl.textContent = each.skillName;
labelEl.classList.add("checkbox-label");
inputEl.onclick = function() {
    tooggle(labelElId);
};
listEl.appendChild(labelEl);


}




for (let each of skillsList) {
createList(each);

}