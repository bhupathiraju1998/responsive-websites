let aboutEl = document.getElementById("aboutButton");
let timeEl = document.getElementById("timeToVisitButton");
let attractionsEl = document.getElementById("attractionsButton");
let paraAbout = document.getElementById("aboutTab");
let paraTime = document.getElementById("timeToVisitTab");
let paraAttractions = document.getElementById("attractionsTab");
paraTime.classList.add("d-none");
paraAttractions.classList.add("d-none");

function about() {
    aboutEl.classList.add("selected-button");
    timeEl.classList.remove("selected-button");
    attractionsEl.classList.remove("selected-button");

    paraAbout.classList.remove("d-none");
    paraTime.classList.add("d-none");
    paraAttractions.classList.add("d-none");

}

function timeToVisit() {
    timeEl.classList.add("selected-button");
    attractionsEl.classList.remove("selected-button");
    aboutEl.classList.remove("selected-button");

    paraAbout.classList.add("d-none");
    paraTime.classList.remove("d-none");
    paraAttractions.classList.add("d-none");

}

function attractions() {
    attractionsEl.classList.add("selected-button");
    aboutEl.classList.remove("selected-button");
    timeEl.classList.remove("selected-button");

    paraAbout.classList.add("d-none");
    paraTime.classList.add("d-none");
    paraAttractions.classList.remove("d-none");

}