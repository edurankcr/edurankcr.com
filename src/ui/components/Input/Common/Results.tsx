import { useQuery } from '@tanstack/react-query';

import { getSearch } from '@/services';
import type { GlobalSearchContentResponse, ITranslations } from '@/types';

import { GlobalSearchInputResultsContent } from './Results.content';
import { GlobalSearchInputResultsError } from './Results.error';
import { GlobalSearchInputResultsSkeleton } from './Results.skeleton';

type GlobalSearchInputResultsProps = {
  query: string | null;
} & ITranslations;

const GlobalSearchInputResults = (params: GlobalSearchInputResultsProps) => {
  const { query, dictionary } = params;

  const { data, isLoading, error } = useQuery<GlobalSearchContentResponse>({
    queryKey: ['global-search', query],
    queryFn: async () => {
      if (!query) {
        return null;
      }
      const response = await getSearch({ Type: 'all', Name: query });
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  if (error) {
    return <GlobalSearchInputResultsError dictionary={dictionary} />;
  }

  if ((!error && isLoading) || !data) {
    return <GlobalSearchInputResultsSkeleton />;
  }

  return (
    <GlobalSearchInputResultsContent
      institutes={data.institutes}
      teachers={data.teachers}
      dictionary={dictionary}
    />
  );
};

export { GlobalSearchInputResults };
