/* eslint-disable import/no-anonymous-default-export */
import { StorageClient } from '@infrastructure/storage/storage_client';

export interface IInfrastructures {
  storage: StorageClient;
}

export default (): IInfrastructures => {
  return {
    storage: new StorageClient(),
  };
};
