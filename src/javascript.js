function updateTime(){
let ottawaElement = document.querySelector("#Ottawa");
ottavaDateElement = ottawaElement.querySelector(".date");
ottavaTimeElement = ottawaElement.querySelector(".time");
let ottawaTime = moment().tz("Canada/Eastern");
ottavaDateElement.innerHTML= ottawaTime.format("MMMM Do YYYY");


ottavaTimeElement.innerHTML = `${ottawaTime.format('h:mm:ss')} <small> PM</small>`;


let canberraElement = document.querySelector("#Canberra");
canberraDateElement = canberraElement.querySelector(".date");
canberraTimeElement = canberraElement.querySelector(".time");
let canberraTime = moment().tz("Australia/Canberra");
canberraDateElement.innerHTML= canberraTime.format("MMMM Do YYYY");


canberraTimeElement.innerHTML = `${canberraTime.format('h:mm:ss')} <small> PM</small>`;
}
updateTime();
setInterval(updateTime,1000);


