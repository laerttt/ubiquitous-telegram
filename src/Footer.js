import React from 'react';
import './css/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='contact-info'>
        <div className='info-item'>
          <i className='icon'>✉️</i>
          <span>contact@debuggersoftware.com</span>
        </div>
        <div className='info-item'>
          <i className='icon'>📞</i>
          <span>+1 (123) 456-7890</span>
        </div>
        <div className='info-item'>
          <i className='icon'>📍</i>
          <span>123 Tech Street, San Francisco, CA 94105</span>
        </div>
      </div>
      <div>
      <div className='social-icons'>
        <a href="https://linkedin.com/company/debuggersoftware" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/linkedin.svg" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://instagram.com/debuggersoftware" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/insta.svg" alt="Instagram" className="social-icon" />
        </a>
      </div>
      
      <div className='copyright'>
        © {new Date().getFullYear()} Debugger Software. All rights reserved.
      </div>
      </div>
      
    </footer>
  );
}

export default Footer;