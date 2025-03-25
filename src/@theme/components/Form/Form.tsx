'use client';

import type * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import { IconExclamationCircleFilled } from '@tabler/icons-react';
import { cx } from 'class-variance-authority';
import * as React from 'react';
import { useMemo } from 'react';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { Controller, FormProvider, useFormContext } from 'react-hook-form';

import { Button } from '../Button';
import { Group } from '../Group';
import { Label } from '../Label';
import { FormFieldContext, FormItemContext } from './FormContext';
import { useFormField } from './useForm';

const Form = FormProvider;

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  const contextValue = useMemo(() => ({ name: props.name }), [props.name]);

  return (
    <FormFieldContext value={contextValue}>
      <Controller {...props} />
    </FormFieldContext>
  );
};

export type FormItemContextValue = {
  id: string;
};

const FormItem = ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: any }) => {
  const id = React.useId();
  const contextValue = useMemo(() => ({ id }), [id]);
  return (
    <FormItemContext value={contextValue}>
      <div ref={ref} className={cx('space-y-2', className)} {...props} />
    </FormItemContext>
  );
};
FormItem.displayName = 'FormItem';

const FormLabel = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & { ref?: any }) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cx(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};
FormLabel.displayName = 'FormLabel';

const FormControl = ({ ref, ...props }: React.ComponentPropsWithoutRef<typeof Slot> & { ref?: any }) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};
FormControl.displayName = 'FormControl';

const FormDescription = ({ ref, className, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { ref?: any }) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cx('text-[0.8rem] text-muted-foreground', className)}
      {...props}
    />
  );
};
FormDescription.displayName = 'FormDescription';

const FormMessage = ({ ref, className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { ref?: any }) => {
  const { error, formMessageId } = useFormField();

  if (!error) {
    return;
  }

  return (
    <Group preventGrowOverflow={false} justifyContent="start" gap="sm" className="text-text-error">
      <IconExclamationCircleFilled size={14} className="min-h-[14px] min-w-[14px]" />
      <p
        ref={ref}
        id={formMessageId}
        className={cx('text-xs font-medium', className)}
        {...props}
      >
        {error.message}
      </p>
    </Group>
  );
};
FormMessage.displayName = 'FormMessage';

const FormSubmit = ({ ref, ...props }: React.ComponentPropsWithoutRef<typeof Button> & { ref?: any }) => {
  const { formState } = useFormContext();

  return (
    <Button
      ref={ref}
      disabled={formState.isSubmitting}
      isLoading={formState.isSubmitting}
      bgColor="interactivePrimary"
      height="lg"
      type="submit"
      {...props}
    />
  );
};
FormSubmit.displayName = 'FormSubmit';

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSubmit,
};
