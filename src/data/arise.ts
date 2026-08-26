// Arise (AI asistan) kimliği ve yakın çevre tanıma verisi.
// Tek kaynak burasıdır — hem canlı chatbot (src/app/api/chat/route.ts) hem de
// "omer-ozdemir-ai-style" Claude Code skill'i bu dosyayı referans alır.
// Yeni bir isim/bilgi eklenecekse SADECE burası güncellenir.

export const ariseIdentityBio: string[] = [
  "Diş hekimi (DDS, 2017-2022) ve İstanbul Üniversitesi'nde Pedodonti (Pediatrik Diş Hekimliği) alanında doktorasını tamamladı (2023-2025).",
  "2022'de İstanbul Üniversitesi Diş Hekimliği Fakültesi'nden onur derecesiyle mezun oldu, 7000'den fazla hasta tedavi etti.",
  "Japonya'da, Kyushu Üniversitesi Diş Hekimliği Bilimleri Enstitüsü'nde (Fukuoka) misafir araştırmacı olarak bulundu (2025-2027) ve bu araştırmacılığı tamamladı; Prof. Hidefumi Maeda ve Doç. Dr. Hideki Sugii ile çalıştı.",
  "Doktora araştırması, avulse (yerinden çıkmış) dişler için saklama solüsyonlarına eklenen periodontal ligament kök hücre kaynaklı eksozomlar üzerine.",
  "Yapay zeka/chatbot performansı üzerine de yayınları var (ChatGPT/Gemini gibi botların diş sağlığı sorularına verdiği yanıtların kalitesini değerlendiren araştırmalar, BMC Oral Health ve Dental Traumatology gibi dergilerde).",
  "Papillon-Lèfevre ve Gorlin-Goltz sendromu gibi nadir vaka sunumlarıyla kongrelerde poster sunumları yaptı.",
  "Erasmus+ ile Belçika'da (Genk, Whitecenter, Dr. Marianne Van Espen) klinik staj yaptı; Zanzibar ve Nijer'de gönüllü diş hekimliği yaptı.",
  "Aşçı yardımcılığı sertifikası var, Türk İşaret Dili'nde A2 seviyesinde sertifikalı.",
  "Hobiler: seyahat, Japonca öğrenimi (JLPT N5 tamamlandı, şu an N4), strateji/RPG oyunları, manhwa okumak (Solo Leveling, Tower of God, The Beginning After the End, Noblesse, Sweet Home).",
  "Instagram'da (@omertarikozdemir) esprili ve dişçilikle ilgili içerikler paylaşır; kendi web sitesinde seyahat rehberleri ve deneyim yazıları yazar.",
];

export interface AriseCloseContact {
  name: string;
  nickname?: string;
  note: string;
}

export const ariseSquad: AriseCloseContact[] = [
  {
    name: 'Ertuğrul Özbek',
    nickname: 'Üstadi',
    note: "lise 1'den beri 15 yıllık arkadaşı, eski ev arkadaşı, kedilerin ortak babası, balkonda beraber son sigara içilen kişi.",
  },
  {
    name: 'Fatih Sezer',
    note: 'ortaokuldan beri arkadaşı, ana squad üyesi, eski yaveri, eski ev arkadaşı; Çapa Tıp mezunu, göz uzmanlığı yapıyor.',
  },
  {
    name: 'Umut Kılıçarslan',
    nickname: 'Full Metal Jacket',
    note: "squad'a sonradan katıldı ama hep varmış gibi hissettiriyor; Eda ile evli, Ege Tıp mezunu doktor.",
  },
  {
    name: 'Necip Görgülü',
    nickname: 'Necasetten Taharet',
    note: "squad'ın en zekisi, Merve ile yeni nişanlandı; Boğaziçi Bilgisayar mezunu.",
  },
  {
    name: 'Enes Ertürk',
    note: 'en yakın arkadaşlarından, kardeşi gibi; Pınar ile evlendi, Marmara Tıp mezunu, üroloji uzmanlık eğitimine başladı.',
  },
  {
    name: 'Furkan Turna',
    nickname: 'Turna/Durna',
    note: 'en yakın arkadaşlarından, kardeşi gibi; uzay mühendisi.',
  },
  {
    name: 'Eren Sekin',
    note: 'en eski arkadaşı, eski komşusu, can dostu; Merve Sekin ile evli, bir süre Dubai\'de yaşadı şimdi geri döndü.',
  },
  {
    name: 'Talha Ekin',
    note: "Necip'in en yakın arkadaşı, komik biri; yakın arkadaşı.",
  },
  {
    name: 'Emirhan Dur',
    note: 'Fenerbahçe sever, yakın arkadaşı.',
  },
];

export const ariseSiblings: AriseCloseContact[] = [
  {
    name: 'Merve Berrin Özdemir',
    note: 'kız kardeşi, eczacılık mezunu, Fatih Bengisu ile evleniyor (o da eczacı).',
  },
  {
    name: 'Zehra Beyza Özdemir',
    note: 'kız kardeşi, tıp okuyor.',
  },
];

function formatContact(c: AriseCloseContact): string {
  return `${c.name}${c.nickname ? ` ("${c.nickname}")` : ''} — ${c.note}`;
}

export function formatAriseIdentityBio(): string {
  return ariseIdentityBio.map((line) => `- ${line}`).join('\n');
}

export function formatAriseCloseContacts(): string {
  return [...ariseSquad, ...ariseSiblings].map((c) => `- ${formatContact(c)}`).join('\n');
}
