import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, MessageCircle, MapPin, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';

const hours = [
  { day: 'Pazartesi – Cuma', value: '10:00 – 18:00' },
  { day: 'Cumartesi', value: '10:00 – 17:00' },
  { day: 'Pazar', value: 'Kapalı' },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
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
      <main>
        <section className="bg-ink text-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-mint-light mb-4">
              İletişim
            </span>
            <h1 className="font-serif font-light text-4xl md:text-5xl leading-tight max-w-xl">
              Gülüşe giden ilk adım
            </h1>
            <p className="text-cream/65 leading-relaxed mt-4 max-w-md">
              Randevu ve sorularınız için bize ulaşın. En kısa sürede size dönüş yapacağız.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left column: info cards */}
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:+905538885444"
                  className="bg-white rounded-3xl border border-ink/5 p-6 hover:border-mint/30 transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-mint-light text-mint mb-4">
                    <Phone className="w-4 h-4" />
                  </span>
                  <InfoLabel>Telefon</InfoLabel>
                  <span className="text-ink font-medium">0553 888 54 44</span>
                </a>
                <a
                  href="https://wa.me/905538885444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl border border-ink/5 p-6 hover:border-mint/30 transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-mint-light text-mint mb-4">
                    <MessageCircle className="w-4 h-4" />
                  </span>
                  <InfoLabel>WhatsApp</InfoLabel>
                  <span className="text-ink font-medium">WhatsApp&apos;tan Yazın</span>
                </a>
              </div>

              <div className="bg-white rounded-3xl border border-ink/5 p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-mint-light text-mint flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <InfoLabel>Adres</InfoLabel>
                    <span className="text-ink font-medium block mb-2">
                      Osmaniye, Ümraniye Sk. No:2/B, 34146 Bakırköy/İstanbul
                    </span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=%C3%87ocuk+Di%C5%9F+Hekimi+%C3%96mer+Tar%C4%B1k+%C3%96zdemir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-mint hover:text-ink transition-colors"
                    >
                      Yol Tarifi Al <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-ink/5 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-mint-light text-mint flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <InfoLabel>Çalışma Saatleri</InfoLabel>
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

              <a
                href="https://www.instagram.com/omertarikozdemir?igsh=MXRkanZremxtdWdkZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-3xl border border-ink/5 p-6 hover:border-mint/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-mint-light text-mint flex-shrink-0">
                    <InstagramIcon className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-ink font-medium block">Instagram&apos;da Takip Edin</span>
                    <span className="text-sm text-ink-soft">@omertarikozdemir</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-soft" />
              </a>
            </div>

            {/* Right column: map + message */}
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-ink/5 h-72 lg:h-[21rem]">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=%C3%87ocuk+Di%C5%9F+Hekimi+%C3%96mer+Tar%C4%B1k+%C3%96zdemir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-white text-ink text-xs font-medium px-3.5 py-2 rounded-full shadow-md hover:bg-mint-light transition-colors"
                >
                  Haritada Aç <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.018158044864!2d28.878822776592294!3d40.99121347930272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbfba149182f%3A0xe4a47a5da9b502cf!2s%C3%87ocuk%20Di%C5%9F%20Hekimi%20%C3%96mer%20Tar%C4%B1k%20%C3%96zdemir!5e0!3m2!1str!2str!4v1716462584123!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Klinik Konumu"
                ></iframe>
              </div>

              <div className="bg-white rounded-3xl border border-ink/5 p-6 md:p-8">
                <h2 className="font-serif text-xl text-ink mb-1">Mesaj Bırakın</h2>
                <p className="text-sm text-ink-soft mb-5">
                  Form yakında aktif olacak. Şimdilik bize telefon veya WhatsApp&apos;tan ulaşabilirsiniz.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Adınız"
                    disabled
                    className="w-full rounded-xl border border-ink/10 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/70 disabled:cursor-not-allowed"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon numaranız"
                    disabled
                    className="w-full rounded-xl border border-ink/10 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/70 disabled:cursor-not-allowed"
                  />
                </div>
                <textarea
                  placeholder="Mesajınız"
                  disabled
                  rows={3}
                  className="w-full rounded-xl border border-ink/10 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/70 disabled:cursor-not-allowed mb-4 resize-none"
                />
                <button
                  disabled
                  className="rounded-md bg-ink/40 text-cream text-sm font-medium px-6 py-3 cursor-not-allowed"
                >
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
