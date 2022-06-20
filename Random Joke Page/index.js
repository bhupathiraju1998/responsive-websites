let paraEl = document.getElementById("jokeText");
let btnEl = document.getElementById("jokeBtn");
let spinEl = document.getElementById("spinner");

function randomJokePage() {
    spinEl.classList.remove("d-none");
    paraEl.classList.add("d-none");
    let url = "https://api.chucknorris.io/jokes/random";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {

            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData.value)
            spinEl.classList.add("d-none");
            paraEl.classList.remove("d-none");

            paraEl.textContent = jsonData.value;
        });
}

btnEl.addEventListener("click", randomJokePage);