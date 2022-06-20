let reviewCont = document.getElementById("reviewsContainer");
let inputEl = document.getElementById("titleInput");
let buttonEl = document.getElementById("addBtn");
let textEl = document.getElementById("reviewTextarea");

function addHeadingandPara() {
    let inputValue = inputEl.value;
    inputEl.value = "";
    if (inputValue === "") {
        alert("Please enter a movie title");
        return;
    }
    let textValue = textEl.value;
    textEl.value = "";
    let headingEl = document.createElement("h1");
    headingEl.textContent = "Movie Title: " + inputValue;
    headingEl.classList.add("movie-title");
    reviewsContainer.appendChild(headingEl);

    let paraEl = document.createElement("p");
    paraEl.textContent = "Review :" + textValue;
    reviewsContainer.appendChild(paraEl);
    let hrEl = document.createElement("hr");
    reviewsContainer.appendChild(hrEl);
}
buttonEl.onclick = function() {
    addHeadingandPara();
};