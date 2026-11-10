import type { Treatment } from './types';

const treatment: Treatment = {
  no: 23,
  slug: 'cocuklarda-dis-travmasi',
  category: 'restoratif',
  icon: 'alert',
  title: 'Çocuklarda diş travması',
  summary:
    'Düşme ya da çarpma sonrasında dişte kırılma veya oynama görülebilmektedir. İlk dakikalar önemli olduğundan hızlı müdahale gerekmektedir.',
  image: '/travma-v2/kapak-kirik-kesici.webp',
  imageAlt: 'Çocuğun gülümsemesinde sol üst orta kesici dişin kesici kenarının bir bölümünün kırılması ve açıkta kalan krem-sarı dentin yüzeyi',
  imageRatio: 1672 / 941,
  seoTitle: 'Çocuklarda diş travması ve kırılan diş | Çocuk Diş Hekimi Dr. Ömer Özdemir',
  metaDescription:
    'Çocuğun dişi kırıldığında ya da yerinden çıktığında ne yapılması gerektiği. Diş travmasında ilk yardım ve tedavi hakkında bilgi. Bakırköy ve Acıbadem çocuk diş hekimi Dr. Ömer Özdemir.',
  keywords: [
    'çocuklarda diş travması',
    'kırılan diş',
    'dişi çıkan çocuk ne yapmalı',
    'acil çocuk diş hekimi',
    'çocuk diş hekimi Bakırköy',
    'çocuk diş hekimi Acıbadem',
  ],
  intro: [
    'Koşarken düşme, oyun sırasında çarpma ve bisikletten düşme çocukluğun neredeyse kaçınılmaz bir parçasıdır. Diş travmaları bu nedenle sık görülür ve ailelerin en çok telaşla başvurduğu durumlardan biridir.',
    'Bir kazadan sonra ilk dakikalarda yapılanlar sonucu doğrudan etkiler. Bu sayfa o anda sakin kalabilmek için hazırlanmıştır.',
  ],
  sections: [
    {
      heading: 'Kaza sırasında ilk yardım',
      items: [
        'Önce çocuğun genel durumuna bakınız. Bilinç kaybı, tekrarlayan kusma ya da şiddetli uyku hali varsa vakit kaybetmeden acil servise gidiniz.',
        'Ağız içi kanamada temiz bir gazlı bez veya bezle hafif baskı uygulayınız.',
        'Dış görünüşte şişlik varsa soğuk uygulama yapabilirsiniz.',
        'Kırılan diş parçası bulunduysa süt ya da tükürük gibi nemli bir ortamda saklayarak kliniğe getiriniz.',
      ],
    },
    {
      heading: 'Dişin yerinden çıkması (avülsiyon)',
      paragraphs: [
        'Süt dişi tamamen yerinden çıktıysa yerine geri takılmamalıdır çünkü bu altındaki kalıcı diş tomurcuğuna zarar verebilmektedir. Kalıcı diş için durum farklıdır ve burada zaman gerçekten kritiktir.',
        'Dişi kök kısmına dokunmadan taç kısmından tutunuz. Kirliyse kısaca soğuk su ya da süt ile durulayınız ve hemen kliniğe ulaşınız. Mümkünse ilk 30 dakika içinde hekime başvurmak dişin kurtulma şansını artırmaktadır.',
      ],
    },
    {
      heading: 'Görülen travma türleri',
      items: [
        'Kırık, dişin bir kısmının kırılmasıdır ve derinliğine göre farklı tedavi gerektirir',
        'Yer değiştirme, dişin konumundan oynaması ancak tam çıkmamasıdır',
        'Dişin tamamen yuvasından çıkması',
        'Dışarıdan görülmeyen ve röntgenle tespit edilen kök çatlağı',
      ],
    },
    {
      heading: 'Kırık dişte röntgenle nelere bakılır?',
      paragraphs: [
        'Dişin kırılan kısmı gözle görülse de kırığın sinir odasına ne kadar yaklaştığı ve kökün durumu yalnızca röntgenle anlaşılabilmektedir. Aşağıdaki örnekte sol üst orta kesici dişin kesici kenarının bir bölümü kırılmıştır ve periapikal röntgende kırık hat ile sinir odası arasında sağlam diş dokusunun kaldığı görülmektedir.',
        'Genç kalıcı dişlerde kökler henüz tam gelişmediğinden kök uçları açık görünmektedir. Bu bilgi tedavinin seçiminde belirleyicidir.',
      ],
      images: [
        {
          src: '/travma-v2/kapak-kirik-kesici.webp',
          alt: 'Çocuğun gülümsemesinde sol üst orta kesici dişin kesici kenarının bir bölümünün kırılması',
          caption: 'Ağız içi görünüm',
        },
        {
          src: '/travma-v2/rontgen-periapikal.webp',
          alt: 'Dört üst kesici dişin periapikal röntgen görünümlü illüstrasyonu, sağdaki orta kesicinin kesici kenarı kırık ve kırık ile sinir odası arasında sağlam diş dokusu var',
          caption: 'Periapikal röntgen görünümlü illüstrasyon',
        },
      ],
    },
    {
      heading: 'Neden hemen kontrol gerekmektedir?',
      paragraphs: [
        'Görünürde küçük bir darbe bile diş köküne veya sinirine zarar vermiş olabilir ve bu hemen belli olmaz. Kanama olmadığı için sorun yok diye evde beklemek yerine kaza sonrasında en kısa sürede kontrole gelinmesi önerilmektedir. Erken ve doğru müdahale çoğu zaman dişi kurtarmanın anahtarıdır.',
      ],
    },
  ],
  steps: [
    {
      title: 'Genel değerlendirme',
      text: 'Önce çocuğun genel durumuna, ağız içi yaralanmalara ve dişlere bakılmaktadır.',
    },
    {
      title: 'Röntgen',
      text: 'Kök ve çevre dokular görüntülenir ve gözle görülmeyen hasarlar araştırılmaktadır.',
    },
    {
      title: 'Acil tedavi',
      text: 'Kırığın ya da yer değiştirmenin türüne göre dişin onarılması, yerine yerleştirilmesi veya sabitlenmesi yapılmaktadır.',
    },
    {
      title: 'Takip',
      text: 'Travmadan sonra diş sinirinin durumu zaman içinde değişebileceğinden kontrol randevuları planlanmaktadır.',
    },
  ],
  faq: [
    {
      q: 'Çocuğumun dişi kırıldı, ne yapmalıyım?',
      a: 'Çocuğu sakinleştirip genel durumuna bakınız. Kırık parça bulunursa nemli bir ortamda saklayınız ve en kısa sürede kliniğe ulaşınız. Kanama olursa temiz bezle hafifçe bastırabilirsiniz.',
    },
    {
      q: 'Süt dişi yerinden çıkarsa geri takılır mı?',
      a: 'Süt dişi genellikle geri takılmaz çünkü bu altındaki kalıcı diş tomurcuğuna zarar verebilmektedir. Yine de çocuğun kontrol edilmesi gerekmektedir.',
    },
    {
      q: 'Kalıcı diş tamamen çıkarsa ne yapılmalıdır?',
      a: 'Dişi kök kısmına dokunmadan taç kısmından tutunuz ve kirliyse kısaca durulayınız. Vakit kaybetmeden kliniğe ulaşınız. Kliniğe giderken dişi süt ya da tükürük içinde taşıyabilirsiniz.',
    },
    {
      q: 'Darbeden sonra diş renk değiştirdi, normal midir?',
      a: 'Travmadan sonra dişte grileşme ya da koyulaşma görülebilmektedir. Bu durum sinirin etkilendiğini gösterebileceğinden kontrol edilmesi gerekmektedir.',
    },
  ],
  relatedGuideIds: ['dis-kirilmasi-travma'],
};

export default treatment;
