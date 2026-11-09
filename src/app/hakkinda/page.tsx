import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import RevealText from '@/components/RevealText';
import TravelMap from '@/components/TravelMap';
import TurkeyMapView from '@/components/TurkeyMapView';
import { education, certificates, languages, experience } from '@/data/cv';
import { allVisited, worldCountryCount } from '@/data/travel';
import { provincePlateCodes, visitedProvinceNames } from '@/data/turkeyProvinces';

const visitedPlateCodes = visitedProvinceNames.map((name) => provincePlateCodes[name]);

export const metadata: Metadata = {
  title: 'Hakkında | Çocuk Diş Hekimi Dr. Ömer Özdemir',
  description:
    'Dr. Ömer Özdemir: eğitim, pedodonti (çocuk diş hekimliği) alanındaki akademik çalışmalar, uluslararası deneyim ve çalıştığı klinikler.',
  alternates: { canonical: '/hakkinda' },
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

export default function HakkindaPage() {
  const percent = Math.round((allVisited.length / worldCountryCount) * 100);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main id="icerik">
        {/* Hero */}
        <section className="bg-ink text-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <Eyebrow tone="dark">Özgeçmiş</Eyebrow>
              <h1 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-4">
                <RevealText text="Dr. Ömer Özdemir" />
              </h1>
              <p className="text-cream/70 text-sm uppercase tracking-[0.15em] mb-6">
                DDS, PhD
              </p>
              <p className="text-cream/65 leading-relaxed max-w-md">
                Çocuk diş hekimi. İstanbul Üniversitesi Diş Hekimliği Fakültesi&apos;nde
                Pedodonti alanında akademik çalışmalarını yürütüyor, klinik pratiğini ise
                İstanbul&apos;daki iki kliniğinde sürdürüyor. Tek bir hedefi var: dünyanın
                dört bir yanındaki çocukları güldürmek. 💙
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={150} className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-cream-alt">
                <Image src="/doctor/dr-pembe-panter-sade.jpg" alt="Dr. Ömer Özdemir" fill sizes="(min-width: 768px) 45vw, 100vw" style={{ objectFit: 'cover', objectPosition: 'center 30%' }} priority />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About */}
        <section className="bg-cream">
          <FadeIn className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <Eyebrow>Hakkında</Eyebrow>
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-6">
                Klinik deneyim, bilimsel araştırmayla bir arada
              </h2>
              <div className="space-y-4">
                <p className="text-ink-soft leading-relaxed">
                  İstanbul Üniversitesi Diş Hekimliği Fakültesi&apos;ndeki eğitimini 2017-2022
                  yılları arasında tamamlamış, 2020-2022 yılları arasında ise aynı üniversitenin
                  Sağlık Kurumları İşletmeciliği bölümünde önlisans eğitimi almıştır. 2023
                  yılında İstanbul Üniversitesi Diş Hekimliği Fakültesi Pedodonti (Çocuk Diş
                  Hekimliği) Anabilim Dalı&apos;nda başladığı doktora eğitimine halen devam
                  etmekte olup, eğitimini 2027 yılında tamamlaması beklenmektedir.
                </p>
                <p className="text-ink-soft leading-relaxed">
                  Doktora çalışmaları kapsamında, Japonya&apos;nın en iyi dört üniversitesinden
                  biri olan Kyushu University&apos;de 1 yıl boyunca misafir araştırmacı olarak
                  bulunmuştur. Bunun yanı sıra Erasmus+ programı kapsamında Belçika&apos;nın Genk
                  şehrindeki Whitecenter Belgie&apos;de klinik staj yapmıştır.
                </p>
                <p className="text-ink-soft leading-relaxed">
                  Eğitim hayatı boyunca gönüllülük çalışmalarına da önem vermiş; 2018 yılında
                  Assalam Community Foundation bünyesinde Tanzanya&apos;nın Zanzibar bölgesinde
                  kadın ve çocuklara yönelik gönüllü sağlık hizmeti, 2019 yılında ise Volunteers
                  of Turkish ile Nijer&apos;in Aguié bölgesinde gönüllü diş hekimliği hizmeti
                  vermiştir.
                </p>
                <p className="text-ink-soft leading-relaxed">
                  İleri düzey İngilizce, Japonca (N4) ve Türk İşaret Dili (A2) bilgisine sahip
                  olan Dr. Ömer Özdemir, halen İstanbul&apos;da hem Avrupa hem Anadolu
                  yakasındaki kliniklerinde çocuk hastalarına hizmet vermektedir.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Education */}
        <section className="bg-white">
          <FadeIn className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <Eyebrow>Eğitim</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-10">
              Akademik Geçmiş
            </h2>
            <div className="divide-y divide-ink/10 border-t border-ink/10">
              {education.map((item) => (
                <div key={item.degree} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-5">
                  <div>
                    <span className="text-ink font-medium block">{item.degree}</span>
                    <span className="text-sm text-ink-soft">{item.institution}</span>
                  </div>
                  <div className="text-sm text-ink-soft sm:text-right flex-shrink-0">
                    <span className="block">{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Certificates + Languages */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <Eyebrow>Sertifikalar</Eyebrow>
              <h2 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-4">
                Sertifikalar
              </h2>
              <div className="divide-y divide-ink/10 border-t border-ink/10">
                {certificates.map((cert) => (
                  <div key={cert.title} className="py-3">
                    <span className="text-sm text-ink font-medium block">{cert.title}</span>
                    <span className="text-xs text-ink-soft">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={150}>
              <Eyebrow>Diller</Eyebrow>
              <h2 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-4">
                Yabancı Diller
              </h2>
              <div className="divide-y divide-ink/10 border-t border-ink/10">
                {languages.map((lang) => (
                  <div key={lang.name} className="py-3 flex items-center justify-between">
                    <span className="text-sm text-ink font-medium">{lang.name}</span>
                    <span className="text-xs text-ink-soft">{lang.level}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* International experience */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FadeIn>
              <Eyebrow>Uluslararası Deneyim</Eyebrow>
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-10">
                Yurt Dışı Deneyimler ve Stajlar
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {experience.map((exp, i) => (
                <FadeIn key={exp.org} delay={i * 80} className="border-t border-ink/10 pt-5">
                  <span className="text-ink font-medium block">{exp.org}</span>
                  <span className="text-sm text-mint block mb-2">{exp.role}</span>
                  <p className="text-sm text-ink-soft leading-relaxed mb-3">{exp.description}</p>
                  <span className="text-xs text-ink-soft block">{exp.period}</span>
                  <span className="text-xs text-ink-soft">{exp.location}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Travel map */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FadeIn>
              <Eyebrow>Gezdiği Yerler</Eyebrow>
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-10">
                Dünya Haritası
              </h2>
            </FadeIn>

            <FadeIn className="relative max-w-3xl mx-auto">
              <TravelMap />
              <div className="absolute top-0 right-0 sm:top-2 sm:right-2 bg-white rounded-2xl shadow-md px-4 py-2.5 text-right">
                <span className="font-serif text-2xl text-ink block leading-none">
                  {allVisited.length}
                </span>
                <span className="text-[10px] text-ink-soft uppercase tracking-[0.1em]">
                  yer · ~%{percent}
                </span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Turkey map */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FadeIn>
              <Eyebrow>Gezdiği Şehirler</Eyebrow>
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-10">
                Türkiye Haritası
              </h2>
            </FadeIn>
            <FadeIn className="relative max-w-2xl mx-auto">
              <TurkeyMapView visitedPlateCodes={visitedPlateCodes} />
              <div className="absolute top-0 right-0 sm:top-2 sm:right-2 bg-white rounded-2xl shadow-md px-4 py-2.5 text-right">
                <span className="font-serif text-2xl text-ink block leading-none">
                  {visitedProvinceNames.length}
                </span>
                <span className="text-[10px] text-ink-soft uppercase tracking-[0.1em]">şehir · 81 il</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-ink text-cream">
          <FadeIn className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2 className="font-serif text-2xl md:text-3xl leading-tight max-w-md">
              İlk randevu için bir mesaj yeterli
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
