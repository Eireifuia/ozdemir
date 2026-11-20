import { cookies } from 'next/headers';
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from './config';
import { applyTranslation, type TranslationFile } from './translate';
import enUi from './en/ui';
import jaUi from './ja/ui';

export const uiDictionaries: Record<Exclude<Locale, 'tr'>, Record<string, string>> = {
  en: enUi,
  ja: jaUi,
};

/** Ziyaretçinin seçtiği dil (çerezden). Seçilmemişse Türkçe. */
export async function getLocale(): Promise<Locale> {
  try {
    const value = (await cookies()).get(LOCALE_COOKIE)?.value;
    return isLocale(value) ? value : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

export function makeT(locale: Locale) {
  return (text: string): string => {
    if (locale === 'tr') return text;
    return uiDictionaries[locale][text] ?? text;
  };
}

export async function getT() {
  const locale = await getLocale();
  return { locale, t: makeT(locale) };
}

/**
 * Veri dosyalarının çevirisi: src/i18n/<dil>/data/<ad>.ts ya da treatments/<slug>.ts
 * Çeviri yoksa ya da kaynakla uyuşmuyorsa Türkçe veri aynen döner.
 */
export async function localizeData<T>(
  kind: 'data' | 'treatments',
  name: string,
  source: T,
  locale: Locale
): Promise<T> {
  if (locale === 'tr') return source;
  try {
    const mod = (await import(`./${locale}/${kind}/${name}`)) as { default: TranslationFile };
    return applyTranslation(source, mod.default);
  } catch {
    return source;
  }
}

const MONTHS: Record<'en' | 'ja', Record<string, string>> = {
  en: {
    Ocak: 'January', Şubat: 'February', Mart: 'March', Nisan: 'April', Mayıs: 'May', Haziran: 'June',
    Temmuz: 'July', Ağustos: 'August', Eylül: 'September', Ekim: 'October', Kasım: 'November', Aralık: 'December',
  },
  ja: {
    Ocak: '1月', Şubat: '2月', Mart: '3月', Nisan: '4月', Mayıs: '5月', Haziran: '6月',
    Temmuz: '7月', Ağustos: '8月', Eylül: '9月', Ekim: '10月', Kasım: '11月', Aralık: '12月',
  },
};

/** "22 Ağustos 2026" biçimindeki tarihi seçilen dile çevirir. */
export function formatDate(date: string, locale: Locale): string {
  if (locale === 'tr') return date;
  const m = date.match(/^(\d{1,2}) (\S+) (\d{4})$/);
  if (!m) return date;
  const month = MONTHS[locale][m[2]];
  if (!month) return date;
  return locale === 'en' ? `${month} ${m[1]}, ${m[3]}` : `${m[3]}年${month}${m[1]}日`;
}
