import type { Treatment } from './treatments';

export const extraTreatments: Treatment[] = [
  // ───────────── Koruyucu bakım ─────────────
  {
    slug: 'bebek-ve-cocuk-ilk-dis-muayenesi',
    category: 'koruyucu',
    icon: 'baby',
    title: 'Bebek ve Çocuklarda İlk Diş Muayenesi',
    summary:
      'İlk randevu bir tedavi değil, bir tanışma. İlk diş çıktıktan sonraki altı ay içinde, en geç bir yaşına kadar öneriliyor.',
    seoTitle: 'Bebeklerde İlk Diş Muayenesi Ne Zaman Yapılır? | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Bebek ve çocuklarda ilk diş hekimi ziyareti ne zaman olmalı, randevuda neler yapılır? Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den ilk diş muayenesi rehberi.',
    keywords: [
      'bebeklerde ilk diş muayenesi',
      'çocuk ilk diş hekimi ziyareti',
      'bebek diş bakımı',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Acıbadem',
    ],
    intro: [
      'Bu soruyu çoğu aile ya çok geç soruyor ya da hiç sormuyor. Yaygın kanı “dişler tamamlanınca” ya da “bir sorun olursa” yönünde. Önerilen zamanlama ise çok daha erken: ilk diş çıktıktan sonraki altı ay içinde, en geç bir yaşına kadar bir kontrol randevusu.',
      'Bu ilk ziyaret bir tedavi randevusu değil, bir tanışma ve bilgilendirme randevusu. Çocuk için diş hekimi, ağrıyla değil sakin bir kontrolle başlayan bir yer oluyor.',
    ],
    sections: [
      {
        heading: 'Neden bu kadar erken?',
        items: [
          'Diş çıkışının normal ilerleyip ilerlemediğini kontrol etmek',
          'Ailelere doğru fırçalama, beslenme ve biberon/emzik alışkanlıkları konusunda yol göstermek',
          'Çocuğun diş hekimi koltuğuna, sese ve ışığa erken yaşta, korku oluşmadan alışmasını sağlamak',
          'Çürük riskini erken fark etmek',
        ],
        paragraphs: [
          'Son madde küçümsenmemeli. İlk diş hekimi deneyimini ağrı ya da acil bir durumda değil, sakin bir kontrol sırasında yaşayan çocuk, ilerleyen yıllarda diş hekimine çok daha rahat geliyor.',
        ],
      },
      {
        heading: 'Randevuda neler oluyor?',
        paragraphs: [
          'İlk randevu genellikle kısa sürüyor. Diş sayısı ve konumu kontrol ediliyor, çene ve ağız içi gelişime bakılıyor, ev bakımı anlatılıyor. Çocuk bu sırada kucağınızda olabilir. Hiçbir şey zorlanmıyor, amaç ilk deneyimi olabildiğince rahat geçirmek.',
        ],
      },
      {
        heading: 'Evde bakım için kısa notlar',
        items: [
          'İlk dişten itibaren dişler yumuşak bir fırçayla ya da temiz bir bezle temizlenmeli',
          'Florlu macun kullanımında yaşa uygun miktar kullanılmalı (üç yaşa kadar pirinç tanesi kadar)',
          'Uyurken biberonla süt veya şekerli içecek verilmesi çürük riskini artırıyor',
          'Şekerli atıştırmalarda miktardan çok sıklık önemli',
        ],
      },
    ],
    steps: [
      { title: 'Tanışma', text: 'Çocuk ve aile ortamı tanıyor, hekimle ilk iletişim kuruluyor.' },
      { title: 'Muayene', text: 'Dişler, diş etleri ve çene gelişimi nazikçe kontrol ediliyor.' },
      { title: 'Bilgilendirme', text: 'Fırçalama, beslenme ve alışkanlıklar hakkında aileye yol gösteriliyor.' },
      { title: 'Kontrol planı', text: 'Çocuğun risk durumuna göre bir sonraki kontrol zamanı belirleniyor.' },
    ],
    faq: [
      {
        q: 'Bebeğim için ilk diş hekimi ziyareti ne zaman yapılmalı?',
        a: 'İlk diş çıktıktan sonraki altı ay içinde, en geç bir yaşına kadar bir kontrol randevusu önerilir.',
      },
      {
        q: 'Daha dişi yok ama merak ediyorum, gelebilir miyim?',
        a: 'Evet. Diş çıkmadan da beslenme, emzik ve ağız bakımı konusunda bilgi almak için randevu alınabilir.',
      },
      {
        q: 'Çocuğum ağlarsa ne olur?',
        a: 'Küçük çocukların ilk randevuda ağlaması çok sık görülüyor ve normal. Hiçbir şey zorlanmıyor, kontrol çocuğun kucağınızda kalabileceği şekilde yapılıyor.',
      },
      {
        q: 'İlk randevuda tedavi yapılır mı?',
        a: 'Çoğu zaman hayır. İlk randevunun amacı tanışmak, muayene etmek ve bilgi vermek. Tedavi gerekiyorsa ayrı bir randevuda planlanıyor.',
      },
    ],
    relatedGuideIds: ['ilk-dis-hekimi-ziyareti', 'sut-dislerinin-dokulme-takvimi'],
  },
  {
    slug: 'cocuklarda-flor-uygulamasi',
    category: 'koruyucu',
    icon: 'droplets',
    title: 'Çocuklarda Flor Uygulaması',
    summary:
      'Dişi çürüğe karşı güçlendiren hızlı ve rahat bir uygulama. Sıklığı çocuğun çürük riskine göre belirleniyor. Üç aşamada nasıl yapıldığı görsellerle anlatılıyor.',
    image: '/flor/asama-2-vernik.jpg',
    imageAlt: 'Süt ön dişlerine fırçayla flor vernik sürülmesi illüstrasyonu',
    imageRatio: 2000 / 1116,
    seoTitle: 'Çocuklarda Flor Uygulaması Nedir, Güvenli mi? | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Çocuklarda flor vernik uygulaması ne işe yarar, kaç yaşında ve ne sıklıkla yapılır, güvenli mi? Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'çocuklarda flor uygulaması',
      'flor vernik',
      'süt dişi flor',
      'çürük önleme',
      'çocuk diş hekimi Bakırköy',
    ],
    intro: [
      'Flor, diş minesini asit saldırılarına karşı güçlendiren bir mineral. Diş hekimi tarafından uygulanan flor vernik, çürük riskini azaltmak için en yaygın ve en pratik koruyucu yöntemlerden biri.',
      'Uygulama birkaç dakika sürüyor, çocuklar için genellikle rahat bir işlem. Fırçayla dişlerin üzerine sürülüyor, matkap ya da iğne söz konusu değil.',
    ],
    sections: [
      {
        heading: 'Kimlere öneriliyor?',
        paragraphs: [
          'İlk dişin çıkışından itibaren, çocuğun çürük riskine göre değerlendiriliyor. Özellikle şu durumlarda daha sık uygulama gündeme gelebiliyor:',
        ],
        items: [
          'Daha önce çürük geçirmiş çocuklar',
          'Beslenmesinde şekerli ve yapışkan atıştırmalar fazla olanlar',
          'Diş teli veya aparey kullananlar',
          'Dişlerde beyaz lekeler ya da mine zayıflığı görülenler',
        ],
      },
      {
        heading: 'Güvenli mi?',
        paragraphs: [
          'Diş hekimi tarafından, yaşa uygun az miktarda uygulandığında flor vernik güvenli kabul ediliyor. Evde ise yaşa uygun miktarda florlu macun kullanımı yeterli. Fazla yutulmaması için çocuğun macunu tükürmesi, küçük çocuklarda miktarın ebeveyn tarafından ayarlanması öneriliyor.',
        ],
      },
      {
        heading: 'Uygulamadan sonra',
        paragraphs: [
          'Uygulama sonrası ne kadar süre bir şey yenilmemesi ya da içilmemesi gerektiği kullanılan ürüne göre değişiyor. Uygulamadan sonra bu konuda net bilgi veriliyor.',
        ],
      },
    ],
    stepsEyebrow: 'Aşama Aşama',
    stepsHeading: 'Flor vernik nasıl uygulanıyor?',
    steps: [
      {
        title: 'Aşama 1: Dişler polisajla temizlenip kurutuluyor',
        text: 'Önce dişlerin yüzeyi polisajla (cilalama) temizleniyor, ardından hava ile kurutuluyor. Temiz ve kuru yüzey, verniğin dişe daha iyi tutunmasını sağlıyor. Görselde kurutulan dişler daha mat ve kireç beyazı görünüyor. Çocuk yalnızca hafif bir hava esintisi hissediyor.',
        image: '/flor/asama-1-hazirlik.jpg',
        imageAlt: 'Flor aşama 1: polisaj sonrası süt ön dişlerinin hava ile kurutulması',
      },
      {
        title: 'Aşama 2: Vernik fırçayla sürülüyor',
        text: 'Flor vernik, küçük bir fırçayla dişlerin ön yüzeyine ince, şeffaf bir tabaka halinde sürülüyor. Vernik dişin yüzeyinde tutunup parlak bir film oluşturuyor. İşlem birkaç dakika sürüyor ve çocuklar için çoğunlukla rahat. Matkap ya da iğne söz konusu değil.',
        image: '/flor/asama-2-vernik.jpg',
        imageAlt: 'Flor aşama 2: süt ön dişlerine fırçayla ince bir flor vernik tabakası sürülmesi',
      },
      {
        title: 'Aşama 3: Flor mineyi güçlendiriyor',
        text: 'Vernikteki flor ve mineral parçacıkları dişin dış tabakası olan mineye geçiyor ve minenin yapısını asitlere karşı daha dirençli hale getiriyor. Süt dişi minesi kalıcı dişe göre daha ince olduğu için bu tür koruyucu uygulamalar önem taşıyor. Görselde dişin katmanları görülüyor: vernik, mine, dentin ve ortada sinir dokusu. Uygulamadan sonra yeme-içme ve fırçalama konusunda aileye net bilgi veriliyor.',
        image: '/flor/asama-3-mine-kesiti.jpg',
        imageAlt: 'Flor aşama 3: süt dişinin kesitinde verniğin mineye geçen flor ve mineral parçacıklarıyla güçlendirmesi',
      },
    ],
    faq: [
      {
        q: 'Flor uygulaması çocuklar için zararlı mı?',
        a: 'Diş hekimi tarafından uygun yaşta ve doğru miktarda uygulandığında güvenli kabul ediliyor. Evde de yaşa uygun miktarda macun kullanmak önemli.',
      },
      {
        q: 'Flor uygulaması ne sıklıkla yapılmalı?',
        a: 'Çocuğun çürük riskine göre değişiyor. Risk yüksekse daha sık, düşükse daha seyrek uygulama yapılabiliyor. Karar muayenede veriliyor.',
      },
      {
        q: 'Flor uygulaması acıtır mı?',
        a: 'Hayır. Fırçayla sürülen bir uygulama, işlem sırasında acı ya da rahatsızlık beklenmiyor.',
      },
    ],
    relatedGuideIds: ['curuk-hizli-ilerleme', 'ilk-dis-hekimi-ziyareti'],
  },
  {
    slug: 'fissur-ortucu',
    category: 'koruyucu',
    icon: 'shield',
    title: 'Fissür Örtücü (Azı Dişi Koruyucusu)',
    summary:
      'Azı dişlerinin çiğneme yüzeyindeki derin oluklar kapatılıyor, çürük bu bölgelerde barınamıyor. Beş aşamada nasıl yapıldığı görsellerle anlatılıyor.',
    image: '/fissur-ortucu/asama-3-ortucu-uygulama.jpg',
    imageAlt: 'Azı dişinin çiğneme yüzeyindeki oluklara fissür örtücü uygulanması illüstrasyonu',
    imageRatio: 2000 / 1116,
    seoTitle: 'Fissür Örtücü Nedir, Çocuklarda Ne Zaman Yapılır? | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Fissür örtücü (fissür sealant) azı dişlerini çürükten nasıl korur? Çocuklarda kaç yaşında yapılır, acıtır mı? Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'fissür örtücü',
      'fissür sealant',
      'çocuklarda azı dişi koruyucu',
      '6 yaş dişi',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Acıbadem',
    ],
    intro: [
      'Azı dişlerinin çiğneme yüzeyinde derin çukur ve oluklar bulunuyor. Diş fırçası bu bölgelerin içine çoğu zaman tam ulaşamıyor, yiyecek ve bakteri orada birikiyor. Çürüğün en sık başladığı yerlerden biri de burası.',
      'Fissür örtücü, bu oluklara ince bir akıcı reçine akıtılarak onları kapatan koruyucu bir uygulama. Dişten bir şey kesilmiyor, kaldırılmıyor.',
    ],
    sections: [
      {
        heading: 'Ne zaman yapılır?',
        paragraphs: [
          'En sık, yaklaşık 6 yaşında çıkan ilk kalıcı azı dişlerine ve yaklaşık 12 yaşında çıkan ikinci kalıcı azı dişlerine uygulanıyor. Yeni çıkan kalıcı dişler tamamen olgunlaşmadığı için bu dönem koruma açısından önemli. Çürük riski yüksekse süt azılarına da uygulanabiliyor.',
        ],
      },
      {
        heading: 'İşlem acıtır mı?',
        paragraphs: [
          'İşlem genellikle anestezi ya da matkap gerektirmiyor. Diş kesilmiyor, kaldırılmıyor. Dişin üzerine ince bir koruyucu tabaka ekleniyor. Birkaç dakika sürüyor ve çocuklar için çoğunlukla rahat bir işlem. Beş aşaması aşağıda görsellerle anlatılıyor.',
        ],
      },
      {
        heading: 'Ne kadar dayanır?',
        paragraphs: [
          'Örtücü yıllarca dayanabiliyor ama çiğneme kuvvetiyle aşınabiliyor veya kısmen kopabiliyor. Bu yüzden düzenli kontrollerde bakılıyor ve gerektiğinde yenileniyor. Fırçalama alışkanlığının yerine geçmiyor, onu tamamlayan bir koruma.',
        ],
      },
    ],
    stepsEyebrow: 'Aşama Aşama',
    stepsHeading: 'Fissür örtücü nasıl uygulanıyor?',
    steps: [
      {
        title: 'Aşama 1: Muayene ve fissürlerin tespiti',
        text: 'Önce azı dişinin çiğneme yüzeyindeki derin oluklara (fissürlere) bakılıyor. Bu oluklar o kadar dar ki fırçanın kılları çoğu zaman dibine ulaşamıyor, yemek artığı ve bakteri tam orada birikiyor. Hekim ince bir aletle olukları kontrol ediyor. Çürük başlamışsa önce onun durumu değerlendiriliyor, örtücü ancak uygun dişlere yapılıyor.',
        image: '/fissur-ortucu/asama-1-muayene.jpg',
        imageAlt: 'Fissür örtücü aşama 1: azı dişindeki derin olukların ince bir aletle muayenesi',
      },
      {
        title: 'Aşama 2: Pürüzlendirici jel',
        text: 'Dişe mavi renkli bir jel (asit) sürülüyor. Bu jel dişin yüzeyini mikroskobik düzeyde hafifçe pürüzlendiriyor, böylece örtücü dişe sıkıca tutunabiliyor. Kısa süre bekletildikten sonra jel yıkanıyor ve diş iyice kurutuluyor. Çocuk bu sırada bir şey hissetmiyor.',
        image: '/fissur-ortucu/asama-2-asit-jel.jpg',
        imageAlt: 'Fissür örtücü aşama 2: azı dişine mavi pürüzlendirici jelin uygulanması',
      },
      {
        title: 'Aşama 3: Fissür örtücü uygulaması',
        text: 'Akıcı kıvamdaki örtücü malzeme olukların içine akıtılıyor, tüm derin girintilere sızıyor. Halk arasında bazen “diş aşısı” deniyor ama bu gerçek bir aşı değil, olukları kapatan koruyucu bir kaplama. Diş kesilmiyor, matkap kullanılmıyor.',
        image: '/fissur-ortucu/asama-3-ortucu-uygulama.jpg',
        imageAlt: 'Fissür örtücü aşama 3: akıcı örtücü malzemenin azı dişinin oluklarına uygulanması',
      },
      {
        title: 'Aşama 4: Mavi ışıkla sertleştirme',
        text: 'Örtücü, özel bir mavi (LED) ışıkla kısa sürede sertleştiriliyor. Işık ağrı yapmıyor. Sertleştikten sonra örtücü dişe tutunmuş oluyor ve çiğneme kuvvetine dayanabiliyor. Ardından kapanışa bakılıyor, gerekirse ince bir düzeltme yapılıyor.',
        image: '/fissur-ortucu/asama-4-isikla-sertlestirme.jpg',
        imageAlt: 'Fissür örtücü aşama 4: örtücünün mavi LED ışıkla sertleştirilmesi',
      },
      {
        title: 'Aşama 5: Önce ve sonra',
        text: 'Solda korumasız bir azı dişi var: derin oluklarında yemek artığı ve bakteri birikmesine açık, fırçanın ulaşamadığı girintiler. Sağda ise olukları örtülmüş, pürüzsüz bir yüzey. Bu yüzey, bakterilerin ve yemek artıklarının oluklara yerleşmesini büyük ölçüde engelliyor. Örtücü kontrollerde gözden geçiriliyor, kopma ya da aşınma varsa yenileniyor.',
        image: '/fissur-ortucu/asama-5-once-sonra.jpg',
        imageAlt: 'Fissür örtücü aşama 5: korumasız azı dişi ile örtücü uygulanmış azı dişinin kıyaslaması',
      },
    ],
    faq: [
      {
        q: 'Fissür örtücü acıtır mı?',
        a: 'İşlem genellikle anestezi ya da matkap gerektirmiyor. Çocuklar için çoğunlukla rahat bir uygulama.',
      },
      {
        q: 'Fissür örtücü çürüğü tamamen önler mi?',
        a: 'Çürük riskini belirgin şekilde azaltıyor ama tek başına yeterli değil. Düzenli fırçalama, beslenme alışkanlıkları ve kontroller birlikte düşünülmeli.',
      },
      {
        q: 'Örtücü düşerse ne olur?',
        a: 'Kısmen ya da tamamen kopabiliyor. Kontrollerde fark edilirse yenileniyor. Kopan bölgenin açıkta kalması çürük riskini yeniden artırdığı için kontrolleri aksatmamak önemli.',
      },
    ],
    relatedGuideIds: ['curuk-hizli-ilerleme', 'sut-dislerinin-dokulme-takvimi'],
  },
  {
    slug: 'cocuklarda-dis-tasi-temizligi',
    category: 'koruyucu',
    icon: 'sparkles',
    title: 'Çocuklarda Diş Taşı ve Plak Temizliği',
    summary:
      'Diş eti kanamasını ve ağız kokusunu azaltan, çocuğa uygun nazik bir temizlik. Ergenlikte ve diş telinde daha da önemli.',
    seoTitle: 'Çocuklarda Diş Taşı Temizliği ve Diş Eti Kanaması | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Çocuklarda diş taşı olur mu, diş eti kanaması neden olur? Çocuklarda profesyonel diş temizliği hakkında Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'çocuklarda diş taşı',
      'çocuk diş temizliği',
      'çocuklarda diş eti kanaması',
      'çocuklarda ağız kokusu',
      'çocuk diş hekimi Bakırköy',
    ],
    intro: [
      'Diş taşı sadece yetişkinlerin sorunu değil. Çocuklarda da, özellikle fırçalamanın yetersiz kaldığı bölgelerde plak birikip zamanla sertleşerek diş taşına dönüşebiliyor.',
      'Diş taşı diş etini tahriş ediyor, kanamaya ve ağız kokusuna yol açabiliyor. Düzenli ve nazik bir temizlik hem çocuğun ağız sağlığını hem de bakım alışkanlığını destekliyor.',
    ],
    sections: [
      {
        heading: 'Çocuklarda diş taşı ne zaman artıyor?',
        items: [
          'Fırçalamanın tek başına yapılması ve ulaşılmayan bölgelerin kalması',
          'Ergenlikte hormonal değişimle diş eti hassasiyetinin artması',
          'Diş teli veya aparey kullanımı',
          'Ağızdan nefes alma ve ağız kuruluğu',
        ],
      },
      {
        heading: 'Belirtiler',
        items: [
          'Fırçalarken diş etlerinde kanama',
          'Diş etlerinde kızarıklık ve şişlik',
          'Geçmeyen ağız kokusu',
          'Dişlerde sarımsı veya kahverengi birikinti',
        ],
      },
      {
        heading: 'Temizlik nasıl yapılıyor?',
        paragraphs: [
          'Çocuğa uygun el aletleri ve titreşimsiz yöntemlerle plak ve diş taşı nazikçe temizleniyor. Ardından dişler cilalanıyor. İşlem sırasında çocuğa ne yapıldığı anlatılıyor, hassasiyet varsa durulup ara verilebiliyor. Sonrasında evde doğru fırçalama ve diş ipi kullanımı gösteriliyor.',
        ],
      },
    ],
    steps: [
      { title: 'Muayene', text: 'Diş eti durumu ve birikinti miktarı değerlendiriliyor.' },
      { title: 'Temizlik', text: 'Plak ve diş taşı nazikçe uzaklaştırılıyor.' },
      { title: 'Cilalama', text: 'Dişler cilalanarak yüzey pürüzsüzleştiriliyor.' },
      { title: 'Ev bakımı', text: 'Fırçalama ve diş ipi tekniği çocuğa ve aileye gösteriliyor.' },
    ],
    faq: [
      {
        q: 'Çocuklarda diş taşı olur mu?',
        a: 'Evet, olabiliyor. Özellikle ergenlikte, diş teli kullanırken ve fırçalamanın yetersiz kaldığı durumlarda görülme sıklığı artıyor.',
      },
      {
        q: 'Çocuğumun diş eti kanıyor, ne yapmalıyım?',
        a: 'Fırçalamayı bırakmak yerine nazikçe sürdürmek ve bir kontrol randevusu almak gerekiyor. Kanama çoğu zaman diş etindeki iltihaplanmaya, yani yetersiz plak temizliğine işaret ediyor.',
      },
      {
        q: 'Diş temizliği çocuğun dişlerine zarar verir mi?',
        a: 'Çocuğa uygun yöntemlerle yapıldığında zarar vermez. Temizlik sonrası hassasiyet kısa sürede geçiyor.',
      },
    ],
    relatedGuideIds: ['curuk-hizli-ilerleme', 'ortodontik-tedavi-baslangici'],
  },

  // ───────────── Onarıcı tedavi ─────────────
  {
    slug: 'arayuz-curukleri',
    category: 'onarici',
    icon: 'layers',
    title: 'Arayüz Çürükleri (Dişler Arası Çürük)',
    summary:
      'İki dişin birbirine değdiği yüzeyde başlayan, gözle fark etmesi en zor çürük türü. Beş evrede nasıl ilerlediği görsellerle anlatılıyor.',
    image: '/arayuz-curugu/evre-2-mine-dentin.jpg',
    imageAlt: 'İki komşu azı dişi arasında ilerleyen arayüz çürüğü illüstrasyonu',
    imageRatio: 2000 / 1116,
    seoTitle: 'Arayüz Çürüğü (Dişler Arası Çürük) Evreleri ve Tedavisi | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Dişler arası çürük nedir, nasıl fark edilir, evreleri nelerdir? Çocuklarda arayüz çürüğünün beş evresi görsellerle anlatılıyor. Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir.',
    keywords: [
      'arayüz çürüğü',
      'dişler arası çürük',
      'çocuklarda arayüz çürüğü',
      'süt azı çürüğü',
      'interproksimal çürük',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Acıbadem',
    ],
    intro: [
      'Arayüz çürüğü, iki dişin birbirine değdiği yüzeyde başlayan çürük. Yani dişin dışarıdan görünen yüzünde değil, komşusuyla arasında, gözün ve fırçanın ulaşamadığı yerde.',
      'Çocuklarda en sık süt azılarında görülüyor. Çünkü süt azıları birbirine geniş ve düz bir yüzeyle değiyor, yemek artığı tam oraya yerleşiyor. Dışarıdan bakınca her şey yolunda görünürken içeride çürük çoktan çalışmaya başlamış olabiliyor.',
    ],
    sections: [
      {
        heading: 'Neden fark edilmesi bu kadar zor?',
        paragraphs: [
          'Çürüğün başladığı yer iki dişin tam arası olduğu için çoğu zaman ne ebeveyn ne çocuk bir şey görebiliyor. Ağrı da çok geç başlıyor. Bu yüzden arayüz çürükleri en sık, rutin kontrol sırasında ve röntgende fark ediliyor.',
          'Muayenede çocuğun yaşına ve çürük riskine göre ısırma röntgeni (bitewing) alınabiliyor. Bu röntgen, gözle görülmeyen çürüğü erken yakalamanın en güvenilir yolu.',
        ],
      },
      {
        heading: 'Neden önemli?',
        paragraphs: [
          'Arayüzde başlayan çürük sessiz ilerliyor, fark edildiğinde çoğu zaman dişin içinde dışarıdan göründüğünden çok daha büyük bir boşluk oluşmuş oluyor. Aşağıdaki beş evreye bakınca bunu net görmek mümkün. İlk evrede çoğu zaman matkap bile gerekmiyor, son evrelerde ise tedavi hem daha uzun hem daha zahmetli oluyor.',
        ],
      },
      {
        heading: 'Nasıl önlenir?',
        items: [
          'Diş ipi: iki diş birbirine değmeye başladığı andan itibaren günde bir kez, çocuklarda ebeveyn yardımıyla',
          'Günde iki kez, yaşa uygun miktarda florlu macunla fırçalama',
          'Şekerli ve yapışkan atıştırmaların sıklığını azaltma (miktardan çok sıklık önemli)',
          'Düzenli kontrol ve gerekirse röntgen ile erken tespit',
          'Koruyucu flor uygulaması',
        ],
      },
    ],
    stepsEyebrow: 'Evre Evre',
    stepsHeading: 'Arayüz çürüğü nasıl ilerliyor?',
    steps: [
      {
        title: 'Evre 1: Mine yüzeyinde beyaz leke',
        text: 'Çürüğün henüz delik açmadığı, sadece uyarı verdiği evre. Mine mineral kaybetmeye başlıyor, dişin yüzeyinde mat beyaz ya da hafif kahverengimsi bir leke görünüyor. Bu aşama aslında en şanslı aşama: doğru fırçalama, diş ipi ve flor uygulaması ile çoğu zaman durdurulabiliyor, bazen matkap hiç gerekmiyor.',
        image: '/arayuz-curugu/evre-1-beyaz-leke.jpg',
        imageAlt: 'Arayüz çürüğü evre 1: iki dişin arasında mine yüzeyinde beyaz çürük lekesi',
      },
      {
        title: 'Evre 2: Mine ve dentine ilerleyen çürük',
        text: 'Çürük minenin altındaki yumuşak tabakaya, yani dentine ulaştı. Dentin minenin aksine çok daha yumuşak olduğu için çürük burada hızlanıyor. Dışarıdan hâlâ küçük bir leke gibi görünebiliyor ama içeride lekenin çok üzerinde bir boşluk oluşmuş oluyor. Tedavi dolgu: çürük temizleniyor, diş onarılıyor.',
        image: '/arayuz-curugu/evre-2-mine-dentin.jpg',
        imageAlt: 'Arayüz çürüğü evre 2: çürüğün minenin altındaki dentine ilerlemesi',
      },
      {
        title: 'Evre 3: Derin çürük ve sinirde iltihap',
        text: 'Çürük artık sinire (pulpa) çok yaklaştı. Sinir tahriş oluyor, görselde kırmızıyla gösterilen bölge iltihaplanmış pulpayı anlatıyor. Çocuk soğuk ya da sıcakta sızlama, geceleri uyandıran ağrı şikayeti yaşayabiliyor. Bu evrede dişi kurtarmak için yarı kanal ya da kanal tedavisi gündeme geliyor.',
        image: '/arayuz-curugu/evre-3-pulpa-iltihabi.jpg',
        imageAlt: 'Arayüz çürüğü evre 3: sinirde (pulpa) iltihap gelişmiş derin çürük',
      },
      {
        title: 'Evre 4: Sinirin ölümü ve kök ucunda apse',
        text: 'Tedavi edilmeyen iltihap sinirin ölümüne yol açıyor, enfeksiyon kök ucuna geçip çevre dokuda toplanabiliyor (görseldeki kırmızı halkalar). Diş etinde şişlik, sivilce benzeri bir çıkıntı, ateş ya da yüzde şişlik görülebiliyor. Bu belirtilerden herhangi biri varsa beklemeden kliniğe ulaşınız. Tedavi, dişin durumuna göre kanal tedavisi ya da çekim olabiliyor.',
        image: '/arayuz-curugu/evre-4-apse.jpg',
        imageAlt: 'Arayüz çürüğü evre 4: ölmüş sinir ve kök ucunda enfeksiyon (apse)',
      },
      {
        title: 'Evre 5: Üstten bakış, iki dişin arasındaki yıkım',
        text: 'Aynı tabloya çiğneme yüzeyinden (okluzal) bakınca iki komşu dişin birbirine bakan yüzeylerinin göçtüğü, aralarında yemek artıklarının sıkıştığı net görülüyor. Fotoğraf çekmeden önce fark etmek zor ama ağızda artık çok belirgin bir durum. Bu aşamada diş genellikle kuron (diş kaplaması) ile korunuyor, korunamayacak durumdaysa çekim ve yer tutucu planlanıyor.',
        image: '/arayuz-curugu/evre-5-okluzal.jpg',
        imageAlt: 'Arayüz çürüğü evre 5: komşu iki azı dişinin çiğneme yüzeyinden görünüşü',
      },
    ],
    faq: [
      {
        q: 'Arayüz çürüğü nedir?',
        a: 'İki dişin birbirine değdiği yüzeyde başlayan çürük. Dişin dışarıdan görünen yüzünde değil, komşu diş ile arasındaki bölgede geliştiği için gözle fark edilmesi zor.',
      },
      {
        q: 'Dişler arası çürük gözle görülmez mi?',
        a: 'Çoğu zaman görülmez. İlk evrede yalnızca ince bir leke olabiliyor, ilerlediğinde de dışarıdan görünenden çok daha büyük olabiliyor. Rutin kontrol ve gerekirse ısırma röntgeni ile erken tespit ediliyor.',
      },
      {
        q: 'Çocuklarda diş ipi ne zaman kullanılmalı?',
        a: 'İki diş birbirine değmeye başladığında, günde bir kez ve ebeveyn yardımıyla öneriliyor. Fırçanın ulaşamadığı yüzeyleri temizleyebilen tek yöntem diş ipi.',
      },
      {
        q: 'Beyaz leke gördüm, ne yapmalıyım?',
        a: 'Mine kaybı henüz çukur oluşturmadıysa doğru fırçalama, diş ipi ve flor uygulaması ile çoğu zaman durdurulabiliyor. Lekenin bu aşamada olup olmadığına muayenede bakılması gerekiyor.',
      },
      {
        q: 'Çocuğa röntgen çekmek güvenli mi?',
        a: 'Diş röntgenleri çok küçük bölgeyi ve çok düşük dozu kapsıyor. Yalnızca gerektiğinde, çocuğa uygun koruyucu önlemlerle alınıyor.',
      },
    ],
    relatedGuideIds: ['curuk-hizli-ilerleme', 'cocuklarda-kanal-tedavisi', 'yari-kanal-tedavisi-amputasyon'],
  },
  {
    slug: 'cocuklarda-dis-kaplamasi',
    category: 'onarici',
    icon: 'crown',
    title: 'Çocuklarda Diş Kaplaması (Paslanmaz Çelik Kuron ve Zirkonyum)',
    summary:
      'Çok yıpranmış ya da kanal tedavisi görmüş süt dişi, kaplama (kuron) ile korunuyor. Böylece diş çekilmeden çiğneme işlevini sürdürüyor. Beş aşamada nasıl yapıldığı görsellerle anlatılıyor.',
    image: '/dis-kronu/asama-4-kron-yerlestirme.jpg',
    imageAlt: 'Süt azı dişine paslanmaz çelik kuronun yerleştirilmesi illüstrasyonu',
    imageRatio: 2000 / 1116,
    seoTitle: 'Çocuklarda Diş Kaplaması (Kuron): Paslanmaz Çelik ve Zirkonyum | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Süt dişine kaplama (diş şapkası) ne zaman gerekir? Paslanmaz çelik kuron ve zirkonyum kuron arasındaki fark nedir? Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'çocuklarda diş kaplaması',
      'çocuklarda diş kuronu',
      'süt dişi kaplama',
      'diş şapkası',
      'paslanmaz çelik kuron',
      'zirkonyum kuron çocuk',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Acıbadem',
    ],
    intro: [
      'Bazı süt dişleri çürük, kanal tedavisi ya da yapısal bozukluk nedeniyle dolgunun tutunamayacağı kadar zayıflıyor. Böyle durumlarda dişi tamamen kaplayan bir diş kaplaması (kuron), dişi çekmeden korumanın en dayanıklı yollarından biri. Halk arasında “diş şapkası” da deniyor.',
      'Kaplama, dişin kalıcı diş çıkana kadar çiğneme işlevini sürdürmesini ve yerini korumasını sağlıyor.',
    ],
    sections: [
      {
        heading: 'Dişten çok madde gittiğinde dolgu neden yetmiyor?',
        paragraphs: [
          'Dolgu, dişin kalan duvarlarına tutunarak çalışıyor. Çürük dişin büyük bölümünü götürdüğünde geride geniş bir boşluk ve ince, zayıf duvarlar kalıyor. Bu duvarlar çiğneme kuvvetini tek başına taşıyamıyor, dolgu da bu zayıf zemine tutunmakta zorlanıyor. Sonuçta dolgu düşebiliyor ya da kalan diş yapısı kırılabiliyor.',
          'Diş kaplaması ise dişin kalan yapısını bir şapka gibi baştan sona örtüyor. Çiğneme yükü dişin tamamına dağılıyor, kalan diş yapısı korunuyor. Bu yüzden diş yapısının büyük kısmının kaybolduğu süt azılarında çoğunlukla dolgudan daha uygun bir seçenek.',
        ],
      },
      {
        heading: 'Hangi durumlarda gerekiyor?',
        items: [
          'Geniş çürük nedeniyle dolgu yapılamayan dişler',
          'Kanal ya da yarı kanal tedavisi sonrası zayıflayan dişler',
          'Mine yapısı bozuk dişler (örneğin MIH)',
          'Dişte kırık ya da aşınma',
        ],
      },
      {
        heading: 'Kaplama türleri',
        items: [
          'Paslanmaz çelik kuron: Dayanıklı ve süt azı dişlerinde yaygın kullanılan seçenek',
          'Zirkonyum veya estetik kuron: Diş renginde, özellikle ön dişlerde estetik açıdan tercih edilebilen seçenek',
        ],
        paragraphs: [
          'Hangi türün uygun olduğuna dişin konumu, çürüğün kapsamı ve çocuğun yaşı birlikte değerlendirilerek karar veriliyor.',
        ],
      },
      {
        heading: 'Kaplama düşünce ne olacak?',
        paragraphs: [
          'Süt dişi zamanı geldiğinde dökülürken kuron da onunla birlikte çıkıyor. Kalıcı diş sorunsuz şekilde yerini alıyor.',
        ],
      },
    ],
    stepsEyebrow: 'Aşama Aşama',
    stepsHeading: 'Paslanmaz çelik kuron nasıl yapılıyor?',
    steps: [
      {
        title: 'Aşama 1: Dişin büyük bölümü çürümüş',
        text: 'Soldaki dişe bakın: çürük çiğneme yüzeyini ve yan duvarları geniş ölçüde götürmüş, dişin ciddi miktarda yapısı kaybolmuş. Sağdaki sağlam komşu diş, olması gereken yapıyı gösteriyor. Bu kadar madde kaybından sonra dişi sadece dolguyla onarmak çoğu zaman kalıcı olmuyor. Muayene ve röntgenle çürüğün sinire yakınlığı değerlendiriliyor, tedavi planı buna göre yapılıyor.',
        image: '/dis-kronu/asama-1-cok-curumus-dis.jpg',
        imageAlt: 'Diş kaplaması aşama 1: büyük bölümü çürümüş süt azı dişi ile yanındaki sağlam dişin kıyaslaması',
      },
      {
        title: 'Aşama 2: Çürük temizleniyor',
        text: 'Anestezi ile diş uyuşturulduktan sonra çürük doku tamamen temizleniyor. Geride sağlam dişin ince duvarları ve geniş bir boşluk kalıyor. Bu görüntü neden kaplama gerektiğini de açıklıyor: bu kadar boşluk olan bir dişte dolgunun tutunacağı kalın bir duvar yok. Çocuk işlem boyunca ağrı hissetmiyor.',
        image: '/dis-kronu/asama-2-curuk-temizligi.jpg',
        imageAlt: 'Diş kaplaması aşama 2: çürüğün temizlenmesinden sonra geniş boşluklu ve ince duvarlı diş',
      },
      {
        title: 'Aşama 3: Dişin yapısı tamamlanıyor',
        text: 'Kaybolan diş yapısı, uygun bir dolgu malzemesiyle yeniden oluşturuluyor. Bu aşama kuronun oturacağı sağlam bir zemin hazırlıyor. Diş artık kaplamaya hazır, kalan duvarlar desteklenmiş oluyor. Gerekiyorsa bu aşamada yarı kanal ya da kanal tedavisi de yapılıyor.',
        image: '/dis-kronu/asama-3-dis-yapisi-tamamlama.jpg',
        imageAlt: 'Diş kaplaması aşama 3: kaybolan diş yapısının dolgu malzemesiyle yeniden oluşturulması',
      },
      {
        title: 'Aşama 4: Paslanmaz çelik kuron yerleştiriliyor',
        text: 'Hazırlanan dişe uygun boyutta, hazır üretilmiş bir paslanmaz çelik kuron seçiliyor. Kuron dişin üzerine denenip kenarlarının diş etiyle uyumuna bakılıyor, sonra özel bir yapıştırıcıyla dişe sabitleniyor. Dişi çepeçevre saran bu “şapka”, çiğneme yükünü dişin tamamına dağıtıyor.',
        image: '/dis-kronu/asama-4-kron-yerlestirme.jpg',
        imageAlt: 'Diş kaplaması aşama 4: hazırlanmış süt azı dişine paslanmaz çelik kuronun yerleştirilmesi',
      },
      {
        title: 'Aşama 5: Kuron yerinde',
        text: 'Fazla yapıştırıcı temizleniyor, kapanışa ve diş eti uyumuna bakılıyor. Diş artık kalıcı dişi çıkana kadar çiğneme görevini sürdürebilir durumda ve çekilmeden korunmuş oluyor. Düzenli kontrollerde kuron ve çevre diş eti gözden geçiriliyor. Süt dişi zamanı geldiğinde dökülürken kuron da onunla birlikte çıkıyor.',
        image: '/dis-kronu/asama-5-kron-yerinde.jpg',
        imageAlt: 'Diş kaplaması aşama 5: süt azı dişinin üzerinde yerleşmiş paslanmaz çelik kuron',
      },
    ],
    faq: [
      {
        q: 'Süt dişine neden kaplama (kuron) yapılıyor?',
        a: 'Zayıflayan süt dişini çekmeden korumak, çiğneme işlevini sürdürmek ve kalıcı diş çıkana kadar yerini muhafaza etmek için.',
      },
      {
        q: 'Diş şapkası ile diş kaplaması aynı şey mi?',
        a: 'Evet. Halk arasında “diş şapkası” denen uygulama, diş hekimliğinde kuron ya da diş kaplaması olarak geçiyor.',
      },
      {
        q: 'Çocuk kaplamayla rahat çiğner mi?',
        a: 'Evet. Kısa bir alışma sürecinin ardından çocuklar normal şekilde yemek yiyebiliyor.',
      },
      {
        q: 'Kuron yerinden çıkarsa ne yapılmalı?',
        a: 'Kuron varsa saklayıp en kısa sürede kliniğe haber veriniz. Genellikle yeniden yapıştırılabiliyor.',
      },
    ],
    relatedGuideIds: ['cocuklarda-kanal-tedavisi', 'yari-kanal-tedavisi-amputasyon'],
  },
  {
    slug: 'yari-kanal-tedavisi-amputasyon',
    category: 'onarici',
    icon: 'activity',
    title: 'Yarı Kanal Tedavisi (Amputasyon)',
    summary:
      'Dişin içindeki sinirin tamamı değil, yalnızca hasar görmüş üst kısmı alınıyor. Sağlıklı kısım korunuyor, diş çekilmeden ağızda kalıyor. Beş aşamada nasıl yapıldığı görsellerle anlatılıyor.',
    image: '/yari-kanal/asama-4-koruyucu-madde.jpg',
    imageAlt: 'Yarı kanal tedavisinde kanal girişlerinin üzerine koruyucu madde yerleştirilmesi illüstrasyonu',
    imageRatio: 2000 / 1116,
    seoTitle: 'Yarı Kanal Tedavisi (Amputasyon, Pulpotomi) Nedir? | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Çocuklarda yarı kanal tedavisi (amputasyon, pulpotomi) nedir, nasıl yapılır, acıtır mı? Beş aşama görsellerle anlatılıyor. Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir.',
    keywords: [
      'yarı kanal tedavisi',
      'amputasyon tedavisi',
      'pulpotomi',
      'çocuklarda yarı kanal',
      'süt dişi amputasyon',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Acıbadem',
    ],
    intro: [
      '“Amputasyon” kelimesini duyunca çoğu ebeveynin aklına dişin kesilmesi geliyor. Oysa bu işlem dişi kurtarmaya yönelik, nispeten sakin bir tedavi.',
      'Dişin içindeki sinirin (pulpa) tamamı değil, yalnızca çürükten etkilenmiş üst kısmı alınıyor. Köklerdeki sağlıklı kısım yerinde bırakılıp korunuyor. Halk arasında bu yüzden “yarı kanal tedavisi” de deniyor.',
    ],
    sections: [
      {
        heading: 'Amputasyon dişin kesilmesi demek mi?',
        paragraphs: [
          'Hayır. Diş kesilmiyor, çekilmiyor. Kastedilen, dişin içindeki hasarlı sinir dokusunun kısmen temizlenmesi. Diş taçtan köke kadar ağızda kalmaya devam ediyor.',
        ],
      },
      {
        heading: 'Ne zaman yapılıyor?',
        paragraphs: [
          'Çürük sinire ulaşacak kadar ilerlediğinde, ancak iltihap yalnızca sinirin üst kısmında kaldığında ve köklerdeki doku sağlıklı görünüyorsa yarı kanal gündeme geliyor. Hangi tedavinin uygun olduğuna muayene, röntgen ve işlem sırasında dokunun durumuna bakılarak karar veriliyor.',
        ],
        items: [
          'Derin çürük ve sinire yakın ya da sinire ulaşmış çürük',
          'Soğuk, sıcak ya da tatlıda belirgin hassasiyet',
          'Bir süre kendiliğinden gelip geçen diş ağrısı',
        ],
      },
      {
        heading: 'Tam kanal tedavisinden farkı ne?',
        paragraphs: [
          'Tam kanal tedavisinde sinirin tamamı alınıyor, kanallar temizlenip dolduruluyor. Yarı kanalda ise yalnızca üst kısım alınıyor, alttaki sağlıklı sinir özel bir madde ile korunuyor ve canlılığını sürdürüyor. Uygun vakalarda daha kısa ve daha az yorucu bir işlem.',
        ],
      },
      {
        heading: 'Tedavi sonrası',
        paragraphs: [
          'İşlemden sonra diş yapısı biraz zayıflıyor. Bu yüzden çoğunlukla kuron (diş kaplaması) ile güçlendirilmesi planlanıyor. Çocuk kısa sürede normal beslenmesine dönebiliyor. Diş, kalıcı diş çıkana kadar çiğneme görevini sürdürüyor ve düzenli kontrollerle takip ediliyor.',
        ],
      },
    ],
    stepsEyebrow: 'Aşama Aşama',
    stepsHeading: 'Yarı kanal tedavisi nasıl yapılıyor?',
    steps: [
      {
        title: 'Aşama 1: Çürük sinire ulaşmış',
        text: 'Çürük mineyi ve dentini geçip dişin içindeki sinir odasına (pulpa odası) ulaşmış. Sinirin üst kısmı kırmızı ve iltihaplı görünürken köklerdeki doku sağlıklı duruyor. Muayene ve röntgenle bu tablo değerlendiriliyor, yarı kanalın uygun olup olmadığına buna göre karar veriliyor.',
        image: '/yari-kanal/asama-1-sinire-ulasan-curuk.jpg',
        imageAlt: 'Yarı kanal aşama 1: sinir odasına ulaşmış çürük ve köklerdeki sağlıklı sinir dokusunun kesiti',
      },
      {
        title: 'Aşama 2: Sinir odasına ulaşılıyor',
        text: 'Anestezi ile diş uyuşturulduktan sonra çürük doku temizleniyor ve dişin içindeki sinir odasına açılıyor. Matkap ucu su soğutmalı çalışıyor. Çocuk işlem boyunca ağrı hissetmiyor, genellikle yalnızca titreşim ve su sesini fark ediyor.',
        image: '/yari-kanal/asama-2-pulpa-odasi-aciliyor.jpg',
        imageAlt: 'Yarı kanal aşama 2: matkap ucuyla sinir odasına ulaşılması',
      },
      {
        title: 'Aşama 3: Hasarlı doku alınıyor',
        text: 'Sinir odasındaki hasarlı üst doku özel bir aletle uzaklaştırılıyor. Böylece kök kanallarının girişleri görünür hale geliyor ve bölge temizleniyor. Köklerin içindeki sağlıklı sinir yerinde kalıyor. “Yarı” kanal denmesinin nedeni bu: sinirin yalnızca bir bölümü alınıyor.',
        image: '/yari-kanal/asama-3-hasarli-doku-aliniyor.jpg',
        imageAlt: 'Yarı kanal aşama 3: sinir odasındaki hasarlı dokunun özel bir aletle uzaklaştırılması',
      },
      {
        title: 'Aşama 4: Koruyucu madde yerleştiriliyor',
        text: 'Kök kanallarının girişlerine, kalan sinir dokusunu koruyan ve iyileşmesini destekleyen özel bir madde yerleştiriliyor. Bu madde sağlıklı dokuyu kapatıp dışarıdan gelecek etkilerden koruyor. Aynı seansta üzerine dolgu yapılmaya hazırlanılıyor.',
        image: '/yari-kanal/asama-4-koruyucu-madde.jpg',
        imageAlt: 'Yarı kanal aşama 4: kök kanalı girişlerine koruyucu maddenin yerleştirilmesi',
      },
      {
        title: 'Aşama 5: Dolgu ile kapatma',
        text: 'Sinir odasının kalan kısmı dolgu ile kapatılıyor. Köklerdeki sağlıklı sinir korunmuş oluyor, diş çekilmeden ağızda kalıyor. Dişin yapısı zayıfladığı için çoğunlukla ardından kuron (diş kaplaması) yapılıyor. Kontrollerde diş ve çevresi muayene ediliyor, gerektiğinde röntgenle takip ediliyor.',
        image: '/yari-kanal/asama-5-dolgu-tamamlandi.jpg',
        imageAlt: 'Yarı kanal aşama 5: sinir odasının dolgu ile kapatılmış hali, köklerde sağlıklı sinir dokusu',
      },
    ],
    faq: [
      {
        q: 'Amputasyon çocuğun dişinin kesilmesi mi demek?',
        a: 'Hayır. Diş kesilmiyor ya da çekilmiyor. Dişin içindeki sinirin yalnızca hasarlı üst kısmı alınıyor, diş ağızda kalıyor.',
      },
      {
        q: 'Yarı kanal tedavisi acıtır mı?',
        a: 'Anestezi ile diş uyuşturulduktan sonra çocuk işlem sırasında ağrı hissetmiyor. İşlemden sonra hafif bir hassasiyet olabilir, genellikle kısa sürede geçiyor. Devam ederse kliniğe haber veriniz.',
      },
      {
        q: 'Yarı kanal ile tam kanal tedavisi arasındaki fark nedir?',
        a: 'Tam kanalda sinirin tamamı alınıyor. Yarı kanalda yalnızca hasarlı üst kısım alınıyor, köklerdeki sağlıklı sinir korunuyor. Hangisinin uygulanacağına işlem sırasında dokunun durumuna bakılarak karar veriliyor.',
      },
      {
        q: 'Yarı kanal sonrası neden kuron (diş kaplaması) yapılıyor?',
        a: 'İşlemden sonra diş yapısı zayıflıyor. Kuron dişi baştan sona saran bir koruma sağlıyor, kalıcı diş çıkana kadar çiğneme işlevinin sürmesine yardım ediyor.',
      },
    ],
    relatedGuideIds: ['yari-kanal-tedavisi-amputasyon', 'cocuklarda-kanal-tedavisi', 'curuk-hizli-ilerleme'],
  },
  {
    slug: 'mih-kalici-azi-mine-bozuklugu',
    category: 'onarici',
    icon: 'layers',
    title: 'MIH: Kalıcı Azılarda Mine Bozukluğu',
    summary:
      'Yeni çıkan kalıcı azılarda görülen sarı, kahverengi lekeler ve hassasiyet. Erken fark edildiğinde dişler korunabiliyor.',
    seoTitle: 'MIH (Mine Hipomineralizasyonu) Nedir, Tedavisi Nasıl? | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'MIH, kalıcı azı ve kesici dişlerde mine yapısının bozuk olması durumudur. Belirtileri, nedenleri ve tedavisi hakkında Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'MIH',
      'mine hipomineralizasyonu',
      'kalıcı azı dişi lekesi',
      'çocuklarda diş hassasiyeti',
      'çocuk diş hekimi Bakırköy',
    ],
    intro: [
      'MIH (Molar-Incisor Hypomineralization), ilk kalıcı azı dişlerinde ve bazen kesici dişlerde görülen mine yapı bozukluğu. Dişler ağızda çıktığı anda bile beyaz, sarı ya da kahverengi lekelerle görülebiliyor.',
      'Etkilenen dişlerin minesi daha gözenekli ve zayıf olduğu için hassasiyet ve çabuk aşınma görülebiliyor. Halk arasında “kireçli diş” diye anılıyor.',
    ],
    sections: [
      {
        heading: 'Belirtiler',
        items: [
          'Azı veya kesici dişlerde krem, sarı ya da kahverengi opak lekeler',
          'Soğuk, sıcak ve fırçalamada hassasiyet',
          'Dişte hızlı aşınma, kırılma ya da çürük gelişimi',
          'Çocuğun hassasiyet nedeniyle fırçalamaktan kaçınması',
        ],
      },
      {
        heading: 'Nedeni nedir?',
        paragraphs: [
          'Tek bir kesin neden bilinmiyor. Gebelik, doğum ve hayatın ilk yıllarındaki bazı sağlık sorunlarının mine gelişimini etkileyebileceği düşünülüyor. Ailenin yapabileceği bir hata olarak görülmemeli.',
        ],
      },
      {
        heading: 'Tedavi seçenekleri',
        paragraphs: [
          'Tedavi, dişin ne kadar etkilendiğine göre planlanıyor:',
        ],
        items: [
          'Hafif durumlarda flor uygulaması ve hassasiyet giderici ürünlerle koruma',
          'Fissür örtücü ile yüzeyin korunması',
          'Çürük ya da kırık varsa dolgu',
          'Ciddi yıkımda kuron (diş kaplaması)',
        ],
      },
      {
        heading: 'Neden özel yaklaşım gerekiyor?',
        paragraphs: [
          'MIH’li dişler çoğu zaman hassas olduğundan anestezinin tam etki etmesi zorlaşabiliyor. Bu yüzden çocuğa kendini rahat hissettirecek bir yaklaşım ve gerekirse ek yöntemler planlanıyor.',
        ],
      },
    ],
    steps: [
      { title: 'Muayene', text: 'Etkilenen dişler belirleniyor, hassasiyet ve yıkım derecesi değerlendiriliyor.' },
      { title: 'Koruyucu uygulamalar', text: 'Flor, hassasiyet giderici ve gerekirse fissür örtücü uygulanıyor.' },
      { title: 'Onarım', text: 'Çürük ya da kırık varsa dolgu veya kuron (diş kaplaması) ile diş onarılıyor.' },
      { title: 'Takip', text: 'Dişlerin gelişimi ve hassasiyet düzenli kontrollerle izleniyor.' },
    ],
    faq: [
      {
        q: 'MIH genetik midir?',
        a: 'Tek bir kesin neden bilinmiyor. Gebelik, doğum ve ilk yaşlardaki bazı faktörlerin etkili olabileceği düşünülüyor.',
      },
      {
        q: 'Çocuğum fırçalarken acı çekiyor, ne yapmalı?',
        a: 'Fırçalamayı bırakmak çürük riskini artırır. Hassasiyeti azaltan ürün ve yöntemler için kontrole gelinmesi öneriliyor.',
      },
      {
        q: 'MIH’li dişler kaybedilir mi?',
        a: 'Erken fark edildiğinde ve düzenli takip edildiğinde çoğu zaman dişler korunabiliyor.',
      },
    ],
    relatedGuideIds: ['curuk-hizli-ilerleme'],
  },
  {
    slug: 'cocuklarda-dis-cekimi-yer-tutucu',
    category: 'onarici',
    icon: 'scissors',
    title: 'Çocuklarda Diş Çekimi ve Yer Tutucu',
    summary:
      'Çekim doğru zamanlandığında sağlıklı diş gelişiminin önünü açıyor. Boşluk gerekirse yer tutucu ile korunuyor.',
    seoTitle: 'Çocuklarda Diş Çekimi ve Yer Tutucu | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Süt dişi çekimi ne zaman gerekir, yer tutucu (space maintainer) nedir? Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den çocuklarda diş çekimi rehberi.',
    keywords: [
      'çocuklarda diş çekimi',
      'süt dişi çekimi',
      'yer tutucu',
      'space maintainer',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Acıbadem',
    ],
    intro: [
      '“Diş çekimi” duyunca aileler genelde bunu bir başarısızlık ya da son çare gibi görüyor. Çoğu zaman durum tam tersi: çekim doğru zamanlandığında sağlıklı bir diş gelişiminin önünü açan bir adım olabiliyor.',
      'Çekim kararı hiçbir zaman ilk tercih değil. Önce dişi koruma seçenekleri (dolgu, kanal tedavisi, kuron) değerlendiriliyor.',
    ],
    sections: [
      {
        heading: 'Ne zaman çekim gerekiyor?',
        items: [
          'Çürüğün çok ilerlemiş olması ve dişin artık korunamayacak durumda olması',
          'Enfeksiyonun kontrol altına alınamaması',
          'Süt dişinin, altındaki kalıcı dişin çıkışına engel olması',
          'Diş teli tedavisi için yer açma ihtiyacı',
          'Travma sonrası kurtarılamayan diş',
        ],
      },
      {
        heading: 'Yer tutucu nedir?',
        paragraphs: [
          'Süt dişi erken kaybedilirse komşu dişler boşluğa doğru kayabiliyor. Bu, altındaki kalıcı dişin çıkması için gereken yeri daraltıp ileride çapraşıklığa yol açabiliyor. Yer tutucu (space maintainer), bu boşluğu kalıcı diş çıkana kadar koruyan küçük bir cihaz. Çocuğa uygun şekilde hazırlanıyor ve kontrollerle takip ediliyor.',
        ],
      },
      {
        heading: 'Çekim sonrası bakım',
        items: [
          'Kanama olursa temiz bir gazlı bezle hafif baskı uygulayınız',
          'İlk gün yumuşak ve ılık ya da soğuk besinler tercih ediniz',
          'Çekim bölgesini elle veya dille kurcalamamasına dikkat ediniz',
          'Diğer dişleri fırçalamaya devam ediniz, çekim bölgesine nazik davranınız',
        ],
      },
    ],
    steps: [
      { title: 'Muayene ve röntgen', text: 'Çekimin gerekli olup olmadığı ve altındaki kalıcı dişin durumu değerlendiriliyor.' },
      { title: 'Anestezi', text: 'Çocuğa uygun anestezi ile işlem sırasında rahatsızlık hissedilmemesi hedefleniyor.' },
      { title: 'Çekim', text: 'Diş nazikçe çıkarılıyor, bölge kontrol ediliyor.' },
      { title: 'Yer tutucu ve takip', text: 'Gerekirse yer tutucu uygulanıyor, bakım ve kontrol planı verilerek aile bilgilendiriliyor.' },
    ],
    faq: [
      {
        q: 'Çocuklarda diş çekimi acıtır mı?',
        a: 'Çocuğa uygun anestezi ile yapıldığında işlem sırasında acı hissetmemesi hedefleniyor. Çekim sonrası hafif hassasiyet olabiliyor.',
      },
      {
        q: 'Yer tutucu ne kadar süre kalır?',
        a: 'Kalıcı diş çıkana kadar, yani birkaç ay ile birkaç yıl arasında değişen bir süre. Kontrollerle takip ediliyor.',
      },
      {
        q: 'Süt dişi çekilmezse ne olur?',
        a: 'Enfeksiyonlu bir diş çekilmezse altındaki kalıcı dişe zarar verebiliyor ve çocuk ağrı çekebiliyor. Bu yüzden gerektiğinde çekim sağlığı koruyan bir adım oluyor.',
      },
    ],
    relatedGuideIds: ['cocuklarda-dis-cekimi', 'sut-dislerinin-dokulme-takvimi'],
  },

  // ───────────── Korkusuz tedavi ─────────────
  {
    slug: 'ozel-gereksinimli-cocuklarda-dis-tedavisi',
    category: 'korkusuz',
    icon: 'heart',
    title: 'Özel Gereksinimli Çocuklarda Diş Tedavisi',
    summary:
      'Otizm, DEHB, Down sendromu ve diğer özel gereksinimleri olan çocuklar için sakin, sabırlı ve kişiye özel bir yaklaşım.',
    seoTitle: 'Özel Gereksinimli Çocuklarda Diş Tedavisi | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Otizm, DEHB, Down sendromu gibi özel gereksinimli çocuklarda diş tedavisi nasıl yapılır? Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'otizmli çocuk diş tedavisi',
      'özel gereksinimli çocuk diş hekimi',
      'Down sendromu diş tedavisi',
      'DEHB diş hekimi',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Acıbadem',
    ],
    intro: [
      'Otizm, dikkat eksikliği ve hiperaktivite bozukluğu (DEHB), Down sendromu, serebral palsi ya da kronik hastalıklar gibi özel gereksinimler, diş tedavisini çocuk ve aile için zorlaştırabiliyor. Işık, ses, dokunma ve yeni bir ortam bu çocuklar için daha yoğun hissedilebiliyor.',
      'Bu çocuklar için diş hekimliği, sabır ve esneklik gerektiren bir süreç. Hızlı olmak yerine çocuğun ritmine uyum sağlamak, tedavinin başarısını belirliyor.',
    ],
    sections: [
      {
        heading: 'Yaklaşım nasıl şekilleniyor?',
        items: [
          'İlk randevu çoğu zaman tanışma amaçlı oluyor, tedavi için acele edilmiyor',
          'Çocuğun rutinine ve duyusal hassasiyetlerine göre ortam ve sıra ayarlanıyor',
          'İşlem öncesinde ne olacağı basit ve görsel yöntemlerle anlatılabiliyor',
          'Seanslar kısa tutulup küçük adımlara bölünebiliyor',
          'Gerekirse VR, sedasyon ya da genel anestezi seçenekleri değerlendiriliyor',
        ],
      },
      {
        heading: 'Ailelerden beklenen bilgiler',
        paragraphs: [
          'Çocuğun tanısı, kullandığı ilaçlar, alerjileri, daha önce yaşadığı sağlık işlemleri ve nelerden rahatsız olduğu hekimle paylaşıldığında planlama çok kolaylaşıyor. Ebeveynler çocuğu en iyi tanıyan kişiler olarak sürecin ortağı kabul ediliyor.',
        ],
      },
      {
        heading: 'Evde hazırlık',
        items: [
          'Randevuyu çocuğa basit ve sakin bir dille anlatınız',
          'Mümkünse kliniğin fotoğraflarını önceden gösteriniz',
          'Randevu öncesi çocuğun rutinini (uyku, yemek) bozmamaya çalışınız',
          'Çocuğun sevdiği bir oyuncağı ya da nesneyi yanınıza alınız',
        ],
      },
    ],
    steps: [
      { title: 'Tanışma ve bilgi alma', text: 'Aileden çocuğun sağlık öyküsü ve hassasiyetleri öğreniliyor.' },
      { title: 'Alıştırma', text: 'Gerekirse ilk randevularda sadece ortam ve aletlerle tanışılıyor.' },
      { title: 'Tedavi', text: 'Kısa adımlarla, çocuğun ritmine uygun şekilde ilerleniyor.' },
      { title: 'Takip', text: 'Düzenli kontrollerle hem diş sağlığı hem de çocuğun ortama uyumu desteklenmeye devam ediyor.' },
    ],
    faq: [
      {
        q: 'Otizmli çocuğumun diş tedavisi mümkün mü?',
        a: 'Evet. Sabırlı bir yaklaşım, yavaş alıştırma ve gerekirse ek yöntemlerle çoğu çocukta tedavi yapılabiliyor.',
      },
      {
        q: 'Çocuğum koltukta durmuyor, ne yapılır?',
        a: 'Zorlanmıyor. Önce alıştırma süreci planlanıyor. Tedavinin kapsamına göre VR, sedasyon ya da genel anestezi seçenekleri değerlendiriliyor.',
      },
      {
        q: 'İlk randevuya neler getirmeliyim?',
        a: 'Çocuğun kullandığı ilaçların listesi, daha önceki sağlık raporları ya da raporlar varsa onlar, ayrıca çocuğu rahatlatan bir oyuncak faydalı oluyor.',
      },
    ],
    relatedGuideIds: ['dis-hekimi-korkusu', 'genel-anestezi-nedenleri'],
  },

  // ───────────── Ortodonti ve gelişim ─────────────
  {
    slug: 'cocuklarda-dis-sikma-gicirdatma',
    category: 'gelisim',
    icon: 'moon',
    title: 'Çocuklarda Diş Sıkma ve Gıcırdatma (Bruksizm)',
    summary:
      'Uykuda dişlerini sıkan ya da gıcırdatan çocuklarda nedene bakmak, çoğu zaman dişe bakmaktan daha önemli.',
    seoTitle: 'Çocuklarda Diş Gıcırdatma ve Diş Sıkma (Bruksizm) | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Çocuklar neden uykuda diş gıcırdatır? Bruksizmin belirtileri, nedenleri ve tedavisi hakkında Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'çocuklarda diş gıcırdatma',
      'bruksizm',
      'çocuk diş sıkma',
      'uykuda diş gıcırdatma',
      'çocuk diş hekimi Bakırköy',
    ],
    intro: [
      'Çocuğunun uykuda dişlerini gıcırdattığını fark eden ebeveyn sayısı az değil. Bruksizm denen bu durum çocuklarda oldukça sık görülüyor ve çoğu çocukta zamanla kendiliğinden azalıyor.',
      'Yine de bazı çocuklarda dişlerde aşınma, çene ya da baş ağrısı gibi sorunlara yol açabiliyor. Bu yüzden fark edildiğinde bir kez değerlendirilmesi öneriliyor.',
    ],
    sections: [
      {
        heading: 'Nasıl fark edilir?',
        items: [
          'Gece uykuda duyulan gıcırdatma sesi',
          'Sabah çene, yüz ya da baş ağrısı şikayeti',
          'Dişlerin çiğneme yüzeylerinde aşınma',
          'Dişlerde hassasiyet',
          'Huzursuz uyku',
        ],
      },
      {
        heading: 'Neden oluyor?',
        paragraphs: [
          'Tek bir sebep yok, birkaç faktör bir araya gelebiliyor:',
        ],
        items: [
          'Stres, kaygı ya da okul/ev kaynaklı gerginlik',
          'Uyku düzeni bozuklukları',
          'Burun tıkanıklığı, geniz eti büyümesi gibi nefes alma sorunları',
          'Diş kapanışındaki uyumsuzluklar',
        ],
      },
      {
        heading: 'Parazit yüzünden mi?',
        paragraphs: [
          'Diş gıcırdatmanın bağırsak parazitine bağlı olduğu yaygın bir inanış. Ancak bu görüşün güçlü bir bilimsel dayanağı bulunmuyor. Gıcırdatma sürüyorsa asıl nedeni bulmak için muayene gerekiyor.',
        ],
      },
      {
        heading: 'Tedavi',
        paragraphs: [
          'Yaklaşım nedene göre belirleniyor. Çoğu çocukta stresin azaltılması ve uyku düzeninin iyileştirilmesi yeterli oluyor. Burun tıkanıklığı şüphesi varsa kulak burun boğaz değerlendirmesi öneriliyor. Dişlerde aşınma ilerliyorsa, seçili durumlarda gece plağı gündeme gelebiliyor.',
        ],
      },
    ],
    steps: [
      { title: 'Muayene', text: 'Dişlerdeki aşınma, çene kasları ve kapanış değerlendiriliyor.' },
      { title: 'Öykü', text: 'Uyku, stres ve nefes alma konusunda ailenin gözlemleri dinleniyor.' },
      { title: 'Plan', text: 'Neden belirlenip izleme, yönlendirme veya gerekirse plak planlanıyor.' },
      { title: 'Takip', text: 'Aşınma ve şikayetler düzenli kontrollerle izleniyor.' },
    ],
    faq: [
      {
        q: 'Çocuğum uykuda diş gıcırdatıyor, tedavi gerekir mi?',
        a: 'Çoğu çocukta kendiliğinden azalıyor. Dişlerde aşınma, ağrı ya da uyku sorunu varsa değerlendirme ve tedavi gerekebiliyor.',
      },
      {
        q: 'Diş gıcırdatma parazitten midir?',
        a: 'Yaygın bir inanış olsa da güçlü bir bilimsel dayanağı yok. Asıl neden için muayene yapılması öneriliyor.',
      },
      {
        q: 'Çocuklarda gece plağı kullanılır mı?',
        a: 'Seçili durumlarda ve genelde kalıcı dişlenme döneminde değerlendiriliyor. Süt dişi döneminde çoğunlukla izleme ve nedene yönelik yaklaşım tercih ediliyor.',
      },
    ],
    relatedGuideIds: ['ortodontik-tedavi-baslangici', 'dis-hekimi-korkusu'],
  },
  {
    slug: 'bebeklerde-dil-bagi',
    category: 'gelisim',
    icon: 'milk',
    title: 'Bebeklerde Dil Bağı ve Emzirme Sorunları',
    summary:
      'Dil altındaki bağ kısa ya da sıkı olduğunda emzirme zorlaşabiliyor. Her dil bağı kesilmiyor, önce doğru değerlendirme gerekiyor. Nasıl göründüğü ve işlem sonrası değişimi görsellerle anlatılıyor.',
    image: '/dil-bagi/2-dil-alti-bag.jpg',
    imageAlt: 'Bebeğin dili kaldırıldığında altındaki kısa ve gergin dil bağının görünümü illüstrasyonu',
    imageRatio: 2000 / 1116,
    seoTitle: 'Bebeklerde Dil Bağı (Ankiloglossi) ve Emzirme | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Bebeklerde dil bağı nedir, emzirmeyi nasıl etkiler, ne zaman kesilmesi gerekir? Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'bebeklerde dil bağı',
      'ankiloglossi',
      'dil bağı kesimi',
      'emzirme sorunları',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Acıbadem',
    ],
    intro: [
      'Dil bağı (ankiloglossi), dilin altını ağız tabanına bağlayan dokunun kısa, kalın ya da sıkı olması durumu. Bazı bebeklerde dilin hareketini kısıtlayabiliyor.',
      'Her dil bağı sorun yaratmıyor. Bu yüzden karar, yalnızca görünüme göre değil, bebeğin emme becerisine ve ailenin yaşadığı zorluklara bakılarak veriliyor.',
    ],
    sections: [
      {
        heading: 'Hangi belirtiler dikkat çekiyor?',
        items: [
          'Bebekte emmede zorluk, sık bırakma ya da emerken ses çıkarma',
          'Annede meme ucu ağrısı ve yaralanma',
          'Bebeğin yeterli kilo alamaması',
          'Dilin dışarı çıkarken kalp şeklini alması ya da yukarı kaldırılamaması',
          'Uzun süren ve yorucu emzirme seansları',
        ],
      },
      {
        heading: 'Her dil bağı kesilmeli mi?',
        paragraphs: [
          'Hayır. Dil bağı bulunan birçok bebek sorunsuz emiyor. Kesim kararı, belirtilerin varlığına ve emzirme danışmanı ile birlikte yapılan değerlendirmeye göre veriliyor. Emzirme sorunlarının başka nedenleri de olabildiği için tek başına dil bağına odaklanmak yanıltıcı olabiliyor.',
        ],
      },
      {
        heading: 'İşlem ve sonrası',
        paragraphs: [
          'Gerekli görüldüğünde frenülotomi denen kısa bir işlemle bağ gevşetiliyor. İşlem bebeğe uygun yöntemle ve kısa sürede tamamlanıyor. Sonrasında emzirme desteği, bölge bakımı ve takip planı hekim tarafından anlatılıyor.',
        ],
      },
      {
        heading: 'İleri yaşlarda',
        paragraphs: [
          'Dil bağı bazen konuşma sesleri, yeme alışkanlıkları ya da dil hareketlerini etkileyebiliyor. Bu durumda çocuk büyüdükçe de değerlendirilebiliyor.',
        ],
      },
      {
        heading: 'Muayene nasıl ilerliyor?',
        items: [
          'Öykü ve gözlem: Emzirme sürecindeki zorluklar dinleniyor, bebeğin emmesi gözlemleniyor.',
          'Muayene: Dil hareketleri ve bağın yapısı değerlendiriliyor.',
          'Karar: Gerekiyorsa işlem, gerekmiyorsa emzirme desteği ve takip planlanıyor.',
          'İşlem ve bakım: İşlem yapılırsa sonrasındaki bakım ve kontroller aileye anlatılıyor.',
        ],
      },
    ],
    stepsEyebrow: 'Görsellerle',
    stepsHeading: 'Dil bağı nasıl görünüyor, işlemle ne değişiyor?',
    steps: [
      {
        title: 'Dil ucu kalp şeklini alabiliyor',
        text: 'Dil dışarı çıkarılırken ucu ortadan hafifçe içe çekilip kalp şeklini alabiliyor. Altındaki bağ kısa ya da sıkı olduğunda dil ucu aşağıda tutuluyor ve dil yeterince uzanamıyor. Bu görüntü her dil bağında görülmüyor ve tek başına tanı koydurmuyor. Değerlendirme için bebeğin emmesi ve emzirme sürecine de bakılıyor.',
        image: '/dil-bagi/1-dil-ucu-kalp-sekli.jpg',
        imageAlt: 'Dil bağı: dışarı çıkarılan dilin ucunun kalp şeklini alması illüstrasyonu',
      },
      {
        title: 'Dil kaldırılınca bağ görünür oluyor',
        text: 'Dil yukarı kaldırıldığında altındaki bağ (frenulum) net görülüyor. Burada bağ, dilin altından ağız tabanına gerilmiş durumda ve dilin yukarı hareketini sınırlıyor. Bağın ne kadar kısa ve kalın olduğuna, dil ucuna ne kadar yakın tutunduğuna muayenede birlikte bakılıyor.',
        image: '/dil-bagi/2-dil-alti-bag.jpg',
        imageAlt: 'Dil bağı: dil kaldırıldığında ağız tabanına gerilmiş kısa bağın görünümü',
      },
      {
        title: 'Bağ gevşetildikten sonra',
        text: 'Gerekli görüldüğünde frenülotomi denen kısa bir işlemle bağ gevşetiliyor. Görselde bağın bulunduğu yerde küçük, temiz, açık pembe bir iyileşme alanı kalıyor ve dil daha rahat yukarı kalkabiliyor. Sonrasında emzirme desteği, bölge bakımı ve kontroller hekim tarafından aileye anlatılıyor.',
        image: '/dil-bagi/3-bag-gevsetildikten-sonra.jpg',
        imageAlt: 'Dil bağı: bağ gevşetildikten sonra dil altında küçük iyileşme alanı ve serbest kalkan dil',
      },
    ],
    faq: [
      {
        q: 'Bebeğimin dil bağı var mı, nasıl anlarım?',
        a: 'Emzirme zorluğu, annede ağrı ve bebekte kilo alımı sorunu gibi belirtiler dikkat çekiyor. Kesin tanı için muayene gerekiyor.',
      },
      {
        q: 'Dil bağı kesilmezse ne olur?',
        a: 'Belirti vermeyen dil bağları çoğunlukla sorun yaratmıyor. Belirti varsa değerlendirme ve takip öneriliyor.',
      },
      {
        q: 'İşlem bebeği zorlar mı?',
        a: 'İşlem kısa sürüyor ve bebeğe uygun yöntemlerle yapılıyor. Sonrasında kısa süreli huzursuzluk olabiliyor, aileye bakım hakkında bilgi veriliyor.',
      },
    ],
    relatedGuideIds: ['ilk-dis-hekimi-ziyareti'],
  },
];
