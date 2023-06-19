import type { Table } from 'dexie';
import { DexieClient } from './db';
import type { DBRememberModel } from './models/remember_model';

export interface IStorageClient {
  remembers: Table<DBRememberModel>;
}

export class StorageClient implements IStorageClient {
  private readonly _storage: DexieClient;

  constructor() {
    this._storage = new DexieClient();
  }

  get remembers(): Table<DBRememberModel> {
    return this._storage.remembers;
  }
}
