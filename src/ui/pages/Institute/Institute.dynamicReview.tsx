import React from 'react';

import type { IDictionary, InstitutionRatingWithInstitutionResponse } from '@/types';
import { Form, FormInstituteReview } from '@/ui';

type PageInstituteAddReviewProps = InstitutionRatingWithInstitutionResponse & IDictionary;

const PageInstituteDynamicReview = (params: PageInstituteAddReviewProps) => {
  const { dictionary, hasRating, institution, rating } = params;

  return (
    <Form
      title={dictionary('Form.Review.institute_title', { name: institution.name })}
      footer={dictionary.rich('Form.footer_review', {
        b: (chunks: any) => <b className="font-semibold">{chunks}</b>,
      })}
    >
      <FormInstituteReview
        institutionId={institution.institutionId}
        hasRating={hasRating}
        rating={rating}
      />
    </Form>
  );
};

export { PageInstituteDynamicReview };
