// import logo from "./logo.svg";
import React from "react";

// import Header from "./Header";
import Footer from "./Footer";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="backGround" id="backGround">
      <div className="App">
        <div className="Weather">
          {/* <Header /> */}
          <WeatherSearch defaultCity={"Edinburgh"} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
