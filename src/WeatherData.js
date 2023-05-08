import React from "react";

import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";
import TemperatureUnits from "./TemperatureUnits";

import "./App.css";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="logo">
        <img className="logo" src="/images/logo.png" alt="logo" />
      </div>
      <div className="ontime-city-temperature">
        <div className="row">
          <div className="col-8 current-temp">
            <div className="clearfix">
              <span className="float-left">
                <WeatherIcon code={props.data.icon} size={48} />
              </span>

              <span className="float-left">
                <TemperatureUnits celsius={props.data.temperature} />
              </span>
            </div>
          </div>
          <div className="col-4 city">
            <div className="selectedCity">{props.data.city}</div>
            <ul>
              <li>
                <span class="showDate" id="date">
                  <FormatDate date={props.data.date} />
                </span>
              </li>
              <li>
                <span className="showHumidity">
                  {" "}
                  <br />
                  Humidity: {props.data.humidity}%{" "}
                </span>
              </li>
              <li>
                <span className="showWind"> Wind: {props.data.wind} Km/H </span>
              </li>
              <li>
                <span className="feelingTemperature">
                  It feels like {Math.round(props.data.feeling)}°C{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
