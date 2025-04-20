import React from 'react';

import type { ITranslations } from '@/types';
import { AlertApiError } from '@/ui';

import { GlobalSearchInputResultsContainer } from './Results.container';

type GlobalSearchInputResultsErrorProps = ITranslations;

const GlobalSearchInputResultsError = (params: GlobalSearchInputResultsErrorProps) => {
  const { dictionary } = params;
  return (
    <GlobalSearchInputResultsContainer>
      <AlertApiError message={dictionary('Errors.fetch_data')} />
    </GlobalSearchInputResultsContainer>
  );
};

export { GlobalSearchInputResultsError };
