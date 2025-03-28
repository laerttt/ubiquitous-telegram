import React from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import "../../css/Pricing.css";

const PricingCRM = () => {
  const { t } = useTranslation();

  return (
    <div className="pricing-page">
      <PricingCard title={t("pricing.crm.starter.title")} price={t("pricing.crm.starter.price")}>
        <ul>
          <li>{t("pricing.crm.starter.features.0")}</li>
          <li>{t("pricing.crm.starter.features.1")}</li>
          <li>{t("pricing.crm.starter.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("pricing.crm.pro.title")} price={t("pricing.crm.pro.price")}>
        <ul>
          <li>{t("pricing.crm.pro.features.0")}</li>
          <li>{t("pricing.crm.pro.features.1")}</li>
          <li>{t("pricing.crm.pro.features.2")}</li>
        </ul>
      </PricingCard>
    </div>
  );
};

export default PricingCRM;
