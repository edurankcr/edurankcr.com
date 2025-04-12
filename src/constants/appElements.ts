import type { getTranslations } from 'next-intl/server';

const badgeKeys = [
  'reputation',
  'happiness',
  'facilities',
  'clubs',
  'security',
  'opportunities',
  'location',
  'social',
  'internet',
  'food',
] as const;

type BadgeKey = typeof badgeKeys[number];

type InstituteBadgeValues = Record<BadgeKey, number>;

export const InstituteBadgeList = (
  dictionary: Awaited<ReturnType<typeof getTranslations>>,
  value: InstituteBadgeValues,
) => {
  return badgeKeys.map(key => ({
    title: dictionary(`Elements.Institute.Overall.Items.${key}` as any),
    value: value[key],
  }));
};
