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
    Institutes: {
      Explore: '/explore/institutes',
      Search: (type: 'province' | 'query', value: string) => `/explore/institutes/search?${type}=${value}`,
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
    Email: {
      VerifyChange: '/verify-email/change',
    },
    Add: {
      Institute: '/add/institute',
      Teacher: '/add/teacher',
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
