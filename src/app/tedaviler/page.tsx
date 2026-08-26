import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TreatmentGuides from '@/components/TreatmentGuides';
import Image from 'next/image';
import Link from 'next/link';

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
      <main>
        {/* Hero */}
        <section className="bg-ink text-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <Eyebrow tone="dark">Tedavilerimiz</Eyebrow>
            <h1 className="font-serif font-light text-4xl md:text-5xl leading-tight max-w-2xl">
              Tedaviler
            </h1>
            <p className="text-cream/65 leading-relaxed mt-4 max-w-lg">
              Tedaviler ve uygulama yöntemleri hakkında bilgiler.
            </p>
          </div>
        </section>

        {/* VR-assisted treatment */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>VR Destekli Tedavi</Eyebrow>
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-4">
                Korkuyu unutturan bir gözlük: Meta Quest 3
              </h2>
              <p className="text-ink-soft leading-relaxed">
                Kliniğimizde Meta Quest 3 var. İşlem sırasında küçük hastalarımıza takıyoruz;
                onlar sanal bir dünyada gezerken biz işimizi rahatça yapıyoruz. Dişçi koltuğu
                artık korkulan bir yer değil, macera başlangıcı.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream-alt">
              <Image src="/Vr.png" alt="VR gözlükle diş tedavisi" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* Detailed guides */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="max-w-2xl mb-10">
              <Eyebrow>Merak Edilenler</Eyebrow>
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-4">
                Ailelerin en çok sorduğu sorular
              </h2>
              <p className="text-ink-soft leading-relaxed">
                Çocuğunuzun diş sağlığıyla ilgili merak ettiğiniz konuları detaylıca ele aldık.
                Başlığa tıklayarak açabilirsiniz.
              </p>
            </div>
            <TreatmentGuides />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-ink text-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2 className="font-serif text-2xl md:text-3xl leading-tight max-w-md">
              Sağlıklı gülüşler için randevu alın
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
