export const Routes = {
  Global: {
    ForgotPassword: '/reset-password',
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
