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
    title: 'Çocuklarda diş çürüğü neden hızlı ilerler?',
    blocks: [
      { type: 'p', text: 'Süt dişlerinin dış tabakası kalıcı dişlere göre daha incedir. Bu nedenle çürüğe neden olan bakteriler süt dişlerinde daha kolay yol bulur ve çürük çok daha hızlı derinleşebilir. Yetişkinlerde aylar süren bir ilerleme çocuklarda haftalar içinde görülebilmektedir.' },
      { type: 'p', text: 'Sık duyulan bir düşünce süt dişlerinin zaten dökülecek olmasıdır. Ancak süt dişleri yalnızca geçici parçalar değildir. Çocuğun beslenmesini ve konuşma gelişimini etkiler ve kalıcı dişlerin doğru yerde çıkmasına yardımcı olur. Erken kaybedilen ya da tedavi edilmeyen bir süt dişi ileride kalıcı diş düzenini de etkileyebilir.' },
      { type: 'h3', text: 'Çürüğün hızlı ilerlemesinin nedenleri' },
      { type: 'ul', items: [
        'Süt dişlerinin yüzeyi daha incedir',
        'Beslenme gün boyu yayıldığında ağız uzun süre şeker ve asit ortamında kalır',
        'Fırçalama alışkanlığı henüz yerleşmemiştir ve teknik eksik kalabilir',
        'Diş araları dar olduğundan besin birikimi kolaydır ve fark edilmesi güçtür',
      ] },
      { type: 'h3', text: 'Önlemek tedavi etmekten daha kolaydır' },
      { type: 'p', text: 'Bu tablo büyük ölçüde önlenebilir. Düzenli kontroller, yaşa uygun fırçalama ve koruyucu uygulamalar çürük riskini azaltmaya yardımcı olur. Beslenmede şekerli atıştırmaların miktarından çok sıklığı önemlidir.' },
      { type: 'p', text: 'Çürük oluştuğunda derinliğine göre farklı tedavi seçenekleri bulunur. Küçük ve yüzeysel çürüklerde koruyucu bir dolgu yeterli olabilir. Dolgu seçiminde hem görünüm hem dayanıklılık dikkate alınır.' },
    ],
  },
  {
    id: 'ilk-dis-hekimi-ziyareti',
    title: 'Çocuk ilk diş hekimi ziyaretine ne zaman gitmelidir?',
    blocks: [
      { type: 'p', text: 'Bu soru çoğu ailenin aklına geç gelmektedir. Yaygın kanı dişlerin tamamlanmasını ya da bir sorun çıkmasını beklemektir. Önerilen zamanlama ise çok daha erkendir. İlk diş çıktıktan sonraki altı ay içinde ve en geç bir yaşına kadar bir kontrol randevusu önerilmektedir.' },
      { type: 'h3', text: 'Neden bu kadar erken?' },
      { type: 'p', text: 'İlk ziyaret bir tedavi randevusu değil bir tanışma ve bilgilendirme randevusudur. Üç temel amacı vardır.' },
      { type: 'ul', items: [
        'Diş çıkışının normal ilerleyip ilerlemediğini kontrol etmek',
        'Fırçalama, beslenme ve biberon ya da emzik alışkanlıkları hakkında bilgi vermek',
        'Çocuğun koltuğa, sese ve ışığa erken yaşta alışmasına yardımcı olmak',
      ] },
      { type: 'p', text: 'Son madde önemlidir. İlk deneyimini bir ağrı ya da acil durumda değil sakin bir kontrol sırasında yaşayan çocuklar ilerleyen yıllarda diş hekimine daha rahat gelebilir.' },
      { type: 'h3', text: 'Ziyarette neler olmaktadır?' },
      { type: 'p', text: 'İlk randevu genellikle kısa sürer. Diş sayısı ve konumu kontrol edilir ve çene ile ağız içi gelişime bakılır. Ailelere ev bakımı anlatılır. Çocuk bu sırada ebeveynin kucağında olabilir ve zorlama yapılmaz.' },
    ],
  },
  {
    id: 'sut-dislerinin-dokulme-takvimi',
    title: 'Süt dişleri ne zaman düşer?',
    blocks: [
      { type: 'p', text: 'Ailelerin sık sorduğu sorulardan biri bir dişin normal zamanında düşüp düşmediğidir. Yanıt genellikle bir takvime dayanır ancak her çocukta birkaç ay sapma görülmesi olağandır. Bu nedenle aşağıdaki yaşlar kesin kural değil genel bir yön olarak değerlendirilmelidir.' },
      { type: 'h3', text: 'Genel sıralama' },
      { type: 'p', text: 'Süt dişleri genellikle çıkış sırasına yakın bir sırayla dökülür.' },
      { type: 'ul', items: [
        'Alt ve üst ön dişler 6-7 yaş civarında',
        'Yan dişler 7-8 yaş civarında',
        'İlk süt azıları 9-11 yaş civarında',
        'Köpek dişleri 9-12 yaş civarında',
        'İkinci süt azıları 10-12 yaş civarında',
      ] },
      { type: 'p', text: 'Süreç 6-7 yaşında başlayıp 12-13 yaşına kadar sürebilir. Yerini alan kalıcı dişler de bu süre içinde kademeli olarak çıkar.' },
      { type: 'h3', text: 'Ne zaman kontrol gerekir?' },
      { type: 'p', text: 'Birkaç ay erken ya da geç düşme genellikle sorun oluşturmaz. Bir diş beklenenden çok erken kaybedilirse durum farklıdır. Çürük ya da darbe nedeniyle oluşan erken kayıpta altındaki kalıcı diş hazır değilken boşluk kapanabilir ve ileride dişlerde sıkışıklığa yol açabilir. Bu durumda yer tutucu kullanılarak boşluk korunabilir.' },
      { type: 'p', text: 'Takvimi bilmek kadar beklenenden farklı bir durumda kontrol yaptırmak da önemlidir.' },
    ],
  },
  {
    id: 'emzik-parmak-emme',
    title: 'Emzik ve parmak emme dişlere zarar verir mi?',
    blocks: [
      { type: 'p', text: 'Emzik kullanımı ve parmak emme belirli bir yaşa kadar olağan bir davranıştır ve bebeklikte sakinleşme yollarından biridir. Dişler açısından belirleyici olan alışkanlığın kendisi değil sürekliliğidir.' },
      { type: 'h3', text: 'Ne zaman soruna dönüşebilir?' },
      { type: 'p', text: 'Emme alışkanlığı 2-3 yaşından sonra yoğun biçimde sürerse çene ve diş gelişimi etkilenebilir. Sık görülen etkiler şunlardır.' },
      { type: 'ul', items: [
        'Ön dişlerde açık kapanış (üst ve alt ön dişler kapandığında aralarında boşluk kalması)',
        'Üst çenenin daralması',
        'Dişlerin öne doğru itilmesi',
      ] },
      { type: 'p', text: 'Etkinin derecesi alışkanlığın süresine, sıklığına ve şiddetine göre değişir. Uyku öncesinde kısa süre emzik kullanan bir çocuk ile gün boyu parmak emen bir çocuk aynı ölçüde etkilenmez.' },
      { type: 'h3', text: 'Alışkanlık nasıl bırakılabilir?' },
      { type: 'p', text: 'Zorlama ve cezalandırma çoğunlukla yarar sağlamaz ve çocuğun stresini artırabilir. Bırakmayı ödüllendirmek ve alışkanlığı tetikleyen anları (uyku öncesi ya da sıkılma) fark ederek yerine farklı bir rutin koymak daha etkili olabilir. Dört yaşından sonra devam eden ve çene gelişimini etkileyen durumlarda hekim desteğiyle daha planlı bir yol izlenebilir.' },
      { type: 'p', text: 'Birçok etki erken dönemde alışkanlık bırakıldığında geri dönebilir.' },
    ],
  },
  {
    id: 'cocuklarda-kanal-tedavisi',
    title: 'Çocuklarda kanal tedavisi nasıl yapılır?',
    blocks: [
      { type: 'p', text: 'Kanal tedavisi ifadesi birçok ebeveynin aklına yetişkinlerde uygulanan tedaviyi getirir. Çocuklarda uygulanan kanal tedavisi amaç ve yöntem olarak farklılık gösterir. Uygun anestezi ile yapıldığında işlem sırasında ağrı hissedilmemesi hedeflenir.' },
      { type: 'h3', text: 'Ne zaman gerekir?' },
      { type: 'p', text: 'Süt dişinde ya da yeni çıkmış kalıcı dişte çürük sinire ulaşacak kadar derinleştiğinde dişi çekmeden korumak için kanal tedavisi uygulanabilir. Öncelik mümkün olduğunda dişi ağızda tutmaktır. Erken kaybedilen bir diş çene gelişimini ve diğer dişlerin konumunu etkileyebilir.' },
      { type: 'h3', text: 'Çocuklarda nasıl farklılaşır?' },
      { type: 'p', text: 'Süt dişlerinin yapısı kalıcı dişlerden farklıdır ve çocuklara özel yöntemler kullanılır. Bazı durumlarda sinirin tamamı değil yalnızca etkilenen kısmı tedavi edilir. Bu yaklaşım yarı kanal tedavisi olarak adlandırılır. İşlem süresi çürüğün derinliğine ve dişin süt dişi ya da kalıcı diş olmasına göre değişir.' },
      { type: 'h3', text: 'Tedaviden sonra' },
      { type: 'p', text: 'Tedavi sonrasında diş genellikle yapısı zayıfladığı için diş kaplaması ile güçlendirilir. Çocuk bu süreçte normal çiğneme işlevini sürdürür ve kalıcı dişin gelişimi için gereken yer korunmuş olur.' },
    ],
  },
  {
    id: 'dis-kirilmasi-travma',
    title: 'Çocuğun dişi kırıldığında ne yapılmalıdır?',
    blocks: [
      { type: 'p', text: 'Koşarken düşme, oyun sırasında çarpma ve bisikletten düşme çocukluk döneminde sık görülür. Diş travmaları da bu nedenle ailelerin sık karşılaştığı ve telaşla başvurduğu durumlar arasındadır.' },
      { type: 'h3', text: 'İlk dakikalar önemlidir' },
      { type: 'p', text: 'Kaza sırasında yapılan ilk müdahale sonucu doğrudan etkiler. Diş kırılmışsa kırık parça bulunabiliyorsa nemli bir ortamda (süt ya da tükürük içinde) saklanıp hemen kliniğe getirilmelidir. Dişin yerinden oynaması ya da tamamen çıkması durumunda süt dişi yerine takılmamalıdır çünkü altındaki kalıcı diş tomurcuğuna zarar verebilir. Kalıcı dişlerde ise süre çok önemlidir ve en kısa sürede hekime ulaşılmalıdır.' },
      { type: 'h3', text: 'Görülen travma türleri' },
      { type: 'ul', items: [
        'Kırık (dişin bir kısmının kırılması ve derinliğine göre farklı tedavi gerektirmesi)',
        'Yer değiştirme (dişin konumundan oynaması ancak tamamen çıkmaması)',
        'Dişin yuvasından tamamen çıkması',
        'Dışarıdan görülmeyen ve röntgenle saptanan kök çatlağı',
      ] },
      { type: 'h3', text: 'Neden hemen kontrol gerekir?' },
      { type: 'p', text: 'Görünürde küçük bir darbe bile diş köküne ya da sinire zarar vermiş olabilir ve bu durum hemen anlaşılmayabilir. Bu nedenle kanama olmaması evde beklemek için bir gerekçe sayılmamalıdır. Kazadan sonra mümkün olan en kısa sürede kliniğe başvurulması önerilir. Erken ve uygun müdahale dişin korunmasına yardımcı olur.' },
    ],
  },
  {
    id: 'cocuklarda-dis-cekimi',
    title: 'Çocuklarda diş çekimi ne zaman gerekir?',
    blocks: [
      { type: 'p', text: 'Diş çekimi ailelere çoğunlukla bir başarısızlık ya da son çare gibi görünür. Oysa uygun zamanda yapılan çekim sağlıklı diş gelişiminin önünü açan bir adım olabilir.' },
      { type: 'h3', text: 'Hangi durumlarda gerekir?' },
      { type: 'ul', items: [
        'Çürüğün çok ilerlemesi ve dişin korunamayacak duruma gelmesi',
        'İltihabın kontrol altına alınamaması',
        'Ortodontik tedavi için yer açma ihtiyacı',
        'Süt dişinin altındaki kalıcı dişin çıkışını engellemesi',
      ] },
      { type: 'h3', text: 'Süreç nasıl işler?' },
      { type: 'p', text: 'İşlem çocuğa uygun yöntemlerle ve anestezi altında yapılır. Çekimden sonra kalıcı dişin çıkışına uzun süre varsa boşluğun kapanmaması için yer tutucu takılabilir. Bu uygulama ileride ortodontik tedavi ihtiyacını azaltmaya yardımcı olabilir.' },
      { type: 'h3', text: 'Ailelerin bilmesi gerekenler' },
      { type: 'p', text: 'Çekim kararı ilk tercih değildir. Önce dişi koruma seçenekleri olan dolgu ve kanal tedavisi değerlendirilir. Çekim önerildiğinde bunun bir gerekçesi vardır ve çoğunlukla uzun vadede daha büyük bir sorunu önlemeyi amaçlar.' },
    ],
  },
  {
    id: 'genel-anestezi-nedenleri',
    title: 'Çocuk diş tedavisinde genel anestezi ne zaman gerekir?',
    blocks: [
      { type: 'p', text: 'Genel anestezi başlığı bazı ebeveynleri tedirgin edebilir. Bu doğal bir tepkidir. Bu nedenle yöntemin hangi durumlarda ve neden gündeme geldiğinin bilinmesi önemlidir.' },
      { type: 'h3', text: 'Hangi durumlarda değerlendirilir?' },
      { type: 'p', text: 'Genel anestezi ya da sedasyon genellikle şu durumlarda düşünülür.' },
      { type: 'ul', items: [
        'Çocuğun çok küçük olması ve iş birliği kurulamaması',
        'Tedavi edilecek diş sayısının fazla olması ve tek seansta tamamlanmasının çocuğu daha az yoracak olması',
        'Yoğun diş hekimi korkusu ya da özel bir sağlık durumunun bulunması',
        'Kaza sonrası acil ve kapsamlı müdahale gerekmesi',
      ] },
      { type: 'h3', text: 'Güvenlik nasıl sağlanır?' },
      { type: 'p', text: 'Bu işlemler anestezi uzmanı eşliğinde ve sürekli izlem altında yapılır. Kalp atışı, oksijen düzeyi ve diğer bulgular işlem boyunca takip edilir. Amaç çocuğun güvenle işlemi tamamlaması ve olumsuz bir deneyim yaşamamasıdır.' },
      { type: 'h3', text: 'Sağladığı yarar' },
      { type: 'p', text: 'Genel anestezi altında yapılan tedavi çok sayıda işlem gereken küçük çocuklarda tüm işlemlerin tek seansta tamamlanmasına olanak tanır. Böylece çocuğun tekrar tekrar koltuğa oturma deneyimi yaşaması önlenebilir.' },
    ],
  },
  {
    id: 'ortodontik-tedavi-baslangici',
    title: 'Çocuklarda ortodontik tedavi ne zaman başlar?',
    blocks: [
      { type: 'p', text: 'Çarpık diş ya da çene sorunu denildiğinde çoğunlukla ergenlik dönemindeki teller akla gelir. Ancak erken fark edilen bazı sorunlara süt dişi döneminde bile basit apareylerle müdahale edilebilir.' },
      { type: 'h3', text: 'Erken müdahale neden önemlidir?' },
      { type: 'p', text: 'Çene çocukluk boyunca gelişmeye devam eder. Bu dönemde fark edilen bir darlık ya da uyumsuzluk hareketli ya da sabit apareylerle yönlendirilebilir. Erken müdahale çene gelişimini doğru yöne yönlendirmeye ve ileride gerekebilecek kapsamlı tedavi ihtiyacını azaltmaya yardımcı olabilir.' },
      { type: 'h3', text: 'Aparey türleri' },
      { type: 'ul', items: [
        'Hareketli apareyler çocuk tarafından takılıp çıkarılabilen ve belirli saatlerde kullanılması gereken cihazlardır',
        'Sabit apareyler ağızda kalıcı olarak duran ve çene genişletme gibi özel durumlarda kullanılan cihazlardır',
      ] },
      { type: 'p', text: 'Uygun türün seçimi sorunun niteliğine, çocuğun yaşına ve iş birliğine göre yapılır.' },
      { type: 'h3', text: 'Ne zaman değerlendirme yapılmalıdır?' },
      { type: 'p', text: 'Genel öneri 7 yaş civarında bir kontrol yaptırılmasıdır. Bu yaşta tüm kalıcı dişler henüz çıkmamış olsa da çene yapısındaki olası sorunlar fark edilebilir ve erken müdahale fırsatı kaçırılmaz.' },
    ],
  },
  {
    id: 'dis-hekimi-korkusu',
    title: 'Çocuk diş hekiminden korkuyorsa ne yapılabilir?',
    blocks: [
      { type: 'p', text: 'Bazı çocuklar için diş hekimi koltuğu oldukça gergin bir ortamdır. Bu korku çoğunlukla önceki olumsuz bir deneyimden, ailenin kendi kaygısından ya da bilinmeyene karşı duyulan doğal bir tedirginlikten kaynaklanır. Bu korkuyla çalışmak için yerleşmiş yöntemler vardır.' },
      { type: 'h3', text: 'Korkuyu artırabilen durumlar' },
      { type: 'ul', items: [
        'Ebeveynin kendi diş hekimi kaygısını fark etmeden çocuğa yansıtması',
        'Çocuğu rahatlatmak için acı ve korku kelimelerini kullanmak',
        'İlk deneyimin acil bir durum ya da ağrılı bir tedavi olması',
      ] },
      { type: 'h3', text: 'Neler yardımcı olabilir?' },
      { type: 'p', text: 'Klinikte kullanılan önce anlat, sonra göster, sonra uygula yöntemi yardımcı olur. Çocuğa önce ne olacağı basit kelimelerle anlatılır. Ardından aletler gösterilir ve mümkün olduğunda dokunmasına izin verilir. Son olarak işlem uygulanır. Bu sıra bilinmeyenin yarattığı korkuyu azaltabilir. Olumlu kelimeler kullanmak da önemlidir.' },
      { type: 'h3', text: 'Ailenin rolü' },
      { type: 'p', text: 'Çocuğun yanında kendi diş hekimi korkusundan söz etmemek, randevu öncesinde gereksiz ayrıntı vermemek ve sakin bir tavır sergilemek çocuğun deneyimi nasıl algılayacağını etkiler. Çocuklar ebeveynin ses tonundan birçok şey çıkarır.' },
    ],
  },
  {
    id: 'yari-kanal-tedavisi-amputasyon',
    title: 'Yarı kanal tedavisi (amputasyon) nedir?',
    blocks: [
      { type: 'p', text: 'Amputasyon kelimesi ailelerde çoğunlukla dişin kesileceği düşüncesini uyandırır. Oysa bu terim çok daha sakin bir işlemi anlatır ve dişin korunmasını amaçlar.' },
      { type: 'p', text: 'Yarı kanal tedavisinde dişin içindeki sinirin tamamı değil yalnızca hasar görmüş üst kısmı alınır. Alttaki sağlıklı kısım yerinde bırakılır. Amputasyon ifadesi dişin bir parçasının kesilmesini değil dişin içindeki hasarlı dokunun kısmen temizlenmesini anlatır. Halk arasında yarı kanal ismi bu nedenle kullanılır.' },
      { type: 'h3', text: 'Ne zaman uygulanır?' },
      { type: 'p', text: 'Her derin çürükte bu yöntem uygulanmaz. Çürük sinire ulaşmış ancak yalnızca sinirin üst kısmı etkilenmişse ve alt kısım sağlıklı kalmışsa yarı kanal tedavisi gündeme gelir. Bunu değerlendirmek hekim muayenesini gerektirir. Amaç mümkün olan en az müdahaleyle dişi korumaktır.' },
      { type: 'p', text: 'Süt dişlerinin yapısı kalıcı dişlerden farklıdır ve tam kanal tedavisi her zaman en uygun seçenek olmayabilir. Yarı kanal uygun durumlarda daha basit bir seçenek sunar ve çocuk için daha kısa bir işlem anlamına gelebilir.' },
      { type: 'h3', text: 'Klasik kanal tedavisinden farkı nedir?' },
      { type: 'p', text: 'İki yöntemin amacı da dişin çekilmeden ağızda kalmasıdır. Klasik kanal tedavisinde sinirin tamamı alınır ve kanallar temizlenip doldurulur. Yarı kanalda yalnızca üst kısım alınır ve alttaki sağlıklı sinir özel bir madde ile korunur. Hangi yöntemin uygulanacağına işlem sırasında dokunun durumuna bakılarak karar verilir.' },
      { type: 'h3', text: 'Tedaviden sonra' },
      { type: 'p', text: 'İşlemden sonra diş yapısı zayıfladığı için genellikle diş kaplaması ile kaplanır. Diş çiğneme işlevini sürdürür ve kalıcı diş çıkana kadar gereken yeri korumaya devam eder. Süreç düzenli kontrollerle takip edilir.' },
    ],
  },
];
