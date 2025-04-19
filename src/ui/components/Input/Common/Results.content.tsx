import { AppRoutes } from '@/constants';
import type { GlobalSearchContentResponse, ITranslations } from '@/types';
import { getFullName } from '@/utils';

import { GlobalSearchInputResultsContainer } from './Results.container';
import { GlobalSearchInputResultsEmpty } from './Results.empty';
import { GlobalSearchInputResultsContentItem } from './Results.item';

type GlobalSearchInputResultsContentProps = GlobalSearchContentResponse & ITranslations;

const GlobalSearchInputResultsContent = (params: GlobalSearchInputResultsContentProps) => {
  const { institutes, teachers, dictionary } = params;
  const hasResults = institutes.length > 0 || teachers.length > 0;

  if (!hasResults) {
    return <GlobalSearchInputResultsEmpty dictionary={dictionary} />;
  }

  return (
    <GlobalSearchInputResultsContainer>
      {institutes.length > 0 && institutes.map(institute => (
        <GlobalSearchInputResultsContentItem
          key={institute.instituteId}
          iconName="institute"
          title={institute.name}
          subtitle={dictionary('Input.Search.Results.institute_desc', {
            type: dictionary(`Global.Institute.${institute.type}`),
            province: dictionary(`Global.Province.${institute.province}`),
          })}
          href={AppRoutes.Global.Institutes.Profile(institute.instituteId)}
        />
      ))}
      {teachers.length > 0 && teachers.map(teacher => (
        <GlobalSearchInputResultsContentItem
          key={teacher.teacherId}
          iconName="teacher"
          title={getFullName(teacher.name, teacher.lastName)}
          subtitle={dictionary('Input.Search.Results.teacher_desc')}
          href={AppRoutes.Global.Teachers.Profile(teacher.teacherId)}
        />
      ))}
    </GlobalSearchInputResultsContainer>
  );
};

export { GlobalSearchInputResultsContent };
