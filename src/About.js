import React from "react";
import "./css/About.css";

function About() {
  const language = "react";
  const name = "project-x";
  const gitLink = "https://github.com/your-repo"; // Replace with real link

  return (
    <div className="about-container">
      <div className="container">
        <div className="terminal_toolbar">
          <div className="butt">
            <button className="btn btn-color"></button>
            <button className="btn"></button>
            <button className="btn"></button>
          </div>
          <p className="user">{language}@{name}: ~</p>
          <a
            href={gitLink}
            className="clickable-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository Link
          </a>
          <div className="add_tab">+</div>
        </div>

        <div className="terminal_body center-output">
          <div className="terminal_prompt">
            <span className="terminal_user">{language}@{name}:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <span className="terminal_text">cat about.txt</span>
          </div>

          <div className="terminal_output">
            <p>Welcome to the Project-X CLI.</p>
            <p>This project is built with React, using modern design principles and effects.</p>
            <p>Enjoy a smooth, elegant, and powerful web experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
