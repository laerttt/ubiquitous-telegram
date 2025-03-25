import React from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import "../../css/Pricing.css";

const PricingChatbots = () => {
  const { t } = useTranslation();

  return (
    <div className="pricing-page">
      <PricingCard title={t("pricing.chatbots.basic.title")} price={t("pricing.chatbots.basic.price")}>
        <ul>
          <li>{t("pricing.chatbots.basic.features.0")}</li>
          <li>{t("pricing.chatbots.basic.features.1")}</li>
          <li>{t("pricing.chatbots.basic.features.2")}</li>
        </ul>
      </PricingCard>
      <PricingCard title={t("pricing.chatbots.advanced.title")} price={t("pricing.chatbots.advanced.price")}>
        <ul>
          <li>{t("pricing.chatbots.advanced.features.0")}</li>
          <li>{t("pricing.chatbots.advanced.features.1")}</li>
          <li>{t("pricing.chatbots.advanced.features.2")}</li>
        </ul>
      </PricingCard>
    </div>
  );
};

export default PricingChatbots;
