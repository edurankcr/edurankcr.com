'use client';

import { createContext } from 'react';

import type { FormFieldContextValue, FormItemContextValue } from './Form';

export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);
