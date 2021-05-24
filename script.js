//varibles
let searchForm = document.getElementById("city-search");
let searchButton = document.getElementById("search-button");



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
}


