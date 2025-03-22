import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <Link to="/" className='logo-container'>
        <img src="/logo-white.svg" alt="Debugger Software Logo" className="header-logo" />
        <h1 className='header-title'>Debugger Software</h1>
      </Link>
      
      {/* Hamburger icon */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
      </div>
      
      {/* Mobile nav menu */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <nav>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/services" onClick={toggleMenu}>Our Services</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;