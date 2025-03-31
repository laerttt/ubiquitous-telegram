import React from "react";
import { Trans } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import InfoCard from "../../components/InfoCard";
import "../../css/Pricing.css";

const PricingWebsite = () => {
  return (
    <div className="pricing-page-website">
      <video autoPlay loop muted playsInline webkit-playsinline id="background-video">
        <source
          src={`${process.env.PUBLIC_URL}/phonebrowsing.mp4`}
          type="video/mp4"
        />
      </video>

      <div className="pricing-page-container">
        <div className="title-container">
          <h1>
            <Trans i18nKey="pricing.website.hero" />
          </h1>
          <p>
            <Trans i18nKey="pricing.website.subtitle" />
          </p>
        </div>
        <div className="info-page">
          <InfoCard title={<Trans i18nKey="pricing.website.whyus" />}>
            <ul>
              <li>
                <Trans i18nKey="pricing.website.reasons.0" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.reasons.1" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.reasons.2" />
              </li>
            </ul>
          </InfoCard>

          <InfoCard title={<Trans i18nKey="pricing.website.ourprocess" />}>
            <ul>
              <li>
                <Trans i18nKey="pricing.website.step.0" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.step.1" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.step.2" />
              </li>
            </ul>
          </InfoCard>
        </div>

        <div className="pricing-page">
          <PricingCard
            title={<Trans i18nKey="pricing.website.basic.title" />}
            price={<Trans i18nKey="pricing.website.basic.price" />}
          >
            <ul>
              <li>
                <Trans i18nKey="pricing.website.basic.features.0" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.basic.features.1" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.basic.features.2" />
              </li>
            </ul>
          </PricingCard>

          <PricingCard
            title={<Trans i18nKey="pricing.website.pro.title" />}
            price={<Trans i18nKey="pricing.website.pro.price" />}
          >
            <ul>
              <li>
                <Trans i18nKey="pricing.website.pro.features.0" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.pro.features.1" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.pro.features.2" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.pro.features.3" />
              </li>
            </ul>
          </PricingCard>

          <PricingCard
            title={<Trans i18nKey="pricing.website.enterprise.title" />}
            price={<Trans i18nKey="pricing.website.enterprise.price" />}
          >
            <ul>
              <li>
                <Trans i18nKey="pricing.website.enterprise.features.0" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.enterprise.features.1" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.enterprise.features.3" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.enterprise.features.4" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.enterprise.features.5" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.enterprise.features.6" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.enterprise.features.7" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.enterprise.features.8" />
              </li>
              <li>
                <Trans i18nKey="pricing.website.enterprise.features.9" />
              </li>
            </ul>
          </PricingCard>
        </div>

        <div className="title-container">
          <h2>
            <Trans i18nKey="pricing.website.outrotitle" />
          </h2>
          <p>
            <Trans i18nKey="pricing.website.outrosubtitle" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingWebsite;
