import React from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import "../../css/Pricing.css";

const PricingWebsite = () => {
  const { t } = useTranslation();

  return (
    <div className="pricing-page">
      <PricingCard title={t("pricing.website.basic.title")} price={t("pricing.website.basic.price")}>
        <ul>
          <li>{t("pricing.website.basic.features.0")}</li>
          <li>{t("pricing.website.basic.features.1")}</li>
          <li>{t("pricing.website.basic.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("pricing.website.pro.title")} price={t("pricing.website.pro.price")}>
        <ul>
          <li>{t("pricing.website.pro.features.0")}</li>
          <li>{t("pricing.website.pro.features.1")}</li>
          <li>{t("pricing.website.pro.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("pricing.website.enterprise.title")} price={t("pricing.website.enterprise.price")}>
        <ul>
          <li>{t("pricing.website.enterprise.features.0")}</li>
          <li>{t("pricing.website.enterprise.features.1")}</li>
          <li>{t("pricing.website.enterprise.features.2")}</li>
        </ul>
      </PricingCard>
    </div>
  );
};

export default PricingWebsite;
