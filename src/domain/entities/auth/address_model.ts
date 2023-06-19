export interface IUserAddressModel {
  address: string;
}

export interface IUserAddressData {
  readonly address1: string;
  readonly address2: string;
}

export class UserAddressModel implements IUserAddressModel {
  private readonly _address1: string;

  private readonly _address2: string;

  constructor(params: IUserAddressData) {
    this._address1 = params.address1;
    this._address2 = params.address2;
  }

  get address(): string {
    return `${this._address1} ${this._address2}`;
  }
}
