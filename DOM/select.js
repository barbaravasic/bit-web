function makeSelect(arrayOfStrings, domNode) {
    var select = document.createElement("select");
    var option = {};
    arrayOfStrings.forEach(function(element) {
        option = document.createElement("option");
        option.textContent = element;

        select.appendChild(option);
    })

    domNode.appendChild(select);
}

makeSelect(["coffee","tea", "milk", "beer"], document.querySelector("div"));
makeSelect(["green", "yellow","red","blue","white","black"], document.querySelector("div").nextElementSibling);
