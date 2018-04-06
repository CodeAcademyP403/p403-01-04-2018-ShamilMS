// I didn't use IF and ARRAY because I had no need

var input = document.getElementById("inputHtml");
var heading = document.getElementById("h2Html");
var button = document.getElementById("buttonHtml");
var calculation = document.getElementById("calculation");
var remove = document.getElementById("removeButton")
var numbers=[];
var sum=1;
var i=1;
alert("Reqemi daxil edin ve 'Multiply' duymesine basin")
button.onclick = function()
{   
    var inputOn = input.value
    sum*=inputOn;
    if(!i==0){
        i--
    calculation.innerHTML=inputOn
    alert ("Novbeti reqemi daxil ve 'Multiply' duymesine basin")
    }
    else
    {
        heading.innerHTML=sum
        calculation.innerHTML+=(" "+"*"+" "+inputOn)
    }
    
    
}

remove.onclick = function()
{   
    sum=1
    heading.innerHTML=""
    calculation.innerHTML=""
    i=1;
    //Input-un icini temizleye bilmedim (
}