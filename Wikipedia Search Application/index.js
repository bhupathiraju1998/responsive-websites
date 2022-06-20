let spinEl = document.getElementById("spinner");
let inputEl = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");

function createEachOne(result) {
    let {
        link,
        title,
        description
    } = result;
    let resultEl = document.createElement("div");
    resultEl.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.textContent = title;
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.classList.add("result-title");
    resultEl.appendChild(titleEl);

    let brEl = document.createElement("br");
    resultEl.appendChild(brEl);

    let headingEl = document.createElement("a");
    headingEl.href = link;
    headingEl.target = "_blank";
    headingEl.textContent = link;
    resultEl.appendChild(headingEl);

    let breEl = document.createElement("br");
    resultEl.appendChild(breEl);

    let paraEl = document.createElement("p");
    paraEl.textContent = description;
    paraEl.classList.add("link-description");
    resultEl.appendChild(paraEl);

    searchResults.appendChild(resultEl);

}

function displayResults(search_results) {
    spinEl.classList.toggle("d-none");
    for (let result of search_results) {
        createEachOne(result);
    }
}

function wikiSearch(event) {
    if (event.key === "Enter") {
        spinEl.classList.toggle("d-none");
        searchResults.textContent = "";
        let userVal = inputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + userVal;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {

                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData)

                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

inputEl.addEventListener("keydown", wikiSearch);