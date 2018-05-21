var body = document.querySelector("body");
var img = document.querySelectorAll("img");
var firstImg = document.querySelector("#first");

img.forEach(function (image) {
    image.addEventListener("click", changeBorder);
});


function changeBorder(event) {
    this.style.border = "1px solid red";
    if (this.width === 300) {
        event.stopPropagation();
    }
}

document.addEventListener("click", function (event) {
    console.log(event.target);

});