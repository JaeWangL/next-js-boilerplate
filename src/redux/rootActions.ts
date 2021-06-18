import { ActionType } from 'typesafe-actions';
import { UserActionsWithPayload } from './user/slice';

type UserActions = ActionType<UserActionsWithPayload>;
export type RootActions = UserActions;
