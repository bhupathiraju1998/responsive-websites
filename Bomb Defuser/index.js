let inputEl = document.getElementById("defuser");
let paraEl = document.getElementById("timer");
let counter = 10;
let userID = setInterval(function() {
    paraEl.textContent = counter;
    counter -= 1;
    if (counter === 0) {
        paraEl.textContent = "BOOM";
        clearInterval(userID);
    }
}, 1000);
inputEl.addEventListener("keydown", function(event) {

    if (inputEl.value === "defuse" && event.key === "Enter" && counter !== 0) {
        paraEl.textContent = "You did it.";
        clearInterval(userID);


    }
});