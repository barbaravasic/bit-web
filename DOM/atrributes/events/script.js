var changeBG;

function changeBackground() {
    var body = document.querySelector("body");
    
    changeBG = setInterval(function(){
        body.classList.toggle("body-background")
    }, 
    2000);
}



function turnOff() {

    clearInterval(changeBG);
    var body = document.querySelector("body");
    body.classList.remove("body-background");
}


