let sendReqBtnEl = document.getElementById("sendGetRequestBtn");
let reqStatus = document.getElementById("requestStatus");
let respStatus = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function getHttpRequest() {
    let url = "https://gorest.co.in/public-api/users";
    let obj = {
        method: "GET",
    };
    loadingEl.classList.remove("d-none");
    reqStatus.classList.add("d-none");

    fetch(url, obj)


        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {


            loadingEl.classList.add("d-none");
            reqStatus.classList.remove("d-none");
            let httpResponse = JSON.stringify(jsonData);

            reqStatus.textContent = jsonData.code;
            respStatus.textContent = httpResponse;

        });
}
sendGetRequestBtn.addEventListener("click", getHttpRequest);