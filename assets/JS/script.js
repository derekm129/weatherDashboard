var APIKey = "6636d0f4895a55da96fb3ffcd29a6dd1";
var searchButton = document.getElementById("searchBtn")
const city = document.getElementById("cityInput").value;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// Search Button
searchButton.addEventListener('click', getCity);

// Get city name
function getCity() {
    document.getElementById("cityName").innerHTML = city;
    console.log("button clicked");
}

// Fetch weather data for city

function fetchWeather(query) {
    console.log('test');
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        }); 
    }



// ("http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1");

