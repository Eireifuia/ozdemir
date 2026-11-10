"use client"

import { WorldMap, type Data, type ISOCode } from 'react-svg-worldmap';
import { allVisited } from '@/data/travel';

const MINT = '#1b5f9f';
const MINT_LIGHT = '#d6e9f8';
const CREAM_ALT = '#e8f1f9';
const BORDER = '#7b93aa';

const data: Data = allVisited.map((place) => ({ country: place.code as ISOCode, value: 1 }));

const TravelMap = () => {
  return (
    <div className="w-full flex justify-center">
      <WorldMap
        data={data}
        size="responsive"
        backgroundColor="transparent"
        borderColor={BORDER}
        strokeOpacity={1}
        richInteraction
        tooltipTextFunction={(ctx) => (ctx.countryValue ? `${ctx.countryName} ✓` : ctx.countryName)}
        styleFunction={(ctx) => ({
          fill: ctx.countryValue ? MINT : CREAM_ALT,
          fillOpacity: 1,
          stroke: ctx.countryValue ? MINT_LIGHT : BORDER,
          strokeWidth: ctx.countryValue ? 0.75 : 0.6,
          cursor: 'default',
        })}
      />
    </div>
  );
};

export default TravelMap;
