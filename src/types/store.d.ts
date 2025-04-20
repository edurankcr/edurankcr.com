export type JwtPayload = {
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
  isEmailConfirmed: boolean;
  newEmail: string | null;
  birthDate: string;
  avatarUrl: string | null;
  biography: string;
  createdAt: string;
  updatedAt: string;
};

export type IUser = {
  user: User | null;
};
