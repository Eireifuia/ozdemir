export const locales = ['tr', 'en', 'ja'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'tr';
export const LOCALE_COOKIE = 'lang';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

export const localeMeta: Record<Locale, { code: string; name: string; ogLocale: string }> = {
  tr: { code: 'TR', name: 'Türkçe', ogLocale: 'tr_TR' },
  en: { code: 'ENG', name: 'English', ogLocale: 'en_US' },
  ja: { code: 'JPN', name: '日本語', ogLocale: 'ja_JP' },
};
