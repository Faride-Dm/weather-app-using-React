import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day mt-3">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max mb-3">
          {maxTemperature()}°
        </span>
        <span className="WeatherForecast-temperature-min mb-3">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}

export default WeatherForecastDay;
