import type { UserEntity } from '../../entities/auth/user_entity';
import type { SignInParams } from '../../useCases/auth/auth_params';

export interface IAuthRepository {
  signIn(input: SignInParams): Promise<UserEntity>;
  getById(id: string): Promise<UserEntity>;
}
