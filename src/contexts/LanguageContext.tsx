import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';
import translations from '../translations';

interface LanguageContextType {
  currentLanguage: string;
  availableLanguages: Language[];
  changeLanguage: (languageCode: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const AVAILABLE_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', rtl: false },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳', rtl: false },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', rtl: false },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', rtl: false },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳', rtl: false },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', rtl: false },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', rtl: false },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', rtl: false },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', rtl: false },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳', rtl: false },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', flag: '🇮🇳', rtl: false },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', flag: '🇮🇳', rtl: false },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇮🇳', rtl: false },
];

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    return localStorage.getItem('preferredLanguage') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('preferredLanguage', currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = (languageCode: string) => {
    if (AVAILABLE_LANGUAGES.some((lang) => lang.code === languageCode)) {
      setCurrentLanguage(languageCode);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[currentLanguage as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        availableLanguages: AVAILABLE_LANGUAGES,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
