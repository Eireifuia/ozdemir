import type { Metadata } from 'next';
import LegalPage, { LH2, LP, LUL } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | Dr. Ömer Özdemir',
  description:
    'omerozdemir.com sitesinde kişisel verilerin hangi amaçla, hangi yöntemle işlendiği ve KVKK kapsamındaki haklarınız.',
  alternates: { canonical: '/kvkk-aydinlatma-metni' },
};

export default function KvkkPage() {
  return (
    <LegalPage
      title="KVKK Aydınlatma Metni"
      intro="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bu sitede kişisel verilerin nasıl işlendiğine ilişkin bilgilendirmedir."
    >
      <LH2>1. Veri sorumlusu</LH2>
      <LP>
        Bu internet sitesinin (omerozdemir.com) veri sorumlusu Dr. Ömer Tarık Özdemir&apos;dir. Kendisine{' '}
        <a href="mailto:ozdemirtarikomer@gmail.com" className="text-mint underline underline-offset-2">
          ozdemirtarikomer@gmail.com
        </a>{' '}
        adresinden ulaşılabilir.
      </LP>
      <LP>
        Kliniklerde yürütülen muayene ve tedavi süreçlerinde işlenen hasta verileri, ilgili kliniğin kendi aydınlatma
        ve veri işleme süreçlerine tabidir ve bu metnin kapsamı dışındadır.
      </LP>

      <LH2>2. Hangi veriler, hangi amaçla işlenir?</LH2>
      <LUL
        items={[
          <>
            <strong className="font-medium text-ink">Teknik kayıtlar.</strong> IP adresi, tarayıcı ve cihaz bilgisi ile
            erişim zamanı barındırma altyapısı tarafından otomatik olarak tutulur. Amaç sitenin güvenli ve sorunsuz
            çalışmasıdır.
          </>,
          <>
            <strong className="font-medium text-ink">İletişim.</strong> Telefon, WhatsApp ya da e-posta ile iletişime
            geçildiğinde paylaşılan ad, telefon ve mesaj içeriği işlenir. Bu bilgiler randevu ve soruların
            yanıtlanması için kullanılır. İletişim formu mesajı bu sitede saklamaz ve yalnızca WhatsApp sohbetini hazır
            metinle açar.
          </>,
          <>
            <strong className="font-medium text-ink">Yapay zeka asistanı (Arise).</strong> Asistana yazılan mesajlar
            yanıt üretilebilmesi için yapay zeka hizmet sağlayıcısına iletilir. Asistan siteyle ilgili sorular için
            tasarlanmıştır ve sağlık bilgisi paylaşılması önerilmez.
          </>,
        ]}
      />
      <LP>
        Sitede sağlık verisi toplanması hedeflenmez. İletişim kanallarında tanı, rapor ya da ilaç gibi sağlık
        bilgilerinin paylaşılmaması önerilir. Bu bilgiler randevuda hekime iletilebilir.
      </LP>

      <LH2>3. Hukuki sebepler</LH2>
      <LP>
        Veriler; iletişim taleplerinin karşılanması, sitenin güvenliğinin sağlanması ve hizmet kalitesinin korunması
        amaçlarıyla, Kanun&apos;un 5. maddesinde sayılan hukuki sebeplerden ilgili olanlara (ilgili kişinin talebi
        üzerine sözleşme veya hizmet sürecinin yürütülmesi, veri sorumlusunun meşru menfaati, açık rıza gereken
        durumlarda açık rıza) dayanılarak işlenir.
      </LP>

      <LH2>4. Verilerin aktarıldığı taraflar</LH2>
      <LUL
        items={[
          'Barındırma ve altyapı hizmet sağlayıcıları (sitenin yayınlanması için).',
          'WhatsApp (Meta) üzerinden iletişim kurulması halinde bu hizmetin sağlayıcısına.',
          'Arise asistanının kullanılması halinde yapay zeka hizmet sağlayıcısına (Anthropic). Mesaj içeriği yurt dışındaki sunuculara aktarılabilir.',
          'Ana sayfa ve iletişim sayfasındaki haritalar yüklendiğinde Google’a. Google Yorumları sunucu tarafında çekilir ve bu yolla ziyaretçi verisi Google’a aktarılmaz.',
        ]}
      />
      <LP>
        Yurt dışına aktarımlar Kanun&apos;un 9. maddesindeki şartlara uygun olarak yapılır. Bu aktarımların
        dayanağının güncel mevzuata göre netleştirilmesi gerekir.
      </LP>

      <LH2>5. Saklama süresi</LH2>
      <LP>
        Teknik kayıtlar barındırma sağlayıcısının belirlediği süre boyunca tutulur. E-posta ve WhatsApp yazışmaları,
        talebin sonuçlanması için gereken süre ve yasal yükümlülükler çerçevesinde saklanır, süre sonunda silinir veya
        anonim hale getirilir.
      </LP>

      <LH2>6. Haklarınız</LH2>
      <LP>Kanun&apos;un 11. maddesi uyarınca veri sorumlusuna başvurarak aşağıdaki taleplerde bulunabilirsiniz.</LP>
      <LUL
        items={[
          'Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme',
          'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
          'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
          'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
          'Kanun’da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme',
          'Bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme',
          'İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme',
          'Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme',
        ]}
      />

      <LH2>7. Başvuru yöntemi</LH2>
      <LP>
        Taleplerinizi{' '}
        <a href="mailto:ozdemirtarikomer@gmail.com" className="text-mint underline underline-offset-2">
          ozdemirtarikomer@gmail.com
        </a>{' '}
        adresine, kimliğinizi doğrulayacak bilgilerle birlikte iletebilirsiniz. Başvurular en geç otuz gün içinde
        sonuçlandırılır.
      </LP>
    </LegalPage>
  );
}
