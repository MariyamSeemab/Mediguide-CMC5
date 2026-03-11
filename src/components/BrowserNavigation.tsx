import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './BrowserNavigation.css';

const BrowserNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const handleBack = () => {
    navigate(-1);
  };

  const handleForward = () => {
    navigate(1);
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="browser-navigation">
      <div className="nav-buttons">
        <button 
          className="nav-btn nav-back" 
          onClick={handleBack}
          title={t('common.back')}
          aria-label={t('common.back')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        
        <button 
          className="nav-btn nav-forward" 
          onClick={handleForward}
          title={t('common.next')}
          aria-label={t('common.next')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        <button 
          className="nav-btn nav-home" 
          onClick={handleHome}
          title={t('nav.home')}
          aria-label={t('nav.home')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </button>
      </div>

      <div className="current-path">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        <span>{location.pathname === '/' ? t('nav.home') : location.pathname.replace('/', '').replace('-', ' ').split('/').join(' > ')}</span>
      </div>
    </div>
  );
};

export default BrowserNavigation;
