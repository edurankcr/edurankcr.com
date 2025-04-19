import React from 'react';

import type { IDictionary } from '@/types';
import { Form, FormVerifyEmail } from '@/ui';

type PageVerifyEmailChangeProps = IDictionary;

const PageVerifyEmailChange = (params: PageVerifyEmailChangeProps) => {
  const { dictionary } = params;
  return (
    <Form
      title={dictionary('Form.VerifyEmailChange.title')}
    >
      <FormVerifyEmail type="change" />
    </Form>
  );
};

export { PageVerifyEmailChange };
