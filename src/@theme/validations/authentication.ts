import { isValidAge, isValidEmailDomain, isValidEmailFormat, isValidUsername } from '@theme/functions';
import { z } from 'zod';

const IdentifierSchema = z
  .string()
  .nonempty({ message: 'Identifier is required.' })
  .max(255, { message: 'Identifier must be at most 255 characters long.' })
  .refine((val) => {
    if (val.includes('@')) {
      return isValidEmailFormat(val);
    }
    return true;
  }, {
    message: 'Email format is invalid.',
  })
  .refine((val) => {
    if (val.includes('@')) {
      return isValidEmailDomain(val);
    }
    return true;
  }, {
    message: 'Email must be from a valid provider (e.g., Gmail, Yahoo, Hotmail, iCloud).',
  })
  .refine((val) => {
    if (!val.includes('@')) {
      return isValidUsername(val);
    }
    return true;
  }, {
    message: 'Username is invalid. Only letters, numbers, dots, and underscores are allowed (max 30 characters).',
  });

const EmailSchema = z
  .string()
  .nonempty({ message: 'Email is required.' })
  .max(256, { message: 'Email must be at most 256 characters long.' })
  .refine(isValidEmailDomain, {
    message: 'Email must be valid and from a common provider (e.g., Gmail, Yahoo, Hotmail, iCloud).',
  });

const GuidSchema = z
  .string()
  .uuid({ message: 'Invalid GUID format.' });

const PasswordSchema = z
  .string()
  .nonempty({ message: 'Password is required.' })
  .min(6, { message: 'Password must be at least 6 characters long.' })
  .max(32, { message: 'Password must be at most 32 characters long.' });

const ConfirmPasswordSchema = z
  .string()
  .nonempty({ message: 'Confirm password is required.' })
  .min(6, { message: 'Confirm password must be at least 6 characters long.' })
  .max(32, { message: 'Confirm password must be at most 32 characters long.' });

export const GuidValidation = GuidSchema;

export const LoginValidation = z.object({
  Identifier: IdentifierSchema,

  Password: z
    .string()
    .nonempty({ message: 'Password is required.' })
    .min(6, { message: 'Password must be at least 6 characters long.' })
    .max(32, { message: 'Password must be at most 32 characters long.' }),
});

export const RegisterValidation = z.object({
  Name: z
    .string()
    .nonempty({ message: 'Name is required.' })
    .max(64, { message: 'Name must be at most 64 characters long.' }),

  LastName: z
    .string()
    .nonempty({ message: 'Last name is required.' })
    .max(96, { message: 'Last name must be at most 96 characters long.' }),

  UserName: z
    .string()
    .nonempty({ message: 'Username is required.' })
    .min(3, { message: 'Username must be at least 3 characters long.' })
    .max(20, { message: 'Username must be at most 20 characters long.' })
    .refine(isValidUsername, {
      message:
        'Username can only contain letters, numbers, underscores, and periods (no consecutive periods or underscores).',
    }),

  Email: EmailSchema,

  Password: PasswordSchema,

  BirthDate: z
    .string()
    .nonempty({ message: 'Birth date is required.' })
    .refine(isValidAge, {
      message: 'You must be at least 18 years old and at most 100 years old.',
    }),
});

export const EmailVerificationValidation = z.object({
  Email: EmailSchema,
});

export const PasswordRequestValidation = z.object({
  Identifier: IdentifierSchema,
});

export const ChangePasswordValidation = z.object({
  TokenId: GuidSchema,
  NewPassword: PasswordSchema,
  ConfirmPassword: ConfirmPasswordSchema,
}).superRefine((values, ctx) => {
  const { NewPassword, ConfirmPassword } = values;
  if (ConfirmPassword !== NewPassword) {
    ctx.addIssue({
      path: ['ConfirmPassword'],
      code: 'custom',
      message: 'Passwords do not match.',
    });
  }
});
