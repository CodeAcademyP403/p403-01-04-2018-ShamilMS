// I didn't ARRAY because I had no need

var input = document.getElementById("inputHtml");
var heading = document.getElementById("h2Html")
var button = document.getElementById("buttonHtml")
var numbers=[];

button.onclick = function()
{
    var inputOn = Number(input.value)  
    numbers.push(inputOn)
    if(inputOn>heading.innerHTML)
    {
        heading.innerHTML = inputOn
    }
}