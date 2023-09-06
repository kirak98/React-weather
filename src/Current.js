import React from "react";

export default function Current(props) {
  return (
    <div className="row">
      <div className="col-6">
        <div>
          <h1 id="city"> Barcelona </h1>
          <ul>
            <li>
              Last Updated: Today 19:00 <span id="date"></span>
            </li>
            <li id="description"></li>
          </ul>
        </div>
        <div className="d-flex weather-temperature">
          <img src="" alt="" id="icon" />
          <div>
            <strong id="temperature" className="temp">
              30
            </strong>
            <span className="units">°C</span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity"></span>%
          </li>
          <li>
            Wind: <span id="wind"></span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
