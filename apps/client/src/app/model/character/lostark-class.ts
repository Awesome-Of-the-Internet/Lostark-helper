export enum LostarkClass {
  DESTROYER,
  UNRELEASED,
  ARCANA,
  BERSERKER,
  WARDANCER,
  DEADEYE,
  UNRELEASED0,
  GUNLANCER,
  GUNNER,
  SCRAPPER,
  MAGE,
  UNRELEASED1,
  WARRIOR,
  SOULFIST,
  SHARPSHOOTER,
  ARTILLERIST,
  BARD,
  GLAIVIER,
  ASSASSIN,
  DEATHBLADE,
  SHADOWHUNTER,
  PALADIN,
  UNRELEASED2,
  UNRELEASED3,
  UNRELEASED4,
  GUNSLINGER,
  UNRELEASED5,
  STRIKER,
  SORCERESS
}

export function isSupportClass(c: LostarkClass): boolean {
  return [LostarkClass.BARD, LostarkClass.PALADIN].includes(+c);
}
