import { z } from 'zod';

import {
  AvatarSchema,
  BirthDateSchema,
  ConfirmPasswordSchema,
  EmailSchema,
  GuidSchema,
  IdentifierSchema,
  LastNameSchema,
  NameSchema,
  PasswordSchema,
  UserNameSchema,
} from './fields';

export const LoginValidation = z.object({
  Identifier: IdentifierSchema,
  Password: PasswordSchema,
});

export const RegisterValidation = z.object({
  Name: NameSchema,
  LastName: LastNameSchema,
  UserName: UserNameSchema,
  Email: EmailSchema,
  Password: PasswordSchema,
  BirthDate: BirthDateSchema,
});

export const EmailValidation = z.object({
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

export const NameValidation = z.object({
  Name: NameSchema,
  LastName: LastNameSchema,
});

export const UsernameValidation = z.object({
  UserName: UserNameSchema,
});

export const BirthDateValidation = z.object({
  BirthDate: BirthDateSchema,
});

export const BiographyValidation = z.object({
  Biography: z.string().max(512, 'Biography is too long.'),
});

export const AvatarValidation = z.object({
  Avatar: AvatarSchema,
});
