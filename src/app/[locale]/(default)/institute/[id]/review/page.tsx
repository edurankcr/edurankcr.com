import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { AppRoutes } from '@/constants';
import { getSummaryUserRating } from '@/services';
import type {
  IIdMeta,
  InstitutionRatingWithInstitutionResponse,
} from '@/types';
import { PageInstituteDynamicReview } from '@/ui';
import { GuidValidation } from '@/validations';

export async function generateMetadata({ params }: IIdMeta) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta.Institute' });

  try {
    const response = await getSummaryUserRating(id);
    const data = response.data as InstitutionRatingWithInstitutionResponse;

    if (data.hasRating) {
      return {
        title: t('edit_review', { name: data.institution.name }) || '',
        description: t('edit_review_description', { name: data.institution.name }) || '',
      };
    }

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
    const response = await getSummaryUserRating(id);
    const data = response.data as InstitutionRatingWithInstitutionResponse;
    const dictionary = await getTranslations({ locale, namespace: 'Base' });
    return <PageInstituteDynamicReview dictionary={dictionary} {...data} />;
  } catch {
    redirect(AppRoutes.Global.Home);
  }
}
