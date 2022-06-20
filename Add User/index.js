let formEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErr = document.getElementById("nameErrMsg");
let emailErr = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErr.textContent = "Required*";
    } else {
        nameErr.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {

        emailErr.textContent = "Required*";
    } else {
        emailErr.textContent = "";
    }
});


formEl.addEventListener("submit", function(event) {
    event.preventDefault();


});