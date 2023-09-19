import React, {useState, useEffect} from "react";
import "./Weather.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";




export default function WeatherForecast(props) {
  let[loaded, setLoaded] = useState(false);
  let[forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);},
    [props.coordinates]);

    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }
  
    function load() {
      let apiKey ="ed238469f9b5e9d801834270e65449bc";
      let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
    }

  if (loaded) {

  return (
          <div className="forecast row" id="forecast">
     
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-6" key={index}>
            <ForecastDay data={dailyForecast}/>
          </div>
           );
            } else {
              return null;
            }
          })}
             
      </div>
    
  

  );
} else {
  load();
  return null;
}
}
