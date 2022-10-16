var bodyElement = document.getElementById("demo");
var imgElement = document.getElementById("img");
var turnOnOffBtn = document.getElementById("turnOnOffBtn");

function turnOn(){
    bodyElement.style.backgroundColor = "yellow"
    imgElement.src = "images/on.png"
    turnOnOffBtn.innerHTML = "Turn off"
}

function turnOff(){
    bodyElement.style.backgroundColor = "gray"
    imgElement.src = "images/off.png"
    turnOnOffBtn.innerHTML = "Turn on"
}

function turnOnOff(){
    if(turnOnOffBtn.innerHTML == "Turn on"){
        turnOn();
    }else{
        turnOff()
    }
}