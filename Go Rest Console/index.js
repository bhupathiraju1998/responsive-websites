let reqUrl = document.getElementById("requestUrl");
let formEl = document.getElementById("consoleForm");
let reqMethod = document.getElementById("requestMethod");
let reqBody = document.getElementById("requestBody");
let resStatus = document.getElementById("responseStatus");
let resBody = document.getElementById("responseBody");
let reqErr = document.getElementById("requestUrlErrMsg");

let formData = {
    reqUrlValue: "https://gorest.co.in/public-api/users",
    reqMethodValue: "POST",
    reqBodyValue: ""
};

reqUrl.addEventListener("change", function(event) {
    formData.reqUrlValue = event.target.value;

});

reqMethod.addEventListener("change", function(event) {
    formData.reqMethodValue = event.target.value;

});
reqBody.addEventListener("change", function(event) {
    formData.reqBodyValue = event.target.value;
});




function checkUrl() {
    if (reqUrl.value === "") {
        reqErr.textContent = "Required*";
    } else {
        reqUrl.textContent = "";
    }
}

function sendRequest(formData) {
    let {
        reqUrlValue,
        reqBodyValue,
        reqMethodValue
    } = formData;


    let options = {
        method: reqMethodValue,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 003fd79d8eb18a1c29392933ac3c1e464c891a95a96bbb53d8e4f62ff4822f75"
        },
        body: reqBodyValue
    };

    fetch(reqUrlValue, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let resStatusVal = jsonData.code;
            let resBodyVal = JSON.stringify(jsonData);

            resStatus.value = resStatusVal;
            resBody.value = resBodyVal;
        });
}


formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    checkUrl(formData);
    sendRequest(formData);
});