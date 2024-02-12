import type { PayloadAction } from '@reduxjs/toolkit';
import { all, put, takeLatest } from 'redux-saga/effects';

import { actionUploadFailure, actionUploadRequest, actionUploadSuccess } from './actions';

function* handleFileUpload(action: PayloadAction<{ file: Blob }>): Generator {
  const { file } = action.payload;

  try {
    yield put(actionUploadSuccess({ file }));
  } catch (e) {
    // @ts-ignore
    yield put(actionUploadFailure({ errorMessage: e.message }));
  }
}

export function* watchFileUploadSaga(): Generator {
  yield all([takeLatest(actionUploadRequest, handleFileUpload)]);
}
