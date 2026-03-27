"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { dictionary, Locale } from '@/locales/dictionary';

interface LanguageContextProps {
  language: Locale;
  toggleLanguage: () => void;
  mounted: boolean;
  t: (section: keyof typeof dictionary['ru'], key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Locale>('ru');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const storedLang = localStorage.getItem('language') as Locale;
    if (storedLang === 'ru' || storedLang === 'en') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(storedLang);
    } else {
      const defaultLang = 'ru';
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(defaultLang);
      localStorage.setItem('language', defaultLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'ru' ? 'en' : 'ru';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (section: keyof typeof dictionary['ru'], key: string): string => {
    if (!mounted) return dictionary['ru'][section] ? (dictionary['ru'][section] as Record<string, string>)[key] : '';
    const sectionData = dictionary[language][section] as Record<string, string>;
    return sectionData && sectionData[key] ? sectionData[key] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, mounted, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
