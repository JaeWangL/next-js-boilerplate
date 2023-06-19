import { UserAddressModel } from '@domain/entities/auth/address_model';
import { UserEntity } from '@domain/entities/auth/user_entity';
import type { IAuthRepository } from '@domain/interfaces/repositories/i_auth_repository';
import type { SignInParams } from '@domain/useCases/auth/auth_params';
import type { UserInfoDTO } from '../dtos/auth_dtos';

export class AuthRepository implements IAuthRepository {
  async signIn(input: SignInParams): Promise<UserEntity> {
    const response: UserInfoDTO = {
      id: '1',
      email: 't@t.com',
      address1: 'Republic of Korea',
      address2: 'Busan',
    };

    return this.mapToModel(response);
  }

  async getById(id: string): Promise<UserEntity> {
    const response: UserInfoDTO = {
      id: '1',
      email: 't@t.com',
      address1: 'Republic of Korea',
      address2: 'Busan',
    };

    return this.mapToModel(response);
  }

  private mapToModel(dto: UserInfoDTO): UserEntity {
    return new UserEntity({
      id: dto.id,
      email: dto.email,
      address: new UserAddressModel({
        address1: dto.address1,
        address2: dto.address2,
      }),
    });
  }
}
