import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ViewCounter from '@/components/ViewCounter';
import { blogPosts } from '@/data/blogPosts';

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
      <main>
        {/* Hero */}
        <section className="bg-ink text-cream">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
            <div className="max-w-2xl">
              <Eyebrow tone="dark">Blog</Eyebrow>
              <h1 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-6">
                Kulübün faaliyet alanı
              </h1>
              <p className="text-cream/65 leading-relaxed">
                Gezip gördüklerimi, okuduğum webtoonları ve aklımdan geçenleri buraya
                bırakıyorum.
              </p>
            </div>
          </div>
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
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-3xl border border-ink/5 overflow-hidden hover:border-mint/30 transition-colors"
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
                      <div className="flex items-center gap-2 text-xs text-ink-soft mb-2">
                        <span>{post.date}</span>
                        <span className="text-ink-soft/40">|</span>
                        <ViewCounter slug={post.slug} />
                      </div>
                      <h3 className="font-serif text-lg text-ink mb-2 leading-snug">{post.title}</h3>
                      <p className="text-sm text-ink-soft leading-relaxed">{post.excerpt}</p>
                    </div>
                  </Link>
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
