import React from 'react';

import type { IDictionary } from '@/types';
import { Form, FormRegister } from '@/ui';

type PageRegisterProps = IDictionary;

const PageRegister = (params: PageRegisterProps) => {
  const { dictionary } = params;
  return (
    <Form
      title={dictionary('Form.Register.title')}
      footer={dictionary.rich('Form.footer', {
        b: (chunks: any) => <b className="font-semibold">{chunks}</b>,
      })}
    >
      <FormRegister />
    </Form>
  );
};

export { PageRegister };
