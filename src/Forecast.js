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
<div className="row">
     
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div key={index}>
            <ForecastDay data={dailyForecast}  />
          </div>
           );
            } else {
              return null;
            }
          })}
             
      </div>
      </div>
    
  

  );
} 
  else {
    let apiKey ="bd79ao40tde3dec118ca46bc3e6dd55f";
    let lon = props.coord.lon;
  let lat = props.coord.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  }
  }
  
