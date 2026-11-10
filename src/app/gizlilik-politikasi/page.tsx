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
      intro="Bu site ziyaretçilerden az veri toplayacak biçimde hazırlanmıştır."
    >
      <LH2>Kısaca</LH2>
      <LUL
        items={[
          'Sitenin kendisi reklam, takip veya profil çıkarma amaçlı çerez kullanmaz.',
          'Yazı tipleri site sunucusundan sunulur ve tarayıcı bunun için Google’a istek göndermez.',
          'Ana sayfa ve iletişim sayfasındaki haritalar Google tarafından sunulur ve bu sayfalar açıldığında Google ile bağlantı kurulur.',
          'İletişim formu mesajı saklamaz ve yalnızca WhatsApp sohbetini hazır metinle açar.',
          'Randevu için sağlık bilgisi istenmez. Sağlık bilgilerinin site üzerinden paylaşılmaması önerilir.',
        ]}
      />

      <LH2>Yapay zeka asistanı (Arise)</LH2>
      <LP>
        Sitedeki asistan Dr. Ömer Özdemir ve hizmetleri hakkında genel bilgi vermek için tasarlanmış bir yapay zeka
        programıdır. Hekim değildir ve tanı koyamaz. Yazılan mesajlar yanıt üretilebilmesi için yapay zeka hizmet
        sağlayıcısına iletilir. Bu nedenle asistana ad, telefon ya da sağlık bilgisi yazılmaması önerilir.
      </LP>

      <LH2>Sağlık içerikleri</LH2>
      <LP>
        Sitedeki tedavi ve bilgi sayfaları genel bilgilendirme amaçlıdır ve kişiye özel tanı ya da tedavi önerisi
        yerine geçmez. Çocuğunuzun durumu için muayene gerekmektedir.
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
