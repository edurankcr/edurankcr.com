export const AppRoutes = {
  Global: {
    Home: '/',
    Password: {
      Request: '/forgot-password',
      Sent: '/forgot-password/sent',
      Reset: '/reset-password',
    },
    Profile: (userName: string) => `/profile/${userName}`,
    Legal: {
      Terms: '/legal/terms',
      Privacy: '/legal/privacy',
    },
  },
  Auth: {
    Settings: {
      Main: '/settings',
      Security: '/settings/security',
      Privacy: '/settings/privacy',
      Notifications: '/settings/notifications',
      Preferences: '/settings/preferences',
      Help: '/settings/help',
    },
  },
  Guest: {
    Login: '/login',
    Register: '/register',
    Email: {
      Request: '/verify-email/request',
      Sent: '/verify-email/sent',
      Verify: '/verify-email',
    },
  },
} as const;
