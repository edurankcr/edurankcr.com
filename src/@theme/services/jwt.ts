'use server';

import type { JwtPayload } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

import { Env } from './env';

const JWT_SECRET = Env.JWT_SECRET || 'dev-secret';
const COOKIE_NAME = Env.NEXT_PUBLIC_JWT_COOKIE_NAME;

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: Env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge: 60 * 60 * 2,
};

export async function saveTokenCookie(token: string) {
  const cookieStore = await cookies();
  try {
    jwt.verify(token, JWT_SECRET);
    cookieStore.set(COOKIE_NAME, token, COOKIE_OPTIONS);
  } catch {
    await deleteTokenCookie();
  }
}

export async function deleteTokenCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getTokenFromCookie(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value || null;
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function getPayloadFromCookie<T = JwtPayload>(): Promise<T | null> {
  const token = await getTokenFromCookie();
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, JWT_SECRET) as T;
  } catch {
    await deleteTokenCookie();
    return null;
  }
}
