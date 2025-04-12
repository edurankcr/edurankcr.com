import { useFormatter } from 'next-intl';

import { Separator, Stack } from '@/components';
import type { IDictionary, InstituteProps } from '@/types';

import { InstituteBreadcrumb, InstituteHeading, InstituteNavbar } from './Commons';
import { InstituteOverview, InstituteReview } from './Sections';

type Props = InstituteProps & IDictionary;

export const ViewInstitute = ({ institute, dictionary }: Props) => {
  const formatter = useFormatter();
  return (
    <Stack container paddingX="section" paddingY="lg" gap="section">
      <InstituteBreadcrumb dictionary={dictionary} institute={institute} />
      <InstituteHeading dictionary={dictionary} institute={institute} />
      <Stack gap="md">
        <InstituteNavbar dictionary={dictionary} />
        <InstituteOverview dictionary={dictionary} institute={institute} />
      </Stack>
      <Separator bgColor="interactive" />
      <InstituteReview formatter={formatter} dictionary={dictionary} institute={institute} />
    </Stack>
  );
};
