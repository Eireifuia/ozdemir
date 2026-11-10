import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TreatmentGuides from '@/components/TreatmentGuides';
import TreatmentsBrowser from '@/components/TreatmentsBrowser';
import FadeIn from '@/components/FadeIn';
import RevealText from '@/components/RevealText';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çocuk Diş Tedavileri | Çocuk Diş Hekimi Dr. Ömer Özdemir',
  description:
    'Çocuklarda koruyucu bakım, çürük ve kanal tedavisi, diş kaplaması, yer tutucu, diş travması, genel anestezi ve erken ortodonti hakkında bilgiler. Bakırköy ve Acıbadem kliniklerinde çocuk diş hekimi Dr. Ömer Özdemir.',
  alternates: { canonical: '/tedaviler' },
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

export default function Tedaviler() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main id="icerik">
        {/* Hero */}
        <section className="bg-ink text-cream">
          <FadeIn className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <Eyebrow tone="dark">Tedaviler</Eyebrow>
            <h1 className="font-serif font-light text-4xl md:text-5xl leading-tight max-w-2xl">
              <RevealText text="Tedaviler" />
            </h1>
            <p className="text-cream/65 leading-relaxed mt-4 max-w-lg">
              Çocuklara özel diş tedavilerinin ne zaman gerektiği, nasıl uygulandığı ve ailelerin
              bilmesi gereken noktalar bu sayfada yer almaktadır.
            </p>
          </FadeIn>
        </section>

        {/* Treatments */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <TreatmentsBrowser />
          </div>
        </section>

        {/* Detailed guides */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FadeIn className="max-w-2xl mb-10">
              <Eyebrow>Merak Edilenler</Eyebrow>
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-4">
                Ailelerin en çok sorduğu sorular
              </h2>
              <p className="text-ink-soft leading-relaxed">
                Çocuğunuzun diş sağlığıyla ilgili merak edilen konular ayrıntılı biçimde ele alınmıştır.
                Başlığa tıklayarak açabilirsiniz.
              </p>
              <Link
                href="/sss"
                className="inline-block mt-4 text-sm font-medium text-mint hover:text-ink transition-colors"
              >
                Tüm Sık Sorulan Soruları İnceleyiniz
              </Link>
            </FadeIn>
            <FadeIn delay={100}>
              <TreatmentGuides />
            </FadeIn>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-ink text-cream">
          <FadeIn className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2 className="font-serif text-2xl md:text-3xl leading-tight max-w-md">
              Sağlıklı gülüşler için randevu alınız
            </h2>
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
