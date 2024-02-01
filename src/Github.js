import React from "react";
import "./Github.css";

export default function Github() {
  return (
    <div className="Github">
      <p id="github-link">
        <a
          href="https://github.com/mulurebrenda/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        &nbsp;by Brenda Mulure&nbsp;
        <a
          href="https://app.netlify.com/sites/react-weather-app-bm/configuration/general"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
