var player = document.querySelector("#player");
var field = document.querySelector(".field");
var stopBtn = document.querySelector(".disable-btn");

function movingPlayer(event) {
    var xPosition = event.screenX - 100;
    var yPosition = event.screenY - 100;

    player.style.top = yPosition + "px";
    player.style.left = xPosition + "px";
}

function stopMoving(event) {
    field.removeEventListener("click", movingPlayer);
}
field.addEventListener("click", movingPlayer);
stopBtn.addEventListener("click",stopMoving);