export const AppRoutes = {
  Global: {
    Home: '/',
    Password: {
      Request: '/forgot-password',
      Sent: '/forgot-password/sent',
      Reset: '/reset-password',
    },
    Legal: {
      Terms: '/legal/terms',
      Privacy: '/legal/privacy',
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
