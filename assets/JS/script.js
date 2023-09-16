var APIKey = "6636d0f4895a55da96fb3ffcd29a6dd1";
var city = "";
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


// Fetch weather data for city

function fetchWeather(query) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1";
    console.log('test');
    fetch(url)
        .then(function (response) {
            console.log('anything');
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        }); 
    }



// ("http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1");

fetchWeather();