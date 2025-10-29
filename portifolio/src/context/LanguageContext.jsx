import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('portfolio-language');
    if (saved && (saved === 'en' || saved === 'pt')) {
      return saved;
    }

    // Auto-detect browser language
    const browserLang = navigator.language || navigator.userLanguage;

    // Check if browser language is Portuguese
    if (browserLang.startsWith('pt')) {
      return 'pt';
    }

    // Default to English
    return 'en';
  });

  useEffect(() => {
    // Persist to localStorage
    localStorage.setItem('portfolio-language', language);

    // Set document language attribute for accessibility
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const setLanguageManual = (lang) => {
    if (lang === 'en' || lang === 'pt') {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: setLanguageManual }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
