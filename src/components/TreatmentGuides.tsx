"use client"

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { treatmentGuides } from '@/data/treatmentGuides';

const TreatmentGuides = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  // Detay sayfalarından gelen #guide-id bağlantısı ilgili yazıyı açar
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      if (!id || !treatmentGuides.some((g) => g.id === id)) return;
      setOpenId(id);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  return (
    <div className="divide-y divide-ink/10 border-t border-ink/10">
      {treatmentGuides.map((guide) => {
        const isOpen = openId === guide.id;
        return (
          <div key={guide.id} id={guide.id} className="scroll-mt-32">
            <button
              onClick={() => setOpenId(isOpen ? null : guide.id)}
              className="w-full flex items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg md:text-xl text-ink">{guide.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-ink-soft flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="pb-8 pr-8 space-y-4 max-w-3xl">
                {guide.blocks.map((block, i) => {
                  if (block.type === 'h3') {
                    return (
                      <h3 key={i} className="font-medium text-ink pt-2">
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === 'ul') {
                    return (
                      <ul key={i} className="space-y-2">
                        {block.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-mint mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="text-sm text-ink-soft leading-relaxed">
                      {block.text}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TreatmentGuides;
