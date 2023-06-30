'use client';

import 'react-responsive-modal/styles.css';
import { useDialogDispatch } from '@application/hooks/store/dialog/dispatch';
import { useDialogSelector } from '@application/hooks/store/dialog/selector';
import { useCallback } from 'react';
import { Modal } from 'react-responsive-modal';
import type { DialogProviderProps } from './types';

export function DialogProvider(props: DialogProviderProps): JSX.Element {
  const { children } = props;
  const { closeDialog } = useDialogDispatch();
  const { dialog } = useDialogSelector();

  const onCloseModal = useCallback((): void => {
    closeDialog();
  }, []);

  return (
    <>
      {children}
      <Modal open={dialog.isOpen} onClose={onCloseModal} center>
        <h6>{dialog.data?.title}</h6>
        <p>{dialog.data?.message}</p>
        {dialog.data?.buttons.map((b) => {
          return (
            <button key={b.text} onClick={b.onClick}>
              {b.text}
            </button>
          );
        })}
      </Modal>
    </>
  );
}
