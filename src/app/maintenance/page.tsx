import Image from 'next/image';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-ink text-cream flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <Image
          src="/oo-monogram-beyaz.svg"
          alt="Dr. Ömer Özdemir Logo"
          width={72}
          height={66}
          className="object-contain mx-auto mb-8"
        />
        <h1 className="font-serif font-light text-3xl md:text-4xl leading-tight mb-4">
          Site şu anda güncellenmektedir
        </h1>
        <p className="text-cream/65 leading-relaxed mb-8">
          Yeni içerikler ve yapay zeka asistanı üzerinde çalışılmaktadır.
        </p>
        <p className="text-sm text-cream/50">
          Acil durumlarda şu numaradan ulaşabilirsiniz{' '}
          <a href="tel:+905538885444" className="text-mint-light hover:text-cream transition-colors">
            0553 888 54 44
          </a>
        </p>
      </div>
    </div>
  );
}
