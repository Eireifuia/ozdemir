import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sayfa bulunamadı | Çocuk Diş Hekimi Dr. Ömer Özdemir',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <main id="icerik" className="flex-1 flex items-center">
        <div className="max-w-2xl mx-auto px-4 md:px-8 py-24 text-center">
          <span className="block text-xs font-medium uppercase tracking-[0.2em] text-mint mb-4">404</span>
          <h1 className="font-serif font-light text-3xl md:text-5xl text-ink leading-tight mb-4">
            Aradığınız sayfa bulunamadı
          </h1>
          <p className="text-ink-soft leading-relaxed mb-8">
            Bağlantı değişmiş ya da sayfa kaldırılmış olabilir. Ana sayfaya dönebilir ya da tedaviler sayfasına
            göz atabilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-ink text-cream text-sm font-medium px-7 py-3.5 hover:bg-mint transition-colors"
            >
              Ana Sayfaya Dönünüz
            </Link>
            <Link
              href="/tedaviler"
              className="rounded-full border border-ink/20 text-ink text-sm font-medium px-7 py-3.5 hover:bg-ink/5 transition-colors"
            >
              Tedavilere Göz Atınız
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
