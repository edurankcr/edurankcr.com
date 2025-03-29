import axios from 'axios';

import { Env } from './env';

const api = axios.create({
  baseURL: Env.NEXT_PUBLIC_API_URL,
});

async function postAuthentication(Identifier: string, Password: string) {
  return await api.post('/auth/login', {
    Identifier,
    Password,
  });
}

async function postRegister(Name: string, LastName: string, UserName: string, Email: string, Password: string, BirthDate: Date) {
  return await api.post('/register', {
    Name,
    LastName,
    UserName,
    Email,
    Password,
    BirthDate,
  });
}

async function postRequestEmailVerification(Email: string) {
  return await api.post('/email/request', {
    Email,
  });
}

async function getVerifyEmail(token: string) {
  return await api.get('/email/verify', {
    params: {
      TokenId: token,
    },
  });
}

async function postForgotPassword(Identifier: string) {
  return await api.post('/password/forgot', {
    Identifier,
  });
}

async function postResetPassword(TokenId: string, NewPassword: string) {
  return await api.post('/password/reset', {
    TokenId,
    NewPassword,
  });
}

export { getVerifyEmail, postAuthentication, postForgotPassword, postRegister, postRequestEmailVerification, postResetPassword };
