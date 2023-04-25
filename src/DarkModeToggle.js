import React from "react";

function DarkModeToggle() {
  <div className="d-flex darkModeToggle">
    <img className="logo" src="/images/logo-shecodes.png" alt="logo" />
    <input type="checkbox" className="checkbox" />
    <label htmlFor="checkbox" className="label">
      <i className="fas fa-moon"></i>
      <i className="fas fa-sun"></i>
      <div className="ball"></div>
    </label>
  </div>;
}

export default DarkModeToggle;
