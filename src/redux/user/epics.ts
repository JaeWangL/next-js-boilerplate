import { Epic } from 'redux-observable';
import { from, of, Observable } from 'rxjs';
import { catchError, filter, mergeMap, map } from 'rxjs/operators';
import { signInAsync } from '@/services';
import { signInFailed, signInRequest, signInSucceed, UserActions } from './slice';

// MARK: `Epic` will be replaced with `Epic<UserActions, UserActions, RootState>`
// But, in combineEpics inside `rootEpics`, Type-error is caused because each epics have different action types
export const signIn$: Epic = (action$: Observable<UserActions>) =>
  action$.pipe(
    filter(signInRequest.match),
    mergeMap((action) =>
      from(signInAsync({ email: action.payload.email, password: action.payload.password })).pipe(
        map((response) => signInSucceed({ user: response })),
        catchError((error) => of(signInFailed({ error }))),
      ),
    ),
  );

export default [signIn$];
