export type TokenPayload = {
  sub: string;
  given_name: string;
  family_name: string;
  jti: string;
  role: number;
  status: number;
  exp: number;
  iat: number;
};

export type Token = {
  token: string;
};

export type User = {
  name: string;
  lastName: string;
  userName: string;
  email: string;
  emailConfirmed: boolean;
  newEmail: string | null;
  birthDate: string;
  avatarUrl: string;
  biography: string;
  createdAt: string;
  updatedAt: string;
};

export type UserResponse = User & Token;
