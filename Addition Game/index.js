let firstElement = document.getElementById("firstNumber");
let secondElement = document.getElementById("secondNumber");
let inputElement = document.getElementById("userInput");
let resultElement = document.getElementById("gameResult");

function restart() {
    let randomNumberOne = Math.random() * 100;
    let randomNumberTwo = Math.random() * 100;
    firstElement.textContent = Math.ceil(randomNumberOne);
    secondElement.textContent = Math.ceil(randomNumberTwo);
    inputElement.value = ""
}


function check() {
    let firstNumber = parseInt(firstElement.textContent);
    let secondNumber = parseInt(secondElement.textContent);
    let addedValue = firstNumber + secondNumber;
    let userElement = parseInt(inputElement.value);

    if (userElement === addedValue) {
        resultElement.textContent = "Congratulations! You got it right.";
        resultElement.style.backgroundColor = "#028a0f";
    } else {
        resultElement.textContent = "Please Try Again!";
        resultElement.style.backgroundColor = "#1e217c";

    }











}