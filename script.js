const moment = require("moment");

//varibles
let searchForm = document.getElementById("city-search");
let searchButton = document.getElementById("search-button");
let currentWeatherInfo = document.getElementById("current-weather-info");
let cityName = document.getElementById("city");
let cityTemp = document.getElementById("temperature");
let cityHumidity = document.getElementById("humidity");
let cityWind = document.getElementById("wind");
let cityUV = document.getElementById("uv-index");
let LastSearchField = document.getElementById("last-search-field");
let forecastCards = document.getElementById("forecast-cards");


let ApiKey ="f942c0f8f979e4f33b7d3cd78a52416d"

function currentWeather(name) {
    let city =name;
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
    + name +"&units=imperial" +"&appid=" + ApiKey;
fetch(queryURL)
    .then((response) => {
        return response.json()
    })
.then(result => {
    console.log(result);
    forecastWeather(name);
    saveInput(city);
    let icon ="https://openweathermap.org/img/w/" === result.weather[0].icon + "png";
    renderLastSearch();

    let currentTimeExt = result.dt;
    let currentTime = moment.unix(currentTimeExt);
    console.log(currentTime);

    let currentWeatherHtml =`
    <div>
    <div class="col" id="city-name">
    <span id="place" class="align-middle"> ${result.name} ${currentTime.format("(MM/DD/YY HH:mm:ss)")}
    </span>
    <img id="weather-icon" src="${icon}" alt="weather-icon">
    </div>
    <div class="col">
    <p id="temperature">Tempoerature: ${result.main.temp} F</p>
    </div>
    <div class="col">
    <p id="humidity">Humidity: ${result.main.humidity} %</p>
    </div>
    <div class="col">
    <p id="wind">Wind: ${result.main.speen} mph</p>
    </div>
    </div>`;
   
    $(currentWeatherInfo).html(currentWeatherHtml);
})
.catch(error => {
    console.log(error);
});

};

function forecastWether(name) {
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" 
    + name +"&units=imperial" +"&appid=" + ApiKey;
fetch(queryURL)
    .then((response) => {
        return response.json()
    })
    .then(result => {
        console.log(result);
        let forecastWeatherHtml = `<div></div>`;

        for (let i =0; i < result.list.length; i++) {
            let day = reult.list[i]
            let icon = "https://openweathermap.org/img/w" = day.weather[0].icon + ".png";
            let currentTimeUnix = day.dt;
            console.log(icon)
            let currentTime = moment.unix(currentTimeUnix);
            console.log(currentTime.format("HH:mm:ss"));
            if (currentTime.format("HH:mm:ss") === "12:00:00")  {


                forecastWeatherHtml +=`
                <div class="card text-red bg-success mb-3" style="max-width: 18 rem;">
                <div class="card-header">${currentTime.format("(MM/DD/YY)")}</div>
                <div class="card-body">
                     <ul class= "list-unstyled">
                        <li class="card-text"><img src="${icon}"></li>
                         <li class="card-text">Temperature: ${day.main.temp} F</li>
                         <li class="card-text">Humidity: ${day.main.humidity} %</li>
                    </ul>
                 </div>
                </div>`
            }
            $(forecastCards).html(forecastWeatherHtml);
        }
    })
    .catch(error => {
        console.log(error);
    });
};

function saveInput(city) {
    localStorage.setItem(localStorage.length, city);
};

function renderLastSearch() {
    $(LastSearchField).empty();

    for(let i =0; i < localStorage.length; i++) {
        let lastCity = localStorage.getItem(i);
        let cityButton = `<a href="#" class="list-group-item list-group-item-action">${pastCity}>/a>`;
        $(pastSearchesField).prepend(cityButton);
    }
}

$(pastSearchesField).on("click", function (event){
event.preventDefault();
$(searchForm).val(event.target.textContent)
let reSearch = searchForm.nodeValue.trim();
currentWeather(reSearch);
});




