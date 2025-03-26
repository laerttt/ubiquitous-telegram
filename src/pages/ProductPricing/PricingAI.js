import React from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import "../../css/Pricing.css";

const PricingAI = () => {
  const { t } = useTranslation();

  return (
    <div className="pricing-page">
      <PricingCard title={t("pricing.ai.starter.title")} price={t("pricing.ai.starter.price")}>
        <ul>
          <li>{t("pricing.ai.starter.features.0")}</li>
          <li>{t("pricing.ai.starter.features.1")}</li>
          <li>{t("pricing.ai.starter.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("pricing.ai.pro.title")} price={t("pricing.ai.pro.price")}>
        <ul>
          <li>{t("pricing.ai.pro.features.0")}</li>
          <li>{t("pricing.ai.pro.features.1")}</li>
          <li>{t("pricing.ai.pro.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("pricing.ai.custom.title")} price={t("pricing.ai.custom.price")}>
        <ul>
          <li>{t("pricing.ai.custom.features.0")}</li>
          <li>{t("pricing.ai.custom.features.1")}</li>
          <li>{t("pricing.ai.custom.features.2")}</li>
        </ul>
      </PricingCard>
    </div>
  );
};

export default PricingAI;
