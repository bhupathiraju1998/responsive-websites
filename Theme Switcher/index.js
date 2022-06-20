let contEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let inputEl = document.getElementById("themeUserInput");



inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (inputEl.value === "Dark") {
            headingEl.style.color = "#ffffff";
            contEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        } else if (inputEl.value === "Light") {
            headingEl.style.color = "#014d40";
            contEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        } else {
            alert("Enter a Valid Theme");
        }
    }
});