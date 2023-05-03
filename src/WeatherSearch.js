import React, { useState } from "react";
import axios from "axios";

import "./App.css";
import "./WeatherSearch.css";
import WeatherData from "./WeatherData";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <WeatherData data={weatherData} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control search-input"
                id="input-city"
                autoFocus="on"
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                id="submit-btn"
                value="search"
                className="btn w-100"
              />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
