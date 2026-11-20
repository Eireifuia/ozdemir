import type { Locale } from '@/i18n/config';

function starPoints(cx: number, cy: number, outer: number, inner: number, rotateDeg: number) {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = ((rotateDeg + i * 36) * Math.PI) / 180;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(' ');
}

/** Basit, bağımlılıksız bayrak çizimleri (Windows'ta bayrak emojisi görünmediği için SVG). */
export default function Flag({ locale, className = 'w-6 h-4' }: { locale: Locale; className?: string }) {
  if (locale === 'tr') {
    return (
      <svg viewBox="0 0 30 20" className={`${className} rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]`} aria-hidden>
        <rect width="30" height="20" fill="#E30A17" />
        <circle cx="10.5" cy="10" r="5" fill="#fff" />
        <circle cx="11.9" cy="10" r="4" fill="#E30A17" />
        <polygon points={starPoints(15.6, 10, 2.4, 1, 0)} fill="#fff" />
      </svg>
    );
  }
  if (locale === 'en') {
    return (
      <svg viewBox="0 0 60 40" className={`${className} rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]`} aria-hidden>
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="8" />
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="3" />
        <path d="M30 0 V40 M0 20 H60" stroke="#fff" strokeWidth="13" />
        <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="8" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 30 20" className={`${className} rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]`} aria-hidden>
      <rect width="30" height="20" fill="#fff" />
      <circle cx="15" cy="10" r="6" fill="#BC002D" />
    </svg>
  );
}
