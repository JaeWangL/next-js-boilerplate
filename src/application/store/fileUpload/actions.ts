import { StoreEnumZod } from '@application/store/constants';
import { createAction } from '@reduxjs/toolkit';

export const actionUploadRequest = createAction<{
  file: Blob;
}>(`${StoreEnumZod.enum.file_upload}/uploadRequest`);
export const actionUploadSuccess = createAction<{
  file: Blob;
}>(`${StoreEnumZod.enum.file_upload}/uploadSuccess`);
export const actionUploadFailure = createAction<{
  errorMessage: string;
}>(`${StoreEnumZod.enum.file_upload}/uploadFailure`);
