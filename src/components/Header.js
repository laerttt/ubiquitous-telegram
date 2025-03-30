import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import "../css/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getLanguagePrefix = () => {
    const lang = location.pathname.split("/")[1];
    return lang === "al" || lang === "en" ? `/${lang}` : "/en";
  };

  const getLanguageLink = (lang) => {
    const segments = location.pathname.split("/");
    segments[1] = lang;
    return segments.join("/") || "/";
  };

  const langPrefix = getLanguagePrefix();

  return (
    <header className="header">
      <Link to={langPrefix} className="logo-container">
        <img
          src={`${process.env.PUBLIC_URL}/logo-white.svg`}
          alt="Debugger Software Logo"
          className="header-logo"
        />
        <h1 className="header-title">Debugger Software</h1>
      </Link>
      <div className="right-side-header">
        <div className={`mobile-nav`}>
          <nav>
            <Link to={`${langPrefix}`} onClick={toggleMenu}>
              <Trans i18nKey="header.home" />
            </Link>
            <Link to={`${langPrefix}/services`} onClick={toggleMenu}>
              <Trans i18nKey="header.services" />
            </Link>
            <Link to={`${langPrefix}/contact`} onClick={toggleMenu}>
              <Trans i18nKey="header.contact" />
            </Link>
            <Link to={`${langPrefix}/about`} onClick={toggleMenu}>
              <Trans i18nKey="header.about" />
            </Link>
          </nav>
        </div>
        <div className="language-switcher">
          <Link to={getLanguageLink("al")} className="flag-link" title="Shqip">
            <img src={`${process.env.PUBLIC_URL}/albania.png`} alt="Albanian" className="flag-icon" />
          </Link>
          <Link to={getLanguageLink("en")} className="flag-link" title="English">
            <img src={`${process.env.PUBLIC_URL}/uk.png`} alt="English" className="flag-icon" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
