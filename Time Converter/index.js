let hoursEl = document.getElementById("hoursInput");
let minEl = document.getElementById("minutesInput");
let buttonEL = document.getElementById("convertBtn");
let errorPara = document.getElementById("errorMsg");
let resultEl = document.getElementById("timeInSeconds");
resultEl.classList.remove("result-para");

function finallyConverted(event) {
    if (hoursEl.value === "") {
        errorPara.textContent = "Please enter a valid number of hours.";
    } else if (minEl.value === "") {
        errorPara.textContent = "Please enter a valid number of minutes.";
    } else if (hoursEl.value === "" && minEl.value === "") {
        errorPara.textContent = "Please enter a valid number of hours.";
    } else {
        errorPara.textContent = "";
        let convertedValue = ((parseInt(hoursEl.value) * 60 + parseInt(minEl.value)) * 60);
        resultEl.textContent = convertedValue + "s";
        buttonEL.style.backgroundColor = "#f5f7fa";
        resultEl.classList.add("result-para");
    }
}
buttonEL.addEventListener("click", finallyConverted)