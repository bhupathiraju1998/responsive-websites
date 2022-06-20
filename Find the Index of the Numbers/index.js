let numbers = [17, 31, 77, 20, 63];
let inputEl = document.getElementById("userInput");
let spanEl = document.getElementById("indexOfNumber")

function findIndexOfNumber() {
    let inputValue = parseInt(inputEl.value);
    let itemIndex = numbers.findIndex(function(eachItem) {
        if (eachItem === inputValue) {
            return true;
        } else {
            return false;
        }
    });
    inputEl.value = "";
    spanEl.textContent = itemIndex;
}