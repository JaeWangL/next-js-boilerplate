/* eslint-disable import/no-anonymous-default-export */
import { AuthRepository } from '@data/repositories/auth_repository';
import type { IInfrastructures } from './infrastructures';

export interface IRepositories {
  auth: AuthRepository;
}

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    auth: new AuthRepository(),
  };
};
