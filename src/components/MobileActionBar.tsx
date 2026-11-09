'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, Phone, X } from 'lucide-react';
import { clinics } from '@/data/clinics';

type Panel = 'ara' | 'whatsapp' | null;

/**
 * Yalnızca mobilde görünen, ekranın altında sabit "Ara / WhatsApp" çubuğu.
 * İki klinik olduğu için dokununca hangi kliniğin aranacağı seçilir.
 */
export default function MobileActionBar() {
  const pathname = usePathname();
  const [panel, setPanel] = useState<Panel>(null);

  useEffect(() => {
    setPanel(null);
  }, [pathname]);

  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPanel(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [panel]);

  if (pathname.startsWith('/maintenance')) return null;

  const toggle = (next: Exclude<Panel, null>) => setPanel((p) => (p === next ? null : next));
  const buttonBase =
    'flex items-center justify-center gap-2 min-h-12 text-sm font-medium transition-colors';

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-[55]" role="region" aria-label="Hızlı iletişim">
      {panel && (
        <div className="mx-3 mb-2 rounded-3xl bg-white border border-ink/10 shadow-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-mint">
              {panel === 'ara' ? 'Hangi kliniği arayalım?' : 'Hangi klinikle yazışalım?'}
            </span>
            <button
              type="button"
              onClick={() => setPanel(null)}
              aria-label="Kapat"
              className="w-8 h-8 inline-flex items-center justify-center rounded-full text-ink-soft hover:bg-cream-alt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <ul className="space-y-2">
            {clinics.map((clinic) => (
              <li key={clinic.id}>
                <a
                  href={panel === 'ara' ? clinic.phoneHref : clinic.whatsappHref}
                  {...(panel === 'whatsapp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-cream-alt px-4 min-h-14 py-2 hover:bg-cream"
                >
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                      {clinic.side}
                    </span>
                    <span className="block text-sm font-medium text-ink truncate">{clinic.name}</span>
                  </span>
                  <span className="text-sm font-medium text-mint flex-shrink-0">{clinic.phone}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="grid grid-cols-2 bg-cream/95 backdrop-blur border-t border-ink/10 pb-[env(safe-area-inset-bottom)]">
        <button
          type="button"
          onClick={() => toggle('ara')}
          aria-expanded={panel === 'ara'}
          className={`${buttonBase} bg-ink text-cream hover:bg-mint`}
        >
          <Phone className="w-4 h-4" aria-hidden />
          Ara
        </button>
        <button
          type="button"
          onClick={() => toggle('whatsapp')}
          aria-expanded={panel === 'whatsapp'}
          className={`${buttonBase} text-ink hover:text-mint`}
        >
          <MessageCircle className="w-4 h-4" aria-hidden />
          WhatsApp
        </button>
      </div>
    </div>
  );
}
