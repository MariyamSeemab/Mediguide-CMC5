import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { localizeNumber } from '../utils/numberLocalization';
import './Support.css';

const Support: React.FC = () => {
  const { currentLanguage, availableLanguages, changeLanguage, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Helper function to translate text with number localization
  const tWithNumbers = (key: string): string => {
    const text = t(key);
    return text.replace(/\d+[,\d]*[+%/\d]*/g, (match) => {
      return localizeNumber(match, currentLanguage);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('support.feedback.success'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqs = [
    {
      question: t('support.faq.q4'),
      answer: t('support.faq.a4'),
    },
    {
      question: t('support.faq.q1'),
      answer: t('support.faq.a1'),
    },
    {
      question: t('support.faq.q3'),
      answer: tWithNumbers('support.faq.a3'),
    },
    {
      question: t('support.faq.q2'),
      answer: t('support.faq.a2'),
    },
  ];

  return (
    <div className="support-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-content">
          <a href="/" className="logo">MediGuide</a>
          <nav className="nav">
            <a href="/">{t('nav.home')}</a>
            <a href="/symptom-checker">{t('nav.symptomChecker')}</a>
            <a href="/chatbot">{t('nav.chatbot')}</a>
            <a href="/about">{t('nav.about')}</a>
            <a href="/support" className="active">{t('nav.support')}</a>
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
      <section className="support-hero">
        <div className="hero-content">
          <h1>{t('support.hero.title')}</h1>
          <p>{t('support.hero.subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="support-content">
        {/* Quick Help Cards */}
        <section className="quick-help-section">
          <div className="section-container">
            <div className="help-cards">
              <div className="help-card">
                <div className="help-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h3>{t('support.quickHelp.faqs.title')}</h3>
                <p>{t('support.quickHelp.faqs.description')}</p>
              </div>
              <div className="help-card">
                <div className="help-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3>{t('support.quickHelp.liveChat.title')}</h3>
                <p>{tWithNumbers('support.quickHelp.liveChat.description')}</p>
              </div>
              <div className="help-card">
                <div className="help-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3>{t('support.quickHelp.emailSupport.title')}</h3>
                <p>{tWithNumbers('support.quickHelp.emailSupport.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Notice */}
        <section className="emergency-notice">
          <div className="section-container">
            <div className="notice-box">
              <svg className="notice-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <div className="notice-content">
                <h3>{t('support.emergency.title')}</h3>
                <p>{t('support.emergency.description').replace('108', tWithNumbers('support.emergency.number'))}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="faqs-section">
          <div className="section-container">
            <h2>{t('support.faq.title')}</h2>
            <div className="faqs-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-section">
          <div className="section-container">
            <h2>{t('support.contactForm.title')}</h2>
            <p className="section-subtitle">{tWithNumbers('support.contactForm.subtitle')}</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('support.contactForm.fullName')} {t('support.contactForm.required')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('support.contactForm.emailAddress')} {t('support.contactForm.required')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">{t('support.contactForm.subject')} {t('support.contactForm.required')}</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t('support.contactForm.selectSubject')}</option>
                  <option value="technical">{t('support.contactForm.subjects.technical')}</option>
                  <option value="account">{t('support.contactForm.subjects.account')}</option>
                  <option value="feedback">{t('support.contactForm.subjects.feedback')}</option>
                  <option value="other">{t('support.contactForm.subjects.other')}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('support.contactForm.message')} {t('support.contactForm.required')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                {t('support.contactForm.sendMessage')}
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info */}
        <section className="contact-info-section">
          <div className="section-container">
            <div className="contact-info-grid">
              <div className="contact-info-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <h3>{t('support.contactInfo.email.title')}</h3>
                <p>{t('support.contactInfo.email.value')}</p>
              </div>
              <div className="contact-info-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h3>{t('support.contactInfo.responseTime.title')}</h3>
                <p>{tWithNumbers('support.contactInfo.responseTime.value')}</p>
              </div>
              <div className="contact-info-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3>{t('support.contactInfo.location.title')}</h3>
                <p>{t('support.contactInfo.location.value')}</p>
              </div>
            </div>
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

export default Support;
