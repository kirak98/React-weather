import React from "react";
import FormattedDate from "./FormattedDate";


export default function CurrentWeather(props) {
    return (
<div className="currentWeather">
<div className="row">
<div className="col-6">
  <div>
    <h1 className="city">{props.data.city} </h1>
    <ul>
      <li className="date">
        Last Updated: <FormattedDate date={props.data.date} />
      </li>
      <li className="text-capitalize" id="description">{props.data.description}</li>
    </ul>
  </div>
  <div className="d-flex weather-temperature">
<img src={props.data.icon} alt={props.data.description}     id="icon" className="main-icon"/>
    <div className="temperature">
      <strong id="temperature" > {Math.round(props.data.temperature)}
      </strong>
      <span className="units">°C</span>
    </div>
  </div>
</div>
<div className="col-6">
  <ul>
    <li>
      Humidity: {props.data.humidity}%
    </li>
    <li>
      Wind: {props.data.wind} km/h
    </li>
  </ul>
  </div>
  </div>
  </div>
    );
}
