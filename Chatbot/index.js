let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContEl = document.getElementById("chatContainer");
let inputEl = document.getElementById("userInput");
let buttonEl = document.getElementById("sendMsgBtn");

function button() {
    let userMsg = inputEl.value;

    let msgEl = document.createElement("div");
    msgEl.classList.add("msg-to-chatbot-container");
    chatContEl.appendChild(msgEl);

    let spanEl = document.createElement("span");
    spanEl.textContent = userMsg;
    spanEl.classList.add("msg-to-chatbot");
    msgEl.appendChild(spanEl);


    inputEl.value = "";
    getReplyFromBot();
}

function getReplyFromBot() {
    let lengthofBot = chatbotMsgList.length;
    let botMsg = chatbotMsgList[Math.ceil(Math.random() * lengthofBot) - 1];

    let msgEl = document.createElement("div");
    msgEl.classList.add("msg-from-chatbot-container");
    chatContEl.appendChild(msgEl);

    let spanEl = document.createElement("span");
    spanEl.textContent = botMsg;
    spanEl.classList.add("msg-from-chatbot");
    msgEl.appendChild(spanEl);

}