import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';


import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Barcelona"/>
      
      </div>
      <footer className="text-center mb-3">   <small>
      <a
        href="https://github.com/kirak98/my-app/tree/main/src" 
        rel="noopener noreferrer" target="_blank"
        
      >
        Open-Source <br/>    
      </a>
       Coded by Kira King
    </small>
    </footer>  
    </div>

    
  );
}
