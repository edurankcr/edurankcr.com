import React from 'react';

import type { IDictionary } from '@/types';
import { Form, FormResetPassword } from '@/ui';

type PageForgotPasswordProps = IDictionary;

const PageResetPassword = (params: PageForgotPasswordProps) => {
  const { dictionary } = params;
  return (
    <Form
      title={dictionary('Form.ResetPassword.title')}
    >
      <FormResetPassword />
    </Form>
  );
};

export { PageResetPassword };
