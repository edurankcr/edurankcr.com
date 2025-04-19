import React from 'react';

import type { IDictionary } from '@/types';
import { Form, FormVerifyEmailRequest } from '@/ui';

type PageVerifyEmailRequestProps = IDictionary;

const PageVerifyEmailRequest = (params: PageVerifyEmailRequestProps) => {
  const { dictionary } = params;
  return (
    <Form
      title={dictionary('Form.VerifyEmailRequest.title')}
      paragraph={dictionary('Form.VerifyEmailRequest.paragraph')}
      footer={dictionary.rich('Form.footer_email', {
        b: (chunks: any) => <b className="font-semibold">{chunks}</b>,
      })}
    >
      <FormVerifyEmailRequest />
    </Form>
  );
};

export { PageVerifyEmailRequest };
