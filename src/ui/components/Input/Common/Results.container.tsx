import { Box, Stack } from '@/components';
import type { IChildren } from '@/types';

type GlobalSearchInputResultsProps = IChildren;

const GlobalSearchInputResultsContainer = (params: GlobalSearchInputResultsProps) => {
  const { children } = params;
  return (
    <Box position="absolute" width="full" overflow="hidden" bgBackground="white" boxShadow={200} className="top-10 pt-12 pb-4 rounded-br-lg rounded-bl-lg">
      <Stack
        gap="lg"
        overflow="hidden"
        justifyContent="start"
        className="px-4 overflow-y-auto scrollbar-hide max-h-[calc((42px+1rem)*3)] "
      >
        {children}
      </Stack>
    </Box>
  );
};

export { GlobalSearchInputResultsContainer };
