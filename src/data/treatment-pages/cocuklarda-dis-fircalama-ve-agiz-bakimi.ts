import type { Treatment } from './types';

const treatment: Treatment = {
  no: 28,
  slug: 'cocuklarda-dis-fircalama-ve-agiz-bakimi',
  category: 'koruyucu',
  icon: 'sparkles',
  title: 'Çocuklarda diş fırçalama ve ağız bakımı',
  summary:
    'Çocuklarda yaşa uygun fırçalama, macun miktarı, diş ipi kullanımı ve beslenme alışkanlıklarına ilişkin temel bilgilerin yer aldığı sayfadır.',
  image: '/dis-fircalama/firca-ve-macun.webp',
  imageAlt: 'Çocuk boyunda yumuşak kıllı diş fırçası, kıllarında pirinç tanesi büyüklüğünde macun ve yanında küçük bir diş macunu tüpü',
  imageRatio: 1672 / 941,
  seoTitle: 'Çocuklarda diş fırçalama ve ağız bakımı | Çocuk Diş Hekimi Dr. Ömer Özdemir',
  metaDescription:
    'Çocuklarda yaşa göre diş fırçalama, florürlü macun miktarı, diş ipi ve beslenme önerileri. Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
  keywords: [
    'çocuklarda diş fırçalama',
    'çocuk diş macunu',
    'diş ipi çocuk',
    'çocuklarda ağız bakımı',
    'çocuk diş hekimi Bakırköy',
  ],
  intro: [
    'Düzenli ağız bakımı çürük oluşumunu azaltan en temel koruyucu yöntemdir. Çocukların fırçalama becerisi yaşa göre gelişir ve küçük yaşlarda ebeveynin desteği gerekmektedir.',
    'Bu sayfada yaşa göre fırçalama önerileri macun miktarı ve beslenme konusunda genel bilgiler yer almaktadır. Çocuğa özel öneriler için hekim değerlendirmesi esastır.',
  ],
  sections: [
    {
      heading: 'Yaşa göre fırçalama',
      items: [
        'İlk dişten itibaren yumuşak fırça ve pirinç tanesi kadar florürlü macun kullanılması',
        'Üç yaşından sonra bezelye büyüklüğünde macun kullanılması',
        'Yedi sekiz yaşına kadar fırçalamanın ebeveyn gözetiminde ya da desteğiyle yapılması',
        'Günde iki kez ve özellikle akşam yatmadan önce fırçalanması',
      ],
    },
    {
      heading: 'Macun miktarı nasıl olmalıdır?',
      paragraphs: [
        'Macun miktarı yaşla birlikte artmaktadır. İlk dişlerden itibaren fırçanın kıllarına pirinç tanesi kadar macun konmaktadır. Üç yaşından sonra bezelye tanesi kadar kullanılır. Altı yaşından sonra nohut tanesi kadar macun yeterlidir. Yaşa uygun florür oranı için çocuğun hekimine danışılmalıdır.',
      ],
      images: [
        {
          src: '/dis-fircalama/macun-miktari.webp',
          alt: 'Üç farklı boyda çocuk diş fırçası, kıllarında sırasıyla pirinç tanesi, bezelye ve nohut büyüklüğünde macun ve yanlarında gerçek pirinç, bezelye ve nohut tanesi',
          caption: 'Yaşa göre macun miktarı, pirinç tanesi, bezelye ve nohut',
        },
      ],
    },
    {
      heading: 'Fırçalama tekniği',
      paragraphs: [
        'Fırça diş eti hizasında hafif açıyla tutulur ve küçük dairesel hareketlerle her diş yüzeyi temizlenmektedir. Süre yaklaşık iki dakika olmalıdır. Fırçalamadan sonra macun tükürülür ve ağız çok su ile çalkalanmamaktadır.',
      ],
    },
    {
      heading: 'Diş ipi',
      paragraphs: [
        'Dişler birbirine temas etmeye başladığında diş ipi kullanımı önerilmektedir. Küçük çocuklarda ebeveyn yardımı gerekir ve kullanımı için hekimden gösterim istenebilmektedir.',
      ],
    },
    {
      heading: 'Beslenme ve alışkanlıklar',
      items: [
        'Şekerli yiyecek ve içeceklerin gün içine yayılmak yerine öğün sırasında verilmesi',
        'Gece biberon ve şekerli içecek alışkanlığından kaçınılması',
        'Fırça tüyleri bozulduğunda ya da üç ayda bir fırçanın yenilenmesi',
        'Düzenli diş hekimi kontrollerinin yapılması',
      ],
    },
  ],
  steps: [
    { title: 'Ağız bakımı değerlendirmesi', text: 'Mevcut fırçalama alışkanlıkları ve diş yüzeyleri değerlendirilmektedir.' },
    { title: 'Tekniğin gösterimi', text: 'Fırçalama ve gerekirse diş ipi kullanımı çocuğa ve ebeveyne gösterilmektedir.' },
    { title: 'Kişisel öneriler', text: 'Yaşa uygun macun miktarı ve beslenme alışkanlıkları konuşulmaktadır.' },
    { title: 'Kontrol', text: 'Bakımın etkisi düzenli ziyaretlerde değerlendirilmektedir.' },
  ],
  faq: [
    {
      q: 'Florürlü macun küçük çocuklarda güvenli midir?',
      a: 'Yaşa uygun miktarda kullanıldığında önerilmektedir. Yutma riski nedeniyle miktara dikkat edilmesi önemlidir.',
    },
    {
      q: 'Çocuk fırçalamayı istemezse ne yapılabilir?',
      a: 'Oyunlaştırma, birlikte fırçalama ve çocuğun fırçayı seçmesi yardımcı olabilmektedir. Zorlanma olduğunda hekimden destek istenebilmektedir.',
    },
    {
      q: 'Elektrikli fırça kullanılabilir mi?',
      a: 'Yaşa uygun ve yumuşak başlıklı elektrikli fırçalar kullanılabilmektedir. Tekniğin doğru olması fırçanın türünden daha önemlidir.',
    },
  ],
  relatedGuideIds: ['curuk-hizli-ilerleme', 'ilk-dis-hekimi-ziyareti'],
};

export default treatment;
