import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import '../css/Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='footer'>
      <div className='contact-info'>
        <div className='info-item'>
          <i className='icon'>✉️</i>
          <span>{t('footer.email')}</span>
        </div>
        <div className='info-item'>
          <i className='icon'>📞</i>
          <span>{t('footer.phone')}</span>
        </div>
        <div className='info-item'>
          <i className='icon'>📍</i>
          <span>{t('footer.address')}</span>
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
          <Trans i18nKey="footer.rights" values={{ year: new Date().getFullYear() }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
