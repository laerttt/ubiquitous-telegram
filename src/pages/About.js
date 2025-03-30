import React from "react";
import "../css/About.css";

function About() {
  const language = "debugger";
  const name = "project-x";
  const gitLink = "https://github.com/your-repo"; // Replace with real link
  const description = "Welcome to the About section of our web app.";
  const extraDescription = "We're using cool modern tech and effects!";

  return (
    <div className="about-container">
      <video autoPlay loop muted id="contact-bg">
        <source src={`${process.env.PUBLIC_URL}/homevid1.mp4`} type="video/mp4" />
      </video>
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

        <div className="terminal_body">
          <div className="terminal_prompt">
            <span className="terminal_user">{language}@{name}:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <span className="terminal_text">{description}</span>
          </div>

          {extraDescription && (
            <div className="terminal_prompt">
              <span className="terminal_user">{language}@{name}:</span>
              <span className="terminal_location">~</span>
              <span className="terminal_bling">$</span>
              <span className="terminal_text">{extraDescription}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
