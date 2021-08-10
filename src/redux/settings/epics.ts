import { Epic } from 'redux-observable';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { RootState } from '../rootReducers';
import { setMobile, SettingsActions } from './slice';

export const changeMobile$: Epic<SettingsActions, SettingsActions, RootState> = (action$) =>
  of(typeof window === 'undefined').pipe(
    filter((undefinedWindow) => !undefinedWindow),
    switchMap(() => fromEvent(window, 'resize')),
    debounceTime(300),
    map(() => setMobile({ isMobile: window.innerWidth < 768 })),
    distinctUntilChanged(),
  );

export default [changeMobile$];
