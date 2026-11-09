import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import RevealText from '@/components/RevealText';
import PhotoSlider from '@/components/PhotoSlider';
import { Star, Check, ArrowRight, Sparkles, Activity, Glasses, ShieldAlert, Moon, Smile, MapPin, Phone } from 'lucide-react';
import { getGoogleReviews, type GoogleReview } from '@/lib/googleReviews';
import { blogPosts } from '@/data/blogPosts';
import { clinicPhotos } from '@/data/clinicPhotos';
import { clinics } from '@/data/clinics';
import { siteDescription, siteTitle } from '@/data/site';
import { siteJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: '/' },
};

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

const valueProps = [
  {
    title: 'Çocuğa Özel Diş Hekimliği',
    description: 'Pedodonti alanındaki akademik çalışmalar klinik pratikle birlikte yürütülüyor. Her çocuk için ayrı bir tedavi planı hazırlanıyor.',
    href: '/hakkinda',
  },
  {
    title: 'İki Yakada Klinik',
    description: 'Avrupa Yakası\'nda Bakırköy, Anadolu Yakası\'nda Acıbadem. Hangi yakada olursanız olun, köprüyü geçmeden randevu bulunuyor.',
    href: '/iletisim',
  },
  {
    title: 'İlk Dişten Ergenliğe',
    description: 'Bebeklikteki ilk diş de, ergenlikteki diş teli merakı da aynı kapıdan giriyor. Her yaşın derdi ayrı, yaklaşımı da ayrı.',
    href: '/tedaviler',
  },
];

