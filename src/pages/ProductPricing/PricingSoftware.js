import React from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import "../../css/Pricing.css";

const PricingSoftware = () => {
  const { t } = useTranslation();

  return (
    <div className="pricing-page">
      <PricingCard title={t("pricing.software.basic.title")} price={t("pricing.software.basic.price")}>
        <ul>
          <li>{t("pricing.software.basic.features.0")}</li>
          <li>{t("pricing.software.basic.features.1")}</li>
          <li>{t("pricing.software.basic.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("pricing.software.advanced.title")} price={t("pricing.software.advanced.price")}>
        <ul>
          <li>{t("pricing.software.advanced.features.0")}</li>
          <li>{t("pricing.software.advanced.features.1")}</li>
          <li>{t("pricing.software.advanced.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("pricing.software.custom.title")} price={t("pricing.software.custom.price")}>
        <ul>
          <li>{t("pricing.software.custom.features.0")}</li>
          <li>{t("pricing.software.custom.features.1")}</li>
          <li>{t("pricing.software.custom.features.2")}</li>
        </ul>
      </PricingCard>
    </div>
  );
};

export default PricingSoftware;
