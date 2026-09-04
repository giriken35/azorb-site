"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ja } from './i18n/ja'
import { en } from './i18n/en'

type Language = 'ja' | 'en'
type Translations = typeof ja

interface LanguageContextType {
  lang: Language
  t: Translations
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('ja')

  useEffect(() => {
    // Check local storage on mount
    const savedLang = localStorage.getItem('azorb-lang') as Language
    if (savedLang && (savedLang === 'ja' || savedLang === 'en')) {
      setLang(savedLang)
    }
  }, [])

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === 'ja' ? 'en' : 'ja'
      localStorage.setItem('azorb-lang', next)
      return next
    })
  }

  const t = lang === 'ja' ? ja : en

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}