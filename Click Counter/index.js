let cont = document.getElementById("clickCounterContainer");
let spanEl = document.getElementById("counterValue");
let buttonEl = document.getElementById("incrementBtn");
let clickCount = localStorage.getItem("clickCount");
if (clickCount === null) {
    spanEl.textContent = 0;
} else {
    spanEl.textContent = clickCount;
}

function changeStatus() {
    let updadtedValue = parseInt(spanEl.textContent);
    let addedValue = updadtedValue + 1;
    spanEl.textContent = addedValue;
    localStorage.setItem("clickCount", JSON.stringify(addedValue));
}

buttonEl.onclick = function() {
    changeStatus();
};