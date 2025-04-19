import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { AppRoutes } from '@/constants';
import { getInstitute } from '@/services';
import type { IIdMeta } from '@/types';
import { PageInstitute } from '@/ui/pages/Institute';
import { GuidValidation } from '@/validations';

export async function generateMetadata({ params }: IIdMeta) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta.Institute' });

  try {
    const response = await getInstitute(id);
    const data = response.data;

    return {
      title: t('title', { name: data.institute.name }) || '',
      description: t('description', { name: data.institute.name }) || '',
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
    const response = await getInstitute(id);
    const data = response.data;
    const dictionary = await getTranslations({ locale, namespace: 'Base' });
    return <PageInstitute dictionary={dictionary} institute={data.institute} instituteSummary={data.summary} />;
  } catch {
    redirect(AppRoutes.Global.Home);
  }
}
