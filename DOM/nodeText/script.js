function takesText() {
    var text = document.querySelector("li").textContent;

    alert(text);
}

takesText();

function replaceText(text) {
    document.querySelector("ul").lastElementChild.firstElementChild.textContent = text;
}

replaceText("nesto");