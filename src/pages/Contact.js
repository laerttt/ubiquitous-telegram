import React from "react";
import "../css/Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <video autoPlay loop muted id="contact-bg">
        <source src={`${process.env.PUBLIC_URL}/groupdesignbg.mp4`} type="video/mp4" />
      </video>

      <div className="contact-content">
        <div className="contact-wrapper">
          <h1 className="contact-heading">{t("contact.title")}</h1>
          <p className="contact-subheading">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-box contact-info">
            <h2>{t("contact.infoTitle")}</h2>
            <div className="info-group">
              <span>📍</span>
              <p>{t("contact.address")}</p>
            </div>
            <div className="info-group">
              <span>📞</span>
              <p>{t("contact.phone")}</p>
            </div>
            <div className="info-group">
              <span>✉️</span>
              <p>{t("contact.email")}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-box contact-form">
            <h2>{t("contact.formTitle")}</h2>
            <form>
              <input type="text" placeholder={t("contact.form.name")} required />
              <input type="email" placeholder={t("contact.form.email")} required />
              <textarea placeholder={t("contact.form.message")} rows="5" required />
              <button type="submit"><span>{t("contact.form.send")}</span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
