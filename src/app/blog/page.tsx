import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import RevealText from '@/components/RevealText';
import { blogPosts } from '@/data/blogPosts';
import { kitchenPhotos } from '@/data/kitchenPhotos';

export const metadata: Metadata = {
  title: 'Blog | Dr. Ömer Özdemir',
  description: 'Dr. Ömer Özdemir’in seyahat, deneyim ve günlük yazıları.',
  alternates: { canonical: '/blog' },
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

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main id="icerik">
        {/* Hero */}
        <section className="bg-ink text-cream">
          <FadeIn className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
            <div className="max-w-2xl">
              <Eyebrow tone="dark">Blog</Eyebrow>
              <h1 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-6">
                <RevealText text="Kulübün faaliyet alanı" />
              </h1>
              <p className="text-cream/65 leading-relaxed">
                Gezip gördüklerini, okuduğu webtoonları ve aklından geçenleri buraya
                bırakıyor.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Blog posts */}
        <section className="bg-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <Eyebrow>Yazılar</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-10">
              Son Yazılar
            </h2>
            {blogPosts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-ink/5 p-10 text-center max-w-xl">
                <p className="text-ink-soft leading-relaxed">
                  Henüz bir yazı yok, yakında burada olacak.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, i) => (
                  <FadeIn key={post.slug} delay={i * 80}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-3xl border border-ink/5 overflow-hidden hover:border-mint/30 transition-colors"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-ink-soft mb-2">
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-serif text-lg text-ink mb-2 leading-snug">{post.title}</h3>
                      <p className="text-sm text-ink-soft leading-relaxed">{post.excerpt}</p>
                    </div>
                  </Link>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Kitchen photos */}
        <section className="bg-cream-alt">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FadeIn className="max-w-2xl mb-10">
              <Eyebrow>Mutfak</Eyebrow>
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                Ömer Özdemir Mutfağından Çıkanlar
              </h2>
            </FadeIn>
            {kitchenPhotos.length === 0 ? (
              <div className="bg-white rounded-3xl border border-ink/5 p-10 text-center max-w-xl">
                <p className="text-ink-soft leading-relaxed">
                  Henüz bir fotoğraf yok, yakında burada olacak.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {kitchenPhotos.map((photo, i) => (
                  <FadeIn
                    key={photo.id}
                    delay={i * 80}
                    className="group relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.caption ?? ''}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    {photo.caption && (
                      <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/70 to-transparent text-cream text-sm p-4 pt-8">
                        {photo.caption}
                      </span>
                    )}
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
