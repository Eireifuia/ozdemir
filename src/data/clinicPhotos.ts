export type ClinicPhoto = {
  id: string;
  /** Fotoğraf yolu. Video öğesinde bu, videonun poster görselidir. */
  src: string;
  caption?: string;
  /** Doluysa öğe, sessiz ve sürekli dönen kısa bir video olarak gösterilir (dikey 9:16). */
  video?: string;
  /** Video oynatma hızı (1 = normal, 0.5 = yarı hız) */
  rate?: number;
};

// Buraya yeni bir klinik fotografi eklemek icin:
// 1. Gorseli public/clinic/ klasorune koy (orn. public/clinic/resepsiyon.jpg)
// 2. Asagidaki diziye { id: 'resepsiyon', src: '/clinic/resepsiyon.jpg', caption: 'Resepsiyon' } gibi bir satir ekle
// Video icin: public/dentalzone/ altina mp4 ve ayni adli .webp posteri koy, { id, src: poster, video: mp4 } ekle
export const clinicPhotos: ClinicPhoto[] = [
  { id: 'bekleme-alani', src: '/clinic/bekleme-alani.webp', caption: 'Bekleme Alanı' },
  { id: 'klinik-dis-cephe', src: '/clinic/klinik-dis-cephe.webp', caption: 'Osmaniye Ağız ve Diş Sağlığı Polikliniği' },
  { id: 'muayene-odasi', src: '/clinic/muayene-odasi.webp', caption: 'Muayene Odası' },
  { id: 'kids-kopek', src: '/dentalzone/kids-2.webp', video: '/dentalzone/kids-2.mp4', rate: 0.5 },
  { id: 'muayene-1', src: '/clinic/muayene-1.webp', caption: 'Çocuk hasta muayenesi' },
  { id: 'koridor', src: '/clinic/koridor.webp', caption: 'Klinik Koridoru' },
  { id: 'kids-mozaik', src: '/dentalzone/kids-4.webp', video: '/dentalzone/kids-4.mp4', rate: 0.5 },
  { id: 'bekleme-salonu', src: '/clinic/bekleme-salonu.webp', caption: 'Bekleme Salonu' },
];
