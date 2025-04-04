import { isValidAge, isValidUsername } from '@utils';
import { z } from 'zod';

import {
  ConfirmPasswordSchema,
  EmailSchema,
  GuidSchema,
  IdentifierSchema,
  PasswordSchema,
} from './fields';

export const LoginValidation = z.object({
  Identifier: IdentifierSchema,
  Password: PasswordSchema,
});

export const RegisterValidation = z.object({
  Name: z.string().nonempty().max(64),
  LastName: z.string().nonempty().max(96),
  UserName: z.string().nonempty().min(3).max(20).refine(isValidUsername, {
    message: 'Username can only contain letters, numbers, underscores, and periods (no consecutive periods or underscores).',
  }),
  Email: EmailSchema,
  Password: PasswordSchema,
  BirthDate: z.string().nonempty().refine(isValidAge, {
    message: 'You must be at least 18 years old and at most 100 years old.',
  }),
});

export const EmailVerificationValidation = z.object({
  Email: EmailSchema,
});

export const PasswordRequestValidation = z.object({
  Identifier: IdentifierSchema,
});

export const ChangePasswordValidation = z
  .object({
    TokenId: GuidSchema,
    NewPassword: PasswordSchema,
    ConfirmPassword: ConfirmPasswordSchema,
  })
  .superRefine(({ NewPassword, ConfirmPassword }, ctx) => {
    if (ConfirmPassword !== NewPassword) {
      ctx.addIssue({
        path: ['ConfirmPassword'],
        code: 'custom',
        message: 'Passwords do not match.',
      });
    }
  });

export const GuidValidation = GuidSchema;
