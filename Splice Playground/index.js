let arr = [1, 7, 3, 1, 0, 20, 77];
let startEl = document.getElementById('startIndexInput');
let deleteEl = document.getElementById("deleteCountInput");
let addEl = document.getElementById("itemToAddInput");
let buttonEl = document.getElementById("spliceBtn");
let spanEl = document.getElementById("updatedArray");

function createNewArray() {
    let stringifiedArray = JSON.stringify(arr);
    spanEl.textContent = stringifiedArray;
}
buttonEl.onclick = function() {
    let startValue = startEl.value;
    let deleteValue = deleteEl.value;
    let addValue = addEl.value;
    if (startValue === "") {
        alert("Enter the start index");
        return;
    }
    if (deleteValue === "") {
        deleteValue = 0;
    }
    if (addValue === "") {
        arr.splice(parseInt(startValue), parseInt(deleteValue))
    } else {
        arr.splice(parseInt(startValue), parseInt(deleteValue), addValue)
    }
    createNewArray();
    startEl.value = "";
    deleteEl.value = "";
    addEl.value = "";
};