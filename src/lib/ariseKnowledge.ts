import { treatments } from '@/data/treatments';
import { generalFaq } from '@/data/generalFaq';

/**
 * Arise'ın bilgi tabanı. Tedavi sayfalarından otomatik üretilir, böylece sitede bir metin
 * değiştiğinde asistan da aynı bilgiyi kullanır. Her tedavi için özet, giriş metni ve sık
 * sorulan sorular alınır.
 */
export function buildAriseKnowledge(): string {
  const treatmentText = treatments
    .map((t) => {
      const faq = t.faq.map((f) => `  S: ${f.q}\n  C: ${f.a}`).join('\n');
      return `## ${t.title} (sayfa: /tedaviler/${t.slug})\nÖzet: ${t.summary}\n${t.intro.join(' ')}\n${faq}`;
    })
    .join('\n\n');

  const generalText = generalFaq.map((f) => `S: ${f.q}\nC: ${f.a}`).join('\n');

  return `GENEL SORULAR (klinik ve randevu):\n${generalText}\n\nTEDAVİ BİLGİLERİ (sitedeki sayfalardan):\n${treatmentText}`;
}
