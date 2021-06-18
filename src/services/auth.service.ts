import { UserDto } from '@/dtos';

export const signInAsync = async (email: string, password: string): Promise<UserDto> => {
  return { id: 0, name: '', userName: '', email: '' } as UserDto;
};
