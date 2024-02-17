import React from "react";

export default function Forecast(props) {
  console.log(props);
  let daysList = props.data.forecastdata;
  console.log(daysList);

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }
  return (
    <div className="weather-forecast">
      <div className="upcoming-weather" id="forecast">
        {daysList.map(function (day, index) {
          if (index > 0) {
            return (
              <div className="forecast-day" key={index}>
                <strong id="day-1">{formatDay(day.time)}</strong>
                <br />
                <span id="humidity-day1"> 💧{day.temperature.humidity}% </span>
                <br />
                <span className="weather-forecast-icon">
                  <img
                    src={day.condition.icon_url}
                    alt="Weather Icon"
                    width={45}
                  />
                </span>
                <br />
                <span id="max-temp-day1">
                  {Math.round(day.temperature.maximum)}°
                </span>
                &nbsp;|
                <span id="min-temp-day1">
                  {" "}
                  {Math.round(day.temperature.minimum)}°
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
