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

export { postAuthentication };
