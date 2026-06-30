// ===============================
// SSLL Smart Lighting Laboratory
// ===============================

const lamp = document.getElementById("lampIcon");
const toggleBtn = document.getElementById("toggleLamp");

const slider = document.getElementById("brightness");
const lampType = document.getElementById("lampType");
const usageHours = document.getElementById("usageHours");

const lampStatus = document.getElementById("lampStatus");
const brightnessValue = document.getElementById("brightnessValue");
const energyValue = document.getElementById("energyValue");
const kwhValue = document.getElementById("kwhValue");
const costValue = document.getElementById("costValue");
const carbonValue = document.getElementById("carbonValue");
const savingValue = document.getElementById("savingValue");

const tableLamp = document.getElementById("tableLamp");
const tablePower = document.getElementById("tablePower");
const tableHour = document.getElementById("tableHour");
const tableEnergy = document.getElementById("tableEnergy");
const tableCost = document.getElementById("tableCost");
const tableCarbon = document.getElementById("tableCarbon");

const historyTable = document.getElementById("historyTable");

let lampOn = false;

// ===============================
// Lamp ON / OFF
// ===============================

toggleBtn.addEventListener("click", () => {

    lampOn = !lampOn;

    if (lampOn) {

        lamp.classList.remove("lamp-off");
        lamp.classList.add("lamp-on");

        lampStatus.textContent = "ON";

        toggleBtn.textContent = "Matikan Lampu";

    } else {

        lamp.classList.remove("lamp-on");
        lamp.classList.add("lamp-off");

        lampStatus.textContent = "OFF";

        toggleBtn.textContent = "Hidupkan Lampu";

    }

    calculate();

});

// ===============================

slider.addEventListener("input", calculate);

lampType.addEventListener("change", calculate);

usageHours.addEventListener("input", calculate);

// ===============================

function calculate(){

    let brightness = parseInt(slider.value);

    brightnessValue.textContent = brightness + "%";

    let watt = parseFloat(lampType.value);

    if(!lampOn){

        watt = 0;

    }

    watt = watt * brightness / 100;

    let hour = parseFloat(usageHours.value);

    if(isNaN(hour)){

        hour = 0;

    }

    let kwh = watt * hour / 1000;

    let cost = kwh * 0.218;

    let carbon = kwh * 0.539;

    let saving = (60 - parseFloat(lampType.value)) * hour * 30 * 0.218 / 1000;

    energyValue.textContent = watt.toFixed(2) + " W";

    kwhValue.textContent = kwh.toFixed(3) + " kWh";

    costValue.textContent = "RM " + cost.toFixed(2);

    carbonValue.textContent = carbon.toFixed(3) + " kg";

    savingValue.textContent = "RM " + saving.toFixed(2);

    tableLamp.textContent =
        lampType.options[lampType.selectedIndex].text;

    tablePower.textContent = watt.toFixed(2) + " W";

    tableHour.textContent = hour + " Jam";

    tableEnergy.textContent = kwh.toFixed(3) + " kWh";

    tableCost.textContent = "RM " + cost.toFixed(2);

    tableCarbon.textContent = carbon.toFixed(3) + " kg";

}

// ===============================
// Save Simulation
// ===============================

toggleBtn.addEventListener("click", saveHistory);

function saveHistory(){

    if(!lampOn){

        return;

    }

    let row = `

<tr>

<td>${historyTable.rows.length + 1}</td>

<td>${lampType.options[lampType.selectedIndex].text}</td>

<td>${slider.value}%</td>

<td>${usageHours.value}</td>

<td>${kwhValue.textContent}</td>

<td>${costValue.textContent}</td>

</tr>

`;

    if(historyTable.innerHTML.includes("Belum ada")){

        historyTable.innerHTML="";

    }

    historyTable.innerHTML += row;

}

calculate();