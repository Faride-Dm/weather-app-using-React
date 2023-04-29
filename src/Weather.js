import React from "react";
import WeatherData from "./WeatherData";
import Footer from "./Footer";
import Search from "./Search";

import "./App.css";

function Weather() {
  return (
    <body id="backGround">
      <div className="Weather">
        <Search defaultCity={"Edinburgh"} />
        <Footer />
      </div>
    </body>
  );
}

export default Weather;
