let twenBtn = document.getElementById("twentySecondsBtn");
let thirtyBtn = document.getElementById("thirtySecondsBtn");
let fortyBtn = document.getElementById("fortySecondsBtn");
let oneMinBtn = document.getElementById("oneMinuteBtn");
let paraEl = document.getElementById("timerText");
let userId;
let paraVal;

function setTimer() {
    paraEl.textContent = paraVal + " seconds left";
    paraVal -= 1;

    userId = setInterval(function() {
        if (paraVal === 0) {
            paraEl.textContent = "Your Moment is Complete";
        } else {

            paraEl.textContent = paraVal + " seconds left";
            paraVal -= 1;
        }
    }, 1000);


}

function clearTimer() {
    clearInterval(userId);
}

twenBtn.onclick = function() {
    paraVal = 20;
    clearTimer();
    setTimer();


};
thirtyBtn.onclick = function() {
    paraVal = 30;
    clearTimer();
    setTimer();




};
fortyBtn.onclick = function() {

    paraVal = 40;
    clearTimer();
    setTimer();



};
oneMinBtn.onclick = function() {
    paraVal = 60;
    clearTimer();
    setTimer();



};