import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, mergeMap, map } from 'rxjs/operators';
import { isActionOf, ActionType } from 'typesafe-actions';
import { signInAsync } from '@/services';
import { RootState } from '../rootReducers';
import { signInFailed, signInRequest, signInSucceed, UserActionsWithPayload } from './slice';

export type UserAction = ActionType<UserActionsWithPayload>;

const signIn: Epic<UserAction, UserAction, RootState> = (action$) =>
  action$.pipe(
    filter(isActionOf(signInRequest)),
    mergeMap((action) =>
      from(signInAsync({ email: action.payload.email, password: action.payload.password })).pipe(
        map((response) => signInSucceed({ user: response })),
        catchError((error) => of(signInFailed({ error }))),
      ),
    ),
  );

export default [signIn];
