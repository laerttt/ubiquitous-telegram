import React from "react";
import "../css/Services.css";
import ServiceComponent from "../components/ServiceComponent";
import { useTranslation, Trans } from "react-i18next";
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
          <h2><Trans i18nKey="services.title" /></h2>
          <p><Trans i18nKey="services.subtitle"/></p>
        </div>
        <div className="info-page">
          <ServiceCard title={<Trans i18nKey="services.ai.title"/>} imgLink="/aivideos.png" link={`/${langPrefix}/pricing/ai`}>
            <p>
            <Trans i18nKey="services.ai.description"/>
            </p>
          </ServiceCard>
          <ServiceCard title={<Trans i18nKey="services.software.title"/>} imgLink="/softwaredev.png" link={`/${langPrefix}/pricing/webapp`}>
            <p>
            <Trans i18nKey="services.software.description"/>
            </p>
          </ServiceCard>
          <ServiceCard title={<Trans i18nKey="services.businessWebsite.title"/>} imgLink="/website.png" link={`/${langPrefix}/pricing/website`}>
            <p>
            <Trans i18nKey="services.businessWebsite.description"/>
            </p>
          </ServiceCard>
          <ServiceCard title={<Trans i18nKey="services.design.title"/>} imgLink="/grapick.png" link={`/${langPrefix}/pricing/design`}>
            <p>
            {<Trans i18nKey="services.design.description"/>}
            </p>
          </ServiceCard>
        </div>
      </div>
    </div>
  );
}

export default Services;
