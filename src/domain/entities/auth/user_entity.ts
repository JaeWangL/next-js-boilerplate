import type { IUserAddressModel } from './address_model';

export interface IUserEntity {
  id: string;
  email: string;
  address: IUserAddressModel;
}

export interface IUserData {
  readonly id: string;
  readonly email: string;
  readonly address: IUserAddressModel;
}

export class UserEntity implements IUserEntity {
  private readonly _id: string;

  private readonly _email: string;

  private readonly _address: IUserAddressModel;

  constructor(params: IUserData) {
    this._id = params.id;
    this._email = params.email;
    this._address = params.address;
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get address(): IUserAddressModel {
    return this._address;
  }
}
