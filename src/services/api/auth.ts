import { Env, getTokenFromCookie } from '@services';
import axios from 'axios';

const api = axios.create({
  baseURL: Env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = await getTokenFromCookie();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export async function postAuthentication(identifier: string, password: string) {
  return await api.post('/auth/login', {
    Identifier: identifier,
    Password: password,
  });
}

export async function postRegister(
  name: string,
  lastName: string,
  userName: string,
  email: string,
  password: string,
  birthDate: Date,
) {
  return await api.post('/register', {
    Name: name,
    LastName: lastName,
    UserName: userName,
    Email: email,
    Password: password,
    BirthDate: birthDate,
  });
}

export async function postRequestEmailVerification(email: string) {
  return await api.post('/email/request', { Email: email });
}

export async function getVerifyEmail(token: string) {
  return await api.get('/email/verify', {
    params: { TokenId: token },
  });
}

export async function postForgotPassword(identifier: string) {
  return await api.post('/password/forgot', { Identifier: identifier });
}

export async function postResetPassword(tokenId: string, newPassword: string) {
  return await api.post('/password/reset', {
    TokenId: tokenId,
    NewPassword: newPassword,
  });
}
