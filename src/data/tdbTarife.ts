/**
 * Türk Dişhekimleri Birliği (TDB) 2026 yılı rehber tarifesinden seçilmiş kalemler.
 * Rakamlar KDV dahil (%10) tutardır. KDV hariç tutar bundan hesaplanır ve ikisi birlikte
 * "aralık" olarak Arise'a verilir. Bu liste yalnızca yaklaşık bir fikir içindir;
 * kliniğin gerçek ücreti muayeneden sonra Ömer Özdemir tarafından belirlenir.
 */
type Item = [name: string, kdvDahil: number];

const pedodonti: Item[] = [
  ['Aşındırma ile sürme rehberliği (seans başına)', 1640],
  ['Fissür örtücü (tek diş)', 1445],
  ['Yüzeysel flor uygulaması (yarım çene)', 1375],
  ['Kompomer dolgu', 4180],
  ['Rezin infiltrasyonu tedavisi', 7150],
  ['Amputasyon / yarı kanal (dolgu, kron üst yapı ve biyomateryal hariç)', 3850],
  ['Süt dişi kanal tedavisi', 6765],
  ['Açık apeksli dişte kanal tedavisi (her kanal için, dolgu ve pansuman hariç)', 12780],
  ['Açık apeksli dişte apikal bariyer, MTA tıkaç (her kanal için, dolgu ve pansuman hariç)', 5830],
  ['Yer tutucu (sabit)', 7480],
  ['Yer tutucu (hareketli)', 10010],
  ['Prefabrike kron (çelik kron)', 3810],
  ['Strip kron', 3575],
  ['Travma splinti', 8195],
  ['Çocuk protezi', 9350],
  ['Çocuk protezi, akrilik bölümlü (tek çene)', 15050],
  ['Çocuk protezi, akrilik tam (tek çene)', 16995],
  ['Avülsiyon tedavisi (dişin tamamen yerinden çıkması)', 18700],
];

const genel: Item[] = [
  ['Diş hekimi muayenesi', 1650],
  ['Uzman diş hekimi muayenesi', 2035],
  ['Kontrol muayenesi', 1430],
  ['Diş röntgeni (periapikal)', 830],
  ['Bite-wing röntgen', 830],
  ['Panoramik film', 2040],
  ['Lokal anestezi', 370],
  ['Kompozit dolgu (bir yüzlü)', 3375],
  ['Kompozit dolgu (iki yüzlü)', 4235],
  ['Kompozit dolgu (üç yüzlü)', 5300],
  ['Cam iyonomer dolgu', 2675],
  ['Kuafaj (dolgu hariç)', 440],
  ['Kanal tedavisi, tek kanal (dolgu hariç)', 4610],
  ['Kanal tedavisi, iki kanal (dolgu hariç)', 7220],
  ['Kanal tedavisi, üç kanal (dolgu hariç)', 10350],
  ['Diş çekimi', 2475],
  ['Komplikasyonlu diş çekimi', 4950],
  ['Diş taşı temizliği (tek çene)', 3300],
  ['Rubber-dam uygulaması', 1155],
  ['Zirkonyum kron', 13750],
];

const ortodonti: Item[] = [
  ['Önleyici ortodontik tedavi', 26125],
  ['Kısa süreli ortodontik tedavi', 23290],
  ['Angle sınıf I anomalilerinin ortodontik tedavisi', 40910],
  ['Nance apareyi', 11275],
  ['Hızlı maksiller genişletme apareyi', 13750],
];

const fmt = (n: number) => n.toLocaleString('tr-TR');

function line([name, dahil]: Item): string {
  const haric = Math.round(dahil / 1.1);
  return `- ${name}: yaklaşık ${fmt(haric)} - ${fmt(dahil)} TL`;
}

/** Arise için fiyat bölümü. Aralığın alt ucu KDV hariç, üst ucu KDV dahil tutardır. */
export function buildTdbPriceText(): string {
  return [
    'TDB 2026 REHBER TARİFESİ (yaklaşık fiyat aralıkları, alt değer KDV hariç, üst değer KDV dahil):',
    'ÇOCUK DİŞ HEKİMLİĞİ (PEDODONTİ):',
    ...pedodonti.map(line),
    'GENEL:',
    ...genel.map(line),
    'ORTODONTİ:',
    ...ortodonti.map(line),
  ].join('\n');
}
