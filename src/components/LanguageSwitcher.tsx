'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Flag from './Flags';
import { useLocale } from '@/i18n/client';
import { LOCALE_COOKIE, localeMeta, locales, type Locale } from '@/i18n/config';

/**
 * Sol altta duran dil seçici. Masaüstünde her zaman görünür.
 * Mobilde ilk açılışta 10 saniye görünür, sonra kaybolur (dil menüden de değiştirilebilir).
 */
export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(false);
  openRef.current = open;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    if (!mq.matches) return;
    let seen = false;
    try {
      seen = window.sessionStorage.getItem('dil-secici-gosterildi') === '1';
      window.sessionStorage.setItem('dil-secici-gosterildi', '1');
    } catch {
      // yoksay
    }
    if (seen) {
      setMobileVisible(false);
      return;
    }
    const timer = setTimeout(() => setMobileVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = (next: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    setOpen(false);
    router.refresh();
  };

  const others = locales.filter((l) => l !== locale);
  const visible = mobileVisible || open;

  return (
    <div
      ref={rootRef}
      className={`fixed z-[60] left-4 bottom-16 md:left-6 md:bottom-6 flex flex-col items-start gap-1.5 ${
        visible ? '' : 'max-md:hidden'
      }`}
    >
      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="rounded-2xl bg-white border border-ink/10 shadow-xl p-1.5 arise-hint"
        >
          {others.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={false}
                lang={l}
                onClick={() => choose(l)}
                className="w-full flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-ink hover:bg-cream-alt transition-colors"
              >
                <Flag locale={l} />
                <span>{localeMeta[l].name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`Language: ${localeMeta[locale].name}`}
        className="flex items-center gap-2.5 rounded-2xl bg-white border border-ink/10 shadow-lg px-3.5 py-2 text-sm font-semibold text-ink hover:shadow-xl transition-shadow"
      >
        <Flag locale={locale} />
        <span>{localeMeta[locale].code === 'ENG' ? 'ENG' : localeMeta[locale].code}</span>
        {open ? <ChevronDown className="w-4 h-4 text-ink-soft" /> : <ChevronUp className="w-4 h-4 text-ink-soft" />}
      </button>
    </div>
  );
}
