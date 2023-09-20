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
            let lat = (data.coord.lat);
            let lon = (data.coord.lon);

            document.getElementById("currentDate").innerHTML = date;
            document.getElementById("currentTemp").innerText = temp.toString();
            document.getElementById("currentHumidity").innerText = humidity.toString();
            document.getElementById("currentWindSpeed").innerText = windSpeed.toString();

            // icon1 = document.getElementById("icon1");
            // // Icons
            // if(data.weather.main == "clear") {
            //     icon1.src = "http://openweathermap.org/img/w/10d.png";
            // }
            console.log(data);
        forecastWeather(lat, lon);
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
            for(let i=0;i<=5;i++) {
            let forecast = data.list[i];
            let date = new Date(forecast.dt*1000);
            let temp = (forecast.main.temp);
            let humidity = (forecast.main.humidity);
            let windSpeed = (forecast.wind.speed);
            // let weatherIcon = (forecast.weather.icon[0]);

            
            document.getElementById('date${i + 1').innerHTML = date;
            }  
            
        });
    
        
};




// ("http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1");
// http://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1

