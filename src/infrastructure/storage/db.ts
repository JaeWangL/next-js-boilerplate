import type { Table } from 'dexie';
import Dexie from 'dexie';
import type { DBRememberModel } from './models/remember_model';

export class DexieClient extends Dexie {
  remembers!: Table<DBRememberModel>;

  constructor() {
    super('jwDatabase');
    this.version(1).stores({
      // TODO: Type-safe
      remembers: '++id, email',
    });
  }
}
