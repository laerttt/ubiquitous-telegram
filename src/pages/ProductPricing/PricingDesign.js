import React from "react";
import { Trans, useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import InfoCard from "../../components/InfoCard";
import "../../css/Pricing.css";

const PricingDesign = () => {
  const { i18n } = useTranslation();

  return (
    <div className="pricing-page-design">
      <video autoPlay loop muted id="background-video">
        <source src={`${process.env.PUBLIC_URL}/adobe.mp4`} type="video/mp4" />
      </video>
      <div className="pricing-page-container">
        <div className="title-container">
          <h1>
            <Trans i18nKey="pricing.graphicDesign.hero" />
          </h1>
          <p>
            <Trans i18nKey="pricing.graphicDesign.subtitle" />
          </p>
        </div>

        <div className="description-container">
          <p>
            <Trans i18nKey="pricing.graphicDesign.description" />
          </p>
        </div>

        <div className="info-page">
          <InfoCard title={<Trans i18nKey="pricing.graphicDesign.whyus" />}>
            <ul>
              <li>
                <Trans i18nKey="pricing.graphicDesign.reasons.0" />
              </li>
              <li>
                <Trans i18nKey="pricing.graphicDesign.reasons.1" />
              </li>
              <li>
                <Trans i18nKey="pricing.graphicDesign.reasons.2" />
              </li>
            </ul>
          </InfoCard>

          <InfoCard
            title={<Trans i18nKey="pricing.graphicDesign.ourprocess" />}
          >
            <ul>
              <li>
                <Trans i18nKey="pricing.graphicDesign.step.0" />
              </li>
              <li>
                <Trans i18nKey="pricing.graphicDesign.step.1" />
              </li>
              <li>
                <Trans i18nKey="pricing.graphicDesign.step.2" />
              </li>
            </ul>
          </InfoCard>
        </div>

        <div className="pricing-page">
          <PricingCard
            title={<Trans i18nKey="pricing.graphicDesign.basic.title" />}
            price={<Trans i18nKey="pricing.graphicDesign.basic.price" />}
          >
            <ul>
              <li>
                <Trans i18nKey="pricing.graphicDesign.basic.features.0" />
              </li>
              <li>
                <Trans i18nKey="pricing.graphicDesign.basic.features.1" />
              </li>
              <li>
                <Trans i18nKey="pricing.graphicDesign.basic.features.2" />
              </li>
            </ul>
          </PricingCard>

          <PricingCard
            title={<Trans i18nKey="pricing.graphicDesign.pro.title" />}
            price={<Trans i18nKey="pricing.graphicDesign.pro.price" />}
          >
            <ul>
              <li>
                <Trans i18nKey="pricing.graphicDesign.pro.features.0" />
              </li>
              <li>
                <Trans i18nKey="pricing.graphicDesign.pro.features.1" />
              </li>
              <li>
                <Trans i18nKey="pricing.graphicDesign.pro.features.2" />
              </li>
            </ul>
          </PricingCard>

          <PricingCard
            title={<Trans i18nKey="pricing.graphicDesign.enterprise.title" />}
            price={<Trans i18nKey="pricing.graphicDesign.enterprise.price" />}
          >
            <ul>
              <li>
                <Trans i18nKey="pricing.graphicDesign.enterprise.features.0" />
              </li>
              <li>
                <Trans i18nKey="pricing.graphicDesign.enterprise.features.1" />
              </li>
              <li>
                <Trans i18nKey="pricing.graphicDesign.enterprise.features.2" />
              </li>
            </ul>
          </PricingCard>
        </div>

        <div className="title-container">
          <h2>
            <Trans i18nKey="pricing.graphicDesign.outrotitle" />
          </h2>
          <p>
            <Trans i18nKey="pricing.graphicDesign.outrosubtitle" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingDesign;
