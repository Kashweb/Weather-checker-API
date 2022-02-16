var button = document.querySelector(".getlocation");
var input = document.querySelector(".searchbar");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function alertEmpty() {
    if (inputLength() === 0) {
        alert("Please Enter Your Item First");
    }
}

function creatListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        creatListElement();
    } else(alertEmpty());
}

function addListAfterKeypress() {
    if (inputLength() > 0 && event.keyCode === 13) {
        creatListElement();
    } else(alertEmpty());
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);