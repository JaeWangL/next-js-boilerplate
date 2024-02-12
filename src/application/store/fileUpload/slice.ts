import { StoreEnumZod } from '@application/store/constants';
import { actionUploadFailure, actionUploadRequest, actionUploadSuccess } from '@application/store/fileUpload/actions';
import type { ReduxFileUploadState } from '@application/store/fileUpload/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper-future';

const initialState: ReduxFileUploadState = {
  file: null,
  errorMessage: null,
  progress: 0,
};

const fileUploadSlice = createSlice({
  name: StoreEnumZod.enum.file_upload,
  initialState,
  reducers: {
    changeProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    reset: (_state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Hydrate Actions for SSR
      .addCase(HYDRATE, (state, action) => ({
        ...state,
        // @ts-ignore
        ...action.payload[StoreEnum.BOKJI_FILTER],
      }))
      // Upload Actions
      .addCase(actionUploadRequest, (state) => {
        state.progress = 1;
      })
      .addCase(actionUploadSuccess, (state, action) => {
        state.file = action.payload.file;
        state.errorMessage = null;
        state.progress = 100;
      })
      .addCase(actionUploadFailure, (state, action) => {
        state.file = null;
        state.errorMessage = action.payload.errorMessage;
        state.progress = 0;
      });
  },
});

export const fileUploadActions = fileUploadSlice.actions;
export const fileUploadName = fileUploadSlice.name;
export const fileUploadReducer = fileUploadSlice.reducer;
