import React from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import "../../css/Pricing.css";

const PricingSocialMedia = () => {
  const { t } = useTranslation();

  return (
   <div>
   <div className="pricing-page">
      {/* Pricing Cards (existing layout untouched) */}
      <PricingCard title={t("social.basic.title")} price={t("social.basic.price")}>
        <ul>
          <li>{t("social.basic.features.0")}</li>
          <li>{t("social.basic.features.1")}</li>
        </ul>
      </PricingCard>

      <PricingCard title={t("social.full.title")} price={t("social.full.price")}>
        <ul>
          <li>{t("social.full.features.0")}</li>
          <li>{t("social.full.features.1")}</li>
          <li>{t("social.full.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("social.full.title")} price={t("social.full.price")}>
        <ul>
          <li>{t("social.full.features.0")}</li>
          <li>{t("social.full.features.1")}</li>
          <li>{t("social.full.features.2")}</li>
        </ul>
      </PricingCard>
      </div>

      {/* Explanation & Video BELOW cards */}
      <div className="socialmedia-info-section">
        <h2>{t("social.details.title")}</h2>
        <p>{t("social.details.body")}</p>

        <div className="video-container">
          <video controls width="80%">
            <source src="/socialmedia-preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
   </div>   
  );
};

export default PricingSocialMedia;
