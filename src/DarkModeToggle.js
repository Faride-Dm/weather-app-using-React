import { Button, Container, InputGroup } from "reactstrap";
import { ThemeContext, themes } from "./ThemeContext";
import React from "react";

import "./App.css";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="DarkModeToggle">
      <header className="App-header">
        {/* <p className="text-warning">Dark/Light mode</p> */}
        <InputGroup>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
                {/* <span className="d-lg-none d-md-block">Switch mode</span> */}
              </Button>
            )}
          </ThemeContext.Consumer>
        </InputGroup>{" "}
      </header>
    </div>
  );
}
export default DarkModeToggle;
