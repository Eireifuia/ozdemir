import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TravelMap from '@/components/TravelMap';
import TurkeyMapView from '@/components/TurkeyMapView';
import { education, certificates, languages, experience } from '@/data/cv';
import { visitedByRegion, allVisited, worldCountryCount } from '@/data/travel';
import { provincePlateCodes, visitedProvinceNames, visitedByTurkishRegion } from '@/data/turkeyProvinces';

const visitedPlateCodes = visitedProvinceNames.map((name) => provincePlateCodes[name]);

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

export default function OzgecmisPage() {
  const percent = Math.round((allVisited.length / worldCountryCount) * 100);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-ink text-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow tone="dark">Özgeçmiş</Eyebrow>
              <h1 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-4">
                Dr. Ömer Özdemir
              </h1>
              <p className="text-cream/70 text-sm uppercase tracking-[0.15em] mb-6">
                DDS, PhD
              </p>
              <p className="text-cream/65 leading-relaxed max-w-md">
                Çocuk diş hekimi ve İstanbul Üniversitesi Diş Hekimliği Fakültesi&apos;nde
                Pedodonti doktorasını tamamladı. Belçika&apos;da Erasmus+ ile, Japonya&apos;da
                Kyushu Üniversitesi&apos;nde araştırmacı olarak uluslararası deneyim kazandı.
                Tek bir hedefi var: dünyanın dört bir yanındaki çocukları güldürmek. 💙
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-cream-alt">
                <Image src="/drphoto.jpg" alt="Dr. Ömer Özdemir" fill style={{ objectFit: 'cover' }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <Eyebrow>Hakkında</Eyebrow>
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-6">
                Klinik deneyim, bilimsel araştırmayla bir arada
              </h2>
              <div className="space-y-4">
                <p className="text-ink-soft leading-relaxed">
                  Bugüne kadar 7.000&apos;den fazla hastaya klinik tedavi uyguladı, bu süreçte
                  hücre kültürü ve biyolojisi, veri analizi ve in vivo hayvan deneyleri
                  alanlarında laboratuvar deneyimi de kazandı.
                </p>
                <p className="text-ink-soft leading-relaxed">
                  Papillon-Lèfevre ve Gorlin-Goltz sendromu gibi nadir vakaları kongrelerde
                  poster olarak sundu, yapay zeka sohbet botlarının diş sağlığı sorularına
                  verdiği yanıtların doğruluğunu inceleyen araştırmalar yayımladı. Klinikte
                  karşılaştığı her vaka, laboratuvarda peşine düştüğü yeni bir soruya dönüşüyor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
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
          </div>
        </section>

        {/* Certificates + Languages */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-16">
            <div>
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
            </div>
            <div>
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
            </div>
          </div>
        </section>

        {/* International experience */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <Eyebrow>Uluslararası Deneyim</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-10">
              Yurt Dışı Deneyimler ve Stajlar
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {experience.map((exp) => (
                <div key={exp.org} className="border-t border-ink/10 pt-5">
                  <span className="text-ink font-medium block">{exp.org}</span>
                  <span className="text-sm text-mint block mb-2">{exp.role}</span>
                  <p className="text-sm text-ink-soft leading-relaxed mb-3">{exp.description}</p>
                  <span className="text-xs text-ink-soft block">{exp.period}</span>
                  <span className="text-xs text-ink-soft">{exp.location}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel map */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <Eyebrow>Gezdiğim Yerler</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-10">
              Dünya Haritam
            </h2>

            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
              <div className="relative">
                <TravelMap />
                <div className="absolute top-0 right-0 sm:top-2 sm:right-2 bg-white rounded-2xl shadow-md px-4 py-2.5 text-right">
                  <span className="font-serif text-2xl text-ink block leading-none">
                    {allVisited.length}
                  </span>
                  <span className="text-[10px] text-ink-soft uppercase tracking-[0.1em]">
                    yer · ~%{percent}
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                {visitedByRegion.map((group) => (
                  <div key={group.region}>
                    <h3 className="font-medium text-ink mb-3">{group.region}</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {group.places.map((place) => (
                        <li key={place.code} className="flex items-center gap-2 text-sm text-ink-soft">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`https://flagcdn.com/${place.code.toLowerCase()}.svg`}
                            alt=""
                            className="w-4 h-3 object-cover rounded-[2px] border border-ink/10 flex-shrink-0"
                          />
                          <span className="truncate">{place.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Turkey map */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <Eyebrow>Gezdiğim Şehirler</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-10">
              Türkiye Haritam
            </h2>
            <div className="grid lg:grid-cols-[0.85fr_1.4fr] gap-10 items-start">
              <div className="relative">
                <TurkeyMapView visitedPlateCodes={visitedPlateCodes} />
                <div className="absolute top-0 right-0 sm:top-2 sm:right-2 bg-white rounded-2xl shadow-md px-4 py-2.5 text-right">
                  <span className="font-serif text-2xl text-ink block leading-none">
                    {visitedProvinceNames.length}
                  </span>
                  <span className="text-[10px] text-ink-soft uppercase tracking-[0.1em]">şehir · 81 il</span>
                </div>
              </div>

              <div className="sm:columns-3 gap-x-6">
                {visitedByTurkishRegion.map((group) => (
                  <div key={group.region} className="break-inside-avoid mb-8">
                    <h3 className="font-medium text-ink mb-3">{group.region}</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {group.places.map((place) => (
                        <li key={place} className="text-sm text-ink-soft truncate">
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-ink text-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2 className="font-serif text-2xl md:text-3xl leading-tight max-w-md">
              Çocuğunuz için ilk adımı birlikte atalım
            </h2>
            <Link
              href="/contact"
              className="rounded-md bg-cream text-ink text-sm font-medium px-7 py-3.5 hover:bg-mint-light transition-colors flex-shrink-0"
            >
              İletişime Geçin
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
