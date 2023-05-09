import React, { useState } from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">{forecast[0].dt}</div>
          <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">
              {forecast[0].temp.max}°
            </span>
            <span className="WeatherForecast-temperature-min">
              {forecast[0].temp.min}°
            </span>
          </div>
        </div>
      </div>
    </div>;
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

export default WeatherForecast;
