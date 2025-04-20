import React from 'react';

import { AppRoutes } from '@/constants';
import type { ITranslations, SearchResponse } from '@/types';
import { getFullName } from '@/utils';

import { GlobalSearchInputResultsContainer } from './Results.container';
import { GlobalSearchInputResultsEmpty } from './Results.empty';
import { GlobalSearchInputResultsContentItem } from './Results.item';

type GlobalSearchInputResultsContentProps = SearchResponse & ITranslations;

const GlobalSearchInputResultsContent = (params: GlobalSearchInputResultsContentProps) => {
  const { meta, results, dictionary } = params;

  const hasResults = meta.allCount > 0;

  if (!hasResults) {
    return <GlobalSearchInputResultsEmpty dictionary={dictionary} />;
  }

  return (
    <GlobalSearchInputResultsContainer>
      {results.institutions && results.institutions.map(institute => (
        <GlobalSearchInputResultsContentItem
          key={institute.institutionId}
          iconName="institute"
          title={institute.name}
          subtitle={dictionary('Input.Search.Results.institute_desc', {
            type: dictionary(`Global.Institute.${institute.type}`),
            province: dictionary(`Global.Province.${institute.province}`),
          })}
          overall={dictionary('Input.Search.Results.overall', {
            overall: institute.overallAverage,
            total: institute.reviewCount,
          })}
          href={AppRoutes.Global.Institutes.Profile(institute.institutionId)}
        />
      ))}
      {results.teachers && results.teachers.map(teacher => (
        <GlobalSearchInputResultsContentItem
          key={teacher.teacherId}
          iconName="teacher"
          title={getFullName(teacher.name, teacher.lastName)}
          subtitle={dictionary('Input.Search.Results.teacher_desc')}
          overall={dictionary('Input.Search.Results.overall', {
            overall: teacher.overallAverage,
            total: teacher.reviewCount,
          })}
          href={AppRoutes.Global.Teachers.Profile(teacher.teacherId)}
        />
      ))}
    </GlobalSearchInputResultsContainer>
  );
};

export { GlobalSearchInputResultsContent };
