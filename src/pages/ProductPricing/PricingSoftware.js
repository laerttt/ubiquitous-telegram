import React from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import "../../css/Pricing.css";

const PricingSoftware = () => {
  const { t } = useTranslation();

  return (
    <div className="pricing-page">
      <PricingCard title={t("software.basic.title")} price={t("software.basic.price")}>
        <ul>
          <li>{t("software.basic.features.0")}</li>
          <li>{t("software.basic.features.1")}</li>
          <li>{t("software.basic.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("software.advanced.title")} price={t("software.advanced.price")}>
        <ul>
          <li>{t("software.advanced.features.0")}</li>
          <li>{t("software.advanced.features.1")}</li>
          <li>{t("software.advanced.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("software.custom.title")} price={t("software.custom.price")}>
        <ul>
          <li>{t("software.custom.features.0")}</li>
          <li>{t("software.custom.features.1")}</li>
          <li>{t("software.custom.features.2")}</li>
        </ul>
      </PricingCard>
    </div>
  );
};

export default PricingSoftware;
