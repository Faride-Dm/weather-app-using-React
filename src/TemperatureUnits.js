import React, { useState } from "react";

import "./App.css";
import "./TemperatureUnits.css";

function TemperatureUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <span className="TemperatureUnits">
        <span className="currentTemp">{Math.round(props.celsius)}</span>
        <span className="units">
          <strong>°C</strong> |{" "}
          <a href="/" className="fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="TemperatureUnits">
        <span className="currentTemp">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" className="celsius-link" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}

export default TemperatureUnits;
