import { z } from 'zod';

import {
  AvatarSchema,
  BirthDateSchema,
  ConfirmPasswordSchema,
  EmailSchema,
  GuidSchema,
  IdentifierSchema,
  InstituteNameSchema,
  InstituteTypeSchema,
  LastNameSchema,
  NameSchema,
  PasswordSchema,
  ProvinceSchema,
  ReviewScaleSchema,
  SearchNameSchema,
  UrlSchema,
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
  DateOfBirth: BirthDateSchema,
});

export const BiographyValidation = z.object({
  Biography: z.string().max(512, 'Biography is too long.'),
});

export const AvatarValidation = z.object({
  Avatar: AvatarSchema,
});

export const PasswordValidation = z
  .object({
    CurrentPassword: PasswordSchema,
    NewPassword: PasswordSchema,
    ConfirmPassword: ConfirmPasswordSchema,
  })
  .superRefine(({ CurrentPassword, NewPassword, ConfirmPassword }, ctx) => {
    if (ConfirmPassword !== NewPassword) {
      ctx.addIssue({
        path: ['ConfirmPassword'],
        code: 'custom',
        message: 'Passwords do not match.',
      });
    }

    if (CurrentPassword === NewPassword) {
      ctx.addIssue({
        path: ['NewPassword'],
        code: 'custom',
        message: 'New password cannot be the same as current password.',
      });
    }
  });

export const AddInstituteValidation = z.object({
  Name: InstituteNameSchema,
  Type: InstituteTypeSchema,
  Province: ProvinceSchema,
  Url: UrlSchema,
});

export const SearchValidation = z.object({
  Query: SearchNameSchema,
});

export const InstituteReviewValidation = z.object({
  Location: ReviewScaleSchema,
  Happiness: ReviewScaleSchema,
  Safety: ReviewScaleSchema,
  Reputation: ReviewScaleSchema,
  Opportunities: ReviewScaleSchema,
  Internet: ReviewScaleSchema,
  Food: ReviewScaleSchema,
  Social: ReviewScaleSchema,
  Facilities: ReviewScaleSchema,
  Clubs: ReviewScaleSchema,
  Testimony: z
    .string()
    .max(2000, 'Testimony is too long, maximum 2000 characters.')
    .min(85, 'Testimony is too short, minimum 85 characters.'),
});
