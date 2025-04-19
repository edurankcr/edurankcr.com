import { z } from 'zod';

import { isValidAge, isValidEmailDomain, isValidEmailFormat, isValidUsername } from '@/utils';

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

export const NameSchema = z
  .string()
  .nonempty({ message: 'Name is required.' })
  .max(64);

export const InstituteNameSchema = z
  .string()
  .nonempty('Name is required.')
  .max(200, 'Name must not exceed 200 characters.')
  .regex(/^[a-z0-9\s.,'"-]+$/i, 'Institute name contains invalid characters.');

export const InstituteTypeSchema = z
  .string()
  .nonempty('Type is required.')
  .refine((val) => {
    const num = Number(val);
    return !Number.isNaN(num) && num >= 0 && num <= 3;
  }, {
    message: 'Institute type must be between 0 and 3 (0 = School, 1 = College, 2 = University, 3 = Institute).',
  });

export const ProvinceSchema = z
  .string()
  .nonempty('Province is required.')
  .refine((val) => {
    const num = Number(val);
    return !Number.isNaN(num) && num >= 1 && num <= 7;
  }, {
    message: 'Province must be between 1 and 7 (1 = San José, 2 = Alajuela, 3 = Cartago, 4 = Heredia, 5 = Guanacaste, 6 = Puntarenas, 7 = Limón).',
  });

export const UrlSchema = z
  .string()
  .max(350, 'URL must not exceed 350 characters.')
  .regex(
    /^https:\/\/([\w\-]+\.)+[\w\-]+(\/[\w\-./?%&=]*)?$/,
    'URL must start with \'https://\' and be a valid web address.',
  );

export const LastNameSchema = z
  .string()
  .nonempty({ message: 'Last name is required.' })
  .max(96);

export const UserNameSchema = z
  .string()
  .nonempty({ message: 'Username is required.' })
  .min(3)
  .max(20)
  .refine(isValidUsername, {
    message: 'Username can only contain letters, numbers, underscores, and periods (no consecutive periods or underscores).',
  });

export const BirthDateSchema = z
  .string()
  .nonempty({ message: 'Birth date is required.' })
  .refine(isValidAge, {
    message: 'You must be at least 18 years old and at most 100 years old.',
  });

export const AvatarSchema = z
  .custom<File>(file => file instanceof File, {
    message: 'Avatar file is required.',
  })
  .refine(file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'].includes(file.type), {
    message: 'Avatar file type must be JPEG, JPG, PNG, WEBP, or GIF.',
  })
  .refine(file => file.size <= 2 * 1024 * 1024, {
    message: 'Avatar file size must be less than 2MB.',
  });

export const SearchNameSchema = z
  .string()
  .nonempty({ message: 'Search name is required.' })
  .max(100, { message: 'Search name must be at most 100 characters long.' })
  .regex(/^[a-z0-9\s.,'"-]+$/i, 'Invalid characters in search name. Only letters, numbers, and spaces are allowed.');
