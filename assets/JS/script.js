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


            //     let forecastHTML = `  <div id="day1" class="card col" style="width:20vw">
            //     <h5 id="date1" class="card-title p-2">${date}</h5>
            //     <!-- Icon -->
            //     <!-- <img
            //     src="assets/images/clear.png"
            //     id="icon2"
            //     class="img-thumbnail w-25"
            //     alt="weather description"
            //     /> -->
            //     <!-- Weather Info -->
            //     <div class="card-body">
            //         <p class="card-text">Max Temp</p>
            //         <p id="temp1" class="card-text">${temp}</p>
            //         <p class="card-text">Humidity</p>
            //         <p id="humidity1" class="card-text">${humidity}</p>
            //         <p class="card-text">Wind Speed</p>
            //         <p id="windSpeed1" class="card-text">${windSpeed}</p>
            //     </div>
            // </div>`
            document.querySelector("#fiveDayForecast").appendChild(forecastContainer);
            }  
            
        });
    
        
};




// ("http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1");
// http://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=6636d0f4895a55da96fb3ffcd29a6dd1

