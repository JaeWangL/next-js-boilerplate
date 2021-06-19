import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDto } from '@/dtos';
import { SignInFailedPayload, SignInRequestPayload, SignInSucceedPayload } from './payloads';

export type UserState = {
  isLoading: boolean;
  currentUser?: UserDto;
  errorMsg?: string;
};

const initialState: UserState = {
  isLoading: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInRequest: (state, { payload }: PayloadAction<SignInRequestPayload>) => {
      state.isLoading = true;
    },
    signInSucceed: (state, { payload }: PayloadAction<SignInSucceedPayload>) => {
      state.isLoading = false;
      state.currentUser = payload.user;
    },
    signInFailed: (state, { payload }: PayloadAction<SignInFailedPayload>) => {
      state.isLoading = false;
      state.errorMsg = payload.errorMsg;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    },
  },
});

export const userReducer = slice.reducer;
export const { signInFailed, signInRequest, signInSucceed } = slice.actions;
export type UserActionsWithPayload = typeof signInFailed | typeof signInRequest | typeof signInSucceed;
