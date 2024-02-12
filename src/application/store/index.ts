import { watchFileUploadSaga } from '@application/store/fileUpload/sagas';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper-future';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { fileUploadName, fileUploadReducer } from './fileUpload/slice';

// Define root saga
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([watchFileUploadSaga()]);
}

// Define store object
const rootReducer = combineReducers({
  [fileUploadName]: fileUploadReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
const makeStore = () => store;

// Define type for dispatch and state
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create Redux Wrapper for SSR
export const wrapper = createWrapper<AppStore>(makeStore);
