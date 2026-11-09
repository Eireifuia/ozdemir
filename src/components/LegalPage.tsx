import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { contentUpdatedLabel } from '@/data/site';

/**
 * Yayından önce hukuki inceleme tamamlandığında false yapılır; sayfalardaki "taslak" notu kalkar.
 */
export const LEGAL_DRAFT = true;

export function LH2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-2xl text-ink leading-tight mt-12 mb-4">{children}</h2>;
}

export function LP({ children }: { children: React.ReactNode }) {
  return <p className="text-ink-soft leading-relaxed mb-4">{children}</p>;
}

export function LUL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-ink-soft leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-mint mt-2.5 flex-shrink-0" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main id="icerik">
        <section className="bg-ink text-cream">
          <div className="max-w-3xl mx-auto px-4 md:px-8 py-14 md:py-20">
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-mint-light mb-4">
              Yasal Bilgilendirme
            </span>
            <h1 className="font-serif font-light text-3xl md:text-5xl leading-tight mb-4">{title}</h1>
            <p className="text-cream/70 leading-relaxed max-w-xl">{intro}</p>
          </div>
        </section>
        <article className="bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-8 py-14 md:py-20">
            {LEGAL_DRAFT && (
              <p
                role="note"
                className="rounded-2xl border border-mint/30 bg-cream-alt px-5 py-4 text-sm text-ink leading-relaxed mb-10"
              >
                Bu metin yayına hazırlık amacıyla hazırlanmış bir taslaktır. Kişisel verilerin korunması ve sağlık
                hizmetleri mevzuatı açısından bir hukukçu tarafından incelenmeden nihai kabul edilmemelidir.
              </p>
            )}
            {children}
            <p className="text-xs text-ink-soft mt-14 pt-6 border-t border-ink/10">
              Son güncelleme: {contentUpdatedLabel}
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
