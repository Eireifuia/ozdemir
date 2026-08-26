'use client';

import { useEffect, useState } from 'react';

interface ViewCounterProps {
  slug: string;
  increment?: boolean;
  className?: string;
}

export default function ViewCounter({ slug, increment = false, className }: ViewCounterProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(increment ? '/api/views' : `/api/views?slug=${encodeURIComponent(slug)}`, {
          method: increment ? 'POST' : 'GET',
          headers: increment ? { 'Content-Type': 'application/json' } : undefined,
          body: increment ? JSON.stringify({ slug }) : undefined,
        });
        const data = await res.json();
        if (!cancelled) setCount(data.count ?? 0);
      } catch {
        if (!cancelled) setCount(null);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (count === null) return null;

  return <span className={className}>{count} okunma</span>;
}
