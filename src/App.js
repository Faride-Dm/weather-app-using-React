// import logo from "./logo.svg";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <body id="backGround">
        <div className="Weather">
          <Header />
          <WeatherSearch defaultCity={"Edinburgh"} />
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default App;
