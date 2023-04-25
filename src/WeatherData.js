import React, { useState } from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";

import "./App.css";
import "./WeatherData.css";

export default function WeatherData(props) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);

  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState("props.weatherData.city");
  const [humidity, setHumidity] = useState("props.weatherData.humidity");
  const [wind, setWind] = useState("props.weatherData.wind");
  const [feeling, setFeeling] = useState("props.weatherData.feeling");

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setCity(response.data.name);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setFeeling(Math.round(response.data.main.feels_like));
  }

  return (
    <div className="WeatherData">
      <div className="ontime-city-temperature">
        <div className="row">
          <div className="col-8 current-temp">
            <WeatherIcon />
            <br />
            <span className="currentTemp">{temperature}</span>
            <span className="units">
              <a href="/" class="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
          </div>
          <div className="col-4 city">
            <div className="selectedCity">{city}</div>
            <ul>
              <li>
                <span className="showHumidity">
                  {" "}
                  <br /> <br />
                  Humidity: {humidity}%,{" "}
                </span>
                <span className="showWind"> Wind: {wind} </span>
              </li>
              <li>
                <span className="feelingTemperature">
                  <br />
                  It feels like {feeling}{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
