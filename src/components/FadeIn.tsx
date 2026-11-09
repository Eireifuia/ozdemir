'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}

/**
 * Sunucudan gelen HTML her zaman görünürdür; JavaScript gecikirse, çalışmazsa ya da
 * tarayıcı animasyonları kısarsa içerik kaybolmaz. Animasyon yalnızca ilk ekranın altındaki
 * öğelere, sayfa yüklendikten sonra uygulanır ve öğe ekrana girince oynar.
 */
export default function FadeIn({ children, className = '', direction = 'up', delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // İlk ekrandaki öğe animasyonsuz, olduğu gibi görünür kalır
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setHidden(true);

    const reveal = () => {
      setHidden(false);
      cleanup();
    };
    const check = () => {
      if (el.getBoundingClientRect().top < window.innerHeight - 40) reveal();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    // Gözlemci tetiklenmezse (örneğin sekme odakta değilken) kaydırma yine de içeriği açar
    function cleanup() {
      observer.disconnect();
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    }
    observer.observe(el);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return cleanup;
  }, []);

  const offset =
    direction === 'left' ? '-translate-x-6' : direction === 'right' ? 'translate-x-6' : 'translate-y-6';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: hidden ? '0ms' : `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        hidden ? `opacity-0 ${offset}` : 'opacity-100 translate-x-0 translate-y-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
