var APIkey = "6636d0f4895a55da96fb3ffcd29a6dd1";

var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL);