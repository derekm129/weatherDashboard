var APIKey = "6636d0f4895a55da96fb3ffcd29a6dd1";
var searchButton = document.getElementById("searchBtn")


// const city = document.getElementById("cityInput");
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// Search Button
searchButton.addEventListener('click', fetchWeather);

// Get city name
// function getCity() {
//     let city = document.getElementById("cityInput").value;
//     document.getElementById("cityName").innerHTML = city;
//     console.log("button clicked");
// }

// Fetch weather data for city

function fetchWeather(query) {
    let city = document.getElementById("cityInput").value;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    document.getElementById("cityName").innerHTML = city;
    console.log("button clicked");

    fetch(queryURL)
        .then(function (response) {
            console.log(response.json);
            return response.json();  
        })
        .then(function (data) {
            let date = new Date(data.dt);
            let maxTemp = (data.main.temp_max);
            let minTemp = (data.main.temp_min);
            let humidity = (data.main.humidity);
            let windSpeed = (data.wind.speed);

            console.log(maxTemp);

            document.getElementById("date1").innerHTML = date;
            console.log(document.getElementById("maxTemp1").value);
            document.getElementById("maxTemp1").innerText = maxTemp.toString();
            document.getElementById("minTemp1").innerText = minTemp.toString();
            document.getElementById("humidity1").innerText = humidity.toString();
            document.getElementById("windSpeed1").innerText = windSpeed.toString();
            console.log(data)
        }); 
    }
    




// ("http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1");

