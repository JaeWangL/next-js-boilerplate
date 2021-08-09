import { combineReducers } from '@reduxjs/toolkit';
import { settingsName, settingsReducer } from './settings/slice';
import { userName, userReducer } from './user/slice';

export const rootReducers = combineReducers({
  [settingsName]: settingsReducer,
  [userName]: userReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
