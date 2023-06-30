import { axiosInstance } from '@infrastructure/network';
import type { AxiosResponse } from 'axios';
import type { SignInDTO, SignInInput } from '../../dtos/auth';

export async function signIn(input: SignInInput): Promise<SignInDTO> {
  const res = await axiosInstance.post<
    SignInDTO,
    AxiosResponse<SignInDTO>,
    SignInInput
  >('/signIn', input);

  return res.data;
}
