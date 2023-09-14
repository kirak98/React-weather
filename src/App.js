import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';


import Weather from "./Weather";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
        <CurrentWeather defaultCity="Barcelona"/>
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
