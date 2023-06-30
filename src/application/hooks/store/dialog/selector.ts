import type { DialogState } from '@application/store/dialog/types';
import { useAppSelector } from '../use_redux';

export type DialogSelector = {
  dialog: DialogState;
};

export function useDialogSelector(): DialogSelector {
  const dialog = useAppSelector((state) => state.dialog);

  return {
    dialog,
  };
}
