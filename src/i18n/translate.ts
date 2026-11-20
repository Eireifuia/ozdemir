/**
 * Veri dosyalarındaki (tedavi sayfaları, SSS, özgeçmiş vb.) metinleri çevirmek için.
 *
 * Her çeviri dosyası, kaynak nesnedeki metinlerin yürüyüş sırasına göre numaralı karşılığını içerir.
 * Kaynak metinlerin sayısı (n) çeviri dosyasındakiyle uyuşmuyorsa (örneğin Türkçe metne satır
 * eklenmişse) çeviri uygulanmaz ve Türkçe metin gösterilir. Böylece kayma sessizce yanlış
 * metin göstermez.
 */
export type TranslationFile = { n: number; t: Record<number, string> };

// Çevrilmeyen alanlar: adresler, yollar, kimlikler ve görsel alt metinleri
const SKIP_KEYS = new Set([
  'slug',
  'id',
  'href',
  'src',
  'video',
  'image',
  'extraImage',
  'icon',
  'category',
  'imageAlt',
  'extraImageAlt',
  'alt',
  'url',
  'phone',
  'phoneHref',
  'whatsappHref',
  'mapsSearchUrl',
  'mapEmbedSrc',
  'relatedGuideIds',
  'code',
  'type',
  'date',
]);

type Ctx = { i: number; dict?: TranslationFile };

function walk(value: unknown, key: string | null, ctx: Ctx): unknown {
  if (typeof value === 'string') {
    if (key && SKIP_KEYS.has(key)) return value;
    const idx = ctx.i++;
    return ctx.dict ? ctx.dict.t[idx] ?? value : value;
  }
  if (Array.isArray(value)) return value.map((v) => walk(v, key, ctx));
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) out[k] = walk(v, k, ctx);
    return out;
  }
  return value;
}

export function countStrings(value: unknown): number {
  const ctx: Ctx = { i: 0 };
  walk(value, null, ctx);
  return ctx.i;
}

export function applyTranslation<T>(source: T, dict: TranslationFile | undefined): T {
  if (!dict) return source;
  if (countStrings(source) !== dict.n) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[i18n] Çeviri dosyası kaynakla uyuşmuyor (kaynak ${countStrings(source)}, çeviri ${dict.n}), Türkçe gösteriliyor.`);
    }
    return source;
  }
  return walk(source, null, { i: 0, dict }) as T;
}
