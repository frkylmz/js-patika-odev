let name = prompt("Adınız Nedir?");
document.querySelector('#myName').innerHTML = name;

function showTime(){
const now = new Date();
let clock = document.getElementById('myClock').innerHTML = `${now}`;    
}

setInterval(function(){showTime()});