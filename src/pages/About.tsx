import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { localizeNumber } from '../utils/numberLocalization';
import './About.css';

const About: React.FC = () => {
  const { currentLanguage, availableLanguages, changeLanguage, t } = useLanguage();

  // Helper function to translate text with number localization
  const tWithNumbers = (key: string): string => {
    const text = t(key);
    return text.replace(/\d+[,\d]*[+%/\d]*/g, (match) => {
      return localizeNumber(match, currentLanguage);
    });
  };

  return (
    <div className="about-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-content">
          <a href="/" className="logo">MediGuide</a>
          <nav className="nav">
            <a href="/">{t('nav.home')}</a>
            <a href="/symptom-checker">{t('nav.symptomChecker')}</a>
            <a href="/chatbot">{t('nav.chatbot')}</a>
            <a href="/about" className="active">{t('nav.about')}</a>
            <a href="/support">{t('nav.support')}</a>
          </nav>
          <select
            value={currentLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            className="language-selector"
          >
            {availableLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.nativeName}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>{t('about.title')}</h1>
          <p>{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="about-content">
        {/* Mission Section */}
        <section className="content-section">
          <div className="section-container">
            <h2>{t('about.mission.title')}</h2>
            <p className="lead-text">
              {t('about.mission.description')}
            </p>
            <p>
              {t('about.mission.extendedDescription')}
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="content-section gray-bg">
          <div className="section-container">
            <h2>{t('about.whatWeDo.title')}</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3>{t('about.whatWeDo.aiAssistant.title')}</h3>
                <p>{tWithNumbers('about.whatWeDo.aiAssistant.description')}</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </div>
                <h3>{t('about.whatWeDo.symptomChecker.title')}</h3>
                <p>{t('about.whatWeDo.symptomChecker.description')}</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                  </svg>
                </div>
                <h3>{t('about.whatWeDo.multilingualSupport.title')}</h3>
                <p>{t('about.whatWeDo.multilingualSupport.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="content-section">
          <div className="section-container">
            <h2>{t('about.values.title')}</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>{t('about.values.accessibility.title')}</h3>
                <p>{t('about.values.accessibility.description')}</p>
              </div>
              <div className="value-card">
                <h3>{t('about.values.trust.title')}</h3>
                <p>{t('about.values.trust.description')}</p>
              </div>
              <div className="value-card">
                <h3>{t('about.values.privacy.title')}</h3>
                <p>{t('about.values.privacy.description')}</p>
              </div>
              <div className="value-card">
                <h3>{t('about.values.innovation.title')}</h3>
                <p>{t('about.values.innovation.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="content-section stats-section">
          <div className="section-container">
            <h2>{t('about.impact.title')}</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{tWithNumbers('about.impact.stats.users')}</div>
                <div className="stat-label">{t('about.impact.stats.usersLabel')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{tWithNumbers('about.impact.stats.languages')}</div>
                <div className="stat-label">{t('about.impact.stats.languagesLabel')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{tWithNumbers('about.impact.stats.availability')}</div>
                <div className="stat-label">{t('about.impact.stats.availabilityLabel')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{tWithNumbers('about.impact.stats.security')}</div>
                <div className="stat-label">{t('about.impact.stats.securityLabel')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="content-section gray-bg">
          <div className="section-container">
            <h2>{t('about.commitment.title')}</h2>
            <p className="lead-text">
              {t('about.commitment.description')}
            </p>
            <p>
              {t('about.commitment.disclaimer')}
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="page-footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/about">{t('footer.about')}</a>
            <a href="/privacy">{t('footer.privacy')}</a>
            <a href="/terms">{t('footer.terms')}</a>
            <a href="/support">{t('footer.support')}</a>
            <a href="/contact">{t('footer.contact')}</a>
          </div>
          <p className="copyright">{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
