import { SignInInput, UserDto } from '@/dtos';

export const signInAsync = async (data: SignInInput): Promise<UserDto> => {
  return { id: 0, name: '', userName: '', email: '' } as UserDto;
};
