import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetMobilePayload } from './payloads';

export type SettingsState = {
  isMobile: boolean;
};

const initialState: SettingsState = {
  isMobile: false,
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMobile: (state, { payload }: PayloadAction<SetMobilePayload>) => {
      state.isMobile = payload.isMobile;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.settings,
      };
    },
  },
});

export const settingsName = slice.name;
export const settingsReducer = slice.reducer;
export const { setMobile } = slice.actions;
export type SettingsActionsWithPayload = typeof setMobile;
export type SettingsActions = ReturnType<SettingsActionsWithPayload>;
