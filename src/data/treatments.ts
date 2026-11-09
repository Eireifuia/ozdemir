import { extraTreatments } from './treatmentsExtra';

export type TreatmentSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

export type TreatmentCategory = 'koruyucu' | 'onarici' | 'korkusuz' | 'acil' | 'gelisim';

export const treatmentCategories: { id: TreatmentCategory; label: string }[] = [
  { id: 'koruyucu', label: 'Koruyucu Bakım' },
  { id: 'onarici', label: 'Onarıcı Tedavi' },
  { id: 'korkusuz', label: 'Korkusuz Tedavi' },
  { id: 'acil', label: 'Acil' },
  { id: 'gelisim', label: 'Ortodonti ve Gelişim' },
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
  steps: { title: string; text: string; image?: string; imageAlt?: string }[];
  /** Süreç bölümünün üst etiketi ve başlığı (varsayılan: "Süreç" / "Randevuda neler oluyor?") */
  stepsEyebrow?: string;
  stepsHeading?: string;
  faq: { q: string; a: string }[];
  /** ids from treatmentGuides.ts, shown as "İlgili Yazılar" */
  relatedGuideIds: string[];
};

const baseTreatments: Treatment[] = [
  {
    slug: 'cocuklarda-curuk-tedavisi',
    category: 'onarici',
    icon: 'sparkles',
    title: 'Çocuklarda Diş Çürüğü Tedavisi',
    summary:
      'Küçük ve yüzeysel çürüklerde koruyucu dolgu çoğu zaman yeterli oluyor. Kısa, rahat bir randevu. Beş aşamada nasıl yapıldığı görsellerle anlatılıyor.',
    image: '/curuk-dolgu/asama-4-dolgu-isik.jpg',
    imageAlt: 'Azı dişine diş renginde dolgu malzemesi yerleştirilmesi ve mavi ışıkla sertleştirilmesi illüstrasyonu',
    imageRatio: 2000 / 1116,
    seoTitle: 'Çocuklarda Diş Çürüğü Tedavisi | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Süt dişi çürüğü neden hızlı ilerler, ne zaman dolgu gerekir? Bakırköy ve Acıbadem kliniklerinde çocuk diş hekimi Dr. Ömer Özdemir ile çocuklarda çürük tedavisi hakkında bilgi alınız.',
    keywords: [
      'çocuklarda diş çürüğü',
      'süt dişi çürüğü',
      'çocuk diş dolgusu',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Acıbadem',
      'pedodonti',
    ],
    intro: [
      'Çocuklarda diş çürüğü, en sık karşılaşılan diş sorunlarından biri. Süt dişlerinin dış tabakası (mine) yetişkin dişlerine göre daha ince olduğu için çürük, büyüklerdekinden çok daha hızlı ilerleyebiliyor. Büyüklerde aylar süren bir süreç, çocukta haftalar içinde derinleşebiliyor.',
      'Muayenede en sık duyulan cümlelerden biri şu: “Nasıl olsa süt dişi, dökülecek.” Dökülecek olması doğru, ama önemsiz olduğu anlamına gelmiyor. Süt dişleri çocuğun düzgün beslenmesine, konuşmasına ve kalıcı dişlerin doğru yerde çıkmasına yardım ediyor.',
    ],
    sections: [
      {
        heading: 'Çürük nasıl fark edilir?',
        paragraphs: [
          'Çürük başlangıçta çoğu zaman ağrı yapmıyor, bu yüzden evde fark edilmesi zor olabiliyor. Dikkat edilecek işaretler:',
        ],
        items: [
          'Dişte beyaz, kahverengi ya da siyah leke veya çukurlar',
          'Soğuk, sıcak ya da tatlı yiyeceklerde hassasiyet',
          'Çocuğun yemek yerken bir tarafı kullanmaktan kaçınması',
          'Dişler arasında sürekli yiyecek sıkışması',
          'Diş etinde şişlik veya kızarıklık',
        ],
      },
      {
        heading: 'Çürük neden bu kadar hızlı ilerliyor?',
        paragraphs: [
          'Birkaç sebep bir araya geliyor ve hepsi birbirini besliyor:',
        ],
        items: [
          'Süt dişlerinin yüzeyi yetişkin dişlerine göre daha zayıf',
          'Çocukların beslenmesi gün boyu yayılıyor, ağız sürekli şeker ve asit ortamında kalıyor',
          'Fırçalama alışkanlığı henüz oturmamış, teknik ve süreklilik eksik kalabiliyor',
          'Diş araları dar olduğu için yiyecek birikiyor ve fark edilmesi zorlaşıyor',
        ],
      },
      {
        heading: 'Tedavi seçenekleri',
        paragraphs: [
          'Tedavi, çürüğün ne kadar derine indiğine göre planlanıyor. Küçük ve yüzeysel çürüklerde koruyucu dolgu çoğu zaman yeterli oluyor. Dolgu malzemesi seçilirken hem görünüm hem dayanıklılık düşünülüyor, böylece çocuk rahat çiğneyebiliyor ve gülümsemesinden ödün vermiyor.',
          'Çürük sinire yaklaşmışsa kanal ya da yarı kanal tedavisi, dişin korunamayacağı durumlarda ise çekim gündeme gelebiliyor. Her durumda ilk hedef aynı: dişi mümkün olduğunca ağızda tutmak.',
        ],
      },
      {
        heading: 'Çocuk işleme nasıl hazırlanıyor?',
        paragraphs: [
          '“Önce anlat, sonra göster, sonra yap” yöntemiyle ne olacağı basit kelimelerle anlatılıyor. Bilinmeyen azaldıkça korku da azalıyor. Dişler tek tek kontrol ediliyor, gerekirse röntgenle çürüğün derinliğine bakılıyor.',
        ],
      },
    ],
    stepsEyebrow: 'Aşama Aşama',
    stepsHeading: 'Çürük dolgusu nasıl yapılıyor?',
    steps: [
      {
        title: 'Aşama 1: Çürük çiğneme yüzeyinde',
        text: 'Soldaki azı dişinin çiğneme yüzeyinde koyu renkli bir çürük var. Sağdaki sağlam komşu dişin pürüzsüz, parlak yüzeyiyle kıyaslayabilirsiniz. Dışarıdan küçük görünen bir çürük, minenin altında daha geniş ilerlemiş olabiliyor. Muayene ve gerekirse röntgenle çürüğün derinliği değerlendiriliyor, tedavi buna göre planlanıyor.',
        image: '/curuk-dolgu/asama-1-curuk.jpg',
        imageAlt: 'Dolgu aşama 1: azı dişinin çiğneme yüzeyindeki çürük ve yanındaki sağlam dişin kıyaslaması',
      },
      {
        title: 'Aşama 2: Çürük doku temizleniyor',
        text: 'Gerekirse anestezi ile diş uyuşturulduktan sonra çürük doku su soğutmalı bir uçla temizleniyor. Yalnızca çürümüş kısım alınıyor, sağlam diş dokusu mümkün olduğunca korunuyor. Çocuk işlem sırasında genellikle yalnızca titreşimi ve su sesini fark ediyor.',
        image: '/curuk-dolgu/asama-2-curuk-temizligi.jpg',
        imageAlt: 'Dolgu aşama 2: matkap ucuyla çürük dokunun su soğutmasıyla temizlenmesi',
      },
      {
        title: 'Aşama 3: Yapıştırıcı sürülüyor',
        text: 'Temizlenen boşluğun yüzeyine ince bir yapıştırıcı (bonding) tabakası fırçayla sürülüyor. Bu tabaka dolgunun diş dokusuna sıkıca tutunmasını sağlıyor. Yüzey böylece dolguyu almaya hazır hale geliyor.',
        image: '/curuk-dolgu/asama-3-yapistirici.jpg',
        imageAlt: 'Dolgu aşama 3: temizlenmiş boşluğa küçük bir fırçayla yapıştırıcı sürülmesi',
      },
      {
        title: 'Aşama 4: Dolgu yerleştirilip ışıkla sertleştiriliyor',
        text: 'Diş renginde dolgu malzemesi boşluğa yerleştirilip dişin doğal şekline göre biçimlendiriliyor. Ardından mavi bir ışıkla kısa sürede sertleştiriliyor, ışık ağrı yapmıyor. Dolgu malzemesi seçilirken hem görünüm hem dayanıklılık düşünülüyor.',
        image: '/curuk-dolgu/asama-4-dolgu-isik.jpg',
        imageAlt: 'Dolgu aşama 4: dolgu malzemesinin yerleştirilmesi ve mavi ışıkla sertleştirilmesi',
      },
      {
        title: 'Aşama 5: Dolgu tamamlanıyor',
        text: 'Dolgu cilalanıyor, kapanışa bakılıp gerekirse ince bir düzeltme yapılıyor. Diş çiğneme işlevini yeniden sürdürüyor ve yanındaki sağlam dişle uyumlu görünüyor. Ardından ebeveynlere fırçalama ve beslenme konusunda yol gösteriliyor, kontrol randevusu planlanıyor.',
        image: '/curuk-dolgu/asama-5-dolgu-tamam.jpg',
        imageAlt: 'Dolgu aşama 5: tamamlanmış ve cilalanmış dolgu, yanında sağlam komşu diş',
      },
    ],
    faq: [
      {
        q: 'Süt dişi çürüğü tedavi edilmeli mi, nasıl olsa dökülecek değil mi?',
        a: 'Evet, tedavi edilmeli. Tedavi edilmeyen çürük ağrıya, enfeksiyona ve süt dişinin erken kaybına yol açabiliyor. Erken kaybedilen diş, altındaki kalıcı dişin yerini ve çene gelişimini etkileyebiliyor.',
      },
      {
        q: 'Çocuklarda dolgu işlemi acıtır mı?',
        a: 'Hedef, çocuğun işlem sırasında rahatsızlık hissetmemesi. Gerekli durumlarda çocuğa uygun anestezi yöntemleri kullanılıyor ve işlemden önce çocuğa ne olacağı anlatılıyor.',
      },
      {
        q: 'Çürük nasıl önlenir?',
        a: 'Yılda en az iki kez kontrol, düzenli ve doğru fırçalama, şekerli atıştırmaların miktarından çok sıklığının azaltılması ve gerekli görülen koruyucu uygulamalar çürük riskini belirgin şekilde düşürüyor.',
      },
      {
        q: 'Çocuğum için ilk diş kontrolü ne zaman yapılmalı?',
        a: 'İlk diş çıktıktan sonraki altı ay içinde, en geç bir yaşına kadar ilk kontrol öneriliyor. İlk randevu bir tedavi değil, tanışma ve bilgilendirme randevusu oluyor.',
      },
    ],
    relatedGuideIds: ['curuk-hizli-ilerleme', 'ilk-dis-hekimi-ziyareti'],
  },
  {
    slug: 'cocuklarda-kanal-tedavisi',
    category: 'onarici',
    icon: 'activity',
    title: 'Çocuklarda Kanal Tedavisi',
    summary:
      'Kanal tedavisi denince akla gelen korku çocuklarda geçerli değil. Doğru anestezi ile işlem hissedilmeden tamamlanıyor. Beş aşamada nasıl yapıldığı görsellerle anlatılıyor.',
    image: '/kanal/asama-3-kanal-temizligi.jpg',
    imageAlt: 'Süt azı dişinin kesitinde kök kanalının ince bir eğe ile temizlenmesi illüstrasyonu',
    imageRatio: 2000 / 1116,
    seoTitle: 'Çocuklarda Kanal Tedavisi ve Yarı Kanal | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Çocuklarda kanal tedavisi nasıl yapılır, acıtır mı? Süt dişinde yarı kanal (pulpotomi) ve kanal tedavisi hakkında Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'çocuklarda kanal tedavisi',
      'süt dişi kanal tedavisi',
      'yarı kanal tedavisi',
      'pulpotomi',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Üsküdar',
    ],
    intro: [
      '“Kanal tedavisi” kelimesini duyan ebeveynin aklına genellikle büyükler için bilinen, biraz korkutucu bir görüntü geliyor. Çocuklarda uygulanan kanal tedavisi hem amaç hem yöntem olarak biraz farklı işliyor. Doğru anestezi ile yapıldığında çocuk işlem sırasında acı hissetmiyor.',
      'Burada öncelik her zaman aynı: mümkünse dişi çekmeden ağızda tutmak. Çünkü erken kaybedilen bir diş, çene gelişimini ve diğer dişlerin konumunu etkileyebiliyor.',
    ],
    sections: [
      {
        heading: 'Kanal tedavisi ne zaman gerekiyor?',
        paragraphs: [
          'Süt dişinde ya da yeni çıkmış kalıcı dişte çürük, dişin sinirine ulaşacak kadar derinleştiğinde dişi çekmeden koruyabilmek için kanal tedavisi gündeme geliyor. Bazen travma sonrası da gerekebiliyor.',
        ],
        items: [
          'Geceleri uyandıran ya da kendiliğinden gelen diş ağrısı',
          'Dişin çevresinde diş eti şişliği veya sivilce benzeri oluşum',
          'Dişte renk koyulaşması',
          'Röntgende kök ucunda enfeksiyon bulgusu',
        ],
      },
      {
        heading: 'Yarı kanal tedavisi (pulpotomi) nedir?',
        paragraphs: [
          'Dişin içindeki sinirin tamamı değil, yalnızca hasar görmüş üst kısmı alınıyor. Alttaki sağlıklı kısım özel bir madde ile korunarak yerinde bırakılıyor. “Amputasyon” kelimesi ürkütücü gelebiliyor ama dişin bir parçasının kesilmesi anlamına gelmiyor. Dişin içindeki hasarlı dokunun kısmen temizlenmesini anlatıyor.',
          'Hangisinin uygulanacağına işlem sırasında dokunun durumuna bakılarak karar veriliyor. Süt dişlerinin yapısı kalıcı dişlerden farklı olduğu için, uygun vakalarda daha az müdahale hem daha rahat hem daha kısa bir işlem demek.',
        ],
      },
      {
        heading: 'Tedavi sonrası',
        paragraphs: [
          'Tedavi tamamlandıktan sonra diş genellikle bir kuron (diş kaplaması) ile güçlendiriliyor, çünkü yapısı biraz zayıflamış oluyor. Çocuk kısa sürede normal beslenmesine dönebiliyor, diş çiğneme işlevini sürdürüyor ve kalıcı dişin çıkacağı yer korunmuş oluyor. Süreç düzenli kontrollerle takip ediliyor.',
        ],
      },
    ],
    stepsEyebrow: 'Aşama Aşama',
    stepsHeading: 'Süt dişinde kanal tedavisi nasıl yapılıyor?',
    steps: [
      {
        title: 'Aşama 1: Çürük sinire ulaşmış, kök ucunda enfeksiyon var',
        text: 'Kesitte dişin içindeki sinir odası kırmızı ve iltihaplı görünüyor, iki kökün ucunda da açık sarı bir enfeksiyon alanı var. Enfeksiyon kök uçlarına ulaştığında yalnızca sinirin üst kısmını almak yetmiyor, kanalların da temizlenmesi gerekiyor. Muayene ve röntgenle çürüğün derinliği ve kök ucundaki durum değerlendiriliyor. Dişin altında bekleyen küçük kalıcı diş tomurcuğu, dişi çekmeden korumanın neden önemli olduğunu gösteriyor.',
        image: '/kanal/asama-1-enfeksiyon.jpg',
        imageAlt: 'Kanal aşama 1: sinir odasına ulaşmış çürük, kök uçlarında enfeksiyon ve altta bekleyen kalıcı diş tomurcuğu',
      },
      {
        title: 'Aşama 2: Dişin içine ulaşılıyor',
        text: 'Çocuğa uygun yöntemle diş uyuşturulduktan sonra çürük doku temizleniyor ve su soğutmalı bir uçla dişin içindeki sinir odasına açılıyor. İşlem başlamadan önce çocuğa ne hissedeceği anlatılıyor. Bu aşamada kök kanallarının girişleri görünür hale geliyor.',
        image: '/kanal/asama-2-kanal-girisi.jpg',
        imageAlt: 'Kanal aşama 2: matkap ucuyla sinir odasına ulaşılması ve kanal girişlerinin görünür olması',
      },
      {
        title: 'Aşama 3: Kanallar temizleniyor',
        text: 'İnce ve esnek bir eğe kanalların içindeki enfekte dokuyu uzaklaştırıyor, aynı sırada temizleyici bir sıvıyla yıkama yapılıyor. Süt dişlerinin kökleri ince ve eğri olduğu için bu aşama dikkatli ve yavaş ilerliyor. Amaç, kanalı temizlemek ve kök ucundaki enfeksiyonu iyileşmeye hazırlamak.',
        image: '/kanal/asama-3-kanal-temizligi.jpg',
        imageAlt: 'Kanal aşama 3: ince bir eğenin kanalı temizlemesi ve yıkama sıvısıyla dolu sinir odası',
      },
      {
        title: 'Aşama 4: Kanallar dolduruluyor',
        text: 'Temizlenen kanallar ve sinir odası, süt dişine uygun, yumuşak ve zamanla emilebilen bir macunla dolduruluyor. Süt dişinin kökü zamanı geldiğinde kendiliğinden eridiği için, kullanılan malzeme bu doğal sürece engel olmayacak şekilde seçiliyor.',
        image: '/kanal/asama-4-kanal-dolgusu.jpg',
        imageAlt: 'Kanal aşama 4: temizlenmiş kanalların ve sinir odasının yumuşak bir macunla doldurulması',
      },
      {
        title: 'Aşama 5: Dolgu ve kuron',
        text: 'Sinir odası dolguyla kapatılıyor. Dişin yapısı zayıfladığı için çoğunlukla paslanmaz çelik kuron (diş kaplaması) ile korunuyor. Görselde kuron, dolgu ve kanal dolgusu katman katman görülüyor. Diş, kalıcı diş çıkana kadar çiğneme işlevini sürdürüyor ve düzenli kontrollerle takip ediliyor.',
        image: '/kanal/asama-5-dolgu-kuron.jpg',
        imageAlt: 'Kanal aşama 5: kanal dolgusu, sinir odası dolgusu ve paslanmaz çelik kuron ile korunmuş süt azı dişi kesiti',
      },
    ],
    faq: [
      {
        q: 'Çocuklarda kanal tedavisi acıtır mı?',
        a: 'Doğru anestezi ile yapıldığında çocuk işlem sırasında acı hissetmiyor. Anestezi öncesi çocuğa ne olacağı basit kelimelerle anlatılıyor, bu da korkuyu belirgin şekilde azaltıyor.',
      },
      {
        q: 'Süt dişine neden kanal tedavisi yapılıyor, dişi çekmek daha kolay değil mi?',
        a: 'Çekim her zaman daha kolay görünse de süt dişi erken kaybedildiğinde boşluk kapanabiliyor ve kalıcı diş yanlış yerden çıkabiliyor. Bu yüzden önce dişi koruma seçenekleri değerlendiriliyor.',
      },
      {
        q: 'Yarı kanal ile tam kanal tedavisi arasındaki fark nedir?',
        a: 'Tam kanal tedavisinde sinirin tamamı alınıyor. Yarı kanalda yalnızca hasarlı üst kısım alınıyor, alttaki sağlıklı sinir korunuyor ve canlılığını sürdürüyor. Karar, işlem sırasında dokunun durumuna göre veriliyor.',
      },
      {
        q: 'Tedaviden sonra dişe neden kuron (diş kaplaması) yapılıyor?',
        a: 'Tedavi edilen dişin yapısı zayıflamış oluyor. Kuron dişi güçlendiriyor ve kalıcı diş çıkana kadar çiğneme işlevini sürdürmesini sağlıyor.',
      },
    ],
    relatedGuideIds: ['cocuklarda-kanal-tedavisi', 'yari-kanal-tedavisi-amputasyon', 'cocuklarda-dis-cekimi'],
  },
  {
    slug: 'vr-destekli-cocuk-dis-tedavisi',
    category: 'korkusuz',
    icon: 'glasses',
    title: 'VR Destekli Çocuk Diş Tedavisi',
    summary:
      'Meta Quest 3 gözlüğü takan çocuk bir anda başka bir dünyada. Diş hekimi koltuğu arka plana düşüyor. Dört adımda nasıl işlediği görsellerle anlatılıyor.',
    image: '/vr/adim-3-tedavi.jpg',
    imageAlt: 'VR gözlük takan çocuğun diş koltuğunda sakince uzanması ve gözlükte okyanus dünyasını keşfetmesi illüstrasyonu',
    imageRatio: 2000 / 1116,
    seoTitle: 'VR Gözlük ile Çocuk Diş Tedavisi | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Meta Quest 3 sanal gerçeklik gözlüğü ile çocuklarda diş tedavisi. Diş hekimi korkusu olan çocuklar için dikkat dağıtma yöntemi. Bakırköy ve Acıbadem kliniklerinde.',
    keywords: [
      'VR gözlük ile diş tedavisi',
      'sanal gerçeklik diş hekimi',
      'diş hekimi korkusu olan çocuk',
      'çocuk diş hekimi Bakırköy',
      'Meta Quest 3',
    ],
    intro: [
      'Diş tedavisinde korkunun büyük kısmı bilinmeyenden geliyor: ses, ışık, aletler, hareketsiz yatmak. Kliniklerde bulunan Meta Quest 3 gözlük, çocuğun dikkatini bunlardan uzaklaştırmak için kullanılıyor.',
      'İşlem sırasında gözlüğü takan çocuk, sanal bir dünyada vakit geçiriyor. Tedavi ise o sırada rahat bir şekilde sürüyor. Diş hekimi koltuğu korkulan bir yer olmaktan çıkıp macera başlangıcına dönüşüyor.',
    ],
    sections: [
      {
        heading: 'Hangi çocuklar için uygun?',
        paragraphs: [
          'VR gözlük, özellikle tedaviye karşı tedirginlik yaşayan ve dikkati dağıtıldığında daha rahatlayan çocuklarda işe yarıyor. Her çocuk ve her işlem için uygun olmayabiliyor. Uygun olup olmadığına muayenede çocuğun yaşına, yapılacak işleme ve tavrına bakılarak karar veriliyor.',
        ],
        items: [
          'Diş hekimi korkusu olan çocuklar',
          'Uzun süre hareketsiz kalması gereken işlemler',
          'Yeni bir ortama alışmakta zorlanan çocuklar',
        ],
      },
      {
        heading: 'VR gözlük anestezi yerine geçer mi?',
        paragraphs: [
          'Hayır. Gözlük dikkat dağıtma yöntemi olarak çalışıyor. Gerekli olan durumlarda anestezi yine uygulanıyor, VR ise çocuğun işlemi daha sakin karşılamasına yardım ediyor.',
        ],
      },
    ],
    stepsEyebrow: 'Adım Adım',
    stepsHeading: 'VR gözlükle randevu nasıl geçiyor?',
    steps: [
      {
        title: 'Tanışma',
        text: 'Çocuk gözlüğü önce kendi elinde tutuyor, inceliyor ve kısa bir deneme yapıyor. Bu adım, gözlüğe alışması ve ne olacağını görmesi için zaman tanıyor.',
        image: '/vr/adim-1-tanisma.jpg',
        imageAlt: 'VR gözlük aşama 1: diş koltuğunda oturan çocuğun gözlüğü elinde merakla incelemesi',
      },
      {
        title: 'İçerik seçimi',
        text: 'Çocuğun yaşına ve ilgisine uygun bir deneyim başlatılıyor. Görseldeki okyanus, uzay, orman ve bulut dünyaları örnek amaçlıdır; çocuk kendisini en çok çeken sahneyi seçebiliyor.',
        image: '/vr/adim-2-icerik-secimi.jpg',
        imageAlt: 'VR gözlük aşama 2: gözlüğün içinden görünen dört renkli sanal dünya seçeneği',
      },
      {
        title: 'Tedavi',
        text: 'Çocuk sanal dünyayı keşfederken işlem uygulanıyor. Gözlük dikkati dağıtıyor ve çocuğun işlemi daha sakin karşılamasına yardım ediyor. Gerekli durumlarda anestezi yine uygulanıyor.',
        image: '/vr/adim-3-tedavi.jpg',
        imageAlt: 'VR gözlük aşama 3: koltukta sakince uzanan çocuk ve gözlükte keşfettiği okyanus dünyası',
      },
      {
        title: 'Bitiş',
        text: 'İşlem bitince gözlük çıkarılıyor. Çocuk gülümseyerek ayrılıyor ve bir sonraki randevuya sakin bir şekilde hazırlanıyor.',
        image: '/vr/adim-4-bitis.jpg',
        imageAlt: 'VR gözlük aşama 4: işlem sonrası gözlüğü alnına kaldırmış, başparmağını kaldıran gülümseyen çocuk',
      },
    ],
    faq: [
      {
        q: 'VR gözlük ile diş tedavisi hangi yaşta uygulanabilir?',
        a: 'Uygunluk çocuğa göre değişiyor. Gözlüğü rahat takıp takamayacağına ve yapılacak işleme muayenede birlikte bakılıyor.',
      },
      {
        q: 'Çocuğum gözlük takmak istemezse ne olur?',
        a: 'Hiçbir şey zorlanmıyor. Çocuk gözlüğü kabul etmezse tedavi diğer davranış yönetimi yöntemleriyle sürdürülüyor.',
      },
      {
        q: 'Diş hekimi korkusu olan çocuklar için başka yöntemler var mı?',
        a: 'Evet. “Önce anlat, sonra göster, sonra yap” yöntemi, olumlu dil kullanımı ve gerektiğinde sedasyon ya da genel anestezi seçenekleri değerlendiriliyor.',
      },
    ],
    relatedGuideIds: ['dis-hekimi-korkusu', 'genel-anestezi-nedenleri'],
  },
  {
    slug: 'cocuklarda-dis-travmasi',
    category: 'acil',
    icon: 'alert',
    title: 'Çocuklarda Diş Travması',
    summary:
      'Düşme, çarpma, kırılan ya da oynayan diş. İlk dakikalar önemli olduğu için hızlı müdahale gerekiyor.',
    image: '/travma/kapak-dusen-dis.jpg',
    imageAlt: 'Çocuğun üst ön dişlerinden birinin yerinden çıkması: boşalan diş yuvası ve düşen diş illüstrasyonu',
    imageRatio: 2000 / 1116,
    seoTitle: 'Çocuklarda Diş Travması ve Kırılan Diş | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Çocuğun dişi kırıldı ya da yerinden çıktı, ne yapılmalı? Diş travmasında ilk yardım ve tedavi hakkında Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'çocuklarda diş travması',
      'kırılan diş',
      'dişi çıkan çocuk ne yapmalı',
      'acil çocuk diş hekimi',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Acıbadem',
    ],
    intro: [
      'Koşarken düşme, oyun sırasında çarpma, bisikletten düşme. Çocukluğun neredeyse kaçınılmaz bir parçası. Diş travmaları da bu yüzden sık karşılaşılıyor ve ailelerin en çok panikle geldiği durumlardan biri.',
      'Bir kazadan sonra ilk dakikalarda yapılanlar sonucu doğrudan etkiliyor. Bu sayfa, o anda sakin kalabilmek için hazırlandı.',
    ],
    sections: [
      {
        heading: 'Kaza anında ilk yardım',
        items: [
          'Önce çocuğun genel durumuna bakınız. Bilinç kaybı, tekrarlayan kusma ya da şiddetli uyku hâli varsa vakit kaybetmeden acil servise gidiniz.',
          'Ağız içi kanamada temiz bir gazlı bez veya bezle hafif baskı uygulayınız.',
          'Dış görünüşte şişlik varsa soğuk uygulama yapabilirsiniz.',
          'Kırılan diş parçası bulunduysa süt ya da tükürük gibi nemli bir ortamda saklayıp kliniğe getiriniz.',
        ],
      },
      {
        heading: 'Dişin yerinden çıkması (avülsiyon)',
        paragraphs: [
          'Süt dişi tamamen yerinden çıktıysa yerine geri takılmamalı, çünkü bu altındaki kalıcı diş tomurcuğuna zarar verebiliyor. Kalıcı diş için durum farklı: burada zaman gerçekten kritik. Dişi kök kısmına dokunmadan, taç kısmından tutmak, kirliyse kısaca soğuk su ya da süt ile durulamak ve hemen kliniğe ulaşmak gerekiyor. Mümkünse ilk 30 dakika içinde bir diş hekimine gitmek dişin kurtulma şansını artırıyor.',
        ],
      },
      {
        heading: 'Görülen travma türleri',
        items: [
          'Kırık: dişin bir kısmının kırılması, derinliğine göre farklı tedavi gerektiriyor',
          'Yer değiştirme: diş konumundan oynamış ama tam çıkmamış',
          'Dişin tamamen yuvasından çıkması',
          'Dışarıdan görülmeyen, röntgenle tespit edilen kök çatlağı',
        ],
      },
      {
        heading: 'Neden hemen kontrol gerekiyor?',
        paragraphs: [
          'Görünürde küçük bir darbe bile diş köküne veya sinirine zarar vermiş olabiliyor ve bu hemen belli olmuyor. “Kanamadı, sorun yok gibi” diye evde beklemek yerine kaza sonrası en kısa sürede kontrole gelinmesi öneriliyor. Erken ve doğru müdahale çoğu zaman dişi kurtarmanın anahtarı.',
        ],
      },
    ],
    steps: [
      {
        title: 'Genel değerlendirme',
        text: 'Önce çocuğun genel durumuna, ağız içi yaralanmalara ve dişlere bakılıyor.',
      },
      {
        title: 'Röntgen',
        text: 'Kök ve çevre dokular görüntüleniyor, gözle görülmeyen hasarlar araştırılıyor.',
      },
      {
        title: 'Acil tedavi',
        text: 'Kırığın ya da yer değiştirmenin türüne göre dişin onarılması, yerine yerleştirilmesi veya sabitlenmesi yapılıyor.',
      },
      {
        title: 'Takip',
        text: 'Travmadan sonra diş sinirinin durumu zaman içinde değişebildiği için kontrol randevuları planlanıyor.',
      },
    ],
    faq: [
      {
        q: 'Çocuğumun dişi kırıldı, ne yapmalıyım?',
        a: 'Çocuğu sakinleştirip genel durumuna bakınız, kırık parça bulunursa nemli bir ortamda saklayınız ve en kısa sürede kliniğe ulaşınız. Kanama olursa temiz bezle hafifçe bastırabilirsiniz.',
      },
      {
        q: 'Süt dişi yerinden çıkarsa geri takılır mı?',
        a: 'Hayır, süt dişi geri takılmıyor. Bu, altındaki kalıcı diş tomurcuğuna zarar verebiliyor. Yine de çocuğun kontrol edilmesi gerekiyor.',
      },
      {
        q: 'Kalıcı diş tamamen çıkarsa ne yapılmalı?',
        a: 'Dişi kök kısmına dokunmadan taç kısmından tutunuz, kirliyse kısaca durulayınız ve vakit kaybetmeden kliniğe ulaşınız. Kliniğe giderken dişi süt ya da tükürük içinde taşıyabilirsiniz.',
      },
      {
        q: 'Darbeden sonra diş renk değiştirdi, normal mi?',
        a: 'Travmadan sonra dişte grileşme ya da koyulaşma görülebiliyor. Bu, sinirin etkilendiğini gösterebileceği için kontrol edilmesi gerekiyor.',
      },
    ],
    relatedGuideIds: ['dis-kirilmasi-travma'],
  },
  {
    slug: 'cocuklarda-genel-anestezi-sedasyon',
    category: 'korkusuz',
    icon: 'moon',
    title: 'Genel Anestezi ve Sedasyon ile Çocuk Diş Tedavisi',
    summary:
      'Çok sayıda işlem gereken ya da koltukta durmakta zorlanan küçük hastalar için güvenli ve kontrollü bir seçenek.',
    image: '/sedasyon.png',
    imageAlt: 'Anestezi altında diş tedavisi gören çocuk illüstrasyonu',
    imageRatio: 1,
    seoTitle: 'Çocuklarda Genel Anestezi ve Sedasyon ile Diş Tedavisi | Dr. Ömer Özdemir',
    metaDescription:
      'Çocuk diş tedavisinde genel anestezi ve sedasyon ne zaman gerekir, güvenli mi? Anestezi uzmanı eşliğinde çocuk diş tedavisi hakkında Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'çocuklarda genel anestezi ile diş tedavisi',
      'çocuk sedasyon diş',
      'uyutarak diş tedavisi',
      'çocuk diş hekimi Bakırköy',
      'çocuk diş hekimi Acıbadem',
    ],
    intro: [
      'Bazı ebeveynler “genel anestezi” ifadesini görünce tedirgin oluyor. Bu soruyu sormak çok doğal. Genel anestezi ya da sedasyon, her çocuğa uygulanan bir yöntem değil; yalnızca gerekli olduğu durumlarda ve dikkatli bir değerlendirmeyle gündeme geliyor.',
      'Amaç, çocuğun hem fiziksel olarak güvende olması hem de bu süreçten kötü bir anı taşımadan çıkması.',
    ],
    sections: [
      {
        heading: 'Hangi durumlarda düşünülüyor?',
        items: [
          'Çocuk çok küçük yaşta olduğu için iş birliği kurulamıyorsa',
          'Tedavi edilmesi gereken diş sayısı fazlaysa ve tek seansta bitirmek çocuğu yormadan daha uygunsa',
          'Yoğun diş hekimi korkusu ya da özel bir sağlık durumu varsa',
          'Kaza sonrası acil ve kapsamlı bir müdahale gerekiyorsa',
        ],
      },
      {
        heading: 'Güvenlik nasıl sağlanıyor?',
        paragraphs: [
          'İşlem, anestezi uzmanı eşliğinde ve sürekli takip altında yapılıyor. Kalp atışı, oksijen seviyesi ve diğer bulgular işlem boyunca izleniyor. Her çocuk için önce genel sağlık durumu değerlendiriliyor ve uygun olup olmadığına buna göre karar veriliyor.',
        ],
      },
      {
        heading: 'Sedasyon ile genel anestezi arasındaki fark',
        paragraphs: [
          'Sedasyonda çocuk rahatlatılıyor ve işlem boyunca sakin kalması sağlanıyor. Genel anestezide ise çocuk tamamen uyutuluyor. Hangisinin uygun olduğuna çocuğun yaşı, yapılacak işlemin kapsamı ve sağlık durumu birlikte değerlendirilerek karar veriliyor.',
        ],
      },
      {
        heading: 'Ailelerin asıl kazancı',
        paragraphs: [
          'Çok sayıda işlem gereken küçük çocuklarda anestezi altında tedavi, tedavi kalitesini artırıyor ve çocuğun tekrar tekrar koltuğa zorla oturtulma deneyimi yaşamasını önlüyor. Bazen en iyi tedavi, çocuğun hiçbir şey hatırlamadığı tedavi oluyor.',
        ],
      },
    ],
    steps: [
      {
        title: 'Ön değerlendirme',
        text: 'Çocuğun diş durumu ve genel sağlık öyküsü incelenerek yöntem belirleniyor.',
      },
      {
        title: 'Hazırlık',
        text: 'İşlem öncesi uyulması gereken kurallar (örneğin aç kalma süresi) aileye önceden net şekilde bildiriliyor.',
      },
      {
        title: 'İşlem',
        text: 'Anestezi uzmanı eşliğinde, sürekli takip altında gerekli tüm tedaviler tek seansta tamamlanmaya çalışılıyor.',
      },
      {
        title: 'Uyanma ve eve dönüş',
        text: 'Çocuk uyanana kadar gözlem altında tutuluyor, taburcu sonrası bakım için aileye bilgi veriliyor.',
      },
    ],
    faq: [
      {
        q: 'Çocuğuma genel anestezi gerekiyor, zararlı mı?',
        a: 'Genel anestezi, uygun hastada ve anestezi uzmanı eşliğinde, sürekli takip altında uygulandığında kontrollü bir yöntem. Her çocuk için genel sağlık durumu önceden değerlendiriliyor.',
      },
      {
        q: 'Sedasyon ile genel anestezi aynı şey mi?',
        a: 'Hayır. Sedasyonda çocuk rahatlatılıyor ve sakin kalıyor. Genel anestezide çocuk tamamen uyutuluyor. Hangisi uygun olduğuna çocuğa göre karar veriliyor.',
      },
      {
        q: 'Her küçük çocuk için anestezi gerekir mi?',
        a: 'Hayır. Çocukların çoğu uygun yaklaşımla koltukta tedavi edilebiliyor. Anestezi, tedavi sayısı fazlaysa ya da iş birliği kurulamıyorsa gündeme geliyor.',
      },
    ],
    relatedGuideIds: ['genel-anestezi-nedenleri', 'dis-hekimi-korkusu'],
  },
  {
    slug: 'cocuklarda-erken-ortodontik-tedavi',
    category: 'gelisim',
    icon: 'smile',
    title: 'Çocuklarda Erken Ortodontik Tedavi',
    summary:
      'Bazı sorunlar süt dişi döneminde bile fark edilebiliyor. Erken bakılınca çoğu zaman basit bir apareyle çözülüyor.',
    image: '/apareys.png',
    imageAlt: 'Çocuklar için ortodontik apareyler ve tedavileri illüstrasyonu',
    imageRatio: 1,
    seoTitle: 'Çocuklarda Erken Ortodontik Tedavi ve Aparey | Çocuk Diş Hekimi Dr. Ömer Özdemir',
    metaDescription:
      'Çocuklarda diş teli ve aparey tedavisi ne zaman başlamalı? Erken ortodontik müdahale ve çene gelişimi hakkında Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir’den bilgi.',
    keywords: [
      'çocuklarda ortodonti',
      'çocuk diş teli',
      'çocuk apareyi',
      'erken ortodontik tedavi',
      'çene genişletme apareyi',
      'çocuk diş hekimi Bakırköy',
    ],
    intro: [
      'Çarpık diş ya da çene sorunu deyince akla genellikle ergenlik dönemindeki teller geliyor. Oysa erken fark edilen bazı sorunlara çok daha önce, hatta süt dişleri döneminde bile basit apareylerle müdahale edilebiliyor.',
      'Çene, çocukluk boyunca gelişmeye devam ediyor. Bu dönemde fark edilen bir darlık ya da uyumsuzluk, apareylerle doğru yöne yönlendirilebiliyor.',
    ],
    sections: [
      {
        heading: 'Erken müdahale neden önemli?',
        paragraphs: [
          'Erken müdahale iki şeyi aynı anda sağlıyor: çene gelişimini doğru yöne yönlendiriyor ve ileride gerekebilecek daha kapsamlı diş teli ihtiyacını azaltabiliyor. Her çocukta bu mümkün olmayabilir ama bir kez değerlendirilmek şansı kaçırmamak için yeterli.',
        ],
      },
      {
        heading: 'Bu işaretlere dikkat',
        items: [
          'Dişlerde çapraşıklık ya da yer darlığı',
          'Alt ve üst dişlerin doğru kapanmaması (çapraz veya açık kapanış)',
          'Uzun süren emzik ya da parmak emme alışkanlığı',
          'Süt dişlerinin çok erken kaybedilmesi',
          'Çenede asimetri veya ağızdan nefes alma',
        ],
      },
      {
        heading: 'Aparey türleri',
        items: [
          'Hareketli apareyler: çocuk tarafından takılıp çıkarılabilen, belirli saatlerde kullanılması gereken cihazlar',
          'Sabit apareyler: ağızda kalıcı olarak duran, çene genişletme gibi daha spesifik durumlarda kullanılan cihazlar',
        ],
        paragraphs: [
          'Hangi türün uygun olduğu, sorunun türüne, çocuğun yaşına ve iş birliğine göre belirleniyor.',
        ],
      },
      {
        heading: 'Ne zaman değerlendirme yaptırılmalı?',
        paragraphs: [
          'Genel öneri, 7 yaş civarında bir ortodontik değerlendirmeden geçmek. Bu yaşta tüm kalıcı dişler çıkmamış olsa da çene yapısındaki olası sorunlar fark edilebiliyor. Emzik ya da parmak emme alışkanlığı 3-4 yaşından sonra devam ediyorsa daha erken de bakılabiliyor.',
        ],
      },
    ],
    steps: [
      {
        title: 'Muayene ve kayıtlar',
        text: 'Dişler, çene yapısı ve kapanış incelenip gerekirse röntgen ve ölçüler alınıyor.',
      },
      {
        title: 'Planlama',
        text: 'Çocuğun yaşına ve sorununa uygun aparey türüne karar veriliyor, süreç ailenin anlayacağı dille anlatılıyor.',
      },
      {
        title: 'Aparey uygulaması',
        text: 'Aparey hazırlanıp takılıyor, kullanım şekli hem çocuğa hem aileye gösteriliyor.',
      },
      {
        title: 'Düzenli kontrol',
        text: 'Çene gelişimi izleniyor, aparey gerektiğinde ayarlanıyor.',
      },
    ],
    faq: [
      {
        q: 'Çocuklarda diş teli ne zaman takılır?',
        a: 'Sabit diş teli genellikle kalıcı dişlerin büyük kısmı çıktıktan sonra, ergenliğe yakın dönemde uygulanıyor. Çene yapısına yönelik erken tedaviler ise çok daha önce, süt ve karışık dişlenme döneminde yapılabiliyor.',
      },
      {
        q: 'Erken ortodontik tedavi diş telini tamamen önler mi?',
        a: 'Her zaman önlemiyor ama gelişimi doğru yöne yönlendirerek ileride gerekebilecek tedavinin kapsamını azaltabiliyor. Karar muayene sonrası verilebiliyor.',
      },
      {
        q: 'Emzik ya da parmak emme dişleri bozar mı?',
        a: 'Belirli bir yaşa kadar normal bir davranış. Alışkanlık 2-3 yaşından sonra yoğun şekilde sürerse çene ve diş gelişimini etkileyebiliyor. Çoğu etki erken müdahaleyle büyük ölçüde geri dönüyor.',
      },
    ],
    relatedGuideIds: ['ortodontik-tedavi-baslangici', 'emzik-parmak-emme', 'sut-dislerinin-dokulme-takvimi'],
  },
];

const categoryOrder = treatmentCategories.map((c) => c.id);

// Kategori sırasına göre dizilir; aynı kategoride dosyadaki sıra korunur
export const treatments: Treatment[] = [...baseTreatments, ...extraTreatments].sort(
  (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category),
);

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}
