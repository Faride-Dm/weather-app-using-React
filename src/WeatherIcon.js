import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

import "./Weather.css";
import "./App.css";

export default function WeatherIcon(props) {
  const [icon, setIcon] = useState("props.weatherData.icon");

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  function showIcon(response) {
    return setIcon(response.data.weather[0].icon);
  }

  axios.get(apiUrl).then(showIcon);

  return (
    <div className="WeatherIcon">
      <ReactAnimatedWeather
        icon={setIcon(icon)}
        color="#000"
        size={48}
        animate={true}
      />
    </div>
  );
}
