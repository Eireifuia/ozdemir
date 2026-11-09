import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronDown, MapPin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import RevealText from '@/components/RevealText';
import TreatmentVisual from '@/components/TreatmentVisual';
import LightboxTrigger from '@/components/LightboxTrigger';
import { clinics } from '@/data/clinics';
import { getTreatment, treatmentCategories, treatments } from '@/data/treatments';
import { treatmentGuides } from '@/data/treatmentGuides';
import { contentUpdatedLabel } from '@/data/site';
import { breadcrumbJsonLd } from '@/lib/jsonLd';

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  return {
    title: treatment.seoTitle,
    description: treatment.metaDescription,
    keywords: treatment.keywords,
    alternates: { canonical: `/tedaviler/${treatment.slug}` },
    openGraph: {
      title: treatment.seoTitle,
      description: treatment.metaDescription,
      ...(treatment.image ? { images: [treatment.image] } : {}),
      locale: 'tr_TR',
      type: 'article',
    },
  };
}

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

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const hasStepImages = treatment.steps.some((s) => s.image);
  const stepLightbox = treatment.steps
    .filter((s): s is typeof s & { image: string } => Boolean(s.image))
    .map((s) => ({ src: s.image, alt: s.imageAlt ?? s.title, caption: s.title }));
  const categoryLabel = treatmentCategories.find((c) => c.id === treatment.category)?.label;
  // Önce aynı kategoriden, sonra diğerlerinden 3 öneri
  const others = [
    ...treatments.filter((t) => t.slug !== treatment.slug && t.category === treatment.category),
    ...treatments.filter((t) => t.slug !== treatment.slug && t.category !== treatment.category),
  ].slice(0, 3);
  const relatedGuides = treatmentGuides.filter((g) => treatment.relatedGuideIds.includes(g.id));

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: treatment.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Ana Sayfa', path: '/' },
              { name: 'Tedaviler', path: '/tedaviler' },
              { name: treatment.title, path: `/tedaviler/${treatment.slug}` },
            ])
          ),
        }}
      />
      <main id="icerik">
        {/* Hero */}
        <section className="bg-ink text-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
            <FadeIn direction="left">
              <nav aria-label="Konum" className="text-xs text-cream/55 mb-6 flex flex-wrap gap-2">
                <Link href="/tedaviler" className="hover:text-cream transition-colors">
                  Tedaviler
                </Link>
                <span aria-hidden>/</span>
                <span className="text-cream/80">{treatment.title}</span>
              </nav>
              <Eyebrow tone="dark">{categoryLabel}</Eyebrow>
              <h1 className="font-serif font-light text-3xl md:text-5xl leading-tight mb-5">
                <RevealText text={treatment.title} />
              </h1>
              <p className="text-cream/70 leading-relaxed max-w-lg mb-8">{treatment.summary}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="rounded-full bg-cream text-ink text-sm font-medium px-7 py-3.5 hover:bg-mint-light transition-colors"
                >
                  Randevu Alınız
                </Link>
                <Link
                  href="/tedaviler"
                  className="rounded-full border border-cream/25 text-cream text-sm font-medium px-7 py-3.5 hover:bg-cream/10 transition-colors"
                >
                  Tüm Tedaviler
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={150} className="justify-self-center w-full">
              <TreatmentVisual treatment={treatment} variant="hero" priority />
            </FadeIn>
          </div>
        </section>

        {/* Intro + sections */}
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FadeIn className="space-y-5 mb-14">
              {treatment.intro.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'text-lg text-ink leading-relaxed'
                      : 'text-ink-soft leading-relaxed'
                  }
                >
                  {p}
                </p>
              ))}
            </FadeIn>

            <div className="space-y-14">
              {treatment.sections.map((section) => (
                <FadeIn key={section.heading}>
                  <h2 className="font-serif text-2xl text-ink leading-tight mb-5">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs?.map((p, i) => (
                      <p key={i} className="text-ink-soft leading-relaxed">
                        {p}
                      </p>
                    ))}
                    {section.items && (
                      <ul className="space-y-2.5">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-ink-soft leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-mint mt-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
            <aside className="mt-16 rounded-2xl bg-cream-alt border border-ink/5 px-6 py-5 text-sm leading-relaxed">
              <p className="text-ink-soft mb-3">
                Bu sayfa genel bilgilendirme amaçlıdır; kişiye özel tanı veya tedavi önerisi yerine geçmez.
                Çocuğunuzun durumu için muayene gerekir.
              </p>
              <p className="text-ink">
                <span className="font-medium">Yazar:</span> Dr. Ömer Özdemir, çocuk diş hekimi
                <span aria-hidden className="mx-2 text-ink-soft">·</span>
                <span className="font-medium">İçerik son gözden geçirme:</span> {contentUpdatedLabel}
              </p>
            </aside>
          </div>
        </section>

        {/* Process */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FadeIn className="max-w-2xl mb-12">
              <Eyebrow>{treatment.stepsEyebrow ?? 'Süreç'}</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                {treatment.stepsHeading ?? 'Randevuda neler oluyor?'}
              </h2>
            </FadeIn>
            {hasStepImages ? (
              <div className="space-y-16 md:space-y-24">
                {treatment.steps.map((step, i) => {
                  const imageFirst = i % 2 === 0;
                  return (
                    <div
                      key={step.title}
                      className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                    >
                      <FadeIn
                        direction={imageFirst ? 'left' : 'right'}
                        className={imageFirst ? '' : 'md:order-2'}
                      >
                        {step.image ? (
                          <LightboxTrigger
                            images={stepLightbox}
                            index={stepLightbox.findIndex((l) => l.src === step.image)}
                            className="block w-full rounded-3xl overflow-hidden bg-white border border-ink/5 shadow-md hover:shadow-xl transition-shadow duration-300"
                          >
                            <Image
                              src={step.image}
                              alt={step.imageAlt ?? step.title}
                              width={1600}
                              height={900}
                              sizes="(min-width: 768px) 45vw, 90vw"
                              className="w-full h-auto"
                            />
                          </LightboxTrigger>
                        ) : (
                          <div className="rounded-3xl bg-white border border-ink/5 aspect-[4/3] flex items-center justify-center">
                            <span className="font-serif text-6xl text-mint-light">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                          </div>
                        )}
                      </FadeIn>
                      <FadeIn
                        direction={imageFirst ? 'right' : 'left'}
                        delay={150}
                        className={imageFirst ? '' : 'md:order-1'}
                      >
                        <span className="font-serif text-4xl text-mint-light block mb-3">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-serif text-2xl text-ink mb-3 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-ink-soft leading-relaxed max-w-md">{step.text}</p>
                      </FadeIn>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {treatment.steps.map((step, i) => (
                  <FadeIn
                    key={step.title}
                    delay={i * 80}
                    className="bg-white rounded-3xl border border-ink/5 p-6"
                  >
                    <span className="font-serif text-3xl text-mint-light block mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-lg text-ink mb-2 leading-snug">{step.title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed">{step.text}</p>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FadeIn className="mb-10">
              <Eyebrow>Sık Sorulan Sorular</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                Merak edilenler
              </h2>
            </FadeIn>
            <FadeIn delay={100} className="divide-y divide-ink/10 border-t border-ink/10">
              {treatment.faq.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex items-center justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-serif text-lg text-ink">{item.q}</span>
                    <ChevronDown className="w-5 h-5 text-ink-soft flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="text-ink-soft leading-relaxed mt-4 max-w-2xl">{item.a}</p>
                </details>
              ))}
            </FadeIn>
            <Link
              href="/sss"
              className="inline-block mt-6 text-sm font-medium text-mint hover:text-ink transition-colors"
            >
              Tüm sık sorulan sorular →
            </Link>

            {relatedGuides.length > 0 && (
              <FadeIn className="mt-14">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-mint mb-4">
                  İlgili Yazılar
                </h3>
                <ul className="space-y-3">
                  {relatedGuides.map((g) => (
                    <li key={g.id}>
                      <Link
                        href={`/tedaviler#${g.id}`}
                        className="inline-flex items-start gap-2 text-ink hover:text-mint transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>{g.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}
          </div>
        </section>

        {/* Clinics CTA */}
        <section className="bg-ink text-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <FadeIn className="max-w-2xl mb-10">
              <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-3">
                İlk randevu için bir mesaj yeterli
              </h2>
              <p className="text-cream/65 leading-relaxed">
                Hangi yakada olursanız olun, size yakın kliniği arayabilir ya da WhatsApp&apos;tan
                yazabilirsiniz.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-5">
              {clinics.map((clinic, i) => (
                <FadeIn
                  key={clinic.id}
                  delay={i * 100}
                  className="rounded-3xl border border-cream/15 p-6"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-mint-light block mb-2">
                    {clinic.side}
                  </span>
                  <h3 className="font-serif text-xl mb-2">{clinic.name}</h3>
                  <p className="flex items-start gap-2 text-sm text-cream/65 leading-relaxed mb-5">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {clinic.address}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={clinic.phoneHref}
                      className="inline-flex items-center gap-2 rounded-full bg-cream text-ink text-sm font-medium px-5 py-2.5 hover:bg-mint-light transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {clinic.phone}
                    </a>
                    <a
                      href={clinic.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-cream/25 text-cream text-sm font-medium px-5 py-2.5 hover:bg-cream/10 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Other treatments */}
        <section className="bg-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FadeIn className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div>
                <Eyebrow>Diğer Tedaviler</Eyebrow>
                <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                  Bunlara da göz atınız
                </h2>
              </div>
              <Link
                href="/tedaviler"
                className="text-sm font-medium text-mint hover:text-ink transition-colors"
              >
                Tüm Tedaviler →
              </Link>
            </FadeIn>
            <div className="grid sm:grid-cols-3 gap-5">
              {others.map((t, i) => (
                <FadeIn key={t.slug} delay={i * 80}>
                  <Link
                    href={`/tedaviler/${t.slug}`}
                    className="block h-full bg-white rounded-3xl border border-ink/5 p-6 hover:border-mint/30 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="font-serif text-lg text-ink mb-2 leading-snug">{t.title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed mb-4">{t.summary}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-mint">
                      Detaylı Bilgi <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
