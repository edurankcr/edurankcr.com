export function getBaseUrl(): string {
  const {
    NEXT_PUBLIC_APP_URL,
    VERCEL_ENV,
    VERCEL_PROJECT_PRODUCTION_URL,
    VERCEL_URL,
  } = process.env;

  if (NEXT_PUBLIC_APP_URL) {
    return NEXT_PUBLIC_APP_URL;
  }

  if (VERCEL_ENV === 'production' && VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (VERCEL_URL) {
    return `https://${VERCEL_URL}`;
  }

  return 'http://localhost:3000';
}
