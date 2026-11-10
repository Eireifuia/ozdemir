import type { Treatment } from './types';

const treatment: Treatment = {
  no: 1,
  slug: 'sut-disleri-yapisi',
  category: 'ortodonti',
  icon: 'baby',
  title: 'Süt dişlerinin yapısı ve kalıcı dişlerden farkları',
  summary:
    'Süt dişleri kalıcı dişlere benzer görünse de yapıları farklıdır. Bu farklar çürüğün neden hızlı ilerlediğini ve neden koruyucu bakım gerektiğini açıklamaktadır.',
  image: '/sut-disi-yapisi/sut-ve-kalici-azi-kesit.webp',
  imageAlt: 'Yan yana duran bir süt azısı ile kalıcı azının kesiti, süt azısında ince mine, geniş sinir odası ve yana açılan kökler, kalıcı azıda kalın mine ve daha küçük sinir odası',
  imageRatio: 1672 / 941,
  seoTitle: 'Süt dişlerinin yapısı ve kalıcı dişlerden farkları | Çocuk Diş Hekimi Dr. Ömer Özdemir',
  metaDescription:
    'Süt dişlerinin mine ve kök yapısı, sayısı ve kalıcı dişlerden farkları. Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den süt dişi yapısı hakkında bilgi.',
  keywords: [
    'süt dişi yapısı',
    'süt dişi anatomisi',
    'süt dişi sayısı',
    'süt dişi ile kalıcı diş farkı',
    'çocuk diş hekimi Bakırköy',
  ],
  intro: [
    'Süt dişleri çocuğun ağzında ilk yıllarda görev yapan geçici dişlerdir. Toplam 20 adettir ve genellikle 2,5 ile 3 yaş civarında tamamlanmaktadır.',
    'Küçük görünmeleri yapılarının basit olduğu anlamına gelmemektedir. Süt dişlerinin mine ve dentin tabakaları daha incedir ve sinir odası dişin büyüklüğüne oranla daha geniştir.',
  ],
  sections: [
    {
      heading: 'Süt dişlerinin kalıcı dişlerden farkları',
      items: [
        'Mine ve dentin tabakası daha incedir',
        'Sinir odası (pulpa) dişin büyüklüğüne göre daha geniştir',
        'Renkleri daha beyaz ve mattır',
        'Kökleri incedir ve kalıcı diş yaklaştıkça kendiliğinden erir',
        'Süt azılarının kökleri yana doğru açılarak altındaki kalıcı diş tomurcuğunu çevreler',
      ],
      images: [
        {
          src: '/sut-disi-yapisi/sut-ve-kalici-azi-kesit.webp',
          alt: 'Solda süt azısı sağda kalıcı azı kesiti, süt azısında ince mine, geniş sinir odası ve yana açılan kökler arasında kalıcı diş tomurcuğu, kalıcı azıda kalın mine ve daha küçük sinir odası',
          caption: 'Solda süt azısı, sağda kalıcı azı',
        },
      ],
    },
    {
      heading: 'Bu farklar neden önemlidir?',
      paragraphs: [
        'İnce mine ve geniş sinir odası nedeniyle çürük süt dişlerinde daha hızlı sinire ulaşabilmektedir. Bu nedenle erken kontrol ve koruyucu uygulamalar özellikle önemlidir. Süt dişleri aynı zamanda kalıcı dişlere yer tutar ve çiğneme ile konuşmaya yardımcı olmaktadır.',
      ],
    },
    {
      heading: 'Süt dişleri ne zaman dökülür?',
      paragraphs: [
        'Süt dişlerinin dökülmesi genellikle 6 yaş civarında alt ve üst ön dişlerle başlar ve yaklaşık 12 yaşına kadar sürmektedir. Sıra ve zamanlama çocuktan çocuğa değişebilmektedir.',
      ],
    },
  ],
  steps: [
    { title: 'Muayene', text: 'Diş sayısı, yapısı ve gelişimi kontrol edilmektedir.' },
    { title: 'Değerlendirme', text: 'Mine yapısı ve çürük riski değerlendirilmektedir.' },
    { title: 'Bilgilendirme', text: 'Aileye süt dişlerinin neden özel bakım gerektirdiği anlatılmaktadır.' },
    { title: 'Takip', text: 'Gelişim düzenli kontrollerle izlenir.' },
  ],
  faq: [
    {
      q: 'Süt dişleri neden dökülür?',
      a: 'Altlarındaki kalıcı dişler gelişip yukarı doğru ilerlerken süt dişlerinin kökleri kendiliğinden erir. Diş sallanmaya başlar ve zamanı geldiğinde dökülmektedir.',
    },
    {
      q: 'Süt dişleri kaç tanedir?',
      a: 'Toplam 20 adettir ve her çenede 10 diş bulunmaktadır.',
    },
    {
      q: 'Süt dişlerini fırçalamak neden önemlidir?',
      a: 'Süt dişlerinde çürük hızlı ilerleyebilir ve ağrıya ya da enfeksiyona neden olabilmektedir. Düzenli fırçalama hem süt dişlerini hem altındaki kalıcı diş tomurcuklarını korumaya yardımcı olmaktadır.',
    },
  ],
  relatedGuideIds: ['sut-dislerinin-dokulme-takvimi', 'curuk-hizli-ilerleme'],
};

export default treatment;
