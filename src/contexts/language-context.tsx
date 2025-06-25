
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Language, Translations } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Translations;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar'); // Default language

  // This effect runs once on the client to get the stored language
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && ['en', 'ar'].includes(storedLanguage)) {
      setLanguageState(storedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };
  
  // This effect updates the document attributes when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = translations[language].dir;
  }, [language]);


  const value = {
    language,
    setLanguage,
    translations: translations[language],
    dir: translations[language].dir,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
