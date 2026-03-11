import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import CategoryNavbar from '../components/CategoryNavbar';
import healthcareImage from '../assets/healthcare-image.jpeg';
import './Marketplace.css';

const Marketplace: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="marketplace-page">
      <Navbar />
      <CategoryNavbar />

      <main className="marketplace-main">
        <section className="marketplace-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h2>{t('marketplace.hero.title')}</h2>
              <p>{t('marketplace.hero.subtitle')}</p>
            </div>
            <div className="hero-image">
              <img 
                src={healthcareImage}
                alt="Healthcare Professional with Medical Equipment"
              />
            </div>
          </div>
        </section>

        <section className="marketplace-features">
          <h3>{t('marketplace.features.title')}</h3>
          <div className="features-grid">
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <h4>{t('marketplace.features.verified')}</h4>
              <p>{t('marketplace.features.verifiedDesc')}</p>
            </div>
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <h4>{t('marketplace.features.delivery')}</h4>
              <p>{t('marketplace.features.deliveryDesc')}</p>
            </div>
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <h4>{t('marketplace.features.support')}</h4>
              <p>{t('marketplace.features.supportDesc')}</p>
            </div>
          </div>
        </section>

        <section className="marketplace-cta">
          <div className="cta-content">
            <h3>{t('marketplace.cta.title')}</h3>
            <p>{t('marketplace.cta.description')}</p>
            <button className="btn-notify" onClick={() => alert(t('marketplace.cta.notifyMessage'))}>
              {t('marketplace.cta.notify')}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Marketplace;
