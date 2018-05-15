function selectList() {
    var lists = document.querySelectorAll("ul");
    lists[lists.length -1].className = "second-list";
}

function selectLi() {
    var li = document.querySelectorAll("li");

    li.forEach(function (el) {
        el.className = "all-li";
    })
}

function newList() {
    var lists = document.querySelectorAll("ul");
    var lastList = lists[lists.length - 1];
    var liElements = lastList.querySelectorAll("li");

    liElements.forEach(function(el) {
        el.className = "li-element";
    })
}

function setLiBackground() {
    var lists = document.querySelectorAll("div ul");
    var second = lists[1];
    second.querySelector("li").className = "active";
}

function selectActive() {
    var listItem1 = document.querySelector(".active").className = "";

    var lists = document.querySelectorAll("div ul");
    var second = lists[1];t
    second.querySelector("li").parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = "active";
}

function makeSelect(arrOfStrings, domNode) {
    var select = domNode.innerHTML.arrOfStrings[0];
    var options = select.innerHTML.arrOfStrings[1];
}

makeSelect(["<select></select>", "<option value='bhj'>JHG</option>"]);
