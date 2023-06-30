import type { UserInfoDTO } from '../user';

export type SignInInput = {
  email: string;
  password: string;
};

export type SignInDTO = {
  accessToken: string;
  refreshToken: string;
  user: UserInfoDTO;
};
