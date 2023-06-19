/* eslint-disable import/no-anonymous-default-export */
import { AuthUseCase } from '@domain/useCases/auth/auth_use_case';
import type { IInfrastructures } from './infrastructures';
import type { IRepositories } from './repositories';

export interface IUseCases {
  auth: AuthUseCase;
}

export default (
  infrastructure: IInfrastructures,
  repositories: IRepositories
): IUseCases => {
  return {
    auth: new AuthUseCase(infrastructure.storage, repositories.auth),
  };
};
