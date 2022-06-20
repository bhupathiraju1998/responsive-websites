let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let userInput = document.getElementById("userInput");
let errorEl = document.getElementById("errorMsg");
let wordsConEl = document.getElementById("wordsContainer");
let errorMsgg = "Please enter a word";

function addedWord(wordEntered) {
    let randomFont = Math.ceil(Math.random() * 40) + "px";
    let spanEl = document.createElement("span");

    spanEl.textContent = wordEntered;
    spanEl.classList.add("m-3");
    spanEl.style.fontSize = randomFont;
    wordsConEl.appendChild(spanEl);

}
for (let wordEntered of wordCloud) {
    addedWord(wordEntered);

}

function button() {
    let wordEntered = userInput.value;
    if (wordEntered !== "") {
        userInput.value = "";
        errorEl.textContent = "";
        addedWord(wordEntered);
    } else {
        errorEl.textContent = errorMsgg;
    }
}