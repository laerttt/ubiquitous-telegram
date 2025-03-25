import React from 'react';
import '../css/PricingCard.css';

const PricingCard = ({ title, price, children }) => {
  return (
    <div className="pricing-dark-card">
      <h2 className="pricing-dark-title">{title}</h2>
      <div className="pricing-dark-content">
        {children}
      </div>
      <div className="pricing-dark-price">
        {price}
      </div>
    </div>
  );
};

export default PricingCard;
