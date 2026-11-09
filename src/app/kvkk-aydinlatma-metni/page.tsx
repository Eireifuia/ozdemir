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
      intro="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, bu sitede kişisel verilerinizin nasıl işlendiği hakkında bilgilendirme."
    >
      <LH2>1. Veri sorumlusu</LH2>
      <LP>
        Bu internet sitesinin (omerozdemir.com) veri sorumlusu Dr. Ömer Tarık Özdemir&apos;dir. İletişim:{' '}
        <a href="mailto:ozdemirtarikomer@gmail.com" className="text-mint underline underline-offset-2">
          ozdemirtarikomer@gmail.com
        </a>
        .
      </LP>
      <LP>
        Kliniklerde yürütülen muayene ve tedavi süreçlerinde işlenen hasta verileri, ilgili kliniğin kendi aydınlatma
        ve veri işleme süreçlerine tabidir ve bu metnin kapsamı dışındadır.
      </LP>

      <LH2>2. Hangi veriler, hangi amaçla işlenir?</LH2>
      <LUL
        items={[
          <>
            <strong className="font-medium text-ink">Teknik kayıtlar:</strong> IP adresi, tarayıcı ve cihaz bilgisi,
            erişim zamanı. Sitenin güvenli ve sorunsuz çalışması için barındırma altyapısı tarafından otomatik tutulur.
          </>,
          <>
            <strong className="font-medium text-ink">İletişim:</strong> Telefon, WhatsApp veya e-posta ile iletişime
            geçtiğinizde paylaştığınız ad, telefon ve mesaj içeriği. Randevu ve soruların yanıtlanması için kullanılır.
            İletişim formu mesajı sitemizde saklamaz; WhatsApp sohbetini hazır metinle açar.
          </>,
          <>
            <strong className="font-medium text-ink">Yapay zekâ asistanı (Arise):</strong> Asistana yazdığınız mesajlar
            yanıt üretilebilmesi için yapay zekâ hizmet sağlayıcısına iletilir. Siteyle ilgili sorular için tasarlanmıştır;
            sağlık bilgisi paylaşmanız önerilmez.
          </>,
          <>
            <strong className="font-medium text-ink">Sayfa görüntülenme sayısı:</strong> Yalnızca sayfa başına toplam
            sayı tutulur; bu sayı sizinle ilişkilendirilmez.
          </>,
        ]}
      />
      <LP>
        Sitede sağlık verisi toplanması hedeflenmez. İletişim kanallarında lütfen tanı, rapor, ilaç gibi sağlık
        bilgilerinizi paylaşmayınız; bu bilgiler randevuda hekime iletilebilir.
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
          'WhatsApp (Meta): WhatsApp üzerinden iletişim kurmanız hâlinde.',
          'Yapay zekâ hizmet sağlayıcısı (Anthropic): Arise asistanını kullanmanız hâlinde, mesaj içeriği yurt dışındaki sunuculara aktarılabilir.',
          'Google: Ana sayfa ve iletişim sayfasındaki haritalar yüklendiğinde. Google Yorumları sunucu tarafında çekilir, bu yolla ziyaretçi verisi Google’a aktarılmaz.',
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
        anonim hâle getirilir.
      </LP>

      <LH2>6. Haklarınız</LH2>
      <LP>Kanun&apos;un 11. maddesi uyarınca veri sorumlusuna başvurarak şunları talep edebilirsiniz:</LP>
      <LUL
        items={[
          'Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme',
          'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
          'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
          'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
          'Kanun’da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme',
          'Bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme',
          'İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme',
          'Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme',
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
