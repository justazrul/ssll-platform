document.addEventListener("DOMContentLoaded", () => {

    const lamp = document.getElementById("lampIcon");
    const slider = document.getElementById("brightness");
    const lampType = document.getElementById("lampType");
    const hours = document.getElementById("usageHours");
    const button = document.getElementById("toggleLamp");

    const lampStatus = document.getElementById("lampStatus");
    const brightnessValue = document.getElementById("brightnessValue");
    const energyValue = document.getElementById("energyValue");
    const kwhValue = document.getElementById("kwhValue");
    const costValue = document.getElementById("costValue");
    const carbonValue = document.getElementById("carbonValue");

    let isOn = false;

    function updateDashboard() {

        const brightness = Number(slider.value);
        const watt = Number(lampType.value) * (brightness / 100);
        const kwh = isOn ? (watt * Number(hours.value)) / 1000 : 0;
        const cost = kwh * 0.571;
        const carbon = kwh * 0.539;

        lampStatus.textContent = isOn ? "ON" : "OFF";
        brightnessValue.textContent = brightness + "%";
        energyValue.textContent = watt.toFixed(1) + " W";
        kwhValue.textContent = kwh.toFixed(2);
        costValue.textContent = "RM" + cost.toFixed(2);
        carbonValue.textContent = carbon.toFixed(2) + " kg";
        /* ===========================
   ENERGY ANALYTICS
=========================== */

document.getElementById("tableLamp").textContent =
    lampType.options[lampType.selectedIndex].text;

document.getElementById("tablePower").textContent =
    watt.toFixed(1) + " W";

document.getElementById("tableHour").textContent =
    hours.value + " Jam";

document.getElementById("tableEnergy").textContent =
    kwh.toFixed(2) + " kWh";

document.getElementById("tableCost").textContent =
    "RM" + cost.toFixed(2);

document.getElementById("tableCarbon").textContent =
    carbon.toFixed(2) + " kg";
    }

    function updateLamp() {

        if (isOn) {

            lamp.classList.remove("lamp-off");
            lamp.classList.add("lamp-on");

            lamp.style.opacity = slider.value / 100;

            button.textContent = "Matikan Lampu";

        } else {

            lamp.classList.remove("lamp-on");
            lamp.classList.add("lamp-off");

            lamp.style.opacity = 0.30;

            button.textContent = "Hidupkan Lampu";
        }

        updateDashboard();
    }

    button.addEventListener("click", () => {

        isOn = !isOn;

        updateLamp();

    });

    slider.addEventListener("input", () => {

        if (isOn) {

            lamp.style.opacity = slider.value / 100;

        }

        updateDashboard();

    });

    lampType.addEventListener("change", updateDashboard);

    hours.addEventListener("input", updateDashboard);

    updateLamp();

});