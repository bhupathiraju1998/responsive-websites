let formEl = document.getElementById("updatePasswordForm");
let newInput = document.getElementById("newPassword");
let confirmInput = document.getElementById("confirmPassword");
let newPara = document.getElementById("newPasswordErrMsg");
let confirmPara = document.getElementById("confirmPasswordErrMsg");

let createdNewPassword = function() {
    if (newInput.value === "") {
        newPara.textContent = "Required*";
    } else {
        newPara.textContent = "";
    }
};

let createdConfirmPassword = function() {
    let newInputVal = newInput.value;
    let confirmInputVal = confirmInput.value;
    if (confirmInputVal !== newInputVal) {
        confirmPara.textContent = "Passwords must be same";
    } else {
        confirmPara.textContent = "";
    }
};

newInput.addEventListener("blur", createdNewPassword);
confirmInput.addEventListener("blur", createdConfirmPassword);

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    createdNewPassword();
    createdConfirmPassword();
});