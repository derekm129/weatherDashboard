var APIKey = "6636d0f4895a55da96fb3ffcd29a6dd1";
var searchButton = document.getElementById("searchBtn");


// const city = document.getElementById("cityInput");
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// Search Button
searchButton.addEventListener('click', fetchWeather, forecastWeather);

// Get city name
// function getCity() {
//     let city = document.getElementById("cityInput").value;
//     document.getElementById("cityName").innerHTML = city;
//     console.log("button clicked");
// }

// Fetch weather data for city
// Current Weather
function fetchWeather(query) {
    let city = document.getElementById("cityInput").value;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    document.getElementById("cityName").innerHTML = city;
    console.log("button clicked");

    // Current Weather
    fetch(queryURL)
        .then(function (response) {
            console.log(response.json);
            return response.json();  
        })
        .then(function (data) {
            
            let date = new Date(data.dt);
            let temp = (data.main.temp);
            let humidity = (data.main.humidity);
            let windSpeed = (data.wind.speed);
            let weatherIcon = (data.weather.icon);

            document.getElementById("date1").innerHTML = date;
            document.getElementById("temp1").innerText = temp.toString();
            document.getElementById("humidity1").innerText = humidity.toString();
            document.getElementById("windSpeed1").innerText = windSpeed.toString();

            // icon1 = document.getElementById("icon1");
            // // Icons
            // if(data.weather.main == "clear") {
            //     icon1.src = "http://openweathermap.org/img/w/10d.png";
            // }
            console.log(data);
        forecastWeather(data.coord.lat, data.coord.lon);
        }); 
      
    };

    // 5 Day forecast
function forecastWeather(latitude, longitude) {
    let city = document.getElementById("cityInput").value;
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" +latitude + "&lon=" + longitude + "&appid=" + APIKey + "&units=imperial";

    fetch(queryURL)
        .then(function (response) {
            console.log(response.json);
            return response.json();  
        })
        .then(function (data) {
            console.log(data);
            let date = new Date(data.list.dt);
            let temp = (data.list.main.temp);
            let humidity = (data.list.main.humidity);
            let windSpeed = (data.list.wind.speed);
            let weatherIcon = (data.weather.icon);
            
        })
};




// ("http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1");

