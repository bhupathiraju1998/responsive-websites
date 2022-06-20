let imageElement = document.getElementById("image");
let defaultImageWidth = "200px";
imageElement.style.width = defaultImageWidth;
let spanElement = document.getElementById("imageWidth");
let warningElement = document.getElementById("warningMessage");
let imageMaxWidth = 300;
let imageMinWidth = 100;
let maxMessage = "Too big. Decrease the size of the Image.";
let minMessage = "Can't Visible. Increase the size of the Image.";
imageElement.style.width = defaultImageWidth;
spanElement.textContent = defaultImageWidth;



function incrementButton() {
    let previousImageWidth = imageElement.style.width;
    let previousImageWidthInteger = parseInt(previousImageWidth);
    if (previousImageWidthInteger >= imageMaxWidth) {
        warningElement.textContent = maxMessage;
    } else {
        let gopal = previousImageWidthInteger + 5 + "px";
        imageElement.style.width = gopal;
        spanElement.textContent = gopal;
        warningElement.textContent = "";
    }
}

function decrementButton() {
    let previousImageWidth = imageElement.style.width;
    let previousImageWidthInteger = parseInt(previousImageWidth);
    if (previousImageWidthInteger <= imageMinWidth) {
        warningElement.textContent = minMessage;
    } else {
        let gopal = previousImageWidthInteger - 5 + "px";
        imageElement.style.width = gopal;
        spanElement.textContent = gopal;
        warningElement.textContent = "";
    }
}