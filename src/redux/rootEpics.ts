import { combineEpics } from 'redux-observable';
import settingsEpics from './settings/epics';
import userEpics from './user/epics';

// @ts-ignore
// MARK: Unnecessary type error
export const rootEpics = combineEpics(...settingsEpics, ...userEpics);
