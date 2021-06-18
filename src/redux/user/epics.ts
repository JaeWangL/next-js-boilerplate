import { ofType, Epic } from 'redux-observable';
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ActionType } from 'typesafe-actions';
import { signInAsync } from '@/services';
import { RootState } from '../rootReducers';
import { signInRequest, signInSucceed, UserActionsWithPayload } from './slice';

export type UserAction = ActionType<UserActionsWithPayload>;

const signIn: Epic<UserAction, UserAction, RootState> = (action$) =>
  action$.pipe(
    ofType(signInRequest.type),
    mergeMap(() => from(signInAsync('', '')).pipe(map((response) => signInSucceed({ user: response })))),
  );

export default [signIn];
