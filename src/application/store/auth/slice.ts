import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { StoreNameTypes } from '../enums';
import type { AuthState } from './types';

const initialState: AuthState = {
  rememberedEmail: undefined,
};

export const authSlice = createSlice({
  name: StoreNameTypes.AUTH,
  initialState,
  reducers: {
    setRememberedEmail: (state, action: PayloadAction<string>) => {
      state.rememberedEmail = action.payload;
    },
  },
});

export const authName = authSlice.name;
export const authReducer = authSlice.reducer;
export const { setRememberedEmail } = authSlice.actions;
export type AuthActionsWithPayload = typeof setRememberedEmail;
export type AuthActions = ReturnType<AuthActionsWithPayload>;
