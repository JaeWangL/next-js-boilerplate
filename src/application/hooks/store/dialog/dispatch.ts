import type { OpenDialogPayload } from '@application/store/dialog/payloads';
import type { DialogActions } from '@application/store/dialog/slice';
import { closeDialog, openDialog } from '@application/store/dialog/slice';
import { useCallback } from 'react';
import { useAppDispatch } from '../use_redux';

export type DialogDispatch = {
  closeDialog: () => DialogActions;
  openDialog: (payload: OpenDialogPayload) => DialogActions;
};

export function useDialogDispatch(): DialogDispatch {
  const dispatch = useAppDispatch();

  const closeDialogDispatch = useCallback(() => dispatch(closeDialog()), []);

  const openDialogDispatch = useCallback(
    (payload: OpenDialogPayload) => dispatch(openDialog(payload)),
    []
  );

  return {
    closeDialog: closeDialogDispatch,
    openDialog: openDialogDispatch,
  };
}
