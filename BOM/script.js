function hello () {
    var hello = "Hello from external JS!";
   console.log(hello);
   }

   hello();

function browser () {
    console.log(navigator.userAgent);
    console.log(navigator.vendor);
    console.log(navigator.appVersion);   
    console.log(navigator.platform);
}

function isOnline () {
    var output = "";
    if (navigator.onLine) {
        output = "I am online!!!!"
    } else {
        output = "I am not online :("
    }
    return output;
}

function height () {
    console.log(screen.availHeight);
    console.log(screen.availWidth);
    console.log(screen.height);
    console.log(screen.width);
}

function urlInformation () {
    console.log(location.href);
    console.log(location.hostname);
    console.log(location.protocol);
    console.log(location.pathname);
    console.log(location.hash);
    console.log(location.search);
}

function reloadPage () {
    return location.reload();
}
function redirect (){
    return location.href = "http://www.google.com";
}

function stored () {
    sessionStorage.setItem("name", "Jelena");
};

function printLocalStorageData (key) {
    var data = sessionStorage.getItem(key) || "There is no data";
   console.log(data);
}

function removeData (key) {
    sessionStorage.removeItem(key);
}

function moveBack() {
    history.back();
}

function moveForward() {
    history.forward();
}

function moveNumber(num) {
    history.go(num);
}

function navigateTwoPagesBack () {
    history.go(-2);
}

function greetings () {
    alert("Hello!!!");
}

function question () {
    var userInput = prompt("How are you?");
    var confirmDialog = confirm("We will submit this answer " + userInput);

    if (confirmDialog) {
        alert("Success!!");
    }
}

function buildAnArray () {
    var someArray = [];

    for (var i = 0; i < 10; i++) {

        someArray[i] = Math.floor(Math.random() * 49 + 1);
    }
    console.log(someArray);
    return someArray;
}

