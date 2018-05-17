
var button = document.querySelector("#send");
var section = document.querySelector(".messages");
var input = document.querySelector("#msg");

function sendMessage(){
    var p = document.createElement("p");
    p.textContent = input.value;

    section.appendChild(p);
    input.value = "";
};

button.onclick = sendMessage;