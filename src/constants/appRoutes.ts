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
      Profile: (instituteId: string) => `/institute/${instituteId}`,
      Search: (type: 'province' | 'query', value: string) => `/explore/institutes/search?${type}=${value}`,
    },
    Teachers: {
      Profile: (teacherId: string) => `/teacher/${teacherId}`,
    },
    Users: {
      Profile: (userName: string) => `/community/${userName}`,
    },
    Email: {
      VerifyChange: '/verify-email/change',
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
