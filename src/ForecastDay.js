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
            <div className="container">
      <div className="card">
        <h2 className="card-header"> Upcoming Forecast</h2>
        <div className="card-body">
          <div className="container text-center">
        <div className="ForecastDay">{day()}</div>
        <img src="" alt="" id="icon" className="forecastIcon"/>
        <div className="Forecast-temperatures">
          <span className="Forecast-temperature-max">
            {maxTemperature()}
          </span>
          <span className="Forecast-temperature-min">
            {minTemperature()}
          </span>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }