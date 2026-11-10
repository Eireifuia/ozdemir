import type { Treatment } from './types';

const treatment: Treatment = {
  no: 29,
  slug: 'bebek-ve-cocuk-ilk-dis-muayenesi',
  category: 'koruyucu',
  icon: 'baby',
  title: 'Bebek ve çocuklarda ilk diş muayenesi',
  summary:
    'İlk randevu bir tedavi değil bir tanışmadır. İlk diş çıktıktan sonraki altı ay içinde ve en geç bir yaşına kadar önerilmektedir.',
  image: '/ilk-muayene/muayene-aletleri.webp',
  imageAlt: 'Yan yana duran bir diş aynası, bir sond ve çocuk boyunda mavi-beyaz bir diş fırçası',
  imageRatio: 1672 / 941,
  seoTitle: 'Bebeklerde ilk diş muayenesi ne zaman yapılır? | Çocuk Diş Hekimi Dr. Ömer Özdemir',
  metaDescription:
    'Bebek ve çocuklarda ilk diş hekimi ziyaretinin ne zaman olması gerektiği ve randevuda neler yapıldığı. Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den ilk diş muayenesi rehberi.',
  keywords: [
    'bebeklerde ilk diş muayenesi',
    'çocuk ilk diş hekimi ziyareti',
    'bebek diş bakımı',
    'çocuk diş hekimi Bakırköy',
    'çocuk diş hekimi Acıbadem',
  ],
  intro: [
    'Bu soru çoğu ailenin aklına geç gelmektedir. Yaygın kanı “dişler tamamlanınca” ya da “bir sorun olursa” yönündedir. Önerilen zamanlama ise çok daha erkendir. İlk diş çıktıktan sonraki altı ay içinde ve en geç bir yaşına kadar bir kontrol randevusu önerilmektedir.',
    'Bu ilk ziyaret bir tedavi randevusu değil tanışma ve bilgilendirme randevusudur. Çocuk için diş hekimi ağrıyla değil sakin bir kontrolle başlayan bir yer olmaktadır.',
  ],
  sections: [
    {
      heading: 'Muayene neden bu kadar erken yapılmaktadır?',
      items: [
        'Diş çıkışının normal ilerleyip ilerlemediğini kontrol etmek',
        'Ailelere doğru fırçalama ve beslenme ile biberon ve emzik alışkanlıkları konusunda yol göstermek',
        'Çocuğun diş hekimi koltuğuna, sese ve ışığa erken yaşta ve korku oluşmadan alışmasını sağlamak',
        'Çürük riskini erken fark etmek',
      ],
      paragraphs: [
        'Son madde küçümsenmemelidir. İlk diş hekimi deneyimini ağrı ya da acil bir durumda değil sakin bir kontrol sırasında yaşayan çocuk ilerleyen yıllarda diş hekimine çok daha rahat gelmektedir.',
      ],
    },
    {
      heading: 'Randevuda neler olmaktadır?',
      paragraphs: [
        'İlk randevu genellikle kısa sürmektedir. Diş sayısı ve konumu kontrol edilir ve çene ile ağız içi gelişime bakılmaktadır. Ardından ev bakımı anlatılır. Çocuk bu sırada kucağınızda olabilmektedir. Çocuk zorlanmaz ve amaç ilk deneyimi olabildiğince rahat geçirmektir.',
      ],
    },
    {
      heading: 'Evde bakım için kısa notlar',
      items: [
        'İlk dişten itibaren dişler yumuşak bir fırçayla ya da temiz bir bezle temizlenmelidir',
        'Florlu macun kullanımında yaşa uygun miktar kullanılmalıdır (üç yaşa kadar pirinç tanesi kadar)',
        'Uyurken biberonla süt veya şekerli içecek verilmesi çürük riskini artırır',
        'Şekerli atıştırmalarda miktardan çok sıklık önemlidir',
      ],
    },
  ],
  steps: [
    { title: 'Tanışma', text: 'Çocuk ve aile ortamı tanır ve hekimle ilk iletişim kurulmaktadır.' },
    { title: 'Muayene', text: 'Dişler, diş etleri ve çene gelişimi nazikçe kontrol edilmektedir.' },
    { title: 'Bilgilendirme', text: 'Fırçalama, beslenme ve alışkanlıklar hakkında aileye yol gösterilmektedir.' },
    { title: 'Kontrol planı', text: 'Çocuğun risk durumuna göre bir sonraki kontrol zamanı belirlenmektedir.' },
  ],
  faq: [
    {
      q: 'Bebeğim için ilk diş hekimi ziyareti ne zaman yapılmalıdır?',
      a: 'İlk diş çıktıktan sonraki altı ay içinde ve en geç bir yaşına kadar bir kontrol randevusu önerilmektedir.',
    },
    {
      q: 'Daha dişi yok ama merak ediyorum, gelebilir miyim?',
      a: 'Gelebilirsiniz. Diş çıkmadan da beslenme, emzik ve ağız bakımı konusunda bilgi almak için randevu alınabilmektedir.',
    },
    {
      q: 'Çocuğum ağlarsa ne olur?',
      a: 'Küçük çocukların ilk randevuda ağlaması sık görülür ve normaldir. Çocuk zorlanmaz ve kontrol çocuğun kucağınızda kalabileceği şekilde yapılmaktadır.',
    },
    {
      q: 'İlk randevuda tedavi yapılır mı?',
      a: 'Çoğu zaman yapılmamaktadır. İlk randevunun amacı tanışmak, muayene etmek ve bilgi vermektir. Tedavi gerekiyorsa ayrı bir randevuda planlanmaktadır.',
    },
  ],
  relatedGuideIds: ['ilk-dis-hekimi-ziyareti', 'sut-dislerinin-dokulme-takvimi'],
};

export default treatment;
