let formEl = document.getElementById("questionsForm");
let hydEl = document.getElementById("cityHyderabad");
let chenEl = document.getElementById("cityChennai");
let delEl = document.getElementById("cityDelhi");
let mumEl = document.getElementById("cityMumbai");
let btnEl = document.getElementById("submitBtn");
let resultEl = document.getElementById("resultMsg");
let selectedCity = null;
let val = "Delhi";
hydEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
    resultEl.textContent = "";
});
chenEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
    resultEl.textContent = "";
});

delEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
    resultEl.textContent = "";
});

mumEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
    resultEl.textContent = "";
});




formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === null) {
        resultMsg.textContent = "Please select the city";
        resultMsg.style.color = "dc3545"
    } else if (selectedCity === val) {
        resultMsg.textContent = "Correct Answer!";
        resultMsg.style.color = "#2b9a40";

    } else {
        resultMsg.textContent = "Wrong Answer!";
        resultMsg.style.color = "#dc3545";
    }






});