export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'telefonumun-ekranindan-kacis-kapim',
    title: 'Telefonumun Ekranından Kaçış Kapım',
    excerpt:
      'Ortaokulda animeyle başlayan, lise 3\'te webtoona dönüşen bir alışkanlık, şimdi katlanır telefonda devam ediyor.',
    date: '22 Ağustos 2026',
    image: '/Manhwa.jpg',
    content: [
      'Bazı şeyler vardır, hayatınıza öyle sinsice girer ki ne zaman başladığını bile tam hatırlamazsınız. Benim hikayem aslında webtoon\'la değil, animeyle başladı. Ortaokuldayken tamamen anime ve mangaya gömülmüş biriydim, günümün büyük kısmı oralarda geçiyordu. Lise\'nin sonlarına doğru manga bana yetmez oldu, merakım manhwa ve manhualara kaydı, yani sırasıyla Kore ve Çin kökenli çizgi roman geleneklerine. Sonra bir gün fark ettim ki okuduğum manhwaların çoğu artık webtoon formatında yayınlanıyordu, ve işte tam orada, lise 3\'ten beri, bu benim hayatımın hiç kopmayan bir parçası oldu. O günden bugüne aklımdaki her şey değişti, müzik zevkim, arkadaş çevrem, spor rutinlerim, ama bu bir kere bile sekteye uğramadı.',
      'Bunun neden bu kadar sağlam kaldığını çok düşündüm açıkçası. Sanırım cevap şu: hayatımın hiçbir döneminde bana bu kadar az şey isteyip bu kadar çok şey veren başka bir alışkanlığım olmadı.',
      'Bu formatın kökeni de aslında ilginç, kısaca değineyim: bugün okuduğumuz webtoon kültürü 2004\'te Kore\'de bir internet portalının başlattığı bir servisten çıkmış, zamanla dünyanın en büyük dijital çizgi roman ekosistemine dönüşmüş. Ben bunu bilmeden de okurdum tabii ama bir şeyin kökenini bilmek bana hep ayrı bir kıymet hissettiriyor.',
      'Şimdi gelelim asıl konuya, metroya. Üniversite yıllarımda günün en az iki, iki buçuk saati yollarda geçti. İstanbul\'da bir uçtan bir uca koşuşturduğum o dönemde webtoon yolları su gibi akıttı benim için, ama bazen bu iyi bir şey olmaktan çıkıp tam bir felakete dönüştü. Kaç kere bir bölüme dalıp ineceğim durağı kaçırdığımı saymıyorum bile, ama en iyi anımı söyleyeyim: bir keresinde öyle kaptırmışım ki kendimi, Haliç\'i geçmişim, Topkapı\'yı geçmişim, tren beni nereye götürdüyse oraya kadar gitmişim, sonra fark edip aynı yoldan geri dönmek zorunda kalmışım. O gün gecikmenin bahanesi "webtoon okuyordum" olunca kimse inanmamıştı, haklılar da aslında.',
      'Bu alışkanlık üniversiteyle sınırlı kalmadı, hala aynen devam ediyor, sadece mekanlar değişti. Tuvalette, metroda, yatmadan önce beş on dakika kafamı boşaltmak için, hasta aralarında kısa bir nefes almak için, kısacası her boşluk bulduğumda elim telefona gidiyor. Bu benim için ara sıra yaptığım bir şey değil, gün içinde kendime ayırdığım küçük ama sabit bir köşe.',
      'Şunu da itiraf edeyim: "sadece iki bölüm okuyayım, öyle yatayım" cümlesini kendime kaç kere söyledim sayamıyorum. Sonra bakıyorum saat sabah üç dört olmuş, hala kaydırıyorum, ertesi gün işe gitmem gerektiğini bile unutmuşum. Bu şekilde beni yakalayan seriler benim için ayrı bir yerde duruyor. Saatin kaç olduğunu unutturan, telefonu elinizden bırakamadığınız o birkaç seri gerçekten nadir çıkıyor karşınıza, bulduğunuzda da anlıyorsunuz zaten.',
      'Şimdi geldim asıl garip olan kısma. Bu kadar yıldır süren bir alışkanlığım varken, bugün bir sorunum var: okuyacak içerik bulamıyorum. Var olan bütün tier listeleri, S+\'dan C\'ye kadar taradım, yüzlerce seri okudum, hep en iyilerini bulmaya çalıştım. Sonuç şu, elimde kaliteli ve bölüm sayısı yeterli bir seri kalmadı. Ya eski sevdiklerimi tekrar açıyorum, ya da yeni çıkan güzel bir şeyin bölüm biriktirmesini bekliyorum. Yeni seriler bile artık o eski bir günde otuz bölüm okuma keyfini vermiyor, çünkü henüz yeterince bölümleri yok. Yılların verdiği sadakat, beni kendi okuma hızımın önüne geçemeyen bir noktaya getirdi, biraz tuhaf bir sorun kabul ediyorum ama aynı zamanda bir şeyi bu kadar sevdiğimin de kanıtı bence.',
      'Ve bütün bu hikayenin bir sonucu var, hayatımda aldığım en isabetli kararlardan biri diyebilirim: sırf daha rahat webtoon okuyabilmek için katlanır bir telefona geçtim. Başta biraz abartı geldi kendime bile, "bir çizgi roman uygulaması için mi bu kadar para veriyorsun" diye düşündüm ama açtığım an anladım, bu doğru karardı. Şimdi metroda o kocaman ekranı açtığımda etrafımı fark ediyorum, arkamda duran üç dört kişinin gözü omzumun üzerinden ekrana kaymış oluyor, kendi hikayelerini takip eder gibi benimkini okumaya çalışıyorlar. Bir süre rahatsız oluyordum ama artık gülüyorum buna, demek ki yalnız değilmişim bu metro yolculuğunda, herkesin cebinde kendi kaçış kapısı var, benimki sadece biraz daha büyük ekrandan açılıyor.',
    ],
  },
];
