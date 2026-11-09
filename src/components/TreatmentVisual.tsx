import Image from 'next/image';
import {
  Activity,
  AlertTriangle,
  Baby,
  Crown,
  Droplets,
  Glasses,
  Heart,
  Layers,
  Milk,
  Moon,
  Scissors,
  ShieldCheck,
  Smile,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import type { Treatment, TreatmentIcon } from '@/data/treatments';

const icons: Record<TreatmentIcon, LucideIcon> = {
  baby: Baby,
  droplets: Droplets,
  shield: ShieldCheck,
  sparkles: Sparkles,
  crown: Crown,
  layers: Layers,
  scissors: Scissors,
  moon: Moon,
  heart: Heart,
  milk: Milk,
  activity: Activity,
  glasses: Glasses,
  alert: AlertTriangle,
  smile: Smile,
};

type Props = {
  treatment: Treatment;
  /** hero: büyük, kendi oranında. card: sabit 4/3 kutuda, kırpmadan */
  variant: 'hero' | 'card';
  priority?: boolean;
};

export default function TreatmentVisual({ treatment, variant, priority }: Props) {
  const Icon = icons[treatment.icon];

  if (variant === 'card') {
    return (
      <div className="relative aspect-[4/3] bg-cream-alt overflow-hidden">
        {treatment.image ? (
          <Image
            src={treatment.image}
            alt={treatment.imageAlt ?? treatment.title}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            style={{ objectFit: 'contain' }}
            className="p-3 group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-mint shadow-sm group-hover:scale-105 transition-transform duration-500">
              <Icon className="w-9 h-9" strokeWidth={1.4} />
            </span>
          </div>
        )}
      </div>
    );
  }

  if (treatment.image && treatment.imageRatio) {
    const isPortrait = treatment.imageRatio < 1;
    return (
      <div
        className="relative mx-auto w-full rounded-3xl overflow-hidden bg-cream-alt shadow-xl"
        style={{ aspectRatio: treatment.imageRatio, maxWidth: isPortrait ? 300 : 520 }}
      >
        <Image
          src={treatment.image}
          alt={treatment.imageAlt ?? treatment.title}
          fill
          sizes="(min-width: 768px) 40vw, 90vw"
          style={{ objectFit: 'cover' }}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className="relative mx-auto w-full rounded-3xl bg-cream-alt shadow-xl flex items-center justify-center"
      style={{ aspectRatio: 4 / 3, maxWidth: 440 }}
      role="img"
      aria-label={treatment.title}
    >
      <span className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-white text-mint shadow-sm">
        <Icon className="w-12 h-12" strokeWidth={1.3} />
      </span>
    </div>
  );
}
