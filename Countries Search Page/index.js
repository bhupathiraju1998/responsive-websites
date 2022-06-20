let inputEl = document.getElementById("searchInput");
let spinEl = document.getElementById("spinner");
let resultEl = document.getElementById("resultCountries");

let newArray = [];
let searchInputValue = "";

function createObject(each) {
    let {
        flag,
        name,
        population
    } = each;
    let searchEl = document.createElement("div");
    searchEl.classList.add("country-card", "mr-auto", "ml-auto", "d-flex", "flex-row", "col-11", "col-md-5");

    let flagEl = document.createElement("img");
    flagEl.src = flag;
    flagEl.classList.add("country-flag", "mt-auto", "mb-auto");
    searchEl.appendChild(flagEl);

    let subDivEl = document.createElement("div");
    subDivEl.classList.add("d-flex", "flex-column", "ml-4");
    searchEl.appendChild(subDivEl)

    let nameEl = document.createElement("p");
    nameEl.classList.add("country-name");
    nameEl.textContent = name;
    subDivEl.appendChild(nameEl);

    let popuEl = document.createElement("p");
    popuEl.classList.add("country-population");
    popuEl.textContent = population;
    subDivEl.appendChild(popuEl);

    resultEl.appendChild(searchEl);



}

function displayResult(object) {


    for (let each of newArray) {
        let eachName = each.name;

        if (eachName.includes(searchInputValue)) {
            createObject(each);

        }
    }

}

function countriesSearchPage(event) {

    let url = "https://restcountries.eu/rest/v2/all?fields=name;population;flag";
    let options = {
        method: "GET"
    };
    resultEl.textContent = "";
    spinEl.classList.remove("d-none");
    resultEl.classList.add("d-none");
    fetch(url, options)

        .then(function(response) {
            return response.json();

        })
        .then(function(jsonData) {
            spinEl.classList.add("d-none");
            resultEl.classList.remove("d-none");
            newArray = jsonData;
            if (event) {

                searchInputValue = event.target.value;
            }
            displayResult();
        });

}


countriesSearchPage();
inputEl.addEventListener("keydown", countriesSearchPage);