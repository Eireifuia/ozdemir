import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import RevealText from '@/components/RevealText';
import FaqBrowser, { type FaqGroup } from '@/components/FaqBrowser';
import { getT } from '@/i18n/server';
import { localizedTreatments, localizedCategories, localizedGeneralFaq } from '@/i18n/content';
import { localeMeta } from '@/i18n/config';

export async function generateMetadata(): Promise<Metadata> {
  const { t, locale } = await getT();
  return {
    title: t('Sık Sorulan Sorular | Çocuk Diş Hekimi Dr. Ömer Özdemir'),
    description: t(
      'Çocuklarda diş tedavisi, flor, fissür örtücü, kanal tedavisi, diş kaplaması, dil bağı ve randevu hakkında sık sorulan sorular ve cevapları. Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir.'
    ),
    alternates: { canonical: '/sss' },
    openGraph: {
      title: t('Sık Sorulan Sorular | Çocuk Diş Hekimi Dr. Ömer Özdemir'),
      description: t('Çocuk diş tedavileri ve randevu hakkında ailelerin sık sorduğu soruların cevapları.'),
      locale: localeMeta[locale].ogLocale,
      type: 'website',
    },
  };
}

function Eyebrow({ children, tone = 'light' }: { children: React.ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <span
      className={`block text-xs font-medium uppercase tracking-[0.2em] mb-4 ${
        tone === 'dark' ? 'text-mint-light' : 'text-mint'
      }`}
    >
      {children}
    </span>
  );
}

export default async function SssPage() {
  const { t, locale } = await getT();
  const treatments = await localizedTreatments(locale);
  const generalFaq = await localizedGeneralFaq(locale);
  const categoryLabel = (id: string) => localizedCategories(locale).find((c) => c.id === id)?.label ?? id;

  const groups: FaqGroup[] = [
    {
      id: 'genel',
      title: t('Randevu ve klinikler'),
      categoryId: 'genel',
      categoryLabel: t('Genel'),
      items: generalFaq,
    },
    ...treatments
      .filter((tr) => tr.faq.length > 0)
      .map((tr) => ({
        id: tr.slug,
        title: tr.title,
        href: `/tedaviler/${tr.slug}`,
        categoryId: tr.category,
        categoryLabel: categoryLabel(tr.category),
        items: tr.faq,
      })),
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: groups.flatMap((g) =>
      g.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    ),
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main id="icerik">
        {/* Hero */}
        <section className="bg-ink text-cream">
          <FadeIn className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <Eyebrow tone="dark">{t("Sık Sorulan Sorular")}</Eyebrow>
            <h1 className="font-serif font-light text-4xl md:text-5xl leading-tight max-w-2xl">
              <RevealText text={t("Merak edilenler")} />
            </h1>
            <p className="text-cream/65 leading-relaxed mt-4 max-w-lg">
              {t("Tedavi sayfalarındaki sorular tek sayfada toplanmıştır. Konuya göre süzebilir ya da kelime yazarak arayabilirsiniz.")}
            </p>
          </FadeIn>
        </section>

        {/* Questions */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FaqBrowser groups={groups} />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-ink text-cream">
          <FadeIn className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-md">
              <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-3">
                {t("Sorunuzun cevabını bulamadınız mı?")}
              </h2>
              <p className="text-cream/65 leading-relaxed">
                {t("Kliniği arayabilir ya da WhatsApp’tan yazabilirsiniz.")}
              </p>
            </div>
            <Link
              href="/iletisim"
              className="rounded-full bg-cream text-ink text-sm font-medium px-7 py-3.5 hover:bg-mint-light transition-colors flex-shrink-0"
            >
              {t("İletişime Geçiniz")}
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
