// Belirli bir tedaviye bağlı olmayan, randevu ve klinik ile ilgili sık sorulan sorular.
// /sss sayfasında "Genel" grubu olarak, tedavi sorularının üstünde gösterilir.

export const generalFaq: { q: string; a: string }[] = [
  {
    q: 'Randevuyu nasıl alabilirim?',
    a: 'Kliniklerden birini arayabilir ya da WhatsApp’tan yazabilirsiniz. Osmaniye Ağız ve Diş Sağlığı Polikliniği (Bakırköy): 0553 888 54 44, Dentalzone Diş Kliniği (Acıbadem): 0546 566 96 63. İletişim sayfasındaki bilgilerle de ulaşabilirsiniz.',
  },
  {
    q: 'Hangi kliniğe gitmeliyim?',
    a: 'Size yakın olanı seçebilirsiniz. Avrupa Yakası için Bakırköy’deki Osmaniye Ağız ve Diş Sağlığı Polikliniği, Anadolu Yakası için Acıbadem’deki Dentalzone Diş Kliniği hizmet veriyor.',
  },
  {
    q: 'Klinikler hangi gün ve saatlerde açık?',
    a: 'Pazartesi - Cuma 10:00 - 19:00, Cumartesi 10:00 - 17:00 saatleri arasında açık, Pazar günleri kapalı. Randevu öncesinde telefonla ya da WhatsApp’tan teyit etmeniz önerilir.',
  },
];
