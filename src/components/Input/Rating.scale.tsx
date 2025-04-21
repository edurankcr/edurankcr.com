'use client';

import { IconStarFilled } from '@tabler/icons-react';
import { cx } from 'class-variance-authority';
import type { FC, HTMLAttributes } from 'react';
import { useState } from 'react';

import { Group, Stack, Text } from '@/components';
import type { ITranslations } from '@/types';

const STAR_COLORS = ['#A3A8FF', '#8791FF', '#6A7BFF', '#5271FF', '#5271FF'];

type RatingScaleProps = {
  placeholder?: string;
  value: number;
  onChange: (value: number) => void;
} & HTMLAttributes<HTMLDivElement> & ITranslations;

const RatingScale: FC<RatingScaleProps> = ({ placeholder, value, onChange, dictionary, ...rest }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const getBackgroundColor = (index: number) => {
    const active = hovered ?? value;
    return index < active ? STAR_COLORS[index] : '#E5E5E5';
  };

  return (
    <Stack gap="sm" className="p-3 rounded-md input--modern-holder" {...rest}>
      <Group preventGrowOverflow={false} width="full" gap="sm" justifyContent="between" flexWrap="nowrap">
        <Text weight="medium" color="secondary">
          {placeholder}
        </Text>
        <Text weight="medium" color="secondary" truncate>
          {dictionary(`Global.Rating.${hovered ?? value}`)}
        </Text>
      </Group>
      <Group
        className="justify-start md:justify-between"
        preventGrowOverflow={false}
        width="full"
        gap="sm"
        data-hover={hovered ?? undefined}
        onMouseLeave={() => setHovered(null)}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            data-index={index + 1}
            className="relative flex items-center justify-center size-8 cursor-pointer group"
            onMouseEnter={() => setHovered(index + 1)}
            onClick={() => onChange(index + 1)}
          >
            <div
              className={cx(
                'w-full h-full rounded-sm transition-colors',
              )}
              style={{
                backgroundColor: getBackgroundColor(index),
              }}
            />
            <IconStarFilled size={18} className="absolute text-white" />
          </div>
        ))}
      </Group>
    </Stack>
  );
};

export { RatingScale };
