'use client';

import type { FormFieldContextValue, FormItemContextValue } from './Form';
import * as React from 'react';

export const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

export const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);
