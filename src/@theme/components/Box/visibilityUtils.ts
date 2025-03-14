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

export { getVisibilityClasses };
export type { Breakpoint };
