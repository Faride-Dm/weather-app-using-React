import React from "react";
import "./Header.css";

function Header() {
  const checkbox = document.getElementById("checkbox");

  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });

  return (
    <div className="d-flex Header">
      <img className="logo" src="/images/logo-shecodes.png" alt="logo" />
      <input
        type="checkbox"
        className="checkbox darkModeToggle"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </div>
  );
}

export default Header;
