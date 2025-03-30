import React from "react";
import { Link } from "react-router-dom";
import "../css/ServiceCard.css";

const ServiceCard = ({ title, imgLink, link, children }) => {
  return (
    <div className="service-card">
      {imgLink && (
        <img src={imgLink} alt="Info Card" className="service-card-image" />
      )}
      <div>
      <h2 className="service-card-title">{title}</h2>
      <div className="service-card-description">{children}</div>
      </div>
      {link && (
        <Link to={link} className="custom-button">
          <span>Learn more</span>
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
