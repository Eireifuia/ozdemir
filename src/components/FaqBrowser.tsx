"use client"

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Search } from 'lucide-react';

export type FaqGroup = {
  id: string;
  title: string;
  /** Tedavi sayfasının adresi; genel grupta yoktur */
  href?: string;
  categoryId: string;
  categoryLabel: string;
  items: { q: string; a: string }[];
};

// "Çocuk" yazan biri "cocuk" yazanı da bulsun diye aksan ve büyük/küçük harf farkı yok sayılır
const normalize = (s: string) =>
  s
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i');

export default function FaqBrowser({ groups }: { groups: FaqGroup[] }) {
  const [active, setActive] = useState<string>('hepsi');
  const [query, setQuery] = useState('');

  const categories = useMemo(() => {
    const seen = new Map<string, { id: string; label: string; count: number }>();
    for (const g of groups) {
      const entry = seen.get(g.categoryId) ?? { id: g.categoryId, label: g.categoryLabel, count: 0 };
      entry.count += g.items.length;
      seen.set(g.categoryId, entry);
    }
    return [...seen.values()];
  }, [groups]);

  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const q = normalize(query.trim());
  // Her kelime ayrı aranır; kelimelerin sırası ve araya girenler önemli değil
  const terms = q.split(/\s+/).filter(Boolean);

  const visible = useMemo(() => {
    return groups
      .filter((g) => active === 'hepsi' || g.categoryId === active)
      .map((g) => ({
        ...g,
        items: terms.length
          ? g.items.filter((item) => {
              const text = normalize(`${g.title} ${item.q} ${item.a}`);
              return terms.every((t) => text.includes(t));
            })
          : g.items,
      }))
      .filter((g) => g.items.length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups, active, q]);

  const visibleCount = visible.reduce((n, g) => n + g.items.length, 0);

  const tabClass = (isActive: boolean) =>
    `rounded-full text-sm font-medium px-5 py-2.5 transition-colors ${
      isActive
        ? 'bg-ink text-cream'
        : 'bg-white text-ink-soft border border-ink/10 hover:border-mint/40 hover:text-ink'
    }`;

  return (
    <div>
      <div className="relative max-w-xl mb-6">
        <Search
          className="w-5 h-5 text-ink-soft absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Soru ara: flor, kanal, dolgu, dil bağı..."
          aria-label="Sorularda ara"
          className="w-full rounded-full bg-white border border-ink/10 text-ink placeholder:text-ink-soft/70 pl-12 pr-5 py-3.5 focus:outline-none focus:border-mint/60 transition-colors"
        />
      </div>

      <div className="flex flex-wrap gap-2.5 mb-10" role="tablist" aria-label="Soru kategorileri">
        <button
          role="tab"
          aria-selected={active === 'hepsi'}
          onClick={() => setActive('hepsi')}
          className={tabClass(active === 'hepsi')}
        >
          Tümü ({total})
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            onClick={() => setActive(c.id)}
            className={tabClass(active === c.id)}
          >
            {c.label} ({c.count})
          </button>
        ))}
      </div>

      <p className="text-sm text-ink-soft mb-8" aria-live="polite">
        {visibleCount} soru gösteriliyor
      </p>

      {visible.length === 0 ? (
        <div className="rounded-3xl bg-cream-alt border border-ink/5 p-8 text-center">
          <p className="font-serif text-xl text-ink mb-2">Aradığınız soru bulunamadı</p>
          <p className="text-ink-soft leading-relaxed mb-5">
            Farklı bir kelime deneyebilir ya da sorunuzu doğrudan iletebilirsiniz.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center rounded-full bg-ink text-cream text-sm font-medium px-6 py-3 hover:bg-mint transition-colors"
          >
            İletişime Geçiniz
          </Link>
        </div>
      ) : (
        <div className="space-y-14">
          {visible.map((group) => (
            <section key={group.id} aria-labelledby={`sss-${group.id}`}>
              <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
                <div>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-mint mb-1.5">
                    {group.categoryLabel}
                  </span>
                  <h2 id={`sss-${group.id}`} className="font-serif text-2xl text-ink leading-snug">
                    {group.title}
                  </h2>
                </div>
                {group.href && (
                  <Link
                    href={group.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-mint hover:text-ink transition-colors"
                  >
                    Tedavi sayfası <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
              <div className="divide-y divide-ink/10 border-t border-ink/10">
                {group.items.map((item) => (
                  <details key={item.q} className="group py-5" open={q ? true : undefined}>
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <span className="font-serif text-lg text-ink">{item.q}</span>
                      <ChevronDown className="w-5 h-5 text-ink-soft flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <p className="text-ink-soft leading-relaxed mt-4 max-w-2xl">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
