import React from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard";
import InfoCard from "../../components/InfoCard";
import "../../css/Pricing.css";

const PricingAI = () => {
  const { t } = useTranslation();

  return (
    <div>
      <video autoPlay loop muted id="background-video">
        <source src="/aiinfo.mp4" type="video/mp4" />
      </video>
      <div className="pricing-page-container">
        <div className="title-container">
          <h1>Boost Your Brand with High-Impact AI-Driven Video Ads</h1>
          <p>
            Leverage the Power of Artificial Intelligence to Create Engaging,
            Personalized Video Ads That Drive Conversions
          </p>
        </div>
        <div className="description-container">
          <p>
            In a digital-first world, video ads are one of the most powerful
            ways to capture attention and engage your audience. But what if you
            could take it a step further? With our AI Video Ad services, we
            create smart, dynamic video advertisements tailored specifically to
            your target audience. Powered by cutting-edge artificial
            intelligence, our video ads optimize content, ensure relevance, and
            drive higher engagement rates. Whether you’re looking to promote a
            new product, boost brand awareness, or increase conversions, our
            AI-driven video ads offer a cost-effective solution to supercharge
            your marketing efforts.
          </p>
        </div>
        <div className="info-page">
          <InfoCard title={t("Why Choose Us")}>
            <ul>
              <li>
                {t("AI-Powered Innovation:")}
                <br />{" "}
                {t(
                  " We leverage the latest in AI technology to deliver next-level video ads that are highly personalized and optimized for performance."
                )}
              </li>
              <br />
              <li>
                {t("Custom-Tailored Ads:")}
                <br />{" "}
                {t(
                  "We don’t just use generic templates—we create unique, branded video ads that speak to your audience’s interests, needs, and preferences."
                )}
              </li>
              <br />
              <li>
                {t("Speed & Efficiency:")}
                <br />{" "}
                {t(
                  " With AI-driven automation, we create high-quality video ads quickly, allowing you to launch campaigns faster and reach your audience at the right moment."
                )}
              </li>
            </ul>
          </InfoCard>
          <InfoCard title={t("Our Process")}>
            <ul>
              <li>
                {t(
                  "Consultation & Campaign Strategy:We begin with a detailed consultation to understand your goals, target audience, and key messaging. Our team will work with you to develop a tailored video ad strategy based on your objectives."
                )}
              </li>
              <br />

              <li>
                {t(
                  "AI Video Creation & Personalization:Using AI-powered tools, we create multiple personalized video ads for your campaign. These videos are automatically optimized based on your audience's preferences and behavior, ensuring maximum engagement."
                )}
              </li>
              <br />

              <li>
                {t(
                  "Launch, Monitor & Optimize:Once the video ads are live, our AI platform continuously monitors their performance and adjusts key elements in real-time for optimal results. You’ll receive regular performance updates and insights, ensuring the campaign stays on track for success."
                )}
              </li>
              <br />
            </ul>
          </InfoCard>
        </div>
        <div className="pricing-page">
          <PricingCard
            title={t("pricing.ai.starter.title")}
            price={t("pricing.ai.starter.price")}
          >
            <ul>
              <li>{t("pricing.ai.starter.features.0")}</li>
              <li>{t("pricing.ai.starter.features.1")}</li>
              <li>{t("pricing.ai.starter.features.2")}</li>
            </ul>
          </PricingCard>
          <PricingCard
            title={t("pricing.ai.pro.title")}
            price={t("pricing.ai.pro.price")}
          >
            <ul>
              <li>{t("pricing.ai.pro.features.0")}</li>
              <li>{t("pricing.ai.pro.features.1")}</li>
              <li>{t("pricing.ai.pro.features.2")}</li>
            </ul>
          </PricingCard>
          <PricingCard
            title={t("pricing.ai.custom.title")}
            price={t("pricing.ai.custom.price")}
          >
            <ul>
              <li>{t("pricing.ai.custom.features.0")}</li>
              <li>{t("pricing.ai.custom.features.1")}</li>
              <li>{t("pricing.ai.custom.features.2")}</li>
            </ul>
          </PricingCard>
        </div>
        <div className="title-container">
          <h2>Ready to Elevate Your Marketing Game?</h2>
          <p>
            Our AI Video Ads are the perfect way to take your marketing to the
            next level by creating personalized, optimized, and engaging content
            that drives results. Whether you're looking to increase brand
            awareness, generate leads, or boost sales, AI-driven video ads can
            help you achieve your goals faster and more efficiently. Let us help
            you create video ads that stand out in a crowded digital landscape
            and deliver the ROI you need. Ready to get started? Let’s create
            something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingAI;
