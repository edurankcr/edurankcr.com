'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import {
  Box,
  CSput,
  Form,
  FormControl,
  FormField,
  FormItem,
  Icons,
  Stack,
} from '@/components';
import { SearchValidation } from '@/validations';

import { GlobalSearchInputResults } from './Common';

type GlobalSearchInputProps = {
  variant?: 'default' | 'hero';
};

const GlobalSearchInput = (params: GlobalSearchInputProps) => {
  const { variant = 'default' } = params;
  const dictionary = useTranslations('Base');
  const [query, setQuery] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const form = useForm<z.infer<typeof SearchValidation>>({
    resolver: zodResolver(SearchValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Query: '',
    },
  });

  async function onSubmit(values: z.infer<typeof SearchValidation>) {
    setQuery(values.Query);
  }

  function handleEnterSubmit(
    e: ReactKeyboardEvent<HTMLInputElement>,
    submitFn: () => void,
  ): void {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitFn();
    }
  }

  function handleClickClear() {
    setQuery(null);
    form.reset();
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        handleClickClear();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  return (
    <Form {...form}>
      <div
        ref={formRef}
        className="relative w-full"
        id="global-search-form"
      >
        <Stack asChild width="full" position="relative" zIndex={10}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            data-variant={variant}
          >
            <FormField
              control={form.control}
              name="Query"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <CSput
                      leftSection={<Icons iconName="search" />}
                      rightSection={(
                        <Box
                          onClick={handleClickClear}
                          data-visible={!!query}
                          className="cursor-pointer data-[visible=true]:block data-[visible=false]:hidden transition-all ease-in-out duration-200"
                        >
                          <Icons iconName="circleXFilled" />
                        </Box>
                      )}
                      boxSettings={{ boxShadow: 200, bgBackground: 'white', height: 'lg', fontSize: 300, paddingX: '2xl' }}
                      placeholder={dictionary('Input.Search.placeholder')}
                      onKeyDown={e => handleEnterSubmit(e, form.handleSubmit(onSubmit))}
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Stack>
        {query && <GlobalSearchInputResults query={query} dictionary={dictionary} />}
      </div>
    </Form>
  );
};

export { GlobalSearchInput };
