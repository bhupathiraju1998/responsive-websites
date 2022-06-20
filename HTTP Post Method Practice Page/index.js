let textEl = document.getElementById("requestBody");
let btnEl = document.getElementById("sendPostRequestBtn");
let reqPara = document.getElementById("requestStatus");
let resPara = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function httpPostMethod() {
    let textVal = textEl.value;
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 12f28d4457ef8609049d9d3d2159a55fd26373f5c4b92a63907c2efb72da8efc",
        },
        body: JSON.stringify(textVal)
    };
    loadingEl.classList.remove("d-none");
    reqPara.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loadingEl.classList.add("d-none");
            reqPara.classList.remove("d-none");
            let httpResponse = JSON.stringify(jsonData);
            let requestStatus = jsonData.code;
            reqPara.textContent = requestStatus;
            resPara.textContent = httpResponse;
        });
}


btnEl.addEventListener("click", httpPostMethod);