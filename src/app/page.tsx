import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star } from 'lucide-react';
import { getGoogleReviews, type GoogleReview } from '@/lib/googleReviews';

const fallbackReviews: GoogleReview[] = [
  {
    author: 'Talha',
    rating: 5,
    relativeTime: '11 ay önce',
    text: 'Dişçiye gitmek çoğu insan için kabus olabilir ama burası bence Netflix dizisi gibi; hem sürükleyici hem de bir sonraki bölümü merak ettiriyor. Hekimimiz hem eli hafif, hem de moral yükseltme konusunda profesyonel.',
  },
  {
    author: 'Tolga Rayyarkin',
    rating: 5,
    relativeTime: 'bir yıl önce',
    text: 'İki buçuk yaşında olan oğlumuzun neredeyse tüm dişleri lekelenmişti. Ömer Tarık Hocanın ilgili ve sevecen yaklaşımı sayesinde temizlik sürecini kolayca atlattık, kendisini herkese tavsiye ediyorum.',
  },
];

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

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  );
}

function ReviewAvatar({ src, name }: { src?: string; name: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={name} className="w-11 h-11 rounded-full object-cover flex-shrink-0" referrerPolicy="no-referrer" />;
  }
  return (
    <span className="w-11 h-11 rounded-full bg-mint-light text-mint flex items-center justify-center font-medium flex-shrink-0">
      {name.charAt(0).toUpperCase()}
    </span>
  );
}

