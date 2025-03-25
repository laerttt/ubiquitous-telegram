import React from "react";
import "../css/Services.css";
import ServiceComponent from "../components/ServiceComponent";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function Services() {
  const { t } = useTranslation();
  const location = useLocation();
  const langPrefix = location.pathname.split("/")[1]; // "en" or "al"

  return (
    <div className="services-container">
      <video autoPlay loop muted id="background-video">
        <source src="/servid.mp4" type="video/mp4" />
      </video>
      <div>
        <div className="service-intro">
          <h2>{t("services.title")}</h2>
          <p>{t("services.subtitle")}</p>
        </div>
        <div>
          <ServiceComponent
            title={t("services.businessWebsite.title")}
            description={t("services.businessWebsite.description")}
            imagePath="/webDesign.jpg"
            imageFirst={false}
            link={`/${langPrefix}/pricing/website`}
          />
          <ServiceComponent
            title={t("services.ai.title")}
            description={t("services.ai.description")}
            imagePath="/aiService.webp"
            imageFirst={true}
            link={`/${langPrefix}/pricing/ai`}
          />
          <ServiceComponent
            title={t("services.social.title")}
            description={t("services.social.description")}
            imagePath="/socialmedia.jpg"
            imageFirst={false}
            link={`/${langPrefix}/pricing/social-media`}
          />
          <ServiceComponent
            title={t("services.chatbots.title")}
            description={t("services.chatbots.description")}
            imagePath="/chatbots.jpg"
            imageFirst={true}
            link={`/${langPrefix}/pricing/chatbots`}
          />
          <ServiceComponent
            title={t("services.crm.title")}
            description={t("services.crm.description")}
            imagePath="/crm.webp"
            imageFirst={false}
            link={`/${langPrefix}/pricing/crm`}
          />
          <ServiceComponent
            title={t("services.software.title")}
            description={t("services.software.description")}
            imagePath="/971.jpg"
            imageFirst={true}
            link={`/${langPrefix}/pricing/software`}
          />
          <ServiceComponent
            title={t("services.design.title")}
            description={t("services.design.description")}
            imagePath="/graphicdesign.webp"
            imageFirst={false}
          />
          <ServiceComponent
            title={t("services.courses.title")}
            description={t("services.courses.description")}
            imagePath="/programming.webp"
            imageFirst={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
