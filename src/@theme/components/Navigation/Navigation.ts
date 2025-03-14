import { createNavigation } from 'next-intl/navigation';

import { routing } from '../../services/routing';

const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

export { getPathname, Link, redirect, usePathname, useRouter };
