import "./css/Home.css";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate("/services"); // Redirect to /services
  };
  return (
    <div className="home">
      <video autoPlay loop muted id="background-video">
        <source src="/output.mp4" type="video/mp4" />
      </video>
      <div className="h2-container">
        <h2 className="welcome-message">
          Your Partner in Innovation and Digital Excellence
        </h2>
        <p>Let us handle the tech so you can focus on growing your business.</p>
        <button onClick={handleButtonClick}><span>Our Services</span></button>
      </div> 
    </div>
  );
};

export default Home;
