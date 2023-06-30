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
        <h2>Simple centered modal</h2>
      </Modal>
    </>
  );
}
