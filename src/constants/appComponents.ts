import type { ICons } from '@/types';

export type NavbarItem = {
  titleKey: string;
  link: string;
} & ICons;

export type NavbarSection = {
  titleKey: string;
  link?: string;
  items: NavbarItem[];
} & ICons;

export const SETTINGS_SECTIONS: Record<string, NavbarSection> = {
  account: {
    titleKey: 'Navbar.Personal.title',
    link: '/settings',
    iconName: 'user',
    items: [],
  },
  about: {
    titleKey: 'Navbar.Security.title',
    iconName: 'shieldLock',
    link: '/settings/security',
    items: [],
  },
};

export const NAVBAR_SECTIONS: Record<string, NavbarSection> = {
  explore: {
    titleKey: 'Navbar.Explore.title',
    iconName: 'zoom',
    items: [
      { titleKey: 'Navbar.Explore.universities', iconName: 'school', link: '#' },
      { titleKey: 'Navbar.Explore.professors', iconName: 'chalkboard', link: '#' },
      { titleKey: 'Navbar.Explore.rankings', iconName: 'chartBar', link: '#' },
      { titleKey: 'Navbar.Explore.advanced_search', iconName: 'filter', link: '#' },
    ],
  },
  saved: {
    titleKey: 'Navbar.Saved.title',
    iconName: 'star',
    items: [
      { titleKey: 'Navbar.Saved.professors', iconName: 'star', link: '#' },
      { titleKey: 'Navbar.Saved.universities', iconName: 'building', link: '#' },
      { titleKey: 'Navbar.Saved.searches', iconName: 'history', link: '#' },
    ],
  },
  reviews: {
    titleKey: 'Navbar.Reviews.title',
    iconName: 'pencilPlus',
    items: [
      { titleKey: 'Navbar.Reviews.write', iconName: 'pencilPlus', link: '#' },
      { titleKey: 'Navbar.Reviews.mine', iconName: 'notes', link: '#' },
      { titleKey: 'Navbar.Reviews.pending', iconName: 'hourglass', link: '#' },
    ],
  },
};

export const FOOTER_SECTIONS: Record<string, NavbarSection> = {
  explore: {
    titleKey: 'Navbar.Explore.title',
    iconName: 'zoom',
    items: [
      { titleKey: 'Navbar.Explore.universities', iconName: 'school', link: '#' },
      { titleKey: 'Navbar.Explore.professors', iconName: 'chalkboard', link: '#' },
      { titleKey: 'Navbar.Explore.rankings', iconName: 'trophy', link: '#' },
      { titleKey: 'Navbar.Explore.provinces', iconName: 'map', link: '#' },
    ],
  },
  account: {
    titleKey: 'Navbar.Account.title',
    iconName: 'user',
    items: [
      { titleKey: 'Navbar.Account.profile', iconName: 'user', link: '#' },
      { titleKey: 'Navbar.Account.favorites', iconName: 'star', link: '#' },
      { titleKey: 'Navbar.Account.reviews', iconName: 'message', link: '#' },
      { titleKey: 'Navbar.Account.support', iconName: 'help', link: '#' },
      { titleKey: 'Navbar.Account.settings', iconName: 'settings', link: '#' },
    ],
  },
  about: {
    titleKey: 'Navbar.About.title',
    iconName: 'building',
    items: [
      { titleKey: 'Navbar.About.company', iconName: 'building', link: '#' },
      { titleKey: 'Navbar.About.mission', iconName: 'target', link: '#' },
      { titleKey: 'Navbar.About.contact', iconName: 'mail', link: '#' },
    ],
  },
  community: {
    titleKey: 'Navbar.Community.title',
    iconName: 'pencilPlus',
    items: [
      { titleKey: 'Navbar.Community.help_center', iconName: 'helpCircle', link: '#' },
      { titleKey: 'Navbar.Community.become_moderator', iconName: 'pencilPlus', link: '#' },
    ],
  },
};
