import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { localizeNumber } from '../utils/numberLocalization';
import './Homepage.css';
import './Homepage-Medpro.css';
import botImage from './chatbotimg.jpeg';
import healthcareImage from '../assets/healthcare-image.jpeg';
import marketplaceImage from '../assets/marketplace-image.jpeg';

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const { t, currentLanguage, availableLanguages, changeLanguage } = useLanguage();
  const { isAuthenticated, user, login, loginWithGoogle, logout, isLoading, error } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [showAllServices, setShowAllServices] = React.useState(false);

  // Helper function to localize text with numbers
  const tWithNumbers = (key: string): string => {
    const text = t(key);
    return localizeNumber(text, currentLanguage);
  };

  // Redirect to appropriate dashboard after login
  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === 'doctor') {
        navigate('/doctor/dashboard');
      } else if (user.role === 'admin') {
        navigate('/admin/dashboard');
      }
      // Patients stay on homepage
      setShowLoginModal(false);
    }
  }, [isAuthenticated, user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      setEmail('');
      setPassword('');
    } catch {
      // Error is handled in AuthContext
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch {
      // Error is handled in AuthContext
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="homepage medpro-style">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        {t('accessibility.skipToMain')}
      </a>

      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>{t('topBar.email')}</span>
            </div>
            <div className="top-bar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <a href="tel:104" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span>{t('topBar.phone')}</span>
              </a>
            </div>
          </div>
          <div className="top-bar-right">
            <select
              value={currentLanguage}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => changeLanguage(e.target.value)}
              className="language-selector-top"
            >
              {availableLanguages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.nativeName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header-medpro">
        <div className="header-content-medpro">
          <div className="logo-medpro">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <span>MediGuide</span>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
          
          <nav className={`nav-medpro ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="/" className="nav-link active" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</a>
            <a href="/symptom-checker" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.symptomChecker')}</a>
            <a href="/chatbot" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.chatbot')}</a>
            <a href="/marketplace" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.marketplace') || 'Marketplace'}</a>
            <a href="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.about')}</a>
            <a href="/support" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.support')}</a>
            
            {/* Mobile-only actions */}
            <div className="mobile-menu-actions">
              {isAuthenticated ? (
                <>
                  <div className="mobile-user-info">
                    <span className="mobile-user-name">{user?.name}</span>
                  </div>
                  <button className="mobile-btn-appointment" onClick={() => { navigate('/doctors'); setIsMobileMenuOpen(false); }}>
                    {t('common.makeAppointment')}
                  </button>
                  <button className="mobile-btn-logout" onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}>
                    {t('common.logout') || 'Logout'}
                  </button>
                </>
              ) : (
                <>
                  <button className="mobile-btn-login" onClick={() => { setShowLoginModal(true); setIsMobileMenuOpen(false); }}>
                    {t('nav.login')}
                  </button>
                  <button className="mobile-btn-appointment" onClick={() => { navigate('/doctors'); setIsMobileMenuOpen(false); }}>
                    {t('common.makeAppointment')}
                  </button>
                </>
              )}
            </div>
          </nav>
          <div className="header-actions-medpro">
            {isAuthenticated ? (
              <div className="user-menu-medpro">
                <span className="user-name-medpro">{user?.name}</span>
                <button className="btn-logout-medpro" onClick={handleLogout}>{t('common.logout') || 'Logout'}</button>
              </div>
            ) : (
              <button 
                className="btn-login-medpro" 
                onClick={() => setShowLoginModal(true)}
              >
                {t('nav.login')}
              </button>
            )}
            <button className="btn-appointment" onClick={() => navigate('/doctors')}>{t('common.makeAppointment')}</button>
          </div>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="emergency-banner-medpro" onClick={() => navigate('/emergency')} style={{ cursor: 'pointer' }}>
        <div className="emergency-content-medpro">
          <svg className="emergency-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>{t('topBar.emergency')} <strong>{tWithNumbers('topBar.emergencyNumber')}</strong> {t('topBar.emergencyText')}</span>
        </div>
      </div>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section - Medpro Style */}
        <section className="hero-medpro">
          <div className="hero-container-medpro">
            <div className="hero-left">
              <div className="hero-badge-medpro">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{tWithNumbers('hero.badge')}</span>
              </div>
              <h1 className="hero-title-medpro">
                {t('hero.title')}
              </h1>
              <p className="hero-subtitle-medpro">
                {t('hero.subtitle')}
              </p>
              <div className="hero-cta-medpro">
                <button className="btn-primary-medpro" onClick={() => window.location.href = '/chatbot'}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                  {t('hero.startConsultation')}
                </button>
                <button className="btn-outline-medpro" onClick={() => window.location.href = '/about'}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="10 8 16 12 10 16 10 8"/>
                  </svg>
                  {t('hero.watchVideo')}
                </button>
              </div>
              <div className="hero-stats-medpro">
                <div className="stat-item-medpro">
                  <div className="stat-number-medpro">{tWithNumbers('hero.stats.available')}</div>
                  <div className="stat-label-medpro">{t('hero.stats.availableLabel')}</div>
                </div>
                <div className="stat-divider-medpro"></div>
                <div className="stat-item-medpro">
                  <div className="stat-number-medpro">{tWithNumbers('hero.stats.languages')}</div>
                  <div className="stat-label-medpro">{t('hero.stats.languagesLabel')}</div>
                </div>
                <div className="stat-divider-medpro"></div>
                <div className="stat-item-medpro">
                  <div className="stat-number-medpro">{tWithNumbers('hero.stats.satisfaction')}</div>
                  <div className="stat-label-medpro">{t('hero.stats.satisfactionLabel')}</div>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-image-wrapper">
                <div className="hero-image-container">
                  <img src={botImage} alt="AI Medical Assistant Bot" className="bot-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Cards */}
        <section className="quick-actions-medpro">
          <div className="quick-actions-container">
            <div className="action-card-medpro">
              <div className="action-icon emergency">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>{tWithNumbers('quickActions.emergency.title')}</h3>
              <p>{tWithNumbers('quickActions.emergency.description')}</p>
              <a href="/emergency" className="action-link">{t('quickActions.emergency.link')} →</a>
            </div>
            <div className="action-card-medpro">
              <div className="action-icon doctor">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3>{t('quickActions.findDoctor.title')}</h3>
              <p>{t('quickActions.findDoctor.description')}</p>
              <a href="/doctors" className="action-link">{t('quickActions.findDoctor.link')} →</a>
            </div>
            <div className="action-card-medpro">
              <div className="action-icon appointment">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3>{t('quickActions.appointment.title')}</h3>
              <p>{t('quickActions.appointment.description')}</p>
              <a href="/appointments" className="action-link">{t('quickActions.appointment.link')} →</a>
            </div>
            <div className="action-card-medpro">
              <div className="action-icon lab">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 2v17.5A2.5 2.5 0 0011.5 22v0A2.5 2.5 0 0014 19.5V2"/>
                  <path d="M14 2v7.527a2 2 0 01-.211.896l-4.578 8.374"/>
                  <path d="M6 10h12"/>
                </svg>
              </div>
              <h3>{t('quickActions.labResults.title')}</h3>
              <p>{t('quickActions.labResults.description')}</p>
              <a href="/lab-results" className="action-link">{t('quickActions.labResults.link')} →</a>
            </div>
          </div>
        </section>

        {/* Our Impact Stats */}
        <section className="impact-section-medpro">
          <div className="impact-container">
            <div className="section-header-medpro">
              <h2>{t('impact.title')}</h2>
              <p>{t('impact.subtitle')}</p>
            </div>
            <div className="impact-stats">
              <div className="impact-stat">
                <div className="impact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </div>
                <div className="impact-number">{tWithNumbers('impact.stats.patients')}</div>
                <div className="impact-label">{t('impact.stats.patientsLabel')}</div>
              </div>
              <div className="impact-stat">
                <div className="impact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="impact-number">{tWithNumbers('impact.stats.doctors')}</div>
                <div className="impact-label">{t('impact.stats.doctorsLabel')}</div>
              </div>
              <div className="impact-stat">
                <div className="impact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div className="impact-number">{tWithNumbers('impact.stats.satisfaction')}</div>
                <div className="impact-label">{t('impact.stats.satisfactionLabel')}</div>
              </div>
              <div className="impact-stat">
                <div className="impact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="impact-number">{tWithNumbers('impact.stats.support')}</div>
                <div className="impact-label">{t('impact.stats.supportLabel')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Progressive Disclosure */}
        <section className="services-section-2026">
          <div className="section-header-2026">
            <span className="section-eyebrow">{t('services.eyebrow')}</span>
            <h2 className="section-title-2026">{t('services.title')}</h2>
            <p className="section-description-2026">
              {t('services.description')}
            </p>
          </div>
          
          <div className="services-grid-2026">
            <div className="service-card-2026 glass-card">
              <div className="service-icon-3d">
                <div className="icon-glow"></div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <h3>{t('services.aiSymptom.title')}</h3>
              <p>{t('services.aiSymptom.description')}</p>
              <button 
                onClick={() => navigate('/symptom-checker')} 
                className="service-link-2026"
              >
                <span>{t('services.aiSymptom.link')}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <div className="service-card-2026 glass-card featured">
              <div className="featured-badge">{t('services.aiAssistant.badge')}</div>
              <div className="service-icon-3d">
                <div className="icon-glow"></div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>{tWithNumbers('services.aiAssistant.title')}</h3>
              <p>{t('services.aiAssistant.description')}</p>
              <button 
                onClick={() => navigate('/chatbot')} 
                className="service-link-2026"
              >
                <span>{t('services.aiAssistant.link')}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <div className="service-card-2026 glass-card">
              <div className="service-icon-3d">
                <div className="icon-glow"></div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <h3>{t('services.reports.title')}</h3>
              <p>{t('services.reports.description')}</p>
              <button 
                onClick={() => {
                  if (isAuthenticated) {
                    navigate('/summary');
                  } else {
                    setShowLoginModal(true);
                  }
                }} 
                className="service-link-2026"
              >
                <span>{t('services.reports.link')}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {showAllServices && (
              <>
                <div className="service-card-2026 glass-card">
                  <div className="service-icon-3d">
                    <div className="icon-glow"></div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <h3>{t('services.periodHealth.title')}</h3>
                  <p>{t('services.periodHealth.description')}</p>
                  <button 
                    onClick={() => navigate('/period-tracker')} 
                    className="service-link-2026"
                  >
                    <span>{t('services.periodHealth.link')}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>

                <div className="service-card-2026 glass-card">
                  <div className="service-icon-3d">
                    <div className="icon-glow"></div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 11l3 3L22 4"></path>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <h3>{t('services.selfCareTracker.title')}</h3>
                  <p>{t('services.selfCareTracker.description')}</p>
                  <button 
                    onClick={() => navigate('/selfcare')} 
                    className="service-link-2026"
                  >
                    <span>{t('services.selfCareTracker.link')}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>

          <button 
            className="view-all-services"
            onClick={() => setShowAllServices(!showAllServices)}
          >
            <span>{showAllServices ? t('common.close') : t('services.viewAll')}</span>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{ transform: showAllServices ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
            >
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </section>

        {/* Healthcare Marketplace Section */}
        <section className="marketplace-section-2026">
          <div className="marketplace-container">
            <div className="marketplace-content">
              <div className="marketplace-text">
                <span className="section-eyebrow">{t('marketplace.eyebrow') || 'Shop with Confidence'}</span>
                <h2 className="section-title-2026">{t('marketplace.title') || 'Healthcare Marketplace'}</h2>
                <p className="section-description-2026">
                  {t('marketplace.description') || 'Buy trusted medicines and healthcare essentials online'}
                </p>
                <button 
                  onClick={() => navigate('/marketplace')} 
                  className="btn-marketplace-cta"
                >
                  <span>{t('marketplace.ctaButton') || 'Visit Healthcare Store'}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              <div className="marketplace-icon-wrapper">
                <div className="marketplace-image-container">
                  <img 
                    src={marketplaceImage}
                    alt="Healthcare Marketplace"
                    className="marketplace-hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Timeline with Micro-interactions */}
        <section className="how-it-works-2026">
          <div className="section-header-2026">
            <span className="section-eyebrow">{t('howItWorks.eyebrow')}</span>
            <h2 className="section-title-2026">{t('howItWorks.title')}</h2>
            <p className="section-description-2026">
              {t('howItWorks.description')}
            </p>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <div className="timeline-step">
              <div className="step-marker">
                <div className="step-number">1</div>
                <div className="step-pulse"></div>
              </div>
              <div className="step-content glass-card">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3>{t('howItWorks.steps.step1.title')}</h3>
                <p>{t('howItWorks.steps.step1.description')}</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-marker">
                <div className="step-number">2</div>
                <div className="step-pulse"></div>
              </div>
              <div className="step-content glass-card">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3>{t('howItWorks.steps.step2.title')}</h3>
                <p>{t('howItWorks.steps.step2.description')}</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-marker">
                <div className="step-number">3</div>
                <div className="step-pulse"></div>
              </div>
              <div className="step-content glass-card">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3>{t('howItWorks.steps.step3.title')}</h3>
                <p>{t('howItWorks.steps.step3.description')}</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-marker">
                <div className="step-number">4</div>
                <div className="step-pulse"></div>
              </div>
              <div className="step-content glass-card">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3>{t('howItWorks.steps.step4.title')}</h3>
                <p>{t('howItWorks.steps.step4.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Stories - Video Testimonials Style */}
        <section className="testimonials-section-2026">
          <div className="section-header-2026">
            <span className="section-eyebrow">{t('testimonials.eyebrow')}</span>
            <h2 className="section-title-2026">{t('testimonials.title')}</h2>
            <p className="section-description-2026">
              {t('testimonials.description')}
            </p>
          </div>
          
          <div className="testimonials-carousel">
            <div className="testimonial-card-2026 glass-card">
              <div className="testimonial-header">
                <div className="author-profile">
                  <div className="author-avatar-2026">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%2314b8a6'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='40' font-family='system-ui'%3EPS%3C/text%3E%3C/svg%3E" alt={t('testimonials.patients.priya.name')} />
                  </div>
                  <div className="author-details">
                    <h4>{t('testimonials.patients.priya.name')}</h4>
                    <p>{t('testimonials.patients.priya.location')}</p>
                  </div>
                </div>
                <div className="rating-badge">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">{tWithNumbers('testimonials.patients.priya.rating')}</span>
                </div>
              </div>
              <div className="testimonial-body">
                <div className="quote-mark">"</div>
                <p>{t('testimonials.patients.priya.text')}</p>
              </div>
              <div className="testimonial-footer">
                <span className="verified-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10" stroke="white" strokeWidth="2" fill="none"></polyline>
                  </svg>
                  {t('testimonials.verified')}
                </span>
              </div>
            </div>

            <div className="testimonial-card-2026 glass-card">
              <div className="testimonial-header">
                <div className="author-profile">
                  <div className="author-avatar-2026">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%230ea5e9'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='40' font-family='system-ui'%3ERK%3C/text%3E%3C/svg%3E" alt={t('testimonials.patients.rajesh.name')} />
                  </div>
                  <div className="author-details">
                    <h4>{t('testimonials.patients.rajesh.name')}</h4>
                    <p>{t('testimonials.patients.rajesh.location')}</p>
                  </div>
                </div>
                <div className="rating-badge">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">{tWithNumbers('testimonials.patients.rajesh.rating')}</span>
                </div>
              </div>
              <div className="testimonial-body">
                <div className="quote-mark">"</div>
                <p>{t('testimonials.patients.rajesh.text')}</p>
              </div>
              <div className="testimonial-footer">
                <span className="verified-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10" stroke="white" strokeWidth="2" fill="none"></polyline>
                  </svg>
                  {t('testimonials.verified')}
                </span>
              </div>
            </div>

            <div className="testimonial-card-2026 glass-card">
              <div className="testimonial-header">
                <div className="author-profile">
                  <div className="author-avatar-2026">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%238b5cf6'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='40' font-family='system-ui'%3EAP%3C/text%3E%3C/svg%3E" alt={t('testimonials.patients.ananya.name')} />
                  </div>
                  <div className="author-details">
                    <h4>{t('testimonials.patients.ananya.name')}</h4>
                    <p>{t('testimonials.patients.ananya.location')}</p>
                  </div>
                </div>
                <div className="rating-badge">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">{tWithNumbers('testimonials.patients.ananya.rating')}</span>
                </div>
              </div>
              <div className="testimonial-body">
                <div className="quote-mark">"</div>
                <p>{t('testimonials.patients.ananya.text')}</p>
              </div>
              <div className="testimonial-footer">
                <span className="verified-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10" stroke="white" strokeWidth="2" fill="none"></polyline>
                  </svg>
                  {t('testimonials.verified')}
                </span>
              </div>
            </div>
          </div>

          <div className="testimonial-stats">
            <div className="stat-card glass-card">
              <div className="stat-number">{tWithNumbers('testimonials.stats.rating')}</div>
              <div className="stat-label">{t('testimonials.stats.ratingLabel')}</div>
              <div className="stat-stars">★★★★★</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">{tWithNumbers('testimonials.stats.patients')}</div>
              <div className="stat-label">{t('testimonials.stats.patientsLabel')}</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">{tWithNumbers('testimonials.stats.satisfaction')}</div>
              <div className="stat-label">{t('testimonials.stats.satisfactionLabel')}</div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="trust-section">
          <h2>{t('trust.title')}</h2>
          <div className="trust-badges">
            <div className="trust-badge">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>{t('trust.badges.secureAI')}</span>
            </div>
            <div className="trust-badge">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              <span>{t('trust.badges.fast')}</span>
            </div>
            <div className="trust-badge">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{t('trust.badges.reliable')}</span>
            </div>
            <div className="trust-badge">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <line x1="2" y1="12" x2="22" y2="12"></line>
              </svg>
              <span>{t('trust.badges.multilingual')}</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
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

      {/* Login Modal */}
      {showLoginModal && (
        <div className="login-modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <div className="login-modal-header">
              <h2>{t('loginModal.title')}</h2>
              <button className="close-modal-btn" onClick={() => setShowLoginModal(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <form className="login-form" onSubmit={handleLogin}>
              {error && (
                <div className="login-error">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                  {error}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">{t('loginModal.emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('loginModal.emailPlaceholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">{t('loginModal.passwordLabel')}</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('loginModal.passwordPlaceholder')}
                  required
                />
              </div>

              <button type="submit" className="btn-login-submit" disabled={isLoading}>
                {isLoading ? t('loginModal.loggingIn') : t('loginModal.loginButton')}
              </button>

              <div className="login-divider">
                <span>{t('loginModal.divider')}</span>
              </div>

              <button type="button" className="btn-google-login" onClick={handleGoogleLogin}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                {t('loginModal.googleLogin')}
              </button>

              <div className="login-footer">
                <p>{t('loginModal.noAccount')} <a href="/signup">{t('loginModal.signupLink')}</a></p>
                <div className="demo-accounts">
                  <p><strong>{t('loginModal.demoAccounts')}</strong></p>
                  <p>{t('loginModal.doctorDemo')}</p>
                  <p>{t('loginModal.adminDemo')}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
