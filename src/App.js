import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';


import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Barcelona"/>
        <Forecast />
        <Footer />
      </div>
    </div>

    
  );
}
