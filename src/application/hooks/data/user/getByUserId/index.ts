import type { UserInfoDTO } from '@data/dtos/user';
import { getByUserId } from '@data/repositories/user';
import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

export function useGetUserByUserId(
  userId: string
): UseQueryResult<UserInfoDTO, unknown> {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getByUserId(userId),
  });
}
