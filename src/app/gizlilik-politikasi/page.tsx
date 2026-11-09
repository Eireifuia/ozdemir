import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { LH2, LP, LUL } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Dr. Ömer Özdemir',
  description: 'omerozdemir.com sitesinin ziyaretçi verilerine yaklaşımı ve gizlilik ilkeleri.',
  alternates: { canonical: '/gizlilik-politikasi' },
};

export default function GizlilikPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      intro="Bu site, ziyaretçilerinden mümkün olduğunca az veri toplayacak şekilde hazırlanmıştır."
    >
      <LH2>Kısaca</LH2>
      <LUL
        items={[
          'Sitenin kendisi reklam, takip veya profil çıkarma amaçlı çerez kullanmaz.',
          'Yazı tipleri kendi sunucumuzdan sunulur; tarayıcınız bunun için Google’a istek göndermez.',
          'Ana sayfa ve iletişim sayfasındaki haritalar Google tarafından sunulur; bu sayfalar açıldığında Google ile bağlantı kurulur.',
          'İletişim formu mesajınızı saklamaz; WhatsApp sohbetini hazır metinle açar.',
          'Randevu için sağlık bilgisi istenmez; lütfen sağlık bilgilerinizi site üzerinden paylaşmayınız.',
        ]}
      />

      <LH2>Yapay zekâ asistanı (Arise)</LH2>
      <LP>
        Sitedeki asistan, Dr. Ömer Özdemir ve hizmetleri hakkında genel bilgi vermek için tasarlanmış bir yapay zekâ
        programıdır; gerçek bir hekim değildir ve tanı koyamaz. Yazdığınız mesajlar yanıt üretilebilmesi için yapay
        zekâ hizmet sağlayıcısına iletilir. Bu yüzden asistana ad, telefon veya sağlık bilgisi yazmamanızı rica ederiz.
      </LP>

      <LH2>Sağlık içerikleri</LH2>
      <LP>
        Sitedeki tedavi ve bilgi sayfaları genel bilgilendirme amaçlıdır; kişiye özel tanı veya tedavi önerisi yerine
        geçmez. Çocuğunuzun durumu için muayene gerekir.
      </LP>

      <LH2>Üçüncü taraf bağlantılar</LH2>
      <LP>
        Sitede Instagram, LinkedIn, WhatsApp ve Google Haritalar gibi dış hizmetlere bağlantılar bulunur. Bu
        hizmetlerin kendi gizlilik politikaları geçerlidir.
      </LP>

      <LH2>Daha fazla bilgi</LH2>
      <LP>
        Kişisel verilerin işlenmesi ve haklarınız için{' '}
        <Link href="/kvkk-aydinlatma-metni" className="text-mint underline underline-offset-2">
          KVKK Aydınlatma Metni
        </Link>
        , çerezler için{' '}
        <Link href="/cerez-politikasi" className="text-mint underline underline-offset-2">
          Çerez Politikası
        </Link>{' '}
        sayfalarına bakabilirsiniz.
      </LP>
    </LegalPage>
  );
}
