import Image from 'next/image';
import LoopVideo from '@/components/LoopVideo';
import type { ClinicPhoto } from '@/data/clinicPhotos';

/**
 * Fotoğraf ve kısa videoları yana doğru sürekli kayan bir şerit olarak gösterir.
 * Fareyle üzerine gelince ya da klavyeyle odaklanınca durur. Hareket azaltma tercihi açıksa
 * kayma yoktur, şerit elle kaydırılır ve videolar oynamaz.
 * Tüm kareler aynı yüksekliktedir; videolar (9:16) kırpılmadan, tam sığar.
 */
export default function PhotoSlider({ photos }: { photos: ClinicPhoto[] }) {
  return (
    <div
      className="overflow-hidden motion-reduce:overflow-x-auto -mx-4 px-4 md:-mx-8 md:px-8"
      role="region"
      aria-label="Klinik fotoğrafları"
      tabIndex={0}
    >
      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
        style={{ ['--marquee-duration' as string]: `${photos.length * 9}s` }}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className={`flex gap-4 md:gap-6 pr-4 md:pr-6 ${copy === 1 ? 'motion-reduce:hidden' : ''}`}
          >
            {photos.map((photo) => (
              <li
                key={photo.id}
                className={`group relative flex-shrink-0 h-72 md:h-96 rounded-2xl overflow-hidden bg-white shadow-sm ${
                  photo.video ? 'aspect-[9/16]' : 'aspect-[3/4]'
                }`}
              >
                {photo.video ? (
                  <LoopVideo
                    src={photo.video}
                    poster={photo.src}
                    rate={photo.rate}
                    label={copy === 1 ? undefined : photo.caption ?? 'Dentalzone Kids duvar çizimi'}
                  />
                ) : (
                  // Yazılar ekranda gösterilmez; ekran okuyucular için alt metin olarak kullanılır
                  <Image
                    src={photo.src}
                    alt={copy === 1 ? '' : photo.caption ?? 'Klinik'}
                    fill
                    sizes="(min-width: 768px) 288px, 216px"
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
