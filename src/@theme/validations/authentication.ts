import { isValidEmailDomain, isValidEmailFormat, isValidUsername } from '@theme/functions';
import { z } from 'zod';

export const LoginValidation = z
  .object({
    Identifier: z
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
      }),

    Password: z
      .string()
      .nonempty({ message: 'Password is required.' })
      .min(6, { message: 'Password must be at least 6 characters long.' })
      .max(32, { message: 'Password must be at most 32 characters long.' }),
  });
