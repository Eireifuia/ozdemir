import type { Treatment } from './types';

const treatment: Treatment = {
  no: 11,
  slug: 'kuafaj-tedavileri',
  category: 'endodonti',
  icon: 'layers',
  title: 'Kuafaj tedavileri: sinirin korunması',
  summary:
    'Çürük sinire çok yaklaştığında ya da sinirin küçük bir noktası açıldığında canlı sinirin korunmasını amaçlayan indirekt ve direkt kuafaj tedavileri görsellerle anlatılmaktadır.',
  image: '/kuafaj/e4-bitmis-kesit.webp',
  imageAlt: 'Kuafaj sonrası diş kesiti: koruyucu madde, taban dolgusu ve diş renginde kompozit, sinir sağlıklı',
  imageRatio: 1670 / 941,
  seoTitle: 'Kuafaj tedavisi (direkt ve indirekt) nedir? | Çocuk Diş Hekimi Dr. Ömer Özdemir',
  metaDescription:
    'Çocuklarda indirekt ve direkt kuafaj (eski adıyla dolaylı ve doğrudan pulpa kaplaması) ile MTA ve Biodentine kullanımı. Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir.',
  keywords: [
    'kuafaj tedavisi',
    'indirekt kuafaj',
    'direkt kuafaj',
    'selektif çürük kaldırma',
    'MTA',
    'Biodentine',
    'çocuklarda sinir koruma',
    'çocuk diş hekimi Bakırköy',
  ],
  intro: [
    'Kuafaj, dişin içindeki sinirin (pulpa) canlılığını korumaya yönelik tedavilerin genel adıdır. Sinir sağlıklıysa kanal tedavisine gerek kalmadan diş korunabilmektedir.',
    'İki türü vardır. İndirekt kuafajda sinire hiç ulaşılmaz, direkt kuafajda ise açılan küçük nokta kapatılmaktadır. Eski adlarıyla dolaylı ve doğrudan pulpa kaplaması olarak da bilinmektedir.',
  ],
  sections: [
    {
      heading: 'İndirekt kuafaj (selektif çürük kaldırma)',
      paragraphs: [
        'Çürük derindir ancak sinir sağlıklıdır. Bakteri yoğun dış doku temizlenir ve sinire en yakın ince tabaka bilinçli olarak bırakılmaktadır. Üzeri koruyucu bir madde ve dolgu ile kapatılmaktadır.',
      ],
      items: [
        'Çürüğün derin olduğu ancak sinire ulaşmadığı dişler',
        'Kendiliğinden ya da geceleri gelen ağrının olmadığı dişler',
        'Röntgende kök ucunda enfeksiyon bulgusunun görülmediği dişler',
      ],
    },
    {
      heading: 'Direkt kuafaj (MTA ve Biodentine)',
      paragraphs: [
        'Çürük temizlenirken sinir küçük bir noktada açılabilmektedir. Kanama kontrol edilebiliyor ve yaygın iltihap yoksa açık nokta MTA ya da Biodentine gibi biyouyumlu bir maddeyle kapatılır. Süt dişlerinde seçili durumlarda değerlendirilir ve çoğu zaman pulpotomi daha öngörülebilir kabul edilmektedir.',
      ],
      items: [
        'Sinirin küçük bir noktada açılması',
        'Sinirde yaygın iltihap bulgusunun olmaması',
        'Kanamanın kontrol edilebilir olması',
      ],
      images: [
        { src: '/kuafaj/e2-kesit-acikalik.webp', alt: 'Kavite tabanında dentini kesen küçük açıklıktan görünen sağlıklı sinir dokusu', caption: 'Sinir açıklığı' },
        { src: '/kuafaj/e3-kesit-mta.webp', alt: 'Sinir açıklığının üzerine yerleştirilmiş küçük MTA tepeciği', caption: 'MTA ile kapatma' },
        { src: '/kuafaj/e4-bitmis-kesit.webp', alt: 'MTA, taban dolgusu ve kompozit ile kapatılmış diş kesiti', caption: 'Dolgu' },
        { src: '/kuafaj/e2-agiz-ici-acikalik.webp', alt: 'Çiğneme yüzeyinde derin kutu biçimli kavite ve tabanında küçük sinir açıklığı', caption: 'Ağız içinden açıklık' },
        { src: '/kuafaj/e3-agiz-ici-mta.webp', alt: 'Aynı kavitenin tabanında sinir açıklığının üzerine yerleştirilmiş MTA', caption: 'Ağız içinden MTA' },
      ],
    },
    {
      heading: 'Takip',
      paragraphs: [
        'İki yöntemde de dişin ağrı ya da şişlik yapıp yapmadığına ve röntgende iyileşme bulgularına kontrollerde bakılmaktadır. İyileşme görülmezse pulpotomi ya da kanal tedavisi gündeme gelebilmektedir.',
      ],
    },
  ],
  stepsEyebrow: 'İndirekt kuafaj',
  stepsHeading: 'İndirekt kuafaj adım adım',
  steps: [
    {
      title: 'Derin çürük',
      text: 'Çocuğun ilk kalıcı azısında (46) çürük sinire çok yaklaşmıştır ancak sinir sağlıklıdır. Kesitte komşu süt azıları ve altlarındaki kalıcı diş tomurcukları da görülmektedir.',
      image: '/kuafaj/d1-baslangic.webp',
      imageAlt: 'Çocuğun alt çenesinde ilk kalıcı azıda sinir odasının tavanına yaklaşan çürük ve komşu süt azıları ile tomurcukların kesiti',
    },
    {
      title: 'Çürüğün temizlenmesi',
      text: 'Diş uyuşturulduktan sonra çürüğün büyük kısmı kaldırılmaktadır. Sinire en yakın ince sağlam dentin tabakası bilinçli olarak korunur ve sinir açılmamaktadır.',
      image: '/kuafaj/d2-temizlik.webp',
      imageAlt: 'Çürüğü temizlenmiş, sinirin üzerinde ince sağlam dentin tabakası kalan kavite',
    },
    {
      title: 'Koruyucu kaplama',
      text: 'Kavitenin tabanına koruyucu ve iyileştirici bir madde ince bir kat halinde yerleştirilmektedir.',
      image: '/kuafaj/d3-koruyucu.webp',
      imageAlt: 'Kavite tabanında sinirin üzerindeki dentin tabakasının üstüne yerleştirilmiş ince koruyucu madde tabakası',
    },
    {
      title: 'Dolgu',
      text: 'Üzeri cam iyonomer taban dolgusu ve diş renginde kompozit ile kapatılmaktadır.',
      image: '/kuafaj/d4-bitmis-kesit.webp',
      imageAlt: 'Koruyucu madde, taban dolgusu ve diş renginde kompozit katmanlarıyla kapatılmış diş kesiti',
    },
    {
      title: 'Bitmiş hal',
      text: 'Dolgu çiğneme yüzeyinde doğal diş yapısının devamı gibi görünmektedir.',
      image: '/kuafaj/d5-okluzal-bitmis.webp',
      imageAlt: 'İlk kalıcı azının çiğneme yüzeyinde anatomisi korunmuş bitmiş hali',
    },
  ],
  compare: {
    heading: 'İndirekt kuafaj: önce ve sonra',
    before: {
      image: '/kuafaj/d1-baslangic.webp',
      alt: 'İndirekt kuafaj öncesinde derin çürüğü olan ilk kalıcı azı kesiti',
    },
    after: {
      image: '/kuafaj/d4-bitmis-kesit.webp',
      alt: 'İndirekt kuafaj sonrasında koruyucu madde, taban ve kompozit ile kapatılmış aynı diş kesiti',
    },
  },
  faq: [
    {
      q: 'İndirekt ve direkt kuafaj arasındaki fark nedir?',
      a: 'İndirekt kuafajda sinire ulaşılmaz ve ince bir dentin tabakası bırakılmaktadır. Direkt kuafajda sinirin açılan küçük noktası MTA ya da Biodentine ile kapatılmaktadır.',
    },
    {
      q: 'Her derin çürükte kuafaj yapılır mı?',
      a: 'Yapılmamaktadır. Sinirde yaygın iltihap varsa ya da kanama durmuyorsa pulpotomi (yarı kanal) ya da kanal tedavisi daha uygun olabilmektedir.',
    },
    {
      q: 'İşlemden sonra ağrı olabilir mi?',
      a: 'Hafif hassasiyet olabilir ve genellikle kısa sürede geçmektedir. Ağrı sürerse ya da geceleri uyandırıyorsa kliniğe haber verilmelidir.',
    },
    {
      q: 'Kuafaj başarısız olursa ne olur?',
      a: 'Sinirde iltihap gelişirse tedavi planı pulpotomiye ya da kanal tedavisine dönüştürülebilmektedir. Bu nedenle kontroller önemlidir.',
    },
  ],
  relatedGuideIds: ['curuk-hizli-ilerleme', 'yari-kanal-tedavisi-amputasyon', 'cocuklarda-kanal-tedavisi'],
};

export default treatment;
