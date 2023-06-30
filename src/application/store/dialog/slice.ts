import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { StoreNameTypes } from '../enums';
import type { OpenDialogPayload } from './payloads';
import type { DialogState } from './types';

const initialState: DialogState = {
  isOpen: false,
};

export const dialogSlice = createSlice({
  name: StoreNameTypes.DIALOG,
  initialState,
  reducers: {
    openDialog(state, { payload }: PayloadAction<OpenDialogPayload>) {
      state.isOpen = true;
      state.data = {
        message: payload.message,
        title: payload.title,
        buttons: payload.buttons,
      };
    },
    closeDialog(state) {
      state.isOpen = false;
      state.data = undefined;
    },
  },
});

export const dialogName = dialogSlice.name;
export const dialogReducer = dialogSlice.reducer;
export const { closeDialog, openDialog } = dialogSlice.actions;
export type DialogActionsWithPayload = typeof closeDialog | typeof closeDialog;
export type DialogActions = ReturnType<DialogActionsWithPayload>;
