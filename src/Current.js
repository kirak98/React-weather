import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Current(props) {
  const [weatherData, setTWeatherData] = useState ({ready :false});
  function handleResponse(response) {
    setTWeatherData({
      ready: true,
      date: "Today 19:00",
     temperature: response.data.main.temp,
     description: response.data.weather[0].description,
     icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
     humidity: response.data.main.humidity,
     wind: response.data.wind.speed,
     city: response.data.name,

    });
   
  }
   if (weatherData.ready) {
    return (
    <div className="row">
      <div className="col-6">
        <div>
          <h1 id="city"> Barcelona </h1>
          <ul>
            <li>
              Last Updated: <span id="date"></span>
            </li>
            <li className="text-capitalize" id="description">{weatherData.description}</li>
          </ul>
        </div>
        <div className="d-flex weather-temperature">
          <img src={weatherData.icon} alt={weatherData.description} id="icon" className="main-icon"/>
          <div className="temperature">
            <strong id="temperature" > {Math.round(weatherData.temperature)}
            </strong>
            <span className="units">°C</span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: {weatherData.humidity}%
          </li>
          <li>
            Wind: {weatherData.wind} km/h
          </li>
        </ul>
      </div>

    </div>
  );
} else {
  const apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  let city = "Barcelona";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
}
} 

