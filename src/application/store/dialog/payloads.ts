import type { DialogButtonModel } from './types';

export type OpenDialogPayload = {
  message: string;
  title?: string;
  buttons: DialogButtonModel[];
};
