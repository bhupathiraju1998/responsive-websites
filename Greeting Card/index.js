let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedValue = JSON.parse(greeting);
let topContEl = document.getElementById("topContainer");
topContEl.classList.add("d-flex", "flex-column", "justify-content-end");
let fromEl = document.getElementById("paraOne");
fromEl.textContent = "From: " + parsedValue.from;
topContEl.appendChild(fromEl);
let toEl = document.getElementById("paraTwo");
toEl.textContent = "To: " + parsedValue.to;
topContEl.appendChild(toEl);
let bottomContEl = document.getElementById("bottomPara");
bottomContEl.textContent = parsedValue.greetText;