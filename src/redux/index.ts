import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import { RootActions } from './rootActions';
import { rootEpics } from './rootEpics';
import { rootReducers, RootState } from './rootReducers';

export interface EpicStore extends Store {
  epicTask?: any;
}

const makeStore: MakeStore<Store<RootState>> = () => {
  const epicMiddleware = createEpicMiddleware<RootActions, RootActions, RootState>();
  const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(epicMiddleware)));

  (store as EpicStore).epicTask = epicMiddleware.run(rootEpics);

  return store;
};

export const wrapper = createWrapper<Store<RootState>>(makeStore);
