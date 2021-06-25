import { UserDto } from '@/dtos';

export type SignInFailedPayload = {
  error: Error;
};

export type SignInRequestPayload = {
  email: string;
  password: string;
};

export type SignInSucceedPayload = {
  user: UserDto;
};
