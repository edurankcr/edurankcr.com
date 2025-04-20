import React from 'react';

import type { IDictionary } from '@/types';
import { Form, FormForgotPasswordSent } from '@/ui';

type PageForgotPasswordProps = IDictionary;

const PageForgotPasswordSent = (params: PageForgotPasswordProps) => {
  const { dictionary } = params;
  return (
    <Form
      title={dictionary('Form.ForgotPasswordSent.title')}
      paragraph={dictionary('Form.ForgotPasswordSent.paragraph')}
    >
      <FormForgotPasswordSent />
    </Form>
  );
};

export { PageForgotPasswordSent };
