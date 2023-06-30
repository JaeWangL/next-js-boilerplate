'use client';

import { useDialogDispatch } from '@application/hooks/store/dialog/dispatch';
import { useCallback } from 'react';

function HomePage(): JSX.Element {
  const { openDialog } = useDialogDispatch();

  const onTest = useCallback((): void => {
    openDialog({
      message: 'dasd',
      buttons: [
        {
          text: 'Ok',
          onClick: () => console.log('asdasd'),
        },
      ],
    });
  }, []);

  return (
    <main>
      <p>Hello</p>
      <button onClick={onTest}>asdad</button>
    </main>
  );
}

export default HomePage;
