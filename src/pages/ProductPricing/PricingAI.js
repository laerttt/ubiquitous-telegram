import React from "react";
import { Trans , useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import InfoCard from "../../components/InfoCard";
import "../../css/Pricing.css";

const PricingAI = () => {
  const { i18n } = useTranslation(); // 👈 ensures proper reactivity on language change
  return (
    <div className="pricing-page-ai">
      <video autoPlay loop muted id="background-video">
        <source src="/filming.mp4" type="video/mp4" />
      </video>
      <div className="pricing-page-container">
        <div className="title-container">
          <h1><Trans i18nKey="pricing.ai.hero" /></h1>
          <p><Trans i18nKey="pricing.ai.subtitle" /></p>
        </div>

        <div className="description-container">
          <p><Trans i18nKey="pricing.ai.description" /></p>
        </div>

        <div className="info-page">
          <InfoCard title={<Trans i18nKey="pricing.ai.whyus" />}>
            <ul>
              <li><Trans i18nKey="pricing.ai.reasons.0" /></li>
              <li><Trans i18nKey="pricing.ai.reasons.1" /></li>
              <li><Trans i18nKey="pricing.ai.reasons.2" /></li>
            </ul>
          </InfoCard>

          <InfoCard title={<Trans i18nKey="pricing.ai.ourprocess" />}>
            <ul>
              <li><Trans i18nKey="pricing.ai.step.0" /></li>
              <li><Trans i18nKey="pricing.ai.step.1" /></li>
              <li><Trans i18nKey="pricing.ai.step.2" /></li>
            </ul>
          </InfoCard>
        </div>

        <div className="pricing-page">
          <PricingCard
            title={<Trans i18nKey="pricing.ai.starter.title" />}
            price={<Trans i18nKey="pricing.ai.starter.price" />}
          >
            <ul>
              <li><Trans i18nKey="pricing.ai.starter.features.0" /></li>
              <li><Trans i18nKey="pricing.ai.starter.features.1" /></li>
              <li><Trans i18nKey="pricing.ai.starter.features.2" /></li>
            </ul>
          </PricingCard>

          <PricingCard
            title={<Trans i18nKey="pricing.ai.pro.title" />}
            price={<Trans i18nKey="pricing.ai.pro.price" />}
          >
            <ul>
              <li><Trans i18nKey="pricing.ai.pro.features.0" /></li>
              <li><Trans i18nKey="pricing.ai.pro.features.1" /></li>
              <li><Trans i18nKey="pricing.ai.pro.features.2" /></li>
            </ul>
          </PricingCard>

          <PricingCard
            title={<Trans i18nKey="pricing.ai.custom.title" />}
            price={<Trans i18nKey="pricing.ai.custom.price" />}
          >
            <ul>
              <li><Trans i18nKey="pricing.ai.custom.features.0" /></li>
              <li><Trans i18nKey="pricing.ai.custom.features.1" /></li>
              <li><Trans i18nKey="pricing.ai.custom.features.2" /></li>
            </ul>
          </PricingCard>
        </div>

        <div className="title-container">
          <h2><Trans i18nKey="pricing.ai.outrotitle" /></h2>
          <p>
          <Trans i18nKey="pricing.ai.outrosubtitle" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingAI;
