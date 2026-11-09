'use client';

import { useEffect, useRef } from 'react';

/**
 * GIF gibi davranan video: sessiz, kendiliğinden başlar, sürekli döner.
 * Hareket azaltma tercihi açıksa oynatılmaz, yalnızca poster görsel kalır.
 */
export default function LoopVideo({
  src,
  poster,
  label,
  rate = 1,
}: {
  src: string;
  poster: string;
  /** Oynatma hızı: 1 normal, 0.5 yarı hız */
  rate?: number;
  /** Ekran okuyucu için açıklama; boş bırakılırsa video süs olarak gizlenir. */
  label?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultPlaybackRate = rate;
    v.playbackRate = rate;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    v.play().catch(() => {
      // Tarayıcı otomatik oynatmayı engellerse poster görünür kalır
    });
  }, [rate]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      {...(label ? { 'aria-label': label } : { 'aria-hidden': true, tabIndex: -1 })}
      className="absolute inset-0 w-full h-full object-contain bg-ink"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
