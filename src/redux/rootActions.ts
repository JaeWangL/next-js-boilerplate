import { SettingsActions } from './settings/slice';
import { UserActions } from './user/slice';

export type RootActions = SettingsActions | UserActions;
