import { UserDto } from '@/dtos';

export const signInAuth = async (email: string, password: string): Promise<UserDto> => {
  return { id: 0, name: '', userName: '', email: '' } as UserDto;
};
