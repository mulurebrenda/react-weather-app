import React, { useState } from "react";
//import Forecast from "./Forecast";
import icon from "./rain-night.png";
import "./Aside.css";
import "./App.css";
import axios from "axios";

export default function MainAside() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [unit, setUnit] = useState("");
  const [temp, setTemp] = useState("");
  let now = new Date();
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  //current weather
  function showTemperature(response) {
    console.log(response);
   
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let currentTemperature = Math.round(response.data.temperature.current);
    let convertedTemperature = Math.round(currentTemperature * 1.8 + 32);

    setWeatherData({
      ready: true,
      location: response.data.city,
      timeStamp: new Date(response.data.time * 1000),
      time: `${hours}:${minutes}`,
      fullDate: `${months[new Date(response.data.time * 1000).getMonth()]} 
        ${new Date(response.data.time * 1000).getDate()}, 
        ${new Date(response.data.time * 1000).getFullYear()}`,
      currentTemp: `${currentTemperature}°`,
      convertedTemp: `${convertedTemperature}°`,
      iconUrl: response.data.condition.icon_url,
      cityCountry: `${response.data.city}, ${response.data.country}`,
      weatherDescription: response.data.condition.description,
      humidity: `${response.data.temperature.humidity}%`,
      windSpeed: `${response.data.wind.speed} m/s`,
      pressure: `${response.data.temperature.pressure} hPa`,
    });
    setUnit({
      currentTemp: `${currentTemperature}°`,
    });
  }

  function showFarenheit(event) {
    event.preventDefault();
    setUnit({
      currentTemp: `${weatherData.convertedTemp}`,
    });
    setTemp({
      highestTemp: `${forecastData.convertedHighestTemp}`,
      lowestTemp: `${forecastData.convertedLowestTemp}`
    })
      
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit({
      currentTemp: `${weatherData.currentTemp}`,
    });
    setTemp({
      highestTemp: `${forecastData.highestTemp}`,
      lowestTemp: `${forecastData.lowestTemp}` 
    })
  }

  //forecast
  const [forecastData, setForecastData] = useState();
  function showForecast(response) {
    console.log(response);
    let highestTemperature = Math.round(
      response.data.daily[0].temperature.maximum
    );
    let convertedHighestTemperature = Math.round(highestTemperature * 1.8 + 32);
    let lowestTemperature = Math.round(
      response.data.daily[0].temperature.minimum
    );
    let convertedLowestTemperature = Math.round(lowestTemperature * 1.8 + 32);
    setForecastData({
      highestTemp: `${highestTemperature}°`,
      lowestTemp: `${lowestTemperature}°`,
      convertedHighestTemp: `${convertedHighestTemperature}°`,
      convertedLowestTemp: `${convertedLowestTemperature}°`,
    });
    setTemp({
      highestTemp: `${highestTemperature}°`,
      lowestTemp: `${lowestTemperature}°`

    });
  }
  let apiKey = "05fo015e85414d77adb5a43ddt2314b8";
  function searchCity(city) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    let apiurl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiurl).then(showForecast);
  }
  function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input-text");
    searchCity(searchInput.value);
  }

  //getting weather for current location
  function showPosition(position) {
    console.log(position);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.shecodes.io/weather/v1/current?lat=${lat}&lon=${lon}&units=metric&key=${apiKey}`;
    axios.get(url).then(showTemperature);
    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&units=metric&key=${apiKey}`;
    axios.get(forecastUrl).then(showForecast);
  }
  function navigate() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  window.onload = function setSearchCity() {
    navigate();
  };
  if (weatherData.ready) {
    return (
      <div className="main-aside">
        <header className="Header">
          <div className="row">
            <div className="col-5 location">
              <h1 className="text-start ps-4" id="location">
                {weatherData.location}
              </h1>
            </div>
            <div className="col-2 time" id="time">
              {weatherData.time}
            </div>
            <div className="col-4 text-end m-auto" id="date">
              {weatherData.fullDate}
            </div>
          </div>
        </header>
        <aside>
          <div className="row">
            <div className="col-9 searchform-current">
              <div className="row">
                <div className="col-7 form">
                  <form
                    className="search-form"
                    id="search-form"
                    role="search"
                    onSubmit={search}
                  >
                    <input
                      className="form-control shadow-sm search-form-input"
                      type="search"
                      placeholder="Enter a city"
                      autoFocus="on"
                      autoComplete="off"
                      id="search-input-text"
                    />
                  </form>
                </div>
                <div className="col-5">
                  <button
                    className="btn shadow-sm current-location-button text-white"
                    onClick={navigate}
                  >
                    Current
                  </button>
                </div>
              </div>
            </div>
            <div className="col-3 units">
              <button id="celsius" onClick={showCelcius}>
                °C
              </button>
              <span> | </span>
              <button id="farenheit" onClick={showFarenheit}>
                °F
              </button>
            </div>
          </div>
          <hr />
          <div className="conditions">
            <div className="humidity">
              💧
              <br />
              <span id="humidity">{weatherData.humidity}</span>
              <br />
              <strong> Humidity </strong>
            </div>
            <div className="wind-speed">
              💨
              <br />
              <span id="wind-speed">{weatherData.windSpeed}</span>
              <br />
              <strong> Wind speed </strong>
            </div>
            <div className="pressure">
              🌀
              <br />
              <span id="pressure">{weatherData.pressure}</span>
              <br />
              <strong> Pressure </strong>
            </div>
          </div>
        </aside>
        <main>
          <div>
            <div className="icon-city d-flex">
              <div id="weather-icon">
                {" "}
                {weatherData.iconUrl && (
                  <img src={weatherData.iconUrl} alt="Weather Icon" />
                )}
              </div>
              <div className="city-country m-auto d-none d-md-flex" id="city">
                {weatherData.cityCountry}
              </div>
            </div>
            <div className="current-temp">
              <h2 className="degree" id="current-temperature">
                {unit.currentTemp}
              </h2>
              <p className="highest-lowest-temp">
                <span id="highest-temp">{temp.highestTemp}</span> |&nbsp;
                <span id="lowest-temp">{temp.lowestTemp}</span>
                <br />
                <span id="weather-description">
                  {" "}
                  {weatherData.weatherDescription}{" "}
                </span>
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
     return (
       <div className="main-aside">
         <header className="Header">
           <div className="row">
             <div className="col-5 location">
               <h1 className="text-start ps-4" id="location">
                 Kisumu
               </h1>
             </div>
             <div className="col-2 time" id="time">
               20:53
             </div>
             <div className="col-4 text-end m-auto" id="date">
               February 9, 2024
             </div>
           </div>
         </header>
         <aside>
           <div className="row">
             <div className="col-9 searchform-current">
               <div className="row">
                 <div className="col-7 form">
                   <form
                     className="search-form"
                     id="search-form"
                     role="search"
                     onSubmit={search}
                   >
                     <input
                       className="form-control shadow-sm search-form-input"
                       type="search"
                       placeholder="Enter a city"
                       autoFocus="on"
                       autoComplete="off"
                       id="search-input-text"
                     />
                   </form>
                 </div>
                 <div className="col-5">
                   <button
                     className="btn shadow-sm current-location-button text-white"
                     onClick={navigate}
                   >
                     Current
                   </button>
                 </div>
               </div>
             </div>
             <div className="col-3 units">
               <button id="celsius" onClick={showCelcius}>
                 °C
               </button>
               <span> | </span>
               <button id="farenheit" onClick={showFarenheit}>
                 °F
               </button>
             </div>
           </div>
           <hr />
           <div className="conditions">
             <div className="humidity">
               💧
               <br />
               <span id="humidity">37%</span>
               <br />
               <strong> Humidity </strong>
             </div>
             <div className="wind-speed">
               💨
               <br />
               <span id="wind-speed">5 m/s</span>
               <br />
               <strong> Wind speed </strong>
             </div>
             <div className="pressure">
               🌀
               <br />
               <span id="pressure">1000hPa</span>
               <br />
               <strong> Pressure </strong>
             </div>
           </div>
         </aside>
         <main>
           <div>
             <div className="icon-city d-flex">
               <div id="weather-icon">
                 {" "}
                 <img src={icon} alt="Weather Icon" />
               </div>
               <div className="city-country m-auto d-none d-md-flex" id="city">
                 Kisumu, Kenya
               </div>
             </div>
             <div className="current-temp">
               <h2 className="degree" id="current-temperature">
                 28°
               </h2>
               <p className="highest-lowest-temp">
                 <span id="highest-temp">25°</span> |&nbsp;
                 <span id="lowest-temp">18°</span>
                 <br />
                 <span id="weather-description"> Partly Cloudy </span>
               </p>
             </div>
           </div>
         </main>
       </div>
     );
  }
}
