'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { KitchenPhoto } from '@/data/kitchenPhotos';
import { useT } from '@/i18n/client';

const FIRST = 6;
const STEP = 9;

/**
 * Mutfak fotoğrafları çok olduğu için önce ilk birkaçı gösterilir.
 * "Daha fazla göster" ile 9'ar adet eklenir, böylece sayfa kısa ve hafif kalır.
 */
export default function KitchenGallery({ photos }: { photos: KitchenPhoto[] }) {
  const t = useT();
  const [visible, setVisible] = useState(FIRST);
  const shown = photos.slice(0, visible);
  const remaining = photos.length - visible;

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {shown.map((photo) => (
          <figure
            key={photo.id}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={photo.src}
              alt={photo.caption ?? ''}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="group-hover:scale-105 transition-transform duration-500"
            />
            {photo.caption && (
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/70 to-transparent text-cream text-xs md:text-sm p-3 pt-8 md:p-4 md:pt-8">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
      {remaining > 0 && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + STEP)}
            className="rounded-full border border-ink/20 bg-white text-ink text-sm font-medium px-6 py-3 hover:bg-ink hover:text-cream transition-colors"
          >
            {t("Daha fazla göster")} ({remaining})
          </button>
        </div>
      )}
    </>
  );
}
