import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getLanguagePrefix = () => {
    const lang = location.pathname.split('/')[1];
    return lang === 'al' || lang === 'en' ? `/${lang}` : '/en';
  };

  const getLanguageLink = (lang) => {
    const segments = location.pathname.split('/');
    segments[1] = lang;
    return segments.join('/') || '/';
  };

  const langPrefix = getLanguagePrefix();

  return (
    <header className='header'>
      <Link to={langPrefix} className='logo-container'>
        <img src="/logo-white.svg" alt="Debugger Software Logo" className="header-logo" />
        <h1 className='header-title'>Debugger Software</h1>
      </Link>

      {/* Language Flags */}
      <div className="language-switcher">
        <Link to={getLanguageLink('al')} className="flag-link" title="Shqip">
          <img src="/albania.png" alt="Albanian" className="flag-icon" />
        </Link>
        <Link to={getLanguageLink('en')} className="flag-link" title="English">
          <img src="/uk.png" alt="English" className="flag-icon" />
        </Link>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Mobile nav menu */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <nav>
          <Link to={`${langPrefix}`} onClick={toggleMenu}>Home</Link>
          <Link to={`${langPrefix}/services`} onClick={toggleMenu}>Our Services</Link>
          <Link to={`${langPrefix}/contact`} onClick={toggleMenu}>Contact</Link>
          <Link to={`${langPrefix}/about`} onClick={toggleMenu}>About Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
