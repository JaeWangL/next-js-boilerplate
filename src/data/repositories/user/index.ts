import { axiosInstance } from '@infrastructure/network';
import { pathToUrl } from '@infrastructure/network/helpers';
import type { UserInfoDTO } from '../../dtos/user';
import { userApi } from '../constants';

export async function getByUserId(userId: string): Promise<UserInfoDTO> {
  const res = await axiosInstance.get<UserInfoDTO>(
    pathToUrl(userApi.getByUserId, {
      userId,
    })
  );

  return res.data;
}
