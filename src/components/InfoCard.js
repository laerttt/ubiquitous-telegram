import React from "react";
import "../css/InfoCard.css";

const InfoCard = ({ title, children }) => {
  return (
    <div className="info-dark-card">
      <h2 className="info-dark-title">{title}</h2>
      <div className="info-dark-content">{children}</div>
    </div>
  );
};

export default InfoCard;
