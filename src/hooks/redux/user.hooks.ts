import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducers';
import { UserAction } from '@/redux/user/epics';
import { SignInRequestPayload } from '@/redux/user/payloads';
import { signInRequest, UserState } from '@/redux/user/slice';

export interface UserStore {
  user: UserState;
  signIn: (payload: SignInRequestPayload) => UserAction;
}

export const useUserStore = (): UserStore => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const signInDispatch = useCallback((payload: SignInRequestPayload) => dispatch(signInRequest(payload)), [dispatch]);

  return {
    user,
    signIn: signInDispatch,
  };
};
