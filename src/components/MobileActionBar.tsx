'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, Phone, X } from 'lucide-react';
import { clinics } from '@/data/clinics';
import { useT } from '@/i18n/client';

type Panel = 'ara' | 'whatsapp' | null;

/**
 * Yalnızca mobilde görünen, ekranın altında sabit "Ara / WhatsApp" çubuğu.
 * İki klinik olduğu için dokununca hangi kliniğin aranacağı seçilir.
 */
export default function MobileActionBar() {
  const pathname = usePathname();
  const t = useT();
  const [panel, setPanel] = useState<Panel>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setPanel(null);
    setHidden(false);
  }, [pathname]);

  // Aşağı kaydırırken çubuk gizlenir, yukarı kaydırınca ya da sayfa başında geri gelir.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 120) {
        setHidden(false);
      } else if (y > lastY + 8) {
        setHidden(true);
      } else if (y < lastY - 8) {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    'flex items-center justify-center gap-2 min-h-10 text-[13px] font-medium transition-colors';

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-[55] transition-transform duration-300 ${
        hidden && !panel ? 'translate-y-full' : 'translate-y-0'
      }`}
      role="region"
      aria-label={t("Hızlı iletişim")}
    >
      {panel && (
        <div className="mx-3 mb-2 rounded-3xl bg-white border border-ink/10 shadow-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-mint">
              {panel === 'ara' ? t('Aramak istediğiniz kliniği seçiniz') : t('Yazmak istediğiniz kliniği seçiniz')}
            </span>
            <button
              type="button"
              onClick={() => setPanel(null)}
              aria-label={t("Kapat")}
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
                      {t(clinic.side)}
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
          <Phone className="w-3.5 h-3.5" aria-hidden />
          {t("Ara")}
        </button>
        <button
          type="button"
          onClick={() => toggle('whatsapp')}
          aria-expanded={panel === 'whatsapp'}
          className={`${buttonBase} text-ink hover:text-mint`}
        >
          <span className="relative inline-flex w-5 h-5 text-[#25D366]" aria-hidden>
            <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
            <Phone className="absolute left-1/2 top-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-[58%]" strokeWidth={2.8} fill="currentColor" />
          </span>
          WhatsApp
        </button>
      </div>
    </div>
  );
}
