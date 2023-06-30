import { combineReducers } from '@reduxjs/toolkit';
import { authName, authReducer } from './auth/slice';
import { dialogName, dialogReducer } from './dialog/slice';

// TODO: Support Redux SSR (https://github.com/kirill-konshin/next-redux-wrapper/issues/547)
export const rootReducer = combineReducers({
  [dialogName]: dialogReducer,
  [authName]: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
