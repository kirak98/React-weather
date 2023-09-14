import React, {useState} from "react";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";



export default function Weather(props) {
  const [weatherData, setTWeatherData] = useState ({ready :false});
  const [defaultCity, setCity] = useState(props.city);

  function handleResponse(response) {
    setTWeatherData({
      ready: true,
    date: new Date(response.data.dt * 1000),
     temperature: response.data.main.temp,
     description: response.data.weather[0].description,
     icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
     humidity: response.data.main.humidity,
     wind: response.data.wind.speed,
     city: response.data.name,

    });
   
  }
        function handleSubmit(event) {
          event.preventDefault();
         
        }
      
        function handleCityWeather(event) {
          setCity(event.target.value);
        }
      
        function search() {
        const apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      }
      
        if (weatherData.ready) {
          return (
            <div className="Weather">
          <form onSubmit= {handleSubmit} className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search City..."
                  className="form-control"
                  id="search-text-input"
                  autoComplete="off"
                  onChange={handleCityWeather}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <CurrentWeather data={weatherData}/>
          </div>
          );
} else {

  return "Loading..."
}
} 
