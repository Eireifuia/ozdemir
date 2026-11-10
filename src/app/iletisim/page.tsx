import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import RevealText from '@/components/RevealText';
import WhatsAppForm from '@/components/WhatsAppForm';
import { Phone, Clock, ArrowUpRight } from 'lucide-react';
import { clinics } from '@/data/clinics';
import { instagramUrl } from '@/data/site';
import { siteJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'İletişim ve Randevu | Çocuk Diş Hekimi Dr. Ömer Özdemir',
  description:
    'Bakırköy (Avrupa Yakası) ve Acıbadem/Üsküdar (Anadolu Yakası) kliniklerinin adres, telefon, WhatsApp ve çalışma saatleri. Çocuk diş hekimi Dr. Ömer Özdemir için randevu bilgileri.',
  alternates: { canonical: '/iletisim' },
};

const hours = [
  { day: 'Pazartesi – Cuma', value: '10:00 – 19:00' },
  { day: 'Cumartesi', value: '10:00 – 17:00' },
  { day: 'Pazar', value: 'Kapalıdır' },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="#25D366"
        d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.353.615 4.646 1.784 6.665L2.667 29.333l6.83-1.756a13.27 13.27 0 006.507 1.706h.006c7.363 0 13.333-5.97 13.333-13.333 0-3.56-1.386-6.907-3.903-9.424a13.246 13.246 0 00-9.436-3.86z"
      />
      <path
        fill="#fff"
        d="M12.13 9.44c-.24-.534-.492-.545-.72-.554-.187-.008-.4-.007-.614-.007-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.213 3.548 5.467 4.831 2.703 1.066 3.253.854 3.84.801.587-.053 1.893-.774 2.16-1.52.267-.747.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373-.32-.16-1.893-.934-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.352-.499-2.576-1.591-.952-.849-1.595-1.898-1.782-2.218-.187-.32-.02-.493.14-.652.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.706-1.744-.988-2.373z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  const gradientId = 'instagram-gradient';
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InfoLabel({ children }: { children: React.ReactNode }) {
  return <span className="block text-xs uppercase tracking-[0.15em] text-ink-soft mb-2">{children}</span>;
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd()) }} />
      <main id="icerik">
        <section className="bg-ink text-cream">
          <FadeIn className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-mint-light mb-4">
              İletişim
            </span>
            <h1 className="font-serif font-light text-4xl md:text-5xl leading-tight max-w-xl">
              <RevealText text="Gülüşe giden ilk adım" />
            </h1>
            <p className="text-cream/65 leading-relaxed mt-4 max-w-md">
              Randevu ve sorularınız için iletişime geçiniz.
            </p>
          </FadeIn>
        </section>

        {/* Clinics */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <FadeIn className="mb-10">
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-mint mb-4">
              Klinikler
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
              İki yakada iki klinik
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {clinics.map((clinic, i) => (
              <FadeIn
                key={clinic.id}
                delay={i * 100}
                className="bg-white rounded-3xl border border-ink/5 overflow-hidden hover:border-mint/30 transition-colors"
              >
                <div className="relative h-56">
                  <a
                    href={clinic.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-white text-ink text-xs font-medium px-3.5 py-2 rounded-full shadow-md hover:bg-mint-light transition-colors"
                  >
                    Haritada Görüntüleyiniz <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <iframe
                    src={clinic.mapEmbedSrc}
                    title={`${clinic.name} konumu`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
                <div className="p-6">
                  <InfoLabel>{clinic.side}</InfoLabel>
                  <h3 className="font-serif text-lg text-ink mb-2">{clinic.name}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed mb-4">{clinic.address}</p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a
                      href={clinic.phoneHref}
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-mint transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {clinic.phone}
                    </a>
                    <a
                      href={clinic.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-mint transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 md:px-8 pb-16 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left column: info cards */}
            <FadeIn direction="left" className="space-y-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-3xl border border-ink/5 p-6 hover:border-mint/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream-alt flex-shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-ink font-medium block">Instagram&apos;da Takip Ediniz</span>
                    <span className="text-sm text-ink-soft">@omertarikozdemir</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-soft" />
              </a>

              <div className="bg-white rounded-3xl border border-ink/5 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-mint-light text-mint flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <InfoLabel>Çalışma saatleri</InfoLabel>
                </div>
                <div className="divide-y divide-ink/10 pl-14 -mt-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between py-2.5 text-sm">
                      <span className="text-ink-soft">{h.day}</span>
                      <span className="text-ink font-medium">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right column: message form */}
            <FadeIn direction="right" delay={150}>
              <div className="bg-white rounded-3xl border border-ink/5 p-6 md:p-8 h-full">
                <h2 className="font-serif text-xl text-ink mb-1">Mesaj gönderiniz</h2>
                <p className="text-sm text-ink-soft mb-6">
                  Kliniği seçip kısa mesajınızı yazdığınızda WhatsApp sohbeti hazır metinle açılmaktadır.
                </p>
                <WhatsAppForm />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
