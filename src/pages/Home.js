import "../css/Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useLocation } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();

  const handleButtonClick = () => {
    navigate(`${langPrefix}/services`);
  };
  const getLanguagePrefix = () => {
    const lang = location.pathname.split('/')[1];
    return lang === 'al' || lang === 'en' ? `/${lang}` : '/en';
  };

  const langPrefix = getLanguagePrefix();

  return (
    <div className="home">
      <video autoPlay loop muted playsInline webkit-playsinline id="background-video">
        <source src={`${process.env.PUBLIC_URL}/kreu.mp4`} type="video/mp4" />
      </video>
      <div className="h2-container">
        <h2 className="welcome-message">
          <Trans i18nKey="home.hero">
            Your Partner in <strong>Innovation</strong> and Digital Excellence
          </Trans>
        </h2>
        <p>{t("home.subtitle")}</p>
        <button onClick={handleButtonClick}>
          <span>{t("home.button")}</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
