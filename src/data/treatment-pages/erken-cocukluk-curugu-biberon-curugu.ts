import type { Treatment } from './types';

const treatment: Treatment = {
  no: 3,
  slug: 'erken-cocukluk-curugu-biberon-curugu',
  category: 'koruyucu',
  icon: 'milk',
  image: '/erken-cocukluk-curugu/kapak.webp',
  imageAlt: 'Küçük bir çocuğun üst süt kesici dişlerinde diş eti kenarında beyaz ve kahverengi çürük lekeleri, alt kesicilerin ise sağlam görünmesi',
  imageRatio: 1672 / 941,
  title: 'Erken çocukluk çürüğü (biberon çürüğü)',
  summary:
    'Bebeklik ve erken çocukluk döneminde ön dişlerde başlayıp hızla ilerleyebilen çürük türüdür. Gece biberonu ve sık beslenme alışkanlıkları riski artırabilmektedir.',
  seoTitle: 'Biberon çürüğü (erken çocukluk çürüğü) nedir ve nasıl önlenir? | Çocuk Diş Hekimi Dr. Ömer Özdemir',
  metaDescription:
    'Biberon çürüğünün belirtileri, nedenleri ve önlenmesi. Bebek ve çocuklarda erken çocukluk çürüğü hakkında Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
  keywords: [
    'biberon çürüğü',
    'erken çocukluk çürüğü',
    'bebeklerde diş çürüğü',
    'gece biberon',
    'çocuk diş hekimi Bakırköy',
  ],
  intro: [
    'Erken çocukluk çürüğü yaygın adıyla biberon çürüğü bebeklik ve küçük çocukluk döneminde süt dişlerinde görülen çürüktür. Genellikle üst ön dişlerde başlar ve hızla ilerleyebilmektedir.',
    'Bu çürüğün temel nedeni dişlerin uzun süre süt ya da şekerli sıvılarla temas halinde kalmasıdır. Biberonla uyumak veya sık ve gece beslenme bu riski artırabilmektedir. Bu durum ailenin ihmali olarak görülmemelidir.',
  ],
  sections: [
    {
      heading: 'Nasıl fark edilir?',
      items: [
        'Üst ön dişlerde beyaz ve mat lekeler',
        'Lekelerin zamanla sarı ya da kahverengiye dönmesi',
        'Dişlerde çukurlaşma ya da kırılma',
        'Soğuk ve sıcağa hassasiyet',
        'Diş etinde şişlik',
      ],
    },
    {
      heading: 'Çürüğün gelişmesinde rol oynayan etkenler',
      items: [
        'Uyurken biberonla süt ya da şekerli içecek verilmesi',
        'Diş çıktıktan sonra gece boyunca süren sık beslenme ve beslenme sonrasında dişlerin temizlenmemesi',
        'Şekerli içeceklerin biberonla verilmesi',
        'Dişlerin düzenli fırçalanmaması',
        'Tatlı bir madde bulaştırılmış emziklerin kullanılması',
      ],
    },
    {
      heading: 'Nasıl önlenir?',
      items: [
        'İlk dişten itibaren dişlerin yumuşak bir fırçayla ya da temiz bir bezle temizlenmesi',
        'Yaşa uygun miktarda florlu macun kullanılması (üç yaşa kadar pirinç tanesi kadar)',
        'Uyku sırasında biberonda yalnızca su verilmesi',
        'Biberonun yaklaşık bir yaş civarında bırakılmasının hedeflenmesi',
        'İlk diş çıktıktan sonraki altı ay içinde ve en geç bir yaşına kadar ilk kontrole gelinmesi',
      ],
    },
    {
      heading: 'Tedavi seçenekleri',
      paragraphs: [
        'Tedavi çürüğün evresine göre planlanmaktadır. Başlangıç evresindeki lekeler flor uygulaması ve evde bakımla izlenebilmektedir. İlerlemiş çürüklerde dolgu, diş kaplaması ya da çekim gerekebilir. Çok sayıda dişin tedavisi gerektiğinde sedasyon ya da genel anestezi değerlendirilebilmektedir.',
      ],
    },
  ],
  steps: [
    { title: 'Muayene', text: 'Dişler ve diş etleri incelenir ve çürük riski değerlendirilmektedir.' },
    { title: 'Koruyucu uygulama', text: 'Gerekirse flor vernik uygulanır ve evde bakım önerileri verilmektedir.' },
    { title: 'Tedavi planı', text: 'Çürük varsa evresine göre dolgu, diş kaplaması ya da başka bir tedavi planlanmaktadır.' },
    { title: 'Takip', text: 'Beslenme ve fırçalama alışkanlıkları aile ile konuşulur ve düzenli kontrol planlanmaktadır.' },
  ],
  faq: [
    {
      q: 'Biberon çürüğü yalnızca biberon kullananlarda mı görülür?',
      a: 'Adı biberon çürüğü olsa da süt dişlerinin sık ve uzun süre şekerli sıvılarla temas ettiği her durumda görülebilmektedir.',
    },
    {
      q: 'Gece emzirmek çürüğe neden olur mu?',
      a: 'Diş çıktıktan sonra gece boyunca süren sık beslenme çürük riskini artırabilmektedir. Ancak her çocukta aynı sonuç görülmemektedir. Dişlerin beslenmeden sonra temizlenmesi ve düzenli kontrol riski azaltmaya yardımcı olur.',
    },
    {
      q: 'Süt dişindeki çürük tedavi edilmezse ne olur?',
      a: 'Ağrıya ve enfeksiyona neden olabilir ve süt dişinin erken kaybına yol açabilmektedir. Erken kaybedilen diş altındaki kalıcı dişin yerini ve çene gelişimini etkileyebilmektedir.',
    },
  ],
  relatedGuideIds: ['curuk-hizli-ilerleme', 'ilk-dis-hekimi-ziyareti'],
};

export default treatment;
