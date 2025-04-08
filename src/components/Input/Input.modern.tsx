'use client';

import { IconUpload } from '@tabler/icons-react';
import type { InputHTMLAttributes } from 'react';
import { useMemo, useRef } from 'react';
import * as React from 'react';

export type InputProps = {
  labelText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  ref,
  type = 'text',
  value = '',
  id,
  placeholder,
  disabled,
  ...props
}: InputProps & { ref?: any }) => {
  const getMemoIsActive = useMemo(() => {
    if (type === 'date') {
      return true;
    }
    return !!value;
  }, [type, value]);

  return (
    <div className="relative w-full input--modern">
      <input
        id={id}
        ref={ref}
        type={type}
        value={value}
        data-active={getMemoIsActive}
        disabled={disabled}
        className="peer block h-[48px] min-h-[auto] w-full rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] text-text-primary outline-none read-only:cursor-not-allowed hover:placeholder:opacity-100 focus:placeholder:opacity-100 disabled:cursor-not-allowed disabled:grayscale peer-focus:text-primary-foreground aria-[invalid=true]:bg-background-error-weak data-[active=true]:placeholder:opacity-100 disabled:cursor-not-allowed disabled:grayscale disabled:bg-background-secondary"
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
    <div className="relative w-full input--modern">
      <textarea
        id={id}
        ref={ref}
        value={value}
        rows={rows}
        data-active={getMemoIsActive}
        disabled={disabled}
        className="peer block h-[140px] max-h-[166px] min-h-[66px] w-full rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] text-text-primary outline-none read-only:cursor-not-allowed hover:placeholder:opacity-100 focus:placeholder:opacity-100 disabled:cursor-not-allowed disabled:grayscale peer-focus:text-primary-foreground aria-[invalid=true]:bg-background-error-weak data-[active=true]:placeholder:opacity-100 disabled:cursor-not-allowed disabled:grayscale disabled:bg-background-secondary"
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

type InputUploadAreaProps = {
  labelBoldText?: string;
  labelText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputUploadArea = ({
  ref,
  id,
  labelBoldText,
  labelText,
  onChange,
  ...props
}: InputUploadAreaProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
  const internalRef = useRef<HTMLInputElement>(null);
  const inputRef = (ref as React.RefObject<HTMLInputElement>) ?? internalRef;

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (!inputRef.current) {
      return;
    }

    const file = e.dataTransfer.files?.[0];
    const dataTransfer = new DataTransfer();
    if (file) {
      dataTransfer.items.add(file);
    }
    inputRef.current.files = dataTransfer.files;

    const event = {
      target: {
        files: dataTransfer.files,
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    onChange?.(event);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor={id}
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-border-interactive border-dashed rounded-lg cursor-pointer bg-background-secondary"
      >
        <div className="flex flex-col items-center justify-center gap-4 text-primary text-center text-sm">
          <IconUpload />
          <p className="mb-2">
            <span className="font-semibold">{labelBoldText}</span>
            <br />
            {labelText}
          </p>
          <p className="text-text-secondary font-semibold">
            JPEG, PNG, WEBP, GIF (max. 2MB)
          </p>
        </div>
        <input
          type="file"
          className="hidden"
          id={id}
          ref={inputRef}
          onChange={(e) => {
            onChange?.(e);
          }}
          {...props}
        />
      </label>
    </div>
  );
};

InputUploadArea.displayName = 'InputUploadArea';
