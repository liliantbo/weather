import { weather_data } from './data.js';


let loadDayForecastData = () => {
	let {city_code,city, date, maxtemperature, mintemperature,
         cloudiness, wind, rainfall, ...otros }=weather_data[0];
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
}

let loadWeekForecastData = () => {
	let {city_code,city, date, maxtemperature, mintemperature,
        cloudiness, wind, rainfall, forecast_today,forecast_week}=weather_data[0];
   
    let forecastWeek = document.getElementsByClassName("list-group");
    let elementoLista=(n)=>{
        let {day:dayFW, text:textFW, date:dateFW, temperature:temperaturaFW,icon}=forecast_week[n];
        return  `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm">${textFW}</h6>
          <span class="text-xs">${dateFW}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2">${temperaturaFW.max}</span> |  <span class="text-dark mx-2">${temperaturaFW.min}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">water_drop</i></div>
        </div>
      </li> `
    }
    forecastWeek.add(elementoLista(0));
    
}


loadDayForecastData();
loadWeekForecastData();