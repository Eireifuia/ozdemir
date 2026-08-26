export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] };

export type Guide = {
  id: string;
  title: string;
  blocks: GuideBlock[];
};

export const treatmentGuides: Guide[] = [
  {
    id: 'curuk-hizli-ilerleme',
    title: 'Çocuklarda Diş Çürüğü Neden Bu Kadar Hızlı İlerliyor?',
    blocks: [
      { type: 'p', text: 'Çürük denince akla hemen büyükler için geçerli kurallar geliyor: şekerli bir şeyler yiyip fırçalamayı unutursanız olur, fırçalarsanız olmaz. Ama çocuk dişlerinde işler biraz daha farklı işliyor, çünkü süt dişlerinin dış tabakası yetişkin dişlerine göre çok daha ince. Bu da şu anlama geliyor: çürük yapan mikroplar süt dişlerinde çok daha kolay yol buluyor, ilerleme hızı da yetişkinlere göre belirgin şekilde daha fazla. Bir çürük büyüklerde aylar içinde ilerlerken, çocukta haftalar içinde derinleşebiliyor.' },
      { type: 'p', text: 'Bizde en çok duyduğumuz cümle şu: "Nasıl olsa süt dişi, dökülecek." Anlaşılır bir düşünce ama gerçeği tam yansıtmıyor. Süt dişleri sadece yer tutan geçici parçalar değil, çocuğunuzun düzgün beslenmesinden konuşma gelişimine, kalıcı dişlerin doğru yerde ve doğru zamanda çıkmasına kadar birçok şeyi etkiliyor. Erken kaybedilen ya da tedavi edilmeyen bir süt dişi çürüğü, ilerideki kalıcı diş düzenini de değiştirebiliyor. Yani "dökülecek" doğru, ama "önemi yok" hiç doğru değil.' },
      { type: 'h3', text: 'Çürük neden bu kadar hızlı ilerliyor?' },
      { type: 'p', text: 'Birkaç sebebi var, hepsi birbirine bağlı:' },
      { type: 'ul', items: [
        'Diş yüzeyi yetişkinlere göre daha zayıf',
        'Çocukların beslenme düzeni genelde gün boyu yayılıyor, ağız sürekli şeker/asit ortamında kalıyor',
        'Fırçalama alışkanlığı henüz oturmamış oluyor, teknik ve süreklilik eksik kalabiliyor',
        'Diş araları dar olduğu için gıda birikimi kolay oluyor, fark edilmesi zor',
      ] },
      { type: 'h3', text: 'Önlemek, tedavi etmekten her zaman daha kolay' },
      { type: 'p', text: 'İşin güzel tarafı şu: bu tablo büyük ölçüde önlenebilir. Düzenli kontroller (yılda en az iki kez), doğru beslenme alışkanlığı (şekerli atıştırmaların miktarından çok sıklığı önemli) ve koruyucu uygulamalar çürük riskini büyük oranda düşürüyor. Bu bilgiyi mümkün olduğunca erken, ilk diş çıkmadan önce bile ailelerle paylaşmaya çalışıyoruz.' },
      { type: 'p', text: 'Çürük oluştuysa da panik yok. Derinliğine göre farklı tedavi seçenekleri var, küçük ve yüzeysel çürüklerde koruyucu dolgu yeterli olabiliyor. Dolgu seçerken hem görünüm hem dayanıklılık düşünülüyor, çocuğunuz hem rahat çiğneyebiliyor hem de gülümsemesinden ödün vermiyor.' },
    ],
  },
  {
    id: 'ilk-dis-hekimi-ziyareti',
    title: 'Çocuğumu İlk Diş Hekimine Ne Zaman Götürmeliyim?',
    blocks: [
      { type: 'p', text: 'Bu soruyu çoğu aile ya çok geç soruyor ya da hiç sormuyor. Yaygın kanı "dişleri tamamlanınca" ya da "bir sorun olursa" yönünde ama bizim önerdiğimiz zamanlama çok daha erken: ilk diş çıktıktan sonraki altı ay içinde, en geç bir yaşına kadar bir kontrol randevusu almanızı öneriyoruz.' },
      { type: 'h3', text: 'Neden bu kadar erken?' },
      { type: 'p', text: 'Bu ilk ziyaret aslında bir tedavi randevusu değil, bir tanışma ve bilgilendirme randevusu. Amacımız üç şey:' },
      { type: 'ul', items: [
        'Diş çıkışının normal ilerleyip ilerlemediğini kontrol etmek',
        'Size doğru fırçalama, beslenme ve biberon/emzik alışkanlıkları konusunda yol göstermek',
        'Çocuğunuzun diş hekimi koltuğuna, sese, ışığa erken yaşta alışması, ileride korku oluşmadan bu ortamı tanıması',
      ] },
      { type: 'p', text: 'Bu son madde küçümsenmemeli. Bir çocuk ilk diş hekimi deneyimini bir sorun (ağrı, acil müdahale) yaşadığında değil, sakin bir kontrol sırasında yaşarsa, ileriki yıllarda diş hekimine gitmek onun için çok daha az stresli bir şey haline geliyor.' },
      { type: 'h3', text: 'Ziyarette neler oluyor?' },
      { type: 'p', text: 'İlk randevu genelde kısa sürüyor. Diş sayısı ve konumu kontrol ediliyor, çene ve ağız içi gelişime bakılıyor, size ev bakımı anlatılıyor. Çocuğunuz bu sırada kucağınızda olabilir, hiçbir zorlama yapmıyoruz. Amaç, ilk deneyimi olabildiğince rahat geçirmek.' },
      { type: 'p', text: 'Bu ilk adımı erken atan aileler, ilerleyen yıllarda çürük riskini daha erken fark ediyor ve çocuklarının diş hekimi korkusu çok daha az oluyor.' },
    ],
  },
  {
    id: 'sut-dislerinin-dokulme-takvimi',
    title: 'Süt Dişleri Ne Zaman Düşer? Diş Gelişim Takvimi',
    blocks: [
      { type: 'p', text: 'Bu, kliniğe gelen ailelerin belki de en sık sorduğu sorulardan biri: "Bu diş normal zamanında mı düşüyor?" Cevap genelde bir takvime bağlı ama her çocukta birkaç ay sapma olması da tamamen normal, o yüzden burada vereceğimiz rakamları kesin kural değil, genel bir yön haritası olarak düşünün.' },
      { type: 'h3', text: 'Genel sıralama' },
      { type: 'p', text: 'Süt dişleri genelde çıkış sırasına yakın bir sırayla dökülüyor:' },
      { type: 'ul', items: [
        'Alt ve üst ön dişler: 6-7 yaş civarı',
        'Yan dişler: 7-8 yaş civarı',
        'İlk azı dişleri: 9-11 yaş civarı',
        'Köpek dişleri: 9-12 yaş civarı',
        'İkinci azı dişleri: 10-12 yaş civarı',
      ] },
      { type: 'p', text: 'Toplamda bu süreç 6-7 yaşında başlayıp 12-13 yaşına kadar sürebiliyor, yerini alan kalıcı dişler de bu süre içinde kademeli olarak çıkıyor.' },
      { type: 'h3', text: 'Ne zaman endişelenmeli?' },
      { type: 'p', text: 'Birkaç ay erken ya da geç düşme genelde sorun değil. Ama şu durumlarda bir kontrol yaptırmanızı öneriyoruz: bir diş beklenenden çok erken (örneğin çürük veya darbe sebebiyle) kaybedilirse, altındaki kalıcı diş henüz hazır değilken boşluk kapanabiliyor ve bu da ileride sıkışıklığa yol açabiliyor. Bu durumda genelde bir yer tutucu kullanıyoruz, böylece kalıcı diş çıkana kadar boşluğu koruyoruz.' },
      { type: 'p', text: 'Aileler genelde bu takvimi bilmediği için gereksiz yere endişeleniyor ya da tam tersi, gerçekten müdahale gerektiren bir erken kayıp durumunu "nasıl olsa düşecekti" diyerek atlıyor. Bu yüzden takvimi bilmek kadar, beklenenden farklı bir şey olduğunda bize kontrol ettirmeniz de önemli.' },
    ],
  },
  {
    id: 'emzik-parmak-emme',
    title: 'Emzik ve Parmak Emme Dişlere Zarar Verir mi?',
    blocks: [
      { type: 'p', text: 'Bu konu ailelerin en çok tartıştığı, en çok da suçluluk hissettiği konulardan biri. Hemen baştan rahatlatalım: emzik ya da parmak emme, belirli bir yaşa kadar tamamen normal bir davranış, hatta bebeklikte bir sakinleşme yolu. Sorun alışkanlığın kendisinde değil, ne kadar sürdüğünde.' },
      { type: 'h3', text: 'Ne zaman sorun oluşturmaya başlıyor?' },
      { type: 'p', text: 'Genel olarak, emme alışkanlığı 2-3 yaşından sonra da yoğun şekilde devam ederse çene ve diş gelişimini etkilemeye başlayabiliyor. En sık gördüğümüz etkiler:' },
      { type: 'ul', items: [
        'Ön dişlerde açık kapanış (üst ve alt ön dişler kapandığında aralarında boşluk kalması)',
        'Üst çenenin daralması',
        'Dişlerde öne doğru itilme',
      ] },
      { type: 'p', text: 'Bu etkilerin derecesi, alışkanlığın süresine, sıklığına ve emme şiddetine göre değişiyor. Günde birkaç dakika, uyumadan önce emzik kullanan bir çocukla, gün boyu parmağını emen bir çocuğun etkilenme derecesi aynı değil.' },
      { type: 'h3', text: 'Peki alışkanlık nasıl bırakılır?' },
      { type: 'p', text: 'Zorlama ve cezalandırma genelde işe yaramıyor, hatta çocuğu daha fazla strese sokup alışkanlığı pekiştirebiliyor. Daha etkili olan yaklaşımlar arasında, bırakınca ödüllendirme ve alışkanlığın tetiklendiği anları (uyku öncesi, sıkılma anları) fark edip yerine başka bir rutin koymak var. 4 yaşından sonra hala devam eden ve çene gelişimini etkileyen durumlarda biz de destek olup daha planlı bir yol izleyebiliyoruz.' },
      { type: 'p', text: 'Burada asıl mesajımız şu: bu konuda geç kalmış hissetmeyin, çoğu etki erken müdahaleyle büyük ölçüde geri dönüyor.' },
    ],
  },
  {
    id: 'cocuklarda-kanal-tedavisi',
    title: 'Çocuklarda Kanal Tedavisi Nasıl Yapılır, Acıtır mı?',
    blocks: [
      { type: 'p', text: '"Kanal tedavisi" kelimesini duyan çoğu ebeveynin aklına hemen büyükler için bilinen, biraz korkutucu bir görüntü geliyor. Çocuklarda uyguladığımız kanal tedavisi hem amaç hem de yöntem olarak biraz farklı işliyor, bu yüzden bu konuyu ayrı ele almakta fayda var. Ve hayır, doğru anestezi ile yapıldığında çocuğunuz acı hissetmiyor.' },
      { type: 'h3', text: 'Ne zaman gerekiyor?' },
      { type: 'p', text: 'Süt dişinde ya da yeni çıkmış kalıcı dişte çürük, dişin sinirine ulaşacak kadar derinleştiğinde, dişi çekmeden koruyabilmek için kanal tedavisi devreye giriyor. Buradaki önceliğimiz her zaman aynı: mümkünse dişi ağızda tutmak. Çünkü erken kaybedilen bir diş, çene gelişimini ve diğer dişlerin konumunu etkileyebiliyor.' },
      { type: 'h3', text: 'Çocuklarda nasıl farklılaşıyor?' },
      { type: 'p', text: 'Süt dişlerinin yapısı kalıcı dişlerden farklı, bu yüzden çocuklara özel yöntemler kullanıyoruz. Bazı vakalarda dişin sinirinin tamamı değil, sadece etkilenen kısmı tedavi ediliyor (buna yarı kanal tedavisi diyoruz, bunu ayrı bir yazıda daha detaylı anlattık). İşlem süresi ve yaklaşım, çürüğün derinliğine ve dişin süt dişi mi yoksa yeni çıkmış kalıcı diş mi olduğuna göre değişiyor.' },
      { type: 'h3', text: 'Tedavi sonrası' },
      { type: 'p', text: 'Tedavi tamamlandıktan sonra diş genelde bir kron ile güçlendiriliyor, çünkü yapısı biraz zayıflamış oluyor. Çocuğunuz bu süreçte normal şekilde çiğneyebiliyor, diş işlevini sürdürüyor ve en önemlisi, kalıcı dişin gelişimi için gereken yer korunmuş oluyor.' },
    ],
  },
  {
    id: 'dis-kirilmasi-travma',
    title: 'Çocuğumun Dişi Kırıldı, Ne Yapmalıyım?',
    blocks: [
      { type: 'p', text: 'Koşarken düşme, oyun sırasında çarpma, bisikletten düşme... çocukluğun neredeyse kaçınılmaz bir parçası. Diş travmaları da bu yüzden sık karşılaştığımız, ailelerin en çok panikle geldiği durumlardan biri.' },
      { type: 'h3', text: 'İlk dakikalar en önemlisi' },
      { type: 'p', text: 'Bir kaza olduğunda ilk yaptığınız şey sonucu doğrudan etkiliyor. Diş kırılmışsa, kırık parçayı bulabiliyorsanız nemli bir ortamda (süt ya da tükürük içinde) saklayıp hemen bize getirin, fark yaratabiliyor. Diş yerinden oynamış ya da tamamen çıkmışsa, süt dişini asla yerine geri takmayın (bu, altındaki kalıcı diş tomurcuğuna zarar verebiliyor), ama kalıcı diş için durum farklı ve orada hız gerçekten kritik.' },
      { type: 'h3', text: 'Görülen travma türleri' },
      { type: 'ul', items: [
        'Kırık: dişin bir kısmının kırılması, derinliğine göre farklı tedavi gerektiriyor',
        'Yer değiştirme: diş konumundan oynamış ama tam çıkmamış',
        'Dişin tamamen yuvasından çıkması',
        'Dışarıdan görülmeyen, röntgenle tespit edilen kök çatlağı',
      ] },
      { type: 'h3', text: 'Neden hemen kontrol gerekiyor?' },
      { type: 'p', text: 'Görünürde küçük bir darbe bile diş köküne veya sinirine zarar vermiş olabiliyor, bu hemen belli olmayabiliyor. Bu yüzden "kanamadı, sorun yok gibi" diye düşünüp evde beklemek yerine, kaza sonrası mümkün olan en kısa sürede bize getirmenizi öneriyoruz. Erken ve doğru müdahale, çoğu zaman dişi kurtarmanın anahtarı.' },
    ],
  },
  {
    id: 'cocuklarda-dis-cekimi',
    title: 'Çocuklarda Diş Çekimi Ne Zaman Gerekir?',
    blocks: [
      { type: 'p', text: '"Diş çekimi" duyunca aileler genelde bunu bir başarısızlık ya da son çare gibi görüyor. Oysa çoğu zaman durum tam tersi, çekim doğru zamanlandığında aslında sağlıklı bir diş gelişiminin önünü açan bir adım oluyor.' },
      { type: 'h3', text: 'Ne zaman çekim gerekiyor?' },
      { type: 'p', text: 'Birkaç farklı sebep söz konusu olabiliyor:' },
      { type: 'ul', items: [
        'Çürüğün çok ilerlemiş olması, dişin artık korunamayacak durumda olması',
        'İltihabın kontrol altına alınamaması',
        'Diş teli tedavisi için yer açma ihtiyacı',
        'Süt dişinin, altındaki kalıcı dişin çıkışına engel olması',
      ] },
      { type: 'h3', text: 'Süreç nasıl işliyor?' },
      { type: 'p', text: 'Çocuk dostu yöntemlerle, uygun anestezi altında işlemi ağrısız şekilde yapıyoruz. Çekim sonrası, eğer kalıcı dişin çıkmasına daha uzun bir süre varsa, boşluğun kapanmaması için bir yer tutucu takabiliyoruz. Bu, ileride diş teli ihtiyacını azaltan önemli bir adım.' },
      { type: 'h3', text: 'Sizin için önemli olan' },
      { type: 'p', text: 'Çekim kararı hiçbir zaman ilk tercihimiz değil, önce dişi koruma seçeneklerini (dolgu, kanal tedavisi) değerlendiriyoruz. Çekime karar verdiysek bunun bir sebebi vardır ve genelde bu, uzun vadede daha büyük bir sorunu önlüyor.' },
    ],
  },
  {
    id: 'genel-anestezi-nedenleri',
    title: 'Çocuk Diş Tedavisinde Neden Genel Anestezi Gerekir?',
    blocks: [
      { type: 'p', text: 'Bazı ebeveynler bu başlığı görünce hemen tedirgin oluyor, "çocuğuma neden genel anestezi gerekiyor" diye soruyor. Bu soruyu sormak çok doğal, o yüzden önce ne zaman ve neden bu yönteme başvurduğumuzu anlatalım.' },
      { type: 'h3', text: 'Hangi durumlarda gerekiyor?' },
      { type: 'p', text: 'Genel anestezi ya da sedasyonu genelde şu durumlarda değerlendiriyoruz:' },
      { type: 'ul', items: [
        'Çocuk çok küçük yaşta olduğu için işbirliği kuramıyorsak',
        'Tedavi edilmesi gereken diş sayısı fazlaysa ve tek seansta bitirmek çocuğu yormadan daha uygunsa',
        'Çocukta yoğun diş hekimi korkusu ya da özel bir sağlık durumu varsa',
        'Kaza sonrası acil ve kapsamlı bir müdahale gerekiyorsa',
      ] },
      { type: 'h3', text: 'Güvenlik nasıl sağlanıyor?' },
      { type: 'p', text: 'Bu işlemleri, anestezi uzmanı eşliğinde, sürekli takip altında yapıyoruz. Kalp atışı, oksijen seviyesi ve diğer bulgular işlem boyunca izleniyor. Amacımız, çocuğunuzun hem fiziksel olarak güvende olması hem de bu süreçten hiçbir kötü anı hatırlamadan çıkması.' },
      { type: 'h3', text: 'Sizin için asıl fayda' },
      { type: 'p', text: 'Genel anestezi altında yapılan tedaviler, özellikle çok sayıda işlem gereken küçük çocuklarda hem tedavi kalitesini artırıyor hem de çocuğunuzun tekrar tekrar diş koltuğuna zorla oturtulma deneyimini yaşamasını önlüyor. Bazen en iyi tedavi, çocuğun hiçbir şey hatırlamadığı tedavi oluyor.' },
    ],
  },
  {
    id: 'ortodontik-tedavi-baslangici',
    title: 'Çocuklarda Ortodontik Tedavi Ne Zaman Başlamalı?',
    blocks: [
      { type: 'p', text: 'Çarpık diş ya da çene problemi deyince akla genelde ergenlik dönemindeki teller geliyor ama erken fark edilen bazı sorunlara çok daha önce, hatta süt dişleri döneminde bile basit apareylerle müdahale edebiliyoruz.' },
      { type: 'h3', text: 'Erken müdahale neden önemli?' },
      { type: 'p', text: 'Çene, çocukluk boyunca hala gelişim halinde. Bu dönemde fark edilen bir darlık ya da uyumsuzluk, hareketli ya da sabit apareylerle yönlendirilebiliyor. Bu erken müdahale iki şeyi aynı anda sağlıyor: çene gelişimini doğru yöne yönlendiriyor ve ileride gerekebilecek daha kapsamlı diş teli ihtiyacını azaltıyor.' },
      { type: 'h3', text: 'Aparey türleri' },
      { type: 'ul', items: [
        'Hareketli apareyler: çocuğunuz tarafından takılıp çıkarılabilen, belirli saatlerde kullanılması gereken cihazlar',
        'Sabit apareyler: ağızda kalıcı olarak duran, çene genişletme gibi daha spesifik durumlar için kullanılan cihazlar',
      ] },
      { type: 'p', text: 'Hangi türün uygun olduğu, sorunun türüne, çocuğunuzun yaşına ve işbirliğine göre belirleniyor.' },
      { type: 'h3', text: 'Ne zaman değerlendirme yaptırmalı?' },
      { type: 'p', text: 'Genel önerimiz, 7 yaş civarında bir kontrolden geçmek. Bu yaşta henüz tüm kalıcı dişler çıkmamış olsa da çene yapısındaki olası sorunları bu dönemde fark edebiliyoruz, erken müdahale şansı da böylece kaçmıyor.' },
    ],
  },
  {
    id: 'dis-hekimi-korkusu',
    title: 'Çocuğum Diş Hekiminden Çok Korkuyor, Ne Yapmalıyım?',
    blocks: [
      { type: 'p', text: 'Bazı çocuklar için diş hekimi koltuğu, hayatlarının en gergin birkaç dakikası. Bu korku genelde bir önceki kötü deneyimden, ailenin kendi kaygısından ya da sadece bilinmeyene karşı doğal bir tedirginlikten geliyor. İyi haber şu ki bu korkuyla çalışmanın, hatta onu tamamen tersine çevirmenin oturmuş yöntemleri var.' },
      { type: 'h3', text: 'Korkuyu büyüten şeyler' },
      { type: 'ul', items: [
        'Sizin kendi diş hekimi kaygınızı fark etmeden çocuğunuza yansıtmanız',
        'Çocuğu "acımayacak, korkma" gibi cümlelerle rahatlatmaya çalışırken aslında "acı" ve "korku" kelimelerini gündeme getirmek',
        'İlk deneyimin bir acil durum veya ağrılı bir tedavi olması',
      ] },
      { type: 'h3', text: 'Bizde neler işe yarıyor?' },
      { type: 'p', text: 'Kliniğimizde kullandığımız "önce anlat, sonra göster, sonra yap" yöntemi oldukça etkili. Çocuğunuza önce ne olacağını basit kelimelerle anlatıyoruz, sonra aletleri gösteriyoruz (mümkünse dokunmasına bile izin veriyoruz), en son işlemi uyguluyoruz. Bu sıra, bilinmeyenin yarattığı korkuyu büyük ölçüde azaltıyor. Ayrıca olumlu kelimeler kullanmak da fark yaratıyor, örneğin "acımayacak" yerine "bunu hissedeceksin ama rahatsız etmeyecek" gibi.' },
      { type: 'h3', text: 'Size düşen rol' },
      { type: 'p', text: 'Çocuğunuzun önünde kendi diş hekimi korkunuzdan bahsetmemeniz, randevu öncesi gereksiz detay vermemeniz ve sakin bir tavır sergilemeniz, çocuğunuzun bu deneyimi nasıl algılayacağını doğrudan etkiliyor. Çocuklar, sizin sesinizin tonundan çok şey okuyor.' },
    ],
  },
  {
    id: 'yari-kanal-tedavisi-amputasyon',
    title: 'Yarı Kanal Tedavisi (Amputasyon) Nedir? Diş Çekmeden Kurtarmanın Yolu',
    blocks: [
      { type: 'p', text: '"Amputasyon" kelimesini duyunca ailelerin yüzündeki ifade hep aynı: bir anlık şok, sonra hemen "yani dişi mi kesecekler?" sorusu. Kelime kulağa gerçekten ürkütücü geliyor, kabul edelim. Ama bizde bu terim, çoğu kişinin sandığından çok daha sakin bir işlemi anlatıyor, üstelik dişi kurtarmaya yönelik.' },
      { type: 'p', text: 'O zaman soruyu doğrudan soralım: yarı kanal tedavisi tam olarak nedir?' },
      { type: 'p', text: 'Kısaca: dişin içindeki sinirin tamamı değil, sadece hasar görmüş üst kısmı alınıyor. Alttaki sağlıklı kısım olduğu gibi yerinde bırakılıyor. Yani "amputasyon" derken kastedilen, dişin bir parçasının kesilmesi değil, dişin içindeki hasarlı bir dokunun kısmen temizlenmesi. Bu yüzden halk arasında "yarı kanal tedavisi" ismi de kullanılıyor, kanal tedavisinin tamamı değil yarısı, üst kısmı yapılıyor çünkü.' },
      { type: 'h3', text: 'Peki bu yöntem ne zaman devreye giriyor?' },
      { type: 'p', text: 'Her derin çürükte bu yöntem uygulanmıyor. Şu durumda tercih ediyoruz: çürük sinire ulaşacak kadar ilerlemiş ama sinirin sadece üst kısmı etkilenmiş, alt kısım hala sağlıklı ve iltihaplanmamışsa yarı kanal gündeme geliyor. Bunu değerlendirmek bize düşen bir iş elbette, ama sizin bilmeniz gereken şu: bu bir "keşke tam kanal yapsaydık" durumu değil, tam tersine mümkün olan en az müdahaleyle dişi koruma çabası.' },
      { type: 'p', text: 'Neden en az müdahale önemli diye soracak olursanız: süt dişlerinin yapısı kalıcı dişlerden bambaşka. Tam kanal tedavisi her zaman en pratik ya da en gerekli seçenek olmuyor. Yarı kanal, uygun vakalarda hem daha basit hem daha rahat bir alternatif sunuyor, çocuğunuz için de daha kısa ve daha az yorucu bir işlem anlamına geliyor.' },
      { type: 'h3', text: 'Klasik kanal tedavisinden farkı ne?' },
      { type: 'p', text: 'İkisi de aynı amaca hizmet ediyor, diş çekilmeden ağızda kalsın diye. Ama uygulama farklı:' },
      { type: 'p', text: 'Klasik kanal tedavisinde sinirin tamamı alınıyor, kanallar temizlenip dolduruluyor. Yarı kanalda ise sadece üst kısım alınıyor, alttaki sağlıklı sinir özel bir madde ile korunuyor ve canlılığını sürdürüyor. Hangisinin uygulanacağına işlem sırasında dokunun durumuna bakılarak karar veriliyor, önceden kesin söylemek çoğu zaman mümkün olmuyor.' },
      { type: 'h3', text: 'Tedavi sonrası ne oluyor?' },
      { type: 'p', text: 'İşlem sonrası diş genelde bir kron ile kaplanıyor, çünkü yapısı biraz zayıflamış oluyor. Diş bu haliyle çiğneme işlevini sürdürüyor ve en kritik nokta, kalıcı diş çıkana kadar gereken yeri korumaya devam ediyor. Çocuğunuz kısa sürede normal beslenmesine dönebiliyor, düzenli kontrollerle süreci birlikte takip ediyoruz.' },
      { type: 'p', text: 'Yani özetle: "amputasyon" korkulacak bir kelime değil, dişi kurtarma çabasının bir parçası. Kelimenin kendisi ürkütücü geliyor olabilir ama arkasındaki mantık aslında oldukça sakin.' },
    ],
  },
];
