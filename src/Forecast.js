import React, {useState, useEffect} from "react";
import "./Weather.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";




export default function Forecast(props) {
  let[loaded, setLoaded] = useState(false);
  let[forecast, setForecast] = useState(false);

  useEffect(() => {
    setLoaded(false);
  },
    [props.coordinates]);

    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }
  
    

  if (loaded) {

  return (
    
          <div className="forecast" id="forecast">
<div className="row mb-3 mt-3">
     
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div key={index}>
            <ForecastDay data={dailyForecast} icon={`https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}.png`}/>
          </div>
           );
            } else {
              return null;
            }
          })}
             
      </div>
      </div>
    
  

  );
} else {
  let apiKey ="281450ec88936f4fa8ee9864682b49a0";
  let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}
}
