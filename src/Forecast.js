import React from "react";
import "./Weather.css";

export default function Current(props) {
  return (
    <div className="container">
      <div className="card">
        <h2 className="card-header"> Upcoming Forecast</h2>
        <div className="card-body">
          <div className="container text-center">
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
