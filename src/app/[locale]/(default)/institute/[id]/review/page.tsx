import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { AppRoutes } from '@/constants';
import { getInstituteBasicInfo } from '@/services';
import type { IIdMeta, InstitutionDetails, InstitutionDetailsResponse } from '@/types';
import { PageInstituteAddReview } from '@/ui';
import { GuidValidation } from '@/validations';

export async function generateMetadata({ params }: IIdMeta) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta.Institute' });

  try {
    const response = await getInstituteBasicInfo(id);
    const data = response.data as InstitutionDetailsResponse;

    return {
      title: t('add_review', { name: data.institution.name }) || '',
      description: t('add_review_description', { name: data.institution.name }) || '',
    };
  } catch {
    return {
      title: t('add_review_generic'),
      description: t('add_review_generic_description'),
    };
  }
}

export default async function Page({ params }: IIdMeta) {
  const { locale, id } = await params;

  const parsedId = GuidValidation.safeParse(id);

  if (!parsedId.success) {
    redirect(AppRoutes.Global.Home);
  }

  try {
    const response = await getInstituteBasicInfo(id);
    const data = response.data as InstitutionDetails;
    const dictionary = await getTranslations({ locale, namespace: 'Base' });
    return <PageInstituteAddReview dictionary={dictionary} {...data} />;
  } catch {
    redirect(AppRoutes.Global.Home);
  }
}
