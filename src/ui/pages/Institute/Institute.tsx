import { useFormatter } from 'next-intl';

import { Separator, Stack } from '@/components';
import type { IDictionary, IInstituteDetails } from '@/types';

import { InstituteBreadcrumb, InstituteHeading, InstituteNavbar, InstituteOverview, InstituteReview } from './Commons';

type PageInstituteProps = IInstituteDetails & IDictionary;

const PageInstitute = (params: PageInstituteProps) => {
  const { dictionary } = params;
  const formatter = useFormatter();
  return (
    <Stack container paddingX="section" paddingY="lg" gap="section">
      <InstituteBreadcrumb {...params} />
      <InstituteHeading {...params} />
      <Stack gap="md">
        <InstituteNavbar dictionary={dictionary} />
        <InstituteOverview {...params} />
      </Stack>
      <Separator bgColor="interactive" />
      <InstituteReview {...params} formatter={formatter} />
    </Stack>
  );
};

export { PageInstitute };
