import { Link, Text } from '@/components';
import { AppRoutes } from '@/constants';
import type { ITranslations } from '@/types';

type FormDisclaimersProps = {
  helpers?: any;
} & ITranslations;

const FormDisclaimer = ({ dictionary }: FormDisclaimersProps) => {
  return (
    <>
      <Text size="sm" align="center" color="secondary" wrap="balance-res">
        {dictionary('Helpers.Form.by_continuing')}
        {' '}
        <Link
          href={AppRoutes.Global.Legal.Terms}
          text={{ underline: true, color: 'primary', weight: 'medium' }}
        >
          {dictionary('Helpers.Form.terms_of_service')}
        </Link>
        {' '}
        {dictionary('Helpers.Form.and')}
        {' '}
        <Link
          href={AppRoutes.Global.Legal.Privacy}
          text={{ underline: true, color: 'primary', weight: 'medium' }}
        >
          {dictionary('Helpers.Form.privacy_policy')}
        </Link>
        .
      </Text>
    </>
  );
};

const FormCheckSpam = ({ dictionary }: FormDisclaimersProps) => {
  return (
    <Text size="sm" align="center" color="secondary" wrap="balance-res">
      {dictionary('Helpers.Form.check_spam')}
    </Text>
  );
};

export { FormCheckSpam, FormDisclaimer };
