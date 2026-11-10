import { treatmentCategories, type Treatment } from './types';
import aliskanlikApareyleri from './aliskanlik-apareyleri';
import apeksifikasyon from './apeksifikasyon';
import arayuzCurukleri from './arayuz-curukleri';
import bebeklerdeDilBagi from './bebeklerde-dil-bagi';
import bebekVeCocukIlkDisMuayenesi from './bebek-ve-cocuk-ilk-dis-muayenesi';
import cocuklardaCurukTedavisi from './cocuklarda-curuk-tedavisi';
import cocuklardaDisCekimiYerTutucu from './cocuklarda-dis-cekimi-yer-tutucu';
import cocuklardaDisFircalamaVeAgizBakimi from './cocuklarda-dis-fircalama-ve-agiz-bakimi';
import cocuklardaDisKaplamasi from './cocuklarda-dis-kaplamasi';
import cocuklardaDisTasiTemizligi from './cocuklarda-dis-tasi-temizligi';
import cocuklardaDisTravmasi from './cocuklarda-dis-travmasi';
import cocuklardaErkenOrtodontikTedavi from './cocuklarda-erken-ortodontik-tedavi';
import cocuklardaFlorUygulamasi from './cocuklarda-flor-uygulamasi';
import cocuklardaGenelAnesteziSedasyon from './cocuklarda-genel-anestezi-sedasyon';
import kuafajTedavileri from './kuafaj-tedavileri';
import yariKanalTedavisiAmputasyon from './yari-kanal-tedavisi-amputasyon';
import cocuklardaKanalTedavisi from './cocuklarda-kanal-tedavisi';
import erkenCocuklukCuruguBiberonCurugu from './erken-cocukluk-curugu-biberon-curugu';
import fissurOrtucu from './fissur-ortucu';
import gumusDiaminFlorurSdf from './gumus-diamin-florur-sdf';
import hallTeknigi from './hall-teknigi';
import mihKaliciAziMineBozuklugu from './mih-kalici-azi-mine-bozuklugu';
import stripKuron from './strip-kuron';
import sutDisleriYapisi from './sut-disleri-yapisi';
import vrDestekliCocukDisTedavisi from './vr-destekli-cocuk-dis-tedavisi';
import zirkonyumKuron from './zirkonyum-kuron';

export * from './types';

const all: Treatment[] = [
  aliskanlikApareyleri,
  apeksifikasyon,
  arayuzCurukleri,
  bebeklerdeDilBagi,
  bebekVeCocukIlkDisMuayenesi,
  cocuklardaCurukTedavisi,
  cocuklardaDisCekimiYerTutucu,
  cocuklardaDisFircalamaVeAgizBakimi,
  cocuklardaDisKaplamasi,
  cocuklardaDisTasiTemizligi,
  cocuklardaDisTravmasi,
  cocuklardaErkenOrtodontikTedavi,
  cocuklardaFlorUygulamasi,
  cocuklardaGenelAnesteziSedasyon,
  cocuklardaKanalTedavisi,
  kuafajTedavileri,
  yariKanalTedavisiAmputasyon,
  erkenCocuklukCuruguBiberonCurugu,
  fissurOrtucu,
  gumusDiaminFlorurSdf,
  hallTeknigi,
  mihKaliciAziMineBozuklugu,
  stripKuron,
  sutDisleriYapisi,
  vrDestekliCocukDisTedavisi,
  zirkonyumKuron,
];

const categoryOrder = treatmentCategories.map((c) => c.id);

// Kategori sırasına göre dizilir; aynı kategoride sıra numarasına (no) göre
export const treatments: Treatment[] = [...all].sort(
  (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category) || a.no - b.no,
);

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}