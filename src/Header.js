import React from "react";
import "./Header.css";

function Header() {
  <div className="d-flex Header">
    <img className="logo" src="/images/logo-shecodes.png" alt="logo" />
    <input type="checkbox" className="checkbox darkModeToggle" />
    <label htmlFor="checkbox" className="label">
      <i className="fas fa-moon"></i>
      <i className="fas fa-sun"></i>
      <div className="ball"></div>
    </label>
  </div>;
}

export default Header;
