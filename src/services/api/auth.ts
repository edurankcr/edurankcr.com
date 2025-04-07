import axios from 'axios';

import { getTokenFromCookie } from '@/services';
import { Env } from '@/services/config/env';

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

export async function putUserProfile({
  Name,
  LastName,
  UserName,
  BirthDate,
  Biography,
}: {
  Name?: string;
  LastName?: string;
  UserName?: string;
  BirthDate?: Date;
  Biography?: string;
}) {
  return await api.put('/profile/update', {
    Name,
    LastName,
    UserName,
    BirthDate,
    Biography,
  });
}

export async function putRequestEmailChange(NewEmail: string) {
  return await api.put('/profile/change-email', { NewEmail });
}

export async function deleteRequestEmailChange() {
  return await api.delete('/profile/change-email');
}

export async function getVerifyEmailChange(token: string) {
  return await api.get('/profile/verify-change-email', {
    params: { token },
  });
}

export async function putUserAvatar(Avatar: File) {
  const formData = new FormData();
  formData.append('Avatar', Avatar);

  return await api.put('/profile/change-avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
