import React from 'react';

import type { IDictionary } from '@/types';
import { Form, FormVerifyEmailSent } from '@/ui';

type PageForgotPasswordProps = IDictionary;

const PageVerifyEmailSent = (params: PageForgotPasswordProps) => {
  const { dictionary } = params;
  return (
    <Form
      title={dictionary('Form.VerifyEmailSent.title')}
      paragraph={dictionary('Form.VerifyEmailSent.paragraph')}
    >
      <FormVerifyEmailSent />
    </Form>
  );
};

export { PageVerifyEmailSent };
