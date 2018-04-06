var input = document.getElementById("inputHtml");
var heading = document.getElementById("h2Html");
var button = document.getElementById("buttonHtml");
var arrayShow = document.getElementById("arrayContent");
var remove = document.getElementById("removeButton")
var sum = 1;
var counter=1;



button.onclick = function () {
    arrayShow.innerHTML=""
    var inputOn = Number(input.value)
    var counter=1;
    while(counter<=10){
        sum=counter*inputOn
        // console.log(inputOn+"*"+counter+"="+sum)
        arrayShow.innerHTML+=inputOn+"*"+counter+"="+sum+"<br>"
        counter++
    }

}

remove.onclick = function () {
    sum = 1;
    heading.innerHTML = ""
    arrayShow.innerHTML = ""
}