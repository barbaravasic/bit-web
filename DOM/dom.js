
function makeSelect(arrOfStrings, domNode) {
    var select = domNode.innerHTML = "<select></select>";
    var newOption;
    for (var i = 0; i < arrOfStrings.length; i++) {
        newOption = document.createElement('option');
        newOption.value = arrOfStrings[i];
        newOption.text = arrOfStrings[i];
        domNode.querySelector("select").appendChild(newOption);
    
    }

}

makeSelect(["audi", "toyota", "peugeot"], document.querySelector("div"));
makeSelect(["cat", "dog", "mouse","chicken"], document.querySelector(".second"));
