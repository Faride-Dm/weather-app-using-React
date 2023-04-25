import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Footer from "./Footer";

import "./App.css";

function Weather() {
  let weatherData = {
    temperature: 10,
    city: "Edinburgh ",
    time: "Thursday 16:00",
    date: "Apr 14 2023",
    humidity: "80",
    wind: "4 Km/H ",
    feeling: "8°C",
    imgUrl:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/077/036/original/weather.png?1681484751",
  };

  return (
    <div className="Weather">
      <DarkModeToggle />
      <div className="ontime-city-temperature">
        <div className="row">
          <div className="col-8 current-temp">
            <img
              className="currentWeatherIcon"
              alt="current Weather Icon"
              src={weatherData.imgUrl}
            />
            <br />
            <span className="currentTemp">{weatherData.temperature}</span>
            <span className="units">
              <a href="/" class="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
          </div>
          <div className="col-4 city">
            <div className="selectedCity">{weatherData.city}</div>
            <ul>
              <li>
                <span className="showDate">
                  {weatherData.time} <br /> {weatherData.date}{" "}
                </span>
              </li>
              <li>
                <span className="showHumidity">
                  {" "}
                  <br /> <br />
                  Humidity: {weatherData.humidity}%,{" "}
                </span>
                <span className="showWind"> Wind: {weatherData.wind} </span>
              </li>
              <li>
                <span className="feelingTemperature">
                  <br />
                  It feels like {weatherData.feeling}{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Weather;
