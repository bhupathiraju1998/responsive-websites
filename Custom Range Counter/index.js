let fromEl = document.getElementById("fromUserInput");
let toEl = document.getElementById("toUserInput");
let counterEl = document.getElementById("counterText");
let btnEl = document.getElementById("startBtn");

function displayNum(fromVal, toVal) {
    counterEl.textContent = fromVal;
    let userId = setInterval(function() {
        if (fromVal < toVal) {
            let incrVal = fromVal + 1;
            counterEl.textContent = incrVal;
            fromVal = incrVal;
        } else {
            clearInterval(userId);
        }

    }, 1000);

}

btnEl.onclick = function() {
    if (fromEl.value === "") {
        alert("Enter the from Value");
    } else if (toEl.value === "") {
        alert("Enter the To Value");
    } else {
        let fromVal = parseInt(fromEl.value);
        let toVal = parseInt(toEl.value);
        displayNum(fromVal, toVal);
    }
};