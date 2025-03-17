import type { CSSProperties, ReactElement, ReactNode } from 'react';
import React, { cloneElement, isValidElement } from 'react';

function getPreventGrowOverflow(children: ReactNode, isEnabled: boolean | null | undefined = false): ReactNode {
  if (!isEnabled) {
    return children;
  }

  // eslint-disable-next-line react/no-children-to-array
  const validChildren: ReactElement[] = React.Children.toArray(children)
    .filter(isValidElement) as ReactElement[];

  if (validChildren.length === 0) {
    return children;
  }

  return validChildren.map((child: ReactNode | any) => {
    // eslint-disable-next-line react/no-children-to-array
    const nestedChildren = React.Children.toArray(child.props.children).filter(isValidElement) as ReactElement[];
    const nestedChildCount = nestedChildren.length || 1; // Avoid division by zero

    // eslint-disable-next-line react/no-clone-element
    return cloneElement(child, {
      'data-grow': true,
      'style': {
        ...(child.props.style as CSSProperties || {}),
        '--group-child-width': `${100 / nestedChildCount}%`,
      },
    });
  });
}

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const tailwindBreakpoints: Record<Breakpoint, string> = {
  xs: 'max-sm',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const displayMapping: Record<string, string> = {
  'block': 'block',
  'flex': 'flex',
  'inline-flex': 'inline-flex',
  'grid': 'grid',
  'inline': 'inline',
  'inline-block': 'inline-block',
};

const getVisibilityClasses = (
  display: keyof typeof displayMapping = ' ',
  hiddenFrom?: Breakpoint,
  visibleFrom?: Breakpoint,
) => {
  const hiddenClass = hiddenFrom ? `${tailwindBreakpoints[hiddenFrom]}:hidden` : '';
  const visibleClass = visibleFrom ? `${tailwindBreakpoints[visibleFrom]}:${displayMapping[display]}` : '';

  return { hiddenClass, visibleClass };
};

export { getPreventGrowOverflow, getVisibilityClasses };
export type { Breakpoint };
