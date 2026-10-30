'use client'
import { createContext, useState, useContext, ReactNode } from 'react'

type LangContextType = {
  lang: string
  setLang: (l: string) => void
  fontSize: number
  setFontSize: (s: number) => void
}

const LangContext = createContext<LangContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState('en')
  const [fontSize, setFontSize] = useState(16)

  return (
    <LangContext.Provider value={{ lang, setLang, fontSize, setFontSize }}>
      <div style={{ fontSize: `${fontSize}px` }}>{children}</div>
    </LangContext.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be inside LanguageProvider')
  return ctx
}