"use client"

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import TreatmentVisual from '@/components/TreatmentVisual';
import type { TreatmentCategory, Treatment } from '@/data/treatment-pages/types';
import { useT } from '@/i18n/client';

export default function TreatmentsBrowser({
  treatments,
  categories: treatmentCategories,
}: {
  treatments: Treatment[];
  categories: { id: TreatmentCategory; label: string }[];
}) {
  const t = useT();
  const [active, setActive] = useState<TreatmentCategory | 'hepsi'>('hepsi');

  const visible = active === 'hepsi' ? treatments : treatments.filter((tr) => tr.category === active);
  const labelOf = (id: TreatmentCategory) => treatmentCategories.find((c) => c.id === id)?.label;

  const tabClass = (isActive: boolean) =>
    `rounded-full text-sm font-medium px-5 py-2.5 transition-colors ${
      isActive
        ? 'bg-ink text-cream'
        : 'bg-white text-ink-soft border border-ink/10 hover:border-mint/40 hover:text-ink'
    }`;

  return (
    <div>
      <div className="flex flex-wrap gap-2.5 mb-10" role="tablist" aria-label={t("Tedavi kategorileri")}>
        <button
          role="tab"
          aria-selected={active === 'hepsi'}
          onClick={() => setActive('hepsi')}
          className={tabClass(active === 'hepsi')}
        >
          {t("Tümü")} ({treatments.length})
        </button>
        {treatmentCategories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            onClick={() => setActive(c.id)}
            className={tabClass(active === c.id)}
          >
            {c.label} ({treatments.filter((tr) => tr.category === c.id).length})
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((tr, i) => (
          <FadeIn key={tr.slug} delay={(i % 3) * 80}>
            <Link
              href={`/tedaviler/${tr.slug}`}
              className="group block h-full bg-white rounded-3xl border border-ink/5 overflow-hidden hover:border-mint/30 hover:shadow-lg transition-all duration-300"
            >
              <TreatmentVisual treatment={tr} variant="card" />
              <div className="p-6">
                <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-mint mb-2">
                  {labelOf(tr.category)}
                </span>
                <h3 className="font-serif text-lg text-ink leading-snug mb-2">{tr.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-4">{tr.summary}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-mint group-hover:text-ink transition-colors">
                  {t("Ayrıntıları İnceleyiniz")} <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
