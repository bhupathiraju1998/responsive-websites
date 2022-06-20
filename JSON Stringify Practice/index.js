let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let newList = [bikes, person, todos];

let container = document.getElementById('jsonContainer');

function createNewContent(each) {
    let divCont = document.createElement("div");
    divCont.classList.add("elementCont");
    divCont.textContent = JSON.stringify(each);
    container.appendChild(divCont);
}
for (let each in newList) {
    createNewContent(newList[each]);

}