import { Epic } from 'redux-observable';
import { fromEvent, of, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { setMobile, SettingsActions } from './slice';

export const changeMobile$: Epic = (action$: Observable<SettingsActions>) =>
  of(typeof window === 'undefined').pipe(
    filter((undefinedWindow) => !undefinedWindow),
    switchMap(() => fromEvent(window, 'resize')),
    debounceTime(300),
    map(() => setMobile({ isMobile: window.innerWidth < 768 })),
    distinctUntilChanged(),
  );

export default [changeMobile$];
