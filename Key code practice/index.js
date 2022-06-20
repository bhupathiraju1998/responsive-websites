let inputEl = document.getElementById("userInput");
let unEl = document.getElementById("keyCodeList");
inputEl.addEventListener("keydown", function(event) {

    let liEl = document.createElement("li");
    liEl.classList.add("key-code-list", "mt-1");

    liEl.textContent = event.keyCode;
    unEl.appendChild(liEl);


});