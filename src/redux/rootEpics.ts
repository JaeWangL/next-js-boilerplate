import { combineEpics } from 'redux-observable';
import userEpics from './user/epics';

export const rootEpics = combineEpics(...userEpics);
