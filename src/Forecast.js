import React from "react";

export default function Forecast() {
  return (
    <div className="upcoming-weather" id="forecast">
      <div className="day-1">
        <strong id="day-1"> Fri </strong>
        <br />
        <span id="humidity-day1"> 💧 37% </span>
        <br />
        <span className="icon1">
          <img
            id="weather-icon-day1"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt="Weather Icon"
            width="65px"
          />
        </span>
        <br />
        <span id="max-temp-day1">23°</span>|<span id="min-temp-day1"> 14°</span>
      </div>
      <div className="day-2">
        <strong id="day-2"> Sat </strong>
        <br />
        <span id="humidity-day2"> 💧 24% </span>
        <br />
        <span className="icon2">
          <img
            id="weather-icon-day2"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt="Weather Icon"
            width="65px"
          />
        </span>
        <br />
        <span id="max-temp-day2">24°</span>|<span id="min-temp-day2"> 14°</span>
      </div>
      <div className="day-3">
        <strong id="day-3"> Sun </strong>
        <br />
        <span id="humidity-day3"> 💧 24% </span>
        <br />
        <span className="icon3">
          <img
            id="weather-icon-day3"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt="Weather Icon"
            width="65px"
          />
        </span>
        <br />
        <span id="max-temp-day3">25°</span>|<span id="min-temp-day3"> 15°</span>
      </div>
      <div className="day-4">
        <strong id="day-4"> Mon </strong>
        <br />
        <span id="humidity-day4"> 💧 24% </span>
        <br />
        <span className="icon4">
          <img
            id="weather-icon-day4"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt="Weather Icon"
            width="65px"
          />
        </span>
        <br />
        <span id="max-temp-day4">24°</span>|<span id="min-temp-day4"> 14°</span>
      </div>
      <div className="day-5">
        <strong id="day-5"> Tue </strong>
        <br />
        <span id="humidity-day5"> 💧 22% </span>
        <br />
        <span className="icon5">
          <img
            id="weather-icon-day5"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt="Weather Icon"
            width="65px"
          />
        </span>
        <br />
        <span id="max-temp-day5">25°</span>|<span id="min-temp-day5"> 15°</span>
      </div>
      <div className="day-6">
        <strong id="day-6"> Wed </strong>
        <br />
        <span id="humidity-day6"> 💧 40% </span>
        <br />
        <span className="icon6">
          <img
            id="weather-icon-day6"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt="Weather Icon"
            width="65px"
          />
        </span>
        <br />
        <span id="max-temp-day6">24°</span>|<span id="min-temp-day6"> 15°</span>
      </div>
    </div>
  );
}
