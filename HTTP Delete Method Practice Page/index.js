let idEl = document.getElementById("userInput");
let deleteBtn = document.getElementById("sendDeleteRequestBtn");
let reqPara = document.getElementById("requestStatus");
let resPara = document.getElementById("httpResponse");
let loadEl = document.getElementById("loading");

function httpDeleteMethod() {
    let idVal = idEl.value;
    let url = "https://gorest.co.in/public-api/users" + idVal;
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            authorization: "Bearer 12f28d4457ef8609049d9d3d2159a55fd26373f5c4b92a63907c2efb72da8efc"
        }

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

            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            reqPara.textContent = requestStatus;
            resPara.textContent = httpResponse;
        });
}
deleteBtn.addEventListener("click", httpDeleteMethod);