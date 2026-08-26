"use client"

import { useState } from 'react';
import cities from '@/data/turkeyMapPaths.js';

type City = { plate: string; city: string; draw: string };

const MINT = '#1F5B3F';
const CREAM_ALT = '#F4F1EA';
const BORDER = '#B7AE99';

const TurkeyMapView = ({ visitedPlateCodes }: { visitedPlateCodes: string[] }) => {
  const [hovered, setHovered] = useState<{ name: string; x: number; y: number } | null>(null);

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        if (!hovered) return;
        setHovered((h) => (h ? { ...h, x: e.clientX, y: e.clientY } : h));
      }}
    >
      <svg
        viewBox="0 0 1007 443"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        onMouseOut={() => setHovered(null)}
      >
        {(cities as City[]).map((city) => {
          const visited = visitedPlateCodes.includes(city.plate);
          return (
            <path
              key={city.plate}
              d={city.draw}
              onMouseEnter={(e) => setHovered({ name: city.city, x: e.clientX, y: e.clientY })}
              style={{
                fill: visited ? MINT : CREAM_ALT,
                stroke: BORDER,
                strokeWidth: 1.4,
                strokeLinejoin: 'round',
                cursor: 'default',
              }}
            />
          );
        })}
      </svg>

      {hovered && (
        <div
          className="fixed z-50 pointer-events-none bg-ink text-cream text-xs font-medium px-3 py-1.5 rounded-lg shadow-md"
          style={{ left: hovered.x + 14, top: hovered.y + 14 }}
        >
          {hovered.name}
        </div>
      )}
    </div>
  );
};

export default TurkeyMapView;
