import React from "react";
import "./Github.css";

export default function Github() {
  return (
    <div className="Github">
      <p id="github-link">
        This project was coded by&nbsp;
        <a
          href="https://frontend-developer-portfolio-mulure.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Brenda Mulure
        </a>
        &nbsp;and is&nbsp;
        <a
          href="https://github.com/mulurebrenda/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </p>
    </div>
  );
}
