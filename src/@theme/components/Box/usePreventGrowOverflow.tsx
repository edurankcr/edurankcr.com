import type { CSSProperties, ReactElement, ReactNode } from 'react';
import React, { cloneElement, isValidElement } from 'react';

function usePreventGrowOverflow(children: ReactNode, isEnabled: boolean | null | undefined = false): ReactNode {
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

export { usePreventGrowOverflow };
