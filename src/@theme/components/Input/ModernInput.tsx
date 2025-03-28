'use client';

import type { InputHTMLAttributes } from 'react';
import * as React from 'react';
import { useMemo } from 'react';

export type InputProps = {
  labelText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const ModernInput = ({ ref, type = 'text', value = '', id, placeholder, disabled, ...props }: InputProps & { ref?: any }) => {
  const getMemoIsActive = useMemo(() => {
    return !!value;
  }, [value]);

  return (
    <div className="relative w-full input--modern">
      <input
        id={id}
        ref={ref}
        type={type}
        value={value}
        data-active={getMemoIsActive}
        disabled={disabled}
        className="peer block h-[48px] min-h-[auto] w-full rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] text-text-primary outline-none read-only:cursor-not-allowed hover:placeholder:opacity-100 focus:placeholder:opacity-100 disabled:cursor-not-allowed disabled:grayscale peer-focus:text-primary-foreground aria-[invalid=true]:bg-background-error-weak data-[active=true]:placeholder:opacity-100"
        {...props}
      />
      <label
        htmlFor={id}
        className="first-of-type:pointer-events-none absolute left-2 top-0 mb-0 w-full max-w-[95%] origin-[0_0] translate-y-1/2 truncate px-1 leading-[1.6] text-text-secondary font-medium peer-focus:w-fit peer-focus:-translate-y-2 peer-focus:scale-[0.8] peer-focus:bg-white peer-focus:text-text-primary peer-aria-[invalid=true]:text-text-error peer-data-[active=true]:w-fit peer-data-[active=true]:-translate-y-2 peer-data-[active=true]:scale-[0.8] peer-data-[active=true]:bg-white"
      >
        {placeholder}
      </label>
    </div>

  );
};

export type TextareaProps = {
  labelText?: string;
  rows?: number;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ ref, value = '', id, placeholder, disabled, rows, ...props }: TextareaProps & {
  ref?: any;
}) => {
  const getMemoIsActive = useMemo(() => {
    return !!value;
  }, [value]);

  return (
    <div className="relative w-full">
      <textarea
        id={id}
        ref={ref}
        value={value}
        rows={rows}
        data-active={getMemoIsActive}
        disabled={disabled}
        className="peer block h-[140px] max-h-[166px] min-h-[66px] w-full rounded-lg border border-border-level-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-heading outline-none transition-all duration-200 ease-linear read-only:cursor-not-allowed read-only:border-[#DDD] hover:border-primary-foreground focus:border-2 focus:border-primary-foreground focus:placeholder:opacity-100 disabled:cursor-not-allowed disabled:grayscale peer-focus:text-primary-foreground aria-[invalid=true]:border-2 aria-[invalid=true]:border-error aria-[invalid=true]:bg-error-bg data-[active=true]:placeholder:opacity-100 motion-reduce:transition-none"
        {...props}
      />
      <label
        htmlFor={id}
        className="first-of-type: pointer-events-none absolute left-2 top-0 mb-0 w-full max-w-[80%] origin-[0_0] translate-y-1/2 truncate px-1 leading-[1.6] text-heading-muted transition-all duration-200 ease-out peer-focus:w-fit peer-focus:-translate-y-2 peer-focus:scale-[0.8] peer-focus:bg-white peer-focus:text-heading peer-aria-[invalid=true]:text-error-text peer-data-[active=true]:w-fit peer-data-[active=true]:-translate-y-2 peer-data-[active=true]:scale-[0.8] peer-data-[active=true]:bg-white motion-reduce:transition-none"
      >
        {placeholder}
      </label>
    </div>
  );
};
