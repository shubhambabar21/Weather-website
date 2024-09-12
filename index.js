console.log('Hello Jee shubham');    

const API_KEY = "36d3b0e0a177a619a50d46539b160c63";

async function showWeather() {
    let lattitude = 15.333;
    let longitude = 74.8833;
    //  let city = "goa";
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_key}units=metric');

    const data = await response.json();
    console.log("Weather data:->" +data);     

    let newPara = document.createElement('p');
    newPara.textContent = '${data.main.temp.toFixed(2)} *C'

    document.base.appendChild(newPara);
}                                                                                         