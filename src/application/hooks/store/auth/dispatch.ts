import type { AuthActions } from '@application/store/auth/slice';
import { setRememberedEmail } from '@application/store/auth/slice';
import { useCallback } from 'react';
import { useAppDispatch } from '../use_redux';

export type AuthDispatch = {
  setRememberedEmail: (email: string) => AuthActions;
};

export function useAuthDispatch(): AuthDispatch {
  const dispatch = useAppDispatch();

  const setRememberedEmailDispatch = useCallback(
    (email: string) => dispatch(setRememberedEmail(email)),
    []
  );

  return {
    setRememberedEmail: setRememberedEmailDispatch,
  };
}
