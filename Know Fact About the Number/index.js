let inputEl = document.getElementById('userInput');
let spinEl = document.getElementById("spinner");
let paraEl = document.getElementById("fact");
let obj = {};

function displayEl() {
    spinEl.classList.add("d-none");

    let {
        fact
    } = obj;
    paraEl.textContent = fact;
    paraEl.classList.add("fact-text");

}

function factAboutNumber(event) {
    let inputVal = inputEl.value;
    paraEl.textContent = "";
    if (event.key === "Enter") {
        if (inputVal === "") {
            alert("Enter a Number");
        } else {
            spinEl.classList.remove("d-none");
            let url = "https://apis.ccbp.in/numbers-fact?number=" + inputVal;
            let options = {
                method: "GET"
            };
            fetch(url, options)
                .then(function(response) {
                    return response.json()
                })
                .then(function(jsonData) {
                    obj = jsonData;
                    displayEl();
                });




        }
    }
}

inputEl.addEventListener("keydown", factAboutNumber);