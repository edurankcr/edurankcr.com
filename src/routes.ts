export const Routes = {
  Global: {
    Home: '/',
    Password: {
      Request: '/password',
      Sent: '/password/password-sent',
      Reset: '/password/change',
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
      Request: '/email',
      Sent: '/email/verification-sent',
      Verify: '/email/verify',
    },
  },
};
