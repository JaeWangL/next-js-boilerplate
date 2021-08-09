import { combineEpics } from 'redux-observable';
import settingsEpics from './settings/epics';
import userEpics from './user/epics';

export const rootEpics = combineEpics(...settingsEpics, ...userEpics);
