import { UserDto } from '@/dtos';

export type SignInFailedPayload = {
  errorMsg: string;
};

export type SignInRequestPayload = {
  email: string;
  password: string;
};

export type SignInSucceedPayload = {
  user: UserDto;
};
