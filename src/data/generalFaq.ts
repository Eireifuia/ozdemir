// Belirli bir tedaviye bağlı olmayan, randevu ve klinik ile ilgili sık sorulan sorular.
// /sss sayfasında "Genel" grubu olarak, tedavi sorularının üstünde gösterilir.

export const generalFaq: { q: string; a: string }[] = [
  {
    q: 'Randevu nasıl alınır?',
    a: 'Kliniklerden biri aranabilir ya da WhatsApp üzerinden yazılabilir. Bakırköy’deki Osmaniye Ağız ve Diş Sağlığı Polikliniği için 0553 888 54 44 numarası, Acıbadem’deki Dentalzone Diş Kliniği için 0546 566 96 63 numarası kullanılmaktadır. İletişim sayfasındaki bilgilerle de ulaşabilirsiniz.',
  },
  {
    q: 'Hangi kliniği tercih etmeliyim?',
    a: 'Size yakın olan klinik seçilebilir. Avrupa Yakası için Bakırköy’deki Osmaniye Ağız ve Diş Sağlığı Polikliniği, Anadolu Yakası için Acıbadem’deki Dentalzone Diş Kliniği hizmet vermektedir.',
  },
  {
    q: 'Klinikler hangi gün ve saatlerde açıktır?',
    a: 'Klinikler pazartesiden cumaya 10:00 ile 19:00 arasında, cumartesi günü 10:00 ile 17:00 arasında açıktır. Pazar günleri kapalıdır. Randevu öncesinde telefonla ya da WhatsApp üzerinden teyit almanız önerilir.',
  },
];
