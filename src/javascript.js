function updateTime(){
let ottawaElement = document.querySelector("#Ottawa");
 if (ottawaElement) {
ottavaDateElement = ottawaElement.querySelector(".date");
ottavaTimeElement = ottawaElement.querySelector(".time");
let ottawaTime = moment().tz("Canada/Eastern");
ottavaDateElement.innerHTML= ottawaTime.format("MMMM Do YYYY");

ottavaTimeElement.innerHTML = `${ottawaTime.format('h:mm:ss')} <small> PM</small>`;
 }

let canberraElement = document.querySelector("#Canberra");
 if (canberraElement) {
canberraDateElement = canberraElement.querySelector(".date");
canberraTimeElement = canberraElement.querySelector(".time");
let canberraTime = moment().tz("Australia/Canberra");
canberraDateElement.innerHTML= canberraTime.format("MMMM Do YYYY");
 
canberraTimeElement.innerHTML = `${canberraTime.format('h:mm:ss')} <small> PM</small>`;
}
}

function updateCity(event) {
    let cityTZ = event.target.value;
    let cityName = cityTZ.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTZ);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
     <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
     </div>   
        <div class="time">${cityTime.format('h:mm:ss')} <small> PM</small> </div>
    </div>

    `
}

updateTime();
setInterval(updateTime,1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);

