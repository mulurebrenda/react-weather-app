import React from "react";
import "./Aside.css";
import "./App.css";

export default function FormattedDate(props) {
    
  /*  let hours = props.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let [time, setTime] = useState();
    setTime(`${hours}:${minutes}`);

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
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    let year = props.date.getFullYear();
    let [fullDate, setFullDate] = useState();
    setFullDate(`${month} ${date}, ${year}`);*/

  return (
    <div>
          <div className="col-2 time" id="time"></div>
          <div className="col-4 text-end m-auto" id="date"></div>
    </div>
  );
}
