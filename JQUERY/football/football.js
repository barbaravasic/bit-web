$(function () {
    var $player = $("#player");
    var $field = $(".field");
    var $stopBtn = $(".disable-btn");

    function movingPlayer(event) {
        var xPosition = event.offsetX -100;
        var yPosition = event.offsetY -100;

        console.log(event)

        $player.css("top", yPosition + "px");
        $player.css("left", xPosition + "px");
    }

    function stopMoving() {
        $field.off();
    }


    $field.on("click", movingPlayer);
    $stopBtn.on("click", stopMoving);
})
