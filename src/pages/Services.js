import React from "react";
import "../css/Services.css";
import ServiceComponent from "../components/ServiceComponent";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

function Services() {
  const { t } = useTranslation();
  const location = useLocation();
  const langPrefix = location.pathname.split("/")[1]; // "en" or "al"

  return (
    <div className="services-container">
      <video autoPlay loop muted id="background-video">
        <source src="/servid1.mp4" type="video/mp4" />
      </video>
      <div className="services-content"> 
        <div className="service-intro">
          <h2>{t(" Smart Services, Real Results")}</h2>
          <p>{t("Everything You Need to Elevate Your Digital Presence")}</p>
        </div>
        <div className="info-page">
          <ServiceCard title="AI Video Ads" imgLink="/971.jpg" link={`/${langPrefix}/pricing/ai`}>
            <p>
              Aute pariatur magna ea adipisicing non ipsum. Ea veniam enim
              pariatur.
            </p>
          </ServiceCard>
          <ServiceCard title="WebApps" imgLink="/971.jpg" link={`/${langPrefix}/pricing/webapp`}>
            <p>
              Aute pariatur magna ea adipisicing non ipsum. Ea veniam enim
              pariatur.
            </p>
          </ServiceCard>
          <ServiceCard title="Websites" imgLink="/971.jpg" link={`/${langPrefix}/pricing/website`}>
            <p>
              Aute pariatur magna ea adipisicing non ipsum. Ea veniam enim
              pariatur.
            </p>
          </ServiceCard>
          <ServiceCard title="AI Video Ads" imgLink="/971.jpg">
            <p>
              Aute pariatur magna ea adipisicing non ipsum. Ea veniam enim
              pariatur.
            </p>
          </ServiceCard>
        </div>
      </div>
    </div>
  );
}

export default Services;
