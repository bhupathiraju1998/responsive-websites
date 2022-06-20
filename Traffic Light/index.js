let stopElement = document.getElementById("stopButton");
let readyElement = document.getElementById("readyButton");
let goElement = document.getElementById("goButton");
let stopBg = document.getElementById("stopLight");
let readyBg = document.getElementById("readyLight");
let goBg = document.getElementById("goLight");

function stop() {
    stopElement.style.backgroundColor = "#cf1124";
    stopBg.style.backgroundColor = "cf1124";
    readyElement.style.backgroundColor = "#1f1d41";
    readyBg.style.backgroundColor = "#4b5069";
    goElement.style.backgroundColor = "#1f1d41";
    goBg.style.backgroundColor = "#4b5069";
}

function ready() {
    readyElement.style.backgroundColor = "#f7c948";
    readyBg.style.backgroundColor = "#f7c948";
    goElement.style.backgroundColor = "#1f1d41";
    goBg.style.backgroundColor = "#4b5069";
    stopElement.style.backgroundColor = "#1f1d41";
    stopBg.style.backgroundColor = "#4b5069";
}

function go() {
    goElement.style.backgroundColor = "#199473";
    goBg.style.backgroundColor = "#199473";
    stopElement.style.backgroundColor = "#1f1d41";
    stopBg.style.backgroundColor = "#4b5069";
    readyElement.style.backgroundColor = "#1f1d41";
    readyBg.style.backgroundColor = "#4b5069";
}