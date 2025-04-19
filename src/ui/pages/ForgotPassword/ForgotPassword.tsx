import React from 'react';

import type { IDictionary } from '@/types';
import { Form, FormForgotPassword } from '@/ui';

type PageForgotPasswordProps = IDictionary;

const PageForgotPassword = (params: PageForgotPasswordProps) => {
  const { dictionary } = params;
  return (
    <Form
      title={dictionary('Form.ForgotPassword.title')}
      paragraph={dictionary('Form.ForgotPassword.paragraph')}
      footer={dictionary.rich('Form.footer_email', {
        b: (chunks: any) => <b className="font-semibold">{chunks}</b>,
      })}
    >
      <FormForgotPassword />
    </Form>
  );
};

export { PageForgotPassword };
