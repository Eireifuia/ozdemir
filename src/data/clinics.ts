export type Clinic = {
  id: string;
  side: string;
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  mapsSearchUrl: string;
  mapEmbedSrc: string;
};

export const clinics: Clinic[] = [
  {
    id: 'bakirkoy',
    side: 'Avrupa Yakası',
    name: 'Osmaniye Ağız ve Diş Sağlığı Polikliniği',
    address: 'Osmaniye, Ümraniye Sk. No:2/B, 34146 Bakırköy/İstanbul',
    phone: '0553 888 54 44',
    phoneHref: 'tel:+905538885444',
    whatsappHref: 'https://wa.me/905538885444',
    mapsSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=%C3%87ocuk+Di%C5%9F+Hekimi+%C3%96mer+Tar%C4%B1k+%C3%96zdemir',
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.018158044864!2d28.878822776592294!3d40.99121347930272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbfba149182f%3A0xe4a47a5da9b502cf!2s%C3%87ocuk%20Di%C5%9F%20Hekimi%20%C3%96mer%20Tar%C4%B1k%20%C3%96zdemir!5e0!3m2!1str!2str!4v1716462584123!5m2!1str!2str',
  },
  {
    id: 'acibadem',
    side: 'Anadolu Yakası',
    name: 'Dentalzone Diş Kliniği',
    address:
      'Acıbadem Mahallesi, Acıbadem Caddesi No:195 (Acıbadem Metrobüs Durağı Çıkışı), Acıbadem/Üsküdar',
    phone: '0546 566 96 63',
    phoneHref: 'tel:+905465669663',
    whatsappHref: 'https://wa.me/905465669663',
    mapsSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('Dentalzone Diş Kliniği, Acıbadem Cd. No:195, Üsküdar/İstanbul'),
    mapEmbedSrc:
      'https://www.google.com/maps?q=' +
      encodeURIComponent('Dentalzone Diş Kliniği, Acıbadem Cd. No:195, Üsküdar/İstanbul') +
      '&output=embed',
  },
];
