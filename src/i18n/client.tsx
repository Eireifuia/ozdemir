'use client';

import { createContext, useContext } from 'react';
import type { Locale } from './config';

type Ctx = { locale: Locale; ui: Record<string, string> };
const LocaleContext = createContext<Ctx>({ locale: 'tr', ui: {} });

export function LocaleProvider({
  locale,
  ui,
  children,
}: {
  locale: Locale;
  ui: Record<string, string>;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={{ locale, ui }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext).locale;
}

export function useT() {
  const { locale, ui } = useContext(LocaleContext);
  return (text: string): string => (locale === 'tr' ? text : ui[text] ?? text);
}
