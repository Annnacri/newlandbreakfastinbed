import React, { createContext, useContext, useState } from 'react';
import { Language, SUPPORTED_LANGUAGES, translations } from '../i18n/translations';

export type TranslationDictionary = typeof translations['pt'];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Starts in Portuguese by default, with instant switching to EN, FR, ES, DE, IT
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('bib_language') as Language;
    if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
      return saved;
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bib_language', lang);
  };

  const t = translations[language] || translations.pt;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
