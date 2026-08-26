"use client"

import { WorldMap, type Data, type ISOCode } from 'react-svg-worldmap';
import { allVisited } from '@/data/travel';

const MINT = '#1F5B3F';
const MINT_LIGHT = '#D9EFE3';
const CREAM_ALT = '#F4F1EA';
const INK_FAINT = '#E4DFD3';

const data: Data = allVisited.map((place) => ({ country: place.code as ISOCode, value: 1 }));

const TravelMap = () => {
  return (
    <div className="w-full flex justify-center">
      <WorldMap
        data={data}
        size="responsive"
        backgroundColor="transparent"
        borderColor={INK_FAINT}
        strokeOpacity={0.6}
        richInteraction
        tooltipTextFunction={(ctx) => (ctx.countryValue ? `${ctx.countryName} ✓` : ctx.countryName)}
        styleFunction={(ctx) => ({
          fill: ctx.countryValue ? MINT : CREAM_ALT,
          fillOpacity: 1,
          stroke: ctx.countryValue ? MINT_LIGHT : INK_FAINT,
          strokeWidth: ctx.countryValue ? 0.6 : 0.4,
          cursor: 'default',
        })}
      />
    </div>
  );
};

export default TravelMap;
