'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { IconChevronDown } from '@tabler/icons-react';
import { cx } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, Ref } from 'react';

import { Group } from '@/components';
import type { ITranslations } from '@/types';

import { Stack } from '../Stack';
import { Text } from '../Text';

const Accordion = AccordionPrimitive.Root;

type AccordionProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
  ref?: Ref<HTMLDivElement> | null;
};

const AccordionItem = ({ ref, className, ...props }: AccordionProps) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cx('border-b border-border-interactive group py-4', className)}
    {...props}
  />
);

AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  ref?: Ref<HTMLButtonElement> | null;
};

const AccordionTrigger = ({ ref, className, children, ...props }: AccordionTriggerProps) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cx(
        'flex flex-1 items-start justify-between pb-4 transition-all text-left [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <IconChevronDown className="h-4 w-4 shrink-0 text-text-secondary transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

type AccordionTriggerFormProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  ref?: Ref<HTMLButtonElement> | null;
  keyLocalization: string;
  keyValue?: string;
} & ITranslations;

const AccordionTriggerForm = ({
  ref,
  className,
  children,
  dictionary,
  keyLocalization,
  keyValue,
  ...props
}: AccordionTriggerFormProps) => {
  if (!dictionary) {
    console.warn('AccordionTriggerForm: dictionary prop is missing.');
    return null;
  }

  return (
    <Group preventGrowOverflow={false} flexWrap="nowrap" className="group" alignItems="start">
      <Stack gap="none" flexGrow>
        <Text as="h3" color="primary" weight="semibold">
          {dictionary(`Heading.${keyLocalization}` as any)}
        </Text>
        <Text color="secondary" size="sm" className="group-data-[state=open]:hidden">
          {keyValue}
        </Text>
        <Text color="secondary" size="sm" className="hidden group-data-[state=open]:block">
          {dictionary(`Paragraph.${keyLocalization}` as any)}
        </Text>
      </Stack>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cx('h-fit cursor-pointer overflow-visible', className)}
        {...props}
      >
        <Text color="primary" weight="semibold" size="sm" underline wrap="nowrap" className="hidden group-data-[state=open]:block">
          {dictionary('Heading.cancel')}
        </Text>
        <Text color="primary" weight="semibold" size="sm" underline className="group-data-[state=open]:hidden">
          {dictionary('Heading.edit')}
        </Text>
      </AccordionPrimitive.Trigger>
    </Group>
  );
};

AccordionTriggerForm.displayName = AccordionPrimitive.Trigger.displayName;

type AccordionContentProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
  ref?: Ref<HTMLDivElement> | null;
};

const AccordionContent = ({ ref, className, children, ...props }: AccordionContentProps) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cx('pt-4', className)}>{children}</div>
  </AccordionPrimitive.Content>
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, AccordionTriggerForm };
