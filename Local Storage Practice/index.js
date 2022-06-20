let textEL = document.getElementById("msg");
let saveEL = document.getElementById("saveBtn");
let clearEl = document.getElementById("clearBtn");
let storageKey = "userInput";

let alreadyStoredValue = localStorage.getItem(storageKey);
if (alreadyStoredValue !== null) {
    textEL.value = alreadyStoredValue;
} else {
    textEL.value = "";
}

saveEL.onclick = function() {
    let inputValue = textEL.value;

    localStorage.setItem(storageKey, inputValue);
};
clearEl.onclick = function() {
    textEL.value = "";

    localStorage.removeItem(storageKey);
};