export default async function Home() {
  const googleData = await getGoogleReviews();
  const reviews = googleData?.reviews ?? fallbackReviews;
  const rating = googleData?.rating ?? 5;
  const reviewCount = googleData?.reviewCount;

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-ink text-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
            <div className="max-w-2xl">
              <Eyebrow tone="dark">Dr. Ömer Özdemir</Eyebrow>
              <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.05] tracking-tight mb-6">
                Hayatı sevenler kulübü kurucu üyesi
              </h1>
              <p className="text-cream/65 leading-relaxed mb-10 max-w-md">
                Gündüzleri dişçi, geri kalan zamanda gezer, okur, yazar.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-md bg-cream text-ink text-sm font-medium px-7 py-3.5 hover:bg-mint-light transition-colors"
                >
                  İletişime Geçin
                </Link>
                <Link
                  href="/tedaviler"
                  className="rounded-md border border-cream/25 text-cream text-sm font-medium px-7 py-3.5 hover:bg-cream/10 transition-colors"
                >
                  Tedavileri İncele
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Journal teaser */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <div>
                <Eyebrow>Günlük</Eyebrow>
                <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                  Notlardan
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-medium text-mint hover:text-ink transition-colors flex-shrink-0"
              >
                Tüm Yazılar →
              </Link>
            </div>
            <div className="bg-cream-alt rounded-3xl border border-ink/5 p-10 text-center">
              <p className="text-ink-soft leading-relaxed">
                Henüz bir yazı yok, yakında burada olacak.
              </p>
            </div>
          </div>
        </section>

        {/* Personal note */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="max-w-2xl">
              <Eyebrow>Bir Not</Eyebrow>
              <p className="font-serif text-xl md:text-2xl text-ink leading-relaxed mb-4">
                Burası hem kliniğim hem de benim kişisel köşem. Diş hekimliğinin dışında kalan
                tarafımı da buradan takip edebilirsin.
              </p>
              <Link href="/ozgecmis" className="text-sm font-medium text-mint hover:text-ink transition-colors">
                Hikayem →
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28 grid md:grid-cols-[1.3fr_1fr] gap-16">
            <div>
              <Eyebrow>Hakkımızda</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-8">
                Her gülüşe özenle yaklaşıyoruz
              </h2>
              <div className="space-y-4 max-w-xl">
                <p className="text-ink-soft leading-relaxed">
                  Çocukların sağlıklı ve mutlu gülümsemeleri için çalışan bir çocuk diş
                  hekimiyim. Diş tedavisini korkulan bir şey değil, eğlenceli bir deneyime
                  dönüştürmek en sevdiğim şey!
                </p>
                <p className="text-ink-soft leading-relaxed">
                  İstanbul Üniversitesi Diş Hekimliği Fakültesi&apos;nden mezun oldum. Şu anda
                  Pedodonti (çocuk diş hekimliği) alanında doktora yapıyor ve çocuklara özel
                  tedaviler konusunda uzmanlaşıyorum.
                </p>
                <p className="text-ink-soft leading-relaxed">
                  Bilimi, deneyimi ve çocuklarla güçlü iletişimi birleştirerek; onların diş
                  sağlığına en konforlu, modern ve güvenli çözümleri sunmak için her gün
                  kendimi geliştirmeye devam ediyorum.
                </p>
              </div>
            </div>
            <div className="space-y-6 md:pt-16">
              <div className="border-t border-ink/10 pt-4">
                <span className="block text-xs uppercase tracking-[0.15em] text-ink-soft mb-1">Eğitim</span>
                <span className="text-ink font-medium">İstanbul Üniversitesi, Diş Hekimliği</span>
              </div>
              <div className="border-t border-ink/10 pt-4">
                <span className="block text-xs uppercase tracking-[0.15em] text-ink-soft mb-1">Unvan</span>
                <span className="text-ink font-medium">Diş Hekimi (Dr.)</span>
              </div>
              <div className="border-t border-ink/10 pt-4">
                <span className="block text-xs uppercase tracking-[0.15em] text-ink-soft mb-1">Konum</span>
                <span className="text-ink font-medium">Bakırköy, İstanbul</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="bg-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24">
            <Eyebrow>Vakalarımızdan</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-12">
              Gerçek tedavi süreçlerinden kareler
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {['/Picture1.png', '/Picture2.png', '/Picture3.jpg'].map((src) => (
                <div key={src} className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white">
                  <Image src={src} alt="Tedavi vakası" fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
              <div>
                <Eyebrow>Hasta Yorumları</Eyebrow>
                <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                  Ailelerimiz ne diyor?
                </h2>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=%C3%87ocuk+Di%C5%9F+Hekimi+%C3%96mer+Tar%C4%B1k+%C3%96zdemir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-white rounded-full pl-3 pr-4 py-2 border border-ink/10 hover:border-mint/30 transition-colors"
              >
                <GoogleLogo className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium text-ink">{rating.toFixed(1)}</span>
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </span>
                {typeof reviewCount === 'number' && (
                  <span className="text-xs text-ink-soft">({reviewCount})</span>
                )}
              </a>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 lg:h-[34rem]">
              <div className="space-y-4 lg:overflow-y-auto lg:pr-2 lg:h-full">
                {reviews.map((review) => (
                  <div key={review.author} className="bg-white rounded-2xl border border-ink/5 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <ReviewAvatar src={review.authorPhoto} name={review.author} />
                      <div className="min-w-0">
                        <span className="text-ink font-medium block truncate">{review.author}</span>
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-0.5">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-[#FBBC04] text-[#FBBC04]" />
                            ))}
                          </span>
                          <span className="text-xs text-ink-soft">{review.relativeTime}</span>
                        </div>
                      </div>
                      <GoogleLogo className="w-4 h-4 ml-auto flex-shrink-0" />
                    </div>
                    <p className="text-sm text-ink-soft leading-relaxed">{review.text}</p>
                    {review.googleMapsUri && (
                      <a
                        href={review.googleMapsUri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-xs font-medium text-mint hover:text-ink transition-colors"
                      >
                        Google&apos;da görüntüle →
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-ink/5 h-72 lg:h-full">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=%C3%87ocuk+Di%C5%9F+Hekimi+%C3%96mer+Tar%C4%B1k+%C3%96zdemir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-white text-ink text-xs font-medium px-3.5 py-2 rounded-full shadow-md hover:bg-mint-light transition-colors"
                >
                  <GoogleLogo className="w-3.5 h-3.5" />
                  Google&apos;da Görüntüle
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
              Randevu Al
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
