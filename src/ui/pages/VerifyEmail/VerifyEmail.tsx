import React from 'react';

import type { IDictionary } from '@/types';
import { Form, FormVerifyEmail } from '@/ui';

type PageVerifyEmailProps = IDictionary;

const PageVerifyEmail = (params: PageVerifyEmailProps) => {
  const { dictionary } = params;
  return (
    <Form
      title={dictionary('Form.VerifyEmail.title')}
    >
      <FormVerifyEmail />
    </Form>
  );
};

export { PageVerifyEmail };
