export type VisitedPlace = { code: string; name: string };

export const visitedByRegion: { region: string; places: VisitedPlace[] }[] = [
  {
    region: 'Asya',
    places: [
      { code: 'JP', name: 'Japonya' },
      { code: 'TR', name: 'Türkiye' },
      { code: 'TW', name: 'Tayvan' },
      { code: 'KR', name: 'Güney Kore' },
      { code: 'HK', name: 'Hong Kong' },
      { code: 'GE', name: 'Gürcistan' },
      { code: 'SA', name: 'Suudi Arabistan' },
      { code: 'QA', name: 'Katar' },
    ],
  },
  {
    region: 'Afrika',
    places: [
      { code: 'TZ', name: 'Tanzanya' },
      { code: 'NE', name: 'Nijer' },
      { code: 'MA', name: 'Fas' },
    ],
  },
  {
    region: 'Avrupa',
    places: [
      { code: 'BE', name: 'Belçika' },
      { code: 'NL', name: 'Hollanda' },
      { code: 'DE', name: 'Almanya' },
      { code: 'LU', name: 'Lüksemburg' },
      { code: 'MK', name: 'Kuzey Makedonya' },
      { code: 'AL', name: 'Arnavutluk' },
      { code: 'BA', name: 'Bosna Hersek' },
      { code: 'ME', name: 'Karadağ' },
      { code: 'HR', name: 'Hırvatistan' },
      { code: 'XK', name: 'Kosova' },
    ],
  },
];

export const allVisited: VisitedPlace[] = visitedByRegion.flatMap((r) => r.places);

// Widely-cited approximate figure for number of countries in the world.
export const worldCountryCount = 195;

export function flagEmoji(code: string): string {
  return code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}
