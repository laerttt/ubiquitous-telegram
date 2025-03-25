import React from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import "../../css/Pricing.css";

const PricingAI = () => {
  const { t } = useTranslation();

  return (
    <div className="pricing-page">
      <PricingCard title={t("ai.starter.title")} price={t("ai.starter.price")}>
        <ul>
          <li>{t("ai.starter.features.0")}</li>
          <li>{t("ai.starter.features.1")}</li>
          <li>{t("ai.starter.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("ai.pro.title")} price={t("ai.pro.price")}>
        <ul>
          <li>{t("ai.pro.features.0")}</li>
          <li>{t("ai.pro.features.1")}</li>
          <li>{t("ai.pro.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("ai.custom.title")} price={t("ai.custom.price")}>
        <ul>
          <li>{t("ai.custom.features.0")}</li>
          <li>{t("ai.custom.features.1")}</li>
          <li>{t("ai.custom.features.2")}</li>
        </ul>
      </PricingCard>
    </div>
  );
};

export default PricingAI;
