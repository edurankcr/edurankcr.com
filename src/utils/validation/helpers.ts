const ALLOWED_EMAIL_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com', 'icloud.com', 'outlook.com'];

const MAX_AVATAR_SIZE = 5 * 1024 * 1024;

const ALLOWED_AVATAR_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
];

export const isValidEmailFormat = (email: string) => /^[\w.%+-]+@(?:[a-z0-9-]+\.)+[a-z]{2,}$/i.test(email);

export const isValidEmailDomain = (email: string) => {
  const domain = email.split('@').pop()?.toLowerCase();
  return domain ? ALLOWED_EMAIL_DOMAINS.includes(domain) : false;
};

export const isValidUsername = (username: string) => {
  const usernamePattern = /^(?!.*\.\.)(?!.*__)(?!.*\.$)(?!.*_$)[\w.]{1,30}$/;
  return usernamePattern.test(username);
};

export const isValidAge = (dateString: string): boolean => {
  const birthDate = new Date(dateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear
    = today.getMonth() > birthDate.getMonth()
      || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age >= 18 && age <= 100;
};

export const isValidAvatar = (file: File) => {
  const isValidSize = file.size <= MAX_AVATAR_SIZE;
  const isValidType = ALLOWED_AVATAR_TYPES.includes(file.type);
  return isValidSize && isValidType;
};
