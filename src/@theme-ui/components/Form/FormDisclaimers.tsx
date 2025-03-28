import { Link, Text } from '@theme/components';
import type { useTranslations } from 'use-intl';

import { Routes } from '@/routes';

type FormDisclaimersProps = {
  dictionary: ReturnType<typeof useTranslations>;
};

const FormDisclaimers = ({ dictionary }: FormDisclaimersProps) => {
  return (
    <>
      <Text size="sm" align="center" color="secondary" wrap="balance-res">
        {dictionary('Helpers.Form.by_continuing')}
        {' '}
        <Link
          href={Routes.Global.Legal.Terms}
          text={{ underline: true, color: 'primary', weight: 'medium' }}
        >
          {dictionary('Helpers.Form.terms_of_service')}
        </Link>
        {' '}
        {dictionary('Helpers.Form.and')}
        {' '}
        <Link
          href={Routes.Global.Legal.Privacy}
          text={{ underline: true, color: 'primary', weight: 'medium' }}
        >
          {dictionary('Helpers.Form.privacy_policy')}
        </Link>
        .
      </Text>
    </>
  );
};

export { FormDisclaimers };
