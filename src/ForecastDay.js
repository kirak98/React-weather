import React from "react";
import "./Weather.css";

export default function ForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}`;
      }
    
      function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}`;
      }
  
  
    function day() {
      let date = new Date(props.data.time * 1000);
      let day = date.getDay();
  
      let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
  
      return days[day];
    }
  
    return (
    
        <div className="col-2">
        <div className="ForecastDay">
            {day()}
            </div>
        <div className="Forecast-temperatures">
       
          <span className="Forecast-temperature-max">
            {maxTemperature()}°C
          </span>
          <img
            src={props.data.condition.icon_url}
            alt={props.data.condition.description}
          ></img>
          
          <span className="Forecast-temperature-min">
            {minTemperature()}°C 
          </span>
        </div>
      </div>

    );
  }