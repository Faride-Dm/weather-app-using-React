import React from "react";

function Footer() {
  return (
    <p className="footer">
      This project is coded by <strong>Faride Danesh</strong> and is
      <a
        className="githubLink"
        href="https://github.com/Faride-Dm/Weather-app-using-React"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>
      and hosted on
      <a
        className="netlifyLink"
        href="https://app.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
    </p>
  );
}

export default Footer;
