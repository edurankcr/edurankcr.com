import React from 'react';

import type { IChildren } from '@/types';
import { FormFooter, FormHeader } from '@/ui';

type FormProps = {
  title: string;
  subtitle?: string;
  paragraph?: string;
  footer?: any;
} & IChildren;

const Form = (params: FormProps) => {
  const { title, subtitle, paragraph, children, footer } = params;
  return (
    <>
      <FormHeader title={title} subtitle={subtitle} paragraph={paragraph} />
      {children}
      {footer && (
        <FormFooter>
          {footer}
        </FormFooter>
      )}
    </>
  );
};

export { Form };
