let backgroundColor = document.getElementById("colorPickerContainer");
let spanElement = document.getElementById("selectedColorHexCode");

function buttonOne() {
    backgroundColor.style.backgroundColor = "#e0e0e0";
    spanElement.textContent = "#e0e0e0";
}

function buttonTwo() {
    backgroundColor.style.backgroundColor = "#6fcf97";
    spanElement.textContent = "#6fcf97";
}

function buttonThree() {
    backgroundColor.style.backgroundColor = "#56ccf2";
    spanElement.textContent = "#56ccf2";
}

function buttonFour() {
    backgroundColor.style.backgroundColor = "#bb6bd9";
    spanElement.textContent = "#bb6bd9";
}