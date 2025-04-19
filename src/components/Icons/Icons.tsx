import { AppIcons } from '@/constants';
import type { ICons } from '@/types';

type IconsProps = {
  size?: number;
  className?: string;
} & ICons;

const Icons = ({ iconName, size = 24, className }: IconsProps) => {
  const IconComponent = AppIcons[iconName];
  return <IconComponent size={size} className={className} />;
};

export { Icons };
