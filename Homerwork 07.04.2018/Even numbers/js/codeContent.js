// I didn't use ARRAY because I had no need

var input = document.getElementById("inputHtml");
var heading = document.getElementById("h2Html");
var button = document.getElementById("buttonHtml");
var arrayShow = document.getElementById("arrayContent");
var remove = document.getElementById("removeButton")
var numbers = [];
var sum = 0;



button.onclick = function () {
    var inputOn = Number(input.value)
    if (inputOn % 2 == 0) {
        sum += inputOn
        heading.innerHTML = sum
        arrayShow.innerHTML += inputOn + " " + "(even)" + " "
    }
    else {
        alert("Enter an even number")
    }


}

remove.onclick = function () {
    sum = 0
    heading.innerHTML = ""
    arrayShow.innerHTML = ""
}