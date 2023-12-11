var APIKey = "6636d0f4895a55da96fb3ffcd29a6dd1";
var searchButton = document.getElementById("searchBtn");
let cityList = [];

// dropdown
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

// const city = document.getElementById("cityInput");
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// Search Button
searchButton.addEventListener('click', function() {
    var city = document.getElementById('cityInput').value;
    fetchWeather(city);
});


// // Get city name
// function getCity() {
//     let storedCity = localStorage.getItem("city");
//     // document.getElementById("savedCities").innerHTML = storedCity;
//     // cityList.add(storedCity);

// }
// Fetch weather data for city
// Current Weather
function fetchWeather(query) {
    let city = document.getElementById("cityInput").value;
    localStorage.setItem("city", city);
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
            
            let date = new Date(data.dt * 1000);
            let temp = (data.main.temp);
            let humidity = (data.main.humidity);
            let windSpeed = (data.wind.speed);
            let weatherIcon = (data.weather.icon);
            // let lat = (data.coord.lat);
            // let lon = (data.coord.lon);

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
        forecastWeather();
        }); 
      
    };

    // 5 Day forecast
function forecastWeather(query) {
    let city = document.getElementById("cityInput").value;
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";

    fetch(queryURL)
        .then(function (response) {
            console.log(response.json);
            return response.json();  
        })
        .then(function (data) {
            document.querySelector("#fiveDayForecast").innerHTML = "";
            for(let i=7;i<40;i+=8) {
                let forecast = data.list[i];
                console.log(forecast);
                let date = new Date(forecast.dt*1000).toString();
                date = date.split(' ');
                date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
                console.log(date);

                let temp = (forecast.main.temp);
                let humidity = (forecast.main.humidity);
                let windSpeed = (forecast.wind.speed);

            // let weatherIcon = (forecast.weather.icon[0]);
                let forecastContainer = document.createElement('div');
                forecastContainer.classList.add('card','col')
                forecastContainer.style.width='20vw';
                
                let forecastDate = document.createElement('h5');
                forecastDate.classList.add('card-title', 'p-2');
                forecastDate.textContent = date;


                let forecastTemp = document.createElement('p');
                forecastTemp.textContent = 'Temp: ' + temp;
                

                let forecastHumidity = document.createElement('p');
                forecastHumidity.textContent = 'Humidity: ' + humidity;

                let forecastWindspeed = document.createElement('p');
                forecastWindspeed.textContent = 'Wind Speed: ' + windSpeed;

                forecastContainer.appendChild(forecastDate);
                forecastContainer.appendChild(forecastTemp);
                forecastContainer.appendChild(forecastHumidity);
                forecastContainer.appendChild(forecastWindspeed);


            document.querySelector("#fiveDayForecast").appendChild(forecastContainer);
            }
            addToCityList(city);
            displayCityHistory(); 
        });       
};

// Add city to search history
function addToCityList(city) {
    if (!cityList.includes(city)) {
        cityList.push(city);
        localStorage.setItem("cityList", JSON.stringify(cityList));    
    }
};

// Display clickable city history
function displayCityHistory() {
    var historyContainer = document.getElementById("searchHistory");
    historyContainer.innerHTML = "";

    cityList.forEach(function(city) {
        var cityElement = document.createElement("div");
        cityElement.textContent = city;
        cityElement.classList.add("city-item");

        cityElement.addEventListener("click", function() {
            fetchWeather(city);
        });
        historyContainer.appendChild(cityElement);
    });
}

// Get city from local storage
function getCity() {
    var storedCity = localStorage.getItem("city");
    if (storedCity) {
        fetchWeather(storedCity);
    }

    var storedCityList = localStorage.getItem("cityList");
    if(storedCityList) {
        cityList = JSON.parse(storedCityList);
        displayCityHistory();
    }
}

getCity();


// ("http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1");
// http://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1

