import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { blogPosts } from '@/data/blogPosts';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main id="icerik">
        <article>
          {/* Header */}
          <section className="bg-ink text-cream">
            <FadeIn className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-20">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-cream/60 hover:text-cream transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Blog&apos;a Dön
              </Link>
              <div className="text-xs text-cream/50 mb-3">
                <span>{post.date}</span>
              </div>
              <h1 className="font-serif font-light text-3xl md:text-4xl leading-tight">
                {post.title}
              </h1>
            </FadeIn>
          </section>

          {/* Image */}
          <FadeIn delay={100} className="max-w-4xl mx-auto px-4 md:px-8 -mt-8 md:-mt-10 relative z-10">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-cream-alt shadow-md">
              <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} priority />
            </div>
          </FadeIn>

          {/* Content */}
          <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="space-y-5">
              {post.content.map((paragraph, idx) => (
                <FadeIn key={idx} delay={idx * 40}>
                  <p className="text-ink-soft leading-relaxed">{paragraph}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
