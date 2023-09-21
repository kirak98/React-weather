import React from "react";
import "./Weather.css";

export default function ForecastDay(props) {
    function maxTemperature() {
      let temperature = Math.round(props.data.temp.max);
      return `${temperature}°`;
    }
  
    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}°`;
    }
  
    function day() {
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay();
  
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
      return days[day];
    }
  
    return (
      <div>

      <div className="card mt-1 mb-3">
      <div className="card-body">
        <h2 className="card-header"> Upcoming Forecast</h2>
        <div className="ForecastDay">{day()}</div>
        <div className="Forecast-temperatures">
          <span className="Forecast-temperature-max">
            <p>{maxTemperature()}°C</p>
          </span>
          <img src={props.icon} alt="weather" className="ForecastIcon"/>
          <span className="Forecast-temperature-min">
           <p> {minTemperature()}°C </p>
          </span>
        </div>
      </div>
      </div>
      </div>

    );
  }