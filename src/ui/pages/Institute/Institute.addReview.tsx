import React from 'react';

import type { IDictionary, InstitutionDetails } from '@/types';
import { Form, FormInstituteReview } from '@/ui';

type PageInstituteAddReviewProps = InstitutionDetails & IDictionary;

const PageInstituteAddReview = (params: PageInstituteAddReviewProps) => {
  const { dictionary, name, institutionId } = params;
  return (
    <Form
      title={dictionary('Form.Review.institute_title', { name })}
      footer={dictionary.rich('Form.footer_review', {
        b: (chunks: any) => <b className="font-semibold">{chunks}</b>,
      })}
    >
      <FormInstituteReview InstitutionId={institutionId} />
    </Form>
  );
};

export { PageInstituteAddReview };
