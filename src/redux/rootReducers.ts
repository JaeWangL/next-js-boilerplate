import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user/slice';

export const rootReducer = combineReducers({
  user: userReducer,
});

export const rootReducers = (state: any, action: any): RootState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
