let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");
bgElement.style.backgroundColor = bgColorsArray[0];

function button() {
    let noOfColors = bgColorsArray.length;
    let randomColor = Math.ceil(Math.random() * noOfColors);

    let result = bgColorsArray[randomColor];

    bgElement.style.backgroundColor = result;
}