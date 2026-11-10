import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import RevealText from '@/components/RevealText';
import FaqBrowser, { type FaqGroup } from '@/components/FaqBrowser';
import { generalFaq } from '@/data/generalFaq';
import { treatmentCategories, treatments } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular | Çocuk Diş Hekimi Dr. Ömer Özdemir',
  description:
    'Çocuklarda diş tedavisi, flor, fissür örtücü, kanal tedavisi, diş kaplaması, dil bağı ve randevu hakkında sık sorulan sorular ve cevapları. Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir.',
  alternates: { canonical: '/sss' },
  openGraph: {
    title: 'Sık Sorulan Sorular | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    description:
      'Çocuk diş tedavileri ve randevu hakkında ailelerin sık sorduğu soruların cevapları.',
    locale: 'tr_TR',
    type: 'website',
  },
};

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

export default function SssPage() {
  const categoryLabel = (id: string) => treatmentCategories.find((c) => c.id === id)?.label ?? id;

  const groups: FaqGroup[] = [
    {
      id: 'genel',
      title: 'Randevu ve klinikler',
      categoryId: 'genel',
      categoryLabel: 'Genel',
      items: generalFaq,
    },
    ...treatments
      .filter((t) => t.faq.length > 0)
      .map((t) => ({
        id: t.slug,
        title: t.title,
        href: `/tedaviler/${t.slug}`,
        categoryId: t.category,
        categoryLabel: categoryLabel(t.category),
        items: t.faq,
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
            <Eyebrow tone="dark">Sık Sorulan Sorular</Eyebrow>
            <h1 className="font-serif font-light text-4xl md:text-5xl leading-tight max-w-2xl">
              <RevealText text="Merak edilenler" />
            </h1>
            <p className="text-cream/65 leading-relaxed mt-4 max-w-lg">
              Tedavi sayfalarındaki sorular tek sayfada toplanmıştır. Konuya göre süzebilir ya da
              kelime yazarak arayabilirsiniz.
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
                Sorunuzun cevabını bulamadınız mı?
              </h2>
              <p className="text-cream/65 leading-relaxed">
                Kliniği arayabilir ya da WhatsApp’tan yazabilirsiniz.
              </p>
            </div>
            <Link
              href="/iletisim"
              className="rounded-full bg-cream text-ink text-sm font-medium px-7 py-3.5 hover:bg-mint-light transition-colors flex-shrink-0"
            >
              İletişime Geçiniz
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
