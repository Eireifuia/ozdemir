import { clinics } from '@/data/clinics';
import { instagramUrl, linkedinUrl, openingHoursSpec, siteName, siteUrl } from '@/data/site';

// Yapılandırılmış veri yalnızca sayfada görünen gerçek bilgileri içerir.
// Puan, yorum sayısı gibi doğrulanamayan alanlar bilerek eklenmemiştir.

const addresses: Record<string, { streetAddress: string; addressLocality: string; postalCode: string }> = {
  bakirkoy: { streetAddress: 'Osmaniye, Ümraniye Sk. No:2/B', addressLocality: 'Bakırköy', postalCode: '34146' },
  acibadem: { streetAddress: 'Acıbadem Mah., Acıbadem Cd. No:195', addressLocality: 'Üsküdar', postalCode: '34660' },
};

const doctorId = `${siteUrl}/#hekim`;

export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Physician'],
        '@id': doctorId,
        name: siteName,
        jobTitle: 'Çocuk Diş Hekimi (Pedodonti)',
        medicalSpecialty: 'Dentistry',
        url: siteUrl,
        alumniOf: 'İstanbul Üniversitesi Diş Hekimliği Fakültesi',
        sameAs: [instagramUrl, linkedinUrl],
      },
      ...clinics.map((c) => ({
        '@type': 'Dentist',
        '@id': `${siteUrl}/#${c.id}`,
        name: c.name,
        url: `${siteUrl}/iletisim`,
        telephone: c.phoneHref.replace('tel:', ''),
        address: {
          '@type': 'PostalAddress',
          ...(addresses[c.id] ?? { streetAddress: c.address }),
          addressRegion: 'İstanbul',
          addressCountry: 'TR',
        },
        openingHoursSpecification: openingHoursSpec.map((s) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: s.dayOfWeek,
          opens: s.opens,
          closes: s.closes,
        })),
        medicalSpecialty: 'Dentistry',
        employee: { '@id': doctorId },
      })),
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
