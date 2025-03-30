import React from "react";
import { useTranslation, Trans } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import InfoCard from "../../components/InfoCard";
import "../../css/Pricing.css";

const PricingWebApp = () => {
  const { i18n } = useTranslation(); // 👈 ensures proper reactivity on language change

  return (
    <div className="pricing-page-webapp">
      <video autoPlay loop muted id="background-video">
        <source src={`${process.env.PUBLIC_URL}/laptopbg2.mp4`} type="video/mp4" />
      </video>

      <div className="pricing-page-container">
        <div className="title-container">
          <h1><Trans i18nKey="pricing.webapp.hero" /></h1>
          <p><Trans i18nKey="pricing.webapp.subtitle" /></p>
        </div>

        <div className="description-container">
          <p><Trans i18nKey="pricing.webapp.description" /></p>
        </div>

        <div className="info-page">
          <InfoCard title={<Trans i18nKey="pricing.webapp.whyus" />}>
            <ul>
              <li><Trans i18nKey="pricing.webapp.reasons.0" /></li>
              <li><Trans i18nKey="pricing.webapp.reasons.1" /></li>
              <li><Trans i18nKey="pricing.webapp.reasons.2" /></li>
              <li><Trans i18nKey="pricing.webapp.reasons.3" /></li>
            </ul>
          </InfoCard>

          <InfoCard title={<Trans i18nKey="pricing.webapp.ourprocess" />}>
            <ul>
              <li><Trans i18nKey="pricing.webapp.step.0" /></li>
              <li><Trans i18nKey="pricing.webapp.step.1" /></li>
              <li><Trans i18nKey="pricing.webapp.step.2" /></li>
            </ul>
          </InfoCard>
        </div>

        <div className="pricing-page">
          <PricingCard
            title={<Trans i18nKey="pricing.webapp.basic.title" />}
            price={<Trans i18nKey="pricing.webapp.basic.price" />}
          >
            <ul>
              <li><Trans i18nKey="pricing.webapp.basic.features.0" /></li>
              <li><Trans i18nKey="pricing.webapp.basic.features.1" /></li>
              <li><Trans i18nKey="pricing.webapp.basic.features.2" /></li>
            </ul>
          </PricingCard>

          <PricingCard
            title={<Trans i18nKey="pricing.webapp.advanced.title" />}
            price={<Trans i18nKey="pricing.webapp.advanced.price" />}
          >
            <ul>
              <li><Trans i18nKey="pricing.webapp.advanced.features.0" /></li>
              <li><Trans i18nKey="pricing.webapp.advanced.features.1" /></li>
              <li><Trans i18nKey="pricing.webapp.advanced.features.2" /></li>
            </ul>
          </PricingCard>

          <PricingCard
            title={<Trans i18nKey="pricing.webapp.custom.title" />}
            price={<Trans i18nKey="pricing.webapp.custom.price" />}
          >
            <ul>
              <li><Trans i18nKey="pricing.webapp.custom.features.0" /></li>
              <li><Trans i18nKey="pricing.webapp.custom.features.1" /></li>
              <li><Trans i18nKey="pricing.webapp.custom.features.2" /></li>
            </ul>
          </PricingCard>
        </div>

        <div className="title-container">
          <h2><Trans i18nKey="pricing.webapp.outrotitle" /></h2>
          <p><Trans i18nKey="pricing.webapp.outrosubtitle" /></p>
        </div>
      </div>
    </div>
  );
};

export default PricingWebApp;
