'use server';

import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'abcdefghijklmnop';
const COOKIE_NAME = process.env.NEXT_PUBLIC_JWT_COOKIE_NAME || 'jwt';

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge: 60 * 60 * 2, // 2 hours
};

function getSecretKey() {
  return new TextEncoder().encode(JWT_SECRET);
}

export async function saveTokenCookie(token: string) {
  const cookieStore = await cookies();

  try {
    await jwtVerify(token, getSecretKey());
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
    await jwtVerify(token, getSecretKey());
    return true;
  } catch (error) {
    console.error('JWT verification error:', error);
    return false;
  }
}

export async function getPayloadFromCookie<T = unknown>(): Promise<T | null> {
  const token = await getTokenFromCookie();
  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return payload as T;
  } catch {
    await deleteTokenCookie();
    return null;
  }
}
