let contEl = document.getElementById("profileContainer");
let imgContEl = document.getElementById("imgContainer");

let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let imgCont = document.createElement("img");
imgCont.src = profileDetails.imgSrc;
imgCont.classList.add("image-cont");
imgContEl.appendChild(imgCont);

let headingEl = document.createElement("h1");
headingEl.textContent = profileDetails.name;
headingEl.classList.add("heading");
contEl.appendChild(headingEl);

let paraEl = document.createElement("p");
paraEl.textContent = "Age : " + profileDetails.age;
paraEl.classList.add("para");
contEl.appendChild(paraEl);