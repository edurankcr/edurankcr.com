'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';

import {
  Box,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormSubmit,
  Link,
  RatingScale,
  Stack,
  Textarea,
  useRouter,
} from '@/components';
import { Advise } from '@/components/Advise/Advise';
import { AppRoutes } from '@/constants';
import { postInstituteReview } from '@/services';
import type { InstitutionDetails } from '@/types';
import { InstituteReviewValidation } from '@/validations';

type FormInstituteReviewProps = {
  InstitutionId: InstitutionDetails['institutionId'];
};

const FormInstituteReview = (params: FormInstituteReviewProps) => {
  const { InstitutionId } = params;

  const dictionary = useTranslations('Base');
  const router = useRouter();

  const form = useForm<z.infer<typeof InstituteReviewValidation>>({
    resolver: zodResolver(InstituteReviewValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Location: 0,
      Happiness: 0,
      Safety: 0,
      Reputation: 0,
      Opportunities: 0,
      Internet: 0,
      Food: 0,
      Social: 0,
      Facilities: 0,
      Clubs: 0,
      Testimony: '',
    },
  });

  async function onSubmit(values: z.infer<typeof InstituteReviewValidation>) {
    const { Location, Happiness, Safety, Reputation, Opportunities, Internet, Food, Social, Facilities, Clubs, Testimony } = values;
    try {
      await postInstituteReview(InstitutionId, Location, Happiness, Safety, Reputation, Opportunities, Internet, Food, Social, Facilities, Clubs, Testimony);
      toast.success(dictionary('Form.Review.submit_success'));
      router.push(AppRoutes.Global.Home);
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
        case 'InstitutionRating.AlreadyExists':
          form.setError('Testimony', {
            type: 'custom',
            message: dictionary('Errors.review_already_exists'),
          });
          break;
        default:
          toast.error(dictionary('Errors.fetch_server'));
      }
    }
  }

  if (!InstitutionId) {
    return redirect(AppRoutes.Global.Home);
  }

  return (
    <Form {...form}>
      <Stack asChild>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="Location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RatingScale
                      placeholder={dictionary('Input.Location.placeholder')}
                      dictionary={dictionary}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Happiness"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RatingScale
                      placeholder={dictionary('Input.Happiness.placeholder')}
                      dictionary={dictionary}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Safety"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RatingScale
                      placeholder={dictionary('Input.Safety.placeholder')}
                      dictionary={dictionary}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Reputation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RatingScale
                      placeholder={dictionary('Input.Reputation.placeholder')}
                      dictionary={dictionary}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Opportunities"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RatingScale
                      placeholder={dictionary('Input.Opportunities.placeholder')}
                      dictionary={dictionary}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Internet"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RatingScale
                      placeholder={dictionary('Input.Internet.placeholder')}
                      dictionary={dictionary}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Food"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RatingScale
                      placeholder={dictionary('Input.Food.placeholder')}
                      dictionary={dictionary}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Social"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RatingScale
                      placeholder={dictionary('Input.Social.placeholder')}
                      dictionary={dictionary}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Facilities"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RatingScale
                      placeholder={dictionary('Input.Facilities.placeholder')}
                      dictionary={dictionary}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Clubs"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RatingScale
                      placeholder={dictionary('Input.Clubs.placeholder')}
                      dictionary={dictionary}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Box>
          <Advise content={
            dictionary.rich('Form.Review.advise', {
              link: (chunks: any) => (
                <Link
                  href="#"
                  text={{ weight: 'semibold', color: 'adviseInfo' }}
                >
                  {chunks}
                </Link>
              ),
              b: (chunks: any) => <b className="font-semibold">{chunks}</b>,
            })
          }
          />
          <FormField
            control={form.control}
            name="Testimony"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder={dictionary('Input.Testimony.placeholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormSubmit>
            {dictionary('Button.submit_rating')}
          </FormSubmit>
        </form>
      </Stack>
    </Form>
  );
};

export { FormInstituteReview };
