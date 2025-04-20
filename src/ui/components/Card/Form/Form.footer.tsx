import { Text } from '@/components';
import type { IChildren } from '@/types';

type FormFooterProps = IChildren;

const FormFooter = (params: FormFooterProps) => {
  const { children } = params;
  return (
    <>
      <Text size="sm" align="center" color="secondary" wrap="balance-res">
        {children}
      </Text>
    </>
  );
};

export { FormFooter };
