import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { AppRoutes } from '@/constants';
import { getInstituteSummary } from '@/services';
import type { IIdMeta, InstitutionDetailsResponse } from '@/types';
import { PageInstitute } from '@/ui/pages/Institute';
import { GuidValidation } from '@/validations';

export async function generateMetadata({ params }: IIdMeta) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta.Institute' });

  try {
    const response = await getInstituteSummary(id);
    const data = response.data as InstitutionDetailsResponse;

    return {
      title: t('title', { name: data.institution.name }) || '',
      description: t('description', { name: data.institution.name }) || '',
    };
  } catch {
    return {
      title: t('generic_title'),
      description: t('generic_description'),
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
    const response = await getInstituteSummary(id);
    const data = response.data as InstitutionDetailsResponse;
    const dictionary = await getTranslations({ locale, namespace: 'Base' });
    return <PageInstitute dictionary={dictionary} {...data} />;
  } catch {
    redirect(AppRoutes.Global.Home);
  }
}
