import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

import "./App.css";

function Weather() {
  return (
    <body id="backGround">
      <div className="Weather">
        <Header />
        <Search defaultCity={"Edinburgh"} />
        <Footer />
      </div>
    </body>
  );
}

export default Weather;
