import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { LH2, LP, LUL } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Çerez Politikası | Dr. Ömer Özdemir',
  description: 'omerozdemir.com sitesinde çerez kullanımı ve harita gibi üçüncü taraf içeriklerin nasıl yüklendiği.',
  alternates: { canonical: '/cerez-politikasi' },
};

export default function CerezPage() {
  return (
    <LegalPage
      title="Çerez Politikası"
      intro="Bu sitenin çerez kullanımı ve üçüncü taraf içeriklerin nasıl yüklendiği."
    >
      <LH2>Sitenin kendi çerezleri</LH2>
      <LP>
        Bu site, reklam, istatistik veya takip amaçlı çerez kullanmaz.
      </LP>

      <LH2>Üçüncü taraf içerik: Google Haritalar</LH2>
      <LP>
        Ana sayfadaki ve iletişim sayfasındaki haritalar Google tarafından sunulur. Bu sayfalar açıldığında harita
        yüklenir; bu sırada Google tarayıcınıza çerez yerleştirebilir ve IP adresiniz dâhil bazı teknik bilgilere
        erişebilir. Bu işleme Google&apos;ın gizlilik politikası uygulanır. Haritaları istemiyorsanız tarayıcınızdan
        üçüncü taraf çerezlerini engelleyebilirsiniz; adresler ve harita bağlantıları metin olarak da verilmiştir.
      </LP>

      <LH2>Sitenin kendi teknik çalışması</LH2>
      <LUL
        items={[
          'Yazı tipleri (Montserrat, Open Sans) kendi sunucumuzdan sunulur.',
          'Sayfa görüntülenme sayacı yalnızca sayfa başına toplam sayı tutar, çerez kullanmaz.',
          'Görsel ve stil dosyaları site sunucusundan yüklenir.',
        ]}
      />

      <LH2>Tercihleriniz</LH2>
      <LP>
        Tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Harita yüklendikten sonra Google
        çerezlerini silmek için tarayıcı ayarlarındaki “çerezleri temizle” seçeneğini kullanabilirsiniz.
      </LP>

      <LH2>Daha fazla bilgi</LH2>
      <LP>
        Kişisel verilerin işlenmesi için{' '}
        <Link href="/kvkk-aydinlatma-metni" className="text-mint underline underline-offset-2">
          KVKK Aydınlatma Metni
        </Link>{' '}
        ve{' '}
        <Link href="/gizlilik-politikasi" className="text-mint underline underline-offset-2">
          Gizlilik Politikası
        </Link>{' '}
        sayfalarına bakabilirsiniz.
      </LP>
    </LegalPage>
  );
}
