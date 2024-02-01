import React, { useState } from "react";
import "./Aside.css";
import "./App.css";
import axios from "axios";

export default function MainAside() {
  /*  let [hour, setHour] = useState("");
  let [time, setTime] = useState("");
  let [minute, setMinute] = useState("");
  let [month, setMonth] = useState("");
  let [dates, setDates] = useState("");
  let [years, setYears] = useState("");
  let [fullDate, setFullDate] = useState("");
  let now = new Date();
  let hours = now.getHours();
  if (hours < 10) {
    setHour(`0${hours}`);
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    setMinute(`0${minutes}`);
  }
  setTime(`${hour},${minute}`);
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
  setMonth(months[now.getMonth()]);
  let date = now.getDate();
  setDates(`${date}`);
  let year = now.getFullYear();
  setYears(`${year}`);
  setFullDate(`${month} ${dates}, ${years}`);*/

  let apiKey = "1615adaa703ba9f96a337d48232ad32d";
  let [location, setLocation] = useState("");
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let [currentTemperature, setCurrentTemperature] = useState("");
  let [weatherDescription, setWeatherDescription] = useState("");
  let [iconUrl, setIconUrl] = useState("");
  let [humidity, setHumidity] = useState("");
  let [windSpeed, setWindSpeed] = useState("");
  let [pressure, setPressure] = useState("");
  //current weather
  function showTemperature(response) {
    console.log(response);
    setLocation(`${response.data.name}`);
    setTemp(Math.round(response.data.main.temp));
    setIconUrl(
      `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
    );
    setCity(`${response.data.name}, ${response.data.sys.country}`);
    setCurrentTemperature(`${temp}°`);
    setWeatherDescription(response.data.weather[0].description);
    setHumidity(`${response.data.main.humidity}%`);
    setWindSpeed(`${response.data.wind.speed} m/s`);
    setPressure(`${response.data.main.pressure} hPa`);
  }
  function searchCity(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input-text");
    searchCity(searchInput.value);
  }
  //searchCity("Kisumu");

  //getting weather for current location
  function showPosition(position) {
    console.log(position);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showTemperature);
  }
  function navigate() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  //show weather for current location when page reloads
  navigate();

  return (
    <div className="main-aside">
      <header className="Header">
        <div className="row">
          <div className="col-5 location">
            <h1 className="text-start ps-4" id="location">
              {location}
            </h1>
          </div>
          <div className="col-2 time" id="time"></div>
          <div className="col-4 text-end m-auto" id="date"></div>
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
            <button id="celsius">°C</button>
            <span> |</span>
            <button id="farenheit">°F</button>
          </div>
        </div>
        <hr />
        <div className="conditions">
          <div className="humidity">
            💧
            <br />
            <span id="humidity">{humidity}</span>
            <br />
            <strong> Humidity </strong>
          </div>
          <div className="wind-speed">
            💨
            <br />
            <span id="wind-speed">{windSpeed}</span>
            <br />
            <strong> Wind speed </strong>
          </div>
          <div className="pressure">
            🌀
            <br />
            <span id="pressure">{pressure}</span>
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
              {iconUrl && <img src={iconUrl} alt="Weather Icon" />}
            </div>
            <div className="city-country m-auto d-none d-md-flex" id="city">
              {city}
            </div>
          </div>
          <div className="current-temp">
            <h2 className="degree" id="current-temperature">
              {currentTemperature}
            </h2>
            <p className="highest-lowest-temp">
              <span id="highest-temp">25°</span> |
              <span id="lowest-temp">14°</span>
              <br />
              <span id="weather-description"> {weatherDescription} </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
