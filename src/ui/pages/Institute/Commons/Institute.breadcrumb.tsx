import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components';
import { AppRoutes } from '@/constants';
import type { IDictionary, IInstituteDetails } from '@/types';

type InstituteBreadcrumbProps = IInstituteDetails & IDictionary;

const InstituteBreadcrumb = (props: InstituteBreadcrumbProps) => {
  const { institute, dictionary } = props;
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
          <BreadcrumbLink href={AppRoutes.Global.Institutes.Search('province', institute.province.toString())}>
            {dictionary(`Global.Province.${institute.province}` as any)}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="overflow-hidden">
          <BreadcrumbPage>
            {institute.name}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export { InstituteBreadcrumb };
