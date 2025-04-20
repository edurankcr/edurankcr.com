import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components';
import { AppRoutes } from '@/constants';
import type { IDictionary, InstitutionDetailsResponse } from '@/types';

type InstituteBreadcrumbProps = {
  institution: InstitutionDetailsResponse['institution'];
} & IDictionary;

const InstituteBreadcrumb = (props: InstituteBreadcrumbProps) => {
  const { institution, dictionary } = props;
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={AppRoutes.Global.Institutes.Explore} asHome>
            {dictionary('Breadcrumb.home')}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={AppRoutes.Global.Institutes.Explore}>
            {dictionary('Breadcrumb.country')}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={AppRoutes.Global.Institutes.Search('province', institution.province.toString())}>
            {dictionary(`Global.Province.${institution.province}` as any)}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="overflow-hidden">
          <BreadcrumbPage>
            {institution.name}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export { InstituteBreadcrumb };
