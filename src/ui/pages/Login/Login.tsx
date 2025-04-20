import React from 'react';

import type { IDictionary } from '@/types';
import { Form, FormLogin } from '@/ui';

type PageLoginProps = IDictionary;

const PageLogin = (params: PageLoginProps) => {
  const { dictionary } = params;
  return (
    <Form
      title={dictionary('Form.Login.title')}
      subtitle={dictionary('Form.Login.subtitle')}
      footer={dictionary.rich('Form.footer', {
        b: (chunks: any) => <b className="font-semibold">{chunks}</b>,
      })}
    >
      <FormLogin />
    </Form>
  );
};

export { PageLogin };
