import { z } from 'zod';

import { isValidEmailDomain, isValidEmailFormat, isValidUsername } from '@/utils';

export const IdentifierSchema = z
  .string()
  .nonempty({ message: 'Identifier is required.' })
  .max(255, { message: 'Identifier must be at most 255 characters long.' })
  .refine(val => val.includes('@') ? isValidEmailFormat(val) : true, {
    message: 'Email format is invalid.',
  })
  .refine(val => val.includes('@') ? isValidEmailDomain(val) : true, {
    message: 'Email must be from a valid provider (e.g., Gmail, Yahoo, Hotmail, iCloud).',
  })
  .refine(val => !val.includes('@') ? isValidUsername(val) : true, {
    message: 'Username is invalid. Only letters, numbers, dots, and underscores are allowed (max 30 characters).',
  });

export const EmailSchema = z
  .string()
  .nonempty({ message: 'Email is required.' })
  .max(256, { message: 'Email must be at most 256 characters long.' })
  .refine(isValidEmailDomain, {
    message: 'Email must be valid and from a common provider (e.g., Gmail, Yahoo, Hotmail, iCloud).',
  });

export const PasswordSchema = z
  .string()
  .nonempty({ message: 'Password is required.' })
  .min(6, { message: 'Password must be at least 6 characters long.' })
  .max(32, { message: 'Password must be at most 32 characters long.' });

export const ConfirmPasswordSchema = z
  .string()
  .nonempty({ message: 'Confirm password is required.' })
  .min(6, { message: 'Confirm password must be at least 6 characters long.' })
  .max(32, { message: 'Confirm password must be at most 32 characters long.' });

export const GuidSchema = z
  .string()
  .uuid({ message: 'Invalid GUID format.' });
