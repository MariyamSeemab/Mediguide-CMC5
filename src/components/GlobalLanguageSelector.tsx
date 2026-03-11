import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './GlobalLanguageSelector.css';

const GlobalLanguageSelector: React.FC = () => {
  const location = useLocation();
  const { currentLanguage, availableLanguages, changeLanguage } = useLanguage();

  // Pages that already have their own language selector or don't need one
  const excludedPaths = [
    '/',           // Homepage - has its own in top bar
    '/chatbot',    // Chatbot - already has language selector
    '/support',    // Support - already has language selector
    '/about',      // About - already has language selector
    '/summary',    // Summary/Doctor Report - remove language switcher
    '/appointments', // Appointments page - remove language switcher
    '/period-tracker', // Period Tracker - has its own language handling
  ];

  // Check if current path starts with excluded patterns (for dynamic routes)
  const excludedPatterns = [
    '/doctor/dashboard', // All doctor dashboard routes
  ];

  // Don't show on excluded pages
  if (excludedPaths.includes(location.pathname)) {
    return null;
  }

  // Don't show on pages matching excluded patterns
  if (excludedPatterns.some(pattern => location.pathname.startsWith(pattern))) {
    return null;
  }

  return (
    <div className="global-language-selector">
      <select
        value={currentLanguage}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => changeLanguage(e.target.value)}
        className="language-selector-top"
        aria-label="Select Language"
      >
        {availableLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.nativeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GlobalLanguageSelector;
