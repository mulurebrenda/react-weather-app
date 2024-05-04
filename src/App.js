import React from "react";
import Weather from "./Weather";
import Github from "./Github";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather />
        </div>
      </div>
      <Github />
    </div>
  );
}

export default App;
