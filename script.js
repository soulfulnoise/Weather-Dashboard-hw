//varibles
let searchForm = document.getElementById("city-search");
let searchButton = document.getElementById("search-button");



let ApiKey ="f942c0f8f979e4f33b7d3cd78a52416d"

function currentWeather(name) {
    let city =name;
    let queryURL = "api.openweathermap.org/data/2.5/weather?q=" 
    + name +"&units=imperial" +"&appid=" + ApiKey;
fetch(queryURL)
    .then((response) => {
        return response.json()
    })
.then(result => {
    console.log(result);
    forecastWeather(name);
    saveInput(city);
    let icon ="https://openweathermap.org/img/w/" = result.weather[0].icon + "png";
    renderLastSearch();
})
}


