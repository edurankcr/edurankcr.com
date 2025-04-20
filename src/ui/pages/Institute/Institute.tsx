import { Separator, Stack } from '@/components';
import type { IDictionary, InstitutionDetailsResponse } from '@/types';

import { InstituteBreadcrumb, InstituteHeading, InstituteNavbar, InstituteOverview, InstituteReview } from './Commons';

type PageInstituteProps = InstitutionDetailsResponse & IDictionary;

const PageInstitute = (params: PageInstituteProps) => {
  const { dictionary, institution, aggregateRatings } = params;
  return (
    <Stack container paddingX="section" paddingY="lg" gap="section">
      <InstituteBreadcrumb dictionary={dictionary} institution={institution} />
      <InstituteHeading dictionary={dictionary} institution={institution} instituteSummary={aggregateRatings} />
      <Stack gap="md">
        <InstituteNavbar dictionary={dictionary} />
        <InstituteOverview dictionary={dictionary} institution={institution} instituteSummary={aggregateRatings} />
      </Stack>
      <Separator bgColor="interactive" />
      <InstituteReview dictionary={dictionary} instituteSummary={aggregateRatings} institutionId={institution.institutionId} />
    </Stack>
  );
};

export { PageInstitute };
