import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components';
import { AppRoutes } from '@/constants';
import type { IDictionary, InstituteProps } from '@/types';

type BreadcrumbProps = InstituteProps & IDictionary;

export const InstituteBreadcrumb = (props: BreadcrumbProps) => {
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
            {dictionary(`Helpers.Province.${institute.province}` as any)}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            {institute.name}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