const treatments = [
  {
    icon: Sparkles,
    slug: 'cocuklarda-curuk-tedavisi',
    title: 'Çürük Tedavisi',
    description: 'Küçük ve yüzeysel çürüklerde koruyucu dolgu çoğu zaman yeterli oluyor. Kısa, rahat bir randevu.',
  },
  {
    icon: Activity,
    slug: 'cocuklarda-kanal-tedavisi',
    title: 'Kanal Tedavisi',
    description: 'Kanal tedavisi denince akla gelen korku çocuklarda geçerli değil. Doğru anestezi ile işlem hissedilmeden tamamlanıyor.',
  },
  {
    icon: Glasses,
    slug: 'vr-destekli-cocuk-dis-tedavisi',
    title: 'VR Destekli Tedavi',
    description: 'Meta Quest 3 gözlüğü takan çocuk bir anda başka bir dünyada. Diş hekimi koltuğu arka plana düşüyor.',
  },
  {
    icon: ShieldAlert,
    slug: 'cocuklarda-dis-travmasi',
    title: 'Diş Travması',
    description: 'Düşme, çarpma, kırılan ya da oynayan diş. İlk dakikalar önemli olduğu için hızlı müdahale gerekiyor.',
  },
  {
    icon: Moon,
    slug: 'cocuklarda-genel-anestezi-sedasyon',
    title: 'Genel Anestezi / Sedasyon',
    description: 'Çok sayıda işlem gereken ya da koltukta durmakta zorlanan küçük hastalar için güvenli ve kontrollü bir seçenek.',
  },
  {
    icon: Smile,
    slug: 'cocuklarda-erken-ortodontik-tedavi',
    title: 'Erken Ortodontik Müdahale',
    description: 'Bazı sorunlar süt dişi döneminde bile fark edilebiliyor. Erken bakılınca çoğu zaman basit bir apareyle çözülüyor.',
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

// Yorumcu fotoğrafları Google sunucularından yüklenirdi; ziyaretçi verisi Google'a gitmesin diye
// yalnızca baş harf gösterilir.
function ReviewAvatar({ name }: { name: string }) {
  return (
    <span
      aria-hidden
      className="w-11 h-11 rounded-full bg-mint-light/40 text-mint flex items-center justify-center font-medium flex-shrink-0"
    >
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd()) }} />
      <main id="icerik">
        {/* Hero */}
        <section className="bg-ink text-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-32 md:pb-40">
            <FadeIn className="max-w-2xl">
              <Eyebrow tone="dark">Çocuk Diş Hekimi Dr. Ömer Özdemir</Eyebrow>
              <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.05] tracking-tight mb-6">
                <RevealText text="Çocuklar için korkusuz diş hekimliği" />
              </h1>
              <p className="text-cream/65 leading-relaxed mb-10 max-w-md">
                Diş hekimi koltuğu, çocuğunuz için korkulacak değil, merak edilecek bir yer olabilir.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="rounded-full bg-cream text-ink text-sm font-medium px-7 py-3.5 hover:bg-mint-light transition-colors"
                >
                  İletişime Geçiniz
                </Link>
                <Link
                  href="/tedaviler"
                  className="rounded-full border border-cream/25 text-cream text-sm font-medium px-7 py-3.5 hover:bg-cream/10 transition-colors"
                >
                  Tedavileri İnceleyiniz
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Value props — overlapping the hero's bottom edge */}
        <div className="relative -mt-20 md:-mt-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-4 md:gap-6">
            {valueProps.map((item, i) => (
              <FadeIn
                key={item.title}
                delay={i * 100}
                className="bg-white rounded-2xl shadow-lg border border-ink/5 p-6"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-mint-light text-mint mb-4">
                  <Check className="w-4 h-4" />
                </span>
                <h3 className="font-serif text-lg text-ink mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-3">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-medium text-mint hover:text-ink transition-colors"
                >
                  Detaylı Bilgi <ArrowRight className="w-3 h-3" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* About */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16 md:pt-20 pb-20 md:pb-28 grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center">
            <FadeIn direction="left" className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-cream-alt">
              <Image src="/doctor/dr-gri.jpg" alt="Dr. Ömer Özdemir" fill sizes="(min-width: 768px) 45vw, 100vw" style={{ objectFit: 'cover', objectPosition: 'center 25%' }} />
            </FadeIn>
            <FadeIn direction="right" delay={150}>
              <Eyebrow>Hakkında</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-6">
                Her gülüşe özenle yaklaşan bir hekim
              </h2>
              <div className="space-y-4">
                <p className="text-ink-soft leading-relaxed">
                  Dr. Ömer Özdemir, çocuk diş hekimi. Amacı basit: diş hekimine gitmek,
                  çocukların en korkulan olaylar listesinden çıksın.
                </p>
                <p className="text-ink-soft leading-relaxed">
                  İstanbul Üniversitesi Diş Hekimliği Fakültesi&apos;nden mezun oldu, aynı
                  üniversitede Pedodonti (çocuk diş hekimliği) alanında akademik
                  çalışmalarını yürütüyor.
                </p>
                <p className="text-ink-soft leading-relaxed">
                  Mesai dışında gezer, okur, yazar. Hayatı sevenler kulübünün kurucu üyesi
                  olması boşuna değil.
                </p>
              </div>
              <Link
                href="/hakkinda"
                className="inline-block mt-8 rounded-full bg-ink text-cream text-sm font-medium px-7 py-3.5 hover:bg-mint transition-colors"
              >
                Özgeçmişi İnceleyiniz
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Featured treatments */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
            <FadeIn className="max-w-2xl mb-12">
              <Eyebrow>Tedaviler</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                Öne Çıkan Tedaviler
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((t, i) => (
                <FadeIn
                  key={t.title}
                  delay={i * 80}
                  className="bg-white rounded-3xl border border-ink/5 p-6 hover:border-mint/30 hover:shadow-md transition-all duration-300"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-mint-light text-mint mb-4">
                    <t.icon className="w-4 h-4" />
                  </span>
                  <h3 className="font-serif text-lg text-ink mb-2">{t.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed mb-4">{t.description}</p>
                  <Link
                    href={`/tedaviler/${t.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-mint hover:text-ink transition-colors"
                  >
                    Detaylı Bilgi <ArrowRight className="w-3 h-3" />
                  </Link>
                </FadeIn>
              ))}
            </div>
            <FadeIn className="mt-10 text-center">
              <Link
                href="/tedaviler"
                className="inline-block rounded-full bg-ink text-cream text-sm font-medium px-7 py-3.5 hover:bg-mint transition-colors"
              >
                Tüm Tedavileri İnceleyiniz
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Clinics */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
            <FadeIn className="max-w-2xl mb-12">
              <Eyebrow>Klinikler</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                İki yakada, iki klinik
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {clinics.map((clinic, i) => (
                <FadeIn
                  key={clinic.id}
                  delay={i * 100}
                  className="bg-cream-alt rounded-3xl border border-ink/5 p-6 md:p-8"
                >
                  <span className="block text-xs font-medium uppercase tracking-[0.2em] text-mint mb-3">
                    {clinic.side}
                  </span>
                  <h3 className="font-serif text-xl text-ink mb-3">{clinic.name}</h3>
                  <p className="flex items-start gap-2 text-sm text-ink-soft leading-relaxed mb-6">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden />
                    {clinic.address}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={clinic.phoneHref}
                      className="inline-flex items-center gap-2 rounded-full bg-ink text-cream text-sm font-medium px-6 py-3 min-h-11 hover:bg-mint transition-colors"
                    >
                      <Phone className="w-4 h-4" aria-hidden />
                      {clinic.phone}
                    </a>
                    <a
                      href={clinic.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-ink/20 text-ink text-sm font-medium px-6 py-3 min-h-11 hover:border-mint hover:text-mint transition-colors"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={clinic.mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-ink/20 text-ink text-sm font-medium px-6 py-3 min-h-11 hover:border-mint hover:text-mint transition-colors"
                    >
                      Haritada Açınız
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
            <FadeIn className="flex flex-wrap items-end justify-between gap-6 mb-14">
              <div>
                <Eyebrow>Hasta Yorumları</Eyebrow>
                <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                  Aileler ne diyor?
                </h2>
                <p className="text-xs text-ink-soft mt-2">
                  (Google&apos;dan anlık olarak alınmaktadır)
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=%C3%87ocuk+Di%C5%9F+Hekimi+%C3%96mer+Tar%C4%B1k+%C3%96zdemir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-cream-alt rounded-full pl-3 pr-4 py-2 border border-ink/10 hover:border-mint/30 transition-colors"
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
            </FadeIn>
            <div className="grid lg:grid-cols-2 gap-6 lg:h-[34rem]">
              <div className="space-y-4 lg:overflow-y-auto lg:pr-2 lg:h-full">
                {reviews.map((review, i) => (
                  <FadeIn
                    key={review.author}
                    delay={i * 80}
                    className="bg-cream-alt rounded-2xl border border-ink/5 p-6 hover:shadow-md hover:border-mint/20 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <ReviewAvatar name={review.author} />
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
                        Google&apos;da görüntüleyiniz →
                      </a>
                    )}
                  </FadeIn>
                ))}
              </div>

              <FadeIn direction="right" className="relative rounded-3xl overflow-hidden border border-ink/5 h-72 lg:h-full">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=%C3%87ocuk+Di%C5%9F+Hekimi+%C3%96mer+Tar%C4%B1k+%C3%96zdemir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-white text-ink text-xs font-medium px-3.5 py-2 rounded-full shadow-md hover:bg-mint-light transition-colors"
                >
                  <GoogleLogo className="w-3.5 h-3.5" />
                  Google&apos;da Görüntüleyiniz
                </a>
                <iframe
                  src={clinics[0].mapEmbedSrc}
                  title={`${clinics[0].name} konumu`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Clinic gallery */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24">
            <FadeIn>
              <Eyebrow>Klinik</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-12">
                Klinik Galerisi
              </h2>
            </FadeIn>
            {clinicPhotos.length === 0 ? (
              <FadeIn delay={100} className="bg-white rounded-3xl border border-ink/5 p-10 text-center max-w-xl">
                <p className="text-ink-soft leading-relaxed">
                  Fotoğraflar yakında burada olacak.
                </p>
              </FadeIn>
            ) : (
              <PhotoSlider photos={clinicPhotos} />
            )}
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
              Randevu Alınız
            </Link>
          </FadeIn>
        </section>

        {/* Journal teaser */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <FadeIn className="flex flex-wrap items-end justify-between gap-6 mb-8">
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
            </FadeIn>
            {blogPosts.length === 0 ? (
              <FadeIn delay={100} className="bg-cream-alt rounded-3xl border border-ink/5 p-10 text-center">
                <p className="text-ink-soft leading-relaxed">
                  Henüz bir yazı yok, yakında burada olacak.
                </p>
              </FadeIn>
            ) : (
              <FadeIn delay={100}>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="group flex flex-col sm:flex-row items-stretch bg-cream-alt rounded-3xl border border-ink/5 overflow-hidden hover:border-mint/30 transition-colors"
                >
                  <div className="relative sm:w-64 aspect-[4/3] sm:aspect-auto flex-shrink-0">
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-xs text-ink-soft mb-2">{blogPosts[0].date}</span>
                    <h3 className="font-serif text-xl text-ink mb-2 leading-snug">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-sm text-ink-soft leading-relaxed">{blogPosts[0].excerpt}</p>
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
