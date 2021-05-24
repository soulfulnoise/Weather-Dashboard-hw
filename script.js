var button = document.querySelector('.button')
var inputValue =document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('desc');
var temp =document.querySelector('.temp');



button.addEventListener("click",function(){
   fetch('api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid={f942c0f8f979e4f33b7d3cd78a52416d}')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert("Wrong city name!"))
})
