export type TreatmentSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  /** Bölümün altında gösterilen görseller (public/ altındaki yol, alt metin ve isteğe bağlı alt yazı) */
  images?: { src: string; alt: string; caption?: string }[];
};

export type TreatmentCategory = 'koruyucu' | 'restoratif' | 'endodonti' | 'davranis' | 'ortodonti';

export const treatmentCategories: { id: TreatmentCategory; label: string }[] = [
  { id: 'koruyucu', label: 'Koruyucu Diş Hekimliği' },
  { id: 'restoratif', label: 'Restoratif Tedavi' },
  { id: 'endodonti', label: 'Endodonti' },
  { id: 'davranis', label: 'Davranış Yönetimi ve Anestezi' },
  { id: 'ortodonti', label: 'Ortodonti ve Gelişim' },
];

export type TreatmentIcon =
  | 'baby'
  | 'droplets'
  | 'shield'
  | 'sparkles'
  | 'crown'
  | 'layers'
  | 'scissors'
  | 'moon'
  | 'heart'
  | 'milk'
  | 'activity'
  | 'glasses'
  | 'alert'
  | 'smile';

export type Treatment = {
  /**
   * Sıra numarası. 1 ile 26 arası uygulamadaki konu klasörleriyle aynıdır, 27 ve sonrası
   * listeye sonradan eklenen konulardır. Sayfada gösterilmez, yalnızca sıralama içindir.
   */
  no: number;
  slug: string;
  title: string;
  summary: string;
  category: TreatmentCategory;
  /** shown on pages that have no illustration */
  icon: TreatmentIcon;
  image?: string;
  imageAlt?: string;
  /** width / height of the source image, used to avoid cropping the illustrations */
  imageRatio?: number;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string[];
  sections: TreatmentSection[];
  /**
   * Evre evre anlatım. Bir adıma `image` eklenirse (public/ altındaki yol), o adım
   * görselli büyük satır olarak gösterilir. Hiçbir adımda görsel yoksa kartlar kullanılır.
   */
  steps: {
    title: string;
    text: string;
    image?: string;
    imageAlt?: string;
    /** Aşamanın ana görselinin altında gösterilen ikinci görsel (örneğin aynı aşamanın röntgeni) */
    extraImage?: string;
    extraImageAlt?: string;
    extraImageCaption?: string;
  }[];
  /** Süreç bölümünün üst etiketi ve başlığı (varsayılan: "Süreç" / "Randevuda neler olmaktadır?") */
  stepsEyebrow?: string;
  stepsHeading?: string;
  /**
   * Önce ve sonra bloğu. Süreç bölümünün altında iki görsel yan yana gösterilir.
   * Genellikle serinin ilk ve son karesi kullanılır.
   */
  compare?: {
    heading?: string;
    text?: string;
    before: { image: string; alt: string };
    after: { image: string; alt: string };
  };
  faq: { q: string; a: string }[];
  /** ids from treatmentGuides.ts, shown as "İlgili Yazılar" */
  relatedGuideIds: string[];
};
