"use client"

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  /** Galerideki tüm görseller. Oklarla ve klavyeyle aralarında gezilir. */
  images: LightboxImage[];
  /** Bu tetikleyicinin açacağı görselin sırası */
  index: number;
  className?: string;
  children: React.ReactNode;
};

export default function LightboxTrigger({ images, index, className, children }: Props) {
  const [current, setCurrent] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isOpen = current !== null;
  const count = images.length;

  const close = useCallback(() => setCurrent(null), []);
  const next = useCallback(
    () => setCurrent((c) => (c === null ? c : (c + 1) % count)),
    [count],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c === null ? c : (c - 1 + count) % count)),
    [count],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, next, prev]);

  const active = current !== null ? images[current] : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setCurrent(index)}
        className={`cursor-zoom-in ${className ?? ''}`}
        aria-label={`Büyütmek için tıklayınız: ${images[index]?.alt ?? ''}`}
      >
        {children}
      </button>

      {mounted &&
        active &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center transition-colors"
                  aria-label="Önceki görsel"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center transition-colors"
                  aria-label="Sonraki görsel"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <figure
              className="flex flex-col items-center max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.alt}
                className="max-w-full max-h-[78vh] md:max-h-[82vh] object-contain rounded-2xl shadow-2xl"
              />
              <figcaption className="mt-4 text-center text-sm text-cream/80 max-w-2xl">
                {active.caption ?? active.alt}
                {count > 1 && current !== null && (
                  <span className="block text-xs text-cream/50 mt-1">
                    {current + 1} / {count}
                  </span>
                )}
              </figcaption>
            </figure>
          </div>,
          document.body,
        )}
    </>
  );
}
