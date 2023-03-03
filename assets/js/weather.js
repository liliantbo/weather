import { weather_data } from './data.js';


let loadDayForecastData = () => {
	let {city_code,city, date, maxtemperature, mintemperature,
         cloudiness, wind, rainfall, forecast_today, ...otros }=weather_data[0];
    let ciudad =document.getElementById( "city" ); 
    let fecha =document.getElementById( "date" );
    let maxTemp =document.getElementById( "maxtemperature" );
    let minTemp =document.getElementById( "mintemperature" );
    let nubosidad =document.getElementById( "cloudiness" );
    let viento =document.getElementById( "wind" );
    let precipitacion =document.getElementById( "rainfall" );
    ciudad.innerHTML=`<h5 id="city" class="text-golden"> ${city} </h5>`;
    fecha.innerHTML=`<h5 id="date" class="text-golden text-sm  opacity-8 mb-0"> ${date} </h5>`;
    maxTemp.innerHTML=`<span id="maxtemperature">${maxtemperature}</span>`;
    minTemp.innerHTML=`<span id="mintemperature" class="opacity-6 mx-2">${mintemperature}</span>`;
    nubosidad.innerHTML=`<h6 id="cloudiness" class="text-golden mb-0">${cloudiness}></h6>`;
    viento.innerHTML=`<h6 id="wind" class="text-golden mb-0">${wind}</h6>`;
    precipitacion.innerHTML=`<h6 id="rainfall" class="text-golden mb-0">${rainfall}</h6>`;

    let late_icon =document.getElementById("late_icon");
    let late_temperature= document.getElementById("late_temperature");
    let late_forecast=document.getElementById("late_forecast");
    let late_text=document.getElementById("late_text");
    late_icon.innerHTML=`<i id="late_icon" class="material-icons opacity-10">${forecast_today[0].icon}</i>`;
    late_temperature.innerHTML=`<h3 id="late_temperature" class="text-center mb-0">${forecast_today[0].temperature}</h3>`;
    late_forecast.innerHTML = `<span id="late_forecast" class="text-md">${forecast_today[0].forecast}</span>`;
    late_text.innerHTML=`<h4 id="late_text" class="mb-0 text-md">${forecast_today[0].text}</h4>`;

    let night_icon =document.getElementById("night_icon");
    let night_temperature= document.getElementById("night_temperature");
    let night_forecast=document.getElementById("night_forecast");
    let night_text=document.getElementById("night_text");
    night_icon.innerHTML=`<i id="night_icon" class="material-icons opacity-10">${forecast_today[1].icon}</i>`;
    night_temperature.innerHTML=`<h3 id="night_temperature" class="text-center mb-0">${forecast_today[1].temperature}</h3>`;
    night_forecast.innerHTML = `<span id="night_forecast" class="text-md">${forecast_today[1].forecast}</span>`;
    night_text.innerHTML=`<h4 id="night_text" class="mb-0 text-md">${forecast_today[1].text}</h4>`;

}

function loadWeekForecastData() {
  let forecastList =  document.getElementsByClassName("list-group")[0];

    let forecastWeek = weather_data[0].forecast_week;
    forecastWeek.forEach((forecast) => {
      let listItem = `
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
          <div class="d-flex flex-column">
            <h6 class="mb-1 text-dark font-weight-bold text-sm">${forecast.text}</h6>
            <span class="text-xs">${forecast.date}</span>
          </div>
          <div class="d-flex align-items-center ">
            <span class="font-weight-bold text-dark mx-2">${forecast.temperature.max}</span> |  <span class="text-dark mx-2">${forecast.temperature.min}</span>
            <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">water_drop</i></div>
          </div>
        </li>
      `;
      forecastList.insertAdjacentHTML('beforeend', listItem);
    });
}


document.addEventListener('DOMContentLoaded', function() {
  loadDayForecastData();
});

let loadBtn = document.getElementById('loadinfo');
loadBtn.addEventListener('click', function() {
  loadWeekForecastData();
});