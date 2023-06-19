import type { IStorageClient } from '@infrastructure/storage/storage_client';
import type { UserEntity } from '../../entities/auth/user_entity';
import type { IAuthRepository } from '../../interfaces/repositories/i_auth_repository';
import type { SignInParams } from './auth_params';

export class AuthUseCase {
  constructor(
    private readonly storage: IStorageClient,
    private readonly authRepo: IAuthRepository
  ) {}

  async signIn(params: SignInParams): Promise<UserEntity> {
    const response = await this.authRepo.signIn(params);
    if (response && params.rememberEmail) {
      await this.storage.remembers.add({ email: params.email });
    }

    return response;
  }

  async getById(id: string): Promise<UserEntity> {
    return this.authRepo.getById(id);
  }
}
