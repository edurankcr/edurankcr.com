export function getMainType(pathname: string): { type: 'largeForm' | 'form' | 'default'; background: 'static' | 'images' } {
  if (['/settings', '/settings/security'].includes(pathname)) {
    return {
      type: 'largeForm',
      background: 'static',
    };
  }

  if (['/login', '/register'].includes(pathname)) {
    return {
      type: 'form',
      background: 'images',
    };
  }

  const staticFormPaths = [
    '/forgot-password',
    '/forgot-password/sent',
    '/reset-password',
    '/verify-email',
    '/verify-email/request',
    '/verify-email/sent',
    '/verify-email/change',
  ];

  const dynamicFormPatterns = [
    /^\/institute\/[0-9a-fA-F-]{36}\/review$/,
  ];

  if (staticFormPaths.includes(pathname) || dynamicFormPatterns.some(pattern => pattern.test(pathname))) {
    return {
      type: 'form',
      background: 'static',
    };
  }

  return {
    type: 'default',
    background: 'static',
  };
}

export function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

export function getRelativeTime(formatter: any, date: string): string {
  const utcDate = new Date(date);
  const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(utcDate.getTime() - timezoneOffset);
  return formatter.relativeTime(localDate);
}

export function getExperienceText(text: string): string {
  return text.length > 180 ? `${text.slice(0, 180)}...` : text;
}

export function getExperienceAverage(max: number, ratings: number[]): number {
  if (ratings.length === 0 || max === 0) {
    return 0;
  }
  const sum = ratings.reduce((acc, rating) => acc + rating, 0);
  const avg = sum / ratings.length;
  const normalized = (avg / max) * 5;
  return Number.parseFloat(normalized.toFixed(1));
}

export function getAvatarUrl(avatarUrl: string | null, userName: string): string {
  return avatarUrl || `https://api.dicebear.com/9.x/thumbs/svg?seed=${userName}&radius=50&backgroundColor=abdae3`;
}

export function getAvatarSize(variant: string | null): any {
  switch (variant) {
    case 'sm':
      return {
        width: 32,
        height: 32,
      };
    case 'md':
      return {
        width: 48,
        height: 48,
      };
    default:
      return {
        width: 32,
        height: 32,
      };
  }
}

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getDelay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function getBirthdate(birthDate: string | null, formatter: any): string {
  if (!birthDate) {
    return '';
  }
  const date = new Date(birthDate);
  return `${formatter.relativeTime(date)} (${formatter.dateTime(date)})`;
}

export function getBiography(biography: string | null): string {
  if (!biography) {
    return '';
  }
  return biography.length > 180 ? `${biography.slice(0, 180)}...` : biography;
}

export function getEmail(email: string | null, newEmail: string | null, isVerified: boolean): string {
  if (!email) {
    return '';
  }
  if (newEmail && !isVerified) {
    return `${email} (${newEmail})`;
  }
  return email;
}
