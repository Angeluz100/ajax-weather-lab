let weatherData;

const $weatherFor = $('#weather-for');
const $temperature = $('#temperature');
const $feeling = $('#feeling');
const $weather = $('#weather')
const $input = $('input[type="text"]');
const celsius = "℃"


const API_KEY = "2e2081ef0964cd0fad3a045787760cee"
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

$('form').on('submit', handleSubmit);


function handleSubmit(evt) {
evt.preventDefault();

const term = $input.val();

$input.val("");

$.ajax(BASE_URL + "?q=" + term + "&appid=" + API_KEY + "&units=metric")
.then( function(data){
    console.log('Weather Data', data)
     weatherData = data
      render ();
}, function(error) {
    console.log('Error', error)
});
 }

function render() {
    if(weatherData){
        $weatherFor.text(weatherData.name)
        $temperature.text(weatherData.main.temp + celsius)
        $feeling.text(weatherData.main.feels_like + celsius)
        $weather.text(weatherData.weather[0].description)
    }
};