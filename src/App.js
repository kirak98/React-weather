import React from "react";
import "./styles.css";

import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Current />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
