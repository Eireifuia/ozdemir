import { treatments, treatmentCategories, getTreatment } from '@/data/treatments';
import type { Treatment } from '@/data/treatment-pages/types';
import { generalFaq } from '@/data/generalFaq';
import type { Locale } from './config';
import { localizeData, makeT } from './server';

/** Tedavi sayfaları seçilen dile çevrilmiş olarak. Çeviri yoksa Türkçe döner. */
export async function localizedTreatments(locale: Locale): Promise<Treatment[]> {
  return Promise.all(treatments.map((t) => localizeData('treatments', t.slug, t, locale)));
}

export async function localizedTreatment(slug: string, locale: Locale): Promise<Treatment | undefined> {
  const base = getTreatment(slug);
  if (!base) return undefined;
  return localizeData('treatments', slug, base, locale);
}

export function localizedCategories(locale: Locale) {
  const t = makeT(locale);
  return treatmentCategories.map((c) => ({ id: c.id, label: t(c.label) }));
}

export async function localizedGeneralFaq(locale: Locale) {
  return localizeData('data', 'generalFaq', generalFaq, locale);
}
