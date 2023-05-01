import React from "react";

// import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";

import "./App.css";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="ontime-city-temperature">
        <div className="row">
          <div className="col-8 current-temp">
            {/* <WeatherIcon /> */}
            <br />
            <span className="currentTemp">{props.data.temperature}</span>
            <span className="units">
              <a href="/" class="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
          </div>
          <div className="col-4 city">
            <div className="selectedCity">{props.weatherData.city}</div>
            <ul>
              <li>
                <span class="showDate" id="date">
                  <FormatDate date={props.weatherData.date} />
                </span>
              </li>
              <li>
                <span className="showHumidity">
                  {" "}
                  <br /> <br />
                  Humidity: {props.data.humidity}%,{" "}
                </span>
                <span className="showWind"> Wind: {props.data.wind} </span>
              </li>
              <li>
                <span className="feelingTemperature">
                  <br />
                  It feels like {props.data.feeling}{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
