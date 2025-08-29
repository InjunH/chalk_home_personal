'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ko } from '@/constants/text/ko';
import { en } from '@/constants/text/en';

type Language = 'ko' | 'en';
type TextContent = typeof ko;

const languages: Record<Language, TextContent> = {
  ko,
  en,
};

interface LanguageContextType {
  currentLanguage: Language;
  text: TextContent;
  changeLanguage: (lang: Language) => void;
  getSupportedLanguages: () => Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ko');

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    console.log(`Language changed to: ${lang}`);
  };

  const getSupportedLanguages = (): Language[] => Object.keys(languages) as Language[];

  const value: LanguageContextType = {
    currentLanguage,
    text: languages[currentLanguage],
    changeLanguage,
    getSupportedLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// 기존 호환성을 위한 export (추후 제거 예정)
export const getCurrentLanguage = () => 'ko';
export const text = ko;