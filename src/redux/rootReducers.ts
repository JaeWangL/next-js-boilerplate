import { combineReducers } from '@reduxjs/toolkit';
import { userName, userReducer } from './user/slice';

export const rootReducers = combineReducers({
  [userName]: userReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
