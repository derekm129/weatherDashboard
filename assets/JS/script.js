var APIKey = "6636d0f4895a55da96fb3ffcd29a6dd1";
var city = Austin;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// Fetch weather data for city
function getWeather(query); {
    queryURL;

    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1