import React from "react";
import "../css/InfoCard.css";

const InfoCard = ({ title, imgLink, children }) => {
  return (
    <div className="info-dark-card">
      {imgLink && (
        <img
          src={imgLink}
          alt="Info Card"
          className="info-dark-image"
          style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        />
      )}
      <h2 className="info-dark-title">{title}</h2>
      <div className="info-dark-content">{children}</div>
    </div>
  );
};

export default InfoCard;
