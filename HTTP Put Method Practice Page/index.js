let idEL = document.getElementById("userInput");
let textEl = document.getElementById("requestBody");
let btnEL = document.getElementById("sendPutRequestBtn");
let resPara = document.getElementById("requestStatus");
let reqPara = document.getElementById("httpResponse");
let loadEl = document.getElementById("loading");

function httpPutMethod() {
    let idVal = idEL.value;
    let url = "https://gorest.co.in/public-api/users" + idVal;
    let data = textEl.val;
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 12f28d4457ef8609049d9d3d2159a55fd26373f5c4b92a63907c2efb72da8efc"
        },
        body: data
    };
    loadEl.classList.remove("d-none");
    reqPara.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loadEl.classList.add("d-none");
            reqPara.classList.remove("d-none");

            let codeEl = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            resPara.textContent = codeEl;
            reqPara.textContent = httpResponse;

        });
}
btnEL.addEventListener("click", httpPutMethod);