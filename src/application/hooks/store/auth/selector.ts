import type { AuthState } from '@application/store/auth/types';
import { useAppSelector } from '../use_redux';

export type AuthSelector = {
  auth: AuthState;
};

export function useAuthSelector(): AuthSelector {
  const auth = useAppSelector((state) => state.auth);

  return {
    auth,
  };
}
