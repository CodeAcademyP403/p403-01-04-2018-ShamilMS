// I didn't use IF and ARRAY because I had no need

var input = document.getElementById("inputHtml");
var heading = document.getElementById("h2Html");
var button = document.getElementById("buttonHtml");
var calculation = document.getElementById("calculation");
var remove = document.getElementById("removeButton")
var numbers=[];
var square;
var sum=0;



button.onclick = function()
{
    var inputOn = input.value
    square=inputOn*inputOn 
    sum+=square
    heading.innerHTML=sum
    calculation.innerHTML+=(inputOn+"(square)"+" ")
}

remove.onclick = function()
{   
    sum=0
    heading.innerHTML=""
    calculation.innerHTML=""
}