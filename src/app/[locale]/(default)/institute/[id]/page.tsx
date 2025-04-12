import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { AppRoutes } from '@/constants';
import { ViewInstitute } from '@/elements';
import { getInstitute } from '@/services';
import type { IIdMeta, IMeta } from '@/types';
import { getMetadata } from '@/utils';
import { GuidValidation } from '@/validations';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return getMetadata({ locale, namespace: 'Institute' });
}

export default async function Page({ params }: IIdMeta) {
  const { locale, id } = await params;

  const parsedId = GuidValidation.safeParse(id);
  if (!parsedId.success) {
    redirect(AppRoutes.Global.Home);
  }

  let institute;
  try {
    const response = await getInstitute(id);
    institute = response.data;
  } catch {
    redirect(AppRoutes.Global.Home);
  }

  const dictionary = await getTranslations({ locale, namespace: 'UI' });

  return <ViewInstitute dictionary={dictionary} institute={institute} />;
}
